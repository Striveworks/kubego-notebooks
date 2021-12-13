"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StylesheetProcessor = exports.CssUrl = void 0;
const browserslist = require("browserslist");
const path_1 = require("path");
const findCacheDirectory = require("find-cache-dir");
const os_1 = require("os");
const worker_threads_1 = require("worker_threads");
const log = require("../utils/log");
var CssUrl;
(function (CssUrl) {
    CssUrl["inline"] = "inline";
    CssUrl["none"] = "none";
})(CssUrl = exports.CssUrl || (exports.CssUrl = {}));
class StylesheetProcessor {
    constructor(basePath, cssUrl, styleIncludePaths) {
        this.basePath = basePath;
        this.cssUrl = cssUrl;
        this.styleIncludePaths = styleIncludePaths;
        this.cachePath = findCacheDirectory({ name: 'ng-packagr-styles' }) || os_1.tmpdir();
    }
    process(filePath) {
        if (!this.worker) {
            this.worker = new worker_threads_1.Worker(path_1.join(__dirname, './stylesheet-processor-worker.js'));
        }
        if (!this.browserslistData) {
            log.debug(`determine browserslist for ${this.basePath}`);
            this.browserslistData = browserslist(undefined, { path: this.basePath });
        }
        const workerOptions = {
            filePath,
            basePath: this.basePath,
            cssUrl: this.cssUrl,
            styleIncludePaths: this.styleIncludePaths,
            browserslistData: this.browserslistData,
            cachePath: this.cachePath,
        };
        const ioChannel = new worker_threads_1.MessageChannel();
        try {
            const signal = new Int32Array(new SharedArrayBuffer(4));
            this.worker.postMessage({ signal, port: ioChannel.port1, workerOptions }, [ioChannel.port1]);
            // Sleep until signal[0] is 0
            Atomics.wait(signal, 0, 0);
            const { css, warnings, error } = worker_threads_1.receiveMessageOnPort(ioChannel.port2).message;
            if (error) {
                throw new Error(error);
            }
            warnings.forEach(msg => log.warn(msg));
            return css;
        }
        finally {
            ioChannel.port1.close();
            ioChannel.port2.close();
            this.worker.unref();
        }
    }
}
exports.StylesheetProcessor = StylesheetProcessor;
//# sourceMappingURL=stylesheet-processor.js.map