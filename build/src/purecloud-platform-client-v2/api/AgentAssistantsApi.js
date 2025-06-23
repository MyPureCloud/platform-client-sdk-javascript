import ApiClient from '../ApiClient.js';


class AgentAssistantsApi {
	/**
	 * AgentAssistants service.
	 * @module purecloud-platform-client-v2/api/AgentAssistantsApi
	 * @version 225.0.0
	 */

	/**
	 * Constructs a new AgentAssistantsApi. 
	 * @alias module:purecloud-platform-client-v2/api/AgentAssistantsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 */
	deleteAssistant(assistantId) { 
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling deleteAssistant';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}', 
			'DELETE', 
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
	 * Disassociate a queue from an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 */
	deleteAssistantQueue(assistantId, queueId) { 
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling deleteAssistantQueue';
		}
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling deleteAssistantQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues/{queueId}', 
			'DELETE', 
			{ 'assistantId': assistantId,'queueId': queueId },
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
	 * Disassociate the queues from an assistant for the given assistant ID and queue IDs.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.queueIds Comma-separated identifiers of the queues that need to be deleted.
	 */
	deleteAssistantQueues(assistantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling deleteAssistantQueues';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues', 
			'DELETE', 
			{ 'assistantId': assistantId },
			{ 'queueIds': opts['queueIds'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Which fields, if any, to expand.
	 */
	getAssistant(assistantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling getAssistant';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}', 
			'GET', 
			{ 'assistantId': assistantId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get queue Information for an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Which fields, if any, to expand.
	 */
	getAssistantQueue(assistantId, queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling getAssistantQueue';
		}
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getAssistantQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues/{queueId}', 
			'GET', 
			{ 'assistantId': assistantId,'queueId': queueId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all the queues associated with an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object} opts.expand Which fields, if any, to expand.
	 */
	getAssistantQueues(assistantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling getAssistantQueues';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues', 
			'GET', 
			{ 'assistantId': assistantId },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all assistants.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.limit Number of entities to return. Maximum of 200. Deprecated in favour of pageSize
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.name Return the assistant by the given name.
	 * @param {Object} opts.expand Which fields, if any, to expand
	 */
	getAssistants(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/assistants', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'limit': opts['limit'],'pageSize': opts['pageSize'],'name': opts['name'],'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all queues assigned to any assistant.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.queueIds Comma-separated identifiers of the queues that need to be retrieved.
	 * @param {Object} opts.expand Which fields, if any, to expand.
	 */
	getAssistantsQueues(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/assistants/queues', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'queueIds': opts['queueIds'],'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} body 
	 */
	patchAssistant(assistantId, body) { 
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling patchAssistant';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAssistant';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}', 
			'PATCH', 
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
	 * Update Queues for an Assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Array.<Object>} body 
	 */
	patchAssistantQueues(assistantId, body) { 
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling patchAssistantQueues';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAssistantQueues';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues', 
			'PATCH', 
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
	 * Create an Assistant.
	 * 
	 * @param {Object} body 
	 */
	postAssistants(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAssistants';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants', 
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
	 * Create a queue assistant association.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 * @param {Object} body 
	 */
	putAssistantQueue(assistantId, queueId, body) { 
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling putAssistantQueue';
		}
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling putAssistantQueue';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAssistantQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues/{queueId}', 
			'PUT', 
			{ 'assistantId': assistantId,'queueId': queueId },
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


export default AgentAssistantsApi;
