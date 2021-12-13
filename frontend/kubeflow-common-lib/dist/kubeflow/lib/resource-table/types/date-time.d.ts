export interface DateTimeConfig {
    field: string;
}
export declare class DateTimeValue {
    field: string;
    private defaultValues;
    constructor(config: DateTimeConfig);
    getValue(row: any): any;
}
//# sourceMappingURL=date-time.d.ts.map