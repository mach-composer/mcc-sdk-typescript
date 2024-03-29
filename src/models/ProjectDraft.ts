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
/**
 * 
 * @export
 * @interface ProjectDraft
 */
export interface ProjectDraft {
    /**
     * The organization key (must be unique)
     * @type {string}
     * @memberof ProjectDraft
     */
    key: string;
    /**
     * The name of the organization
     * @type {string}
     * @memberof ProjectDraft
     */
    name: string;
}

/**
 * Check if a given object implements the ProjectDraft interface.
 */
export function instanceOfProjectDraft(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ProjectDraftFromJSON(json: any): ProjectDraft {
    return ProjectDraftFromJSONTyped(json, false);
}

export function ProjectDraftFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectDraft {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'name': json['name'],
    };
}

export function ProjectDraftToJSON(value?: ProjectDraft | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'name': value.name,
    };
}

