import { OnDestroy, OnInit } from '@angular/core';
import { NamespaceService } from '../services/namespace.service';
import { BackendService } from '../services/backend/backend.service';
import * as i0 from "@angular/core";
export declare class NamespaceSelectComponent implements OnInit, OnDestroy {
    private namespaceService;
    private backend;
    namespacesUrl: string;
    namespaces: any[];
    currNamespace: string;
    private poller;
    private subscriptions;
    constructor(namespaceService: NamespaceService, backend: BackendService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    namespaceChanged(namespace: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NamespaceSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NamespaceSelectComponent, "lib-namespace-select", never, { "namespacesUrl": "namespacesUrl"; }, {}, never, never>;
}
//# sourceMappingURL=namespace-select.component.d.ts.map