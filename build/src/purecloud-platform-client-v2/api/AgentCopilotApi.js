import ApiClient from '../ApiClient.js';


class AgentCopilotApi {
	/**
	 * AgentCopilot service.
	 * @module purecloud-platform-client-v2/api/AgentCopilotApi
	 * @version 225.0.0
	 */

	/**
	 * Constructs a new AgentCopilotApi. 
	 * @alias module:purecloud-platform-client-v2/api/AgentCopilotApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get copilot configuration of an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 */
	getAssistantCopilot(assistantId) { 
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling getAssistantCopilot';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/copilot', 
			'GET', 
			{ 'assistantId': assistantId },
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
	 * Update agent copilot configuration
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} body 
	 */
	putAssistantCopilot(assistantId, body) { 
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling putAssistantCopilot';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAssistantCopilot';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/copilot', 
			'PUT', 
			{ 'assistantId': assistantId },
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


export default AgentCopilotApi;
