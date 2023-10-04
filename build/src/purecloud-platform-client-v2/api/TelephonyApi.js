import ApiClient from '../ApiClient.js';


class TelephonyApi {
	/**
	 * Telephony service.
	 * @module purecloud-platform-client-v2/api/TelephonyApi
	 * @version 178.2.0
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
	 * Retrieve the list of AWS regions media can stream through.
	 * 
	 */
	getTelephonyMediaregions() { 

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
			['application/json']
		);
	}

	/**
	 * GET phone address data
	 * 
	 * @param {String} phoneId Phone Identifier
	 */
	getTelephonyPhonePhoneIdSettings(phoneId) { 
		// verify the required parameter 'phoneId' is set
		if (phoneId === undefined || phoneId === null) {
			throw 'Missing the required parameter "phoneId" when calling getTelephonyPhonePhoneIdSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/phone/{phoneId}/settings', 
			'GET', 
			{ 'phoneId': phoneId },
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
	 * GET phone configuration data
	 * 
	 * @param {String} hardwareId Phone's physical address AKA MAC address or FQDN for softphones
	 */
	getTelephonyPhonehomePhoneconfigurationHardwareId(hardwareId) { 
		// verify the required parameter 'hardwareId' is set
		if (hardwareId === undefined || hardwareId === null) {
			throw 'Missing the required parameter "hardwareId" when calling getTelephonyPhonehomePhoneconfigurationHardwareId';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/phonehome/phoneconfiguration/{hardwareId}', 
			'GET', 
			{ 'hardwareId': hardwareId },
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
	 * Get a SIP message.
	 * Get the raw form of the SIP message
	 * @param {String} conversationId Conversation id
	 */
	getTelephonySipmessagesConversation(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get SIP headers.
	 * Get parsed SIP headers. Returns specific headers if key query parameters are added.
	 * @param {String} conversationId Conversation id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.keys comma-separated list of header identifiers to query. e.g. ruri,to,from
	 */
	getTelephonySipmessagesConversationHeaders(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get signed S3 URL for a pcap download
	 * 
	 * @param {String} downloadId unique id for the downloaded file in S3
	 */
	getTelephonySiptracesDownloadDownloadId(downloadId) { 
		// verify the required parameter 'downloadId' is set
		if (downloadId === undefined || downloadId === null) {
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
			['application/json']
		);
	}

	/**
	 * Schedule a job in the near future.
	 * 
	 * @param {String} siteId Site ID
	 */
	postTelephonyProvidersEdgesSiteSchedulereboot(siteId) { 
		// verify the required parameter 'siteId' is set
		if (siteId === undefined || siteId === null) {
			throw 'Missing the required parameter "siteId" when calling postTelephonyProvidersEdgesSiteSchedulereboot';
		}

		return this.apiClient.callApi(
			'/api/v2/telephony/providers/edges/sites/{siteId}/schedulereboot', 
			'POST', 
			{ 'siteId': siteId },
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
	 * Request a download of a pcap file to S3
	 * 
	 * @param {Object} sIPSearchPublicRequest 
	 */
	postTelephonySiptracesDownload(sIPSearchPublicRequest) { 
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
			['application/json']
		);
	}

}


export default TelephonyApi;
