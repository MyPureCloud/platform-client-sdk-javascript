import ApiClient from '../ApiClient.js';


class MessagingApi {
	/**
	 * Messaging service.
	 * @module purecloud-platform-client-v2/api/MessagingApi
	 * @version 63.0.0
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
	 * Delete a Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
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
	 * Get a list of Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getMessagingIntegrations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations', 
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
	 * Get a list of Facebook Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getMessagingIntegrationsFacebook(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/facebook', 
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
	 * Get a Facebook messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 */
	getMessagingIntegrationsFacebookIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationsFacebookIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/facebook/{integrationId}', 
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
	 * Get a list of LINE messenger Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getMessagingIntegrationsLine(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/line', 
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
	 * Get a LINE messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 */
	getMessagingIntegrationsLineIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationsLineIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/line/{integrationId}', 
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
	 * Get a list of Twitter Integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getMessagingIntegrationsTwitter(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/twitter', 
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
	 * Get a Twitter messaging integration
	 * 
	 * @param {String} integrationId Integration ID
	 */
	getMessagingIntegrationsTwitterIntegrationId(integrationId) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling getMessagingIntegrationsTwitterIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/twitter/{integrationId}', 
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
	 * Get a list of Messaging Stickers
	 * 
	 * @param {String} messengerType Messenger Type
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getMessagingSticker(messengerType, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'messengerType' is set
		if (messengerType === undefined || messengerType === null) {
			throw 'Missing the required parameter "messengerType" when calling getMessagingSticker';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/stickers/{messengerType}', 
			'GET', 
			{ 'messengerType': messengerType }, 
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
	 * Create a Facebook Integration
	 * 
	 * @param {Object} body FacebookIntegrationRequest
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
	 * @param {Object} body LineIntegrationRequest
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
	 * Create a Twitter Integration
	 * 
	 * @param {Object} body TwitterIntegrationRequest
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
	 * Update a LINE messenger integration
	 * 
	 * @param {String} integrationId Integration ID
	 * @param {Object} body LineIntegrationRequest
	 */
	putMessagingIntegrationsLineIntegrationId(integrationId, body) { 
		// verify the required parameter 'integrationId' is set
		if (integrationId === undefined || integrationId === null) {
			throw 'Missing the required parameter "integrationId" when calling putMessagingIntegrationsLineIntegrationId';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putMessagingIntegrationsLineIntegrationId';
		}

		return this.apiClient.callApi(
			'/api/v2/messaging/integrations/line/{integrationId}', 
			'PUT', 
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

}


export default MessagingApi;