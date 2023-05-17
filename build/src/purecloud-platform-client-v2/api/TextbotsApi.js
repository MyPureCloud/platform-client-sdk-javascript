import ApiClient from '../ApiClient.js';


class TextbotsApi {
	/**
	 * Textbots service.
	 * @module purecloud-platform-client-v2/api/TextbotsApi
	 * @version 168.2.0
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
	 * Find bots using the currently configured friendly name or ID.
	 * The name does allow case-insensitive partial string matches or by IDs (up to 50), but not both at the same time. Optionally you can limit the scope of the search by providing one or more bot types.  You can specify the maximum results to return, up to a limit of 100
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.botType Bot types
	 * @param {String} opts.botName Bot name
	 * @param {Array.<String>} opts.botId Bot IDs
	 * @param {Number} opts.pageSize The maximum results to return (default to 25)
	 */
	getTextbotsBotsSearch(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/textbots/bots/search', 
			'GET', 
			{  },
			{ 'botType': this.apiClient.buildCollectionParam(opts['botType'], 'multi'),'botName': opts['botName'],'botId': this.apiClient.buildCollectionParam(opts['botId'], 'multi'),'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Issue a bot flow turn event
	 * Send a turn event to an executing bot flow and produce the next action to take.
	 * @param {String} sessionId The bot flow session ID, typically obtained from 'POST /api/v2/textbots/botflows/sessions'
	 * @param {Object} turnRequest 
	 */
	postTextbotsBotflowsSessionTurns(sessionId, turnRequest) { 
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null) {
			throw 'Missing the required parameter "sessionId" when calling postTextbotsBotflowsSessionTurns';
		}
		// verify the required parameter 'turnRequest' is set
		if (turnRequest === undefined || turnRequest === null) {
			throw 'Missing the required parameter "turnRequest" when calling postTextbotsBotflowsSessionTurns';
		}

		return this.apiClient.callApi(
			'/api/v2/textbots/botflows/sessions/{sessionId}/turns', 
			'POST', 
			{ 'sessionId': sessionId },
			{  },
			{  },
			{  },
			turnRequest, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create an execution instance of a bot flow definition.
	 * The launch is asynchronous; use the returned instance ID to post turns to it using POST /api/v2/textbots/botflows/sessions/{sessionId}/turns.
	 * @param {Object} launchRequest 
	 */
	postTextbotsBotflowsSessions(launchRequest) { 
		// verify the required parameter 'launchRequest' is set
		if (launchRequest === undefined || launchRequest === null) {
			throw 'Missing the required parameter "launchRequest" when calling postTextbotsBotflowsSessions';
		}

		return this.apiClient.callApi(
			'/api/v2/textbots/botflows/sessions', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			launchRequest, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
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
