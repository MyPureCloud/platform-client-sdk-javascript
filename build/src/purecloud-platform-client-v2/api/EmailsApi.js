import ApiClient from '../ApiClient.js';


class EmailsApi {
	/**
	 * Emails service.
	 * @module purecloud-platform-client-v2/api/EmailsApi
	 * @version 249.1.0
	 */

	/**
	 * Constructs a new EmailsApi. 
	 * @alias module:purecloud-platform-client-v2/api/EmailsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Reset email threading settings to default
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteEmailsSettingsThreading(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/emails/settings/threading', 
			'DELETE', 
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
	 * Get email Contact Center settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getEmailsSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/emails/settings', 
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
	 * Get email threading settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getEmailsSettingsThreading(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/emails/settings/threading', 
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
	 * Patch email Contact Center settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchEmailsSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/emails/settings', 
			'PATCH', 
			{  },
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
	 * Patch email threading settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchEmailsSettingsThreading(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/emails/settings/threading', 
			'PATCH', 
			{  },
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

}


export default EmailsApi;
