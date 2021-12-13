import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../icon/icon.component";
function FormSectionComponent_lib_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-icon", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r0.icon);
} }
function FormSectionComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "*The cluster admin has disabled setting this section!");
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class FormSectionComponent {
    constructor() { }
    ngOnInit() { }
}
FormSectionComponent.ɵfac = function FormSectionComponent_Factory(t) { return new (t || FormSectionComponent)(); };
FormSectionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormSectionComponent, selectors: [["lib-form-section"]], inputs: { title: "title", text: "text", readOnly: "readOnly", style: "style", icon: "icon" }, ngContentSelectors: _c0, decls: 8, vars: 4, consts: [[1, "form--section-bottom"], [3, "icon", 4, "ngIf"], [4, "ngIf"], [3, "icon"]], template: function FormSectionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h3");
        i0.ɵɵtemplate(2, FormSectionComponent_lib_icon_2_Template, 1, 1, "lib-icon", 1);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, FormSectionComponent_p_6_Template, 2, 0, "p", 2);
        i0.ɵɵprojection(7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.text);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.readOnly);
    } }, directives: [i1.NgIf, i2.IconComponent], styles: [".wide[_ngcontent-%COMP%]{width:100%}h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{-webkit-margin-before:.2rem;margin-block-start:.2rem;color:rgba(0,0,0,.54)}.lib-icon[_ngcontent-%COMP%]{margin-right:.3rem}.form--section-bottom[_ngcontent-%COMP%], .form--section-bottom[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-bottom:.5em}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormSectionComponent, [{
        type: Component,
        args: [{
                selector: 'lib-form-section',
                templateUrl: './section.component.html',
                styleUrls: ['./section.component.scss'],
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }], text: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], style: [{
            type: Input
        }], icon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2Zvcm0vc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQ25ELDhCQUFnRDs7O0lBQXpCLGtDQUFhOzs7SUFFeEMseUJBQW9CO0lBQUEscUVBQXFEO0lBQUEsaUJBQUk7OztBREkvRSxNQUFNLE9BQU8sb0JBQW9CO0lBZ0IvQixnQkFBZSxDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDOzt3RkFsQkYsb0JBQW9CO3VFQUFwQixvQkFBb0I7O1FDUGpDLDhCQUFrQztRQUNoQywwQkFBSTtRQUFBLCtFQUFnRDtRQUFBLFlBQVc7UUFBQSxpQkFBSztRQUNwRSx5QkFBRztRQUFBLFlBQVU7UUFBQSxpQkFBSTtRQUNqQixpRUFBNkU7UUFFN0Usa0JBQXlCO1FBQzNCLGlCQUFNOztRQUxXLGVBQVU7UUFBViwrQkFBVTtRQUEyQixlQUFXO1FBQVgsK0JBQVc7UUFDNUQsZUFBVTtRQUFWLDhCQUFVO1FBQ1QsZUFBYztRQUFkLG1DQUFjOzt1RkRJUCxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDO3NDQUdDLEtBQUs7a0JBREosS0FBSztZQUlOLElBQUk7a0JBREgsS0FBSztZQUlOLFFBQVE7a0JBRFAsS0FBSztZQUlOLEtBQUs7a0JBREosS0FBSztZQUlOLElBQUk7a0JBREgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZm9ybS1zZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1TZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0ZXh0OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcmVhZE9ubHk6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzdHlsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiPGRpdiBjbGFzcz1cImZvcm0tLXNlY3Rpb24tYm90dG9tXCI+XG4gIDxoMz48bGliLWljb24gKm5nSWY9XCJpY29uXCIgW2ljb25dPVwiaWNvblwiPjwvbGliLWljb24+e3sgdGl0bGUgfX08L2gzPlxuICA8cD57eyB0ZXh0IH19PC9wPlxuICA8cCAqbmdJZj1cInJlYWRPbmx5XCI+KlRoZSBjbHVzdGVyIGFkbWluIGhhcyBkaXNhYmxlZCBzZXR0aW5nIHRoaXMgc2VjdGlvbiE8L3A+XG5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG4iXX0=