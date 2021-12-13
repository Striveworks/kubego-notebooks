import '@angular/localize/init';
import * as i0 from '@angular/core';
import { Injectable, Component, Inject, Input, NgModule, ViewEncapsulation, HostBinding, HostListener, TemplateRef, ComponentRef, Directive, Pipe, ChangeDetectionStrategy, EventEmitter, Output, ViewChild } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/forms';
import { FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import * as i1$2 from '@angular/common/http';
import { HttpErrorResponse, HttpClientModule, HttpResponse, HttpHeaders, HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as i1$3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { ReplaySubject, timer, interval, BehaviorSubject, fromEvent, throwError, Subscription, Subject, of } from 'rxjs';
import { catchError, map, take, switchMap, filter, tap } from 'rxjs/operators';
import * as i1 from '@angular/material/snack-bar';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule } from '@angular/material/snack-bar';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i7 from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import { get } from 'lodash';
import * as i2$2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i2$6 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i1$6 from '@angular/material/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import * as i3$1 from '@angular/material/tooltip';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i1$4 from '@angular/cdk/overlay';
import { OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import * as i2$3 from '@angular/cdk/portal';
import { TemplatePortal, ComponentPortal, PortalModule } from '@angular/cdk/portal';
import * as i2$4 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i1$5 from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { parse, isEqual, setHours, setMinutes, setSeconds, distanceInWords, differenceInSeconds } from 'date-fns';
import memoize from 'lodash-es/memoize';
import * as i2$5 from '@angular/cdk/clipboard';
import * as i6 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i10 from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { faCogs, faHdd, faBook, faMicrochip, faLaptopCode, faLink, faSlidersH, faBullseye, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import * as i1$7 from '@angular/material/dialog';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i2$7 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';

const defaultConfig = {
    retries: 1,
    interval: 1000,
    maxInterval: 16000,
};
class ExponentialBackoff {
    constructor(config = defaultConfig) {
        const conf = Object.assign(Object.assign({}, defaultConfig), config);
        this.retries = conf.retries;
        this.interval = conf.interval;
        this.maxInterval = conf.maxInterval;
        this.poller = new ReplaySubject(1);
        this.n = 0;
        this.remainingTries = this.retries + 1;
        this.currInterval = this.interval;
    }
    start() {
        // Reset the shceduler
        if (this.emitter) {
            this.emitter.unsubscribe();
        }
        // Start the Exponential Backoff. All the logic is in iterate()
        this.emitter = timer(0, this.interval).subscribe(() => {
            this.iterate();
        });
        return this.poller;
    }
    iterate() {
        // Emit a new value
        this.n++;
        this.poller.next(this.n);
        // Cancel the previous subscription and reduce the retries
        // If no more retries, then double the interval
        this.emitter.unsubscribe();
        this.remainingTries--;
        if (this.remainingTries === 0) {
            this.remainingTries = this.retries;
            this.currInterval = Math.min(this.currInterval * 2, this.maxInterval);
        }
        this.emitter = interval(this.currInterval).subscribe(() => {
            this.iterate();
        });
    }
    reset() {
        this.n = 0;
        this.currInterval = this.interval;
        this.remainingTries = this.retries + 1;
        this.start();
    }
    stop() {
        if (this.emitter) {
            this.emitter.unsubscribe();
        }
    }
    getPoller() {
        return this.poller;
    }
}

var DashboardState;
(function (DashboardState) {
    DashboardState[DashboardState["Connecting"] = 0] = "Connecting";
    DashboardState[DashboardState["Connected"] = 1] = "Connected";
    DashboardState[DashboardState["Disconnected"] = 2] = "Disconnected";
})(DashboardState || (DashboardState = {}));

class NamespaceService {
    constructor() {
        // Observable string sources
        this.selectedNamespaceSource = new ReplaySubject(1);
        this.dashboardConnectedSource = new BehaviorSubject(DashboardState.Connecting);
        // Observable string streams
        this.selectedNamespace$ = this.selectedNamespaceSource.asObservable();
        this.dashboardConnected$ = this.dashboardConnectedSource.asObservable();
        fromEvent(window, 'load').subscribe(_ => {
            if (window.centraldashboard &&
                window.centraldashboard.CentralDashboardEventHandler) {
                // Init method will invoke the callback with the event handler instance
                // and a boolean indicating whether the page is iframed or not
                window.centraldashboard.CentralDashboardEventHandler.init((cdeh, isIframed) => {
                    // Binds a callback that gets invoked anytime the Dashboard's
                    // namespace is changed
                    cdeh.onNamespaceSelected = this.updateSelectedNamespace.bind(this);
                });
                this.dashboardConnectedSource.next(DashboardState.Connected);
                return;
            }
            this.dashboardConnectedSource.next(DashboardState.Disconnected);
            if (this.currNamespace === undefined) {
                this.updateSelectedNamespace('kubeflow-user');
            }
        });
    }
    // GETers
    getSelectedNamespace() {
        return this.selectedNamespace$;
    }
    // Service message commands
    updateSelectedNamespace(namespace) {
        if (namespace.length !== 0) {
            this.currNamespace = namespace;
            this.selectedNamespaceSource.next(namespace);
        }
    }
    dashboardConnected() {
        return (window.parent.location.pathname !== window.location.pathname &&
            window.centraldashboard);
    }
}
NamespaceService.ɵfac = function NamespaceService_Factory(t) { return new (t || NamespaceService)(); };
NamespaceService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NamespaceService, factory: NamespaceService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NamespaceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

var SnackType;
(function (SnackType) {
    SnackType[SnackType["Success"] = 0] = "Success";
    SnackType[SnackType["Error"] = 1] = "Error";
    SnackType[SnackType["Warning"] = 2] = "Warning";
    SnackType[SnackType["Info"] = 3] = "Info";
})(SnackType || (SnackType = {}));

const _c2$1 = function (a0) { return [a0, "pad"]; };
class SnackBarComponent {
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
    get icon() {
        switch (this.data.snackType) {
            case SnackType.Success:
                return 'done';
            case SnackType.Error:
                return 'clear';
            case SnackType.Warning:
                return 'warning';
            case SnackType.Info:
                return 'info';
            default:
                return 'warning';
        }
    }
    dismiss() {
        this.snackBarRef.dismiss();
    }
}
SnackBarComponent.ɵfac = function SnackBarComponent_Factory(t) { return new (t || SnackBarComponent)(i0.ɵɵdirectiveInject(i1.MatSnackBarRef), i0.ɵɵdirectiveInject(MAT_SNACK_BAR_DATA)); };
SnackBarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SnackBarComponent, selectors: [["lib-snack-bar"]], decls: 7, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1808188406576936132$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_SNACK_BAR_COMPONENT_SNACK_BAR_COMPONENT_TS_1 = goog.getMsg("DISMISS");
        i18n_0 = MSG_EXTERNAL_1808188406576936132$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_SNACK_BAR_COMPONENT_SNACK_BAR_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟0c0be57aaf30414531e79157a45e0fc3fd6b637b␟1808188406576936132:DISMISS`;
    } return [[1, "snack-container"], [3, "ngClass"], ["mat-button", "", "color", "accent", 3, "click"], i18n_0]; }, template: function SnackBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-icon", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "span");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function SnackBarComponent_Template_button_click_5_listener() { return ctx.dismiss(); });
        i0.ɵɵi18n(6, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c2$1, ctx.icon));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.icon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.data.msg);
    } }, directives: [i2.MatIcon, i1$1.NgClass, i2$1.MatButton], styles: [".snack-container[_ngcontent-%COMP%]{display:flex;align-items:center}.pad[_ngcontent-%COMP%]{margin-right:10px}.done[_ngcontent-%COMP%]{color:green}.clear[_ngcontent-%COMP%]{color:red}.warning[_ngcontent-%COMP%]{color:orange}span[_ngcontent-%COMP%]{width:90%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarComponent, [{
        type: Component,
        args: [{
                selector: 'lib-snack-bar',
                templateUrl: './snack-bar.component.html',
                styleUrls: ['./snack-bar.component.scss'],
            }]
    }], function () { return [{ type: i1.MatSnackBarRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_SNACK_BAR_DATA]
            }] }]; }, null); })();

class SnackBarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.dialogState = { shown: false, msg: '' };
    }
    show(message, type, dur = 8000) {
        return this.snackBar.openFromComponent(SnackBarComponent, {
            duration: dur,
            data: { msg: message, snackType: type },
        });
    }
    close() {
        this.dialogState.shown = false;
        this.snackBar.dismiss();
    }
    open(msg, type, time = 20000) {
        if (this.dialogState.shown && this.dialogState.msg === msg) {
            return;
        }
        this.dialogState.shown = true;
        this.dialogState.msg = msg;
        this.show(msg, type, time)
            .afterDismissed()
            .subscribe(() => {
            this.dialogState.shown = false;
            this.dialogState.msg = '';
        });
    }
}
SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(i0.ɵɵinject(i1.MatSnackBar)); };
SnackBarService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();

class BackendService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.apiUrl = '';
    }
    // GETers
    getUsername() {
        const url = `info`;
        return this.http.get(url).pipe(catchError(error => this.handleError(error, false)), map((data) => data.user));
    }
    getNamespaces(showSnackBar = true, url) {
        return this.http.get(url ? url : 'api/namespaces').pipe(catchError(error => this.handleError(error, showSnackBar)), map((data) => data.namespaces
            ? data.namespaces
            : data));
    }
    getStorageClasses(showSnackBar = true) {
        // Get existing PVCs in a namespace
        const url = `api/storageclasses`;
        return this.http.get(url).pipe(catchError(error => this.handleError(error, showSnackBar)), map((data) => {
            return data.storageClasses;
        }));
    }
    getDefaultStorageClass(showSnackBar = true) {
        const url = `api/storageclasses/default`;
        return this.http.get(url).pipe(catchError(error => this.handleError(error, showSnackBar)), map((data) => {
            return data.defaultStorageClass;
        }));
    }
    // ---------------------------Error Handling---------------------------------
    getBackendErrorLog(error) {
        if (error.error === null) {
            return error.message;
        }
        else {
            // Show the message the backend has sent
            return error.error.log;
        }
    }
    getErrorMessage(error) {
        if (typeof error === 'string') {
            return error;
        }
        if (error instanceof HttpErrorResponse) {
            if (this.getBackendErrorLog(error) !== undefined) {
                return this.getBackendErrorLog(error);
            }
            return `${error.status}: ${error.message}`;
        }
        if (error instanceof ErrorEvent) {
            return error.message;
        }
        return `Unexpected error encountered`;
    }
    getSnackErrorMessage(error) {
        if (typeof error === 'string') {
            return $localize `An error occurred: ${error}`;
        }
        if (error.error instanceof ErrorEvent) {
            return $localize `Client error: ${error.error.message}`;
        }
        if (error instanceof HttpErrorResponse) {
            // In case of status code 0 or negative, Http module couldn't
            // connect to the backend
            if (error.status <= 0) {
                return $localize `Could not connect to the backend.`;
            }
            return `[${error.status}] ${this.getBackendErrorLog(error)}\n${error.url}`;
        }
        if (error instanceof ErrorEvent) {
            return error.message;
        }
        return $localize `Unexpected error encountered`;
    }
    handleError(error, showSnackBar = true) {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(error);
        if (showSnackBar) {
            this.snackBar.open(this.getSnackErrorMessage(error), SnackType.Error);
        }
        return throwError(this.getErrorMessage(error));
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(i0.ɵɵinject(i1$2.HttpClient), i0.ɵɵinject(SnackBarService)); };
BackendService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BackendService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1$2.HttpClient }, { type: SnackBarService }]; }, null); })();

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
class NamespaceSelectComponent {
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
NamespaceSelectComponent.ɵfac = function NamespaceSelectComponent_Factory(t) { return new (t || NamespaceSelectComponent)(i0.ɵɵdirectiveInject(NamespaceService), i0.ɵɵdirectiveInject(BackendService)); };
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
    } }, directives: [i1$3.MatFormField, i1$3.MatLabel, i4.MatSelect, i3.NgControlStatus, i3.NgModel, i1$1.NgForOf, i7.MatOption], styles: [".space-top[_ngcontent-%COMP%]{padding-top:1.5rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NamespaceSelectComponent, [{
        type: Component,
        args: [{
                selector: 'lib-namespace-select',
                templateUrl: './namespace-select.component.html',
                styleUrls: ['./namespace-select.component.scss'],
            }]
    }], function () { return [{ type: NamespaceService }, { type: BackendService }]; }, { namespacesUrl: [{
            type: Input
        }] }); })();

class SnackBarModule {
}
SnackBarModule.ɵfac = function SnackBarModule_Factory(t) { return new (t || SnackBarModule)(); };
SnackBarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SnackBarModule });
SnackBarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule, MatButtonModule, MatSnackBarModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, MatIconModule, MatButtonModule, MatSnackBarModule],
                declarations: [SnackBarComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SnackBarModule, { declarations: [SnackBarComponent], imports: [CommonModule, MatIconModule, MatButtonModule, MatSnackBarModule] }); })();

class NamespaceSelectModule {
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

var TABLE_THEME;
(function (TABLE_THEME) {
    TABLE_THEME["CARD"] = "card";
    TABLE_THEME["FLAT"] = "flat";
})(TABLE_THEME || (TABLE_THEME = {}));
// Event type that will be emitted each time a button is pressed on the UI
class ActionEvent {
    constructor(action, data) {
        this.action = action;
        this.data = data;
    }
}

class ActionListValue {
    constructor(actions) {
        this.actions = actions;
    }
}

class ActionButtonValue {
    constructor(config) {
        this.defaultValues = {
            name: '',
            tooltip: '',
            color: '',
            field: '',
            text: '',
        };
        const { name, tooltip, color, field, text } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.name = name;
        this.tooltip = tooltip;
        this.color = color;
        this.field = field;
        this.text = text;
    }
}

class ActionIconValue {
    constructor(config) {
        this.defaultValues = {
            name: '',
            tooltip: '',
            tooltipInit: '',
            tooltipReady: '',
            color: '',
            field: '',
            iconInit: '',
            iconReady: '',
        };
        const { name, tooltip, tooltipInit, tooltipReady, color, field, iconInit, iconReady, } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.name = name;
        this.tooltip = tooltip;
        this.tooltipInit = tooltipInit;
        this.tooltipReady = tooltipReady;
        this.color = color;
        this.field = field;
        this.iconInit = iconInit;
        this.iconReady = iconReady;
        if (iconInit === '') {
            this.iconInit = iconReady;
        }
    }
}

class ChipsListValue {
    constructor(config) {
        this.defaultValues = {
            field: '',
            noValueText: 'No items',
            maxVisibleChips: 3,
        };
        const { field, valueFn, noValueText, maxVisibleChips } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.field = field;
        this.valueFn = valueFn;
        this.noValueText = noValueText;
        this.maxVisibleChips = maxVisibleChips;
    }
    getChips(row) {
        if (this.valueFn) {
            return this.valueFn(row);
        }
        return get(row, this.field);
    }
}

class ComponentValue {
    constructor(config) {
        const { component } = config;
        this.component = component;
    }
}

class DateTimeValue {
    constructor(config) {
        this.defaultValues = {
            field: '',
        };
        const { field } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.field = field;
    }
    getValue(row) {
        return get(row, this.field);
    }
}

class MenuValue {
    constructor(config) {
        this.defaultValues = {
            field: '',
            menuIcon: 'more_vert',
            itemsIcon: '',
            showTooltip: true,
        };
        const { field, menuIcon, itemsIcon, showTooltip } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.field = field;
        this.menuIcon = menuIcon;
        this.itemsIcon = itemsIcon;
        this.showTooltip = showTooltip;
    }
    getItems(row) {
        return get(row, this.field);
    }
}

// Single Text field
var TRUNCATE_TEXT_SIZE;
(function (TRUNCATE_TEXT_SIZE) {
    TRUNCATE_TEXT_SIZE["NO_TRUNCATE"] = "none";
    TRUNCATE_TEXT_SIZE["SMALL"] = "text-small";
    TRUNCATE_TEXT_SIZE["MEDIUM"] = "text-medium";
    TRUNCATE_TEXT_SIZE["LARGE"] = "text-large";
})(TRUNCATE_TEXT_SIZE || (TRUNCATE_TEXT_SIZE = {}));
class PropertyValue {
    constructor(config) {
        this.defaultValues = {
            field: '',
            tooltipField: '',
            popoverField: '',
            truncate: TRUNCATE_TEXT_SIZE.NO_TRUNCATE,
            isLink: false,
        };
        const { field, valueFn, tooltipField, popoverField, truncate, isLink } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.field = field;
        this.valueFn = valueFn;
        this.tooltipField = tooltipField;
        this.popoverField = popoverField;
        this.truncate = truncate;
        this.isLink = isLink;
    }
    getClasses() {
        const classes = [];
        if (this.isLink) {
            classes.push('link');
        }
        if (this.truncate === TRUNCATE_TEXT_SIZE.NO_TRUNCATE) {
            return classes;
        }
        classes.push(...['truncate', this.truncate]);
        return classes;
    }
    getTooltip(row) {
        if (this.tooltipField.length === 0) {
            return '';
        }
        return get(row, this.tooltipField);
    }
    getPopover(row) {
        if (this.popoverField.length === 0) {
            return '';
        }
        return get(row, this.popoverField);
    }
    getValue(row) {
        if (this.valueFn) {
            return this.valueFn(row);
        }
        return get(row, this.field);
    }
}

var STATUS_TYPE;
(function (STATUS_TYPE) {
    STATUS_TYPE["READY"] = "ready";
    STATUS_TYPE["WAITING"] = "waiting";
    STATUS_TYPE["WARNING"] = "warning";
    STATUS_TYPE["ERROR"] = "error";
    STATUS_TYPE["UNAVAILABLE"] = "unavailable";
    STATUS_TYPE["UNINITIALIZED"] = "uninitialized";
    STATUS_TYPE["TERMINATING"] = "terminating";
    STATUS_TYPE["STOPPED"] = "stopped";
})(STATUS_TYPE || (STATUS_TYPE = {}));

class StatusValue {
    constructor(config = {}) {
        this.defaultValues = {
            field: 'status',
            fieldPhase: '',
            fieldMessage: '',
            fieldState: '',
        };
        const { field, valueFn, fieldPhase, fieldMessage, fieldState } = Object.assign(Object.assign({}, this.defaultValues), config);
        this.field = field;
        this.valueFn = valueFn;
        this.fieldPhase = fieldPhase;
        this.fieldMessage = fieldMessage;
        this.fieldState = fieldState;
    }
    getPhase(row) {
        if (this.valueFn) {
            return this.valueFn(row).phase;
        }
        if (!this.fieldPhase) {
            return get(row, this.field + '.phase');
        }
        return get(row, this.fieldPhase);
    }
    getState(row) {
        if (this.valueFn) {
            return this.valueFn(row).state;
        }
        if (!this.fieldPhase) {
            return get(row, this.field + '.state');
        }
        return get(row, this.fieldState);
    }
    getMessage(row) {
        if (this.valueFn) {
            return this.valueFn(row).message;
        }
        if (!this.fieldPhase) {
            return get(row, this.field + '.message');
        }
        return get(row, this.fieldMessage);
    }
    getIcon(row) {
        switch (this.getPhase(row)) {
            case STATUS_TYPE.READY: {
                return 'check_circle';
            }
            case STATUS_TYPE.READY: {
                return 'warning';
            }
            case STATUS_TYPE.UNAVAILABLE: {
                return 'timelapse';
            }
            case STATUS_TYPE.ERROR: {
                return 'error';
            }
            default: {
                return 'warning';
            }
        }
    }
    getCssClasses(row) {
        return [this.getPhase(row), 'status'];
    }
    getTooltip(row) {
        return this.getMessage(row);
    }
}

class TemplateValue {
    constructor(config = { ref: undefined }) {
        const { ref } = config;
        this.ref = ref;
    }
}

/* This code was developed by @tasos-ale */
function PopoverComponent_ng_template_3_Template(rf, ctx) { }
class PopoverTemplatePortal extends TemplatePortal {
    constructor(template, context, viewContainerRef) {
        super(template, viewContainerRef, context);
    }
}
class PopoverComponent {
    constructor(vcr, changeDetectorRef) {
        this.vcr = vcr;
        this.changeDetectorRef = changeDetectorRef;
        this.classListPrv = ['lib-popover'];
        this.visibilityPrv = 'hidden';
        this.message = '';
        this.onHide = new Subject();
    }
    get classList() {
        return this.classListPrv;
    }
    set classList(list) {
        this.classListPrv = ['lib-popover', ...list];
    }
    get hostClass() {
        return this.classList.join(' ');
    }
    set template(v) {
        this.tplPortal = v;
    }
    OnMouseEnter() {
        if (this.hideTimeoutId) {
            clearTimeout(this.hideTimeoutId);
        }
    }
    OnMouseLeave() {
        this.hide(0);
    }
    show(delay) {
        if (this.hideTimeoutId) {
            window.clearTimeout(this.hideTimeoutId);
        }
        this.showTimeoutId = window.setTimeout(() => {
            this.visibilityPrv = 'visible';
            // Mark for check in case the parent has set ChangeDetectionStrategy
            // to OnPush.
            this.markForCheck();
        }, delay);
    }
    hide(delay) {
        if (this.showTimeoutId) {
            window.clearTimeout(this.showTimeoutId);
        }
        this.hideTimeoutId = window.setTimeout(() => {
            // TODO: When we start to use @angular/animations move the
            // "onHide.next()" method to animation's finished callback
            this.onHide.next();
            this.visibilityPrv = 'hidden';
            // Mark for check in case the parent has set ChangeDetectionStrategy
            // to OnPush.
            this.markForCheck();
        }, delay);
    }
    afterHidden() {
        return this.onHide.asObservable();
    }
    markForCheck() {
        this.changeDetectorRef.markForCheck();
    }
}
PopoverComponent.ɵfac = function PopoverComponent_Factory(t) { return new (t || PopoverComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PopoverComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PopoverComponent, selectors: [["lib-popover"]], hostVars: 4, hostBindings: function PopoverComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function PopoverComponent_mouseenter_HostBindingHandler() { return ctx.OnMouseEnter(); })("mouseleave", function PopoverComponent_mouseleave_HostBindingHandler() { return ctx.OnMouseLeave(); });
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.hostClass);
        i0.ɵɵstyleProp("visibility", ctx.visibilityPrv);
    } }, decls: 4, vars: 2, consts: [[1, "mat-typography"], [1, "popover-card"], [3, "cdkPortalOutlet"]], template: function PopoverComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-card", 1);
        i0.ɵɵtext(2);
        i0.ɵɵtemplate(3, PopoverComponent_ng_template_3_Template, 0, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.message, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkPortalOutlet", ctx.tplPortal);
    } }, directives: [i2$2.MatCard, i2$3.CdkPortalOutlet], styles: [".lib-popover{display:block;visibility:hidden}.lib-popover .popover-card{padding:12px}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverComponent, [{
        type: Component,
        args: [{
                selector: 'lib-popover',
                templateUrl: './popover.component.html',
                styleUrls: ['./popover.scss'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }]; }, { hostClass: [{
            type: HostBinding,
            args: ['class']
        }], visibilityPrv: [{
            type: HostBinding,
            args: ['style.visibility']
        }], OnMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], OnMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

/* This code was developed by @tasos-ale */
class PopoverDirective {
    constructor(overlay, viewContainerRef, elemRef, ngZone, scrollDispatcher) {
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.elemRef = elemRef;
        this.ngZone = ngZone;
        this.scrollDispatcher = scrollDispatcher;
        this.libPopoverContext = {};
        this.libPopoverPosition = 'below';
        this.libPopoverClass = [];
        this.disabled = false;
        this.libPopoverShowDelay = 100;
        this.libPopoverHideDelay = 100;
    }
    get libPopover() {
        return this.libPopoverPrv;
    }
    set libPopover(v) {
        this.checkAndUpdate(this.libPopoverPrv, v);
        this.libPopoverPrv = v;
    }
    OnMouseEnter() {
        if (this.disabled || !this.libPopover) {
            return;
        }
        this.show();
    }
    OnMouseLeave() {
        this.hide();
    }
    ngOnDestroy() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.popoverInstance = null;
        }
    }
    show(delay = this.libPopoverShowDelay) {
        if (!this.popoverInstance) {
            this.createPopover();
        }
        if (typeof this.libPopover === 'string') {
            this.popoverInstance.message = this.libPopover;
        }
        else if (this.libPopover instanceof TemplateRef) {
            this.popoverInstance.template = new PopoverTemplatePortal(this.libPopover, this.libPopoverContext);
        }
        else if (this.libPopover instanceof ComponentRef) {
            // https://github.com/Microsoft/TypeScript/issues/19298
            // FIXME: Add support for Components
        }
        if (this.libPopoverClass.length > 0) {
            this.popoverInstance.classList = this.libPopoverClass;
        }
        this.popoverInstance.show(delay);
        this.popoverInstance.afterHidden().subscribe(() => this.detach());
        this.updatePosition();
    }
    createPopover() {
        const overlayRef = this.createOverlay();
        this.portal =
            this.portal ||
                new ComponentPortal(PopoverComponent, this.viewContainerRef);
        this.popoverInstance = overlayRef.attach(this.portal).instance;
    }
    createOverlay() {
        if (this.overlayRef) {
            return this.overlayRef;
        }
        const overlayConfig = this.getOverlayConfig();
        this.overlayRef = this.overlay.create(overlayConfig);
        return this.overlayRef;
    }
    hide(delay = this.libPopoverHideDelay) {
        if (this.popoverInstance) {
            this.popoverInstance.hide(delay);
        }
    }
    detach() {
        if (this.overlayRef && this.overlayRef.hasAttached) {
            this.overlayRef.detach();
        }
        this.popoverInstance = null;
    }
    getOverlayConfig() {
        const state = new OverlayConfig({
            positionStrategy: this.getPositionStrategy(),
            scrollStrategy: this.overlay.scrollStrategies.close(),
            panelClass: 'lib-popover-panel',
            direction: 'ltr',
        });
        return state;
    }
    getConnectedElement() {
        return this.elemRef;
    }
    updatePosition() {
        if (this.popoverInstance) {
            this.popoverInstance.markForCheck();
            this.ngZone.onMicrotaskEmpty.pipe(take(1)).subscribe(() => {
                this.overlayRef.updatePosition();
            });
        }
    }
    getPositionStrategy() {
        let originPos;
        let overlayPos;
        originPos = this.getOriginPos(this.libPopoverPosition);
        overlayPos = this.getOverlayPos(this.libPopoverPosition);
        const scrollableAncestors = this.scrollDispatcher.getAncestorScrollContainers(this.elemRef);
        return this.overlay
            .position()
            .flexibleConnectedTo(this.elemRef)
            .withTransformOriginOn('.lib-popover')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withScrollableContainers(scrollableAncestors)
            .withPositions([
            Object.assign(Object.assign({}, originPos.main), overlayPos.main),
            Object.assign(Object.assign({}, originPos.fallback), overlayPos.fallback),
        ]);
    }
    getOriginPos(position) {
        let originPos;
        if (position === 'above' || position === 'below') {
            originPos = {
                originX: 'center',
                originY: position === 'above' ? 'top' : 'bottom',
            };
        }
        else if (position === 'before') {
            originPos = {
                originX: 'start',
                originY: 'center',
            };
        }
        else if (position === 'after') {
            originPos = {
                originX: 'end',
                originY: 'center',
            };
        }
        else {
            throw Error(`Origin position "${position}" is invalid.`);
        }
        const { x, y } = this.invertPosition(position, originPos.originX, originPos.originY);
        return {
            main: originPos,
            fallback: { originX: x, originY: y },
        };
    }
    getOverlayPos(position) {
        let overlayPos;
        if (position === 'above') {
            overlayPos = {
                overlayX: 'center',
                overlayY: 'bottom',
            };
        }
        else if (position === 'below') {
            overlayPos = {
                overlayX: 'center',
                overlayY: 'top',
            };
        }
        else if (position === 'before') {
            overlayPos = {
                overlayX: 'end',
                overlayY: 'center',
            };
        }
        else if (position === 'after') {
            overlayPos = {
                overlayX: 'start',
                overlayY: 'center',
            };
        }
        else {
            throw Error(`Overlay position "${position}" is invalid.`);
        }
        const { x, y } = this.invertPosition(position, overlayPos.overlayX, overlayPos.overlayY);
        return {
            main: overlayPos,
            fallback: { overlayX: x, overlayY: y },
        };
    }
    invertPosition(position, x, y) {
        if (position === 'above' || position === 'below') {
            if (y === 'top') {
                y = 'bottom';
            }
            else if (y === 'bottom') {
                y = 'top';
            }
        }
        else {
            if (x === 'end') {
                x = 'start';
            }
            else if (x === 'start') {
                x = 'end';
            }
        }
        return { x, y };
    }
    checkAndUpdate(oldValue, newValue) {
        if (typeof newValue === 'string' &&
            newValue !== oldValue &&
            this.popoverInstance) {
            this.popoverInstance.message = newValue;
            this.updatePosition();
        }
    }
}
PopoverDirective.ɵfac = function PopoverDirective_Factory(t) { return new (t || PopoverDirective)(i0.ɵɵdirectiveInject(i1$4.Overlay), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i1$4.ScrollDispatcher)); };
PopoverDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PopoverDirective, selectors: [["", "libPopover", ""]], hostBindings: function PopoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mouseenter", function PopoverDirective_mouseenter_HostBindingHandler() { return ctx.OnMouseEnter(); })("mouseleave", function PopoverDirective_mouseleave_HostBindingHandler() { return ctx.OnMouseLeave(); });
    } }, inputs: { libPopover: "libPopover", libPopoverContext: "libPopoverContext", libPopoverPosition: "libPopoverPosition", libPopoverClass: "libPopoverClass", disabled: ["libPopoverDisabled", "disabled"], libPopoverShowDelay: "libPopoverShowDelay", libPopoverHideDelay: "libPopoverHideDelay" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverDirective, [{
        type: Directive,
        args: [{ selector: '[libPopover]' }]
    }], function () { return [{ type: i1$4.Overlay }, { type: i0.ViewContainerRef }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i1$4.ScrollDispatcher }]; }, { libPopover: [{
            type: Input,
            args: ['libPopover']
        }], libPopoverContext: [{
            type: Input
        }], libPopoverPosition: [{
            type: Input
        }], libPopoverClass: [{
            type: Input
        }], disabled: [{
            type: Input,
            args: ['libPopoverDisabled']
        }], libPopoverShowDelay: [{
            type: Input
        }], libPopoverHideDelay: [{
            type: Input
        }], OnMouseEnter: [{
            type: HostListener,
            args: ['mouseenter']
        }], OnMouseLeave: [{
            type: HostListener,
            args: ['mouseleave']
        }] }); })();

function IconComponent_mat_icon_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getIcon(), "\n");
} }
function IconComponent_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 2);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r1.getIcon());
} }
function IconComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "i", 7);
    i0.ɵɵtext(2, "folder");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 8);
    i0.ɵɵtext(4, "search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function IconComponent_ng_container_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 9);
    i0.ɵɵtext(1, " memory ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("inline", true);
} }
const _c0$8 = function () { return ["fas", "stop-circle"]; };
function IconComponent_ng_container_2_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "fa-icon", 10);
} if (rf & 2) {
    i0.ɵɵproperty("icon", i0.ɵɵpureFunction0(1, _c0$8));
} }
function IconComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, IconComponent_ng_container_2_div_1_Template, 5, 0, "div", 3);
    i0.ɵɵtemplate(2, IconComponent_ng_container_2_mat_icon_2_Template, 2, 1, "mat-icon", 4);
    i0.ɵɵtemplate(3, IconComponent_ng_container_2_fa_icon_3_Template, 1, 2, "fa-icon", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.getIcon() === "folderSearch");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.getIcon() === "gpuSectionIcon");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.getIcon() === "stoppedResource");
} }
class IconComponent {
    constructor() {
        this.icon = '';
        this.libIcon = true;
    }
    get iconSplit() {
        return this.icon.split(':');
    }
    ngOnInit() { }
    getIcon() {
        if (this.iconSplit.length === 0) {
            console.error(`Invalid icon '${this.icon}'`);
            return '';
        }
        if (this.getCategory() === 'fa') {
            const inpt = this.iconSplit;
            return inpt.slice(1, inpt.length);
        }
        return this.iconSplit[1];
    }
    getCategory() {
        if (this.iconSplit.length === 0) {
            console.error(`Invalid icon '${this.icon}'`);
            return '';
        }
        return this.iconSplit[0];
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: IconComponent, selectors: [["lib-icon"]], hostVars: 2, hostBindings: function IconComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-icon", ctx.libIcon);
    } }, inputs: { icon: "icon" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [3, "icon", 4, "ngIf"], [3, "icon"], ["class", "folderSearch", 4, "ngIf"], ["class", "gpu", 3, "inline", 4, "ngIf"], ["class", "stoppedResource", 3, "icon", 4, "ngIf"], [1, "folderSearch"], [1, "material-icons", "folder"], [1, "material-icons", "search"], [1, "gpu", 3, "inline"], [1, "stoppedResource", 3, "icon"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, IconComponent_mat_icon_0_Template, 2, 1, "mat-icon", 0);
        i0.ɵɵtemplate(1, IconComponent_fa_icon_1_Template, 1, 1, "fa-icon", 1);
        i0.ɵɵtemplate(2, IconComponent_ng_container_2_Template, 4, 3, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.getCategory() === "material");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.getCategory() === "fa");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.getCategory() === "custom");
    } }, directives: [i1$1.NgIf, i2.MatIcon, i1$5.FaIconComponent], styles: ["mat-icon[_ngcontent-%COMP%]:not(.gpu){display:flex;margin:auto}.folderSearch[_ngcontent-%COMP%]{position:relative}.material-icons.folder[_ngcontent-%COMP%]{vertical-align:middle}.material-icons.search[_ngcontent-%COMP%]{position:absolute;color:#fff;left:13px;top:11px;font-size:14px}mat-icon.gpu[_ngcontent-%COMP%]{vertical-align:middle;font-size:28px;margin-left:-2px;margin-right:-.2rem}.stoppedResource[_ngcontent-%COMP%]{font-size:22px;color:grey}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconComponent, [{
        type: Component,
        args: [{
                selector: 'lib-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.scss'],
            }]
    }], function () { return []; }, { icon: [{
            type: Input
        }], libIcon: [{
            type: HostBinding,
            args: ['class.lib-icon']
        }] }); })();

function StatusComponent_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r0.config == null ? null : ctx_r0.config.getTooltip(ctx_r0.row));
} }
function StatusComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r1.config == null ? null : ctx_r1.config.getTooltip(ctx_r1.row));
} }
function StatusComponent_lib_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-icon", 5);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r2.config == null ? null : ctx_r2.config.getTooltip(ctx_r2.row));
} }
function StatusComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r3.config == null ? null : ctx_r3.config.getTooltip(ctx_r3.row));
    i0.ɵɵproperty("ngClass", ctx_r3.config == null ? null : ctx_r3.config.getCssClasses(ctx_r3.row));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.config == null ? null : ctx_r3.config.getIcon(ctx_r3.row), " ");
} }
class StatusComponent {
    constructor() {
        this.STATUS_TYPE = STATUS_TYPE;
    }
    ngOnInit() { }
}
StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
StatusComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StatusComponent, selectors: [["lib-status"]], inputs: { row: "row", config: "config" }, decls: 5, vars: 4, consts: [[3, "ngSwitch"], ["diameter", "24", "matTooltipClass", "custom-tooltip", 3, "matTooltip", 4, "ngSwitchCase"], ["icon", "custom:stoppedResource", 3, "matTooltip", 4, "ngSwitchCase"], ["matTooltipClass", "custom-tooltip", 3, "ngClass", "matTooltip", 4, "ngSwitchDefault"], ["diameter", "24", "matTooltipClass", "custom-tooltip", 3, "matTooltip"], ["icon", "custom:stoppedResource", 3, "matTooltip"], ["matTooltipClass", "custom-tooltip", 3, "ngClass", "matTooltip"]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, StatusComponent_mat_spinner_1_Template, 1, 1, "mat-spinner", 1);
        i0.ɵɵtemplate(2, StatusComponent_mat_spinner_2_Template, 1, 1, "mat-spinner", 1);
        i0.ɵɵtemplate(3, StatusComponent_lib_icon_3_Template, 1, 1, "lib-icon", 2);
        i0.ɵɵtemplate(4, StatusComponent_mat_icon_4_Template, 2, 3, "mat-icon", 3);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.config == null ? null : ctx.config.getPhase(ctx.row));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.STATUS_TYPE.WAITING);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.STATUS_TYPE.TERMINATING);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", ctx.STATUS_TYPE.STOPPED);
    } }, directives: [i1$1.NgSwitch, i1$1.NgSwitchCase, i1$1.NgSwitchDefault, i2$4.MatSpinner, i3$1.MatTooltip, IconComponent, i2.MatIcon, i1$1.NgClass], styles: [".status[_ngcontent-%COMP%]{display:flex;vertical-align:middle}.ready[_ngcontent-%COMP%]{color:green}.unavailable[_ngcontent-%COMP%]{color:grey}.warning[_ngcontent-%COMP%]{color:orange}.error[_ngcontent-%COMP%]{color:red}.stop[_ngcontent-%COMP%]{color:grey}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusComponent, [{
        type: Component,
        args: [{
                selector: 'lib-status',
                templateUrl: './status.component.html',
                styleUrls: ['./status.component.scss'],
            }]
    }], function () { return []; }, { row: [{
            type: Input
        }], config: [{
            type: Input
        }] }); })();

const defaultDateOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
};
const defaultTimeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
};
const intlOptions = Object.assign({}, defaultDateOptions, defaultTimeOptions);
function dateTimeFormat(obj) {
    return new Intl.DateTimeFormat(obj.locale, obj.options).format(obj.date);
}
const memoizedDateTimeFormat = memoize(dateTimeFormat);
class DateTimeService {
    constructor() { }
    parse(date) {
        // https://date-fns.org/v1.29.0/docs/parse
        return parse(date);
    }
    isEqual(date1, date2) {
        // This helper should be used whenever testing if two date objects
        // represent the same point in time is required. Note that equality
        // operators perform an identity check on Date objects, and thus do not
        // work as expected.
        return isEqual(date1, date2);
    }
    intlFormat(date, options, locale) {
        if (date == null) {
            return '-';
        }
        if (typeof date === 'string') {
            date = new Date(date);
        }
        if (!options) {
            options = intlOptions;
        }
        if (!locale) {
            locale = navigator.language || 'en-US';
        }
        return memoizedDateTimeFormat({ locale, options, date });
    }
    merge(date, time) {
        // FIXME: Return an invalid date object or raise an error if the input
        // is invalid.
        let dateTime = parse(date);
        const timeArr = time.split(':');
        let hours = parseInt(timeArr[0], 10);
        let minutes = parseInt(timeArr[1], 10);
        let seconds = parseInt(timeArr[2], 10);
        if (this.isNotValidNumber(hours) || !this.isValidHours(hours)) {
            hours = 0;
        }
        if (this.isNotValidNumber(minutes) || !this.isValidMinutes(minutes)) {
            minutes = 0;
        }
        if (this.isNotValidNumber(seconds) || !this.isValidSeconds(seconds)) {
            seconds = 0;
        }
        dateTime = setHours(dateTime, hours);
        dateTime = setMinutes(dateTime, minutes);
        dateTime = setSeconds(dateTime, seconds);
        return dateTime;
    }
    distanceInWords(dateToCompare, date = new Date()) {
        return distanceInWords(date, dateToCompare, {
            includeSeconds: false,
            addSuffix: true,
        })
            .replace('about', '')
            .replace('almost', '');
    }
    isNotValidNumber(unit) {
        return Number.isNaN(unit);
    }
    isValidHours(hours) {
        return this.between(hours, 0, 24);
    }
    isValidMinutes(minutes) {
        return this.between(minutes, 0, 60);
    }
    isValidSeconds(seconds) {
        return this.between(seconds, 0, 60);
    }
    between(x, min, max) {
        return x >= min && x <= max;
    }
    differenceInSeconds(d1, d2) {
        return differenceInSeconds(d1, d2);
    }
}
DateTimeService.ɵfac = function DateTimeService_Factory(t) { return new (t || DateTimeService)(); };
DateTimeService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DateTimeService, factory: DateTimeService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

function DetailsListItemComponent_mat_divider_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function DetailsListItemComponent_ng_container_5_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chip_r6 = ctx.$implicit;
    i0.ɵɵproperty("color", chip_r6.color)("matTooltip", chip_r6.tooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", chip_r6.value, " ");
} }
function DetailsListItemComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-chip-list", 5);
    i0.ɵɵtemplate(2, DetailsListItemComponent_ng_container_5_mat_chip_2_Template, 2, 3, "mat-chip", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.chipsList);
} }
function DetailsListItemComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "mat-icon", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("inline", true)("ngClass", ctx_r7.getClasses());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.icon, " ");
} }
function DetailsListItemComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "mat-icon", 12);
    i0.ɵɵlistener("click", function DetailsListItemComponent_div_6_div_3_Template_mat_icon_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.copy(); });
    i0.ɵɵtext(2, " content_copy ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRippleCentered", true)("inline", true);
} }
function DetailsListItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, DetailsListItemComponent_div_6_div_1_Template, 3, 3, "div", 9);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, DetailsListItemComponent_div_6_div_3_Template, 3, 2, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.value, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.copyValue);
} }
function DetailsListItemComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "mat-icon", 11);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("inline", true)("ngClass", ctx_r11.getClasses());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r11.icon, " ");
} }
function DetailsListItemComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "mat-icon", 12);
    i0.ɵɵlistener("click", function DetailsListItemComponent_div_7_div_3_Template_mat_icon_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.copy(); });
    i0.ɵɵtext(2, " content_copy ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRippleCentered", true)("inline", true);
} }
function DetailsListItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, DetailsListItemComponent_div_7_div_1_Template, 3, 3, "div", 9);
    i0.ɵɵprojection(2, 0, ["class", "vertical-align"]);
    i0.ɵɵtemplate(3, DetailsListItemComponent_div_7_div_3_Template, 3, 2, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.copyValue);
} }
function DetailsListItemComponent_mat_divider_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
const _c0$7 = ["*"];
class DetailsListItemComponent {
    constructor(snack, clipboard) {
        this.snack = snack;
        this.clipboard = clipboard;
        this.topDivider = false;
        this.bottomDivider = true;
        this.keyMinWidth = '250px';
        this.selfClass = true;
    }
    copy() {
        if (!this.copyValue) {
            this.snack.open('No value to copy to clipboard', SnackType.Warning, 2000);
            return;
        }
        this.clipboard.copy(this.copyValue);
        this.snack.open('Content copied to clipboard', SnackType.Info, 2000);
    }
    getClasses() {
        const classes = ['key-icon'];
        if (!this.icon) {
            return classes;
        }
        classes.push(this.icon);
        return classes;
    }
}
DetailsListItemComponent.ɵfac = function DetailsListItemComponent_Factory(t) { return new (t || DetailsListItemComponent)(i0.ɵɵdirectiveInject(SnackBarService), i0.ɵɵdirectiveInject(i2$5.Clipboard)); };
DetailsListItemComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailsListItemComponent, selectors: [["lib-details-list-item"]], hostVars: 2, hostBindings: function DetailsListItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-details-list-item", ctx.selfClass);
    } }, inputs: { key: "key", value: "value", icon: "icon", valueType: "valueType", chipsList: "chipsList", keyTooltip: "keyTooltip", valueTooltip: "valueTooltip", topDivider: "topDivider", bottomDivider: "bottomDivider", copyValue: "copyValue", keyMinWidth: "keyMinWidth" }, ngContentSelectors: _c0$7, decls: 9, vars: 10, consts: [[4, "ngIf"], [1, "list-entry-row"], [1, "list-entry-key", "vertical-align", 3, "matTooltip"], [1, "list-entry-value", 3, "matTooltip"], ["class", "flex", 4, "ngIf"], [1, "chip-list-wa"], ["matTooltipClass", "custom-tooltip", "class", "list-chip", 3, "color", "matTooltip", 4, "ngFor", "ngForOf"], ["matTooltipClass", "custom-tooltip", 1, "list-chip", 3, "color", "matTooltip"], [1, "flex"], ["class", "icon", 4, "ngIf"], [1, "icon"], [3, "inline", "ngClass"], ["matRipple", "", "matRippleRadius", "16", 1, "copy-button", "key-icon", 3, "matRippleCentered", "inline", "click"]], template: function DetailsListItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, DetailsListItemComponent_mat_divider_0_Template, 1, 0, "mat-divider", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵtemplate(5, DetailsListItemComponent_ng_container_5_Template, 3, 1, "ng-container", 0);
        i0.ɵɵtemplate(6, DetailsListItemComponent_div_6_Template, 4, 3, "div", 4);
        i0.ɵɵtemplate(7, DetailsListItemComponent_div_7_Template, 4, 2, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, DetailsListItemComponent_mat_divider_8_Template, 1, 0, "mat-divider", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.topDivider);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("min-width", ctx.keyMinWidth);
        i0.ɵɵproperty("matTooltip", ctx.keyTooltip);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.key, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.valueTooltip);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.chipsList && ctx.chipsList.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.bottomDivider);
    } }, directives: [i1$1.NgIf, i3$1.MatTooltip, i2$6.MatDivider, i6.MatChipList, i1$1.NgForOf, i6.MatChip, i2.MatIcon, i1$1.NgClass, i7.MatRipple], styles: ["[_nghost-%COMP%]{display:block}.list-entry-row[_ngcontent-%COMP%]{padding:.4rem 0;display:flex}.list-entry-key[_ngcontent-%COMP%]{font-weight:500}.list-entry-value[_ngcontent-%COMP%]{margin:auto 0;color:rgba(0,0,0,.66)}.key-icon[_ngcontent-%COMP%]{margin-right:8px}.chip-list-wa[_ngcontent-%COMP%]   .list-chip[_ngcontent-%COMP%]{min-height:24px;margin:0 4px}.warning[_ngcontent-%COMP%]{color:orange}.check_circle[_ngcontent-%COMP%]{color:green}.copy-button[_ngcontent-%COMP%]{cursor:pointer;margin-left:8px}.vertical-align[_ngcontent-%COMP%]{margin-bottom:auto}.icon[_ngcontent-%COMP%]{font-size:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailsListItemComponent, [{
        type: Component,
        args: [{
                selector: 'lib-details-list-item',
                templateUrl: './details-list-item.component.html',
                styleUrls: ['./details-list-item.component.scss'],
            }]
    }], function () { return [{ type: SnackBarService }, { type: i2$5.Clipboard }]; }, { key: [{
            type: Input
        }], value: [{
            type: Input
        }], icon: [{
            type: Input
        }], valueType: [{
            type: Input
        }], chipsList: [{
            type: Input
        }], keyTooltip: [{
            type: Input
        }], valueTooltip: [{
            type: Input
        }], topDivider: [{
            type: Input
        }], bottomDivider: [{
            type: Input
        }], copyValue: [{
            type: Input
        }], keyMinWidth: [{
            type: Input
        }], selfClass: [{
            type: HostBinding,
            args: ['class.lib-details-list-item']
        }] }); })();

class ToDatePipe {
    constructor(dtService) {
        this.dtService = dtService;
    }
    transform(value, type) {
        if (!value) {
            return '';
        }
        try {
            const toDate = new Date(value);
            let options;
            if (type === 'date') {
                options = defaultDateOptions;
            }
            else if (type === 'time') {
                options = defaultTimeOptions;
            }
            return this.dtService.intlFormat(toDate, options);
        }
        catch (error) {
            console.error('ToDatePipe value:', value);
            console.error(error);
            return '';
        }
    }
}
ToDatePipe.ɵfac = function ToDatePipe_Factory(t) { return new (t || ToDatePipe)(i0.ɵɵdirectiveInject(DateTimeService, 16)); };
ToDatePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "libToDate", type: ToDatePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToDatePipe, [{
        type: Pipe,
        args: [{ name: 'libToDate' }]
    }], function () { return [{ type: DateTimeService }]; }, null); })();

function DateTimeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "lib-details-list-item", 2);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "libToDate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "lib-details-list-item", 3);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("bottomDivider", false);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 4, ctx_r1.date), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("bottomDivider", false);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.date, " ");
} }
class DateTimeComponent {
    constructor(dtService, cdRef) {
        this.dtService = dtService;
        this.cdRef = cdRef;
        this.defaultDisplayValuePrv = '-';
        this.popoverPosition = 'below';
        this.timer = window.setInterval(() => {
            if (this.date) {
                this.checkAndUpdate(this.date);
            }
        }, 1000);
    }
    get date() {
        return this.datePrv;
    }
    set date(v) {
        this.datePrv = v;
        this.formattedDate = this.timeAgo(v);
    }
    set defaultDisplayValue(v) {
        this.defaultDisplayValuePrv = v;
        this.checkAndUpdate(this.date);
    }
    get defaultDisplayValue() {
        return this.defaultDisplayValuePrv;
    }
    get isPopoverDisabled() {
        return !this.date;
    }
    ngOnDestroy() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    timeAgo(d) {
        if (!d) {
            return this.defaultDisplayValue;
        }
        return this.dtService.distanceInWords(d);
    }
    checkAndUpdate(date) {
        const d = this.timeAgo(date);
        if (this.formattedDate !== d && this.cdRef) {
            this.formattedDate = d;
            this.cdRef.detectChanges();
        }
    }
}
DateTimeComponent.ɵfac = function DateTimeComponent_Factory(t) { return new (t || DateTimeComponent)(i0.ɵɵdirectiveInject(DateTimeService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
DateTimeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DateTimeComponent, selectors: [["lib-date-time"]], inputs: { date: "date", popoverPosition: "popoverPosition", defaultDisplayValue: ["default", "defaultDisplayValue"] }, decls: 4, vars: 6, consts: [[1, "truncate", 3, "libPopover", "libPopoverPosition", "libPopoverDisabled", "libPopoverHideDelay", "libPopoverShowDelay"], ["timeTpl", ""], ["key", "Local", "keyMinWidth", "50px", 3, "bottomDivider"], ["key", "UTC", "keyMinWidth", "50px", 3, "bottomDivider"]], template: function DateTimeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, DateTimeComponent_ng_template_2_Template, 5, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        i0.ɵɵproperty("libPopover", _r0)("libPopoverPosition", ctx.popoverPosition)("libPopoverDisabled", ctx.isPopoverDisabled)("libPopoverHideDelay", 100)("libPopoverShowDelay", 100);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.formattedDate, "\n");
    } }, directives: [PopoverDirective, DetailsListItemComponent], pipes: [ToDatePipe], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeComponent, [{
        type: Component,
        args: [{
                selector: 'lib-date-time',
                templateUrl: './date-time.component.html',
                styleUrls: [],
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: DateTimeService }, { type: i0.ChangeDetectorRef }]; }, { date: [{
            type: Input
        }], popoverPosition: [{
            type: Input
        }], defaultDisplayValue: [{
            type: Input,
            args: ['default']
        }] }); })();

function ComponentValueComponent_ng_template_0_Template(rf, ctx) { }
class ComponentValueComponent {
    get element() {
        return this.data;
    }
    set element(data) {
        this.data = data;
        if (!this.componentRef) {
            return;
        }
        this.componentRef.instance.element = data;
    }
    ngOnInit() {
        this.portal = new ComponentPortal(this.valueDescriptor.component);
    }
    onAttach(ref) {
        this.componentRef = ref;
        this.componentRef.instance.element = this.element;
    }
}
ComponentValueComponent.ɵfac = function ComponentValueComponent_Factory(t) { return new (t || ComponentValueComponent)(); };
ComponentValueComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ComponentValueComponent, selectors: [["lib-component-value"]], inputs: { element: "element", valueDescriptor: "valueDescriptor" }, decls: 1, vars: 1, consts: [[3, "cdkPortalOutlet", "attached"]], template: function ComponentValueComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ComponentValueComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        i0.ɵɵlistener("attached", function ComponentValueComponent_Template_ng_template_attached_0_listener($event) { return ctx.onAttach($event); });
    } if (rf & 2) {
        i0.ɵɵproperty("cdkPortalOutlet", ctx.portal);
    } }, directives: [i2$3.CdkPortalOutlet], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentValueComponent, [{
        type: Component,
        args: [{
                selector: 'lib-component-value',
                templateUrl: './component-value.component.html',
                styleUrls: ['./component-value.component.scss'],
            }]
    }], null, { element: [{
            type: Input
        }], valueDescriptor: [{
            type: Input
        }] }); })();

function TableChipsListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.valueDescriptor.noValueText, "\n");
} }
function TableChipsListComponent_mat_chip_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chip_r2 = ctx.$implicit;
    i0.ɵɵproperty("color", chip_r2.color)("matTooltip", chip_r2.tooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", chip_r2.value, " ");
} }
class TableChipsListComponent {
    hasVisibleItems(row) {
        return this.getChips(row).length > this.valueDescriptor.maxVisibleChips;
    }
    getVisibleChips(row) {
        return this.getChips(row).slice(0, this.valueDescriptor.maxVisibleChips);
    }
    getChips(row) {
        return this.valueDescriptor.getChips(row);
    }
    trackByFn(index, chip) {
        return chip.value;
    }
}
TableChipsListComponent.ɵfac = function TableChipsListComponent_Factory(t) { return new (t || TableChipsListComponent)(); };
TableChipsListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableChipsListComponent, selectors: [["lib-table-chips-list"]], inputs: { element: "element", valueDescriptor: "valueDescriptor" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [1, "chip-list-wa"], ["matTooltipClass", "custom-tooltip", "class", "list-chip", 3, "color", "matTooltip", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["matTooltipClass", "custom-tooltip", 1, "list-chip", 3, "color", "matTooltip"]], template: function TableChipsListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TableChipsListComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        i0.ɵɵelementStart(1, "mat-chip-list", 1);
        i0.ɵɵtemplate(2, TableChipsListComponent_mat_chip_2_Template, 2, 3, "mat-chip", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.hasVisibleItems(ctx.element));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.getVisibleChips(ctx.element))("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i1$1.NgIf, i6.MatChipList, i1$1.NgForOf, i6.MatChip, i3$1.MatTooltip], styles: [".chip-list-wa[_ngcontent-%COMP%]   .list-chip[_ngcontent-%COMP%]{min-height:24px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableChipsListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-table-chips-list',
                templateUrl: './chips-list.component.html',
                styleUrls: ['./chips-list.component.scss'],
            }]
    }], null, { element: [{
            type: Input
        }], valueDescriptor: [{
            type: Input
        }] }); })();

class ActionButtonComponent {
    constructor() {
        this.emitter = new EventEmitter();
    }
    ngOnInit() { }
    // Event emitting functions
    emitClickedEvent() {
        const ev = new ActionEvent(this.action.name, this.data);
        this.emitter.emit(ev);
    }
    // Helpers for checking the Action's State
    isPhaseReady() {
        const phaseField = this.action.field;
        const status = this.data[phaseField];
        return status === STATUS_TYPE.READY;
    }
}
ActionButtonComponent.ɵfac = function ActionButtonComponent_Factory(t) { return new (t || ActionButtonComponent)(); };
ActionButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionButtonComponent, selectors: [["lib-action-button"]], inputs: { action: "action", data: "data" }, outputs: { emitter: "emitter" }, decls: 2, vars: 4, consts: [["mat-button", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "color", "disabled", "click"]], template: function ActionButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function ActionButtonComponent_Template_button_click_0_listener() { return ctx.emitClickedEvent(); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.action.tooltip);
        i0.ɵɵproperty("color", ctx.action.color)("disabled", !ctx.isPhaseReady());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.action.text, "\n");
    } }, directives: [i2$1.MatButton, i3$1.MatTooltip], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionButtonComponent, [{
        type: Component,
        args: [{
                selector: 'lib-action-button',
                templateUrl: './action-button.component.html',
                styleUrls: ['./action-button.component.scss'],
            }]
    }], function () { return []; }, { action: [{
            type: Input
        }], data: [{
            type: Input
        }], emitter: [{
            type: Output
        }] }); })();

function ActionComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ActionComponent_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.emitClickedEvent(); });
    i0.ɵɵelement(1, "lib-icon", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r0.action.tooltip);
    i0.ɵɵproperty("color", ctx_r0.action.color);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r0.action.iconReady);
} }
function ActionComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ActionComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.emitClickedEvent(); });
    i0.ɵɵelement(1, "lib-icon", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r1.action.tooltip);
    i0.ɵɵproperty("color", ctx_r1.action.color);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r1.action.iconInit);
} }
function ActionComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 5);
} }
function ActionComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵelement(1, "lib-icon", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", ctx_r3.action.iconInit);
} }
class ActionComponent {
    constructor() {
        // READY: Button will be enabled
        // WAITING: Button will be a Spinner
        // TERMINATING/UNAVAILABLE: Button will be disabled
        this.innerData = {};
        this.clicked = false;
        this.cancelWaitingPhase$ = new Subject();
        this.emitter = new EventEmitter();
    }
    ngOnInit() { }
    // Event emitting functions
    emitClickedEvent() {
        const ev = new ActionEvent(this.action.name, this.data);
        this.emitter.emit(ev);
    }
    // Helpers for handling the Tooltips
    get tooltipInit() {
        if (this.action.tooltip && this.action.tooltip.length > 0) {
            return this.action.tooltip;
        }
        return this.action.tooltipInit;
    }
    get tooltipReady() {
        if (this.action.tooltip && this.action.tooltip.length > 0) {
            return this.action.tooltip;
        }
        return this.action.tooltipReady;
    }
    // Icon handling functions
    getIcon(icon) {
        if (icon.split(':').length !== 2) {
            return '';
        }
        if (this.getCategory(icon) === 'fa') {
            const inpt = icon.split(':');
            return inpt.slice(1, inpt.length);
        }
        return icon.split(':')[1];
    }
    getCategory(icon) {
        if (icon.split(':').length !== 2) {
            return '';
        }
        return icon.split(':')[0];
    }
    // Helpers for checking the Action's State
    isPhaseReady() {
        return this.status === STATUS_TYPE.READY;
    }
    isPhaseInit() {
        return this.status === STATUS_TYPE.UNINITIALIZED;
    }
    isPhaseWaiting() {
        return this.status === STATUS_TYPE.WAITING;
    }
    isPhaseDisabled() {
        return (this.status === STATUS_TYPE.TERMINATING ||
            this.status === STATUS_TYPE.UNAVAILABLE);
    }
    get status() {
        const phaseField = this.action.field;
        if (!phaseField) {
            return STATUS_TYPE.READY;
        }
        const status = get(this.data, phaseField);
        return status;
    }
}
ActionComponent.ɵfac = function ActionComponent_Factory(t) { return new (t || ActionComponent)(); };
ActionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionComponent, selectors: [["lib-action"]], inputs: { action: "action", data: "data" }, outputs: { emitter: "emitter" }, decls: 4, vars: 4, consts: [["mat-icon-button", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "color", "click", 4, "ngIf"], ["diameter", "20", 4, "ngIf"], ["mat-icon-button", "", "disabled", "", 4, "ngIf"], ["mat-icon-button", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "color", "click"], [3, "icon"], ["diameter", "20"], ["mat-icon-button", "", "disabled", ""]], template: function ActionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ActionComponent_button_0_Template, 2, 3, "button", 0);
        i0.ɵɵtemplate(1, ActionComponent_button_1_Template, 2, 3, "button", 0);
        i0.ɵɵtemplate(2, ActionComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 1);
        i0.ɵɵtemplate(3, ActionComponent_button_3_Template, 2, 1, "button", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isPhaseReady());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPhaseInit());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPhaseWaiting());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isPhaseDisabled());
    } }, directives: [i1$1.NgIf, i2$1.MatButton, i3$1.MatTooltip, IconComponent, i2$4.MatSpinner], styles: ["mat-spinner[_ngcontent-%COMP%]{margin:auto}.folder-search-button[_ngcontent-%COMP%]{position:relative}.material-icons.search[_ngcontent-%COMP%]{position:absolute;color:#fff;left:13px;top:11px;font-size:14px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionComponent, [{
        type: Component,
        args: [{
                selector: 'lib-action',
                templateUrl: './action.component.html',
                styleUrls: ['./action.component.scss'],
            }]
    }], function () { return []; }, { action: [{
            type: Input
        }], data: [{
            type: Input
        }], emitter: [{
            type: Output
        }] }); })();

const _c0$6 = function (a0, a1, a2) { return { grey: a0, "right-align": a1, "row-right-padding": a2 }; };
function TableComponent_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c0$6, ctx_r4.tableTheme === ctx_r4.TABLE_THEME.FLAT, col_r3.textAlignment === "right", col_r3.textAlignment === "right"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", col_r3.matHeaderCellDef, " ");
} }
const _c1$1 = function (a0, a1) { return { "min-width": a0, width: a1 }; };
const _c2 = function (a0, a1) { return { "right-align": a0, "row-right-padding": a1 }; };
function TableComponent_ng_container_1_ng_container_2_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵlistener("click", function TableComponent_ng_container_1_ng_container_2_td_1_Template_div_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r18); const element_r15 = restoredCtx.$implicit; const col_r3 = i0.ɵɵnextContext(2).$implicit; const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.linkClicked(col_r3.matColumnDef, element_r15); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(6, _c1$1, col_r3.minWidth, col_r3.width))("ngClass", i0.ɵɵpureFunction2(9, _c2, col_r3.textAlignment === "right", col_r3.textAlignment === "right"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", col_r3.value.getTooltip(element_r15))("libPopover", col_r3.value.getPopover(element_r15))("ngClass", col_r3.value.getClasses());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", col_r3.value.getValue(element_r15), " ");
} }
function TableComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_2_td_1_Template, 3, 12, "td", 8);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_ng_container_1_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelement(1, "lib-status", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c1$1, col_r3.minWidth, col_r3.width));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("row", element_r21)("config", col_r3.value);
} }
function TableComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_3_td_1_Template, 2, 6, "td", 11);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_ng_container_1_ng_container_4_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelement(1, "lib-date-time", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(2, _c1$1, col_r3.minWidth, col_r3.width));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("date", col_r3.value.getValue(element_r24));
} }
function TableComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_4_td_1_Template, 2, 5, "td", 11);
    i0.ɵɵelementContainerEnd();
} }
const _c3$1 = function (a0) { return { "right-align": a0 }; };
function TableComponent_ng_container_1_ng_container_5_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵelement(1, "lib-component-value", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c1$1, col_r3.minWidth, col_r3.width))("ngClass", i0.ɵɵpureFunction1(7, _c3$1, col_r3.rightAlign));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("element", element_r27)("valueDescriptor", col_r3.value);
} }
function TableComponent_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_5_td_1_Template, 2, 9, "td", 8);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_ng_container_1_ng_container_6_td_1_ng_template_1_Template(rf, ctx) { }
const _c4 = function (a0) { return { $implicit: a0 }; };
function TableComponent_ng_container_1_ng_container_6_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_6_td_1_ng_template_1_Template, 0, 0, "ng-template", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c1$1, col_r3.minWidth, col_r3.width))("ngClass", i0.ɵɵpureFunction2(7, _c2, col_r3.textAlignment === "right", col_r3.textAlignment === "right"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", col_r3.value.ref)("ngTemplateOutletContext", i0.ɵɵpureFunction1(10, _c4, element_r30));
} }
function TableComponent_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_6_td_1_Template, 2, 12, "td", 8);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_ng_container_1_ng_container_7_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelement(1, "lib-table-chips-list", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c1$1, col_r3.minWidth, col_r3.width));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("element", element_r34)("valueDescriptor", col_r3.value);
} }
function TableComponent_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_7_td_1_Template, 2, 6, "td", 11);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_ng_container_1_ng_container_8_td_1_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    const col_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("matTooltip", item_r40)("matTooltipDisabled", !col_r3.value.showTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r3.value.itemsIcon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r40);
} }
function TableComponent_ng_container_1_ng_container_8_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelementStart(1, "button", 17);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", null, 18);
    i0.ɵɵtemplate(6, TableComponent_ng_container_1_ng_container_8_td_1_button_6_Template, 5, 4, "button", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    const _r38 = i0.ɵɵreference(5);
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c1$1, col_r3.minWidth, col_r3.width));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r38);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(col_r3.value.menuIcon);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", col_r3.value.getItems(element_r37));
} }
function TableComponent_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_8_td_1_Template, 7, 7, "td", 11);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-action-button", 27);
    i0.ɵɵlistener("emitter", function TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_button_1_Template_lib_action_button_emitter_0_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(5); return ctx_r49.actionTriggered($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r46 = i0.ɵɵnextContext().$implicit;
    const element_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("action", action_r46)("data", element_r44);
} }
function TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_2_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "lib-action", 28);
    i0.ɵɵlistener("emitter", function TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_2_Template_lib_action_emitter_0_listener($event) { i0.ɵɵrestoreView(_r54); const ctx_r53 = i0.ɵɵnextContext(5); return ctx_r53.actionTriggered($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r46 = i0.ɵɵnextContext().$implicit;
    const element_r44 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("action", action_r46)("data", element_r44);
} }
function TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_button_1_Template, 1, 2, "lib-action-button", 25);
    i0.ɵɵtemplate(2, TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_lib_action_2_Template, 1, 2, "lib-action", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const action_r46 = ctx.$implicit;
    const ctx_r45 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r45.isActionButtonValue(action_r46));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r45.isActionIconValue(action_r46));
} }
function TableComponent_ng_container_1_ng_container_9_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 22);
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵtemplate(2, TableComponent_ng_container_1_ng_container_9_td_1_ng_container_2_Template, 3, 2, "ng-container", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", col_r3.value.actions);
} }
function TableComponent_ng_container_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_9_td_1_Template, 3, 1, "td", 21);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 4);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_th_1_Template, 2, 6, "th", 5);
    i0.ɵɵtemplate(2, TableComponent_ng_container_1_ng_container_2_Template, 2, 0, "ng-container", 6);
    i0.ɵɵtemplate(3, TableComponent_ng_container_1_ng_container_3_Template, 2, 0, "ng-container", 6);
    i0.ɵɵtemplate(4, TableComponent_ng_container_1_ng_container_4_Template, 2, 0, "ng-container", 6);
    i0.ɵɵtemplate(5, TableComponent_ng_container_1_ng_container_5_Template, 2, 0, "ng-container", 6);
    i0.ɵɵtemplate(6, TableComponent_ng_container_1_ng_container_6_Template, 2, 0, "ng-container", 6);
    i0.ɵɵtemplate(7, TableComponent_ng_container_1_ng_container_7_Template, 2, 0, "ng-container", 6);
    i0.ɵɵtemplate(8, TableComponent_ng_container_1_ng_container_8_Template, 2, 0, "ng-container", 6);
    i0.ɵɵtemplate(9, TableComponent_ng_container_1_ng_container_9_Template, 2, 0, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matColumnDef", col_r3.matColumnDef);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isPropertyValue(col_r3.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isStatusValue(col_r3.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isDateTimeValue(col_r3.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isComponentValue(col_r3.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isTemplateValue(col_r3.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isChipsListValue(col_r3.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isMenuValue(col_r3.value));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isActionListValue(col_r3.value));
} }
function TableComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 29);
} }
function TableComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 30);
} }
class TableComponent {
    constructor() {
        this.innerData = [];
        this.dataSource = new MatTableDataSource();
        this.displayedColumns = [];
        this.TABLE_THEME = TABLE_THEME;
    }
    set config(config) {
        this.innerConfig = config;
        this.displayedColumns = [];
        for (const col of config.columns) {
            this.displayedColumns.push(col.matColumnDef);
        }
    }
    get config() {
        return this.innerConfig;
    }
    get data() {
        return this.innerData;
    }
    set data(newData) {
        this.dataSource.data = newData;
    }
    isActionListValue(obj) {
        return obj instanceof ActionListValue;
    }
    isActionButtonValue(obj) {
        return obj instanceof ActionButtonValue;
    }
    isChipsListValue(obj) {
        return obj instanceof ChipsListValue;
    }
    isComponentValue(obj) {
        return obj instanceof ComponentValue;
    }
    isTemplateValue(obj) {
        return obj instanceof TemplateValue;
    }
    isActionIconValue(obj) {
        return obj instanceof ActionIconValue;
    }
    isMenuValue(obj) {
        return obj instanceof MenuValue;
    }
    isStatusValue(obj) {
        return obj instanceof StatusValue;
    }
    isPropertyValue(obj) {
        return obj instanceof PropertyValue;
    }
    isDateTimeValue(obj) {
        return obj instanceof DateTimeValue;
    }
    actionTriggered(e) {
        // Forward the emitted ActionEvent
        this.emitter.emit(e);
    }
    newButtonTriggered() {
        const ev = new ActionEvent('newResourceButton', {});
        this.emitter.emit(ev);
    }
    linkClicked(col, data) {
        const ev = new ActionEvent(`${col}:link`, data);
        this.emitter.emit(ev);
    }
    get tableTheme() {
        if (!this.config || !this.config.theme) {
            return TABLE_THEME.CARD;
        }
        return this.config.theme;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["lib-table"]], inputs: { config: "config", trackByFn: "trackByFn", data: "data", emitter: "emitter" }, decls: 4, vars: 5, consts: [["mat-table", "", 1, "wide", 3, "dataSource", "trackBy"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], [4, "ngIf"], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 3, "ngStyle", "ngClass", 4, "matCellDef"], ["mat-cell", "", 3, "ngStyle", "ngClass"], ["matTooltipClass", "custom-tooltip", 3, "matTooltip", "libPopover", "ngClass", "click"], ["mat-cell", "", 3, "ngStyle", 4, "matCellDef"], ["mat-cell", "", 3, "ngStyle"], [3, "row", "config"], [3, "date"], [3, "element", "valueDescriptor"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "matTooltipDisabled", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "matTooltipClass", "custom-tooltip", 3, "matTooltip", "matTooltipDisabled"], ["mat-cell", "", 4, "matCellDef"], ["mat-cell", ""], [1, "action-list"], [4, "ngFor", "ngForOf"], ["class", "action-button", 3, "action", "data", "emitter", 4, "ngIf"], [3, "action", "data", "emitter", 4, "ngIf"], [1, "action-button", 3, "action", "data", "emitter"], [3, "action", "data", "emitter"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, TableComponent_ng_container_1_Template, 10, 9, "ng-container", 1);
        i0.ɵɵtemplate(2, TableComponent_tr_2_Template, 1, 0, "tr", 2);
        i0.ɵɵtemplate(3, TableComponent_tr_3_Template, 1, 0, "tr", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("trackBy", ctx.trackByFn);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.config == null ? null : ctx.config.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1$6.MatTable, i1$1.NgForOf, i1$6.MatHeaderRowDef, i1$6.MatRowDef, i1$6.MatColumnDef, i1$6.MatHeaderCellDef, i1$1.NgIf, i1$6.MatHeaderCell, i1$1.NgClass, i1$6.MatCellDef, i1$6.MatCell, i1$1.NgStyle, i3$1.MatTooltip, PopoverDirective, StatusComponent, DateTimeComponent, ComponentValueComponent, i1$1.NgTemplateOutlet, TableChipsListComponent, i2$1.MatButton, i10.MatMenuTrigger, i2.MatIcon, i10.MatMenu, i10.MatMenuItem, ActionButtonComponent, ActionComponent, i1$6.MatHeaderRow, i1$6.MatRow], styles: [".grey[_ngcontent-%COMP%]{background-color:#f5f5f5}.row-right-padding[_ngcontent-%COMP%]{padding-right:28px}tr[_ngcontent-%COMP%]   th.right-align[_ngcontent-%COMP%]{text-align:right}.action-list[_ngcontent-%COMP%]{display:flex}.action-button[_ngcontent-%COMP%]{margin:auto}.mat-cell[_ngcontent-%COMP%]{min-height:auto;padding-top:2px;padding-bottom:2px;padding-right:28px}.mat-row[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.link[_ngcontent-%COMP%]:hover, .mat-row[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%]{text-decoration:underline}.link[_ngcontent-%COMP%]:hover{color:blue;cursor:pointer}.text-small[_ngcontent-%COMP%]{max-width:150px}.text-medium[_ngcontent-%COMP%]{max-width:300px}.text-large[_ngcontent-%COMP%]{max-width:450px}lib-action[_ngcontent-%COMP%]{width:40px;display:inline-flex;justify-content:center;height:40px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{
                selector: 'lib-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss'],
            }]
    }], null, { config: [{
            type: Input
        }], trackByFn: [{
            type: Input
        }], data: [{
            type: Input
        }], emitter: [{
            type: Input
        }] }); })();

function ResourceTableComponent_mat_card_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function ResourceTableComponent_mat_card_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.newButtonTriggered(); });
    i0.ɵɵelementStart(1, "mat-icon", 8);
    i0.ɵɵtext(2, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.config == null ? null : ctx_r2.config.newButtonText, " ");
} }
function ResourceTableComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-card", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ResourceTableComponent_mat_card_1_button_4_Template, 4, 1, "button", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "mat-divider");
    i0.ɵɵelementStart(6, "mat-card-content");
    i0.ɵɵelement(7, "lib-table", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r0.totalWidth)("min-width", ctx_r0.minTableWidth);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.config == null ? null : ctx_r0.config.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.config == null ? null : ctx_r0.config.newButtonText);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("config", ctx_r0.config)("data", ctx_r0.data)("trackByFn", ctx_r0.trackByFn)("emitter", ctx_r0.actionsEmitter);
} }
function ResourceTableComponent_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function ResourceTableComponent_div_2_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.newButtonTriggered(); });
    i0.ɵɵelementStart(1, "mat-icon", 8);
    i0.ɵɵtext(2, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.config == null ? null : ctx_r5.config.newButtonText, " ");
} }
function ResourceTableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ResourceTableComponent_div_2_button_4_Template, 4, 1, "button", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "mat-divider");
    i0.ɵɵelement(6, "lib-table", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("width", ctx_r1.totalWidth)("min-width", ctx_r1.minTableWidth);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.config == null ? null : ctx_r1.config.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.config == null ? null : ctx_r1.config.newButtonText);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("config", ctx_r1.config)("data", ctx_r1.data)("trackByFn", ctx_r1.trackByFn)("emitter", ctx_r1.actionsEmitter);
} }
class ResourceTableComponent {
    constructor() {
        // Whenever a button in a row is pressed the component will emit an event
        // with information regarding the button that was pressed as well as the
        // row's object.
        this.actionsEmitter = new EventEmitter();
        this.TABLE_THEME = TABLE_THEME;
    }
    ngOnInit() { }
    actionTriggered(e) {
        // Forward the emitted ActionEvent
        this.actionsEmitter.emit(e);
    }
    newButtonTriggered() {
        const ev = new ActionEvent('newResourceButton', {});
        this.actionsEmitter.emit(ev);
    }
    linkClicked(field, data) {
        const ev = new ActionEvent(`${field}:link`, data);
        this.actionsEmitter.emit(ev);
    }
    get minTableWidth() {
        // Review: This will break if the config is an other falsy value
        // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
        if (typeof this.config === 'undefined') {
            return '600px';
        }
        return `${this.config.columns.length * 100}px`;
    }
    get totalWidth() {
        if (!this.config || !this.config.width) {
            return 'fit-content';
        }
        return this.config.width;
    }
    get tableTheme() {
        if (!this.config || !this.config.theme) {
            return TABLE_THEME.CARD;
        }
        return this.config.theme;
    }
}
ResourceTableComponent.ɵfac = function ResourceTableComponent_Factory(t) { return new (t || ResourceTableComponent)(); };
ResourceTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResourceTableComponent, selectors: [["lib-resource-table"]], inputs: { config: "config", data: "data", trackByFn: "trackByFn" }, outputs: { actionsEmitter: "actionsEmitter" }, decls: 3, vars: 4, consts: [[1, "center-flex"], ["class", "mat-elevation-z4", 3, "width", "min-width", 4, "ngIf"], [3, "width", "min-width", 4, "ngIf"], [1, "mat-elevation-z4"], [1, "header", "card-title-padding"], ["mat-button", "", "id", "newResource", "color", "primary", "class", "right", 3, "click", 4, "ngIf"], [3, "config", "data", "trackByFn", "emitter"], ["mat-button", "", "id", "newResource", "color", "primary", 1, "right", 3, "click"], [1, "new-resource-button"], [1, "header"]], template: function ResourceTableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ResourceTableComponent_mat_card_1_Template, 8, 10, "mat-card", 1);
        i0.ɵɵtemplate(2, ResourceTableComponent_div_2_Template, 7, 10, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("space-top", ctx.tableTheme == ctx.TABLE_THEME.CARD);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.tableTheme == ctx.TABLE_THEME.CARD);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.tableTheme == ctx.TABLE_THEME.FLAT);
    } }, directives: [i1$1.NgIf, i2$2.MatCard, i2$6.MatDivider, i2$2.MatCardContent, TableComponent, i2$1.MatButton, i2.MatIcon], styles: [".right[_ngcontent-%COMP%]{margin-left:auto}.space-top[_ngcontent-%COMP%]{padding-top:1.5rem}mat-card[_ngcontent-%COMP%]{padding:0;margin:0 0 50px}mat-toolbar[_ngcontent-%COMP%]{background:#fff}.header[_ngcontent-%COMP%]{display:flex;align-items:center;height:64px;font-weight:400;font-size:20px}.card-title-padding[_ngcontent-%COMP%]{padding:0 16px}.mat-icon[_ngcontent-%COMP%]{line-height:.85}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResourceTableComponent, [{
        type: Component,
        args: [{
                selector: 'lib-resource-table',
                templateUrl: './resource-table.component.html',
                styleUrls: ['./resource-table.component.scss'],
            }]
    }], function () { return []; }, { config: [{
            type: Input
        }], data: [{
            type: Input
        }], trackByFn: [{
            type: Input
        }], actionsEmitter: [{
            type: Output
        }] }); })();

class IconModule {
    constructor(library) {
        library.addIcons(faCogs, faHdd, faBook, faMicrochip, faLaptopCode, faDocker, faLink, faSlidersH, faBullseye, faStopCircle);
    }
}
IconModule.ɵfac = function IconModule_Factory(t) { return new (t || IconModule)(i0.ɵɵinject(i1$5.FaIconLibrary)); };
IconModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IconModule });
IconModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule, FontAwesomeModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconModule, [{
        type: NgModule,
        args: [{
                declarations: [IconComponent],
                imports: [CommonModule, MatIconModule, FontAwesomeModule],
                exports: [IconComponent],
            }]
    }], function () { return [{ type: i1$5.FaIconLibrary }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IconModule, { declarations: [IconComponent], imports: [CommonModule, MatIconModule, FontAwesomeModule], exports: [IconComponent] }); })();

/* This code was developed by @tasos-ale */
class PopoverModule {
}
PopoverModule.ɵfac = function PopoverModule_Factory(t) { return new (t || PopoverModule)(); };
PopoverModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PopoverModule });
PopoverModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[PortalModule, OverlayModule, MatCardModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverModule, [{
        type: NgModule,
        args: [{
                imports: [PortalModule, OverlayModule, MatCardModule],
                exports: [PopoverDirective],
                declarations: [PopoverDirective, PopoverComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PopoverModule, { declarations: [PopoverDirective, PopoverComponent], imports: [PortalModule, OverlayModule, MatCardModule], exports: [PopoverDirective] }); })();

function DetailsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
function DetailsListComponent_mat_divider_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-divider");
} }
function DetailsListComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "lib-details-list-item", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("key", entry_r3.key)("value", entry_r3.value)("keyTooltip", entry_r3.keyTooltip)("valueTooltip", entry_r3.valueTooltip)("icon", entry_r3.icon)("valueType", entry_r3.valueType)("chipsList", entry_r3.chipsList);
} }
function DetailsListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, DetailsListComponent_div_3_ng_container_1_Template, 2, 7, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r3);
} }
class DetailsListComponent {
    constructor() {
        this.entries = [];
        this.topDivider = true;
    }
}
DetailsListComponent.ɵfac = function DetailsListComponent_Factory(t) { return new (t || DetailsListComponent)(); };
DetailsListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DetailsListComponent, selectors: [["lib-details-list"]], inputs: { entries: "entries", topDivider: "topDivider", title: "title" }, decls: 4, vars: 3, consts: [[1, "list"], ["class", "list-header", 4, "ngIf"], [4, "ngIf"], ["class", "list-entry", 4, "ngFor", "ngForOf"], [1, "list-header"], [1, "list-entry"], [3, "key", "value", "keyTooltip", "valueTooltip", "icon", "valueType", "chipsList"]], template: function DetailsListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DetailsListComponent_div_1_Template, 3, 1, "div", 1);
        i0.ɵɵtemplate(2, DetailsListComponent_mat_divider_2_Template, 1, 0, "mat-divider", 2);
        i0.ɵɵtemplate(3, DetailsListComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.topDivider);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.entries);
    } }, directives: [i1$1.NgIf, i1$1.NgForOf, i2$6.MatDivider, DetailsListItemComponent], styles: [".list[_ngcontent-%COMP%]{display:inline-block;width:100%}.list-header[_ngcontent-%COMP%]{display:flex;align-items:center;height:64px;font-weight:400;font-size:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DetailsListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-details-list',
                templateUrl: './details-list.component.html',
                styleUrls: ['./details-list.component.scss'],
            }]
    }], null, { entries: [{
            type: Input
        }], topDivider: [{
            type: Input
        }], title: [{
            type: Input
        }] }); })();

class DetailsListModule {
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

class DateTimeModule {
}
DateTimeModule.ɵfac = function DateTimeModule_Factory(t) { return new (t || DateTimeModule)(); };
DateTimeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: DateTimeModule });
DateTimeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, PopoverModule, DetailsListModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateTimeModule, [{
        type: NgModule,
        args: [{
                declarations: [DateTimeComponent, ToDatePipe],
                imports: [CommonModule, PopoverModule, DetailsListModule],
                exports: [DateTimeComponent, ToDatePipe],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DateTimeModule, { declarations: [DateTimeComponent, ToDatePipe], imports: [CommonModule, PopoverModule, DetailsListModule], exports: [DateTimeComponent, ToDatePipe] }); })();

class ResourceTableModule {
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

function FormSectionComponent_lib_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "lib-icon", 3);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("icon", ctx_r0.icon);
} }
function FormSectionComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "*The cluster admin has disabled setting this section!");
    i0.ɵɵelementEnd();
} }
const _c0$5 = ["*"];
class FormSectionComponent {
    constructor() { }
    ngOnInit() { }
}
FormSectionComponent.ɵfac = function FormSectionComponent_Factory(t) { return new (t || FormSectionComponent)(); };
FormSectionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormSectionComponent, selectors: [["lib-form-section"]], inputs: { title: "title", text: "text", readOnly: "readOnly", style: "style", icon: "icon" }, ngContentSelectors: _c0$5, decls: 8, vars: 4, consts: [[1, "form--section-bottom"], [3, "icon", 4, "ngIf"], [4, "ngIf"], [3, "icon"]], template: function FormSectionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h3");
        i0.ɵɵtemplate(2, FormSectionComponent_lib_icon_2_Template, 1, 1, "lib-icon", 1);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, FormSectionComponent_p_6_Template, 2, 0, "p", 2);
        i0.ɵɵprojection(7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.icon);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.text);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.readOnly);
    } }, directives: [i1$1.NgIf, IconComponent], styles: [".wide[_ngcontent-%COMP%]{width:100%}h3[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{-webkit-margin-before:.2rem;margin-block-start:.2rem;color:rgba(0,0,0,.54)}.lib-icon[_ngcontent-%COMP%]{margin-right:.3rem}.form--section-bottom[_ngcontent-%COMP%], .form--section-bottom[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-bottom:.5em}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormSectionComponent, [{
        type: Component,
        args: [{
                selector: 'lib-form-section',
                templateUrl: './section.component.html',
                styleUrls: ['./section.component.scss'],
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }], text: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], style: [{
            type: Input
        }], icon: [{
            type: Input
        }] }); })();

const dns1123LabelFmt = '[a-z0-9]([-a-z0-9]*[a-z0-9])?';
const dns1123Validator = {
    regex: '^' + dns1123LabelFmt + '(\\.' + dns1123LabelFmt + ')*' + '$',
    help: "Name must consist of lowercase alphanumeric characters or '-', and\"" +
        ' must start and end with an alphanumeric character',
};
// TODO(kimwnasptd): We only use this validator, do we need the others?
const dns1035Validator = {
    regex: '^[a-z]([-a-z0-9]*[a-z0-9])?$',
    help: $localize `Name must consist of lowercase alphanumeric characters or '-',
    start with an alphabetic character, and end with an alphanumeric character.`,
};
const volSizeValidator = {
    regex: '^[0-9]+(E|Ei|P|Pi|T|Ti|G|Gi|M|Mi|K|Ki)?$',
    help: 'Invalid volume size: Should be an integer, or integer followed ' +
        'by a valid unit',
};
const memoryValidator = {
    regex: '^[0-9]+(' +
        '(([.][0-9]+)(E|Ei|P|Pi|T|Ti|G|Gi|M|Mi|K|Ki))' +
        '|' +
        '(E|Ei|P|Pi|T|Ti|G|Gi|M|Mi|K|Ki)' +
        ')?$',
    help: 'Invalid memory size: Should be an integer, or fixed-point integer' +
        ' followed by a valid unit',
};
const cpuValidator = {
    regex: '^[0-9]*(m|[.][0-9]+)?$',
    help: 'Invalid cpu limit: Should be a fixed-point integer or an integer ' +
        "followed by 'm'",
};
const DEBOUNCE_TIME = 500;
// Create an async validator that adds debounce time to synchronous validators
function mergeAndDebounceValidators(syncValidators) {
    return (control) => {
        return timer(DEBOUNCE_TIME).pipe(switchMap(() => {
            // Run all synchronous validators and return their concatenated output
            let validationResult = {};
            for (const validator of syncValidators) {
                const res = validator(control);
                // No errors
                if (res === null) {
                    continue;
                }
                validationResult = Object.assign({}, res, validationResult);
            }
            // Return the concatenated result from all the validators
            if (Object.keys(validationResult).length === 0) {
                return of(null);
            }
            return of(validationResult);
        }));
    };
}
// Name Validators
const MAX_NAME_LENGTH = 50;
function getNameError(nameCtrl, resource) {
    if (nameCtrl.hasError('existingName')) {
        return `${resource} "${nameCtrl.value}" already exists`;
    }
    else if (nameCtrl.hasError('pattern')) {
        // TODO: "pattern", is generic error, this might break in the future
        return dns1035Validator.help;
    }
    else if (nameCtrl.hasError('maxlength')) {
        return $localize `Name is too long`;
    }
    else {
        return $localize `Name cannot be empty`;
    }
}
function getExistingNameValidator(names) {
    return (control) => {
        return names.has(control.value) ? { existingName: true } : null;
    };
}
function getNameSyncValidators() {
    return [Validators.required];
}
function getNameAsyncValidators(existingNames = new Set(), maxLength = MAX_NAME_LENGTH) {
    return [
        mergeAndDebounceValidators([
            Validators.pattern(dns1035Validator.regex),
            Validators.maxLength(maxLength),
            getExistingNameValidator(existingNames),
        ]),
    ];
}
// Rok
function getRokUrlError(rokUrlCtrl) {
    if (rokUrlCtrl.hasError('required')) {
        return 'Rok URL cannot be empty';
    }
    if (rokUrlCtrl.hasError('invalidRokUrl')) {
        return 'Not a valid Rok URL';
    }
}
function rokUrlValidator(rok) {
    return (control) => {
        const url = control.value;
        // Don't return error if the url is empty
        if (url.length === 0) {
            return of(null);
        }
        // Ensure a protocol is given
        // Don't fire while the user is writting
        return timer(DEBOUNCE_TIME).pipe(switchMap(() => {
            return rok.getObjectMetadata(url, false).pipe(map(resp => {
                return null;
            }), catchError((msg) => {
                return of({ invalidRokUrl: true });
            }));
        }));
    };
}

class NameInputComponent {
    constructor() {
        this.existingNamesPrv = new Set();
        this.resourceName = '';
        this.maxLength = MAX_NAME_LENGTH;
    }
    get existingNames() {
        return this.existingNamesPrv;
    }
    set existingNames(names) {
        this.existingNamesPrv = names;
        this.nameControl.setAsyncValidators(getNameAsyncValidators(this.existingNamesPrv, this.maxLength));
        this.nameControl.setValidators(getNameSyncValidators());
    }
    ngOnInit() {
        this.nameControl.setAsyncValidators(getNameAsyncValidators(this.existingNamesPrv, this.maxLength));
        this.nameControl.setValidators(getNameSyncValidators());
    }
    nameError() {
        return getNameError(this.nameControl, this.resourceName);
    }
}
NameInputComponent.ɵfac = function NameInputComponent_Factory(t) { return new (t || NameInputComponent)(); };
NameInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NameInputComponent, selectors: [["lib-name-input"]], inputs: { nameControl: "nameControl", resourceName: "resourceName", maxLength: "maxLength", existingNames: "existingNames" }, decls: 6, vars: 2, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8953033926734869941$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_INPUT_NAME_INPUT_COMPONENT_TS_1 = goog.getMsg("Name");
        i18n_0 = MSG_EXTERNAL_8953033926734869941$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_INPUT_NAME_INPUT_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟cff1428d10d59d14e45edec3c735a27b5482db59␟8953033926734869941:Name`;
    } return [["appearance", "outline", 1, "wide"], i18n_0, ["matInput", "", "placeholder", "Name", 3, "formControl"]]; }, template: function NameInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵi18n(2, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵelementStart(4, "mat-error");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.nameControl);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.nameError());
    } }, directives: [i1$3.MatFormField, i1$3.MatLabel, i2$7.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1$3.MatError], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NameInputComponent, [{
        type: Component,
        args: [{
                selector: 'lib-name-input',
                templateUrl: './name-input.component.html',
                styleUrls: ['./name-input.component.scss'],
            }]
    }], function () { return []; }, { nameControl: [{
            type: Input
        }], resourceName: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], existingNames: [{
            type: Input
        }] }); })();

