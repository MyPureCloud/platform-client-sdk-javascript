import ApiClient from '../ApiClient.js';


class AIStudioApi {
	/**
	 * AIStudio service.
	 * @module purecloud-platform-client-v2/api/AIStudioApi
	 * @version 225.0.0
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
	 * Start the deletion of a guide.
	 * 
	 * @param {String} guideId Guide ID
	 * deleteGuideJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	deleteGuideJobs(guideId) { 
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
			['application/json']
		);
	}

	/**
	 * Get guide.
	 * 
	 * @param {String} guideId Guide ID
	 * getGuide is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getGuide(guideId) { 
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
			['application/json']
		);
	}

	/**
	 * Get the specified guide deletion job.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {String} jobId jobId
	 * getGuideJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getGuideJob(guideId, jobId) { 
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
			['application/json']
		);
	}

	/**
	 * Get a guide version.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {String} versionId Version ID
	 * getGuideVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getGuideVersion(guideId, versionId) { 
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
			['application/json']
		);
	}

	/**
	 * Get the status of the publishing job for this guide version.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {String} versionId Version ID
	 * @param {String} jobId jobId
	 * getGuideVersionJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getGuideVersionJob(guideId, versionId, jobId) { 
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
			['application/json']
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
	 * getGuides is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Get the status of the guide content generation job.
	 * 
	 * @param {String} jobId jobId
	 * getGuidesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getGuidesJob(jobId) { 
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
			['application/json']
		);
	}

	/**
	 * Update a guide version.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {String} versionId Version ID
	 * @param {Object} body 
	 * patchGuideVersion is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchGuideVersion(guideId, versionId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Start the publishing of a guide version.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {String} versionId Version ID
	 * @param {Object} body 
	 * postGuideVersionJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postGuideVersionJobs(guideId, versionId, body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a guide version.
	 * 
	 * @param {String} guideId Guide ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * postGuideVersions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
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
			['application/json']
		);
	}

	/**
	 * Create a guide.
	 * 
	 * @param {Object} body 
	 * postGuides is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postGuides(body) { 
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
			['application/json']
		);
	}

	/**
	 * Start a guide content generation job.
	 * 
	 * @param {Object} body 
	 * postGuidesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postGuidesJobs(body) { 
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
			['application/json']
		);
	}

}


export default AIStudioApi;
