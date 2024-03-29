/* tslint:disable */
/* eslint-disable */
/**
 * MACH composer Cloud (MCC) Public API
 * # Introduction  MACH composer Cloud is a platform and API to facilitate and coordinate work across teams that build composable architectures using MACH technology.  All operations available in MACH composer cloud are available through this API. For more information about using it in your MACH architecture, have a look at the [documentation website](https://docs.machcomposer.io/cloud/index.html). 
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: mach@labdigital.nl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ErrorObject } from './ErrorObject';
import {
    ErrorObjectFromJSON,
    ErrorObjectFromJSONTyped,
    ErrorObjectToJSON,
} from './ErrorObject';

/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {number}
     * @memberof ModelError
     */
    status: number;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    description?: string;
    /**
     * 
     * @type {Array<ErrorObject>}
     * @memberof ModelError
     */
    errors?: Array<ErrorObject>;
}

/**
 * Check if a given object implements the ModelError interface.
 */
export function instanceOfModelError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "summary" in value;

    return isInstance;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'summary': json['summary'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(ErrorObjectFromJSON)),
    };
}

export function ModelErrorToJSON(value?: ModelError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'summary': value.summary,
        'description': value.description,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(ErrorObjectToJSON)),
    };
}

