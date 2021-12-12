/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, ElementRef, ViewContainerRef, OnDestroy, NgZone } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { Overlay } from '@angular/cdk/overlay';
import { CdkMenuPanel } from './menu-panel';
import { Menu } from './menu-interface';
import { MenuStack } from './menu-stack';
import { MenuAim } from './menu-aim';
/**
 * Whether the target element is a menu item to be ignored by the overlay background click handler.
 */
export declare function isClickInsideMenuOverlay(target: Element): boolean;
/**
 * A directive to be combined with CdkMenuItem which opens the Menu it is bound to. If the
 * element is in a top level MenuBar it will open the menu on click, or if a sibling is already
 * opened it will open on hover. If it is inside of a Menu it will open the attached Submenu on
 * hover regardless of its sibling state.
 *
 * The directive must be placed along with the `cdkMenuItem` directive in order to enable full
 * functionality.
 */
export declare class CdkMenuItemTrigger implements OnDestroy {
    private readonly _elementRef;
    protected readonly _viewContainerRef: ViewContainerRef;
    private readonly _overlay;
    private readonly _ngZone;
    private readonly _parentMenu?;
    private readonly _menuAim?;
    private readonly _directionality?;
    /** Template reference variable to the menu this trigger opens */
    get menuPanel(): CdkMenuPanel | undefined;
    set menuPanel(panel: CdkMenuPanel | undefined);
    /** Reference to the MenuPanel this trigger toggles. */
    private _menuPanel?;
    /** Emits when the attached menu is requested to open */
    readonly opened: EventEmitter<void>;
    /** Emits when the attached menu is requested to close */
    readonly closed: EventEmitter<void>;
    /** The menu stack for this trigger and its sub-menus. */
    _menuStack: MenuStack;
    /** A reference to the overlay which manages the triggered menu */
    private _overlayRef;
    /** The content of the menu panel opened by this trigger. */
    private _panelContent;
    /** Emits when this trigger is destroyed. */
    private readonly _destroyed;
    /** Emits when the outside pointer events listener on the overlay should be stopped. */
    private readonly _stopOutsideClicksListener;
    constructor(_elementRef: ElementRef<HTMLElement>, _viewContainerRef: ViewContainerRef, _overlay: Overlay, _ngZone: NgZone, _parentMenu?: Menu | undefined, _menuAim?: MenuAim | undefined, _directionality?: Directionality | undefined);
    /** Open/close the attached menu if the trigger has been configured with one */
    toggle(): void;
    /** Open the attached menu. */
    openMenu(): void;
    /** Close the opened menu. */
    closeMenu(): void;
    /** Return true if the trigger has an attached menu */
    hasMenu(): boolean;
    /** Whether the menu this button is a trigger for is open */
    isMenuOpen(): boolean;
    /**
     * Get a reference to the rendered Menu if the Menu is open and it is visible in the DOM.
     * @return the menu if it is open, otherwise undefined.
     */
    getMenu(): Menu | undefined;
    /**
     * Subscribe to the mouseenter events and close any sibling menu items if this element is moused
     * into.
     */
    private _subscribeToMouseEnter;
    /**
     * Handles keyboard events for the menu item, specifically opening/closing the attached menu and
     * focusing the appropriate submenu item.
     * @param event the keyboard event to handle
     */
    _toggleOnKeydown(event: KeyboardEvent): void;
    /** Close out any sibling menu trigger menus. */
    private _closeSiblingTriggers;
    /** Get the configuration object used to create the overlay */
    private _getOverlayConfig;
    /** Build the position strategy for the overlay which specifies where to place the menu */
    private _getOverlayPositionStrategy;
    /** Determine and return where to position the opened menu relative to the menu item */
    private _getOverlayPositions;
    /**
     * Get the portal to be attached to the overlay which contains the menu. Allows for the menu
     * content to change dynamically and be reflected in the application.
     */
    private _getPortal;
    /**
     * @return true if if the enclosing parent menu is configured in a vertical orientation.
     */
    private _isParentVertical;
    /**
     * Subscribe to the MenuStack close events if this is a standalone trigger and close out the menu
     * this triggers when requested.
     */
    private _registerCloseHandler;
    /** Get the menu stack for this trigger - either from the parent or this trigger. */
    private _getMenuStack;
    ngOnDestroy(): void;
    /** Set the menu panels menu stack back to null. */
    private _resetPanelMenuStack;
    /**
     * Subscribe to the overlays outside pointer events stream and handle closing out the stack if a
     * click occurs outside the menus.
     */
    private _subscribeToOutsideClicks;
    /** Destroy and unset the overlay reference it if exists */
    private _destroyOverlay;
}
