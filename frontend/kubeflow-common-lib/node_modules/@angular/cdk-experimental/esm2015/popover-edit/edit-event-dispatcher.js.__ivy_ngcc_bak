/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, NgZone } from '@angular/core';
import { combineLatest, Observable, pipe, Subject } from 'rxjs';
import { audit, auditTime, debounceTime, distinctUntilChanged, filter, map, skip, startWith, shareReplay, } from 'rxjs/operators';
import { CELL_SELECTOR, ROW_SELECTOR } from './constants';
import { closest } from './polyfill';
/** The delay applied to mouse events before hiding or showing hover content. */
const MOUSE_EVENT_DELAY_MS = 40;
/** The delay for reacting to focus/blur changes. */
const FOCUS_DELAY = 0;
// Note: this class is generic, rather than referencing EditRef directly, in order to avoid
// circular imports. If we were to reference it here, importing the registry into the
// class that is registering itself will introduce a circular import.
/**
 * Service for sharing delegated events and state for triggering table edits.
 */
export class EditEventDispatcher {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /** A subject that indicates which table cell is currently editing (unless it is disabled). */
        this.editing = new Subject();
        /** A subject that indicates which table row is currently hovered. */
        this.hovering = new Subject();
        /** A subject that indicates which table row currently contains focus. */
        this.focused = new Subject();
        /** A subject that indicates all elements in the table matching ROW_SELECTOR. */
        this.allRows = new Subject();
        /** A subject that emits mouse move events from the table indicating the targeted row. */
        this.mouseMove = new Subject();
        // TODO: Use WeakSet once IE11 support is dropped.
        /**
         * Tracks the currently disabled editable cells - edit calls will be ignored
         * for these cells.
         */
        this.disabledCells = new WeakMap();
        this._editRef = null;
        // Optimization: Precompute common pipeable operators used per row/cell.
        this._distinctUntilChanged = distinctUntilChanged();
        this._startWithNull = startWith(null);
        this._distinctShare = pipe(this._distinctUntilChanged, shareReplay(1));
        this._startWithNullDistinct = pipe(this._startWithNull, this._distinctUntilChanged);
        this.editingAndEnabled = this.editing.pipe(filter(cell => cell == null || !this.disabledCells.has(cell)), shareReplay(1));
        /** An observable that emits the row containing focus or an active edit. */
        this.editingOrFocused = combineLatest([
            this.editingAndEnabled.pipe(map(cell => closest(cell, ROW_SELECTOR)), this._startWithNull),
            this.focused.pipe(this._startWithNull),
        ]).pipe(map(([editingRow, focusedRow]) => focusedRow || editingRow), this._distinctUntilChanged, auditTime(FOCUS_DELAY), // Use audit to skip over blur events to the next focused element.
        this._distinctUntilChanged, shareReplay(1));
        /** Tracks rows that contain hover content with a reference count. */
        this._rowsWithHoverContent = new WeakMap();
        /** The table cell that has an active edit lens (or null). */
        this._currentlyEditing = null;
        /** The combined set of row hover content states organized by row. */
        this._hoveredContentStateDistinct = combineLatest([
            this._getFirstRowWithHoverContent(),
            this._getLastRowWithHoverContent(),
            this.editingOrFocused,
            this.hovering.pipe(distinctUntilChanged(), audit(row => this.mouseMove.pipe(filter(mouseMoveRow => row === mouseMoveRow), this._startWithNull, debounceTime(MOUSE_EVENT_DELAY_MS))), this._startWithNullDistinct),
        ]).pipe(skip(1), // Skip the initial emission of [null, null, null, null].
        map(computeHoverContentState), distinctUntilChanged(areMapEntriesEqual), 
        // Optimization: Enter the zone before shareReplay so that we trigger a single
        // ApplicationRef.tick for all row updates.
        this._enterZone(), shareReplay(1));
        this._editingAndEnabledDistinct = this.editingAndEnabled.pipe(distinctUntilChanged(), this._enterZone(), shareReplay(1));
        // Optimization: Share row events observable with subsequent callers.
        // At startup, calls will be sequential by row.
        this._lastSeenRow = null;
        this._lastSeenRowHoverOrFocus = null;
        this._editingAndEnabledDistinct.subscribe(cell => {
            this._currentlyEditing = cell;
        });
    }
    /** The EditRef for the currently active edit lens (if any). */
    get editRef() {
        return this._editRef;
    }
    /**
     * Gets an Observable that emits true when the specified element's cell
     * is editing and false when not.
     */
    editingCell(element) {
        let cell = null;
        return this._editingAndEnabledDistinct.pipe(map(editCell => editCell === (cell || (cell = closest(element, CELL_SELECTOR)))), this._distinctUntilChanged);
    }
    /**
     * Stops editing for the specified cell. If the specified cell is not the current
     * edit cell, does nothing.
     */
    doneEditingCell(element) {
        const cell = closest(element, CELL_SELECTOR);
        if (this._currentlyEditing === cell) {
            this.editing.next(null);
        }
    }
    /** Sets the currently active EditRef. */
    setActiveEditRef(ref) {
        this._editRef = ref;
    }
    /** Unsets the currently active EditRef, if the specified editRef is active. */
    unsetActiveEditRef(ref) {
        if (this._editRef !== ref) {
            return;
        }
        this._editRef = null;
    }
    /** Adds the specified table row to be tracked for first/last row comparisons. */
    registerRowWithHoverContent(row) {
        this._rowsWithHoverContent.set(row, (this._rowsWithHoverContent.get(row) || 0) + 1);
    }
    /**
     * Reference decrements and ultimately removes the specified table row from first/last row
     * comparisons.
     */
    deregisterRowWithHoverContent(row) {
        const refCount = this._rowsWithHoverContent.get(row) || 0;
        if (refCount <= 1) {
            this._rowsWithHoverContent.delete(row);
        }
        else {
            this._rowsWithHoverContent.set(row, refCount - 1);
        }
    }
    /**
     * Gets an Observable that emits true when the specified element's row
     * contains the focused element or is being hovered over and false when not.
     * Hovering is defined as when the mouse has momentarily stopped moving over the cell.
     */
    hoverOrFocusOnRow(row) {
        if (row !== this._lastSeenRow) {
            this._lastSeenRow = row;
            this._lastSeenRowHoverOrFocus = this._hoveredContentStateDistinct.pipe(map(state => state.get(row) || 0 /* OFF */), this._distinctShare);
        }
        return this._lastSeenRowHoverOrFocus;
    }
    /**
     * RxJS operator that enters the Angular zone, used to reduce boilerplate in
     * re-entering the zone for stream pipelines.
     */
    _enterZone() {
        return (source) => new Observable((observer) => source.subscribe({
            next: (value) => this._ngZone.run(() => observer.next(value)),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        }));
    }
    _getFirstRowWithHoverContent() {
        return this._mapAllRowsToSingleRow(rows => {
            for (let i = 0, row; row = rows[i]; i++) {
                if (this._rowsWithHoverContent.has(row)) {
                    return row;
                }
            }
            return null;
        });
    }
    _getLastRowWithHoverContent() {
        return this._mapAllRowsToSingleRow(rows => {
            for (let i = rows.length - 1, row; row = rows[i]; i--) {
                if (this._rowsWithHoverContent.has(row)) {
                    return row;
                }
            }
            return null;
        });
    }
    _mapAllRowsToSingleRow(mapper) {
        return this.allRows.pipe(map(mapper), this._startWithNullDistinct);
    }
}
EditEventDispatcher.decorators = [
    { type: Injectable }
];
EditEventDispatcher.ctorParameters = () => [
    { type: NgZone }
];
function computeHoverContentState([firstRow, lastRow, activeRow, hoverRow]) {
    const hoverContentState = new Map();
    // Add focusable rows.
    for (const focussableRow of [
        firstRow,
        lastRow,
        activeRow && activeRow.previousElementSibling,
        activeRow && activeRow.nextElementSibling,
    ]) {
        if (focussableRow) {
            hoverContentState.set(focussableRow, 1 /* FOCUSABLE */);
        }
    }
    // Add/overwrite with fully visible rows.
    for (const onRow of [activeRow, hoverRow]) {
        if (onRow) {
            hoverContentState.set(onRow, 2 /* ON */);
        }
    }
    return hoverContentState;
}
function areMapEntriesEqual(a, b) {
    if (a.size !== b.size) {
        return false;
    }
    // TODO: use Map.prototype.entries once we're off IE11.
    for (const aKey of Array.from(a.keys())) {
        if (b.get(aKey) !== a.get(aKey)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1ldmVudC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L2VkaXQtZXZlbnQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsYUFBYSxFQUE0QixVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN4RixPQUFPLEVBQ0wsS0FBSyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsSUFBSSxFQUNKLFNBQVMsRUFDVCxXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUMsYUFBYSxFQUFFLFlBQVksRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN4RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBRW5DLGdGQUFnRjtBQUNoRixNQUFNLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztBQUVoQyxvREFBb0Q7QUFDcEQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBY3RCLDJGQUEyRjtBQUMzRixxRkFBcUY7QUFDckYscUVBQXFFO0FBRXJFOztHQUVHO0FBRUgsTUFBTSxPQUFPLG1CQUFtQjtJQXVHOUIsWUFBNkIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUF0RzVDLDhGQUE4RjtRQUNyRixZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQWdCLENBQUM7UUFFL0MscUVBQXFFO1FBQzVELGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBZ0IsQ0FBQztRQUVoRCx5RUFBeUU7UUFDaEUsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFnQixDQUFDO1FBRS9DLGdGQUFn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LHVEQUF1RDtJQUN2RCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUU7UUFDdkMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29tYmluZUxhdGVzdCwgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBPYnNlcnZhYmxlLCBwaXBlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGF1ZGl0LFxuICBhdWRpdFRpbWUsXG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBza2lwLFxuICBzdGFydFdpdGgsXG4gIHNoYXJlUmVwbGF5LFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7Q0VMTF9TRUxFQ1RPUiwgUk9XX1NFTEVDVE9SfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2Nsb3Nlc3R9IGZyb20gJy4vcG9seWZpbGwnO1xuXG4vKiogVGhlIGRlbGF5IGFwcGxpZWQgdG8gbW91c2UgZXZlbnRzIGJlZm9yZSBoaWRpbmcgb3Igc2hvd2luZyBob3ZlciBjb250ZW50LiAqL1xuY29uc3QgTU9VU0VfRVZFTlRfREVMQVlfTVMgPSA0MDtcblxuLyoqIFRoZSBkZWxheSBmb3IgcmVhY3RpbmcgdG8gZm9jdXMvYmx1ciBjaGFuZ2VzLiAqL1xuY29uc3QgRk9DVVNfREVMQVkgPSAwO1xuXG4vKipcbiAqIFRoZSBwb3NzaWJsZSBzdGF0ZXMgZm9yIGhvdmVyIGNvbnRlbnQ6XG4gKiBPRkYgLSBOb3QgcmVuZGVyZWQuXG4gKiBGT0NVU0FCTEUgLSBSZW5kZXJlZCBpbiB0aGUgZG9tIGFuZCBzdHlsZWQgZm9yIGl0cyBjb250ZW50cyB0byBiZSBmb2N1c2FibGUgYnV0IGludmlzaWJsZS5cbiAqIE9OIC0gUmVuZGVyZWQgYW5kIGZ1bGx5IHZpc2libGUuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEhvdmVyQ29udGVudFN0YXRlIHtcbiAgT0ZGID0gMCxcbiAgRk9DVVNBQkxFLFxuICBPTixcbn1cblxuLy8gTm90ZTogdGhpcyBjbGFzcyBpcyBnZW5lcmljLCByYXRoZXIgdGhhbiByZWZlcmVuY2luZyBFZGl0UmVmIGRpcmVjdGx5LCBpbiBvcmRlciB0byBhdm9pZFxuLy8gY2lyY3VsYXIgaW1wb3J0cy4gSWYgd2Ugd2VyZSB0byByZWZlcmVuY2UgaXQgaGVyZSwgaW1wb3J0aW5nIHRoZSByZWdpc3RyeSBpbnRvIHRoZVxuLy8gY2xhc3MgdGhhdCBpcyByZWdpc3RlcmluZyBpdHNlbGYgd2lsbCBpbnRyb2R1Y2UgYSBjaXJjdWxhciBpbXBvcnQuXG5cbi8qKlxuICogU2VydmljZSBmb3Igc2hhcmluZyBkZWxlZ2F0ZWQgZXZlbnRzIGFuZCBzdGF0ZSBmb3IgdHJpZ2dlcmluZyB0YWJsZSBlZGl0cy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVkaXRFdmVudERpc3BhdGNoZXI8Uj4ge1xuICAvKiogQSBzdWJqZWN0IHRoYXQgaW5kaWNhdGVzIHdoaWNoIHRhYmxlIGNlbGwgaXMgY3VycmVudGx5IGVkaXRpbmcgKHVubGVzcyBpdCBpcyBkaXNhYmxlZCkuICovXG4gIHJlYWRvbmx5IGVkaXRpbmcgPSBuZXcgU3ViamVjdDxFbGVtZW50fG51bGw+KCk7XG5cbiAgLyoqIEEgc3ViamVjdCB0aGF0IGluZGljYXRlcyB3aGljaCB0YWJsZSByb3cgaXMgY3VycmVudGx5IGhvdmVyZWQuICovXG4gIHJlYWRvbmx5IGhvdmVyaW5nID0gbmV3IFN1YmplY3Q8RWxlbWVudHxudWxsPigpO1xuXG4gIC8qKiBBIHN1YmplY3QgdGhhdCBpbmRpY2F0ZXMgd2hpY2ggdGFibGUgcm93IGN1cnJlbnRseSBjb250YWlucyBmb2N1cy4gKi9cbiAgcmVhZG9ubHkgZm9jdXNlZCA9IG5ldyBTdWJqZWN0PEVsZW1lbnR8bnVsbD4oKTtcblxuICAvKiogQSBzdWJqZWN0IHRoYXQgaW5kaWNhdGVzIGFsbCBlbGVtZW50cyBpbiB0aGUgdGFibGUgbWF0Y2hpbmcgUk9XX1NFTEVDVE9SLiAqL1xuICByZWFkb25seSBhbGxSb3dzID0gbmV3IFN1YmplY3Q8Tm9kZUxpc3Q+KCk7XG5cbiAgLyoqIEEgc3ViamVjdCB0aGF0IGVtaXRzIG1vdXNlIG1vdmUgZXZlbnRzIGZyb20gdGhlIHRhYmxlIGluZGljYXRpbmcgdGhlIHRhcmdldGVkIHJvdy4gKi9cbiAgcmVhZG9ubHkgbW91c2VNb3ZlID0gbmV3IFN1YmplY3Q8RWxlbWVudHxudWxsPigpO1xuXG4gIC8vIFRPRE86IFVzZSBXZWFrU2V0IG9uY2UgSUUxMSBzdXBwb3J0IGlzIGRyb3BwZWQuXG4gIC8qKlxuICAgKiBUcmFja3MgdGhlIGN1cnJlbnRseSBkaXNhYmxlZCBlZGl0YWJsZSBjZWxscyAtIGVkaXQgY2FsbHMgd2lsbCBiZSBpZ25vcmVkXG4gICAqIGZvciB0aGVzZSBjZWxscy5cbiAgICovXG4gIHJlYWRvbmx5IGRpc2FibGVkQ2VsbHMgPSBuZXcgV2Vha01hcDxFbGVtZW50LCBib29sZWFuPigpO1xuXG4gIC8qKiBUaGUgRWRpdFJlZiBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgZWRpdCBsZW5zIChpZiBhbnkpLiAqL1xuICBnZXQgZWRpdFJlZigpOiBSfG51bGwge1xuICAgIHJldHVybiB0aGlzLl9lZGl0UmVmO1xuICB9XG4gIHByaXZhdGUgX2VkaXRSZWY6IFJ8bnVsbCA9IG51bGw7XG5cbiAgLy8gT3B0aW1pemF0aW9uOiBQcmVjb21wdXRlIGNvbW1vbiBwaXBlYWJsZSBvcGVyYXRvcnMgdXNlZCBwZXIgcm93L2NlbGwuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rpc3RpbmN0VW50aWxDaGFuZ2VkID1cbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkPEVsZW1lbnR8SG92ZXJDb250ZW50U3RhdGV8Ym9vbGVhbnxudWxsPigpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdGFydFdpdGhOdWxsID0gc3RhcnRXaXRoPEVsZW1lbnR8bnVsbD4obnVsbCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rpc3RpbmN0U2hhcmUgPSBwaXBlKFxuICAgIHRoaXMuX2Rpc3RpbmN0VW50aWxDaGFuZ2VkIGFzIE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxIb3ZlckNvbnRlbnRTdGF0ZT4sXG4gICAgc2hhcmVSZXBsYXkoMSksXG4gICk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3N0YXJ0V2l0aE51bGxEaXN0aW5jdCA9IHBpcGUoXG4gICAgdGhpcy5fc3RhcnRXaXRoTnVsbCxcbiAgICB0aGlzLl9kaXN0aW5jdFVudGlsQ2hhbmdlZCBhcyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248RWxlbWVudHxudWxsPixcbiAgKTtcblxuICByZWFkb25seSBlZGl0aW5nQW5kRW5hYmxlZCA9IHRoaXMuZWRpdGluZy5waXBlKFxuICAgICAgZmlsdGVyKGNlbGwgPT4gY2VsbCA9PSBudWxsIHx8ICF0aGlzLmRpc2FibGVkQ2VsbHMuaGFzKGNlbGwpKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpLFxuICApO1xuXG4gIC8qKiBBbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgdGhlIHJvdyBjb250YWluaW5nIGZvY3VzIG9yIGFuIGFjdGl2ZSBlZGl0LiAqL1xuICByZWFkb25seSBlZGl0aW5nT3JGb2N1c2VkID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmVkaXRpbmdBbmRFbmFibGVkLnBpcGUoXG4gICAgICAgICAgbWFwKGNlbGwgPT4gY2xvc2VzdChjZWxsLCBST1dfU0VMRUNUT1IpKSxcbiAgICAgICAgICB0aGlzLl9zdGFydFdpdGhOdWxsLFxuICAgICAgKSxcbiAgICAgIHRoaXMuZm9jdXNlZC5waXBlKHRoaXMuX3N0YXJ0V2l0aE51bGwpLFxuICBdKS5waXBlKFxuICAgICAgbWFwKChbZWRpdGluZ1JvdywgZm9jdXNlZFJvd10pID0+IGZvY3VzZWRSb3cgfHwgZWRpdGluZ1JvdyksXG4gICAgICB0aGlzLl9kaXN0aW5jdFVudGlsQ2hhbmdlZCBhcyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248RWxlbWVudHxudWxsPixcbiAgICAgIGF1ZGl0VGltZShGT0NVU19ERUxBWSksIC8vIFVzZSBhdWRpdCB0byBza2lwIG92ZXIgYmx1ciBldmVudHMgdG8gdGhlIG5leHQgZm9jdXNlZCBlbGVtZW50LlxuICAgICAgdGhpcy5fZGlzdGluY3RVbnRpbENoYW5nZWQgYXMgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPEVsZW1lbnR8bnVsbD4sXG4gICAgICBzaGFyZVJlcGxheSgxKSxcbiAgKTtcblxuICAvKiogVHJhY2tzIHJvd3MgdGhhdCBjb250YWluIGhvdmVyIGNvbnRlbnQgd2l0aCBhIHJlZmVyZW5jZSBjb3VudC4gKi9cbiAgcHJpdmF0ZSBfcm93c1dpdGhIb3ZlckNvbnRlbnQgPSBuZXcgV2Vha01hcDxFbGVtZW50LCBudW1iZXI+KCk7XG5cbiAgLyoqIFRoZSB0YWJsZSBjZWxsIHRoYXQgaGFzIGFuIGFjdGl2ZSBlZGl0IGxlbnMgKG9yIG51bGwpLiAqL1xuICBwcml2YXRlIF9jdXJyZW50bHlFZGl0aW5nOiBFbGVtZW50fG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgY29tYmluZWQgc2V0IG9mIHJvdyBob3ZlciBjb250ZW50IHN0YXRlcyBvcmdhbml6ZWQgYnkgcm93LiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9ob3ZlcmVkQ29udGVudFN0YXRlRGlzdGluY3QgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuX2dldEZpcnN0Um93V2l0aEhvdmVyQ29udGVudCgpLFxuICAgICAgdGhpcy5fZ2V0TGFzdFJvd1dpdGhIb3ZlckNvbnRlbnQoKSxcbiAgICAgIHRoaXMuZWRpdGluZ09yRm9jdXNlZCxcbiAgICAgIHRoaXMuaG92ZXJpbmcucGlwZShcbiAgICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICAgIGF1ZGl0KHJvdyA9PiB0aGlzLm1vdXNlTW92ZS5waXBlKFxuICAgICAgICAgICAgICBmaWx0ZXIobW91c2VNb3ZlUm93ID0+IHJvdyA9PT0gbW91c2VNb3ZlUm93KSxcbiAgICAgICAgICAgICAgdGhpcy5fc3RhcnRXaXRoTnVsbCxcbiAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKE1PVVNFX0VWRU5UX0RFTEFZX01TKSksXG4gICAgICAgICAgKSxcbiAgICAgICAgICB0aGlzLl9zdGFydFdpdGhOdWxsRGlzdGluY3QsXG4gICAgICApLFxuICBdKS5waXBlKFxuICAgICAgc2tpcCgxKSwgLy8gU2tpcCB0aGUgaW5pdGlhbCBlbWlzc2lvbiBvZiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0uXG4gICAgICBtYXAoY29tcHV0ZUhvdmVyQ29udGVudFN0YXRlKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKGFyZU1hcEVudHJpZXNFcXVhbCksXG4gICAgICAvLyBPcHRpbWl6YXRpb246IEVudGVyIHRoZSB6b25lIGJlZm9yZSBzaGFyZVJlcGxheSBzbyB0aGF0IHdlIHRyaWdnZXIgYSBzaW5nbGVcbiAgICAgIC8vIEFwcGxpY2F0aW9uUmVmLnRpY2sgZm9yIGFsbCByb3cgdXBkYXRlcy5cbiAgICAgIHRoaXMuX2VudGVyWm9uZSgpLFxuICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfZWRpdGluZ0FuZEVuYWJsZWREaXN0aW5jdCA9IHRoaXMuZWRpdGluZ0FuZEVuYWJsZWQucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICB0aGlzLl9lbnRlclpvbmUoKSxcbiAgICAgIHNoYXJlUmVwbGF5KDEpLFxuICApO1xuXG4gIC8vIE9wdGltaXphdGlvbjogU2hhcmUgcm93IGV2ZW50cyBvYnNlcnZhYmxlIHdpdGggc3Vic2VxdWVudCBjYWxsZXJzLlxuICAvLyBBdCBzdGFydHVwLCBjYWxscyB3aWxsIGJlIHNlcXVlbnRpYWwgYnkgcm93LlxuICBwcml2YXRlIF9sYXN0U2VlblJvdzogRWxlbWVudHxudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGFzdFNlZW5Sb3dIb3Zlck9yRm9jdXM6IE9ic2VydmFibGU8SG92ZXJDb250ZW50U3RhdGU+fG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX25nWm9uZTogTmdab25lKSB7XG4gICAgdGhpcy5fZWRpdGluZ0FuZEVuYWJsZWREaXN0aW5jdC5zdWJzY3JpYmUoY2VsbCA9PiB7XG4gICAgICB0aGlzLl9jdXJyZW50bHlFZGl0aW5nID0gY2VsbDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0cnVlIHdoZW4gdGhlIHNwZWNpZmllZCBlbGVtZW50J3MgY2VsbFxuICAgKiBpcyBlZGl0aW5nIGFuZCBmYWxzZSB3aGVuIG5vdC5cbiAgICovXG4gIGVkaXRpbmdDZWxsKGVsZW1lbnQ6IEVsZW1lbnR8RXZlbnRUYXJnZXQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBsZXQgY2VsbDogRWxlbWVudHxudWxsID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzLl9lZGl0aW5nQW5kRW5hYmxlZERpc3RpbmN0LnBpcGUoXG4gICAgICAgIG1hcChlZGl0Q2VsbCA9PiBlZGl0Q2VsbCA9PT0gKGNlbGwgfHwgKGNlbGwgPSBjbG9zZXN0KGVsZW1lbnQsIENFTExfU0VMRUNUT1IpKSkpLFxuICAgICAgICB0aGlzLl9kaXN0aW5jdFVudGlsQ2hhbmdlZCBhcyBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248Ym9vbGVhbj4sXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyBlZGl0aW5nIGZvciB0aGUgc3BlY2lmaWVkIGNlbGwuIElmIHRoZSBzcGVjaWZpZWQgY2VsbCBpcyBub3QgdGhlIGN1cnJlbnRcbiAgICogZWRpdCBjZWxsLCBkb2VzIG5vdGhpbmcuXG4gICAqL1xuICBkb25lRWRpdGluZ0NlbGwoZWxlbWVudDogRWxlbWVudHxFdmVudFRhcmdldCk6IHZvaWQge1xuICAgIGNvbnN0IGNlbGwgPSBjbG9zZXN0KGVsZW1lbnQsIENFTExfU0VMRUNUT1IpO1xuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRseUVkaXRpbmcgPT09IGNlbGwpIHtcbiAgICAgIHRoaXMuZWRpdGluZy5uZXh0KG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZXRzIHRoZSBjdXJyZW50bHkgYWN0aXZlIEVkaXRSZWYuICovXG4gIHNldEFjdGl2ZUVkaXRSZWYocmVmOiBSKSB7XG4gICAgdGhpcy5fZWRpdFJlZiA9IHJlZjtcbiAgfVxuXG4gIC8qKiBVbnNldHMgdGhlIGN1cnJlbnRseSBhY3RpdmUgRWRpdFJlZiwgaWYgdGhlIHNwZWNpZmllZCBlZGl0UmVmIGlzIGFjdGl2ZS4gKi9cbiAgdW5zZXRBY3RpdmVFZGl0UmVmKHJlZjogUikge1xuICAgIGlmICh0aGlzLl9lZGl0UmVmICE9PSByZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9lZGl0UmVmID0gbnVsbDtcbiAgfVxuXG4gIC8qKiBBZGRzIHRoZSBzcGVjaWZpZWQgdGFibGUgcm93IHRvIGJlIHRyYWNrZWQgZm9yIGZpcnN0L2xhc3Qgcm93IGNvbXBhcmlzb25zLiAqL1xuICByZWdpc3RlclJvd1dpdGhIb3ZlckNvbnRlbnQocm93OiBFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5fcm93c1dpdGhIb3ZlckNvbnRlbnQuc2V0KHJvdywgKHRoaXMuX3Jvd3NXaXRoSG92ZXJDb250ZW50LmdldChyb3cpIHx8IDApICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmZXJlbmNlIGRlY3JlbWVudHMgYW5kIHVsdGltYXRlbHkgcmVtb3ZlcyB0aGUgc3BlY2lmaWVkIHRhYmxlIHJvdyBmcm9tIGZpcnN0L2xhc3Qgcm93XG4gICAqIGNvbXBhcmlzb25zLlxuICAgKi9cbiAgZGVyZWdpc3RlclJvd1dpdGhIb3ZlckNvbnRlbnQocm93OiBFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgcmVmQ291bnQgPSB0aGlzLl9yb3dzV2l0aEhvdmVyQ29udGVudC5nZXQocm93KSB8fCAwO1xuXG4gICAgaWYgKHJlZkNvdW50IDw9IDEpIHtcbiAgICAgIHRoaXMuX3Jvd3NXaXRoSG92ZXJDb250ZW50LmRlbGV0ZShyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yb3dzV2l0aEhvdmVyQ29udGVudC5zZXQocm93LCByZWZDb3VudCAtIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyB0cnVlIHdoZW4gdGhlIHNwZWNpZmllZCBlbGVtZW50J3Mgcm93XG4gICAqIGNvbnRhaW5zIHRoZSBmb2N1c2VkIGVsZW1lbnQgb3IgaXMgYmVpbmcgaG92ZXJlZCBvdmVyIGFuZCBmYWxzZSB3aGVuIG5vdC5cbiAgICogSG92ZXJpbmcgaXMgZGVmaW5lZCBhcyB3aGVuIHRoZSBtb3VzZSBoYXMgbW9tZW50YXJpbHkgc3RvcHBlZCBtb3Zpbmcgb3ZlciB0aGUgY2VsbC5cbiAgICovXG4gIGhvdmVyT3JGb2N1c09uUm93KHJvdzogRWxlbWVudCk6IE9ic2VydmFibGU8SG92ZXJDb250ZW50U3RhdGU+IHtcbiAgICBpZiAocm93ICE9PSB0aGlzLl9sYXN0U2VlblJvdykge1xuICAgICAgdGhpcy5fbGFzdFNlZW5Sb3cgPSByb3c7XG4gICAgICB0aGlzLl9sYXN0U2VlblJvd0hvdmVyT3JGb2N1cyA9IHRoaXMuX2hvdmVyZWRDb250ZW50U3RhdGVEaXN0aW5jdC5waXBlKFxuICAgICAgICBtYXAoc3RhdGUgPT4gc3RhdGUuZ2V0KHJvdykgfHwgSG92ZXJDb250ZW50U3RhdGUuT0ZGKSxcbiAgICAgICAgdGhpcy5fZGlzdGluY3RTaGFyZSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2xhc3RTZWVuUm93SG92ZXJPckZvY3VzITtcbiAgfVxuXG4gIC8qKlxuICAgKiBSeEpTIG9wZXJhdG9yIHRoYXQgZW50ZXJzIHRoZSBBbmd1bGFyIHpvbmUsIHVzZWQgdG8gcmVkdWNlIGJvaWxlcnBsYXRlIGluXG4gICAqIHJlLWVudGVyaW5nIHRoZSB6b25lIGZvciBzdHJlYW0gcGlwZWxpbmVzLlxuICAgKi9cbiAgcHJpdmF0ZSBfZW50ZXJab25lPFQ+KCk6IE1vbm9UeXBlT3BlcmF0b3JGdW5jdGlvbjxUPiB7XG4gICAgcmV0dXJuIChzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+XG4gICAgICAgIG5ldyBPYnNlcnZhYmxlPFQ+KChvYnNlcnZlcikgPT4gc291cmNlLnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IG9ic2VydmVyLm5leHQodmFsdWUpKSxcbiAgICAgICAgICAgICBlcnJvcjogKGVycikgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyKSxcbiAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4gb2JzZXJ2ZXIuY29tcGxldGUoKVxuICAgICAgICAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRGaXJzdFJvd1dpdGhIb3ZlckNvbnRlbnQoKTogT2JzZXJ2YWJsZTxFbGVtZW50fG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwQWxsUm93c1RvU2luZ2xlUm93KHJvd3MgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIHJvdzsgcm93ID0gcm93c1tpXTsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLl9yb3dzV2l0aEhvdmVyQ29udGVudC5oYXMocm93IGFzIEVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHJvdyBhcyBFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldExhc3RSb3dXaXRoSG92ZXJDb250ZW50KCk6IE9ic2VydmFibGU8RWxlbWVudHxudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuX21hcEFsbFJvd3NUb1NpbmdsZVJvdyhyb3dzID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSByb3dzLmxlbmd0aCAtIDEsIHJvdzsgcm93ID0gcm93c1tpXTsgaS0tKSB7XG4gICAgICAgIGlmICh0aGlzLl9yb3dzV2l0aEhvdmVyQ29udGVudC5oYXMocm93IGFzIEVsZW1lbnQpKSB7XG4gICAgICAgICAgcmV0dXJuIHJvdyBhcyBFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX21hcEFsbFJvd3NUb1NpbmdsZVJvdyhtYXBwZXI6IChyb3dzOiBOb2RlTGlzdCkgPT4gRWxlbWVudHxudWxsKTpcbiAgICAgIE9ic2VydmFibGU8RWxlbWVudHxudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuYWxsUm93cy5waXBlKFxuICAgICAgICBtYXAobWFwcGVyKSxcbiAgICAgICAgdGhpcy5fc3RhcnRXaXRoTnVsbERpc3RpbmN0LFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcHV0ZUhvdmVyQ29udGVudFN0YXRlKFtmaXJzdFJvdywgbGFzdFJvdywgYWN0aXZlUm93LCBob3ZlclJvd106IChFbGVtZW50fG51bGwpW10pOlxuICAgICBNYXA8RWxlbWVudCwgSG92ZXJDb250ZW50U3RhdGU+IHtcbiAgY29uc3QgaG92ZXJDb250ZW50U3RhdGUgPSBuZXcgTWFwPEVsZW1lbnQsIEhvdmVyQ29udGVudFN0YXRlPigpO1xuXG4gIC8vIEFkZCBmb2N1c2FibGUgcm93cy5cbiAgZm9yIChjb25zdCBmb2N1c3NhYmxlUm93IG9mIFtcbiAgICBmaXJzdFJvdyxcbiAgICBsYXN0Um93LFxuICAgIGFjdGl2ZVJvdyAmJiBhY3RpdmVSb3cucHJldmlvdXNFbGVtZW50U2libGluZyxcbiAgICBhY3RpdmVSb3cgJiYgYWN0aXZlUm93Lm5leHRFbGVtZW50U2libGluZyxcbiAgXSkge1xuICAgIGlmIChmb2N1c3NhYmxlUm93KSB7XG4gICAgICBob3ZlckNvbnRlbnRTdGF0ZS5zZXQoZm9jdXNzYWJsZVJvdyBhcyBFbGVtZW50LCBIb3ZlckNvbnRlbnRTdGF0ZS5GT0NVU0FCTEUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZC9vdmVyd3JpdGUgd2l0aCBmdWxseSB2aXNpYmxlIHJvd3MuXG4gIGZvciAoY29uc3Qgb25Sb3cgb2YgW2FjdGl2ZVJvdywgaG92ZXJSb3ddKSB7XG4gICAgaWYgKG9uUm93KSB7XG4gICAgICBob3ZlckNvbnRlbnRTdGF0ZS5zZXQob25Sb3csIEhvdmVyQ29udGVudFN0YXRlLk9OKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaG92ZXJDb250ZW50U3RhdGU7XG59XG5cbmZ1bmN0aW9uIGFyZU1hcEVudHJpZXNFcXVhbDxLLCBWPihhOiBNYXA8SywgVj4sIGI6IE1hcDxLLCBWPik6IGJvb2xlYW4ge1xuICBpZiAoYS5zaXplICE9PSBiLnNpemUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBUT0RPOiB1c2UgTWFwLnByb3RvdHlwZS5lbnRyaWVzIG9uY2Ugd2UncmUgb2ZmIElFMTEuXG4gIGZvciAoY29uc3QgYUtleSBvZiBBcnJheS5mcm9tKGEua2V5cygpKSkge1xuICAgIGlmIChiLmdldChhS2V5KSAhPT0gYS5nZXQoYUtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==