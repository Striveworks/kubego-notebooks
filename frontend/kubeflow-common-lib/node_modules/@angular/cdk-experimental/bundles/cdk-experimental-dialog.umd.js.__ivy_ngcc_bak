(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations'), require('@angular/cdk/a11y'), require('@angular/cdk/portal'), require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/keycodes'), require('@angular/cdk/bidi'), require('@angular/cdk/overlay')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk-experimental/dialog', ['exports', '@angular/animations', '@angular/cdk/a11y', '@angular/cdk/portal', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/cdk/keycodes', '@angular/cdk/bidi', '@angular/cdk/overlay'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.cdkExperimental = global.ng.cdkExperimental || {}, global.ng.cdkExperimental.dialog = {}), global.ng.animations, global.ng.cdk.a11y, global.ng.cdk.portal, global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.cdk.keycodes, global.ng.cdk.bidi, global.ng.cdk.overlay));
}(this, (function (exports, animations, a11y, portal, common, core, rxjs, operators, keycodes, bidi, overlay) { 'use strict';

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

    var DialogConfig = /** @class */ (function () {
        function DialogConfig() {
            /** The ARIA role of the dialog. */
            this.role = 'dialog';
            /** Custom class(es) for the overlay panel. */
            this.panelClass = '';
            /** Whether the dialog has a background. */
            this.hasBackdrop = true;
            /** Custom class(es) for the backdrop. */
            this.backdropClass = '';
            /** Whether the dialog can be closed by user interaction. */
            this.disableClose = false;
            /** The width of the dialog. */
            this.width = '';
            /** The height of the dialog. */
            this.height = '';
            /** The minimum width of the dialog. */
            this.minWidth = '';
            /** The minimum height of the dialog. */
            this.minHeight = '';
            /** The maximum width of the dialog. */
            this.maxWidth = '80vw';
            /** The maximum height of the dialog. */
            this.maxHeight = '';
            /** Data to be injected into the dialog content. */
            this.data = null;
            /** ID of the element that describes the dialog. */
            this.ariaDescribedBy = null;
            /** Aria label to assign to the dialog element */
            this.ariaLabel = null;
            /** Whether the dialog should focus the first focusable element on open. */
            this.autoFocus = true;
            /** Duration of the enter animation. Has to be a valid CSS value (e.g. 100ms). */
            this.enterAnimationDuration = '225ms';
            /** Duration of the exit animation. Has to be a valid CSS value (e.g. 50ms). */
            this.exitAnimationDuration = '225ms';
        }
        return DialogConfig;
    }());

    function throwDialogContentAlreadyAttachedError() {
        throw Error('Attempting to attach dialog content after content is already attached');
    }
    /**
     * Internal component that wraps user-provided dialog content.
     * @docs-private
     */
    var CdkDialogContainer = /** @class */ (function (_super) {
        __extends(CdkDialogContainer, _super);
        function CdkDialogContainer(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, 
        /** The dialog configuration. */
        _config) {
            var _this = _super.call(this) || this;
            _this._elementRef = _elementRef;
            _this._focusTrapFactory = _focusTrapFactory;
            _this._changeDetectorRef = _changeDetectorRef;
            _this._config = _config;
            /** State of the dialog animation. */
            _this._state = 'enter';
            /** Element that was focused before the dialog was opened. Save this to restore upon close. */
            _this._elementFocusedBeforeDialogWasOpened = null;
            /** The class that traps and manages focus within the dialog. */
            _this._focusTrap = _this._focusTrapFactory.create(_this._elementRef.nativeElement);
            _this._ariaModal = true;
            /** A subject emitting before the dialog enters the view. */
            _this._beforeEnter = new rxjs.Subject();
            /** A subject emitting after the dialog enters the view. */
            _this._afterEnter = new rxjs.Subject();
            /** A subject emitting before the dialog exits the view. */
            _this._beforeExit = new rxjs.Subject();
            /** A subject emitting after the dialog exits the view. */
            _this._afterExit = new rxjs.Subject();
            /** Stream of animation `done` events. */
            _this._animationDone = new rxjs.Subject();
            /**
             * Attaches a DOM portal to the dialog container.
             * @param portal Portal to be attached.
             * @deprecated To be turned into a method.
             * @breaking-change 10.0.0
             */
            _this.attachDomPortal = function (portal) {
                if (_this._portalHost.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                    throwDialogContentAlreadyAttachedError();
                }
                return _this._portalHost.attachDomPortal(portal);
            };
            _this._document = _document;
            // We use a Subject with a distinctUntilChanged, rather than a callback attached to .done,
            // because some browsers fire the done event twice and we don't want to emit duplicate events.
            // See: https://github.com/angular/angular/issues/24084
            _this._animationDone.pipe(operators.distinctUntilChanged(function (x, y) {
                return x.fromState === y.fromState && x.toState === y.toState;
            })).subscribe(function (event) {
                // Emit lifecycle events based on animation `done` callback.
                if (event.toState === 'enter') {
                    _this._autoFocusFirstTabbableElement();
                    _this._afterEnter.next();
                    _this._afterEnter.complete();
                }
                if (event.fromState === 'enter' && (event.toState === 'void' || event.toState === 'exit')) {
                    _this._returnFocusAfterDialog();
                    _this._afterExit.next();
                    _this._afterExit.complete();
                }
            });
            return _this;
        }
        Object.defineProperty(CdkDialogContainer.prototype, "_ariaLabel", {
            // @HostBinding is used in the class as it is expected to be extended. Since @Component decorator
            // metadata is not inherited by child classes, instead the host binding data is defined in a way
            // that can be inherited.
            // tslint:disable:no-host-decorator-in-concrete no-private-getters
            get: function () { return this._config.ariaLabel || null; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkDialogContainer.prototype, "_ariaDescribedBy", {
            get: function () { return this._config.ariaDescribedBy; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkDialogContainer.prototype, "_role", {
            get: function () { return this._config.role; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkDialogContainer.prototype, "_tabindex", {
            get: function () { return -1; },
            enumerable: false,
            configurable: true
        });
        /** Initializes the dialog container with the attached content. */
        CdkDialogContainer.prototype._initializeWithAttachedContent = function () {
            // Save the previously focused element. This element will be re-focused
            // when the dialog closes.
            this._savePreviouslyFocusedElement();
            // Move focus onto the dialog immediately in order to prevent the user
            // from accidentally opening multiple dialogs at the same time.
            this._focusDialogContainer();
        };
        /** Destroy focus trap to place focus back to the element focused before the dialog opened. */
        CdkDialogContainer.prototype.ngOnDestroy = function () {
            this._focusTrap.destroy();
            this._animationDone.complete();
        };
        /**
         * Attach a ComponentPortal as content to this dialog container.
         * @param portal Portal to be attached as the dialog content.
         */
        CdkDialogContainer.prototype.attachComponentPortal = function (portal) {
            if (this._portalHost.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwDialogContentAlreadyAttachedError();
            }
            return this._portalHost.attachComponentPortal(portal);
        };
        /**
         * Attach a TemplatePortal as content to this dialog container.
         * @param portal Portal to be attached as the dialog content.
         */
        CdkDialogContainer.prototype.attachTemplatePortal = function (portal) {
            if (this._portalHost.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwDialogContentAlreadyAttachedError();
            }
            return this._portalHost.attachTemplatePortal(portal);
        };
        /** Emit lifecycle events based on animation `start` callback. */
        CdkDialogContainer.prototype._onAnimationStart = function (event) {
            if (event.toState === 'enter') {
                this._beforeEnter.next();
                this._beforeEnter.complete();
            }
            if (event.fromState === 'enter' && (event.toState === 'void' || event.toState === 'exit')) {
                this._beforeExit.next();
                this._beforeExit.complete();
            }
        };
        /** Starts the dialog exit animation. */
        CdkDialogContainer.prototype._startExiting = function () {
            this._state = 'exit';
            // Mark the container for check so it can react if the
            // view container is using OnPush change detection.
            this._changeDetectorRef.markForCheck();
        };
        /** Saves a reference to the element that was focused before the dialog was opened. */
        CdkDialogContainer.prototype._savePreviouslyFocusedElement = function () {
            if (this._document) {
                this._elementFocusedBeforeDialogWasOpened = this._document.activeElement;
            }
        };
        /** Focuses the dialog container. */
        CdkDialogContainer.prototype._focusDialogContainer = function () {
            // Note that there is no focus method when rendering on the server.
            if (this._elementRef.nativeElement.focus) {
                this._elementRef.nativeElement.focus();
            }
        };
        /**
         * Autofocus the first tabbable element inside of the dialog, if there is not a tabbable element,
         * focus the dialog instead.
         */
        CdkDialogContainer.prototype._autoFocusFirstTabbableElement = function () {
            var element = this._elementRef.nativeElement;
            // If were to attempt to focus immediately, then the content of the dialog would not yet be
            // ready in instances where change detection has to run first. To deal with this, we simply
            // wait for the microtask queue to be empty.
            if (this._config.autoFocus) {
                this._focusTrap.focusInitialElementWhenReady().then(function (hasMovedFocus) {
                    // If we didn't find any focusable elements inside the dialog, focus the
                    // container so the user can't tab into other elements behind it.
                    if (!hasMovedFocus) {
                        element.focus();
                    }
                });
            }
            else {
                var activeElement = this._document.activeElement;
                // Otherwise ensure that focus is on the dialog container. It's possible that a different
                // component tried to move focus while the open animation was running. See:
                // https://github.com/angular/components/issues/16215. Note that we only want to do this
                // if the focus isn't inside the dialog already, because it's possible that the consumer
                // turned off `autoFocus` in order to move focus themselves.
                if (activeElement !== element && !element.contains(activeElement)) {
                    element.focus();
                }
            }
        };
        /** Returns the focus to the element focused before the dialog was open. */
        CdkDialogContainer.prototype._returnFocusAfterDialog = function () {
            var toFocus = this._elementFocusedBeforeDialogWasOpened;
            // We need the extra check, because IE can set the `activeElement` to null in some cases.
            if (toFocus && typeof toFocus.focus === 'function') {
                var activeElement = this._document.activeElement;
                var element = this._elementRef.nativeElement;
                // Make sure that focus is still inside the dialog or is on the body (usually because a
                // non-focusable element like the backdrop was clicked) before moving it. It's possible that
                // the consumer moved it themselves before the animation was done, in which case we shouldn't
                // do anything.
                if (!activeElement || activeElement === this._document.body || activeElement === element ||
                    element.contains(activeElement)) {
                    toFocus.focus();
                }
            }
        };
        return CdkDialogContainer;
    }(portal.BasePortalOutlet));
    CdkDialogContainer.decorators = [
        { type: core.Component, args: [{
                    selector: 'cdk-dialog-container',
                    template: "<ng-template cdkPortalOutlet></ng-template>\n",
                    encapsulation: core.ViewEncapsulation.None,
                    // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
                    // tslint:disable-next-line:validate-decorators
                    changeDetection: core.ChangeDetectionStrategy.Default,
                    animations: [
                        animations.trigger('dialog', [
                            animations.state('enter', animations.style({ opacity: 1 })),
                            animations.state('exit, void', animations.style({ opacity: 0 })),
                            animations.transition('* => enter', animations.animate('{{enterAnimationDuration}}')),
                            animations.transition('* => exit, * => void', animations.animate('{{exitAnimationDuration}}')),
                        ])
                    ],
                    host: {
                        '[@dialog]': "{\n      value: _state,\n      params: {\n        enterAnimationDuration: _config.enterAnimationDuration,\n        exitAnimationDuration: _config.exitAnimationDuration\n      }\n    }",
                        '(@dialog.start)': '_onAnimationStart($event)',
                        '(@dialog.done)': '_animationDone.next($event)',
                    },
                    styles: ["cdk-dialog-container{background:#fff;border-radius:5px;display:block;padding:10px}\n"]
                },] }
    ];
    CdkDialogContainer.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: a11y.FocusTrapFactory },
        { type: core.ChangeDetectorRef },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: DialogConfig }
    ]; };
    CdkDialogContainer.propDecorators = {
        _ariaLabel: [{ type: core.HostBinding, args: ['attr.aria-label',] }],
        _ariaDescribedBy: [{ type: core.HostBinding, args: ['attr.aria-describedby',] }],
        _role: [{ type: core.HostBinding, args: ['attr.role',] }],
        _ariaModal: [{ type: core.HostBinding, args: ['attr.aria-modal',] }],
        _tabindex: [{ type: core.HostBinding, args: ['attr.tabindex',] }],
        _portalHost: [{ type: core.ViewChild, args: [portal.CdkPortalOutlet, { static: true },] }]
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Unique id for the created dialog. */
    var uniqueId = 0;
    /**
     * Reference to a dialog opened via the Dialog service.
     */
    var DialogRef = /** @class */ (function () {
        function DialogRef(_overlayRef, _containerInstance, id) {
            var _this = this;
            if (id === void 0) { id = "dialog-" + uniqueId++; }
            this._overlayRef = _overlayRef;
            this._containerInstance = _containerInstance;
            this.id = id;
            // If the dialog has a backdrop, handle clicks from the backdrop.
            if (_containerInstance._config.hasBackdrop) {
                _overlayRef.backdropClick().subscribe(function () {
                    if (!_this.disableClose) {
                        _this.close();
                    }
                });
            }
            this.beforeClosed().subscribe(function () {
                _this._overlayRef.detachBackdrop();
            });
            this.afterClosed().subscribe(function () {
                _this._overlayRef.detach();
                _this._overlayRef.dispose();
                _this.componentInstance = null;
            });
            // Close when escape keydown event occurs
            _overlayRef.keydownEvents()
                .pipe(operators.filter(function (event) {
                return event.keyCode === keycodes.ESCAPE && !_this.disableClose && !keycodes.hasModifierKey(event);
            }))
                .subscribe(function (event) {
                event.preventDefault();
                _this.close();
            });
        }
        /** Gets an observable that emits when the overlay's backdrop has been clicked. */
        DialogRef.prototype.backdropClick = function () {
            return this._overlayRef.backdropClick();
        };
        /**
         * Close the dialog.
         * @param dialogResult Optional result to return to the dialog opener.
         */
        DialogRef.prototype.close = function (dialogResult) {
            this._result = dialogResult;
            this._containerInstance._startExiting();
        };
        /**
         * Updates the dialog's position.
         * @param position New dialog position.
         */
        DialogRef.prototype.updatePosition = function (position) {
            var strategy = this._getPositionStrategy();
            if (position && (position.left || position.right)) {
                position.left ? strategy.left(position.left) : strategy.right(position.right);
            }
            else {
                strategy.centerHorizontally();
            }
            if (position && (position.top || position.bottom)) {
                position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
            }
            else {
                strategy.centerVertically();
            }
            this._overlayRef.updatePosition();
            return this;
        };
        /**
         * Gets an observable that emits when keydown events are targeted on the overlay.
         */
        DialogRef.prototype.keydownEvents = function () {
            return this._overlayRef.keydownEvents();
        };
        /**
         * Updates the dialog's width and height, defined, min and max.
         * @param size New size for the overlay.
         */
        DialogRef.prototype.updateSize = function (size) {
            this._overlayRef.updateSize(size);
            this._overlayRef.updatePosition();
            return this;
        };
        /** Fetches the position strategy object from the overlay ref. */
        DialogRef.prototype._getPositionStrategy = function () {
            return this._overlayRef.getConfig().positionStrategy;
        };
        /** Gets an observable that emits when dialog begins opening. */
        DialogRef.prototype.beforeOpened = function () {
            return this._containerInstance._beforeEnter;
        };
        /** Gets an observable that emits when dialog is finished opening. */
        DialogRef.prototype.afterOpened = function () {
            return this._containerInstance._afterEnter;
        };
        /** Gets an observable that emits when dialog begins closing. */
        DialogRef.prototype.beforeClosed = function () {
            var _this = this;
            return this._containerInstance._beforeExit.pipe(operators.map(function () { return _this._result; }));
        };
        /** Gets an observable that emits when dialog is finished closing. */
        DialogRef.prototype.afterClosed = function () {
            var _this = this;
            return this._containerInstance._afterExit.pipe(operators.map(function () { return _this._result; }));
        };
        return DialogRef;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /** Injection token for the Dialog's ScrollStrategy. */
    var DIALOG_SCROLL_STRATEGY = new core.InjectionToken('DialogScrollStrategy');
    /** Injection token for the Dialog's Data. */
    var DIALOG_DATA = new core.InjectionToken('DialogData');
    /** Injection token for the DialogRef constructor. */
    var DIALOG_REF = new core.InjectionToken('DialogRef');
    /** Injection token for the DialogConfig. */
    var DIALOG_CONFIG = new core.InjectionToken('DialogConfig');
    /** Injection token for the Dialog's DialogContainer component. */
    var DIALOG_CONTAINER = new core.InjectionToken('DialogContainer');
    /** @docs-private */
    function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () { return overlay.scrollStrategies.block(); };
    }
    /** @docs-private */
    var MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
        provide: DIALOG_SCROLL_STRATEGY,
        deps: [overlay.Overlay],
        useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Service to open modal dialogs.
     */
    var Dialog = /** @class */ (function () {
        function Dialog(_overlay, _injector, _dialogRefConstructor, 
        // TODO(crisbeto): the `any` here can be replaced
        // with the proper type once we start using Ivy.
        scrollStrategy, _parentDialog, location) {
            var _this = this;
            this._overlay = _overlay;
            this._injector = _injector;
            this._dialogRefConstructor = _dialogRefConstructor;
            this._parentDialog = _parentDialog;
            this._afterAllClosedBase = new rxjs.Subject();
            // TODO(jelbourn): tighten the type on the right-hand side of this expression.
            this.afterAllClosed = rxjs.defer(function () { return _this.openDialogs.length ?
                _this._getAfterAllClosed() : _this._getAfterAllClosed().pipe(operators.startWith(undefined)); });
            this._afterOpened = new rxjs.Subject();
            this._openDialogs = [];
            // Close all of the dialogs when the user goes forwards/backwards in history or when the
            // location hash changes. Note that this usually doesn't include clicking on links (unless
            // the user is using the `HashLocationStrategy`).
            if (!_parentDialog && location) {
                location.subscribe(function () { return _this.closeAll(); });
            }
            this._scrollStrategy = scrollStrategy;
        }
        /** Stream that emits when all dialogs are closed. */
        Dialog.prototype._getAfterAllClosed = function () {
            return this._parentDialog ? this._parentDialog.afterAllClosed : this._afterAllClosedBase;
        };
        Object.defineProperty(Dialog.prototype, "afterOpened", {
            /** Stream that emits when a dialog is opened. */
            get: function () {
                return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpened;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Dialog.prototype, "openDialogs", {
            /** Stream that emits when a dialog is opened. */
            get: function () {
                return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogs;
            },
            enumerable: false,
            configurable: true
        });
        /** Gets an open dialog by id. */
        Dialog.prototype.getById = function (id) {
            return this._openDialogs.find(function (ref) { return ref.id === id; });
        };
        /** Closes all open dialogs. */
        Dialog.prototype.closeAll = function () {
            this.openDialogs.forEach(function (ref) { return ref.close(); });
        };
        /** Opens a dialog from a component. */
        Dialog.prototype.openFromComponent = function (component, config) {
            config = this._applyConfigDefaults(config);
            if (config.id && this.getById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error("Dialog with id \"" + config.id + "\" exists already. The dialog id must be unique.");
            }
            var overlayRef = this._createOverlay(config);
            var dialogContainer = this._attachDialogContainer(overlayRef, config);
            var dialogRef = this._attachDialogContentForComponent(component, dialogContainer, overlayRef, config);
            this._registerDialogRef(dialogRef);
            dialogContainer._initializeWithAttachedContent();
            return dialogRef;
        };
        /** Opens a dialog from a template. */
        Dialog.prototype.openFromTemplate = function (template, config) {
            config = this._applyConfigDefaults(config);
            if (config.id && this.getById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error("Dialog with id \"" + config.id + "\" exists already. The dialog id must be unique.");
            }
            var overlayRef = this._createOverlay(config);
            var dialogContainer = this._attachDialogContainer(overlayRef, config);
            var dialogRef = this._attachDialogContentForTemplate(template, dialogContainer, overlayRef, config);
            this._registerDialogRef(dialogRef);
            dialogContainer._initializeWithAttachedContent();
            return dialogRef;
        };
        Dialog.prototype.ngOnDestroy = function () {
            // Only close all the dialogs at this level.
            this._openDialogs.forEach(function (ref) { return ref.close(); });
        };
        /**
         * Forwards emitting events for when dialogs are opened and all dialogs are closed.
         */
        Dialog.prototype._registerDialogRef = function (dialogRef) {
            var _this = this;
            this.openDialogs.push(dialogRef);
            var dialogOpenSub = dialogRef.afterOpened().subscribe(function () {
                _this.afterOpened.next(dialogRef);
                dialogOpenSub.unsubscribe();
            });
            var dialogCloseSub = dialogRef.afterClosed().subscribe(function () {
                var dialogIndex = _this._openDialogs.indexOf(dialogRef);
                if (dialogIndex > -1) {
                    _this._openDialogs.splice(dialogIndex, 1);
                }
                if (!_this._openDialogs.length) {
                    _this._afterAllClosedBase.next();
                    dialogCloseSub.unsubscribe();
                }
            });
        };
        /**
         * Creates an overlay config from a dialog config.
         * @param config The dialog configuration.
         * @returns The overlay configuration.
         */
        Dialog.prototype._createOverlay = function (config) {
            var overlayConfig = new overlay.OverlayConfig({
                positionStrategy: this._overlay.position().global(),
                scrollStrategy: this._scrollStrategy(),
                panelClass: config.panelClass,
                hasBackdrop: config.hasBackdrop,
                direction: config.direction,
                minWidth: config.minWidth,
                minHeight: config.minHeight,
                maxWidth: config.maxWidth,
                maxHeight: config.maxHeight
            });
            if (config.backdropClass) {
                overlayConfig.backdropClass = config.backdropClass;
            }
            return this._overlay.create(overlayConfig);
        };
        /**
         * Attaches an MatDialogContainer to a dialog's already-created overlay.
         * @param overlay Reference to the dialog's underlying overlay.
         * @param config The dialog configuration.
         * @returns A promise resolving to a ComponentRef for the attached container.
         */
        Dialog.prototype._attachDialogContainer = function (overlay, config) {
            var container = config.containerComponent || this._injector.get(DIALOG_CONTAINER);
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            var injector = core.Injector.create({
                parent: userInjector || this._injector,
                providers: [{ provide: DialogConfig, useValue: config }]
            });
            var containerPortal = new portal.ComponentPortal(container, config.viewContainerRef, injector);
            var containerRef = overlay.attach(containerPortal);
            containerRef.instance._config = config;
            return containerRef.instance;
        };
        /**
         * Attaches the user-provided component to the already-created MatDialogContainer.
         * @param componentOrTemplateRef The type of component being loaded into the dialog,
         *     or a TemplateRef to instantiate as the content.
         * @param dialogContainer Reference to the wrapping MatDialogContainer.
         * @param overlayRef Reference to the overlay in which the dialog resides.
         * @param config The dialog configuration.
         * @returns A promise resolving to the MatDialogRef that should be returned to the user.
         */
        Dialog.prototype._attachDialogContentForComponent = function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
            // Create a reference to the dialog we're creating in order to give the user a handle
            // to modify and close it.
            var dialogRef = this._createDialogRef(overlayRef, dialogContainer, config);
            var injector = this._createInjector(config, dialogRef, dialogContainer);
            var contentRef = dialogContainer.attachComponentPortal(new portal.ComponentPortal(componentOrTemplateRef, undefined, injector));
            dialogRef.componentInstance = contentRef.instance;
            return dialogRef;
        };
        /**
         * Attaches the user-provided component to the already-created MatDialogContainer.
         * @param componentOrTemplateRef The type of component being loaded into the dialog,
         *     or a TemplateRef to instantiate as the content.
         * @param dialogContainer Reference to the wrapping MatDialogContainer.
         * @param overlayRef Reference to the overlay in which the dialog resides.
         * @param config The dialog configuration.
         * @returns A promise resolving to the MatDialogRef that should be returned to the user.
         */
        Dialog.prototype._attachDialogContentForTemplate = function (componentOrTemplateRef, dialogContainer, overlayRef, config) {
            // Create a reference to the dialog we're creating in order to give the user a handle
            // to modify and close it.
            var dialogRef = this._createDialogRef(overlayRef, dialogContainer, config);
            dialogContainer.attachTemplatePortal(new portal.TemplatePortal(componentOrTemplateRef, null, { $implicit: config.data, dialogRef: dialogRef }));
            return dialogRef;
        };
        /**
         * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
         * of a dialog to close itself and, optionally, to return a value.
         * @param config Config object that is used to construct the dialog.
         * @param dialogRef Reference to the dialog.
         * @param container Dialog container element that wraps all of the contents.
         * @returns The custom injector that can be used inside the dialog.
         */
        Dialog.prototype._createInjector = function (config, dialogRef, dialogContainer) {
            var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
            var providers = [
                { provide: this._injector.get(DIALOG_REF), useValue: dialogRef },
                { provide: this._injector.get(DIALOG_CONTAINER), useValue: dialogContainer },
                { provide: DIALOG_DATA, useValue: config.data }
            ];
            if (config.direction && (!userInjector ||
                !userInjector.get(bidi.Directionality, null, core.InjectFlags.Optional))) {
                providers.push({
                    provide: bidi.Directionality,
                    useValue: { value: config.direction, change: rxjs.of() }
                });
            }
            return core.Injector.create({ parent: userInjector || this._injector, providers: providers });
        };
        /** Creates a new dialog ref. */
        Dialog.prototype._createDialogRef = function (overlayRef, dialogContainer, config) {
            var dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);
            dialogRef.disableClose = config.disableClose;
            dialogRef.updateSize(config).updatePosition(config.position);
            return dialogRef;
        };
        /**
         * Expands the provided configuration object to include the default values for properties which
         * are undefined.
         */
        Dialog.prototype._applyConfigDefaults = function (config) {
            var dialogConfig = this._injector.get(DIALOG_CONFIG);
            return Object.assign(Object.assign({}, new dialogConfig()), config);
        };
        return Dialog;
    }());
    Dialog.decorators = [
        { type: core.Injectable }
    ];
    Dialog.ctorParameters = function () { return [
        { type: overlay.Overlay },
        { type: core.Injector },
        { type: core.Type, decorators: [{ type: core.Inject, args: [DIALOG_REF,] }] },
        { type: undefined, decorators: [{ type: core.Inject, args: [DIALOG_SCROLL_STRATEGY,] }] },
        { type: Dialog, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] },
        { type: common.Location, decorators: [{ type: core.Optional }] }
    ]; };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ɵ0 = DialogRef, ɵ1 = CdkDialogContainer, ɵ2 = DialogConfig;
    var DialogModule = /** @class */ (function () {
        function DialogModule() {
        }
        return DialogModule;
    }());
    DialogModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        overlay.OverlayModule,
                        portal.PortalModule,
                        a11y.A11yModule,
                    ],
                    exports: [
                        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
                        // don't have to remember to import it or be faced with an unhelpful error.
                        portal.PortalModule,
                        CdkDialogContainer,
                    ],
                    declarations: [
                        CdkDialogContainer,
                    ],
                    providers: [
                        Dialog,
                        MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                        { provide: DIALOG_REF, useValue: ɵ0 },
                        { provide: DIALOG_CONTAINER, useValue: ɵ1 },
                        { provide: DIALOG_CONFIG, useValue: ɵ2 },
                    ],
                    entryComponents: [CdkDialogContainer],
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

    exports.CdkDialogContainer = CdkDialogContainer;
    exports.DIALOG_CONFIG = DIALOG_CONFIG;
    exports.DIALOG_CONTAINER = DIALOG_CONTAINER;
    exports.DIALOG_DATA = DIALOG_DATA;
    exports.DIALOG_REF = DIALOG_REF;
    exports.DIALOG_SCROLL_STRATEGY = DIALOG_SCROLL_STRATEGY;
    exports.Dialog = Dialog;
    exports.DialogConfig = DialogConfig;
    exports.DialogModule = DialogModule;
    exports.DialogRef = DialogRef;
    exports.MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = MAT_DIALOG_SCROLL_STRATEGY_PROVIDER;
    exports.MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY = MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
    exports.throwDialogContentAlreadyAttachedError = throwDialogContentAlreadyAttachedError;
    exports.ɵ0 = ɵ0;
    exports.ɵ1 = ɵ1;
    exports.ɵ2 = ɵ2;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-experimental-dialog.umd.js.map
