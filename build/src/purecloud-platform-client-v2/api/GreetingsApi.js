import ApiClient from '../ApiClient.js';


class GreetingsApi {
	/**
	 * Greetings service.
	 * @module purecloud-platform-client-v2/api/GreetingsApi
	 * @version 168.2.0
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
	 */
	deleteGreeting(greetingId) { 
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get a Greeting with the given GreetingId
	 * 
	 * @param {String} greetingId Greeting ID
	 */
	getGreeting(greetingId) { 
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get media playback URI for this greeting
	 * 
	 * @param {String} greetingId Greeting ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.formatId The desired media format. (default to WAV)
	 */
	getGreetingMedia(greetingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null) {
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
			['application/json']
		);
	}

	/**
	 * Gets an Organization's Greetings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
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
			['application/json']
		);
	}

	/**
	 * Get an Organization's DefaultGreetingList
	 * 
	 */
	getGreetingsDefaults() { 

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
			['application/json']
		);
	}

	/**
	 * Get a list of the Group's Greetings
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getGroupGreetings(groupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
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
			['application/json']
		);
	}

	/**
	 * Grabs the list of Default Greetings given a Group's ID
	 * 
	 * @param {String} groupId Group ID
	 */
	getGroupGreetingsDefaults(groupId) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get a list of the User's Greetings
	 * 
	 * @param {String} userId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getUserGreetings(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Grabs the list of Default Greetings given a User's ID
	 * 
	 * @param {String} userId User ID
	 */
	getUserGreetingsDefaults(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create a Greeting for an Organization
	 * 
	 * @param {Object} body The Greeting to create
	 */
	postGreetings(body) { 
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
			['application/json']
		);
	}

	/**
	 * Creates a Greeting for a Group
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} body The Greeting to create
	 */
	postGroupGreetings(groupId, body) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
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
			['application/json']
		);
	}

	/**
	 * Creates a Greeting for a User
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body The Greeting to create
	 */
	postUserGreetings(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

	/**
	 * Updates the Greeting with the given GreetingId
	 * 
	 * @param {String} greetingId Greeting ID
	 * @param {Object} body The updated Greeting
	 */
	putGreeting(greetingId, body) { 
		// verify the required parameter 'greetingId' is set
		if (greetingId === undefined || greetingId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update an Organization's DefaultGreetingList
	 * 
	 * @param {Object} body The updated defaultGreetingList
	 */
	putGreetingsDefaults(body) { 
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
			['application/json']
		);
	}

	/**
	 * Updates the DefaultGreetingList of the specified Group
	 * 
	 * @param {String} groupId Group ID
	 * @param {Object} body The updated defaultGreetingList
	 */
	putGroupGreetingsDefaults(groupId, body) { 
		// verify the required parameter 'groupId' is set
		if (groupId === undefined || groupId === null) {
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
			['application/json']
		);
	}

	/**
	 * Updates the DefaultGreetingList of the specified User
	 * 
	 * @param {String} userId User ID
	 * @param {Object} body The updated defaultGreetingList
	 */
	putUserGreetingsDefaults(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
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
			['application/json']
		);
	}

}


export default GreetingsApi;
