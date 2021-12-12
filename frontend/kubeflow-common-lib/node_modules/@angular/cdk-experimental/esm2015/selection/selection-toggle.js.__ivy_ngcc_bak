/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Directive, Inject, Input, Optional, Self } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { of as observableOf, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { CdkSelection } from './selection';
/**
 * Makes the element a selection toggle.
 *
 * Must be used within a parent `CdkSelection` directive.
 * Must be provided with the value. If `trackBy` is used on `CdkSelection`, the index of the value
 * is required. If the element implements `ControlValueAccessor`, e.g. `MatCheckbox`, the directive
 * automatically connects it with the selection state provided by the `CdkSelection` directive. If
 * not, use `checked$` to get the checked state of the value, and `toggle()` to change the selection
 * state.
 */
export class CdkSelectionToggle {
    constructor(_selection, _controlValueAccessors) {
        this._selection = _selection;
        this._controlValueAccessors = _controlValueAccessors;
        /** The checked state of the selection toggle */
        this.checked = this._selection.change.pipe(switchMap(() => observableOf(this._isSelected())), distinctUntilChanged());
        this._destroyed = new Subject();
    }
    /** The index of the value in the list. Required when used with `trackBy` */
    get index() { return this._index; }
    set index(index) { this._index = coerceNumberProperty(index); }
    /** Toggles the selection */
    toggle() {
        this._selection.toggleSelection(this.value, this.index);
    }
    ngOnInit() {
        this._assertValidParentSelection();
        this._configureControlValueAccessor();
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    _assertValidParentSelection() {
        if (!this._selection && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelectAll: missing CdkSelection in the parent');
        }
    }
    _configureControlValueAccessor() {
        if (this._controlValueAccessors && this._controlValueAccessors.length) {
            this._controlValueAccessors[0].registerOnChange((e) => {
                if (typeof e === 'boolean') {
                    this.toggle();
                }
            });
            this.checked.pipe(takeUntil(this._destroyed)).subscribe((state) => {
                this._controlValueAccessors[0].writeValue(state);
            });
        }
    }
    _isSelected() {
        return this._selection.isSelected(this.value, this.index);
    }
}
CdkSelectionToggle.decorators = [
    { type: Directive, args: [{
                selector: '[cdkSelectionToggle]',
                exportAs: 'cdkSelectionToggle',
            },] }
];
CdkSelectionToggle.ctorParameters = () => [
    { type: CdkSelection, decorators: [{ type: Optional }, { type: Inject, args: [CdkSelection,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Self }, { type: Inject, args: [NG_VALUE_ACCESSOR,] }] }
];
CdkSelectionToggle.propDecorators = {
    value: [{ type: Input, args: ['cdkSelectionToggleValue',] }],
    index: [{ type: Input, args: ['cdkSelectionToggleIndex',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLXRvZ2dsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9zZWxlY3Rpb24tdG9nZ2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxvQkFBb0IsRUFBYyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsSUFBSSxFQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBdUIsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RSxPQUFPLEVBQWEsRUFBRSxJQUFJLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0QsT0FBTyxFQUFDLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXpDOzs7Ozs7Ozs7R0FTRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7SUF1QjdCLFlBQzhDLFVBQTJCLEVBQ2Qsc0JBQzdCO1FBRmdCLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQ2QsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUNuRDtRQWhCOUIsZ0RBQWdEO1FBQ3ZDLFlBQU8sR0FBd0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUMvRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQ2pELG9CQUFvQixFQUFFLENBQ3pCLENBQUM7UUFPTSxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQU10QyxDQUFDO0lBdkJKLDRFQUE0RTtJQUM1RSxJQUNJLEtBQUssS0FBdUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRCxJQUFJLEtBQUssQ0FBQyxLQUF1QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBU2pGLDRCQUE0QjtJQUM1QixNQUFNO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVVELFFBQVE7UUFDTixJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sMkJBQTJCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZFLE1BQU0sS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDakU7SUFDSCxDQUFDO0lBRU8sOEJBQThCO1FBQ3BDLElBQUksSUFBSSxDQUFDLHNCQUFzQixJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7WUFDckUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUU7Z0JBQzdELElBQUksT0FBTyxDQUFDLEtBQUssU0FBUyxFQUFFO29CQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2Y7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuRCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVPLFdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7OztZQWZPLFlBQVksdUJBd0NiLFFBQVEsWUFBSSxNQUFNLFNBQUMsWUFBWTt3Q0FDL0IsUUFBUSxZQUFJLElBQUksWUFBSSxNQUFNLFNBQUMsaUJBQWlCOzs7b0JBdkJoRCxLQUFLLFNBQUMseUJBQXlCO29CQUcvQixLQUFLLFNBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y29lcmNlTnVtYmVyUHJvcGVydHksIE51bWJlcklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwLCB0YWtlVW50aWx9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtDZGtTZWxlY3Rpb259IGZyb20gJy4vc2VsZWN0aW9uJztcblxuLyoqXG4gKiBNYWtlcyB0aGUgZWxlbWVudCBhIHNlbGVjdGlvbiB0b2dnbGUuXG4gKlxuICogTXVzdCBiZSB1c2VkIHdpdGhpbiBhIHBhcmVudCBgQ2RrU2VsZWN0aW9uYCBkaXJlY3RpdmUuXG4gKiBNdXN0IGJlIHByb3ZpZGVkIHdpdGggdGhlIHZhbHVlLiBJZiBgdHJhY2tCeWAgaXMgdXNlZCBvbiBgQ2RrU2VsZWN0aW9uYCwgdGhlIGluZGV4IG9mIHRoZSB2YWx1ZVxuICogaXMgcmVxdWlyZWQuIElmIHRoZSBlbGVtZW50IGltcGxlbWVudHMgYENvbnRyb2xWYWx1ZUFjY2Vzc29yYCwgZS5nLiBgTWF0Q2hlY2tib3hgLCB0aGUgZGlyZWN0aXZlXG4gKiBhdXRvbWF0aWNhbGx5IGNvbm5lY3RzIGl0IHdpdGggdGhlIHNlbGVjdGlvbiBzdGF0ZSBwcm92aWRlZCBieSB0aGUgYENka1NlbGVjdGlvbmAgZGlyZWN0aXZlLiBJZlxuICogbm90LCB1c2UgYGNoZWNrZWQkYCB0byBnZXQgdGhlIGNoZWNrZWQgc3RhdGUgb2YgdGhlIHZhbHVlLCBhbmQgYHRvZ2dsZSgpYCB0byBjaGFuZ2UgdGhlIHNlbGVjdGlvblxuICogc3RhdGUuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZGtTZWxlY3Rpb25Ub2dnbGVdJyxcbiAgZXhwb3J0QXM6ICdjZGtTZWxlY3Rpb25Ub2dnbGUnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtTZWxlY3Rpb25Ub2dnbGU8VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIC8qKiBUaGUgdmFsdWUgdGhhdCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIHRvZ2dsZSAqL1xuICBASW5wdXQoJ2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlJykgdmFsdWU6IFQ7XG5cbiAgLyoqIFRoZSBpbmRleCBvZiB0aGUgdmFsdWUgaW4gdGhlIGxpc3QuIFJlcXVpcmVkIHdoZW4gdXNlZCB3aXRoIGB0cmFja0J5YCAqL1xuICBASW5wdXQoJ2Nka1NlbGVjdGlvblRvZ2dsZUluZGV4JylcbiAgZ2V0IGluZGV4KCk6IG51bWJlcnx1bmRlZmluZWQgeyByZXR1cm4gdGhpcy5faW5kZXg7IH1cbiAgc2V0IGluZGV4KGluZGV4OiBudW1iZXJ8dW5kZWZpbmVkKSB7IHRoaXMuX2luZGV4ID0gY29lcmNlTnVtYmVyUHJvcGVydHkoaW5kZXgpOyB9XG4gIHByb3RlY3RlZCBfaW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqIFRoZSBjaGVja2VkIHN0YXRlIG9mIHRoZSBzZWxlY3Rpb24gdG9nZ2xlICovXG4gIHJlYWRvbmx5IGNoZWNrZWQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl9zZWxlY3Rpb24uY2hhbmdlLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gb2JzZXJ2YWJsZU9mKHRoaXMuX2lzU2VsZWN0ZWQoKSkpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgKTtcblxuICAvKiogVG9nZ2xlcyB0aGUgc2VsZWN0aW9uICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb24udG9nZ2xlU2VsZWN0aW9uKHRoaXMudmFsdWUsIHRoaXMuaW5kZXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ2RrU2VsZWN0aW9uKSBwcml2YXRlIF9zZWxlY3Rpb246IENka1NlbGVjdGlvbjxUPixcbiAgICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgQEluamVjdChOR19WQUxVRV9BQ0NFU1NPUikgcHJpdmF0ZSBfY29udHJvbFZhbHVlQWNjZXNzb3JzOlxuICAgICAgICAgIENvbnRyb2xWYWx1ZUFjY2Vzc29yW10sXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9hc3NlcnRWYWxpZFBhcmVudFNlbGVjdGlvbigpO1xuICAgIHRoaXMuX2NvbmZpZ3VyZUNvbnRyb2xWYWx1ZUFjY2Vzc29yKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXNzZXJ0VmFsaWRQYXJlbnRTZWxlY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9zZWxlY3Rpb24gJiYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkpIHtcbiAgICAgIHRocm93IEVycm9yKCdDZGtTZWxlY3RBbGw6IG1pc3NpbmcgQ2RrU2VsZWN0aW9uIGluIHRoZSBwYXJlbnQnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb25maWd1cmVDb250cm9sVmFsdWVBY2Nlc3NvcigpIHtcbiAgICBpZiAodGhpcy5fY29udHJvbFZhbHVlQWNjZXNzb3JzICYmIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29ycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yc1swXS5yZWdpc3Rlck9uQ2hhbmdlKChlOiB1bmtub3duKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2hlY2tlZC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xWYWx1ZUFjY2Vzc29yc1swXS53cml0ZVZhbHVlKHN0YXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbi5pc1NlbGVjdGVkKHRoaXMudmFsdWUsIHRoaXMuaW5kZXgpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2luZGV4OiBOdW1iZXJJbnB1dDtcbn1cbiJdfQ==