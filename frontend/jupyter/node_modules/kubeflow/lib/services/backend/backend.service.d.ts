import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SnackBarService } from '../../snack-bar/snack-bar.service';
import * as i0 from "@angular/core";
export declare class BackendService {
    http: HttpClient;
    snackBar: SnackBarService;
    apiUrl: string;
    username: string;
    constructor(http: HttpClient, snackBar: SnackBarService);
    getUsername(): Observable<string>;
    getNamespaces(showSnackBar?: boolean, url?: string): Observable<string[]>;
    getStorageClasses(showSnackBar?: boolean): Observable<string[]>;
    getDefaultStorageClass(showSnackBar?: boolean): Observable<string>;
    getBackendErrorLog(error: HttpErrorResponse): string;
    getErrorMessage(error: HttpErrorResponse | ErrorEvent | string): string;
    getSnackErrorMessage(error: HttpErrorResponse | ErrorEvent | string): string;
    handleError(error: HttpErrorResponse | ErrorEvent | string, showSnackBar?: boolean): Observable<never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackendService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BackendService>;
}
//# sourceMappingURL=backend.service.d.ts.map