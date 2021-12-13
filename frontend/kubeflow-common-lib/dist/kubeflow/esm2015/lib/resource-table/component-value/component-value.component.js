import { Component, Input } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
function ComponentValueComponent_ng_template_0_Template(rf, ctx) { }
export class ComponentValueComponent {
    get element() {
        return this.data;
    }
    set element(data) {
        this.data = data;
        if (!this.componentRef) {
            return;
        }
        this.componentRef.instance.element = data;
    }
    ngOnInit() {
        this.portal = new ComponentPortal(this.valueDescriptor.component);
    }
    onAttach(ref) {
        this.componentRef = ref;
        this.componentRef.instance.element = this.element;
    }
}
ComponentValueComponent.ɵfac = function ComponentValueComponent_Factory(t) { return new (t || ComponentValueComponent)(); };
ComponentValueComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ComponentValueComponent, selectors: [["lib-component-value"]], inputs: { element: "element", valueDescriptor: "valueDescriptor" }, decls: 1, vars: 1, consts: [[3, "cdkPortalOutlet", "attached"]], template: function ComponentValueComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ComponentValueComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        i0.ɵɵlistener("attached", function ComponentValueComponent_Template_ng_template_attached_0_listener($event) { return ctx.onAttach($event); });
    } if (rf & 2) {
        i0.ɵɵproperty("cdkPortalOutlet", ctx.portal);
    } }, directives: [i1.CdkPortalOutlet], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentValueComponent, [{
        type: Component,
        args: [{
                selector: 'lib-component-value',
                templateUrl: './component-value.component.html',
                styleUrls: ['./component-value.component.scss'],
            }]
    }], null, { element: [{
            type: Input
        }], valueDescriptor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LXZhbHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvcmVzb3VyY2UtdGFibGUvY29tcG9uZW50LXZhbHVlL2NvbXBvbmVudC12YWx1ZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3Jlc291cmNlLXRhYmxlL2NvbXBvbmVudC12YWx1ZS9jb21wb25lbnQtdmFsdWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxlQUFlLEVBQVUsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQVc5RCxNQUFNLE9BQU8sdUJBQXVCO0lBS2xDLElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsSUFBUztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQzVDLENBQUM7SUFJRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBdUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDcEQsQ0FBQzs7OEZBNUJVLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDYnBDLHdGQUdlO1FBRGIscUhBQVksb0JBQWdCLElBQUM7O1FBRDdCLDRDQUEwQjs7dUZEWWYsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDtnQkFPSyxPQUFPO2tCQURWLEtBQUs7WUFjRyxlQUFlO2tCQUF2QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ29tcG9uZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudFZhbHVlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWJsZUNvbHVtbkNvbXBvbmVudCB7XG4gIGVsZW1lbnQ6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvbXBvbmVudC12YWx1ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnQtdmFsdWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21wb25lbnQtdmFsdWUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50VmFsdWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgcG9ydGFsOiBQb3J0YWw8YW55PjtcbiAgcHJpdmF0ZSBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUYWJsZUNvbHVtbkNvbXBvbmVudD47XG4gIHByaXZhdGUgZGF0YTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBlbGVtZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuICBzZXQgZWxlbWVudChkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudFJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmVsZW1lbnQgPSBkYXRhO1xuICB9XG5cbiAgQElucHV0KCkgdmFsdWVEZXNjcmlwdG9yOiBDb21wb25lbnRWYWx1ZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwodGhpcy52YWx1ZURlc2NyaXB0b3IuY29tcG9uZW50KTtcbiAgfVxuXG4gIG9uQXR0YWNoKHJlZjogQ29tcG9uZW50UmVmPFRhYmxlQ29sdW1uQ29tcG9uZW50Pikge1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gcmVmO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZVxuICBbY2RrUG9ydGFsT3V0bGV0XT1cInBvcnRhbFwiXG4gIChhdHRhY2hlZCk9XCJvbkF0dGFjaCgkZXZlbnQpXCJcbj48L25nLXRlbXBsYXRlPlxuIl19