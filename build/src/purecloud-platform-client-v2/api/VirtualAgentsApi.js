import ApiClient from '../ApiClient.js';


class VirtualAgentsApi {
	/**
	 * VirtualAgents service.
	 * @module purecloud-platform-client-v2/api/VirtualAgentsApi
	 * @version 267.1.0
	 */

	/**
	 * Constructs a new VirtualAgentsApi. 
	 * @alias module:purecloud-platform-client-v2/api/VirtualAgentsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Start the deletion of a virtualAgent.
	 * 
	 * @param {String} virtualAgentId Virtual Agent ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteAgenticVirtualagentJobs(virtualAgentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'virtualAgentId' is set
		if (virtualAgentId === undefined || virtualAgentId === null || virtualAgentId === '') {
			throw 'Missing the required parameter "virtualAgentId" when calling deleteAgenticVirtualagentJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents/{virtualAgentId}/jobs', 
			'DELETE', 
			{ 'virtualAgentId': virtualAgentId },
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
	 * Get virtual agent.
	 * 
	 * @param {String} virtualAgentId Virtual Agent ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAgenticVirtualagent(virtualAgentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'virtualAgentId' is set
		if (virtualAgentId === undefined || virtualAgentId === null || virtualAgentId === '') {
			throw 'Missing the required parameter "virtualAgentId" when calling getAgenticVirtualagent';
		}

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents/{virtualAgentId}', 
			'GET', 
			{ 'virtualAgentId': virtualAgentId },
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
	 * Get a virtualAgent job.
	 * 
	 * @param {String} virtualAgentId Virtual Agent ID
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAgenticVirtualagentJob(virtualAgentId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'virtualAgentId' is set
		if (virtualAgentId === undefined || virtualAgentId === null || virtualAgentId === '') {
			throw 'Missing the required parameter "virtualAgentId" when calling getAgenticVirtualagentJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAgenticVirtualagentJob';
		}

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents/{virtualAgentId}/jobs/{jobId}', 
			'GET', 
			{ 'virtualAgentId': virtualAgentId,'jobId': jobId },
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
	 * Get a virtual agent version.
	 * 
	 * @param {String} virtualAgentId Virtual Agent ID
	 * @param {String} versionId Version ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAgenticVirtualagentVersion(virtualAgentId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'virtualAgentId' is set
		if (virtualAgentId === undefined || virtualAgentId === null || virtualAgentId === '') {
			throw 'Missing the required parameter "virtualAgentId" when calling getAgenticVirtualagentVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getAgenticVirtualagentVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}', 
			'GET', 
			{ 'virtualAgentId': virtualAgentId,'versionId': versionId },
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
	 * Get the status of the publishing job for this virtual agent version.
	 * 
	 * @param {String} virtualAgentId Virtual Agent ID
	 * @param {String} versionId Version ID
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getAgenticVirtualagentVersionJob(virtualAgentId, versionId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'virtualAgentId' is set
		if (virtualAgentId === undefined || virtualAgentId === null || virtualAgentId === '') {
			throw 'Missing the required parameter "virtualAgentId" when calling getAgenticVirtualagentVersionJob';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getAgenticVirtualagentVersionJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getAgenticVirtualagentVersionJob';
		}

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}/jobs/{jobId}', 
			'GET', 
			{ 'virtualAgentId': virtualAgentId,'versionId': versionId,'jobId': jobId },
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
	 * Get all virtual agents.
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
	getAgenticVirtualagents(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents', 
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
	 * Update a virtual agent.
	 * 
	 * @param {String} virtualAgentId Virtual Agent ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchAgenticVirtualagent(virtualAgentId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'virtualAgentId' is set
		if (virtualAgentId === undefined || virtualAgentId === null || virtualAgentId === '') {
			throw 'Missing the required parameter "virtualAgentId" when calling patchAgenticVirtualagent';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAgenticVirtualagent';
		}

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents/{virtualAgentId}', 
			'PATCH', 
			{ 'virtualAgentId': virtualAgentId },
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
	 * Update a virtual agent version.
	 * When validateOnly is true, the update is validated without saving the version.
	 * @param {String} virtualAgentId Virtual Agent ID
	 * @param {String} versionId Version ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.validateOnly Validate the update without saving the version. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchAgenticVirtualagentVersion(virtualAgentId, versionId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'virtualAgentId' is set
		if (virtualAgentId === undefined || virtualAgentId === null || virtualAgentId === '') {
			throw 'Missing the required parameter "virtualAgentId" when calling patchAgenticVirtualagentVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling patchAgenticVirtualagentVersion';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchAgenticVirtualagentVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}', 
			'PATCH', 
			{ 'virtualAgentId': virtualAgentId,'versionId': versionId },
			{ 'validateOnly': opts['validateOnly'] },
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
	 * Start the publishing of a virtual agent version.
	 * 
	 * @param {String} virtualAgentId Virtual Agent ID
	 * @param {String} versionId Version ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAgenticVirtualagentVersionJobs(virtualAgentId, versionId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'virtualAgentId' is set
		if (virtualAgentId === undefined || virtualAgentId === null || virtualAgentId === '') {
			throw 'Missing the required parameter "virtualAgentId" when calling postAgenticVirtualagentVersionJobs';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling postAgenticVirtualagentVersionJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAgenticVirtualagentVersionJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents/{virtualAgentId}/versions/{versionId}/jobs', 
			'POST', 
			{ 'virtualAgentId': virtualAgentId,'versionId': versionId },
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
	 * Create a virtual agent version.
	 * When validateOnly is true, the request is validated without creating a version.
	 * @param {String} virtualAgentId Virtual Agent ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.validateOnly Validate the request without creating the version. (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAgenticVirtualagentVersions(virtualAgentId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'virtualAgentId' is set
		if (virtualAgentId === undefined || virtualAgentId === null || virtualAgentId === '') {
			throw 'Missing the required parameter "virtualAgentId" when calling postAgenticVirtualagentVersions';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAgenticVirtualagentVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents/{virtualAgentId}/versions', 
			'POST', 
			{ 'virtualAgentId': virtualAgentId },
			{ 'validateOnly': opts['validateOnly'] },
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
	 * Create a virtual agent.
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postAgenticVirtualagents(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAgenticVirtualagents';
		}

		return this.apiClient.callApi(
			'/api/v2/agentic/virtualagents', 
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

}


export default VirtualAgentsApi;
