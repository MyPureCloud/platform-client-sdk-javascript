import ApiClient from '../ApiClient.js';


class AgentAssistantsApi {
	/**
	 * AgentAssistants service.
	 * @module purecloud-platform-client-v2/api/AgentAssistantsApi
	 * @version 250.1.0
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
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteAssistant(assistantId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Disassociate a queue from an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteAssistantQueue(assistantId, queueId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Disassociate the queues from an assistant for the given assistant ID and queue IDs.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.queueIds Comma-separated identifiers of the queues that need to be deleted.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete an agent checklist
	 * 
	 * @param {String} agentChecklistId Agent Checklist ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteAssistantsAgentchecklist(agentChecklistId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'agentChecklistId' is set
		if (agentChecklistId === undefined || agentChecklistId === null || agentChecklistId === '') {
			throw 'Missing the required parameter "agentChecklistId" when calling deleteAssistantsAgentchecklist';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/agentchecklists/{agentChecklistId}', 
			'DELETE', 
			{ 'agentChecklistId': agentChecklistId },
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
	 * Get an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Which fields, if any, to expand.
	 * @param {String} opts.languageVariation Language variation
	 * @param {Boolean} opts.fallbackToPrimaryAssistant Fall back to primary assistant if specified variation is not found
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			{ 'expand': opts['expand'],'languageVariation': opts['languageVariation'],'fallbackToPrimaryAssistant': opts['fallbackToPrimaryAssistant'] },
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
	 * Get queue Information for an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get job details.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 * @param {String} jobId Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAssistantQueueUsersJob(assistantId, queueId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling getAssistantQueueUsersJob';
		}
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling getAssistantQueueUsersJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAssistantQueueUsersJob';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues/{queueId}/users/jobs/{jobId}', 
			'GET', 
			{ 'assistantId': assistantId,'queueId': queueId,'jobId': jobId },
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
	 * Get all the queues associated with an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an agent checklist
	 * 
	 * @param {String} agentChecklistId Agent Checklist ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAssistantsAgentchecklist(agentChecklistId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'agentChecklistId' is set
		if (agentChecklistId === undefined || agentChecklistId === null || agentChecklistId === '') {
			throw 'Missing the required parameter "agentChecklistId" when calling getAssistantsAgentchecklist';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/agentchecklists/{agentChecklistId}', 
			'GET', 
			{ 'agentChecklistId': agentChecklistId },
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
	 * Get the list of agent checklists
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize The page size for the listing. The max that will be returned is 100. (default to 25)
	 * @param {String} opts.namePrefix The agent checklist name prefix filter applied to the listing.
	 * @param {String} opts.language The agent checklist language filter applied to the listing.
	 * @param {Object} opts.sortOrder The sort order for the listing
	 * @param {Object} opts.sortBy The field to sort by for the listing.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAssistantsAgentchecklists(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/assistants/agentchecklists', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'namePrefix': opts['namePrefix'],'language': opts['language'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'] },
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
	 * Get the list of supported languages
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAssistantsAgentchecklistsLanguages(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/assistants/agentchecklists/languages', 
			'GET', 
			{  },
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
	 * Get all queues assigned to any assistant.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.queueIds Comma-separated identifiers of the queues that need to be retrieved.
	 * @param {Object} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchAssistant(assistantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update Queues for an Assistant.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {Array.<Object>} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchAssistantQueues(assistantId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk add users to assistant-queue (requires manual assignment mode).
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAssistantQueueUsersBulkAdd(assistantId, queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling postAssistantQueueUsersBulkAdd';
		}
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling postAssistantQueueUsersBulkAdd';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAssistantQueueUsersBulkAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues/{queueId}/users/bulk/add', 
			'POST', 
			{ 'assistantId': assistantId,'queueId': queueId },
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
	 * Bulk remove users from assistant-queue (requires manual assignment mode).
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAssistantQueueUsersBulkRemove(assistantId, queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling postAssistantQueueUsersBulkRemove';
		}
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling postAssistantQueueUsersBulkRemove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAssistantQueueUsersBulkRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues/{queueId}/users/bulk/remove', 
			'POST', 
			{ 'assistantId': assistantId,'queueId': queueId },
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
	 * Start a new job to assistant-queue.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAssistantQueueUsersJobs(assistantId, queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling postAssistantQueueUsersJobs';
		}
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling postAssistantQueueUsersJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAssistantQueueUsersJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues/{queueId}/users/jobs', 
			'POST', 
			{ 'assistantId': assistantId,'queueId': queueId },
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
	 * Query for users in the assistant-queue (requires manual assignment mode).
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand with.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAssistantQueueUsersQuery(assistantId, queueId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'assistantId' is set
		if (assistantId === undefined || assistantId === null || assistantId === '') {
			throw 'Missing the required parameter "assistantId" when calling postAssistantQueueUsersQuery';
		}
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling postAssistantQueueUsersQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAssistantQueueUsersQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/{assistantId}/queues/{queueId}/users/query', 
			'POST', 
			{ 'assistantId': assistantId,'queueId': queueId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Create an Assistant.
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAssistants(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an agent checklist
	 * 
	 * @param {Object} body Request body containing details of checklist to be added
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAssistantsAgentchecklists(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAssistantsAgentchecklists';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/agentchecklists', 
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
	 * Create a queue assistant association.
	 * 
	 * @param {String} assistantId Assistant ID
	 * @param {String} queueId Queue ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putAssistantQueue(assistantId, queueId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an agent checklist
	 * 
	 * @param {String} agentChecklistId Agent Checklist ID
	 * @param {Object} body Request body containing details of checklist to be updated
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putAssistantsAgentchecklist(agentChecklistId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'agentChecklistId' is set
		if (agentChecklistId === undefined || agentChecklistId === null || agentChecklistId === '') {
			throw 'Missing the required parameter "agentChecklistId" when calling putAssistantsAgentchecklist';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAssistantsAgentchecklist';
		}

		return this.apiClient.callApi(
			'/api/v2/assistants/agentchecklists/{agentChecklistId}', 
			'PUT', 
			{ 'agentChecklistId': agentChecklistId },
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


export default AgentAssistantsApi;
