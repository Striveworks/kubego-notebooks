import { Component, Input, HostListener, Output, EventEmitter, } from '@angular/core';
import { getRokUrlError } from '../validators';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
function RokUrlInputComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 5);
} }
function RokUrlInputComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 6);
} }
export class RokUrlInputComponent {
    constructor() {
        this.mode = 'group';
        this.create = false;
        this.urlEntered = new EventEmitter();
        this.chooserId = -1;
    }
    ngOnInit() {
        // Emit an event whenever a valid url has been detected
        this.control.statusChanges
            .pipe(filter(() => this.control.valid && this.control.value !== ''))
            .subscribe(() => {
            const url = this.control.value;
            this.urlEntered.emit(url);
        });
    }
    // Chooser popup handlers
    openChooser() {
        if (this.popupChooser && !this.popupChooser.closed) {
            this.popupChooser.focus();
            return;
        }
        this.chooserId = Date.now();
        this.popupChooser = window.open(`/rok/buckets?mode=${this.mode}-chooser` +
            `&create=${this.create}` +
            `&chooser-id=${this.chooserId}`, 'Chooser', `height=500,width=600,menubar=0`);
    }
    parseRokUrlError() {
        return getRokUrlError(this.control);
    }
    onMessage(event) {
        if (typeof event.data === 'object' &&
            event.data.hasOwnProperty('chooser') &&
            event.data.hasOwnProperty('chooserId') &&
            event.data.chooserId === this.chooserId.toString()) {
            this.control.setValue(event.data.chooser);
            this.popupChooser.close();
        }
    }
}
RokUrlInputComponent.ɵfac = function RokUrlInputComponent_Factory(t) { return new (t || RokUrlInputComponent)(); };
RokUrlInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RokUrlInputComponent, selectors: [["lib-rok-url-input"]], hostBindings: function RokUrlInputComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("message", function RokUrlInputComponent_message_HostBindingHandler($event) { return ctx.onMessage($event); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { control: "control", mode: "mode", create: "create" }, outputs: { urlEntered: "urlEntered" }, decls: 10, vars: 5, consts: [["appearance", "outline", 1, "form-field-with-button", "wide"], ["matInput", "", "type", "url", 3, "formControl"], ["matSuffix", "", "matTolltip", "Choose RokURL", "type", "button", 3, "disabled", "click"], ["src", "static/assets/browse-in-rok-blue.svg", 4, "ngIf", "ngIfElse"], ["disableTpl", ""], ["src", "static/assets/browse-in-rok-blue.svg"], ["src", "static/assets/browse-in-rok-grey.svg"]], template: function RokUrlInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Rok URL");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵlistener("click", function RokUrlInputComponent_Template_button_click_4_listener() { return ctx.openChooser(); });
        i0.ɵɵtemplate(5, RokUrlInputComponent_img_5_Template, 1, 0, "img", 3);
        i0.ɵɵtemplate(6, RokUrlInputComponent_ng_template_6_Template, 1, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-error");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(7);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.control);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.control.disabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.control.enabled)("ngIfElse", _r1);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.parseRokUrlError());
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1.MatSuffix, i4.NgIf, i1.MatError], styles: [".form-field-with-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;outline:none;cursor:pointer;display:flex;align-items:center;border-radius:50%;padding:0;border:5px solid transparent}.form-field-with-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.form-field-with-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:none;cursor:default}.form-field-with-button[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{align-items:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RokUrlInputComponent, [{
        type: Component,
        args: [{
                selector: 'lib-rok-url-input',
                templateUrl: './rok-url-input.component.html',
                styleUrls: ['./rok-url-input.component.scss'],
            }]
    }], function () { return []; }, { control: [{
            type: Input
        }], mode: [{
            type: Input
        }], create: [{
            type: Input
        }], urlEntered: [{
            type: Output
        }], onMessage: [{
            type: HostListener,
            args: ['window:message', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9rLXVybC1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2Zvcm0vcm9rLXVybC1pbnB1dC9yb2stdXJsLWlucHV0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS9yb2stdXJsLWlucHV0L3Jvay11cmwtaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNBcEMseUJBR0U7OztJQUVBLHlCQUFrRDs7QURFeEQsTUFBTSxPQUFPLG9CQUFvQjtJQVMvQjtRQVBTLFNBQUksR0FBRyxPQUFPLENBQUM7UUFDZixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2QsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHMUMsY0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRVIsQ0FBQztJQUVoQixRQUFRO1FBQ04sdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYTthQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ25FLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx5QkFBeUI7SUFDbEIsV0FBVztRQUNoQixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FDN0IscUJBQXFCLElBQUksQ0FBQyxJQUFJLFVBQVU7WUFDdEMsV0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLGVBQWUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUNqQyxTQUFTLEVBQ1QsZ0NBQWdDLENBQ2pDLENBQUM7SUFDSixDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBR0QsU0FBUyxDQUFDLEtBQUs7UUFDYixJQUNFLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztZQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7WUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFDbEQ7WUFDQSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzt3RkFwRFUsb0JBQW9CO3VFQUFwQixvQkFBb0I7MkdBQXBCLHFCQUFpQjs7UUNqQjlCLHlDQUF5RTtRQUN2RSxpQ0FBVztRQUFBLHVCQUFPO1FBQUEsaUJBQVk7UUFDOUIsMkJBQXFEO1FBQ3JELGlDQU1DO1FBRkMsaUdBQVMsaUJBQWEsSUFBQztRQUd2QixxRUFHRTtRQUNGLHNIQUVjO1FBQ2hCLGlCQUFTO1FBQ1QsaUNBQVc7UUFBQSxZQUF3QjtRQUFBLGlCQUFZO1FBQ2pELGlCQUFpQjs7O1FBakJZLGVBQXVCO1FBQXZCLHlDQUF1QjtRQU1oRCxlQUE2QjtRQUE3QiwrQ0FBNkI7UUFHMUIsZUFBdUI7UUFBdkIsMENBQXVCLGlCQUFBO1FBT2pCLGVBQXdCO1FBQXhCLDRDQUF3Qjs7dUZERHhCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7c0NBRVUsT0FBTztrQkFBZixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0ksVUFBVTtrQkFBbkIsTUFBTTtZQXNDUCxTQUFTO2tCQURSLFlBQVk7bUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZ2V0Um9rVXJsRXJyb3IgfSBmcm9tICcuLi92YWxpZGF0b3JzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXJvay11cmwtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcm9rLXVybC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jvay11cmwtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUm9rVXJsSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb250cm9sOiBBYnN0cmFjdENvbnRyb2w7XG4gIEBJbnB1dCgpIG1vZGUgPSAnZ3JvdXAnO1xuICBASW5wdXQoKSBjcmVhdGUgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHVybEVudGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBwcml2YXRlIHBvcHVwQ2hvb3NlcjtcbiAgcHJpdmF0ZSBjaG9vc2VySWQgPSAtMTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gRW1pdCBhbiBldmVudCB3aGVuZXZlciBhIHZhbGlkIHVybCBoYXMgYmVlbiBkZXRlY3RlZFxuICAgIHRoaXMuY29udHJvbC5zdGF0dXNDaGFuZ2VzXG4gICAgICAucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5jb250cm9sLnZhbGlkICYmIHRoaXMuY29udHJvbC52YWx1ZSAhPT0gJycpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY29udHJvbC52YWx1ZTtcbiAgICAgICAgdGhpcy51cmxFbnRlcmVkLmVtaXQodXJsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLy8gQ2hvb3NlciBwb3B1cCBoYW5kbGVyc1xuICBwdWJsaWMgb3BlbkNob29zZXIoKSB7XG4gICAgaWYgKHRoaXMucG9wdXBDaG9vc2VyICYmICF0aGlzLnBvcHVwQ2hvb3Nlci5jbG9zZWQpIHtcbiAgICAgIHRoaXMucG9wdXBDaG9vc2VyLmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2hvb3NlcklkID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnBvcHVwQ2hvb3NlciA9IHdpbmRvdy5vcGVuKFxuICAgICAgYC9yb2svYnVja2V0cz9tb2RlPSR7dGhpcy5tb2RlfS1jaG9vc2VyYCArXG4gICAgICAgIGAmY3JlYXRlPSR7dGhpcy5jcmVhdGV9YCArXG4gICAgICAgIGAmY2hvb3Nlci1pZD0ke3RoaXMuY2hvb3NlcklkfWAsXG4gICAgICAnQ2hvb3NlcicsXG4gICAgICBgaGVpZ2h0PTUwMCx3aWR0aD02MDAsbWVudWJhcj0wYCxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHBhcnNlUm9rVXJsRXJyb3IoKSB7XG4gICAgcmV0dXJuIGdldFJva1VybEVycm9yKHRoaXMuY29udHJvbCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6bWVzc2FnZScsIFsnJGV2ZW50J10pXG4gIG9uTWVzc2FnZShldmVudCkge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSAnb2JqZWN0JyAmJlxuICAgICAgZXZlbnQuZGF0YS5oYXNPd25Qcm9wZXJ0eSgnY2hvb3NlcicpICYmXG4gICAgICBldmVudC5kYXRhLmhhc093blByb3BlcnR5KCdjaG9vc2VySWQnKSAmJlxuICAgICAgZXZlbnQuZGF0YS5jaG9vc2VySWQgPT09IHRoaXMuY2hvb3NlcklkLnRvU3RyaW5nKClcbiAgICApIHtcbiAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZShldmVudC5kYXRhLmNob29zZXIpO1xuICAgICAgdGhpcy5wb3B1cENob29zZXIuY2xvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNsYXNzPVwiZm9ybS1maWVsZC13aXRoLWJ1dHRvbiB3aWRlXCI+XG4gIDxtYXQtbGFiZWw+Um9rIFVSTDwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cInVybFwiIFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgLz5cbiAgPGJ1dHRvblxuICAgIG1hdFN1ZmZpeFxuICAgIG1hdFRvbGx0aXA9XCJDaG9vc2UgUm9rVVJMXCJcbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAoY2xpY2spPVwib3BlbkNob29zZXIoKVwiXG4gICAgW2Rpc2FibGVkXT1cImNvbnRyb2wuZGlzYWJsZWRcIlxuICA+XG4gICAgPGltZ1xuICAgICAgKm5nSWY9XCJjb250cm9sLmVuYWJsZWQ7IGVsc2UgZGlzYWJsZVRwbFwiXG4gICAgICBzcmM9XCJzdGF0aWMvYXNzZXRzL2Jyb3dzZS1pbi1yb2stYmx1ZS5zdmdcIlxuICAgIC8+XG4gICAgPG5nLXRlbXBsYXRlICNkaXNhYmxlVHBsPlxuICAgICAgPGltZyBzcmM9XCJzdGF0aWMvYXNzZXRzL2Jyb3dzZS1pbi1yb2stZ3JleS5zdmdcIiAvPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvYnV0dG9uPlxuICA8bWF0LWVycm9yPnt7IHBhcnNlUm9rVXJsRXJyb3IoKSB9fTwvbWF0LWVycm9yPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==