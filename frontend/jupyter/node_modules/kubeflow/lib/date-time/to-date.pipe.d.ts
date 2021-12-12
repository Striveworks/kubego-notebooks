import { PipeTransform } from '@angular/core';
import { DateTimeService } from '../services/date-time.service';
import * as i0 from "@angular/core";
export declare class ToDatePipe implements PipeTransform {
    private dtService;
    constructor(dtService: DateTimeService);
    transform(value: string | Date, type?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToDatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ToDatePipe, "libToDate">;
}
//# sourceMappingURL=to-date.pipe.d.ts.map