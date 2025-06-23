import ApiClient from '../ApiClient.js';


class MessagingApi {
	/**
	 * Messaging service.
	 * @module purecloud-platform-client-v2/api/MessagingApi
	 * @version 225.0.0
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
	 * Delete a messaging setting
	 * 
	 * @param {String} messageSettingId Message Settings ID
	 * @deprecated
	 */
	deleteMessagingSetting(messageSettingId) { 
		// verify the required parameter 'messageSettingId' is set
		if (messageSettingId === undefined || messageSettingId === null || messageSettingId === '') {
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
	 * Delete a supported content profile
	 * Deprecated - use DELETE /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement
	 * @param {String} supportedContentId Supported Content ID
	 * @deprecated
	 */
	deleteMessagingSupportedcontentSupportedContentId(supportedContentId) { 
		// verify the required parameter 'supportedContentId' is set
		if (supportedContentId === undefined || supportedContentId === null || supportedContentId === '') {
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
	 * Get a messaging setting
	 * 
	 * @param {String} messageSettingId Message Settings ID
	 * @deprecated
	 */
	getMessagingSetting(messageSettingId) { 
		// verify the required parameter 'messageSettingId' is set
		if (messageSettingId === undefined || messageSettingId === null || messageSettingId === '') {
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
		if (supportedContentId === undefined || supportedContentId === null || supportedContentId === '') {
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
	 * Update a messaging setting
	 * 
	 * @param {String} messageSettingId Message Settings ID
	 * @param {Object} body MessagingSetting
	 * @deprecated
	 */
	patchMessagingSetting(messageSettingId, body) { 
		// verify the required parameter 'messageSettingId' is set
		if (messageSettingId === undefined || messageSettingId === null || messageSettingId === '') {
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
	 * Update a supported content profile
	 * Deprecated - use PATCH /api/v2/conversations/messaging/supportedcontent/{supportedContentId} as replacement
	 * @param {String} supportedContentId Supported Content ID
	 * @param {Object} body SupportedContent
	 * @deprecated
	 */
	patchMessagingSupportedcontentSupportedContentId(supportedContentId, body) { 
		// verify the required parameter 'supportedContentId' is set
		if (supportedContentId === undefined || supportedContentId === null || supportedContentId === '') {
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
