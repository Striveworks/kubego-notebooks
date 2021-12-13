import { Injectable } from '@angular/core';
import { HttpResponse, HttpHeaders, } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
export function forEachHttpHeader(headers, cb) {
    headers.keys().forEach(name => {
        // FIXME: A header name can have more than one values. We must use the
        // getAll() method if we want to support more values.
        const value = headers.get(name);
        cb(name, value);
    });
}
export class HeadersInterceptor {
    constructor() { }
    intercept(req, next) {
        return next.handle(req).pipe(map((event) => {
            if (!(event instanceof HttpResponse)) {
                return event;
            }
            const evHeaders = event.headers;
            const h = {};
            forEachHttpHeader(evHeaders, (name, value) => {
                if (name.startsWith('x-object-meta-') ||
                    value === 'x-container-throw-ref') {
                    value = decodeURIComponent(value);
                }
                h[name] = value;
            });
            return event.clone({
                headers: new HttpHeaders(h),
            });
        }));
    }
}
HeadersInterceptor.ɵfac = function HeadersInterceptor_Factory(t) { return new (t || HeadersInterceptor)(); };
HeadersInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HeadersInterceptor, factory: HeadersInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeadersInterceptor, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3NlcnZpY2VzL3Jvay9pbmplY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFLTCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUdyQyxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLE9BQW9CLEVBQ3BCLEVBQXlDO0lBRXpDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDNUIsc0VBQXNFO1FBQ3RFLHFEQUFxRDtRQUNyRCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBVyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBR0QsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixnQkFBZSxDQUFDO0lBRWhCLFNBQVMsQ0FDUCxHQUFxQixFQUNyQixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUMxQixHQUFHLENBQUMsQ0FBQyxLQUFxQixFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFlBQVksQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNoQyxNQUFNLENBQUMsR0FBOEIsRUFBRSxDQUFDO1lBQ3hDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDM0MsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO29CQUNqQyxLQUFLLEtBQUssdUJBQXVCLEVBQ2pDO29CQUNBLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbkM7Z0JBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDakIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQzthQUM1QixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7b0ZBNUJVLGtCQUFrQjt3RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQjt1RkFBbEIsa0JBQWtCO2NBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBIZWFkZXJzLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoSHR0cEhlYWRlcihcbiAgaGVhZGVyczogSHR0cEhlYWRlcnMsXG4gIGNiOiAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2b2lkLFxuKSB7XG4gIGhlYWRlcnMua2V5cygpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgLy8gRklYTUU6IEEgaGVhZGVyIG5hbWUgY2FuIGhhdmUgbW9yZSB0aGFuIG9uZSB2YWx1ZXMuIFdlIG11c3QgdXNlIHRoZVxuICAgIC8vIGdldEFsbCgpIG1ldGhvZCBpZiB3ZSB3YW50IHRvIHN1cHBvcnQgbW9yZSB2YWx1ZXMuXG4gICAgY29uc3QgdmFsdWUgPSBoZWFkZXJzLmdldChuYW1lKSBhcyBzdHJpbmc7XG4gICAgY2IobmFtZSwgdmFsdWUpO1xuICB9KTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhlYWRlcnNJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxOiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyLFxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcSkucGlwZShcbiAgICAgIG1hcCgoZXZlbnQ6IEh0dHBFdmVudDxhbnk+KSA9PiB7XG4gICAgICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSkge1xuICAgICAgICAgIHJldHVybiBldmVudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldkhlYWRlcnMgPSBldmVudC5oZWFkZXJzO1xuICAgICAgICBjb25zdCBoOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgICAgIGZvckVhY2hIdHRwSGVhZGVyKGV2SGVhZGVycywgKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmFtZS5zdGFydHNXaXRoKCd4LW9iamVjdC1tZXRhLScpIHx8XG4gICAgICAgICAgICB2YWx1ZSA9PT0gJ3gtY29udGFpbmVyLXRocm93LXJlZidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmNsb25lKHtcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoaCksXG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIl19