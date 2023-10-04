import ApiClient from '../ApiClient.js';


class SettingsApi {
	/**
	 * Settings service.
	 * @module purecloud-platform-client-v2/api/SettingsApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new SettingsApi. 
	 * @alias module:purecloud-platform-client-v2/api/SettingsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete agent auto answer settings
	 * 
	 * @param {String} agentId The agent to apply the auto answer settings to
	 */
	deleteAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null) {
			throw 'Missing the required parameter "agentId" when calling deleteAppsAgentuiAgentsAutoanswerAgentIdSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/agents/autoanswer/{agentId}/settings', 
			'DELETE', 
			{ 'agentId': agentId },
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
	 * Delete queue-level default panel settings
	 * 
	 * @param {String} queueId The queue to apply the panel settings to
	 */
	deleteAppsAgentuiPanelsQueueSettings(queueId) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling deleteAppsAgentuiPanelsQueueSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/panels/queues/{queueId}/settings', 
			'DELETE', 
			{ 'queueId': queueId },
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
	 * Delete organization-level default panel settings
	 * 
	 */
	deleteAppsAgentuiPanelsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/panels/settings', 
			'DELETE', 
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
	 * Reset email threading settings to default
	 * 
	 */
	deleteEmailsSettingsThreading() { 

		return this.apiClient.callApi(
			'/api/v2/emails/settings/threading', 
			'DELETE', 
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
	 * Delete settings for the current user
	 * 
	 */
	deleteSettings() { 

		return this.apiClient.callApi(
			'/api/v2/settings', 
			'DELETE', 
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
	 * Delete webrtc settings for a given user, org and oauth client
	 * 
	 */
	deleteSettingsWebrtcUsers() { 

		return this.apiClient.callApi(
			'/api/v2/settings/webrtc/users', 
			'DELETE', 
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
	 * Get agent auto answer settings
	 * 
	 * @param {String} agentId The agent to apply the auto answer settings to
	 */
	getAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null) {
			throw 'Missing the required parameter "agentId" when calling getAppsAgentuiAgentsAutoanswerAgentIdSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/agents/autoanswer/{agentId}/settings', 
			'GET', 
			{ 'agentId': agentId },
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
	 * Get queue-level default panel settings
	 * 
	 * @param {String} queueId The queue to apply the panel settings to
	 */
	getAppsAgentuiPanelsQueueSettings(queueId) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling getAppsAgentuiPanelsQueueSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/panels/queues/{queueId}/settings', 
			'GET', 
			{ 'queueId': queueId },
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
	 * Get organization-level default panel settings
	 * 
	 */
	getAppsAgentuiPanelsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/panels/settings', 
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
	 * Get email Contact Center settings
	 * 
	 */
	getEmailsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/emails/settings', 
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
	 * Get email threading settings
	 * 
	 */
	getEmailsSettingsThreading() { 

		return this.apiClient.callApi(
			'/api/v2/emails/settings/threading', 
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
	 * Get settings for the current user
	 * 
	 */
	getSettings() { 

		return this.apiClient.callApi(
			'/api/v2/settings', 
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
	 * Get webrtc settings for a given user, org and oauth client. The TTL of 30 days is reset on retrieval of settings.
	 * 
	 */
	getSettingsWebrtcUsers() { 

		return this.apiClient.callApi(
			'/api/v2/settings/webrtc/users', 
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
	 * Update agent auto answer settings
	 * 
	 * @param {String} agentId The agent to apply the auto answer settings to
	 * @param {Object} body AutoAnswerSettings
	 */
	patchAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId, body) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null) {
			throw 'Missing the required parameter "agentId" when calling patchAppsAgentuiAgentsAutoanswerAgentIdSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAppsAgentuiAgentsAutoanswerAgentIdSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/agents/autoanswer/{agentId}/settings', 
			'PATCH', 
			{ 'agentId': agentId },
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
	 * Update queue-level default panel settings
	 * 
	 * @param {String} queueId The queue to apply the panel settings to
	 * @param {Object} body DefaultPanelSettings
	 */
	patchAppsAgentuiPanelsQueueSettings(queueId, body) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling patchAppsAgentuiPanelsQueueSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAppsAgentuiPanelsQueueSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/panels/queues/{queueId}/settings', 
			'PATCH', 
			{ 'queueId': queueId },
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
	 * Update organization-level default panel settings
	 * 
	 * @param {Object} body DefaultPanelSettings
	 */
	patchAppsAgentuiPanelsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAppsAgentuiPanelsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/panels/settings', 
			'PATCH', 
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
	 * Patch email Contact Center settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchEmailsSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/emails/settings', 
			'PATCH', 
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
	 * Patch email threading settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchEmailsSettingsThreading(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/emails/settings/threading', 
			'PATCH', 
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
	 * Update webrtc settings for a given user, org and oauth client. The TTL of 30 days is reset on update of settings.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchSettingsWebrtcUsers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/settings/webrtc/users', 
			'PATCH', 
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
	 * Set agent auto answer settings
	 * 
	 * @param {String} agentId The agent to apply the auto answer settings to
	 * @param {Object} body AutoAnswerSettings
	 */
	putAppsAgentuiAgentsAutoanswerAgentIdSettings(agentId, body) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null) {
			throw 'Missing the required parameter "agentId" when calling putAppsAgentuiAgentsAutoanswerAgentIdSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAppsAgentuiAgentsAutoanswerAgentIdSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/agents/autoanswer/{agentId}/settings', 
			'PUT', 
			{ 'agentId': agentId },
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
	 * Set queue-level default panel settings
	 * 
	 * @param {String} queueId The queue to apply the panel settings to
	 * @param {Object} body DefaultPanelSettings
	 */
	putAppsAgentuiPanelsQueueSettings(queueId, body) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling putAppsAgentuiPanelsQueueSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAppsAgentuiPanelsQueueSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/panels/queues/{queueId}/settings', 
			'PUT', 
			{ 'queueId': queueId },
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
	 * Set organization-level default panel settings
	 * 
	 * @param {Object} body DefaultPanelSettings
	 */
	putAppsAgentuiPanelsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAppsAgentuiPanelsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/agentui/panels/settings', 
			'PUT', 
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
	 * Update settings for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<String, {String: Object}>} opts.body 
	 */
	putSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/settings', 
			'PUT', 
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
	 * Set/Add webrtc settings for a given user, org and oauth client. A TTL of 30 days is set on the settings.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putSettingsWebrtcUsers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/settings/webrtc/users', 
			'PUT', 
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

}


export default SettingsApi;
