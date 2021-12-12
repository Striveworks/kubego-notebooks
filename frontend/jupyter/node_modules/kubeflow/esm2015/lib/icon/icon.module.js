import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule, } from '@fortawesome/angular-fontawesome';
import { faCogs, faHdd, faBook, faMicrochip, faLaptopCode, faLink, faSlidersH, faBullseye, faStopCircle, } from '@fortawesome/free-solid-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import * as i0 from "@angular/core";
import * as i1 from "@fortawesome/angular-fontawesome";
export class IconModule {
    constructor(library) {
        library.addIcons(faCogs, faHdd, faBook, faMicrochip, faLaptopCode, faDocker, faLink, faSlidersH, faBullseye, faStopCircle);
    }
}
IconModule.ɵfac = function IconModule_Factory(t) { return new (t || IconModule)(i0.ɵɵinject(i1.FaIconLibrary)); };
IconModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: IconModule });
IconModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, MatIconModule, FontAwesomeModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IconModule, [{
        type: NgModule,
        args: [{
                declarations: [IconComponent],
                imports: [CommonModule, MatIconModule, FontAwesomeModule],
                exports: [IconComponent],
            }]
    }], function () { return [{ type: i1.FaIconLibrary }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(IconModule, { declarations: [IconComponent], imports: [CommonModule, MatIconModule, FontAwesomeModule], exports: [IconComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL2ljb24vaWNvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RCxPQUFPLEVBQ0wsaUJBQWlCLEdBRWxCLE1BQU0sa0NBQWtDLENBQUM7QUFDMUMsT0FBTyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxZQUFZLEVBQ1osTUFBTSxFQUNOLFVBQVUsRUFDVixVQUFVLEVBQ1YsWUFBWSxHQUNiLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7QUFPOUQsTUFBTSxPQUFPLFVBQVU7SUFDckIsWUFBWSxPQUFzQjtRQUNoQyxPQUFPLENBQUMsUUFBUSxDQUNkLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxZQUFZLEVBQ1osUUFBUSxFQUNSLE1BQU0sRUFDTixVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksQ0FDYixDQUFDO0lBQ0osQ0FBQzs7b0VBZFUsVUFBVTs0REFBVixVQUFVO2dFQUhaLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQzt1RkFHOUMsVUFBVTtjQUx0QixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixDQUFDO2dCQUN6RCxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDekI7O3dGQUNZLFVBQVUsbUJBSk4sYUFBYSxhQUNsQixZQUFZLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixhQUM5QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9pY29uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcblxuaW1wb3J0IHtcbiAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gIEZhSWNvbkxpYnJhcnksXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7XG4gIGZhQ29ncyxcbiAgZmFIZGQsXG4gIGZhQm9vayxcbiAgZmFNaWNyb2NoaXAsXG4gIGZhTGFwdG9wQ29kZSxcbiAgZmFMaW5rLFxuICBmYVNsaWRlcnNILFxuICBmYUJ1bGxzZXllLFxuICBmYVN0b3BDaXJjbGUsXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYURvY2tlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtJY29uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgRm9udEF3ZXNvbWVNb2R1bGVdLFxuICBleHBvcnRzOiBbSWNvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEljb25Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihsaWJyYXJ5OiBGYUljb25MaWJyYXJ5KSB7XG4gICAgbGlicmFyeS5hZGRJY29ucyhcbiAgICAgIGZhQ29ncyxcbiAgICAgIGZhSGRkLFxuICAgICAgZmFCb29rLFxuICAgICAgZmFNaWNyb2NoaXAsXG4gICAgICBmYUxhcHRvcENvZGUsXG4gICAgICBmYURvY2tlcixcbiAgICAgIGZhTGluayxcbiAgICAgIGZhU2xpZGVyc0gsXG4gICAgICBmYUJ1bGxzZXllLFxuICAgICAgZmFTdG9wQ2lyY2xlLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==