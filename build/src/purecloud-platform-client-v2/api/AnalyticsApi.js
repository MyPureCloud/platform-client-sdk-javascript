import ApiClient from '../ApiClient.js';


class AnalyticsApi {
	/**
	 * Analytics service.
	 * @module purecloud-platform-client-v2/api/AnalyticsApi
	 * @version 225.0.0
	 */

	/**
	 * Constructs a new AnalyticsApi. 
	 * @alias module:purecloud-platform-client-v2/api/AnalyticsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete/cancel an async details job
	 * 
	 * @param {String} jobId jobId
	 */
	deleteAnalyticsConversationsDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling deleteAnalyticsConversationsDetailsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/jobs/{jobId}', 
			'DELETE', 
			{ 'jobId': jobId },
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
	 * Delete/cancel an async request
	 * 
	 * @param {String} jobId jobId
	 */
	deleteAnalyticsUsersDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling deleteAnalyticsUsersDetailsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/jobs/{jobId}', 
			'DELETE', 
			{ 'jobId': jobId },
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
	 * Get status for async query for action aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsActionsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsActionsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsActionsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/actions/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsActionsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsActionsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsActionsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/actions/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get an agent and their active sessions by user ID
	 * 
	 * @param {String} userId userId
	 */
	getAnalyticsAgentStatus(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getAnalyticsAgentStatus';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/agents/{userId}/status', 
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
	 * Get status for async query for agent copilot aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsAgentcopilotsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsAgentcopilotsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsAgentcopilotsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/agentcopilots/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsAgentcopilotsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsAgentcopilotsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsAgentcopilotsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/agentcopilots/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Reporting Turns (division aware).
	 * Returns the reporting turns for the specified flow, filtered by the clients divisions and grouped by session, in reverse chronological order from the date the session was created, with the reporting turns from the most recent session appearing at the start of the list. It is expected that the client will URL encode the request URI once only. For pagination, clients should keep sending requests using the value of nextUri in the response, until its no longer present, only then have all items have been returned. The nextUri value in the response is already URL encoded (so it doesnt need to be encoded again). Note: resources returned by this endpoint are not persisted indefinitely, as they are deleted after approximately, but not before, 10 days.
	 * @param {String} botFlowId ID of the bot flow.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the ID of the last item in the list of entities that has been returned.
	 * @param {String} opts.pageSize Max number of entities to return. Maximum of 250 (default to 50)
	 * @param {String} opts.interval Date range filter based on the date the individual resources were completed. UTC is the default if no TZ is supplied, however alternate timezones can be used e.g: '2022-11-22T09:11:11.111+08:00/2022-11-30T07:17:44.586-07'. . Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {String} opts.actionId Optional action ID to get the reporting turns associated to a particular flow action
	 * @param {String} opts.sessionId Optional session ID to get the reporting turns for a particular session. Specifying a session ID alongside an action ID or a language or any ask action results is not allowed.
	 * @param {String} opts.language Optional language code to get the reporting turns for a particular language
	 * @param {Object} opts.askActionResults Optional case-insensitive comma separated list of ask action results to filter the reporting turns.
	 */
	getAnalyticsBotflowDivisionsReportingturns(botFlowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botFlowId' is set
		if (botFlowId === undefined || botFlowId === null || botFlowId === '') {
			throw 'Missing the required parameter "botFlowId" when calling getAnalyticsBotflowDivisionsReportingturns';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/botflows/{botFlowId}/divisions/reportingturns', 
			'GET', 
			{ 'botFlowId': botFlowId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'interval': opts['interval'],'actionId': opts['actionId'],'sessionId': opts['sessionId'],'language': opts['language'],'askActionResults': opts['askActionResults'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Reporting Turns.
	 * Deprecated: Please use GET /analytics/botflows/{botFlowId}/divisions/reportingturns instead. Returns the reporting turns grouped by session, in reverse chronological order from the date the session was created, with the reporting turns from the most recent session appearing at the start of the list. It is expected that the client will URL encode the request URI once only. For pagination, clients should keep sending requests using the value of nextUri in the response, until its no longer present, only then have all items have been returned. The nextUri value in the response is already URL encoded (so it doesnt need to be encoded again). Note: resources returned by this endpoint are not persisted indefinitely, as they are deleted after approximately, but not before, 10 days.
	 * @param {String} botFlowId ID of the bot flow.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the ID of the last item in the list of entities that has been returned.
	 * @param {String} opts.pageSize Max number of entities to return. Maximum of 250 (default to 50)
	 * @param {String} opts.interval Date range filter based on the date the individual resources were completed. UTC is the default if no TZ is supplied, however alternate timezones can be used e.g: '2022-11-22T09:11:11.111+08:00/2022-11-30T07:17:44.586-07'. . Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {String} opts.actionId Optional action ID to get the reporting turns associated to a particular flow action
	 * @param {String} opts.sessionId Optional session ID to get the reporting turns for a particular session. Specifying a session ID alongside an action ID or a language or any ask action results is not allowed.
	 * @param {String} opts.language Optional language code to get the reporting turns for a particular language
	 * @param {Object} opts.askActionResults Optional case-insensitive comma separated list of ask action results to filter the reporting turns.
	 * @deprecated
	 */
	getAnalyticsBotflowReportingturns(botFlowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botFlowId' is set
		if (botFlowId === undefined || botFlowId === null || botFlowId === '') {
			throw 'Missing the required parameter "botFlowId" when calling getAnalyticsBotflowReportingturns';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/botflows/{botFlowId}/reportingturns', 
			'GET', 
			{ 'botFlowId': botFlowId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'interval': opts['interval'],'actionId': opts['actionId'],'sessionId': opts['sessionId'],'language': opts['language'],'askActionResults': opts['askActionResults'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Bot Flow Sessions.
	 * Returns the bot flow sessions in reverse chronological order from the date they were created. It is expected that the client will URL encode the request URI once only. For pagination, clients should keep sending requests using the value of nextUri in the response, until its no longer present, only then have all items have been returned. The nextUri value in the response is already URL encoded (so it doesnt need to be encoded again). Note: resources returned by this endpoint are not persisted indefinitely, as they are deleted after approximately, but not before, 10 days.
	 * @param {String} botFlowId ID of the bot flow.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the ID of the last item in the list of entities that has been returned.
	 * @param {String} opts.pageSize Max number of entities to return. Maximum of 250 (default to 50)
	 * @param {String} opts.interval Date range filter based on the date the individual resources were completed. UTC is the default if no TZ is supplied, however alternate timezones can be used e.g: '2022-11-22T09:11:11.111+08:00/2022-11-30T07:17:44.586-07'. . Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.botResultCategories Optional case-insensitive comma separated list of Bot Result Categories to filter sessions by.
	 * @param {String} opts.endLanguage Optional case-insensitive language code to filter sessions by the language the sessions ended in.
	 */
	getAnalyticsBotflowSessions(botFlowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botFlowId' is set
		if (botFlowId === undefined || botFlowId === null || botFlowId === '') {
			throw 'Missing the required parameter "botFlowId" when calling getAnalyticsBotflowSessions';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/botflows/{botFlowId}/sessions', 
			'GET', 
			{ 'botFlowId': botFlowId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'interval': opts['interval'],'botResultCategories': opts['botResultCategories'],'endLanguage': opts['endLanguage'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for bot aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsBotsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsBotsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsBotsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/bots/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsBotsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsBotsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsBotsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/bots/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a conversation by id
	 * 
	 * @param {String} conversationId conversationId
	 */
	getAnalyticsConversationDetails(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getAnalyticsConversationDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/{conversationId}/details', 
			'GET', 
			{ 'conversationId': conversationId },
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
	 * Get status for async query for conversation aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsConversationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsConversationsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsConversationsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsConversationsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsConversationsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsConversationsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets multiple conversations by id
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.id Comma-separated conversation ids
	 */
	getAnalyticsConversationsDetails(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details', 
			'GET', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for conversation details
	 * 
	 * @param {String} jobId jobId
	 */
	getAnalyticsConversationsDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsConversationsDetailsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async details job
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize The desired maximum number of results
	 */
	getAnalyticsConversationsDetailsJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsConversationsDetailsJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Lookup the datalake availability date and time
	 * 
	 */
	getAnalyticsConversationsDetailsJobsAvailability() { 

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/jobs/availability', 
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
	 * Get analytics data retention setting
	 * 
	 */
	getAnalyticsDataretentionSettings() { 

		return this.apiClient.callApi(
			'/api/v2/analytics/dataretention/settings', 
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
	 * Get status for async query for evaluation aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsEvaluationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsEvaluationsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsEvaluationsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/evaluations/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsEvaluationsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsEvaluationsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsEvaluationsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/evaluations/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for flow execution aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsFlowexecutionsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsFlowexecutionsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsFlowexecutionsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsFlowexecutionsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsFlowexecutionsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsFlowexecutionsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flowexecutions/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for Flow aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsFlowsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsFlowsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsFlowsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flows/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsFlowsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsFlowsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsFlowsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flows/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for journey aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsJourneysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsJourneysAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsJourneysAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/journeys/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsJourneysAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsJourneysAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsJourneysAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/journeys/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for knowledge aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsKnowledgeAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsKnowledgeAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsKnowledgeAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/knowledge/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsKnowledgeAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsKnowledgeAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsKnowledgeAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/knowledge/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get dashboards summary for a user
	 * 
	 * @param {String} userId User ID
	 */
	getAnalyticsReportingDashboardsUser(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getAnalyticsReportingDashboardsUser';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/dashboards/users/{userId}', 
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
	 * Get dashboards summary for users in a org
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.sortBy  (default to asc)
	 * @param {Number} opts.pageNumber  (default to 1)
	 * @param {Number} opts.pageSize  (default to 25)
	 * @param {Array.<String>} opts.id A list of user IDs to fetch by bulk
	 * @param {Object} opts.state Only list users of this state
	 * @param {Boolean} opts.deletedOnly Only list users with deleted dashboards
	 */
	getAnalyticsReportingDashboardsUsers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/dashboards/users', 
			'GET', 
			{  },
			{ 'sortBy': opts['sortBy'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'state': opts['state'],'deletedOnly': opts['deletedOnly'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all view export requests for a user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getAnalyticsReportingExports(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/exports', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all export metadata
	 * 
	 */
	getAnalyticsReportingExportsMetadata() { 

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/exports/metadata', 
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
	 * Get AnalyticsReportingSettings for an organization
	 * 
	 */
	getAnalyticsReportingSettings() { 

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/settings', 
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
	 * Get list of dashboard configurations
	 * 
	 * @param {Object} dashboardType List dashboard of given type
	 * @param {Object} dashboardAccessFilter Filter dashboard based on the owner of dashboard
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.name name of the dashboard
	 * @param {Object} opts.dashboardState List dashboard of given state (default to Active)
	 * @param {String} opts.sortBy  (default to desc)
	 * @param {Number} opts.pageNumber  (default to 1)
	 * @param {Number} opts.pageSize  (default to 9)
	 */
	getAnalyticsReportingSettingsDashboardsQuery(dashboardType, dashboardAccessFilter, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dashboardType' is set
		if (dashboardType === undefined || dashboardType === null) {
			throw 'Missing the required parameter "dashboardType" when calling getAnalyticsReportingSettingsDashboardsQuery';
		}
		// verify the required parameter 'dashboardAccessFilter' is set
		if (dashboardAccessFilter === undefined || dashboardAccessFilter === null) {
			throw 'Missing the required parameter "dashboardAccessFilter" when calling getAnalyticsReportingSettingsDashboardsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/settings/dashboards/query', 
			'GET', 
			{  },
			{ 'name': opts['name'],'dashboardType': dashboardType,'dashboardState': opts['dashboardState'],'dashboardAccessFilter': dashboardAccessFilter,'sortBy': opts['sortBy'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get list of dashboards for an user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.sortBy  (default to asc)
	 * @param {Number} opts.pageNumber  (default to 1)
	 * @param {Number} opts.pageSize  (default to 50)
	 * @param {Boolean} opts.publicOnly If true, retrieve only public dashboards
	 * @param {Boolean} opts.favoriteOnly If true, retrieve only favorite dashboards
	 * @param {Boolean} opts.deletedOnly If true, retrieve only deleted dashboards that are still recoverable
	 * @param {String} opts.name retrieve dashboards that match with given name
	 */
	getAnalyticsReportingSettingsUserDashboards(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getAnalyticsReportingSettingsUserDashboards';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/settings/users/{userId}/dashboards', 
			'GET', 
			{ 'userId': userId },
			{ 'sortBy': opts['sortBy'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'publicOnly': opts['publicOnly'],'favoriteOnly': opts['favoriteOnly'],'deletedOnly': opts['deletedOnly'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for resolution aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsResolutionsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsResolutionsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsResolutionsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/resolutions/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsResolutionsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsResolutionsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsResolutionsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/resolutions/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for summary aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsSummariesAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsSummariesAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsSummariesAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/summaries/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsSummariesAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsSummariesAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsSummariesAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/summaries/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for survey aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsSurveysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsSurveysAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsSurveysAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/surveys/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsSurveysAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsSurveysAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsSurveysAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/surveys/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for task management aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsTaskmanagementAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsTaskmanagementAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsTaskmanagementAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/taskmanagement/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async task management query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsTaskmanagementAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsTaskmanagementAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsTaskmanagementAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/taskmanagement/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for transcript aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsTranscriptsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsTranscriptsAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsTranscriptsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/transcripts/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsTranscriptsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsTranscriptsAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsTranscriptsAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/transcripts/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for user aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsUsersAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsUsersAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsUsersAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/aggregates/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * getAnalyticsUsersAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsUsersAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsUsersAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/aggregates/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status for async query for user details
	 * 
	 * @param {String} jobId jobId
	 */
	getAnalyticsUsersDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsUsersDetailsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Fetch a page of results for an async query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize The desired maximum number of results
	 */
	getAnalyticsUsersDetailsJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsUsersDetailsJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId },
			{ 'cursor': opts['cursor'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Lookup the datalake availability date and time
	 * 
	 */
	getAnalyticsUsersDetailsJobsAvailability() { 

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/jobs/availability', 
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
	 * Patch AnalyticsReportingSettings values for an organization
	 * 
	 * @param {Object} body AnalyticsReportingSettingsRequest
	 */
	patchAnalyticsReportingSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAnalyticsReportingSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/settings', 
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
	 * Query for action aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsActionsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsActionsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsActionsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/actions/aggregates/jobs', 
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
	 * Query for action aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsActionsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsActionsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/actions/aggregates/query', 
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
	 * Query for agent copilot aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsAgentcopilotsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsAgentcopilotsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsAgentcopilotsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/agentcopilots/aggregates/jobs', 
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
	 * Query for agent copilot aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsAgentcopilotsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsAgentcopilotsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/agentcopilots/aggregates/query', 
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
	 * Count agents by different groupings
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsAgentsStatusCounts(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsAgentsStatusCounts';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/agents/status/counts', 
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
	 * Retrieve the top 50 agents matching the query filters
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsAgentsStatusQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsAgentsStatusQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/agents/status/query', 
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
	 * Query for bot aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsBotsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsBotsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsBotsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/bots/aggregates/jobs', 
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
	 * Query for bot aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsBotsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsBotsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/bots/aggregates/query', 
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
	 * Index conversation properties
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body request
	 */
	postAnalyticsConversationDetailsProperties(conversationId, body) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postAnalyticsConversationDetailsProperties';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationDetailsProperties';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/{conversationId}/details/properties', 
			'POST', 
			{ 'conversationId': conversationId },
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
	 * Query for conversation activity observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The desired page size
	 * @param {Number} opts.pageNumber The desired page number
	 */
	postAnalyticsConversationsActivityQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsActivityQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/activity/query', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query for conversation aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsConversationsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsConversationsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/aggregates/jobs', 
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
	 * Query for conversation aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsConversationsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/aggregates/query', 
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
	 * Query for conversation details asynchronously
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsConversationsDetailsJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsDetailsJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/jobs', 
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
	 * Query for conversation details
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsConversationsDetailsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsDetailsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/details/query', 
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
	 * Search resources.
	 * 
	 * @param {Object} body Search request options
	 */
	postAnalyticsConversationsTranscriptsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsTranscriptsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/transcripts/query', 
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
	 * Query for evaluation aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsEvaluationsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsEvaluationsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsEvaluationsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/evaluations/aggregates/jobs', 
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
	 * Query for evaluation aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsEvaluationsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsEvaluationsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/evaluations/aggregates/query', 
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
	 * Query for flow execution aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsFlowexecutionsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsFlowexecutionsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsFlowexecutionsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flowexecutions/aggregates/jobs', 
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
	 * Query for flow execution aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsFlowexecutionsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsFlowexecutionsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flowexecutions/aggregates/query', 
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
	 * Query for flow activity observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The desired page size
	 * @param {Number} opts.pageNumber The desired page number
	 */
	postAnalyticsFlowsActivityQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsFlowsActivityQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flows/activity/query', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query for flow aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsFlowsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsFlowsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsFlowsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flows/aggregates/jobs', 
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
	 * Query for flow aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsFlowsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsFlowsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flows/aggregates/query', 
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
	 * Query for flow observations
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsFlowsObservationsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsFlowsObservationsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flows/observations/query', 
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
	 * Query for journey aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsJourneysAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsJourneysAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsJourneysAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/journeys/aggregates/jobs', 
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
	 * Query for journey aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsJourneysAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsJourneysAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/journeys/aggregates/query', 
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
	 * Query for knowledge aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsKnowledgeAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsKnowledgeAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsKnowledgeAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/knowledge/aggregates/jobs', 
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
	 * Query for knowledge aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsKnowledgeAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsKnowledgeAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/knowledge/aggregates/query', 
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
	 * Query for queue observations
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsQueuesObservationsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsQueuesObservationsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/queues/observations/query', 
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
	 * Query for limits rate limit aggregates. Data populated when limits reach 90% of the maximum. Not a source of truth for limits hit but a best effort estimate.
	 * The max property can be used to determine estimated rate limit value hit. See https://developer.genesys.cloud/organization/organization/limits#available-limits for limits that are trackable (Operational Events Enabled).
	 * @param {Object} body query
	 */
	postAnalyticsRatelimitsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsRatelimitsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/ratelimits/aggregates/query', 
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
	 * Bulk soft delete dashboards owned by other user(s)
	 * 
	 * @param {Array.<String>} body List of userIds
	 */
	postAnalyticsReportingDashboardsUsersBulkRemove(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsReportingDashboardsUsersBulkRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/dashboards/users/bulk/remove', 
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
	 * Generate a view export request
	 * This API creates a reporting export but the desired way to export analytics data is to use the analytics query APIs instead
	 * @param {Object} body ReportingExportJobRequest
	 */
	postAnalyticsReportingExports(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsReportingExports';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/exports', 
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
	 * Bulk soft delete dashboard configurations
	 * 
	 * @param {Object} body 
	 */
	postAnalyticsReportingSettingsDashboardsBulkRemove(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsReportingSettingsDashboardsBulkRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/settings/dashboards/bulk/remove', 
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
	 * Query dashboard configurations
	 * 
	 * @param {Object} body 
	 */
	postAnalyticsReportingSettingsDashboardsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsReportingSettingsDashboardsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/settings/dashboards/query', 
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
	 * Query for resolution aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsResolutionsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsResolutionsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsResolutionsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/resolutions/aggregates/jobs', 
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
	 * Query for resolution aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsResolutionsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsResolutionsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/resolutions/aggregates/query', 
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
	 * Query for user activity observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The desired page size
	 * @param {Number} opts.pageNumber The desired page number
	 */
	postAnalyticsRoutingActivityQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsRoutingActivityQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/routing/activity/query', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query for summary aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsSummariesAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsSummariesAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsSummariesAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/summaries/aggregates/jobs', 
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
	 * Query for summary aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsSummariesAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsSummariesAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/summaries/aggregates/query', 
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
	 * Query for survey aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsSurveysAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsSurveysAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsSurveysAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/surveys/aggregates/jobs', 
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
	 * Query for survey aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsSurveysAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsSurveysAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/surveys/aggregates/query', 
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
	 * Query for task management aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsTaskmanagementAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsTaskmanagementAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsTaskmanagementAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/taskmanagement/aggregates/jobs', 
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
	 * Query for task management aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsTaskmanagementAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsTaskmanagementAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/taskmanagement/aggregates/query', 
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
	 * Query for team activity observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The desired page size
	 * @param {Number} opts.pageNumber The desired page number
	 */
	postAnalyticsTeamsActivityQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsTeamsActivityQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/teams/activity/query', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query for transcript aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsTranscriptsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsTranscriptsAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsTranscriptsAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/transcripts/aggregates/jobs', 
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
	 * Query for transcript aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsTranscriptsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsTranscriptsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/transcripts/aggregates/query', 
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
	 * Query for user activity observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The desired page size
	 * @param {Number} opts.pageNumber The desired page number
	 */
	postAnalyticsUsersActivityQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersActivityQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/activity/query', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query for user aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * postAnalyticsUsersAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsUsersAggregatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/aggregates/jobs', 
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
	 * Query for user aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsUsersAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/aggregates/query', 
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
	 * Query for user details asynchronously
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsUsersDetailsJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersDetailsJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/jobs', 
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
	 * Query for user details
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsUsersDetailsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersDetailsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/query', 
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
	 * Query for user observations
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsUsersObservationsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersObservationsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/observations/query', 
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
	 * Update analytics data retention setting
	 * 
	 * @param {Object} body retentionDays
	 */
	putAnalyticsDataretentionSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAnalyticsDataretentionSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/dataretention/settings', 
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

}


export default AnalyticsApi;
