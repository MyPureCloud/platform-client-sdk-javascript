import ApiClient from '../ApiClient.js';


class DialogEngineApi {
	/**
	 * DialogEngine service.
	 * @module purecloud-platform-client-v2/api/DialogEngineApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new DialogEngineApi. 
	 * @alias module:purecloud-platform-client-v2/api/DialogEngineApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a Bot.
	 * 
	 * @param {String} botId ID of the bot.
	 */
	deleteDialogBot(botId) { 
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling deleteDialogBot';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/bots/{botId}', 
			'DELETE', 
			{ 'botId': botId },
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
	 * Get a Bot.
	 * 
	 * @param {String} botId ID of the bot.
	 */
	getDialogBot(botId) { 
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getDialogBot';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/bots/{botId}', 
			'GET', 
			{ 'botId': botId },
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
	 * Retrieve a single dialog session.
	 * 
	 * @param {String} sessionId ID of the dialog session.
	 * @param {String} botId ID of the dialog session's bot.
	 */
	getDialogBotSession(sessionId, botId) { 
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null) {
			throw 'Missing the required parameter "sessionId" when calling getDialogBotSession';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getDialogBotSession';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/bots/{botId}/sessions/{sessionId}', 
			'GET', 
			{ 'sessionId': sessionId,'botId': botId },
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
	 * Retrieve a single bot version.
	 * 
	 * @param {String} botId ID of the bot.
	 * @param {String} versionId ID of the bot version.
	 */
	getDialogBotVersion(botId, versionId) { 
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getDialogBotVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
			throw 'Missing the required parameter "versionId" when calling getDialogBotVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/bots/{botId}/versions/{versionId}', 
			'GET', 
			{ 'botId': botId,'versionId': versionId },
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
	 * Get all bot versions.
	 * 
	 * @param {String} botId ID of the bot.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Boolean} opts.published Filter by published field.
	 */
	getDialogBotVersions(botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getDialogBotVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/bots/{botId}/versions', 
			'GET', 
			{ 'botId': botId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'],'published': opts['published'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all Bots.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 */
	getDialogBots(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/dialog/bots', 
			'GET', 
			{  },
			{ 'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get an integration view of a Bot.
	 * 
	 * @param {String} botId ID of the bot.
	 */
	getDialogIntegrationsBot(botId) { 
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getDialogIntegrationsBot';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/integrations/bots/{botId}', 
			'GET', 
			{ 'botId': botId },
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
	 * Retrieve the integration view of a single bot version.
	 * 
	 * @param {String} botId ID of the bot.
	 * @param {String} versionId ID of the bot version.
	 */
	getDialogIntegrationsBotVersion(botId, versionId) { 
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getDialogIntegrationsBotVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
			throw 'Missing the required parameter "versionId" when calling getDialogIntegrationsBotVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/integrations/bots/{botId}/versions/{versionId}', 
			'GET', 
			{ 'botId': botId,'versionId': versionId },
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
	 * Get an integration view listing of all bots.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 */
	getDialogIntegrationsBots(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/dialog/integrations/bots', 
			'GET', 
			{  },
			{ 'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a bot version.
	 * 
	 * @param {String} botId ID of the bot.
	 * @param {String} versionId ID of the bot version.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchDialogBotVersion(botId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling patchDialogBotVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
			throw 'Missing the required parameter "versionId" when calling patchDialogBotVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/bots/{botId}/versions/{versionId}', 
			'PATCH', 
			{ 'botId': botId,'versionId': versionId },
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
	 * Send user-input turn for dialog session.
	 * 
	 * @param {String} sessionId ID of the dialog session.
	 * @param {String} botId ID of the dialog session's bot.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postDialogBotSessionTurns(sessionId, botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null) {
			throw 'Missing the required parameter "sessionId" when calling postDialogBotSessionTurns';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling postDialogBotSessionTurns';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/bots/{botId}/sessions/{sessionId}/turns', 
			'POST', 
			{ 'sessionId': sessionId,'botId': botId },
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
	 * Create a new dialog session.
	 * 
	 * @param {String} botId ID of the dialog session's bot.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postDialogBotSessions(botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling postDialogBotSessions';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/bots/{botId}/sessions', 
			'POST', 
			{ 'botId': botId },
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
	 * Create a new bot version.
	 * 
	 * @param {String} botId ID of the bot.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postDialogBotVersions(botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling postDialogBotVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/bots/{botId}/versions', 
			'POST', 
			{ 'botId': botId },
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
	 * Create a new Bot.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postDialogBots(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/dialog/bots', 
			'POST', 
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
	 * Modify a Bot.
	 * 
	 * @param {String} botId ID of the bot.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putDialogBot(botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling putDialogBot';
		}

		return this.apiClient.callApi(
			'/api/v2/dialog/bots/{botId}', 
			'PUT', 
			{ 'botId': botId },
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


export default DialogEngineApi;
