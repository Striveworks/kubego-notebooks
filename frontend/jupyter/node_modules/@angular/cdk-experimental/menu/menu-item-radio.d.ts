/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { OnDestroy, ElementRef, NgZone } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { CdkMenuItemSelectable } from './menu-item-selectable';
import { CdkMenuItemTrigger } from './menu-item-trigger';
import { Menu } from './menu-interface';
import { MenuAim } from './menu-aim';
/**
 * A directive providing behavior for the "menuitemradio" ARIA role, which behaves similarly to
 * a conventional radio-button. Any sibling `CdkMenuItemRadio` instances within the same `CdkMenu`
 * or `CdkMenuGroup` comprise a radio group with unique selection enforced.
 */
export declare class CdkMenuItemRadio extends CdkMenuItemSelectable implements OnDestroy {
    private readonly _selectionDispatcher;
    /** Function to unregister the selection dispatcher */
    private _removeDispatcherListener;
    constructor(_selectionDispatcher: UniqueSelectionDispatcher, element: ElementRef<HTMLElement>, ngZone: NgZone, parentMenu?: Menu, menuAim?: MenuAim, dir?: Directionality, 
    /** Reference to the CdkMenuItemTrigger directive if one is added to the same element */
    menuTrigger?: CdkMenuItemTrigger);
    /** Configure the unique selection dispatcher listener in order to toggle the checked state  */
    private _registerDispatcherListener;
    /** Toggles the checked state of the radio-button. */
    trigger(): void;
    ngOnDestroy(): void;
}
