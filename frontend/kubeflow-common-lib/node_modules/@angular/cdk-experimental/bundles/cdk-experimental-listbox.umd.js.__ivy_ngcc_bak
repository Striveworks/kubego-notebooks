(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/a11y'), require('@angular/cdk/keycodes'), require('@angular/cdk/coercion'), require('@angular/cdk/collections'), require('rxjs'), require('rxjs/operators'), require('@angular/forms'), require('@angular/cdk-experimental/combobox'), require('@angular/cdk/bidi')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk-experimental/listbox', ['exports', '@angular/core', '@angular/cdk/a11y', '@angular/cdk/keycodes', '@angular/cdk/coercion', '@angular/cdk/collections', 'rxjs', 'rxjs/operators', '@angular/forms', '@angular/cdk-experimental/combobox', '@angular/cdk/bidi'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.cdkExperimental = global.ng.cdkExperimental || {}, global.ng.cdkExperimental.listbox = {}), global.ng.core, global.ng.cdk.a11y, global.ng.cdk.keycodes, global.ng.cdk.coercion, global.ng.cdk.collections, global.rxjs, global.rxjs.operators, global.ng.forms, global.ng.cdkExperimental.combobox, global.ng.cdk.bidi));
}(this, (function (exports, core, a11y, keycodes, coercion, collections, rxjs, operators, forms, combobox, bidi) { 'use strict';

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

    var nextId = 0;
    var listboxId = 0;
    var CDK_LISTBOX_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef(function () { return CdkListbox; }),
        multi: true
    };
    var PANEL = new core.InjectionToken('CdkComboboxPanel');
    var CdkOption = /** @class */ (function () {
        function CdkOption(_elementRef, listbox) {
            this._elementRef = _elementRef;
            this.listbox = listbox;
            this._selected = false;
            this._disabled = false;
            this._active = false;
            /** The id of the option, set to a uniqueid if the user does not provide one. */
            this.id = "cdk-option-" + nextId++;
            this.selectionChange = new core.EventEmitter();
        }
        Object.defineProperty(CdkOption.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (value) {
                if (!this._disabled) {
                    this._selected = coercion.coerceBooleanProperty(value);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkOption.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkOption.prototype, "value", {
            /** The form value of the option. */
            get: function () {
                return this._value;
            },
            set: function (value) {
                if (this.selected && value !== this._value) {
                    this.deselect();
                }
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /** Toggles the selected state, emits a change event through the injected listbox. */
        CdkOption.prototype.toggle = function () {
            if (!this._isInteractionDisabled()) {
                this.selected = !this.selected;
                this._emitSelectionChange(true);
            }
        };
        /** Sets the active property true if the option and listbox aren't disabled. */
        CdkOption.prototype.activate = function () {
            if (!this._isInteractionDisabled()) {
                this._active = true;
            }
        };
        /** Sets the active property false. */
        CdkOption.prototype.deactivate = function () {
            if (!this._isInteractionDisabled()) {
                this._active = false;
            }
        };
        /** Sets the selected property true if it was false. */
        CdkOption.prototype.select = function () {
            if (!this.selected) {
                this.selected = true;
                this._emitSelectionChange();
            }
        };
        /** Sets the selected property false if it was true. */
        CdkOption.prototype.deselect = function () {
            if (this.selected) {
                this.selected = false;
                this._emitSelectionChange();
            }
        };
        /** Applies focus to the option. */
        CdkOption.prototype.focus = function () {
            this._elementRef.nativeElement.focus();
        };
        /** Returns true if the option or listbox are disabled, and false otherwise. */
        CdkOption.prototype._isInteractionDisabled = function () {
            return (this.listbox.disabled || this._disabled);
        };
        /** Emits a change event extending the Option Selection Change Event interface. */
        CdkOption.prototype._emitSelectionChange = function (isUserInput) {
            if (isUserInput === void 0) { isUserInput = false; }
            this.selectionChange.emit({
                source: this,
                isUserInput: isUserInput
            });
        };
        /** Returns the tab index which depends on the disabled property. */
        CdkOption.prototype._getTabIndex = function () {
            return this._isInteractionDisabled() ? null : '-1';
        };
        /** Get the label for this element which is required by the FocusableOption interface. */
        CdkOption.prototype.getLabel = function () {
            var _a;
            // we know that the current node is an element type
            var clone = this._elementRef.nativeElement.cloneNode(true);
            this._removeIcons(clone);
            return ((_a = clone.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
        };
        /** Remove any child from the given element which can be identified as an icon. */
        CdkOption.prototype._removeIcons = function (element) {
            var e_1, _c;
            var _a;
            try {
                // TODO: make this a configurable function that can removed any desired type of node.
                for (var _d = __values(Array.from(element.querySelectorAll('mat-icon, .material-icons'))), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var icon = _e.value;
                    (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        CdkOption.prototype.getElementRef = function () {
            return this._elementRef;
        };
        /** Sets the active property to true to enable the active css class. */
        CdkOption.prototype.setActiveStyles = function () {
            this._active = true;
        };
        /** Sets the active property to false to disable the active css class. */
        CdkOption.prototype.setInactiveStyles = function () {
            this._active = false;
        };
        return CdkOption;
    }());
    CdkOption.decorators = [
        { type: core.Directive, args: [{
                    selector: '[cdkOption]',
                    exportAs: 'cdkOption',
                    host: {
                        'role': 'option',
                        'class': 'cdk-option',
                        '(click)': 'toggle()',
                        '(focus)': 'activate()',
                        '(blur)': 'deactivate()',
                        '[id]': 'id',
                        '[attr.aria-selected]': 'selected || null',
                        '[attr.tabindex]': '_getTabIndex()',
                        '[attr.aria-disabled]': '_isInteractionDisabled()',
                        '[class.cdk-option-disabled]': '_isInteractionDisabled()',
                        '[class.cdk-option-active]': '_active',
                        '[class.cdk-option-selected]': 'selected'
                    }
                },] }
    ];
    CdkOption.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: CdkListbox, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return CdkListbox; }),] }] }
    ]; };
    CdkOption.propDecorators = {
        id: [{ type: core.Input }],
        selected: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        value: [{ type: core.Input }],
        selectionChange: [{ type: core.Output }]
    };
    var CdkListbox = /** @class */ (function () {
        function CdkListbox(_parentPanel, _dir) {
            var _this = this;
            this._parentPanel = _parentPanel;
            this._dir = _dir;
            this._tabIndex = 0;
            /** `View -> model callback called when select has been touched` */
            this._onTouched = function () { };
            /** `View -> model callback called when value changes` */
            this._onChange = function () { };
            this.optionSelectionChanges = rxjs.defer(function () {
                var options = _this._options;
                return options.changes.pipe(operators.startWith(options), operators.switchMap(function () { return rxjs.merge.apply(void 0, __spreadArray([], __read(options.map(function (option) { return option.selectionChange; })))); }));
            });
            this._disabled = false;
            this._multiple = false;
            this._useActiveDescendant = false;
            this._autoFocus = true;
            this._destroyed = new rxjs.Subject();
            this.selectionChange = new core.EventEmitter();
            this.id = "cdk-listbox-" + listboxId++;
            /** Determines the orientation for the list key manager. Affects keyboard interaction. */
            this.orientation = 'vertical';
            this.compareWith = function (a1, a2) { return a1 === a2; };
        }
        Object.defineProperty(CdkListbox.prototype, "multiple", {
            /**
             * Whether the listbox allows multiple options to be selected.
             * If `multiple` switches from `true` to `false`, all options are deselected.
             */
            get: function () {
                return this._multiple;
            },
            set: function (value) {
                this._updateSelectionOnMultiSelectionChange(value);
                this._multiple = coercion.coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkListbox.prototype, "disabled", {
            get: function () {
                return this._disabled;
            },
            set: function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkListbox.prototype, "useActiveDescendant", {
            /** Whether the listbox will use active descendant or will move focus onto the options. */
            get: function () {
                return this._useActiveDescendant;
            },
            set: function (shouldUseActiveDescendant) {
                this._useActiveDescendant = coercion.coerceBooleanProperty(shouldUseActiveDescendant);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkListbox.prototype, "autoFocus", {
            /** Whether on focus the listbox will focus its active option, default to true. */
            get: function () {
                return this._autoFocus;
            },
            set: function (shouldAutoFocus) {
                this._autoFocus = coercion.coerceBooleanProperty(shouldAutoFocus);
            },
            enumerable: false,
            configurable: true
        });
        CdkListbox.prototype.ngOnInit = function () {
            this._selectionModel = new collections.SelectionModel(this.multiple);
        };
        CdkListbox.prototype.ngAfterContentInit = function () {
            var _this = this;
            this._initKeyManager();
            this._initSelectionModel();
            this._registerWithPanel();
            this.optionSelectionChanges.subscribe(function (event) {
                _this._emitChangeEvent(event.source);
                _this._updateSelectionModel(event.source);
                _this.setActiveOption(event.source);
                _this._updatePanelForSelection(event.source);
            });
        };
        CdkListbox.prototype.ngOnDestroy = function () {
            this._listKeyManager.change.complete();
            this._destroyed.next();
            this._destroyed.complete();
        };
        CdkListbox.prototype._registerWithPanel = function () {
            var panel = this._parentPanel || this._explicitPanel;
            panel === null || panel === void 0 ? void 0 : panel._registerContent(this.id, 'listbox');
        };
        CdkListbox.prototype._initKeyManager = function () {
            var _this = this;
            var _a;
            this._listKeyManager = new a11y.ActiveDescendantKeyManager(this._options)
                .withWrap()
                .withTypeAhead()
                .withHomeAndEnd()
                .withAllowedModifierKeys(['shiftKey']);
            if (this.orientation === 'vertical') {
                this._listKeyManager.withVerticalOrientation();
            }
            else {
                this._listKeyManager.withHorizontalOrientation(((_a = this._dir) === null || _a === void 0 ? void 0 : _a.value) || 'ltr');
            }
            this._listKeyManager.change.pipe(operators.takeUntil(this._destroyed)).subscribe(function () {
                _this._updateActiveOption();
            });
        };
        CdkListbox.prototype._initSelectionModel = function () {
            this._selectionModel.changed.pipe(operators.takeUntil(this._destroyed))
                .subscribe(function (event) {
                var e_2, _c, e_3, _d;
                try {
                    for (var _e = __values(event.added), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var option = _f.value;
                        option.selected = true;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                try {
                    for (var _g = __values(event.removed), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var option = _h.value;
                        option.selected = false;
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            });
        };
        CdkListbox.prototype._keydown = function (event) {
            if (this._disabled) {
                return;
            }
            var manager = this._listKeyManager;
            var keyCode = event.keyCode;
            var previousActiveIndex = manager.activeItemIndex;
            if (keyCode === keycodes.SPACE || keyCode === keycodes.ENTER) {
                if (manager.activeItem && !manager.isTyping()) {
                    this._toggleActiveOption();
                }
                event.preventDefault();
            }
            else {
                manager.onKeydown(event);
            }
            /** Will select an option if shift was pressed while navigating to the option */
            var isArrow = (keyCode === keycodes.UP_ARROW
                || keyCode === keycodes.DOWN_ARROW
                || keyCode === keycodes.LEFT_ARROW
                || keyCode === keycodes.RIGHT_ARROW);
            if (isArrow && event.shiftKey && previousActiveIndex !== this._listKeyManager.activeItemIndex) {
                this._toggleActiveOption();
            }
        };
        /** Emits a selection change event, called when an option has its selected state changed. */
        CdkListbox.prototype._emitChangeEvent = function (option) {
            this.selectionChange.emit({
                source: this,
                option: option
            });
        };
        /** Updates the selection model after a toggle. */
        CdkListbox.prototype._updateSelectionModel = function (option) {
            if (!this.multiple && this._selectionModel.selected.length !== 0) {
                var previouslySelected = this._selectionModel.selected[0];
                this.deselect(previouslySelected);
            }
            option.selected ? this._selectionModel.select(option) :
                this._selectionModel.deselect(option);
        };
        CdkListbox.prototype._updatePanelForSelection = function (option) {
            var panel = this._parentPanel || this._explicitPanel;
            if (!this.multiple) {
                option.selected ? panel === null || panel === void 0 ? void 0 : panel.closePanel(option.value) : panel === null || panel === void 0 ? void 0 : panel.closePanel();
            }
            else {
                panel === null || panel === void 0 ? void 0 : panel.closePanel(this.getSelectedValues());
            }
        };
        /** Toggles the selected state of the active option if not disabled. */
        CdkListbox.prototype._toggleActiveOption = function () {
            var activeOption = this._listKeyManager.activeItem;
            if (activeOption && !activeOption.disabled) {
                activeOption.toggle();
            }
        };
        /** Returns the id of the active option if active descendant is being used. */
        CdkListbox.prototype._getAriaActiveDescendant = function () {
            var _a, _b;
            return this._useActiveDescendant ? (_b = (_a = this._listKeyManager) === null || _a === void 0 ? void 0 : _a.activeItem) === null || _b === void 0 ? void 0 : _b.id : null;
        };
        /** Updates the activeOption and the active and focus properties of the option. */
        CdkListbox.prototype._updateActiveOption = function () {
            var _a;
            if (!this._listKeyManager.activeItem) {
                return;
            }
            (_a = this._activeOption) === null || _a === void 0 ? void 0 : _a.deactivate();
            this._activeOption = this._listKeyManager.activeItem;
            this._activeOption.activate();
            if (!this.useActiveDescendant) {
                this._activeOption.focus();
            }
        };
        /** Updates selection states of options when the 'multiple' property changes. */
        CdkListbox.prototype._updateSelectionOnMultiSelectionChange = function (value) {
            var _a;
            if (this.multiple && !value) {
                // Deselect all options instead of arbitrarily keeping one of the selected options.
                this.setAllSelected(false);
            }
            else if (!this.multiple && value) {
                this._selectionModel =
                    new collections.SelectionModel(value, (_a = this._selectionModel) === null || _a === void 0 ? void 0 : _a.selected);
            }
        };
        CdkListbox.prototype._focusActiveOption = function () {
            if (!this.autoFocus) {
                return;
            }
            if (this._listKeyManager.activeItem) {
                this.setActiveOption(this._listKeyManager.activeItem);
            }
            else if (this._options.first) {
                this.setActiveOption(this._options.first);
            }
        };
        /** Selects the given option if the option and listbox aren't disabled. */
        CdkListbox.prototype.select = function (option) {
            if (!this.disabled && !option.disabled) {
                option.select();
            }
        };
        /** Deselects the given option if the option and listbox aren't disabled. */
        CdkListbox.prototype.deselect = function (option) {
            if (!this.disabled && !option.disabled) {
                option.deselect();
            }
        };
        /** Sets the selected state of all options to be the given value. */
        CdkListbox.prototype.setAllSelected = function (isSelected) {
            var e_4, _c;
            try {
                for (var _d = __values(this._options.toArray()), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var option = _e.value;
                    isSelected ? this.select(option) : this.deselect(option);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_4) throw e_4.error; }
            }
        };
        /** Updates the key manager's active item to the given option. */
        CdkListbox.prototype.setActiveOption = function (option) {
            this._listKeyManager.updateActiveItem(option);
            this._updateActiveOption();
        };
        /**
         * Saves a callback function to be invoked when the select's value
         * changes from user input. Required to implement ControlValueAccessor.
         */
        CdkListbox.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        /**
         * Saves a callback function to be invoked when the select is blurred
         * by the user. Required to implement ControlValueAccessor.
         */
        CdkListbox.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        /** Sets the select's value. Required to implement ControlValueAccessor. */
        CdkListbox.prototype.writeValue = function (values) {
            if (this._options) {
                this._setSelectionByValue(values);
            }
        };
        /** Disables the select. Required to implement ControlValueAccessor. */
        CdkListbox.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        /** Returns the values of the currently selected options. */
        CdkListbox.prototype.getSelectedValues = function () {
            return this._options.filter(function (option) { return option.selected; }).map(function (option) { return option.value; });
        };
        /** Selects an option that has the corresponding given value. */
        CdkListbox.prototype._setSelectionByValue = function (values) {
            var e_5, _c, e_6, _d;
            var _this = this;
            try {
                for (var _e = __values(this._options.toArray()), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var option = _f.value;
                    this.deselect(option);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                }
                finally { if (e_5) throw e_5.error; }
            }
            var valuesArray = coercion.coerceArray(values);
            var _loop_1 = function (value) {
                var correspondingOption = this_1._options.find(function (option) {
                    return option.value != null && _this.compareWith(option.value, value);
                });
                if (correspondingOption) {
                    this_1.select(correspondingOption);
                    if (!this_1.multiple) {
                        return { value: void 0 };
                    }
                }
            };
            var this_1 = this;
            try {
                for (var valuesArray_1 = __values(valuesArray), valuesArray_1_1 = valuesArray_1.next(); !valuesArray_1_1.done; valuesArray_1_1 = valuesArray_1.next()) {
                    var value = valuesArray_1_1.value;
                    var state_1 = _loop_1(value);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (valuesArray_1_1 && !valuesArray_1_1.done && (_d = valuesArray_1.return)) _d.call(valuesArray_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
        };
        return CdkListbox;
    }());
    CdkListbox.decorators = [
        { type: core.Directive, args: [{
                    selector: '[cdkListbox]',
                    exportAs: 'cdkListbox',
                    host: {
                        'role': 'listbox',
                        'class': 'cdk-listbox',
                        '[id]': 'id',
                        '(focus)': '_focusActiveOption()',
                        '(keydown)': '_keydown($event)',
                        '[attr.tabindex]': '_tabIndex',
                        '[attr.aria-disabled]': 'disabled',
                        '[attr.aria-multiselectable]': 'multiple',
                        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
                        '[attr.aria-orientation]': 'orientation'
                    },
                    providers: [CDK_LISTBOX_VALUE_ACCESSOR]
                },] }
    ];
    CdkListbox.ctorParameters = function () { return [
        { type: combobox.CdkComboboxPanel, decorators: [{ type: core.Optional }, { type: core.Inject, args: [PANEL,] }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    CdkListbox.propDecorators = {
        _options: [{ type: core.ContentChildren, args: [CdkOption, { descendants: true },] }],
        selectionChange: [{ type: core.Output }],
        id: [{ type: core.Input }],
        multiple: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        useActiveDescendant: [{ type: core.Input }],
        autoFocus: [{ type: core.Input }],
        orientation: [{ type: core.Input, args: ['listboxOrientation',] }],
        compareWith: [{ type: core.Input }],
        _explicitPanel: [{ type: core.Input, args: ['parentPanel',] }]
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var EXPORTED_DECLARATIONS = [CdkListbox, CdkOption];
    var CdkListboxModule = /** @class */ (function () {
        function CdkListboxModule() {
        }
        return CdkListboxModule;
    }());
    CdkListboxModule.decorators = [
        { type: core.NgModule, args: [{
                    exports: EXPORTED_DECLARATIONS,
                    declarations: EXPORTED_DECLARATIONS,
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

    exports.CDK_LISTBOX_VALUE_ACCESSOR = CDK_LISTBOX_VALUE_ACCESSOR;
    exports.CdkListbox = CdkListbox;
    exports.CdkListboxModule = CdkListboxModule;
    exports.CdkOption = CdkOption;
    exports.PANEL = PANEL;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-experimental-listbox.umd.js.map
