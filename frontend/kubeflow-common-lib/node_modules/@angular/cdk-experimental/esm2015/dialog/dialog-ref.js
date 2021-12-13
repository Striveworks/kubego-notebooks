/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { map, filter } from 'rxjs/operators';
/** Unique id for the created dialog. */
let uniqueId = 0;
/**
 * Reference to a dialog opened via the Dialog service.
 */
export class DialogRef {
    constructor(_overlayRef, _containerInstance, id = `dialog-${uniqueId++}`) {
        this._overlayRef = _overlayRef;
        this._containerInstance = _containerInstance;
        this.id = id;
        // If the dialog has a backdrop, handle clicks from the backdrop.
        if (_containerInstance._config.hasBackdrop) {
            _overlayRef.backdropClick().subscribe(() => {
                if (!this.disableClose) {
                    this.close();
                }
            });
        }
        this.beforeClosed().subscribe(() => {
            this._overlayRef.detachBackdrop();
        });
        this.afterClosed().subscribe(() => {
            this._overlayRef.detach();
            this._overlayRef.dispose();
            this.componentInstance = null;
        });
        // Close when escape keydown event occurs
        _overlayRef.keydownEvents()
            .pipe(filter(event => {
            return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
        }))
            .subscribe(event => {
            event.preventDefault();
            this.close();
        });
    }
    /** Gets an observable that emits when the overlay's backdrop has been clicked. */
    backdropClick() {
        return this._overlayRef.backdropClick();
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    close(dialogResult) {
        this._result = dialogResult;
        this._containerInstance._startExiting();
    }
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    updatePosition(position) {
        let strategy = this._getPositionStrategy();
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        this._overlayRef.updatePosition();
        return this;
    }
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents() {
        return this._overlayRef.keydownEvents();
    }
    /**
     * Updates the dialog's width and height, defined, min and max.
     * @param size New size for the overlay.
     */
    updateSize(size) {
        this._overlayRef.updateSize(size);
        this._overlayRef.updatePosition();
        return this;
    }
    /** Fetches the position strategy object from the overlay ref. */
    _getPositionStrategy() {
        return this._overlayRef.getConfig().positionStrategy;
    }
    /** Gets an observable that emits when dialog begins opening. */
    beforeOpened() {
        return this._containerInstance._beforeEnter;
    }
    /** Gets an observable that emits when dialog is finished opening. */
    afterOpened() {
        return this._containerInstance._afterEnter;
    }
    /** Gets an observable that emits when dialog begins closing. */
    beforeClosed() {
        return this._containerInstance._beforeExit.pipe(map(() => this._result));
    }
    /** Gets an observable that emits when dialog is finished closing. */
    afterClosed() {
        return this._containerInstance._afterExit.pipe(map(() => this._result));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL2RpYWxvZy9kaWFsb2ctcmVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUlILE9BQU8sRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFFN0QsT0FBTyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzQyx3Q0FBd0M7QUFDeEMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBRWpCOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUFVcEIsWUFDUyxXQUF1QixFQUNwQixrQkFBc0MsRUFDdkMsS0FBYSxVQUFVLFFBQVEsRUFBRSxFQUFFO1FBRnJDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdkMsT0FBRSxHQUFGLEVBQUUsQ0FBaUM7UUFFNUMsaUVBQWlFO1FBQ2pFLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUMxQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZDtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FB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SSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxxRUFBcUU7SUFDckUsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5cbmltcG9ydCB7T3ZlcmxheVJlZiwgR2xvYmFsUG9zaXRpb25TdHJhdGVneSwgT3ZlcmxheVNpemVDb25maWd9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7RVNDQVBFLCBoYXNNb2RpZmllcktleX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgZmlsdGVyfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0RpYWxvZ1Bvc2l0aW9ufSBmcm9tICcuL2RpYWxvZy1jb25maWcnO1xuaW1wb3J0IHtDZGtEaWFsb2dDb250YWluZXJ9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lcic7XG5cbi8qKiBVbmlxdWUgaWQgZm9yIHRoZSBjcmVhdGVkIGRpYWxvZy4gKi9cbmxldCB1bmlxdWVJZCA9IDA7XG5cbi8qKlxuICogUmVmZXJlbmNlIHRvIGEgZGlhbG9nIG9wZW5lZCB2aWEgdGhlIERpYWxvZyBzZXJ2aWNlLlxuICovXG5leHBvcnQgY2xhc3MgRGlhbG9nUmVmPFQsIFIgPSBhbnk+IHtcbiAgLyoqIFRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGluIHRoZSBkaWFsb2cuICovXG4gIGNvbXBvbmVudEluc3RhbmNlOiBUO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSB1c2VyIGlzIGFsbG93ZWQgdG8gY2xvc2UgdGhlIGRpYWxvZy4gKi9cbiAgZGlzYWJsZUNsb3NlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG4gIC8qKiBSZXN1bHQgdG8gYmUgcGFzc2VkIHRvIGFmdGVyQ2xvc2VkLiAqL1xuICBwcml2YXRlIF9yZXN1bHQ6IFIgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmLFxuICAgIHByb3RlY3RlZCBfY29udGFpbmVySW5zdGFuY2U6IENka0RpYWxvZ0NvbnRhaW5lcixcbiAgICByZWFkb25seSBpZDogc3RyaW5nID0gYGRpYWxvZy0ke3VuaXF1ZUlkKyt9YCkge1xuXG4gICAgLy8gSWYgdGhlIGRpYWxvZyBoYXMgYSBiYWNrZHJvcCwgaGFuZGxlIGNsaWNrcyBmcm9tIHRoZSBiYWNrZHJvcC5cbiAgICBpZiAoX2NvbnRhaW5lckluc3RhbmNlLl9jb25maWcuaGFzQmFja2Ryb3ApIHtcbiAgICAgIF9vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZUNsb3NlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmJlZm9yZUNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaEJhY2tkcm9wKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSBudWxsITtcbiAgICB9KTtcblxuICAgIC8vIENsb3NlIHdoZW4gZXNjYXBlIGtleWRvd24gZXZlbnQgb2NjdXJzXG4gICAgX292ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpXG4gICAgICAucGlwZShmaWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgICByZXR1cm4gZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFICYmICF0aGlzLmRpc2FibGVDbG9zZSAmJiAhaGFzTW9kaWZpZXJLZXkoZXZlbnQpO1xuICAgICAgfSkpXG4gICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiB0aGUgb3ZlcmxheSdzIGJhY2tkcm9wIGhhcyBiZWVuIGNsaWNrZWQuICovXG4gIGJhY2tkcm9wQ2xpY2soKTogT2JzZXJ2YWJsZTxNb3VzZUV2ZW50PiB7XG4gICAgcmV0dXJuIHRoaXMuX292ZXJsYXlSZWYuYmFja2Ryb3BDbGljaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBkaWFsb2cuXG4gICAqIEBwYXJhbSBkaWFsb2dSZXN1bHQgT3B0aW9uYWwgcmVzdWx0IHRvIHJldHVybiB0byB0aGUgZGlhbG9nIG9wZW5lci5cbiAgICovXG4gIGNsb3NlKGRpYWxvZ1Jlc3VsdD86IFIpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXN1bHQgPSBkaWFsb2dSZXN1bHQ7XG4gICAgdGhpcy5fY29udGFpbmVySW5zdGFuY2UuX3N0YXJ0RXhpdGluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGRpYWxvZydzIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gcG9zaXRpb24gTmV3IGRpYWxvZyBwb3NpdGlvbi5cbiAgICovXG4gIHVwZGF0ZVBvc2l0aW9uKHBvc2l0aW9uPzogRGlhbG9nUG9zaXRpb24pOiB0aGlzIHtcbiAgICBsZXQgc3RyYXRlZ3kgPSB0aGlzLl9nZXRQb3NpdGlvblN0cmF0ZWd5KCk7XG5cbiAgICBpZiAocG9zaXRpb24gJiYgKHBvc2l0aW9uLmxlZnQgfHwgcG9zaXRpb24ucmlnaHQpKSB7XG4gICAgICBwb3NpdGlvbi5sZWZ0ID8gc3RyYXRlZ3kubGVmdChwb3NpdGlvbi5sZWZ0KSA6IHN0cmF0ZWd5LnJpZ2h0KHBvc2l0aW9uLnJpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyYXRlZ3kuY2VudGVySG9yaXpvbnRhbGx5KCk7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uICYmIChwb3NpdGlvbi50b3AgfHwgcG9zaXRpb24uYm90dG9tKSkge1xuICAgICAgcG9zaXRpb24udG9wID8gc3RyYXRlZ3kudG9wKHBvc2l0aW9uLnRvcCkgOiBzdHJhdGVneS5ib3R0b20ocG9zaXRpb24uYm90dG9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyYXRlZ3kuY2VudGVyVmVydGljYWxseSgpO1xuICAgIH1cblxuICAgIHRoaXMuX292ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW4ga2V5ZG93biBldmVudHMgYXJlIHRhcmdldGVkIG9uIHRoZSBvdmVybGF5LlxuICAgKi9cbiAga2V5ZG93bkV2ZW50cygpOiBPYnNlcnZhYmxlPEtleWJvYXJkRXZlbnQ+IHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgZGlhbG9nJ3Mgd2lkdGggYW5kIGhlaWdodCwgZGVmaW5lZCwgbWluIGFuZCBtYXguXG4gICAqIEBwYXJhbSBzaXplIE5ldyBzaXplIGZvciB0aGUgb3ZlcmxheS5cbiAgICovXG4gIHVwZGF0ZVNpemUoc2l6ZTogT3ZlcmxheVNpemVDb25maWcpOiB0aGlzIHtcbiAgICB0aGlzLl9vdmVybGF5UmVmLnVwZGF0ZVNpemUoc2l6ZSk7XG4gICAgdGhpcy5fb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqIEZldGNoZXMgdGhlIHBvc2l0aW9uIHN0cmF0ZWd5IG9iamVjdCBmcm9tIHRoZSBvdmVybGF5IHJlZi4gKi9cbiAgcHJpdmF0ZSBfZ2V0UG9zaXRpb25TdHJhdGVneSgpOiBHbG9iYWxQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVJlZi5nZXRDb25maWcoKS5wb3NpdGlvblN0cmF0ZWd5IGFzIEdsb2JhbFBvc2l0aW9uU3RyYXRlZ3k7XG4gIH1cblxuICAvKiogR2V0cyBhbiBvYnNlcnZhYmxlIHRoYXQgZW1pdHMgd2hlbiBkaWFsb2cgYmVnaW5zIG9wZW5pbmcuICovXG4gIGJlZm9yZU9wZW5lZCgpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVySW5zdGFuY2UuX2JlZm9yZUVudGVyO1xuICB9XG5cbiAgLyoqIEdldHMgYW4gb2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW4gZGlhbG9nIGlzIGZpbmlzaGVkIG9wZW5pbmcuICovXG4gIGFmdGVyT3BlbmVkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJJbnN0YW5jZS5fYWZ0ZXJFbnRlcjtcbiAgfVxuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIGRpYWxvZyBiZWdpbnMgY2xvc2luZy4gKi9cbiAgYmVmb3JlQ2xvc2VkKCk6IE9ic2VydmFibGU8UiB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJJbnN0YW5jZS5fYmVmb3JlRXhpdC5waXBlKG1hcCgoKSA9PiB0aGlzLl9yZXN1bHQpKTtcbiAgfVxuXG4gIC8qKiBHZXRzIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyB3aGVuIGRpYWxvZyBpcyBmaW5pc2hlZCBjbG9zaW5nLiAqL1xuICBhZnRlckNsb3NlZCgpOiBPYnNlcnZhYmxlPFIgfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVySW5zdGFuY2UuX2FmdGVyRXhpdC5waXBlKG1hcCgoKSA9PiB0aGlzLl9yZXN1bHQpKTtcbiAgfVxufVxuIl19