/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AfterViewInit, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ColumnResizeNotifier, ColumnResizeNotifierSource } from './column-resize-notifier';
import { HeaderRowEventDispatcher } from './event-dispatcher';
/**
 * Base class for ColumnResize directives which attach to mat-table elements to
 * provide common events and services for column resizing.
 */
export declare abstract class ColumnResize implements AfterViewInit, OnDestroy {
    protected readonly destroyed: Subject<void>;
    abstract readonly columnResizeNotifier: ColumnResizeNotifier;
    abstract readonly elementRef: ElementRef<HTMLElement>;
    protected abstract readonly eventDispatcher: HeaderRowEventDispatcher;
    protected abstract readonly ngZone: NgZone;
    protected abstract readonly notifier: ColumnResizeNotifierSource;
    /** Unique ID for this table instance. */
    protected readonly selectorId: string;
    /** The id attribute of the table, if specified. */
    id?: string;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Gets the unique CSS class name for this table instance. */
    getUniqueCssClass(): string;
    /** Called when a column in the table is resized. Applies a css class to the table element. */
    setResized(): void;
    private _listenForRowHoverEvents;
    private _listenForResizeActivity;
    private _listenForHoverActivity;
}
