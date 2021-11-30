import ApiClient from '../ApiClient.js';


class SpeechTextAnalyticsApi {
	/**
	 * SpeechTextAnalytics service.
	 * @module purecloud-platform-client-v2/api/SpeechTextAnalyticsApi
	 * @version 126.1.0
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
	 * Delete a Speech &amp; Text Analytics program by id
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDelete Indicates whether the program is forced to be deleted or not. Required when the program to delete is the default program. (default to false)
	 */
	deleteSpeechandtextanalyticsProgram(programId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null) {
			throw 'Missing the required parameter "programId" when calling deleteSpeechandtextanalyticsProgram';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/{programId}', 
			'DELETE', 
			{ 'programId': programId }, 
			{ 'forceDelete': opts['forceDelete'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Delete All Speech &amp; Text Analytics SentimentFeedback
	 * 
	 */
	deleteSpeechandtextanalyticsSentimentfeedback() { 

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/sentimentfeedback', 
			'DELETE', 
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
	 * Delete a Speech &amp; Text Analytics SentimentFeedback by Id
	 * 
	 * @param {String} sentimentFeedbackId The Id of the SentimentFeedback
	 */
	deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId(sentimentFeedbackId) { 
		// verify the required parameter 'sentimentFeedbackId' is set
		if (sentimentFeedbackId === undefined || sentimentFeedbackId === null) {
			throw 'Missing the required parameter "sentimentFeedbackId" when calling deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/sentimentfeedback/{sentimentFeedbackId}', 
			'DELETE', 
			{ 'sentimentFeedbackId': sentimentFeedbackId }, 
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
	 * Delete a Speech &amp; Text Analytics topic by id
	 * 
	 * @param {String} topicId The id of the topic
	 */
	deleteSpeechandtextanalyticsTopic(topicId) { 
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling deleteSpeechandtextanalyticsTopic';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics/{topicId}', 
			'DELETE', 
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
	 * Get Speech and Text Analytics for a specific conversation
	 * 
	 * @param {String} conversationId Conversation Id
	 */
	getSpeechandtextanalyticsConversation(conversationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getSpeechandtextanalyticsConversation';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/conversations/{conversationId}', 
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
	 * Get the pre-signed S3 URL for the transcript of a specific communication of a conversation
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} communicationId Communication ID
	 */
	getSpeechandtextanalyticsConversationCommunicationTranscripturl(conversationId, communicationId) { 
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null) {
			throw 'Missing the required parameter "conversationId" when calling getSpeechandtextanalyticsConversationCommunicationTranscripturl';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null) {
			throw 'Missing the required parameter "communicationId" when calling getSpeechandtextanalyticsConversationCommunicationTranscripturl';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturl', 
			'GET', 
			{ 'conversationId': conversationId,'communicationId': communicationId }, 
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
	 * Get list of supported Speech &amp; Text Analytics dialects
	 * This api has been deprecated. Use api/v2/topics/dialects instead
	 */
	getSpeechandtextanalyticsDialects() { 

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/dialects', 
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
	 * Get a Speech &amp; Text Analytics program by id
	 * 
	 * @param {String} programId The id of the program
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
	 * Get Speech &amp; Text Analytics program mappings to queues and flows by id
	 * 
	 * @param {String} programId The id of the program
	 */
	getSpeechandtextanalyticsProgramMappings(programId) { 
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null) {
			throw 'Missing the required parameter "programId" when calling getSpeechandtextanalyticsProgramMappings';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/{programId}/mappings', 
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
	 * Get the list of Speech &amp; Text Analytics programs
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextPage The key for listing the next page
	 * @param {Number} opts.pageSize The page size for the listing (default to 20)
	 */
	getSpeechandtextanalyticsPrograms(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs', 
			'GET', 
			{  }, 
			{ 'nextPage': opts['nextPage'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Speech &amp; Text Analytics general program job by id
	 * 
	 * @param {String} jobId The id of the publish programs job
	 */
	getSpeechandtextanalyticsProgramsGeneralJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getSpeechandtextanalyticsProgramsGeneralJob';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/general/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId }, 
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
	 * Get the list of Speech &amp; Text Analytics programs mappings to queues and flows
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextPage The key for listing the next page
	 * @param {Number} opts.pageSize The page size for the listing (default to 20)
	 */
	getSpeechandtextanalyticsProgramsMappings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/mappings', 
			'GET', 
			{  }, 
			{ 'nextPage': opts['nextPage'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Speech &amp; Text Analytics publish programs job by id
	 * 
	 * @param {String} jobId The id of the publish programs job
	 */
	getSpeechandtextanalyticsProgramsPublishjob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getSpeechandtextanalyticsProgramsPublishjob';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/publishjobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId }, 
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
	 * Get the list of Speech &amp; Text Analytics unpublished programs
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextPage The key for listing the next page
	 * @param {Number} opts.pageSize The page size for the listing (default to 20)
	 */
	getSpeechandtextanalyticsProgramsUnpublished(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/unpublished', 
			'GET', 
			{  }, 
			{ 'nextPage': opts['nextPage'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of Speech &amp; Text Analytics SentimentFeedback
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.dialect The key for filter the listing by dialect, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard
	 */
	getSpeechandtextanalyticsSentimentfeedback(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/sentimentfeedback', 
			'GET', 
			{  }, 
			{ 'dialect': opts['dialect'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get Speech And Text Analytics Settings
	 * 
	 */
	getSpeechandtextanalyticsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/settings', 
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
	 * Get a Speech &amp; Text Analytics topic by id
	 * 
	 * @param {String} topicId The id of the topic
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
	 * Get the list of Speech &amp; Text Analytics topics
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextPage The key for listing the next page
	 * @param {Number} opts.pageSize The page size for the listing (default to 20)
	 * @param {Object} opts.state Topic state. Defaults to latest
	 * @param {String} opts.name Case insensitive partial name to filter by
	 * @param {Array.<String>} opts.ids Comma separated Topic IDs to filter by. Cannot be used with other filters. Maximum of 50 IDs allowed.
	 * @param {Object} opts.sortBy Sort results by. Defaults to name
	 * @param {Object} opts.sortOrder Sort order. Defaults to asc
	 */
	getSpeechandtextanalyticsTopics(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics', 
			'GET', 
			{  }, 
			{ 'nextPage': opts['nextPage'],'pageSize': opts['pageSize'],'state': opts['state'],'name': opts['name'],'ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi'),'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get list of supported Speech &amp; Text Analytics topics dialects
	 * 
	 */
	getSpeechandtextanalyticsTopicsDialects() { 

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics/dialects', 
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
	 * Get the Speech &amp; Text Analytics general topics for a given dialect
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.dialect The dialect of the general topics, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard
	 */
	getSpeechandtextanalyticsTopicsGeneral(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics/general', 
			'GET', 
			{  }, 
			{ 'dialect': opts['dialect'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a Speech &amp; Text Analytics publish topics job by id
	 * 
	 * @param {String} jobId The id of the publish topics job
	 */
	getSpeechandtextanalyticsTopicsPublishjob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getSpeechandtextanalyticsTopicsPublishjob';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics/publishjobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId }, 
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
	 * Patch Speech And Text Analytics Settings
	 * 
	 * @param {Object} body Speech And Text Analytics Settings
	 */
	patchSpeechandtextanalyticsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchSpeechandtextanalyticsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/settings', 
			'PATCH', 
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
	 * Create new Speech &amp; Text Analytics program
	 * 
	 * @param {Object} body The program to create
	 */
	postSpeechandtextanalyticsPrograms(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsPrograms';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs', 
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
	 * Create new Speech &amp; Text Analytics general program job
	 * 
	 * @param {Object} body The general programs job to create
	 */
	postSpeechandtextanalyticsProgramsGeneralJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsProgramsGeneralJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/general/jobs', 
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
	 * Create new Speech &amp; Text Analytics publish programs job
	 * 
	 * @param {Object} body The publish programs job to create
	 */
	postSpeechandtextanalyticsProgramsPublishjobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsProgramsPublishjobs';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/publishjobs', 
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
	 * Create a Speech &amp; Text Analytics SentimentFeedback
	 * 
	 * @param {Object} body The SentimentFeedback to create
	 */
	postSpeechandtextanalyticsSentimentfeedback(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsSentimentfeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/sentimentfeedback', 
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

	/**
	 * Create new Speech &amp; Text Analytics publish topics job
	 * 
	 * @param {Object} body The publish topics job to create
	 */
	postSpeechandtextanalyticsTopicsPublishjobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsTopicsPublishjobs';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics/publishjobs', 
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
	 * Update existing Speech &amp; Text Analytics program
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} body The program to update
	 */
	putSpeechandtextanalyticsProgram(programId, body) { 
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null) {
			throw 'Missing the required parameter "programId" when calling putSpeechandtextanalyticsProgram';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putSpeechandtextanalyticsProgram';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/{programId}', 
			'PUT', 
			{ 'programId': programId }, 
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
	 * Set Speech &amp; Text Analytics program mappings to queues and flows
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} body The program to set mappings for
	 */
	putSpeechandtextanalyticsProgramMappings(programId, body) { 
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null) {
			throw 'Missing the required parameter "programId" when calling putSpeechandtextanalyticsProgramMappings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putSpeechandtextanalyticsProgramMappings';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/{programId}/mappings', 
			'PUT', 
			{ 'programId': programId }, 
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
	 * Update Speech And Text Analytics Settings
	 * 
	 * @param {Object} body Speech And Text Analytics Settings
	 */
	putSpeechandtextanalyticsSettings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putSpeechandtextanalyticsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/settings', 
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
	 * Update existing Speech &amp; Text Analytics topic
	 * 
	 * @param {String} topicId The id of the topic
	 * @param {Object} body The topic to update
	 */
	putSpeechandtextanalyticsTopic(topicId, body) { 
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null) {
			throw 'Missing the required parameter "topicId" when calling putSpeechandtextanalyticsTopic';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putSpeechandtextanalyticsTopic';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics/{topicId}', 
			'PUT', 
			{ 'topicId': topicId }, 
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