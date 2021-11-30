import ApiClient from '../ApiClient.js';


class GroupsApi {
	/**
	 * Groups service.
	 * @module purecloud-platform-client-v2/api/GroupsApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new GroupsApi. 
	 * @alias module:purecloud-platform-client-v2/api/GroupsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete group
	 * 
	 * @param {String} groupId Group ID
	 */
	deleteGroup(groupId) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling deleteGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}', 
			'DELETE', 
			{ 'groupId': groupId }, 
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
	 * Remove members
	 * 
	 * @param {String} groupId Group ID
	 * @param {String} ids Comma separated list of userIds to remove
	 */
	deleteGroupMembers(groupId, ids) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling deleteGroupMembers';
		}
		// verify the required parameter 'ids' is set
		if (ids === undefined || ids === null) {
			throw 'Missing the required parameter "ids" when calling deleteGroupMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}/members', 
			'DELETE', 
			{ 'groupId': groupId }, 
			{ 'ids': ids }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Fetch field config for an entity type
	 * 
	 * @param {Object} type Field type
	 */
	getFieldconfig(type) { 
		// verify the required parameter 'type' is set
		if (type === undefined || type === null) {
			throw 'Missing the required parameter "type" when calling getFieldconfig';
		}

		return this.apiClient.callApi(
			'/api/v2/fieldconfig', 
			'GET', 
			{  }, 
			{ 'type': type }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get group
	 * 
	 * @param {String} groupId Group ID
	 */
	getGroup(groupId) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}', 
			'GET', 
			{ 'groupId': groupId }, 
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
	 * Get all individuals associated with the group
	 * 
	 * @param {String} groupId Group ID
	 */
	getGroupIndividuals(groupId) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getGroupIndividuals';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}/individuals', 
			'GET', 
			{ 'groupId': groupId }, 
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
	 * Get group members, includes individuals, owners, and dynamically included people
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 */
	getGroupMembers(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getGroupMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}/members', 
			'GET', 
			{ 'groupId': groupId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get group profile
	 * This api is deprecated. Use /api/v2/groups instead
	 * @param {String} groupId groupId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.fields Comma separated fields to return.  Allowable values can be found by querying /api/v2/fieldconfig?type=group and using the key for the elements returned by the fieldList
	 */
	getGroupProfile(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling getGroupProfile';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}/profile', 
			'GET', 
			{ 'groupId': groupId }, 
			{ 'fields': opts['fields'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a group list
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.id id
	 * @param {Array.<String>} opts.jabberId A list of jabberIds to fetch by bulk (cannot be used with the \&quot;id\&quot; parameter)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 */
	getGroups(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/groups', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'jabberId': this.apiClient.buildCollectionParam(opts['jabberId'], 'multi'),'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Search groups using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 */
	getGroupsSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getGroupsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/search', 
			'GET', 
			{  }, 
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get group profile listing
	 * This api is deprecated. Use /api/v2/groups instead.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.id id
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 */
	getProfilesGroups(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/profiles/groups', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Add members
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} body Add members
	 */
	postGroupMembers(groupId, body) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling postGroupMembers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGroupMembers';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}/members', 
			'POST', 
			{ 'groupId': groupId }, 
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
	 * Create a group
	 * 
	 * @param {Object} body Group
	 */
	postGroups(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGroups';
		}

		return this.apiClient.callApi(
			'/api/v2/groups', 
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
	 * Search groups
	 * 
	 * @param {Object} body Search request options
	 */
	postGroupsSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGroupsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/search', 
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
	 * Update group
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Group
	 */
	putGroup(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
			throw 'Missing the required parameter "groupId" when calling putGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}', 
			'PUT', 
			{ 'groupId': groupId }, 
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


export default GroupsApi;