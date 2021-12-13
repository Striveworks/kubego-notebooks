import { ChipDescriptor } from '../../details-list/types';
export interface ChipsListConfig {
    field?: string;
    valueFn?: (row: any) => ChipDescriptor[];
    maxVisibleChips?: number;
    noValueText: string;
}
export declare class ChipsListValue {
    field: string;
    valueFn: (row: any) => ChipDescriptor[];
    maxVisibleChips: number;
    noValueText: string;
    private defaultValues;
    constructor(config: ChipsListConfig);
    getChips(row: any): any;
}
//# sourceMappingURL=chip-list.d.ts.map