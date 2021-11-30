import ApiClient from '../ApiClient.js';


class PresenceApi {
	/**
	 * Presence service.
	 * @module purecloud-platform-client-v2/api/PresenceApi
	 * @version 126.1.0
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
	 * Get an Organization&#39;s list of Presence Definitions
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
	 * Get a user&#39;s Presence
	 * Get a user&#39;s presence for the specified source that is not specifically listed.  Used to support custom presence sources.
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
	 * Get a user&#39;s Microsoft Teams presence.
	 * Gets the presence for a Microsoft Teams user.  This will return the Microsoft Teams presence mapped to Genesys Cloud presence with additional activity details in the message field. This presence source is read-only.
	 * @param {String} userId user Id
	 */
	getUserPresencesMicrosoftteams(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserPresencesMicrosoftteams';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/presences/microsoftteams', 
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
	 * Get a user&#39;s Genesys Cloud presence.
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
	 * Get a user&#39;s Zoom Phone presence.
	 * Gets the presence for a Zoom user.  This will return the Zoom Phone presence mapped to Genesys Cloud presence with additional activity details in the message field. This presence source is read-only.
	 * @param {String} userId user Id
	 */
	getUserPresencesZoomphone(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getUserPresencesZoomphone';
		}

		return this.apiClient.callApi(
			'/api/v2/users/{userId}/presences/zoomphone', 
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
	 * Patch a user&#39;s Presence
	 * Patch a user&#39;s presence for the specified source that is not specifically listed. The presence object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the &#39;source&#39; defined in the path as the user&#39;s primary presence source. Option 2: Provide the presenceDefinition value. The &#39;id&#39; is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.
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
	 * Patch a Genesys Cloud user&#39;s presence
	 * The presence object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the PURECLOUD source as the user&#39;s primary presence source. Option 2: Provide the presenceDefinition value. The &#39;id&#39; is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.
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