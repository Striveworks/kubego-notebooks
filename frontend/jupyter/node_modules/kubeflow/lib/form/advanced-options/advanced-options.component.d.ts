import { OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AdvancedOptionsComponent implements OnInit, AfterViewInit {
    sectionIsExpanded: boolean;
    maxHeight: string;
    text: string;
    selfClass: boolean;
    optionsWrapper: ElementRef;
    get buttonIcon(): "material:expand_less" | "material:expand_more";
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    updateHeight(): void;
    toggleClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AdvancedOptionsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AdvancedOptionsComponent, "lib-advanced-options", never, { "sectionIsExpanded": "sectionIsExpanded"; "maxHeight": "maxHeight"; "text": "text"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=advanced-options.component.d.ts.map