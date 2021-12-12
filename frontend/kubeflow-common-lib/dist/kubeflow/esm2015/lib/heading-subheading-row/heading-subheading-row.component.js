import { Component, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tooltip";
function HeadingSubheadingRowComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matTooltip", ctx_r1.tooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.subHeading, " ");
} }
function HeadingSubheadingRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, HeadingSubheadingRowComponent_div_0_div_2_Template, 2, 2, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.heading, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.subHeading);
} }
export class HeadingSubheadingRowComponent {
    constructor() {
        this.selfClass = true;
    }
}
HeadingSubheadingRowComponent.ɵfac = function HeadingSubheadingRowComponent_Factory(t) { return new (t || HeadingSubheadingRowComponent)(); };
HeadingSubheadingRowComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeadingSubheadingRowComponent, selectors: [["lib-heading-row"]], hostVars: 2, hostBindings: function HeadingSubheadingRowComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-heading-row", ctx.selfClass);
    } }, inputs: { heading: "heading", subHeading: "subHeading", tooltip: "tooltip" }, decls: 1, vars: 1, consts: [["class", "heading", 4, "ngIf"], [1, "heading"], ["class", "sub-heading", 3, "matTooltip", 4, "ngIf"], [1, "sub-heading", 3, "matTooltip"]], template: function HeadingSubheadingRowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HeadingSubheadingRowComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.heading);
    } }, directives: [i1.NgIf, i2.MatTooltip], styles: ["[_nghost-%COMP%]{display:block}.heading[_ngcontent-%COMP%]{font-size:20px;display:flex;margin:0 0 16px}.sub-heading[_ngcontent-%COMP%]{padding-left:8px;color:rgba(0,0,0,.66)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeadingSubheadingRowComponent, [{
        type: Component,
        args: [{
                selector: 'lib-heading-row',
                templateUrl: './heading-subheading-row.component.html',
                styleUrls: ['./heading-subheading-row.component.scss'],
            }]
    }], null, { heading: [{
            type: Input
        }], subHeading: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], selfClass: [{
            type: HostBinding,
            args: ['class.lib-heading-row']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGluZy1zdWJoZWFkaW5nLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2hlYWRpbmctc3ViaGVhZGluZy1yb3cvaGVhZGluZy1zdWJoZWFkaW5nLXJvdy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2hlYWRpbmctc3ViaGVhZGluZy1yb3cvaGVhZGluZy1zdWJoZWFkaW5nLXJvdy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRzVELDhCQUFtRTtJQUNqRSxZQUNGO0lBQUEsaUJBQU07OztJQUZzQywyQ0FBc0I7SUFDaEUsZUFDRjtJQURFLGtEQUNGOzs7SUFMRiw4QkFBcUM7SUFDbkMsWUFFQTtJQUFBLG9GQUVNO0lBQ1IsaUJBQU07OztJQUxKLGVBRUE7SUFGQSwrQ0FFQTtJQUFNLGVBQWdCO0lBQWhCLHdDQUFnQjs7QURJeEIsTUFBTSxPQUFPLDZCQUE2QjtJQUwxQztRQVV3QyxjQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ3hEOzswR0FOWSw2QkFBNkI7Z0ZBQTdCLDZCQUE2Qjs7O1FDUDFDLDhFQU1NOztRQU5BLGtDQUFhOzt1RkRPTiw2QkFBNkI7Y0FMekMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2FBQ3ZEO2dCQUVVLE9BQU87a0JBQWYsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFFZ0MsU0FBUztrQkFBOUMsV0FBVzttQkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaGVhZGluZy1yb3cnLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGluZy1zdWJoZWFkaW5nLXJvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2hlYWRpbmctc3ViaGVhZGluZy1yb3cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGluZ1N1YmhlYWRpbmdSb3dDb21wb25lbnQge1xuICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1YkhlYWRpbmc6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGliLWhlYWRpbmctcm93Jykgc2VsZkNsYXNzID0gdHJ1ZTtcbn1cbiIsIjxkaXYgKm5nSWY9XCJoZWFkaW5nXCIgY2xhc3M9XCJoZWFkaW5nXCI+XG4gIHt7IGhlYWRpbmcgfX1cblxuICA8ZGl2ICpuZ0lmPVwic3ViSGVhZGluZ1wiIGNsYXNzPVwic3ViLWhlYWRpbmdcIiBbbWF0VG9vbHRpcF09XCJ0b29sdGlwXCI+XG4gICAge3sgc3ViSGVhZGluZyB9fVxuICA8L2Rpdj5cbjwvZGl2PlxuIl19