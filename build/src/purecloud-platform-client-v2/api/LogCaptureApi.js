import ApiClient from '../ApiClient.js';


class LogCaptureApi {
	/**
	 * LogCapture service.
	 * @module purecloud-platform-client-v2/api/LogCaptureApi
	 * @version 225.0.0
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
	 */
	deleteDiagnosticsLogcaptureBrowserUser(userId) { 
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
			['application/json']
		);
	}

	/**
	 * Gets status of async download execution
	 * 
	 * @param {String} jobId Job ID
	 */
	getDiagnosticsLogcaptureBrowserEntriesDownloadJob(jobId) { 
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
			['application/json']
		);
	}

	/**
	 * Get log capture configuration for the user
	 * 
	 * @param {String} userId The id of the user to get browser log capture configuration
	 */
	getDiagnosticsLogcaptureBrowserUser(userId) { 
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
			['application/json']
		);
	}

	/**
	 * Get all log capture enabled users for an org
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeExpired Include expired users with log captures still available for search or download (default to false)
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
			['application/json']
		);
	}

	/**
	 * Creates an async download execution
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
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
			['application/json']
		);
	}

	/**
	 * Query collected log entries. It returns a limited amount of records, to get all records use download endpoint.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object} opts.body 
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
			['application/json']
		);
	}

	/**
	 * Enable log capture for a user or update expiration
	 * 
	 * @param {String} userId The id of the user to enable browser log capture
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
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
			['application/json']
		);
	}

}


export default LogCaptureApi;
