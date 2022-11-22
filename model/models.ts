import localVarRequest from 'request';

export * from './apiClient';
export * from './apiClientAllOf';
export * from './apiClientDraft';
export * from './apiClientPaginator';
export * from './apiClientPaginatorAllOf';
export * from './baseResource';
export * from './commitData';
export * from './commitDataAllOf';
export * from './commitDataAuthor';
export * from './commitDataDraft';
export * from './commitDataPaginator';
export * from './commitDataPaginatorAllOf';
export * from './component';
export * from './componentAllOf';
export * from './componentDraft';
export * from './componentPaginator';
export * from './componentPaginatorAllOf';
export * from './componentVersion';
export * from './componentVersionAllOf';
export * from './componentVersionCommits';
export * from './componentVersionDraft';
export * from './componentVersionPaginator';
export * from './componentVersionPaginatorAllOf';
export * from './modelError';
export * from './organization';
export * from './organizationAllOf';
export * from './organizationDraft';
export * from './organizationPaginator';
export * from './organizationPaginatorAllOf';
export * from './organizationUser';
export * from './organizationUserInvite';
export * from './organizationUserInvite401Response';
export * from './organizationUserInviteDraft';
export * from './organizationUserPaginator';
export * from './organizationUserPaginatorAllOf';
export * from './organizationUserProjectsInner';
export * from './paginator';
export * from './project';
export * from './projectAllOf';
export * from './projectDraft';
export * from './projectPaginator';
export * from './projectPaginatorAllOf';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ApiClient } from './apiClient';
import { ApiClientAllOf } from './apiClientAllOf';
import { ApiClientDraft } from './apiClientDraft';
import { ApiClientPaginator } from './apiClientPaginator';
import { ApiClientPaginatorAllOf } from './apiClientPaginatorAllOf';
import { BaseResource } from './baseResource';
import { CommitData } from './commitData';
import { CommitDataAllOf } from './commitDataAllOf';
import { CommitDataAuthor } from './commitDataAuthor';
import { CommitDataDraft } from './commitDataDraft';
import { CommitDataPaginator } from './commitDataPaginator';
import { CommitDataPaginatorAllOf } from './commitDataPaginatorAllOf';
import { Component } from './component';
import { ComponentAllOf } from './componentAllOf';
import { ComponentDraft } from './componentDraft';
import { ComponentPaginator } from './componentPaginator';
import { ComponentPaginatorAllOf } from './componentPaginatorAllOf';
import { ComponentVersion } from './componentVersion';
import { ComponentVersionAllOf } from './componentVersionAllOf';
import { ComponentVersionCommits } from './componentVersionCommits';
import { ComponentVersionDraft } from './componentVersionDraft';
import { ComponentVersionPaginator } from './componentVersionPaginator';
import { ComponentVersionPaginatorAllOf } from './componentVersionPaginatorAllOf';
import { ModelError } from './modelError';
import { Organization } from './organization';
import { OrganizationAllOf } from './organizationAllOf';
import { OrganizationDraft } from './organizationDraft';
import { OrganizationPaginator } from './organizationPaginator';
import { OrganizationPaginatorAllOf } from './organizationPaginatorAllOf';
import { OrganizationUser } from './organizationUser';
import { OrganizationUserInvite } from './organizationUserInvite';
import { OrganizationUserInvite401Response } from './organizationUserInvite401Response';
import { OrganizationUserInviteDraft } from './organizationUserInviteDraft';
import { OrganizationUserPaginator } from './organizationUserPaginator';
import { OrganizationUserPaginatorAllOf } from './organizationUserPaginatorAllOf';
import { OrganizationUserProjectsInner } from './organizationUserProjectsInner';
import { Paginator } from './paginator';
import { Project } from './project';
import { ProjectAllOf } from './projectAllOf';
import { ProjectDraft } from './projectDraft';
import { ProjectPaginator } from './projectPaginator';
import { ProjectPaginatorAllOf } from './projectPaginatorAllOf';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
}

let typeMap: {[index: string]: any} = {
    "ApiClient": ApiClient,
    "ApiClientAllOf": ApiClientAllOf,
    "ApiClientDraft": ApiClientDraft,
    "ApiClientPaginator": ApiClientPaginator,
    "ApiClientPaginatorAllOf": ApiClientPaginatorAllOf,
    "BaseResource": BaseResource,
    "CommitData": CommitData,
    "CommitDataAllOf": CommitDataAllOf,
    "CommitDataAuthor": CommitDataAuthor,
    "CommitDataDraft": CommitDataDraft,
    "CommitDataPaginator": CommitDataPaginator,
    "CommitDataPaginatorAllOf": CommitDataPaginatorAllOf,
    "Component": Component,
    "ComponentAllOf": ComponentAllOf,
    "ComponentDraft": ComponentDraft,
    "ComponentPaginator": ComponentPaginator,
    "ComponentPaginatorAllOf": ComponentPaginatorAllOf,
    "ComponentVersion": ComponentVersion,
    "ComponentVersionAllOf": ComponentVersionAllOf,
    "ComponentVersionCommits": ComponentVersionCommits,
    "ComponentVersionDraft": ComponentVersionDraft,
    "ComponentVersionPaginator": ComponentVersionPaginator,
    "ComponentVersionPaginatorAllOf": ComponentVersionPaginatorAllOf,
    "ModelError": ModelError,
    "Organization": Organization,
    "OrganizationAllOf": OrganizationAllOf,
    "OrganizationDraft": OrganizationDraft,
    "OrganizationPaginator": OrganizationPaginator,
    "OrganizationPaginatorAllOf": OrganizationPaginatorAllOf,
    "OrganizationUser": OrganizationUser,
    "OrganizationUserInvite": OrganizationUserInvite,
    "OrganizationUserInvite401Response": OrganizationUserInvite401Response,
    "OrganizationUserInviteDraft": OrganizationUserInviteDraft,
    "OrganizationUserPaginator": OrganizationUserPaginator,
    "OrganizationUserPaginatorAllOf": OrganizationUserPaginatorAllOf,
    "OrganizationUserProjectsInner": OrganizationUserProjectsInner,
    "Paginator": Paginator,
    "Project": Project,
    "ProjectAllOf": ProjectAllOf,
    "ProjectDraft": ProjectDraft,
    "ProjectPaginator": ProjectPaginator,
    "ProjectPaginatorAllOf": ProjectPaginatorAllOf,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
