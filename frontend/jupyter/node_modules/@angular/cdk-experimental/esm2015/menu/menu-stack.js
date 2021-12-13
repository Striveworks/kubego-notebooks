/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Subject } from 'rxjs';
/**
 * MenuStack allows subscribers to listen for close events (when a MenuStackItem is popped off
 * of the stack) in order to perform closing actions. Upon the MenuStack being empty it emits
 * from the `empty` observable specifying the next focus action which the listener should perform
 * as requested by the closer.
 */
export class MenuStack {
    constructor() {
        /** All MenuStackItems tracked by this MenuStack. */
        this._elements = [];
        /** Emits the element which was popped off of the stack when requested by a closer. */
        this._close = new Subject();
        /** Emits once the MenuStack has become empty after popping off elements. */
        this._empty = new Subject();
        /** Observable which emits the MenuStackItem which has been requested to close. */
        this.closed = this._close;
        /**
         * Observable which emits when the MenuStack is empty after popping off the last element. It
         * emits a FocusNext event which specifies the action the closer has requested the listener
         * perform.
         */
        this.emptied = this._empty;
    }
    /** @param menu the MenuStackItem to put on the stack. */
    push(menu) {
        this._elements.push(menu);
    }
    /**
     * Pop items off of the stack up to and including `lastItem` and emit each on the close
     * observable. If the stack is empty or `lastItem` is not on the stack it does nothing.
     * @param lastItem the last item to pop off the stack.
     * @param focusNext the event to emit on the `empty` observable if the method call resulted in an
     * empty stack. Does not emit if the stack was initially empty or if `lastItem` was not on the
     * stack.
     */
    close(lastItem, focusNext) {
        if (this._elements.indexOf(lastItem) >= 0) {
            let poppedElement;
            do {
                poppedElement = this._elements.pop();
                this._close.next(poppedElement);
            } while (poppedElement !== lastItem);
            if (this.isEmpty()) {
                this._empty.next(focusNext);
            }
        }
    }
    /**
     * Pop items off of the stack up to but excluding `lastItem` and emit each on the close
     * observable. If the stack is empty or `lastItem` is not on the stack it does nothing.
     * @param lastItem the element which should be left on the stack
     * @return whether or not an item was removed from the stack
     */
    closeSubMenuOf(lastItem) {
        let removed = false;
        if (this._elements.indexOf(lastItem) >= 0) {
            removed = this.peek() !== lastItem;
            while (this.peek() !== lastItem) {
                this._close.next(this._elements.pop());
            }
        }
        return removed;
    }
    /**
     * Pop off all MenuStackItems and emit each one on the `close` observable one by one.
     * @param focusNext the event to emit on the `empty` observable once the stack is emptied. Does
     * not emit if the stack was initially empty.
     */
    closeAll(focusNext) {
        if (!this.isEmpty()) {
            while (!this.isEmpty()) {
                const menuStackItem = this._elements.pop();
                if (menuStackItem) {
                    this._close.next(menuStackItem);
                }
            }
            this._empty.next(focusNext);
        }
    }
    /** Return true if this stack is empty. */
    isEmpty() {
        return !this._elements.length;
    }
    /** Return the length of the stack. */
    length() {
        return this._elements.length;
    }
    /** Get the top most element on the stack. */
    peek() {
        return this._elements[this._elements.length - 1];
    }
}
/** NoopMenuStack is a placeholder MenuStack used for inline menus. */
export class NoopMenuStack extends MenuStack {
    /** Noop push - does not add elements to the MenuStack. */
    push(_) { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL21lbnUvbWVudS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsT0FBTyxFQUFhLE1BQU0sTUFBTSxDQUFDO0FBaUJ6Qzs7Ozs7R0FLRztBQUNILE1BQU0sT0FBTyxTQUFTO0lBQXRCO1FBQ0Usb0RBQW9EO1FBQ25DLGNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBRWpELHNGQUFzRjtRQUNyRSxXQUFNLEdBQXVDLElBQUksT0FBTyxFQUFFLENBQUM7UUFFNUUsNEVBQTRFO1FBQzNELFdBQU0sR0FBbUMsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUV4RSxrRkFBa0Y7UUFDekUsV0FBTSxHQUEwQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXJFOzs7O1dBSUc7UUFDTSxZQUFPLEdBQXNDLElBQUksQ0FBQyxNQUFNLENBQUM7SUE4RXBFLENBQUM7SUE1RUMseURBQXlEO0lBQ3pELElBQUksQ0FBQyxJQUFtQjtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILEtBQUssQ0FBQyxRQUF1QixFQUFFLFNBQXFCO1FBQ2xELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pDLElBQUksYUFBd0MsQ0FBQztZQUM3QyxHQUFHO2dCQUNELGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNqQyxRQUFRLGFBQWEsS0FBSyxRQUFRLEVBQUU7WUFFckMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsUUFBdUI7UUFDcEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssUUFBUSxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxTQUFxQjtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3RCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzNDLElBQUksYUFBYSxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDakM7YUFDRjtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELDBDQUEwQztJQUMxQyxPQUFPO1FBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELDZDQUE2QztJQUM3QyxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQUVELHNFQUFzRTtBQUN0RSxNQUFNLE9BQU8sYUFBYyxTQUFRLFNBQVM7SUFDMUMsMERBQTBEO0lBQzFELElBQUksQ0FBQyxDQUFnQixJQUFHLENBQUM7Q0FDMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuLyoqIEV2ZW50cyB0byBlbWl0IGFzIHNwZWNpZmllZCBieSB0aGUgY2FsbGVyIG9uY2UgdGhlIE1lbnVTdGFjayBpcyBlbXB0eS4gKi9cbmV4cG9ydCBjb25zdCBlbnVtIEZvY3VzTmV4dCB7XG4gIG5leHRJdGVtLFxuICBwcmV2aW91c0l0ZW0sXG4gIGN1cnJlbnRJdGVtLFxufVxuXG4vKipcbiAqIEludGVyZmFjZSBmb3IgdGhlIGVsZW1lbnRzIHRyYWNrZWQgaW4gdGhlIE1lbnVTdGFjay5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNZW51U3RhY2tJdGVtIHtcbiAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBNZW51cyBNZW51U3RhY2sgaW5zdGFuY2UuICovXG4gIF9tZW51U3RhY2s6IE1lbnVTdGFjayB8IG51bGw7XG59XG5cbi8qKlxuICogTWVudVN0YWNrIGFsbG93cyBzdWJzY3JpYmVycyB0byBsaXN0ZW4gZm9yIGNsb3NlIGV2ZW50cyAod2hlbiBhIE1lbnVTdGFja0l0ZW0gaXMgcG9wcGVkIG9mZlxuICogb2YgdGhlIHN0YWNrKSBpbiBvcmRlciB0byBwZXJmb3JtIGNsb3NpbmcgYWN0aW9ucy4gVXBvbiB0aGUgTWVudVN0YWNrIGJlaW5nIGVtcHR5IGl0IGVtaXRzXG4gKiBmcm9tIHRoZSBgZW1wdHlgIG9ic2VydmFibGUgc3BlY2lmeWluZyB0aGUgbmV4dCBmb2N1cyBhY3Rpb24gd2hpY2ggdGhlIGxpc3RlbmVyIHNob3VsZCBwZXJmb3JtXG4gKiBhcyByZXF1ZXN0ZWQgYnkgdGhlIGNsb3Nlci5cbiAqL1xuZXhwb3J0IGNsYXNzIE1lbnVTdGFjayB7XG4gIC8qKiBBbGwgTWVudVN0YWNrSXRlbXMgdHJhY2tlZCBieSB0aGlzIE1lbnVTdGFjay4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudHM6IE1lbnVTdGFja0l0ZW1bXSA9IFtdO1xuXG4gIC8qKiBFbWl0cyB0aGUgZWxlbWVudCB3aGljaCB3YXMgcG9wcGVkIG9mZiBvZiB0aGUgc3RhY2sgd2hlbiByZXF1ZXN0ZWQgYnkgYSBjbG9zZXIuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2Nsb3NlOiBTdWJqZWN0PE1lbnVTdGFja0l0ZW0gfCB1bmRlZmluZWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICAvKiogRW1pdHMgb25jZSB0aGUgTWVudVN0YWNrIGhhcyBiZWNvbWUgZW1wdHkgYWZ0ZXIgcG9wcGluZyBvZmYgZWxlbWVudHMuICovXG4gIHByaXZhdGUgcmVhZG9ubHkgX2VtcHR5OiBTdWJqZWN0PEZvY3VzTmV4dCB8IHVuZGVmaW5lZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIC8qKiBPYnNlcnZhYmxlIHdoaWNoIGVtaXRzIHRoZSBNZW51U3RhY2tJdGVtIHdoaWNoIGhhcyBiZWVuIHJlcXVlc3RlZCB0byBjbG9zZS4gKi9cbiAgcmVhZG9ubHkgY2xvc2VkOiBPYnNlcnZhYmxlPE1lbnVTdGFja0l0ZW0gfCB1bmRlZmluZWQ+ID0gdGhpcy5fY2xvc2U7XG5cbiAgLyoqXG4gICAqIE9ic2VydmFibGUgd2hpY2ggZW1pdHMgd2hlbiB0aGUgTWVudVN0YWNrIGlzIGVtcHR5IGFmdGVyIHBvcHBpbmcgb2ZmIHRoZSBsYXN0IGVsZW1lbnQuIEl0XG4gICAqIGVtaXRzIGEgRm9jdXNOZXh0IGV2ZW50IHdoaWNoIHNwZWNpZmllcyB0aGUgYWN0aW9uIHRoZSBjbG9zZXIgaGFzIHJlcXVlc3RlZCB0aGUgbGlzdGVuZXJcbiAgICogcGVyZm9ybS5cbiAgICovXG4gIHJlYWRvbmx5IGVtcHRpZWQ6IE9ic2VydmFibGU8Rm9jdXNOZXh0IHwgdW5kZWZpbmVkPiA9IHRoaXMuX2VtcHR5O1xuXG4gIC8qKiBAcGFyYW0gbWVudSB0aGUgTWVudVN0YWNrSXRlbSB0byBwdXQgb24gdGhlIHN0YWNrLiAqL1xuICBwdXNoKG1lbnU6IE1lbnVTdGFja0l0ZW0pIHtcbiAgICB0aGlzLl9lbGVtZW50cy5wdXNoKG1lbnUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvcCBpdGVtcyBvZmYgb2YgdGhlIHN0YWNrIHVwIHRvIGFuZCBpbmNsdWRpbmcgYGxhc3RJdGVtYCBhbmQgZW1pdCBlYWNoIG9uIHRoZSBjbG9zZVxuICAgKiBvYnNlcnZhYmxlLiBJZiB0aGUgc3RhY2sgaXMgZW1wdHkgb3IgYGxhc3RJdGVtYCBpcyBub3Qgb24gdGhlIHN0YWNrIGl0IGRvZXMgbm90aGluZy5cbiAgICogQHBhcmFtIGxhc3RJdGVtIHRoZSBsYXN0IGl0ZW0gdG8gcG9wIG9mZiB0aGUgc3RhY2suXG4gICAqIEBwYXJhbSBmb2N1c05leHQgdGhlIGV2ZW50IHRvIGVtaXQgb24gdGhlIGBlbXB0eWAgb2JzZXJ2YWJsZSBpZiB0aGUgbWV0aG9kIGNhbGwgcmVzdWx0ZWQgaW4gYW5cbiAgICogZW1wdHkgc3RhY2suIERvZXMgbm90IGVtaXQgaWYgdGhlIHN0YWNrIHdhcyBpbml0aWFsbHkgZW1wdHkgb3IgaWYgYGxhc3RJdGVtYCB3YXMgbm90IG9uIHRoZVxuICAgKiBzdGFjay5cbiAgICovXG4gIGNsb3NlKGxhc3RJdGVtOiBNZW51U3RhY2tJdGVtLCBmb2N1c05leHQ/OiBGb2N1c05leHQpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudHMuaW5kZXhPZihsYXN0SXRlbSkgPj0gMCkge1xuICAgICAgbGV0IHBvcHBlZEVsZW1lbnQ6IE1lbnVTdGFja0l0ZW0gfCB1bmRlZmluZWQ7XG4gICAgICBkbyB7XG4gICAgICAgIHBvcHBlZEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50cy5wb3AoKTtcbiAgICAgICAgdGhpcy5fY2xvc2UubmV4dChwb3BwZWRFbGVtZW50KTtcbiAgICAgIH0gd2hpbGUgKHBvcHBlZEVsZW1lbnQgIT09IGxhc3RJdGVtKTtcblxuICAgICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICAgIHRoaXMuX2VtcHR5Lm5leHQoZm9jdXNOZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUG9wIGl0ZW1zIG9mZiBvZiB0aGUgc3RhY2sgdXAgdG8gYnV0IGV4Y2x1ZGluZyBgbGFzdEl0ZW1gIGFuZCBlbWl0IGVhY2ggb24gdGhlIGNsb3NlXG4gICAqIG9ic2VydmFibGUuIElmIHRoZSBzdGFjayBpcyBlbXB0eSBvciBgbGFzdEl0ZW1gIGlzIG5vdCBvbiB0aGUgc3RhY2sgaXQgZG9lcyBub3RoaW5nLlxuICAgKiBAcGFyYW0gbGFzdEl0ZW0gdGhlIGVsZW1lbnQgd2hpY2ggc2hvdWxkIGJlIGxlZnQgb24gdGhlIHN0YWNrXG4gICAqIEByZXR1cm4gd2hldGhlciBvciBub3QgYW4gaXRlbSB3YXMgcmVtb3ZlZCBmcm9tIHRoZSBzdGFja1xuICAgKi9cbiAgY2xvc2VTdWJNZW51T2YobGFzdEl0ZW06IE1lbnVTdGFja0l0ZW0pIHtcbiAgICBsZXQgcmVtb3ZlZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLl9lbGVtZW50cy5pbmRleE9mKGxhc3RJdGVtKSA+PSAwKSB7XG4gICAgICByZW1vdmVkID0gdGhpcy5wZWVrKCkgIT09IGxhc3RJdGVtO1xuICAgICAgd2hpbGUgKHRoaXMucGVlaygpICE9PSBsYXN0SXRlbSkge1xuICAgICAgICB0aGlzLl9jbG9zZS5uZXh0KHRoaXMuX2VsZW1lbnRzLnBvcCgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlbW92ZWQ7XG4gIH1cblxuICAvKipcbiAgICogUG9wIG9mZiBhbGwgTWVudVN0YWNrSXRlbXMgYW5kIGVtaXQgZWFjaCBvbmUgb24gdGhlIGBjbG9zZWAgb2JzZXJ2YWJsZSBvbmUgYnkgb25lLlxuICAgKiBAcGFyYW0gZm9jdXNOZXh0IHRoZSBldmVudCB0byBlbWl0IG9uIHRoZSBgZW1wdHlgIG9ic2VydmFibGUgb25jZSB0aGUgc3RhY2sgaXMgZW1wdGllZC4gRG9lc1xuICAgKiBub3QgZW1pdCBpZiB0aGUgc3RhY2sgd2FzIGluaXRpYWxseSBlbXB0eS5cbiAgICovXG4gIGNsb3NlQWxsKGZvY3VzTmV4dD86IEZvY3VzTmV4dCkge1xuICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHdoaWxlICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgY29uc3QgbWVudVN0YWNrSXRlbSA9IHRoaXMuX2VsZW1lbnRzLnBvcCgpO1xuICAgICAgICBpZiAobWVudVN0YWNrSXRlbSkge1xuICAgICAgICAgIHRoaXMuX2Nsb3NlLm5leHQobWVudVN0YWNrSXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZW1wdHkubmV4dChmb2N1c05leHQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBSZXR1cm4gdHJ1ZSBpZiB0aGlzIHN0YWNrIGlzIGVtcHR5LiAqL1xuICBpc0VtcHR5KCkge1xuICAgIHJldHVybiAhdGhpcy5fZWxlbWVudHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBzdGFjay4gKi9cbiAgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50cy5sZW5ndGg7XG4gIH1cblxuICAvKiogR2V0IHRoZSB0b3AgbW9zdCBlbGVtZW50IG9uIHRoZSBzdGFjay4gKi9cbiAgcGVlaygpOiBNZW51U3RhY2tJdGVtIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudHNbdGhpcy5fZWxlbWVudHMubGVuZ3RoIC0gMV07XG4gIH1cbn1cblxuLyoqIE5vb3BNZW51U3RhY2sgaXMgYSBwbGFjZWhvbGRlciBNZW51U3RhY2sgdXNlZCBmb3IgaW5saW5lIG1lbnVzLiAqL1xuZXhwb3J0IGNsYXNzIE5vb3BNZW51U3RhY2sgZXh0ZW5kcyBNZW51U3RhY2sge1xuICAvKiogTm9vcCBwdXNoIC0gZG9lcyBub3QgYWRkIGVsZW1lbnRzIHRvIHRoZSBNZW51U3RhY2suICovXG4gIHB1c2goXzogTWVudVN0YWNrSXRlbSkge31cbn1cbiJdfQ==