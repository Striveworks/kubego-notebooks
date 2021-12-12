export interface MenuConfig {
    field: string;
    menuIcon?: string;
    itemsIcon?: string;
    showTooltip?: boolean;
}
export declare class MenuValue {
    field: string;
    menuIcon: string;
    itemsIcon: string;
    showTooltip: boolean;
    private defaultValues;
    constructor(config: MenuConfig);
    getItems(row: any): any[];
}
//# sourceMappingURL=menu-value.d.ts.map