import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './dialog/dialog.component';
import { DialogConfig } from './types';
import * as i0 from "@angular/core";
export declare class ConfirmDialogService {
    private dialog;
    constructor(dialog: MatDialog);
    open(rsrcName: string, config: DialogConfig): import("@angular/material/dialog").MatDialogRef<ConfirmDialogComponent, any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfirmDialogService>;
}
//# sourceMappingURL=confirm-dialog.service.d.ts.map