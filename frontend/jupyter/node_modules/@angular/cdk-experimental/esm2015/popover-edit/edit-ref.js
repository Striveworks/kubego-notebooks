/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, Self, NgZone } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { EditEventDispatcher } from './edit-event-dispatcher';
/**
 * Used for communication between the form within the edit lens and the
 * table that launched it. Provided by CdkEditControl within the lens.
 */
export class EditRef {
    constructor(_form, _editEventDispatcher, _ngZone) {
        this._form = _form;
        this._editEventDispatcher = _editEventDispatcher;
        this._ngZone = _ngZone;
        /** Emits the final value of this edit instance before closing. */
        this._finalValueSubject = new Subject();
        this.finalValue = this._finalValueSubject;
        /** Emits when the user tabs out of this edit lens before closing. */
        this._blurredSubject = new Subject();
        this.blurred = this._blurredSubject;
        this._editEventDispatcher.setActiveEditRef(this);
    }
    /**
     * Called by the host directive's OnInit hook. Reads the initial state of the
     * form and overrides it with persisted state from previous openings, if
     * applicable.
     */
    init(previousFormValue) {
        // Wait for the zone to stabilize before caching the initial value.
        // This ensures that all form controls have been initialized.
        this._ngZone.onStable.pipe(take(1)).subscribe(() => {
            this.updateRevertValue();
            if (previousFormValue) {
                this.reset(previousFormValue);
            }
        });
    }
    ngOnDestroy() {
        this._editEventDispatcher.unsetActiveEditRef(this);
        this._finalValueSubject.next(this._form.value);
        this._finalValueSubject.complete();
    }
    /** Whether the attached form is in a valid state. */
    isValid() {
        return this._form.valid;
    }
    /** Set the form's current value as what it will be set to on revert/reset. */
    updateRevertValue() {
        this._revertFormValue = this._form.value;
    }
    /** Tells the table to close the edit popup. */
    close() {
        this._editEventDispatcher.editing.next(null);
    }
    /** Notifies the active edit that the user has moved focus out of the lens. */
    blur() {
        this._blurredSubject.next();
    }
    /**
     * Resets the form value to the specified value or the previously set
     * revert value.
     */
    reset(value) {
        this._form.reset(value || this._revertFormValue);
    }
}
EditRef.decorators = [
    { type: Injectable }
];
EditRef.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Self }] },
    { type: EditEventDispatcher },
    { type: NgZone }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1yZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvZWRpdC1yZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFVBQVUsRUFBYSxJQUFJLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDekMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRXBDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTVEOzs7R0FHRztBQUVILE1BQU0sT0FBTyxPQUFPO0lBWWxCLFlBQzZCLEtBQXVCLEVBQy9CLG9CQUE2RCxFQUM3RCxPQUFlO1FBRlAsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDL0IseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF5QztRQUM3RCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBZHBDLGtFQUFrRTtRQUNqRCx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBYSxDQUFDO1FBQ3RELGVBQVUsR0FBMEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBRXJFLHFFQUFxRTtRQUNwRCxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDOUMsWUFBTyxHQUFxQixJQUFJLENBQUMsZUFBZSxDQUFDO1FBU3hELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksQ0FBQyxpQkFBc0M7UUFDekMsbUVBQW1FO1FBQ25FLDZEQUE2RDtRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNqRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixJQUFJLGlCQUFpQixFQUFFO2dCQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELHFEQUFxRDtJQUNyRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsOEVBQThFO0lBQzlFLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0NBQStDO0lBQy9DLEtBQUs7UUFDSCxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsOEVBQThFO0lBQzlFLElBQUk7UUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsS0FBaUI7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OztZQXBFRixVQUFVOzs7WUFWSCxnQkFBZ0IsdUJBd0JqQixJQUFJO1lBcEJILG1CQUFtQjtZQUxVLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIFNlbGYsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xDb250YWluZXJ9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtFZGl0RXZlbnREaXNwYXRjaGVyfSBmcm9tICcuL2VkaXQtZXZlbnQtZGlzcGF0Y2hlcic7XG5cbi8qKlxuICogVXNlZCBmb3IgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIHRoZSBmb3JtIHdpdGhpbiB0aGUgZWRpdCBsZW5zIGFuZCB0aGVcbiAqIHRhYmxlIHRoYXQgbGF1bmNoZWQgaXQuIFByb3ZpZGVkIGJ5IENka0VkaXRDb250cm9sIHdpdGhpbiB0aGUgbGVucy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVkaXRSZWY8Rm9ybVZhbHVlPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBFbWl0cyB0aGUgZmluYWwgdmFsdWUgb2YgdGhpcyBlZGl0IGluc3RhbmNlIGJlZm9yZSBjbG9zaW5nLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9maW5hbFZhbHVlU3ViamVjdCA9IG5ldyBTdWJqZWN0PEZvcm1WYWx1ZT4oKTtcbiAgcmVhZG9ubHkgZmluYWxWYWx1ZTogT2JzZXJ2YWJsZTxGb3JtVmFsdWU+ID0gdGhpcy5fZmluYWxWYWx1ZVN1YmplY3Q7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIHVzZXIgdGFicyBvdXQgb2YgdGhpcyBlZGl0IGxlbnMgYmVmb3JlIGNsb3NpbmcuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2JsdXJyZWRTdWJqZWN0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcmVhZG9ubHkgYmx1cnJlZDogT2JzZXJ2YWJsZTx2b2lkPiA9IHRoaXMuX2JsdXJyZWRTdWJqZWN0O1xuXG4gIC8qKiBUaGUgdmFsdWUgdG8gc2V0IHRoZSBmb3JtIGJhY2sgdG8gb24gcmV2ZXJ0LiAqL1xuICBwcml2YXRlIF9yZXZlcnRGb3JtVmFsdWU6IEZvcm1WYWx1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBTZWxmKCkgcHJpdmF0ZSByZWFkb25seSBfZm9ybTogQ29udHJvbENvbnRhaW5lcixcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgX2VkaXRFdmVudERpc3BhdGNoZXI6IEVkaXRFdmVudERpc3BhdGNoZXI8RWRpdFJlZjxGb3JtVmFsdWU+PixcbiAgICAgIHByaXZhdGUgcmVhZG9ubHkgX25nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5fZWRpdEV2ZW50RGlzcGF0Y2hlci5zZXRBY3RpdmVFZGl0UmVmKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBieSB0aGUgaG9zdCBkaXJlY3RpdmUncyBPbkluaXQgaG9vay4gUmVhZHMgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlXG4gICAqIGZvcm0gYW5kIG92ZXJyaWRlcyBpdCB3aXRoIHBlcnNpc3RlZCBzdGF0ZSBmcm9tIHByZXZpb3VzIG9wZW5pbmdzLCBpZlxuICAgKiBhcHBsaWNhYmxlLlxuICAgKi9cbiAgaW5pdChwcmV2aW91c0Zvcm1WYWx1ZTogRm9ybVZhbHVlfHVuZGVmaW5lZCk6IHZvaWQge1xuICAgIC8vIFdhaXQgZm9yIHRoZSB6b25lIHRvIHN0YWJpbGl6ZSBiZWZvcmUgY2FjaGluZyB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAgICAvLyBUaGlzIGVuc3VyZXMgdGhhdCBhbGwgZm9ybSBjb250cm9scyBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQuXG4gICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlUmV2ZXJ0VmFsdWUoKTtcbiAgICAgIGlmIChwcmV2aW91c0Zvcm1WYWx1ZSkge1xuICAgICAgICB0aGlzLnJlc2V0KHByZXZpb3VzRm9ybVZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2VkaXRFdmVudERpc3BhdGNoZXIudW5zZXRBY3RpdmVFZGl0UmVmKHRoaXMpO1xuICAgIHRoaXMuX2ZpbmFsVmFsdWVTdWJqZWN0Lm5leHQodGhpcy5fZm9ybS52YWx1ZSk7XG4gICAgdGhpcy5fZmluYWxWYWx1ZVN1YmplY3QuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBXaGV0aGVyIHRoZSBhdHRhY2hlZCBmb3JtIGlzIGluIGEgdmFsaWQgc3RhdGUuICovXG4gIGlzVmFsaWQoKTogYm9vbGVhbnxudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybS52YWxpZDtcbiAgfVxuXG4gIC8qKiBTZXQgdGhlIGZvcm0ncyBjdXJyZW50IHZhbHVlIGFzIHdoYXQgaXQgd2lsbCBiZSBzZXQgdG8gb24gcmV2ZXJ0L3Jlc2V0LiAqL1xuICB1cGRhdGVSZXZlcnRWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXZlcnRGb3JtVmFsdWUgPSB0aGlzLl9mb3JtLnZhbHVlO1xuICB9XG5cbiAgLyoqIFRlbGxzIHRoZSB0YWJsZSB0byBjbG9zZSB0aGUgZWRpdCBwb3B1cC4gKi9cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZWRpdEV2ZW50RGlzcGF0Y2hlci5lZGl0aW5nLm5leHQobnVsbCk7XG4gIH1cblxuICAvKiogTm90aWZpZXMgdGhlIGFjdGl2ZSBlZGl0IHRoYXQgdGhlIHVzZXIgaGFzIG1vdmVkIGZvY3VzIG91dCBvZiB0aGUgbGVucy4gKi9cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLl9ibHVycmVkU3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBmb3JtIHZhbHVlIHRvIHRoZSBzcGVjaWZpZWQgdmFsdWUgb3IgdGhlIHByZXZpb3VzbHkgc2V0XG4gICAqIHJldmVydCB2YWx1ZS5cbiAgICovXG4gIHJlc2V0KHZhbHVlPzogRm9ybVZhbHVlKTogdm9pZCB7XG4gICAgdGhpcy5fZm9ybS5yZXNldCh2YWx1ZSB8fCB0aGlzLl9yZXZlcnRGb3JtVmFsdWUpO1xuICB9XG59XG4iXX0=