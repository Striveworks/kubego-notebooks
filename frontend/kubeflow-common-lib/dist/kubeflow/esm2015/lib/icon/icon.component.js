import { Component, Input, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@fortawesome/angular-fontawesome";
function IconComponent_mat_icon_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getIcon(), "\n");
} }
function IconComponent_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 2);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r1.getIcon());
} }
function IconComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "i", 7);
    i0.ɵɵtext(2, "folder");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 8);
    i0.ɵɵtext(4, "search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function IconComponent_ng_container_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 9);
    i0.ɵɵtext(1, " memory ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("inline", true);
} }
const _c0 = function () { return ["fas", "stop-circle"]; };
function IconComponent_ng_container_2_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 10);
} if (rf & 2) {
    i0.ɵɵproperty("icon", i0.ɵɵpureFunction0(1, _c0));
} }
function IconComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, IconComponent_ng_container_2_div_1_Template, 5, 0, "div", 3);
    i0.ɵɵtemplate(2, IconComponent_ng_container_2_mat_icon_2_Template, 2, 1, "mat-icon", 4);
    i0.ɵɵtemplate(3, IconComponent_ng_container_2_fa_icon_3_Template, 1, 2, "fa-icon", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.getIcon() === "folderSearch");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.getIcon() === "gpuSectionIcon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.getIcon() === "stoppedResource");
} }
export class IconComponent {
    constructor() {
        this.icon = '';
        this.libIcon = true;
    }
    get iconSplit() {
        return this.icon.split(':');
    }
    ngOnInit() { }
    getIcon() {
        if (this.iconSplit.length === 0) {
            console.error(`Invalid icon '${this.icon}'`);
            return '';
        }
        if (this.getCategory() === 'fa') {
            const inpt = this.iconSplit;
            return inpt.slice(1, inpt.length);
        }
        return this.iconSplit[1];
    }
    getCategory() {
        if (this.iconSplit.length === 0) {
            console.error(`Invalid icon '${this.icon}'`);
            return '';
        }
        return this.iconSplit[0];
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: IconComponent, selectors: [["lib-icon"]], hostVars: 2, hostBindings: function IconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-icon", ctx.libIcon);
    } }, inputs: { icon: "icon" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "icon", 4, "ngIf"], [3, "icon"], ["class", "folderSearch", 4, "ngIf"], ["class", "gpu", 3, "inline", 4, "ngIf"], ["class", "stoppedResource", 3, "icon", 4, "ngIf"], [1, "folderSearch"], [1, "material-icons", "folder"], [1, "material-icons", "search"], [1, "gpu", 3, "inline"], [1, "stoppedResource", 3, "icon"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, IconComponent_mat_icon_0_Template, 2, 1, "mat-icon", 0);
        i0.ɵɵtemplate(1, IconComponent_fa_icon_1_Template, 1, 1, "fa-icon", 1);
        i0.ɵɵtemplate(2, IconComponent_ng_container_2_Template, 4, 3, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.getCategory() === "material");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.getCategory() === "fa");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.getCategory() === "custom");
    } }, directives: [i1.NgIf, i2.MatIcon, i3.FaIconComponent], styles: ["mat-icon[_ngcontent-%COMP%]:not(.gpu){display:flex;margin:auto}.folderSearch[_ngcontent-%COMP%]{position:relative}.material-icons.folder[_ngcontent-%COMP%]{vertical-align:middle}.material-icons.search[_ngcontent-%COMP%]{position:absolute;color:#fff;left:13px;top:11px;font-size:14px}mat-icon.gpu[_ngcontent-%COMP%]{vertical-align:middle;font-size:28px;margin-left:-2px;margin-right:-.2rem}.stoppedResource[_ngcontent-%COMP%]{font-size:22px;color:grey}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconComponent, [{
        type: Component,
        args: [{
                selector: 'lib-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.scss'],
            }]
    }], function () { return []; }, { icon: [{
            type: Input
        }], libIcon: [{
            type: HostBinding,
            args: ['class.lib-icon']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2ljb24vaWNvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2ljb24vaWNvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0N0RSxnQ0FBK0M7SUFDN0MsWUFDRjtJQUFBLGlCQUFXOzs7SUFEVCxlQUNGO0lBREUsa0RBQ0Y7OztJQUdBLDZCQUFxRTs7O0lBQTdCLHVDQUFrQjs7O0lBS3hELDhCQUErRDtJQUM3RCw0QkFBaUM7SUFBQSxzQkFBTTtJQUFBLGlCQUFJO0lBQzNDLDRCQUFpQztJQUFBLHNCQUFNO0lBQUEsaUJBQUk7SUFDN0MsaUJBQU07OztJQUdOLG1DQUE2RTtJQUMzRSx3QkFDRjtJQUFBLGlCQUFXOztJQUZzQyw2QkFBZTs7OztJQUtoRSw4QkFJVzs7SUFEVCxpREFBK0I7OztJQWhCbkMsNkJBQWlEO0lBRS9DLDZFQUdNO0lBR04sdUZBRVc7SUFHWCxxRkFJVztJQUNiLDBCQUFlOzs7SUFoQmMsZUFBa0M7SUFBbEMsMERBQWtDO0lBTWxELGVBQW9DO0lBQXBDLDREQUFvQztJQU01QyxlQUFxQztJQUFyQyw2REFBcUM7O0FEaEIxQyxNQUFNLE9BQU8sYUFBYTtJQVV4QjtRQVRTLFNBQUksR0FBRyxFQUFFLENBQUM7UUFHbkIsWUFBTyxHQUFHLElBQUksQ0FBQztJQU1BLENBQUM7SUFKaEIsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBSUQsUUFBUSxLQUFJLENBQUM7SUFFTixPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDN0MsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksRUFBRTtZQUMvQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxXQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7MEVBbkNVLGFBQWE7Z0VBQWIsYUFBYTs7O1FDTjFCLHdFQUVXO1FBR1gsc0VBQXFFO1FBR3JFLGdGQWtCZTs7UUExQkosdURBQWtDO1FBS25DLGVBQTRCO1FBQTVCLGlEQUE0QjtRQUd2QixlQUFnQztRQUFoQyxxREFBZ0M7O3VGREZsQyxhQUFhO2NBTHpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDckM7c0NBRVUsSUFBSTtrQkFBWixLQUFLO1lBR04sT0FBTztrQkFETixXQUFXO21CQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ljb24uY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGljb24gPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmxpYi1pY29uJylcbiAgbGliSWNvbiA9IHRydWU7XG5cbiAgZ2V0IGljb25TcGxpdCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbi5zcGxpdCgnOicpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBwdWJsaWMgZ2V0SWNvbigpIHtcbiAgICBpZiAodGhpcy5pY29uU3BsaXQubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGljb24gJyR7dGhpcy5pY29ufSdgKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRDYXRlZ29yeSgpID09PSAnZmEnKSB7XG4gICAgICBjb25zdCBpbnB0ID0gdGhpcy5pY29uU3BsaXQ7XG4gICAgICByZXR1cm4gaW5wdC5zbGljZSgxLCBpbnB0Lmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaWNvblNwbGl0WzFdO1xuICB9XG5cbiAgcHVibGljIGdldENhdGVnb3J5KCkge1xuICAgIGlmICh0aGlzLmljb25TcGxpdC5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaWNvbiAnJHt0aGlzLmljb259J2ApO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmljb25TcGxpdFswXTtcbiAgfVxufVxuIiwiPCEtLU1hdGVyaWFsIEljb24tLT5cbjxtYXQtaWNvbiAqbmdJZj1cImdldENhdGVnb3J5KCkgPT09ICdtYXRlcmlhbCdcIj5cbiAge3sgZ2V0SWNvbigpIH19XG48L21hdC1pY29uPlxuXG48IS0tRm9udCBBd2Vzb21lIEljb24tLT5cbjxmYS1pY29uICpuZ0lmPVwiZ2V0Q2F0ZWdvcnkoKSA9PT0gJ2ZhJ1wiIFtpY29uXT1cImdldEljb24oKVwiPjwvZmEtaWNvbj5cblxuPCEtLUN1c3RvbSBpY29ucy0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImdldENhdGVnb3J5KCkgPT09ICdjdXN0b20nXCI+XG4gIDwhLS1Gb2xkZXIgd2l0aCBzZWFyY2ggYmFyIG9uIHRvcC0tPlxuICA8ZGl2IGNsYXNzPVwiZm9sZGVyU2VhcmNoXCIgKm5nSWY9XCJnZXRJY29uKCkgPT09ICdmb2xkZXJTZWFyY2gnXCI+XG4gICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBmb2xkZXJcIj5mb2xkZXI8L2k+XG4gICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBzZWFyY2hcIj5zZWFyY2g8L2k+XG4gIDwvZGl2PlxuXG4gIDwhLS1HUFUgaW4gc2VjdGlvbi0tPlxuICA8bWF0LWljb24gKm5nSWY9XCJnZXRJY29uKCkgPT09ICdncHVTZWN0aW9uSWNvbidcIiBbaW5saW5lXT1cInRydWVcIiBjbGFzcz1cImdwdVwiPlxuICAgIG1lbW9yeVxuICA8L21hdC1pY29uPlxuXG4gIDwhLS1TdG9wcGVkIFJlc291cmNlLS0+XG4gIDxmYS1pY29uXG4gICAgKm5nSWY9XCJnZXRJY29uKCkgPT09ICdzdG9wcGVkUmVzb3VyY2UnXCJcbiAgICBjbGFzcz1cInN0b3BwZWRSZXNvdXJjZVwiXG4gICAgW2ljb25dPVwiWydmYXMnLCAnc3RvcC1jaXJjbGUnXVwiXG4gID48L2ZhLWljb24+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==