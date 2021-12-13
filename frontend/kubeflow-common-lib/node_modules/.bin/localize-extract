#!/usr/bin/env node
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/main", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/compiler-cli/src/ngtsc/logging", "glob", "yargs", "@angular/localize/src/tools/src/extract/duplicates", "@angular/localize/src/tools/src/extract/extraction", "@angular/localize/src/tools/src/extract/translation_files/arb_translation_serializer", "@angular/localize/src/tools/src/extract/translation_files/json_translation_serializer", "@angular/localize/src/tools/src/extract/translation_files/xliff1_translation_serializer", "@angular/localize/src/tools/src/extract/translation_files/xliff2_translation_serializer", "@angular/localize/src/tools/src/extract/translation_files/xmb_translation_serializer", "@angular/localize/src/tools/src/extract/translation_files/format_options", "@angular/localize/src/tools/src/extract/translation_files/legacy_message_id_migration_serializer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractTranslations = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var logging_1 = require("@angular/compiler-cli/src/ngtsc/logging");
    var glob = require("glob");
    var yargs = require("yargs");
    var duplicates_1 = require("@angular/localize/src/tools/src/extract/duplicates");
    var extraction_1 = require("@angular/localize/src/tools/src/extract/extraction");
    var arb_translation_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/arb_translation_serializer");
    var json_translation_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/json_translation_serializer");
    var xliff1_translation_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/xliff1_translation_serializer");
    var xliff2_translation_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/xliff2_translation_serializer");
    var xmb_translation_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/xmb_translation_serializer");
    var format_options_1 = require("@angular/localize/src/tools/src/extract/translation_files/format_options");
    var legacy_message_id_migration_serializer_1 = require("@angular/localize/src/tools/src/extract/translation_files/legacy_message_id_migration_serializer");
    if (require.main === module) {
        process.title = 'Angular Localization Message Extractor (localize-extract)';
        var args = process.argv.slice(2);
        var options = yargs
            .option('l', {
            alias: 'locale',
            describe: 'The locale of the source being processed',
            default: 'en',
            type: 'string',
        })
            .option('r', {
            alias: 'root',
            default: '.',
            describe: 'The root path for other paths provided in these options.\n' +
                'This should either be absolute or relative to the current working directory.',
            type: 'string',
        })
            .option('s', {
            alias: 'source',
            required: true,
            describe: 'A glob pattern indicating what files to search for translations, e.g. `./dist/**/*.js`.\n' +
                'This should be relative to the root path.',
            type: 'string',
        })
            .option('f', {
            alias: 'format',
            required: true,
            choices: [
                'xmb', 'xlf', 'xlif', 'xliff', 'xlf2', 'xlif2', 'xliff2', 'json', 'legacy-migrate'
            ],
            describe: 'The format of the translation file.',
            type: 'string',
        })
            .option('formatOptions', {
            describe: 'Additional options to pass to the translation file serializer, in the form of JSON formatted key-value string pairs:\n' +
                'For example: `--formatOptions {"xml:space":"preserve"}.\n' +
                'The meaning of the options is specific to the format being serialized.',
            type: 'string'
        })
            .option('o', {
            alias: 'outputPath',
            required: true,
            describe: 'A path to where the translation file will be written. This should be relative to the root path.',
            type: 'string',
        })
            .option('loglevel', {
            describe: 'The lowest severity logging message that should be output.',
            choices: ['debug', 'info', 'warn', 'error'],
            type: 'string',
        })
            .option('useSourceMaps', {
            type: 'boolean',
            default: true,
            describe: 'Whether to generate source information in the output files by following source-map mappings found in the source files',
        })
            .option('useLegacyIds', {
            type: 'boolean',
            default: true,
            describe: 'Whether to use the legacy id format for messages that were extracted from Angular templates.',
        })
            .option('d', {
            alias: 'duplicateMessageHandling',
            describe: 'How to handle messages with the same id but different text.',
            choices: ['error', 'warning', 'ignore'],
            default: 'warning',
            type: 'string',
        })
            .strict()
            .help()
            .parse(args);
        var fileSystem = new file_system_1.NodeJSFileSystem();
        file_system_1.setFileSystem(fileSystem);
        var rootPath = options.r;
        var sourceFilePaths = glob.sync(options.s, { cwd: rootPath, nodir: true });
        var logLevel = options.loglevel;
        var logger = new logging_1.ConsoleLogger(logLevel ? logging_1.LogLevel[logLevel] : logging_1.LogLevel.warn);
        var duplicateMessageHandling = options.d;
        var formatOptions = format_options_1.parseFormatOptions(options.formatOptions);
        var format = options.f;
        extractTranslations({
            rootPath: rootPath,
            sourceFilePaths: sourceFilePaths,
            sourceLocale: options.l,
            format: format,
            outputPath: options.o,
            logger: logger,
            useSourceMaps: options.useSourceMaps,
            useLegacyIds: format === 'legacy-migrate' || options.useLegacyIds,
            duplicateMessageHandling: duplicateMessageHandling,
            formatOptions: formatOptions,
            fileSystem: fileSystem,
        });
    }
    function extractTranslations(_a) {
        var e_1, _b;
        var rootPath = _a.rootPath, sourceFilePaths = _a.sourceFilePaths, sourceLocale = _a.sourceLocale, format = _a.format, output = _a.outputPath, logger = _a.logger, useSourceMaps = _a.useSourceMaps, useLegacyIds = _a.useLegacyIds, duplicateMessageHandling = _a.duplicateMessageHandling, _c = _a.formatOptions, formatOptions = _c === void 0 ? {} : _c, fs = _a.fileSystem;
        var basePath = fs.resolve(rootPath);
        var extractor = new extraction_1.MessageExtractor(fs, logger, { basePath: basePath, useSourceMaps: useSourceMaps });
        var messages = [];
        try {
            for (var sourceFilePaths_1 = tslib_1.__values(sourceFilePaths), sourceFilePaths_1_1 = sourceFilePaths_1.next(); !sourceFilePaths_1_1.done; sourceFilePaths_1_1 = sourceFilePaths_1.next()) {
                var file = sourceFilePaths_1_1.value;
                messages.push.apply(messages, tslib_1.__spreadArray([], tslib_1.__read(extractor.extractMessages(file))));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sourceFilePaths_1_1 && !sourceFilePaths_1_1.done && (_b = sourceFilePaths_1.return)) _b.call(sourceFilePaths_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var diagnostics = duplicates_1.checkDuplicateMessages(fs, messages, duplicateMessageHandling, basePath);
        if (diagnostics.hasErrors) {
            throw new Error(diagnostics.formatDiagnostics('Failed to extract messages'));
        }
        var outputPath = fs.resolve(rootPath, output);
        var serializer = getSerializer(format, sourceLocale, fs.dirname(outputPath), useLegacyIds, formatOptions, fs, diagnostics);
        var translationFile = serializer.serialize(messages);
        fs.ensureDir(fs.dirname(outputPath));
        fs.writeFile(outputPath, translationFile);
        if (diagnostics.messages.length) {
            logger.warn(diagnostics.formatDiagnostics('Messages extracted with warnings'));
        }
    }
    exports.extractTranslations = extractTranslations;
    function getSerializer(format, sourceLocale, rootPath, useLegacyIds, formatOptions, fs, diagnostics) {
        if (formatOptions === void 0) { formatOptions = {}; }
        switch (format) {
            case 'xlf':
            case 'xlif':
            case 'xliff':
                return new xliff1_translation_serializer_1.Xliff1TranslationSerializer(sourceLocale, rootPath, useLegacyIds, formatOptions, fs);
            case 'xlf2':
            case 'xlif2':
            case 'xliff2':
                return new xliff2_translation_serializer_1.Xliff2TranslationSerializer(sourceLocale, rootPath, useLegacyIds, formatOptions, fs);
            case 'xmb':
                return new xmb_translation_serializer_1.XmbTranslationSerializer(rootPath, useLegacyIds, fs);
            case 'json':
                return new json_translation_serializer_1.SimpleJsonTranslationSerializer(sourceLocale);
            case 'arb':
                return new arb_translation_serializer_1.ArbTranslationSerializer(sourceLocale, rootPath, fs);
            case 'legacy-migrate':
                return new legacy_message_id_migration_serializer_1.LegacyMessageIdMigrationSerializer(diagnostics);
        }
        throw new Error("No translation serializer can handle the provided format: " + format);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2xvY2FsaXplL3NyYy90b29scy9zcmMvZXh0cmFjdC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQ0E7Ozs7OztPQU1HO0lBQ0gsMkVBQTBJO0lBQzFJLG1FQUF3RjtJQUV4RiwyQkFBNkI7SUFDN0IsNkJBQStCO0lBSS9CLGlGQUFvRDtJQUNwRCxpRkFBOEM7SUFFOUMsbUlBQXdGO0lBQ3hGLHFJQUFnRztJQUNoRyx5SUFBOEY7SUFDOUYseUlBQThGO0lBQzlGLG1JQUF3RjtJQUN4RiwyR0FBcUY7SUFDckYsMkpBQThHO0lBRTlHLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDM0IsT0FBTyxDQUFDLEtBQUssR0FBRywyREFBMkQsQ0FBQztRQUM1RSxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFNLE9BQU8sR0FDVCxLQUFLO2FBQ0EsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNYLEtBQUssRUFBRSxRQUFRO1lBQ2YsUUFBUSxFQUFFLDBDQUEwQztZQUNwRCxPQUFPLEVBQUUsSUFBSTtZQUNiLElBQUksRUFBRSxRQUFRO1NBQ2YsQ0FBQzthQUNELE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLE9BQU8sRUFBRSxHQUFHO1lBQ1osUUFBUSxFQUFFLDREQUE0RDtnQkFDbEUsOEVBQThFO1lBQ2xGLElBQUksRUFBRSxRQUFRO1NBQ2YsQ0FBQzthQUNELE1BQU0sQ0FBQyxHQUFHLEVBQUU7WUFDWCxLQUFLLEVBQUUsUUFBUTtZQUNmLFFBQVEsRUFBRSxJQUFJO1lBQ2QsUUFBUSxFQUNKLDJGQUEyRjtnQkFDM0YsMkNBQTJDO1lBQy9DLElBQUksRUFBRSxRQUFRO1NB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d0IsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLEtBQUssTUFBTTtnQkFDVCxPQUFPLElBQUksNkRBQStCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0QsS0FBSyxLQUFLO2dCQUNSLE9BQU8sSUFBSSxxREFBd0IsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLEtBQUssZ0JBQWdCO2dCQUNuQixPQUFPLElBQUksMkVBQWtDLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLCtEQUE2RCxNQUFRLENBQUMsQ0FBQztJQUN6RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiIyEvdXNyL2Jpbi9lbnYgbm9kZVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge3NldEZpbGVTeXN0ZW0sIE5vZGVKU0ZpbGVTeXN0ZW0sIEFic29sdXRlRnNQYXRoLCBGaWxlU3lzdGVtLCBQYXRoTWFuaXB1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb21waWxlci1jbGkvc3JjL25ndHNjL2ZpbGVfc3lzdGVtJztcbmltcG9ydCB7Q29uc29sZUxvZ2dlciwgTG9nZ2VyLCBMb2dMZXZlbH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9sb2dnaW5nJztcbmltcG9ydCB7ybVQYXJzZWRNZXNzYWdlfSBmcm9tICdAYW5ndWxhci9sb2NhbGl6ZSc7XG5pbXBvcnQgKiBhcyBnbG9iIGZyb20gJ2dsb2InO1xuaW1wb3J0ICogYXMgeWFyZ3MgZnJvbSAneWFyZ3MnO1xuXG5pbXBvcnQge0RpYWdub3N0aWNzLCBEaWFnbm9zdGljSGFuZGxpbmdTdHJhdGVneX0gZnJvbSAnLi4vZGlhZ25vc3RpY3MnO1xuXG5pbXBvcnQge2NoZWNrRHVwbGljYXRlTWVzc2FnZXN9IGZyb20gJy4vZHVwbGljYXRlcyc7XG5pbXBvcnQge01lc3NhZ2VFeHRyYWN0b3J9IGZyb20gJy4vZXh0cmFjdGlvbic7XG5pbXBvcnQge1RyYW5zbGF0aW9uU2VyaWFsaXplcn0gZnJvbSAnLi90cmFuc2xhdGlvbl9maWxlcy90cmFuc2xhdGlvbl9zZXJpYWxpemVyJztcbmltcG9ydCB7QXJiVHJhbnNsYXRpb25TZXJpYWxpemVyfSBmcm9tICcuL3RyYW5zbGF0aW9uX2ZpbGVzL2FyYl90cmFuc2xhdGlvbl9zZXJpYWxpemVyJztcbmltcG9ydCB7U2ltcGxlSnNvblRyYW5zbGF0aW9uU2VyaWFsaXplcn0gZnJvbSAnLi90cmFuc2xhdGlvbl9maWxlcy9qc29uX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtYbGlmZjFUcmFuc2xhdGlvblNlcmlhbGl6ZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fZmlsZXMveGxpZmYxX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtYbGlmZjJUcmFuc2xhdGlvblNlcmlhbGl6ZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fZmlsZXMveGxpZmYyX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtYbWJUcmFuc2xhdGlvblNlcmlhbGl6ZXJ9IGZyb20gJy4vdHJhbnNsYXRpb25fZmlsZXMveG1iX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtGb3JtYXRPcHRpb25zLCBwYXJzZUZvcm1hdE9wdGlvbnN9IGZyb20gJy4vdHJhbnNsYXRpb25fZmlsZXMvZm9ybWF0X29wdGlvbnMnO1xuaW1wb3J0IHtMZWdhY3lNZXNzYWdlSWRNaWdyYXRpb25TZXJpYWxpemVyfSBmcm9tICcuL3RyYW5zbGF0aW9uX2ZpbGVzL2xlZ2FjeV9tZXNzYWdlX2lkX21pZ3JhdGlvbl9zZXJpYWxpemVyJztcblxuaWYgKHJlcXVpcmUubWFpbiA9PT0gbW9kdWxlKSB7XG4gIHByb2Nlc3MudGl0bGUgPSAnQW5ndWxhciBMb2NhbGl6YXRpb24gTWVzc2FnZSBFeHRyYWN0b3IgKGxvY2FsaXplLWV4dHJhY3QpJztcbiAgY29uc3QgYXJncyA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTtcbiAgY29uc3Qgb3B0aW9ucyA9XG4gICAgICB5YXJnc1xuICAgICAgICAgIC5vcHRpb24oJ2wnLCB7XG4gICAgICAgICAgICBhbGlhczogJ2xvY2FsZScsXG4gICAgICAgICAgICBkZXNjcmliZTogJ1RoZSBsb2NhbGUgb2YgdGhlIHNvdXJjZSBiZWluZyBwcm9jZXNzZWQnLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2VuJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbigncicsIHtcbiAgICAgICAgICAgIGFsaWFzOiAncm9vdCcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnLicsXG4gICAgICAgICAgICBkZXNjcmliZTogJ1RoZSByb290IHBhdGggZm9yIG90aGVyIHBhdGhzIHByb3ZpZGVkIGluIHRoZXNlIG9wdGlvbnMuXFxuJyArXG4gICAgICAgICAgICAgICAgJ1RoaXMgc2hvdWxkIGVpdGhlciBiZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeS4nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCdzJywge1xuICAgICAgICAgICAgYWxpYXM6ICdzb3VyY2UnLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBkZXNjcmliZTpcbiAgICAgICAgICAgICAgICAnQSBnbG9iIHBhdHRlcm4gaW5kaWNhdGluZyB3aGF0IGZpbGVzIHRvIHNlYXJjaCBmb3IgdHJhbnNsYXRpb25zLCBlLmcuIGAuL2Rpc3QvKiovKi5qc2AuXFxuJyArXG4gICAgICAgICAgICAgICAgJ1RoaXMgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSByb290IHBhdGguJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignZicsIHtcbiAgICAgICAgICAgIGFsaWFzOiAnZm9ybWF0JyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgY2hvaWNlczogW1xuICAgICAgICAgICAgICAneG1iJywgJ3hsZicsICd4bGlmJywgJ3hsaWZmJywgJ3hsZjInLCAneGxpZjInLCAneGxpZmYyJywgJ2pzb24nLCAnbGVnYWN5LW1pZ3JhdGUnXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZGVzY3JpYmU6ICdUaGUgZm9ybWF0IG9mIHRoZSB0cmFuc2xhdGlvbiBmaWxlLicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2Zvcm1hdE9wdGlvbnMnLCB7XG4gICAgICAgICAgICBkZXNjcmliZTpcbiAgICAgICAgICAgICAgICAnQWRkaXRpb25hbCBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIHRyYW5zbGF0aW9uIGZpbGUgc2VyaWFsaXplciwgaW4gdGhlIGZvcm0gb2YgSlNPTiBmb3JtYXR0ZWQga2V5LXZhbHVlIHN0cmluZyBwYWlyczpcXG4nICtcbiAgICAgICAgICAgICAgICAnRm9yIGV4YW1wbGU6IGAtLWZvcm1hdE9wdGlvbnMge1wieG1sOnNwYWNlXCI6XCJwcmVzZXJ2ZVwifS5cXG4nICtcbiAgICAgICAgICAgICAgICAnVGhlIG1lYW5pbmcgb2YgdGhlIG9wdGlvbnMgaXMgc3BlY2lmaWMgdG8gdGhlIGZvcm1hdCBiZWluZyBzZXJpYWxpemVkLicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLm9wdGlvbignbycsIHtcbiAgICAgICAgICAgIGFsaWFzOiAnb3V0cHV0UGF0aCcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlc2NyaWJlOlxuICAgICAgICAgICAgICAgICdBIHBhdGggdG8gd2hlcmUgdGhlIHRyYW5zbGF0aW9uIGZpbGUgd2lsbCBiZSB3cml0dGVuLiBUaGlzIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgcm9vdCBwYXRoLicsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2xvZ2xldmVsJywge1xuICAgICAgICAgICAgZGVzY3JpYmU6ICdUaGUgbG93ZXN0IHNldmVyaXR5IGxvZ2dpbmcgbWVzc2FnZSB0aGF0IHNob3VsZCBiZSBvdXRwdXQuJyxcbiAgICAgICAgICAgIGNob2ljZXM6IFsnZGVidWcnLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJ10sXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ3VzZVNvdXJjZU1hcHMnLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgZGVzY3JpYmU6XG4gICAgICAgICAgICAgICAgJ1doZXRoZXIgdG8gZ2VuZXJhdGUgc291cmNlIGluZm9ybWF0aW9uIGluIHRoZSBvdXRwdXQgZmlsZXMgYnkgZm9sbG93aW5nIHNvdXJjZS1tYXAgbWFwcGluZ3MgZm91bmQgaW4gdGhlIHNvdXJjZSBmaWxlcycsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAub3B0aW9uKCd1c2VMZWdhY3lJZHMnLCB7XG4gICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICAgICAgZGVzY3JpYmU6XG4gICAgICAgICAgICAgICAgJ1doZXRoZXIgdG8gdXNlIHRoZSBsZWdhY3kgaWQgZm9ybWF0IGZvciBtZXNzYWdlcyB0aGF0IHdlcmUgZXh0cmFjdGVkIGZyb20gQW5ndWxhciB0ZW1wbGF0ZXMuJyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5vcHRpb24oJ2QnLCB7XG4gICAgICAgICAgICBhbGlhczogJ2R1cGxpY2F0ZU1lc3NhZ2VIYW5kbGluZycsXG4gICAgICAgICAgICBkZXNjcmliZTogJ0hvdyB0byBoYW5kbGUgbWVzc2FnZXMgd2l0aCB0aGUgc2FtZSBpZCBidXQgZGlmZmVyZW50IHRleHQuJyxcbiAgICAgICAgICAgIGNob2ljZXM6IFsnZXJyb3InLCAnd2FybmluZycsICdpZ25vcmUnXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnN0cmljdCgpXG4gICAgICAgICAgLmhlbHAoKVxuICAgICAgICAgIC5wYXJzZShhcmdzKTtcblxuICBjb25zdCBmaWxlU3lzdGVtID0gbmV3IE5vZGVKU0ZpbGVTeXN0ZW0oKTtcbiAgc2V0RmlsZVN5c3RlbShmaWxlU3lzdGVtKTtcblxuICBjb25zdCByb290UGF0aCA9IG9wdGlvbnMucjtcbiAgY29uc3Qgc291cmNlRmlsZVBhdGhzID0gZ2xvYi5zeW5jKG9wdGlvbnMucywge2N3ZDogcm9vdFBhdGgsIG5vZGlyOiB0cnVlfSk7XG4gIGNvbnN0IGxvZ0xldmVsID0gb3B0aW9ucy5sb2dsZXZlbCBhcyAoa2V5b2YgdHlwZW9mIExvZ0xldmVsKSB8IHVuZGVmaW5lZDtcbiAgY29uc3QgbG9nZ2VyID0gbmV3IENvbnNvbGVMb2dnZXIobG9nTGV2ZWwgPyBMb2dMZXZlbFtsb2dMZXZlbF0gOiBMb2dMZXZlbC53YXJuKTtcbiAgY29uc3QgZHVwbGljYXRlTWVzc2FnZUhhbmRsaW5nID0gb3B0aW9ucy5kIGFzIERpYWdub3N0aWNIYW5kbGluZ1N0cmF0ZWd5O1xuICBjb25zdCBmb3JtYXRPcHRpb25zID0gcGFyc2VGb3JtYXRPcHRpb25zKG9wdGlvbnMuZm9ybWF0T3B0aW9ucyk7XG4gIGNvbnN0IGZvcm1hdCA9IG9wdGlvbnMuZjtcblxuICBleHRyYWN0VHJhbnNsYXRpb25zKHtcbiAgICByb290UGF0aCxcbiAgICBzb3VyY2VGaWxlUGF0aHMsXG4gICAgc291cmNlTG9jYWxlOiBvcHRpb25zLmwsXG4gICAgZm9ybWF0LFxuICAgIG91dHB1dFBhdGg6IG9wdGlvbnMubyxcbiAgICBsb2dnZXIsXG4gICAgdXNlU291cmNlTWFwczogb3B0aW9ucy51c2VTb3VyY2VNYXBzLFxuICAgIHVzZUxlZ2FjeUlkczogZm9ybWF0ID09PSAnbGVnYWN5LW1pZ3JhdGUnIHx8IG9wdGlvbnMudXNlTGVnYWN5SWRzLFxuICAgIGR1cGxpY2F0ZU1lc3NhZ2VIYW5kbGluZyxcbiAgICBmb3JtYXRPcHRpb25zLFxuICAgIGZpbGVTeXN0ZW0sXG4gIH0pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4dHJhY3RUcmFuc2xhdGlvbnNPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBsb2NhbGUgb2YgdGhlIHNvdXJjZSBiZWluZyBwcm9jZXNzZWQuXG4gICAqL1xuICBzb3VyY2VMb2NhbGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBiYXNlIHBhdGggZm9yIG90aGVyIHBhdGhzIHByb3ZpZGVkIGluIHRoZXNlIG9wdGlvbnMuXG4gICAqIFRoaXMgc2hvdWxkIGVpdGhlciBiZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeS5cbiAgICovXG4gIHJvb3RQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBwYXRocyB0byBmaWxlcyB0byBzZWFyY2ggZm9yIHRyYW5zbGF0aW9ucy4gVGhlc2Ugc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZVxuICAgKiByb290UGF0aC5cbiAgICovXG4gIHNvdXJjZUZpbGVQYXRoczogc3RyaW5nW107XG4gIC8qKlxuICAgKiBUaGUgZm9ybWF0IG9mIHRoZSB0cmFuc2xhdGlvbiBmaWxlLlxuICAgKi9cbiAgZm9ybWF0OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHBhdGggdG8gd2hlcmUgdGhlIHRyYW5zbGF0aW9uIGZpbGUgd2lsbCBiZSB3cml0dGVuLiBUaGlzIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgcm9vdFBhdGguXG4gICAqL1xuICBvdXRwdXRQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgbG9nZ2VyIHRvIHVzZSBmb3IgZGlhZ25vc3RpYyBtZXNzYWdlcy5cbiAgICovXG4gIGxvZ2dlcjogTG9nZ2VyO1xuICAvKipcbiAgICogV2hldGhlciB0byBnZW5lcmF0ZSBzb3VyY2UgaW5mb3JtYXRpb24gaW4gdGhlIG91dHB1dCBmaWxlcyBieSBmb2xsb3dpbmcgc291cmNlLW1hcCBtYXBwaW5nc1xuICAgKiBmb3VuZCBpbiB0aGUgc291cmNlIGZpbGUuXG4gICAqL1xuICB1c2VTb3VyY2VNYXBzOiBib29sZWFuO1xuICAvKipcbiAgICogV2hldGhlciB0byB1c2UgdGhlIGxlZ2FjeSBpZCBmb3JtYXQgZm9yIG1lc3NhZ2VzIHRoYXQgd2VyZSBleHRyYWN0ZWQgZnJvbSBBbmd1bGFyIHRlbXBsYXRlc1xuICAgKi9cbiAgdXNlTGVnYWN5SWRzOiBib29sZWFuO1xuICAvKipcbiAgICogSG93IHRvIGhhbmRsZSBtZXNzYWdlcyB3aXRoIHRoZSBzYW1lIGlkIGJ1dCBub3QgdGhlIHNhbWUgdGV4dC5cbiAgICovXG4gIGR1cGxpY2F0ZU1lc3NhZ2VIYW5kbGluZzogRGlhZ25vc3RpY0hhbmRsaW5nU3RyYXRlZ3k7XG4gIC8qKlxuICAgKiBBIGNvbGxlY3Rpb24gb2YgZm9ybWF0dGluZyBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIHRyYW5zbGF0aW9uIGZpbGUgc2VyaWFsaXplci5cbiAgICovXG4gIGZvcm1hdE9wdGlvbnM/OiBGb3JtYXRPcHRpb25zO1xuICAvKipcbiAgICogVGhlIGZpbGUtc3lzdGVtIGFic3RyYWN0aW9uIHRvIHVzZS5cbiAgICovXG4gIGZpbGVTeXN0ZW06IEZpbGVTeXN0ZW07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VHJhbnNsYXRpb25zKHtcbiAgcm9vdFBhdGgsXG4gIHNvdXJjZUZpbGVQYXRocyxcbiAgc291cmNlTG9jYWxlLFxuICBmb3JtYXQsXG4gIG91dHB1dFBhdGg6IG91dHB1dCxcbiAgbG9nZ2VyLFxuICB1c2VTb3VyY2VNYXBzLFxuICB1c2VMZWdhY3lJZHMsXG4gIGR1cGxpY2F0ZU1lc3NhZ2VIYW5kbGluZyxcbiAgZm9ybWF0T3B0aW9ucyA9IHt9LFxuICBmaWxlU3lzdGVtOiBmcyxcbn06IEV4dHJhY3RUcmFuc2xhdGlvbnNPcHRpb25zKSB7XG4gIGNvbnN0IGJhc2VQYXRoID0gZnMucmVzb2x2ZShyb290UGF0aCk7XG4gIGNvbnN0IGV4dHJhY3RvciA9IG5ldyBNZXNzYWdlRXh0cmFjdG9yKGZzLCBsb2dnZXIsIHtiYXNlUGF0aCwgdXNlU291cmNlTWFwc30pO1xuXG4gIGNvbnN0IG1lc3NhZ2VzOiDJtVBhcnNlZE1lc3NhZ2VbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGZpbGUgb2Ygc291cmNlRmlsZVBhdGhzKSB7XG4gICAgbWVzc2FnZXMucHVzaCguLi5leHRyYWN0b3IuZXh0cmFjdE1lc3NhZ2VzKGZpbGUpKTtcbiAgfVxuXG4gIGNvbnN0IGRpYWdub3N0aWNzID0gY2hlY2tEdXBsaWNhdGVNZXNzYWdlcyhmcywgbWVzc2FnZXMsIGR1cGxpY2F0ZU1lc3NhZ2VIYW5kbGluZywgYmFzZVBhdGgpO1xuICBpZiAoZGlhZ25vc3RpY3MuaGFzRXJyb3JzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGRpYWdub3N0aWNzLmZvcm1hdERpYWdub3N0aWNzKCdGYWlsZWQgdG8gZXh0cmFjdCBtZXNzYWdlcycpKTtcbiAgfVxuXG4gIGNvbnN0IG91dHB1dFBhdGggPSBmcy5yZXNvbHZlKHJvb3RQYXRoLCBvdXRwdXQpO1xuICBjb25zdCBzZXJpYWxpemVyID0gZ2V0U2VyaWFsaXplcihcbiAgICAgIGZvcm1hdCwgc291cmNlTG9jYWxlLCBmcy5kaXJuYW1lKG91dHB1dFBhdGgpLCB1c2VMZWdhY3lJZHMsIGZvcm1hdE9wdGlvbnMsIGZzLCBkaWFnbm9zdGljcyk7XG4gIGNvbnN0IHRyYW5zbGF0aW9uRmlsZSA9IHNlcmlhbGl6ZXIuc2VyaWFsaXplKG1lc3NhZ2VzKTtcbiAgZnMuZW5zdXJlRGlyKGZzLmRpcm5hbWUob3V0cHV0UGF0aCkpO1xuICBmcy53cml0ZUZpbGUob3V0cHV0UGF0aCwgdHJhbnNsYXRpb25GaWxlKTtcblxuICBpZiAoZGlhZ25vc3RpY3MubWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgbG9nZ2VyLndhcm4oZGlhZ25vc3RpY3MuZm9ybWF0RGlhZ25vc3RpY3MoJ01lc3NhZ2VzIGV4dHJhY3RlZCB3aXRoIHdhcm5pbmdzJykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNlcmlhbGl6ZXIoXG4gICAgZm9ybWF0OiBzdHJpbmcsIHNvdXJjZUxvY2FsZTogc3RyaW5nLCByb290UGF0aDogQWJzb2x1dGVGc1BhdGgsIHVzZUxlZ2FjeUlkczogYm9vbGVhbixcbiAgICBmb3JtYXRPcHRpb25zOiBGb3JtYXRPcHRpb25zID0ge30sIGZzOiBQYXRoTWFuaXB1bGF0aW9uLFxuICAgIGRpYWdub3N0aWNzOiBEaWFnbm9zdGljcyk6IFRyYW5zbGF0aW9uU2VyaWFsaXplciB7XG4gIHN3aXRjaCAoZm9ybWF0KSB7XG4gICAgY2FzZSAneGxmJzpcbiAgICBjYXNlICd4bGlmJzpcbiAgICBjYXNlICd4bGlmZic6XG4gICAgICByZXR1cm4gbmV3IFhsaWZmMVRyYW5zbGF0aW9uU2VyaWFsaXplcihcbiAgICAgICAgICBzb3VyY2VMb2NhbGUsIHJvb3RQYXRoLCB1c2VMZWdhY3lJZHMsIGZvcm1hdE9wdGlvbnMsIGZzKTtcbiAgICBjYXNlICd4bGYyJzpcbiAgICBjYXNlICd4bGlmMic6XG4gICAgY2FzZSAneGxpZmYyJzpcbiAgICAgIHJldHVybiBuZXcgWGxpZmYyVHJhbnNsYXRpb25TZXJpYWxpemVyKFxuICAgICAgICAgIHNvdXJjZUxvY2FsZSwgcm9vdFBhdGgsIHVzZUxlZ2FjeUlkcywgZm9ybWF0T3B0aW9ucywgZnMpO1xuICAgIGNhc2UgJ3htYic6XG4gICAgICByZXR1cm4gbmV3IFhtYlRyYW5zbGF0aW9uU2VyaWFsaXplcihyb290UGF0aCwgdXNlTGVnYWN5SWRzLCBmcyk7XG4gICAgY2FzZSAnanNvbic6XG4gICAgICByZXR1cm4gbmV3IFNpbXBsZUpzb25UcmFuc2xhdGlvblNlcmlhbGl6ZXIoc291cmNlTG9jYWxlKTtcbiAgICBjYXNlICdhcmInOlxuICAgICAgcmV0dXJuIG5ldyBBcmJUcmFuc2xhdGlvblNlcmlhbGl6ZXIoc291cmNlTG9jYWxlLCByb290UGF0aCwgZnMpO1xuICAgIGNhc2UgJ2xlZ2FjeS1taWdyYXRlJzpcbiAgICAgIHJldHVybiBuZXcgTGVnYWN5TWVzc2FnZUlkTWlncmF0aW9uU2VyaWFsaXplcihkaWFnbm9zdGljcyk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGBObyB0cmFuc2xhdGlvbiBzZXJpYWxpemVyIGNhbiBoYW5kbGUgdGhlIHByb3ZpZGVkIGZvcm1hdDogJHtmb3JtYXR9YCk7XG59XG4iXX0=