/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AfterContentInit, ElementRef, EventEmitter, InjectionToken, OnDestroy, OnInit, QueryList } from '@angular/core';
import { ActiveDescendantKeyManager, Highlightable, ListKeyManagerOption } from '@angular/cdk/a11y';
import { BooleanInput } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { ControlValueAccessor } from '@angular/forms';
import { CdkComboboxPanel } from '@angular/cdk-experimental/combobox';
import { Directionality } from '@angular/cdk/bidi';
export declare const CDK_LISTBOX_VALUE_ACCESSOR: any;
export declare const PANEL: InjectionToken<CdkComboboxPanel<unknown>>;
export declare class CdkOption<T = unknown> implements ListKeyManagerOption, Highlightable {
    private readonly _elementRef;
    readonly listbox: CdkListbox<T>;
    private _selected;
    private _disabled;
    private _value;
    _active: boolean;
    /** The id of the option, set to a uniqueid if the user does not provide one. */
    id: string;
    get selected(): boolean;
    set selected(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    /** The form value of the option. */
    get value(): T;
    set value(value: T);
    readonly selectionChange: EventEmitter<OptionSelectionChangeEvent<T>>;
    constructor(_elementRef: ElementRef, listbox: CdkListbox<T>);
    /** Toggles the selected state, emits a change event through the injected listbox. */
    toggle(): void;
    /** Sets the active property true if the option and listbox aren't disabled. */
    activate(): void;
    /** Sets the active property false. */
    deactivate(): void;
    /** Sets the selected property true if it was false. */
    select(): void;
    /** Sets the selected property false if it was true. */
    deselect(): void;
    /** Applies focus to the option. */
    focus(): void;
    /** Returns true if the option or listbox are disabled, and false otherwise. */
    _isInteractionDisabled(): boolean;
    /** Emits a change event extending the Option Selection Change Event interface. */
    private _emitSelectionChange;
    /** Returns the tab index which depends on the disabled property. */
    _getTabIndex(): string | null;
    /** Get the label for this element which is required by the FocusableOption interface. */
    getLabel(): string;
    /** Remove any child from the given element which can be identified as an icon. */
    private _removeIcons;
    getElementRef(): ElementRef<any>;
    /** Sets the active property to true to enable the active css class. */
    setActiveStyles(): void;
    /** Sets the active property to false to disable the active css class. */
    setInactiveStyles(): void;
    static ngAcceptInputType_selected: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
}
export declare class CdkListbox<T> implements AfterContentInit, OnDestroy, OnInit, ControlValueAccessor {
    readonly _parentPanel?: CdkComboboxPanel<T> | undefined;
    private readonly _dir?;
    _listKeyManager: ActiveDescendantKeyManager<CdkOption<T>>;
    _selectionModel: SelectionModel<CdkOption<T>>;
    _tabIndex: number;
    /** `View -> model callback called when select has been touched` */
    _onTouched: () => void;
    /** `View -> model callback called when value changes` */
    _onChange: (value: T) => void;
    readonly optionSelectionChanges: Observable<OptionSelectionChangeEvent<T>>;
    private _disabled;
    private _multiple;
    private _useActiveDescendant;
    private _autoFocus;
    private _activeOption;
    private readonly _destroyed;
    _options: QueryList<CdkOption<T>>;
    readonly selectionChange: EventEmitter<ListboxSelectionChangeEvent<T>>;
    id: string;
    /**
     * Whether the listbox allows multiple options to be selected.
     * If `multiple` switches from `true` to `false`, all options are deselected.
     */
    get multiple(): boolean;
    set multiple(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    /** Whether the listbox will use active descendant or will move focus onto the options. */
    get useActiveDescendant(): boolean;
    set useActiveDescendant(shouldUseActiveDescendant: boolean);
    /** Whether on focus the listbox will focus its active option, default to true. */
    get autoFocus(): boolean;
    set autoFocus(shouldAutoFocus: boolean);
    /** Determines the orientation for the list key manager. Affects keyboard interaction. */
    orientation: 'horizontal' | 'vertical';
    compareWith: (o1: T, o2: T) => boolean;
    private readonly _explicitPanel;
    constructor(_parentPanel?: CdkComboboxPanel<T> | undefined, _dir?: Directionality | undefined);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private _registerWithPanel;
    private _initKeyManager;
    private _initSelectionModel;
    _keydown(event: KeyboardEvent): void;
    /** Emits a selection change event, called when an option has its selected state changed. */
    _emitChangeEvent(option: CdkOption<T>): void;
    /** Updates the selection model after a toggle. */
    _updateSelectionModel(option: CdkOption<T>): void;
    _updatePanelForSelection(option: CdkOption<T>): void;
    /** Toggles the selected state of the active option if not disabled. */
    private _toggleActiveOption;
    /** Returns the id of the active option if active descendant is being used. */
    _getAriaActiveDescendant(): string | null | undefined;
    /** Updates the activeOption and the active and focus properties of the option. */
    private _updateActiveOption;
    /** Updates selection states of options when the 'multiple' property changes. */
    private _updateSelectionOnMultiSelectionChange;
    _focusActiveOption(): void;
    /** Selects the given option if the option and listbox aren't disabled. */
    select(option: CdkOption<T>): void;
    /** Deselects the given option if the option and listbox aren't disabled. */
    deselect(option: CdkOption<T>): void;
    /** Sets the selected state of all options to be the given value. */
    setAllSelected(isSelected: boolean): void;
    /** Updates the key manager's active item to the given option. */
    setActiveOption(option: CdkOption<T>): void;
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Required to implement ControlValueAccessor.
     */
    registerOnChange(fn: (value: T) => void): void;
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Required to implement ControlValueAccessor.
     */
    registerOnTouched(fn: () => {}): void;
    /** Sets the select's value. Required to implement ControlValueAccessor. */
    writeValue(values: T | T[]): void;
    /** Disables the select. Required to implement ControlValueAccessor. */
    setDisabledState(isDisabled: boolean): void;
    /** Returns the values of the currently selected options. */
    getSelectedValues(): T[];
    /** Selects an option that has the corresponding given value. */
    private _setSelectionByValue;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_multiple: BooleanInput;
    static ngAcceptInputType_useActiveDescendant: BooleanInput;
    static ngAcceptInputType_autoFocus: BooleanInput;
}
/** Change event that is being fired whenever the selected state of an option changes. */
export interface ListboxSelectionChangeEvent<T> {
    /** Reference to the listbox that emitted the event. */
    readonly source: CdkListbox<T>;
    /** Reference to the option that has been changed. */
    readonly option: CdkOption<T>;
}
/** Event object emitted by MatOption when selected or deselected. */
export interface OptionSelectionChangeEvent<T> {
    /** Reference to the option that emitted the event. */
    source: CdkOption<T>;
    /** Whether the change in the option's value was a result of a user action. */
    isUserInput: boolean;
}
