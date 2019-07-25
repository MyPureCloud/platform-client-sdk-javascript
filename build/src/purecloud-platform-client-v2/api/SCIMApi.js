import ApiClient from '../ApiClient.js';


class SCIMApi {
	/**
	 * SCIM service.
	 * @module purecloud-platform-client-v2/api/SCIMApi
	 * @version 53.0.0
	 */

	/**
	 * Constructs a new SCIMApi. 
	 * @alias module:purecloud-platform-client-v2/api/SCIMApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/users.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource. If no match is found, returns 412 Precondition Failed. If match is found, performs request.
	 */
	deleteScimUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteScimUser';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users/{userId}', 
			'DELETE', 
			{ 'userId': userId }, 
			{  }, 
			{ 'If-Match': opts['ifMatch'] }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Delete a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/v2/users.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource. If no match is found, returns 412 Precondition Failed. If match is found, performs request.
	 */
	deleteScimV2User(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteScimV2User';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users/{userId}', 
			'DELETE', 
			{ 'userId': userId }, 
			{  }, 
			{ 'If-Match': opts['ifMatch'] }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Get a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/groups.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch The ETag of a resource. If no match is found, returns request. If match is found, returns 304 Not Modified.
	 */
	getScimGroup(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getScimGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/groups/{groupId}', 
			'GET', 
			{ 'groupId': groupId }, 
			{  }, 
			{ 'If-None-Match': opts['ifNoneMatch'] }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Get a list of groups
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex The 1-based index of the first query result. (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 returns totalResults. (default to 25)
	 * @param {String} opts.filter Filters results.
	 */
	getScimGroups(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scim/groups', 
			'GET', 
			{  }, 
			{ 'startIndex': opts['startIndex'],'count': opts['count'],'filter': opts['filter'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Get a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/users.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch The ETag of a resource. If no match is found, returns request. If match is found, returns 304 Not Modified.
	 */
	getScimUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getScimUser';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users/{userId}', 
			'GET', 
			{ 'userId': userId }, 
			{  }, 
			{ 'If-None-Match': opts['ifNoneMatch'] }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Get a list of users
	 * 
	 * @param {String} filter Filters results.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex The 1-based index of the first query result. (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 returns totalResults. (default to 25)
	 */
	getScimUsers(filter, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'filter' is set
		if (filter === undefined || filter === null) {
			throw 'Missing the required parameter "filter" when calling getScimUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users', 
			'GET', 
			{  }, 
			{ 'startIndex': opts['startIndex'],'count': opts['count'],'filter': filter }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Get a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/v2/groups.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch The ETag of a resource. If no match is found, returns request. If match is found, returns 304 Not Modified.
	 */
	getScimV2Group(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getScimV2Group';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/groups/{groupId}', 
			'GET', 
			{ 'groupId': groupId }, 
			{  }, 
			{ 'If-None-Match': opts['ifNoneMatch'] }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Get a list of groups
	 * 
	 * @param {String} filter Filters results.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex The 1-based index of the first query result. (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 returns totalResults. (default to 25)
	 */
	getScimV2Groups(filter, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'filter' is set
		if (filter === undefined || filter === null) {
			throw 'Missing the required parameter "filter" when calling getScimV2Groups';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/groups', 
			'GET', 
			{  }, 
			{ 'startIndex': opts['startIndex'],'count': opts['count'],'filter': filter }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Get the SCIM configuration
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch The ETag of a resource. If no match is found, returns request. If match is found, returns 304 Not Modified.
	 */
	getScimV2Serviceproviderconfig(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/scim/v2/serviceproviderconfig', 
			'GET', 
			{  }, 
			{  }, 
			{ 'If-None-Match': opts['ifNoneMatch'] }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Get a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/v2/users.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch The ETag of a resource. If no match is found, returns request. If match is found, returns 304 Not Modified.
	 */
	getScimV2User(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getScimV2User';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users/{userId}', 
			'GET', 
			{ 'userId': userId }, 
			{  }, 
			{ 'If-None-Match': opts['ifNoneMatch'] }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Get a list of users
	 * 
	 * @param {String} filter Filters results.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex The 1-based index of the first query result. (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 returns totalResults. (default to 25)
	 */
	getScimV2Users(filter, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'filter' is set
		if (filter === undefined || filter === null) {
			throw 'Missing the required parameter "filter" when calling getScimV2Users';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users', 
			'GET', 
			{  }, 
			{ 'startIndex': opts['startIndex'],'count': opts['count'],'filter': filter }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Modify a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/groups.
	 * @param {Object} body Group
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource. If no match is found, returns 412 Precondition Failed. If match is found, performs request.
	 */
	patchScimGroup(groupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling patchScimGroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchScimGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/groups/{groupId}', 
			'PATCH', 
			{ 'groupId': groupId }, 
			{  }, 
			{ 'If-Match': opts['ifMatch'] }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Modify a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/users.
	 * @param {Object} body SCIM Patch Request
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource. If no match is found, returns 412 Precondition Failed. If match is found, performs request.
	 */
	patchScimUser(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchScimUser';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchScimUser';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users/{userId}', 
			'PATCH', 
			{ 'userId': userId }, 
			{  }, 
			{ 'If-Match': opts['ifMatch'] }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Modify a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/v2/groups.
	 * @param {Object} body Group
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource. If no match is found, returns 412 Precondition Failed. If match is found, performs request.
	 */
	patchScimV2Group(groupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling patchScimV2Group';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchScimV2Group';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/groups/{groupId}', 
			'PATCH', 
			{ 'groupId': groupId }, 
			{  }, 
			{ 'If-Match': opts['ifMatch'] }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Modify a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/v2/users.
	 * @param {Object} body SCIM Patch Request
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource. If no match is found, returns 412 Precondition Failed. If match is found, performs request.
	 */
	patchScimV2User(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchScimV2User';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchScimV2User';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users/{userId}', 
			'PATCH', 
			{ 'userId': userId }, 
			{  }, 
			{ 'If-Match': opts['ifMatch'] }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Create a user
	 * 
	 * @param {Object} body SCIM Create User
	 */
	postScimUsers(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postScimUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Create a user
	 * 
	 * @param {Object} body SCIM Create User
	 */
	postScimV2Users(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postScimV2Users';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Replace a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/groups.
	 * @param {Object} body Group
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource. If no match is found, returns 412 Precondition Failed. If match is found, performs request.
	 */
	putScimGroup(groupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling putScimGroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putScimGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/groups/{groupId}', 
			'PUT', 
			{ 'groupId': groupId }, 
			{  }, 
			{ 'If-Match': opts['ifMatch'] }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Replace a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/users.
	 * @param {Object} body User
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource. If no match is found, returns 412 Precondition Failed. If match is found, performs request.
	 */
	putScimUser(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putScimUser';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putScimUser';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/users/{userId}', 
			'PUT', 
			{ 'userId': userId }, 
			{  }, 
			{ 'If-Match': opts['ifMatch'] }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Replace a group
	 * 
	 * @param {String} groupId The ID of a group. Returned with GET /api/v2/scim/v2/groups.
	 * @param {Object} body Group
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource. If no match is found, returns 412 Precondition Failed. If match is found, performs request.
	 */
	putScimV2Group(groupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling putScimV2Group';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putScimV2Group';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/groups/{groupId}', 
			'PUT', 
			{ 'groupId': groupId }, 
			{  }, 
			{ 'If-Match': opts['ifMatch'] }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

	/**
	 * Replace a user
	 * 
	 * @param {String} userId The ID of a user. Returned with GET /api/v2/scim/v2/users.
	 * @param {Object} body User
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch The ETag of a resource. If no match is found, returns 412 Precondition Failed. If match is found, performs request.
	 */
	putScimV2User(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putScimV2User';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putScimV2User';
		}

		return this.apiClient.callApi(
			'/api/v2/scim/v2/users/{userId}', 
			'PUT', 
			{ 'userId': userId }, 
			{  }, 
			{ 'If-Match': opts['ifMatch'] }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json', 'application/scim+json'], 
			['application/json', 'application/scim+json']
		);
	}

}


export default SCIMApi;