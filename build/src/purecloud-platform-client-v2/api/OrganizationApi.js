import ApiClient from '../ApiClient.js';


class OrganizationApi {
	/**
	 * Organization service.
	 * @module purecloud-platform-client-v2/api/OrganizationApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new OrganizationApi. 
	 * @alias module:purecloud-platform-client-v2/api/OrganizationApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Fetch field config for an entity type
	 * 
	 * @param {Object} type Field type
     	 * @deprecated
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
	 * Get the list of domains that will be allowed to embed PureCloud applications
	 * 
	 */
	getOrganizationsEmbeddedintegration() { 

		return this.apiClient.callApi(
			'/api/v2/organizations/embeddedintegration', 
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
	 * Get organization IP address whitelist settings
	 * 
	 */
	getOrganizationsIpaddressauthentication() { 

		return this.apiClient.callApi(
			'/api/v2/organizations/ipaddressauthentication', 
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
	 * Get a limit change request
	 * 
	 * @param {String} requestId Unique id for the limit change request
	 */
	getOrganizationsLimitsChangerequest(requestId) { 
		// verify the required parameter 'requestId' is set
		if (requestId === undefined || requestId === null) {
			throw 'Missing the required parameter "requestId" when calling getOrganizationsLimitsChangerequest';
		}

		return this.apiClient.callApi(
			'/api/v2/organizations/limits/changerequests/{requestId}', 
			'GET', 
			{ 'requestId': requestId },
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
	 * Get the available limit change requests
	 * Timestamp interval defaults to the last 365 days if both query parameters are omitted. If only one parameter is omitted, the interval will default to a 180 day range in the specified direction.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.after Timestamp indicating the date to begin after when searching for requests.
	 * @param {Number} opts.before Timestamp indicating the date to end before when searching for requests.
	 * @param {Object} opts.status Status of the request to be filtered by
	 * @param {Number} opts.pageSize Page Size (default to 25)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 */
	getOrganizationsLimitsChangerequests(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/organizations/limits/changerequests', 
			'GET', 
			{  },
			{ 'after': opts['after'],'before': opts['before'],'status': opts['status'],'pageSize': opts['pageSize'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a link to the limit documentation
	 * 
	 */
	getOrganizationsLimitsDocs() { 

		return this.apiClient.callApi(
			'/api/v2/organizations/limits/docs', 
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
	 * Get the effective limits in a namespace for an organization
	 * 
	 * @param {String} namespaceName The namespace to fetch limits for
	 */
	getOrganizationsLimitsNamespace(namespaceName) { 
		// verify the required parameter 'namespaceName' is set
		if (namespaceName === undefined || namespaceName === null) {
			throw 'Missing the required parameter "namespaceName" when calling getOrganizationsLimitsNamespace';
		}

		return this.apiClient.callApi(
			'/api/v2/organizations/limits/namespaces/{namespaceName}', 
			'GET', 
			{ 'namespaceName': namespaceName },
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
	 * Get the default limits in a namespace for an organization
	 * 
	 * @param {String} namespaceName The namespace to fetch defaults limits for
	 */
	getOrganizationsLimitsNamespaceDefaults(namespaceName) { 
		// verify the required parameter 'namespaceName' is set
		if (namespaceName === undefined || namespaceName === null) {
			throw 'Missing the required parameter "namespaceName" when calling getOrganizationsLimitsNamespaceDefaults';
		}

		return this.apiClient.callApi(
			'/api/v2/organizations/limits/namespaces/{namespaceName}/defaults', 
			'GET', 
			{ 'namespaceName': namespaceName },
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
	 * Get the available limit namespaces
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 100)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getOrganizationsLimitsNamespaces(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/organizations/limits/namespaces', 
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
	 * Get organization.
	 * 
	 */
	getOrganizationsMe() { 

		return this.apiClient.callApi(
			'/api/v2/organizations/me', 
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
	 * Use PUT /api/v2/organizations/embeddedintegration instead
	 * 
     	 * @deprecated
	 */
	getOrganizationsWhitelist() { 

		return this.apiClient.callApi(
			'/api/v2/organizations/whitelist', 
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
	 * Update organization
	 * 
	 * @param {Object} featureName Organization feature
	 * @param {Object} enabled New state of feature
	 */
	patchOrganizationsFeature(featureName, enabled) { 
		// verify the required parameter 'featureName' is set
		if (featureName === undefined || featureName === null) {
			throw 'Missing the required parameter "featureName" when calling patchOrganizationsFeature';
		}
		// verify the required parameter 'enabled' is set
		if (enabled === undefined || enabled === null) {
			throw 'Missing the required parameter "enabled" when calling patchOrganizationsFeature';
		}

		return this.apiClient.callApi(
			'/api/v2/organizations/features/{featureName}', 
			'PATCH', 
			{ 'featureName': featureName },
			{  },
			{  },
			{  },
			enabled, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update the list of domains that will be allowed to embed PureCloud applications
	 * 
	 * @param {Object} body Whitelist settings
	 */
	putOrganizationsEmbeddedintegration(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOrganizationsEmbeddedintegration';
		}

		return this.apiClient.callApi(
			'/api/v2/organizations/embeddedintegration', 
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
	 * Update organization IP address whitelist settings
	 * 
	 * @param {Object} body IP address Whitelist settings
	 */
	putOrganizationsIpaddressauthentication(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOrganizationsIpaddressauthentication';
		}

		return this.apiClient.callApi(
			'/api/v2/organizations/ipaddressauthentication', 
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
	 * Update organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Organization
	 */
	putOrganizationsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/organizations/me', 
			'PUT', 
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
	 * Use PUT /api/v2/organizations/embeddedintegration instead
	 * 
	 * @param {Object} body Whitelist settings
     	 * @deprecated
	 */
	putOrganizationsWhitelist(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOrganizationsWhitelist';
		}

		return this.apiClient.callApi(
			'/api/v2/organizations/whitelist', 
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

}


export default OrganizationApi;
