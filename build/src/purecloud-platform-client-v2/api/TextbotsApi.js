import ApiClient from '../ApiClient.js';


class TextbotsApi {
	/**
	 * Textbots service.
	 * @module purecloud-platform-client-v2/api/TextbotsApi
	 * @version 115.0.0
	 */

	/**
	 * Constructs a new TextbotsApi. 
	 * @alias module:purecloud-platform-client-v2/api/TextbotsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Send an intent to a bot to start a dialog/interact with it via text
	 * This will either start a bot with the given id or relay a communication to an existing bot session.
	 * @param {Object} postTextRequest 
	 */
	postTextbotsBotsExecute(postTextRequest) { 
		// verify the required parameter 'postTextRequest' is set
		if (postTextRequest === undefined || postTextRequest === null) {
			throw 'Missing the required parameter "postTextRequest" when calling postTextbotsBotsExecute';
		}

		return this.apiClient.callApi(
			'/api/v2/textbots/bots/execute', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			postTextRequest, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default TextbotsApi;