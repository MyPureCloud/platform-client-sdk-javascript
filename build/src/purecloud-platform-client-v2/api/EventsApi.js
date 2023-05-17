import ApiClient from '../ApiClient.js';


class EventsApi {
	/**
	 * Events service.
	 * @module purecloud-platform-client-v2/api/EventsApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new EventsApi. 
	 * @alias module:purecloud-platform-client-v2/api/EventsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Publish Conversation Batch Events
	 * 
	 * @param {Object} body batchRequest
	 */
	postEventsConversations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postEventsConversations';
		}

		return this.apiClient.callApi(
			'/api/v2/events/conversations', 
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
	 * Publish User Presence Status Batch Events
	 * 
	 * @param {Object} body batchRequest
	 */
	postEventsUsersPresence(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postEventsUsersPresence';
		}

		return this.apiClient.callApi(
			'/api/v2/events/users/presence', 
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
	 * Publish Agent Routing Status Batch Events
	 * 
	 * @param {Object} body batchRequest
	 */
	postEventsUsersRoutingstatus(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postEventsUsersRoutingstatus';
		}

		return this.apiClient.callApi(
			'/api/v2/events/users/routingstatus', 
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


export default EventsApi;
