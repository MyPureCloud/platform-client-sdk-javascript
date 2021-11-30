import ApiClient from '../ApiClient.js';


class FlowsApi {
	/**
	 * Flows service.
	 * @module purecloud-platform-client-v2/api/FlowsApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new FlowsApi. 
	 * @alias module:purecloud-platform-client-v2/api/FlowsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Query for flow aggregates
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsFlowsAggregatesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsFlowsAggregatesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flows/aggregates/query', 
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
	 * Query for flow observations
	 * 
	 * @param {Object} body query
	 */
	postAnalyticsFlowsObservationsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAnalyticsFlowsObservationsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/analytics/flows/observations/query', 
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


export default FlowsApi;