import { forwardRef, InjectionToken, EventEmitter, Directive, ElementRef, Inject, Input, Output, Optional, ContentChildren, NgModule } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { SPACE, ENTER, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { coerceBooleanProperty, coerceArray } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { defer, merge, Subject } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkComboboxPanel } from '@angular/cdk-experimental/combobox';
import { Directionality } from '@angular/cdk/bidi';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextId = 0;
let listboxId = 0;
const CDK_LISTBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CdkListbox),
    multi: true
};
const PANEL = new InjectionToken('CdkComboboxPanel');
class CdkOption {
    constructor(_elementRef, listbox) {
        this._elementRef = _elementRef;
        this.listbox = listbox;
        this._selected = false;
        this._disabled = false;
        this._active = false;
        /** The id of the option, set to a uniqueid if the user does not provide one. */
        this.id = `cdk-option-${nextId++}`;
        this.selectionChange = new EventEmitter();
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        if (!this._disabled) {
            this._selected = coerceBooleanProperty(value);
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    /** The form value of the option. */
    get value() {
        return this._value;
    }
    set value(value) {
        if (this.selected && value !== this._value) {
            this.deselect();
        }
        this._value = value;
    }
    /** Toggles the selected state, emits a change event through the injected listbox. */
    toggle() {
        if (!this._isInteractionDisabled()) {
            this.selected = !this.selected;
            this._emitSelectionChange(true);
        }
    }
    /** Sets the active property true if the option and listbox aren't disabled. */
    activate() {
        if (!this._isInteractionDisabled()) {
            this._active = true;
        }
    }
    /** Sets the active property false. */
    deactivate() {
        if (!this._isInteractionDisabled()) {
            this._active = false;
        }
    }
    /** Sets the selected property true if it was false. */
    select() {
        if (!this.selected) {
            this.selected = true;
            this._emitSelectionChange();
        }
    }
    /** Sets the selected property false if it was true. */
    deselect() {
        if (this.selected) {
            this.selected = false;
            this._emitSelectionChange();
        }
    }
    /** Applies focus to the option. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    /** Returns true if the option or listbox are disabled, and false otherwise. */
    _isInteractionDisabled() {
        return (this.listbox.disabled || this._disabled);
    }
    /** Emits a change event extending the Option Selection Change Event interface. */
    _emitSelectionChange(isUserInput = false) {
        this.selectionChange.emit({
            source: this,
            isUserInput: isUserInput
        });
    }
    /** Returns the tab index which depends on the disabled property. */
    _getTabIndex() {
        return this._isInteractionDisabled() ? null : '-1';
    }
    /** Get the label for this element which is required by the FocusableOption interface. */
    getLabel() {
        var _a;
        // we know that the current node is an element type
        const clone = this._elementRef.nativeElement.cloneNode(true);
        this._removeIcons(clone);
        return ((_a = clone.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
    }
    /** Remove any child from the given element which can be identified as an icon. */
    _removeIcons(element) {
        var _a;
        // TODO: make this a configurable function that can removed any desired type of node.
        for (const icon of Array.from(element.querySelectorAll('mat-icon, .material-icons'))) {
            (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
        }
    }
    getElementRef() {
        return this._elementRef;
    }
    /** Sets the active property to true to enable the active css class. */
    setActiveStyles() {
        this._active = true;
    }
    /** Sets the active property to false to disable the active css class. */
    setInactiveStyles() {
        this._active = false;
    }
}
CdkOption.decorators = [
    { type: Directive, args: [{
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
CdkOption.ctorParameters = () => [
    { type: ElementRef },
    { type: CdkListbox, decorators: [{ type: Inject, args: [forwardRef(() => CdkListbox),] }] }
];
CdkOption.propDecorators = {
    id: [{ type: Input }],
    selected: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }],
    selectionChange: [{ type: Output }]
};
class CdkListbox {
    constructor(_parentPanel, _dir) {
        this._parentPanel = _parentPanel;
        this._dir = _dir;
        this._tabIndex = 0;
        /** `View -> model callback called when select has been touched` */
        this._onTouched = () => { };
        /** `View -> model callback called when value changes` */
        this._onChange = () => { };
        this.optionSelectionChanges = defer(() => {
            const options = this._options;
            return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map(option => option.selectionChange))));
        });
        this._disabled = false;
        this._multiple = false;
        this._useActiveDescendant = false;
        this._autoFocus = true;
        this._destroyed = new Subject();
        this.selectionChange = new EventEmitter();
        this.id = `cdk-listbox-${listboxId++}`;
        /** Determines the orientation for the list key manager. Affects keyboard interaction. */
        this.orientation = 'vertical';
        this.compareWith = (a1, a2) => a1 === a2;
    }
    /**
     * Whether the listbox allows multiple options to be selected.
     * If `multiple` switches from `true` to `false`, all options are deselected.
     */
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._updateSelectionOnMultiSelectionChange(value);
        this._multiple = coerceBooleanProperty(value);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    /** Whether the listbox will use active descendant or will move focus onto the options. */
    get useActiveDescendant() {
        return this._useActiveDescendant;
    }
    set useActiveDescendant(shouldUseActiveDescendant) {
        this._useActiveDescendant = coerceBooleanProperty(shouldUseActiveDescendant);
    }
    /** Whether on focus the listbox will focus its active option, default to true. */
    get autoFocus() {
        return this._autoFocus;
    }
    set autoFocus(shouldAutoFocus) {
        this._autoFocus = coerceBooleanProperty(shouldAutoFocus);
    }
    ngOnInit() {
        this._selectionModel = new SelectionModel(this.multiple);
    }
    ngAfterContentInit() {
        this._initKeyManager();
        this._initSelectionModel();
        this._registerWithPanel();
        this.optionSelectionChanges.subscribe(event => {
            this._emitChangeEvent(event.source);
            this._updateSelectionModel(event.source);
            this.setActiveOption(event.source);
            this._updatePanelForSelection(event.source);
        });
    }
    ngOnDestroy() {
        this._listKeyManager.change.complete();
        this._destroyed.next();
        this._destroyed.complete();
    }
    _registerWithPanel() {
        const panel = this._parentPanel || this._explicitPanel;
        panel === null || panel === void 0 ? void 0 : panel._registerContent(this.id, 'listbox');
    }
    _initKeyManager() {
        var _a;
        this._listKeyManager = new ActiveDescendantKeyManager(this._options)
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
        this._listKeyManager.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
            this._updateActiveOption();
        });
    }
    _initSelectionModel() {
        this._selectionModel.changed.pipe(takeUntil(this._destroyed))
            .subscribe((event) => {
            for (const option of event.added) {
                option.selected = true;
            }
            for (const option of event.removed) {
                option.selected = false;
            }
        });
    }
    _keydown(event) {
        if (this._disabled) {
            return;
        }
        const manager = this._listKeyManager;
        const { keyCode } = event;
        const previousActiveIndex = manager.activeItemIndex;
        if (keyCode === SPACE || keyCode === ENTER) {
            if (manager.activeItem && !manager.isTyping()) {
                this._toggleActiveOption();
            }
            event.preventDefault();
        }
        else {
            manager.onKeydown(event);
        }
        /** Will select an option if shift was pressed while navigating to the option */
        const isArrow = (keyCode === UP_ARROW
            || keyCode === DOWN_ARROW
            || keyCode === LEFT_ARROW
            || keyCode === RIGHT_ARROW);
        if (isArrow && event.shiftKey && previousActiveIndex !== this._listKeyManager.activeItemIndex) {
            this._toggleActiveOption();
        }
    }
    /** Emits a selection change event, called when an option has its selected state changed. */
    _emitChangeEvent(option) {
        this.selectionChange.emit({
            source: this,
            option: option
        });
    }
    /** Updates the selection model after a toggle. */
    _updateSelectionModel(option) {
        if (!this.multiple && this._selectionModel.selected.length !== 0) {
            const previouslySelected = this._selectionModel.selected[0];
            this.deselect(previouslySelected);
        }
        option.selected ? this._selectionModel.select(option) :
            this._selectionModel.deselect(option);
    }
    _updatePanelForSelection(option) {
        const panel = this._parentPanel || this._explicitPanel;
        if (!this.multiple) {
            option.selected ? panel === null || panel === void 0 ? void 0 : panel.closePanel(option.value) : panel === null || panel === void 0 ? void 0 : panel.closePanel();
        }
        else {
            panel === null || panel === void 0 ? void 0 : panel.closePanel(this.getSelectedValues());
        }
    }
    /** Toggles the selected state of the active option if not disabled. */
    _toggleActiveOption() {
        const activeOption = this._listKeyManager.activeItem;
        if (activeOption && !activeOption.disabled) {
            activeOption.toggle();
        }
    }
    /** Returns the id of the active option if active descendant is being used. */
    _getAriaActiveDescendant() {
        var _a, _b;
        return this._useActiveDescendant ? (_b = (_a = this._listKeyManager) === null || _a === void 0 ? void 0 : _a.activeItem) === null || _b === void 0 ? void 0 : _b.id : null;
    }
    /** Updates the activeOption and the active and focus properties of the option. */
    _updateActiveOption() {
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
    }
    /** Updates selection states of options when the 'multiple' property changes. */
    _updateSelectionOnMultiSelectionChange(value) {
        var _a;
        if (this.multiple && !value) {
            // Deselect all options instead of arbitrarily keeping one of the selected options.
            this.setAllSelected(false);
        }
        else if (!this.multiple && value) {
            this._selectionModel =
                new SelectionModel(value, (_a = this._selectionModel) === null || _a === void 0 ? void 0 : _a.selected);
        }
    }
    _focusActiveOption() {
        if (!this.autoFocus) {
            return;
        }
        if (this._listKeyManager.activeItem) {
            this.setActiveOption(this._listKeyManager.activeItem);
        }
        else if (this._options.first) {
            this.setActiveOption(this._options.first);
        }
    }
    /** Selects the given option if the option and listbox aren't disabled. */
    select(option) {
        if (!this.disabled && !option.disabled) {
            option.select();
        }
    }
    /** Deselects the given option if the option and listbox aren't disabled. */
    deselect(option) {
        if (!this.disabled && !option.disabled) {
            option.deselect();
        }
    }
    /** Sets the selected state of all options to be the given value. */
    setAllSelected(isSelected) {
        for (const option of this._options.toArray()) {
            isSelected ? this.select(option) : this.deselect(option);
        }
    }
    /** Updates the key manager's active item to the given option. */
    setActiveOption(option) {
        this._listKeyManager.updateActiveItem(option);
        this._updateActiveOption();
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Required to implement ControlValueAccessor.
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Required to implement ControlValueAccessor.
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /** Sets the select's value. Required to implement ControlValueAccessor. */
    writeValue(values) {
        if (this._options) {
            this._setSelectionByValue(values);
        }
    }
    /** Disables the select. Required to implement ControlValueAccessor. */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /** Returns the values of the currently selected options. */
    getSelectedValues() {
        return this._options.filter(option => option.selected).map(option => option.value);
    }
    /** Selects an option that has the corresponding given value. */
    _setSelectionByValue(values) {
        for (const option of this._options.toArray()) {
            this.deselect(option);
        }
        const valuesArray = coerceArray(values);
        for (const value of valuesArray) {
            const correspondingOption = this._options.find((option) => {
                return option.value != null && this.compareWith(option.value, value);
            });
            if (correspondingOption) {
                this.select(correspondingOption);
                if (!this.multiple) {
                    return;
                }
            }
        }
    }
}
CdkListbox.decorators = [
    { type: Directive, args: [{
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
CdkListbox.ctorParameters = () => [
    { type: CdkComboboxPanel, decorators: [{ type: Optional }, { type: Inject, args: [PANEL,] }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
CdkListbox.propDecorators = {
    _options: [{ type: ContentChildren, args: [CdkOption, { descendants: true },] }],
    selectionChange: [{ type: Output }],
    id: [{ type: Input }],
    multiple: [{ type: Input }],
    disabled: [{ type: Input }],
    useActiveDescendant: [{ type: Input }],
    autoFocus: [{ type: Input }],
    orientation: [{ type: Input, args: ['listboxOrientation',] }],
    compareWith: [{ type: Input }],
    _explicitPanel: [{ type: Input, args: ['parentPanel',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [CdkListbox, CdkOption];
class CdkListboxModule {
}
CdkListboxModule.decorators = [
    { type: NgModule, args: [{
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

export { CDK_LISTBOX_VALUE_ACCESSOR, CdkListbox, CdkListboxModule, CdkOption, PANEL };
//# sourceMappingURL=listbox.js.map
