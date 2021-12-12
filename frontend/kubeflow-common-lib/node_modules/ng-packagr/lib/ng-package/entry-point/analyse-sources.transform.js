"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyseSourcesTransform = void 0;
const ts = require("typescript");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const nodes_1 = require("../nodes");
const cache_compiler_host_1 = require("../../ts/cache-compiler-host");
const log_1 = require("../../utils/log");
const path_1 = require("../../utils/path");
exports.analyseSourcesTransform = rxjs_1.pipe(operators_1.map(graph => {
    const entryPoints = graph.filter(nodes_1.isEntryPoint);
    const dirtyEntryPoints = entryPoints.filter(x => x.state !== 'done');
    for (const entryPoint of dirtyEntryPoints) {
        analyseEntryPoint(graph, entryPoint, entryPoints);
    }
    return graph;
}));
/**
 * Analyses an entrypoint, searching for TypeScript dependencies and additional resources (Templates and Stylesheets).
 *
 * @param graph Build graph
 * @param entryPoint Current entry point that should be analysed.
 * @param entryPoints List of all entry points.
 */
function analyseEntryPoint(graph, entryPoint, entryPoints) {
    const { oldPrograms, analysesSourcesFileCache, moduleResolutionCache } = entryPoint.cache;
    const oldProgram = oldPrograms && oldPrograms['analysis'];
    const { moduleId } = entryPoint.data.entryPoint;
    const packageNode = graph.find(nodes_1.isPackage);
    const primaryModuleId = packageNode.data.primary.moduleId;
    log_1.debug(`Analysing sources for ${moduleId}`);
    const tsConfigOptions = {
        ...entryPoint.data.tsConfig.options,
        skipLibCheck: true,
        noLib: true,
        noEmit: true,
        types: [],
        target: ts.ScriptTarget.Latest,
        strict: false,
    };
    const compilerHost = cache_compiler_host_1.cacheCompilerHost(graph, entryPoint, tsConfigOptions, moduleResolutionCache, undefined, analysesSourcesFileCache, false);
    const potentialDependencies = new Set();
    compilerHost.resolveTypeReferenceDirectives = (moduleNames, containingFile, redirectedReference, options) => {
        return moduleNames.map(moduleName => {
            if (!moduleName.startsWith('.')) {
                if (moduleName === primaryModuleId || moduleName.startsWith(`${primaryModuleId}/`)) {
                    potentialDependencies.add(moduleName);
                }
                return undefined;
            }
            const result = ts.resolveTypeReferenceDirective(moduleName, path_1.ensureUnixPath(containingFile), options, compilerHost, redirectedReference).resolvedTypeReferenceDirective;
            return result;
        });
    };
    compilerHost.resolveModuleNames = (moduleNames, containingFile, _reusedNames, redirectedReference, options) => {
        return moduleNames.map(moduleName => {
            if (!moduleName.startsWith('.')) {
                if (moduleName === primaryModuleId || moduleName.startsWith(`${primaryModuleId}/`)) {
                    potentialDependencies.add(moduleName);
                }
                return undefined;
            }
            const { resolvedModule } = ts.resolveModuleName(moduleName, path_1.ensureUnixPath(containingFile), options, compilerHost, moduleResolutionCache, redirectedReference);
            return resolvedModule;
        });
    };
    const program = ts.createProgram(entryPoint.data.tsConfig.rootNames, tsConfigOptions, compilerHost, oldProgram);
    log_1.debug(`tsc program structure is reused: ${oldProgram ? oldProgram.structureIsReused : 'No old program'}`);
    entryPoint.cache.oldPrograms = { ...entryPoint.cache.oldPrograms, ['analysis']: program };
    const entryPointsMapped = {};
    for (const dep of entryPoints) {
        entryPointsMapped[dep.data.entryPoint.moduleId] = dep;
    }
    for (const moduleName of potentialDependencies) {
        const dep = entryPointsMapped[moduleName];
        if (dep) {
            log_1.debug(`Found entry point dependency: ${moduleId} -> ${moduleName}`);
            if (moduleId === moduleName) {
                throw new Error(`Entry point ${moduleName} has a circular dependency on itself.`);
            }
            if (dep.some(n => entryPoint === n)) {
                throw new Error(`Entry point ${moduleName} has a circular dependency on ${moduleId}.`);
            }
            entryPoint.dependsOn(dep);
        }
        else {
            throw new Error(`Entry point ${moduleName} which is required by ${moduleId} doesn't exists.`);
        }
    }
}
//# sourceMappingURL=analyse-sources.transform.js.map