import '@angular/localize/init';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamespaceSelectModule } from './namespace-select/namespace-select.module';
import { ResourceTableModule } from './resource-table/resource-table.module';
import { SnackBarModule } from './snack-bar/snack-bar.module';
import { FormModule } from './form/form.module';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientXsrfModule, } from '@angular/common/http';
import { HeadersInterceptor } from './services/rok/injector';
import { PopoverModule } from './popover/popover.module';
import { TitleActionsToolbarModule } from './title-actions-toolbar/title-actions-toolbar.module';
import { ConditionsTableModule } from './conditions-table/conditions-table.module';
import { DetailsListModule } from './details-list/details-list.module';
import { DateTimeModule } from './date-time/date-time.module';
import { PanelModule } from './panel/panel.module';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';
import * as i0 from "@angular/core";
export class KubeflowModule {
}
KubeflowModule.ɵfac = function KubeflowModule_Factory(t) { return new (t || KubeflowModule)(); };
KubeflowModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: KubeflowModule });
KubeflowModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    ], imports: [[CommonModule, HttpClientModule, HttpClientXsrfModule], NamespaceSelectModule,
        ResourceTableModule,
        SnackBarModule,
        FormModule,
        PopoverModule,
        ConfirmDialogModule,
        HttpClientModule,
        HttpClientXsrfModule,
        TitleActionsToolbarModule,
        ConditionsTableModule,
        DetailsListModule,
        DateTimeModule,
        PanelModule,
        LoadingSpinnerModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KubeflowModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                exports: [
                    NamespaceSelectModule,
                    ResourceTableModule,
                    SnackBarModule,
                    FormModule,
                    PopoverModule,
                    ConfirmDialogModule,
                    HttpClientModule,
                    HttpClientXsrfModule,
                    TitleActionsToolbarModule,
                    ConditionsTableModule,
                    DetailsListModule,
                    DateTimeModule,
                    PanelModule,
                    LoadingSpinnerModule,
                ],
                imports: [CommonModule, HttpClientModule, HttpClientXsrfModule],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(KubeflowModule, { imports: [CommonModule, HttpClientModule, HttpClientXsrfModule], exports: [NamespaceSelectModule,
        ResourceTableModule,
        SnackBarModule,
        FormModule,
        PopoverModule,
        ConfirmDialogModule,
        HttpClientModule,
        HttpClientXsrfModule,
        TitleActionsToolbarModule,
        ConditionsTableModule,
        DetailsListModule,
        DateTimeModule,
        PanelModule,
        LoadingSpinnerModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ViZWZsb3cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9rdWJlZmxvdy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixHQUNyQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQXlCN0UsTUFBTSxPQUFPLGNBQWM7OzRFQUFkLGNBQWM7Z0VBQWQsY0FBYztxRUFKZDtRQUNULEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0tBQzFFLFlBSFEsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLENBQUMsRUFmN0QscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsVUFBVTtRQUNWLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsV0FBVztRQUNYLG9CQUFvQjt1RkFPWCxjQUFjO2NBdkIxQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxVQUFVO29CQUNWLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtvQkFDcEIseUJBQXlCO29CQUN6QixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxXQUFXO29CQUNYLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixDQUFDO2dCQUMvRCxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQzFFO2FBQ0Y7O3dGQUNZLGNBQWMsY0FMZixZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLGFBZjVELHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLFVBQVU7UUFDVixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsY0FBYztRQUNkLFdBQVc7UUFDWCxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Bhbmd1bGFyL2xvY2FsaXplL2luaXQnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5hbWVzcGFjZVNlbGVjdE1vZHVsZSB9IGZyb20gJy4vbmFtZXNwYWNlLXNlbGVjdC9uYW1lc3BhY2Utc2VsZWN0Lm1vZHVsZSc7XG5pbXBvcnQgeyBSZXNvdXJjZVRhYmxlTW9kdWxlIH0gZnJvbSAnLi9yZXNvdXJjZS10YWJsZS9yZXNvdXJjZS10YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgU25hY2tCYXJNb2R1bGUgfSBmcm9tICcuL3NuYWNrLWJhci9zbmFjay1iYXIubW9kdWxlJztcbmltcG9ydCB7IEZvcm1Nb2R1bGUgfSBmcm9tICcuL2Zvcm0vZm9ybS5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudE1vZHVsZSxcbiAgSFRUUF9JTlRFUkNFUFRPUlMsXG4gIEh0dHBDbGllbnRYc3JmTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIZWFkZXJzSW50ZXJjZXB0b3IgfSBmcm9tICcuL3NlcnZpY2VzL3Jvay9pbmplY3Rvcic7XG5pbXBvcnQgeyBQb3BvdmVyTW9kdWxlIH0gZnJvbSAnLi9wb3BvdmVyL3BvcG92ZXIubW9kdWxlJztcbmltcG9ydCB7IFRpdGxlQWN0aW9uc1Rvb2xiYXJNb2R1bGUgfSBmcm9tICcuL3RpdGxlLWFjdGlvbnMtdG9vbGJhci90aXRsZS1hY3Rpb25zLXRvb2xiYXIubW9kdWxlJztcbmltcG9ydCB7IENvbmRpdGlvbnNUYWJsZU1vZHVsZSB9IGZyb20gJy4vY29uZGl0aW9ucy10YWJsZS9jb25kaXRpb25zLXRhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBEZXRhaWxzTGlzdE1vZHVsZSB9IGZyb20gJy4vZGV0YWlscy1saXN0L2RldGFpbHMtbGlzdC5tb2R1bGUnO1xuaW1wb3J0IHsgRGF0ZVRpbWVNb2R1bGUgfSBmcm9tICcuL2RhdGUtdGltZS9kYXRlLXRpbWUubW9kdWxlJztcbmltcG9ydCB7IFBhbmVsTW9kdWxlIH0gZnJvbSAnLi9wYW5lbC9wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgTG9hZGluZ1NwaW5uZXJNb2R1bGUgfSBmcm9tICcuL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIubW9kdWxlJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dNb2R1bGUgfSBmcm9tICcuL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtcbiAgICBOYW1lc3BhY2VTZWxlY3RNb2R1bGUsXG4gICAgUmVzb3VyY2VUYWJsZU1vZHVsZSxcbiAgICBTbmFja0Jhck1vZHVsZSxcbiAgICBGb3JtTW9kdWxlLFxuICAgIFBvcG92ZXJNb2R1bGUsXG4gICAgQ29uZmlybURpYWxvZ01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEh0dHBDbGllbnRYc3JmTW9kdWxlLFxuICAgIFRpdGxlQWN0aW9uc1Rvb2xiYXJNb2R1bGUsXG4gICAgQ29uZGl0aW9uc1RhYmxlTW9kdWxlLFxuICAgIERldGFpbHNMaXN0TW9kdWxlLFxuICAgIERhdGVUaW1lTW9kdWxlLFxuICAgIFBhbmVsTW9kdWxlLFxuICAgIExvYWRpbmdTcGlubmVyTW9kdWxlLFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBIdHRwQ2xpZW50WHNyZk1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIZWFkZXJzSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEt1YmVmbG93TW9kdWxlIHt9XG4iXX0=