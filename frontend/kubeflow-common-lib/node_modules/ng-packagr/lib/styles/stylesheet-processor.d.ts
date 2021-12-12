export declare enum CssUrl {
    inline = "inline",
    none = "none"
}
export interface WorkerOptions {
    filePath: string;
    basePath: string;
    browserslistData: string[];
    cssUrl?: CssUrl;
    styleIncludePaths?: string[];
    cachePath: string;
}
export interface WorkerResult {
    css: string;
    warnings: string[];
    error?: string;
}
export declare class StylesheetProcessor {
    private readonly basePath;
    private readonly cssUrl?;
    private readonly styleIncludePaths?;
    private browserslistData;
    private worker;
    private readonly cachePath;
    constructor(basePath: string, cssUrl?: CssUrl, styleIncludePaths?: string[]);
    process(filePath: string): any;
}
