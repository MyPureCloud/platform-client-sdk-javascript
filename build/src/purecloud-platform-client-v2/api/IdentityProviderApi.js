import ApiClient from '../ApiClient.js';


class IdentityProviderApi {
	/**
	 * IdentityProvider service.
	 * @module purecloud-platform-client-v2/api/IdentityProviderApi
	 * @version 250.1.0
	 */

	/**
	 * Constructs a new IdentityProviderApi. 
	 * @alias module:purecloud-platform-client-v2/api/IdentityProviderApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete Identity Provider
	 * 
	 * @param {String} providerId Provider ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovider(providerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'providerId' is set
		if (providerId === undefined || providerId === null || providerId === '') {
			throw 'Missing the required parameter "providerId" when calling deleteIdentityprovider';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/{providerId}', 
			'DELETE', 
			{ 'providerId': providerId },
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
	 * Delete ADFS Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersAdfs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/adfs', 
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
	 * Delete Customer Interaction Center (CIC) Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersCic(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/cic', 
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
	 * Delete Generic SAML Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersGeneric(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/generic', 
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
	 * Delete G Suite Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersGsuite(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/gsuite', 
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
	 * Delete IdentityNow Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersIdentitynow(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/identitynow', 
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
	 * Delete Okta Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersOkta(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/okta', 
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
	 * Delete OneLogin Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersOnelogin(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/onelogin', 
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
	 * Delete Ping Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersPing(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/ping', 
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
	 * Delete PureCloud Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersPurecloud(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/purecloud', 
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
	 * Delete PureEngage Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersPureengage(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/pureengage', 
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
	 * Delete Salesforce Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteIdentityprovidersSalesforce(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/salesforce', 
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
	 * Get Identity Provider
	 * 
	 * @param {String} providerId Provider ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovider(providerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'providerId' is set
		if (providerId === undefined || providerId === null || providerId === '') {
			throw 'Missing the required parameter "providerId" when calling getIdentityprovider';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/{providerId}', 
			'GET', 
			{ 'providerId': providerId },
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
	 * The list of identity providers
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityproviders(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders', 
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
	 * Get ADFS Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersAdfs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/adfs', 
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
	 * Get Customer Interaction Center (CIC) Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersCic(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/cic', 
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
	 * Get Generic SAML Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersGeneric(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/generic', 
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
	 * Get G Suite Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersGsuite(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/gsuite', 
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
	 * Get IdentityNow Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersIdentitynow(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/identitynow', 
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
	 * Get Okta Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersOkta(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/okta', 
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
	 * Get OneLogin Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersOnelogin(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/onelogin', 
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
	 * Get Ping Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersPing(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/ping', 
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
	 * Get PureCloud Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersPurecloud(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/purecloud', 
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
	 * Get PureEngage Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersPureengage(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/pureengage', 
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
	 * Get Salesforce Identity Provider
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIdentityprovidersSalesforce(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/identityproviders/salesforce', 
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
	 * Create Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postIdentityproviders(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIdentityproviders';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders', 
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
	 * Update Identity Provider
	 * 
	 * @param {String} providerId Provider ID
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovider(providerId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'providerId' is set
		if (providerId === undefined || providerId === null || providerId === '') {
			throw 'Missing the required parameter "providerId" when calling putIdentityprovider';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovider';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/{providerId}', 
			'PUT', 
			{ 'providerId': providerId },
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
	 * Update/Create ADFS Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersAdfs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersAdfs';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/adfs', 
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
	 * Update/Create Customer Interaction Center (CIC) Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersCic(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersCic';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/cic', 
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
	 * Update/Create Generic SAML Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersGeneric(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersGeneric';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/generic', 
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
	 * Update/Create G Suite Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersGsuite(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersGsuite';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/gsuite', 
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
	 * Update/Create IdentityNow Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersIdentitynow(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersIdentitynow';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/identitynow', 
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
	 * Update/Create Okta Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersOkta(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersOkta';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/okta', 
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
	 * Update/Create OneLogin Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersOnelogin(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersOnelogin';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/onelogin', 
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
	 * Update/Create Ping Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersPing(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersPing';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/ping', 
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
	 * Update/Create PureCloud Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersPurecloud(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersPurecloud';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/purecloud', 
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
	 * Update/Create PureEngage Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersPureengage(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersPureengage';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/pureengage', 
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
	 * Update/Create Salesforce Identity Provider
	 * 
	 * @param {Object} body Provider
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putIdentityprovidersSalesforce(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIdentityprovidersSalesforce';
		}

		return this.apiClient.callApi(
			'/api/v2/identityproviders/salesforce', 
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


export default IdentityProviderApi;
