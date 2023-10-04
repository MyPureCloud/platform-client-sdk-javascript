import ApiClient from '../ApiClient.js';


class JourneyApi {
	/**
	 * Journey service.
	 * @module purecloud-platform-client-v2/api/JourneyApi
	 * @version 178.2.0
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
		if (actionMapId === undefined || actionMapId === null) {
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
		if (actionTemplateId === undefined || actionTemplateId === null) {
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
	 * Delete a single event type.
	 * 
	 * @param {String} eventTypeId ID of the event type.
	 */
	deleteJourneyEventtype(eventTypeId) { 
		// verify the required parameter 'eventTypeId' is set
		if (eventTypeId === undefined || eventTypeId === null) {
			throw 'Missing the required parameter "eventTypeId" when calling deleteJourneyEventtype';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/eventtypes/{eventTypeId}', 
			'DELETE', 
			{ 'eventTypeId': eventTypeId },
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
	 * Delete an open action.
	 * 
	 * @param {String} openActionId Id of an open action
	 */
	deleteJourneyOpenaction(openActionId) { 
		// verify the required parameter 'openActionId' is set
		if (openActionId === undefined || openActionId === null) {
			throw 'Missing the required parameter "openActionId" when calling deleteJourneyOpenaction';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/openactions/{openActionId}', 
			'DELETE', 
			{ 'openActionId': openActionId },
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
	 * Delete a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.hardDelete Boolean to perform a hard delete.  If hardDelete is set to true, the schema is completely and permanently removed from our database.  If it is set to false or absent (the default behavior), we merely mark the schema as deleted but it still exists in the database. (default to false)
	 */
	deleteJourneyOpenactionsSchema(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling deleteJourneyOpenactionsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/openactions/schemas/{schemaId}', 
			'DELETE', 
			{ 'schemaId': schemaId },
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
		if (outcomeId === undefined || outcomeId === null) {
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
		if (predictorId === undefined || predictorId === null) {
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
		if (segmentId === undefined || segmentId === null) {
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
		if (viewId === undefined || viewId === null) {
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
	 * Get status for async query for journey aggregates
	 * 
	 * @param {String} jobId jobId
	 * getAnalyticsJourneysAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsJourneysAggregatesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
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
		if (jobId === undefined || jobId === null) {
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
	 * Retrieve segment assignments by external contact ID.
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Object} opts.segmentScope Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned.
	 * @param {Object} opts.assignmentState Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
	 * @param {Boolean} opts.includeMerged Indicates whether to return segment assignments from all external contacts in the merge-set of the given one.
	 */
	getExternalcontactsContactJourneySegments(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null) {
			throw 'Missing the required parameter "contactId" when calling getExternalcontactsContactJourneySegments';
		}

		return this.apiClient.callApi(
			'/api/v2/externalcontacts/contacts/{contactId}/journey/segments', 
			'GET', 
			{ 'contactId': contactId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'],'segmentScope': opts['segmentScope'],'assignmentState': opts['assignmentState'],'includeMerged': opts['includeMerged'] },
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
		if (contactId === undefined || contactId === null) {
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
		if (actionMapId === undefined || actionMapId === null) {
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
		if (jobId === undefined || jobId === null) {
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
		if (jobId === undefined || jobId === null) {
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
		if (actionTargetId === undefined || actionTargetId === null) {
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
		if (actionTemplateId === undefined || actionTemplateId === null) {
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
	 * Sends web beacon, used for tracking customer activity on a website via transparent pixel.
	 * 
	 * @param {String} deploymentId The ID of the deployment sending the beacon.
	 * @param {String} customerCookieId ID of the customer associated with the beacon.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.data The base-64 encoded beacon data which contains tracking information from web sessions.
	 * @param {Object} opts.type The type of the beacon request.
	 */
	getJourneyDeploymentCustomerBeacons(deploymentId, customerCookieId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling getJourneyDeploymentCustomerBeacons';
		}
		// verify the required parameter 'customerCookieId' is set
		if (customerCookieId === undefined || customerCookieId === null) {
			throw 'Missing the required parameter "customerCookieId" when calling getJourneyDeploymentCustomerBeacons';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/beacons', 
			'GET', 
			{ 'deploymentId': deploymentId,'customerCookieId': customerCookieId },
			{ 'data': opts['data'],'type': opts['type'] },
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
	 * @param {String} opts.dl Page URL if overridden or URL fragment identifier (window.location.hash).
	 * @param {String} opts.dt Page title.
	 * @param {String} opts.appNamespace Namespace of the application (e.g. com.genesys.bancodinero). Used for domain filtering in app sessions
	 * @param {String} opts.sessionId sessionId
	 * @param {Number} opts.sinceLastBeaconMilliseconds The number of milliseconds since the most recent beacon.
	 */
	getJourneyDeploymentCustomerPing(deploymentId, customerCookieId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling getJourneyDeploymentCustomerPing';
		}
		// verify the required parameter 'customerCookieId' is set
		if (customerCookieId === undefined || customerCookieId === null) {
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
	 * Retrieve a single event type.
	 * 
	 * @param {String} eventTypeId ID of the event type.
	 */
	getJourneyEventtype(eventTypeId) { 
		// verify the required parameter 'eventTypeId' is set
		if (eventTypeId === undefined || eventTypeId === null) {
			throw 'Missing the required parameter "eventTypeId" when calling getJourneyEventtype';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/eventtypes/{eventTypeId}', 
			'GET', 
			{ 'eventTypeId': eventTypeId },
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
	 * Retrieve all event types.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=name,-createdDate).
	 * @param {Object} opts.streamType The stream type for which event types are to be retrieved.
	 * @param {String} opts.sessionType The name of the session type for which event types are to be retrieved.
	 * @param {Array.<String>} opts.queryFields Event Type field(s) to query on. Requires 'queryValue' to also be set.
	 * @param {String} opts.queryValue Value to query on. Requires 'queryFields' to also be set.
	 */
	getJourneyEventtypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/eventtypes', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'streamType': opts['streamType'],'sessionType': opts['sessionType'],'queryFields': this.apiClient.buildCollectionParam(opts['queryFields'], 'multi'),'queryValue': opts['queryValue'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve segment assignments by external contact ID.
	 * 
	 * @param {String} externalContactId ID of the external contact to query for segment assignments.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Object} opts.segmentScope Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned.
	 * @param {Object} opts.assignmentState Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
	 * @param {Boolean} opts.includeMerged Indicates whether to return segment assignments from all external contacts in the merge-set of the given one.
	 */
	getJourneyExternalcontactSegments(externalContactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalContactId' is set
		if (externalContactId === undefined || externalContactId === null) {
			throw 'Missing the required parameter "externalContactId" when calling getJourneyExternalcontactSegments';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalcontacts/{externalContactId}/segments', 
			'GET', 
			{ 'externalContactId': externalContactId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'],'segmentScope': opts['segmentScope'],'assignmentState': opts['assignmentState'],'includeMerged': opts['includeMerged'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve a single open action.
	 * 
	 * @param {String} openActionId Id of an open action
	 */
	getJourneyOpenaction(openActionId) { 
		// verify the required parameter 'openActionId' is set
		if (openActionId === undefined || openActionId === null) {
			throw 'Missing the required parameter "openActionId" when calling getJourneyOpenaction';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/openactions/{openActionId}', 
			'GET', 
			{ 'openActionId': openActionId },
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
	 * Retrieve a paged listing of open actions.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Field(s) to sort by. Prefix with '-' for descending (e.g. sortBy=displayName,-createdDate).
	 */
	getJourneyOpenactions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/openactions', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getJourneyOpenactionsSchema(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling getJourneyOpenactionsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/openactions/schemas/{schemaId}', 
			'GET', 
			{ 'schemaId': schemaId },
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
	 * Get a specific version of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {String} versionId Schema version
	 */
	getJourneyOpenactionsSchemaVersion(schemaId, versionId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling getJourneyOpenactionsSchemaVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
			throw 'Missing the required parameter "versionId" when calling getJourneyOpenactionsSchemaVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/openactions/schemas/{schemaId}/versions/{versionId}', 
			'GET', 
			{ 'schemaId': schemaId,'versionId': versionId },
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
	 * Get all versions of a schema
	 * 
	 * @param {String} schemaId Schema ID
	 */
	getJourneyOpenactionsSchemaVersions(schemaId) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling getJourneyOpenactionsSchemaVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/openactions/schemas/{schemaId}/versions', 
			'GET', 
			{ 'schemaId': schemaId },
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
	 * Get a list of schemas.
	 * 
	 */
	getJourneyOpenactionsSchemas() { 

		return this.apiClient.callApi(
			'/api/v2/journey/openactions/schemas', 
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
	 * Retrieve a single outcome.
	 * 
	 * @param {String} outcomeId ID of the outcome.
	 */
	getJourneyOutcome(outcomeId) { 
		// verify the required parameter 'outcomeId' is set
		if (outcomeId === undefined || outcomeId === null) {
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
		if (jobId === undefined || jobId === null) {
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
		if (jobId === undefined || jobId === null) {
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
		if (predictorId === undefined || predictorId === null) {
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
		if (segmentId === undefined || segmentId === null) {
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
		if (sessionId === undefined || sessionId === null) {
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
	 * getJourneySessionEvents is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getJourneySessionEvents(sessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null) {
			throw 'Missing the required parameter "sessionId" when calling getJourneySessionEvents';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/sessions/{sessionId}/events', 
			'GET', 
			{ 'sessionId': sessionId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'] },
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
		if (sessionId === undefined || sessionId === null) {
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
	 * Retrieve all recent sessions.
	 * 
	 * @param {Object} sessionType Filter recent sessions by type.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.assignedSegmentId Filter recent sessions by an assigned segment ID.
	 */
	getJourneySessionRecent(sessionType, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionType' is set
		if (sessionType === undefined || sessionType === null) {
			throw 'Missing the required parameter "sessionType" when calling getJourneySessionRecent';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/sessions/{sessionType}/recent', 
			'GET', 
			{ 'sessionType': sessionType },
			{ 'pageSize': opts['pageSize'],'after': opts['after'],'assignedSegmentId': opts['assignedSegmentId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve segment assignments by session ID.
	 * 
	 * @param {String} sessionId ID of the session to query for segment assignments.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Object} opts.segmentScope Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned.
	 * @param {Object} opts.assignmentState Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
	 * getJourneySessionSegments is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getJourneySessionSegments(sessionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null) {
			throw 'Missing the required parameter "sessionId" when calling getJourneySessionSegments';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/sessions/{sessionId}/segments', 
			'GET', 
			{ 'sessionId': sessionId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'],'segmentScope': opts['segmentScope'],'assignmentState': opts['assignmentState'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve clickstream settings.
	 * 
	 */
	getJourneySettingsClickstream() { 

		return this.apiClient.callApi(
			'/api/v2/journey/settings/clickstream', 
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
	 * Retrieve web action settings.
	 * 
	 */
	getJourneySettingsWebactions() { 

		return this.apiClient.callApi(
			'/api/v2/journey/settings/webactions', 
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
	 * Get a Journey View by ID
	 * returns the latest version
	 * @param {String} viewId viewId
	 */
	getJourneyView(viewId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null) {
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
	 * Get a job for a journeyView.
	 * used for long descriptions
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 * @param {String} jobId JobId
	 */
	getJourneyViewVersionJob(viewId, journeyVersionId, jobId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null) {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewVersionJob';
		}
		// verify the required parameter 'journeyVersionId' is set
		if (journeyVersionId === undefined || journeyVersionId === null) {
			throw 'Missing the required parameter "journeyVersionId" when calling getJourneyViewVersionJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
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
	 * Get a JourneyViewResult.
	 * used for long descriptions
	 * @param {String} viewId JourneyViewResult id
	 * @param {String} journeyViewVersion Journey View Version
	 * @param {String} jobId Id of the executing job
	 */
	getJourneyViewVersionJobResults(viewId, journeyViewVersion, jobId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null) {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewVersionJobResults';
		}
		// verify the required parameter 'journeyViewVersion' is set
		if (journeyViewVersion === undefined || journeyViewVersion === null) {
			throw 'Missing the required parameter "journeyViewVersion" when calling getJourneyViewVersionJobResults';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
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
	 * Query a job for a journeyView.
	 * used for long descriptions
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 */
	getJourneyViewVersionJobsLatest(viewId, journeyVersionId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null) {
			throw 'Missing the required parameter "viewId" when calling getJourneyViewVersionJobsLatest';
		}
		// verify the required parameter 'journeyVersionId' is set
		if (journeyVersionId === undefined || journeyVersionId === null) {
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
	 */
	getJourneyViews() { 

		return this.apiClient.callApi(
			'/api/v2/journey/views', 
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
		if (eventDefinitionId === undefined || eventDefinitionId === null) {
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
	 * Sends web beacon, used for tracking customer activity on a website via transparent pixel.
	 * 
	 * @param {String} websiteId The ID of the website making the request.
	 * @param {String} customerCookieId Customer cookie ID.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.data The base-64 encoded beacon data which contains tracking information from web sessions.
	 * @param {Object} opts.type The type of the beacon request.
	 * @param {String} opts.tid The tracker ID of the organization making the request.
	 */
	getJourneyWebsiteCustomerBeacons(websiteId, customerCookieId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'websiteId' is set
		if (websiteId === undefined || websiteId === null) {
			throw 'Missing the required parameter "websiteId" when calling getJourneyWebsiteCustomerBeacons';
		}
		// verify the required parameter 'customerCookieId' is set
		if (customerCookieId === undefined || customerCookieId === null) {
			throw 'Missing the required parameter "customerCookieId" when calling getJourneyWebsiteCustomerBeacons';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/beacons', 
			'GET', 
			{ 'websiteId': websiteId,'customerCookieId': customerCookieId },
			{ 'data': opts['data'],'type': opts['type'],'tid': opts['tid'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Send single page ping.
	 * 
	 * @param {String} websiteId The ID of the website making the request.
	 * @param {String} customerCookieId Customer cookie ID.
	 * @param {String} visitId Visit ID.
	 * @param {Number} t Timestamp in milliseconds.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.dl Page URL if overridden or URL fragment identifier (window.location.hash).
	 * @param {String} opts.dt Page title.
	 * @param {String} opts.appNamespace Namespace of the application (e.g. com.genesys.bancodinero). Used for domain filtering in app sessions
	 * @param {String} opts.sessionId sessionId
	 * @param {Number} opts.sinceLastBeaconMilliseconds The number of milliseconds since the most recent beacon.
	 */
	getJourneyWebsiteCustomerPing(websiteId, customerCookieId, visitId, t, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'websiteId' is set
		if (websiteId === undefined || websiteId === null) {
			throw 'Missing the required parameter "websiteId" when calling getJourneyWebsiteCustomerPing';
		}
		// verify the required parameter 'customerCookieId' is set
		if (customerCookieId === undefined || customerCookieId === null) {
			throw 'Missing the required parameter "customerCookieId" when calling getJourneyWebsiteCustomerPing';
		}
		// verify the required parameter 'visitId' is set
		if (visitId === undefined || visitId === null) {
			throw 'Missing the required parameter "visitId" when calling getJourneyWebsiteCustomerPing';
		}
		// verify the required parameter 't' is set
		if (t === undefined || t === null) {
			throw 'Missing the required parameter "t" when calling getJourneyWebsiteCustomerPing';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/ping', 
			'GET', 
			{ 'websiteId': websiteId,'customerCookieId': customerCookieId },
			{ 'dl': opts['dl'],'dt': opts['dt'],'appNamespace': opts['appNamespace'],'sessionId': opts['sessionId'],'sinceLastBeaconMilliseconds': opts['sinceLastBeaconMilliseconds'],'visitId': visitId,'t': t },
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
		if (actionMapId === undefined || actionMapId === null) {
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
		if (actionTargetId === undefined || actionTargetId === null) {
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
		if (actionTemplateId === undefined || actionTemplateId === null) {
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
	 * Update a single event type.
	 * 
	 * @param {String} eventTypeId ID of the event type.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchJourneyEventtype(eventTypeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'eventTypeId' is set
		if (eventTypeId === undefined || eventTypeId === null) {
			throw 'Missing the required parameter "eventTypeId" when calling patchJourneyEventtype';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/eventtypes/{eventTypeId}', 
			'PATCH', 
			{ 'eventTypeId': eventTypeId },
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
	 * Update an open action.
	 * 
	 * @param {String} openActionId Id of an open action
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchJourneyOpenaction(openActionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'openActionId' is set
		if (openActionId === undefined || openActionId === null) {
			throw 'Missing the required parameter "openActionId" when calling patchJourneyOpenaction';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/openactions/{openActionId}', 
			'PATCH', 
			{ 'openActionId': openActionId },
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
		if (outcomeId === undefined || outcomeId === null) {
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
		if (segmentId === undefined || segmentId === null) {
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
	 * Update clickstream settings.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchJourneySettingsClickstream(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/settings/clickstream', 
			'PATCH', 
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
	 * Update web action settings.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchJourneySettingsWebactions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/settings/webactions', 
			'PATCH', 
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
	 * Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.
	 * 
	 * @param {String} contactId ExternalContact ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postExternalcontactsContactJourneySegments(contactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'contactId' is set
		if (contactId === undefined || contactId === null) {
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
	 * Perform bulk upsert of action targets.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyActiontargetsBulk(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/actiontargets/bulk', 
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
		if (deploymentId === undefined || deploymentId === null) {
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
	 * postJourneyDeploymentAppevents is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postJourneyDeploymentAppevents(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
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
	 * Creates multiple journey app events. Any unprocessed app events are returned in the body for the client to retry in the event of a partial success.
	 * 
	 * @param {String} deploymentId The ID of the deployment sending the app event.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyDeploymentAppeventsBulk(deploymentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling postJourneyDeploymentAppeventsBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/deployments/{deploymentId}/appevents/bulk', 
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
	 * Sends web beacon, used for tracking customer activity on a website, with support for the navigator.sendBeacon API available in most browsers.
	 * 
	 * @param {String} deploymentId The ID of the deployment sending the beacon.
	 * @param {String} customerCookieId ID of the customer associated with the beacon.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.data The base-64 encoded beacon data which contains tracking information from web sessions.
	 * @param {Object} opts.type The type of the beacon request.
	 */
	postJourneyDeploymentCustomerBeacons(deploymentId, customerCookieId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deploymentId' is set
		if (deploymentId === undefined || deploymentId === null) {
			throw 'Missing the required parameter "deploymentId" when calling postJourneyDeploymentCustomerBeacons';
		}
		// verify the required parameter 'customerCookieId' is set
		if (customerCookieId === undefined || customerCookieId === null) {
			throw 'Missing the required parameter "customerCookieId" when calling postJourneyDeploymentCustomerBeacons';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/deployments/{deploymentId}/customers/{customerCookieId}/beacons', 
			'POST', 
			{ 'deploymentId': deploymentId,'customerCookieId': customerCookieId },
			{ 'data': opts['data'],'type': opts['type'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a single event type.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyEventtypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/eventtypes', 
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
	 * Assign/Unassign up to 10 segments to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment. Any unprocessed segment assignments are returned in the body for the client to retry, in the event of a partial success.
	 * 
	 * @param {String} externalContactId ID of the external contact to query for segment assignments.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postJourneyExternalcontactSegments(externalContactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalContactId' is set
		if (externalContactId === undefined || externalContactId === null) {
			throw 'Missing the required parameter "externalContactId" when calling postJourneyExternalcontactSegments';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/externalcontacts/{externalContactId}/segments', 
			'POST', 
			{ 'externalContactId': externalContactId },
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
	 * Create an open action.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postJourneyOpenactions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/openactions', 
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
	 * Create a schema
	 * 
	 * @param {Object} body Schema
	 */
	postJourneyOpenactionsSchemas(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postJourneyOpenactionsSchemas';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/openactions/schemas', 
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
	 * Submit an execution for a journeyView.
	 * used for long descriptions
	 * @param {String} viewId Journey View Id
	 * @param {String} journeyVersionId Journey View Version
	 */
	postJourneyViewVersionJobs(viewId, journeyVersionId) { 
		// verify the required parameter 'viewId' is set
		if (viewId === undefined || viewId === null) {
			throw 'Missing the required parameter "viewId" when calling postJourneyViewVersionJobs';
		}
		// verify the required parameter 'journeyVersionId' is set
		if (journeyVersionId === undefined || journeyVersionId === null) {
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
		if (viewId === undefined || viewId === null) {
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
	 * Sends web beacon, used for tracking customer activity on a website, with support for navigator.sendBeacon API that's available in most modern browsers.
	 * 
	 * @param {String} websiteId The ID of the website making the request.
	 * @param {String} customerCookieId Customer cookie ID.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.data The base-64 encoded beacon data which contains tracking information from web sessions.
	 * @param {Object} opts.type The type of the beacon request.
	 * @param {String} opts.tid The tracker ID of the organization making the request.
	 */
	postJourneyWebsiteCustomerBeacons(websiteId, customerCookieId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'websiteId' is set
		if (websiteId === undefined || websiteId === null) {
			throw 'Missing the required parameter "websiteId" when calling postJourneyWebsiteCustomerBeacons';
		}
		// verify the required parameter 'customerCookieId' is set
		if (customerCookieId === undefined || customerCookieId === null) {
			throw 'Missing the required parameter "customerCookieId" when calling postJourneyWebsiteCustomerBeacons';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/websites/{websiteId}/customers/{customerCookieId}/beacons', 
			'POST', 
			{ 'websiteId': websiteId,'customerCookieId': customerCookieId },
			{ 'data': opts['data'],'type': opts['type'],'tid': opts['tid'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Data Schema
	 */
	putJourneyOpenactionsSchema(schemaId, body) { 
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null) {
			throw 'Missing the required parameter "schemaId" when calling putJourneyOpenactionsSchema';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putJourneyOpenactionsSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/openactions/schemas/{schemaId}', 
			'PUT', 
			{ 'schemaId': schemaId },
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
