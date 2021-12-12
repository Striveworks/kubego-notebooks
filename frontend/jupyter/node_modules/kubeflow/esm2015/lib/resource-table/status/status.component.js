import { Component, Input } from '@angular/core';
import { STATUS_TYPE } from './types';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/progress-spinner";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "../../icon/icon.component";
import * as i5 from "@angular/material/icon";
function StatusComponent_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r0.config == null ? null : ctx_r0.config.getTooltip(ctx_r0.row));
} }
function StatusComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r1.config == null ? null : ctx_r1.config.getTooltip(ctx_r1.row));
} }
function StatusComponent_lib_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-icon", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r2.config == null ? null : ctx_r2.config.getTooltip(ctx_r2.row));
} }
function StatusComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r3.config == null ? null : ctx_r3.config.getTooltip(ctx_r3.row));
    i0.ɵɵproperty("ngClass", ctx_r3.config == null ? null : ctx_r3.config.getCssClasses(ctx_r3.row));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.config == null ? null : ctx_r3.config.getIcon(ctx_r3.row), " ");
} }
export class StatusComponent {
    constructor() {
        this.STATUS_TYPE = STATUS_TYPE;
    }
    ngOnInit() { }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
StatusComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusComponent, selectors: [["lib-status"]], inputs: { row: "row", config: "config" }, decls: 5, vars: 4, consts: [[3, "ngSwitch"], ["diameter", "24", "matTooltipClass", "custom-tooltip", 3, "matTooltip", 4, "ngSwitchCase"], ["icon", "custom:stoppedResource", 3, "matTooltip", 4, "ngSwitchCase"], ["matTooltipClass", "custom-tooltip", 3, "ngClass", "matTooltip", 4, "ngSwitchDefault"], ["diameter", "24", "matTooltipClass", "custom-tooltip", 3, "matTooltip"], ["icon", "custom:stoppedResource", 3, "matTooltip"], ["matTooltipClass", "custom-tooltip", 3, "ngClass", "matTooltip"]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, StatusComponent_mat_spinner_1_Template, 1, 1, "mat-spinner", 1);
        i0.ɵɵtemplate(2, StatusComponent_mat_spinner_2_Template, 1, 1, "mat-spinner", 1);
        i0.ɵɵtemplate(3, StatusComponent_lib_icon_3_Template, 1, 1, "lib-icon", 2);
        i0.ɵɵtemplate(4, StatusComponent_mat_icon_4_Template, 2, 3, "mat-icon", 3);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.config == null ? null : ctx.config.getPhase(ctx.row));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.STATUS_TYPE.WAITING);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.STATUS_TYPE.TERMINATING);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.STATUS_TYPE.STOPPED);
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.MatSpinner, i3.MatTooltip, i4.IconComponent, i5.MatIcon, i1.NgClass], styles: [".status[_ngcontent-%COMP%]{display:flex;vertical-align:middle}.ready[_ngcontent-%COMP%]{color:green}.unavailable[_ngcontent-%COMP%]{color:grey}.warning[_ngcontent-%COMP%]{color:orange}.error[_ngcontent-%COMP%]{color:red}.stop[_ngcontent-%COMP%]{color:grey}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusComponent, [{
        type: Component,
        args: [{
                selector: 'lib-status',
                templateUrl: './status.component.html',
                styleUrls: ['./status.component.scss'],
            }]
    }], function () { return []; }, { row: [{
            type: Input
        }], config: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvcmVzb3VyY2UtdGFibGUvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3Jlc291cmNlLXRhYmxlL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFVLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7SUNDNUMsaUNBS2U7OztJQUZiLDJHQUEwQzs7O0lBSTVDLGlDQUtlOzs7SUFGYiwyR0FBMEM7OztJQUk1Qyw4QkFJWTs7O0lBRlYsMkdBQTBDOzs7SUFJNUMsbUNBS0M7SUFDQyxZQUNGO0lBQUEsaUJBQVc7OztJQUpULDJHQUEwQztJQUQxQyxnR0FBc0M7SUFJdEMsZUFDRjtJQURFLGlHQUNGOztBRHBCRixNQUFNLE9BQU8sZUFBZTtJQU0xQjtRQUZBLGdCQUFXLEdBQUcsV0FBVyxDQUFDO0lBRVgsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQzs7OEVBUkYsZUFBZTtrRUFBZixlQUFlO1FDVDVCLGdDQUFpRDtRQUUvQyxnRkFLZTtRQUVmLGdGQUtlO1FBRWYsMEVBSVk7UUFFWiwwRUFPVztRQUNiLDBCQUFlOztRQTlCRCxtRkFBa0M7UUFHM0MsZUFBaUM7UUFBakMsc0RBQWlDO1FBT2pDLGVBQXFDO1FBQXJDLDBEQUFxQztRQU9yQyxlQUFpQztRQUFqQyxzREFBaUM7O3VGRFJ6QixlQUFlO2NBTDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7c0NBRVUsR0FBRztrQkFBWCxLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGF0dXMsIFNUQVRVU19UWVBFIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTdGF0dXNWYWx1ZSB9IGZyb20gJy4uL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXN0YXR1cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdGF0dXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGF0dXMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcm93OiBhbnk7XG4gIEBJbnB1dCgpIGNvbmZpZzogU3RhdHVzVmFsdWU7XG5cbiAgU1RBVFVTX1RZUEUgPSBTVEFUVVNfVFlQRTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29uZmlnPy5nZXRQaGFzZShyb3cpXCI+XG4gIDwhLS0gTG9hZGluZyAtLT5cbiAgPG1hdC1zcGlubmVyXG4gICAgKm5nU3dpdGNoQ2FzZT1cIlNUQVRVU19UWVBFLldBSVRJTkdcIlxuICAgIGRpYW1ldGVyPVwiMjRcIlxuICAgIG1hdFRvb2x0aXA9XCJ7eyBjb25maWc/LmdldFRvb2x0aXAocm93KSB9fVwiXG4gICAgbWF0VG9vbHRpcENsYXNzPVwiY3VzdG9tLXRvb2x0aXBcIlxuICA+PC9tYXQtc3Bpbm5lcj5cblxuICA8bWF0LXNwaW5uZXJcbiAgICAqbmdTd2l0Y2hDYXNlPVwiU1RBVFVTX1RZUEUuVEVSTUlOQVRJTkdcIlxuICAgIGRpYW1ldGVyPVwiMjRcIlxuICAgIG1hdFRvb2x0aXA9XCJ7eyBjb25maWc/LmdldFRvb2x0aXAocm93KSB9fVwiXG4gICAgbWF0VG9vbHRpcENsYXNzPVwiY3VzdG9tLXRvb2x0aXBcIlxuICA+PC9tYXQtc3Bpbm5lcj5cblxuICA8bGliLWljb25cbiAgICAqbmdTd2l0Y2hDYXNlPVwiU1RBVFVTX1RZUEUuU1RPUFBFRFwiXG4gICAgbWF0VG9vbHRpcD1cInt7IGNvbmZpZz8uZ2V0VG9vbHRpcChyb3cpIH19XCJcbiAgICBpY29uPVwiY3VzdG9tOnN0b3BwZWRSZXNvdXJjZVwiXG4gID48L2xpYi1pY29uPlxuXG4gIDxtYXQtaWNvblxuICAgICpuZ1N3aXRjaERlZmF1bHRcbiAgICBbbmdDbGFzc109XCJjb25maWc/LmdldENzc0NsYXNzZXMocm93KVwiXG4gICAgbWF0VG9vbHRpcD1cInt7IGNvbmZpZz8uZ2V0VG9vbHRpcChyb3cpIH19XCJcbiAgICBtYXRUb29sdGlwQ2xhc3M9XCJjdXN0b20tdG9vbHRpcFwiXG4gID5cbiAgICB7eyBjb25maWc/LmdldEljb24ocm93KSB9fVxuICA8L21hdC1pY29uPlxuPC9uZy1jb250YWluZXI+XG4iXX0=