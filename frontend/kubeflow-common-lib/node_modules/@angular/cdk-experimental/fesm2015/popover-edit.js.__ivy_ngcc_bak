import * as i0 from '@angular/core';
import { Injectable, NgZone, Self, EventEmitter, Directive, ElementRef, HostListener, Input, Inject, ViewContainerRef, TemplateRef, NgModule } from '@angular/core';
import { Subject, pipe, combineLatest, Observable, fromEvent, fromEventPattern, merge } from 'rxjs';
import { distinctUntilChanged, startWith, shareReplay, filter, map, auditTime, audit, debounceTime, skip, take, takeUntil, mapTo, throttleTime, share, withLatestFrom } from 'rxjs/operators';
import { ControlContainer } from '@angular/forms';
import * as i1 from '@angular/cdk/bidi';
import { Directionality } from '@angular/cdk/bidi';
import { RIGHT_ARROW, LEFT_ARROW, DOWN_ARROW, UP_ARROW, hasModifierKey } from '@angular/cdk/keycodes';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i1$1 from '@angular/cdk/a11y';
import { FocusTrapFactory, FocusTrap, InteractivityChecker } from '@angular/cdk/a11y';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import * as i2 from '@angular/common';
import { DOCUMENT } from '@angular/common';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Selector for finding table cells. */
const CELL_SELECTOR = '.cdk-cell, .mat-cell, td';
/** Selector for finding editable table cells. */
const EDITABLE_CELL_SELECTOR = '.cdk-popover-edit-cell, .mat-popover-edit-cell';
/** Selector for finding table rows. */
const ROW_SELECTOR = '.cdk-row, .mat-row, tr';
/** Selector for finding the table element. */
const TABLE_SELECTOR = 'table, cdk-table, mat-table';
/** CSS class added to the edit lens pane. */
const EDIT_PANE_CLASS = 'cdk-edit-pane';
/** Selector for finding the edit lens pane. */
const EDIT_PANE_SELECTOR = `.${EDIT_PANE_CLASS}, .mat-edit-pane`;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** IE 11 compatible matches implementation. */
function matches(element, selector) {
    return element.matches ?
        element.matches(selector) :
        element['msMatchesSelector'](selector);
}
/** IE 11 compatible closest implementation that is able to start from non-Element Nodes. */
function closest(element, selector) {
    if (!(element instanceof Node)) {
        return null;
    }
    let curr = element;
    while (curr != null && !(curr instanceof Element)) {
        curr = curr.parentNode;
    }
    return curr && (hasNativeClosest ?
        curr.closest(selector) : polyfillClosest(curr, selector));
}
/** Polyfill for browsers without Element.closest. */
function polyfillClosest(element, selector) {
    let curr = element;
    while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
        curr = curr.parentNode;
    }
    return (curr || null);
}
const hasNativeClosest = !!Element.prototype.closest;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
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
class EditEventDispatcher {
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

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used for communication between the form within the edit lens and the
 * table that launched it. Provided by CdkEditControl within the lens.
 */
class EditRef {
    constructor(_form, _editEventDispatcher, _ngZone) {
        this._form = _form;
        this._editEventDispatcher = _editEventDispatcher;
        this._ngZone = _ngZone;
        /** Emits the final value of this edit instance before closing. */
        this._finalValueSubject = new Subject();
        this.finalValue = this._finalValueSubject;
        /** Emits when the user tabs out of this edit lens before closing. */
        this._blurredSubject = new Subject();
        this.blurred = this._blurredSubject;
        this._editEventDispatcher.setActiveEditRef(this);
    }
    /**
     * Called by the host directive's OnInit hook. Reads the initial state of the
     * form and overrides it with persisted state from previous openings, if
     * applicable.
     */
    init(previousFormValue) {
        // Wait for the zone to stabilize before caching the initial value.
        // This ensures that all form controls have been initialized.
        this._ngZone.onStable.pipe(take(1)).subscribe(() => {
            this.updateRevertValue();
            if (previousFormValue) {
                this.reset(previousFormValue);
            }
        });
    }
    ngOnDestroy() {
        this._editEventDispatcher.unsetActiveEditRef(this);
        this._finalValueSubject.next(this._form.value);
        this._finalValueSubject.complete();
    }
    /** Whether the attached form is in a valid state. */
    isValid() {
        return this._form.valid;
    }
    /** Set the form's current value as what it will be set to on revert/reset. */
    updateRevertValue() {
        this._revertFormValue = this._form.value;
    }
    /** Tells the table to close the edit popup. */
    close() {
        this._editEventDispatcher.editing.next(null);
    }
    /** Notifies the active edit that the user has moved focus out of the lens. */
    blur() {
        this._blurredSubject.next();
    }
    /**
     * Resets the form value to the specified value or the previously set
     * revert value.
     */
    reset(value) {
        this._form.reset(value || this._revertFormValue);
    }
}
EditRef.decorators = [
    { type: Injectable }
];
EditRef.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Self }] },
    { type: EditEventDispatcher },
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
 * Service responsible for moving cell focus around in response to keyboard events.
 * May be overridden to customize the keyboard behavior of popover edit.
 */
