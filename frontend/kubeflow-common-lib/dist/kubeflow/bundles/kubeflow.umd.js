(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/localize/init'), require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/common/http'), require('@angular/platform-browser/animations'), require('@angular/material/form-field'), require('@angular/material/select'), require('rxjs'), require('rxjs/operators'), require('@angular/material/snack-bar'), require('@angular/material/icon'), require('@angular/material/button'), require('@angular/material/core'), require('lodash'), require('@angular/material/card'), require('@angular/material/divider'), require('@angular/material/table'), require('@angular/material/tooltip'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/material/progress-spinner'), require('@fortawesome/angular-fontawesome'), require('date-fns'), require('lodash-es/memoize'), require('@angular/cdk/clipboard'), require('@angular/material/chips'), require('@angular/material/menu'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/free-brands-svg-icons'), require('@angular/material/dialog'), require('@angular/material/input')) :
    typeof define === 'function' && define.amd ? define('kubeflow', ['exports', '@angular/localize/init', '@angular/core', '@angular/common', '@angular/forms', '@angular/common/http', '@angular/platform-browser/animations', '@angular/material/form-field', '@angular/material/select', 'rxjs', 'rxjs/operators', '@angular/material/snack-bar', '@angular/material/icon', '@angular/material/button', '@angular/material/core', 'lodash', '@angular/material/card', '@angular/material/divider', '@angular/material/table', '@angular/material/tooltip', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/material/progress-spinner', '@fortawesome/angular-fontawesome', 'date-fns', 'lodash-es/memoize', '@angular/cdk/clipboard', '@angular/material/chips', '@angular/material/menu', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons', '@angular/material/dialog', '@angular/material/input'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.kubeflow = {}, global.ng.localize.init, global.ng.core, global.ng.common, global.ng.forms, global.ng.common.http, global.ng.platformBrowser.animations, global.ng.material.formField, global.ng.material.select, global.rxjs, global.rxjs.operators, global.ng.material.snackBar, global.ng.material.icon, global.ng.material.button, global.ng.material.core, global.lodash, global.ng.material.card, global.ng.material.divider, global.ng.material.table, global.ng.material.tooltip, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.material.progressSpinner, global.angularFontawesome, global.dateFns, global.memoize, global.ng.cdk.clipboard, global.ng.material.chips, global.ng.material.menu, global.freeSolidSVGIcons, global.freeBrandsSVGIcons, global.ng.material.dialog, global.ng.material.input));
}(this, (function (exports, init, i0, i1$1, i3, i1$2, animations, i1$3, i4, rxjs, operators, i1, i2, i2$1, i7, lodash, i2$3, i2$6, i1$6, i3$1, i1$4, i2$2, i2$4, i1$5, dateFns, memoize, i2$5, i6, i10, freeSolidSvgIcons, freeBrandsSvgIcons, i1$7, i2$7) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);
    var i1__namespace$3 = /*#__PURE__*/_interopNamespace(i1$3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i2__namespace$2 = /*#__PURE__*/_interopNamespace(i2$3);
    var i2__namespace$6 = /*#__PURE__*/_interopNamespace(i2$6);
    var i1__namespace$6 = /*#__PURE__*/_interopNamespace(i1$6);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i1__namespace$4 = /*#__PURE__*/_interopNamespace(i1$4);
    var i2__namespace$3 = /*#__PURE__*/_interopNamespace(i2$2);
    var i2__namespace$4 = /*#__PURE__*/_interopNamespace(i2$4);
    var i1__namespace$5 = /*#__PURE__*/_interopNamespace(i1$5);
    var memoize__default = /*#__PURE__*/_interopDefaultLegacy(memoize);
    var i2__namespace$5 = /*#__PURE__*/_interopNamespace(i2$5);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i10__namespace = /*#__PURE__*/_interopNamespace(i10);
    var i1__namespace$7 = /*#__PURE__*/_interopNamespace(i1$7);
    var i2__namespace$7 = /*#__PURE__*/_interopNamespace(i2$7);

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
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
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
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var defaultConfig = {
        retries: 1,
        interval: 1000,
        maxInterval: 16000,
    };
    var ExponentialBackoff = /** @class */ (function () {
        function ExponentialBackoff(config) {
            if (config === void 0) { config = defaultConfig; }
            var conf = Object.assign(Object.assign({}, defaultConfig), config);
            this.retries = conf.retries;
            this.interval = conf.interval;
            this.maxInterval = conf.maxInterval;
            this.poller = new rxjs.ReplaySubject(1);
            this.n = 0;
            this.remainingTries = this.retries + 1;
            this.currInterval = this.interval;
        }
        ExponentialBackoff.prototype.start = function () {
            var _this = this;
            // Reset the shceduler
            if (this.emitter) {
                this.emitter.unsubscribe();
            }
            // Start the Exponential Backoff. All the logic is in iterate()
            this.emitter = rxjs.timer(0, this.interval).subscribe(function () {
                _this.iterate();
            });
            return this.poller;
        };
        ExponentialBackoff.prototype.iterate = function () {
            var _this = this;
            // Emit a new value
            this.n++;
            this.poller.next(this.n);
            // Cancel the previous subscription and reduce the retries
            // If no more retries, then double the interval
            this.emitter.unsubscribe();
            this.remainingTries--;
            if (this.remainingTries === 0) {
                this.remainingTries = this.retries;
                this.currInterval = Math.min(this.currInterval * 2, this.maxInterval);
            }
            this.emitter = rxjs.interval(this.currInterval).subscribe(function () {
                _this.iterate();
            });
        };
        ExponentialBackoff.prototype.reset = function () {
            this.n = 0;
            this.currInterval = this.interval;
            this.remainingTries = this.retries + 1;
            this.start();
        };
        ExponentialBackoff.prototype.stop = function () {
            if (this.emitter) {
                this.emitter.unsubscribe();
            }
        };
        ExponentialBackoff.prototype.getPoller = function () {
            return this.poller;
        };
        return ExponentialBackoff;
    }());

    exports.DashboardState = void 0;
    (function (DashboardState) {
        DashboardState[DashboardState["Connecting"] = 0] = "Connecting";
        DashboardState[DashboardState["Connected"] = 1] = "Connected";
        DashboardState[DashboardState["Disconnected"] = 2] = "Disconnected";
    })(exports.DashboardState || (exports.DashboardState = {}));

    var NamespaceService = /** @class */ (function () {
        function NamespaceService() {
            var _this = this;
            // Observable string sources
            this.selectedNamespaceSource = new rxjs.ReplaySubject(1);
            this.dashboardConnectedSource = new rxjs.BehaviorSubject(exports.DashboardState.Connecting);
            // Observable string streams
            this.selectedNamespace$ = this.selectedNamespaceSource.asObservable();
            this.dashboardConnected$ = this.dashboardConnectedSource.asObservable();
            rxjs.fromEvent(window, 'load').subscribe(function (_) {
                if (window.centraldashboard &&
                    window.centraldashboard.CentralDashboardEventHandler) {
                    // Init method will invoke the callback with the event handler instance
                    // and a boolean indicating whether the page is iframed or not
                    window.centraldashboard.CentralDashboardEventHandler.init(function (cdeh, isIframed) {
                        // Binds a callback that gets invoked anytime the Dashboard's
                        // namespace is changed
                        cdeh.onNamespaceSelected = _this.updateSelectedNamespace.bind(_this);
                    });
                    _this.dashboardConnectedSource.next(exports.DashboardState.Connected);
                    return;
                }
                _this.dashboardConnectedSource.next(exports.DashboardState.Disconnected);
                if (_this.currNamespace === undefined) {
                    _this.updateSelectedNamespace('kubeflow-user');
                }
            });
        }
        // GETers
        NamespaceService.prototype.getSelectedNamespace = function () {
            return this.selectedNamespace$;
        };
        // Service message commands
        NamespaceService.prototype.updateSelectedNamespace = function (namespace) {
            if (namespace.length !== 0) {
                this.currNamespace = namespace;
                this.selectedNamespaceSource.next(namespace);
            }
        };
        NamespaceService.prototype.dashboardConnected = function () {
            return (window.parent.location.pathname !== window.location.pathname &&
                window.centraldashboard);
        };
        return NamespaceService;
    }());
    NamespaceService.ɵfac = function NamespaceService_Factory(t) { return new (t || NamespaceService)(); };
    NamespaceService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: NamespaceService, factory: NamespaceService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NamespaceService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    exports.SnackType = void 0;
    (function (SnackType) {
        SnackType[SnackType["Success"] = 0] = "Success";
        SnackType[SnackType["Error"] = 1] = "Error";
        SnackType[SnackType["Warning"] = 2] = "Warning";
        SnackType[SnackType["Info"] = 3] = "Info";
    })(exports.SnackType || (exports.SnackType = {}));

    var _c2$1 = function (a0) { return [a0, "pad"]; };
    var SnackBarComponent = /** @class */ (function () {
        function SnackBarComponent(snackBarRef, data) {
            this.snackBarRef = snackBarRef;
            this.data = data;
        }
        Object.defineProperty(SnackBarComponent.prototype, "icon", {
            get: function () {
                switch (this.data.snackType) {
                    case exports.SnackType.Success:
                        return 'done';
                    case exports.SnackType.Error:
                        return 'clear';
                    case exports.SnackType.Warning:
                        return 'warning';
                    case exports.SnackType.Info:
                        return 'info';
                    default:
                        return 'warning';
                }
            },
            enumerable: false,
            configurable: true
        });
        SnackBarComponent.prototype.dismiss = function () {
            this.snackBarRef.dismiss();
        };
        return SnackBarComponent;
    }());
    SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) { return new (t || SnackBarComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace.MatSnackBarRef), i0__namespace.ɵɵdirectiveInject(i1.MAT_SNACK_BAR_DATA)); };
    SnackBarComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SnackBarComponent, selectors: [["lib-snack-bar"]], decls: 7, vars: 5, consts: function () {
            var i18n_0;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1808188406576936132$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_SNACK_BAR_COMPONENT_SNACK_BAR_COMPONENT_TS_1 = goog.getMsg("DISMISS");
                i18n_0 = MSG_EXTERNAL_1808188406576936132$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_SNACK_BAR_COMPONENT_SNACK_BAR_COMPONENT_TS_1;
            }
            else {
                i18n_0 = $localize(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject([":\u241F0c0be57aaf30414531e79157a45e0fc3fd6b637b\u241F1808188406576936132:DISMISS"], [":\u241F0c0be57aaf30414531e79157a45e0fc3fd6b637b\u241F1808188406576936132:DISMISS"])));
            }
            return [[1, "snack-container"], [3, "ngClass"], ["mat-button", "", "color", "accent", 3, "click"], i18n_0];
        }, template: function SnackBarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "mat-icon", 1);
                i0__namespace.ɵɵtext(2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "span");
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "button", 2);
                i0__namespace.ɵɵlistener("click", function SnackBarComponent_Template_button_click_5_listener() { return ctx.dismiss(); });
                i0__namespace.ɵɵi18n(6, 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction1(3, _c2$1, ctx.icon));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(ctx.icon);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate(ctx.data.msg);
            }
        }, directives: [i2__namespace.MatIcon, i1__namespace$1.NgClass, i2__namespace$1.MatButton], styles: [".snack-container[_ngcontent-%COMP%]{display:flex;align-items:center}.pad[_ngcontent-%COMP%]{margin-right:10px}.done[_ngcontent-%COMP%]{color:green}.clear[_ngcontent-%COMP%]{color:red}.warning[_ngcontent-%COMP%]{color:orange}span[_ngcontent-%COMP%]{width:90%}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SnackBarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-snack-bar',
                        templateUrl: './snack-bar.component.html',
                        styleUrls: ['./snack-bar.component.scss'],
                    }]
            }], function () {
            return [{ type: i1__namespace.MatSnackBarRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_SNACK_BAR_DATA]
                        }] }];
        }, null);
    })();
    var templateObject_1$7;

    var SnackBarService = /** @class */ (function () {
        function SnackBarService(snackBar) {
            this.snackBar = snackBar;
            this.dialogState = { shown: false, msg: '' };
        }
        SnackBarService.prototype.show = function (message, type, dur) {
            if (dur === void 0) { dur = 8000; }
            return this.snackBar.openFromComponent(SnackBarComponent, {
                duration: dur,
                data: { msg: message, snackType: type },
            });
        };
        SnackBarService.prototype.close = function () {
            this.dialogState.shown = false;
            this.snackBar.dismiss();
        };
        SnackBarService.prototype.open = function (msg, type, time) {
            var _this = this;
            if (time === void 0) { time = 20000; }
            if (this.dialogState.shown && this.dialogState.msg === msg) {
                return;
            }
            this.dialogState.shown = true;
            this.dialogState.msg = msg;
            this.show(msg, type, time)
                .afterDismissed()
                .subscribe(function () {
                _this.dialogState.shown = false;
                _this.dialogState.msg = '';
            });
        };
        return SnackBarService;
    }());
    SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(i0__namespace.ɵɵinject(i1__namespace.MatSnackBar)); };
    SnackBarService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SnackBarService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1__namespace.MatSnackBar }]; }, null);
    })();

    var BackendService = /** @class */ (function () {
        function BackendService(http, snackBar) {
            this.http = http;
            this.snackBar = snackBar;
            this.apiUrl = '';
        }
        // GETers
        BackendService.prototype.getUsername = function () {
            var _this = this;
            var url = "info";
            return this.http.get(url).pipe(operators.catchError(function (error) { return _this.handleError(error, false); }), operators.map(function (data) { return data.user; }));
        };
        BackendService.prototype.getNamespaces = function (showSnackBar, url) {
            var _this = this;
            if (showSnackBar === void 0) { showSnackBar = true; }
            return this.http.get(url ? url : 'api/namespaces').pipe(operators.catchError(function (error) { return _this.handleError(error, showSnackBar); }), operators.map(function (data) { return data.namespaces
                ? data.namespaces
                : data; }));
        };
        BackendService.prototype.getStorageClasses = function (showSnackBar) {
            var _this = this;
            if (showSnackBar === void 0) { showSnackBar = true; }
            // Get existing PVCs in a namespace
            var url = "api/storageclasses";
            return this.http.get(url).pipe(operators.catchError(function (error) { return _this.handleError(error, showSnackBar); }), operators.map(function (data) {
                return data.storageClasses;
            }));
        };
        BackendService.prototype.getDefaultStorageClass = function (showSnackBar) {
            var _this = this;
            if (showSnackBar === void 0) { showSnackBar = true; }
            var url = "api/storageclasses/default";
            return this.http.get(url).pipe(operators.catchError(function (error) { return _this.handleError(error, showSnackBar); }), operators.map(function (data) {
                return data.defaultStorageClass;
            }));
        };
        // ---------------------------Error Handling---------------------------------
        BackendService.prototype.getBackendErrorLog = function (error) {
            if (error.error === null) {
                return error.message;
            }
            else {
                // Show the message the backend has sent
                return error.error.log;
            }
        };
        BackendService.prototype.getErrorMessage = function (error) {
            if (typeof error === 'string') {
                return error;
            }
            if (error instanceof i1$2.HttpErrorResponse) {
                if (this.getBackendErrorLog(error) !== undefined) {
                    return this.getBackendErrorLog(error);
                }
                return error.status + ": " + error.message;
            }
            if (error instanceof ErrorEvent) {
                return error.message;
            }
            return "Unexpected error encountered";
        };
        BackendService.prototype.getSnackErrorMessage = function (error) {
            if (typeof error === 'string') {
                return $localize(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["An error occurred: ", ""], ["An error occurred: ", ""])), error);
            }
            if (error.error instanceof ErrorEvent) {
                return $localize(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["Client error: ", ""], ["Client error: ", ""])), error.error.message);
            }
            if (error instanceof i1$2.HttpErrorResponse) {
                // In case of status code 0 or negative, Http module couldn't
                // connect to the backend
                if (error.status <= 0) {
                    return $localize(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["Could not connect to the backend."], ["Could not connect to the backend."])));
                }
                return "[" + error.status + "] " + this.getBackendErrorLog(error) + "\n" + error.url;
            }
            if (error instanceof ErrorEvent) {
                return error.message;
            }
            return $localize(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Unexpected error encountered"], ["Unexpected error encountered"])));
        };
        BackendService.prototype.handleError = function (error, showSnackBar) {
            if (showSnackBar === void 0) { showSnackBar = true; }
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(error);
            if (showSnackBar) {
                this.snackBar.open(this.getSnackErrorMessage(error), exports.SnackType.Error);
            }
            return rxjs.throwError(this.getErrorMessage(error));
        };
        return BackendService;
    }());
    BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(i0__namespace.ɵɵinject(i1__namespace$2.HttpClient), i0__namespace.ɵɵinject(SnackBarService)); };
    BackendService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(BackendService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1__namespace$2.HttpClient }, { type: SnackBarService }]; }, null);
    })();
    var templateObject_1$6, templateObject_2$3, templateObject_3$1, templateObject_4;

    function NamespaceSelectComponent_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-option", 5);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var namespace_r1 = ctx.$implicit;
            i0__namespace.ɵɵproperty("value", namespace_r1);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", namespace_r1, " ");
        }
    }
    var NamespaceSelectComponent = /** @class */ (function () {
        function NamespaceSelectComponent(namespaceService, backend) {
            this.namespaceService = namespaceService;
            this.backend = backend;
            this.namespaces = [];
            this.subscriptions = new rxjs.Subscription();
            this.poller = new ExponentialBackoff();
        }
        NamespaceSelectComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Keep track of the selected namespace
            var currNsSub = this.namespaceService
                .getSelectedNamespace()
                .subscribe(function (namespace) {
                _this.currNamespace = namespace;
            });
            // Poll untill you get existing Namespaces
            var nsGetSub = this.poller.start().subscribe(function () {
                _this.backend.getNamespaces(true, _this.namespacesUrl).subscribe(function (namespaces) {
                    _this.namespaces = namespaces;
                    if (_this.currNamespace === undefined ||
                        _this.currNamespace.length === 0) {
                        return;
                    }
                    // stop polling
                    _this.namespaceService.updateSelectedNamespace(_this.currNamespace);
                    _this.poller.stop();
                    _this.subscriptions.unsubscribe();
                });
            });
            this.subscriptions.add(nsGetSub);
            this.subscriptions.add(currNsSub);
        };
        NamespaceSelectComponent.prototype.ngOnDestroy = function () {
            this.subscriptions.unsubscribe();
        };
        NamespaceSelectComponent.prototype.namespaceChanged = function (namespace) {
            this.namespaceService.updateSelectedNamespace(namespace);
        };
        return NamespaceSelectComponent;
    }());
    NamespaceSelectComponent.ɵfac = function NamespaceSelectComponent_Factory(t) { return new (t || NamespaceSelectComponent)(i0__namespace.ɵɵdirectiveInject(NamespaceService), i0__namespace.ɵɵdirectiveInject(BackendService)); };
    NamespaceSelectComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NamespaceSelectComponent, selectors: [["lib-namespace-select"]], inputs: { namespacesUrl: "namespacesUrl" }, decls: 7, vars: 2, consts: function () {
            var i18n_0;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_6442671738397537509$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_NAMESPACE_SELECT_NAMESPACE_SELECT_COMPONENT_TS_1 = goog.getMsg("Select Namespace");
                i18n_0 = MSG_EXTERNAL_6442671738397537509$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_NAMESPACE_SELECT_NAMESPACE_SELECT_COMPONENT_TS_1;
            }
            else {
                i18n_0 = $localize(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject([":\u241F2061ce2524f31b7754bd310c6b0ad194b563767c\u241F6442671738397537509:Select Namespace"], [":\u241F2061ce2524f31b7754bd310c6b0ad194b563767c\u241F6442671738397537509:Select Namespace"])));
            }
            return [[1, "center-flex", "space-top"], i18n_0, ["name", "namespacesSelect", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "spacer"], [3, "value"]];
        }, template: function NamespaceSelectComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field");
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵi18n(3, 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-select", 2);
                i0__namespace.ɵɵlistener("ngModelChange", function NamespaceSelectComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.currNamespace = $event; })("selectionChange", function NamespaceSelectComponent_Template_mat_select_selectionChange_4_listener($event) { return ctx.namespaceChanged($event.value); });
                i0__namespace.ɵɵtemplate(5, NamespaceSelectComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(6, "div", 4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngModel", ctx.currNamespace);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.namespaces);
            }
        }, directives: [i1__namespace$3.MatFormField, i1__namespace$3.MatLabel, i4__namespace.MatSelect, i3__namespace.NgControlStatus, i3__namespace.NgModel, i1__namespace$1.NgForOf, i7__namespace.MatOption], styles: [".space-top[_ngcontent-%COMP%]{padding-top:1.5rem}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NamespaceSelectComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-namespace-select',
                        templateUrl: './namespace-select.component.html',
                        styleUrls: ['./namespace-select.component.scss'],
                    }]
            }], function () { return [{ type: NamespaceService }, { type: BackendService }]; }, { namespacesUrl: [{
                    type: i0.Input
                }] });
    })();
    var templateObject_1$5;

    var SnackBarModule = /** @class */ (function () {
        function SnackBarModule() {
        }
        return SnackBarModule;
    }());
    SnackBarModule.ɵfac = function SnackBarModule_Factory(t) { return new (t || SnackBarModule)(); };
    SnackBarModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: SnackBarModule });
    SnackBarModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i2.MatIconModule, i2$1.MatButtonModule, i1.MatSnackBarModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SnackBarModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1$1.CommonModule, i2.MatIconModule, i2$1.MatButtonModule, i1.MatSnackBarModule],
                        declarations: [SnackBarComponent],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(SnackBarModule, { declarations: [SnackBarComponent], imports: [i1$1.CommonModule, i2.MatIconModule, i2$1.MatButtonModule, i1.MatSnackBarModule] }); })();

    var NamespaceSelectModule = /** @class */ (function () {
        function NamespaceSelectModule() {
        }
        return NamespaceSelectModule;
    }());
    NamespaceSelectModule.ɵfac = function NamespaceSelectModule_Factory(t) { return new (t || NamespaceSelectModule)(); };
    NamespaceSelectModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: NamespaceSelectModule });
    NamespaceSelectModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i3.FormsModule,
                i1$2.HttpClientModule,
                animations.BrowserAnimationsModule,
                i1$3.MatFormFieldModule,
                i4.MatSelectModule,
                SnackBarModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NamespaceSelectModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i3.FormsModule,
                            i1$2.HttpClientModule,
                            animations.BrowserAnimationsModule,
                            i1$3.MatFormFieldModule,
                            i4.MatSelectModule,
                            SnackBarModule,
                        ],
                        declarations: [NamespaceSelectComponent],
                        exports: [NamespaceSelectComponent],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NamespaceSelectModule, { declarations: [NamespaceSelectComponent], imports: [i1$1.CommonModule,
                i3.FormsModule,
                i1$2.HttpClientModule,
                animations.BrowserAnimationsModule,
                i1$3.MatFormFieldModule,
                i4.MatSelectModule,
                SnackBarModule], exports: [NamespaceSelectComponent] });
    })();

    exports.TABLE_THEME = void 0;
    (function (TABLE_THEME) {
        TABLE_THEME["CARD"] = "card";
        TABLE_THEME["FLAT"] = "flat";
    })(exports.TABLE_THEME || (exports.TABLE_THEME = {}));
    // Event type that will be emitted each time a button is pressed on the UI
    var ActionEvent = /** @class */ (function () {
        function ActionEvent(action, data) {
            this.action = action;
            this.data = data;
        }
        return ActionEvent;
    }());

    var ActionListValue = /** @class */ (function () {
        function ActionListValue(actions) {
            this.actions = actions;
        }
        return ActionListValue;
    }());

    var ActionButtonValue = /** @class */ (function () {
        function ActionButtonValue(config) {
            this.defaultValues = {
                name: '',
                tooltip: '',
                color: '',
                field: '',
                text: '',
            };
            var _a = Object.assign(Object.assign({}, this.defaultValues), config), name = _a.name, tooltip = _a.tooltip, color = _a.color, field = _a.field, text = _a.text;
            this.name = name;
            this.tooltip = tooltip;
            this.color = color;
            this.field = field;
            this.text = text;
        }
        return ActionButtonValue;
    }());

    var ActionIconValue = /** @class */ (function () {
        function ActionIconValue(config) {
            this.defaultValues = {
                name: '',
                tooltip: '',
                tooltipInit: '',
                tooltipReady: '',
                color: '',
                field: '',
                iconInit: '',
                iconReady: '',
            };
            var _a = Object.assign(Object.assign({}, this.defaultValues), config), name = _a.name, tooltip = _a.tooltip, tooltipInit = _a.tooltipInit, tooltipReady = _a.tooltipReady, color = _a.color, field = _a.field, iconInit = _a.iconInit, iconReady = _a.iconReady;
            this.name = name;
            this.tooltip = tooltip;
            this.tooltipInit = tooltipInit;
            this.tooltipReady = tooltipReady;
            this.color = color;
            this.field = field;
            this.iconInit = iconInit;
            this.iconReady = iconReady;
            if (iconInit === '') {
                this.iconInit = iconReady;
            }
        }
        return ActionIconValue;
    }());

    var ChipsListValue = /** @class */ (function () {
        function ChipsListValue(config) {
            this.defaultValues = {
                field: '',
                noValueText: 'No items',
                maxVisibleChips: 3,
            };
            var _a = Object.assign(Object.assign({}, this.defaultValues), config), field = _a.field, valueFn = _a.valueFn, noValueText = _a.noValueText, maxVisibleChips = _a.maxVisibleChips;
            this.field = field;
            this.valueFn = valueFn;
            this.noValueText = noValueText;
            this.maxVisibleChips = maxVisibleChips;
        }
        ChipsListValue.prototype.getChips = function (row) {
            if (this.valueFn) {
                return this.valueFn(row);
            }
            return lodash.get(row, this.field);
        };
        return ChipsListValue;
    }());

    var ComponentValue = /** @class */ (function () {
        function ComponentValue(config) {
            var component = config.component;
            this.component = component;
        }
        return ComponentValue;
    }());

    var DateTimeValue = /** @class */ (function () {
        function DateTimeValue(config) {
            this.defaultValues = {
                field: '',
            };
            var field = Object.assign(Object.assign({}, this.defaultValues), config).field;
            this.field = field;
        }
        DateTimeValue.prototype.getValue = function (row) {
            return lodash.get(row, this.field);
        };
        return DateTimeValue;
    }());

    var MenuValue = /** @class */ (function () {
        function MenuValue(config) {
            this.defaultValues = {
                field: '',
                menuIcon: 'more_vert',
                itemsIcon: '',
                showTooltip: true,
            };
            var _a = Object.assign(Object.assign({}, this.defaultValues), config), field = _a.field, menuIcon = _a.menuIcon, itemsIcon = _a.itemsIcon, showTooltip = _a.showTooltip;
            this.field = field;
            this.menuIcon = menuIcon;
            this.itemsIcon = itemsIcon;
            this.showTooltip = showTooltip;
        }
        MenuValue.prototype.getItems = function (row) {
            return lodash.get(row, this.field);
        };
        return MenuValue;
    }());

    // Single Text field
    exports.TRUNCATE_TEXT_SIZE = void 0;
    (function (TRUNCATE_TEXT_SIZE) {
        TRUNCATE_TEXT_SIZE["NO_TRUNCATE"] = "none";
        TRUNCATE_TEXT_SIZE["SMALL"] = "text-small";
        TRUNCATE_TEXT_SIZE["MEDIUM"] = "text-medium";
        TRUNCATE_TEXT_SIZE["LARGE"] = "text-large";
    })(exports.TRUNCATE_TEXT_SIZE || (exports.TRUNCATE_TEXT_SIZE = {}));
    var PropertyValue = /** @class */ (function () {
        function PropertyValue(config) {
            this.defaultValues = {
                field: '',
                tooltipField: '',
                popoverField: '',
                truncate: exports.TRUNCATE_TEXT_SIZE.NO_TRUNCATE,
                isLink: false,
            };
            var _a = Object.assign(Object.assign({}, this.defaultValues), config), field = _a.field, valueFn = _a.valueFn, tooltipField = _a.tooltipField, popoverField = _a.popoverField, truncate = _a.truncate, isLink = _a.isLink;
            this.field = field;
            this.valueFn = valueFn;
            this.tooltipField = tooltipField;
            this.popoverField = popoverField;
            this.truncate = truncate;
            this.isLink = isLink;
        }
        PropertyValue.prototype.getClasses = function () {
            var classes = [];
            if (this.isLink) {
                classes.push('link');
            }
            if (this.truncate === exports.TRUNCATE_TEXT_SIZE.NO_TRUNCATE) {
                return classes;
            }
            classes.push.apply(classes, ['truncate', this.truncate]);
            return classes;
        };
        PropertyValue.prototype.getTooltip = function (row) {
            if (this.tooltipField.length === 0) {
                return '';
            }
            return lodash.get(row, this.tooltipField);
        };
        PropertyValue.prototype.getPopover = function (row) {
            if (this.popoverField.length === 0) {
                return '';
            }
            return lodash.get(row, this.popoverField);
        };
        PropertyValue.prototype.getValue = function (row) {
            if (this.valueFn) {
                return this.valueFn(row);
            }
            return lodash.get(row, this.field);
        };
        return PropertyValue;
    }());

    exports.STATUS_TYPE = void 0;
    (function (STATUS_TYPE) {
        STATUS_TYPE["READY"] = "ready";
        STATUS_TYPE["WAITING"] = "waiting";
        STATUS_TYPE["WARNING"] = "warning";
        STATUS_TYPE["ERROR"] = "error";
        STATUS_TYPE["UNAVAILABLE"] = "unavailable";
        STATUS_TYPE["UNINITIALIZED"] = "uninitialized";
        STATUS_TYPE["TERMINATING"] = "terminating";
        STATUS_TYPE["STOPPED"] = "stopped";
    })(exports.STATUS_TYPE || (exports.STATUS_TYPE = {}));

    var StatusValue = /** @class */ (function () {
        function StatusValue(config) {
            if (config === void 0) { config = {}; }
            this.defaultValues = {
                field: 'status',
                fieldPhase: '',
                fieldMessage: '',
                fieldState: '',
            };
            var _a = Object.assign(Object.assign({}, this.defaultValues), config), field = _a.field, valueFn = _a.valueFn, fieldPhase = _a.fieldPhase, fieldMessage = _a.fieldMessage, fieldState = _a.fieldState;
            this.field = field;
            this.valueFn = valueFn;
            this.fieldPhase = fieldPhase;
            this.fieldMessage = fieldMessage;
            this.fieldState = fieldState;
        }
        StatusValue.prototype.getPhase = function (row) {
            if (this.valueFn) {
                return this.valueFn(row).phase;
            }
            if (!this.fieldPhase) {
                return lodash.get(row, this.field + '.phase');
            }
            return lodash.get(row, this.fieldPhase);
        };
        StatusValue.prototype.getState = function (row) {
            if (this.valueFn) {
                return this.valueFn(row).state;
            }
            if (!this.fieldPhase) {
                return lodash.get(row, this.field + '.state');
            }
            return lodash.get(row, this.fieldState);
        };
        StatusValue.prototype.getMessage = function (row) {
            if (this.valueFn) {
                return this.valueFn(row).message;
            }
            if (!this.fieldPhase) {
                return lodash.get(row, this.field + '.message');
            }
            return lodash.get(row, this.fieldMessage);
        };
        StatusValue.prototype.getIcon = function (row) {
            switch (this.getPhase(row)) {
                case exports.STATUS_TYPE.READY: {
                    return 'check_circle';
                }
                case exports.STATUS_TYPE.READY: {
                    return 'warning';
                }
                case exports.STATUS_TYPE.UNAVAILABLE: {
                    return 'timelapse';
                }
                case exports.STATUS_TYPE.ERROR: {
                    return 'error';
                }
                default: {
                    return 'warning';
                }
            }
        };
        StatusValue.prototype.getCssClasses = function (row) {
            return [this.getPhase(row), 'status'];
        };
        StatusValue.prototype.getTooltip = function (row) {
            return this.getMessage(row);
        };
        return StatusValue;
    }());

    var TemplateValue = /** @class */ (function () {
        function TemplateValue(config) {
            if (config === void 0) { config = { ref: undefined }; }
            var ref = config.ref;
            this.ref = ref;
        }
        return TemplateValue;
    }());

    function PopoverComponent_ng_template_3_Template(rf, ctx) { }
    var PopoverTemplatePortal = /** @class */ (function (_super) {
        __extends(PopoverTemplatePortal, _super);
        function PopoverTemplatePortal(template, context, viewContainerRef) {
            return _super.call(this, template, viewContainerRef, context) || this;
        }
        return PopoverTemplatePortal;
    }(i2$2.TemplatePortal));
    var PopoverComponent = /** @class */ (function () {
        function PopoverComponent(vcr, changeDetectorRef) {
            this.vcr = vcr;
            this.changeDetectorRef = changeDetectorRef;
            this.classListPrv = ['lib-popover'];
            this.visibilityPrv = 'hidden';
            this.message = '';
            this.onHide = new rxjs.Subject();
        }
        Object.defineProperty(PopoverComponent.prototype, "classList", {
            get: function () {
                return this.classListPrv;
            },
            set: function (list) {
                this.classListPrv = __spreadArray(['lib-popover'], __read(list));
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PopoverComponent.prototype, "hostClass", {
            get: function () {
                return this.classList.join(' ');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PopoverComponent.prototype, "template", {
            set: function (v) {
                this.tplPortal = v;
            },
            enumerable: false,
            configurable: true
        });
        PopoverComponent.prototype.OnMouseEnter = function () {
            if (this.hideTimeoutId) {
                clearTimeout(this.hideTimeoutId);
            }
        };
        PopoverComponent.prototype.OnMouseLeave = function () {
            this.hide(0);
        };
        PopoverComponent.prototype.show = function (delay) {
            var _this = this;
            if (this.hideTimeoutId) {
                window.clearTimeout(this.hideTimeoutId);
            }
            this.showTimeoutId = window.setTimeout(function () {
                _this.visibilityPrv = 'visible';
                // Mark for check in case the parent has set ChangeDetectionStrategy
                // to OnPush.
                _this.markForCheck();
            }, delay);
        };
        PopoverComponent.prototype.hide = function (delay) {
            var _this = this;
            if (this.showTimeoutId) {
                window.clearTimeout(this.showTimeoutId);
            }
            this.hideTimeoutId = window.setTimeout(function () {
                // TODO: When we start to use @angular/animations move the
                // "onHide.next()" method to animation's finished callback
                _this.onHide.next();
                _this.visibilityPrv = 'hidden';
                // Mark for check in case the parent has set ChangeDetectionStrategy
                // to OnPush.
                _this.markForCheck();
            }, delay);
        };
        PopoverComponent.prototype.afterHidden = function () {
            return this.onHide.asObservable();
        };
        PopoverComponent.prototype.markForCheck = function () {
            this.changeDetectorRef.markForCheck();
        };
        return PopoverComponent;
    }());
    PopoverComponent.ɵfac = function PopoverComponent_Factory(t) { return new (t || PopoverComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ViewContainerRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    PopoverComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PopoverComponent, selectors: [["lib-popover"]], hostVars: 4, hostBindings: function PopoverComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("mouseenter", function PopoverComponent_mouseenter_HostBindingHandler() { return ctx.OnMouseEnter(); })("mouseleave", function PopoverComponent_mouseleave_HostBindingHandler() { return ctx.OnMouseLeave(); });
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassMap(ctx.hostClass);
                i0__namespace.ɵɵstyleProp("visibility", ctx.visibilityPrv);
            }
        }, decls: 4, vars: 2, consts: [[1, "mat-typography"], [1, "popover-card"], [3, "cdkPortalOutlet"]], template: function PopoverComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "mat-card", 1);
                i0__namespace.ɵɵtext(2);
                i0__namespace.ɵɵtemplate(3, PopoverComponent_ng_template_3_Template, 0, 0, "ng-template", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.message, " ");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkPortalOutlet", ctx.tplPortal);
            }
        }, directives: [i2__namespace$2.MatCard, i2__namespace$3.CdkPortalOutlet], styles: [".lib-popover{display:block;visibility:hidden}.lib-popover .popover-card{padding:12px}"], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PopoverComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-popover',
                        templateUrl: './popover.component.html',
                        styleUrls: ['./popover.scss'],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () { return [{ type: i0__namespace.ViewContainerRef }, { type: i0__namespace.ChangeDetectorRef }]; }, { hostClass: [{
                    type: i0.HostBinding,
                    args: ['class']
                }], visibilityPrv: [{
                    type: i0.HostBinding,
                    args: ['style.visibility']
                }], OnMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], OnMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    /* This code was developed by @tasos-ale */
    var PopoverDirective = /** @class */ (function () {
        function PopoverDirective(overlay, viewContainerRef, elemRef, ngZone, scrollDispatcher) {
            this.overlay = overlay;
            this.viewContainerRef = viewContainerRef;
            this.elemRef = elemRef;
            this.ngZone = ngZone;
            this.scrollDispatcher = scrollDispatcher;
            this.libPopoverContext = {};
            this.libPopoverPosition = 'below';
            this.libPopoverClass = [];
            this.disabled = false;
            this.libPopoverShowDelay = 100;
            this.libPopoverHideDelay = 100;
        }
        Object.defineProperty(PopoverDirective.prototype, "libPopover", {
            get: function () {
                return this.libPopoverPrv;
            },
            set: function (v) {
                this.checkAndUpdate(this.libPopoverPrv, v);
                this.libPopoverPrv = v;
            },
            enumerable: false,
            configurable: true
        });
        PopoverDirective.prototype.OnMouseEnter = function () {
            if (this.disabled || !this.libPopover) {
                return;
            }
            this.show();
        };
        PopoverDirective.prototype.OnMouseLeave = function () {
            this.hide();
        };
        PopoverDirective.prototype.ngOnDestroy = function () {
            if (this.overlayRef) {
                this.overlayRef.dispose();
                this.popoverInstance = null;
            }
        };
        PopoverDirective.prototype.show = function (delay) {
            var _this = this;
            if (delay === void 0) { delay = this.libPopoverShowDelay; }
            if (!this.popoverInstance) {
                this.createPopover();
            }
            if (typeof this.libPopover === 'string') {
                this.popoverInstance.message = this.libPopover;
            }
            else if (this.libPopover instanceof i0.TemplateRef) {
                this.popoverInstance.template = new PopoverTemplatePortal(this.libPopover, this.libPopoverContext);
            }
            else if (this.libPopover instanceof i0.ComponentRef) {
                // https://github.com/Microsoft/TypeScript/issues/19298
                // FIXME: Add support for Components
            }
            if (this.libPopoverClass.length > 0) {
                this.popoverInstance.classList = this.libPopoverClass;
            }
            this.popoverInstance.show(delay);
            this.popoverInstance.afterHidden().subscribe(function () { return _this.detach(); });
            this.updatePosition();
        };
        PopoverDirective.prototype.createPopover = function () {
            var overlayRef = this.createOverlay();
            this.portal =
                this.portal ||
                    new i2$2.ComponentPortal(PopoverComponent, this.viewContainerRef);
            this.popoverInstance = overlayRef.attach(this.portal).instance;
        };
        PopoverDirective.prototype.createOverlay = function () {
            if (this.overlayRef) {
                return this.overlayRef;
            }
            var overlayConfig = this.getOverlayConfig();
            this.overlayRef = this.overlay.create(overlayConfig);
            return this.overlayRef;
        };
        PopoverDirective.prototype.hide = function (delay) {
            if (delay === void 0) { delay = this.libPopoverHideDelay; }
            if (this.popoverInstance) {
                this.popoverInstance.hide(delay);
            }
        };
        PopoverDirective.prototype.detach = function () {
            if (this.overlayRef && this.overlayRef.hasAttached) {
                this.overlayRef.detach();
            }
            this.popoverInstance = null;
        };
        PopoverDirective.prototype.getOverlayConfig = function () {
            var state = new i1$4.OverlayConfig({
                positionStrategy: this.getPositionStrategy(),
                scrollStrategy: this.overlay.scrollStrategies.close(),
                panelClass: 'lib-popover-panel',
                direction: 'ltr',
            });
            return state;
        };
        PopoverDirective.prototype.getConnectedElement = function () {
            return this.elemRef;
        };
        PopoverDirective.prototype.updatePosition = function () {
            var _this = this;
            if (this.popoverInstance) {
                this.popoverInstance.markForCheck();
                this.ngZone.onMicrotaskEmpty.pipe(operators.take(1)).subscribe(function () {
                    _this.overlayRef.updatePosition();
                });
            }
        };
        PopoverDirective.prototype.getPositionStrategy = function () {
            var originPos;
            var overlayPos;
            originPos = this.getOriginPos(this.libPopoverPosition);
            overlayPos = this.getOverlayPos(this.libPopoverPosition);
            var scrollableAncestors = this.scrollDispatcher.getAncestorScrollContainers(this.elemRef);
            return this.overlay
                .position()
                .flexibleConnectedTo(this.elemRef)
                .withTransformOriginOn('.lib-popover')
                .withFlexibleDimensions(false)
                .withViewportMargin(8)
                .withScrollableContainers(scrollableAncestors)
                .withPositions([
                Object.assign(Object.assign({}, originPos.main), overlayPos.main),
                Object.assign(Object.assign({}, originPos.fallback), overlayPos.fallback),
            ]);
        };
        PopoverDirective.prototype.getOriginPos = function (position) {
            var originPos;
            if (position === 'above' || position === 'below') {
                originPos = {
                    originX: 'center',
                    originY: position === 'above' ? 'top' : 'bottom',
                };
            }
            else if (position === 'before') {
                originPos = {
                    originX: 'start',
                    originY: 'center',
                };
            }
            else if (position === 'after') {
                originPos = {
                    originX: 'end',
                    originY: 'center',
                };
            }
            else {
                throw Error("Origin position \"" + position + "\" is invalid.");
            }
            var _a = this.invertPosition(position, originPos.originX, originPos.originY), x = _a.x, y = _a.y;
            return {
                main: originPos,
                fallback: { originX: x, originY: y },
            };
        };
        PopoverDirective.prototype.getOverlayPos = function (position) {
            var overlayPos;
            if (position === 'above') {
                overlayPos = {
                    overlayX: 'center',
                    overlayY: 'bottom',
                };
            }
            else if (position === 'below') {
                overlayPos = {
                    overlayX: 'center',
                    overlayY: 'top',
                };
            }
            else if (position === 'before') {
                overlayPos = {
                    overlayX: 'end',
                    overlayY: 'center',
                };
            }
            else if (position === 'after') {
                overlayPos = {
                    overlayX: 'start',
                    overlayY: 'center',
                };
            }
            else {
                throw Error("Overlay position \"" + position + "\" is invalid.");
            }
            var _a = this.invertPosition(position, overlayPos.overlayX, overlayPos.overlayY), x = _a.x, y = _a.y;
            return {
                main: overlayPos,
                fallback: { overlayX: x, overlayY: y },
            };
        };
        PopoverDirective.prototype.invertPosition = function (position, x, y) {
            if (position === 'above' || position === 'below') {
                if (y === 'top') {
                    y = 'bottom';
                }
                else if (y === 'bottom') {
                    y = 'top';
                }
            }
            else {
                if (x === 'end') {
                    x = 'start';
                }
                else if (x === 'start') {
                    x = 'end';
                }
            }
            return { x: x, y: y };
        };
        PopoverDirective.prototype.checkAndUpdate = function (oldValue, newValue) {
            if (typeof newValue === 'string' &&
                newValue !== oldValue &&
                this.popoverInstance) {
                this.popoverInstance.message = newValue;
                this.updatePosition();
            }
        };
        return PopoverDirective;
    }());
    PopoverDirective.ɵfac = function PopoverDirective_Factory(t) { return new (t || PopoverDirective)(i0__namespace.ɵɵdirectiveInject(i1__namespace$4.Overlay), i0__namespace.ɵɵdirectiveInject(i0__namespace.ViewContainerRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone), i0__namespace.ɵɵdirectiveInject(i1__namespace$4.ScrollDispatcher)); };
    PopoverDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: PopoverDirective, selectors: [["", "libPopover", ""]], hostBindings: function PopoverDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("mouseenter", function PopoverDirective_mouseenter_HostBindingHandler() { return ctx.OnMouseEnter(); })("mouseleave", function PopoverDirective_mouseleave_HostBindingHandler() { return ctx.OnMouseLeave(); });
            }
        }, inputs: { libPopover: "libPopover", libPopoverContext: "libPopoverContext", libPopoverPosition: "libPopoverPosition", libPopoverClass: "libPopoverClass", disabled: ["libPopoverDisabled", "disabled"], libPopoverShowDelay: "libPopoverShowDelay", libPopoverHideDelay: "libPopoverHideDelay" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PopoverDirective, [{
                type: i0.Directive,
                args: [{ selector: '[libPopover]' }]
            }], function () { return [{ type: i1__namespace$4.Overlay }, { type: i0__namespace.ViewContainerRef }, { type: i0__namespace.ElementRef }, { type: i0__namespace.NgZone }, { type: i1__namespace$4.ScrollDispatcher }]; }, { libPopover: [{
                    type: i0.Input,
                    args: ['libPopover']
                }], libPopoverContext: [{
                    type: i0.Input
                }], libPopoverPosition: [{
                    type: i0.Input
                }], libPopoverClass: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input,
                    args: ['libPopoverDisabled']
                }], libPopoverShowDelay: [{
                    type: i0.Input
                }], libPopoverHideDelay: [{
                    type: i0.Input
                }], OnMouseEnter: [{
                    type: i0.HostListener,
                    args: ['mouseenter']
                }], OnMouseLeave: [{
                    type: i0.HostListener,
                    args: ['mouseleave']
                }] });
    })();

    function IconComponent_mat_icon_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r0.getIcon(), "\n");
        }
    }
    function IconComponent_fa_icon_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "fa-icon", 2);
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("icon", ctx_r1.getIcon());
        }
    }
    function IconComponent_ng_container_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 6);
            i0__namespace.ɵɵelementStart(1, "i", 7);
            i0__namespace.ɵɵtext(2, "folder");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "i", 8);
            i0__namespace.ɵɵtext(4, "search");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function IconComponent_ng_container_2_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon", 9);
            i0__namespace.ɵɵtext(1, " memory ");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("inline", true);
        }
    }
    var _c0$8 = function () { return ["fas", "stop-circle"]; };
    function IconComponent_ng_container_2_fa_icon_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "fa-icon", 10);
        }
        if (rf & 2) {
            i0__namespace.ɵɵproperty("icon", i0__namespace.ɵɵpureFunction0(1, _c0$8));
        }
    }
    function IconComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, IconComponent_ng_container_2_div_1_Template, 5, 0, "div", 3);
            i0__namespace.ɵɵtemplate(2, IconComponent_ng_container_2_mat_icon_2_Template, 2, 1, "mat-icon", 4);
            i0__namespace.ɵɵtemplate(3, IconComponent_ng_container_2_fa_icon_3_Template, 1, 2, "fa-icon", 5);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.getIcon() === "folderSearch");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.getIcon() === "gpuSectionIcon");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.getIcon() === "stoppedResource");
        }
    }
    var IconComponent = /** @class */ (function () {
        function IconComponent() {
            this.icon = '';
            this.libIcon = true;
        }
        Object.defineProperty(IconComponent.prototype, "iconSplit", {
            get: function () {
                return this.icon.split(':');
            },
            enumerable: false,
            configurable: true
        });
        IconComponent.prototype.ngOnInit = function () { };
        IconComponent.prototype.getIcon = function () {
            if (this.iconSplit.length === 0) {
                console.error("Invalid icon '" + this.icon + "'");
                return '';
            }
            if (this.getCategory() === 'fa') {
                var inpt = this.iconSplit;
                return inpt.slice(1, inpt.length);
            }
            return this.iconSplit[1];
        };
        IconComponent.prototype.getCategory = function () {
            if (this.iconSplit.length === 0) {
                console.error("Invalid icon '" + this.icon + "'");
                return '';
            }
            return this.iconSplit[0];
        };
        return IconComponent;
    }());
    IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
    IconComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: IconComponent, selectors: [["lib-icon"]], hostVars: 2, hostBindings: function IconComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("lib-icon", ctx.libIcon);
            }
        }, inputs: { icon: "icon" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "icon", 4, "ngIf"], [3, "icon"], ["class", "folderSearch", 4, "ngIf"], ["class", "gpu", 3, "inline", 4, "ngIf"], ["class", "stoppedResource", 3, "icon", 4, "ngIf"], [1, "folderSearch"], [1, "material-icons", "folder"], [1, "material-icons", "search"], [1, "gpu", 3, "inline"], [1, "stoppedResource", 3, "icon"]], template: function IconComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, IconComponent_mat_icon_0_Template, 2, 1, "mat-icon", 0);
                i0__namespace.ɵɵtemplate(1, IconComponent_fa_icon_1_Template, 1, 1, "fa-icon", 1);
                i0__namespace.ɵɵtemplate(2, IconComponent_ng_container_2_Template, 4, 3, "ng-container", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.getCategory() === "material");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.getCategory() === "fa");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.getCategory() === "custom");
            }
        }, directives: [i1__namespace$1.NgIf, i2__namespace.MatIcon, i1__namespace$5.FaIconComponent], styles: ["mat-icon[_ngcontent-%COMP%]:not(.gpu){display:flex;margin:auto}.folderSearch[_ngcontent-%COMP%]{position:relative}.material-icons.folder[_ngcontent-%COMP%]{vertical-align:middle}.material-icons.search[_ngcontent-%COMP%]{position:absolute;color:#fff;left:13px;top:11px;font-size:14px}mat-icon.gpu[_ngcontent-%COMP%]{vertical-align:middle;font-size:28px;margin-left:-2px;margin-right:-.2rem}.stoppedResource[_ngcontent-%COMP%]{font-size:22px;color:grey}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IconComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-icon',
                        templateUrl: './icon.component.html',
                        styleUrls: ['./icon.component.scss'],
                    }]
            }], function () { return []; }, { icon: [{
                    type: i0.Input
                }], libIcon: [{
                    type: i0.HostBinding,
                    args: ['class.lib-icon']
                }] });
    })();

    function StatusComponent_mat_spinner_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-spinner", 4);
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("matTooltip", ctx_r0.config == null ? null : ctx_r0.config.getTooltip(ctx_r0.row));
        }
    }
    function StatusComponent_mat_spinner_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-spinner", 4);
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("matTooltip", ctx_r1.config == null ? null : ctx_r1.config.getTooltip(ctx_r1.row));
        }
    }
    function StatusComponent_lib_icon_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "lib-icon", 5);
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("matTooltip", ctx_r2.config == null ? null : ctx_r2.config.getTooltip(ctx_r2.row));
        }
    }
    function StatusComponent_mat_icon_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon", 6);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("matTooltip", ctx_r3.config == null ? null : ctx_r3.config.getTooltip(ctx_r3.row));
            i0__namespace.ɵɵproperty("ngClass", ctx_r3.config == null ? null : ctx_r3.config.getCssClasses(ctx_r3.row));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r3.config == null ? null : ctx_r3.config.getIcon(ctx_r3.row), " ");
        }
    }
    var StatusComponent = /** @class */ (function () {
        function StatusComponent() {
            this.STATUS_TYPE = exports.STATUS_TYPE;
        }
        StatusComponent.prototype.ngOnInit = function () { };
        return StatusComponent;
    }());
    StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
    StatusComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StatusComponent, selectors: [["lib-status"]], inputs: { row: "row", config: "config" }, decls: 5, vars: 4, consts: [[3, "ngSwitch"], ["diameter", "24", "matTooltipClass", "custom-tooltip", 3, "matTooltip", 4, "ngSwitchCase"], ["icon", "custom:stoppedResource", 3, "matTooltip", 4, "ngSwitchCase"], ["matTooltipClass", "custom-tooltip", 3, "ngClass", "matTooltip", 4, "ngSwitchDefault"], ["diameter", "24", "matTooltipClass", "custom-tooltip", 3, "matTooltip"], ["icon", "custom:stoppedResource", 3, "matTooltip"], ["matTooltipClass", "custom-tooltip", 3, "ngClass", "matTooltip"]], template: function StatusComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementContainerStart(0, 0);
                i0__namespace.ɵɵtemplate(1, StatusComponent_mat_spinner_1_Template, 1, 1, "mat-spinner", 1);
                i0__namespace.ɵɵtemplate(2, StatusComponent_mat_spinner_2_Template, 1, 1, "mat-spinner", 1);
                i0__namespace.ɵɵtemplate(3, StatusComponent_lib_icon_3_Template, 1, 1, "lib-icon", 2);
                i0__namespace.ɵɵtemplate(4, StatusComponent_mat_icon_4_Template, 2, 3, "mat-icon", 3);
                i0__namespace.ɵɵelementContainerEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngSwitch", ctx.config == null ? null : ctx.config.getPhase(ctx.row));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", ctx.STATUS_TYPE.WAITING);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", ctx.STATUS_TYPE.TERMINATING);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", ctx.STATUS_TYPE.STOPPED);
            }
        }, directives: [i1__namespace$1.NgSwitch, i1__namespace$1.NgSwitchCase, i1__namespace$1.NgSwitchDefault, i2__namespace$4.MatSpinner, i3__namespace$1.MatTooltip, IconComponent, i2__namespace.MatIcon, i1__namespace$1.NgClass], styles: [".status[_ngcontent-%COMP%]{display:flex;vertical-align:middle}.ready[_ngcontent-%COMP%]{color:green}.unavailable[_ngcontent-%COMP%]{color:grey}.warning[_ngcontent-%COMP%]{color:orange}.error[_ngcontent-%COMP%]{color:red}.stop[_ngcontent-%COMP%]{color:grey}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StatusComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-status',
                        templateUrl: './status.component.html',
                        styleUrls: ['./status.component.scss'],
                    }]
            }], function () { return []; }, { row: [{
                    type: i0.Input
                }], config: [{
                    type: i0.Input
                }] });
    })();

    var defaultDateOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    var defaultTimeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    };
    var intlOptions = Object.assign({}, defaultDateOptions, defaultTimeOptions);
    function dateTimeFormat(obj) {
        return new Intl.DateTimeFormat(obj.locale, obj.options).format(obj.date);
    }
    var memoizedDateTimeFormat = memoize__default['default'](dateTimeFormat);
    var DateTimeService = /** @class */ (function () {
        function DateTimeService() {
        }
        DateTimeService.prototype.parse = function (date) {
            // https://date-fns.org/v1.29.0/docs/parse
            return dateFns.parse(date);
        };
        DateTimeService.prototype.isEqual = function (date1, date2) {
            // This helper should be used whenever testing if two date objects
            // represent the same point in time is required. Note that equality
            // operators perform an identity check on Date objects, and thus do not
            // work as expected.
            return dateFns.isEqual(date1, date2);
        };
        DateTimeService.prototype.intlFormat = function (date, options, locale) {
            if (date == null) {
                return '-';
            }
            if (typeof date === 'string') {
                date = new Date(date);
            }
            if (!options) {
                options = intlOptions;
            }
            if (!locale) {
                locale = navigator.language || 'en-US';
            }
            return memoizedDateTimeFormat({ locale: locale, options: options, date: date });
        };
        DateTimeService.prototype.merge = function (date, time) {
            // FIXME: Return an invalid date object or raise an error if the input
            // is invalid.
            var dateTime = dateFns.parse(date);
            var timeArr = time.split(':');
            var hours = parseInt(timeArr[0], 10);
            var minutes = parseInt(timeArr[1], 10);
            var seconds = parseInt(timeArr[2], 10);
            if (this.isNotValidNumber(hours) || !this.isValidHours(hours)) {
                hours = 0;
            }
            if (this.isNotValidNumber(minutes) || !this.isValidMinutes(minutes)) {
                minutes = 0;
            }
            if (this.isNotValidNumber(seconds) || !this.isValidSeconds(seconds)) {
                seconds = 0;
            }
            dateTime = dateFns.setHours(dateTime, hours);
            dateTime = dateFns.setMinutes(dateTime, minutes);
            dateTime = dateFns.setSeconds(dateTime, seconds);
            return dateTime;
        };
        DateTimeService.prototype.distanceInWords = function (dateToCompare, date) {
            if (date === void 0) { date = new Date(); }
            return dateFns.distanceInWords(date, dateToCompare, {
                includeSeconds: false,
                addSuffix: true,
            })
                .replace('about', '')
                .replace('almost', '');
        };
        DateTimeService.prototype.isNotValidNumber = function (unit) {
            return Number.isNaN(unit);
        };
        DateTimeService.prototype.isValidHours = function (hours) {
            return this.between(hours, 0, 24);
        };
        DateTimeService.prototype.isValidMinutes = function (minutes) {
            return this.between(minutes, 0, 60);
        };
        DateTimeService.prototype.isValidSeconds = function (seconds) {
            return this.between(seconds, 0, 60);
        };
        DateTimeService.prototype.between = function (x, min, max) {
            return x >= min && x <= max;
        };
        DateTimeService.prototype.differenceInSeconds = function (d1, d2) {
            return dateFns.differenceInSeconds(d1, d2);
        };
        return DateTimeService;
    }());
    DateTimeService.ɵfac = function DateTimeService_Factory(t) { return new (t || DateTimeService)(); };
    DateTimeService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: DateTimeService, factory: DateTimeService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DateTimeService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () { return []; }, null);
    })();

    function DetailsListItemComponent_mat_divider_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-divider");
        }
    }
    function DetailsListItemComponent_ng_container_5_mat_chip_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-chip", 7);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var chip_r6 = ctx.$implicit;
            i0__namespace.ɵɵproperty("color", chip_r6.color)("matTooltip", chip_r6.tooltip);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", chip_r6.value, " ");
        }
    }
    function DetailsListItemComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "mat-chip-list", 5);
            i0__namespace.ɵɵtemplate(2, DetailsListItemComponent_ng_container_5_mat_chip_2_Template, 2, 3, "mat-chip", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r1.chipsList);
        }
    }
    function DetailsListItemComponent_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 10);
            i0__namespace.ɵɵelementStart(1, "mat-icon", 11);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("inline", true)("ngClass", ctx_r7.getClasses());
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r7.icon, " ");
        }
    }
    function DetailsListItemComponent_div_6_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 10);
            i0__namespace.ɵɵelementStart(1, "mat-icon", 12);
            i0__namespace.ɵɵlistener("click", function DetailsListItemComponent_div_6_div_3_Template_mat_icon_click_1_listener() { i0__namespace.ɵɵrestoreView(_r10_1); var ctx_r9 = i0__namespace.ɵɵnextContext(2); return ctx_r9.copy(); });
            i0__namespace.ɵɵtext(2, " content_copy ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matRippleCentered", true)("inline", true);
        }
    }
    function DetailsListItemComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵtemplate(1, DetailsListItemComponent_div_6_div_1_Template, 3, 3, "div", 9);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵtemplate(3, DetailsListItemComponent_div_6_div_3_Template, 3, 2, "div", 9);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r2.value, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r2.copyValue);
        }
    }
    function DetailsListItemComponent_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 10);
            i0__namespace.ɵɵelementStart(1, "mat-icon", 11);
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("inline", true)("ngClass", ctx_r11.getClasses());
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r11.icon, " ");
        }
    }
    function DetailsListItemComponent_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 10);
            i0__namespace.ɵɵelementStart(1, "mat-icon", 12);
            i0__namespace.ɵɵlistener("click", function DetailsListItemComponent_div_7_div_3_Template_mat_icon_click_1_listener() { i0__namespace.ɵɵrestoreView(_r14_1); var ctx_r13 = i0__namespace.ɵɵnextContext(2); return ctx_r13.copy(); });
            i0__namespace.ɵɵtext(2, " content_copy ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matRippleCentered", true)("inline", true);
        }
    }
    function DetailsListItemComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵtemplate(1, DetailsListItemComponent_div_7_div_1_Template, 3, 3, "div", 9);
            i0__namespace.ɵɵprojection(2, 0, ["class", "vertical-align"]);
            i0__namespace.ɵɵtemplate(3, DetailsListItemComponent_div_7_div_3_Template, 3, 2, "div", 9);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r3.icon);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r3.copyValue);
        }
    }
    function DetailsListItemComponent_mat_divider_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-divider");
        }
    }
    var _c0$7 = ["*"];
    var DetailsListItemComponent = /** @class */ (function () {
        function DetailsListItemComponent(snack, clipboard) {
            this.snack = snack;
            this.clipboard = clipboard;
            this.topDivider = false;
            this.bottomDivider = true;
            this.keyMinWidth = '250px';
            this.selfClass = true;
        }
        DetailsListItemComponent.prototype.copy = function () {
            if (!this.copyValue) {
                this.snack.open('No value to copy to clipboard', exports.SnackType.Warning, 2000);
                return;
            }
            this.clipboard.copy(this.copyValue);
            this.snack.open('Content copied to clipboard', exports.SnackType.Info, 2000);
        };
        DetailsListItemComponent.prototype.getClasses = function () {
            var classes = ['key-icon'];
            if (!this.icon) {
                return classes;
            }
            classes.push(this.icon);
            return classes;
        };
        return DetailsListItemComponent;
    }());
    DetailsListItemComponent.ɵfac = function DetailsListItemComponent_Factory(t) { return new (t || DetailsListItemComponent)(i0__namespace.ɵɵdirectiveInject(SnackBarService), i0__namespace.ɵɵdirectiveInject(i2__namespace$5.Clipboard)); };
    DetailsListItemComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DetailsListItemComponent, selectors: [["lib-details-list-item"]], hostVars: 2, hostBindings: function DetailsListItemComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("lib-details-list-item", ctx.selfClass);
            }
        }, inputs: { key: "key", value: "value", icon: "icon", valueType: "valueType", chipsList: "chipsList", keyTooltip: "keyTooltip", valueTooltip: "valueTooltip", topDivider: "topDivider", bottomDivider: "bottomDivider", copyValue: "copyValue", keyMinWidth: "keyMinWidth" }, ngContentSelectors: _c0$7, decls: 9, vars: 10, consts: [[4, "ngIf"], [1, "list-entry-row"], [1, "list-entry-key", "vertical-align", 3, "matTooltip"], [1, "list-entry-value", 3, "matTooltip"], ["class", "flex", 4, "ngIf"], [1, "chip-list-wa"], ["matTooltipClass", "custom-tooltip", "class", "list-chip", 3, "color", "matTooltip", 4, "ngFor", "ngForOf"], ["matTooltipClass", "custom-tooltip", 1, "list-chip", 3, "color", "matTooltip"], [1, "flex"], ["class", "icon", 4, "ngIf"], [1, "icon"], [3, "inline", "ngClass"], ["matRipple", "", "matRippleRadius", "16", 1, "copy-button", "key-icon", 3, "matRippleCentered", "inline", "click"]], template: function DetailsListItemComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵtemplate(0, DetailsListItemComponent_mat_divider_0_Template, 1, 0, "mat-divider", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "div", 3);
                i0__namespace.ɵɵtemplate(5, DetailsListItemComponent_ng_container_5_Template, 3, 1, "ng-container", 0);
                i0__namespace.ɵɵtemplate(6, DetailsListItemComponent_div_6_Template, 4, 3, "div", 4);
                i0__namespace.ɵɵtemplate(7, DetailsListItemComponent_div_7_Template, 4, 2, "div", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(8, DetailsListItemComponent_mat_divider_8_Template, 1, 0, "mat-divider", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.topDivider);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵstyleProp("min-width", ctx.keyMinWidth);
                i0__namespace.ɵɵproperty("matTooltip", ctx.keyTooltip);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.key, " ");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matTooltip", ctx.valueTooltip);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.chipsList && ctx.chipsList.length > 0);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.value);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.value);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.bottomDivider);
            }
        }, directives: [i1__namespace$1.NgIf, i3__namespace$1.MatTooltip, i2__namespace$6.MatDivider, i6__namespace.MatChipList, i1__namespace$1.NgForOf, i6__namespace.MatChip, i2__namespace.MatIcon, i1__namespace$1.NgClass, i7__namespace.MatRipple], styles: ["[_nghost-%COMP%]{display:block}.list-entry-row[_ngcontent-%COMP%]{padding:.4rem 0;display:flex}.list-entry-key[_ngcontent-%COMP%]{font-weight:500}.list-entry-value[_ngcontent-%COMP%]{margin:auto 0;color:rgba(0,0,0,.66)}.key-icon[_ngcontent-%COMP%]{margin-right:8px}.chip-list-wa[_ngcontent-%COMP%]   .list-chip[_ngcontent-%COMP%]{min-height:24px;margin:0 4px}.warning[_ngcontent-%COMP%]{color:orange}.check_circle[_ngcontent-%COMP%]{color:green}.copy-button[_ngcontent-%COMP%]{cursor:pointer;margin-left:8px}.vertical-align[_ngcontent-%COMP%]{margin-bottom:auto}.icon[_ngcontent-%COMP%]{font-size:20px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DetailsListItemComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-details-list-item',
                        templateUrl: './details-list-item.component.html',
                        styleUrls: ['./details-list-item.component.scss'],
                    }]
            }], function () { return [{ type: SnackBarService }, { type: i2__namespace$5.Clipboard }]; }, { key: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], icon: [{
                    type: i0.Input
                }], valueType: [{
                    type: i0.Input
                }], chipsList: [{
                    type: i0.Input
                }], keyTooltip: [{
                    type: i0.Input
                }], valueTooltip: [{
                    type: i0.Input
                }], topDivider: [{
                    type: i0.Input
                }], bottomDivider: [{
                    type: i0.Input
                }], copyValue: [{
                    type: i0.Input
                }], keyMinWidth: [{
                    type: i0.Input
                }], selfClass: [{
                    type: i0.HostBinding,
                    args: ['class.lib-details-list-item']
                }] });
    })();

    var ToDatePipe = /** @class */ (function () {
        function ToDatePipe(dtService) {
            this.dtService = dtService;
        }
        ToDatePipe.prototype.transform = function (value, type) {
            if (!value) {
                return '';
            }
            try {
                var toDate = new Date(value);
                var options = void 0;
                if (type === 'date') {
                    options = defaultDateOptions;
                }
                else if (type === 'time') {
                    options = defaultTimeOptions;
                }
                return this.dtService.intlFormat(toDate, options);
            }
            catch (error) {
                console.error('ToDatePipe value:', value);
                console.error(error);
                return '';
            }
        };
        return ToDatePipe;
    }());
    ToDatePipe.ɵfac = function ToDatePipe_Factory(t) { return new (t || ToDatePipe)(i0__namespace.ɵɵdirectiveInject(DateTimeService, 16)); };
    ToDatePipe.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "libToDate", type: ToDatePipe, pure: true });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToDatePipe, [{
                type: i0.Pipe,
                args: [{ name: 'libToDate' }]
            }], function () { return [{ type: DateTimeService }]; }, null);
    })();

    function DateTimeComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "lib-details-list-item", 2);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵpipe(2, "libToDate");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "lib-details-list-item", 3);
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("bottomDivider", false);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", i0__namespace.ɵɵpipeBind1(2, 4, ctx_r1.date), " ");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("bottomDivider", false);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.date, " ");
        }
    }
    var DateTimeComponent = /** @class */ (function () {
        function DateTimeComponent(dtService, cdRef) {
            var _this = this;
            this.dtService = dtService;
            this.cdRef = cdRef;
            this.defaultDisplayValuePrv = '-';
            this.popoverPosition = 'below';
            this.timer = window.setInterval(function () {
                if (_this.date) {
                    _this.checkAndUpdate(_this.date);
                }
            }, 1000);
        }
        Object.defineProperty(DateTimeComponent.prototype, "date", {
            get: function () {
                return this.datePrv;
            },
            set: function (v) {
                this.datePrv = v;
                this.formattedDate = this.timeAgo(v);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DateTimeComponent.prototype, "defaultDisplayValue", {
            get: function () {
                return this.defaultDisplayValuePrv;
            },
            set: function (v) {
                this.defaultDisplayValuePrv = v;
                this.checkAndUpdate(this.date);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DateTimeComponent.prototype, "isPopoverDisabled", {
            get: function () {
                return !this.date;
            },
            enumerable: false,
            configurable: true
        });
        DateTimeComponent.prototype.ngOnDestroy = function () {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        };
        DateTimeComponent.prototype.timeAgo = function (d) {
            if (!d) {
                return this.defaultDisplayValue;
            }
            return this.dtService.distanceInWords(d);
        };
        DateTimeComponent.prototype.checkAndUpdate = function (date) {
            var d = this.timeAgo(date);
            if (this.formattedDate !== d && this.cdRef) {
                this.formattedDate = d;
                this.cdRef.detectChanges();
            }
        };
        return DateTimeComponent;
    }());
    DateTimeComponent.ɵfac = function DateTimeComponent_Factory(t) { return new (t || DateTimeComponent)(i0__namespace.ɵɵdirectiveInject(DateTimeService), i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef)); };
    DateTimeComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DateTimeComponent, selectors: [["lib-date-time"]], inputs: { date: "date", popoverPosition: "popoverPosition", defaultDisplayValue: ["default", "defaultDisplayValue"] }, decls: 4, vars: 6, consts: [[1, "truncate", 3, "libPopover", "libPopoverPosition", "libPopoverDisabled", "libPopoverHideDelay", "libPopoverShowDelay"], ["timeTpl", ""], ["key", "Local", "keyMinWidth", "50px", 3, "bottomDivider"], ["key", "UTC", "keyMinWidth", "50px", 3, "bottomDivider"]], template: function DateTimeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(2, DateTimeComponent_ng_template_2_Template, 5, 6, "ng-template", null, 1, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(3);
                i0__namespace.ɵɵproperty("libPopover", _r0)("libPopoverPosition", ctx.popoverPosition)("libPopoverDisabled", ctx.isPopoverDisabled)("libPopoverHideDelay", 100)("libPopoverShowDelay", 100);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.formattedDate, "\n");
            }
        }, directives: [PopoverDirective, DetailsListItemComponent], pipes: [ToDatePipe], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DateTimeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-date-time',
                        templateUrl: './date-time.component.html',
                        styleUrls: [],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () { return [{ type: DateTimeService }, { type: i0__namespace.ChangeDetectorRef }]; }, { date: [{
                    type: i0.Input
                }], popoverPosition: [{
                    type: i0.Input
                }], defaultDisplayValue: [{
                    type: i0.Input,
                    args: ['default']
                }] });
    })();

    function ComponentValueComponent_ng_template_0_Template(rf, ctx) { }
    var ComponentValueComponent = /** @class */ (function () {
        function ComponentValueComponent() {
        }
        Object.defineProperty(ComponentValueComponent.prototype, "element", {
            get: function () {
                return this.data;
            },
            set: function (data) {
                this.data = data;
                if (!this.componentRef) {
                    return;
                }
                this.componentRef.instance.element = data;
            },
            enumerable: false,
            configurable: true
        });
        ComponentValueComponent.prototype.ngOnInit = function () {
            this.portal = new i2$2.ComponentPortal(this.valueDescriptor.component);
        };
        ComponentValueComponent.prototype.onAttach = function (ref) {
            this.componentRef = ref;
            this.componentRef.instance.element = this.element;
        };
        return ComponentValueComponent;
    }());
    ComponentValueComponent.ɵfac = function ComponentValueComponent_Factory(t) { return new (t || ComponentValueComponent)(); };
    ComponentValueComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ComponentValueComponent, selectors: [["lib-component-value"]], inputs: { element: "element", valueDescriptor: "valueDescriptor" }, decls: 1, vars: 1, consts: [[3, "cdkPortalOutlet", "attached"]], template: function ComponentValueComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ComponentValueComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
                i0__namespace.ɵɵlistener("attached", function ComponentValueComponent_Template_ng_template_attached_0_listener($event) { return ctx.onAttach($event); });
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("cdkPortalOutlet", ctx.portal);
            }
        }, directives: [i2__namespace$3.CdkPortalOutlet], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ComponentValueComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-component-value',
                        templateUrl: './component-value.component.html',
                        styleUrls: ['./component-value.component.scss'],
                    }]
            }], null, { element: [{
                    type: i0.Input
                }], valueDescriptor: [{
                    type: i0.Input
                }] });
    })();

    function TableChipsListComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r0.valueDescriptor.noValueText, "\n");
        }
    }
    function TableChipsListComponent_mat_chip_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-chip", 3);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var chip_r2 = ctx.$implicit;
            i0__namespace.ɵɵproperty("color", chip_r2.color)("matTooltip", chip_r2.tooltip);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", chip_r2.value, " ");
        }
    }
    var TableChipsListComponent = /** @class */ (function () {
        function TableChipsListComponent() {
        }
        TableChipsListComponent.prototype.hasVisibleItems = function (row) {
            return this.getChips(row).length > this.valueDescriptor.maxVisibleChips;
        };
        TableChipsListComponent.prototype.getVisibleChips = function (row) {
            return this.getChips(row).slice(0, this.valueDescriptor.maxVisibleChips);
        };
        TableChipsListComponent.prototype.getChips = function (row) {
            return this.valueDescriptor.getChips(row);
        };
        TableChipsListComponent.prototype.trackByFn = function (index, chip) {
            return chip.value;
        };
        return TableChipsListComponent;
    }());
    TableChipsListComponent.ɵfac = function TableChipsListComponent_Factory(t) { return new (t || TableChipsListComponent)(); };
    TableChipsListComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TableChipsListComponent, selectors: [["lib-table-chips-list"]], inputs: { element: "element", valueDescriptor: "valueDescriptor" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [1, "chip-list-wa"], ["matTooltipClass", "custom-tooltip", "class", "list-chip", 3, "color", "matTooltip", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["matTooltipClass", "custom-tooltip", 1, "list-chip", 3, "color", "matTooltip"]], template: function TableChipsListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, TableChipsListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
                i0__namespace.ɵɵelementStart(1, "mat-chip-list", 1);
                i0__namespace.ɵɵtemplate(2, TableChipsListComponent_mat_chip_2_Template, 2, 3, "mat-chip", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.hasVisibleItems(ctx.element));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngForOf", ctx.getVisibleChips(ctx.element))("ngForTrackBy", ctx.trackByFn);
            }
        }, directives: [i1__namespace$1.NgIf, i6__namespace.MatChipList, i1__namespace$1.NgForOf, i6__namespace.MatChip, i3__namespace$1.MatTooltip], styles: [".chip-list-wa[_ngcontent-%COMP%]   .list-chip[_ngcontent-%COMP%]{min-height:24px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TableChipsListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-table-chips-list',
                        templateUrl: './chips-list.component.html',
                        styleUrls: ['./chips-list.component.scss'],
                    }]
            }], null, { element: [{
                    type: i0.Input
                }], valueDescriptor: [{
                    type: i0.Input
                }] });
    })();

    var ActionButtonComponent = /** @class */ (function () {
        function ActionButtonComponent() {
            this.emitter = new i0.EventEmitter();
        }
        ActionButtonComponent.prototype.ngOnInit = function () { };
        // Event emitting functions
        ActionButtonComponent.prototype.emitClickedEvent = function () {
            var ev = new ActionEvent(this.action.name, this.data);
            this.emitter.emit(ev);
        };
        // Helpers for checking the Action's State
        ActionButtonComponent.prototype.isPhaseReady = function () {
            var phaseField = this.action.field;
            var status = this.data[phaseField];
            return status === exports.STATUS_TYPE.READY;
        };
        return ActionButtonComponent;
    }());
    ActionButtonComponent.ɵfac = function ActionButtonComponent_Factory(t) { return new (t || ActionButtonComponent)(); };
    ActionButtonComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ActionButtonComponent, selectors: [["lib-action-button"]], inputs: { action: "action", data: "data" }, outputs: { emitter: "emitter" }, decls: 2, vars: 4, consts: [["mat-button", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "color", "disabled", "click"]], template: function ActionButtonComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function ActionButtonComponent_Template_button_click_0_listener() { return ctx.emitClickedEvent(); });
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵpropertyInterpolate("matTooltip", ctx.action.tooltip);
                i0__namespace.ɵɵproperty("color", ctx.action.color)("disabled", !ctx.isPhaseReady());
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.action.text, "\n");
            }
        }, directives: [i2__namespace$1.MatButton, i3__namespace$1.MatTooltip], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ActionButtonComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-action-button',
                        templateUrl: './action-button.component.html',
                        styleUrls: ['./action-button.component.scss'],
                    }]
            }], function () { return []; }, { action: [{
                    type: i0.Input
                }], data: [{
                    type: i0.Input
                }], emitter: [{
                    type: i0.Output
                }] });
    })();

    function ActionComponent_button_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 3);
            i0__namespace.ɵɵlistener("click", function ActionComponent_button_0_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r5_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.emitClickedEvent(); });
            i0__namespace.ɵɵelement(1, "lib-icon", 4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("matTooltip", ctx_r0.action.tooltip);
            i0__namespace.ɵɵproperty("color", ctx_r0.action.color);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("icon", ctx_r0.action.iconReady);
        }
    }
    function ActionComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 3);
            i0__namespace.ɵɵlistener("click", function ActionComponent_button_1_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.emitClickedEvent(); });
            i0__namespace.ɵɵelement(1, "lib-icon", 4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵpropertyInterpolate("matTooltip", ctx_r1.action.tooltip);
            i0__namespace.ɵɵproperty("color", ctx_r1.action.color);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("icon", ctx_r1.action.iconInit);
        }
    }
    function ActionComponent_mat_spinner_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-spinner", 5);
        }
    }
    function ActionComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 6);
            i0__namespace.ɵɵelement(1, "lib-icon", 4);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("icon", ctx_r3.action.iconInit);
        }
    }
    var ActionComponent = /** @class */ (function () {
        function ActionComponent() {
            // READY: Button will be enabled
            // WAITING: Button will be a Spinner
            // TERMINATING/UNAVAILABLE: Button will be disabled
            this.innerData = {};
            this.clicked = false;
            this.cancelWaitingPhase$ = new rxjs.Subject();
            this.emitter = new i0.EventEmitter();
        }
        ActionComponent.prototype.ngOnInit = function () { };
        // Event emitting functions
        ActionComponent.prototype.emitClickedEvent = function () {
            var ev = new ActionEvent(this.action.name, this.data);
            this.emitter.emit(ev);
        };
        Object.defineProperty(ActionComponent.prototype, "tooltipInit", {
            // Helpers for handling the Tooltips
            get: function () {
                if (this.action.tooltip && this.action.tooltip.length > 0) {
                    return this.action.tooltip;
                }
                return this.action.tooltipInit;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ActionComponent.prototype, "tooltipReady", {
            get: function () {
                if (this.action.tooltip && this.action.tooltip.length > 0) {
                    return this.action.tooltip;
                }
                return this.action.tooltipReady;
            },
            enumerable: false,
            configurable: true
        });
        // Icon handling functions
        ActionComponent.prototype.getIcon = function (icon) {
            if (icon.split(':').length !== 2) {
                return '';
            }
            if (this.getCategory(icon) === 'fa') {
                var inpt = icon.split(':');
                return inpt.slice(1, inpt.length);
            }
            return icon.split(':')[1];
        };
        ActionComponent.prototype.getCategory = function (icon) {
            if (icon.split(':').length !== 2) {
                return '';
            }
            return icon.split(':')[0];
        };
        // Helpers for checking the Action's State
        ActionComponent.prototype.isPhaseReady = function () {
            return this.status === exports.STATUS_TYPE.READY;
        };
        ActionComponent.prototype.isPhaseInit = function () {
            return this.status === exports.STATUS_TYPE.UNINITIALIZED;
        };
        ActionComponent.prototype.isPhaseWaiting = function () {
            return this.status === exports.STATUS_TYPE.WAITING;
        };
        ActionComponent.prototype.isPhaseDisabled = function () {
            return (this.status === exports.STATUS_TYPE.TERMINATING ||
                this.status === exports.STATUS_TYPE.UNAVAILABLE);
        };
        Object.defineProperty(ActionComponent.prototype, "status", {
            get: function () {
                var phaseField = this.action.field;
                if (!phaseField) {
                    return exports.STATUS_TYPE.READY;
                }
                var status = lodash.get(this.data, phaseField);
                return status;
            },
            enumerable: false,
            configurable: true
        });
        return ActionComponent;
    }());
    ActionComponent.ɵfac = function ActionComponent_Factory(t) { return new (t || ActionComponent)(); };
    ActionComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ActionComponent, selectors: [["lib-action"]], inputs: { action: "action", data: "data" }, outputs: { emitter: "emitter" }, decls: 4, vars: 4, consts: [["mat-icon-button", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "color", "click", 4, "ngIf"], ["diameter", "20", 4, "ngIf"], ["mat-icon-button", "", "disabled", "", 4, "ngIf"], ["mat-icon-button", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "color", "click"], [3, "icon"], ["diameter", "20"], ["mat-icon-button", "", "disabled", ""]], template: function ActionComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, ActionComponent_button_0_Template, 2, 3, "button", 0);
                i0__namespace.ɵɵtemplate(1, ActionComponent_button_1_Template, 2, 3, "button", 0);
                i0__namespace.ɵɵtemplate(2, ActionComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 1);
                i0__namespace.ɵɵtemplate(3, ActionComponent_button_3_Template, 2, 1, "button", 2);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.isPhaseReady());
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isPhaseInit());
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isPhaseWaiting());
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isPhaseDisabled());
            }
        }, directives: [i1__namespace$1.NgIf, i2__namespace$1.MatButton, i3__namespace$1.MatTooltip, IconComponent, i2__namespace$4.MatSpinner], styles: ["mat-spinner[_ngcontent-%COMP%]{margin:auto}.folder-search-button[_ngcontent-%COMP%]{position:relative}.material-icons.search[_ngcontent-%COMP%]{position:absolute;color:#fff;left:13px;top:11px;font-size:14px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ActionComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-action',
                        templateUrl: './action.component.html',
                        styleUrls: ['./action.component.scss'],
                    }]
            }], function () { return []; }, { action: [{
                    type: i0.Input
                }], data: [{
                    type: i0.Input
                }], emitter: [{
                    type: i0.Output
                }] });
    })();

    var _c0$6 = function (a0, a1, a2) { return { grey: a0, "right-align": a1, "row-right-padding": a2 }; };
    function TableComponent_ng_container_1_th_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "th", 7);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r3 = i0__namespace.ɵɵnextContext().$implicit;
            var ctx_r4 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngClass", i0__namespace.ɵɵpureFunction3(2, _c0$6, ctx_r4.tableTheme === ctx_r4.TABLE_THEME.FLAT, col_r3.textAlignment === "right", col_r3.textAlignment === "right"));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", col_r3.matHeaderCellDef, " ");
        }
    }
    var _c1$1 = function (a0, a1) { return { "min-width": a0, width: a1 }; };
    var _c2 = function (a0, a1) { return { "right-align": a0, "row-right-padding": a1 }; };
    function TableComponent_ng_container_1_ng_container_2_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "td", 9);
            i0__namespace.ɵɵelementStart(1, "div", 10);
            i0__namespace.ɵɵlistener("click", function TableComponent_ng_container_1_ng_container_2_td_1_Template_div_click_1_listener() { var restoredCtx = i0__namespace.ɵɵrestoreView(_r18_1); var element_r15 = restoredCtx.$implicit; var col_r3 = i0__namespace.ɵɵnextContext(2).$implicit; var ctx_r16 = i0__namespace.ɵɵnextContext(); return ctx_r16.linkClicked(col_r3.matColumnDef, element_r15); });
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r15 = ctx.$implicit;
            var col_r3 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction2(6, _c1$1, col_r3.minWidth, col_r3.width))("ngClass", i0__namespace.ɵɵpureFunction2(9, _c2, col_r3.textAlignment === "right", col_r3.textAlignment === "right"));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matTooltip", col_r3.value.getTooltip(element_r15))("libPopover", col_r3.value.getPopover(element_r15))("ngClass", col_r3.value.getClasses());
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", col_r3.value.getValue(element_r15), " ");
        }
    }
    function TableComponent_ng_container_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_2_td_1_Template, 3, 12, "td", 8);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function TableComponent_ng_container_1_ng_container_3_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 12);
            i0__namespace.ɵɵelement(1, "lib-status", 13);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r21 = ctx.$implicit;
            var col_r3 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction2(3, _c1$1, col_r3.minWidth, col_r3.width));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("row", element_r21)("config", col_r3.value);
        }
    }
    function TableComponent_ng_container_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_3_td_1_Template, 2, 6, "td", 11);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function TableComponent_ng_container_1_ng_container_4_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 12);
            i0__namespace.ɵɵelement(1, "lib-date-time", 14);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r24 = ctx.$implicit;
            var col_r3 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction2(2, _c1$1, col_r3.minWidth, col_r3.width));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("date", col_r3.value.getValue(element_r24));
        }
    }
    function TableComponent_ng_container_1_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_4_td_1_Template, 2, 5, "td", 11);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    var _c3$1 = function (a0) { return { "right-align": a0 }; };
    function TableComponent_ng_container_1_ng_container_5_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 9);
            i0__namespace.ɵɵelement(1, "lib-component-value", 15);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r27 = ctx.$implicit;
            var col_r3 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction2(4, _c1$1, col_r3.minWidth, col_r3.width))("ngClass", i0__namespace.ɵɵpureFunction1(7, _c3$1, col_r3.rightAlign));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("element", element_r27)("valueDescriptor", col_r3.value);
        }
    }
    function TableComponent_ng_container_1_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_5_td_1_Template, 2, 9, "td", 8);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function TableComponent_ng_container_1_ng_container_6_td_1_ng_template_1_Template(rf, ctx) { }
    var _c4 = function (a0) { return { $implicit: a0 }; };
    function TableComponent_ng_container_1_ng_container_6_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 9);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_6_td_1_ng_template_1_Template, 0, 0, "ng-template", 16);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r30 = ctx.$implicit;
            var col_r3 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction2(4, _c1$1, col_r3.minWidth, col_r3.width))("ngClass", i0__namespace.ɵɵpureFunction2(7, _c2, col_r3.textAlignment === "right", col_r3.textAlignment === "right"));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngTemplateOutlet", col_r3.value.ref)("ngTemplateOutletContext", i0__namespace.ɵɵpureFunction1(10, _c4, element_r30));
        }
    }
    function TableComponent_ng_container_1_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_6_td_1_Template, 2, 12, "td", 8);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function TableComponent_ng_container_1_ng_container_7_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 12);
            i0__namespace.ɵɵelement(1, "lib-table-chips-list", 15);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r34 = ctx.$implicit;
            var col_r3 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction2(3, _c1$1, col_r3.minWidth, col_r3.width));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("element", element_r34)("valueDescriptor", col_r3.value);
        }
    }
    function TableComponent_ng_container_1_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_7_td_1_Template, 2, 6, "td", 11);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function TableComponent_ng_container_1_ng_container_8_td_1_button_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 20);
            i0__namespace.ɵɵelementStart(1, "mat-icon");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "span");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r40 = ctx.$implicit;
            var col_r3 = i0__namespace.ɵɵnextContext(3).$implicit;
            i0__namespace.ɵɵproperty("matTooltip", item_r40)("matTooltipDisabled", !col_r3.value.showTooltip);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(col_r3.value.itemsIcon);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(item_r40);
        }
    }
    function TableComponent_ng_container_1_ng_container_8_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 12);
            i0__namespace.ɵɵelementStart(1, "button", 17);
            i0__namespace.ɵɵelementStart(2, "mat-icon");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-menu", null, 18);
            i0__namespace.ɵɵtemplate(6, TableComponent_ng_container_1_ng_container_8_td_1_button_6_Template, 5, 4, "button", 19);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r37 = ctx.$implicit;
            var _r38 = i0__namespace.ɵɵreference(5);
            var col_r3 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction2(4, _c1$1, col_r3.minWidth, col_r3.width));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("matMenuTriggerFor", _r38);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(col_r3.value.menuIcon);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngForOf", col_r3.value.getItems(element_r37));
        }
    }
    function TableComponent_ng_container_1_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_8_td_1_Template, 7, 7, "td", 11);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r50_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "lib-action-button", 27);
            i0__namespace.ɵɵlistener("emitter", function TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_button_1_Template_lib_action_button_emitter_0_listener($event) { i0__namespace.ɵɵrestoreView(_r50_1); var ctx_r49 = i0__namespace.ɵɵnextContext(5); return ctx_r49.actionTriggered($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r46 = i0__namespace.ɵɵnextContext().$implicit;
            var element_r44 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵproperty("action", action_r46)("data", element_r44);
        }
    }
    function TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r54_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "lib-action", 28);
            i0__namespace.ɵɵlistener("emitter", function TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_2_Template_lib_action_emitter_0_listener($event) { i0__namespace.ɵɵrestoreView(_r54_1); var ctx_r53 = i0__namespace.ɵɵnextContext(5); return ctx_r53.actionTriggered($event); });
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var action_r46 = i0__namespace.ɵɵnextContext().$implicit;
            var element_r44 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵproperty("action", action_r46)("data", element_r44);
        }
    }
    function TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_button_1_Template, 1, 2, "lib-action-button", 25);
            i0__namespace.ɵɵtemplate(2, TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_2_Template, 1, 2, "lib-action", 26);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var action_r46 = ctx.$implicit;
            var ctx_r45 = i0__namespace.ɵɵnextContext(4);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r45.isActionButtonValue(action_r46));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r45.isActionIconValue(action_r46));
        }
    }
    function TableComponent_ng_container_1_ng_container_9_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "td", 22);
            i0__namespace.ɵɵelementStart(1, "div", 23);
            i0__namespace.ɵɵtemplate(2, TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_Template, 3, 2, "ng-container", 24);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var col_r3 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngForOf", col_r3.value.actions);
        }
    }
    function TableComponent_ng_container_1_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_9_td_1_Template, 3, 1, "td", 21);
            i0__namespace.ɵɵelementContainerEnd();
        }
    }
    function TableComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0, 4);
            i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_th_1_Template, 2, 6, "th", 5);
            i0__namespace.ɵɵtemplate(2, TableComponent_ng_container_1_ng_container_2_Template, 2, 0, "ng-container", 6);
            i0__namespace.ɵɵtemplate(3, TableComponent_ng_container_1_ng_container_3_Template, 2, 0, "ng-container", 6);
            i0__namespace.ɵɵtemplate(4, TableComponent_ng_container_1_ng_container_4_Template, 2, 0, "ng-container", 6);
            i0__namespace.ɵɵtemplate(5, TableComponent_ng_container_1_ng_container_5_Template, 2, 0, "ng-container", 6);
            i0__namespace.ɵɵtemplate(6, TableComponent_ng_container_1_ng_container_6_Template, 2, 0, "ng-container", 6);
            i0__namespace.ɵɵtemplate(7, TableComponent_ng_container_1_ng_container_7_Template, 2, 0, "ng-container", 6);
            i0__namespace.ɵɵtemplate(8, TableComponent_ng_container_1_ng_container_8_Template, 2, 0, "ng-container", 6);
            i0__namespace.ɵɵtemplate(9, TableComponent_ng_container_1_ng_container_9_Template, 2, 0, "ng-container", 6);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var col_r3 = ctx.$implicit;
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("matColumnDef", col_r3.matColumnDef);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.isPropertyValue(col_r3.value));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.isStatusValue(col_r3.value));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.isDateTimeValue(col_r3.value));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.isComponentValue(col_r3.value));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.isTemplateValue(col_r3.value));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.isChipsListValue(col_r3.value));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.isMenuValue(col_r3.value));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.isActionListValue(col_r3.value));
        }
    }
    function TableComponent_tr_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 29);
        }
    }
    function TableComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "tr", 30);
        }
    }
    var TableComponent = /** @class */ (function () {
        function TableComponent() {
            this.innerData = [];
            this.dataSource = new i1$6.MatTableDataSource();
            this.displayedColumns = [];
            this.TABLE_THEME = exports.TABLE_THEME;
        }
        Object.defineProperty(TableComponent.prototype, "config", {
            get: function () {
                return this.innerConfig;
            },
            set: function (config) {
                var e_1, _a;
                this.innerConfig = config;
                this.displayedColumns = [];
                try {
                    for (var _b = __values(config.columns), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var col = _c.value;
                        this.displayedColumns.push(col.matColumnDef);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TableComponent.prototype, "data", {
            get: function () {
                return this.innerData;
            },
            set: function (newData) {
                this.dataSource.data = newData;
            },
            enumerable: false,
            configurable: true
        });
        TableComponent.prototype.isActionListValue = function (obj) {
            return obj instanceof ActionListValue;
        };
        TableComponent.prototype.isActionButtonValue = function (obj) {
            return obj instanceof ActionButtonValue;
        };
        TableComponent.prototype.isChipsListValue = function (obj) {
            return obj instanceof ChipsListValue;
        };
        TableComponent.prototype.isComponentValue = function (obj) {
            return obj instanceof ComponentValue;
        };
        TableComponent.prototype.isTemplateValue = function (obj) {
            return obj instanceof TemplateValue;
        };
        TableComponent.prototype.isActionIconValue = function (obj) {
            return obj instanceof ActionIconValue;
        };
        TableComponent.prototype.isMenuValue = function (obj) {
            return obj instanceof MenuValue;
        };
        TableComponent.prototype.isStatusValue = function (obj) {
            return obj instanceof StatusValue;
        };
        TableComponent.prototype.isPropertyValue = function (obj) {
            return obj instanceof PropertyValue;
        };
        TableComponent.prototype.isDateTimeValue = function (obj) {
            return obj instanceof DateTimeValue;
        };
        TableComponent.prototype.actionTriggered = function (e) {
            // Forward the emitted ActionEvent
            this.emitter.emit(e);
        };
        TableComponent.prototype.newButtonTriggered = function () {
            var ev = new ActionEvent('newResourceButton', {});
            this.emitter.emit(ev);
        };
        TableComponent.prototype.linkClicked = function (col, data) {
            var ev = new ActionEvent(col + ":link", data);
            this.emitter.emit(ev);
        };
        Object.defineProperty(TableComponent.prototype, "tableTheme", {
            get: function () {
                if (!this.config || !this.config.theme) {
                    return exports.TABLE_THEME.CARD;
                }
                return this.config.theme;
            },
            enumerable: false,
            configurable: true
        });
        return TableComponent;
    }());
    TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
    TableComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TableComponent, selectors: [["lib-table"]], inputs: { config: "config", trackByFn: "trackByFn", data: "data", emitter: "emitter" }, decls: 4, vars: 5, consts: [["mat-table", "", 1, "wide", 3, "dataSource", "trackBy"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], [4, "ngIf"], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 3, "ngStyle", "ngClass", 4, "matCellDef"], ["mat-cell", "", 3, "ngStyle", "ngClass"], ["matTooltipClass", "custom-tooltip", 3, "matTooltip", "libPopover", "ngClass", "click"], ["mat-cell", "", 3, "ngStyle", 4, "matCellDef"], ["mat-cell", "", 3, "ngStyle"], [3, "row", "config"], [3, "date"], [3, "element", "valueDescriptor"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "matTooltipDisabled", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "matTooltipDisabled"], ["mat-cell", "", 4, "matCellDef"], ["mat-cell", ""], [1, "action-list"], [4, "ngFor", "ngForOf"], ["class", "action-button", 3, "action", "data", "emitter", 4, "ngIf"], [3, "action", "data", "emitter", 4, "ngIf"], [1, "action-button", 3, "action", "data", "emitter"], [3, "action", "data", "emitter"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "table", 0);
                i0__namespace.ɵɵtemplate(1, TableComponent_ng_container_1_Template, 10, 9, "ng-container", 1);
                i0__namespace.ɵɵtemplate(2, TableComponent_tr_2_Template, 1, 0, "tr", 2);
                i0__namespace.ɵɵtemplate(3, TableComponent_tr_3_Template, 1, 0, "tr", 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("dataSource", ctx.dataSource)("trackBy", ctx.trackByFn);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.config == null ? null : ctx.config.columns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1__namespace$6.MatTable, i1__namespace$1.NgForOf, i1__namespace$6.MatHeaderRowDef, i1__namespace$6.MatRowDef, i1__namespace$6.MatColumnDef, i1__namespace$6.MatHeaderCellDef, i1__namespace$1.NgIf, i1__namespace$6.MatHeaderCell, i1__namespace$1.NgClass, i1__namespace$6.MatCellDef, i1__namespace$6.MatCell, i1__namespace$1.NgStyle, i3__namespace$1.MatTooltip, PopoverDirective, StatusComponent, DateTimeComponent, ComponentValueComponent, i1__namespace$1.NgTemplateOutlet, TableChipsListComponent, i2__namespace$1.MatButton, i10__namespace.MatMenuTrigger, i2__namespace.MatIcon, i10__namespace.MatMenu, i10__namespace.MatMenuItem, ActionButtonComponent, ActionComponent, i1__namespace$6.MatHeaderRow, i1__namespace$6.MatRow], styles: [".grey[_ngcontent-%COMP%]{background-color:#f5f5f5}.row-right-padding[_ngcontent-%COMP%]{padding-right:28px}tr[_ngcontent-%COMP%]   th.right-align[_ngcontent-%COMP%]{text-align:right}.action-list[_ngcontent-%COMP%]{display:flex}.action-button[_ngcontent-%COMP%]{margin:auto}.mat-cell[_ngcontent-%COMP%]{min-height:auto;padding-top:2px;padding-bottom:2px;padding-right:28px}.mat-row[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.link[_ngcontent-%COMP%]:hover, .mat-row[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%]{text-decoration:underline}.link[_ngcontent-%COMP%]:hover{color:blue;cursor:pointer}.text-small[_ngcontent-%COMP%]{max-width:150px}.text-medium[_ngcontent-%COMP%]{max-width:300px}.text-large[_ngcontent-%COMP%]{max-width:450px}lib-action[_ngcontent-%COMP%]{width:40px;display:inline-flex;justify-content:center;height:40px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TableComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-table',
                        templateUrl: './table.component.html',
                        styleUrls: ['./table.component.scss'],
                    }]
            }], null, { config: [{
                    type: i0.Input
                }], trackByFn: [{
                    type: i0.Input
                }], data: [{
                    type: i0.Input
                }], emitter: [{
                    type: i0.Input
                }] });
    })();

    function ResourceTableComponent_mat_card_1_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 7);
            i0__namespace.ɵɵlistener("click", function ResourceTableComponent_mat_card_1_button_4_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(2); return ctx_r3.newButtonTriggered(); });
            i0__namespace.ɵɵelementStart(1, "mat-icon", 8);
            i0__namespace.ɵɵtext(2, "add");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r2.config == null ? null : ctx_r2.config.newButtonText, " ");
        }
    }
    function ResourceTableComponent_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-card", 3);
            i0__namespace.ɵɵelementStart(1, "div", 4);
            i0__namespace.ɵɵelementStart(2, "div");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(4, ResourceTableComponent_mat_card_1_button_4_Template, 4, 1, "button", 5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "mat-divider");
            i0__namespace.ɵɵelementStart(6, "mat-card-content");
            i0__namespace.ɵɵelement(7, "lib-table", 6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("width", ctx_r0.totalWidth)("min-width", ctx_r0.minTableWidth);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.config == null ? null : ctx_r0.config.title);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.config == null ? null : ctx_r0.config.newButtonText);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("config", ctx_r0.config)("data", ctx_r0.data)("trackByFn", ctx_r0.trackByFn)("emitter", ctx_r0.actionsEmitter);
        }
    }
    function ResourceTableComponent_div_2_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 7);
            i0__namespace.ɵɵlistener("click", function ResourceTableComponent_div_2_button_4_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r7_1); var ctx_r6 = i0__namespace.ɵɵnextContext(2); return ctx_r6.newButtonTriggered(); });
            i0__namespace.ɵɵelementStart(1, "mat-icon", 8);
            i0__namespace.ɵɵtext(2, "add");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r5.config == null ? null : ctx_r5.config.newButtonText, " ");
        }
    }
    function ResourceTableComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "div", 9);
            i0__namespace.ɵɵelementStart(2, "p");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(4, ResourceTableComponent_div_2_button_4_Template, 4, 1, "button", 5);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "mat-divider");
            i0__namespace.ɵɵelement(6, "lib-table", 6);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵstyleProp("width", ctx_r1.totalWidth)("min-width", ctx_r1.minTableWidth);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r1.config == null ? null : ctx_r1.config.title);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r1.config == null ? null : ctx_r1.config.newButtonText);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("config", ctx_r1.config)("data", ctx_r1.data)("trackByFn", ctx_r1.trackByFn)("emitter", ctx_r1.actionsEmitter);
        }
    }
    var ResourceTableComponent = /** @class */ (function () {
        function ResourceTableComponent() {
            // Whenever a button in a row is pressed the component will emit an event
            // with information regarding the button that was pressed as well as the
            // row's object.
            this.actionsEmitter = new i0.EventEmitter();
            this.TABLE_THEME = exports.TABLE_THEME;
        }
        ResourceTableComponent.prototype.ngOnInit = function () { };
        ResourceTableComponent.prototype.actionTriggered = function (e) {
            // Forward the emitted ActionEvent
            this.actionsEmitter.emit(e);
        };
        ResourceTableComponent.prototype.newButtonTriggered = function () {
            var ev = new ActionEvent('newResourceButton', {});
            this.actionsEmitter.emit(ev);
        };
        ResourceTableComponent.prototype.linkClicked = function (field, data) {
            var ev = new ActionEvent(field + ":link", data);
            this.actionsEmitter.emit(ev);
        };
        Object.defineProperty(ResourceTableComponent.prototype, "minTableWidth", {
            get: function () {
                // Review: This will break if the config is an other falsy value
                // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
                if (typeof this.config === 'undefined') {
                    return '600px';
                }
                return this.config.columns.length * 100 + "px";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ResourceTableComponent.prototype, "totalWidth", {
            get: function () {
                if (!this.config || !this.config.width) {
                    return 'fit-content';
                }
                return this.config.width;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ResourceTableComponent.prototype, "tableTheme", {
            get: function () {
                if (!this.config || !this.config.theme) {
                    return exports.TABLE_THEME.CARD;
                }
                return this.config.theme;
            },
            enumerable: false,
            configurable: true
        });
        return ResourceTableComponent;
    }());
    ResourceTableComponent.ɵfac = function ResourceTableComponent_Factory(t) { return new (t || ResourceTableComponent)(); };
    ResourceTableComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ResourceTableComponent, selectors: [["lib-resource-table"]], inputs: { config: "config", data: "data", trackByFn: "trackByFn" }, outputs: { actionsEmitter: "actionsEmitter" }, decls: 3, vars: 4, consts: [[1, "center-flex"], ["class", "mat-elevation-z4", 3, "width", "min-width", 4, "ngIf"], [3, "width", "min-width", 4, "ngIf"], [1, "mat-elevation-z4"], [1, "header", "card-title-padding"], ["mat-button", "", "id", "newResource", "color", "primary", "class", "right", 3, "click", 4, "ngIf"], [3, "config", "data", "trackByFn", "emitter"], ["mat-button", "", "id", "newResource", "color", "primary", 1, "right", 3, "click"], [1, "new-resource-button"], [1, "header"]], template: function ResourceTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, ResourceTableComponent_mat_card_1_Template, 8, 10, "mat-card", 1);
                i0__namespace.ɵɵtemplate(2, ResourceTableComponent_div_2_Template, 7, 10, "div", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("space-top", ctx.tableTheme == ctx.TABLE_THEME.CARD);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.tableTheme == ctx.TABLE_THEME.CARD);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.tableTheme == ctx.TABLE_THEME.FLAT);
            }
        }, directives: [i1__namespace$1.NgIf, i2__namespace$2.MatCard, i2__namespace$6.MatDivider, i2__namespace$2.MatCardContent, TableComponent, i2__namespace$1.MatButton, i2__namespace.MatIcon], styles: [".right[_ngcontent-%COMP%]{margin-left:auto}.space-top[_ngcontent-%COMP%]{padding-top:1.5rem}mat-card[_ngcontent-%COMP%]{padding:0;margin:0 0 50px}mat-toolbar[_ngcontent-%COMP%]{background:#fff}.header[_ngcontent-%COMP%]{display:flex;align-items:center;height:64px;font-weight:400;font-size:20px}.card-title-padding[_ngcontent-%COMP%]{padding:0 16px}.mat-icon[_ngcontent-%COMP%]{line-height:.85}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ResourceTableComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-resource-table',
                        templateUrl: './resource-table.component.html',
                        styleUrls: ['./resource-table.component.scss'],
                    }]
            }], function () { return []; }, { config: [{
                    type: i0.Input
                }], data: [{
                    type: i0.Input
                }], trackByFn: [{
                    type: i0.Input
                }], actionsEmitter: [{
                    type: i0.Output
                }] });
    })();

    var IconModule = /** @class */ (function () {
        function IconModule(library) {
            library.addIcons(freeSolidSvgIcons.faCogs, freeSolidSvgIcons.faHdd, freeSolidSvgIcons.faBook, freeSolidSvgIcons.faMicrochip, freeSolidSvgIcons.faLaptopCode, freeBrandsSvgIcons.faDocker, freeSolidSvgIcons.faLink, freeSolidSvgIcons.faSlidersH, freeSolidSvgIcons.faBullseye, freeSolidSvgIcons.faStopCircle);
        }
        return IconModule;
    }());
    IconModule.ɵfac = function IconModule_Factory(t) { return new (t || IconModule)(i0__namespace.ɵɵinject(i1__namespace$5.FaIconLibrary)); };
    IconModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: IconModule });
    IconModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i2.MatIconModule, i1$5.FontAwesomeModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IconModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [IconComponent],
                        imports: [i1$1.CommonModule, i2.MatIconModule, i1$5.FontAwesomeModule],
                        exports: [IconComponent],
                    }]
            }], function () { return [{ type: i1__namespace$5.FaIconLibrary }]; }, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(IconModule, { declarations: [IconComponent], imports: [i1$1.CommonModule, i2.MatIconModule, i1$5.FontAwesomeModule], exports: [IconComponent] }); })();

    /* This code was developed by @tasos-ale */
    var PopoverModule = /** @class */ (function () {
        function PopoverModule() {
        }
        return PopoverModule;
    }());
    PopoverModule.ɵfac = function PopoverModule_Factory(t) { return new (t || PopoverModule)(); };
    PopoverModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PopoverModule });
    PopoverModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i2$2.PortalModule, i1$4.OverlayModule, i2$3.MatCardModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PopoverModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2$2.PortalModule, i1$4.OverlayModule, i2$3.MatCardModule],
                        exports: [PopoverDirective],
                        declarations: [PopoverDirective, PopoverComponent],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PopoverModule, { declarations: [PopoverDirective, PopoverComponent], imports: [i2$2.PortalModule, i1$4.OverlayModule, i2$3.MatCardModule], exports: [PopoverDirective] }); })();

    function DetailsListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 4);
            i0__namespace.ɵɵelementStart(1, "p");
            i0__namespace.ɵɵtext(2);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate(ctx_r0.title);
        }
    }
    function DetailsListComponent_mat_divider_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-divider");
        }
    }
    function DetailsListComponent_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelement(1, "lib-details-list-item", 6);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var entry_r3 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("key", entry_r3.key)("value", entry_r3.value)("keyTooltip", entry_r3.keyTooltip)("valueTooltip", entry_r3.valueTooltip)("icon", entry_r3.icon)("valueType", entry_r3.valueType)("chipsList", entry_r3.chipsList);
        }
    }
    function DetailsListComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 5);
            i0__namespace.ɵɵtemplate(1, DetailsListComponent_div_3_ng_container_1_Template, 2, 7, "ng-container", 2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var entry_r3 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", entry_r3);
        }
    }
    var DetailsListComponent = /** @class */ (function () {
        function DetailsListComponent() {
            this.entries = [];
            this.topDivider = true;
        }
        return DetailsListComponent;
    }());
    DetailsListComponent.ɵfac = function DetailsListComponent_Factory(t) { return new (t || DetailsListComponent)(); };
    DetailsListComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: DetailsListComponent, selectors: [["lib-details-list"]], inputs: { entries: "entries", topDivider: "topDivider", title: "title" }, decls: 4, vars: 3, consts: [[1, "list"], ["class", "list-header", 4, "ngIf"], [4, "ngIf"], ["class", "list-entry", 4, "ngFor", "ngForOf"], [1, "list-header"], [1, "list-entry"], [3, "key", "value", "keyTooltip", "valueTooltip", "icon", "valueType", "chipsList"]], template: function DetailsListComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtemplate(1, DetailsListComponent_div_1_Template, 3, 1, "div", 1);
                i0__namespace.ɵɵtemplate(2, DetailsListComponent_mat_divider_2_Template, 1, 0, "mat-divider", 2);
                i0__namespace.ɵɵtemplate(3, DetailsListComponent_div_3_Template, 2, 1, "div", 3);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.title);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.topDivider);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngForOf", ctx.entries);
            }
        }, directives: [i1__namespace$1.NgIf, i1__namespace$1.NgForOf, i2__namespace$6.MatDivider, DetailsListItemComponent], styles: [".list[_ngcontent-%COMP%]{display:inline-block;width:100%}.list-header[_ngcontent-%COMP%]{display:flex;align-items:center;height:64px;font-weight:400;font-size:20px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DetailsListComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-details-list',
                        templateUrl: './details-list.component.html',
                        styleUrls: ['./details-list.component.scss'],
                    }]
            }], null, { entries: [{
                    type: i0.Input
                }], topDivider: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }] });
    })();

    var DetailsListModule = /** @class */ (function () {
        function DetailsListModule() {
        }
        return DetailsListModule;
    }());
    DetailsListModule.ɵfac = function DetailsListModule_Factory(t) { return new (t || DetailsListModule)(); };
    DetailsListModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DetailsListModule });
    DetailsListModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i2$6.MatDividerModule,
                i2.MatIconModule,
                i6.MatChipsModule,
                i3$1.MatTooltipModule,
                i2$1.MatButtonModule,
                i7.MatRippleModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DetailsListModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [DetailsListComponent, DetailsListItemComponent],
                        imports: [
                            i1$1.CommonModule,
                            i2$6.MatDividerModule,
                            i2.MatIconModule,
                            i6.MatChipsModule,
                            i3$1.MatTooltipModule,
                            i2$1.MatButtonModule,
                            i7.MatRippleModule,
                        ],
                        exports: [DetailsListComponent, DetailsListItemComponent],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DetailsListModule, { declarations: [DetailsListComponent, DetailsListItemComponent], imports: [i1$1.CommonModule,
                i2$6.MatDividerModule,
                i2.MatIconModule,
                i6.MatChipsModule,
                i3$1.MatTooltipModule,
                i2$1.MatButtonModule,
                i7.MatRippleModule], exports: [DetailsListComponent, DetailsListItemComponent] });
    })();

    var DateTimeModule = /** @class */ (function () {
        function DateTimeModule() {
        }
        return DateTimeModule;
    }());
    DateTimeModule.ɵfac = function DateTimeModule_Factory(t) { return new (t || DateTimeModule)(); };
    DateTimeModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: DateTimeModule });
    DateTimeModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, PopoverModule, DetailsListModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(DateTimeModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [DateTimeComponent, ToDatePipe],
                        imports: [i1$1.CommonModule, PopoverModule, DetailsListModule],
                        exports: [DateTimeComponent, ToDatePipe],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(DateTimeModule, { declarations: [DateTimeComponent, ToDatePipe], imports: [i1$1.CommonModule, PopoverModule, DetailsListModule], exports: [DateTimeComponent, ToDatePipe] }); })();

    var ResourceTableModule = /** @class */ (function () {
        function ResourceTableModule() {
        }
        return ResourceTableModule;
    }());
    ResourceTableModule.ɵfac = function ResourceTableModule_Factory(t) { return new (t || ResourceTableModule)(); };
    ResourceTableModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ResourceTableModule });
    ResourceTableModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i1$6.MatTableModule,
                i3$1.MatTooltipModule,
                i2$4.MatProgressSpinnerModule,
                i2$6.MatDividerModule,
                i2$3.MatCardModule,
                i2$1.MatButtonModule,
                i6.MatChipsModule,
                i10.MatMenuModule,
                i2$2.PortalModule,
                i1$5.FontAwesomeModule,
                i2.MatIconModule,
                IconModule,
                DateTimeModule,
                PopoverModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ResourceTableModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.CommonModule,
                            i1$6.MatTableModule,
                            i3$1.MatTooltipModule,
                            i2$4.MatProgressSpinnerModule,
                            i2$6.MatDividerModule,
                            i2$3.MatCardModule,
                            i2$1.MatButtonModule,
                            i6.MatChipsModule,
                            i10.MatMenuModule,
                            i2$2.PortalModule,
                            i1$5.FontAwesomeModule,
                            i2.MatIconModule,
                            IconModule,
                            DateTimeModule,
                            PopoverModule,
                        ],
                        declarations: [
                            ResourceTableComponent,
                            StatusComponent,
                            ActionComponent,
                            ActionButtonComponent,
                            TableChipsListComponent,
                            TableComponent,
                            ComponentValueComponent,
                        ],
                        exports: [ResourceTableComponent],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ResourceTableModule, { declarations: [ResourceTableComponent,
                StatusComponent,
                ActionComponent,
                ActionButtonComponent,
                TableChipsListComponent,
                TableComponent,
                ComponentValueComponent], imports: [i1$1.CommonModule,
                i1$6.MatTableModule,
                i3$1.MatTooltipModule,
                i2$4.MatProgressSpinnerModule,
                i2$6.MatDividerModule,
                i2$3.MatCardModule,
                i2$1.MatButtonModule,
                i6.MatChipsModule,
                i10.MatMenuModule,
                i2$2.PortalModule,
                i1$5.FontAwesomeModule,
                i2.MatIconModule,
                IconModule,
                DateTimeModule,
                PopoverModule], exports: [ResourceTableComponent] });
    })();

    function FormSectionComponent_lib_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "lib-icon", 3);
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("icon", ctx_r0.icon);
        }
    }
    function FormSectionComponent_p_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p");
            i0__namespace.ɵɵtext(1, "*The cluster admin has disabled setting this section!");
            i0__namespace.ɵɵelementEnd();
        }
    }
    var _c0$5 = ["*"];
    var FormSectionComponent = /** @class */ (function () {
        function FormSectionComponent() {
        }
        FormSectionComponent.prototype.ngOnInit = function () { };
        return FormSectionComponent;
    }());
    FormSectionComponent.ɵfac = function FormSectionComponent_Factory(t) { return new (t || FormSectionComponent)(); };
    FormSectionComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FormSectionComponent, selectors: [["lib-form-section"]], inputs: { title: "title", text: "text", readOnly: "readOnly", style: "style", icon: "icon" }, ngContentSelectors: _c0$5, decls: 8, vars: 4, consts: [[1, "form--section-bottom"], [3, "icon", 4, "ngIf"], [4, "ngIf"], [3, "icon"]], template: function FormSectionComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "h3");
                i0__namespace.ɵɵtemplate(2, FormSectionComponent_lib_icon_2_Template, 1, 1, "lib-icon", 1);
                i0__namespace.ɵɵtext(3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "p");
                i0__namespace.ɵɵtext(5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(6, FormSectionComponent_p_6_Template, 2, 0, "p", 2);
                i0__namespace.ɵɵprojection(7);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.icon);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(ctx.title);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate(ctx.text);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.readOnly);
            }
        }, directives: [i1__namespace$1.NgIf, IconComponent], styles: [".wide[_ngcontent-%COMP%]{width:100%}h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{-webkit-margin-before:.2rem;margin-block-start:.2rem;color:rgba(0,0,0,.54)}.lib-icon[_ngcontent-%COMP%]{margin-right:.3rem}.form--section-bottom[_ngcontent-%COMP%], .form--section-bottom[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-bottom:.5em}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FormSectionComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-form-section',
                        templateUrl: './section.component.html',
                        styleUrls: ['./section.component.scss'],
                    }]
            }], function () { return []; }, { title: [{
                    type: i0.Input
                }], text: [{
                    type: i0.Input
                }], readOnly: [{
                    type: i0.Input
                }], style: [{
                    type: i0.Input
                }], icon: [{
                    type: i0.Input
                }] });
    })();

    var dns1123LabelFmt = '[a-z0-9]([-a-z0-9]*[a-z0-9])?';
    var dns1123Validator = {
        regex: '^' + dns1123LabelFmt + '(\\.' + dns1123LabelFmt + ')*' + '$',
        help: "Name must consist of lowercase alphanumeric characters or '-', and\"" +
            ' must start and end with an alphanumeric character',
    };
    // TODO(kimwnasptd): We only use this validator, do we need the others?
    var dns1035Validator = {
        regex: '^[a-z]([-a-z0-9]*[a-z0-9])?$',
        help: $localize(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["Name must consist of lowercase alphanumeric characters or '-',\n    start with an alphabetic character, and end with an alphanumeric character."], ["Name must consist of lowercase alphanumeric characters or '-',\n    start with an alphabetic character, and end with an alphanumeric character."]))),
    };
    var volSizeValidator = {
        regex: '^[0-9]+(E|Ei|P|Pi|T|Ti|G|Gi|M|Mi|K|Ki)?$',
        help: 'Invalid volume size: Should be an integer, or integer followed ' +
            'by a valid unit',
    };
    var memoryValidator = {
        regex: '^[0-9]+(' +
            '(([.][0-9]+)(E|Ei|P|Pi|T|Ti|G|Gi|M|Mi|K|Ki))' +
            '|' +
            '(E|Ei|P|Pi|T|Ti|G|Gi|M|Mi|K|Ki)' +
            ')?$',
        help: 'Invalid memory size: Should be an integer, or fixed-point integer' +
            ' followed by a valid unit',
    };
    var cpuValidator = {
        regex: '^[0-9]*(m|[.][0-9]+)?$',
        help: 'Invalid cpu limit: Should be a fixed-point integer or an integer ' +
            "followed by 'm'",
    };
    var DEBOUNCE_TIME = 500;
    // Create an async validator that adds debounce time to synchronous validators
    function mergeAndDebounceValidators(syncValidators) {
        return function (control) {
            return rxjs.timer(DEBOUNCE_TIME).pipe(operators.switchMap(function () {
                var e_1, _a;
                // Run all synchronous validators and return their concatenated output
                var validationResult = {};
                try {
                    for (var syncValidators_1 = __values(syncValidators), syncValidators_1_1 = syncValidators_1.next(); !syncValidators_1_1.done; syncValidators_1_1 = syncValidators_1.next()) {
                        var validator = syncValidators_1_1.value;
                        var res = validator(control);
                        // No errors
                        if (res === null) {
                            continue;
                        }
                        validationResult = Object.assign({}, res, validationResult);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (syncValidators_1_1 && !syncValidators_1_1.done && (_a = syncValidators_1.return)) _a.call(syncValidators_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // Return the concatenated result from all the validators
                if (Object.keys(validationResult).length === 0) {
                    return rxjs.of(null);
                }
                return rxjs.of(validationResult);
            }));
        };
    }
    // Name Validators
    var MAX_NAME_LENGTH = 50;
    function getNameError(nameCtrl, resource) {
        if (nameCtrl.hasError('existingName')) {
            return resource + " \"" + nameCtrl.value + "\" already exists";
        }
        else if (nameCtrl.hasError('pattern')) {
            // TODO: "pattern", is generic error, this might break in the future
            return dns1035Validator.help;
        }
        else if (nameCtrl.hasError('maxlength')) {
            return $localize(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["Name is too long"], ["Name is too long"])));
        }
        else {
            return $localize(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Name cannot be empty"], ["Name cannot be empty"])));
        }
    }
    function getExistingNameValidator(names) {
        return function (control) {
            return names.has(control.value) ? { existingName: true } : null;
        };
    }
    function getNameSyncValidators() {
        return [i3.Validators.required];
    }
    function getNameAsyncValidators(existingNames, maxLength) {
        if (existingNames === void 0) { existingNames = new Set(); }
        if (maxLength === void 0) { maxLength = MAX_NAME_LENGTH; }
        return [
            mergeAndDebounceValidators([
                i3.Validators.pattern(dns1035Validator.regex),
                i3.Validators.maxLength(maxLength),
                getExistingNameValidator(existingNames),
            ]),
        ];
    }
    // Rok
    function getRokUrlError(rokUrlCtrl) {
        if (rokUrlCtrl.hasError('required')) {
            return 'Rok URL cannot be empty';
        }
        if (rokUrlCtrl.hasError('invalidRokUrl')) {
            return 'Not a valid Rok URL';
        }
    }
    function rokUrlValidator(rok) {
        return function (control) {
            var url = control.value;
            // Don't return error if the url is empty
            if (url.length === 0) {
                return rxjs.of(null);
            }
            // Ensure a protocol is given
            // Don't fire while the user is writting
            return rxjs.timer(DEBOUNCE_TIME).pipe(operators.switchMap(function () {
                return rok.getObjectMetadata(url, false).pipe(operators.map(function (resp) {
                    return null;
                }), operators.catchError(function (msg) {
                    return rxjs.of({ invalidRokUrl: true });
                }));
            }));
        };
    }
    var templateObject_1$4, templateObject_2$2, templateObject_3;

    var NameInputComponent = /** @class */ (function () {
        function NameInputComponent() {
            this.existingNamesPrv = new Set();
            this.resourceName = '';
            this.maxLength = MAX_NAME_LENGTH;
        }
        Object.defineProperty(NameInputComponent.prototype, "existingNames", {
            get: function () {
                return this.existingNamesPrv;
            },
            set: function (names) {
                this.existingNamesPrv = names;
                this.nameControl.setAsyncValidators(getNameAsyncValidators(this.existingNamesPrv, this.maxLength));
                this.nameControl.setValidators(getNameSyncValidators());
            },
            enumerable: false,
            configurable: true
        });
        NameInputComponent.prototype.ngOnInit = function () {
            this.nameControl.setAsyncValidators(getNameAsyncValidators(this.existingNamesPrv, this.maxLength));
            this.nameControl.setValidators(getNameSyncValidators());
        };
        NameInputComponent.prototype.nameError = function () {
            return getNameError(this.nameControl, this.resourceName);
        };
        return NameInputComponent;
    }());
    NameInputComponent.ɵfac = function NameInputComponent_Factory(t) { return new (t || NameInputComponent)(); };
    NameInputComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NameInputComponent, selectors: [["lib-name-input"]], inputs: { nameControl: "nameControl", resourceName: "resourceName", maxLength: "maxLength", existingNames: "existingNames" }, decls: 6, vars: 2, consts: function () {
            var i18n_0;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_8953033926734869941$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_INPUT_NAME_INPUT_COMPONENT_TS_1 = goog.getMsg("Name");
                i18n_0 = MSG_EXTERNAL_8953033926734869941$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_INPUT_NAME_INPUT_COMPONENT_TS_1;
            }
            else {
                i18n_0 = $localize(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject([":\u241Fcff1428d10d59d14e45edec3c735a27b5482db59\u241F8953033926734869941:Name"], [":\u241Fcff1428d10d59d14e45edec3c735a27b5482db59\u241F8953033926734869941:Name"])));
            }
            return [["appearance", "outline", 1, "wide"], i18n_0, ["matInput", "", "placeholder", "Name", 3, "formControl"]];
        }, template: function NameInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵi18n(2, 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 2);
                i0__namespace.ɵɵelementStart(4, "mat-error");
                i0__namespace.ɵɵtext(5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formControl", ctx.nameControl);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate(ctx.nameError());
            }
        }, directives: [i1__namespace$3.MatFormField, i1__namespace$3.MatLabel, i2__namespace$7.MatInput, i3__namespace.DefaultValueAccessor, i3__namespace.NgControlStatus, i3__namespace.FormControlDirective, i1__namespace$3.MatError], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NameInputComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-name-input',
                        templateUrl: './name-input.component.html',
                        styleUrls: ['./name-input.component.scss'],
                    }]
            }], function () { return []; }, { nameControl: [{
                    type: i0.Input
                }], resourceName: [{
                    type: i0.Input
                }], maxLength: [{
                    type: i0.Input
                }], existingNames: [{
                    type: i0.Input
                }] });
    })();
    var templateObject_1$3;

    var NameNamespaceInputsComponent = /** @class */ (function () {
        function NameNamespaceInputsComponent() {
            this.maxLength = MAX_NAME_LENGTH;
        }
        NameNamespaceInputsComponent.prototype.ngOnInit = function () { };
        return NameNamespaceInputsComponent;
    }());
    NameNamespaceInputsComponent.ɵfac = function NameNamespaceInputsComponent_Factory(t) { return new (t || NameNamespaceInputsComponent)(); };
    NameNamespaceInputsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: NameNamespaceInputsComponent, selectors: [["lib-form-name-namespace-inputs"]], inputs: { nameControl: "nameControl", namespaceControl: "namespaceControl", resourceName: "resourceName", maxLength: "maxLength", existingNames: "existingNames" }, decls: 6, vars: 5, consts: function () {
            var i18n_0;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_1 = goog.getMsg("Namespace");
                i18n_0 = MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_1;
            }
            else {
                i18n_0 = $localize(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject([":\u241F130fd872c78271a8f86b1ab16a76e823969c47d9\u241F3294686077659093992:Namespace"], [":\u241F130fd872c78271a8f86b1ab16a76e823969c47d9\u241F3294686077659093992:Namespace"])));
            }
            var i18n_2;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_3 = goog.getMsg("Namespace");
                i18n_2 = MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_3;
            }
            else {
                i18n_2 = $localize(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject([":\u241F130fd872c78271a8f86b1ab16a76e823969c47d9\u241F3294686077659093992:Namespace"], [":\u241F130fd872c78271a8f86b1ab16a76e823969c47d9\u241F3294686077659093992:Namespace"])));
            }
            return [[1, "row"], [1, "column", 3, "nameControl", "maxLength", "resourceName", "existingNames"], ["appearance", "outline", 1, "column"], i18n_0, ["matInput", "", "placeholder", i18n_2, "readonly", "", 3, "formControl"]];
        }, template: function NameNamespaceInputsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelement(1, "lib-name-input", 1);
                i0__namespace.ɵɵelementStart(2, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(3, "mat-label");
                i0__namespace.ɵɵi18n(4, 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(5, "input", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("nameControl", ctx.nameControl)("maxLength", ctx.maxLength)("resourceName", ctx.resourceName)("existingNames", ctx.existingNames);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("formControl", ctx.namespaceControl);
            }
        }, directives: [NameInputComponent, i1__namespace$3.MatFormField, i1__namespace$3.MatLabel, i2__namespace$7.MatInput, i3__namespace.DefaultValueAccessor, i3__namespace.NgControlStatus, i3__namespace.FormControlDirective], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NameNamespaceInputsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-form-name-namespace-inputs',
                        templateUrl: './name-namespace-inputs.component.html',
                        styleUrls: ['./name-namespace-inputs.component.scss'],
                    }]
            }], function () { return []; }, { nameControl: [{
                    type: i0.Input
                }], namespaceControl: [{
                    type: i0.Input
                }], resourceName: [{
                    type: i0.Input
                }], maxLength: [{
                    type: i0.Input
                }], existingNames: [{
                    type: i0.Input
                }] });
    })();
    var templateObject_1$2, templateObject_2$1;

    function PositiveNumberInputComponent_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵi18n(1, 3);
            i0__namespace.ɵɵelementEnd();
        }
    }
    var PositiveNumberInputComponent = /** @class */ (function () {
        function PositiveNumberInputComponent() {
            this.min = 0.1;
            this.step = 0.1;
        }
        PositiveNumberInputComponent.prototype.ngOnInit = function () {
            this.sizeControl.setValidators([i3.Validators.required, i3.Validators.min(0)]);
        };
        return PositiveNumberInputComponent;
    }());
    PositiveNumberInputComponent.ɵfac = function PositiveNumberInputComponent_Factory(t) { return new (t || PositiveNumberInputComponent)(); };
    PositiveNumberInputComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PositiveNumberInputComponent, selectors: [["lib-positive-number-input"]], inputs: { sizeControl: "sizeControl", label: "label", min: "min", step: "step" }, decls: 5, vars: 5, consts: function () {
            var i18n_0;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_1457381862685487592$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_POSITIVE_NUMBER_INPUT_POSITIVE_NUMBER_INPUT_COMPONENT_TS__1 = goog.getMsg(" Cannot be negative. ");
                i18n_0 = MSG_EXTERNAL_1457381862685487592$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_POSITIVE_NUMBER_INPUT_POSITIVE_NUMBER_INPUT_COMPONENT_TS__1;
            }
            else {
                i18n_0 = $localize(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject([":\u241F7824eb0fc97826f3919ba20317db1f8fb7926fcf\u241F1457381862685487592: Cannot be negative. "], [":\u241F7824eb0fc97826f3919ba20317db1f8fb7926fcf\u241F1457381862685487592: Cannot be negative. "])));
            }
            return [["appearance", "outline", 1, "wide"], ["matInput", "", "type", "number", 3, "min", "step", "formControl"], [4, "ngIf"], i18n_0];
        }, template: function PositiveNumberInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵtemplate(4, PositiveNumberInputComponent_mat_error_4_Template, 2, 0, "mat-error", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate(ctx.label);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("min", ctx.min)("step", ctx.step)("formControl", ctx.sizeControl);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.sizeControl.hasError("min"));
            }
        }, directives: [i1__namespace$3.MatFormField, i1__namespace$3.MatLabel, i2__namespace$7.MatInput, i3__namespace.MinValidator, i3__namespace.NumberValueAccessor, i3__namespace.DefaultValueAccessor, i3__namespace.NgControlStatus, i3__namespace.FormControlDirective, i1__namespace$1.NgIf, i1__namespace$3.MatError], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PositiveNumberInputComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-positive-number-input',
                        templateUrl: './positive-number-input.component.html',
                        styleUrls: ['./positive-number-input.component.scss'],
                    }]
            }], function () { return []; }, { sizeControl: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], min: [{
                    type: i0.Input
                }], step: [{
                    type: i0.Input
                }] });
    })();
    var templateObject_1$1;

    function RokUrlInputComponent_img_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "img", 5);
        }
    }
    function RokUrlInputComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "img", 6);
        }
    }
    var RokUrlInputComponent = /** @class */ (function () {
        function RokUrlInputComponent() {
            this.mode = 'group';
            this.create = false;
            this.urlEntered = new i0.EventEmitter();
            this.chooserId = -1;
        }
        RokUrlInputComponent.prototype.ngOnInit = function () {
            var _this = this;
            // Emit an event whenever a valid url has been detected
            this.control.statusChanges
                .pipe(operators.filter(function () { return _this.control.valid && _this.control.value !== ''; }))
                .subscribe(function () {
                var url = _this.control.value;
                _this.urlEntered.emit(url);
            });
        };
        // Chooser popup handlers
        RokUrlInputComponent.prototype.openChooser = function () {
            if (this.popupChooser && !this.popupChooser.closed) {
                this.popupChooser.focus();
                return;
            }
            this.chooserId = Date.now();
            this.popupChooser = window.open("/rok/buckets?mode=" + this.mode + "-chooser" +
                ("&create=" + this.create) +
                ("&chooser-id=" + this.chooserId), 'Chooser', "height=500,width=600,menubar=0");
        };
        RokUrlInputComponent.prototype.parseRokUrlError = function () {
            return getRokUrlError(this.control);
        };
        RokUrlInputComponent.prototype.onMessage = function (event) {
            if (typeof event.data === 'object' &&
                event.data.hasOwnProperty('chooser') &&
                event.data.hasOwnProperty('chooserId') &&
                event.data.chooserId === this.chooserId.toString()) {
                this.control.setValue(event.data.chooser);
                this.popupChooser.close();
            }
        };
        return RokUrlInputComponent;
    }());
    RokUrlInputComponent.ɵfac = function RokUrlInputComponent_Factory(t) { return new (t || RokUrlInputComponent)(); };
    RokUrlInputComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: RokUrlInputComponent, selectors: [["lib-rok-url-input"]], hostBindings: function RokUrlInputComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵlistener("message", function RokUrlInputComponent_message_HostBindingHandler($event) { return ctx.onMessage($event); }, false, i0__namespace.ɵɵresolveWindow);
            }
        }, inputs: { control: "control", mode: "mode", create: "create" }, outputs: { urlEntered: "urlEntered" }, decls: 10, vars: 5, consts: [["appearance", "outline", 1, "form-field-with-button", "wide"], ["matInput", "", "type", "url", 3, "formControl"], ["matSuffix", "", "matTolltip", "Choose RokURL", "type", "button", 3, "disabled", "click"], ["src", "static/assets/browse-in-rok-blue.svg", 4, "ngIf", "ngIfElse"], ["disableTpl", ""], ["src", "static/assets/browse-in-rok-blue.svg"], ["src", "static/assets/browse-in-rok-grey.svg"]], template: function RokUrlInputComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Rok URL");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 1);
                i0__namespace.ɵɵelementStart(4, "button", 2);
                i0__namespace.ɵɵlistener("click", function RokUrlInputComponent_Template_button_click_4_listener() { return ctx.openChooser(); });
                i0__namespace.ɵɵtemplate(5, RokUrlInputComponent_img_5_Template, 1, 0, "img", 3);
                i0__namespace.ɵɵtemplate(6, RokUrlInputComponent_ng_template_6_Template, 1, 0, "ng-template", null, 4, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "mat-error");
                i0__namespace.ɵɵtext(9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(7);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("formControl", ctx.control);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("disabled", ctx.control.disabled);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.control.enabled)("ngIfElse", _r1);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate(ctx.parseRokUrlError());
            }
        }, directives: [i1__namespace$3.MatFormField, i1__namespace$3.MatLabel, i2__namespace$7.MatInput, i3__namespace.DefaultValueAccessor, i3__namespace.NgControlStatus, i3__namespace.FormControlDirective, i1__namespace$3.MatSuffix, i1__namespace$1.NgIf, i1__namespace$3.MatError], styles: [".form-field-with-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;outline:none;cursor:pointer;display:flex;align-items:center;border-radius:50%;padding:0;border:5px solid transparent}.form-field-with-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.form-field-with-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:none;cursor:default}.form-field-with-button[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{align-items:center}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RokUrlInputComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-rok-url-input',
                        templateUrl: './rok-url-input.component.html',
                        styleUrls: ['./rok-url-input.component.scss'],
                    }]
            }], function () { return []; }, { control: [{
                    type: i0.Input
                }], mode: [{
                    type: i0.Input
                }], create: [{
                    type: i0.Input
                }], urlEntered: [{
                    type: i0.Output
                }], onMessage: [{
                    type: i0.HostListener,
                    args: ['window:message', ['$event']]
                }] });
    })();

    var _c0$4 = ["options"];
    var _c3 = ["*"];
    var AdvancedOptionsComponent = /** @class */ (function () {
        function AdvancedOptionsComponent() {
            this.sectionIsExpanded = false;
            this.maxHeight = '5000px';
            this.text = $localize(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Advanced Options"], ["Advanced Options"])));
            this.selfClass = true;
        }
        Object.defineProperty(AdvancedOptionsComponent.prototype, "buttonIcon", {
            get: function () {
                return this.sectionIsExpanded
                    ? 'material:expand_less'
                    : 'material:expand_more';
            },
            enumerable: false,
            configurable: true
        });
        AdvancedOptionsComponent.prototype.ngOnInit = function () { };
        AdvancedOptionsComponent.prototype.ngAfterViewInit = function () {
            this.updateHeight();
        };
        AdvancedOptionsComponent.prototype.updateHeight = function () {
            var options = this.optionsWrapper.nativeElement;
            options.style.maxHeight = 0;
            if (this.sectionIsExpanded) {
                options.style.maxHeight = this.maxHeight;
            }
        };
        AdvancedOptionsComponent.prototype.toggleClicked = function () {
            this.sectionIsExpanded = !this.sectionIsExpanded;
            this.updateHeight();
        };
        return AdvancedOptionsComponent;
    }());
    AdvancedOptionsComponent.ɵfac = function AdvancedOptionsComponent_Factory(t) { return new (t || AdvancedOptionsComponent)(); };
    AdvancedOptionsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AdvancedOptionsComponent, selectors: [["lib-advanced-options"]], viewQuery: function AdvancedOptionsComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0$4, 7);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.optionsWrapper = _t.first);
            }
        }, hostVars: 2, hostBindings: function AdvancedOptionsComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("lib-advanced-options", ctx.selfClass);
            }
        }, inputs: { sectionIsExpanded: "sectionIsExpanded", maxHeight: "maxHeight", text: "text" }, ngContentSelectors: _c3, decls: 10, vars: 2, consts: function () {
            var i18n_1;
            if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
                var MSG_EXTERNAL_8461609631969932886$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_ADVANCED_OPTIONS_ADVANCED_OPTIONS_COMPONENT_TS_2 = goog.getMsg("Hide");
                i18n_1 = MSG_EXTERNAL_8461609631969932886$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_ADVANCED_OPTIONS_ADVANCED_OPTIONS_COMPONENT_TS_2;
            }
            else {
                i18n_1 = $localize(templateObject_2 || (templateObject_2 = __makeTemplateObject([":\u241F1eede69e18c5ac9c0b0295b72cabb7e64e029e74\u241F8461609631969932886:Hide"], [":\u241F1eede69e18c5ac9c0b0295b72cabb7e64e029e74\u241F8461609631969932886:Hide"])));
            }
            return [[1, "flex"], ["matTooltip", i18n_1, "matTooltipPosition", "right", 1, "threadline", 3, "click"], [1, "wide"], [1, "options-wrapper", "anchor"], ["options", ""], [1, "anchor"], ["color", "primary", "mat-button", "", "type", "button", 1, "toggle-button", "button-with-icon", 3, "click"], [1, "blue", 3, "icon"]];
        }, template: function AdvancedOptionsComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "div", 1);
                i0__namespace.ɵɵlistener("click", function AdvancedOptionsComponent_Template_div_click_1_listener() { return ctx.toggleClicked(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵelementStart(3, "div", 3, 4);
                i0__namespace.ɵɵprojection(5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "div", 5);
                i0__namespace.ɵɵelementStart(7, "button", 6);
                i0__namespace.ɵɵlistener("click", function AdvancedOptionsComponent_Template_button_click_7_listener() { return ctx.toggleClicked(); });
                i0__namespace.ɵɵelement(8, "lib-icon", 7);
                i0__namespace.ɵɵtext(9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵproperty("icon", ctx.buttonIcon);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.text, " ");
            }
        }, directives: [i3__namespace$1.MatTooltip, i2__namespace$1.MatButton, IconComponent], styles: ["[_nghost-%COMP%]{display:block;margin-bottom:1rem}.options-wrapper[_ngcontent-%COMP%]{transition:max-height .3s ease;overflow:hidden}.flex[_ngcontent-%COMP%]{display:flex}.anchor[_ngcontent-%COMP%]{overflow-anchor:none}.threadline[_ngcontent-%COMP%]{border-left:2px solid #edeff1}.threadline[_ngcontent-%COMP%], .threadline[_ngcontent-%COMP%]:hover{padding-right:12px;margin-right:12px}.threadline[_ngcontent-%COMP%]:hover{border-left:2px solid #1e88e5;cursor:pointer}.toggle-button[_ngcontent-%COMP%]{padding:0 4px;margin-left:-8px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AdvancedOptionsComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-advanced-options',
                        templateUrl: './advanced-options.component.html',
                        styleUrls: ['./advanced-options.component.scss'],
                    }]
            }], function () { return []; }, { sectionIsExpanded: [{
                    type: i0.Input
                }], maxHeight: [{
                    type: i0.Input
                }], text: [{
                    type: i0.Input
                }], selfClass: [{
                    type: i0.HostBinding,
                    args: ['class.lib-advanced-options']
                }], optionsWrapper: [{
                    type: i0.ViewChild,
                    args: ['options', { static: true }]
                }] });
    })();
    var templateObject_1, templateObject_2;

    function SubmitBarComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 5);
            i0__namespace.ɵɵlistener("click", function SubmitBarComponent_button_2_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.create.emit(true); });
            i0__namespace.ɵɵtext(1, " CREATE ");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("disabled", ctx_r0.createDisabled);
        }
    }
    function SubmitBarComponent_button_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 6);
            i0__namespace.ɵɵelementStart(1, "div", 7);
            i0__namespace.ɵɵelement(2, "mat-spinner", 8);
            i0__namespace.ɵɵelementStart(3, "div");
            i0__namespace.ɵɵtext(4, "CREATING");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function SubmitBarComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 9);
            i0__namespace.ɵɵelementStart(1, "button", 10);
            i0__namespace.ɵɵlistener("click", function SubmitBarComponent_div_6_Template_button_click_1_listener() { i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.yaml.emit(true); });
            i0__namespace.ɵɵtext(2, "Edit");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "span");
            i0__namespace.ɵɵtext(4, " and submit YAML");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    var SubmitBarComponent = /** @class */ (function () {
        function SubmitBarComponent() {
            this.createDisabled = false;
            this.allowYAMLEditing = true;
            this.isApplying = false;
            this.create = new i0.EventEmitter();
            this.cancel = new i0.EventEmitter();
            this.yaml = new i0.EventEmitter();
        }
        SubmitBarComponent.prototype.ngOnInit = function () { };
        return SubmitBarComponent;
    }());
    SubmitBarComponent.ɵfac = function SubmitBarComponent_Factory(t) { return new (t || SubmitBarComponent)(); };
    SubmitBarComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SubmitBarComponent, selectors: [["lib-submit-bar"]], inputs: { createDisabled: "createDisabled", allowYAMLEditing: "allowYAMLEditing", isApplying: "isApplying" }, outputs: { create: "create", cancel: "cancel", yaml: "yaml" }, decls: 7, vars: 3, consts: [[1, "flex", "bar"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "disabled", "", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["class", "flex text-area", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "disabled", ""], [1, "waiting-button-wrapper"], ["diameter", "16"], [1, "flex", "text-area"], [1, "btn-link", 3, "click"]], template: function SubmitBarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-divider");
                i0__namespace.ɵɵelementStart(1, "div", 0);
                i0__namespace.ɵɵtemplate(2, SubmitBarComponent_button_2_Template, 2, 1, "button", 1);
                i0__namespace.ɵɵtemplate(3, SubmitBarComponent_button_3_Template, 5, 0, "button", 2);
                i0__namespace.ɵɵelementStart(4, "button", 3);
                i0__namespace.ɵɵlistener("click", function SubmitBarComponent_Template_button_click_4_listener() { return ctx.cancel.emit(true); });
                i0__namespace.ɵɵtext(5, "CANCEL");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(6, SubmitBarComponent_div_6_Template, 5, 0, "div", 4);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", !ctx.isApplying);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isApplying);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", ctx.allowYAMLEditing);
            }
        }, directives: [i2__namespace$6.MatDivider, i1__namespace$1.NgIf, i2__namespace$1.MatButton, i2__namespace$4.MatSpinner], styles: ["[_nghost-%COMP%]{display:block;width:100%}.btn-link[_ngcontent-%COMP%]{color:blue;text-decoration:underline;cursor:pointer;display:inline-block;background-color:transparent;border:0;padding:0;font-family:inherit;font-size:inherit}.bar[_ngcontent-%COMP%]{padding:.5rem 0}.bar[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto}.bar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-left:35%}.bar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-child(2){margin-left:1rem;margin-right:1rem}.text-area[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{white-space:break-spaces}.waiting-button-wrapper[_ngcontent-%COMP%]{display:flex}.waiting-button-wrapper[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%]{margin:auto .2rem}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SubmitBarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-submit-bar',
                        templateUrl: './submit-bar.component.html',
                        styleUrls: ['./submit-bar.component.scss'],
                    }]
            }], function () { return []; }, { createDisabled: [{
                    type: i0.Input
                }], allowYAMLEditing: [{
                    type: i0.Input
                }], isApplying: [{
                    type: i0.Input
                }], create: [{
                    type: i0.Output
                }], cancel: [{
                    type: i0.Output
                }], yaml: [{
                    type: i0.Output
                }] });
    })();

    var _c0$3 = ["*"];
    var StepInfoComponent = /** @class */ (function () {
        function StepInfoComponent() {
            this.selfClass = true;
        }
        StepInfoComponent.prototype.ngOnInit = function () { };
        return StepInfoComponent;
    }());
    StepInfoComponent.ɵfac = function StepInfoComponent_Factory(t) { return new (t || StepInfoComponent)(); };
    StepInfoComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepInfoComponent, selectors: [["lib-step-info"]], hostVars: 2, hostBindings: function StepInfoComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("lib-step-info", ctx.selfClass);
            }
        }, inputs: { header: "header" }, ngContentSelectors: _c0$3, decls: 7, vars: 1, consts: [[1, "flex"], [1, "separator"], [1, "lib-flex-layout-column"], [1, "mat-hint", "bold", "small-text"], [1, "mat-hint", "small-text"]], template: function StepInfoComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelement(1, "div", 1);
                i0__namespace.ɵɵelementStart(2, "div", 2);
                i0__namespace.ɵɵelementStart(3, "span", 3);
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "span", 4);
                i0__namespace.ɵɵprojection(6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate(ctx.header);
            }
        }, styles: ["[_nghost-%COMP%]{display:block;margin-bottom:8px;width:300px}.separator[_ngcontent-%COMP%]{border-left:2px solid #edeff1;margin-right:12px}.small-text[_ngcontent-%COMP%]{font-size:12px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepInfoComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-step-info',
                        templateUrl: './step-info.component.html',
                        styleUrls: ['./step-info.component.scss'],
                    }]
            }], function () { return []; }, { header: [{
                    type: i0.Input
                }], selfClass: [{
                    type: i0.HostBinding,
                    args: ['class.lib-step-info']
                }] });
    })();

    var FormModule = /** @class */ (function () {
        function FormModule() {
        }
        return FormModule;
    }());
    FormModule.ɵfac = function FormModule_Factory(t) { return new (t || FormModule)(); };
    FormModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FormModule });
    FormModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i3.ReactiveFormsModule,
                i2$3.MatCardModule,
                i2$1.MatButtonModule,
                i1$3.MatFormFieldModule,
                i2$6.MatDividerModule,
                i2$7.MatInputModule,
                i3$1.MatTooltipModule,
                IconModule,
                i2$4.MatProgressSpinnerModule,
                PopoverModule,
            ], i1$3.MatFormFieldModule,
            i2$7.MatInputModule,
            i2$1.MatButtonModule,
            i3.ReactiveFormsModule,
            i4.MatSelectModule,
            i2$4.MatProgressSpinnerModule,
            i1$7.MatDialogModule,
            i3$1.MatTooltipModule,
            i2.MatIconModule,
            i2$6.MatDividerModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FormModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            FormSectionComponent,
                            NameNamespaceInputsComponent,
                            NameInputComponent,
                            PositiveNumberInputComponent,
                            RokUrlInputComponent,
                            AdvancedOptionsComponent,
                            SubmitBarComponent,
                            StepInfoComponent,
                        ],
                        imports: [
                            i1$1.CommonModule,
                            i3.ReactiveFormsModule,
                            i2$3.MatCardModule,
                            i2$1.MatButtonModule,
                            i1$3.MatFormFieldModule,
                            i2$6.MatDividerModule,
                            i2$7.MatInputModule,
                            i3$1.MatTooltipModule,
                            IconModule,
                            i2$4.MatProgressSpinnerModule,
                            PopoverModule,
                        ],
                        exports: [
                            FormSectionComponent,
                            NameNamespaceInputsComponent,
                            NameInputComponent,
                            PositiveNumberInputComponent,
                            RokUrlInputComponent,
                            AdvancedOptionsComponent,
                            SubmitBarComponent,
                            StepInfoComponent,
                            i1$3.MatFormFieldModule,
                            i2$7.MatInputModule,
                            i2$1.MatButtonModule,
                            i3.ReactiveFormsModule,
                            i4.MatSelectModule,
                            i2$4.MatProgressSpinnerModule,
                            i1$7.MatDialogModule,
                            i3$1.MatTooltipModule,
                            i2.MatIconModule,
                            i2$6.MatDividerModule,
                        ],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FormModule, { declarations: [FormSectionComponent,
                NameNamespaceInputsComponent,
                NameInputComponent,
                PositiveNumberInputComponent,
                RokUrlInputComponent,
                AdvancedOptionsComponent,
                SubmitBarComponent,
                StepInfoComponent], imports: [i1$1.CommonModule,
                i3.ReactiveFormsModule,
                i2$3.MatCardModule,
                i2$1.MatButtonModule,
                i1$3.MatFormFieldModule,
                i2$6.MatDividerModule,
                i2$7.MatInputModule,
                i3$1.MatTooltipModule,
                IconModule,
                i2$4.MatProgressSpinnerModule,
                PopoverModule], exports: [FormSectionComponent,
                NameNamespaceInputsComponent,
                NameInputComponent,
                PositiveNumberInputComponent,
                RokUrlInputComponent,
                AdvancedOptionsComponent,
                SubmitBarComponent,
                StepInfoComponent,
                i1$3.MatFormFieldModule,
                i2$7.MatInputModule,
                i2$1.MatButtonModule,
                i3.ReactiveFormsModule,
                i4.MatSelectModule,
                i2$4.MatProgressSpinnerModule,
                i1$7.MatDialogModule,
                i3$1.MatTooltipModule,
                i2.MatIconModule,
                i2$6.MatDividerModule] });
    })();

    function forEachHttpHeader(headers, cb) {
        headers.keys().forEach(function (name) {
            // FIXME: A header name can have more than one values. We must use the
            // getAll() method if we want to support more values.
            var value = headers.get(name);
            cb(name, value);
        });
    }
    var HeadersInterceptor = /** @class */ (function () {
        function HeadersInterceptor() {
        }
        HeadersInterceptor.prototype.intercept = function (req, next) {
            return next.handle(req).pipe(operators.map(function (event) {
                if (!(event instanceof i1$2.HttpResponse)) {
                    return event;
                }
                var evHeaders = event.headers;
                var h = {};
                forEachHttpHeader(evHeaders, function (name, value) {
                    if (name.startsWith('x-object-meta-') ||
                        value === 'x-container-throw-ref') {
                        value = decodeURIComponent(value);
                    }
                    h[name] = value;
                });
                return event.clone({
                    headers: new i1$2.HttpHeaders(h),
                });
            }));
        };
        return HeadersInterceptor;
    }());
    HeadersInterceptor.ɵfac = function HeadersInterceptor_Factory(t) { return new (t || HeadersInterceptor)(); };
    HeadersInterceptor.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: HeadersInterceptor, factory: HeadersInterceptor.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HeadersInterceptor, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    function TitleActionsToolbarComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 8);
            i0__namespace.ɵɵlistener("click", function TitleActionsToolbarComponent_button_2_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.emitBack(); });
            i0__namespace.ɵɵelementStart(1, "mat-icon");
            i0__namespace.ɵɵtext(2, "keyboard_backspace");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function TitleActionsToolbarComponent_ng_container_8_ng_container_1_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon", 12);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r4 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", button_r4.icon, " ");
        }
    }
    function TitleActionsToolbarComponent_ng_container_8_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "button", 10);
            i0__namespace.ɵɵlistener("click", function TitleActionsToolbarComponent_ng_container_8_ng_container_1_Template_button_click_1_listener() { i0__namespace.ɵɵrestoreView(_r11_1); var button_r4 = i0__namespace.ɵɵnextContext().$implicit; return button_r4.fn(); });
            i0__namespace.ɵɵtemplate(2, TitleActionsToolbarComponent_ng_container_8_ng_container_1_mat_icon_2_Template, 2, 1, "mat-icon", 11);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var button_r4 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("color", button_r4.color)("disabled", button_r4.disabled);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", button_r4.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", button_r4.text, " ");
        }
    }
    function TitleActionsToolbarComponent_ng_container_8_ng_container_2_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon", 12);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var button_r4 = i0__namespace.ɵɵnextContext(2).$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", button_r4.icon, " ");
        }
    }
    function TitleActionsToolbarComponent_ng_container_8_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "button", 13);
            i0__namespace.ɵɵlistener("click", function TitleActionsToolbarComponent_ng_container_8_ng_container_2_Template_button_click_1_listener() { i0__namespace.ɵɵrestoreView(_r17_1); var button_r4 = i0__namespace.ɵɵnextContext().$implicit; return button_r4.fn(); });
            i0__namespace.ɵɵtemplate(2, TitleActionsToolbarComponent_ng_container_8_ng_container_2_mat_icon_2_Template, 2, 1, "mat-icon", 11);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var button_r4 = i0__namespace.ɵɵnextContext().$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("color", button_r4.color)("disabled", button_r4.disabled);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", button_r4.icon);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", button_r4.text, " ");
        }
    }
    function TitleActionsToolbarComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵtemplate(1, TitleActionsToolbarComponent_ng_container_8_ng_container_1_Template, 4, 4, "ng-container", 9);
            i0__namespace.ɵɵtemplate(2, TitleActionsToolbarComponent_ng_container_8_ng_container_2_Template, 4, 4, "ng-container", 9);
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var button_r4 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", button_r4.raised);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", button_r4.stroked);
        }
    }
    var _c0$2 = ["*"];
    var TitleActionsToolbarComponent = /** @class */ (function () {
        function TitleActionsToolbarComponent() {
            this.buttons = [];
            this.backButton = false;
            this.back = new i0.EventEmitter();
            this.selfClass = true;
        }
        TitleActionsToolbarComponent.prototype.emitBack = function () {
            this.back.emit('backButton');
        };
        return TitleActionsToolbarComponent;
    }());
    TitleActionsToolbarComponent.ɵfac = function TitleActionsToolbarComponent_Factory(t) { return new (t || TitleActionsToolbarComponent)(); };
    TitleActionsToolbarComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: TitleActionsToolbarComponent, selectors: [["lib-title-actions-toolbar"]], hostVars: 2, hostBindings: function TitleActionsToolbarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("lib-title-actions-toolbar", ctx.selfClass);
            }
        }, inputs: { buttons: "buttons", backButton: "backButton", title: "title" }, outputs: { back: "back" }, ngContentSelectors: _c0$2, decls: 10, vars: 3, consts: [[1, "flex"], [1, "page-padding-left"], ["mat-icon-button", "", "color", "primary", "class", "back-button", 3, "click", 4, "ngIf"], [1, "title-margin", "title"], [1, "margin-content"], [1, "toolbar-buttons"], [4, "ngFor", "ngForOf"], [1, "page-placement", "margin-top"], ["mat-icon-button", "", "color", "primary", 1, "back-button", 3, "click"], [4, "ngIf"], ["mat-button", "", 1, "toolbar-button", 3, "color", "disabled", "click"], ["class", "button-icon", 4, "ngIf"], [1, "button-icon"], ["mat-stroked-button", "", 1, "toolbar-button", 3, "color", "disabled", "click"]], template: function TitleActionsToolbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelement(1, "div", 1);
                i0__namespace.ɵɵtemplate(2, TitleActionsToolbarComponent_button_2_Template, 3, 0, "button", 2);
                i0__namespace.ɵɵelementStart(3, "div", 3);
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "div", 4);
                i0__namespace.ɵɵprojection(6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "div", 5);
                i0__namespace.ɵɵtemplate(8, TitleActionsToolbarComponent_ng_container_8_Template, 3, 2, "ng-container", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(9, "mat-divider", 7);
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.backButton);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.title, " ");
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngForOf", ctx.buttons);
            }
        }, directives: [i1__namespace$1.NgIf, i1__namespace$1.NgForOf, i2__namespace$6.MatDivider, i2__namespace$1.MatButton, i2__namespace.MatIcon], styles: ["[_nghost-%COMP%]{display:block;width:100%;padding-top:8px}.title[_ngcontent-%COMP%]{font-weight:400;font-size:20px}.back-button[_ngcontent-%COMP%]{margin:auto 0}.actions-wrapper[_ngcontent-%COMP%]{margin-top:.22rem}.title-margin[_ngcontent-%COMP%]{margin:auto 0}.button-icon[_ngcontent-%COMP%]{font-size:1.2rem;padding-top:.1rem}.padding-bottom[_ngcontent-%COMP%]{padding-bottom:2rem}.margin-top[_ngcontent-%COMP%]{margin-top:.2rem}.margin-content[_ngcontent-%COMP%]{margin:auto}.toolbar-buttons[_ngcontent-%COMP%]{margin:auto 0}.toolbar-button[_ngcontent-%COMP%]{margin-left:.2rem}.toolbar-buttons[_ngcontent-%COMP%]   .toolbar-button[_ngcontent-%COMP%]:last-child{margin-right:20px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TitleActionsToolbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-title-actions-toolbar',
                        templateUrl: './title-actions-toolbar.component.html',
                        styleUrls: ['./title-actions-toolbar.component.scss'],
                    }]
            }], null, { buttons: [{
                    type: i0.Input
                }], backButton: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], back: [{
                    type: i0.Output
                }], selfClass: [{
                    type: i0.HostBinding,
                    args: ['class.lib-title-actions-toolbar']
                }] });
    })();

    var TitleActionsToolbarModule = /** @class */ (function () {
        function TitleActionsToolbarModule() {
        }
        return TitleActionsToolbarModule;
    }());
    TitleActionsToolbarModule.ɵfac = function TitleActionsToolbarModule_Factory(t) { return new (t || TitleActionsToolbarModule)(); };
    TitleActionsToolbarModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: TitleActionsToolbarModule });
    TitleActionsToolbarModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i2.MatIconModule, i2$6.MatDividerModule, i2$1.MatButtonModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TitleActionsToolbarModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TitleActionsToolbarComponent],
                        imports: [i1$1.CommonModule, i2.MatIconModule, i2$6.MatDividerModule, i2$1.MatButtonModule],
                        exports: [TitleActionsToolbarComponent],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(TitleActionsToolbarModule, { declarations: [TitleActionsToolbarComponent], imports: [i1$1.CommonModule, i2.MatIconModule, i2$6.MatDividerModule, i2$1.MatButtonModule], exports: [TitleActionsToolbarComponent] }); })();

    function generateConfig() {
        return {
            title: '',
            width: '100%',
            theme: exports.TABLE_THEME.FLAT,
            columns: [
                {
                    matHeaderCellDef: 'Status',
                    matColumnDef: 'status',
                    width: '40px',
                    value: new StatusValue({
                        fieldPhase: 'statusPhase',
                        fieldMessage: 'statusMessage',
                    }),
                },
                {
                    matHeaderCellDef: 'Type',
                    matColumnDef: 'type',
                    width: '150px',
                    value: new PropertyValue({
                        field: 'type',
                    }),
                },
                {
                    matHeaderCellDef: 'Last Transition Time',
                    matColumnDef: 'lastTransitionTime',
                    width: '160px',
                    value: new DateTimeValue({
                        field: 'lastTransitionTime',
                    }),
                },
                {
                    matHeaderCellDef: 'Reason',
                    matColumnDef: 'reason',
                    width: '150px',
                    value: new PropertyValue({
                        field: 'reason',
                    }),
                },
                {
                    matHeaderCellDef: 'Message',
                    matColumnDef: 'message',
                    minWidth: '150px',
                    value: new PropertyValue({
                        field: 'message',
                    }),
                },
            ],
        };
    }

    var ConditionsTableComponent = /** @class */ (function () {
        function ConditionsTableComponent() {
            this.conditionsPrv = [];
            this.config = generateConfig();
        }
        Object.defineProperty(ConditionsTableComponent.prototype, "title", {
            set: function (t) {
                this.config.title = t;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ConditionsTableComponent.prototype, "conditions", {
            get: function () {
                return this.conditionsPrv;
            },
            set: function (cs) {
                var e_1, _a;
                this.conditionsPrv = JSON.parse(JSON.stringify(cs));
                try {
                    // parse the status. It should be ready only if it was True
                    for (var _b = __values(this.conditionsPrv), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var condition = _c.value;
                        condition.statusPhase = exports.STATUS_TYPE.WARNING;
                        if (condition.status === 'True') {
                            condition.statusPhase = exports.STATUS_TYPE.READY;
                        }
                        condition.statusMessage = condition.status;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            },
            enumerable: false,
            configurable: true
        });
        ConditionsTableComponent.prototype.conditionsTrackByFn = function (index, c) {
            return c.type + "/" + c.lastTransitionTime;
        };
        return ConditionsTableComponent;
    }());
    ConditionsTableComponent.ɵfac = function ConditionsTableComponent_Factory(t) { return new (t || ConditionsTableComponent)(); };
    ConditionsTableComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ConditionsTableComponent, selectors: [["lib-conditions-table"]], inputs: { title: "title", conditions: "conditions" }, decls: 1, vars: 3, consts: [[3, "config", "data", "trackByFn"]], template: function ConditionsTableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "lib-resource-table", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("config", ctx.config)("data", ctx.conditions)("trackByFn", ctx.conditionsTrackByFn);
            }
        }, directives: [ResourceTableComponent], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ConditionsTableComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-conditions-table',
                        templateUrl: './conditions-table.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        styleUrls: [],
                    }]
            }], null, { title: [{
                    type: i0.Input
                }], conditions: [{
                    type: i0.Input
                }] });
    })();

    var ConditionsTableModule = /** @class */ (function () {
        function ConditionsTableModule() {
        }
        return ConditionsTableModule;
    }());
    ConditionsTableModule.ɵfac = function ConditionsTableModule_Factory(t) { return new (t || ConditionsTableModule)(); };
    ConditionsTableModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ConditionsTableModule });
    ConditionsTableModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, ResourceTableModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ConditionsTableModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ConditionsTableComponent],
                        imports: [i1$1.CommonModule, ResourceTableModule],
                        exports: [ConditionsTableComponent],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ConditionsTableModule, { declarations: [ConditionsTableComponent], imports: [i1$1.CommonModule, ResourceTableModule], exports: [ConditionsTableComponent] }); })();

    var _c0$1 = ["*"];
    var PanelComponent = /** @class */ (function () {
        function PanelComponent() {
            this.icon = 'info';
            this.color = 'primary';
        }
        return PanelComponent;
    }());
    PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
    PanelComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: PanelComponent, selectors: [["lib-panel"]], inputs: { icon: "icon", color: "color", message: "message" }, ngContentSelectors: _c0$1, decls: 6, vars: 3, consts: [[1, "panel-body", "flex"], [1, "panel-icon", 3, "color"], [1, "panel-message"]], template: function PanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵprojectionDef();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "mat-icon", 1);
                i0__namespace.ɵɵtext(2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "div", 2);
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵprojection(5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("color", ctx.color);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(ctx.icon);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.message, " ");
            }
        }, directives: [i2__namespace.MatIcon], styles: [".panel-body[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.05);border-radius:4px;padding:1px;display:flex}.panel-icon[_ngcontent-%COMP%]{display:inline-block;margin:16px 24px}.panel-message[_ngcontent-%COMP%]{flex-wrap:wrap;margin-top:auto;margin-bottom:auto;margin-right:1rem}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-panel',
                        templateUrl: './panel.component.html',
                        styleUrls: ['./panel.component.scss'],
                    }]
            }], null, { icon: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], message: [{
                    type: i0.Input
                }] });
    })();

    var PanelModule = /** @class */ (function () {
        function PanelModule() {
        }
        return PanelModule;
    }());
    PanelModule.ɵfac = function PanelModule_Factory(t) { return new (t || PanelModule)(); };
    PanelModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: PanelModule });
    PanelModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i2.MatIconModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PanelModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [PanelComponent],
                        imports: [i1$1.CommonModule, i2.MatIconModule],
                        exports: [PanelComponent],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(PanelModule, { declarations: [PanelComponent], imports: [i1$1.CommonModule, i2.MatIconModule], exports: [PanelComponent] }); })();

    var _c0 = ["spinnerWrapper"];
    function LoadingSpinnerComponent_mat_spinner_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "mat-spinner", 3);
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("diameter", ctx_r1.diameter);
        }
    }
    var _c1 = function (a0) { return { height: a0 }; };
    var LoadingSpinnerComponent = /** @class */ (function () {
        function LoadingSpinnerComponent() {
            this.diameter = 32;
            this.height = this.diameter + "px";
            this.initialized = false;
        }
        LoadingSpinnerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            if (!this.wrapper) {
                return;
            }
            setTimeout(function () {
                var offset = _this.wrapper.nativeElement.getBoundingClientRect().top;
                _this.height = "calc(100vh - " + offset + "px)";
                _this.initialized = true;
            });
        };
        return LoadingSpinnerComponent;
    }());
    LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
    LoadingSpinnerComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: LoadingSpinnerComponent, selectors: [["lib-loading-spinner"]], viewQuery: function LoadingSpinnerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.wrapper = _t.first);
            }
        }, inputs: { diameter: "diameter" }, decls: 3, vars: 4, consts: [[1, "spinner-wrapper", 3, "ngStyle"], ["spinnerWrapper", ""], [3, "diameter", 4, "ngIf"], [3, "diameter"]], template: function LoadingSpinnerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0, 1);
                i0__namespace.ɵɵtemplate(2, LoadingSpinnerComponent_mat_spinner_2_Template, 1, 1, "mat-spinner", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngStyle", i0__namespace.ɵɵpureFunction1(2, _c1, ctx.height));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.initialized);
            }
        }, directives: [i1__namespace$1.NgStyle, i1__namespace$1.NgIf, i2__namespace$4.MatSpinner], styles: [".spinner-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(LoadingSpinnerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-loading-spinner',
                        templateUrl: './loading-spinner.component.html',
                        styleUrls: ['./loading-spinner.component.scss'],
                    }]
            }], null, { diameter: [{
                    type: i0.Input
                }], wrapper: [{
                    type: i0.ViewChild,
                    args: ['spinnerWrapper']
                }] });
    })();

    var LoadingSpinnerModule = /** @class */ (function () {
        function LoadingSpinnerModule() {
        }
        return LoadingSpinnerModule;
    }());
    LoadingSpinnerModule.ɵfac = function LoadingSpinnerModule_Factory(t) { return new (t || LoadingSpinnerModule)(); };
    LoadingSpinnerModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: LoadingSpinnerModule });
    LoadingSpinnerModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i2$4.MatProgressSpinnerModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(LoadingSpinnerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [LoadingSpinnerComponent],
                        imports: [i1$1.CommonModule, i2$4.MatProgressSpinnerModule],
                        exports: [LoadingSpinnerComponent],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(LoadingSpinnerModule, { declarations: [LoadingSpinnerComponent], imports: [i1$1.CommonModule, i2$4.MatProgressSpinnerModule], exports: [LoadingSpinnerComponent] }); })();

    exports.DIALOG_RESP = void 0;
    (function (DIALOG_RESP) {
        DIALOG_RESP["CANCEL"] = "cancel";
        DIALOG_RESP["ACCEPT"] = "accept";
    })(exports.DIALOG_RESP || (exports.DIALOG_RESP = {}));

    function ConfirmDialogComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 7);
            i0__namespace.ɵɵlistener("click", function ConfirmDialogComponent_button_10_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.onAcceptClicked(); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("color", ctx_r0.data.confirmColor);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r0.data.accept.toUpperCase(), " ");
        }
    }
    function ConfirmDialogComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "button", 8);
            i0__namespace.ɵɵelementStart(1, "div", 9);
            i0__namespace.ɵɵelement(2, "mat-spinner", 10);
            i0__namespace.ɵɵelementStart(3, "p");
            i0__namespace.ɵɵtext(4);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵtextInterpolate(ctx_r1.data.applying);
        }
    }
    var ConfirmDialogComponent = /** @class */ (function () {
        function ConfirmDialogComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            this.DIALOG_RESP = exports.DIALOG_RESP;
            this.isApplying = false;
            this.applying$ = new rxjs.Subject();
        }
        ConfirmDialogComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.applying$.subscribe(function (b) {
                _this.isApplying = b;
            });
        };
        ConfirmDialogComponent.prototype.onAcceptClicked = function () {
            this.isApplying = true;
            this.applying$.next(true);
        };
        ConfirmDialogComponent.prototype.onCancelClicked = function () {
            this.dialogRef.close(exports.DIALOG_RESP.CANCEL);
        };
        return ConfirmDialogComponent;
    }());
    ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(i0__namespace.ɵɵdirectiveInject(i1__namespace$7.MatDialogRef), i0__namespace.ɵɵdirectiveInject(i1$7.MAT_DIALOG_DATA)); };
    ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ConfirmDialogComponent, selectors: [["lib-confirm-dialog"]], decls: 12, vars: 7, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "error"], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", 3, "color", "click", 4, "ngIf"], ["mat-button", "", "disabled", "", 4, "ngIf"], ["mat-button", "", 3, "color", "click"], ["mat-button", "", "disabled", ""], [1, "waiting-button-wrapper"], ["diameter", "16"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "h1", 0);
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "div", 1);
                i0__namespace.ɵɵelementStart(3, "p");
                i0__namespace.ɵɵtext(4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "p", 2);
                i0__namespace.ɵɵtext(6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "div", 3);
                i0__namespace.ɵɵelementStart(8, "button", 4);
                i0__namespace.ɵɵtext(9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(10, ConfirmDialogComponent_button_10_Template, 2, 2, "button", 5);
                i0__namespace.ɵɵtemplate(11, ConfirmDialogComponent_button_11_Template, 5, 1, "button", 6);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate(ctx.data.title);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵtextInterpolate(ctx.data.message);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵtextInterpolate(ctx.data.error);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("mat-dialog-close", ctx.DIALOG_RESP.CANCEL);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", ctx.data.cancel.toUpperCase(), " ");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.isApplying);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.isApplying);
            }
        }, directives: [i1__namespace$7.MatDialogTitle, i1__namespace$7.MatDialogContent, i1__namespace$7.MatDialogActions, i2__namespace$1.MatButton, i1__namespace$7.MatDialogClose, i1__namespace$1.NgIf, i2__namespace$4.MatSpinner], styles: [".waiting-button-wrapper[_ngcontent-%COMP%]{display:flex}.waiting-button-wrapper[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin:auto .2rem}.error[_ngcontent-%COMP%]{color:red}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ConfirmDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-confirm-dialog',
                        templateUrl: './dialog.component.html',
                        styleUrls: ['./dialog.component.scss'],
                    }]
            }], function () {
            return [{ type: i1__namespace$7.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$7.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    var ConfirmDialogModule = /** @class */ (function () {
        function ConfirmDialogModule() {
        }
        return ConfirmDialogModule;
    }());
    ConfirmDialogModule.ɵfac = function ConfirmDialogModule_Factory(t) { return new (t || ConfirmDialogModule)(); };
    ConfirmDialogModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ConfirmDialogModule });
    ConfirmDialogModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.CommonModule,
                i1$7.MatDialogModule,
                i2$1.MatButtonModule,
                i2$4.MatProgressSpinnerModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ConfirmDialogModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ConfirmDialogComponent],
                        imports: [
                            i1$1.CommonModule,
                            i1$7.MatDialogModule,
                            i2$1.MatButtonModule,
                            i2$4.MatProgressSpinnerModule,
                        ],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ConfirmDialogModule, { declarations: [ConfirmDialogComponent], imports: [i1$1.CommonModule,
                i1$7.MatDialogModule,
                i2$1.MatButtonModule,
                i2$4.MatProgressSpinnerModule] });
    })();

    var KubeflowModule = /** @class */ (function () {
        function KubeflowModule() {
        }
        return KubeflowModule;
    }());
    KubeflowModule.ɵfac = function KubeflowModule_Factory(t) { return new (t || KubeflowModule)(); };
    KubeflowModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: KubeflowModule });
    KubeflowModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            { provide: i1$2.HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
        ], imports: [[i1$1.CommonModule, i1$2.HttpClientModule, i1$2.HttpClientXsrfModule], NamespaceSelectModule,
            ResourceTableModule,
            SnackBarModule,
            FormModule,
            PopoverModule,
            ConfirmDialogModule,
            i1$2.HttpClientModule,
            i1$2.HttpClientXsrfModule,
            TitleActionsToolbarModule,
            ConditionsTableModule,
            DetailsListModule,
            DateTimeModule,
            PanelModule,
            LoadingSpinnerModule] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(KubeflowModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        exports: [
                            NamespaceSelectModule,
                            ResourceTableModule,
                            SnackBarModule,
                            FormModule,
                            PopoverModule,
                            ConfirmDialogModule,
                            i1$2.HttpClientModule,
                            i1$2.HttpClientXsrfModule,
                            TitleActionsToolbarModule,
                            ConditionsTableModule,
                            DetailsListModule,
                            DateTimeModule,
                            PanelModule,
                            LoadingSpinnerModule,
                        ],
                        imports: [i1$1.CommonModule, i1$2.HttpClientModule, i1$2.HttpClientXsrfModule],
                        providers: [
                            { provide: i1$2.HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
                        ],
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(KubeflowModule, { imports: [i1$1.CommonModule, i1$2.HttpClientModule, i1$2.HttpClientXsrfModule], exports: [NamespaceSelectModule,
                ResourceTableModule,
                SnackBarModule,
                FormModule,
                PopoverModule,
                ConfirmDialogModule,
                i1$2.HttpClientModule,
                i1$2.HttpClientXsrfModule,
                TitleActionsToolbarModule,
                ConditionsTableModule,
                DetailsListModule,
                DateTimeModule,
                PanelModule,
                LoadingSpinnerModule] });
    })();

    var RokService = /** @class */ (function (_super) {
        __extends(RokService, _super);
        function RokService(http, dialog) {
            var _this = _super.call(this, http, dialog) || this;
            _this.http = http;
            _this.dialog = dialog;
            _this.csrfToken = '';
            return _this;
        }
        RokService.prototype.initCSRF = function () {
            var _this = this;
            if (this.csrfToken.length !== 0) {
                return;
            }
            console.log('Setting up CSRF protection for Rok');
            this.http
                .get('/rok/services/settings')
                .pipe(operators.catchError(function (error) { return _this.handleError(error, true); }), operators.map(function (settings) {
                console.log('Got back Rok settings:');
                console.log(settings);
                console.log("Using token: " + settings.static_token);
                if (settings.static_token === null) {
                    console.warn("Using null token for CSRF protection!");
                }
                _this.csrfToken = settings.static_token;
            }))
                .subscribe();
        };
        RokService.prototype.rokRespIsValid = function (resp) {
            var rokUrl = resp.headers.get('X-Object-Rok-URL');
            var objectUrl = resp.headers.get('X-Object-URL');
            if (rokUrl === null || rokUrl !== objectUrl) {
                throw new ErrorEvent('Bad Rok URL', {
                    message: "'" + resp.url + "' is not a valid Rok URL",
                });
            }
        };
        RokService.prototype.getObjectMetadata = function (url, showSnackBar) {
            var _this = this;
            if (showSnackBar === void 0) { showSnackBar = true; }
            console.log("Making a HEAD to '" + url + " to get Object Metadata");
            return this.http
                .head(url, {
                headers: new i1$2.HttpHeaders({
                    'X-Auth-Token': this.csrfToken,
                }),
                observe: 'response',
            })
                .pipe(operators.tap(function (resp) { return _this.rokRespIsValid(resp); }), operators.catchError(function (error) { return _this.handleError(error, showSnackBar); }), operators.map(function (resp) {
                console.log("Metadata for object in url: " + url);
                console.log(resp.headers);
                return resp.headers;
            }));
        };
        RokService.prototype.getRokManagedStorageClasses = function (showSnackBar) {
            var _this = this;
            if (showSnackBar === void 0) { showSnackBar = true; }
            // Get existing PVCs in a namespace
            var url = "api/rok/storageclasses";
            return this.http.get(url).pipe(operators.catchError(function (error) { return _this.handleError(error, showSnackBar); }), operators.map(function (data) {
                return data.storageClasses;
            }));
        };
        return RokService;
    }(BackendService));
    RokService.ɵfac = function RokService_Factory(t) { return new (t || RokService)(i0__namespace.ɵɵinject(i1__namespace$2.HttpClient), i0__namespace.ɵɵinject(SnackBarService)); };
    RokService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: RokService, factory: RokService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RokService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return [{ type: i1__namespace$2.HttpClient }, { type: SnackBarService }]; }, null);
    })();

    var ConfirmDialogService = /** @class */ (function () {
        function ConfirmDialogService(dialog) {
            this.dialog = dialog;
        }
        ConfirmDialogService.prototype.open = function (rsrcName, config) {
            return this.dialog.open(ConfirmDialogComponent, {
                width: config.width || 'fit-content',
                data: config,
            });
        };
        return ConfirmDialogService;
    }());
    ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(i0__namespace.ɵɵinject(i1__namespace$7.MatDialog)); };
    ConfirmDialogService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: ConfirmDialogService, factory: ConfirmDialogService.ɵfac, providedIn: ConfirmDialogModule });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ConfirmDialogService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: ConfirmDialogModule,
                    }]
            }], function () { return [{ type: i1__namespace$7.MatDialog }]; }, null);
    })();

    function HeadingSubheadingRowComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵproperty("matTooltip", ctx_r1.tooltip);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r1.subHeading, " ");
        }
    }
    function HeadingSubheadingRowComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 1);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵtemplate(2, HeadingSubheadingRowComponent_div_0_div_2_Template, 2, 2, "div", 2);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r0.heading, " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.subHeading);
        }
    }
    var HeadingSubheadingRowComponent = /** @class */ (function () {
        function HeadingSubheadingRowComponent() {
            this.selfClass = true;
        }
        return HeadingSubheadingRowComponent;
    }());
    HeadingSubheadingRowComponent.ɵfac = function HeadingSubheadingRowComponent_Factory(t) { return new (t || HeadingSubheadingRowComponent)(); };
    HeadingSubheadingRowComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: HeadingSubheadingRowComponent, selectors: [["lib-heading-row"]], hostVars: 2, hostBindings: function HeadingSubheadingRowComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0__namespace.ɵɵclassProp("lib-heading-row", ctx.selfClass);
            }
        }, inputs: { heading: "heading", subHeading: "subHeading", tooltip: "tooltip" }, decls: 1, vars: 1, consts: [["class", "heading", 4, "ngIf"], [1, "heading"], ["class", "sub-heading", 3, "matTooltip", 4, "ngIf"], [1, "sub-heading", 3, "matTooltip"]], template: function HeadingSubheadingRowComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, HeadingSubheadingRowComponent_div_0_Template, 3, 2, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.heading);
            }
        }, directives: [i1__namespace$1.NgIf, i3__namespace$1.MatTooltip], styles: ["[_nghost-%COMP%]{display:block}.heading[_ngcontent-%COMP%]{font-size:20px;display:flex;margin:0 0 16px}.sub-heading[_ngcontent-%COMP%]{padding-left:8px;color:rgba(0,0,0,.66)}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HeadingSubheadingRowComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-heading-row',
                        templateUrl: './heading-subheading-row.component.html',
                        styleUrls: ['./heading-subheading-row.component.scss'],
                    }]
            }], null, { heading: [{
                    type: i0.Input
                }], subHeading: [{
                    type: i0.Input
                }], tooltip: [{
                    type: i0.Input
                }], selfClass: [{
                    type: i0.HostBinding,
                    args: ['class.lib-heading-row']
                }] });
    })();

    var HeadingSubheadingRowModule = /** @class */ (function () {
        function HeadingSubheadingRowModule() {
        }
        return HeadingSubheadingRowModule;
    }());
    HeadingSubheadingRowModule.ɵfac = function HeadingSubheadingRowModule_Factory(t) { return new (t || HeadingSubheadingRowModule)(); };
    HeadingSubheadingRowModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: HeadingSubheadingRowModule });
    HeadingSubheadingRowModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1$1.CommonModule, i3$1.MatTooltipModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HeadingSubheadingRowModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [HeadingSubheadingRowComponent],
                        imports: [i1$1.CommonModule, i3$1.MatTooltipModule],
                        exports: [HeadingSubheadingRowComponent],
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(HeadingSubheadingRowModule, { declarations: [HeadingSubheadingRowComponent], imports: [i1$1.CommonModule, i3$1.MatTooltipModule], exports: [HeadingSubheadingRowComponent] }); })();

    var ToolbarButton = /** @class */ (function () {
        function ToolbarButton(config) {
            this.defaults = {
                icon: '',
                text: '',
                disabled: false,
                color: 'primary',
                raised: true,
                fn: function () { },
            };
            var _a = Object.assign(Object.assign({}, this.defaults), config), icon = _a.icon, text = _a.text, disabled = _a.disabled, color = _a.color, stroked = _a.stroked, raised = _a.raised, fn = _a.fn;
            this.icon = icon;
            this.text = text;
            this.disabled = disabled;
            this.color = color;
            this.raised = raised;
            this.fn = fn;
            if (stroked) {
                this.raised = false;
                this.stroked = true;
            }
        }
        return ToolbarButton;
    }());

    function updateNonDirtyControl(control, value) {
        if (!control.dirty) {
            control.setValue(value);
        }
    }
    function updateControlNonNullValue(control, value, msg) {
        if (msg === void 0) { msg = 'Can not update control with value null'; }
        if (value === null) {
            console.warn(msg);
            return;
        }
        control.setValue(value);
        control.markAsDirty();
    }

    /** Error when invalid control is dirty, touched, or submitted. */
    var ImmediateErrorStateMatcher = /** @class */ (function () {
        function ImmediateErrorStateMatcher() {
        }
        ImmediateErrorStateMatcher.prototype.isErrorState = function (control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control &&
                control.invalid &&
                (control.dirty || control.touched || isSubmitted));
        };
        return ImmediateErrorStateMatcher;
    }());

    function getCondition(obj, condition) {
        var e_1, _a;
        var cs = [];
        try {
            cs = obj.status.conditions;
        }
        catch (err) {
            console.warn('No Conditions are found');
            return undefined;
        }
        if (!cs) {
            return undefined;
        }
        try {
            for (var cs_1 = __values(cs), cs_1_1 = cs_1.next(); !cs_1_1.done; cs_1_1 = cs_1.next()) {
                var c = cs_1_1.value;
                if (c.type !== condition) {
                    continue;
                }
                return c;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (cs_1_1 && !cs_1_1.done && (_a = cs_1.return)) _a.call(cs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }

    /*
     * Public API Surface of kubeflow
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ActionButtonValue = ActionButtonValue;
    exports.ActionEvent = ActionEvent;
    exports.ActionIconValue = ActionIconValue;
    exports.ActionListValue = ActionListValue;
    exports.AdvancedOptionsComponent = AdvancedOptionsComponent;
    exports.BackendService = BackendService;
    exports.ChipsListValue = ChipsListValue;
    exports.ComponentValue = ComponentValue;
    exports.ConditionsTableComponent = ConditionsTableComponent;
    exports.ConditionsTableModule = ConditionsTableModule;
    exports.ConfirmDialogComponent = ConfirmDialogComponent;
    exports.ConfirmDialogModule = ConfirmDialogModule;
    exports.ConfirmDialogService = ConfirmDialogService;
    exports.DEBOUNCE_TIME = DEBOUNCE_TIME;
    exports.DateTimeComponent = DateTimeComponent;
    exports.DateTimeModule = DateTimeModule;
    exports.DateTimeService = DateTimeService;
    exports.DateTimeValue = DateTimeValue;
    exports.DetailsListComponent = DetailsListComponent;
    exports.DetailsListItemComponent = DetailsListItemComponent;
    exports.DetailsListModule = DetailsListModule;
    exports.ExponentialBackoff = ExponentialBackoff;
    exports.FormModule = FormModule;
    exports.FormSectionComponent = FormSectionComponent;
    exports.HeadingSubheadingRowComponent = HeadingSubheadingRowComponent;
    exports.HeadingSubheadingRowModule = HeadingSubheadingRowModule;
    exports.ImmediateErrorStateMatcher = ImmediateErrorStateMatcher;
    exports.KubeflowModule = KubeflowModule;
    exports.LoadingSpinnerComponent = LoadingSpinnerComponent;
    exports.LoadingSpinnerModule = LoadingSpinnerModule;
    exports.MAX_NAME_LENGTH = MAX_NAME_LENGTH;
    exports.MenuValue = MenuValue;
    exports.NameInputComponent = NameInputComponent;
    exports.NameNamespaceInputsComponent = NameNamespaceInputsComponent;
    exports.NamespaceSelectComponent = NamespaceSelectComponent;
    exports.NamespaceSelectModule = NamespaceSelectModule;
    exports.NamespaceService = NamespaceService;
    exports.PanelComponent = PanelComponent;
    exports.PanelModule = PanelModule;
    exports.PopoverComponent = PopoverComponent;
    exports.PopoverDirective = PopoverDirective;
    exports.PopoverModule = PopoverModule;
    exports.PopoverTemplatePortal = PopoverTemplatePortal;
    exports.PositiveNumberInputComponent = PositiveNumberInputComponent;
    exports.PropertyValue = PropertyValue;
    exports.ResourceTableComponent = ResourceTableComponent;
    exports.ResourceTableModule = ResourceTableModule;
    exports.RokService = RokService;
    exports.RokUrlInputComponent = RokUrlInputComponent;
    exports.SnackBarModule = SnackBarModule;
    exports.SnackBarService = SnackBarService;
    exports.StatusValue = StatusValue;
    exports.StepInfoComponent = StepInfoComponent;
    exports.SubmitBarComponent = SubmitBarComponent;
    exports.TemplateValue = TemplateValue;
    exports.TitleActionsToolbarComponent = TitleActionsToolbarComponent;
    exports.TitleActionsToolbarModule = TitleActionsToolbarModule;
    exports.ToDatePipe = ToDatePipe;
    exports.ToolbarButton = ToolbarButton;
    exports.cpuValidator = cpuValidator;
    exports.defaultDateOptions = defaultDateOptions;
    exports.defaultTimeOptions = defaultTimeOptions;
    exports.dns1035Validator = dns1035Validator;
    exports.dns1123Validator = dns1123Validator;
    exports.getCondition = getCondition;
    exports.getExistingNameValidator = getExistingNameValidator;
    exports.getNameAsyncValidators = getNameAsyncValidators;
    exports.getNameError = getNameError;
    exports.getNameSyncValidators = getNameSyncValidators;
    exports.getRokUrlError = getRokUrlError;
    exports.memoryValidator = memoryValidator;
    exports.mergeAndDebounceValidators = mergeAndDebounceValidators;
    exports.rokUrlValidator = rokUrlValidator;
    exports.updateControlNonNullValue = updateControlNonNullValue;
    exports.updateNonDirtyControl = updateNonDirtyControl;
    exports.volSizeValidator = volSizeValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=kubeflow.umd.js.map
