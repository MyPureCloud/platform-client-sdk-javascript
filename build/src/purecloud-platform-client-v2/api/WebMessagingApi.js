import ApiClient from '../ApiClient.js';


class WebMessagingApi {
	/**
	 * WebMessaging service.
	 * @module purecloud-platform-client-v2/api/WebMessagingApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new WebMessagingApi. 
	 * @alias module:purecloud-platform-client-v2/api/WebMessagingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get the messages for a web messaging session.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getWebmessagingMessages(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/webmessaging/messages', 
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

}


export default WebMessagingApi;