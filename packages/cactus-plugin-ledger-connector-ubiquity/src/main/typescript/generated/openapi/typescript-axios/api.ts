/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cactus Plugin - Ubiquity
 * Ubiquity wrapper for Hyperledger Cactus
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * Gets transactions that an address was involved with, from newest to oldest. This call uses pagination. Source: https://ubiquity.docs.blockdaemon.com/swagger-ui/#/Accounts/GetTxsByAddress
 * @export
 * @interface GetTransactionsByAddressEndpoint
 */
export interface GetTransactionsByAddressEndpoint {
    /**
     * 
     * @type {string}
     * @memberof GetTransactionsByAddressEndpoint
     */
    'protocol': string;
    /**
     * 
     * @type {string}
     * @memberof GetTransactionsByAddressEndpoint
     */
    'network': string;
    /**
     * 
     * @type {string}
     * @memberof GetTransactionsByAddressEndpoint
     */
    'address': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {GetTransactionsByAddressEndpoint} [getTransactionsByAddressEndpoint] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionByAddressV1: async (getTransactionsByAddressEndpoint?: GetTransactionsByAddressEndpoint, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/@hyperledger/cactus-plugin-ledger-connector-ubiquity/GetTransactionByAddress`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getTransactionsByAddressEndpoint, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {GetTransactionsByAddressEndpoint} [getTransactionsByAddressEndpoint] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTransactionByAddressV1(getTransactionsByAddressEndpoint?: GetTransactionsByAddressEndpoint, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTransactionByAddressV1(getTransactionsByAddressEndpoint, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {GetTransactionsByAddressEndpoint} [getTransactionsByAddressEndpoint] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTransactionByAddressV1(getTransactionsByAddressEndpoint?: GetTransactionsByAddressEndpoint, options?: any): AxiosPromise<void> {
            return localVarFp.getTransactionByAddressV1(getTransactionsByAddressEndpoint, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {GetTransactionsByAddressEndpoint} [getTransactionsByAddressEndpoint] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getTransactionByAddressV1(getTransactionsByAddressEndpoint?: GetTransactionsByAddressEndpoint, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getTransactionByAddressV1(getTransactionsByAddressEndpoint, options).then((request) => request(this.axios, this.basePath));
    }
}


