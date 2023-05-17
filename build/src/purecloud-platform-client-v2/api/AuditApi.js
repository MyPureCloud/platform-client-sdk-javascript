import ApiClient from '../ApiClient.js';


class AuditApi {
	/**
	 * Audit service.
	 * @module purecloud-platform-client-v2/api/AuditApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new AuditApi. 
	 * @alias module:purecloud-platform-client-v2/api/AuditApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get service mapping information used in realtime audits.
	 * 
	 */
	getAuditsQueryRealtimeServicemapping() { 

		return this.apiClient.callApi(
			'/api/v2/audits/query/realtime/servicemapping', 
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
	 * Get service mapping information used in audits.
	 * 
	 */
	getAuditsQueryServicemapping() { 

		return this.apiClient.callApi(
			'/api/v2/audits/query/servicemapping', 
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
	 * Get status of audit query execution
	 * 
	 * @param {String} transactionId Transaction ID
	 */
	getAuditsQueryTransactionId(transactionId) { 
		// verify the required parameter 'transactionId' is set
		if (transactionId === undefined || transactionId === null) {
			throw 'Missing the required parameter "transactionId" when calling getAuditsQueryTransactionId';
		}

		return this.apiClient.callApi(
			'/api/v2/audits/query/{transactionId}', 
			'GET', 
			{ 'transactionId': transactionId },
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
	 * Get results of audit query
	 * 
	 * @param {String} transactionId Transaction ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.cursor Indicates where to resume query results (not required for first page)
	 * @param {Number} opts.pageSize Indicates maximum number of results in response. Default page size is 25 results. The maximum page size is 500. (default to 25)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 */
	getAuditsQueryTransactionIdResults(transactionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'transactionId' is set
		if (transactionId === undefined || transactionId === null) {
			throw 'Missing the required parameter "transactionId" when calling getAuditsQueryTransactionIdResults';
		}

		return this.apiClient.callApi(
			'/api/v2/audits/query/{transactionId}/results', 
			'GET', 
			{ 'transactionId': transactionId },
			{ 'cursor': opts['cursor'],'pageSize': opts['pageSize'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create audit query execution
	 * Use /api/v2/audits/query/servicemapping endpoint for a list of valid values
	 * @param {Object} body query
	 */
	postAuditsQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuditsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/audits/query', 
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
	 * This endpoint will only retrieve 14 days worth of audits for certain services. Please use /query to get a full list and older audits.
	 * Use /api/v2/audits/query/realtime/servicemapping endpoint for a list of valid values
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 */
	postAuditsQueryRealtime(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAuditsQueryRealtime';
		}

		return this.apiClient.callApi(
			'/api/v2/audits/query/realtime', 
			'POST', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default AuditApi;
