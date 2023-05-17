import ApiClient from '../ApiClient.js';


class OAuthApi {
	/**
	 * OAuth service.
	 * @module purecloud-platform-client-v2/api/OAuthApi
	 * @version 168.2.0
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
	 * Get a client that is authorized by the resource owner
	 * 
	 * @param {String} clientId The ID of client
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.acceptLanguage The language in which to display the client descriptions. (default to en-us)
	 */
	getOauthAuthorization(clientId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling getOauthAuthorization';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/authorizations/{clientId}', 
			'GET', 
			{ 'clientId': clientId },
			{  },
			{ 'Accept-Language': opts['acceptLanguage'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List clients that have been authorized, requested, or revoked by the resource owner
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.acceptLanguage The language in which to display the client descriptions. (default to en-us)
	 */
	getOauthAuthorizations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/oauth/authorizations', 
			'GET', 
			{  },
			{  },
			{ 'Accept-Language': opts['acceptLanguage'] },
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
	 * Get the results of a usage query
	 * 
	 * @param {String} executionId ID of the query execution
	 * @param {String} clientId Client ID
	 */
	getOauthClientUsageQueryResult(executionId, clientId) { 
		// verify the required parameter 'executionId' is set
		if (executionId === undefined || executionId === null) {
			throw 'Missing the required parameter "executionId" when calling getOauthClientUsageQueryResult';
		}
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling getOauthClientUsageQueryResult';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}/usage/query/results/{executionId}', 
			'GET', 
			{ 'executionId': executionId,'clientId': clientId },
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
	 * Get a summary of OAuth client API usage
	 * After calling this method, you will then need to poll for the query results based on the returned execution Id
	 * @param {String} clientId Client ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.days Previous number of days to query (default to 7)
	 */
	getOauthClientUsageSummary(clientId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling getOauthClientUsageSummary';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}/usage/summary', 
			'GET', 
			{ 'clientId': clientId },
			{ 'days': opts['days'] },
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
	 * An OAuth scope
	 * 
	 * @param {String} scopeId Scope ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.acceptLanguage The language with which to display the scope description. (default to en-us)
	 */
	getOauthScope(scopeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scopeId' is set
		if (scopeId === undefined || scopeId === null) {
			throw 'Missing the required parameter "scopeId" when calling getOauthScope';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/scopes/{scopeId}', 
			'GET', 
			{ 'scopeId': scopeId },
			{  },
			{ 'Accept-Language': opts['acceptLanguage'] },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * The list of OAuth scopes
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.acceptLanguage The language with which to display the scope descriptions. (default to en-us)
	 */
	getOauthScopes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/oauth/scopes', 
			'GET', 
			{  },
			{  },
			{ 'Accept-Language': opts['acceptLanguage'] },
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
	 * Query for OAuth client API usage
	 * After calling this method, you will then need to poll for the query results based on the returned execution Id
	 * @param {String} clientId Client ID
	 * @param {Object} body Query
	 */
	postOauthClientUsageQuery(clientId, body) { 
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling postOauthClientUsageQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOauthClientUsageQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}/usage/query', 
			'POST', 
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

	/**
	 * Create OAuth client
	 * The OAuth Grant/Client is required in order to create an authentication token and gain access to PureCloud.  The preferred authorizedGrantTypes is CODE which requires applications to send a client ID and client secret. This is typically a web server.  If the client is unable to secure the client secret then the TOKEN grant type aka IMPLICIT should be used. This is would be for browser or mobile apps.  If a client is to be used outside of the context of a user then the CLIENT-CREDENTIALS grant may be used. In this case the client must be granted roles  via the roleIds field.
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
