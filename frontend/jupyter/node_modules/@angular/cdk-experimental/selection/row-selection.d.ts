/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NumberInput } from '@angular/cdk/coercion';
import { CdkSelection } from './selection';
/**
 * Applies `cdk-selected` class and `aria-selected` to an element.
 *
 * Must be used within a parent `CdkSelection` directive.
 * Must be provided with the value. The index is required if `trackBy` is used on the `CdkSelection`
 * directive.
 */
export declare class CdkRowSelection<T> {
    readonly _selection: CdkSelection<T>;
    value: T;
    get index(): number | undefined;
    set index(index: number | undefined);
    protected _index?: number;
    constructor(_selection: CdkSelection<T>);
    static ngAcceptInputType_index: NumberInput;
}
