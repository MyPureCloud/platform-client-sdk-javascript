import ApiClient from '../ApiClient.js';


class LogCaptureApi {
	/**
	 * LogCapture service.
	 * @module purecloud-platform-client-v2/api/LogCaptureApi
	 * @version 251.0.0
	 */

	/**
	 * Constructs a new LogCaptureApi. 
	 * @alias module:purecloud-platform-client-v2/api/LogCaptureApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Disable browser log capture for the user
	 * 
	 * @param {String} userId The id of the user to disable browser log capture
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteDiagnosticsLogcaptureBrowserUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling deleteDiagnosticsLogcaptureBrowserUser';
		}

		return this.apiClient.callApi(
			'/api/v2/diagnostics/logcapture/browser/users/{userId}', 
			'DELETE', 
			{ 'userId': userId },
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
	 * Gets status of async download execution
	 * 
	 * @param {String} jobId Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDiagnosticsLogcaptureBrowserEntriesDownloadJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getDiagnosticsLogcaptureBrowserEntriesDownloadJob';
		}

		return this.apiClient.callApi(
			'/api/v2/diagnostics/logcapture/browser/entries/download/jobs/{jobId}', 
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
	 * Get log capture configuration for the user
	 * 
	 * @param {String} userId The id of the user to get browser log capture configuration
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDiagnosticsLogcaptureBrowserUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getDiagnosticsLogcaptureBrowserUser';
		}

		return this.apiClient.callApi(
			'/api/v2/diagnostics/logcapture/browser/users/{userId}', 
			'GET', 
			{ 'userId': userId },
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
	 * Get all log capture enabled users for an org
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeExpired Include expired users with log captures still available for search or download (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDiagnosticsLogcaptureBrowserUsers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/diagnostics/logcapture/browser/users', 
			'GET', 
			{  },
			{ 'includeExpired': opts['includeExpired'] },
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
	 * Creates an async download execution
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postDiagnosticsLogcaptureBrowserEntriesDownloadJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/diagnostics/logcapture/browser/entries/download/jobs', 
			'POST', 
			{  },
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
	 * Query collected log entries. It returns a limited amount of records, to get all records use download endpoint.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postDiagnosticsLogcaptureBrowserEntriesQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/diagnostics/logcapture/browser/entries/query', 
			'POST', 
			{  },
			{ 'after': opts['after'],'pageSize': opts['pageSize'] },
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
	 * Enable log capture for a user or update expiration
	 * 
	 * @param {String} userId The id of the user to enable browser log capture
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postDiagnosticsLogcaptureBrowserUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postDiagnosticsLogcaptureBrowserUser';
		}

		return this.apiClient.callApi(
			'/api/v2/diagnostics/logcapture/browser/users/{userId}', 
			'POST', 
			{ 'userId': userId },
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

}


export default LogCaptureApi;
