/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TemplateRef } from '@angular/core';
import { Menu } from './menu-interface';
import { MenuStack } from './menu-stack';
/**
 * Directive applied to an ng-template which wraps a CdkMenu and provides a reference to the
 * child element it wraps which allows for opening of the CdkMenu in an overlay.
 */
export declare class CdkMenuPanel {
    readonly _templateRef: TemplateRef<unknown>;
    /** Reference to the child menu component */
    _menu?: Menu;
    /** Keep track of open Menus. */
    _menuStack: MenuStack | null;
    constructor(_templateRef: TemplateRef<unknown>);
    /**
     * Set the Menu component on the menu panel. Since we cannot use ContentChild to fetch the
     * child Menu component, the child Menu must register its self with the parent MenuPanel.
     */
    _registerMenu(child: Menu): void;
}
