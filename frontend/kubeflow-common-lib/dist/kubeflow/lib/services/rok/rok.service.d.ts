import { BackendService } from '../backend/backend.service';
import { SnackBarService } from '../../snack-bar/snack-bar.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class RokService extends BackendService {
    http: HttpClient;
    dialog: SnackBarService;
    private csrfToken;
    constructor(http: HttpClient, dialog: SnackBarService);
    initCSRF(): void;
    rokRespIsValid(resp: HttpResponse<any>): void;
    getObjectMetadata(url: string, showSnackBar?: boolean): Observable<HttpHeaders>;
    getRokManagedStorageClasses(showSnackBar?: boolean): Observable<string[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RokService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RokService>;
}
//# sourceMappingURL=rok.service.d.ts.map