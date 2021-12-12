import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
function PositiveNumberInputComponent_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵi18n(1, 3);
    i0.ɵɵelementEnd();
} }
export class PositiveNumberInputComponent {
    constructor() {
        this.min = 0.1;
        this.step = 0.1;
    }
    ngOnInit() {
        this.sizeControl.setValidators([Validators.required, Validators.min(0)]);
    }
}
PositiveNumberInputComponent.ɵfac = function PositiveNumberInputComponent_Factory(t) { return new (t || PositiveNumberInputComponent)(); };
PositiveNumberInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PositiveNumberInputComponent, selectors: [["lib-positive-number-input"]], inputs: { sizeControl: "sizeControl", label: "label", min: "min", step: "step" }, decls: 5, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1457381862685487592$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_POSITIVE_NUMBER_INPUT_POSITIVE_NUMBER_INPUT_COMPONENT_TS__1 = goog.getMsg(" Cannot be negative. ");
        i18n_0 = MSG_EXTERNAL_1457381862685487592$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_POSITIVE_NUMBER_INPUT_POSITIVE_NUMBER_INPUT_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:␟7824eb0fc97826f3919ba20317db1f8fb7926fcf␟1457381862685487592: Cannot be negative. `;
    } return [["appearance", "outline", 1, "wide"], ["matInput", "", "type", "number", 3, "min", "step", "formControl"], [4, "ngIf"], i18n_0]; }, template: function PositiveNumberInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵtemplate(4, PositiveNumberInputComponent_mat_error_4_Template, 2, 0, "mat-error", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("min", ctx.min)("step", ctx.step)("formControl", ctx.sizeControl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.sizeControl.hasError("min"));
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MinValidator, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i4.NgIf, i1.MatError], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PositiveNumberInputComponent, [{
        type: Component,
        args: [{
                selector: 'lib-positive-number-input',
                templateUrl: './positive-number-input.component.html',
                styleUrls: ['./positive-number-input.component.scss'],
            }]
    }], function () { return []; }, { sizeControl: [{
            type: Input
        }], label: [{
            type: Input
        }], min: [{
            type: Input
        }], step: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpdmUtbnVtYmVyLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS9wb3NpdGl2ZS1udW1iZXItaW5wdXQvcG9zaXRpdmUtbnVtYmVyLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS9wb3NpdGl2ZS1udW1iZXItaW5wdXQvcG9zaXRpdmUtbnVtYmVyLWlucHV0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBbUIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNRM0QsaUNBQW9EO0lBQXBELGVBQW9EO0lBRXBELGlCQUFZOztBREhkLE1BQU0sT0FBTyw0QkFBNEI7SUFTdkM7UUFKUyxRQUFHLEdBQUcsR0FBRyxDQUFDO1FBRVYsU0FBSSxHQUFHLEdBQUcsQ0FBQztJQUVMLENBQUM7SUFFaEIsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzt3R0FiVSw0QkFBNEI7K0VBQTVCLDRCQUE0Qjs7Ozs7aUJDRXJDLFVBQUEsc0ZBQ0Y7O1FBWEYseUNBQWtEO1FBQ2hELGlDQUFXO1FBQUEsWUFBVztRQUFBLGlCQUFZO1FBQ2xDLDJCQU1FO1FBQ0YseUZBRVk7UUFDZCxpQkFBaUI7O1FBWEosZUFBVztRQUFYLCtCQUFXO1FBSXBCLGVBQVc7UUFBWCw2QkFBVyxrQkFBQSxnQ0FBQTtRQUlELGVBQWlDO1FBQWpDLHNEQUFpQzs7dUZERGxDLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLHdDQUF3QztnQkFDckQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7YUFDdEQ7c0NBRVUsV0FBVztrQkFBbkIsS0FBSztZQUVHLEtBQUs7a0JBQWIsS0FBSztZQUVHLEdBQUc7a0JBQVgsS0FBSztZQUVHLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcG9zaXRpdmUtbnVtYmVyLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Bvc2l0aXZlLW51bWJlci1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Bvc2l0aXZlLW51bWJlci1pbnB1dC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQb3NpdGl2ZU51bWJlcklucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2l6ZUNvbnRyb2w6IEFic3RyYWN0Q29udHJvbDtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG1pbiA9IDAuMTtcblxuICBASW5wdXQoKSBzdGVwID0gMC4xO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNpemVDb250cm9sLnNldFZhbGlkYXRvcnMoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluKDApXSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNsYXNzPVwid2lkZVwiPlxuICA8bWF0LWxhYmVsPnt7IGxhYmVsIH19PC9tYXQtbGFiZWw+XG4gIDxpbnB1dFxuICAgIG1hdElucHV0XG4gICAgdHlwZT1cIm51bWJlclwiXG4gICAgW21pbl09XCJtaW5cIlxuICAgIFtzdGVwXT1cInN0ZXBcIlxuICAgIFtmb3JtQ29udHJvbF09XCJzaXplQ29udHJvbFwiXG4gIC8+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJzaXplQ29udHJvbC5oYXNFcnJvcignbWluJylcIiBpMThuPlxuICAgIENhbm5vdCBiZSBuZWdhdGl2ZS5cbiAgPC9tYXQtZXJyb3I+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19