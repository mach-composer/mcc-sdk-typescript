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


import * as runtime from '../runtime';
import type {
  ErrorForbidden,
  ErrorUnauthorized,
  MyAccountInformation200Response,
} from '../models';
import {
    ErrorForbiddenFromJSON,
    ErrorForbiddenToJSON,
    ErrorUnauthorizedFromJSON,
    ErrorUnauthorizedToJSON,
    MyAccountInformation200ResponseFromJSON,
    MyAccountInformation200ResponseToJSON,
} from '../models';

/**
 * 
 */
export class MyAccountApi extends runtime.BaseAPI {

    /**
     * Return user information from current user
     * Get user information
     */
    async myAccountInformationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MyAccountInformation200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", []);
        }

        const response = await this.request({
            path: `/account/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MyAccountInformation200ResponseFromJSON(jsonValue));
    }

    /**
     * Return user information from current user
     * Get user information
     */
    async myAccountInformation(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MyAccountInformation200Response> {
        const response = await this.myAccountInformationRaw(initOverrides);
        return await response.value();
    }

}
