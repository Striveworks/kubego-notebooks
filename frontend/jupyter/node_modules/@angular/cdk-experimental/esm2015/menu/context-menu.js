/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, Input, ViewContainerRef, Output, EventEmitter, Optional, Inject, Injectable, InjectionToken, } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayConfig, } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject, merge } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CdkMenuPanel } from './menu-panel';
import { MenuStack } from './menu-stack';
import { throwExistingMenuStackError } from './menu-errors';
import { isClickInsideMenuOverlay } from './menu-item-trigger';
import * as i0 from "@angular/core";
/** Tracks the last open context menu trigger across the entire application. */
export class ContextMenuTracker {
    /**
     * Close the previous open context menu and set the given one as being open.
     * @param trigger the trigger for the currently open Context Menu.
     */
    update(trigger) {
        var _a;
        if (ContextMenuTracker._openContextMenuTrigger !== trigger) {
            (_a = ContextMenuTracker._openContextMenuTrigger) === null || _a === void 0 ? void 0 : _a.close();
            ContextMenuTracker._openContextMenuTrigger = trigger;
        }
    }
}
ContextMenuTracker.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContextMenuTracker_Factory() { return new ContextMenuTracker(); }, token: ContextMenuTracker, providedIn: "root" });
ContextMenuTracker.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** Injection token for the ContextMenu options object. */
export const CDK_CONTEXT_MENU_DEFAULT_OPTIONS = new InjectionToken('cdk-context-menu-default-options');
const ɵ0 = { offsetX: 2, offsetY: 2 };
/**
 * A directive which when placed on some element opens a the Menu it is bound to when a user
 * right-clicks within that element. It is aware of nested Context Menus and the lowest level
 * non-disabled context menu will trigger.
 */
