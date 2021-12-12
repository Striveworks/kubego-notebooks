import { Component, Input, ViewChild, HostBinding, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
import * as i2 from "@angular/material/button";
import * as i3 from "../../icon/icon.component";
const _c0 = ["options"];
const _c3 = ["*"];
export class AdvancedOptionsComponent {
    constructor() {
        this.sectionIsExpanded = false;
        this.maxHeight = '5000px';
        this.text = $localize `Advanced Options`;
        this.selfClass = true;
    }
    get buttonIcon() {
        return this.sectionIsExpanded
            ? 'material:expand_less'
            : 'material:expand_more';
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.updateHeight();
    }
    updateHeight() {
        const options = this.optionsWrapper.nativeElement;
        options.style.maxHeight = 0;
        if (this.sectionIsExpanded) {
            options.style.maxHeight = this.maxHeight;
        }
    }
    toggleClicked() {
        this.sectionIsExpanded = !this.sectionIsExpanded;
        this.updateHeight();
    }
}
AdvancedOptionsComponent.ɵfac = function AdvancedOptionsComponent_Factory(t) { return new (t || AdvancedOptionsComponent)(); };
AdvancedOptionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdvancedOptionsComponent, selectors: [["lib-advanced-options"]], viewQuery: function AdvancedOptionsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionsWrapper = _t.first);
    } }, hostVars: 2, hostBindings: function AdvancedOptionsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-advanced-options", ctx.selfClass);
    } }, inputs: { sectionIsExpanded: "sectionIsExpanded", maxHeight: "maxHeight", text: "text" }, ngContentSelectors: _c3, decls: 10, vars: 2, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8461609631969932886$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_ADVANCED_OPTIONS_ADVANCED_OPTIONS_COMPONENT_TS_2 = goog.getMsg("Hide");
        i18n_1 = MSG_EXTERNAL_8461609631969932886$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_ADVANCED_OPTIONS_ADVANCED_OPTIONS_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟1eede69e18c5ac9c0b0295b72cabb7e64e029e74␟8461609631969932886:Hide`;
    } return [[1, "flex"], ["matTooltip", i18n_1, "matTooltipPosition", "right", 1, "threadline", 3, "click"], [1, "wide"], [1, "options-wrapper", "anchor"], ["options", ""], [1, "anchor"], ["color", "primary", "mat-button", "", "type", "button", 1, "toggle-button", "button-with-icon", 3, "click"], [1, "blue", 3, "icon"]]; }, template: function AdvancedOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function AdvancedOptionsComponent_Template_div_click_1_listener() { return ctx.toggleClicked(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3, 4);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "button", 6);
        i0.ɵɵlistener("click", function AdvancedOptionsComponent_Template_button_click_7_listener() { return ctx.toggleClicked(); });
        i0.ɵɵelement(8, "lib-icon", 7);
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("icon", ctx.buttonIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.text, " ");
    } }, directives: [i1.MatTooltip, i2.MatButton, i3.IconComponent], styles: ["[_nghost-%COMP%]{display:block;margin-bottom:1rem}.options-wrapper[_ngcontent-%COMP%]{transition:max-height .3s ease;overflow:hidden}.flex[_ngcontent-%COMP%]{display:flex}.anchor[_ngcontent-%COMP%]{overflow-anchor:none}.threadline[_ngcontent-%COMP%]{border-left:2px solid #edeff1}.threadline[_ngcontent-%COMP%], .threadline[_ngcontent-%COMP%]:hover{padding-right:12px;margin-right:12px}.threadline[_ngcontent-%COMP%]:hover{border-left:2px solid #1e88e5;cursor:pointer}.toggle-button[_ngcontent-%COMP%]{padding:0 4px;margin-left:-8px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdvancedOptionsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-advanced-options',
                templateUrl: './advanced-options.component.html',
                styleUrls: ['./advanced-options.component.scss'],
            }]
    }], function () { return []; }, { sectionIsExpanded: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], text: [{
            type: Input
        }], selfClass: [{
            type: HostBinding,
            args: ['class.lib-advanced-options']
        }], optionsWrapper: [{
            type: ViewChild,
            args: ['options', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2YW5jZWQtb3B0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2Zvcm0vYWR2YW5jZWQtb3B0aW9ucy9hZHZhbmNlZC1vcHRpb25zLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS9hZHZhbmNlZC1vcHRpb25zL2FkdmFuY2VkLW9wdGlvbnMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsU0FBUyxFQUdULFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQU92QixNQUFNLE9BQU8sd0JBQXdCO0lBYW5DO1FBWlMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBRyxRQUFRLENBQUM7UUFDckIsU0FBSSxHQUFHLFNBQVMsQ0FBQSxrQkFBa0IsQ0FBQztRQUNELGNBQVMsR0FBRyxJQUFJLENBQUM7SUFTN0MsQ0FBQztJQU5oQixJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxpQkFBaUI7WUFDM0IsQ0FBQyxDQUFDLHNCQUFzQjtZQUN4QixDQUFDLENBQUMsc0JBQXNCLENBQUM7SUFDN0IsQ0FBQztJQUlELFFBQVEsS0FBSSxDQUFDO0lBRWIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO1FBRWxELE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dHQWpDVSx3QkFBd0I7MkVBQXhCLHdCQUF3Qjs7Ozs7Ozs7Ozs7O2lCQ1hyQixVQUFBLHFFQUFJOzs7UUFKcEIsOEJBQWtCO1FBQ2hCLDhCQU1DO1FBSkMsa0dBQVMsbUJBQWUsSUFBQztRQUkxQixpQkFBTTtRQUVQLDhCQUFrQjtRQUNoQixpQ0FBNkM7UUFDM0Msa0JBQXlCO1FBQzNCLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTtRQUVOLDhCQUFvQjtRQUNsQixpQ0FNQztRQUZDLHFHQUFTLG1CQUFlLElBQUM7UUFHekIsOEJBQXNEO1FBQ3RELFlBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFNOztRQUhxQixlQUFtQjtRQUFuQixxQ0FBbUI7UUFDMUMsZUFDRjtRQURFLHlDQUNGOzt1RkRYVyx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEO3NDQUVVLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDcUMsU0FBUztrQkFBbkQsV0FBVzttQkFBQyw0QkFBNEI7WUFDRCxjQUFjO2tCQUFyRCxTQUFTO21CQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWR2YW5jZWQtb3B0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHZhbmNlZC1vcHRpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWR2YW5jZWQtb3B0aW9ucy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBZHZhbmNlZE9wdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBzZWN0aW9uSXNFeHBhbmRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBtYXhIZWlnaHQgPSAnNTAwMHB4JztcbiAgQElucHV0KCkgdGV4dCA9ICRsb2NhbGl6ZWBBZHZhbmNlZCBPcHRpb25zYDtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5saWItYWR2YW5jZWQtb3B0aW9ucycpIHNlbGZDbGFzcyA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoJ29wdGlvbnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSBvcHRpb25zV3JhcHBlcjogRWxlbWVudFJlZjtcblxuICBnZXQgYnV0dG9uSWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zZWN0aW9uSXNFeHBhbmRlZFxuICAgICAgPyAnbWF0ZXJpYWw6ZXhwYW5kX2xlc3MnXG4gICAgICA6ICdtYXRlcmlhbDpleHBhbmRfbW9yZSc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZUhlaWdodCgpO1xuICB9XG5cbiAgdXBkYXRlSGVpZ2h0KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnNXcmFwcGVyLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBvcHRpb25zLnN0eWxlLm1heEhlaWdodCA9IDA7XG4gICAgaWYgKHRoaXMuc2VjdGlvbklzRXhwYW5kZWQpIHtcbiAgICAgIG9wdGlvbnMuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5tYXhIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ2xpY2tlZCgpIHtcbiAgICB0aGlzLnNlY3Rpb25Jc0V4cGFuZGVkID0gIXRoaXMuc2VjdGlvbklzRXhwYW5kZWQ7XG4gICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgPGRpdlxuICAgIGNsYXNzPVwidGhyZWFkbGluZVwiXG4gICAgKGNsaWNrKT1cInRvZ2dsZUNsaWNrZWQoKVwiXG4gICAgbWF0VG9vbHRpcD1cIkhpZGVcIlxuICAgIGkxOG4tbWF0VG9vbHRpcFxuICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcbiAgPjwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJ3aWRlXCI+XG4gICAgPGRpdiBjbGFzcz1cIm9wdGlvbnMtd3JhcHBlciBhbmNob3JcIiAjb3B0aW9ucz5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImFuY2hvclwiPlxuICA8YnV0dG9uXG4gICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uIGJ1dHRvbi13aXRoLWljb25cIlxuICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgbWF0LWJ1dHRvblxuICAgIChjbGljayk9XCJ0b2dnbGVDbGlja2VkKClcIlxuICAgIHR5cGU9XCJidXR0b25cIlxuICA+XG4gICAgPGxpYi1pY29uIGNsYXNzPVwiYmx1ZVwiIFtpY29uXT1cImJ1dHRvbkljb25cIj48L2xpYi1pY29uPlxuICAgIHt7IHRleHQgfX1cbiAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==