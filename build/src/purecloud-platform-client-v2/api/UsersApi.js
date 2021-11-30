import ApiClient from '../ApiClient.js';


class UsersApi {
	/**
	 * Users service.
	 * @module purecloud-platform-client-v2/api/UsersApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new UsersApi. 
	 * @alias module:purecloud-platform-client-v2/api/UsersApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete/cancel an async request
	 * 
	 * @param {String} jobId jobId
	 */
	deleteAnalyticsUsersDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling deleteAnalyticsUsersDetailsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/jobs/{jobId}', 
			'DELETE', 
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
	 * Delete a grant of a role in a division
	 * 
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {String} divisionId the id of the division of the grant
	 * @param {String} roleId the id of the role of the grant
	 */
	deleteAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId) { 
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null) {
			throw 'Missing the required parameter "subjectId" when calling deleteAuthorizationSubjectDivisionRole';
		}
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null) {
			throw 'Missing the required parameter "divisionId" when calling deleteAuthorizationSubjectDivisionRole';
		}
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling deleteAuthorizationSubjectDivisionRole';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}', 
			'DELETE', 
			{ 'subjectId': subjectId,'divisionId': divisionId,'roleId': roleId }, 
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
	 * Delete the user&#39;s max utilization settings and revert to the organization-wide default.
	 * 
	 * @param {String} userId User ID
	 */
	deleteRoutingUserUtilization(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteRoutingUserUtilization';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/utilization', 
			'DELETE', 
			{ 'userId': userId }, 
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
	 * Delete user
	 * 
	 * @param {String} userId User ID
	 */
	deleteUser(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteUser';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}', 
			'DELETE', 
			{ 'userId': userId }, 
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
	 * Remove routing language from user
	 * 
	 * @param {String} userId User ID
	 * @param {String} languageId languageId
	 */
	deleteUserRoutinglanguage(userId, languageId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteUserRoutinglanguage';
		}
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null) {
			throw 'Missing the required parameter "languageId" when calling deleteUserRoutinglanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routinglanguages/{languageId}', 
			'DELETE', 
			{ 'userId': userId,'languageId': languageId }, 
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
	 * Remove routing skill from user
	 * 
	 * @param {String} userId User ID
	 * @param {String} skillId skillId
	 */
	deleteUserRoutingskill(userId, skillId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteUserRoutingskill';
		}
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null) {
			throw 'Missing the required parameter "skillId" when calling deleteUserRoutingskill';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills/{skillId}', 
			'DELETE', 
			{ 'userId': userId,'skillId': skillId }, 
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
	 * Clear associated station
	 * 
	 * @param {String} userId User ID
	 */
	deleteUserStationAssociatedstation(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteUserStationAssociatedstation';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/station/associatedstation', 
			'DELETE', 
			{ 'userId': userId }, 
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
	 * Clear default station
	 * 
	 * @param {String} userId User ID
	 */
	deleteUserStationDefaultstation(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteUserStationDefaultstation';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/station/defaultstation', 
			'DELETE', 
			{ 'userId': userId }, 
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
	 * Get status for async query for user details
	 * 
	 * @param {String} jobId jobId
	 */
	getAnalyticsUsersDetailsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsUsersDetailsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/jobs/{jobId}', 
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
	 * Fetch a page of results for an async query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize The desired maximum number of results
	 */
	getAnalyticsUsersDetailsJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsUsersDetailsJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/jobs/{jobId}/results', 
			'GET', 
			{ 'jobId': jobId }, 
			{ 'cursor': opts['cursor'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Lookup the datalake availability date and time
	 * 
	 */
	getAnalyticsUsersDetailsJobsAvailability() { 

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/jobs/availability', 
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
	 * Returns which divisions the current user has the given permission in.
	 * This route is deprecated, use authorization/divisionspermitted/paged/me instead.
	 * @param {String} permission The permission string, including the object to access, e.g. routing:queue:view
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.name Search term to filter by division name
	 */
	getAuthorizationDivisionspermittedMe(permission, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'permission' is set
		if (permission === undefined || permission === null) {
			throw 'Missing the required parameter "permission" when calling getAuthorizationDivisionspermittedMe';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/divisionspermitted/me', 
			'GET', 
			{  }, 
			{ 'name': opts['name'],'permission': permission }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Returns which divisions the current user has the given permission in.
	 * 
	 * @param {String} permission The permission string, including the object to access, e.g. routing:queue:view
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getAuthorizationDivisionspermittedPagedMe(permission, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'permission' is set
		if (permission === undefined || permission === null) {
			throw 'Missing the required parameter "permission" when calling getAuthorizationDivisionspermittedPagedMe';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/divisionspermitted/paged/me', 
			'GET', 
			{  }, 
			{ 'permission': permission,'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Returns which divisions the specified user has the given permission in.
	 * This route is deprecated, use authorization/divisionspermitted/paged/me instead.
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {String} permission The permission string, including the object to access, e.g. routing:queue:view
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getAuthorizationDivisionspermittedPagedSubjectId(subjectId, permission, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null) {
			throw 'Missing the required parameter "subjectId" when calling getAuthorizationDivisionspermittedPagedSubjectId';
		}
		// verify the required parameter 'permission' is set
		if (permission === undefined || permission === null) {
			throw 'Missing the required parameter "permission" when calling getAuthorizationDivisionspermittedPagedSubjectId';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/divisionspermitted/paged/{subjectId}', 
			'GET', 
			{ 'subjectId': subjectId }, 
			{ 'permission': permission,'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Returns a listing of roles and permissions for a user.
	 * 
	 * @param {String} subjectId Subject ID (user or group)
	 */
	getAuthorizationSubject(subjectId) { 
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null) {
			throw 'Missing the required parameter "subjectId" when calling getAuthorizationSubject';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/subjects/{subjectId}', 
			'GET', 
			{ 'subjectId': subjectId }, 
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
	 * Returns a listing of roles and permissions for the currently authenticated user.
	 * 
	 */
	getAuthorizationSubjectsMe() { 

		return this.apiClient.callApi(
			'/api/v2/authorization/subjects/me', 
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
	 * Get a user profile listing
	 * This api is deprecated. User /api/v2/users
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.id id
	 * @param {Array.<String>} opts.jid jid
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object} opts.integrationPresenceSource Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an \&quot;expand\&quot;.
	 */
	getProfilesUsers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/profiles/users', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'jid': this.apiClient.buildCollectionParam(opts['jid'], 'multi'),'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'integrationPresenceSource': opts['integrationPresenceSource'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the user&#39;s max utilization settings.  If not configured, the organization-wide default is returned.
	 * 
	 * @param {String} userId User ID
	 */
	getRoutingUserUtilization(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getRoutingUserUtilization';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/utilization', 
			'GET', 
			{ 'userId': userId }, 
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
	 * Get user.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object} opts.integrationPresenceSource Gets an integration presence for a user instead of their default.
	 * @param {Object} opts.state Search for a user with this state (default to active)
	 */
	getUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUser';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}', 
			'GET', 
			{ 'userId': userId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'integrationPresenceSource': opts['integrationPresenceSource'],'state': opts['state'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get adjacents
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 */
	getUserAdjacents(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserAdjacents';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/adjacents', 
			'GET', 
			{ 'userId': userId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a user&#39;s CallForwarding
	 * 
	 * @param {String} userId User ID
	 */
	getUserCallforwarding(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserCallforwarding';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/callforwarding', 
			'GET', 
			{ 'userId': userId }, 
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
	 * Get direct reports
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 */
	getUserDirectreports(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserDirectreports';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/directreports', 
			'GET', 
			{ 'userId': userId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Deprecated; will be revived with new contract
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 */
	getUserFavorites(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserFavorites';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/favorites', 
			'GET', 
			{ 'userId': userId }, 
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
	 * Get a user&#39;s Geolocation
	 * 
	 * @param {String} userId user Id
	 * @param {String} clientId client Id
	 */
	getUserGeolocation(userId, clientId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserGeolocation';
		}
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling getUserGeolocation';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/geolocations/{clientId}', 
			'GET', 
			{ 'userId': userId,'clientId': clientId }, 
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
	 * Get a OutOfOffice
	 * 
	 * @param {String} userId User ID
	 */
	getUserOutofoffice(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserOutofoffice';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/outofoffice', 
			'GET', 
			{ 'userId': userId }, 
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
	 * Get user profile
	 * This api has been deprecated. Use api/v2/users instead
	 * @param {String} userId userId
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object} opts.integrationPresenceSource Gets an integration presence for a user instead of their default.
	 */
	getUserProfile(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserProfile';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/profile', 
			'GET', 
			{ 'userId': userId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'integrationPresenceSource': opts['integrationPresenceSource'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * List profile skills for a user
	 * 
	 * @param {String} userId User ID
	 */
	getUserProfileskills(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserProfileskills';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/profileskills', 
			'GET', 
			{ 'userId': userId }, 
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
	 * Get queues for user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Boolean} opts.joined Is joined to the queue (default to true)
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 */
	getUserQueues(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserQueues';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/queues', 
			'GET', 
			{ 'userId': userId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'joined': opts['joined'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Returns a listing of roles and permissions for a user.
	 * 
	 * @param {String} userId User ID
	 */
	getUserRoles(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/roles', 
			'GET', 
			{ 'userId': userId }, 
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
	 * List routing language for user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 */
	getUserRoutinglanguages(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserRoutinglanguages';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routinglanguages', 
			'GET', 
			{ 'userId': userId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * List routing skills for user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 */
	getUserRoutingskills(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserRoutingskills';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills', 
			'GET', 
			{ 'userId': userId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Fetch the routing status of a user
	 * 
	 * @param {String} userId User ID
	 */
	getUserRoutingstatus(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserRoutingstatus';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingstatus', 
			'GET', 
			{ 'userId': userId }, 
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
	 * Get user state information.
	 * 
	 * @param {String} userId User ID
	 */
	getUserState(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserState';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/state', 
			'GET', 
			{ 'userId': userId }, 
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
	 * Get station information for user
	 * 
	 * @param {String} userId User ID
	 */
	getUserStation(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserStation';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/station', 
			'GET', 
			{ 'userId': userId }, 
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
	 * Get superiors
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 */
	getUserSuperiors(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserSuperiors';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/superiors', 
			'GET', 
			{ 'userId': userId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * List the organizations that have authorized/trusted the user.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getUserTrustors(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserTrustors';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/trustors', 
			'GET', 
			{ 'userId': userId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of available users.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.id A list of user IDs to fetch by bulk
	 * @param {Array.<String>} opts.jabberId A list of jabberIds to fetch by bulk (cannot be used with the \&quot;id\&quot; parameter)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object} opts.integrationPresenceSource Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an \&quot;expand\&quot;. When using this parameter the maximum number of users that can be returned is 100.
	 * @param {Object} opts.state Only list users of this state (default to active)
	 */
	getUsers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'jabberId': this.apiClient.buildCollectionParam(opts['jabberId'], 'multi'),'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'integrationPresenceSource': opts['integrationPresenceSource'],'state': opts['state'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of Development Activities
	 * Either moduleId or userId is required. Results are filtered based on the applicable permissions.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.userId Specifies the list of user IDs to be queried, up to 100 user IDs. It searches for any relationship for the userId.
	 * @param {String} opts.moduleId Specifies the ID of the learning module.
	 * @param {String} opts.interval Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {String} opts.completionInterval Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.overdue Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned (default to Any)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc) (default to Desc)
	 * @param {Array.<String>} opts.types Specifies the activity types.
	 * @param {Array.<String>} opts.statuses Specifies the activity statuses to filter by
	 * @param {Array.<String>} opts.relationship Specifies how the current user relation should be interpreted, and filters the activities returned to only the activities that have the specified relationship. If a value besides Attendee is specified, it will only return Coaching Appointments. If not specified, no filtering is applied.
	 */
	getUsersDevelopmentActivities(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/development/activities', 
			'GET', 
			{  }, 
			{ 'userId': this.apiClient.buildCollectionParam(opts['userId'], 'multi'),'moduleId': opts['moduleId'],'interval': opts['interval'],'completionInterval': opts['completionInterval'],'overdue': opts['overdue'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),'statuses': this.apiClient.buildCollectionParam(opts['statuses'], 'multi'),'relationship': this.apiClient.buildCollectionParam(opts['relationship'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of Development Activities for current user
	 * Results are filtered based on the applicable permissions.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.moduleId Specifies the ID of the learning module.
	 * @param {String} opts.interval Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {String} opts.completionInterval Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.overdue Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned (default to Any)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc) (default to Desc)
	 * @param {Array.<String>} opts.types Specifies the activity types.
	 * @param {Array.<String>} opts.statuses Specifies the activity statuses to filter by
	 * @param {Array.<String>} opts.relationship Specifies how the current user relation should be interpreted, and filters the activities returned to only the activities that have the specified relationship. If a value besides Attendee is specified, it will only return Coaching Appointments. If not specified, no filtering is applied.
	 */
	getUsersDevelopmentActivitiesMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/development/activities/me', 
			'GET', 
			{  }, 
			{ 'moduleId': opts['moduleId'],'interval': opts['interval'],'completionInterval': opts['completionInterval'],'overdue': opts['overdue'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),'statuses': this.apiClient.buildCollectionParam(opts['statuses'], 'multi'),'relationship': this.apiClient.buildCollectionParam(opts['relationship'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Development Activity
	 * Permission not required if you are the attendee, creator or facilitator of the coaching appointment or you are the assigned user of the learning assignment.
	 * @param {String} activityId Specifies the activity ID, maps to either assignment or appointment ID
	 * @param {Object} type Specifies the activity type.
	 */
	getUsersDevelopmentActivity(activityId, type) { 
		// verify the required parameter 'activityId' is set
		if (activityId === undefined || activityId === null) {
			throw 'Missing the required parameter "activityId" when calling getUsersDevelopmentActivity';
		}
		// verify the required parameter 'type' is set
		if (type === undefined || type === null) {
			throw 'Missing the required parameter "type" when calling getUsersDevelopmentActivity';
		}

		return this.apiClient.callApi(
			'/api/v2/users/development/activities/{activityId}', 
			'GET', 
			{ 'activityId': activityId }, 
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
	 * Get current user details.
	 * This request is not valid when using the Client Credentials OAuth grant.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object} opts.integrationPresenceSource Get your presence for a given integration. This parameter will only be used when presence is provided as an \&quot;expand\&quot;.
	 */
	getUsersMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/me', 
			'GET', 
			{  }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'integrationPresenceSource': opts['integrationPresenceSource'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Search users using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 * @param {Object} opts.integrationPresenceSource integrationPresenceSource
	 */
	getUsersSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getUsersSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/users/search', 
			'GET', 
			{  }, 
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'integrationPresenceSource': opts['integrationPresenceSource'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body User
	 */
	patchUser(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUser';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUser';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}', 
			'PATCH', 
			{ 'userId': userId }, 
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
	 * Patch a user&#39;s CallForwarding
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Call forwarding
	 */
	patchUserCallforwarding(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserCallforwarding';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserCallforwarding';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/callforwarding', 
			'PATCH', 
			{ 'userId': userId }, 
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
	 * Patch a user&#39;s Geolocation
	 * The geolocation object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the client as the user&#39;s primary geolocation source.  Option 2: Provide the &#39;latitude&#39; and &#39;longitude&#39; values.  This will enqueue an asynchronous update of the &#39;city&#39;, &#39;region&#39;, and &#39;country&#39;, generating a notification. A subsequent GET operation will include the new values for &#39;city&#39;, &#39;region&#39; and &#39;country&#39;.  Option 3:  Provide the &#39;city&#39;, &#39;region&#39;, &#39;country&#39; values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
	 * @param {String} userId user Id
	 * @param {String} clientId client Id
	 * @param {Object} body Geolocation
	 */
	patchUserGeolocation(userId, clientId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserGeolocation';
		}
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling patchUserGeolocation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserGeolocation';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/geolocations/{clientId}', 
			'PATCH', 
			{ 'userId': userId,'clientId': clientId }, 
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
	 * Join or unjoin a queue for a user
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} userId User ID
	 * @param {Object} body Queue Member
	 */
	patchUserQueue(queueId, userId, body) { 
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null) {
			throw 'Missing the required parameter "queueId" when calling patchUserQueue';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserQueue';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserQueue';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/queues/{queueId}', 
			'PATCH', 
			{ 'queueId': queueId,'userId': userId }, 
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
	 * Join or unjoin a set of queues for a user
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body User Queues
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 */
	patchUserQueues(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserQueues';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserQueues';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/queues', 
			'PATCH', 
			{ 'userId': userId }, 
			{ 'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update routing language proficiency or state.
	 * 
	 * @param {String} userId User ID
	 * @param {String} languageId languageId
	 * @param {Object} body Language
	 */
	patchUserRoutinglanguage(userId, languageId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserRoutinglanguage';
		}
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null) {
			throw 'Missing the required parameter "languageId" when calling patchUserRoutinglanguage';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserRoutinglanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routinglanguages/{languageId}', 
			'PATCH', 
			{ 'userId': userId,'languageId': languageId }, 
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
	 * Add bulk routing language to user. Max limit 50 languages
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Language
	 */
	patchUserRoutinglanguagesBulk(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserRoutinglanguagesBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserRoutinglanguagesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routinglanguages/bulk', 
			'PATCH', 
			{ 'userId': userId }, 
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
	 * Bulk add routing skills to user
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Skill
	 */
	patchUserRoutingskillsBulk(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserRoutingskillsBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserRoutingskillsBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills/bulk', 
			'PATCH', 
			{ 'userId': userId }, 
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
	 * Update bulk acd autoanswer on users
	 * 
	 * @param {Array.<Object>} body Users
	 */
	patchUsersBulk(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUsersBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/users/bulk', 
			'PATCH', 
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
	 * Query for user aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsUsersAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/aggregates/query', 
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
	 * Query for user details asynchronously
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsUsersDetailsJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersDetailsJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/jobs', 
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
	 * Query for user details
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsUsersDetailsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersDetailsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/details/query', 
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
	 * Query for user observations
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsUsersObservationsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersObservationsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/observations/query', 
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
	 * Bulk-grant roles and divisions to a subject.
	 * 
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {Object} body Pairs of role and division IDs
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.subjectType what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT) (default to PC_USER)
	 */
	postAuthorizationSubjectBulkadd(subjectId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null) {
			throw 'Missing the required parameter "subjectId" when calling postAuthorizationSubjectBulkadd';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuthorizationSubjectBulkadd';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/subjects/{subjectId}/bulkadd', 
			'POST', 
			{ 'subjectId': subjectId }, 
			{ 'subjectType': opts['subjectType'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Bulk-remove grants from a subject.
	 * 
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {Object} body Pairs of role and division IDs
	 */
	postAuthorizationSubjectBulkremove(subjectId, body) { 
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null) {
			throw 'Missing the required parameter "subjectId" when calling postAuthorizationSubjectBulkremove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuthorizationSubjectBulkremove';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/subjects/{subjectId}/bulkremove', 
			'POST', 
			{ 'subjectId': subjectId }, 
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
	 * Replace subject&#39;s roles and divisions with the exact list supplied in the request.
	 * This operation will not remove grants that are inherited from group membership. It will only set the grants directly applied to the subject.
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {Object} body Pairs of role and division IDs
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.subjectType what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT) (default to PC_USER)
	 */
	postAuthorizationSubjectBulkreplace(subjectId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null) {
			throw 'Missing the required parameter "subjectId" when calling postAuthorizationSubjectBulkreplace';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuthorizationSubjectBulkreplace';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/subjects/{subjectId}/bulkreplace', 
			'POST', 
			{ 'subjectId': subjectId }, 
			{ 'subjectType': opts['subjectType'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Make a grant of a role in a division
	 * 
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {String} divisionId the id of the division to which to make the grant
	 * @param {String} roleId the id of the role to grant
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.subjectType what the type of the subject is: PC_GROUP, PC_USER or PC_OAUTH_CLIENT (note: for cross-org authorization, please use the Organization Authorization endpoints) (default to PC_USER)
	 */
	postAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null) {
			throw 'Missing the required parameter "subjectId" when calling postAuthorizationSubjectDivisionRole';
		}
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null) {
			throw 'Missing the required parameter "divisionId" when calling postAuthorizationSubjectDivisionRole';
		}
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling postAuthorizationSubjectDivisionRole';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/subjects/{subjectId}/divisions/{divisionId}/roles/{roleId}', 
			'POST', 
			{ 'subjectId': subjectId,'divisionId': divisionId,'roleId': roleId }, 
			{ 'subjectType': opts['subjectType'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Send an activation email to the user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.force Resend the invitation even if one is already outstanding (default to false)
	 */
	postUserInvite(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling postUserInvite';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/invite', 
			'POST', 
			{ 'userId': userId }, 
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
	 * Change a users password
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Password
	 */
	postUserPassword(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling postUserPassword';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUserPassword';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/password', 
			'POST', 
			{ 'userId': userId }, 
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
	 * Add routing language to user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Language
	 */
	postUserRoutinglanguages(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling postUserRoutinglanguages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUserRoutinglanguages';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routinglanguages', 
			'POST', 
			{ 'userId': userId }, 
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
	 * Add routing skill to user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Skill
	 */
	postUserRoutingskills(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling postUserRoutingskills';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUserRoutingskills';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills', 
			'POST', 
			{ 'userId': userId }, 
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
	 * Create user
	 * 
	 * @param {Object} body User
	 */
	postUsers(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/users', 
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
	 * Retrieve aggregated development activity data
	 * Results are filtered based on the applicable permissions.
	 * @param {Object} body Aggregate Request
	 */
	postUsersDevelopmentActivitiesAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersDevelopmentActivitiesAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/users/development/activities/aggregates/query', 
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
	 * Change your password
	 * 
	 * @param {Object} body Password
	 */
	postUsersMePassword(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersMePassword';
		}

		return this.apiClient.callApi(
			'/api/v2/users/me/password', 
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
	 * Search users
	 * 
	 * @param {Object} body Search request options
	 */
	postUsersSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/users/search', 
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
	 * Update the user&#39;s max utilization settings.  Include only those media types requiring custom configuration.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body utilization
	 */
	putRoutingUserUtilization(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putRoutingUserUtilization';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingUserUtilization';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/utilization', 
			'PUT', 
			{ 'userId': userId }, 
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
	 * Update a user&#39;s CallForwarding
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Call forwarding
	 */
	putUserCallforwarding(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserCallforwarding';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserCallforwarding';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/callforwarding', 
			'PUT', 
			{ 'userId': userId }, 
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
	 * Update an OutOfOffice
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body The updated OutOffOffice
	 */
	putUserOutofoffice(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserOutofoffice';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserOutofoffice';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/outofoffice', 
			'PUT', 
			{ 'userId': userId }, 
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
	 * Update profile skills for a user
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Skills
	 */
	putUserProfileskills(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserProfileskills';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserProfileskills';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/profileskills', 
			'PUT', 
			{ 'userId': userId }, 
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
	 * Sets the user&#39;s roles
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body List of roles
	 */
	putUserRoles(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserRoles';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/roles', 
			'PUT', 
			{ 'userId': userId }, 
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
	 * Update routing skill proficiency or state.
	 * 
	 * @param {String} userId User ID
	 * @param {String} skillId skillId
	 * @param {Object} body Skill
	 */
	putUserRoutingskill(userId, skillId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserRoutingskill';
		}
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null) {
			throw 'Missing the required parameter "skillId" when calling putUserRoutingskill';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserRoutingskill';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills/{skillId}', 
			'PUT', 
			{ 'userId': userId,'skillId': skillId }, 
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
	 * Replace all routing skills assigned to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Skill
	 */
	putUserRoutingskillsBulk(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserRoutingskillsBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserRoutingskillsBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingskills/bulk', 
			'PUT', 
			{ 'userId': userId }, 
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
	 * Update the routing status of a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Routing Status
	 */
	putUserRoutingstatus(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserRoutingstatus';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserRoutingstatus';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/routingstatus', 
			'PUT', 
			{ 'userId': userId }, 
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
	 * Update user state information.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body User
	 */
	putUserState(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserState';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserState';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/state', 
			'PUT', 
			{ 'userId': userId }, 
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
	 * Set associated station
	 * 
	 * @param {String} userId User ID
	 * @param {String} stationId stationId
	 */
	putUserStationAssociatedstationStationId(userId, stationId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserStationAssociatedstationStationId';
		}
		// verify the required parameter 'stationId' is set
		if (stationId === undefined || stationId === null) {
			throw 'Missing the required parameter "stationId" when calling putUserStationAssociatedstationStationId';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/station/associatedstation/{stationId}', 
			'PUT', 
			{ 'userId': userId,'stationId': stationId }, 
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
	 * Set default station
	 * 
	 * @param {String} userId User ID
	 * @param {String} stationId stationId
	 */
	putUserStationDefaultstationStationId(userId, stationId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putUserStationDefaultstationStationId';
		}
		// verify the required parameter 'stationId' is set
		if (stationId === undefined || stationId === null) {
			throw 'Missing the required parameter "stationId" when calling putUserStationDefaultstationStationId';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/station/defaultstation/{stationId}', 
			'PUT', 
			{ 'userId': userId,'stationId': stationId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default UsersApi;