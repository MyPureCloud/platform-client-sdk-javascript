import ApiClient from '../ApiClient.js';


class TokensApi {
	/**
	 * Tokens service.
	 * @module purecloud-platform-client-v2/api/TokensApi
	 * @version 225.0.0
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
	 * Delete all auth tokens for the specified user.
	 * 
	 * @param {String} userId User ID
	 */
	deleteToken(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteToken';
		}

		return this.apiClient.callApi(
			'/api/v2/tokens/{userId}', 
			'DELETE', 
			{ 'userId': userId },
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
	 * Delete auth token used to make the request.
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
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Fetch information about the current token
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.preserveIdleTTL preserveIdleTTL indicates whether the idle token timeout should be reset or preserved. If preserveIdleTTL is true, then TTL value is not reset. If unset or false, the value is reset.
	 */
	getTokensMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/tokens/me', 
			'GET', 
			{  },
			{ 'preserveIdleTTL': opts['preserveIdleTTL'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the current Idle Token Timeout Value
	 * 
	 */
	getTokensTimeout() { 

		return this.apiClient.callApi(
			'/api/v2/tokens/timeout', 
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
	 * Verify user token
	 * 
	 */
	headTokensMe() { 

		return this.apiClient.callApi(
			'/api/v2/tokens/me', 
			'HEAD', 
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
	 * Update or Enable/Disable the Idle Token Timeout
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putTokensTimeout(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/tokens/timeout', 
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

}


export default TokensApi;
