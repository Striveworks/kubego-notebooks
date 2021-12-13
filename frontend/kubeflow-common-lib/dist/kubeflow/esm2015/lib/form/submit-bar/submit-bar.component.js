import { Component, Output, EventEmitter, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/divider";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/progress-spinner";
function SubmitBarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function SubmitBarComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.create.emit(true); });
    i0.ɵɵtext(1, " CREATE ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.createDisabled);
} }
function SubmitBarComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "mat-spinner", 8);
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4, "CREATING");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function SubmitBarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵlistener("click", function SubmitBarComponent_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.yaml.emit(true); });
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, " and submit YAML");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
export class SubmitBarComponent {
    constructor() {
        this.createDisabled = false;
        this.allowYAMLEditing = true;
        this.isApplying = false;
        this.create = new EventEmitter();
        this.cancel = new EventEmitter();
        this.yaml = new EventEmitter();
    }
    ngOnInit() { }
}
SubmitBarComponent.ɵfac = function SubmitBarComponent_Factory(t) { return new (t || SubmitBarComponent)(); };
SubmitBarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubmitBarComponent, selectors: [["lib-submit-bar"]], inputs: { createDisabled: "createDisabled", allowYAMLEditing: "allowYAMLEditing", isApplying: "isApplying" }, outputs: { create: "create", cancel: "cancel", yaml: "yaml" }, decls: 7, vars: 3, consts: [[1, "flex", "bar"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "disabled", "", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["class", "flex text-area", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "disabled", ""], [1, "waiting-button-wrapper"], ["diameter", "16"], [1, "flex", "text-area"], [1, "btn-link", 3, "click"]], template: function SubmitBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-divider");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵtemplate(2, SubmitBarComponent_button_2_Template, 2, 1, "button", 1);
        i0.ɵɵtemplate(3, SubmitBarComponent_button_3_Template, 5, 0, "button", 2);
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function SubmitBarComponent_Template_button_click_4_listener() { return ctx.cancel.emit(true); });
        i0.ɵɵtext(5, "CANCEL");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, SubmitBarComponent_div_6_Template, 5, 0, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isApplying);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isApplying);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.allowYAMLEditing);
    } }, directives: [i1.MatDivider, i2.NgIf, i3.MatButton, i4.MatSpinner], styles: ["[_nghost-%COMP%]{display:block;width:100%}.btn-link[_ngcontent-%COMP%]{color:blue;text-decoration:underline;cursor:pointer;display:inline-block;background-color:transparent;border:0;padding:0;font-family:inherit;font-size:inherit}.bar[_ngcontent-%COMP%]{padding:.5rem 0}.bar[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto}.bar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-left:35%}.bar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-child(2){margin-left:1rem;margin-right:1rem}.text-area[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{white-space:break-spaces}.waiting-button-wrapper[_ngcontent-%COMP%]{display:flex}.waiting-button-wrapper[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%]{margin:auto .2rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubmitBarComponent, [{
        type: Component,
        args: [{
                selector: 'lib-submit-bar',
                templateUrl: './submit-bar.component.html',
                styleUrls: ['./submit-bar.component.scss'],
            }]
    }], function () { return []; }, { createDisabled: [{
            type: Input
        }], allowYAMLEditing: [{
            type: Input
        }], isApplying: [{
            type: Input
        }], create: [{
            type: Output
        }], cancel: [{
            type: Output
        }], yaml: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2Zvcm0vc3VibWl0LWJhci9zdWJtaXQtYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS9zdWJtaXQtYmFyL3N1Ym1pdC1iYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNHN0UsaUNBTUM7SUFGQyxrS0FBUyxtQkFBWSxJQUFJLENBQUMsSUFBQztJQUczQix3QkFDRjtJQUFBLGlCQUFTOzs7SUFIUCxnREFBMkI7OztJQUs3QixpQ0FBc0Q7SUFDcEQsOEJBQW9DO0lBQ2xDLGlDQUF5QztJQUN6QywyQkFBSztJQUFBLHdCQUFRO0lBQUEsaUJBQU07SUFDckIsaUJBQU07SUFDUixpQkFBUzs7OztJQUlULDhCQUFxRDtJQUNuRCxrQ0FBbUQ7SUFBMUIsK0pBQVMsaUJBQVUsSUFBSSxDQUFDLElBQUM7SUFBQyxvQkFBSTtJQUFBLGlCQUFTO0lBQ2hFLDRCQUFNO0lBQUMsZ0NBQWU7SUFBQSxpQkFBTztJQUMvQixpQkFBTTs7QURsQlIsTUFBTSxPQUFPLGtCQUFrQjtJQVE3QjtRQVBTLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3JDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3JDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRTlCLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7O29GQVZGLGtCQUFrQjtxRUFBbEIsa0JBQWtCO1FDUC9CLDhCQUEyQjtRQUUzQiw4QkFBc0I7UUFDcEIseUVBUVM7UUFFVCx5RUFLUztRQUVULGlDQUFzRDtRQUE1QiwrRkFBUyxnQkFBWSxJQUFJLENBQUMsSUFBQztRQUFDLHNCQUFNO1FBQUEsaUJBQVM7UUFFckUsbUVBR007UUFDUixpQkFBTTs7UUF0QkQsZUFBaUI7UUFBakIsc0NBQWlCO1FBU1gsZUFBZ0I7UUFBaEIscUNBQWdCO1FBU0ksZUFBc0I7UUFBdEIsMkNBQXNCOzt1RkRmeEMsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQztzQ0FFVSxjQUFjO2tCQUF0QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNJLE1BQU07a0JBQWYsTUFBTTtZQUNHLE1BQU07a0JBQWYsTUFBTTtZQUNHLElBQUk7a0JBQWIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN1Ym1pdC1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VibWl0LWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N1Ym1pdC1iYXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3VibWl0QmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY3JlYXRlRGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgYWxsb3dZQU1MRWRpdGluZyA9IHRydWU7XG4gIEBJbnB1dCgpIGlzQXBwbHlpbmcgPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHlhbWwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiIsIjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuXG48ZGl2IGNsYXNzPVwiZmxleCBiYXJcIj5cbiAgPGJ1dHRvblxuICAgICpuZ0lmPVwiIWlzQXBwbHlpbmdcIlxuICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAoY2xpY2spPVwiY3JlYXRlLmVtaXQodHJ1ZSlcIlxuICAgIFtkaXNhYmxlZF09XCJjcmVhdGVEaXNhYmxlZFwiXG4gID5cbiAgICBDUkVBVEVcbiAgPC9idXR0b24+XG5cbiAgPGJ1dHRvbiAqbmdJZj1cImlzQXBwbHlpbmdcIiBtYXQtcmFpc2VkLWJ1dHRvbiBkaXNhYmxlZD5cbiAgICA8ZGl2IGNsYXNzPVwid2FpdGluZy1idXR0b24td3JhcHBlclwiPlxuICAgICAgPG1hdC1zcGlubmVyIGRpYW1ldGVyPVwiMTZcIj48L21hdC1zcGlubmVyPlxuICAgICAgPGRpdj5DUkVBVElORzwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2J1dHRvbj5cblxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJjYW5jZWwuZW1pdCh0cnVlKVwiPkNBTkNFTDwvYnV0dG9uPlxuXG4gIDxkaXYgY2xhc3M9XCJmbGV4IHRleHQtYXJlYVwiICpuZ0lmPVwiYWxsb3dZQU1MRWRpdGluZ1wiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4tbGlua1wiIChjbGljayk9XCJ5YW1sLmVtaXQodHJ1ZSlcIj5FZGl0PC9idXR0b24+XG4gICAgPHNwYW4+IGFuZCBzdWJtaXQgWUFNTDwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==