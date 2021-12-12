"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NgccProcessor = void 0;
const ngcc_1 = require("@angular/compiler-cli/ngcc");
const fs_1 = require("fs");
const path = require("path");
const log = require("../utils/log");
const nodes_1 = require("../ng-package/nodes");
const child_process_1 = require("child_process");
const crypto_1 = require("crypto");
const fs_2 = require("../utils/fs");
// Transform a package and its typings when NGTSC is resolving a module.
class NgccProcessor {
    constructor(ngccProcessingCache, projectPath, compilerOptions, entryPoints) {
        this.ngccProcessingCache = ngccProcessingCache;
        this.projectPath = projectPath;
        this.compilerOptions = compilerOptions;
        this.entryPoints = entryPoints;
        this.propertiesToConsider = ['es2015', 'browser', 'module', 'main'];
        this.skipProcessing = false;
        this._entryPointsUrl = this.entryPoints.map(({ url }) => nodes_1.ngUrl(url));
        const { baseUrl } = this.compilerOptions;
        this._nodeModulesDirectory = this.findNodeModulesDirectory(baseUrl);
    }
    /** Process the entire node modules tree. */
    async process() {
        // Under Bazel when running in sandbox mode parts of the filesystem is read-only.
        if (process.env.BAZEL_TARGET) {
            return;
        }
        // Only allow running this during the first run.
        if (this.skipProcessing) {
            return;
        }
        // Skip if node_modules are read-only
        const corePackage = this.tryResolvePackage('@angular/core', this._nodeModulesDirectory);
        if (corePackage && isReadOnlyFile(corePackage)) {
            return;
        }
        // Perform a ngcc run check to determine if an initial execution is required.
        // If a run hash file exists that matches the current package manager lock file and the
        // project's tsconfig, then an initial ngcc run has already been performed.
        let runHashFilePath;
        const runHashBasePath = path.join(this._nodeModulesDirectory, '.ng-packagr-ngcc');
        const projectBasePath = path.join(this._nodeModulesDirectory, '..');
        try {
            let lockData;
            let lockFile = 'yarn.lock';
            try {
                lockData = await fs_2.readFile(path.join(projectBasePath, lockFile));
            }
            catch {
                lockFile = 'package-lock.json';
                lockData = await fs_2.readFile(path.join(projectBasePath, lockFile));
            }
            let ngccConfigData;
            try {
                ngccConfigData = await fs_2.readFile(path.join(projectBasePath, 'ngcc.config.js'));
            }
            catch {
                ngccConfigData = '';
            }
            const relativeTsconfigPath = path.relative(projectBasePath, this.projectPath);
            const tsconfigData = await fs_2.readFile(this.projectPath);
            // Generate a hash that represents the state of the package lock file and used tsconfig
            const runHash = crypto_1.createHash('sha256')
                .update(lockData)
                .update(lockFile)
                .update(ngccConfigData)
                .update(tsconfigData)
                .update(relativeTsconfigPath)
                .digest('hex');
            // The hash is used directly in the file name to mitigate potential read/write race
            // conditions as well as to only require a file existence check
            runHashFilePath = path.join(runHashBasePath, runHash + '.lock');
            // If the run hash lock file exists, then ngcc was already run against this project state
            if (await fs_2.exists(runHashFilePath)) {
                this.skipProcessing = true;
                return;
            }
        }
        catch {
            // Any error means an ngcc execution is needed
        }
        const { status, error } = child_process_1.spawnSync(process.execPath, [
            require.resolve('@angular/compiler-cli/ngcc/main-ngcc.js'),
            '--source' /** basePath */,
            this._nodeModulesDirectory,
            '--properties' /** propertiesToConsider */,
            ...this.propertiesToConsider,
            '--first-only' /** compileAllFormats */,
            '--create-ivy-entry-points' /** createNewEntryPointFormats */,
            '--async',
            '--tsconfig' /** tsConfigPath */,
            this.projectPath,
            '--use-program-dependencies',
            '--typings-only' /** typingsOnly */,
        ], {
            stdio: ['inherit', process.stderr, process.stderr],
        });
        this.skipProcessing = true;
        if (status !== 0) {
            const errorMessage = (error === null || error === void 0 ? void 0 : error.message) || '';
            throw new Error(errorMessage + `NGCC failed${errorMessage ? ', see above' : ''}.`);
        }
        // ngcc was successful so if a run hash was generated, write it for next time
        if (runHashFilePath) {
            try {
                if (!fs_1.existsSync(runHashBasePath)) {
                    await fs_2.mkdir(runHashBasePath, { recursive: true });
                }
                await fs_2.writeFile(runHashFilePath, '');
            }
            catch {
                // Errors are non-fatal
            }
        }
    }
    /** Process a module and it's depedencies. */
    processModule(moduleName, resolvedModule) {
        const resolvedFileName = resolvedModule.resolvedFileName;
        if (!resolvedFileName ||
            moduleName.startsWith('.') ||
            this.ngccProcessingCache.hasProcessed(moduleName) ||
            this._entryPointsUrl.includes(nodes_1.ngUrl(moduleName))) {
            // Skip when module is unknown, relative, an entrypoint or already processed.
            return;
        }
        const packageJsonPath = this.tryResolvePackage(moduleName, resolvedFileName);
        if (!packageJsonPath) {
            // add it to processed so the second time round we skip this.
            this.ngccProcessingCache.markProcessed(moduleName);
            return;
        }
        // If the package.json is read only we should skip calling NGCC.
        // With Bazel when running under sandbox the filesystem is read-only.
        if (isReadOnlyFile(packageJsonPath)) {
            // add it to processed so the second time round we skip this.
            this.ngccProcessingCache.markProcessed(moduleName);
            return;
        }
        ngcc_1.process({
            basePath: this._nodeModulesDirectory,
            targetEntryPointPath: path.dirname(packageJsonPath),
            compileAllFormats: false,
            typingsOnly: true,
            propertiesToConsider: this.propertiesToConsider,
            createNewEntryPointFormats: true,
            logger: this._logger,
            tsConfigPath: this.projectPath,
        });
        this.ngccProcessingCache.markProcessed(moduleName);
    }
    /**
     * Try resolve a package.json file from the resolved .d.ts file.
     */
    tryResolvePackage(moduleName, resolvedFileName) {
        try {
            return require.resolve(`${moduleName}/package.json`, {
                paths: [resolvedFileName],
            });
        }
        catch {
            // if it fails this might be a deep import which doesn't have a package.json
            // Ex: @angular/compiler/src/i18n/i18n_ast/package.json
            // or local libraries which don't reside in node_modules
            const packageJsonPath = path.resolve(resolvedFileName, '../package.json');
            return fs_1.existsSync(packageJsonPath) ? packageJsonPath : undefined;
        }
    }
    findNodeModulesDirectory(startPoint) {
        let current = startPoint;
        while (path.dirname(current) !== current) {
            const nodePath = path.join(current, 'node_modules');
            if (fs_1.existsSync(nodePath)) {
                return nodePath;
            }
            current = path.dirname(current);
        }
        throw new Error(`Cannot locate the 'node_modules' directory.`);
    }
}
exports.NgccProcessor = NgccProcessor;
class NgccLogger {
    constructor() {
        this.level = ngcc_1.LogLevel.info;
    }
    debug(...args) {
        log.debug(args.join(' '));
    }
    info(...args) {
        log.info(args.join(' '));
    }
    warn(...args) {
        log.warn(args.join(' '));
    }
    error(...args) {
        log.error(args.join(' '));
    }
}
function isReadOnlyFile(fileName) {
    try {
        fs_1.accessSync(fileName, fs_1.constants.W_OK);
        return false;
    }
    catch {
        return true;
    }
}
//# sourceMappingURL=ngcc-processor.js.map