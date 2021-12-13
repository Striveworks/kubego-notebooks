/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injectable, NgZone } from '@angular/core';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
import { Overlay } from '@angular/cdk/overlay';
import { ScrollDispatcher, ViewportRuler } from '@angular/cdk/scrolling';
import { EditEventDispatcher } from './edit-event-dispatcher';
import { FocusDispatcher } from './focus-dispatcher';
import { PopoverEditPositionStrategyFactory } from './popover-edit-position-strategy-factory';
/**
 * Optimization
 * Collects multiple Injectables into a singleton shared across the table. By reducing the
 * number of services injected into each CdkPopoverEdit, this saves about 0.023ms of cpu time
 * and 56 bytes of memory per instance.
 */
export class EditServices {
    constructor(directionality, editEventDispatcher, focusDispatcher, focusTrapFactory, ngZone, overlay, positionFactory, scrollDispatcher, viewportRuler) {
        this.directionality = directionality;
        this.editEventDispatcher = editEventDispatcher;
        this.focusDispatcher = focusDispatcher;
        this.focusTrapFactory = focusTrapFactory;
        this.ngZone = ngZone;
        this.overlay = overlay;
        this.positionFactory = positionFactory;
        this.scrollDispatcher = scrollDispatcher;
        this.viewportRuler = viewportRuler;
    }
}
EditServices.decorators = [
    { type: Injectable }
];
EditServices.ctorParameters = () => [
    { type: Directionality },
    { type: EditEventDispatcher },
    { type: FocusDispatcher },
    { type: FocusTrapFactory },
    { type: NgZone },
    { type: Overlay },
    { type: PopoverEditPositionStrategyFactory },
    { type: ScrollDispatcher },
    { type: ViewportRuler }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9lZGl0LXNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXZFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsa0NBQWtDLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUc1Rjs7Ozs7R0FLRztBQUVILE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQ2EsY0FBOEIsRUFDOUIsbUJBQTBELEVBQzFELGVBQWdDLEVBQ2hDLGdCQUFrQyxFQUFXLE1BQWMsRUFDM0QsT0FBZ0IsRUFBVyxlQUFtRCxFQUM5RSxnQkFBa0MsRUFBVyxhQUE0QjtRQUx6RSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF1QztRQUMxRCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFXLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDM0QsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFXLG9CQUFlLEdBQWYsZUFBZSxDQUFvQztRQUM5RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVcsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFBRyxDQUFDOzs7WUFSM0YsVUFBVTs7O1lBZkgsY0FBYztZQUlkLG1CQUFtQjtZQUNuQixlQUFlO1lBTmYsZ0JBQWdCO1lBREosTUFBTTtZQUdsQixPQUFPO1lBS1Asa0NBQWtDO1lBSmxDLGdCQUFnQjtZQUFFLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb2N1c1RyYXBGYWN0b3J5fSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0RpcmVjdGlvbmFsaXR5fSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge092ZXJsYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7U2Nyb2xsRGlzcGF0Y2hlciwgVmlld3BvcnRSdWxlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5cbmltcG9ydCB7RWRpdEV2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi9lZGl0LWV2ZW50LWRpc3BhdGNoZXInO1xuaW1wb3J0IHtGb2N1c0Rpc3BhdGNoZXJ9IGZyb20gJy4vZm9jdXMtZGlzcGF0Y2hlcic7XG5pbXBvcnQge1BvcG92ZXJFZGl0UG9zaXRpb25TdHJhdGVneUZhY3Rvcnl9IGZyb20gJy4vcG9wb3Zlci1lZGl0LXBvc2l0aW9uLXN0cmF0ZWd5LWZhY3RvcnknO1xuaW1wb3J0IHtFZGl0UmVmfSBmcm9tICcuL2VkaXQtcmVmJztcblxuLyoqXG4gKiBPcHRpbWl6YXRpb25cbiAqIENvbGxlY3RzIG11bHRpcGxlIEluamVjdGFibGVzIGludG8gYSBzaW5nbGV0b24gc2hhcmVkIGFjcm9zcyB0aGUgdGFibGUuIEJ5IHJlZHVjaW5nIHRoZVxuICogbnVtYmVyIG9mIHNlcnZpY2VzIGluamVjdGVkIGludG8gZWFjaCBDZGtQb3BvdmVyRWRpdCwgdGhpcyBzYXZlcyBhYm91dCAwLjAyM21zIG9mIGNwdSB0aW1lXG4gKiBhbmQgNTYgYnl0ZXMgb2YgbWVtb3J5IHBlciBpbnN0YW5jZS5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVkaXRTZXJ2aWNlcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcmVhZG9ubHkgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxuICAgICAgcmVhZG9ubHkgZWRpdEV2ZW50RGlzcGF0Y2hlcjogRWRpdEV2ZW50RGlzcGF0Y2hlcjxFZGl0UmVmPHVua25vd24+PixcbiAgICAgIHJlYWRvbmx5IGZvY3VzRGlzcGF0Y2hlcjogRm9jdXNEaXNwYXRjaGVyLFxuICAgICAgcmVhZG9ubHkgZm9jdXNUcmFwRmFjdG9yeTogRm9jdXNUcmFwRmFjdG9yeSwgcmVhZG9ubHkgbmdab25lOiBOZ1pvbmUsXG4gICAgICByZWFkb25seSBvdmVybGF5OiBPdmVybGF5LCByZWFkb25seSBwb3NpdGlvbkZhY3Rvcnk6IFBvcG92ZXJFZGl0UG9zaXRpb25TdHJhdGVneUZhY3RvcnksXG4gICAgICByZWFkb25seSBzY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLCByZWFkb25seSB2aWV3cG9ydFJ1bGVyOiBWaWV3cG9ydFJ1bGVyKSB7fVxufVxuIl19