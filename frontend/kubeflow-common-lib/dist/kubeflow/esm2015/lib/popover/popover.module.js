/* This code was developed by @tasos-ale */
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCardModule } from '@angular/material/card';
import { PopoverDirective } from './popover.directive';
import { PopoverComponent } from './popover.component';
import * as i0 from "@angular/core";
export class PopoverModule {
}
PopoverModule.ɵfac = function PopoverModule_Factory(t) { return new (t || PopoverModule)(); };
PopoverModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PopoverModule });
PopoverModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[PortalModule, OverlayModule, MatCardModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverModule, [{
        type: NgModule,
        args: [{
                imports: [PortalModule, OverlayModule, MatCardModule],
                exports: [PopoverDirective],
                declarations: [PopoverDirective, PopoverComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PopoverModule, { declarations: [PopoverDirective, PopoverComponent], imports: [PortalModule, OverlayModule, MatCardModule], exports: [PopoverDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3BvcG92ZXIvcG9wb3Zlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBT3ZELE1BQU0sT0FBTyxhQUFhOzswRUFBYixhQUFhOytEQUFiLGFBQWE7bUVBSmYsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQzt1RkFJMUMsYUFBYTtjQUx6QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7Z0JBQ3JELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQzthQUNuRDs7d0ZBQ1ksYUFBYSxtQkFGVCxnQkFBZ0IsRUFBRSxnQkFBZ0IsYUFGdkMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLGFBQzFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoaXMgY29kZSB3YXMgZGV2ZWxvcGVkIGJ5IEB0YXNvcy1hbGUgKi9cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcblxuaW1wb3J0IHsgUG9wb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vcG9wb3Zlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUG9ydGFsTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBNYXRDYXJkTW9kdWxlXSxcbiAgZXhwb3J0czogW1BvcG92ZXJEaXJlY3RpdmVdLFxuICBkZWNsYXJhdGlvbnM6IFtQb3BvdmVyRGlyZWN0aXZlLCBQb3BvdmVyQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3Zlck1vZHVsZSB7fVxuIl19