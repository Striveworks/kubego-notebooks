/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';
/** Coordinates events between the column resize directives. */
export declare class HeaderRowEventDispatcher {
    private readonly _ngZone;
    /**
     * Emits the currently hovered header cell or null when no header cells are hovered.
     * Exposed publicly for events to feed in, but subscribers should use headerCellHoveredDistinct,
     * defined below.
     */
    readonly headerCellHovered: Subject<Element | null>;
    /**
     * Emits the header cell for which a user-triggered resize is active or null
     * when no resize is in progress.
     */
    readonly overlayHandleActiveForCell: Subject<Element | null>;
    constructor(_ngZone: NgZone);
    /** Distinct and shared version of headerCellHovered. */
    readonly headerCellHoveredDistinct: Observable<Element | null>;
    /**
     * Emits the header that is currently hovered or hosting an active resize event (with active
     * taking precedence).
     */
    readonly headerRowHoveredOrActiveDistinct: Observable<Element | null>;
    private readonly _headerRowHoveredOrActiveDistinctReenterZone;
    private _lastSeenRow;
    private _lastSeenRowHover;
    /**
     * Emits whether the specified row should show its overlay controls.
     * Emission occurs within the NgZone.
     */
    resizeOverlayVisibleForHeaderRow(row: Element): Observable<boolean>;
    private _enterZone;
}
