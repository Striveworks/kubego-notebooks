(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/localize/src/tools/src/extract/translation_files/xliff1_translation_serializer", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/file_system", "@angular/localize/src/tools/src/extract/translation_files/format_options", "@angular/localize/src/tools/src/extract/translation_files/icu_parsing", "@angular/localize/src/tools/src/extract/translation_files/utils", "@angular/localize/src/tools/src/extract/translation_files/xml_file"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Xliff1TranslationSerializer = void 0;
    var tslib_1 = require("tslib");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var file_system_1 = require("@angular/compiler-cli/src/ngtsc/file_system");
    var format_options_1 = require("@angular/localize/src/tools/src/extract/translation_files/format_options");
    var icu_parsing_1 = require("@angular/localize/src/tools/src/extract/translation_files/icu_parsing");
    var utils_1 = require("@angular/localize/src/tools/src/extract/translation_files/utils");
    var xml_file_1 = require("@angular/localize/src/tools/src/extract/translation_files/xml_file");
    /** This is the number of characters that a legacy Xliff 1.2 message id has. */
    var LEGACY_XLIFF_MESSAGE_LENGTH = 40;
    /**
     * A translation serializer that can write XLIFF 1.2 formatted files.
     *
     * https://docs.oasis-open.org/xliff/v1.2/os/xliff-core.html
     * https://docs.oasis-open.org/xliff/v1.2/xliff-profile-html/xliff-profile-html-1.2.html
     *
     * @see Xliff1TranslationParser
     * @publicApi used by CLI
     */
    var Xliff1TranslationSerializer = /** @class */ (function () {
        function Xliff1TranslationSerializer(sourceLocale, basePath, useLegacyIds, formatOptions, fs) {
            if (formatOptions === void 0) { formatOptions = {}; }
            if (fs === void 0) { fs = file_system_1.getFileSystem(); }
            this.sourceLocale = sourceLocale;
            this.basePath = basePath;
            this.useLegacyIds = useLegacyIds;
            this.formatOptions = formatOptions;
            this.fs = fs;
            format_options_1.validateOptions('Xliff1TranslationSerializer', [['xml:space', ['preserve']]], formatOptions);
        }
        Xliff1TranslationSerializer.prototype.serialize = function (messages) {
            var e_1, _a, e_2, _b;
            var _this = this;
            var messageGroups = utils_1.consolidateMessages(messages, function (message) { return _this.getMessageId(message); });
            var xml = new xml_file_1.XmlFile();
            xml.startTag('xliff', { 'version': '1.2', 'xmlns': 'urn:oasis:names:tc:xliff:document:1.2' });
            // NOTE: the `original` property is set to the legacy `ng2.template` value for backward
            // compatibility.
            // We could compute the file from the `message.location` property, but there could
            // be multiple values for this in the collection of `messages`. In that case we would probably
            // need to change the serializer to output a new `<file>` element for each collection of
            // messages that come from a particular original file, and the translation file parsers may not
            // be able to cope with this.
            xml.startTag('file', tslib_1.__assign({ 'source-language': this.sourceLocale, 'datatype': 'plaintext', 'original': 'ng2.template' }, this.formatOptions));
            xml.startTag('body');
            try {
                for (var messageGroups_1 = tslib_1.__values(messageGroups), messageGroups_1_1 = messageGroups_1.next(); !messageGroups_1_1.done; messageGroups_1_1 = messageGroups_1.next()) {
                    var duplicateMessages = messageGroups_1_1.value;
                    var message = duplicateMessages[0];
                    var id = this.getMessageId(message);
                    xml.startTag('trans-unit', { id: id, datatype: 'html' });
                    xml.startTag('source', {}, { preserveWhitespace: true });
                    this.serializeMessage(xml, message);
                    xml.endTag('source', { preserveWhitespace: false });
                    try {
                        // Write all the locations
                        for (var _c = (e_2 = void 0, tslib_1.__values(duplicateMessages.filter(utils_1.hasLocation))), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var location = _d.value.location;
                            this.serializeLocation(xml, location);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    if (message.description) {
                        this.serializeNote(xml, 'description', message.description);
                    }
                    if (message.meaning) {
                        this.serializeNote(xml, 'meaning', message.meaning);
                    }
                    xml.endTag('trans-unit');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (messageGroups_1_1 && !messageGroups_1_1.done && (_a = messageGroups_1.return)) _a.call(messageGroups_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            xml.endTag('body');
            xml.endTag('file');
            xml.endTag('xliff');
            return xml.toString();
        };
        Xliff1TranslationSerializer.prototype.serializeMessage = function (xml, message) {
            var _a;
            var length = message.messageParts.length - 1;
            for (var i = 0; i < length; i++) {
                this.serializeTextPart(xml, message.messageParts[i]);
                var location = (_a = message.substitutionLocations) === null || _a === void 0 ? void 0 : _a[message.placeholderNames[i]];
                this.serializePlaceholder(xml, message.placeholderNames[i], location === null || location === void 0 ? void 0 : location.text);
            }
            this.serializeTextPart(xml, message.messageParts[length]);
        };
        Xliff1TranslationSerializer.prototype.serializeTextPart = function (xml, text) {
            var pieces = icu_parsing_1.extractIcuPlaceholders(text);
            var length = pieces.length - 1;
            for (var i = 0; i < length; i += 2) {
                xml.text(pieces[i]);
                this.serializePlaceholder(xml, pieces[i + 1], undefined);
            }
            xml.text(pieces[length]);
        };
        Xliff1TranslationSerializer.prototype.serializePlaceholder = function (xml, id, text) {
            var attrs = { id: id };
            var ctype = getCtypeForPlaceholder(id);
            if (ctype !== null) {
                attrs.ctype = ctype;
            }
            if (text !== undefined) {
                attrs['equiv-text'] = text;
            }
            xml.startTag('x', attrs, { selfClosing: true });
        };
        Xliff1TranslationSerializer.prototype.serializeNote = function (xml, name, value) {
            xml.startTag('note', { priority: '1', from: name }, { preserveWhitespace: true });
            xml.text(value);
            xml.endTag('note', { preserveWhitespace: false });
        };
        Xliff1TranslationSerializer.prototype.serializeLocation = function (xml, location) {
            xml.startTag('context-group', { purpose: 'location' });
            this.renderContext(xml, 'sourcefile', this.fs.relative(this.basePath, location.file));
            var endLineString = location.end !== undefined && location.end.line !== location.start.line ?
                "," + (location.end.line + 1) :
                '';
            this.renderContext(xml, 'linenumber', "" + (location.start.line + 1) + endLineString);
            xml.endTag('context-group');
        };
        Xliff1TranslationSerializer.prototype.renderContext = function (xml, type, value) {
            xml.startTag('context', { 'context-type': type }, { preserveWhitespace: true });
            xml.text(value);
            xml.endTag('context', { preserveWhitespace: false });
        };
        /**
         * Get the id for the given `message`.
         *
         * If there was a custom id provided, use that.
         *
         * If we have requested legacy message ids, then try to return the appropriate id
         * from the list of legacy ids that were extracted.
         *
         * Otherwise return the canonical message id.
         *
         * An Xliff 1.2 legacy message id is a hex encoded SHA-1 string, which is 40 characters long. See
         * https://csrc.nist.gov/csrc/media/publications/fips/180/4/final/documents/fips180-4-draft-aug2014.pdf
         */
        Xliff1TranslationSerializer.prototype.getMessageId = function (message) {
            return message.customId ||
                this.useLegacyIds && message.legacyIds !== undefined &&
                    message.legacyIds.find(function (id) { return id.length === LEGACY_XLIFF_MESSAGE_LENGTH; }) ||
                message.id;
        };
        return Xliff1TranslationSerializer;
    }());
    exports.Xliff1TranslationSerializer = Xliff1TranslationSerializer;
    /**
     * Compute the value of the `ctype` attribute from the `placeholder` name.
     *
     * The placeholder can take the following forms:
     *
     * - `START_BOLD_TEXT`/`END_BOLD_TEXT`
     * - `TAG_<ELEMENT_NAME>`
     * - `START_TAG_<ELEMENT_NAME>`
     * - `CLOSE_TAG_<ELEMENT_NAME>`
     *
     * In these cases the element name of the tag is extracted from the placeholder name and returned as
     * `x-<element_name>`.
     *
     * Line breaks and images are special cases.
     */
    function getCtypeForPlaceholder(placeholder) {
        var tag = placeholder.replace(/^(START_|CLOSE_)/, '');
        switch (tag) {
            case 'LINE_BREAK':
                return 'lb';
            case 'TAG_IMG':
                return 'image';
            default:
                var element = tag.startsWith('TAG_') ?
                    tag.replace(/^TAG_(.+)/, function (_, tagName) { return tagName.toLowerCase(); }) :
                    TAG_MAP[tag];
                if (element === undefined) {
                    return null;
                }
                return "x-" + element;
        }
    }
    var TAG_MAP = {
        'LINK': 'a',
        'BOLD_TEXT': 'b',
        'EMPHASISED_TEXT': 'em',
        'HEADING_LEVEL1': 'h1',
        'HEADING_LEVEL2': 'h2',
        'HEADING_LEVEL3': 'h3',
        'HEADING_LEVEL4': 'h4',
        'HEADING_LEVEL5': 'h5',
        'HEADING_LEVEL6': 'h6',
        'HORIZONTAL_RULE': 'hr',
        'ITALIC_TEXT': 'i',
        'LIST_ITEM': 'li',
        'MEDIA_LINK': 'link',
        'ORDERED_LIST': 'ol',
        'PARAGRAPH': 'p',
        'QUOTATION': 'q',
        'STRIKETHROUGH_TEXT': 's',
        'SMALL_TEXT': 'small',
        'SUBSTRIPT': 'sub',
        'SUPERSCRIPT': 'sup',
        'TABLE_BODY': 'tbody',
        'TABLE_CELL': 'td',
        'TABLE_FOOTER': 'tfoot',
        'TABLE_HEADER_CELL': 'th',
        'TABLE_HEADER': 'thead',
        'TABLE_ROW': 'tr',
        'MONOSPACED_TEXT': 'tt',
        'UNDERLINED_TEXT': 'u',
        'UNORDERED_LIST': 'ul',
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxpZmYxX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9sb2NhbGl6ZS9zcmMvdG9vbHMvc3JjL2V4dHJhY3QvdHJhbnNsYXRpb25fZmlsZXMveGxpZmYxX3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILDJFQUE0RztJQUc1RywyR0FBZ0U7SUFDaEUscUdBQXFEO0lBRXJELHlGQUF5RDtJQUN6RCwrRkFBbUM7SUFFbkMsK0VBQStFO0lBQy9FLElBQU0sMkJBQTJCLEdBQUcsRUFBRSxDQUFDO0lBRXZDOzs7Ozs7OztPQVFHO0lBQ0g7UUFDRSxxQ0FDWSxZQUFvQixFQUFVLFFBQXdCLEVBQVUsWUFBcUIsRUFDckYsYUFBaUMsRUFBVSxFQUFzQztZQUFqRiw4QkFBQSxFQUFBLGtCQUFpQztZQUFVLG1CQUFBLEVBQUEsS0FBdUIsMkJBQWEsRUFBRTtZQURqRixpQkFBWSxHQUFaLFlBQVksQ0FBUTtZQUFVLGFBQVEsR0FBUixRQUFRLENBQWdCO1lBQVUsaUJBQVksR0FBWixZQUFZLENBQVM7WUFDckYsa0JBQWEsR0FBYixhQUFhLENBQW9CO1lBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBb0M7WUFDM0YsZ0NBQWUsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQy9GLENBQUM7UUFFRCwrQ0FBUyxHQUFULFVBQVUsUUFBMEI7O1lBQXBDLGlCQTRDQztZQTNDQyxJQUFNLGFBQWEsR0FBRywyQkFBbUIsQ0FBQyxRQUFRLEVBQUUsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUExQixDQUEwQixDQUFDLENB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LEVBQUUsSUFBSTtRQUNsQixjQUFjLEVBQUUsT0FBTztRQUN2QixtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLGNBQWMsRUFBRSxPQUFPO1FBQ3ZCLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsaUJBQWlCLEVBQUUsR0FBRztRQUN0QixnQkFBZ0IsRUFBRSxJQUFJO0tBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCB7QWJzb2x1dGVGc1BhdGgsIGdldEZpbGVTeXN0ZW0sIFBhdGhNYW5pcHVsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZmlsZV9zeXN0ZW0nO1xuaW1wb3J0IHvJtVBhcnNlZE1lc3NhZ2UsIMm1U291cmNlTG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2xvY2FsaXplJztcblxuaW1wb3J0IHtGb3JtYXRPcHRpb25zLCB2YWxpZGF0ZU9wdGlvbnN9IGZyb20gJy4vZm9ybWF0X29wdGlvbnMnO1xuaW1wb3J0IHtleHRyYWN0SWN1UGxhY2Vob2xkZXJzfSBmcm9tICcuL2ljdV9wYXJzaW5nJztcbmltcG9ydCB7VHJhbnNsYXRpb25TZXJpYWxpemVyfSBmcm9tICcuL3RyYW5zbGF0aW9uX3NlcmlhbGl6ZXInO1xuaW1wb3J0IHtjb25zb2xpZGF0ZU1lc3NhZ2VzLCBoYXNMb2NhdGlvbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge1htbEZpbGV9IGZyb20gJy4veG1sX2ZpbGUnO1xuXG4vKiogVGhpcyBpcyB0aGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCBhIGxlZ2FjeSBYbGlmZiAxLjIgbWVzc2FnZSBpZCBoYXMuICovXG5jb25zdCBMRUdBQ1lfWExJRkZfTUVTU0FHRV9MRU5HVEggPSA0MDtcblxuLyoqXG4gKiBBIHRyYW5zbGF0aW9uIHNlcmlhbGl6ZXIgdGhhdCBjYW4gd3JpdGUgWExJRkYgMS4yIGZvcm1hdHRlZCBmaWxlcy5cbiAqXG4gKiBodHRwczovL2RvY3Mub2FzaXMtb3Blbi5vcmcveGxpZmYvdjEuMi9vcy94bGlmZi1jb3JlLmh0bWxcbiAqIGh0dHBzOi8vZG9jcy5vYXNpcy1vcGVuLm9yZy94bGlmZi92MS4yL3hsaWZmLXByb2ZpbGUtaHRtbC94bGlmZi1wcm9maWxlLWh0bWwtMS4yLmh0bWxcbiAqXG4gKiBAc2VlIFhsaWZmMVRyYW5zbGF0aW9uUGFyc2VyXG4gKiBAcHVibGljQXBpIHVzZWQgYnkgQ0xJXG4gKi9cbmV4cG9ydCBjbGFzcyBYbGlmZjFUcmFuc2xhdGlvblNlcmlhbGl6ZXIgaW1wbGVtZW50cyBUcmFuc2xhdGlvblNlcmlhbGl6ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgc291cmNlTG9jYWxlOiBzdHJpbmcsIHByaXZhdGUgYmFzZVBhdGg6IEFic29sdXRlRnNQYXRoLCBwcml2YXRlIHVzZUxlZ2FjeUlkczogYm9vbGVhbixcbiAgICAgIHByaXZhdGUgZm9ybWF0T3B0aW9uczogRm9ybWF0T3B0aW9ucyA9IHt9LCBwcml2YXRlIGZzOiBQYXRoTWFuaXB1bGF0aW9uID0gZ2V0RmlsZVN5c3RlbSgpKSB7XG4gICAgdmFsaWRhdGVPcHRpb25zKCdYbGlmZjFUcmFuc2xhdGlvblNlcmlhbGl6ZXInLCBbWyd4bWw6c3BhY2UnLCBbJ3ByZXNlcnZlJ11dXSwgZm9ybWF0T3B0aW9ucyk7XG4gIH1cblxuICBzZXJpYWxpemUobWVzc2FnZXM6IMm1UGFyc2VkTWVzc2FnZVtdKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZXNzYWdlR3JvdXBzID0gY29uc29saWRhdGVNZXNzYWdlcyhtZXNzYWdlcywgbWVzc2FnZSA9PiB0aGlzLmdldE1lc3NhZ2VJZChtZXNzYWdlKSk7XG4gICAgY29uc3QgeG1sID0gbmV3IFhtbEZpbGUoKTtcbiAgICB4bWwuc3RhcnRUYWcoJ3hsaWZmJywgeyd2ZXJzaW9uJzogJzEuMicsICd4bWxucyc6ICd1cm46b2FzaXM6bmFtZXM6dGM6eGxpZmY6ZG9jdW1lbnQ6MS4yJ30pO1xuICAgIC8vIE5PVEU6IHRoZSBgb3JpZ2luYWxgIHByb3BlcnR5IGlzIHNldCB0byB0aGUgbGVnYWN5IGBuZzIudGVtcGxhdGVgIHZhbHVlIGZvciBiYWNrd2FyZFxuICAgIC8vIGNvbXBhdGliaWxpdHkuXG4gICAgLy8gV2UgY291bGQgY29tcHV0ZSB0aGUgZmlsZSBmcm9tIHRoZSBgbWVzc2FnZS5sb2NhdGlvbmAgcHJvcGVydHksIGJ1dCB0aGVyZSBjb3VsZFxuICAgIC8vIGJlIG11bHRpcGxlIHZhbHVlcyBmb3IgdGhpcyBpbiB0aGUgY29sbGVjdGlvbiBvZiBgbWVzc2FnZXNgLiBJbiB0aGF0IGNhc2Ugd2Ugd291bGQgcHJvYmFibHlcbiAgICAvLyBuZWVkIHRvIGNoYW5nZSB0aGUgc2VyaWFsaXplciB0byBvdXRwdXQgYSBuZXcgYDxmaWxlPmAgZWxlbWVudCBmb3IgZWFjaCBjb2xsZWN0aW9uIG9mXG4gICAgLy8gbWVzc2FnZXMgdGhhdCBjb21lIGZyb20gYSBwYXJ0aWN1bGFyIG9yaWdpbmFsIGZpbGUsIGFuZCB0aGUgdHJhbnNsYXRpb24gZmlsZSBwYXJzZXJzIG1heSBub3RcbiAgICAvLyBiZSBhYmxlIHRvIGNvcGUgd2l0aCB0aGlzLlxuICAgIHhtbC5zdGFydFRhZygnZmlsZScsIHtcbiAgICAgICdzb3VyY2UtbGFuZ3VhZ2UnOiB0aGlzLnNvdXJjZUxvY2FsZSxcbiAgICAgICdkYXRhdHlwZSc6ICdwbGFpbnRleHQnLFxuICAgICAgJ29yaWdpbmFsJzogJ25nMi50ZW1wbGF0ZScsXG4gICAgICAuLi50aGlzLmZvcm1hdE9wdGlvbnMsXG4gICAgfSk7XG4gICAgeG1sLnN0YXJ0VGFnKCdib2R5Jyk7XG4gICAgZm9yIChjb25zdCBkdXBsaWNhdGVNZXNzYWdlcyBvZiBtZXNzYWdlR3JvdXBzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZHVwbGljYXRlTWVzc2FnZXNbMF07XG4gICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0TWVzc2FnZUlkKG1lc3NhZ2UpO1xuXG4gICAgICB4bWwuc3RhcnRUYWcoJ3RyYW5zLXVuaXQnLCB7aWQsIGRhdGF0eXBlOiAnaHRtbCd9KTtcbiAgICAgIHhtbC5zdGFydFRhZygnc291cmNlJywge30sIHtwcmVzZXJ2ZVdoaXRlc3BhY2U6IHRydWV9KTtcbiAgICAgIHRoaXMuc2VyaWFsaXplTWVzc2FnZSh4bWwsIG1lc3NhZ2UpO1xuICAgICAgeG1sLmVuZFRhZygnc291cmNlJywge3ByZXNlcnZlV2hpdGVzcGFjZTogZmFsc2V9KTtcblxuICAgICAgLy8gV3JpdGUgYWxsIHRoZSBsb2NhdGlvbnNcbiAgICAgIGZvciAoY29uc3Qge2xvY2F0aW9ufSBvZiBkdXBsaWNhdGVNZXNzYWdlcy5maWx0ZXIoaGFzTG9jYXRpb24pKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplTG9jYXRpb24oeG1sLCBsb2NhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZXNzYWdlLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplTm90ZSh4bWwsICdkZXNjcmlwdGlvbicsIG1lc3NhZ2UuZGVzY3JpcHRpb24pO1xuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgICB0aGlzLnNlcmlhbGl6ZU5vdGUoeG1sLCAnbWVhbmluZycsIG1lc3NhZ2UubWVhbmluZyk7XG4gICAgICB9XG4gICAgICB4bWwuZW5kVGFnKCd0cmFucy11bml0Jyk7XG4gICAgfVxuICAgIHhtbC5lbmRUYWcoJ2JvZHknKTtcbiAgICB4bWwuZW5kVGFnKCdmaWxlJyk7XG4gICAgeG1sLmVuZFRhZygneGxpZmYnKTtcbiAgICByZXR1cm4geG1sLnRvU3RyaW5nKCk7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZU1lc3NhZ2UoeG1sOiBYbWxGaWxlLCBtZXNzYWdlOiDJtVBhcnNlZE1lc3NhZ2UpOiB2b2lkIHtcbiAgICBjb25zdCBsZW5ndGggPSBtZXNzYWdlLm1lc3NhZ2VQYXJ0cy5sZW5ndGggLSAxO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuc2VyaWFsaXplVGV4dFBhcnQoeG1sLCBtZXNzYWdlLm1lc3NhZ2VQYXJ0c1tpXSk7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IG1lc3NhZ2Uuc3Vic3RpdHV0aW9uTG9jYXRpb25zPy5bbWVzc2FnZS5wbGFjZWhvbGRlck5hbWVzW2ldXTtcbiAgICAgIHRoaXMuc2VyaWFsaXplUGxhY2Vob2xkZXIoeG1sLCBtZXNzYWdlLnBsYWNlaG9sZGVyTmFtZXNbaV0sIGxvY2F0aW9uPy50ZXh0KTtcbiAgICB9XG4gICAgdGhpcy5zZXJpYWxpemVUZXh0UGFydCh4bWwsIG1lc3NhZ2UubWVzc2FnZVBhcnRzW2xlbmd0aF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJpYWxpemVUZXh0UGFydCh4bWw6IFhtbEZpbGUsIHRleHQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHBpZWNlcyA9IGV4dHJhY3RJY3VQbGFjZWhvbGRlcnModGV4dCk7XG4gICAgY29uc3QgbGVuZ3RoID0gcGllY2VzLmxlbmd0aCAtIDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMikge1xuICAgICAgeG1sLnRleHQocGllY2VzW2ldKTtcbiAgICAgIHRoaXMuc2VyaWFsaXplUGxhY2Vob2xkZXIoeG1sLCBwaWVjZXNbaSArIDFdLCB1bmRlZmluZWQpO1xuICAgIH1cbiAgICB4bWwudGV4dChwaWVjZXNbbGVuZ3RoXSk7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZVBsYWNlaG9sZGVyKHhtbDogWG1sRmlsZSwgaWQ6IHN0cmluZywgdGV4dDogc3RyaW5nfHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIGNvbnN0IGF0dHJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge2lkfTtcbiAgICBjb25zdCBjdHlwZSA9IGdldEN0eXBlRm9yUGxhY2Vob2xkZXIoaWQpO1xuICAgIGlmIChjdHlwZSAhPT0gbnVsbCkge1xuICAgICAgYXR0cnMuY3R5cGUgPSBjdHlwZTtcbiAgICB9XG4gICAgaWYgKHRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYXR0cnNbJ2VxdWl2LXRleHQnXSA9IHRleHQ7XG4gICAgfVxuICAgIHhtbC5zdGFydFRhZygneCcsIGF0dHJzLCB7c2VsZkNsb3Npbmc6IHRydWV9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplTm90ZSh4bWw6IFhtbEZpbGUsIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHhtbC5zdGFydFRhZygnbm90ZScsIHtwcmlvcml0eTogJzEnLCBmcm9tOiBuYW1lfSwge3ByZXNlcnZlV2hpdGVzcGFjZTogdHJ1ZX0pO1xuICAgIHhtbC50ZXh0KHZhbHVlKTtcbiAgICB4bWwuZW5kVGFnKCdub3RlJywge3ByZXNlcnZlV2hpdGVzcGFjZTogZmFsc2V9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplTG9jYXRpb24oeG1sOiBYbWxGaWxlLCBsb2NhdGlvbjogybVTb3VyY2VMb2NhdGlvbik6IHZvaWQge1xuICAgIHhtbC5zdGFydFRhZygnY29udGV4dC1ncm91cCcsIHtwdXJwb3NlOiAnbG9jYXRpb24nfSk7XG4gICAgdGhpcy5yZW5kZXJDb250ZXh0KHhtbCwgJ3NvdXJjZWZpbGUnLCB0aGlzLmZzLnJlbGF0aXZlKHRoaXMuYmFzZVBhdGgsIGxvY2F0aW9uLmZpbGUpKTtcbiAgICBjb25zdCBlbmRMaW5lU3RyaW5nID0gbG9jYXRpb24uZW5kICE9PSB1bmRlZmluZWQgJiYgbG9jYXRpb24uZW5kLmxpbmUgIT09IGxvY2F0aW9uLnN0YXJ0LmxpbmUgP1xuICAgICAgICBgLCR7bG9jYXRpb24uZW5kLmxpbmUgKyAxfWAgOlxuICAgICAgICAnJztcbiAgICB0aGlzLnJlbmRlckNvbnRleHQoeG1sLCAnbGluZW51bWJlcicsIGAke2xvY2F0aW9uLnN0YXJ0LmxpbmUgKyAxfSR7ZW5kTGluZVN0cmluZ31gKTtcbiAgICB4bWwuZW5kVGFnKCdjb250ZXh0LWdyb3VwJyk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckNvbnRleHQoeG1sOiBYbWxGaWxlLCB0eXBlOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB4bWwuc3RhcnRUYWcoJ2NvbnRleHQnLCB7J2NvbnRleHQtdHlwZSc6IHR5cGV9LCB7cHJlc2VydmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gICAgeG1sLnRleHQodmFsdWUpO1xuICAgIHhtbC5lbmRUYWcoJ2NvbnRleHQnLCB7cHJlc2VydmVXaGl0ZXNwYWNlOiBmYWxzZX0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaWQgZm9yIHRoZSBnaXZlbiBgbWVzc2FnZWAuXG4gICAqXG4gICAqIElmIHRoZXJlIHdhcyBhIGN1c3RvbSBpZCBwcm92aWRlZCwgdXNlIHRoYXQuXG4gICAqXG4gICAqIElmIHdlIGhhdmUgcmVxdWVzdGVkIGxlZ2FjeSBtZXNzYWdlIGlkcywgdGhlbiB0cnkgdG8gcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSBpZFxuICAgKiBmcm9tIHRoZSBsaXN0IG9mIGxlZ2FjeSBpZHMgdGhhdCB3ZXJlIGV4dHJhY3RlZC5cbiAgICpcbiAgICogT3RoZXJ3aXNlIHJldHVybiB0aGUgY2Fub25pY2FsIG1lc3NhZ2UgaWQuXG4gICAqXG4gICAqIEFuIFhsaWZmIDEuMiBsZWdhY3kgbWVzc2FnZSBpZCBpcyBhIGhleCBlbmNvZGVkIFNIQS0xIHN0cmluZywgd2hpY2ggaXMgNDAgY2hhcmFjdGVycyBsb25nLiBTZWVcbiAgICogaHR0cHM6Ly9jc3JjLm5pc3QuZ292L2NzcmMvbWVkaWEvcHVibGljYXRpb25zL2ZpcHMvMTgwLzQvZmluYWwvZG9jdW1lbnRzL2ZpcHMxODAtNC1kcmFmdC1hdWcyMDE0LnBkZlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRNZXNzYWdlSWQobWVzc2FnZTogybVQYXJzZWRNZXNzYWdlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbWVzc2FnZS5jdXN0b21JZCB8fFxuICAgICAgICB0aGlzLnVzZUxlZ2FjeUlkcyAmJiBtZXNzYWdlLmxlZ2FjeUlkcyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIG1lc3NhZ2UubGVnYWN5SWRzLmZpbmQoaWQgPT4gaWQubGVuZ3RoID09PSBMRUdBQ1lfWExJRkZfTUVTU0FHRV9MRU5HVEgpIHx8XG4gICAgICAgIG1lc3NhZ2UuaWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDb21wdXRlIHRoZSB2YWx1ZSBvZiB0aGUgYGN0eXBlYCBhdHRyaWJ1dGUgZnJvbSB0aGUgYHBsYWNlaG9sZGVyYCBuYW1lLlxuICpcbiAqIFRoZSBwbGFjZWhvbGRlciBjYW4gdGFrZSB0aGUgZm9sbG93aW5nIGZvcm1zOlxuICpcbiAqIC0gYFNUQVJUX0JPTERfVEVYVGAvYEVORF9CT0xEX1RFWFRgXG4gKiAtIGBUQUdfPEVMRU1FTlRfTkFNRT5gXG4gKiAtIGBTVEFSVF9UQUdfPEVMRU1FTlRfTkFNRT5gXG4gKiAtIGBDTE9TRV9UQUdfPEVMRU1FTlRfTkFNRT5gXG4gKlxuICogSW4gdGhlc2UgY2FzZXMgdGhlIGVsZW1lbnQgbmFtZSBvZiB0aGUgdGFnIGlzIGV4dHJhY3RlZCBmcm9tIHRoZSBwbGFjZWhvbGRlciBuYW1lIGFuZCByZXR1cm5lZCBhc1xuICogYHgtPGVsZW1lbnRfbmFtZT5gLlxuICpcbiAqIExpbmUgYnJlYWtzIGFuZCBpbWFnZXMgYXJlIHNwZWNpYWwgY2FzZXMuXG4gKi9cbmZ1bmN0aW9uIGdldEN0eXBlRm9yUGxhY2Vob2xkZXIocGxhY2Vob2xkZXI6IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgY29uc3QgdGFnID0gcGxhY2Vob2xkZXIucmVwbGFjZSgvXihTVEFSVF98Q0xPU0VfKS8sICcnKTtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlICdMSU5FX0JSRUFLJzpcbiAgICAgIHJldHVybiAnbGInO1xuICAgIGNhc2UgJ1RBR19JTUcnOlxuICAgICAgcmV0dXJuICdpbWFnZSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0YWcuc3RhcnRzV2l0aCgnVEFHXycpID9cbiAgICAgICAgICB0YWcucmVwbGFjZSgvXlRBR18oLispLywgKF8sIHRhZ05hbWU6IHN0cmluZykgPT4gdGFnTmFtZS50b0xvd2VyQ2FzZSgpKSA6XG4gICAgICAgICAgVEFHX01BUFt0YWddO1xuICAgICAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgeC0ke2VsZW1lbnR9YDtcbiAgfVxufVxuXG5jb25zdCBUQUdfTUFQOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAnTElOSyc6ICdhJyxcbiAgJ0JPTERfVEVYVCc6ICdiJyxcbiAgJ0VNUEhBU0lTRURfVEVYVCc6ICdlbScsXG4gICdIRUFESU5HX0xFVkVMMSc6ICdoMScsXG4gICdIRUFESU5HX0xFVkVMMic6ICdoMicsXG4gICdIRUFESU5HX0xFVkVMMyc6ICdoMycsXG4gICdIRUFESU5HX0xFVkVMNCc6ICdoNCcsXG4gICdIRUFESU5HX0xFVkVMNSc6ICdoNScsXG4gICdIRUFESU5HX0xFVkVMNic6ICdoNicsXG4gICdIT1JJWk9OVEFMX1JVTEUnOiAnaHInLFxuICAnSVRBTElDX1RFWFQnOiAnaScsXG4gICdMSVNUX0lURU0nOiAnbGknLFxuICAnTUVESUFfTElOSyc6ICdsaW5rJyxcbiAgJ09SREVSRURfTElTVCc6ICdvbCcsXG4gICdQQVJBR1JBUEgnOiAncCcsXG4gICdRVU9UQVRJT04nOiAncScsXG4gICdTVFJJS0VUSFJPVUdIX1RFWFQnOiAncycsXG4gICdTTUFMTF9URVhUJzogJ3NtYWxsJyxcbiAgJ1NVQlNUUklQVCc6ICdzdWInLFxuICAnU1VQRVJTQ1JJUFQnOiAnc3VwJyxcbiAgJ1RBQkxFX0JPRFknOiAndGJvZHknLFxuICAnVEFCTEVfQ0VMTCc6ICd0ZCcsXG4gICdUQUJMRV9GT09URVInOiAndGZvb3QnLFxuICAnVEFCTEVfSEVBREVSX0NFTEwnOiAndGgnLFxuICAnVEFCTEVfSEVBREVSJzogJ3RoZWFkJyxcbiAgJ1RBQkxFX1JPVyc6ICd0cicsXG4gICdNT05PU1BBQ0VEX1RFWFQnOiAndHQnLFxuICAnVU5ERVJMSU5FRF9URVhUJzogJ3UnLFxuICAnVU5PUkRFUkVEX0xJU1QnOiAndWwnLFxufTtcbiJdfQ==