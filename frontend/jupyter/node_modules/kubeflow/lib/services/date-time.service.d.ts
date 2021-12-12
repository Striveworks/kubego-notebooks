import * as i0 from "@angular/core";
export declare const defaultDateOptions: Intl.DateTimeFormatOptions;
export declare const defaultTimeOptions: Intl.DateTimeFormatOptions;
export declare class DateTimeService {
    constructor();
    parse(date: string | number | Date): Date;
    isEqual(date1: Date, date2: Date): boolean;
    intlFormat(date: Date | number | string, options?: Intl.DateTimeFormatOptions, locale?: string): string;
    merge(date: string | Date, time: string): Date;
    distanceInWords(dateToCompare: string | Date, date?: string | Date): string;
    private isNotValidNumber;
    private isValidHours;
    private isValidMinutes;
    private isValidSeconds;
    private between;
    differenceInSeconds(d1: Date, d2: Date): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateTimeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DateTimeService>;
}
//# sourceMappingURL=date-time.service.d.ts.map