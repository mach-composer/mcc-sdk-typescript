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

import { RequestFile } from './models';
import { Organization } from './organization';

export class OrganizationPaginator {
    'count': number;
    'total': number;
    'offset': number = 0;
    'limit': number = 20;
    'results': Array<Organization>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Organization>"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationPaginator.attributeTypeMap;
    }
}

