import ApiClient from '../ApiClient.js';


class JourneyApi {
	/**
	 * Journey service.
	 * @module purecloud-platform-client-v2/api/JourneyApi
	 * @version 257.0.0
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
	 * Delete/cancel an async request for journey aggregates
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteAnalyticsJourneysAggregatesJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling deleteAnalyticsJourneysAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/journeys/aggregates/jobs/{jobId}', 
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
	 * Delete single action map.
	 * 
	 * @param {String} actionMapId ID of the action map.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteJourneyActionmap(actionMapId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a single action template.
	 * 
	 * @param {String} actionTemplateId ID of the action template.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.hardDelete Determines whether Action Template should be soft-deleted (have it's state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete an external events configuration.
	 * 
	 * @param {String} configId The ID of the external event configuration.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteJourneyExternaleventsConfiguration(configId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'configId' is set
		if (configId === undefined || configId === null || configId === '') {
			throw 'Missing the required parameter "configId" when calling deleteJourneyExternaleventsConfiguration';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/configurations/{configId}', 
			'DELETE', 
			{ 'configId': configId },
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
	 * Delete a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteJourneyExternaleventsSchema(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling deleteJourneyExternaleventsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/schemas/{schemaId}', 
			'DELETE', 
			{ 'schemaId': schemaId },
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
	 * Deprecated. Delete an outcome.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {String} outcomeId ID of the outcome.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	deleteJourneyOutcome(outcomeId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Delete an outcome predictor.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {String} predictorId ID of predictor
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	deleteJourneyOutcomesPredictor(predictorId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a segment.
	 * 
	 * @param {String} segmentId ID of the segment.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteJourneySegment(segmentId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a Journey View by ID
	 * deletes all versions
	 * @param {String} viewId viewId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteJourneyView(viewId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete the Schedule of a JourneyView
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteJourneyViewSchedules(viewId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get status for async query for journey aggregates
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAnalyticsJourneysAggregatesJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve segment assignments by external contact ID.
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeMerged Indicates whether to return segment assignments from all external contacts in the merge-set of the given one.
	 * @param {Number} opts.limit Number of entities to return. Default of 25, maximum of 500.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getExternalcontactsContactJourneySegments(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContactJourneySegments';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/journey/segments', 
			'GET', 
			{ 'contactId': contactId },
			{ 'includeMerged': opts['includeMerged'],'limit': opts['limit'] },
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
	 * Retrieve all sessions for a given external contact.
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Boolean} opts.includeMerged Indicates whether to return sessions from all external contacts in the merge-set of the given one.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve a single action map.
	 * 
	 * @param {String} actionMapId ID of the action map.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyActionmap(actionMapId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {String} opts.queryValue Value to query on using fuzzy matching. Requires 'queryFields' to also be set.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Get status of job.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {String} jobId ID of the job.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getJourneyActionmapsEstimatesJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Get estimates from completed job.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {String} jobId ID of the job.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getJourneyActionmapsEstimatesJobResults(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Retrieve a single action target.
	 * ACD Chat v2.0 in Genesys Predictive Engagement is deprecated and being removed. See https://community.genesys.com/discussion/deprecation-acd-chat-v20-support-in-genesys-predictive-engagement
	 * @param {String} actionTargetId ID of the action target.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getJourneyActiontarget(actionTargetId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Retrieve all action targets.
	 * ACD Chat v2.0 in Genesys Predictive Engagement is deprecated and being removed. See https://community.genesys.com/discussion/deprecation-acd-chat-v20-support-in-genesys-predictive-engagement
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve a single action template.
	 * 
	 * @param {String} actionTemplateId ID of the action template.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyActiontemplate(actionTemplateId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {String} opts.queryValue Value to query on using fuzzy matching. Requires 'queryFields' to also be set.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an external events configuration
	 * 
	 * @param {String} configId The ID of the external event configuration.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyExternaleventsConfiguration(configId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'configId' is set
		if (configId === undefined || configId === null || configId === '') {
			throw 'Missing the required parameter "configId" when calling getJourneyExternaleventsConfiguration';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/configurations/{configId}', 
			'GET', 
			{ 'configId': configId },
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
	 * Get all external event configurations.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 20)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyExternaleventsConfigurations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/configurations', 
			'GET', 
			{  },
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
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyExternaleventsSchema(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getJourneyExternaleventsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/schemas/{schemaId}', 
			'GET', 
			{ 'schemaId': schemaId },
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
	 * Get a specific version of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {String} versionId Schema version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyExternaleventsSchemaVersion(schemaId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getJourneyExternaleventsSchemaVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getJourneyExternaleventsSchemaVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/schemas/{schemaId}/versions/{versionId}', 
			'GET', 
			{ 'schemaId': schemaId,'versionId': versionId },
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
	 * Get all versions of a External Events schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyExternaleventsSchemaVersions(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getJourneyExternaleventsSchemaVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/schemas/{schemaId}/versions', 
			'GET', 
			{ 'schemaId': schemaId },
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
	 * Get a list of schemas.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyExternaleventsSchemas(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/schemas', 
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
	 * Get a core type from which all schemas are built
	 * 
	 * @param {String} coreTypeName Name of core type
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyExternaleventsSchemasCoretype(coreTypeName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'coreTypeName' is set
		if (coreTypeName === undefined || coreTypeName === null || coreTypeName === '') {
			throw 'Missing the required parameter "coreTypeName" when calling getJourneyExternaleventsSchemasCoretype';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/schemas/coretypes/{coreTypeName}', 
			'GET', 
			{ 'coreTypeName': coreTypeName },
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
	 * Get the list of core types enabled for a specific namespace.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyExternaleventsSchemasCoretypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/schemas/coretypes', 
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
	 * Get quantitative limits on schemas
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyExternaleventsSchemasLimits(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/schemas/limits', 
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
	 * Deprecated. Retrieve a single outcome.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {String} outcomeId ID of the outcome.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getJourneyOutcome(outcomeId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Retrieve all outcomes.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate).
	 * @param {Array.<String>} opts.outcomeIds IDs of outcomes to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 20 outcomes are allowed per request.
	 * @param {Array.<String>} opts.queryFields Outcome field(s) to query on. Requires 'queryValue' to also be set.
	 * @param {String} opts.queryValue Value to query on using fuzzy matching. Requires 'queryFields' to also be set.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Get job status.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {String} jobId ID of the job.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 * getJourneyOutcomesAttributionsJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getJourneyOutcomesAttributionsJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Get outcome attribution entities from completed job.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {String} jobId ID of the job.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 * getJourneyOutcomesAttributionsJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getJourneyOutcomesAttributionsJobResults(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Retrieve a single outcome predictor.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {String} predictorId ID of predictor
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getJourneyOutcomesPredictor(predictorId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Retrieve all outcome predictors.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getJourneyOutcomesPredictors(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve a single segment.
	 * 
	 * @param {String} segmentId ID of the segment.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneySegment(segmentId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {String} opts.queryValue Value to query on using fuzzy matching. Requires 'queryFields' to also be set.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve a single session.
	 * 
	 * @param {String} sessionId ID of the session.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneySession(sessionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Retrieve latest outcome score associated with a session for all outcomes.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {String} sessionId ID of the session.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getJourneySessionOutcomescores(sessionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Journey View by ID
	 * returns the latest version
	 * @param {String} viewId viewId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyView(viewId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the Schedule for a JourneyView
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewSchedules(viewId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Journey View by ID and version
	 * 
	 * @param {String} viewId viewId
	 * @param {String} versionId versionId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewVersion(viewId, versionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Chart by ID
	 * returns the latest version
	 * @param {String} viewId viewId
	 * @param {String} journeyViewVersion Journey View Version
	 * @param {String} chartId chartId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewVersionChart(viewId, journeyViewVersion, chartId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Chart by ID and version
	 * 
	 * @param {String} viewId viewId
	 * @param {String} journeyViewVersion Journey View Version
	 * @param {String} chartId chartId
	 * @param {String} chartVersion chartVersion
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewVersionChartVersion(viewId, journeyViewVersion, chartId, chartVersion, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the job for a journey view version.
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 * @param {String} jobId JobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewVersionJob(viewId, journeyVersionId, jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the result of a job for a journey view version.
	 * 
	 * @param {String} viewId JourneyViewResult id
	 * @param {String} journeyViewVersion Journey View Version
	 * @param {String} jobId Id of the executing job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewVersionJobResults(viewId, journeyViewVersion, jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the chart result associated with a journey view job.
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 * @param {String} jobId JobId
	 * @param {String} chartId ChartId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewVersionJobResultsChart(viewId, journeyVersionId, jobId, chartId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the latest job of a journey view version.
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewVersionJobsLatest(viewId, journeyVersionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get details about the data available for journey queries including oldest and newest event dates
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewsDataDetails(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an Event Definition
	 * 
	 * @param {String} eventDefinitionId Event Definition ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewsEventdefinition(eventDefinitionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of Event Definitions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewsEventdefinitions(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get external events for journey views
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewsEventdefinitionsExternal(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/views/eventdefinitions/external', 
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
	 * Get changes in external event definitions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewsEventdefinitionsExternalChanges(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/views/eventdefinitions/external/changes', 
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
	 * Get the jobs for an organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber The number of the page to return (default to 1)
	 * @param {Number} opts.pageSize Max number of entities to return (default to 25)
	 * @param {String} opts.interval An absolute timeframe for filtering the jobs, expressed as an ISO 8601 interval.
	 * @param {String} opts.statuses Job statuses to filter for
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get my jobs
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber The number of the page to return (default to 1)
	 * @param {Number} opts.pageSize Max number of entities to return (default to 25)
	 * @param {String} opts.interval An absolute timeframe for filtering the jobs, expressed as an ISO 8601 interval.
	 * @param {String} opts.statuses Job statuses to filter for
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getJourneyViewsJobsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/views/jobs/me', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'interval': opts['interval'],'statuses': opts['statuses'] },
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
	 * Get the journey schedules for an organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber The number of the page to return (default to 1)
	 * @param {Number} opts.pageSize Max number of entities to return (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update single action map.
	 * 
	 * @param {String} actionMapId ID of the action map.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Update a single action target.
	 * ACD Chat v2.0 in Genesys Predictive Engagement is deprecated and being removed. See https://community.genesys.com/discussion/deprecation-acd-chat-v20-support-in-genesys-predictive-engagement
	 * @param {String} actionTargetId ID of the action target.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a single action template.
	 * 
	 * @param {String} actionTemplateId ID of the action template.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an external events configuration.
	 * 
	 * @param {String} configId The ID of the external event configuration.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchJourneyExternaleventsConfiguration(configId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'configId' is set
		if (configId === undefined || configId === null || configId === '') {
			throw 'Missing the required parameter "configId" when calling patchJourneyExternaleventsConfiguration';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/configurations/{configId}', 
			'PATCH', 
			{ 'configId': configId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Update an outcome.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {String} outcomeId ID of the outcome.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a segment.
	 * 
	 * @param {String} segmentId ID of the segment.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the job for a journey view version. Only the status can be changed and only to Cancelled
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 * @param {String} jobId JobId
	 * @param {Object} body journeyViewJob
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchJourneyViewVersionJob(viewId, journeyVersionId, jobId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for journey aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsJourneysAggregatesJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for journey aggregates
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsJourneysAggregatesQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postExternalcontactsContactJourneySegments(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null || contactId === '') {
			throw 'Missing the required parameter "contactId" when calling postExternalcontactsContactJourneySegments';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/journey/segments', 
			'POST', 
			{ 'contactId': contactId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an action map.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Query for estimates
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {Object} body audience estimator request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postJourneyActionmapsEstimatesJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a single action template.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Sends an action event, which is used for changing the state of actions that have been offered to the user.
	 * 
	 * @param {String} deploymentId The ID of the deployment sending the beacon.
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postJourneyDeploymentActionevent(deploymentId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send a journey app event, used for tracking customer activity on an application.
	 * 
	 * @param {String} deploymentId The ID of the deployment sending the app event.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Send a journey web event, used for tracking customer activity on a website.
	 * 
	 * @param {String} deploymentId The ID of the deployment sending the web event.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create external events
	 * 
	 * @param {String} configurationId The ID of the external event configuration.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postJourneyExternaleventsConfigurationEvents(configurationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'configurationId' is set
		if (configurationId === undefined || configurationId === null || configurationId === '') {
			throw 'Missing the required parameter "configurationId" when calling postJourneyExternaleventsConfigurationEvents';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/configurations/{configurationId}/events', 
			'POST', 
			{ 'configurationId': configurationId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an external events configuration.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postJourneyExternaleventsConfigurations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/configurations', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a schema
	 * 
	 * @param {Object} body Schema create request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postJourneyExternaleventsSchemas(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postJourneyExternaleventsSchemas';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/schemas', 
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
	 * Query for flow paths.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Create an outcome.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Create Outcome Attributions
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body outcome attribution request
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated. Create an outcome predictor.
	 * Journey Outcomes is being removed. See https://help.genesys.cloud/announcements/genesys-cloud/deprecation-journey-outcomes/
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a segment.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add a new Schedule to a JourneyView
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {Object} body journeyViewSchedule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postJourneyViewSchedules(viewId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Submit a job request for a journey view version.
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postJourneyViewVersionJobs(viewId, journeyVersionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a Journey View by ID
	 * creates a new version
	 * @param {String} viewId viewId
	 * @param {Object} body JourneyView
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postJourneyViewVersions(viewId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new Journey View
	 * 
	 * @param {Object} body JourneyView
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postJourneyViews(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Validate whether an encoding exist for a label/value combination.
	 * True indicates a valid encoding
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Schema update request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putJourneyExternaleventsSchema(schemaId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling putJourneyExternaleventsSchema';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putJourneyExternaleventsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalevents/schemas/{schemaId}', 
			'PUT', 
			{ 'schemaId': schemaId },
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
	 * Update the Schedule for a JourneyView
	 * 
	 * @param {String} viewId Journey View Id
	 * @param {Object} body journeyViewSchedule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putJourneyViewSchedules(viewId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a Journey View by ID and version
	 * does not create a new version
	 * @param {String} viewId viewId
	 * @param {String} versionId versionId
	 * @param {Object} body JourneyView
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putJourneyViewVersion(viewId, versionId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update external event for journey views
	 * 
	 * @param {String} eventDefinitionId Event Definition ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putJourneyViewsEventdefinition(eventDefinitionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'eventDefinitionId' is set
		if (eventDefinitionId === undefined || eventDefinitionId === null || eventDefinitionId === '') {
			throw 'Missing the required parameter "eventDefinitionId" when calling putJourneyViewsEventdefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/eventdefinitions/{eventDefinitionId}', 
			'PUT', 
			{ 'eventDefinitionId': eventDefinitionId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Activate external event for journey views
	 * 
	 * @param {String} eventDefinitionId Event Definition ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putJourneyViewsEventdefinitionActivate(eventDefinitionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'eventDefinitionId' is set
		if (eventDefinitionId === undefined || eventDefinitionId === null || eventDefinitionId === '') {
			throw 'Missing the required parameter "eventDefinitionId" when calling putJourneyViewsEventdefinitionActivate';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/views/eventdefinitions/{eventDefinitionId}/activate', 
			'PUT', 
			{ 'eventDefinitionId': eventDefinitionId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default JourneyApi;
