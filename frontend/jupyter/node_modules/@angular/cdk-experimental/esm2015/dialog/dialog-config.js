export class DialogConfig {
    constructor() {
        /** The ARIA role of the dialog. */
        this.role = 'dialog';
        /** Custom class(es) for the overlay panel. */
        this.panelClass = '';
        /** Whether the dialog has a background. */
        this.hasBackdrop = true;
        /** Custom class(es) for the backdrop. */
        this.backdropClass = '';
        /** Whether the dialog can be closed by user interaction. */
        this.disableClose = false;
        /** The width of the dialog. */
        this.width = '';
        /** The height of the dialog. */
        this.height = '';
        /** The minimum width of the dialog. */
        this.minWidth = '';
        /** The minimum height of the dialog. */
        this.minHeight = '';
        /** The maximum width of the dialog. */
        this.maxWidth = '80vw';
        /** The maximum height of the dialog. */
        this.maxHeight = '';
        /** Data to be injected into the dialog content. */
        this.data = null;
        /** ID of the element that describes the dialog. */
        this.ariaDescribedBy = null;
        /** Aria label to assign to the dialog element */
        this.ariaLabel = null;
        /** Whether the dialog should focus the first focusable element on open. */
        this.autoFocus = true;
        /** Duration of the enter animation. Has to be a valid CSS value (e.g. 100ms). */
        this.enterAnimationDuration = '225ms';
        /** Duration of the exit animation. Has to be a valid CSS value (e.g. 50ms). */
        this.exitAnimationDuration = '225ms';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL2RpYWxvZy9kaWFsb2ctY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSxNQUFNLE9BQU8sWUFBWTtJQUF6QjtRQWVFLG1DQUFtQztRQUNuQyxTQUFJLEdBQWdCLFFBQVEsQ0FBQztRQUU3Qiw4Q0FBOEM7UUFDOUMsZUFBVSxHQUF1QixFQUFFLENBQUM7UUFFcEMsMkNBQTJDO1FBQzNDLGdCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLHlDQUF5QztRQUN6QyxrQkFBYSxHQUF3QixFQUFFLENBQUM7UUFFeEMsNERBQTREO1FBQzVELGlCQUFZLEdBQWEsS0FBSyxDQUFDO1FBRS9CLCtCQUErQjtRQUMvQixVQUFLLEdBQVksRUFBRSxDQUFDO1FBRXBCLGdDQUFnQztRQUNoQyxXQUFNLEdBQVksRUFBRSxDQUFDO1FBRXJCLHVDQUF1QztRQUN2QyxhQUFRLEdBQXFCLEVBQUUsQ0FBQztRQUVoQyx3Q0FBd0M7UUFDeEMsY0FBUyxHQUFxQixFQUFFLENBQUM7UUFFakMsdUNBQXVDO1FBQ3ZDLGFBQVEsR0FBcUIsTUFBTSxDQUFDO1FBRXBDLHdDQUF3QztRQUN4QyxjQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUtqQyxtREFBbUQ7UUFDbkQsU0FBSSxHQUFjLElBQUksQ0FBQztRQUt2QixtREFBbUQ7UUFDbkQsb0JBQWUsR0FBbUIsSUFBSSxDQUFDO1FBRXZDLGlEQUFpRDtRQUNqRCxjQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQywyRUFBMkU7UUFDM0UsY0FBUyxHQUFhLElBQUksQ0FBQztRQUUzQixpRkFBaUY7UUFDakYsMkJBQXNCLEdBQVksT0FBTyxDQUFDO1FBRTFDLCtFQUErRTtRQUMvRSwwQkFBcUIsR0FBWSxPQUFPLENBQUM7SUFDM0MsQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge1ZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3Rpb259IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7Q29tcG9uZW50VHlwZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtDZGtEaWFsb2dDb250YWluZXJ9IGZyb20gJy4vZGlhbG9nLWNvbnRhaW5lcic7XG5cbi8qKiBWYWxpZCBBUklBIHJvbGVzIGZvciBhIGRpYWxvZyBlbGVtZW50LiAqL1xuZXhwb3J0IHR5cGUgRGlhbG9nUm9sZSA9ICdkaWFsb2cnIHwgJ2FsZXJ0ZGlhbG9nJztcblxuLyoqIFBvc3NpYmxlIG92ZXJyaWRlcyBmb3IgYSBkaWFsb2cncyBwb3NpdGlvbi4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUG9zaXRpb24ge1xuICB0b3A/OiBzdHJpbmc7XG4gIGJvdHRvbT86IHN0cmluZztcbiAgbGVmdD86IHN0cmluZztcbiAgcmlnaHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dDb25maWc8RCA9IGFueT4ge1xuICAvKiogQ29tcG9uZW50IHRvIHVzZSBhcyB0aGUgY29udGFpbmVyIGZvciB0aGUgZGlhbG9nLiAqL1xuICBjb250YWluZXJDb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPENka0RpYWxvZ0NvbnRhaW5lcj47XG5cbiAgLyoqXG4gICAqIFdoZXJlIHRoZSBhdHRhY2hlZCBjb21wb25lbnQgc2hvdWxkIGxpdmUgaW4gQW5ndWxhcidzICpsb2dpY2FsKiBjb21wb25lbnQgdHJlZS5cbiAgICogVGhpcyBhZmZlY3RzIHdoYXQgaXMgYXZhaWxhYmxlIGZvciBpbmplY3Rpb24gYW5kIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIG9yZGVyIGZvciB0aGVcbiAgICogY29tcG9uZW50IGluc3RhbnRpYXRlZCBpbnNpZGUgb2YgdGhlIGRpYWxvZy4gVGhpcyBkb2VzIG5vdCBhZmZlY3Qgd2hlcmUgdGhlIGRpYWxvZ1xuICAgKiBjb250ZW50IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICB2aWV3Q29udGFpbmVyUmVmPzogVmlld0NvbnRhaW5lclJlZjtcblxuICAvKiogVGhlIGlkIG9mIHRoZSBkaWFsb2cuICovXG4gIGlkPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgQVJJQSByb2xlIG9mIHRoZSBkaWFsb2cuICovXG4gIHJvbGU/OiBEaWFsb2dSb2xlID0gJ2RpYWxvZyc7XG5cbiAgLyoqIEN1c3RvbSBjbGFzcyhlcykgZm9yIHRoZSBvdmVybGF5IHBhbmVsLiAqL1xuICBwYW5lbENsYXNzPzogc3RyaW5nIHwgc3RyaW5nW10gPSAnJztcblxuICAvKiogV2hldGhlciB0aGUgZGlhbG9nIGhhcyBhIGJhY2tncm91bmQuICovXG4gIGhhc0JhY2tkcm9wPzogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqIEN1c3RvbSBjbGFzcyhlcykgZm9yIHRoZSBiYWNrZHJvcC4gKi9cbiAgYmFja2Ryb3BDbGFzcz86IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcnO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBkaWFsb2cgY2FuIGJlIGNsb3NlZCBieSB1c2VyIGludGVyYWN0aW9uLiAqL1xuICBkaXNhYmxlQ2xvc2U/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFRoZSB3aWR0aCBvZiB0aGUgZGlhbG9nLiAqL1xuICB3aWR0aD86IHN0cmluZyA9ICcnO1xuXG4gIC8qKiBUaGUgaGVpZ2h0IG9mIHRoZSBkaWFsb2cuICovXG4gIGhlaWdodD86IHN0cmluZyA9ICcnO1xuXG4gIC8qKiBUaGUgbWluaW11bSB3aWR0aCBvZiB0aGUgZGlhbG9nLiAqL1xuICBtaW5XaWR0aD86IHN0cmluZyB8IG51bWJlciA9ICcnO1xuXG4gIC8qKiBUaGUgbWluaW11bSBoZWlnaHQgb2YgdGhlIGRpYWxvZy4gKi9cbiAgbWluSGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyID0gJyc7XG5cbiAgLyoqIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBkaWFsb2cuICovXG4gIG1heFdpZHRoPzogc3RyaW5nIHwgbnVtYmVyID0gJzgwdncnO1xuXG4gIC8qKiBUaGUgbWF4aW11bSBoZWlnaHQgb2YgdGhlIGRpYWxvZy4gKi9cbiAgbWF4SGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyID0gJyc7XG5cbiAgLyoqIFRoZSBwb3NpdGlvbiBvZiB0aGUgZGlhbG9nLiAqL1xuICBwb3NpdGlvbj86IERpYWxvZ1Bvc2l0aW9uO1xuXG4gIC8qKiBEYXRhIHRvIGJlIGluamVjdGVkIGludG8gdGhlIGRpYWxvZyBjb250ZW50LiAqL1xuICBkYXRhPzogRCB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBUaGUgbGF5b3V0IGRpcmVjdGlvbiBmb3IgdGhlIGRpYWxvZyBjb250ZW50LiAqL1xuICBkaXJlY3Rpb24/OiBEaXJlY3Rpb247XG5cbiAgLyoqIElEIG9mIHRoZSBlbGVtZW50IHRoYXQgZGVzY3JpYmVzIHRoZSBkaWFsb2cuICovXG4gIGFyaWFEZXNjcmliZWRCeT86IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBBcmlhIGxhYmVsIHRvIGFzc2lnbiB0byB0aGUgZGlhbG9nIGVsZW1lbnQgKi9cbiAgYXJpYUxhYmVsPzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGRpYWxvZyBzaG91bGQgZm9jdXMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IG9uIG9wZW4uICovXG4gIGF1dG9Gb2N1cz86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBEdXJhdGlvbiBvZiB0aGUgZW50ZXIgYW5pbWF0aW9uLiBIYXMgdG8gYmUgYSB2YWxpZCBDU1MgdmFsdWUgKGUuZy4gMTAwbXMpLiAqL1xuICBlbnRlckFuaW1hdGlvbkR1cmF0aW9uPzogc3RyaW5nID0gJzIyNW1zJztcblxuICAvKiogRHVyYXRpb24gb2YgdGhlIGV4aXQgYW5pbWF0aW9uLiBIYXMgdG8gYmUgYSB2YWxpZCBDU1MgdmFsdWUgKGUuZy4gNTBtcykuICovXG4gIGV4aXRBbmltYXRpb25EdXJhdGlvbj86IHN0cmluZyA9ICcyMjVtcyc7XG59XG4iXX0=