class FocusDispatcher {
    constructor(directionality) {
        this.directionality = directionality;
        this.keyObserver = { next: (event) => this.handleKeyboardEvent(event) };
    }
    /**
     * Moves focus to earlier or later cells (in dom order) by offset cells relative to
     * currentCell.
     */
    moveFocusHorizontally(currentCell, offset) {
        const cells = Array.from(closest(currentCell, TABLE_SELECTOR).querySelectorAll(EDITABLE_CELL_SELECTOR));
        const currentIndex = cells.indexOf(currentCell);
        const newIndex = currentIndex + offset;
        if (cells[newIndex]) {
            cells[newIndex].focus();
        }
    }
    /** Moves focus to up or down by row by offset cells relative to currentCell. */
    moveFocusVertically(currentCell, offset) {
        const currentRow = closest(currentCell, ROW_SELECTOR);
        const rows = Array.from(closest(currentRow, TABLE_SELECTOR).querySelectorAll(ROW_SELECTOR));
        const currentRowIndex = rows.indexOf(currentRow);
        const currentIndexWithinRow = Array.from(currentRow.querySelectorAll(EDITABLE_CELL_SELECTOR)).indexOf(currentCell);
        const newRowIndex = currentRowIndex + offset;
        if (rows[newRowIndex]) {
            const rowToFocus = Array.from(rows[newRowIndex].querySelectorAll(EDITABLE_CELL_SELECTOR));
            if (rowToFocus[currentIndexWithinRow]) {
                rowToFocus[currentIndexWithinRow].focus();
            }
        }
    }
    /** Translates arrow keydown events into focus move operations. */
    handleKeyboardEvent(event) {
        const cell = closest(event.target, EDITABLE_CELL_SELECTOR);
        if (!cell) {
            return;
        }
        switch (event.keyCode) {
            case UP_ARROW:
                this.moveFocusVertically(cell, -1);
                break;
            case DOWN_ARROW:
                this.moveFocusVertically(cell, 1);
                break;
            case LEFT_ARROW:
                this.moveFocusHorizontally(cell, this.directionality.value === 'ltr' ? -1 : 1);
                break;
            case RIGHT_ARROW:
                this.moveFocusHorizontally(cell, this.directionality.value === 'ltr' ? 1 : -1);
                break;
            default:
                // If the keyboard event is not handled, return now so that we don't `preventDefault`.
                return;
        }
        event.preventDefault();
    }
}
FocusDispatcher.ɵprov = i0.ɵɵdefineInjectable({ factory: function FocusDispatcher_Factory() { return new FocusDispatcher(i0.ɵɵinject(i1.Directionality)); }, token: FocusDispatcher, providedIn: "root" });
FocusDispatcher.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
FocusDispatcher.ctorParameters = () => [
    { type: Directionality }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A convenience class for preserving unsaved form state while an edit lens is closed.
 *
 * Example usage:
 * class MyComponent {
 *   readonly nameEditValues = new FormValueContainer&lt;Item, {name: string}&gt;();
 * }
 *
 * &lt;form cdkEditControl [(cdkEditControlPreservedFormValue)]="nameEditValues.for(item).value"&gt;
 */
class FormValueContainer {
    constructor() {
        this._formValues = new WeakMap();
    }
    for(key) {
        const _formValues = this._formValues;
        let entry = _formValues.get(key);
        if (!entry) {
            // Expose entry as an object so that we can [(two-way)] bind to its value member
            entry = {};
            _formValues.set(key, entry);
        }
        return entry;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A directive that attaches to a form within the edit lens.
 * It coordinates the form state with the table-wide edit system and handles
 * closing the edit lens when the form is submitted or the user clicks
 * out.
 */
class CdkEditControl {
    constructor(elementRef, editRef) {
        this.elementRef = elementRef;
        this.editRef = editRef;
        this.destroyed = new Subject();
        /**
         * Specifies what should happen when the user clicks outside of the edit lens.
         * The default behavior is to close the lens without submitting the form.
         */
        this.clickOutBehavior = 'close';
        this.preservedFormValueChange = new EventEmitter();
        /**
         * Determines whether the lens will close on form submit if the form is not in a valid
         * state. By default the lens will remain open.
         */
        this.ignoreSubmitUnlessValid = true;
    }
    ngOnInit() {
        this.editRef.init(this.preservedFormValue);
        this.editRef.finalValue.subscribe(this.preservedFormValueChange);
        this.editRef.blurred.subscribe(() => this._handleBlur());
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    /**
     * Called when the form submits. If ignoreSubmitUnlessValid is true, checks
     * the form for validity before proceeding.
     * Updates the revert state with the latest submitted value then closes the edit.
     */
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    handleFormSubmit() {
        if (this.ignoreSubmitUnlessValid && !this.editRef.isValid()) {
            return;
        }
        this.editRef.updateRevertValue();
        this.editRef.close();
    }
    /** Called on Escape keyup. Closes the edit. */
    close() {
        // todo - allow this behavior to be customized as well, such as calling
        // reset before close
        this.editRef.close();
    }
    /**
     * Called on click anywhere in the document.
     * If the click was outside of the lens, trigger the specified click out behavior.
     */
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    handlePossibleClickOut(evt) {
        if (closest(evt.target, EDIT_PANE_SELECTOR)) {
            return;
        }
        switch (this.clickOutBehavior) {
            case 'submit':
                // Manually cause the form to submit before closing.
                this._triggerFormSubmit();
                this.editRef.close();
                break;
            case 'close':
                this.editRef.close();
                break;
            default:
                break;
        }
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _handleKeydown(event) {
        if (event.key === 'Escape' && !hasModifierKey(event)) {
            this.close();
            event.preventDefault();
        }
    }
    /** Triggers submit on tab out if clickOutBehavior is 'submit'. */
    _handleBlur() {
        if (this.clickOutBehavior === 'submit') {
            // Manually cause the form to submit before closing.
            this._triggerFormSubmit();
        }
    }
    _triggerFormSubmit() {
        this.elementRef.nativeElement.dispatchEvent(new Event('submit'));
    }
}
CdkEditControl.decorators = [
    { type: Directive, args: [{
                selector: 'form[cdkEditControl]',
                inputs: [
                    'clickOutBehavior: cdkEditControlClickOutBehavior',
                    'preservedFormValue: cdkEditControlPreservedFormValue',
                    'ignoreSubmitUnlessValid: cdkEditControlIgnoreSubmitUnlessValid',
                ],
                outputs: ['preservedFormValueChange: cdkEditControlPreservedFormValueChange'],
                providers: [EditRef],
            },] }
];
CdkEditControl.ctorParameters = () => [
    { type: ElementRef },
    { type: EditRef }
];
CdkEditControl.propDecorators = {
    handleFormSubmit: [{ type: HostListener, args: ['ngSubmit',] }],
    handlePossibleClickOut: [{ type: HostListener, args: ['document:click', ['$event'],] }],
    _handleKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
/** Reverts the form to its initial or previously submitted state on click. */
class CdkEditRevert {
    constructor(editRef) {
        this.editRef = editRef;
        /** Type of the button. Defaults to `button` to avoid accident form submits. */
        this.type = 'button';
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    revertEdit() {
        this.editRef.reset();
    }
}
CdkEditRevert.decorators = [
    { type: Directive, args: [{
                selector: 'button[cdkEditRevert]',
                host: {
                    'type': 'button', // Prevents accidental form submits.
                }
            },] }
];
CdkEditRevert.ctorParameters = () => [
    { type: EditRef }
];
CdkEditRevert.propDecorators = {
    type: [{ type: Input }],
    revertEdit: [{ type: HostListener, args: ['click',] }]
};
/** Closes the lens on click. */
class CdkEditClose {
    constructor(elementRef, editRef) {
        this.elementRef = elementRef;
        this.editRef = editRef;
        const nativeElement = elementRef.nativeElement;
        // Prevent accidental form submits.
        if (nativeElement.nodeName === 'BUTTON' && !nativeElement.getAttribute('type')) {
            nativeElement.setAttribute('type', 'button');
        }
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    closeEdit() {
        // Note that we use `click` here, rather than a keyboard event, because some screen readers
        // will emit a fake click event instead of an enter keyboard event on buttons. For the keyboard
        // events we use `keydown`, rather than `keyup`, because we use `keydown` to open the overlay
        // as well. If we were to use `keyup`, the user could end up opening and closing within
        // the same event sequence if focus was moved quickly.
        this.editRef.close();
    }
}
CdkEditClose.decorators = [
    { type: Directive, args: [{ selector: '[cdkEditClose]' },] }
];
CdkEditClose.ctorParameters = () => [
    { type: ElementRef },
    { type: EditRef }
];
CdkEditClose.propDecorators = {
    closeEdit: [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['keydown.enter',] }, { type: HostListener, args: ['keydown.space',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Overridable factory responsible for configuring how cdkPopoverEdit popovers are positioned
 * and sized.
 */
class PopoverEditPositionStrategyFactory {
}
PopoverEditPositionStrategyFactory.decorators = [
    { type: Injectable }
];
/**
 * Default implementation of PopoverEditPositionStrategyFactory.
 * Uses a FlexibleConnectedPositionStrategy anchored to the start + top of the cell.
 * Note: This will change to CoverPositionStrategy once it implemented.
 */
class DefaultPopoverEditPositionStrategyFactory extends PopoverEditPositionStrategyFactory {
    constructor(direction, overlay) {
        super();
        this.direction = direction;
        this.overlay = overlay;
    }
    positionStrategyForCells(cells) {
        return this.overlay.position()
            .flexibleConnectedTo(cells[0])
            .withGrowAfterOpen()
            .withPush()
            .withViewportMargin(16)
            .withPositions([{
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            }]);
    }
    sizeConfigForCells(cells) {
        if (cells.length === 0) {
            return {};
        }
        if (cells.length === 1) {
            return { width: cells[0].getBoundingClientRect().width };
        }
        let firstCell, lastCell;
        if (this.direction.value === 'ltr') {
            firstCell = cells[0];
            lastCell = cells[cells.length - 1];
        }
        else {
            lastCell = cells[0];
            firstCell = cells[cells.length - 1];
        }
        return { width: lastCell.getBoundingClientRect().right - firstCell.getBoundingClientRect().left };
    }
}
DefaultPopoverEditPositionStrategyFactory.decorators = [
    { type: Injectable }
];
DefaultPopoverEditPositionStrategyFactory.ctorParameters = () => [
    { type: Directionality },
    { type: Overlay }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Optimization
 * Collects multiple Injectables into a singleton shared across the table. By reducing the
 * number of services injected into each CdkPopoverEdit, this saves about 0.023ms of cpu time
 * and 56 bytes of memory per instance.
 */
class EditServices {
    constructor(directionality, editEventDispatcher, focusDispatcher, focusTrapFactory, ngZone, overlay, positionFactory, scrollDispatcher, viewportRuler) {
        this.directionality = directionality;
        this.editEventDispatcher = editEventDispatcher;
        this.focusDispatcher = focusDispatcher;
        this.focusTrapFactory = focusTrapFactory;
        this.ngZone = ngZone;
        this.overlay = overlay;
        this.positionFactory = positionFactory;
        this.scrollDispatcher = scrollDispatcher;
        this.viewportRuler = viewportRuler;
    }
}
EditServices.decorators = [
    { type: Injectable }
];
EditServices.ctorParameters = () => [
    { type: Directionality },
    { type: EditEventDispatcher },
    { type: FocusDispatcher },
    { type: FocusTrapFactory },
    { type: NgZone },
    { type: Overlay },
    { type: PopoverEditPositionStrategyFactory },
    { type: ScrollDispatcher },
    { type: ViewportRuler }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Like FocusTrap, but rather than trapping focus within a dom region, notifies subscribers when
 * focus leaves the region.
 */
class FocusEscapeNotifier extends FocusTrap {
    constructor(element, checker, ngZone, document) {
        super(element, checker, ngZone, document, true /* deferAnchors */);
        this._escapeSubject = new Subject();
        // The focus trap adds "anchors" at the beginning and end of a trapped region that redirect
        // focus. We override that redirect behavior here with simply emitting on a stream.
        this.startAnchorListener = () => {
            this._escapeSubject.next(0 /* START */);
            return true;
        };
        this.endAnchorListener = () => {
            this._escapeSubject.next(1 /* END */);
            return true;
        };
        this.attachAnchors();
    }
    escapes() {
        return this._escapeSubject;
    }
}
/** Factory that allows easy instantiation of focus escape notifiers. */
class FocusEscapeNotifierFactory {
    constructor(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus escape notifier region around the given element.
     * @param element The element around which focus will be monitored.
     * @returns The created focus escape notifier instance.
     */
    create(element) {
        return new FocusEscapeNotifier(element, this._checker, this._ngZone, this._document);
    }
}
FocusEscapeNotifierFactory.ɵprov = i0.ɵɵdefineInjectable({ factory: function FocusEscapeNotifierFactory_Factory() { return new FocusEscapeNotifierFactory(i0.ɵɵinject(i1$1.InteractivityChecker), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i2.DOCUMENT)); }, token: FocusEscapeNotifierFactory, providedIn: "root" });
FocusEscapeNotifierFactory.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
FocusEscapeNotifierFactory.ctorParameters = () => [
    { type: InteractivityChecker },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];

/** Used for rate-limiting mousemove events. */
const MOUSE_MOVE_THROTTLE_TIME_MS = 10;
/**
 * A directive that must be attached to enable editability on a table.
 * It is responsible for setting up delegated event handlers and providing the
 * EditEventDispatcher service for use by the other edit directives.
 */
class CdkEditable {
    constructor(elementRef, editEventDispatcher, focusDispatcher, ngZone) {
        this.elementRef = elementRef;
        this.editEventDispatcher = editEventDispatcher;
        this.focusDispatcher = focusDispatcher;
        this.ngZone = ngZone;
        this.destroyed = new Subject();
    }
    ngAfterViewInit() {
        this._listenForTableEvents();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    _listenForTableEvents() {
        const element = this.elementRef.nativeElement;
        const toClosest = (selector) => map((event) => closest(event.target, selector));
        this.ngZone.runOutsideAngular(() => {
            // Track mouse movement over the table to hide/show hover content.
            fromEvent(element, 'mouseover').pipe(toClosest(ROW_SELECTOR), takeUntil(this.destroyed)).subscribe(this.editEventDispatcher.hovering);
            fromEvent(element, 'mouseleave').pipe(mapTo(null), takeUntil(this.destroyed)).subscribe(this.editEventDispatcher.hovering);
            fromEvent(element, 'mousemove').pipe(throttleTime(MOUSE_MOVE_THROTTLE_TIME_MS), toClosest(ROW_SELECTOR), takeUntil(this.destroyed)).subscribe(this.editEventDispatcher.mouseMove);
            // Track focus within the table to hide/show/make focusable hover content.
            fromEventPattern(handler => element.addEventListener('focus', handler, true), handler => element.removeEventListener('focus', handler, true)).pipe(toClosest(ROW_SELECTOR), share(), takeUntil(this.destroyed)).subscribe(this.editEventDispatcher.focused);
            merge(fromEventPattern(handler => element.addEventListener('blur', handler, true), handler => element.removeEventListener('blur', handler, true)), fromEvent(element, 'keydown').pipe(filter(event => event.key === 'Escape'))).pipe(mapTo(null), share(), takeUntil(this.destroyed)).subscribe(this.editEventDispatcher.focused);
            // Keep track of rows within the table. This is used to know which rows with hover content
            // are first or last in the table. They are kept focusable in case focus enters from above
            // or below the table.
            this.ngZone.onStable.pipe(
            // Optimization: ignore dom changes while focus is within the table as we already
            // ensure that rows above and below the focused/active row are tabbable.
            withLatestFrom(this.editEventDispatcher.editingOrFocused), filter(([_, activeRow]) => activeRow == null), map(() => element.querySelectorAll(ROW_SELECTOR)), share(), takeUntil(this.destroyed)).subscribe(this.editEventDispatcher.allRows);
            fromEvent(element, 'keydown').pipe(filter(event => event.key === 'Enter'), toClosest(CELL_SELECTOR), takeUntil(this.destroyed)).subscribe(this.editEventDispatcher.editing);
            // Keydown must be used here or else key autorepeat does not work properly on some platforms.
            fromEvent(element, 'keydown')
                .pipe(takeUntil(this.destroyed))
                .subscribe(this.focusDispatcher.keyObserver);
        });
    }
}
CdkEditable.decorators = [
    { type: Directive, args: [{
                selector: 'table[editable], cdk-table[editable], mat-table[editable]',
                providers: [EditEventDispatcher, EditServices],
            },] }
];
CdkEditable.ctorParameters = () => [
    { type: ElementRef },
    { type: EditEventDispatcher },
    { type: FocusDispatcher },
    { type: NgZone }
];
const POPOVER_EDIT_HOST_BINDINGS = {
    '[attr.tabindex]': 'disabled ? null : 0',
    'class': 'cdk-popover-edit-cell',
    '[attr.aria-haspopup]': '!disabled',
};
const POPOVER_EDIT_INPUTS = [
    'template: cdkPopoverEdit',
    'context: cdkPopoverEditContext',
    'colspan: cdkPopoverEditColspan',
    'disabled: cdkPopoverEditDisabled',
];
/**
 * Attaches an ng-template to a cell and shows it when instructed to by the
 * EditEventDispatcher service.
 * Makes the cell focusable.
 */
class CdkPopoverEdit {
    constructor(services, elementRef, viewContainerRef) {
        this.services = services;
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        /** The edit lens template shown over the cell on edit. */
        this.template = null;
        this._colspan = {};
        this._disabled = false;
        this.destroyed = new Subject();
    }
    /**
     * Specifies that the popup should cover additional table cells before and/or after
     * this one.
     */
    get colspan() {
        return this._colspan;
    }
    set colspan(value) {
        this._colspan = value;
        // Recompute positioning when the colspan changes.
        if (this.overlayRef) {
            this.overlayRef.updatePositionStrategy(this._getPositionStrategy());
            if (this.overlayRef.hasAttached()) {
                this._updateOverlaySize();
            }
        }
    }
    /** Whether popover edit is disabled for this cell. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        if (value) {
            this.services.editEventDispatcher.doneEditingCell(this.elementRef.nativeElement);
            this.services.editEventDispatcher.disabledCells.set(this.elementRef.nativeElement, true);
        }
        else {
            this.services.editEventDispatcher.disabledCells.delete(this.elementRef.nativeElement);
        }
    }
    ngAfterViewInit() {
        this._startListeningToEditEvents();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
        if (this.focusTrap) {
            this.focusTrap.destroy();
            this.focusTrap = undefined;
        }
        if (this.overlayRef) {
            this.overlayRef.dispose();
        }
    }
    initFocusTrap() {
        this.focusTrap = this.services.focusTrapFactory.create(this.overlayRef.overlayElement);
    }
    closeEditOverlay() {
        this.services.editEventDispatcher.doneEditingCell(this.elementRef.nativeElement);
    }
    panelClass() {
        return EDIT_PANE_CLASS;
    }
    _startListeningToEditEvents() {
        this.services.editEventDispatcher.editingCell(this.elementRef.nativeElement)
            .pipe(takeUntil(this.destroyed))
            .subscribe((open) => {
            if (open && this.template) {
                if (!this.overlayRef) {
                    this._createEditOverlay();
                }
                this._showEditOverlay();
            }
            else if (this.overlayRef) {
                this._maybeReturnFocusToCell();
                this.overlayRef.detach();
            }
        });
    }
    _createEditOverlay() {
        this.overlayRef = this.services.overlay.create({
            disposeOnNavigation: true,
            panelClass: this.panelClass(),
            positionStrategy: this._getPositionStrategy(),
            scrollStrategy: this.services.overlay.scrollStrategies.reposition(),
            direction: this.services.directionality,
        });
        this.initFocusTrap();
        this.overlayRef.overlayElement.setAttribute('aria-role', 'dialog');
        this.overlayRef.detachments().subscribe(() => this.closeEditOverlay());
    }
    _showEditOverlay() {
        this.overlayRef.attach(new TemplatePortal(this.template, this.viewContainerRef, { $implicit: this.context }));
        // We have to defer trapping focus, because doing so too early can cause the form inside
        // the overlay to be submitted immediately if it was opened on an Enter keydown event.
        this.services.ngZone.runOutsideAngular(() => {
            setTimeout(() => {
                this.focusTrap.focusInitialElement();
            });
        });
        // Update the size of the popup initially and on subsequent changes to
        // scroll position and viewport size.
        merge(this.services.scrollDispatcher.scrolled(), this.services.viewportRuler.change())
            .pipe(startWith(null), takeUntil(merge(this.overlayRef.detachments(), this.destroyed)))
            .subscribe(() => {
            this._updateOverlaySize();
        });
    }
    _getOverlayCells() {
        const cell = closest(this.elementRef.nativeElement, CELL_SELECTOR);
        if (!this._colspan.before && !this._colspan.after) {
            return [cell];
        }
        const row = closest(this.elementRef.nativeElement, ROW_SELECTOR);
        const rowCells = Array.from(row.querySelectorAll(CELL_SELECTOR));
        const ownIndex = rowCells.indexOf(cell);
        return rowCells.slice(ownIndex - (this._colspan.before || 0), ownIndex + (this._colspan.after || 0) + 1);
    }
    _getPositionStrategy() {
        return this.services.positionFactory.positionStrategyForCells(this._getOverlayCells());
    }
    _updateOverlaySize() {
        this.overlayRef.updateSize(this.services.positionFactory.sizeConfigForCells(this._getOverlayCells()));
    }
    _maybeReturnFocusToCell() {
        if (closest(document.activeElement, EDIT_PANE_SELECTOR) ===
            this.overlayRef.overlayElement) {
            this.elementRef.nativeElement.focus();
        }
    }
}
CdkPopoverEdit.decorators = [
    { type: Directive, args: [{
                selector: '[cdkPopoverEdit]:not([cdkPopoverEditTabOut])',
                host: POPOVER_EDIT_HOST_BINDINGS,
                inputs: POPOVER_EDIT_INPUTS,
            },] }
];
CdkPopoverEdit.ctorParameters = () => [
    { type: EditServices },
    { type: ElementRef },
    { type: ViewContainerRef }
];
/**
 * Attaches an ng-template to a cell and shows it when instructed to by the
 * EditEventDispatcher service.
 * Makes the cell focusable.
 */
class CdkPopoverEditTabOut extends CdkPopoverEdit {
    constructor(elementRef, viewContainerRef, services, focusEscapeNotifierFactory) {
        super(services, elementRef, viewContainerRef);
        this.focusEscapeNotifierFactory = focusEscapeNotifierFactory;
    }
    initFocusTrap() {
        this.focusTrap = this.focusEscapeNotifierFactory.create(this.overlayRef.overlayElement);
        this.focusTrap.escapes().pipe(takeUntil(this.destroyed)).subscribe(direction => {
            if (this.services.editEventDispatcher.editRef) {
                this.services.editEventDispatcher.editRef.blur();
            }
            this.services.focusDispatcher.moveFocusHorizontally(closest(this.elementRef.nativeElement, CELL_SELECTOR), direction === 0 /* START */ ? -1 : 1);
            this.closeEditOverlay();
        });
    }
}
CdkPopoverEditTabOut.decorators = [
    { type: Directive, args: [{
                selector: '[cdkPopoverEdit][cdkPopoverEditTabOut]',
                host: POPOVER_EDIT_HOST_BINDINGS,
                inputs: POPOVER_EDIT_INPUTS,
            },] }
];
CdkPopoverEditTabOut.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: EditServices },
    { type: FocusEscapeNotifierFactory }
];
/**
 * A structural directive that shows its contents when the table row containing
 * it is hovered or when an element in the row has focus.
 */
class CdkRowHoverContent {
    constructor(services, elementRef, templateRef, viewContainerRef) {
        this.services = services;
        this.elementRef = elementRef;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.destroyed = new Subject();
        this.viewRef = null;
    }
    ngAfterViewInit() {
        this._row = closest(this.elementRef.nativeElement, ROW_SELECTOR);
        this.services.editEventDispatcher.registerRowWithHoverContent(this._row);
        this._listenForHoverAndFocusEvents();
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
        if (this.viewRef) {
            this.viewRef.destroy();
        }
        if (this._row) {
            this.services.editEventDispatcher.deregisterRowWithHoverContent(this._row);
        }
    }
    /**
     * Called immediately after the hover content is created and added to the dom.
     * In the CDK version, this is a noop but subclasses such as MatRowHoverContent use this
     * to prepare/style the inserted element.
     */
    initElement(_) {
    }
    /**
     * Called when the hover content needs to be focusable to preserve a reasonable tab ordering
     * but should not yet be shown.
     */
    makeElementHiddenButFocusable(element) {
        element.style.opacity = '0';
    }
    /**
     * Called when the hover content needs to be focusable to preserve a reasonable tab ordering
     * but should not yet be shown.
     */
    makeElementVisible(element) {
        element.style.opacity = '';
    }
    _listenForHoverAndFocusEvents() {
        this.services.editEventDispatcher.hoverOrFocusOnRow(this._row)
            .pipe(takeUntil(this.destroyed))
            .subscribe(eventState => {
            // When in FOCUSABLE state, add the hover content to the dom but make it transparent so
            // that it is in the tab order relative to the currently focused row.
            if (eventState === 2 /* ON */ || eventState === 1 /* FOCUSABLE */) {
                if (!this.viewRef) {
                    this.viewRef = this.viewContainerRef.createEmbeddedView(this.templateRef, {});
                    this.initElement(this.viewRef.rootNodes[0]);
                    this.viewRef.markForCheck();
                }
                else if (this.viewContainerRef.indexOf(this.viewRef) === -1) {
                    this.viewContainerRef.insert(this.viewRef);
                    this.viewRef.markForCheck();
                }
                if (eventState === 2 /* ON */) {
                    this.makeElementVisible(this.viewRef.rootNodes[0]);
                }
                else {
                    this.makeElementHiddenButFocusable(this.viewRef.rootNodes[0]);
                }
            }
            else if (this.viewRef) {
                this.viewContainerRef.detach(this.viewContainerRef.indexOf(this.viewRef));
            }
        });
    }
}
CdkRowHoverContent.decorators = [
    { type: Directive, args: [{
                selector: '[cdkRowHoverContent]',
            },] }
];
CdkRowHoverContent.ctorParameters = () => [
    { type: EditServices },
    { type: ElementRef },
    { type: TemplateRef },
    { type: ViewContainerRef }
];
/**
 * Opens the closest edit popover to this element, whether it's associated with this exact
 * element or an ancestor element.
 */
class CdkEditOpen {
    constructor(elementRef, editEventDispatcher) {
        this.elementRef = elementRef;
        this.editEventDispatcher = editEventDispatcher;
        const nativeElement = elementRef.nativeElement;
        // Prevent accidental form submits.
        if (nativeElement.nodeName === 'BUTTON' && !nativeElement.getAttribute('type')) {
            nativeElement.setAttribute('type', 'button');
        }
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    openEdit(evt) {
        this.editEventDispatcher.editing.next(closest(this.elementRef.nativeElement, CELL_SELECTOR));
        evt.stopPropagation();
    }
}
CdkEditOpen.decorators = [
    { type: Directive, args: [{
                selector: '[cdkEditOpen]',
            },] }
];
CdkEditOpen.ctorParameters = () => [
    { type: ElementRef },
    { type: EditEventDispatcher }
];
CdkEditOpen.propDecorators = {
    openEdit: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const EXPORTED_DECLARATIONS = [
    CdkPopoverEdit,
    CdkPopoverEditTabOut,
    CdkRowHoverContent,
    CdkEditControl,
    CdkEditRevert,
    CdkEditClose,
    CdkEditable,
    CdkEditOpen,
];
class CdkPopoverEditModule {
}
CdkPopoverEditModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    OverlayModule,
                ],
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
                providers: [{
                        provide: PopoverEditPositionStrategyFactory,
                        useClass: DefaultPopoverEditPositionStrategyFactory
                    }],
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

export { CdkEditClose, CdkEditControl, CdkEditOpen, CdkEditRevert, CdkEditable, CdkPopoverEdit, CdkPopoverEditModule, CdkPopoverEditTabOut, CdkRowHoverContent, DefaultPopoverEditPositionStrategyFactory, EditEventDispatcher, EditRef, FocusDispatcher, FormValueContainer, PopoverEditPositionStrategyFactory, CELL_SELECTOR as _CELL_SELECTOR, closest as _closest, matches as _matches, EditServices as ɵangular_material_src_cdk_experimental_popover_edit_popover_edit_a, FocusEscapeNotifierFactory as ɵangular_material_src_cdk_experimental_popover_edit_popover_edit_b };
//# sourceMappingURL=popover-edit.js.map
