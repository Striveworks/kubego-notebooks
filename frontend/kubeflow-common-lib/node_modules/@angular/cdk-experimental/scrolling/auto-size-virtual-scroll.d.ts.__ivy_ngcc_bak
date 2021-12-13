/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NumberInput } from '@angular/cdk/coercion';
import { ListRange } from '@angular/cdk/collections';
import { CdkVirtualScrollViewport, VirtualScrollStrategy } from '@angular/cdk/scrolling';
import { OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * A class that tracks the size of items that have been seen and uses it to estimate the average
 * item size.
 */
export declare class ItemSizeAverager {
    /** The total amount of weight behind the current average. */
    private _totalWeight;
    /** The current average item size. */
    private _averageItemSize;
    /** The default size to use for items when no data is available. */
    private _defaultItemSize;
    /** @param defaultItemSize The default size to use for items when no data is available. */
    constructor(defaultItemSize?: number);
    /** Returns the average item size. */
    getAverageItemSize(): number;
    /**
     * Adds a measurement sample for the estimator to consider.
     * @param range The measured range.
     * @param size The measured size of the given range in pixels.
     */
    addSample(range: ListRange, size: number): void;
    /** Resets the averager. */
    reset(): void;
}
/** Virtual scrolling strategy for lists with items of unknown or dynamic size. */
export declare class AutoSizeVirtualScrollStrategy implements VirtualScrollStrategy {
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    scrolledIndexChange: Observable<number>;
    /** The attached viewport. */
    private _viewport;
    /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
    private _minBufferPx;
    /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
    private _maxBufferPx;
    /** The estimator used to estimate the size of unseen items. */
    private _averager;
    /** The last measured scroll offset of the viewport. */
    private _lastScrollOffset;
    /** The last measured size of the rendered content in the viewport. */
    private _lastRenderedContentSize;
    /** The last measured size of the rendered content in the viewport. */
    private _lastRenderedContentOffset;
    /**
     * The number of consecutive cycles where removing extra items has failed. Failure here means that
     * we estimated how many items we could safely remove, but our estimate turned out to be too much
     * and it wasn't safe to remove that many elements.
     */
    private _removalFailures;
    /**
     * @param minBufferPx The minimum amount of buffer rendered beyond the viewport (in pixels).
     *     If the amount of buffer dips below this number, more items will be rendered.
     * @param maxBufferPx The number of pixels worth of buffer to shoot for when rendering new items.
     *     If the actual amount turns out to be less it will not necessarily trigger an additional
     *     rendering cycle (as long as the amount of buffer is still greater than `minBufferPx`).
     * @param averager The averager used to estimate the size of unseen items.
     */
    constructor(minBufferPx: number, maxBufferPx: number, averager?: ItemSizeAverager);
    /**
     * Attaches this scroll strategy to a viewport.
     * @param viewport The viewport to attach this strategy to.
     */
    attach(viewport: CdkVirtualScrollViewport): void;
    /** Detaches this scroll strategy from the currently attached viewport. */
    detach(): void;
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onContentScrolled(): void;
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onDataLengthChanged(): void;
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onContentRendered(): void;
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onRenderedOffsetChanged(): void;
    /** Scroll to the offset for the given index. */
    scrollToIndex(): void;
    /**
     * Update the buffer parameters.
     * @param minBufferPx The minimum amount of buffer rendered beyond the viewport (in pixels).
     * @param maxBufferPx The number of buffer items to render beyond the edge of the viewport (in
     *     pixels).
     */
    updateBufferSize(minBufferPx: number, maxBufferPx: number): void;
    /** Update the rendered content after the user scrolls. */
    private _updateRenderedContentAfterScroll;
    /**
     * Checks the size of the currently rendered content and uses it to update the estimated item size
     * and estimated total content size.
     */
    private _checkRenderedContentSize;
    /** Checks the currently rendered content offset and saves the value for later use. */
    private _checkRenderedContentOffset;
    /**
     * Recalculates the rendered content based on our estimate of what should be shown at the current
     * scroll offset.
     */
    private _renderContentForCurrentOffset;
    /**
     * Gets the visible range of data for the given start index. If the start index is too close to
     * the end of the list it may be backed up to ensure the estimated size of the range is enough to
     * fill the viewport.
     * Note: must not be called if `this._viewport` is null
     * @param startIndex The index to start the range at
     * @return a range estimated to be large enough to fill the viewport when rendered.
     */
    private _getVisibleRangeForIndex;
    /**
     * Expand the given range by the given amount in either direction.
     * Note: must not be called if `this._viewport` is null
     * @param range The range to expand
     * @param expandStart The number of items to expand the start of the range by.
     * @param expandEnd The number of items to expand the end of the range by.
     * @return The expanded range.
     */
    private _expandRange;
    /** Update the viewport's total content size. */
    private _updateTotalContentSize;
}
/**
 * Provider factory for `AutoSizeVirtualScrollStrategy` that simply extracts the already created
 * `AutoSizeVirtualScrollStrategy` from the given directive.
 * @param autoSizeDir The instance of `CdkAutoSizeVirtualScroll` to extract the
 *     `AutoSizeVirtualScrollStrategy` from.
 */
export declare function _autoSizeVirtualScrollStrategyFactory(autoSizeDir: CdkAutoSizeVirtualScroll): AutoSizeVirtualScrollStrategy;
/** A virtual scroll strategy that supports unknown or dynamic size items. */
export declare class CdkAutoSizeVirtualScroll implements OnChanges {
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
     */
    get minBufferPx(): number;
    set minBufferPx(value: number);
    _minBufferPx: number;
    /**
     * The number of pixels worth of buffer to shoot for when rendering new items.
     * If the actual amount turns out to be less it will not necessarily trigger an additional
     * rendering cycle (as long as the amount of buffer is still greater than `minBufferPx`).
     * Defaults to 200px.
     */
    get maxBufferPx(): number;
    set maxBufferPx(value: number);
    _maxBufferPx: number;
    /** The scroll strategy used by this directive. */
    _scrollStrategy: AutoSizeVirtualScrollStrategy;
    ngOnChanges(): void;
    static ngAcceptInputType_minBufferPx: NumberInput;
    static ngAcceptInputType_maxBufferPx: NumberInput;
}
