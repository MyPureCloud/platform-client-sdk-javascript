import ApiClient from '../ApiClient.js';


class UsageApi {
	/**
	 * Usage service.
	 * @module purecloud-platform-client-v2/api/UsageApi
	 * @version 225.0.0
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
