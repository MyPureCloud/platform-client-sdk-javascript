import ApiClient from '../ApiClient.js';


class SpeechTextAnalyticsApi {
	/**
	 * SpeechTextAnalytics service.
	 * @module purecloud-platform-client-v2/api/SpeechTextAnalyticsApi
	 * @version 54.0.0
	 */

	/**
	 * Constructs a new SpeechTextAnalyticsApi. 
	 * @alias module:purecloud-platform-client-v2/api/SpeechTextAnalyticsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get a Speech &amp; Text Analytics program by id
	 * 
	 * @param {String} programId The id of the topic to get
	 */
	getSpeechandtextanalyticsProgram(programId) { 
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null) {
			throw 'Missing the required parameter "programId" when calling getSpeechandtextanalyticsProgram';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/{programId}', 
			'GET', 
			{ 'programId': programId }, 
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
	 * Get a Speech &amp; Text Analytics topic by id
	 * 
	 * @param {String} topicId The id of the topic to get
	 */
	getSpeechandtextanalyticsTopic(topicId) { 
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling getSpeechandtextanalyticsTopic';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics/{topicId}', 
			'GET', 
			{ 'topicId': topicId }, 
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
	 * Create new Speech &amp; Text Analytics topic
	 * 
	 * @param {Object} body The topic to create
	 */
	postSpeechandtextanalyticsTopics(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsTopics';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics', 
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


export default SpeechTextAnalyticsApi;