export class CdkContextMenuTrigger {
    constructor(_viewContainerRef, _overlay, _contextMenuTracker, _options, _directionality) {
        this._viewContainerRef = _viewContainerRef;
        this._overlay = _overlay;
        this._contextMenuTracker = _contextMenuTracker;
        this._options = _options;
        this._directionality = _directionality;
        /** Emits when the attached menu is requested to open. */
        this.opened = new EventEmitter();
        /** Emits when the attached menu is requested to close. */
        this.closed = new EventEmitter();
        this._disabled = false;
        /** A reference to the overlay which manages the triggered menu. */
        this._overlayRef = null;
        /** Emits when the element is destroyed. */
        this._destroyed = new Subject();
        /** The menu stack for this trigger and its associated menus. */
        this._menuStack = new MenuStack();
        /** Emits when the outside pointer events listener on the overlay should be stopped. */
        this._stopOutsideClicksListener = merge(this.closed, this._destroyed);
        this._setMenuStackListener();
    }
    /** Template reference variable to the menu to open on right click. */
    get menuPanel() {
        return this._menuPanel;
    }
    set menuPanel(panel) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && panel._menuStack) {
            throwExistingMenuStackError();
        }
        this._menuPanel = panel;
        if (this._menuPanel) {
            this._menuPanel._menuStack = this._menuStack;
        }
    }
    /** Whether the context menu should be disabled. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    /**
     * Open the attached menu at the specified location.
     * @param coordinates where to open the context menu
     */
    open(coordinates) {
        if (this.disabled) {
            return;
        }
        else if (this.isOpen()) {
            // since we're moving this menu we need to close any submenus first otherwise they end up
            // disconnected from this one.
            this._menuStack.closeSubMenuOf(this._menuPanel._menu);
            this._overlayRef.getConfig()
                .positionStrategy.setOrigin(coordinates);
            this._overlayRef.updatePosition();
        }
        else {
            this.opened.next();
            if (this._overlayRef) {
                this._overlayRef.getConfig()
                    .positionStrategy.setOrigin(coordinates);
                this._overlayRef.updatePosition();
            }
            else {
                this._overlayRef = this._overlay.create(this._getOverlayConfig(coordinates));
            }
            this._overlayRef.attach(this._getMenuContent());
            this._subscribeToOutsideClicks();
        }
    }
    /** Close the opened menu. */
    close() {
        this._menuStack.closeAll();
    }
    /**
     * Open the context menu and close any previously open menus.
     * @param event the mouse event which opens the context menu.
     */
    _openOnContextMenu(event) {
        var _a, _b, _c;
        if (!this.disabled) {
            // Prevent the native context menu from opening because we're opening a custom one.
            event.preventDefault();
            // Stop event propagation to ensure that only the closest enabled context menu opens.
            // Otherwise, any context menus attached to containing elements would *also* open,
            // resulting in multiple stacked context menus being displayed.
            event.stopPropagation();
            this._contextMenuTracker.update(this);
            this.open({ x: event.clientX, y: event.clientY });
            // A context menu can be triggered via a mouse right click or a keyboard shortcut.
            if (event.button === 2) {
                (_a = this._menuPanel._menu) === null || _a === void 0 ? void 0 : _a.focusFirstItem('mouse');
            }
            else if (event.button === 0) {
                (_b = this._menuPanel._menu) === null || _b === void 0 ? void 0 : _b.focusFirstItem('keyboard');
            }
            else {
                (_c = this._menuPanel._menu) === null || _c === void 0 ? void 0 : _c.focusFirstItem('program');
            }
        }
    }
    /** Whether the attached menu is open. */
    isOpen() {
        var _a;
        return !!((_a = this._overlayRef) === null || _a === void 0 ? void 0 : _a.hasAttached());
    }
    /**
     * Get the configuration object used to create the overlay.
     * @param coordinates the location to place the opened menu
     */
    _getOverlayConfig(coordinates) {
        return new OverlayConfig({
            positionStrategy: this._getOverlayPositionStrategy(coordinates),
            scrollStrategy: this._overlay.scrollStrategies.block(),
            direction: this._directionality,
        });
    }
    /**
     * Build the position strategy for the overlay which specifies where to place the menu.
     * @param coordinates the location to place the opened menu
     */
    _getOverlayPositionStrategy(coordinates) {
        return this._overlay
            .position()
            .flexibleConnectedTo(coordinates)
            .withDefaultOffsetX(this._options.offsetX)
            .withDefaultOffsetY(this._options.offsetY)
            .withPositions(this._getOverlayPositions());
    }
    /**
     * Determine and return where to position the opened menu relative to the mouse location.
     */
    _getOverlayPositions() {
        // TODO: this should be configurable through the injected context menu options
        return [
            { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top' },
            { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'top' },
            { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'bottom' },
            { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'bottom' },
        ];
    }
    /**
     * Get the portal to be attached to the overlay which contains the menu. Allows for the menu
     * content to change dynamically and be reflected in the application.
     */
    _getMenuContent() {
        var _a;
        const hasMenuContentChanged = this.menuPanel._templateRef !== ((_a = this._panelContent) === null || _a === void 0 ? void 0 : _a.templateRef);
        if (this.menuPanel && (!this._panelContent || hasMenuContentChanged)) {
            this._panelContent = new TemplatePortal(this.menuPanel._templateRef, this._viewContainerRef);
        }
        return this._panelContent;
    }
    /** Subscribe to the menu stack close events and close this menu when requested. */
    _setMenuStackListener() {
        this._menuStack.closed.pipe(takeUntil(this._destroyed)).subscribe(item => {
            if (item === this._menuPanel._menu && this.isOpen()) {
                this.closed.next();
                this._overlayRef.detach();
            }
        });
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
                    this._menuStack.closeAll();
                }
            });
        }
    }
    ngOnDestroy() {
        this._destroyOverlay();
        this._resetPanelMenuStack();
        this._destroyed.next();
        this._destroyed.complete();
    }
    /** Destroy and unset the overlay reference it if exists. */
    _destroyOverlay() {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
    }
    /** Set the menu panels menu stack back to null. */
    _resetPanelMenuStack() {
        // If a ContextMenuTrigger is placed in a conditionally rendered view, each time the trigger is
        // rendered the panel setter for ContextMenuTrigger is called. From the first render onward,
        // the attached CdkMenuPanel has the MenuStack set. Since we throw an error if a panel already
        // has a stack set, we want to reset the attached stack here to prevent the error from being
        // thrown if the trigger re-configures its attached panel (in the case where there is a 1:1
        // relationship between the panel and trigger).
        if (this._menuPanel) {
            this._menuPanel._menuStack = null;
        }
    }
}
CdkContextMenuTrigger.decorators = [
    { type: Directive, args: [{
                selector: '[cdkContextMenuTriggerFor]',
                exportAs: 'cdkContextMenuTriggerFor',
                host: {
                    '(contextmenu)': '_openOnContextMenu($event)',
                },
                providers: [
                    // In cases where the first menu item in the context menu is a trigger the submenu opens on a
                    // hover event. Offsetting the opened context menu by 2px prevents this from occurring.
                    { provide: CDK_CONTEXT_MENU_DEFAULT_OPTIONS, useValue: ɵ0 },
                ],
            },] }
];
CdkContextMenuTrigger.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: Overlay },
    { type: ContextMenuTracker },
    { type: undefined, decorators: [{ type: Inject, args: [CDK_CONTEXT_MENU_DEFAULT_OPTIONS,] }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
CdkContextMenuTrigger.propDecorators = {
    menuPanel: [{ type: Input, args: ['cdkContextMenuTriggerFor',] }],
    opened: [{ type: Output, args: ['cdkContextMenuOpened',] }],
    closed: [{ type: Output, args: ['cdkContextMenuClosed',] }],
    disabled: [{ type: Input, args: ['cdkContextMenuDisabled',] }]
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1tZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay1leHBlcmltZW50YWwvbWVudS9jb250ZXh0LW1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLE1BQU0sRUFDTixZQUFZLEVBQ1osUUFBUSxFQUVSLE1BQU0sRUFDTixVQUFVLEVBQ1YsY0FBYyxHQUNmLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsT0FBTyxFQUNQLGFBQWEsR0FHZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBQyxjQUFjLEVBQVMsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMscUJBQXFCLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3ZDLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFN0QsK0VBQStFO0FBRS9FLE1BQU0sT0FBTyxrQkFBa0I7SUFJN0I7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLE9BQThCOztRQUNuQyxJQUFJLGtCQUFrQixDQUFDLHVCQUF1QixLQUFLLE9BQU8sRUFBRTtZQUMxRCxNQUFBLGtCQUFrQixDQUFDLHVCQUF1QiwwQ0FBRSxLQUFLLEVBQUUs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LENBQUM7U0FDbkM7SUFDSCxDQUFDOzs7WUF4UEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsNEJBQTRCO2lCQUM5QztnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsNkZBQTZGO29CQUM3Rix1RkFBdUY7b0JBQ3ZGLEVBQUMsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLFFBQVEsSUFBMEIsRUFBQztpQkFDaEY7YUFDRjs7O1lBN0VDLGdCQUFnQjtZQVloQixPQUFPO1lBdUhpQyxrQkFBa0I7NENBQ3ZELE1BQU0sU0FBQyxnQ0FBZ0M7WUEzSHBDLGNBQWMsdUJBNEhqQixRQUFROzs7d0JBckRWLEtBQUssU0FBQywwQkFBMEI7cUJBa0JoQyxNQUFNLFNBQUMsc0JBQXNCO3FCQUc3QixNQUFNLFNBQUMsc0JBQXNCO3VCQUc3QixLQUFLLFNBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPcHRpb25hbCxcbiAgT25EZXN0cm95LFxuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdGlvblRva2VuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIE92ZXJsYXlSZWYsXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgQ29ubmVjdGVkUG9zaXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7VGVtcGxhdGVQb3J0YWwsIFBvcnRhbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge2NvZXJjZUJvb2xlYW5Qcm9wZXJ0eSwgQm9vbGVhbklucHV0fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtTdWJqZWN0LCBtZXJnZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge3Rha2VVbnRpbH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtDZGtNZW51UGFuZWx9IGZyb20gJy4vbWVudS1wYW5lbCc7XG5pbXBvcnQge01lbnVTdGFja30gZnJvbSAnLi9tZW51LXN0YWNrJztcbmltcG9ydCB7dGhyb3dFeGlzdGluZ01lbnVTdGFja0Vycm9yfSBmcm9tICcuL21lbnUtZXJyb3JzJztcbmltcG9ydCB7aXNDbGlja0luc2lkZU1lbnVPdmVybGF5fSBmcm9tICcuL21lbnUtaXRlbS10cmlnZ2VyJztcblxuLyoqIFRyYWNrcyB0aGUgbGFzdCBvcGVuIGNvbnRleHQgbWVudSB0cmlnZ2VyIGFjcm9zcyB0aGUgZW50aXJlIGFwcGxpY2F0aW9uLiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVUcmFja2VyIHtcbiAgLyoqIFRoZSBsYXN0IG9wZW4gY29udGV4dCBtZW51IHRyaWdnZXIuICovXG4gIHByaXZhdGUgc3RhdGljIF9vcGVuQ29udGV4dE1lbnVUcmlnZ2VyPzogQ2RrQ29udGV4dE1lbnVUcmlnZ2VyO1xuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgcHJldmlvdXMgb3BlbiBjb250ZXh0IG1lbnUgYW5kIHNldCB0aGUgZ2l2ZW4gb25lIGFzIGJlaW5nIG9wZW4uXG4gICAqIEBwYXJhbSB0cmlnZ2VyIHRoZSB0cmlnZ2VyIGZvciB0aGUgY3VycmVudGx5IG9wZW4gQ29udGV4dCBNZW51LlxuICAgKi9cbiAgdXBkYXRlKHRyaWdnZXI6IENka0NvbnRleHRNZW51VHJpZ2dlcikge1xuICAgIGlmIChDb250ZXh0TWVudVRyYWNrZXIuX29wZW5Db250ZXh0TWVudVRyaWdnZXIgIT09IHRyaWdnZXIpIHtcbiAgICAgIENvbnRleHRNZW51VHJhY2tlci5fb3BlbkNvbnRleHRNZW51VHJpZ2dlcj8uY2xvc2UoKTtcbiAgICAgIENvbnRleHRNZW51VHJhY2tlci5fb3BlbkNvbnRleHRNZW51VHJpZ2dlciA9IHRyaWdnZXI7XG4gICAgfVxuICB9XG59XG5cbi8qKiBDb25maWd1cmF0aW9uIG9wdGlvbnMgcGFzc2VkIHRvIHRoZSBjb250ZXh0IG1lbnUuICovXG5leHBvcnQgdHlwZSBDb250ZXh0TWVudU9wdGlvbnMgPSB7XG4gIC8qKiBUaGUgb3BlbmVkIG1lbnVzIFggY29vcmRpbmF0ZSBvZmZzZXQgZnJvbSB0aGUgdHJpZ2dlcmluZyBwb3NpdGlvbi4gKi9cbiAgb2Zmc2V0WDogbnVtYmVyO1xuXG4gIC8qKiBUaGUgb3BlbmVkIG1lbnVzIFkgY29vcmRpbmF0ZSBvZmZzZXQgZnJvbSB0aGUgdHJpZ2dlcmluZyBwb3NpdGlvbi4gKi9cbiAgb2Zmc2V0WTogbnVtYmVyO1xufTtcblxuLyoqIEluamVjdGlvbiB0b2tlbiBmb3IgdGhlIENvbnRleHRNZW51IG9wdGlvbnMgb2JqZWN0LiAqL1xuZXhwb3J0IGNvbnN0IENES19DT05URVhUX01FTlVfREVGQVVMVF9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPENvbnRleHRNZW51T3B0aW9ucz4oXG4gICdjZGstY29udGV4dC1tZW51LWRlZmF1bHQtb3B0aW9ucydcbik7XG5cbi8qKiBUaGUgY29vcmRpbmF0ZXMgb2Ygd2hlcmUgdGhlIGNvbnRleHQgbWVudSBzaG91bGQgb3Blbi4gKi9cbmV4cG9ydCB0eXBlIENvbnRleHRNZW51Q29vcmRpbmF0ZXMgPSB7eDogbnVtYmVyOyB5OiBudW1iZXJ9O1xuXG4vKipcbiAqIEEgZGlyZWN0aXZlIHdoaWNoIHdoZW4gcGxhY2VkIG9uIHNvbWUgZWxlbWVudCBvcGVucyBhIHRoZSBNZW51IGl0IGlzIGJvdW5kIHRvIHdoZW4gYSB1c2VyXG4gKiByaWdodC1jbGlja3Mgd2l0aGluIHRoYXQgZWxlbWVudC4gSXQgaXMgYXdhcmUgb2YgbmVzdGVkIENvbnRleHQgTWVudXMgYW5kIHRoZSBsb3dlc3QgbGV2ZWxcbiAqIG5vbi1kaXNhYmxlZCBjb250ZXh0IG1lbnUgd2lsbCB0cmlnZ2VyLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrQ29udGV4dE1lbnVUcmlnZ2VyRm9yXScsXG4gIGV4cG9ydEFzOiAnY2RrQ29udGV4dE1lbnVUcmlnZ2VyRm9yJyxcbiAgaG9zdDoge1xuICAgICcoY29udGV4dG1lbnUpJzogJ19vcGVuT25Db250ZXh0TWVudSgkZXZlbnQpJyxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gSW4gY2FzZXMgd2hlcmUgdGhlIGZpcnN0IG1lbnUgaXRlbSBpbiB0aGUgY29udGV4dCBtZW51IGlzIGEgdHJpZ2dlciB0aGUgc3VibWVudSBvcGVucyBvbiBhXG4gICAgLy8gaG92ZXIgZXZlbnQuIE9mZnNldHRpbmcgdGhlIG9wZW5lZCBjb250ZXh0IG1lbnUgYnkgMnB4IHByZXZlbnRzIHRoaXMgZnJvbSBvY2N1cnJpbmcuXG4gICAge3Byb3ZpZGU6IENES19DT05URVhUX01FTlVfREVGQVVMVF9PUFRJT05TLCB1c2VWYWx1ZToge29mZnNldFg6IDIsIG9mZnNldFk6IDJ9fSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ29udGV4dE1lbnVUcmlnZ2VyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqIFRlbXBsYXRlIHJlZmVyZW5jZSB2YXJpYWJsZSB0byB0aGUgbWVudSB0byBvcGVuIG9uIHJpZ2h0IGNsaWNrLiAqL1xuICBASW5wdXQoJ2Nka0NvbnRleHRNZW51VHJpZ2dlckZvcicpXG4gIGdldCBtZW51UGFuZWwoKTogQ2RrTWVudVBhbmVsIHtcbiAgICByZXR1cm4gdGhpcy5fbWVudVBhbmVsO1xuICB9XG4gIHNldCBtZW51UGFuZWwocGFuZWw6IENka01lbnVQYW5lbCkge1xuICAgIGlmICgodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSAmJiBwYW5lbC5fbWVudVN0YWNrKSB7XG4gICAgICB0aHJvd0V4aXN0aW5nTWVudVN0YWNrRXJyb3IoKTtcbiAgICB9XG4gICAgdGhpcy5fbWVudVBhbmVsID0gcGFuZWw7XG5cbiAgICBpZiAodGhpcy5fbWVudVBhbmVsKSB7XG4gICAgICB0aGlzLl9tZW51UGFuZWwuX21lbnVTdGFjayA9IHRoaXMuX21lbnVTdGFjaztcbiAgICB9XG4gIH1cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgTWVudVBhbmVsIHRoaXMgdHJpZ2dlciB0b2dnbGVzLiAqL1xuICBwcml2YXRlIF9tZW51UGFuZWw6IENka01lbnVQYW5lbDtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgYXR0YWNoZWQgbWVudSBpcyByZXF1ZXN0ZWQgdG8gb3Blbi4gKi9cbiAgQE91dHB1dCgnY2RrQ29udGV4dE1lbnVPcGVuZWQnKSByZWFkb25seSBvcGVuZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgYXR0YWNoZWQgbWVudSBpcyByZXF1ZXN0ZWQgdG8gY2xvc2UuICovXG4gIEBPdXRwdXQoJ2Nka0NvbnRleHRNZW51Q2xvc2VkJykgcmVhZG9ubHkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbnRleHQgbWVudSBzaG91bGQgYmUgZGlzYWJsZWQuICovXG4gIEBJbnB1dCgnY2RrQ29udGV4dE1lbnVEaXNhYmxlZCcpXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBvdmVybGF5IHdoaWNoIG1hbmFnZXMgdGhlIHRyaWdnZXJlZCBtZW51LiAqL1xuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFRoZSBjb250ZW50IG9mIHRoZSBtZW51IHBhbmVsIG9wZW5lZCBieSB0aGlzIHRyaWdnZXIuICovXG4gIHByaXZhdGUgX3BhbmVsQ29udGVudDogVGVtcGxhdGVQb3J0YWw7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGVsZW1lbnQgaXMgZGVzdHJveWVkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95ZWQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIC8qKiBUaGUgbWVudSBzdGFjayBmb3IgdGhpcyB0cmlnZ2VyIGFuZCBpdHMgYXNzb2NpYXRlZCBtZW51cy4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfbWVudVN0YWNrID0gbmV3IE1lbnVTdGFjaygpO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBvdXRzaWRlIHBvaW50ZXIgZXZlbnRzIGxpc3RlbmVyIG9uIHRoZSBvdmVybGF5IHNob3VsZCBiZSBzdG9wcGVkLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9zdG9wT3V0c2lkZUNsaWNrc0xpc3RlbmVyID0gbWVyZ2UodGhpcy5jbG9zZWQsIHRoaXMuX2Rlc3Ryb3llZCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29udGV4dE1lbnVUcmFja2VyOiBDb250ZXh0TWVudVRyYWNrZXIsXG4gICAgQEluamVjdChDREtfQ09OVEVYVF9NRU5VX0RFRkFVTFRfT1BUSU9OUykgcHJpdmF0ZSByZWFkb25seSBfb3B0aW9uczogQ29udGV4dE1lbnVPcHRpb25zLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgX2RpcmVjdGlvbmFsaXR5PzogRGlyZWN0aW9uYWxpdHlcbiAgKSB7XG4gICAgdGhpcy5fc2V0TWVudVN0YWNrTGlzdGVuZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBhdHRhY2hlZCBtZW51IGF0IHRoZSBzcGVjaWZpZWQgbG9jYXRpb24uXG4gICAqIEBwYXJhbSBjb29yZGluYXRlcyB3aGVyZSB0byBvcGVuIHRoZSBjb250ZXh0IG1lbnVcbiAgICovXG4gIG9wZW4oY29vcmRpbmF0ZXM6IENvbnRleHRNZW51Q29vcmRpbmF0ZXMpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgLy8gc2luY2Ugd2UncmUgbW92aW5nIHRoaXMgbWVudSB3ZSBuZWVkIHRvIGNsb3NlIGFueSBzdWJtZW51cyBmaXJzdCBvdGhlcndpc2UgdGhleSBlbmQgdXBcbiAgICAgIC8vIGRpc2Nvbm5lY3RlZCBmcm9tIHRoaXMgb25lLlxuICAgICAgdGhpcy5fbWVudVN0YWNrLmNsb3NlU3ViTWVudU9mKHRoaXMuX21lbnVQYW5lbC5fbWVudSEpO1xuXG4gICAgICAodGhpcy5fb3ZlcmxheVJlZiEuZ2V0Q29uZmlnKClcbiAgICAgICAgLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5KS5zZXRPcmlnaW4oY29vcmRpbmF0ZXMpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZiEudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuZWQubmV4dCgpO1xuXG4gICAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgICAodGhpcy5fb3ZlcmxheVJlZi5nZXRDb25maWcoKVxuICAgICAgICAgIC5wb3NpdGlvblN0cmF0ZWd5IGFzIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSkuc2V0T3JpZ2luKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMuX2dldE92ZXJsYXlDb25maWcoY29vcmRpbmF0ZXMpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5hdHRhY2godGhpcy5fZ2V0TWVudUNvbnRlbnQoKSk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVUb091dHNpZGVDbGlja3MoKTtcbiAgICB9XG4gIH1cblxuICAvKiogQ2xvc2UgdGhlIG9wZW5lZCBtZW51LiAqL1xuICBjbG9zZSgpIHtcbiAgICB0aGlzLl9tZW51U3RhY2suY2xvc2VBbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBjb250ZXh0IG1lbnUgYW5kIGNsb3NlIGFueSBwcmV2aW91c2x5IG9wZW4gbWVudXMuXG4gICAqIEBwYXJhbSBldmVudCB0aGUgbW91c2UgZXZlbnQgd2hpY2ggb3BlbnMgdGhlIGNvbnRleHQgbWVudS5cbiAgICovXG4gIF9vcGVuT25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgLy8gUHJldmVudCB0aGUgbmF0aXZlIGNvbnRleHQgbWVudSBmcm9tIG9wZW5pbmcgYmVjYXVzZSB3ZSdyZSBvcGVuaW5nIGEgY3VzdG9tIG9uZS5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIFN0b3AgZXZlbnQgcHJvcGFnYXRpb24gdG8gZW5zdXJlIHRoYXQgb25seSB0aGUgY2xvc2VzdCBlbmFibGVkIGNvbnRleHQgbWVudSBvcGVucy5cbiAgICAgIC8vIE90aGVyd2lzZSwgYW55IGNvbnRleHQgbWVudXMgYXR0YWNoZWQgdG8gY29udGFpbmluZyBlbGVtZW50cyB3b3VsZCAqYWxzbyogb3BlbixcbiAgICAgIC8vIHJlc3VsdGluZyBpbiBtdWx0aXBsZSBzdGFja2VkIGNvbnRleHQgbWVudXMgYmVpbmcgZGlzcGxheWVkLlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHRoaXMuX2NvbnRleHRNZW51VHJhY2tlci51cGRhdGUodGhpcyk7XG4gICAgICB0aGlzLm9wZW4oe3g6IGV2ZW50LmNsaWVudFgsIHk6IGV2ZW50LmNsaWVudFl9KTtcblxuICAgICAgLy8gQSBjb250ZXh0IG1lbnUgY2FuIGJlIHRyaWdnZXJlZCB2aWEgYSBtb3VzZSByaWdodCBjbGljayBvciBhIGtleWJvYXJkIHNob3J0Y3V0LlxuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMikge1xuICAgICAgICB0aGlzLl9tZW51UGFuZWwuX21lbnU/LmZvY3VzRmlyc3RJdGVtKCdtb3VzZScpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgICAgdGhpcy5fbWVudVBhbmVsLl9tZW51Py5mb2N1c0ZpcnN0SXRlbSgna2V5Ym9hcmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX21lbnVQYW5lbC5fbWVudT8uZm9jdXNGaXJzdEl0ZW0oJ3Byb2dyYW0nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgYXR0YWNoZWQgbWVudSBpcyBvcGVuLiAqL1xuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuICEhdGhpcy5fb3ZlcmxheVJlZj8uaGFzQXR0YWNoZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHVzZWQgdG8gY3JlYXRlIHRoZSBvdmVybGF5LlxuICAgKiBAcGFyYW0gY29vcmRpbmF0ZXMgdGhlIGxvY2F0aW9uIHRvIHBsYWNlIHRoZSBvcGVuZWQgbWVudVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0T3ZlcmxheUNvbmZpZyhjb29yZGluYXRlczogQ29udGV4dE1lbnVDb29yZGluYXRlcykge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9nZXRPdmVybGF5UG9zaXRpb25TdHJhdGVneShjb29yZGluYXRlcyksXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCksXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX2RpcmVjdGlvbmFsaXR5LFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBwb3NpdGlvbiBzdHJhdGVneSBmb3IgdGhlIG92ZXJsYXkgd2hpY2ggc3BlY2lmaWVzIHdoZXJlIHRvIHBsYWNlIHRoZSBtZW51LlxuICAgKiBAcGFyYW0gY29vcmRpbmF0ZXMgdGhlIGxvY2F0aW9uIHRvIHBsYWNlIHRoZSBvcGVuZWQgbWVudVxuICAgKi9cbiAgcHJpdmF0ZSBfZ2V0T3ZlcmxheVBvc2l0aW9uU3RyYXRlZ3koXG4gICAgY29vcmRpbmF0ZXM6IENvbnRleHRNZW51Q29vcmRpbmF0ZXNcbiAgKTogRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKGNvb3JkaW5hdGVzKVxuICAgICAgLndpdGhEZWZhdWx0T2Zmc2V0WCh0aGlzLl9vcHRpb25zLm9mZnNldFgpXG4gICAgICAud2l0aERlZmF1bHRPZmZzZXRZKHRoaXMuX29wdGlvbnMub2Zmc2V0WSlcbiAgICAgIC53aXRoUG9zaXRpb25zKHRoaXMuX2dldE92ZXJsYXlQb3NpdGlvbnMoKSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGFuZCByZXR1cm4gd2hlcmUgdG8gcG9zaXRpb24gdGhlIG9wZW5lZCBtZW51IHJlbGF0aXZlIHRvIHRoZSBtb3VzZSBsb2NhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX2dldE92ZXJsYXlQb3NpdGlvbnMoKTogQ29ubmVjdGVkUG9zaXRpb25bXSB7XG4gICAgLy8gVE9ETzogdGhpcyBzaG91bGQgYmUgY29uZmlndXJhYmxlIHRocm91Z2ggdGhlIGluamVjdGVkIGNvbnRleHQgbWVudSBvcHRpb25zXG4gICAgcmV0dXJuIFtcbiAgICAgIHtvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ3RvcCcsIG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCd9LFxuICAgICAge29yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnLCBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAndG9wJ30sXG4gICAgICB7b3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICdib3R0b20nLCBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nfSxcbiAgICAgIHtvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJywgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbSd9LFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwb3J0YWwgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIG92ZXJsYXkgd2hpY2ggY29udGFpbnMgdGhlIG1lbnUuIEFsbG93cyBmb3IgdGhlIG1lbnVcbiAgICogY29udGVudCB0byBjaGFuZ2UgZHluYW1pY2FsbHkgYW5kIGJlIHJlZmxlY3RlZCBpbiB0aGUgYXBwbGljYXRpb24uXG4gICAqL1xuICBwcml2YXRlIF9nZXRNZW51Q29udGVudCgpOiBQb3J0YWw8dW5rbm93bj4ge1xuICAgIGNvbnN0IGhhc01lbnVDb250ZW50Q2hhbmdlZCA9IHRoaXMubWVudVBhbmVsLl90ZW1wbGF0ZVJlZiAhPT0gdGhpcy5fcGFuZWxDb250ZW50Py50ZW1wbGF0ZVJlZjtcbiAgICBpZiAodGhpcy5tZW51UGFuZWwgJiYgKCF0aGlzLl9wYW5lbENvbnRlbnQgfHwgaGFzTWVudUNvbnRlbnRDaGFuZ2VkKSkge1xuICAgICAgdGhpcy5fcGFuZWxDb250ZW50ID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMubWVudVBhbmVsLl90ZW1wbGF0ZVJlZiwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3BhbmVsQ29udGVudDtcbiAgfVxuXG4gIC8qKiBTdWJzY3JpYmUgdG8gdGhlIG1lbnUgc3RhY2sgY2xvc2UgZXZlbnRzIGFuZCBjbG9zZSB0aGlzIG1lbnUgd2hlbiByZXF1ZXN0ZWQuICovXG4gIHByaXZhdGUgX3NldE1lbnVTdGFja0xpc3RlbmVyKCkge1xuICAgIHRoaXMuX21lbnVTdGFjay5jbG9zZWQucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveWVkKSkuc3Vic2NyaWJlKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0gPT09IHRoaXMuX21lbnVQYW5lbC5fbWVudSAmJiB0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkLm5leHQoKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZiEuZGV0YWNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIHRoZSBvdmVybGF5cyBvdXRzaWRlIHBvaW50ZXIgZXZlbnRzIHN0cmVhbSBhbmQgaGFuZGxlIGNsb3Npbmcgb3V0IHRoZSBzdGFjayBpZiBhXG4gICAqIGNsaWNrIG9jY3VycyBvdXRzaWRlIHRoZSBtZW51cy5cbiAgICovXG4gIHByaXZhdGUgX3N1YnNjcmliZVRvT3V0c2lkZUNsaWNrcygpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZlxuICAgICAgICAub3V0c2lkZVBvaW50ZXJFdmVudHMoKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fc3RvcE91dHNpZGVDbGlja3NMaXN0ZW5lcikpXG4gICAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghaXNDbGlja0luc2lkZU1lbnVPdmVybGF5KGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5fbWVudVN0YWNrLmNsb3NlQWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95T3ZlcmxheSgpO1xuICAgIHRoaXMuX3Jlc2V0UGFuZWxNZW51U3RhY2soKTtcblxuICAgIHRoaXMuX2Rlc3Ryb3llZC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveWVkLmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogRGVzdHJveSBhbmQgdW5zZXQgdGhlIG92ZXJsYXkgcmVmZXJlbmNlIGl0IGlmIGV4aXN0cy4gKi9cbiAgcHJpdmF0ZSBfZGVzdHJveU92ZXJsYXkoKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldCB0aGUgbWVudSBwYW5lbHMgbWVudSBzdGFjayBiYWNrIHRvIG51bGwuICovXG4gIHByaXZhdGUgX3Jlc2V0UGFuZWxNZW51U3RhY2soKSB7XG4gICAgLy8gSWYgYSBDb250ZXh0TWVudVRyaWdnZXIgaXMgcGxhY2VkIGluIGEgY29uZGl0aW9uYWxseSByZW5kZXJlZCB2aWV3LCBlYWNoIHRpbWUgdGhlIHRyaWdnZXIgaXNcbiAgICAvLyByZW5kZXJlZCB0aGUgcGFuZWwgc2V0dGVyIGZvciBDb250ZXh0TWVudVRyaWdnZXIgaXMgY2FsbGVkLiBGcm9tIHRoZSBmaXJzdCByZW5kZXIgb253YXJkLFxuICAgIC8vIHRoZSBhdHRhY2hlZCBDZGtNZW51UGFuZWwgaGFzIHRoZSBNZW51U3RhY2sgc2V0LiBTaW5jZSB3ZSB0aHJvdyBhbiBlcnJvciBpZiBhIHBhbmVsIGFscmVhZHlcbiAgICAvLyBoYXMgYSBzdGFjayBzZXQsIHdlIHdhbnQgdG8gcmVzZXQgdGhlIGF0dGFjaGVkIHN0YWNrIGhlcmUgdG8gcHJldmVudCB0aGUgZXJyb3IgZnJvbSBiZWluZ1xuICAgIC8vIHRocm93biBpZiB0aGUgdHJpZ2dlciByZS1jb25maWd1cmVzIGl0cyBhdHRhY2hlZCBwYW5lbCAoaW4gdGhlIGNhc2Ugd2hlcmUgdGhlcmUgaXMgYSAxOjFcbiAgICAvLyByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgcGFuZWwgYW5kIHRyaWdnZXIpLlxuICAgIGlmICh0aGlzLl9tZW51UGFuZWwpIHtcbiAgICAgIHRoaXMuX21lbnVQYW5lbC5fbWVudVN0YWNrID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==