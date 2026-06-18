import ApiClient from '../ApiClient.js';


class AgentCopilotApi {
	/**
	 * AgentCopilot service.
	 * @module purecloud-platform-client-v2/api/AgentCopilotApi
	 * @version 255.1.0
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
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAssistantCopilot(assistantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get information about the support of features for all the languages or only for a certain language.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.language Which language are the features supported for
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAssistantsCopilotFeaturesupport(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/assistants/copilot/featuresupport', 
			'GET', 
			{  },
			{ 'language': opts['language'] },
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
	 * Update agent copilot configuration
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putAssistantCopilot(assistantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default AgentCopilotApi;
