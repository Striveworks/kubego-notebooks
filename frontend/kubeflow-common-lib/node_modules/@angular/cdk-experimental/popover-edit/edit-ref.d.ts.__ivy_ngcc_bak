/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnDestroy, NgZone } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Observable } from 'rxjs';
import { EditEventDispatcher } from './edit-event-dispatcher';
/**
 * Used for communication between the form within the edit lens and the
 * table that launched it. Provided by CdkEditControl within the lens.
 */
export declare class EditRef<FormValue> implements OnDestroy {
    private readonly _form;
    private readonly _editEventDispatcher;
    private readonly _ngZone;
    /** Emits the final value of this edit instance before closing. */
    private readonly _finalValueSubject;
    readonly finalValue: Observable<FormValue>;
    /** Emits when the user tabs out of this edit lens before closing. */
    private readonly _blurredSubject;
    readonly blurred: Observable<void>;
    /** The value to set the form back to on revert. */
    private _revertFormValue;
    constructor(_form: ControlContainer, _editEventDispatcher: EditEventDispatcher<EditRef<FormValue>>, _ngZone: NgZone);
    /**
     * Called by the host directive's OnInit hook. Reads the initial state of the
     * form and overrides it with persisted state from previous openings, if
     * applicable.
     */
    init(previousFormValue: FormValue | undefined): void;
    ngOnDestroy(): void;
    /** Whether the attached form is in a valid state. */
    isValid(): boolean | null;
    /** Set the form's current value as what it will be set to on revert/reset. */
    updateRevertValue(): void;
    /** Tells the table to close the edit popup. */
    close(): void;
    /** Notifies the active edit that the user has moved focus out of the lens. */
    blur(): void;
    /**
     * Resets the form value to the specified value or the previously set
     * revert value.
     */
    reset(value?: FormValue): void;
}
