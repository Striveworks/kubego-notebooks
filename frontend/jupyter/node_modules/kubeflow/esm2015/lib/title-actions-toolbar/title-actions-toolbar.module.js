import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleActionsToolbarComponent } from './title-actions-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
export class TitleActionsToolbarModule {
}
TitleActionsToolbarModule.ɵfac = function TitleActionsToolbarModule_Factory(t) { return new (t || TitleActionsToolbarModule)(); };
TitleActionsToolbarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TitleActionsToolbarModule });
TitleActionsToolbarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule, MatDividerModule, MatButtonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleActionsToolbarModule, [{
        type: NgModule,
        args: [{
                declarations: [TitleActionsToolbarComponent],
                imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule],
                exports: [TitleActionsToolbarComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TitleActionsToolbarModule, { declarations: [TitleActionsToolbarComponent], imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule], exports: [TitleActionsToolbarComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUtYWN0aW9ucy10b29sYmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvdGl0bGUtYWN0aW9ucy10b29sYmFyL3RpdGxlLWFjdGlvbnMtdG9vbGJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFPM0QsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5QjsyRUFBekIseUJBQXlCOytFQUgzQixDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDO3VGQUc5RCx5QkFBeUI7Y0FMckMsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUM1QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztnQkFDekUsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDeEM7O3dGQUNZLHlCQUF5QixtQkFKckIsNEJBQTRCLGFBQ2pDLFlBQVksRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxhQUM5RCw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRpdGxlQWN0aW9uc1Rvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3RpdGxlLWFjdGlvbnMtdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVGl0bGVBY3Rpb25zVG9vbGJhckNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtUaXRsZUFjdGlvbnNUb29sYmFyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgVGl0bGVBY3Rpb25zVG9vbGJhck1vZHVsZSB7fVxuIl19