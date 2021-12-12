import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NamespaceSelectComponent } from './namespace-select.component';
import { SnackBarModule } from '../snack-bar/snack-bar.module';
import * as i0 from "@angular/core";
export class NamespaceSelectModule {
}
NamespaceSelectModule.ɵfac = function NamespaceSelectModule_Factory(t) { return new (t || NamespaceSelectModule)(); };
NamespaceSelectModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: NamespaceSelectModule });
NamespaceSelectModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule,
            BrowserAnimationsModule,
            MatFormFieldModule,
            MatSelectModule,
            SnackBarModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NamespaceSelectModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    BrowserAnimationsModule,
                    MatFormFieldModule,
                    MatSelectModule,
                    SnackBarModule,
                ],
                declarations: [NamespaceSelectComponent],
                exports: [NamespaceSelectComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NamespaceSelectModule, { declarations: [NamespaceSelectComponent], imports: [CommonModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatSelectModule,
        SnackBarModule], exports: [NamespaceSelectComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL25hbWVzcGFjZS1zZWxlY3QvbmFtZXNwYWNlLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBZS9ELE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7dUVBQXJCLHFCQUFxQjsyRUFadkI7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLGdCQUFnQjtZQUNoQix1QkFBdUI7WUFDdkIsa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixjQUFjO1NBQ2Y7dUZBSVUscUJBQXFCO2NBYmpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGdCQUFnQjtvQkFDaEIsdUJBQXVCO29CQUN2QixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDeEMsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDcEM7O3dGQUNZLHFCQUFxQixtQkFIakIsd0JBQXdCLGFBUnJDLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWMsYUFHTix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE5hbWVzcGFjZVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbmFtZXNwYWNlLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU25hY2tCYXJNb2R1bGUgfSBmcm9tICcuLi9zbmFjay1iYXIvc25hY2stYmFyLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIFNuYWNrQmFyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtOYW1lc3BhY2VTZWxlY3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmFtZXNwYWNlU2VsZWN0Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTmFtZXNwYWNlU2VsZWN0TW9kdWxlIHt9XG4iXX0=