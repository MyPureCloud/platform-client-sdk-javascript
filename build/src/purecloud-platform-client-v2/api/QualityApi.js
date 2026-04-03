import ApiClient from '../ApiClient.js';


class QualityApi {
	/**
	 * Quality service.
	 * @module purecloud-platform-client-v2/api/QualityApi
	 * @version 250.0.0
	 */

	/**
	 * Constructs a new QualityApi. 
	 * @alias module:purecloud-platform-client-v2/api/QualityApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete/cancel an async request for evaluation aggregates
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteAnalyticsEvaluationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteAnalyticsEvaluationsAggregatesJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling deleteAnalyticsEvaluationsAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/evaluations/aggregates/jobs/{jobId}', 
			'DELETE', 
			{ 'jobId': jobId },
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
	 * Delete/cancel an async request for survey aggregates
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteAnalyticsSurveysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteAnalyticsSurveysAggregatesJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling deleteAnalyticsSurveysAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/surveys/aggregates/jobs/{jobId}', 
			'DELETE', 
			{ 'jobId': jobId },
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
	 * Delete a calibration by id.
	 * 
	 * @param {String} calibrationId Calibration ID
	 * @param {String} calibratorId calibratorId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteQualityCalibration(calibrationId, calibratorId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'calibrationId' is set
		if (calibrationId === undefined || calibrationId === null || calibrationId === '') {
			throw 'Missing the required parameter "calibrationId" when calling deleteQualityCalibration';
		}
		// verify the required parameter 'calibratorId' is set
		if (calibratorId === undefined || calibratorId === null) {
			throw 'Missing the required parameter "calibratorId" when calling deleteQualityCalibration';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/calibrations/{calibrationId}', 
			'DELETE', 
			{ 'calibrationId': calibrationId },
			{ 'calibratorId': calibratorId },
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
	 * Delete an evaluation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} evaluationId evaluationId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand evaluatorId, evaluationForm
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteQualityConversationEvaluation(conversationId, evaluationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling deleteQualityConversationEvaluation';
		}
		// verify the required parameter 'evaluationId' is set
		if (evaluationId === undefined || evaluationId === null || evaluationId === '') {
			throw 'Missing the required parameter "evaluationId" when calling deleteQualityConversationEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
			'DELETE', 
			{ 'conversationId': conversationId,'evaluationId': evaluationId },
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
	 * Delete an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	deleteQualityForm(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling deleteQualityForm';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/{formId}', 
			'DELETE', 
			{ 'formId': formId },
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
	 * Delete an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteQualityFormsEvaluation(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling deleteQualityFormsEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/{formId}', 
			'DELETE', 
			{ 'formId': formId },
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
	 * Delete a survey form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteQualityFormsSurvey(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling deleteQualityFormsSurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/{formId}', 
			'DELETE', 
			{ 'formId': formId },
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
	 * Delete an Agent Scoring Rule
	 * 
	 * @param {String} programId Program ID from Speech and Text Analytics
	 * @param {String} ruleId Agent Scoring Rule ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteQualityProgramAgentscoringrule(programId, ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
			throw 'Missing the required parameter "programId" when calling deleteQualityProgramAgentscoringrule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling deleteQualityProgramAgentscoringrule';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/programs/{programId}/agentscoringrules/{ruleId}', 
			'DELETE', 
			{ 'programId': programId,'ruleId': ruleId },
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
	 * Get status for async query for evaluation aggregates
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getAnalyticsEvaluationsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsEvaluationsAggregatesJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get status for async query for survey aggregates
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getAnalyticsSurveysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsSurveysAggregatesJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch a page of results for an async aggregates query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a list of Agent Activities
	 * Each item on the list shows one agents evaluation activity comprised of the number of evaluations and the highest, average, and lowest standard and critical scores, as well as a sub list showing the number and average score of evaluations for each evaluator for that agent.  evaluatorUserId, startTime, and endTime are all filtering criteria. If specified, the only evaluations used to compile the agent activity response will be ones that match the filtering criteria. agentUserId, name, group, and agentTeamId are all agent selection criteria. criteria.  If one or more agent selection criteria are specified, then the returned activity will include users that match the criteria even if those users did not have any agent activity or evaluations that do not match any filtering criteria.  If no agent selection criteria are specified but an evaluatorUserId is, then the returned activity will be only for those agents that had evaluations where the evaluator is the evaluatorUserId.  If no agent selection criteria are specified and no evaluatorUserId is specified, then the returned activity will be for all users
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {Date} opts.startTime Start time of agent activity based on assigned date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.endTime End time of agent activity based on assigned date. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Array.<String>} opts.agentUserId user id of agent requested
	 * @param {String} opts.evaluatorUserId user id of the evaluator
	 * @param {String} opts.name name
	 * @param {String} opts.group group id
	 * @param {String} opts.agentTeamId team id of agents requested
	 * @param {String} opts.formContextId shared id between form versions
	 * @param {Object} opts.userState 'Legacy' fetches active and inactive users when evaluatorUserId or no user filters are supplied; otherwise fetches active users.  'Any' fetches users of 'active', 'inactive' and 'deleted' states. (default to Legacy)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityAgentsActivity(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/agents/activity', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'startTime': opts['startTime'],'endTime': opts['endTime'],'agentUserId': this.apiClient.buildCollectionParam(opts['agentUserId'], 'multi'),'evaluatorUserId': opts['evaluatorUserId'],'name': opts['name'],'group': opts['group'],'agentTeamId': opts['agentTeamId'],'formContextId': opts['formContextId'],'userState': opts['userState'] },
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
	 * Get a calibration by id.  Requires either calibrator id or conversation id
	 * 
	 * @param {String} calibrationId Calibration ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.calibratorId calibratorId
	 * @param {String} opts.conversationId conversationId
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityCalibration(calibrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'calibrationId' is set
		if (calibrationId === undefined || calibrationId === null || calibrationId === '') {
			throw 'Missing the required parameter "calibrationId" when calling getQualityCalibration';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/calibrations/{calibrationId}', 
			'GET', 
			{ 'calibrationId': calibrationId },
			{ 'calibratorId': opts['calibratorId'],'conversationId': opts['conversationId'] },
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
	 * Get the list of calibrations
	 * NOTE: The count for total and pageCount might not be accurate when querying for a large number of calibrations. nextUri, if present, will indicate that there are more calibrations to fetch.
	 * @param {String} calibratorId user id of calibrator
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.conversationId conversation id
	 * @param {Date} opts.startTime Beginning of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.endTime end of the calibration query. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityCalibrations(calibratorId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'calibratorId' is set
		if (calibratorId === undefined || calibratorId === null) {
			throw 'Missing the required parameter "calibratorId" when calling getQualityCalibrations';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/calibrations', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'conversationId': opts['conversationId'],'startTime': opts['startTime'],'endTime': opts['endTime'],'calibratorId': calibratorId },
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
	 * Get an evaluation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {String} evaluationId evaluationId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand agent, assignee, evaluator, evaluationForm
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityConversationEvaluation(conversationId, evaluationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getQualityConversationEvaluation';
		}
		// verify the required parameter 'evaluationId' is set
		if (evaluationId === undefined || evaluationId === null || evaluationId === '') {
			throw 'Missing the required parameter "evaluationId" when calling getQualityConversationEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
			'GET', 
			{ 'conversationId': conversationId,'evaluationId': evaluationId },
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
	 * Get the surveys for a conversation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityConversationSurveys(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getQualityConversationSurveys';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/surveys', 
			'GET', 
			{ 'conversationId': conversationId },
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
	 * Get status of audit query execution
	 * 
	 * @param {String} transactionId Transaction ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityConversationsAuditsQueryTransactionId(transactionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'transactionId' is set
		if (transactionId === undefined || transactionId === null || transactionId === '') {
			throw 'Missing the required parameter "transactionId" when calling getQualityConversationsAuditsQueryTransactionId';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/audits/query/{transactionId}', 
			'GET', 
			{ 'transactionId': transactionId },
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
	 * Get results of audit query
	 * 
	 * @param {String} transactionId Transaction ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityConversationsAuditsQueryTransactionIdResults(transactionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'transactionId' is set
		if (transactionId === undefined || transactionId === null || transactionId === '') {
			throw 'Missing the required parameter "transactionId" when calling getQualityConversationsAuditsQueryTransactionIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/audits/query/{transactionId}/results', 
			'GET', 
			{ 'transactionId': transactionId },
			{ 'cursor': opts['cursor'],'pageSize': opts['pageSize'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Queries Evaluations and returns a paged list
	 * Query params must include one of conversationId, evaluatorUserId, agentUserId or assigneeUserId. When querying by agentUserId (and not conversationId or evaluatorUserId), the results are sorted by release date. Evaluations set to Never Release are omitted in this case. When querying by evaluatorUserId or conversationId (including when combined with agentUserId), the results are sorted by assigned date. NOTE: The count for total and pageCount might not be accurate when querying for a large number of evaluations. nextUri, if present, will indicate that there are more evaluations to fetch. The evaluation entities contained in the response might only contain a subset of all the properties listed below. It is often because a given propertys value has not yet been populated or is not applicable in the current state of the evaluation. It might also be because the missing property in the response was not requested by the user.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.conversationId conversationId specified
	 * @param {String} opts.agentUserId user id of the agent
	 * @param {String} opts.agentTeamId team id of the agent
	 * @param {String} opts.evaluatorUserId evaluator user id
	 * @param {String} opts.assigneeUserId assignee user id
	 * @param {String} opts.queueId queue id
	 * @param {String} opts.startTime start time of the evaluation query
	 * @param {String} opts.endTime end time of the evaluation query
	 * @param {String} opts.formContextId shared id between form versions
	 * @param {Array.<String>} opts.evaluationState 
	 * @param {Boolean} opts.isReleased the evaluation has been released
	 * @param {Boolean} opts.agentHasRead agent has the evaluation
	 * @param {Boolean} opts.expandAnswerTotalScores get the total scores for evaluations. NOTE: The answers will only be populated if this parameter is set to true in the request.
	 * @param {Number} opts.maximum the maximum number of results to return
	 * @param {String} opts.sortOrder NOTE: Does not work when conversationId is supplied.
	 * @param {Boolean} opts.includeDeletedUsers Allow returning an agent or evaluator user with a 'delete' status. Defaults to false. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityEvaluationsQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/evaluations/query', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'previousPage': opts['previousPage'],'conversationId': opts['conversationId'],'agentUserId': opts['agentUserId'],'agentTeamId': opts['agentTeamId'],'evaluatorUserId': opts['evaluatorUserId'],'assigneeUserId': opts['assigneeUserId'],'queueId': opts['queueId'],'startTime': opts['startTime'],'endTime': opts['endTime'],'formContextId': opts['formContextId'],'evaluationState': this.apiClient.buildCollectionParam(opts['evaluationState'], 'multi'),'isReleased': opts['isReleased'],'agentHasRead': opts['agentHasRead'],'expandAnswerTotalScores': opts['expandAnswerTotalScores'],'maximum': opts['maximum'],'sortOrder': opts['sortOrder'],'includeDeletedUsers': opts['includeDeletedUsers'] },
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
	 * Get an evaluator activity. To ensure optimal performance and prevent timeouts when processing large datasets, startTime and endTime fields are highly recommended for all requests.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {Date} opts.startTime The start time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} opts.endTime The end time specified. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {String} opts.name Evaluator name
	 * @param {Array.<String>} opts.permission permission strings
	 * @param {String} opts.group group id
	 * @param {String} opts.agentTeamId team id of agents to be considered
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityEvaluatorsActivity(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/evaluators/activity', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'startTime': opts['startTime'],'endTime': opts['endTime'],'name': opts['name'],'permission': this.apiClient.buildCollectionParam(opts['permission'], 'multi'),'group': opts['group'],'agentTeamId': opts['agentTeamId'] },
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
	 * Get an evaluation form
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getQualityForm(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling getQualityForm';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/{formId}', 
			'GET', 
			{ 'formId': formId },
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
	 * Gets all the revisions for a specific evaluation.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getQualityFormVersions(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling getQualityFormVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/{formId}/versions', 
			'GET', 
			{ 'formId': formId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] },
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
	 * Get the list of evaluation forms. If you set expand=publishHistory, then you will be able to get published versions for each corresponding evaluation form.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {Object} opts.expand If 'expand=publishHistory', then each unpublished evaluation form includes a listing of its published versions
	 * @param {String} opts.name Name
	 * @param {String} opts.sortOrder Order to sort results, either asc or desc
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getQualityForms(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/forms', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'expand': opts['expand'],'name': opts['name'],'sortOrder': opts['sortOrder'] },
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
	 * Get an evaluation form
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityFormsEvaluation(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling getQualityFormsEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/{formId}', 
			'GET', 
			{ 'formId': formId },
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
	 * Gets all the revisions for a specific evaluation.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityFormsEvaluationVersions(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling getQualityFormsEvaluationVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/{formId}/versions', 
			'GET', 
			{ 'formId': formId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] },
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
	 * Get the list of evaluation forms
	 * By default, "published" field is always returned as false for all evaluation forms. If you set "expand=publishHistory", then you will be able to get published versions for each corresponding evaluation form. In addition, "questionGroups", the detailed information about evaluation form, is not returned. We will enhance this field in a future release.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {Object} opts.expand If 'expand=publishHistory', then each unpublished evaluation form includes a listing of its published versions
	 * @param {String} opts.name Name
	 * @param {String} opts.sortOrder Order to sort results, either asc or desc
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityFormsEvaluations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'expand': opts['expand'],'name': opts['name'],'sortOrder': opts['sortOrder'] },
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
	 * Retrieve a list of evaluation forms by their ids
	 * 
	 * @param {Array.<String>} id A comma-delimited list of valid evaluation form ids. The maximum number of ids allowed in this list is 100
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeLatestVersionFormName Whether to include the name of the form's most recently published version (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityFormsEvaluationsBulk(id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling getQualityFormsEvaluationsBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/bulk', 
			'GET', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi'),'includeLatestVersionFormName': opts['includeLatestVersionFormName'] },
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
	 * Retrieve a list of the latest published evaluation form versions by context ids
	 * 
	 * @param {Array.<String>} contextId A comma-delimited list of valid evaluation form context ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityFormsEvaluationsBulkContexts(contextId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contextId' is set
		if (contextId === undefined || contextId === null) {
			throw 'Missing the required parameter "contextId" when calling getQualityFormsEvaluationsBulkContexts';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/bulk/contexts', 
			'GET', 
			{  },
			{ 'contextId': this.apiClient.buildCollectionParam(contextId, 'multi') },
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
	 * Get a survey form
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityFormsSurvey(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling getQualityFormsSurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/{formId}', 
			'GET', 
			{ 'formId': formId },
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
	 * Gets all the revisions for a specific survey.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityFormsSurveyVersions(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling getQualityFormsSurveyVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/{formId}/versions', 
			'GET', 
			{ 'formId': formId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
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
	 * Get the list of survey forms. If you set expand=publishHistory, then you will be able to get published versions for each corresponding survey form.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {Object} opts.expand If 'expand=publishHistory', then each unpublished evaluation form includes a listing of its published versions
	 * @param {String} opts.name Name
	 * @param {String} opts.sortOrder Order to sort results, either asc or desc
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityFormsSurveys(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'expand': opts['expand'],'name': opts['name'],'sortOrder': opts['sortOrder'] },
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
	 * Retrieve a list of survey forms by their ids
	 * 
	 * @param {Array.<String>} id A comma-delimited list of valid survey form ids
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityFormsSurveysBulk(id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling getQualityFormsSurveysBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/bulk', 
			'GET', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi') },
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
	 * Retrieve a list of the latest form versions by context ids
	 * 
	 * @param {Array.<String>} contextId A comma-delimited list of valid survey form context ids. The maximum number of ids allowed in this list is 100.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.published If true, the latest published version will be included. If false, only the unpublished version will be included. (default to true)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityFormsSurveysBulkContexts(contextId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contextId' is set
		if (contextId === undefined || contextId === null) {
			throw 'Missing the required parameter "contextId" when calling getQualityFormsSurveysBulkContexts';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/bulk/contexts', 
			'GET', 
			{  },
			{ 'contextId': this.apiClient.buildCollectionParam(contextId, 'multi'),'published': opts['published'] },
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
	 * Get an Agent Scoring Rule
	 * 
	 * @param {String} programId Program ID from Speech and Text Analytics
	 * @param {String} ruleId Agent Scoring Rule ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityProgramAgentscoringrule(programId, ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
			throw 'Missing the required parameter "programId" when calling getQualityProgramAgentscoringrule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling getQualityProgramAgentscoringrule';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/programs/{programId}/agentscoringrules/{ruleId}', 
			'GET', 
			{ 'programId': programId,'ruleId': ruleId },
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
	 * Get Agent Scoring Rules for a program
	 * 
	 * @param {String} programId Program ID from Speech and Text Analytics
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityProgramAgentscoringrules(programId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
			throw 'Missing the required parameter "programId" when calling getQualityProgramAgentscoringrules';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/programs/{programId}/agentscoringrules', 
			'GET', 
			{ 'programId': programId },
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
	 * Get the published evaluation forms.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getQualityPublishedform(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling getQualityPublishedform';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/{formId}', 
			'GET', 
			{ 'formId': formId },
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
	 * Get the published evaluation forms.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {Boolean} opts.onlyLatestPerContext onlyLatestPerContext (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getQualityPublishedforms(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'onlyLatestPerContext': opts['onlyLatestPerContext'] },
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
	 * Get the most recent published version of an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityPublishedformsEvaluation(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling getQualityPublishedformsEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/evaluations/{formId}', 
			'GET', 
			{ 'formId': formId },
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
	 * Get the published evaluation forms.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {Boolean} opts.onlyLatestPerContext onlyLatestPerContext (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityPublishedformsEvaluations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/evaluations', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'onlyLatestPerContext': opts['onlyLatestPerContext'] },
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
	 * Get the most recent published version of a survey form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityPublishedformsSurvey(formId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling getQualityPublishedformsSurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/surveys/{formId}', 
			'GET', 
			{ 'formId': formId },
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
	 * Get the published survey forms.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.name Name
	 * @param {Boolean} opts.onlyLatestEnabledPerContext onlyLatestEnabledPerContext (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualityPublishedformsSurveys(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/surveys', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'onlyLatestEnabledPerContext': opts['onlyLatestEnabledPerContext'] },
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
	 * Get a survey for a conversation
	 * 
	 * @param {String} surveyId surveyId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualitySurvey(surveyId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'surveyId' is set
		if (surveyId === undefined || surveyId === null || surveyId === '') {
			throw 'Missing the required parameter "surveyId" when calling getQualitySurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/surveys/{surveyId}', 
			'GET', 
			{ 'surveyId': surveyId },
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
	 * Get a survey as an end-customer, for the purposes of scoring it.
	 * 
	 * @param {String} customerSurveyUrl customerSurveyUrl
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getQualitySurveysScorable(customerSurveyUrl, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'customerSurveyUrl' is set
		if (customerSurveyUrl === undefined || customerSurveyUrl === null) {
			throw 'Missing the required parameter "customerSurveyUrl" when calling getQualitySurveysScorable';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/surveys/scorable', 
			'GET', 
			{  },
			{ 'customerSurveyUrl': customerSurveyUrl },
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
	 * Disable a particular version of a survey form and invalidates any invitations that have already been sent to customers using this version of the form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} body Survey form
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchQualityFormsSurvey(formId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling patchQualityFormsSurvey';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchQualityFormsSurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/{formId}', 
			'PATCH', 
			{ 'formId': formId },
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
	 * Query for evaluation aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postAnalyticsEvaluationsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsEvaluationsAggregatesJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for evaluation aggregates
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsEvaluationsAggregatesQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for survey aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postAnalyticsSurveysAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsSurveysAggregatesJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for survey aggregates
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsSurveysAggregatesQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a calibration
	 * 
	 * @param {Object} body calibration
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand calibratorId
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityCalibrations(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityCalibrations';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/calibrations', 
			'POST', 
			{  },
			{ 'expand': opts['expand'] },
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
	 * Create an evaluation
	 * 
	 * @param {String} conversationId conversationId
	 * @param {Object} body evaluation
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.idempotencyKey Idempotency key for request deduplication
	 * @param {String} opts.expand evaluatorId
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityConversationEvaluations(conversationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling postQualityConversationEvaluations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityConversationEvaluations';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/evaluations', 
			'POST', 
			{ 'conversationId': conversationId },
			{ 'expand': opts['expand'] },
			{ 'Idempotency-Key': opts['idempotencyKey'] },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create audit query execution
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityConversationsAuditsQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityConversationsAuditsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/audits/query', 
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
	 * Query for evaluation aggregates for the current user
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityEvaluationsAggregatesQueryMe(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityEvaluationsAggregatesQueryMe';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/evaluations/aggregates/query/me', 
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
	 * Score evaluation
	 * 
	 * @param {Object} body evaluationAndScoringSet
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityEvaluationsScoring(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityEvaluationsScoring';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/evaluations/scoring', 
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
	 * Search evaluations based along specified criteria
	 * Search Rules: 1. Time Range    - Time Range: Max 3 months (required) 2. Question Group Level Query: Use at least one field containing questionGroup in name + exactly one questionGroupId 3. Question Level Query: Use at least one field containing question in name + exactly one questionId 4. Mixed Queries: questionId alone is sufficient 5. Search Logic:    - Multiple criteria: AND operation    - Multiple values per criterion: OR operation    EXAMPLE: (agentId₁ OR agentId₂) AND (evaluatorId₁ OR evaluatorId₂) 5. Aggregations:    - Omit or set pageSize = 0    - Choose: multiple aggregations OR single aggregation with multiple sub-aggregations    - To aggregate against question fields, one must query by either a questionId OR a single top level TERM questionId aggregation AND query by a single formID or questionGroupId, or list of questionIds    - To aggregate against question group fields, one must query either a questionId/questionGroupId OR a single top level TERM questionGroupId aggregation AND query by a single formID or list of questionGroupIds 
	 * @param {Object} body Evaluation search request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityEvaluationsSearch(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityEvaluationsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/evaluations/search', 
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
	 * Create an evaluation form.
	 * 
	 * @param {Object} body Evaluation form
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postQualityForms(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityForms';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms', 
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
	 * Create an evaluation form.
	 * 
	 * @param {Object} body Evaluation form
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityFormsEvaluations(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityFormsEvaluations';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations', 
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
	 * Create a survey form.
	 * 
	 * @param {Object} body Survey form
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityFormsSurveys(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityFormsSurveys';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys', 
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
	 * Create an Agent Scoring Rule
	 * Creates a new Agent Scoring Rule for AI-powered automated evaluation of agent interactions. The rule defines how interactions should be selected and evaluated using the specified evaluation form.
	 * @param {String} programId Program ID from Speech and Text Analytics
	 * @param {Object} body Agent Scoring Rule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityProgramAgentscoringrules(programId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
			throw 'Missing the required parameter "programId" when calling postQualityProgramAgentscoringrules';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityProgramAgentscoringrules';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/programs/{programId}/agentscoringrules', 
			'POST', 
			{ 'programId': programId },
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
	 * Publish an evaluation form.
	 * 
	 * @param {Object} body Publish request containing id of form to publish
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postQualityPublishedforms(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityPublishedforms';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms', 
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
	 * Publish an evaluation form.
	 * 
	 * @param {Object} body Publish request containing id of form to publish
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityPublishedformsEvaluations(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityPublishedformsEvaluations';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/evaluations', 
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
	 * Publish a survey form.
	 * 
	 * @param {Object} body Survey form
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualityPublishedformsSurveys(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualityPublishedformsSurveys';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/publishedforms/surveys', 
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
	 * Create a survey for a conversation
	 * 
	 * @param {Object} body Survey creation request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualitySurveys(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualitySurveys';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/surveys', 
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
	 * Score survey
	 * 
	 * @param {Object} body surveyAndScoringSet
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postQualitySurveysScoring(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postQualitySurveysScoring';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/surveys/scoring', 
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
	 * Update a calibration to the specified calibration via PUT.  Editable fields include: evaluators, expertEvaluator, and scoringIndex
	 * 
	 * @param {String} calibrationId Calibration ID
	 * @param {Object} body Calibration
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putQualityCalibration(calibrationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'calibrationId' is set
		if (calibrationId === undefined || calibrationId === null || calibrationId === '') {
			throw 'Missing the required parameter "calibrationId" when calling putQualityCalibration';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityCalibration';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/calibrations/{calibrationId}', 
			'PUT', 
			{ 'calibrationId': calibrationId },
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
	 * Update an evaluation
	 * The quality:evaluation:edit permission allows modification of most fields, while the quality:evaluation:editScore permission allows an evaluator to change just the question scores, and the quality:evaluation:editAgentSignoff permission allows an agent to change the agent comments and sign off on the evaluation. authorizedActions is not returned for this PUT request, and is only returned for GET requests to this endpoint.
	 * @param {String} conversationId conversationId
	 * @param {String} evaluationId evaluationId
	 * @param {Object} body evaluation
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand evaluatorId, evaluationForm, assignee, evaluator
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putQualityConversationEvaluation(conversationId, evaluationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling putQualityConversationEvaluation';
		}
		// verify the required parameter 'evaluationId' is set
		if (evaluationId === undefined || evaluationId === null || evaluationId === '') {
			throw 'Missing the required parameter "evaluationId" when calling putQualityConversationEvaluation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityConversationEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/conversations/{conversationId}/evaluations/{evaluationId}', 
			'PUT', 
			{ 'conversationId': conversationId,'evaluationId': evaluationId },
			{ 'expand': opts['expand'] },
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
	 * Update an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} body Evaluation form
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	putQualityForm(formId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling putQualityForm';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityForm';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/{formId}', 
			'PUT', 
			{ 'formId': formId },
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
	 * Update an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} body Evaluation form
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putQualityFormsEvaluation(formId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling putQualityFormsEvaluation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityFormsEvaluation';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/{formId}', 
			'PUT', 
			{ 'formId': formId },
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
	 * Update the AI Scoring settings of an evaluation form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} body AI Scoring Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putQualityFormsEvaluationAiscoringSettings(formId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling putQualityFormsEvaluationAiscoringSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityFormsEvaluationAiscoringSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/evaluations/{formId}/aiscoring/settings', 
			'PUT', 
			{ 'formId': formId },
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
	 * Update a survey form.
	 * 
	 * @param {String} formId Form ID
	 * @param {Object} body Survey form
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putQualityFormsSurvey(formId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'formId' is set
		if (formId === undefined || formId === null || formId === '') {
			throw 'Missing the required parameter "formId" when calling putQualityFormsSurvey';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityFormsSurvey';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/forms/surveys/{formId}', 
			'PUT', 
			{ 'formId': formId },
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
	 * Update an Agent Scoring Rule
	 * 
	 * @param {String} programId Program ID from Speech and Text Analytics
	 * @param {String} ruleId Agent Scoring Rule ID
	 * @param {Object} body Agent Scoring Rule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putQualityProgramAgentscoringrule(programId, ruleId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
			throw 'Missing the required parameter "programId" when calling putQualityProgramAgentscoringrule';
		}
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling putQualityProgramAgentscoringrule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualityProgramAgentscoringrule';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/programs/{programId}/agentscoringrules/{ruleId}', 
			'PUT', 
			{ 'programId': programId,'ruleId': ruleId },
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
	 * Update a survey as an end-customer, for the purposes of scoring it.
	 * 
	 * @param {String} customerSurveyUrl customerSurveyUrl
	 * @param {Object} body survey
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putQualitySurveysScorable(customerSurveyUrl, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'customerSurveyUrl' is set
		if (customerSurveyUrl === undefined || customerSurveyUrl === null) {
			throw 'Missing the required parameter "customerSurveyUrl" when calling putQualitySurveysScorable';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putQualitySurveysScorable';
		}

		return this.apiClient.callApi(
			'/api/v2/quality/surveys/scorable', 
			'PUT', 
			{  },
			{ 'customerSurveyUrl': customerSurveyUrl },
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


export default QualityApi;
