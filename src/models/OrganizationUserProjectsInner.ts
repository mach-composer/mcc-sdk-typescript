/* tslint:disable */
/* eslint-disable */
/**
 * MCC Public API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface OrganizationUserProjectsInner
 */
export interface OrganizationUserProjectsInner {
    /**
     * 
     * @type {string}
     * @memberof OrganizationUserProjectsInner
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationUserProjectsInner
     */
    key?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OrganizationUserProjectsInner
     */
    scopes?: Array<string>;
}

/**
 * Check if a given object implements the OrganizationUserProjectsInner interface.
 */
export function instanceOfOrganizationUserProjectsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganizationUserProjectsInnerFromJSON(json: any): OrganizationUserProjectsInner {
    return OrganizationUserProjectsInnerFromJSONTyped(json, false);
}

export function OrganizationUserProjectsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationUserProjectsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'scopes': !exists(json, 'scopes') ? undefined : json['scopes'],
    };
}

export function OrganizationUserProjectsInnerToJSON(value?: OrganizationUserProjectsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'key': value.key,
        'scopes': value.scopes,
    };
}

