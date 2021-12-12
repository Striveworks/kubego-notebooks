import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SubmitBarComponent implements OnInit {
    createDisabled: boolean;
    allowYAMLEditing: boolean;
    isApplying: boolean;
    create: EventEmitter<boolean>;
    cancel: EventEmitter<boolean>;
    yaml: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubmitBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubmitBarComponent, "lib-submit-bar", never, { "createDisabled": "createDisabled"; "allowYAMLEditing": "allowYAMLEditing"; "isApplying": "isApplying"; }, { "create": "create"; "cancel": "cancel"; "yaml": "yaml"; }, never, never>;
}
//# sourceMappingURL=submit-bar.component.d.ts.map