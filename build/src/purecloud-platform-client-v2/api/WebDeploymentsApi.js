import ApiClient from '../ApiClient.js';


class WebDeploymentsApi {
	/**
	 * WebDeployments service.
	 * @module purecloud-platform-client-v2/api/WebDeploymentsApi
	 * @version 258.1.0
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
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWebdeploymentsConfiguration(configurationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null || configurationId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a deployment
	 * 
	 * @param {String} deploymentId The deployment ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWebdeploymentsDeployment(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes a cobrowse session
	 * 
	 * @param {String} deploymentId WebMessaging deployment ID
	 * @param {String} sessionId Cobrowse session id or join code
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWebdeploymentsDeploymentCobrowseSessionId(deploymentId, sessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling deleteWebdeploymentsDeploymentCobrowseSessionId';
		}
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Invalidate JWT
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.xJourneySessionId The Customer's journey sessionId.
	 * @param {String} opts.xJourneySessionType The Customer's journey session type.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a configuration version
	 * 
	 * @param {String} configurationId The configuration version ID
	 * @param {String} versionId The version of the configuration to get
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWebdeploymentsConfigurationVersion(configurationId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null || configurationId === '') {
			throw 'Missing the required parameter "configurationId" when calling getWebdeploymentsConfigurationVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the versions of a configuration
	 * 
	 * @param {String} configurationId The configuration version ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Defaults to 300.
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWebdeploymentsConfigurationVersions(configurationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null || configurationId === '') {
			throw 'Missing the required parameter "configurationId" when calling getWebdeploymentsConfigurationVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/configurations/{configurationId}/versions', 
			'GET', 
			{ 'configurationId': configurationId },
			{ 'pageSize': opts['pageSize'],'before': opts['before'],'after': opts['after'] },
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
	 * Get the configuration draft
	 * 
	 * @param {String} configurationId The configuration version ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWebdeploymentsConfigurationVersionsDraft(configurationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null || configurationId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View configuration drafts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Defaults to 300.
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Boolean} opts.showOnlyPublished Filter by published status.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWebdeploymentsConfigurations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/webdeployments/configurations', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'before': opts['before'],'after': opts['after'],'showOnlyPublished': opts['showOnlyPublished'] },
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
	 * Get a deployment
	 * 
	 * @param {String} deploymentId The deployment ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected. 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWebdeploymentsDeployment(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling getWebdeploymentsDeployment';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments/{deploymentId}', 
			'GET', 
			{ 'deploymentId': deploymentId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Retrieves a cobrowse session
	 * 
	 * @param {String} deploymentId WebMessaging deployment ID
	 * @param {String} sessionId Cobrowse session id or join code
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWebdeploymentsDeploymentCobrowseSessionId(deploymentId, sessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling getWebdeploymentsDeploymentCobrowseSessionId';
		}
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get active configuration for a given deployment
	 * 
	 * @param {String} deploymentId The deployment ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.type Get active configuration on a deployment
	 * @param {Array.<String>} opts.expand Expand instructions for the return value
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWebdeploymentsDeploymentConfigurations(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling getWebdeploymentsDeploymentConfigurations';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments/{deploymentId}/configurations', 
			'GET', 
			{ 'deploymentId': deploymentId },
			{ 'type': opts['type'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a deployment identity resolution setting.
	 * 
	 * @param {String} deploymentId The deployment ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWebdeploymentsDeploymentIdentityresolution(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling getWebdeploymentsDeploymentIdentityresolution';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments/{deploymentId}/identityresolution', 
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
	 * Get deployments
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Defaults to 300.
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Array.<String>} opts.expand The specified entity attributes will be filled. Comma separated values expected. 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWebdeploymentsDeployments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'before': opts['before'],'after': opts['after'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Publish the configuration draft and create a new version
	 * 
	 * @param {String} configurationId The configuration version ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWebdeploymentsConfigurationVersionsDraftPublish(configurationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null || configurationId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a configuration draft
	 * 
	 * @param {Object} configurationVersion 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWebdeploymentsConfigurations(configurationVersion, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a deployment
	 * 
	 * @param {Object} deployment 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWebdeploymentsDeployments(deployment, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Exchange an oAuth code (obtained using the Authorization Code Flow or Implicit flow) for a JWT that can be used by webdeployments.
	 * 
	 * @param {Object} body webDeploymentsOAuthExchangeRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWebdeploymentsTokenOauthcodegrantjwtexchange(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Refresh a JWT.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the configuration draft
	 * 
	 * @param {String} configurationId The configuration version ID
	 * @param {Object} configurationVersion 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putWebdeploymentsConfigurationVersionsDraft(configurationId, configurationVersion, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null || configurationId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a deployment
	 * 
	 * @param {String} deploymentId The deployment ID
	 * @param {Object} deployment 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putWebdeploymentsDeployment(deploymentId, deployment, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update identity resolution settings for a deployment.
	 * 
	 * @param {String} deploymentId The deployment ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putWebdeploymentsDeploymentIdentityresolution(deploymentId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling putWebdeploymentsDeploymentIdentityresolution';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putWebdeploymentsDeploymentIdentityresolution';
		}

		return this.apiClient.callApi(
			'/api/v2/webdeployments/deployments/{deploymentId}/identityresolution', 
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


export default WebDeploymentsApi;
