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
 * @interface CommitDataAuthor
 */
export interface CommitDataAuthor {
    /**
     * 
     * @type {string}
     * @memberof CommitDataAuthor
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CommitDataAuthor
     */
    email: string;
    /**
     * 
     * @type {Date}
     * @memberof CommitDataAuthor
     */
    date: Date;
}

/**
 * Check if a given object implements the CommitDataAuthor interface.
 */
export function instanceOfCommitDataAuthor(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "date" in value;

    return isInstance;
}

export function CommitDataAuthorFromJSON(json: any): CommitDataAuthor {
    return CommitDataAuthorFromJSONTyped(json, false);
}

export function CommitDataAuthorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommitDataAuthor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'email': json['email'],
        'date': (new Date(json['date'])),
    };
}

export function CommitDataAuthorToJSON(value?: CommitDataAuthor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'email': value.email,
        'date': (value.date.toISOString()),
    };
}

