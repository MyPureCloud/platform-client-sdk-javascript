import ApiClient from '../ApiClient.js';


class OnboardingApi {
	/**
	 * Onboarding service.
	 * @module purecloud-platform-client-v2/api/OnboardingApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new OnboardingApi. 
	 * @alias module:purecloud-platform-client-v2/api/OnboardingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete an invite
	 * 
	 * @param {String} inviteId inviteId
	 */
	deleteOnboardingInvite(inviteId) { 
		// verify the required parameter 'inviteId' is set
		if (inviteId === undefined || inviteId === null) {
			throw 'Missing the required parameter "inviteId" when calling deleteOnboardingInvite';
		}

		return this.apiClient.callApi(
			'/api/v2/onboarding/invites/{inviteId}', 
			'DELETE', 
			{ 'inviteId': inviteId },
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
	 * Delete a join code
	 * 
	 * @param {String} joinCodeId joinCodeId
	 */
	deleteOnboardingJoincode(joinCodeId) { 
		// verify the required parameter 'joinCodeId' is set
		if (joinCodeId === undefined || joinCodeId === null) {
			throw 'Missing the required parameter "joinCodeId" when calling deleteOnboardingJoincode';
		}

		return this.apiClient.callApi(
			'/api/v2/onboarding/joincodes/{joinCodeId}', 
			'DELETE', 
			{ 'joinCodeId': joinCodeId },
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
	 * Get org billing activation
	 * 
	 * @param {String} activationId activationId
	 */
	getOnboardingActivation(activationId) { 
		// verify the required parameter 'activationId' is set
		if (activationId === undefined || activationId === null) {
			throw 'Missing the required parameter "activationId" when calling getOnboardingActivation';
		}

		return this.apiClient.callApi(
			'/api/v2/onboarding/activations/{activationId}', 
			'GET', 
			{ 'activationId': activationId },
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
	 * Get invite
	 * 
	 * @param {String} inviteId inviteId
	 */
	getOnboardingInvite(inviteId) { 
		// verify the required parameter 'inviteId' is set
		if (inviteId === undefined || inviteId === null) {
			throw 'Missing the required parameter "inviteId" when calling getOnboardingInvite';
		}

		return this.apiClient.callApi(
			'/api/v2/onboarding/invites/{inviteId}', 
			'GET', 
			{ 'inviteId': inviteId },
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
	 * Get all invites for org
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber  (default to 1)
	 * @param {Number} opts.pageSize  (default to 25)
	 */
	getOnboardingInvites(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/onboarding/invites', 
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
	 * Get join code
	 * 
	 * @param {String} joinCodeId joinCodeId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.emailDomain Email Domain
	 */
	getOnboardingJoincode(joinCodeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'joinCodeId' is set
		if (joinCodeId === undefined || joinCodeId === null) {
			throw 'Missing the required parameter "joinCodeId" when calling getOnboardingJoincode';
		}

		return this.apiClient.callApi(
			'/api/v2/onboarding/joincodes/{joinCodeId}', 
			'GET', 
			{ 'joinCodeId': joinCodeId },
			{ 'emailDomain': opts['emailDomain'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all join codes for org
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber  (default to 1)
	 * @param {Number} opts.pageSize  (default to 25)
	 */
	getOnboardingJoincodes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/onboarding/joincodes', 
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
	 * Get org provisioning
	 * 
	 * @param {String} provisioningId provisioningId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.existingOrganizationId Existing Organization Id
	 * @param {Boolean} opts.billingActivationJob Is a Billing activation job request
	 */
	getOnboardingOrgprovisioning(provisioningId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'provisioningId' is set
		if (provisioningId === undefined || provisioningId === null) {
			throw 'Missing the required parameter "provisioningId" when calling getOnboardingOrgprovisioning';
		}

		return this.apiClient.callApi(
			'/api/v2/onboarding/orgprovisionings/{provisioningId}', 
			'GET', 
			{ 'provisioningId': provisioningId },
			{ 'existingOrganizationId': opts['existingOrganizationId'],'billingActivationJob': opts['billingActivationJob'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Verify a user exists
	 * Returns a 200 OK if user exists, and a 404 Not Found if it doesnt
	 * @param {String} organizationId organizationId
	 * @param {String} email User email
	 */
	headOnboardingOrganizationUsers(organizationId, email) { 
		// verify the required parameter 'organizationId' is set
		if (organizationId === undefined || organizationId === null) {
			throw 'Missing the required parameter "organizationId" when calling headOnboardingOrganizationUsers';
		}
		// verify the required parameter 'email' is set
		if (email === undefined || email === null) {
			throw 'Missing the required parameter "email" when calling headOnboardingOrganizationUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/onboarding/organizations/{organizationId}/users', 
			'HEAD', 
			{ 'organizationId': organizationId },
			{ 'email': email },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Apply org billing activation
	 * 
	 * @param {String} activationId activationId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to complete org billing activation process
	 */
	postOnboardingActivationApply(activationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'activationId' is set
		if (activationId === undefined || activationId === null) {
			throw 'Missing the required parameter "activationId" when calling postOnboardingActivationApply';
		}

		return this.apiClient.callApi(
			'/api/v2/onboarding/activations/{activationId}/apply', 
			'POST', 
			{ 'activationId': activationId },
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
	 * Create a join code
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to create a join code
	 */
	postOnboardingJoincodes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/onboarding/joincodes', 
			'POST', 
			{  },
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
	 * Complete org provisioning process
	 * 
	 * @param {String} provisioningId provisioningId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to complete org provisioning process
	 */
	postOnboardingOrgprovisioningComplete(provisioningId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'provisioningId' is set
		if (provisioningId === undefined || provisioningId === null) {
			throw 'Missing the required parameter "provisioningId" when calling postOnboardingOrgprovisioningComplete';
		}

		return this.apiClient.callApi(
			'/api/v2/onboarding/orgprovisionings/{provisioningId}/complete', 
			'POST', 
			{ 'provisioningId': provisioningId },
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
	 * Stage org provisioning for org creation
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to stage an org
	 */
	postOnboardingOrgprovisionings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/onboarding/orgprovisionings', 
			'POST', 
			{  },
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
	 * Create user in organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to create a user
	 */
	postOnboardingUsers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/onboarding/users', 
			'POST', 
			{  },
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
	 * Allows user to join organization or multiple organizations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to have a user join an org or orgs
	 */
	postOnboardingUsersJoinexistingorgs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/onboarding/users/joinexistingorgs', 
			'POST', 
			{  },
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
	 * Prepare user for creation
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to stage a user
	 */
	postOnboardingUsersStage(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/onboarding/users/stage', 
			'POST', 
			{  },
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
	 * Update a join code
	 * 
	 * @param {String} joinCodeId joinCodeId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Input used to update a join code
	 */
	putOnboardingJoincode(joinCodeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'joinCodeId' is set
		if (joinCodeId === undefined || joinCodeId === null) {
			throw 'Missing the required parameter "joinCodeId" when calling putOnboardingJoincode';
		}

		return this.apiClient.callApi(
			'/api/v2/onboarding/joincodes/{joinCodeId}', 
			'PUT', 
			{ 'joinCodeId': joinCodeId },
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


export default OnboardingApi;
