/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input, Optional, Self, ElementRef, Output, EventEmitter, Inject, HostListener, NgZone, } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SPACE, ENTER, RIGHT_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';
import { Directionality } from '@angular/cdk/bidi';
import { Subject, fromEvent } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { CdkMenuItemTrigger } from './menu-item-trigger';
import { CDK_MENU } from './menu-interface';
import { MENU_AIM } from './menu-aim';
// TODO refactor this to be configurable allowing for custom elements to be removed
/** Removes all icons from within the given element. */
function removeIcons(element) {
    var _a;
    for (const icon of Array.from(element.querySelectorAll('mat-icon, .material-icons'))) {
        (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
    }
}
/**
 * Directive which provides the ability for an element to be focused and navigated to using the
 * keyboard when residing in a CdkMenu, CdkMenuBar, or CdkMenuGroup. It performs user defined
 * behavior when clicked.
 */
export class CdkMenuItem {
    constructor(_elementRef, _ngZone, _parentMenu, _menuAim, _dir, 
    /** Reference to the CdkMenuItemTrigger directive if one is added to the same element */
    // `CdkMenuItem` is commonly used in combination with a `CdkMenuItemTrigger`.
    // tslint:disable-next-line: lightweight-tokens
    _menuTrigger) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._parentMenu = _parentMenu;
        this._menuAim = _menuAim;
        this._dir = _dir;
        this._menuTrigger = _menuTrigger;
        this._disabled = false;
        /**
         * If this MenuItem is a regular MenuItem, outputs when it is triggered by a keyboard or mouse
         * event.
         */
        this.triggered = new EventEmitter();
        /**
         * The tabindex for this menu item managed internally and used for implementing roving a
         * tab index.
         */
        this._tabindex = -1;
        /** Emits when the menu item is destroyed. */
        this._destroyed = new Subject();
        this._setupMouseEnter();
        if (this._isStandaloneItem()) {
            this._tabindex = 0;
        }
    }
    /**  Whether the CdkMenuItem is disabled - defaults to false */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    /** Place focus on the element. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    /** Reset the _tabindex to -1. */
    _resetTabIndex() {
        if (!this._isStandaloneItem()) {
            this._tabindex = -1;
        }
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    /**
     * Set the tab index to 0 if not disabled and it's a focus event, or a mouse enter if this element
     * is not in a menu bar.
     */
    _setTabIndex(event) {
        var _a;
        if (this.disabled) {
            return;
        }
        // don't set the tabindex if there are no open sibling or parent menus
        if (!event || !((_a = this._getMenuStack()) === null || _a === void 0 ? void 0 : _a.isEmpty())) {
            this._tabindex = 0;
        }
    }
    /** Whether this menu item is standalone or within a menu or menu bar. */
    _isStandaloneItem() {
        return !this._parentMenu;
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    /**
     * If the menu item is not disabled and the element does not have a menu trigger attached, emit
     * on the cdkMenuItemTriggered emitter and close all open menus.
     */
    trigger() {
        var _a;
        if (!this.disabled && !this.hasMenu()) {
            this.triggered.next();
            (_a = this._getMenuStack()) === null || _a === void 0 ? void 0 : _a.closeAll();
        }
    }
    /** Whether the menu item opens a menu. */
    hasMenu() {
        var _a;
        return !!((_a = this._menuTrigger) === null || _a === void 0 ? void 0 : _a.hasMenu());
    }
    /** Return true if this MenuItem has an attached menu and it is open. */
    isMenuOpen() {
        var _a;
        return !!((_a = this._menuTrigger) === null || _a === void 0 ? void 0 : _a.isMenuOpen());
    }
    /**
     * Get a reference to the rendered Menu if the Menu is open and it is visible in the DOM.
     * @return the menu if it is open, otherwise undefined.
     */
    getMenu() {
        var _a;
        return (_a = this._menuTrigger) === null || _a === void 0 ? void 0 : _a.getMenu();
    }
    /** Get the MenuItemTrigger associated with this element. */
    getMenuTrigger() {
        return this._menuTrigger;
    }
    /** Get the label for this element which is required by the FocusableOption interface. */
    getLabel() {
        var _a;
        // TODO cloning the tree may be expensive; implement a better method
        // we know that the current node is an element type
        const clone = this._elementRef.nativeElement.cloneNode(true);
        removeIcons(clone);
        return ((_a = clone.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
    }
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    /**
     * Handles keyboard events for the menu item, specifically either triggering the user defined
     * callback or opening/closing the current menu based on whether the left or right arrow key was
     * pressed.
     * @param event the keyboard event to handle
     */
    _onKeydown(event) {
        var _a, _b, _c, _d, _e, _f;
        switch (event.keyCode) {
            case SPACE:
            case ENTER:
                event.preventDefault();
                this.trigger();
                break;
            case RIGHT_ARROW:
                if (this._parentMenu && this._isParentVertical() && !this.hasMenu()) {
                    event.preventDefault();
                    ((_a = this._dir) === null || _a === void 0 ? void 0 : _a.value) === 'rtl'
                        ? (_b = this._getMenuStack()) === null || _b === void 0 ? void 0 : _b.close(this._parentMenu, 1 /* previousItem */)
                        : (_c = this._getMenuStack()) === null || _c === void 0 ? void 0 : _c.closeAll(0 /* nextItem */);
                }
                break;
            case LEFT_ARROW:
                if (this._parentMenu && this._isParentVertical() && !this.hasMenu()) {
                    event.preventDefault();
                    ((_d = this._dir) === null || _d === void 0 ? void 0 : _d.value) === 'rtl'
                        ? (_e = this._getMenuStack()) === null || _e === void 0 ? void 0 : _e.closeAll(0 /* nextItem */)
                        : (_f = this._getMenuStack()) === null || _f === void 0 ? void 0 : _f.close(this._parentMenu, 1 /* previousItem */);
                }
                break;
        }
    }
    /**
     * Subscribe to the mouseenter events and close any sibling menu items if this element is moused
     * into.
     */
    _setupMouseEnter() {
        if (!this._isStandaloneItem()) {
            const closeOpenSiblings = () => this._ngZone.run(() => { var _a; return (_a = this._getMenuStack()) === null || _a === void 0 ? void 0 : _a.closeSubMenuOf(this._parentMenu); });
            this._ngZone.runOutsideAngular(() => fromEvent(this._elementRef.nativeElement, 'mouseenter')
                .pipe(filter(() => { var _a; return !((_a = this._getMenuStack()) === null || _a === void 0 ? void 0 : _a.isEmpty()) && !this.hasMenu(); }), takeUntil(this._destroyed))
                .subscribe(() => {
                if (this._menuAim) {
                    this._menuAim.toggle(closeOpenSiblings);
                }
                else {
                    closeOpenSiblings();
                }
            }));
        }
    }
    /**
     * Return true if the enclosing parent menu is configured in a horizontal orientation, false
     * otherwise or if no parent.
     */
    _isParentVertical() {
        var _a;
        return ((_a = this._parentMenu) === null || _a === void 0 ? void 0 : _a.orientation) === 'vertical';
    }
    /** Get the MenuStack from the parent menu. */
    _getMenuStack() {
        var _a;
        // We use a function since at the construction of the MenuItemTrigger the parent Menu won't have
        // its menu stack set. Therefore we need to reference the menu stack from the parent each time
        // we want to use it.
        return (_a = this._parentMenu) === null || _a === void 0 ? void 0 : _a._menuStack;
    }
    ngOnDestroy() {
        this._destroyed.next();
    }
}
CdkMenuItem.decorators = [
    { type: Directive, args: [{
                selector: '[cdkMenuItem]',
                exportAs: 'cdkMenuItem',
                host: {
                    '[tabindex]': '_tabindex',
                    'type': 'button',
                    'role': 'menuitem',
                    'class': 'cdk-menu-item',
                    '[attr.aria-disabled]': 'disabled || null',
                },
            },] }
];
CdkMenuItem.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CDK_MENU,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MENU_AIM,] }] },
    { type: Directionality, decorators: [{ type: Optional }] },
    { type: CdkMenuItemTrigger, decorators: [{ type: Self }, { type: Optional }] }
];
CdkMenuItem.propDecorators = {
    disabled: [{ type: Input }],
    triggered: [{ type: Output, args: ['cdkMenuItemTriggered',] }],
    _resetTabIndex: [{ type: HostListener, args: ['blur',] }, { type: HostListener, args: ['mouseout',] }],
    _setTabIndex: [{ type: HostListener, args: ['focus',] }, { type: HostListener, args: ['mouseenter', ['$event'],] }],
    trigger: [{ type: HostListener, args: ['click',] }],
    _onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay1leHBlcmltZW50YWwvbWVudS9tZW51LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxFQUNSLElBQUksRUFDSixVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNaLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMscUJBQXFCLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFPLFFBQVEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBR2hELE9BQU8sRUFBVSxRQUFRLEVBQVUsTUFBTSxZQUFZLENBQUM7QUFFdEQsbUZBQW1GO0FBQ25GLHVEQUF1RDtBQUN2RCxTQUFTLFdBQVcsQ0FBQyxPQUFnQjs7SUFDbkMsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEVBQUU7UUFDcEYsTUFBQSxJQUFJLENBQUMsVUFBVSwwQ0FBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEM7QUFDSCxDQUFD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RXJCLElBQUksWUFBSSxRQUFROzs7dUJBakNsQixLQUFLO3dCQWFMLE1BQU0sU0FBQyxzQkFBc0I7NkJBc0M3QixZQUFZLFNBQUMsTUFBTSxjQUNuQixZQUFZLFNBQUMsVUFBVTsyQkFZdkIsWUFBWSxTQUFDLE9BQU8sY0FDcEIsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkF5QnJDLFlBQVksU0FBQyxPQUFPO3lCQWlEcEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgRWxlbWVudFJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSG9zdExpc3RlbmVyLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2NvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgQm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtGb2N1c2FibGVPcHRpb259IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7U1BBQ0UsIEVOVEVSLCBSSUdIVF9BUlJPVywgTEVGVF9BUlJPV30gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7U3ViamVjdCwgZnJvbUV2ZW50fSBmcm9tICdyeGpzJztcbmltcG9ydCB7dGFrZVVudGlsLCBmaWx0ZXJ9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Q2RrTWVudUl0ZW1UcmlnZ2VyfSBmcm9tICcuL21lbnUtaXRlbS10cmlnZ2VyJztcbmltcG9ydCB7TWVudSwgQ0RLX01FTlV9IGZyb20gJy4vbWVudS1pbnRlcmZhY2UnO1xuaW1wb3J0IHtGb2N1c05leHR9IGZyb20gJy4vbWVudS1zdGFjayc7XG5pbXBvcnQge0ZvY3VzYWJsZUVsZW1lbnR9IGZyb20gJy4vcG9pbnRlci1mb2N1cy10cmFja2VyJztcbmltcG9ydCB7VG9nZ2xlciwgTUVOVV9BSU0sIE1lbnVBaW19IGZyb20gJy4vbWVudS1haW0nO1xuXG4vLyBUT0RPIHJlZmFjdG9yIHRoaXMgdG8gYmUgY29uZmlndXJhYmxlIGFsbG93aW5nIGZvciBjdXN0b20gZWxlbWVudHMgdG8gYmUgcmVtb3ZlZFxuLyoqIFJlbW92ZXMgYWxsIGljb25zIGZyb20gd2l0aGluIHRoZSBnaXZlbiBlbGVtZW50LiAqL1xuZnVuY3Rpb24gcmVtb3ZlSWNvbnMoZWxlbWVudDogRWxlbWVudCkge1xuICBmb3IgKGNvbnN0IGljb24gb2YgQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ21hdC1pY29uLCAubWF0ZXJpYWwtaWNvbnMnKSkpIHtcbiAgICBpY29uLnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKGljb24pO1xuICB9XG59XG5cbi8qKlxuICogRGlyZWN0aXZlIHdoaWNoIHByb3ZpZGVzIHRoZSBhYmlsaXR5IGZvciBhbiBlbGVtZW50IHRvIGJlIGZvY3VzZWQgYW5kIG5hdmlnYXRlZCB0byB1c2luZyB0aGVcbiAqIGtleWJvYXJkIHdoZW4gcmVzaWRpbmcgaW4gYSBDZGtNZW51LCBDZGtNZW51QmFyLCBvciBDZGtNZW51R3JvdXAuIEl0IHBlcmZvcm1zIHVzZXIgZGVmaW5lZFxuICogYmVoYXZpb3Igd2hlbiBjbGlja2VkLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrTWVudUl0ZW1dJyxcbiAgZXhwb3J0QXM6ICdjZGtNZW51SXRlbScsXG4gIGhvc3Q6IHtcbiAgICAnW3RhYmluZGV4XSc6ICdfdGFiaW5kZXgnLFxuICAgICd0eXBlJzogJ2J1dHRvbicsXG4gICAgJ3JvbGUnOiAnbWVudWl0ZW0nLFxuICAgICdjbGFzcyc6ICdjZGstbWVudS1pdGVtJyxcbiAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCcsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVJdGVtIGltcGxlbWVudHMgRm9jdXNhYmxlT3B0aW9uLCBGb2N1c2FibGVFbGVtZW50LCBUb2dnbGVyLCBPbkRlc3Ryb3kge1xuICAvKiogIFdoZXRoZXIgdGhlIENka01lbnVJdGVtIGlzIGRpc2FibGVkIC0gZGVmYXVsdHMgdG8gZmFsc2UgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSWYgdGhpcyBNZW51SXRlbSBpcyBhIHJlZ3VsYXIgTWVudUl0ZW0sIG91dHB1dHMgd2hlbiBpdCBpcyB0cmlnZ2VyZWQgYnkgYSBrZXlib2FyZCBvciBtb3VzZVxuICAgKiBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoJ2Nka01lbnVJdGVtVHJpZ2dlcmVkJykgcmVhZG9ubHkgdHJpZ2dlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIFRoZSB0YWJpbmRleCBmb3IgdGhpcyBtZW51IGl0ZW0gbWFuYWdlZCBpbnRlcm5hbGx5IGFuZCB1c2VkIGZvciBpbXBsZW1lbnRpbmcgcm92aW5nIGFcbiAgICogdGFiIGluZGV4LlxuICAgKi9cbiAgX3RhYmluZGV4OiAwIHwgLTEgPSAtMTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgbWVudSBpdGVtIGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByZWFkb25seSBfZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbmdab25lOiBOZ1pvbmUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChDREtfTUVOVSkgcHJpdmF0ZSByZWFkb25seSBfcGFyZW50TWVudT86IE1lbnUsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNRU5VX0FJTSkgcHJpdmF0ZSByZWFkb25seSBfbWVudUFpbT86IE1lbnVBaW0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByZWFkb25seSBfZGlyPzogRGlyZWN0aW9uYWxpdHksXG4gICAgLyoqIFJlZmVyZW5jZSB0byB0aGUgQ2RrTWVudUl0ZW1UcmlnZ2VyIGRpcmVjdGl2ZSBpZiBvbmUgaXMgYWRkZWQgdG8gdGhlIHNhbWUgZWxlbWVudCAqL1xuICAgIC8vIGBDZGtNZW51SXRlbWAgaXMgY29tbW9ubHkgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGEgYENka01lbnVJdGVtVHJpZ2dlcmAuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBsaWdodHdlaWdodC10b2tlbnNcbiAgICBAU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgX21lbnVUcmlnZ2VyPzogQ2RrTWVudUl0ZW1UcmlnZ2VyXG4gICkge1xuICAgIHRoaXMuX3NldHVwTW91c2VFbnRlcigpO1xuXG4gICAgaWYgKHRoaXMuX2lzU3RhbmRhbG9uZUl0ZW0oKSkge1xuICAgICAgdGhpcy5fdGFiaW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQbGFjZSBmb2N1cyBvbiB0aGUgZWxlbWVudC4gKi9cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICAvLyBJbiBJdnkgdGhlIGBob3N0YCBtZXRhZGF0YSB3aWxsIGJlIG1lcmdlZCwgd2hlcmVhcyBpbiBWaWV3RW5naW5lIGl0IGlzIG92ZXJyaWRkZW4uIEluIG9yZGVyXG4gIC8vIHRvIGF2b2lkIGRvdWJsZSBldmVudCBsaXN0ZW5lcnMsIHdlIG5lZWQgdG8gdXNlIGBIb3N0TGlzdGVuZXJgLiBPbmNlIEl2eSBpcyB0aGUgZGVmYXVsdCwgd2VcbiAgLy8gY2FuIG1vdmUgdGhpcyBiYWNrIGludG8gYGhvc3RgLlxuICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1ob3N0LWRlY29yYXRvci1pbi1jb25jcmV0ZVxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgQEhvc3RMaXN0ZW5lcignbW91c2VvdXQnKVxuICAvKiogUmVzZXQgdGhlIF90YWJpbmRleCB0byAtMS4gKi9cbiAgX3Jlc2V0VGFiSW5kZXgoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1N0YW5kYWxvbmVJdGVtKCkpIHtcbiAgICAgIHRoaXMuX3RhYmluZGV4ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gSXZ5IHRoZSBgaG9zdGAgbWV0YWRhdGEgd2lsbCBiZSBtZXJnZWQsIHdoZXJlYXMgaW4gVmlld0VuZ2luZSBpdCBpcyBvdmVycmlkZGVuLiBJbiBvcmRlclxuICAvLyB0byBhdm9pZCBkb3VibGUgZXZlbnQgbGlzdGVuZXJzLCB3ZSBuZWVkIHRvIHVzZSBgSG9zdExpc3RlbmVyYC4gT25jZSBJdnkgaXMgdGhlIGRlZmF1bHQsIHdlXG4gIC8vIGNhbiBtb3ZlIHRoaXMgYmFjayBpbnRvIGBob3N0YC5cbiAgLy8gdHNsaW50OmRpc2FibGU6bm8taG9zdC1kZWNvcmF0b3ItaW4tY29uY3JldGVcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJywgWyckZXZlbnQnXSlcbiAgLyoqXG4gICAqIFNldCB0aGUgdGFiIGluZGV4IHRvIDAgaWYgbm90IGRpc2FibGVkIGFuZCBpdCdzIGEgZm9jdXMgZXZlbnQsIG9yIGEgbW91c2UgZW50ZXIgaWYgdGhpcyBlbGVtZW50XG4gICAqIGlzIG5vdCBpbiBhIG1lbnUgYmFyLlxuICAgKi9cbiAgX3NldFRhYkluZGV4KGV2ZW50PzogTW91c2VFdmVudCkge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZG9uJ3Qgc2V0IHRoZSB0YWJpbmRleCBpZiB0aGVyZSBhcmUgbm8gb3BlbiBzaWJsaW5nIG9yIHBhcmVudCBtZW51c1xuICAgIGlmICghZXZlbnQgfHwgIXRoaXMuX2dldE1lbnVTdGFjaygpPy5pc0VtcHR5KCkpIHtcbiAgICAgIHRoaXMuX3RhYmluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICAvKiogV2hldGhlciB0aGlzIG1lbnUgaXRlbSBpcyBzdGFuZGFsb25lIG9yIHdpdGhpbiBhIG1lbnUgb3IgbWVudSBiYXIuICovXG4gIF9pc1N0YW5kYWxvbmVJdGVtKCkge1xuICAgIHJldHVybiAhdGhpcy5fcGFyZW50TWVudTtcbiAgfVxuXG4gIC8vIEluIEl2eSB0aGUgYGhvc3RgIG1ldGFkYXRhIHdpbGwgYmUgbWVyZ2VkLCB3aGVyZWFzIGluIFZpZXdFbmdpbmUgaXQgaXMgb3ZlcnJpZGRlbi4gSW4gb3JkZXJcbiAgLy8gdG8gYXZvaWQgZG91YmxlIGV2ZW50IGxpc3RlbmVycywgd2UgbmVlZCB0byB1c2UgYEhvc3RMaXN0ZW5lcmAuIE9uY2UgSXZ5IGlzIHRoZSBkZWZhdWx0LCB3ZVxuICAvLyBjYW4gbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAuXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWhvc3QtZGVjb3JhdG9yLWluLWNvbmNyZXRlXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgLyoqXG4gICAqIElmIHRoZSBtZW51IGl0ZW0gaXMgbm90IGRpc2FibGVkIGFuZCB0aGUgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgbWVudSB0cmlnZ2VyIGF0dGFjaGVkLCBlbWl0XG4gICAqIG9uIHRoZSBjZGtNZW51SXRlbVRyaWdnZXJlZCBlbWl0dGVyIGFuZCBjbG9zZSBhbGwgb3BlbiBtZW51cy5cbiAgICovXG4gIHRyaWdnZXIoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLmhhc01lbnUoKSkge1xuICAgICAgdGhpcy50cmlnZ2VyZWQubmV4dCgpO1xuICAgICAgdGhpcy5fZ2V0TWVudVN0YWNrKCk/LmNsb3NlQWxsKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIG1lbnUgaXRlbSBvcGVucyBhIG1lbnUuICovXG4gIGhhc01lbnUoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fbWVudVRyaWdnZXI/Lmhhc01lbnUoKTtcbiAgfVxuXG4gIC8qKiBSZXR1cm4gdHJ1ZSBpZiB0aGlzIE1lbnVJdGVtIGhhcyBhbiBhdHRhY2hlZCBtZW51IGFuZCBpdCBpcyBvcGVuLiAqL1xuICBpc01lbnVPcGVuKCkge1xuICAgIHJldHVybiAhIXRoaXMuX21lbnVUcmlnZ2VyPy5pc01lbnVPcGVuKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSByZW5kZXJlZCBNZW51IGlmIHRoZSBNZW51IGlzIG9wZW4gYW5kIGl0IGlzIHZpc2libGUgaW4gdGhlIERPTS5cbiAgICogQHJldHVybiB0aGUgbWVudSBpZiBpdCBpcyBvcGVuLCBvdGhlcndpc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgZ2V0TWVudSgpOiBNZW51IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudVRyaWdnZXI/LmdldE1lbnUoKTtcbiAgfVxuXG4gIC8qKiBHZXQgdGhlIE1lbnVJdGVtVHJpZ2dlciBhc3NvY2lhdGVkIHdpdGggdGhpcyBlbGVtZW50LiAqL1xuICBnZXRNZW51VHJpZ2dlcigpOiBDZGtNZW51SXRlbVRyaWdnZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLl9tZW51VHJpZ2dlcjtcbiAgfVxuXG4gIC8qKiBHZXQgdGhlIGxhYmVsIGZvciB0aGlzIGVsZW1lbnQgd2hpY2ggaXMgcmVxdWlyZWQgYnkgdGhlIEZvY3VzYWJsZU9wdGlvbiBpbnRlcmZhY2UuICovXG4gIGdldExhYmVsKCk6IHN0cmluZyB7XG4gICAgLy8gVE9ETyBjbG9uaW5nIHRoZSB0cmVlIG1heSBiZSBleHBlbnNpdmU7IGltcGxlbWVudCBhIGJldHRlciBtZXRob2RcbiAgICAvLyB3ZSBrbm93IHRoYXQgdGhlIGN1cnJlbnQgbm9kZSBpcyBhbiBlbGVtZW50IHR5cGVcbiAgICBjb25zdCBjbG9uZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgRWxlbWVudDtcbiAgICByZW1vdmVJY29ucyhjbG9uZSk7XG5cbiAgICByZXR1cm4gY2xvbmUudGV4dENvbnRlbnQ/LnRyaW0oKSB8fCAnJztcbiAgfVxuXG4gIC8vIEluIEl2eSB0aGUgYGhvc3RgIG1ldGFkYXRhIHdpbGwgYmUgbWVyZ2VkLCB3aGVyZWFzIGluIFZpZXdFbmdpbmUgaXQgaXMgb3ZlcnJpZGRlbi4gSW4gb3JkZXJcbiAgLy8gdG8gYXZvaWQgZG91YmxlIGV2ZW50IGxpc3RlbmVycywgd2UgbmVlZCB0byB1c2UgYEhvc3RMaXN0ZW5lcmAuIE9uY2UgSXZ5IGlzIHRoZSBkZWZhdWx0LCB3ZVxuICAvLyBjYW4gbW92ZSB0aGlzIGJhY2sgaW50byBgaG9zdGAuXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLWhvc3QtZGVjb3JhdG9yLWluLWNvbmNyZXRlXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAvKipcbiAgICogSGFuZGxlcyBrZXlib2FyZCBldmVudHMgZm9yIHRoZSBtZW51IGl0ZW0sIHNwZWNpZmljYWxseSBlaXRoZXIgdHJpZ2dlcmluZyB0aGUgdXNlciBkZWZpbmVkXG4gICAqIGNhbGxiYWNrIG9yIG9wZW5pbmcvY2xvc2luZyB0aGUgY3VycmVudCBtZW51IGJhc2VkIG9uIHdoZXRoZXIgdGhlIGxlZnQgb3IgcmlnaHQgYXJyb3cga2V5IHdhc1xuICAgKiBwcmVzc2VkLlxuICAgKiBAcGFyYW0gZXZlbnQgdGhlIGtleWJvYXJkIGV2ZW50IHRvIGhhbmRsZVxuICAgKi9cbiAgX29uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBTUEFDRTpcbiAgICAgIGNhc2UgRU5URVI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudHJpZ2dlcigpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudE1lbnUgJiYgdGhpcy5faXNQYXJlbnRWZXJ0aWNhbCgpICYmICF0aGlzLmhhc01lbnUoKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5fZGlyPy52YWx1ZSA9PT0gJ3J0bCdcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0TWVudVN0YWNrKCk/LmNsb3NlKHRoaXMuX3BhcmVudE1lbnUsIEZvY3VzTmV4dC5wcmV2aW91c0l0ZW0pXG4gICAgICAgICAgICA6IHRoaXMuX2dldE1lbnVTdGFjaygpPy5jbG9zZUFsbChGb2N1c05leHQubmV4dEl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnRNZW51ICYmIHRoaXMuX2lzUGFyZW50VmVydGljYWwoKSAmJiAhdGhpcy5oYXNNZW51KCkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuX2Rpcj8udmFsdWUgPT09ICdydGwnXG4gICAgICAgICAgICA/IHRoaXMuX2dldE1lbnVTdGFjaygpPy5jbG9zZUFsbChGb2N1c05leHQubmV4dEl0ZW0pXG4gICAgICAgICAgICA6IHRoaXMuX2dldE1lbnVTdGFjaygpPy5jbG9zZSh0aGlzLl9wYXJlbnRNZW51LCBGb2N1c05leHQucHJldmlvdXNJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoZSBtb3VzZWVudGVyIGV2ZW50cyBhbmQgY2xvc2UgYW55IHNpYmxpbmcgbWVudSBpdGVtcyBpZiB0aGlzIGVsZW1lbnQgaXMgbW91c2VkXG4gICAqIGludG8uXG4gICAqL1xuICBwcml2YXRlIF9zZXR1cE1vdXNlRW50ZXIoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1N0YW5kYWxvbmVJdGVtKCkpIHtcbiAgICAgIGNvbnN0IGNsb3NlT3BlblNpYmxpbmdzID0gKCkgPT5cbiAgICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB0aGlzLl9nZXRNZW51U3RhY2soKT8uY2xvc2VTdWJNZW51T2YodGhpcy5fcGFyZW50TWVudSEpKTtcblxuICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+XG4gICAgICAgIGZyb21FdmVudCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJylcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5fZ2V0TWVudVN0YWNrKCk/LmlzRW1wdHkoKSAmJiAhdGhpcy5oYXNNZW51KCkpLFxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZClcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbWVudUFpbSkge1xuICAgICAgICAgICAgICB0aGlzLl9tZW51QWltLnRvZ2dsZShjbG9zZU9wZW5TaWJsaW5ncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjbG9zZU9wZW5TaWJsaW5ncygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgZW5jbG9zaW5nIHBhcmVudCBtZW51IGlzIGNvbmZpZ3VyZWQgaW4gYSBob3Jpem9udGFsIG9yaWVudGF0aW9uLCBmYWxzZVxuICAgKiBvdGhlcndpc2Ugb3IgaWYgbm8gcGFyZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBfaXNQYXJlbnRWZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50TWVudT8ub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCc7XG4gIH1cblxuICAvKiogR2V0IHRoZSBNZW51U3RhY2sgZnJvbSB0aGUgcGFyZW50IG1lbnUuICovXG4gIHByaXZhdGUgX2dldE1lbnVTdGFjaygpIHtcbiAgICAvLyBXZSB1c2UgYSBmdW5jdGlvbiBzaW5jZSBhdCB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSBNZW51SXRlbVRyaWdnZXIgdGhlIHBhcmVudCBNZW51IHdvbid0IGhhdmVcbiAgICAvLyBpdHMgbWVudSBzdGFjayBzZXQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvIHJlZmVyZW5jZSB0aGUgbWVudSBzdGFjayBmcm9tIHRoZSBwYXJlbnQgZWFjaCB0aW1lXG4gICAgLy8gd2Ugd2FudCB0byB1c2UgaXQuXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudE1lbnU/Ll9tZW51U3RhY2s7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQubmV4dCgpO1xuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG59XG4iXX0=