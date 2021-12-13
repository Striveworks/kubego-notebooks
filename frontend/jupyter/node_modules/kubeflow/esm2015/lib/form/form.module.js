import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule, } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormSectionComponent } from './section/section.component';
import { NameNamespaceInputsComponent } from './name-namespace-inputs/name-namespace-inputs.component';
import { NameInputComponent } from './name-namespace-inputs/name-input/name-input.component';
import { IconModule } from '../icon/icon.module';
import { PositiveNumberInputComponent } from './positive-number-input/positive-number-input.component';
import { RokUrlInputComponent } from './rok-url-input/rok-url-input.component';
import { AdvancedOptionsComponent } from './advanced-options/advanced-options.component';
import { PopoverModule } from '../popover/popover.module';
import { SubmitBarComponent } from './submit-bar/submit-bar.component';
import { StepInfoComponent } from './step-info/step-info.component';
import * as i0 from "@angular/core";
export class FormModule {
}
FormModule.ɵfac = function FormModule_Factory(t) { return new (t || FormModule)(); };
FormModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FormModule });
FormModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            ReactiveFormsModule,
            MatCardModule,
            MatButtonModule,
            MatFormFieldModule,
            MatDividerModule,
            MatInputModule,
            MatTooltipModule,
            IconModule,
            MatProgressSpinnerModule,
            PopoverModule,
        ], MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTooltipModule,
        MatIconModule,
        MatDividerModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    FormSectionComponent,
                    NameNamespaceInputsComponent,
                    NameInputComponent,
                    PositiveNumberInputComponent,
                    RokUrlInputComponent,
                    AdvancedOptionsComponent,
                    SubmitBarComponent,
                    StepInfoComponent,
                ],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    MatCardModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatDividerModule,
                    MatInputModule,
                    MatTooltipModule,
                    IconModule,
                    MatProgressSpinnerModule,
                    PopoverModule,
                ],
                exports: [
                    FormSectionComponent,
                    NameNamespaceInputsComponent,
                    NameInputComponent,
                    PositiveNumberInputComponent,
                    RokUrlInputComponent,
                    AdvancedOptionsComponent,
                    SubmitBarComponent,
                    StepInfoComponent,
                    MatFormFieldModule,
                    MatInputModule,
                    MatButtonModule,
                    ReactiveFormsModule,
                    MatSelectModule,
                    MatProgressSpinnerModule,
                    MatDialogModule,
                    MatTooltipModule,
                    MatIconModule,
                    MatDividerModule,
                ],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormModule, { declarations: [FormSectionComponent,
        NameNamespaceInputsComponent,
        NameInputComponent,
        PositiveNumberInputComponent,
        RokUrlInputComponent,
        AdvancedOptionsComponent,
        SubmitBarComponent,
        StepInfoComponent], imports: [CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDividerModule,
        MatInputModule,
        MatTooltipModule,
        IconModule,
        MatProgressSpinnerModule,
        PopoverModule], exports: [FormSectionComponent,
        NameNamespaceInputsComponent,
        NameInputComponent,
        PositiveNumberInputComponent,
        RokUrlInputComponent,
        AdvancedOptionsComponent,
        SubmitBarComponent,
        StepInfoComponent,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTooltipModule,
        MatIconModule,
        MatDividerModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2Zvcm0vZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBRUwsd0JBQXdCLEdBQ3pCLE1BQU0sb0NBQW9DLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTdELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRW5FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBK0NwRSxNQUFNLE9BQU8sVUFBVTs7b0VBQVYsVUFBVTs0REFBVixVQUFVO2dFQWxDWjtZQUNQLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsVUFBVTtZQUNWLHdCQUF3QjtZQUN4QixhQUFhO1NBQ2QsRUFVQyxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHdCQUF3QjtRQUN4QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixnQkFBZ0I7dUZBR1AsVUFBVTtjQTdDdEIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixvQkFBb0I7b0JBQ3BCLDRCQUE0QjtvQkFDNUIsa0JBQWtCO29CQUNsQiw0QkFBNEI7b0JBQzVCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixhQUFhO29CQUNiLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixVQUFVO29CQUNWLHdCQUF3QjtvQkFDeEIsYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asb0JBQW9CO29CQUNwQiw0QkFBNEI7b0JBQzVCLGtCQUFrQjtvQkFDbEIsNEJBQTRCO29CQUM1QixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtvQkFDeEIsa0JBQWtCO29CQUNsQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZix3QkFBd0I7b0JBQ3hCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLGdCQUFnQjtpQkFDakI7YUFDRjs7d0ZBQ1ksVUFBVSxtQkEzQ25CLG9CQUFvQjtRQUNwQiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLDRCQUE0QjtRQUM1QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixpQkFBaUIsYUFHakIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1Ysd0JBQXdCO1FBQ3hCLGFBQWEsYUFHYixvQkFBb0I7UUFDcEIsNEJBQTRCO1FBQzVCLGtCQUFrQjtRQUNsQiw0QkFBNEI7UUFDNUIsb0JBQW9CO1FBQ3BCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2Ysd0JBQXdCO1FBQ3hCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7XG4gIE1hdFNwaW5uZXIsXG4gIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBGb3JtU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE5hbWVOYW1lc3BhY2VJbnB1dHNDb21wb25lbnQgfSBmcm9tICcuL25hbWUtbmFtZXNwYWNlLWlucHV0cy9uYW1lLW5hbWVzcGFjZS1pbnB1dHMuY29tcG9uZW50JztcbmltcG9ydCB7IE5hbWVJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vbmFtZS1uYW1lc3BhY2UtaW5wdXRzL25hbWUtaW5wdXQvbmFtZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSWNvbk1vZHVsZSB9IGZyb20gJy4uL2ljb24vaWNvbi5tb2R1bGUnO1xuaW1wb3J0IHsgUG9zaXRpdmVOdW1iZXJJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vcG9zaXRpdmUtbnVtYmVyLWlucHV0L3Bvc2l0aXZlLW51bWJlci1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm9rVXJsSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3Jvay11cmwtaW5wdXQvcm9rLXVybC1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWR2YW5jZWRPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9hZHZhbmNlZC1vcHRpb25zL2FkdmFuY2VkLW9wdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICcuLi9wb3BvdmVyL3BvcG92ZXIubW9kdWxlJztcbmltcG9ydCB7IFN1Ym1pdEJhckNvbXBvbmVudCB9IGZyb20gJy4vc3VibWl0LWJhci9zdWJtaXQtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGVwSW5mb0NvbXBvbmVudCB9IGZyb20gJy4vc3RlcC1pbmZvL3N0ZXAtaW5mby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBGb3JtU2VjdGlvbkNvbXBvbmVudCxcbiAgICBOYW1lTmFtZXNwYWNlSW5wdXRzQ29tcG9uZW50LFxuICAgIE5hbWVJbnB1dENvbXBvbmVudCxcbiAgICBQb3NpdGl2ZU51bWJlcklucHV0Q29tcG9uZW50LFxuICAgIFJva1VybElucHV0Q29tcG9uZW50LFxuICAgIEFkdmFuY2VkT3B0aW9uc0NvbXBvbmVudCxcbiAgICBTdWJtaXRCYXJDb21wb25lbnQsXG4gICAgU3RlcEluZm9Db21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIEljb25Nb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIFBvcG92ZXJNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3JtU2VjdGlvbkNvbXBvbmVudCxcbiAgICBOYW1lTmFtZXNwYWNlSW5wdXRzQ29tcG9uZW50LFxuICAgIE5hbWVJbnB1dENvbXBvbmVudCxcbiAgICBQb3NpdGl2ZU51bWJlcklucHV0Q29tcG9uZW50LFxuICAgIFJva1VybElucHV0Q29tcG9uZW50LFxuICAgIEFkdmFuY2VkT3B0aW9uc0NvbXBvbmVudCxcbiAgICBTdWJtaXRCYXJDb21wb25lbnQsXG4gICAgU3RlcEluZm9Db21wb25lbnQsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtTW9kdWxlIHt9XG4iXX0=