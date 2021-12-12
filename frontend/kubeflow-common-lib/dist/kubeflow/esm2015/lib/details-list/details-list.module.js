import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DetailsListComponent } from './details-list.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DetailsListItemComponent } from './details-list-item/details-list-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import * as i0 from "@angular/core";
export class DetailsListModule {
}
DetailsListModule.ɵfac = function DetailsListModule_Factory(t) { return new (t || DetailsListModule)(); };
DetailsListModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DetailsListModule });
DetailsListModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatDividerModule,
            MatIconModule,
            MatChipsModule,
            MatTooltipModule,
            MatButtonModule,
            MatRippleModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailsListModule, [{
        type: NgModule,
        args: [{
                declarations: [DetailsListComponent, DetailsListItemComponent],
                imports: [
                    CommonModule,
                    MatDividerModule,
                    MatIconModule,
                    MatChipsModule,
                    MatTooltipModule,
                    MatButtonModule,
                    MatRippleModule,
                ],
                exports: [DetailsListComponent, DetailsListItemComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DetailsListModule, { declarations: [DetailsListComponent, DetailsListItemComponent], imports: [CommonModule,
        MatDividerModule,
        MatIconModule,
        MatChipsModule,
        MatTooltipModule,
        MatButtonModule,
        MatRippleModule], exports: [DetailsListComponent, DetailsListItemComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZGV0YWlscy1saXN0L2RldGFpbHMtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQWV6RCxNQUFNLE9BQU8saUJBQWlCOztrRkFBakIsaUJBQWlCO21FQUFqQixpQkFBaUI7dUVBWG5CO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsZUFBZTtTQUNoQjt1RkFHVSxpQkFBaUI7Y0FiN0IsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLHdCQUF3QixDQUFDO2dCQUM5RCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsd0JBQXdCLENBQUM7YUFDMUQ7O3dGQUNZLGlCQUFpQixtQkFaYixvQkFBb0IsRUFBRSx3QkFBd0IsYUFFM0QsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZUFBZSxhQUVQLG9CQUFvQixFQUFFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgRGV0YWlsc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbHMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQgeyBEZXRhaWxzTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2RldGFpbHMtbGlzdC1pdGVtL2RldGFpbHMtbGlzdC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0UmlwcGxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0RldGFpbHNMaXN0Q29tcG9uZW50LCBEZXRhaWxzTGlzdEl0ZW1Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtEZXRhaWxzTGlzdENvbXBvbmVudCwgRGV0YWlsc0xpc3RJdGVtQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc0xpc3RNb2R1bGUge31cbiJdfQ==