class NameNamespaceInputsComponent {
    constructor() {
        this.maxLength = MAX_NAME_LENGTH;
    }
    ngOnInit() { }
}
NameNamespaceInputsComponent.ɵfac = function NameNamespaceInputsComponent_Factory(t) { return new (t || NameNamespaceInputsComponent)(); };
NameNamespaceInputsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NameNamespaceInputsComponent, selectors: [["lib-form-name-namespace-inputs"]], inputs: { nameControl: "nameControl", namespaceControl: "namespaceControl", resourceName: "resourceName", maxLength: "maxLength", existingNames: "existingNames" }, decls: 6, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_1 = goog.getMsg("Namespace");
        i18n_0 = MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟130fd872c78271a8f86b1ab16a76e823969c47d9␟3294686077659093992:Namespace`;
    } let i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_3 = goog.getMsg("Namespace");
        i18n_2 = MSG_EXTERNAL_3294686077659093992$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_NAME_NAMESPACE_INPUTS_NAME_NAMESPACE_INPUTS_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟130fd872c78271a8f86b1ab16a76e823969c47d9␟3294686077659093992:Namespace`;
    } return [[1, "row"], [1, "column", 3, "nameControl", "maxLength", "resourceName", "existingNames"], ["appearance", "outline", 1, "column"], i18n_0, ["matInput", "", "placeholder", i18n_2, "readonly", "", 3, "formControl"]]; }, template: function NameNamespaceInputsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "lib-name-input", 1);
        i0.ɵɵelementStart(2, "mat-form-field", 2);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵi18n(4, 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nameControl", ctx.nameControl)("maxLength", ctx.maxLength)("resourceName", ctx.resourceName)("existingNames", ctx.existingNames);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("formControl", ctx.namespaceControl);
    } }, directives: [NameInputComponent, i1$3.MatFormField, i1$3.MatLabel, i2$7.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NameNamespaceInputsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-form-name-namespace-inputs',
                templateUrl: './name-namespace-inputs.component.html',
                styleUrls: ['./name-namespace-inputs.component.scss'],
            }]
    }], function () { return []; }, { nameControl: [{
            type: Input
        }], namespaceControl: [{
            type: Input
        }], resourceName: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], existingNames: [{
            type: Input
        }] }); })();

