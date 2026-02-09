import ApiClient from '../ApiClient.js';


class AssistantCopilotVariationsApi {
	/**
	 * AssistantCopilotVariations service.
	 * @module purecloud-platform-client-v2/api/AssistantCopilotVariationsApi
	 * @version 245.0.0
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
	 */
	deleteAssistantVariation(assistantId, variationId) { 
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
			['application/json']
		);
	}

	/**
	 * Get assistant copilot variation by id
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} variationId Variation ID
	 */
	getAssistantVariation(assistantId, variationId) { 
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
			['application/json']
		);
	}

	/**
	 * Get variations of an assistant copilot
	 * 
	 * @param {String} assistantId Assistant ID
	 */
	getAssistantVariations(assistantId) { 
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
			['application/json']
		);
	}

	/**
	 * Create assistant copilot variation
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} body 
	 */
	postAssistantVariations(assistantId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Update assistant copilot variation by id
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} variationId Variation ID
	 * @param {Object} body 
	 */
	putAssistantVariation(assistantId, variationId, body) { 
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
			['application/json']
		);
	}

}


export default AssistantCopilotVariationsApi;
