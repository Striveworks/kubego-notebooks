/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { PartialObserver } from 'rxjs';
/**
 * Service responsible for moving cell focus around in response to keyboard events.
 * May be overridden to customize the keyboard behavior of popover edit.
 */
export declare class FocusDispatcher {
    protected readonly directionality: Directionality;
    /** Observes keydown events triggered from the table. */
    readonly keyObserver: PartialObserver<KeyboardEvent>;
    constructor(directionality: Directionality);
    /**
     * Moves focus to earlier or later cells (in dom order) by offset cells relative to
     * currentCell.
     */
    moveFocusHorizontally(currentCell: HTMLElement, offset: number): void;
    /** Moves focus to up or down by row by offset cells relative to currentCell. */
    moveFocusVertically(currentCell: HTMLElement, offset: number): void;
    /** Translates arrow keydown events into focus move operations. */
    protected handleKeyboardEvent(event: KeyboardEvent): void;
}
