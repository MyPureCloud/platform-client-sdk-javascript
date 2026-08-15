import ApiClient from '../ApiClient.js';


class UtilitiesApi {
	/**
	 * Utilities service.
	 * @module purecloud-platform-client-v2/api/UtilitiesApi
	 * @version 259.0.0
	 */

	/**
	 * Constructs a new UtilitiesApi. 
	 * @alias module:purecloud-platform-client-v2/api/UtilitiesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get the current system date/time
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getDate(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/date', 
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
	 * Get public ip address ranges for Genesys Cloud
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getIpranges(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/ipranges', 
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
	 * Get time zones list
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getTimezones(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/timezones', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
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
	 * Returns the information about an X509 PEM encoded certificate or certificate chain.
	 * 
	 * @param {Object} body Certificate
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postCertificateDetails(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCertificateDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/certificate/details', 
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


export default UtilitiesApi;
