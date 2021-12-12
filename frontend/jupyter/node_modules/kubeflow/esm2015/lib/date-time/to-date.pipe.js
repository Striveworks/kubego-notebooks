import { Pipe } from '@angular/core';
import { defaultDateOptions, defaultTimeOptions, } from '../services/date-time.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/date-time.service";
export class ToDatePipe {
    constructor(dtService) {
        this.dtService = dtService;
    }
    transform(value, type) {
        if (!value) {
            return '';
        }
        try {
            const toDate = new Date(value);
            let options;
            if (type === 'date') {
                options = defaultDateOptions;
            }
            else if (type === 'time') {
                options = defaultTimeOptions;
            }
            return this.dtService.intlFormat(toDate, options);
        }
        catch (error) {
            console.error('ToDatePipe value:', value);
            console.error(error);
            return '';
        }
    }
}
ToDatePipe.ɵfac = function ToDatePipe_Factory(t) { return new (t || ToDatePipe)(i0.ɵɵdirectiveInject(i1.DateTimeService, 16)); };
ToDatePipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "libToDate", type: ToDatePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToDatePipe, [{
        type: Pipe,
        args: [{ name: 'libToDate' }]
    }], function () { return [{ type: i1.DateTimeService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMva3ViZWZsb3cvc3JjL2xpYi9kYXRlLXRpbWUvdG8tZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFFTCxrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0sK0JBQStCLENBQUM7OztBQUd2QyxNQUFNLE9BQU8sVUFBVTtJQUNyQixZQUFvQixTQUEwQjtRQUExQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtJQUFHLENBQUM7SUFDbEQsU0FBUyxDQUFDLEtBQW9CLEVBQUUsSUFBYTtRQUMzQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFlLENBQUMsQ0FBQztZQUN6QyxJQUFJLE9BQW1DLENBQUM7WUFFeEMsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUNuQixPQUFPLEdBQUcsa0JBQWtCLENBQUM7YUFDOUI7aUJBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUMxQixPQUFPLEdBQUcsa0JBQWtCLENBQUM7YUFDOUI7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDOztvRUF0QlUsVUFBVTs0RUFBVixVQUFVO3VGQUFWLFVBQVU7Y0FEdEIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEYXRlVGltZVNlcnZpY2UsXG4gIGRlZmF1bHREYXRlT3B0aW9ucyxcbiAgZGVmYXVsdFRpbWVPcHRpb25zLFxufSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRlLXRpbWUuc2VydmljZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2xpYlRvRGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBUb0RhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHRTZXJ2aWNlOiBEYXRlVGltZVNlcnZpY2UpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nIHwgRGF0ZSwgdHlwZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b0RhdGUgPSBuZXcgRGF0ZSh2YWx1ZSBhcyBzdHJpbmcpO1xuICAgICAgbGV0IG9wdGlvbnM6IEludGwuRGF0ZVRpbWVGb3JtYXRPcHRpb25zO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0RGF0ZU9wdGlvbnM7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICBvcHRpb25zID0gZGVmYXVsdFRpbWVPcHRpb25zO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZHRTZXJ2aWNlLmludGxGb3JtYXQodG9EYXRlLCBvcHRpb25zKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignVG9EYXRlUGlwZSB2YWx1ZTonLCB2YWx1ZSk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==