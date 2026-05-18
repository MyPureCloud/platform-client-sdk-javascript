import ApiClient from '../ApiClient.js';


class AIStudioApi {
	/**
	 * AIStudio service.
	 * @module purecloud-platform-client-v2/api/AIStudioApi
	 * @version 252.1.0
	 */

	/**
	 * Constructs a new AIStudioApi. 
	 * @alias module:purecloud-platform-client-v2/api/AIStudioApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a summary setting.
	 * 
	 * @param {String} summarySettingId Summary setting id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteConversationsSummariesSetting(summarySettingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'summarySettingId' is set
		if (summarySettingId === undefined || summarySettingId === null || summarySettingId === '') {
			throw 'Missing the required parameter "summarySettingId" when calling deleteConversationsSummariesSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/summaries/settings/{summarySettingId}', 
			'DELETE', 
			{ 'summarySettingId': summarySettingId },
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
	 * Start the deletion of a guide.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteGuideJobs(guideId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'guideId' is set
		if (guideId === undefined || guideId === null || guideId === '') {
			throw 'Missing the required parameter "guideId" when calling deleteGuideJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/{guideId}/jobs', 
			'DELETE', 
			{ 'guideId': guideId },
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
	 * Receive a summary setting.
	 * 
	 * @param {String} summarySettingId Summary setting id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsSummariesSetting(summarySettingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'summarySettingId' is set
		if (summarySettingId === undefined || summarySettingId === null || summarySettingId === '') {
			throw 'Missing the required parameter "summarySettingId" when calling getConversationsSummariesSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/summaries/settings/{summarySettingId}', 
			'GET', 
			{ 'summarySettingId': summarySettingId },
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
	 * Get all summary settings.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.language Filter by matching language - case insensitive.
	 * @param {String} opts.name Filter by partially matching name - case insensitive.
	 * @param {Object} opts.sortBy Sort by. Default value dateModified. (default to dateModified)
	 * @param {Object} opts.sortOrder Sort Order. Default value desc. (default to desc)
	 * @param {Number} opts.pageNumber Page number. (default to 1)
	 * @param {Number} opts.pageSize Page size. The maximum page size is 100. (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getConversationsSummariesSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/conversations/summaries/settings', 
			'GET', 
			{  },
			{ 'language': opts['language'],'name': opts['name'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Get guide.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGuide(guideId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'guideId' is set
		if (guideId === undefined || guideId === null || guideId === '') {
			throw 'Missing the required parameter "guideId" when calling getGuide';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/{guideId}', 
			'GET', 
			{ 'guideId': guideId },
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
	 * Get the specified guide deletion job.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGuideJob(guideId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'guideId' is set
		if (guideId === undefined || guideId === null || guideId === '') {
			throw 'Missing the required parameter "guideId" when calling getGuideJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getGuideJob';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/{guideId}/jobs/{jobId}', 
			'GET', 
			{ 'guideId': guideId,'jobId': jobId },
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
	 * Get a guide version.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {String} versionId Version ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGuideVersion(guideId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'guideId' is set
		if (guideId === undefined || guideId === null || guideId === '') {
			throw 'Missing the required parameter "guideId" when calling getGuideVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getGuideVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/{guideId}/versions/{versionId}', 
			'GET', 
			{ 'guideId': guideId,'versionId': versionId },
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
	 * Get the status of the publishing job for this guide version.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {String} versionId Version ID
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGuideVersionJob(guideId, versionId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'guideId' is set
		if (guideId === undefined || guideId === null || guideId === '') {
			throw 'Missing the required parameter "guideId" when calling getGuideVersionJob';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getGuideVersionJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getGuideVersionJob';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/{guideId}/versions/{versionId}/jobs/{jobId}', 
			'GET', 
			{ 'guideId': guideId,'versionId': versionId,'jobId': jobId },
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
	 * Get all guides.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.name Filter by matching name - case insensitive.
	 * @param {String} opts.nameContains Filter by name contains - case insensitive.
	 * @param {Object} opts.status Filter by status.
	 * @param {Object} opts.sortBy Sort by. Default value dateModified. (default to dateModified)
	 * @param {Object} opts.sortOrder Sort Order. Default value desc. (default to desc)
	 * @param {Number} opts.pageNumber Page number. (default to 1)
	 * @param {Number} opts.pageSize Page size. The maximum page size is 100. (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGuides(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/guides', 
			'GET', 
			{  },
			{ 'name': opts['name'],'nameContains': opts['nameContains'],'status': opts['status'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Get the status of the guide content generation job.
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getGuidesJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getGuidesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/jobs/{jobId}', 
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
	 * Update a guide.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchGuide(guideId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'guideId' is set
		if (guideId === undefined || guideId === null || guideId === '') {
			throw 'Missing the required parameter "guideId" when calling patchGuide';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchGuide';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/{guideId}', 
			'PATCH', 
			{ 'guideId': guideId },
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
	 * Update a guide version.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {String} versionId Version ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchGuideVersion(guideId, versionId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'guideId' is set
		if (guideId === undefined || guideId === null || guideId === '') {
			throw 'Missing the required parameter "guideId" when calling patchGuideVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling patchGuideVersion';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchGuideVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/{guideId}/versions/{versionId}', 
			'PATCH', 
			{ 'guideId': guideId,'versionId': versionId },
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
	 * Trigger summary preview event generation.
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsSummariesPreview(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsSummariesPreview';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/summaries/preview', 
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
	 * Create a summary setting.
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postConversationsSummariesSettings(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postConversationsSummariesSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/summaries/settings', 
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
	 * Add a turn to a guide session.
	 * Creates a new turn in the specified guide session with the provided request data. If the session ID doesnt exist, a new session will be created automatically.
	 * @param {String} guideId Guide ID
	 * @param {String} guideSessionId Guide Session ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postGuideSessionTurns(guideId, guideSessionId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'guideId' is set
		if (guideId === undefined || guideId === null || guideId === '') {
			throw 'Missing the required parameter "guideId" when calling postGuideSessionTurns';
		}
		// verify the required parameter 'guideSessionId' is set
		if (guideSessionId === undefined || guideSessionId === null || guideSessionId === '') {
			throw 'Missing the required parameter "guideSessionId" when calling postGuideSessionTurns';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGuideSessionTurns';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/{guideId}/sessions/{guideSessionId}/turns', 
			'POST', 
			{ 'guideId': guideId,'guideSessionId': guideSessionId },
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
	 * Start the publishing of a guide version.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {String} versionId Version ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postGuideVersionJobs(guideId, versionId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'guideId' is set
		if (guideId === undefined || guideId === null || guideId === '') {
			throw 'Missing the required parameter "guideId" when calling postGuideVersionJobs';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling postGuideVersionJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGuideVersionJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/{guideId}/versions/{versionId}/jobs', 
			'POST', 
			{ 'guideId': guideId,'versionId': versionId },
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
	 * Create a guide version.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postGuideVersions(guideId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'guideId' is set
		if (guideId === undefined || guideId === null || guideId === '') {
			throw 'Missing the required parameter "guideId" when calling postGuideVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/{guideId}/versions', 
			'POST', 
			{ 'guideId': guideId },
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
	 * Create a guide.
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postGuides(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGuides';
		}

		return this.apiClient.callApi(
			'/api/v2/guides', 
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
	 * Start a guide content generation job.
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postGuidesJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGuidesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/jobs', 
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
	 * Generate presigned URL for uploading a file content to generate guide
	 * 
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postGuidesUploads(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGuidesUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/guides/uploads', 
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
	 * Update a summary setting.
	 * 
	 * @param {String} summarySettingId Summary setting id
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putConversationsSummariesSetting(summarySettingId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'summarySettingId' is set
		if (summarySettingId === undefined || summarySettingId === null || summarySettingId === '') {
			throw 'Missing the required parameter "summarySettingId" when calling putConversationsSummariesSetting';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putConversationsSummariesSetting';
		}

		return this.apiClient.callApi(
			'/api/v2/conversations/summaries/settings/{summarySettingId}', 
			'PUT', 
			{ 'summarySettingId': summarySettingId },
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


export default AIStudioApi;
