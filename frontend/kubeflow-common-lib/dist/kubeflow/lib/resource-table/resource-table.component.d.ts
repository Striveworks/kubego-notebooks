import { OnInit, EventEmitter } from '@angular/core';
import { TableConfig, ActionEvent, TABLE_THEME } from './types';
import * as i0 from "@angular/core";
export declare class ResourceTableComponent implements OnInit {
    config: TableConfig;
    data: any[];
    trackByFn: (index: number, r: any) => string;
    actionsEmitter: EventEmitter<ActionEvent>;
    TABLE_THEME: typeof TABLE_THEME;
    constructor();
    ngOnInit(): void;
    actionTriggered(e: ActionEvent): void;
    newButtonTriggered(): void;
    linkClicked(field: string, data: any): void;
    get minTableWidth(): string;
    get totalWidth(): string;
    get tableTheme(): TABLE_THEME;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourceTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResourceTableComponent, "lib-resource-table", never, { "config": "config"; "data": "data"; "trackByFn": "trackByFn"; }, { "actionsEmitter": "actionsEmitter"; }, never, never>;
}
//# sourceMappingURL=resource-table.component.d.ts.map