/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NumberInput } from '@angular/cdk/coercion';
import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { CdkSelection } from './selection';
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
export declare class CdkSelectionToggle<T> implements OnDestroy, OnInit {
    private _selection;
    private _controlValueAccessors;
    /** The value that is associated with the toggle */
    value: T;
    /** The index of the value in the list. Required when used with `trackBy` */
    get index(): number | undefined;
    set index(index: number | undefined);
    protected _index?: number;
    /** The checked state of the selection toggle */
    readonly checked: Observable<boolean>;
    /** Toggles the selection */
    toggle(): void;
    private _destroyed;
    constructor(_selection: CdkSelection<T>, _controlValueAccessors: ControlValueAccessor[]);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _assertValidParentSelection;
    private _configureControlValueAccessor;
    private _isSelected;
    static ngAcceptInputType_index: NumberInput;
}
