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
import type { CommitData } from './CommitData';
import {
    CommitDataFromJSON,
    CommitDataFromJSONTyped,
    CommitDataToJSON,
} from './CommitData';

/**
 * 
 * @export
 * @interface CommitDataPaginator
 */
export interface CommitDataPaginator {
    /**
     * 
     * @type {number}
     * @memberof CommitDataPaginator
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof CommitDataPaginator
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof CommitDataPaginator
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof CommitDataPaginator
     */
    limit: number;
    /**
     * 
     * @type {Array<CommitData>}
     * @memberof CommitDataPaginator
     */
    results: Array<CommitData>;
}

/**
 * Check if a given object implements the CommitDataPaginator interface.
 */
export function instanceOfCommitDataPaginator(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "total" in value;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "results" in value;

    return isInstance;
}

export function CommitDataPaginatorFromJSON(json: any): CommitDataPaginator {
    return CommitDataPaginatorFromJSONTyped(json, false);
}

export function CommitDataPaginatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommitDataPaginator {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': json['count'],
        'total': json['total'],
        'offset': json['offset'],
        'limit': json['limit'],
        'results': ((json['results'] as Array<any>).map(CommitDataFromJSON)),
    };
}

export function CommitDataPaginatorToJSON(value?: CommitDataPaginator | null): any {
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
        'results': ((value.results as Array<any>).map(CommitDataToJSON)),
    };
}