function PositiveNumberInputComponent_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵi18n(1, 3);
    i0.ɵɵelementEnd();
} }
class PositiveNumberInputComponent {
    constructor() {
        this.min = 0.1;
        this.step = 0.1;
    }
    ngOnInit() {
        this.sizeControl.setValidators([Validators.required, Validators.min(0)]);
    }
}
PositiveNumberInputComponent.ɵfac = function PositiveNumberInputComponent_Factory(t) { return new (t || PositiveNumberInputComponent)(); };
PositiveNumberInputComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PositiveNumberInputComponent, selectors: [["lib-positive-number-input"]], inputs: { sizeControl: "sizeControl", label: "label", min: "min", step: "step" }, decls: 5, vars: 5, consts: function () { let i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1457381862685487592$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_POSITIVE_NUMBER_INPUT_POSITIVE_NUMBER_INPUT_COMPONENT_TS__1 = goog.getMsg(" Cannot be negative. ");
        i18n_0 = MSG_EXTERNAL_1457381862685487592$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_POSITIVE_NUMBER_INPUT_POSITIVE_NUMBER_INPUT_COMPONENT_TS__1;
    }
    else {
        i18n_0 = $localize `:␟7824eb0fc97826f3919ba20317db1f8fb7926fcf␟1457381862685487592: Cannot be negative. `;
    } return [["appearance", "outline", 1, "wide"], ["matInput", "", "type", "number", 3, "min", "step", "formControl"], [4, "ngIf"], i18n_0]; }, template: function PositiveNumberInputComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵtemplate(4, PositiveNumberInputComponent_mat_error_4_Template, 2, 0, "mat-error", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.label);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("min", ctx.min)("step", ctx.step)("formControl", ctx.sizeControl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.sizeControl.hasError("min"));
    } }, directives: [i1$3.MatFormField, i1$3.MatLabel, i2$7.MatInput, i3.MinValidator, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1$1.NgIf, i1$3.MatError], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PositiveNumberInputComponent, [{
        type: Component,
        args: [{
                selector: 'lib-positive-number-input',
                templateUrl: './positive-number-input.component.html',
                styleUrls: ['./positive-number-input.component.scss'],
            }]
    }], function () { return []; }, { sizeControl: [{
            type: Input
        }], label: [{
            type: Input
        }], min: [{
            type: Input
        }], step: [{
            type: Input
        }] }); })();

function RokUrlInputComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 5);
} }
function RokUrlInputComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 6);
} }
class RokUrlInputComponent {
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
    } }, directives: [i1$3.MatFormField, i1$3.MatLabel, i2$7.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1$3.MatSuffix, i1$1.NgIf, i1$3.MatError], styles: [".form-field-with-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none;outline:none;cursor:pointer;display:flex;align-items:center;border-radius:50%;padding:0;border:5px solid transparent}.form-field-with-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.form-field-with-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background:none;cursor:default}.form-field-with-button[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]{align-items:center}"] });
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

const _c0$4 = ["options"];
const _c3 = ["*"];
class AdvancedOptionsComponent {
    constructor() {
        this.sectionIsExpanded = false;
        this.maxHeight = '5000px';
        this.text = $localize `Advanced Options`;
        this.selfClass = true;
    }
    get buttonIcon() {
        return this.sectionIsExpanded
            ? 'material:expand_less'
            : 'material:expand_more';
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.updateHeight();
    }
    updateHeight() {
        const options = this.optionsWrapper.nativeElement;
        options.style.maxHeight = 0;
        if (this.sectionIsExpanded) {
            options.style.maxHeight = this.maxHeight;
        }
    }
    toggleClicked() {
        this.sectionIsExpanded = !this.sectionIsExpanded;
        this.updateHeight();
    }
}
AdvancedOptionsComponent.ɵfac = function AdvancedOptionsComponent_Factory(t) { return new (t || AdvancedOptionsComponent)(); };
AdvancedOptionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdvancedOptionsComponent, selectors: [["lib-advanced-options"]], viewQuery: function AdvancedOptionsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$4, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.optionsWrapper = _t.first);
    } }, hostVars: 2, hostBindings: function AdvancedOptionsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-advanced-options", ctx.selfClass);
    } }, inputs: { sectionIsExpanded: "sectionIsExpanded", maxHeight: "maxHeight", text: "text" }, ngContentSelectors: _c3, decls: 10, vars: 2, consts: function () { let i18n_1; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8461609631969932886$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_ADVANCED_OPTIONS_ADVANCED_OPTIONS_COMPONENT_TS_2 = goog.getMsg("Hide");
        i18n_1 = MSG_EXTERNAL_8461609631969932886$$________________________USERS_JACOBNEYER_CHARIOT_NOTEBOOKS_FRONTEND_KUBEFLOW_COMMON_LIB_PROJECTS_KUBEFLOW_SRC_LIB_FORM_ADVANCED_OPTIONS_ADVANCED_OPTIONS_COMPONENT_TS_2;
    }
    else {
        i18n_1 = $localize `:␟1eede69e18c5ac9c0b0295b72cabb7e64e029e74␟8461609631969932886:Hide`;
    } return [[1, "flex"], ["matTooltip", i18n_1, "matTooltipPosition", "right", 1, "threadline", 3, "click"], [1, "wide"], [1, "options-wrapper", "anchor"], ["options", ""], [1, "anchor"], ["color", "primary", "mat-button", "", "type", "button", 1, "toggle-button", "button-with-icon", 3, "click"], [1, "blue", 3, "icon"]]; }, template: function AdvancedOptionsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function AdvancedOptionsComponent_Template_div_click_1_listener() { return ctx.toggleClicked(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3, 4);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "button", 6);
        i0.ɵɵlistener("click", function AdvancedOptionsComponent_Template_button_click_7_listener() { return ctx.toggleClicked(); });
        i0.ɵɵelement(8, "lib-icon", 7);
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("icon", ctx.buttonIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.text, " ");
    } }, directives: [i3$1.MatTooltip, i2$1.MatButton, IconComponent], styles: ["[_nghost-%COMP%]{display:block;margin-bottom:1rem}.options-wrapper[_ngcontent-%COMP%]{transition:max-height .3s ease;overflow:hidden}.flex[_ngcontent-%COMP%]{display:flex}.anchor[_ngcontent-%COMP%]{overflow-anchor:none}.threadline[_ngcontent-%COMP%]{border-left:2px solid #edeff1}.threadline[_ngcontent-%COMP%], .threadline[_ngcontent-%COMP%]:hover{padding-right:12px;margin-right:12px}.threadline[_ngcontent-%COMP%]:hover{border-left:2px solid #1e88e5;cursor:pointer}.toggle-button[_ngcontent-%COMP%]{padding:0 4px;margin-left:-8px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdvancedOptionsComponent, [{
        type: Component,
        args: [{
                selector: 'lib-advanced-options',
                templateUrl: './advanced-options.component.html',
                styleUrls: ['./advanced-options.component.scss'],
            }]
    }], function () { return []; }, { sectionIsExpanded: [{
            type: Input
        }], maxHeight: [{
            type: Input
        }], text: [{
            type: Input
        }], selfClass: [{
            type: HostBinding,
            args: ['class.lib-advanced-options']
        }], optionsWrapper: [{
            type: ViewChild,
            args: ['options', { static: true }]
        }] }); })();

function SubmitBarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function SubmitBarComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.create.emit(true); });
    i0.ɵɵtext(1, " CREATE ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.createDisabled);
} }
function SubmitBarComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "mat-spinner", 8);
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵtext(4, "CREATING");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function SubmitBarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵlistener("click", function SubmitBarComponent_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.yaml.emit(true); });
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, " and submit YAML");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
class SubmitBarComponent {
    constructor() {
        this.createDisabled = false;
        this.allowYAMLEditing = true;
        this.isApplying = false;
        this.create = new EventEmitter();
        this.cancel = new EventEmitter();
        this.yaml = new EventEmitter();
    }
    ngOnInit() { }
}
SubmitBarComponent.ɵfac = function SubmitBarComponent_Factory(t) { return new (t || SubmitBarComponent)(); };
SubmitBarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubmitBarComponent, selectors: [["lib-submit-bar"]], inputs: { createDisabled: "createDisabled", allowYAMLEditing: "allowYAMLEditing", isApplying: "isApplying" }, outputs: { create: "create", cancel: "cancel", yaml: "yaml" }, decls: 7, vars: 3, consts: [[1, "flex", "bar"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "disabled", "", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], ["class", "flex text-area", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "disabled", ""], [1, "waiting-button-wrapper"], ["diameter", "16"], [1, "flex", "text-area"], [1, "btn-link", 3, "click"]], template: function SubmitBarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-divider");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵtemplate(2, SubmitBarComponent_button_2_Template, 2, 1, "button", 1);
        i0.ɵɵtemplate(3, SubmitBarComponent_button_3_Template, 5, 0, "button", 2);
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function SubmitBarComponent_Template_button_click_4_listener() { return ctx.cancel.emit(true); });
        i0.ɵɵtext(5, "CANCEL");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, SubmitBarComponent_div_6_Template, 5, 0, "div", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isApplying);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isApplying);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.allowYAMLEditing);
    } }, directives: [i2$6.MatDivider, i1$1.NgIf, i2$1.MatButton, i2$4.MatSpinner], styles: ["[_nghost-%COMP%]{display:block;width:100%}.btn-link[_ngcontent-%COMP%]{color:blue;text-decoration:underline;cursor:pointer;display:inline-block;background-color:transparent;border:0;padding:0;font-family:inherit;font-size:inherit}.bar[_ngcontent-%COMP%]{padding:.5rem 0}.bar[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto}.bar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-left:35%}.bar[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-child(2){margin-left:1rem;margin-right:1rem}.text-area[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{white-space:break-spaces}.waiting-button-wrapper[_ngcontent-%COMP%]{display:flex}.waiting-button-wrapper[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%]{margin:auto .2rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubmitBarComponent, [{
        type: Component,
        args: [{
                selector: 'lib-submit-bar',
                templateUrl: './submit-bar.component.html',
                styleUrls: ['./submit-bar.component.scss'],
            }]
    }], function () { return []; }, { createDisabled: [{
            type: Input
        }], allowYAMLEditing: [{
            type: Input
        }], isApplying: [{
            type: Input
        }], create: [{
            type: Output
        }], cancel: [{
            type: Output
        }], yaml: [{
            type: Output
        }] }); })();

