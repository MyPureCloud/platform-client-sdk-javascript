import ApiClient from '../ApiClient.js';


class IntegrationsApi {
	/**
	 * Integrations service.
	 * @module purecloud-platform-client-v2/api/IntegrationsApi
	 * @version 225.0.0
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
		if (actionId === undefined || actionId === null || actionId === '') {
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
		if (actionId === undefined || actionId === null || actionId === '') {
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
		if (credentialId === undefined || credentialId === null || credentialId === '') {
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * @param {Object} opts.flatten Indicates the response should be reformatted, based on Architect's flattening format. (default to false)
	 * @param {Object} opts.includeConfig Return config in response. (default to false)
	 */
	getIntegrationsAction(actionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsAction';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}', 
			'GET', 
			{ 'actionId': actionId },
			{ 'expand': opts['expand'],'flatten': opts['flatten'],'includeConfig': opts['includeConfig'] },
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
	 * @param {Object} opts.flatten Indicates the response should be reformatted, based on Architect's flattening format. (default to false)
	 * @param {Object} opts.includeConfig Return config in response. (default to false)
	 */
	getIntegrationsActionDraft(actionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft', 
			'GET', 
			{ 'actionId': actionId },
			{ 'expand': opts['expand'],'flatten': opts['flatten'],'includeConfig': opts['includeConfig'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get draft function settings for Action
	 * 
	 * @param {String} actionId actionId
	 */
	getIntegrationsActionDraftFunction(actionId) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionDraftFunction';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft/function', 
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
	 * Retrieve schema for a Draft based on filename.
	 * 
	 * @param {String} actionId actionId
	 * @param {String} fileName Name of schema file to be retrieved for this draft.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.flatten Indicates the response should be reformatted, based on Architect's flattening format. (default to false)
	 */
	getIntegrationsActionDraftSchema(actionId, fileName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionDraftSchema';
		}
		// verify the required parameter 'fileName' is set
		if (fileName === undefined || fileName === null || fileName === '') {
			throw 'Missing the required parameter "fileName" when calling getIntegrationsActionDraftSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft/schemas/{fileName}', 
			'GET', 
			{ 'actionId': actionId,'fileName': fileName },
			{ 'flatten': opts['flatten'] },
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
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionDraftTemplate';
		}
		// verify the required parameter 'fileName' is set
		if (fileName === undefined || fileName === null || fileName === '') {
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
		if (actionId === undefined || actionId === null || actionId === '') {
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
	 * Get published function settings for Action
	 * 
	 * @param {String} actionId actionId
	 */
	getIntegrationsActionFunction(actionId) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionFunction';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/function', 
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
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.flatten Indicates the response should be reformatted, based on Architect's flattening format. (default to false)
	 */
	getIntegrationsActionSchema(actionId, fileName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionSchema';
		}
		// verify the required parameter 'fileName' is set
		if (fileName === undefined || fileName === null || fileName === '') {
			throw 'Missing the required parameter "fileName" when calling getIntegrationsActionSchema';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/schemas/{fileName}', 
			'GET', 
			{ 'actionId': actionId,'fileName': fileName },
			{ 'flatten': opts['flatten'] },
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
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling getIntegrationsActionTemplate';
		}
		// verify the required parameter 'fileName' is set
		if (fileName === undefined || fileName === null || fileName === '') {
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
	 * Retrieves the available mTLS client certificates in use. This endpoint will return inconsistent results while a certificate rotation is in progress.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.status Indicates the validity of the certificate in question.
	 * @param {Object} opts.type Indicates the type of the certificate.
	 */
	getIntegrationsActionsCertificates(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/certificates', 
			'GET', 
			{  },
			{ 'status': opts['status'],'type': opts['type'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves basic info about trusted root CA certificates
	 * 
	 */
	getIntegrationsActionsCertificatesTruststore() { 

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/certificates/truststore', 
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
	 * Get action function settings for Action
	 * 
	 */
	getIntegrationsActionsFunctionsRuntimes() { 

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/functions/runtimes', 
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
	 * Get a specific Bot details
	 * 
	 * @param {String} integrationId The integration ID for this group of bots
	 * @param {String} botId The bot ID for this bot
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.version Specific Version
	 * getIntegrationsBotconnectorBot is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getIntegrationsBotconnectorBot(integrationId, botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationsBotconnectorBot';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null || botId === '') {
			throw 'Missing the required parameter "botId" when calling getIntegrationsBotconnectorBot';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/botconnectors/{integrationId}/bots/{botId}', 
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
	 * Get the list of bots for this integration.
	 * 
	 * @param {String} integrationId The integration ID for this group of bots.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * getIntegrationsBotconnectorBots is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getIntegrationsBotconnectorBots(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationsBotconnectorBots';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/botconnectors/{integrationId}/bots', 
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
	 * Get the summary list of bots for this integration.
	 * 
	 * @param {String} integrationId The integration ID for this group of bots.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * getIntegrationsBotconnectorBotsSummaries is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getIntegrationsBotconnectorBotsSummaries(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationsBotconnectorBotsSummaries';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/botconnectors/{integrationId}/bots/summaries', 
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationsBotconnectorIntegrationIdBot';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null || botId === '') {
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationsBotconnectorIntegrationIdBotVersions';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null || botId === '') {
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Deprecated: Please use GET /integrations/unifiedcommunications/clientapps instead. This endpoint returns basic UI configuration data for all Unified Communications integrations client applications enabled for the current organization.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Array.<String>} opts.expand variable name requested by expand list
	 * @param {String} opts.nextPage next page token
	 * @param {String} opts.previousPage Previous page token
	 * @deprecated
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
		if (credentialId === undefined || credentialId === null || credentialId === '') {
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
	 * List multiple sets of credentials using cursor-based paging
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 */
	getIntegrationsCredentialsListing(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/credentials/listing', 
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
	 * Get a list of Audio Connector integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getIntegrationsSpeechAudioconnector(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/audioconnector', 
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
	 * Get an Audio Connector integration
	 * 
	 * @param {String} integrationId The integration ID
	 */
	getIntegrationsSpeechAudioconnectorIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
			throw 'Missing the required parameter "integrationId" when calling getIntegrationsSpeechAudioconnectorIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/speech/audioconnector/{integrationId}', 
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
	 * Get details about a Dialogflow agent
	 * 
	 * @param {String} agentId The agent ID
	 */
	getIntegrationsSpeechDialogflowAgent(agentId) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
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
		if (agentId === undefined || agentId === null || agentId === '') {
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
		if (aliasId === undefined || aliasId === null || aliasId === '') {
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
		if (botId === undefined || botId === null || botId === '') {
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
		if (aliasId === undefined || aliasId === null || aliasId === '') {
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
		if (botId === undefined || botId === null || botId === '') {
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
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBot(nuanceIntegrationId, botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null || nuanceIntegrationId === '') {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBot';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null || botId === '') {
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
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob(nuanceIntegrationId, botId, jobId) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null || nuanceIntegrationId === '') {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null || botId === '') {
			throw 'Missing the required parameter "botId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults(nuanceIntegrationId, botId, jobId) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null || nuanceIntegrationId === '') {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null || botId === '') {
			throw 'Missing the required parameter "botId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotJobResults';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBots(nuanceIntegrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null || nuanceIntegrationId === '') {
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
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob(nuanceIntegrationId, jobId) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null || nuanceIntegrationId === '') {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
	 */
	getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults(nuanceIntegrationId, jobId) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null || nuanceIntegrationId === '') {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling getIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobResults';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
		if (engineId === undefined || engineId === null || engineId === '') {
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
		if (engineId === undefined || engineId === null || engineId === '') {
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
		if (engineId === undefined || engineId === null || engineId === '') {
			throw 'Missing the required parameter "engineId" when calling getIntegrationsSpeechTtsEngineVoice';
		}
		// verify the required parameter 'voiceId' is set
		if (voiceId === undefined || voiceId === null || voiceId === '') {
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
		if (engineId === undefined || engineId === null || engineId === '') {
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
		if (typeId === undefined || typeId === null || typeId === '') {
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
		if (typeId === undefined || typeId === null || typeId === '') {
			throw 'Missing the required parameter "typeId" when calling getIntegrationsTypeConfigschema';
		}
		// verify the required parameter 'configType' is set
		if (configType === undefined || configType === null || configType === '') {
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
	 * UC integration client application configuration.
	 * This endpoint returns basic UI configuration data for the specified Unified Communications integration client application.
	 * @param {String} ucIntegrationId 3rd Party Service Type
	 */
	getIntegrationsUnifiedcommunicationsClientapp(ucIntegrationId) { 
		// verify the required parameter 'ucIntegrationId' is set
		if (ucIntegrationId === undefined || ucIntegrationId === null || ucIntegrationId === '') {
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
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
		if (actionId === undefined || actionId === null || actionId === '') {
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
		if (actionId === undefined || actionId === null || actionId === '') {
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
		if (actionId === undefined || actionId === null || actionId === '') {
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
	 * Create upload presigned URL for draft function package file.
	 * 
	 * @param {String} actionId actionId
	 * @param {Object} body Input used to request URL upload.
	 */
	postIntegrationsActionDraftFunctionUpload(actionId, body) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling postIntegrationsActionDraftFunctionUpload';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActionDraftFunctionUpload';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft/function/upload', 
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
	 * Publish a Draft and make it the active Action configuration
	 * 
	 * @param {String} actionId actionId
	 * @param {Object} body Input used to patch the Action.
	 */
	postIntegrationsActionDraftPublish(actionId, body) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
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
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.flatten Indicates the response should be reformatted, based on Architect's flattening format. (default to false)
	 */
	postIntegrationsActionDraftTest(actionId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
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
			{ 'flatten': opts['flatten'] },
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
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.flatten Indicates the response should be reformatted, based on Architect's flattening format. (default to false)
	 */
	postIntegrationsActionExecute(actionId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
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
			{ 'flatten': opts['flatten'] },
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
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.flatten Indicates the response should be reformatted, based on Architect's flattening format. (default to false)
	 */
	postIntegrationsActionTest(actionId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
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
			{ 'flatten': opts['flatten'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a new Action. Not supported for 'Function Integration' actions. Function integrations must be created as drafts to allow managing of uploading required ZIP function package before they may be used as a published action.
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
	 * Send an incoming message to the bot.
	 * 
	 * @param {Object} body Incoming Message Request
	 * postIntegrationsBotconnectorsIncomingMessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postIntegrationsBotconnectorsIncomingMessages(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsBotconnectorsIncomingMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/botconnectors/incoming/messages', 
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
	 * Send an outgoing message to the end user.
	 * 
	 * @param {Object} body Outgoing Message Request
	 * postIntegrationsBotconnectorsOutgoingMessages is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postIntegrationsBotconnectorsOutgoingMessages(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsBotconnectorsOutgoingMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/botconnectors/outgoing/messages', 
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
	 * Get a Nuance bot in the specified Integration asynchronously
	 * 
	 * @param {String} nuanceIntegrationId The integration ID for this group of bots
	 * @param {String} botId The Nuance bot ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 * @param {String} opts.body targetChannel
	 */
	postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs(nuanceIntegrationId, botId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null || nuanceIntegrationId === '') {
			throw 'Missing the required parameter "nuanceIntegrationId" when calling postIntegrationsSpeechNuanceNuanceIntegrationIdBotJobs';
		}
		// verify the required parameter 'botId' is set
		if (botId === undefined || botId === null || botId === '') {
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
	 */
	postIntegrationsSpeechNuanceNuanceIntegrationIdBotsJobs(nuanceIntegrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null || nuanceIntegrationId === '') {
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
	 */
	postIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchValidate(nuanceIntegrationId, settings) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null || nuanceIntegrationId === '') {
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
	 * Invoke Webhook
	 * 
	 * @param {String} tokenId The token of the webhook to be invoked
	 * @param {Object.<String, {String: Object}>} body Webhook Invocation Payload
	 */
	postIntegrationsWebhookEvents(tokenId, body) { 
		// verify the required parameter 'tokenId' is set
		if (tokenId === undefined || tokenId === null || tokenId === '') {
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
	 * Update integration configuration.
	 * 
	 * @param {String} integrationId Integration Id
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Integration Configuration
	 */
	putIntegrationConfigCurrent(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
	 * Update draft function settings.
	 * 
	 * @param {String} actionId actionId
	 * @param {Object} body Input used to update function settings.
	 */
	putIntegrationsActionDraftFunction(actionId, body) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling putIntegrationsActionDraftFunction';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putIntegrationsActionDraftFunction';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft/function', 
			'PUT', 
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
	 * Set a list of botConnector bots plus versions for this integration
	 * 
	 * @param {String} integrationId The integration ID for this group of bots
	 * @param {Object} botList 
	 */
	putIntegrationsBotconnectorIntegrationIdBots(integrationId, botList) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null || integrationId === '') {
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
		if (credentialId === undefined || credentialId === null || credentialId === '') {
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
	 */
	putIntegrationsSpeechNuanceNuanceIntegrationIdBotsLaunchSettings(nuanceIntegrationId, settings) { 
		// verify the required parameter 'nuanceIntegrationId' is set
		if (nuanceIntegrationId === undefined || nuanceIntegrationId === null || nuanceIntegrationId === '') {
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
		if (ucIntegrationId === undefined || ucIntegrationId === null || ucIntegrationId === '') {
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

}


export default IntegrationsApi;
