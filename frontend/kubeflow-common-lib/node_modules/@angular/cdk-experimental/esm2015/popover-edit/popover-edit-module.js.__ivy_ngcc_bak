/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkPopoverEdit, CdkPopoverEditTabOut, CdkRowHoverContent, CdkEditable, CdkEditOpen } from './table-directives';
import { CdkEditControl, CdkEditRevert, CdkEditClose } from './lens-directives';
import { DefaultPopoverEditPositionStrategyFactory, PopoverEditPositionStrategyFactory } from './popover-edit-position-strategy-factory';
const EXPORTED_DECLARATIONS = [
    CdkPopoverEdit,
    CdkPopoverEditTabOut,
    CdkRowHoverContent,
    CdkEditControl,
    CdkEditRevert,
    CdkEditClose,
    CdkEditable,
    CdkEditOpen,
];
export class CdkPopoverEditModule {
}
CdkPopoverEditModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    OverlayModule,
                ],
                exports: EXPORTED_DECLARATIONS,
                declarations: EXPORTED_DECLARATIONS,
                providers: [{
                        provide: PopoverEditPositionStrategyFactory,
                        useClass: DefaultPopoverEditPositionStrategyFactory
                    }],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9wb3BvdmVyLWVkaXQtbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsV0FBVyxFQUNaLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFDLGNBQWMsRUFDcEIsYUFBYSxFQUNiLFlBQVksRUFDYixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFDTCx5Q0FBeUMsRUFDekMsa0NBQWtDLEVBQ25DLE1BQU0sMENBQTBDLENBQUM7QUFFbEQsTUFBTSxxQkFBcUIsR0FBRztJQUM1QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztDQUNaLENBQUM7QUFhRixNQUFNLE9BQU8sb0JBQW9COzs7WUFYaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxhQUFhO2lCQUNkO2dCQUNELE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLFlBQVksRUFBRSxxQkFBcUI7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxrQ0FBa0M7d0JBQzNDLFFBQVEsRUFBRSx5Q0FBeUM7cUJBQ3BELENBQUM7YUFDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T3ZlcmxheU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQ2RrUG9wb3ZlckVkaXQsXG4gIENka1BvcG92ZXJFZGl0VGFiT3V0LFxuICBDZGtSb3dIb3ZlckNvbnRlbnQsXG4gIENka0VkaXRhYmxlLFxuICBDZGtFZGl0T3BlblxufSBmcm9tICcuL3RhYmxlLWRpcmVjdGl2ZXMnO1xuaW1wb3J0IHtDZGtFZGl0Q29udHJvbCxcbiAgQ2RrRWRpdFJldmVydCxcbiAgQ2RrRWRpdENsb3NlXG59IGZyb20gJy4vbGVucy1kaXJlY3RpdmVzJztcbmltcG9ydCB7XG4gIERlZmF1bHRQb3BvdmVyRWRpdFBvc2l0aW9uU3RyYXRlZ3lGYWN0b3J5LFxuICBQb3BvdmVyRWRpdFBvc2l0aW9uU3RyYXRlZ3lGYWN0b3J5XG59IGZyb20gJy4vcG9wb3Zlci1lZGl0LXBvc2l0aW9uLXN0cmF0ZWd5LWZhY3RvcnknO1xuXG5jb25zdCBFWFBPUlRFRF9ERUNMQVJBVElPTlMgPSBbXG4gIENka1BvcG92ZXJFZGl0LFxuICBDZGtQb3BvdmVyRWRpdFRhYk91dCxcbiAgQ2RrUm93SG92ZXJDb250ZW50LFxuICBDZGtFZGl0Q29udHJvbCxcbiAgQ2RrRWRpdFJldmVydCxcbiAgQ2RrRWRpdENsb3NlLFxuICBDZGtFZGl0YWJsZSxcbiAgQ2RrRWRpdE9wZW4sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgT3ZlcmxheU1vZHVsZSxcbiAgXSxcbiAgZXhwb3J0czogRVhQT1JURURfREVDTEFSQVRJT05TLFxuICBkZWNsYXJhdGlvbnM6IEVYUE9SVEVEX0RFQ0xBUkFUSU9OUyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFBvcG92ZXJFZGl0UG9zaXRpb25TdHJhdGVneUZhY3RvcnksXG4gICAgdXNlQ2xhc3M6IERlZmF1bHRQb3BvdmVyRWRpdFBvc2l0aW9uU3RyYXRlZ3lGYWN0b3J5XG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3BvdmVyRWRpdE1vZHVsZSB7IH1cbiJdfQ==