import { AsyncValidatorFn, ValidatorFn, AbstractControl, Validators } from '@angular/forms';
import { RokService } from '../services/rok/rok.service';
export interface IValidator {
    regex: string;
    help: string;
}
export declare const dns1123Validator: IValidator;
export declare const dns1035Validator: IValidator;
export declare const volSizeValidator: IValidator;
export declare const memoryValidator: IValidator;
export declare const cpuValidator: IValidator;
export declare const DEBOUNCE_TIME = 500;
export declare function mergeAndDebounceValidators(syncValidators: ValidatorFn[]): AsyncValidatorFn;
export declare const MAX_NAME_LENGTH = 50;
export declare function getNameError(nameCtrl: AbstractControl, resource: string): string;
export declare function getExistingNameValidator(names: Set<string>): ValidatorFn;
export declare function getNameSyncValidators(): (typeof Validators.required)[];
export declare function getNameAsyncValidators(existingNames?: Set<string>, maxLength?: number): AsyncValidatorFn[];
export declare function getRokUrlError(rokUrlCtrl: AbstractControl): "Rok URL cannot be empty" | "Not a valid Rok URL";
export declare function rokUrlValidator(rok: RokService): AsyncValidatorFn;
//# sourceMappingURL=validators.d.ts.map