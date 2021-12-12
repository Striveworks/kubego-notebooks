/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TrackByFunction } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Maintains a set of selected values. One or more values can be added to or removed from the
 * selection.
 */
interface TrackBySelection<T> {
    isSelected(value: SelectableWithIndex<T>): boolean;
    select(...values: SelectableWithIndex<T>[]): void;
    deselect(...values: SelectableWithIndex<T>[]): void;
    changed: Subject<SelectionChange<T>>;
}
/**
 * A selectable value with an optional index. The index is required when the selection is used with
 * `trackBy`.
 */
export interface SelectableWithIndex<T> {
    value: T;
    index?: number;
}
/**
 * Represents the change in the selection set.
 */
export interface SelectionChange<T> {
    before: SelectableWithIndex<T>[];
    after: SelectableWithIndex<T>[];
}
/**
 * Maintains a set of selected items. Support selecting and deselecting items, and checking if a
 * value is selected.
 * When constructed with a `trackByFn`, all the items will be identified by applying the `trackByFn`
 * on them. Because `trackByFn` requires the index of the item to be passed in, the `index` field is
 * expected to be set when calling `isSelected`, `select` and `deselect`.
 */
export declare class SelectionSet<T> implements TrackBySelection<T> {
    private _multiple;
    private _trackByFn?;
    private _selectionMap;
    changed: Subject<SelectionChange<T>>;
    constructor(_multiple?: boolean, _trackByFn?: TrackByFunction<T> | undefined);
    isSelected(value: SelectableWithIndex<T>): boolean;
    select(...selects: SelectableWithIndex<T>[]): void;
    deselect(...selects: SelectableWithIndex<T>[]): void;
    private _markSelected;
    private _markDeselected;
    private _getTrackedByValue;
    private _getCurrentSelection;
}
export {};
