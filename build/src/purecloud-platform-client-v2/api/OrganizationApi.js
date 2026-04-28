import ApiClient from '../ApiClient.js';


class OrganizationApi {
	/**
	 * Organization service.
	 * @module purecloud-platform-client-v2/api/OrganizationApi
	 * @version 251.2.0
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
	 * Gets the organization's settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrganizationsAuthenticationSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/organizations/authentication/settings', 
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
	 * Get the list of domains that will be allowed to embed PureCloud applications
	 * This route is deprecated, please use /api/v2/organizations/authentication/settings instead
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getOrganizationsEmbeddedintegration(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get organization IP address whitelist settings
	 * This route is deprecated, please use /api/v2/organizations/authentication/settings instead
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getOrganizationsIpaddressauthentication(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a limit change request
	 * 
	 * @param {String} requestId Unique id for the limit change request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrganizationsLimitsChangerequest(requestId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'requestId' is set
		if (requestId === undefined || requestId === null || requestId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get limit documentation
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrganizationsLimitsDocs(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get free trial limit documentation
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrganizationsLimitsDocsFreetrial(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/organizations/limits/docs/freetrial', 
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
	 * Get the effective limits in a namespace for an organization
	 * 
	 * @param {String} namespaceName The namespace to fetch limits for
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrganizationsLimitsNamespace(namespaceName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'namespaceName' is set
		if (namespaceName === undefined || namespaceName === null || namespaceName === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the default limits in a namespace for an organization
	 * 
	 * @param {String} namespaceName The namespace to fetch defaults limits for
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrganizationsLimitsNamespaceDefaults(namespaceName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'namespaceName' is set
		if (namespaceName === undefined || namespaceName === null || namespaceName === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the available limit namespaces
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 100)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getOrganizationsMe(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * This route is deprecated, please use /api/v2/organizations/authentication/settings instead
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getOrganizationsWhitelist(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the organization's settings
	 * 
	 * @param {Object} body Org settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchOrganizationsAuthenticationSettings(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchOrganizationsAuthenticationSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/organizations/authentication/settings', 
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
	 * Update organization
	 * 
	 * @param {Object} featureName Organization feature
	 * @param {Object} enabled New state of feature
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchOrganizationsFeature(featureName, enabled, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'featureName' is set
		if (featureName === undefined || featureName === null || featureName === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the list of domains that will be allowed to embed PureCloud applications
	 * This route is deprecated, please use /api/v2/organizations/authentication/settings instead
	 * @param {Object} body Whitelist settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	putOrganizationsEmbeddedintegration(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update organization IP address whitelist settings
	 * This route is deprecated, please use /api/v2/organizations/authentication/settings instead
	 * @param {Object} body IP address Whitelist settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	putOrganizationsIpaddressauthentication(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Organization
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * This route is deprecated, please use /api/v2/organizations/authentication/settings instead
	 * 
	 * @param {Object} body Whitelist settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	putOrganizationsWhitelist(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default OrganizationApi;
