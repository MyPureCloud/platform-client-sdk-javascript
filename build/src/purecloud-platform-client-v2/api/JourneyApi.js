import ApiClient from '../ApiClient.js';


class JourneyApi {
	/**
	 * Journey service.
	 * @module purecloud-platform-client-v2/api/JourneyApi
	 * @version 104.0.0
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
	 */
	getJourneySegments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/journey/segments', 
			'GET', 
			{  }, 
			{ 'sortBy': opts['sortBy'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'isActive': opts['isActive'] }, 
			{  }, 
			{  }, 
			null, 
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