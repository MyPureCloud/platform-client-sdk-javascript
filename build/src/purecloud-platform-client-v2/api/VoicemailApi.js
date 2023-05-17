import ApiClient from '../ApiClient.js';


class VoicemailApi {
	/**
	 * Voicemail service.
	 * @module purecloud-platform-client-v2/api/VoicemailApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new VoicemailApi. 
	 * @alias module:purecloud-platform-client-v2/api/VoicemailApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a voicemail message.
	 * A user voicemail can only be deleted by its associated user. A group voicemail can only be deleted by a user that is a member of the group. A queue voicemail can only be deleted by a user with the acd voicemail delete permission.
	 * @param {String} messageId Message ID
	 */
	deleteVoicemailMessage(messageId) { 
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling deleteVoicemailMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/messages/{messageId}', 
			'DELETE', 
			{ 'messageId': messageId },
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
	 * Delete all voicemail messages
	 * 
	 */
	deleteVoicemailMessages() { 

		return this.apiClient.callApi(
			'/api/v2/voicemail/messages', 
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
	 * Get the group's mailbox information
	 * 
	 * @param {String} groupId groupId
	 */
	getVoicemailGroupMailbox(groupId) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getVoicemailGroupMailbox';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/groups/{groupId}/mailbox', 
			'GET', 
			{ 'groupId': groupId },
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
	 * List voicemail messages
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getVoicemailGroupMessages(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getVoicemailGroupMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/groups/{groupId}/messages', 
			'GET', 
			{ 'groupId': groupId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a group's voicemail policy
	 * 
	 * @param {String} groupId Group ID
	 */
	getVoicemailGroupPolicy(groupId) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getVoicemailGroupPolicy';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/groups/{groupId}/policy', 
			'GET', 
			{ 'groupId': groupId },
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
	 * Get the current user's mailbox information
	 * 
	 */
	getVoicemailMailbox() { 

		return this.apiClient.callApi(
			'/api/v2/voicemail/mailbox', 
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
	 * Get the current user's mailbox information
	 * 
	 */
	getVoicemailMeMailbox() { 

		return this.apiClient.callApi(
			'/api/v2/voicemail/me/mailbox', 
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
	 * List voicemail messages
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getVoicemailMeMessages(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/voicemail/me/messages', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the current user's voicemail policy
	 * 
	 */
	getVoicemailMePolicy() { 

		return this.apiClient.callApi(
			'/api/v2/voicemail/me/policy', 
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
	 * Get a voicemail message
	 * 
	 * @param {String} messageId Message ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand If the caller is a known user, which fields, if any, to expand
	 */
	getVoicemailMessage(messageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getVoicemailMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/messages/{messageId}', 
			'GET', 
			{ 'messageId': messageId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get media playback URI for this voicemail message
	 * 
	 * @param {String} messageId Message ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.formatId The desired media format. (default to WEBM)
	 */
	getVoicemailMessageMedia(messageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getVoicemailMessageMedia';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/messages/{messageId}/media', 
			'GET', 
			{ 'messageId': messageId },
			{ 'formatId': opts['formatId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List voicemail messages
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ids An optional comma separated list of VoicemailMessage ids
	 * @param {Array.<String>} opts.expand If the caller is a known user, which fields, if any, to expand
	 */
	getVoicemailMessages(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/voicemail/messages', 
			'GET', 
			{  },
			{ 'ids': opts['ids'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a policy
	 * 
	 */
	getVoicemailPolicy() { 

		return this.apiClient.callApi(
			'/api/v2/voicemail/policy', 
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
	 * List voicemail messages
	 * 
	 * @param {String} queueId Queue ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getVoicemailQueueMessages(queueId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling getVoicemailQueueMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/queues/{queueId}/messages', 
			'GET', 
			{ 'queueId': queueId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search voicemails using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 */
	getVoicemailSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getVoicemailSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/search', 
			'GET', 
			{  },
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a user's voicemail policy
	 * 
	 * @param {String} userId User ID
	 */
	getVoicemailUserpolicy(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getVoicemailUserpolicy';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/userpolicies/{userId}', 
			'GET', 
			{ 'userId': userId },
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
	 * Update a group's voicemail policy
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} body The group's voicemail policy
	 */
	patchVoicemailGroupPolicy(groupId, body) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling patchVoicemailGroupPolicy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchVoicemailGroupPolicy';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/groups/{groupId}/policy', 
			'PATCH', 
			{ 'groupId': groupId },
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
	 * Update the current user's voicemail policy
	 * 
	 * @param {Object} body The user's voicemail policy
	 */
	patchVoicemailMePolicy(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchVoicemailMePolicy';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/me/policy', 
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
	 * Update a voicemail message
	 * A user voicemail can only be modified by its associated user. A group voicemail can only be modified by a user that is a member of the group. A queue voicemail can only be modified by a participant of the conversation the voicemail is associated with.
	 * @param {String} messageId Message ID
	 * @param {Object} body VoicemailMessage
	 */
	patchVoicemailMessage(messageId, body) { 
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling patchVoicemailMessage';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchVoicemailMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/messages/{messageId}', 
			'PATCH', 
			{ 'messageId': messageId },
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
	 * Update a user's voicemail policy
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body The user's voicemail policy
	 */
	patchVoicemailUserpolicy(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchVoicemailUserpolicy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchVoicemailUserpolicy';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/userpolicies/{userId}', 
			'PATCH', 
			{ 'userId': userId },
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
	 * Copy a voicemail message to a user or group
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postVoicemailMessages(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/voicemail/messages', 
			'POST', 
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
	 * Search voicemails
	 * 
	 * @param {Object} body Search request options
	 */
	postVoicemailSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postVoicemailSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/search', 
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
	 * Update a voicemail message
	 * A user voicemail can only be modified by its associated user. A group voicemail can only be modified by a user that is a member of the group. A queue voicemail can only be modified by a participant of the conversation the voicemail is associated with.
	 * @param {String} messageId Message ID
	 * @param {Object} body VoicemailMessage
	 */
	putVoicemailMessage(messageId, body) { 
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling putVoicemailMessage';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putVoicemailMessage';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/messages/{messageId}', 
			'PUT', 
			{ 'messageId': messageId },
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
	 * Update a policy
	 * 
	 * @param {Object} body Policy
	 */
	putVoicemailPolicy(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putVoicemailPolicy';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/policy', 
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
	 * Update a user's voicemail policy
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body The user's voicemail policy
	 */
	putVoicemailUserpolicy(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putVoicemailUserpolicy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putVoicemailUserpolicy';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/userpolicies/{userId}', 
			'PUT', 
			{ 'userId': userId },
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


export default VoicemailApi;
