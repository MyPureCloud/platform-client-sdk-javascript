import ApiClient from '../ApiClient.js';


class SCIMApi {
	/**
	 * SCIM service.
	 * @module purecloud-platform-client-v2/api/SCIMApi
	 * @version 51.0.0
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
	 * Soft delete user with specified ID
	 * 
	 * @param {String} userId 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch If-Match for ETag version checking
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
	 * Soft delete user with specified ID
	 * 
	 * @param {String} userId 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch If-Match for ETag version checking
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
	 * Return Group with specified ID
	 * 
	 * @param {String} groupId 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch If-None-Match for ETag version checking
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
	 * Query Groups
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex Starting item of request. 1-based (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 will return no results other than the totalResults count. (default to 25)
	 * @param {String} opts.filter filter parameter e.g. displayName eq groupName
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
	 * Return user with specified ID (default version)
	 * 
	 * @param {String} userId 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch If-None-Match for ETag version checking
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
	 * Query Users
	 * 
	 * @param {String} filter filter parameter e.g. userName eq search@sample.org
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex Starting item of request. 1-based (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 will return no results other than the totalResults count. (default to 25)
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
	 * Return Group with specified ID
	 * 
	 * @param {String} groupId 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch If-None-Match for ETag version checking
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
	 * Query Groups
	 * 
	 * @param {String} filter filter parameter e.g. displayName eq groupName
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex Starting item of request. 1-based (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 will return no results other than the totalResults count. (default to 25)
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
	 * Get SCIM Configuration
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch If-None-Match for ETag version checking
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
	 * Return User with specified ID
	 * 
	 * @param {String} userId 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifNoneMatch If-None-Match for ETag version checking
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
	 * Query Users
	 * 
	 * @param {String} filter filter parameter e.g. userName eq search@sample.org
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.startIndex Starting item of request. 1-based (default to 1)
	 * @param {Number} opts.count The requested number of items per page. A value of 0 will return no results other than the totalResults count. (default to 25)
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
	 * Update Group with specified ID
	 * 
	 * @param {String} groupId 
	 * @param {Object} body Group
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch If-Match for ETag version checking
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
	 * Patch user with specified ID
	 * 
	 * @param {String} userId 
	 * @param {Object} body SCIM Patch Request
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch If-Match for ETag version checking
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
	 * Update Group with specified ID
	 * 
	 * @param {String} groupId 
	 * @param {Object} body Group
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch If-Match for ETag version checking
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
	 * Update user with specified ID
	 * 
	 * @param {String} userId User Id
	 * @param {Object} body SCIM Patch Request
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch If-Match for ETag version checking
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
	 * Create user
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
	 * Create user
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
	 * Update Group with specified ID
	 * 
	 * @param {String} groupId 
	 * @param {Object} body Group
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch If-Match for ETag version checking
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
	 * Update user with specified ID
	 * 
	 * @param {String} userId 
	 * @param {Object} body User
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch If-Match for ETag version checking
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
	 * Update Group with specified ID
	 * 
	 * @param {String} groupId 
	 * @param {Object} body Group
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch If-Match for ETag version checking
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
	 * Update user with specified ID
	 * 
	 * @param {String} userId User Id
	 * @param {Object} body User
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.ifMatch If-Match for ETag version checking
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