import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackType } from '../types';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/button";
const _c2 = function (a0) { return [a0, "pad"]; };
export class SnackBarComponent {
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
    get icon() {
        switch (this.data.snackType) {
            case SnackType.Success:
                return 'done';
            case SnackType.Error:
                return 'clear';
            case SnackType.Warning:
                return 'warning';
            case SnackType.Info:
                return 'info';
            default:
                return 'warning';
        }
    }
    dismiss() {
        this.snackBarRef.dismiss();
    }
}
SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) { return new (t || SnackBarComponent)(i0.ɵɵdirectiveInject(i1.MatSnackBarRef), i0.ɵɵdirectiveInject(MAT_SNACK_BAR_DATA)); };
SnackBarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SnackBarComponent, selectors: [["lib-snack-bar"]], decls: 7, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1808188406576936132$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_SNACK_BAR_COMPONENT_SNACK_BAR_COMPONENT_TS_1 = goog.getMsg("DISMISS");
        i18n_0 = MSG_EXTERNAL_1808188406576936132$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_SNACK_BAR_COMPONENT_SNACK_BAR_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟0c0be57aaf30414531e79157a45e0fc3fd6b637b␟1808188406576936132:DISMISS`;
    } return [[1, "snack-container"], [3, "ngClass"], ["mat-button", "", "color", "accent", 3, "click"], i18n_0]; }, template: function SnackBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-icon", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "span");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function SnackBarComponent_Template_button_click_5_listener() { return ctx.dismiss(); });
        i0.ɵɵi18n(6, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c2, ctx.icon));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.icon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.data.msg);
    } }, directives: [i2.MatIcon, i3.NgClass, i4.MatButton], styles: [".snack-container[_ngcontent-%COMP%]{display:flex;align-items:center}.pad[_ngcontent-%COMP%]{margin-right:10px}.done[_ngcontent-%COMP%]{color:green}.clear[_ngcontent-%COMP%]{color:red}.warning[_ngcontent-%COMP%]{color:orange}span[_ngcontent-%COMP%]{width:90%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarComponent, [{
        type: Component,
        args: [{
                selector: 'lib-snack-bar',
                templateUrl: './snack-bar.component.html',
                styleUrls: ['./snack-bar.component.scss'],
            }]
    }], function () { return [{ type: i1.MatSnackBarRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_SNACK_BAR_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvc25hY2stYmFyL2NvbXBvbmVudC9zbmFjay1iYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9zbmFjay1iYXIvY29tcG9uZW50L3NuYWNrLWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7QUFPckMsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUNTLFdBQThDLEVBQ2xCLElBQVM7UUFEckMsZ0JBQVcsR0FBWCxXQUFXLENBQW1DO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQUs7SUFDM0MsQ0FBQztJQUVKLElBQUksSUFBSTtRQUNOLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDM0IsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsT0FBTyxNQUFNLENBQUM7WUFDaEIsS0FBSyxTQUFTLENBQUMsS0FBSztnQkFDbEIsT0FBTyxPQUFPLENBQUM7WUFDakIsS0FBSyxTQUFTLENBQUMsT0FBTztnQkFDcEIsT0FBTyxTQUFTLENBQUM7WUFDbkIsS0FBSyxTQUFTLENBQUMsSUFBSTtnQkFDakIsT0FBTyxNQUFNLENBQUM7WUFDaEI7Z0JBQ0UsT0FBTyxTQUFTLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7a0ZBdkJVLGlCQUFpQixnRUFHbEIsa0JBQWtCO29FQUhqQixpQkFBaUI7Ozs7O2lCQ04rQixVQUFBLHdFQUFPOztRQUhwRSw4QkFBNkI7UUFDM0IsbUNBQW9DO1FBQUEsWUFBVTtRQUFBLGlCQUFXO1FBQ3pELDRCQUFNO1FBQUEsWUFBYztRQUFBLGlCQUFPO1FBQzNCLGlDQUEyRDtRQUF6Qiw4RkFBUyxhQUFTLElBQUM7UUFBckQsZUFBMkQ7UUFBTyxpQkFBUztRQUM3RSxpQkFBTTs7UUFITSxlQUF5QjtRQUF6Qiw4REFBeUI7UUFBQyxlQUFVO1FBQVYsOEJBQVU7UUFDeEMsZUFBYztRQUFkLGtDQUFjOzt1RkRPVCxpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUMxQzs7c0JBSUksTUFBTTt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IFNuYWNrVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNuYWNrLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbmFjay1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbmFjay1iYXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc25hY2tCYXJSZWY6IE1hdFNuYWNrQmFyUmVmPFNuYWNrQmFyQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IGFueSxcbiAgKSB7fVxuXG4gIGdldCBpY29uKCkge1xuICAgIHN3aXRjaCAodGhpcy5kYXRhLnNuYWNrVHlwZSkge1xuICAgICAgY2FzZSBTbmFja1R5cGUuU3VjY2VzczpcbiAgICAgICAgcmV0dXJuICdkb25lJztcbiAgICAgIGNhc2UgU25hY2tUeXBlLkVycm9yOlxuICAgICAgICByZXR1cm4gJ2NsZWFyJztcbiAgICAgIGNhc2UgU25hY2tUeXBlLldhcm5pbmc6XG4gICAgICAgIHJldHVybiAnd2FybmluZyc7XG4gICAgICBjYXNlIFNuYWNrVHlwZS5JbmZvOlxuICAgICAgICByZXR1cm4gJ2luZm8nO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICd3YXJuaW5nJztcbiAgICB9XG4gIH1cblxuICBkaXNtaXNzKCkge1xuICAgIHRoaXMuc25hY2tCYXJSZWYuZGlzbWlzcygpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwic25hY2stY29udGFpbmVyXCI+XG4gIDxtYXQtaWNvbiBbbmdDbGFzc109XCJbaWNvbiwgJ3BhZCddXCI+e3sgaWNvbiB9fTwvbWF0LWljb24+XG4gIDxzcGFuPnt7IGRhdGEubXNnIH19PC9zcGFuPlxuICA8YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiAoY2xpY2spPVwiZGlzbWlzcygpXCIgaTE4bj5ESVNNSVNTPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==