import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimeComponent } from './date-time.component';
import { PopoverModule } from '../popover/popover.module';
import { ToDatePipe } from './to-date.pipe';
import { DetailsListModule } from '../details-list/details-list.module';
import * as i0 from "@angular/core";
export class DateTimeModule {
}
DateTimeModule.ɵfac = function DateTimeModule_Factory(t) { return new (t || DateTimeModule)(); };
DateTimeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DateTimeModule });
DateTimeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, PopoverModule, DetailsListModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeModule, [{
        type: NgModule,
        args: [{
                declarations: [DateTimeComponent, ToDatePipe],
                imports: [CommonModule, PopoverModule, DetailsListModule],
                exports: [DateTimeComponent, ToDatePipe],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DateTimeModule, { declarations: [DateTimeComponent, ToDatePipe], imports: [CommonModule, PopoverModule, DetailsListModule], exports: [DateTimeComponent, ToDatePipe] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZGF0ZS10aW1lL2RhdGUtdGltZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFPeEUsTUFBTSxPQUFPLGNBQWM7OzRFQUFkLGNBQWM7Z0VBQWQsY0FBYztvRUFIaEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixDQUFDO3VGQUc5QyxjQUFjO2NBTDFCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUM7Z0JBQzdDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ3pELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQzthQUN6Qzs7d0ZBQ1ksY0FBYyxtQkFKVixpQkFBaUIsRUFBRSxVQUFVLGFBQ2xDLFlBQVksRUFBRSxhQUFhLEVBQUUsaUJBQWlCLGFBQzlDLGlCQUFpQixFQUFFLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhdGVUaW1lQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXRpbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICcuLi9wb3BvdmVyL3BvcG92ZXIubW9kdWxlJztcbmltcG9ydCB7IFRvRGF0ZVBpcGUgfSBmcm9tICcuL3RvLWRhdGUucGlwZSc7XG5pbXBvcnQgeyBEZXRhaWxzTGlzdE1vZHVsZSB9IGZyb20gJy4uL2RldGFpbHMtbGlzdC9kZXRhaWxzLWxpc3QubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRGF0ZVRpbWVDb21wb25lbnQsIFRvRGF0ZVBpcGVdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBQb3BvdmVyTW9kdWxlLCBEZXRhaWxzTGlzdE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtEYXRlVGltZUNvbXBvbmVudCwgVG9EYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVUaW1lTW9kdWxlIHt9XG4iXX0=