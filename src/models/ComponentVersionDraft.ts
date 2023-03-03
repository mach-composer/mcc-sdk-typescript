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
 * @interface ComponentVersionDraft
 */
export interface ComponentVersionDraft {
    /**
     * 
     * @type {string}
     * @memberof ComponentVersionDraft
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof ComponentVersionDraft
     */
    branch: string;
}

/**
 * Check if a given object implements the ComponentVersionDraft interface.
 */
export function instanceOfComponentVersionDraft(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "branch" in value;

    return isInstance;
}

export function ComponentVersionDraftFromJSON(json: any): ComponentVersionDraft {
    return ComponentVersionDraftFromJSONTyped(json, false);
}

export function ComponentVersionDraftFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComponentVersionDraft {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'version': json['version'],
        'branch': json['branch'],
    };
}

export function ComponentVersionDraftToJSON(value?: ComponentVersionDraft | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': value.version,
        'branch': value.branch,
    };
}

