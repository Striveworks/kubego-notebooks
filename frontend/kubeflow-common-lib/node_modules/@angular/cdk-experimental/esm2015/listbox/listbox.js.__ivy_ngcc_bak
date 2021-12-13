/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ContentChildren, Directive, ElementRef, EventEmitter, forwardRef, Inject, InjectionToken, Input, Optional, Output, QueryList } from '@angular/core';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { DOWN_ARROW, ENTER, SPACE, UP_ARROW, LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { coerceBooleanProperty, coerceArray } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { defer, merge, Subject } from 'rxjs';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkComboboxPanel } from '@angular/cdk-experimental/combobox';
import { Directionality } from '@angular/cdk/bidi';
let nextId = 0;
let listboxId = 0;
export const CDK_LISTBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CdkListbox),
    multi: true
};
export const PANEL = new InjectionToken('CdkComboboxPanel');
export class CdkOption {
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
export class CdkListbox {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL2xpc3Rib3gvbGlzdGJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsZUFBZSxFQUNmLFNBQVMsRUFDVCxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFDcEMsTUFBTSxFQUFFLGNBQWMsRUFDdEIsS0FBSyxFQUFxQixRQUFRLEVBQUUsTUFBTSxFQUMxQyxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLDBCQUEwQixFQUFzQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xHLE9BQU8sRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xHLE9BQU8sRUFBZSxxQkFBcUIsRUFBRSxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RixPQUFPLEVBQWtCLGNBQWMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRWpELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNmLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUVsQixNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBUTtJQUM3QyxP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InNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLFxuICBJbmplY3QsIEluamVjdGlvblRva2VuLFxuICBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBPdXRwdXQsXG4gIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXIsIEhpZ2hsaWdodGFibGUsIExpc3RLZXlNYW5hZ2VyT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0RPV05fQVJST1csIEVOVEVSLCBTUEFDRSwgVVBfQVJST1csIExFRlRfQVJST1csIFJJR0hUX0FSUk9XfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtCb29sZWFuSW5wdXQsIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgY29lcmNlQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1NlbGVjdGlvbkNoYW5nZSwgU2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge2RlZmVyLCBtZXJnZSwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3N0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Nka0NvbWJvYm94UGFuZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvY29tYm9ib3gnO1xuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuXG5sZXQgbmV4dElkID0gMDtcbmxldCBsaXN0Ym94SWQgPSAwO1xuXG5leHBvcnQgY29uc3QgQ0RLX0xJU1RCT1hfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENka0xpc3Rib3gpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IFBBTkVMID0gbmV3IEluamVjdGlvblRva2VuPENka0NvbWJvYm94UGFuZWw+KCdDZGtDb21ib2JveFBhbmVsJyk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtPcHRpb25dJyxcbiAgZXhwb3J0QXM6ICdjZGtPcHRpb24nLFxuICBob3N0OiB7XG4gICAgJ3JvbGUnOiAnb3B0aW9uJyxcbiAgICAnY2xhc3MnOiAnY2RrLW9wdGlvbicsXG4gICAgJyhjbGljayknOiAndG9nZ2xlKCknLFxuICAgICcoZm9jdXMpJzogJ2FjdGl2YXRlKCknLFxuICAgICcoYmx1ciknOiAnZGVhY3RpdmF0ZSgpJyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gICAgJ1thdHRyLmFyaWEtc2VsZWN0ZWRdJzogJ3NlbGVjdGVkIHx8IG51bGwnLFxuICAgICdbYXR0ci50YWJpbmRleF0nOiAnX2dldFRhYkluZGV4KCknLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdfaXNJbnRlcmFjdGlvbkRpc2FibGVkKCknLFxuICAgICdbY2xhc3MuY2RrLW9wdGlvbi1kaXNhYmxlZF0nOiAnX2lzSW50ZXJhY3Rpb25EaXNhYmxlZCgpJyxcbiAgICAnW2NsYXNzLmNkay1vcHRpb24tYWN0aXZlXSc6ICdfYWN0aXZlJyxcbiAgICAnW2NsYXNzLmNkay1vcHRpb24tc2VsZWN0ZWRdJzogJ3NlbGVjdGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIENka09wdGlvbjxUID0gdW5rbm93bj4gaW1wbGVtZW50cyBMaXN0S2V5TWFuYWdlck9wdGlvbiwgSGlnaGxpZ2h0YWJsZSB7XG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlOiBUO1xuICBfYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFRoZSBpZCBvZiB0aGUgb3B0aW9uLCBzZXQgdG8gYSB1bmlxdWVpZCBpZiB0aGUgdXNlciBkb2VzIG5vdCBwcm92aWRlIG9uZS4gKi9cbiAgQElucHV0KCkgaWQgPSBgY2RrLW9wdGlvbi0ke25leHRJZCsrfWA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuICBzZXQgc2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cblxuICAvKiogVGhlIGZvcm0gdmFsdWUgb2YgdGhlIG9wdGlvbi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IFQge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWU6IFQpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCAmJiB2YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3Rpb25DaGFuZ2UgPVxuICAgICAgbmV3IEV2ZW50RW1pdHRlcjxPcHRpb25TZWxlY3Rpb25DaGFuZ2VFdmVudDxUPj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gQ2RrTGlzdGJveCkpIHJlYWRvbmx5IGxpc3Rib3g6IENka0xpc3Rib3g8VD4pIHtcbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBzZWxlY3RlZCBzdGF0ZSwgZW1pdHMgYSBjaGFuZ2UgZXZlbnQgdGhyb3VnaCB0aGUgaW5qZWN0ZWQgbGlzdGJveC4gKi9cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghdGhpcy5faXNJbnRlcmFjdGlvbkRpc2FibGVkKCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICAgIHRoaXMuX2VtaXRTZWxlY3Rpb25DaGFuZ2UodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIGFjdGl2ZSBwcm9wZXJ0eSB0cnVlIGlmIHRoZSBvcHRpb24gYW5kIGxpc3Rib3ggYXJlbid0IGRpc2FibGVkLiAqL1xuICBhY3RpdmF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzSW50ZXJhY3Rpb25EaXNhYmxlZCgpKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBhY3RpdmUgcHJvcGVydHkgZmFsc2UuICovXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0ludGVyYWN0aW9uRGlzYWJsZWQoKSkge1xuICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldHMgdGhlIHNlbGVjdGVkIHByb3BlcnR5IHRydWUgaWYgaXQgd2FzIGZhbHNlLiAqL1xuICBzZWxlY3QoKSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2VtaXRTZWxlY3Rpb25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICAvKiogU2V0cyB0aGUgc2VsZWN0ZWQgcHJvcGVydHkgZmFsc2UgaWYgaXQgd2FzIHRydWUuICovXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9lbWl0U2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEFwcGxpZXMgZm9jdXMgdG8gdGhlIG9wdGlvbi4gKi9cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICAvKiogUmV0dXJucyB0cnVlIGlmIHRoZSBvcHRpb24gb3IgbGlzdGJveCBhcmUgZGlzYWJsZWQsIGFuZCBmYWxzZSBvdGhlcndpc2UuICovXG4gIF9pc0ludGVyYWN0aW9uRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLmxpc3Rib3guZGlzYWJsZWQgfHwgdGhpcy5fZGlzYWJsZWQpO1xuICB9XG5cbiAgLyoqIEVtaXRzIGEgY2hhbmdlIGV2ZW50IGV4dGVuZGluZyB0aGUgT3B0aW9uIFNlbGVjdGlvbiBDaGFuZ2UgRXZlbnQgaW50ZXJmYWNlLiAqL1xuICBwcml2YXRlIF9lbWl0U2VsZWN0aW9uQ2hhbmdlKGlzVXNlcklucHV0ID0gZmFsc2UpIHtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIGlzVXNlcklucHV0OiBpc1VzZXJJbnB1dFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIHRhYiBpbmRleCB3aGljaCBkZXBlbmRzIG9uIHRoZSBkaXNhYmxlZCBwcm9wZXJ0eS4gKi9cbiAgX2dldFRhYkluZGV4KCk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9pc0ludGVyYWN0aW9uRGlzYWJsZWQoKSA/IG51bGwgOiAnLTEnO1xuICB9XG5cbiAgLyoqIEdldCB0aGUgbGFiZWwgZm9yIHRoaXMgZWxlbWVudCB3aGljaCBpcyByZXF1aXJlZCBieSB0aGUgRm9jdXNhYmxlT3B0aW9uIGludGVyZmFjZS4gKi9cbiAgZ2V0TGFiZWwoKSB7XG4gICAgLy8gd2Uga25vdyB0aGF0IHRoZSBjdXJyZW50IG5vZGUgaXMgYW4gZWxlbWVudCB0eXBlXG4gICAgY29uc3QgY2xvbmUgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEVsZW1lbnQ7XG4gICAgdGhpcy5fcmVtb3ZlSWNvbnMoY2xvbmUpO1xuXG4gICAgcmV0dXJuIGNsb25lLnRleHRDb250ZW50Py50cmltKCkgfHwgJyc7XG4gIH1cblxuICAvKiogUmVtb3ZlIGFueSBjaGlsZCBmcm9tIHRoZSBnaXZlbiBlbGVtZW50IHdoaWNoIGNhbiBiZSBpZGVudGlmaWVkIGFzIGFuIGljb24uICovXG4gIHByaXZhdGUgX3JlbW92ZUljb25zKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICAvLyBUT0RPOiBtYWtlIHRoaXMgYSBjb25maWd1cmFibGUgZnVuY3Rpb24gdGhhdCBjYW4gcmVtb3ZlZCBhbnkgZGVzaXJlZCB0eXBlIG9mIG5vZGUuXG4gICAgZm9yIChjb25zdCBpY29uIG9mIEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdtYXQtaWNvbiwgLm1hdGVyaWFsLWljb25zJykpKSB7XG4gICAgICBpY29uLnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKGljb24pO1xuICAgIH1cbiAgfVxuXG4gIGdldEVsZW1lbnRSZWYoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWY7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgYWN0aXZlIHByb3BlcnR5IHRvIHRydWUgdG8gZW5hYmxlIHRoZSBhY3RpdmUgY3NzIGNsYXNzLiAqL1xuICBzZXRBY3RpdmVTdHlsZXMoKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBhY3RpdmUgcHJvcGVydHkgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgYWN0aXZlIGNzcyBjbGFzcy4gKi9cbiAgc2V0SW5hY3RpdmVTdHlsZXMoKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0ZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtMaXN0Ym94XScsXG4gIGV4cG9ydEFzOiAnY2RrTGlzdGJveCcsXG4gIGhvc3Q6IHtcbiAgICAncm9sZSc6ICdsaXN0Ym94JyxcbiAgICAnY2xhc3MnOiAnY2RrLWxpc3Rib3gnLFxuICAgICdbaWRdJzogJ2lkJyxcbiAgICAnKGZvY3VzKSc6ICdfZm9jdXNBY3RpdmVPcHRpb24oKScsXG4gICAgJyhrZXlkb3duKSc6ICdfa2V5ZG93bigkZXZlbnQpJyxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ190YWJJbmRleCcsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcbiAgICAnW2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGVdJzogJ211bHRpcGxlJyxcbiAgICAnW2F0dHIuYXJpYS1hY3RpdmVkZXNjZW5kYW50XSc6ICdfZ2V0QXJpYUFjdGl2ZURlc2NlbmRhbnQoKScsXG4gICAgJ1thdHRyLmFyaWEtb3JpZW50YXRpb25dJzogJ29yaWVudGF0aW9uJ1xuICB9LFxuICBwcm92aWRlcnM6IFtDREtfTElTVEJPWF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrTGlzdGJveDxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgX2xpc3RLZXlNYW5hZ2VyOiBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcjxDZGtPcHRpb248VD4+O1xuICBfc2VsZWN0aW9uTW9kZWw6IFNlbGVjdGlvbk1vZGVsPENka09wdGlvbjxUPj47XG4gIF90YWJJbmRleCA9IDA7XG5cbiAgLyoqIGBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHNlbGVjdCBoYXMgYmVlbiB0b3VjaGVkYCAqL1xuICBfb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgLyoqIGBWaWV3IC0+IG1vZGVsIGNhbGxiYWNrIGNhbGxlZCB3aGVuIHZhbHVlIGNoYW5nZXNgICovXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBUKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgcmVhZG9ubHkgb3B0aW9uU2VsZWN0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxPcHRpb25TZWxlY3Rpb25DaGFuZ2VFdmVudDxUPj4gPSBkZWZlcigoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XG5cbiAgICByZXR1cm4gb3B0aW9ucy5jaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgob3B0aW9ucyksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gbWVyZ2UoLi4ub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5zZWxlY3Rpb25DaGFuZ2UpKSlcbiAgICApO1xuICB9KSBhcyBPYnNlcnZhYmxlPE9wdGlvblNlbGVjdGlvbkNoYW5nZUV2ZW50PFQ+PjtcblxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9tdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF91c2VBY3RpdmVEZXNjZW5kYW50OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2F1dG9Gb2N1czogYm9vbGVhbiA9IHRydWU7XG4gIHByaXZhdGUgX2FjdGl2ZU9wdGlvbjogQ2RrT3B0aW9uPFQ+O1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oQ2RrT3B0aW9uLCB7ZGVzY2VuZGFudHM6IHRydWV9KSBfb3B0aW9uczogUXVlcnlMaXN0PENka09wdGlvbjxUPj47XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGlvbkNoYW5nZSA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyPExpc3Rib3hTZWxlY3Rpb25DaGFuZ2VFdmVudDxUPj4oKTtcblxuICBASW5wdXQoKSBpZCA9IGBjZGstbGlzdGJveC0ke2xpc3Rib3hJZCsrfWA7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGxpc3Rib3ggYWxsb3dzIG11bHRpcGxlIG9wdGlvbnMgdG8gYmUgc2VsZWN0ZWQuXG4gICAqIElmIGBtdWx0aXBsZWAgc3dpdGNoZXMgZnJvbSBgdHJ1ZWAgdG8gYGZhbHNlYCwgYWxsIG9wdGlvbnMgYXJlIGRlc2VsZWN0ZWQuXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpcGxlO1xuICB9XG4gIHNldCBtdWx0aXBsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGlvbk9uTXVsdGlTZWxlY3Rpb25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMuX211bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGxpc3Rib3ggd2lsbCB1c2UgYWN0aXZlIGRlc2NlbmRhbnQgb3Igd2lsbCBtb3ZlIGZvY3VzIG9udG8gdGhlIG9wdGlvbnMuICovXG4gIEBJbnB1dCgpXG4gIGdldCB1c2VBY3RpdmVEZXNjZW5kYW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl91c2VBY3RpdmVEZXNjZW5kYW50O1xuICB9XG4gIHNldCB1c2VBY3RpdmVEZXNjZW5kYW50KHNob3VsZFVzZUFjdGl2ZURlc2NlbmRhbnQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl91c2VBY3RpdmVEZXNjZW5kYW50ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNob3VsZFVzZUFjdGl2ZURlc2NlbmRhbnQpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgb24gZm9jdXMgdGhlIGxpc3Rib3ggd2lsbCBmb2N1cyBpdHMgYWN0aXZlIG9wdGlvbiwgZGVmYXVsdCB0byB0cnVlLiAqL1xuICBASW5wdXQoKVxuICBnZXQgYXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XG4gIH1cbiAgc2V0IGF1dG9Gb2N1cyhzaG91bGRBdXRvRm9jdXM6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc2hvdWxkQXV0b0ZvY3VzKTtcbiAgfVxuXG4gIC8qKiBEZXRlcm1pbmVzIHRoZSBvcmllbnRhdGlvbiBmb3IgdGhlIGxpc3Qga2V5IG1hbmFnZXIuIEFmZmVjdHMga2V5Ym9hcmQgaW50ZXJhY3Rpb24uICovXG4gIEBJbnB1dCgnbGlzdGJveE9yaWVudGF0aW9uJykgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xuXG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IFQsIG8yOiBUKSA9PiBib29sZWFuID0gKGExLCBhMikgPT4gYTEgPT09IGEyO1xuXG4gIEBJbnB1dCgncGFyZW50UGFuZWwnKSBwcml2YXRlIHJlYWRvbmx5IF9leHBsaWNpdFBhbmVsOiBDZGtDb21ib2JveFBhbmVsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUEFORUwpIHJlYWRvbmx5IF9wYXJlbnRQYW5lbD86IENka0NvbWJvYm94UGFuZWw8VD4sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBfZGlyPzogRGlyZWN0aW9uYWxpdHlcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbCA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxDZGtPcHRpb248VD4+KHRoaXMubXVsdGlwbGUpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2luaXRLZXlNYW5hZ2VyKCk7XG4gICAgdGhpcy5faW5pdFNlbGVjdGlvbk1vZGVsKCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJXaXRoUGFuZWwoKTtcblxuICAgIHRoaXMub3B0aW9uU2VsZWN0aW9uQ2hhbmdlcy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdGhpcy5fZW1pdENoYW5nZUV2ZW50KGV2ZW50LnNvdXJjZSk7XG4gICAgICB0aGlzLl91cGRhdGVTZWxlY3Rpb25Nb2RlbChldmVudC5zb3VyY2UpO1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24oZXZlbnQuc291cmNlKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVBhbmVsRm9yU2VsZWN0aW9uKGV2ZW50LnNvdXJjZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9saXN0S2V5TWFuYWdlci5jaGFuZ2UuY29tcGxldGUoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJXaXRoUGFuZWwoKTogdm9pZCB7XG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLl9wYXJlbnRQYW5lbCB8fCB0aGlzLl9leHBsaWNpdFBhbmVsO1xuICAgIHBhbmVsPy5fcmVnaXN0ZXJDb250ZW50KHRoaXMuaWQsICdsaXN0Ym94Jyk7XG4gIH1cblxuICBwcml2YXRlIF9pbml0S2V5TWFuYWdlcigpIHtcbiAgICB0aGlzLl9saXN0S2V5TWFuYWdlciA9IG5ldyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcih0aGlzLl9vcHRpb25zKVxuICAgICAgICAud2l0aFdyYXAoKVxuICAgICAgICAud2l0aFR5cGVBaGVhZCgpXG4gICAgICAgIC53aXRoSG9tZUFuZEVuZCgpXG4gICAgICAgIC53aXRoQWxsb3dlZE1vZGlmaWVyS2V5cyhbJ3NoaWZ0S2V5J10pO1xuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHRoaXMuX2xpc3RLZXlNYW5hZ2VyLndpdGhWZXJ0aWNhbE9yaWVudGF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xpc3RLZXlNYW5hZ2VyLndpdGhIb3Jpem9udGFsT3JpZW50YXRpb24odGhpcy5fZGlyPy52YWx1ZSB8fCAnbHRyJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fbGlzdEtleU1hbmFnZXIuY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVBY3RpdmVPcHRpb24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRTZWxlY3Rpb25Nb2RlbCgpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jaGFuZ2VkLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBTZWxlY3Rpb25DaGFuZ2U8Q2RrT3B0aW9uPFQ+PikgPT4ge1xuXG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBldmVudC5hZGRlZCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBldmVudC5yZW1vdmVkKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2tleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5fZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYW5hZ2VyID0gdGhpcy5fbGlzdEtleU1hbmFnZXI7XG4gICAgY29uc3Qge2tleUNvZGV9ID0gZXZlbnQ7XG4gICAgY29uc3QgcHJldmlvdXNBY3RpdmVJbmRleCA9IG1hbmFnZXIuYWN0aXZlSXRlbUluZGV4O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNQQUNFIHx8IGtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICBpZiAobWFuYWdlci5hY3RpdmVJdGVtICYmICFtYW5hZ2VyLmlzVHlwaW5nKCkpIHtcbiAgICAgICAgdGhpcy5fdG9nZ2xlQWN0aXZlT3B0aW9uKCk7XG4gICAgICB9XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIG1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKiogV2lsbCBzZWxlY3QgYW4gb3B0aW9uIGlmIHNoaWZ0IHdhcyBwcmVzc2VkIHdoaWxlIG5hdmlnYXRpbmcgdG8gdGhlIG9wdGlvbiAqL1xuICAgIGNvbnN0IGlzQXJyb3cgPSAoa2V5Q29kZSA9PT0gVVBfQVJST1dcbiAgICAgICAgfHwga2V5Q29kZSA9PT0gRE9XTl9BUlJPV1xuICAgICAgICB8fCBrZXlDb2RlID09PSBMRUZUX0FSUk9XXG4gICAgICAgIHx8IGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKTtcbiAgICBpZiAoaXNBcnJvdyAmJiBldmVudC5zaGlmdEtleSAmJiBwcmV2aW91c0FjdGl2ZUluZGV4ICE9PSB0aGlzLl9saXN0S2V5TWFuYWdlci5hY3RpdmVJdGVtSW5kZXgpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUFjdGl2ZU9wdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBFbWl0cyBhIHNlbGVjdGlvbiBjaGFuZ2UgZXZlbnQsIGNhbGxlZCB3aGVuIGFuIG9wdGlvbiBoYXMgaXRzIHNlbGVjdGVkIHN0YXRlIGNoYW5nZWQuICovXG4gIF9lbWl0Q2hhbmdlRXZlbnQob3B0aW9uOiBDZGtPcHRpb248VD4pIHtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHtcbiAgICAgIHNvdXJjZTogdGhpcyxcbiAgICAgIG9wdGlvbjogb3B0aW9uXG4gICAgfSk7XG4gIH1cblxuICAvKiogVXBkYXRlcyB0aGUgc2VsZWN0aW9uIG1vZGVsIGFmdGVyIGEgdG9nZ2xlLiAqL1xuICBfdXBkYXRlU2VsZWN0aW9uTW9kZWwob3B0aW9uOiBDZGtPcHRpb248VD4pIHtcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICBjb25zdCBwcmV2aW91c2x5U2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXTtcbiAgICAgIHRoaXMuZGVzZWxlY3QocHJldmlvdXNseVNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICBvcHRpb24uc2VsZWN0ZWQgPyB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3Qob3B0aW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuZGVzZWxlY3Qob3B0aW9uKTtcbiAgfVxuXG4gIF91cGRhdGVQYW5lbEZvclNlbGVjdGlvbihvcHRpb246IENka09wdGlvbjxUPikge1xuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5fcGFyZW50UGFuZWwgfHwgdGhpcy5fZXhwbGljaXRQYW5lbDtcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA/IHBhbmVsPy5jbG9zZVBhbmVsKG9wdGlvbi52YWx1ZSkgOiBwYW5lbD8uY2xvc2VQYW5lbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYW5lbD8uY2xvc2VQYW5lbCh0aGlzLmdldFNlbGVjdGVkVmFsdWVzKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBUb2dnbGVzIHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgYWN0aXZlIG9wdGlvbiBpZiBub3QgZGlzYWJsZWQuICovXG4gIHByaXZhdGUgX3RvZ2dsZUFjdGl2ZU9wdGlvbigpIHtcbiAgICBjb25zdCBhY3RpdmVPcHRpb24gPSB0aGlzLl9saXN0S2V5TWFuYWdlci5hY3RpdmVJdGVtO1xuICAgIGlmIChhY3RpdmVPcHRpb24gJiYgIWFjdGl2ZU9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgYWN0aXZlT3B0aW9uLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSBpZCBvZiB0aGUgYWN0aXZlIG9wdGlvbiBpZiBhY3RpdmUgZGVzY2VuZGFudCBpcyBiZWluZyB1c2VkLiAqL1xuICBfZ2V0QXJpYUFjdGl2ZURlc2NlbmRhbnQoKTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZUFjdGl2ZURlc2NlbmRhbnQgPyB0aGlzLl9saXN0S2V5TWFuYWdlcj8uYWN0aXZlSXRlbT8uaWQgOiBudWxsO1xuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGFjdGl2ZU9wdGlvbiBhbmQgdGhlIGFjdGl2ZSBhbmQgZm9jdXMgcHJvcGVydGllcyBvZiB0aGUgb3B0aW9uLiAqL1xuICBwcml2YXRlIF91cGRhdGVBY3RpdmVPcHRpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9saXN0S2V5TWFuYWdlci5hY3RpdmVJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlT3B0aW9uPy5kZWFjdGl2YXRlKCk7XG4gICAgdGhpcy5fYWN0aXZlT3B0aW9uID0gdGhpcy5fbGlzdEtleU1hbmFnZXIuYWN0aXZlSXRlbTtcbiAgICB0aGlzLl9hY3RpdmVPcHRpb24uYWN0aXZhdGUoKTtcblxuICAgIGlmICghdGhpcy51c2VBY3RpdmVEZXNjZW5kYW50KSB7XG4gICAgICB0aGlzLl9hY3RpdmVPcHRpb24uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICAvKiogVXBkYXRlcyBzZWxlY3Rpb24gc3RhdGVzIG9mIG9wdGlvbnMgd2hlbiB0aGUgJ211bHRpcGxlJyBwcm9wZXJ0eSBjaGFuZ2VzLiAqL1xuICBwcml2YXRlIF91cGRhdGVTZWxlY3Rpb25Pbk11bHRpU2VsZWN0aW9uQ2hhbmdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgIXZhbHVlKSB7XG4gICAgICAvLyBEZXNlbGVjdCBhbGwgb3B0aW9ucyBpbnN0ZWFkIG9mIGFyYml0cmFyaWx5IGtlZXBpbmcgb25lIG9mIHRoZSBzZWxlY3RlZCBvcHRpb25zLlxuICAgICAgdGhpcy5zZXRBbGxTZWxlY3RlZChmYWxzZSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5tdWx0aXBsZSAmJiB2YWx1ZSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwgPVxuICAgICAgICAgIG5ldyBTZWxlY3Rpb25Nb2RlbDxDZGtPcHRpb248VD4+KHZhbHVlLCB0aGlzLl9zZWxlY3Rpb25Nb2RlbD8uc2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIF9mb2N1c0FjdGl2ZU9wdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuYXV0b0ZvY3VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xpc3RLZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0pIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMuX2xpc3RLZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fb3B0aW9ucy5maXJzdCkge1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24odGhpcy5fb3B0aW9ucy5maXJzdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNlbGVjdHMgdGhlIGdpdmVuIG9wdGlvbiBpZiB0aGUgb3B0aW9uIGFuZCBsaXN0Ym94IGFyZW4ndCBkaXNhYmxlZC4gKi9cbiAgc2VsZWN0KG9wdGlvbjogQ2RrT3B0aW9uPFQ+KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIG9wdGlvbi5zZWxlY3QoKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGVzZWxlY3RzIHRoZSBnaXZlbiBvcHRpb24gaWYgdGhlIG9wdGlvbiBhbmQgbGlzdGJveCBhcmVuJ3QgZGlzYWJsZWQuICovXG4gIGRlc2VsZWN0KG9wdGlvbjogQ2RrT3B0aW9uPFQ+KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIG9wdGlvbi5kZXNlbGVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiBhbGwgb3B0aW9ucyB0byBiZSB0aGUgZ2l2ZW4gdmFsdWUuICovXG4gIHNldEFsbFNlbGVjdGVkKGlzU2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiB0aGlzLl9vcHRpb25zLnRvQXJyYXkoKSkge1xuICAgICAgaXNTZWxlY3RlZCA/IHRoaXMuc2VsZWN0KG9wdGlvbikgOiB0aGlzLmRlc2VsZWN0KG9wdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqIFVwZGF0ZXMgdGhlIGtleSBtYW5hZ2VyJ3MgYWN0aXZlIGl0ZW0gdG8gdGhlIGdpdmVuIG9wdGlvbi4gKi9cbiAgc2V0QWN0aXZlT3B0aW9uKG9wdGlvbjogQ2RrT3B0aW9uPFQ+KSB7XG4gICAgdGhpcy5fbGlzdEtleU1hbmFnZXIudXBkYXRlQWN0aXZlSXRlbShvcHRpb24pO1xuICAgIHRoaXMuX3VwZGF0ZUFjdGl2ZU9wdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCB3aGVuIHRoZSBzZWxlY3QncyB2YWx1ZVxuICAgKiBjaGFuZ2VzIGZyb20gdXNlciBpbnB1dC4gUmVxdWlyZWQgdG8gaW1wbGVtZW50IENvbnRyb2xWYWx1ZUFjY2Vzc29yLlxuICAgKi9cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBUKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlcyBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgd2hlbiB0aGUgc2VsZWN0IGlzIGJsdXJyZWRcbiAgICogYnkgdGhlIHVzZXIuIFJlcXVpcmVkIHRvIGltcGxlbWVudCBDb250cm9sVmFsdWVBY2Nlc3Nvci5cbiAgICovXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqIFNldHMgdGhlIHNlbGVjdCdzIHZhbHVlLiBSZXF1aXJlZCB0byBpbXBsZW1lbnQgQ29udHJvbFZhbHVlQWNjZXNzb3IuICovXG4gIHdyaXRlVmFsdWUodmFsdWVzOiBUIHwgVFtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMpIHtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGlvbkJ5VmFsdWUodmFsdWVzKTtcbiAgICB9XG4gIH1cblxuICAvKiogRGlzYWJsZXMgdGhlIHNlbGVjdC4gUmVxdWlyZWQgdG8gaW1wbGVtZW50IENvbnRyb2xWYWx1ZUFjY2Vzc29yLiAqL1xuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIC8qKiBSZXR1cm5zIHRoZSB2YWx1ZXMgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBvcHRpb25zLiAqL1xuICBnZXRTZWxlY3RlZFZhbHVlcygpOiBUW10ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnNlbGVjdGVkKS5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbiBvcHRpb24gdGhhdCBoYXMgdGhlIGNvcnJlc3BvbmRpbmcgZ2l2ZW4gdmFsdWUuICovXG4gIHByaXZhdGUgX3NldFNlbGVjdGlvbkJ5VmFsdWUodmFsdWVzOiBUIHwgVFtdKSB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5fb3B0aW9ucy50b0FycmF5KCkpIHtcbiAgICAgIHRoaXMuZGVzZWxlY3Qob3B0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXNBcnJheSA9IGNvZXJjZUFycmF5KHZhbHVlcyk7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXNBcnJheSkge1xuICAgICAgY29uc3QgY29ycmVzcG9uZGluZ09wdGlvbiA9IHRoaXMuX29wdGlvbnMuZmluZCgob3B0aW9uOiBDZGtPcHRpb248VD4pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSAhPSBudWxsICYmIHRoaXMuY29tcGFyZVdpdGgob3B0aW9uLnZhbHVlLCB2YWx1ZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvcnJlc3BvbmRpbmdPcHRpb24pIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoY29ycmVzcG9uZGluZ09wdGlvbik7XG4gICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbXVsdGlwbGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3VzZUFjdGl2ZURlc2NlbmRhbnQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9Gb2N1czogQm9vbGVhbklucHV0O1xufVxuXG4vKiogQ2hhbmdlIGV2ZW50IHRoYXQgaXMgYmVpbmcgZmlyZWQgd2hlbmV2ZXIgdGhlIHNlbGVjdGVkIHN0YXRlIG9mIGFuIG9wdGlvbiBjaGFuZ2VzLiAqL1xuZXhwb3J0IGludGVyZmFjZSBMaXN0Ym94U2VsZWN0aW9uQ2hhbmdlRXZlbnQ8VD4ge1xuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBsaXN0Ym94IHRoYXQgZW1pdHRlZCB0aGUgZXZlbnQuICovXG4gIHJlYWRvbmx5IHNvdXJjZTogQ2RrTGlzdGJveDxUPjtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBvcHRpb24gdGhhdCBoYXMgYmVlbiBjaGFuZ2VkLiAqL1xuICByZWFkb25seSBvcHRpb246IENka09wdGlvbjxUPjtcbn1cblxuLyoqIEV2ZW50IG9iamVjdCBlbWl0dGVkIGJ5IE1hdE9wdGlvbiB3aGVuIHNlbGVjdGVkIG9yIGRlc2VsZWN0ZWQuICovXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvblNlbGVjdGlvbkNoYW5nZUV2ZW50PFQ+IHtcbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgb3B0aW9uIHRoYXQgZW1pdHRlZCB0aGUgZXZlbnQuICovXG4gIHNvdXJjZTogQ2RrT3B0aW9uPFQ+O1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjaGFuZ2UgaW4gdGhlIG9wdGlvbidzIHZhbHVlIHdhcyBhIHJlc3VsdCBvZiBhIHVzZXIgYWN0aW9uLiAqL1xuICBpc1VzZXJJbnB1dDogYm9vbGVhbjtcbn1cbiJdfQ==