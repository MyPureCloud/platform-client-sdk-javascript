import ApiClient from '../ApiClient.js';


class DataPrivacyApi {
	/**
	 * DataPrivacy service.
	 * @module purecloud-platform-client-v2/api/DataPrivacyApi
	 * @version 249.1.0
	 */

	/**
	 * Constructs a new DataPrivacyApi. 
	 * @alias module:purecloud-platform-client-v2/api/DataPrivacyApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a masking rule.
	 * 
	 * @param {String} ruleId ruleId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteDataprivacyMaskingrule(ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling deleteDataprivacyMaskingrule';
		}

		return this.apiClient.callApi(
			'/api/v2/dataprivacy/maskingrules/{ruleId}', 
			'DELETE', 
			{ 'ruleId': ruleId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch details about a masking rule.
	 * 
	 * @param {String} ruleId ruleId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDataprivacyMaskingrule(ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling getDataprivacyMaskingrule';
		}

		return this.apiClient.callApi(
			'/api/v2/dataprivacy/maskingrules/{ruleId}', 
			'GET', 
			{ 'ruleId': ruleId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve the list of masking rules.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDataprivacyMaskingrules(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/dataprivacy/maskingrules', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update information about a masking rule.
	 * 
	 * @param {String} ruleId ruleId
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchDataprivacyMaskingrule(ruleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ruleId' is set
		if (ruleId === undefined || ruleId === null || ruleId === '') {
			throw 'Missing the required parameter "ruleId" when calling patchDataprivacyMaskingrule';
		}

		return this.apiClient.callApi(
			'/api/v2/dataprivacy/maskingrules/{ruleId}', 
			'PATCH', 
			{ 'ruleId': ruleId },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new masking rule resource.
	 * 
	 * @param {Object} body Details for creating masking rule resource
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postDataprivacyMaskingrules(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postDataprivacyMaskingrules';
		}

		return this.apiClient.callApi(
			'/api/v2/dataprivacy/maskingrules', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Validate masking before creating.
	 * 
	 * @param {Object} body Text to be masked
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postDataprivacyMaskingrulesValidate(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postDataprivacyMaskingrulesValidate';
		}

		return this.apiClient.callApi(
			'/api/v2/dataprivacy/maskingrules/validate', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default DataPrivacyApi;
