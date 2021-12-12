import { TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { CdkStepLabel, CdkStepHeader, CdkStep, STEPPER_GLOBAL_OPTIONS, CdkStepper, CdkStepperNext, CdkStepperPrevious, CdkStepperModule } from '@angular/cdk/stepper';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Directive, Injectable, Optional, SkipSelf, Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Input, TemplateRef, Inject, forwardRef, ViewContainerRef, ContentChild, QueryList, EventEmitter, ViewChildren, ContentChildren, Output, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { mixinColor, ErrorStateMatcher, MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject, Subscription } from 'rxjs';
import { Directionality } from '@angular/cdk/bidi';
import { switchMap, map, startWith, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/a11y';
import * as ɵngcc2 from '@angular/material/core';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '@angular/material/icon';
import * as ɵngcc5 from '@angular/cdk/portal';
import * as ɵngcc6 from '@angular/cdk/bidi';

function MatStepHeader_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0, 8);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.iconOverrides[ctx_r0.state])("ngTemplateOutletContext", ctx_r0._getIconContext());
} }
function MatStepHeader_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r6._getDefaultTextForState(ctx_r6.state));
} }
function MatStepHeader_ng_container_4_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r7._getDefaultTextForState(ctx_r7.state));
} }
function MatStepHeader_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 9);
    ɵngcc0.ɵɵtemplate(1, MatStepHeader_ng_container_4_span_1_Template, 2, 1, "span", 10);
    ɵngcc0.ɵɵtemplate(2, MatStepHeader_ng_container_4_mat_icon_2_Template, 2, 1, "mat-icon", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngSwitch", ctx_r1.state);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngSwitchCase", "number");
} }
function MatStepHeader_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵelementContainer(1, 13);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r2._templateLabel().template);
} }
function MatStepHeader_div_7_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 12);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.label);
} }
function MatStepHeader_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 14);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4._intl.optionalLabel);
} }
function MatStepHeader_div_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 15);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r5.errorMessage);
} }
function MatStep_ng_template_0_ng_template_1_Template(rf, ctx) { }
function MatStep_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0);
    ɵngcc0.ɵɵtemplate(1, MatStep_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 0);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("cdkPortalOutlet", ctx_r0._portal);
} }
const _c0 = ["*"];
function MatStepper_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "div", 9);
} }
const _c1 = function (a0, a1) { return { step: a0, i: a1 }; };
function MatStepper_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementContainer(1, 7);
    ɵngcc0.ɵɵtemplate(2, MatStepper_ng_container_1_ng_container_2_div_2_Template, 1, 0, "div", 8);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const step_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const isLast_r8 = ctx.last;
    ɵngcc0.ɵɵnextContext(2);
    const _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(3, _c1, step_r6, i_r7));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !isLast_r8);
} }
function MatStepper_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("@horizontalStepTransition.done", function MatStepper_ng_container_1_div_4_Template_div_animation_horizontalStepTransition_done_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(2); return ctx_r12._animationDone.next($event); });
    ɵngcc0.ɵɵelementContainer(1, 11);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("@horizontalStepTransition", ctx_r5._getAnimationDirection(i_r11))("id", ctx_r5._getStepContentId(i_r11));
    ɵngcc0.ɵɵattribute("aria-labelledby", ctx_r5._getStepLabelId(i_r11))("aria-expanded", ctx_r5.selectedIndex === i_r11);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", step_r10.content);
} }
function MatStepper_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "div", 3);
    ɵngcc0.ɵɵtemplate(2, MatStepper_ng_container_1_ng_container_2_Template, 3, 6, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "div", 5);
    ɵngcc0.ɵɵtemplate(4, MatStepper_ng_container_1_div_4_Template, 2, 5, "div", 6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.steps);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.steps);
} }
function MatStepper_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 13);
    ɵngcc0.ɵɵelementContainer(1, 7);
    ɵngcc0.ɵɵelementStart(2, "div", 14);
    ɵngcc0.ɵɵelementStart(3, "div", 15);
    ɵngcc0.ɵɵlistener("@verticalStepTransition.done", function MatStepper_ng_container_2_div_1_Template_div_animation_verticalStepTransition_done_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r19); const ctx_r18 = ɵngcc0.ɵɵnextContext(2); return ctx_r18._animationDone.next($event); });
    ɵngcc0.ɵɵelementStart(4, "div", 16);
    ɵngcc0.ɵɵelementContainer(5, 11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const isLast_r17 = ctx.last;
    const ctx_r14 = ɵngcc0.ɵɵnextContext(2);
    const _r2 = ɵngcc0.ɵɵreference(4);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r2)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(9, _c1, step_r15, i_r16));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵclassProp("mat-stepper-vertical-line", !isLast_r17);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("@verticalStepTransition", ctx_r14._getAnimationDirection(i_r16))("id", ctx_r14._getStepContentId(i_r16));
    ɵngcc0.ɵɵattribute("aria-labelledby", ctx_r14._getStepLabelId(i_r16))("aria-expanded", ctx_r14.selectedIndex === i_r16);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", step_r15.content);
} }
function MatStepper_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, MatStepper_ng_container_2_div_1_Template, 6, 12, "div", 12);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r1.steps);
} }
function MatStepper_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-step-header", 17);
    ɵngcc0.ɵɵlistener("click", function MatStepper_ng_template_3_Template_mat_step_header_click_0_listener() { const step_r20 = ctx.step; return step_r20.select(); })("keydown", function MatStepper_ng_template_3_Template_mat_step_header_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r24); const ctx_r23 = ɵngcc0.ɵɵnextContext(); return ctx_r23._onKeydown($event); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const step_r20 = ctx.step;
    const i_r21 = ctx.i;
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassProp("mat-horizontal-stepper-header", ctx_r3.orientation === "horizontal")("mat-vertical-stepper-header", ctx_r3.orientation === "vertical");
    ɵngcc0.ɵɵproperty("tabIndex", ctx_r3._getFocusIndex() === i_r21 ? 0 : -1)("id", ctx_r3._getStepLabelId(i_r21))("index", i_r21)("state", ctx_r3._getIndicatorType(i_r21, step_r20.state))("label", step_r20.stepLabel || step_r20.label)("selected", ctx_r3.selectedIndex === i_r21)("active", step_r20.completed || ctx_r3.selectedIndex === i_r21 || !ctx_r3.linear)("optional", step_r20.optional)("errorMessage", step_r20.errorMessage)("iconOverrides", ctx_r3._iconOverrides)("disableRipple", ctx_r3.disableRipple)("color", step_r20.color || ctx_r3.color);
    ɵngcc0.ɵɵattribute("aria-posinset", i_r21 + 1)("aria-setsize", ctx_r3.steps.length)("aria-controls", ctx_r3._getStepContentId(i_r21))("aria-selected", ctx_r3.selectedIndex == i_r21)("aria-label", step_r20.ariaLabel || null)("aria-labelledby", !step_r20.ariaLabel && step_r20.ariaLabelledby ? step_r20.ariaLabelledby : null);
} }
class MatStepLabel extends CdkStepLabel {
}
MatStepLabel.ɵfac = /*@__PURE__*/ function () { let ɵMatStepLabel_BaseFactory; return function MatStepLabel_Factory(t) { return (ɵMatStepLabel_BaseFactory || (ɵMatStepLabel_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepLabel)))(t || MatStepLabel); }; }();
MatStepLabel.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: MatStepLabel, selectors: [["", "matStepLabel", ""]], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatStepLabel, [{
        type: Directive,
        args: [{
                selector: '[matStepLabel]'
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Stepper data that is required for internationalization. */
class MatStepperIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new Subject();
        /** Label that is rendered below optional steps. */
        this.optionalLabel = 'Optional';
    }
}
MatStepperIntl.ɵfac = function MatStepperIntl_Factory(t) { return new (t || MatStepperIntl)(); };
MatStepperIntl.ɵprov = i0.ɵɵdefineInjectable({ factory: function MatStepperIntl_Factory() { return new MatStepperIntl(); }, token: MatStepperIntl, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatStepperIntl, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
/** @docs-private */
function MAT_STEPPER_INTL_PROVIDER_FACTORY(parentIntl) {
    return parentIntl || new MatStepperIntl();
}
/** @docs-private */
const MAT_STEPPER_INTL_PROVIDER = {
    provide: MatStepperIntl,
    deps: [[new Optional(), new SkipSelf(), MatStepperIntl]],
    useFactory: MAT_STEPPER_INTL_PROVIDER_FACTORY
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatStepHeader.
/** @docs-private */
class MatStepHeaderBase extends CdkStepHeader {
    constructor(elementRef) {
        super(elementRef);
    }
}
const _MatStepHeaderMixinBase = mixinColor(MatStepHeaderBase, 'primary');
class MatStepHeader extends _MatStepHeaderMixinBase {
    constructor(_intl, _focusMonitor, _elementRef, changeDetectorRef) {
        super(_elementRef);
        this._intl = _intl;
        this._focusMonitor = _focusMonitor;
        this._intlSubscription = _intl.changes.subscribe(() => changeDetectorRef.markForCheck());
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
    }
    ngOnDestroy() {
        this._intlSubscription.unsubscribe();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /** Focuses the step header. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._elementRef, origin, options);
        }
        else {
            this._elementRef.nativeElement.focus(options);
        }
    }
    /** Returns string label of given step if it is a text label. */
    _stringLabel() {
        return this.label instanceof MatStepLabel ? null : this.label;
    }
    /** Returns MatStepLabel if the label of given step is a template label. */
    _templateLabel() {
        return this.label instanceof MatStepLabel ? this.label : null;
    }
    /** Returns the host HTML element. */
    _getHostElement() {
        return this._elementRef.nativeElement;
    }
    /** Template context variables that are exposed to the `matStepperIcon` instances. */
    _getIconContext() {
        return {
            index: this.index,
            active: this.active,
            optional: this.optional
        };
    }
    _getDefaultTextForState(state) {
        if (state == 'number') {
            return `${this.index + 1}`;
        }
        if (state == 'edit') {
            return 'create';
        }
        if (state == 'error') {
            return 'warning';
        }
        return state;
    }
}
MatStepHeader.ɵfac = function MatStepHeader_Factory(t) { return new (t || MatStepHeader)(ɵngcc0.ɵɵdirectiveInject(MatStepperIntl), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.FocusMonitor), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
MatStepHeader.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: MatStepHeader, selectors: [["mat-step-header"]], hostAttrs: ["role", "tab", 1, "mat-step-header"], inputs: { color: "color", state: "state", label: "label", errorMessage: "errorMessage", iconOverrides: "iconOverrides", index: "index", selected: "selected", active: "active", optional: "optional", disableRipple: "disableRipple" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature], decls: 10, vars: 19, consts: [["matRipple", "", 1, "mat-step-header-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-step-icon-content", 3, "ngSwitch"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchDefault"], [1, "mat-step-label"], ["class", "mat-step-text-label", 4, "ngIf"], ["class", "mat-step-optional", 4, "ngIf"], ["class", "mat-step-sub-label-error", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "mat-step-text-label"], [3, "ngTemplateOutlet"], [1, "mat-step-optional"], [1, "mat-step-sub-label-error"]], template: function MatStepHeader_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵtemplate(3, MatStepHeader_ng_container_3_Template, 1, 2, "ng-container", 2);
        ɵngcc0.ɵɵtemplate(4, MatStepHeader_ng_container_4_Template, 3, 2, "ng-container", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵtemplate(6, MatStepHeader_div_6_Template, 2, 1, "div", 5);
        ɵngcc0.ɵɵtemplate(7, MatStepHeader_div_7_Template, 2, 1, "div", 5);
        ɵngcc0.ɵɵtemplate(8, MatStepHeader_div_8_Template, 2, 1, "div", 6);
        ɵngcc0.ɵɵtemplate(9, MatStepHeader_div_9_Template, 2, 1, "div", 7);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disableRipple);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("mat-step-icon-state-", ctx.state, " mat-step-icon");
        ɵngcc0.ɵɵclassProp("mat-step-icon-selected", ctx.selected);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitch", !!(ctx.iconOverrides && ctx.iconOverrides[ctx.state]));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", true);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassProp("mat-step-label-active", ctx.active)("mat-step-label-selected", ctx.selected)("mat-step-label-error", ctx.state == "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._templateLabel());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx._stringLabel());
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.optional && ctx.state != "error");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.state == "error");
    } }, directives: [ɵngcc2.MatRipple, ɵngcc3.NgSwitch, ɵngcc3.NgSwitchCase, ɵngcc3.NgSwitchDefault, ɵngcc3.NgIf, ɵngcc3.NgTemplateOutlet, ɵngcc4.MatIcon], styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
MatStepHeader.ctorParameters = () => [
    { type: MatStepperIntl },
    { type: FocusMonitor },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
MatStepHeader.propDecorators = {
    state: [{ type: Input }],
    label: [{ type: Input }],
    errorMessage: [{ type: Input }],
    iconOverrides: [{ type: Input }],
    index: [{ type: Input }],
    selected: [{ type: Input }],
    active: [{ type: Input }],
    optional: [{ type: Input }],
    disableRipple: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatStepHeader, [{
        type: Component,
        args: [{
                selector: 'mat-step-header',
                template: "<div class=\"mat-step-header-ripple mat-focus-indicator\" matRipple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disableRipple\"></div>\n\n<div class=\"mat-step-icon-state-{{state}} mat-step-icon\" [class.mat-step-icon-selected]=\"selected\">\n  <div class=\"mat-step-icon-content\" [ngSwitch]=\"!!(iconOverrides && iconOverrides[state])\">\n    <ng-container\n      *ngSwitchCase=\"true\"\n      [ngTemplateOutlet]=\"iconOverrides[state]\"\n      [ngTemplateOutletContext]=\"_getIconContext()\"></ng-container>\n    <ng-container *ngSwitchDefault [ngSwitch]=\"state\">\n      <span *ngSwitchCase=\"'number'\">{{_getDefaultTextForState(state)}}</span>\n      <mat-icon *ngSwitchDefault>{{_getDefaultTextForState(state)}}</mat-icon>\n    </ng-container>\n  </div>\n</div>\n<div class=\"mat-step-label\"\n     [class.mat-step-label-active]=\"active\"\n     [class.mat-step-label-selected]=\"selected\"\n     [class.mat-step-label-error]=\"state == 'error'\">\n  <!-- If there is a label template, use it. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_templateLabel()\">\n    <ng-container [ngTemplateOutlet]=\"_templateLabel()!.template\"></ng-container>\n  </div>\n  <!-- If there is no label template, fall back to the text label. -->\n  <div class=\"mat-step-text-label\" *ngIf=\"_stringLabel()\">{{label}}</div>\n\n  <div class=\"mat-step-optional\" *ngIf=\"optional && state != 'error'\">{{_intl.optionalLabel}}</div>\n  <div class=\"mat-step-sub-label-error\" *ngIf=\"state == 'error'\">{{errorMessage}}</div>\n</div>\n\n",
                inputs: ['color'],
                host: {
                    'class': 'mat-step-header',
                    'role': 'tab'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-step-header{overflow:hidden;outline:none;cursor:pointer;position:relative;box-sizing:content-box;-webkit-tap-highlight-color:transparent}.mat-step-optional,.mat-step-sub-label-error{font-size:12px}.mat-step-icon{border-radius:50%;height:24px;width:24px;flex-shrink:0;position:relative}.mat-step-icon-content,.mat-step-icon .mat-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.mat-step-icon .mat-icon{font-size:16px;height:16px;width:16px}.mat-step-icon-state-error .mat-icon{font-size:24px;height:24px;width:24px}.mat-step-label{display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:50px;vertical-align:middle}.mat-step-text-label{text-overflow:ellipsis;overflow:hidden}.mat-step-header .mat-step-header-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: MatStepperIntl }, { type: ɵngcc1.FocusMonitor }, { type: ɵngcc0.ElementRef }, { type: ɵngcc0.ChangeDetectorRef }]; }, { state: [{
            type: Input
        }], label: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], iconOverrides: [{
            type: Input
        }], index: [{
            type: Input
        }], selected: [{
            type: Input
        }], active: [{
            type: Input
        }], optional: [{
            type: Input
        }], disableRipple: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material steppers.
 * @docs-private
 */
const matStepperAnimations = {
    /** Animation that transitions the step along the X axis in a horizontal stepper. */
    horizontalStepTransition: trigger('horizontalStepTransition', [
        state('previous', style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        state('current', style({ transform: 'none', visibility: 'inherit' })),
        state('next', style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        transition('* => *', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)'))
    ]),
    /** Animation that transitions the step along the Y axis in a vertical stepper. */
    verticalStepTransition: trigger('verticalStepTransition', [
        state('previous', style({ height: '0px', visibility: 'hidden' })),
        state('next', style({ height: '0px', visibility: 'hidden' })),
        // Transition to `inherit`, rather than `visible`,
        // because visibility on a child element the one from the parent,
        // making this element focusable inside of a `hidden` element.
        state('current', style({ height: '*', visibility: 'inherit' })),
        transition('* <=> current', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Template to be used to override the icons inside the step header.
 */
class MatStepperIcon {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
MatStepperIcon.ɵfac = function MatStepperIcon_Factory(t) { return new (t || MatStepperIcon)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
MatStepperIcon.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: MatStepperIcon, selectors: [["ng-template", "matStepperIcon", ""]], inputs: { name: ["matStepperIcon", "name"] } });
MatStepperIcon.ctorParameters = () => [
    { type: TemplateRef }
];
MatStepperIcon.propDecorators = {
    name: [{ type: Input, args: ['matStepperIcon',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatStepperIcon, [{
        type: Directive,
        args: [{
                selector: 'ng-template[matStepperIcon]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, { name: [{
            type: Input,
            args: ['matStepperIcon']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Content for a `mat-step` that will be rendered lazily.
 */
class MatStepContent {
    constructor(_template) {
        this._template = _template;
    }
}
MatStepContent.ɵfac = function MatStepContent_Factory(t) { return new (t || MatStepContent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef)); };
MatStepContent.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: MatStepContent, selectors: [["ng-template", "matStepContent", ""]] });
MatStepContent.ctorParameters = () => [
    { type: TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatStepContent, [{
        type: Directive,
        args: [{
                selector: 'ng-template[matStepContent]'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatStep extends CdkStep {
    constructor(stepper, _errorStateMatcher, _viewContainerRef, stepperOptions) {
        super(stepper, stepperOptions);
        this._errorStateMatcher = _errorStateMatcher;
        this._viewContainerRef = _viewContainerRef;
        this._isSelected = Subscription.EMPTY;
    }
    ngAfterContentInit() {
        this._isSelected = this._stepper.steps.changes.pipe(switchMap(() => {
            return this._stepper.selectionChange.pipe(map(event => event.selectedStep === this), startWith(this._stepper.selected === this));
        })).subscribe(isSelected => {
            if (isSelected && this._lazyContent && !this._portal) {
                this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
            }
        });
    }
    ngOnDestroy() {
        this._isSelected.unsubscribe();
    }
    /** Custom error state matcher that additionally checks for validity of interacted form. */
    isErrorState(control, form) {
        const originalErrorState = this._errorStateMatcher.isErrorState(control, form);
        // Custom error state checks for the validity of form that is not submitted or touched
        // since user can trigger a form change by calling for another step without directly
        // interacting with the current form.
        const customErrorState = !!(control && control.invalid && this.interacted);
        return originalErrorState || customErrorState;
    }
}
MatStep.ɵfac = function MatStep_Factory(t) { return new (t || MatStep)(ɵngcc0.ɵɵdirectiveInject(forwardRef(() => MatStepper)), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.ErrorStateMatcher, 4), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ViewContainerRef), ɵngcc0.ɵɵdirectiveInject(STEPPER_GLOBAL_OPTIONS, 8)); };
MatStep.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: MatStep, selectors: [["mat-step"]], contentQueries: function MatStep_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatStepLabel, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatStepContent, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.stepLabel = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._lazyContent = _t.first);
    } }, inputs: { color: "color" }, exportAs: ["matStep"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: ErrorStateMatcher, useExisting: MatStep },
            { provide: CdkStep, useExisting: MatStep },
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[3, "cdkPortalOutlet"]], template: function MatStep_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, MatStep_ng_template_0_Template, 2, 1, "ng-template");
    } }, directives: [ɵngcc5.CdkPortalOutlet], encapsulation: 2, changeDetection: 0 });
MatStep.ctorParameters = () => [
    { type: MatStepper, decorators: [{ type: Inject, args: [forwardRef(() => MatStepper),] }] },
    { type: ErrorStateMatcher, decorators: [{ type: SkipSelf }] },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [STEPPER_GLOBAL_OPTIONS,] }] }
];
MatStep.propDecorators = {
    stepLabel: [{ type: ContentChild, args: [MatStepLabel,] }],
    color: [{ type: Input }],
    _lazyContent: [{ type: ContentChild, args: [MatStepContent, { static: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatStep, [{
        type: Component,
        args: [{
                selector: 'mat-step',
                template: "<ng-template>\n  <ng-content></ng-content>\n  <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n</ng-template>\n",
                providers: [
                    { provide: ErrorStateMatcher, useExisting: MatStep },
                    { provide: CdkStep, useExisting: MatStep },
                ],
                encapsulation: ViewEncapsulation.None,
                exportAs: 'matStep',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: MatStepper, decorators: [{
                type: Inject,
                args: [forwardRef(() => MatStepper)]
            }] }, { type: ɵngcc2.ErrorStateMatcher, decorators: [{
                type: SkipSelf
            }] }, { type: ɵngcc0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [STEPPER_GLOBAL_OPTIONS]
            }] }]; }, { stepLabel: [{
            type: ContentChild,
            args: [MatStepLabel]
        }], color: [{
            type: Input
        }], _lazyContent: [{
            type: ContentChild,
            args: [MatStepContent, { static: false }]
        }] }); })();
/**
 * Proxies the public APIs from `MatStepper` to the deprecated `MatHorizontalStepper` and
 * `MatVerticalStepper`.
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 * @docs-private
 */
class _MatProxyStepperBase extends CdkStepper {
}
_MatProxyStepperBase.ɵfac = /*@__PURE__*/ function () { let ɵ_MatProxyStepperBase_BaseFactory; return function _MatProxyStepperBase_Factory(t) { return (ɵ_MatProxyStepperBase_BaseFactory || (ɵ_MatProxyStepperBase_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(_MatProxyStepperBase)))(t || _MatProxyStepperBase); }; }();
_MatProxyStepperBase.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: _MatProxyStepperBase, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(_MatProxyStepperBase, [{
        type: Directive
    }], null, null); })();
/**
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 */
class MatHorizontalStepper extends _MatProxyStepperBase {
}
MatHorizontalStepper.ɵfac = /*@__PURE__*/ function () { let ɵMatHorizontalStepper_BaseFactory; return function MatHorizontalStepper_Factory(t) { return (ɵMatHorizontalStepper_BaseFactory || (ɵMatHorizontalStepper_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatHorizontalStepper)))(t || MatHorizontalStepper); }; }();
MatHorizontalStepper.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: MatHorizontalStepper, selectors: [["mat-horizontal-stepper"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatHorizontalStepper, [{
        type: Directive,
        args: [{ selector: 'mat-horizontal-stepper' }]
    }], null, null); })();
/**
 * @deprecated Use `MatStepper` instead.
 * @breaking-change 13.0.0
 */
class MatVerticalStepper extends _MatProxyStepperBase {
}
MatVerticalStepper.ɵfac = /*@__PURE__*/ function () { let ɵMatVerticalStepper_BaseFactory; return function MatVerticalStepper_Factory(t) { return (ɵMatVerticalStepper_BaseFactory || (ɵMatVerticalStepper_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatVerticalStepper)))(t || MatVerticalStepper); }; }();
MatVerticalStepper.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: MatVerticalStepper, selectors: [["mat-vertical-stepper"]], features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatVerticalStepper, [{
        type: Directive,
        args: [{ selector: 'mat-vertical-stepper' }]
    }], null, null); })();
class MatStepper extends CdkStepper {
    constructor(dir, changeDetectorRef, elementRef, _document) {
        super(dir, changeDetectorRef, elementRef, _document);
        /** Steps that belong to the current stepper, excluding ones from nested steppers. */
        this.steps = new QueryList();
        /** Event emitted when the current step is done transitioning in. */
        this.animationDone = new EventEmitter();
        /**
         * Whether the label should display in bottom or end position.
         * Only applies in the `horizontal` orientation.
         */
        this.labelPosition = 'end';
        /** Consumer-specified template-refs to be used to override the header icons. */
        this._iconOverrides = {};
        /** Stream of animation `done` events when the body expands/collapses. */
        this._animationDone = new Subject();
        const nodeName = elementRef.nativeElement.nodeName.toLowerCase();
        this.orientation = nodeName === 'mat-vertical-stepper' ? 'vertical' : 'horizontal';
    }
    ngAfterContentInit() {
        super.ngAfterContentInit();
        this._icons.forEach(({ name, templateRef }) => this._iconOverrides[name] = templateRef);
        // Mark the component for change detection whenever the content children query changes
        this.steps.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
            this._stateChanged();
        });
        this._animationDone.pipe(
        // This needs a `distinctUntilChanged` in order to avoid emitting the same event twice due
        // to a bug in animations where the `.done` callback gets invoked twice on some browsers.
        // See https://github.com/angular/angular/issues/24084
        distinctUntilChanged((x, y) => x.fromState === y.fromState && x.toState === y.toState), takeUntil(this._destroyed)).subscribe(event => {
            if (event.toState === 'current') {
                this.animationDone.emit();
            }
        });
    }
}
MatStepper.ɵfac = function MatStepper_Factory(t) { return new (t || MatStepper)(ɵngcc0.ɵɵdirectiveInject(ɵngcc6.Directionality, 8), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(DOCUMENT)); };
MatStepper.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: MatStepper, selectors: [["mat-stepper"], ["mat-vertical-stepper"], ["mat-horizontal-stepper"], ["", "matStepper", ""]], contentQueries: function MatStepper_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatStep, 5);
        ɵngcc0.ɵɵcontentQuery(dirIndex, MatStepperIcon, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._steps = _t);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._icons = _t);
    } }, viewQuery: function MatStepper_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(MatStepHeader, 5);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._stepHeader = _t);
    } }, hostAttrs: ["role", "tablist"], hostVars: 9, hostBindings: function MatStepper_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵattribute("aria-orientation", ctx.orientation);
        ɵngcc0.ɵɵclassProp("mat-stepper-horizontal", ctx.orientation === "horizontal")("mat-stepper-vertical", ctx.orientation === "vertical")("mat-stepper-label-position-end", ctx.orientation === "horizontal" && ctx.labelPosition == "end")("mat-stepper-label-position-bottom", ctx.orientation === "horizontal" && ctx.labelPosition == "bottom");
    } }, inputs: { selectedIndex: "selectedIndex", labelPosition: "labelPosition", disableRipple: "disableRipple", color: "color" }, outputs: { animationDone: "animationDone" }, exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"], features: [ɵngcc0.ɵɵProvidersFeature([
            { provide: CdkStepper, useExisting: MatStepper },
            { provide: MatHorizontalStepper, useExisting: MatStepper },
            { provide: MatVerticalStepper, useExisting: MatStepper },
        ]), ɵngcc0.ɵɵInheritDefinitionFeature], decls: 5, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["stepTemplate", ""], [1, "mat-horizontal-stepper-header-container"], [4, "ngFor", "ngForOf"], [1, "mat-horizontal-content-container"], ["class", "mat-horizontal-stepper-content", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "mat-stepper-horizontal-line", 4, "ngIf"], [1, "mat-stepper-horizontal-line"], ["role", "tabpanel", 1, "mat-horizontal-stepper-content", 3, "id"], [3, "ngTemplateOutlet"], ["class", "mat-step", 4, "ngFor", "ngForOf"], [1, "mat-step"], [1, "mat-vertical-content-container"], ["role", "tabpanel", 1, "mat-vertical-stepper-content", 3, "id"], [1, "mat-vertical-content"], [3, "tabIndex", "id", "index", "state", "label", "selected", "active", "optional", "errorMessage", "iconOverrides", "disableRipple", "color", "click", "keydown"]], template: function MatStepper_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementContainerStart(0, 0);
        ɵngcc0.ɵɵtemplate(1, MatStepper_ng_container_1_Template, 5, 2, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, MatStepper_ng_container_2_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵelementContainerEnd();
        ɵngcc0.ɵɵtemplate(3, MatStepper_ng_template_3_Template, 1, 22, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngSwitch", ctx.orientation);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "horizontal");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", "vertical");
    } }, directives: [ɵngcc3.NgSwitch, ɵngcc3.NgSwitchCase, ɵngcc3.NgForOf, ɵngcc3.NgTemplateOutlet, ɵngcc3.NgIf, MatStepHeader], styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"], encapsulation: 2, data: { animation: [
            matStepperAnimations.horizontalStepTransition,
            matStepperAnimations.verticalStepTransition,
        ] }, changeDetection: 0 });
