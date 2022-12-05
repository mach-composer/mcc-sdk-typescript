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


import * as runtime from '../runtime';

export interface AuthorizeRequest {
    responseType: string;
    scope: string;
    redirectUri: string;
    state: string;
    codeChallenge: string;
    codeChallengeMethod: string;
    provider?: string;
}

export interface GetAuthTokenRequest {
    grantType?: string;
    clientId?: string;
    codeVerifier?: string;
    code?: string;
    redirectUri?: string;
}

export interface IntrospectTokenRequest {
    token?: string;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Start authorization flow
     */
    async authorizeRaw(requestParameters: AuthorizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.responseType === null || requestParameters.responseType === undefined) {
            throw new runtime.RequiredError('responseType','Required parameter requestParameters.responseType was null or undefined when calling authorize.');
        }

        if (requestParameters.scope === null || requestParameters.scope === undefined) {
            throw new runtime.RequiredError('scope','Required parameter requestParameters.scope was null or undefined when calling authorize.');
        }

        if (requestParameters.redirectUri === null || requestParameters.redirectUri === undefined) {
            throw new runtime.RequiredError('redirectUri','Required parameter requestParameters.redirectUri was null or undefined when calling authorize.');
        }

        if (requestParameters.state === null || requestParameters.state === undefined) {
            throw new runtime.RequiredError('state','Required parameter requestParameters.state was null or undefined when calling authorize.');
        }

        if (requestParameters.codeChallenge === null || requestParameters.codeChallenge === undefined) {
            throw new runtime.RequiredError('codeChallenge','Required parameter requestParameters.codeChallenge was null or undefined when calling authorize.');
        }

        if (requestParameters.codeChallengeMethod === null || requestParameters.codeChallengeMethod === undefined) {
            throw new runtime.RequiredError('codeChallengeMethod','Required parameter requestParameters.codeChallengeMethod was null or undefined when calling authorize.');
        }

        const queryParameters: any = {};

        if (requestParameters.responseType !== undefined) {
            queryParameters['response_type'] = requestParameters.responseType;
        }

        if (requestParameters.scope !== undefined) {
            queryParameters['scope'] = requestParameters.scope;
        }

        if (requestParameters.redirectUri !== undefined) {
            queryParameters['redirect_uri'] = requestParameters.redirectUri;
        }

        if (requestParameters.state !== undefined) {
            queryParameters['state'] = requestParameters.state;
        }

        if (requestParameters.codeChallenge !== undefined) {
            queryParameters['code_challenge'] = requestParameters.codeChallenge;
        }

        if (requestParameters.codeChallengeMethod !== undefined) {
            queryParameters['code_challenge_method'] = requestParameters.codeChallengeMethod;
        }

        if (requestParameters.provider !== undefined) {
            queryParameters['provider'] = requestParameters.provider;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/authorize`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Start authorization flow
     */
    async authorize(requestParameters: AuthorizeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.authorizeRaw(requestParameters, initOverrides);
    }

    /**
     * Return a new token
     */
    async getAuthTokenRaw(requestParameters: GetAuthTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.grantType !== undefined) {
            queryParameters['grant_type'] = requestParameters.grantType;
        }

        if (requestParameters.clientId !== undefined) {
            queryParameters['client_id'] = requestParameters.clientId;
        }

        if (requestParameters.codeVerifier !== undefined) {
            queryParameters['code_verifier'] = requestParameters.codeVerifier;
        }

        if (requestParameters.code !== undefined) {
            queryParameters['code'] = requestParameters.code;
        }

        if (requestParameters.redirectUri !== undefined) {
            queryParameters['redirect_uri'] = requestParameters.redirectUri;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/oauth/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Return a new token
     */
    async getAuthToken(requestParameters: GetAuthTokenRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.getAuthTokenRaw(requestParameters, initOverrides);
    }

    /**
     * Introspect an existing token
     */
    async introspectTokenRaw(requestParameters: IntrospectTokenRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/oauth/introspect`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Introspect an existing token
     */
    async introspectToken(requestParameters: IntrospectTokenRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.introspectTokenRaw(requestParameters, initOverrides);
    }

}
