import ApiClient from '../ApiClient.js';


class TelephonyApi {
	/**
	 * Telephony service.
	 * @module purecloud-platform-client-v2/api/TelephonyApi
	 * @version 251.1.0
	 */

	/**
	 * Constructs a new TelephonyApi. 
	 * @alias module:purecloud-platform-client-v2/api/TelephonyApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get an agent's greetings.
	 * 
	 * @param {String} agentId User ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTelephonyAgentGreetings(agentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling getTelephonyAgentGreetings';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/agents/{agentId}/greetings', 
			'GET', 
			{ 'agentId': agentId },
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
	 * Get the agent's own greetings.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTelephonyAgentsGreetingsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/agents/greetings/me', 
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
	 * Get the concurrent call metrics for a given organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.metricType Flag to indicate metric type to fetch. (default to cloud)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTelephonyCallsMetrics(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/calls/metrics', 
			'GET', 
			{  },
			{ 'metricType': opts['metricType'] },
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
	 * Retrieve the list of AWS regions media can stream through.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTelephonyMediaregions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/mediaregions', 
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
	 * Get the global telephony configuration.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTelephonySettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/telephony/settings', 
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
	 * Get a SIP message.
	 * Get the raw form of the SIP message
	 * @param {String} conversationId Conversation id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTelephonySipmessagesConversation(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getTelephonySipmessagesConversation';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/sipmessages/conversations/{conversationId}', 
			'GET', 
			{ 'conversationId': conversationId },
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
	 * Get SIP headers.
	 * Get parsed SIP headers. Returns specific headers if key query parameters are added.
	 * @param {String} conversationId Conversation id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.keys comma-separated list of header identifiers to query. e.g. ruri,to,from
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTelephonySipmessagesConversationHeaders(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getTelephonySipmessagesConversationHeaders';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/sipmessages/conversations/{conversationId}/headers', 
			'GET', 
			{ 'conversationId': conversationId },
			{ 'keys': this.apiClient.buildCollectionParam(opts['keys'], 'multi') },
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
	 * Fetch SIP metadata
	 * Fetch SIP metadata that matches a given parameter. If exactMatch is passed as a parameter only sip records that have exactly that value will be returned. For example, some records contain conversationId but not all relevant records for that call may contain the conversationId so only a partial view of the call will be reflected
	 * @param {Date} dateStart Start date of the search. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Date} dateEnd End date of the search. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.callId unique identification of the placed call
	 * @param {String} opts.toUser User to who the call was placed
	 * @param {String} opts.fromUser user who placed the call
	 * @param {String} opts.conversationId Unique identification of the conversation
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTelephonySiptraces(dateStart, dateEnd, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dateStart' is set
		if (dateStart === undefined || dateStart === null) {
			throw 'Missing the required parameter "dateStart" when calling getTelephonySiptraces';
		}
		// verify the required parameter 'dateEnd' is set
		if (dateEnd === undefined || dateEnd === null) {
			throw 'Missing the required parameter "dateEnd" when calling getTelephonySiptraces';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/siptraces', 
			'GET', 
			{  },
			{ 'callId': opts['callId'],'toUser': opts['toUser'],'fromUser': opts['fromUser'],'conversationId': opts['conversationId'],'dateStart': dateStart,'dateEnd': dateEnd },
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
	 * Get signed S3 URL for a pcap download
	 * 
	 * @param {String} downloadId unique id for the downloaded file in S3
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTelephonySiptracesDownloadDownloadId(downloadId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'downloadId' is set
		if (downloadId === undefined || downloadId === null || downloadId === '') {
			throw 'Missing the required parameter "downloadId" when calling getTelephonySiptracesDownloadDownloadId';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/siptraces/download/{downloadId}', 
			'GET', 
			{ 'downloadId': downloadId },
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
	 * Request a download of a pcap file to S3
	 * 
	 * @param {Object} sIPSearchPublicRequest 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postTelephonySiptracesDownload(sIPSearchPublicRequest, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sIPSearchPublicRequest' is set
		if (sIPSearchPublicRequest === undefined || sIPSearchPublicRequest === null) {
			throw 'Missing the required parameter "sIPSearchPublicRequest" when calling postTelephonySiptracesDownload';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/siptraces/download', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			sIPSearchPublicRequest, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates an agent's greetings.
	 * 
	 * @param {String} agentId User ID
	 * @param {Object} body Agent Greeting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putTelephonyAgentGreetings(agentId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling putTelephonyAgentGreetings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyAgentGreetings';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/agents/{agentId}/greetings', 
			'PUT', 
			{ 'agentId': agentId },
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
	 * Updates the agent's own greetings.
	 * 
	 * @param {Object} body Agent Greeting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putTelephonyAgentsGreetingsMe(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonyAgentsGreetingsMe';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/agents/greetings/me', 
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
	 * Update the global telephony configuration.
	 * 
	 * @param {Object} body Telephony
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putTelephonySettings(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putTelephonySettings';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/settings', 
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

}


export default TelephonyApi;
