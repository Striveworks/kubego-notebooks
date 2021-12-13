/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AfterContentInit, OnDestroy, NgZone, ElementRef } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { FocusOrigin } from '@angular/cdk/a11y';
import { CdkMenuGroup } from './menu-group';
import { Menu } from './menu-interface';
import { MenuStack } from './menu-stack';
import { MenuAim } from './menu-aim';
/**
 * Directive applied to an element which configures it as a MenuBar by setting the appropriate
 * role, aria attributes, and accessible keyboard and mouse handling logic. The component that
 * this directive is applied to should contain components marked with CdkMenuItem.
 *
 */
export declare class CdkMenuBar extends CdkMenuGroup implements Menu, AfterContentInit, OnDestroy {
    readonly _menuStack: MenuStack;
    private readonly _ngZone;
    readonly _elementRef: ElementRef<HTMLElement>;
    private readonly _menuAim?;
    private readonly _dir?;
    /**
     * Sets the aria-orientation attribute and determines where menus will be opened.
     * Does not affect styling/layout.
     */
    orientation: 'horizontal' | 'vertical';
    /** Handles keyboard events for the MenuBar. */
    private _keyManager;
    /** Manages items under mouse focus */
    private _pointerTracker?;
    /** Emits when the MenuBar is destroyed. */
    private readonly _destroyed;
    /** All child MenuItem elements nested in this MenuBar. */
    private readonly _allItems;
    /** The Menu Item which triggered the open submenu. */
    private _openItem?;
    constructor(_menuStack: MenuStack, _ngZone: NgZone, _elementRef: ElementRef<HTMLElement>, _menuAim?: MenuAim | undefined, _dir?: Directionality | undefined);
    ngAfterContentInit(): void;
    /** Place focus on the first MenuItem in the menu and set the focus origin. */
    focusFirstItem(focusOrigin?: FocusOrigin): void;
    /** Place focus on the last MenuItem in the menu and set the focus origin. */
    focusLastItem(focusOrigin?: FocusOrigin): void;
    /**
     * Handle keyboard events, specifically changing the focused element and/or toggling the active
     * items menu.
     * @param event the KeyboardEvent to handle.
     */
    _handleKeyEvent(event: KeyboardEvent): void;
    /** Setup the FocusKeyManager with the correct orientation for the menu bar. */
    private _setKeyManager;
    /**
     * Set the PointerFocusTracker and ensure that when mouse focus changes the key manager is updated
     * with the latest menu item under mouse focus.
     */
    private _subscribeToMouseManager;
    /** Subscribe to the MenuStack close and empty observables. */
    private _subscribeToMenuStack;
    /**
     * Close the open menu if the current active item opened the requested MenuStackItem.
     * @param item the MenuStackItem requested to be closed.
     */
    private _closeOpenMenu;
    /**
     * Set focus to either the current, previous or next item based on the FocusNext event, then
     * open the previous or next item.
     */
    private _toggleOpenMenu;
    /**
     * @return true if the menu bar is configured to be horizontal.
     */
    private _isHorizontal;
    /**
     * Subscribe to the menu trigger's open events in order to track the trigger which opened the menu
     * and stop tracking it when the menu is closed.
     */
    private _subscribeToMenuOpen;
    /** Return true if the MenuBar has an open submenu. */
    private _hasOpenSubmenu;
    ngOnDestroy(): void;
}
