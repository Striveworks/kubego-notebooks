import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogConfig, DIALOG_RESP } from '../types';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ConfirmDialogComponent implements OnInit {
    dialogRef: MatDialogRef<ConfirmDialogComponent>;
    data: DialogConfig;
    DIALOG_RESP: typeof DIALOG_RESP;
    isApplying: boolean;
    applying$: Subject<boolean>;
    constructor(dialogRef: MatDialogRef<ConfirmDialogComponent>, data: DialogConfig);
    ngOnInit(): void;
    onAcceptClicked(): void;
    onCancelClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfirmDialogComponent, "lib-confirm-dialog", never, {}, {}, never, never>;
}
//# sourceMappingURL=dialog.component.d.ts.map