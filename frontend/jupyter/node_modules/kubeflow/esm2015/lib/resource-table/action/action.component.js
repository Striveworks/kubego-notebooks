import { Component, Input, EventEmitter, Output } from '@angular/core';
import { STATUS_TYPE } from '../status/types';
import { Subject } from 'rxjs';
import { ActionEvent } from '../types';
import { get as getAttributeValue } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "../../icon/icon.component";
import * as i5 from "@angular/material/progress-spinner";
function ActionComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ActionComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.emitClickedEvent(); });
    i0.ɵɵelement(1, "lib-icon", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r0.action.tooltip);
    i0.ɵɵproperty("color", ctx_r0.action.color);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r0.action.iconReady);
} }
function ActionComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ActionComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.emitClickedEvent(); });
    i0.ɵɵelement(1, "lib-icon", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r1.action.tooltip);
    i0.ɵɵproperty("color", ctx_r1.action.color);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r1.action.iconInit);
} }
function ActionComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 5);
} }
function ActionComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵelement(1, "lib-icon", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r3.action.iconInit);
} }
export class ActionComponent {
    constructor() {
        // READY: Button will be enabled
        // WAITING: Button will be a Spinner
        // TERMINATING/UNAVAILABLE: Button will be disabled
        this.innerData = {};
        this.clicked = false;
        this.cancelWaitingPhase$ = new Subject();
        this.emitter = new EventEmitter();
    }
    ngOnInit() { }
    // Event emitting functions
    emitClickedEvent() {
        const ev = new ActionEvent(this.action.name, this.data);
        this.emitter.emit(ev);
    }
    // Helpers for handling the Tooltips
    get tooltipInit() {
        if (this.action.tooltip && this.action.tooltip.length > 0) {
            return this.action.tooltip;
        }
        return this.action.tooltipInit;
    }
    get tooltipReady() {
        if (this.action.tooltip && this.action.tooltip.length > 0) {
            return this.action.tooltip;
        }
        return this.action.tooltipReady;
    }
    // Icon handling functions
    getIcon(icon) {
        if (icon.split(':').length !== 2) {
            return '';
        }
        if (this.getCategory(icon) === 'fa') {
            const inpt = icon.split(':');
            return inpt.slice(1, inpt.length);
        }
        return icon.split(':')[1];
    }
    getCategory(icon) {
        if (icon.split(':').length !== 2) {
            return '';
        }
        return icon.split(':')[0];
    }
    // Helpers for checking the Action's State
    isPhaseReady() {
        return this.status === STATUS_TYPE.READY;
    }
    isPhaseInit() {
        return this.status === STATUS_TYPE.UNINITIALIZED;
    }
    isPhaseWaiting() {
        return this.status === STATUS_TYPE.WAITING;
    }
    isPhaseDisabled() {
        return (this.status === STATUS_TYPE.TERMINATING ||
            this.status === STATUS_TYPE.UNAVAILABLE);
    }
    get status() {
        const phaseField = this.action.field;
        if (!phaseField) {
            return STATUS_TYPE.READY;
        }
        const status = getAttributeValue(this.data, phaseField);
        return status;
    }
}
ActionComponent.ɵfac = function ActionComponent_Factory(t) { return new (t || ActionComponent)(); };
ActionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionComponent, selectors: [["lib-action"]], inputs: { action: "action", data: "data" }, outputs: { emitter: "emitter" }, decls: 4, vars: 4, consts: [["mat-icon-button", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "color", "click", 4, "ngIf"], ["diameter", "20", 4, "ngIf"], ["mat-icon-button", "", "disabled", "", 4, "ngIf"], ["mat-icon-button", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "color", "click"], [3, "icon"], ["diameter", "20"], ["mat-icon-button", "", "disabled", ""]], template: function ActionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ActionComponent_button_0_Template, 2, 3, "button", 0);
        i0.ɵɵtemplate(1, ActionComponent_button_1_Template, 2, 3, "button", 0);
        i0.ɵɵtemplate(2, ActionComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 1);
        i0.ɵɵtemplate(3, ActionComponent_button_3_Template, 2, 1, "button", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isPhaseReady());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPhaseInit());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPhaseWaiting());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPhaseDisabled());
    } }, directives: [i1.NgIf, i2.MatButton, i3.MatTooltip, i4.IconComponent, i5.MatSpinner], styles: ["mat-spinner[_ngcontent-%COMP%]{margin:auto}.folder-search-button[_ngcontent-%COMP%]{position:relative}.material-icons.search[_ngcontent-%COMP%]{position:absolute;color:#fff;left:13px;top:11px;font-size:14px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionComponent, [{
        type: Component,
        args: [{
                selector: 'lib-action',
                templateUrl: './action.component.html',
                styleUrls: ['./action.component.scss'],
            }]
    }], function () { return []; }, { action: [{
            type: Input
        }], data: [{
            type: Input
        }], emitter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvcmVzb3VyY2UtdGFibGUvYWN0aW9uL2FjdGlvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3Jlc291cmNlLXRhYmxlL2FjdGlvbi9hY3Rpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQW1CLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsR0FBRyxJQUFJLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDOzs7Ozs7Ozs7SUNIbEQsaUNBT0M7SUFEQyw0TEFBNEI7SUFFNUIsOEJBQStDO0lBQ2pELGlCQUFTOzs7SUFOUCw2REFBaUM7SUFFakMsMkNBQXNCO0lBR1osZUFBeUI7SUFBekIsOENBQXlCOzs7O0lBSXJDLGlDQU9DO0lBREMsNExBQTRCO0lBRTVCLDhCQUE4QztJQUNoRCxpQkFBUzs7O0lBTlAsNkRBQWlDO0lBRWpDLDJDQUFzQjtJQUdaLGVBQXdCO0lBQXhCLDZDQUF3Qjs7O0lBR3BDLGlDQUFrRTs7O0lBRWxFLGlDQUEyRDtJQUN6RCw4QkFBOEM7SUFDaEQsaUJBQVM7OztJQURHLGVBQXdCO0lBQXhCLDZDQUF3Qjs7QURoQnBDLE1BQU0sT0FBTyxlQUFlO0lBa0IxQjtRQWpCQSxnQ0FBZ0M7UUFDaEMsb0NBQW9DO1FBQ3BDLG1EQUFtRDtRQUUzQyxjQUFTLEdBQVEsRUFB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QWlCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4RCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs4RUFoR1UsZUFBZTtrRUFBZixlQUFlO1FDVjVCLHNFQVNTO1FBR1Qsc0VBU1M7UUFFVCxnRkFBa0U7UUFFbEUsc0VBRVM7O1FBMUJOLHlDQUFvQjtRQVlwQixlQUFtQjtRQUFuQix3Q0FBbUI7UUFVUixlQUFzQjtRQUF0QiwyQ0FBc0I7UUFFM0IsZUFBdUI7UUFBdkIsNENBQXVCOzt1RkRmbkIsZUFBZTtjQUwzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDO3NDQVdDLE1BQU07a0JBREwsS0FBSztZQUlOLElBQUk7a0JBREgsS0FBSztZQUlOLE9BQU87a0JBRE4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUQVRVU19UWVBFIH0gZnJvbSAnLi4vc3RhdHVzL3R5cGVzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbkljb25WYWx1ZSwgQWN0aW9uRXZlbnQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXQgYXMgZ2V0QXR0cmlidXRlVmFsdWUgfSBmcm9tICdsb2Rhc2gnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBSRUFEWTogQnV0dG9uIHdpbGwgYmUgZW5hYmxlZFxuICAvLyBXQUlUSU5HOiBCdXR0b24gd2lsbCBiZSBhIFNwaW5uZXJcbiAgLy8gVEVSTUlOQVRJTkcvVU5BVkFJTEFCTEU6IEJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkXG5cbiAgcHJpdmF0ZSBpbm5lckRhdGE6IGFueSA9IHt9O1xuICBwcml2YXRlIGNsaWNrZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjYW5jZWxXYWl0aW5nUGhhc2UkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBhY3Rpb246IEFjdGlvbkljb25WYWx1ZTtcblxuICBASW5wdXQoKVxuICBkYXRhOiBhbnk7XG5cbiAgQE91dHB1dCgpXG4gIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEFjdGlvbkV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgLy8gRXZlbnQgZW1pdHRpbmcgZnVuY3Rpb25zXG4gIHB1YmxpYyBlbWl0Q2xpY2tlZEV2ZW50KCkge1xuICAgIGNvbnN0IGV2ID0gbmV3IEFjdGlvbkV2ZW50KHRoaXMuYWN0aW9uLm5hbWUsIHRoaXMuZGF0YSk7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoZXYpO1xuICB9XG5cbiAgLy8gSGVscGVycyBmb3IgaGFuZGxpbmcgdGhlIFRvb2x0aXBzXG4gIGdldCB0b29sdGlwSW5pdCgpIHtcbiAgICBpZiAodGhpcy5hY3Rpb24udG9vbHRpcCAmJiB0aGlzLmFjdGlvbi50b29sdGlwLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGlvbi50b29sdGlwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFjdGlvbi50b29sdGlwSW5pdDtcbiAgfVxuXG4gIGdldCB0b29sdGlwUmVhZHkoKSB7XG4gICAgaWYgKHRoaXMuYWN0aW9uLnRvb2x0aXAgJiYgdGhpcy5hY3Rpb24udG9vbHRpcC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3Rpb24udG9vbHRpcDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5hY3Rpb24udG9vbHRpcFJlYWR5O1xuICB9XG5cbiAgLy8gSWNvbiBoYW5kbGluZyBmdW5jdGlvbnNcbiAgcHVibGljIGdldEljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgaWYgKGljb24uc3BsaXQoJzonKS5sZW5ndGggIT09IDIpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRDYXRlZ29yeShpY29uKSA9PT0gJ2ZhJykge1xuICAgICAgY29uc3QgaW5wdCA9IGljb24uc3BsaXQoJzonKTtcbiAgICAgIHJldHVybiBpbnB0LnNsaWNlKDEsIGlucHQubGVuZ3RoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvbi5zcGxpdCgnOicpWzFdO1xuICB9XG5cbiAgcHVibGljIGdldENhdGVnb3J5KGljb24pIHtcbiAgICBpZiAoaWNvbi5zcGxpdCgnOicpLmxlbmd0aCAhPT0gMikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBpY29uLnNwbGl0KCc6JylbMF07XG4gIH1cblxuICAvLyBIZWxwZXJzIGZvciBjaGVja2luZyB0aGUgQWN0aW9uJ3MgU3RhdGVcbiAgcHVibGljIGlzUGhhc2VSZWFkeSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IFNUQVRVU19UWVBFLlJFQURZO1xuICB9XG5cbiAgcHVibGljIGlzUGhhc2VJbml0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXR1cyA9PT0gU1RBVFVTX1RZUEUuVU5JTklUSUFMSVpFRDtcbiAgfVxuXG4gIHB1YmxpYyBpc1BoYXNlV2FpdGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXMgPT09IFNUQVRVU19UWVBFLldBSVRJTkc7XG4gIH1cblxuICBwdWJsaWMgaXNQaGFzZURpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXR1cyA9PT0gU1RBVFVTX1RZUEUuVEVSTUlOQVRJTkcgfHxcbiAgICAgIHRoaXMuc3RhdHVzID09PSBTVEFUVVNfVFlQRS5VTkFWQUlMQUJMRVxuICAgICk7XG4gIH1cblxuICBnZXQgc3RhdHVzKCk6IFNUQVRVU19UWVBFIHtcbiAgICBjb25zdCBwaGFzZUZpZWxkID0gdGhpcy5hY3Rpb24uZmllbGQ7XG5cbiAgICBpZiAoIXBoYXNlRmllbGQpIHtcbiAgICAgIHJldHVybiBTVEFUVVNfVFlQRS5SRUFEWTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0dXMgPSBnZXRBdHRyaWJ1dGVWYWx1ZSh0aGlzLmRhdGEsIHBoYXNlRmllbGQpO1xuICAgIHJldHVybiBzdGF0dXM7XG4gIH1cbn1cbiIsIjwhLS1SZWFkeSBQaGFzZS0tPlxuPGJ1dHRvblxuICAqbmdJZj1cImlzUGhhc2VSZWFkeSgpXCJcbiAgbWF0LWljb24tYnV0dG9uXG4gIG1hdFRvb2x0aXA9XCJ7eyBhY3Rpb24udG9vbHRpcCB9fVwiXG4gIG1hdFRvb2x0aXBDbGFzcz1cImN1c3RvbS10b29sdGlwXCJcbiAgW2NvbG9yXT1cImFjdGlvbi5jb2xvclwiXG4gIChjbGljayk9XCJlbWl0Q2xpY2tlZEV2ZW50KClcIlxuPlxuICA8bGliLWljb24gW2ljb25dPVwiYWN0aW9uLmljb25SZWFkeVwiPjwvbGliLWljb24+XG48L2J1dHRvbj5cblxuPCEtLUluaXQgUGhhc2UtLT5cbjxidXR0b25cbiAgKm5nSWY9XCJpc1BoYXNlSW5pdCgpXCJcbiAgbWF0LWljb24tYnV0dG9uXG4gIG1hdFRvb2x0aXA9XCJ7eyBhY3Rpb24udG9vbHRpcCB9fVwiXG4gIG1hdFRvb2x0aXBDbGFzcz1cImN1c3RvbS10b29sdGlwXCJcbiAgW2NvbG9yXT1cImFjdGlvbi5jb2xvclwiXG4gIChjbGljayk9XCJlbWl0Q2xpY2tlZEV2ZW50KClcIlxuPlxuICA8bGliLWljb24gW2ljb25dPVwiYWN0aW9uLmljb25Jbml0XCI+PC9saWItaWNvbj5cbjwvYnV0dG9uPlxuXG48bWF0LXNwaW5uZXIgKm5nSWY9XCJpc1BoYXNlV2FpdGluZygpXCIgZGlhbWV0ZXI9XCIyMFwiPjwvbWF0LXNwaW5uZXI+XG5cbjxidXR0b24gKm5nSWY9XCJpc1BoYXNlRGlzYWJsZWQoKVwiIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD5cbiAgPGxpYi1pY29uIFtpY29uXT1cImFjdGlvbi5pY29uSW5pdFwiPjwvbGliLWljb24+XG48L2J1dHRvbj5cbiJdfQ==