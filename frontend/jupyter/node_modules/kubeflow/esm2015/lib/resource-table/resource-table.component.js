import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionEvent, TABLE_THEME, } from './types';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/card";
import * as i3 from "@angular/material/divider";
import * as i4 from "./table/table.component";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
function ResourceTableComponent_mat_card_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function ResourceTableComponent_mat_card_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.newButtonTriggered(); });
    i0.ɵɵelementStart(1, "mat-icon", 8);
    i0.ɵɵtext(2, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.config == null ? null : ctx_r2.config.newButtonText, " ");
} }
function ResourceTableComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ResourceTableComponent_mat_card_1_button_4_Template, 4, 1, "button", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "mat-divider");
    i0.ɵɵelementStart(6, "mat-card-content");
    i0.ɵɵelement(7, "lib-table", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r0.totalWidth)("min-width", ctx_r0.minTableWidth);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.config == null ? null : ctx_r0.config.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config == null ? null : ctx_r0.config.newButtonText);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("config", ctx_r0.config)("data", ctx_r0.data)("trackByFn", ctx_r0.trackByFn)("emitter", ctx_r0.actionsEmitter);
} }
function ResourceTableComponent_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function ResourceTableComponent_div_2_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.newButtonTriggered(); });
    i0.ɵɵelementStart(1, "mat-icon", 8);
    i0.ɵɵtext(2, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.config == null ? null : ctx_r5.config.newButtonText, " ");
} }
function ResourceTableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ResourceTableComponent_div_2_button_4_Template, 4, 1, "button", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "mat-divider");
    i0.ɵɵelement(6, "lib-table", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r1.totalWidth)("min-width", ctx_r1.minTableWidth);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.config == null ? null : ctx_r1.config.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.config == null ? null : ctx_r1.config.newButtonText);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r1.config)("data", ctx_r1.data)("trackByFn", ctx_r1.trackByFn)("emitter", ctx_r1.actionsEmitter);
} }
export class ResourceTableComponent {
    constructor() {
        // Whenever a button in a row is pressed the component will emit an event
        // with information regarding the button that was pressed as well as the
        // row's object.
        this.actionsEmitter = new EventEmitter();
        this.TABLE_THEME = TABLE_THEME;
    }
    ngOnInit() { }
    actionTriggered(e) {
        // Forward the emitted ActionEvent
        this.actionsEmitter.emit(e);
    }
    newButtonTriggered() {
        const ev = new ActionEvent('newResourceButton', {});
        this.actionsEmitter.emit(ev);
    }
    linkClicked(field, data) {
        const ev = new ActionEvent(`${field}:link`, data);
        this.actionsEmitter.emit(ev);
    }
    get minTableWidth() {
        // Review: This will break if the config is an other falsy value
        // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
        if (typeof this.config === 'undefined') {
            return '600px';
        }
        return `${this.config.columns.length * 100}px`;
    }
    get totalWidth() {
        if (!this.config || !this.config.width) {
            return 'fit-content';
        }
        return this.config.width;
    }
    get tableTheme() {
        if (!this.config || !this.config.theme) {
            return TABLE_THEME.CARD;
        }
        return this.config.theme;
    }
}
ResourceTableComponent.ɵfac = function ResourceTableComponent_Factory(t) { return new (t || ResourceTableComponent)(); };
ResourceTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResourceTableComponent, selectors: [["lib-resource-table"]], inputs: { config: "config", data: "data", trackByFn: "trackByFn" }, outputs: { actionsEmitter: "actionsEmitter" }, decls: 3, vars: 4, consts: [[1, "center-flex"], ["class", "mat-elevation-z4", 3, "width", "min-width", 4, "ngIf"], [3, "width", "min-width", 4, "ngIf"], [1, "mat-elevation-z4"], [1, "header", "card-title-padding"], ["mat-button", "", "id", "newResource", "color", "primary", "class", "right", 3, "click", 4, "ngIf"], [3, "config", "data", "trackByFn", "emitter"], ["mat-button", "", "id", "newResource", "color", "primary", 1, "right", 3, "click"], [1, "new-resource-button"], [1, "header"]], template: function ResourceTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ResourceTableComponent_mat_card_1_Template, 8, 10, "mat-card", 1);
        i0.ɵɵtemplate(2, ResourceTableComponent_div_2_Template, 7, 10, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("space-top", ctx.tableTheme == ctx.TABLE_THEME.CARD);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.tableTheme == ctx.TABLE_THEME.CARD);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.tableTheme == ctx.TABLE_THEME.FLAT);
    } }, directives: [i1.NgIf, i2.MatCard, i3.MatDivider, i2.MatCardContent, i4.TableComponent, i5.MatButton, i6.MatIcon], styles: [".right[_ngcontent-%COMP%]{margin-left:auto}.space-top[_ngcontent-%COMP%]{padding-top:1.5rem}mat-card[_ngcontent-%COMP%]{padding:0;margin:0 0 50px}mat-toolbar[_ngcontent-%COMP%]{background:#fff}.header[_ngcontent-%COMP%]{display:flex;align-items:center;height:64px;font-weight:400;font-size:20px}.card-title-padding[_ngcontent-%COMP%]{padding:0 16px}.mat-icon[_ngcontent-%COMP%]{line-height:.85}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResourceTableComponent, [{
        type: Component,
        args: [{
                selector: 'lib-resource-table',
                templateUrl: './resource-table.component.html',
                styleUrls: ['./resource-table.component.scss'],
            }]
    }], function () { return []; }, { config: [{
            type: Input
        }], data: [{
            type: Input
        }], trackByFn: [{
            type: Input
        }], actionsEmitter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9yZXNvdXJjZS10YWJsZS9yZXNvdXJjZS10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3Jlc291cmNlLXRhYmxlL3Jlc291cmNlLXRhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxFQUVMLFdBQVcsRUFPWCxXQUFXLEdBQ1osTUFBTSxTQUFTLENBQUM7Ozs7Ozs7Ozs7SUNDWCxpQ0FPQztJQURDLGlOQUE4QjtJQUU5QixtQ0FBc0M7SUFBQSxtQkFBRztJQUFBLGlCQUFXO0lBQ3BELFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRFAsZUFDRjtJQURFLDJGQUNGOzs7SUFuQkosbUNBS0M7SUFDQyw4QkFBdUM7SUFDckMsMkJBQUs7SUFBQSxZQUFtQjtJQUFBLGlCQUFNO0lBRTlCLHdGQVVTO0lBQ1gsaUJBQU07SUFFTiw4QkFBMkI7SUFFM0Isd0NBQWtCO0lBRWhCLCtCQUthO0lBQ2YsaUJBQW1CO0lBQ3JCLGlCQUFXOzs7SUE5QlQsMENBQTBCLG1DQUFBO0lBSW5CLGVBQW1CO0lBQW5CLHdFQUFtQjtJQUdyQixlQUEyQjtJQUEzQixpRkFBMkI7SUFpQjVCLGVBQWlCO0lBQWpCLHNDQUFpQixxQkFBQSwrQkFBQSxrQ0FBQTs7OztJQWlCbkIsaUNBT0M7SUFEQyw0TUFBOEI7SUFFOUIsbUNBQXNDO0lBQUEsbUJBQUc7SUFBQSxpQkFBVztJQUNwRCxZQUNGO0lBQUEsaUJBQVM7OztJQURQLGVBQ0Y7SUFERSwyRkFDRjs7O0lBbEJKLDJCQUlDO0lBQ0MsOEJBQW9CO0lBQ2xCLHlCQUFHO0lBQUEsWUFBbUI7SUFBQSxpQkFBSTtJQUUxQixtRkFVUztJQUNYLGlCQUFNO0lBRU4sOEJBQTJCO0lBRzNCLCtCQUthO0lBQ2YsaUJBQU07OztJQTdCSiwwQ0FBMEIsbUNBQUE7SUFLckIsZUFBbUI7SUFBbkIsd0VBQW1CO0lBR25CLGVBQTJCO0lBQTNCLGlGQUEyQjtJQWdCOUIsZUFBaUI7SUFBakIsc0NBQWlCLHFCQUFBLCtCQUFBLGtDQUFBOztBRDlDdkIsTUFBTSxPQUFPLHNCQUFzQjtJQVlqQztRQVBBLHlFQUF5RTtRQUN6RSx3RUFBd0U7UUFDeEUsZ0JBQWdCO1FBQ04sbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBZSxDQUFDO1FBRTNELGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBRVgsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQztJQUVOLGVBQWUsQ0FBQyxDQUFjO1FBQ25DLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLE1BQU0sRUFBRSxHQUFHLElBQUksV0FBVyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSxXQUFXLENBQUMsS0FBYSxFQUFFLElBQVM7UUFDekMsTUFBTSxFQUFFLEdBQUcsSUFBSSxXQUFXLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsZ0VBQWdFO1FBQ2hFLDBEQUEwRDtRQUMxRCxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQUU7WUFDdEMsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFFRCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3RDLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUN0QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUM7U0FDekI7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQzNCLENBQUM7OzRGQXZEVSxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQ2pCbkMsOEJBQTRFO1FBRTFFLGtGQWlDVztRQUdYLHdFQThCTTtRQUNSLGlCQUFNOztRQXJFbUIsbUVBQWtEO1FBR3RFLGVBQW9DO1FBQXBDLDZEQUFvQztRQXNDcEMsZUFBb0M7UUFBcEMsNkRBQW9DOzt1RkR4QjVCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7c0NBRVUsTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUtJLGNBQWM7a0JBQXZCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge1xuICBUYWJsZUNvbmZpZyxcbiAgQWN0aW9uRXZlbnQsXG4gIEFjdGlvbkxpc3RWYWx1ZSxcbiAgQWN0aW9uQnV0dG9uVmFsdWUsXG4gIEFjdGlvbkljb25WYWx1ZSxcbiAgTWVudVZhbHVlLFxuICBTdGF0dXNWYWx1ZSxcbiAgUHJvcGVydHlWYWx1ZSxcbiAgVEFCTEVfVEhFTUUsXG59IGZyb20gJy4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcmVzb3VyY2UtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzb3VyY2UtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNvdXJjZS10YWJsZS5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZmlnOiBUYWJsZUNvbmZpZztcbiAgQElucHV0KCkgZGF0YTogYW55W107XG4gIEBJbnB1dCgpIHRyYWNrQnlGbjogKGluZGV4OiBudW1iZXIsIHI6IGFueSkgPT4gc3RyaW5nO1xuXG4gIC8vIFdoZW5ldmVyIGEgYnV0dG9uIGluIGEgcm93IGlzIHByZXNzZWQgdGhlIGNvbXBvbmVudCB3aWxsIGVtaXQgYW4gZXZlbnRcbiAgLy8gd2l0aCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhlIGJ1dHRvbiB0aGF0IHdhcyBwcmVzc2VkIGFzIHdlbGwgYXMgdGhlXG4gIC8vIHJvdydzIG9iamVjdC5cbiAgQE91dHB1dCgpIGFjdGlvbnNFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcjxBY3Rpb25FdmVudD4oKTtcblxuICBUQUJMRV9USEVNRSA9IFRBQkxFX1RIRU1FO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgcHVibGljIGFjdGlvblRyaWdnZXJlZChlOiBBY3Rpb25FdmVudCkge1xuICAgIC8vIEZvcndhcmQgdGhlIGVtaXR0ZWQgQWN0aW9uRXZlbnRcbiAgICB0aGlzLmFjdGlvbnNFbWl0dGVyLmVtaXQoZSk7XG4gIH1cblxuICBwdWJsaWMgbmV3QnV0dG9uVHJpZ2dlcmVkKCkge1xuICAgIGNvbnN0IGV2ID0gbmV3IEFjdGlvbkV2ZW50KCduZXdSZXNvdXJjZUJ1dHRvbicsIHt9KTtcbiAgICB0aGlzLmFjdGlvbnNFbWl0dGVyLmVtaXQoZXYpO1xuICB9XG5cbiAgcHVibGljIGxpbmtDbGlja2VkKGZpZWxkOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGV2ID0gbmV3IEFjdGlvbkV2ZW50KGAke2ZpZWxkfTpsaW5rYCwgZGF0YSk7XG4gICAgdGhpcy5hY3Rpb25zRW1pdHRlci5lbWl0KGV2KTtcbiAgfVxuXG4gIGdldCBtaW5UYWJsZVdpZHRoKCkge1xuICAgIC8vIFJldmlldzogVGhpcyB3aWxsIGJyZWFrIGlmIHRoZSBjb25maWcgaXMgYW4gb3RoZXIgZmFsc3kgdmFsdWVcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0dsb3NzYXJ5L0ZhbHN5XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiAnNjAwcHgnO1xuICAgIH1cblxuICAgIHJldHVybiBgJHt0aGlzLmNvbmZpZy5jb2x1bW5zLmxlbmd0aCAqIDEwMH1weGA7XG4gIH1cblxuICBnZXQgdG90YWxXaWR0aCgpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnIHx8ICF0aGlzLmNvbmZpZy53aWR0aCkge1xuICAgICAgcmV0dXJuICdmaXQtY29udGVudCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLndpZHRoO1xuICB9XG5cbiAgZ2V0IHRhYmxlVGhlbWUoKTogVEFCTEVfVEhFTUUge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLnRoZW1lKSB7XG4gICAgICByZXR1cm4gVEFCTEVfVEhFTUUuQ0FSRDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb25maWcudGhlbWU7XG4gIH1cbn1cbiIsIjwhLS1UT0RPKGtpbXduYXNwdGQpOiB3ZSBzaG91bGRuJ3QgYWRkIGFueSBwYWRkaW5nIGluIHRoZSB0b3AgYXQgYWxsIGluIGhlcmUtLT5cbjwhLS1pZiBhIHBhZ2Ugd291bGQgbGlrZSB0byBhZGQgc29tZSBwYWRkaW5nIHRoZW4gaXQgc2hvdWxkIGJlIGl0cyBvd24tLT5cbjwhLS1yZXNwb25zaWJpbGl0eS4tLT5cbjxkaXYgY2xhc3M9XCJjZW50ZXItZmxleFwiIFtjbGFzcy5zcGFjZS10b3BdPVwidGFibGVUaGVtZSA9PSBUQUJMRV9USEVNRS5DQVJEXCI+XG4gIDwhLS1DQVJEIHRhYmxlIHRoZW1lLS0+XG4gIDxtYXQtY2FyZFxuICAgICpuZ0lmPVwidGFibGVUaGVtZSA9PSBUQUJMRV9USEVNRS5DQVJEXCJcbiAgICBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejRcIlxuICAgIFtzdHlsZS53aWR0aF09XCJ0b3RhbFdpZHRoXCJcbiAgICBbc3R5bGUubWluLXdpZHRoXT1cIm1pblRhYmxlV2lkdGhcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImhlYWRlciBjYXJkLXRpdGxlLXBhZGRpbmdcIj5cbiAgICAgIDxkaXY+e3sgY29uZmlnPy50aXRsZSB9fTwvZGl2PlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0lmPVwiY29uZmlnPy5uZXdCdXR0b25UZXh0XCJcbiAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICBpZD1cIm5ld1Jlc291cmNlXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgY2xhc3M9XCJyaWdodFwiXG4gICAgICAgIChjbGljayk9XCJuZXdCdXR0b25UcmlnZ2VyZWQoKVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm5ldy1yZXNvdXJjZS1idXR0b25cIj5hZGQ8L21hdC1pY29uPlxuICAgICAgICB7eyBjb25maWc/Lm5ld0J1dHRvblRleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG5cbiAgICA8bWF0LWNhcmQtY29udGVudD5cbiAgICAgIDwhLS0gSXRlcmF0ZSBvbiB0aGUgY29sdW1uIGRlZmluaXRpb25zIGFuZCBjcmVhdGUgdGhlIENvbHVtbnMtLT5cbiAgICAgIDxsaWItdGFibGVcbiAgICAgICAgW2NvbmZpZ109XCJjb25maWdcIlxuICAgICAgICBbZGF0YV09XCJkYXRhXCJcbiAgICAgICAgW3RyYWNrQnlGbl09XCJ0cmFja0J5Rm5cIlxuICAgICAgICBbZW1pdHRlcl09XCJhY3Rpb25zRW1pdHRlclwiXG4gICAgICA+PC9saWItdGFibGU+XG4gICAgPC9tYXQtY2FyZC1jb250ZW50PlxuICA8L21hdC1jYXJkPlxuXG4gIDwhLS1GTEFUIHRhYmxlIHRoZW1lLS0+XG4gIDxkaXZcbiAgICBbc3R5bGUud2lkdGhdPVwidG90YWxXaWR0aFwiXG4gICAgW3N0eWxlLm1pbi13aWR0aF09XCJtaW5UYWJsZVdpZHRoXCJcbiAgICAqbmdJZj1cInRhYmxlVGhlbWUgPT0gVEFCTEVfVEhFTUUuRkxBVFwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8cD57eyBjb25maWc/LnRpdGxlIH19PC9wPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgICpuZ0lmPVwiY29uZmlnPy5uZXdCdXR0b25UZXh0XCJcbiAgICAgICAgbWF0LWJ1dHRvblxuICAgICAgICBpZD1cIm5ld1Jlc291cmNlXCJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgY2xhc3M9XCJyaWdodFwiXG4gICAgICAgIChjbGljayk9XCJuZXdCdXR0b25UcmlnZ2VyZWQoKVwiXG4gICAgICA+XG4gICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm5ldy1yZXNvdXJjZS1idXR0b25cIj5hZGQ8L21hdC1pY29uPlxuICAgICAgICB7eyBjb25maWc/Lm5ld0J1dHRvblRleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG5cbiAgICA8IS0tIEl0ZXJhdGUgb24gdGhlIGNvbHVtbiBkZWZpbml0aW9ucyBhbmQgY3JlYXRlIHRoZSBDb2x1bW5zLS0+XG4gICAgPGxpYi10YWJsZVxuICAgICAgW2NvbmZpZ109XCJjb25maWdcIlxuICAgICAgW2RhdGFdPVwiZGF0YVwiXG4gICAgICBbdHJhY2tCeUZuXT1cInRyYWNrQnlGblwiXG4gICAgICBbZW1pdHRlcl09XCJhY3Rpb25zRW1pdHRlclwiXG4gICAgPjwvbGliLXRhYmxlPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19