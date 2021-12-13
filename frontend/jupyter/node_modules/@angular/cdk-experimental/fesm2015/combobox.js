import { EventEmitter, Directive, ElementRef, ViewContainerRef, Optional, Input, Output, TemplateRef, InjectionToken, Inject, NgModule } from '@angular/core';
import { OverlayConfig, Overlay, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directionality } from '@angular/cdk/bidi';
import { coerceBooleanProperty, coerceArray } from '@angular/cdk/coercion';
import { DOWN_ARROW, ENTER, ESCAPE, TAB } from '@angular/cdk/keycodes';
import { Subject } from 'rxjs';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const allowedOpenActions = ['focus', 'click', 'downKey', 'toggle'];
class CdkCombobox {
    constructor(_elementRef, _overlay, _viewContainerRef, _directionality) {
        this._elementRef = _elementRef;
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._directionality = _directionality;
        this._disabled = false;
        this._openActions = ['click'];
        this._autoSetText = true;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.panelValueChanged = new EventEmitter();
        this.contentId = '';
    }
    get panel() { return this._panel; }
    set panel(panel) { this._panel = panel; }
    get disabled() { return this._disabled; }
    set disabled(value) { this._disabled = coerceBooleanProperty(value); }
    get openActions() {
        return this._openActions;
    }
    set openActions(action) {
        this._openActions = this._coerceOpenActionProperty(action);
    }
    /** Whether the textContent is automatically updated upon change of the combobox value. */
    get autoSetText() { return this._autoSetText; }
    set autoSetText(value) { this._autoSetText = coerceBooleanProperty(value); }
    ngAfterContentInit() {
        var _a, _b, _c;
        (_a = this._panel) === null || _a === void 0 ? void 0 : _a.valueUpdated.subscribe(data => {
            this._setComboboxValue(data);
            this.close();
        });
        (_b = this._panel) === null || _b === void 0 ? void 0 : _b.contentIdUpdated.subscribe(id => {
            this.contentId = id;
        });
        (_c = this._panel) === null || _c === void 0 ? void 0 : _c.contentTypeUpdated.subscribe(type => {
            this.contentType = type;
        });
    }
    ngOnDestroy() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        this.opened.complete();
        this.closed.complete();
        this.panelValueChanged.complete();
    }
    _keydown(event) {
        var _a;
        const { keyCode } = event;
        if (keyCode === DOWN_ARROW) {
            if (this.isOpen()) {
                (_a = this._panel) === null || _a === void 0 ? void 0 : _a.focusContent();
            }
            else if (this._openActions.indexOf('downKey') !== -1) {
                this.open();
            }
        }
        else if (keyCode === ENTER) {
            if (this._openActions.indexOf('toggle') !== -1) {
                this.toggle();
            }
            else if (this._openActions.indexOf('click') !== -1) {
                this.open();
            }
        }
        else if (keyCode === ESCAPE) {
            event.preventDefault();
            this.close();
        }
        else if (keyCode === TAB) {
            this.close();
        }
    }
    /** Handles click or focus interactions. */
    _handleInteractions(interaction) {
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
    }
    /** Given a click in the document, determines if the click was inside a combobox. */
    _attemptClose(event) {
        if (this.isOpen()) {
            let target = event.composedPath ? event.composedPath()[0] : event.target;
            while (target instanceof Element) {
                if (target.className.indexOf('cdk-combobox') !== -1) {
                    return;
                }
                target = target.parentElement;
            }
        }
        this.close();
    }
    /** Toggles the open state of the panel. */
    toggle() {
        if (this.hasPanel()) {
            this.isOpen() ? this.close() : this.open();
        }
    }
    /** If the combobox is closed and not disabled, opens the panel. */
    open() {
        var _a;
        if (!this.isOpen() && !this.disabled) {
            this.opened.next();
            this._overlayRef = this._overlayRef || this._overlay.create(this._getOverlayConfig());
            this._overlayRef.attach(this._getPanelContent());
            if (!this._isTextTrigger()) {
                (_a = this._panel) === null || _a === void 0 ? void 0 : _a.focusContent();
            }
        }
    }
    /** If the combobox is open and not disabled, closes the panel. */
    close() {
        if (this.isOpen() && !this.disabled) {
            this.closed.next();
            this._overlayRef.detach();
        }
    }
    /** Returns true if panel is currently opened. */
    isOpen() {
        return this._overlayRef ? this._overlayRef.hasAttached() : false;
    }
    /** Returns true if combobox has a child panel. */
    hasPanel() {
        return !!this.panel;
    }
    _getTabIndex() {
        return this.disabled ? null : '0';
    }
    _setComboboxValue(value) {
        const valueChanged = (this.value !== value);
        this.value = value;
        if (valueChanged) {
            this.panelValueChanged.emit(coerceArray(value));
            if (this._autoSetText) {
                this._setTextContent(value);
            }
        }
    }
    _setTextContent(content) {
        const contentArray = coerceArray(content);
        this._elementRef.nativeElement.textContent = contentArray.join(' ');
    }
    _isTextTrigger() {
        // TODO: Should check if the trigger is contenteditable.
        const tagName = this._elementRef.nativeElement.tagName.toLowerCase();
        return tagName === 'input' || tagName === 'textarea' ? true : false;
    }
    _getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this._getOverlayPositionStrategy(),
            scrollStrategy: this._overlay.scrollStrategies.block(),
            direction: this._directionality,
        });
    }
    _getOverlayPositionStrategy() {
        return this._overlay
            .position()
            .flexibleConnectedTo(this._elementRef)
            .withPositions(this._getOverlayPositions());
    }
    _getOverlayPositions() {
        return [
            { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
            { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' },
            { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
            { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' },
        ];
    }
    _getPanelContent() {
        var _a, _b;
        const hasPanelChanged = ((_a = this._panel) === null || _a === void 0 ? void 0 : _a._templateRef) !== ((_b = this._panelContent) === null || _b === void 0 ? void 0 : _b.templateRef);
        if (this._panel && (!this._panel || hasPanelChanged)) {
            this._panelContent = new TemplatePortal(this._panel._templateRef, this._viewContainerRef);
        }
        return this._panelContent;
    }
    _coerceOpenActionProperty(input) {
        let actions = typeof input === 'string' ? input.trim().split(/[ ,]+/) : input;
        if ((typeof ngDevMode === 'undefined' || ngDevMode) &&
            actions.some(a => allowedOpenActions.indexOf(a) === -1)) {
            throw Error(`${input} is not a support open action for CdkCombobox`);
        }
        return actions;
    }
}
CdkCombobox.decorators = [
    { type: Directive, args: [{
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
CdkCombobox.ctorParameters = () => [
    { type: ElementRef },
    { type: Overlay },
    { type: ViewContainerRef },
    { type: Directionality, decorators: [{ type: Optional }] }
];
CdkCombobox.propDecorators = {
    panel: [{ type: Input, args: ['cdkComboboxTriggerFor',] }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    openActions: [{ type: Input }],
    autoSetText: [{ type: Input }],
    opened: [{ type: Output, args: ['comboboxPanelOpened',] }],
    closed: [{ type: Output, args: ['comboboxPanelClosed',] }],
    panelValueChanged: [{ type: Output, args: ['panelValueChanged',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkComboboxPanel {
    constructor(_templateRef) {
        this._templateRef = _templateRef;
        this.valueUpdated = new Subject();
        this.contentIdUpdated = new Subject();
        this.contentTypeUpdated = new Subject();
        this.contentId = '';
    }
    /** Tells the parent combobox to close the panel and sends back the content value. */
    closePanel(data) {
        this.valueUpdated.next(data || []);
    }
    // TODO: instead of using a focus function, potentially use cdk/a11y focus trapping
    focusContent() {
        var _a;
        // TODO: Use an injected document here
        (_a = document.getElementById(this.contentId)) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /** Registers the content's id and the content type with the panel. */
    _registerContent(contentId, contentType) {
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
    }
}
CdkComboboxPanel.decorators = [
    { type: Directive, args: [{
                host: {
                    'class': 'cdk-combobox-panel'
                },
                selector: 'ng-template[cdkComboboxPanel]',
                exportAs: 'cdkComboboxPanel',
            },] }
];
CdkComboboxPanel.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const PANEL = new InjectionToken('CdkComboboxPanel');
let nextId = 0;
class CdkComboboxPopup {
    constructor(_elementRef, _parentPanel) {
        this._elementRef = _elementRef;
        this._parentPanel = _parentPanel;
        this._role = 'dialog';
        this.id = `cdk-combobox-popup-${nextId++}`;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get firstFocus() {
        return this._firstFocusElement;
    }
    set firstFocus(id) {
        this._firstFocusElement = id;
    }
    ngOnInit() {
        this.registerWithPanel();
    }
    registerWithPanel() {
        if (this._parentPanel === null || this._parentPanel === undefined) {
            this._explicitPanel._registerContent(this.id, this._role);
        }
        else {
            this._parentPanel._registerContent(this.id, this._role);
        }
    }
    focusFirstElement() {
        if (this._firstFocusElement) {
            this._firstFocusElement.focus();
        }
        else {
            this._elementRef.nativeElement.focus();
        }
    }
}
CdkComboboxPopup.decorators = [
    { type: Directive, args: [{
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
CdkComboboxPopup.ctorParameters = () => [
    { type: ElementRef },
    { type: CdkComboboxPanel, decorators: [{ type: Optional }, { type: Inject, args: [PANEL,] }] }
];
CdkComboboxPopup.propDecorators = {
    role: [{ type: Input }],
    firstFocus: [{ type: Input }],
    id: [{ type: Input }],
    _explicitPanel: [{ type: Input, args: ['parentPanel',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [CdkCombobox, CdkComboboxPanel, CdkComboboxPopup];
class CdkComboboxModule {
}
CdkComboboxModule.decorators = [
    { type: NgModule, args: [{
                imports: [OverlayModule],
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

export { CdkCombobox, CdkComboboxModule, CdkComboboxPanel, CdkComboboxPopup, PANEL };
//# sourceMappingURL=combobox.js.map
