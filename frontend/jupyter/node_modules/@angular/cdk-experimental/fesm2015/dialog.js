import { trigger, state, style, transition, animate } from '@angular/animations';
import { FocusTrapFactory, A11yModule } from '@angular/cdk/a11y';
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal, PortalModule } from '@angular/cdk/portal';
import { DOCUMENT, Location } from '@angular/common';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Optional, Inject, HostBinding, ViewChild, InjectionToken, Injector, InjectFlags, Injectable, Type, SkipSelf, NgModule } from '@angular/core';
import { Subject, defer, of } from 'rxjs';
import { distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';
import { ESCAPE, hasModifierKey } from '@angular/cdk/keycodes';
import { Directionality } from '@angular/cdk/bidi';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';

class DialogConfig {
    constructor() {
        /** The ARIA role of the dialog. */
        this.role = 'dialog';
        /** Custom class(es) for the overlay panel. */
        this.panelClass = '';
        /** Whether the dialog has a background. */
        this.hasBackdrop = true;
        /** Custom class(es) for the backdrop. */
        this.backdropClass = '';
        /** Whether the dialog can be closed by user interaction. */
        this.disableClose = false;
        /** The width of the dialog. */
        this.width = '';
        /** The height of the dialog. */
        this.height = '';
        /** The minimum width of the dialog. */
        this.minWidth = '';
        /** The minimum height of the dialog. */
        this.minHeight = '';
        /** The maximum width of the dialog. */
        this.maxWidth = '80vw';
        /** The maximum height of the dialog. */
        this.maxHeight = '';
        /** Data to be injected into the dialog content. */
        this.data = null;
        /** ID of the element that describes the dialog. */
        this.ariaDescribedBy = null;
        /** Aria label to assign to the dialog element */
        this.ariaLabel = null;
        /** Whether the dialog should focus the first focusable element on open. */
        this.autoFocus = true;
        /** Duration of the enter animation. Has to be a valid CSS value (e.g. 100ms). */
        this.enterAnimationDuration = '225ms';
        /** Duration of the exit animation. Has to be a valid CSS value (e.g. 50ms). */
        this.exitAnimationDuration = '225ms';
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function throwDialogContentAlreadyAttachedError() {
    throw Error('Attempting to attach dialog content after content is already attached');
}
/**
 * Internal component that wraps user-provided dialog content.
 * @docs-private
 */
class CdkDialogContainer extends BasePortalOutlet {
    constructor(_elementRef, _focusTrapFactory, _changeDetectorRef, _document, 
    /** The dialog configuration. */
    _config) {
        super();
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        this._changeDetectorRef = _changeDetectorRef;
        this._config = _config;
        /** State of the dialog animation. */
        this._state = 'enter';
        /** Element that was focused before the dialog was opened. Save this to restore upon close. */
        this._elementFocusedBeforeDialogWasOpened = null;
        /** The class that traps and manages focus within the dialog. */
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        this._ariaModal = true;
        /** A subject emitting before the dialog enters the view. */
        this._beforeEnter = new Subject();
        /** A subject emitting after the dialog enters the view. */
        this._afterEnter = new Subject();
        /** A subject emitting before the dialog exits the view. */
        this._beforeExit = new Subject();
        /** A subject emitting after the dialog exits the view. */
        this._afterExit = new Subject();
        /** Stream of animation `done` events. */
        this._animationDone = new Subject();
        /**
         * Attaches a DOM portal to the dialog container.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */
        this.attachDomPortal = (portal) => {
            if (this._portalHost.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throwDialogContentAlreadyAttachedError();
            }
            return this._portalHost.attachDomPortal(portal);
        };
        this._document = _document;
        // We use a Subject with a distinctUntilChanged, rather than a callback attached to .done,
        // because some browsers fire the done event twice and we don't want to emit duplicate events.
        // See: https://github.com/angular/angular/issues/24084
        this._animationDone.pipe(distinctUntilChanged((x, y) => {
            return x.fromState === y.fromState && x.toState === y.toState;
        })).subscribe(event => {
            // Emit lifecycle events based on animation `done` callback.
            if (event.toState === 'enter') {
                this._autoFocusFirstTabbableElement();
                this._afterEnter.next();
                this._afterEnter.complete();
            }
            if (event.fromState === 'enter' && (event.toState === 'void' || event.toState === 'exit')) {
                this._returnFocusAfterDialog();
                this._afterExit.next();
                this._afterExit.complete();
            }
        });
    }
    // @HostBinding is used in the class as it is expected to be extended. Since @Component decorator
    // metadata is not inherited by child classes, instead the host binding data is defined in a way
    // that can be inherited.
    // tslint:disable:no-host-decorator-in-concrete no-private-getters
    get _ariaLabel() { return this._config.ariaLabel || null; }
    get _ariaDescribedBy() { return this._config.ariaDescribedBy; }
    get _role() { return this._config.role; }
    get _tabindex() { return -1; }
    /** Initializes the dialog container with the attached content. */
    _initializeWithAttachedContent() {
        // Save the previously focused element. This element will be re-focused
        // when the dialog closes.
        this._savePreviouslyFocusedElement();
        // Move focus onto the dialog immediately in order to prevent the user
        // from accidentally opening multiple dialogs at the same time.
        this._focusDialogContainer();
    }
    /** Destroy focus trap to place focus back to the element focused before the dialog opened. */
    ngOnDestroy() {
        this._focusTrap.destroy();
        this._animationDone.complete();
    }
    /**
     * Attach a ComponentPortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachComponentPortal(portal) {
        if (this._portalHost.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwDialogContentAlreadyAttachedError();
        }
        return this._portalHost.attachComponentPortal(portal);
    }
    /**
     * Attach a TemplatePortal as content to this dialog container.
     * @param portal Portal to be attached as the dialog content.
     */
    attachTemplatePortal(portal) {
        if (this._portalHost.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwDialogContentAlreadyAttachedError();
        }
        return this._portalHost.attachTemplatePortal(portal);
    }
    /** Emit lifecycle events based on animation `start` callback. */
    _onAnimationStart(event) {
        if (event.toState === 'enter') {
            this._beforeEnter.next();
            this._beforeEnter.complete();
        }
        if (event.fromState === 'enter' && (event.toState === 'void' || event.toState === 'exit')) {
            this._beforeExit.next();
            this._beforeExit.complete();
        }
    }
    /** Starts the dialog exit animation. */
    _startExiting() {
        this._state = 'exit';
        // Mark the container for check so it can react if the
        // view container is using OnPush change detection.
        this._changeDetectorRef.markForCheck();
    }
    /** Saves a reference to the element that was focused before the dialog was opened. */
    _savePreviouslyFocusedElement() {
        if (this._document) {
            this._elementFocusedBeforeDialogWasOpened = this._document.activeElement;
        }
    }
    /** Focuses the dialog container. */
    _focusDialogContainer() {
        // Note that there is no focus method when rendering on the server.
        if (this._elementRef.nativeElement.focus) {
            this._elementRef.nativeElement.focus();
        }
    }
    /**
     * Autofocus the first tabbable element inside of the dialog, if there is not a tabbable element,
     * focus the dialog instead.
     */
    _autoFocusFirstTabbableElement() {
        const element = this._elementRef.nativeElement;
        // If were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        if (this._config.autoFocus) {
            this._focusTrap.focusInitialElementWhenReady().then(hasMovedFocus => {
                // If we didn't find any focusable elements inside the dialog, focus the
                // container so the user can't tab into other elements behind it.
                if (!hasMovedFocus) {
                    element.focus();
                }
            });
        }
        else {
            const activeElement = this._document.activeElement;
            // Otherwise ensure that focus is on the dialog container. It's possible that a different
            // component tried to move focus while the open animation was running. See:
            // https://github.com/angular/components/issues/16215. Note that we only want to do this
            // if the focus isn't inside the dialog already, because it's possible that the consumer
            // turned off `autoFocus` in order to move focus themselves.
            if (activeElement !== element && !element.contains(activeElement)) {
                element.focus();
            }
        }
    }
    /** Returns the focus to the element focused before the dialog was open. */
    _returnFocusAfterDialog() {
        const toFocus = this._elementFocusedBeforeDialogWasOpened;
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (toFocus && typeof toFocus.focus === 'function') {
            const activeElement = this._document.activeElement;
            const element = this._elementRef.nativeElement;
            // Make sure that focus is still inside the dialog or is on the body (usually because a
            // non-focusable element like the backdrop was clicked) before moving it. It's possible that
            // the consumer moved it themselves before the animation was done, in which case we shouldn't
            // do anything.
            if (!activeElement || activeElement === this._document.body || activeElement === element ||
                element.contains(activeElement)) {
                toFocus.focus();
            }
        }
    }
}
CdkDialogContainer.decorators = [
    { type: Component, args: [{
                selector: 'cdk-dialog-container',
                template: "<ng-template cdkPortalOutlet></ng-template>\n",
                encapsulation: ViewEncapsulation.None,
                // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.
                // tslint:disable-next-line:validate-decorators
                changeDetection: ChangeDetectionStrategy.Default,
                animations: [
                    trigger('dialog', [
                        state('enter', style({ opacity: 1 })),
                        state('exit, void', style({ opacity: 0 })),
                        transition('* => enter', animate('{{enterAnimationDuration}}')),
                        transition('* => exit, * => void', animate('{{exitAnimationDuration}}')),
                    ])
                ],
                host: {
                    '[@dialog]': `{
      value: _state,
      params: {
        enterAnimationDuration: _config.enterAnimationDuration,
        exitAnimationDuration: _config.exitAnimationDuration
      }
    }`,
                    '(@dialog.start)': '_onAnimationStart($event)',
                    '(@dialog.done)': '_animationDone.next($event)',
                },
                styles: ["cdk-dialog-container{background:#fff;border-radius:5px;display:block;padding:10px}\n"]
            },] }
];
CdkDialogContainer.ctorParameters = () => [
    { type: ElementRef },
    { type: FocusTrapFactory },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: DialogConfig }
];
CdkDialogContainer.propDecorators = {
    _ariaLabel: [{ type: HostBinding, args: ['attr.aria-label',] }],
    _ariaDescribedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    _role: [{ type: HostBinding, args: ['attr.role',] }],
    _ariaModal: [{ type: HostBinding, args: ['attr.aria-modal',] }],
    _tabindex: [{ type: HostBinding, args: ['attr.tabindex',] }],
    _portalHost: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }]
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Unique id for the created dialog. */
let uniqueId = 0;
/**
 * Reference to a dialog opened via the Dialog service.
 */
