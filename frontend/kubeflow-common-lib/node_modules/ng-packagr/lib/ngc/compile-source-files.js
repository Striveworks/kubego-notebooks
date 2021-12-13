"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileSourceFiles = void 0;
const ng = require("@angular/compiler-cli");
const log = require("../utils/log");
const cache_compiler_host_1 = require("../ts/cache-compiler-host");
const nodes_1 = require("../ng-package/nodes");
const ngcc_transform_compiler_host_1 = require("../ts/ngcc-transform-compiler-host");
async function compileSourceFiles(graph, tsConfig, moduleResolutionCache, stylesheetProcessor, extraOptions, ngccProcessor) {
    log.debug(`ngc (v${ng.VERSION.full})`);
    const tsConfigOptions = { ...tsConfig.options, ...extraOptions };
    const entryPoint = graph.find(nodes_1.isEntryPointInProgress());
    let tsCompilerHost = cache_compiler_host_1.cacheCompilerHost(graph, entryPoint, tsConfigOptions, moduleResolutionCache, stylesheetProcessor);
    if (tsConfigOptions.enableIvy && ngccProcessor) {
        tsCompilerHost = ngcc_transform_compiler_host_1.ngccTransformCompilerHost(tsCompilerHost, tsConfigOptions, ngccProcessor, moduleResolutionCache);
    }
    // ng.CompilerHost
    const ngCompilerHost = ng.createCompilerHost({
        options: tsConfigOptions,
        tsHost: tsCompilerHost,
    });
    const scriptTarget = tsConfigOptions.target;
    const cache = entryPoint.cache;
    const oldProgram = (cache.oldPrograms && cache.oldPrograms[scriptTarget]);
    const ngProgram = ng.createProgram({
        rootNames: tsConfig.rootNames,
        options: tsConfigOptions,
        host: ngCompilerHost,
        oldProgram,
    });
    await ngProgram.loadNgStructureAsync();
    log.debug(`ngc program structure is reused: ${ngProgram ? ngProgram.getTsProgram().structureIsReused : 'No old program'}`);
    cache.oldPrograms = { ...cache.oldPrograms, [scriptTarget]: ngProgram };
    const allDiagnostics = [
        ...ngProgram.getTsOptionDiagnostics(),
        ...ngProgram.getNgOptionDiagnostics(),
        ...ngProgram.getTsSyntacticDiagnostics(),
        ...ngProgram.getTsSemanticDiagnostics(),
        ...ngProgram.getNgSemanticDiagnostics(),
        ...ngProgram.getNgStructuralDiagnostics(),
    ];
    // if we have an error we don't want to transpile.
    const hasError = ng.exitCodeFromResult(allDiagnostics) > 0;
    if (!hasError) {
        const emitFlags = tsConfigOptions.declaration ? tsConfig.emitFlags : ng.EmitFlags.JS;
        // certain errors are only emitted by a compilation hence append to previous diagnostics
        const { diagnostics } = ngProgram.emit({
            emitFlags,
        });
        allDiagnostics.push(...diagnostics);
    }
    if (allDiagnostics.length === 0) {
        return;
    }
    const exitCode = ng.exitCodeFromResult(allDiagnostics);
    const formattedDiagnostics = ng.formatDiagnostics(allDiagnostics);
    if (exitCode !== 0) {
        throw new Error(formattedDiagnostics);
    }
    else {
        log.msg(formattedDiagnostics);
    }
}
exports.compileSourceFiles = compileSourceFiles;
//# sourceMappingURL=compile-source-files.js.map