const _c0$3 = ["*"];
class StepInfoComponent {
    constructor() {
        this.selfClass = true;
    }
    ngOnInit() { }
}
StepInfoComponent.ɵfac = function StepInfoComponent_Factory(t) { return new (t || StepInfoComponent)(); };
StepInfoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepInfoComponent, selectors: [["lib-step-info"]], hostVars: 2, hostBindings: function StepInfoComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-step-info", ctx.selfClass);
    } }, inputs: { header: "header" }, ngContentSelectors: _c0$3, decls: 7, vars: 1, consts: [[1, "flex"], [1, "separator"], [1, "lib-flex-layout-column"], [1, "mat-hint", "bold", "small-text"], [1, "mat-hint", "small-text"]], template: function StepInfoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "span", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span", 4);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.header);
    } }, styles: ["[_nghost-%COMP%]{display:block;margin-bottom:8px;width:300px}.separator[_ngcontent-%COMP%]{border-left:2px solid #edeff1;margin-right:12px}.small-text[_ngcontent-%COMP%]{font-size:12px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepInfoComponent, [{
        type: Component,
        args: [{
                selector: 'lib-step-info',
                templateUrl: './step-info.component.html',
                styleUrls: ['./step-info.component.scss'],
            }]
    }], function () { return []; }, { header: [{
            type: Input
        }], selfClass: [{
            type: HostBinding,
            args: ['class.lib-step-info']
        }] }); })();

