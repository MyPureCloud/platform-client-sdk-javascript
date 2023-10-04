import ApiClient from '../ApiClient.js';


class TestAutomationApi {
	/**
	 * TestAutomation service.
	 * @module purecloud-platform-client-v2/api/TestAutomationApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new TestAutomationApi. 
	 * @alias module:purecloud-platform-client-v2/api/TestAutomationApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * delete a TIM environment
	 * 
	 * @param {String} environmentName environmentName
	 */
	deleteTestautomationExistingresourcesEnvironment(environmentName) { 
		// verify the required parameter 'environmentName' is set
		if (environmentName === undefined || environmentName === null) {
			throw 'Missing the required parameter "environmentName" when calling deleteTestautomationExistingresourcesEnvironment';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/environments/{environmentName}', 
			'DELETE', 
			{ 'environmentName': environmentName },
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
	 * remove a user from the TIM service
	 * 
	 * @param {String} environmentName environmentName
	 * @param {String} userId userId
	 */
	deleteTestautomationExistingresourcesEnvironmentUser(environmentName, userId) { 
		// verify the required parameter 'environmentName' is set
		if (environmentName === undefined || environmentName === null) {
			throw 'Missing the required parameter "environmentName" when calling deleteTestautomationExistingresourcesEnvironmentUser';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteTestautomationExistingresourcesEnvironmentUser';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/environments/{environmentName}/users/{userId}', 
			'DELETE', 
			{ 'environmentName': environmentName,'userId': userId },
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
	 * delete a TIM organization
	 * 
	 * @param {String} organizationId organizationId
	 */
	deleteTestautomationExistingresourcesOrganization(organizationId) { 
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling deleteTestautomationExistingresourcesOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/organizations/{organizationId}', 
			'DELETE', 
			{ 'organizationId': organizationId },
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
	 * get TIM environment by its environment name
	 * 
	 * @param {String} environmentName environmentName
	 */
	getTestautomationExistingresourcesEnvironment(environmentName) { 
		// verify the required parameter 'environmentName' is set
		if (environmentName === undefined || environmentName === null) {
			throw 'Missing the required parameter "environmentName" when calling getTestautomationExistingresourcesEnvironment';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/environments/{environmentName}', 
			'GET', 
			{ 'environmentName': environmentName },
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
	 * get a TIM user by their environment
	 * 
	 * @param {String} environmentName environmentName
	 * @param {String} userId userId
	 */
	getTestautomationExistingresourcesEnvironmentUser(environmentName, userId) { 
		// verify the required parameter 'environmentName' is set
		if (environmentName === undefined || environmentName === null) {
			throw 'Missing the required parameter "environmentName" when calling getTestautomationExistingresourcesEnvironmentUser';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getTestautomationExistingresourcesEnvironmentUser';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/environments/{environmentName}/users/{userId}', 
			'GET', 
			{ 'environmentName': environmentName,'userId': userId },
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
	 * get TIM users by their environment and inuse or quarantined status
	 * 
	 * @param {String} environmentName environmentName
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.page Page number (default to 1)
	 * @param {String} opts.status user's status
	 */
	getTestautomationExistingresourcesEnvironmentUsers(environmentName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'environmentName' is set
		if (environmentName === undefined || environmentName === null) {
			throw 'Missing the required parameter "environmentName" when calling getTestautomationExistingresourcesEnvironmentUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/environments/{environmentName}/users', 
			'GET', 
			{ 'environmentName': environmentName },
			{ 'pageSize': opts['pageSize'],'page': opts['page'],'status': opts['status'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * get all the TIM environments
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.page Page number (default to 1)
	 */
	getTestautomationExistingresourcesEnvironments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/environments', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'page': opts['page'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * get a TIM OAuth Client by its environment
	 * 
	 * @param {String} environmentName environmentName
	 */
	getTestautomationExistingresourcesOauthclient(environmentName) { 
		// verify the required parameter 'environmentName' is set
		if (environmentName === undefined || environmentName === null) {
			throw 'Missing the required parameter "environmentName" when calling getTestautomationExistingresourcesOauthclient';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/oauthclients/{environmentName}', 
			'GET', 
			{ 'environmentName': environmentName },
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
	 * get all the TIM OAuth Clients
	 * 
	 * @param {String} environmentName environmentName
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.page Page number (default to 1)
	 */
	getTestautomationExistingresourcesOauthclients(environmentName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'environmentName' is set
		if (environmentName === undefined || environmentName === null) {
			throw 'Missing the required parameter "environmentName" when calling getTestautomationExistingresourcesOauthclients';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/oauthclients', 
			'GET', 
			{ 'environmentName': environmentName },
			{ 'pageSize': opts['pageSize'],'page': opts['page'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * get a TIM org by its environment
	 * 
	 * @param {String} organizationId organizationId
	 */
	getTestautomationExistingresourcesOrganization(organizationId) { 
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling getTestautomationExistingresourcesOrganization';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/organizations/{organizationId}', 
			'GET', 
			{ 'organizationId': organizationId },
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
	 * get TIM users by their organization and inuse or quarantined status
	 * 
	 * @param {String} organizationId organizationId
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.page Page number (default to 1)
	 * @param {String} opts.status user's status
	 */
	getTestautomationExistingresourcesOrganizationUsers(organizationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling getTestautomationExistingresourcesOrganizationUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/organizations/{organizationId}/users', 
			'GET', 
			{ 'organizationId': organizationId },
			{ 'pageSize': opts['pageSize'],'page': opts['page'],'status': opts['status'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * get all the TIM orgs
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.page Page number (default to 1)
	 */
	getTestautomationExistingresourcesOrganizations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/organizations', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'page': opts['page'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * update a TIM environment
	 * 
	 * @param {String} environmentName environmentName
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Environment
	 */
	patchTestautomationExistingresourcesEnvironment(environmentName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'environmentName' is set
		if (environmentName === undefined || environmentName === null) {
			throw 'Missing the required parameter "environmentName" when calling patchTestautomationExistingresourcesEnvironment';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/environments/{environmentName}', 
			'PATCH', 
			{ 'environmentName': environmentName },
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
	 * add a new user to the TIM service
	 * 
	 * @param {String} environmentName environmentName
	 * @param {Object} body staticUser
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.setAsInUse new user is immediately marked as in use
	 * @param {String} opts.sessionTimeoutInSeconds new user is given an in use session timeout value
	 */
	postTestautomationExistingresourcesEnvironmentUsers(environmentName, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'environmentName' is set
		if (environmentName === undefined || environmentName === null) {
			throw 'Missing the required parameter "environmentName" when calling postTestautomationExistingresourcesEnvironmentUsers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTestautomationExistingresourcesEnvironmentUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/environments/{environmentName}/users', 
			'POST', 
			{ 'environmentName': environmentName },
			{ 'setAsInUse': opts['setAsInUse'],'sessionTimeoutInSeconds': opts['sessionTimeoutInSeconds'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * add a new environment to the TIM service
	 * 
	 * @param {Object} body staticEnvironment
	 */
	postTestautomationExistingresourcesEnvironments(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTestautomationExistingresourcesEnvironments';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/environments', 
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
	 * add a new user to the TIM service
	 * 
	 * @param {String} organizationId organizationId
	 * @param {Object} body staticUser
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.setAsInUse new user is immediately marked as in use
	 * @param {String} opts.sessionTimeoutInSeconds new user is given a session timeout value
	 */
	postTestautomationExistingresourcesOrganizationUsers(organizationId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling postTestautomationExistingresourcesOrganizationUsers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTestautomationExistingresourcesOrganizationUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/organizations/{organizationId}/users', 
			'POST', 
			{ 'organizationId': organizationId },
			{ 'setAsInUse': opts['setAsInUse'],'sessionTimeoutInSeconds': opts['sessionTimeoutInSeconds'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * add a new org to the TIM service
	 * 
	 * @param {Object} body staticOrg
	 */
	postTestautomationExistingresourcesOrganizations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTestautomationExistingresourcesOrganizations';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/organizations', 
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
	 * check users back into the TIM service
	 * 
	 * @param {Object} body checkinUsers
	 */
	postTestautomationExistingresourcesUsersCheckin(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTestautomationExistingresourcesUsersCheckin';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/users/checkin', 
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
	 * check a user out from the TIM service
	 * 
	 * @param {Object} body checkoutUser
	 */
	postTestautomationExistingresourcesUsersCheckout(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTestautomationExistingresourcesUsersCheckout';
		}

		return this.apiClient.callApi(
			'/api/v2/testautomation/existingresources/users/checkout', 
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

}


export default TestAutomationApi;
