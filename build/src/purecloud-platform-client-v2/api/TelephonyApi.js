import ApiClient from '../ApiClient.js';


class TelephonyApi {
	/**
	 * Telephony service.
	 * @module purecloud-platform-client-v2/api/TelephonyApi
	 * @version 126.1.0
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