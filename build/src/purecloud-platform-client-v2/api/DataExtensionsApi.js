import ApiClient from '../ApiClient.js';


class DataExtensionsApi {
	/**
	 * DataExtensions service.
	 * @module purecloud-platform-client-v2/api/DataExtensionsApi
	 * @version 250.0.0
	 */

	/**
	 * Constructs a new DataExtensionsApi. 
	 * @alias module:purecloud-platform-client-v2/api/DataExtensionsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get a specific named core type.
	 * 
	 * @param {Object} coretypeName The core type's name
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDataextensionsCoretype(coretypeName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'coretypeName' is set
		if (coretypeName === undefined || coretypeName === null || coretypeName === '') {
			throw 'Missing the required parameter "coretypeName" when calling getDataextensionsCoretype';
		}

		return this.apiClient.callApi(
			'/api/v2/dataextensions/coretypes/{coretypeName}', 
			'GET', 
			{ 'coretypeName': coretypeName },
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
	 * Get the core types from which all schemas are built.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDataextensionsCoretypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/dataextensions/coretypes', 
			'GET', 
			{  },
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
	 * Get quantitative limits on schemas
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDataextensionsLimits(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/dataextensions/limits', 
			'GET', 
			{  },
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

}


export default DataExtensionsApi;
