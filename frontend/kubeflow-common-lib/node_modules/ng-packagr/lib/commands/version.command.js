"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = void 0;
const rollup_1 = require("rollup");
const compiler_1 = require("@angular/compiler");
const typescript_1 = require("typescript");
/**
 * Prints version information.
 *
 * @stable
 */
const version = () => {
    console.log(`ng-packagr:            ` + require('../../package.json').version);
    console.log(`@angular/compiler:     ` + compiler_1.VERSION.full);
    console.log(`rollup:                ` + rollup_1.VERSION);
    console.log(`typescript:            ` + typescript_1.version);
};
exports.version = version;
//# sourceMappingURL=version.command.js.map