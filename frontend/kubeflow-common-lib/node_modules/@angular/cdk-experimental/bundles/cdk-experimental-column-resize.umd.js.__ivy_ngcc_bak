(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk-experimental/popover-edit'), require('@angular/cdk/table'), require('@angular/common'), require('@angular/cdk/coercion'), require('@angular/cdk/portal'), require('@angular/cdk/keycodes')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk-experimental/column-resize', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/cdk-experimental/popover-edit', '@angular/cdk/table', '@angular/common', '@angular/cdk/coercion', '@angular/cdk/portal', '@angular/cdk/keycodes'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.cdkExperimental = global.ng.cdkExperimental || {}, global.ng.cdkExperimental.columnResize = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.ng.cdkExperimental.popoverEdit, global.ng.cdk.table, global.ng.common, global.ng.cdk.coercion, global.ng.cdk.portal, global.ng.cdk.keycodes));
}(this, (function (exports, core, rxjs, operators, popoverEdit, table, common, coercion, portal, keycodes) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO: Figure out how to remove `mat-` classes from the CDK part of the
    // column resize implementation.
    var HEADER_CELL_SELECTOR = '.cdk-header-cell, .mat-header-cell';
    var HEADER_ROW_SELECTOR = '.cdk-header-row, .mat-header-row';
    var RESIZE_OVERLAY_SELECTOR = '.mat-column-resize-overlay-thumb';

    var HOVER_OR_ACTIVE_CLASS = 'cdk-column-resize-hover-or-active';
    var WITH_RESIZED_COLUMN_CLASS = 'cdk-column-resize-with-resized-column';
    var nextId = 0;
    /**
     * Base class for ColumnResize directives which attach to mat-table elements to
     * provide common events and services for column resizing.
     */
    var ColumnResize = /** @class */ (function () {
        function ColumnResize() {
            this.destroyed = new rxjs.Subject();
            /** Unique ID for this table instance. */
            this.selectorId = "" + ++nextId;
        }
        ColumnResize.prototype.ngAfterViewInit = function () {
            this.elementRef.nativeElement.classList.add(this.getUniqueCssClass());
            this._listenForRowHoverEvents();
            this._listenForResizeActivity();
            this._listenForHoverActivity();
        };
        ColumnResize.prototype.ngOnDestroy = function () {
            this.destroyed.next();
            this.destroyed.complete();
        };
        /** Gets the unique CSS class name for this table instance. */
        ColumnResize.prototype.getUniqueCssClass = function () {
            return "cdk-column-resize-" + this.selectorId;
        };
        /** Called when a column in the table is resized. Applies a css class to the table element. */
        ColumnResize.prototype.setResized = function () {
            this.elementRef.nativeElement.classList.add(WITH_RESIZED_COLUMN_CLASS);
        };
        ColumnResize.prototype._listenForRowHoverEvents = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                var element = _this.elementRef.nativeElement;
                rxjs.fromEvent(element, 'mouseover').pipe(operators.map(function (event) { return popoverEdit._closest(event.target, HEADER_CELL_SELECTOR); }), operators.takeUntil(_this.destroyed)).subscribe(_this.eventDispatcher.headerCellHovered);
                rxjs.fromEvent(element, 'mouseleave').pipe(operators.filter(function (event) { return !!event.relatedTarget &&
                    !popoverEdit._matches(event.relatedTarget, RESIZE_OVERLAY_SELECTOR); }), operators.mapTo(null), operators.takeUntil(_this.destroyed)).subscribe(_this.eventDispatcher.headerCellHovered);
            });
        };
        ColumnResize.prototype._listenForResizeActivity = function () {
            var _this = this;
            rxjs.merge(this.eventDispatcher.overlayHandleActiveForCell.pipe(operators.mapTo(undefined)), this.notifier.triggerResize.pipe(operators.mapTo(undefined)), this.notifier.resizeCompleted.pipe(operators.mapTo(undefined))).pipe(operators.take(1), operators.takeUntil(this.destroyed)).subscribe(function () {
                _this.setResized();
            });
        };
        ColumnResize.prototype._listenForHoverActivity = function () {
            this.eventDispatcher.headerRowHoveredOrActiveDistinct.pipe(operators.startWith(null), operators.pairwise(), operators.takeUntil(this.destroyed)).subscribe(function (_a) {
                var _b = __read(_a, 2), previousRow = _b[0], hoveredRow = _b[1];
                if (hoveredRow) {
                    hoveredRow.classList.add(HOVER_OR_ACTIVE_CLASS);
                }
                if (previousRow) {
                    previousRow.classList.remove(HOVER_OR_ACTIVE_CLASS);
                }
            });
        };
        return ColumnResize;
    }());
    ColumnResize.decorators = [
        { type: core.Directive }
    ];

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Originating source of column resize events within a table.
     * @docs-private
     */
    var ColumnResizeNotifierSource = /** @class */ (function () {
        function ColumnResizeNotifierSource() {
            /** Emits when an in-progress resize is canceled. */
            this.resizeCanceled = new rxjs.Subject();
            /** Emits when a resize is applied. */
            this.resizeCompleted = new rxjs.Subject();
            /** Triggers a resize action. */
            this.triggerResize = new rxjs.Subject();
        }
        return ColumnResizeNotifierSource;
    }());
    ColumnResizeNotifierSource.decorators = [
        { type: core.Injectable }
    ];
    /** Service for triggering column resizes imperatively or being notified of them. */
    var ColumnResizeNotifier = /** @class */ (function () {
        function ColumnResizeNotifier(_source) {
            this._source = _source;
            /** Emits whenever a column is resized. */
            this.resizeCompleted = this._source.resizeCompleted;
        }
        /** Instantly resizes the specified column. */
        ColumnResizeNotifier.prototype.resize = function (columnId, size) {
            this._source.triggerResize.next({ columnId: columnId, size: size, completeImmediately: true, isStickyColumn: true });
        };
        return ColumnResizeNotifier;
    }());
    ColumnResizeNotifier.decorators = [
        { type: core.Injectable }
    ];
    ColumnResizeNotifier.ctorParameters = function () { return [
        { type: ColumnResizeNotifierSource }
    ]; };

    /** Coordinates events between the column resize directives. */
    var HeaderRowEventDispatcher = /** @class */ (function () {
        function HeaderRowEventDispatcher(_ngZone) {
            this._ngZone = _ngZone;
            /**
             * Emits the currently hovered header cell or null when no header cells are hovered.
             * Exposed publicly for events to feed in, but subscribers should use headerCellHoveredDistinct,
             * defined below.
             */
            this.headerCellHovered = new rxjs.Subject();
            /**
             * Emits the header cell for which a user-triggered resize is active or null
             * when no resize is in progress.
             */
            this.overlayHandleActiveForCell = new rxjs.Subject();
            /** Distinct and shared version of headerCellHovered. */
            this.headerCellHoveredDistinct = this.headerCellHovered.pipe(operators.distinctUntilChanged(), operators.share());
            /**
             * Emits the header that is currently hovered or hosting an active resize event (with active
             * taking precedence).
             */
            this.headerRowHoveredOrActiveDistinct = rxjs.combineLatest([
                this.headerCellHoveredDistinct.pipe(operators.map(function (cell) { return popoverEdit._closest(cell, HEADER_ROW_SELECTOR); }), operators.startWith(null), operators.distinctUntilChanged()),
                this.overlayHandleActiveForCell.pipe(operators.map(function (cell) { return popoverEdit._closest(cell, HEADER_ROW_SELECTOR); }), operators.startWith(null), operators.distinctUntilChanged()),
            ]).pipe(operators.skip(1), // Ignore initial [null, null] emission.
            operators.map(function (_a) {
                var _b = __read(_a, 2), hovered = _b[0], active = _b[1];
                return active || hovered;
            }), operators.distinctUntilChanged(), operators.share());
            this._headerRowHoveredOrActiveDistinctReenterZone = this.headerRowHoveredOrActiveDistinct.pipe(this._enterZone(), operators.share());
            // Optimization: Share row events observable with subsequent callers.
            // At startup, calls will be sequential by row (and typically there's only one).
            this._lastSeenRow = null;
            this._lastSeenRowHover = null;
        }
        /**
         * Emits whether the specified row should show its overlay controls.
         * Emission occurs within the NgZone.
         */
        HeaderRowEventDispatcher.prototype.resizeOverlayVisibleForHeaderRow = function (row) {
            if (row !== this._lastSeenRow) {
                this._lastSeenRow = row;
                this._lastSeenRowHover = this._headerRowHoveredOrActiveDistinctReenterZone.pipe(operators.map(function (hoveredRow) { return hoveredRow === row; }), operators.distinctUntilChanged(), operators.share());
            }
            return this._lastSeenRowHover;
        };
        HeaderRowEventDispatcher.prototype._enterZone = function () {
            var _this = this;
            return function (source) { return new rxjs.Observable(function (observer) { return source.subscribe({
                next: function (value) { return _this._ngZone.run(function () { return observer.next(value); }); },
                error: function (err) { return observer.error(err); },
                complete: function () { return observer.complete(); }
            }); }); };
        };
        return HeaderRowEventDispatcher;
    }());
    HeaderRowEventDispatcher.decorators = [
        { type: core.Injectable }
    ];
    HeaderRowEventDispatcher.ctorParameters = function () { return [
        { type: core.NgZone }
    ]; };

    /**
     * Provides an implementation for resizing a column.
     * The details of how resizing works for tables for flex mat-tables are quite different.
     */
    var ResizeStrategy = /** @class */ (function () {
        function ResizeStrategy() {
            this._pendingResizeDelta = null;
        }
        /** Adjusts the width of the table element by the specified delta. */
        ResizeStrategy.prototype.updateTableWidthAndStickyColumns = function (delta) {
            var _this = this;
            var _a;
            if (this._pendingResizeDelta === null) {
                var tableElement_1 = this.columnResize.elementRef.nativeElement;
                var tableWidth_1 = getElementWidth(tableElement_1);
                this.styleScheduler.schedule(function () {
                    tableElement_1.style.width = coercion.coerceCssPixelValue(tableWidth_1 + _this._pendingResizeDelta);
                    _this._pendingResizeDelta = null;
                });
                this.styleScheduler.scheduleEnd(function () {
                    _this.table.updateStickyColumnStyles();
                });
            }
            this._pendingResizeDelta = ((_a = this._pendingResizeDelta) !== null && _a !== void 0 ? _a : 0) + delta;
        };
        return ResizeStrategy;
    }());
    ResizeStrategy.decorators = [
        { type: core.Injectable }
    ];
    /**
     * The optimially performing resize strategy for &lt;table&gt; elements with table-layout: fixed.
     * Tested against and outperformed:
     *   CSS selector
     *   CSS selector w/ CSS variable
     *   Updating all cell nodes
     */
    var TableLayoutFixedResizeStrategy = /** @class */ (function (_super) {
        __extends(TableLayoutFixedResizeStrategy, _super);
        function TableLayoutFixedResizeStrategy(columnResize, styleScheduler, table) {
            var _this = _super.call(this) || this;
            _this.columnResize = columnResize;
            _this.styleScheduler = styleScheduler;
            _this.table = table;
            return _this;
        }
        TableLayoutFixedResizeStrategy.prototype.applyColumnSize = function (_, columnHeader, sizeInPx, previousSizeInPx) {
            var delta = sizeInPx - (previousSizeInPx !== null && previousSizeInPx !== void 0 ? previousSizeInPx : getElementWidth(columnHeader));
            if (delta === 0) {
                return;
            }
            this.styleScheduler.schedule(function () {
                columnHeader.style.width = coercion.coerceCssPixelValue(sizeInPx);
            });
            this.updateTableWidthAndStickyColumns(delta);
        };
        TableLayoutFixedResizeStrategy.prototype.applyMinColumnSize = function (_, columnHeader, sizeInPx) {
            var currentWidth = getElementWidth(columnHeader);
            var newWidth = Math.max(currentWidth, sizeInPx);
            this.applyColumnSize(_, columnHeader, newWidth, currentWidth);
        };
        TableLayoutFixedResizeStrategy.prototype.applyMaxColumnSize = function (_, columnHeader, sizeInPx) {
            var currentWidth = getElementWidth(columnHeader);
            var newWidth = Math.min(currentWidth, sizeInPx);
            this.applyColumnSize(_, columnHeader, newWidth, currentWidth);
        };
        return TableLayoutFixedResizeStrategy;
    }(ResizeStrategy));
    TableLayoutFixedResizeStrategy.decorators = [
        { type: core.Injectable }
    ];
    TableLayoutFixedResizeStrategy.ctorParameters = function () { return [
        { type: ColumnResize },
        { type: table._CoalescedStyleScheduler, decorators: [{ type: core.Inject, args: [table._COALESCED_STYLE_SCHEDULER,] }] },
        { type: table.CdkTable }
    ]; };
    /**
     * The optimally performing resize strategy for flex mat-tables.
     * Tested against and outperformed:
     *   CSS selector w/ CSS variable
     *   Updating all mat-cell nodes
     */
    var CdkFlexTableResizeStrategy = /** @class */ (function (_super) {
        __extends(CdkFlexTableResizeStrategy, _super);
        function CdkFlexTableResizeStrategy(columnResize, styleScheduler, table, document) {
            var _this = _super.call(this) || this;
            _this.columnResize = columnResize;
            _this.styleScheduler = styleScheduler;
            _this.table = table;
            _this._columnIndexes = new Map();
            _this._columnProperties = new Map();
            _this._indexSequence = 0;
            _this.defaultMinSize = 0;
            _this.defaultMaxSize = Number.MAX_SAFE_INTEGER;
            _this._document = document;
            return _this;
        }
        CdkFlexTableResizeStrategy.prototype.applyColumnSize = function (cssFriendlyColumnName, columnHeader, sizeInPx, previousSizeInPx) {
            // Optimization: Check applied width first as we probably set it already before reading
            // offsetWidth which triggers layout.
            var delta = sizeInPx - (previousSizeInPx !== null && previousSizeInPx !== void 0 ? previousSizeInPx : (this._getAppliedWidth(cssFriendlyColumnName) || columnHeader.offsetWidth));
            if (delta === 0) {
                return;
            }
            var cssSize = coercion.coerceCssPixelValue(sizeInPx);
            this._applyProperty(cssFriendlyColumnName, 'flex', "0 0.01 " + cssSize);
            this.updateTableWidthAndStickyColumns(delta);
        };
        CdkFlexTableResizeStrategy.prototype.applyMinColumnSize = function (cssFriendlyColumnName, _, sizeInPx) {
            var cssSize = coercion.coerceCssPixelValue(sizeInPx);
            this._applyProperty(cssFriendlyColumnName, 'min-width', cssSize, sizeInPx !== this.defaultMinSize);
            this.updateTableWidthAndStickyColumns(0);
        };
        CdkFlexTableResizeStrategy.prototype.applyMaxColumnSize = function (cssFriendlyColumnName, _, sizeInPx) {
            var cssSize = coercion.coerceCssPixelValue(sizeInPx);
            this._applyProperty(cssFriendlyColumnName, 'max-width', cssSize, sizeInPx !== this.defaultMaxSize);
            this.updateTableWidthAndStickyColumns(0);
        };
        CdkFlexTableResizeStrategy.prototype.getColumnCssClass = function (cssFriendlyColumnName) {
            return "cdk-column-" + cssFriendlyColumnName;
        };
        CdkFlexTableResizeStrategy.prototype.ngOnDestroy = function () {
            // TODO: Use remove() once we're off IE11.
            if (this._styleElement && this._styleElement.parentNode) {
                this._styleElement.parentNode.removeChild(this._styleElement);
                this._styleElement = undefined;
            }
        };
        CdkFlexTableResizeStrategy.prototype._getPropertyValue = function (cssFriendlyColumnName, key) {
            var properties = this._getColumnPropertiesMap(cssFriendlyColumnName);
            return properties.get(key);
        };
        CdkFlexTableResizeStrategy.prototype._getAppliedWidth = function (cssFriendslyColumnName) {
            return coercePixelsFromFlexValue(this._getPropertyValue(cssFriendslyColumnName, 'flex'));
        };
        CdkFlexTableResizeStrategy.prototype._applyProperty = function (cssFriendlyColumnName, key, value, enable) {
            var _this = this;
            if (enable === void 0) { enable = true; }
            var properties = this._getColumnPropertiesMap(cssFriendlyColumnName);
            this.styleScheduler.schedule(function () {
                if (enable) {
                    properties.set(key, value);
                }
                else {
                    properties.delete(key);
                }
                _this._applySizeCss(cssFriendlyColumnName);
            });
        };
        CdkFlexTableResizeStrategy.prototype._getStyleSheet = function () {
            if (!this._styleElement) {
                this._styleElement = this._document.createElement('style');
                this._styleElement.appendChild(this._document.createTextNode(''));
                this._document.head.appendChild(this._styleElement);
            }
            return this._styleElement.sheet;
        };
        CdkFlexTableResizeStrategy.prototype._getColumnPropertiesMap = function (cssFriendlyColumnName) {
            var properties = this._columnProperties.get(cssFriendlyColumnName);
            if (properties === undefined) {
                properties = new Map();
                this._columnProperties.set(cssFriendlyColumnName, properties);
            }
            return properties;
        };
        CdkFlexTableResizeStrategy.prototype._applySizeCss = function (cssFriendlyColumnName) {
            var properties = this._getColumnPropertiesMap(cssFriendlyColumnName);
            var propertyKeys = Array.from(properties.keys());
            var index = this._columnIndexes.get(cssFriendlyColumnName);
            if (index === undefined) {
                if (!propertyKeys.length) {
                    // Nothing to set or unset.
                    return;
                }
                index = this._indexSequence++;
                this._columnIndexes.set(cssFriendlyColumnName, index);
            }
            else {
                this._getStyleSheet().deleteRule(index);
            }
            var columnClassName = this.getColumnCssClass(cssFriendlyColumnName);
            var tableClassName = this.columnResize.getUniqueCssClass();
            var selector = "." + tableClassName + " ." + columnClassName;
            var body = propertyKeys.map(function (key) { return key + ":" + properties.get(key); }).join(';');
            this._getStyleSheet().insertRule(selector + " {" + body + "}", index);
        };
        return CdkFlexTableResizeStrategy;
    }(ResizeStrategy));
    CdkFlexTableResizeStrategy.decorators = [
        { type: core.Injectable }
    ];
    CdkFlexTableResizeStrategy.ctorParameters = function () { return [
        { type: ColumnResize },
        { type: table._CoalescedStyleScheduler, decorators: [{ type: core.Inject, args: [table._COALESCED_STYLE_SCHEDULER,] }] },
        { type: table.CdkTable },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] }
    ]; };
    /** Converts CSS pixel values to numbers, eg "123px" to 123. Returns NaN for non pixel values. */
    function coercePixelsFromCssValue(cssValue) {
        var _a;
        return Number((_a = cssValue.match(/(\d+)px/)) === null || _a === void 0 ? void 0 : _a[1]);
    }
    /** Gets the style.width pixels on the specified element if present, otherwise its offsetWidth. */
    function getElementWidth(element) {
        // Optimization: Check style.width first as we probably set it already before reading
        // offsetWidth which triggers layout.
        return coercePixelsFromCssValue(element.style.width) || element.offsetWidth;
    }
    /**
     * Converts CSS flex values as set in CdkFlexTableResizeStrategy to numbers,
     * eg "0 0.01 123px" to 123.
     */
    function coercePixelsFromFlexValue(flexValue) {
        var _a;
        return Number((_a = flexValue === null || flexValue === void 0 ? void 0 : flexValue.match(/0 0\.01 (\d+)px/)) === null || _a === void 0 ? void 0 : _a[1]);
    }
    var TABLE_LAYOUT_FIXED_RESIZE_STRATEGY_PROVIDER = {
        provide: ResizeStrategy,
        useClass: TableLayoutFixedResizeStrategy,
    };
    var FLEX_RESIZE_STRATEGY_PROVIDER = {
        provide: ResizeStrategy,
        useClass: CdkFlexTableResizeStrategy,
    };

    var PROVIDERS = [
        ColumnResizeNotifier,
        HeaderRowEventDispatcher,
        ColumnResizeNotifierSource,
    ];
    var TABLE_PROVIDERS = __spreadArray(__spreadArray([], __read(PROVIDERS)), [
        TABLE_LAYOUT_FIXED_RESIZE_STRATEGY_PROVIDER,
    ]);
    var FLEX_PROVIDERS = __spreadArray(__spreadArray([], __read(PROVIDERS)), [FLEX_RESIZE_STRATEGY_PROVIDER]);

    /**
     * Explicitly enables column resizing for a table-based cdk-table.
     * Individual columns must be annotated specifically.
     */
    var CdkColumnResize = /** @class */ (function (_super) {
        __extends(CdkColumnResize, _super);
        function CdkColumnResize(columnResizeNotifier, elementRef, eventDispatcher, ngZone, notifier, table) {
            var _this = _super.call(this) || this;
            _this.columnResizeNotifier = columnResizeNotifier;
            _this.elementRef = elementRef;
            _this.eventDispatcher = eventDispatcher;
            _this.ngZone = ngZone;
            _this.notifier = notifier;
            _this.table = table;
            return _this;
        }
        return CdkColumnResize;
    }(ColumnResize));
    CdkColumnResize.decorators = [
        { type: core.Directive, args: [{
                    selector: 'table[cdk-table][columnResize]',
                    providers: __spreadArray(__spreadArray([], __read(TABLE_PROVIDERS)), [
                        { provide: ColumnResize, useExisting: CdkColumnResize },
                    ]),
                },] }
    ];
    CdkColumnResize.ctorParameters = function () { return [
        { type: ColumnResizeNotifier },
        { type: core.ElementRef },
        { type: HeaderRowEventDispatcher },
        { type: core.NgZone },
        { type: ColumnResizeNotifierSource },
        { type: table.CdkTable }
    ]; };

    /**
     * Explicitly enables column resizing for a flexbox-based cdk-table.
     * Individual columns must be annotated specifically.
     */
    var CdkColumnResizeFlex = /** @class */ (function (_super) {
        __extends(CdkColumnResizeFlex, _super);
        function CdkColumnResizeFlex(columnResizeNotifier, elementRef, eventDispatcher, ngZone, notifier, table) {
            var _this = _super.call(this) || this;
            _this.columnResizeNotifier = columnResizeNotifier;
            _this.elementRef = elementRef;
            _this.eventDispatcher = eventDispatcher;
            _this.ngZone = ngZone;
            _this.notifier = notifier;
            _this.table = table;
            return _this;
        }
        return CdkColumnResizeFlex;
    }(ColumnResize));
    CdkColumnResizeFlex.decorators = [
        { type: core.Directive, args: [{
                    selector: 'cdk-table[columnResize]',
                    providers: __spreadArray(__spreadArray([], __read(FLEX_PROVIDERS)), [
                        { provide: ColumnResize, useExisting: CdkColumnResizeFlex },
                    ]),
                },] }
    ];
    CdkColumnResizeFlex.ctorParameters = function () { return [
        { type: ColumnResizeNotifier },
        { type: core.ElementRef },
        { type: HeaderRowEventDispatcher },
        { type: core.NgZone },
        { type: ColumnResizeNotifierSource },
        { type: table.CdkTable }
    ]; };

    /**
     * Implicitly enables column resizing for a table-based cdk-table.
     * Individual columns will be resizable unless opted out.
     */
    var CdkDefaultEnabledColumnResize = /** @class */ (function (_super) {
        __extends(CdkDefaultEnabledColumnResize, _super);
        function CdkDefaultEnabledColumnResize(columnResizeNotifier, elementRef, eventDispatcher, ngZone, notifier, table) {
            var _this = _super.call(this) || this;
            _this.columnResizeNotifier = columnResizeNotifier;
            _this.elementRef = elementRef;
            _this.eventDispatcher = eventDispatcher;
            _this.ngZone = ngZone;
            _this.notifier = notifier;
            _this.table = table;
            return _this;
        }
        return CdkDefaultEnabledColumnResize;
    }(ColumnResize));
    CdkDefaultEnabledColumnResize.decorators = [
        { type: core.Directive, args: [{
                    selector: 'table[cdk-table]',
                    providers: __spreadArray(__spreadArray([], __read(TABLE_PROVIDERS)), [
                        { provide: ColumnResize, useExisting: CdkDefaultEnabledColumnResize },
                    ]),
                },] }
    ];
    CdkDefaultEnabledColumnResize.ctorParameters = function () { return [
        { type: ColumnResizeNotifier },
        { type: core.ElementRef },
        { type: HeaderRowEventDispatcher },
        { type: core.NgZone },
        { type: ColumnResizeNotifierSource },
        { type: table.CdkTable }
    ]; };

    /**
     * Implicitly enables column resizing for a flex cdk-table.
     * Individual columns will be resizable unless opted out.
     */
    var CdkDefaultEnabledColumnResizeFlex = /** @class */ (function (_super) {
        __extends(CdkDefaultEnabledColumnResizeFlex, _super);
        function CdkDefaultEnabledColumnResizeFlex(columnResizeNotifier, elementRef, eventDispatcher, ngZone, notifier, table) {
            var _this = _super.call(this) || this;
            _this.columnResizeNotifier = columnResizeNotifier;
            _this.elementRef = elementRef;
            _this.eventDispatcher = eventDispatcher;
            _this.ngZone = ngZone;
            _this.notifier = notifier;
            _this.table = table;
            return _this;
        }
        return CdkDefaultEnabledColumnResizeFlex;
    }(ColumnResize));
    CdkDefaultEnabledColumnResizeFlex.decorators = [
        { type: core.Directive, args: [{
                    selector: 'cdk-table',
                    providers: __spreadArray(__spreadArray([], __read(FLEX_PROVIDERS)), [
                        { provide: ColumnResize, useExisting: CdkDefaultEnabledColumnResizeFlex },
                    ]),
                },] }
    ];
    CdkDefaultEnabledColumnResizeFlex.ctorParameters = function () { return [
        { type: ColumnResizeNotifier },
        { type: core.ElementRef },
        { type: HeaderRowEventDispatcher },
        { type: core.NgZone },
        { type: ColumnResizeNotifierSource },
        { type: table.CdkTable }
    ]; };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * One of two NgModules for use with CdkColumnResize.
     * When using this module, columns are resizable by default.
     */
    var CdkColumnResizeDefaultEnabledModule = /** @class */ (function () {
        function CdkColumnResizeDefaultEnabledModule() {
        }
        return CdkColumnResizeDefaultEnabledModule;
    }());
    CdkColumnResizeDefaultEnabledModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [CdkDefaultEnabledColumnResize, CdkDefaultEnabledColumnResizeFlex],
                    exports: [CdkDefaultEnabledColumnResize, CdkDefaultEnabledColumnResizeFlex],
                },] }
    ];
    /**
     * One of two NgModules for use with CdkColumnResize.
     * When using this module, columns are not resizable by default.
     */
    var CdkColumnResizeModule = /** @class */ (function () {
        function CdkColumnResizeModule() {
        }
        return CdkColumnResizeModule;
    }());
    CdkColumnResizeModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [CdkColumnResize, CdkColumnResizeFlex],
                    exports: [CdkColumnResize, CdkColumnResizeFlex],
                },] }
    ];

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Can be provided by the host application to enable persistence of column resize state.
     */
    var ColumnSizeStore = /** @class */ (function () {
        function ColumnSizeStore() {
        }
        return ColumnSizeStore;
    }());
    ColumnSizeStore.decorators = [
        { type: core.Injectable }
    ];

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Tracks state of resize events in progress. */
    var ResizeRef = /** @class */ (function () {
        function ResizeRef(origin, overlayRef, minWidthPx, maxWidthPx) {
            this.origin = origin;
            this.overlayRef = overlayRef;
            this.minWidthPx = minWidthPx;
            this.maxWidthPx = maxWidthPx;
        }
        return ResizeRef;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var OVERLAY_ACTIVE_CLASS = 'cdk-resizable-overlay-thumb-active';
    /**
     * Base class for Resizable directives which are applied to column headers to make those columns
     * resizable.
     */
    var Resizable = /** @class */ (function () {
        function Resizable() {
            this.minWidthPxInternal = 0;
            this.maxWidthPxInternal = Number.MAX_SAFE_INTEGER;
            this.destroyed = new rxjs.Subject();
            this._viewInitialized = false;
        }
        Object.defineProperty(Resizable.prototype, "minWidthPx", {
            /** The minimum width to allow the column to be sized to. */
            get: function () {
                return this.minWidthPxInternal;
            },
            set: function (value) {
                this.minWidthPxInternal = value;
                this.columnResize.setResized();
                if (this.elementRef.nativeElement && this._viewInitialized) {
                    this._applyMinWidthPx();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Resizable.prototype, "maxWidthPx", {
            /** The maximum width to allow the column to be sized to. */
            get: function () {
                return this.maxWidthPxInternal;
            },
            set: function (value) {
                this.maxWidthPxInternal = value;
                this.columnResize.setResized();
                if (this.elementRef.nativeElement && this._viewInitialized) {
                    this._applyMaxWidthPx();
                }
            },
            enumerable: false,
            configurable: true
        });
        Resizable.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._listenForRowHoverEvents();
            this._listenForResizeEvents();
            this._appendInlineHandle();
            this.styleScheduler.scheduleEnd(function () {
                _this._viewInitialized = true;
                _this._applyMinWidthPx();
                _this._applyMaxWidthPx();
            });
        };
        Resizable.prototype.ngOnDestroy = function () {
            this.destroyed.next();
            this.destroyed.complete();
            if (this.inlineHandle) {
                this.elementRef.nativeElement.removeChild(this.inlineHandle);
            }
            if (this.overlayRef) {
                this.overlayRef.dispose();
            }
        };
        Resizable.prototype._createOverlayForHandle = function () {
            // Use of overlays allows us to properly capture click events spanning parts
            // of two table cells and is also useful for displaying a resize thumb
            // over both cells and extending it down the table as needed.
            var isRtl = this.directionality.value === 'rtl';
            var positionStrategy = this.overlay.position()
                .flexibleConnectedTo(this.elementRef.nativeElement)
                .withFlexibleDimensions(false)
                .withGrowAfterOpen(false)
                .withPush(false)
                .withDefaultOffsetX(isRtl ? 1 : 0)
                .withPositions([{
                    originX: isRtl ? 'start' : 'end',
                    originY: 'top',
                    overlayX: 'center',
                    overlayY: 'top',
                }]);
            return this.overlay.create({
                // Always position the overlay based on left-indexed coordinates.
                direction: 'ltr',
                disposeOnNavigation: true,
                positionStrategy: positionStrategy,
                scrollStrategy: this.overlay.scrollStrategies.reposition(),
                width: '16px',
            });
        };
        Resizable.prototype._listenForRowHoverEvents = function () {
            var _this = this;
            var element = this.elementRef.nativeElement;
            var takeUntilDestroyed = operators.takeUntil(this.destroyed);
            this.eventDispatcher.resizeOverlayVisibleForHeaderRow(popoverEdit._closest(element, HEADER_ROW_SELECTOR))
                .pipe(takeUntilDestroyed).subscribe(function (hoveringRow) {
                if (hoveringRow) {
                    if (!_this.overlayRef) {
                        _this.overlayRef = _this._createOverlayForHandle();
                    }
                    _this._showHandleOverlay();
                }
                else if (_this.overlayRef) {
                    // todo - can't detach during an active resize - need to work that out
                    _this.overlayRef.detach();
                }
            });
        };
        Resizable.prototype._listenForResizeEvents = function () {
            var _this = this;
            var takeUntilDestroyed = operators.takeUntil(this.destroyed);
            rxjs.merge(this.resizeNotifier.resizeCanceled, this.resizeNotifier.triggerResize).pipe(takeUntilDestroyed, operators.filter(function (columnSize) { return columnSize.columnId === _this.columnDef.name; })).subscribe(function (_a) {
                var size = _a.size, previousSize = _a.previousSize, completeImmediately = _a.completeImmediately;
                _this.elementRef.nativeElement.classList.add(OVERLAY_ACTIVE_CLASS);
                _this._applySize(size, previousSize);
                if (completeImmediately) {
                    _this._completeResizeOperation();
                }
            });
            rxjs.merge(this.resizeNotifier.resizeCanceled, this.resizeNotifier.resizeCompleted).pipe(takeUntilDestroyed).subscribe(function (columnSize) {
                _this._cleanUpAfterResize(columnSize);
            });
        };
        Resizable.prototype._completeResizeOperation = function () {
            var _this = this;
            this.ngZone.run(function () {
                _this.resizeNotifier.resizeCompleted.next({
                    columnId: _this.columnDef.name,
                    size: _this.elementRef.nativeElement.offsetWidth,
                });
            });
        };
        Resizable.prototype._cleanUpAfterResize = function (columnSize) {
            this.elementRef.nativeElement.classList.remove(OVERLAY_ACTIVE_CLASS);
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this._updateOverlayHandleHeight();
                this.overlayRef.updatePosition();
                if (columnSize.columnId === this.columnDef.name) {
                    this.inlineHandle.focus();
                }
            }
        };
        Resizable.prototype._createHandlePortal = function () {
            var injector = core.Injector.create({
                parent: this.injector,
                providers: [{
                        provide: ResizeRef,
                        useValue: new ResizeRef(this.elementRef, this.overlayRef, this.minWidthPx, this.maxWidthPx)
                    }]
            });
            return new portal.ComponentPortal(this.getOverlayHandleComponentType(), this.viewContainerRef, injector);
        };
        Resizable.prototype._showHandleOverlay = function () {
            this._updateOverlayHandleHeight();
            this.overlayRef.attach(this._createHandlePortal());
            // Needed to ensure that all of the lifecycle hooks inside the overlay run immediately.
            this.changeDetectorRef.markForCheck();
        };
        Resizable.prototype._updateOverlayHandleHeight = function () {
            this.overlayRef.updateSize({ height: this.elementRef.nativeElement.offsetHeight });
        };
        Resizable.prototype._applySize = function (sizeInPixels, previousSize) {
            var sizeToApply = Math.min(Math.max(sizeInPixels, this.minWidthPx, 0), this.maxWidthPx);
            this.resizeStrategy.applyColumnSize(this.columnDef.cssClassFriendlyName, this.elementRef.nativeElement, sizeToApply, previousSize);
        };
        Resizable.prototype._applyMinWidthPx = function () {
            this.resizeStrategy.applyMinColumnSize(this.columnDef.cssClassFriendlyName, this.elementRef.nativeElement, this.minWidthPx);
        };
        Resizable.prototype._applyMaxWidthPx = function () {
            this.resizeStrategy.applyMaxColumnSize(this.columnDef.cssClassFriendlyName, this.elementRef.nativeElement, this.maxWidthPx);
        };
        Resizable.prototype._appendInlineHandle = function () {
            var _this = this;
            this.styleScheduler.schedule(function () {
                _this.inlineHandle = _this.document.createElement('div');
                _this.inlineHandle.tabIndex = 0;
                _this.inlineHandle.className = _this.getInlineHandleCssClassName();
                // TODO: Apply correct aria role (probably slider) after a11y spec questions resolved.
                _this.elementRef.nativeElement.appendChild(_this.inlineHandle);
            });
        };
        return Resizable;
    }());
    Resizable.decorators = [
        { type: core.Directive }
    ];

    // TODO: Take another look at using cdk drag drop. IIRC I ran into a couple
    // good reasons for not using it but I don't remember what they were at this point.
    /**
     * Base class for a component shown over the edge of a resizable column that is responsible
     * for handling column resize mouse events and displaying any visible UI on the column edge.
     */
    var ResizeOverlayHandle = /** @class */ (function () {
        function ResizeOverlayHandle() {
            this.destroyed = new rxjs.Subject();
        }
        ResizeOverlayHandle.prototype.ngAfterViewInit = function () {
            this._listenForMouseEvents();
        };
        ResizeOverlayHandle.prototype.ngOnDestroy = function () {
            this.destroyed.next();
            this.destroyed.complete();
        };
        ResizeOverlayHandle.prototype._listenForMouseEvents = function () {
            var _this = this;
            this.ngZone.runOutsideAngular(function () {
                rxjs.fromEvent(_this.elementRef.nativeElement, 'mouseenter').pipe(operators.mapTo(_this.resizeRef.origin.nativeElement), operators.takeUntil(_this.destroyed)).subscribe(function (cell) { return _this.eventDispatcher.headerCellHovered.next(cell); });
                rxjs.fromEvent(_this.elementRef.nativeElement, 'mouseleave').pipe(operators.map(function (event) { return event.relatedTarget &&
                    popoverEdit._closest(event.relatedTarget, HEADER_CELL_SELECTOR); }), operators.takeUntil(_this.destroyed)).subscribe(function (cell) { return _this.eventDispatcher.headerCellHovered.next(cell); });
                rxjs.fromEvent(_this.elementRef.nativeElement, 'mousedown')
                    .pipe(operators.takeUntil(_this.destroyed)).subscribe(function (mousedownEvent) {
                    _this._dragStarted(mousedownEvent);
                });
            });
        };
        ResizeOverlayHandle.prototype._dragStarted = function (mousedownEvent) {
            var _this = this;
            // Only allow dragging using the left mouse button.
            if (mousedownEvent.button !== 0) {
                return;
            }
            var mouseup = rxjs.fromEvent(this.document, 'mouseup');
            var mousemove = rxjs.fromEvent(this.document, 'mousemove');
            var escape = rxjs.fromEvent(this.document, 'keyup')
                .pipe(operators.filter(function (event) { return event.keyCode === keycodes.ESCAPE; }));
            var startX = mousedownEvent.screenX;
            var initialSize = this._getOriginWidth();
            var overlayOffset = 0;
            var originOffset = this._getOriginOffset();
            var size = initialSize;
            var overshot = 0;
            this.updateResizeActive(true);
            mouseup.pipe(operators.takeUntil(rxjs.merge(escape, this.destroyed))).subscribe(function (_a) {
                var screenX = _a.screenX;
                _this.styleScheduler.scheduleEnd(function () {
                    _this._notifyResizeEnded(size, screenX !== startX);
                });
            });
            escape.pipe(operators.takeUntil(rxjs.merge(mouseup, this.destroyed))).subscribe(function () {
                _this._notifyResizeEnded(initialSize);
            });
            mousemove.pipe(operators.map(function (_a) {
                var screenX = _a.screenX;
                return screenX;
            }), operators.startWith(startX), operators.distinctUntilChanged(), operators.pairwise(), operators.takeUntil(rxjs.merge(mouseup, escape, this.destroyed))).subscribe(function (_a) {
                var _b = __read(_a, 2), prevX = _b[0], currX = _b[1];
                var deltaX = currX - prevX;
                // If the mouse moved further than the resize was able to match, limit the
                // movement of the overlay to match the actual size and position of the origin.
                if (overshot !== 0) {
                    if (overshot < 0 && deltaX < 0 || overshot > 0 && deltaX > 0) {
                        overshot += deltaX;
                        return;
                    }
                    else {
                        var remainingOvershot = overshot + deltaX;
                        overshot = overshot > 0 ?
                            Math.max(remainingOvershot, 0) : Math.min(remainingOvershot, 0);
                        deltaX = remainingOvershot - overshot;
                        if (deltaX === 0) {
                            return;
                        }
                    }
                }
                var computedNewSize = size + (_this._isLtr() ? deltaX : -deltaX);
                computedNewSize = Math.min(Math.max(computedNewSize, _this.resizeRef.minWidthPx, 0), _this.resizeRef.maxWidthPx);
                _this.resizeNotifier.triggerResize.next({
                    columnId: _this.columnDef.name,
                    size: computedNewSize,
                    previousSize: size,
                    isStickyColumn: _this.columnDef.sticky || _this.columnDef.stickyEnd,
                });
                _this.styleScheduler.scheduleEnd(function () {
                    var originNewSize = _this._getOriginWidth();
                    var originNewOffset = _this._getOriginOffset();
                    var originOffsetDeltaX = originNewOffset - originOffset;
                    var originSizeDeltaX = originNewSize - size;
                    size = originNewSize;
                    originOffset = originNewOffset;
                    overshot += deltaX + (_this._isLtr() ? -originSizeDeltaX : originSizeDeltaX);
                    overlayOffset += originOffsetDeltaX + (_this._isLtr() ? originSizeDeltaX : 0);
                    _this._updateOverlayOffset(overlayOffset);
                });
            });
        };
        ResizeOverlayHandle.prototype.updateResizeActive = function (active) {
            this.eventDispatcher.overlayHandleActiveForCell.next(active ? this.resizeRef.origin.nativeElement : null);
        };
        ResizeOverlayHandle.prototype._getOriginWidth = function () {
            return this.resizeRef.origin.nativeElement.offsetWidth;
        };
        ResizeOverlayHandle.prototype._getOriginOffset = function () {
            return this.resizeRef.origin.nativeElement.offsetLeft;
        };
        ResizeOverlayHandle.prototype._updateOverlayOffset = function (offset) {
            this.resizeRef.overlayRef.overlayElement.style.transform =
                "translateX(" + coercion.coerceCssPixelValue(offset) + ")";
        };
        ResizeOverlayHandle.prototype._isLtr = function () {
            return this.directionality.value === 'ltr';
        };
        ResizeOverlayHandle.prototype._notifyResizeEnded = function (size, completedSuccessfully) {
            var _this = this;
            if (completedSuccessfully === void 0) { completedSuccessfully = false; }
            this.updateResizeActive(false);
            this.ngZone.run(function () {
                var sizeMessage = { columnId: _this.columnDef.name, size: size };
                if (completedSuccessfully) {
                    _this.resizeNotifier.resizeCompleted.next(sizeMessage);
                }
                else {
                    _this.resizeNotifier.resizeCanceled.next(sizeMessage);
                }
            });
        };
        return ResizeOverlayHandle;
    }());
    ResizeOverlayHandle.decorators = [
        { type: core.Directive }
    ];

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkColumnResize = CdkColumnResize;
    exports.CdkColumnResizeDefaultEnabledModule = CdkColumnResizeDefaultEnabledModule;
    exports.CdkColumnResizeFlex = CdkColumnResizeFlex;
    exports.CdkColumnResizeModule = CdkColumnResizeModule;
    exports.CdkDefaultEnabledColumnResize = CdkDefaultEnabledColumnResize;
    exports.CdkDefaultEnabledColumnResizeFlex = CdkDefaultEnabledColumnResizeFlex;
    exports.CdkFlexTableResizeStrategy = CdkFlexTableResizeStrategy;
    exports.ColumnResize = ColumnResize;
    exports.ColumnResizeNotifier = ColumnResizeNotifier;
    exports.ColumnResizeNotifierSource = ColumnResizeNotifierSource;
    exports.ColumnSizeStore = ColumnSizeStore;
    exports.FLEX_RESIZE_STRATEGY_PROVIDER = FLEX_RESIZE_STRATEGY_PROVIDER;
    exports.HeaderRowEventDispatcher = HeaderRowEventDispatcher;
    exports.Resizable = Resizable;
    exports.ResizeOverlayHandle = ResizeOverlayHandle;
    exports.ResizeRef = ResizeRef;
    exports.ResizeStrategy = ResizeStrategy;
    exports.TABLE_LAYOUT_FIXED_RESIZE_STRATEGY_PROVIDER = TABLE_LAYOUT_FIXED_RESIZE_STRATEGY_PROVIDER;
    exports.TableLayoutFixedResizeStrategy = TableLayoutFixedResizeStrategy;
    exports.ɵangular_material_src_cdk_experimental_column_resize_column_resize_a = TABLE_PROVIDERS;
    exports.ɵangular_material_src_cdk_experimental_column_resize_column_resize_b = FLEX_PROVIDERS;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-experimental-column-resize.umd.js.map
