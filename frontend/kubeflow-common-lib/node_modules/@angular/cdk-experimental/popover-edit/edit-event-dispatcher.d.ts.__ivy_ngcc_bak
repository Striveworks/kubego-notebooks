/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';
/**
 * The possible states for hover content:
 * OFF - Not rendered.
 * FOCUSABLE - Rendered in the dom and styled for its contents to be focusable but invisible.
 * ON - Rendered and fully visible.
 */
export declare const enum HoverContentState {
    OFF = 0,
    FOCUSABLE = 1,
    ON = 2
}
/**
 * Service for sharing delegated events and state for triggering table edits.
 */
export declare class EditEventDispatcher<R> {
    private readonly _ngZone;
    /** A subject that indicates which table cell is currently editing (unless it is disabled). */
    readonly editing: Subject<Element | null>;
    /** A subject that indicates which table row is currently hovered. */
    readonly hovering: Subject<Element | null>;
    /** A subject that indicates which table row currently contains focus. */
    readonly focused: Subject<Element | null>;
    /** A subject that indicates all elements in the table matching ROW_SELECTOR. */
    readonly allRows: Subject<NodeList>;
    /** A subject that emits mouse move events from the table indicating the targeted row. */
    readonly mouseMove: Subject<Element | null>;
    /**
     * Tracks the currently disabled editable cells - edit calls will be ignored
     * for these cells.
     */
    readonly disabledCells: WeakMap<Element, boolean>;
    /** The EditRef for the currently active edit lens (if any). */
    get editRef(): R | null;
    private _editRef;
    private readonly _distinctUntilChanged;
    private readonly _startWithNull;
    private readonly _distinctShare;
    private readonly _startWithNullDistinct;
    readonly editingAndEnabled: Observable<Element | null>;
    /** An observable that emits the row containing focus or an active edit. */
    readonly editingOrFocused: Observable<Element | null>;
    /** Tracks rows that contain hover content with a reference count. */
    private _rowsWithHoverContent;
    /** The table cell that has an active edit lens (or null). */
    private _currentlyEditing;
    /** The combined set of row hover content states organized by row. */
    private readonly _hoveredContentStateDistinct;
    private readonly _editingAndEnabledDistinct;
    private _lastSeenRow;
    private _lastSeenRowHoverOrFocus;
    constructor(_ngZone: NgZone);
    /**
     * Gets an Observable that emits true when the specified element's cell
     * is editing and false when not.
     */
    editingCell(element: Element | EventTarget): Observable<boolean>;
    /**
     * Stops editing for the specified cell. If the specified cell is not the current
     * edit cell, does nothing.
     */
    doneEditingCell(element: Element | EventTarget): void;
    /** Sets the currently active EditRef. */
    setActiveEditRef(ref: R): void;
    /** Unsets the currently active EditRef, if the specified editRef is active. */
    unsetActiveEditRef(ref: R): void;
    /** Adds the specified table row to be tracked for first/last row comparisons. */
    registerRowWithHoverContent(row: Element): void;
    /**
     * Reference decrements and ultimately removes the specified table row from first/last row
     * comparisons.
     */
    deregisterRowWithHoverContent(row: Element): void;
    /**
     * Gets an Observable that emits true when the specified element's row
     * contains the focused element or is being hovered over and false when not.
     * Hovering is defined as when the mouse has momentarily stopped moving over the cell.
     */
    hoverOrFocusOnRow(row: Element): Observable<HoverContentState>;
    /**
     * RxJS operator that enters the Angular zone, used to reduce boilerplate in
     * re-entering the zone for stream pipelines.
     */
    private _enterZone;
    private _getFirstRowWithHoverContent;
    private _getLastRowWithHoverContent;
    private _mapAllRowsToSingleRow;
}
