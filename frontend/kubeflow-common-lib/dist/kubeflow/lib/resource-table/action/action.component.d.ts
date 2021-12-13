import { OnInit, EventEmitter } from '@angular/core';
import { STATUS_TYPE } from '../status/types';
import { ActionIconValue, ActionEvent } from '../types';
import * as i0 from "@angular/core";
export declare class ActionComponent implements OnInit {
    private innerData;
    private clicked;
    private cancelWaitingPhase$;
    action: ActionIconValue;
    data: any;
    emitter: EventEmitter<ActionEvent>;
    constructor();
    ngOnInit(): void;
    emitClickedEvent(): void;
    get tooltipInit(): string;
    get tooltipReady(): string;
    getIcon(icon: string): string | string[];
    getCategory(icon: any): any;
    isPhaseReady(): boolean;
    isPhaseInit(): boolean;
    isPhaseWaiting(): boolean;
    isPhaseDisabled(): boolean;
    get status(): STATUS_TYPE;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ActionComponent, "lib-action", never, { "action": "action"; "data": "data"; }, { "emitter": "emitter"; }, never, never>;
}
//# sourceMappingURL=action.component.d.ts.map