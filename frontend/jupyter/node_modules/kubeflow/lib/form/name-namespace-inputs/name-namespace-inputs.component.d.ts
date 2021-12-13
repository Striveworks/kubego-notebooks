import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NameNamespaceInputsComponent implements OnInit {
    private existingNamesPrv;
    nameControl: AbstractControl;
    namespaceControl: AbstractControl;
    resourceName: string;
    maxLength: number;
    existingNames: Set<string>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NameNamespaceInputsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NameNamespaceInputsComponent, "lib-form-name-namespace-inputs", never, { "nameControl": "nameControl"; "namespaceControl": "namespaceControl"; "resourceName": "resourceName"; "maxLength": "maxLength"; "existingNames": "existingNames"; }, {}, never, never>;
}
//# sourceMappingURL=name-namespace-inputs.component.d.ts.map