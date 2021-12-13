/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export declare type AriaHasPopupValue = 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
import { TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
export declare class CdkComboboxPanel<T = unknown> {
    readonly _templateRef: TemplateRef<unknown>;
    valueUpdated: Subject<T | T[]>;
    contentIdUpdated: Subject<string>;
    contentTypeUpdated: Subject<AriaHasPopupValue>;
    contentId: string;
    contentType: AriaHasPopupValue;
    constructor(_templateRef: TemplateRef<unknown>);
    /** Tells the parent combobox to close the panel and sends back the content value. */
    closePanel(data?: T | T[]): void;
    focusContent(): void;
    /** Registers the content's id and the content type with the panel. */
    _registerContent(contentId: string, contentType: AriaHasPopupValue): void;
}
