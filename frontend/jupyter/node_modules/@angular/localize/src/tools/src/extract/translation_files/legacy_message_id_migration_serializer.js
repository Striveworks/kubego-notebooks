(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/translation_files/legacy_message_id_migration_serializer", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LegacyMessageIdMigrationSerializer = void 0;
    var tslib_1 = require("tslib");
    /**
     * A translation serializer that generates the mapping file for the legacy message ID migration.
     * The file is used by the `localize-migrate` script to migrate existing translation files from
     * the legacy message IDs to the canonical ones.
     */
    var LegacyMessageIdMigrationSerializer = /** @class */ (function () {
        function LegacyMessageIdMigrationSerializer(_diagnostics) {
            this._diagnostics = _diagnostics;
        }
        LegacyMessageIdMigrationSerializer.prototype.serialize = function (messages) {
            var _this = this;
            var hasMessages = false;
            var mapping = messages.reduce(function (output, message) {
                var e_1, _a;
                if (shouldMigrate(message)) {
                    try {
                        for (var _b = tslib_1.__values(message.legacyIds), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var legacyId = _c.value;
                            if (output.hasOwnProperty(legacyId)) {
                                _this._diagnostics.warn("Detected duplicate legacy ID " + legacyId + ".");
                            }
                            output[legacyId] = message.id;
                            hasMessages = true;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return output;
            }, {});
            if (!hasMessages) {
                this._diagnostics.warn('Could not find any legacy message IDs in source files while generating ' +
                    'the legacy message migration file.');
            }
            return JSON.stringify(mapping, null, 2);
        };
        return LegacyMessageIdMigrationSerializer;
    }());
    exports.LegacyMessageIdMigrationSerializer = LegacyMessageIdMigrationSerializer;
    /** Returns true if a message needs to be migrated. */
    function shouldMigrate(message) {
        return !message.customId && !!message.legacyIds && message.legacyIds.length > 0;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnYWN5X21lc3NhZ2VfaWRfbWlncmF0aW9uX3NlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL2V4dHJhY3QvdHJhbnNsYXRpb25fZmlsZXMvbGVnYWN5X21lc3NhZ2VfaWRfbWlncmF0aW9uX3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQVlBOzs7O09BSUc7SUFDSDtRQUNFLDRDQUFvQixZQUF5QjtZQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFHLENBQUM7UUFFakQsc0RBQVMsR0FBVCxVQUFVLFFBQXlCO1lBQW5DLGlCQXVCQztZQXRCQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sRUFBRSxPQUFPOztnQkFDOUMsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7O3dCQUMxQixLQUF1QixJQUFBLEtBQUEsaUJBQUEsT0FBTyxDQUFDLFNBQVUsQ0FBQSxnQkFBQSw0QkFBRTs0QkFBdEMsSUFBTSxRQUFRLFdBQUE7NEJBQ2pCLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQ0FDbkMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsa0NBQWdDLFFBQVEsTUFBRyxDQUFDLENBQUM7NkJBQ3JFOzRCQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOzRCQUM5QixXQUFXLEdBQUcsSUFBSSxDQUFDO3lCQUNwQjs7Ozs7Ozs7O2lCQUNGO2dCQUNELE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsRUFBRSxFQUE0QixDQUFDLENBQUM7WUFFakMsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ2xCLHlFQUF5RTtvQkFDekUsb0NBQW9DLENBQUMsQ0FBQzthQUMzQztZQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDSCx5Q0FBQztJQUFELENBQUMsQUEzQkQsSUEyQkM7SUEzQlksZ0ZBQWtDO0lBNkIvQyxzREFBc0Q7SUFDdEQsU0FBUyxhQUFhLENBQUMsT0FBc0I7UUFDM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7ybVQYXJzZWRNZXNzYWdlIGFzIFBhcnNlZE1lc3NhZ2V9IGZyb20gJ0Bhbmd1bGFyL2xvY2FsaXplJztcbmltcG9ydCB7RGlhZ25vc3RpY3N9IGZyb20gJy4uLy4uL2RpYWdub3N0aWNzJztcbmltcG9ydCB7VHJhbnNsYXRpb25TZXJpYWxpemVyfSBmcm9tICcuL3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXInO1xuXG5cbi8qKlxuICogQSB0cmFuc2xhdGlvbiBzZXJpYWxpemVyIHRoYXQgZ2VuZXJhdGVzIHRoZSBtYXBwaW5nIGZpbGUgZm9yIHRoZSBsZWdhY3kgbWVzc2FnZSBJRCBtaWdyYXRpb24uXG4gKiBUaGUgZmlsZSBpcyB1c2VkIGJ5IHRoZSBgbG9jYWxpemUtbWlncmF0ZWAgc2NyaXB0IHRvIG1pZ3JhdGUgZXhpc3RpbmcgdHJhbnNsYXRpb24gZmlsZXMgZnJvbVxuICogdGhlIGxlZ2FjeSBtZXNzYWdlIElEcyB0byB0aGUgY2Fub25pY2FsIG9uZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBMZWdhY3lNZXNzYWdlSWRNaWdyYXRpb25TZXJpYWxpemVyIGltcGxlbWVudHMgVHJhbnNsYXRpb25TZXJpYWxpemVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhZ25vc3RpY3M6IERpYWdub3N0aWNzKSB7fVxuXG4gIHNlcmlhbGl6ZShtZXNzYWdlczogUGFyc2VkTWVzc2FnZVtdKTogc3RyaW5nIHtcbiAgICBsZXQgaGFzTWVzc2FnZXMgPSBmYWxzZTtcbiAgICBjb25zdCBtYXBwaW5nID0gbWVzc2FnZXMucmVkdWNlKChvdXRwdXQsIG1lc3NhZ2UpID0+IHtcbiAgICAgIGlmIChzaG91bGRNaWdyYXRlKG1lc3NhZ2UpKSB7XG4gICAgICAgIGZvciAoY29uc3QgbGVnYWN5SWQgb2YgbWVzc2FnZS5sZWdhY3lJZHMhKSB7XG4gICAgICAgICAgaWYgKG91dHB1dC5oYXNPd25Qcm9wZXJ0eShsZWdhY3lJZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2RpYWdub3N0aWNzLndhcm4oYERldGVjdGVkIGR1cGxpY2F0ZSBsZWdhY3kgSUQgJHtsZWdhY3lJZH0uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3V0cHV0W2xlZ2FjeUlkXSA9IG1lc3NhZ2UuaWQ7XG4gICAgICAgICAgaGFzTWVzc2FnZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4pO1xuXG4gICAgaWYgKCFoYXNNZXNzYWdlcykge1xuICAgICAgdGhpcy5fZGlhZ25vc3RpY3Mud2FybihcbiAgICAgICAgICAnQ291bGQgbm90IGZpbmQgYW55IGxlZ2FjeSBtZXNzYWdlIElEcyBpbiBzb3VyY2UgZmlsZXMgd2hpbGUgZ2VuZXJhdGluZyAnICtcbiAgICAgICAgICAndGhlIGxlZ2FjeSBtZXNzYWdlIG1pZ3JhdGlvbiBmaWxlLicpO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShtYXBwaW5nLCBudWxsLCAyKTtcbiAgfVxufVxuXG4vKiogUmV0dXJucyB0cnVlIGlmIGEgbWVzc2FnZSBuZWVkcyB0byBiZSBtaWdyYXRlZC4gKi9cbmZ1bmN0aW9uIHNob3VsZE1pZ3JhdGUobWVzc2FnZTogUGFyc2VkTWVzc2FnZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gIW1lc3NhZ2UuY3VzdG9tSWQgJiYgISFtZXNzYWdlLmxlZ2FjeUlkcyAmJiBtZXNzYWdlLmxlZ2FjeUlkcy5sZW5ndGggPiAwO1xufVxuIl19