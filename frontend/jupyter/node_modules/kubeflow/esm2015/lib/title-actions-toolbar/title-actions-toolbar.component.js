import { Component, Input, EventEmitter, Output, HostBinding, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
function TitleActionsToolbarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function TitleActionsToolbarComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.emitBack(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "keyboard_backspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TitleActionsToolbarComponent_ng_container_8_ng_container_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r4.icon, " ");
} }
function TitleActionsToolbarComponent_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵlistener("click", function TitleActionsToolbarComponent_ng_container_8_ng_container_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r11); const button_r4 = i0.ɵɵnextContext().$implicit; return button_r4.fn(); });
    i0.ɵɵtemplate(2, TitleActionsToolbarComponent_ng_container_8_ng_container_1_mat_icon_2_Template, 2, 1, "mat-icon", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const button_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", button_r4.color)("disabled", button_r4.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r4.text, " ");
} }
function TitleActionsToolbarComponent_ng_container_8_ng_container_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r4.icon, " ");
} }
function TitleActionsToolbarComponent_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 13);
    i0.ɵɵlistener("click", function TitleActionsToolbarComponent_ng_container_8_ng_container_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r17); const button_r4 = i0.ɵɵnextContext().$implicit; return button_r4.fn(); });
    i0.ɵɵtemplate(2, TitleActionsToolbarComponent_ng_container_8_ng_container_2_mat_icon_2_Template, 2, 1, "mat-icon", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const button_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", button_r4.color)("disabled", button_r4.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r4.text, " ");
} }
function TitleActionsToolbarComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TitleActionsToolbarComponent_ng_container_8_ng_container_1_Template, 4, 4, "ng-container", 9);
    i0.ɵɵtemplate(2, TitleActionsToolbarComponent_ng_container_8_ng_container_2_Template, 4, 4, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const button_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r4.raised);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r4.stroked);
} }
const _c0 = ["*"];
export class TitleActionsToolbarComponent {
    constructor() {
        this.buttons = [];
        this.backButton = false;
        this.back = new EventEmitter();
        this.selfClass = true;
    }
    emitBack() {
        this.back.emit('backButton');
    }
}
TitleActionsToolbarComponent.ɵfac = function TitleActionsToolbarComponent_Factory(t) { return new (t || TitleActionsToolbarComponent)(); };
TitleActionsToolbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TitleActionsToolbarComponent, selectors: [["lib-title-actions-toolbar"]], hostVars: 2, hostBindings: function TitleActionsToolbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-title-actions-toolbar", ctx.selfClass);
    } }, inputs: { buttons: "buttons", backButton: "backButton", title: "title" }, outputs: { back: "back" }, ngContentSelectors: _c0, decls: 10, vars: 3, consts: [[1, "flex"], [1, "page-padding-left"], ["mat-icon-button", "", "color", "primary", "class", "back-button", 3, "click", 4, "ngIf"], [1, "title-margin", "title"], [1, "margin-content"], [1, "toolbar-buttons"], [4, "ngFor", "ngForOf"], [1, "page-placement", "margin-top"], ["mat-icon-button", "", "color", "primary", 1, "back-button", 3, "click"], [4, "ngIf"], ["mat-button", "", 1, "toolbar-button", 3, "color", "disabled", "click"], ["class", "button-icon", 4, "ngIf"], [1, "button-icon"], ["mat-stroked-button", "", 1, "toolbar-button", 3, "color", "disabled", "click"]], template: function TitleActionsToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵtemplate(2, TitleActionsToolbarComponent_button_2_Template, 3, 0, "button", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵtemplate(8, TitleActionsToolbarComponent_ng_container_8_Template, 3, 2, "ng-container", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "mat-divider", 7);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.backButton);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.buttons);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.MatDivider, i3.MatButton, i4.MatIcon], styles: ["[_nghost-%COMP%]{display:block;width:100%;padding-top:8px}.title[_ngcontent-%COMP%]{font-weight:400;font-size:20px}.back-button[_ngcontent-%COMP%]{margin:auto 0}.actions-wrapper[_ngcontent-%COMP%]{margin-top:.22rem}.title-margin[_ngcontent-%COMP%]{margin:auto 0}.button-icon[_ngcontent-%COMP%]{font-size:1.2rem;padding-top:.1rem}.padding-bottom[_ngcontent-%COMP%]{padding-bottom:2rem}.margin-top[_ngcontent-%COMP%]{margin-top:.2rem}.margin-content[_ngcontent-%COMP%]{margin:auto}.toolbar-buttons[_ngcontent-%COMP%]{margin:auto 0}.toolbar-button[_ngcontent-%COMP%]{margin-left:.2rem}.toolbar-buttons[_ngcontent-%COMP%]   .toolbar-button[_ngcontent-%COMP%]:last-child{margin-right:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleActionsToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'lib-title-actions-toolbar',
                templateUrl: './title-actions-toolbar.component.html',
                styleUrls: ['./title-actions-toolbar.component.scss'],
            }]
    }], null, { buttons: [{
            type: Input
        }], backButton: [{
            type: Input
        }], title: [{
            type: Input
        }], back: [{
            type: Output
        }], selfClass: [{
            type: HostBinding,
            args: ['class.lib-title-actions-toolbar']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtYWN0aW9ucy10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvdGl0bGUtYWN0aW9ucy10b29sYmFyL3RpdGxlLWFjdGlvbnMtdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3RpdGxlLWFjdGlvbnMtdG9vbGJhci90aXRsZS1hY3Rpb25zLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDSHJCLGlDQU1DO0lBREMsaU1BQW9CO0lBRXBCLGdDQUFVO0lBQUEsa0NBQWtCO0lBQUEsaUJBQVc7SUFDekMsaUJBQVM7OztJQXFCRCxvQ0FBa0Q7SUFDaEQsWUFDRjtJQUFBLGlCQUFXOzs7SUFEVCxlQUNGO0lBREUsK0NBQ0Y7Ozs7SUFWSiw2QkFBb0M7SUFDbEMsa0NBTUM7SUFGQywrTUFBUyxjQUFXLElBQUM7SUFHckIsc0hBRVc7SUFDWCxZQUNGO0lBQUEsaUJBQVM7SUFDWCwwQkFBZTs7O0lBVlgsZUFBc0I7SUFBdEIsdUNBQXNCLGdDQUFBO0lBS1gsZUFBaUI7SUFBakIscUNBQWlCO0lBRzVCLGVBQ0Y7SUFERSwrQ0FDRjs7O0lBWUUsb0NBQWtEO0lBQ2hELFlBQ0Y7SUFBQSxpQkFBVzs7O0lBRFQsZUFDRjtJQURFLCtDQUNGOzs7O0lBVkosNkJBQXFDO0lBQ25DLGtDQU1DO0lBRkMsK01BQVMsY0FBVyxJQUFDO0lBR3JCLHNIQUVXO0lBQ1gsWUFDRjtJQUFBLGlCQUFTO0lBQ1gsMEJBQWU7OztJQVZYLGVBQXNCO0lBQXRCLHVDQUFzQixnQ0FBQTtJQUtYLGVBQWlCO0lBQWpCLHFDQUFpQjtJQUc1QixlQUNGO0lBREUsK0NBQ0Y7OztJQTlCSiw2QkFBNkM7SUFFM0MsOEdBYWU7SUFHZiw4R0FhZTtJQUNqQiwwQkFBZTs7O0lBOUJFLGVBQW1CO0lBQW5CLHVDQUFtQjtJQWdCbkIsZUFBb0I7SUFBcEIsd0NBQW9COzs7QUQxQnpDLE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFNVyxZQUFPLEdBQW9CLEVBQUUsQ0FBQztRQUM5QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ1ksY0FBUyxHQUFHLElBQUksQ0FBQztLQUtsRTtJQUhDLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQixDQUFDOzt3R0FUVSw0QkFBNEI7K0VBQTVCLDRCQUE0Qjs7OztRQ2R6Qyw4QkFBa0I7UUFDaEIseUJBQXFDO1FBRXJDLG1GQVFTO1FBRVQsOEJBQWdDO1FBQzlCLFlBQ0Y7UUFBQSxpQkFBTTtRQUVOLDhCQUE0QjtRQUMxQixrQkFBeUI7UUFDM0IsaUJBQU07UUFFTiw4QkFBNkI7UUFDM0IsK0ZBZ0NlO1FBQ2pCLGlCQUFNO1FBQ1IsaUJBQU07UUFFTixpQ0FBNkQ7O1FBdER4RCxlQUFnQjtRQUFoQixxQ0FBZ0I7UUFVakIsZUFDRjtRQURFLDBDQUNGO1FBT21DLGVBQVU7UUFBVixxQ0FBVTs7dUZEUmxDLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQ7Z0JBRVUsT0FBTztrQkFBZixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNJLElBQUk7a0JBQWIsTUFBTTtZQUN5QyxTQUFTO2tCQUF4RCxXQUFXO21CQUFDLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBIb3N0QmluZGluZyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUb29sYmFyQnV0dG9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10aXRsZS1hY3Rpb25zLXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGl0bGUtYWN0aW9ucy10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGl0bGUtYWN0aW9ucy10b29sYmFyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRpdGxlQWN0aW9uc1Rvb2xiYXJDb21wb25lbnQge1xuICBASW5wdXQoKSBidXR0b25zOiBUb29sYmFyQnV0dG9uW10gPSBbXTtcbiAgQElucHV0KCkgYmFja0J1dHRvbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBAT3V0cHV0KCkgYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWItdGl0bGUtYWN0aW9ucy10b29sYmFyJykgc2VsZkNsYXNzID0gdHJ1ZTtcblxuICBlbWl0QmFjaygpIHtcbiAgICB0aGlzLmJhY2suZW1pdCgnYmFja0J1dHRvbicpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICA8ZGl2IGNsYXNzPVwicGFnZS1wYWRkaW5nLWxlZnRcIj48L2Rpdj5cblxuICA8YnV0dG9uXG4gICAgKm5nSWY9XCJiYWNrQnV0dG9uXCJcbiAgICBtYXQtaWNvbi1idXR0b25cbiAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgIGNsYXNzPVwiYmFjay1idXR0b25cIlxuICAgIChjbGljayk9XCJlbWl0QmFjaygpXCJcbiAgPlxuICAgIDxtYXQtaWNvbj5rZXlib2FyZF9iYWNrc3BhY2U8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cblxuICA8ZGl2IGNsYXNzPVwidGl0bGUtbWFyZ2luIHRpdGxlXCI+XG4gICAge3sgdGl0bGUgfX1cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cIm1hcmdpbi1jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwidG9vbGJhci1idXR0b25zXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJ1dHRvbnNcIj5cbiAgICAgIDwhLS1yYWlzZWQgYnV0dG9uLS0+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYnV0dG9uLnJhaXNlZFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICAgIFtjb2xvcl09XCJidXR0b24uY29sb3JcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJidXR0b24uZGlzYWJsZWRcIlxuICAgICAgICAgIChjbGljayk9XCJidXR0b24uZm4oKVwiXG4gICAgICAgICAgY2xhc3M9XCJ0b29sYmFyLWJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8bWF0LWljb24gKm5nSWY9XCJidXR0b24uaWNvblwiIGNsYXNzPVwiYnV0dG9uLWljb25cIj5cbiAgICAgICAgICAgIHt7IGJ1dHRvbi5pY29uIH19XG4gICAgICAgICAgPC9tYXQtaWNvbj5cbiAgICAgICAgICB7eyBidXR0b24udGV4dCB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tc3Ryb2tlZCBidXR0b24tLT5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJidXR0b24uc3Ryb2tlZFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbWF0LXN0cm9rZWQtYnV0dG9uXG4gICAgICAgICAgW2NvbG9yXT1cImJ1dHRvbi5jb2xvclwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImJ1dHRvbi5kaXNhYmxlZFwiXG4gICAgICAgICAgKGNsaWNrKT1cImJ1dHRvbi5mbigpXCJcbiAgICAgICAgICBjbGFzcz1cInRvb2xiYXItYnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtYXQtaWNvbiAqbmdJZj1cImJ1dHRvbi5pY29uXCIgY2xhc3M9XCJidXR0b24taWNvblwiPlxuICAgICAgICAgICAge3sgYnV0dG9uLmljb24gfX1cbiAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICAgIHt7IGJ1dHRvbi50ZXh0IH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxtYXQtZGl2aWRlciBjbGFzcz1cInBhZ2UtcGxhY2VtZW50IG1hcmdpbi10b3BcIj48L21hdC1kaXZpZGVyPlxuIl19