import ApiClient from '../ApiClient.js';


class UsageApi {
	/**
	 * Usage service.
	 * @module purecloud-platform-client-v2/api/UsageApi
	 * @version 126.1.0
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

}


export default UsageApi;