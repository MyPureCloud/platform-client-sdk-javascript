import ApiClient from '../ApiClient.js';


class GreetingsApi {
	/**
	 * Greetings service.
	 * @module purecloud-platform-client-v2/api/GreetingsApi
	 * @version 250.0.0
	 */

	/**
	 * Constructs a new GreetingsApi. 
	 * @alias module:purecloud-platform-client-v2/api/GreetingsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Deletes a Greeting with the given GreetingId
	 * 
	 * @param {String} greetingId Greeting ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteGreeting(greetingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null || greetingId === '') {
			throw 'Missing the required parameter "greetingId" when calling deleteGreeting';
		}

		return this.apiClient.callApi(
			'/api/v2/greetings/{greetingId}', 
			'DELETE', 
			{ 'greetingId': greetingId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Greeting with the given GreetingId
	 * 
	 * @param {String} greetingId Greeting ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGreeting(greetingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null || greetingId === '') {
			throw 'Missing the required parameter "greetingId" when calling getGreeting';
		}

		return this.apiClient.callApi(
			'/api/v2/greetings/{greetingId}', 
			'GET', 
			{ 'greetingId': greetingId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Download a organization greeting recording
	 * 
	 * @param {String} greetingId Greeting ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.formatId The desired media format. (default to WAV)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGreetingDownloads(greetingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null || greetingId === '') {
			throw 'Missing the required parameter "greetingId" when calling getGreetingDownloads';
		}

		return this.apiClient.callApi(
			'/api/v2/greetings/{greetingId}/downloads', 
			'GET', 
			{ 'greetingId': greetingId },
			{ 'formatId': opts['formatId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Download a group greeting recording
	 * 
	 * @param {String} greetingId Greeting ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.formatId The desired media format. (default to WAV)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGreetingGroupsDownloads(greetingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null || greetingId === '') {
			throw 'Missing the required parameter "greetingId" when calling getGreetingGroupsDownloads';
		}

		return this.apiClient.callApi(
			'/api/v2/greetings/{greetingId}/groups/downloads', 
			'GET', 
			{ 'greetingId': greetingId },
			{ 'formatId': opts['formatId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get media playback URI for this greeting
	 * API should migrate to use GET api/v2/greetings/{greetingId}/downloads
	 * @param {String} greetingId Greeting ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.formatId The desired media format. (default to WAV)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGreetingMedia(greetingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null || greetingId === '') {
			throw 'Missing the required parameter "greetingId" when calling getGreetingMedia';
		}

		return this.apiClient.callApi(
			'/api/v2/greetings/{greetingId}/media', 
			'GET', 
			{ 'greetingId': greetingId },
			{ 'formatId': opts['formatId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Download a user greeting recording
	 * 
	 * @param {String} greetingId Greeting ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.formatId The desired media format. (default to WAV)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGreetingUsersDownloads(greetingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null || greetingId === '') {
			throw 'Missing the required parameter "greetingId" when calling getGreetingUsersDownloads';
		}

		return this.apiClient.callApi(
			'/api/v2/greetings/{greetingId}/users/downloads', 
			'GET', 
			{ 'greetingId': greetingId },
			{ 'formatId': opts['formatId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets an Organization's Greetings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGreetings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/greetings', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an Organization's DefaultGreetingList
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGreetingsDefaults(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/greetings/defaults', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of the Group's Greetings
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGroupGreetings(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null || groupId === '') {
			throw 'Missing the required parameter "groupId" when calling getGroupGreetings';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}/greetings', 
			'GET', 
			{ 'groupId': groupId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Grabs the list of Default Greetings given a Group's ID
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGroupGreetingsDefaults(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null || groupId === '') {
			throw 'Missing the required parameter "groupId" when calling getGroupGreetingsDefaults';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}/greetings/defaults', 
			'GET', 
			{ 'groupId': groupId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of the User's Greetings
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserGreetings(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserGreetings';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/greetings', 
			'GET', 
			{ 'userId': userId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Grabs the list of Default Greetings given a User's ID
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getUserGreetingsDefaults(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getUserGreetingsDefaults';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/greetings/defaults', 
			'GET', 
			{ 'userId': userId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a Greeting for an Organization
	 * 
	 * @param {Object} body The Greeting to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postGreetings(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGreetings';
		}

		return this.apiClient.callApi(
			'/api/v2/greetings', 
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
	 * Creates a Greeting for a Group
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} body The Greeting to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postGroupGreetings(groupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null || groupId === '') {
			throw 'Missing the required parameter "groupId" when calling postGroupGreetings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGroupGreetings';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}/greetings', 
			'POST', 
			{ 'groupId': groupId },
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
	 * Creates a Greeting for a User
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body The Greeting to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postUserGreetings(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postUserGreetings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUserGreetings';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/greetings', 
			'POST', 
			{ 'userId': userId },
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
	 * Updates the Greeting with the given GreetingId
	 * 
	 * @param {String} greetingId Greeting ID
	 * @param {Object} body The updated Greeting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putGreeting(greetingId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null || greetingId === '') {
			throw 'Missing the required parameter "greetingId" when calling putGreeting';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putGreeting';
		}

		return this.apiClient.callApi(
			'/api/v2/greetings/{greetingId}', 
			'PUT', 
			{ 'greetingId': greetingId },
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
	 * Update an Organization's DefaultGreetingList
	 * 
	 * @param {Object} body The updated defaultGreetingList
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putGreetingsDefaults(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putGreetingsDefaults';
		}

		return this.apiClient.callApi(
			'/api/v2/greetings/defaults', 
			'PUT', 
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
	 * Updates the DefaultGreetingList of the specified Group
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} body The updated defaultGreetingList
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putGroupGreetingsDefaults(groupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null || groupId === '') {
			throw 'Missing the required parameter "groupId" when calling putGroupGreetingsDefaults';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putGroupGreetingsDefaults';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/{groupId}/greetings/defaults', 
			'PUT', 
			{ 'groupId': groupId },
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
	 * Updates the DefaultGreetingList of the specified User
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body The updated defaultGreetingList
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putUserGreetingsDefaults(userId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling putUserGreetingsDefaults';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserGreetingsDefaults';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/greetings/defaults', 
			'PUT', 
			{ 'userId': userId },
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


export default GreetingsApi;
