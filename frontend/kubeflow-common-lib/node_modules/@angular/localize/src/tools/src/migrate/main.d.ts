#!/usr/bin/env node
/// <amd-module name="@angular/localize/src/tools/src/migrate/main" />
import { Logger } from '@angular/compiler-cli/src/ngtsc/logging';
export interface MigrateFilesOptions {
    /**
     * The base path for other paths provided in these options.
     * This should either be absolute or relative to the current working directory.
     */
    rootPath: string;
    /** Paths to the files that should be migrated. Should be relative to the `rootPath`. */
    translationFilePaths: string[];
    /** Path to the file containing the message ID mappings. Should be relative to the `rootPath`. */
    mappingFilePath: string;
    /** Logger to use for diagnostic messages. */
    logger: Logger;
}
/** Migrates the legacy message IDs based on the passed in configuration. */
export declare function migrateFiles({ rootPath, translationFilePaths, mappingFilePath, logger, }: MigrateFilesOptions): void;
