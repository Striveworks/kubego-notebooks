/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';
import { CdkMenuItem } from './menu-item';
/**
 * Directive which acts as a grouping container for `CdkMenuItem` instances with
 * `role="menuitemradio"`, similar to a `role="radiogroup"` element.
 */
export declare class CdkMenuGroup implements AfterContentInit, OnDestroy {
    /** Emits the element when checkbox or radiobutton state changed  */
    readonly change: EventEmitter<CdkMenuItem>;
    /** List of menuitemcheckbox or menuitemradio elements which reside in this group */
    private readonly _selectableItems;
    /** Emits when the _selectableItems QueryList triggers a change */
    private readonly _selectableChanges;
    ngAfterContentInit(): void;
    /**
     * Register the child selectable elements with the change emitter and ensure any new child
     * elements do so as well.
     */
    private _registerMenuSelectionListeners;
    /** Register each selectable to emit on the change Emitter when clicked */
    private _registerClickListener;
    ngOnDestroy(): void;
}
