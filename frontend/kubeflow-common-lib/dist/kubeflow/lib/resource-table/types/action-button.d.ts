import { ActionConfig } from './action';
export interface ActionButtonConfig extends ActionConfig {
    text: string;
}
export declare class ActionButtonValue {
    name: string;
    tooltip: string;
    color: string;
    field: string;
    text: string;
    private defaultValues;
    constructor(config: ActionButtonConfig);
}
//# sourceMappingURL=action-button.d.ts.map