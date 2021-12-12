import { ViewContainerRef, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export declare class PopoverTemplatePortal<C> extends TemplatePortal<C> {
    constructor(template: TemplateRef<C>, context?: C, viewContainerRef?: ViewContainerRef);
}
export declare class PopoverComponent {
    private vcr;
    private changeDetectorRef;
    private classListPrv;
    get classList(): string[];
    set classList(list: string[]);
    get hostClass(): string;
    visibilityPrv: string;
    tplPortal: TemplatePortal<any>;
    message: string;
    set template(v: PopoverTemplatePortal<any>);
    private hideTimeoutId;
    private showTimeoutId;
    private readonly onHide;
    OnMouseEnter(): void;
    OnMouseLeave(): void;
    constructor(vcr: ViewContainerRef, changeDetectorRef: ChangeDetectorRef);
    show(delay: number): void;
    hide(delay: number): void;
    afterHidden(): Observable<void>;
    markForCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverComponent, "lib-popover", never, {}, {}, never, never>;
}
//# sourceMappingURL=popover.component.d.ts.map