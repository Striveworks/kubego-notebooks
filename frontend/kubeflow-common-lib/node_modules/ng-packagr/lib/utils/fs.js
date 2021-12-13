"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyFile = exports.exists = exports.rmdir = exports.stat = exports.mkdir = exports.access = exports.writeFile = exports.readFile = void 0;
const util_1 = require("util");
const fs = require("fs");
const path_1 = require("path");
exports.readFile = fs.promises.readFile;
exports.writeFile = fs.promises.writeFile;
exports.access = fs.promises.access;
exports.mkdir = fs.promises.mkdir;
exports.stat = fs.promises.stat;
exports.rmdir = fs.promises.rmdir;
async function exists(path) {
    try {
        await exports.access(path, fs.constants.F_OK);
        return true;
    }
    catch {
        return false;
    }
}
exports.exists = exists;
const cpFile = util_1.promisify(fs.copyFile);
async function copyFile(src, dest) {
    const dir = path_1.dirname(dest);
    if (!(await exists(dir))) {
        await exports.mkdir(dir, { recursive: true });
    }
    await cpFile(src, dest, fs.constants.COPYFILE_FICLONE);
}
exports.copyFile = copyFile;
//# sourceMappingURL=fs.js.map