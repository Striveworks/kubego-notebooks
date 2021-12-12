import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActionEvent, ActionListValue, ActionButtonValue, ActionIconValue, MenuValue, StatusValue, PropertyValue, TABLE_THEME, ChipsListValue, ComponentValue, } from '../types';
import { DateTimeValue } from '../types/date-time';
import { TemplateValue } from '../types/template';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "../../popover/popover.directive";
import * as i5 from "../status/status.component";
import * as i6 from "../../date-time/date-time.component";
import * as i7 from "../component-value/component-value.component";
import * as i8 from "../chips-list/chips-list.component";
import * as i9 from "@angular/material/button";
import * as i10 from "@angular/material/menu";
import * as i11 from "@angular/material/icon";
import * as i12 from "../action-button/action-button.component";
import * as i13 from "../action/action.component";
const _c0 = function (a0, a1, a2) { return { grey: a0, "right-align": a1, "row-right-padding": a2 }; };
function TableComponent_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(2, _c0, ctx_r4.tableTheme === ctx_r4.TABLE_THEME.FLAT, col_r3.textAlignment === "right", col_r3.textAlignment === "right"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", col_r3.matHeaderCellDef, " ");
} }
const _c1 = function (a0, a1) { return { "min-width": a0, width: a1 }; };
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(6, _c1, col_r3.minWidth, col_r3.width))("ngClass", i0.ɵɵpureFunction2(9, _c2, col_r3.textAlignment === "right", col_r3.textAlignment === "right"));
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c1, col_r3.minWidth, col_r3.width));
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(2, _c1, col_r3.minWidth, col_r3.width));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("date", col_r3.value.getValue(element_r24));
} }
function TableComponent_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_ng_container_1_ng_container_4_td_1_Template, 2, 5, "td", 11);
    i0.ɵɵelementContainerEnd();
} }
const _c3 = function (a0) { return { "right-align": a0 }; };
function TableComponent_ng_container_1_ng_container_5_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵelement(1, "lib-component-value", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c1, col_r3.minWidth, col_r3.width))("ngClass", i0.ɵɵpureFunction1(7, _c3, col_r3.rightAlign));
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c1, col_r3.minWidth, col_r3.width))("ngClass", i0.ɵɵpureFunction2(7, _c2, col_r3.textAlignment === "right", col_r3.textAlignment === "right"));
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(3, _c1, col_r3.minWidth, col_r3.width));
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
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction2(4, _c1, col_r3.minWidth, col_r3.width));
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
export class TableComponent {
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
    } }, directives: [i1.MatTable, i2.NgForOf, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatColumnDef, i1.MatHeaderCellDef, i2.NgIf, i1.MatHeaderCell, i2.NgClass, i1.MatCellDef, i1.MatCell, i2.NgStyle, i3.MatTooltip, i4.PopoverDirective, i5.StatusComponent, i6.DateTimeComponent, i7.ComponentValueComponent, i2.NgTemplateOutlet, i8.TableChipsListComponent, i9.MatButton, i10.MatMenuTrigger, i11.MatIcon, i10.MatMenu, i10.MatMenuItem, i12.ActionButtonComponent, i13.ActionComponent, i1.MatHeaderRow, i1.MatRow], styles: [".grey[_ngcontent-%COMP%]{background-color:#f5f5f5}.row-right-padding[_ngcontent-%COMP%]{padding-right:28px}tr[_ngcontent-%COMP%]   th.right-align[_ngcontent-%COMP%]{text-align:right}.action-list[_ngcontent-%COMP%]{display:flex}.action-button[_ngcontent-%COMP%]{margin:auto}.mat-cell[_ngcontent-%COMP%]{min-height:auto;padding-top:2px;padding-bottom:2px;padding-right:28px}.mat-row[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.link[_ngcontent-%COMP%]:hover, .mat-row[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%]{text-decoration:underline}.link[_ngcontent-%COMP%]:hover{color:blue;cursor:pointer}.text-small[_ngcontent-%COMP%]{max-width:150px}.text-medium[_ngcontent-%COMP%]{max-width:300px}.text-large[_ngcontent-%COMP%]{max-width:450px}lib-action[_ngcontent-%COMP%]{width:40px;display:inline-flex;justify-content:center;height:40px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9yZXNvdXJjZS10YWJsZS90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3Jlc291cmNlLXRhYmxlL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBRUwsV0FBVyxFQUNYLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLFNBQVMsRUFDVCxXQUFXLEVBQ1gsYUFBYSxFQUNiLFdBQVcsRUFDWCxjQUFjLEVBQ2QsY0FBYyxHQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDWDlDLDZCQVFDO0lBQ0MsWUFDRjtJQUFBLGlCQUFLOzs7O0lBUEgsdUtBSUU7SUFFRixlQUNGO0lBREUsd0RBQ0Y7Ozs7OztJQUlFLDZCQVFDO0lBQ0MsK0JBTUM7SUFEQyw2VkFBZ0Q7SUFFaEQsWUFDRjtJQUFBLGlCQUFNO0lBQ1IsaUJBQUs7Ozs7SUFmSCxtRkFBMkQsMkdBQUE7SUFPekQsZUFBNEM7SUFBNUMsaUVBQTRDLG9EQUFBLHNDQUFBO0lBTTVDLGVBQ0Y7SUFERSxtRUFDRjs7O0lBbEJKLDZCQUFpRDtJQUMvQyw0RkFrQks7SUFDUCwwQkFBZTs7O0lBSWIsOEJBSUM7SUFDQyxpQ0FBOEQ7SUFDaEUsaUJBQUs7Ozs7SUFI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a0I7UUFBbEIsd0VBQWtCO1FBOEpoQixlQUFpQztRQUFqQyxzREFBaUM7UUFDcEIsZUFBeUI7UUFBekIsdURBQXlCOzt1RkQzSS9DLGNBQWM7Y0FMMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QztnQkFXSyxNQUFNO2tCQURULEtBQUs7WUFjTixTQUFTO2tCQURSLEtBQUs7WUFJRixJQUFJO2tCQURQLEtBQUs7WUFXRyxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtcbiAgVGFibGVDb25maWcsXG4gIEFjdGlvbkV2ZW50LFxuICBBY3Rpb25MaXN0VmFsdWUsXG4gIEFjdGlvbkJ1dHRvblZhbHVlLFxuICBBY3Rpb25JY29uVmFsdWUsXG4gIE1lbnVWYWx1ZSxcbiAgU3RhdHVzVmFsdWUsXG4gIFByb3BlcnR5VmFsdWUsXG4gIFRBQkxFX1RIRU1FLFxuICBDaGlwc0xpc3RWYWx1ZSxcbiAgQ29tcG9uZW50VmFsdWUsXG59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IERhdGVUaW1lVmFsdWUgfSBmcm9tICcuLi90eXBlcy9kYXRlLXRpbWUnO1xuaW1wb3J0IHsgVGVtcGxhdGVWYWx1ZSB9IGZyb20gJy4uL3R5cGVzL3RlbXBsYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQge1xuICBwcml2YXRlIGlubmVyQ29uZmlnOiBUYWJsZUNvbmZpZztcbiAgcHJpdmF0ZSBpbm5lckRhdGE6IGFueVtdID0gW107XG5cbiAgcHVibGljIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKCk7XG4gIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIFRBQkxFX1RIRU1FID0gVEFCTEVfVEhFTUU7XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZyhjb25maWc6IFRhYmxlQ29uZmlnKSB7XG4gICAgdGhpcy5pbm5lckNvbmZpZyA9IGNvbmZpZztcblxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IFtdO1xuICAgIGZvciAoY29uc3QgY29sIG9mIGNvbmZpZy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaChjb2wubWF0Q29sdW1uRGVmKTtcbiAgICB9XG4gIH1cbiAgZ2V0IGNvbmZpZygpOiBUYWJsZUNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5uZXJDb25maWc7XG4gIH1cblxuICBASW5wdXQoKVxuICB0cmFja0J5Rm46IChpbmRleDogbnVtYmVyLCByOiBhbnkpID0+IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgZGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckRhdGE7XG4gIH1cbiAgc2V0IGRhdGEobmV3RGF0YSkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gbmV3RGF0YTtcbiAgfVxuXG4gIC8vIFdoZW5ldmVyIGEgYnV0dG9uIGluIGEgcm93IGlzIHByZXNzZWQgdGhlIGNvbXBvbmVudCB3aWxsIGVtaXQgYW4gZXZlbnRcbiAgLy8gd2l0aCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhlIGJ1dHRvbiB0aGF0IHdhcyBwcmVzc2VkIGFzIHdlbGwgYXMgdGhlXG4gIC8vIHJvdydzIG9iamVjdC5cbiAgQElucHV0KCkgZW1pdHRlcjogRXZlbnRFbWl0dGVyPEFjdGlvbkV2ZW50PjtcblxuICBwdWJsaWMgaXNBY3Rpb25MaXN0VmFsdWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFjdGlvbkxpc3RWYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGlvbkJ1dHRvblZhbHVlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBY3Rpb25CdXR0b25WYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0NoaXBzTGlzdFZhbHVlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBDaGlwc0xpc3RWYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0NvbXBvbmVudFZhbHVlKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBDb21wb25lbnRWYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc1RlbXBsYXRlVmFsdWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFRlbXBsYXRlVmFsdWU7XG4gIH1cblxuICBwdWJsaWMgaXNBY3Rpb25JY29uVmFsdWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFjdGlvbkljb25WYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc01lbnVWYWx1ZShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVudVZhbHVlO1xuICB9XG5cbiAgcHVibGljIGlzU3RhdHVzVmFsdWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIFN0YXR1c1ZhbHVlO1xuICB9XG5cbiAgcHVibGljIGlzUHJvcGVydHlWYWx1ZShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgUHJvcGVydHlWYWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBpc0RhdGVUaW1lVmFsdWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERhdGVUaW1lVmFsdWU7XG4gIH1cblxuICBwdWJsaWMgYWN0aW9uVHJpZ2dlcmVkKGU6IEFjdGlvbkV2ZW50KSB7XG4gICAgLy8gRm9yd2FyZCB0aGUgZW1pdHRlZCBBY3Rpb25FdmVudFxuICAgIHRoaXMuZW1pdHRlci5lbWl0KGUpO1xuICB9XG5cbiAgcHVibGljIG5ld0J1dHRvblRyaWdnZXJlZCgpIHtcbiAgICBjb25zdCBldiA9IG5ldyBBY3Rpb25FdmVudCgnbmV3UmVzb3VyY2VCdXR0b24nLCB7fSk7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoZXYpO1xuICB9XG5cbiAgcHVibGljIGxpbmtDbGlja2VkKGNvbDogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBldiA9IG5ldyBBY3Rpb25FdmVudChgJHtjb2x9OmxpbmtgLCBkYXRhKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdChldik7XG4gIH1cblxuICBnZXQgdGFibGVUaGVtZSgpOiBUQUJMRV9USEVNRSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZyB8fCAhdGhpcy5jb25maWcudGhlbWUpIHtcbiAgICAgIHJldHVybiBUQUJMRV9USEVNRS5DQVJEO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbmZpZy50aGVtZTtcbiAgfVxufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyYWNrQnldPVwidHJhY2tCeUZuXCIgY2xhc3M9XCJ3aWRlXCI+XG4gIDxuZy1jb250YWluZXJcbiAgICBbbWF0Q29sdW1uRGVmXT1cImNvbC5tYXRDb2x1bW5EZWZcIlxuICAgICpuZ0Zvcj1cImxldCBjb2wgb2YgY29uZmlnPy5jb2x1bW5zXCJcbiAgPlxuICAgIDx0aFxuICAgICAgbWF0LWhlYWRlci1jZWxsXG4gICAgICAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICBncmV5OiB0YWJsZVRoZW1lID09PSBUQUJMRV9USEVNRS5GTEFULFxuICAgICAgICAncmlnaHQtYWxpZ24nOiBjb2wudGV4dEFsaWdubWVudCA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgJ3Jvdy1yaWdodC1wYWRkaW5nJzogY29sLnRleHRBbGlnbm1lbnQgPT09ICdyaWdodCdcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIHt7IGNvbC5tYXRIZWFkZXJDZWxsRGVmIH19XG4gICAgPC90aD5cblxuICAgIDwhLS1Qcm9wZXJ0eSBWYWx1ZS0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Byb3BlcnR5VmFsdWUoY29sLnZhbHVlKVwiPlxuICAgICAgPHRkXG4gICAgICAgIG1hdC1jZWxsXG4gICAgICAgICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbmdTdHlsZV09XCJ7ICdtaW4td2lkdGgnOiBjb2wubWluV2lkdGgsIHdpZHRoOiBjb2wud2lkdGggfVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAncmlnaHQtYWxpZ24nOiBjb2wudGV4dEFsaWdubWVudCA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAncm93LXJpZ2h0LXBhZGRpbmcnOiBjb2wudGV4dEFsaWdubWVudCA9PT0gJ3JpZ2h0J1xuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIFttYXRUb29sdGlwXT1cImNvbC52YWx1ZS5nZXRUb29sdGlwKGVsZW1lbnQpXCJcbiAgICAgICAgICBbbGliUG9wb3Zlcl09XCJjb2wudmFsdWUuZ2V0UG9wb3ZlcihlbGVtZW50KVwiXG4gICAgICAgICAgbWF0VG9vbHRpcENsYXNzPVwiY3VzdG9tLXRvb2x0aXBcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImNvbC52YWx1ZS5nZXRDbGFzc2VzKClcIlxuICAgICAgICAgIChjbGljayk9XCJsaW5rQ2xpY2tlZChjb2wubWF0Q29sdW1uRGVmLCBlbGVtZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBjb2wudmFsdWUuZ2V0VmFsdWUoZWxlbWVudCkgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLVN0YXR1cyBWYWx1ZS0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1N0YXR1c1ZhbHVlKGNvbC52YWx1ZSlcIj5cbiAgICAgIDx0ZFxuICAgICAgICBtYXQtY2VsbFxuICAgICAgICAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW25nU3R5bGVdPVwieyAnbWluLXdpZHRoJzogY29sLm1pbldpZHRoLCB3aWR0aDogY29sLndpZHRoIH1cIlxuICAgICAgPlxuICAgICAgICA8bGliLXN0YXR1cyBbcm93XT1cImVsZW1lbnRcIiBbY29uZmlnXT1cImNvbC52YWx1ZVwiPjwvbGliLXN0YXR1cz5cbiAgICAgIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tRGF0ZSBUaW1lIFZhbHVlLS0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzRGF0ZVRpbWVWYWx1ZShjb2wudmFsdWUpXCI+XG4gICAgICA8dGRcbiAgICAgICAgbWF0LWNlbGxcbiAgICAgICAgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cInsgJ21pbi13aWR0aCc6IGNvbC5taW5XaWR0aCwgd2lkdGg6IGNvbC53aWR0aCB9XCJcbiAgICAgID5cbiAgICAgICAgPGxpYi1kYXRlLXRpbWUgW2RhdGVdPVwiY29sLnZhbHVlLmdldFZhbHVlKGVsZW1lbnQpXCI+PC9saWItZGF0ZS10aW1lPlxuICAgICAgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS1Db21wb25lbnQgVmFsdWUtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDb21wb25lbnRWYWx1ZShjb2wudmFsdWUpXCI+XG4gICAgICA8dGRcbiAgICAgICAgbWF0LWNlbGxcbiAgICAgICAgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFtuZ1N0eWxlXT1cInsgJ21pbi13aWR0aCc6IGNvbC5taW5XaWR0aCwgd2lkdGg6IGNvbC53aWR0aCB9XCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAncmlnaHQtYWxpZ24nOiBjb2wucmlnaHRBbGlnbiB9XCJcbiAgICAgID5cbiAgICAgICAgPGxpYi1jb21wb25lbnQtdmFsdWVcbiAgICAgICAgICBbZWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgICAgICBbdmFsdWVEZXNjcmlwdG9yXT1cImNvbC52YWx1ZVwiXG4gICAgICAgID48L2xpYi1jb21wb25lbnQtdmFsdWU+XG4gICAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLVRlbXBsYXRlIFJlZiBWYWx1ZS0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1RlbXBsYXRlVmFsdWUoY29sLnZhbHVlKVwiPlxuICAgICAgPHRkXG4gICAgICAgIG1hdC1jZWxsXG4gICAgICAgICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbbmdTdHlsZV09XCJ7ICdtaW4td2lkdGgnOiBjb2wubWluV2lkdGgsIHdpZHRoOiBjb2wud2lkdGggfVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAncmlnaHQtYWxpZ24nOiBjb2wudGV4dEFsaWdubWVudCA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAncm93LXJpZ2h0LXBhZGRpbmcnOiBjb2wudGV4dEFsaWdubWVudCA9PT0gJ3JpZ2h0J1xuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29sLnZhbHVlLnJlZlwiXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBlbGVtZW50IH1cIlxuICAgICAgICA+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tQ2hpcHMgTGlzdCBWYWx1ZS0tPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NoaXBzTGlzdFZhbHVlKGNvbC52YWx1ZSlcIj5cbiAgICAgIDx0ZFxuICAgICAgICBtYXQtY2VsbFxuICAgICAgICAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW25nU3R5bGVdPVwieyAnbWluLXdpZHRoJzogY29sLm1pbldpZHRoLCB3aWR0aDogY29sLndpZHRoIH1cIlxuICAgICAgPlxuICAgICAgICA8bGliLXRhYmxlLWNoaXBzLWxpc3RcbiAgICAgICAgICBbZWxlbWVudF09XCJlbGVtZW50XCJcbiAgICAgICAgICBbdmFsdWVEZXNjcmlwdG9yXT1cImNvbC52YWx1ZVwiXG4gICAgICAgID48L2xpYi10YWJsZS1jaGlwcy1saXN0PlxuICAgICAgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS1NZW51IFZhbHVlLS0+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTWVudVZhbHVlKGNvbC52YWx1ZSlcIj5cbiAgICAgIDx0ZFxuICAgICAgICBtYXQtY2VsbFxuICAgICAgICAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW25nU3R5bGVdPVwieyAnbWluLXdpZHRoJzogY29sLm1pbldpZHRoLCB3aWR0aDogY29sLndpZHRoIH1cIlxuICAgICAgPlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj57eyBjb2wudmFsdWUubWVudUljb24gfX08L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG1hdC1tZW51LWl0ZW1cbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbC52YWx1ZS5nZXRJdGVtcyhlbGVtZW50KVwiXG4gICAgICAgICAgICBbbWF0VG9vbHRpcF09XCJpdGVtXCJcbiAgICAgICAgICAgIG1hdFRvb2x0aXBDbGFzcz1cImN1c3RvbS10b29sdGlwXCJcbiAgICAgICAgICAgIFttYXRUb29sdGlwRGlzYWJsZWRdPVwiIWNvbC52YWx1ZS5zaG93VG9vbHRpcFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG1hdC1pY29uPnt7IGNvbC52YWx1ZS5pdGVtc0ljb24gfX08L21hdC1pY29uPlxuICAgICAgICAgICAgPHNwYW4+e3sgaXRlbSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9tYXQtbWVudT5cbiAgICAgIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tQWN0aW9uIExpc3QgVmFsdWUtLT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNBY3Rpb25MaXN0VmFsdWUoY29sLnZhbHVlKVwiPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1saXN0XCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGNvbC52YWx1ZS5hY3Rpb25zXCI+XG4gICAgICAgICAgICA8IS0tQnV0dG9uLS0+XG4gICAgICAgICAgICA8bGliLWFjdGlvbi1idXR0b25cbiAgICAgICAgICAgICAgKm5nSWY9XCJpc0FjdGlvbkJ1dHRvblZhbHVlKGFjdGlvbilcIlxuICAgICAgICAgICAgICBjbGFzcz1cImFjdGlvbi1idXR0b25cIlxuICAgICAgICAgICAgICBbYWN0aW9uXT1cImFjdGlvblwiXG4gICAgICAgICAgICAgIFtkYXRhXT1cImVsZW1lbnRcIlxuICAgICAgICAgICAgICAoZW1pdHRlcik9XCJhY3Rpb25UcmlnZ2VyZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICA+PC9saWItYWN0aW9uLWJ1dHRvbj5cblxuICAgICAgICAgICAgPCEtLUljb24tLT5cbiAgICAgICAgICAgIDxsaWItYWN0aW9uXG4gICAgICAgICAgICAgICpuZ0lmPVwiaXNBY3Rpb25JY29uVmFsdWUoYWN0aW9uKVwiXG4gICAgICAgICAgICAgIFthY3Rpb25dPVwiYWN0aW9uXCJcbiAgICAgICAgICAgICAgW2RhdGFdPVwiZWxlbWVudFwiXG4gICAgICAgICAgICAgIChlbWl0dGVyKT1cImFjdGlvblRyaWdnZXJlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L2xpYi1hY3Rpb24+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==