/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { OverlayRef, OverlaySizeConfig } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { DialogPosition } from './dialog-config';
import { CdkDialogContainer } from './dialog-container';
/**
 * Reference to a dialog opened via the Dialog service.
 */
export declare class DialogRef<T, R = any> {
    _overlayRef: OverlayRef;
    protected _containerInstance: CdkDialogContainer;
    readonly id: string;
    /** The instance of the component in the dialog. */
    componentInstance: T;
    /** Whether the user is allowed to close the dialog. */
    disableClose: boolean | undefined;
    /** Result to be passed to afterClosed. */
    private _result;
    constructor(_overlayRef: OverlayRef, _containerInstance: CdkDialogContainer, id?: string);
    /** Gets an observable that emits when the overlay's backdrop has been clicked. */
    backdropClick(): Observable<MouseEvent>;
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    close(dialogResult?: R): void;
    /**
     * Updates the dialog's position.
     * @param position New dialog position.
     */
    updatePosition(position?: DialogPosition): this;
    /**
     * Gets an observable that emits when keydown events are targeted on the overlay.
     */
    keydownEvents(): Observable<KeyboardEvent>;
    /**
     * Updates the dialog's width and height, defined, min and max.
     * @param size New size for the overlay.
     */
    updateSize(size: OverlaySizeConfig): this;
    /** Fetches the position strategy object from the overlay ref. */
    private _getPositionStrategy;
    /** Gets an observable that emits when dialog begins opening. */
    beforeOpened(): Observable<void>;
    /** Gets an observable that emits when dialog is finished opening. */
    afterOpened(): Observable<void>;
    /** Gets an observable that emits when dialog begins closing. */
    beforeClosed(): Observable<R | undefined>;
    /** Gets an observable that emits when dialog is finished closing. */
    afterClosed(): Observable<R | undefined>;
}
