import { OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DateTimeService } from '../services/date-time.service';
import * as i0 from "@angular/core";
export declare class DateTimeComponent implements OnDestroy {
    private dtService;
    private cdRef;
    private timer;
    private defaultDisplayValuePrv;
    private datePrv;
    get date(): string | Date;
    set date(v: string | Date);
    formattedDate: string;
    popoverPosition: string;
    set defaultDisplayValue(v: string);
    get defaultDisplayValue(): string;
    get isPopoverDisabled(): boolean;
    constructor(dtService: DateTimeService, cdRef: ChangeDetectorRef);
    ngOnDestroy(): void;
    private timeAgo;
    private checkAndUpdate;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateTimeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateTimeComponent, "lib-date-time", never, { "date": "date"; "popoverPosition": "popoverPosition"; "defaultDisplayValue": "default"; }, {}, never, never>;
}
//# sourceMappingURL=date-time.component.d.ts.map