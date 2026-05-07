import ApiClient from '../ApiClient.js';


class EventsApi {
	/**
	 * Events service.
	 * @module purecloud-platform-client-v2/api/EventsApi
	 * @version 252.0.0
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
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postEventsConversations(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Publish Predictive Routing Custom Kpi Attribution Batch Events
	 * 
	 * @param {Object} body batchRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postEventsRoutingCustomkpiattributions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postEventsRoutingCustomkpiattributions(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postEventsRoutingCustomkpiattributions';
		}

		return this.apiClient.callApi(
			'/api/v2/events/routing/customkpiattributions', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Publish User Presence Status Batch Events
	 * 
	 * @param {Object} body batchRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postEventsUsersPresence(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Publish Agent Routing Status Batch Events
	 * 
	 * @param {Object} body batchRequest
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postEventsUsersRoutingstatus(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default EventsApi;
