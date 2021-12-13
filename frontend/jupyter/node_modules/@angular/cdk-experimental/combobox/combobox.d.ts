/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export declare type OpenAction = 'focus' | 'click' | 'downKey' | 'toggle';
export declare type OpenActionInput = OpenAction | OpenAction[] | string | null | undefined;
import { AfterContentInit, ElementRef, EventEmitter, OnDestroy, ViewContainerRef } from '@angular/core';
import { CdkComboboxPanel, AriaHasPopupValue } from './combobox-panel';
import { Overlay } from '@angular/cdk/overlay';
import { Directionality } from '@angular/cdk/bidi';
import { BooleanInput } from '@angular/cdk/coercion';
export declare class CdkCombobox<T = unknown> implements OnDestroy, AfterContentInit {
    private readonly _elementRef;
    private readonly _overlay;
    protected readonly _viewContainerRef: ViewContainerRef;
    private readonly _directionality?;
    get panel(): CdkComboboxPanel<T> | undefined;
    set panel(panel: CdkComboboxPanel<T> | undefined);
    private _panel;
    value: T | T[];
    get disabled(): boolean;
    set disabled(value: boolean);
    private _disabled;
    get openActions(): OpenAction[];
    set openActions(action: OpenAction[]);
    private _openActions;
    /** Whether the textContent is automatically updated upon change of the combobox value. */
    get autoSetText(): boolean;
    set autoSetText(value: boolean);
    private _autoSetText;
    readonly opened: EventEmitter<void>;
    readonly closed: EventEmitter<void>;
    readonly panelValueChanged: EventEmitter<T[]>;
    private _overlayRef;
    private _panelContent;
    contentId: string;
    contentType: AriaHasPopupValue;
    constructor(_elementRef: ElementRef<HTMLElement>, _overlay: Overlay, _viewContainerRef: ViewContainerRef, _directionality?: Directionality | undefined);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    _keydown(event: KeyboardEvent): void;
    /** Handles click or focus interactions. */
    _handleInteractions(interaction: OpenAction): void;
    /** Given a click in the document, determines if the click was inside a combobox. */
    _attemptClose(event: MouseEvent): void;
    /** Toggles the open state of the panel. */
    toggle(): void;
    /** If the combobox is closed and not disabled, opens the panel. */
    open(): void;
    /** If the combobox is open and not disabled, closes the panel. */
    close(): void;
    /** Returns true if panel is currently opened. */
    isOpen(): boolean;
    /** Returns true if combobox has a child panel. */
    hasPanel(): boolean;
    _getTabIndex(): string | null;
    private _setComboboxValue;
    private _setTextContent;
    private _isTextTrigger;
    private _getOverlayConfig;
    private _getOverlayPositionStrategy;
    private _getOverlayPositions;
    private _getPanelContent;
    private _coerceOpenActionProperty;
    static ngAcceptInputType_openActions: OpenActionInput;
    static ngAcceptInputType_autoSetText: OpenActionInput;
    static ngAcceptInputType_disabled: BooleanInput;
}
