import ApiClient from '../ApiClient.js';


class MessagingApi {
	/**
	 * Messaging service.
	 * @module purecloud-platform-client-v2/api/MessagingApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new MessagingApi. 
	 * @alias module:purecloud-platform-client-v2/api/MessagingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @deprecated
	 */
	deleteMessagingIntegrationsFacebookIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteMessagingIntegrationsFacebookIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/facebook/{integrationId}', 
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
	 * Delete a LINE messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @deprecated
	 */
	deleteMessagingIntegrationsLineIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteMessagingIntegrationsLineIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/line/{integrationId}', 
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
	 * Delete an Open messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @deprecated
	 */
	deleteMessagingIntegrationsOpenIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteMessagingIntegrationsOpenIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/open/{integrationId}', 
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
	 * Delete a Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @deprecated
	 */
	deleteMessagingIntegrationsTwitterIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteMessagingIntegrationsTwitterIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/twitter/{integrationId}', 
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
	 * Delete a WhatsApp messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @deprecated
	 */
	deleteMessagingIntegrationsWhatsappIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling deleteMessagingIntegrationsWhatsappIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/whatsapp/{integrationId}', 
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
	 * Delete a messaging setting
	 * 
	 * @param {String} messageSettingId Message Settings ID
	 * @deprecated
	 */
	deleteMessagingSetting(messageSettingId) { 
		// verify the required parameter 'messageSettingId' is set
		if (messageSettingId === undefined || messageSettingId === null) {
			throw 'Missing the required parameter "messageSettingId" when calling deleteMessagingSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/settings/{messageSettingId}', 
			'DELETE', 
			{ 'messageSettingId': messageSettingId },
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
	 * Delete the organization's default setting, a global default will be applied to integrations without settings
	 * When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be applied to it.
	 * @deprecated
	 */
	deleteMessagingSettingsDefault() { 

		return this.apiClient.callApi(
			'/api/v2/messaging/settings/default', 
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
	 * Deprovision a Longcode.
	 * 
	 * @param {String} longCode Longcode in international format.
	 */
	deleteMessagingSmsProvisioningLongcode(longCode) { 
		// verify the required parameter 'longCode' is set
		if (longCode === undefined || longCode === null) {
			throw 'Missing the required parameter "longCode" when calling deleteMessagingSmsProvisioningLongcode';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/longcodes/{longCode}', 
			'DELETE', 
			{ 'longCode': longCode },
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
	 * Deprovision a Simulated Number.
	 * 
	 * @param {String} senderId The Number to be deleted
	 */
	deleteMessagingSmsProvisioningSimulatedSenderId(senderId) { 
		// verify the required parameter 'senderId' is set
		if (senderId === undefined || senderId === null) {
			throw 'Missing the required parameter "senderId" when calling deleteMessagingSmsProvisioningSimulatedSenderId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/simulated/{senderId}', 
			'DELETE', 
			{ 'senderId': senderId },
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
	 * Deprovision a Tollfree Number.
	 * 
	 * @param {String} tollfreeNumberCode Tollfree Number in international format. For ex 18445551212
	 */
	deleteMessagingSmsProvisioningTollfreenumber(tollfreeNumberCode) { 
		// verify the required parameter 'tollfreeNumberCode' is set
		if (tollfreeNumberCode === undefined || tollfreeNumberCode === null) {
			throw 'Missing the required parameter "tollfreeNumberCode" when calling deleteMessagingSmsProvisioningTollfreenumber';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/tollfreenumbers/{tollfreeNumberCode}', 
			'DELETE', 
			{ 'tollfreeNumberCode': tollfreeNumberCode },
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
	 * Delete a supported content profile
	 * Deprecated - use DELETE /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement
	 * @param {String} supportedContentId Supported Content ID
	 * @deprecated
	 */
	deleteMessagingSupportedcontentSupportedContentId(supportedContentId) { 
		// verify the required parameter 'supportedContentId' is set
		if (supportedContentId === undefined || supportedContentId === null) {
			throw 'Missing the required parameter "supportedContentId" when calling deleteMessagingSupportedcontentSupportedContentId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/supportedcontent/{supportedContentId}', 
			'DELETE', 
			{ 'supportedContentId': supportedContentId },
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
	 * Get Messaging Facebook App Id
	 * 
	 * @deprecated
	 */
	getMessagingFacebookApp() { 

		return this.apiClient.callApi(
			'/api/v2/messaging/facebook/app', 
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
	 * Retrieves the status of the job to retrieve an integration's public message. This API will return either a status code of 202 (to indicate that the request is still being processed), or 200 (when the requested public message becomes available).
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {String} messageId Message ID
	 * @param {String} queryId Query ID
	 * @deprecated
	 */
	getMessagingIntegrationMessageQueryQueryId(integrationId, messageId, queryId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationMessageQueryQueryId';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getMessagingIntegrationMessageQueryQueryId';
		}
		// verify the required parameter 'queryId' is set
		if (queryId === undefined || queryId === null) {
			throw 'Missing the required parameter "queryId" when calling getMessagingIntegrationMessageQueryQueryId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query/{queryId}', 
			'GET', 
			{ 'integrationId': integrationId,'messageId': messageId,'queryId': queryId },
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
	 * Retrieves the results of the job to retrieve an integration's public message. Note that the public message will be cached up to 10 minutes from the first query request, and the same query requests after that period will force the query request to be reprocessed.
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {String} messageId Message ID
	 * @param {String} queryId Query ID
	 * @deprecated
	 */
	getMessagingIntegrationMessageQueryQueryIdResults(integrationId, messageId, queryId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationMessageQueryQueryIdResults';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getMessagingIntegrationMessageQueryQueryIdResults';
		}
		// verify the required parameter 'queryId' is set
		if (queryId === undefined || queryId === null) {
			throw 'Missing the required parameter "queryId" when calling getMessagingIntegrationMessageQueryQueryIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query/{queryId}/results', 
			'GET', 
			{ 'integrationId': integrationId,'messageId': messageId,'queryId': queryId },
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
	 * Retrieves the status of the job to retrieve replies to an integration's public message. This API will return either a status code of 202 (to indicate that the request is still being processed), or 200 (when the requested replies to the public message becomes available).
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {String} messageId Message ID
	 * @param {String} queryId Query ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @deprecated
	 */
	getMessagingIntegrationMessageRepliesQueryQueryId(integrationId, messageId, queryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationMessageRepliesQueryQueryId';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getMessagingIntegrationMessageRepliesQueryQueryId';
		}
		// verify the required parameter 'queryId' is set
		if (queryId === undefined || queryId === null) {
			throw 'Missing the required parameter "queryId" when calling getMessagingIntegrationMessageRepliesQueryQueryId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query/{queryId}', 
			'GET', 
			{ 'integrationId': integrationId,'messageId': messageId,'queryId': queryId },
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
	 * Retrieves the results of the job to retrieve replies to an integration's public message. Note that the replies to the public message will be cached up to 10 minutes from the first query request, and the same query requests after that period will force the query request to be reprocessed.
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {String} messageId Message ID
	 * @param {String} queryId Query ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @deprecated
	 */
	getMessagingIntegrationMessageRepliesQueryQueryIdResults(integrationId, messageId, queryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationMessageRepliesQueryQueryIdResults';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling getMessagingIntegrationMessageRepliesQueryQueryIdResults';
		}
		// verify the required parameter 'queryId' is set
		if (queryId === undefined || queryId === null) {
			throw 'Missing the required parameter "queryId" when calling getMessagingIntegrationMessageRepliesQueryQueryIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query/{queryId}/results', 
			'GET', 
			{ 'integrationId': integrationId,'messageId': messageId,'queryId': queryId },
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
	 * Get a list of Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @param {String} opts.supportedContentId Filter integrations returned based on the supported content ID
	 * @deprecated
	 */
	getMessagingIntegrations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'supportedContent.id': opts['supportedContentId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @deprecated
	 */
	getMessagingIntegrationsFacebookIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationsFacebookIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/facebook/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a LINE messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @deprecated
	 */
	getMessagingIntegrationsLineIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationsLineIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/line/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get an Open messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @deprecated
	 */
	getMessagingIntegrationsOpenIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationsOpenIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/open/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @deprecated
	 */
	getMessagingIntegrationsTwitterIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationsTwitterIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/twitter/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a WhatsApp messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 * @deprecated
	 */
	getMessagingIntegrationsWhatsappIntegrationId(integrationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationsWhatsappIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/whatsapp/{integrationId}', 
			'GET', 
			{ 'integrationId': integrationId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a messaging setting
	 * 
	 * @param {String} messageSettingId Message Settings ID
	 * @deprecated
	 */
	getMessagingSetting(messageSettingId) { 
		// verify the required parameter 'messageSettingId' is set
		if (messageSettingId === undefined || messageSettingId === null) {
			throw 'Missing the required parameter "messageSettingId" when calling getMessagingSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/settings/{messageSettingId}', 
			'GET', 
			{ 'messageSettingId': messageSettingId },
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
	 * Get a list of messaging settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @deprecated
	 */
	getMessagingSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/settings', 
			'GET', 
			{  },
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
	 * Get the organization's default settings that will be used as the default when creating an integration.
	 * When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be applied to it.
	 * @deprecated
	 */
	getMessagingSettingsDefault() { 

		return this.apiClient.callApi(
			'/api/v2/messaging/settings/default', 
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
	 * List longcodes provisioned for this user
	 * 
	 */
	getMessagingSmsProvisioningLongcodes() { 

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/longcodes', 
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
	 * Search for Longcodes
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.numberOfResults The number of search results to return. Returns a maximum of 100 results. (default to 10)
	 * @param {String} opts.longCode Longcode in international format. For example 17035551212
	 * @param {Number} opts.areaCode Area code or NPA. The allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits. Can be used with nxx, city, state and postalCode.
	 * @param {Number} opts.exchangeCode NXX or Exchange. The allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits. Must be used with area_code, city, state and postalCode.
	 * @param {String} opts.country Ony US and CA supported at this time. Can be used with city, state and postalCode.\\nFuture: 2 letter country code - https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.
	 * @param {String} opts.state State or Province. Can be used with areaCode, nxx, city and postalCode.
	 * @param {String} opts.city City or Town. Can be used with areaCode, nxx, state and postalCode.
	 * @param {String} opts.postalCode Postal Code. Can be used with areaCode, nxx, city and state.
	 * @param {String} opts.vanity 4 to 7 alpha-numeric vanity characters. Must be used with area_code. Can be used with ends_with. Will match anywhere in numbers unless used together with ends_with.
	 * @param {String} opts.endsWith Matches the vanity characters at the end of the number. Must be used with vanity.
	 */
	getMessagingSmsProvisioningLongcodesAvailable(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/longcodes/available', 
			'GET', 
			{  },
			{ 'numberOfResults': opts['numberOfResults'],'longCode': opts['longCode'],'areaCode': opts['areaCode'],'exchangeCode': opts['exchangeCode'],'country': opts['country'],'state': opts['state'],'city': opts['city'],'postalCode': opts['postalCode'],'vanity': opts['vanity'],'endsWith': opts['endsWith'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get details for an order.
	 * 
	 * @param {String} orderId Unique id for order.
	 */
	getMessagingSmsProvisioningOrder(orderId) { 
		// verify the required parameter 'orderId' is set
		if (orderId === undefined || orderId === null) {
			throw 'Missing the required parameter "orderId" when calling getMessagingSmsProvisioningOrder';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/orders/{orderId}', 
			'GET', 
			{ 'orderId': orderId },
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
	 * List Simulated Numbers provisioned for this org.
	 * 
	 */
	getMessagingSmsProvisioningSimulated() { 

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/simulated', 
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
	 * List details of a Simulated Number.
	 * 
	 * @param {String} senderId The SenderId.
	 */
	getMessagingSmsProvisioningSimulatedSenderId(senderId) { 
		// verify the required parameter 'senderId' is set
		if (senderId === undefined || senderId === null) {
			throw 'Missing the required parameter "senderId" when calling getMessagingSmsProvisioningSimulatedSenderId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/simulated/{senderId}', 
			'GET', 
			{ 'senderId': senderId },
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
	 * List tollfree numbers provisioned for this user
	 * 
	 */
	getMessagingSmsProvisioningTollfreenumbers() { 

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/tollfreenumbers', 
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
	 * Search for Tollfree Numbers
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.numberOfResults The number of search results to return. Returns a maximum of 100 results. (default to 10)
	 * @param {String} opts.vanity 4 to 7 alpha-numeric vanity characters.
	 */
	getMessagingSmsProvisioningTollfreenumbersAvailable(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/tollfreenumbers/available', 
			'GET', 
			{  },
			{ 'numberOfResults': opts['numberOfResults'],'vanity': opts['vanity'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of Supported Content profiles
	 * Deprecated - use GET /api/v2/conversations/messaging/supportedcontent as replacement
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @deprecated
	 */
	getMessagingSupportedcontent(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/supportedcontent', 
			'GET', 
			{  },
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
	 * Get a supported content profile
	 * Deprecated - use GET /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement
	 * @param {String} supportedContentId Supported Content ID
	 * @deprecated
	 */
	getMessagingSupportedcontentSupportedContentId(supportedContentId) { 
		// verify the required parameter 'supportedContentId' is set
		if (supportedContentId === undefined || supportedContentId === null) {
			throw 'Missing the required parameter "supportedContentId" when calling getMessagingSupportedcontentSupportedContentId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/supportedcontent/{supportedContentId}', 
			'GET', 
			{ 'supportedContentId': supportedContentId },
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
	 * Update a Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body PlatformFacebookIntegrationPatchRequest
	 * @deprecated
	 */
	patchMessagingIntegrationsFacebookIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling patchMessagingIntegrationsFacebookIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchMessagingIntegrationsFacebookIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/facebook/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId },
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
	 * Update a LINE messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body PlatformLineIntegrationPatchRequest
	 * @deprecated
	 */
	patchMessagingIntegrationsLineIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling patchMessagingIntegrationsLineIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchMessagingIntegrationsLineIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/line/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId },
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
	 * Update an Open messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body PlatformOpenIntegrationPatchRequest
	 * @deprecated
	 */
	patchMessagingIntegrationsOpenIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling patchMessagingIntegrationsOpenIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchMessagingIntegrationsOpenIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/open/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId },
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
	 * Update a Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body PlatformTwitterIntegrationPatchRequest
	 * @deprecated
	 */
	patchMessagingIntegrationsTwitterIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling patchMessagingIntegrationsTwitterIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchMessagingIntegrationsTwitterIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/twitter/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId },
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
	 * Activate, confirm or update a WhatsApp messaging integration.
	 * The following steps are required in order to fully activate a Whatsapp Integration: Initially, you will need to get an activation code by sending: an authentication method choosing from sms or voice, a phone number and a verifiedNameCertificate(WhatsApp Business Manager Certificate) of the whatsApp integration. Once you have been informed of an activation code on selected authenticationMethod, you will need to confirm the code by sending: the confirmation code you have received from Whatsapp.
	 * @param {String} integrationId Integration ID
	 * @param {Object} body PlatformWhatsAppIntegrationPatchRequest
	 * @deprecated
	 */
	patchMessagingIntegrationsWhatsappIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling patchMessagingIntegrationsWhatsappIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchMessagingIntegrationsWhatsappIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/whatsapp/{integrationId}', 
			'PATCH', 
			{ 'integrationId': integrationId },
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
	 * Update a messaging setting
	 * 
	 * @param {String} messageSettingId Message Settings ID
	 * @param {Object} body MessagingSetting
	 * @deprecated
	 */
	patchMessagingSetting(messageSettingId, body) { 
		// verify the required parameter 'messageSettingId' is set
		if (messageSettingId === undefined || messageSettingId === null) {
			throw 'Missing the required parameter "messageSettingId" when calling patchMessagingSetting';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchMessagingSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/settings/{messageSettingId}', 
			'PATCH', 
			{ 'messageSettingId': messageSettingId },
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
	 * Update a Longcode
	 * Can be used to reassign to another account. Cannot be used to deprovision - use delete instead.
	 * @param {String} longCode Longcode in international format.
	 * @param {Object} request The new longcode details
	 */
	patchMessagingSmsProvisioningLongcode(longCode, request) { 
		// verify the required parameter 'longCode' is set
		if (longCode === undefined || longCode === null) {
			throw 'Missing the required parameter "longCode" when calling patchMessagingSmsProvisioningLongcode';
		}
		// verify the required parameter 'request' is set
		if (request === undefined || request === null) {
			throw 'Missing the required parameter "request" when calling patchMessagingSmsProvisioningLongcode';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/longcodes/{longCode}', 
			'PATCH', 
			{ 'longCode': longCode },
			{  },
			{  },
			{  },
			request, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a Simulated Number
	 * Cannot be used to deprovision - use delete instead.
	 * @param {String} senderId The Number to be modified
	 * @param {Object} request The new Simulated Number details
	 */
	patchMessagingSmsProvisioningSimulatedSenderId(senderId, request) { 
		// verify the required parameter 'senderId' is set
		if (senderId === undefined || senderId === null) {
			throw 'Missing the required parameter "senderId" when calling patchMessagingSmsProvisioningSimulatedSenderId';
		}
		// verify the required parameter 'request' is set
		if (request === undefined || request === null) {
			throw 'Missing the required parameter "request" when calling patchMessagingSmsProvisioningSimulatedSenderId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/simulated/{senderId}', 
			'PATCH', 
			{ 'senderId': senderId },
			{  },
			{  },
			{  },
			request, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a Tollfree Number
	 * Can be used to reassign to another account. Cannot be used to deprovision - use delete instead.
	 * @param {String} tollfreeNumberCode Tollfree Number in international format. For ex 18445551212
	 * @param {Object} request The new Tollfree Number details
	 */
	patchMessagingSmsProvisioningTollfreenumber(tollfreeNumberCode, request) { 
		// verify the required parameter 'tollfreeNumberCode' is set
		if (tollfreeNumberCode === undefined || tollfreeNumberCode === null) {
			throw 'Missing the required parameter "tollfreeNumberCode" when calling patchMessagingSmsProvisioningTollfreenumber';
		}
		// verify the required parameter 'request' is set
		if (request === undefined || request === null) {
			throw 'Missing the required parameter "request" when calling patchMessagingSmsProvisioningTollfreenumber';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/tollfreenumbers/{tollfreeNumberCode}', 
			'PATCH', 
			{ 'tollfreeNumberCode': tollfreeNumberCode },
			{  },
			{  },
			{  },
			request, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a supported content profile
	 * Deprecated - use PATCH /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement
	 * @param {String} supportedContentId Supported Content ID
	 * @param {Object} body SupportedContent
	 * @deprecated
	 */
	patchMessagingSupportedcontentSupportedContentId(supportedContentId, body) { 
		// verify the required parameter 'supportedContentId' is set
		if (supportedContentId === undefined || supportedContentId === null) {
			throw 'Missing the required parameter "supportedContentId" when calling patchMessagingSupportedcontentSupportedContentId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchMessagingSupportedcontentSupportedContentId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/supportedcontent/{supportedContentId}', 
			'PATCH', 
			{ 'supportedContentId': supportedContentId },
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
	 * Send an email
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postMessagingEmail(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/email', 
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
	 * Send emails
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postMessagingEmailBulk(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/email/bulk', 
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
	 * Post message action
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {String} messageId Message ID
	 * @param {Object} body Public message action
	 * @deprecated
	 */
	postMessagingIntegrationMessageAction(integrationId, messageId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling postMessagingIntegrationMessageAction';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling postMessagingIntegrationMessageAction';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingIntegrationMessageAction';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/action', 
			'POST', 
			{ 'integrationId': integrationId,'messageId': messageId },
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
	 * Starts the job to retrieve an integration's public message.
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {String} messageId Message ID
	 * @deprecated
	 */
	postMessagingIntegrationMessageQuery(integrationId, messageId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling postMessagingIntegrationMessageQuery';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling postMessagingIntegrationMessageQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/query', 
			'POST', 
			{ 'integrationId': integrationId,'messageId': messageId },
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
	 * Starts the job to retrieve replies to an integration's public message.
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {String} messageId Message ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @deprecated
	 */
	postMessagingIntegrationMessageRepliesQuery(integrationId, messageId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling postMessagingIntegrationMessageRepliesQuery';
		}
		// verify the required parameter 'messageId' is set
		if (messageId === undefined || messageId === null) {
			throw 'Missing the required parameter "messageId" when calling postMessagingIntegrationMessageRepliesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/{integrationId}/messages/{messageId}/replies/query', 
			'POST', 
			{ 'integrationId': integrationId,'messageId': messageId },
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
	 * Send message
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body Message
	 * @deprecated
	 */
	postMessagingIntegrationMessages(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling postMessagingIntegrationMessages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingIntegrationMessages';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/{integrationId}/messages', 
			'POST', 
			{ 'integrationId': integrationId },
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
	 * Create a Facebook Integration
	 * 
	 * @param {Object} body PlatformFacebookIntegrationRequest
	 * @deprecated
	 */
	postMessagingIntegrationsFacebook(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingIntegrationsFacebook';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/facebook', 
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
	 * Create a LINE messenger Integration
	 * 
	 * @param {Object} body PlatformLineIntegrationRequest
	 * @deprecated
	 */
	postMessagingIntegrationsLine(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingIntegrationsLine';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/line', 
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
	 * Create an Open messenger Integration
	 * 
	 * @param {Object} body PlatformOpenIntegrationRequest
	 * @deprecated
	 */
	postMessagingIntegrationsOpen(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingIntegrationsOpen';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/open', 
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
	 * Create a Twitter Integration
	 * 
	 * @param {Object} body PlatformTwitterIntegrationRequest
	 * @deprecated
	 */
	postMessagingIntegrationsTwitter(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingIntegrationsTwitter';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/twitter', 
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
	 * Creates presigned url for uploading messaging attachment
	 * 
	 * @param {Object} body query
	 * @deprecated
	 */
	postMessagingIntegrationsUploads(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingIntegrationsUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/uploads', 
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
	 * Create a WhatsApp Integration
	 * 
	 * @param {Object} body PlatformWhatsAppIntegrationRequest
	 * @deprecated
	 */
	postMessagingIntegrationsWhatsapp(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingIntegrationsWhatsapp';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/whatsapp', 
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
	 * Send an inbound Open Message
	 * Send an inbound message. See https://developer.genesys.cloud/api/digital/openmessaging/ for example usage.
	 * @param {Object} body NormalizedMessage
	 * @deprecated
	 */
	postMessagingMessagesInboundOpen(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingMessagesInboundOpen';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/messages/inbound/open', 
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
	 * Create a messaging setting
	 * 
	 * @param {Object} body MessagingSetting
	 * @deprecated
	 */
	postMessagingSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/settings', 
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
	 * Send an SMS message
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postMessagingSms(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/sms', 
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
	 * Send SMS messages
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postMessagingSmsBulk(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/bulk', 
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
	 * Provision new Longcode(s). Use orderId returned by this method to check status.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postMessagingSmsProvisioningLongcodes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/longcodes', 
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
	 * Port in Longcode(s). Use orderId returned by this method to check status.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postMessagingSmsProvisioningLongcodesPortin(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/longcodes/portin', 
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
	 * Provision Simulated Number(s). Use orderId returned by this method to check status.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postMessagingSmsProvisioningSimulated(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/simulated', 
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
	 * Provision Tollfree Number(s). Use orderId returned by this method to check status.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postMessagingSmsProvisioningTollfreenumbers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/tollfreenumbers', 
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
	 * Port in Tollfree Number(s). Use orderId returned by this method to check status.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<Object>} opts.body 
	 */
	postMessagingSmsProvisioningTollfreenumbersPortin(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/sms/provisioning/tollfreenumbers/portin', 
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
	 * Create a Supported Content profile
	 * Deprecated - use POST /api/v2/conversations/messaging/supportedcontent as replacement
	 * @param {Object} body SupportedContent
	 * @deprecated
	 */
	postMessagingSupportedcontent(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMessagingSupportedcontent';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/supportedcontent', 
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
	 * Set the organization's default settings that may be applied to an integration when it is created.
	 * When an integration is created a settings ID may be assigned to it. If the settings ID is not supplied, the default settings will be applied to it.
	 * @param {Object} body Messaging Setting ID
	 * @deprecated
	 */
	putMessagingSettingsDefault(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMessagingSettingsDefault';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/settings/default', 
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


export default MessagingApi;
