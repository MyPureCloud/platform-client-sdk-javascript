import ApiClient from '../ApiClient.js';


class OAuthApi {
	/**
	 * OAuth service.
	 * @module purecloud-platform-client-v2/api/OAuthApi
	 * @version 63.0.0
	 */

	/**
	 * Constructs a new OAuthApi. 
	 * @alias module:purecloud-platform-client-v2/api/OAuthApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete OAuth Client
	 * 
	 * @param {String} clientId Client ID
	 */
	deleteOauthClient(clientId) { 
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling deleteOauthClient';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}', 
			'DELETE', 
			{ 'clientId': clientId }, 
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
	 * Get OAuth Client
	 * 
	 * @param {String} clientId Client ID
	 */
	getOauthClient(clientId) { 
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling getOauthClient';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}', 
			'GET', 
			{ 'clientId': clientId }, 
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
	 * The list of OAuth clients
	 * 
	 */
	getOauthClients() { 

		return this.apiClient.callApi(
			'/api/v2/oauth/clients', 
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
	 * Regenerate Client Secret
	 * This operation will set the client secret to a randomly generated cryptographically random value. All clients must be updated with the new secret. This operation should be used with caution.
	 * @param {String} clientId Client ID
	 */
	postOauthClientSecret(clientId) { 
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling postOauthClientSecret';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}/secret', 
			'POST', 
			{ 'clientId': clientId }, 
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
	 * Create OAuth client
	 * The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud.  The preferred authorizedGrantTypes is &#39;CODE&#39; which requires applications to send a client ID and client secret. This is typically a web server.  If the client is unable to secure the client secret then the &#39;TOKEN&#39; grant type aka IMPLICIT should be used. This is would be for browser or mobile apps.  If a client is to be used outside of the context of a user then the &#39;CLIENT-CREDENTIALS&#39; grant may be used. In this case the client must be granted roles  via the &#39;roleIds&#39; field.
	 * @param {Object} body Client
	 */
	postOauthClients(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOauthClients';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients', 
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
	 * Update OAuth Client
	 * 
	 * @param {String} clientId Client ID
	 * @param {Object} body Client
	 */
	putOauthClient(clientId, body) { 
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling putOauthClient';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putOauthClient';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}', 
			'PUT', 
			{ 'clientId': clientId }, 
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


export default OAuthApi;