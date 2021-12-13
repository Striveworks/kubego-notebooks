import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare function forEachHttpHeader(headers: HttpHeaders, cb: (name: string, value: string) => void): void;
export declare class HeadersInterceptor implements HttpInterceptor {
    constructor();
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeadersInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HeadersInterceptor>;
}
//# sourceMappingURL=injector.d.ts.map