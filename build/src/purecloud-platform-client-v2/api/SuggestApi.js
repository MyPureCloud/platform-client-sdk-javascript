import ApiClient from '../ApiClient.js';


class SuggestApi {
	/**
	 * Suggest service.
	 * @module purecloud-platform-client-v2/api/SuggestApi
	 * @version 126.1.0
	 */

	/**
	 * Constructs a new SuggestApi. 
	 * @alias module:purecloud-platform-client-v2/api/SuggestApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Search using the q64 value returned from a previous search.
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Boolean} opts.profile profile (default to true)
	 */
	getSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/search', 
			'GET', 
			{  }, 
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'profile': opts['profile'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Suggest resources using the q64 value returned from a previous suggest query.
	 * 
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Boolean} opts.profile profile (default to true)
	 */
	getSearchSuggest(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getSearchSuggest';
		}

		return this.apiClient.callApi(
			'/api/v2/search/suggest', 
			'GET', 
			{  }, 
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'profile': opts['profile'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Search resources.
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.profile profile (default to true)
	 */
	postSearch(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/search', 
			'POST', 
			{  }, 
			{ 'profile': opts['profile'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Suggest resources.
	 * 
	 * @param {Object} body Search request options
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.profile profile (default to true)
	 */
	postSearchSuggest(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postSearchSuggest';
		}

		return this.apiClient.callApi(
			'/api/v2/search/suggest', 
			'POST', 
			{  }, 
			{ 'profile': opts['profile'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default SuggestApi;