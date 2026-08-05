import ApiClient from '../ApiClient.js';


class ScreenMonitoringApi {
	/**
	 * ScreenMonitoring service.
	 * @module purecloud-platform-client-v2/api/ScreenMonitoringApi
	 * @version 258.1.0
	 */

	/**
	 * Constructs a new ScreenMonitoringApi. 
	 * @alias module:purecloud-platform-client-v2/api/ScreenMonitoringApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Stop a conversation-level screen monitoring session.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} participantId Participant ID
	 * @param {String} screenMonitoringId Screen Monitoring ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationParticipantScreenmonitorsSession(conversationId, participantId, screenMonitoringId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling deleteConversationParticipantScreenmonitorsSession';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling deleteConversationParticipantScreenmonitorsSession';
		}
		// verify the required parameter 'screenMonitoringId' is set
		if (screenMonitoringId === undefined || screenMonitoringId === null || screenMonitoringId === '') {
			throw 'Missing the required parameter "screenMonitoringId" when calling deleteConversationParticipantScreenmonitorsSession';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions/{screenMonitoringId}', 
			'DELETE', 
			{ 'conversationId': conversationId,'participantId': participantId,'screenMonitoringId': screenMonitoringId },
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
	 * Stop an agent-level screen monitoring session.
	 * 
	 * @param {String} userId User ID
	 * @param {String} screenMonitoringId Screen Monitoring ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteUserScreenmonitorsSession(userId, screenMonitoringId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteUserScreenmonitorsSession';
		}
		// verify the required parameter 'screenMonitoringId' is set
		if (screenMonitoringId === undefined || screenMonitoringId === null || screenMonitoringId === '') {
			throw 'Missing the required parameter "screenMonitoringId" when calling deleteUserScreenmonitorsSession';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/screenmonitors/sessions/{screenMonitoringId}', 
			'DELETE', 
			{ 'userId': userId,'screenMonitoringId': screenMonitoringId },
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
	 * Get a conversation-level screen monitoring session object using the supplied screenMonitoringId.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} participantId Participant ID
	 * @param {String} screenMonitoringId Screen Monitoring ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationParticipantScreenmonitorsSession(conversationId, participantId, screenMonitoringId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getConversationParticipantScreenmonitorsSession';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling getConversationParticipantScreenmonitorsSession';
		}
		// verify the required parameter 'screenMonitoringId' is set
		if (screenMonitoringId === undefined || screenMonitoringId === null || screenMonitoringId === '') {
			throw 'Missing the required parameter "screenMonitoringId" when calling getConversationParticipantScreenmonitorsSession';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions/{screenMonitoringId}', 
			'GET', 
			{ 'conversationId': conversationId,'participantId': participantId,'screenMonitoringId': screenMonitoringId },
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
	 * Get the details of all screen monitoring sessions for the current organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getScreenmonitorsSessionsDetails(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/screenmonitors/sessions/details', 
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
	 * Get the Screen Monitor Settings for the Organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getScreenmonitorsSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/screenmonitors/settings', 
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
	 * Get all screen monitoring sessions for the supplied userId.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getScreenmonitorsUserSessions(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getScreenmonitorsUserSessions';
		}

		return this.apiClient.callApi(
			'/api/v2/screenmonitors/users/{userId}/sessions', 
			'GET', 
			{ 'userId': userId },
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
	 * Get an agent-level screen monitoring session object using the supplied screenMonitoringId.
	 * 
	 * @param {String} userId User ID
	 * @param {String} screenMonitoringId Screen Monitoring ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserScreenmonitorsSession(userId, screenMonitoringId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserScreenmonitorsSession';
		}
		// verify the required parameter 'screenMonitoringId' is set
		if (screenMonitoringId === undefined || screenMonitoringId === null || screenMonitoringId === '') {
			throw 'Missing the required parameter "screenMonitoringId" when calling getUserScreenmonitorsSession';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/screenmonitors/sessions/{screenMonitoringId}', 
			'GET', 
			{ 'userId': userId,'screenMonitoringId': screenMonitoringId },
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
	 * Start a conversation-level screen monitoring session.
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} participantId Participant ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationParticipantScreenmonitorsSessions(conversationId, participantId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postConversationParticipantScreenmonitorsSessions';
		}
		// verify the required parameter 'participantId' is set
		if (participantId === undefined || participantId === null || participantId === '') {
			throw 'Missing the required parameter "participantId" when calling postConversationParticipantScreenmonitorsSessions';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions', 
			'POST', 
			{ 'conversationId': conversationId,'participantId': participantId },
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
	 * Get screen monitor session details for one or more users.
	 * 
	 * @param {Array.<String>} body List of target user IDs
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postScreenmonitorsSessionsUsersDetails(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postScreenmonitorsSessionsUsersDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/screenmonitors/sessions/users/details', 
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
	 * Start an agent-level screen monitoring session.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUserScreenmonitorsSessions(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postUserScreenmonitorsSessions';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/screenmonitors/sessions', 
			'POST', 
			{ 'userId': userId },
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
	 * Update the Screen Monitor Settings for the Organization
	 * 
	 * @param {Object} body Screen Monitor settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putScreenmonitorsSettings(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putScreenmonitorsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/screenmonitors/settings', 
			'PUT', 
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

}


export default ScreenMonitoringApi;
