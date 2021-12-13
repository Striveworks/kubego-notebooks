/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { Directive, Input } from '@angular/core';
import { CdkSelection } from './selection';
/**
 * Applies `cdk-selected` class and `aria-selected` to an element.
 *
 * Must be used within a parent `CdkSelection` directive.
 * Must be provided with the value. The index is required if `trackBy` is used on the `CdkSelection`
 * directive.
 */
export class CdkRowSelection {
    constructor(_selection) {
        this._selection = _selection;
    }
    get index() { return this._index; }
    set index(index) { this._index = coerceNumberProperty(index); }
}
CdkRowSelection.decorators = [
    { type: Directive, args: [{
                selector: '[cdkRowSelection]',
                host: {
                    '[class.cdk-selected]': '_selection.isSelected(this.value, this.index)',
                    '[attr.aria-selected]': '_selection.isSelected(this.value, this.index)',
                },
            },] }
];
CdkRowSelection.ctorParameters = () => [
    { type: CdkSelection }
];
CdkRowSelection.propDecorators = {
    value: [{ type: Input, args: ['cdkRowSelectionValue',] }],
    index: [{ type: Input, args: ['cdkRowSelectionIndex',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9yb3ctc2VsZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxvQkFBb0IsRUFBYyxNQUFNLHVCQUF1QixDQUFDO0FBQ3hFLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9DLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFFekM7Ozs7OztHQU1HO0FBUUgsTUFBTSxPQUFPLGVBQWU7SUFRMUIsWUFBcUIsVUFBMkI7UUFBM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFBRyxDQUFDO0lBTHBELElBQ0ksS0FBSyxLQUF1QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JELElBQUksS0FBSyxDQUFDLEtBQXVCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OztZQVpsRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsSUFBSSxFQUFFO29CQUNKLHNCQUFzQixFQUFFLCtDQUErQztvQkFDdkUsc0JBQXNCLEVBQUUsK0NBQStDO2lCQUN4RTthQUNGOzs7WUFmTyxZQUFZOzs7b0JBaUJqQixLQUFLLFNBQUMsc0JBQXNCO29CQUU1QixLQUFLLFNBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Y29lcmNlTnVtYmVyUHJvcGVydHksIE51bWJlcklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDZGtTZWxlY3Rpb259IGZyb20gJy4vc2VsZWN0aW9uJztcblxuLyoqXG4gKiBBcHBsaWVzIGBjZGstc2VsZWN0ZWRgIGNsYXNzIGFuZCBgYXJpYS1zZWxlY3RlZGAgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBNdXN0IGJlIHVzZWQgd2l0aGluIGEgcGFyZW50IGBDZGtTZWxlY3Rpb25gIGRpcmVjdGl2ZS5cbiAqIE11c3QgYmUgcHJvdmlkZWQgd2l0aCB0aGUgdmFsdWUuIFRoZSBpbmRleCBpcyByZXF1aXJlZCBpZiBgdHJhY2tCeWAgaXMgdXNlZCBvbiB0aGUgYENka1NlbGVjdGlvbmBcbiAqIGRpcmVjdGl2ZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1Jvd1NlbGVjdGlvbl0nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5jZGstc2VsZWN0ZWRdJzogJ19zZWxlY3Rpb24uaXNTZWxlY3RlZCh0aGlzLnZhbHVlLCB0aGlzLmluZGV4KScsXG4gICAgJ1thdHRyLmFyaWEtc2VsZWN0ZWRdJzogJ19zZWxlY3Rpb24uaXNTZWxlY3RlZCh0aGlzLnZhbHVlLCB0aGlzLmluZGV4KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENka1Jvd1NlbGVjdGlvbjxUPiB7XG4gIEBJbnB1dCgnY2RrUm93U2VsZWN0aW9uVmFsdWUnKSB2YWx1ZTogVDtcblxuICBASW5wdXQoJ2Nka1Jvd1NlbGVjdGlvbkluZGV4JylcbiAgZ2V0IGluZGV4KCk6IG51bWJlcnx1bmRlZmluZWQgeyByZXR1cm4gdGhpcy5faW5kZXg7IH1cbiAgc2V0IGluZGV4KGluZGV4OiBudW1iZXJ8dW5kZWZpbmVkKSB7IHRoaXMuX2luZGV4ID0gY29lcmNlTnVtYmVyUHJvcGVydHkoaW5kZXgpOyB9XG4gIHByb3RlY3RlZCBfaW5kZXg/OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocmVhZG9ubHkgX3NlbGVjdGlvbjogQ2RrU2VsZWN0aW9uPFQ+KSB7fVxuXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9pbmRleDogTnVtYmVySW5wdXQ7XG59XG4iXX0=