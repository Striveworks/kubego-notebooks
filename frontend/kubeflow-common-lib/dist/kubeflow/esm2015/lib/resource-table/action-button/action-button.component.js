import { Component, EventEmitter, Output, Input } from '@angular/core';
import { STATUS_TYPE } from '../status/types';
import { ActionEvent } from '../types';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
export class ActionButtonComponent {
    constructor() {
        this.emitter = new EventEmitter();
    }
    ngOnInit() { }
    // Event emitting functions
    emitClickedEvent() {
        const ev = new ActionEvent(this.action.name, this.data);
        this.emitter.emit(ev);
    }
    // Helpers for checking the Action's State
    isPhaseReady() {
        const phaseField = this.action.field;
        const status = this.data[phaseField];
        return status === STATUS_TYPE.READY;
    }
}
ActionButtonComponent.ɵfac = function ActionButtonComponent_Factory(t) { return new (t || ActionButtonComponent)(); };
ActionButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionButtonComponent, selectors: [["lib-action-button"]], inputs: { action: "action", data: "data" }, outputs: { emitter: "emitter" }, decls: 2, vars: 4, consts: [["mat-button", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "color", "disabled", "click"]], template: function ActionButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ActionButtonComponent_Template_button_click_0_listener() { return ctx.emitClickedEvent(); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.action.tooltip);
        i0.ɵɵproperty("color", ctx.action.color)("disabled", !ctx.isPhaseReady());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.action.text, "\n");
    } }, directives: [i1.MatButton, i2.MatTooltip], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionButtonComponent, [{
        type: Component,
        args: [{
                selector: 'lib-action-button',
                templateUrl: './action-button.component.html',
                styleUrls: ['./action-button.component.scss'],
            }]
    }], function () { return []; }, { action: [{
            type: Input
        }], data: [{
            type: Input
        }], emitter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3Jlc291cmNlLXRhYmxlL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3Jlc291cmNlLXRhYmxlL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQXFCLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQU8xRCxNQUFNLE9BQU8scUJBQXFCO0lBVWhDO1FBRkEsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7SUFFM0IsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQztJQUViLDJCQUEyQjtJQUNwQixnQkFBZ0I7UUFDckIsTUFBTSxFQUFFLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCwwQ0FBMEM7SUFDbkMsWUFBWTtRQUNqQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNyQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXJDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQzs7MEZBMUJVLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDVGxDLGlDQU9DO1FBSEMsa0dBQVMsc0JBQWtCLElBQUM7UUFJNUIsWUFDRjtRQUFBLGlCQUFTOztRQVBQLDBEQUFpQztRQUdqQyx3Q0FBc0IsaUNBQUE7UUFHdEIsZUFDRjtRQURFLGlEQUNGOzt1RkRBYSxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDO3NDQUdDLE1BQU07a0JBREwsS0FBSztZQUlOLElBQUk7a0JBREgsS0FBSztZQUlOLE9BQU87a0JBRE4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUQVRVU19UWVBFIH0gZnJvbSAnLi4vc3RhdHVzL3R5cGVzJztcbmltcG9ydCB7IEFjdGlvbkJ1dHRvblZhbHVlLCBBY3Rpb25FdmVudCB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFjdGlvbi1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbi1idXR0b24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgYWN0aW9uOiBBY3Rpb25CdXR0b25WYWx1ZTtcblxuICBASW5wdXQoKVxuICBkYXRhOiBhbnk7XG5cbiAgQE91dHB1dCgpXG4gIGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEFjdGlvbkV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgLy8gRXZlbnQgZW1pdHRpbmcgZnVuY3Rpb25zXG4gIHB1YmxpYyBlbWl0Q2xpY2tlZEV2ZW50KCkge1xuICAgIGNvbnN0IGV2ID0gbmV3IEFjdGlvbkV2ZW50KHRoaXMuYWN0aW9uLm5hbWUsIHRoaXMuZGF0YSk7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoZXYpO1xuICB9XG5cbiAgLy8gSGVscGVycyBmb3IgY2hlY2tpbmcgdGhlIEFjdGlvbidzIFN0YXRlXG4gIHB1YmxpYyBpc1BoYXNlUmVhZHkoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcGhhc2VGaWVsZCA9IHRoaXMuYWN0aW9uLmZpZWxkO1xuICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuZGF0YVtwaGFzZUZpZWxkXTtcblxuICAgIHJldHVybiBzdGF0dXMgPT09IFNUQVRVU19UWVBFLlJFQURZO1xuICB9XG59XG4iLCI8YnV0dG9uXG4gIG1hdC1idXR0b25cbiAgbWF0VG9vbHRpcD1cInt7IGFjdGlvbi50b29sdGlwIH19XCJcbiAgbWF0VG9vbHRpcENsYXNzPVwiY3VzdG9tLXRvb2x0aXBcIlxuICAoY2xpY2spPVwiZW1pdENsaWNrZWRFdmVudCgpXCJcbiAgW2NvbG9yXT1cImFjdGlvbi5jb2xvclwiXG4gIFtkaXNhYmxlZF09XCIhaXNQaGFzZVJlYWR5KClcIlxuPlxuICB7eyBhY3Rpb24udGV4dCB9fVxuPC9idXR0b24+XG4iXX0=