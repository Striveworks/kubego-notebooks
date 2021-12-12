/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, NgZone, InjectionToken, Directive } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { throwMissingPointerFocusTracker, throwMissingMenuReference } from './menu-errors';
/** Injection token used for an implementation of MenuAim. */
export const MENU_AIM = new InjectionToken('cdk-menu-aim');
/** Capture every nth mouse move event. */
const MOUSE_MOVE_SAMPLE_FREQUENCY = 3;
/** The number of mouse move events to track. */
const NUM_POINTS = 5;
/**
 * How long to wait before closing a sibling menu if a user stops short of the submenu they were
 * predicted to go into.
 */
const CLOSE_DELAY = 300;
/** Calculate the slope between point a and b. */
function getSlope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
}
/** Calculate the y intercept for the given point and slope. */
function getYIntercept(point, slope) {
    return point.y - slope * point.x;
}
/**
 * Whether the given mouse trajectory line defined by the slope and y intercept falls within the
 * submenu as defined by `submenuPoints`
 * @param submenuPoints the submenu DOMRect points.
 * @param m the slope of the trajectory line.
 * @param b the y intercept of the trajectory line.
 *
 * @return true if any point on the line falls within the submenu.
 */
function isWithinSubmenu(submenuPoints, m, b) {
    const { left, right, top, bottom } = submenuPoints;
    // Check for intersection with each edge of the submenu (left, right, top, bottom)
    // by fixing one coordinate to that edge's coordinate (either x or y) and checking if the
    // other coordinate is within bounds.
    return ((m * left + b >= top && m * left + b <= bottom) ||
        (m * right + b >= top && m * right + b <= bottom) ||
        ((top - b) / m >= left && (top - b) / m <= right) ||
        ((bottom - b) / m >= left && (bottom - b) / m <= right));
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
export class TargetMenuAim {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        /** The last NUM_POINTS mouse move events. */
        this._points = [];
        /** Emits when this service is destroyed. */
        this._destroyed = new Subject();
    }
    /** Set the Menu and its PointerFocusTracker. */
    initialize(menu, pointerTracker) {
        this._menu = menu;
        this._pointerTracker = pointerTracker;
        this._subscribeToMouseMoves();
    }
    /**
     * Calls the `doToggle` callback when it is deemed that the user is not moving towards
     * the submenu.
     * @param doToggle the function called when the user is not moving towards the submenu.
     */
    toggle(doToggle) {
        // If the menu is horizontal the sub-menus open below and there is no risk of premature
        // closing of any sub-menus therefore we automatically resolve the callback.
        if (this._menu.orientation === 'horizontal') {
            doToggle();
        }
        this._checkConfigured();
        const siblingItemIsWaiting = !!this._timeoutId;
        const hasPoints = this._points.length > 1;
        if (hasPoints && !siblingItemIsWaiting) {
            if (this._isMovingToSubmenu()) {
                this._startTimeout(doToggle);
            }
            else {
                doToggle();
            }
        }
        else if (!siblingItemIsWaiting) {
            doToggle();
        }
    }
    /**
     * Start the delayed toggle handler if one isn't running already.
     *
     * The delayed toggle handler executes the `doToggle` callback after some period of time iff the
     * users mouse is on an item in the current menu.
     */
    _startTimeout(doToggle) {
        // If the users mouse is moving towards a submenu we don't want to immediately resolve.
        // Wait for some period of time before determining if the previous menu should close in
        // cases where the user may have moved towards the submenu but stopped on a sibling menu
        // item intentionally.
        const timeoutId = setTimeout(() => {
            // Resolve if the user is currently moused over some element in the root menu
            if (this._pointerTracker.activeElement && timeoutId === this._timeoutId) {
                doToggle();
            }
            this._timeoutId = null;
        }, CLOSE_DELAY);
        this._timeoutId = timeoutId;
    }
    /** Whether the user is heading towards the open submenu. */
    _isMovingToSubmenu() {
        const submenuPoints = this._getSubmenuBounds();
        if (!submenuPoints) {
            return false;
        }
        let numMoving = 0;
        const currPoint = this._points[this._points.length - 1];
        // start from the second last point and calculate the slope between each point and the last
        // point.
        for (let i = this._points.length - 2; i >= 0; i--) {
            const previous = this._points[i];
            const slope = getSlope(currPoint, previous);
            if (isWithinSubmenu(submenuPoints, slope, getYIntercept(currPoint, slope))) {
                numMoving++;
            }
        }
        return numMoving >= Math.floor(NUM_POINTS / 2);
    }
    /** Get the bounding DOMRect for the open submenu. */
    _getSubmenuBounds() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this._pointerTracker) === null || _a === void 0 ? void 0 : _a.previousElement) === null || _b === void 0 ? void 0 : _b.getMenu()) === null || _c === void 0 ? void 0 : _c._elementRef.nativeElement.getBoundingClientRect();
    }
    /**
     * Check if a reference to the PointerFocusTracker and menu element is provided.
     * @throws an error if neither reference is provided.
     */
    _checkConfigured() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._pointerTracker) {
                throwMissingPointerFocusTracker();
            }
            if (!this._menu) {
                throwMissingMenuReference();
            }
        }
    }
    /** Subscribe to the root menus mouse move events and update the tracked mouse points. */
    _subscribeToMouseMoves() {
        this._ngZone.runOutsideAngular(() => {
            fromEvent(this._menu._elementRef.nativeElement, 'mousemove')
                .pipe(filter((_, index) => index % MOUSE_MOVE_SAMPLE_FREQUENCY === 0), takeUntil(this._destroyed))
                .subscribe((event) => {
                this._points.push({ x: event.clientX, y: event.clientY });
                if (this._points.length > NUM_POINTS) {
                    this._points.shift();
                }
            });
        });
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
}
TargetMenuAim.decorators = [
    { type: Injectable }
];
TargetMenuAim.ctorParameters = () => [
    { type: NgZone }
];
/**
 * CdkTargetMenuAim is a provider for the TargetMenuAim service. It should be added to an
 * element with either the `cdkMenu` or `cdkMenuBar` directive and child menu items.
 */
