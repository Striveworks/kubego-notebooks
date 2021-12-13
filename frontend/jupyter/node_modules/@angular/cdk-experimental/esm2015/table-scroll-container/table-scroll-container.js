/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directive, ElementRef, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Directionality } from '@angular/cdk/bidi';
import { _getShadowRoot } from '@angular/cdk/platform';
import { STICKY_POSITIONING_LISTENER, } from '@angular/cdk/table';
let nextId = 0;
/**
 * Applies styles to the host element that make its scrollbars match up with
 * the non-sticky scrollable portions of the CdkTable contained within.
 *
 * This visual effect only works in Webkit and Blink based browsers (eg Chrome,
 * Safari, Edge). Other browsers such as Firefox will gracefully degrade to
 * normal scrollbar appearance.
 * Further note: These styles have no effect when the browser is using OS-default
 * scrollbars. The easiest way to force them into custom mode is to specify width
 * and height for the scrollbar and thumb.
 */
export class CdkTableScrollContainer {
    constructor(_elementRef, _document, _directionality) {
        this._elementRef = _elementRef;
        this._document = _document;
        this._directionality = _directionality;
        /** The most recent sticky column size values from the CdkTable. */
        this._startSizes = [];
        this._endSizes = [];
        this._headerSizes = [];
        this._footerSizes = [];
        this._uniqueClassName = `cdk-table-scroll-container-${++nextId}`;
        _elementRef.nativeElement.classList.add(this._uniqueClassName);
    }
    ngOnInit() {
        var _a;
        // Note that we need to look up the root node in ngOnInit, rather than the constructor, because
        // Angular seems to create the element outside the shadow root and then moves it inside, if the
        // node is inside an `ngIf` and a ShadowDom-encapsulated component.
        this._styleRoot = (_a = _getShadowRoot(this._elementRef.nativeElement)) !== null && _a !== void 0 ? _a : this._document.head;
    }
    ngOnDestroy() {
        var _a;
        // TODO: Use remove() once we're off IE11.
        if ((_a = this._styleElement) === null || _a === void 0 ? void 0 : _a.parentNode) {
            this._styleElement.parentNode.removeChild(this._styleElement);
            this._styleElement = undefined;
        }
    }
    stickyColumnsUpdated({ sizes }) {
        this._startSizes = sizes;
        this._updateScrollbar();
    }
    stickyEndColumnsUpdated({ sizes }) {
        this._endSizes = sizes;
        this._updateScrollbar();
    }
    stickyHeaderRowsUpdated({ sizes }) {
        this._headerSizes = sizes;
        this._updateScrollbar();
    }
    stickyFooterRowsUpdated({ sizes }) {
        this._footerSizes = sizes;
        this._updateScrollbar();
    }
    /**
     * Set padding on the scrollbar track based on the sticky states from CdkTable.
     */
    _updateScrollbar() {
        const topMargin = computeMargin(this._headerSizes);
        const bottomMargin = computeMargin(this._footerSizes);
        const startMargin = computeMargin(this._startSizes);
        const endMargin = computeMargin(this._endSizes);
        if (topMargin === 0 && bottomMargin === 0 && startMargin === 0 && endMargin === 0) {
            this._clearCss();
            return;
        }
        const direction = this._directionality ? this._directionality.value : 'ltr';
        const leftMargin = direction === 'rtl' ? endMargin : startMargin;
        const rightMargin = direction === 'rtl' ? startMargin : endMargin;
        this._applyCss(`${topMargin}px ${rightMargin}px ${bottomMargin}px ${leftMargin}px`);
    }
    /** Gets the stylesheet for the scrollbar styles and creates it if need be. */
    _getStyleSheet() {
        if (!this._styleElement) {
            this._styleElement = this._document.createElement('style');
            this._styleRoot.appendChild(this._styleElement);
        }
        return this._styleElement.sheet;
    }
    /** Updates the stylesheet with the specified scrollbar style. */
    _applyCss(value) {
        this._clearCss();
        const selector = `.${this._uniqueClassName}::-webkit-scrollbar-track`;
        this._getStyleSheet().insertRule(`${selector} {margin: ${value}}`, 0);
    }
    _clearCss() {
        const styleSheet = this._getStyleSheet();
        if (styleSheet.cssRules.length > 0) {
            styleSheet.deleteRule(0);
        }
    }
}
CdkTableScrollContainer.decorators = [
    { type: Directive, args: [{
                selector: '[cdkTableScrollContainer]',
                host: {
                    'class': 'cdk-table-scroll-container',
                },
                providers: [
                    { provide: STICKY_POSITIONING_LISTENER, useExisting: CdkTableScrollContainer },
                ],
            },] }
];
CdkTableScrollContainer.ctorParameters = () => [
    { type: ElementRef },
    { type: Document, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Directionality, decorators: [{ type: Optional }] }
];
function computeMargin(sizes) {
    let margin = 0;
    for (const size of sizes) {
        if (size == null) {
            break;
        }
        margin += size;
    }
    return margin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2Nyb2xsLWNvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGstZXhwZXJpbWVudGFsL3RhYmxlLXNjcm9sbC1jb250YWluZXIvdGFibGUtc2Nyb2xsLWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQXFCLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQ0wsMkJBQTJCLEdBSTVCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBRWY7Ozs7Ozs7Ozs7R0FVRztBQVVILE1BQU0sT0FBTyx1QkFBdUI7SUFZbEMsWUFDcUIsV0FBb0MsRUFDbEIsU0FBbUIsRUFDekIsZUFBZ0M7UUFGNUMsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDekIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVGpFLG1FQUFtRTtRQUMzRCxnQkFBVyxHQUFpQixFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFpQixFQUFFLENBQUM7UUFDN0IsaUJBQVksR0FBaUIsRUFBRSxDQUFDO1FBQ2hDLGlCQUFZLEdBQWlCLEVBQUUsQ0FBQztRQU10QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsOEJBQThCLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDakUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lB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Q0FBQztJQUVELGlFQUFpRTtJQUN6RCxTQUFTLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLDJCQUEyQixDQUFDO1FBQ3RFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLGFBQWEsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVPLFNBQVM7UUFDZixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekMsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7OztZQTVHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSw0QkFBNEI7aUJBQ3RDO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxFQUFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUM7aUJBQzdFO2FBQ0Y7OztZQWhDa0IsVUFBVTtZQStDdUIsUUFBUSx1QkFBckQsTUFBTSxTQUFDLFFBQVE7WUE3Q2QsY0FBYyx1QkE4Q2YsUUFBUTs7QUF1RmYsU0FBUyxhQUFhLENBQUMsS0FBZ0M7SUFDckQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDeEIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLE1BQU07U0FDUDtRQUNELE1BQU0sSUFBSSxJQUFJLENBQUM7S0FDaEI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3QsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtfZ2V0U2hhZG93Um9vdH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIFNUSUNLWV9QT1NJVElPTklOR19MSVNURU5FUixcbiAgU3RpY2t5UG9zaXRpb25pbmdMaXN0ZW5lcixcbiAgU3RpY2t5U2l6ZSxcbiAgU3RpY2t5VXBkYXRlLFxufSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5sZXQgbmV4dElkID0gMDtcblxuLyoqXG4gKiBBcHBsaWVzIHN0eWxlcyB0byB0aGUgaG9zdCBlbGVtZW50IHRoYXQgbWFrZSBpdHMgc2Nyb2xsYmFycyBtYXRjaCB1cCB3aXRoXG4gKiB0aGUgbm9uLXN0aWNreSBzY3JvbGxhYmxlIHBvcnRpb25zIG9mIHRoZSBDZGtUYWJsZSBjb250YWluZWQgd2l0aGluLlxuICpcbiAqIFRoaXMgdmlzdWFsIGVmZmVjdCBvbmx5IHdvcmtzIGluIFdlYmtpdCBhbmQgQmxpbmsgYmFzZWQgYnJvd3NlcnMgKGVnIENocm9tZSxcbiAqIFNhZmFyaSwgRWRnZSkuIE90aGVyIGJyb3dzZXJzIHN1Y2ggYXMgRmlyZWZveCB3aWxsIGdyYWNlZnVsbHkgZGVncmFkZSB0b1xuICogbm9ybWFsIHNjcm9sbGJhciBhcHBlYXJhbmNlLlxuICogRnVydGhlciBub3RlOiBUaGVzZSBzdHlsZXMgaGF2ZSBubyBlZmZlY3Qgd2hlbiB0aGUgYnJvd3NlciBpcyB1c2luZyBPUy1kZWZhdWx0XG4gKiBzY3JvbGxiYXJzLiBUaGUgZWFzaWVzdCB3YXkgdG8gZm9yY2UgdGhlbSBpbnRvIGN1c3RvbSBtb2RlIGlzIHRvIHNwZWNpZnkgd2lkdGhcbiAqIGFuZCBoZWlnaHQgZm9yIHRoZSBzY3JvbGxiYXIgYW5kIHRodW1iLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2RrVGFibGVTY3JvbGxDb250YWluZXJdJyxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdjZGstdGFibGUtc2Nyb2xsLWNvbnRhaW5lcicsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtwcm92aWRlOiBTVElDS1lfUE9TSVRJT05JTkdfTElTVEVORVIsIHVzZUV4aXN0aW5nOiBDZGtUYWJsZVNjcm9sbENvbnRhaW5lcn0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENka1RhYmxlU2Nyb2xsQ29udGFpbmVyIGltcGxlbWVudHMgU3RpY2t5UG9zaXRpb25pbmdMaXN0ZW5lcixcbiAgICBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3VuaXF1ZUNsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9zdHlsZVJvb3QhOiBOb2RlO1xuICBwcml2YXRlIF9zdHlsZUVsZW1lbnQ/OiBIVE1MU3R5bGVFbGVtZW50O1xuXG4gIC8qKiBUaGUgbW9zdCByZWNlbnQgc3RpY2t5IGNvbHVtbiBzaXplIHZhbHVlcyBmcm9tIHRoZSBDZGtUYWJsZS4gKi9cbiAgcHJpdmF0ZSBfc3RhcnRTaXplczogU3RpY2t5U2l6ZVtdID0gW107XG4gIHByaXZhdGUgX2VuZFNpemVzOiBTdGlja3lTaXplW10gPSBbXTtcbiAgcHJpdmF0ZSBfaGVhZGVyU2l6ZXM6IFN0aWNreVNpemVbXSA9IFtdO1xuICBwcml2YXRlIF9mb290ZXJTaXplczogU3RpY2t5U2l6ZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgcmVhZG9ubHkgX2RvY3VtZW50OiBEb2N1bWVudCxcbiAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcmVhZG9ubHkgX2RpcmVjdGlvbmFsaXR5PzogRGlyZWN0aW9uYWxpdHkpIHtcbiAgICB0aGlzLl91bmlxdWVDbGFzc05hbWUgPSBgY2RrLXRhYmxlLXNjcm9sbC1jb250YWluZXItJHsrK25leHRJZH1gO1xuICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl91bmlxdWVDbGFzc05hbWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gTm90ZSB0aGF0IHdlIG5lZWQgdG8gbG9vayB1cCB0aGUgcm9vdCBub2RlIGluIG5nT25Jbml0LCByYXRoZXIgdGhhbiB0aGUgY29uc3RydWN0b3IsIGJlY2F1c2VcbiAgICAvLyBBbmd1bGFyIHNlZW1zIHRvIGNyZWF0ZSB0aGUgZWxlbWVudCBvdXRzaWRlIHRoZSBzaGFkb3cgcm9vdCBhbmQgdGhlbiBtb3ZlcyBpdCBpbnNpZGUsIGlmIHRoZVxuICAgIC8vIG5vZGUgaXMgaW5zaWRlIGFuIGBuZ0lmYCBhbmQgYSBTaGFkb3dEb20tZW5jYXBzdWxhdGVkIGNvbXBvbmVudC5cbiAgICB0aGlzLl9zdHlsZVJvb3QgPSBfZ2V0U2hhZG93Um9vdCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpID8/IHRoaXMuX2RvY3VtZW50LmhlYWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBUT0RPOiBVc2UgcmVtb3ZlKCkgb25jZSB3ZSdyZSBvZmYgSUUxMS5cbiAgICBpZiAodGhpcy5fc3R5bGVFbGVtZW50Py5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLl9zdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9zdHlsZUVsZW1lbnQpO1xuICAgICAgdGhpcy5fc3R5bGVFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHN0aWNreUNvbHVtbnNVcGRhdGVkKHtzaXplc306IFN0aWNreVVwZGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuX3N0YXJ0U2l6ZXMgPSBzaXplcztcbiAgICB0aGlzLl91cGRhdGVTY3JvbGxiYXIoKTtcbiAgfVxuXG4gIHN0aWNreUVuZENvbHVtbnNVcGRhdGVkKHtzaXplc306IFN0aWNreVVwZGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuX2VuZFNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5fdXBkYXRlU2Nyb2xsYmFyKCk7XG4gIH1cblxuICBzdGlja3lIZWFkZXJSb3dzVXBkYXRlZCh7c2l6ZXN9OiBTdGlja3lVcGRhdGUpOiB2b2lkIHtcbiAgICB0aGlzLl9oZWFkZXJTaXplcyA9IHNpemVzO1xuICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGJhcigpO1xuICB9XG5cbiAgc3RpY2t5Rm9vdGVyUm93c1VwZGF0ZWQoe3NpemVzfTogU3RpY2t5VXBkYXRlKTogdm9pZCB7XG4gICAgdGhpcy5fZm9vdGVyU2l6ZXMgPSBzaXplcztcbiAgICB0aGlzLl91cGRhdGVTY3JvbGxiYXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcGFkZGluZyBvbiB0aGUgc2Nyb2xsYmFyIHRyYWNrIGJhc2VkIG9uIHRoZSBzdGlja3kgc3RhdGVzIGZyb20gQ2RrVGFibGUuXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGVTY3JvbGxiYXIoKTogdm9pZCB7XG4gICAgY29uc3QgdG9wTWFyZ2luID0gY29tcHV0ZU1hcmdpbih0aGlzLl9oZWFkZXJTaXplcyk7XG4gICAgY29uc3QgYm90dG9tTWFyZ2luID0gY29tcHV0ZU1hcmdpbih0aGlzLl9mb290ZXJTaXplcyk7XG4gICAgY29uc3Qgc3RhcnRNYXJnaW4gPSBjb21wdXRlTWFyZ2luKHRoaXMuX3N0YXJ0U2l6ZXMpO1xuICAgIGNvbnN0IGVuZE1hcmdpbiA9IGNvbXB1dGVNYXJnaW4odGhpcy5fZW5kU2l6ZXMpO1xuXG4gICAgaWYgKHRvcE1hcmdpbiA9PT0gMCAmJiBib3R0b21NYXJnaW4gPT09IDAgJiYgc3RhcnRNYXJnaW4gPT09IDAgJiYgZW5kTWFyZ2luID09PSAwKSB7XG4gICAgICB0aGlzLl9jbGVhckNzcygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuX2RpcmVjdGlvbmFsaXR5ID8gdGhpcy5fZGlyZWN0aW9uYWxpdHkudmFsdWUgOiAnbHRyJztcbiAgICBjb25zdCBsZWZ0TWFyZ2luID0gZGlyZWN0aW9uID09PSAncnRsJyA/IGVuZE1hcmdpbiA6IHN0YXJ0TWFyZ2luO1xuICAgIGNvbnN0IHJpZ2h0TWFyZ2luID0gZGlyZWN0aW9uID09PSAncnRsJyA/IHN0YXJ0TWFyZ2luIDogZW5kTWFyZ2luO1xuXG4gICAgdGhpcy5fYXBwbHlDc3MoYCR7dG9wTWFyZ2lufXB4ICR7cmlnaHRNYXJnaW59cHggJHtib3R0b21NYXJnaW59cHggJHtsZWZ0TWFyZ2lufXB4YCk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgc3R5bGVzaGVldCBmb3IgdGhlIHNjcm9sbGJhciBzdHlsZXMgYW5kIGNyZWF0ZXMgaXQgaWYgbmVlZCBiZS4gKi9cbiAgcHJpdmF0ZSBfZ2V0U3R5bGVTaGVldCgpOiBDU1NTdHlsZVNoZWV0IHtcbiAgICBpZiAoIXRoaXMuX3N0eWxlRWxlbWVudCkge1xuICAgICAgdGhpcy5fc3R5bGVFbGVtZW50ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIHRoaXMuX3N0eWxlUm9vdC5hcHBlbmRDaGlsZCh0aGlzLl9zdHlsZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9zdHlsZUVsZW1lbnQuc2hlZXQgYXMgQ1NTU3R5bGVTaGVldDtcbiAgfVxuXG4gIC8qKiBVcGRhdGVzIHRoZSBzdHlsZXNoZWV0IHdpdGggdGhlIHNwZWNpZmllZCBzY3JvbGxiYXIgc3R5bGUuICovXG4gIHByaXZhdGUgX2FwcGx5Q3NzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbGVhckNzcygpO1xuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgLiR7dGhpcy5fdW5pcXVlQ2xhc3NOYW1lfTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tgO1xuICAgIHRoaXMuX2dldFN0eWxlU2hlZXQoKS5pbnNlcnRSdWxlKGAke3NlbGVjdG9yfSB7bWFyZ2luOiAke3ZhbHVlfX1gLCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFyQ3NzKCkge1xuICAgIGNvbnN0IHN0eWxlU2hlZXQgPSB0aGlzLl9nZXRTdHlsZVNoZWV0KCk7XG4gICAgaWYgKHN0eWxlU2hlZXQuY3NzUnVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgc3R5bGVTaGVldC5kZWxldGVSdWxlKDApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlTWFyZ2luKHNpemVzOiAobnVtYmVyfG51bGx8dW5kZWZpbmVkKVtdKTogbnVtYmVyIHtcbiAgbGV0IG1hcmdpbiA9IDA7XG4gIGZvciAoY29uc3Qgc2l6ZSBvZiBzaXplcykge1xuICAgIGlmIChzaXplID09IG51bGwpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBtYXJnaW4gKz0gc2l6ZTtcbiAgfVxuICByZXR1cm4gbWFyZ2luO1xufVxuIl19