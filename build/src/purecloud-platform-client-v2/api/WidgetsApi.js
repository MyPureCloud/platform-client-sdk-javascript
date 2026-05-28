import ApiClient from '../ApiClient.js';


class WidgetsApi {
	/**
	 * Widgets service.
	 * @module purecloud-platform-client-v2/api/WidgetsApi
	 * @version 253.0.0
	 */

	/**
	 * Constructs a new WidgetsApi. 
	 * @alias module:purecloud-platform-client-v2/api/WidgetsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a Widget deployment
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. 
	 * @param {String} deploymentId Widget Config Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	deleteWidgetsDeployment(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling deleteWidgetsDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/widgets/deployments/{deploymentId}', 
			'DELETE', 
			{ 'deploymentId': deploymentId },
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
	 * Get a Widget deployment
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. 
	 * @param {String} deploymentId Widget Config Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getWidgetsDeployment(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling getWidgetsDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/widgets/deployments/{deploymentId}', 
			'GET', 
			{ 'deploymentId': deploymentId },
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
	 * List Widget deployments
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getWidgetsDeployments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/widgets/deployments', 
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
	 * Create Widget deployment
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. 
	 * @param {Object} body Deployment
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postWidgetsDeployments(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWidgetsDeployments';
		}

		return this.apiClient.callApi(
			'/api/v2/widgets/deployments', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a Widget deployment
	 * This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. 
	 * @param {String} deploymentId Widget Config Id
	 * @param {Object} body Deployment
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	putWidgetsDeployment(deploymentId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling putWidgetsDeployment';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putWidgetsDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/widgets/deployments/{deploymentId}', 
			'PUT', 
			{ 'deploymentId': deploymentId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default WidgetsApi;
