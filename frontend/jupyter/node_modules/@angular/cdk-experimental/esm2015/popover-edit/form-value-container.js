/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A convenience class for preserving unsaved form state while an edit lens is closed.
 *
 * Example usage:
 * class MyComponent {
 *   readonly nameEditValues = new FormValueContainer&lt;Item, {name: string}&gt;();
 * }
 *
 * &lt;form cdkEditControl [(cdkEditControlPreservedFormValue)]="nameEditValues.for(item).value"&gt;
 */
export class FormValueContainer {
    constructor() {
        this._formValues = new WeakMap();
    }
    for(key) {
        const _formValues = this._formValues;
        let entry = _formValues.get(key);
        if (!entry) {
            // Expose entry as an object so that we can [(two-way)] bind to its value member
            entry = {};
            _formValues.set(key, entry);
        }
        return entry;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWx1ZS1jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvZm9ybS12YWx1ZS1jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBTUg7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxPQUFPLGtCQUFrQjtJQUEvQjtRQUNVLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQXlCLENBQUM7SUFjN0QsQ0FBQztJQVpDLEdBQUcsQ0FBQyxHQUFRO1FBQ1YsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUVyQyxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixnRkFBZ0Y7WUFDaEYsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNYLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdCO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBFbnRyeTxGb3JtVmFsdWU+IHtcbiAgdmFsdWU/OiBGb3JtVmFsdWU7XG59XG5cbi8qKlxuICogQSBjb252ZW5pZW5jZSBjbGFzcyBmb3IgcHJlc2VydmluZyB1bnNhdmVkIGZvcm0gc3RhdGUgd2hpbGUgYW4gZWRpdCBsZW5zIGlzIGNsb3NlZC5cbiAqXG4gKiBFeGFtcGxlIHVzYWdlOlxuICogY2xhc3MgTXlDb21wb25lbnQge1xuICogICByZWFkb25seSBuYW1lRWRpdFZhbHVlcyA9IG5ldyBGb3JtVmFsdWVDb250YWluZXImbHQ7SXRlbSwge25hbWU6IHN0cmluZ30mZ3Q7KCk7XG4gKiB9XG4gKlxuICogJmx0O2Zvcm0gY2RrRWRpdENvbnRyb2wgWyhjZGtFZGl0Q29udHJvbFByZXNlcnZlZEZvcm1WYWx1ZSldPVwibmFtZUVkaXRWYWx1ZXMuZm9yKGl0ZW0pLnZhbHVlXCImZ3Q7XG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtVmFsdWVDb250YWluZXI8S2V5IGV4dGVuZHMgb2JqZWN0LCBGb3JtVmFsdWU+IHtcbiAgcHJpdmF0ZSBfZm9ybVZhbHVlcyA9IG5ldyBXZWFrTWFwPEtleSwgRW50cnk8Rm9ybVZhbHVlPj4oKTtcblxuICBmb3Ioa2V5OiBLZXkpOiBFbnRyeTxGb3JtVmFsdWU+IHtcbiAgICBjb25zdCBfZm9ybVZhbHVlcyA9IHRoaXMuX2Zvcm1WYWx1ZXM7XG5cbiAgICBsZXQgZW50cnkgPSBfZm9ybVZhbHVlcy5nZXQoa2V5KTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAvLyBFeHBvc2UgZW50cnkgYXMgYW4gb2JqZWN0IHNvIHRoYXQgd2UgY2FuIFsodHdvLXdheSldIGJpbmQgdG8gaXRzIHZhbHVlIG1lbWJlclxuICAgICAgZW50cnkgPSB7fTtcbiAgICAgIF9mb3JtVmFsdWVzLnNldChrZXksIGVudHJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW50cnk7XG4gIH1cbn1cbiJdfQ==