import ApiClient from '../ApiClient.js';


class LanguageUnderstandingApi {
	/**
	 * LanguageUnderstanding service.
	 * @module purecloud-platform-client-v2/api/LanguageUnderstandingApi
	 * @version 126.1.0
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
	 */
	deleteLanguageunderstandingDomain(domainId) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete the feedback on the NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} feedbackId ID of the Feedback
	 */
	deleteLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling deleteLanguageunderstandingDomainFeedbackFeedbackId';
		}
		// verify the required parameter 'feedbackId' is set
		if (feedbackId === undefined || feedbackId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete an NLU Domain Version
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 */
	deleteLanguageunderstandingDomainVersion(domainId, domainVersionId) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling deleteLanguageunderstandingDomainVersion';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a miner.
	 * 
	 * @param {String} minerId Miner ID
	 */
	deleteLanguageunderstandingMiner(minerId) { 
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a draft
	 * 
	 * @param {String} minerId Miner ID
	 * @param {String} draftId Draft ID
	 */
	deleteLanguageunderstandingMinerDraft(minerId, draftId) { 
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
			throw 'Missing the required parameter "minerId" when calling deleteLanguageunderstandingMinerDraft';
		}
		// verify the required parameter 'draftId' is set
		if (draftId === undefined || draftId === null) {
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
			['application/json']
		);
	}

	/**
	 * Find an NLU Domain.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 */
	getLanguageunderstandingDomain(domainId) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
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
			['application/json']
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
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.enableCursorPagination Enable Cursor Pagination (default to false)
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned. This is considered only when enableCursorPagination=true
	 * @param {Array.<String>} opts.fields Fields and properties to get, comma-separated
	 */
	getLanguageunderstandingDomainFeedback(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling getLanguageunderstandingDomainFeedback';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/domains/{domainId}/feedback', 
			'GET', 
			{ 'domainId': domainId }, 
			{ 'intentName': opts['intentName'],'assessment': opts['assessment'],'dateStart': opts['dateStart'],'dateEnd': opts['dateEnd'],'includeDeleted': opts['includeDeleted'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'enableCursorPagination': opts['enableCursorPagination'],'after': opts['after'],'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Find a Feedback
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} feedbackId ID of the Feedback
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.fields Fields and properties to get, comma-separated
	 */
	getLanguageunderstandingDomainFeedbackFeedbackId(domainId, feedbackId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling getLanguageunderstandingDomainFeedbackFeedbackId';
		}
		// verify the required parameter 'feedbackId' is set
		if (feedbackId === undefined || feedbackId === null) {
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
			['application/json']
		);
	}

	/**
	 * Find an NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeUtterances Whether utterances for intent definition should be included when marshalling response.
	 */
	getLanguageunderstandingDomainVersion(domainId, domainVersionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling getLanguageunderstandingDomainVersion';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null) {
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
			['application/json']
		);
	}

	/**
	 * Retrieved quality report for the specified NLU Domain Version
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 */
	getLanguageunderstandingDomainVersionReport(domainId, domainVersionId) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling getLanguageunderstandingDomainVersionReport';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null) {
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
			['application/json']
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
	 */
	getLanguageunderstandingDomainVersions(domainId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get all NLU Domains.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
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
			['application/json']
		);
	}

	/**
	 * Get information about a miner.
	 * 
	 * @param {String} minerId Miner ID
	 */
	getLanguageunderstandingMiner(minerId) { 
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get information about a draft.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {String} draftId Draft ID
	 */
	getLanguageunderstandingMinerDraft(minerId, draftId) { 
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
			throw 'Missing the required parameter "minerId" when calling getLanguageunderstandingMinerDraft';
		}
		// verify the required parameter 'draftId' is set
		if (draftId === undefined || draftId === null) {
			throw 'Missing the required parameter "draftId" when calling getLanguageunderstandingMinerDraft';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/drafts/{draftId}', 
			'GET', 
			{ 'minerId': minerId,'draftId': draftId }, 
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
	 * Retrieve the list of drafts created.
	 * 
	 * @param {String} minerId Miner ID
	 */
	getLanguageunderstandingMinerDrafts(minerId) { 
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get information about a mined intent
	 * 
	 * @param {String} minerId Miner ID
	 * @param {String} intentId The ID of the intent to be retrieved.
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand Option to fetch utterances
	 */
	getLanguageunderstandingMinerIntent(minerId, intentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
			throw 'Missing the required parameter "minerId" when calling getLanguageunderstandingMinerIntent';
		}
		// verify the required parameter 'intentId' is set
		if (intentId === undefined || intentId === null) {
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
			['application/json']
		);
	}

	/**
	 * Retrieve a list of mined intents.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.expand Option to fetch utterances.
	 */
	getLanguageunderstandingMinerIntents(minerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
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
			['application/json']
		);
	}

	/**
	 * Retrieve the list of miners created.
	 * 
	 */
	getLanguageunderstandingMiners() { 

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners', 
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
	 * Update an NLU Domain.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {Object} body The updated NLU Domain.
	 */
	patchLanguageunderstandingDomain(domainId, body) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
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
			['application/json']
		);
	}

	/**
	 * Save information for the draft. Either topic draft or intent draft should be sent.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {String} draftId Draft ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	patchLanguageunderstandingMinerDraft(minerId, draftId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
			throw 'Missing the required parameter "minerId" when calling patchLanguageunderstandingMinerDraft';
		}
		// verify the required parameter 'draftId' is set
		if (draftId === undefined || draftId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create feedback for the NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {Object} body The Feedback to create.
	 */
	postLanguageunderstandingDomainFeedback(domainId, body) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
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
			['application/json']
		);
	}

	/**
	 * Detect intent, entities, etc. in the submitted text using the specified NLU domain version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 * @param {Object} body The input data to perform detection on.
	 */
	postLanguageunderstandingDomainVersionDetect(domainId, domainVersionId, body) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling postLanguageunderstandingDomainVersionDetect';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null) {
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
			['application/json']
		);
	}

	/**
	 * Publish the draft NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 */
	postLanguageunderstandingDomainVersionPublish(domainId, domainVersionId) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling postLanguageunderstandingDomainVersionPublish';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null) {
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
			['application/json']
		);
	}

	/**
	 * Train the draft NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 */
	postLanguageunderstandingDomainVersionTrain(domainId, domainVersionId) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling postLanguageunderstandingDomainVersionTrain';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create an NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {Object} body The NLU Domain Version to create.
	 */
	postLanguageunderstandingDomainVersions(domainId, body) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
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
	 * Create an NLU Domain.
	 * 
	 * @param {Object} body The NLU Domain to create.
	 */
	postLanguageunderstandingDomains(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a new draft resource.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} body Details for creating draft resource
	 */
	postLanguageunderstandingMinerDrafts(minerId, body) { 
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
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
			['application/json']
		);
	}

	/**
	 * Start the mining process. Specify date range pair with mediaType, queueIds, participantType for mining data from Genesys Cloud. Specify only uploadKey for mining through an external file.
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postLanguageunderstandingMinerExecute(minerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create a unique miner.
	 * 
	 * @param {Object} body Details for creating a new miner resource.
	 */
	postLanguageunderstandingMiners(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update an NLU Domain Version.
	 * 
	 * @param {String} domainId ID of the NLU domain.
	 * @param {String} domainVersionId ID of the NLU domain version.
	 * @param {Object} body The updated NLU Domain Version.
	 */
	putLanguageunderstandingDomainVersion(domainId, domainVersionId, body) { 
		// verify the required parameter 'domainId' is set
		if (domainId === undefined || domainId === null) {
			throw 'Missing the required parameter "domainId" when calling putLanguageunderstandingDomainVersion';
		}
		// verify the required parameter 'domainVersionId' is set
		if (domainVersionId === undefined || domainVersionId === null) {
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
			['application/json']
		);
	}

}


export default LanguageUnderstandingApi;