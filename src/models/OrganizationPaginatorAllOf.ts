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
import type { Organization } from './Organization';
import {
    OrganizationFromJSON,
    OrganizationFromJSONTyped,
    OrganizationToJSON,
} from './Organization';

/**
 * 
 * @export
 * @interface OrganizationPaginatorAllOf
 */
export interface OrganizationPaginatorAllOf {
    /**
     * 
     * @type {Array<Organization>}
     * @memberof OrganizationPaginatorAllOf
     */
    results?: Array<Organization>;
}

/**
 * Check if a given object implements the OrganizationPaginatorAllOf interface.
 */
export function instanceOfOrganizationPaginatorAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganizationPaginatorAllOfFromJSON(json: any): OrganizationPaginatorAllOf {
    return OrganizationPaginatorAllOfFromJSONTyped(json, false);
}

export function OrganizationPaginatorAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationPaginatorAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(OrganizationFromJSON)),
    };
}

export function OrganizationPaginatorAllOfToJSON(value?: OrganizationPaginatorAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(OrganizationToJSON)),
    };
}

