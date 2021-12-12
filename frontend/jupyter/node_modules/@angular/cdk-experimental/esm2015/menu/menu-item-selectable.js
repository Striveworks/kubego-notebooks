/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Input, Directive, Output, EventEmitter } from '@angular/core';
import { CdkMenuItem } from './menu-item';
/** Counter used to set a unique id and name for a selectable item */
let nextId = 0;
/**
 * Base class providing checked state for MenuItems along with outputting a clicked event when the
 * element is triggered. It provides functionality for selectable elements.
 */
export class CdkMenuItemSelectable extends CdkMenuItem {
    constructor() {
        super(...arguments);
        /** Event emitted when the selectable item is clicked */
        this.toggled = new EventEmitter();
        this._checked = false;
        /** The name of the selectable element with a default value */
        this.name = `cdk-selectable-item-${nextId++}`;
        /** The id of the selectable element with a default value */
        this.id = `cdk-selectable-item-${nextId++}`;
    }
    /** Whether the element is checked */
    get checked() {
        return this._checked;
    }
    set checked(value) {
        this._checked = coerceBooleanProperty(value);
    }
    /** If the element is not disabled emit the click event */
    trigger() {
        if (!this.disabled) {
            this.toggled.next(this);
        }
    }
}
CdkMenuItemSelectable.decorators = [
    { type: Directive }
];
CdkMenuItemSelectable.propDecorators = {
    toggled: [{ type: Output, args: ['cdkMenuItemToggled',] }],
    checked: [{ type: Input }],
    name: [{ type: Input }],
    id: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLXNlbGVjdGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L21lbnUtaXRlbS1zZWxlY3RhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxxQkFBcUIsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBQzFFLE9BQU8sRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUV4QyxxRUFBcUU7QUFDckUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWY7OztHQUdHO0FBRUgsTUFBTSxPQUFnQixxQkFBc0IsU0FBUSxXQUFXO0lBRC9EOztRQUVFLHdEQUF3RDtRQUNqQixZQUFPLEdBQzFDLElBQUksWUFBWSxFQUFFLENBQUM7UUFVZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXpCLDhEQUE4RDtRQUNyRCxTQUFJLEdBQVcsdUJBQXVCLE1BQU0sRUFBRSxFQUFFLENBQUM7UUFFMUQsNERBQTREO1FBQ25ELE9BQUUsR0FBVyx1QkFBdUIsTUFBTSxFQUFFLEVBQUUsQ0FBQztJQVUxRCxDQUFDO0lBeEJDLHFDQUFxQztJQUNyQyxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBU0QsMERBQTBEO0lBQzFELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7OztZQTNCRixTQUFTOzs7c0JBR1AsTUFBTSxTQUFDLG9CQUFvQjtzQkFJM0IsS0FBSzttQkFVTCxLQUFLO2lCQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtjb2VyY2VCb29sZWFuUHJvcGVydHksIEJvb2xlYW5JbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7SW5wdXQsIERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtNZW51SXRlbX0gZnJvbSAnLi9tZW51LWl0ZW0nO1xuXG4vKiogQ291bnRlciB1c2VkIHRvIHNldCBhIHVuaXF1ZSBpZCBhbmQgbmFtZSBmb3IgYSBzZWxlY3RhYmxlIGl0ZW0gKi9cbmxldCBuZXh0SWQgPSAwO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgcHJvdmlkaW5nIGNoZWNrZWQgc3RhdGUgZm9yIE1lbnVJdGVtcyBhbG9uZyB3aXRoIG91dHB1dHRpbmcgYSBjbGlja2VkIGV2ZW50IHdoZW4gdGhlXG4gKiBlbGVtZW50IGlzIHRyaWdnZXJlZC4gSXQgcHJvdmlkZXMgZnVuY3Rpb25hbGl0eSBmb3Igc2VsZWN0YWJsZSBlbGVtZW50cy5cbiAqL1xuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2RrTWVudUl0ZW1TZWxlY3RhYmxlIGV4dGVuZHMgQ2RrTWVudUl0ZW0ge1xuICAvKiogRXZlbnQgZW1pdHRlZCB3aGVuIHRoZSBzZWxlY3RhYmxlIGl0ZW0gaXMgY2xpY2tlZCAqL1xuICBAT3V0cHV0KCdjZGtNZW51SXRlbVRvZ2dsZWQnKSByZWFkb25seSB0b2dnbGVkOiBFdmVudEVtaXR0ZXI8Q2RrTWVudUl0ZW1TZWxlY3RhYmxlPiA9XG4gICAgICBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY2hlY2tlZCAqL1xuICBASW5wdXQoKVxuICBnZXQgY2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcbiAgfVxuICBzZXQgY2hlY2tlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2NoZWNrZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2NoZWNrZWQgPSBmYWxzZTtcblxuICAvKiogVGhlIG5hbWUgb2YgdGhlIHNlbGVjdGFibGUgZWxlbWVudCB3aXRoIGEgZGVmYXVsdCB2YWx1ZSAqL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSBgY2RrLXNlbGVjdGFibGUtaXRlbS0ke25leHRJZCsrfWA7XG5cbiAgLyoqIFRoZSBpZCBvZiB0aGUgc2VsZWN0YWJsZSBlbGVtZW50IHdpdGggYSBkZWZhdWx0IHZhbHVlICovXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSBgY2RrLXNlbGVjdGFibGUtaXRlbS0ke25leHRJZCsrfWA7XG5cbiAgLyoqIElmIHRoZSBlbGVtZW50IGlzIG5vdCBkaXNhYmxlZCBlbWl0IHRoZSBjbGljayBldmVudCAqL1xuICB0cmlnZ2VyKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy50b2dnbGVkLm5leHQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NoZWNrZWQ6IEJvb2xlYW5JbnB1dDtcbn1cbiJdfQ==