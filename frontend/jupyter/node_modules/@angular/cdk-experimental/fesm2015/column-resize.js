import { Directive, Injectable, NgZone, Inject, ElementRef, NgModule, Injector } from '@angular/core';
import { Subject, fromEvent, merge, combineLatest, Observable } from 'rxjs';
import { map, takeUntil, filter, mapTo, take, startWith, pairwise, distinctUntilChanged, share, skip } from 'rxjs/operators';
import { _closest, _matches } from '@angular/cdk-experimental/popover-edit';
import { _CoalescedStyleScheduler, _COALESCED_STYLE_SCHEDULER, CdkTable } from '@angular/cdk/table';
import { DOCUMENT } from '@angular/common';
import { coerceCssPixelValue } from '@angular/cdk/coercion';
import { ComponentPortal } from '@angular/cdk/portal';
import { ESCAPE } from '@angular/cdk/keycodes';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO: Figure out how to remove `mat-` classes from the CDK part of the
// column resize implementation.
const HEADER_CELL_SELECTOR = '.cdk-header-cell, .mat-header-cell';
const HEADER_ROW_SELECTOR = '.cdk-header-row, .mat-header-row';
const RESIZE_OVERLAY_SELECTOR = '.mat-column-resize-overlay-thumb';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const HOVER_OR_ACTIVE_CLASS = 'cdk-column-resize-hover-or-active';
const WITH_RESIZED_COLUMN_CLASS = 'cdk-column-resize-with-resized-column';
let nextId = 0;
/**
 * Base class for ColumnResize directives which attach to mat-table elements to
 * provide common events and services for column resizing.
 */
