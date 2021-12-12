/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from '@angular/core';
import { ComponentType, Overlay, ScrollStrategy } from '@angular/cdk/overlay';
import { DialogRef } from './dialog-ref';
import { CdkDialogContainer } from './dialog-container';
import { DialogConfig } from './dialog-config';
/** Injection token for the Dialog's ScrollStrategy. */
export declare const DIALOG_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
/** Injection token for the Dialog's Data. */
export declare const DIALOG_DATA: InjectionToken<any>;
/** Injection token for the DialogRef constructor. */
export declare const DIALOG_REF: InjectionToken<DialogRef<any, any>>;
/** Injection token for the DialogConfig. */
export declare const DIALOG_CONFIG: InjectionToken<DialogConfig<any>>;
/** Injection token for the Dialog's DialogContainer component. */
export declare const DIALOG_CONTAINER: InjectionToken<ComponentType<CdkDialogContainer>>;
/** @docs-private */
export declare function MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => ScrollStrategy;
/** @docs-private */
export declare const MAT_DIALOG_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY;
};
