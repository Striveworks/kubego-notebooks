/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive } from '@angular/core';
import { CdkMenuItemSelectable } from './menu-item-selectable';
import { CdkMenuItem } from './menu-item';
/**
 * A directive providing behavior for the "menuitemcheckbox" ARIA role, which behaves similarly to a
 * conventional checkbox.
 */
export class CdkMenuItemCheckbox extends CdkMenuItemSelectable {
    /** Toggle the checked state of the checkbox. */
    trigger() {
        super.trigger();
        if (!this.disabled) {
            this.checked = !this.checked;
        }
    }
}
CdkMenuItemCheckbox.decorators = [
    { type: Directive, args: [{
                selector: '[cdkMenuItemCheckbox]',
                exportAs: 'cdkMenuItemCheckbox',
                host: {
                    '[tabindex]': '_tabindex',
                    'type': 'button',
                    'role': 'menuitemcheckbox',
                    '[attr.aria-checked]': 'checked || null',
                    '[attr.aria-disabled]': 'disabled || null',
                },
                providers: [
                    { provide: CdkMenuItemSelectable, useExisting: CdkMenuItemCheckbox },
                    { provide: CdkMenuItem, useExisting: CdkMenuItemSelectable },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLWNoZWNrYm94LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay1leHBlcmltZW50YWwvbWVudS9tZW51LWl0ZW0tY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUM3RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXhDOzs7R0FHRztBQWdCSCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEscUJBQXFCO0lBQzVELGdEQUFnRDtJQUNoRCxPQUFPO1FBQ0wsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixJQUFJLEVBQUU7b0JBQ0osWUFBWSxFQUFFLFdBQVc7b0JBQ3pCLE1BQU0sRUFBRSxRQUFRO29CQUNoQixNQUFNLEVBQUUsa0JBQWtCO29CQUMxQixxQkFBcUIsRUFBRSxpQkFBaUI7b0JBQ3hDLHNCQUFzQixFQUFFLGtCQUFrQjtpQkFDM0M7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQztvQkFDbEUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBQztpQkFDM0Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0RpcmVjdGl2ZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka01lbnVJdGVtU2VsZWN0YWJsZX0gZnJvbSAnLi9tZW51LWl0ZW0tc2VsZWN0YWJsZSc7XG5pbXBvcnQge0Nka01lbnVJdGVtfSBmcm9tICcuL21lbnUtaXRlbSc7XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgcHJvdmlkaW5nIGJlaGF2aW9yIGZvciB0aGUgXCJtZW51aXRlbWNoZWNrYm94XCIgQVJJQSByb2xlLCB3aGljaCBiZWhhdmVzIHNpbWlsYXJseSB0byBhXG4gKiBjb252ZW50aW9uYWwgY2hlY2tib3guXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtNZW51SXRlbUNoZWNrYm94XScsXG4gIGV4cG9ydEFzOiAnY2RrTWVudUl0ZW1DaGVja2JveCcsXG4gIGhvc3Q6IHtcbiAgICAnW3RhYmluZGV4XSc6ICdfdGFiaW5kZXgnLFxuICAgICd0eXBlJzogJ2J1dHRvbicsXG4gICAgJ3JvbGUnOiAnbWVudWl0ZW1jaGVja2JveCcsXG4gICAgJ1thdHRyLmFyaWEtY2hlY2tlZF0nOiAnY2hlY2tlZCB8fCBudWxsJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCcsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBDZGtNZW51SXRlbVNlbGVjdGFibGUsIHVzZUV4aXN0aW5nOiBDZGtNZW51SXRlbUNoZWNrYm94fSxcbiAgICB7cHJvdmlkZTogQ2RrTWVudUl0ZW0sIHVzZUV4aXN0aW5nOiBDZGtNZW51SXRlbVNlbGVjdGFibGV9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtNZW51SXRlbUNoZWNrYm94IGV4dGVuZHMgQ2RrTWVudUl0ZW1TZWxlY3RhYmxlIHtcbiAgLyoqIFRvZ2dsZSB0aGUgY2hlY2tlZCBzdGF0ZSBvZiB0aGUgY2hlY2tib3guICovXG4gIHRyaWdnZXIoKSB7XG4gICAgc3VwZXIudHJpZ2dlcigpO1xuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgIH1cbiAgfVxufVxuIl19