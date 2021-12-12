/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone, OnDestroy, InjectionToken } from '@angular/core';
import { PointerFocusTracker, FocusableElement } from './pointer-focus-tracker';
import { Menu } from './menu-interface';
/**
 * MenuAim is responsible for determining if a sibling menuitem's menu should be closed when a
 * Toggler item is hovered into. It is up to the hovered in item to call the MenuAim service in
 * order to determine if it may perform its close actions.
 */
export interface MenuAim {
    /** Set the Menu and its PointerFocusTracker. */
    initialize(menu: Menu, pointerTracker: PointerFocusTracker<FocusableElement & Toggler>): void;
    /**
     * Calls the `doToggle` callback when it is deemed that the user is not moving towards
     * the submenu.
     * @param doToggle the function called when the user is not moving towards the submenu.
     */
    toggle(doToggle: () => void): void;
}
/** Injection token used for an implementation of MenuAim. */
export declare const MENU_AIM: InjectionToken<MenuAim>;
/**
 * An element which when hovered over may perform closing actions on the open submenu and
 * potentially open its own menu.
 */
export interface Toggler {
    getMenu(): Menu | undefined;
}
/**
 * TargetMenuAim predicts if a user is moving into a submenu. It calculates the
 * trajectory of the user's mouse movement in the current menu to determine if the
 * mouse is moving towards an open submenu.
 *
 * The determination is made by calculating the slope of the users last NUM_POINTS moves where each
 * pair of points determines if the trajectory line points into the submenu. It uses consensus
 * approach by checking if at least NUM_POINTS / 2 pairs determine that the user is moving towards
 * to submenu.
 */
export declare class TargetMenuAim implements MenuAim, OnDestroy {
    private readonly _ngZone;
    /** The last NUM_POINTS mouse move events. */
    private readonly _points;
    /** Reference to the root menu in which we are tracking mouse moves. */
    private _menu;
    /** Reference to the root menu's mouse manager. */
    private _pointerTracker;
    /** The id associated with the current timeout call waiting to resolve. */
    private _timeoutId;
    /** Emits when this service is destroyed. */
    private readonly _destroyed;
    constructor(_ngZone: NgZone);
    /** Set the Menu and its PointerFocusTracker. */
    initialize(menu: Menu, pointerTracker: PointerFocusTracker<FocusableElement & Toggler>): void;
    /**
     * Calls the `doToggle` callback when it is deemed that the user is not moving towards
     * the submenu.
     * @param doToggle the function called when the user is not moving towards the submenu.
     */
    toggle(doToggle: () => void): void;
    /**
     * Start the delayed toggle handler if one isn't running already.
     *
     * The delayed toggle handler executes the `doToggle` callback after some period of time iff the
     * users mouse is on an item in the current menu.
     */
    private _startTimeout;
    /** Whether the user is heading towards the open submenu. */
    private _isMovingToSubmenu;
    /** Get the bounding DOMRect for the open submenu. */
    private _getSubmenuBounds;
    /**
     * Check if a reference to the PointerFocusTracker and menu element is provided.
     * @throws an error if neither reference is provided.
     */
    private _checkConfigured;
    /** Subscribe to the root menus mouse move events and update the tracked mouse points. */
    private _subscribeToMouseMoves;
    ngOnDestroy(): void;
}
/**
 * CdkTargetMenuAim is a provider for the TargetMenuAim service. It should be added to an
 * element with either the `cdkMenu` or `cdkMenuBar` directive and child menu items.
 */
export declare class CdkTargetMenuAim {
}
