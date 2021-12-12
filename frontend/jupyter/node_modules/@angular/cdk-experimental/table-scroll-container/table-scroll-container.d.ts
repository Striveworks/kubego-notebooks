/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { StickyPositioningListener, StickyUpdate } from '@angular/cdk/table';
/**
 * Applies styles to the host element that make its scrollbars match up with
 * the non-sticky scrollable portions of the CdkTable contained within.
 *
 * This visual effect only works in Webkit and Blink based browsers (eg Chrome,
 * Safari, Edge). Other browsers such as Firefox will gracefully degrade to
 * normal scrollbar appearance.
 * Further note: These styles have no effect when the browser is using OS-default
 * scrollbars. The easiest way to force them into custom mode is to specify width
 * and height for the scrollbar and thumb.
 */
export declare class CdkTableScrollContainer implements StickyPositioningListener, OnDestroy, OnInit {
    private readonly _elementRef;
    private readonly _document;
    private readonly _directionality?;
    private readonly _uniqueClassName;
    private _styleRoot;
    private _styleElement?;
    /** The most recent sticky column size values from the CdkTable. */
    private _startSizes;
    private _endSizes;
    private _headerSizes;
    private _footerSizes;
    constructor(_elementRef: ElementRef<HTMLElement>, _document: Document, _directionality?: Directionality | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    stickyColumnsUpdated({ sizes }: StickyUpdate): void;
    stickyEndColumnsUpdated({ sizes }: StickyUpdate): void;
    stickyHeaderRowsUpdated({ sizes }: StickyUpdate): void;
    stickyFooterRowsUpdated({ sizes }: StickyUpdate): void;
    /**
     * Set padding on the scrollbar track based on the sticky states from CdkTable.
     */
    private _updateScrollbar;
    /** Gets the stylesheet for the scrollbar styles and creates it if need be. */
    private _getStyleSheet;
    /** Updates the stylesheet with the specified scrollbar style. */
    private _applyCss;
    private _clearCss;
}
