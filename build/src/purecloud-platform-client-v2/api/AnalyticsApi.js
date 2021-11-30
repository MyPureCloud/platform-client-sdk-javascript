import ApiClient from '../ApiClient.js';


class AnalyticsApi {
	/**
	 * Analytics service.
	 * @module purecloud-platform-client-v2/api/AnalyticsApi
	 * @version 126.1.0
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
	 * Delete/cancel an async request
	 * 
	 * @param {String} jobId jobId
	 */
	deleteAnalyticsConversationsDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
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
	 * Delete a scheduled report job.
	 * 
	 * @param {String} scheduleId Schedule ID
	 */
	deleteAnalyticsReportingSchedule(scheduleId) { 
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling deleteAnalyticsReportingSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/schedules/{scheduleId}', 
			'DELETE', 
			{ 'scheduleId': scheduleId }, 
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
		if (jobId === undefined || jobId === null) {
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
	 * Get Reporting Turns.
	 * 
	 * @param {String} botFlowId ID of the bot flow.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the ID of the last item in the list of entities that has been returned.
	 * @param {String} opts.pageSize Max number of entities to return. Maximum of 250 (default to 50)
	 * @param {String} opts.actionId Optional action ID to get the reporting turns associated to a particular flow action
	 * @param {String} opts.sessionId Optional session ID to get the reporting turns for a particular session
	 */
	getAnalyticsBotflowReportingturns(botFlowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botFlowId' is set
		if (botFlowId === undefined || botFlowId === null) {
			throw 'Missing the required parameter "botFlowId" when calling getAnalyticsBotflowReportingturns';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/botflows/{botFlowId}/reportingturns', 
			'GET', 
			{ 'botFlowId': botFlowId }, 
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'actionId': opts['actionId'],'sessionId': opts['sessionId'] }, 
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
		if (conversationId === undefined || conversationId === null) {
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
		if (jobId === undefined || jobId === null) {
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
	 * Fetch a page of results for an async query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize The desired maximum number of results
	 */
	getAnalyticsConversationsDetailsJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
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
	 * Get list of reporting metadata.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.locale Locale
	 */
	getAnalyticsReportingMetadata(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/metadata', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'locale': opts['locale'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a reporting metadata.
	 * 
	 * @param {String} reportId Report ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.locale Locale
	 */
	getAnalyticsReportingReportIdMetadata(reportId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'reportId' is set
		if (reportId === undefined || reportId === null) {
			throw 'Missing the required parameter "reportId" when calling getAnalyticsReportingReportIdMetadata';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/{reportId}/metadata', 
			'GET', 
			{ 'reportId': reportId }, 
			{ 'locale': opts['locale'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of report formats
	 * Get a list of report formats.
	 */
	getAnalyticsReportingReportformats() { 

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/reportformats', 
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
	 * Get a scheduled report job.
	 * 
	 * @param {String} scheduleId Schedule ID
	 */
	getAnalyticsReportingSchedule(scheduleId) { 
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling getAnalyticsReportingSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/schedules/{scheduleId}', 
			'GET', 
			{ 'scheduleId': scheduleId }, 
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
	 * Get list of completed scheduled report jobs.
	 * 
	 * @param {String} scheduleId Schedule ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber  (default to 1)
	 * @param {Number} opts.pageSize  (default to 25)
	 */
	getAnalyticsReportingScheduleHistory(scheduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling getAnalyticsReportingScheduleHistory';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/schedules/{scheduleId}/history', 
			'GET', 
			{ 'scheduleId': scheduleId }, 
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
	 * Get most recently completed scheduled report job.
	 * 
	 * @param {String} scheduleId Schedule ID
	 */
	getAnalyticsReportingScheduleHistoryLatest(scheduleId) { 
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling getAnalyticsReportingScheduleHistoryLatest';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/schedules/{scheduleId}/history/latest', 
			'GET', 
			{ 'scheduleId': scheduleId }, 
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
	 * A completed scheduled report job
	 * A completed scheduled report job.
	 * @param {String} runId Run ID
	 * @param {String} scheduleId Schedule ID
	 */
	getAnalyticsReportingScheduleHistoryRunId(runId, scheduleId) { 
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null) {
			throw 'Missing the required parameter "runId" when calling getAnalyticsReportingScheduleHistoryRunId';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling getAnalyticsReportingScheduleHistoryRunId';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}', 
			'GET', 
			{ 'runId': runId,'scheduleId': scheduleId }, 
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
	 * Get a list of scheduled report jobs
	 * Get a list of scheduled report jobs.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getAnalyticsReportingSchedules(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/schedules', 
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
	 * Get a list of report time periods.
	 * 
	 */
	getAnalyticsReportingTimeperiods() { 

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/timeperiods', 
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
	 * Get status for async query for user details
	 * 
	 * @param {String} jobId jobId
	 */
	getAnalyticsUsersDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
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
		if (jobId === undefined || jobId === null) {
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
		if (conversationId === undefined || conversationId === null) {
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
	 * Place a scheduled report immediately into the reporting queue
	 * 
	 * @param {String} scheduleId Schedule ID
	 */
	postAnalyticsReportingScheduleRunreport(scheduleId) { 
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling postAnalyticsReportingScheduleRunreport';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/schedules/{scheduleId}/runreport', 
			'POST', 
			{ 'scheduleId': scheduleId }, 
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
	 * Create a scheduled report job
	 * Create a scheduled report job.
	 * @param {Object} body ReportSchedule
	 */
	postAnalyticsReportingSchedules(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsReportingSchedules';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/schedules', 
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
	 * Update a scheduled report job.
	 * 
	 * @param {String} scheduleId Schedule ID
	 * @param {Object} body ReportSchedule
	 */
	putAnalyticsReportingSchedule(scheduleId, body) { 
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling putAnalyticsReportingSchedule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAnalyticsReportingSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/reporting/schedules/{scheduleId}', 
			'PUT', 
			{ 'scheduleId': scheduleId }, 
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