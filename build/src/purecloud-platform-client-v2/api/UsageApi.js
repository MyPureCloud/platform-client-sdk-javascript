import ApiClient from '../ApiClient.js';


class UsageApi {
	/**
	 * Usage service.
	 * @module purecloud-platform-client-v2/api/UsageApi
	 * @version 178.2.0
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
		if (executionId === undefined || executionId === null) {
			throw 'Missing the required parameter "executionId" when calling getOauthClientUsageQueryResult';
		}
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
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
		if (clientId === undefined || clientId === null) {
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
	 * Get the results of an organizations data transfer bytes usage query
	 * 
	 * @param {String} executionId ID of the query execution
	 */
	getUsageDatatransferAggregatesQueryResult(executionId) { 
		// verify the required parameter 'executionId' is set
		if (executionId === undefined || executionId === null) {
			throw 'Missing the required parameter "executionId" when calling getUsageDatatransferAggregatesQueryResult';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/datatransfer/aggregates/query/results/{executionId}', 
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
	 * Get the results of a usage query
	 * 
	 * @param {String} executionId ID of the query execution
	 */
	getUsageQueryExecutionIdResults(executionId) { 
		// verify the required parameter 'executionId' is set
		if (executionId === undefined || executionId === null) {
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
	 * Get the results of a usage search
	 * 
	 * @param {String} executionId ID of the search execution
	 */
	getUsageSimplesearchExecutionIdResults(executionId) { 
		// verify the required parameter 'executionId' is set
		if (executionId === undefined || executionId === null) {
			throw 'Missing the required parameter "executionId" when calling getUsageSimplesearchExecutionIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/simplesearch/{executionId}/results', 
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
	 * Query data transfer bytes for an OAuth client ID usage for an organization
	 * After calling this method, you will then need to poll for the query results based on the returned execution Id
	 * @param {String} clientId Client ID
	 * @param {Object} body Query
	 */
	postOauthClientUsageDatatransferAggregatesQuery(clientId, body) { 
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
			throw 'Missing the required parameter "clientId" when calling postOauthClientUsageDatatransferAggregatesQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postOauthClientUsageDatatransferAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/oauth/clients/{clientId}/usage/datatransfer/aggregates/query', 
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
	 * Query for OAuth client API usage
	 * After calling this method, you will then need to poll for the query results based on the returned execution Id
	 * @param {String} clientId Client ID
	 * @param {Object} body Query
	 */
	postOauthClientUsageQuery(clientId, body) { 
		// verify the required parameter 'clientId' is set
		if (clientId === undefined || clientId === null) {
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
	 * Query data transfer bytes for an organization's usage
	 * After calling this method, you will then need to poll for the query results based on the returned execution Id
	 * @param {Object} body Query
	 */
	postUsageDatatransferAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUsageDatatransferAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/datatransfer/aggregates/query', 
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
	 * Search organization API Usage - 
	 * After calling this method, you will then need to poll for the query results based on the returned execution Id
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
