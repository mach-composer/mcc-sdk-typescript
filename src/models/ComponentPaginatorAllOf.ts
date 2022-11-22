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
import type { Component } from './Component';
import {
    ComponentFromJSON,
    ComponentFromJSONTyped,
    ComponentToJSON,
} from './Component';

/**
 * 
 * @export
 * @interface ComponentPaginatorAllOf
 */
export interface ComponentPaginatorAllOf {
    /**
     * 
     * @type {Array<Component>}
     * @memberof ComponentPaginatorAllOf
     */
    results?: Array<Component>;
}

/**
 * Check if a given object implements the ComponentPaginatorAllOf interface.
 */
export function instanceOfComponentPaginatorAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ComponentPaginatorAllOfFromJSON(json: any): ComponentPaginatorAllOf {
    return ComponentPaginatorAllOfFromJSONTyped(json, false);
}

export function ComponentPaginatorAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComponentPaginatorAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(ComponentFromJSON)),
    };
}

export function ComponentPaginatorAllOfToJSON(value?: ComponentPaginatorAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(ComponentToJSON)),
    };
}

