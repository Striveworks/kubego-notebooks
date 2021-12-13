/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, NgZone } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, share, skip, startWith } from 'rxjs/operators';
import { _closest } from '@angular/cdk-experimental/popover-edit';
import { HEADER_ROW_SELECTOR } from './selectors';
/** Coordinates events between the column resize directives. */
export class HeaderRowEventDispatcher {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL2NvbHVtbi1yZXNpemUvZXZlbnQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsYUFBYSxFQUE0QixVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFFaEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRWhELCtEQUErRDtBQUUvRCxNQUFNLE9BQU8sd0JBQXdCO0lBY25DLFlBQTZCLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBYjVDOzs7O1dBSUc7UUFDTSxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBZ0IsQ0FBQztRQUV6RDs7O1dBR0c7UUFDTSwrQkFBMEIsR0FBRyxJQUFJLE9BQU8sRUFBZ0IsQ0FBQztRQUlsRSx3REFBd0Q7UUFDL0MsOEJBQXlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FDNUQsb0JBQW9CLEVBQUUsRUFDdEIsS0FBSyxFQUFFLENBQ1YsQ0FBQztRQUVGOzs7V0FHRztRQUNNLHFDQUFnQyxHQUFHLGFBQWEsQ0FBQztZQUN0RCxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUMsRUFDaEQsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNmLG9CQUFvQixFQUFFLENBQ3hCO1lBQ0YsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FDaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLEVBQ2hELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDZixvQkFBb0IsRUFBRSxDQUN6QjtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLHdDQUF3QztRQUNqRCxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxFQUM3QyxvQkFBb0IsRUFBRSxFQUN0QixLQUFLLEVBQUUsQ0FDVixDQUFDO1FBRWUsaURBQTRDLEdBQ3pELElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQ3RDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFDakIsS0FBSyxFQUFFLENBQ1YsQ0FBQztRQUVOLHFFQUFxRTtRQUNyRSxnRkFBZ0Y7UUFDeEUsaUJBQVksR0FBaUIsSUFBSSxDQUFDO1FBQ2xDLHNCQUFpQixHQUE2QixJQUFJLENBQUM7SUF2Q1osQ0FBQztJQXlDaEQ7OztPQUdHO0lBQ0gsZ0NBQWdDLENBQUMsR0FBWTtRQUMzQyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsNENBQTRDLENBQUMsSUFBSSxDQUM3RSxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLEVBQ3JDLG9CQUFvQixFQUFFLEVBQ3RCLEtBQUssRUFBRSxDQUNSLENBQUM7U0FDSDtRQUVELE9BQU8sSUFBSSxDQUFDLGlCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFTyxVQUFVO1FBQ2hCLE9BQU8sQ0FBQyxNQUFxQixFQUFFLEVBQUUsQ0FDN0IsSUFBSSxVQUFVLENBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdELEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDbkMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7U0FDcEMsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDOzs7WUFoRkYsVUFBVTs7O1lBVFMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGUsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvbWJpbmVMYXRlc3QsIE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbiwgT2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHNoYXJlLCBza2lwLCBzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtfY2xvc2VzdH0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQnO1xuXG5pbXBvcnQge0hFQURFUl9ST1dfU0VMRUNUT1J9IGZyb20gJy4vc2VsZWN0b3JzJztcblxuLyoqIENvb3JkaW5hdGVzIGV2ZW50cyBiZXR3ZWVuIHRoZSBjb2x1bW4gcmVzaXplIGRpcmVjdGl2ZXMuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVhZGVyUm93RXZlbnREaXNwYXRjaGVyIHtcbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBjdXJyZW50bHkgaG92ZXJlZCBoZWFkZXIgY2VsbCBvciBudWxsIHdoZW4gbm8gaGVhZGVyIGNlbGxzIGFyZSBob3ZlcmVkLlxuICAgKiBFeHBvc2VkIHB1YmxpY2x5IGZvciBldmVudHMgdG8gZmVlZCBpbiwgYnV0IHN1YnNjcmliZXJzIHNob3VsZCB1c2UgaGVhZGVyQ2VsbEhvdmVyZWREaXN0aW5jdCxcbiAgICogZGVmaW5lZCBiZWxvdy5cbiAgICovXG4gIHJlYWRvbmx5IGhlYWRlckNlbGxIb3ZlcmVkID0gbmV3IFN1YmplY3Q8RWxlbWVudHxudWxsPigpO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgaGVhZGVyIGNlbGwgZm9yIHdoaWNoIGEgdXNlci10cmlnZ2VyZWQgcmVzaXplIGlzIGFjdGl2ZSBvciBudWxsXG4gICAqIHdoZW4gbm8gcmVzaXplIGlzIGluIHByb2dyZXNzLlxuICAgKi9cbiAgcmVhZG9ubHkgb3ZlcmxheUhhbmRsZUFjdGl2ZUZvckNlbGwgPSBuZXcgU3ViamVjdDxFbGVtZW50fG51bGw+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgLyoqIERpc3RpbmN0IGFuZCBzaGFyZWQgdmVyc2lvbiBvZiBoZWFkZXJDZWxsSG92ZXJlZC4gKi9cbiAgcmVhZG9ubHkgaGVhZGVyQ2VsbEhvdmVyZWREaXN0aW5jdCA9IHRoaXMuaGVhZGVyQ2VsbEhvdmVyZWQucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZSgpLFxuICApO1xuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgaGVhZGVyIHRoYXQgaXMgY3VycmVudGx5IGhvdmVyZWQgb3IgaG9zdGluZyBhbiBhY3RpdmUgcmVzaXplIGV2ZW50ICh3aXRoIGFjdGl2ZVxuICAgKiB0YWtpbmcgcHJlY2VkZW5jZSkuXG4gICAqL1xuICByZWFkb25seSBoZWFkZXJSb3dIb3ZlcmVkT3JBY3RpdmVEaXN0aW5jdCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5oZWFkZXJDZWxsSG92ZXJlZERpc3RpbmN0LnBpcGUoXG4gICAgICAgICAgbWFwKGNlbGwgPT4gX2Nsb3Nlc3QoY2VsbCwgSEVBREVSX1JPV19TRUxFQ1RPUikpLFxuICAgICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICksXG4gICAgICB0aGlzLm92ZXJsYXlIYW5kbGVBY3RpdmVGb3JDZWxsLnBpcGUoXG4gICAgICAgICAgbWFwKGNlbGwgPT4gX2Nsb3Nlc3QoY2VsbCwgSEVBREVSX1JPV19TRUxFQ1RPUikpLFxuICAgICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgXSkucGlwZShcbiAgICAgIHNraXAoMSksIC8vIElnbm9yZSBpbml0aWFsIFtudWxsLCBudWxsXSBlbWlzc2lvbi5cbiAgICAgIG1hcCgoW2hvdmVyZWQsIGFjdGl2ZV0pID0+IGFjdGl2ZSB8fCBob3ZlcmVkKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICBzaGFyZSgpLFxuICApO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2hlYWRlclJvd0hvdmVyZWRPckFjdGl2ZURpc3RpbmN0UmVlbnRlclpvbmUgPVxuICAgICAgdGhpcy5oZWFkZXJSb3dIb3ZlcmVkT3JBY3RpdmVEaXN0aW5jdC5waXBlKFxuICAgICAgICAgIHRoaXMuX2VudGVyWm9uZSgpLFxuICAgICAgICAgIHNoYXJlKCksXG4gICAgICApO1xuXG4gIC8vIE9wdGltaXphdGlvbjogU2hhcmUgcm93IGV2ZW50cyBvYnNlcnZhYmxlIHdpdGggc3Vic2VxdWVudCBjYWxsZXJzLlxuICAvLyBBdCBzdGFydHVwLCBjYWxscyB3aWxsIGJlIHNlcXVlbnRpYWwgYnkgcm93IChhbmQgdHlwaWNhbGx5IHRoZXJlJ3Mgb25seSBvbmUpLlxuICBwcml2YXRlIF9sYXN0U2VlblJvdzogRWxlbWVudHxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGFzdFNlZW5Sb3dIb3ZlcjogT2JzZXJ2YWJsZTxib29sZWFuPnxudWxsID0gbnVsbDtcblxuICAvKipcbiAgICogRW1pdHMgd2hldGhlciB0aGUgc3BlY2lmaWVkIHJvdyBzaG91bGQgc2hvdyBpdHMgb3ZlcmxheSBjb250cm9scy5cbiAgICogRW1pc3Npb24gb2NjdXJzIHdpdGhpbiB0aGUgTmdab25lLlxuICAgKi9cbiAgcmVzaXplT3ZlcmxheVZpc2libGVGb3JIZWFkZXJSb3cocm93OiBFbGVtZW50KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgaWYgKHJvdyAhPT0gdGhpcy5fbGFzdFNlZW5Sb3cpIHtcbiAgICAgIHRoaXMuX2xhc3RTZWVuUm93ID0gcm93O1xuICAgICAgdGhpcy5fbGFzdFNlZW5Sb3dIb3ZlciA9IHRoaXMuX2hlYWRlclJvd0hvdmVyZWRPckFjdGl2ZURpc3RpbmN0UmVlbnRlclpvbmUucGlwZShcbiAgICAgICAgbWFwKGhvdmVyZWRSb3cgPT4gaG92ZXJlZFJvdyA9PT0gcm93KSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgc2hhcmUoKSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2xhc3RTZWVuUm93SG92ZXIhO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50ZXJab25lPFQ+KCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gICAgcmV0dXJuIChzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+XG4gICAgICAgIG5ldyBPYnNlcnZhYmxlPFQ+KChvYnNlcnZlcikgPT4gc291cmNlLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQodmFsdWUpKSxcbiAgICAgICAgICBlcnJvcjogKGVycikgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyKSxcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuICAgICAgICB9KSk7XG4gIH1cbn1cbiJdfQ==