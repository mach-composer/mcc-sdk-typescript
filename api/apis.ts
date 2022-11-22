export * from './aPIClientsApi';
import { APIClientsApi } from './aPIClientsApi';
export * from './accountManagementApi';
import { AccountManagementApi } from './accountManagementApi';
export * from './authApi';
import { AuthApi } from './authApi';
export * from './componentsApi';
import { ComponentsApi } from './componentsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [APIClientsApi, AccountManagementApi, AuthApi, ComponentsApi];
