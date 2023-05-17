import ApiClient from '../ApiClient.js';


class ChatApi {
	/**
	 * Chat service.
	 * @module purecloud-platform-client-v2/api/ChatApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new ChatApi. 
	 * @alias module:purecloud-platform-client-v2/api/ChatApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get Chat Settings.
	 * This route is deprecated, please use /chats/settings instead
     	 * @deprecated
	 */
	getChatSettings() { 

		return this.apiClient.callApi(
			'/api/v2/chat/settings', 
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
	 * Get Chat Settings.
	 * 
	 */
	getChatsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/chats/settings', 
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
	 * Patch Chat Settings.
	 * This route is deprecated, please use /chats/settings instead
	 * @param {Object} body Chat
     	 * @deprecated
	 */
	patchChatSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchChatSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/chat/settings', 
			'PATCH', 
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
	 * Patch Chat Settings.
	 * 
	 * @param {Object} body Chat
	 */
	patchChatsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchChatsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/settings', 
			'PATCH', 
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
	 * Update Chat Settings.
	 * This route is deprecated, please use /chats/settings instead
	 * @param {Object} body Chat
     	 * @deprecated
	 */
	putChatSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putChatSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/chat/settings', 
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
	 * Update Chat Settings.
	 * 
	 * @param {Object} body Chat
	 */
	putChatsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putChatsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/chats/settings', 
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


export default ChatApi;
