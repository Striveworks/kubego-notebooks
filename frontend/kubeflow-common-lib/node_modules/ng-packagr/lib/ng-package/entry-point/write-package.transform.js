"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writePackageTransform = void 0;
const path = require("path");
const ora = require("ora");
const transform_1 = require("../../graph/transform");
const color_1 = require("../../utils/color");
const path_1 = require("../../utils/path");
const fs_1 = require("../../utils/fs");
const log = require("../../utils/log");
const glob_1 = require("../../utils/glob");
const nodes_1 = require("../nodes");
const node_1 = require("../../graph/node");
const writePackageTransform = (options) => transform_1.transformFromPromise(async (graph) => {
    const spinner = ora({
        hideCursor: false,
        discardStdin: false,
    });
    const entryPoint = graph.find(nodes_1.isEntryPointInProgress());
    const ngEntryPoint = entryPoint.data.entryPoint;
    const ngPackageNode = graph.find(nodes_1.isPackage);
    const ngPackage = ngPackageNode.data;
    const { destinationFiles } = entryPoint.data;
    const ignorePaths = [
        '.gitkeep',
        '**/.DS_Store',
        '**/Thumbs.db',
        '**/node_modules/**',
        `${ngPackage.dest}/**`,
    ];
    if (ngPackage.assets.length && !ngEntryPoint.isSecondaryEntryPoint) {
        const assetFiles = [];
        // COPY ASSET FILES TO DESTINATION
        spinner.start('Copying assets');
        try {
            for (let asset of ngPackage.assets) {
                asset = path.join(ngPackage.src, asset);
                if (await fs_1.exists(asset)) {
                    const stats = await fs_1.stat(asset);
                    if (stats.isFile()) {
                        assetFiles.push(asset);
                        continue;
                    }
                    if (stats.isDirectory()) {
                        asset = path.join(asset, '**/*');
                    }
                }
                const files = await glob_1.globFiles(asset, {
                    ignore: ignorePaths,
                    cache: ngPackageNode.cache.globCache,
                    dot: true,
                    nodir: true,
                });
                if (files.length) {
                    assetFiles.push(...files);
                }
            }
            for (const file of assetFiles) {
                const relativePath = path.relative(ngPackage.src, file);
                const destination = path.resolve(ngPackage.dest, relativePath);
                const nodeUri = nodes_1.fileUrl(path_1.ensureUnixPath(file));
                let node = graph.get(nodeUri);
                if (!node) {
                    node = new node_1.Node(nodeUri);
                    graph.put(node);
                }
                entryPoint.dependsOn(node);
                await fs_1.copyFile(file, destination);
            }
        }
        catch (error) {
            spinner.fail();
            throw error;
        }
        spinner.succeed();
    }
    // 6. WRITE PACKAGE.JSON
    try {
        spinner.start('Writing package metadata');
        const relativeUnixFromDestPath = (filePath) => path_1.ensureUnixPath(path.relative(ngEntryPoint.destinationPath, filePath));
        const { enableIvy, compilationMode } = entryPoint.data.tsConfig.options;
        await writePackageJson(ngEntryPoint, ngPackage, {
            main: relativeUnixFromDestPath(destinationFiles.umd),
            module: relativeUnixFromDestPath(destinationFiles.fesm2015),
            es2015: relativeUnixFromDestPath(destinationFiles.fesm2015),
            esm2015: relativeUnixFromDestPath(destinationFiles.esm2015),
            fesm2015: relativeUnixFromDestPath(destinationFiles.fesm2015),
            typings: relativeUnixFromDestPath(destinationFiles.declarations),
            // Ivy doesn't generate metadata files
            metadata: enableIvy ? undefined : relativeUnixFromDestPath(destinationFiles.metadata),
            // webpack v4+ specific flag to enable advanced optimizations and code splitting
            sideEffects: ngEntryPoint.sideEffects,
        }, !!enableIvy, !!options.watch, compilationMode, spinner);
    }
    catch (error) {
        spinner.fail();
        throw error;
    }
    spinner.succeed();
    spinner.succeed(`Built ${ngEntryPoint.moduleId}`);
    return graph;
});
exports.writePackageTransform = writePackageTransform;
/**
 * Creates and writes a `package.json` file of the entry point used by the `node_module`
 * resolution strategies.
 *
 * #### Example
 *
 * A consumer of the entry point depends on it by `import {..} from '@my/module/id';`.
 * The module id `@my/module/id` will be resolved to the `package.json` file that is written by
 * this build step.
 * The properties `main`, `module`, `typings` (and so on) in the `package.json` point to the
 * flattened JavaScript bundles, type definitions, (...).
 *
 * @param entryPoint An entry point of an Angular package / library
 * @param additionalProperties Additional properties, e.g. binary artefacts (bundle files), to merge into `package.json`
 */
