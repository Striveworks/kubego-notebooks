import { Component, Input } from '@angular/core';
import { MAX_NAME_LENGTH } from '../validators';
import * as i0 from "@angular/core";
import * as i1 from "./name-input/name-input.component";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
export class NameNamespaceInputsComponent {
    constructor() {
        this.maxLength = MAX_NAME_LENGTH;
    }
    ngOnInit() { }
}
NameNamespaceInputsComponent.ɵfac = function NameNamespaceInputsComponent_Factory(t) { return new (t || NameNamespaceInputsComponent)(); };
NameNamespaceInputsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NameNamespaceInputsComponent, selectors: [["lib-form-name-namespace-inputs"]], inputs: { nameControl: "nameControl", namespaceControl: "namespaceControl", resourceName: "resourceName", maxLength: "maxLength", existingNames: "existingNames" }, decls: 6, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_1 = goog.getMsg("Namespace");
        i18n_0 = MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟130fd872c78271a8f86b1ab16a76e823969c47d9␟3294686077659093992:Namespace`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_3 = goog.getMsg("Namespace");
        i18n_2 = MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟130fd872c78271a8f86b1ab16a76e823969c47d9␟3294686077659093992:Namespace`;
    } return [[1, "row"], [1, "column", 3, "nameControl", "maxLength", "resourceName", "existingNames"], ["appearance", "outline", 1, "column"], i18n_0, ["matInput", "", "placeholder", i18n_2, "readonly", "", 3, "formControl"]]; }, template: function NameNamespaceInputsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "lib-name-input", 1);
        i0.ɵɵelementStart(2, "mat-form-field", 2);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵi18n(4, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nameControl", ctx.nameControl)("maxLength", ctx.maxLength)("resourceName", ctx.resourceName)("existingNames", ctx.existingNames);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.namespaceControl);
    } }, directives: [i1.NameInputComponent, i2.MatFormField, i2.MatLabel, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NameNamespaceInputsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-form-name-namespace-inputs',
                templateUrl: './name-namespace-inputs.component.html',
                styleUrls: ['./name-namespace-inputs.component.scss'],
            }]
    }], function () { return []; }, { nameControl: [{
            type: Input
        }], namespaceControl: [{
            type: Input
        }], resourceName: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], existingNames: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1uYW1lc3BhY2UtaW5wdXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS9uYW1lLW5hbWVzcGFjZS1pbnB1dHMvbmFtZS1uYW1lc3BhY2UtaW5wdXRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS9uYW1lLW5hbWVzcGFjZS1pbnB1dHMvbmFtZS1uYW1lc3BhY2UtaW5wdXRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFPOUQsTUFBTSxPQUFPLDRCQUE0QjtJQWtCdkM7UUFMQSxjQUFTLEdBQUcsZUFBZSxDQUFDO0lBS2IsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQzs7d0dBcEJGLDRCQUE0QjsrRUFBNUIsNEJBQTRCOzs7OztpQkNDckIsVUFBQSwwRUFBUzs7Ozs7O2lCQUdWLFVBQUEsMEVBQVM7O1FBYjVCLDhCQUFpQjtRQUNmLG9DQU1rQjtRQUVsQix5Q0FBb0Q7UUFDbEQsaUNBQWdCO1FBQWhCLGVBQWdCO1FBQVMsaUJBQVk7UUFDckMsMkJBTUU7UUFDSixpQkFBaUI7UUFDbkIsaUJBQU07O1FBaEJGLGVBQTJCO1FBQTNCLDZDQUEyQiw0QkFBQSxrQ0FBQSxvQ0FBQTtRQWF6QixlQUFnQztRQUFoQyxrREFBZ0M7O3VGRFB6Qiw0QkFBNEI7Y0FMeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSx3Q0FBd0M7Z0JBQ3JELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2FBQ3REO3NDQUtDLFdBQVc7a0JBRFYsS0FBSztZQUlOLGdCQUFnQjtrQkFEZixLQUFLO1lBSU4sWUFBWTtrQkFEWCxLQUFLO1lBSU4sU0FBUztrQkFEUixLQUFLO1lBSU4sYUFBYTtrQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBnZXROYW1lRXJyb3IsIE1BWF9OQU1FX0xFTkdUSCB9IGZyb20gJy4uL3ZhbGlkYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZm9ybS1uYW1lLW5hbWVzcGFjZS1pbnB1dHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmFtZS1uYW1lc3BhY2UtaW5wdXRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmFtZS1uYW1lc3BhY2UtaW5wdXRzLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVOYW1lc3BhY2VJbnB1dHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIGV4aXN0aW5nTmFtZXNQcnY6IFNldDxzdHJpbmc+O1xuXG4gIEBJbnB1dCgpXG4gIG5hbWVDb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG5cbiAgQElucHV0KClcbiAgbmFtZXNwYWNlQ29udHJvbDogQWJzdHJhY3RDb250cm9sO1xuXG4gIEBJbnB1dCgpXG4gIHJlc291cmNlTmFtZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIG1heExlbmd0aCA9IE1BWF9OQU1FX0xFTkdUSDtcblxuICBASW5wdXQoKVxuICBleGlzdGluZ05hbWVzOiBTZXQ8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiPGRpdiBjbGFzcz1cInJvd1wiPlxuICA8bGliLW5hbWUtaW5wdXRcbiAgICBjbGFzcz1cImNvbHVtblwiXG4gICAgW25hbWVDb250cm9sXT1cIm5hbWVDb250cm9sXCJcbiAgICBbbWF4TGVuZ3RoXT1cIm1heExlbmd0aFwiXG4gICAgW3Jlc291cmNlTmFtZV09XCJyZXNvdXJjZU5hbWVcIlxuICAgIFtleGlzdGluZ05hbWVzXT1cImV4aXN0aW5nTmFtZXNcIlxuICA+PC9saWItbmFtZS1pbnB1dD5cblxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjbGFzcz1cImNvbHVtblwiPlxuICAgIDxtYXQtbGFiZWwgaTE4bj5OYW1lc3BhY2U8L21hdC1sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIG1hdElucHV0XG4gICAgICBwbGFjZWhvbGRlcj1cIk5hbWVzcGFjZVwiXG4gICAgICBpMThuLXBsYWNlaG9sZGVyXG4gICAgICByZWFkb25seVxuICAgICAgW2Zvcm1Db250cm9sXT1cIm5hbWVzcGFjZUNvbnRyb2xcIlxuICAgIC8+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbiJdfQ==