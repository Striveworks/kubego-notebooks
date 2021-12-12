import { OnInit, EventEmitter } from '@angular/core';
import { ActionButtonValue, ActionEvent } from '../types';
import * as i0 from "@angular/core";
export declare class ActionButtonComponent implements OnInit {
    action: ActionButtonValue;
    data: any;
    emitter: EventEmitter<ActionEvent>;
    constructor();
    ngOnInit(): void;
    emitClickedEvent(): void;
    isPhaseReady(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionButtonComponent, "lib-action-button", never, { "action": "action"; "data": "data"; }, { "emitter": "emitter"; }, never, never>;
}
//# sourceMappingURL=action-button.component.d.ts.map