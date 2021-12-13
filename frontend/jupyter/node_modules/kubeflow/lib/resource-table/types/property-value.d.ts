export declare enum TRUNCATE_TEXT_SIZE {
    NO_TRUNCATE = "none",
    SMALL = "text-small",
    MEDIUM = "text-medium",
    LARGE = "text-large"
}
export interface PropertyConfig {
    field?: string;
    valueFn?: (row: any) => any;
    tooltipField?: string;
    popoverField?: string;
    truncate?: TRUNCATE_TEXT_SIZE;
    isLink?: boolean;
}
export declare class PropertyValue {
    field: string;
    tooltipField: string;
    valueFn?: (row: any) => any;
    popoverField: string;
    truncate: TRUNCATE_TEXT_SIZE;
    isLink: boolean;
    private defaultValues;
    constructor(config: PropertyConfig);
    getClasses(): any[];
    getTooltip(row: any): any;
    getPopover(row: any): any;
    getValue(row: any): any;
}
//# sourceMappingURL=property-value.d.ts.map