import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
const _c0 = ["*"];
export class PanelComponent {
    constructor() {
        this.icon = 'info';
        this.color = 'primary';
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["lib-panel"]], inputs: { icon: "icon", color: "color", message: "message" }, ngContentSelectors: _c0, decls: 6, vars: 3, consts: [[1, "panel-body", "flex"], [1, "panel-icon", 3, "color"], [1, "panel-message"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-icon", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtext(4);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.color);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.icon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.message, " ");
    } }, directives: [i1.MatIcon], styles: [".panel-body[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.05);border-radius:4px;padding:1px;display:flex}.panel-icon[_ngcontent-%COMP%]{display:inline-block;margin:16px 24px}.panel-message[_ngcontent-%COMP%]{flex-wrap:wrap;margin-top:auto;margin-bottom:auto;margin-right:1rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{
                selector: 'lib-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.scss'],
            }]
    }], null, { icon: [{
            type: Input
        }], color: [{
            type: Input
        }], message: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9wYW5lbC9wYW5lbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pELE1BQU0sT0FBTyxjQUFjO0lBTDNCO1FBTVcsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFVBQUssR0FBRyxTQUFTLENBQUM7S0FFNUI7OzRFQUpZLGNBQWM7aUVBQWQsY0FBYzs7UUNQM0IsOEJBQTZCO1FBQzNCLG1DQUE2QztRQUFBLFlBQVU7UUFBQSxpQkFBVztRQUVsRSw4QkFBMkI7UUFDekIsWUFDQTtRQUFBLGtCQUF5QjtRQUMzQixpQkFBTTtRQUNSLGlCQUFNOztRQU5NLGVBQWU7UUFBZixpQ0FBZTtRQUFvQixlQUFVO1FBQVYsOEJBQVU7UUFHckQsZUFDQTtRQURBLDRDQUNBOzt1RkRFUyxjQUFjO2NBTDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEM7Z0JBRVUsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYW5lbC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGljb24gPSAnaW5mbyc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3ByaW1hcnknO1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmc7XG59XG4iLCI8ZGl2IGNsYXNzPVwicGFuZWwtYm9keSBmbGV4XCI+XG4gIDxtYXQtaWNvbiBbY29sb3JdPVwiY29sb3JcIiBjbGFzcz1cInBhbmVsLWljb25cIj57eyBpY29uIH19PC9tYXQtaWNvbj5cblxuICA8ZGl2IGNsYXNzPVwicGFuZWwtbWVzc2FnZVwiPlxuICAgIHt7IG1lc3NhZ2UgfX1cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=