async function writePackageJson(entryPoint, pkg, additionalProperties, isIvy, isWatchMode, compilationMode, spinner) {
    var _a, _b, _c;
    log.debug('Writing package.json');
    // set additional properties
    const packageJson = { ...entryPoint.packageJson, ...additionalProperties };
    // read tslib version from `@angular/compiler` so that our tslib
    // version at least matches that of angular if we use require('tslib').version
    // it will get what installed and not the minimum version nor if it is a `~` or `^`
    // this is only required for primary
    if (!entryPoint.isSecondaryEntryPoint) {
        if (isWatchMode) {
            // Needed because of Webpack's 5 `cachemanagedpaths`
            // https://github.com/angular/angular-cli/issues/20962
            packageJson.version = `0.0.0-watch+${Date.now()}`;
        }
        if (!((_a = packageJson.peerDependencies) === null || _a === void 0 ? void 0 : _a.tslib) && !((_b = packageJson.dependencies) === null || _b === void 0 ? void 0 : _b.tslib)) {
            const { peerDependencies: angularPeerDependencies = {}, dependencies: angularDependencies = {}, } = require('@angular/compiler/package.json');
            const tsLibVersion = angularPeerDependencies.tslib || angularDependencies.tslib;
            if (tsLibVersion) {
                packageJson.dependencies = {
                    ...packageJson.dependencies,
                    tslib: tsLibVersion,
                };
            }
        }
        else if ((_c = packageJson.peerDependencies) === null || _c === void 0 ? void 0 : _c.tslib) {
            spinner.warn(color_1.colors.yellow(`'tslib' is no longer recommended to be used as a 'peerDependencies'. Moving it to 'dependencies'.`));
            packageJson.dependencies = {
                ...(packageJson.dependencies || {}),
                tslib: packageJson.peerDependencies.tslib,
            };
            delete packageJson.peerDependencies.tslib;
        }
    }
    // Verify non-peerDependencies as they can easily lead to duplicate installs or version conflicts
    // in the node_modules folder of an application
    const allowedList = pkg.allowedNonPeerDependencies.map(value => new RegExp(value));
    try {
        checkNonPeerDependencies(packageJson, 'dependencies', allowedList, spinner);
    }
    catch (e) {
        await fs_1.rmdir(entryPoint.destinationPath, { recursive: true });
        throw e;
    }
    // Removes scripts from package.json after build
    if (packageJson.scripts) {
        if (pkg.keepLifecycleScripts !== true) {
            spinner.info(`Removing scripts section in package.json as it's considered a potential security vulnerability.`);
            delete packageJson.scripts;
        }
        else {
            spinner.warn(color_1.colors.yellow(`You enabled keepLifecycleScripts explicitly. The scripts section in package.json will be published to npm.`));
        }
    }
    if (isIvy && !entryPoint.isSecondaryEntryPoint && compilationMode !== 'partial') {
        const scripts = packageJson.scripts || (packageJson.scripts = {});
        scripts.prepublishOnly =
            'node --eval "console.error(\'' +
                'ERROR: Trying to publish a package that has been compiled by Ivy in full compilation mode. This is not allowed.\\n' +
                'Please delete and rebuild the package with Ivy partial compilation mode, before attempting to publish.\\n' +
                '\')" ' +
                '&& exit 1';
    }
    // keep the dist package.json clean
    // this will not throw if ngPackage field does not exist
    delete packageJson.ngPackage;
    const packageJsonPropertiesToDelete = [
        'stylelint',
        'prettier',
        'browserslist',
        'devDependencies',
        'jest',
        'workspaces',
        'husky',
    ];
    for (const prop of packageJsonPropertiesToDelete) {
        if (prop in packageJson) {
            delete packageJson[prop];
            spinner.info(`Removing ${prop} section in package.json.`);
        }
    }
    packageJson.name = entryPoint.moduleId;
    await fs_1.writeFile(path.join(entryPoint.destinationPath, 'package.json'), JSON.stringify(packageJson, undefined, 2));
}
function checkNonPeerDependencies(packageJson, property, allowed, spinner) {
    if (!packageJson[property]) {
        return;
    }
    for (const dep of Object.keys(packageJson[property])) {
        if (allowed.some(regex => regex.test(dep))) {
            log.debug(`Dependency ${dep} is allowed in '${property}'`);
        }
        else {
            spinner.warn(color_1.colors.yellow(`Distributing npm packages with '${property}' is not recommended. Please consider adding ${dep} to 'peerDependencies' or remove it from '${property}'.`));
            throw new Error(`Dependency ${dep} must be explicitly allowed using the "allowedNonPeerDependencies" option.`);
        }
    }
}
//# sourceMappingURL=write-package.transform.js.map