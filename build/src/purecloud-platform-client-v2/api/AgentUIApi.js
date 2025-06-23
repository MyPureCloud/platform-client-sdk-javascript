import ApiClient from '../ApiClient.js';


class AgentUIApi {
	/**
	 * AgentUI service.
	 * @module purecloud-platform-client-v2/api/AgentUIApi
	 * @version 225.0.0
	 */

	/**
	 * Constructs a new AgentUIApi. 
	 * @alias module:purecloud-platform-client-v2/api/AgentUIApi
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


export default AgentUIApi;
