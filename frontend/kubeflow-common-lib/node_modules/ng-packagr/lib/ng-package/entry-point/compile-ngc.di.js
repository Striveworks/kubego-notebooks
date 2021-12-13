"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPILE_NGC_PROVIDERS = exports.COMPILE_NGC_TRANSFORM = exports.COMPILE_NGC_TOKEN = void 0;
const injection_js_1 = require("injection-js");
const transform_di_1 = require("../../graph/transform.di");
const compile_ngc_transform_1 = require("./compile-ngc.transform");
const stylesheet_processor_di_1 = require("../../styles/stylesheet-processor.di");
exports.COMPILE_NGC_TOKEN = new injection_js_1.InjectionToken(`ng.v5.compileNgcTransform`);
exports.COMPILE_NGC_TRANSFORM = transform_di_1.provideTransform({
    provide: exports.COMPILE_NGC_TOKEN,
    useFactory: compile_ngc_transform_1.compileNgcTransformFactory,
    deps: [stylesheet_processor_di_1.STYLESHEET_PROCESSOR_TOKEN],
});
exports.COMPILE_NGC_PROVIDERS = [stylesheet_processor_di_1.STYLESHEET_PROCESSOR, exports.COMPILE_NGC_TRANSFORM];
//# sourceMappingURL=compile-ngc.di.js.map