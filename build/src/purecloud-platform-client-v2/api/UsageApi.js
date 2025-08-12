import ApiClient from '../ApiClient.js';


class UsageApi {
	/**
	 * Usage service.
	 * @module purecloud-platform-client-v2/api/UsageApi
	 * @version 229.1.0
	 */

	/**
	 * Constructs a new UsageApi. 
	 * @alias module:purecloud-platform-client-v2/api/UsageApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get the results of a usage query
	 * 
	 * @param {String} executionId ID of the query execution
	 * @param {String} clientId Client ID
	 */
	getOauthClientUsageQueryResult(executionId, clientId) { 
		// verify the required parameter 'executionId' is set
		if (executionId === undefined || executionId === null || executionId === '') {
			throw 'Missing the required parameter "executionId" when calling getOauthClientUsageQueryResult';
		}
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null || clientId === '') {
			throw 'Missing the required parameter "clientId" when calling getOauthClientUsageQueryResult';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}/usage/query/results/{executionId}', 
			'GET', 
			{ 'executionId': executionId,'clientId': clientId },
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
	 * Get a summary of OAuth client API usage
	 * After calling this method, you will then need to poll for the query results based on the returned execution Id
	 * @param {String} clientId Client ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.days Previous number of days to query (default to 7)
	 */
	getOauthClientUsageSummary(clientId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null || clientId === '') {
			throw 'Missing the required parameter "clientId" when calling getOauthClientUsageSummary';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}/usage/summary', 
			'GET', 
			{ 'clientId': clientId },
			{ 'days': opts['days'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the status and results of the usage query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size of the results. Max is 1000. (default to 100)
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 */
	getUsageAggregatesQueryJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getUsageAggregatesQueryJob';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/aggregates/query/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the status and results of the usage query
	 * 
	 * @param {String} clientId clientId
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size of the results. Max is 1000. (default to 100)
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 */
	getUsageClientClientIdAggregatesQueryJob(clientId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null || clientId === '') {
			throw 'Missing the required parameter "clientId" when calling getUsageClientClientIdAggregatesQueryJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getUsageClientClientIdAggregatesQueryJob';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/client/{clientId}/aggregates/query/jobs/{jobId}', 
			'GET', 
			{ 'clientId': clientId,'jobId': jobId },
			{ 'pageSize': opts['pageSize'],'after': opts['after'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the results of a usage query
	 * 
	 * @param {String} executionId ID of the query execution
	 */
	getUsageQueryExecutionIdResults(executionId) { 
		// verify the required parameter 'executionId' is set
		if (executionId === undefined || executionId === null || executionId === '') {
			throw 'Missing the required parameter "executionId" when calling getUsageQueryExecutionIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/query/{executionId}/results', 
			'GET', 
			{ 'executionId': executionId },
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
	 * Get the results of a usage search. Number of records to be returned is limited to 20,000 results.
	 * 
	 * @param {String} executionId ID of the search execution
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned
	 * @param {Number} opts.pageSize The max number of entities to be returned per request. Maximum page size of 1000
	 */
	getUsageSimplesearchExecutionIdResults(executionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'executionId' is set
		if (executionId === undefined || executionId === null || executionId === '') {
			throw 'Missing the required parameter "executionId" when calling getUsageSimplesearchExecutionIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/simplesearch/{executionId}/results', 
			'GET', 
			{ 'executionId': executionId },
			{ 'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query for OAuth client API usage
	 * After calling this method, you will then need to poll for the query results based on the returned execution Id
	 * @param {String} clientId Client ID
	 * @param {Object} body Query
	 */
	postOauthClientUsageQuery(clientId, body) { 
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null || clientId === '') {
			throw 'Missing the required parameter "clientId" when calling postOauthClientUsageQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOauthClientUsageQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}/usage/query', 
			'POST', 
			{ 'clientId': clientId },
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
	 * Query your organization's public api usage.
	 * After calling this method, you will need to save the queryExecutionId from the response and use it in a call to the results endpoint to get the results
	 * @param {Object} body Query
	 */
	postUsageAggregatesQueryJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsageAggregatesQueryJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/aggregates/query/jobs', 
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
	 * Query your client's public api usage.
	 * After calling this method, you will need to save the queryExecutionId from the response and use it in a call to the results endpoint to get the results
	 * @param {String} clientId clientId
	 * @param {Object} body Query
	 */
	postUsageClientClientIdAggregatesQueryJobs(clientId, body) { 
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null || clientId === '') {
			throw 'Missing the required parameter "clientId" when calling postUsageClientClientIdAggregatesQueryJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsageClientClientIdAggregatesQueryJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/client/{clientId}/aggregates/query/jobs', 
			'POST', 
			{ 'clientId': clientId },
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
	 * Query organization API Usage - 
	 * After calling this method, you will then need to poll for the query results based on the returned execution Id
	 * @param {Object} body Query
	 */
	postUsageQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsageQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/query', 
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
	 * Search organization API Usage
	 * After calling this method, you will then need to poll for the query results based on the returned execution Id. The number of records is limited to 20,000 results
	 * @param {Object} body SimpleSearch
	 */
	postUsageSimplesearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsageSimplesearch';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/simplesearch', 
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


export default UsageApi;
