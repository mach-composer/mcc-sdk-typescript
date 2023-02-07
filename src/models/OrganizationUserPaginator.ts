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
import type { OrganizationUser } from './OrganizationUser';
import {
    OrganizationUserFromJSON,
    OrganizationUserFromJSONTyped,
    OrganizationUserToJSON,
} from './OrganizationUser';

/**
 * 
 * @export
 * @interface OrganizationUserPaginator
 */
export interface OrganizationUserPaginator {
    /**
     * Number of items in the current page
     * @type {number}
     * @memberof OrganizationUserPaginator
     */
    count: number;
    /**
     * Total number of items found
     * @type {number}
     * @memberof OrganizationUserPaginator
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof OrganizationUserPaginator
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof OrganizationUserPaginator
     */
    limit: number;
    /**
     * 
     * @type {Array<OrganizationUser>}
     * @memberof OrganizationUserPaginator
     */
    results: Array<OrganizationUser>;
}

/**
 * Check if a given object implements the OrganizationUserPaginator interface.
 */
export function instanceOfOrganizationUserPaginator(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "results" in value;

    return isInstance;
}

export function OrganizationUserPaginatorFromJSON(json: any): OrganizationUserPaginator {
    return OrganizationUserPaginatorFromJSONTyped(json, false);
}

export function OrganizationUserPaginatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationUserPaginator {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'total': json['total'],
        'offset': json['offset'],
        'limit': json['limit'],
        'results': ((json['results'] as Array<any>).map(OrganizationUserFromJSON)),
    };
}

export function OrganizationUserPaginatorToJSON(value?: OrganizationUserPaginator | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'total': value.total,
        'offset': value.offset,
        'limit': value.limit,
        'results': ((value.results as Array<any>).map(OrganizationUserToJSON)),
    };
}

