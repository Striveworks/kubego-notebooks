import { OnInit, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RokUrlInputComponent implements OnInit {
    control: AbstractControl;
    mode: string;
    create: boolean;
    urlEntered: EventEmitter<string>;
    private popupChooser;
    private chooserId;
    constructor();
    ngOnInit(): void;
    openChooser(): void;
    parseRokUrlError(): "Rok URL cannot be empty" | "Not a valid Rok URL";
    onMessage(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RokUrlInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RokUrlInputComponent, "lib-rok-url-input", never, { "control": "control"; "mode": "mode"; "create": "create"; }, { "urlEntered": "urlEntered"; }, never, never>;
}
//# sourceMappingURL=rok-url-input.component.d.ts.map