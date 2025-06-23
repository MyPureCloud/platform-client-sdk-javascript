import ApiClient from '../ApiClient.js';


class EmailsApi {
	/**
	 * Emails service.
	 * @module purecloud-platform-client-v2/api/EmailsApi
	 * @version 225.0.0
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
	 */
	deleteEmailsSettingsThreading() { 

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
			['application/json']
		);
	}

	/**
	 * Get email Contact Center settings
	 * 
	 */
	getEmailsSettings() { 

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
			['application/json']
		);
	}

	/**
	 * Get email threading settings
	 * 
	 */
	getEmailsSettingsThreading() { 

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
			['application/json']
		);
	}

	/**
	 * Patch email Contact Center settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
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
			['application/json']
		);
	}

	/**
	 * Patch email threading settings
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
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
			['application/json']
		);
	}

}


export default EmailsApi;
