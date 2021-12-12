import { Component, Input } from '@angular/core';
import { ExponentialBackoff } from '../polling/exponential-backoff';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../services/namespace.service";
import * as i2 from "../services/backend/backend.service";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common";
import * as i7 from "@angular/material/core";
function NamespaceSelectComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const namespace_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", namespace_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", namespace_r1, " ");
} }
export class NamespaceSelectComponent {
    constructor(namespaceService, backend) {
        this.namespaceService = namespaceService;
        this.backend = backend;
        this.namespaces = [];
        this.subscriptions = new Subscription();
        this.poller = new ExponentialBackoff();
    }
    ngOnInit() {
        // Keep track of the selected namespace
        const currNsSub = this.namespaceService
            .getSelectedNamespace()
            .subscribe(namespace => {
            this.currNamespace = namespace;
        });
        // Poll untill you get existing Namespaces
        const nsGetSub = this.poller.start().subscribe(() => {
            this.backend.getNamespaces(true, this.namespacesUrl).subscribe(namespaces => {
                this.namespaces = namespaces;
                if (this.currNamespace === undefined ||
                    this.currNamespace.length === 0) {
                    return;
                }
                // stop polling
                this.namespaceService.updateSelectedNamespace(this.currNamespace);
                this.poller.stop();
                this.subscriptions.unsubscribe();
            });
        });
        this.subscriptions.add(nsGetSub);
        this.subscriptions.add(currNsSub);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    namespaceChanged(namespace) {
        this.namespaceService.updateSelectedNamespace(namespace);
    }
}
NamespaceSelectComponent.ɵfac = function NamespaceSelectComponent_Factory(t) { return new (t || NamespaceSelectComponent)(i0.ɵɵdirectiveInject(i1.NamespaceService), i0.ɵɵdirectiveInject(i2.BackendService)); };
NamespaceSelectComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NamespaceSelectComponent, selectors: [["lib-namespace-select"]], inputs: { namespacesUrl: "namespacesUrl" }, decls: 7, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6442671738397537509$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_NAMESPACE_SELECT_NAMESPACE_SELECT_COMPONENT_TS_1 = goog.getMsg("Select Namespace");
        i18n_0 = MSG_EXTERNAL_6442671738397537509$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_NAMESPACE_SELECT_NAMESPACE_SELECT_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟2061ce2524f31b7754bd310c6b0ad194b563767c␟6442671738397537509:Select Namespace`;
    } return [[1, "center-flex", "space-top"], i18n_0, ["name", "namespacesSelect", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "spacer"], [3, "value"]]; }, template: function NamespaceSelectComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵi18n(3, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-select", 2);
        i0.ɵɵlistener("ngModelChange", function NamespaceSelectComponent_Template_mat_select_ngModelChange_4_listener($event) { return ctx.currNamespace = $event; })("selectionChange", function NamespaceSelectComponent_Template_mat_select_selectionChange_4_listener($event) { return ctx.namespaceChanged($event.value); });
        i0.ɵɵtemplate(5, NamespaceSelectComponent_mat_option_5_Template, 2, 2, "mat-option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.currNamespace);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.namespaces);
    } }, directives: [i3.MatFormField, i3.MatLabel, i4.MatSelect, i5.NgControlStatus, i5.NgModel, i6.NgForOf, i7.MatOption], styles: [".space-top[_ngcontent-%COMP%]{padding-top:1.5rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NamespaceSelectComponent, [{
        type: Component,
        args: [{
                selector: 'lib-namespace-select',
                templateUrl: './namespace-select.component.html',
                styleUrls: ['./namespace-select.component.scss'],
            }]
    }], function () { return [{ type: i1.NamespaceService }, { type: i2.BackendService }]; }, { namespacesUrl: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL25hbWVzcGFjZS1zZWxlY3QvbmFtZXNwYWNlLXNlbGVjdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL25hbWVzcGFjZS1zZWxlY3QvbmFtZXNwYWNlLXNlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFHbEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7OztJQ0s1QixxQ0FBcUU7SUFDbkUsWUFDRjtJQUFBLGlCQUFhOzs7SUFGb0Msb0NBQW1CO0lBQ2xFLGVBQ0Y7SUFERSw2Q0FDRjs7QURBTixNQUFNLE9BQU8sd0JBQXdCO0lBU25DLFlBQ1UsZ0JBQWtDLEVBQ2xDLE9BQXVCO1FBRHZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFQakMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUdSLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU16QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsUUFBUTtRQUNOLHVDQUF1QztRQUN2QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3BDLG9CQUFvQixFQUFFO2FBQ3RCLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUNMLDBDQUEwQztRQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixJQUNFLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUztvQkFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUMvQjtvQkFDQSxPQUFPO2lCQUNSO2dCQUNELGVBQWU7Z0JBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxTQUFpQjtRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0dBbERVLHdCQUF3QjsyRUFBeEIsd0JBQXdCOzs7OztpQkNSakIsVUFBQSxpRkFBZ0I7O1FBRnBDLDhCQUFtQztRQUNqQyxzQ0FBZ0I7UUFDZCxpQ0FBZ0I7UUFBaEIsZUFBZ0I7UUFBZ0IsaUJBQVk7UUFDNUMscUNBSUM7UUFIQyw2SkFBMkIsc0hBRVIsa0NBQThCLElBRnRCO1FBSTNCLHVGQUVhO1FBQ2YsaUJBQWE7UUFDZixpQkFBaUI7UUFDakIseUJBQTBCO1FBQzVCLGlCQUFNOztRQVZBLGVBQTJCO1FBQTNCLDJDQUEyQjtRQUlPLGVBQWE7UUFBYix3Q0FBYTs7dUZERXhDLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7Z0dBR0MsYUFBYTtrQkFEWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hbWVzcGFjZVNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL25hbWVzcGFjZS5zZXJ2aWNlJztcbmltcG9ydCB7QmFja2VuZFNlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL2JhY2tlbmQvYmFja2VuZC5zZXJ2aWNlJztcbmltcG9ydCB7RXhwb25lbnRpYWxCYWNrb2ZmfSBmcm9tICcuLi9wb2xsaW5nL2V4cG9uZW50aWFsLWJhY2tvZmYnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmFtZXNwYWNlLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYW1lc3BhY2Utc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmFtZXNwYWNlLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBOYW1lc3BhY2VTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIG5hbWVzcGFjZXNVcmw6IHN0cmluZztcblxuICBuYW1lc3BhY2VzID0gW107XG4gIGN1cnJOYW1lc3BhY2U6IHN0cmluZztcbiAgcHJpdmF0ZSBwb2xsZXI6IEV4cG9uZW50aWFsQmFja29mZjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmFtZXNwYWNlU2VydmljZTogTmFtZXNwYWNlU2VydmljZSxcbiAgICBwcml2YXRlIGJhY2tlbmQ6IEJhY2tlbmRTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLnBvbGxlciA9IG5ldyBFeHBvbmVudGlhbEJhY2tvZmYoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIEtlZXAgdHJhY2sgb2YgdGhlIHNlbGVjdGVkIG5hbWVzcGFjZVxuICAgIGNvbnN0IGN1cnJOc1N1YiA9IHRoaXMubmFtZXNwYWNlU2VydmljZVxuICAgICAgLmdldFNlbGVjdGVkTmFtZXNwYWNlKClcbiAgICAgIC5zdWJzY3JpYmUobmFtZXNwYWNlID0+IHtcbiAgICAgICAgdGhpcy5jdXJyTmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICAgICAgfSk7XG4gICAgLy8gUG9sbCB1bnRpbGwgeW91IGdldCBleGlzdGluZyBOYW1lc3BhY2VzXG4gICAgY29uc3QgbnNHZXRTdWIgPSB0aGlzLnBvbGxlci5zdGFydCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmJhY2tlbmQuZ2V0TmFtZXNwYWNlcyh0cnVlLCB0aGlzLm5hbWVzcGFjZXNVcmwpLnN1YnNjcmliZShuYW1lc3BhY2VzID0+IHtcbiAgICAgICAgdGhpcy5uYW1lc3BhY2VzID0gbmFtZXNwYWNlcztcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY3Vyck5hbWVzcGFjZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgdGhpcy5jdXJyTmFtZXNwYWNlLmxlbmd0aCA9PT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RvcCBwb2xsaW5nXG4gICAgICAgIHRoaXMubmFtZXNwYWNlU2VydmljZS51cGRhdGVTZWxlY3RlZE5hbWVzcGFjZSh0aGlzLmN1cnJOYW1lc3BhY2UpO1xuICAgICAgICB0aGlzLnBvbGxlci5zdG9wKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKG5zR2V0U3ViKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKGN1cnJOc1N1Yik7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5hbWVzcGFjZUNoYW5nZWQobmFtZXNwYWNlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWVzcGFjZVNlcnZpY2UudXBkYXRlU2VsZWN0ZWROYW1lc3BhY2UobmFtZXNwYWNlKTtcbiAgfVxufVxuIiwiPCEtLSBOYW1lc3BhY2VzIFNlbGVjdG9yIC0tPlxuPGRpdiBjbGFzcz1cImNlbnRlci1mbGV4IHNwYWNlLXRvcFwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbCBpMThuPlNlbGVjdCBOYW1lc3BhY2U8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdFxuICAgICAgWyhuZ01vZGVsKV09XCJjdXJyTmFtZXNwYWNlXCJcbiAgICAgIG5hbWU9XCJuYW1lc3BhY2VzU2VsZWN0XCJcbiAgICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwibmFtZXNwYWNlQ2hhbmdlZCgkZXZlbnQudmFsdWUpXCJcbiAgICA+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbmFtZXNwYWNlIG9mIG5hbWVzcGFjZXNcIiBbdmFsdWVdPVwibmFtZXNwYWNlXCI+XG4gICAgICAgIHt7IG5hbWVzcGFjZSB9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuPC9kaXY+XG4iXX0=