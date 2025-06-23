import ApiClient from '../ApiClient.js';


class JourneyApi {
	/**
	 * Journey service.
	 * @module purecloud-platform-client-v2/api/JourneyApi
	 * @version 225.0.0
	 */

	/**
	 * Constructs a new JourneyApi. 
	 * @alias module:purecloud-platform-client-v2/api/JourneyApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete single action map.
	 * 
	 * @param {String} actionMapId ID of the action map.
	 */
	deleteJourneyActionmap(actionMapId) { 
		// verify the required parameter 'actionMapId' is set
		if (actionMapId === undefined || actionMapId === null || actionMapId === '') {
			throw 'Missing the required parameter "actionMapId" when calling deleteJourneyActionmap';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actionmaps/{actionMapId}', 
			'DELETE', 
			{ 'actionMapId': actionMapId },
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
	 * Delete a single action template.
	 * 
	 * @param {String} actionTemplateId ID of the action template.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.hardDelete Determines whether Action Template should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.
	 */
	deleteJourneyActiontemplate(actionTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionTemplateId' is set
		if (actionTemplateId === undefined || actionTemplateId === null || actionTemplateId === '') {
			throw 'Missing the required parameter "actionTemplateId" when calling deleteJourneyActiontemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actiontemplates/{actionTemplateId}', 
			'DELETE', 
			{ 'actionTemplateId': actionTemplateId },
			{ 'hardDelete': opts['hardDelete'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete an outcome.
	 * 
	 * @param {String} outcomeId ID of the outcome.
	 */
	deleteJourneyOutcome(outcomeId) { 
		// verify the required parameter 'outcomeId' is set
		if (outcomeId === undefined || outcomeId === null || outcomeId === '') {
			throw 'Missing the required parameter "outcomeId" when calling deleteJourneyOutcome';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes/{outcomeId}', 
			'DELETE', 
			{ 'outcomeId': outcomeId },
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
	 * Delete an outcome predictor.
	 * 
	 * @param {String} predictorId ID of predictor
	 */
	deleteJourneyOutcomesPredictor(predictorId) { 
		// verify the required parameter 'predictorId' is set
		if (predictorId === undefined || predictorId === null || predictorId === '') {
			throw 'Missing the required parameter "predictorId" when calling deleteJourneyOutcomesPredictor';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes/predictors/{predictorId}', 
			'DELETE', 
			{ 'predictorId': predictorId },
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
	 * Delete a segment.
	 * 
	 * @param {String} segmentId ID of the segment.
	 */
	deleteJourneySegment(segmentId) { 
		// verify the required parameter 'segmentId' is set
		if (segmentId === undefined || segmentId === null || segmentId === '') {
			throw 'Missing the required parameter "segmentId" when calling deleteJourneySegment';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/segments/{segmentId}', 
			'DELETE', 
			{ 'segmentId': segmentId },
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
	 * Delete a Journey View by ID
	 * deletes all versions
	 * @param {String} viewId viewId
	 */
	deleteJourneyView(viewId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling deleteJourneyView';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}', 
			'DELETE', 
			{ 'viewId': viewId },
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
	 * Delete the Schedule of a JourneyView
	 * 
	 * @param {String} viewId Journey View Id
	 */
	deleteJourneyViewSchedules(viewId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling deleteJourneyViewSchedules';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/schedules', 
			'DELETE', 
			{ 'viewId': viewId },
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
	 * Retrieve all sessions for a given external contact.
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Boolean} opts.includeMerged Indicates whether to return sessions from all external contacts in the merge-set of the given one.
	 */
	getExternalcontactsContactJourneySessions(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContactJourneySessions';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/journey/sessions', 
			'GET', 
			{ 'contactId': contactId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'],'includeMerged': opts['includeMerged'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve a single action map.
	 * 
	 * @param {String} actionMapId ID of the action map.
	 */
	getJourneyActionmap(actionMapId) { 
		// verify the required parameter 'actionMapId' is set
		if (actionMapId === undefined || actionMapId === null || actionMapId === '') {
			throw 'Missing the required parameter "actionMapId" when calling getJourneyActionmap';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actionmaps/{actionMapId}', 
			'GET', 
			{ 'actionMapId': actionMapId },
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
	 * Retrieve all action maps.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate).
	 * @param {String} opts.filterField Field to filter by (e.g. filterField=weight or filterField=action.actionTemplate.id). Requires 'filterField' to also be set.
	 * @param {String} opts.filterValue Value to filter by. Requires 'filterValue' to also be set.
	 * @param {Array.<String>} opts.actionMapIds IDs of action maps to return. Use of this parameter is not compatible with pagination, filtering, sorting or querying. A maximum of 100 action maps are allowed per request.
	 * @param {Array.<String>} opts.queryFields Action Map field(s) to query on. Requires 'queryValue' to also be set.
	 * @param {String} opts.queryValue Value to query on. Requires 'queryFields' to also be set.
	 */
	getJourneyActionmaps(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/actionmaps', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'filterField': opts['filterField'],'filterValue': opts['filterValue'],'actionMapIds': this.apiClient.buildCollectionParam(opts['actionMapIds'], 'multi'),'queryFields': this.apiClient.buildCollectionParam(opts['queryFields'], 'multi'),'queryValue': opts['queryValue'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get status of job.
	 * 
	 * @param {String} jobId ID of the job.
	 */
	getJourneyActionmapsEstimatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getJourneyActionmapsEstimatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actionmaps/estimates/jobs/{jobId}', 
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
	 * Get estimates from completed job.
	 * 
	 * @param {String} jobId ID of the job.
	 */
	getJourneyActionmapsEstimatesJobResults(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getJourneyActionmapsEstimatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actionmaps/estimates/jobs/{jobId}/results', 
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
	 * Retrieve a single action target.
	 * 
	 * @param {String} actionTargetId ID of the action target.
	 */
	getJourneyActiontarget(actionTargetId) { 
		// verify the required parameter 'actionTargetId' is set
		if (actionTargetId === undefined || actionTargetId === null || actionTargetId === '') {
			throw 'Missing the required parameter "actionTargetId" when calling getJourneyActiontarget';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actiontargets/{actionTargetId}', 
			'GET', 
			{ 'actionTargetId': actionTargetId },
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
	 * Retrieve all action targets.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getJourneyActiontargets(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/actiontargets', 
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
	 * Retrieve a single action template.
	 * 
	 * @param {String} actionTemplateId ID of the action template.
	 */
	getJourneyActiontemplate(actionTemplateId) { 
		// verify the required parameter 'actionTemplateId' is set
		if (actionTemplateId === undefined || actionTemplateId === null || actionTemplateId === '') {
			throw 'Missing the required parameter "actionTemplateId" when calling getJourneyActiontemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actiontemplates/{actionTemplateId}', 
			'GET', 
			{ 'actionTemplateId': actionTemplateId },
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
	 * Retrieve all action templates.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=name,-createdDate).
	 * @param {Object} opts.mediaType Media type
	 * @param {Object} opts.state Action template state.
	 * @param {Array.<String>} opts.queryFields ActionTemplate field(s) to query on. Requires 'queryValue' to also be set.
	 * @param {String} opts.queryValue Value to query on. Requires 'queryFields' to also be set.
	 */
	getJourneyActiontemplates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/actiontemplates', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'mediaType': opts['mediaType'],'state': opts['state'],'queryFields': this.apiClient.buildCollectionParam(opts['queryFields'], 'multi'),'queryValue': opts['queryValue'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Send a ping.
	 * 
	 * @param {String} deploymentId The ID of the deployment sending the ping.
	 * @param {String} customerCookieId ID of the customer associated with the ping.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.dl Document Location: 1) Web Page URL if overridden or URL fragment identifier (window.location.hash). OR  2) Application screen name that the ping request was sent from in the app. e.g. 'home' or 'help. Pings without this parameter will not return actions.
	 * @param {String} opts.dt Document Title.  A human readable name for the page or screen
	 * @param {String} opts.appNamespace Namespace of the application (e.g. com.genesys.bancodinero). Used for domain filtering in application sessions
	 * @param {String} opts.sessionId UUID of the customer session. Use the same Session Id for all pings, AppEvents and ActionEvents in the session
	 * @param {Number} opts.sinceLastBeaconMilliseconds How long (milliseconds) since the last app event or beacon was sent. The response may return a pollInternvalMilliseconds to reduce the frequency of pings.
	 */
	getJourneyDeploymentCustomerPing(deploymentId, customerCookieId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling getJourneyDeploymentCustomerPing';
		}
		// verify the required parameter 'customerCookieId' is set
		if (customerCookieId === undefined || customerCookieId === null || customerCookieId === '') {
			throw 'Missing the required parameter "customerCookieId" when calling getJourneyDeploymentCustomerPing';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/ping', 
			'GET', 
			{ 'deploymentId': deploymentId,'customerCookieId': customerCookieId },
			{ 'dl': opts['dl'],'dt': opts['dt'],'appNamespace': opts['appNamespace'],'sessionId': opts['sessionId'],'sinceLastBeaconMilliseconds': opts['sinceLastBeaconMilliseconds'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve a single outcome.
	 * 
	 * @param {String} outcomeId ID of the outcome.
	 */
	getJourneyOutcome(outcomeId) { 
		// verify the required parameter 'outcomeId' is set
		if (outcomeId === undefined || outcomeId === null || outcomeId === '') {
			throw 'Missing the required parameter "outcomeId" when calling getJourneyOutcome';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes/{outcomeId}', 
			'GET', 
			{ 'outcomeId': outcomeId },
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
	 * Retrieve all outcomes.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate).
	 * @param {Array.<String>} opts.outcomeIds IDs of outcomes to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 20 outcomes are allowed per request.
	 * @param {Array.<String>} opts.queryFields Outcome field(s) to query on. Requires 'queryValue' to also be set.
	 * @param {String} opts.queryValue Value to query on. Requires 'queryFields' to also be set.
	 */
	getJourneyOutcomes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'outcomeIds': this.apiClient.buildCollectionParam(opts['outcomeIds'], 'multi'),'queryFields': this.apiClient.buildCollectionParam(opts['queryFields'], 'multi'),'queryValue': opts['queryValue'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get job status.
	 * 
	 * @param {String} jobId ID of the job.
	 * getJourneyOutcomesAttributionsJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getJourneyOutcomesAttributionsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getJourneyOutcomesAttributionsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes/attributions/jobs/{jobId}', 
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
	 * Get outcome attribution entities from completed job.
	 * 
	 * @param {String} jobId ID of the job.
	 * getJourneyOutcomesAttributionsJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getJourneyOutcomesAttributionsJobResults(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getJourneyOutcomesAttributionsJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes/attributions/jobs/{jobId}/results', 
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
	 * Retrieve a single outcome predictor.
	 * 
	 * @param {String} predictorId ID of predictor
	 */
	getJourneyOutcomesPredictor(predictorId) { 
		// verify the required parameter 'predictorId' is set
		if (predictorId === undefined || predictorId === null || predictorId === '') {
			throw 'Missing the required parameter "predictorId" when calling getJourneyOutcomesPredictor';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes/predictors/{predictorId}', 
			'GET', 
			{ 'predictorId': predictorId },
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
	 * Retrieve all outcome predictors.
	 * 
	 */
	getJourneyOutcomesPredictors() { 

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes/predictors', 
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
	 * Retrieve a single segment.
	 * 
	 * @param {String} segmentId ID of the segment.
	 */
	getJourneySegment(segmentId) { 
		// verify the required parameter 'segmentId' is set
		if (segmentId === undefined || segmentId === null || segmentId === '') {
			throw 'Missing the required parameter "segmentId" when calling getJourneySegment';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/segments/{segmentId}', 
			'GET', 
			{ 'segmentId': segmentId },
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
	 * Retrieve all segments.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.sortBy Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate).
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.isActive Determines whether or not to show only active segments.
	 * @param {Array.<String>} opts.segmentIds IDs of segments to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 100 segments are allowed per request.
	 * @param {Array.<String>} opts.queryFields Segment field(s) to query on. Requires 'queryValue' to also be set.
	 * @param {String} opts.queryValue Value to query on. Requires 'queryFields' to also be set.
	 */
	getJourneySegments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/segments', 
			'GET', 
			{  },
			{ 'sortBy': opts['sortBy'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'isActive': opts['isActive'],'segmentIds': this.apiClient.buildCollectionParam(opts['segmentIds'], 'multi'),'queryFields': this.apiClient.buildCollectionParam(opts['queryFields'], 'multi'),'queryValue': opts['queryValue'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve a single session.
	 * 
	 * @param {String} sessionId ID of the session.
	 */
	getJourneySession(sessionId) { 
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling getJourneySession';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/sessions/{sessionId}', 
			'GET', 
			{ 'sessionId': sessionId },
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
	 * Retrieve all events for a given session.
	 * 
	 * @param {String} sessionId System-generated UUID that represents the session the event is a part of.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Object} opts.eventType A comma separated list of journey event types to include in the results.
	 */
	getJourneySessionEvents(sessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling getJourneySessionEvents';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/sessions/{sessionId}/events', 
			'GET', 
			{ 'sessionId': sessionId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'],'eventType': opts['eventType'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve latest outcome score associated with a session for all outcomes.
	 * 
	 * @param {String} sessionId ID of the session.
	 */
	getJourneySessionOutcomescores(sessionId) { 
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling getJourneySessionOutcomescores';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/sessions/{sessionId}/outcomescores', 
			'GET', 
			{ 'sessionId': sessionId },
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
	 * Get a Journey View by ID
	 * returns the latest version
	 * @param {String} viewId viewId
	 */
	getJourneyView(viewId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling getJourneyView';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}', 
			'GET', 
			{ 'viewId': viewId },
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
	 * Get the Schedule for a JourneyView
	 * 
	 * @param {String} viewId Journey View Id
	 */
	getJourneyViewSchedules(viewId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewSchedules';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/schedules', 
			'GET', 
			{ 'viewId': viewId },
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
	 * Get a Journey View by ID and version
	 * 
	 * @param {String} viewId viewId
	 * @param {String} versionId versionId
	 */
	getJourneyViewVersion(viewId, versionId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getJourneyViewVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions/{versionId}', 
			'GET', 
			{ 'viewId': viewId,'versionId': versionId },
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
	 * Get a Chart by ID
	 * returns the latest version
	 * @param {String} viewId viewId
	 * @param {String} journeyViewVersion Journey View Version
	 * @param {String} chartId chartId
	 */
	getJourneyViewVersionChart(viewId, journeyViewVersion, chartId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewVersionChart';
		}
		// verify the required parameter 'journeyViewVersion' is set
		if (journeyViewVersion === undefined || journeyViewVersion === null || journeyViewVersion === '') {
			throw 'Missing the required parameter "journeyViewVersion" when calling getJourneyViewVersionChart';
		}
		// verify the required parameter 'chartId' is set
		if (chartId === undefined || chartId === null || chartId === '') {
			throw 'Missing the required parameter "chartId" when calling getJourneyViewVersionChart';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/charts/{chartId}', 
			'GET', 
			{ 'viewId': viewId,'journeyViewVersion': journeyViewVersion,'chartId': chartId },
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
	 * Get a Chart by ID and version
	 * 
	 * @param {String} viewId viewId
	 * @param {String} journeyViewVersion Journey View Version
	 * @param {String} chartId chartId
	 * @param {String} chartVersion chartVersion
	 */
	getJourneyViewVersionChartVersion(viewId, journeyViewVersion, chartId, chartVersion) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewVersionChartVersion';
		}
		// verify the required parameter 'journeyViewVersion' is set
		if (journeyViewVersion === undefined || journeyViewVersion === null || journeyViewVersion === '') {
			throw 'Missing the required parameter "journeyViewVersion" when calling getJourneyViewVersionChartVersion';
		}
		// verify the required parameter 'chartId' is set
		if (chartId === undefined || chartId === null || chartId === '') {
			throw 'Missing the required parameter "chartId" when calling getJourneyViewVersionChartVersion';
		}
		// verify the required parameter 'chartVersion' is set
		if (chartVersion === undefined || chartVersion === null || chartVersion === '') {
			throw 'Missing the required parameter "chartVersion" when calling getJourneyViewVersionChartVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/charts/{chartId}/versions/{chartVersion}', 
			'GET', 
			{ 'viewId': viewId,'journeyViewVersion': journeyViewVersion,'chartId': chartId,'chartVersion': chartVersion },
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
	 * Get the job for a journey view version.
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 * @param {String} jobId JobId
	 */
	getJourneyViewVersionJob(viewId, journeyVersionId, jobId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewVersionJob';
		}
		// verify the required parameter 'journeyVersionId' is set
		if (journeyVersionId === undefined || journeyVersionId === null || journeyVersionId === '') {
			throw 'Missing the required parameter "journeyVersionId" when calling getJourneyViewVersionJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getJourneyViewVersionJob';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}', 
			'GET', 
			{ 'viewId': viewId,'journeyVersionId': journeyVersionId,'jobId': jobId },
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
	 * Get the result of a job for a journey view version.
	 * 
	 * @param {String} viewId JourneyViewResult id
	 * @param {String} journeyViewVersion Journey View Version
	 * @param {String} jobId Id of the executing job
	 */
	getJourneyViewVersionJobResults(viewId, journeyViewVersion, jobId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewVersionJobResults';
		}
		// verify the required parameter 'journeyViewVersion' is set
		if (journeyViewVersion === undefined || journeyViewVersion === null || journeyViewVersion === '') {
			throw 'Missing the required parameter "journeyViewVersion" when calling getJourneyViewVersionJobResults';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getJourneyViewVersionJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions/{journeyViewVersion}/jobs/{jobId}/results', 
			'GET', 
			{ 'viewId': viewId,'journeyViewVersion': journeyViewVersion,'jobId': jobId },
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
	 * Get the chart result associated with a journey view job.
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 * @param {String} jobId JobId
	 * @param {String} chartId ChartId
	 */
	getJourneyViewVersionJobResultsChart(viewId, journeyVersionId, jobId, chartId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewVersionJobResultsChart';
		}
		// verify the required parameter 'journeyVersionId' is set
		if (journeyVersionId === undefined || journeyVersionId === null || journeyVersionId === '') {
			throw 'Missing the required parameter "journeyVersionId" when calling getJourneyViewVersionJobResultsChart';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getJourneyViewVersionJobResultsChart';
		}
		// verify the required parameter 'chartId' is set
		if (chartId === undefined || chartId === null || chartId === '') {
			throw 'Missing the required parameter "chartId" when calling getJourneyViewVersionJobResultsChart';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}/results/charts/{chartId}', 
			'GET', 
			{ 'viewId': viewId,'journeyVersionId': journeyVersionId,'jobId': jobId,'chartId': chartId },
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
	 * Get the latest job of a journey view version.
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 */
	getJourneyViewVersionJobsLatest(viewId, journeyVersionId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewVersionJobsLatest';
		}
		// verify the required parameter 'journeyVersionId' is set
		if (journeyVersionId === undefined || journeyVersionId === null || journeyVersionId === '') {
			throw 'Missing the required parameter "journeyVersionId" when calling getJourneyViewVersionJobsLatest';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/latest', 
			'GET', 
			{ 'viewId': viewId,'journeyVersionId': journeyVersionId },
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
	 * Get a list of Journey Views
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.nameOrCreatedBy Journey View Name or Created By
	 * @param {Object} opts.expand Parameter to request additional data to return in Journey payload
	 * @param {String} opts.id Parameter to request a list of Journey Views by id, separated by commas. Limit of 100 items.
	 */
	getJourneyViews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/views', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'nameOrCreatedBy': opts['nameOrCreatedBy'],'expand': opts['expand'],'id': opts['id'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get details about the data available for journey queries including oldest and newest event dates
	 * 
	 */
	getJourneyViewsDataDetails() { 

		return this.apiClient.callApi(
			'/api/v2/journey/views/data/details', 
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
	 * Get an Event Definition
	 * 
	 * @param {String} eventDefinitionId Event Definition ID
	 */
	getJourneyViewsEventdefinition(eventDefinitionId) { 
		// verify the required parameter 'eventDefinitionId' is set
		if (eventDefinitionId === undefined || eventDefinitionId === null || eventDefinitionId === '') {
			throw 'Missing the required parameter "eventDefinitionId" when calling getJourneyViewsEventdefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/eventdefinitions/{eventDefinitionId}', 
			'GET', 
			{ 'eventDefinitionId': eventDefinitionId },
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
	 * Get a list of Event Definitions
	 * 
	 */
	getJourneyViewsEventdefinitions() { 

		return this.apiClient.callApi(
			'/api/v2/journey/views/eventdefinitions', 
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
	 * Get the jobs for an organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber The number of the page to return (default to 1)
	 * @param {Number} opts.pageSize Max number of entities to return (default to 25)
	 * @param {String} opts.interval An absolute timeframe for filtering the jobs, expressed as an ISO 8601 interval.
	 * @param {String} opts.statuses Job statuses to filter for
	 */
	getJourneyViewsJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/views/jobs', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'interval': opts['interval'],'statuses': opts['statuses'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the journey schedules for an organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber The number of the page to return (default to 1)
	 * @param {Number} opts.pageSize Max number of entities to return (default to 25)
	 */
	getJourneyViewsSchedules(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/views/schedules', 
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
	 * Update single action map.
	 * 
	 * @param {String} actionMapId ID of the action map.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchJourneyActionmap(actionMapId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionMapId' is set
		if (actionMapId === undefined || actionMapId === null || actionMapId === '') {
			throw 'Missing the required parameter "actionMapId" when calling patchJourneyActionmap';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actionmaps/{actionMapId}', 
			'PATCH', 
			{ 'actionMapId': actionMapId },
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
	 * Update a single action target.
	 * 
	 * @param {String} actionTargetId ID of the action target.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchJourneyActiontarget(actionTargetId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionTargetId' is set
		if (actionTargetId === undefined || actionTargetId === null || actionTargetId === '') {
			throw 'Missing the required parameter "actionTargetId" when calling patchJourneyActiontarget';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actiontargets/{actionTargetId}', 
			'PATCH', 
			{ 'actionTargetId': actionTargetId },
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
	 * Update a single action template.
	 * 
	 * @param {String} actionTemplateId ID of the action template.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchJourneyActiontemplate(actionTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionTemplateId' is set
		if (actionTemplateId === undefined || actionTemplateId === null || actionTemplateId === '') {
			throw 'Missing the required parameter "actionTemplateId" when calling patchJourneyActiontemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actiontemplates/{actionTemplateId}', 
			'PATCH', 
			{ 'actionTemplateId': actionTemplateId },
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
	 * Update an outcome.
	 * 
	 * @param {String} outcomeId ID of the outcome.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchJourneyOutcome(outcomeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'outcomeId' is set
		if (outcomeId === undefined || outcomeId === null || outcomeId === '') {
			throw 'Missing the required parameter "outcomeId" when calling patchJourneyOutcome';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes/{outcomeId}', 
			'PATCH', 
			{ 'outcomeId': outcomeId },
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
	 * Update a segment.
	 * 
	 * @param {String} segmentId ID of the segment.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchJourneySegment(segmentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'segmentId' is set
		if (segmentId === undefined || segmentId === null || segmentId === '') {
			throw 'Missing the required parameter "segmentId" when calling patchJourneySegment';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/segments/{segmentId}', 
			'PATCH', 
			{ 'segmentId': segmentId },
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
	 * Update the job for a journey view version. Only the status can be changed and only to Cancelled
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 * @param {String} jobId JobId
	 * @param {Object} body journeyViewJob
	 */
	patchJourneyViewVersionJob(viewId, journeyVersionId, jobId, body) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling patchJourneyViewVersionJob';
		}
		// verify the required parameter 'journeyVersionId' is set
		if (journeyVersionId === undefined || journeyVersionId === null || journeyVersionId === '') {
			throw 'Missing the required parameter "journeyVersionId" when calling patchJourneyViewVersionJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling patchJourneyViewVersionJob';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchJourneyViewVersionJob';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs/{jobId}', 
			'PATCH', 
			{ 'viewId': viewId,'journeyVersionId': journeyVersionId,'jobId': jobId },
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
	 * Create an action map.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyActionmaps(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/actionmaps', 
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
	 * Query for estimates
	 * 
	 * @param {Object} body audience estimator request
	 */
	postJourneyActionmapsEstimatesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postJourneyActionmapsEstimatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/actionmaps/estimates/jobs', 
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
	 * Create a single action template.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyActiontemplates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/actiontemplates', 
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
	 * Sends an action event, which is used for changing the state of actions that have been offered to the user.
	 * 
	 * @param {String} deploymentId The ID of the deployment sending the beacon.
	 * @param {Object} body 
	 */
	postJourneyDeploymentActionevent(deploymentId, body) { 
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling postJourneyDeploymentActionevent';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postJourneyDeploymentActionevent';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/deployments/{deploymentId}/actionevent', 
			'POST', 
			{ 'deploymentId': deploymentId },
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
	 * Send a journey app event, used for tracking customer activity on an application.
	 * 
	 * @param {String} deploymentId The ID of the deployment sending the app event.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyDeploymentAppevents(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling postJourneyDeploymentAppevents';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/deployments/{deploymentId}/appevents', 
			'POST', 
			{ 'deploymentId': deploymentId },
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
	 * Send a journey web event, used for tracking customer activity on a website.
	 * 
	 * @param {String} deploymentId The ID of the deployment sending the web event.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyDeploymentWebevents(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null || deploymentId === '') {
			throw 'Missing the required parameter "deploymentId" when calling postJourneyDeploymentWebevents';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/deployments/{deploymentId}/webevents', 
			'POST', 
			{ 'deploymentId': deploymentId },
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
	 * Query for flow paths.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyFlowsPathsQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/flows/paths/query', 
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
	 * Create an outcome.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyOutcomes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes', 
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
	 * Create Outcome Attributions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body outcome attribution request
	 * postJourneyOutcomesAttributionsJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postJourneyOutcomesAttributionsJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes/attributions/jobs', 
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
	 * Create an outcome predictor.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyOutcomesPredictors(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/outcomes/predictors', 
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
	 * Create a segment.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneySegments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/segments', 
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
	 * Add a new Schedule to a JourneyView
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {Object} body journeyViewSchedule
	 */
	postJourneyViewSchedules(viewId, body) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling postJourneyViewSchedules';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postJourneyViewSchedules';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/schedules', 
			'POST', 
			{ 'viewId': viewId },
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
	 * Submit a job request for a journey view version.
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 */
	postJourneyViewVersionJobs(viewId, journeyVersionId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling postJourneyViewVersionJobs';
		}
		// verify the required parameter 'journeyVersionId' is set
		if (journeyVersionId === undefined || journeyVersionId === null || journeyVersionId === '') {
			throw 'Missing the required parameter "journeyVersionId" when calling postJourneyViewVersionJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions/{journeyVersionId}/jobs', 
			'POST', 
			{ 'viewId': viewId,'journeyVersionId': journeyVersionId },
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
	 * Update a Journey View by ID
	 * creates a new version
	 * @param {String} viewId viewId
	 * @param {Object} body JourneyView
	 */
	postJourneyViewVersions(viewId, body) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling postJourneyViewVersions';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postJourneyViewVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions', 
			'POST', 
			{ 'viewId': viewId },
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
	 * Create a new Journey View
	 * 
	 * @param {Object} body JourneyView
	 */
	postJourneyViews(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postJourneyViews';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views', 
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
	 * Validate whether an encoding exist for a label/value combination.
	 * True indicates a valid encoding
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postJourneyViewsEncodingsValidate(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/views/encodings/validate', 
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
	 * Update the Schedule for a JourneyView
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {Object} body journeyViewSchedule
	 */
	putJourneyViewSchedules(viewId, body) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling putJourneyViewSchedules';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putJourneyViewSchedules';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/schedules', 
			'PUT', 
			{ 'viewId': viewId },
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
	 * Update a Journey View by ID and version
	 * does not create a new version
	 * @param {String} viewId viewId
	 * @param {String} versionId versionId
	 * @param {Object} body JourneyView
	 */
	putJourneyViewVersion(viewId, versionId, body) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null || viewId === '') {
			throw 'Missing the required parameter "viewId" when calling putJourneyViewVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling putJourneyViewVersion';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putJourneyViewVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/{viewId}/versions/{versionId}', 
			'PUT', 
			{ 'viewId': viewId,'versionId': versionId },
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


export default JourneyApi;
