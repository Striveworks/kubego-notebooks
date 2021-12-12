/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input, Output, EventEmitter, ElementRef, ViewContainerRef, Inject, Optional, NgZone, } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { SPACE, ENTER, RIGHT_ARROW, LEFT_ARROW, DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { fromEvent, Subject, merge } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { CDK_MENU } from './menu-interface';
import { MenuStack } from './menu-stack';
import { throwExistingMenuStackError } from './menu-errors';
import { MENU_AIM } from './menu-aim';
/**
 * Whether the target element is a menu item to be ignored by the overlay background click handler.
 */
export function isClickInsideMenuOverlay(target) {
    while (target === null || target === void 0 ? void 0 : target.parentElement) {
        const isOpenTrigger = target.getAttribute('aria-expanded') === 'true' &&
            target.classList.contains('cdk-menu-trigger');
        const isOverlayMenu = target.classList.contains('cdk-menu') && !target.classList.contains('cdk-menu-inline');
        if (isOpenTrigger || isOverlayMenu) {
            return true;
        }
        target = target.parentElement;
    }
    return false;
}
/**
 * A directive to be combined with CdkMenuItem which opens the Menu it is bound to. If the
 * element is in a top level MenuBar it will open the menu on click, or if a sibling is already
 * opened it will open on hover. If it is inside of a Menu it will open the attached Submenu on
 * hover regardless of its sibling state.
 *
 * The directive must be placed along with the `cdkMenuItem` directive in order to enable full
 * functionality.
 */
export class CdkMenuItemTrigger {
    constructor(_elementRef, _viewContainerRef, _overlay, _ngZone, _parentMenu, _menuAim, _directionality) {
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._parentMenu = _parentMenu;
        this._menuAim = _menuAim;
        this._directionality = _directionality;
        /** Emits when the attached menu is requested to open */
        this.opened = new EventEmitter();
        /** Emits when the attached menu is requested to close */
        this.closed = new EventEmitter();
        /** The menu stack for this trigger and its sub-menus. */
        this._menuStack = new MenuStack();
        /** A reference to the overlay which manages the triggered menu */
        this._overlayRef = null;
        /** Emits when this trigger is destroyed. */
        this._destroyed = new Subject();
        /** Emits when the outside pointer events listener on the overlay should be stopped. */
        this._stopOutsideClicksListener = merge(this.closed, this._destroyed);
        this._registerCloseHandler();
        this._subscribeToMouseEnter();
    }
    /** Template reference variable to the menu this trigger opens */
    get menuPanel() {
        return this._menuPanel;
    }
    set menuPanel(panel) {
        // If the provided panel already has a stack, that means it already has a trigger configured.
        // Note however that there are some edge cases where two triggers **may** share the same menu,
        // e.g. two triggers in two separate menus.
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && (panel === null || panel === void 0 ? void 0 : panel._menuStack)) {
            throwExistingMenuStackError();
        }
        this._menuPanel = panel;
        if (this._menuPanel) {
            this._menuPanel._menuStack = this._getMenuStack();
        }
    }
    /** Open/close the attached menu if the trigger has been configured with one */
    toggle() {
        if (this.hasMenu()) {
            this.isMenuOpen() ? this.closeMenu() : this.openMenu();
        }
    }
    /** Open the attached menu. */
    openMenu() {
        if (!this.isMenuOpen()) {
            this.opened.next();
            this._overlayRef = this._overlayRef || this._overlay.create(this._getOverlayConfig());
            this._overlayRef.attach(this._getPortal());
            this._subscribeToOutsideClicks();
        }
    }
    /** Close the opened menu. */
    closeMenu() {
        if (this.isMenuOpen()) {
            this.closed.next();
            this._overlayRef.detach();
        }
        this._closeSiblingTriggers();
    }
    /** Return true if the trigger has an attached menu */
    hasMenu() {
        return !!this.menuPanel;
    }
    /** Whether the menu this button is a trigger for is open */
    isMenuOpen() {
        return this._overlayRef ? this._overlayRef.hasAttached() : false;
    }
    /**
     * Get a reference to the rendered Menu if the Menu is open and it is visible in the DOM.
     * @return the menu if it is open, otherwise undefined.
     */
    getMenu() {
        var _a;
        return (_a = this.menuPanel) === null || _a === void 0 ? void 0 : _a._menu;
    }
    /**
     * Subscribe to the mouseenter events and close any sibling menu items if this element is moused
     * into.
     */
    _subscribeToMouseEnter() {
        // Closes any sibling menu items and opens the menu associated with this trigger.
        const toggleMenus = () => this._ngZone.run(() => {
            this._closeSiblingTriggers();
            this.openMenu();
        });
        this._ngZone.runOutsideAngular(() => {
            fromEvent(this._elementRef.nativeElement, 'mouseenter')
                .pipe(filter(() => { var _a; return !((_a = this._getMenuStack()) === null || _a === void 0 ? void 0 : _a.isEmpty()) && !this.isMenuOpen(); }), takeUntil(this._destroyed))
                .subscribe(() => {
                if (this._menuAim) {
                    this._menuAim.toggle(toggleMenus);
                }
                else {
                    toggleMenus();
                }
            });
        });
    }
    /**
     * Handles keyboard events for the menu item, specifically opening/closing the attached menu and
     * focusing the appropriate submenu item.
     * @param event the keyboard event to handle
     */
    _toggleOnKeydown(event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const keyCode = event.keyCode;
        switch (keyCode) {
            case SPACE:
            case ENTER:
                event.preventDefault();
                this.toggle();
                (_b = (_a = this.menuPanel) === null || _a === void 0 ? void 0 : _a._menu) === null || _b === void 0 ? void 0 : _b.focusFirstItem('keyboard');
                break;
            case RIGHT_ARROW:
                if (this._parentMenu && this._isParentVertical()) {
                    event.preventDefault();
                    if (((_c = this._directionality) === null || _c === void 0 ? void 0 : _c.value) === 'rtl') {
                        this._getMenuStack().close(this._parentMenu, 2 /* currentItem */);
                    }
                    else {
                        this.openMenu();
                        (_e = (_d = this.menuPanel) === null || _d === void 0 ? void 0 : _d._menu) === null || _e === void 0 ? void 0 : _e.focusFirstItem('keyboard');
                    }
                }
                break;
            case LEFT_ARROW:
                if (this._parentMenu && this._isParentVertical()) {
                    event.preventDefault();
                    if (((_f = this._directionality) === null || _f === void 0 ? void 0 : _f.value) === 'rtl') {
                        this.openMenu();
                        (_h = (_g = this.menuPanel) === null || _g === void 0 ? void 0 : _g._menu) === null || _h === void 0 ? void 0 : _h.focusFirstItem('keyboard');
                    }
                    else {
                        this._getMenuStack().close(this._parentMenu, 2 /* currentItem */);
                    }
                }
                break;
            case DOWN_ARROW:
            case UP_ARROW:
                if (!this._isParentVertical()) {
                    event.preventDefault();
                    this.openMenu();
                    keyCode === DOWN_ARROW
                        ? (_k = (_j = this.menuPanel) === null || _j === void 0 ? void 0 : _j._menu) === null || _k === void 0 ? void 0 : _k.focusFirstItem('keyboard')
                        : (_m = (_l = this.menuPanel) === null || _l === void 0 ? void 0 : _l._menu) === null || _m === void 0 ? void 0 : _m.focusLastItem('keyboard');
                }
                break;
        }
    }
    /** Close out any sibling menu trigger menus. */
    _closeSiblingTriggers() {
        if (this._parentMenu) {
            const menuStack = this._getMenuStack();
            // If nothing was removed from the stack and the last element is not the parent item
            // that means that the parent menu is a menu bar since we don't put the menu bar on the
            // stack
            const isParentMenuBar = !menuStack.closeSubMenuOf(this._parentMenu) && menuStack.peek() !== this._parentMenu;
            if (isParentMenuBar) {
                menuStack.closeAll();
            }
        }
        else {
            this._getMenuStack().closeAll();
        }
    }
    /** Get the configuration object used to create the overlay */
    _getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this._getOverlayPositionStrategy(),
            scrollStrategy: this._overlay.scrollStrategies.block(),
            direction: this._directionality,
        });
    }
    /** Build the position strategy for the overlay which specifies where to place the menu */
    _getOverlayPositionStrategy() {
        return this._overlay
            .position()
            .flexibleConnectedTo(this._elementRef)
            .withPositions(this._getOverlayPositions());
    }
    /** Determine and return where to position the opened menu relative to the menu item */
    _getOverlayPositions() {
        // TODO: use a common positioning config from (possibly) cdk/overlay
        return !this._parentMenu || this._parentMenu.orientation === 'horizontal'
            ? [
                { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
                { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' },
                { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
                { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' },
            ]
            : [
                { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top' },
                { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'bottom' },
                { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'top' },
                { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'bottom' },
            ];
    }
    /**
     * Get the portal to be attached to the overlay which contains the menu. Allows for the menu
     * content to change dynamically and be reflected in the application.
     */
    _getPortal() {
        var _a, _b;
        const hasMenuContentChanged = ((_a = this.menuPanel) === null || _a === void 0 ? void 0 : _a._templateRef) !== ((_b = this._panelContent) === null || _b === void 0 ? void 0 : _b.templateRef);
        if (this.menuPanel && (!this._panelContent || hasMenuContentChanged)) {
            this._panelContent = new TemplatePortal(this.menuPanel._templateRef, this._viewContainerRef);
        }
        return this._panelContent;
    }
    /**
     * @return true if if the enclosing parent menu is configured in a vertical orientation.
     */
    _isParentVertical() {
        var _a;
        return ((_a = this._parentMenu) === null || _a === void 0 ? void 0 : _a.orientation) === 'vertical';
    }
    /**
     * Subscribe to the MenuStack close events if this is a standalone trigger and close out the menu
     * this triggers when requested.
     */
    _registerCloseHandler() {
        if (!this._parentMenu) {
            this._menuStack.closed.pipe(takeUntil(this._destroyed)).subscribe(item => {
                var _a;
                if (item === ((_a = this._menuPanel) === null || _a === void 0 ? void 0 : _a._menu)) {
                    this.closeMenu();
                }
            });
        }
    }
    /** Get the menu stack for this trigger - either from the parent or this trigger. */
    _getMenuStack() {
        var _a;
        // We use a function since at the construction of the MenuItemTrigger the parent Menu won't have
        // its menu stack set. Therefore we need to reference the menu stack from the parent each time
        // we want to use it.
        return ((_a = this._parentMenu) === null || _a === void 0 ? void 0 : _a._menuStack) || this._menuStack;
    }
    ngOnDestroy() {
        this._destroyOverlay();
        this._resetPanelMenuStack();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Set the menu panels menu stack back to null. */
    _resetPanelMenuStack() {
        // If a CdkMenuTrigger is placed in a submenu, each time the trigger is rendered (its parent
        // menu is opened) the panel setter for CdkMenuPanel is called. From the first render onward,
        // the attached CdkMenuPanel has the MenuStack set. Since we throw an error if a panel already
        // has a stack set, we want to reset the attached stack here to prevent the error from being
        // thrown if the trigger re-configures its attached panel (in the case where there is a 1:1
        // relationship between the panel and trigger).
        if (this._menuPanel) {
            this._menuPanel._menuStack = null;
        }
    }
    /**
     * Subscribe to the overlays outside pointer events stream and handle closing out the stack if a
     * click occurs outside the menus.
     */
    _subscribeToOutsideClicks() {
        if (this._overlayRef) {
            this._overlayRef
                .outsidePointerEvents()
                .pipe(takeUntil(this._stopOutsideClicksListener))
                .subscribe(event => {
                if (!isClickInsideMenuOverlay(event.target)) {
                    this._getMenuStack().closeAll();
                }
            });
        }
    }
    /** Destroy and unset the overlay reference it if exists */
    _destroyOverlay() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    }
}
CdkMenuItemTrigger.decorators = [
    { type: Directive, args: [{
                selector: '[cdkMenuTriggerFor]',
                exportAs: 'cdkMenuTriggerFor',
                host: {
                    '(keydown)': '_toggleOnKeydown($event)',
                    '(click)': 'toggle()',
                    'class': 'cdk-menu-trigger',
                    'aria-haspopup': 'menu',
                    '[attr.aria-expanded]': 'isMenuOpen()',
                },
            },] }
];
CdkMenuItemTrigger.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: Overlay },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CDK_MENU,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MENU_AIM,] }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
CdkMenuItemTrigger.propDecorators = {
    menuPanel: [{ type: Input, args: ['cdkMenuTriggerFor',] }],
    opened: [{ type: Output, args: ['cdkMenuOpened',] }],
    closed: [{ type: Output, args: ['cdkMenuClosed',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLXRyaWdnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L21lbnUtaXRlbS10cmlnZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLGdCQUFnQixFQUNoQixNQUFNLEVBRU4sUUFBUSxFQUNSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFFTCxPQUFPLEVBQ1AsYUFBYSxHQUdkLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbEcsT0FBTyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFPLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBWSxTQUFTLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBQyxRQUFRLEVBQVUsTUFBTSxZQUFZLENBQUM7QUFFN0M7O0dBRUc7QUFDSCxNQUFNLFVBQVUsd0JBQXdCLENBQUMsTUFBZTtJQUN0RCxPQUFPLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxh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TyxFQUFFLGtCQUFrQjtvQkFDM0IsZUFBZSxFQUFFLE1BQU07b0JBQ3ZCLHNCQUFzQixFQUFFLGNBQWM7aUJBQ3ZDO2FBQ0Y7OztZQS9EQyxVQUFVO1lBQ1YsZ0JBQWdCO1lBVWhCLE9BQU87WUFOUCxNQUFNOzRDQTRHSCxRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7NENBQzNCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtZQTNHeEIsY0FBYyx1QkE0R2pCLFFBQVE7Ozt3QkFqRFYsS0FBSyxTQUFDLG1CQUFtQjtxQkFzQnpCLE1BQU0sU0FBQyxlQUFlO3FCQUd0QixNQUFNLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBOZ1pvbmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtUZW1wbGF0ZVBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBPdmVybGF5UmVmLFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBDb25uZWN0ZWRQb3NpdGlvbixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1NQQUNFLCBFTlRFUiwgUklHSFRfQVJST1csIExFRlRfQVJST1csIERPV05fQVJST1csIFVQX0FSUk9XfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtmcm9tRXZlbnQsIFN1YmplY3QsIG1lcmdlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsLCBmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Q2RrTWVudVBhbmVsfSBmcm9tICcuL21lbnUtcGFuZWwnO1xuaW1wb3J0IHtNZW51LCBDREtfTUVOVX0gZnJvbSAnLi9tZW51LWludGVyZmFjZSc7XG5pbXBvcnQge0ZvY3VzTmV4dCwgTWVudVN0YWNrfSBmcm9tICcuL21lbnUtc3RhY2snO1xuaW1wb3J0IHt0aHJvd0V4aXN0aW5nTWVudVN0YWNrRXJyb3J9IGZyb20gJy4vbWVudS1lcnJvcnMnO1xuaW1wb3J0IHtNRU5VX0FJTSwgTWVudUFpbX0gZnJvbSAnLi9tZW51LWFpbSc7XG5cbi8qKlxuICogV2hldGhlciB0aGUgdGFyZ2V0IGVsZW1lbnQgaXMgYSBtZW51IGl0ZW0gdG8gYmUgaWdub3JlZCBieSB0aGUgb3ZlcmxheSBiYWNrZ3JvdW5kIGNsaWNrIGhhbmRsZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0NsaWNrSW5zaWRlTWVudU92ZXJsYXkodGFyZ2V0OiBFbGVtZW50KTogYm9vbGVhbiB7XG4gIHdoaWxlICh0YXJnZXQ/LnBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBpc09wZW5UcmlnZ2VyID1cbiAgICAgIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnICYmXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZGstbWVudS10cmlnZ2VyJyk7XG4gICAgY29uc3QgaXNPdmVybGF5TWVudSA9XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZGstbWVudScpICYmICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZGstbWVudS1pbmxpbmUnKTtcblxuICAgIGlmIChpc09wZW5UcmlnZ2VyIHx8IGlzT3ZlcmxheU1lbnUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgdG8gYmUgY29tYmluZWQgd2l0aCBDZGtNZW51SXRlbSB3aGljaCBvcGVucyB0aGUgTWVudSBpdCBpcyBib3VuZCB0by4gSWYgdGhlXG4gKiBlbGVtZW50IGlzIGluIGEgdG9wIGxldmVsIE1lbnVCYXIgaXQgd2lsbCBvcGVuIHRoZSBtZW51IG9uIGNsaWNrLCBvciBpZiBhIHNpYmxpbmcgaXMgYWxyZWFkeVxuICogb3BlbmVkIGl0IHdpbGwgb3BlbiBvbiBob3Zlci4gSWYgaXQgaXMgaW5zaWRlIG9mIGEgTWVudSBpdCB3aWxsIG9wZW4gdGhlIGF0dGFjaGVkIFN1Ym1lbnUgb25cbiAqIGhvdmVyIHJlZ2FyZGxlc3Mgb2YgaXRzIHNpYmxpbmcgc3RhdGUuXG4gKlxuICogVGhlIGRpcmVjdGl2ZSBtdXN0IGJlIHBsYWNlZCBhbG9uZyB3aXRoIHRoZSBgY2RrTWVudUl0ZW1gIGRpcmVjdGl2ZSBpbiBvcmRlciB0byBlbmFibGUgZnVsbFxuICogZnVuY3Rpb25hbGl0eS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka01lbnVUcmlnZ2VyRm9yXScsXG4gIGV4cG9ydEFzOiAnY2RrTWVudVRyaWdnZXJGb3InLFxuICBob3N0OiB7XG4gICAgJyhrZXlkb3duKSc6ICdfdG9nZ2xlT25LZXlkb3duKCRldmVudCknLFxuICAgICcoY2xpY2spJzogJ3RvZ2dsZSgpJyxcbiAgICAnY2xhc3MnOiAnY2RrLW1lbnUtdHJpZ2dlcicsXG4gICAgJ2FyaWEtaGFzcG9wdXAnOiAnbWVudScsXG4gICAgJ1thdHRyLmFyaWEtZXhwYW5kZWRdJzogJ2lzTWVudU9wZW4oKScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVJdGVtVHJpZ2dlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBUZW1wbGF0ZSByZWZlcmVuY2UgdmFyaWFibGUgdG8gdGhlIG1lbnUgdGhpcyB0cmlnZ2VyIG9wZW5zICovXG4gIEBJbnB1dCgnY2RrTWVudVRyaWdnZXJGb3InKVxuICBnZXQgbWVudVBhbmVsKCk6IENka01lbnVQYW5lbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnVQYW5lbDtcbiAgfVxuICBzZXQgbWVudVBhbmVsKHBhbmVsOiBDZGtNZW51UGFuZWwgfCB1bmRlZmluZWQpIHtcbiAgICAvLyBJZiB0aGUgcHJvdmlkZWQgcGFuZWwgYWxyZWFkeSBoYXMgYSBzdGFjaywgdGhhdCBtZWFucyBpdCBhbHJlYWR5IGhhcyBhIHRyaWdnZXIgY29uZmlndXJlZC5cbiAgICAvLyBOb3RlIGhvd2V2ZXIgdGhhdCB0aGVyZSBhcmUgc29tZSBlZGdlIGNhc2VzIHdoZXJlIHR3byB0cmlnZ2VycyAqKm1heSoqIHNoYXJlIHRoZSBzYW1lIG1lbnUsXG4gICAgLy8gZS5nLiB0d28gdHJpZ2dlcnMgaW4gdHdvIHNlcGFyYXRlIG1lbnVzLlxuICAgIGlmICgodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSAmJiBwYW5lbD8uX21lbnVTdGFjaykge1xuICAgICAgdGhyb3dFeGlzdGluZ01lbnVTdGFja0Vycm9yKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWVudVBhbmVsID0gcGFuZWw7XG4gICAgaWYgKHRoaXMuX21lbnVQYW5lbCkge1xuICAgICAgdGhpcy5fbWVudVBhbmVsLl9tZW51U3RhY2sgPSB0aGlzLl9nZXRNZW51U3RhY2soKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBNZW51UGFuZWwgdGhpcyB0cmlnZ2VyIHRvZ2dsZXMuICovXG4gIHByaXZhdGUgX21lbnVQYW5lbD86IENka01lbnVQYW5lbDtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgYXR0YWNoZWQgbWVudSBpcyByZXF1ZXN0ZWQgdG8gb3BlbiAqL1xuICBAT3V0cHV0KCdjZGtNZW51T3BlbmVkJykgcmVhZG9ubHkgb3BlbmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGF0dGFjaGVkIG1lbnUgaXMgcmVxdWVzdGVkIHRvIGNsb3NlICovXG4gIEBPdXRwdXQoJ2Nka01lbnVDbG9zZWQnKSByZWFkb25seSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKiogVGhlIG1lbnUgc3RhY2sgZm9yIHRoaXMgdHJpZ2dlciBhbmQgaXRzIHN1Yi1tZW51cy4gKi9cbiAgX21lbnVTdGFjazogTWVudVN0YWNrID0gbmV3IE1lbnVTdGFjaygpO1xuXG4gIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgb3ZlcmxheSB3aGljaCBtYW5hZ2VzIHRoZSB0cmlnZ2VyZWQgbWVudSAqL1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFRoZSBjb250ZW50IG9mIHRoZSBtZW51IHBhbmVsIG9wZW5lZCBieSB0aGlzIHRyaWdnZXIuICovXG4gIHByaXZhdGUgX3BhbmVsQ29udGVudDogVGVtcGxhdGVQb3J0YWw7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhpcyB0cmlnZ2VyIGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgb3V0c2lkZSBwb2ludGVyIGV2ZW50cyBsaXN0ZW5lciBvbiB0aGUgb3ZlcmxheSBzaG91bGQgYmUgc3RvcHBlZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfc3RvcE91dHNpZGVDbGlja3NMaXN0ZW5lciA9IG1lcmdlKHRoaXMuY2xvc2VkLCB0aGlzLl9kZXN0cm95ZWQpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByb3RlY3RlZCByZWFkb25seSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9vdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25nWm9uZTogTmdab25lLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQ0RLX01FTlUpIHByaXZhdGUgcmVhZG9ubHkgX3BhcmVudE1lbnU/OiBNZW51LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTUVOVV9BSU0pIHByaXZhdGUgcmVhZG9ubHkgX21lbnVBaW0/OiBNZW51QWltLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgX2RpcmVjdGlvbmFsaXR5PzogRGlyZWN0aW9uYWxpdHlcbiAgKSB7XG4gICAgdGhpcy5fcmVnaXN0ZXJDbG9zZUhhbmRsZXIoKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVUb01vdXNlRW50ZXIoKTtcbiAgfVxuXG4gIC8qKiBPcGVuL2Nsb3NlIHRoZSBhdHRhY2hlZCBtZW51IGlmIHRoZSB0cmlnZ2VyIGhhcyBiZWVuIGNvbmZpZ3VyZWQgd2l0aCBvbmUgKi9cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLmhhc01lbnUoKSkge1xuICAgICAgdGhpcy5pc01lbnVPcGVuKCkgPyB0aGlzLmNsb3NlTWVudSgpIDogdGhpcy5vcGVuTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBPcGVuIHRoZSBhdHRhY2hlZCBtZW51LiAqL1xuICBvcGVuTWVudSgpIHtcbiAgICBpZiAoIXRoaXMuaXNNZW51T3BlbigpKSB7XG4gICAgICB0aGlzLm9wZW5lZC5uZXh0KCk7XG5cbiAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5UmVmIHx8IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMuX2dldE92ZXJsYXlDb25maWcoKSk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmF0dGFjaCh0aGlzLl9nZXRQb3J0YWwoKSk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVUb091dHNpZGVDbGlja3MoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xvc2UgdGhlIG9wZW5lZCBtZW51LiAqL1xuICBjbG9zZU1lbnUoKSB7XG4gICAgaWYgKHRoaXMuaXNNZW51T3BlbigpKSB7XG4gICAgICB0aGlzLmNsb3NlZC5uZXh0KCk7XG5cbiAgICAgIHRoaXMuX292ZXJsYXlSZWYhLmRldGFjaCgpO1xuICAgIH1cbiAgICB0aGlzLl9jbG9zZVNpYmxpbmdUcmlnZ2VycygpO1xuICB9XG5cbiAgLyoqIFJldHVybiB0cnVlIGlmIHRoZSB0cmlnZ2VyIGhhcyBhbiBhdHRhY2hlZCBtZW51ICovXG4gIGhhc01lbnUoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5tZW51UGFuZWw7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgbWVudSB0aGlzIGJ1dHRvbiBpcyBhIHRyaWdnZXIgZm9yIGlzIG9wZW4gKi9cbiAgaXNNZW51T3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVJlZiA/IHRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgcmVuZGVyZWQgTWVudSBpZiB0aGUgTWVudSBpcyBvcGVuIGFuZCBpdCBpcyB2aXNpYmxlIGluIHRoZSBET00uXG4gICAqIEByZXR1cm4gdGhlIG1lbnUgaWYgaXQgaXMgb3Blbiwgb3RoZXJ3aXNlIHVuZGVmaW5lZC5cbiAgICovXG4gIGdldE1lbnUoKTogTWVudSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMubWVudVBhbmVsPy5fbWVudTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gdGhlIG1vdXNlZW50ZXIgZXZlbnRzIGFuZCBjbG9zZSBhbnkgc2libGluZyBtZW51IGl0ZW1zIGlmIHRoaXMgZWxlbWVudCBpcyBtb3VzZWRcbiAgICogaW50by5cbiAgICovXG4gIHByaXZhdGUgX3N1YnNjcmliZVRvTW91c2VFbnRlcigpIHtcbiAgICAvLyBDbG9zZXMgYW55IHNpYmxpbmcgbWVudSBpdGVtcyBhbmQgb3BlbnMgdGhlIG1lbnUgYXNzb2NpYXRlZCB3aXRoIHRoaXMgdHJpZ2dlci5cbiAgICBjb25zdCB0b2dnbGVNZW51cyA9ICgpID0+XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fY2xvc2VTaWJsaW5nVHJpZ2dlcnMoKTtcbiAgICAgICAgdGhpcy5vcGVuTWVudSgpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgZnJvbUV2ZW50KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuX2dldE1lbnVTdGFjaygpPy5pc0VtcHR5KCkgJiYgIXRoaXMuaXNNZW51T3BlbigpKSxcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9tZW51QWltKSB7XG4gICAgICAgICAgICB0aGlzLl9tZW51QWltLnRvZ2dsZSh0b2dnbGVNZW51cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvZ2dsZU1lbnVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIGtleWJvYXJkIGV2ZW50cyBmb3IgdGhlIG1lbnUgaXRlbSwgc3BlY2lmaWNhbGx5IG9wZW5pbmcvY2xvc2luZyB0aGUgYXR0YWNoZWQgbWVudSBhbmRcbiAgICogZm9jdXNpbmcgdGhlIGFwcHJvcHJpYXRlIHN1Ym1lbnUgaXRlbS5cbiAgICogQHBhcmFtIGV2ZW50IHRoZSBrZXlib2FyZCBldmVudCB0byBoYW5kbGVcbiAgICovXG4gIF90b2dnbGVPbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgIGNhc2UgU1BBQ0U6XG4gICAgICBjYXNlIEVOVEVSOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB0aGlzLm1lbnVQYW5lbD8uX21lbnU/LmZvY3VzRmlyc3RJdGVtKCdrZXlib2FyZCcpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudE1lbnUgJiYgdGhpcy5faXNQYXJlbnRWZXJ0aWNhbCgpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uYWxpdHk/LnZhbHVlID09PSAncnRsJykge1xuICAgICAgICAgICAgdGhpcy5fZ2V0TWVudVN0YWNrKCkuY2xvc2UodGhpcy5fcGFyZW50TWVudSwgRm9jdXNOZXh0LmN1cnJlbnRJdGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcGVuTWVudSgpO1xuICAgICAgICAgICAgdGhpcy5tZW51UGFuZWw/Ll9tZW51Py5mb2N1c0ZpcnN0SXRlbSgna2V5Ym9hcmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudE1lbnUgJiYgdGhpcy5faXNQYXJlbnRWZXJ0aWNhbCgpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uYWxpdHk/LnZhbHVlID09PSAncnRsJykge1xuICAgICAgICAgICAgdGhpcy5vcGVuTWVudSgpO1xuICAgICAgICAgICAgdGhpcy5tZW51UGFuZWw/Ll9tZW51Py5mb2N1c0ZpcnN0SXRlbSgna2V5Ym9hcmQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZ2V0TWVudVN0YWNrKCkuY2xvc2UodGhpcy5fcGFyZW50TWVudSwgRm9jdXNOZXh0LmN1cnJlbnRJdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgIGlmICghdGhpcy5faXNQYXJlbnRWZXJ0aWNhbCgpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLm9wZW5NZW51KCk7XG4gICAgICAgICAga2V5Q29kZSA9PT0gRE9XTl9BUlJPV1xuICAgICAgICAgICAgPyB0aGlzLm1lbnVQYW5lbD8uX21lbnU/LmZvY3VzRmlyc3RJdGVtKCdrZXlib2FyZCcpXG4gICAgICAgICAgICA6IHRoaXMubWVudVBhbmVsPy5fbWVudT8uZm9jdXNMYXN0SXRlbSgna2V5Ym9hcmQnKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKiogQ2xvc2Ugb3V0IGFueSBzaWJsaW5nIG1lbnUgdHJpZ2dlciBtZW51cy4gKi9cbiAgcHJpdmF0ZSBfY2xvc2VTaWJsaW5nVHJpZ2dlcnMoKSB7XG4gICAgaWYgKHRoaXMuX3BhcmVudE1lbnUpIHtcbiAgICAgIGNvbnN0IG1lbnVTdGFjayA9IHRoaXMuX2dldE1lbnVTdGFjaygpO1xuXG4gICAgICAvLyBJZiBub3RoaW5nIHdhcyByZW1vdmVkIGZyb20gdGhlIHN0YWNrIGFuZCB0aGUgbGFzdCBlbGVtZW50IGlzIG5vdCB0aGUgcGFyZW50IGl0ZW1cbiAgICAgIC8vIHRoYXQgbWVhbnMgdGhhdCB0aGUgcGFyZW50IG1lbnUgaXMgYSBtZW51IGJhciBzaW5jZSB3ZSBkb24ndCBwdXQgdGhlIG1lbnUgYmFyIG9uIHRoZVxuICAgICAgLy8gc3RhY2tcbiAgICAgIGNvbnN0IGlzUGFyZW50TWVudUJhciA9XG4gICAgICAgICFtZW51U3RhY2suY2xvc2VTdWJNZW51T2YodGhpcy5fcGFyZW50TWVudSkgJiYgbWVudVN0YWNrLnBlZWsoKSAhPT0gdGhpcy5fcGFyZW50TWVudTtcblxuICAgICAgaWYgKGlzUGFyZW50TWVudUJhcikge1xuICAgICAgICBtZW51U3RhY2suY2xvc2VBbGwoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ2V0TWVudVN0YWNrKCkuY2xvc2VBbGwoKTtcbiAgICB9XG4gIH1cblxuICAvKiogR2V0IHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCB1c2VkIHRvIGNyZWF0ZSB0aGUgb3ZlcmxheSAqL1xuICBwcml2YXRlIF9nZXRPdmVybGF5Q29uZmlnKCkge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9nZXRPdmVybGF5UG9zaXRpb25TdHJhdGVneSgpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5ibG9jaygpLFxuICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXJlY3Rpb25hbGl0eSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBCdWlsZCB0aGUgcG9zaXRpb24gc3RyYXRlZ3kgZm9yIHRoZSBvdmVybGF5IHdoaWNoIHNwZWNpZmllcyB3aGVyZSB0byBwbGFjZSB0aGUgbWVudSAqL1xuICBwcml2YXRlIF9nZXRPdmVybGF5UG9zaXRpb25TdHJhdGVneSgpOiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5fZWxlbWVudFJlZilcbiAgICAgIC53aXRoUG9zaXRpb25zKHRoaXMuX2dldE92ZXJsYXlQb3NpdGlvbnMoKSk7XG4gIH1cblxuICAvKiogRGV0ZXJtaW5lIGFuZCByZXR1cm4gd2hlcmUgdG8gcG9zaXRpb24gdGhlIG9wZW5lZCBtZW51IHJlbGF0aXZlIHRvIHRoZSBtZW51IGl0ZW0gKi9cbiAgcHJpdmF0ZSBfZ2V0T3ZlcmxheVBvc2l0aW9ucygpOiBDb25uZWN0ZWRQb3NpdGlvbltdIHtcbiAgICAvLyBUT0RPOiB1c2UgYSBjb21tb24gcG9zaXRpb25pbmcgY29uZmlnIGZyb20gKHBvc3NpYmx5KSBjZGsvb3ZlcmxheVxuICAgIHJldHVybiAhdGhpcy5fcGFyZW50TWVudSB8fCB0aGlzLl9wYXJlbnRNZW51Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgID8gW1xuICAgICAgICAgIHtvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJywgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJ30sXG4gICAgICAgICAge29yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nfSxcbiAgICAgICAgICB7b3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJ30sXG4gICAgICAgICAge29yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAndG9wJywgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbSd9LFxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICB7b3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfSxcbiAgICAgICAgICB7b3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nfSxcbiAgICAgICAgICB7b3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnfSxcbiAgICAgICAgICB7b3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ2JvdHRvbScsIG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdib3R0b20nfSxcbiAgICAgICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBvcnRhbCB0byBiZSBhdHRhY2hlZCB0byB0aGUgb3ZlcmxheSB3aGljaCBjb250YWlucyB0aGUgbWVudS4gQWxsb3dzIGZvciB0aGUgbWVudVxuICAgKiBjb250ZW50IHRvIGNoYW5nZSBkeW5hbWljYWxseSBhbmQgYmUgcmVmbGVjdGVkIGluIHRoZSBhcHBsaWNhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX2dldFBvcnRhbCgpIHtcbiAgICBjb25zdCBoYXNNZW51Q29udGVudENoYW5nZWQgPSB0aGlzLm1lbnVQYW5lbD8uX3RlbXBsYXRlUmVmICE9PSB0aGlzLl9wYW5lbENvbnRlbnQ/LnRlbXBsYXRlUmVmO1xuICAgIGlmICh0aGlzLm1lbnVQYW5lbCAmJiAoIXRoaXMuX3BhbmVsQ29udGVudCB8fCBoYXNNZW51Q29udGVudENoYW5nZWQpKSB7XG4gICAgICB0aGlzLl9wYW5lbENvbnRlbnQgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5tZW51UGFuZWwuX3RlbXBsYXRlUmVmLCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcGFuZWxDb250ZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gdHJ1ZSBpZiBpZiB0aGUgZW5jbG9zaW5nIHBhcmVudCBtZW51IGlzIGNvbmZpZ3VyZWQgaW4gYSB2ZXJ0aWNhbCBvcmllbnRhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX2lzUGFyZW50VmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudE1lbnU/Lm9yaWVudGF0aW9uID09PSAndmVydGljYWwnO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgTWVudVN0YWNrIGNsb3NlIGV2ZW50cyBpZiB0aGlzIGlzIGEgc3RhbmRhbG9uZSB0cmlnZ2VyIGFuZCBjbG9zZSBvdXQgdGhlIG1lbnVcbiAgICogdGhpcyB0cmlnZ2VycyB3aGVuIHJlcXVlc3RlZC5cbiAgICovXG4gIHByaXZhdGUgX3JlZ2lzdGVyQ2xvc2VIYW5kbGVyKCkge1xuICAgIGlmICghdGhpcy5fcGFyZW50TWVudSkge1xuICAgICAgdGhpcy5fbWVudVN0YWNrLmNsb3NlZC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95ZWQpKS5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtID09PSB0aGlzLl9tZW51UGFuZWw/Ll9tZW51KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEdldCB0aGUgbWVudSBzdGFjayBmb3IgdGhpcyB0cmlnZ2VyIC0gZWl0aGVyIGZyb20gdGhlIHBhcmVudCBvciB0aGlzIHRyaWdnZXIuICovXG4gIHByaXZhdGUgX2dldE1lbnVTdGFjaygpIHtcbiAgICAvLyBXZSB1c2UgYSBmdW5jdGlvbiBzaW5jZSBhdCB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSBNZW51SXRlbVRyaWdnZXIgdGhlIHBhcmVudCBNZW51IHdvbid0IGhhdmVcbiAgICAvLyBpdHMgbWVudSBzdGFjayBzZXQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvIHJlZmVyZW5jZSB0aGUgbWVudSBzdGFjayBmcm9tIHRoZSBwYXJlbnQgZWFjaCB0aW1lXG4gICAgLy8gd2Ugd2FudCB0byB1c2UgaXQuXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudE1lbnU/Ll9tZW51U3RhY2sgfHwgdGhpcy5fbWVudVN0YWNrO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveU92ZXJsYXkoKTtcbiAgICB0aGlzLl9yZXNldFBhbmVsTWVudVN0YWNrKCk7XG5cbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgLyoqIFNldCB0aGUgbWVudSBwYW5lbHMgbWVudSBzdGFjayBiYWNrIHRvIG51bGwuICovXG4gIHByaXZhdGUgX3Jlc2V0UGFuZWxNZW51U3RhY2soKSB7XG4gICAgLy8gSWYgYSBDZGtNZW51VHJpZ2dlciBpcyBwbGFjZWQgaW4gYSBzdWJtZW51LCBlYWNoIHRpbWUgdGhlIHRyaWdnZXIgaXMgcmVuZGVyZWQgKGl0cyBwYXJlbnRcbiAgICAvLyBtZW51IGlzIG9wZW5lZCkgdGhlIHBhbmVsIHNldHRlciBmb3IgQ2RrTWVudVBhbmVsIGlzIGNhbGxlZC4gRnJvbSB0aGUgZmlyc3QgcmVuZGVyIG9ud2FyZCxcbiAgICAvLyB0aGUgYXR0YWNoZWQgQ2RrTWVudVBhbmVsIGhhcyB0aGUgTWVudVN0YWNrIHNldC4gU2luY2Ugd2UgdGhyb3cgYW4gZXJyb3IgaWYgYSBwYW5lbCBhbHJlYWR5XG4gICAgLy8gaGFzIGEgc3RhY2sgc2V0LCB3ZSB3YW50IHRvIHJlc2V0IHRoZSBhdHRhY2hlZCBzdGFjayBoZXJlIHRvIHByZXZlbnQgdGhlIGVycm9yIGZyb20gYmVpbmdcbiAgICAvLyB0aHJvd24gaWYgdGhlIHRyaWdnZXIgcmUtY29uZmlndXJlcyBpdHMgYXR0YWNoZWQgcGFuZWwgKGluIHRoZSBjYXNlIHdoZXJlIHRoZXJlIGlzIGEgMToxXG4gICAgLy8gcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIHBhbmVsIGFuZCB0cmlnZ2VyKS5cbiAgICBpZiAodGhpcy5fbWVudVBhbmVsKSB7XG4gICAgICB0aGlzLl9tZW51UGFuZWwuX21lbnVTdGFjayA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byB0aGUgb3ZlcmxheXMgb3V0c2lkZSBwb2ludGVyIGV2ZW50cyBzdHJlYW0gYW5kIGhhbmRsZSBjbG9zaW5nIG91dCB0aGUgc3RhY2sgaWYgYVxuICAgKiBjbGljayBvY2N1cnMgb3V0c2lkZSB0aGUgbWVudXMuXG4gICAqL1xuICBwcml2YXRlIF9zdWJzY3JpYmVUb091dHNpZGVDbGlja3MoKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWZcbiAgICAgICAgLm91dHNpZGVQb2ludGVyRXZlbnRzKClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX3N0b3BPdXRzaWRlQ2xpY2tzTGlzdGVuZXIpKVxuICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAoIWlzQ2xpY2tJbnNpZGVNZW51T3ZlcmxheShldmVudC50YXJnZXQgYXMgRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2dldE1lbnVTdGFjaygpLmNsb3NlQWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogRGVzdHJveSBhbmQgdW5zZXQgdGhlIG92ZXJsYXkgcmVmZXJlbmNlIGl0IGlmIGV4aXN0cyAqL1xuICBwcml2YXRlIF9kZXN0cm95T3ZlcmxheSgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==