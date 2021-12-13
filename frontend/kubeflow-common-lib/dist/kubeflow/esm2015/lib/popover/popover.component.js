/* This code was developed by @tasos-ale */
import { Component, HostListener, HostBinding, ViewEncapsulation, } from '@angular/core';
import { Subject } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/cdk/portal";
function PopoverComponent_ng_template_3_Template(rf, ctx) { }
export class PopoverTemplatePortal extends TemplatePortal {
    constructor(template, context, viewContainerRef) {
        super(template, viewContainerRef, context);
    }
}
export class PopoverComponent {
    constructor(vcr, changeDetectorRef) {
        this.vcr = vcr;
        this.changeDetectorRef = changeDetectorRef;
        this.classListPrv = ['lib-popover'];
        this.visibilityPrv = 'hidden';
        this.message = '';
        this.onHide = new Subject();
    }
    get classList() {
        return this.classListPrv;
    }
    set classList(list) {
        this.classListPrv = ['lib-popover', ...list];
    }
    get hostClass() {
        return this.classList.join(' ');
    }
    set template(v) {
        this.tplPortal = v;
    }
    OnMouseEnter() {
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }
    }
    OnMouseLeave() {
        this.hide(0);
    }
    show(delay) {
        if (this.hideTimeoutId) {
            window.clearTimeout(this.hideTimeoutId);
        }
        this.showTimeoutId = window.setTimeout(() => {
            this.visibilityPrv = 'visible';
            // Mark for check in case the parent has set ChangeDetectionStrategy
            // to OnPush.
            this.markForCheck();
        }, delay);
    }
    hide(delay) {
        if (this.showTimeoutId) {
            window.clearTimeout(this.showTimeoutId);
        }
        this.hideTimeoutId = window.setTimeout(() => {
            // TODO: When we start to use @angular/animations move the
            // "onHide.next()" method to animation's finished callback
            this.onHide.next();
            this.visibilityPrv = 'hidden';
            // Mark for check in case the parent has set ChangeDetectionStrategy
            // to OnPush.
            this.markForCheck();
        }, delay);
    }
    afterHidden() {
        return this.onHide.asObservable();
    }
    markForCheck() {
        this.changeDetectorRef.markForCheck();
    }
}
PopoverComponent.ɵfac = function PopoverComponent_Factory(t) { return new (t || PopoverComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PopoverComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PopoverComponent, selectors: [["lib-popover"]], hostVars: 4, hostBindings: function PopoverComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function PopoverComponent_mouseenter_HostBindingHandler() { return ctx.OnMouseEnter(); })("mouseleave", function PopoverComponent_mouseleave_HostBindingHandler() { return ctx.OnMouseLeave(); });
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.hostClass);
        i0.ɵɵstyleProp("visibility", ctx.visibilityPrv);
    } }, decls: 4, vars: 2, consts: [[1, "mat-typography"], [1, "popover-card"], [3, "cdkPortalOutlet"]], template: function PopoverComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-card", 1);
        i0.ɵɵtext(2);
        i0.ɵɵtemplate(3, PopoverComponent_ng_template_3_Template, 0, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.message, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkPortalOutlet", ctx.tplPortal);
    } }, directives: [i1.MatCard, i2.CdkPortalOutlet], styles: [".lib-popover{display:block;visibility:hidden}.lib-popover .popover-card{padding:12px}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverComponent, [{
        type: Component,
        args: [{
                selector: 'lib-popover',
                templateUrl: './popover.component.html',
                styleUrls: ['./popover.scss'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }]; }, { hostClass: [{
            type: HostBinding,
            args: ['class']
        }], visibilityPrv: [{
            type: HostBinding,
            args: ['style.visibility']
        }], OnMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], OnMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFDM0MsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBSVosV0FBVyxFQUNYLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFFckQsTUFBTSxPQUFPLHFCQUF5QixTQUFRLGNBQWlCO0lBQzdELFlBQ0UsUUFBd0IsRUFDeEIsT0FBVyxFQUNYLGdCQUFtQztRQUVuQyxLQUFLLENBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRjtBQVFELE1BQU0sT0FBTyxnQkFBZ0I7SUFnQzNCLFlBQ1UsR0FBcUIsRUFDckIsaUJBQW9DO1FBRHBDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFqQ3RDLGlCQUFZLEdBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQVdoQixrQkFBYSxHQUFHLFFBQVEsQ0FBQztRQUUxRCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBTUksV0FBTSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBZW5ELENBQUM7SUFqQ0osSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLFNBQVMsQ0FBQyxJQUFjO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBSUQsSUFBSSxRQUFRLENBQUMsQ0FBNkI7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUtELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7SUFPRCxJQUFJLENBQUMsS0FBYTtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQy9CLG9FQUFvRTtZQUNwRSxhQUFhO1lBQ2IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBYTtRQUNoQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQzFDLDBEQUEwRDtZQUMxRCwwREFBMEQ7WUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztZQUM5QixvRUFBb0U7WUFDcEUsYUFBYTtZQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDOztnRkF0RVUsZ0JBQWdCO21FQUFoQixnQkFBZ0I7dUdBQWhCLGtCQUFjLHNGQUFkLGtCQUFjOzs7OztRQzdCM0IsOEJBQTRCO1FBQzFCLG1DQUErQjtRQUM3QixZQUNBO1FBQUEsaUZBQXlEO1FBQzNELGlCQUFXO1FBQ2IsaUJBQU07O1FBSEYsZUFDQTtRQURBLDRDQUNBO1FBQWEsZUFBNkI7UUFBN0IsK0NBQTZCOzt1RkQwQmpDLGdCQUFnQjtjQU41QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUM3QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QzttR0FVSyxTQUFTO2tCQURaLFdBQVc7bUJBQUMsT0FBTztZQUlhLGFBQWE7a0JBQTdDLFdBQVc7bUJBQUMsa0JBQWtCO1lBVS9CLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZO1lBTzFCLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBjb2RlIHdhcyBkZXZlbG9wZWQgYnkgQHRhc29zLWFsZSAqL1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0TGlzdGVuZXIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmV4cG9ydCBjbGFzcyBQb3BvdmVyVGVtcGxhdGVQb3J0YWw8Qz4gZXh0ZW5kcyBUZW1wbGF0ZVBvcnRhbDxDPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxDPixcbiAgICBjb250ZXh0PzogQyxcbiAgICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZixcbiAgKSB7XG4gICAgc3VwZXIodGVtcGxhdGUsIHZpZXdDb250YWluZXJSZWYsIGNvbnRleHQpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wb3BvdmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb3BvdmVyLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbXBvbmVudCB7XG4gIHByaXZhdGUgY2xhc3NMaXN0UHJ2OiBzdHJpbmdbXSA9IFsnbGliLXBvcG92ZXInXTtcbiAgZ2V0IGNsYXNzTGlzdCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NMaXN0UHJ2O1xuICB9XG4gIHNldCBjbGFzc0xpc3QobGlzdDogc3RyaW5nW10pIHtcbiAgICB0aGlzLmNsYXNzTGlzdFBydiA9IFsnbGliLXBvcG92ZXInLCAuLi5saXN0XTtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhvc3RDbGFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5qb2luKCcgJyk7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS52aXNpYmlsaXR5JykgdmlzaWJpbGl0eVBydiA9ICdoaWRkZW4nO1xuICB0cGxQb3J0YWw6IFRlbXBsYXRlUG9ydGFsPGFueT47XG4gIG1lc3NhZ2UgPSAnJztcbiAgc2V0IHRlbXBsYXRlKHY6IFBvcG92ZXJUZW1wbGF0ZVBvcnRhbDxhbnk+KSB7XG4gICAgdGhpcy50cGxQb3J0YWwgPSB2O1xuICB9XG4gIHByaXZhdGUgaGlkZVRpbWVvdXRJZDogbnVtYmVyO1xuICBwcml2YXRlIHNob3dUaW1lb3V0SWQ6IG51bWJlcjtcbiAgcHJpdmF0ZSByZWFkb25seSBvbkhpZGU6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBPbk1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuaGlkZVRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXRJZCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBPbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5oaWRlKDApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge31cblxuICBzaG93KGRlbGF5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5oaWRlVGltZW91dElkKSB7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuaGlkZVRpbWVvdXRJZCk7XG4gICAgfVxuICAgIHRoaXMuc2hvd1RpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJpbGl0eVBydiA9ICd2aXNpYmxlJztcbiAgICAgIC8vIE1hcmsgZm9yIGNoZWNrIGluIGNhc2UgdGhlIHBhcmVudCBoYXMgc2V0IENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG4gICAgICAvLyB0byBPblB1c2guXG4gICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIGhpZGUoZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dUaW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zaG93VGltZW91dElkKTtcbiAgICB9XG4gICAgdGhpcy5oaWRlVGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gVE9ETzogV2hlbiB3ZSBzdGFydCB0byB1c2UgQGFuZ3VsYXIvYW5pbWF0aW9ucyBtb3ZlIHRoZVxuICAgICAgLy8gXCJvbkhpZGUubmV4dCgpXCIgbWV0aG9kIHRvIGFuaW1hdGlvbidzIGZpbmlzaGVkIGNhbGxiYWNrXG4gICAgICB0aGlzLm9uSGlkZS5uZXh0KCk7XG4gICAgICB0aGlzLnZpc2liaWxpdHlQcnYgPSAnaGlkZGVuJztcbiAgICAgIC8vIE1hcmsgZm9yIGNoZWNrIGluIGNhc2UgdGhlIHBhcmVudCBoYXMgc2V0IENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG4gICAgICAvLyB0byBPblB1c2guXG4gICAgICB0aGlzLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIGRlbGF5KTtcbiAgfVxuXG4gIGFmdGVySGlkZGVuKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm9uSGlkZS5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibWF0LXR5cG9ncmFwaHlcIj5cbiAgPG1hdC1jYXJkIGNsYXNzPVwicG9wb3Zlci1jYXJkXCI+XG4gICAge3sgbWVzc2FnZSB9fVxuICAgIDxuZy10ZW1wbGF0ZSBbY2RrUG9ydGFsT3V0bGV0XT1cInRwbFBvcnRhbFwiPjwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LWNhcmQ+XG48L2Rpdj5cbiJdfQ==