import ApiClient from '../ApiClient.js';


class AssistantCopilotVariationsApi {
	/**
	 * AssistantCopilotVariations service.
	 * @module purecloud-platform-client-v2/api/AssistantCopilotVariationsApi
	 * @version 252.1.0
	 */

	/**
	 * Constructs a new AssistantCopilotVariationsApi. 
	 * @alias module:purecloud-platform-client-v2/api/AssistantCopilotVariationsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete assistant copilot variation by id
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} variationId Variation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteAssistantVariation(assistantId, variationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling deleteAssistantVariation';
		}
		// verify the required parameter 'variationId' is set
		if (variationId === undefined || variationId === null || variationId === '') {
			throw 'Missing the required parameter "variationId" when calling deleteAssistantVariation';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/variations/{variationId}', 
			'DELETE', 
			{ 'assistantId': assistantId,'variationId': variationId },
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
	 * Get assistant copilot variation by id
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} variationId Variation ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAssistantVariation(assistantId, variationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling getAssistantVariation';
		}
		// verify the required parameter 'variationId' is set
		if (variationId === undefined || variationId === null || variationId === '') {
			throw 'Missing the required parameter "variationId" when calling getAssistantVariation';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/variations/{variationId}', 
			'GET', 
			{ 'assistantId': assistantId,'variationId': variationId },
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
	 * Get variations of an assistant copilot
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAssistantVariations(assistantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling getAssistantVariations';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/variations', 
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
	 * Create assistant copilot variation
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAssistantVariations(assistantId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling postAssistantVariations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAssistantVariations';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/variations', 
			'POST', 
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

	/**
	 * Update assistant copilot variation by id
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} variationId Variation ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putAssistantVariation(assistantId, variationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling putAssistantVariation';
		}
		// verify the required parameter 'variationId' is set
		if (variationId === undefined || variationId === null || variationId === '') {
			throw 'Missing the required parameter "variationId" when calling putAssistantVariation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAssistantVariation';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/variations/{variationId}', 
			'PUT', 
			{ 'assistantId': assistantId,'variationId': variationId },
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


export default AssistantCopilotVariationsApi;
