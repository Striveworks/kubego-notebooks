(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/coercion'), require('@angular/cdk/scrolling'), require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@angular/cdk-experimental/scrolling', ['exports', '@angular/cdk/coercion', '@angular/cdk/scrolling', '@angular/core', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.cdkExperimental = global.ng.cdkExperimental || {}, global.ng.cdkExperimental.scrolling = {}), global.ng.cdk.coercion, global.ng.cdk.scrolling, global.ng.core, global.rxjs));
}(this, (function (exports, coercion, scrolling, core, rxjs) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * A class that tracks the size of items that have been seen and uses it to estimate the average
     * item size.
     */
    var ItemSizeAverager = /** @class */ (function () {
        /** @param defaultItemSize The default size to use for items when no data is available. */
        function ItemSizeAverager(defaultItemSize) {
            if (defaultItemSize === void 0) { defaultItemSize = 50; }
            /** The total amount of weight behind the current average. */
            this._totalWeight = 0;
            this._defaultItemSize = defaultItemSize;
            this._averageItemSize = defaultItemSize;
        }
        /** Returns the average item size. */
        ItemSizeAverager.prototype.getAverageItemSize = function () {
            return this._averageItemSize;
        };
        /**
         * Adds a measurement sample for the estimator to consider.
         * @param range The measured range.
         * @param size The measured size of the given range in pixels.
         */
        ItemSizeAverager.prototype.addSample = function (range, size) {
            var newTotalWeight = this._totalWeight + range.end - range.start;
            if (newTotalWeight) {
                var newAverageItemSize = (size + this._averageItemSize * this._totalWeight) / newTotalWeight;
                if (newAverageItemSize) {
                    this._averageItemSize = newAverageItemSize;
                    this._totalWeight = newTotalWeight;
                }
            }
        };
        /** Resets the averager. */
        ItemSizeAverager.prototype.reset = function () {
            this._averageItemSize = this._defaultItemSize;
            this._totalWeight = 0;
        };
        return ItemSizeAverager;
    }());
    /** Virtual scrolling strategy for lists with items of unknown or dynamic size. */
    var AutoSizeVirtualScrollStrategy = /** @class */ (function () {
        /**
         * @param minBufferPx The minimum amount of buffer rendered beyond the viewport (in pixels).
         *     If the amount of buffer dips below this number, more items will be rendered.
         * @param maxBufferPx The number of pixels worth of buffer to shoot for when rendering new items.
         *     If the actual amount turns out to be less it will not necessarily trigger an additional
         *     rendering cycle (as long as the amount of buffer is still greater than `minBufferPx`).
         * @param averager The averager used to estimate the size of unseen items.
         */
        function AutoSizeVirtualScrollStrategy(minBufferPx, maxBufferPx, averager) {
            if (averager === void 0) { averager = new ItemSizeAverager(); }
            /** @docs-private Implemented as part of VirtualScrollStrategy. */
            this.scrolledIndexChange = new rxjs.Observable(function () {
                // TODO(mmalerba): Implement.
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    throw Error('cdk-virtual-scroll: scrolledIndexChange is currently not supported for the' +
                        ' autosize scroll strategy');
                }
            });
            /** The attached viewport. */
            this._viewport = null;
            /**
             * The number of consecutive cycles where removing extra items has failed. Failure here means that
             * we estimated how many items we could safely remove, but our estimate turned out to be too much
             * and it wasn't safe to remove that many elements.
             */
            this._removalFailures = 0;
            this._minBufferPx = minBufferPx;
            this._maxBufferPx = maxBufferPx;
            this._averager = averager;
        }
        /**
         * Attaches this scroll strategy to a viewport.
         * @param viewport The viewport to attach this strategy to.
         */
        AutoSizeVirtualScrollStrategy.prototype.attach = function (viewport) {
            this._averager.reset();
            this._viewport = viewport;
            this._renderContentForCurrentOffset();
        };
        /** Detaches this scroll strategy from the currently attached viewport. */
        AutoSizeVirtualScrollStrategy.prototype.detach = function () {
            this._viewport = null;
        };
        /** @docs-private Implemented as part of VirtualScrollStrategy. */
        AutoSizeVirtualScrollStrategy.prototype.onContentScrolled = function () {
            if (this._viewport) {
                this._updateRenderedContentAfterScroll();
            }
        };
        /** @docs-private Implemented as part of VirtualScrollStrategy. */
        AutoSizeVirtualScrollStrategy.prototype.onDataLengthChanged = function () {
            if (this._viewport) {
                this._renderContentForCurrentOffset();
                this._checkRenderedContentSize();
            }
        };
        /** @docs-private Implemented as part of VirtualScrollStrategy. */
        AutoSizeVirtualScrollStrategy.prototype.onContentRendered = function () {
            if (this._viewport) {
                this._checkRenderedContentSize();
            }
        };
        /** @docs-private Implemented as part of VirtualScrollStrategy. */
        AutoSizeVirtualScrollStrategy.prototype.onRenderedOffsetChanged = function () {
            if (this._viewport) {
                this._checkRenderedContentOffset();
            }
        };
        /** Scroll to the offset for the given index. */
        AutoSizeVirtualScrollStrategy.prototype.scrollToIndex = function () {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                // TODO(mmalerba): Implement.
                throw Error('cdk-virtual-scroll: scrollToIndex is currently not supported for the autosize'
                    + ' scroll strategy');
            }
        };
        /**
         * Update the buffer parameters.
         * @param minBufferPx The minimum amount of buffer rendered beyond the viewport (in pixels).
         * @param maxBufferPx The number of buffer items to render beyond the edge of the viewport (in
         *     pixels).
         */
        AutoSizeVirtualScrollStrategy.prototype.updateBufferSize = function (minBufferPx, maxBufferPx) {
            if (maxBufferPx < minBufferPx) {
                throw ('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
            }
            this._minBufferPx = minBufferPx;
            this._maxBufferPx = maxBufferPx;
        };
        /** Update the rendered content after the user scrolls. */
        AutoSizeVirtualScrollStrategy.prototype._updateRenderedContentAfterScroll = function () {
            var viewport = this._viewport;
            // The current scroll offset.
            var scrollOffset = viewport.measureScrollOffset();
            // The delta between the current scroll offset and the previously recorded scroll offset.
            var scrollDelta = scrollOffset - this._lastScrollOffset;
            // The magnitude of the scroll delta.
            var scrollMagnitude = Math.abs(scrollDelta);
            // The currently rendered range.
            var renderedRange = viewport.getRenderedRange();
            // If we're scrolling toward the top, we need to account for the fact that the predicted amount
            // of content and the actual amount of scrollable space may differ. We address this by slowly
            // correcting the difference on each scroll event.
            var offsetCorrection = 0;
            if (scrollDelta < 0) {
                // The content offset we would expect based on the average item size.
                var predictedOffset = renderedRange.start * this._averager.getAverageItemSize();
                // The difference between the predicted size of the unrendered content at the beginning and
                // the actual available space to scroll over. We need to reduce this to zero by the time the
                // user scrolls to the top.
                // - 0 indicates that the predicted size and available space are the same.
                // - A negative number that the predicted size is smaller than the available space.
                // - A positive number indicates the predicted size is larger than the available space
                var offsetDifference = predictedOffset - this._lastRenderedContentOffset;
                // The amount of difference to correct during this scroll event. We calculate this as a
                // percentage of the total difference based on the percentage of the distance toward the top
                // that the user scrolled.
                offsetCorrection = Math.round(offsetDifference *
                    Math.max(0, Math.min(1, scrollMagnitude / (scrollOffset + scrollMagnitude))));
                // Based on the offset correction above, we pretend that the scroll delta was bigger or
                // smaller than it actually was, this way we can start to eliminate the difference.
                scrollDelta = scrollDelta - offsetCorrection;
                scrollMagnitude = Math.abs(scrollDelta);
            }
            // The current amount of buffer past the start of the viewport.
            var startBuffer = this._lastScrollOffset - this._lastRenderedContentOffset;
            // The current amount of buffer past the end of the viewport.
            var endBuffer = (this._lastRenderedContentOffset + this._lastRenderedContentSize) -
                (this._lastScrollOffset + viewport.getViewportSize());
            // The amount of unfilled space that should be filled on the side the user is scrolling toward
            // in order to safely absorb the scroll delta.
            var underscan = scrollMagnitude + this._minBufferPx -
                (scrollDelta < 0 ? startBuffer : endBuffer);
            // Check if there's unfilled space that we need to render new elements to fill.
            if (underscan > 0) {
                // Check if the scroll magnitude was larger than the viewport size. In this case the user
                // won't notice a discontinuity if we just jump to the new estimated position in the list.
                // However, if the scroll magnitude is smaller than the viewport the user might notice some
                // jitteriness if we just jump to the estimated position. Instead we make sure to scroll by
                // the same number of pixels as the scroll magnitude.
                if (scrollMagnitude >= viewport.getViewportSize()) {
                    this._renderContentForCurrentOffset();
                }
                else {
                    // The number of new items to render on the side the user is scrolling towards. Rather than
                    // just filling the underscan space, we actually fill enough to have a buffer size of
                    // `maxBufferPx`. This gives us a little wiggle room in case our item size estimate is off.
                    var addItems = Math.max(0, Math.ceil((underscan - this._minBufferPx + this._maxBufferPx) /
                        this._averager.getAverageItemSize()));
                    // The amount of filled space beyond what is necessary on the side the user is scrolling
                    // away from.
                    var overscan = (scrollDelta < 0 ? endBuffer : startBuffer) - this._minBufferPx +
                        scrollMagnitude;
                    // The number of currently rendered items to remove on the side the user is scrolling away
                    // from. If removal has failed in recent cycles we are less aggressive in how much we try to
                    // remove.
                    var unboundedRemoveItems = Math.floor(overscan / this._averager.getAverageItemSize() / (this._removalFailures + 1));
                    var removeItems = Math.min(renderedRange.end - renderedRange.start, Math.max(0, unboundedRemoveItems));
                    // The new range we will tell the viewport to render. We first expand it to include the new
                    // items we want rendered, we then contract the opposite side to remove items we no longer
                    // want rendered.
                    var range = this._expandRange(renderedRange, scrollDelta < 0 ? addItems : 0, scrollDelta > 0 ? addItems : 0);
                    if (scrollDelta < 0) {
                        range.end = Math.max(range.start + 1, range.end - removeItems);
                    }
                    else {
                        range.start = Math.min(range.end - 1, range.start + removeItems);
                    }
                    // The new offset we want to set on the rendered content. To determine this we measure the
                    // number of pixels we removed and then adjust the offset to the start of the rendered
                    // content or to the end of the rendered content accordingly (whichever one doesn't require
                    // that the newly added items to be rendered to calculate.)
                    var contentOffset = void 0;
                    var contentOffsetTo = void 0;
                    if (scrollDelta < 0) {
                        var removedSize = viewport.measureRangeSize({
                            start: range.end,
                            end: renderedRange.end,
                        });
                        // Check that we're not removing too much.
                        if (removedSize <= overscan) {
                            contentOffset =
                                this._lastRenderedContentOffset + this._lastRenderedContentSize - removedSize;
                            this._removalFailures = 0;
                        }
                        else {
                            // If the removal is more than the overscan can absorb just undo it and record the fact
                            // that the removal failed so we can be less aggressive next time.
                            range.end = renderedRange.end;
                            contentOffset = this._lastRenderedContentOffset + this._lastRenderedContentSize;
                            this._removalFailures++;
                        }
                        contentOffsetTo = 'to-end';
                    }
                    else {
                        var removedSize = viewport.measureRangeSize({
                            start: renderedRange.start,
                            end: range.start,
                        });
                        // Check that we're not removing too much.
                        if (removedSize <= overscan) {
                            contentOffset = this._lastRenderedContentOffset + removedSize;
                            this._removalFailures = 0;
                        }
                        else {
                            // If the removal is more than the overscan can absorb just undo it and record the fact
                            // that the removal failed so we can be less aggressive next time.
                            range.start = renderedRange.start;
                            contentOffset = this._lastRenderedContentOffset;
                            this._removalFailures++;
                        }
                        contentOffsetTo = 'to-start';
                    }
                    // Set the range and offset we calculated above.
                    viewport.setRenderedRange(range);
                    viewport.setRenderedContentOffset(contentOffset + offsetCorrection, contentOffsetTo);
                }
            }
            else if (offsetCorrection) {
                // Even if the rendered range didn't change, we may still need to adjust the content offset to
                // simulate scrolling slightly slower or faster than the user actually scrolled.
                viewport.setRenderedContentOffset(this._lastRenderedContentOffset + offsetCorrection);
            }
            // Save the scroll offset to be compared to the new value on the next scroll event.
            this._lastScrollOffset = scrollOffset;
        };
        /**
         * Checks the size of the currently rendered content and uses it to update the estimated item size
         * and estimated total content size.
         */
        AutoSizeVirtualScrollStrategy.prototype._checkRenderedContentSize = function () {
            var viewport = this._viewport;
            this._lastRenderedContentSize = viewport.measureRenderedContentSize();
            this._averager.addSample(viewport.getRenderedRange(), this._lastRenderedContentSize);
            this._updateTotalContentSize(this._lastRenderedContentSize);
        };
        /** Checks the currently rendered content offset and saves the value for later use. */
        AutoSizeVirtualScrollStrategy.prototype._checkRenderedContentOffset = function () {
            var viewport = this._viewport;
            this._lastRenderedContentOffset = viewport.getOffsetToRenderedContentStart();
        };
        /**
         * Recalculates the rendered content based on our estimate of what should be shown at the current
         * scroll offset.
         */
        AutoSizeVirtualScrollStrategy.prototype._renderContentForCurrentOffset = function () {
            var viewport = this._viewport;
            var scrollOffset = viewport.measureScrollOffset();
            this._lastScrollOffset = scrollOffset;
            this._removalFailures = 0;
            var itemSize = this._averager.getAverageItemSize();
            var firstVisibleIndex = Math.min(viewport.getDataLength() - 1, Math.floor(scrollOffset / itemSize));
            var bufferSize = Math.ceil(this._maxBufferPx / itemSize);
            var range = this._expandRange(this._getVisibleRangeForIndex(firstVisibleIndex), bufferSize, bufferSize);
            viewport.setRenderedRange(range);
            viewport.setRenderedContentOffset(itemSize * range.start);
        };
        // TODO: maybe move to base class, can probably share with fixed size strategy.
        /**
         * Gets the visible range of data for the given start index. If the start index is too close to
         * the end of the list it may be backed up to ensure the estimated size of the range is enough to
         * fill the viewport.
         * Note: must not be called if `this._viewport` is null
         * @param startIndex The index to start the range at
         * @return a range estimated to be large enough to fill the viewport when rendered.
         */
        AutoSizeVirtualScrollStrategy.prototype._getVisibleRangeForIndex = function (startIndex) {
            var viewport = this._viewport;
            var range = {
                start: startIndex,
                end: startIndex +
                    Math.ceil(viewport.getViewportSize() / this._averager.getAverageItemSize())
            };
            var extra = range.end - viewport.getDataLength();
            if (extra > 0) {
                range.start = Math.max(0, range.start - extra);
            }
            return range;
        };
        // TODO: maybe move to base class, can probably share with fixed size strategy.
        /**
         * Expand the given range by the given amount in either direction.
         * Note: must not be called if `this._viewport` is null
         * @param range The range to expand
         * @param expandStart The number of items to expand the start of the range by.
         * @param expandEnd The number of items to expand the end of the range by.
         * @return The expanded range.
         */
        AutoSizeVirtualScrollStrategy.prototype._expandRange = function (range, expandStart, expandEnd) {
            var viewport = this._viewport;
            var start = Math.max(0, range.start - expandStart);
            var end = Math.min(viewport.getDataLength(), range.end + expandEnd);
            return { start: start, end: end };
        };
        /** Update the viewport's total content size. */
        AutoSizeVirtualScrollStrategy.prototype._updateTotalContentSize = function (renderedContentSize) {
            var viewport = this._viewport;
            var renderedRange = viewport.getRenderedRange();
            var totalSize = renderedContentSize +
                (viewport.getDataLength() - (renderedRange.end - renderedRange.start)) *
                    this._averager.getAverageItemSize();
            viewport.setTotalContentSize(totalSize);
        };
        return AutoSizeVirtualScrollStrategy;
    }());
    /**
     * Provider factory for `AutoSizeVirtualScrollStrategy` that simply extracts the already created
     * `AutoSizeVirtualScrollStrategy` from the given directive.
     * @param autoSizeDir The instance of `CdkAutoSizeVirtualScroll` to extract the
     *     `AutoSizeVirtualScrollStrategy` from.
     */
    function _autoSizeVirtualScrollStrategyFactory(autoSizeDir) {
        return autoSizeDir._scrollStrategy;
    }
    /** A virtual scroll strategy that supports unknown or dynamic size items. */
    var CdkAutoSizeVirtualScroll = /** @class */ (function () {
        function CdkAutoSizeVirtualScroll() {
            this._minBufferPx = 100;
            this._maxBufferPx = 200;
            /** The scroll strategy used by this directive. */
            this._scrollStrategy = new AutoSizeVirtualScrollStrategy(this.minBufferPx, this.maxBufferPx);
        }
        Object.defineProperty(CdkAutoSizeVirtualScroll.prototype, "minBufferPx", {
            /**
             * The minimum amount of buffer rendered beyond the viewport (in pixels).
             * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
             */
            get: function () { return this._minBufferPx; },
            set: function (value) { this._minBufferPx = coercion.coerceNumberProperty(value); },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CdkAutoSizeVirtualScroll.prototype, "maxBufferPx", {
            /**
             * The number of pixels worth of buffer to shoot for when rendering new items.
             * If the actual amount turns out to be less it will not necessarily trigger an additional
             * rendering cycle (as long as the amount of buffer is still greater than `minBufferPx`).
             * Defaults to 200px.
             */
            get: function () { return this._maxBufferPx; },
            set: function (value) { this._maxBufferPx = coercion.coerceNumberProperty(value); },
            enumerable: false,
            configurable: true
        });
        CdkAutoSizeVirtualScroll.prototype.ngOnChanges = function () {
            this._scrollStrategy.updateBufferSize(this.minBufferPx, this.maxBufferPx);
        };
        return CdkAutoSizeVirtualScroll;
    }());
    CdkAutoSizeVirtualScroll.decorators = [
        { type: core.Directive, args: [{
                    selector: 'cdk-virtual-scroll-viewport[autosize]',
                    providers: [{
                            provide: scrolling.VIRTUAL_SCROLL_STRATEGY,
                            useFactory: _autoSizeVirtualScrollStrategyFactory,
                            deps: [core.forwardRef(function () { return CdkAutoSizeVirtualScroll; })],
                        }],
                },] }
    ];
    CdkAutoSizeVirtualScroll.propDecorators = {
        minBufferPx: [{ type: core.Input }],
        maxBufferPx: [{ type: core.Input }]
    };

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ScrollingModule = /** @class */ (function () {
        function ScrollingModule() {
        }
        return ScrollingModule;
    }());
    ScrollingModule.decorators = [
        { type: core.NgModule, args: [{
                    exports: [CdkAutoSizeVirtualScroll],
                    declarations: [CdkAutoSizeVirtualScroll],
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
     * Generated bundle index. Do not edit.
     */

    exports.AutoSizeVirtualScrollStrategy = AutoSizeVirtualScrollStrategy;
    exports.CdkAutoSizeVirtualScroll = CdkAutoSizeVirtualScroll;
    exports.ItemSizeAverager = ItemSizeAverager;
    exports.ScrollingModule = ScrollingModule;
    exports._autoSizeVirtualScrollStrategyFactory = _autoSizeVirtualScrollStrategyFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cdk-experimental-scrolling.umd.js.map
