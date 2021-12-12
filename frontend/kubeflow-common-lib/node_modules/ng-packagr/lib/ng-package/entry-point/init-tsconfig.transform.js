"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTsConfigTransformFactory = void 0;
const transform_1 = require("../../graph/transform");
const nodes_1 = require("../nodes");
const tsconfig_1 = require("../../ts/tsconfig");
const initTsConfigTransformFactory = (defaultTsConfig) => transform_1.transformFromPromise(async (graph) => {
    // Initialize tsconfig for each entry point
    const entryPoints = graph.filter(nodes_1.isEntryPoint);
    tsconfig_1.initializeTsConfig(defaultTsConfig, entryPoints);
    return graph;
});
exports.initTsConfigTransformFactory = initTsConfigTransformFactory;
//# sourceMappingURL=init-tsconfig.transform.js.map