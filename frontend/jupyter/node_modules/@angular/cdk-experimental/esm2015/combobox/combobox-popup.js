/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, Inject, InjectionToken, Input, Optional } from '@angular/core';
import { CdkComboboxPanel } from './combobox-panel';
export const PANEL = new InjectionToken('CdkComboboxPanel');
let nextId = 0;
export class CdkComboboxPopup {
    constructor(_elementRef, _parentPanel) {
        this._elementRef = _elementRef;
        this._parentPanel = _parentPanel;
        this._role = 'dialog';
        this.id = `cdk-combobox-popup-${nextId++}`;
    }
    get role() {
        return this._role;
    }
    set role(value) {
        this._role = value;
    }
    get firstFocus() {
        return this._firstFocusElement;
    }
    set firstFocus(id) {
        this._firstFocusElement = id;
    }
    ngOnInit() {
        this.registerWithPanel();
    }
    registerWithPanel() {
        if (this._parentPanel === null || this._parentPanel === undefined) {
            this._explicitPanel._registerContent(this.id, this._role);
        }
        else {
            this._parentPanel._registerContent(this.id, this._role);
        }
    }
    focusFirstElement() {
        if (this._firstFocusElement) {
            this._firstFocusElement.focus();
        }
        else {
            this._elementRef.nativeElement.focus();
        }
    }
}
CdkComboboxPopup.decorators = [
    { type: Directive, args: [{
                selector: '[cdkComboboxPopup]',
                exportAs: 'cdkComboboxPopup',
                host: {
                    'class': 'cdk-combobox-popup',
                    '[attr.role]': 'role',
                    '[id]': 'id',
                    'tabindex': '-1',
                    '(focus)': 'focusFirstElement()'
                }
            },] }
];
CdkComboboxPopup.ctorParameters = () => [
    { type: ElementRef },
    { type: CdkComboboxPanel, decorators: [{ type: Optional }, { type: Inject, args: [PANEL,] }] }
];
CdkComboboxPopup.propDecorators = {
    role: [{ type: Input }],
    firstFocus: [{ type: Input }],
    id: [{ type: Input }],
    _explicitPanel: [{ type: Input, args: ['parentPanel',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm9ib3gtcG9wdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrLWV4cGVyaW1lbnRhbC9jb21ib2JveC9jb21ib2JveC1wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sY0FBYyxFQUNkLEtBQUssRUFFTCxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRXJFLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLGNBQWMsQ0FBbUIsa0JBQWtCLENBQUMsQ0FBQztBQUU5RSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFhZixNQUFNLE9BQU8sZ0JBQWdCO0lBdUIzQixZQUNtQixXQUFvQyxFQUNqQixZQUFrQztRQURyRCxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDakIsaUJBQVksR0FBWixZQUFZLENBQXNCO1FBakJoRSxVQUFLLEdBQXNCLFFBQVEsQ0FBQztRQVduQyxPQUFFLEdBQUcsc0JBQXNCLE1BQU0sRUFBRSxFQUFFLENBQUM7SUFPM0MsQ0FBQztJQXpCTCxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLEtBQXdCO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFHRCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsRUFBZTtRQUM1QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFZRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDakUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7O1lBekRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLG9CQUFvQjtvQkFDN0IsYUFBYSxFQUFFLE1BQU07b0JBQ3JCLE1BQU0sRUFBRSxJQUFJO29CQUNaLFVBQVUsRUFBRSxJQUFJO29CQUNoQixTQUFTLEVBQUUscUJBQXFCO2lCQUNqQzthQUNGOzs7WUF0QkMsVUFBVTtZQU1lLGdCQUFnQix1QkEwQ3RDLFFBQVEsWUFBSSxNQUFNLFNBQUMsS0FBSzs7O21CQXhCMUIsS0FBSzt5QkFTTCxLQUFLO2lCQVNMLEtBQUs7NkJBRUwsS0FBSyxTQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FyaWFIYXNQb3B1cFZhbHVlLCBDZGtDb21ib2JveFBhbmVsfSBmcm9tICcuL2NvbWJvYm94LXBhbmVsJztcblxuZXhwb3J0IGNvbnN0IFBBTkVMID0gbmV3IEluamVjdGlvblRva2VuPENka0NvbWJvYm94UGFuZWw+KCdDZGtDb21ib2JveFBhbmVsJyk7XG5cbmxldCBuZXh0SWQgPSAwO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrQ29tYm9ib3hQb3B1cF0nLFxuICBleHBvcnRBczogJ2Nka0NvbWJvYm94UG9wdXAnLFxuICBob3N0OiB7XG4gICAgJ2NsYXNzJzogJ2Nkay1jb21ib2JveC1wb3B1cCcsXG4gICAgJ1thdHRyLnJvbGVdJzogJ3JvbGUnLFxuICAgICdbaWRdJzogJ2lkJyxcbiAgICAndGFiaW5kZXgnOiAnLTEnLFxuICAgICcoZm9jdXMpJzogJ2ZvY3VzRmlyc3RFbGVtZW50KCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ29tYm9ib3hQb3B1cDxUID0gdW5rbm93bj4gaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBnZXQgcm9sZSgpOiBBcmlhSGFzUG9wdXBWYWx1ZSB7XG4gICAgcmV0dXJuIHRoaXMuX3JvbGU7XG4gIH1cbiAgc2V0IHJvbGUodmFsdWU6IEFyaWFIYXNQb3B1cFZhbHVlKSB7XG4gICAgdGhpcy5fcm9sZSA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX3JvbGU6IEFyaWFIYXNQb3B1cFZhbHVlID0gJ2RpYWxvZyc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGZpcnN0Rm9jdXMoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9maXJzdEZvY3VzRWxlbWVudDtcbiAgfVxuICBzZXQgZmlyc3RGb2N1cyhpZDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLl9maXJzdEZvY3VzRWxlbWVudCA9IGlkO1xuICB9XG4gIHByaXZhdGUgX2ZpcnN0Rm9jdXNFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICBASW5wdXQoKSBpZCA9IGBjZGstY29tYm9ib3gtcG9wdXAtJHtuZXh0SWQrK31gO1xuXG4gIEBJbnB1dCgncGFyZW50UGFuZWwnKSBwcml2YXRlIHJlYWRvbmx5IF9leHBsaWNpdFBhbmVsOiBDZGtDb21ib2JveFBhbmVsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUEFORUwpIHJlYWRvbmx5IF9wYXJlbnRQYW5lbD86IENka0NvbWJvYm94UGFuZWw8VD4sXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWdpc3RlcldpdGhQYW5lbCgpO1xuICB9XG5cbiAgcmVnaXN0ZXJXaXRoUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3BhcmVudFBhbmVsID09PSBudWxsIHx8IHRoaXMuX3BhcmVudFBhbmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2V4cGxpY2l0UGFuZWwuX3JlZ2lzdGVyQ29udGVudCh0aGlzLmlkLCB0aGlzLl9yb2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFyZW50UGFuZWwuX3JlZ2lzdGVyQ29udGVudCh0aGlzLmlkLCB0aGlzLl9yb2xlKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c0ZpcnN0RWxlbWVudCgpIHtcbiAgICBpZiAodGhpcy5fZmlyc3RGb2N1c0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2ZpcnN0Rm9jdXNFbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuIl19