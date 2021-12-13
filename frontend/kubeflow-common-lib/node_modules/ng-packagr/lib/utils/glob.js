"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globFiles = void 0;
const glob = require("glob");
const util_1 = require("util");
const array_1 = require("./array");
const globPromise = util_1.promisify(glob);
async function globFiles(pattern, options) {
    const files = await Promise.all(array_1.toArray(pattern).map(p => globPromise(p, options)));
    return files.flatMap(x => x);
}
exports.globFiles = globFiles;
//# sourceMappingURL=glob.js.map