/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CdkTable } from '@angular/cdk/table';
import { OnDestroy, OnInit } from '@angular/core';
import { CdkSelection } from './selection';
/**
 * Column that adds row selecting checkboxes and a select-all checkbox if `cdkSelectionMultiple` is
 * `true`.
 *
 * Must be used within a parent `CdkSelection` directive.
 */
export declare class CdkSelectionColumn<T> implements OnInit, OnDestroy {
    private _table;
    readonly selection: CdkSelection<T>;
    /** Column name that should be used to reference this column. */
    get name(): string;
    set name(name: string);
    private _name;
    private readonly _columnDef;
    private readonly _cell;
    private readonly _headerCell;
    constructor(_table: CdkTable<T>, selection: CdkSelection<T>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private _syncColumnDefName;
}
