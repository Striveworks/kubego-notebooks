import { PropertyValue } from './property-value';
import { StatusValue } from './status';
import { ActionListValue } from './action';
import { ActionIconValue } from './action-icon-value';
import { DateTimeValue } from './date-time';
import { TemplateValue } from './template';
import { ChipsListValue } from './chip-list';
import { ComponentValue } from './component-value';
export declare type TextAlignment = 'left' | 'right';
export interface TableColumn {
    matHeaderCellDef: string;
    matColumnDef: string;
    value: PropertyValue | StatusValue | ActionListValue | ActionIconValue | DateTimeValue | ChipsListValue | ComponentValue | TemplateValue;
    textAlignment?: TextAlignment;
    minWidth?: string;
    width?: string;
}
export interface TableConfig {
    columns: TableColumn[];
    title: string;
    newButtonText?: string;
    width?: string;
    theme?: TABLE_THEME;
}
export declare enum TABLE_THEME {
    CARD = "card",
    FLAT = "flat"
}
export declare class ActionEvent {
    action: string;
    data: any;
    constructor(action: any, data: any);
}
//# sourceMappingURL=table.d.ts.map