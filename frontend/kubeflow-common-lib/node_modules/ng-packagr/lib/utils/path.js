"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureUnixPath = void 0;
const nodePath = require("path");
const PATH_REGEXP = new RegExp('\\' + nodePath.win32.sep, 'g');
const ensureUnixPathCache = new Map();
const IS_WINDOWS = process.platform === 'win32';
exports.ensureUnixPath = IS_WINDOWS
    ? (path) => {
        if (!path) {
            return null;
        }
        const cachePath = ensureUnixPathCache.get(path);
        if (cachePath) {
            return cachePath;
        }
        // we use a regex instead of the character literal due to a bug in some versions of node.js
        // the path separator needs to be preceded by an escape character
        const normalizedPath = path.replace(PATH_REGEXP, nodePath.posix.sep);
        ensureUnixPathCache.set(path, normalizedPath);
        return normalizedPath;
    }
    : (path) => path;
//# sourceMappingURL=path.js.map