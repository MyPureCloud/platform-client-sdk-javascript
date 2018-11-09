import ApiClient from '../ApiClient.js';


class TokensApi {
	/**
	 * Tokens service.
	 * @module purecloud-platform-client-v2/api/TokensApi
	 * @version 40.0.0
	 */

	/**
	 * Constructs a new TokensApi. 
	 * @alias module:purecloud-platform-client-v2/api/TokensApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete  auth token used to make the request.
	 * 
	 */
	deleteTokensMe() { 

		return this.apiClient.callApi(
			'/api/v2/tokens/me', 
			'DELETE', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Fetch information about the current token
	 * 
	 */
	getTokensMe() { 

		return this.apiClient.callApi(
			'/api/v2/tokens/me', 
			'GET', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default TokensApi;