export class CdkTargetMenuAim {
}
CdkTargetMenuAim.decorators = [
    { type: Directive, args: [{
                selector: '[cdkTargetMenuAim]',
                exportAs: 'cdkTargetMenuAim',
                providers: [{ provide: MENU_AIM, useClass: TargetMenuAim }],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1haW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L21lbnUtYWltLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFhLGNBQWMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRCxPQUFPLEVBQUMsK0JBQStCLEVBQUUseUJBQXlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFtQnpGLDZEQUE2RDtBQUM3RCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQVUsY0FBYyxDQUFDLENBQUM7QUFFcEUsMENBQTBDO0FBQzFDLE1BQU0sMkJBQTJCLEdBQUcsQ0FBQyxDQUFDO0FBRXRDLGdEQUFnRDtBQUNoRCxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFFckI7OztHQUdHO0FBQ0gsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBVXhCLGlEQUFpRDtBQUNqRCxTQUFTLFFBQVEsQ0FBQyxDQUFRLEVBQUUsQ0FBUTtJQUNsQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsK0RBQStEO0FBQy9ELFNBQVMsYUFBYSxDQUFDLEtBQVksRUFBRSxLQUFhO0lBQ2hELE9BQU8sS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBS0Q7Ozs7Ozs7O0dB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b0JBQW9CO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO2FBQzFEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZSwgTmdab25lLCBPbkRlc3Ryb3ksIEluamVjdGlvblRva2VuLCBEaXJlY3RpdmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtmcm9tRXZlbnQsIFN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHt0YWtlVW50aWwsIGZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtQb2ludGVyRm9jdXNUcmFja2VyLCBGb2N1c2FibGVFbGVtZW50fSBmcm9tICcuL3BvaW50ZXItZm9jdXMtdHJhY2tlcic7XG5pbXBvcnQge01lbnV9IGZyb20gJy4vbWVudS1pbnRlcmZhY2UnO1xuaW1wb3J0IHt0aHJvd01pc3NpbmdQb2ludGVyRm9jdXNUcmFja2VyLCB0aHJvd01pc3NpbmdNZW51UmVmZXJlbmNlfSBmcm9tICcuL21lbnUtZXJyb3JzJztcblxuLyoqXG4gKiBNZW51QWltIGlzIHJlc3BvbnNpYmxlIGZvciBkZXRlcm1pbmluZyBpZiBhIHNpYmxpbmcgbWVudWl0ZW0ncyBtZW51IHNob3VsZCBiZSBjbG9zZWQgd2hlbiBhXG4gKiBUb2dnbGVyIGl0ZW0gaXMgaG92ZXJlZCBpbnRvLiBJdCBpcyB1cCB0byB0aGUgaG92ZXJlZCBpbiBpdGVtIHRvIGNhbGwgdGhlIE1lbnVBaW0gc2VydmljZSBpblxuICogb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IG1heSBwZXJmb3JtIGl0cyBjbG9zZSBhY3Rpb25zLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVBaW0ge1xuICAvKiogU2V0IHRoZSBNZW51IGFuZCBpdHMgUG9pbnRlckZvY3VzVHJhY2tlci4gKi9cbiAgaW5pdGlhbGl6ZShtZW51OiBNZW51LCBwb2ludGVyVHJhY2tlcjogUG9pbnRlckZvY3VzVHJhY2tlcjxGb2N1c2FibGVFbGVtZW50ICYgVG9nZ2xlcj4pOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgYGRvVG9nZ2xlYCBjYWxsYmFjayB3aGVuIGl0IGlzIGRlZW1lZCB0aGF0IHRoZSB1c2VyIGlzIG5vdCBtb3ZpbmcgdG93YXJkc1xuICAgKiB0aGUgc3VibWVudS5cbiAgICogQHBhcmFtIGRvVG9nZ2xlIHRoZSBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGUgdXNlciBpcyBub3QgbW92aW5nIHRvd2FyZHMgdGhlIHN1Ym1lbnUuXG4gICAqL1xuICB0b2dnbGUoZG9Ub2dnbGU6ICgpID0+IHZvaWQpOiB2b2lkO1xufVxuXG4vKiogSW5qZWN0aW9uIHRva2VuIHVzZWQgZm9yIGFuIGltcGxlbWVudGF0aW9uIG9mIE1lbnVBaW0uICovXG5leHBvcnQgY29uc3QgTUVOVV9BSU0gPSBuZXcgSW5qZWN0aW9uVG9rZW48TWVudUFpbT4oJ2Nkay1tZW51LWFpbScpO1xuXG4vKiogQ2FwdHVyZSBldmVyeSBudGggbW91c2UgbW92ZSBldmVudC4gKi9cbmNvbnN0IE1PVVNFX01PVkVfU0FNUExFX0ZSRVFVRU5DWSA9IDM7XG5cbi8qKiBUaGUgbnVtYmVyIG9mIG1vdXNlIG1vdmUgZXZlbnRzIHRvIHRyYWNrLiAqL1xuY29uc3QgTlVNX1BPSU5UUyA9IDU7XG5cbi8qKlxuICogSG93IGxvbmcgdG8gd2FpdCBiZWZvcmUgY2xvc2luZyBhIHNpYmxpbmcgbWVudSBpZiBhIHVzZXIgc3RvcHMgc2hvcnQgb2YgdGhlIHN1Ym1lbnUgdGhleSB3ZXJlXG4gKiBwcmVkaWN0ZWQgdG8gZ28gaW50by5cbiAqL1xuY29uc3QgQ0xPU0VfREVMQVkgPSAzMDA7XG5cbi8qKlxuICogQW4gZWxlbWVudCB3aGljaCB3aGVuIGhvdmVyZWQgb3ZlciBtYXkgcGVyZm9ybSBjbG9zaW5nIGFjdGlvbnMgb24gdGhlIG9wZW4gc3VibWVudSBhbmRcbiAqIHBvdGVudGlhbGx5IG9wZW4gaXRzIG93biBtZW51LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRvZ2dsZXIge1xuICBnZXRNZW51KCk6IE1lbnUgfCB1bmRlZmluZWQ7XG59XG5cbi8qKiBDYWxjdWxhdGUgdGhlIHNsb3BlIGJldHdlZW4gcG9pbnQgYSBhbmQgYi4gKi9cbmZ1bmN0aW9uIGdldFNsb3BlKGE6IFBvaW50LCBiOiBQb2ludCkge1xuICByZXR1cm4gKGIueSAtIGEueSkgLyAoYi54IC0gYS54KTtcbn1cblxuLyoqIENhbGN1bGF0ZSB0aGUgeSBpbnRlcmNlcHQgZm9yIHRoZSBnaXZlbiBwb2ludCBhbmQgc2xvcGUuICovXG5mdW5jdGlvbiBnZXRZSW50ZXJjZXB0KHBvaW50OiBQb2ludCwgc2xvcGU6IG51bWJlcikge1xuICByZXR1cm4gcG9pbnQueSAtIHNsb3BlICogcG9pbnQueDtcbn1cblxuLyoqIFJlcHJlc2VudHMgYSBjb29yZGluYXRlIG9mIG1vdXNlIHRyYXZlbC4gKi9cbnR5cGUgUG9pbnQgPSB7eDogbnVtYmVyOyB5OiBudW1iZXJ9O1xuXG4vKipcbiAqIFdoZXRoZXIgdGhlIGdpdmVuIG1vdXNlIHRyYWplY3RvcnkgbGluZSBkZWZpbmVkIGJ5IHRoZSBzbG9wZSBhbmQgeSBpbnRlcmNlcHQgZmFsbHMgd2l0aGluIHRoZVxuICogc3VibWVudSBhcyBkZWZpbmVkIGJ5IGBzdWJtZW51UG9pbnRzYFxuICogQHBhcmFtIHN1Ym1lbnVQb2ludHMgdGhlIHN1Ym1lbnUgRE9NUmVjdCBwb2ludHMuXG4gKiBAcGFyYW0gbSB0aGUgc2xvcGUgb2YgdGhlIHRyYWplY3RvcnkgbGluZS5cbiAqIEBwYXJhbSBiIHRoZSB5IGludGVyY2VwdCBvZiB0aGUgdHJhamVjdG9yeSBsaW5lLlxuICpcbiAqIEByZXR1cm4gdHJ1ZSBpZiBhbnkgcG9pbnQgb24gdGhlIGxpbmUgZmFsbHMgd2l0aGluIHRoZSBzdWJtZW51LlxuICovXG5mdW5jdGlvbiBpc1dpdGhpblN1Ym1lbnUoc3VibWVudVBvaW50czogRE9NUmVjdCwgbTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgY29uc3Qge2xlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbX0gPSBzdWJtZW51UG9pbnRzO1xuXG4gIC8vIENoZWNrIGZvciBpbnRlcnNlY3Rpb24gd2l0aCBlYWNoIGVkZ2Ugb2YgdGhlIHN1Ym1lbnUgKGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSlcbiAgLy8gYnkgZml4aW5nIG9uZSBjb29yZGluYXRlIHRvIHRoYXQgZWRnZSdzIGNvb3JkaW5hdGUgKGVpdGhlciB4IG9yIHkpIGFuZCBjaGVja2luZyBpZiB0aGVcbiAgLy8gb3RoZXIgY29vcmRpbmF0ZSBpcyB3aXRoaW4gYm91bmRzLlxuICByZXR1cm4gKFxuICAgIChtICogbGVmdCArIGIgPj0gdG9wICYmIG0gKiBsZWZ0ICsgYiA8PSBib3R0b20pIHx8XG4gICAgKG0gKiByaWdodCArIGIgPj0gdG9wICYmIG0gKiByaWdodCArIGIgPD0gYm90dG9tKSB8fFxuICAgICgodG9wIC0gYikgLyBtID49IGxlZnQgJiYgKHRvcCAtIGIpIC8gbSA8PSByaWdodCkgfHxcbiAgICAoKGJvdHRvbSAtIGIpIC8gbSA+PSBsZWZ0ICYmIChib3R0b20gLSBiKSAvIG0gPD0gcmlnaHQpXG4gICk7XG59XG4vKipcbiAqIFRhcmdldE1lbnVBaW0gcHJlZGljdHMgaWYgYSB1c2VyIGlzIG1vdmluZyBpbnRvIGEgc3VibWVudS4gSXQgY2FsY3VsYXRlcyB0aGVcbiAqIHRyYWplY3Rvcnkgb2YgdGhlIHVzZXIncyBtb3VzZSBtb3ZlbWVudCBpbiB0aGUgY3VycmVudCBtZW51IHRvIGRldGVybWluZSBpZiB0aGVcbiAqIG1vdXNlIGlzIG1vdmluZyB0b3dhcmRzIGFuIG9wZW4gc3VibWVudS5cbiAqXG4gKiBUaGUgZGV0ZXJtaW5hdGlvbiBpcyBtYWRlIGJ5IGNhbGN1bGF0aW5nIHRoZSBzbG9wZSBvZiB0aGUgdXNlcnMgbGFzdCBOVU1fUE9JTlRTIG1vdmVzIHdoZXJlIGVhY2hcbiAqIHBhaXIgb2YgcG9pbnRzIGRldGVybWluZXMgaWYgdGhlIHRyYWplY3RvcnkgbGluZSBwb2ludHMgaW50byB0aGUgc3VibWVudS4gSXQgdXNlcyBjb25zZW5zdXNcbiAqIGFwcHJvYWNoIGJ5IGNoZWNraW5nIGlmIGF0IGxlYXN0IE5VTV9QT0lOVFMgLyAyIHBhaXJzIGRldGVybWluZSB0aGF0IHRoZSB1c2VyIGlzIG1vdmluZyB0b3dhcmRzXG4gKiB0byBzdWJtZW51LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFyZ2V0TWVudUFpbSBpbXBsZW1lbnRzIE1lbnVBaW0sIE9uRGVzdHJveSB7XG4gIC8qKiBUaGUgbGFzdCBOVU1fUE9JTlRTIG1vdXNlIG1vdmUgZXZlbnRzLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9wb2ludHM6IFBvaW50W10gPSBbXTtcblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSByb290IG1lbnUgaW4gd2hpY2ggd2UgYXJlIHRyYWNraW5nIG1vdXNlIG1vdmVzLiAqL1xuICBwcml2YXRlIF9tZW51OiBNZW51O1xuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIHJvb3QgbWVudSdzIG1vdXNlIG1hbmFnZXIuICovXG4gIHByaXZhdGUgX3BvaW50ZXJUcmFja2VyOiBQb2ludGVyRm9jdXNUcmFja2VyPFRvZ2dsZXIgJiBGb2N1c2FibGVFbGVtZW50PjtcblxuICAvKiogVGhlIGlkIGFzc29jaWF0ZWQgd2l0aCB0aGUgY3VycmVudCB0aW1lb3V0IGNhbGwgd2FpdGluZyB0byByZXNvbHZlLiAqL1xuICBwcml2YXRlIF90aW1lb3V0SWQ6IG51bWJlciB8IG51bGw7XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhpcyBzZXJ2aWNlIGlzIGRlc3Ryb3llZC4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGVzdHJveWVkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9uZ1pvbmU6IE5nWm9uZSkge31cblxuICAvKiogU2V0IHRoZSBNZW51IGFuZCBpdHMgUG9pbnRlckZvY3VzVHJhY2tlci4gKi9cbiAgaW5pdGlhbGl6ZShtZW51OiBNZW51LCBwb2ludGVyVHJhY2tlcjogUG9pbnRlckZvY3VzVHJhY2tlcjxGb2N1c2FibGVFbGVtZW50ICYgVG9nZ2xlcj4pIHtcbiAgICB0aGlzLl9tZW51ID0gbWVudTtcbiAgICB0aGlzLl9wb2ludGVyVHJhY2tlciA9IHBvaW50ZXJUcmFja2VyO1xuICAgIHRoaXMuX3N1YnNjcmliZVRvTW91c2VNb3ZlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSBgZG9Ub2dnbGVgIGNhbGxiYWNrIHdoZW4gaXQgaXMgZGVlbWVkIHRoYXQgdGhlIHVzZXIgaXMgbm90IG1vdmluZyB0b3dhcmRzXG4gICAqIHRoZSBzdWJtZW51LlxuICAgKiBAcGFyYW0gZG9Ub2dnbGUgdGhlIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGlzIG5vdCBtb3ZpbmcgdG93YXJkcyB0aGUgc3VibWVudS5cbiAgICovXG4gIHRvZ2dsZShkb1RvZ2dsZTogKCkgPT4gdm9pZCkge1xuICAgIC8vIElmIHRoZSBtZW51IGlzIGhvcml6b250YWwgdGhlIHN1Yi1tZW51cyBvcGVuIGJlbG93IGFuZCB0aGVyZSBpcyBubyByaXNrIG9mIHByZW1hdHVyZVxuICAgIC8vIGNsb3Npbmcgb2YgYW55IHN1Yi1tZW51cyB0aGVyZWZvcmUgd2UgYXV0b21hdGljYWxseSByZXNvbHZlIHRoZSBjYWxsYmFjay5cbiAgICBpZiAodGhpcy5fbWVudS5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBkb1RvZ2dsZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2NoZWNrQ29uZmlndXJlZCgpO1xuXG4gICAgY29uc3Qgc2libGluZ0l0ZW1Jc1dhaXRpbmcgPSAhIXRoaXMuX3RpbWVvdXRJZDtcbiAgICBjb25zdCBoYXNQb2ludHMgPSB0aGlzLl9wb2ludHMubGVuZ3RoID4gMTtcblxuICAgIGlmIChoYXNQb2ludHMgJiYgIXNpYmxpbmdJdGVtSXNXYWl0aW5nKSB7XG4gICAgICBpZiAodGhpcy5faXNNb3ZpbmdUb1N1Ym1lbnUoKSkge1xuICAgICAgICB0aGlzLl9zdGFydFRpbWVvdXQoZG9Ub2dnbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9Ub2dnbGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFzaWJsaW5nSXRlbUlzV2FpdGluZykge1xuICAgICAgZG9Ub2dnbGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIGRlbGF5ZWQgdG9nZ2xlIGhhbmRsZXIgaWYgb25lIGlzbid0IHJ1bm5pbmcgYWxyZWFkeS5cbiAgICpcbiAgICogVGhlIGRlbGF5ZWQgdG9nZ2xlIGhhbmRsZXIgZXhlY3V0ZXMgdGhlIGBkb1RvZ2dsZWAgY2FsbGJhY2sgYWZ0ZXIgc29tZSBwZXJpb2Qgb2YgdGltZSBpZmYgdGhlXG4gICAqIHVzZXJzIG1vdXNlIGlzIG9uIGFuIGl0ZW0gaW4gdGhlIGN1cnJlbnQgbWVudS5cbiAgICovXG4gIHByaXZhdGUgX3N0YXJ0VGltZW91dChkb1RvZ2dsZTogKCkgPT4gdm9pZCkge1xuICAgIC8vIElmIHRoZSB1c2VycyBtb3VzZSBpcyBtb3ZpbmcgdG93YXJkcyBhIHN1Ym1lbnUgd2UgZG9uJ3Qgd2FudCB0byBpbW1lZGlhdGVseSByZXNvbHZlLlxuICAgIC8vIFdhaXQgZm9yIHNvbWUgcGVyaW9kIG9mIHRpbWUgYmVmb3JlIGRldGVybWluaW5nIGlmIHRoZSBwcmV2aW91cyBtZW51IHNob3VsZCBjbG9zZSBpblxuICAgIC8vIGNhc2VzIHdoZXJlIHRoZSB1c2VyIG1heSBoYXZlIG1vdmVkIHRvd2FyZHMgdGhlIHN1Ym1lbnUgYnV0IHN0b3BwZWQgb24gYSBzaWJsaW5nIG1lbnVcbiAgICAvLyBpdGVtIGludGVudGlvbmFsbHkuXG4gICAgY29uc3QgdGltZW91dElkID0gKHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gUmVzb2x2ZSBpZiB0aGUgdXNlciBpcyBjdXJyZW50bHkgbW91c2VkIG92ZXIgc29tZSBlbGVtZW50IGluIHRoZSByb290IG1lbnVcbiAgICAgIGlmICh0aGlzLl9wb2ludGVyVHJhY2tlciEuYWN0aXZlRWxlbWVudCAmJiB0aW1lb3V0SWQgPT09IHRoaXMuX3RpbWVvdXRJZCkge1xuICAgICAgICBkb1RvZ2dsZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGltZW91dElkID0gbnVsbDtcbiAgICB9LCBDTE9TRV9ERUxBWSkgYXMgYW55KSBhcyBudW1iZXI7XG5cbiAgICB0aGlzLl90aW1lb3V0SWQgPSB0aW1lb3V0SWQ7XG4gIH1cblxuICAvKiogV2hldGhlciB0aGUgdXNlciBpcyBoZWFkaW5nIHRvd2FyZHMgdGhlIG9wZW4gc3VibWVudS4gKi9cbiAgcHJpdmF0ZSBfaXNNb3ZpbmdUb1N1Ym1lbnUoKSB7XG4gICAgY29uc3Qgc3VibWVudVBvaW50cyA9IHRoaXMuX2dldFN1Ym1lbnVCb3VuZHMoKTtcbiAgICBpZiAoIXN1Ym1lbnVQb2ludHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgbnVtTW92aW5nID0gMDtcbiAgICBjb25zdCBjdXJyUG9pbnQgPSB0aGlzLl9wb2ludHNbdGhpcy5fcG9pbnRzLmxlbmd0aCAtIDFdO1xuICAgIC8vIHN0YXJ0IGZyb20gdGhlIHNlY29uZCBsYXN0IHBvaW50IGFuZCBjYWxjdWxhdGUgdGhlIHNsb3BlIGJldHdlZW4gZWFjaCBwb2ludCBhbmQgdGhlIGxhc3RcbiAgICAvLyBwb2ludC5cbiAgICBmb3IgKGxldCBpID0gdGhpcy5fcG9pbnRzLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMuX3BvaW50c1tpXTtcbiAgICAgIGNvbnN0IHNsb3BlID0gZ2V0U2xvcGUoY3VyclBvaW50LCBwcmV2aW91cyk7XG4gICAgICBpZiAoaXNXaXRoaW5TdWJtZW51KHN1Ym1lbnVQb2ludHMsIHNsb3BlLCBnZXRZSW50ZXJjZXB0KGN1cnJQb2ludCwgc2xvcGUpKSkge1xuICAgICAgICBudW1Nb3ZpbmcrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bU1vdmluZyA+PSBNYXRoLmZsb29yKE5VTV9QT0lOVFMgLyAyKTtcbiAgfVxuXG4gIC8qKiBHZXQgdGhlIGJvdW5kaW5nIERPTVJlY3QgZm9yIHRoZSBvcGVuIHN1Ym1lbnUuICovXG4gIHByaXZhdGUgX2dldFN1Ym1lbnVCb3VuZHMoKTogRE9NUmVjdCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BvaW50ZXJUcmFja2VyPy5wcmV2aW91c0VsZW1lbnRcbiAgICAgID8uZ2V0TWVudSgpXG4gICAgICA/Ll9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSByZWZlcmVuY2UgdG8gdGhlIFBvaW50ZXJGb2N1c1RyYWNrZXIgYW5kIG1lbnUgZWxlbWVudCBpcyBwcm92aWRlZC5cbiAgICogQHRocm93cyBhbiBlcnJvciBpZiBuZWl0aGVyIHJlZmVyZW5jZSBpcyBwcm92aWRlZC5cbiAgICovXG4gIHByaXZhdGUgX2NoZWNrQ29uZmlndXJlZCgpIHtcbiAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICBpZiAoIXRoaXMuX3BvaW50ZXJUcmFja2VyKSB7XG4gICAgICAgIHRocm93TWlzc2luZ1BvaW50ZXJGb2N1c1RyYWNrZXIoKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5fbWVudSkge1xuICAgICAgICB0aHJvd01pc3NpbmdNZW51UmVmZXJlbmNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqIFN1YnNjcmliZSB0byB0aGUgcm9vdCBtZW51cyBtb3VzZSBtb3ZlIGV2ZW50cyBhbmQgdXBkYXRlIHRoZSB0cmFja2VkIG1vdXNlIHBvaW50cy4gKi9cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlVG9Nb3VzZU1vdmVzKCkge1xuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy5fbWVudS5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2Vtb3ZlJylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKChfOiBNb3VzZUV2ZW50LCBpbmRleDogbnVtYmVyKSA9PiBpbmRleCAlIE1PVVNFX01PVkVfU0FNUExFX0ZSRVFVRU5DWSA9PT0gMCksXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3llZClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3BvaW50cy5wdXNoKHt4OiBldmVudC5jbGllbnRYLCB5OiBldmVudC5jbGllbnRZfSk7XG4gICAgICAgICAgaWYgKHRoaXMuX3BvaW50cy5sZW5ndGggPiBOVU1fUE9JTlRTKSB7XG4gICAgICAgICAgICB0aGlzLl9wb2ludHMuc2hpZnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveWVkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgfVxufVxuXG4vKipcbiAqIENka1RhcmdldE1lbnVBaW0gaXMgYSBwcm92aWRlciBmb3IgdGhlIFRhcmdldE1lbnVBaW0gc2VydmljZS4gSXQgc2hvdWxkIGJlIGFkZGVkIHRvIGFuXG4gKiBlbGVtZW50IHdpdGggZWl0aGVyIHRoZSBgY2RrTWVudWAgb3IgYGNka01lbnVCYXJgIGRpcmVjdGl2ZSBhbmQgY2hpbGQgbWVudSBpdGVtcy5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2Nka1RhcmdldE1lbnVBaW1dJyxcbiAgZXhwb3J0QXM6ICdjZGtUYXJnZXRNZW51QWltJyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1FTlVfQUlNLCB1c2VDbGFzczogVGFyZ2V0TWVudUFpbX1dLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUYXJnZXRNZW51QWltIHt9XG4iXX0=