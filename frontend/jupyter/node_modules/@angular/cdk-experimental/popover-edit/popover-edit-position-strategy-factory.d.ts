/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlaySizeConfig, PositionStrategy } from '@angular/cdk/overlay';
/**
 * Overridable factory responsible for configuring how cdkPopoverEdit popovers are positioned
 * and sized.
 */
export declare abstract class PopoverEditPositionStrategyFactory {
    /**
     * Creates a PositionStrategy based on the specified table cells.
     * The cells will be provided in DOM order.
     */
    abstract positionStrategyForCells(cells: HTMLElement[]): PositionStrategy;
    /**
     * Creates an OverlaySizeConfig based on the specified table cells.
     * The cells will be provided in DOM order.
     */
    abstract sizeConfigForCells(cells: HTMLElement[]): OverlaySizeConfig;
}
/**
 * Default implementation of PopoverEditPositionStrategyFactory.
 * Uses a FlexibleConnectedPositionStrategy anchored to the start + top of the cell.
 * Note: This will change to CoverPositionStrategy once it implemented.
 */
export declare class DefaultPopoverEditPositionStrategyFactory extends PopoverEditPositionStrategyFactory {
    protected readonly direction: Directionality;
    protected readonly overlay: Overlay;
    constructor(direction: Directionality, overlay: Overlay);
    positionStrategyForCells(cells: HTMLElement[]): PositionStrategy;
    sizeConfigForCells(cells: HTMLElement[]): OverlaySizeConfig;
}
