(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/coercion'), require('@angular/cdk/collections'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('@angular/cdk/table'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk-experimental/selection', ['exports', '@angular/cdk/coercion', '@angular/cdk/collections', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/forms', '@angular/cdk/table', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.cdkExperimental = global.ng.cdkExperimental || {}, global.ng.cdkExperimental.selection = {}), global.ng.cdk.coercion, global.ng.cdk.collections, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.forms, global.ng.cdk.table, global.ng.common));
}(this, (function (exports, coercion, collections, core, rxjs, operators, forms, table, common) { 'use strict';

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
     * Maintains a set of selected items. Support selecting and deselecting items, and checking if a
     * value is selected.
     * When constructed with a `trackByFn`, all the items will be identified by applying the `trackByFn`
     * on them. Because `trackByFn` requires the index of the item to be passed in, the `index` field is
     * expected to be set when calling `isSelected`, `select` and `deselect`.
     */
    var SelectionSet = /** @class */ (function () {
        function SelectionSet(_multiple, _trackByFn) {
            if (_multiple === void 0) { _multiple = false; }
            this._multiple = _multiple;
            this._trackByFn = _trackByFn;
            this._selectionMap = new Map();
            this.changed = new rxjs.Subject();
        }
        SelectionSet.prototype.isSelected = function (value) {
            return this._selectionMap.has(this._getTrackedByValue(value));
        };
        SelectionSet.prototype.select = function () {
            var e_1, _a;
            var selects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                selects[_i] = arguments[_i];
            }
            if (!this._multiple && selects.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('SelectionSet: not multiple selection');
            }
            var before = this._getCurrentSelection();
            if (!this._multiple) {
                this._selectionMap.clear();
            }
            var toSelect = [];
            try {
                for (var selects_1 = __values(selects), selects_1_1 = selects_1.next(); !selects_1_1.done; selects_1_1 = selects_1.next()) {
                    var select = selects_1_1.value;
                    if (this.isSelected(select)) {
                        continue;
                    }
                    toSelect.push(select);
                    this._markSelected(this._getTrackedByValue(select), select);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (selects_1_1 && !selects_1_1.done && (_a = selects_1.return)) _a.call(selects_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var after = this._getCurrentSelection();
            this.changed.next({ before: before, after: after });
        };
        SelectionSet.prototype.deselect = function () {
            var e_2, _a;
            var selects = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                selects[_i] = arguments[_i];
            }
            if (!this._multiple && selects.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('SelectionSet: not multiple selection');
            }
            var before = this._getCurrentSelection();
            var toDeselect = [];
            try {
                for (var selects_2 = __values(selects), selects_2_1 = selects_2.next(); !selects_2_1.done; selects_2_1 = selects_2.next()) {
                    var select = selects_2_1.value;
                    if (!this.isSelected(select)) {
                        continue;
                    }
                    toDeselect.push(select);
                    this._markDeselected(this._getTrackedByValue(select));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (selects_2_1 && !selects_2_1.done && (_a = selects_2.return)) _a.call(selects_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var after = this._getCurrentSelection();
            this.changed.next({ before: before, after: after });
        };
        SelectionSet.prototype._markSelected = function (key, toSelect) {
            this._selectionMap.set(key, toSelect);
        };
        SelectionSet.prototype._markDeselected = function (key) {
            this._selectionMap.delete(key);
        };
        SelectionSet.prototype._getTrackedByValue = function (select) {
            if (!this._trackByFn) {
                return select.value;
            }
            if (select.index == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('SelectionSet: index required when trackByFn is used.');
            }
            return this._trackByFn(select.index, select.value);
        };
        SelectionSet.prototype._getCurrentSelection = function () {
            return Array.from(this._selectionMap.values());
        };
        return SelectionSet;
    }());

    /**
     * Manages the selection states of the items and provides methods to check and update the selection
     * states.
     * It must be applied to the parent element if `cdkSelectionToggle`, `cdkSelectAll`,
     * `cdkRowSelection` and `cdkSelectionColumn` are applied.
     */
    var CdkSelection = /** @class */ (function () {
        function CdkSelection() {
            /** Emits when selection changes. */
            this.change = new core.EventEmitter();
            this._destroyed = new rxjs.Subject();
            this.selectAllState = 'none';
        }
        Object.defineProperty(CdkSelection.prototype, "dataSource", {
            get: function () {
                return this._dataSource;
            },
            set: function (dataSource) {
                if (this._dataSource !== dataSource) {
                    this._switchDataSource(dataSource);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkSelection.prototype, "multiple", {
            /** Whether to support multiple selection */
            get: function () {
                return this._multiple;
            },
            set: function (multiple) {
                this._multiple = coercion.coerceBooleanProperty(multiple);
            },
            enumerable: false,
            configurable: true
        });
        CdkSelection.prototype._switchDataSource = function (dataSource) {
            this._data = [];
            // TODO: Move this logic to a shared function in `cdk/collections`.
            if (collections.isDataSource(this._dataSource)) {
                this._dataSource.disconnect(this);
            }
            if (this._renderChangeSubscription) {
                this._renderChangeSubscription.unsubscribe();
                this._renderChangeSubscription = null;
            }
            this._dataSource = dataSource;
        };
        CdkSelection.prototype._observeRenderChanges = function () {
            var _this = this;
            if (!this._dataSource) {
                return;
            }
            var dataStream;
            if (collections.isDataSource(this._dataSource)) {
                dataStream = this._dataSource.connect(this);
            }
            else if (this._dataSource instanceof rxjs.Observable) {
                dataStream = this._dataSource;
            }
            else if (Array.isArray(this._dataSource)) {
                dataStream = rxjs.of(this._dataSource);
            }
            if (dataStream == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('Unknown data source');
            }
            this._renderChangeSubscription =
                dataStream.pipe(operators.takeUntil(this._destroyed)).subscribe(function (data) {
                    _this._data = data || [];
                });
        };
        CdkSelection.prototype.ngOnInit = function () {
            var _this = this;
            this._selection = new SelectionSet(this._multiple, this.trackByFn);
            this._selection.changed.pipe(operators.takeUntil(this._destroyed)).subscribe(function (change) {
                _this._updateSelectAllState();
                _this.change.emit(change);
            });
        };
        CdkSelection.prototype.ngAfterContentChecked = function () {
            if (this._dataSource && !this._renderChangeSubscription) {
                this._observeRenderChanges();
            }
        };
        CdkSelection.prototype.ngOnDestroy = function () {
            this._destroyed.next();
            this._destroyed.complete();
            if (collections.isDataSource(this._dataSource)) {
                this._dataSource.disconnect(this);
            }
        };
        /** Toggles selection for a given value. `index` is required if `trackBy` is used. */
        CdkSelection.prototype.toggleSelection = function (value, index) {
            if (!!this.trackByFn && index == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('CdkSelection: index required when trackBy is used');
            }
            if (this.isSelected(value, index)) {
                this._selection.deselect({ value: value, index: index });
            }
            else {
                this._selection.select({ value: value, index: index });
            }
        };
        /**
         * Toggles select-all. If no value is selected, select all values. If all values or some of the
         * values are selected, de-select all values.
         */
        CdkSelection.prototype.toggleSelectAll = function () {
            if (!this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('CdkSelection: multiple selection not enabled');
            }
            if (this.selectAllState === 'none') {
                this._selectAll();
            }
            else {
                this._clearAll();
            }
        };
        /** Checks whether a value is selected. `index` is required if `trackBy` is used. */
        CdkSelection.prototype.isSelected = function (value, index) {
            if (!!this.trackByFn && index == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('CdkSelection: index required when trackBy is used');
            }
            return this._selection.isSelected({ value: value, index: index });
        };
        /** Checks whether all values are selected. */
        CdkSelection.prototype.isAllSelected = function () {
            var _this = this;
            return this._data.every(function (value, index) { return _this._selection.isSelected({ value: value, index: index }); });
        };
        /** Checks whether partially selected. */
        CdkSelection.prototype.isPartialSelected = function () {
            var _this = this;
            return !this.isAllSelected() &&
                this._data.some(function (value, index) { return _this._selection.isSelected({ value: value, index: index }); });
        };
        CdkSelection.prototype._selectAll = function () {
            var _a;
            var toSelect = [];
            this._data.forEach(function (value, index) {
                toSelect.push({ value: value, index: index });
            });
            (_a = this._selection).select.apply(_a, __spreadArray([], __read(toSelect)));
        };
        CdkSelection.prototype._clearAll = function () {
            var _a;
            var toDeselect = [];
            this._data.forEach(function (value, index) {
                toDeselect.push({ value: value, index: index });
            });
            (_a = this._selection).deselect.apply(_a, __spreadArray([], __read(toDeselect)));
        };
        CdkSelection.prototype._updateSelectAllState = function () {
            if (this.isAllSelected()) {
                this.selectAllState = 'all';
            }
            else if (this.isPartialSelected()) {
                this.selectAllState = 'partial';
            }
            else {
                this.selectAllState = 'none';
            }
        };
        return CdkSelection;
    }());
    CdkSelection.decorators = [
        { type: core.Directive, args: [{
                    selector: '[cdkSelection]',
                    exportAs: 'cdkSelection',
                },] }
    ];
    CdkSelection.propDecorators = {
        dataSource: [{ type: core.Input }],
        trackByFn: [{ type: core.Input, args: ['trackBy',] }],
        multiple: [{ type: core.Input, args: ['cdkSelectionMultiple',] }],
        change: [{ type: core.Output, args: ['cdkSelectionChange',] }]
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Makes the element a select-all toggle.
     *
     * Must be used within a parent `CdkSelection` directive. It toggles the selection states
     * of all the selection toggles connected with the `CdkSelection` directive.
     * If the element implements `ControlValueAccessor`, e.g. `MatCheckbox`, the directive
     * automatically connects it with the select-all state provided by the `CdkSelection` directive. If
     * not, use `checked$` to get the checked state, `indeterminate$` to get the indeterminate state,
     * and `toggle()` to change the selection state.
     */
    var CdkSelectAll = /** @class */ (function () {
        function CdkSelectAll(_selection, _controlValueAccessor) {
            var _this = this;
            this._selection = _selection;
            this._controlValueAccessor = _controlValueAccessor;
            /**
             * The checked state of the toggle.
             * Resolves to `true` if all the values are selected, `false` if no value is selected.
             */
            this.checked = this._selection.change.pipe(operators.switchMap(function () { return rxjs.of(_this._selection.isAllSelected()); }));
            /**
             * The indeterminate state of the toggle.
             * Resolves to `true` if part (not all) of the values are selected, `false` if all values or no
             * value at all are selected.
             */
            this.indeterminate = this._selection.change.pipe(operators.switchMap(function () { return rxjs.of(_this._selection.isPartialSelected()); }));
            this._destroyed = new rxjs.Subject();
        }
        /**
         * Toggles the select-all state.
         * @param event The click event if the toggle is triggered by a (mouse or keyboard) click. If
         *     using with a native `<input type="checkbox">`, the parameter is required for the
         *     indeterminate state to work properly.
         */
        CdkSelectAll.prototype.toggle = function (event) {
            var _this = this;
            // This is needed when applying the directive on a native <input type="checkbox">
            // checkbox. The default behavior needs to be prevented in order to support the indeterminate
            // state. The timeout is also needed so the checkbox can show the latest state.
            if (event) {
                event.preventDefault();
            }
            setTimeout(function () {
                _this._selection.toggleSelectAll();
            });
        };
        CdkSelectAll.prototype.ngOnInit = function () {
            this._assertValidParentSelection();
            this._configureControlValueAccessor();
        };
        CdkSelectAll.prototype._configureControlValueAccessor = function () {
            var _this = this;
            if (this._controlValueAccessor && this._controlValueAccessor.length) {
                this._controlValueAccessor[0].registerOnChange(function (e) {
                    if (e === true || e === false) {
                        _this.toggle();
                    }
                });
                this.checked.pipe(operators.takeUntil(this._destroyed)).subscribe(function (state) {
                    _this._controlValueAccessor[0].writeValue(state);
                });
            }
        };
        CdkSelectAll.prototype._assertValidParentSelection = function () {
            if (!this._selection && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('CdkSelectAll: missing CdkSelection in the parent');
            }
            if (!this._selection.multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('CdkSelectAll: CdkSelection must have cdkSelectionMultiple set to true');
            }
        };
        CdkSelectAll.prototype.ngOnDestroy = function () {
            this._destroyed.next();
            this._destroyed.complete();
        };
        return CdkSelectAll;
    }());
    CdkSelectAll.decorators = [
        { type: core.Directive, args: [{
                    selector: '[cdkSelectAll]',
                    exportAs: 'cdkSelectAll',
                },] }
    ];
    CdkSelectAll.ctorParameters = function () { return [
        { type: CdkSelection, decorators: [{ type: core.Optional }, { type: core.Inject, args: [CdkSelection,] }] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [forms.NG_VALUE_ACCESSOR,] }] }
    ]; };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Makes the element a selection toggle.
     *
     * Must be used within a parent `CdkSelection` directive.
     * Must be provided with the value. If `trackBy` is used on `CdkSelection`, the index of the value
     * is required. If the element implements `ControlValueAccessor`, e.g. `MatCheckbox`, the directive
     * automatically connects it with the selection state provided by the `CdkSelection` directive. If
     * not, use `checked$` to get the checked state of the value, and `toggle()` to change the selection
     * state.
     */
    var CdkSelectionToggle = /** @class */ (function () {
        function CdkSelectionToggle(_selection, _controlValueAccessors) {
            var _this = this;
            this._selection = _selection;
            this._controlValueAccessors = _controlValueAccessors;
            /** The checked state of the selection toggle */
            this.checked = this._selection.change.pipe(operators.switchMap(function () { return rxjs.of(_this._isSelected()); }), operators.distinctUntilChanged());
            this._destroyed = new rxjs.Subject();
        }
        Object.defineProperty(CdkSelectionToggle.prototype, "index", {
            /** The index of the value in the list. Required when used with `trackBy` */
            get: function () { return this._index; },
            set: function (index) { this._index = coercion.coerceNumberProperty(index); },
            enumerable: false,
            configurable: true
        });
        /** Toggles the selection */
        CdkSelectionToggle.prototype.toggle = function () {
            this._selection.toggleSelection(this.value, this.index);
        };
        CdkSelectionToggle.prototype.ngOnInit = function () {
            this._assertValidParentSelection();
            this._configureControlValueAccessor();
        };
        CdkSelectionToggle.prototype.ngOnDestroy = function () {
            this._destroyed.next();
            this._destroyed.complete();
        };
        CdkSelectionToggle.prototype._assertValidParentSelection = function () {
            if (!this._selection && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('CdkSelectAll: missing CdkSelection in the parent');
            }
        };
        CdkSelectionToggle.prototype._configureControlValueAccessor = function () {
            var _this = this;
            if (this._controlValueAccessors && this._controlValueAccessors.length) {
                this._controlValueAccessors[0].registerOnChange(function (e) {
                    if (typeof e === 'boolean') {
                        _this.toggle();
                    }
                });
                this.checked.pipe(operators.takeUntil(this._destroyed)).subscribe(function (state) {
                    _this._controlValueAccessors[0].writeValue(state);
                });
            }
        };
        CdkSelectionToggle.prototype._isSelected = function () {
            return this._selection.isSelected(this.value, this.index);
        };
        return CdkSelectionToggle;
    }());
    CdkSelectionToggle.decorators = [
        { type: core.Directive, args: [{
                    selector: '[cdkSelectionToggle]',
                    exportAs: 'cdkSelectionToggle',
                },] }
    ];
    CdkSelectionToggle.ctorParameters = function () { return [
        { type: CdkSelection, decorators: [{ type: core.Optional }, { type: core.Inject, args: [CdkSelection,] }] },
        { type: Array, decorators: [{ type: core.Optional }, { type: core.Self }, { type: core.Inject, args: [forms.NG_VALUE_ACCESSOR,] }] }
    ]; };
    CdkSelectionToggle.propDecorators = {
        value: [{ type: core.Input, args: ['cdkSelectionToggleValue',] }],
        index: [{ type: core.Input, args: ['cdkSelectionToggleIndex',] }]
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Column that adds row selecting checkboxes and a select-all checkbox if `cdkSelectionMultiple` is
     * `true`.
     *
     * Must be used within a parent `CdkSelection` directive.
     */
    var CdkSelectionColumn = /** @class */ (function () {
        function CdkSelectionColumn(_table, selection) {
            this._table = _table;
            this.selection = selection;
        }
        Object.defineProperty(CdkSelectionColumn.prototype, "name", {
            /** Column name that should be used to reference this column. */
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
                this._syncColumnDefName();
            },
            enumerable: false,
            configurable: true
        });
        CdkSelectionColumn.prototype.ngOnInit = function () {
            if (!this.selection && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('CdkSelectionColumn: missing CdkSelection in the parent');
            }
            this._syncColumnDefName();
            if (this._table) {
                this._columnDef.cell = this._cell;
                this._columnDef.headerCell = this._headerCell;
                this._table.addColumnDef(this._columnDef);
            }
            else if ((typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('CdkSelectionColumn: missing parent table');
            }
        };
        CdkSelectionColumn.prototype.ngOnDestroy = function () {
            if (this._table) {
                this._table.removeColumnDef(this._columnDef);
            }
        };
        CdkSelectionColumn.prototype._syncColumnDefName = function () {
            if (this._columnDef) {
                this._columnDef.name = this._name;
            }
        };
        return CdkSelectionColumn;
    }());
    CdkSelectionColumn.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-selection-column',
                    template: "\n    <ng-container cdkColumnDef>\n      <th cdkHeaderCell *cdkHeaderCellDef>\n        <input type=\"checkbox\" *ngIf=\"selection.multiple\"\n            cdkSelectAll\n            #allToggler=\"cdkSelectAll\"\n            [checked]=\"allToggler.checked | async\"\n            [indeterminate]=\"allToggler.indeterminate | async\"\n            (click)=\"allToggler.toggle($event)\">\n      </th>\n      <td cdkCell *cdkCellDef=\"let row; let i = $index\">\n        <input type=\"checkbox\"\n            #toggler=\"cdkSelectionToggle\"\n            cdkSelectionToggle\n            [cdkSelectionToggleValue]=\"row\"\n            [cdkSelectionToggleIndex]=\"i\"\n            (click)=\"toggler.toggle()\"\n            [checked]=\"toggler.checked | async\">\n      </td>\n    </ng-container>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    encapsulation: core.ViewEncapsulation.None
                },] }
    ];
    CdkSelectionColumn.ctorParameters = function () { return [
        { type: table.CdkTable, decorators: [{ type: core.Optional }, { type: core.Inject, args: [table.CdkTable,] }] },
        { type: CdkSelection, decorators: [{ type: core.Optional }, { type: core.Inject, args: [CdkSelection,] }] }
    ]; };
    CdkSelectionColumn.propDecorators = {
        name: [{ type: core.Input, args: ['cdkSelectionColumnName',] }],
        _columnDef: [{ type: core.ViewChild, args: [table.CdkColumnDef, { static: true },] }],
        _cell: [{ type: core.ViewChild, args: [table.CdkCellDef, { static: true },] }],
        _headerCell: [{ type: core.ViewChild, args: [table.CdkHeaderCellDef, { static: true },] }]
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Applies `cdk-selected` class and `aria-selected` to an element.
     *
     * Must be used within a parent `CdkSelection` directive.
     * Must be provided with the value. The index is required if `trackBy` is used on the `CdkSelection`
     * directive.
     */
    var CdkRowSelection = /** @class */ (function () {
        function CdkRowSelection(_selection) {
            this._selection = _selection;
        }
        Object.defineProperty(CdkRowSelection.prototype, "index", {
            get: function () { return this._index; },
            set: function (index) { this._index = coercion.coerceNumberProperty(index); },
            enumerable: false,
            configurable: true
        });
        return CdkRowSelection;
    }());
    CdkRowSelection.decorators = [
        { type: core.Directive, args: [{
                    selector: '[cdkRowSelection]',
                    host: {
                        '[class.cdk-selected]': '_selection.isSelected(this.value, this.index)',
                        '[attr.aria-selected]': '_selection.isSelected(this.value, this.index)',
                    },
                },] }
    ];
    CdkRowSelection.ctorParameters = function () { return [
        { type: CdkSelection }
    ]; };
    CdkRowSelection.propDecorators = {
        value: [{ type: core.Input, args: ['cdkRowSelectionValue',] }],
        index: [{ type: core.Input, args: ['cdkRowSelectionIndex',] }]
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CdkSelectionModule = /** @class */ (function () {
        function CdkSelectionModule() {
        }
        return CdkSelectionModule;
    }());
    CdkSelectionModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        table.CdkTableModule,
                    ],
                    exports: [
                        CdkSelection,
                        CdkSelectionToggle,
                        CdkSelectAll,
                        CdkSelectionColumn,
                        CdkRowSelection,
                    ],
                    declarations: [
                        CdkSelection,
                        CdkSelectionToggle,
                        CdkSelectAll,
                        CdkSelectionColumn,
                        CdkRowSelection,
                    ],
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
     * Generated bundle index. Do not edit.
     */

    exports.CdkRowSelection = CdkRowSelection;
    exports.CdkSelectAll = CdkSelectAll;
    exports.CdkSelection = CdkSelection;
    exports.CdkSelectionColumn = CdkSelectionColumn;
    exports.CdkSelectionModule = CdkSelectionModule;
    exports.CdkSelectionToggle = CdkSelectionToggle;
    exports.SelectionSet = SelectionSet;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-experimental-selection.umd.js.map
