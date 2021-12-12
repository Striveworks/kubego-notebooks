import { ActionIconValue } from './action-icon-value';
import { ActionButtonValue } from './action-button';
export declare class ActionListValue {
    actions: (ActionIconValue | ActionButtonValue)[];
    constructor(actions: (ActionIconValue | ActionButtonValue)[]);
}
export interface ActionConfig {
    name: string;
    tooltip?: string;
    color: string;
    field?: string;
}
//# sourceMappingURL=action.d.ts.map