import { Component, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class StepInfoComponent {
    constructor() {
        this.selfClass = true;
    }
    ngOnInit() { }
}
StepInfoComponent.ɵfac = function StepInfoComponent_Factory(t) { return new (t || StepInfoComponent)(); };
StepInfoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepInfoComponent, selectors: [["lib-step-info"]], hostVars: 2, hostBindings: function StepInfoComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-step-info", ctx.selfClass);
    } }, inputs: { header: "header" }, ngContentSelectors: _c0, decls: 7, vars: 1, consts: [[1, "flex"], [1, "separator"], [1, "lib-flex-layout-column"], [1, "mat-hint", "bold", "small-text"], [1, "mat-hint", "small-text"]], template: function StepInfoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.header);
    } }, styles: ["[_nghost-%COMP%]{display:block;margin-bottom:8px;width:300px}.separator[_ngcontent-%COMP%]{border-left:2px solid #edeff1;margin-right:12px}.small-text[_ngcontent-%COMP%]{font-size:12px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepInfoComponent, [{
        type: Component,
        args: [{
                selector: 'lib-step-info',
                templateUrl: './step-info.component.html',
                styleUrls: ['./step-info.component.scss'],
            }]
    }], function () { return []; }, { header: [{
            type: Input
        }], selfClass: [{
            type: HostBinding,
            args: ['class.lib-step-info']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS9zdGVwLWluZm8vc3RlcC1pbmZvLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS9zdGVwLWluZm8vc3RlcC1pbmZvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3RFLE1BQU0sT0FBTyxpQkFBaUI7SUFJNUI7UUFGb0MsY0FBUyxHQUFHLElBQUksQ0FBQztJQUV0QyxDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDOztrRkFORixpQkFBaUI7b0VBQWpCLGlCQUFpQjs7OztRQ1A5Qiw4QkFBa0I7UUFDaEIseUJBQTZCO1FBRTdCLDhCQUFvQztRQUNsQywrQkFBdUM7UUFBQSxZQUFZO1FBQUEsaUJBQU87UUFDMUQsK0JBQWtDO1FBQ2hDLGtCQUF5QjtRQUMzQixpQkFBTztRQUNULGlCQUFNO1FBQ1IsaUJBQU07O1FBTHFDLGVBQVk7UUFBWixnQ0FBWTs7dUZERzFDLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDO3NDQUVVLE1BQU07a0JBQWQsS0FBSztZQUM4QixTQUFTO2tCQUE1QyxXQUFXO21CQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN0ZXAtaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGVwLWluZm8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGVwLWluZm8uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcEluZm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWItc3RlcC1pbmZvJykgc2VsZkNsYXNzID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgPGRpdiBjbGFzcz1cInNlcGFyYXRvclwiPjwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJsaWItZmxleC1sYXlvdXQtY29sdW1uXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJtYXQtaGludCBib2xkIHNtYWxsLXRleHRcIj57eyBoZWFkZXIgfX08L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJtYXQtaGludCBzbWFsbC10ZXh0XCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19