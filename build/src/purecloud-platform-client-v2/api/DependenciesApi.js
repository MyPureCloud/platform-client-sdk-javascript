import ApiClient from '../ApiClient.js';


class DependenciesApi {
	/**
	 * Dependencies service.
	 * @module purecloud-platform-client-v2/api/DependenciesApi
	 * @version 261.0.0
	 */

	/**
	 * Constructs a new DependenciesApi. 
	 * @alias module:purecloud-platform-client-v2/api/DependenciesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get entities that require the given entity
	 * 
	 * @param {Object} entityType Entity type
	 * @param {String} entityId Entity ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Page size (max 100) (default to 25)
	 * @param {String} opts.beforeSourceType Cursor for previous page
	 * @param {String} opts.beforeSourceId Cursor for previous page
	 * @param {String} opts.afterSourceType Cursor for next page
	 * @param {String} opts.afterSourceId Cursor for next page
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredby(entityType, entityId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'entityType' is set
		if (entityType === undefined || entityType === null || entityType === '') {
			throw 'Missing the required parameter "entityType" when calling getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredby';
		}
		// verify the required parameter 'entityId' is set
		if (entityId === undefined || entityId === null || entityId === '') {
			throw 'Missing the required parameter "entityId" when calling getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredby';
		}

		return this.apiClient.callApi(
			'/api/v2/dependencies/type/{entityType}/id/{entityId}/connections/requiredby', 
			'GET', 
			{ 'entityType': entityType,'entityId': entityId },
			{ 'pageSize': opts['pageSize'],'beforeSourceType': opts['beforeSourceType'],'beforeSourceId': opts['beforeSourceId'],'afterSourceType': opts['afterSourceType'],'afterSourceId': opts['afterSourceId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * An estimated count of entities that depend on this entity, including indirect dependencies.
	 * 
	 * @param {Object} entityType Entity type
	 * @param {String} entityId Entity ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredbycounts(entityType, entityId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'entityType' is set
		if (entityType === undefined || entityType === null || entityType === '') {
			throw 'Missing the required parameter "entityType" when calling getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredbycounts';
		}
		// verify the required parameter 'entityId' is set
		if (entityId === undefined || entityId === null || entityId === '') {
			throw 'Missing the required parameter "entityId" when calling getDependenciesTypeEntityTypeIdEntityIdConnectionsRequiredbycounts';
		}

		return this.apiClient.callApi(
			'/api/v2/dependencies/type/{entityType}/id/{entityId}/connections/requiredbycounts', 
			'GET', 
			{ 'entityType': entityType,'entityId': entityId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get entities that the given entity requires
	 * 
	 * @param {Object} entityType Entity type
	 * @param {String} entityId Entity ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Page size (max 100) (default to 25)
	 * @param {String} opts.beforeSourceType Cursor for previous page
	 * @param {String} opts.beforeSourceId Cursor for previous page
	 * @param {String} opts.afterSourceType Cursor for next page
	 * @param {String} opts.afterSourceId Cursor for next page
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDependenciesTypeEntityTypeIdEntityIdConnectionsRequires(entityType, entityId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'entityType' is set
		if (entityType === undefined || entityType === null || entityType === '') {
			throw 'Missing the required parameter "entityType" when calling getDependenciesTypeEntityTypeIdEntityIdConnectionsRequires';
		}
		// verify the required parameter 'entityId' is set
		if (entityId === undefined || entityId === null || entityId === '') {
			throw 'Missing the required parameter "entityId" when calling getDependenciesTypeEntityTypeIdEntityIdConnectionsRequires';
		}

		return this.apiClient.callApi(
			'/api/v2/dependencies/type/{entityType}/id/{entityId}/connections/requires', 
			'GET', 
			{ 'entityType': entityType,'entityId': entityId },
			{ 'pageSize': opts['pageSize'],'beforeSourceType': opts['beforeSourceType'],'beforeSourceId': opts['beforeSourceId'],'afterSourceType': opts['afterSourceType'],'afterSourceId': opts['afterSourceId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default DependenciesApi;
