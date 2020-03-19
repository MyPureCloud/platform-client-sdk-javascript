import ApiClient from '../ApiClient.js';


class MessagingApi {
	/**
	 * Messaging service.
	 * @module purecloud-platform-client-v2/api/MessagingApi
	 * @version 74.0.0
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

}


export default MessagingApi;