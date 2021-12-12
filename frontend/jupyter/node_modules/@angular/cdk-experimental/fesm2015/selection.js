import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { isDataSource } from '@angular/cdk/collections';
import { EventEmitter, Directive, Input, Output, Optional, Inject, Self, Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CdkTable, CdkColumnDef, CdkCellDef, CdkHeaderCellDef, CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Maintains a set of selected items. Support selecting and deselecting items, and checking if a
 * value is selected.
 * When constructed with a `trackByFn`, all the items will be identified by applying the `trackByFn`
 * on them. Because `trackByFn` requires the index of the item to be passed in, the `index` field is
 * expected to be set when calling `isSelected`, `select` and `deselect`.
 */
class SelectionSet {
    constructor(_multiple = false, _trackByFn) {
        this._multiple = _multiple;
        this._trackByFn = _trackByFn;
        this._selectionMap = new Map();
        this.changed = new Subject();
    }
    isSelected(value) {
        return this._selectionMap.has(this._getTrackedByValue(value));
    }
    select(...selects) {
        if (!this._multiple && selects.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('SelectionSet: not multiple selection');
        }
        const before = this._getCurrentSelection();
        if (!this._multiple) {
            this._selectionMap.clear();
        }
        const toSelect = [];
        for (const select of selects) {
            if (this.isSelected(select)) {
                continue;
            }
            toSelect.push(select);
            this._markSelected(this._getTrackedByValue(select), select);
        }
        const after = this._getCurrentSelection();
        this.changed.next({ before, after });
    }
    deselect(...selects) {
        if (!this._multiple && selects.length > 1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('SelectionSet: not multiple selection');
        }
        const before = this._getCurrentSelection();
        const toDeselect = [];
        for (const select of selects) {
            if (!this.isSelected(select)) {
                continue;
            }
            toDeselect.push(select);
            this._markDeselected(this._getTrackedByValue(select));
        }
        const after = this._getCurrentSelection();
        this.changed.next({ before, after });
    }
    _markSelected(key, toSelect) {
        this._selectionMap.set(key, toSelect);
    }
    _markDeselected(key) {
        this._selectionMap.delete(key);
    }
    _getTrackedByValue(select) {
        if (!this._trackByFn) {
            return select.value;
        }
        if (select.index == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('SelectionSet: index required when trackByFn is used.');
        }
        return this._trackByFn(select.index, select.value);
    }
    _getCurrentSelection() {
        return Array.from(this._selectionMap.values());
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
 * Manages the selection states of the items and provides methods to check and update the selection
 * states.
 * It must be applied to the parent element if `cdkSelectionToggle`, `cdkSelectAll`,
 * `cdkRowSelection` and `cdkSelectionColumn` are applied.
 */
class CdkSelection {
    constructor() {
        /** Emits when selection changes. */
        this.change = new EventEmitter();
        this._destroyed = new Subject();
        this.selectAllState = 'none';
    }
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(dataSource) {
        if (this._dataSource !== dataSource) {
            this._switchDataSource(dataSource);
        }
    }
    /** Whether to support multiple selection */
    get multiple() {
        return this._multiple;
    }
    set multiple(multiple) {
        this._multiple = coerceBooleanProperty(multiple);
    }
    _switchDataSource(dataSource) {
        this._data = [];
        // TODO: Move this logic to a shared function in `cdk/collections`.
        if (isDataSource(this._dataSource)) {
            this._dataSource.disconnect(this);
        }
        if (this._renderChangeSubscription) {
            this._renderChangeSubscription.unsubscribe();
            this._renderChangeSubscription = null;
        }
        this._dataSource = dataSource;
    }
    _observeRenderChanges() {
        if (!this._dataSource) {
            return;
        }
        let dataStream;
        if (isDataSource(this._dataSource)) {
            dataStream = this._dataSource.connect(this);
        }
        else if (this._dataSource instanceof Observable) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = of(this._dataSource);
        }
        if (dataStream == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Unknown data source');
        }
        this._renderChangeSubscription =
            dataStream.pipe(takeUntil(this._destroyed)).subscribe((data) => {
                this._data = data || [];
            });
    }
    ngOnInit() {
        this._selection = new SelectionSet(this._multiple, this.trackByFn);
        this._selection.changed.pipe(takeUntil(this._destroyed)).subscribe((change) => {
            this._updateSelectAllState();
            this.change.emit(change);
        });
    }
    ngAfterContentChecked() {
        if (this._dataSource && !this._renderChangeSubscription) {
            this._observeRenderChanges();
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
        if (isDataSource(this._dataSource)) {
            this._dataSource.disconnect(this);
        }
    }
    /** Toggles selection for a given value. `index` is required if `trackBy` is used. */
    toggleSelection(value, index) {
        if (!!this.trackByFn && index == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelection: index required when trackBy is used');
        }
        if (this.isSelected(value, index)) {
            this._selection.deselect({ value, index });
        }
        else {
            this._selection.select({ value, index });
        }
    }
    /**
     * Toggles select-all. If no value is selected, select all values. If all values or some of the
     * values are selected, de-select all values.
     */
    toggleSelectAll() {
        if (!this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelection: multiple selection not enabled');
        }
        if (this.selectAllState === 'none') {
            this._selectAll();
        }
        else {
            this._clearAll();
        }
    }
    /** Checks whether a value is selected. `index` is required if `trackBy` is used. */
    isSelected(value, index) {
        if (!!this.trackByFn && index == null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelection: index required when trackBy is used');
        }
        return this._selection.isSelected({ value, index });
    }
    /** Checks whether all values are selected. */
    isAllSelected() {
        return this._data.every((value, index) => this._selection.isSelected({ value, index }));
    }
    /** Checks whether partially selected. */
    isPartialSelected() {
        return !this.isAllSelected() &&
            this._data.some((value, index) => this._selection.isSelected({ value, index }));
    }
    _selectAll() {
        const toSelect = [];
        this._data.forEach((value, index) => {
            toSelect.push({ value, index });
        });
        this._selection.select(...toSelect);
    }
    _clearAll() {
        const toDeselect = [];
        this._data.forEach((value, index) => {
            toDeselect.push({ value, index });
        });
        this._selection.deselect(...toDeselect);
    }
    _updateSelectAllState() {
        if (this.isAllSelected()) {
            this.selectAllState = 'all';
        }
        else if (this.isPartialSelected()) {
            this.selectAllState = 'partial';
        }
        else {
            this.selectAllState = 'none';
        }
    }
}
CdkSelection.decorators = [
    { type: Directive, args: [{
                selector: '[cdkSelection]',
                exportAs: 'cdkSelection',
            },] }
];
CdkSelection.propDecorators = {
    dataSource: [{ type: Input }],
    trackByFn: [{ type: Input, args: ['trackBy',] }],
    multiple: [{ type: Input, args: ['cdkSelectionMultiple',] }],
    change: [{ type: Output, args: ['cdkSelectionChange',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Makes the element a select-all toggle.
 *
 * Must be used within a parent `CdkSelection` directive. It toggles the selection states
 * of all the selection toggles connected with the `CdkSelection` directive.
 * If the element implements `ControlValueAccessor`, e.g. `MatCheckbox`, the directive
 * automatically connects it with the select-all state provided by the `CdkSelection` directive. If
 * not, use `checked$` to get the checked state, `indeterminate$` to get the indeterminate state,
 * and `toggle()` to change the selection state.
 */
class CdkSelectAll {
    constructor(_selection, _controlValueAccessor) {
        this._selection = _selection;
        this._controlValueAccessor = _controlValueAccessor;
        /**
         * The checked state of the toggle.
         * Resolves to `true` if all the values are selected, `false` if no value is selected.
         */
        this.checked = this._selection.change.pipe(switchMap(() => of(this._selection.isAllSelected())));
        /**
         * The indeterminate state of the toggle.
         * Resolves to `true` if part (not all) of the values are selected, `false` if all values or no
         * value at all are selected.
         */
        this.indeterminate = this._selection.change.pipe(switchMap(() => of(this._selection.isPartialSelected())));
        this._destroyed = new Subject();
    }
    /**
     * Toggles the select-all state.
     * @param event The click event if the toggle is triggered by a (mouse or keyboard) click. If
     *     using with a native `<input type="checkbox">`, the parameter is required for the
     *     indeterminate state to work properly.
     */
    toggle(event) {
        // This is needed when applying the directive on a native <input type="checkbox">
        // checkbox. The default behavior needs to be prevented in order to support the indeterminate
        // state. The timeout is also needed so the checkbox can show the latest state.
        if (event) {
            event.preventDefault();
        }
        setTimeout(() => {
            this._selection.toggleSelectAll();
        });
    }
    ngOnInit() {
        this._assertValidParentSelection();
        this._configureControlValueAccessor();
    }
    _configureControlValueAccessor() {
        if (this._controlValueAccessor && this._controlValueAccessor.length) {
            this._controlValueAccessor[0].registerOnChange((e) => {
                if (e === true || e === false) {
                    this.toggle();
                }
            });
            this.checked.pipe(takeUntil(this._destroyed)).subscribe((state) => {
                this._controlValueAccessor[0].writeValue(state);
            });
        }
    }
    _assertValidParentSelection() {
        if (!this._selection && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelectAll: missing CdkSelection in the parent');
        }
        if (!this._selection.multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelectAll: CdkSelection must have cdkSelectionMultiple set to true');
        }
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
}
CdkSelectAll.decorators = [
    { type: Directive, args: [{
                selector: '[cdkSelectAll]',
                exportAs: 'cdkSelectAll',
            },] }
];
CdkSelectAll.ctorParameters = () => [
    { type: CdkSelection, decorators: [{ type: Optional }, { type: Inject, args: [CdkSelection,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Self }, { type: Inject, args: [NG_VALUE_ACCESSOR,] }] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Makes the element a selection toggle.
 *
 * Must be used within a parent `CdkSelection` directive.
 * Must be provided with the value. If `trackBy` is used on `CdkSelection`, the index of the value
 * is required. If the element implements `ControlValueAccessor`, e.g. `MatCheckbox`, the directive
 * automatically connects it with the selection state provided by the `CdkSelection` directive. If
 * not, use `checked$` to get the checked state of the value, and `toggle()` to change the selection
 * state.
 */
class CdkSelectionToggle {
    constructor(_selection, _controlValueAccessors) {
        this._selection = _selection;
        this._controlValueAccessors = _controlValueAccessors;
        /** The checked state of the selection toggle */
        this.checked = this._selection.change.pipe(switchMap(() => of(this._isSelected())), distinctUntilChanged());
        this._destroyed = new Subject();
    }
    /** The index of the value in the list. Required when used with `trackBy` */
    get index() { return this._index; }
    set index(index) { this._index = coerceNumberProperty(index); }
    /** Toggles the selection */
    toggle() {
        this._selection.toggleSelection(this.value, this.index);
    }
    ngOnInit() {
        this._assertValidParentSelection();
        this._configureControlValueAccessor();
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
    _assertValidParentSelection() {
        if (!this._selection && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelectAll: missing CdkSelection in the parent');
        }
    }
    _configureControlValueAccessor() {
        if (this._controlValueAccessors && this._controlValueAccessors.length) {
            this._controlValueAccessors[0].registerOnChange((e) => {
                if (typeof e === 'boolean') {
                    this.toggle();
                }
            });
            this.checked.pipe(takeUntil(this._destroyed)).subscribe((state) => {
                this._controlValueAccessors[0].writeValue(state);
            });
        }
    }
    _isSelected() {
        return this._selection.isSelected(this.value, this.index);
    }
}
CdkSelectionToggle.decorators = [
    { type: Directive, args: [{
                selector: '[cdkSelectionToggle]',
                exportAs: 'cdkSelectionToggle',
            },] }
];
CdkSelectionToggle.ctorParameters = () => [
    { type: CdkSelection, decorators: [{ type: Optional }, { type: Inject, args: [CdkSelection,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Self }, { type: Inject, args: [NG_VALUE_ACCESSOR,] }] }
];
CdkSelectionToggle.propDecorators = {
    value: [{ type: Input, args: ['cdkSelectionToggleValue',] }],
    index: [{ type: Input, args: ['cdkSelectionToggleIndex',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Column that adds row selecting checkboxes and a select-all checkbox if `cdkSelectionMultiple` is
 * `true`.
 *
 * Must be used within a parent `CdkSelection` directive.
 */
class CdkSelectionColumn {
    constructor(_table, selection) {
        this._table = _table;
        this.selection = selection;
    }
    /** Column name that should be used to reference this column. */
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
        this._syncColumnDefName();
    }
    ngOnInit() {
        if (!this.selection && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelectionColumn: missing CdkSelection in the parent');
        }
        this._syncColumnDefName();
        if (this._table) {
            this._columnDef.cell = this._cell;
            this._columnDef.headerCell = this._headerCell;
            this._table.addColumnDef(this._columnDef);
        }
        else if ((typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkSelectionColumn: missing parent table');
        }
    }
    ngOnDestroy() {
        if (this._table) {
            this._table.removeColumnDef(this._columnDef);
        }
    }
    _syncColumnDefName() {
        if (this._columnDef) {
            this._columnDef.name = this._name;
        }
    }
}
CdkSelectionColumn.decorators = [
    { type: Component, args: [{
                selector: 'cdk-selection-column',
                template: `
    <ng-container cdkColumnDef>
      <th cdkHeaderCell *cdkHeaderCellDef>
        <input type="checkbox" *ngIf="selection.multiple"
            cdkSelectAll
            #allToggler="cdkSelectAll"
            [checked]="allToggler.checked | async"
            [indeterminate]="allToggler.indeterminate | async"
            (click)="allToggler.toggle($event)">
      </th>
      <td cdkCell *cdkCellDef="let row; let i = $index">
        <input type="checkbox"
            #toggler="cdkSelectionToggle"
            cdkSelectionToggle
            [cdkSelectionToggleValue]="row"
            [cdkSelectionToggleIndex]="i"
            (click)="toggler.toggle()"
            [checked]="toggler.checked | async">
      </td>
    </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
CdkSelectionColumn.ctorParameters = () => [
    { type: CdkTable, decorators: [{ type: Optional }, { type: Inject, args: [CdkTable,] }] },
    { type: CdkSelection, decorators: [{ type: Optional }, { type: Inject, args: [CdkSelection,] }] }
];
CdkSelectionColumn.propDecorators = {
    name: [{ type: Input, args: ['cdkSelectionColumnName',] }],
    _columnDef: [{ type: ViewChild, args: [CdkColumnDef, { static: true },] }],
    _cell: [{ type: ViewChild, args: [CdkCellDef, { static: true },] }],
    _headerCell: [{ type: ViewChild, args: [CdkHeaderCellDef, { static: true },] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Applies `cdk-selected` class and `aria-selected` to an element.
 *
 * Must be used within a parent `CdkSelection` directive.
 * Must be provided with the value. The index is required if `trackBy` is used on the `CdkSelection`
 * directive.
 */
class CdkRowSelection {
    constructor(_selection) {
        this._selection = _selection;
    }
    get index() { return this._index; }
    set index(index) { this._index = coerceNumberProperty(index); }
}
CdkRowSelection.decorators = [
    { type: Directive, args: [{
                selector: '[cdkRowSelection]',
                host: {
                    '[class.cdk-selected]': '_selection.isSelected(this.value, this.index)',
                    '[attr.aria-selected]': '_selection.isSelected(this.value, this.index)',
                },
            },] }
];
CdkRowSelection.ctorParameters = () => [
    { type: CdkSelection }
];
CdkRowSelection.propDecorators = {
    value: [{ type: Input, args: ['cdkRowSelectionValue',] }],
    index: [{ type: Input, args: ['cdkRowSelectionIndex',] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class CdkSelectionModule {
}
CdkSelectionModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CdkTableModule,
                ],
                exports: [
                    CdkSelection,
                    CdkSelectionToggle,
                    CdkSelectAll,
                    CdkSelectionColumn,
                    CdkRowSelection,
                ],
                declarations: [
                    CdkSelection,
                    CdkSelectionToggle,
                    CdkSelectAll,
                    CdkSelectionColumn,
                    CdkRowSelection,
                ],
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

export { CdkRowSelection, CdkSelectAll, CdkSelection, CdkSelectionColumn, CdkSelectionModule, CdkSelectionToggle, SelectionSet };
//# sourceMappingURL=selection.js.map
