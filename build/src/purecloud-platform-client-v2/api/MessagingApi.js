import ApiClient from '../ApiClient.js';


class MessagingApi {
	/**
	 * Messaging service.
	 * @module purecloud-platform-client-v2/api/MessagingApi
	 * @version 168.2.0
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
	 * Delete a supported content profile
	 * 
	 * @param {String} supportedContentId Supported Content ID
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
	 * Get a list of Supported Content profiles
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
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
	 * 
	 * @param {String} supportedContentId Supported Content ID
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
	 * Update a supported content profile
	 * 
	 * @param {String} supportedContentId Supported Content ID
	 * @param {Object} body SupportedContent
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
	 * Create a Supported Content profile
	 * 
	 * @param {Object} body SupportedContent
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

}


export default MessagingApi;
