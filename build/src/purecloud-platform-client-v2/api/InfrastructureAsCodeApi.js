import ApiClient from '../ApiClient.js';


class InfrastructureAsCodeApi {
	/**
	 * InfrastructureAsCode service.
	 * @module purecloud-platform-client-v2/api/InfrastructureAsCodeApi
	 * @version 160.1.0
	 */

	/**
	 * Constructs a new InfrastructureAsCodeApi. 
	 * @alias module:purecloud-platform-client-v2/api/InfrastructureAsCodeApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get job status and results
	 * Get the execution status of a submitted job, optionally including results and error details.
	 * @param {String} jobId Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.details Include details of execution, including job results or error information (default to false)
	 */
	getInfrastructureascodeJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getInfrastructureascodeJob';
		}

		return this.apiClient.callApi(
			'/api/v2/infrastructureascode/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
			{ 'details': opts['details'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get job history
	 * Get a history of submitted jobs, optionally including error messages.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.maxResults Number of jobs to show (default to 1)
	 * @param {Boolean} opts.includeErrors Include error messages (default to false)
	 * @param {Object} opts.sortBy Sort by (default to id)
	 * @param {Object} opts.sortOrder Sort order (default to asc)
	 */
	getInfrastructureascodeJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/infrastructureascode/jobs', 
			'GET', 
			{  },
			{ 'maxResults': opts['maxResults'],'includeErrors': opts['includeErrors'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a Job
	 * Create and submit a job for remote execution or see job planning results.
	 * @param {Object} body 
	 */
	postInfrastructureascodeJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postInfrastructureascodeJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/infrastructureascode/jobs', 
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


export default InfrastructureAsCodeApi;