class FormModule {
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

function forEachHttpHeader(headers, cb) {
    headers.keys().forEach(name => {
        // FIXME: A header name can have more than one values. We must use the
        // getAll() method if we want to support more values.
        const value = headers.get(name);
        cb(name, value);
    });
}
class HeadersInterceptor {
    constructor() { }
    intercept(req, next) {
        return next.handle(req).pipe(map((event) => {
            if (!(event instanceof HttpResponse)) {
                return event;
            }
            const evHeaders = event.headers;
            const h = {};
            forEachHttpHeader(evHeaders, (name, value) => {
                if (name.startsWith('x-object-meta-') ||
                    value === 'x-container-throw-ref') {
                    value = decodeURIComponent(value);
                }
                h[name] = value;
            });
            return event.clone({
                headers: new HttpHeaders(h),
            });
        }));
    }
}
HeadersInterceptor.ɵfac = function HeadersInterceptor_Factory(t) { return new (t || HeadersInterceptor)(); };
HeadersInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HeadersInterceptor, factory: HeadersInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeadersInterceptor, [{
        type: Injectable
    }], function () { return []; }, null); })();

function TitleActionsToolbarComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function TitleActionsToolbarComponent_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.emitBack(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "keyboard_backspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TitleActionsToolbarComponent_ng_container_8_ng_container_1_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r4.icon, " ");
} }
function TitleActionsToolbarComponent_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵlistener("click", function TitleActionsToolbarComponent_ng_container_8_ng_container_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r11); const button_r4 = i0.ɵɵnextContext().$implicit; return button_r4.fn(); });
    i0.ɵɵtemplate(2, TitleActionsToolbarComponent_ng_container_8_ng_container_1_mat_icon_2_Template, 2, 1, "mat-icon", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const button_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", button_r4.color)("disabled", button_r4.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r4.text, " ");
} }
function TitleActionsToolbarComponent_ng_container_8_ng_container_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r4.icon, " ");
} }
function TitleActionsToolbarComponent_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 13);
    i0.ɵɵlistener("click", function TitleActionsToolbarComponent_ng_container_8_ng_container_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r17); const button_r4 = i0.ɵɵnextContext().$implicit; return button_r4.fn(); });
    i0.ɵɵtemplate(2, TitleActionsToolbarComponent_ng_container_8_ng_container_2_mat_icon_2_Template, 2, 1, "mat-icon", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const button_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("color", button_r4.color)("disabled", button_r4.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", button_r4.text, " ");
} }
function TitleActionsToolbarComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TitleActionsToolbarComponent_ng_container_8_ng_container_1_Template, 4, 4, "ng-container", 9);
    i0.ɵɵtemplate(2, TitleActionsToolbarComponent_ng_container_8_ng_container_2_Template, 4, 4, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const button_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r4.raised);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", button_r4.stroked);
} }
const _c0$2 = ["*"];
class TitleActionsToolbarComponent {
    constructor() {
        this.buttons = [];
        this.backButton = false;
        this.back = new EventEmitter();
        this.selfClass = true;
    }
    emitBack() {
        this.back.emit('backButton');
    }
}
TitleActionsToolbarComponent.ɵfac = function TitleActionsToolbarComponent_Factory(t) { return new (t || TitleActionsToolbarComponent)(); };
TitleActionsToolbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TitleActionsToolbarComponent, selectors: [["lib-title-actions-toolbar"]], hostVars: 2, hostBindings: function TitleActionsToolbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-title-actions-toolbar", ctx.selfClass);
    } }, inputs: { buttons: "buttons", backButton: "backButton", title: "title" }, outputs: { back: "back" }, ngContentSelectors: _c0$2, decls: 10, vars: 3, consts: [[1, "flex"], [1, "page-padding-left"], ["mat-icon-button", "", "color", "primary", "class", "back-button", 3, "click", 4, "ngIf"], [1, "title-margin", "title"], [1, "margin-content"], [1, "toolbar-buttons"], [4, "ngFor", "ngForOf"], [1, "page-placement", "margin-top"], ["mat-icon-button", "", "color", "primary", 1, "back-button", 3, "click"], [4, "ngIf"], ["mat-button", "", 1, "toolbar-button", 3, "color", "disabled", "click"], ["class", "button-icon", 4, "ngIf"], [1, "button-icon"], ["mat-stroked-button", "", 1, "toolbar-button", 3, "color", "disabled", "click"]], template: function TitleActionsToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1);
        i0.ɵɵtemplate(2, TitleActionsToolbarComponent_button_2_Template, 3, 0, "button", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵprojection(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵtemplate(8, TitleActionsToolbarComponent_ng_container_8_Template, 3, 2, "ng-container", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "mat-divider", 7);
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.backButton);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.buttons);
    } }, directives: [i1$1.NgIf, i1$1.NgForOf, i2$6.MatDivider, i2$1.MatButton, i2.MatIcon], styles: ["[_nghost-%COMP%]{display:block;width:100%;padding-top:8px}.title[_ngcontent-%COMP%]{font-weight:400;font-size:20px}.back-button[_ngcontent-%COMP%]{margin:auto 0}.actions-wrapper[_ngcontent-%COMP%]{margin-top:.22rem}.title-margin[_ngcontent-%COMP%]{margin:auto 0}.button-icon[_ngcontent-%COMP%]{font-size:1.2rem;padding-top:.1rem}.padding-bottom[_ngcontent-%COMP%]{padding-bottom:2rem}.margin-top[_ngcontent-%COMP%]{margin-top:.2rem}.margin-content[_ngcontent-%COMP%]{margin:auto}.toolbar-buttons[_ngcontent-%COMP%]{margin:auto 0}.toolbar-button[_ngcontent-%COMP%]{margin-left:.2rem}.toolbar-buttons[_ngcontent-%COMP%]   .toolbar-button[_ngcontent-%COMP%]:last-child{margin-right:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleActionsToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'lib-title-actions-toolbar',
                templateUrl: './title-actions-toolbar.component.html',
                styleUrls: ['./title-actions-toolbar.component.scss'],
            }]
    }], null, { buttons: [{
            type: Input
        }], backButton: [{
            type: Input
        }], title: [{
            type: Input
        }], back: [{
            type: Output
        }], selfClass: [{
            type: HostBinding,
            args: ['class.lib-title-actions-toolbar']
        }] }); })();

class TitleActionsToolbarModule {
}
TitleActionsToolbarModule.ɵfac = function TitleActionsToolbarModule_Factory(t) { return new (t || TitleActionsToolbarModule)(); };
TitleActionsToolbarModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TitleActionsToolbarModule });
TitleActionsToolbarModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule, MatDividerModule, MatButtonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleActionsToolbarModule, [{
        type: NgModule,
        args: [{
                declarations: [TitleActionsToolbarComponent],
                imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule],
                exports: [TitleActionsToolbarComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TitleActionsToolbarModule, { declarations: [TitleActionsToolbarComponent], imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule], exports: [TitleActionsToolbarComponent] }); })();

function generateConfig() {
    return {
        title: '',
        width: '100%',
        theme: TABLE_THEME.FLAT,
        columns: [
            {
                matHeaderCellDef: 'Status',
                matColumnDef: 'status',
                width: '40px',
                value: new StatusValue({
                    fieldPhase: 'statusPhase',
                    fieldMessage: 'statusMessage',
                }),
            },
            {
                matHeaderCellDef: 'Type',
                matColumnDef: 'type',
                width: '150px',
                value: new PropertyValue({
                    field: 'type',
                }),
            },
            {
                matHeaderCellDef: 'Last Transition Time',
                matColumnDef: 'lastTransitionTime',
                width: '160px',
                value: new DateTimeValue({
                    field: 'lastTransitionTime',
                }),
            },
            {
                matHeaderCellDef: 'Reason',
                matColumnDef: 'reason',
                width: '150px',
                value: new PropertyValue({
                    field: 'reason',
                }),
            },
            {
                matHeaderCellDef: 'Message',
                matColumnDef: 'message',
                minWidth: '150px',
                value: new PropertyValue({
                    field: 'message',
                }),
            },
        ],
    };
}

