/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Subject } from 'rxjs';
import { Directive, ElementRef, EventEmitter, Input, HostListener, } from '@angular/core';
import { hasModifierKey } from '@angular/cdk/keycodes';
import { EDIT_PANE_SELECTOR } from './constants';
import { closest } from './polyfill';
import { EditRef } from './edit-ref';
/**
 * A directive that attaches to a form within the edit lens.
 * It coordinates the form state with the table-wide edit system and handles
 * closing the edit lens when the form is submitted or the user clicks
 * out.
 */
export class CdkEditControl {
    constructor(elementRef, editRef) {
        this.elementRef = elementRef;
        this.editRef = editRef;
        this.destroyed = new Subject();
        /**
         * Specifies what should happen when the user clicks outside of the edit lens.
         * The default behavior is to close the lens without submitting the form.
         */
        this.clickOutBehavior = 'close';
        this.preservedFormValueChange = new EventEmitter();
        /**
         * Determines whether the lens will close on form submit if the form is not in a valid
         * state. By default the lens will remain open.
         */
        this.ignoreSubmitUnlessValid = true;
    }
    ngOnInit() {
        this.editRef.init(this.preservedFormValue);
        this.editRef.finalValue.subscribe(this.preservedFormValueChange);
        this.editRef.blurred.subscribe(() => this._handleBlur());
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    /**
     * Called when the form submits. If ignoreSubmitUnlessValid is true, checks
     * the form for validity before proceeding.
     * Updates the revert state with the latest submitted value then closes the edit.
     */
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    handleFormSubmit() {
        if (this.ignoreSubmitUnlessValid && !this.editRef.isValid()) {
            return;
        }
        this.editRef.updateRevertValue();
        this.editRef.close();
    }
    /** Called on Escape keyup. Closes the edit. */
    close() {
        // todo - allow this behavior to be customized as well, such as calling
        // reset before close
        this.editRef.close();
    }
    /**
     * Called on click anywhere in the document.
     * If the click was outside of the lens, trigger the specified click out behavior.
     */
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    handlePossibleClickOut(evt) {
        if (closest(evt.target, EDIT_PANE_SELECTOR)) {
            return;
        }
        switch (this.clickOutBehavior) {
            case 'submit':
                // Manually cause the form to submit before closing.
                this._triggerFormSubmit();
                this.editRef.close();
                break;
            case 'close':
                this.editRef.close();
                break;
            default:
                break;
        }
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleKeydown(event) {
        if (event.key === 'Escape' && !hasModifierKey(event)) {
            this.close();
            event.preventDefault();
        }
    }
    /** Triggers submit on tab out if clickOutBehavior is 'submit'. */
    _handleBlur() {
        if (this.clickOutBehavior === 'submit') {
            // Manually cause the form to submit before closing.
            this._triggerFormSubmit();
        }
    }
    _triggerFormSubmit() {
        this.elementRef.nativeElement.dispatchEvent(new Event('submit'));
    }
}
CdkEditControl.decorators = [
    { type: Directive, args: [{
                selector: 'form[cdkEditControl]',
                inputs: [
                    'clickOutBehavior: cdkEditControlClickOutBehavior',
                    'preservedFormValue: cdkEditControlPreservedFormValue',
                    'ignoreSubmitUnlessValid: cdkEditControlIgnoreSubmitUnlessValid',
                ],
                outputs: ['preservedFormValueChange: cdkEditControlPreservedFormValueChange'],
                providers: [EditRef],
            },] }
];
CdkEditControl.ctorParameters = () => [
    { type: ElementRef },
    { type: EditRef }
];
CdkEditControl.propDecorators = {
    handleFormSubmit: [{ type: HostListener, args: ['ngSubmit',] }],
    handlePossibleClickOut: [{ type: HostListener, args: ['document:click', ['$event'],] }],
    _handleKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
/** Reverts the form to its initial or previously submitted state on click. */
export class CdkEditRevert {
    constructor(editRef) {
        this.editRef = editRef;
        /** Type of the button. Defaults to `button` to avoid accident form submits. */
        this.type = 'button';
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    revertEdit() {
        this.editRef.reset();
    }
}
CdkEditRevert.decorators = [
    { type: Directive, args: [{
                selector: 'button[cdkEditRevert]',
                host: {
                    'type': 'button', // Prevents accidental form submits.
                }
            },] }
];
CdkEditRevert.ctorParameters = () => [
    { type: EditRef }
];
CdkEditRevert.propDecorators = {
    type: [{ type: Input }],
    revertEdit: [{ type: HostListener, args: ['click',] }]
};
/** Closes the lens on click. */
export class CdkEditClose {
    constructor(elementRef, editRef) {
        this.elementRef = elementRef;
        this.editRef = editRef;
        const nativeElement = elementRef.nativeElement;
        // Prevent accidental form submits.
        if (nativeElement.nodeName === 'BUTTON' && !nativeElement.getAttribute('type')) {
            nativeElement.setAttribute('type', 'button');
        }
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    closeEdit() {
        // Note that we use `click` here, rather than a keyboard event, because some screen readers
        // will emit a fake click event instead of an enter keyboard event on buttons. For the keyboard
        // events we use `keydown`, rather than `keyup`, because we use `keydown` to open the overlay
        // as well. If we were to use `keyup`, the user could end up opening and closing within
        // the same event sequence if focus was moved quickly.
        this.editRef.close();
    }
}
CdkEditClose.decorators = [
    { type: Directive, args: [{ selector: '[cdkEditClose]' },] }
];
CdkEditClose.ctorParameters = () => [
    { type: ElementRef },
    { type: EditRef }
];
CdkEditClose.propDecorators = {
    closeEdit: [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['keydown.enter',] }, { type: HostListener, args: ['keydown.space',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVucy1kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L2xlbnMtZGlyZWN0aXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzdCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFHWixLQUFLLEVBQ0wsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNuQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBS25DOzs7OztHQUtHO0FBV0gsTUFBTSxPQUFPLGNBQWM7SUF1QnpCLFlBQStCLFVBQXNCLEVBQVcsT0FBMkI7UUFBNUQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFXLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBdEJ4RSxjQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUVuRDs7O1dBR0c7UUFDSCxxQkFBZ0IsR0FBZ0MsT0FBTyxDQUFDO1FBUS9DLDZCQUF3QixHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFbEU7OztXQUdHO1FBQ0gsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBRStELENBQUM7SUFFL0YsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztR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O3dCQThLWixZQUFZLFNBQUMsT0FBTyxjQUFHLFlBQVksU0FBQyxlQUFlLGNBQUcsWUFBWSxTQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2hhc01vZGlmaWVyS2V5fSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtFRElUX1BBTkVfU0VMRUNUT1J9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7Y2xvc2VzdH0gZnJvbSAnLi9wb2x5ZmlsbCc7XG5pbXBvcnQge0VkaXRSZWZ9IGZyb20gJy4vZWRpdC1yZWYnO1xuXG4vKiogT3B0aW9ucyBmb3Igd2hhdCBkbyB0byB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGFuIGVkaXQgbGVucy4gKi9cbmV4cG9ydCB0eXBlIFBvcG92ZXJFZGl0Q2xpY2tPdXRCZWhhdmlvciA9ICdjbG9zZScgfCAnc3VibWl0JyB8ICdub29wJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGF0dGFjaGVzIHRvIGEgZm9ybSB3aXRoaW4gdGhlIGVkaXQgbGVucy5cbiAqIEl0IGNvb3JkaW5hdGVzIHRoZSBmb3JtIHN0YXRlIHdpdGggdGhlIHRhYmxlLXdpZGUgZWRpdCBzeXN0ZW0gYW5kIGhhbmRsZXNcbiAqIGNsb3NpbmcgdGhlIGVkaXQgbGVucyB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBvciB0aGUgdXNlciBjbGlja3NcbiAqIG91dC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnZm9ybVtjZGtFZGl0Q29udHJvbF0nLFxuICBpbnB1dHM6IFtcbiAgICAnY2xpY2tPdXRCZWhhdmlvcjogY2RrRWRpdENvbnRyb2xDbGlja091dEJlaGF2aW9yJyxcbiAgICAncHJlc2VydmVkRm9ybVZhbHVlOiBjZGtFZGl0Q29udHJvbFByZXNlcnZlZEZvcm1WYWx1ZScsXG4gICAgJ2lnbm9yZVN1Ym1pdFVubGVzc1ZhbGlkOiBjZGtFZGl0Q29udHJvbElnbm9yZVN1Ym1pdFVubGVzc1ZhbGlkJyxcbiAgXSxcbiAgb3V0cHV0czogWydwcmVzZXJ2ZWRGb3JtVmFsdWVDaGFuZ2U6IGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlJ10sXG4gIHByb3ZpZGVyczogW0VkaXRSZWZdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtFZGl0Q29udHJvbDxGb3JtVmFsdWU+IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogU3BlY2lmaWVzIHdoYXQgc2hvdWxkIGhhcHBlbiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIHRoZSBlZGl0IGxlbnMuXG4gICAqIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGlzIHRvIGNsb3NlIHRoZSBsZW5zIHdpdGhvdXQgc3VibWl0dGluZyB0aGUgZm9ybS5cbiAgICovXG4gIGNsaWNrT3V0QmVoYXZpb3I6IFBvcG92ZXJFZGl0Q2xpY2tPdXRCZWhhdmlvciA9ICdjbG9zZSc7XG5cbiAgLyoqXG4gICAqIEEgdHdvLXdheSBiaW5kaW5nIGZvciBzdG9yaW5nIHVuc3VibWl0dGVkIGZvcm0gc3RhdGUuIElmIG5vdCBwcm92aWRlZFxuICAgKiB0aGVuIGZvcm0gc3RhdGUgd2lsbCBiZSBkaXNjYXJkZWQgb24gY2xvc2UuIFRoZSBQZXJpc3RCeSBkaXJlY3RpdmUgaXMgb2ZmZXJlZFxuICAgKiBhcyBhIGNvbnZlbmllbnQgc2hvcnRjdXQgZm9yIHRoZXNlIGJpbmRpbmdzLlxuICAgKi9cbiAgcHJlc2VydmVkRm9ybVZhbHVlPzogRm9ybVZhbHVlO1xuICByZWFkb25seSBwcmVzZXJ2ZWRGb3JtVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1WYWx1ZT4oKTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBsZW5zIHdpbGwgY2xvc2Ugb24gZm9ybSBzdWJtaXQgaWYgdGhlIGZvcm0gaXMgbm90IGluIGEgdmFsaWRcbiAgICogc3RhdGUuIEJ5IGRlZmF1bHQgdGhlIGxlbnMgd2lsbCByZW1haW4gb3Blbi5cbiAgICovXG4gIGlnbm9yZVN1Ym1pdFVubGVzc1ZhbGlkID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVhZG9ubHkgZWRpdFJlZjogRWRpdFJlZjxGb3JtVmFsdWU+KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdFJlZi5pbml0KHRoaXMucHJlc2VydmVkRm9ybVZhbHVlKTtcbiAgICB0aGlzLmVkaXRSZWYuZmluYWxWYWx1ZS5zdWJzY3JpYmUodGhpcy5wcmVzZXJ2ZWRGb3JtVmFsdWVDaGFuZ2UpO1xuICAgIHRoaXMuZWRpdFJlZi5ibHVycmVkLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9oYW5kbGVCbHVyKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGZvcm0gc3VibWl0cy4gSWYgaWdub3JlU3VibWl0VW5sZXNzVmFsaWQgaXMgdHJ1ZSwgY2hlY2tzXG4gICAqIHRoZSBmb3JtIGZvciB2YWxpZGl0eSBiZWZvcmUgcHJvY2VlZGluZy5cbiAgICogVXBkYXRlcyB0aGUgcmV2ZXJ0IHN0YXRlIHdpdGggdGhlIGxhdGVzdCBzdWJtaXR0ZWQgdmFsdWUgdGhlbiBjbG9zZXMgdGhlIGVkaXQuXG4gICAqL1xuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBtZXRhZGF0YSB3aWxsIGJlIG1lcmdlZCwgd2hlcmVhcyBpbiBWaWV3RW5naW5lIGl0IGlzIG92ZXJyaWRkZW4uIEluIG9yZGVyXG4gIC8vIHRvIGF2b2lkIGRvdWJsZSBldmVudCBsaXN0ZW5lcnMsIHdlIG5lZWQgdG8gdXNlIGBIb3N0TGlzdGVuZXJgLiBPbmNlIEl2eSBpcyB0aGUgZGVmYXVsdCwgd2VcbiAgLy8gY2FuIG1vdmUgdGhpcyBiYWNrIGludG8gYGhvc3RgLlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RMaXN0ZW5lcignbmdTdWJtaXQnKVxuICBoYW5kbGVGb3JtU3VibWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlnbm9yZVN1Ym1pdFVubGVzc1ZhbGlkICYmICF0aGlzLmVkaXRSZWYuaXNWYWxpZCgpKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5lZGl0UmVmLnVwZGF0ZVJldmVydFZhbHVlKCk7XG4gICAgdGhpcy5lZGl0UmVmLmNsb3NlKCk7XG4gIH1cblxuICAvKiogQ2FsbGVkIG9uIEVzY2FwZSBrZXl1cC4gQ2xvc2VzIHRoZSBlZGl0LiAqL1xuICBjbG9zZSgpOiB2b2lkIHtcbiAgICAvLyB0b2RvIC0gYWxsb3cgdGhpcyBiZWhhdmlvciB0byBiZSBjdXN0b21pemVkIGFzIHdlbGwsIHN1Y2ggYXMgY2FsbGluZ1xuICAgIC8vIHJlc2V0IGJlZm9yZSBjbG9zZVxuICAgIHRoaXMuZWRpdFJlZi5jbG9zZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBjbGljayBhbnl3aGVyZSBpbiB0aGUgZG9jdW1lbnQuXG4gICAqIElmIHRoZSBjbGljayB3YXMgb3V0c2lkZSBvZiB0aGUgbGVucywgdHJpZ2dlciB0aGUgc3BlY2lmaWVkIGNsaWNrIG91dCBiZWhhdmlvci5cbiAgICovXG4gIC8vIEluIEl2eSB0aGUgYGhvc3RgIG1ldGFkYXRhIHdpbGwgYmUgbWVyZ2VkLCB3aGVyZWFzIGluIFZpZXdFbmdpbmUgaXQgaXMgb3ZlcnJpZGRlbi4gSW4gb3JkZXJcbiAgLy8gdG8gYXZvaWQgZG91YmxlIGV2ZW50IGxpc3RlbmVycywgd2UgbmVlZCB0byB1c2UgYEhvc3RMaXN0ZW5lcmAuIE9uY2UgSXZ5IGlzIHRoZSBkZWZhdWx0LCB3ZVxuICAvLyBjYW4gbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ob3N0LWRlY29yYXRvci1pbi1jb25jcmV0ZVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZVBvc3NpYmxlQ2xpY2tPdXQoZXZ0OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChjbG9zZXN0KGV2dC50YXJnZXQsIEVESVRfUEFORV9TRUxFQ1RPUikpIHsgcmV0dXJuOyB9XG4gICAgc3dpdGNoICh0aGlzLmNsaWNrT3V0QmVoYXZpb3IpIHtcbiAgICAgIGNhc2UgJ3N1Ym1pdCc6XG4gICAgICAgIC8vIE1hbnVhbGx5IGNhdXNlIHRoZSBmb3JtIHRvIHN1Ym1pdCBiZWZvcmUgY2xvc2luZy5cbiAgICAgICAgdGhpcy5fdHJpZ2dlckZvcm1TdWJtaXQoKTtcbiAgICAgICAgdGhpcy5lZGl0UmVmLmNsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICB0aGlzLmVkaXRSZWYuY2xvc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBtZXRhZGF0YSB3aWxsIGJlIG1lcmdlZCwgd2hlcmVhcyBpbiBWaWV3RW5naW5lIGl0IGlzIG92ZXJyaWRkZW4uIEluIG9yZGVyXG4gIC8vIHRvIGF2b2lkIGRvdWJsZSBldmVudCBsaXN0ZW5lcnMsIHdlIG5lZWQgdG8gdXNlIGBIb3N0TGlzdGVuZXJgLiBPbmNlIEl2eSBpcyB0aGUgZGVmYXVsdCwgd2VcbiAgLy8gY2FuIG1vdmUgdGhpcyBiYWNrIGludG8gYGhvc3RgLlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgJiYgIWhhc01vZGlmaWVyS2V5KGV2ZW50KSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICAvKiogVHJpZ2dlcnMgc3VibWl0IG9uIHRhYiBvdXQgaWYgY2xpY2tPdXRCZWhhdmlvciBpcyAnc3VibWl0Jy4gKi9cbiAgcHJpdmF0ZSBfaGFuZGxlQmx1cigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGlja091dEJlaGF2aW9yID09PSAnc3VibWl0Jykge1xuICAgICAgLy8gTWFudWFsbHkgY2F1c2UgdGhlIGZvcm0gdG8gc3VibWl0IGJlZm9yZSBjbG9zaW5nLlxuICAgICAgdGhpcy5fdHJpZ2dlckZvcm1TdWJtaXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90cmlnZ2VyRm9ybVN1Ym1pdCgpIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N1Ym1pdCcpKTtcbiAgfVxufVxuXG4vKiogUmV2ZXJ0cyB0aGUgZm9ybSB0byBpdHMgaW5pdGlhbCBvciBwcmV2aW91c2x5IHN1Ym1pdHRlZCBzdGF0ZSBvbiBjbGljay4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2J1dHRvbltjZGtFZGl0UmV2ZXJ0XScsXG4gIGhvc3Q6IHtcbiAgICAndHlwZSc6ICdidXR0b24nLCAvLyBQcmV2ZW50cyBhY2NpZGVudGFsIGZvcm0gc3VibWl0cy5cbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBDZGtFZGl0UmV2ZXJ0PEZvcm1WYWx1ZT4ge1xuICAvKiogVHlwZSBvZiB0aGUgYnV0dG9uLiBEZWZhdWx0cyB0byBgYnV0dG9uYCB0byBhdm9pZCBhY2NpZGVudCBmb3JtIHN1Ym1pdHMuICovXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdidXR0b24nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGVkaXRSZWY6IEVkaXRSZWY8Rm9ybVZhbHVlPikge31cblxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBtZXRhZGF0YSB3aWxsIGJlIG1lcmdlZCwgd2hlcmVhcyBpbiBWaWV3RW5naW5lIGl0IGlzIG92ZXJyaWRkZW4uIEluIG9yZGVyXG4gIC8vIHRvIGF2b2lkIGRvdWJsZSBldmVudCBsaXN0ZW5lcnMsIHdlIG5lZWQgdG8gdXNlIGBIb3N0TGlzdGVuZXJgLiBPbmNlIEl2eSBpcyB0aGUgZGVmYXVsdCwgd2VcbiAgLy8gY2FuIG1vdmUgdGhpcyBiYWNrIGludG8gYGhvc3RgLlxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICByZXZlcnRFZGl0KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdFJlZi5yZXNldCgpO1xuICB9XG59XG5cbi8qKiBDbG9zZXMgdGhlIGxlbnMgb24gY2xpY2suICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1tjZGtFZGl0Q2xvc2VdJ30pXG5leHBvcnQgY2xhc3MgQ2RrRWRpdENsb3NlPEZvcm1WYWx1ZT4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByb3RlY3RlZCByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgIHByb3RlY3RlZCByZWFkb25seSBlZGl0UmVmOiBFZGl0UmVmPEZvcm1WYWx1ZT4pIHtcblxuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgZm9ybSBzdWJtaXRzLlxuICAgIGlmIChuYXRpdmVFbGVtZW50Lm5vZGVOYW1lID09PSAnQlVUVE9OJyAmJiAhbmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSkge1xuICAgICAgbmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gSXZ5IHRoZSBgaG9zdGAgbWV0YWRhdGEgd2lsbCBiZSBtZXJnZWQsIHdoZXJlYXMgaW4gVmlld0VuZ2luZSBpdCBpcyBvdmVycmlkZGVuLiBJbiBvcmRlclxuICAvLyB0byBhdm9pZCBkb3VibGUgZXZlbnQgbGlzdGVuZXJzLCB3ZSBuZWVkIHRvIHVzZSBgSG9zdExpc3RlbmVyYC4gT25jZSBJdnkgaXMgdGhlIGRlZmF1bHQsIHdlXG4gIC8vIGNhbiBtb3ZlIHRoaXMgYmFjayBpbnRvIGBob3N0YC5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWhvc3QtZGVjb3JhdG9yLWluLWNvbmNyZXRlXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5lbnRlcicpIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uc3BhY2UnKVxuICBjbG9zZUVkaXQoKTogdm9pZCB7XG4gICAgLy8gTm90ZSB0aGF0IHdlIHVzZSBgY2xpY2tgIGhlcmUsIHJhdGhlciB0aGFuIGEga2V5Ym9hcmQgZXZlbnQsIGJlY2F1c2Ugc29tZSBzY3JlZW4gcmVhZGVyc1xuICAgIC8vIHdpbGwgZW1pdCBhIGZha2UgY2xpY2sgZXZlbnQgaW5zdGVhZCBvZiBhbiBlbnRlciBrZXlib2FyZCBldmVudCBvbiBidXR0b25zLiBGb3IgdGhlIGtleWJvYXJkXG4gICAgLy8gZXZlbnRzIHdlIHVzZSBga2V5ZG93bmAsIHJhdGhlciB0aGFuIGBrZXl1cGAsIGJlY2F1c2Ugd2UgdXNlIGBrZXlkb3duYCB0byBvcGVuIHRoZSBvdmVybGF5XG4gICAgLy8gYXMgd2VsbC4gSWYgd2Ugd2VyZSB0byB1c2UgYGtleXVwYCwgdGhlIHVzZXIgY291bGQgZW5kIHVwIG9wZW5pbmcgYW5kIGNsb3Npbmcgd2l0aGluXG4gICAgLy8gdGhlIHNhbWUgZXZlbnQgc2VxdWVuY2UgaWYgZm9jdXMgd2FzIG1vdmVkIHF1aWNrbHkuXG4gICAgdGhpcy5lZGl0UmVmLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==