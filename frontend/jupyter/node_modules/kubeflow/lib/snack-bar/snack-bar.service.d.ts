import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackType } from './types';
import * as i0 from "@angular/core";
export declare class SnackBarService {
    private snackBar;
    private dialogState;
    constructor(snackBar: MatSnackBar);
    private show;
    close(): void;
    open(msg: string, type: SnackType, time?: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SnackBarService>;
}
//# sourceMappingURL=snack-bar.service.d.ts.map