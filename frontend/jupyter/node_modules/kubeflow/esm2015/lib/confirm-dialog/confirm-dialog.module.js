import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i0 from "@angular/core";
export class ConfirmDialogModule {
}
ConfirmDialogModule.ɵfac = function ConfirmDialogModule_Factory(t) { return new (t || ConfirmDialogModule)(); };
ConfirmDialogModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ConfirmDialogModule });
ConfirmDialogModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatDialogModule,
            MatButtonModule,
            MatProgressSpinnerModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmDialogModule, [{
        type: NgModule,
        args: [{
                declarations: [ConfirmDialogComponent],
                imports: [
                    CommonModule,
                    MatDialogModule,
                    MatButtonModule,
                    MatProgressSpinnerModule,
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ConfirmDialogModule, { declarations: [ConfirmDialogComponent], imports: [CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatProgressSpinnerModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFXOUUsTUFBTSxPQUFPLG1CQUFtQjs7c0ZBQW5CLG1CQUFtQjtxRUFBbkIsbUJBQW1CO3lFQVByQjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsZUFBZTtZQUNmLHdCQUF3QjtTQUN6Qjt1RkFFVSxtQkFBbUI7Y0FUL0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGVBQWU7b0JBQ2Ysd0JBQXdCO2lCQUN6QjthQUNGOzt3RkFDWSxtQkFBbUIsbUJBUmYsc0JBQXNCLGFBRW5DLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTtRQUNmLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbQ29uZmlybURpYWxvZ0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1EaWFsb2dNb2R1bGUge31cbiJdfQ==