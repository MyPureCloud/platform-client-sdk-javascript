import ApiClient from '../ApiClient.js';


class LogCaptureApi {
	/**
	 * LogCapture service.
	 * @module purecloud-platform-client-v2/api/LogCaptureApi
	 * @version 185.0.0
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
	 * Gets status of async download execution
	 * 
	 * @param {String} jobId Job ID
	 */
	getDiagnosticsLogcaptureBrowserEntriesDownloadJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
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

}


export default LogCaptureApi;
