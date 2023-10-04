import ApiClient from '../ApiClient.js';


class BridgeApi {
	/**
	 * Bridge service.
	 * @module purecloud-platform-client-v2/api/BridgeApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new BridgeApi. 
	 * @alias module:purecloud-platform-client-v2/api/BridgeApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get user actions categories
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getBridgeUseractionsCategories(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/bridge/useractions/categories', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get user actions metadata
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ascending)
	 * @param {String} opts.expand requests.inputSchema,requests.successSchema
	 */
	getBridgeUseractionsMetadata(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/bridge/useractions/metadata', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get user action metadata
	 * 
	 * @param {String} actionName Name
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand requests.inputSchema,requests.successSchema
	 */
	getBridgeUseractionsMetadataActionName(actionName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionName' is set
		if (actionName === undefined || actionName === null) {
			throw 'Missing the required parameter "actionName" when calling getBridgeUseractionsMetadataActionName';
		}

		return this.apiClient.callApi(
			'/api/v2/bridge/useractions/metadata/{actionName}', 
			'GET', 
			{ 'actionName': actionName },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default BridgeApi;
