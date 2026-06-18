import ApiClient from '../ApiClient.js';


class LanguageUnderstandingApi {
	/**
	 * LanguageUnderstanding service.
	 * @module purecloud-platform-client-v2/api/LanguageUnderstandingApi
	 * @version 255.1.0
	 */

	/**
	 * Constructs a new LanguageUnderstandingApi. 
	 * @alias module:purecloud-platform-client-v2/api/LanguageUnderstandingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete an NLU Domain.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteLanguageunderstandingDomain(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling deleteLanguageunderstandingDomain';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}', 
			'DELETE', 
			{ 'domainId': domainId },
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
	 * Delete the feedback on the NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} feedbackId ID of the Feedback
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling deleteLanguageunderstandingDomainFeedbackFeedbackId';
		}
		// verify the required parameter 'feedbackId' is set
		if (feedbackId === undefined || feedbackId === null || feedbackId === '') {
			throw 'Missing the required parameter "feedbackId" when calling deleteLanguageunderstandingDomainFeedbackFeedbackId';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId}', 
			'DELETE', 
			{ 'domainId': domainId,'feedbackId': feedbackId },
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
	 * Delete an NLU Domain Version
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteLanguageunderstandingDomainVersion(domainId, domainVersionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling deleteLanguageunderstandingDomainVersion';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null || domainVersionId === '') {
			throw 'Missing the required parameter "domainVersionId" when calling deleteLanguageunderstandingDomainVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}', 
			'DELETE', 
			{ 'domainId': domainId,'domainVersionId': domainVersionId },
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
	 * Delete a miner.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteLanguageunderstandingMiner(minerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling deleteLanguageunderstandingMiner';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}', 
			'DELETE', 
			{ 'minerId': minerId },
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
	 * Delete a draft
	 * 
	 * @param {String} minerId Miner ID
	 * @param {String} draftId Draft ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteLanguageunderstandingMinerDraft(minerId, draftId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling deleteLanguageunderstandingMinerDraft';
		}
		// verify the required parameter 'draftId' is set
		if (draftId === undefined || draftId === null || draftId === '') {
			throw 'Missing the required parameter "draftId" when calling deleteLanguageunderstandingMinerDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId}', 
			'DELETE', 
			{ 'minerId': minerId,'draftId': draftId },
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
	 * Find an NLU Domain.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingDomain(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getLanguageunderstandingDomain';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}', 
			'GET', 
			{ 'domainId': domainId },
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
	 * Get all feedback in the given NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.intentName The top intent name to retrieve feedback for.
	 * @param {Object} opts.assessment The top assessment to retrieve feedback for.
	 * @param {String} opts.dateStart Begin of time window as ISO-8601 date.
	 * @param {String} opts.dateEnd End of time window as ISO-8601 date.
	 * @param {Boolean} opts.includeDeleted Whether to include soft-deleted items in the result.
	 * @param {String} opts.language Whether to filter response based on the language, e.g. en-us, pt-br.
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.enableCursorPagination Enable Cursor Pagination (default to false)
	 * @param {Boolean} opts.includeTrainingUtterances Include Training Utterances. By default they're included. (default to true)
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned. This is considered only when enableCursorPagination=true
	 * @param {Array.<String>} opts.fields Fields and properties to get, comma-separated
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingDomainFeedback(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getLanguageunderstandingDomainFeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/feedback', 
			'GET', 
			{ 'domainId': domainId },
			{ 'intentName': opts['intentName'],'assessment': opts['assessment'],'dateStart': opts['dateStart'],'dateEnd': opts['dateEnd'],'includeDeleted': opts['includeDeleted'],'language': opts['language'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'enableCursorPagination': opts['enableCursorPagination'],'includeTrainingUtterances': opts['includeTrainingUtterances'],'after': opts['after'],'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi') },
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
	 * Find a Feedback
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} feedbackId ID of the Feedback
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.fields Fields and properties to get, comma-separated
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getLanguageunderstandingDomainFeedbackFeedbackId';
		}
		// verify the required parameter 'feedbackId' is set
		if (feedbackId === undefined || feedbackId === null || feedbackId === '') {
			throw 'Missing the required parameter "feedbackId" when calling getLanguageunderstandingDomainFeedbackFeedbackId';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/feedback/{feedbackId}', 
			'GET', 
			{ 'domainId': domainId,'feedbackId': feedbackId },
			{ 'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi') },
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
	 * Find an NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeUtterances Whether utterances for intent definition should be included when marshalling response.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingDomainVersion(domainId, domainVersionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getLanguageunderstandingDomainVersion';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null || domainVersionId === '') {
			throw 'Missing the required parameter "domainVersionId" when calling getLanguageunderstandingDomainVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}', 
			'GET', 
			{ 'domainId': domainId,'domainVersionId': domainVersionId },
			{ 'includeUtterances': opts['includeUtterances'] },
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
	 * Retrieved quality report for the specified NLU Domain Version
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingDomainVersionReport(domainId, domainVersionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getLanguageunderstandingDomainVersionReport';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null || domainVersionId === '') {
			throw 'Missing the required parameter "domainVersionId" when calling getLanguageunderstandingDomainVersionReport';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/report', 
			'GET', 
			{ 'domainId': domainId,'domainVersionId': domainVersionId },
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
	 * Get all NLU Domain Versions for a given Domain.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeUtterances Whether utterances for intent definition should be included when marshalling response.
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingDomainVersions(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling getLanguageunderstandingDomainVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/versions', 
			'GET', 
			{ 'domainId': domainId },
			{ 'includeUtterances': opts['includeUtterances'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Get all NLU Domains.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingDomains(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Get list of all ignored phrases of the specified language code
	 * 
	 * @param {String} languageCode Language Code
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The page size for the listing. The max that will be returned is 200. (default to 25)
	 * @param {Number} opts.pageNumber The page number for the listing (default to 1)
	 * @param {String} opts.text The phrase text filter applied to the listing
	 * @param {Object} opts.sortOrder The sort order for the listing (default to desc)
	 * @param {Object} opts.sortBy The field to sort by for the listing (default to dateModified)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingIgnorephrase(languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getLanguageunderstandingIgnorephrase';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/ignorephrases/{languageCode}', 
			'GET', 
			{ 'languageCode': languageCode },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'text': opts['text'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'] },
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
	 * Get list of all ignored topics of the specified language code
	 * 
	 * @param {String} languageCode Language Code
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The page size for the listing. The max that will be returned is 200. (default to 25)
	 * @param {Number} opts.pageNumber The page number for the listing (default to 1)
	 * @param {String} opts.text The topic text filter applied to the listing
	 * @param {Object} opts.sortOrder The sort order for the listing (default to desc)
	 * @param {Object} opts.sortBy The field to sort by for the listing (default to dateModified)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingIgnoretopic(languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getLanguageunderstandingIgnoretopic';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/ignoretopics/{languageCode}', 
			'GET', 
			{ 'languageCode': languageCode },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'text': opts['text'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'] },
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
	 * Get information about a miner.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingMiner(minerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling getLanguageunderstandingMiner';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}', 
			'GET', 
			{ 'minerId': minerId },
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
	 * Get information about a draft.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {String} draftId Draft ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.draftIntentId Parameter to filter a specific intent.
	 * @param {String} opts.draftTopicId Parameter to filter a specific topic.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingMinerDraft(minerId, draftId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling getLanguageunderstandingMinerDraft';
		}
		// verify the required parameter 'draftId' is set
		if (draftId === undefined || draftId === null || draftId === '') {
			throw 'Missing the required parameter "draftId" when calling getLanguageunderstandingMinerDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId}', 
			'GET', 
			{ 'minerId': minerId,'draftId': draftId },
			{ 'draftIntentId': opts['draftIntentId'],'draftTopicId': opts['draftTopicId'] },
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
	 * Retrieve the list of drafts created.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingMinerDrafts(minerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling getLanguageunderstandingMinerDrafts';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/drafts', 
			'GET', 
			{ 'minerId': minerId },
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
	 * Get information about a mined intent
	 * 
	 * @param {String} minerId Miner ID
	 * @param {String} intentId The ID of the intent to be retrieved.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Option to fetch utterances
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingMinerIntent(minerId, intentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling getLanguageunderstandingMinerIntent';
		}
		// verify the required parameter 'intentId' is set
		if (intentId === undefined || intentId === null || intentId === '') {
			throw 'Missing the required parameter "intentId" when calling getLanguageunderstandingMinerIntent';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/intents/{intentId}', 
			'GET', 
			{ 'minerId': minerId,'intentId': intentId },
			{ 'expand': opts['expand'] },
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
	 * Retrieve a list of mined intents.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Option to fetch utterances.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingMinerIntents(minerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling getLanguageunderstandingMinerIntents';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/intents', 
			'GET', 
			{ 'minerId': minerId },
			{ 'expand': opts['expand'] },
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
	 * Retrieves details of a particular topic.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {String} topicId The ID of the topic to be retrieved.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Option to fetch phrases
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingMinerTopic(minerId, topicId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling getLanguageunderstandingMinerTopic';
		}
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getLanguageunderstandingMinerTopic';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/topics/{topicId}', 
			'GET', 
			{ 'minerId': minerId,'topicId': topicId },
			{ 'expand': opts['expand'] },
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
	 * Retrieves utterances related to a phrase in a topic.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {String} topicId The ID of the topic to be retrieved.
	 * @param {String} phraseId The ID of the phrase to be retrieved.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingMinerTopicPhrase(minerId, topicId, phraseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling getLanguageunderstandingMinerTopicPhrase';
		}
		// verify the required parameter 'topicId' is set
		if (topicId === undefined || topicId === null || topicId === '') {
			throw 'Missing the required parameter "topicId" when calling getLanguageunderstandingMinerTopicPhrase';
		}
		// verify the required parameter 'phraseId' is set
		if (phraseId === undefined || phraseId === null || phraseId === '') {
			throw 'Missing the required parameter "phraseId" when calling getLanguageunderstandingMinerTopicPhrase';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/topics/{topicId}/phrases/{phraseId}', 
			'GET', 
			{ 'minerId': minerId,'topicId': topicId,'phraseId': phraseId },
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
	 * Retrieve a list of mined topics.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingMinerTopics(minerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling getLanguageunderstandingMinerTopics';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/topics', 
			'GET', 
			{ 'minerId': minerId },
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
	 * Retrieve the list of miners created.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.minerType Type of miner, either intent or topic
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingMiners(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners', 
			'GET', 
			{  },
			{ 'minerType': opts['minerType'] },
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
	 * Get Organization Configuration
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLanguageunderstandingSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/settings', 
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
	 * Update an NLU Domain.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {Object} body The updated NLU Domain.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchLanguageunderstandingDomain(domainId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling patchLanguageunderstandingDomain';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchLanguageunderstandingDomain';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}', 
			'PATCH', 
			{ 'domainId': domainId },
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
	 * Save information for the draft. Either topic draft or intent draft should be sent.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {String} draftId Draft ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchLanguageunderstandingMinerDraft(minerId, draftId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling patchLanguageunderstandingMinerDraft';
		}
		// verify the required parameter 'draftId' is set
		if (draftId === undefined || draftId === null || draftId === '') {
			throw 'Missing the required parameter "draftId" when calling patchLanguageunderstandingMinerDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId}', 
			'PATCH', 
			{ 'minerId': minerId,'draftId': draftId },
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
	 * Create feedback for the NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {Object} body The Feedback to create.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingDomainFeedback(domainId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling postLanguageunderstandingDomainFeedback';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingDomainFeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/feedback', 
			'POST', 
			{ 'domainId': domainId },
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
	 * Detect intent, entities, etc. in the submitted text using the specified NLU domain version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 * @param {Object} body The input data to perform detection on.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingDomainVersionDetect(domainId, domainVersionId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling postLanguageunderstandingDomainVersionDetect';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null || domainVersionId === '') {
			throw 'Missing the required parameter "domainVersionId" when calling postLanguageunderstandingDomainVersionDetect';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingDomainVersionDetect';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/detect', 
			'POST', 
			{ 'domainId': domainId,'domainVersionId': domainVersionId },
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
	 * Publish the draft NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingDomainVersionPublish(domainId, domainVersionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling postLanguageunderstandingDomainVersionPublish';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null || domainVersionId === '') {
			throw 'Missing the required parameter "domainVersionId" when calling postLanguageunderstandingDomainVersionPublish';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/publish', 
			'POST', 
			{ 'domainId': domainId,'domainVersionId': domainVersionId },
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
	 * Train the draft NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingDomainVersionTrain(domainId, domainVersionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling postLanguageunderstandingDomainVersionTrain';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null || domainVersionId === '') {
			throw 'Missing the required parameter "domainVersionId" when calling postLanguageunderstandingDomainVersionTrain';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}/train', 
			'POST', 
			{ 'domainId': domainId,'domainVersionId': domainVersionId },
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
	 * Create an NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {Object} body The NLU Domain Version to create.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeUtterances Whether utterances for intent definition should be included when marshalling response.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingDomainVersions(domainId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling postLanguageunderstandingDomainVersions';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingDomainVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/versions', 
			'POST', 
			{ 'domainId': domainId },
			{ 'includeUtterances': opts['includeUtterances'] },
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
	 * Create an NLU Domain.
	 * 
	 * @param {Object} body The NLU Domain to create.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingDomains(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingDomains';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains', 
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
	 * Add phrases to the ignored phrases list
	 * 
	 * @param {String} languageCode Language Code
	 * @param {Object} body Request body containing phrases to be ignored
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingIgnorephrase(languageCode, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postLanguageunderstandingIgnorephrase';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingIgnorephrase';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/ignorephrases/{languageCode}', 
			'POST', 
			{ 'languageCode': languageCode },
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
	 * Delete ignored phrases
	 * 
	 * @param {String} languageCode Language Code
	 * @param {Object} body Request body containing entities to be removed
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingIgnorephraseRemove(languageCode, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postLanguageunderstandingIgnorephraseRemove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingIgnorephraseRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/ignorephrases/{languageCode}/remove', 
			'POST', 
			{ 'languageCode': languageCode },
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
	 * Add topics to the ignored topics list
	 * 
	 * @param {String} languageCode Language Code
	 * @param {Object} body Request body containing topics to be ignored
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingIgnoretopic(languageCode, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postLanguageunderstandingIgnoretopic';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingIgnoretopic';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/ignoretopics/{languageCode}', 
			'POST', 
			{ 'languageCode': languageCode },
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
	 * Delete ignored topics
	 * 
	 * @param {String} languageCode Language Code
	 * @param {Object} body Request body containing entities to be removed
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingIgnoretopicRemove(languageCode, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postLanguageunderstandingIgnoretopicRemove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingIgnoretopicRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/ignoretopics/{languageCode}/remove', 
			'POST', 
			{ 'languageCode': languageCode },
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
	 * Create a new draft resource.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} body Details for creating draft resource
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingMinerDrafts(minerId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling postLanguageunderstandingMinerDrafts';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingMinerDrafts';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/drafts', 
			'POST', 
			{ 'minerId': minerId },
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
	 * Start the mining process. Specify date range pair with mediaType, queueIds, participantType for mining data from Genesys Cloud. Specify only uploadKey for mining through an external file.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingMinerExecute(minerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null || minerId === '') {
			throw 'Missing the required parameter "minerId" when calling postLanguageunderstandingMinerExecute';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/execute', 
			'POST', 
			{ 'minerId': minerId },
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
	 * Create a unique miner.
	 * 
	 * @param {Object} body Details for creating a new miner resource.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLanguageunderstandingMiners(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingMiners';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners', 
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
	 * Update an NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 * @param {Object} body The updated NLU Domain Version.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putLanguageunderstandingDomainVersion(domainId, domainVersionId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null || domainId === '') {
			throw 'Missing the required parameter "domainId" when calling putLanguageunderstandingDomainVersion';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null || domainVersionId === '') {
			throw 'Missing the required parameter "domainVersionId" when calling putLanguageunderstandingDomainVersion';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putLanguageunderstandingDomainVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/versions/{domainVersionId}', 
			'PUT', 
			{ 'domainId': domainId,'domainVersionId': domainVersionId },
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


export default LanguageUnderstandingApi;
