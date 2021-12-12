/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import { Dialog } from './dialog';
import { CdkDialogContainer } from './dialog-container';
import { DialogConfig } from './dialog-config';
import { DialogRef } from './dialog-ref';
import { DIALOG_CONFIG, DIALOG_CONTAINER, DIALOG_REF, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER } from './dialog-injectors';
const ɵ0 = DialogRef, ɵ1 = CdkDialogContainer, ɵ2 = DialogConfig;
export class DialogModule {
}
DialogModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    OverlayModule,
                    PortalModule,
                    A11yModule,
                ],
                exports: [
                    // Re-export the PortalModule so that people extending the `CdkDialogContainer`
                    // don't have to remember to import it or be faced with an unhelpful error.
                    PortalModule,
                    CdkDialogContainer,
                ],
                declarations: [
                    CdkDialogContainer,
                ],
                providers: [
                    Dialog,
                    MAT_DIALOG_SCROLL_STRATEGY_PROVIDER,
                    { provide: DIALOG_REF, useValue: ɵ0 },
                    { provide: DIALOG_CONTAINER, useValue: ɵ1 },
                    { provide: DIALOG_CONFIG, useValue: ɵ2 },
                ],
                entryComponents: [CdkDialogContainer],
            },] }
];
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL2RpYWxvZy9kaWFsb2ctbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsbUNBQW1DLEVBQ3BDLE1BQU0sb0JBQW9CLENBQUM7V0FxQlEsU0FBUyxPQUNILGtCQUFrQixPQUNyQixZQUFZO0FBSW5ELE1BQU0sT0FBTyxZQUFZOzs7WUF4QnhCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixZQUFZO29CQUNaLFVBQVU7aUJBQ1g7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLCtFQUErRTtvQkFDL0UsMkVBQTJFO29CQUMzRSxZQUFZO29CQUNaLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULE1BQU07b0JBQ04sbUNBQW1DO29CQUNuQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxJQUFXLEVBQUM7b0JBQzFDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsSUFBb0IsRUFBQztvQkFDekQsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsSUFBYyxFQUFDO2lCQUNqRDtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3ZlcmxheU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtQb3J0YWxNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtBMTF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0RpYWxvZ30gZnJvbSAnLi9kaWFsb2cnO1xuaW1wb3J0IHtDZGtEaWFsb2dDb250YWluZXJ9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lcic7XG5pbXBvcnQge0RpYWxvZ0NvbmZpZ30gZnJvbSAnLi9kaWFsb2ctY29uZmlnJztcbmltcG9ydCB7RGlhbG9nUmVmfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuaW1wb3J0IHtcbiAgRElBTE9HX0NPTkZJRyxcbiAgRElBTE9HX0NPTlRBSU5FUixcbiAgRElBTE9HX1JFRixcbiAgTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfUFJPVklERVJcbn0gZnJvbSAnLi9kaWFsb2ctaW5qZWN0b3JzJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgICBQb3J0YWxNb2R1bGUsXG4gICAgQTExeU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC8vIFJlLWV4cG9ydCB0aGUgUG9ydGFsTW9kdWxlIHNvIHRoYXQgcGVvcGxlIGV4dGVuZGluZyB0aGUgYENka0RpYWxvZ0NvbnRhaW5lcmBcbiAgICAvLyBkb24ndCBoYXZlIHRvIHJlbWVtYmVyIHRvIGltcG9ydCBpdCBvciBiZSBmYWNlZCB3aXRoIGFuIHVuaGVscGZ1bCBlcnJvci5cbiAgICBQb3J0YWxNb2R1bGUsXG4gICAgQ2RrRGlhbG9nQ29udGFpbmVyLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDZGtEaWFsb2dDb250YWluZXIsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIERpYWxvZyxcbiAgICBNQVRfRElBTE9HX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUixcbiAgICB7cHJvdmlkZTogRElBTE9HX1JFRiwgdXNlVmFsdWU6IERpYWxvZ1JlZn0sXG4gICAge3Byb3ZpZGU6IERJQUxPR19DT05UQUlORVIsIHVzZVZhbHVlOiBDZGtEaWFsb2dDb250YWluZXJ9LFxuICAgIHtwcm92aWRlOiBESUFMT0dfQ09ORklHLCB1c2VWYWx1ZTogRGlhbG9nQ29uZmlnfSxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbQ2RrRGlhbG9nQ29udGFpbmVyXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nTW9kdWxlIHt9XG4iXX0=