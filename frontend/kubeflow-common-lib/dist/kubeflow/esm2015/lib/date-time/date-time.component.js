import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/date-time.service";
import * as i2 from "../popover/popover.directive";
import * as i3 from "../details-list/details-list-item/details-list-item.component";
import * as i4 from "./to-date.pipe";
function DateTimeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "lib-details-list-item", 2);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "libToDate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "lib-details-list-item", 3);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("bottomDivider", false);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 4, ctx_r1.date), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("bottomDivider", false);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.date, " ");
} }
export class DateTimeComponent {
    constructor(dtService, cdRef) {
        this.dtService = dtService;
        this.cdRef = cdRef;
        this.defaultDisplayValuePrv = '-';
        this.popoverPosition = 'below';
        this.timer = window.setInterval(() => {
            if (this.date) {
                this.checkAndUpdate(this.date);
            }
        }, 1000);
    }
    get date() {
        return this.datePrv;
    }
    set date(v) {
        this.datePrv = v;
        this.formattedDate = this.timeAgo(v);
    }
    set defaultDisplayValue(v) {
        this.defaultDisplayValuePrv = v;
        this.checkAndUpdate(this.date);
    }
    get defaultDisplayValue() {
        return this.defaultDisplayValuePrv;
    }
    get isPopoverDisabled() {
        return !this.date;
    }
    ngOnDestroy() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    timeAgo(d) {
        if (!d) {
            return this.defaultDisplayValue;
        }
        return this.dtService.distanceInWords(d);
    }
    checkAndUpdate(date) {
        const d = this.timeAgo(date);
        if (this.formattedDate !== d && this.cdRef) {
            this.formattedDate = d;
            this.cdRef.detectChanges();
        }
    }
}
DateTimeComponent.ɵfac = function DateTimeComponent_Factory(t) { return new (t || DateTimeComponent)(i0.ɵɵdirectiveInject(i1.DateTimeService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
DateTimeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateTimeComponent, selectors: [["lib-date-time"]], inputs: { date: "date", popoverPosition: "popoverPosition", defaultDisplayValue: ["default", "defaultDisplayValue"] }, decls: 4, vars: 6, consts: [[1, "truncate", 3, "libPopover", "libPopoverPosition", "libPopoverDisabled", "libPopoverHideDelay", "libPopoverShowDelay"], ["timeTpl", ""], ["key", "Local", "keyMinWidth", "50px", 3, "bottomDivider"], ["key", "UTC", "keyMinWidth", "50px", 3, "bottomDivider"]], template: function DateTimeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, DateTimeComponent_ng_template_2_Template, 5, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        i0.ɵɵproperty("libPopover", _r0)("libPopoverPosition", ctx.popoverPosition)("libPopoverDisabled", ctx.isPopoverDisabled)("libPopoverHideDelay", 100)("libPopoverShowDelay", 100);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.formattedDate, "\n");
    } }, directives: [i2.PopoverDirective, i3.DetailsListItemComponent], pipes: [i4.ToDatePipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeComponent, [{
        type: Component,
        args: [{
                selector: 'lib-date-time',
                templateUrl: './date-time.component.html',
                styleUrls: [],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.DateTimeService }, { type: i0.ChangeDetectorRef }]; }, { date: [{
            type: Input
        }], popoverPosition: [{
            type: Input
        }], defaultDisplayValue: [{
            type: Input,
            args: ['default']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZGF0ZS10aW1lL2RhdGUtdGltZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2RhdGUtdGltZS9kYXRlLXRpbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsdUJBQXVCLEdBRXhCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0lDTXJCLGdEQUE4RTtJQUM1RSxZQUNGOztJQUFBLGlCQUF3QjtJQUV4QixnREFBNEU7SUFDMUUsWUFDRjtJQUFBLGlCQUF3Qjs7O0lBTlcscUNBQXVCO0lBQ3hELGVBQ0Y7SUFERSxrRUFDRjtJQUVpQyxlQUF1QjtJQUF2QixxQ0FBdUI7SUFDdEQsZUFDRjtJQURFLDRDQUNGOztBREhGLE1BQU0sT0FBTyxpQkFBaUI7SUE4QjVCLFlBQ1UsU0FBMEIsRUFDMUIsS0FBd0I7UUFEeEIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUE5QjFCLDJCQUFzQixHQUFHLEdBQUcsQ0FBQztRQWE1QixvQkFBZSxHQUFHLE9BQU8sQ0FBQztRQW1CakMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBbENELElBQ0ksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBZ0I7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFLRCxJQUNJLG1CQUFtQixDQUFDLENBQVM7UUFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDckMsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFhRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFTyxPQUFPLENBQUMsQ0FBZ0I7UUFDOUIsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNOLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sY0FBYyxDQUFDLElBQW1CO1FBQ3hDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOztrRkE1RFUsaUJBQWlCO29FQUFqQixpQkFBaUI7UUNmOUIsOEJBT0M7UUFDQyxZQUNGO1FBQUEsaUJBQU07UUFFTixtSEFRYzs7O1FBbEJaLGdDQUFzQiwyQ0FBQSw2Q0FBQSw0QkFBQSw0QkFBQTtRQU90QixlQUNGO1FBREUsbURBQ0Y7O3VGRE1hLGlCQUFpQjtjQU43QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxFQUFFO2dCQUNiLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2tHQU9LLElBQUk7a0JBRFAsS0FBSztZQVVHLGVBQWU7a0JBQXZCLEtBQUs7WUFHRixtQkFBbUI7a0JBRHRCLEtBQUs7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVUaW1lU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGUtdGltZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWRhdGUtdGltZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXRpbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHRpbWVyOiBudW1iZXI7XG4gIHByaXZhdGUgZGVmYXVsdERpc3BsYXlWYWx1ZVBydiA9ICctJztcbiAgcHJpdmF0ZSBkYXRlUHJ2OiBzdHJpbmcgfCBEYXRlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkYXRlKCk6IHN0cmluZyB8IERhdGUge1xuICAgIHJldHVybiB0aGlzLmRhdGVQcnY7XG4gIH1cbiAgc2V0IGRhdGUodjogc3RyaW5nIHwgRGF0ZSkge1xuICAgIHRoaXMuZGF0ZVBydiA9IHY7XG4gICAgdGhpcy5mb3JtYXR0ZWREYXRlID0gdGhpcy50aW1lQWdvKHYpO1xuICB9XG4gIGZvcm1hdHRlZERhdGU6IHN0cmluZztcblxuICBASW5wdXQoKSBwb3BvdmVyUG9zaXRpb24gPSAnYmVsb3cnO1xuXG4gIEBJbnB1dCgnZGVmYXVsdCcpXG4gIHNldCBkZWZhdWx0RGlzcGxheVZhbHVlKHY6IHN0cmluZykge1xuICAgIHRoaXMuZGVmYXVsdERpc3BsYXlWYWx1ZVBydiA9IHY7XG4gICAgdGhpcy5jaGVja0FuZFVwZGF0ZSh0aGlzLmRhdGUpO1xuICB9XG4gIGdldCBkZWZhdWx0RGlzcGxheVZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdERpc3BsYXlWYWx1ZVBydjtcbiAgfVxuXG4gIGdldCBpc1BvcG92ZXJEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuZGF0ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZHRTZXJ2aWNlOiBEYXRlVGltZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHRoaXMudGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGF0ZSkge1xuICAgICAgICB0aGlzLmNoZWNrQW5kVXBkYXRlKHRoaXMuZGF0ZSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdGltZUFnbyhkOiBzdHJpbmcgfCBEYXRlKTogc3RyaW5nIHtcbiAgICBpZiAoIWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHREaXNwbGF5VmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmR0U2VydmljZS5kaXN0YW5jZUluV29yZHMoZCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQW5kVXBkYXRlKGRhdGU6IHN0cmluZyB8IERhdGUpIHtcbiAgICBjb25zdCBkID0gdGhpcy50aW1lQWdvKGRhdGUpO1xuICAgIGlmICh0aGlzLmZvcm1hdHRlZERhdGUgIT09IGQgJiYgdGhpcy5jZFJlZikge1xuICAgICAgdGhpcy5mb3JtYXR0ZWREYXRlID0gZDtcbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdlxuICBbbGliUG9wb3Zlcl09XCJ0aW1lVHBsXCJcbiAgW2xpYlBvcG92ZXJQb3NpdGlvbl09XCJwb3BvdmVyUG9zaXRpb25cIlxuICBbbGliUG9wb3ZlckRpc2FibGVkXT1cImlzUG9wb3ZlckRpc2FibGVkXCJcbiAgW2xpYlBvcG92ZXJIaWRlRGVsYXldPVwiMTAwXCJcbiAgW2xpYlBvcG92ZXJTaG93RGVsYXldPVwiMTAwXCJcbiAgY2xhc3M9XCJ0cnVuY2F0ZVwiXG4+XG4gIHt7IGZvcm1hdHRlZERhdGUgfX1cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI3RpbWVUcGw+XG4gIDxsaWItZGV0YWlscy1saXN0LWl0ZW0ga2V5PVwiTG9jYWxcIiBbYm90dG9tRGl2aWRlcl09XCJmYWxzZVwiIGtleU1pbldpZHRoPVwiNTBweFwiPlxuICAgIHt7IGRhdGUgfCBsaWJUb0RhdGUgfX1cbiAgPC9saWItZGV0YWlscy1saXN0LWl0ZW0+XG5cbiAgPGxpYi1kZXRhaWxzLWxpc3QtaXRlbSBrZXk9XCJVVENcIiBbYm90dG9tRGl2aWRlcl09XCJmYWxzZVwiIGtleU1pbldpZHRoPVwiNTBweFwiPlxuICAgIHt7IGRhdGUgfX1cbiAgPC9saWItZGV0YWlscy1saXN0LWl0ZW0+XG48L25nLXRlbXBsYXRlPlxuIl19