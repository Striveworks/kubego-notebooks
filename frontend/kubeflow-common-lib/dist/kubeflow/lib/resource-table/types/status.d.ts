import { Status } from '../status/types';
export interface StatusConfig {
    field?: string;
    valueFn?: (row: any) => Status;
    fieldPhase?: string;
    fieldMessage?: string;
    fieldState?: string;
}
export declare class StatusValue {
    field: string;
    fieldPhase: string;
    valueFn: (row: any) => Status;
    fieldMessage: string;
    fieldState: string;
    private defaultValues;
    constructor(config?: StatusConfig);
    getPhase(row: any): any;
    getState(row: any): any;
    getMessage(row: any): any;
    getIcon(row: any): "error" | "warning" | "check_circle" | "timelapse";
    getCssClasses(row: any): string[];
    getTooltip(row: any): string;
}
//# sourceMappingURL=status.d.ts.map