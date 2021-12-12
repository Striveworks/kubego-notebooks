import { ActionConfig } from './action';
export interface ActionIconConfig extends ActionConfig {
    tooltipInit?: string;
    tooltipReady?: string;
    iconInit?: string;
    iconReady: string;
}
export declare class ActionIconValue {
    name: string;
    tooltip: string;
    tooltipInit: string;
    tooltipReady: string;
    color: string;
    field: string;
    iconInit: string;
    iconReady: string;
    private defaultValues;
    constructor(config: ActionIconConfig);
}
//# sourceMappingURL=action-icon-value.d.ts.map