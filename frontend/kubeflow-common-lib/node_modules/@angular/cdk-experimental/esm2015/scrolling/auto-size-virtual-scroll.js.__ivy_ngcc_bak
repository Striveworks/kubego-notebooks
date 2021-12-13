/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { Directive, forwardRef, Input } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * A class that tracks the size of items that have been seen and uses it to estimate the average
 * item size.
 */
export class ItemSizeAverager {
    /** @param defaultItemSize The default size to use for items when no data is available. */
    constructor(defaultItemSize = 50) {
        /** The total amount of weight behind the current average. */
        this._totalWeight = 0;
        this._defaultItemSize = defaultItemSize;
        this._averageItemSize = defaultItemSize;
    }
    /** Returns the average item size. */
    getAverageItemSize() {
        return this._averageItemSize;
    }
    /**
     * Adds a measurement sample for the estimator to consider.
     * @param range The measured range.
     * @param size The measured size of the given range in pixels.
     */
    addSample(range, size) {
        const newTotalWeight = this._totalWeight + range.end - range.start;
        if (newTotalWeight) {
            const newAverageItemSize = (size + this._averageItemSize * this._totalWeight) / newTotalWeight;
            if (newAverageItemSize) {
                this._averageItemSize = newAverageItemSize;
                this._totalWeight = newTotalWeight;
            }
        }
    }
    /** Resets the averager. */
    reset() {
        this._averageItemSize = this._defaultItemSize;
        this._totalWeight = 0;
    }
}
/** Virtual scrolling strategy for lists with items of unknown or dynamic size. */
export class AutoSizeVirtualScrollStrategy {
    /**
     * @param minBufferPx The minimum amount of buffer rendered beyond the viewport (in pixels).
     *     If the amount of buffer dips below this number, more items will be rendered.
     * @param maxBufferPx The number of pixels worth of buffer to shoot for when rendering new items.
     *     If the actual amount turns out to be less it will not necessarily trigger an additional
     *     rendering cycle (as long as the amount of buffer is still greater than `minBufferPx`).
     * @param averager The averager used to estimate the size of unseen items.
     */
    constructor(minBufferPx, maxBufferPx, averager = new ItemSizeAverager()) {
        /** @docs-private Implemented as part of VirtualScrollStrategy. */
        this.scrolledIndexChange = new Observable(() => {
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
    attach(viewport) {
        this._averager.reset();
        this._viewport = viewport;
        this._renderContentForCurrentOffset();
    }
    /** Detaches this scroll strategy from the currently attached viewport. */
    detach() {
        this._viewport = null;
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onContentScrolled() {
        if (this._viewport) {
            this._updateRenderedContentAfterScroll();
        }
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onDataLengthChanged() {
        if (this._viewport) {
            this._renderContentForCurrentOffset();
            this._checkRenderedContentSize();
        }
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onContentRendered() {
        if (this._viewport) {
            this._checkRenderedContentSize();
        }
    }
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    onRenderedOffsetChanged() {
        if (this._viewport) {
            this._checkRenderedContentOffset();
        }
    }
    /** Scroll to the offset for the given index. */
    scrollToIndex() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            // TODO(mmalerba): Implement.
            throw Error('cdk-virtual-scroll: scrollToIndex is currently not supported for the autosize'
                + ' scroll strategy');
        }
    }
    /**
     * Update the buffer parameters.
     * @param minBufferPx The minimum amount of buffer rendered beyond the viewport (in pixels).
     * @param maxBufferPx The number of buffer items to render beyond the edge of the viewport (in
     *     pixels).
     */
    updateBufferSize(minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
            throw ('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /** Update the rendered content after the user scrolls. */
    _updateRenderedContentAfterScroll() {
        const viewport = this._viewport;
        // The current scroll offset.
        const scrollOffset = viewport.measureScrollOffset();
        // The delta between the current scroll offset and the previously recorded scroll offset.
        let scrollDelta = scrollOffset - this._lastScrollOffset;
        // The magnitude of the scroll delta.
        let scrollMagnitude = Math.abs(scrollDelta);
        // The currently rendered range.
        const renderedRange = viewport.getRenderedRange();
        // If we're scrolling toward the top, we need to account for the fact that the predicted amount
        // of content and the actual amount of scrollable space may differ. We address this by slowly
        // correcting the difference on each scroll event.
        let offsetCorrection = 0;
        if (scrollDelta < 0) {
            // The content offset we would expect based on the average item size.
            const predictedOffset = renderedRange.start * this._averager.getAverageItemSize();
            // The difference between the predicted size of the unrendered content at the beginning and
            // the actual available space to scroll over. We need to reduce this to zero by the time the
            // user scrolls to the top.
            // - 0 indicates that the predicted size and available space are the same.
            // - A negative number that the predicted size is smaller than the available space.
            // - A positive number indicates the predicted size is larger than the available space
            const offsetDifference = predictedOffset - this._lastRenderedContentOffset;
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
        const startBuffer = this._lastScrollOffset - this._lastRenderedContentOffset;
        // The current amount of buffer past the end of the viewport.
        const endBuffer = (this._lastRenderedContentOffset + this._lastRenderedContentSize) -
            (this._lastScrollOffset + viewport.getViewportSize());
        // The amount of unfilled space that should be filled on the side the user is scrolling toward
        // in order to safely absorb the scroll delta.
        const underscan = scrollMagnitude + this._minBufferPx -
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
                const addItems = Math.max(0, Math.ceil((underscan - this._minBufferPx + this._maxBufferPx) /
                    this._averager.getAverageItemSize()));
                // The amount of filled space beyond what is necessary on the side the user is scrolling
                // away from.
                const overscan = (scrollDelta < 0 ? endBuffer : startBuffer) - this._minBufferPx +
                    scrollMagnitude;
                // The number of currently rendered items to remove on the side the user is scrolling away
                // from. If removal has failed in recent cycles we are less aggressive in how much we try to
                // remove.
                const unboundedRemoveItems = Math.floor(overscan / this._averager.getAverageItemSize() / (this._removalFailures + 1));
                const removeItems = Math.min(renderedRange.end - renderedRange.start, Math.max(0, unboundedRemoveItems));
                // The new range we will tell the viewport to render. We first expand it to include the new
                // items we want rendered, we then contract the opposite side to remove items we no longer
                // want rendered.
                const range = this._expandRange(renderedRange, scrollDelta < 0 ? addItems : 0, scrollDelta > 0 ? addItems : 0);
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
                let contentOffset;
                let contentOffsetTo;
                if (scrollDelta < 0) {
                    let removedSize = viewport.measureRangeSize({
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
                    const removedSize = viewport.measureRangeSize({
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
    }
    /**
     * Checks the size of the currently rendered content and uses it to update the estimated item size
     * and estimated total content size.
     */
    _checkRenderedContentSize() {
        const viewport = this._viewport;
        this._lastRenderedContentSize = viewport.measureRenderedContentSize();
        this._averager.addSample(viewport.getRenderedRange(), this._lastRenderedContentSize);
        this._updateTotalContentSize(this._lastRenderedContentSize);
    }
    /** Checks the currently rendered content offset and saves the value for later use. */
    _checkRenderedContentOffset() {
        const viewport = this._viewport;
        this._lastRenderedContentOffset = viewport.getOffsetToRenderedContentStart();
    }
    /**
     * Recalculates the rendered content based on our estimate of what should be shown at the current
     * scroll offset.
     */
    _renderContentForCurrentOffset() {
        const viewport = this._viewport;
        const scrollOffset = viewport.measureScrollOffset();
        this._lastScrollOffset = scrollOffset;
        this._removalFailures = 0;
        const itemSize = this._averager.getAverageItemSize();
        const firstVisibleIndex = Math.min(viewport.getDataLength() - 1, Math.floor(scrollOffset / itemSize));
        const bufferSize = Math.ceil(this._maxBufferPx / itemSize);
        const range = this._expandRange(this._getVisibleRangeForIndex(firstVisibleIndex), bufferSize, bufferSize);
        viewport.setRenderedRange(range);
        viewport.setRenderedContentOffset(itemSize * range.start);
    }
    // TODO: maybe move to base class, can probably share with fixed size strategy.
    /**
     * Gets the visible range of data for the given start index. If the start index is too close to
     * the end of the list it may be backed up to ensure the estimated size of the range is enough to
     * fill the viewport.
     * Note: must not be called if `this._viewport` is null
     * @param startIndex The index to start the range at
     * @return a range estimated to be large enough to fill the viewport when rendered.
     */
    _getVisibleRangeForIndex(startIndex) {
        const viewport = this._viewport;
        const range = {
            start: startIndex,
            end: startIndex +
                Math.ceil(viewport.getViewportSize() / this._averager.getAverageItemSize())
        };
        const extra = range.end - viewport.getDataLength();
        if (extra > 0) {
            range.start = Math.max(0, range.start - extra);
        }
        return range;
    }
    // TODO: maybe move to base class, can probably share with fixed size strategy.
    /**
     * Expand the given range by the given amount in either direction.
     * Note: must not be called if `this._viewport` is null
     * @param range The range to expand
     * @param expandStart The number of items to expand the start of the range by.
     * @param expandEnd The number of items to expand the end of the range by.
     * @return The expanded range.
     */
    _expandRange(range, expandStart, expandEnd) {
        const viewport = this._viewport;
        const start = Math.max(0, range.start - expandStart);
        const end = Math.min(viewport.getDataLength(), range.end + expandEnd);
        return { start, end };
    }
    /** Update the viewport's total content size. */
    _updateTotalContentSize(renderedContentSize) {
        const viewport = this._viewport;
        const renderedRange = viewport.getRenderedRange();
        const totalSize = renderedContentSize +
            (viewport.getDataLength() - (renderedRange.end - renderedRange.start)) *
                this._averager.getAverageItemSize();
        viewport.setTotalContentSize(totalSize);
    }
}
/**
 * Provider factory for `AutoSizeVirtualScrollStrategy` that simply extracts the already created
 * `AutoSizeVirtualScrollStrategy` from the given directive.
 * @param autoSizeDir The instance of `CdkAutoSizeVirtualScroll` to extract the
 *     `AutoSizeVirtualScrollStrategy` from.
 */
export function _autoSizeVirtualScrollStrategyFactory(autoSizeDir) {
    return autoSizeDir._scrollStrategy;
}
/** A virtual scroll strategy that supports unknown or dynamic size items. */
export class CdkAutoSizeVirtualScroll {
    constructor() {
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /** The scroll strategy used by this directive. */
        this._scrollStrategy = new AutoSizeVirtualScrollStrategy(this.minBufferPx, this.maxBufferPx);
    }
    /**
     * The minimum amount of buffer rendered beyond the viewport (in pixels).
     * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
     */
    get minBufferPx() { return this._minBufferPx; }
    set minBufferPx(value) { this._minBufferPx = coerceNumberProperty(value); }
    /**
     * The number of pixels worth of buffer to shoot for when rendering new items.
     * If the actual amount turns out to be less it will not necessarily trigger an additional
     * rendering cycle (as long as the amount of buffer is still greater than `minBufferPx`).
     * Defaults to 200px.
     */
    get maxBufferPx() { return this._maxBufferPx; }
    set maxBufferPx(value) { this._maxBufferPx = coerceNumberProperty(value); }
    ngOnChanges() {
        this._scrollStrategy.updateBufferSize(this.minBufferPx, this.maxBufferPx);
    }
}
CdkAutoSizeVirtualScroll.decorators = [
    { type: Directive, args: [{
                selector: 'cdk-virtual-scroll-viewport[autosize]',
                providers: [{
                        provide: VIRTUAL_SCROLL_STRATEGY,
                        useFactory: _autoSizeVirtualScrollStrategyFactory,
                        deps: [forwardRef(() => CdkAutoSizeVirtualScroll)],
                    }],
            },] }
];
CdkAutoSizeVirtualScroll.propDecorators = {
    minBufferPx: [{ type: Input }],
    maxBufferPx: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1zaXplLXZpcnR1YWwtc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay1leHBlcmltZW50YWwvc2Nyb2xsaW5nL2F1dG8tc2l6ZS12aXJ0dWFsLXNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsb0JBQW9CLEVBQWMsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RSxPQUFPLEVBRUwsdUJBQXVCLEVBRXhCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHaEM7OztHQUdHO0FBQ0gsTUFBTSxPQUFPLGdCQUFnQjtJQVUzQiwwRkFBMEY7SUFDMUYsWUFBWSxlQUFlLEdBQUcsRUFBRTtRQVZoQyw2REFBNkQ7UUFDckQsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFVdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO0lBQzFDLENBQUM7SUFFRCxxQ0FBcUM7SUFDckMsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLEtBQWdCLEVBQUUsSUFBWTtRQUN0QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuRSxJQUFJLGNBQWMsRUFBRTtZQUNsQixNQUFNLGtCQUFrQixHQUNwQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLGNBQWMsQ0FBQztZQUN4RSxJQUFJLGtCQUFrQixFQUFFO2dCQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFDO2FBQ3BDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsMkJBQTJCO0lBQzNCLEtBQUs7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQUdELGtGQUFrRjtBQUNsRixNQUFNLE9BQU8sNkJBQTZCO0lBc0N4Qzs7Ozs7OztPQU9HO0lBQ0gsWUFBWSxXQUFtQixFQUFFLFdBQW1CLEVBQUUsUUFBUSxHQUFHLElBQUksZ0JBQWdCLEVBQUU7UUE3Q3ZGLGtFQUFrRTtRQUNsRSx3QkFBbUIsR0FBRyxJQUFJLFVBQVUsQ0FBUyxHQUFHLEVBQUU7WUFDaEQsNkJBQTZCO1lBQzdCLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsRUFBRTtnQkFDakQsTUFBTSxLQUFLLENBQUMsNEVBQTRFO29CQUNwRiwyQkFBMkIsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCw2QkFBNkI7UUFDckIsY0FBUyxHQUFvQyxJQUFJLENBQUM7UUFvQjFEOzs7O1dBSUc7UUFDSyxxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFXM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxRQUFrQztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCwwRUFBMEU7SUFDMUUsTUFBTTtRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrRUFBa0U7SUFDbEUsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxtQkFBbUI7UUFDakIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQsa0VBQWtFO0lBQ2xFLHVCQUF1QjtRQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsZ0RBQWdEO0lBQ2hELGFBQWE7UUFDWCxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUU7WUFDakQsNkJBQTZCO1lBQzdCLE1BQU0sS0FBSyxDQUFDLCtFQUErRTtrQkFDckYsa0JBQWtCLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGdCQUFnQixDQUFDLFdBQW1CLEVBQUUsV0FBbUI7UUFDdkQsSUFBSSxXQUFXLEdBQUcsV0FBVyxFQUFFO1lBQzdCLE1BQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO1NBQ3ZGO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVELDBEQUEwRDtJQUNsRCxpQ0FBaUM7UUFDdkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVUsQ0FBQztRQUVqQyw2QkFBNkI7UUFDN0IsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDcEQseUZBQXlGO1FBQ3pGLElBQUksV0FBVyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDeEQscUNBQXFDO1FBQ3JDLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUMsZ0NBQWdDO1FBQ2hDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRWxELCtGQUErRjtRQUMvRiw2RkFBNkY7UUFDN0Ysa0RBQWtEO1FBQ2xELElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtZQUNuQixxRUFBcUU7WUFDckUsTUFBTSxlQUFlLEdBQUcsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDbEYsMkZBQTJGO1lBQzNGLDRGQUE0RjtZQUM1RiwyQkFBMkI7WUFDM0IsMEVBQTBFO1lBQzFFLG1GQUFtRjtZQUNuRixzRkFBc0Y7WUFDdEYsTUFBTSxnQkFBZ0IsR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO1lBQzNFLHVGQUF1RjtZQUN2Riw0RkFBNEY7WUFDNUYsMEJBQTBCO1lBQzFCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO2dCQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxlQUFlLEdBQUcsQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEYsdUZBQXVGO1lBQ3ZGLG1GQUFtRjtZQUNuRixXQUFXLEdBQUcsV0FBVyxHQUFHLGdCQUFnQixDQUFDO1lBQzdDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsK0RBQStEO1FBQy9ELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUM7UUFDN0UsNkRBQTZEO1FBQzdELE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztZQUMvRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUMxRCw4RkFBOEY7UUFDOUYsOENBQThDO1FBQzlDLE1BQU0sU0FBUyxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWTtZQUNqRCxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFaEQsK0VBQStFO1FBQy9FLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTtZQUNqQix5RkFBeUY7WUFDekYsMEZBQTBGO1lBQzFGLDJGQUEyRjtZQUMzRiwyRkFBMkY7WUFDM0YscURBQXFEO1lBQ3JELElBQUksZUFBZSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBRTtnQkFDakQsSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsMkZBQTJGO2dCQUMzRixxRkFBcUY7Z0JBQ3JGLDJGQUEyRjtnQkFDM0YsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQ3RGLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLHdGQUF3RjtnQkFDeEYsYUFBYTtnQkFDYixNQUFNLFFBQVEsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVk7b0JBQzVFLGVBQWUsQ0FBQztnQkFDcEIsMEZBQTBGO2dCQUMxRiw0RkFBNEY7Z0JBQzVGLFVBQVU7Z0JBQ1YsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUNuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xGLE1BQU0sV0FBVyxHQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFFekYsMkZBQTJGO2dCQUMzRiwwRkFBMEY7Z0JBQzFGLGlCQUFpQjtnQkFDakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FDM0IsYUFBYSxFQUFFLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25GLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtvQkFDbkIsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUM7aUJBQ2hFO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDO2lCQUNsRTtnQkFFRCwwRkFBMEY7Z0JBQzFGLHNGQUFzRjtnQkFDdEYsMkZBQTJGO2dCQUMzRiwyREFBMkQ7Z0JBQzNELElBQUksYUFBcUIsQ0FBQztnQkFDMUIsSUFBSSxlQUFzQyxDQUFDO2dCQUMzQyxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQzt3QkFDMUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHO3dCQUNoQixHQUFHLEVBQUUsYUFBYSxDQUFDLEdBQUc7cUJBQ3ZCLENBQUMsQ0FBQztvQkFDSCwwQ0FBMEM7b0JBQzFDLElBQUksV0FBVyxJQUFJLFFBQVEsRUFBRTt3QkFDM0IsYUFBYTs0QkFDVCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFdBQVcsQ0FBQzt3QkFDbEYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztxQkFDM0I7eUJBQU07d0JBQ0wsdUZBQXVGO3dCQUN2RixrRUFBa0U7d0JBQ2xFLEtBQUssQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQzt3QkFDOUIsYUFBYSxHQUFHLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUM7d0JBQ2hGLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO3FCQUN6QjtvQkFDRCxlQUFlLEdBQUcsUUFBUSxDQUFDO2lCQUM1QjtxQkFBTTtvQkFDTCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7d0JBQzVDLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSzt3QkFDMUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLO3FCQUNqQixDQUFDLENBQUM7b0JBQ0gsMENBQTBDO29CQUMxQyxJQUFJLFdBQVcsSUFBSSxRQUFRLEVBQUU7d0JBQzNCLGFBQWEsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsV0FBVyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO3FCQUMzQjt5QkFBTTt3QkFDTCx1RkFBdUY7d0JBQ3ZGLGtFQUFrRTt3QkFDbEUsS0FBSyxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO3dCQUNsQyxhQUFhLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO3dCQUNoRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztxQkFDekI7b0JBQ0QsZUFBZSxHQUFHLFVBQVUsQ0FBQztpQkFDOUI7Z0JBRUQsZ0RBQWdEO2dCQUNoRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUM7YUFDdEY7U0FDRjthQUFNLElBQUksZ0JBQWdCLEVBQUU7WUFDM0IsOEZBQThGO1lBQzlGLGdGQUFnRjtZQUNoRixRQUFRLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLGdCQUFnQixDQUFDLENBQUM7U0FDdkY7UUFFRCxtRkFBbUY7UUFDbkYsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0sseUJBQXlCO1FBQy9CLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsc0ZBQXNGO0lBQzlFLDJCQUEyQjtRQUNqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxRQUFRLENBQUMsK0JBQStCLEVBQUcsQ0FBQztJQUNoRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssOEJBQThCO1FBQ3BDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFVLENBQUM7UUFDakMsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUNyRCxNQUFNLGlCQUFpQixHQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDM0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FDM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRTlFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsK0VBQStFO0lBQy9FOzs7Ozs7O09BT0c7SUFDSyx3QkFBd0IsQ0FBQyxVQUFrQjtRQUNqRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBVSxDQUFDO1FBQ2pDLE1BQU0sS0FBSyxHQUFjO1lBQ3ZCLEtBQUssRUFBRSxVQUFVO1lBQ2pCLEdBQUcsRUFBRSxVQUFVO2dCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUNoRixDQUFDO1FBQ0YsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsK0VBQStFO0lBQy9FOzs7Ozs7O09BT0c7SUFDSyxZQUFZLENBQUMsS0FBZ0IsRUFBRSxXQUFtQixFQUFFLFNBQWlCO1FBQzNFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFVLENBQUM7UUFDakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQztRQUNyRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELGdEQUFnRDtJQUN4Qyx1QkFBdUIsQ0FBQyxtQkFBMkI7UUFDekQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVUsQ0FBQztRQUNqQyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNsRCxNQUFNLFNBQVMsR0FBRyxtQkFBbUI7WUFDakMsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3hDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxxQ0FBcUMsQ0FBQyxXQUFxQztJQUN6RixPQUFPLFdBQVcsQ0FBQyxlQUFlLENBQUM7QUFDckMsQ0FBQztBQUdELDZFQUE2RTtBQVM3RSxNQUFNLE9BQU8sd0JBQXdCO0lBUnJDO1FBZ0JFLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBV25CLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBRW5CLGtEQUFrRDtRQUNsRCxvQkFBZSxHQUFHLElBQUksNkJBQTZCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFRMUYsQ0FBQztJQTdCQzs7O09BR0c7SUFDSCxJQUNJLFdBQVcsS0FBYSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksV0FBVyxDQUFDLEtBQWEsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUduRjs7Ozs7T0FLRztJQUNILElBQ0ksV0FBVyxLQUFhLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkQsSUFBSSxXQUFXLENBQUMsS0FBYSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTW5GLFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVFLENBQUM7OztZQWxDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLHVCQUF1Qjt3QkFDaEMsVUFBVSxFQUFFLHFDQUFxQzt3QkFDakQsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUM7cUJBQ25ELENBQUM7YUFDSDs7OzBCQU1FLEtBQUs7MEJBV0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2NvZXJjZU51bWJlclByb3BlcnR5LCBOdW1iZXJJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7TGlzdFJhbmdlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LFxuICBWSVJUVUFMX1NDUk9MTF9TVFJBVEVHWSxcbiAgVmlydHVhbFNjcm9sbFN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0LCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuXG4vKipcbiAqIEEgY2xhc3MgdGhhdCB0cmFja3MgdGhlIHNpemUgb2YgaXRlbXMgdGhhdCBoYXZlIGJlZW4gc2VlbiBhbmQgdXNlcyBpdCB0byBlc3RpbWF0ZSB0aGUgYXZlcmFnZVxuICogaXRlbSBzaXplLlxuICovXG5leHBvcnQgY2xhc3MgSXRlbVNpemVBdmVyYWdlciB7XG4gIC8qKiBUaGUgdG90YWwgYW1vdW50IG9mIHdlaWdodCBiZWhpbmQgdGhlIGN1cnJlbnQgYXZlcmFnZS4gKi9cbiAgcHJpdmF0ZSBfdG90YWxXZWlnaHQgPSAwO1xuXG4gIC8qKiBUaGUgY3VycmVudCBhdmVyYWdlIGl0ZW0gc2l6ZS4gKi9cbiAgcHJpdmF0ZSBfYXZlcmFnZUl0ZW1TaXplOiBudW1iZXI7XG5cbiAgLyoqIFRoZSBkZWZhdWx0IHNpemUgdG8gdXNlIGZvciBpdGVtcyB3aGVuIG5vIGRhdGEgaXMgYXZhaWxhYmxlLiAqL1xuICBwcml2YXRlIF9kZWZhdWx0SXRlbVNpemU6IG51bWJlcjtcblxuICAvKiogQHBhcmFtIGRlZmF1bHRJdGVtU2l6ZSBUaGUgZGVmYXVsdCBzaXplIHRvIHVzZSBmb3IgaXRlbXMgd2hlbiBubyBkYXRhIGlzIGF2YWlsYWJsZS4gKi9cbiAgY29uc3RydWN0b3IoZGVmYXVsdEl0ZW1TaXplID0gNTApIHtcbiAgICB0aGlzLl9kZWZhdWx0SXRlbVNpemUgPSBkZWZhdWx0SXRlbVNpemU7XG4gICAgdGhpcy5fYXZlcmFnZUl0ZW1TaXplID0gZGVmYXVsdEl0ZW1TaXplO1xuICB9XG5cbiAgLyoqIFJldHVybnMgdGhlIGF2ZXJhZ2UgaXRlbSBzaXplLiAqL1xuICBnZXRBdmVyYWdlSXRlbVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYXZlcmFnZUl0ZW1TaXplO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtZWFzdXJlbWVudCBzYW1wbGUgZm9yIHRoZSBlc3RpbWF0b3IgdG8gY29uc2lkZXIuXG4gICAqIEBwYXJhbSByYW5nZSBUaGUgbWVhc3VyZWQgcmFuZ2UuXG4gICAqIEBwYXJhbSBzaXplIFRoZSBtZWFzdXJlZCBzaXplIG9mIHRoZSBnaXZlbiByYW5nZSBpbiBwaXhlbHMuXG4gICAqL1xuICBhZGRTYW1wbGUocmFuZ2U6IExpc3RSYW5nZSwgc2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgbmV3VG90YWxXZWlnaHQgPSB0aGlzLl90b3RhbFdlaWdodCArIHJhbmdlLmVuZCAtIHJhbmdlLnN0YXJ0O1xuICAgIGlmIChuZXdUb3RhbFdlaWdodCkge1xuICAgICAgY29uc3QgbmV3QXZlcmFnZUl0ZW1TaXplID1cbiAgICAgICAgICAoc2l6ZSArIHRoaXMuX2F2ZXJhZ2VJdGVtU2l6ZSAqIHRoaXMuX3RvdGFsV2VpZ2h0KSAvIG5ld1RvdGFsV2VpZ2h0O1xuICAgICAgaWYgKG5ld0F2ZXJhZ2VJdGVtU2l6ZSkge1xuICAgICAgICB0aGlzLl9hdmVyYWdlSXRlbVNpemUgPSBuZXdBdmVyYWdlSXRlbVNpemU7XG4gICAgICAgIHRoaXMuX3RvdGFsV2VpZ2h0ID0gbmV3VG90YWxXZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIFJlc2V0cyB0aGUgYXZlcmFnZXIuICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX2F2ZXJhZ2VJdGVtU2l6ZSA9IHRoaXMuX2RlZmF1bHRJdGVtU2l6ZTtcbiAgICB0aGlzLl90b3RhbFdlaWdodCA9IDA7XG4gIH1cbn1cblxuXG4vKiogVmlydHVhbCBzY3JvbGxpbmcgc3RyYXRlZ3kgZm9yIGxpc3RzIHdpdGggaXRlbXMgb2YgdW5rbm93biBvciBkeW5hbWljIHNpemUuICovXG5leHBvcnQgY2xhc3MgQXV0b1NpemVWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3kgaW1wbGVtZW50cyBWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3kge1xuICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIFZpcnR1YWxTY3JvbGxTdHJhdGVneS4gKi9cbiAgc2Nyb2xsZWRJbmRleENoYW5nZSA9IG5ldyBPYnNlcnZhYmxlPG51bWJlcj4oKCkgPT4ge1xuICAgIC8vIFRPRE8obW1hbGVyYmEpOiBJbXBsZW1lbnQuXG4gICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2Nkay12aXJ0dWFsLXNjcm9sbDogc2Nyb2xsZWRJbmRleENoYW5nZSBpcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCBmb3IgdGhlJyArXG4gICAgICAgICAgJyBhdXRvc2l6ZSBzY3JvbGwgc3RyYXRlZ3knKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKiBUaGUgYXR0YWNoZWQgdmlld3BvcnQuICovXG4gIHByaXZhdGUgX3ZpZXdwb3J0OiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfCBudWxsID0gbnVsbDtcblxuICAvKiogVGhlIG1pbmltdW0gYW1vdW50IG9mIGJ1ZmZlciByZW5kZXJlZCBiZXlvbmQgdGhlIHZpZXdwb3J0IChpbiBwaXhlbHMpLiAqL1xuICBwcml2YXRlIF9taW5CdWZmZXJQeDogbnVtYmVyO1xuXG4gIC8qKiBUaGUgbnVtYmVyIG9mIGJ1ZmZlciBpdGVtcyB0byByZW5kZXIgYmV5b25kIHRoZSBlZGdlIG9mIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS4gKi9cbiAgcHJpdmF0ZSBfbWF4QnVmZmVyUHg6IG51bWJlcjtcblxuICAvKiogVGhlIGVzdGltYXRvciB1c2VkIHRvIGVzdGltYXRlIHRoZSBzaXplIG9mIHVuc2VlbiBpdGVtcy4gKi9cbiAgcHJpdmF0ZSBfYXZlcmFnZXI6IEl0ZW1TaXplQXZlcmFnZXI7XG5cbiAgLyoqIFRoZSBsYXN0IG1lYXN1cmVkIHNjcm9sbCBvZmZzZXQgb2YgdGhlIHZpZXdwb3J0LiAqL1xuICBwcml2YXRlIF9sYXN0U2Nyb2xsT2Zmc2V0OiBudW1iZXI7XG5cbiAgLyoqIFRoZSBsYXN0IG1lYXN1cmVkIHNpemUgb2YgdGhlIHJlbmRlcmVkIGNvbnRlbnQgaW4gdGhlIHZpZXdwb3J0LiAqL1xuICBwcml2YXRlIF9sYXN0UmVuZGVyZWRDb250ZW50U2l6ZTogbnVtYmVyO1xuXG4gIC8qKiBUaGUgbGFzdCBtZWFzdXJlZCBzaXplIG9mIHRoZSByZW5kZXJlZCBjb250ZW50IGluIHRoZSB2aWV3cG9ydC4gKi9cbiAgcHJpdmF0ZSBfbGFzdFJlbmRlcmVkQ29udGVudE9mZnNldDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGNvbnNlY3V0aXZlIGN5Y2xlcyB3aGVyZSByZW1vdmluZyBleHRyYSBpdGVtcyBoYXMgZmFpbGVkLiBGYWlsdXJlIGhlcmUgbWVhbnMgdGhhdFxuICAgKiB3ZSBlc3RpbWF0ZWQgaG93IG1hbnkgaXRlbXMgd2UgY291bGQgc2FmZWx5IHJlbW92ZSwgYnV0IG91ciBlc3RpbWF0ZSB0dXJuZWQgb3V0IHRvIGJlIHRvbyBtdWNoXG4gICAqIGFuZCBpdCB3YXNuJ3Qgc2FmZSB0byByZW1vdmUgdGhhdCBtYW55IGVsZW1lbnRzLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVtb3ZhbEZhaWx1cmVzID0gMDtcblxuICAvKipcbiAgICogQHBhcmFtIG1pbkJ1ZmZlclB4IFRoZSBtaW5pbXVtIGFtb3VudCBvZiBidWZmZXIgcmVuZGVyZWQgYmV5b25kIHRoZSB2aWV3cG9ydCAoaW4gcGl4ZWxzKS5cbiAgICogICAgIElmIHRoZSBhbW91bnQgb2YgYnVmZmVyIGRpcHMgYmVsb3cgdGhpcyBudW1iZXIsIG1vcmUgaXRlbXMgd2lsbCBiZSByZW5kZXJlZC5cbiAgICogQHBhcmFtIG1heEJ1ZmZlclB4IFRoZSBudW1iZXIgb2YgcGl4ZWxzIHdvcnRoIG9mIGJ1ZmZlciB0byBzaG9vdCBmb3Igd2hlbiByZW5kZXJpbmcgbmV3IGl0ZW1zLlxuICAgKiAgICAgSWYgdGhlIGFjdHVhbCBhbW91bnQgdHVybnMgb3V0IHRvIGJlIGxlc3MgaXQgd2lsbCBub3QgbmVjZXNzYXJpbHkgdHJpZ2dlciBhbiBhZGRpdGlvbmFsXG4gICAqICAgICByZW5kZXJpbmcgY3ljbGUgKGFzIGxvbmcgYXMgdGhlIGFtb3VudCBvZiBidWZmZXIgaXMgc3RpbGwgZ3JlYXRlciB0aGFuIGBtaW5CdWZmZXJQeGApLlxuICAgKiBAcGFyYW0gYXZlcmFnZXIgVGhlIGF2ZXJhZ2VyIHVzZWQgdG8gZXN0aW1hdGUgdGhlIHNpemUgb2YgdW5zZWVuIGl0ZW1zLlxuICAgKi9cbiAgY29uc3RydWN0b3IobWluQnVmZmVyUHg6IG51bWJlciwgbWF4QnVmZmVyUHg6IG51bWJlciwgYXZlcmFnZXIgPSBuZXcgSXRlbVNpemVBdmVyYWdlcigpKSB7XG4gICAgdGhpcy5fbWluQnVmZmVyUHggPSBtaW5CdWZmZXJQeDtcbiAgICB0aGlzLl9tYXhCdWZmZXJQeCA9IG1heEJ1ZmZlclB4O1xuICAgIHRoaXMuX2F2ZXJhZ2VyID0gYXZlcmFnZXI7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoZXMgdGhpcyBzY3JvbGwgc3RyYXRlZ3kgdG8gYSB2aWV3cG9ydC5cbiAgICogQHBhcmFtIHZpZXdwb3J0IFRoZSB2aWV3cG9ydCB0byBhdHRhY2ggdGhpcyBzdHJhdGVneSB0by5cbiAgICovXG4gIGF0dGFjaCh2aWV3cG9ydDogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KSB7XG4gICAgdGhpcy5fYXZlcmFnZXIucmVzZXQoKTtcbiAgICB0aGlzLl92aWV3cG9ydCA9IHZpZXdwb3J0O1xuICAgIHRoaXMuX3JlbmRlckNvbnRlbnRGb3JDdXJyZW50T2Zmc2V0KCk7XG4gIH1cblxuICAvKiogRGV0YWNoZXMgdGhpcyBzY3JvbGwgc3RyYXRlZ3kgZnJvbSB0aGUgY3VycmVudGx5IGF0dGFjaGVkIHZpZXdwb3J0LiAqL1xuICBkZXRhY2goKSB7XG4gICAgdGhpcy5fdmlld3BvcnQgPSBudWxsO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBWaXJ0dWFsU2Nyb2xsU3RyYXRlZ3kuICovXG4gIG9uQ29udGVudFNjcm9sbGVkKCkge1xuICAgIGlmICh0aGlzLl92aWV3cG9ydCkge1xuICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyZWRDb250ZW50QWZ0ZXJTY3JvbGwoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIFZpcnR1YWxTY3JvbGxTdHJhdGVneS4gKi9cbiAgb25EYXRhTGVuZ3RoQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5fdmlld3BvcnQpIHtcbiAgICAgIHRoaXMuX3JlbmRlckNvbnRlbnRGb3JDdXJyZW50T2Zmc2V0KCk7XG4gICAgICB0aGlzLl9jaGVja1JlbmRlcmVkQ29udGVudFNpemUoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIFZpcnR1YWxTY3JvbGxTdHJhdGVneS4gKi9cbiAgb25Db250ZW50UmVuZGVyZWQoKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdwb3J0KSB7XG4gICAgICB0aGlzLl9jaGVja1JlbmRlcmVkQ29udGVudFNpemUoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGRvY3MtcHJpdmF0ZSBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIFZpcnR1YWxTY3JvbGxTdHJhdGVneS4gKi9cbiAgb25SZW5kZXJlZE9mZnNldENoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuX3ZpZXdwb3J0KSB7XG4gICAgICB0aGlzLl9jaGVja1JlbmRlcmVkQ29udGVudE9mZnNldCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTY3JvbGwgdG8gdGhlIG9mZnNldCBmb3IgdGhlIGdpdmVuIGluZGV4LiAqL1xuICBzY3JvbGxUb0luZGV4KCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgIC8vIFRPRE8obW1hbGVyYmEpOiBJbXBsZW1lbnQuXG4gICAgICB0aHJvdyBFcnJvcignY2RrLXZpcnR1YWwtc2Nyb2xsOiBzY3JvbGxUb0luZGV4IGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGZvciB0aGUgYXV0b3NpemUnXG4gICAgICAgICAgKyAnIHNjcm9sbCBzdHJhdGVneScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGJ1ZmZlciBwYXJhbWV0ZXJzLlxuICAgKiBAcGFyYW0gbWluQnVmZmVyUHggVGhlIG1pbmltdW0gYW1vdW50IG9mIGJ1ZmZlciByZW5kZXJlZCBiZXlvbmQgdGhlIHZpZXdwb3J0IChpbiBwaXhlbHMpLlxuICAgKiBAcGFyYW0gbWF4QnVmZmVyUHggVGhlIG51bWJlciBvZiBidWZmZXIgaXRlbXMgdG8gcmVuZGVyIGJleW9uZCB0aGUgZWRnZSBvZiB0aGUgdmlld3BvcnQgKGluXG4gICAqICAgICBwaXhlbHMpLlxuICAgKi9cbiAgdXBkYXRlQnVmZmVyU2l6ZShtaW5CdWZmZXJQeDogbnVtYmVyLCBtYXhCdWZmZXJQeDogbnVtYmVyKSB7XG4gICAgaWYgKG1heEJ1ZmZlclB4IDwgbWluQnVmZmVyUHgpIHtcbiAgICAgIHRocm93KCdDREsgdmlydHVhbCBzY3JvbGw6IG1heEJ1ZmZlclB4IG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIG1pbkJ1ZmZlclB4Jyk7XG4gICAgfVxuICAgIHRoaXMuX21pbkJ1ZmZlclB4ID0gbWluQnVmZmVyUHg7XG4gICAgdGhpcy5fbWF4QnVmZmVyUHggPSBtYXhCdWZmZXJQeDtcbiAgfVxuXG4gIC8qKiBVcGRhdGUgdGhlIHJlbmRlcmVkIGNvbnRlbnQgYWZ0ZXIgdGhlIHVzZXIgc2Nyb2xscy4gKi9cbiAgcHJpdmF0ZSBfdXBkYXRlUmVuZGVyZWRDb250ZW50QWZ0ZXJTY3JvbGwoKSB7XG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl92aWV3cG9ydCE7XG5cbiAgICAvLyBUaGUgY3VycmVudCBzY3JvbGwgb2Zmc2V0LlxuICAgIGNvbnN0IHNjcm9sbE9mZnNldCA9IHZpZXdwb3J0Lm1lYXN1cmVTY3JvbGxPZmZzZXQoKTtcbiAgICAvLyBUaGUgZGVsdGEgYmV0d2VlbiB0aGUgY3VycmVudCBzY3JvbGwgb2Zmc2V0IGFuZCB0aGUgcHJldmlvdXNseSByZWNvcmRlZCBzY3JvbGwgb2Zmc2V0LlxuICAgIGxldCBzY3JvbGxEZWx0YSA9IHNjcm9sbE9mZnNldCAtIHRoaXMuX2xhc3RTY3JvbGxPZmZzZXQ7XG4gICAgLy8gVGhlIG1hZ25pdHVkZSBvZiB0aGUgc2Nyb2xsIGRlbHRhLlxuICAgIGxldCBzY3JvbGxNYWduaXR1ZGUgPSBNYXRoLmFicyhzY3JvbGxEZWx0YSk7XG5cbiAgICAvLyBUaGUgY3VycmVudGx5IHJlbmRlcmVkIHJhbmdlLlxuICAgIGNvbnN0IHJlbmRlcmVkUmFuZ2UgPSB2aWV3cG9ydC5nZXRSZW5kZXJlZFJhbmdlKCk7XG5cbiAgICAvLyBJZiB3ZSdyZSBzY3JvbGxpbmcgdG93YXJkIHRoZSB0b3AsIHdlIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhlIGZhY3QgdGhhdCB0aGUgcHJlZGljdGVkIGFtb3VudFxuICAgIC8vIG9mIGNvbnRlbnQgYW5kIHRoZSBhY3R1YWwgYW1vdW50IG9mIHNjcm9sbGFibGUgc3BhY2UgbWF5IGRpZmZlci4gV2UgYWRkcmVzcyB0aGlzIGJ5IHNsb3dseVxuICAgIC8vIGNvcnJlY3RpbmcgdGhlIGRpZmZlcmVuY2Ugb24gZWFjaCBzY3JvbGwgZXZlbnQuXG4gICAgbGV0IG9mZnNldENvcnJlY3Rpb24gPSAwO1xuICAgIGlmIChzY3JvbGxEZWx0YSA8IDApIHtcbiAgICAgIC8vIFRoZSBjb250ZW50IG9mZnNldCB3ZSB3b3VsZCBleHBlY3QgYmFzZWQgb24gdGhlIGF2ZXJhZ2UgaXRlbSBzaXplLlxuICAgICAgY29uc3QgcHJlZGljdGVkT2Zmc2V0ID0gcmVuZGVyZWRSYW5nZS5zdGFydCAqIHRoaXMuX2F2ZXJhZ2VyLmdldEF2ZXJhZ2VJdGVtU2l6ZSgpO1xuICAgICAgLy8gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgcHJlZGljdGVkIHNpemUgb2YgdGhlIHVucmVuZGVyZWQgY29udGVudCBhdCB0aGUgYmVnaW5uaW5nIGFuZFxuICAgICAgLy8gdGhlIGFjdHVhbCBhdmFpbGFibGUgc3BhY2UgdG8gc2Nyb2xsIG92ZXIuIFdlIG5lZWQgdG8gcmVkdWNlIHRoaXMgdG8gemVybyBieSB0aGUgdGltZSB0aGVcbiAgICAgIC8vIHVzZXIgc2Nyb2xscyB0byB0aGUgdG9wLlxuICAgICAgLy8gLSAwIGluZGljYXRlcyB0aGF0IHRoZSBwcmVkaWN0ZWQgc2l6ZSBhbmQgYXZhaWxhYmxlIHNwYWNlIGFyZSB0aGUgc2FtZS5cbiAgICAgIC8vIC0gQSBuZWdhdGl2ZSBudW1iZXIgdGhhdCB0aGUgcHJlZGljdGVkIHNpemUgaXMgc21hbGxlciB0aGFuIHRoZSBhdmFpbGFibGUgc3BhY2UuXG4gICAgICAvLyAtIEEgcG9zaXRpdmUgbnVtYmVyIGluZGljYXRlcyB0aGUgcHJlZGljdGVkIHNpemUgaXMgbGFyZ2VyIHRoYW4gdGhlIGF2YWlsYWJsZSBzcGFjZVxuICAgICAgY29uc3Qgb2Zmc2V0RGlmZmVyZW5jZSA9IHByZWRpY3RlZE9mZnNldCAtIHRoaXMuX2xhc3RSZW5kZXJlZENvbnRlbnRPZmZzZXQ7XG4gICAgICAvLyBUaGUgYW1vdW50IG9mIGRpZmZlcmVuY2UgdG8gY29ycmVjdCBkdXJpbmcgdGhpcyBzY3JvbGwgZXZlbnQuIFdlIGNhbGN1bGF0ZSB0aGlzIGFzIGFcbiAgICAgIC8vIHBlcmNlbnRhZ2Ugb2YgdGhlIHRvdGFsIGRpZmZlcmVuY2UgYmFzZWQgb24gdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGRpc3RhbmNlIHRvd2FyZCB0aGUgdG9wXG4gICAgICAvLyB0aGF0IHRoZSB1c2VyIHNjcm9sbGVkLlxuICAgICAgb2Zmc2V0Q29ycmVjdGlvbiA9IE1hdGgucm91bmQob2Zmc2V0RGlmZmVyZW5jZSAqXG4gICAgICAgICAgTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgc2Nyb2xsTWFnbml0dWRlIC8gKHNjcm9sbE9mZnNldCArIHNjcm9sbE1hZ25pdHVkZSkpKSk7XG5cbiAgICAgIC8vIEJhc2VkIG9uIHRoZSBvZmZzZXQgY29ycmVjdGlvbiBhYm92ZSwgd2UgcHJldGVuZCB0aGF0IHRoZSBzY3JvbGwgZGVsdGEgd2FzIGJpZ2dlciBvclxuICAgICAgLy8gc21hbGxlciB0aGFuIGl0IGFjdHVhbGx5IHdhcywgdGhpcyB3YXkgd2UgY2FuIHN0YXJ0IHRvIGVsaW1pbmF0ZSB0aGUgZGlmZmVyZW5jZS5cbiAgICAgIHNjcm9sbERlbHRhID0gc2Nyb2xsRGVsdGEgLSBvZmZzZXRDb3JyZWN0aW9uO1xuICAgICAgc2Nyb2xsTWFnbml0dWRlID0gTWF0aC5hYnMoc2Nyb2xsRGVsdGEpO1xuICAgIH1cblxuICAgIC8vIFRoZSBjdXJyZW50IGFtb3VudCBvZiBidWZmZXIgcGFzdCB0aGUgc3RhcnQgb2YgdGhlIHZpZXdwb3J0LlxuICAgIGNvbnN0IHN0YXJ0QnVmZmVyID0gdGhpcy5fbGFzdFNjcm9sbE9mZnNldCAtIHRoaXMuX2xhc3RSZW5kZXJlZENvbnRlbnRPZmZzZXQ7XG4gICAgLy8gVGhlIGN1cnJlbnQgYW1vdW50IG9mIGJ1ZmZlciBwYXN0IHRoZSBlbmQgb2YgdGhlIHZpZXdwb3J0LlxuICAgIGNvbnN0IGVuZEJ1ZmZlciA9ICh0aGlzLl9sYXN0UmVuZGVyZWRDb250ZW50T2Zmc2V0ICsgdGhpcy5fbGFzdFJlbmRlcmVkQ29udGVudFNpemUpIC1cbiAgICAgICAgKHRoaXMuX2xhc3RTY3JvbGxPZmZzZXQgKyB2aWV3cG9ydC5nZXRWaWV3cG9ydFNpemUoKSk7XG4gICAgLy8gVGhlIGFtb3VudCBvZiB1bmZpbGxlZCBzcGFjZSB0aGF0IHNob3VsZCBiZSBmaWxsZWQgb24gdGhlIHNpZGUgdGhlIHVzZXIgaXMgc2Nyb2xsaW5nIHRvd2FyZFxuICAgIC8vIGluIG9yZGVyIHRvIHNhZmVseSBhYnNvcmIgdGhlIHNjcm9sbCBkZWx0YS5cbiAgICBjb25zdCB1bmRlcnNjYW4gPSBzY3JvbGxNYWduaXR1ZGUgKyB0aGlzLl9taW5CdWZmZXJQeCAtXG4gICAgICAgIChzY3JvbGxEZWx0YSA8IDAgPyBzdGFydEJ1ZmZlciA6IGVuZEJ1ZmZlcik7XG5cbiAgICAvLyBDaGVjayBpZiB0aGVyZSdzIHVuZmlsbGVkIHNwYWNlIHRoYXQgd2UgbmVlZCB0byByZW5kZXIgbmV3IGVsZW1lbnRzIHRvIGZpbGwuXG4gICAgaWYgKHVuZGVyc2NhbiA+IDApIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBzY3JvbGwgbWFnbml0dWRlIHdhcyBsYXJnZXIgdGhhbiB0aGUgdmlld3BvcnQgc2l6ZS4gSW4gdGhpcyBjYXNlIHRoZSB1c2VyXG4gICAgICAvLyB3b24ndCBub3RpY2UgYSBkaXNjb250aW51aXR5IGlmIHdlIGp1c3QganVtcCB0byB0aGUgbmV3IGVzdGltYXRlZCBwb3NpdGlvbiBpbiB0aGUgbGlzdC5cbiAgICAgIC8vIEhvd2V2ZXIsIGlmIHRoZSBzY3JvbGwgbWFnbml0dWRlIGlzIHNtYWxsZXIgdGhhbiB0aGUgdmlld3BvcnQgdGhlIHVzZXIgbWlnaHQgbm90aWNlIHNvbWVcbiAgICAgIC8vIGppdHRlcmluZXNzIGlmIHdlIGp1c3QganVtcCB0byB0aGUgZXN0aW1hdGVkIHBvc2l0aW9uLiBJbnN0ZWFkIHdlIG1ha2Ugc3VyZSB0byBzY3JvbGwgYnlcbiAgICAgIC8vIHRoZSBzYW1lIG51bWJlciBvZiBwaXhlbHMgYXMgdGhlIHNjcm9sbCBtYWduaXR1ZGUuXG4gICAgICBpZiAoc2Nyb2xsTWFnbml0dWRlID49IHZpZXdwb3J0LmdldFZpZXdwb3J0U2l6ZSgpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlckNvbnRlbnRGb3JDdXJyZW50T2Zmc2V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUaGUgbnVtYmVyIG9mIG5ldyBpdGVtcyB0byByZW5kZXIgb24gdGhlIHNpZGUgdGhlIHVzZXIgaXMgc2Nyb2xsaW5nIHRvd2FyZHMuIFJhdGhlciB0aGFuXG4gICAgICAgIC8vIGp1c3QgZmlsbGluZyB0aGUgdW5kZXJzY2FuIHNwYWNlLCB3ZSBhY3R1YWxseSBmaWxsIGVub3VnaCB0byBoYXZlIGEgYnVmZmVyIHNpemUgb2ZcbiAgICAgICAgLy8gYG1heEJ1ZmZlclB4YC4gVGhpcyBnaXZlcyB1cyBhIGxpdHRsZSB3aWdnbGUgcm9vbSBpbiBjYXNlIG91ciBpdGVtIHNpemUgZXN0aW1hdGUgaXMgb2ZmLlxuICAgICAgICBjb25zdCBhZGRJdGVtcyA9IE1hdGgubWF4KDAsIE1hdGguY2VpbCgodW5kZXJzY2FuIC0gdGhpcy5fbWluQnVmZmVyUHggKyB0aGlzLl9tYXhCdWZmZXJQeCkgL1xuICAgICAgICAgICAgdGhpcy5fYXZlcmFnZXIuZ2V0QXZlcmFnZUl0ZW1TaXplKCkpKTtcbiAgICAgICAgLy8gVGhlIGFtb3VudCBvZiBmaWxsZWQgc3BhY2UgYmV5b25kIHdoYXQgaXMgbmVjZXNzYXJ5IG9uIHRoZSBzaWRlIHRoZSB1c2VyIGlzIHNjcm9sbGluZ1xuICAgICAgICAvLyBhd2F5IGZyb20uXG4gICAgICAgIGNvbnN0IG92ZXJzY2FuID0gKHNjcm9sbERlbHRhIDwgMCA/IGVuZEJ1ZmZlciA6IHN0YXJ0QnVmZmVyKSAtIHRoaXMuX21pbkJ1ZmZlclB4ICtcbiAgICAgICAgICAgIHNjcm9sbE1hZ25pdHVkZTtcbiAgICAgICAgLy8gVGhlIG51bWJlciBvZiBjdXJyZW50bHkgcmVuZGVyZWQgaXRlbXMgdG8gcmVtb3ZlIG9uIHRoZSBzaWRlIHRoZSB1c2VyIGlzIHNjcm9sbGluZyBhd2F5XG4gICAgICAgIC8vIGZyb20uIElmIHJlbW92YWwgaGFzIGZhaWxlZCBpbiByZWNlbnQgY3ljbGVzIHdlIGFyZSBsZXNzIGFnZ3Jlc3NpdmUgaW4gaG93IG11Y2ggd2UgdHJ5IHRvXG4gICAgICAgIC8vIHJlbW92ZS5cbiAgICAgICAgY29uc3QgdW5ib3VuZGVkUmVtb3ZlSXRlbXMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgb3ZlcnNjYW4gLyB0aGlzLl9hdmVyYWdlci5nZXRBdmVyYWdlSXRlbVNpemUoKSAvICh0aGlzLl9yZW1vdmFsRmFpbHVyZXMgKyAxKSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUl0ZW1zID1cbiAgICAgICAgICAgIE1hdGgubWluKHJlbmRlcmVkUmFuZ2UuZW5kIC0gcmVuZGVyZWRSYW5nZS5zdGFydCwgTWF0aC5tYXgoMCwgdW5ib3VuZGVkUmVtb3ZlSXRlbXMpKTtcblxuICAgICAgICAvLyBUaGUgbmV3IHJhbmdlIHdlIHdpbGwgdGVsbCB0aGUgdmlld3BvcnQgdG8gcmVuZGVyLiBXZSBmaXJzdCBleHBhbmQgaXQgdG8gaW5jbHVkZSB0aGUgbmV3XG4gICAgICAgIC8vIGl0ZW1zIHdlIHdhbnQgcmVuZGVyZWQsIHdlIHRoZW4gY29udHJhY3QgdGhlIG9wcG9zaXRlIHNpZGUgdG8gcmVtb3ZlIGl0ZW1zIHdlIG5vIGxvbmdlclxuICAgICAgICAvLyB3YW50IHJlbmRlcmVkLlxuICAgICAgICBjb25zdCByYW5nZSA9IHRoaXMuX2V4cGFuZFJhbmdlKFxuICAgICAgICAgICAgcmVuZGVyZWRSYW5nZSwgc2Nyb2xsRGVsdGEgPCAwID8gYWRkSXRlbXMgOiAwLCBzY3JvbGxEZWx0YSA+IDAgPyBhZGRJdGVtcyA6IDApO1xuICAgICAgICBpZiAoc2Nyb2xsRGVsdGEgPCAwKSB7XG4gICAgICAgICAgcmFuZ2UuZW5kID0gTWF0aC5tYXgocmFuZ2Uuc3RhcnQgKyAxLCByYW5nZS5lbmQgLSByZW1vdmVJdGVtcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmFuZ2Uuc3RhcnQgPSBNYXRoLm1pbihyYW5nZS5lbmQgLSAxLCByYW5nZS5zdGFydCArIHJlbW92ZUl0ZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBuZXcgb2Zmc2V0IHdlIHdhbnQgdG8gc2V0IG9uIHRoZSByZW5kZXJlZCBjb250ZW50LiBUbyBkZXRlcm1pbmUgdGhpcyB3ZSBtZWFzdXJlIHRoZVxuICAgICAgICAvLyBudW1iZXIgb2YgcGl4ZWxzIHdlIHJlbW92ZWQgYW5kIHRoZW4gYWRqdXN0IHRoZSBvZmZzZXQgdG8gdGhlIHN0YXJ0IG9mIHRoZSByZW5kZXJlZFxuICAgICAgICAvLyBjb250ZW50IG9yIHRvIHRoZSBlbmQgb2YgdGhlIHJlbmRlcmVkIGNvbnRlbnQgYWNjb3JkaW5nbHkgKHdoaWNoZXZlciBvbmUgZG9lc24ndCByZXF1aXJlXG4gICAgICAgIC8vIHRoYXQgdGhlIG5ld2x5IGFkZGVkIGl0ZW1zIHRvIGJlIHJlbmRlcmVkIHRvIGNhbGN1bGF0ZS4pXG4gICAgICAgIGxldCBjb250ZW50T2Zmc2V0OiBudW1iZXI7XG4gICAgICAgIGxldCBjb250ZW50T2Zmc2V0VG86ICd0by1zdGFydCcgfCAndG8tZW5kJztcbiAgICAgICAgaWYgKHNjcm9sbERlbHRhIDwgMCkge1xuICAgICAgICAgIGxldCByZW1vdmVkU2l6ZSA9IHZpZXdwb3J0Lm1lYXN1cmVSYW5nZVNpemUoe1xuICAgICAgICAgICAgc3RhcnQ6IHJhbmdlLmVuZCxcbiAgICAgICAgICAgIGVuZDogcmVuZGVyZWRSYW5nZS5lbmQsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gQ2hlY2sgdGhhdCB3ZSdyZSBub3QgcmVtb3ZpbmcgdG9vIG11Y2guXG4gICAgICAgICAgaWYgKHJlbW92ZWRTaXplIDw9IG92ZXJzY2FuKSB7XG4gICAgICAgICAgICBjb250ZW50T2Zmc2V0ID1cbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0UmVuZGVyZWRDb250ZW50T2Zmc2V0ICsgdGhpcy5fbGFzdFJlbmRlcmVkQ29udGVudFNpemUgLSByZW1vdmVkU2l6ZTtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92YWxGYWlsdXJlcyA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSByZW1vdmFsIGlzIG1vcmUgdGhhbiB0aGUgb3ZlcnNjYW4gY2FuIGFic29yYiBqdXN0IHVuZG8gaXQgYW5kIHJlY29yZCB0aGUgZmFjdFxuICAgICAgICAgICAgLy8gdGhhdCB0aGUgcmVtb3ZhbCBmYWlsZWQgc28gd2UgY2FuIGJlIGxlc3MgYWdncmVzc2l2ZSBuZXh0IHRpbWUuXG4gICAgICAgICAgICByYW5nZS5lbmQgPSByZW5kZXJlZFJhbmdlLmVuZDtcbiAgICAgICAgICAgIGNvbnRlbnRPZmZzZXQgPSB0aGlzLl9sYXN0UmVuZGVyZWRDb250ZW50T2Zmc2V0ICsgdGhpcy5fbGFzdFJlbmRlcmVkQ29udGVudFNpemU7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmFsRmFpbHVyZXMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudE9mZnNldFRvID0gJ3RvLWVuZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcmVtb3ZlZFNpemUgPSB2aWV3cG9ydC5tZWFzdXJlUmFuZ2VTaXplKHtcbiAgICAgICAgICAgIHN0YXJ0OiByZW5kZXJlZFJhbmdlLnN0YXJ0LFxuICAgICAgICAgICAgZW5kOiByYW5nZS5zdGFydCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBDaGVjayB0aGF0IHdlJ3JlIG5vdCByZW1vdmluZyB0b28gbXVjaC5cbiAgICAgICAgICBpZiAocmVtb3ZlZFNpemUgPD0gb3ZlcnNjYW4pIHtcbiAgICAgICAgICAgIGNvbnRlbnRPZmZzZXQgPSB0aGlzLl9sYXN0UmVuZGVyZWRDb250ZW50T2Zmc2V0ICsgcmVtb3ZlZFNpemU7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmFsRmFpbHVyZXMgPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcmVtb3ZhbCBpcyBtb3JlIHRoYW4gdGhlIG92ZXJzY2FuIGNhbiBhYnNvcmIganVzdCB1bmRvIGl0IGFuZCByZWNvcmQgdGhlIGZhY3RcbiAgICAgICAgICAgIC8vIHRoYXQgdGhlIHJlbW92YWwgZmFpbGVkIHNvIHdlIGNhbiBiZSBsZXNzIGFnZ3Jlc3NpdmUgbmV4dCB0aW1lLlxuICAgICAgICAgICAgcmFuZ2Uuc3RhcnQgPSByZW5kZXJlZFJhbmdlLnN0YXJ0O1xuICAgICAgICAgICAgY29udGVudE9mZnNldCA9IHRoaXMuX2xhc3RSZW5kZXJlZENvbnRlbnRPZmZzZXQ7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmFsRmFpbHVyZXMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGVudE9mZnNldFRvID0gJ3RvLXN0YXJ0JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0aGUgcmFuZ2UgYW5kIG9mZnNldCB3ZSBjYWxjdWxhdGVkIGFib3ZlLlxuICAgICAgICB2aWV3cG9ydC5zZXRSZW5kZXJlZFJhbmdlKHJhbmdlKTtcbiAgICAgICAgdmlld3BvcnQuc2V0UmVuZGVyZWRDb250ZW50T2Zmc2V0KGNvbnRlbnRPZmZzZXQgKyBvZmZzZXRDb3JyZWN0aW9uLCBjb250ZW50T2Zmc2V0VG8pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob2Zmc2V0Q29ycmVjdGlvbikge1xuICAgICAgLy8gRXZlbiBpZiB0aGUgcmVuZGVyZWQgcmFuZ2UgZGlkbid0IGNoYW5nZSwgd2UgbWF5IHN0aWxsIG5lZWQgdG8gYWRqdXN0IHRoZSBjb250ZW50IG9mZnNldCB0b1xuICAgICAgLy8gc2ltdWxhdGUgc2Nyb2xsaW5nIHNsaWdodGx5IHNsb3dlciBvciBmYXN0ZXIgdGhhbiB0aGUgdXNlciBhY3R1YWxseSBzY3JvbGxlZC5cbiAgICAgIHZpZXdwb3J0LnNldFJlbmRlcmVkQ29udGVudE9mZnNldCh0aGlzLl9sYXN0UmVuZGVyZWRDb250ZW50T2Zmc2V0ICsgb2Zmc2V0Q29ycmVjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gU2F2ZSB0aGUgc2Nyb2xsIG9mZnNldCB0byBiZSBjb21wYXJlZCB0byB0aGUgbmV3IHZhbHVlIG9uIHRoZSBuZXh0IHNjcm9sbCBldmVudC5cbiAgICB0aGlzLl9sYXN0U2Nyb2xsT2Zmc2V0ID0gc2Nyb2xsT2Zmc2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgc2l6ZSBvZiB0aGUgY3VycmVudGx5IHJlbmRlcmVkIGNvbnRlbnQgYW5kIHVzZXMgaXQgdG8gdXBkYXRlIHRoZSBlc3RpbWF0ZWQgaXRlbSBzaXplXG4gICAqIGFuZCBlc3RpbWF0ZWQgdG90YWwgY29udGVudCBzaXplLlxuICAgKi9cbiAgcHJpdmF0ZSBfY2hlY2tSZW5kZXJlZENvbnRlbnRTaXplKCkge1xuICAgIGNvbnN0IHZpZXdwb3J0ID0gdGhpcy5fdmlld3BvcnQhO1xuICAgIHRoaXMuX2xhc3RSZW5kZXJlZENvbnRlbnRTaXplID0gdmlld3BvcnQubWVhc3VyZVJlbmRlcmVkQ29udGVudFNpemUoKTtcbiAgICB0aGlzLl9hdmVyYWdlci5hZGRTYW1wbGUodmlld3BvcnQuZ2V0UmVuZGVyZWRSYW5nZSgpLCB0aGlzLl9sYXN0UmVuZGVyZWRDb250ZW50U2l6ZSk7XG4gICAgdGhpcy5fdXBkYXRlVG90YWxDb250ZW50U2l6ZSh0aGlzLl9sYXN0UmVuZGVyZWRDb250ZW50U2l6ZSk7XG4gIH1cblxuICAvKiogQ2hlY2tzIHRoZSBjdXJyZW50bHkgcmVuZGVyZWQgY29udGVudCBvZmZzZXQgYW5kIHNhdmVzIHRoZSB2YWx1ZSBmb3IgbGF0ZXIgdXNlLiAqL1xuICBwcml2YXRlIF9jaGVja1JlbmRlcmVkQ29udGVudE9mZnNldCgpIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuX3ZpZXdwb3J0ITtcbiAgICB0aGlzLl9sYXN0UmVuZGVyZWRDb250ZW50T2Zmc2V0ID0gdmlld3BvcnQuZ2V0T2Zmc2V0VG9SZW5kZXJlZENvbnRlbnRTdGFydCgpITtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNhbGN1bGF0ZXMgdGhlIHJlbmRlcmVkIGNvbnRlbnQgYmFzZWQgb24gb3VyIGVzdGltYXRlIG9mIHdoYXQgc2hvdWxkIGJlIHNob3duIGF0IHRoZSBjdXJyZW50XG4gICAqIHNjcm9sbCBvZmZzZXQuXG4gICAqL1xuICBwcml2YXRlIF9yZW5kZXJDb250ZW50Rm9yQ3VycmVudE9mZnNldCgpIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuX3ZpZXdwb3J0ITtcbiAgICBjb25zdCBzY3JvbGxPZmZzZXQgPSB2aWV3cG9ydC5tZWFzdXJlU2Nyb2xsT2Zmc2V0KCk7XG4gICAgdGhpcy5fbGFzdFNjcm9sbE9mZnNldCA9IHNjcm9sbE9mZnNldDtcbiAgICB0aGlzLl9yZW1vdmFsRmFpbHVyZXMgPSAwO1xuXG4gICAgY29uc3QgaXRlbVNpemUgPSB0aGlzLl9hdmVyYWdlci5nZXRBdmVyYWdlSXRlbVNpemUoKTtcbiAgICBjb25zdCBmaXJzdFZpc2libGVJbmRleCA9XG4gICAgICAgIE1hdGgubWluKHZpZXdwb3J0LmdldERhdGFMZW5ndGgoKSAtIDEsIE1hdGguZmxvb3Ioc2Nyb2xsT2Zmc2V0IC8gaXRlbVNpemUpKTtcbiAgICBjb25zdCBidWZmZXJTaXplID0gTWF0aC5jZWlsKHRoaXMuX21heEJ1ZmZlclB4IC8gaXRlbVNpemUpO1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5fZXhwYW5kUmFuZ2UoXG4gICAgICAgIHRoaXMuX2dldFZpc2libGVSYW5nZUZvckluZGV4KGZpcnN0VmlzaWJsZUluZGV4KSwgYnVmZmVyU2l6ZSwgYnVmZmVyU2l6ZSk7XG5cbiAgICB2aWV3cG9ydC5zZXRSZW5kZXJlZFJhbmdlKHJhbmdlKTtcbiAgICB2aWV3cG9ydC5zZXRSZW5kZXJlZENvbnRlbnRPZmZzZXQoaXRlbVNpemUgKiByYW5nZS5zdGFydCk7XG4gIH1cblxuICAvLyBUT0RPOiBtYXliZSBtb3ZlIHRvIGJhc2UgY2xhc3MsIGNhbiBwcm9iYWJseSBzaGFyZSB3aXRoIGZpeGVkIHNpemUgc3RyYXRlZ3kuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB2aXNpYmxlIHJhbmdlIG9mIGRhdGEgZm9yIHRoZSBnaXZlbiBzdGFydCBpbmRleC4gSWYgdGhlIHN0YXJ0IGluZGV4IGlzIHRvbyBjbG9zZSB0b1xuICAgKiB0aGUgZW5kIG9mIHRoZSBsaXN0IGl0IG1heSBiZSBiYWNrZWQgdXAgdG8gZW5zdXJlIHRoZSBlc3RpbWF0ZWQgc2l6ZSBvZiB0aGUgcmFuZ2UgaXMgZW5vdWdoIHRvXG4gICAqIGZpbGwgdGhlIHZpZXdwb3J0LlxuICAgKiBOb3RlOiBtdXN0IG5vdCBiZSBjYWxsZWQgaWYgYHRoaXMuX3ZpZXdwb3J0YCBpcyBudWxsXG4gICAqIEBwYXJhbSBzdGFydEluZGV4IFRoZSBpbmRleCB0byBzdGFydCB0aGUgcmFuZ2UgYXRcbiAgICogQHJldHVybiBhIHJhbmdlIGVzdGltYXRlZCB0byBiZSBsYXJnZSBlbm91Z2ggdG8gZmlsbCB0aGUgdmlld3BvcnQgd2hlbiByZW5kZXJlZC5cbiAgICovXG4gIHByaXZhdGUgX2dldFZpc2libGVSYW5nZUZvckluZGV4KHN0YXJ0SW5kZXg6IG51bWJlcik6IExpc3RSYW5nZSB7XG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl92aWV3cG9ydCE7XG4gICAgY29uc3QgcmFuZ2U6IExpc3RSYW5nZSA9IHtcbiAgICAgIHN0YXJ0OiBzdGFydEluZGV4LFxuICAgICAgZW5kOiBzdGFydEluZGV4ICtcbiAgICAgICAgICBNYXRoLmNlaWwodmlld3BvcnQuZ2V0Vmlld3BvcnRTaXplKCkgLyB0aGlzLl9hdmVyYWdlci5nZXRBdmVyYWdlSXRlbVNpemUoKSlcbiAgICB9O1xuICAgIGNvbnN0IGV4dHJhID0gcmFuZ2UuZW5kIC0gdmlld3BvcnQuZ2V0RGF0YUxlbmd0aCgpO1xuICAgIGlmIChleHRyYSA+IDApIHtcbiAgICAgIHJhbmdlLnN0YXJ0ID0gTWF0aC5tYXgoMCwgcmFuZ2Uuc3RhcnQgLSBleHRyYSk7XG4gICAgfVxuICAgIHJldHVybiByYW5nZTtcbiAgfVxuXG4gIC8vIFRPRE86IG1heWJlIG1vdmUgdG8gYmFzZSBjbGFzcywgY2FuIHByb2JhYmx5IHNoYXJlIHdpdGggZml4ZWQgc2l6ZSBzdHJhdGVneS5cbiAgLyoqXG4gICAqIEV4cGFuZCB0aGUgZ2l2ZW4gcmFuZ2UgYnkgdGhlIGdpdmVuIGFtb3VudCBpbiBlaXRoZXIgZGlyZWN0aW9uLlxuICAgKiBOb3RlOiBtdXN0IG5vdCBiZSBjYWxsZWQgaWYgYHRoaXMuX3ZpZXdwb3J0YCBpcyBudWxsXG4gICAqIEBwYXJhbSByYW5nZSBUaGUgcmFuZ2UgdG8gZXhwYW5kXG4gICAqIEBwYXJhbSBleHBhbmRTdGFydCBUaGUgbnVtYmVyIG9mIGl0ZW1zIHRvIGV4cGFuZCB0aGUgc3RhcnQgb2YgdGhlIHJhbmdlIGJ5LlxuICAgKiBAcGFyYW0gZXhwYW5kRW5kIFRoZSBudW1iZXIgb2YgaXRlbXMgdG8gZXhwYW5kIHRoZSBlbmQgb2YgdGhlIHJhbmdlIGJ5LlxuICAgKiBAcmV0dXJuIFRoZSBleHBhbmRlZCByYW5nZS5cbiAgICovXG4gIHByaXZhdGUgX2V4cGFuZFJhbmdlKHJhbmdlOiBMaXN0UmFuZ2UsIGV4cGFuZFN0YXJ0OiBudW1iZXIsIGV4cGFuZEVuZDogbnVtYmVyKTogTGlzdFJhbmdlIHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuX3ZpZXdwb3J0ITtcbiAgICBjb25zdCBzdGFydCA9IE1hdGgubWF4KDAsIHJhbmdlLnN0YXJ0IC0gZXhwYW5kU3RhcnQpO1xuICAgIGNvbnN0IGVuZCA9IE1hdGgubWluKHZpZXdwb3J0LmdldERhdGFMZW5ndGgoKSwgcmFuZ2UuZW5kICsgZXhwYW5kRW5kKTtcbiAgICByZXR1cm4ge3N0YXJ0LCBlbmR9O1xuICB9XG5cbiAgLyoqIFVwZGF0ZSB0aGUgdmlld3BvcnQncyB0b3RhbCBjb250ZW50IHNpemUuICovXG4gIHByaXZhdGUgX3VwZGF0ZVRvdGFsQ29udGVudFNpemUocmVuZGVyZWRDb250ZW50U2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl92aWV3cG9ydCE7XG4gICAgY29uc3QgcmVuZGVyZWRSYW5nZSA9IHZpZXdwb3J0LmdldFJlbmRlcmVkUmFuZ2UoKTtcbiAgICBjb25zdCB0b3RhbFNpemUgPSByZW5kZXJlZENvbnRlbnRTaXplICtcbiAgICAgICAgKHZpZXdwb3J0LmdldERhdGFMZW5ndGgoKSAtIChyZW5kZXJlZFJhbmdlLmVuZCAtIHJlbmRlcmVkUmFuZ2Uuc3RhcnQpKSAqXG4gICAgICAgIHRoaXMuX2F2ZXJhZ2VyLmdldEF2ZXJhZ2VJdGVtU2l6ZSgpO1xuICAgIHZpZXdwb3J0LnNldFRvdGFsQ29udGVudFNpemUodG90YWxTaXplKTtcbiAgfVxufVxuXG4vKipcbiAqIFByb3ZpZGVyIGZhY3RvcnkgZm9yIGBBdXRvU2l6ZVZpcnR1YWxTY3JvbGxTdHJhdGVneWAgdGhhdCBzaW1wbHkgZXh0cmFjdHMgdGhlIGFscmVhZHkgY3JlYXRlZFxuICogYEF1dG9TaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5YCBmcm9tIHRoZSBnaXZlbiBkaXJlY3RpdmUuXG4gKiBAcGFyYW0gYXV0b1NpemVEaXIgVGhlIGluc3RhbmNlIG9mIGBDZGtBdXRvU2l6ZVZpcnR1YWxTY3JvbGxgIHRvIGV4dHJhY3QgdGhlXG4gKiAgICAgYEF1dG9TaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5YCBmcm9tLlxuICovXG5leHBvcnQgZnVuY3Rpb24gX2F1dG9TaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5RmFjdG9yeShhdXRvU2l6ZURpcjogQ2RrQXV0b1NpemVWaXJ0dWFsU2Nyb2xsKSB7XG4gIHJldHVybiBhdXRvU2l6ZURpci5fc2Nyb2xsU3RyYXRlZ3k7XG59XG5cblxuLyoqIEEgdmlydHVhbCBzY3JvbGwgc3RyYXRlZ3kgdGhhdCBzdXBwb3J0cyB1bmtub3duIG9yIGR5bmFtaWMgc2l6ZSBpdGVtcy4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydFthdXRvc2l6ZV0nLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVklSVFVBTF9TQ1JPTExfU1RSQVRFR1ksXG4gICAgdXNlRmFjdG9yeTogX2F1dG9TaXplVmlydHVhbFNjcm9sbFN0cmF0ZWd5RmFjdG9yeSxcbiAgICBkZXBzOiBbZm9yd2FyZFJlZigoKSA9PiBDZGtBdXRvU2l6ZVZpcnR1YWxTY3JvbGwpXSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0F1dG9TaXplVmlydHVhbFNjcm9sbCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBUaGUgbWluaW11bSBhbW91bnQgb2YgYnVmZmVyIHJlbmRlcmVkIGJleW9uZCB0aGUgdmlld3BvcnQgKGluIHBpeGVscykuXG4gICAqIElmIHRoZSBhbW91bnQgb2YgYnVmZmVyIGRpcHMgYmVsb3cgdGhpcyBudW1iZXIsIG1vcmUgaXRlbXMgd2lsbCBiZSByZW5kZXJlZC4gRGVmYXVsdHMgdG8gMTAwcHguXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbWluQnVmZmVyUHgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX21pbkJ1ZmZlclB4OyB9XG4gIHNldCBtaW5CdWZmZXJQeCh2YWx1ZTogbnVtYmVyKSB7IHRoaXMuX21pbkJ1ZmZlclB4ID0gY29lcmNlTnVtYmVyUHJvcGVydHkodmFsdWUpOyB9XG4gIF9taW5CdWZmZXJQeCA9IDEwMDtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBwaXhlbHMgd29ydGggb2YgYnVmZmVyIHRvIHNob290IGZvciB3aGVuIHJlbmRlcmluZyBuZXcgaXRlbXMuXG4gICAqIElmIHRoZSBhY3R1YWwgYW1vdW50IHR1cm5zIG91dCB0byBiZSBsZXNzIGl0IHdpbGwgbm90IG5lY2Vzc2FyaWx5IHRyaWdnZXIgYW4gYWRkaXRpb25hbFxuICAgKiByZW5kZXJpbmcgY3ljbGUgKGFzIGxvbmcgYXMgdGhlIGFtb3VudCBvZiBidWZmZXIgaXMgc3RpbGwgZ3JlYXRlciB0aGFuIGBtaW5CdWZmZXJQeGApLlxuICAgKiBEZWZhdWx0cyB0byAyMDBweC5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBtYXhCdWZmZXJQeCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbWF4QnVmZmVyUHg7IH1cbiAgc2V0IG1heEJ1ZmZlclB4KHZhbHVlOiBudW1iZXIpIHsgdGhpcy5fbWF4QnVmZmVyUHggPSBjb2VyY2VOdW1iZXJQcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgX21heEJ1ZmZlclB4ID0gMjAwO1xuXG4gIC8qKiBUaGUgc2Nyb2xsIHN0cmF0ZWd5IHVzZWQgYnkgdGhpcyBkaXJlY3RpdmUuICovXG4gIF9zY3JvbGxTdHJhdGVneSA9IG5ldyBBdXRvU2l6ZVZpcnR1YWxTY3JvbGxTdHJhdGVneSh0aGlzLm1pbkJ1ZmZlclB4LCB0aGlzLm1heEJ1ZmZlclB4KTtcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLl9zY3JvbGxTdHJhdGVneS51cGRhdGVCdWZmZXJTaXplKHRoaXMubWluQnVmZmVyUHgsIHRoaXMubWF4QnVmZmVyUHgpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21pbkJ1ZmZlclB4OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX21heEJ1ZmZlclB4OiBOdW1iZXJJbnB1dDtcbn1cbiJdfQ==