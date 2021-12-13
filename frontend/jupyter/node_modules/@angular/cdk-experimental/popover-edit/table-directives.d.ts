/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { FocusTrap } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import { AfterViewInit, ElementRef, EmbeddedViewRef, NgZone, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { EditEventDispatcher } from './edit-event-dispatcher';
import { EditServices } from './edit-services';
import { FocusDispatcher } from './focus-dispatcher';
import { FocusEscapeNotifier, FocusEscapeNotifierFactory } from './focus-escape-notifier';
import { EditRef } from './edit-ref';
/**
 * Describes the number of columns before and after the originating cell that the
 * edit popup should span. In left to right locales, before means left and after means
 * right. In right to left locales before means right and after means left.
 */
export interface CdkPopoverEditColspan {
    before?: number;
    after?: number;
}
/**
 * A directive that must be attached to enable editability on a table.
 * It is responsible for setting up delegated event handlers and providing the
 * EditEventDispatcher service for use by the other edit directives.
 */
export declare class CdkEditable implements AfterViewInit, OnDestroy {
    protected readonly elementRef: ElementRef;
    protected readonly editEventDispatcher: EditEventDispatcher<EditRef<unknown>>;
    protected readonly focusDispatcher: FocusDispatcher;
    protected readonly ngZone: NgZone;
    protected readonly destroyed: Subject<void>;
    constructor(elementRef: ElementRef, editEventDispatcher: EditEventDispatcher<EditRef<unknown>>, focusDispatcher: FocusDispatcher, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private _listenForTableEvents;
}
/**
 * Attaches an ng-template to a cell and shows it when instructed to by the
 * EditEventDispatcher service.
 * Makes the cell focusable.
 */
export declare class CdkPopoverEdit<C> implements AfterViewInit, OnDestroy {
    protected readonly services: EditServices;
    protected readonly elementRef: ElementRef;
    protected readonly viewContainerRef: ViewContainerRef;
    /** The edit lens template shown over the cell on edit. */
    template: TemplateRef<any> | null;
    /**
     * Implicit context to pass along to the template. Can be omitted if the template
     * is defined within the cell.
     */
    context?: C;
    /**
     * Specifies that the popup should cover additional table cells before and/or after
     * this one.
     */
    get colspan(): CdkPopoverEditColspan;
    set colspan(value: CdkPopoverEditColspan);
    private _colspan;
    /** Whether popover edit is disabled for this cell. */
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    protected focusTrap?: FocusTrap;
    protected overlayRef?: OverlayRef;
    protected readonly destroyed: Subject<void>;
    constructor(services: EditServices, elementRef: ElementRef, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected initFocusTrap(): void;
    protected closeEditOverlay(): void;
    protected panelClass(): string;
    private _startListeningToEditEvents;
    private _createEditOverlay;
    private _showEditOverlay;
    private _getOverlayCells;
    private _getPositionStrategy;
    private _updateOverlaySize;
    private _maybeReturnFocusToCell;
}
/**
 * Attaches an ng-template to a cell and shows it when instructed to by the
 * EditEventDispatcher service.
 * Makes the cell focusable.
 */
export declare class CdkPopoverEditTabOut<C> extends CdkPopoverEdit<C> {
    protected readonly focusEscapeNotifierFactory: FocusEscapeNotifierFactory;
    protected focusTrap?: FocusEscapeNotifier;
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef, services: EditServices, focusEscapeNotifierFactory: FocusEscapeNotifierFactory);
    protected initFocusTrap(): void;
}
/**
 * A structural directive that shows its contents when the table row containing
 * it is hovered or when an element in the row has focus.
 */
export declare class CdkRowHoverContent implements AfterViewInit, OnDestroy {
    protected readonly services: EditServices;
    protected readonly elementRef: ElementRef;
    protected readonly templateRef: TemplateRef<any>;
    protected readonly viewContainerRef: ViewContainerRef;
    protected readonly destroyed: Subject<void>;
    protected viewRef: EmbeddedViewRef<any> | null;
    private _row?;
    constructor(services: EditServices, elementRef: ElementRef, templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Called immediately after the hover content is created and added to the dom.
     * In the CDK version, this is a noop but subclasses such as MatRowHoverContent use this
     * to prepare/style the inserted element.
     */
    protected initElement(_: HTMLElement): void;
    /**
     * Called when the hover content needs to be focusable to preserve a reasonable tab ordering
     * but should not yet be shown.
     */
    protected makeElementHiddenButFocusable(element: HTMLElement): void;
    /**
     * Called when the hover content needs to be focusable to preserve a reasonable tab ordering
     * but should not yet be shown.
     */
    protected makeElementVisible(element: HTMLElement): void;
    private _listenForHoverAndFocusEvents;
}
/**
 * Opens the closest edit popover to this element, whether it's associated with this exact
 * element or an ancestor element.
 */
export declare class CdkEditOpen {
    protected readonly elementRef: ElementRef<HTMLElement>;
    protected readonly editEventDispatcher: EditEventDispatcher<EditRef<unknown>>;
    constructor(elementRef: ElementRef<HTMLElement>, editEventDispatcher: EditEventDispatcher<EditRef<unknown>>);
    openEdit(evt: Event): void;
}
