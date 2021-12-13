import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DIALOG_RESP } from '../types';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/progress-spinner";
function ConfirmDialogComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function ConfirmDialogComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onAcceptClicked(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r0.data.confirmColor);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.data.accept.toUpperCase(), " ");
} }
function ConfirmDialogComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelement(2, "mat-spinner", 10);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.data.applying);
} }
export class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.DIALOG_RESP = DIALOG_RESP;
        this.isApplying = false;
        this.applying$ = new Subject();
    }
    ngOnInit() {
        this.applying$.subscribe(b => {
            this.isApplying = b;
        });
    }
    onAcceptClicked() {
        this.isApplying = true;
        this.applying$.next(true);
    }
    onCancelClicked() {
        this.dialogRef.close(DIALOG_RESP.CANCEL);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmDialogComponent, selectors: [["lib-confirm-dialog"]], decls: 12, vars: 7, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "error"], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", 3, "color", "click", 4, "ngIf"], ["mat-button", "", "disabled", "", 4, "ngIf"], ["mat-button", "", 3, "color", "click"], ["mat-button", "", "disabled", ""], [1, "waiting-button-wrapper"], ["diameter", "16"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p", 2);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, ConfirmDialogComponent_button_10_Template, 2, 2, "button", 5);
        i0.ɵɵtemplate(11, ConfirmDialogComponent_button_11_Template, 5, 1, "button", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.data.title);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.data.message);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.data.error);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("mat-dialog-close", ctx.DIALOG_RESP.CANCEL);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.data.cancel.toUpperCase(), " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isApplying);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isApplying);
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose, i3.NgIf, i4.MatSpinner], styles: [".waiting-button-wrapper[_ngcontent-%COMP%]{display:flex}.waiting-button-wrapper[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin:auto .2rem}.error[_ngcontent-%COMP%]{color:red}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmDialogComponent, [{
        type: Component,
        args: [{
                selector: 'lib-confirm-dialog',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.scss'],
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvY29uZmlybS1kaWFsb2cvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2NvbmZpcm0tZGlhbG9nL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekUsT0FBTyxFQUFnQixXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7SUNRN0IsaUNBS0M7SUFGQyxtTUFBMkI7SUFHM0IsWUFDRjtJQUFBLGlCQUFTOzs7SUFIUCxnREFBMkI7SUFFM0IsZUFDRjtJQURFLGlFQUNGOzs7SUFFQSxpQ0FBK0M7SUFDN0MsOEJBQW9DO0lBQ2xDLGtDQUF5QztJQUN6Qyx5QkFBRztJQUFBLFlBQW1CO0lBQUEsaUJBQUk7SUFDNUIsaUJBQU07SUFDUixpQkFBUzs7O0lBRkYsZUFBbUI7SUFBbkIsMENBQW1COztBRGI1QixNQUFNLE9BQU8sc0JBQXNCO0lBS2pDLFlBQ1MsU0FBK0MsRUFHL0MsSUFBa0I7UUFIbEIsY0FBUyxHQUFULFNBQVMsQ0FBc0M7UUFHL0MsU0FBSSxHQUFKLElBQUksQ0FBYztRQVJwQixnQkFBVyxHQUFHLFdBQVcsQ0FBQztRQUMxQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO0lBT3ZDLENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7OzRGQXpCVSxzQkFBc0IsOERBUXZCLGVBQWU7eUVBUmQsc0JBQXNCO1FDVm5DLDZCQUFxQjtRQUFBLFlBQWdCO1FBQUEsaUJBQUs7UUFDMUMsOEJBQXdCO1FBQ3RCLHlCQUFHO1FBQUEsWUFBa0I7UUFBQSxpQkFBSTtRQUV6Qiw0QkFBaUI7UUFBQSxZQUFnQjtRQUFBLGlCQUFJO1FBQ3ZDLGlCQUFNO1FBQ04sOEJBQXdCO1FBQ3RCLGlDQUEyRTtRQUN6RSxZQUNGO1FBQUEsaUJBQVM7UUFFVCwrRUFPUztRQUVULCtFQUtTO1FBQ1gsaUJBQU07O1FBMUJlLGVBQWdCO1FBQWhCLG9DQUFnQjtRQUVoQyxlQUFrQjtRQUFsQixzQ0FBa0I7UUFFSixlQUFnQjtRQUFoQixvQ0FBZ0I7UUFHZCxlQUF1QztRQUF2Qyx5REFBdUM7UUFDeEQsZUFDRjtRQURFLDhEQUNGO1FBR0csZUFBaUI7UUFBakIsc0NBQWlCO1FBUVgsZUFBZ0I7UUFBaEIscUNBQWdCOzt1RkRWZCxzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOztzQkFTSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IERpYWxvZ0NvbmZpZywgRElBTE9HX1JFU1AgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb25maXJtLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBESUFMT0dfUkVTUCA9IERJQUxPR19SRVNQO1xuICBwdWJsaWMgaXNBcHBseWluZyA9IGZhbHNlO1xuICBwdWJsaWMgYXBwbHlpbmckID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29uZmlybURpYWxvZ0NvbXBvbmVudD4sXG5cbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSlcbiAgICBwdWJsaWMgZGF0YTogRGlhbG9nQ29uZmlnLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcHBseWluZyQuc3Vic2NyaWJlKGIgPT4ge1xuICAgICAgdGhpcy5pc0FwcGx5aW5nID0gYjtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQWNjZXB0Q2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzQXBwbHlpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXBwbHlpbmckLm5leHQodHJ1ZSk7XG4gIH1cblxuICBvbkNhbmNlbENsaWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoRElBTE9HX1JFU1AuQ0FOQ0VMKTtcbiAgfVxufVxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+e3sgZGF0YS50aXRsZSB9fTwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbiAgPHA+e3sgZGF0YS5tZXNzYWdlIH19PC9wPlxuXG4gIDxwIGNsYXNzPVwiZXJyb3JcIj57eyBkYXRhLmVycm9yIH19PC9wPlxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cIkRJQUxPR19SRVNQLkNBTkNFTFwiIGNka0ZvY3VzSW5pdGlhbD5cbiAgICB7eyBkYXRhLmNhbmNlbC50b1VwcGVyQ2FzZSgpIH19XG4gIDwvYnV0dG9uPlxuXG4gIDxidXR0b25cbiAgICAqbmdJZj1cIiFpc0FwcGx5aW5nXCJcbiAgICBtYXQtYnV0dG9uXG4gICAgKGNsaWNrKT1cIm9uQWNjZXB0Q2xpY2tlZCgpXCJcbiAgICBbY29sb3JdPVwiZGF0YS5jb25maXJtQ29sb3JcIlxuICA+XG4gICAge3sgZGF0YS5hY2NlcHQudG9VcHBlckNhc2UoKSB9fVxuICA8L2J1dHRvbj5cblxuICA8YnV0dG9uICpuZ0lmPVwiaXNBcHBseWluZ1wiIG1hdC1idXR0b24gZGlzYWJsZWQ+XG4gICAgPGRpdiBjbGFzcz1cIndhaXRpbmctYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgIDxtYXQtc3Bpbm5lciBkaWFtZXRlcj1cIjE2XCI+PC9tYXQtc3Bpbm5lcj5cbiAgICAgIDxwPnt7IGRhdGEuYXBwbHlpbmcgfX08L3A+XG4gICAgPC9kaXY+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=