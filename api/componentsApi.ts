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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CommitDataPaginator } from '../model/commitDataPaginator';
import { Component } from '../model/component';
import { ComponentDraft } from '../model/componentDraft';
import { ComponentPaginator } from '../model/componentPaginator';
import { ComponentVersion } from '../model/componentVersion';
import { ComponentVersionCommits } from '../model/componentVersionCommits';
import { ComponentVersionDraft } from '../model/componentVersionDraft';
import { ComponentVersionPaginator } from '../model/componentVersionPaginator';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.mach.cloud';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ComponentsApiApiKeys {
}

export class ComponentsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'basicAuth': new HttpBasicAuth(),
        'bearerAuth': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(username: string, password: string, basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            this.username = basePathOrUsername;
            this.password = password
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ComponentsApiApiKeys, value: string) {
        (this.authentications as any)[ComponentsApiApiKeys[key]].apiKey = value;
    }

    set username(username: string) {
        this.authentications.basicAuth.username = username;
    }

    set password(password: string) {
        this.authentications.basicAuth.password = password;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearerAuth.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Create component
     * @param organization Organization Key
     * @param project Project Key
     * @param componentDraft 
     */
    public async componentCreate (organization: string, project: string, componentDraft: ComponentDraft, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Component;  }> {
        const localVarPath = this.basePath + '/{organization}/projects/{project}/components'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)))
            .replace('{' + 'project' + '}', encodeURIComponent(String(project)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling componentCreate.');
        }

        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling componentCreate.');
        }

        // verify required parameter 'componentDraft' is not null or undefined
        if (componentDraft === null || componentDraft === undefined) {
            throw new Error('Required parameter componentDraft was null or undefined when calling componentCreate.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(componentDraft, "ComponentDraft")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Component;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Component");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get last component version.
     * @param organization Organization Key
     * @param project Project Key
     * @param component Component key
     * @param branch 
     */
    public async componentLatestVersion (organization: string, project: string, component: string, branch: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ComponentVersion;  }> {
        const localVarPath = this.basePath + '/{organization}/projects/{project}/components/{component}/latest'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)))
            .replace('{' + 'project' + '}', encodeURIComponent(String(project)))
            .replace('{' + 'component' + '}', encodeURIComponent(String(component)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling componentLatestVersion.');
        }

        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling componentLatestVersion.');
        }

        // verify required parameter 'component' is not null or undefined
        if (component === null || component === undefined) {
            throw new Error('Required parameter component was null or undefined when calling componentLatestVersion.');
        }

        // verify required parameter 'branch' is not null or undefined
        if (branch === null || branch === undefined) {
            throw new Error('Required parameter branch was null or undefined when calling componentLatestVersion.');
        }

        if (branch !== undefined) {
            localVarQueryParameters['branch'] = ObjectSerializer.serialize(branch, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ComponentVersion;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ComponentVersion");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary List all components
     * @param organization Organization Key
     * @param project Project Key
     */
    public async componentQuery (organization: string, project: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ComponentPaginator;  }> {
        const localVarPath = this.basePath + '/{organization}/projects/{project}/components'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)))
            .replace('{' + 'project' + '}', encodeURIComponent(String(project)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling componentQuery.');
        }

        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling componentQuery.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ComponentPaginator;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ComponentPaginator");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Create component
     * @param organization Organization Key
     * @param project Project Key
     * @param component Component key
     * @param componentVersionDraft 
     */
    public async componentVersionCreate (organization: string, project: string, component: string, componentVersionDraft: ComponentVersionDraft, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ComponentVersion;  }> {
        const localVarPath = this.basePath + '/{organization}/projects/{project}/components/{component}/versions'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)))
            .replace('{' + 'project' + '}', encodeURIComponent(String(project)))
            .replace('{' + 'component' + '}', encodeURIComponent(String(component)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling componentVersionCreate.');
        }

        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling componentVersionCreate.');
        }

        // verify required parameter 'component' is not null or undefined
        if (component === null || component === undefined) {
            throw new Error('Required parameter component was null or undefined when calling componentVersionCreate.');
        }

        // verify required parameter 'componentVersionDraft' is not null or undefined
        if (componentVersionDraft === null || componentVersionDraft === undefined) {
            throw new Error('Required parameter componentVersionDraft was null or undefined when calling componentVersionCreate.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(componentVersionDraft, "ComponentVersionDraft")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ComponentVersion;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ComponentVersion");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Push commits for this component version
     * @param organization Organization Key
     * @param project Project Key
     * @param component Component key
     * @param version Component version
     * @param componentVersionCommits 
     */
    public async componentVersionPushCommits (organization: string, project: string, component: string, version: string, componentVersionCommits: ComponentVersionCommits, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/{organization}/projects/{project}/components/{component}/versions/{version}/commits'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)))
            .replace('{' + 'project' + '}', encodeURIComponent(String(project)))
            .replace('{' + 'component' + '}', encodeURIComponent(String(component)))
            .replace('{' + 'version' + '}', encodeURIComponent(String(version)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling componentVersionPushCommits.');
        }

        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling componentVersionPushCommits.');
        }

        // verify required parameter 'component' is not null or undefined
        if (component === null || component === undefined) {
            throw new Error('Required parameter component was null or undefined when calling componentVersionPushCommits.');
        }

        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling componentVersionPushCommits.');
        }

        // verify required parameter 'componentVersionCommits' is not null or undefined
        if (componentVersionCommits === null || componentVersionCommits === undefined) {
            throw new Error('Required parameter componentVersionCommits was null or undefined when calling componentVersionPushCommits.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(componentVersionCommits, "ComponentVersionCommits")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary List all versions of a component
     * @param organization Organization Key
     * @param project Project Key
     * @param component Component key
     */
    public async componentVersionQuery (organization: string, project: string, component: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ComponentVersionPaginator;  }> {
        const localVarPath = this.basePath + '/{organization}/projects/{project}/components/{component}/versions'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)))
            .replace('{' + 'project' + '}', encodeURIComponent(String(project)))
            .replace('{' + 'component' + '}', encodeURIComponent(String(component)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling componentVersionQuery.');
        }

        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling componentVersionQuery.');
        }

        // verify required parameter 'component' is not null or undefined
        if (component === null || component === undefined) {
            throw new Error('Required parameter component was null or undefined when calling componentVersionQuery.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ComponentVersionPaginator;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ComponentVersionPaginator");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get commits for this component version
     * @param organization Organization Key
     * @param project Project Key
     * @param component Component key
     * @param version Component version
     */
    public async componentVersionQueryCommits (organization: string, project: string, component: string, version: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CommitDataPaginator;  }> {
        const localVarPath = this.basePath + '/{organization}/projects/{project}/components/{component}/versions/{version}/commits'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)))
            .replace('{' + 'project' + '}', encodeURIComponent(String(project)))
            .replace('{' + 'component' + '}', encodeURIComponent(String(component)))
            .replace('{' + 'version' + '}', encodeURIComponent(String(version)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling componentVersionQueryCommits.');
        }

        // verify required parameter 'project' is not null or undefined
        if (project === null || project === undefined) {
            throw new Error('Required parameter project was null or undefined when calling componentVersionQueryCommits.');
        }

        // verify required parameter 'component' is not null or undefined
        if (component === null || component === undefined) {
            throw new Error('Required parameter component was null or undefined when calling componentVersionQueryCommits.');
        }

        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling componentVersionQueryCommits.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearerAuth.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearerAuth.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CommitDataPaginator;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CommitDataPaginator");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
