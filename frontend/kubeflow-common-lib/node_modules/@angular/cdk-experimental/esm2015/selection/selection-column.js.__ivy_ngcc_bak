/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkCellDef, CdkColumnDef, CdkHeaderCellDef, CdkTable } from '@angular/cdk/table';
import { Component, Input, Optional, ViewChild, ChangeDetectionStrategy, ViewEncapsulation, Inject, } from '@angular/core';
import { CdkSelection } from './selection';
/**
 * Column that adds row selecting checkboxes and a select-all checkbox if `cdkSelectionMultiple` is
 * `true`.
 *
 * Must be used within a parent `CdkSelection` directive.
 */
export class CdkSelectionColumn {
    constructor(_table, selection) {
        this._table = _table;
        this.selection = selection;
    }
    /** Column name that should be used to reference this column. */
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        this._syncColumnDefName();
    }
    ngOnInit() {
        if (!this.selection && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelectionColumn: missing CdkSelection in the parent');
        }
        this._syncColumnDefName();
        if (this._table) {
            this._columnDef.cell = this._cell;
            this._columnDef.headerCell = this._headerCell;
            this._table.addColumnDef(this._columnDef);
        }
        else if ((typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelectionColumn: missing parent table');
        }
    }
    ngOnDestroy() {
        if (this._table) {
            this._table.removeColumnDef(this._columnDef);
        }
    }
    _syncColumnDefName() {
        if (this._columnDef) {
            this._columnDef.name = this._name;
        }
    }
}
CdkSelectionColumn.decorators = [
    { type: Component, args: [{
                selector: 'cdk-selection-column',
                template: `
    <ng-container cdkColumnDef>
      <th cdkHeaderCell *cdkHeaderCellDef>
        <input type="checkbox" *ngIf="selection.multiple"
            cdkSelectAll
            #allToggler="cdkSelectAll"
            [checked]="allToggler.checked | async"
            [indeterminate]="allToggler.indeterminate | async"
            (click)="allToggler.toggle($event)">
      </th>
      <td cdkCell *cdkCellDef="let row; let i = $index">
        <input type="checkbox"
            #toggler="cdkSelectionToggle"
            cdkSelectionToggle
            [cdkSelectionToggleValue]="row"
            [cdkSelectionToggleIndex]="i"
            (click)="toggler.toggle()"
            [checked]="toggler.checked | async">
      </td>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
CdkSelectionColumn.ctorParameters = () => [
    { type: CdkTable, decorators: [{ type: Optional }, { type: Inject, args: [CdkTable,] }] },
    { type: CdkSelection, decorators: [{ type: Optional }, { type: Inject, args: [CdkSelection,] }] }
];
CdkSelectionColumn.propDecorators = {
    name: [{ type: Input, args: ['cdkSelectionColumnName',] }],
    _columnDef: [{ type: ViewChild, args: [CdkColumnDef, { static: true },] }],
    _cell: [{ type: ViewChild, args: [CdkCellDef, { static: true },] }],
    _headerCell: [{ type: ViewChild, args: [CdkHeaderCellDef, { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLWNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9zZWxlY3Rpb24tY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFFBQVEsRUFDUixTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUV6Qzs7Ozs7R0FLRztBQTJCSCxNQUFNLE9BQU8sa0JBQWtCO0lBaUI3QixZQUMwQyxNQUFtQixFQUNkLFNBQTBCO1FBRC9CLFdBQU0sR0FBTixNQUFNLENBQWE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFpQjtJQUN0RSxDQUFDO0lBbkJKLGdFQUFnRTtJQUNoRSxJQUNJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksSUFBSSxDQUFDLElBQVk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQVlELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLENBQUMsRUFBRTtZQUN0RSxNQUFNLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMzQzthQUFNLElBQUksQ0FBQyxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxDQUFDLEVBQUU7WUFDMUQsTUFBTSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQztJQUNILENBQUM7OztZQTFFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OztZQTlDbUQsUUFBUSx1QkFpRXJELFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtZQXBEMUIsWUFBWSx1QkFxRGIsUUFBUSxZQUFJLE1BQU0sU0FBQyxZQUFZOzs7bUJBakJuQyxLQUFLLFNBQUMsd0JBQXdCO3lCQVc5QixTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztvQkFDdEMsU0FBUyxTQUFDLFVBQVUsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7MEJBQ3BDLFNBQVMsU0FBQyxnQkFBZ0IsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDZGtDZWxsRGVmLCBDZGtDb2x1bW5EZWYsIENka0hlYWRlckNlbGxEZWYsIENka1RhYmxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q2hpbGQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtDZGtTZWxlY3Rpb259IGZyb20gJy4vc2VsZWN0aW9uJztcblxuLyoqXG4gKiBDb2x1bW4gdGhhdCBhZGRzIHJvdyBzZWxlY3RpbmcgY2hlY2tib3hlcyBhbmQgYSBzZWxlY3QtYWxsIGNoZWNrYm94IGlmIGBjZGtTZWxlY3Rpb25NdWx0aXBsZWAgaXNcbiAqIGB0cnVlYC5cbiAqXG4gKiBNdXN0IGJlIHVzZWQgd2l0aGluIGEgcGFyZW50IGBDZGtTZWxlY3Rpb25gIGRpcmVjdGl2ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXNlbGVjdGlvbi1jb2x1bW4nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPlxuICAgICAgPHRoIGNka0hlYWRlckNlbGwgKmNka0hlYWRlckNlbGxEZWY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAqbmdJZj1cInNlbGVjdGlvbi5tdWx0aXBsZVwiXG4gICAgICAgICAgICBjZGtTZWxlY3RBbGxcbiAgICAgICAgICAgICNhbGxUb2dnbGVyPVwiY2RrU2VsZWN0QWxsXCJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cImFsbFRvZ2dsZXIuY2hlY2tlZCB8IGFzeW5jXCJcbiAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cImFsbFRvZ2dsZXIuaW5kZXRlcm1pbmF0ZSB8IGFzeW5jXCJcbiAgICAgICAgICAgIChjbGljayk9XCJhbGxUb2dnbGVyLnRvZ2dsZSgkZXZlbnQpXCI+XG4gICAgICA8L3RoPlxuICAgICAgPHRkIGNka0NlbGwgKmNka0NlbGxEZWY9XCJsZXQgcm93OyBsZXQgaSA9ICRpbmRleFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICN0b2dnbGVyPVwiY2RrU2VsZWN0aW9uVG9nZ2xlXCJcbiAgICAgICAgICAgIGNka1NlbGVjdGlvblRvZ2dsZVxuICAgICAgICAgICAgW2Nka1NlbGVjdGlvblRvZ2dsZVZhbHVlXT1cInJvd1wiXG4gICAgICAgICAgICBbY2RrU2VsZWN0aW9uVG9nZ2xlSW5kZXhdPVwiaVwiXG4gICAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlci50b2dnbGUoKVwiXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJ0b2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiPlxuICAgICAgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIENka1NlbGVjdGlvbkNvbHVtbjxUPiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqIENvbHVtbiBuYW1lIHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcmVmZXJlbmNlIHRoaXMgY29sdW1uLiAqL1xuICBASW5wdXQoJ2Nka1NlbGVjdGlvbkNvbHVtbk5hbWUnKVxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuXG4gICAgdGhpcy5fc3luY0NvbHVtbkRlZk5hbWUoKTtcbiAgfVxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZChDZGtDb2x1bW5EZWYsIHtzdGF0aWM6IHRydWV9KSBwcml2YXRlIHJlYWRvbmx5IF9jb2x1bW5EZWY6IENka0NvbHVtbkRlZjtcbiAgQFZpZXdDaGlsZChDZGtDZWxsRGVmLCB7c3RhdGljOiB0cnVlfSkgcHJpdmF0ZSByZWFkb25seSBfY2VsbDogQ2RrQ2VsbERlZjtcbiAgQFZpZXdDaGlsZChDZGtIZWFkZXJDZWxsRGVmLCB7c3RhdGljOiB0cnVlfSkgcHJpdmF0ZSByZWFkb25seSBfaGVhZGVyQ2VsbDogQ2RrSGVhZGVyQ2VsbERlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ2RrVGFibGUpIHByaXZhdGUgX3RhYmxlOiBDZGtUYWJsZTxUPixcbiAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ2RrU2VsZWN0aW9uKSByZWFkb25seSBzZWxlY3Rpb246IENka1NlbGVjdGlvbjxUPixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5zZWxlY3Rpb24gJiYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkpIHtcbiAgICAgIHRocm93IEVycm9yKCdDZGtTZWxlY3Rpb25Db2x1bW46IG1pc3NpbmcgQ2RrU2VsZWN0aW9uIGluIHRoZSBwYXJlbnQnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zeW5jQ29sdW1uRGVmTmFtZSgpO1xuXG4gICAgaWYgKHRoaXMuX3RhYmxlKSB7XG4gICAgICB0aGlzLl9jb2x1bW5EZWYuY2VsbCA9IHRoaXMuX2NlbGw7XG4gICAgICB0aGlzLl9jb2x1bW5EZWYuaGVhZGVyQ2VsbCA9IHRoaXMuX2hlYWRlckNlbGw7XG4gICAgICB0aGlzLl90YWJsZS5hZGRDb2x1bW5EZWYodGhpcy5fY29sdW1uRGVmKTtcbiAgICB9IGVsc2UgaWYgKCh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpKSB7XG4gICAgICB0aHJvdyBFcnJvcignQ2RrU2VsZWN0aW9uQ29sdW1uOiBtaXNzaW5nIHBhcmVudCB0YWJsZScpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl90YWJsZSkge1xuICAgICAgdGhpcy5fdGFibGUucmVtb3ZlQ29sdW1uRGVmKHRoaXMuX2NvbHVtbkRlZik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3luY0NvbHVtbkRlZk5hbWUoKSB7XG4gICAgaWYgKHRoaXMuX2NvbHVtbkRlZikge1xuICAgICAgdGhpcy5fY29sdW1uRGVmLm5hbWUgPSB0aGlzLl9uYW1lO1xuICAgIH1cbiAgfVxufVxuIl19