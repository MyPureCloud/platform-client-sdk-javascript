import ApiClient from '../ApiClient.js';


class InfrastructureAsCodeApi {
	/**
	 * InfrastructureAsCode service.
	 * @module purecloud-platform-client-v2/api/InfrastructureAsCodeApi
	 * @version 168.2.0
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
	 * Get information about an accelerator
	 * Get the complete metadata specification for an accelerator, including requirements and parameters.
	 * @param {String} acceleratorId Accelerator ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.preferredLanguage Preferred Language (default to en-US)
	 */
	getInfrastructureascodeAccelerator(acceleratorId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'acceleratorId' is set
		if (acceleratorId === undefined || acceleratorId === null) {
			throw 'Missing the required parameter "acceleratorId" when calling getInfrastructureascodeAccelerator';
		}

		return this.apiClient.callApi(
			'/api/v2/infrastructureascode/accelerators/{acceleratorId}', 
			'GET', 
			{ 'acceleratorId': acceleratorId },
			{ 'preferredLanguage': opts['preferredLanguage'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of available accelerators
	 * Search for accelerators that can be run.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.sortBy variable name requested to sort by
	 * @param {Object} opts.sortOrder Sort order (default to asc)
	 * @param {String} opts.name Filter by name
	 * @param {String} opts.description Filter by description
	 * @param {Object} opts.origin Filter by origin
	 * @param {Object} opts.type Filter by type
	 * @param {String} opts.classification Filter by classification
	 * @param {String} opts.tags Filter by tags
	 */
	getInfrastructureascodeAccelerators(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/infrastructureascode/accelerators', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'description': opts['description'],'origin': opts['origin'],'type': opts['type'],'classification': opts['classification'],'tags': opts['tags'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
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
	 * @param {Object} opts.sortBy Sort by (default to dateSubmitted)
	 * @param {Object} opts.sortOrder Sort order (default to desc)
	 * @param {String} opts.acceleratorId Find only jobs associated with this accelerator
	 * @param {String} opts.submittedBy Find only jobs submitted by this user
	 * @param {Object} opts.status Find only jobs in this state
	 */
	getInfrastructureascodeJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/infrastructureascode/jobs', 
			'GET', 
			{  },
			{ 'maxResults': opts['maxResults'],'includeErrors': opts['includeErrors'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'acceleratorId': opts['acceleratorId'],'submittedBy': opts['submittedBy'],'status': opts['status'] },
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
