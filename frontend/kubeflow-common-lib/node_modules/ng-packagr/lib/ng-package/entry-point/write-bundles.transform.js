"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeBundlesTransform = void 0;
const ora = require("ora");
const transform_1 = require("../../graph/transform");
const nodes_1 = require("../nodes");
const downlevel_plugin_1 = require("../../flatten/downlevel-plugin");
const rollup_1 = require("../../flatten/rollup");
const writeBundlesTransform = (options) => transform_1.transformFromPromise(async (graph) => {
    const entryPoint = graph.find(nodes_1.isEntryPointInProgress());
    const { destinationFiles, entryPoint: ngEntryPoint, tsConfig } = entryPoint.data;
    const cache = entryPoint.cache;
    // Add UMD module IDs for dependencies
    const dependencyUmdIds = entryPoint
        .filter(nodes_1.isEntryPoint)
        .map(ep => ep.data.entryPoint)
        .reduce((prev, ep) => {
        prev[ep.moduleId] = ep.umdId;
        return prev;
    }, {});
    const { fesm2015, esm2015, umd } = destinationFiles;
    const opts = {
        sourceRoot: tsConfig.options.sourceRoot,
        amd: { id: ngEntryPoint.amdId },
        umdModuleIds: {
            ...ngEntryPoint.umdModuleIds,
            ...dependencyUmdIds,
        },
        entry: esm2015,
    };
    const spinner = ora({
        hideCursor: false,
        discardStdin: false,
    });
    try {
        spinner.start('Bundling to FESM2015');
        const rollupFESMCache = await rollup_1.rollupBundleFile({
            ...opts,
            moduleName: ngEntryPoint.moduleId,
            format: 'es',
            dest: fesm2015,
            cache: cache.rollupFESMCache,
        });
        spinner.succeed();
        if (options.watch) {
            cache.rollupFESMCache = rollupFESMCache;
            return;
        }
        spinner.start('Bundling to UMD');
        await rollup_1.rollupBundleFile({
            ...opts,
            moduleName: ngEntryPoint.umdId,
            entry: esm2015,
            format: 'umd',
            dest: umd,
            transform: downlevel_plugin_1.downlevelCodeWithTsc,
        });
        spinner.succeed();
    }
    catch (error) {
        spinner.fail();
        throw error;
    }
});
exports.writeBundlesTransform = writeBundlesTransform;
//# sourceMappingURL=write-bundles.transform.js.map