import * as ts from 'typescript';
import { NgccProcessingCache } from '../ng-package/ngcc-cache';
import { EntryPointNode } from '../ng-package/nodes';
export declare class NgccProcessor {
    private readonly ngccProcessingCache;
    private readonly projectPath;
    private readonly compilerOptions;
    private readonly entryPoints;
    private _logger;
    private _nodeModulesDirectory;
    private _entryPointsUrl;
    private readonly propertiesToConsider;
    private skipProcessing;
    constructor(ngccProcessingCache: NgccProcessingCache, projectPath: string, compilerOptions: ts.CompilerOptions, entryPoints: EntryPointNode[]);
    /** Process the entire node modules tree. */
    process(): Promise<void>;
    /** Process a module and it's depedencies. */
    processModule(moduleName: string, resolvedModule: ts.ResolvedModule | ts.ResolvedTypeReferenceDirective): void;
    /**
     * Try resolve a package.json file from the resolved .d.ts file.
     */
    private tryResolvePackage;
    private findNodeModulesDirectory;
}
