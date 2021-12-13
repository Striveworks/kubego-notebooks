/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgZone } from '@angular/core';
import { FocusTrap, InteractivityChecker } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
/** Value indicating whether focus left the target area before or after the enclosed elements. */
export declare const enum FocusEscapeNotifierDirection {
    START = 0,
    END = 1
}
/**
 * Like FocusTrap, but rather than trapping focus within a dom region, notifies subscribers when
 * focus leaves the region.
 */
export declare class FocusEscapeNotifier extends FocusTrap {
    private readonly _escapeSubject;
    constructor(element: HTMLElement, checker: InteractivityChecker, ngZone: NgZone, document: Document);
    escapes(): Observable<FocusEscapeNotifierDirection>;
}
/** Factory that allows easy instantiation of focus escape notifiers. */
export declare class FocusEscapeNotifierFactory {
    private _checker;
    private _ngZone;
    private _document;
    constructor(_checker: InteractivityChecker, _ngZone: NgZone, _document: any);
    /**
     * Creates a focus escape notifier region around the given element.
     * @param element The element around which focus will be monitored.
     * @returns The created focus escape notifier instance.
     */
    create(element: HTMLElement): FocusEscapeNotifier;
}
