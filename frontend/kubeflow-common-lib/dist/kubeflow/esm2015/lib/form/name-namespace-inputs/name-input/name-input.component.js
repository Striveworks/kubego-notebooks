import { Component, Input } from '@angular/core';
import { getNameError, MAX_NAME_LENGTH, getNameSyncValidators, getNameAsyncValidators, } from '../../validators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
export class NameInputComponent {
    constructor() {
        this.existingNamesPrv = new Set();
        this.resourceName = '';
        this.maxLength = MAX_NAME_LENGTH;
    }
    get existingNames() {
        return this.existingNamesPrv;
    }
    set existingNames(names) {
        this.existingNamesPrv = names;
        this.nameControl.setAsyncValidators(getNameAsyncValidators(this.existingNamesPrv, this.maxLength));
        this.nameControl.setValidators(getNameSyncValidators());
    }
    ngOnInit() {
        this.nameControl.setAsyncValidators(getNameAsyncValidators(this.existingNamesPrv, this.maxLength));
        this.nameControl.setValidators(getNameSyncValidators());
    }
    nameError() {
        return getNameError(this.nameControl, this.resourceName);
    }
}
NameInputComponent.ɵfac = function NameInputComponent_Factory(t) { return new (t || NameInputComponent)(); };
NameInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NameInputComponent, selectors: [["lib-name-input"]], inputs: { nameControl: "nameControl", resourceName: "resourceName", maxLength: "maxLength", existingNames: "existingNames" }, decls: 6, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8953033926734869941$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_INPUT_NAME_INPUT_COMPONENT_TS_1 = goog.getMsg("Name");
        i18n_0 = MSG_EXTERNAL_8953033926734869941$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_INPUT_NAME_INPUT_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    } return [["appearance", "outline", 1, "wide"], i18n_0, ["matInput", "", "placeholder", "Name", 3, "formControl"]]; }, template: function NameInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵi18n(2, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵelementStart(4, "mat-error");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.nameControl);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.nameError());
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1.MatError], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NameInputComponent, [{
        type: Component,
        args: [{
                selector: 'lib-name-input',
                templateUrl: './name-input.component.html',
                styleUrls: ['./name-input.component.scss'],
            }]
    }], function () { return []; }, { nameControl: [{
            type: Input
        }], resourceName: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], existingNames: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2Zvcm0vbmFtZS1uYW1lc3BhY2UtaW5wdXRzL25hbWUtaW5wdXQvbmFtZS1pbnB1dC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2Zvcm0vbmFtZS1uYW1lc3BhY2UtaW5wdXRzL25hbWUtaW5wdXQvbmFtZS1pbnB1dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLGVBQWUsRUFDZixxQkFBcUIsRUFDckIsc0JBQXNCLEdBQ3ZCLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBTzFCLE1BQU0sT0FBTyxrQkFBa0I7SUF5QjdCO1FBeEJRLHFCQUFnQixHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFNN0MsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHbEIsY0FBUyxHQUFHLGVBQWUsQ0FBQztJQWViLENBQUM7SUFiaEIsSUFDSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLEtBQWtCO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FDakMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDOUQsQ0FBQztRQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQ2pDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQzlELENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMzRCxDQUFDOztvRkFyQ1Usa0JBQWtCO3FFQUFsQixrQkFBa0I7Ozs7O2lCQ2JiLFVBQUEscUVBQUk7O1FBRHRCLHlDQUFrRDtRQUNoRCxpQ0FBZ0I7UUFBaEIsZUFBZ0I7UUFBSSxpQkFBWTtRQUNoQywyQkFBaUU7UUFDakUsaUNBQVc7UUFBQSxZQUFpQjtRQUFBLGlCQUFZO1FBQzFDLGlCQUFpQjs7UUFGb0IsZUFBMkI7UUFBM0IsNkNBQTJCO1FBQ25ELGVBQWlCO1FBQWpCLHFDQUFpQjs7dUZEV2pCLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLDZCQUE2QjtnQkFDMUMsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7c0NBS0MsV0FBVztrQkFEVixLQUFLO1lBSU4sWUFBWTtrQkFEWCxLQUFLO1lBSU4sU0FBUztrQkFEUixLQUFLO1lBSUYsYUFBYTtrQkFEaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgZ2V0TmFtZUVycm9yLFxuICBNQVhfTkFNRV9MRU5HVEgsXG4gIGdldE5hbWVTeW5jVmFsaWRhdG9ycyxcbiAgZ2V0TmFtZUFzeW5jVmFsaWRhdG9ycyxcbn0gZnJvbSAnLi4vLi4vdmFsaWRhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uYW1lLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hbWUtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYW1lLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgZXhpc3RpbmdOYW1lc1BydiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gIEBJbnB1dCgpXG4gIG5hbWVDb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgQElucHV0KClcbiAgcmVzb3VyY2VOYW1lID0gJyc7XG5cbiAgQElucHV0KClcbiAgbWF4TGVuZ3RoID0gTUFYX05BTUVfTEVOR1RIO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBleGlzdGluZ05hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLmV4aXN0aW5nTmFtZXNQcnY7XG4gIH1cbiAgc2V0IGV4aXN0aW5nTmFtZXMobmFtZXM6IFNldDxzdHJpbmc+KSB7XG4gICAgdGhpcy5leGlzdGluZ05hbWVzUHJ2ID0gbmFtZXM7XG5cbiAgICB0aGlzLm5hbWVDb250cm9sLnNldEFzeW5jVmFsaWRhdG9ycyhcbiAgICAgIGdldE5hbWVBc3luY1ZhbGlkYXRvcnModGhpcy5leGlzdGluZ05hbWVzUHJ2LCB0aGlzLm1heExlbmd0aCksXG4gICAgKTtcblxuICAgIHRoaXMubmFtZUNvbnRyb2wuc2V0VmFsaWRhdG9ycyhnZXROYW1lU3luY1ZhbGlkYXRvcnMoKSk7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmFtZUNvbnRyb2wuc2V0QXN5bmNWYWxpZGF0b3JzKFxuICAgICAgZ2V0TmFtZUFzeW5jVmFsaWRhdG9ycyh0aGlzLmV4aXN0aW5nTmFtZXNQcnYsIHRoaXMubWF4TGVuZ3RoKSxcbiAgICApO1xuXG4gICAgdGhpcy5uYW1lQ29udHJvbC5zZXRWYWxpZGF0b3JzKGdldE5hbWVTeW5jVmFsaWRhdG9ycygpKTtcbiAgfVxuXG4gIG5hbWVFcnJvcigpIHtcbiAgICByZXR1cm4gZ2V0TmFtZUVycm9yKHRoaXMubmFtZUNvbnRyb2wsIHRoaXMucmVzb3VyY2VOYW1lKTtcbiAgfVxufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwid2lkZVwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCI+XG4gIDxtYXQtbGFiZWwgaTE4bj5OYW1lPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIk5hbWVcIiBbZm9ybUNvbnRyb2xdPVwibmFtZUNvbnRyb2xcIiAvPlxuICA8bWF0LWVycm9yPnt7IG5hbWVFcnJvcigpIH19PC9tYXQtZXJyb3I+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19