MatStepper.ctorParameters = () => [
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
MatStepper.propDecorators = {
    _stepHeader: [{ type: ViewChildren, args: [MatStepHeader,] }],
    _steps: [{ type: ContentChildren, args: [MatStep, { descendants: true },] }],
    _icons: [{ type: ContentChildren, args: [MatStepperIcon, { descendants: true },] }],
    animationDone: [{ type: Output }],
    disableRipple: [{ type: Input }],
    color: [{ type: Input }],
    labelPosition: [{ type: Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatStepper, [{
        type: Component,
        args: [{
                selector: 'mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]',
                exportAs: 'matStepper, matVerticalStepper, matHorizontalStepper',
                template: "<ng-container [ngSwitch]=\"orientation\">\n  <!-- Horizontal stepper -->\n  <ng-container *ngSwitchCase=\"'horizontal'\">\n    <div class=\"mat-horizontal-stepper-header-container\">\n      <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\">\n        <ng-container\n          [ngTemplateOutlet]=\"stepTemplate\"\n          [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n        <div *ngIf=\"!isLast\" class=\"mat-stepper-horizontal-line\"></div>\n      </ng-container>\n    </div>\n\n    <div class=\"mat-horizontal-content-container\">\n      <div *ngFor=\"let step of steps; let i = index\"\n           class=\"mat-horizontal-stepper-content\" role=\"tabpanel\"\n           [@horizontalStepTransition]=\"_getAnimationDirection(i)\"\n           (@horizontalStepTransition.done)=\"_animationDone.next($event)\"\n           [id]=\"_getStepContentId(i)\"\n           [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n           [attr.aria-expanded]=\"selectedIndex === i\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n    </div>\n  </ng-container>\n\n  <!-- Vertical stepper -->\n  <ng-container *ngSwitchCase=\"'vertical'\">\n    <div class=\"mat-step\" *ngFor=\"let step of steps; let i = index; let isLast = last\">\n      <ng-container\n        [ngTemplateOutlet]=\"stepTemplate\"\n        [ngTemplateOutletContext]=\"{step: step, i: i}\"></ng-container>\n      <div class=\"mat-vertical-content-container\" [class.mat-stepper-vertical-line]=\"!isLast\">\n        <div class=\"mat-vertical-stepper-content\" role=\"tabpanel\"\n             [@verticalStepTransition]=\"_getAnimationDirection(i)\"\n             (@verticalStepTransition.done)=\"_animationDone.next($event)\"\n             [id]=\"_getStepContentId(i)\"\n             [attr.aria-labelledby]=\"_getStepLabelId(i)\"\n             [attr.aria-expanded]=\"selectedIndex === i\">\n          <div class=\"mat-vertical-content\">\n            <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n</ng-container>\n\n<!-- Common step templating -->\n<ng-template let-step=\"step\" let-i=\"i\" #stepTemplate>\n  <mat-step-header\n    [class.mat-horizontal-stepper-header]=\"orientation === 'horizontal'\"\n    [class.mat-vertical-stepper-header]=\"orientation === 'vertical'\"\n    (click)=\"step.select()\"\n    (keydown)=\"_onKeydown($event)\"\n    [tabIndex]=\"_getFocusIndex() === i ? 0 : -1\"\n    [id]=\"_getStepLabelId(i)\"\n    [attr.aria-posinset]=\"i + 1\"\n    [attr.aria-setsize]=\"steps.length\"\n    [attr.aria-controls]=\"_getStepContentId(i)\"\n    [attr.aria-selected]=\"selectedIndex == i\"\n    [attr.aria-label]=\"step.ariaLabel || null\"\n    [attr.aria-labelledby]=\"(!step.ariaLabel && step.ariaLabelledby) ? step.ariaLabelledby : null\"\n    [index]=\"i\"\n    [state]=\"_getIndicatorType(i, step.state)\"\n    [label]=\"step.stepLabel || step.label\"\n    [selected]=\"selectedIndex === i\"\n    [active]=\"step.completed || selectedIndex === i || !linear\"\n    [optional]=\"step.optional\"\n    [errorMessage]=\"step.errorMessage\"\n    [iconOverrides]=\"_iconOverrides\"\n    [disableRipple]=\"disableRipple\"\n    [color]=\"step.color || color\"></mat-step-header>\n</ng-template>\n",
                inputs: ['selectedIndex'],
                host: {
                    '[class.mat-stepper-horizontal]': 'orientation === "horizontal"',
                    '[class.mat-stepper-vertical]': 'orientation === "vertical"',
                    '[class.mat-stepper-label-position-end]': 'orientation === "horizontal" && labelPosition == "end"',
                    '[class.mat-stepper-label-position-bottom]': 'orientation === "horizontal" && labelPosition == "bottom"',
                    '[attr.aria-orientation]': 'orientation',
                    'role': 'tablist'
                },
                animations: [
                    matStepperAnimations.horizontalStepTransition,
                    matStepperAnimations.verticalStepTransition,
                ],
                providers: [
                    { provide: CdkStepper, useExisting: MatStepper },
                    { provide: MatHorizontalStepper, useExisting: MatStepper },
                    { provide: MatVerticalStepper, useExisting: MatStepper },
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mat-stepper-vertical,.mat-stepper-horizontal{display:block}.mat-horizontal-stepper-header-container{white-space:nowrap;display:flex;align-items:center}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container{align-items:flex-start}.mat-stepper-horizontal-line{border-top-width:1px;border-top-style:solid;flex:auto;height:0;margin:0 -16px;min-width:32px}.mat-stepper-label-position-bottom .mat-stepper-horizontal-line{margin:0;min-width:0;position:relative}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before,.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{border-top-width:1px;border-top-style:solid;content:\"\";display:inline-block;height:0;position:absolute;width:calc(50% - 20px)}.mat-horizontal-stepper-header{display:flex;height:72px;overflow:hidden;align-items:center;padding:0 24px}.mat-horizontal-stepper-header .mat-step-icon{margin-right:8px;flex:none}[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:8px}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header{box-sizing:border-box;flex-direction:column;height:auto}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after{right:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before{left:0}[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before,[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after{display:none}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon{margin-right:0;margin-left:0}.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label{padding:16px 0 0 0;text-align:center;width:100%}.mat-vertical-stepper-header{display:flex;align-items:center;height:24px}.mat-vertical-stepper-header .mat-step-icon{margin-right:12px}[dir=rtl] .mat-vertical-stepper-header .mat-step-icon{margin-right:0;margin-left:12px}.mat-horizontal-stepper-content{outline:0}.mat-horizontal-stepper-content[aria-expanded=false]{height:0;overflow:hidden}.mat-horizontal-content-container{overflow:hidden;padding:0 24px 24px 24px}.mat-vertical-content-container{margin-left:36px;border:0;position:relative}[dir=rtl] .mat-vertical-content-container{margin-left:0;margin-right:36px}.mat-stepper-vertical-line::before{content:\"\";position:absolute;left:0;border-left-width:1px;border-left-style:solid}[dir=rtl] .mat-stepper-vertical-line::before{left:auto;right:0}.mat-vertical-stepper-content{overflow:hidden;outline:0}.mat-vertical-content{padding:0 24px 24px 24px}.mat-step:last-child .mat-vertical-content-container{border:none}\n"]
            }]
    }], function () { return [{ type: ɵngcc6.Directionality, decorators: [{
                type: Optional
            }] }, { type: ɵngcc0.ChangeDetectorRef }, { type: ɵngcc0.ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { animationDone: [{
            type: Output
        }], labelPosition: [{
            type: Input
        }], _stepHeader: [{
            type: ViewChildren,
            args: [MatStepHeader]
        }], _steps: [{
            type: ContentChildren,
            args: [MatStep, { descendants: true }]
        }], _icons: [{
            type: ContentChildren,
            args: [MatStepperIcon, { descendants: true }]
        }], disableRipple: [{
            type: Input
        }], color: [{
            type: Input
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Button that moves to the next step in a stepper workflow. */
class MatStepperNext extends CdkStepperNext {
}
MatStepperNext.ɵfac = /*@__PURE__*/ function () { let ɵMatStepperNext_BaseFactory; return function MatStepperNext_Factory(t) { return (ɵMatStepperNext_BaseFactory || (ɵMatStepperNext_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepperNext)))(t || MatStepperNext); }; }();
MatStepperNext.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: MatStepperNext, selectors: [["button", "matStepperNext", ""]], hostAttrs: [1, "mat-stepper-next"], hostVars: 1, hostBindings: function MatStepperNext_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatStepperNext, [{
        type: Directive,
        args: [{
                selector: 'button[matStepperNext]',
                host: {
                    'class': 'mat-stepper-next',
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();
/** Button that moves to the previous step in a stepper workflow. */
class MatStepperPrevious extends CdkStepperPrevious {
}
MatStepperPrevious.ɵfac = /*@__PURE__*/ function () { let ɵMatStepperPrevious_BaseFactory; return function MatStepperPrevious_Factory(t) { return (ɵMatStepperPrevious_BaseFactory || (ɵMatStepperPrevious_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MatStepperPrevious)))(t || MatStepperPrevious); }; }();
MatStepperPrevious.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: MatStepperPrevious, selectors: [["button", "matStepperPrevious", ""]], hostAttrs: [1, "mat-stepper-previous"], hostVars: 1, hostBindings: function MatStepperPrevious_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("type", ctx.type);
    } }, inputs: { type: "type" }, features: [ɵngcc0.ɵɵInheritDefinitionFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatStepperPrevious, [{
        type: Directive,
        args: [{
                selector: 'button[matStepperPrevious]',
                host: {
                    'class': 'mat-stepper-previous',
                    '[type]': 'type'
                },
                inputs: ['type']
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatStepperModule {
}
MatStepperModule.ɵfac = function MatStepperModule_Factory(t) { return new (t || MatStepperModule)(); };
MatStepperModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: MatStepperModule });
MatStepperModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher], imports: [[
            MatCommonModule,
            CommonModule,
            PortalModule,
            MatButtonModule,
            CdkStepperModule,
            MatIconModule,
            MatRippleModule,
        ], MatCommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MatStepperModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatCommonModule,
                    CommonModule,
                    PortalModule,
                    MatButtonModule,
                    CdkStepperModule,
                    MatIconModule,
                    MatRippleModule,
                ],
                exports: [
                    MatCommonModule,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                    MatStepContent,
                ],
                declarations: [
                    MatHorizontalStepper,
                    MatVerticalStepper,
                    MatStep,
                    MatStepLabel,
                    MatStepper,
                    MatStepperNext,
                    MatStepperPrevious,
                    MatStepHeader,
                    MatStepperIcon,
                    MatStepContent,
                ],
                providers: [MAT_STEPPER_INTL_PROVIDER, ErrorStateMatcher]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MatStepperModule, { declarations: function () { return [MatHorizontalStepper, MatVerticalStepper, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]; }, imports: function () { return [MatCommonModule,
        CommonModule,
        PortalModule,
        MatButtonModule,
        CdkStepperModule,
        MatIconModule,
        MatRippleModule]; }, exports: function () { return [MatCommonModule, MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious, MatStepHeader, MatStepperIcon, MatStepContent]; } }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MAT_STEPPER_INTL_PROVIDER, MAT_STEPPER_INTL_PROVIDER_FACTORY, MatHorizontalStepper, MatStep, MatStepContent, MatStepHeader, MatStepLabel, MatStepper, MatStepperIcon, MatStepperIntl, MatStepperModule, MatStepperNext, MatStepperPrevious, MatVerticalStepper, matStepperAnimations };

//# sourceMappingURL=stepper.js.map