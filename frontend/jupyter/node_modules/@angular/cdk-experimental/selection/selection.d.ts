/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BooleanInput } from '@angular/cdk/coercion';
import { CollectionViewer, DataSource, ListRange } from '@angular/cdk/collections';
import { AfterContentChecked, EventEmitter, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectionChange } from './selection-set';
/**
 * Manages the selection states of the items and provides methods to check and update the selection
 * states.
 * It must be applied to the parent element if `cdkSelectionToggle`, `cdkSelectAll`,
 * `cdkRowSelection` and `cdkSelectionColumn` are applied.
 */
export declare class CdkSelection<T> implements OnInit, AfterContentChecked, CollectionViewer, OnDestroy {
    viewChange: Observable<ListRange>;
    get dataSource(): TableDataSource<T>;
    set dataSource(dataSource: TableDataSource<T>);
    private _dataSource;
    trackByFn: TrackByFunction<T>;
    /** Whether to support multiple selection */
    get multiple(): boolean;
    set multiple(multiple: boolean);
    protected _multiple: boolean;
    /** Emits when selection changes. */
    readonly change: EventEmitter<SelectionChange<T>>;
    /** Latest data provided by the data source. */
    private _data;
    /** Subscription that listens for the data provided by the data source.  */
    private _renderChangeSubscription;
    private _destroyed;
    private _selection;
    private _switchDataSource;
    private _observeRenderChanges;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    /** Toggles selection for a given value. `index` is required if `trackBy` is used. */
    toggleSelection(value: T, index?: number): void;
    /**
     * Toggles select-all. If no value is selected, select all values. If all values or some of the
     * values are selected, de-select all values.
     */
    toggleSelectAll(): void;
    /** Checks whether a value is selected. `index` is required if `trackBy` is used. */
    isSelected(value: T, index?: number): boolean;
    /** Checks whether all values are selected. */
    isAllSelected(): boolean;
    /** Checks whether partially selected. */
    isPartialSelected(): boolean;
    private _selectAll;
    private _clearAll;
    private _updateSelectAllState;
    selectAllState: SelectAllState;
    static ngAcceptInputType_multiple: BooleanInput;
}
declare type SelectAllState = 'all' | 'none' | 'partial';
declare type TableDataSource<T> = DataSource<T> | Observable<readonly T[]> | readonly T[];
export {};
