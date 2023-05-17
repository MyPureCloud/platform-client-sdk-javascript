import ApiClient from '../ApiClient.js';


class PresenceApi {
	/**
	 * Presence service.
	 * @module purecloud-platform-client-v2/api/PresenceApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new PresenceApi. 
	 * @alias module:purecloud-platform-client-v2/api/PresenceApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a Presence Source
	 * 
	 * @param {String} sourceId Presence Source ID
	 */
	deletePresenceSource(sourceId) { 
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null) {
			throw 'Missing the required parameter "sourceId" when calling deletePresenceSource';
		}

		return this.apiClient.callApi(
			'/api/v2/presence/sources/{sourceId}', 
			'DELETE', 
			{ 'sourceId': sourceId },
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
	 * Delete a Presence Definition
	 * 
	 * @param {String} presenceId Organization Presence ID
	 */
	deletePresencedefinition(presenceId) { 
		// verify the required parameter 'presenceId' is set
		if (presenceId === undefined || presenceId === null) {
			throw 'Missing the required parameter "presenceId" when calling deletePresencedefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/presencedefinitions/{presenceId}', 
			'DELETE', 
			{ 'presenceId': presenceId },
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
	 * Get the presence settings
	 * 
	 */
	getPresenceSettings() { 

		return this.apiClient.callApi(
			'/api/v2/presence/settings', 
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
	 * Get a Presence Source
	 * 
	 * @param {String} sourceId Presence Source ID
	 */
	getPresenceSource(sourceId) { 
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null) {
			throw 'Missing the required parameter "sourceId" when calling getPresenceSource';
		}

		return this.apiClient.callApi(
			'/api/v2/presence/sources/{sourceId}', 
			'GET', 
			{ 'sourceId': sourceId },
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
	 * Get a list of Presence Sources
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.deactivated Deactivated query can be TRUE or FALSE (default to false)
	 */
	getPresenceSources(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/presence/sources', 
			'GET', 
			{  },
			{ 'deactivated': opts['deactivated'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a user's Primary Presence Source
	 * 
	 * @param {String} userId user ID
	 */
	getPresenceUserPrimarysource(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getPresenceUserPrimarysource';
		}

		return this.apiClient.callApi(
			'/api/v2/presence/users/{userId}/primarysource', 
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
	 * Get a Presence Definition
	 * 
	 * @param {String} presenceId Organization Presence ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.localeCode The locale code to fetch for the presence definition. Use ALL to fetch everything.
	 */
	getPresencedefinition(presenceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'presenceId' is set
		if (presenceId === undefined || presenceId === null) {
			throw 'Missing the required parameter "presenceId" when calling getPresencedefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/presencedefinitions/{presenceId}', 
			'GET', 
			{ 'presenceId': presenceId },
			{ 'localeCode': opts['localeCode'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get an Organization's list of Presence Definitions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.deleted Deleted query can be TRUE, FALSE or ALL (default to false)
	 * @param {String} opts.localeCode The locale code to fetch for each presence definition. Use ALL to fetch everything.
	 */
	getPresencedefinitions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/presencedefinitions', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'deleted': opts['deleted'],'localeCode': opts['localeCode'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the list of SystemPresences
	 * 
	 */
	getSystempresences() { 

		return this.apiClient.callApi(
			'/api/v2/systempresences', 
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
	 * Get a user's Presence
	 * Get a users presence for the specified source that is not specifically listed.  Used to support custom presence sources. This endpoint does not support registered presence sources.
	 * @param {String} userId user Id
	 * @param {String} sourceId Presence source ID
	 */
	getUserPresence(userId, sourceId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserPresence';
		}
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null) {
			throw 'Missing the required parameter "sourceId" when calling getUserPresence';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/presences/{sourceId}', 
			'GET', 
			{ 'userId': userId,'sourceId': sourceId },
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
	 * Get a user's Genesys Cloud presence.
	 * Get the default Genesys Cloud user presence source PURECLOUD
	 * @param {String} userId user Id
	 */
	getUserPresencesPurecloud(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserPresencesPurecloud';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/presences/purecloud', 
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
	 * Patch a user's Presence
	 * Patch a users presence for the specified source that is not specifically listed. This endpoint does not support registered presence sources. The presence object can be patched one of three ways. Option 1: Set the primary property to true. This will set the source defined in the path as the users primary presence source. Option 2: Provide the presenceDefinition value. The id is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.
	 * @param {String} userId user Id
	 * @param {String} sourceId Presence source ID
	 * @param {Object} body User presence
	 */
	patchUserPresence(userId, sourceId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserPresence';
		}
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null) {
			throw 'Missing the required parameter "sourceId" when calling patchUserPresence';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserPresence';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/presences/{sourceId}', 
			'PATCH', 
			{ 'userId': userId,'sourceId': sourceId },
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
	 * Patch a Genesys Cloud user's presence
	 * The presence object can be patched one of three ways. Option 1: Set the primary property to true. This will set the PURECLOUD source as the users primary presence source. Option 2: Provide the presenceDefinition value. The id is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.
	 * @param {String} userId user Id
	 * @param {Object} body User presence
	 */
	patchUserPresencesPurecloud(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchUserPresencesPurecloud';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchUserPresencesPurecloud';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/presences/purecloud', 
			'PATCH', 
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
	 * Create a Presence Source
	 * 
	 * @param {Object} body The Presence Source to create
	 */
	postPresenceSources(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postPresenceSources';
		}

		return this.apiClient.callApi(
			'/api/v2/presence/sources', 
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
	 * Create a Presence Definition
	 * 
	 * @param {Object} body The Presence Definition to create
	 */
	postPresencedefinitions(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postPresencedefinitions';
		}

		return this.apiClient.callApi(
			'/api/v2/presencedefinitions', 
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
	 * Update the presence settings
	 * 
	 * @param {Object} body Presence Settings
	 */
	putPresenceSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putPresenceSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/presence/settings', 
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
	 * Update a Presence Source
	 * 
	 * @param {String} sourceId Presence Source ID
	 * @param {Object} body The updated Presence Source
	 */
	putPresenceSource(sourceId, body) { 
		// verify the required parameter 'sourceId' is set
		if (sourceId === undefined || sourceId === null) {
			throw 'Missing the required parameter "sourceId" when calling putPresenceSource';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putPresenceSource';
		}

		return this.apiClient.callApi(
			'/api/v2/presence/sources/{sourceId}', 
			'PUT', 
			{ 'sourceId': sourceId },
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
	 * Update a user's Primary Presence Source
	 * 
	 * @param {String} userId user ID
	 * @param {Object} body Primary Source
	 */
	putPresenceUserPrimarysource(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling putPresenceUserPrimarysource';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putPresenceUserPrimarysource';
		}

		return this.apiClient.callApi(
			'/api/v2/presence/users/{userId}/primarysource', 
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

	/**
	 * Update a Presence Definition
	 * 
	 * @param {String} presenceId Organization Presence ID
	 * @param {Object} body The OrganizationPresence to update
	 */
	putPresencedefinition(presenceId, body) { 
		// verify the required parameter 'presenceId' is set
		if (presenceId === undefined || presenceId === null) {
			throw 'Missing the required parameter "presenceId" when calling putPresencedefinition';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putPresencedefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/presencedefinitions/{presenceId}', 
			'PUT', 
			{ 'presenceId': presenceId },
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
	 * Update bulk user Presences
	 * 
	 * @param {Array.<Object>} body List of User presences
	 */
	putUsersPresencesBulk(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUsersPresencesBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/users/presences/bulk', 
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


export default PresenceApi;
