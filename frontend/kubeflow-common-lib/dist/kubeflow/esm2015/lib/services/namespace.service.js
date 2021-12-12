import { Injectable } from '@angular/core';
import { ReplaySubject, fromEvent, BehaviorSubject } from 'rxjs';
import { DashboardState } from '../enums/dashboard';
import * as i0 from "@angular/core";
export class NamespaceService {
    constructor() {
        // Observable string sources
        this.selectedNamespaceSource = new ReplaySubject(1);
        this.dashboardConnectedSource = new BehaviorSubject(DashboardState.Connecting);
        // Observable string streams
        this.selectedNamespace$ = this.selectedNamespaceSource.asObservable();
        this.dashboardConnected$ = this.dashboardConnectedSource.asObservable();
        fromEvent(window, 'load').subscribe(_ => {
            if (window.centraldashboard &&
                window.centraldashboard.CentralDashboardEventHandler) {
                // Init method will invoke the callback with the event handler instance
                // and a boolean indicating whether the page is iframed or not
                window.centraldashboard.CentralDashboardEventHandler.init((cdeh, isIframed) => {
                    // Binds a callback that gets invoked anytime the Dashboard's
                    // namespace is changed
                    cdeh.onNamespaceSelected = this.updateSelectedNamespace.bind(this);
                });
                this.dashboardConnectedSource.next(DashboardState.Connected);
                return;
            }
            this.dashboardConnectedSource.next(DashboardState.Disconnected);
            if (this.currNamespace === undefined) {
                this.updateSelectedNamespace('kubeflow-user');
            }
        });
    }
    // GETers
    getSelectedNamespace() {
        return this.selectedNamespace$;
    }
    // Service message commands
    updateSelectedNamespace(namespace) {
        if (namespace.length !== 0) {
            this.currNamespace = namespace;
            this.selectedNamespaceSource.next(namespace);
        }
    }
    dashboardConnected() {
        return (window.parent.location.pathname !== window.location.pathname &&
            window.centraldashboard);
    }
}
NamespaceService.ɵfac = function NamespaceService_Factory(t) { return new (t || NamespaceService)(); };
NamespaceService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NamespaceService, factory: NamespaceService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NamespaceService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3NlcnZpY2VzL25hbWVzcGFjZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBZ0IsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBV3BELE1BQU0sT0FBTyxnQkFBZ0I7SUFhM0I7UUFWQSw0QkFBNEI7UUFDcEIsNEJBQXVCLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsNkJBQXdCLEdBQUcsSUFBSSxlQUFlLENBQ3BELGNBQWMsQ0FBQyxVQUFVLENBQzFCLENBQUM7UUFFRiw0QkFBNEI7UUFDNUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ2pFLHdCQUFtQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUdqRSxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN0QyxJQUNFLE1BQU0sQ0FBQyxnQkFBZ0I7Z0JBQ3ZCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsRUFDcEQ7Z0JBQ0EsdUVBQXVFO2dCQUN2RSw4REFBOEQ7Z0JBQzlELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQ3ZELENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFO29CQUNsQiw2REFBNkQ7b0JBQzdELHVCQUF1QjtvQkFDdkIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JFLENBQUMsQ0FDRixDQUFDO2dCQUVGLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM3RCxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVoRSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTO0lBQ1Qsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRCwyQkFBMkI7SUFDM0IsdUJBQXVCLENBQUMsU0FBaUI7UUFDdkMsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLENBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUTtZQUM1RCxNQUFNLENBQUMsZ0JBQWdCLENBQ3hCLENBQUM7SUFDSixDQUFDOztnRkEzRFUsZ0JBQWdCO3NFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07dUZBRVAsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlcGxheVN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50LCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERhc2hib2FyZFN0YXRlIH0gZnJvbSAnLi4vZW51bXMvZGFzaGJvYXJkJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBjZW50cmFsZGFzaGJvYXJkOiBhbnk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVzcGFjZVNlcnZpY2Uge1xuICBwcml2YXRlIGN1cnJOYW1lc3BhY2U6IHN0cmluZztcblxuICAvLyBPYnNlcnZhYmxlIHN0cmluZyBzb3VyY2VzXG4gIHByaXZhdGUgc2VsZWN0ZWROYW1lc3BhY2VTb3VyY2UgPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KDEpO1xuICBwcml2YXRlIGRhc2hib2FyZENvbm5lY3RlZFNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGFzaGJvYXJkU3RhdGU+KFxuICAgIERhc2hib2FyZFN0YXRlLkNvbm5lY3RpbmcsXG4gICk7XG5cbiAgLy8gT2JzZXJ2YWJsZSBzdHJpbmcgc3RyZWFtc1xuICBzZWxlY3RlZE5hbWVzcGFjZSQgPSB0aGlzLnNlbGVjdGVkTmFtZXNwYWNlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICBkYXNoYm9hcmRDb25uZWN0ZWQkID0gdGhpcy5kYXNoYm9hcmRDb25uZWN0ZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZnJvbUV2ZW50KHdpbmRvdywgJ2xvYWQnKS5zdWJzY3JpYmUoXyA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHdpbmRvdy5jZW50cmFsZGFzaGJvYXJkICYmXG4gICAgICAgIHdpbmRvdy5jZW50cmFsZGFzaGJvYXJkLkNlbnRyYWxEYXNoYm9hcmRFdmVudEhhbmRsZXJcbiAgICAgICkge1xuICAgICAgICAvLyBJbml0IG1ldGhvZCB3aWxsIGludm9rZSB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgZXZlbnQgaGFuZGxlciBpbnN0YW5jZVxuICAgICAgICAvLyBhbmQgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgcGFnZSBpcyBpZnJhbWVkIG9yIG5vdFxuICAgICAgICB3aW5kb3cuY2VudHJhbGRhc2hib2FyZC5DZW50cmFsRGFzaGJvYXJkRXZlbnRIYW5kbGVyLmluaXQoXG4gICAgICAgICAgKGNkZWgsIGlzSWZyYW1lZCkgPT4ge1xuICAgICAgICAgICAgLy8gQmluZHMgYSBjYWxsYmFjayB0aGF0IGdldHMgaW52b2tlZCBhbnl0aW1lIHRoZSBEYXNoYm9hcmQnc1xuICAgICAgICAgICAgLy8gbmFtZXNwYWNlIGlzIGNoYW5nZWRcbiAgICAgICAgICAgIGNkZWgub25OYW1lc3BhY2VTZWxlY3RlZCA9IHRoaXMudXBkYXRlU2VsZWN0ZWROYW1lc3BhY2UuYmluZCh0aGlzKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkQ29ubmVjdGVkU291cmNlLm5leHQoRGFzaGJvYXJkU3RhdGUuQ29ubmVjdGVkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhc2hib2FyZENvbm5lY3RlZFNvdXJjZS5uZXh0KERhc2hib2FyZFN0YXRlLkRpc2Nvbm5lY3RlZCk7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJOYW1lc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTmFtZXNwYWNlKCdrdWJlZmxvdy11c2VyJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBHRVRlcnNcbiAgZ2V0U2VsZWN0ZWROYW1lc3BhY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWROYW1lc3BhY2UkO1xuICB9XG5cbiAgLy8gU2VydmljZSBtZXNzYWdlIGNvbW1hbmRzXG4gIHVwZGF0ZVNlbGVjdGVkTmFtZXNwYWNlKG5hbWVzcGFjZTogc3RyaW5nKSB7XG4gICAgaWYgKG5hbWVzcGFjZS5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMuY3Vyck5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROYW1lc3BhY2VTb3VyY2UubmV4dChuYW1lc3BhY2UpO1xuICAgIH1cbiAgfVxuXG4gIGRhc2hib2FyZENvbm5lY3RlZCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgd2luZG93LnBhcmVudC5sb2NhdGlvbi5wYXRobmFtZSAhPT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICYmXG4gICAgICB3aW5kb3cuY2VudHJhbGRhc2hib2FyZFxuICAgICk7XG4gIH1cbn1cbiJdfQ==