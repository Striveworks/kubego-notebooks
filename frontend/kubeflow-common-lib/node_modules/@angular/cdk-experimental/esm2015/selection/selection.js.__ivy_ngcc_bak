/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { isDataSource } from '@angular/cdk/collections';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Observable, of as observableOf, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SelectionSet } from './selection-set';
/**
 * Manages the selection states of the items and provides methods to check and update the selection
 * states.
 * It must be applied to the parent element if `cdkSelectionToggle`, `cdkSelectAll`,
 * `cdkRowSelection` and `cdkSelectionColumn` are applied.
 */
export class CdkSelection {
    constructor() {
        /** Emits when selection changes. */
        this.change = new EventEmitter();
        this._destroyed = new Subject();
        this.selectAllState = 'none';
    }
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /** Whether to support multiple selection */
    get multiple() {
        return this._multiple;
    }
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    _switchDataSource(dataSource) {
        this._data = [];
        // TODO: Move this logic to a shared function in `cdk/collections`.
        if (isDataSource(this._dataSource)) {
            this._dataSource.disconnect(this);
        }
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        this._dataSource = dataSource;
    }
    _observeRenderChanges() {
        if (!this._dataSource) {
            return;
        }
        let dataStream;
        if (isDataSource(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
        }
        else if (this._dataSource instanceof Observable) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = observableOf(this._dataSource);
        }
        if (dataStream == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Unknown data source');
        }
        this._renderChangeSubscription =
            dataStream.pipe(takeUntil(this._destroyed)).subscribe((data) => {
                this._data = data || [];
            });
    }
    ngOnInit() {
        this._selection = new SelectionSet(this._multiple, this.trackByFn);
        this._selection.changed.pipe(takeUntil(this._destroyed)).subscribe((change) => {
            this._updateSelectAllState();
            this.change.emit(change);
        });
    }
    ngAfterContentChecked() {
        if (this._dataSource && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        if (isDataSource(this._dataSource)) {
            this._dataSource.disconnect(this);
        }
    }
    /** Toggles selection for a given value. `index` is required if `trackBy` is used. */
    toggleSelection(value, index) {
        if (!!this.trackByFn && index == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelection: index required when trackBy is used');
        }
        if (this.isSelected(value, index)) {
            this._selection.deselect({ value, index });
        }
        else {
            this._selection.select({ value, index });
        }
    }
    /**
     * Toggles select-all. If no value is selected, select all values. If all values or some of the
     * values are selected, de-select all values.
     */
    toggleSelectAll() {
        if (!this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelection: multiple selection not enabled');
        }
        if (this.selectAllState === 'none') {
            this._selectAll();
        }
        else {
            this._clearAll();
        }
    }
    /** Checks whether a value is selected. `index` is required if `trackBy` is used. */
    isSelected(value, index) {
        if (!!this.trackByFn && index == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelection: index required when trackBy is used');
        }
        return this._selection.isSelected({ value, index });
    }
    /** Checks whether all values are selected. */
    isAllSelected() {
        return this._data.every((value, index) => this._selection.isSelected({ value, index }));
    }
    /** Checks whether partially selected. */
    isPartialSelected() {
        return !this.isAllSelected() &&
            this._data.some((value, index) => this._selection.isSelected({ value, index }));
    }
    _selectAll() {
        const toSelect = [];
        this._data.forEach((value, index) => {
            toSelect.push({ value, index });
        });
        this._selection.select(...toSelect);
    }
    _clearAll() {
        const toDeselect = [];
        this._data.forEach((value, index) => {
            toDeselect.push({ value, index });
        });
        this._selection.deselect(...toDeselect);
    }
    _updateSelectAllState() {
        if (this.isAllSelected()) {
            this.selectAllState = 'all';
        }
        else if (this.isPartialSelected()) {
            this.selectAllState = 'partial';
        }
        else {
            this.selectAllState = 'none';
        }
    }
}
CdkSelection.decorators = [
    { type: Directive, args: [{
                selector: '[cdkSelection]',
                exportAs: 'cdkSelection',
            },] }
];
CdkSelection.propDecorators = {
    dataSource: [{ type: Input }],
    trackByFn: [{ type: Input, args: ['trackBy',] }],
    multiple: [{ type: Input, args: ['cdkSelectionMultiple',] }],
    change: [{ type: Output, args: ['cdkSelectionChange',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay1leHBlcmltZW50YWwvc2VsZWN0aW9uL3NlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQWUscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQStCLFlBQVksRUFBWSxNQUFNLDBCQUEwQixDQUFDO0FBQy9GLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLE9BQU8sRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFekMsT0FBTyxFQUF1QyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRjs7Ozs7R0FLRztBQUtILE1BQU0sT0FBTyxZQUFZO0lBSnpCO1FBOEJFLG9DQUFvQztRQUNHLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBc0IsQ0FBQztRQVEvRSxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQWlKekMsbUJBQWMsR0FBbUIsTUFBTSxDQUFDO0lBRzFDLENBQUM7SUFwTEMsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxVQUE4QjtRQUMzQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7SUFLRCw0Q0FBNEM7SUFDNUMsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7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SSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8scUJBQXFCO1FBQzNCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7WUF0TEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7eUJBSUUsS0FBSzt3QkFXTCxLQUFLLFNBQUMsU0FBUzt1QkFHZixLQUFLLFNBQUMsc0JBQXNCO3FCQVU1QixNQUFNLFNBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Qm9vbGVhbklucHV0LCBjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0NvbGxlY3Rpb25WaWV3ZXIsIERhdGFTb3VyY2UsIGlzRGF0YVNvdXJjZSwgTGlzdFJhbmdlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUcmFja0J5RnVuY3Rpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7U2VsZWN0YWJsZVdpdGhJbmRleCwgU2VsZWN0aW9uQ2hhbmdlLCBTZWxlY3Rpb25TZXR9IGZyb20gJy4vc2VsZWN0aW9uLXNldCc7XG5cbi8qKlxuICogTWFuYWdlcyB0aGUgc2VsZWN0aW9uIHN0YXRlcyBvZiB0aGUgaXRlbXMgYW5kIHByb3ZpZGVzIG1ldGhvZHMgdG8gY2hlY2sgYW5kIHVwZGF0ZSB0aGUgc2VsZWN0aW9uXG4gKiBzdGF0ZXMuXG4gKiBJdCBtdXN0IGJlIGFwcGxpZWQgdG8gdGhlIHBhcmVudCBlbGVtZW50IGlmIGBjZGtTZWxlY3Rpb25Ub2dnbGVgLCBgY2RrU2VsZWN0QWxsYCxcbiAqIGBjZGtSb3dTZWxlY3Rpb25gIGFuZCBgY2RrU2VsZWN0aW9uQ29sdW1uYCBhcmUgYXBwbGllZC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1NlbGVjdGlvbl0nLFxuICBleHBvcnRBczogJ2Nka1NlbGVjdGlvbicsXG59KVxuZXhwb3J0IGNsYXNzIENka1NlbGVjdGlvbjxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgQ29sbGVjdGlvblZpZXdlciwgT25EZXN0cm95IHtcbiAgdmlld0NoYW5nZTogT2JzZXJ2YWJsZTxMaXN0UmFuZ2U+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkYXRhU291cmNlKCk6IFRhYmxlRGF0YVNvdXJjZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTb3VyY2U7XG4gIH1cbiAgc2V0IGRhdGFTb3VyY2UoZGF0YVNvdXJjZTogVGFibGVEYXRhU291cmNlPFQ+KSB7XG4gICAgaWYgKHRoaXMuX2RhdGFTb3VyY2UgIT09IGRhdGFTb3VyY2UpIHtcbiAgICAgIHRoaXMuX3N3aXRjaERhdGFTb3VyY2UoZGF0YVNvdXJjZSk7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2RhdGFTb3VyY2U6IFRhYmxlRGF0YVNvdXJjZTxUPjtcblxuICBASW5wdXQoJ3RyYWNrQnknKSB0cmFja0J5Rm46IFRyYWNrQnlGdW5jdGlvbjxUPjtcblxuICAvKiogV2hldGhlciB0byBzdXBwb3J0IG11bHRpcGxlIHNlbGVjdGlvbiAqL1xuICBASW5wdXQoJ2Nka1NlbGVjdGlvbk11bHRpcGxlJylcbiAgZ2V0IG11bHRpcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuICBzZXQgbXVsdGlwbGUobXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShtdWx0aXBsZSk7XG4gIH1cbiAgcHJvdGVjdGVkIF9tdWx0aXBsZTogYm9vbGVhbjtcblxuICAvKiogRW1pdHMgd2hlbiBzZWxlY3Rpb24gY2hhbmdlcy4gKi9cbiAgQE91dHB1dCgnY2RrU2VsZWN0aW9uQ2hhbmdlJykgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTZWxlY3Rpb25DaGFuZ2U8VD4+KCk7XG5cbiAgLyoqIExhdGVzdCBkYXRhIHByb3ZpZGVkIGJ5IHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgcHJpdmF0ZSBfZGF0YTogVFtdfHJlYWRvbmx5IFRbXTtcblxuICAvKiogU3Vic2NyaXB0aW9uIHRoYXQgbGlzdGVucyBmb3IgdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIGRhdGEgc291cmNlLiAgKi9cbiAgcHJpdmF0ZSBfcmVuZGVyQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb258bnVsbDtcblxuICBwcml2YXRlIF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgX3NlbGVjdGlvbjogU2VsZWN0aW9uU2V0PFQ+O1xuXG4gIHByaXZhdGUgX3N3aXRjaERhdGFTb3VyY2UoZGF0YVNvdXJjZTogVGFibGVEYXRhU291cmNlPFQ+KSB7XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuXG4gICAgLy8gVE9ETzogTW92ZSB0aGlzIGxvZ2ljIHRvIGEgc2hhcmVkIGZ1bmN0aW9uIGluIGBjZGsvY29sbGVjdGlvbnNgLlxuICAgIGlmIChpc0RhdGFTb3VyY2UodGhpcy5fZGF0YVNvdXJjZSkpIHtcbiAgICAgIHRoaXMuX2RhdGFTb3VyY2UuZGlzY29ubmVjdCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmVuZGVyQ2hhbmdlU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuX3JlbmRlckNoYW5nZVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gIH1cblxuICBwcml2YXRlIF9vYnNlcnZlUmVuZGVyQ2hhbmdlcygpIHtcbiAgICBpZiAoIXRoaXMuX2RhdGFTb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YVN0cmVhbTogT2JzZXJ2YWJsZTxyZWFkb25seSBUW10+fHVuZGVmaW5lZDtcblxuICAgIGlmIChpc0RhdGFTb3VyY2UodGhpcy5fZGF0YVNvdXJjZSkpIHtcbiAgICAgIGRhdGFTdHJlYW0gPSB0aGlzLl9kYXRhU291cmNlLmNvbm5lY3QodGhpcyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9kYXRhU291cmNlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgZGF0YVN0cmVhbSA9IHRoaXMuX2RhdGFTb3VyY2U7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMuX2RhdGFTb3VyY2UpKSB7XG4gICAgICBkYXRhU3RyZWFtID0gb2JzZXJ2YWJsZU9mKHRoaXMuX2RhdGFTb3VyY2UpO1xuICAgIH1cblxuICAgIGlmIChkYXRhU3RyZWFtID09IG51bGwgJiYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkpIHtcbiAgICAgIHRocm93IEVycm9yKCdVbmtub3duIGRhdGEgc291cmNlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyQ2hhbmdlU3Vic2NyaXB0aW9uID1cbiAgICAgICAgZGF0YVN0cmVhbSEucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGEgfHwgW107XG4gICAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvblNldDxUPih0aGlzLl9tdWx0aXBsZSwgdGhpcy50cmFja0J5Rm4pO1xuICAgIHRoaXMuX3NlbGVjdGlvbi5jaGFuZ2VkLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZCkpLnN1YnNjcmliZSgoY2hhbmdlKSA9PiB7XG4gICAgICB0aGlzLl91cGRhdGVTZWxlY3RBbGxTdGF0ZSgpO1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChjaGFuZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLl9kYXRhU291cmNlICYmICF0aGlzLl9yZW5kZXJDaGFuZ2VTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX29ic2VydmVSZW5kZXJDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcblxuICAgIGlmIChpc0RhdGFTb3VyY2UodGhpcy5fZGF0YVNvdXJjZSkpIHtcbiAgICAgIHRoaXMuX2RhdGFTb3VyY2UuZGlzY29ubmVjdCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKiogVG9nZ2xlcyBzZWxlY3Rpb24gZm9yIGEgZ2l2ZW4gdmFsdWUuIGBpbmRleGAgaXMgcmVxdWlyZWQgaWYgYHRyYWNrQnlgIGlzIHVzZWQuICovXG4gIHRvZ2dsZVNlbGVjdGlvbih2YWx1ZTogVCwgaW5kZXg/OiBudW1iZXIpIHtcbiAgICBpZiAoISF0aGlzLnRyYWNrQnlGbiAmJiBpbmRleCA9PSBudWxsICYmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2RrU2VsZWN0aW9uOiBpbmRleCByZXF1aXJlZCB3aGVuIHRyYWNrQnkgaXMgdXNlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQodmFsdWUsIGluZGV4KSkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uLmRlc2VsZWN0KHt2YWx1ZSwgaW5kZXh9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uLnNlbGVjdCh7dmFsdWUsIGluZGV4fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgc2VsZWN0LWFsbC4gSWYgbm8gdmFsdWUgaXMgc2VsZWN0ZWQsIHNlbGVjdCBhbGwgdmFsdWVzLiBJZiBhbGwgdmFsdWVzIG9yIHNvbWUgb2YgdGhlXG4gICAqIHZhbHVlcyBhcmUgc2VsZWN0ZWQsIGRlLXNlbGVjdCBhbGwgdmFsdWVzLlxuICAgKi9cbiAgdG9nZ2xlU2VsZWN0QWxsKCkge1xuICAgIGlmICghdGhpcy5fbXVsdGlwbGUgJiYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkpIHtcbiAgICAgIHRocm93IEVycm9yKCdDZGtTZWxlY3Rpb246IG11bHRpcGxlIHNlbGVjdGlvbiBub3QgZW5hYmxlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdEFsbFN0YXRlID09PSAnbm9uZScpIHtcbiAgICAgIHRoaXMuX3NlbGVjdEFsbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jbGVhckFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBDaGVja3Mgd2hldGhlciBhIHZhbHVlIGlzIHNlbGVjdGVkLiBgaW5kZXhgIGlzIHJlcXVpcmVkIGlmIGB0cmFja0J5YCBpcyB1c2VkLiAqL1xuICBpc1NlbGVjdGVkKHZhbHVlOiBULCBpbmRleD86IG51bWJlcikge1xuICAgIGlmICghIXRoaXMudHJhY2tCeUZuICYmIGluZGV4ID09IG51bGwgJiYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkpIHtcbiAgICAgIHRocm93IEVycm9yKCdDZGtTZWxlY3Rpb246IGluZGV4IHJlcXVpcmVkIHdoZW4gdHJhY2tCeSBpcyB1c2VkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbi5pc1NlbGVjdGVkKHt2YWx1ZSwgaW5kZXh9KTtcbiAgfVxuXG4gIC8qKiBDaGVja3Mgd2hldGhlciBhbGwgdmFsdWVzIGFyZSBzZWxlY3RlZC4gKi9cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiB0aGlzLl9zZWxlY3Rpb24uaXNTZWxlY3RlZCh7dmFsdWUsIGluZGV4fSkpO1xuICB9XG5cbiAgLyoqIENoZWNrcyB3aGV0aGVyIHBhcnRpYWxseSBzZWxlY3RlZC4gKi9cbiAgaXNQYXJ0aWFsU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzQWxsU2VsZWN0ZWQoKSAmJlxuICAgICAgICB0aGlzLl9kYXRhLnNvbWUoKHZhbHVlLCBpbmRleCkgPT4gdGhpcy5fc2VsZWN0aW9uLmlzU2VsZWN0ZWQoe3ZhbHVlLCBpbmRleH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdEFsbCgpIHtcbiAgICBjb25zdCB0b1NlbGVjdDogU2VsZWN0YWJsZVdpdGhJbmRleDxUPltdID0gW107XG4gICAgdGhpcy5fZGF0YS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgIHRvU2VsZWN0LnB1c2goe3ZhbHVlLCBpbmRleH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc2VsZWN0aW9uLnNlbGVjdCguLi50b1NlbGVjdCk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhckFsbCgpIHtcbiAgICBjb25zdCB0b0Rlc2VsZWN0OiBTZWxlY3RhYmxlV2l0aEluZGV4PFQ+W10gPSBbXTtcbiAgICB0aGlzLl9kYXRhLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgdG9EZXNlbGVjdC5wdXNoKHt2YWx1ZSwgaW5kZXh9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3NlbGVjdGlvbi5kZXNlbGVjdCguLi50b0Rlc2VsZWN0KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNlbGVjdEFsbFN0YXRlKCkge1xuICAgIGlmICh0aGlzLmlzQWxsU2VsZWN0ZWQoKSkge1xuICAgICAgdGhpcy5zZWxlY3RBbGxTdGF0ZSA9ICdhbGwnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1BhcnRpYWxTZWxlY3RlZCgpKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbFN0YXRlID0gJ3BhcnRpYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbFN0YXRlID0gJ25vbmUnO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbFN0YXRlOiBTZWxlY3RBbGxTdGF0ZSA9ICdub25lJztcblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbXVsdGlwbGU6IEJvb2xlYW5JbnB1dDtcbn1cblxudHlwZSBTZWxlY3RBbGxTdGF0ZSA9ICdhbGwnfCdub25lJ3wncGFydGlhbCc7XG50eXBlIFRhYmxlRGF0YVNvdXJjZTxUPiA9IERhdGFTb3VyY2U8VD58T2JzZXJ2YWJsZTxyZWFkb25seSBUW10+fHJlYWRvbmx5IFRbXTtcbiJdfQ==