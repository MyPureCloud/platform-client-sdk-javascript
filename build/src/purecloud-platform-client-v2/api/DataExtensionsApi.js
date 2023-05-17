import ApiClient from '../ApiClient.js';


class DataExtensionsApi {
	/**
	 * DataExtensions service.
	 * @module purecloud-platform-client-v2/api/DataExtensionsApi
	 * @version 168.2.0
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
	 */
	getDataextensionsCoretype(coretypeName) { 
		// verify the required parameter 'coretypeName' is set
		if (coretypeName === undefined || coretypeName === null) {
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
			['application/json']
		);
	}

	/**
	 * Get the core types from which all schemas are built.
	 * 
	 */
	getDataextensionsCoretypes() { 

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
			['application/json']
		);
	}

	/**
	 * Get quantitative limits on schemas
	 * 
	 */
	getDataextensionsLimits() { 

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
			['application/json']
		);
	}

}


export default DataExtensionsApi;
