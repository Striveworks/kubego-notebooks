(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/translate/translation_files/translation_loader", ["require", "exports", "tslib"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TranslationLoader = void 0;
    var tslib_1 = require("tslib");
    /**
     * Use this class to load a collection of translation files from disk.
     */
    var TranslationLoader = /** @class */ (function () {
        function TranslationLoader(fs, translationParsers, duplicateTranslation, 
        /** @deprecated */ diagnostics) {
            this.fs = fs;
            this.translationParsers = translationParsers;
            this.duplicateTranslation = duplicateTranslation;
            this.diagnostics = diagnostics;
        }
        /**
         * Load and parse the translation files into a collection of `TranslationBundles`.
         *
         * @param translationFilePaths An array, per locale, of absolute paths to translation files.
         *
         * For each locale to be translated, there is an element in `translationFilePaths`. Each element
         * is an array of absolute paths to translation files for that locale.
         * If the array contains more than one translation file, then the translations are merged.
         * If allowed by the `duplicateTranslation` property, when more than one translation has the same
         * message id, the message from the earlier translation file in the array is used.
         * For example, if the files are `[app.xlf, lib-1.xlf, lib-2.xlif]` then a message that appears in
         * `app.xlf` will override the same message in `lib-1.xlf` or `lib-2.xlf`.
         *
         * @param translationFileLocales An array of locales for each of the translation files.
         *
         * If there is a locale provided in `translationFileLocales` then this is used rather than a
         * locale extracted from the file itself.
         * If there is neither a provided locale nor a locale parsed from the file, then an error is
         * thrown.
         * If there are both a provided locale and a locale parsed from the file, and they are not the
         * same, then a warning is reported.
         */
        TranslationLoader.prototype.loadBundles = function (translationFilePaths, translationFileLocales) {
            var _this = this;
            return translationFilePaths.map(function (filePaths, index) {
                var providedLocale = translationFileLocales[index];
                return _this.mergeBundles(filePaths, providedLocale);
            });
        };
        /**
         * Load all the translations from the file at the given `filePath`.
         */
        TranslationLoader.prototype.loadBundle = function (filePath, providedLocale) {
            var e_1, _a, e_2, _b;
            var fileContents = this.fs.readFile(filePath);
            var unusedParsers = new Map();
            try {
                for (var _c = tslib_1.__values(this.translationParsers), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var translationParser = _d.value;
                    var result = translationParser.analyze(filePath, fileContents);
                    if (!result.canParse) {
                        unusedParsers.set(translationParser, result);
                        continue;
                    }
                    var _e = translationParser.parse(filePath, fileContents, result.hint), parsedLocale = _e.locale, translations = _e.translations, diagnostics = _e.diagnostics;
                    if (diagnostics.hasErrors) {
                        throw new Error(diagnostics.formatDiagnostics("The translation file \"" + filePath + "\" could not be parsed."));
                    }
                    var locale = providedLocale || parsedLocale;
                    if (locale === undefined) {
                        throw new Error("The translation file \"" + filePath + "\" does not contain a target locale and no explicit locale was provided for this file.");
                    }
                    if (parsedLocale !== undefined && providedLocale !== undefined &&
                        parsedLocale !== providedLocale) {
                        diagnostics.warn("The provided locale \"" + providedLocale + "\" does not match the target locale \"" + parsedLocale + "\" found in the translation file \"" + filePath + "\".");
                    }
                    // If we were passed a diagnostics object then copy the messages over to it.
                    if (this.diagnostics) {
                        this.diagnostics.merge(diagnostics);
                    }
                    return { locale: locale, translations: translations, diagnostics: diagnostics };
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var diagnosticsMessages = [];
            try {
                for (var _f = tslib_1.__values(unusedParsers.entries()), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var _h = tslib_1.__read(_g.value, 2), parser = _h[0], result = _h[1];
                    diagnosticsMessages.push(result.diagnostics.formatDiagnostics("\n" + parser.constructor.name + " cannot parse translation file."));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
            throw new Error("There is no \"TranslationParser\" that can parse this translation file: " + filePath + "." +
                diagnosticsMessages.join('\n'));
        };
        /**
         * There is more than one `filePath` for this locale, so load each as a bundle and then merge
         * them all together.
         */
        TranslationLoader.prototype.mergeBundles = function (filePaths, providedLocale) {
            var _this = this;
            var bundles = filePaths.map(function (filePath) { return _this.loadBundle(filePath, providedLocale); });
            var bundle = bundles[0];
            var _loop_1 = function (i) {
                var nextBundle = bundles[i];
                if (nextBundle.locale !== bundle.locale) {
                    if (this_1.diagnostics) {
                        var previousFiles = filePaths.slice(0, i).map(function (f) { return "\"" + f + "\""; }).join(', ');
                        this_1.diagnostics.warn("When merging multiple translation files, the target locale \"" + nextBundle.locale + "\" found in \"" + filePaths[i] + "\" does not match the target locale \"" + bundle.locale + "\" found in earlier files [" + previousFiles + "].");
                    }
                }
                Object.keys(nextBundle.translations).forEach(function (messageId) {
                    var _a;
                    if (bundle.translations[messageId] !== undefined) {
                        (_a = _this.diagnostics) === null || _a === void 0 ? void 0 : _a.add(_this.duplicateTranslation, "Duplicate translations for message \"" + messageId + "\" when merging \"" + filePaths[i] + "\".");
                    }
                    else {
                        bundle.translations[messageId] = nextBundle.translations[messageId];
                    }
                });
            };
            var this_1 = this;
            for (var i = 1; i < bundles.length; i++) {
                _loop_1(i);
            }
            return bundle;
        };
        return TranslationLoader;
    }());
    exports.TranslationLoader = TranslationLoader;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb25fbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbG9jYWxpemUvc3JjL3Rvb2xzL3NyYy90cmFuc2xhdGUvdHJhbnNsYXRpb25fZmlsZXMvdHJhbnNsYXRpb25fbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFhQTs7T0FFRztJQUNIO1FBQ0UsMkJBQ1ksRUFBc0IsRUFBVSxrQkFBNEMsRUFDNUUsb0JBQWdEO1FBQ3hELGtCQUFrQixDQUFTLFdBQXlCO1lBRjVDLE9BQUUsR0FBRixFQUFFLENBQW9CO1lBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEwQjtZQUM1RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTRCO1lBQzdCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQUcsQ0FBQztRQUU1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBcUJHO1FBQ0gsdUNBQVcsR0FBWCxVQUNJLG9CQUF3QyxFQUN4QyxzQkFBNEM7WUFGaEQsaUJBT0M7WUFKQyxPQUFPLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxVQUFDLFNBQVMsRUFBRSxLQUFLO2dCQUMvQyxJQUFNLGNBQWMsR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckQsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRDs7V0FFRztRQUNLLHNDQUFVLEdBQWxCLFVBQW1CLFFBQXdCLEVBQUUsY0FBZ0M7O1lBRTNFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELElBQU0sYUFBYSxHQUFHLElBQUksR0FBRyxFQUE4QyxDQUFDOztnQkFDNUUsS0FBZ0MsSUFBQSxLQUFBLGlCQUFBLElBQUks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Q0FBQyxJQUFJLE9BQUEsT0FBSSxDQUFDLE9BQUcsRUFBUixDQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFFLE9BQUssV0FBVyxDQUFDLElBQUksQ0FBQyxrRUFDbEIsVUFBVSxDQUFDLE1BQU0sc0JBQWUsU0FBUyxDQUFDLENBQUMsQ0FBQyw4Q0FDNUMsTUFBTSxDQUFDLE1BQU0sbUNBQTZCLGFBQWEsT0FBSSxDQUFDLENBQUM7cUJBQ2xFO2lCQUNGO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVM7O29CQUNwRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssU0FBUyxFQUFFO3dCQUNoRCxNQUFBLEtBQUksQ0FBQyxXQUFXLDBDQUFFLEdBQUcsQ0FDakIsS0FBSSxDQUFDLG9CQUFvQixFQUN6QiwwQ0FBdUMsU0FBUywwQkFBbUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFJLENBQUMsQ0FBQztxQkFDMUY7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUNyRTtnQkFDSCxDQUFDLENBQUMsQ0FBQzs7O1lBbEJMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRTt3QkFBOUIsQ0FBQzthQW1CVDtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFDSCx3QkFBQztJQUFELENBQUMsQUF2SEQsSUF1SEM7SUF2SFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge0Fic29sdXRlRnNQYXRoLCBSZWFkb25seUZpbGVTeXN0ZW19IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHtEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneSwgRGlhZ25vc3RpY3N9IGZyb20gJy4uLy4uL2RpYWdub3N0aWNzJztcbmltcG9ydCB7VHJhbnNsYXRpb25CdW5kbGV9IGZyb20gJy4uL3RyYW5zbGF0b3InO1xuXG5pbXBvcnQge1BhcnNlQW5hbHlzaXMsIFRyYW5zbGF0aW9uUGFyc2VyfSBmcm9tICcuL3RyYW5zbGF0aW9uX3BhcnNlcnMvdHJhbnNsYXRpb25fcGFyc2VyJztcblxuLyoqXG4gKiBVc2UgdGhpcyBjbGFzcyB0byBsb2FkIGEgY29sbGVjdGlvbiBvZiB0cmFuc2xhdGlvbiBmaWxlcyBmcm9tIGRpc2suXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBmczogUmVhZG9ubHlGaWxlU3lzdGVtLCBwcml2YXRlIHRyYW5zbGF0aW9uUGFyc2VyczogVHJhbnNsYXRpb25QYXJzZXI8YW55PltdLFxuICAgICAgcHJpdmF0ZSBkdXBsaWNhdGVUcmFuc2xhdGlvbjogRGlhZ25vc3RpY0hhbmRsaW5nU3RyYXRlZ3ksXG4gICAgICAvKiogQGRlcHJlY2F0ZWQgKi8gcHJpdmF0ZSBkaWFnbm9zdGljcz86IERpYWdub3N0aWNzKSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkIGFuZCBwYXJzZSB0aGUgdHJhbnNsYXRpb24gZmlsZXMgaW50byBhIGNvbGxlY3Rpb24gb2YgYFRyYW5zbGF0aW9uQnVuZGxlc2AuXG4gICAqXG4gICAqIEBwYXJhbSB0cmFuc2xhdGlvbkZpbGVQYXRocyBBbiBhcnJheSwgcGVyIGxvY2FsZSwgb2YgYWJzb2x1dGUgcGF0aHMgdG8gdHJhbnNsYXRpb24gZmlsZXMuXG4gICAqXG4gICAqIEZvciBlYWNoIGxvY2FsZSB0byBiZSB0cmFuc2xhdGVkLCB0aGVyZSBpcyBhbiBlbGVtZW50IGluIGB0cmFuc2xhdGlvbkZpbGVQYXRoc2AuIEVhY2ggZWxlbWVudFxuICAgKiBpcyBhbiBhcnJheSBvZiBhYnNvbHV0ZSBwYXRocyB0byB0cmFuc2xhdGlvbiBmaWxlcyBmb3IgdGhhdCBsb2NhbGUuXG4gICAqIElmIHRoZSBhcnJheSBjb250YWlucyBtb3JlIHRoYW4gb25lIHRyYW5zbGF0aW9uIGZpbGUsIHRoZW4gdGhlIHRyYW5zbGF0aW9ucyBhcmUgbWVyZ2VkLlxuICAgKiBJZiBhbGxvd2VkIGJ5IHRoZSBgZHVwbGljYXRlVHJhbnNsYXRpb25gIHByb3BlcnR5LCB3aGVuIG1vcmUgdGhhbiBvbmUgdHJhbnNsYXRpb24gaGFzIHRoZSBzYW1lXG4gICAqIG1lc3NhZ2UgaWQsIHRoZSBtZXNzYWdlIGZyb20gdGhlIGVhcmxpZXIgdHJhbnNsYXRpb24gZmlsZSBpbiB0aGUgYXJyYXkgaXMgdXNlZC5cbiAgICogRm9yIGV4YW1wbGUsIGlmIHRoZSBmaWxlcyBhcmUgYFthcHAueGxmLCBsaWItMS54bGYsIGxpYi0yLnhsaWZdYCB0aGVuIGEgbWVzc2FnZSB0aGF0IGFwcGVhcnMgaW5cbiAgICogYGFwcC54bGZgIHdpbGwgb3ZlcnJpZGUgdGhlIHNhbWUgbWVzc2FnZSBpbiBgbGliLTEueGxmYCBvciBgbGliLTIueGxmYC5cbiAgICpcbiAgICogQHBhcmFtIHRyYW5zbGF0aW9uRmlsZUxvY2FsZXMgQW4gYXJyYXkgb2YgbG9jYWxlcyBmb3IgZWFjaCBvZiB0aGUgdHJhbnNsYXRpb24gZmlsZXMuXG4gICAqXG4gICAqIElmIHRoZXJlIGlzIGEgbG9jYWxlIHByb3ZpZGVkIGluIGB0cmFuc2xhdGlvbkZpbGVMb2NhbGVzYCB0aGVuIHRoaXMgaXMgdXNlZCByYXRoZXIgdGhhbiBhXG4gICAqIGxvY2FsZSBleHRyYWN0ZWQgZnJvbSB0aGUgZmlsZSBpdHNlbGYuXG4gICAqIElmIHRoZXJlIGlzIG5laXRoZXIgYSBwcm92aWRlZCBsb2NhbGUgbm9yIGEgbG9jYWxlIHBhcnNlZCBmcm9tIHRoZSBmaWxlLCB0aGVuIGFuIGVycm9yIGlzXG4gICAqIHRocm93bi5cbiAgICogSWYgdGhlcmUgYXJlIGJvdGggYSBwcm92aWRlZCBsb2NhbGUgYW5kIGEgbG9jYWxlIHBhcnNlZCBmcm9tIHRoZSBmaWxlLCBhbmQgdGhleSBhcmUgbm90IHRoZVxuICAgKiBzYW1lLCB0aGVuIGEgd2FybmluZyBpcyByZXBvcnRlZC5cbiAgICovXG4gIGxvYWRCdW5kbGVzKFxuICAgICAgdHJhbnNsYXRpb25GaWxlUGF0aHM6IEFic29sdXRlRnNQYXRoW11bXSxcbiAgICAgIHRyYW5zbGF0aW9uRmlsZUxvY2FsZXM6IChzdHJpbmd8dW5kZWZpbmVkKVtdKTogVHJhbnNsYXRpb25CdW5kbGVbXSB7XG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uRmlsZVBhdGhzLm1hcCgoZmlsZVBhdGhzLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcHJvdmlkZWRMb2NhbGUgPSB0cmFuc2xhdGlvbkZpbGVMb2NhbGVzW2luZGV4XTtcbiAgICAgIHJldHVybiB0aGlzLm1lcmdlQnVuZGxlcyhmaWxlUGF0aHMsIHByb3ZpZGVkTG9jYWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIGFsbCB0aGUgdHJhbnNsYXRpb25zIGZyb20gdGhlIGZpbGUgYXQgdGhlIGdpdmVuIGBmaWxlUGF0aGAuXG4gICAqL1xuICBwcml2YXRlIGxvYWRCdW5kbGUoZmlsZVBhdGg6IEFic29sdXRlRnNQYXRoLCBwcm92aWRlZExvY2FsZTogc3RyaW5nfHVuZGVmaW5lZCk6XG4gICAgICBUcmFuc2xhdGlvbkJ1bmRsZSB7XG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gdGhpcy5mcy5yZWFkRmlsZShmaWxlUGF0aCk7XG4gICAgY29uc3QgdW51c2VkUGFyc2VycyA9IG5ldyBNYXA8VHJhbnNsYXRpb25QYXJzZXI8YW55PiwgUGFyc2VBbmFseXNpczxhbnk+PigpO1xuICAgIGZvciAoY29uc3QgdHJhbnNsYXRpb25QYXJzZXIgb2YgdGhpcy50cmFuc2xhdGlvblBhcnNlcnMpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRyYW5zbGF0aW9uUGFyc2VyLmFuYWx5emUoZmlsZVBhdGgsIGZpbGVDb250ZW50cyk7XG4gICAgICBpZiAoIXJlc3VsdC5jYW5QYXJzZSkge1xuICAgICAgICB1bnVzZWRQYXJzZXJzLnNldCh0cmFuc2xhdGlvblBhcnNlciwgcmVzdWx0KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtsb2NhbGU6IHBhcnNlZExvY2FsZSwgdHJhbnNsYXRpb25zLCBkaWFnbm9zdGljc30gPVxuICAgICAgICAgIHRyYW5zbGF0aW9uUGFyc2VyLnBhcnNlKGZpbGVQYXRoLCBmaWxlQ29udGVudHMsIHJlc3VsdC5oaW50KTtcbiAgICAgIGlmIChkaWFnbm9zdGljcy5oYXNFcnJvcnMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRpYWdub3N0aWNzLmZvcm1hdERpYWdub3N0aWNzKFxuICAgICAgICAgICAgYFRoZSB0cmFuc2xhdGlvbiBmaWxlIFwiJHtmaWxlUGF0aH1cIiBjb3VsZCBub3QgYmUgcGFyc2VkLmApKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbG9jYWxlID0gcHJvdmlkZWRMb2NhbGUgfHwgcGFyc2VkTG9jYWxlO1xuICAgICAgaWYgKGxvY2FsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHRyYW5zbGF0aW9uIGZpbGUgXCIke1xuICAgICAgICAgICAgZmlsZVBhdGh9XCIgZG9lcyBub3QgY29udGFpbiBhIHRhcmdldCBsb2NhbGUgYW5kIG5vIGV4cGxpY2l0IGxvY2FsZSB3YXMgcHJvdmlkZWQgZm9yIHRoaXMgZmlsZS5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcnNlZExvY2FsZSAhPT0gdW5kZWZpbmVkICYmIHByb3ZpZGVkTG9jYWxlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBwYXJzZWRMb2NhbGUgIT09IHByb3ZpZGVkTG9jYWxlKSB7XG4gICAgICAgIGRpYWdub3N0aWNzLndhcm4oXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIGxvY2FsZSBcIiR7cHJvdmlkZWRMb2NhbGV9XCIgZG9lcyBub3QgbWF0Y2ggdGhlIHRhcmdldCBsb2NhbGUgXCIke1xuICAgICAgICAgICAgICAgIHBhcnNlZExvY2FsZX1cIiBmb3VuZCBpbiB0aGUgdHJhbnNsYXRpb24gZmlsZSBcIiR7ZmlsZVBhdGh9XCIuYCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHdlIHdlcmUgcGFzc2VkIGEgZGlhZ25vc3RpY3Mgb2JqZWN0IHRoZW4gY29weSB0aGUgbWVzc2FnZXMgb3ZlciB0byBpdC5cbiAgICAgIGlmICh0aGlzLmRpYWdub3N0aWNzKSB7XG4gICAgICAgIHRoaXMuZGlhZ25vc3RpY3MubWVyZ2UoZGlhZ25vc3RpY3MpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge2xvY2FsZSwgdHJhbnNsYXRpb25zLCBkaWFnbm9zdGljc307XG4gICAgfVxuXG4gICAgY29uc3QgZGlhZ25vc3RpY3NNZXNzYWdlczogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtwYXJzZXIsIHJlc3VsdF0gb2YgdW51c2VkUGFyc2Vycy5lbnRyaWVzKCkpIHtcbiAgICAgIGRpYWdub3N0aWNzTWVzc2FnZXMucHVzaChyZXN1bHQuZGlhZ25vc3RpY3MuZm9ybWF0RGlhZ25vc3RpY3MoXG4gICAgICAgICAgYFxcbiR7cGFyc2VyLmNvbnN0cnVjdG9yLm5hbWV9IGNhbm5vdCBwYXJzZSB0cmFuc2xhdGlvbiBmaWxlLmApKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVGhlcmUgaXMgbm8gXCJUcmFuc2xhdGlvblBhcnNlclwiIHRoYXQgY2FuIHBhcnNlIHRoaXMgdHJhbnNsYXRpb24gZmlsZTogJHtmaWxlUGF0aH0uYCArXG4gICAgICAgIGRpYWdub3N0aWNzTWVzc2FnZXMuam9pbignXFxuJykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgYGZpbGVQYXRoYCBmb3IgdGhpcyBsb2NhbGUsIHNvIGxvYWQgZWFjaCBhcyBhIGJ1bmRsZSBhbmQgdGhlbiBtZXJnZVxuICAgKiB0aGVtIGFsbCB0b2dldGhlci5cbiAgICovXG4gIHByaXZhdGUgbWVyZ2VCdW5kbGVzKGZpbGVQYXRoczogQWJzb2x1dGVGc1BhdGhbXSwgcHJvdmlkZWRMb2NhbGU6IHN0cmluZ3x1bmRlZmluZWQpOlxuICAgICAgVHJhbnNsYXRpb25CdW5kbGUge1xuICAgIGNvbnN0IGJ1bmRsZXMgPSBmaWxlUGF0aHMubWFwKGZpbGVQYXRoID0+IHRoaXMubG9hZEJ1bmRsZShmaWxlUGF0aCwgcHJvdmlkZWRMb2NhbGUpKTtcbiAgICBjb25zdCBidW5kbGUgPSBidW5kbGVzWzBdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYnVuZGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmV4dEJ1bmRsZSA9IGJ1bmRsZXNbaV07XG4gICAgICBpZiAobmV4dEJ1bmRsZS5sb2NhbGUgIT09IGJ1bmRsZS5sb2NhbGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlhZ25vc3RpY3MpIHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c0ZpbGVzID0gZmlsZVBhdGhzLnNsaWNlKDAsIGkpLm1hcChmID0+IGBcIiR7Zn1cImApLmpvaW4oJywgJyk7XG4gICAgICAgICAgdGhpcy5kaWFnbm9zdGljcy53YXJuKGBXaGVuIG1lcmdpbmcgbXVsdGlwbGUgdHJhbnNsYXRpb24gZmlsZXMsIHRoZSB0YXJnZXQgbG9jYWxlIFwiJHtcbiAgICAgICAgICAgICAgbmV4dEJ1bmRsZS5sb2NhbGV9XCIgZm91bmQgaW4gXCIke2ZpbGVQYXRoc1tpXX1cIiBkb2VzIG5vdCBtYXRjaCB0aGUgdGFyZ2V0IGxvY2FsZSBcIiR7XG4gICAgICAgICAgICAgIGJ1bmRsZS5sb2NhbGV9XCIgZm91bmQgaW4gZWFybGllciBmaWxlcyBbJHtwcmV2aW91c0ZpbGVzfV0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKG5leHRCdW5kbGUudHJhbnNsYXRpb25zKS5mb3JFYWNoKG1lc3NhZ2VJZCA9PiB7XG4gICAgICAgIGlmIChidW5kbGUudHJhbnNsYXRpb25zW21lc3NhZ2VJZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuZGlhZ25vc3RpY3M/LmFkZChcbiAgICAgICAgICAgICAgdGhpcy5kdXBsaWNhdGVUcmFuc2xhdGlvbixcbiAgICAgICAgICAgICAgYER1cGxpY2F0ZSB0cmFuc2xhdGlvbnMgZm9yIG1lc3NhZ2UgXCIke21lc3NhZ2VJZH1cIiB3aGVuIG1lcmdpbmcgXCIke2ZpbGVQYXRoc1tpXX1cIi5gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidW5kbGUudHJhbnNsYXRpb25zW21lc3NhZ2VJZF0gPSBuZXh0QnVuZGxlLnRyYW5zbGF0aW9uc1ttZXNzYWdlSWRdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1bmRsZTtcbiAgfVxufVxuIl19