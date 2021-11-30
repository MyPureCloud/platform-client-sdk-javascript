import ApiClient from '../ApiClient.js';


class JourneyApi {
	/**
	 * Journey service.
	 * @module purecloud-platform-client-v2/api/JourneyApi
	 * @version 126.1.0
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
	 * @param {Boolean} opts.hardDelete Determines whether Action Template should be soft-deleted (have it&#39;s state set to deleted) or hard-deleted (permanently removed). Set to false (soft-delete) by default.
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
	 * @param {String} opts.sortBy Field(s) to sort by. Prefix with &#39;-&#39; for descending (e.g. sortBy=displayName,-createdDate).
	 * @param {String} opts.filterField Field to filter by (e.g. filterField=weight or filterField=action.actionTemplate.id). Requires &#39;filterField&#39; to also be set.
	 * @param {String} opts.filterValue Value to filter by. Requires &#39;filterValue&#39; to also be set.
	 * @param {Array.<String>} opts.actionMapIds IDs of action maps to return. Use of this parameter is not compatible with pagination, filtering, sorting or querying. A maximum of 100 action maps are allowed per request.
	 * @param {Array.<String>} opts.queryFields Action Map field(s) to query on. Requires &#39;queryValue&#39; to also be set.
	 * @param {String} opts.queryValue Value to query on. Requires &#39;queryFields&#39; to also be set.
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
	 * @param {String} opts.sortBy Field(s) to sort by. Prefix with &#39;-&#39; for descending (e.g. sortBy=name,-createdDate).
	 * @param {Object} opts.mediaType Media type
	 * @param {Object} opts.state Action template state.
	 * @param {Array.<String>} opts.queryFields ActionTemplate field(s) to query on. Requires &#39;queryValue&#39; to also be set.
	 * @param {String} opts.queryValue Value to query on. Requires &#39;queryFields&#39; to also be set.
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
	 * @param {String} opts.sortBy Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with &#39;-&#39; for descending (e.g. sortBy=displayName,-createdDate).
	 * @param {Array.<String>} opts.outcomeIds IDs of outcomes to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 20 outcomes are allowed per request.
	 * @param {Array.<String>} opts.queryFields Outcome field(s) to query on. Requires &#39;queryValue&#39; to also be set.
	 * @param {String} opts.queryValue Value to query on. Requires &#39;queryFields&#39; to also be set.
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
	 * @param {String} opts.sortBy Field(s) to sort by. The response can be sorted by any first level property on the Outcome response. Prefix with &#39;-&#39; for descending (e.g. sortBy=displayName,-createdDate).
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.isActive Determines whether or not to show only active segments.
	 * @param {Array.<String>} opts.segmentIds IDs of segments to return. Use of this parameter is not compatible with pagination, sorting or querying. A maximum of 100 segments are allowed per request.
	 * @param {Array.<String>} opts.queryFields Segment field(s) to query on. Requires &#39;queryValue&#39; to also be set.
	 * @param {String} opts.queryValue Value to query on. Requires &#39;queryFields&#39; to also be set.
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

}


export default JourneyApi;