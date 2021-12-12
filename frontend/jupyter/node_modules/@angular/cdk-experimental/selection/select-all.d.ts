/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';
import { CdkSelection } from './selection';
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
export declare class CdkSelectAll<T> implements OnDestroy, OnInit {
    private readonly _selection;
    private readonly _controlValueAccessor;
    /**
     * The checked state of the toggle.
     * Resolves to `true` if all the values are selected, `false` if no value is selected.
     */
    readonly checked: Observable<boolean>;
    /**
     * The indeterminate state of the toggle.
     * Resolves to `true` if part (not all) of the values are selected, `false` if all values or no
     * value at all are selected.
     */
    readonly indeterminate: Observable<boolean>;
    /**
     * Toggles the select-all state.
     * @param event The click event if the toggle is triggered by a (mouse or keyboard) click. If
     *     using with a native `<input type="checkbox">`, the parameter is required for the
     *     indeterminate state to work properly.
     */
    toggle(event?: MouseEvent): void;
    private readonly _destroyed;
    constructor(_selection: CdkSelection<T>, _controlValueAccessor: ControlValueAccessor[]);
    ngOnInit(): void;
    private _configureControlValueAccessor;
    private _assertValidParentSelection;
    ngOnDestroy(): void;
}
