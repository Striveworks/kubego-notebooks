import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/material/tooltip";
function TableChipsListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.valueDescriptor.noValueText, "\n");
} }
function TableChipsListComponent_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chip_r2 = ctx.$implicit;
    i0.ɵɵproperty("color", chip_r2.color)("matTooltip", chip_r2.tooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", chip_r2.value, " ");
} }
export class TableChipsListComponent {
    hasVisibleItems(row) {
        return this.getChips(row).length > this.valueDescriptor.maxVisibleChips;
    }
    getVisibleChips(row) {
        return this.getChips(row).slice(0, this.valueDescriptor.maxVisibleChips);
    }
    getChips(row) {
        return this.valueDescriptor.getChips(row);
    }
    trackByFn(index, chip) {
        return chip.value;
    }
}
TableChipsListComponent.ɵfac = function TableChipsListComponent_Factory(t) { return new (t || TableChipsListComponent)(); };
TableChipsListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableChipsListComponent, selectors: [["lib-table-chips-list"]], inputs: { element: "element", valueDescriptor: "valueDescriptor" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [1, "chip-list-wa"], ["matTooltipClass", "custom-tooltip", "class", "list-chip", 3, "color", "matTooltip", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["matTooltipClass", "custom-tooltip", 1, "list-chip", 3, "color", "matTooltip"]], template: function TableChipsListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TableChipsListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        i0.ɵɵelementStart(1, "mat-chip-list", 1);
        i0.ɵɵtemplate(2, TableChipsListComponent_mat_chip_2_Template, 2, 3, "mat-chip", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hasVisibleItems(ctx.element));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.getVisibleChips(ctx.element))("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i1.NgIf, i2.MatChipList, i1.NgForOf, i2.MatChip, i3.MatTooltip], styles: [".chip-list-wa[_ngcontent-%COMP%]   .list-chip[_ngcontent-%COMP%]{min-height:24px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableChipsListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-table-chips-list',
                templateUrl: './chips-list.component.html',
                styleUrls: ['./chips-list.component.scss'],
            }]
    }], null, { element: [{
            type: Input
        }], valueDescriptor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3Jlc291cmNlLXRhYmxlL2NoaXBzLWxpc3QvY2hpcHMtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3Jlc291cmNlLXRhYmxlL2NoaXBzLWxpc3QvY2hpcHMtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQXpELDZCQUErQztJQUM3QyxZQUNGO0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSxvRUFDRjs7O0lBR0UsbUNBTUM7SUFDQyxZQUNGO0lBQUEsaUJBQVc7OztJQU5ULHFDQUFvQiwrQkFBQTtJQUtwQixlQUNGO0lBREUsOENBQ0Y7O0FESkYsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQyxlQUFlLENBQUMsR0FBUTtRQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDO0lBQzFFLENBQUM7SUFFRCxlQUFlLENBQUMsR0FBUTtRQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBb0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7OzhGQWxCVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ1RwQywwRkFFZTtRQUVmLHdDQUFvQztRQUNsQyxrRkFRVztRQUNiLGlCQUFnQjs7UUFkRCx1REFBOEI7UUFNeEIsZUFBNkI7UUFBN0IsMERBQTZCLCtCQUFBOzt1RkRHckMsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQztnQkFFVSxPQUFPO2tCQUFmLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGlwc0xpc3RWYWx1ZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IENoaXBEZXNjcmlwdG9yIH0gZnJvbSAnLi4vLi4vZGV0YWlscy1saXN0L3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRhYmxlLWNoaXBzLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hpcHMtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoaXBzLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDaGlwc0xpc3RDb21wb25lbnQge1xuICBASW5wdXQoKSBlbGVtZW50OiBhbnk7XG4gIEBJbnB1dCgpIHZhbHVlRGVzY3JpcHRvcjogQ2hpcHNMaXN0VmFsdWU7XG5cbiAgaGFzVmlzaWJsZUl0ZW1zKHJvdzogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2hpcHMocm93KS5sZW5ndGggPiB0aGlzLnZhbHVlRGVzY3JpcHRvci5tYXhWaXNpYmxlQ2hpcHM7XG4gIH1cblxuICBnZXRWaXNpYmxlQ2hpcHMocm93OiBhbnkpOiBDaGlwRGVzY3JpcHRvcltdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDaGlwcyhyb3cpLnNsaWNlKDAsIHRoaXMudmFsdWVEZXNjcmlwdG9yLm1heFZpc2libGVDaGlwcyk7XG4gIH1cblxuICBnZXRDaGlwcyhyb3c6IGFueSk6IENoaXBEZXNjcmlwdG9yW10ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlRGVzY3JpcHRvci5nZXRDaGlwcyhyb3cpO1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4OiBudW1iZXIsIGNoaXA6IENoaXBEZXNjcmlwdG9yKSB7XG4gICAgcmV0dXJuIGNoaXAudmFsdWU7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNWaXNpYmxlSXRlbXMoZWxlbWVudClcIj5cbiAge3sgdmFsdWVEZXNjcmlwdG9yLm5vVmFsdWVUZXh0IH19XG48L25nLWNvbnRhaW5lcj5cblxuPG1hdC1jaGlwLWxpc3QgY2xhc3M9XCJjaGlwLWxpc3Qtd2FcIj5cbiAgPG1hdC1jaGlwXG4gICAgKm5nRm9yPVwibGV0IGNoaXAgb2YgZ2V0VmlzaWJsZUNoaXBzKGVsZW1lbnQpOyB0cmFja0J5OiB0cmFja0J5Rm5cIlxuICAgIFtjb2xvcl09XCJjaGlwLmNvbG9yXCJcbiAgICBbbWF0VG9vbHRpcF09XCJjaGlwLnRvb2x0aXBcIlxuICAgIG1hdFRvb2x0aXBDbGFzcz1cImN1c3RvbS10b29sdGlwXCJcbiAgICBjbGFzcz1cImxpc3QtY2hpcFwiXG4gID5cbiAgICB7eyBjaGlwLnZhbHVlIH19XG4gIDwvbWF0LWNoaXA+XG48L21hdC1jaGlwLWxpc3Q+XG4iXX0=