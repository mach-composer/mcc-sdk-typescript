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
 * @interface ComponentVersionAllOf
 */
export interface ComponentVersionAllOf {
    /**
     * key of the component
     * @type {string}
     * @memberof ComponentVersionAllOf
     */
    component: string;
    /**
     * version of the component
     * @type {string}
     * @memberof ComponentVersionAllOf
     */
    version: string;
    /**
     * branch of the version
     * @type {string}
     * @memberof ComponentVersionAllOf
     */
    branch?: string;
}

/**
 * Check if a given object implements the ComponentVersionAllOf interface.
 */
export function instanceOfComponentVersionAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "component" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function ComponentVersionAllOfFromJSON(json: any): ComponentVersionAllOf {
    return ComponentVersionAllOfFromJSONTyped(json, false);
}

export function ComponentVersionAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComponentVersionAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'component': json['component'],
        'version': json['version'],
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
    };
}

export function ComponentVersionAllOfToJSON(value?: ComponentVersionAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'component': value.component,
        'version': value.version,
        'branch': value.branch,
    };
}

