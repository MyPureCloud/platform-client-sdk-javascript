import ApiClient from '../ApiClient.js';


class SearchApi {
	/**
	 * Search service.
	 * @module purecloud-platform-client-v2/api/SearchApi
	 * @version 227.0.0
	 */

	/**
	 * Constructs a new SearchApi. 
	 * @alias module:purecloud-platform-client-v2/api/SearchApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Search gkn documentation using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 */
	getDocumentationGknSearch(q64) { 
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getDocumentationGknSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/documentation/gkn/search', 
			'GET', 
			{  },
			{ 'q64': q64 },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search documentation using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 */
	getDocumentationSearch(q64) { 
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getDocumentationSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/documentation/search', 
			'GET', 
			{  },
			{ 'q64': q64 },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search groups using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 */
	getGroupsSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getGroupsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/search', 
			'GET', 
			{  },
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search locations using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Provides more details about a specified resource
	 */
	getLocationsSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getLocationsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/locations/search', 
			'GET', 
			{  },
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search using the q64 value returned from a previous search.
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Boolean} opts.profile profile (default to true)
	 */
	getSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/search', 
			'GET', 
			{  },
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'profile': opts['profile'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Suggest resources using the q64 value returned from a previous suggest query.
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Boolean} opts.profile profile (default to true)
	 */
	getSearchSuggest(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getSearchSuggest';
		}

		return this.apiClient.callApi(
			'/api/v2/search/suggest', 
			'GET', 
			{  },
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'profile': opts['profile'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search sites using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 */
	getTelephonyProvidersEdgesSitesSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getTelephonyProvidersEdgesSitesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/search', 
			'GET', 
			{  },
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search users using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 * @param {Object} opts.integrationPresenceSource integrationPresenceSource
	 */
	getUsersSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getUsersSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/users/search', 
			'GET', 
			{  },
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'integrationPresenceSource': opts['integrationPresenceSource'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search voicemails using the q64 value returned from a previous search
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand expand
	 */
	getVoicemailSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getVoicemailSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/search', 
			'GET', 
			{  },
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search resources.
	 * 
	 * @param {Object} body Search request options
	 */
	postAnalyticsConversationsTranscriptsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsConversationsTranscriptsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/conversations/transcripts/query', 
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
	 * Search conversations
	 * 
	 * @param {Object} body Search request options
	 */
	postConversationsParticipantsAttributesSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsParticipantsAttributesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/participants/attributes/search', 
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
	 * Search all documents
	 * 
	 * @param {Object} body Search request options
	 * postDocumentationAllSearch is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postDocumentationAllSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postDocumentationAllSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/documentation/all/search', 
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
	 * Search gkn documentation
	 * 
	 * @param {Object} body Search request options
	 */
	postDocumentationGknSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postDocumentationGknSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/documentation/gkn/search', 
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
	 * Search documentation
	 * 
	 * @param {Object} body Search request options
	 */
	postDocumentationSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postDocumentationSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/documentation/search', 
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
	 * Search groups
	 * 
	 * @param {Object} body Search request options
	 */
	postGroupsSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGroupsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/groups/search', 
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
	 * Search Documents
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @deprecated
	 */
	postKnowledgeKnowledgebaseSearch(knowledgeBaseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/search', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search locations
	 * 
	 * @param {Object} body Search request options
	 */
	postLocationsSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLocationsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/locations/search', 
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
	 * Search resources.
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.profile profile (default to true)
	 */
	postSearch(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/search', 
			'POST', 
			{  },
			{ 'profile': opts['profile'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Suggest resources.
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.profile profile (default to true)
	 */
	postSearchSuggest(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSearchSuggest';
		}

		return this.apiClient.callApi(
			'/api/v2/search/suggest', 
			'POST', 
			{  },
			{ 'profile': opts['profile'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search resources.
	 * 
	 * @param {Object} body Search request options
	 */
	postSpeechandtextanalyticsTranscriptsSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsTranscriptsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/transcripts/search', 
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
	 * Search resources.
	 * 
	 * @param {Object} body Search request options
	 */
	postTeamsSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTeamsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/teams/search', 
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
	 * Search sites
	 * 
	 * @param {Object} body Search request options
	 */
	postTelephonyProvidersEdgesSitesSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postTelephonyProvidersEdgesSitesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/search', 
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
	 * Search users
	 * 
	 * @param {Object} body Search request options
	 */
	postUsersSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/users/search', 
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
	 * Search users as conversation targets
	 * 
	 * @param {Object} body Search request options
	 * postUsersSearchConversationTarget is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postUsersSearchConversationTarget(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersSearchConversationTarget';
		}

		return this.apiClient.callApi(
			'/api/v2/users/search/conversation/target', 
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
	 * Search manage queue member
	 * 
	 * @param {Object} body Search request options
	 * postUsersSearchQueuemembersManage is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postUsersSearchQueuemembersManage(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersSearchQueuemembersManage';
		}

		return this.apiClient.callApi(
			'/api/v2/users/search/queuemembers/manage', 
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
	 * Search users assigned to teams
	 * 
	 * @param {Object} body Search request options
	 */
	postUsersSearchTeamsAssign(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsersSearchTeamsAssign';
		}

		return this.apiClient.callApi(
			'/api/v2/users/search/teams/assign', 
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
	 * Search voicemails
	 * 
	 * @param {Object} body Search request options
	 */
	postVoicemailSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postVoicemailSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/voicemail/search', 
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


export default SearchApi;
