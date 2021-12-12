import { Component, Input, HostBinding } from '@angular/core';
import { SnackType } from '../../snack-bar/types';
import * as i0 from "@angular/core";
import * as i1 from "../../snack-bar/snack-bar.service";
import * as i2 from "@angular/cdk/clipboard";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/tooltip";
import * as i5 from "@angular/material/divider";
import * as i6 from "@angular/material/chips";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/core";
function DetailsListItemComponent_mat_divider_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function DetailsListItemComponent_ng_container_5_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chip_r6 = ctx.$implicit;
    i0.ɵɵproperty("color", chip_r6.color)("matTooltip", chip_r6.tooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", chip_r6.value, " ");
} }
function DetailsListItemComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-chip-list", 5);
    i0.ɵɵtemplate(2, DetailsListItemComponent_ng_container_5_mat_chip_2_Template, 2, 3, "mat-chip", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.chipsList);
} }
function DetailsListItemComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "mat-icon", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("inline", true)("ngClass", ctx_r7.getClasses());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.icon, " ");
} }
function DetailsListItemComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "mat-icon", 12);
    i0.ɵɵlistener("click", function DetailsListItemComponent_div_6_div_3_Template_mat_icon_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.copy(); });
    i0.ɵɵtext(2, " content_copy ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRippleCentered", true)("inline", true);
} }
function DetailsListItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, DetailsListItemComponent_div_6_div_1_Template, 3, 3, "div", 9);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, DetailsListItemComponent_div_6_div_3_Template, 3, 2, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.value, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.copyValue);
} }
function DetailsListItemComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "mat-icon", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("inline", true)("ngClass", ctx_r11.getClasses());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r11.icon, " ");
} }
function DetailsListItemComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "mat-icon", 12);
    i0.ɵɵlistener("click", function DetailsListItemComponent_div_7_div_3_Template_mat_icon_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.copy(); });
    i0.ɵɵtext(2, " content_copy ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRippleCentered", true)("inline", true);
} }
function DetailsListItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, DetailsListItemComponent_div_7_div_1_Template, 3, 3, "div", 9);
    i0.ɵɵprojection(2, 0, ["class", "vertical-align"]);
    i0.ɵɵtemplate(3, DetailsListItemComponent_div_7_div_3_Template, 3, 2, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.copyValue);
} }
function DetailsListItemComponent_mat_divider_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
const _c0 = ["*"];
export class DetailsListItemComponent {
    constructor(snack, clipboard) {
        this.snack = snack;
        this.clipboard = clipboard;
        this.topDivider = false;
        this.bottomDivider = true;
        this.keyMinWidth = '250px';
        this.selfClass = true;
    }
    copy() {
        if (!this.copyValue) {
            this.snack.open('No value to copy to clipboard', SnackType.Warning, 2000);
            return;
        }
        this.clipboard.copy(this.copyValue);
        this.snack.open('Content copied to clipboard', SnackType.Info, 2000);
    }
    getClasses() {
        const classes = ['key-icon'];
        if (!this.icon) {
            return classes;
        }
        classes.push(this.icon);
        return classes;
    }
}
DetailsListItemComponent.ɵfac = function DetailsListItemComponent_Factory(t) { return new (t || DetailsListItemComponent)(i0.ɵɵdirectiveInject(i1.SnackBarService), i0.ɵɵdirectiveInject(i2.Clipboard)); };
DetailsListItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailsListItemComponent, selectors: [["lib-details-list-item"]], hostVars: 2, hostBindings: function DetailsListItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-details-list-item", ctx.selfClass);
    } }, inputs: { key: "key", value: "value", icon: "icon", valueType: "valueType", chipsList: "chipsList", keyTooltip: "keyTooltip", valueTooltip: "valueTooltip", topDivider: "topDivider", bottomDivider: "bottomDivider", copyValue: "copyValue", keyMinWidth: "keyMinWidth" }, ngContentSelectors: _c0, decls: 9, vars: 10, consts: [[4, "ngIf"], [1, "list-entry-row"], [1, "list-entry-key", "vertical-align", 3, "matTooltip"], [1, "list-entry-value", 3, "matTooltip"], ["class", "flex", 4, "ngIf"], [1, "chip-list-wa"], ["matTooltipClass", "custom-tooltip", "class", "list-chip", 3, "color", "matTooltip", 4, "ngFor", "ngForOf"], ["matTooltipClass", "custom-tooltip", 1, "list-chip", 3, "color", "matTooltip"], [1, "flex"], ["class", "icon", 4, "ngIf"], [1, "icon"], [3, "inline", "ngClass"], ["matRipple", "", "matRippleRadius", "16", 1, "copy-button", "key-icon", 3, "matRippleCentered", "inline", "click"]], template: function DetailsListItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, DetailsListItemComponent_mat_divider_0_Template, 1, 0, "mat-divider", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, DetailsListItemComponent_ng_container_5_Template, 3, 1, "ng-container", 0);
        i0.ɵɵtemplate(6, DetailsListItemComponent_div_6_Template, 4, 3, "div", 4);
        i0.ɵɵtemplate(7, DetailsListItemComponent_div_7_Template, 4, 2, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, DetailsListItemComponent_mat_divider_8_Template, 1, 0, "mat-divider", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.topDivider);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("min-width", ctx.keyMinWidth);
        i0.ɵɵproperty("matTooltip", ctx.keyTooltip);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.key, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.valueTooltip);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.chipsList && ctx.chipsList.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.bottomDivider);
    } }, directives: [i3.NgIf, i4.MatTooltip, i5.MatDivider, i6.MatChipList, i3.NgForOf, i6.MatChip, i7.MatIcon, i3.NgClass, i8.MatRipple], styles: ["[_nghost-%COMP%]{display:block}.list-entry-row[_ngcontent-%COMP%]{padding:.4rem 0;display:flex}.list-entry-key[_ngcontent-%COMP%]{font-weight:500}.list-entry-value[_ngcontent-%COMP%]{margin:auto 0;color:rgba(0,0,0,.66)}.key-icon[_ngcontent-%COMP%]{margin-right:8px}.chip-list-wa[_ngcontent-%COMP%]   .list-chip[_ngcontent-%COMP%]{min-height:24px;margin:0 4px}.warning[_ngcontent-%COMP%]{color:orange}.check_circle[_ngcontent-%COMP%]{color:green}.copy-button[_ngcontent-%COMP%]{cursor:pointer;margin-left:8px}.vertical-align[_ngcontent-%COMP%]{margin-bottom:auto}.icon[_ngcontent-%COMP%]{font-size:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailsListItemComponent, [{
        type: Component,
        args: [{
                selector: 'lib-details-list-item',
                templateUrl: './details-list-item.component.html',
                styleUrls: ['./details-list-item.component.scss'],
            }]
    }], function () { return [{ type: i1.SnackBarService }, { type: i2.Clipboard }]; }, { key: [{
            type: Input
        }], value: [{
            type: Input
        }], icon: [{
            type: Input
        }], valueType: [{
            type: Input
        }], chipsList: [{
            type: Input
        }], keyTooltip: [{
            type: Input
        }], valueTooltip: [{
            type: Input
        }], topDivider: [{
            type: Input
        }], bottomDivider: [{
            type: Input
        }], copyValue: [{
            type: Input
        }], keyMinWidth: [{
            type: Input
        }], selfClass: [{
            type: HostBinding,
            args: ['class.lib-details-list-item']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9kZXRhaWxzLWxpc3QvZGV0YWlscy1saXN0LWl0ZW0vZGV0YWlscy1saXN0LWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9kZXRhaWxzLWxpc3QvZGV0YWlscy1saXN0LWl0ZW0vZGV0YWlscy1saXN0LWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7SUNIbEQsOEJBQThDOzs7SUFnQnRDLG1DQU1DO0lBQ0MsWUFDRjtJQUFBLGlCQUFXOzs7SUFOVCxxQ0FBb0IsK0JBQUE7SUFLcEIsZUFDRjtJQURFLDhDQUNGOzs7SUFWSiw2QkFBd0Q7SUFDdEQsd0NBQW9DO0lBQ2xDLGtHQVFXO0lBQ2IsaUJBQWdCO0lBQ2xCLDBCQUFlOzs7SUFUUSxlQUFZO0lBQVosMENBQVk7OztJQVlqQywrQkFBK0I7SUFDN0Isb0NBQW1EO0lBQ2pELFlBQ0Y7SUFBQSxpQkFBVztJQUNiLGlCQUFNOzs7SUFITSxlQUFlO0lBQWYsNkJBQWUsZ0NBQUE7SUFDdkIsZUFDRjtJQURFLDRDQUNGOzs7O0lBS0YsK0JBQW9DO0lBQ2xDLG9DQU9DO0lBREMsZ01BQWdCO0lBRWhCLDhCQUNGO0lBQUEsaUJBQVc7SUFDYixpQkFBTTs7SUFORixlQUEwQjtJQUExQix3Q0FBMEIsZ0JBQUE7OztJQWRoQyw4QkFBZ0M7SUFDOUIsK0VBSU07SUFFTixZQUVBO0lBQUEsK0VBV007SUFDUixpQkFBTTs7O0lBcEJlLGVBQVU7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O2tCQUFqQixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUVzQyxTQUFTO2tCQUFwRCxXQUFXO21CQUFDLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0VmFsdWVUeXBlLCBDaGlwRGVzY3JpcHRvciwgTGlzdFZhbHVlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgU25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc25hY2stYmFyL3NuYWNrLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFNuYWNrVHlwZSB9IGZyb20gJy4uLy4uL3NuYWNrLWJhci90eXBlcyc7XG5pbXBvcnQgeyBDbGlwYm9hcmQgfSBmcm9tICdAYW5ndWxhci9jZGsvY2xpcGJvYXJkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRldGFpbHMtbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RldGFpbHMtbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGV0YWlscy1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc0xpc3RJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkga2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBMaXN0VmFsdWU7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWVUeXBlOiBMaXN0VmFsdWVUeXBlO1xuICBASW5wdXQoKSBjaGlwc0xpc3Q6IENoaXBEZXNjcmlwdG9yW107XG4gIEBJbnB1dCgpIGtleVRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWVUb29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvcERpdmlkZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgYm90dG9tRGl2aWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIGNvcHlWYWx1ZTtcbiAgQElucHV0KCkga2V5TWluV2lkdGggPSAnMjUwcHgnO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubGliLWRldGFpbHMtbGlzdC1pdGVtJykgc2VsZkNsYXNzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc25hY2s6IFNuYWNrQmFyU2VydmljZSwgcHVibGljIGNsaXBib2FyZDogQ2xpcGJvYXJkKSB7fVxuXG4gIGNvcHkoKSB7XG4gICAgaWYgKCF0aGlzLmNvcHlWYWx1ZSkge1xuICAgICAgdGhpcy5zbmFjay5vcGVuKCdObyB2YWx1ZSB0byBjb3B5IHRvIGNsaXBib2FyZCcsIFNuYWNrVHlwZS5XYXJuaW5nLCAyMDAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsaXBib2FyZC5jb3B5KHRoaXMuY29weVZhbHVlKTtcbiAgICB0aGlzLnNuYWNrLm9wZW4oJ0NvbnRlbnQgY29waWVkIHRvIGNsaXBib2FyZCcsIFNuYWNrVHlwZS5JbmZvLCAyMDAwKTtcbiAgfVxuXG4gIGdldENsYXNzZXMoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFsna2V5LWljb24nXTtcblxuICAgIGlmICghdGhpcy5pY29uKSB7XG4gICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBjbGFzc2VzLnB1c2godGhpcy5pY29uKTtcbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxufVxuIiwiPG1hdC1kaXZpZGVyICpuZ0lmPVwidG9wRGl2aWRlclwiPjwvbWF0LWRpdmlkZXI+XG5cbjxkaXYgY2xhc3M9XCJsaXN0LWVudHJ5LXJvd1wiPlxuICA8IS0ta2V5LS0+XG4gIDxkaXZcbiAgICBjbGFzcz1cImxpc3QtZW50cnkta2V5IHZlcnRpY2FsLWFsaWduXCJcbiAgICBbbWF0VG9vbHRpcF09XCJrZXlUb29sdGlwXCJcbiAgICBbc3R5bGUubWluLXdpZHRoXT1cImtleU1pbldpZHRoXCJcbiAgPlxuICAgIHt7IGtleSB9fVxuICA8L2Rpdj5cblxuICA8IS0tdmFsdWUtLT5cbiAgPGRpdiBjbGFzcz1cImxpc3QtZW50cnktdmFsdWVcIiBbbWF0VG9vbHRpcF09XCJ2YWx1ZVRvb2x0aXBcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hpcHNMaXN0ICYmIGNoaXBzTGlzdC5sZW5ndGggPiAwXCI+XG4gICAgICA8bWF0LWNoaXAtbGlzdCBjbGFzcz1cImNoaXAtbGlzdC13YVwiPlxuICAgICAgICA8bWF0LWNoaXBcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY2hpcCBvZiBjaGlwc0xpc3RcIlxuICAgICAgICAgIFtjb2xvcl09XCJjaGlwLmNvbG9yXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcF09XCJjaGlwLnRvb2x0aXBcIlxuICAgICAgICAgIG1hdFRvb2x0aXBDbGFzcz1cImN1c3RvbS10b29sdGlwXCJcbiAgICAgICAgICBjbGFzcz1cImxpc3QtY2hpcFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBjaGlwLnZhbHVlIH19XG4gICAgICAgIDwvbWF0LWNoaXA+XG4gICAgICA8L21hdC1jaGlwLWxpc3Q+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8ZGl2ICpuZ0lmPVwidmFsdWVcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCIgKm5nSWY9XCJpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbiBbaW5saW5lXT1cInRydWVcIiBbbmdDbGFzc109XCJnZXRDbGFzc2VzKClcIj5cbiAgICAgICAgICB7eyBpY29uIH19XG4gICAgICAgIDwvbWF0LWljb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAge3sgdmFsdWUgfX1cblxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIiAqbmdJZj1cImNvcHlWYWx1ZVwiPlxuICAgICAgICA8bWF0LWljb25cbiAgICAgICAgICBjbGFzcz1cImNvcHktYnV0dG9uIGtleS1pY29uXCJcbiAgICAgICAgICBtYXRSaXBwbGVcbiAgICAgICAgICBtYXRSaXBwbGVSYWRpdXM9XCIxNlwiXG4gICAgICAgICAgW21hdFJpcHBsZUNlbnRlcmVkXT1cInRydWVcIlxuICAgICAgICAgIFtpbmxpbmVdPVwidHJ1ZVwiXG4gICAgICAgICAgKGNsaWNrKT1cImNvcHkoKVwiXG4gICAgICAgID5cbiAgICAgICAgICBjb250ZW50X2NvcHlcbiAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cIiF2YWx1ZVwiIGNsYXNzPVwiZmxleFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIiAqbmdJZj1cImljb25cIj5cbiAgICAgICAgPG1hdC1pY29uIFtpbmxpbmVdPVwidHJ1ZVwiIFtuZ0NsYXNzXT1cImdldENsYXNzZXMoKVwiPlxuICAgICAgICAgIHt7IGljb24gfX1cbiAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8bmctY29udGVudCBjbGFzcz1cInZlcnRpY2FsLWFsaWduXCI+IDwvbmctY29udGVudD5cblxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIiAqbmdJZj1cImNvcHlWYWx1ZVwiPlxuICAgICAgICA8bWF0LWljb25cbiAgICAgICAgICBjbGFzcz1cImNvcHktYnV0dG9uIGtleS1pY29uXCJcbiAgICAgICAgICBtYXRSaXBwbGVcbiAgICAgICAgICBtYXRSaXBwbGVSYWRpdXM9XCIxNlwiXG4gICAgICAgICAgW21hdFJpcHBsZUNlbnRlcmVkXT1cInRydWVcIlxuICAgICAgICAgIFtpbmxpbmVdPVwidHJ1ZVwiXG4gICAgICAgICAgKGNsaWNrKT1cImNvcHkoKVwiXG4gICAgICAgID5cbiAgICAgICAgICBjb250ZW50X2NvcHlcbiAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bWF0LWRpdmlkZXIgKm5nSWY9XCJib3R0b21EaXZpZGVyXCI+PC9tYXQtZGl2aWRlcj5cbiJdfQ==