import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/divider";
import * as i3 from "./details-list-item/details-list-item.component";
function DetailsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function DetailsListComponent_mat_divider_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function DetailsListComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "lib-details-list-item", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("key", entry_r3.key)("value", entry_r3.value)("keyTooltip", entry_r3.keyTooltip)("valueTooltip", entry_r3.valueTooltip)("icon", entry_r3.icon)("valueType", entry_r3.valueType)("chipsList", entry_r3.chipsList);
} }
function DetailsListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, DetailsListComponent_div_3_ng_container_1_Template, 2, 7, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r3);
} }
export class DetailsListComponent {
    constructor() {
        this.entries = [];
        this.topDivider = true;
    }
}
DetailsListComponent.ɵfac = function DetailsListComponent_Factory(t) { return new (t || DetailsListComponent)(); };
DetailsListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailsListComponent, selectors: [["lib-details-list"]], inputs: { entries: "entries", topDivider: "topDivider", title: "title" }, decls: 4, vars: 3, consts: [[1, "list"], ["class", "list-header", 4, "ngIf"], [4, "ngIf"], ["class", "list-entry", 4, "ngFor", "ngForOf"], [1, "list-header"], [1, "list-entry"], [3, "key", "value", "keyTooltip", "valueTooltip", "icon", "valueType", "chipsList"]], template: function DetailsListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DetailsListComponent_div_1_Template, 3, 1, "div", 1);
        i0.ɵɵtemplate(2, DetailsListComponent_mat_divider_2_Template, 1, 0, "mat-divider", 2);
        i0.ɵɵtemplate(3, DetailsListComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.topDivider);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.entries);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.MatDivider, i3.DetailsListItemComponent], styles: [".list[_ngcontent-%COMP%]{display:inline-block;width:100%}.list-header[_ngcontent-%COMP%]{display:flex;align-items:center;height:64px;font-weight:400;font-size:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailsListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-details-list',
                templateUrl: './details-list.component.html',
                styleUrls: ['./details-list.component.scss'],
            }]
    }], null, { entries: [{
            type: Input
        }], topDivider: [{
            type: Input
        }], title: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZGV0YWlscy1saXN0L2RldGFpbHMtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2RldGFpbHMtbGlzdC9kZXRhaWxzLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0MvQyw4QkFBdUM7SUFDckMseUJBQUc7SUFBQSxZQUFXO0lBQUEsaUJBQUk7SUFDcEIsaUJBQU07OztJQURELGVBQVc7SUFBWCxrQ0FBVzs7O0lBRWhCLDhCQUE4Qzs7O0lBRzVDLDZCQUE0QjtJQUMxQiwyQ0FTd0I7SUFDMUIsMEJBQWU7OztJQVRYLGVBQWlCO0lBQWpCLGtDQUFpQix5QkFBQSxtQ0FBQSx1Q0FBQSx1QkFBQSxpQ0FBQSxpQ0FBQTs7O0lBSHZCLDhCQUFzRDtJQUNwRCw2RkFXZTtJQUNqQixpQkFBTTs7O0lBWlcsZUFBVztJQUFYLCtCQUFXOztBREM5QixNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTVcsWUFBTyxHQUFnQixFQUFFLENBQUM7UUFDMUIsZUFBVSxHQUFHLElBQUksQ0FBQztLQUc1Qjs7d0ZBTFksb0JBQW9CO3VFQUFwQixvQkFBb0I7UUNSakMsOEJBQWtCO1FBQ2hCLHFFQUVNO1FBQ04scUZBQThDO1FBRTlDLHFFQWFNO1FBQ1IsaUJBQU07O1FBbkJFLGVBQVc7UUFBWCxnQ0FBVztRQUdILGVBQWdCO1FBQWhCLHFDQUFnQjtRQUVZLGVBQVU7UUFBVixxQ0FBVTs7dUZERXpDLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7Z0JBRVUsT0FBTztrQkFBZixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUVHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RFbnRyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZGV0YWlscy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RldGFpbHMtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RldGFpbHMtbGlzdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEZXRhaWxzTGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGVudHJpZXM6IExpc3RFbnRyeVtdID0gW107XG4gIEBJbnB1dCgpIHRvcERpdmlkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG59XG4iLCI8ZGl2IGNsYXNzPVwibGlzdFwiPlxuICA8ZGl2ICpuZ0lmPVwidGl0bGVcIiBjbGFzcz1cImxpc3QtaGVhZGVyXCI+XG4gICAgPHA+e3sgdGl0bGUgfX08L3A+XG4gIDwvZGl2PlxuICA8bWF0LWRpdmlkZXIgKm5nSWY9XCJ0b3BEaXZpZGVyXCI+PC9tYXQtZGl2aWRlcj5cblxuICA8ZGl2IGNsYXNzPVwibGlzdC1lbnRyeVwiICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBlbnRyaWVzXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5XCI+XG4gICAgICA8bGliLWRldGFpbHMtbGlzdC1pdGVtXG4gICAgICAgIFtrZXldPVwiZW50cnkua2V5XCJcbiAgICAgICAgW3ZhbHVlXT1cImVudHJ5LnZhbHVlXCJcbiAgICAgICAgW2tleVRvb2x0aXBdPVwiZW50cnkua2V5VG9vbHRpcFwiXG4gICAgICAgIFt2YWx1ZVRvb2x0aXBdPVwiZW50cnkudmFsdWVUb29sdGlwXCJcbiAgICAgICAgW2ljb25dPVwiZW50cnkuaWNvblwiXG4gICAgICAgIFt2YWx1ZVR5cGVdPVwiZW50cnkudmFsdWVUeXBlXCJcbiAgICAgICAgW2NoaXBzTGlzdF09XCJlbnRyeS5jaGlwc0xpc3RcIlxuICAgICAgPlxuICAgICAgPC9saWItZGV0YWlscy1saXN0LWl0ZW0+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=