class ConditionsTableComponent {
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
    } }, directives: [ResourceTableComponent], encapsulation: 2, changeDetection: 0 });
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

class ConditionsTableModule {
}
ConditionsTableModule.ɵfac = function ConditionsTableModule_Factory(t) { return new (t || ConditionsTableModule)(); };
ConditionsTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ConditionsTableModule });
ConditionsTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, ResourceTableModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConditionsTableModule, [{
        type: NgModule,
        args: [{
                declarations: [ConditionsTableComponent],
                imports: [CommonModule, ResourceTableModule],
                exports: [ConditionsTableComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ConditionsTableModule, { declarations: [ConditionsTableComponent], imports: [CommonModule, ResourceTableModule], exports: [ConditionsTableComponent] }); })();

const _c0$1 = ["*"];
class PanelComponent {
    constructor() {
        this.icon = 'info';
        this.color = 'primary';
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["lib-panel"]], inputs: { icon: "icon", color: "color", message: "message" }, ngContentSelectors: _c0$1, decls: 6, vars: 3, consts: [[1, "panel-body", "flex"], [1, "panel-icon", 3, "color"], [1, "panel-message"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-icon", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtext(4);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("color", ctx.color);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.icon);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.message, " ");
    } }, directives: [i2.MatIcon], styles: [".panel-body[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.05);border-radius:4px;padding:1px;display:flex}.panel-icon[_ngcontent-%COMP%]{display:inline-block;margin:16px 24px}.panel-message[_ngcontent-%COMP%]{flex-wrap:wrap;margin-top:auto;margin-bottom:auto;margin-right:1rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{
                selector: 'lib-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.scss'],
            }]
    }], null, { icon: [{
            type: Input
        }], color: [{
            type: Input
        }], message: [{
            type: Input
        }] }); })();

class PanelModule {
}
PanelModule.ɵfac = function PanelModule_Factory(t) { return new (t || PanelModule)(); };
PanelModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PanelModule });
PanelModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelModule, [{
        type: NgModule,
        args: [{
                declarations: [PanelComponent],
                imports: [CommonModule, MatIconModule],
                exports: [PanelComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PanelModule, { declarations: [PanelComponent], imports: [CommonModule, MatIconModule], exports: [PanelComponent] }); })();

const _c0 = ["spinnerWrapper"];
function LoadingSpinnerComponent_mat_spinner_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("diameter", ctx_r1.diameter);
} }
const _c1 = function (a0) { return { height: a0 }; };
class LoadingSpinnerComponent {
    constructor() {
        this.diameter = 32;
        this.height = `${this.diameter}px`;
        this.initialized = false;
    }
    ngAfterViewInit() {
        if (!this.wrapper) {
            return;
        }
        setTimeout(() => {
            const offset = this.wrapper.nativeElement.getBoundingClientRect().top;
            this.height = `calc(100vh - ${offset}px)`;
            this.initialized = true;
        });
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoadingSpinnerComponent, selectors: [["lib-loading-spinner"]], viewQuery: function LoadingSpinnerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapper = _t.first);
    } }, inputs: { diameter: "diameter" }, decls: 3, vars: 4, consts: [[1, "spinner-wrapper", 3, "ngStyle"], ["spinnerWrapper", ""], [3, "diameter", 4, "ngIf"], [3, "diameter"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵtemplate(2, LoadingSpinnerComponent_mat_spinner_2_Template, 1, 1, "mat-spinner", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx.height));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.initialized);
    } }, directives: [i1$1.NgStyle, i1$1.NgIf, i2$4.MatSpinner], styles: [".spinner-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingSpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'lib-loading-spinner',
                templateUrl: './loading-spinner.component.html',
                styleUrls: ['./loading-spinner.component.scss'],
            }]
    }], null, { diameter: [{
            type: Input
        }], wrapper: [{
            type: ViewChild,
            args: ['spinnerWrapper']
        }] }); })();

class LoadingSpinnerModule {
}
LoadingSpinnerModule.ɵfac = function LoadingSpinnerModule_Factory(t) { return new (t || LoadingSpinnerModule)(); };
LoadingSpinnerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LoadingSpinnerModule });
LoadingSpinnerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatProgressSpinnerModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingSpinnerModule, [{
        type: NgModule,
        args: [{
                declarations: [LoadingSpinnerComponent],
                imports: [CommonModule, MatProgressSpinnerModule],
                exports: [LoadingSpinnerComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoadingSpinnerModule, { declarations: [LoadingSpinnerComponent], imports: [CommonModule, MatProgressSpinnerModule], exports: [LoadingSpinnerComponent] }); })();

var DIALOG_RESP;
(function (DIALOG_RESP) {
    DIALOG_RESP["CANCEL"] = "cancel";
    DIALOG_RESP["ACCEPT"] = "accept";
})(DIALOG_RESP || (DIALOG_RESP = {}));

function ConfirmDialogComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function ConfirmDialogComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onAcceptClicked(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("color", ctx_r0.data.confirmColor);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.data.accept.toUpperCase(), " ");
} }
function ConfirmDialogComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵelement(2, "mat-spinner", 10);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.data.applying);
} }
class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.DIALOG_RESP = DIALOG_RESP;
        this.isApplying = false;
        this.applying$ = new Subject();
    }
    ngOnInit() {
        this.applying$.subscribe(b => {
            this.isApplying = b;
        });
    }
    onAcceptClicked() {
        this.isApplying = true;
        this.applying$.next(true);
    }
    onCancelClicked() {
        this.dialogRef.close(DIALOG_RESP.CANCEL);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(i0.ɵɵdirectiveInject(i1$7.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmDialogComponent, selectors: [["lib-confirm-dialog"]], decls: 12, vars: 7, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "error"], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", 3, "color", "click", 4, "ngIf"], ["mat-button", "", "disabled", "", 4, "ngIf"], ["mat-button", "", 3, "color", "click"], ["mat-button", "", "disabled", ""], [1, "waiting-button-wrapper"], ["diameter", "16"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p", 2);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵelementStart(8, "button", 4);
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, ConfirmDialogComponent_button_10_Template, 2, 2, "button", 5);
        i0.ɵɵtemplate(11, ConfirmDialogComponent_button_11_Template, 5, 1, "button", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.data.title);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.data.message);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.data.error);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("mat-dialog-close", ctx.DIALOG_RESP.CANCEL);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.data.cancel.toUpperCase(), " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isApplying);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isApplying);
    } }, directives: [i1$7.MatDialogTitle, i1$7.MatDialogContent, i1$7.MatDialogActions, i2$1.MatButton, i1$7.MatDialogClose, i1$1.NgIf, i2$4.MatSpinner], styles: [".waiting-button-wrapper[_ngcontent-%COMP%]{display:flex}.waiting-button-wrapper[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin:auto .2rem}.error[_ngcontent-%COMP%]{color:red}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmDialogComponent, [{
        type: Component,
        args: [{
                selector: 'lib-confirm-dialog',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.scss'],
            }]
    }], function () { return [{ type: i1$7.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

class ConfirmDialogModule {
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

class KubeflowModule {
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

class RokService extends BackendService {
    constructor(http, dialog) {
        super(http, dialog);
        this.http = http;
        this.dialog = dialog;
        this.csrfToken = '';
    }
    initCSRF() {
        if (this.csrfToken.length !== 0) {
            return;
        }
        console.log('Setting up CSRF protection for Rok');
        this.http
            .get('/rok/services/settings')
            .pipe(catchError(error => this.handleError(error, true)), map((settings) => {
            console.log('Got back Rok settings:');
            console.log(settings);
            console.log(`Using token: ${settings.static_token}`);
            if (settings.static_token === null) {
                console.warn(`Using null token for CSRF protection!`);
            }
            this.csrfToken = settings.static_token;
        }))
            .subscribe();
    }
    rokRespIsValid(resp) {
        const rokUrl = resp.headers.get('X-Object-Rok-URL');
        const objectUrl = resp.headers.get('X-Object-URL');
        if (rokUrl === null || rokUrl !== objectUrl) {
            throw new ErrorEvent('Bad Rok URL', {
                message: `'${resp.url}' is not a valid Rok URL`,
            });
        }
    }
    getObjectMetadata(url, showSnackBar = true) {
        console.log(`Making a HEAD to '${url} to get Object Metadata`);
        return this.http
            .head(url, {
            headers: new HttpHeaders({
                'X-Auth-Token': this.csrfToken,
            }),
            observe: 'response',
        })
            .pipe(tap(resp => this.rokRespIsValid(resp)), catchError(error => this.handleError(error, showSnackBar)), map((resp) => {
            console.log(`Metadata for object in url: ${url}`);
            console.log(resp.headers);
            return resp.headers;
        }));
    }
    getRokManagedStorageClasses(showSnackBar = true) {
        // Get existing PVCs in a namespace
        const url = `api/rok/storageclasses`;
        return this.http.get(url).pipe(catchError(error => this.handleError(error, showSnackBar)), map((data) => {
            return data.storageClasses;
        }));
    }
}
RokService.ɵfac = function RokService_Factory(t) { return new (t || RokService)(i0.ɵɵinject(i1$2.HttpClient), i0.ɵɵinject(SnackBarService)); };
RokService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RokService, factory: RokService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RokService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1$2.HttpClient }, { type: SnackBarService }]; }, null); })();

class ConfirmDialogService {
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
ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(i0.ɵɵinject(i1$7.MatDialog)); };
ConfirmDialogService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfirmDialogService, factory: ConfirmDialogService.ɵfac, providedIn: ConfirmDialogModule });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmDialogService, [{
        type: Injectable,
        args: [{
                providedIn: ConfirmDialogModule,
            }]
    }], function () { return [{ type: i1$7.MatDialog }]; }, null); })();

function HeadingSubheadingRowComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matTooltip", ctx_r1.tooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.subHeading, " ");
} }
function HeadingSubheadingRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, HeadingSubheadingRowComponent_div_0_div_2_Template, 2, 2, "div", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.heading, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.subHeading);
} }
class HeadingSubheadingRowComponent {
    constructor() {
        this.selfClass = true;
    }
}
HeadingSubheadingRowComponent.ɵfac = function HeadingSubheadingRowComponent_Factory(t) { return new (t || HeadingSubheadingRowComponent)(); };
HeadingSubheadingRowComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeadingSubheadingRowComponent, selectors: [["lib-heading-row"]], hostVars: 2, hostBindings: function HeadingSubheadingRowComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("lib-heading-row", ctx.selfClass);
    } }, inputs: { heading: "heading", subHeading: "subHeading", tooltip: "tooltip" }, decls: 1, vars: 1, consts: [["class", "heading", 4, "ngIf"], [1, "heading"], ["class", "sub-heading", 3, "matTooltip", 4, "ngIf"], [1, "sub-heading", 3, "matTooltip"]], template: function HeadingSubheadingRowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, HeadingSubheadingRowComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.heading);
    } }, directives: [i1$1.NgIf, i3$1.MatTooltip], styles: ["[_nghost-%COMP%]{display:block}.heading[_ngcontent-%COMP%]{font-size:20px;display:flex;margin:0 0 16px}.sub-heading[_ngcontent-%COMP%]{padding-left:8px;color:rgba(0,0,0,.66)}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeadingSubheadingRowComponent, [{
        type: Component,
        args: [{
                selector: 'lib-heading-row',
                templateUrl: './heading-subheading-row.component.html',
                styleUrls: ['./heading-subheading-row.component.scss'],
            }]
    }], null, { heading: [{
            type: Input
        }], subHeading: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], selfClass: [{
            type: HostBinding,
            args: ['class.lib-heading-row']
        }] }); })();

class HeadingSubheadingRowModule {
}
HeadingSubheadingRowModule.ɵfac = function HeadingSubheadingRowModule_Factory(t) { return new (t || HeadingSubheadingRowModule)(); };
HeadingSubheadingRowModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: HeadingSubheadingRowModule });
HeadingSubheadingRowModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatTooltipModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeadingSubheadingRowModule, [{
        type: NgModule,
        args: [{
                declarations: [HeadingSubheadingRowComponent],
                imports: [CommonModule, MatTooltipModule],
                exports: [HeadingSubheadingRowComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HeadingSubheadingRowModule, { declarations: [HeadingSubheadingRowComponent], imports: [CommonModule, MatTooltipModule], exports: [HeadingSubheadingRowComponent] }); })();

class ToolbarButton {
    constructor(config) {
        this.defaults = {
            icon: '',
            text: '',
            disabled: false,
            color: 'primary',
            raised: true,
            fn: () => { },
        };
        const { icon, text, disabled, color, stroked, raised, fn } = Object.assign(Object.assign({}, this.defaults), config);
        this.icon = icon;
        this.text = text;
        this.disabled = disabled;
        this.color = color;
        this.raised = raised;
        this.fn = fn;
        if (stroked) {
            this.raised = false;
            this.stroked = true;
        }
    }
}

function updateNonDirtyControl(control, value) {
    if (!control.dirty) {
        control.setValue(value);
    }
}
function updateControlNonNullValue(control, value, msg = 'Can not update control with value null') {
    if (value === null) {
        console.warn(msg);
        return;
    }
    control.setValue(value);
    control.markAsDirty();
}

/** Error when invalid control is dirty, touched, or submitted. */
class ImmediateErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    }
}

function getCondition(obj, condition) {
    let cs = [];
    try {
        cs = obj.status.conditions;
    }
    catch (err) {
        console.warn('No Conditions are found');
        return undefined;
    }
    if (!cs) {
        return undefined;
    }
    for (const c of cs) {
        if (c.type !== condition) {
            continue;
        }
        return c;
    }
}

/*
 * Public API Surface of kubeflow
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActionButtonValue, ActionEvent, ActionIconValue, ActionListValue, AdvancedOptionsComponent, BackendService, ChipsListValue, ComponentValue, ConditionsTableComponent, ConditionsTableModule, ConfirmDialogComponent, ConfirmDialogModule, ConfirmDialogService, DEBOUNCE_TIME, DIALOG_RESP, DashboardState, DateTimeComponent, DateTimeModule, DateTimeService, DateTimeValue, DetailsListComponent, DetailsListItemComponent, DetailsListModule, ExponentialBackoff, FormModule, FormSectionComponent, HeadingSubheadingRowComponent, HeadingSubheadingRowModule, ImmediateErrorStateMatcher, KubeflowModule, LoadingSpinnerComponent, LoadingSpinnerModule, MAX_NAME_LENGTH, MenuValue, NameInputComponent, NameNamespaceInputsComponent, NamespaceSelectComponent, NamespaceSelectModule, NamespaceService, PanelComponent, PanelModule, PopoverComponent, PopoverDirective, PopoverModule, PopoverTemplatePortal, PositiveNumberInputComponent, PropertyValue, ResourceTableComponent, ResourceTableModule, RokService, RokUrlInputComponent, STATUS_TYPE, SnackBarModule, SnackBarService, SnackType, StatusValue, StepInfoComponent, SubmitBarComponent, TABLE_THEME, TRUNCATE_TEXT_SIZE, TemplateValue, TitleActionsToolbarComponent, TitleActionsToolbarModule, ToDatePipe, ToolbarButton, cpuValidator, defaultDateOptions, defaultTimeOptions, dns1035Validator, dns1123Validator, getCondition, getExistingNameValidator, getNameAsyncValidators, getNameError, getNameSyncValidators, getRokUrlError, memoryValidator, mergeAndDebounceValidators, rokUrlValidator, updateControlNonNullValue, updateNonDirtyControl, volSizeValidator };
//# sourceMappingURL=kubeflow.js.map
