import ApiClient from '../ApiClient.js';


class WebDeploymentsApi {
	/**
	 * WebDeployments service.
	 * @module purecloud-platform-client-v2/api/WebDeploymentsApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new WebDeploymentsApi. 
	 * @alias module:purecloud-platform-client-v2/api/WebDeploymentsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete all versions of a configuration
	 * 
	 * @param {String} configurationId The configuration version ID
	 */
	deleteWebdeploymentsConfiguration(configurationId) { 
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null) {
			throw 'Missing the required parameter "configurationId" when calling deleteWebdeploymentsConfiguration';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/configurations/{configurationId}', 
			'DELETE', 
			{ 'configurationId': configurationId },
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
	 * Delete a deployment
	 * 
	 * @param {String} deploymentId The deployment ID
	 */
	deleteWebdeploymentsDeployment(deploymentId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling deleteWebdeploymentsDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments/{deploymentId}', 
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
	 * Deletes a cobrowse session
	 * 
	 * @param {String} deploymentId WebMessaging deployment ID
	 * @param {String} sessionId Cobrowse session id or join code
	 */
	deleteWebdeploymentsDeploymentCobrowseSessionId(deploymentId, sessionId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling deleteWebdeploymentsDeploymentCobrowseSessionId';
		}
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null) {
			throw 'Missing the required parameter "sessionId" when calling deleteWebdeploymentsDeploymentCobrowseSessionId';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments/{deploymentId}/cobrowse/{sessionId}', 
			'DELETE', 
			{ 'deploymentId': deploymentId,'sessionId': sessionId },
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
	 * Invalidate JWT
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.xJourneySessionId The Customer's journey sessionId.
	 * @param {String} opts.xJourneySessionType The Customer's journey session type.
	 */
	deleteWebdeploymentsTokenRevoke(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/webdeployments/token/revoke', 
			'DELETE', 
			{  },
			{  },
			{ 'X-Journey-Session-Id': opts['xJourneySessionId'],'X-Journey-Session-Type': opts['xJourneySessionType'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a configuration version
	 * 
	 * @param {String} configurationId The configuration version ID
	 * @param {String} versionId The version of the configuration to get
	 */
	getWebdeploymentsConfigurationVersion(configurationId, versionId) { 
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null) {
			throw 'Missing the required parameter "configurationId" when calling getWebdeploymentsConfigurationVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
			throw 'Missing the required parameter "versionId" when calling getWebdeploymentsConfigurationVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/configurations/{configurationId}/versions/{versionId}', 
			'GET', 
			{ 'configurationId': configurationId,'versionId': versionId },
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
	 * Get the versions of a configuration
	 * This returns the 50 most recent versions for this configuration
	 * @param {String} configurationId The configuration version ID
	 */
	getWebdeploymentsConfigurationVersions(configurationId) { 
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null) {
			throw 'Missing the required parameter "configurationId" when calling getWebdeploymentsConfigurationVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/configurations/{configurationId}/versions', 
			'GET', 
			{ 'configurationId': configurationId },
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
	 * Get the configuration draft
	 * 
	 * @param {String} configurationId The configuration version ID
	 */
	getWebdeploymentsConfigurationVersionsDraft(configurationId) { 
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null) {
			throw 'Missing the required parameter "configurationId" when calling getWebdeploymentsConfigurationVersionsDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/configurations/{configurationId}/versions/draft', 
			'GET', 
			{ 'configurationId': configurationId },
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
	 * View configuration drafts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.showOnlyPublished Get only configuration drafts with published versions (default to false)
	 */
	getWebdeploymentsConfigurations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/webdeployments/configurations', 
			'GET', 
			{  },
			{ 'showOnlyPublished': opts['showOnlyPublished'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a deployment
	 * 
	 * @param {String} deploymentId The deployment ID
	 */
	getWebdeploymentsDeployment(deploymentId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling getWebdeploymentsDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments/{deploymentId}', 
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
	 * Retrieves a cobrowse session
	 * 
	 * @param {String} deploymentId WebMessaging deployment ID
	 * @param {String} sessionId Cobrowse session id or join code
	 */
	getWebdeploymentsDeploymentCobrowseSessionId(deploymentId, sessionId) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling getWebdeploymentsDeploymentCobrowseSessionId';
		}
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null) {
			throw 'Missing the required parameter "sessionId" when calling getWebdeploymentsDeploymentCobrowseSessionId';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments/{deploymentId}/cobrowse/{sessionId}', 
			'GET', 
			{ 'deploymentId': deploymentId,'sessionId': sessionId },
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
	 * Get active configuration for a given deployment
	 * 
	 * @param {String} deploymentId The deployment ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.type Get active configuration on a deployment
	 */
	getWebdeploymentsDeploymentConfigurations(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling getWebdeploymentsDeploymentConfigurations';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments/{deploymentId}/configurations', 
			'GET', 
			{ 'deploymentId': deploymentId },
			{ 'type': opts['type'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get deployments
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected. Valid values:
	 */
	getWebdeploymentsDeployments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments', 
			'GET', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Publish the configuration draft and create a new version
	 * 
	 * @param {String} configurationId The configuration version ID
	 */
	postWebdeploymentsConfigurationVersionsDraftPublish(configurationId) { 
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null) {
			throw 'Missing the required parameter "configurationId" when calling postWebdeploymentsConfigurationVersionsDraftPublish';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/configurations/{configurationId}/versions/draft/publish', 
			'POST', 
			{ 'configurationId': configurationId },
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
	 * Create a configuration draft
	 * 
	 * @param {Object} configurationVersion 
	 */
	postWebdeploymentsConfigurations(configurationVersion) { 
		// verify the required parameter 'configurationVersion' is set
		if (configurationVersion === undefined || configurationVersion === null) {
			throw 'Missing the required parameter "configurationVersion" when calling postWebdeploymentsConfigurations';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/configurations', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			configurationVersion, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a deployment
	 * 
	 * @param {Object} deployment 
	 */
	postWebdeploymentsDeployments(deployment) { 
		// verify the required parameter 'deployment' is set
		if (deployment === undefined || deployment === null) {
			throw 'Missing the required parameter "deployment" when calling postWebdeploymentsDeployments';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			deployment, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Exchange an oAuth code (obtained using the Authorization Code Flow) for a JWT that can be used by webdeployments.
	 * 
	 * @param {Object} body webDeploymentsOAuthExchangeRequest
	 */
	postWebdeploymentsTokenOauthcodegrantjwtexchange(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWebdeploymentsTokenOauthcodegrantjwtexchange';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/token/oauthcodegrantjwtexchange', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Refresh a JWT.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postWebdeploymentsTokenRefresh(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/webdeployments/token/refresh', 
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
	 * Update the configuration draft
	 * 
	 * @param {String} configurationId The configuration version ID
	 * @param {Object} configurationVersion 
	 */
	putWebdeploymentsConfigurationVersionsDraft(configurationId, configurationVersion) { 
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null) {
			throw 'Missing the required parameter "configurationId" when calling putWebdeploymentsConfigurationVersionsDraft';
		}
		// verify the required parameter 'configurationVersion' is set
		if (configurationVersion === undefined || configurationVersion === null) {
			throw 'Missing the required parameter "configurationVersion" when calling putWebdeploymentsConfigurationVersionsDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/configurations/{configurationId}/versions/draft', 
			'PUT', 
			{ 'configurationId': configurationId },
			{  },
			{  },
			{  },
			configurationVersion, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a deployment
	 * 
	 * @param {String} deploymentId The deployment ID
	 * @param {Object} deployment 
	 */
	putWebdeploymentsDeployment(deploymentId, deployment) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling putWebdeploymentsDeployment';
		}
		// verify the required parameter 'deployment' is set
		if (deployment === undefined || deployment === null) {
			throw 'Missing the required parameter "deployment" when calling putWebdeploymentsDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments/{deploymentId}', 
			'PUT', 
			{ 'deploymentId': deploymentId },
			{  },
			{  },
			{  },
			deployment, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default WebDeploymentsApi;
