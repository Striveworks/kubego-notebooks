/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input, Output, EventEmitter, QueryList, ContentChildren, Optional, NgZone, HostListener, ElementRef, Inject, Self, } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { LEFT_ARROW, RIGHT_ARROW, UP_ARROW, DOWN_ARROW, ESCAPE, TAB, hasModifierKey, } from '@angular/cdk/keycodes';
import { Directionality } from '@angular/cdk/bidi';
import { merge } from 'rxjs';
import { take, takeUntil, startWith, mergeMap, mapTo, mergeAll, switchMap } from 'rxjs/operators';
import { CdkMenuGroup } from './menu-group';
import { CdkMenuPanel } from './menu-panel';
import { CDK_MENU } from './menu-interface';
import { CdkMenuItem } from './menu-item';
import { NoopMenuStack } from './menu-stack';
import { PointerFocusTracker } from './pointer-focus-tracker';
import { MENU_AIM } from './menu-aim';
/**
 * Directive which configures the element as a Menu which should contain child elements marked as
 * CdkMenuItem or CdkMenuGroup. Sets the appropriate role and aria-attributes for a menu and
 * contains accessible keyboard and mouse handling logic.
 *
 * It also acts as a RadioGroup for elements marked with role `menuitemradio`.
 */
export class CdkMenu extends CdkMenuGroup {
    constructor(_ngZone, _elementRef, _menuAim, _dir, 
    // `CdkMenuPanel` is always used in combination with a `CdkMenu`.
    // tslint:disable-next-line: lightweight-tokens
    _menuPanel) {
        super();
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._menuAim = _menuAim;
        this._dir = _dir;
        this._menuPanel = _menuPanel;
        /**
         * Sets the aria-orientation attribute and determines where menus will be opened.
         * Does not affect styling/layout.
         */
        this.orientation = 'vertical';
        /** Event emitted when the menu is closed. */
        this.closed = new EventEmitter();
        // We provide a default MenuStack implementation in case the menu is an inline menu.
        // For Menus part of a MenuBar nested within a MenuPanel this will be overwritten
        // to the correct parent MenuStack.
        /** Track the Menus making up the open menu stack. */
        this._menuStack = new NoopMenuStack();
    }
    ngOnInit() {
        this._registerWithParentPanel();
    }
    ngAfterContentInit() {
        var _a;
        super.ngAfterContentInit();
        this._completeChangeEmitter();
        this._setKeyManager();
        this._subscribeToMenuOpen();
        this._subscribeToMenuStack();
        this._subscribeToMouseManager();
        (_a = this._menuAim) === null || _a === void 0 ? void 0 : _a.initialize(this, this._pointerTracker);
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    /** Place focus on the first MenuItem in the menu and set the focus origin. */
    focusFirstItem(focusOrigin = 'program') {
        this._keyManager.setFocusOrigin(focusOrigin);
        this._keyManager.setFirstItemActive();
    }
    /** Place focus on the last MenuItem in the menu and set the focus origin. */
    focusLastItem(focusOrigin = 'program') {
        this._keyManager.setFocusOrigin(focusOrigin);
        this._keyManager.setLastItemActive();
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    /** Handle keyboard events for the Menu. */
    _handleKeyEvent(event) {
        const keyManager = this._keyManager;
        switch (event.keyCode) {
            case LEFT_ARROW:
            case RIGHT_ARROW:
                if (this._isHorizontal()) {
                    event.preventDefault();
                    keyManager.setFocusOrigin('keyboard');
                    keyManager.onKeydown(event);
                }
                break;
            case UP_ARROW:
            case DOWN_ARROW:
                if (!this._isHorizontal()) {
                    event.preventDefault();
                    keyManager.setFocusOrigin('keyboard');
                    keyManager.onKeydown(event);
                }
                break;
            case ESCAPE:
                if (!hasModifierKey(event)) {
                    event.preventDefault();
                    this._menuStack.close(this, 2 /* currentItem */);
                }
                break;
            case TAB:
                this._menuStack.closeAll();
                break;
            default:
                keyManager.onKeydown(event);
        }
    }
    /** Register this menu with its enclosing parent menu panel */
    _registerWithParentPanel() {
        var _a;
        (_a = this._getMenuPanel()) === null || _a === void 0 ? void 0 : _a._registerMenu(this);
    }
    /**
     * Get the enclosing CdkMenuPanel defaulting to the injected reference over the developer
     * provided reference.
     */
    _getMenuPanel() {
        return this._menuPanel || this._explicitPanel;
    }
    /**
     * Complete the change emitter if there are any nested MenuGroups or register to complete the
     * change emitter if a MenuGroup is rendered at some point
     */
    _completeChangeEmitter() {
        if (this._hasNestedGroups()) {
            this.change.complete();
        }
        else {
            this._nestedGroups.changes.pipe(take(1)).subscribe(() => this.change.complete());
        }
    }
    /** Return true if there are nested CdkMenuGroup elements within the Menu */
    _hasNestedGroups() {
        // view engine has a bug where @ContentChildren will return the current element
        // along with children if the selectors match - not just the children.
        // Here, if there is at least one element, we check to see if the first element is a CdkMenu in
        // order to ensure that we return true iff there are child CdkMenuGroup elements.
        return this._nestedGroups.length > 0 && !(this._nestedGroups.first instanceof CdkMenu);
    }
    /** Setup the FocusKeyManager with the correct orientation for the menu. */
    _setKeyManager() {
        var _a;
        this._keyManager = new FocusKeyManager(this._allItems)
            .withWrap()
            .withTypeAhead()
            .withHomeAndEnd();
        if (this._isHorizontal()) {
            this._keyManager.withHorizontalOrientation(((_a = this._dir) === null || _a === void 0 ? void 0 : _a.value) || 'ltr');
        }
        else {
            this._keyManager.withVerticalOrientation();
        }
    }
    /**
     * Set the PointerFocusTracker and ensure that when mouse focus changes the key manager is updated
     * with the latest menu item under mouse focus.
     */
    _subscribeToMouseManager() {
        this._ngZone.runOutsideAngular(() => {
            this._pointerTracker = new PointerFocusTracker(this._allItems);
            this._pointerTracker.entered
                .pipe(takeUntil(this.closed))
                .subscribe(item => this._keyManager.setActiveItem(item));
        });
    }
    /** Subscribe to the MenuStack close and empty observables. */
    _subscribeToMenuStack() {
        this._menuStack.closed
            .pipe(takeUntil(this.closed))
            .subscribe(item => this._closeOpenMenu(item));
        this._menuStack.emptied
            .pipe(takeUntil(this.closed))
            .subscribe(event => this._toggleMenuFocus(event));
    }
    /**
     * Close the open menu if the current active item opened the requested MenuStackItem.
     * @param item the MenuStackItem requested to be closed.
     */
    _closeOpenMenu(menu) {
        var _a, _b, _c;
        const keyManager = this._keyManager;
        const trigger = this._openItem;
        if (menu === ((_a = trigger === null || trigger === void 0 ? void 0 : trigger.getMenuTrigger()) === null || _a === void 0 ? void 0 : _a.getMenu())) {
            (_b = trigger === null || trigger === void 0 ? void 0 : trigger.getMenuTrigger()) === null || _b === void 0 ? void 0 : _b.closeMenu();
            // If the user has moused over a sibling item we want to focus the element under mouse focus
            // not the trigger which previously opened the now closed menu.
            if (trigger) {
                keyManager.setActiveItem(((_c = this._pointerTracker) === null || _c === void 0 ? void 0 : _c.activeElement) || trigger);
            }
        }
    }
    /** Set focus the either the current, previous or next item based on the FocusNext event. */
    _toggleMenuFocus(event) {
        const keyManager = this._keyManager;
        switch (event) {
            case 0 /* nextItem */:
                keyManager.setFocusOrigin('keyboard');
                keyManager.setNextItemActive();
                break;
            case 1 /* previousItem */:
                keyManager.setFocusOrigin('keyboard');
                keyManager.setPreviousItemActive();
                break;
            case 2 /* currentItem */:
                if (keyManager.activeItem) {
                    keyManager.setFocusOrigin('keyboard');
                    keyManager.setActiveItem(keyManager.activeItem);
                }
                break;
        }
    }
    // TODO(andy9775): remove duplicate logic between menu an menu bar
    /**
     * Subscribe to the menu trigger's open events in order to track the trigger which opened the menu
     * and stop tracking it when the menu is closed.
     */
    _subscribeToMenuOpen() {
        const exitCondition = merge(this._allItems.changes, this.closed);
        this._allItems.changes
            .pipe(startWith(this._allItems), mergeMap((list) => list
            .filter(item => item.hasMenu())
            .map(item => item.getMenuTrigger().opened.pipe(mapTo(item), takeUntil(exitCondition)))), mergeAll(), switchMap((item) => {
            this._openItem = item;
            return item.getMenuTrigger().closed;
        }), takeUntil(this.closed))
            .subscribe(() => (this._openItem = undefined));
    }
    /** Return true if this menu has been configured in a horizontal orientation. */
    _isHorizontal() {
        return this.orientation === 'horizontal';
    }
    /**
     * Return true if this menu is an inline menu. That is, it does not exist in a pop-up and is
     * always visible in the dom.
     */
    _isInline() {
        // NoopMenuStack is the default. If this menu is not inline than the NoopMenuStack is replaced
        // automatically.
        return this._menuStack instanceof NoopMenuStack;
    }
    ngOnDestroy() {
        var _a;
        this._emitClosedEvent();
        (_a = this._pointerTracker) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    /** Emit and complete the closed event emitter */
    _emitClosedEvent() {
        this.closed.next();
        this.closed.complete();
    }
}
CdkMenu.decorators = [
    { type: Directive, args: [{
                selector: '[cdkMenu]',
                exportAs: 'cdkMenu',
                host: {
                    '[tabindex]': '_isInline() ? 0 : null',
                    'role': 'menu',
                    'class': 'cdk-menu',
                    '[class.cdk-menu-inline]': '_isInline()',
                    '[attr.aria-orientation]': 'orientation',
                },
                providers: [
                    { provide: CdkMenuGroup, useExisting: CdkMenu },
                    { provide: CDK_MENU, useExisting: CdkMenu },
                ],
            },] }
];
CdkMenu.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Self }, { type: Optional }, { type: Inject, args: [MENU_AIM,] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: CdkMenuPanel, decorators: [{ type: Optional }] }
];
CdkMenu.propDecorators = {
    orientation: [{ type: Input, args: ['cdkMenuOrientation',] }],
    closed: [{ type: Output }],
    _nestedGroups: [{ type: ContentChildren, args: [CdkMenuGroup, { descendants: true },] }],
    _allItems: [{ type: ContentChildren, args: [CdkMenuItem, { descendants: true },] }],
    _explicitPanel: [{ type: Input, args: ['cdkMenuPanel',] }],
    focusFirstItem: [{ type: HostListener, args: ['focus',] }],
    _handleKeyEvent: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL21lbnUvbWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFNBQVMsRUFDVCxlQUFlLEVBR2YsUUFBUSxFQUVSLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixJQUFJLEdBQ0wsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGVBQWUsRUFBYyxNQUFNLG1CQUFtQixDQUFDO0FBQy9ELE9BQU8sRUFDTCxVQUFVLEVBQ1YsV0FBVyxFQUNYLFFBQVEsRUFDUixVQUFVLEVBQ1YsTUFBTSxFQUNOLEdBQUcsRUFDSCxjQUFjLEdBQ2YsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBTyxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBc0MsYUFBYSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFB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QyxXQUFXLEVBQUUsSUFBSSxFQUFDOzZCQWFoRCxLQUFLLFNBQUMsY0FBYzs2QkFrQ3BCLFlBQVksU0FBQyxPQUFPOzhCQWlCcEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgUXVlcnlMaXN0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE9uSW5pdCxcbiAgTmdab25lLFxuICBIb3N0TGlzdGVuZXIsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0ZvY3VzS2V5TWFuYWdlciwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIExFRlRfQVJST1csXG4gIFJJR0hUX0FSUk9XLFxuICBVUF9BUlJPVyxcbiAgRE9XTl9BUlJPVyxcbiAgRVNDQVBFLFxuICBUQUIsXG4gIGhhc01vZGlmaWVyS2V5LFxufSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHttZXJnZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2UsIHRha2VVbnRpbCwgc3RhcnRXaXRoLCBtZXJnZU1hcCwgbWFwVG8sIG1lcmdlQWxsLCBzd2l0Y2hNYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Q2RrTWVudUdyb3VwfSBmcm9tICcuL21lbnUtZ3JvdXAnO1xuaW1wb3J0IHtDZGtNZW51UGFuZWx9IGZyb20gJy4vbWVudS1wYW5lbCc7XG5pbXBvcnQge01lbnUsIENES19NRU5VfSBmcm9tICcuL21lbnUtaW50ZXJmYWNlJztcbmltcG9ydCB7Q2RrTWVudUl0ZW19IGZyb20gJy4vbWVudS1pdGVtJztcbmltcG9ydCB7TWVudVN0YWNrLCBNZW51U3RhY2tJdGVtLCBGb2N1c05leHQsIE5vb3BNZW51U3RhY2t9IGZyb20gJy4vbWVudS1zdGFjayc7XG5pbXBvcnQge1BvaW50ZXJGb2N1c1RyYWNrZXJ9IGZyb20gJy4vcG9pbnRlci1mb2N1cy10cmFja2VyJztcbmltcG9ydCB7TUVOVV9BSU0sIE1lbnVBaW19IGZyb20gJy4vbWVudS1haW0nO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB3aGljaCBjb25maWd1cmVzIHRoZSBlbGVtZW50IGFzIGEgTWVudSB3aGljaCBzaG91bGQgY29udGFpbiBjaGlsZCBlbGVtZW50cyBtYXJrZWQgYXNcbiAqIENka01lbnVJdGVtIG9yIENka01lbnVHcm91cC4gU2V0cyB0aGUgYXBwcm9wcmlhdGUgcm9sZSBhbmQgYXJpYS1hdHRyaWJ1dGVzIGZvciBhIG1lbnUgYW5kXG4gKiBjb250YWlucyBhY2Nlc3NpYmxlIGtleWJvYXJkIGFuZCBtb3VzZSBoYW5kbGluZyBsb2dpYy5cbiAqXG4gKiBJdCBhbHNvIGFjdHMgYXMgYSBSYWRpb0dyb3VwIGZvciBlbGVtZW50cyBtYXJrZWQgd2l0aCByb2xlIGBtZW51aXRlbXJhZGlvYC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka01lbnVdJyxcbiAgZXhwb3J0QXM6ICdjZGtNZW51JyxcbiAgaG9zdDoge1xuICAgICdbdGFiaW5kZXhdJzogJ19pc0lubGluZSgpID8gMCA6IG51bGwnLFxuICAgICdyb2xlJzogJ21lbnUnLFxuICAgICdjbGFzcyc6ICdjZGstbWVudScsXG4gICAgJ1tjbGFzcy5jZGstbWVudS1pbmxpbmVdJzogJ19pc0lubGluZSgpJyxcbiAgICAnW2F0dHIuYXJpYS1vcmllbnRhdGlvbl0nOiAnb3JpZW50YXRpb24nLFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICB7cHJvdmlkZTogQ2RrTWVudUdyb3VwLCB1c2VFeGlzdGluZzogQ2RrTWVudX0sXG4gICAge3Byb3ZpZGU6IENES19NRU5VLCB1c2VFeGlzdGluZzogQ2RrTWVudX0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnUgZXh0ZW5kcyBDZGtNZW51R3JvdXAgaW1wbGVtZW50cyBNZW51LCBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhcmlhLW9yaWVudGF0aW9uIGF0dHJpYnV0ZSBhbmQgZGV0ZXJtaW5lcyB3aGVyZSBtZW51cyB3aWxsIGJlIG9wZW5lZC5cbiAgICogRG9lcyBub3QgYWZmZWN0IHN0eWxpbmcvbGF5b3V0LlxuICAgKi9cbiAgQElucHV0KCdjZGtNZW51T3JpZW50YXRpb24nKSBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICd2ZXJ0aWNhbCc7XG5cbiAgLyoqIEV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgbWVudSBpcyBjbG9zZWQuICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjx2b2lkIHwgJ2NsaWNrJyB8ICd0YWInIHwgJ2VzY2FwZSc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIFdlIHByb3ZpZGUgYSBkZWZhdWx0IE1lbnVTdGFjayBpbXBsZW1lbnRhdGlvbiBpbiBjYXNlIHRoZSBtZW51IGlzIGFuIGlubGluZSBtZW51LlxuICAvLyBGb3IgTWVudXMgcGFydCBvZiBhIE1lbnVCYXIgbmVzdGVkIHdpdGhpbiBhIE1lbnVQYW5lbCB0aGlzIHdpbGwgYmUgb3ZlcndyaXR0ZW5cbiAgLy8gdG8gdGhlIGNvcnJlY3QgcGFyZW50IE1lbnVTdGFjay5cbiAgLyoqIFRyYWNrIHRoZSBNZW51cyBtYWtpbmcgdXAgdGhlIG9wZW4gbWVudSBzdGFjay4gKi9cbiAgX21lbnVTdGFjazogTWVudVN0YWNrID0gbmV3IE5vb3BNZW51U3RhY2soKTtcblxuICAvKiogSGFuZGxlcyBrZXlib2FyZCBldmVudHMgZm9yIHRoZSBtZW51LiAqL1xuICBwcml2YXRlIF9rZXlNYW5hZ2VyOiBGb2N1c0tleU1hbmFnZXI8Q2RrTWVudUl0ZW0+O1xuXG4gIC8qKiBNYW5hZ2VzIGl0ZW1zIHVuZGVyIG1vdXNlIGZvY3VzLiAqL1xuICBwcml2YXRlIF9wb2ludGVyVHJhY2tlcj86IFBvaW50ZXJGb2N1c1RyYWNrZXI8Q2RrTWVudUl0ZW0+O1xuXG4gIC8qKiBMaXN0IG9mIG5lc3RlZCBDZGtNZW51R3JvdXAgZWxlbWVudHMgKi9cbiAgQENvbnRlbnRDaGlsZHJlbihDZGtNZW51R3JvdXAsIHtkZXNjZW5kYW50czogdHJ1ZX0pXG4gIHByaXZhdGUgcmVhZG9ubHkgX25lc3RlZEdyb3VwczogUXVlcnlMaXN0PENka01lbnVHcm91cD47XG5cbiAgLyoqIEFsbCBjaGlsZCBNZW51SXRlbSBlbGVtZW50cyBuZXN0ZWQgaW4gdGhpcyBNZW51LiAqL1xuICBAQ29udGVudENoaWxkcmVuKENka01lbnVJdGVtLCB7ZGVzY2VuZGFudHM6IHRydWV9KVxuICBwcml2YXRlIHJlYWRvbmx5IF9hbGxJdGVtczogUXVlcnlMaXN0PENka01lbnVJdGVtPjtcblxuICAvKiogVGhlIE1lbnUgSXRlbSB3aGljaCB0cmlnZ2VyZWQgdGhlIG9wZW4gc3VibWVudS4gKi9cbiAgcHJpdmF0ZSBfb3Blbkl0ZW0/OiBDZGtNZW51SXRlbTtcblxuICAvKipcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIGVuY2xvc2luZyBwYXJlbnQgbWVudSBwYW5lbC5cbiAgICpcbiAgICogUmVxdWlyZWQgdG8gYmUgc2V0IHdoZW4gdXNpbmcgVmlld0VuZ2luZSBzaW5jZSBWaWV3RW5naW5lIGRvZXMgc3VwcG9ydCBpbmplY3RpbmcgYSByZWZlcmVuY2UgdG9cbiAgICogdGhlIHBhcmVudCBkaXJlY3RpdmUgaWYgdGhlIHBhcmVudCBkaXJlY3RpdmUgaXMgcGxhY2VkIG9uIGFuIGBuZy10ZW1wbGF0ZWAuIElmIHVzaW5nIEl2eSwgdGhlXG4gICAqIGluamVjdGVkIHZhbHVlIHdpbGwgYmUgdXNlZCBvdmVyIHRoaXMgb25lLlxuICAgKi9cbiAgQElucHV0KCdjZGtNZW51UGFuZWwnKSBwcml2YXRlIHJlYWRvbmx5IF9leHBsaWNpdFBhbmVsPzogQ2RrTWVudVBhbmVsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25nWm9uZTogTmdab25lLFxuICAgIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAU2VsZigpIEBPcHRpb25hbCgpIEBJbmplY3QoTUVOVV9BSU0pIHByaXZhdGUgcmVhZG9ubHkgX21lbnVBaW0/OiBNZW51QWltLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgX2Rpcj86IERpcmVjdGlvbmFsaXR5LFxuICAgIC8vIGBDZGtNZW51UGFuZWxgIGlzIGFsd2F5cyB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggYSBgQ2RrTWVudWAuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBsaWdodHdlaWdodC10b2tlbnNcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJlYWRvbmx5IF9tZW51UGFuZWw/OiBDZGtNZW51UGFuZWxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlZ2lzdGVyV2l0aFBhcmVudFBhbmVsKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc3VwZXIubmdBZnRlckNvbnRlbnRJbml0KCk7XG5cbiAgICB0aGlzLl9jb21wbGV0ZUNoYW5nZUVtaXR0ZXIoKTtcbiAgICB0aGlzLl9zZXRLZXlNYW5hZ2VyKCk7XG4gICAgdGhpcy5fc3Vic2NyaWJlVG9NZW51T3BlbigpO1xuICAgIHRoaXMuX3N1YnNjcmliZVRvTWVudVN0YWNrKCk7XG4gICAgdGhpcy5fc3Vic2NyaWJlVG9Nb3VzZU1hbmFnZXIoKTtcblxuICAgIHRoaXMuX21lbnVBaW0/LmluaXRpYWxpemUodGhpcywgdGhpcy5fcG9pbnRlclRyYWNrZXIhKTtcbiAgfVxuXG4gIC8vIEluIEl2eSB0aGUgYGhvc3RgIG1ldGFkYXRhIHdpbGwgYmUgbWVyZ2VkLCB3aGVyZWFzIGluIFZpZXdFbmdpbmUgaXQgaXMgb3ZlcnJpZGRlbi4gSW4gb3JkZXJcbiAgLy8gdG8gYXZvaWQgZG91YmxlIGV2ZW50IGxpc3RlbmVycywgd2UgbmVlZCB0byB1c2UgYEhvc3RMaXN0ZW5lcmAuIE9uY2UgSXZ5IGlzIHRoZSBkZWZhdWx0LCB3ZVxuICAvLyBjYW4gbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAuXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWhvc3QtZGVjb3JhdG9yLWluLWNvbmNyZXRlXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJylcbiAgLyoqIFBsYWNlIGZvY3VzIG9uIHRoZSBmaXJzdCBNZW51SXRlbSBpbiB0aGUgbWVudSBhbmQgc2V0IHRoZSBmb2N1cyBvcmlnaW4uICovXG4gIGZvY3VzRmlyc3RJdGVtKGZvY3VzT3JpZ2luOiBGb2N1c09yaWdpbiA9ICdwcm9ncmFtJykge1xuICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0Rm9jdXNPcmlnaW4oZm9jdXNPcmlnaW4pO1xuICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0Rmlyc3RJdGVtQWN0aXZlKCk7XG4gIH1cblxuICAvKiogUGxhY2UgZm9jdXMgb24gdGhlIGxhc3QgTWVudUl0ZW0gaW4gdGhlIG1lbnUgYW5kIHNldCB0aGUgZm9jdXMgb3JpZ2luLiAqL1xuICBmb2N1c0xhc3RJdGVtKGZvY3VzT3JpZ2luOiBGb2N1c09yaWdpbiA9ICdwcm9ncmFtJykge1xuICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0Rm9jdXNPcmlnaW4oZm9jdXNPcmlnaW4pO1xuICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0TGFzdEl0ZW1BY3RpdmUoKTtcbiAgfVxuXG4gIC8vIEluIEl2eSB0aGUgYGhvc3RgIG1ldGFkYXRhIHdpbGwgYmUgbWVyZ2VkLCB3aGVyZWFzIGluIFZpZXdFbmdpbmUgaXQgaXMgb3ZlcnJpZGRlbi4gSW4gb3JkZXJcbiAgLy8gdG8gYXZvaWQgZG91YmxlIGV2ZW50IGxpc3RlbmVycywgd2UgbmVlZCB0byB1c2UgYEhvc3RMaXN0ZW5lcmAuIE9uY2UgSXZ5IGlzIHRoZSBkZWZhdWx0LCB3ZVxuICAvLyBjYW4gbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAuXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWhvc3QtZGVjb3JhdG9yLWluLWNvbmNyZXRlXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAvKiogSGFuZGxlIGtleWJvYXJkIGV2ZW50cyBmb3IgdGhlIE1lbnUuICovXG4gIF9oYW5kbGVLZXlFdmVudChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnN0IGtleU1hbmFnZXIgPSB0aGlzLl9rZXlNYW5hZ2VyO1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBMRUZUX0FSUk9XOlxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMuX2lzSG9yaXpvbnRhbCgpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBrZXlNYW5hZ2VyLnNldEZvY3VzT3JpZ2luKCdrZXlib2FyZCcpO1xuICAgICAgICAgIGtleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBVUF9BUlJPVzpcbiAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgaWYgKCF0aGlzLl9pc0hvcml6b250YWwoKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAga2V5TWFuYWdlci5zZXRGb2N1c09yaWdpbigna2V5Ym9hcmQnKTtcbiAgICAgICAgICBrZXlNYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRVNDQVBFOlxuICAgICAgICBpZiAoIWhhc01vZGlmaWVyS2V5KGV2ZW50KSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5fbWVudVN0YWNrLmNsb3NlKHRoaXMsIEZvY3VzTmV4dC5jdXJyZW50SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgVEFCOlxuICAgICAgICB0aGlzLl9tZW51U3RhY2suY2xvc2VBbGwoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGtleU1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiogUmVnaXN0ZXIgdGhpcyBtZW51IHdpdGggaXRzIGVuY2xvc2luZyBwYXJlbnQgbWVudSBwYW5lbCAqL1xuICBwcml2YXRlIF9yZWdpc3RlcldpdGhQYXJlbnRQYW5lbCgpIHtcbiAgICB0aGlzLl9nZXRNZW51UGFuZWwoKT8uX3JlZ2lzdGVyTWVudSh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGVuY2xvc2luZyBDZGtNZW51UGFuZWwgZGVmYXVsdGluZyB0byB0aGUgaW5qZWN0ZWQgcmVmZXJlbmNlIG92ZXIgdGhlIGRldmVsb3BlclxuICAgKiBwcm92aWRlZCByZWZlcmVuY2UuXG4gICAqL1xuICBwcml2YXRlIF9nZXRNZW51UGFuZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21lbnVQYW5lbCB8fCB0aGlzLl9leHBsaWNpdFBhbmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXBsZXRlIHRoZSBjaGFuZ2UgZW1pdHRlciBpZiB0aGVyZSBhcmUgYW55IG5lc3RlZCBNZW51R3JvdXBzIG9yIHJlZ2lzdGVyIHRvIGNvbXBsZXRlIHRoZVxuICAgKiBjaGFuZ2UgZW1pdHRlciBpZiBhIE1lbnVHcm91cCBpcyByZW5kZXJlZCBhdCBzb21lIHBvaW50XG4gICAqL1xuICBwcml2YXRlIF9jb21wbGV0ZUNoYW5nZUVtaXR0ZXIoKSB7XG4gICAgaWYgKHRoaXMuX2hhc05lc3RlZEdyb3VwcygpKSB7XG4gICAgICB0aGlzLmNoYW5nZS5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9uZXN0ZWRHcm91cHMuY2hhbmdlcy5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNoYW5nZS5jb21wbGV0ZSgpKTtcbiAgICB9XG4gIH1cblxuICAvKiogUmV0dXJuIHRydWUgaWYgdGhlcmUgYXJlIG5lc3RlZCBDZGtNZW51R3JvdXAgZWxlbWVudHMgd2l0aGluIHRoZSBNZW51ICovXG4gIHByaXZhdGUgX2hhc05lc3RlZEdyb3VwcygpIHtcbiAgICAvLyB2aWV3IGVuZ2luZSBoYXMgYSBidWcgd2hlcmUgQENvbnRlbnRDaGlsZHJlbiB3aWxsIHJldHVybiB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgLy8gYWxvbmcgd2l0aCBjaGlsZHJlbiBpZiB0aGUgc2VsZWN0b3JzIG1hdGNoIC0gbm90IGp1c3QgdGhlIGNoaWxkcmVuLlxuICAgIC8vIEhlcmUsIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50LCB3ZSBjaGVjayB0byBzZWUgaWYgdGhlIGZpcnN0IGVsZW1lbnQgaXMgYSBDZGtNZW51IGluXG4gICAgLy8gb3JkZXIgdG8gZW5zdXJlIHRoYXQgd2UgcmV0dXJuIHRydWUgaWZmIHRoZXJlIGFyZSBjaGlsZCBDZGtNZW51R3JvdXAgZWxlbWVudHMuXG4gICAgcmV0dXJuIHRoaXMuX25lc3RlZEdyb3Vwcy5sZW5ndGggPiAwICYmICEodGhpcy5fbmVzdGVkR3JvdXBzLmZpcnN0IGluc3RhbmNlb2YgQ2RrTWVudSk7XG4gIH1cblxuICAvKiogU2V0dXAgdGhlIEZvY3VzS2V5TWFuYWdlciB3aXRoIHRoZSBjb3JyZWN0IG9yaWVudGF0aW9uIGZvciB0aGUgbWVudS4gKi9cbiAgcHJpdmF0ZSBfc2V0S2V5TWFuYWdlcigpIHtcbiAgICB0aGlzLl9rZXlNYW5hZ2VyID0gbmV3IEZvY3VzS2V5TWFuYWdlcih0aGlzLl9hbGxJdGVtcylcbiAgICAgIC53aXRoV3JhcCgpXG4gICAgICAud2l0aFR5cGVBaGVhZCgpXG4gICAgICAud2l0aEhvbWVBbmRFbmQoKTtcblxuICAgIGlmICh0aGlzLl9pc0hvcml6b250YWwoKSkge1xuICAgICAgdGhpcy5fa2V5TWFuYWdlci53aXRoSG9yaXpvbnRhbE9yaWVudGF0aW9uKHRoaXMuX2Rpcj8udmFsdWUgfHwgJ2x0cicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyLndpdGhWZXJ0aWNhbE9yaWVudGF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgUG9pbnRlckZvY3VzVHJhY2tlciBhbmQgZW5zdXJlIHRoYXQgd2hlbiBtb3VzZSBmb2N1cyBjaGFuZ2VzIHRoZSBrZXkgbWFuYWdlciBpcyB1cGRhdGVkXG4gICAqIHdpdGggdGhlIGxhdGVzdCBtZW51IGl0ZW0gdW5kZXIgbW91c2UgZm9jdXMuXG4gICAqL1xuICBwcml2YXRlIF9zdWJzY3JpYmVUb01vdXNlTWFuYWdlcigpIHtcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fcG9pbnRlclRyYWNrZXIgPSBuZXcgUG9pbnRlckZvY3VzVHJhY2tlcih0aGlzLl9hbGxJdGVtcyk7XG4gICAgICB0aGlzLl9wb2ludGVyVHJhY2tlci5lbnRlcmVkXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmNsb3NlZCkpXG4gICAgICAgIC5zdWJzY3JpYmUoaXRlbSA9PiB0aGlzLl9rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0oaXRlbSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIFN1YnNjcmliZSB0byB0aGUgTWVudVN0YWNrIGNsb3NlIGFuZCBlbXB0eSBvYnNlcnZhYmxlcy4gKi9cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9NZW51U3RhY2soKSB7XG4gICAgdGhpcy5fbWVudVN0YWNrLmNsb3NlZFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuY2xvc2VkKSlcbiAgICAgIC5zdWJzY3JpYmUoaXRlbSA9PiB0aGlzLl9jbG9zZU9wZW5NZW51KGl0ZW0pKTtcblxuICAgIHRoaXMuX21lbnVTdGFjay5lbXB0aWVkXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5jbG9zZWQpKVxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiB0aGlzLl90b2dnbGVNZW51Rm9jdXMoZXZlbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgb3BlbiBtZW51IGlmIHRoZSBjdXJyZW50IGFjdGl2ZSBpdGVtIG9wZW5lZCB0aGUgcmVxdWVzdGVkIE1lbnVTdGFja0l0ZW0uXG4gICAqIEBwYXJhbSBpdGVtIHRoZSBNZW51U3RhY2tJdGVtIHJlcXVlc3RlZCB0byBiZSBjbG9zZWQuXG4gICAqL1xuICBwcml2YXRlIF9jbG9zZU9wZW5NZW51KG1lbnU6IE1lbnVTdGFja0l0ZW0gfCB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBrZXlNYW5hZ2VyID0gdGhpcy5fa2V5TWFuYWdlcjtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5fb3Blbkl0ZW07XG4gICAgaWYgKG1lbnUgPT09IHRyaWdnZXI/LmdldE1lbnVUcmlnZ2VyKCk/LmdldE1lbnUoKSkge1xuICAgICAgdHJpZ2dlcj8uZ2V0TWVudVRyaWdnZXIoKT8uY2xvc2VNZW51KCk7XG4gICAgICAvLyBJZiB0aGUgdXNlciBoYXMgbW91c2VkIG92ZXIgYSBzaWJsaW5nIGl0ZW0gd2Ugd2FudCB0byBmb2N1cyB0aGUgZWxlbWVudCB1bmRlciBtb3VzZSBmb2N1c1xuICAgICAgLy8gbm90IHRoZSB0cmlnZ2VyIHdoaWNoIHByZXZpb3VzbHkgb3BlbmVkIHRoZSBub3cgY2xvc2VkIG1lbnUuXG4gICAgICBpZiAodHJpZ2dlcikge1xuICAgICAgICBrZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0odGhpcy5fcG9pbnRlclRyYWNrZXI/LmFjdGl2ZUVsZW1lbnQgfHwgdHJpZ2dlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldCBmb2N1cyB0aGUgZWl0aGVyIHRoZSBjdXJyZW50LCBwcmV2aW91cyBvciBuZXh0IGl0ZW0gYmFzZWQgb24gdGhlIEZvY3VzTmV4dCBldmVudC4gKi9cbiAgcHJpdmF0ZSBfdG9nZ2xlTWVudUZvY3VzKGV2ZW50OiBGb2N1c05leHQgfCB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBrZXlNYW5hZ2VyID0gdGhpcy5fa2V5TWFuYWdlcjtcbiAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICBjYXNlIEZvY3VzTmV4dC5uZXh0SXRlbTpcbiAgICAgICAga2V5TWFuYWdlci5zZXRGb2N1c09yaWdpbigna2V5Ym9hcmQnKTtcbiAgICAgICAga2V5TWFuYWdlci5zZXROZXh0SXRlbUFjdGl2ZSgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBGb2N1c05leHQucHJldmlvdXNJdGVtOlxuICAgICAgICBrZXlNYW5hZ2VyLnNldEZvY3VzT3JpZ2luKCdrZXlib2FyZCcpO1xuICAgICAgICBrZXlNYW5hZ2VyLnNldFByZXZpb3VzSXRlbUFjdGl2ZSgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBGb2N1c05leHQuY3VycmVudEl0ZW06XG4gICAgICAgIGlmIChrZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICBrZXlNYW5hZ2VyLnNldEZvY3VzT3JpZ2luKCdrZXlib2FyZCcpO1xuICAgICAgICAgIGtleU1hbmFnZXIuc2V0QWN0aXZlSXRlbShrZXlNYW5hZ2VyLmFjdGl2ZUl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE8oYW5keTk3NzUpOiByZW1vdmUgZHVwbGljYXRlIGxvZ2ljIGJldHdlZW4gbWVudSBhbiBtZW51IGJhclxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoZSBtZW51IHRyaWdnZXIncyBvcGVuIGV2ZW50cyBpbiBvcmRlciB0byB0cmFjayB0aGUgdHJpZ2dlciB3aGljaCBvcGVuZWQgdGhlIG1lbnVcbiAgICogYW5kIHN0b3AgdHJhY2tpbmcgaXQgd2hlbiB0aGUgbWVudSBpcyBjbG9zZWQuXG4gICAqL1xuICBwcml2YXRlIF9zdWJzY3JpYmVUb01lbnVPcGVuKCkge1xuICAgIGNvbnN0IGV4aXRDb25kaXRpb24gPSBtZXJnZSh0aGlzLl9hbGxJdGVtcy5jaGFuZ2VzLCB0aGlzLmNsb3NlZCk7XG4gICAgdGhpcy5fYWxsSXRlbXMuY2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLl9hbGxJdGVtcyksXG4gICAgICAgIG1lcmdlTWFwKChsaXN0OiBRdWVyeUxpc3Q8Q2RrTWVudUl0ZW0+KSA9PlxuICAgICAgICAgIGxpc3RcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmhhc01lbnUoKSlcbiAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLmdldE1lbnVUcmlnZ2VyKCkhLm9wZW5lZC5waXBlKG1hcFRvKGl0ZW0pLCB0YWtlVW50aWwoZXhpdENvbmRpdGlvbikpKVxuICAgICAgICApLFxuICAgICAgICBtZXJnZUFsbCgpLFxuICAgICAgICBzd2l0Y2hNYXAoKGl0ZW06IENka01lbnVJdGVtKSA9PiB7XG4gICAgICAgICAgdGhpcy5fb3Blbkl0ZW0gPSBpdGVtO1xuICAgICAgICAgIHJldHVybiBpdGVtLmdldE1lbnVUcmlnZ2VyKCkhLmNsb3NlZDtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmNsb3NlZClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gKHRoaXMuX29wZW5JdGVtID0gdW5kZWZpbmVkKSk7XG4gIH1cblxuICAvKiogUmV0dXJuIHRydWUgaWYgdGhpcyBtZW51IGhhcyBiZWVuIGNvbmZpZ3VyZWQgaW4gYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLiAqL1xuICBwcml2YXRlIF9pc0hvcml6b250YWwoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGlzIG1lbnUgaXMgYW4gaW5saW5lIG1lbnUuIFRoYXQgaXMsIGl0IGRvZXMgbm90IGV4aXN0IGluIGEgcG9wLXVwIGFuZCBpc1xuICAgKiBhbHdheXMgdmlzaWJsZSBpbiB0aGUgZG9tLlxuICAgKi9cbiAgX2lzSW5saW5lKCkge1xuICAgIC8vIE5vb3BNZW51U3RhY2sgaXMgdGhlIGRlZmF1bHQuIElmIHRoaXMgbWVudSBpcyBub3QgaW5saW5lIHRoYW4gdGhlIE5vb3BNZW51U3RhY2sgaXMgcmVwbGFjZWRcbiAgICAvLyBhdXRvbWF0aWNhbGx5LlxuICAgIHJldHVybiB0aGlzLl9tZW51U3RhY2sgaW5zdGFuY2VvZiBOb29wTWVudVN0YWNrO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZW1pdENsb3NlZEV2ZW50KCk7XG4gICAgdGhpcy5fcG9pbnRlclRyYWNrZXI/LmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKiBFbWl0IGFuZCBjb21wbGV0ZSB0aGUgY2xvc2VkIGV2ZW50IGVtaXR0ZXIgKi9cbiAgcHJpdmF0ZSBfZW1pdENsb3NlZEV2ZW50KCkge1xuICAgIHRoaXMuY2xvc2VkLm5leHQoKTtcbiAgICB0aGlzLmNsb3NlZC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=