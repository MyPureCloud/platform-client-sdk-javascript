import ApiClient from '../ApiClient.js';


class UsersApi {
	/**
	 * Users service.
	 * @module purecloud-platform-client-v2/api/UsersApi
	 * @version 249.1.0
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
	 * Delete/cancel an async request for user aggregates
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteAnalyticsUsersAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteAnalyticsUsersAggregatesJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling deleteAnalyticsUsersAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/aggregates/jobs/{jobId}', 
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
	 * Delete/cancel an async request
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteAnalyticsUsersDetailsJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a grant of a role in a division
	 * 
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {String} divisionId the id of the division of the grant
	 * @param {String} roleId the id of the role of the grant
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null || subjectId === '') {
			throw 'Missing the required parameter "subjectId" when calling deleteAuthorizationSubjectDivisionRole';
		}
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null || divisionId === '') {
			throw 'Missing the required parameter "divisionId" when calling deleteAuthorizationSubjectDivisionRole';
		}
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null || roleId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingDirectroutingbackupSettingsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/directroutingbackup/settings/me', 
			'DELETE', 
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
	 * Delete the user's Direct Routing Backup settings and revert to the Direct Routing Queue default.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingUserDirectroutingbackupSettings(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteRoutingUserDirectroutingbackupSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/directroutingbackup/settings', 
			'DELETE', 
			{ 'userId': userId },
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
	 * Delete the user's max utilization settings and revert to the organization-wide default.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteRoutingUserUtilization(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a custom attributes record.
	 * 
	 * @param {String} userId user ID
	 * @param {String} schemaId schemaId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteUserCustomattribute is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteUserCustomattribute(userId, schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteUserCustomattribute';
		}
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling deleteUserCustomattribute';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/customattributes/{schemaId}', 
			'DELETE', 
			{ 'userId': userId,'schemaId': schemaId },
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
	 * Delete the external identifier for user.
	 * 
	 * @param {String} userId User ID
	 * @param {String} authorityName Authority Name
	 * @param {String} externalKey External Key
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteUserExternalidAuthorityNameExternalKey(userId, authorityName, externalKey, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteUserExternalidAuthorityNameExternalKey';
		}
		// verify the required parameter 'authorityName' is set
		if (authorityName === undefined || authorityName === null || authorityName === '') {
			throw 'Missing the required parameter "authorityName" when calling deleteUserExternalidAuthorityNameExternalKey';
		}
		// verify the required parameter 'externalKey' is set
		if (externalKey === undefined || externalKey === null || externalKey === '') {
			throw 'Missing the required parameter "externalKey" when calling deleteUserExternalidAuthorityNameExternalKey';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/externalid/{authorityName}/{externalKey}', 
			'DELETE', 
			{ 'userId': userId,'authorityName': authorityName,'externalKey': externalKey },
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
	 * Remove a routing language from a user
	 * 
	 * @param {String} userId User ID
	 * @param {String} languageId languageId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteUserRoutinglanguage(userId, languageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteUserRoutinglanguage';
		}
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null || languageId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Remove a routing skill from a user
	 * 
	 * @param {String} userId User ID
	 * @param {String} skillId skillId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteUserRoutingskill(userId, skillId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteUserRoutingskill';
		}
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null || skillId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Clear associated station
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteUserStationAssociatedstation(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Clear default station
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteUserStationDefaultstation(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a verifier
	 * 
	 * @param {String} userId User ID
	 * @param {String} verifierId Verifier ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteUserVerifier(userId, verifierId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteUserVerifier';
		}
		// verify the required parameter 'verifierId' is set
		if (verifierId === undefined || verifierId === null || verifierId === '') {
			throw 'Missing the required parameter "verifierId" when calling deleteUserVerifier';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/verifiers/{verifierId}', 
			'DELETE', 
			{ 'userId': userId,'verifierId': verifierId },
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
	 * deleteUsersCustomattributesSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteUsersCustomattributesSchema(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling deleteUsersCustomattributesSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/users/customattributes/schemas/{schemaId}', 
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
	 * Get status for async query for user aggregates
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getAnalyticsUsersAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsUsersAggregatesJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsUsersAggregatesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/aggregates/jobs/{jobId}', 
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
	 * getAnalyticsUsersAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getAnalyticsUsersAggregatesJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAnalyticsUsersAggregatesJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/aggregates/jobs/{jobId}/results', 
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
	 * Get status for async query for user details
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAnalyticsUsersDetailsJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch a page of results for an async query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize The desired maximum number of results
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAnalyticsUsersDetailsJobResults(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Lookup the datalake availability date and time
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAnalyticsUsersDetailsJobsAvailability(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Returns which divisions the current user has the given permission in.
	 * This route is deprecated, use authorization/divisionspermitted/paged/me instead.
	 * @param {String} permission The permission string, including the object to access, e.g. routing:queue:view
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.name Search term to filter by division name
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Returns which divisions the current user has the given permission in.
	 * 
	 * @param {String} permission The permission string, including the object to access, e.g. routing:queue:view
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getAuthorizationDivisionspermittedPagedSubjectId(subjectId, permission, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null || subjectId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Returns a listing of roles and permissions for a user.
	 * 
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.includeDuplicates Include multiple entries with the same role and division but different subjects (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAuthorizationSubject(subjectId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null || subjectId === '') {
			throw 'Missing the required parameter "subjectId" when calling getAuthorizationSubject';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/subjects/{subjectId}', 
			'GET', 
			{ 'subjectId': subjectId },
			{ 'includeDuplicates': opts['includeDuplicates'] },
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
	 * Returns a listing of roles and permissions for the currently authenticated user.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.includeDuplicates Include multiple entries with the same role and division but different subjects (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAuthorizationSubjectsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/authorization/subjects/me', 
			'GET', 
			{  },
			{ 'includeDuplicates': opts['includeDuplicates'] },
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
	 * Fetch field config for an entity type
	 * 
	 * @param {Object} type Field type
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getFieldconfig(type, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object} opts.integrationPresenceSource Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the user's Direct Routing Backup settings.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingDirectroutingbackupSettingsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/routing/directroutingbackup/settings/me', 
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
	 * Get the user's Direct Routing Backup settings.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingUserDirectroutingbackupSettings(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getRoutingUserDirectroutingbackupSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/directroutingbackup/settings', 
			'GET', 
			{ 'userId': userId },
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
	 * Get the user's max utilization settings.  If not configured, the organization-wide default is returned.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getRoutingUserUtilization(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get user.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand. Note, expand parameters are resolved with a best effort approach and not guaranteed to be returned. If requested expand information is absolutely required, it's recommended to use specific API requests instead.
	 * @param {Object} opts.integrationPresenceSource Gets an integration presence for a user instead of their default.
	 * @param {Object} opts.state Search for a user with this state (default to active)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get adjacents
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserAdjacents(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a user's CallForwarding
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserCallforwarding(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get custom attributes by schema id
	 * 
	 * @param {String} userId user ID
	 * @param {String} schemaId schemaId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getUserCustomattribute is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUserCustomattribute(userId, schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserCustomattribute';
		}
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getUserCustomattribute';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/customattributes/{schemaId}', 
			'GET', 
			{ 'userId': userId,'schemaId': schemaId },
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
	 * Get multiple custom attributes records by schema ids
	 * 
	 * @param {String} userId user ID
	 * @param {Array.<String>} schemaIds 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getUserCustomattributesBulk is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUserCustomattributesBulk(userId, schemaIds, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserCustomattributesBulk';
		}
		// verify the required parameter 'schemaIds' is set
		if (schemaIds === undefined || schemaIds === null) {
			throw 'Missing the required parameter "schemaIds" when calling getUserCustomattributesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/customattributes/bulk', 
			'GET', 
			{ 'userId': userId },
			{ 'schemaIds': this.apiClient.buildCollectionParam(schemaIds, 'multi') },
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
	 * Get direct reports
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserDirectreports(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the external identifiers for a user.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserExternalid(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserExternalid';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/externalid', 
			'GET', 
			{ 'userId': userId },
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
	 * Get the external identifier of user for an authority.
	 * Authority name and external key are case sensitive.
	 * @param {String} userId User ID
	 * @param {String} authorityName Authority Name
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserExternalidAuthorityName(userId, authorityName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserExternalidAuthorityName';
		}
		// verify the required parameter 'authorityName' is set
		if (authorityName === undefined || authorityName === null || authorityName === '') {
			throw 'Missing the required parameter "authorityName" when calling getUserExternalidAuthorityName';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/externalid/{authorityName}', 
			'GET', 
			{ 'userId': userId,'authorityName': authorityName },
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
	 * Deprecated; will be revived with new contract
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getUserFavorites(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a user's Geolocation
	 * 
	 * @param {String} userId user Id
	 * @param {String} clientId client Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserGeolocation(userId, clientId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserGeolocation';
		}
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null || clientId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a OutOfOffice
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserOutofoffice(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get user profile
	 * This api has been deprecated. Use api/v2/users instead
	 * @param {String} userId userId
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object} opts.integrationPresenceSource Gets an integration presence for a user instead of their default.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getUserProfile(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List profile skills for a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserProfileskills(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserQueues(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Returns a listing of roles and permissions for a user.
	 * 
	 * @param {String} subjectId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserRoles(subjectId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null || subjectId === '') {
			throw 'Missing the required parameter "subjectId" when calling getUserRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{subjectId}/roles', 
			'GET', 
			{ 'subjectId': subjectId },
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
	 * List routing languages assigned to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserRoutinglanguages(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List routing skills assigned to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserRoutingskills(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch the routing status of a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserRoutingstatus(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get skill groups for a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.after The cursor that points to the next page
	 * @param {String} opts.before The cursor that points to the previous page
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserSkillgroups(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserSkillgroups';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/skillgroups', 
			'GET', 
			{ 'userId': userId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'],'before': opts['before'] },
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
	 * Get user state information.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserState(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get station information for user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserStation(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get superiors
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserSuperiors(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List the organizations that have authorized/trusted the user.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserTrustors(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of verifiers
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserVerifiers(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserVerifiers';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/verifiers', 
			'GET', 
			{ 'userId': userId },
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
	 * Get the list of available users.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.id A list of user IDs to fetch by bulk
	 * @param {Array.<String>} opts.jabberId A list of jabberIds to fetch by bulk (cannot be used with the id parameter)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand. Note, expand parameters are resolved with a best effort approach and not guaranteed to be returned. If requested expand information is absolutely required, it's recommended to use specific API requests instead.
	 * @param {Object} opts.integrationPresenceSource Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100.
	 * @param {Object} opts.state Only list users of this state (default to active)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get chats for a user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.excludeClosed Whether or not to exclude closed chats
	 * @param {Boolean} opts.includePresence Whether or not to include user presence
	 * @param {String} opts.after The key to start after
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUsersChatsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/chats/me', 
			'GET', 
			{  },
			{ 'excludeClosed': opts['excludeClosed'],'includePresence': opts['includePresence'],'after': opts['after'] },
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
	 * getUsersCustomattributesSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersCustomattributesSchema(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getUsersCustomattributesSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/users/customattributes/schemas/{schemaId}', 
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
	 * getUsersCustomattributesSchemaVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersCustomattributesSchemaVersion(schemaId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getUsersCustomattributesSchemaVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getUsersCustomattributesSchemaVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/users/customattributes/schemas/{schemaId}/versions/{versionId}', 
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
	 * Get all versions of a user schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getUsersCustomattributesSchemaVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersCustomattributesSchemaVersions(schemaId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling getUsersCustomattributesSchemaVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/users/customattributes/schemas/{schemaId}/versions', 
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
	 * getUsersCustomattributesSchemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersCustomattributesSchemas(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/customattributes/schemas', 
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
	 * Get the core types from which all schemas are built.
	 * 
	 * @param {String} coreTypeName Name of the core type
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getUsersCustomattributesSchemasCoretype is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersCustomattributesSchemasCoretype(coreTypeName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'coreTypeName' is set
		if (coreTypeName === undefined || coreTypeName === null || coreTypeName === '') {
			throw 'Missing the required parameter "coreTypeName" when calling getUsersCustomattributesSchemasCoretype';
		}

		return this.apiClient.callApi(
			'/api/v2/users/customattributes/schemas/coretypes/{coreTypeName}', 
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
	 * getUsersCustomattributesSchemasCoretypes is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersCustomattributesSchemasCoretypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/customattributes/schemas/coretypes', 
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
	 * getUsersCustomattributesSchemasLimits is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersCustomattributesSchemasLimits(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/customattributes/schemas/limits', 
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
	 * Get list of Development Activities
	 * Either moduleId or userId is required. Results are filtered based on the applicable permissions.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.userId Specifies the list of user IDs to be queried, up to 100 user IDs. It searches for any relationship for the userId.
	 * @param {String} opts.moduleId Specifies the ID of the learning module.
	 * @param {String} opts.interval Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {String} opts.completionInterval Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.overdue Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned (default to Any)
	 * @param {Object} opts.pass Specifies if only the failed (pass is False) or passed (pass is True) activities are returned. If pass is Any or if the pass parameter is not supplied, all activities are returned (default to Any)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc) (default to Desc)
	 * @param {Array.<String>} opts.types Specifies the activity types. Informational, AssessedContent and Assessment are deprecated
	 * @param {Array.<String>} opts.statuses Specifies the activity statuses to filter by
	 * @param {Array.<String>} opts.relationship Specifies how the current user relation should be interpreted, and filters the activities returned to only the activities that have the specified relationship. If a value besides Attendee is specified, it will only return Coaching Appointments. If not specified, no filtering is applied.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUsersDevelopmentActivities(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/development/activities', 
			'GET', 
			{  },
			{ 'userId': this.apiClient.buildCollectionParam(opts['userId'], 'multi'),'moduleId': opts['moduleId'],'interval': opts['interval'],'completionInterval': opts['completionInterval'],'overdue': opts['overdue'],'pass': opts['pass'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),'statuses': this.apiClient.buildCollectionParam(opts['statuses'], 'multi'),'relationship': this.apiClient.buildCollectionParam(opts['relationship'], 'multi') },
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
	 * Get list of Development Activities for current user
	 * Results are filtered based on the applicable permissions.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.moduleId Specifies the ID of the learning module.
	 * @param {String} opts.interval Specifies the dateDue range to be queried. Milliseconds will be truncated. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {String} opts.completionInterval Specifies the range of completion dates to be used for filtering. A maximum of 1 year can be specified in the range. End date is not inclusive. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss
	 * @param {Object} opts.overdue Specifies if non-overdue, overdue, or all activities are returned. If not specified, all activities are returned (default to Any)
	 * @param {Object} opts.pass Specifies if only the failed (pass is False) or passed (pass is True) activities are returned. If pass is Any or if the pass parameter is not supplied, all activities are returned (default to Any)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Specifies result set sort order sorted by the date due; if not specified, default sort order is descending (Desc) (default to Desc)
	 * @param {Array.<String>} opts.types Specifies the activity types. Informational, AssessedContent and Assessment are deprecated
	 * @param {Array.<String>} opts.statuses Specifies the activity statuses to filter by
	 * @param {Array.<String>} opts.relationship Specifies how the current user relation should be interpreted, and filters the activities returned to only the activities that have the specified relationship. If a value besides Attendee is specified, it will only return Coaching Appointments. If not specified, no filtering is applied.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUsersDevelopmentActivitiesMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/development/activities/me', 
			'GET', 
			{  },
			{ 'moduleId': opts['moduleId'],'interval': opts['interval'],'completionInterval': opts['completionInterval'],'overdue': opts['overdue'],'pass': opts['pass'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'types': this.apiClient.buildCollectionParam(opts['types'], 'multi'),'statuses': this.apiClient.buildCollectionParam(opts['statuses'], 'multi'),'relationship': this.apiClient.buildCollectionParam(opts['relationship'], 'multi') },
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
	 * Get a Development Activity
	 * Permission not required if you are the attendee, creator or facilitator of the coaching appointment or you are the assigned user of the learning assignment.
	 * @param {String} activityId Specifies the activity ID, maps to either assignment or appointment ID
	 * @param {Object} type Specifies the activity type. Informational, AssessedContent and Assessment are deprecated
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUsersDevelopmentActivity(activityId, type, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'activityId' is set
		if (activityId === undefined || activityId === null || activityId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the user associated with external identifier.
	 * Authority name and external key are case sensitive.
	 * @param {String} authorityName Authority Name
	 * @param {String} externalKey External Key
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUsersExternalidAuthorityNameExternalKey(authorityName, externalKey, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'authorityName' is set
		if (authorityName === undefined || authorityName === null || authorityName === '') {
			throw 'Missing the required parameter "authorityName" when calling getUsersExternalidAuthorityNameExternalKey';
		}
		// verify the required parameter 'externalKey' is set
		if (externalKey === undefined || externalKey === null || externalKey === '') {
			throw 'Missing the required parameter "externalKey" when calling getUsersExternalidAuthorityNameExternalKey';
		}

		return this.apiClient.callApi(
			'/api/v2/users/externalid/{authorityName}/{externalKey}', 
			'GET', 
			{ 'authorityName': authorityName,'externalKey': externalKey },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get current user details.
	 * This request is not valid when using the Client Credentials OAuth grant.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object} opts.integrationPresenceSource Get your presence for a given integration. This parameter will only be used when presence is provided as an expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of available users, paged by cursor token, No division filtering available so directory:user:view permission for all divisions is required
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Cursor token to retrieve next page
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand. Note, expand parameters are resolved with a best effort approach and not guaranteed to be returned. If requested expand information is absolutely required, it's recommended to use specific API requests instead.
	 * @param {Object} opts.integrationPresenceSource Gets an integration presence for users instead of their defaults. This parameter will only be used when presence is provided as an expand. When using this parameter the maximum number of users that can be returned is 100.
	 * @param {Object} opts.state Only list users of this state (default to active)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getUsersQuery is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getUsersQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/users/query', 
			'GET', 
			{  },
			{ 'cursor': opts['cursor'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'integrationPresenceSource': opts['integrationPresenceSource'],'state': opts['state'] },
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
	 * Search users using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 * @param {Object} opts.integrationPresenceSource integrationPresenceSource
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body User
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUser(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Patch a user's CallForwarding
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Call forwarding
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserCallforwarding(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a single custom attributes record by amending the data with only the provided fields.
	 * 
	 * @param {String} userId user ID
	 * @param {Object} userCustomAttributes 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * patchUserCustomattributes is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchUserCustomattributes(userId, userCustomAttributes, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchUserCustomattributes';
		}
		// verify the required parameter 'userCustomAttributes' is set
		if (userCustomAttributes === undefined || userCustomAttributes === null) {
			throw 'Missing the required parameter "userCustomAttributes" when calling patchUserCustomattributes';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/customattributes', 
			'PATCH', 
			{ 'userId': userId },
			{  },
			{  },
			{  },
			userCustomAttributes, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update multiple custom attributes records by amending the data with only the provided fields.
	 * 
	 * @param {String} userId user ID
	 * @param {Array.<Object>} userCustomAttributesList 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * patchUserCustomattributesBulk is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchUserCustomattributesBulk(userId, userCustomAttributesList, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchUserCustomattributesBulk';
		}
		// verify the required parameter 'userCustomAttributesList' is set
		if (userCustomAttributesList === undefined || userCustomAttributesList === null) {
			throw 'Missing the required parameter "userCustomAttributesList" when calling patchUserCustomattributesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/customattributes/bulk', 
			'PATCH', 
			{ 'userId': userId },
			{  },
			{  },
			{  },
			userCustomAttributesList, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Patch a user's Geolocation
	 * The geolocation object can be patched one of three ways. Option 1: Set the primary property to true. This will set the client as the users primary geolocation source.  Option 2: Provide the latitude and longitude values.  This will enqueue an asynchronous update of the city, region, and country, generating a notification. A subsequent GET operation will include the new values for city, region and country.  Option 3:  Provide the city, region, country values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
	 * @param {String} userId user Id
	 * @param {String} clientId client Id
	 * @param {Object} body Geolocation
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserGeolocation(userId, clientId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchUserGeolocation';
		}
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null || clientId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Join or unjoin a queue for a user
	 * 
	 * @param {String} queueId Queue ID
	 * @param {String} userId User ID
	 * @param {Object} body Queue Member
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserQueue(queueId, userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queueId' is set
		if (queueId === undefined || queueId === null || queueId === '') {
			throw 'Missing the required parameter "queueId" when calling patchUserQueue';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Join or unjoin a set of queues for a user
	 * Users can only be joined to queues where they have membership. Non-member user-queue pairs in the request will be disregarded. Note: This operation is processed asynchronously and the response data may not reflect the final state. Changes may take time to propagate. Query the GET endpoint after a delay to retrieve the current membership status.
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body User Queues
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionId Division ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserQueues(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an assigned routing language's proficiency
	 * 
	 * @param {String} userId User ID
	 * @param {String} languageId languageId
	 * @param {Object} body Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserRoutinglanguage(userId, languageId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchUserRoutinglanguage';
		}
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null || languageId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Assign multiple routing languages to a user. Max 50 routing languages in request body
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserRoutinglanguagesBulk(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Assign multiple routing skills to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Skill
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUserRoutingskillsBulk(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update bulk acd autoanswer on users. Max 50 users can be updated at a time.
	 * 
	 * @param {Array.<Object>} body Users
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchUsersBulk(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for user activity observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The desired page size
	 * @param {Number} opts.pageNumber The desired page number
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsUsersActivityQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersActivityQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/activity/query', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
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
	 * Query for user aggregates asynchronously
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postAnalyticsUsersAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postAnalyticsUsersAggregatesJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsUsersAggregatesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/users/aggregates/jobs', 
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
	 * Query for user aggregates
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsUsersAggregatesQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for user details asynchronously
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsUsersDetailsJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for user details
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsUsersDetailsQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query for user observations
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAnalyticsUsersObservationsQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk-grant roles and divisions to a subject.
	 * 
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {Object} body Pairs of role and division IDs
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.subjectType what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT) (default to PC_USER)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAuthorizationSubjectBulkadd(subjectId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null || subjectId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk-remove grants from a subject.
	 * 
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {Object} body Pairs of role and division IDs
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAuthorizationSubjectBulkremove(subjectId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null || subjectId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Replace subject's roles and divisions with the exact list supplied in the request.
	 * This operation will not remove grants that are inherited from group membership. It will only set the grants directly applied to the subject.
	 * @param {String} subjectId Subject ID (user or group)
	 * @param {Object} body Pairs of role and division IDs
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.subjectType what the type of the subject is (PC_GROUP, PC_USER or PC_OAUTH_CLIENT) (default to PC_USER)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAuthorizationSubjectBulkreplace(subjectId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null || subjectId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAuthorizationSubjectDivisionRole(subjectId, divisionId, roleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null || subjectId === '') {
			throw 'Missing the required parameter "subjectId" when calling postAuthorizationSubjectDivisionRole';
		}
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null || divisionId === '') {
			throw 'Missing the required parameter "divisionId" when calling postAuthorizationSubjectDivisionRole';
		}
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null || roleId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create mapping between external identifier and user. Limit 100 per entity.
	 * Authority Name and External key are case sensitive.
	 * @param {String} userId User ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUserExternalid(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postUserExternalid';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUserExternalid';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/externalid', 
			'POST', 
			{ 'userId': userId },
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
	 * Send an activation email to the user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.force Resend the invitation even if one is already outstanding (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUserInvite(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Change a users password
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Password
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUserPassword(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Assign a routing language to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUserRoutinglanguages(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Assign a routing skill to a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Skill
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUserRoutingskills(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create user
	 * If user creation is successful but the provided password is invalid or configuration fails, POST api/v2/users/{userId}/password can be used to re-attempt password configuration.
	 * @param {Object} body User
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUsers(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a schema
	 * 
	 * @param {Object} body Schema
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postUsersCustomattributesSchemas is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postUsersCustomattributesSchemas(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersCustomattributesSchemas';
		}

		return this.apiClient.callApi(
			'/api/v2/users/customattributes/schemas', 
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
	 * Retrieve aggregated development activity data
	 * Results are filtered based on the applicable permissions.
	 * @param {Object} body Aggregate Request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUsersDevelopmentActivitiesAggregatesQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Change your password
	 * 
	 * @param {Object} body Password
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUsersMePassword(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Search users
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUsersSearch(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Search users as conversation targets
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postUsersSearchConversationTarget is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postUsersSearchConversationTarget(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersSearchConversationTarget';
		}

		return this.apiClient.callApi(
			'/api/v2/users/search/conversation/target', 
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
	 * Search manage queue member
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postUsersSearchQueuemembersManage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postUsersSearchQueuemembersManage(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersSearchQueuemembersManage';
		}

		return this.apiClient.callApi(
			'/api/v2/users/search/queuemembers/manage', 
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
	 * Search users assigned to teams
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUsersSearchTeamsAssign(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersSearchTeamsAssign';
		}

		return this.apiClient.callApi(
			'/api/v2/users/search/teams/assign', 
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
	 * Update the user's Direct Routing Backup settings.
	 * 
	 * @param {Object} body directRoutingBackup
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingDirectroutingbackupSettingsMe(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingDirectroutingbackupSettingsMe';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/directroutingbackup/settings/me', 
			'PUT', 
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
	 * Update the user's Direct Routing Backup settings.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body directRoutingBackup
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingUserDirectroutingbackupSettings(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putRoutingUserDirectroutingbackupSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putRoutingUserDirectroutingbackupSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/routing/users/{userId}/directroutingbackup/settings', 
			'PUT', 
			{ 'userId': userId },
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
	 * Update the user's max utilization settings.  Include only those media types requiring custom configuration.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body utilization
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putRoutingUserUtilization(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a user's CallForwarding
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Call forwarding
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserCallforwarding(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create or update a single custom attributes record. Updating replaces all data with the provided fields.
	 * 
	 * @param {String} userId user ID
	 * @param {Object} userCustomAttributes 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * putUserCustomattributes is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putUserCustomattributes(userId, userCustomAttributes, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putUserCustomattributes';
		}
		// verify the required parameter 'userCustomAttributes' is set
		if (userCustomAttributes === undefined || userCustomAttributes === null) {
			throw 'Missing the required parameter "userCustomAttributes" when calling putUserCustomattributes';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/customattributes', 
			'PUT', 
			{ 'userId': userId },
			{  },
			{  },
			{  },
			userCustomAttributes, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an OutOfOffice
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body The updated OutOffOffice
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserOutofoffice(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update profile skills for a user
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<String>} body Skills
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserProfileskills(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Sets the user's roles
	 * 
	 * @param {String} subjectId User ID
	 * @param {Array.<String>} body List of roles
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserRoles(subjectId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'subjectId' is set
		if (subjectId === undefined || subjectId === null || subjectId === '') {
			throw 'Missing the required parameter "subjectId" when calling putUserRoles';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{subjectId}/roles', 
			'PUT', 
			{ 'subjectId': subjectId },
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
	 * Update an assigned routing skill's proficiency
	 * 
	 * @param {String} userId User ID
	 * @param {String} skillId skillId
	 * @param {Object} body Skill
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserRoutingskill(userId, skillId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putUserRoutingskill';
		}
		// verify the required parameter 'skillId' is set
		if (skillId === undefined || skillId === null || skillId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Assign multiple routing skills to a user, replacing any current assignments
	 * 
	 * @param {String} userId User ID
	 * @param {Array.<Object>} body Skill
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserRoutingskillsBulk(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the routing status of a user
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body Routing Status
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserRoutingstatus(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update user state information.
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body User
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserState(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Set associated station
	 * 
	 * @param {String} userId User ID
	 * @param {String} stationId stationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserStationAssociatedstationStationId(userId, stationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putUserStationAssociatedstationStationId';
		}
		// verify the required parameter 'stationId' is set
		if (stationId === undefined || stationId === null || stationId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Set default station
	 * 
	 * @param {String} userId User ID
	 * @param {String} stationId stationId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserStationDefaultstationStationId(userId, stationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putUserStationDefaultstationStationId';
		}
		// verify the required parameter 'stationId' is set
		if (stationId === undefined || stationId === null || stationId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a verifier
	 * 
	 * @param {String} userId User ID
	 * @param {String} verifierId Verifier ID
	 * @param {Object} body Verifier Update
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserVerifier(userId, verifierId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putUserVerifier';
		}
		// verify the required parameter 'verifierId' is set
		if (verifierId === undefined || verifierId === null || verifierId === '') {
			throw 'Missing the required parameter "verifierId" when calling putUserVerifier';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserVerifier';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/verifiers/{verifierId}', 
			'PUT', 
			{ 'userId': userId,'verifierId': verifierId },
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
	 * Update a schema
	 * 
	 * @param {String} schemaId Schema ID
	 * @param {Object} body Data Schema
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * putUsersCustomattributesSchema is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putUsersCustomattributesSchema(schemaId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'schemaId' is set
		if (schemaId === undefined || schemaId === null || schemaId === '') {
			throw 'Missing the required parameter "schemaId" when calling putUsersCustomattributesSchema';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUsersCustomattributesSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/users/customattributes/schemas/{schemaId}', 
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

}


export default UsersApi;
