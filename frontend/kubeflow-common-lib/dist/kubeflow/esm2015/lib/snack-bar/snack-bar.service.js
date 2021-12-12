import { Injectable } from '@angular/core';
import { SnackBarComponent } from './component/snack-bar.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
export class SnackBarService {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.dialogState = { shown: false, msg: '' };
    }
    show(message, type, dur = 8000) {
        return this.snackBar.openFromComponent(SnackBarComponent, {
            duration: dur,
            data: { msg: message, snackType: type },
        });
    }
    close() {
        this.dialogState.shown = false;
        this.snackBar.dismiss();
    }
    open(msg, type, time = 20000) {
        if (this.dialogState.shown && this.dialogState.msg === msg) {
            return;
        }
        this.dialogState.shown = true;
        this.dialogState.msg = msg;
        this.show(msg, type, time)
            .afterDismissed()
            .subscribe(() => {
            this.dialogState.shown = false;
            this.dialogState.msg = '';
        });
    }
}
SnackBarService.ɵfac = function SnackBarService_Factory(t) { return new (t || SnackBarService)(i0.ɵɵinject(i1.MatSnackBar)); };
SnackBarService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SnackBarService, factory: SnackBarService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.MatSnackBar }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rdWJlZmxvdy9zcmMvbGliL3NuYWNrLWJhci9zbmFjay1iYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOzs7QUFNcEUsTUFBTSxPQUFPLGVBQWU7SUFHMUIsWUFBb0IsUUFBcUI7UUFBckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUZqQyxnQkFBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFFSixDQUFDO0lBRXJDLElBQUksQ0FBQyxPQUFlLEVBQUUsSUFBZSxFQUFFLE1BQWMsSUFBSTtRQUMvRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7WUFDeEQsUUFBUSxFQUFFLEdBQUc7WUFDYixJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUU7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxJQUFlLEVBQUUsSUFBSSxHQUFHLEtBQUs7UUFDcEQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDMUQsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO2FBQ3ZCLGNBQWMsRUFBRTthQUNoQixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7OzhFQTlCVSxlQUFlO3FFQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07dUZBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBTbmFja0JhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3NuYWNrLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU25hY2tUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhclNlcnZpY2Uge1xuICBwcml2YXRlIGRpYWxvZ1N0YXRlID0geyBzaG93bjogZmFsc2UsIG1zZzogJycgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNuYWNrQmFyOiBNYXRTbmFja0Jhcikge31cblxuICBwcml2YXRlIHNob3cobWVzc2FnZTogc3RyaW5nLCB0eXBlOiBTbmFja1R5cGUsIGR1cjogbnVtYmVyID0gODAwMCkge1xuICAgIHJldHVybiB0aGlzLnNuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrQmFyQ29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogZHVyLFxuICAgICAgZGF0YTogeyBtc2c6IG1lc3NhZ2UsIHNuYWNrVHlwZTogdHlwZSB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIHRoaXMuZGlhbG9nU3RhdGUuc2hvd24gPSBmYWxzZTtcbiAgICB0aGlzLnNuYWNrQmFyLmRpc21pc3MoKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKG1zZzogc3RyaW5nLCB0eXBlOiBTbmFja1R5cGUsIHRpbWUgPSAyMDAwMCkge1xuICAgIGlmICh0aGlzLmRpYWxvZ1N0YXRlLnNob3duICYmIHRoaXMuZGlhbG9nU3RhdGUubXNnID09PSBtc2cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRpYWxvZ1N0YXRlLnNob3duID0gdHJ1ZTtcbiAgICB0aGlzLmRpYWxvZ1N0YXRlLm1zZyA9IG1zZztcbiAgICB0aGlzLnNob3cobXNnLCB0eXBlLCB0aW1lKVxuICAgICAgLmFmdGVyRGlzbWlzc2VkKClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmRpYWxvZ1N0YXRlLnNob3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlhbG9nU3RhdGUubXNnID0gJyc7XG4gICAgICB9KTtcbiAgfVxufVxuIl19