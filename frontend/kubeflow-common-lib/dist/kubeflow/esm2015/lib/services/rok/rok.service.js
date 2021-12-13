import { Injectable } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { HttpHeaders, } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../snack-bar/snack-bar.service";
export class RokService extends BackendService {
    constructor(http, dialog) {
        super(http, dialog);
        this.http = http;
        this.dialog = dialog;
        this.csrfToken = '';
    }
    initCSRF() {
        if (this.csrfToken.length !== 0) {
            return;
        }
        console.log('Setting up CSRF protection for Rok');
        this.http
            .get('/rok/services/settings')
            .pipe(catchError(error => this.handleError(error, true)), map((settings) => {
            console.log('Got back Rok settings:');
            console.log(settings);
            console.log(`Using token: ${settings.static_token}`);
            if (settings.static_token === null) {
                console.warn(`Using null token for CSRF protection!`);
            }
            this.csrfToken = settings.static_token;
        }))
            .subscribe();
    }
    rokRespIsValid(resp) {
        const rokUrl = resp.headers.get('X-Object-Rok-URL');
        const objectUrl = resp.headers.get('X-Object-URL');
        if (rokUrl === null || rokUrl !== objectUrl) {
            throw new ErrorEvent('Bad Rok URL', {
                message: `'${resp.url}' is not a valid Rok URL`,
            });
        }
    }
    getObjectMetadata(url, showSnackBar = true) {
        console.log(`Making a HEAD to '${url} to get Object Metadata`);
        return this.http
            .head(url, {
            headers: new HttpHeaders({
                'X-Auth-Token': this.csrfToken,
            }),
            observe: 'response',
        })
            .pipe(tap(resp => this.rokRespIsValid(resp)), catchError(error => this.handleError(error, showSnackBar)), map((resp) => {
            console.log(`Metadata for object in url: ${url}`);
            console.log(resp.headers);
            return resp.headers;
        }));
    }
    getRokManagedStorageClasses(showSnackBar = true) {
        // Get existing PVCs in a namespace
        const url = `api/rok/storageclasses`;
        return this.http.get(url).pipe(catchError(error => this.handleError(error, showSnackBar)), map((data) => {
            return data.storageClasses;
        }));
    }
}
RokService.ɵfac = function RokService_Factory(t) { return new (t || RokService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.SnackBarService)); };
RokService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RokService, factory: RokService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RokService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.SnackBarService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9rLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3NlcnZpY2VzL3Jvay9yb2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBRUwsV0FBVyxHQUdaLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFRdEQsTUFBTSxPQUFPLFVBQVcsU0FBUSxjQUFjO0lBRzVDLFlBQW1CLElBQWdCLEVBQVMsTUFBdUI7UUFDakUsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQURILFNBQUksR0FBSixJQUFJLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUYzRCxjQUFTLEdBQUcsRUFBRSxDQUFDO0lBSXZCLENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJO2FBQ04sR0FBRyxDQUFjLHdCQUF3QixDQUFDO2FBQzFDLElBQUksQ0FDSCxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUNsRCxHQUFHLENBQUMsQ0FBQyxRQUFxQixFQUFFLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFFckQsSUFBSSxRQUFRLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2FBQ3ZEO1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUNIO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVNLGNBQWMsQ0FBQyxJQUF1QjtRQUMzQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRW5ELElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzNDLE1BQU0sSUFBSSxVQUFVLENBQUMsYUFBYSxFQUFFO2dCQUNsQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRywwQkFBMEI7YUFDaEQsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU0saUJBQWlCLENBQ3RCLEdBQVcsRUFDWCxZQUFZLEdBQUcsSUFBSTtRQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLHlCQUF5QixDQUFDLENBQUM7UUFFL0QsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBTSxHQUFHLEVBQUU7WUFDZCxPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUzthQUMvQixDQUFDO1lBQ0YsT0FBTyxFQUFFLFVBQVU7U0FDcEIsQ0FBQzthQUNELElBQUksQ0FDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3RDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQzFELEdBQUcsQ0FBQyxDQUFDLElBQXVCLEVBQUUsRUFBRTtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ04sQ0FBQztJQUVNLDJCQUEyQixDQUNoQyxZQUFZLEdBQUcsSUFBSTtRQUVuQixtQ0FBbUM7UUFDbkMsTUFBTSxHQUFHLEdBQUcsd0JBQXdCLENBQUM7UUFFckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM3QyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQyxFQUMxRCxHQUFHLENBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztvRUFoRlUsVUFBVTtnRUFBVixVQUFVLFdBQVYsVUFBVSxtQkFGVCxNQUFNO3VGQUVQLFVBQVU7Y0FIdEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuLi9iYWNrZW5kL2JhY2tlbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTbmFja0JhclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zbmFjay1iYXIvc25hY2stYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cEhlYWRlcnMsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm9rU2V0dGluZ3MgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEJhY2tlbmRSZXNwb25zZSB9IGZyb20gJy4uL2JhY2tlbmQvdHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUm9rU2VydmljZSBleHRlbmRzIEJhY2tlbmRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjc3JmVG9rZW4gPSAnJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCwgcHVibGljIGRpYWxvZzogU25hY2tCYXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoaHR0cCwgZGlhbG9nKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0Q1NSRigpIHtcbiAgICBpZiAodGhpcy5jc3JmVG9rZW4ubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ1NldHRpbmcgdXAgQ1NSRiBwcm90ZWN0aW9uIGZvciBSb2snKTtcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8Um9rU2V0dGluZ3M+KCcvcm9rL3NlcnZpY2VzL3NldHRpbmdzJylcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIHRydWUpKSxcbiAgICAgICAgbWFwKChzZXR0aW5nczogUm9rU2V0dGluZ3MpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnR290IGJhY2sgUm9rIHNldHRpbmdzOicpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHNldHRpbmdzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgVXNpbmcgdG9rZW46ICR7c2V0dGluZ3Muc3RhdGljX3Rva2VufWApO1xuXG4gICAgICAgICAgaWYgKHNldHRpbmdzLnN0YXRpY190b2tlbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBVc2luZyBudWxsIHRva2VuIGZvciBDU1JGIHByb3RlY3Rpb24hYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jc3JmVG9rZW4gPSBzZXR0aW5ncy5zdGF0aWNfdG9rZW47XG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHVibGljIHJva1Jlc3BJc1ZhbGlkKHJlc3A6IEh0dHBSZXNwb25zZTxhbnk+KSB7XG4gICAgY29uc3Qgcm9rVXJsID0gcmVzcC5oZWFkZXJzLmdldCgnWC1PYmplY3QtUm9rLVVSTCcpO1xuICAgIGNvbnN0IG9iamVjdFVybCA9IHJlc3AuaGVhZGVycy5nZXQoJ1gtT2JqZWN0LVVSTCcpO1xuXG4gICAgaWYgKHJva1VybCA9PT0gbnVsbCB8fCByb2tVcmwgIT09IG9iamVjdFVybCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yRXZlbnQoJ0JhZCBSb2sgVVJMJywge1xuICAgICAgICBtZXNzYWdlOiBgJyR7cmVzcC51cmx9JyBpcyBub3QgYSB2YWxpZCBSb2sgVVJMYCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRPYmplY3RNZXRhZGF0YShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBzaG93U25hY2tCYXIgPSB0cnVlLFxuICApOiBPYnNlcnZhYmxlPEh0dHBIZWFkZXJzPiB7XG4gICAgY29uc29sZS5sb2coYE1ha2luZyBhIEhFQUQgdG8gJyR7dXJsfSB0byBnZXQgT2JqZWN0IE1ldGFkYXRhYCk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuaGVhZDxhbnk+KHVybCwge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICdYLUF1dGgtVG9rZW4nOiB0aGlzLmNzcmZUb2tlbixcbiAgICAgICAgfSksXG4gICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChyZXNwID0+IHRoaXMucm9rUmVzcElzVmFsaWQocmVzcCkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsIHNob3dTbmFja0JhcikpLFxuICAgICAgICBtYXAoKHJlc3A6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coYE1ldGFkYXRhIGZvciBvYmplY3QgaW4gdXJsOiAke3VybH1gKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmhlYWRlcnMpO1xuXG4gICAgICAgICAgcmV0dXJuIHJlc3AuaGVhZGVycztcbiAgICAgICAgfSksXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIGdldFJva01hbmFnZWRTdG9yYWdlQ2xhc3NlcyhcbiAgICBzaG93U25hY2tCYXIgPSB0cnVlLFxuICApOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgLy8gR2V0IGV4aXN0aW5nIFBWQ3MgaW4gYSBuYW1lc3BhY2VcbiAgICBjb25zdCB1cmwgPSBgYXBpL3Jvay9zdG9yYWdlY2xhc3Nlc2A7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxCYWNrZW5kUmVzcG9uc2U+KHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgc2hvd1NuYWNrQmFyKSksXG4gICAgICBtYXAoKGRhdGE6IEJhY2tlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS5zdG9yYWdlQ2xhc3NlcztcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==