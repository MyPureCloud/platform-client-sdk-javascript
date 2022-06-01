import ApiClient from '../ApiClient.js';


class OrganizationAuthorizationApi {
	/**
	 * OrganizationAuthorization service.
	 * @module purecloud-platform-client-v2/api/OrganizationAuthorizationApi
	 * @version 138.0.1
	 */

	/**
	 * Constructs a new OrganizationAuthorizationApi. 
	 * @alias module:purecloud-platform-client-v2/api/OrganizationAuthorizationApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete Org Trust
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 */
	deleteOrgauthorizationTrustee(trusteeOrgId) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling deleteOrgauthorizationTrustee';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}', 
			'DELETE', 
			{ 'trusteeOrgId': trusteeOrgId },
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
	 * Deletes cloned user
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Id of the cloned user to delete
	 */
	deleteOrgauthorizationTrusteeCloneduser(trusteeOrgId, trusteeUserId) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling deleteOrgauthorizationTrusteeCloneduser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling deleteOrgauthorizationTrusteeCloneduser';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/clonedusers/{trusteeUserId}', 
			'DELETE', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId },
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
	 * Delete Trustee User
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 */
	deleteOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling deleteOrgauthorizationTrusteeUser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling deleteOrgauthorizationTrusteeUser';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}', 
			'DELETE', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId },
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
	 * Delete Trustee User Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 */
	deleteOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling deleteOrgauthorizationTrusteeUserRoles';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling deleteOrgauthorizationTrusteeUserRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles', 
			'DELETE', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId },
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
	 * Delete Org Trust
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 */
	deleteOrgauthorizationTrustor(trustorOrgId) { 
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling deleteOrgauthorizationTrustor';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}', 
			'DELETE', 
			{ 'trustorOrgId': trustorOrgId },
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
	 * Delete Cloned User
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 */
	deleteOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId) { 
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling deleteOrgauthorizationTrustorCloneduser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling deleteOrgauthorizationTrustorCloneduser';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers/{trusteeUserId}', 
			'DELETE', 
			{ 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId },
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
	 * Delete Trustee User
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 */
	deleteOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId) { 
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling deleteOrgauthorizationTrustorUser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling deleteOrgauthorizationTrustorUser';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}', 
			'DELETE', 
			{ 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId },
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
	 * Get Pairing Info
	 * 
	 * @param {String} pairingId Pairing Id
	 */
	getOrgauthorizationPairing(pairingId) { 
		// verify the required parameter 'pairingId' is set
		if (pairingId === undefined || pairingId === null) {
			throw 'Missing the required parameter "pairingId" when calling getOrgauthorizationPairing';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/pairings/{pairingId}', 
			'GET', 
			{ 'pairingId': pairingId },
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
	 * Get Org Trust
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 */
	getOrgauthorizationTrustee(trusteeOrgId) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling getOrgauthorizationTrustee';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}', 
			'GET', 
			{ 'trusteeOrgId': trusteeOrgId },
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
	 * The list of cloned users from the trustee organization (i.e. users with a native user record).
	 * There can be no more than 5 cloned users per organization, so results are represented as simple list and not paged
	 * @param {String} trusteeOrgId Trustee Organization Id
	 */
	getOrgauthorizationTrusteeClonedusers(trusteeOrgId) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling getOrgauthorizationTrusteeClonedusers';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/clonedusers', 
			'GET', 
			{ 'trusteeOrgId': trusteeOrgId },
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
	 * Get Trustee User
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 */
	getOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling getOrgauthorizationTrusteeUser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling getOrgauthorizationTrusteeUser';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}', 
			'GET', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId },
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
	 * Get Trustee User Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 */
	getOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling getOrgauthorizationTrusteeUserRoles';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling getOrgauthorizationTrusteeUserRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles', 
			'GET', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId },
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
	 * The list of trustee users for this organization (i.e. users granted access to this organization).
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getOrgauthorizationTrusteeUsers(trusteeOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling getOrgauthorizationTrusteeUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/users', 
			'GET', 
			{ 'trusteeOrgId': trusteeOrgId },
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
	 * The list of trustees for this organization (i.e. organizations granted access to this organization).
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getOrgauthorizationTrustees(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees', 
			'GET', 
			{  },
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
	 * Get organization authorization trust with Customer Care, if one exists.
	 * 
	 */
	getOrgauthorizationTrusteesDefault() { 

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/default', 
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
	 * Get Org Trust
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 */
	getOrgauthorizationTrustor(trustorOrgId) { 
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling getOrgauthorizationTrustor';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}', 
			'GET', 
			{ 'trustorOrgId': trustorOrgId },
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
	 * Get Cloned User
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 */
	getOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId) { 
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling getOrgauthorizationTrustorCloneduser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling getOrgauthorizationTrustorCloneduser';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers/{trusteeUserId}', 
			'GET', 
			{ 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId },
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
	 * The list of cloned users in the trustor organization (i.e. users with a native user record).
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 */
	getOrgauthorizationTrustorClonedusers(trustorOrgId) { 
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling getOrgauthorizationTrustorClonedusers';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers', 
			'GET', 
			{ 'trustorOrgId': trustorOrgId },
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
	 * Get Trustee User
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 */
	getOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId) { 
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling getOrgauthorizationTrustorUser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling getOrgauthorizationTrustorUser';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}', 
			'GET', 
			{ 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId },
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
	 * The list of users in the trustor organization (i.e. users granted access).
	 * 
	 * @param {String} trustorOrgId Trustee Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getOrgauthorizationTrustorUsers(trustorOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling getOrgauthorizationTrustorUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/users', 
			'GET', 
			{ 'trustorOrgId': trustorOrgId },
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
	 * The list of organizations that have authorized/trusted your organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getOrgauthorizationTrustors(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors', 
			'GET', 
			{  },
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
	 * A pairing id is created by the trustee and given to the trustor to create a trust.
	 * 
	 * @param {Object} body Pairing Info
	 */
	postOrgauthorizationPairings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOrgauthorizationPairings';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/pairings', 
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
	 * Add a user to the trust.
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {Object} body Trust
	 */
	postOrgauthorizationTrusteeUsers(trusteeOrgId, body) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling postOrgauthorizationTrusteeUsers';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOrgauthorizationTrusteeUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/users', 
			'POST', 
			{ 'trusteeOrgId': trusteeOrgId },
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
	 * Create a new organization authorization trust. This is required to grant other organizations access to your organization.
	 * 
	 * @param {Object} body Trust
	 */
	postOrgauthorizationTrustees(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOrgauthorizationTrustees';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees', 
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
	 * Get Org Trustee Audits
	 * 
	 * @param {Object} body Values to scope the request.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort by (default to timestamp)
	 * @param {String} opts.sortOrder Sort order (default to descending)
	 */
	postOrgauthorizationTrusteesAudits(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOrgauthorizationTrusteesAudits';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/audits', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a new organization authorization trust with Customer Care. This is required to grant your regional Customer Care organization access to your organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.assignDefaultRole Assign Admin role to default pairing with Customer Care
	 * @param {Boolean} opts.autoExpire Automatically expire pairing after 30 days
	 */
	postOrgauthorizationTrusteesDefault(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/default', 
			'POST', 
			{  },
			{ 'assignDefaultRole': opts['assignDefaultRole'],'autoExpire': opts['autoExpire'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get Org Trustor Audits
	 * 
	 * @param {Object} body Values to scope the request.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {String} opts.sortBy Sort by (default to timestamp)
	 * @param {String} opts.sortOrder Sort order (default to descending)
	 */
	postOrgauthorizationTrustorAudits(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOrgauthorizationTrustorAudits';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustor/audits', 
			'POST', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update Org Trust
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {Object} body Client
	 */
	putOrgauthorizationTrustee(trusteeOrgId, body) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling putOrgauthorizationTrustee';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOrgauthorizationTrustee';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}', 
			'PUT', 
			{ 'trusteeOrgId': trusteeOrgId },
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
	 * Update Trustee User Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} body Set of roles with corresponding divisions to apply
	 */
	putOrgauthorizationTrusteeUserRoledivisions(trusteeOrgId, trusteeUserId, body) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling putOrgauthorizationTrusteeUserRoledivisions';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling putOrgauthorizationTrusteeUserRoledivisions';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOrgauthorizationTrusteeUserRoledivisions';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roledivisions', 
			'PUT', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId },
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
	 * Update Trustee User Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Array.<String>} body List of roles
	 */
	putOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId, body) { 
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null) {
			throw 'Missing the required parameter "trusteeOrgId" when calling putOrgauthorizationTrusteeUserRoles';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling putOrgauthorizationTrusteeUserRoles';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOrgauthorizationTrusteeUserRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/users/{trusteeUserId}/roles', 
			'PUT', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeUserId': trusteeUserId },
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
	 * Creates a clone of the trustee user in the trustor org.
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 */
	putOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId) { 
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling putOrgauthorizationTrustorCloneduser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling putOrgauthorizationTrustorCloneduser';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/clonedusers/{trusteeUserId}', 
			'PUT', 
			{ 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId },
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
	 * Add a Trustee user to the trust.
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 */
	putOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId) { 
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null) {
			throw 'Missing the required parameter "trustorOrgId" when calling putOrgauthorizationTrustorUser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null) {
			throw 'Missing the required parameter "trusteeUserId" when calling putOrgauthorizationTrustorUser';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/users/{trusteeUserId}', 
			'PUT', 
			{ 'trustorOrgId': trustorOrgId,'trusteeUserId': trusteeUserId },
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


export default OrganizationAuthorizationApi;