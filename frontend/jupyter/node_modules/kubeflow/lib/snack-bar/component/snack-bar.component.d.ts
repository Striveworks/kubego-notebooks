import { MatSnackBarRef } from '@angular/material/snack-bar';
import * as i0 from "@angular/core";
export declare class SnackBarComponent {
    snackBarRef: MatSnackBarRef<SnackBarComponent>;
    data: any;
    constructor(snackBarRef: MatSnackBarRef<SnackBarComponent>, data: any);
    get icon(): "done" | "clear" | "warning" | "info";
    dismiss(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SnackBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SnackBarComponent, "lib-snack-bar", never, {}, {}, never, never>;
}
//# sourceMappingURL=snack-bar.component.d.ts.map