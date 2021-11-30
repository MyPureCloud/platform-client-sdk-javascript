import ApiClient from '../ApiClient.js';


class IdentityProviderApi {
	/**
	 * IdentityProvider service.
	 * @module purecloud-platform-client-v2/api/IdentityProviderApi
	 * @version 126.1.0
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
	 * Delete ADFS Identity Provider
	 * 
	 */
	deleteIdentityprovidersAdfs() { 

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
			['application/json']
		);
	}

	/**
	 * Delete Customer Interaction Center (CIC) Identity Provider
	 * 
	 */
	deleteIdentityprovidersCic() { 

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
			['application/json']
		);
	}

	/**
	 * Delete Generic SAML Identity Provider
	 * 
	 */
	deleteIdentityprovidersGeneric() { 

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
			['application/json']
		);
	}

	/**
	 * Delete G Suite Identity Provider
	 * 
	 */
	deleteIdentityprovidersGsuite() { 

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
			['application/json']
		);
	}

	/**
	 * Delete IdentityNow Provider
	 * 
	 */
	deleteIdentityprovidersIdentitynow() { 

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
			['application/json']
		);
	}

	/**
	 * Delete Okta Identity Provider
	 * 
	 */
	deleteIdentityprovidersOkta() { 

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
			['application/json']
		);
	}

	/**
	 * Delete OneLogin Identity Provider
	 * 
	 */
	deleteIdentityprovidersOnelogin() { 

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
			['application/json']
		);
	}

	/**
	 * Delete Ping Identity Provider
	 * 
	 */
	deleteIdentityprovidersPing() { 

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
			['application/json']
		);
	}

	/**
	 * Delete PureCloud Identity Provider
	 * 
	 */
	deleteIdentityprovidersPurecloud() { 

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
			['application/json']
		);
	}

	/**
	 * Delete PureEngage Identity Provider
	 * 
	 */
	deleteIdentityprovidersPureengage() { 

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
			['application/json']
		);
	}

	/**
	 * Delete Salesforce Identity Provider
	 * 
	 */
	deleteIdentityprovidersSalesforce() { 

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
			['application/json']
		);
	}

	/**
	 * The list of identity providers
	 * 
	 */
	getIdentityproviders() { 

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
			['application/json']
		);
	}

	/**
	 * Get ADFS Identity Provider
	 * 
	 */
	getIdentityprovidersAdfs() { 

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
			['application/json']
		);
	}

	/**
	 * Get Customer Interaction Center (CIC) Identity Provider
	 * 
	 */
	getIdentityprovidersCic() { 

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
			['application/json']
		);
	}

	/**
	 * Get Generic SAML Identity Provider
	 * 
	 */
	getIdentityprovidersGeneric() { 

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
			['application/json']
		);
	}

	/**
	 * Get G Suite Identity Provider
	 * 
	 */
	getIdentityprovidersGsuite() { 

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
			['application/json']
		);
	}

	/**
	 * Get IdentityNow Provider
	 * 
	 */
	getIdentityprovidersIdentitynow() { 

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
			['application/json']
		);
	}

	/**
	 * Get Okta Identity Provider
	 * 
	 */
	getIdentityprovidersOkta() { 

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
			['application/json']
		);
	}

	/**
	 * Get OneLogin Identity Provider
	 * 
	 */
	getIdentityprovidersOnelogin() { 

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
			['application/json']
		);
	}

	/**
	 * Get Ping Identity Provider
	 * 
	 */
	getIdentityprovidersPing() { 

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
			['application/json']
		);
	}

	/**
	 * Get PureCloud Identity Provider
	 * 
	 */
	getIdentityprovidersPurecloud() { 

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
			['application/json']
		);
	}

	/**
	 * Get PureEngage Identity Provider
	 * 
	 */
	getIdentityprovidersPureengage() { 

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
			['application/json']
		);
	}

	/**
	 * Get Salesforce Identity Provider
	 * 
	 */
	getIdentityprovidersSalesforce() { 

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
			['application/json']
		);
	}

	/**
	 * Update/Create ADFS Identity Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersAdfs(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update/Create Customer Interaction Center (CIC) Identity Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersCic(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update/Create Generic SAML Identity Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersGeneric(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update/Create G Suite Identity Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersGsuite(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update/Create IdentityNow Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersIdentitynow(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update/Create Okta Identity Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersOkta(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update/Create OneLogin Identity Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersOnelogin(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update/Create Ping Identity Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersPing(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update/Create PureCloud Identity Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersPurecloud(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update/Create PureEngage Identity Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersPureengage(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update/Create Salesforce Identity Provider
	 * 
	 * @param {Object} body Provider
	 */
	putIdentityprovidersSalesforce(body) { 
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
			['application/json']
		);
	}

}


export default IdentityProviderApi;