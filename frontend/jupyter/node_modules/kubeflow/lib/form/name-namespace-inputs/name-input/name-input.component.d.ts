import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NameInputComponent implements OnInit {
    private existingNamesPrv;
    nameControl: AbstractControl;
    resourceName: string;
    maxLength: number;
    get existingNames(): Set<string>;
    set existingNames(names: Set<string>);
    constructor();
    ngOnInit(): void;
    nameError(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NameInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NameInputComponent, "lib-name-input", never, { "nameControl": "nameControl"; "resourceName": "resourceName"; "maxLength": "maxLength"; "existingNames": "existingNames"; }, {}, never, never>;
}
//# sourceMappingURL=name-input.component.d.ts.map