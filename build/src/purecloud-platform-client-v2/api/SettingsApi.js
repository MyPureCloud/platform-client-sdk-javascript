import ApiClient from '../ApiClient.js';


class SettingsApi {
	/**
	 * Settings service.
	 * @module purecloud-platform-client-v2/api/SettingsApi
	 * @version 225.0.0
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
	 * Delete settings
	 * 
	 */
	deleteExternalcontactsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/settings', 
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
	 * Delete agent auto answer settings
	 * 
	 * @param {String} agentId The agent to apply the auto answer settings to
	 */
	deleteUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling deleteUsersAgentuiAgentsAutoanswerAgentIdSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/users/agentui/agents/autoanswer/{agentId}/settings', 
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
	 * Get settings
	 * 
	 */
	getExternalcontactsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/settings', 
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
	 * Get the execution history enabled setting.
	 * Get the execution history enabled setting.
	 */
	getSettingsExecutiondata() { 

		return this.apiClient.callApi(
			'/api/v2/settings/executiondata', 
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
	 * Get agent auto answer settings
	 * 
	 * @param {String} agentId The agent to apply the auto answer settings to
	 */
	getUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling getUsersAgentuiAgentsAutoanswerAgentIdSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/users/agentui/agents/autoanswer/{agentId}/settings', 
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
	 * Edit the execution history on off setting.
	 * Edit the execution history on off setting.
	 * @param {Object} body New Execution Data Setting
	 */
	patchSettingsExecutiondata(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchSettingsExecutiondata';
		}

		return this.apiClient.callApi(
			'/api/v2/settings/executiondata', 
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
	 * Update agent auto answer settings
	 * 
	 * @param {String} agentId The agent to apply the auto answer settings to
	 * @param {Object} body AutoAnswerSettings
	 */
	patchUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling patchUsersAgentuiAgentsAutoanswerAgentIdSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUsersAgentuiAgentsAutoanswerAgentIdSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/users/agentui/agents/autoanswer/{agentId}/settings', 
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
	 * Set settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putExternalcontactsSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/settings', 
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
	 * Set agent auto answer settings
	 * 
	 * @param {String} agentId The agent to apply the auto answer settings to
	 * @param {Object} body AutoAnswerSettings
	 */
	putUsersAgentuiAgentsAutoanswerAgentIdSettings(agentId, body) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling putUsersAgentuiAgentsAutoanswerAgentIdSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUsersAgentuiAgentsAutoanswerAgentIdSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/users/agentui/agents/autoanswer/{agentId}/settings', 
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

}


export default SettingsApi;
