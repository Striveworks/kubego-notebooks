/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/migrate/migrate", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.migrateFile = void 0;
    var tslib_1 = require("tslib");
    /** Migrates the legacy message IDs within a single file. */
    function migrateFile(sourceCode, mapping) {
        var e_1, _a;
        var legacyIds = Object.keys(mapping);
        try {
            for (var legacyIds_1 = tslib_1.__values(legacyIds), legacyIds_1_1 = legacyIds_1.next(); !legacyIds_1_1.done; legacyIds_1_1 = legacyIds_1.next()) {
                var legacyId = legacyIds_1_1.value;
                var cannonicalId = mapping[legacyId];
                var pattern = new RegExp(escapeRegExp(legacyId), 'g');
                sourceCode = sourceCode.replace(pattern, cannonicalId);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (legacyIds_1_1 && !legacyIds_1_1.done && (_a = legacyIds_1.return)) _a.call(legacyIds_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return sourceCode;
    }
    exports.migrateFile = migrateFile;
    /** Escapes special regex characters in a string. */
    function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlncmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvbWlncmF0ZS9taWdyYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7Ozs7SUFPSCw0REFBNEQ7SUFDNUQsU0FBZ0IsV0FBVyxDQUFDLFVBQWtCLEVBQUUsT0FBeUI7O1FBQ3ZFLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRXZDLEtBQXVCLElBQUEsY0FBQSxpQkFBQSxTQUFTLENBQUEsb0NBQUEsMkRBQUU7Z0JBQTdCLElBQU0sUUFBUSxzQkFBQTtnQkFDakIsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QyxJQUFNLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQzthQUN4RDs7Ozs7Ozs7O1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQVZELGtDQVVDO0lBRUQsb0RBQW9EO0lBQ3BELFNBQVMsWUFBWSxDQUFDLEdBQVc7UUFDL0IsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqIE1hcHBpbmcgYmV0d2VlbiBsZWdhY3kgbWVzc2FnZSBJRHMgYW5kIHRoZWlyIGNhbm5vbmljYWwgY291bnRlcnBhcnRzLiAqL1xuZXhwb3J0IHR5cGUgTWlncmF0aW9uTWFwcGluZyA9IHtcbiAgW2xlZ2FjeUlkOiBzdHJpbmddOiBzdHJpbmc7XG59O1xuXG4vKiogTWlncmF0ZXMgdGhlIGxlZ2FjeSBtZXNzYWdlIElEcyB3aXRoaW4gYSBzaW5nbGUgZmlsZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlRmlsZShzb3VyY2VDb2RlOiBzdHJpbmcsIG1hcHBpbmc6IE1pZ3JhdGlvbk1hcHBpbmcpIHtcbiAgY29uc3QgbGVnYWN5SWRzID0gT2JqZWN0LmtleXMobWFwcGluZyk7XG5cbiAgZm9yIChjb25zdCBsZWdhY3lJZCBvZiBsZWdhY3lJZHMpIHtcbiAgICBjb25zdCBjYW5ub25pY2FsSWQgPSBtYXBwaW5nW2xlZ2FjeUlkXTtcbiAgICBjb25zdCBwYXR0ZXJuID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAobGVnYWN5SWQpLCAnZycpO1xuICAgIHNvdXJjZUNvZGUgPSBzb3VyY2VDb2RlLnJlcGxhY2UocGF0dGVybiwgY2Fubm9uaWNhbElkKTtcbiAgfVxuXG4gIHJldHVybiBzb3VyY2VDb2RlO1xufVxuXG4vKiogRXNjYXBlcyBzcGVjaWFsIHJlZ2V4IGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcuICovXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcbn1cbiJdfQ==