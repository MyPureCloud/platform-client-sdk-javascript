import ApiClient from '../ApiClient.js';


class AuthorizationApi {
	/**
	 * Authorization service.
	 * @module purecloud-platform-client-v2/api/AuthorizationApi
	 * @version 34.0.3
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
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Removes all the roles from the user.
	 * 
	 * @param {String} userId User ID
	 */
	deleteUserRoles(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteUserRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/roles', 
			'DELETE', 
			{ 'userId': userId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud Auth'], 
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
	 */
	getAuthorizationPermissions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/authorization/permissions', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a single organization role.
	 * Get the organization role specified by its ID.
	 * @param {String} roleId Role ID
	 */
	getAuthorizationRole(roleId) { 
		// verify the required parameter 'roleId' is set
		if (roleId === undefined || roleId === null) {
			throw 'Missing the required parameter "roleId" when calling getAuthorizationRole';
		}

		return this.apiClient.callApi(
			'/api/v2/authorization/roles/{roleId}', 
			'GET', 
			{ 'roleId': roleId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get an org role to default role comparison comparison
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
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
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default AuthorizationApi;