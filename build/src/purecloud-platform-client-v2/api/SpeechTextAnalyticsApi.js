import ApiClient from '../ApiClient.js';


class SpeechTextAnalyticsApi {
	/**
	 * SpeechTextAnalytics service.
	 * @module purecloud-platform-client-v2/api/SpeechTextAnalyticsApi
	 * @version 258.0.0
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
	 * Delete a Speech and Text Analytics category by ID
	 * 
	 * @param {String} categoryId The id of the category
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteSpeechandtextanalyticsCategory(categoryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling deleteSpeechandtextanalyticsCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/categories/{categoryId}', 
			'DELETE', 
			{ 'categoryId': categoryId },
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
	 * Delete a Speech and Text Analytics DictionaryFeedback by Id
	 * 
	 * @param {String} dictionaryFeedbackId The Id of the Dictionary Feedback
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(dictionaryFeedbackId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dictionaryFeedbackId' is set
		if (dictionaryFeedbackId === undefined || dictionaryFeedbackId === null || dictionaryFeedbackId === '') {
			throw 'Missing the required parameter "dictionaryFeedbackId" when calling deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId}', 
			'DELETE', 
			{ 'dictionaryFeedbackId': dictionaryFeedbackId },
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
	 * Delete a Speech and Text Analytics program by id
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.forceDelete Indicates whether the program is forced to be deleted or not. Required when the program to delete is the default program. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteSpeechandtextanalyticsProgram(programId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a Speech and Text Analytics Reprocessing job by Id
	 * 
	 * @param {String} jobId The Id of the Reprocessing job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * deleteSpeechandtextanalyticsReprocessingJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteSpeechandtextanalyticsReprocessingJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling deleteSpeechandtextanalyticsReprocessingJob';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}', 
			'DELETE', 
			{ 'jobId': jobId },
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
	 * Delete All Speech and Text Analytics SentimentFeedback
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteSpeechandtextanalyticsSentimentfeedback(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a Speech and Text Analytics SentimentFeedback by Id
	 * 
	 * @param {String} sentimentFeedbackId The Id of the SentimentFeedback
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId(sentimentFeedbackId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'sentimentFeedbackId' is set
		if (sentimentFeedbackId === undefined || sentimentFeedbackId === null || sentimentFeedbackId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a Speech and Text Analytics topic by id
	 * 
	 * @param {String} topicId The id of the topic
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteSpeechandtextanalyticsTopic(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of Speech and Text Analytics categories
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The page size for the listing. The max that will be returned is 25. (default to 25)
	 * @param {Number} opts.pageNumber The page number for the listing (default to 1)
	 * @param {String} opts.name The category name filter applied to the listing
	 * @param {Object} opts.sortOrder The sort order for the listing (default to asc)
	 * @param {Object} opts.sortBy The field to sort by for the listing (default to name)
	 * @param {Array.<String>} opts.ids Comma separated Category IDs to filter by. Cannot be used with other filters. Maximum of 25 IDs allowed.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsCategories(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/categories', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'name': opts['name'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'],'ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi') },
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
	 * Get a Speech and Text Analytics Category by ID
	 * 
	 * @param {String} categoryId The id of the category
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsCategory(categoryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling getSpeechandtextanalyticsCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/categories/{categoryId}', 
			'GET', 
			{ 'categoryId': categoryId },
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
	 * Get Speech and Text Analytics for a specific conversation
	 * 
	 * @param {String} conversationId Conversation Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsConversation(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of detected Speech and Text Analytics categories of conversation
	 * 
	 * @param {String} conversationId The id of the conversation
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The page size for the listing. The max that will be returned is 50. (default to 25)
	 * @param {Number} opts.pageNumber The page number for the listing (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsConversationCategories(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getSpeechandtextanalyticsConversationCategories';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/conversations/{conversationId}/categories', 
			'GET', 
			{ 'conversationId': conversationId },
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
	 * Get the pre-signed S3 URL for the transcript of a specific communication of a conversation
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} communicationId Communication ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsConversationCommunicationTranscripturl(conversationId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getSpeechandtextanalyticsConversationCommunicationTranscripturl';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of pre-signed S3 URL for the transcripts of a specific communication of a conversation
	 * 
	 * @param {String} conversationId Conversation ID
	 * @param {String} communicationId Communication ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsConversationCommunicationTranscripturls(conversationId, communicationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getSpeechandtextanalyticsConversationCommunicationTranscripturls';
		}
		// verify the required parameter 'communicationId' is set
		if (communicationId === undefined || communicationId === null || communicationId === '') {
			throw 'Missing the required parameter "communicationId" when calling getSpeechandtextanalyticsConversationCommunicationTranscripturls';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturls', 
			'GET', 
			{ 'conversationId': conversationId,'communicationId': communicationId },
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
	 * Get sentiment data
	 * 
	 * @param {String} conversationId The conversation ID of the sentiment data
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsConversationSentiments(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getSpeechandtextanalyticsConversationSentiments';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/conversations/{conversationId}/sentiments', 
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
	 * Get conversation summaries by conversation id.
	 * 
	 * @param {String} conversationId The conversation ID of the summaries
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsConversationSummaries(conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getSpeechandtextanalyticsConversationSummaries';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/conversations/{conversationId}/summaries', 
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
	 * Get the list of Speech and Text Analytics dictionary feedbacks
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.dialect The key for filter the listing by dialect, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard
	 * @param {Object} opts.transcriptionEngine Filter by transcription engine, If not provided, all transcription engines will be considered
	 * @param {String} opts.nextPage The key for listing the next page
	 * @param {Number} opts.pageSize The page size for the listing. Default is 500 per page. Note: organizations may store up to 1000 dictionary terms per dialect; use nextPage to paginate beyond the first page when listing a full dialect vocabulary. (default to 500)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsDictionaryfeedback(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/dictionaryfeedback', 
			'GET', 
			{  },
			{ 'dialect': opts['dialect'],'transcriptionEngine': opts['transcriptionEngine'],'nextPage': opts['nextPage'],'pageSize': opts['pageSize'] },
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
	 * Get a Speech and Text Analytics dictionary feedback by id
	 * 
	 * @param {String} dictionaryFeedbackId The Id of the Dictionary Feedback
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(dictionaryFeedbackId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dictionaryFeedbackId' is set
		if (dictionaryFeedbackId === undefined || dictionaryFeedbackId === null || dictionaryFeedbackId === '') {
			throw 'Missing the required parameter "dictionaryFeedbackId" when calling getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId}', 
			'GET', 
			{ 'dictionaryFeedbackId': dictionaryFeedbackId },
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
	 * Get a Speech and Text Analytics program by id
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsProgram(programId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Speech and Text Analytics program mappings to queues and flows by id
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsProgramMappings(programId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get AI Insights settings of a program
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsProgramSettingsInsights(programId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
			throw 'Missing the required parameter "programId" when calling getSpeechandtextanalyticsProgramSettingsInsights';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/{programId}/settings/insights', 
			'GET', 
			{ 'programId': programId },
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
	 * Get transcription engine settings of a program
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsProgramTranscriptionengines(programId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
			throw 'Missing the required parameter "programId" when calling getSpeechandtextanalyticsProgramTranscriptionengines';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/{programId}/transcriptionengines', 
			'GET', 
			{ 'programId': programId },
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
	 * Get the list of Speech and Text Analytics programs
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextPage The key for listing the next page
	 * @param {Number} opts.pageSize The page size for the listing (default to 20)
	 * @param {Object} opts.state Program state. Defaults to Latest
	 * @param {String} opts.name Case insensitive partial name to filter by
	 * @param {Array.<String>} opts.ids Comma separated Program IDs to filter by. Cannot be used with pagination params. Maximum of 50 IDs allowed.
	 * @param {Object} opts.sortBy Sort results by. Defaults to name
	 * @param {Object} opts.sortOrder Sort order. Defaults to asc
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsPrograms(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs', 
			'GET', 
			{  },
			{ 'nextPage': opts['nextPage'],'pageSize': opts['pageSize'],'state': opts['state'],'name': opts['name'],'ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi'),'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
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
	 * Get a Speech and Text Analytics general program job by id
	 * 
	 * @param {String} jobId The id of the publish programs job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsProgramsGeneralJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of Speech and Text Analytics programs mappings to queues and flows
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextPage The key for listing the next page
	 * @param {Number} opts.pageSize The page size for the listing (default to 20)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Speech and Text Analytics publish programs job by id
	 * 
	 * @param {String} jobId The id of the publish programs job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsProgramsPublishjob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of program AI Insights settings for the organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The page size for the listing. The max that will be returned is 100. (default to 100)
	 * @param {Number} opts.pageNumber The page number for the listing (default to 1)
	 * @param {Array.<String>} opts.programIds Comma separated Program IDs to filter by. Maximum of 50 IDs allowed.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsProgramsSettingsInsights(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/settings/insights', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'programIds': this.apiClient.buildCollectionParam(opts['programIds'], 'multi') },
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
	 * Get a Speech and Text Analytics program-topic links job by id
	 * 
	 * @param {String} jobId The id of the program-topic links job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsProgramsTopiclinksJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getSpeechandtextanalyticsProgramsTopiclinksJob';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/topiclinks/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Get supported dialects for each transcription engine
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsProgramsTranscriptionenginesDialects(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/transcriptionengines/dialects', 
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
	 * Get the list of Speech and Text Analytics unpublished programs
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextPage The key for listing the next page
	 * @param {Number} opts.pageSize The page size for the listing (default to 20)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Speech and Text Analytics reprocess job by id
	 * 
	 * @param {String} jobId The Id of the Reprocessing job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getSpeechandtextanalyticsReprocessingJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSpeechandtextanalyticsReprocessingJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getSpeechandtextanalyticsReprocessingJob';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Get a Speech and Text Analytics Reprocessing interactions statuses by job id
	 * 
	 * @param {String} jobId The Id of the Reprocessing job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getSpeechandtextanalyticsReprocessingJobInteractions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSpeechandtextanalyticsReprocessingJobInteractions(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getSpeechandtextanalyticsReprocessingJobInteractions';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}/interactions', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Get the list of Speech and Text Analytics reprocess jobs
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The page size for the listing. The max that will be returned is 100. Default is 25.
	 * @param {Number} opts.pageNumber The page number for the listing. Defaults to 1.
	 * @param {Object} opts.sortOrder Results are sorted by dateCreated. Please choose the sort order. The default is descending (desc).
	 * @param {String} opts.name Case insensitive partial name to filter by.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getSpeechandtextanalyticsReprocessingJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSpeechandtextanalyticsReprocessingJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/reprocessing/jobs', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'name': opts['name'] },
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
	 * Get the list of Speech and Text Analytics sentiment supported dialects
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsSentimentDialects(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/sentiment/dialects', 
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
	 * Get the list of Speech and Text Analytics SentimentFeedback
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.dialect The key for filter the listing by dialect, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get Speech And Text Analytics Settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsSettings(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Speech and Text Analytics topic by id
	 * 
	 * @param {String} topicId The id of the topic
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsTopic(topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of Speech and Text Analytics topics
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextPage The key for listing the next page
	 * @param {Number} opts.pageSize The page size for the listing. The max that will be returned is 500. (default to 20)
	 * @param {Number} opts.pageNumber The page number for the listing
	 * @param {Object} opts.state Topic state. Defaults to latest
	 * @param {String} opts.name Case insensitive partial name to filter by
	 * @param {Array.<String>} opts.ids Comma separated Topic IDs to filter by. Cannot be used with other filters. Maximum of 50 IDs allowed.
	 * @param {Array.<String>} opts.dialects Comma separated dialect strings to filter by. Maximum of 15 dialects allowed.
	 * @param {Object} opts.sortBy Sort results by. Defaults to name
	 * @param {Object} opts.sortOrder Sort order. Defaults to asc
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsTopics(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics', 
			'GET', 
			{  },
			{ 'nextPage': opts['nextPage'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'state': opts['state'],'name': opts['name'],'ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi'),'dialects': this.apiClient.buildCollectionParam(opts['dialects'], 'multi'),'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
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
	 * Get list of supported Speech and Text Analytics topics dialects
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsTopicsDialects(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the Speech and Text Analytics general topics for a given dialect
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.dialect The dialect of the general topics, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of general topics from the org and the system with their current status
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.dialect The dialect of the general topics, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsTopicsGeneralStatus(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics/general/status', 
			'GET', 
			{  },
			{ 'dialect': opts['dialect'] },
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
	 * Get a Speech and Text Analytics publish topics job by id
	 * 
	 * @param {String} jobId The id of the publish topics job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsTopicsPublishjob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a Speech and Text Analytics test topics phrase job by id
	 * 
	 * @param {String} jobId the id of the test topic phrase job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsTopicsTestphraseJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getSpeechandtextanalyticsTopicsTestphraseJob';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics/testphrase/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Translate a single interaction recording (or an email conversation)
	 * 
	 * @param {String} languageId Target translation language
	 * @param {String} conversationId Conversation id
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.communicationId Communication id associated with the conversation. Please provide a valid communicationId when requesting non-email interactions.
	 * @param {String} opts.recordingId Recording id associated with the communication. Please provide a valid recordingId when requesting voice interactions.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsTranslationsLanguageConversation(languageId, conversationId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageId' is set
		if (languageId === undefined || languageId === null || languageId === '') {
			throw 'Missing the required parameter "languageId" when calling getSpeechandtextanalyticsTranslationsLanguageConversation';
		}
		// verify the required parameter 'conversationId' is set
		if (conversationId === undefined || conversationId === null || conversationId === '') {
			throw 'Missing the required parameter "conversationId" when calling getSpeechandtextanalyticsTranslationsLanguageConversation';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/translations/languages/{languageId}/conversations/{conversationId}', 
			'GET', 
			{ 'languageId': languageId,'conversationId': conversationId },
			{ 'communicationId': opts['communicationId'],'recordingId': opts['recordingId'] },
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
	 * Get supported translation languages
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getSpeechandtextanalyticsTranslationsLanguages(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/translations/languages', 
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
	 * Patch Speech And Text Analytics Settings
	 * 
	 * @param {Object} body Speech And Text Analytics Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchSpeechandtextanalyticsSettings(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create new Speech and Text Analytics category
	 * 
	 * @param {Object} body The category to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSpeechandtextanalyticsCategories(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsCategories';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/categories', 
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
	 * Create a Speech and Text Analytics DictionaryFeedback
	 * 
	 * @param {Object} body The DictionaryFeedback to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSpeechandtextanalyticsDictionaryfeedback(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsDictionaryfeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/dictionaryfeedback', 
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
	 * Create new Speech and Text Analytics program
	 * 
	 * @param {Object} body The program to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSpeechandtextanalyticsPrograms(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create new Speech and Text Analytics general program job
	 * 
	 * @param {Object} body The general programs job to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSpeechandtextanalyticsProgramsGeneralJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create new Speech and Text Analytics publish programs job
	 * 
	 * @param {Object} body The publish programs job to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSpeechandtextanalyticsProgramsPublishjobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a Speech and Text Analytics reprocess job.
	 * 
	 * @param {Object} body The ReprocessJob to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postSpeechandtextanalyticsReprocessingJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postSpeechandtextanalyticsReprocessingJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsReprocessingJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/reprocessing/jobs', 
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
	 * Create a Speech and Text Analytics SentimentFeedback
	 * 
	 * @param {Object} body The SentimentFeedback to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSpeechandtextanalyticsSentimentfeedback(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create new Speech and Text Analytics topic
	 * 
	 * @param {Object} body The topic to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSpeechandtextanalyticsTopics(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create new Speech and Text Analytics publish topics job
	 * 
	 * @param {Object} body The publish topics job to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSpeechandtextanalyticsTopicsPublishjobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create new Speech and Text Analytics publish topics job
	 * 
	 * @param {Object} body The publish test topic phrase job to create
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSpeechandtextanalyticsTopicsTestphraseJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSpeechandtextanalyticsTopicsTestphraseJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/topics/testphrase/jobs', 
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
	 * Search resources.
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postSpeechandtextanalyticsTranscriptsSearch(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a Speech and Text Analytics category by ID
	 * 
	 * @param {String} categoryId The id of the category
	 * @param {Object} body The updated category
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putSpeechandtextanalyticsCategory(categoryId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling putSpeechandtextanalyticsCategory';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putSpeechandtextanalyticsCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/categories/{categoryId}', 
			'PUT', 
			{ 'categoryId': categoryId },
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
	 * Update existing Speech and Text Analytics dictionary feedback by id
	 * 
	 * @param {String} dictionaryFeedbackId The Id of the Dictionary Feedback
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(dictionaryFeedbackId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'dictionaryFeedbackId' is set
		if (dictionaryFeedbackId === undefined || dictionaryFeedbackId === null || dictionaryFeedbackId === '') {
			throw 'Missing the required parameter "dictionaryFeedbackId" when calling putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId}', 
			'PUT', 
			{ 'dictionaryFeedbackId': dictionaryFeedbackId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update existing Speech and Text Analytics program
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} body The program to update
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putSpeechandtextanalyticsProgram(programId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Set Speech and Text Analytics program mappings to queues and flows
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} body The program to set mappings for
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putSpeechandtextanalyticsProgramMappings(programId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update AI Insights settings of a program
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} body Program AI Insights setting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putSpeechandtextanalyticsProgramSettingsInsights(programId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
			throw 'Missing the required parameter "programId" when calling putSpeechandtextanalyticsProgramSettingsInsights';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putSpeechandtextanalyticsProgramSettingsInsights';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/{programId}/settings/insights', 
			'PUT', 
			{ 'programId': programId },
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
	 * Update transcription engine settings of a program
	 * 
	 * @param {String} programId The id of the program
	 * @param {Object} body Program transcription engine setting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putSpeechandtextanalyticsProgramTranscriptionengines(programId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'programId' is set
		if (programId === undefined || programId === null || programId === '') {
			throw 'Missing the required parameter "programId" when calling putSpeechandtextanalyticsProgramTranscriptionengines';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putSpeechandtextanalyticsProgramTranscriptionengines';
		}

		return this.apiClient.callApi(
			'/api/v2/speechandtextanalytics/programs/{programId}/transcriptionengines', 
			'PUT', 
			{ 'programId': programId },
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
	 * Update Speech And Text Analytics Settings
	 * 
	 * @param {Object} body Speech And Text Analytics Settings
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putSpeechandtextanalyticsSettings(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update existing Speech and Text Analytics topic
	 * 
	 * @param {String} topicId The id of the topic
	 * @param {Object} body The topic to update
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putSpeechandtextanalyticsTopic(topicId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default SpeechTextAnalyticsApi;
