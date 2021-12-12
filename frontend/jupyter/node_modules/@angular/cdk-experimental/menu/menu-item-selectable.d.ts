/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { EventEmitter } from '@angular/core';
import { CdkMenuItem } from './menu-item';
/**
 * Base class providing checked state for MenuItems along with outputting a clicked event when the
 * element is triggered. It provides functionality for selectable elements.
 */
export declare abstract class CdkMenuItemSelectable extends CdkMenuItem {
    /** Event emitted when the selectable item is clicked */
    readonly toggled: EventEmitter<CdkMenuItemSelectable>;
    /** Whether the element is checked */
    get checked(): boolean;
    set checked(value: boolean);
    private _checked;
    /** The name of the selectable element with a default value */
    name: string;
    /** The id of the selectable element with a default value */
    id: string;
    /** If the element is not disabled emit the click event */
    trigger(): void;
    static ngAcceptInputType_checked: BooleanInput;
}
