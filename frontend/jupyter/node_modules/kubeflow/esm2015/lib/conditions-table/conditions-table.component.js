import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { STATUS_TYPE } from '../resource-table/status/types';
import { generateConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "../resource-table/resource-table.component";
export class ConditionsTableComponent {
    constructor() {
        this.conditionsPrv = [];
        this.config = generateConfig();
    }
    set title(t) {
        this.config.title = t;
    }
    set conditions(cs) {
        this.conditionsPrv = JSON.parse(JSON.stringify(cs));
        // parse the status. It should be ready only if it was True
        for (const condition of this.conditionsPrv) {
            condition.statusPhase = STATUS_TYPE.WARNING;
            if (condition.status === 'True') {
                condition.statusPhase = STATUS_TYPE.READY;
            }
            condition.statusMessage = condition.status;
        }
    }
    get conditions() {
        return this.conditionsPrv;
    }
    conditionsTrackByFn(index, c) {
        return `${c.type}/${c.lastTransitionTime}`;
    }
}
ConditionsTableComponent.ɵfac = function ConditionsTableComponent_Factory(t) { return new (t || ConditionsTableComponent)(); };
ConditionsTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConditionsTableComponent, selectors: [["lib-conditions-table"]], inputs: { title: "title", conditions: "conditions" }, decls: 1, vars: 3, consts: [[3, "config", "data", "trackByFn"]], template: function ConditionsTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "lib-resource-table", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("config", ctx.config)("data", ctx.conditions)("trackByFn", ctx.conditionsTrackByFn);
    } }, directives: [i1.ResourceTableComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConditionsTableComponent, [{
        type: Component,
        args: [{
                selector: 'lib-conditions-table',
                templateUrl: './conditions-table.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styleUrls: [],
            }]
    }], null, { title: [{
            type: Input
        }], conditions: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZGl0aW9ucy10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2NvbmRpdGlvbnMtdGFibGUvY29uZGl0aW9ucy10YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2NvbmRpdGlvbnMtdGFibGUvY29uZGl0aW9ucy10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBUTFDLE1BQU0sT0FBTyx3QkFBd0I7SUFOckM7UUFPVSxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbkMsV0FBTSxHQUFHLGNBQWMsRUFBRSxDQUFDO0tBNkJsQztJQTNCQyxJQUNJLEtBQUssQ0FBQyxDQUFTO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFDSSxVQUFVLENBQUMsRUFBaUI7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRCwyREFBMkQ7UUFDM0QsS0FBSyxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUM1QyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO2dCQUMvQixTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7YUFDM0M7WUFFRCxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxLQUFhLEVBQUUsQ0FBWTtRQUNwRCxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM3QyxDQUFDOztnR0E5QlUsd0JBQXdCOzJFQUF4Qix3QkFBd0I7UUNYckMsd0NBSXNCOztRQUhwQixtQ0FBaUIsd0JBQUEsc0NBQUE7O3VGRFVOLHdCQUF3QjtjQU5wQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxFQUFFO2FBQ2Q7Z0JBTUssS0FBSztrQkFEUixLQUFLO1lBTUYsVUFBVTtrQkFEYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmRpdGlvbiwgQ29uZGl0aW9uSVIgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFNUQVRVU19UWVBFIH0gZnJvbSAnLi4vcmVzb3VyY2UtdGFibGUvc3RhdHVzL3R5cGVzJztcbmltcG9ydCB7IGdlbmVyYXRlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29uZGl0aW9ucy10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25kaXRpb25zLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbnNUYWJsZUNvbXBvbmVudCB7XG4gIHByaXZhdGUgY29uZGl0aW9uc1BydjogQ29uZGl0aW9uSVJbXSA9IFtdO1xuICBwdWJsaWMgY29uZmlnID0gZ2VuZXJhdGVDb25maWcoKTtcblxuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodDogc3RyaW5nKSB7XG4gICAgdGhpcy5jb25maWcudGl0bGUgPSB0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmRpdGlvbnMoY3M6IENvbmRpdGlvbklSW10pIHtcbiAgICB0aGlzLmNvbmRpdGlvbnNQcnYgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNzKSk7XG5cbiAgICAvLyBwYXJzZSB0aGUgc3RhdHVzLiBJdCBzaG91bGQgYmUgcmVhZHkgb25seSBpZiBpdCB3YXMgVHJ1ZVxuICAgIGZvciAoY29uc3QgY29uZGl0aW9uIG9mIHRoaXMuY29uZGl0aW9uc1Bydikge1xuICAgICAgY29uZGl0aW9uLnN0YXR1c1BoYXNlID0gU1RBVFVTX1RZUEUuV0FSTklORztcbiAgICAgIGlmIChjb25kaXRpb24uc3RhdHVzID09PSAnVHJ1ZScpIHtcbiAgICAgICAgY29uZGl0aW9uLnN0YXR1c1BoYXNlID0gU1RBVFVTX1RZUEUuUkVBRFk7XG4gICAgICB9XG5cbiAgICAgIGNvbmRpdGlvbi5zdGF0dXNNZXNzYWdlID0gY29uZGl0aW9uLnN0YXR1cztcbiAgICB9XG4gIH1cblxuICBnZXQgY29uZGl0aW9ucygpOiBDb25kaXRpb25JUltdIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25zUHJ2O1xuICB9XG5cbiAgcHVibGljIGNvbmRpdGlvbnNUcmFja0J5Rm4oaW5kZXg6IG51bWJlciwgYzogQ29uZGl0aW9uKSB7XG4gICAgcmV0dXJuIGAke2MudHlwZX0vJHtjLmxhc3RUcmFuc2l0aW9uVGltZX1gO1xuICB9XG59XG4iLCI8bGliLXJlc291cmNlLXRhYmxlXG4gIFtjb25maWddPVwiY29uZmlnXCJcbiAgW2RhdGFdPVwiY29uZGl0aW9uc1wiXG4gIFt0cmFja0J5Rm5dPVwiY29uZGl0aW9uc1RyYWNrQnlGblwiXG4+PC9saWItcmVzb3VyY2UtdGFibGU+XG4iXX0=