class ColumnResize {
    constructor() {
        this.destroyed = new Subject();
        /** Unique ID for this table instance. */
        this.selectorId = `${++nextId}`;
    }
    ngAfterViewInit() {
        this.elementRef.nativeElement.classList.add(this.getUniqueCssClass());
        this._listenForRowHoverEvents();
        this._listenForResizeActivity();
        this._listenForHoverActivity();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    /** Gets the unique CSS class name for this table instance. */
    getUniqueCssClass() {
        return `cdk-column-resize-${this.selectorId}`;
    }
    /** Called when a column in the table is resized. Applies a css class to the table element. */
    setResized() {
        this.elementRef.nativeElement.classList.add(WITH_RESIZED_COLUMN_CLASS);
    }
    _listenForRowHoverEvents() {
        this.ngZone.runOutsideAngular(() => {
            const element = this.elementRef.nativeElement;
            fromEvent(element, 'mouseover').pipe(map(event => _closest(event.target, HEADER_CELL_SELECTOR)), takeUntil(this.destroyed)).subscribe(this.eventDispatcher.headerCellHovered);
            fromEvent(element, 'mouseleave').pipe(filter(event => !!event.relatedTarget &&
                !_matches(event.relatedTarget, RESIZE_OVERLAY_SELECTOR)), mapTo(null), takeUntil(this.destroyed)).subscribe(this.eventDispatcher.headerCellHovered);
        });
    }
    _listenForResizeActivity() {
        merge(this.eventDispatcher.overlayHandleActiveForCell.pipe(mapTo(undefined)), this.notifier.triggerResize.pipe(mapTo(undefined)), this.notifier.resizeCompleted.pipe(mapTo(undefined))).pipe(take(1), takeUntil(this.destroyed)).subscribe(() => {
            this.setResized();
        });
    }
    _listenForHoverActivity() {
        this.eventDispatcher.headerRowHoveredOrActiveDistinct.pipe(startWith(null), pairwise(), takeUntil(this.destroyed)).subscribe(([previousRow, hoveredRow]) => {
            if (hoveredRow) {
                hoveredRow.classList.add(HOVER_OR_ACTIVE_CLASS);
            }
            if (previousRow) {
                previousRow.classList.remove(HOVER_OR_ACTIVE_CLASS);
            }
        });
    }
}
ColumnResize.decorators = [
    { type: Directive }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Originating source of column resize events within a table.
 * @docs-private
 */
class ColumnResizeNotifierSource {
    constructor() {
        /** Emits when an in-progress resize is canceled. */
        this.resizeCanceled = new Subject();
        /** Emits when a resize is applied. */
        this.resizeCompleted = new Subject();
        /** Triggers a resize action. */
        this.triggerResize = new Subject();
    }
}
ColumnResizeNotifierSource.decorators = [
    { type: Injectable }
];
/** Service for triggering column resizes imperatively or being notified of them. */
class ColumnResizeNotifier {
    constructor(_source) {
        this._source = _source;
        /** Emits whenever a column is resized. */
        this.resizeCompleted = this._source.resizeCompleted;
    }
    /** Instantly resizes the specified column. */
    resize(columnId, size) {
        this._source.triggerResize.next({ columnId, size, completeImmediately: true, isStickyColumn: true });
    }
}
ColumnResizeNotifier.decorators = [
    { type: Injectable }
];
ColumnResizeNotifier.ctorParameters = () => [
    { type: ColumnResizeNotifierSource }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coordinates events between the column resize directives. */
class HeaderRowEventDispatcher {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /**
         * Emits the currently hovered header cell or null when no header cells are hovered.
         * Exposed publicly for events to feed in, but subscribers should use headerCellHoveredDistinct,
         * defined below.
         */
        this.headerCellHovered = new Subject();
        /**
         * Emits the header cell for which a user-triggered resize is active or null
         * when no resize is in progress.
         */
        this.overlayHandleActiveForCell = new Subject();
        /** Distinct and shared version of headerCellHovered. */
        this.headerCellHoveredDistinct = this.headerCellHovered.pipe(distinctUntilChanged(), share());
        /**
         * Emits the header that is currently hovered or hosting an active resize event (with active
         * taking precedence).
         */
        this.headerRowHoveredOrActiveDistinct = combineLatest([
            this.headerCellHoveredDistinct.pipe(map(cell => _closest(cell, HEADER_ROW_SELECTOR)), startWith(null), distinctUntilChanged()),
            this.overlayHandleActiveForCell.pipe(map(cell => _closest(cell, HEADER_ROW_SELECTOR)), startWith(null), distinctUntilChanged()),
        ]).pipe(skip(1), // Ignore initial [null, null] emission.
        map(([hovered, active]) => active || hovered), distinctUntilChanged(), share());
        this._headerRowHoveredOrActiveDistinctReenterZone = this.headerRowHoveredOrActiveDistinct.pipe(this._enterZone(), share());
        // Optimization: Share row events observable with subsequent callers.
        // At startup, calls will be sequential by row (and typically there's only one).
        this._lastSeenRow = null;
        this._lastSeenRowHover = null;
    }
    /**
     * Emits whether the specified row should show its overlay controls.
     * Emission occurs within the NgZone.
     */
    resizeOverlayVisibleForHeaderRow(row) {
        if (row !== this._lastSeenRow) {
            this._lastSeenRow = row;
            this._lastSeenRowHover = this._headerRowHoveredOrActiveDistinctReenterZone.pipe(map(hoveredRow => hoveredRow === row), distinctUntilChanged(), share());
        }
        return this._lastSeenRowHover;
    }
    _enterZone() {
        return (source) => new Observable((observer) => source.subscribe({
            next: (value) => this._ngZone.run(() => observer.next(value)),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        }));
    }
}
HeaderRowEventDispatcher.decorators = [
    { type: Injectable }
];
HeaderRowEventDispatcher.ctorParameters = () => [
    { type: NgZone }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides an implementation for resizing a column.
 * The details of how resizing works for tables for flex mat-tables are quite different.
 */
class ResizeStrategy {
    constructor() {
        this._pendingResizeDelta = null;
    }
    /** Adjusts the width of the table element by the specified delta. */
    updateTableWidthAndStickyColumns(delta) {
        var _a;
        if (this._pendingResizeDelta === null) {
            const tableElement = this.columnResize.elementRef.nativeElement;
            const tableWidth = getElementWidth(tableElement);
            this.styleScheduler.schedule(() => {
                tableElement.style.width = coerceCssPixelValue(tableWidth + this._pendingResizeDelta);
                this._pendingResizeDelta = null;
            });
            this.styleScheduler.scheduleEnd(() => {
                this.table.updateStickyColumnStyles();
            });
        }
        this._pendingResizeDelta = ((_a = this._pendingResizeDelta) !== null && _a !== void 0 ? _a : 0) + delta;
    }
}
ResizeStrategy.decorators = [
    { type: Injectable }
];
/**
 * The optimially performing resize strategy for &lt;table&gt; elements with table-layout: fixed.
 * Tested against and outperformed:
 *   CSS selector
 *   CSS selector w/ CSS variable
 *   Updating all cell nodes
 */
class TableLayoutFixedResizeStrategy extends ResizeStrategy {
    constructor(columnResize, styleScheduler, table) {
        super();
        this.columnResize = columnResize;
        this.styleScheduler = styleScheduler;
        this.table = table;
    }
    applyColumnSize(_, columnHeader, sizeInPx, previousSizeInPx) {
        const delta = sizeInPx - (previousSizeInPx !== null && previousSizeInPx !== void 0 ? previousSizeInPx : getElementWidth(columnHeader));
        if (delta === 0) {
            return;
        }
        this.styleScheduler.schedule(() => {
            columnHeader.style.width = coerceCssPixelValue(sizeInPx);
        });
        this.updateTableWidthAndStickyColumns(delta);
    }
    applyMinColumnSize(_, columnHeader, sizeInPx) {
        const currentWidth = getElementWidth(columnHeader);
        const newWidth = Math.max(currentWidth, sizeInPx);
        this.applyColumnSize(_, columnHeader, newWidth, currentWidth);
    }
    applyMaxColumnSize(_, columnHeader, sizeInPx) {
        const currentWidth = getElementWidth(columnHeader);
        const newWidth = Math.min(currentWidth, sizeInPx);
        this.applyColumnSize(_, columnHeader, newWidth, currentWidth);
    }
}
TableLayoutFixedResizeStrategy.decorators = [
    { type: Injectable }
];
TableLayoutFixedResizeStrategy.ctorParameters = () => [
    { type: ColumnResize },
    { type: _CoalescedStyleScheduler, decorators: [{ type: Inject, args: [_COALESCED_STYLE_SCHEDULER,] }] },
    { type: CdkTable }
];
/**
 * The optimally performing resize strategy for flex mat-tables.
 * Tested against and outperformed:
 *   CSS selector w/ CSS variable
 *   Updating all mat-cell nodes
 */
class CdkFlexTableResizeStrategy extends ResizeStrategy {
    constructor(columnResize, styleScheduler, table, document) {
        super();
        this.columnResize = columnResize;
        this.styleScheduler = styleScheduler;
        this.table = table;
        this._columnIndexes = new Map();
        this._columnProperties = new Map();
        this._indexSequence = 0;
        this.defaultMinSize = 0;
        this.defaultMaxSize = Number.MAX_SAFE_INTEGER;
        this._document = document;
    }
    applyColumnSize(cssFriendlyColumnName, columnHeader, sizeInPx, previousSizeInPx) {
        // Optimization: Check applied width first as we probably set it already before reading
        // offsetWidth which triggers layout.
        const delta = sizeInPx - (previousSizeInPx !== null && previousSizeInPx !== void 0 ? previousSizeInPx : (this._getAppliedWidth(cssFriendlyColumnName) || columnHeader.offsetWidth));
        if (delta === 0) {
            return;
        }
        const cssSize = coerceCssPixelValue(sizeInPx);
        this._applyProperty(cssFriendlyColumnName, 'flex', `0 0.01 ${cssSize}`);
        this.updateTableWidthAndStickyColumns(delta);
    }
    applyMinColumnSize(cssFriendlyColumnName, _, sizeInPx) {
        const cssSize = coerceCssPixelValue(sizeInPx);
        this._applyProperty(cssFriendlyColumnName, 'min-width', cssSize, sizeInPx !== this.defaultMinSize);
        this.updateTableWidthAndStickyColumns(0);
    }
    applyMaxColumnSize(cssFriendlyColumnName, _, sizeInPx) {
        const cssSize = coerceCssPixelValue(sizeInPx);
        this._applyProperty(cssFriendlyColumnName, 'max-width', cssSize, sizeInPx !== this.defaultMaxSize);
        this.updateTableWidthAndStickyColumns(0);
    }
    getColumnCssClass(cssFriendlyColumnName) {
        return `cdk-column-${cssFriendlyColumnName}`;
    }
    ngOnDestroy() {
        // TODO: Use remove() once we're off IE11.
        if (this._styleElement && this._styleElement.parentNode) {
            this._styleElement.parentNode.removeChild(this._styleElement);
            this._styleElement = undefined;
        }
    }
    _getPropertyValue(cssFriendlyColumnName, key) {
        const properties = this._getColumnPropertiesMap(cssFriendlyColumnName);
        return properties.get(key);
    }
    _getAppliedWidth(cssFriendslyColumnName) {
        return coercePixelsFromFlexValue(this._getPropertyValue(cssFriendslyColumnName, 'flex'));
    }
    _applyProperty(cssFriendlyColumnName, key, value, enable = true) {
        const properties = this._getColumnPropertiesMap(cssFriendlyColumnName);
        this.styleScheduler.schedule(() => {
            if (enable) {
                properties.set(key, value);
            }
            else {
                properties.delete(key);
            }
            this._applySizeCss(cssFriendlyColumnName);
        });
    }
    _getStyleSheet() {
        if (!this._styleElement) {
            this._styleElement = this._document.createElement('style');
            this._styleElement.appendChild(this._document.createTextNode(''));
            this._document.head.appendChild(this._styleElement);
        }
        return this._styleElement.sheet;
    }
    _getColumnPropertiesMap(cssFriendlyColumnName) {
        let properties = this._columnProperties.get(cssFriendlyColumnName);
        if (properties === undefined) {
            properties = new Map();
            this._columnProperties.set(cssFriendlyColumnName, properties);
        }
        return properties;
    }
    _applySizeCss(cssFriendlyColumnName) {
        const properties = this._getColumnPropertiesMap(cssFriendlyColumnName);
        const propertyKeys = Array.from(properties.keys());
        let index = this._columnIndexes.get(cssFriendlyColumnName);
        if (index === undefined) {
            if (!propertyKeys.length) {
                // Nothing to set or unset.
                return;
            }
            index = this._indexSequence++;
            this._columnIndexes.set(cssFriendlyColumnName, index);
        }
        else {
            this._getStyleSheet().deleteRule(index);
        }
        const columnClassName = this.getColumnCssClass(cssFriendlyColumnName);
        const tableClassName = this.columnResize.getUniqueCssClass();
        const selector = `.${tableClassName} .${columnClassName}`;
        const body = propertyKeys.map(key => `${key}:${properties.get(key)}`).join(';');
        this._getStyleSheet().insertRule(`${selector} {${body}}`, index);
    }
}
CdkFlexTableResizeStrategy.decorators = [
    { type: Injectable }
];
CdkFlexTableResizeStrategy.ctorParameters = () => [
    { type: ColumnResize },
    { type: _CoalescedStyleScheduler, decorators: [{ type: Inject, args: [_COALESCED_STYLE_SCHEDULER,] }] },
    { type: CdkTable },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** Converts CSS pixel values to numbers, eg "123px" to 123. Returns NaN for non pixel values. */
function coercePixelsFromCssValue(cssValue) {
    var _a;
    return Number((_a = cssValue.match(/(\d+)px/)) === null || _a === void 0 ? void 0 : _a[1]);
}
/** Gets the style.width pixels on the specified element if present, otherwise its offsetWidth. */
function getElementWidth(element) {
    // Optimization: Check style.width first as we probably set it already before reading
    // offsetWidth which triggers layout.
    return coercePixelsFromCssValue(element.style.width) || element.offsetWidth;
}
/**
 * Converts CSS flex values as set in CdkFlexTableResizeStrategy to numbers,
 * eg "0 0.01 123px" to 123.
 */
function coercePixelsFromFlexValue(flexValue) {
    var _a;
    return Number((_a = flexValue === null || flexValue === void 0 ? void 0 : flexValue.match(/0 0\.01 (\d+)px/)) === null || _a === void 0 ? void 0 : _a[1]);
}
const TABLE_LAYOUT_FIXED_RESIZE_STRATEGY_PROVIDER = {
    provide: ResizeStrategy,
    useClass: TableLayoutFixedResizeStrategy,
};
const FLEX_RESIZE_STRATEGY_PROVIDER = {
    provide: ResizeStrategy,
    useClass: CdkFlexTableResizeStrategy,
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const PROVIDERS = [
    ColumnResizeNotifier,
    HeaderRowEventDispatcher,
    ColumnResizeNotifierSource,
];
const TABLE_PROVIDERS = [
    ...PROVIDERS,
    TABLE_LAYOUT_FIXED_RESIZE_STRATEGY_PROVIDER,
];
const FLEX_PROVIDERS = [...PROVIDERS, FLEX_RESIZE_STRATEGY_PROVIDER];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Explicitly enables column resizing for a table-based cdk-table.
 * Individual columns must be annotated specifically.
 */
class CdkColumnResize extends ColumnResize {
    constructor(columnResizeNotifier, elementRef, eventDispatcher, ngZone, notifier, table) {
        super();
        this.columnResizeNotifier = columnResizeNotifier;
        this.elementRef = elementRef;
        this.eventDispatcher = eventDispatcher;
        this.ngZone = ngZone;
        this.notifier = notifier;
        this.table = table;
    }
}
CdkColumnResize.decorators = [
    { type: Directive, args: [{
                selector: 'table[cdk-table][columnResize]',
                providers: [
                    ...TABLE_PROVIDERS,
                    { provide: ColumnResize, useExisting: CdkColumnResize },
                ],
            },] }
];
CdkColumnResize.ctorParameters = () => [
    { type: ColumnResizeNotifier },
    { type: ElementRef },
    { type: HeaderRowEventDispatcher },
    { type: NgZone },
    { type: ColumnResizeNotifierSource },
    { type: CdkTable }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Explicitly enables column resizing for a flexbox-based cdk-table.
 * Individual columns must be annotated specifically.
 */
class CdkColumnResizeFlex extends ColumnResize {
    constructor(columnResizeNotifier, elementRef, eventDispatcher, ngZone, notifier, table) {
        super();
        this.columnResizeNotifier = columnResizeNotifier;
        this.elementRef = elementRef;
        this.eventDispatcher = eventDispatcher;
        this.ngZone = ngZone;
        this.notifier = notifier;
        this.table = table;
    }
}
CdkColumnResizeFlex.decorators = [
    { type: Directive, args: [{
                selector: 'cdk-table[columnResize]',
                providers: [
                    ...FLEX_PROVIDERS,
                    { provide: ColumnResize, useExisting: CdkColumnResizeFlex },
                ],
            },] }
];
CdkColumnResizeFlex.ctorParameters = () => [
    { type: ColumnResizeNotifier },
    { type: ElementRef },
    { type: HeaderRowEventDispatcher },
    { type: NgZone },
    { type: ColumnResizeNotifierSource },
    { type: CdkTable }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Implicitly enables column resizing for a table-based cdk-table.
 * Individual columns will be resizable unless opted out.
 */
class CdkDefaultEnabledColumnResize extends ColumnResize {
    constructor(columnResizeNotifier, elementRef, eventDispatcher, ngZone, notifier, table) {
        super();
        this.columnResizeNotifier = columnResizeNotifier;
        this.elementRef = elementRef;
        this.eventDispatcher = eventDispatcher;
        this.ngZone = ngZone;
        this.notifier = notifier;
        this.table = table;
    }
}
CdkDefaultEnabledColumnResize.decorators = [
    { type: Directive, args: [{
                selector: 'table[cdk-table]',
                providers: [
                    ...TABLE_PROVIDERS,
                    { provide: ColumnResize, useExisting: CdkDefaultEnabledColumnResize },
                ],
            },] }
];
CdkDefaultEnabledColumnResize.ctorParameters = () => [
    { type: ColumnResizeNotifier },
    { type: ElementRef },
    { type: HeaderRowEventDispatcher },
    { type: NgZone },
    { type: ColumnResizeNotifierSource },
    { type: CdkTable }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Implicitly enables column resizing for a flex cdk-table.
 * Individual columns will be resizable unless opted out.
 */
class CdkDefaultEnabledColumnResizeFlex extends ColumnResize {
    constructor(columnResizeNotifier, elementRef, eventDispatcher, ngZone, notifier, table) {
        super();
        this.columnResizeNotifier = columnResizeNotifier;
        this.elementRef = elementRef;
        this.eventDispatcher = eventDispatcher;
        this.ngZone = ngZone;
        this.notifier = notifier;
        this.table = table;
    }
}
CdkDefaultEnabledColumnResizeFlex.decorators = [
    { type: Directive, args: [{
                selector: 'cdk-table',
                providers: [
                    ...FLEX_PROVIDERS,
                    { provide: ColumnResize, useExisting: CdkDefaultEnabledColumnResizeFlex },
                ],
            },] }
];
CdkDefaultEnabledColumnResizeFlex.ctorParameters = () => [
    { type: ColumnResizeNotifier },
    { type: ElementRef },
    { type: HeaderRowEventDispatcher },
    { type: NgZone },
    { type: ColumnResizeNotifierSource },
    { type: CdkTable }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * One of two NgModules for use with CdkColumnResize.
 * When using this module, columns are resizable by default.
 */
class CdkColumnResizeDefaultEnabledModule {
}
CdkColumnResizeDefaultEnabledModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CdkDefaultEnabledColumnResize, CdkDefaultEnabledColumnResizeFlex],
                exports: [CdkDefaultEnabledColumnResize, CdkDefaultEnabledColumnResizeFlex],
            },] }
];
/**
 * One of two NgModules for use with CdkColumnResize.
 * When using this module, columns are not resizable by default.
 */
class CdkColumnResizeModule {
}
CdkColumnResizeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CdkColumnResize, CdkColumnResizeFlex],
                exports: [CdkColumnResize, CdkColumnResizeFlex],
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Can be provided by the host application to enable persistence of column resize state.
 */
class ColumnSizeStore {
}
ColumnSizeStore.decorators = [
    { type: Injectable }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Tracks state of resize events in progress. */
class ResizeRef {
    constructor(origin, overlayRef, minWidthPx, maxWidthPx) {
        this.origin = origin;
        this.overlayRef = overlayRef;
        this.minWidthPx = minWidthPx;
        this.maxWidthPx = maxWidthPx;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const OVERLAY_ACTIVE_CLASS = 'cdk-resizable-overlay-thumb-active';
/**
 * Base class for Resizable directives which are applied to column headers to make those columns
 * resizable.
 */
class Resizable {
    constructor() {
        this.minWidthPxInternal = 0;
        this.maxWidthPxInternal = Number.MAX_SAFE_INTEGER;
        this.destroyed = new Subject();
        this._viewInitialized = false;
    }
    /** The minimum width to allow the column to be sized to. */
    get minWidthPx() {
        return this.minWidthPxInternal;
    }
    set minWidthPx(value) {
        this.minWidthPxInternal = value;
        this.columnResize.setResized();
        if (this.elementRef.nativeElement && this._viewInitialized) {
            this._applyMinWidthPx();
        }
    }
    /** The maximum width to allow the column to be sized to. */
    get maxWidthPx() {
        return this.maxWidthPxInternal;
    }
    set maxWidthPx(value) {
        this.maxWidthPxInternal = value;
        this.columnResize.setResized();
        if (this.elementRef.nativeElement && this._viewInitialized) {
            this._applyMaxWidthPx();
        }
    }
    ngAfterViewInit() {
        this._listenForRowHoverEvents();
        this._listenForResizeEvents();
        this._appendInlineHandle();
        this.styleScheduler.scheduleEnd(() => {
            this._viewInitialized = true;
            this._applyMinWidthPx();
            this._applyMaxWidthPx();
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
        if (this.inlineHandle) {
            this.elementRef.nativeElement.removeChild(this.inlineHandle);
        }
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
    }
    _createOverlayForHandle() {
        // Use of overlays allows us to properly capture click events spanning parts
        // of two table cells and is also useful for displaying a resize thumb
        // over both cells and extending it down the table as needed.
        const isRtl = this.directionality.value === 'rtl';
        const positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.elementRef.nativeElement)
            .withFlexibleDimensions(false)
            .withGrowAfterOpen(false)
            .withPush(false)
            .withDefaultOffsetX(isRtl ? 1 : 0)
            .withPositions([{
                originX: isRtl ? 'start' : 'end',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'top',
            }]);
        return this.overlay.create({
            // Always position the overlay based on left-indexed coordinates.
            direction: 'ltr',
            disposeOnNavigation: true,
            positionStrategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            width: '16px',
        });
    }
    _listenForRowHoverEvents() {
        const element = this.elementRef.nativeElement;
        const takeUntilDestroyed = takeUntil(this.destroyed);
        this.eventDispatcher.resizeOverlayVisibleForHeaderRow(_closest(element, HEADER_ROW_SELECTOR))
            .pipe(takeUntilDestroyed).subscribe(hoveringRow => {
            if (hoveringRow) {
                if (!this.overlayRef) {
                    this.overlayRef = this._createOverlayForHandle();
                }
                this._showHandleOverlay();
            }
            else if (this.overlayRef) {
                // todo - can't detach during an active resize - need to work that out
                this.overlayRef.detach();
            }
        });
    }
    _listenForResizeEvents() {
        const takeUntilDestroyed = takeUntil(this.destroyed);
        merge(this.resizeNotifier.resizeCanceled, this.resizeNotifier.triggerResize).pipe(takeUntilDestroyed, filter(columnSize => columnSize.columnId === this.columnDef.name)).subscribe(({ size, previousSize, completeImmediately }) => {
            this.elementRef.nativeElement.classList.add(OVERLAY_ACTIVE_CLASS);
            this._applySize(size, previousSize);
            if (completeImmediately) {
                this._completeResizeOperation();
            }
        });
        merge(this.resizeNotifier.resizeCanceled, this.resizeNotifier.resizeCompleted).pipe(takeUntilDestroyed).subscribe(columnSize => {
            this._cleanUpAfterResize(columnSize);
        });
    }
    _completeResizeOperation() {
        this.ngZone.run(() => {
            this.resizeNotifier.resizeCompleted.next({
                columnId: this.columnDef.name,
                size: this.elementRef.nativeElement.offsetWidth,
            });
        });
    }
    _cleanUpAfterResize(columnSize) {
        this.elementRef.nativeElement.classList.remove(OVERLAY_ACTIVE_CLASS);
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this._updateOverlayHandleHeight();
            this.overlayRef.updatePosition();
            if (columnSize.columnId === this.columnDef.name) {
                this.inlineHandle.focus();
            }
        }
    }
    _createHandlePortal() {
        const injector = Injector.create({
            parent: this.injector,
            providers: [{
                    provide: ResizeRef,
                    useValue: new ResizeRef(this.elementRef, this.overlayRef, this.minWidthPx, this.maxWidthPx)
                }]
        });
        return new ComponentPortal(this.getOverlayHandleComponentType(), this.viewContainerRef, injector);
    }
    _showHandleOverlay() {
        this._updateOverlayHandleHeight();
        this.overlayRef.attach(this._createHandlePortal());
        // Needed to ensure that all of the lifecycle hooks inside the overlay run immediately.
        this.changeDetectorRef.markForCheck();
    }
    _updateOverlayHandleHeight() {
        this.overlayRef.updateSize({ height: this.elementRef.nativeElement.offsetHeight });
    }
    _applySize(sizeInPixels, previousSize) {
        const sizeToApply = Math.min(Math.max(sizeInPixels, this.minWidthPx, 0), this.maxWidthPx);
        this.resizeStrategy.applyColumnSize(this.columnDef.cssClassFriendlyName, this.elementRef.nativeElement, sizeToApply, previousSize);
    }
    _applyMinWidthPx() {
        this.resizeStrategy.applyMinColumnSize(this.columnDef.cssClassFriendlyName, this.elementRef.nativeElement, this.minWidthPx);
    }
    _applyMaxWidthPx() {
        this.resizeStrategy.applyMaxColumnSize(this.columnDef.cssClassFriendlyName, this.elementRef.nativeElement, this.maxWidthPx);
    }
    _appendInlineHandle() {
        this.styleScheduler.schedule(() => {
            this.inlineHandle = this.document.createElement('div');
            this.inlineHandle.tabIndex = 0;
            this.inlineHandle.className = this.getInlineHandleCssClassName();
            // TODO: Apply correct aria role (probably slider) after a11y spec questions resolved.
            this.elementRef.nativeElement.appendChild(this.inlineHandle);
        });
    }
}
Resizable.decorators = [
    { type: Directive }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO: Take another look at using cdk drag drop. IIRC I ran into a couple
// good reasons for not using it but I don't remember what they were at this point.
/**
 * Base class for a component shown over the edge of a resizable column that is responsible
 * for handling column resize mouse events and displaying any visible UI on the column edge.
 */
class ResizeOverlayHandle {
    constructor() {
        this.destroyed = new Subject();
    }
    ngAfterViewInit() {
        this._listenForMouseEvents();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    _listenForMouseEvents() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'mouseenter').pipe(mapTo(this.resizeRef.origin.nativeElement), takeUntil(this.destroyed)).subscribe(cell => this.eventDispatcher.headerCellHovered.next(cell));
            fromEvent(this.elementRef.nativeElement, 'mouseleave').pipe(map(event => event.relatedTarget &&
                _closest(event.relatedTarget, HEADER_CELL_SELECTOR)), takeUntil(this.destroyed)).subscribe(cell => this.eventDispatcher.headerCellHovered.next(cell));
            fromEvent(this.elementRef.nativeElement, 'mousedown')
                .pipe(takeUntil(this.destroyed)).subscribe(mousedownEvent => {
                this._dragStarted(mousedownEvent);
            });
        });
    }
    _dragStarted(mousedownEvent) {
        // Only allow dragging using the left mouse button.
        if (mousedownEvent.button !== 0) {
            return;
        }
        const mouseup = fromEvent(this.document, 'mouseup');
        const mousemove = fromEvent(this.document, 'mousemove');
        const escape = fromEvent(this.document, 'keyup')
            .pipe(filter(event => event.keyCode === ESCAPE));
        const startX = mousedownEvent.screenX;
        const initialSize = this._getOriginWidth();
        let overlayOffset = 0;
        let originOffset = this._getOriginOffset();
        let size = initialSize;
        let overshot = 0;
        this.updateResizeActive(true);
        mouseup.pipe(takeUntil(merge(escape, this.destroyed))).subscribe(({ screenX }) => {
            this.styleScheduler.scheduleEnd(() => {
                this._notifyResizeEnded(size, screenX !== startX);
            });
        });
        escape.pipe(takeUntil(merge(mouseup, this.destroyed))).subscribe(() => {
            this._notifyResizeEnded(initialSize);
        });
        mousemove.pipe(map(({ screenX }) => screenX), startWith(startX), distinctUntilChanged(), pairwise(), takeUntil(merge(mouseup, escape, this.destroyed))).subscribe(([prevX, currX]) => {
            let deltaX = currX - prevX;
            // If the mouse moved further than the resize was able to match, limit the
            // movement of the overlay to match the actual size and position of the origin.
            if (overshot !== 0) {
                if (overshot < 0 && deltaX < 0 || overshot > 0 && deltaX > 0) {
                    overshot += deltaX;
                    return;
                }
                else {
                    const remainingOvershot = overshot + deltaX;
                    overshot = overshot > 0 ?
                        Math.max(remainingOvershot, 0) : Math.min(remainingOvershot, 0);
                    deltaX = remainingOvershot - overshot;
                    if (deltaX === 0) {
                        return;
                    }
                }
            }
            let computedNewSize = size + (this._isLtr() ? deltaX : -deltaX);
            computedNewSize = Math.min(Math.max(computedNewSize, this.resizeRef.minWidthPx, 0), this.resizeRef.maxWidthPx);
            this.resizeNotifier.triggerResize.next({
                columnId: this.columnDef.name,
                size: computedNewSize,
                previousSize: size,
                isStickyColumn: this.columnDef.sticky || this.columnDef.stickyEnd,
            });
            this.styleScheduler.scheduleEnd(() => {
                const originNewSize = this._getOriginWidth();
                const originNewOffset = this._getOriginOffset();
                const originOffsetDeltaX = originNewOffset - originOffset;
                const originSizeDeltaX = originNewSize - size;
                size = originNewSize;
                originOffset = originNewOffset;
                overshot += deltaX + (this._isLtr() ? -originSizeDeltaX : originSizeDeltaX);
                overlayOffset += originOffsetDeltaX + (this._isLtr() ? originSizeDeltaX : 0);
                this._updateOverlayOffset(overlayOffset);
            });
        });
    }
    updateResizeActive(active) {
        this.eventDispatcher.overlayHandleActiveForCell.next(active ? this.resizeRef.origin.nativeElement : null);
    }
    _getOriginWidth() {
        return this.resizeRef.origin.nativeElement.offsetWidth;
    }
    _getOriginOffset() {
        return this.resizeRef.origin.nativeElement.offsetLeft;
    }
    _updateOverlayOffset(offset) {
        this.resizeRef.overlayRef.overlayElement.style.transform =
            `translateX(${coerceCssPixelValue(offset)})`;
    }
    _isLtr() {
        return this.directionality.value === 'ltr';
    }
    _notifyResizeEnded(size, completedSuccessfully = false) {
        this.updateResizeActive(false);
        this.ngZone.run(() => {
            const sizeMessage = { columnId: this.columnDef.name, size };
            if (completedSuccessfully) {
                this.resizeNotifier.resizeCompleted.next(sizeMessage);
            }
            else {
                this.resizeNotifier.resizeCanceled.next(sizeMessage);
            }
        });
    }
}
ResizeOverlayHandle.decorators = [
    { type: Directive }
];

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

export { CdkColumnResize, CdkColumnResizeDefaultEnabledModule, CdkColumnResizeFlex, CdkColumnResizeModule, CdkDefaultEnabledColumnResize, CdkDefaultEnabledColumnResizeFlex, CdkFlexTableResizeStrategy, ColumnResize, ColumnResizeNotifier, ColumnResizeNotifierSource, ColumnSizeStore, FLEX_RESIZE_STRATEGY_PROVIDER, HeaderRowEventDispatcher, Resizable, ResizeOverlayHandle, ResizeRef, ResizeStrategy, TABLE_LAYOUT_FIXED_RESIZE_STRATEGY_PROVIDER, TableLayoutFixedResizeStrategy, TABLE_PROVIDERS as ɵangular_material_src_cdk_experimental_column_resize_column_resize_a, FLEX_PROVIDERS as ɵangular_material_src_cdk_experimental_column_resize_column_resize_b };
//# sourceMappingURL=column-resize.js.map
