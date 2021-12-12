import { EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableConfig, ActionEvent, TABLE_THEME } from '../types';
import * as i0 from "@angular/core";
export declare class TableComponent {
    private innerConfig;
    private innerData;
    dataSource: MatTableDataSource<unknown>;
    displayedColumns: string[];
    TABLE_THEME: typeof TABLE_THEME;
    set config(config: TableConfig);
    get config(): TableConfig;
    trackByFn: (index: number, r: any) => string;
    get data(): any[];
    set data(newData: any[]);
    emitter: EventEmitter<ActionEvent>;
    isActionListValue(obj: any): boolean;
    isActionButtonValue(obj: any): boolean;
    isChipsListValue(obj: any): boolean;
    isComponentValue(obj: any): boolean;
    isTemplateValue(obj: any): boolean;
    isActionIconValue(obj: any): boolean;
    isMenuValue(obj: any): boolean;
    isStatusValue(obj: any): boolean;
    isPropertyValue(obj: any): boolean;
    isDateTimeValue(obj: any): boolean;
    actionTriggered(e: ActionEvent): void;
    newButtonTriggered(): void;
    linkClicked(col: string, data: any): void;
    get tableTheme(): TABLE_THEME;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "lib-table", never, { "config": "config"; "trackByFn": "trackByFn"; "data": "data"; "emitter": "emitter"; }, {}, never, never>;
}
//# sourceMappingURL=table.component.d.ts.map