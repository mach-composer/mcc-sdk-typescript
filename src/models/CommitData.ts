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
import type { CommitDataAuthor } from './CommitDataAuthor';
import {
    CommitDataAuthorFromJSON,
    CommitDataAuthorFromJSONTyped,
    CommitDataAuthorToJSON,
} from './CommitDataAuthor';

/**
 * 
 * @export
 * @interface CommitData
 */
export interface CommitData {
    /**
     * 
     * @type {string}
     * @memberof CommitData
     */
    commit: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommitData
     */
    parents?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CommitData
     */
    subject: string;
    /**
     * 
     * @type {CommitDataAuthor}
     * @memberof CommitData
     */
    author: CommitDataAuthor;
    /**
     * 
     * @type {CommitDataAuthor}
     * @memberof CommitData
     */
    committer: CommitDataAuthor;
    /**
     * 
     * @type {Date}
     * @memberof CommitData
     */
    createdAt?: Date;
}

/**
 * Check if a given object implements the CommitData interface.
 */
export function instanceOfCommitData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "commit" in value;
    isInstance = isInstance && "subject" in value;
    isInstance = isInstance && "author" in value;
    isInstance = isInstance && "committer" in value;

    return isInstance;
}

export function CommitDataFromJSON(json: any): CommitData {
    return CommitDataFromJSONTyped(json, false);
}

export function CommitDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommitData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commit': json['commit'],
        'parents': !exists(json, 'parents') ? undefined : json['parents'],
        'subject': json['subject'],
        'author': CommitDataAuthorFromJSON(json['author']),
        'committer': CommitDataAuthorFromJSON(json['committer']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
    };
}

export function CommitDataToJSON(value?: CommitData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commit': value.commit,
        'parents': value.parents,
        'subject': value.subject,
        'author': CommitDataAuthorToJSON(value.author),
        'committer': CommitDataAuthorToJSON(value.committer),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}

