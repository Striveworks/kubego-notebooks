"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileNgcTransformFactory = void 0;
const path = require("path");
const ts = require("typescript");
const ora = require("ora");
const transform_1 = require("../../graph/transform");
const compile_source_files_1 = require("../../ngc/compile-source-files");
const ngcc_processor_1 = require("../../ngc/ngcc-processor");
const tsconfig_1 = require("../../ts/tsconfig");
const nodes_1 = require("../nodes");
const compileNgcTransformFactory = (StylesheetProcessor) => {
    return transform_1.transformFromPromise(async (graph) => {
        const spinner = ora({
            hideCursor: false,
            discardStdin: false,
        }).start(`Compiling TypeScript sources through NGC`);
        try {
            const entryPoint = graph.find(nodes_1.isEntryPointInProgress());
            const entryPoints = graph.filter(nodes_1.isEntryPoint);
            // Add paths mappings for dependencies
            const tsConfig = tsconfig_1.setDependenciesTsConfigPaths(entryPoint.data.tsConfig, entryPoints);
            // Compile TypeScript sources
            const { esm2015, declarations } = entryPoint.data.destinationFiles;
            const { basePath, cssUrl, styleIncludePaths } = entryPoint.data.entryPoint;
            const { moduleResolutionCache, ngccProcessingCache, stylesheetProcessor = new StylesheetProcessor(basePath, cssUrl, styleIncludePaths) } = entryPoint.cache;
            entryPoint.cache.stylesheetProcessor = stylesheetProcessor;
            const ngccProcessor = tsConfig.options.enableIvy
                ? new ngcc_processor_1.NgccProcessor(ngccProcessingCache, tsConfig.project, tsConfig.options, entryPoints)
                : undefined;
            if (ngccProcessor && !entryPoint.data.entryPoint.isSecondaryEntryPoint) {
                // Only run the async version of NGCC during the primary entrypoint processing.
                await ngccProcessor.process();
            }
            await compile_source_files_1.compileSourceFiles(graph, tsConfig, moduleResolutionCache, stylesheetProcessor, {
                outDir: path.dirname(esm2015),
                declarationDir: path.dirname(declarations),
                declaration: true,
                target: ts.ScriptTarget.ES2015,
            }, ngccProcessor);
        }
        catch (error) {
            spinner.fail();
            throw error;
        }
        spinner.succeed();
        return graph;
    });
};
exports.compileNgcTransformFactory = compileNgcTransformFactory;
//# sourceMappingURL=compile-ngc.transform.js.map