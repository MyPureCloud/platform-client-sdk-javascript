import ApiClient from '../ApiClient.js';


class IntegrationsApi {
	/**
	 * Integrations service.
	 * @module purecloud-platform-client-v2/api/IntegrationsApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new IntegrationsApi. 
	 * @alias module:purecloud-platform-client-v2/api/IntegrationsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete integration.
	 * 
	 * @param {String} integrationId Integration Id
	 */
	deleteIntegration(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteIntegration';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/{integrationId}', 
			'DELETE', 
			{ 'integrationId': integrationId },
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
	 * Delete an Action
	 * 
	 * @param {String} actionId actionId
	 */
	deleteIntegrationsAction(actionId) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling deleteIntegrationsAction';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}', 
			'DELETE', 
			{ 'actionId': actionId },
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
	 * Delete a Draft
	 * 
	 * @param {String} actionId actionId
	 */
	deleteIntegrationsActionDraft(actionId) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling deleteIntegrationsActionDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft', 
			'DELETE', 
			{ 'actionId': actionId },
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
	 * Delete a set of credentials
	 * 
	 * @param {String} credentialId Credential ID
	 */
	deleteIntegrationsCredential(credentialId) { 
		// verify the required parameter 'credentialId' is set
		if (credentialId === undefined || credentialId === null) {
			throw 'Missing the required parameter "credentialId" when calling deleteIntegrationsCredential';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/credentials/{credentialId}', 
			'DELETE', 
			{ 'credentialId': credentialId },
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
	 * Invalidate the Microsoft Teams integration auth for the user.
	 * For a Genesys Cloud user, they can only be associated with Microsoft Teams auth at a time.  This can be used to clear the session or a new creation can be created, which will supersede the current one.
	 */
	deleteIntegrationsMicrosoftteamsAuth() { 

		return this.apiClient.callApi(
			'/api/v2/integrations/microsoftteams/auth', 
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
	 * Logout
	 * 
	 */
	deleteIntegrationsSalesforceServicecloudvoiceLogout() { 

		return this.apiClient.callApi(
			'/api/v2/integrations/salesforce/servicecloudvoice/logout', 
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
	 * Invalidates a 3rd-party integration auth for the user.
	 * 
	 * @param {String} ucIntegrationId UC Integration ID
	 */
	deleteIntegrationsUnifiedcommunicationAuth(ucIntegrationId) { 
		// verify the required parameter 'ucIntegrationId' is set
		if (ucIntegrationId === undefined || ucIntegrationId === null) {
			throw 'Missing the required parameter "ucIntegrationId" when calling deleteIntegrationsUnifiedcommunicationAuth';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/auth', 
			'DELETE', 
			{ 'ucIntegrationId': ucIntegrationId },
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
	 * Delete a Webhook
	 * 
	 * @param {String} webhookId The id of the webhook
	 */
	deleteIntegrationsWebhook(webhookId) { 
		// verify the required parameter 'webhookId' is set
		if (webhookId === undefined || webhookId === null) {
			throw 'Missing the required parameter "webhookId" when calling deleteIntegrationsWebhook';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/webhooks/{webhookId}', 
			'DELETE', 
			{ 'webhookId': webhookId },
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
	 * Delete a Webhook Schema
	 * 
	 * @param {String} webhookId The id of the webhook that the schema belongs to
	 */
	deleteIntegrationsWebhookSchema(webhookId) { 
		// verify the required parameter 'webhookId' is set
		if (webhookId === undefined || webhookId === null) {
			throw 'Missing the required parameter "webhookId" when calling deleteIntegrationsWebhookSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/webhooks/{webhookId}/schema', 
			'DELETE', 
			{ 'webhookId': webhookId },
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
	 * Invalidate the Zoom integration auth for the user.
	 * For a Genesys Cloud user, they can only be associated with Zoom auth at a time.  This can be used to clear the session or a new creation can be created, which will supersede the current one.
	 */
	deleteIntegrationsZoomAuth() { 

		return this.apiClient.callApi(
			'/api/v2/integrations/zoom/auth', 
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
	 * Get integration.
	 * 
	 * @param {String} integrationId Integration Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 */
	getIntegration(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getIntegration';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get integration configuration.
	 * 
	 * @param {String} integrationId Integration Id
	 */
	getIntegrationConfigCurrent(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationConfigCurrent';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/{integrationId}/config/current', 
			'GET', 
			{ 'integrationId': integrationId },
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
	 * List integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 */
	getIntegrations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves a single Action matching id.
	 * 
	 * @param {String} actionId actionId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Indicates a field in the response which should be expanded.
	 * @param {Object} opts.includeConfig Return config in response. (default to false)
	 */
	getIntegrationsAction(actionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsAction';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}', 
			'GET', 
			{ 'actionId': actionId },
			{ 'expand': opts['expand'],'includeConfig': opts['includeConfig'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve a Draft
	 * 
	 * @param {String} actionId actionId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Indicates a field in the response which should be expanded.
	 * @param {Object} opts.includeConfig Return config in response. (default to false)
	 */
	getIntegrationsActionDraft(actionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft', 
			'GET', 
			{ 'actionId': actionId },
			{ 'expand': opts['expand'],'includeConfig': opts['includeConfig'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieve schema for a Draft based on filename.
	 * 
	 * @param {String} actionId actionId
	 * @param {String} fileName Name of schema file to be retrieved for this draft.
	 */
	getIntegrationsActionDraftSchema(actionId, fileName) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionDraftSchema';
		}
		// verify the required parameter 'fileName' is set
		if (fileName === undefined || fileName === null) {
			throw 'Missing the required parameter "fileName" when calling getIntegrationsActionDraftSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}', 
			'GET', 
			{ 'actionId': actionId,'fileName': fileName },
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
	 * Retrieve templates for a Draft based on filename.
	 * 
	 * @param {String} actionId actionId
	 * @param {String} fileName Name of template file to be retrieved for this action draft.
	 */
	getIntegrationsActionDraftTemplate(actionId, fileName) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionDraftTemplate';
		}
		// verify the required parameter 'fileName' is set
		if (fileName === undefined || fileName === null) {
			throw 'Missing the required parameter "fileName" when calling getIntegrationsActionDraftTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft/templates/{fileName}', 
			'GET', 
			{ 'actionId': actionId,'fileName': fileName },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['text/plain']
		);
	}

	/**
	 * Validate current Draft configuration.
	 * 
	 * @param {String} actionId actionId
	 */
	getIntegrationsActionDraftValidation(actionId) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionDraftValidation';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft/validation', 
			'GET', 
			{ 'actionId': actionId },
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
	 * Retrieve schema for an action based on filename.
	 * 
	 * @param {String} actionId actionId
	 * @param {String} fileName Name of schema file to be retrieved for this action.
	 */
	getIntegrationsActionSchema(actionId, fileName) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionSchema';
		}
		// verify the required parameter 'fileName' is set
		if (fileName === undefined || fileName === null) {
			throw 'Missing the required parameter "fileName" when calling getIntegrationsActionSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/schemas/{fileName}', 
			'GET', 
			{ 'actionId': actionId,'fileName': fileName },
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
	 * Retrieve text of templates for an action based on filename.
	 * 
	 * @param {String} actionId actionId
	 * @param {String} fileName Name of template file to be retrieved for this action.
	 */
	getIntegrationsActionTemplate(actionId, fileName) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionTemplate';
		}
		// verify the required parameter 'fileName' is set
		if (fileName === undefined || fileName === null) {
			throw 'Missing the required parameter "fileName" when calling getIntegrationsActionTemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/templates/{fileName}', 
			'GET', 
			{ 'actionId': actionId,'fileName': fileName },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['text/plain']
		);
	}

	/**
	 * Retrieves all actions associated with filters passed in via query param.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.sortBy Root level field name to sort on.
	 * @param {Object} opts.sortOrder Direction to sort 'sortBy' field. (default to asc)
	 * @param {String} opts.category Filter by category name.
	 * @param {String} opts.name Filter by partial or complete action name.
	 * @param {String} opts.ids Filter by action Id. Can be a comma separated list to request multiple actions.  Limit of 50 Ids.
	 * @param {Object} opts.secure Filter based on 'secure' configuration option. True will only return actions marked as secure. False will return only non-secure actions. Do not use filter if you want all Actions.
	 * @param {Object} opts.includeAuthActions Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions. (default to false)
	 */
	getIntegrationsActions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/actions', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'category': opts['category'],'name': opts['name'],'ids': opts['ids'],'secure': opts['secure'],'includeAuthActions': opts['includeAuthActions'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves all categories of available Actions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.sortBy Root level field name to sort on.  Only 'name' is supported on this endpoint.
	 * @param {Object} opts.sortOrder Direction to sort 'sortBy' field. (default to asc)
	 * @param {Object} opts.secure Filter to only include secure actions. True will only include actions marked secured. False will include only unsecure actions. Do not use filter if you want all Actions.
	 */
	getIntegrationsActionsCategories(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/categories', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'secure': opts['secure'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves all action drafts associated with the filters passed in via query param.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.sortBy Root level field name to sort on.
	 * @param {Object} opts.sortOrder Direction to sort 'sortBy' field. (default to asc)
	 * @param {String} opts.category Filter by category name.
	 * @param {String} opts.name Filter by partial or complete action name.
	 * @param {String} opts.ids Filter by action Id. Can be a comma separated list to request multiple actions.  Limit of 50 Ids.
	 * @param {Object} opts.secure Filter based on 'secure' configuration option. True will only return actions marked as secure. False will return only non-secure actions. Do not use filter if you want all Actions.
	 * @param {Object} opts.includeAuthActions Whether or not to include authentication actions in the response. These actions are not directly executable. Some integrations create them and will run them as needed to refresh authentication information for other actions. (default to false)
	 */
	getIntegrationsActionsDrafts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/drafts', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'category': opts['category'],'name': opts['name'],'ids': opts['ids'],'secure': opts['secure'],'includeAuthActions': opts['includeAuthActions'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves the schema.
	 * 
	 * @param {String} providerName Name of provider.
	 * @param {String} fileName File name of schema including .json suffix.
	 * @deprecated
	 */
	getIntegrationsActionsSchemaFileName(providerName, fileName) { 
		// verify the required parameter 'providerName' is set
		if (providerName === undefined || providerName === null) {
			throw 'Missing the required parameter "providerName" when calling getIntegrationsActionsSchemaFileName';
		}
		// verify the required parameter 'fileName' is set
		if (fileName === undefined || fileName === null) {
			throw 'Missing the required parameter "fileName" when calling getIntegrationsActionsSchemaFileName';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/schemas/{providerName}/{fileName}', 
			'GET', 
			{ 'providerName': providerName,'fileName': fileName },
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
	 * Get a specific botConnector bot, plus versions, for this integration
	 * 
	 * @param {String} integrationId The integration ID for this group of bots
	 * @param {String} botId The botID for this bot
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.version Specific Version
	 */
	getIntegrationsBotconnectorIntegrationIdBot(integrationId, botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationsBotconnectorIntegrationIdBot';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getIntegrationsBotconnectorIntegrationIdBot';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/botconnector/{integrationId}/bots/{botId}', 
			'GET', 
			{ 'integrationId': integrationId,'botId': botId },
			{ 'version': opts['version'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of bot versions for a bot
	 * 
	 * @param {String} integrationId The integration ID for this bot group
	 * @param {String} botId The botID for this bot
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getIntegrationsBotconnectorIntegrationIdBotVersions(integrationId, botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationsBotconnectorIntegrationIdBotVersions';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getIntegrationsBotconnectorIntegrationIdBotVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/botconnector/{integrationId}/bots/{botId}/versions', 
			'GET', 
			{ 'integrationId': integrationId,'botId': botId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of botConnector bots for this integration
	 * 
	 * @param {String} integrationId The integration ID for this group of bots
	 */
	getIntegrationsBotconnectorIntegrationIdBots(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationsBotconnectorIntegrationIdBots';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/botconnector/{integrationId}/bots', 
			'GET', 
			{ 'integrationId': integrationId },
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
	 * Get a summary list of botConnector bots for this integration
	 * 
	 * @param {String} integrationId The integration ID for this group of bots
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getIntegrationsBotconnectorIntegrationIdBotsSummaries(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationsBotconnectorIntegrationIdBotsSummaries';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/botconnector/{integrationId}/bots/summaries', 
			'GET', 
			{ 'integrationId': integrationId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List permitted client app integrations for the logged in user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 */
	getIntegrationsClientapps(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/clientapps', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * UC integration client application configuration.
	 * This endpoint returns basic UI configuration data for all Unified Communications integrations client applications enabled for the current organization.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 */
	getIntegrationsClientappsUnifiedcommunications(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/clientapps/unifiedcommunications', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a single credential with sensitive fields redacted
	 * 
	 * @param {String} credentialId Credential ID
	 */
	getIntegrationsCredential(credentialId) { 
		// verify the required parameter 'credentialId' is set
		if (credentialId === undefined || credentialId === null) {
			throw 'Missing the required parameter "credentialId" when calling getIntegrationsCredential';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/credentials/{credentialId}', 
			'GET', 
			{ 'credentialId': credentialId },
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
	 * List multiple sets of credentials
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getIntegrationsCredentials(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/credentials', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List all credential types
	 * 
	 */
	getIntegrationsCredentialsTypes() { 

		return this.apiClient.callApi(
			'/api/v2/integrations/credentials/types', 
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
	 * Gets a Microsoft Teams integration auth for the user.
	 * 
	 */
	getIntegrationsMicrosoftteamsAuth() { 

		return this.apiClient.callApi(
			'/api/v2/integrations/microsoftteams/auth', 
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
	 * Get a voice call record by job id
	 * 
	 * @param {String} jobId 
	 */
	getIntegrationsSalesforceServicecloudvoiceVoicecallrecordJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getIntegrationsSalesforceServicecloudvoiceVoicecallrecordJob';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Get details about a Dialogflow agent
	 * 
	 * @param {String} agentId The agent ID
	 */
	getIntegrationsSpeechDialogflowAgent(agentId) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null) {
			throw 'Missing the required parameter "agentId" when calling getIntegrationsSpeechDialogflowAgent';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/dialogflow/agents/{agentId}', 
			'GET', 
			{ 'agentId': agentId },
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
	 * Get a list of Dialogflow agents in the customers' Google accounts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.name Filter on agent name
	 */
	getIntegrationsSpeechDialogflowAgents(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/dialogflow/agents', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get details about a Dialogflow CX agent
	 * 
	 * @param {String} agentId The agent ID
	 */
	getIntegrationsSpeechDialogflowcxAgent(agentId) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null) {
			throw 'Missing the required parameter "agentId" when calling getIntegrationsSpeechDialogflowcxAgent';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/dialogflowcx/agents/{agentId}', 
			'GET', 
			{ 'agentId': agentId },
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
	 * Get a list of Dialogflow CX agents in the customers' Google accounts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.name Filter on agent name
	 */
	getIntegrationsSpeechDialogflowcxAgents(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/dialogflowcx/agents', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get details about a Lex bot alias
	 * 
	 * @param {String} aliasId The alias ID
	 */
	getIntegrationsSpeechLexBotAlias(aliasId) { 
		// verify the required parameter 'aliasId' is set
		if (aliasId === undefined || aliasId === null) {
			throw 'Missing the required parameter "aliasId" when calling getIntegrationsSpeechLexBotAlias';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/lex/bot/alias/{aliasId}', 
			'GET', 
			{ 'aliasId': aliasId },
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
	 * Get a list of aliases for a bot in the customer's AWS accounts
	 * 
	 * @param {String} botId The bot ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.status Filter on alias status
	 * @param {String} opts.name Filter on alias name
	 */
	getIntegrationsSpeechLexBotBotIdAliases(botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getIntegrationsSpeechLexBotBotIdAliases';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/lex/bot/{botId}/aliases', 
			'GET', 
			{ 'botId': botId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'status': opts['status'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of Lex bots in the customers' AWS accounts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.name Filter on bot name
	 */
	getIntegrationsSpeechLexBots(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/lex/bots', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get details about a Lex V2 bot alias
	 * 
	 * @param {String} aliasId The Alias ID
	 */
	getIntegrationsSpeechLexv2BotAlias(aliasId) { 
		// verify the required parameter 'aliasId' is set
		if (aliasId === undefined || aliasId === null) {
			throw 'Missing the required parameter "aliasId" when calling getIntegrationsSpeechLexv2BotAlias';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/lexv2/bot/alias/{aliasId}', 
			'GET', 
			{ 'aliasId': aliasId },
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
	 * Get a list of aliases for a Lex V2 bot
	 * 
	 * @param {String} botId The Bot ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.status Filter on alias status
	 * @param {String} opts.name Filter on alias name
	 */
	getIntegrationsSpeechLexv2BotBotIdAliases(botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getIntegrationsSpeechLexv2BotBotIdAliases';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/lexv2/bot/{botId}/aliases', 
			'GET', 
			{ 'botId': botId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'status': opts['status'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of Lex V2 bots
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.name Filter on bot name
	 */
	getIntegrationsSpeechLexv2Bots(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/lexv2/bots', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a Nuance bot in the specified Integration
	 * 
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {String} botId The Nuance bot ID to get
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 * @param {Object} opts.targetChannel targetChannel
	 * getIntegrationsSpeechNuanceNuanceIntegrationIdBot is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBot(nuanceIntegrationId, botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null) {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBot';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBot';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}', 
			'GET', 
			{ 'nuanceIntegrationId': nuanceIntegrationId,'botId': botId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'targetChannel': opts['targetChannel'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the status of an asynchronous Nuance bot GET job
	 * 
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {String} botId The Nuance bot ID
	 * @param {String} jobId The asynchronous job ID
	 * getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob(nuanceIntegrationId, botId, jobId) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null) {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs/{jobId}', 
			'GET', 
			{ 'nuanceIntegrationId': nuanceIntegrationId,'botId': botId,'jobId': jobId },
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
	 * Get the result of an asynchronous Nuance bot GET job
	 * 
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {String} botId The Nuance bot ID
	 * @param {String} jobId The asynchronous job ID
	 * getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults(nuanceIntegrationId, botId, jobId) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null) {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs/{jobId}/results', 
			'GET', 
			{ 'nuanceIntegrationId': nuanceIntegrationId,'botId': botId,'jobId': jobId },
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
	 * Get a list of Nuance bots available in the specified Integration
	 * If the onlyRegisteredBots param is set, the returned data will only include the Nuance bots which have configured client secrets within the Integration,  otherwise all of the Nuance bots available to the Integrations configured discovery credentials are returned.
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.onlyRegisteredBots Limit bots to the ones configured for Genesys Cloud usage (default to true)
	 * getIntegrationsSpeechNuanceNuanceIntegrationIdBots is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBots(nuanceIntegrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null) {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBots';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots', 
			'GET', 
			{ 'nuanceIntegrationId': nuanceIntegrationId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'onlyRegisteredBots': opts['onlyRegisteredBots'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the status of an asynchronous Nuance bots GET job
	 * 
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {String} jobId The asynchronous job ID
	 * getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob(nuanceIntegrationId, jobId) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null) {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs/{jobId}', 
			'GET', 
			{ 'nuanceIntegrationId': nuanceIntegrationId,'jobId': jobId },
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
	 * Get the result of an asynchronous Nuance bots GET job
	 * 
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {String} jobId The asynchronous job ID
	 * getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults(nuanceIntegrationId, jobId) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null) {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs/{jobId}/results', 
			'GET', 
			{ 'nuanceIntegrationId': nuanceIntegrationId,'jobId': jobId },
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
	 * Get details about a STT engine
	 * 
	 * @param {String} engineId The engine ID
	 */
	getIntegrationsSpeechSttEngine(engineId) { 
		// verify the required parameter 'engineId' is set
		if (engineId === undefined || engineId === null) {
			throw 'Missing the required parameter "engineId" when calling getIntegrationsSpeechSttEngine';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/stt/engines/{engineId}', 
			'GET', 
			{ 'engineId': engineId },
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
	 * Get a list of STT engines enabled for org
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.name Filter on engine name
	 */
	getIntegrationsSpeechSttEngines(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/stt/engines', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': opts['name'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get details about a TTS engine
	 * 
	 * @param {String} engineId The engine ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeVoices Include voices for the engine (default to false)
	 */
	getIntegrationsSpeechTtsEngine(engineId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'engineId' is set
		if (engineId === undefined || engineId === null) {
			throw 'Missing the required parameter "engineId" when calling getIntegrationsSpeechTtsEngine';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/tts/engines/{engineId}', 
			'GET', 
			{ 'engineId': engineId },
			{ 'includeVoices': opts['includeVoices'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get details about a specific voice for a TTS engine
	 * 
	 * @param {String} engineId The engine ID
	 * @param {String} voiceId The voice ID
	 */
	getIntegrationsSpeechTtsEngineVoice(engineId, voiceId) { 
		// verify the required parameter 'engineId' is set
		if (engineId === undefined || engineId === null) {
			throw 'Missing the required parameter "engineId" when calling getIntegrationsSpeechTtsEngineVoice';
		}
		// verify the required parameter 'voiceId' is set
		if (voiceId === undefined || voiceId === null) {
			throw 'Missing the required parameter "voiceId" when calling getIntegrationsSpeechTtsEngineVoice';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/tts/engines/{engineId}/voices/{voiceId}', 
			'GET', 
			{ 'engineId': engineId,'voiceId': voiceId },
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
	 * Get a list of voices for a TTS engine
	 * 
	 * @param {String} engineId The engine ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getIntegrationsSpeechTtsEngineVoices(engineId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'engineId' is set
		if (engineId === undefined || engineId === null) {
			throw 'Missing the required parameter "engineId" when calling getIntegrationsSpeechTtsEngineVoices';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/tts/engines/{engineId}/voices', 
			'GET', 
			{ 'engineId': engineId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of TTS engines enabled for org
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.includeVoices Include voices for the engine (default to false)
	 * @param {String} opts.name Filter on engine name
	 * @param {String} opts.language Filter on supported language. If includeVoices=true then the voices are also filtered.
	 */
	getIntegrationsSpeechTtsEngines(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/tts/engines', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'includeVoices': opts['includeVoices'],'name': opts['name'],'language': opts['language'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get TTS settings for an org
	 * 
	 */
	getIntegrationsSpeechTtsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/tts/settings', 
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
	 * Get integration type.
	 * 
	 * @param {String} typeId Integration Type Id
	 */
	getIntegrationsType(typeId) { 
		// verify the required parameter 'typeId' is set
		if (typeId === undefined || typeId === null) {
			throw 'Missing the required parameter "typeId" when calling getIntegrationsType';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/types/{typeId}', 
			'GET', 
			{ 'typeId': typeId },
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
	 * Get properties config schema for an integration type.
	 * 
	 * @param {String} typeId Integration Type Id
	 * @param {Object} configType Config schema type
	 */
	getIntegrationsTypeConfigschema(typeId, configType) { 
		// verify the required parameter 'typeId' is set
		if (typeId === undefined || typeId === null) {
			throw 'Missing the required parameter "typeId" when calling getIntegrationsTypeConfigschema';
		}
		// verify the required parameter 'configType' is set
		if (configType === undefined || configType === null) {
			throw 'Missing the required parameter "configType" when calling getIntegrationsTypeConfigschema';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/types/{typeId}/configschemas/{configType}', 
			'GET', 
			{ 'typeId': typeId,'configType': configType },
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
	 * List integration types
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 */
	getIntegrationsTypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/types', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets a 3rd-party integration auth for the user.
	 * 
	 * @param {String} ucIntegrationId UC Integration ID
	 */
	getIntegrationsUnifiedcommunicationAuth(ucIntegrationId) { 
		// verify the required parameter 'ucIntegrationId' is set
		if (ucIntegrationId === undefined || ucIntegrationId === null) {
			throw 'Missing the required parameter "ucIntegrationId" when calling getIntegrationsUnifiedcommunicationAuth';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/auth', 
			'GET', 
			{ 'ucIntegrationId': ucIntegrationId },
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
	 * Get a meeting.
	 * Get a meeting by ID.
	 * @param {String} ucIntegrationId 3rd Party Service Type
	 * @param {String} meetingId ID of meeting
	 */
	getIntegrationsUnifiedcommunicationMeeting(ucIntegrationId, meetingId) { 
		// verify the required parameter 'ucIntegrationId' is set
		if (ucIntegrationId === undefined || ucIntegrationId === null) {
			throw 'Missing the required parameter "ucIntegrationId" when calling getIntegrationsUnifiedcommunicationMeeting';
		}
		// verify the required parameter 'meetingId' is set
		if (meetingId === undefined || meetingId === null) {
			throw 'Missing the required parameter "meetingId" when calling getIntegrationsUnifiedcommunicationMeeting';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings/{meetingId}', 
			'GET', 
			{ 'ucIntegrationId': ucIntegrationId,'meetingId': meetingId },
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
	 * List meetings
	 * List meetings
	 * @param {String} ucIntegrationId 3rd Party Service Type
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Size of Paged Results (default to 25)
	 * @param {Number} opts.pageNumber Number of Page (default to 0)
	 */
	getIntegrationsUnifiedcommunicationMeetings(ucIntegrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ucIntegrationId' is set
		if (ucIntegrationId === undefined || ucIntegrationId === null) {
			throw 'Missing the required parameter "ucIntegrationId" when calling getIntegrationsUnifiedcommunicationMeetings';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings', 
			'GET', 
			{ 'ucIntegrationId': ucIntegrationId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get bulk user presences for an integration source
	 * Gets the bulk presence for integration users.  This will return the integration presence mapped to Genesys Cloud presence with additional activity details in the message field. This presence source is read-only.
	 * @param {String} ucIntegrationId Integration Id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.id A comma separated list of user IDs to fetch their presence status in bulk. Limit 25.
	 */
	getIntegrationsUnifiedcommunicationPresences(ucIntegrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ucIntegrationId' is set
		if (ucIntegrationId === undefined || ucIntegrationId === null) {
			throw 'Missing the required parameter "ucIntegrationId" when calling getIntegrationsUnifiedcommunicationPresences';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/presences', 
			'GET', 
			{ 'ucIntegrationId': ucIntegrationId },
			{ 'id': this.apiClient.buildCollectionParam(opts['id'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * UC integration client application configuration.
	 * This endpoint returns basic UI configuration data for the specified Unified Communications integration client application.
	 * @param {String} ucIntegrationId 3rd Party Service Type
	 */
	getIntegrationsUnifiedcommunicationsClientapp(ucIntegrationId) { 
		// verify the required parameter 'ucIntegrationId' is set
		if (ucIntegrationId === undefined || ucIntegrationId === null) {
			throw 'Missing the required parameter "ucIntegrationId" when calling getIntegrationsUnifiedcommunicationsClientapp';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/clientapps/{ucIntegrationId}', 
			'GET', 
			{ 'ucIntegrationId': ucIntegrationId },
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
	 * List UC integration client application configurations.
	 * This endpoint returns basic UI configuration data for all Unified Communications integrations client applications enabled.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 */
	getIntegrationsUnifiedcommunicationsClientapps(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/clientapps', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * List permitted user app integrations for the logged in user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {String} opts.appHost The type of UserApp to filter by
	 */
	getIntegrationsUserapps(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/userapps', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'],'appHost': opts['appHost'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a Webhook
	 * 
	 * @param {String} webhookId The id of the webhook
	 */
	getIntegrationsWebhook(webhookId) { 
		// verify the required parameter 'webhookId' is set
		if (webhookId === undefined || webhookId === null) {
			throw 'Missing the required parameter "webhookId" when calling getIntegrationsWebhook';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/webhooks/{webhookId}', 
			'GET', 
			{ 'webhookId': webhookId },
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
	 * Get Webhook Schema from a Webhook
	 * 
	 * @param {String} webhookId The id of the webhook that the schema belongs to
	 */
	getIntegrationsWebhookSchema(webhookId) { 
		// verify the required parameter 'webhookId' is set
		if (webhookId === undefined || webhookId === null) {
			throw 'Missing the required parameter "webhookId" when calling getIntegrationsWebhookSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/webhooks/{webhookId}/schema', 
			'GET', 
			{ 'webhookId': webhookId },
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
	 * List Webhooks
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 */
	getIntegrationsWebhooks(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/webhooks', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a Zoom meeting.
	 * Get full details on a Zoom meeting
	 * @param {String} meetingId Zoom meeting number
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.zoomAuthorization Zoom authorization token
	 * @param {String} opts.occurrenceId Occurrence ID
	 */
	getIntegrationsZoom202004Meeting(meetingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'meetingId' is set
		if (meetingId === undefined || meetingId === null) {
			throw 'Missing the required parameter "meetingId" when calling getIntegrationsZoom202004Meeting';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/zoom/202004/meetings/{meetingId}', 
			'GET', 
			{ 'meetingId': meetingId },
			{ 'zoomAuthorization': opts['zoomAuthorization'],'occurrenceId': opts['occurrenceId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a Zoom user.
	 * Get a Zoom user record.
	 * @param {String} userId Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.zoomAuthorization Zoom authorization token
	 */
	getIntegrationsZoom202004User(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getIntegrationsZoom202004User';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/zoom/202004/users/{userId}', 
			'GET', 
			{ 'userId': userId },
			{ 'zoomAuthorization': opts['zoomAuthorization'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get meetings for a Zoom user.
	 * Get a list of meetings owned by a given user.
	 * @param {String} userId Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.zoomAuthorization Zoom authorization token
	 * @param {Object} opts.type Zoom meeting type. Possible values: `Scheduled` - This includes all valid past meetings (unexpired), live meetings and upcoming scheduled meetings. It is equivalent to the combined list of `Previous Meetings` and `Upcoming Meetings` displayed in the user's Meetings page on the Zoom Web Portal. `Live` - All the ongoing meetings. `Upcoming` - All upcoming meetings including live meetings.
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getIntegrationsZoom202004UserMeetings(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getIntegrationsZoom202004UserMeetings';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/zoom/202004/users/{userId}/meetings', 
			'GET', 
			{ 'userId': userId },
			{ 'zoomAuthorization': opts['zoomAuthorization'],'type': opts['type'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get settings for a Zoom user.
	 * Get settings for a Zoom user.
	 * @param {String} userId Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.zoomAuthorization Zoom authorization token
	 */
	getIntegrationsZoom202004UserSettings(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getIntegrationsZoom202004UserSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/zoom/202004/users/{userId}/settings', 
			'GET', 
			{ 'userId': userId },
			{ 'zoomAuthorization': opts['zoomAuthorization'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets a Zoom integration auth for the user.
	 * 
	 */
	getIntegrationsZoomAuth() { 

		return this.apiClient.callApi(
			'/api/v2/integrations/zoom/auth', 
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
	 * Update an integration.
	 * 
	 * @param {String} integrationId Integration Id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @param {Object} opts.body Integration Update
	 */
	patchIntegration(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling patchIntegration';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'nextPage': opts['nextPage'],'previousPage': opts['previousPage'] },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Patch an Action
	 * 
	 * @param {String} actionId actionId
	 * @param {Object} body Input used to patch the Action.
	 */
	patchIntegrationsAction(actionId, body) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling patchIntegrationsAction';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchIntegrationsAction';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}', 
			'PATCH', 
			{ 'actionId': actionId },
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
	 * Update an existing Draft
	 * 
	 * @param {String} actionId actionId
	 * @param {Object} body Input used to patch the Action Draft.
	 */
	patchIntegrationsActionDraft(actionId, body) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling patchIntegrationsActionDraft';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchIntegrationsActionDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft', 
			'PATCH', 
			{ 'actionId': actionId },
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
	 * Update a Webhook
	 * 
	 * @param {String} webhookId The id of the webhook
	 * @param {Object} body Webhook Update Fields
	 */
	patchIntegrationsWebhook(webhookId, body) { 
		// verify the required parameter 'webhookId' is set
		if (webhookId === undefined || webhookId === null) {
			throw 'Missing the required parameter "webhookId" when calling patchIntegrationsWebhook';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchIntegrationsWebhook';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/webhooks/{webhookId}', 
			'PATCH', 
			{ 'webhookId': webhookId },
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
	 * Create an integration.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Integration
	 */
	postIntegrations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations', 
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
	 * Create a new Draft from existing Action
	 * 
	 * @param {String} actionId actionId
	 */
	postIntegrationsActionDraft(actionId) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling postIntegrationsActionDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft', 
			'POST', 
			{ 'actionId': actionId },
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
	 * Publish a Draft and make it the active Action configuration
	 * 
	 * @param {String} actionId actionId
	 * @param {Object} body Input used to patch the Action.
	 */
	postIntegrationsActionDraftPublish(actionId, body) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling postIntegrationsActionDraftPublish';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActionDraftPublish';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft/publish', 
			'POST', 
			{ 'actionId': actionId },
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
	 * Test the execution of a draft. Responses will show execution steps broken out with intermediate results to help in debugging.
	 * 
	 * @param {String} actionId actionId
	 * @param {Object.<String, {String: Object}>} body Map of parameters used for variable substitution.
	 */
	postIntegrationsActionDraftTest(actionId, body) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling postIntegrationsActionDraftTest';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActionDraftTest';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft/test', 
			'POST', 
			{ 'actionId': actionId },
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
	 * Execute Action and return response from 3rd party.  Responses will follow the schemas defined on the Action for success and error.
	 * 
	 * @param {String} actionId actionId
	 * @param {Object.<String, {String: Object}>} body Map of parameters used for variable substitution.
	 */
	postIntegrationsActionExecute(actionId, body) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling postIntegrationsActionExecute';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActionExecute';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/execute', 
			'POST', 
			{ 'actionId': actionId },
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
	 * Test the execution of an action. Responses will show execution steps broken out with intermediate results to help in debugging.
	 * 
	 * @param {String} actionId actionId
	 * @param {Object.<String, {String: Object}>} body Map of parameters used for variable substitution.
	 */
	postIntegrationsActionTest(actionId, body) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null) {
			throw 'Missing the required parameter "actionId" when calling postIntegrationsActionTest';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActionTest';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/test', 
			'POST', 
			{ 'actionId': actionId },
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
	 * Create a new Action
	 * 
	 * @param {Object} body Input used to create Action.
	 */
	postIntegrationsActions(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActions';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions', 
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
	 * Create a new Draft
	 * 
	 * @param {Object} body Input used to create Action Draft.
	 */
	postIntegrationsActionsDrafts(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActionsDrafts';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/drafts', 
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
	 * Create a set of credentials
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Credential
	 */
	postIntegrationsCredentials(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/credentials', 
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
	 * Create a Microsoft Teams integration auth for the user.
	 * This attaches a Microsoft Teams OAuth session for your user.  All external calls to Microsoft Teams will be made on behalf of this user.
	 * @param {Object} body integrationAuthRequest
	 */
	postIntegrationsMicrosoftteamsAuth(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsMicrosoftteamsAuth';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/microsoftteams/auth', 
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
	 * Login
	 * 
	 * @param {Object} body 
	 */
	postIntegrationsSalesforceServicecloudvoiceLogin(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsSalesforceServicecloudvoiceLogin';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/salesforce/servicecloudvoice/login', 
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
	 * Create a voice call record in Salesforce
	 * 
	 * @param {Object} body 
	 */
	postIntegrationsSalesforceServicecloudvoiceVoicecallrecord(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsSalesforceServicecloudvoiceVoicecallrecord';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord', 
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
	 * Update a voice call record in Salesforce
	 * 
	 * @param {Object} body 
	 */
	postIntegrationsSalesforceServicecloudvoiceVoicecallrecordUpdate(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsSalesforceServicecloudvoiceVoicecallrecordUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/salesforce/servicecloudvoice/voicecallrecord/update', 
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
	 * Get a Nuance bot in the specified Integration asynchronously
	 * 
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {String} botId The Nuance bot ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 * @param {String} opts.body targetChannel
	 * postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs(nuanceIntegrationId, botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null) {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null) {
			throw 'Missing the required parameter "botId" when calling postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/{botId}/jobs', 
			'POST', 
			{ 'nuanceIntegrationId': nuanceIntegrationId,'botId': botId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of Nuance bots in the specified Integration asynchronously
	 * 
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.onlyRegisteredBots Limit bots to the ones configured for Genesys Cloud usage (default to true)
	 * postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs(nuanceIntegrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null) {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/jobs', 
			'POST', 
			{ 'nuanceIntegrationId': nuanceIntegrationId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'onlyRegisteredBots': opts['onlyRegisteredBots'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Try out a single credential for a Nuance bot to know if the secret is correct
	 * 
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {Object} settings 
	 * postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate(nuanceIntegrationId, settings) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null) {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate';
		}
		// verify the required parameter 'settings' is set
		if (settings === undefined || settings === null) {
			throw 'Missing the required parameter "settings" when calling postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/launch/validate', 
			'POST', 
			{ 'nuanceIntegrationId': nuanceIntegrationId },
			{  },
			{  },
			{  },
			settings, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Creates a 3rd-party integration auth for the user.
	 * 
	 * @param {String} ucIntegrationId UC Integration ID
	 * @param {Object} body integrationAuthRequest
	 */
	postIntegrationsUnifiedcommunicationAuth(ucIntegrationId, body) { 
		// verify the required parameter 'ucIntegrationId' is set
		if (ucIntegrationId === undefined || ucIntegrationId === null) {
			throw 'Missing the required parameter "ucIntegrationId" when calling postIntegrationsUnifiedcommunicationAuth';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsUnifiedcommunicationAuth';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/auth', 
			'POST', 
			{ 'ucIntegrationId': ucIntegrationId },
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
	 * Create a meeting.
	 * Create a meeting.
	 * @param {String} ucIntegrationId 3rd Party Service Type
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postIntegrationsUnifiedcommunicationMeetings(ucIntegrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ucIntegrationId' is set
		if (ucIntegrationId === undefined || ucIntegrationId === null) {
			throw 'Missing the required parameter "ucIntegrationId" when calling postIntegrationsUnifiedcommunicationMeetings';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/meetings', 
			'POST', 
			{ 'ucIntegrationId': ucIntegrationId },
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
	 * Send an email.
	 * Send an email.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postIntegrationsUnifiedcommunicationsEmail(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/email', 
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
	 * Invoke Webhook
	 * 
	 * @param {String} tokenId The token of the webhook to be invoked
	 * @param {Object.<String, {String: Object}>} body Webhook Invocation Payload
	 */
	postIntegrationsWebhookEvents(tokenId, body) { 
		// verify the required parameter 'tokenId' is set
		if (tokenId === undefined || tokenId === null) {
			throw 'Missing the required parameter "tokenId" when calling postIntegrationsWebhookEvents';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsWebhookEvents';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/webhooks/{tokenId}/events', 
			'POST', 
			{ 'tokenId': tokenId },
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
	 * Create Webhook
	 * 
	 * @param {Object} body Create Webhook Request
	 */
	postIntegrationsWebhooks(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsWebhooks';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/webhooks', 
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
	 * Generate a Zoom meeting signature.
	 * Generate a meeting verification signature
	 * @param {String} meetingId Zoom meeting number
	 * @param {String} role Zoom meeting role
	 */
	postIntegrationsZoom202004MeetingSignature(meetingId, role) { 
		// verify the required parameter 'meetingId' is set
		if (meetingId === undefined || meetingId === null) {
			throw 'Missing the required parameter "meetingId" when calling postIntegrationsZoom202004MeetingSignature';
		}
		// verify the required parameter 'role' is set
		if (role === undefined || role === null) {
			throw 'Missing the required parameter "role" when calling postIntegrationsZoom202004MeetingSignature';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/zoom/202004/meetings/{meetingId}/signature', 
			'POST', 
			{ 'meetingId': meetingId },
			{ 'role': role },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create meeting for a Zoom user.
	 * Create a new meeting for a Zoom user.
	 * @param {String} userId Zoom Meetings user ID. Special user ID value `me` returns your own Zoom user data.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body meetingRequest
	 */
	postIntegrationsZoom202004UserMeetings(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling postIntegrationsZoom202004UserMeetings';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/zoom/202004/users/{userId}/meetings', 
			'POST', 
			{ 'userId': userId },
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
	 * Create a Zoom integration auth for the user.
	 * This attaches a Zoom OAuth session for your user.  All external calls to Zoom will be made on behalf of this user.
	 * @param {Object} body integrationAuthRequest
	 */
	postIntegrationsZoomAuth(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsZoomAuth';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/zoom/auth', 
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
	 * Update integration configuration.
	 * 
	 * @param {String} integrationId Integration Id
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Integration Configuration
	 */
	putIntegrationConfigCurrent(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling putIntegrationConfigCurrent';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/{integrationId}/config/current', 
			'PUT', 
			{ 'integrationId': integrationId },
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
	 * Set a list of botConnector bots plus versions for this integration
	 * 
	 * @param {String} integrationId The integration ID for this group of bots
	 * @param {Object} botList 
	 */
	putIntegrationsBotconnectorIntegrationIdBots(integrationId, botList) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling putIntegrationsBotconnectorIntegrationIdBots';
		}
		// verify the required parameter 'botList' is set
		if (botList === undefined || botList === null) {
			throw 'Missing the required parameter "botList" when calling putIntegrationsBotconnectorIntegrationIdBots';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/botconnector/{integrationId}/bots', 
			'PUT', 
			{ 'integrationId': integrationId },
			{  },
			{  },
			{  },
			botList, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a set of credentials
	 * 
	 * @param {String} credentialId Credential ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Credential
	 */
	putIntegrationsCredential(credentialId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'credentialId' is set
		if (credentialId === undefined || credentialId === null) {
			throw 'Missing the required parameter "credentialId" when calling putIntegrationsCredential';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/credentials/{credentialId}', 
			'PUT', 
			{ 'credentialId': credentialId },
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
	 * Update the Nuance bot list for the specific bots made available to Genesys Cloud in the specified Integration
	 * 
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {Object} settings 
	 * putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings(nuanceIntegrationId, settings) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null) {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings';
		}
		// verify the required parameter 'settings' is set
		if (settings === undefined || settings === null) {
			throw 'Missing the required parameter "settings" when calling putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/nuance/{nuanceIntegrationId}/bots/launch/settings', 
			'PUT', 
			{ 'nuanceIntegrationId': nuanceIntegrationId },
			{  },
			{  },
			{  },
			settings, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update TTS settings for an org
	 * 
	 * @param {Object} body Updated TtsSettings
	 */
	putIntegrationsSpeechTtsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIntegrationsSpeechTtsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/tts/settings', 
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
	 * Bulk integration presence ingestion
	 * This endpoint accepts bulk presence updates from a 3rd-party presence integration and maps the 3rd-party user to a Genesys Cloud user via the matching email address. The 3rd-party presence value will be mapped to a Genesys Cloud organization presence definition value.
	 * @param {String} ucIntegrationId UC Integration ID
	 * @param {Array.<Object>} body List of User presences
	 */
	putIntegrationsUnifiedcommunicationThirdpartypresences(ucIntegrationId, body) { 
		// verify the required parameter 'ucIntegrationId' is set
		if (ucIntegrationId === undefined || ucIntegrationId === null) {
			throw 'Missing the required parameter "ucIntegrationId" when calling putIntegrationsUnifiedcommunicationThirdpartypresences';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIntegrationsUnifiedcommunicationThirdpartypresences';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/unifiedcommunications/{ucIntegrationId}/thirdpartypresences', 
			'PUT', 
			{ 'ucIntegrationId': ucIntegrationId },
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
	 * Add/replace Webhook Schema on a Webhook
	 * 
	 * @param {String} webhookId The id of the webhook that the schema belongs to
	 * @param {Object} body WebhookSchema
	 */
	putIntegrationsWebhookSchema(webhookId, body) { 
		// verify the required parameter 'webhookId' is set
		if (webhookId === undefined || webhookId === null) {
			throw 'Missing the required parameter "webhookId" when calling putIntegrationsWebhookSchema';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIntegrationsWebhookSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/webhooks/{webhookId}/schema', 
			'PUT', 
			{ 'webhookId': webhookId },
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


export default IntegrationsApi;
