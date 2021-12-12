/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OnDestroy, Provider } from '@angular/core';
import { CdkTable, _CoalescedStyleScheduler } from '@angular/cdk/table';
import { ColumnResize } from './column-resize';
/**
 * Provides an implementation for resizing a column.
 * The details of how resizing works for tables for flex mat-tables are quite different.
 */
export declare abstract class ResizeStrategy {
    protected abstract readonly columnResize: ColumnResize;
    protected abstract readonly styleScheduler: _CoalescedStyleScheduler;
    protected abstract readonly table: CdkTable<unknown>;
    private _pendingResizeDelta;
    /** Updates the width of the specified column. */
    abstract applyColumnSize(cssFriendlyColumnName: string, columnHeader: HTMLElement, sizeInPx: number, previousSizeInPx?: number): void;
    /** Applies a minimum width to the specified column, updating its current width as needed. */
    abstract applyMinColumnSize(cssFriendlyColumnName: string, columnHeader: HTMLElement, minSizeInPx: number): void;
    /** Applies a maximum width to the specified column, updating its current width as needed. */
    abstract applyMaxColumnSize(cssFriendlyColumnName: string, columnHeader: HTMLElement, minSizeInPx: number): void;
    /** Adjusts the width of the table element by the specified delta. */
    protected updateTableWidthAndStickyColumns(delta: number): void;
}
/**
 * The optimially performing resize strategy for &lt;table&gt; elements with table-layout: fixed.
 * Tested against and outperformed:
 *   CSS selector
 *   CSS selector w/ CSS variable
 *   Updating all cell nodes
 */
export declare class TableLayoutFixedResizeStrategy extends ResizeStrategy {
    protected readonly columnResize: ColumnResize;
    protected readonly styleScheduler: _CoalescedStyleScheduler;
    protected readonly table: CdkTable<unknown>;
    constructor(columnResize: ColumnResize, styleScheduler: _CoalescedStyleScheduler, table: CdkTable<unknown>);
    applyColumnSize(_: string, columnHeader: HTMLElement, sizeInPx: number, previousSizeInPx?: number): void;
    applyMinColumnSize(_: string, columnHeader: HTMLElement, sizeInPx: number): void;
    applyMaxColumnSize(_: string, columnHeader: HTMLElement, sizeInPx: number): void;
}
/**
 * The optimally performing resize strategy for flex mat-tables.
 * Tested against and outperformed:
 *   CSS selector w/ CSS variable
 *   Updating all mat-cell nodes
 */
export declare class CdkFlexTableResizeStrategy extends ResizeStrategy implements OnDestroy {
    protected readonly columnResize: ColumnResize;
    protected readonly styleScheduler: _CoalescedStyleScheduler;
    protected readonly table: CdkTable<unknown>;
    private readonly _document;
    private readonly _columnIndexes;
    private readonly _columnProperties;
    private _styleElement?;
    private _indexSequence;
    protected readonly defaultMinSize = 0;
    protected readonly defaultMaxSize: number;
    constructor(columnResize: ColumnResize, styleScheduler: _CoalescedStyleScheduler, table: CdkTable<unknown>, document: any);
    applyColumnSize(cssFriendlyColumnName: string, columnHeader: HTMLElement, sizeInPx: number, previousSizeInPx?: number): void;
    applyMinColumnSize(cssFriendlyColumnName: string, _: HTMLElement, sizeInPx: number): void;
    applyMaxColumnSize(cssFriendlyColumnName: string, _: HTMLElement, sizeInPx: number): void;
    protected getColumnCssClass(cssFriendlyColumnName: string): string;
    ngOnDestroy(): void;
    private _getPropertyValue;
    private _getAppliedWidth;
    private _applyProperty;
    private _getStyleSheet;
    private _getColumnPropertiesMap;
    private _applySizeCss;
}
export declare const TABLE_LAYOUT_FIXED_RESIZE_STRATEGY_PROVIDER: Provider;
export declare const FLEX_RESIZE_STRATEGY_PROVIDER: Provider;
