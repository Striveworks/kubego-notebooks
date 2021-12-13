export interface ToolbarButtonConfig {
    icon?: string;
    text: string;
    disabled?: boolean;
    color?: string;
    raised?: boolean;
    stroked?: boolean;
    fn: () => any;
}
export declare class ToolbarButton {
    icon: string;
    text: string;
    disabled: boolean;
    color: string;
    raised: boolean;
    stroked: boolean;
    fn: () => {};
    private defaults;
    constructor(config: ToolbarButtonConfig);
}
//# sourceMappingURL=types.d.ts.map