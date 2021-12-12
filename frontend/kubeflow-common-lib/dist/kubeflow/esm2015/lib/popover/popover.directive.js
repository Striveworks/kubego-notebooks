/* This code was developed by @tasos-ale */
import { Directive, Input, TemplateRef, HostListener, ComponentRef, } from '@angular/core';
import { OverlayConfig, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { take } from 'rxjs/operators';
import { PopoverComponent, PopoverTemplatePortal } from './popover.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export class PopoverDirective {
    constructor(overlay, viewContainerRef, elemRef, ngZone, scrollDispatcher) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.elemRef = elemRef;
        this.ngZone = ngZone;
        this.scrollDispatcher = scrollDispatcher;
        this.libPopoverContext = {};
        this.libPopoverPosition = 'below';
        this.libPopoverClass = [];
        this.disabled = false;
        this.libPopoverShowDelay = 100;
        this.libPopoverHideDelay = 100;
    }
    get libPopover() {
        return this.libPopoverPrv;
    }
    set libPopover(v) {
        this.checkAndUpdate(this.libPopoverPrv, v);
        this.libPopoverPrv = v;
    }
    OnMouseEnter() {
        if (this.disabled || !this.libPopover) {
            return;
        }
        this.show();
    }
    OnMouseLeave() {
        this.hide();
    }
    ngOnDestroy() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.popoverInstance = null;
        }
    }
    show(delay = this.libPopoverShowDelay) {
        if (!this.popoverInstance) {
            this.createPopover();
        }
        if (typeof this.libPopover === 'string') {
            this.popoverInstance.message = this.libPopover;
        }
        else if (this.libPopover instanceof TemplateRef) {
            this.popoverInstance.template = new PopoverTemplatePortal(this.libPopover, this.libPopoverContext);
        }
        else if (this.libPopover instanceof ComponentRef) {
            // https://github.com/Microsoft/TypeScript/issues/19298
            // FIXME: Add support for Components
        }
        if (this.libPopoverClass.length > 0) {
            this.popoverInstance.classList = this.libPopoverClass;
        }
        this.popoverInstance.show(delay);
        this.popoverInstance.afterHidden().subscribe(() => this.detach());
        this.updatePosition();
    }
    createPopover() {
        const overlayRef = this.createOverlay();
        this.portal =
            this.portal ||
                new ComponentPortal(PopoverComponent, this.viewContainerRef);
        this.popoverInstance = overlayRef.attach(this.portal).instance;
    }
    createOverlay() {
        if (this.overlayRef) {
            return this.overlayRef;
        }
        const overlayConfig = this.getOverlayConfig();
        this.overlayRef = this.overlay.create(overlayConfig);
        return this.overlayRef;
    }
    hide(delay = this.libPopoverHideDelay) {
        if (this.popoverInstance) {
            this.popoverInstance.hide(delay);
        }
    }
    detach() {
        if (this.overlayRef && this.overlayRef.hasAttached) {
            this.overlayRef.detach();
        }
        this.popoverInstance = null;
    }
    getOverlayConfig() {
        const state = new OverlayConfig({
            positionStrategy: this.getPositionStrategy(),
            scrollStrategy: this.overlay.scrollStrategies.close(),
            panelClass: 'lib-popover-panel',
            direction: 'ltr',
        });
        return state;
    }
    getConnectedElement() {
        return this.elemRef;
    }
    updatePosition() {
        if (this.popoverInstance) {
            this.popoverInstance.markForCheck();
            this.ngZone.onMicrotaskEmpty.pipe(take(1)).subscribe(() => {
                this.overlayRef.updatePosition();
            });
        }
    }
    getPositionStrategy() {
        let originPos;
        let overlayPos;
        originPos = this.getOriginPos(this.libPopoverPosition);
        overlayPos = this.getOverlayPos(this.libPopoverPosition);
        const scrollableAncestors = this.scrollDispatcher.getAncestorScrollContainers(this.elemRef);
        return this.overlay
            .position()
            .flexibleConnectedTo(this.elemRef)
            .withTransformOriginOn('.lib-popover')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withScrollableContainers(scrollableAncestors)
            .withPositions([
            Object.assign(Object.assign({}, originPos.main), overlayPos.main),
            Object.assign(Object.assign({}, originPos.fallback), overlayPos.fallback),
        ]);
    }
    getOriginPos(position) {
        let originPos;
        if (position === 'above' || position === 'below') {
            originPos = {
                originX: 'center',
                originY: position === 'above' ? 'top' : 'bottom',
            };
        }
        else if (position === 'before') {
            originPos = {
                originX: 'start',
                originY: 'center',
            };
        }
        else if (position === 'after') {
            originPos = {
                originX: 'end',
                originY: 'center',
            };
        }
        else {
            throw Error(`Origin position "${position}" is invalid.`);
        }
        const { x, y } = this.invertPosition(position, originPos.originX, originPos.originY);
        return {
            main: originPos,
            fallback: { originX: x, originY: y },
        };
    }
    getOverlayPos(position) {
        let overlayPos;
        if (position === 'above') {
            overlayPos = {
                overlayX: 'center',
                overlayY: 'bottom',
            };
        }
        else if (position === 'below') {
            overlayPos = {
                overlayX: 'center',
                overlayY: 'top',
            };
        }
        else if (position === 'before') {
            overlayPos = {
                overlayX: 'end',
                overlayY: 'center',
            };
        }
        else if (position === 'after') {
            overlayPos = {
                overlayX: 'start',
                overlayY: 'center',
            };
        }
        else {
            throw Error(`Overlay position "${position}" is invalid.`);
        }
        const { x, y } = this.invertPosition(position, overlayPos.overlayX, overlayPos.overlayY);
        return {
            main: overlayPos,
            fallback: { overlayX: x, overlayY: y },
        };
    }
    invertPosition(position, x, y) {
        if (position === 'above' || position === 'below') {
            if (y === 'top') {
                y = 'bottom';
            }
            else if (y === 'bottom') {
                y = 'top';
            }
        }
        else {
            if (x === 'end') {
                x = 'start';
            }
            else if (x === 'start') {
                x = 'end';
            }
        }
        return { x, y };
    }
    checkAndUpdate(oldValue, newValue) {
        if (typeof newValue === 'string' &&
            newValue !== oldValue &&
            this.popoverInstance) {
            this.popoverInstance.message = newValue;
            this.updatePosition();
        }
    }
}
PopoverDirective.ɵfac = function PopoverDirective_Factory(t) { return new (t || PopoverDirective)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1.ScrollDispatcher)); };
PopoverDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PopoverDirective, selectors: [["", "libPopover", ""]], hostBindings: function PopoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function PopoverDirective_mouseenter_HostBindingHandler() { return ctx.OnMouseEnter(); })("mouseleave", function PopoverDirective_mouseleave_HostBindingHandler() { return ctx.OnMouseLeave(); });
    } }, inputs: { libPopover: "libPopover", libPopoverContext: "libPopoverContext", libPopoverPosition: "libPopoverPosition", libPopoverClass: "libPopoverClass", disabled: ["libPopoverDisabled", "disabled"], libPopoverShowDelay: "libPopoverShowDelay", libPopoverHideDelay: "libPopoverHideDelay" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverDirective, [{
        type: Directive,
        args: [{ selector: '[libPopover]' }]
    }], function () { return [{ type: i1.Overlay }, { type: i0.ViewContainerRef }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.ScrollDispatcher }]; }, { libPopover: [{
            type: Input,
            args: ['libPopover']
        }], libPopoverContext: [{
            type: Input
        }], libPopoverPosition: [{
            type: Input
        }], libPopoverClass: [{
            type: Input
        }], disabled: [{
            type: Input,
            args: ['libPopoverDisabled']
        }], libPopoverShowDelay: [{
            type: Input
        }], libPopoverHideDelay: [{
            type: Input
        }], OnMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], OnMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3BvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFHWCxZQUFZLEVBR1osWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxhQUFhLEdBUWQsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFpQjlFLE1BQU0sT0FBTyxnQkFBZ0I7SUFpQzNCLFlBQ1UsT0FBZ0IsRUFDaEIsZ0JBQWtDLEVBQ2xDLE9BQW1CLEVBQ25CLE1BQWMsRUFDZCxnQkFBa0M7UUFKbEMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUE1Qm5DLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztRQUM1Qix1QkFBa0IsR0FBYSxPQUFPLENBQUM7UUFDdkMsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztRQUMxQix3QkFBbUIsR0FBRyxHQUFHLENBQUM7SUF3QmhDLENBQUM7SUFyQ0osSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFD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QVE7a0JBQXBDLEtBQUs7bUJBQUMsb0JBQW9CO1lBQ2xCLG1CQUFtQjtrQkFBM0IsS0FBSztZQUNHLG1CQUFtQjtrQkFBM0IsS0FBSztZQU9OLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZO1lBUzFCLFlBQVk7a0JBRFgsWUFBWTttQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhpcyBjb2RlIHdhcyBkZXZlbG9wZWQgYnkgQHRhc29zLWFsZSAqL1xuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95LFxuICBOZ1pvbmUsXG4gIENvbXBvbmVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5UmVmLFxuICBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb24sXG4gIE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24sXG4gIEhvcml6b250YWxDb25uZWN0aW9uUG9zLFxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MsXG4gIFNjcm9sbERpc3BhdGNoZXIsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50LCBQb3BvdmVyVGVtcGxhdGVQb3J0YWwgfSBmcm9tICcuL3BvcG92ZXIuY29tcG9uZW50JztcblxuaW50ZXJmYWNlIE9yaWdpblBvc2l0aW9uIHtcbiAgbWFpbjogT3JpZ2luQ29ubmVjdGlvblBvc2l0aW9uO1xuICBmYWxsYmFjazogT3JpZ2luQ29ubmVjdGlvblBvc2l0aW9uO1xufVxuXG5pbnRlcmZhY2UgT3ZlcmxheVBvc2l0aW9uIHtcbiAgbWFpbjogT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbjtcbiAgZmFsbGJhY2s6IE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb247XG59XG5cbnR5cGUgUG9zaXRpb24gPSAnYWJvdmUnIHwgJ2JlbG93JyB8ICdiZWZvcmUnIHwgJ2FmdGVyJztcblxudHlwZSBQb3BvdmVyVmFsdWUgPSBUZW1wbGF0ZVJlZjxhbnk+IHwgc3RyaW5nO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbGliUG9wb3Zlcl0nIH0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbGliUG9wb3ZlclBydjogUG9wb3ZlclZhbHVlO1xuICBASW5wdXQoJ2xpYlBvcG92ZXInKVxuICBnZXQgbGliUG9wb3ZlcigpOiBQb3BvdmVyVmFsdWUge1xuICAgIHJldHVybiB0aGlzLmxpYlBvcG92ZXJQcnY7XG4gIH1cbiAgc2V0IGxpYlBvcG92ZXIodjogUG9wb3ZlclZhbHVlKSB7XG4gICAgdGhpcy5jaGVja0FuZFVwZGF0ZSh0aGlzLmxpYlBvcG92ZXJQcnYsIHYpO1xuICAgIHRoaXMubGliUG9wb3ZlclBydiA9IHY7XG4gIH1cbiAgQElucHV0KCkgbGliUG9wb3ZlckNvbnRleHQ6IGFueSA9IHt9O1xuICBASW5wdXQoKSBsaWJQb3BvdmVyUG9zaXRpb246IFBvc2l0aW9uID0gJ2JlbG93JztcbiAgQElucHV0KCkgbGliUG9wb3ZlckNsYXNzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoJ2xpYlBvcG92ZXJEaXNhYmxlZCcpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxpYlBvcG92ZXJTaG93RGVsYXkgPSAxMDA7XG4gIEBJbnB1dCgpIGxpYlBvcG92ZXJIaWRlRGVsYXkgPSAxMDA7XG5cbiAgcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8UG9wb3ZlckNvbXBvbmVudD47XG4gIHBvcG92ZXJJbnN0YW5jZTogUG9wb3ZlckNvbXBvbmVudCB8IG51bGw7XG4gIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBPbk1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMubGliUG9wb3Zlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBPbk1vdXNlTGVhdmUoKSB7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHNjcm9sbERpc3BhdGNoZXI6IFNjcm9sbERpc3BhdGNoZXIsXG4gICkge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5wb3BvdmVySW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHNob3coZGVsYXk6IG51bWJlciA9IHRoaXMubGliUG9wb3ZlclNob3dEZWxheSkge1xuICAgIGlmICghdGhpcy5wb3BvdmVySW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuY3JlYXRlUG9wb3ZlcigpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMubGliUG9wb3ZlciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucG9wb3Zlckluc3RhbmNlLm1lc3NhZ2UgPSB0aGlzLmxpYlBvcG92ZXI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxpYlBvcG92ZXIgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5wb3BvdmVySW5zdGFuY2UudGVtcGxhdGUgPSBuZXcgUG9wb3ZlclRlbXBsYXRlUG9ydGFsKFxuICAgICAgICB0aGlzLmxpYlBvcG92ZXIsXG4gICAgICAgIHRoaXMubGliUG9wb3ZlckNvbnRleHQsXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMubGliUG9wb3ZlciBhcyBhbnkpIGluc3RhbmNlb2YgQ29tcG9uZW50UmVmKSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzE5Mjk4XG4gICAgICAvLyBGSVhNRTogQWRkIHN1cHBvcnQgZm9yIENvbXBvbmVudHNcbiAgICB9XG4gICAgaWYgKHRoaXMubGliUG9wb3ZlckNsYXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucG9wb3Zlckluc3RhbmNlLmNsYXNzTGlzdCA9IHRoaXMubGliUG9wb3ZlckNsYXNzO1xuICAgIH1cbiAgICB0aGlzLnBvcG92ZXJJbnN0YW5jZS5zaG93KGRlbGF5KTtcbiAgICB0aGlzLnBvcG92ZXJJbnN0YW5jZS5hZnRlckhpZGRlbigpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmRldGFjaCgpKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cblxuICBjcmVhdGVQb3BvdmVyKCkge1xuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoKTtcbiAgICB0aGlzLnBvcnRhbCA9XG4gICAgICB0aGlzLnBvcnRhbCB8fFxuICAgICAgbmV3IENvbXBvbmVudFBvcnRhbChQb3BvdmVyQ29tcG9uZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgIHRoaXMucG9wb3Zlckluc3RhbmNlID0gb3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpLmluc3RhbmNlO1xuICB9XG5cbiAgY3JlYXRlT3ZlcmxheSgpOiBPdmVybGF5UmVmIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xuICAgIH1cbiAgICBjb25zdCBvdmVybGF5Q29uZmlnID0gdGhpcy5nZXRPdmVybGF5Q29uZmlnKCk7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShvdmVybGF5Q29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmO1xuICB9XG5cbiAgaGlkZShkZWxheTogbnVtYmVyID0gdGhpcy5saWJQb3BvdmVySGlkZURlbGF5KTogdm9pZCB7XG4gICAgaWYgKHRoaXMucG9wb3Zlckluc3RhbmNlKSB7XG4gICAgICB0aGlzLnBvcG92ZXJJbnN0YW5jZS5oaWRlKGRlbGF5KTtcbiAgICB9XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICB9XG5cbiAgICB0aGlzLnBvcG92ZXJJbnN0YW5jZSA9IG51bGw7XG4gIH1cblxuICBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xuICAgIGNvbnN0IHN0YXRlID0gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5nZXRQb3NpdGlvblN0cmF0ZWd5KCksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuY2xvc2UoKSxcbiAgICAgIHBhbmVsQ2xhc3M6ICdsaWItcG9wb3Zlci1wYW5lbCcsXG4gICAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIH0pO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGdldENvbm5lY3RlZEVsZW1lbnQoKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbVJlZjtcbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLnBvcG92ZXJJbnN0YW5jZSkge1xuICAgICAgdGhpcy5wb3BvdmVySW5zdGFuY2UubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLm5nWm9uZS5vbk1pY3JvdGFza0VtcHR5LnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRQb3NpdGlvblN0cmF0ZWd5KCk6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSB7XG4gICAgbGV0IG9yaWdpblBvczogT3JpZ2luUG9zaXRpb247XG4gICAgbGV0IG92ZXJsYXlQb3M6IE92ZXJsYXlQb3NpdGlvbjtcbiAgICBvcmlnaW5Qb3MgPSB0aGlzLmdldE9yaWdpblBvcyh0aGlzLmxpYlBvcG92ZXJQb3NpdGlvbik7XG4gICAgb3ZlcmxheVBvcyA9IHRoaXMuZ2V0T3ZlcmxheVBvcyh0aGlzLmxpYlBvcG92ZXJQb3NpdGlvbik7XG5cbiAgICBjb25zdCBzY3JvbGxhYmxlQW5jZXN0b3JzID0gdGhpcy5zY3JvbGxEaXNwYXRjaGVyLmdldEFuY2VzdG9yU2Nyb2xsQ29udGFpbmVycyhcbiAgICAgIHRoaXMuZWxlbVJlZixcbiAgICApO1xuICAgIHJldHVybiB0aGlzLm92ZXJsYXlcbiAgICAgIC5wb3NpdGlvbigpXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmVsZW1SZWYpXG4gICAgICAud2l0aFRyYW5zZm9ybU9yaWdpbk9uKCcubGliLXBvcG92ZXInKVxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXG4gICAgICAud2l0aFZpZXdwb3J0TWFyZ2luKDgpXG4gICAgICAud2l0aFNjcm9sbGFibGVDb250YWluZXJzKHNjcm9sbGFibGVBbmNlc3RvcnMpXG4gICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgIHsgLi4ub3JpZ2luUG9zLm1haW4sIC4uLm92ZXJsYXlQb3MubWFpbiB9LFxuICAgICAgICB7IC4uLm9yaWdpblBvcy5mYWxsYmFjaywgLi4ub3ZlcmxheVBvcy5mYWxsYmFjayB9LFxuICAgICAgXSk7XG4gIH1cblxuICBnZXRPcmlnaW5Qb3MocG9zaXRpb246IFBvc2l0aW9uKTogT3JpZ2luUG9zaXRpb24ge1xuICAgIGxldCBvcmlnaW5Qb3M6IE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbjtcbiAgICBpZiAocG9zaXRpb24gPT09ICdhYm92ZScgfHwgcG9zaXRpb24gPT09ICdiZWxvdycpIHtcbiAgICAgIG9yaWdpblBvcyA9IHtcbiAgICAgICAgb3JpZ2luWDogJ2NlbnRlcicsXG4gICAgICAgIG9yaWdpblk6IHBvc2l0aW9uID09PSAnYWJvdmUnID8gJ3RvcCcgOiAnYm90dG9tJyxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ2JlZm9yZScpIHtcbiAgICAgIG9yaWdpblBvcyA9IHtcbiAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgb3JpZ2luWTogJ2NlbnRlcicsXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPT09ICdhZnRlcicpIHtcbiAgICAgIG9yaWdpblBvcyA9IHtcbiAgICAgICAgb3JpZ2luWDogJ2VuZCcsXG4gICAgICAgIG9yaWdpblk6ICdjZW50ZXInLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoYE9yaWdpbiBwb3NpdGlvbiBcIiR7cG9zaXRpb259XCIgaXMgaW52YWxpZC5gKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuaW52ZXJ0UG9zaXRpb24oXG4gICAgICBwb3NpdGlvbixcbiAgICAgIG9yaWdpblBvcy5vcmlnaW5YLFxuICAgICAgb3JpZ2luUG9zLm9yaWdpblksXG4gICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtYWluOiBvcmlnaW5Qb3MsXG4gICAgICBmYWxsYmFjazogeyBvcmlnaW5YOiB4LCBvcmlnaW5ZOiB5IH0sXG4gICAgfTtcbiAgfVxuXG4gIGdldE92ZXJsYXlQb3MocG9zaXRpb246IFBvc2l0aW9uKTogT3ZlcmxheVBvc2l0aW9uIHtcbiAgICBsZXQgb3ZlcmxheVBvczogT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbjtcbiAgICBpZiAocG9zaXRpb24gPT09ICdhYm92ZScpIHtcbiAgICAgIG92ZXJsYXlQb3MgPSB7XG4gICAgICAgIG92ZXJsYXlYOiAnY2VudGVyJyxcbiAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICBvdmVybGF5UG9zID0ge1xuICAgICAgICBvdmVybGF5WDogJ2NlbnRlcicsXG4gICAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gJ2JlZm9yZScpIHtcbiAgICAgIG92ZXJsYXlQb3MgPSB7XG4gICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgICAgb3ZlcmxheVk6ICdjZW50ZXInLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHBvc2l0aW9uID09PSAnYWZ0ZXInKSB7XG4gICAgICBvdmVybGF5UG9zID0ge1xuICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgb3ZlcmxheVk6ICdjZW50ZXInLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoYE92ZXJsYXkgcG9zaXRpb24gXCIke3Bvc2l0aW9ufVwiIGlzIGludmFsaWQuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmludmVydFBvc2l0aW9uKFxuICAgICAgcG9zaXRpb24sXG4gICAgICBvdmVybGF5UG9zLm92ZXJsYXlYLFxuICAgICAgb3ZlcmxheVBvcy5vdmVybGF5WSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1haW46IG92ZXJsYXlQb3MsXG4gICAgICBmYWxsYmFjazogeyBvdmVybGF5WDogeCwgb3ZlcmxheVk6IHkgfSxcbiAgICB9O1xuICB9XG5cbiAgaW52ZXJ0UG9zaXRpb24oXG4gICAgcG9zaXRpb246IFBvc2l0aW9uLFxuICAgIHg6IEhvcml6b250YWxDb25uZWN0aW9uUG9zLFxuICAgIHk6IFZlcnRpY2FsQ29ubmVjdGlvblBvcyxcbiAgKSB7XG4gICAgaWYgKHBvc2l0aW9uID09PSAnYWJvdmUnIHx8IHBvc2l0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICBpZiAoeSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgeSA9ICdib3R0b20nO1xuICAgICAgfSBlbHNlIGlmICh5ID09PSAnYm90dG9tJykge1xuICAgICAgICB5ID0gJ3RvcCc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4ID09PSAnZW5kJykge1xuICAgICAgICB4ID0gJ3N0YXJ0JztcbiAgICAgIH0gZWxzZSBpZiAoeCA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICB4ID0gJ2VuZCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgeCwgeSB9O1xuICB9XG5cbiAgY2hlY2tBbmRVcGRhdGUob2xkVmFsdWU6IFBvcG92ZXJWYWx1ZSwgbmV3VmFsdWU6IFBvcG92ZXJWYWx1ZSk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ3N0cmluZycgJiZcbiAgICAgIG5ld1ZhbHVlICE9PSBvbGRWYWx1ZSAmJlxuICAgICAgdGhpcy5wb3BvdmVySW5zdGFuY2VcbiAgICApIHtcbiAgICAgIHRoaXMucG9wb3Zlckluc3RhbmNlLm1lc3NhZ2UgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==