class DialogRef {
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

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token for the Dialog's ScrollStrategy. */
const DIALOG_SCROLL_STRATEGY = new InjectionToken('DialogScrollStrategy');
/** Injection token for the Dialog's Data. */
const DIALOG_DATA = new InjectionToken('DialogData');
/** Injection token for the DialogRef constructor. */
const DIALOG_REF = new InjectionToken('DialogRef');
/** Injection token for the DialogConfig. */
const DIALOG_CONFIG = new InjectionToken('DialogConfig');
/** Injection token for the Dialog's DialogContainer component. */
const DIALOG_CONTAINER = new InjectionToken('DialogContainer');
/** @docs-private */
function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
/** @docs-private */
const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER = {
    provide: DIALOG_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Service to open modal dialogs.
 */
class Dialog {
    constructor(_overlay, _injector, _dialogRefConstructor, 
    // TODO(crisbeto): the `any` here can be replaced
    // with the proper type once we start using Ivy.
    scrollStrategy, _parentDialog, location) {
        this._overlay = _overlay;
        this._injector = _injector;
        this._dialogRefConstructor = _dialogRefConstructor;
        this._parentDialog = _parentDialog;
        this._afterAllClosedBase = new Subject();
        // TODO(jelbourn): tighten the type on the right-hand side of this expression.
        this.afterAllClosed = defer(() => this.openDialogs.length ?
            this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(undefined)));
        this._afterOpened = new Subject();
        this._openDialogs = [];
        // Close all of the dialogs when the user goes forwards/backwards in history or when the
        // location hash changes. Note that this usually doesn't include clicking on links (unless
        // the user is using the `HashLocationStrategy`).
        if (!_parentDialog && location) {
            location.subscribe(() => this.closeAll());
        }
        this._scrollStrategy = scrollStrategy;
    }
    /** Stream that emits when all dialogs are closed. */
    _getAfterAllClosed() {
        return this._parentDialog ? this._parentDialog.afterAllClosed : this._afterAllClosedBase;
    }
    /** Stream that emits when a dialog is opened. */
    get afterOpened() {
        return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpened;
    }
    /** Stream that emits when a dialog is opened. */
    get openDialogs() {
        return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogs;
    }
    /** Gets an open dialog by id. */
    getById(id) {
        return this._openDialogs.find(ref => ref.id === id);
    }
    /** Closes all open dialogs. */
    closeAll() {
        this.openDialogs.forEach(ref => ref.close());
    }
    /** Opens a dialog from a component. */
    openFromComponent(component, config) {
        config = this._applyConfigDefaults(config);
        if (config.id && this.getById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        const overlayRef = this._createOverlay(config);
        const dialogContainer = this._attachDialogContainer(overlayRef, config);
        const dialogRef = this._attachDialogContentForComponent(component, dialogContainer, overlayRef, config);
        this._registerDialogRef(dialogRef);
        dialogContainer._initializeWithAttachedContent();
        return dialogRef;
    }
    /** Opens a dialog from a template. */
    openFromTemplate(template, config) {
        config = this._applyConfigDefaults(config);
        if (config.id && this.getById(config.id) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
        }
        const overlayRef = this._createOverlay(config);
        const dialogContainer = this._attachDialogContainer(overlayRef, config);
        const dialogRef = this._attachDialogContentForTemplate(template, dialogContainer, overlayRef, config);
        this._registerDialogRef(dialogRef);
        dialogContainer._initializeWithAttachedContent();
        return dialogRef;
    }
    ngOnDestroy() {
        // Only close all the dialogs at this level.
        this._openDialogs.forEach(ref => ref.close());
    }
    /**
     * Forwards emitting events for when dialogs are opened and all dialogs are closed.
     */
    _registerDialogRef(dialogRef) {
        this.openDialogs.push(dialogRef);
        const dialogOpenSub = dialogRef.afterOpened().subscribe(() => {
            this.afterOpened.next(dialogRef);
            dialogOpenSub.unsubscribe();
        });
        const dialogCloseSub = dialogRef.afterClosed().subscribe(() => {
            let dialogIndex = this._openDialogs.indexOf(dialogRef);
            if (dialogIndex > -1) {
                this._openDialogs.splice(dialogIndex, 1);
            }
            if (!this._openDialogs.length) {
                this._afterAllClosedBase.next();
                dialogCloseSub.unsubscribe();
            }
        });
    }
    /**
     * Creates an overlay config from a dialog config.
     * @param config The dialog configuration.
     * @returns The overlay configuration.
     */
    _createOverlay(config) {
        const overlayConfig = new OverlayConfig({
            positionStrategy: this._overlay.position().global(),
            scrollStrategy: this._scrollStrategy(),
            panelClass: config.panelClass,
            hasBackdrop: config.hasBackdrop,
            direction: config.direction,
            minWidth: config.minWidth,
            minHeight: config.minHeight,
            maxWidth: config.maxWidth,
            maxHeight: config.maxHeight
        });
        if (config.backdropClass) {
            overlayConfig.backdropClass = config.backdropClass;
        }
        return this._overlay.create(overlayConfig);
    }
    /**
     * Attaches an MatDialogContainer to a dialog's already-created overlay.
     * @param overlay Reference to the dialog's underlying overlay.
     * @param config The dialog configuration.
     * @returns A promise resolving to a ComponentRef for the attached container.
     */
    _attachDialogContainer(overlay, config) {
        const container = config.containerComponent || this._injector.get(DIALOG_CONTAINER);
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = Injector.create({
            parent: userInjector || this._injector,
            providers: [{ provide: DialogConfig, useValue: config }]
        });
        const containerPortal = new ComponentPortal(container, config.viewContainerRef, injector);
        const containerRef = overlay.attach(containerPortal);
        containerRef.instance._config = config;
        return containerRef.instance;
    }
    /**
     * Attaches the user-provided component to the already-created MatDialogContainer.
     * @param componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param dialogContainer Reference to the wrapping MatDialogContainer.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @param config The dialog configuration.
     * @returns A promise resolving to the MatDialogRef that should be returned to the user.
     */
    _attachDialogContentForComponent(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        const dialogRef = this._createDialogRef(overlayRef, dialogContainer, config);
        const injector = this._createInjector(config, dialogRef, dialogContainer);
        const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, undefined, injector));
        dialogRef.componentInstance = contentRef.instance;
        return dialogRef;
    }
    /**
     * Attaches the user-provided component to the already-created MatDialogContainer.
     * @param componentOrTemplateRef The type of component being loaded into the dialog,
     *     or a TemplateRef to instantiate as the content.
     * @param dialogContainer Reference to the wrapping MatDialogContainer.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @param config The dialog configuration.
     * @returns A promise resolving to the MatDialogRef that should be returned to the user.
     */
    _attachDialogContentForTemplate(componentOrTemplateRef, dialogContainer, overlayRef, config) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        const dialogRef = this._createDialogRef(overlayRef, dialogContainer, config);
        dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, { $implicit: config.data, dialogRef }));
        return dialogRef;
    }
    /**
     * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
     * of a dialog to close itself and, optionally, to return a value.
     * @param config Config object that is used to construct the dialog.
     * @param dialogRef Reference to the dialog.
     * @param container Dialog container element that wraps all of the contents.
     * @returns The custom injector that can be used inside the dialog.
     */
    _createInjector(config, dialogRef, dialogContainer) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const providers = [
            { provide: this._injector.get(DIALOG_REF), useValue: dialogRef },
            { provide: this._injector.get(DIALOG_CONTAINER), useValue: dialogContainer },
            { provide: DIALOG_DATA, useValue: config.data }
        ];
        if (config.direction && (!userInjector ||
            !userInjector.get(Directionality, null, InjectFlags.Optional))) {
            providers.push({
                provide: Directionality,
                useValue: { value: config.direction, change: of() }
            });
        }
        return Injector.create({ parent: userInjector || this._injector, providers });
    }
    /** Creates a new dialog ref. */
    _createDialogRef(overlayRef, dialogContainer, config) {
        const dialogRef = new this._dialogRefConstructor(overlayRef, dialogContainer, config.id);
        dialogRef.disableClose = config.disableClose;
        dialogRef.updateSize(config).updatePosition(config.position);
        return dialogRef;
    }
    /**
     * Expands the provided configuration object to include the default values for properties which
     * are undefined.
     */
    _applyConfigDefaults(config) {
        const dialogConfig = this._injector.get(DIALOG_CONFIG);
        return Object.assign(Object.assign({}, new dialogConfig()), config);
    }
}
Dialog.decorators = [
    { type: Injectable }
];
Dialog.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: Type, decorators: [{ type: Inject, args: [DIALOG_REF,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DIALOG_SCROLL_STRATEGY,] }] },
    { type: Dialog, decorators: [{ type: Optional }, { type: SkipSelf }] },
    { type: Location, decorators: [{ type: Optional }] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ɵ0 = DialogRef, ɵ1 = CdkDialogContainer, ɵ2 = DialogConfig;
class DialogModule {
}
DialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    OverlayModule,
                    PortalModule,
                    A11yModule,
                ],
                exports: [
                    // Re-export the PortalModule so that people extending the `CdkDialogContainer`
                    // don't have to remember to import it or be faced with an unhelpful error.
                    PortalModule,
                    CdkDialogContainer,
                ],
                declarations: [
                    CdkDialogContainer,
                ],
                providers: [
                    Dialog,
                    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                    { provide: DIALOG_REF, useValue: ɵ0 },
                    { provide: DIALOG_CONTAINER, useValue: ɵ1 },
                    { provide: DIALOG_CONFIG, useValue: ɵ2 },
                ],
                entryComponents: [CdkDialogContainer],
            },] }
];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CdkDialogContainer, DIALOG_CONFIG, DIALOG_CONTAINER, DIALOG_DATA, DIALOG_REF, DIALOG_SCROLL_STRATEGY, Dialog, DialogConfig, DialogModule, DialogRef, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, throwDialogContentAlreadyAttachedError, ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=dialog.js.map
