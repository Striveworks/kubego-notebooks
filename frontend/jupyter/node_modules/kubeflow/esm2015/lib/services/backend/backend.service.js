import { Injectable } from '@angular/core';
import { HttpErrorResponse, } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SnackType } from '../../snack-bar/types';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../snack-bar/snack-bar.service";
export class BackendService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.apiUrl = '';
    }
    // GETers
    getUsername() {
        const url = `info`;
        return this.http.get(url).pipe(catchError(error => this.handleError(error, false)), map((data) => data.user));
    }
    getNamespaces(showSnackBar = true, url) {
        return this.http.get(url ? url : 'api/namespaces').pipe(catchError(error => this.handleError(error, showSnackBar)), map((data) => data.namespaces
            ? data.namespaces
            : data));
    }
    getStorageClasses(showSnackBar = true) {
        // Get existing PVCs in a namespace
        const url = `api/storageclasses`;
        return this.http.get(url).pipe(catchError(error => this.handleError(error, showSnackBar)), map((data) => {
            return data.storageClasses;
        }));
    }
    getDefaultStorageClass(showSnackBar = true) {
        const url = `api/storageclasses/default`;
        return this.http.get(url).pipe(catchError(error => this.handleError(error, showSnackBar)), map((data) => {
            return data.defaultStorageClass;
        }));
    }
    // ---------------------------Error Handling---------------------------------
    getBackendErrorLog(error) {
        if (error.error === null) {
            return error.message;
        }
        else {
            // Show the message the backend has sent
            return error.error.log;
        }
    }
    getErrorMessage(error) {
        if (typeof error === 'string') {
            return error;
        }
        if (error instanceof HttpErrorResponse) {
            if (this.getBackendErrorLog(error) !== undefined) {
                return this.getBackendErrorLog(error);
            }
            return `${error.status}: ${error.message}`;
        }
        if (error instanceof ErrorEvent) {
            return error.message;
        }
        return `Unexpected error encountered`;
    }
    getSnackErrorMessage(error) {
        if (typeof error === 'string') {
            return $localize `An error occurred: ${error}`;
        }
        if (error.error instanceof ErrorEvent) {
            return $localize `Client error: ${error.error.message}`;
        }
        if (error instanceof HttpErrorResponse) {
            // In case of status code 0 or negative, Http module couldn't
            // connect to the backend
            if (error.status <= 0) {
                return $localize `Could not connect to the backend.`;
            }
            return `[${error.status}] ${this.getBackendErrorLog(error)}\n${error.url}`;
        }
        if (error instanceof ErrorEvent) {
            return error.message;
        }
        return $localize `Unexpected error encountered`;
    }
    handleError(error, showSnackBar = true) {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(error);
        if (showSnackBar) {
            this.snackBar.open(this.getSnackErrorMessage(error), SnackType.Error);
        }
        return throwError(this.getErrorMessage(error));
    }
}
BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.SnackBarService)); };
BackendService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BackendService, factory: BackendService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BackendService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.SnackBarService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9zZXJ2aWNlcy9iYWNrZW5kL2JhY2tlbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFFTCxpQkFBaUIsR0FFbEIsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBTWxELE1BQU0sT0FBTyxjQUFjO0lBSXpCLFlBQW1CLElBQWdCLEVBQVMsUUFBeUI7UUFBbEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBSHJFLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFHNEQsQ0FBQztJQUV6RSxTQUFTO0lBQ0YsV0FBVztRQUNoQixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFFbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUM3QyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUNuRCxHQUFHLENBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQzFDLENBQUM7SUFDSixDQUFDO0lBRU0sYUFBYSxDQUNsQixZQUFZLEdBQUcsSUFBSSxFQUNuQixHQUFZO1FBRVosT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBa0Is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LE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sU0FBUyxDQUFBLG1DQUFtQyxDQUFDO2FBQ3JEO1lBRUQsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUN4RCxLQUFLLENBQUMsR0FDUixFQUFFLENBQUM7U0FDSjtRQUVELElBQUksS0FBSyxZQUFZLFVBQVUsRUFBRTtZQUMvQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDdEI7UUFFRCxPQUFPLFNBQVMsQ0FBQSw4QkFBOEIsQ0FBQztJQUNqRCxDQUFDO0lBRU0sV0FBVyxDQUNoQixLQUE4QyxFQUM5QyxZQUFZLEdBQUcsSUFBSTtRQUVuQixzREFBc0Q7UUFDdEQsNkRBQTZEO1FBQzdELE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxZQUFZLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2RTtRQUVELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs0RUEvSFUsY0FBYztvRUFBZCxjQUFjLFdBQWQsY0FBYyxtQkFGYixNQUFNO3VGQUVQLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG4gIEh0dHBIZWFkZXJzLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IHRocm93RXJyb3IsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQmFja2VuZFJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTbmFja1R5cGUgfSBmcm9tICcuLi8uLi9zbmFjay1iYXIvdHlwZXMnO1xuaW1wb3J0IHsgU25hY2tCYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc25hY2stYmFyL3NuYWNrLWJhci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcbiAgYXBpVXJsID0gJyc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQsIHB1YmxpYyBzbmFja0JhcjogU25hY2tCYXJTZXJ2aWNlKSB7fVxuXG4gIC8vIEdFVGVyc1xuICBwdWJsaWMgZ2V0VXNlcm5hbWUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCB1cmwgPSBgaW5mb2A7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxCYWNrZW5kUmVzcG9uc2U+KHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgZmFsc2UpKSxcbiAgICAgIG1hcCgoZGF0YTogQmFja2VuZFJlc3BvbnNlKSA9PiBkYXRhLnVzZXIpLFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TmFtZXNwYWNlcyhcbiAgICBzaG93U25hY2tCYXIgPSB0cnVlLFxuICAgIHVybD86IHN0cmluZyxcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEJhY2tlbmRSZXNwb25zZT4odXJsID8gdXJsIDogJ2FwaS9uYW1lc3BhY2VzJykucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgc2hvd1NuYWNrQmFyKSksXG4gICAgICBtYXAoKGRhdGE6IEJhY2tlbmRSZXNwb25zZSB8IHN0cmluZ1tdKSA9PlxuICAgICAgICAoZGF0YSBhcyBCYWNrZW5kUmVzcG9uc2UpLm5hbWVzcGFjZXNcbiAgICAgICAgICA/IChkYXRhIGFzIEJhY2tlbmRSZXNwb25zZSkubmFtZXNwYWNlc1xuICAgICAgICAgIDogKGRhdGEgYXMgc3RyaW5nW10pLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldFN0b3JhZ2VDbGFzc2VzKHNob3dTbmFja0JhciA9IHRydWUpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgLy8gR2V0IGV4aXN0aW5nIFBWQ3MgaW4gYSBuYW1lc3BhY2VcbiAgICBjb25zdCB1cmwgPSBgYXBpL3N0b3JhZ2VjbGFzc2VzYDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEJhY2tlbmRSZXNwb25zZT4odXJsKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCBzaG93U25hY2tCYXIpKSxcbiAgICAgIG1hcCgoZGF0YTogQmFja2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLnN0b3JhZ2VDbGFzc2VzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREZWZhdWx0U3RvcmFnZUNsYXNzKHNob3dTbmFja0JhciA9IHRydWUpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHVybCA9IGBhcGkvc3RvcmFnZWNsYXNzZXMvZGVmYXVsdGA7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxCYWNrZW5kUmVzcG9uc2U+KHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgc2hvd1NuYWNrQmFyKSksXG4gICAgICBtYXAoKGRhdGE6IEJhY2tlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS5kZWZhdWx0U3RvcmFnZUNsYXNzO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUVycm9yIEhhbmRsaW5nLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHB1YmxpYyBnZXRCYWNrZW5kRXJyb3JMb2coZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKTogc3RyaW5nIHtcbiAgICBpZiAoZXJyb3IuZXJyb3IgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaG93IHRoZSBtZXNzYWdlIHRoZSBiYWNrZW5kIGhhcyBzZW50XG4gICAgICByZXR1cm4gZXJyb3IuZXJyb3IubG9nO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRFcnJvck1lc3NhZ2UoXG4gICAgZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlIHwgRXJyb3JFdmVudCB8IHN0cmluZyxcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICBpZiAodGhpcy5nZXRCYWNrZW5kRXJyb3JMb2coZXJyb3IpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QmFja2VuZEVycm9yTG9nKGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGAke2Vycm9yLnN0YXR1c306ICR7ZXJyb3IubWVzc2FnZX1gO1xuICAgIH1cblxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcbiAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiBgVW5leHBlY3RlZCBlcnJvciBlbmNvdW50ZXJlZGA7XG4gIH1cblxuICBwdWJsaWMgZ2V0U25hY2tFcnJvck1lc3NhZ2UoXG4gICAgZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlIHwgRXJyb3JFdmVudCB8IHN0cmluZyxcbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuICRsb2NhbGl6ZWBBbiBlcnJvciBvY2N1cnJlZDogJHtlcnJvcn1gO1xuICAgIH1cblxuICAgIGlmIChlcnJvci5lcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcbiAgICAgIHJldHVybiAkbG9jYWxpemVgQ2xpZW50IGVycm9yOiAke2Vycm9yLmVycm9yLm1lc3NhZ2V9YDtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgLy8gSW4gY2FzZSBvZiBzdGF0dXMgY29kZSAwIG9yIG5lZ2F0aXZlLCBIdHRwIG1vZHVsZSBjb3VsZG4ndFxuICAgICAgLy8gY29ubmVjdCB0byB0aGUgYmFja2VuZFxuICAgICAgaWYgKGVycm9yLnN0YXR1cyA8PSAwKSB7XG4gICAgICAgIHJldHVybiAkbG9jYWxpemVgQ291bGQgbm90IGNvbm5lY3QgdG8gdGhlIGJhY2tlbmQuYDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGBbJHtlcnJvci5zdGF0dXN9XSAke3RoaXMuZ2V0QmFja2VuZEVycm9yTG9nKGVycm9yKX1cXG4ke1xuICAgICAgICBlcnJvci51cmxcbiAgICAgIH1gO1xuICAgIH1cblxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yRXZlbnQpIHtcbiAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgIH1cblxuICAgIHJldHVybiAkbG9jYWxpemVgVW5leHBlY3RlZCBlcnJvciBlbmNvdW50ZXJlZGA7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlRXJyb3IoXG4gICAgZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlIHwgRXJyb3JFdmVudCB8IHN0cmluZyxcbiAgICBzaG93U25hY2tCYXIgPSB0cnVlLFxuICApIHtcbiAgICAvLyBUaGUgYmFja2VuZCByZXR1cm5lZCBhbiB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2UgY29kZS5cbiAgICAvLyBUaGUgcmVzcG9uc2UgYm9keSBtYXkgY29udGFpbiBjbHVlcyBhcyB0byB3aGF0IHdlbnQgd3JvbmcsXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgaWYgKHNob3dTbmFja0Jhcikge1xuICAgICAgdGhpcy5zbmFja0Jhci5vcGVuKHRoaXMuZ2V0U25hY2tFcnJvck1lc3NhZ2UoZXJyb3IpLCBTbmFja1R5cGUuRXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiB0aHJvd0Vycm9yKHRoaXMuZ2V0RXJyb3JNZXNzYWdlKGVycm9yKSk7XG4gIH1cbn1cbiJdfQ==