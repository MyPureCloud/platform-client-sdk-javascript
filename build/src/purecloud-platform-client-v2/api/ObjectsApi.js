import ApiClient from '../ApiClient.js';


class ObjectsApi {
	/**
	 * Objects service.
	 * @module purecloud-platform-client-v2/api/ObjectsApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new ObjectsApi. 
	 * @alias module:purecloud-platform-client-v2/api/ObjectsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a division.
	 * 
	 * @param {String} divisionId Division ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.force Force delete this division as well as the grants and objects associated with it (default to false)
	 */
	deleteAuthorizationDivision(divisionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null) {
			throw 'Missing the required parameter "divisionId" when calling deleteAuthorizationDivision';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/divisions/{divisionId}', 
			'DELETE', 
			{ 'divisionId': divisionId }, 
			{ 'force': opts['force'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Returns an authorization division.
	 * 
	 * @param {String} divisionId Division ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.objectCount Get count of objects in this division, grouped by type (default to false)
	 */
	getAuthorizationDivision(divisionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null) {
			throw 'Missing the required parameter "divisionId" when calling getAuthorizationDivision';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/divisions/{divisionId}', 
			'GET', 
			{ 'divisionId': divisionId }, 
			{ 'objectCount': opts['objectCount'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Retrieve a list of all divisions defined for the organization
	 * Request specific divisions by id using a query param \&quot;id\&quot;, e.g.  ?id=5f777167-63be-4c24-ad41-374155d9e28b&amp;id=72e9fb25-c484-488d-9312-7acba82435b3
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {Boolean} opts.objectCount Include the count of objects contained in the division (default to false)
	 * @param {Array.<String>} opts.id Optionally request specific divisions by their IDs
	 * @param {String} opts.name Search term to filter by division name
	 */
	getAuthorizationDivisions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/authorization/divisions', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'objectCount': opts['objectCount'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Retrieve the home division for the organization.
	 * Will not include object counts.
	 */
	getAuthorizationDivisionsHome() { 

		return this.apiClient.callApi(
			'/api/v2/authorization/divisions/home', 
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
	 * Returns the maximum allowed number of divisions.
	 * 
	 */
	getAuthorizationDivisionsLimit() { 

		return this.apiClient.callApi(
			'/api/v2/authorization/divisions/limit', 
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
	 * Assign a list of objects to a division
	 * Set the division of a specified list of objects. The objects must all be of the same type, one of:  CAMPAIGN, MANAGEMENTUNIT, FLOW, QUEUE, DATATABLES or USER.  The body of the request is a list of object IDs, which are expected to be  GUIDs, e.g. [\&quot;206ce31f-61ec-40ed-a8b1-be6f06303998\&quot;,\&quot;250a754e-f5e4-4f51-800f-a92f09d3bf8c\&quot;]
	 * @param {String} divisionId Division ID
	 * @param {Object} objectType The type of the objects. Must be one of the valid object types
	 * @param {Array.<Object>} body Object Id List
	 */
	postAuthorizationDivisionObject(divisionId, objectType, body) { 
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null) {
			throw 'Missing the required parameter "divisionId" when calling postAuthorizationDivisionObject';
		}
		// verify the required parameter 'objectType' is set
		if (objectType === undefined || objectType === null) {
			throw 'Missing the required parameter "objectType" when calling postAuthorizationDivisionObject';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuthorizationDivisionObject';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/divisions/{divisionId}/objects/{objectType}', 
			'POST', 
			{ 'divisionId': divisionId,'objectType': objectType }, 
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
	 * Recreate a previously deleted division.
	 * 
	 * @param {String} divisionId Division ID
	 * @param {Object} body Recreated division data
	 */
	postAuthorizationDivisionRestore(divisionId, body) { 
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null) {
			throw 'Missing the required parameter "divisionId" when calling postAuthorizationDivisionRestore';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuthorizationDivisionRestore';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/divisions/{divisionId}/restore', 
			'POST', 
			{ 'divisionId': divisionId }, 
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
	 * Create a division.
	 * 
	 * @param {Object} body Division
	 */
	postAuthorizationDivisions(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuthorizationDivisions';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/divisions', 
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
	 * Update a division.
	 * 
	 * @param {String} divisionId Division ID
	 * @param {Object} body Updated division data
	 */
	putAuthorizationDivision(divisionId, body) { 
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null) {
			throw 'Missing the required parameter "divisionId" when calling putAuthorizationDivision';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAuthorizationDivision';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/divisions/{divisionId}', 
			'PUT', 
			{ 'divisionId': divisionId }, 
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


export default ObjectsApi;