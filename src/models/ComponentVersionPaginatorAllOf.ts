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
import type { ComponentVersion } from './ComponentVersion';
import {
    ComponentVersionFromJSON,
    ComponentVersionFromJSONTyped,
    ComponentVersionToJSON,
} from './ComponentVersion';

/**
 * 
 * @export
 * @interface ComponentVersionPaginatorAllOf
 */
export interface ComponentVersionPaginatorAllOf {
    /**
     * 
     * @type {Array<ComponentVersion>}
     * @memberof ComponentVersionPaginatorAllOf
     */
    results?: Array<ComponentVersion>;
}

/**
 * Check if a given object implements the ComponentVersionPaginatorAllOf interface.
 */
export function instanceOfComponentVersionPaginatorAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ComponentVersionPaginatorAllOfFromJSON(json: any): ComponentVersionPaginatorAllOf {
    return ComponentVersionPaginatorAllOfFromJSONTyped(json, false);
}

export function ComponentVersionPaginatorAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComponentVersionPaginatorAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(ComponentVersionFromJSON)),
    };
}

export function ComponentVersionPaginatorAllOfToJSON(value?: ComponentVersionPaginatorAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(ComponentVersionToJSON)),
    };
}

