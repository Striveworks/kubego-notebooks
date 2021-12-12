/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Subject } from 'rxjs';
import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { EditRef } from './edit-ref';
/** Options for what do to when the user clicks outside of an edit lens. */
export declare type PopoverEditClickOutBehavior = 'close' | 'submit' | 'noop';
/**
 * A directive that attaches to a form within the edit lens.
 * It coordinates the form state with the table-wide edit system and handles
 * closing the edit lens when the form is submitted or the user clicks
 * out.
 */
export declare class CdkEditControl<FormValue> implements OnDestroy, OnInit {
    protected readonly elementRef: ElementRef;
    readonly editRef: EditRef<FormValue>;
    protected readonly destroyed: Subject<void>;
    /**
     * Specifies what should happen when the user clicks outside of the edit lens.
     * The default behavior is to close the lens without submitting the form.
     */
    clickOutBehavior: PopoverEditClickOutBehavior;
    /**
     * A two-way binding for storing unsubmitted form state. If not provided
     * then form state will be discarded on close. The PeristBy directive is offered
     * as a convenient shortcut for these bindings.
     */
    preservedFormValue?: FormValue;
    readonly preservedFormValueChange: EventEmitter<FormValue>;
    /**
     * Determines whether the lens will close on form submit if the form is not in a valid
     * state. By default the lens will remain open.
     */
    ignoreSubmitUnlessValid: boolean;
    constructor(elementRef: ElementRef, editRef: EditRef<FormValue>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * Called when the form submits. If ignoreSubmitUnlessValid is true, checks
     * the form for validity before proceeding.
     * Updates the revert state with the latest submitted value then closes the edit.
     */
    handleFormSubmit(): void;
    /** Called on Escape keyup. Closes the edit. */
    close(): void;
    /**
     * Called on click anywhere in the document.
     * If the click was outside of the lens, trigger the specified click out behavior.
     */
    handlePossibleClickOut(evt: Event): void;
    _handleKeydown(event: KeyboardEvent): void;
    /** Triggers submit on tab out if clickOutBehavior is 'submit'. */
    private _handleBlur;
    private _triggerFormSubmit;
}
/** Reverts the form to its initial or previously submitted state on click. */
export declare class CdkEditRevert<FormValue> {
    protected readonly editRef: EditRef<FormValue>;
    /** Type of the button. Defaults to `button` to avoid accident form submits. */
    type: string;
    constructor(editRef: EditRef<FormValue>);
    revertEdit(): void;
}
/** Closes the lens on click. */
export declare class CdkEditClose<FormValue> {
    protected readonly elementRef: ElementRef<HTMLElement>;
    protected readonly editRef: EditRef<FormValue>;
    constructor(elementRef: ElementRef<HTMLElement>, editRef: EditRef<FormValue>);
    closeEdit(): void;
}
