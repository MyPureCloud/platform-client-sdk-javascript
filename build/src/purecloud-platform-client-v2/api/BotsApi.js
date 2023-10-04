import ApiClient from '../ApiClient.js';


class BotsApi {
	/**
	 * Bots service.
	 * @module purecloud-platform-client-v2/api/BotsApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new BotsApi. 
	 * @alias module:purecloud-platform-client-v2/api/BotsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Start a process (job) to prepare a download of a singular bot execution data instance by Id
	 * Returns a JobResult object that contains an ID that can be used to check status and/or download links when the process (job) is complete.
	 * @param {String} instanceId Instance ID
	 */
	getBotsInstance(instanceId) { 
		// verify the required parameter 'instanceId' is set
		if (instanceId === undefined || instanceId === null) {
			throw 'Missing the required parameter "instanceId" when calling getBotsInstance';
		}

		return this.apiClient.callApi(
			'/api/v2/bots/instances/{instanceId}', 
			'GET', 
			{ 'instanceId': instanceId },
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
	 * Gets the status and/or results of an asynchronous bot execution data retrieval job
	 * 
	 * @param {String} jobId The asynchronous job ID
	 */
	getBotsInstancesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getBotsInstancesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/bots/instances/jobs/{jobId}', 
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
	 * Retrieve a list of capabilities that the org can use to query for execution data
	 * Returns the queryable parameters that can be used to build a query for execution data.
	 */
	getBotsInstancesQuerycapabilities() { 

		return this.apiClient.callApi(
			'/api/v2/bots/instances/querycapabilities', 
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
	 * Start a process (job) that will prepare a list of execution data IDs for download.
	 * Returns a JobResult object that contains an ID that can be used to check status and/or download links when the process (job) is complete.
	 * @param {Object} body Requested Bot Ids
	 */
	postBotsInstancesJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBotsInstancesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/bots/instances/jobs', 
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
	 * Query the database of existing bot execution histories to look for particular bot criteria
	 * Returns a list of matching bot execution histories up to 200 max.
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.indexOnly indexes only
	 */
	postBotsInstancesQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postBotsInstancesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/bots/instances/query', 
			'POST', 
			{  },
			{ 'indexOnly': opts['indexOnly'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default BotsApi;
