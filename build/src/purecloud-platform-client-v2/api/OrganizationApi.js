import ApiClient from '../ApiClient.js';


class OrganizationApi {
	/**
	 * Organization service.
	 * @module purecloud-platform-client-v2/api/OrganizationApi
	 * @version 77.0.0
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