import { ChipsListValue } from '../types';
import { ChipDescriptor } from '../../details-list/types';
import * as i0 from "@angular/core";
export declare class TableChipsListComponent {
    element: any;
    valueDescriptor: ChipsListValue;
    hasVisibleItems(row: any): boolean;
    getVisibleChips(row: any): ChipDescriptor[];
    getChips(row: any): ChipDescriptor[];
    trackByFn(index: number, chip: ChipDescriptor): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableChipsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableChipsListComponent, "lib-table-chips-list", never, { "element": "element"; "valueDescriptor": "valueDescriptor"; }, {}, never, never>;
}
//# sourceMappingURL=chips-list.component.d.ts.map