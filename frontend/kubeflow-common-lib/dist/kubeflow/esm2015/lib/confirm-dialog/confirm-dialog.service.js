import { Injectable } from '@angular/core';
import { ConfirmDialogModule } from './confirm-dialog.module';
import { ConfirmDialogComponent } from './dialog/dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class ConfirmDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    open(rsrcName, config) {
        return this.dialog.open(ConfirmDialogComponent, {
            width: config.width || 'fit-content',
            data: config,
        });
    }
}
ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(i0.ɵɵinject(i1.MatDialog)); };
ConfirmDialogService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfirmDialogService, factory: ConfirmDialogService.ɵfac, providedIn: ConfirmDialogModule });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmDialogService, [{
        type: Injectable,
        args: [{
                providedIn: ConfirmDialogModule,
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7QUFNbkUsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUVsQyxJQUFJLENBQUMsUUFBZ0IsRUFBRSxNQUFvQjtRQUNoRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzlDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUFJLGFBQWE7WUFDcEMsSUFBSSxFQUFFLE1BQU07U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDOzt3RkFSVSxvQkFBb0I7MEVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0IsbUJBRm5CLG1CQUFtQjt1RkFFcEIsb0JBQW9CO2NBSGhDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsbUJBQW1CO2FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZ01vZHVsZSB9IGZyb20gJy4vY29uZmlybS1kaWFsb2cubW9kdWxlJztcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dDb25maWcgfSBmcm9tICcuL3R5cGVzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBDb25maXJtRGlhbG9nTW9kdWxlLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtRGlhbG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgcHVibGljIG9wZW4ocnNyY05hbWU6IHN0cmluZywgY29uZmlnOiBEaWFsb2dDb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2cub3BlbihDb25maXJtRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICB3aWR0aDogY29uZmlnLndpZHRoIHx8ICdmaXQtY29udGVudCcsXG4gICAgICBkYXRhOiBjb25maWcsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==