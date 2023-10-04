import ApiClient from '../ApiClient.js';


class DataActionMetricsApi {
	/**
	 * DataActionMetrics service.
	 * @module purecloud-platform-client-v2/api/DataActionMetricsApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new DataActionMetricsApi. 
	 * @alias module:purecloud-platform-client-v2/api/DataActionMetricsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Gets the status of a duration query
	 * 
	 * @param {String} queryId Id of the query
	 */
	getIntegrationsActionsMetricsQueriesDurationQueryId(queryId) { 
		// verify the required parameter 'queryId' is set
		if (queryId === undefined || queryId === null) {
			throw 'Missing the required parameter "queryId" when calling getIntegrationsActionsMetricsQueriesDurationQueryId';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/metrics/queries/duration/{queryId}', 
			'GET', 
			{ 'queryId': queryId },
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
	 * Gets the results of a duration query
	 * 
	 * @param {String} queryId Id of the query
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextToken Token for next page of results
	 * @param {String} opts.pageSize Indicates how large of a response should be returned. Allowed values are 1 up to 999
	 */
	getIntegrationsActionsMetricsQueriesDurationQueryIdResults(queryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queryId' is set
		if (queryId === undefined || queryId === null) {
			throw 'Missing the required parameter "queryId" when calling getIntegrationsActionsMetricsQueriesDurationQueryIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/metrics/queries/duration/{queryId}/results', 
			'GET', 
			{ 'queryId': queryId },
			{ 'nextToken': opts['nextToken'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets the status of an execution count query
	 * 
	 * @param {String} queryId Id of the query
	 */
	getIntegrationsActionsMetricsQueriesExecutioncountQueryId(queryId) { 
		// verify the required parameter 'queryId' is set
		if (queryId === undefined || queryId === null) {
			throw 'Missing the required parameter "queryId" when calling getIntegrationsActionsMetricsQueriesExecutioncountQueryId';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/metrics/queries/executioncount/{queryId}', 
			'GET', 
			{ 'queryId': queryId },
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
	 * Gets the results of an execution count query
	 * 
	 * @param {String} queryId Id of the query
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextToken Token for next page of results
	 * @param {String} opts.pageSize Indicates how large of a response should be returned. Allowed values are 1 up to 999
	 */
	getIntegrationsActionsMetricsQueriesExecutioncountQueryIdResults(queryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queryId' is set
		if (queryId === undefined || queryId === null) {
			throw 'Missing the required parameter "queryId" when calling getIntegrationsActionsMetricsQueriesExecutioncountQueryIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/metrics/queries/executioncount/{queryId}/results', 
			'GET', 
			{ 'queryId': queryId },
			{ 'nextToken': opts['nextToken'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets the status of a response code query
	 * 
	 * @param {String} queryId Id of the query
	 */
	getIntegrationsActionsMetricsQueriesResponsecodeQueryId(queryId) { 
		// verify the required parameter 'queryId' is set
		if (queryId === undefined || queryId === null) {
			throw 'Missing the required parameter "queryId" when calling getIntegrationsActionsMetricsQueriesResponsecodeQueryId';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/metrics/queries/responsecode/{queryId}', 
			'GET', 
			{ 'queryId': queryId },
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
	 * Gets the results of a response code query
	 * 
	 * @param {String} queryId Id of the query
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.nextToken Token for next page of results
	 * @param {String} opts.pageSize Indicates how large of a response should be returned. Allowed values are 1 up to 999
	 */
	getIntegrationsActionsMetricsQueriesResponsecodeQueryIdResults(queryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'queryId' is set
		if (queryId === undefined || queryId === null) {
			throw 'Missing the required parameter "queryId" when calling getIntegrationsActionsMetricsQueriesResponsecodeQueryIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/metrics/queries/responsecode/{queryId}/results', 
			'GET', 
			{ 'queryId': queryId },
			{ 'nextToken': opts['nextToken'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Start a query to get duration information about executions within a certain time range
	 * 
	 * @param {Object} body 
	 */
	postIntegrationsActionsMetricsQueriesDuration(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActionsMetricsQueriesDuration';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/metrics/queries/duration', 
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
	 * Start a query to count of all executions within a certain time range
	 * 
	 * @param {Object} body 
	 */
	postIntegrationsActionsMetricsQueriesExecutioncount(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActionsMetricsQueriesExecutioncount';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/metrics/queries/executioncount', 
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
	 * Start a query to count of all executions within a certain time range grouped by what response code they returned
	 * 
	 * @param {Object} body 
	 */
	postIntegrationsActionsMetricsQueriesResponsecode(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActionsMetricsQueriesResponsecode';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/metrics/queries/responsecode', 
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


export default DataActionMetricsApi;
