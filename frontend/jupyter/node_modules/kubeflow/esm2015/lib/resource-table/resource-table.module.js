import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceTableComponent } from './resource-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { StatusComponent } from './status/status.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActionComponent } from './action/action.component';
import { MatChipsModule } from '@angular/material/chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActionButtonComponent } from './action-button/action-button.component';
import { IconModule } from '../icon/icon.module';
import { TableComponent } from './table/table.component';
import { DateTimeModule } from '../date-time/date-time.module';
import { PopoverModule } from '../popover/popover.module';
import { TableChipsListComponent } from './chips-list/chips-list.component';
import { ComponentValueComponent } from './component-value/component-value.component';
import { PortalModule } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export class ResourceTableModule {
}
ResourceTableModule.ɵfac = function ResourceTableModule_Factory(t) { return new (t || ResourceTableModule)(); };
ResourceTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ResourceTableModule });
ResourceTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatTableModule,
            MatTooltipModule,
            MatProgressSpinnerModule,
            MatDividerModule,
            MatCardModule,
            MatButtonModule,
            MatChipsModule,
            MatMenuModule,
            PortalModule,
            FontAwesomeModule,
            MatIconModule,
            IconModule,
            DateTimeModule,
            PopoverModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResourceTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatTableModule,
                    MatTooltipModule,
                    MatProgressSpinnerModule,
                    MatDividerModule,
                    MatCardModule,
                    MatButtonModule,
                    MatChipsModule,
                    MatMenuModule,
                    PortalModule,
                    FontAwesomeModule,
                    MatIconModule,
                    IconModule,
                    DateTimeModule,
                    PopoverModule,
                ],
                declarations: [
                    ResourceTableComponent,
                    StatusComponent,
                    ActionComponent,
                    ActionButtonComponent,
                    TableChipsListComponent,
                    TableComponent,
                    ComponentValueComponent,
                ],
                exports: [ResourceTableComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ResourceTableModule, { declarations: [ResourceTableComponent,
        StatusComponent,
        ActionComponent,
        ActionButtonComponent,
        TableChipsListComponent,
        TableComponent,
        ComponentValueComponent], imports: [CommonModule,
        MatTableModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatDividerModule,
        MatCardModule,
        MatButtonModule,
        MatChipsModule,
        MatMenuModule,
        PortalModule,
        FontAwesomeModule,
        MatIconModule,
        IconModule,
        DateTimeModule,
        PopoverModule], exports: [ResourceTableComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9yZXNvdXJjZS10YWJsZS9yZXNvdXJjZS10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQStCbkQsTUFBTSxPQUFPLG1CQUFtQjs7c0ZBQW5CLG1CQUFtQjtxRUFBbkIsbUJBQW1CO3lFQTVCckI7WUFDUCxZQUFZO1lBQ1osY0FBYztZQUNkLGdCQUFnQjtZQUNoQix3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixlQUFlO1lBQ2YsY0FBYztZQUNkLGFBQWE7WUFDYixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixVQUFVO1lBQ1YsY0FBYztZQUNkLGFBQWE7U0FDZDt1RkFZVSxtQkFBbUI7Y0E3Qi9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsd0JBQXdCO29CQUN4QixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsVUFBVTtvQkFDVixjQUFjO29CQUNkLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtvQkFDdEIsZUFBZTtvQkFDZixlQUFlO29CQUNmLHFCQUFxQjtvQkFDckIsdUJBQXVCO29CQUN2QixjQUFjO29CQUNkLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDbEM7O3dGQUNZLG1CQUFtQixtQkFWNUIsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixjQUFjO1FBQ2QsdUJBQXVCLGFBdkJ2QixZQUFZO1FBQ1osY0FBYztRQUNkLGdCQUFnQjtRQUNoQix3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixlQUFlO1FBQ2YsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixVQUFVO1FBQ1YsY0FBYztRQUNkLGFBQWEsYUFXTCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJlc291cmNlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3Jlc291cmNlLXRhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQgeyBTdGF0dXNDb21wb25lbnQgfSBmcm9tICcuL3N0YXR1cy9zdGF0dXMuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHsgQWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRDaGlwc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lTW9kdWxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2FuZ3VsYXItZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL2ljb24ubW9kdWxlJztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVRpbWVNb2R1bGUgfSBmcm9tICcuLi9kYXRlLXRpbWUvZGF0ZS10aW1lLm1vZHVsZSc7XG5pbXBvcnQgeyBQb3BvdmVyTW9kdWxlIH0gZnJvbSAnLi4vcG9wb3Zlci9wb3BvdmVyLm1vZHVsZSc7XG5pbXBvcnQgeyBUYWJsZUNoaXBzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vY2hpcHMtbGlzdC9jaGlwcy1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb25lbnRWYWx1ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50LXZhbHVlL2NvbXBvbmVudC12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9ydGFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIFBvcnRhbE1vZHVsZSxcbiAgICBGb250QXdlc29tZU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgRGF0ZVRpbWVNb2R1bGUsXG4gICAgUG9wb3Zlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUmVzb3VyY2VUYWJsZUNvbXBvbmVudCxcbiAgICBTdGF0dXNDb21wb25lbnQsXG4gICAgQWN0aW9uQ29tcG9uZW50LFxuICAgIEFjdGlvbkJ1dHRvbkNvbXBvbmVudCxcbiAgICBUYWJsZUNoaXBzTGlzdENvbXBvbmVudCxcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBDb21wb25lbnRWYWx1ZUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1Jlc291cmNlVGFibGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVRhYmxlTW9kdWxlIHt9XG4iXX0=