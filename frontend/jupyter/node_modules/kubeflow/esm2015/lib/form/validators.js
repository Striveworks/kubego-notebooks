import { Validators, } from '@angular/forms';
import { of, timer, of as observableOf } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
const dns1123LabelFmt = '[a-z0-9]([-a-z0-9]*[a-z0-9])?';
export const dns1123Validator = {
    regex: '^' + dns1123LabelFmt + '(\\.' + dns1123LabelFmt + ')*' + '$',
    help: "Name must consist of lowercase alphanumeric characters or '-', and\"" +
        ' must start and end with an alphanumeric character',
};
// TODO(kimwnasptd): We only use this validator, do we need the others?
export const dns1035Validator = {
    regex: '^[a-z]([-a-z0-9]*[a-z0-9])?$',
    help: $localize `Name must consist of lowercase alphanumeric characters or '-',
    start with an alphabetic character, and end with an alphanumeric character.`,
};
export const volSizeValidator = {
    regex: '^[0-9]+(E|Ei|P|Pi|T|Ti|G|Gi|M|Mi|K|Ki)?$',
    help: 'Invalid volume size: Should be an integer, or integer followed ' +
        'by a valid unit',
};
export const memoryValidator = {
    regex: '^[0-9]+(' +
        '(([.][0-9]+)(E|Ei|P|Pi|T|Ti|G|Gi|M|Mi|K|Ki))' +
        '|' +
        '(E|Ei|P|Pi|T|Ti|G|Gi|M|Mi|K|Ki)' +
        ')?$',
    help: 'Invalid memory size: Should be an integer, or fixed-point integer' +
        ' followed by a valid unit',
};
export const cpuValidator = {
    regex: '^[0-9]*(m|[.][0-9]+)?$',
    help: 'Invalid cpu limit: Should be a fixed-point integer or an integer ' +
        "followed by 'm'",
};
export const DEBOUNCE_TIME = 500;
// Create an async validator that adds debounce time to synchronous validators
export function mergeAndDebounceValidators(syncValidators) {
    return (control) => {
        return timer(DEBOUNCE_TIME).pipe(switchMap(() => {
            // Run all synchronous validators and return their concatenated output
            let validationResult = {};
            for (const validator of syncValidators) {
                const res = validator(control);
                // No errors
                if (res === null) {
                    continue;
                }
                validationResult = Object.assign({}, res, validationResult);
            }
            // Return the concatenated result from all the validators
            if (Object.keys(validationResult).length === 0) {
                return observableOf(null);
            }
            return observableOf(validationResult);
        }));
    };
}
// Name Validators
export const MAX_NAME_LENGTH = 50;
export function getNameError(nameCtrl, resource) {
    if (nameCtrl.hasError('existingName')) {
        return `${resource} "${nameCtrl.value}" already exists`;
    }
    else if (nameCtrl.hasError('pattern')) {
        // TODO: "pattern", is generic error, this might break in the future
        return dns1035Validator.help;
    }
    else if (nameCtrl.hasError('maxlength')) {
        return $localize `Name is too long`;
    }
    else {
        return $localize `Name cannot be empty`;
    }
}
export function getExistingNameValidator(names) {
    return (control) => {
        return names.has(control.value) ? { existingName: true } : null;
    };
}
export function getNameSyncValidators() {
    return [Validators.required];
}
export function getNameAsyncValidators(existingNames = new Set(), maxLength = MAX_NAME_LENGTH) {
    return [
        mergeAndDebounceValidators([
            Validators.pattern(dns1035Validator.regex),
            Validators.maxLength(maxLength),
            getExistingNameValidator(existingNames),
        ]),
    ];
}
// Rok
export function getRokUrlError(rokUrlCtrl) {
    if (rokUrlCtrl.hasError('required')) {
        return 'Rok URL cannot be empty';
    }
    if (rokUrlCtrl.hasError('invalidRokUrl')) {
        return 'Not a valid Rok URL';
    }
}
export function rokUrlValidator(rok) {
    return (control) => {
        const url = control.value;
        // Don't return error if the url is empty
        if (url.length === 0) {
            return of(null);
        }
        // Ensure a protocol is given
        // Don't fire while the user is writting
        return timer(DEBOUNCE_TIME).pipe(switchMap(() => {
            return rok.getObjectMetadata(url, false).pipe(map(resp => {
                return null;
            }), catchError((msg) => {
                return observableOf({ invalidRokUrl: true });
            }));
        }));
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2t1YmVmbG93L3NyYy9saWIvZm9ybS92YWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFPTCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQWMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzVELE1BQU0sZUFBZSxHQUFHLCtCQUErQixDQUFDO0FBT3hELE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFlO0lBQzFDLEtBQUssRUFBRSxHQUFHLEdBQUcsZUFBZSxHQUFHLE1BQU0sR0FBRyxlQUFlLEdBQUcsSUFBSSxHQUFHLEdBQUc7SUFDcEUsSUFBSSxFQUNGLHNFQUFzRTtRQUN0RSxvREFBb0Q7Q0FDdkQsQ0FBQztBQUVGLHVFQUF1RTtBQUN2RSxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBZTtJQUMxQyxLQUFLLEVBQUUsOEJBQThCO0lBQ3JDLElBQUksRUFBRSxTQUFTLENBQUE7Z0ZBQytEO0NBQy9FLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBZTtJQUMxQyxLQUFLLEVBQUUsMENBQTBDO0lBQ2pELElBQUksRUFDRixpRUFBaUU7UUFDakUsaUJBQWlCO0NBQ3BCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQWU7SUFDekMsS0FBSyxFQUNILFVBQVU7UUFDViw4Q0FBOEM7UUFDOUMsR0FBRztRQUNILGlDQUFpQztRQUNqQyxLQUFLO0lBQ1AsSUFBSSxFQUNGLG1FQUFtRTtRQUNuRSwyQkFBMkI7Q0FDOUIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBZTtJQUN0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Q0FBQztLQUNsQztJQUVELElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtRQUN4QyxPQUFPLHFCQUFxQixDQUFDO0tBQzlCO0FBQ0gsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsR0FBZTtJQUM3QyxPQUFPLENBQUMsT0FBd0IsRUFBdUMsRUFBRTtRQUN2RSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRTFCLHlDQUF5QztRQUN6QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCO1FBRUQsNkJBQTZCO1FBQzdCLHdDQUF3QztRQUN4QyxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDYixPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTtnQkFDekIsT0FBTyxZQUFZLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBc3luY1ZhbGlkYXRvckZuLFxuICBWYWxpZGF0aW9uRXJyb3JzLFxuICBWYWxpZGF0b3JGbixcbiAgQWJzdHJhY3RDb250cm9sLFxuICBGb3JtR3JvdXAsXG4gIEZvcm1Db250cm9sLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCB0aW1lciwgb2YgYXMgb2JzZXJ2YWJsZU9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJva1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yb2svcm9rLnNlcnZpY2UnO1xuXG5jb25zdCBkbnMxMTIzTGFiZWxGbXQgPSAnW2EtejAtOV0oWy1hLXowLTldKlthLXowLTldKT8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElWYWxpZGF0b3Ige1xuICByZWdleDogc3RyaW5nO1xuICBoZWxwOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBkbnMxMTIzVmFsaWRhdG9yOiBJVmFsaWRhdG9yID0ge1xuICByZWdleDogJ14nICsgZG5zMTEyM0xhYmVsRm10ICsgJyhcXFxcLicgKyBkbnMxMTIzTGFiZWxGbXQgKyAnKSonICsgJyQnLFxuICBoZWxwOlxuICAgIFwiTmFtZSBtdXN0IGNvbnNpc3Qgb2YgbG93ZXJjYXNlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIG9yICctJywgYW5kXFxcIlwiICtcbiAgICAnIG11c3Qgc3RhcnQgYW5kIGVuZCB3aXRoIGFuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxufTtcblxuLy8gVE9ETyhraW13bmFzcHRkKTogV2Ugb25seSB1c2UgdGhpcyB2YWxpZGF0b3IsIGRvIHdlIG5lZWQgdGhlIG90aGVycz9cbmV4cG9ydCBjb25zdCBkbnMxMDM1VmFsaWRhdG9yOiBJVmFsaWRhdG9yID0ge1xuICByZWdleDogJ15bYS16XShbLWEtejAtOV0qW2EtejAtOV0pPyQnLFxuICBoZWxwOiAkbG9jYWxpemVgTmFtZSBtdXN0IGNvbnNpc3Qgb2YgbG93ZXJjYXNlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIG9yICctJyxcbiAgICBzdGFydCB3aXRoIGFuIGFscGhhYmV0aWMgY2hhcmFjdGVyLCBhbmQgZW5kIHdpdGggYW4gYWxwaGFudW1lcmljIGNoYXJhY3Rlci5gLFxufTtcblxuZXhwb3J0IGNvbnN0IHZvbFNpemVWYWxpZGF0b3I6IElWYWxpZGF0b3IgPSB7XG4gIHJlZ2V4OiAnXlswLTldKyhFfEVpfFB8UGl8VHxUaXxHfEdpfE18TWl8S3xLaSk/JCcsXG4gIGhlbHA6XG4gICAgJ0ludmFsaWQgdm9sdW1lIHNpemU6IFNob3VsZCBiZSBhbiBpbnRlZ2VyLCBvciBpbnRlZ2VyIGZvbGxvd2VkICcgK1xuICAgICdieSBhIHZhbGlkIHVuaXQnLFxufTtcblxuZXhwb3J0IGNvbnN0IG1lbW9yeVZhbGlkYXRvcjogSVZhbGlkYXRvciA9IHtcbiAgcmVnZXg6XG4gICAgJ15bMC05XSsoJyArXG4gICAgJygoWy5dWzAtOV0rKShFfEVpfFB8UGl8VHxUaXxHfEdpfE18TWl8S3xLaSkpJyArXG4gICAgJ3wnICtcbiAgICAnKEV8RWl8UHxQaXxUfFRpfEd8R2l8TXxNaXxLfEtpKScgK1xuICAgICcpPyQnLFxuICBoZWxwOlxuICAgICdJbnZhbGlkIG1lbW9yeSBzaXplOiBTaG91bGQgYmUgYW4gaW50ZWdlciwgb3IgZml4ZWQtcG9pbnQgaW50ZWdlcicgK1xuICAgICcgZm9sbG93ZWQgYnkgYSB2YWxpZCB1bml0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBjcHVWYWxpZGF0b3I6IElWYWxpZGF0b3IgPSB7XG4gIHJlZ2V4OiAnXlswLTldKihtfFsuXVswLTldKyk/JCcsXG4gIGhlbHA6XG4gICAgJ0ludmFsaWQgY3B1IGxpbWl0OiBTaG91bGQgYmUgYSBmaXhlZC1wb2ludCBpbnRlZ2VyIG9yIGFuIGludGVnZXIgJyArXG4gICAgXCJmb2xsb3dlZCBieSAnbSdcIixcbn07XG5cbmV4cG9ydCBjb25zdCBERUJPVU5DRV9USU1FID0gNTAwO1xuXG4vLyBDcmVhdGUgYW4gYXN5bmMgdmFsaWRhdG9yIHRoYXQgYWRkcyBkZWJvdW5jZSB0aW1lIHRvIHN5bmNocm9ub3VzIHZhbGlkYXRvcnNcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUFuZERlYm91bmNlVmFsaWRhdG9ycyhcbiAgc3luY1ZhbGlkYXRvcnM6IFZhbGlkYXRvckZuW10sXG4pOiBBc3luY1ZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiA9PiB7XG4gICAgcmV0dXJuIHRpbWVyKERFQk9VTkNFX1RJTUUpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICAvLyBSdW4gYWxsIHN5bmNocm9ub3VzIHZhbGlkYXRvcnMgYW5kIHJldHVybiB0aGVpciBjb25jYXRlbmF0ZWQgb3V0cHV0XG4gICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0OiBWYWxpZGF0aW9uRXJyb3JzID0ge307XG4gICAgICAgIGZvciAoY29uc3QgdmFsaWRhdG9yIG9mIHN5bmNWYWxpZGF0b3JzKSB7XG4gICAgICAgICAgY29uc3QgcmVzID0gdmFsaWRhdG9yKGNvbnRyb2wpO1xuXG4gICAgICAgICAgLy8gTm8gZXJyb3JzXG4gICAgICAgICAgaWYgKHJlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IE9iamVjdC5hc3NpZ24oe30sIHJlcywgdmFsaWRhdGlvblJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gdGhlIGNvbmNhdGVuYXRlZCByZXN1bHQgZnJvbSBhbGwgdGhlIHZhbGlkYXRvcnNcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHZhbGlkYXRpb25SZXN1bHQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHZhbGlkYXRpb25SZXN1bHQpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfTtcbn1cblxuLy8gTmFtZSBWYWxpZGF0b3JzXG5leHBvcnQgY29uc3QgTUFYX05BTUVfTEVOR1RIID0gNTA7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lRXJyb3IobmFtZUN0cmw6IEFic3RyYWN0Q29udHJvbCwgcmVzb3VyY2U6IHN0cmluZykge1xuICBpZiAobmFtZUN0cmwuaGFzRXJyb3IoJ2V4aXN0aW5nTmFtZScpKSB7XG4gICAgcmV0dXJuIGAke3Jlc291cmNlfSBcIiR7bmFtZUN0cmwudmFsdWV9XCIgYWxyZWFkeSBleGlzdHNgO1xuICB9IGVsc2UgaWYgKG5hbWVDdHJsLmhhc0Vycm9yKCdwYXR0ZXJuJykpIHtcbiAgICAvLyBUT0RPOiBcInBhdHRlcm5cIiwgaXMgZ2VuZXJpYyBlcnJvciwgdGhpcyBtaWdodCBicmVhayBpbiB0aGUgZnV0dXJlXG4gICAgcmV0dXJuIGRuczEwMzVWYWxpZGF0b3IuaGVscDtcbiAgfSBlbHNlIGlmIChuYW1lQ3RybC5oYXNFcnJvcignbWF4bGVuZ3RoJykpIHtcbiAgICByZXR1cm4gJGxvY2FsaXplYE5hbWUgaXMgdG9vIGxvbmdgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAkbG9jYWxpemVgTmFtZSBjYW5ub3QgYmUgZW1wdHlgO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeGlzdGluZ05hbWVWYWxpZGF0b3IobmFtZXM6IFNldDxzdHJpbmc+KTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xuICAgIHJldHVybiBuYW1lcy5oYXMoY29udHJvbC52YWx1ZSkgPyB7IGV4aXN0aW5nTmFtZTogdHJ1ZSB9IDogbnVsbDtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVTeW5jVmFsaWRhdG9ycygpIHtcbiAgcmV0dXJuIFtWYWxpZGF0b3JzLnJlcXVpcmVkXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWVBc3luY1ZhbGlkYXRvcnMoXG4gIGV4aXN0aW5nTmFtZXMgPSBuZXcgU2V0PHN0cmluZz4oKSxcbiAgbWF4TGVuZ3RoID0gTUFYX05BTUVfTEVOR1RILFxuKTogQXN5bmNWYWxpZGF0b3JGbltdIHtcbiAgcmV0dXJuIFtcbiAgICBtZXJnZUFuZERlYm91bmNlVmFsaWRhdG9ycyhbXG4gICAgICBWYWxpZGF0b3JzLnBhdHRlcm4oZG5zMTAzNVZhbGlkYXRvci5yZWdleCksXG4gICAgICBWYWxpZGF0b3JzLm1heExlbmd0aChtYXhMZW5ndGgpLFxuICAgICAgZ2V0RXhpc3RpbmdOYW1lVmFsaWRhdG9yKGV4aXN0aW5nTmFtZXMpLFxuICAgIF0pLFxuICBdO1xufVxuXG4vLyBSb2tcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb2tVcmxFcnJvcihyb2tVcmxDdHJsOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgaWYgKHJva1VybEN0cmwuaGFzRXJyb3IoJ3JlcXVpcmVkJykpIHtcbiAgICByZXR1cm4gJ1JvayBVUkwgY2Fubm90IGJlIGVtcHR5JztcbiAgfVxuXG4gIGlmIChyb2tVcmxDdHJsLmhhc0Vycm9yKCdpbnZhbGlkUm9rVXJsJykpIHtcbiAgICByZXR1cm4gJ05vdCBhIHZhbGlkIFJvayBVUkwnO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb2tVcmxWYWxpZGF0b3Iocm9rOiBSb2tTZXJ2aWNlKTogQXN5bmNWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gPT4ge1xuICAgIGNvbnN0IHVybCA9IGNvbnRyb2wudmFsdWU7XG5cbiAgICAvLyBEb24ndCByZXR1cm4gZXJyb3IgaWYgdGhlIHVybCBpcyBlbXB0eVxuICAgIGlmICh1cmwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gb2YobnVsbCk7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIGEgcHJvdG9jb2wgaXMgZ2l2ZW5cbiAgICAvLyBEb24ndCBmaXJlIHdoaWxlIHRoZSB1c2VyIGlzIHdyaXR0aW5nXG4gICAgcmV0dXJuIHRpbWVyKERFQk9VTkNFX1RJTUUpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gcm9rLmdldE9iamVjdE1ldGFkYXRhKHVybCwgZmFsc2UpLnBpcGUoXG4gICAgICAgICAgbWFwKHJlc3AgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigobXNnOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YoeyBpbnZhbGlkUm9rVXJsOiB0cnVlIH0pO1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgKTtcbiAgfTtcbn1cbiJdfQ==