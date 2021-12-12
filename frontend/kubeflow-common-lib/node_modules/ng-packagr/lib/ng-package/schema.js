"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNgPackageSchema = void 0;
const ajv_1 = require("ajv");
const log = require("../utils/log");
/** Lazily initialized ajv validator instance. */
let ajvValidator = null;
/**
 * Validates the `ngPackageJson` value against the JSON schema using ajv. An error is thrown if
 * schema errors are found.
 *
 * @param ngPackageJson The value to validate.
 */
function validateNgPackageSchema(ngPackageJson) {
    const validate = getNgPackageSchemaValidator();
    const isValid = validate(ngPackageJson);
    if (!isValid) {
        throw new Error(`Configuration doesn't match the required schema.\n${formatSchemaValidationErrors(validate.errors)}`);
    }
}
exports.validateNgPackageSchema = validateNgPackageSchema;
function formatSchemaValidationErrors(errors) {
    return errors
        .map(err => {
        let message = `Data path ${JSON.stringify(err.instancePath)} ${err.message}`;
        if (err.keyword === 'additionalProperties') {
            message += ` (${err.params.additionalProperty})`;
        }
        return message + '.';
    })
        .join('\n');
}
/**
 * Returns an initialized ajv validator for the ng-package JSON schema.
 */
function getNgPackageSchemaValidator() {
    if (ajvValidator !== null) {
        return ajvValidator;
    }
    const _ajv = new ajv_1.default({
        useDefaults: true,
    });
    // Add handler for x-deprecated fields
    _ajv.addKeyword({
        keyword: 'x-deprecated',
        validate: (schema, _data, _parentSchema, dataCxt) => {
            if (schema) {
                log.warn(`Option "${dataCxt.parentDataProperty}" is deprecated${typeof schema == 'string' ? ': ' + schema : '.'}`);
            }
            return true;
        },
        errors: false,
    });
    const ngPackageSchemaJson = require('../../ng-package.schema.json');
    ajvValidator = _ajv.compile(ngPackageSchemaJson);
    return ajvValidator;
}
//# sourceMappingURL=schema.js.map