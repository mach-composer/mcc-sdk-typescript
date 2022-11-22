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
 * @interface ComponentVersionCommits
 */
export interface ComponentVersionCommits {
    /**
     * 
     * @type {Array<CommitData>}
     * @memberof ComponentVersionCommits
     */
    commits: Array<CommitData>;
}

/**
 * Check if a given object implements the ComponentVersionCommits interface.
 */
export function instanceOfComponentVersionCommits(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "commits" in value;

    return isInstance;
}

export function ComponentVersionCommitsFromJSON(json: any): ComponentVersionCommits {
    return ComponentVersionCommitsFromJSONTyped(json, false);
}

export function ComponentVersionCommitsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComponentVersionCommits {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commits': ((json['commits'] as Array<any>).map(CommitDataFromJSON)),
    };
}

export function ComponentVersionCommitsToJSON(value?: ComponentVersionCommits | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commits': ((value.commits as Array<any>).map(CommitDataToJSON)),
    };
}

