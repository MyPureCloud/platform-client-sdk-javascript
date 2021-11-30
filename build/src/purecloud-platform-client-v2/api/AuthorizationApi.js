import ApiClient from '../ApiClient.js';


class AuthorizationApi {
	/**
	 * Authorization service.
	 * @module purecloud-platform-client-v2/api/AuthorizationApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new AuthorizationApi. 
	 * @alias module:purecloud-platform-client-v2/api/AuthorizationApi
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
	 * Delete an organization role.
	 * 
	 * @param {String} roleId Role ID
	 */
	deleteAuthorizationRole(roleId) { 
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling deleteAuthorizationRole';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{roleId}', 
			'DELETE', 
			{ 'roleId': roleId }, 
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
	 * Gets all grants for a given division.
	 * Returns all grants assigned to a given division. Maximum page size is 500.
	 * @param {String} divisionId Division ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getAuthorizationDivisionGrants(divisionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'divisionId' is set
		if (divisionId === undefined || divisionId === null) {
			throw 'Missing the required parameter "divisionId" when calling getAuthorizationDivisionGrants';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/divisions/{divisionId}/grants', 
			'GET', 
			{ 'divisionId': divisionId }, 
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
	 * Get all permissions.
	 * Retrieve a list of all permission defined in the system.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.queryType Query filter type
	 * @param {String} opts.query Comma-separated list of permissions or domains to query
	 */
	getAuthorizationPermissions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/authorization/permissions', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'queryType': opts['queryType'],'query': opts['query'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of enabled products
	 * Gets the list of enabled products. Some example product names are: collaborateFree, collaboratePro, communicate, and engage.
	 */
	getAuthorizationProducts() { 

		return this.apiClient.callApi(
			'/api/v2/authorization/products', 
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
	 * Get a single organization role.
	 * Get the organization role specified by its ID.
	 * @param {String} roleId Role ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand. \&quot;unusedPermissions\&quot; returns the permissions not used for the role
	 */
	getAuthorizationRole(roleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling getAuthorizationRole';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{roleId}', 
			'GET', 
			{ 'roleId': roleId }, 
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
	 * Get an org role to default role comparison
	 * Compares any organization role to a default role id and show differences
	 * @param {String} leftRoleId Left Role ID
	 * @param {String} rightRoleId Right Role id
	 */
	getAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId) { 
		// verify the required parameter 'leftRoleId' is set
		if (leftRoleId === undefined || leftRoleId === null) {
			throw 'Missing the required parameter "leftRoleId" when calling getAuthorizationRoleComparedefaultRightRoleId';
		}
		// verify the required parameter 'rightRoleId' is set
		if (rightRoleId === undefined || rightRoleId === null) {
			throw 'Missing the required parameter "rightRoleId" when calling getAuthorizationRoleComparedefaultRightRoleId';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}', 
			'GET', 
			{ 'leftRoleId': leftRoleId,'rightRoleId': rightRoleId }, 
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
	 * Get the subjects&#39; granted divisions in the specified role.
	 * Includes the divisions for which the subject has a grant.
	 * @param {String} roleId Role ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 */
	getAuthorizationRoleSubjectgrants(roleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling getAuthorizationRoleSubjectgrants';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{roleId}/subjectgrants', 
			'GET', 
			{ 'roleId': roleId }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of the users in a specified role.
	 * Get an array of the UUIDs of the users in the specified role.
	 * @param {String} roleId Role ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getAuthorizationRoleUsers(roleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling getAuthorizationRoleUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{roleId}/users', 
			'GET', 
			{ 'roleId': roleId }, 
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
	 * Retrieve a list of all roles defined for the organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.name 
	 * @param {Array.<String>} opts.permission 
	 * @param {Array.<String>} opts.defaultRoleId 
	 * @param {Boolean} opts.userCount  (default to true)
	 * @param {Array.<String>} opts.id id
	 */
	getAuthorizationRoles(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/authorization/roles', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'name': opts['name'],'permission': this.apiClient.buildCollectionParam(opts['permission'], 'multi'),'defaultRoleId': this.apiClient.buildCollectionParam(opts['defaultRoleId'], 'multi'),'userCount': opts['userCount'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') }, 
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
	 * Get the count of roles granted to a list of subjects
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.id id
	 */
	getAuthorizationSubjectsRolecounts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/authorization/subjects/rolecounts', 
			'GET', 
			{  }, 
			{ 'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') }, 
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
	 * Patch Organization Role for needsUpdate Field
	 * Patch Organization Role for needsUpdate Field
	 * @param {String} roleId Role ID
	 * @param {Object} body Organization role
	 */
	patchAuthorizationRole(roleId, body) { 
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling patchAuthorizationRole';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAuthorizationRole';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{roleId}', 
			'PATCH', 
			{ 'roleId': roleId }, 
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
	 * Bulk-grant subjects and divisions with an organization role.
	 * 
	 * @param {String} roleId Role ID
	 * @param {Object} body Subjects and Divisions
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.subjectType what the type of the subjects are (PC_GROUP, PC_USER or PC_OAUTH_CLIENT) (default to PC_USER)
	 */
	postAuthorizationRole(roleId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling postAuthorizationRole';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuthorizationRole';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{roleId}', 
			'POST', 
			{ 'roleId': roleId }, 
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
	 * Get an unsaved org role to default role comparison
	 * Allows users to compare their existing roles in an unsaved state to its default role
	 * @param {String} leftRoleId Left Role ID
	 * @param {String} rightRoleId Right Role id
	 * @param {Object} body Organization role
	 */
	postAuthorizationRoleComparedefaultRightRoleId(leftRoleId, rightRoleId, body) { 
		// verify the required parameter 'leftRoleId' is set
		if (leftRoleId === undefined || leftRoleId === null) {
			throw 'Missing the required parameter "leftRoleId" when calling postAuthorizationRoleComparedefaultRightRoleId';
		}
		// verify the required parameter 'rightRoleId' is set
		if (rightRoleId === undefined || rightRoleId === null) {
			throw 'Missing the required parameter "rightRoleId" when calling postAuthorizationRoleComparedefaultRightRoleId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuthorizationRoleComparedefaultRightRoleId';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{leftRoleId}/comparedefault/{rightRoleId}', 
			'POST', 
			{ 'leftRoleId': leftRoleId,'rightRoleId': rightRoleId }, 
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
	 * Create an organization role.
	 * 
	 * @param {Object} body Organization role
	 */
	postAuthorizationRoles(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuthorizationRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles', 
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
	 * Restores all default roles
	 * This endpoint serves several purposes. 1. It provides the org with default roles. This is important for default roles that will be added after go-live (they can retroactively add the new default-role). Note: When not using a query param of force=true, it only adds the default roles not configured for the org; it does not overwrite roles. 2. Using the query param force=true, you can restore all default roles. Note: This does not have an effect on custom roles.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.force Restore default roles (default to false)
	 */
	postAuthorizationRolesDefault(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/default', 
			'POST', 
			{  }, 
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

	/**
	 * Update an organization role.
	 * Update
	 * @param {String} roleId Role ID
	 * @param {Object} body Organization role
	 */
	putAuthorizationRole(roleId, body) { 
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling putAuthorizationRole';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAuthorizationRole';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{roleId}', 
			'PUT', 
			{ 'roleId': roleId }, 
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
	 * Sets the users for the role
	 * 
	 * @param {String} roleId Role ID
	 * @param {Array.<Object>} body List of user IDs
	 */
	putAuthorizationRoleUsersAdd(roleId, body) { 
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling putAuthorizationRoleUsersAdd';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAuthorizationRoleUsersAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{roleId}/users/add', 
			'PUT', 
			{ 'roleId': roleId }, 
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
	 * Removes the users from the role
	 * 
	 * @param {String} roleId Role ID
	 * @param {Array.<Object>} body List of user IDs
	 */
	putAuthorizationRoleUsersRemove(roleId, body) { 
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling putAuthorizationRoleUsersRemove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAuthorizationRoleUsersRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{roleId}/users/remove', 
			'PUT', 
			{ 'roleId': roleId }, 
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
	 * Restore specified default roles
	 * 
	 * @param {Array.<Object>} body Organization roles list
	 */
	putAuthorizationRolesDefault(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAuthorizationRolesDefault';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/default', 
			'PUT', 
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

}


export default AuthorizationApi;