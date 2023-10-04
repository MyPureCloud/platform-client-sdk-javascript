import ApiClient from '../ApiClient.js';


class SignedDataApi {
	/**
	 * SignedData service.
	 * @module purecloud-platform-client-v2/api/SignedDataApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new SignedDataApi. 
	 * @alias module:purecloud-platform-client-v2/api/SignedDataApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Sign identifying information
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<String, {String: Object}>} opts.body 
	 */
	postSigneddata(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/signeddata', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default SignedDataApi;
