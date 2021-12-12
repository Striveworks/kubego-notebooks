import { ComponentRef, OnInit } from '@angular/core';
import { ComponentValue } from '../types';
import { Portal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
export interface TableColumnComponent {
    element: any;
}
export declare class ComponentValueComponent implements OnInit {
    portal: Portal<any>;
    private componentRef;
    private data;
    get element(): any;
    set element(data: any);
    valueDescriptor: ComponentValue;
    ngOnInit(): void;
    onAttach(ref: ComponentRef<TableColumnComponent>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentValueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComponentValueComponent, "lib-component-value", never, { "element": "element"; "valueDescriptor": "valueDescriptor"; }, {}, never, never>;
}
//# sourceMappingURL=component-value.component.d.ts.map