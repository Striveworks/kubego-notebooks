import { TemplateRef, ViewContainerRef, ElementRef, OnDestroy, NgZone } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef, OriginConnectionPosition, OverlayConnectionPosition, HorizontalConnectionPos, VerticalConnectionPos, ScrollDispatcher, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PopoverComponent } from './popover.component';
import * as i0 from "@angular/core";
interface OriginPosition {
    main: OriginConnectionPosition;
    fallback: OriginConnectionPosition;
}
interface OverlayPosition {
    main: OverlayConnectionPosition;
    fallback: OverlayConnectionPosition;
}
declare type Position = 'above' | 'below' | 'before' | 'after';
declare type PopoverValue = TemplateRef<any> | string;
export declare class PopoverDirective implements OnDestroy {
    private overlay;
    private viewContainerRef;
    private elemRef;
    private ngZone;
    private scrollDispatcher;
    private libPopoverPrv;
    get libPopover(): PopoverValue;
    set libPopover(v: PopoverValue);
    libPopoverContext: any;
    libPopoverPosition: Position;
    libPopoverClass: string[];
    disabled: boolean;
    libPopoverShowDelay: number;
    libPopoverHideDelay: number;
    portal: ComponentPortal<PopoverComponent>;
    popoverInstance: PopoverComponent | null;
    overlayRef: OverlayRef | null;
    OnMouseEnter(): void;
    OnMouseLeave(): void;
    constructor(overlay: Overlay, viewContainerRef: ViewContainerRef, elemRef: ElementRef, ngZone: NgZone, scrollDispatcher: ScrollDispatcher);
    ngOnDestroy(): void;
    show(delay?: number): void;
    createPopover(): void;
    createOverlay(): OverlayRef;
    hide(delay?: number): void;
    detach(): void;
    getOverlayConfig(): OverlayConfig;
    getConnectedElement(): ElementRef;
    updatePosition(): void;
    getPositionStrategy(): FlexibleConnectedPositionStrategy;
    getOriginPos(position: Position): OriginPosition;
    getOverlayPos(position: Position): OverlayPosition;
    invertPosition(position: Position, x: HorizontalConnectionPos, y: VerticalConnectionPos): {
        x: HorizontalConnectionPos;
        y: VerticalConnectionPos;
    };
    checkAndUpdate(oldValue: PopoverValue, newValue: PopoverValue): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PopoverDirective, "[libPopover]", never, { "libPopover": "libPopover"; "libPopoverContext": "libPopoverContext"; "libPopoverPosition": "libPopoverPosition"; "libPopoverClass": "libPopoverClass"; "disabled": "libPopoverDisabled"; "libPopoverShowDelay": "libPopoverShowDelay"; "libPopoverHideDelay": "libPopoverHideDelay"; }, {}, never>;
}
export {};
//# sourceMappingURL=popover.directive.d.ts.map