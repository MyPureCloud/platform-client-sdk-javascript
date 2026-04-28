import ApiClient from '../ApiClient.js';


class OrganizationAuthorizationApi {
	/**
	 * OrganizationAuthorization service.
	 * @module purecloud-platform-client-v2/api/OrganizationAuthorizationApi
	 * @version 251.2.0
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
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOrgauthorizationTrustee(trusteeOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes cloned user
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Id of the cloned user to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOrgauthorizationTrusteeCloneduser(trusteeOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling deleteOrgauthorizationTrusteeCloneduser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Trustee Group
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeGroupId Trustee Group Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOrgauthorizationTrusteeGroup(trusteeOrgId, trusteeGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling deleteOrgauthorizationTrusteeGroup';
		}
		// verify the required parameter 'trusteeGroupId' is set
		if (trusteeGroupId === undefined || trusteeGroupId === null || trusteeGroupId === '') {
			throw 'Missing the required parameter "trusteeGroupId" when calling deleteOrgauthorizationTrusteeGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}', 
			'DELETE', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeGroupId': trusteeGroupId },
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
	 * Delete Trustee Group Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeGroupId Trustee Group Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOrgauthorizationTrusteeGroupRoles(trusteeOrgId, trusteeGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling deleteOrgauthorizationTrusteeGroupRoles';
		}
		// verify the required parameter 'trusteeGroupId' is set
		if (trusteeGroupId === undefined || trusteeGroupId === null || trusteeGroupId === '') {
			throw 'Missing the required parameter "trusteeGroupId" when calling deleteOrgauthorizationTrusteeGroupRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roles', 
			'DELETE', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeGroupId': trusteeGroupId },
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
	 * Delete Trustee User
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling deleteOrgauthorizationTrusteeUser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Trustee User Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling deleteOrgauthorizationTrusteeUserRoles';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Bulk Org Trustees
	 * 
	 * @param {Array.<String>} id Comma separated list of trustee ids to remove
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteOrgauthorizationTrustees is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteOrgauthorizationTrustees(id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling deleteOrgauthorizationTrustees';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees', 
			'DELETE', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi') },
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
	 * Delete Org Trust
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOrgauthorizationTrustor(trustorOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Cloned User
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
			throw 'Missing the required parameter "trustorOrgId" when calling deleteOrgauthorizationTrustorCloneduser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Trustee Group
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trustorGroupId Trustor Group Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOrgauthorizationTrustorGroup(trustorOrgId, trustorGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
			throw 'Missing the required parameter "trustorOrgId" when calling deleteOrgauthorizationTrustorGroup';
		}
		// verify the required parameter 'trustorGroupId' is set
		if (trustorGroupId === undefined || trustorGroupId === null || trustorGroupId === '') {
			throw 'Missing the required parameter "trustorGroupId" when calling deleteOrgauthorizationTrustorGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/groups/{trustorGroupId}', 
			'DELETE', 
			{ 'trustorOrgId': trustorOrgId,'trustorGroupId': trustorGroupId },
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
	 * Delete Trustee User
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
			throw 'Missing the required parameter "trustorOrgId" when calling deleteOrgauthorizationTrustorUser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete Bulk Org Trustors
	 * 
	 * @param {Array.<String>} id Comma separated list of trustor ids to remove
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteOrgauthorizationTrustors is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteOrgauthorizationTrustors(id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling deleteOrgauthorizationTrustors';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors', 
			'DELETE', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi') },
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
	 * Get Pairing Info
	 * 
	 * @param {String} pairingId Pairing Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationPairing(pairingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'pairingId' is set
		if (pairingId === undefined || pairingId === null || pairingId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Org Trust
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrustee(trusteeOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * The list of cloned users from the trustee organization (i.e. users with a native user record).
	 * There can be no more than 5 cloned users per organization, so results are represented as simple list and not paged
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrusteeClonedusers(trusteeOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Trustee Group
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeGroupId Trustee Group Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrusteeGroup(trusteeOrgId, trusteeGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling getOrgauthorizationTrusteeGroup';
		}
		// verify the required parameter 'trusteeGroupId' is set
		if (trusteeGroupId === undefined || trusteeGroupId === null || trusteeGroupId === '') {
			throw 'Missing the required parameter "trusteeGroupId" when calling getOrgauthorizationTrusteeGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}', 
			'GET', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeGroupId': trusteeGroupId },
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
	 * Get Trustee Group Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeGroupId Trustee Group Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrusteeGroupRoles(trusteeOrgId, trusteeGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling getOrgauthorizationTrusteeGroupRoles';
		}
		// verify the required parameter 'trusteeGroupId' is set
		if (trusteeGroupId === undefined || trusteeGroupId === null || trusteeGroupId === '') {
			throw 'Missing the required parameter "trusteeGroupId" when calling getOrgauthorizationTrusteeGroupRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roles', 
			'GET', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeGroupId': trusteeGroupId },
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
	 * The list of trustee groups for this organization (i.e. groups granted access to this organization).
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrusteeGroups(trusteeOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling getOrgauthorizationTrusteeGroups';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups', 
			'GET', 
			{ 'trusteeOrgId': trusteeOrgId },
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
	 * Get Trustee User
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrusteeUser(trusteeOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling getOrgauthorizationTrusteeUser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Trustee User Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling getOrgauthorizationTrusteeUserRoles';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * The list of trustee users for this organization (i.e. users granted access to this organization).
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrusteeUsers(trusteeOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * The list of trustees for this organization (i.e. organizations granted access to this organization).
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Customer Care organization ids.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrusteesCare(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/care', 
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
	 * Get organization authorization trust with Customer Care, if one exists.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrusteesDefault(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Org Trust
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrustor(trustorOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Cloned User
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
			throw 'Missing the required parameter "trustorOrgId" when calling getOrgauthorizationTrustorCloneduser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * The list of cloned users in the trustor organization (i.e. users with a native user record).
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrustorClonedusers(trustorOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Trustee Group
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trustorGroupId Trustor Group Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrustorGroup(trustorOrgId, trustorGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
			throw 'Missing the required parameter "trustorOrgId" when calling getOrgauthorizationTrustorGroup';
		}
		// verify the required parameter 'trustorGroupId' is set
		if (trustorGroupId === undefined || trustorGroupId === null || trustorGroupId === '') {
			throw 'Missing the required parameter "trustorGroupId" when calling getOrgauthorizationTrustorGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/groups/{trustorGroupId}', 
			'GET', 
			{ 'trustorOrgId': trustorOrgId,'trustorGroupId': trustorGroupId },
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
	 * The list of groups in the trustor organization (i.e. groups granted access).
	 * 
	 * @param {String} trustorOrgId Trustee Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrustorGroups(trustorOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
			throw 'Missing the required parameter "trustorOrgId" when calling getOrgauthorizationTrustorGroups';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/groups', 
			'GET', 
			{ 'trustorOrgId': trustorOrgId },
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
	 * Get Trustee User
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
			throw 'Missing the required parameter "trustorOrgId" when calling getOrgauthorizationTrustorUser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * The list of users in the trustor organization (i.e. users granted access).
	 * 
	 * @param {String} trustorOrgId Trustee Organization Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrgauthorizationTrustorUsers(trustorOrgId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * The list of organizations that have authorized/trusted your organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * A pairing id is created by the trustee and given to the trustor to create a trust.
	 * 
	 * @param {Object} body Pairing Info
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOrgauthorizationPairings(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add a group to the trust.
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {Object} body Trust
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOrgauthorizationTrusteeGroups(trusteeOrgId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling postOrgauthorizationTrusteeGroups';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOrgauthorizationTrusteeGroups';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups', 
			'POST', 
			{ 'trusteeOrgId': trusteeOrgId },
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
	 * Add a user to the trust.
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {Object} body Trust
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOrgauthorizationTrusteeUsers(trusteeOrgId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new organization authorization trust. This is required to grant other organizations access to your organization.
	 * 
	 * @param {Object} body Trust
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOrgauthorizationTrustees(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new organization authorization trust with Customer Care. This is required to grant your regional Customer Care organization access to your organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.assignDefaultRole Assign Admin role to default pairing with Customer Care
	 * @param {Boolean} opts.autoExpire Automatically expire pairing after 30 days
	 * @param {Boolean} opts.assignFullAccess Grant Customer Care full access to the organization
	 * @param {Boolean} opts.allowTrustedUserAccess Make Customer Care a Trusted User
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postOrgauthorizationTrusteesCare(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/care', 
			'POST', 
			{  },
			{ 'assignDefaultRole': opts['assignDefaultRole'],'autoExpire': opts['autoExpire'],'assignFullAccess': opts['assignFullAccess'],'allowTrustedUserAccess': opts['allowTrustedUserAccess'] },
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
	 * Create a new organization authorization trust with Customer Care. This is required to grant your regional Customer Care organization access to your organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.assignDefaultRole Assign Admin role to default pairing with Customer Care
	 * @param {Boolean} opts.autoExpire Automatically expire pairing after 30 days
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update Org Trust
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {Object} body Client
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOrgauthorizationTrustee(trusteeOrgId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update Trustee Group Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeGroupId Trustee Group Id
	 * @param {Object} body Set of roles with corresponding divisions to apply
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOrgauthorizationTrusteeGroupRoledivisions(trusteeOrgId, trusteeGroupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling putOrgauthorizationTrusteeGroupRoledivisions';
		}
		// verify the required parameter 'trusteeGroupId' is set
		if (trusteeGroupId === undefined || trusteeGroupId === null || trusteeGroupId === '') {
			throw 'Missing the required parameter "trusteeGroupId" when calling putOrgauthorizationTrusteeGroupRoledivisions';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOrgauthorizationTrusteeGroupRoledivisions';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roledivisions', 
			'PUT', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeGroupId': trusteeGroupId },
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
	 * Update Trustee Group Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeGroupId Trustee Group Id
	 * @param {Array.<String>} body List of roles
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOrgauthorizationTrusteeGroupRoles(trusteeOrgId, trusteeGroupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling putOrgauthorizationTrusteeGroupRoles';
		}
		// verify the required parameter 'trusteeGroupId' is set
		if (trusteeGroupId === undefined || trusteeGroupId === null || trusteeGroupId === '') {
			throw 'Missing the required parameter "trusteeGroupId" when calling putOrgauthorizationTrusteeGroupRoles';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOrgauthorizationTrusteeGroupRoles';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustees/{trusteeOrgId}/groups/{trusteeGroupId}/roles', 
			'PUT', 
			{ 'trusteeOrgId': trusteeOrgId,'trusteeGroupId': trusteeGroupId },
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
	 * Update Trustee User Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} body Set of roles with corresponding divisions to apply
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOrgauthorizationTrusteeUserRoledivisions(trusteeOrgId, trusteeUserId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling putOrgauthorizationTrusteeUserRoledivisions';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update Trustee User Roles
	 * 
	 * @param {String} trusteeOrgId Trustee Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Array.<String>} body List of roles
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOrgauthorizationTrusteeUserRoles(trusteeOrgId, trusteeUserId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trusteeOrgId' is set
		if (trusteeOrgId === undefined || trusteeOrgId === null || trusteeOrgId === '') {
			throw 'Missing the required parameter "trusteeOrgId" when calling putOrgauthorizationTrusteeUserRoles';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Creates a clone of the trustee user in the trustor org.
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOrgauthorizationTrustorCloneduser(trustorOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
			throw 'Missing the required parameter "trustorOrgId" when calling putOrgauthorizationTrustorCloneduser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add a Trustee Group to the trust.
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trustorGroupId Trustor Group Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOrgauthorizationTrustorGroup(trustorOrgId, trustorGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
			throw 'Missing the required parameter "trustorOrgId" when calling putOrgauthorizationTrustorGroup';
		}
		// verify the required parameter 'trustorGroupId' is set
		if (trustorGroupId === undefined || trustorGroupId === null || trustorGroupId === '') {
			throw 'Missing the required parameter "trustorGroupId" when calling putOrgauthorizationTrustorGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/orgauthorization/trustors/{trustorOrgId}/groups/{trustorGroupId}', 
			'PUT', 
			{ 'trustorOrgId': trustorOrgId,'trustorGroupId': trustorGroupId },
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
	 * Add a Trustee user to the trust.
	 * 
	 * @param {String} trustorOrgId Trustor Organization Id
	 * @param {String} trusteeUserId Trustee User Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putOrgauthorizationTrustorUser(trustorOrgId, trusteeUserId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'trustorOrgId' is set
		if (trustorOrgId === undefined || trustorOrgId === null || trustorOrgId === '') {
			throw 'Missing the required parameter "trustorOrgId" when calling putOrgauthorizationTrustorUser';
		}
		// verify the required parameter 'trusteeUserId' is set
		if (trusteeUserId === undefined || trusteeUserId === null || trusteeUserId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default OrganizationAuthorizationApi;
