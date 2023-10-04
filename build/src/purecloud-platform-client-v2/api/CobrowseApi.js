import ApiClient from '../ApiClient.js';


class CobrowseApi {
	/**
	 * Cobrowse service.
	 * @module purecloud-platform-client-v2/api/CobrowseApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new CobrowseApi. 
	 * @alias module:purecloud-platform-client-v2/api/CobrowseApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Deletes a cobrowse deployment by id
	 * 
	 * @param {String} deploymentId Id of the deployment
	 */
	deleteCobrowseDeployment(deploymentId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling deleteCobrowseDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/cobrowse/deployments/{deploymentId}', 
			'DELETE', 
			{ 'deploymentId': deploymentId },
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
	 * Retrieves a cobrowse deployment by id
	 * 
	 * @param {String} deploymentId Id of the deployment
	 */
	getCobrowseDeployment(deploymentId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling getCobrowseDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/cobrowse/deployments/{deploymentId}', 
			'GET', 
			{ 'deploymentId': deploymentId },
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
	 * Retrieves a list cobrowse deployments within the org
	 * 
	 */
	getCobrowseDeployments() { 

		return this.apiClient.callApi(
			'/api/v2/cobrowse/deployments', 
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
	 * Updates a cobrowse deployment by id
	 * 
	 * @param {String} deploymentId Id of the deployment
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The hosts to add to the deployment
	 */
	postCobrowseDeployment(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling postCobrowseDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/cobrowse/deployments/{deploymentId}', 
			'POST', 
			{ 'deploymentId': deploymentId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Creates a new cobrowse deployment
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The hosts to add to the deployment
	 */
	postCobrowseDeployments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/cobrowse/deployments', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Notifies clients that a cobrowse session has failed to activate
	 * 
	 * @param {String} cobrowseSessionId Id of the cobrowse session
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The reason for why the cobrowse session was unable to be activated
	 */
	postCobrowseSessionCobrowseSessionIdActivationfailure(cobrowseSessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'cobrowseSessionId' is set
		if (cobrowseSessionId === undefined || cobrowseSessionId === null) {
			throw 'Missing the required parameter "cobrowseSessionId" when calling postCobrowseSessionCobrowseSessionIdActivationfailure';
		}

		return this.apiClient.callApi(
			'/api/v2/cobrowse/session/{cobrowseSessionId}/activationfailure', 
			'POST', 
			{ 'cobrowseSessionId': cobrowseSessionId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default CobrowseApi;
