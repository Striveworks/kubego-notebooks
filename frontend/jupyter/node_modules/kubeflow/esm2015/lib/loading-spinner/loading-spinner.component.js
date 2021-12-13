import { Component, Input, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/progress-spinner";
const _c0 = ["spinnerWrapper"];
function LoadingSpinnerComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("diameter", ctx_r1.diameter);
} }
const _c1 = function (a0) { return { height: a0 }; };
export class LoadingSpinnerComponent {
    constructor() {
        this.diameter = 32;
        this.height = `${this.diameter}px`;
        this.initialized = false;
    }
    ngAfterViewInit() {
        if (!this.wrapper) {
            return;
        }
        setTimeout(() => {
            const offset = this.wrapper.nativeElement.getBoundingClientRect().top;
            this.height = `calc(100vh - ${offset}px)`;
            this.initialized = true;
        });
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoadingSpinnerComponent, selectors: [["lib-loading-spinner"]], viewQuery: function LoadingSpinnerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapper = _t.first);
    } }, inputs: { diameter: "diameter" }, decls: 3, vars: 4, consts: [[1, "spinner-wrapper", 3, "ngStyle"], ["spinnerWrapper", ""], [3, "diameter", 4, "ngIf"], [3, "diameter"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, LoadingSpinnerComponent_mat_spinner_2_Template, 1, 1, "mat-spinner", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx.height));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.initialized);
    } }, directives: [i1.NgStyle, i1.NgIf, i2.MatSpinner], styles: [".spinner-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingSpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'lib-loading-spinner',
                templateUrl: './loading-spinner.component.html',
                styleUrls: ['./loading-spinner.component.scss'],
            }]
    }], null, { diameter: [{
            type: Input
        }], wrapper: [{
            type: ViewChild,
            args: ['spinnerWrapper']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsU0FBUyxHQUdWLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNOckIsaUNBQXFFOzs7SUFBcEMsMENBQXFCOzs7QURheEQsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1XLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFJaEIsV0FBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDO1FBQzlCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0tBYzVCO0lBWkMsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUVELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixNQUFNLEtBQUssQ0FBQztZQUUxQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzhGQW5CVSx1QkFBdUI7MEVBQXZCLHVCQUF1Qjs7Ozs7O1FDZHBDLGlDQUE0RTtRQUMxRSx3RkFBcUU7UUFDdkUsaUJBQU07O1FBRnVDLGdFQUE4QjtRQUMzRCxlQUFpQjtRQUFqQixzQ0FBaUI7O3VGRGFwQix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEO2dCQUVVLFFBQVE7a0JBQWhCLEtBQUs7WUFFTixPQUFPO2tCQUROLFNBQVM7bUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbG9hZGluZy1zcGlubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBkaWFtZXRlciA9IDMyO1xuICBAVmlld0NoaWxkKCdzcGlubmVyV3JhcHBlcicpXG4gIHdyYXBwZXI6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGhlaWdodCA9IGAke3RoaXMuZGlhbWV0ZXJ9cHhgO1xuICBwdWJsaWMgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKCF0aGlzLndyYXBwZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gYGNhbGMoMTAwdmggLSAke29mZnNldH1weClgO1xuXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInNwaW5uZXItd3JhcHBlclwiICNzcGlubmVyV3JhcHBlciBbbmdTdHlsZV09XCJ7IGhlaWdodDogaGVpZ2h0IH1cIj5cbiAgPG1hdC1zcGlubmVyICpuZ0lmPVwiaW5pdGlhbGl6ZWRcIiBbZGlhbWV0ZXJdPVwiZGlhbWV0ZXJcIj48L21hdC1zcGlubmVyPlxuPC9kaXY+XG4iXX0=