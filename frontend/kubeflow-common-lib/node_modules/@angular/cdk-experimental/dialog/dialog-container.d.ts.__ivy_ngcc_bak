/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AnimationEvent } from '@angular/animations';
import { FocusTrapFactory } from '@angular/cdk/a11y';
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, DomPortal, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectorRef, ComponentRef, ElementRef, EmbeddedViewRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogConfig } from './dialog-config';
export declare function throwDialogContentAlreadyAttachedError(): void;
/**
 * Internal component that wraps user-provided dialog content.
 * @docs-private
 */
export declare class CdkDialogContainer extends BasePortalOutlet implements OnDestroy {
    private _elementRef;
    private _focusTrapFactory;
    private _changeDetectorRef;
    /** The dialog configuration. */
    _config: DialogConfig;
    private readonly _document;
    /** State of the dialog animation. */
    _state: 'void' | 'enter' | 'exit';
    /** Element that was focused before the dialog was opened. Save this to restore upon close. */
    private _elementFocusedBeforeDialogWasOpened;
    /** The class that traps and manages focus within the dialog. */
    private _focusTrap;
    get _ariaLabel(): string | null;
    get _ariaDescribedBy(): string | null | undefined;
    get _role(): import("@angular/cdk-experimental/dialog/dialog-config").DialogRole | undefined;
    _ariaModal: boolean;
    get _tabindex(): number;
    /** The portal host inside of this container into which the dialog content will be loaded. */
    _portalHost: CdkPortalOutlet;
    /** A subject emitting before the dialog enters the view. */
    readonly _beforeEnter: Subject<void>;
    /** A subject emitting after the dialog enters the view. */
    readonly _afterEnter: Subject<void>;
    /** A subject emitting before the dialog exits the view. */
    readonly _beforeExit: Subject<void>;
    /** A subject emitting after the dialog exits the view. */
    readonly _afterExit: Subject<void>;
    /** Stream of animation `done` events. */
    readonly _animationDone: Subject<AnimationEvent>;
    constructor(_elementRef: ElementRef<HTMLElement>, _focusTrapFactory: FocusTrapFactory, _changeDetectorRef: ChangeDetectorRef, _document: any, 
    /** The dialog configuration. */
    _config: DialogConfig);
    /** Initializes the dialog container with the attached content. */
    _initializeWithAttachedContent(): void;
    /** Destroy focus trap to place focus back to the element focused before the dialog opened. */
    ngOnDestroy(): void;
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T>;
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C>;
    /**
     * Attaches a DOM portal to the dialog container.
     * @param portal Portal to be attached.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */
    attachDomPortal: (portal: DomPortal) => void;
    /** Emit lifecycle events based on animation `start` callback. */
    _onAnimationStart(event: AnimationEvent): void;
    /** Starts the dialog exit animation. */
    _startExiting(): void;
    /** Saves a reference to the element that was focused before the dialog was opened. */
    private _savePreviouslyFocusedElement;
    /** Focuses the dialog container. */
    private _focusDialogContainer;
    /**
     * Autofocus the first tabbable element inside of the dialog, if there is not a tabbable element,
     * focus the dialog instead.
     */
    private _autoFocusFirstTabbableElement;
    /** Returns the focus to the element focused before the dialog was open. */
    private _returnFocusAfterDialog;
}
