import ApiClient from '../ApiClient.js';


class JourneyApi {
	/**
	 * Journey service.
	 * @module purecloud-platform-client-v2/api/JourneyApi
	 * @version 97.0.0
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
	 * Retrieve segment assignments by customer ID.
	 * 
	 * @param {String} customerIdType Type of ID used to identify customer (e.g. email, cookie, and phone).
	 * @param {String} customerId Primary identifier of the customer to query for segment assignments.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Object} opts.segmentScope Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned.
	 * @param {Object} opts.assignmentState Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
	 */
	getJourneyCustomerCustomerIdSegments(customerIdType, customerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'customerIdType' is set
		if (customerIdType === undefined || customerIdType === null) {
			throw 'Missing the required parameter "customerIdType" when calling getJourneyCustomerCustomerIdSegments';
		}
		// verify the required parameter 'customerId' is set
		if (customerId === undefined || customerId === null) {
			throw 'Missing the required parameter "customerId" when calling getJourneyCustomerCustomerIdSegments';
		}

		return this.apiClient.callApi(
			'/api/v2/journey/customers/{customerIdType}/{customerId}/segments', 
			'GET', 
			{ 'customerIdType': customerIdType,'customerId': customerId }, 
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
	 * Retrieve segment assignments by external contact ID.
	 * 
	 * @param {String} externalContactId ID of the external contact to query for segment assignments.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Object} opts.segmentScope Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned.
	 * @param {Object} opts.assignmentState Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
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
	 * Retrieve segment assignments by session ID.
	 * 
	 * @param {String} sessionId ID of the session to query for segment assignments.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {Object} opts.segmentScope Scope to filter on. If not specified, both session-scoped and customer-scoped assignments are returned.
	 * @param {Object} opts.assignmentState Assignment state to filter on. If not specified, both assigned and unassigned assignments are returned.
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
	 * Assign/Unassign a segment to/from an external contact or, if a segment is already assigned, update the expiry date of the segment assignment.
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

}


export default JourneyApi;