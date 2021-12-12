import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceTableModule } from '../resource-table/resource-table.module';
import { ConditionsTableComponent } from './conditions-table.component';
import * as i0 from "@angular/core";
export class ConditionsTableModule {
}
ConditionsTableModule.ɵfac = function ConditionsTableModule_Factory(t) { return new (t || ConditionsTableModule)(); };
ConditionsTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ConditionsTableModule });
ConditionsTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, ResourceTableModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConditionsTableModule, [{
        type: NgModule,
        args: [{
                declarations: [ConditionsTableComponent],
                imports: [CommonModule, ResourceTableModule],
                exports: [ConditionsTableComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ConditionsTableModule, { declarations: [ConditionsTableComponent], imports: [CommonModule, ResourceTableModule], exports: [ConditionsTableComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZGl0aW9ucy10YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2NvbmRpdGlvbnMtdGFibGUvY29uZGl0aW9ucy10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBT3hFLE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7dUVBQXJCLHFCQUFxQjsyRUFIdkIsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUM7dUZBR2pDLHFCQUFxQjtjQUxqQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDcEM7O3dGQUNZLHFCQUFxQixtQkFKakIsd0JBQXdCLGFBQzdCLFlBQVksRUFBRSxtQkFBbUIsYUFDakMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZXNvdXJjZVRhYmxlTW9kdWxlIH0gZnJvbSAnLi4vcmVzb3VyY2UtdGFibGUvcmVzb3VyY2UtdGFibGUubW9kdWxlJztcbmltcG9ydCB7IENvbmRpdGlvbnNUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29uZGl0aW9ucy10YWJsZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDb25kaXRpb25zVGFibGVDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSZXNvdXJjZVRhYmxlTW9kdWxlXSxcbiAgZXhwb3J0czogW0NvbmRpdGlvbnNUYWJsZUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbnNUYWJsZU1vZHVsZSB7fVxuIl19