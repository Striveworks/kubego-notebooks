(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('@angular/cdk/bidi'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk-experimental/combobox', ['exports', '@angular/core', '@angular/cdk/overlay', '@angular/cdk/portal', '@angular/cdk/bidi', '@angular/cdk/coercion', '@angular/cdk/keycodes', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.cdkExperimental = global.ng.cdkExperimental || {}, global.ng.cdkExperimental.combobox = {}), global.ng.core, global.ng.cdk.overlay, global.ng.cdk.portal, global.ng.cdk.bidi, global.ng.cdk.coercion, global.ng.cdk.keycodes, global.rxjs));
}(this, (function (exports, core, overlay, portal, bidi, coercion, keycodes, rxjs) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var allowedOpenActions = ['focus', 'click', 'downKey', 'toggle'];
    var CdkCombobox = /** @class */ (function () {
        function CdkCombobox(_elementRef, _overlay, _viewContainerRef, _directionality) {
            this._elementRef = _elementRef;
            this._overlay = _overlay;
            this._viewContainerRef = _viewContainerRef;
            this._directionality = _directionality;
            this._disabled = false;
            this._openActions = ['click'];
            this._autoSetText = true;
            this.opened = new core.EventEmitter();
            this.closed = new core.EventEmitter();
            this.panelValueChanged = new core.EventEmitter();
            this.contentId = '';
        }
        Object.defineProperty(CdkCombobox.prototype, "panel", {
            get: function () { return this._panel; },
            set: function (panel) { this._panel = panel; },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkCombobox.prototype, "disabled", {
            get: function () { return this._disabled; },
            set: function (value) { this._disabled = coercion.coerceBooleanProperty(value); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkCombobox.prototype, "openActions", {
            get: function () {
                return this._openActions;
            },
            set: function (action) {
                this._openActions = this._coerceOpenActionProperty(action);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkCombobox.prototype, "autoSetText", {
            /** Whether the textContent is automatically updated upon change of the combobox value. */
            get: function () { return this._autoSetText; },
            set: function (value) { this._autoSetText = coercion.coerceBooleanProperty(value); },
            enumerable: false,
            configurable: true
        });
        CdkCombobox.prototype.ngAfterContentInit = function () {
            var _this = this;
            var _a, _b, _c;
            (_a = this._panel) === null || _a === void 0 ? void 0 : _a.valueUpdated.subscribe(function (data) {
                _this._setComboboxValue(data);
                _this.close();
            });
            (_b = this._panel) === null || _b === void 0 ? void 0 : _b.contentIdUpdated.subscribe(function (id) {
                _this.contentId = id;
            });
            (_c = this._panel) === null || _c === void 0 ? void 0 : _c.contentTypeUpdated.subscribe(function (type) {
                _this.contentType = type;
            });
        };
        CdkCombobox.prototype.ngOnDestroy = function () {
            if (this._overlayRef) {
                this._overlayRef.dispose();
            }
            this.opened.complete();
            this.closed.complete();
            this.panelValueChanged.complete();
        };
        CdkCombobox.prototype._keydown = function (event) {
            var _a;
            var keyCode = event.keyCode;
            if (keyCode === keycodes.DOWN_ARROW) {
                if (this.isOpen()) {
                    (_a = this._panel) === null || _a === void 0 ? void 0 : _a.focusContent();
                }
                else if (this._openActions.indexOf('downKey') !== -1) {
                    this.open();
                }
            }
            else if (keyCode === keycodes.ENTER) {
                if (this._openActions.indexOf('toggle') !== -1) {
                    this.toggle();
                }
                else if (this._openActions.indexOf('click') !== -1) {
                    this.open();
                }
            }
            else if (keyCode === keycodes.ESCAPE) {
                event.preventDefault();
                this.close();
            }
            else if (keyCode === keycodes.TAB) {
                this.close();
            }
        };
        /** Handles click or focus interactions. */
        CdkCombobox.prototype._handleInteractions = function (interaction) {
            if (interaction === 'click') {
                if (this._openActions.indexOf('toggle') !== -1) {
                    this.toggle();
                }
                else if (this._openActions.indexOf('click') !== -1) {
                    this.open();
                }
            }
            else if (interaction === 'focus') {
                if (this._openActions.indexOf('focus') !== -1) {
                    this.open();
                }
            }
        };
        /** Given a click in the document, determines if the click was inside a combobox. */
        CdkCombobox.prototype._attemptClose = function (event) {
            if (this.isOpen()) {
                var target = event.composedPath ? event.composedPath()[0] : event.target;
                while (target instanceof Element) {
                    if (target.className.indexOf('cdk-combobox') !== -1) {
                        return;
                    }
                    target = target.parentElement;
                }
            }
            this.close();
        };
        /** Toggles the open state of the panel. */
        CdkCombobox.prototype.toggle = function () {
            if (this.hasPanel()) {
                this.isOpen() ? this.close() : this.open();
            }
        };
        /** If the combobox is closed and not disabled, opens the panel. */
        CdkCombobox.prototype.open = function () {
            var _a;
            if (!this.isOpen() && !this.disabled) {
                this.opened.next();
                this._overlayRef = this._overlayRef || this._overlay.create(this._getOverlayConfig());
                this._overlayRef.attach(this._getPanelContent());
                if (!this._isTextTrigger()) {
                    (_a = this._panel) === null || _a === void 0 ? void 0 : _a.focusContent();
                }
            }
        };
        /** If the combobox is open and not disabled, closes the panel. */
        CdkCombobox.prototype.close = function () {
            if (this.isOpen() && !this.disabled) {
                this.closed.next();
                this._overlayRef.detach();
            }
        };
        /** Returns true if panel is currently opened. */
        CdkCombobox.prototype.isOpen = function () {
            return this._overlayRef ? this._overlayRef.hasAttached() : false;
        };
        /** Returns true if combobox has a child panel. */
        CdkCombobox.prototype.hasPanel = function () {
            return !!this.panel;
        };
        CdkCombobox.prototype._getTabIndex = function () {
            return this.disabled ? null : '0';
        };
        CdkCombobox.prototype._setComboboxValue = function (value) {
            var valueChanged = (this.value !== value);
            this.value = value;
            if (valueChanged) {
                this.panelValueChanged.emit(coercion.coerceArray(value));
                if (this._autoSetText) {
                    this._setTextContent(value);
                }
            }
        };
        CdkCombobox.prototype._setTextContent = function (content) {
            var contentArray = coercion.coerceArray(content);
            this._elementRef.nativeElement.textContent = contentArray.join(' ');
        };
        CdkCombobox.prototype._isTextTrigger = function () {
            // TODO: Should check if the trigger is contenteditable.
            var tagName = this._elementRef.nativeElement.tagName.toLowerCase();
            return tagName === 'input' || tagName === 'textarea' ? true : false;
        };
        CdkCombobox.prototype._getOverlayConfig = function () {
            return new overlay.OverlayConfig({
                positionStrategy: this._getOverlayPositionStrategy(),
                scrollStrategy: this._overlay.scrollStrategies.block(),
                direction: this._directionality,
            });
        };
        CdkCombobox.prototype._getOverlayPositionStrategy = function () {
            return this._overlay
                .position()
                .flexibleConnectedTo(this._elementRef)
                .withPositions(this._getOverlayPositions());
        };
        CdkCombobox.prototype._getOverlayPositions = function () {
            return [
                { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
                { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' },
                { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
                { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' },
            ];
        };
        CdkCombobox.prototype._getPanelContent = function () {
            var _a, _b;
            var hasPanelChanged = ((_a = this._panel) === null || _a === void 0 ? void 0 : _a._templateRef) !== ((_b = this._panelContent) === null || _b === void 0 ? void 0 : _b.templateRef);
            if (this._panel && (!this._panel || hasPanelChanged)) {
                this._panelContent = new portal.TemplatePortal(this._panel._templateRef, this._viewContainerRef);
            }
            return this._panelContent;
        };
        CdkCombobox.prototype._coerceOpenActionProperty = function (input) {
            var actions = typeof input === 'string' ? input.trim().split(/[ ,]+/) : input;
            if ((typeof ngDevMode === 'undefined' || ngDevMode) &&
                actions.some(function (a) { return allowedOpenActions.indexOf(a) === -1; })) {
                throw Error(input + " is not a support open action for CdkCombobox");
            }
            return actions;
        };
        return CdkCombobox;
    }());
    CdkCombobox.decorators = [
        { type: core.Directive, args: [{
                    selector: '[cdkCombobox]',
                    exportAs: 'cdkCombobox',
                    host: {
                        'role': 'combobox',
                        'class': 'cdk-combobox',
                        '(click)': '_handleInteractions("click")',
                        '(focus)': '_handleInteractions("focus")',
                        '(keydown)': '_keydown($event)',
                        '(document:click)': '_attemptClose($event)',
                        '[attr.aria-disabled]': 'disabled',
                        '[attr.aria-owns]': 'contentId',
                        '[attr.aria-haspopup]': 'contentType',
                        '[attr.aria-expanded]': 'isOpen()',
                        '[attr.tabindex]': '_getTabIndex()'
                    }
                },] }
    ];
    CdkCombobox.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: overlay.Overlay },
        { type: core.ViewContainerRef },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    CdkCombobox.propDecorators = {
        panel: [{ type: core.Input, args: ['cdkComboboxTriggerFor',] }],
        value: [{ type: core.Input }],
        disabled: [{ type: core.Input }],
        openActions: [{ type: core.Input }],
        autoSetText: [{ type: core.Input }],
        opened: [{ type: core.Output, args: ['comboboxPanelOpened',] }],
        closed: [{ type: core.Output, args: ['comboboxPanelClosed',] }],
        panelValueChanged: [{ type: core.Output, args: ['panelValueChanged',] }]
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var CdkComboboxPanel = /** @class */ (function () {
        function CdkComboboxPanel(_templateRef) {
            this._templateRef = _templateRef;
            this.valueUpdated = new rxjs.Subject();
            this.contentIdUpdated = new rxjs.Subject();
            this.contentTypeUpdated = new rxjs.Subject();
            this.contentId = '';
        }
        /** Tells the parent combobox to close the panel and sends back the content value. */
        CdkComboboxPanel.prototype.closePanel = function (data) {
            this.valueUpdated.next(data || []);
        };
        // TODO: instead of using a focus function, potentially use cdk/a11y focus trapping
        CdkComboboxPanel.prototype.focusContent = function () {
            var _a;
            // TODO: Use an injected document here
            (_a = document.getElementById(this.contentId)) === null || _a === void 0 ? void 0 : _a.focus();
        };
        /** Registers the content's id and the content type with the panel. */
        CdkComboboxPanel.prototype._registerContent = function (contentId, contentType) {
            // If content has already been registered, no further contentIds are registered.
            if (this.contentType && this.contentType !== contentType) {
                return;
            }
            this.contentId = contentId;
            if (contentType !== 'listbox' && contentType !== 'dialog') {
                throw Error('CdkComboboxPanel currently only supports listbox or dialog content.');
            }
            this.contentType = contentType;
            this.contentIdUpdated.next(this.contentId);
            this.contentTypeUpdated.next(this.contentType);
        };
        return CdkComboboxPanel;
    }());
    CdkComboboxPanel.decorators = [
        { type: core.Directive, args: [{
                    host: {
                        'class': 'cdk-combobox-panel'
                    },
                    selector: 'ng-template[cdkComboboxPanel]',
                    exportAs: 'cdkComboboxPanel',
                },] }
    ];
    CdkComboboxPanel.ctorParameters = function () { return [
        { type: core.TemplateRef }
    ]; };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var PANEL = new core.InjectionToken('CdkComboboxPanel');
    var nextId = 0;
    var CdkComboboxPopup = /** @class */ (function () {
        function CdkComboboxPopup(_elementRef, _parentPanel) {
            this._elementRef = _elementRef;
            this._parentPanel = _parentPanel;
            this._role = 'dialog';
            this.id = "cdk-combobox-popup-" + nextId++;
        }
        Object.defineProperty(CdkComboboxPopup.prototype, "role", {
            get: function () {
                return this._role;
            },
            set: function (value) {
                this._role = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkComboboxPopup.prototype, "firstFocus", {
            get: function () {
                return this._firstFocusElement;
            },
            set: function (id) {
                this._firstFocusElement = id;
            },
            enumerable: false,
            configurable: true
        });
        CdkComboboxPopup.prototype.ngOnInit = function () {
            this.registerWithPanel();
        };
        CdkComboboxPopup.prototype.registerWithPanel = function () {
            if (this._parentPanel === null || this._parentPanel === undefined) {
                this._explicitPanel._registerContent(this.id, this._role);
            }
            else {
                this._parentPanel._registerContent(this.id, this._role);
            }
        };
        CdkComboboxPopup.prototype.focusFirstElement = function () {
            if (this._firstFocusElement) {
                this._firstFocusElement.focus();
            }
            else {
                this._elementRef.nativeElement.focus();
            }
        };
        return CdkComboboxPopup;
    }());
    CdkComboboxPopup.decorators = [
        { type: core.Directive, args: [{
                    selector: '[cdkComboboxPopup]',
                    exportAs: 'cdkComboboxPopup',
                    host: {
                        'class': 'cdk-combobox-popup',
                        '[attr.role]': 'role',
                        '[id]': 'id',
                        'tabindex': '-1',
                        '(focus)': 'focusFirstElement()'
                    }
                },] }
    ];
    CdkComboboxPopup.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: CdkComboboxPanel, decorators: [{ type: core.Optional }, { type: core.Inject, args: [PANEL,] }] }
    ]; };
    CdkComboboxPopup.propDecorators = {
        role: [{ type: core.Input }],
        firstFocus: [{ type: core.Input }],
        id: [{ type: core.Input }],
        _explicitPanel: [{ type: core.Input, args: ['parentPanel',] }]
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var EXPORTED_DECLARATIONS = [CdkCombobox, CdkComboboxPanel, CdkComboboxPopup];
    var CdkComboboxModule = /** @class */ (function () {
        function CdkComboboxModule() {
        }
        return CdkComboboxModule;
    }());
    CdkComboboxModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [overlay.OverlayModule],
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

    exports.CdkCombobox = CdkCombobox;
    exports.CdkComboboxModule = CdkComboboxModule;
    exports.CdkComboboxPanel = CdkComboboxPanel;
    exports.CdkComboboxPopup = CdkComboboxPopup;
    exports.PANEL = PANEL;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-experimental-combobox.umd.js.map
