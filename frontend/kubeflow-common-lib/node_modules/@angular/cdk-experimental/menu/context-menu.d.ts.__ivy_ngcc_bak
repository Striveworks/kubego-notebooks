/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ViewContainerRef, EventEmitter, OnDestroy, InjectionToken } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { Overlay } from '@angular/cdk/overlay';
import { BooleanInput } from '@angular/cdk/coercion';
import { CdkMenuPanel } from './menu-panel';
/** Tracks the last open context menu trigger across the entire application. */
export declare class ContextMenuTracker {
    /** The last open context menu trigger. */
    private static _openContextMenuTrigger?;
    /**
     * Close the previous open context menu and set the given one as being open.
     * @param trigger the trigger for the currently open Context Menu.
     */
    update(trigger: CdkContextMenuTrigger): void;
}
/** Configuration options passed to the context menu. */
export declare type ContextMenuOptions = {
    /** The opened menus X coordinate offset from the triggering position. */
    offsetX: number;
    /** The opened menus Y coordinate offset from the triggering position. */
    offsetY: number;
};
/** Injection token for the ContextMenu options object. */
export declare const CDK_CONTEXT_MENU_DEFAULT_OPTIONS: InjectionToken<ContextMenuOptions>;
/** The coordinates of where the context menu should open. */
export declare type ContextMenuCoordinates = {
    x: number;
    y: number;
};
/**
 * A directive which when placed on some element opens a the Menu it is bound to when a user
 * right-clicks within that element. It is aware of nested Context Menus and the lowest level
 * non-disabled context menu will trigger.
 */
export declare class CdkContextMenuTrigger implements OnDestroy {
    protected readonly _viewContainerRef: ViewContainerRef;
    private readonly _overlay;
    private readonly _contextMenuTracker;
    private readonly _options;
    private readonly _directionality?;
    /** Template reference variable to the menu to open on right click. */
    get menuPanel(): CdkMenuPanel;
    set menuPanel(panel: CdkMenuPanel);
    /** Reference to the MenuPanel this trigger toggles. */
    private _menuPanel;
    /** Emits when the attached menu is requested to open. */
    readonly opened: EventEmitter<void>;
    /** Emits when the attached menu is requested to close. */
    readonly closed: EventEmitter<void>;
    /** Whether the context menu should be disabled. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    /** A reference to the overlay which manages the triggered menu. */
    private _overlayRef;
    /** The content of the menu panel opened by this trigger. */
    private _panelContent;
    /** Emits when the element is destroyed. */
    private readonly _destroyed;
    /** The menu stack for this trigger and its associated menus. */
    private readonly _menuStack;
    /** Emits when the outside pointer events listener on the overlay should be stopped. */
    private readonly _stopOutsideClicksListener;
    constructor(_viewContainerRef: ViewContainerRef, _overlay: Overlay, _contextMenuTracker: ContextMenuTracker, _options: ContextMenuOptions, _directionality?: Directionality | undefined);
    /**
     * Open the attached menu at the specified location.
     * @param coordinates where to open the context menu
     */
    open(coordinates: ContextMenuCoordinates): void;
    /** Close the opened menu. */
    close(): void;
    /**
     * Open the context menu and close any previously open menus.
     * @param event the mouse event which opens the context menu.
     */
    _openOnContextMenu(event: MouseEvent): void;
    /** Whether the attached menu is open. */
    isOpen(): boolean;
    /**
     * Get the configuration object used to create the overlay.
     * @param coordinates the location to place the opened menu
     */
    private _getOverlayConfig;
    /**
     * Build the position strategy for the overlay which specifies where to place the menu.
     * @param coordinates the location to place the opened menu
     */
    private _getOverlayPositionStrategy;
    /**
     * Determine and return where to position the opened menu relative to the mouse location.
     */
    private _getOverlayPositions;
    /**
     * Get the portal to be attached to the overlay which contains the menu. Allows for the menu
     * content to change dynamically and be reflected in the application.
     */
    private _getMenuContent;
    /** Subscribe to the menu stack close events and close this menu when requested. */
    private _setMenuStackListener;
    /**
     * Subscribe to the overlays outside pointer events stream and handle closing out the stack if a
     * click occurs outside the menus.
     */
    private _subscribeToOutsideClicks;
    ngOnDestroy(): void;
    /** Destroy and unset the overlay reference it if exists. */
    private _destroyOverlay;
    /** Set the menu panels menu stack back to null. */
    private _resetPanelMenuStack;
    static ngAcceptInputType_disabled: BooleanInput;
}
