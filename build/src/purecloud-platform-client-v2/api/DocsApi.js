import ApiClient from '../ApiClient.js';


class DocsApi {
	/**
	 * Docs service.
	 * @module purecloud-platform-client-v2/api/DocsApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new DocsApi. 
	 * @alias module:purecloud-platform-client-v2/api/DocsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * The swagger definition in JSON
	 * 
	 */
	getDocsSwagger() { 

		return this.apiClient.callApi(
			'/api/v2/docs/swagger', 
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
	 * The swagger definition in JSON
	 * 
	 */
	getDocsSwaggerall() { 

		return this.apiClient.callApi(
			'/api/v2/docs/swaggerall', 
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
	 * The swagger definition in JSON
	 * 
	 */
	getDocsSwaggerpreview() { 

		return this.apiClient.callApi(
			'/api/v2/docs/swaggerpreview', 
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


export default DocsApi;
