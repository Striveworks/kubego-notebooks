import { DashboardState } from '../enums/dashboard';
import * as i0 from "@angular/core";
declare global {
    interface Window {
        centraldashboard: any;
    }
}
export declare class NamespaceService {
    private currNamespace;
    private selectedNamespaceSource;
    private dashboardConnectedSource;
    selectedNamespace$: import("rxjs").Observable<string>;
    dashboardConnected$: import("rxjs").Observable<DashboardState>;
    constructor();
    getSelectedNamespace(): import("rxjs").Observable<string>;
    updateSelectedNamespace(namespace: string): void;
    dashboardConnected(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NamespaceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NamespaceService>;
}
//# sourceMappingURL=namespace.service.d.ts.map