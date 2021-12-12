/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, TemplateRef } from '@angular/core';
/**
 * Directive applied to an ng-template which wraps a CdkMenu and provides a reference to the
 * child element it wraps which allows for opening of the CdkMenu in an overlay.
 */
export class CdkMenuPanel {
    constructor(_templateRef) {
        this._templateRef = _templateRef;
    }
    /**
     * Set the Menu component on the menu panel. Since we cannot use ContentChild to fetch the
     * child Menu component, the child Menu must register its self with the parent MenuPanel.
     */
    _registerMenu(child) {
        var _a;
        this._menu = child;
        // The ideal solution would be to affect the CdkMenuPanel injector from the CdkMenuTrigger and
        // inject the menu stack reference into the child menu and menu items, however this isn't
        // possible at this time.
        this._menu._menuStack = this._menuStack;
        (_a = this._menuStack) === null || _a === void 0 ? void 0 : _a.push(child);
    }
}
CdkMenuPanel.decorators = [
    { type: Directive, args: [{ selector: 'ng-template[cdkMenuPanel]', exportAs: 'cdkMenuPanel' },] }
];
CdkMenuPanel.ctorParameters = () => [
    { type: TemplateRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL21lbnUvbWVudS1wYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUlyRDs7O0dBR0c7QUFFSCxNQUFNLE9BQU8sWUFBWTtJQU92QixZQUFxQixZQUFrQztRQUFsQyxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7SUFBRyxDQUFDO0lBRTNEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxLQUFXOztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQiw4RkFBOEY7UUFDOUYseUZBQXlGO1FBQ3pGLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3hDLE1BQUEsSUFBSSxDQUFDLFVBQVUsMENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQXRCRixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQzs7O1lBUnpELFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3RpdmUsIFRlbXBsYXRlUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVudX0gZnJvbSAnLi9tZW51LWludGVyZmFjZSc7XG5pbXBvcnQge01lbnVTdGFja30gZnJvbSAnLi9tZW51LXN0YWNrJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgYXBwbGllZCB0byBhbiBuZy10ZW1wbGF0ZSB3aGljaCB3cmFwcyBhIENka01lbnUgYW5kIHByb3ZpZGVzIGEgcmVmZXJlbmNlIHRvIHRoZVxuICogY2hpbGQgZWxlbWVudCBpdCB3cmFwcyB3aGljaCBhbGxvd3MgZm9yIG9wZW5pbmcgb2YgdGhlIENka01lbnUgaW4gYW4gb3ZlcmxheS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVtjZGtNZW51UGFuZWxdJywgZXhwb3J0QXM6ICdjZGtNZW51UGFuZWwnfSlcbmV4cG9ydCBjbGFzcyBDZGtNZW51UGFuZWwge1xuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBjaGlsZCBtZW51IGNvbXBvbmVudCAqL1xuICBfbWVudT86IE1lbnU7XG5cbiAgLyoqIEtlZXAgdHJhY2sgb2Ygb3BlbiBNZW51cy4gKi9cbiAgX21lbnVTdGFjazogTWVudVN0YWNrIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHVua25vd24+KSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIE1lbnUgY29tcG9uZW50IG9uIHRoZSBtZW51IHBhbmVsLiBTaW5jZSB3ZSBjYW5ub3QgdXNlIENvbnRlbnRDaGlsZCB0byBmZXRjaCB0aGVcbiAgICogY2hpbGQgTWVudSBjb21wb25lbnQsIHRoZSBjaGlsZCBNZW51IG11c3QgcmVnaXN0ZXIgaXRzIHNlbGYgd2l0aCB0aGUgcGFyZW50IE1lbnVQYW5lbC5cbiAgICovXG4gIF9yZWdpc3Rlck1lbnUoY2hpbGQ6IE1lbnUpIHtcbiAgICB0aGlzLl9tZW51ID0gY2hpbGQ7XG5cbiAgICAvLyBUaGUgaWRlYWwgc29sdXRpb24gd291bGQgYmUgdG8gYWZmZWN0IHRoZSBDZGtNZW51UGFuZWwgaW5qZWN0b3IgZnJvbSB0aGUgQ2RrTWVudVRyaWdnZXIgYW5kXG4gICAgLy8gaW5qZWN0IHRoZSBtZW51IHN0YWNrIHJlZmVyZW5jZSBpbnRvIHRoZSBjaGlsZCBtZW51IGFuZCBtZW51IGl0ZW1zLCBob3dldmVyIHRoaXMgaXNuJ3RcbiAgICAvLyBwb3NzaWJsZSBhdCB0aGlzIHRpbWUuXG4gICAgdGhpcy5fbWVudS5fbWVudVN0YWNrID0gdGhpcy5fbWVudVN0YWNrO1xuICAgIHRoaXMuX21lbnVTdGFjaz8ucHVzaChjaGlsZCk7XG4gIH1cbn1cbiJdfQ==