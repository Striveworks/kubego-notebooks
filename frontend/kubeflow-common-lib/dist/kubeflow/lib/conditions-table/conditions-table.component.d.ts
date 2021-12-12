import { Condition, ConditionIR } from './types';
import * as i0 from "@angular/core";
export declare class ConditionsTableComponent {
    private conditionsPrv;
    config: import("kubeflow").TableConfig;
    set title(t: string);
    set conditions(cs: ConditionIR[]);
    get conditions(): ConditionIR[];
    conditionsTrackByFn(index: number, c: Condition): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConditionsTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConditionsTableComponent, "lib-conditions-table", never, { "title": "title"; "conditions": "conditions"; }, {}, never, never>;
}
//# sourceMappingURL=conditions-table.component.d.ts.map