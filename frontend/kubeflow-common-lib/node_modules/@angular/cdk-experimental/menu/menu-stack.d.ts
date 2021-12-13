/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
/** Events to emit as specified by the caller once the MenuStack is empty. */
export declare const enum FocusNext {
    nextItem = 0,
    previousItem = 1,
    currentItem = 2
}
/**
 * Interface for the elements tracked in the MenuStack.
 */
export interface MenuStackItem {
    /** A reference to the previous Menus MenuStack instance. */
    _menuStack: MenuStack | null;
}
/**
 * MenuStack allows subscribers to listen for close events (when a MenuStackItem is popped off
 * of the stack) in order to perform closing actions. Upon the MenuStack being empty it emits
 * from the `empty` observable specifying the next focus action which the listener should perform
 * as requested by the closer.
 */
export declare class MenuStack {
    /** All MenuStackItems tracked by this MenuStack. */
    private readonly _elements;
    /** Emits the element which was popped off of the stack when requested by a closer. */
    private readonly _close;
    /** Emits once the MenuStack has become empty after popping off elements. */
    private readonly _empty;
    /** Observable which emits the MenuStackItem which has been requested to close. */
    readonly closed: Observable<MenuStackItem | undefined>;
    /**
     * Observable which emits when the MenuStack is empty after popping off the last element. It
     * emits a FocusNext event which specifies the action the closer has requested the listener
     * perform.
     */
    readonly emptied: Observable<FocusNext | undefined>;
    /** @param menu the MenuStackItem to put on the stack. */
    push(menu: MenuStackItem): void;
    /**
     * Pop items off of the stack up to and including `lastItem` and emit each on the close
     * observable. If the stack is empty or `lastItem` is not on the stack it does nothing.
     * @param lastItem the last item to pop off the stack.
     * @param focusNext the event to emit on the `empty` observable if the method call resulted in an
     * empty stack. Does not emit if the stack was initially empty or if `lastItem` was not on the
     * stack.
     */
    close(lastItem: MenuStackItem, focusNext?: FocusNext): void;
    /**
     * Pop items off of the stack up to but excluding `lastItem` and emit each on the close
     * observable. If the stack is empty or `lastItem` is not on the stack it does nothing.
     * @param lastItem the element which should be left on the stack
     * @return whether or not an item was removed from the stack
     */
    closeSubMenuOf(lastItem: MenuStackItem): boolean;
    /**
     * Pop off all MenuStackItems and emit each one on the `close` observable one by one.
     * @param focusNext the event to emit on the `empty` observable once the stack is emptied. Does
     * not emit if the stack was initially empty.
     */
    closeAll(focusNext?: FocusNext): void;
    /** Return true if this stack is empty. */
    isEmpty(): boolean;
    /** Return the length of the stack. */
    length(): number;
    /** Get the top most element on the stack. */
    peek(): MenuStackItem | undefined;
}
/** NoopMenuStack is a placeholder MenuStack used for inline menus. */
export declare class NoopMenuStack extends MenuStack {
    /** Noop push - does not add elements to the MenuStack. */
    push(_: MenuStackItem): void;
}
