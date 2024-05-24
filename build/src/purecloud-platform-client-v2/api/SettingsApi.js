import ApiClient from '../ApiClient.js';


class SettingsApi {
	/**
	 * Settings service.
	 * @module purecloud-platform-client-v2/api/SettingsApi
	 * @version 193.0.0
	 */

	/**
	 * Constructs a new SettingsApi. 
	 * @alias module:purecloud-platform-client-v2/api/SettingsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
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
	 * Get the execution history enabled setting.
	 * Get the execution history enabled setting.
	 * getSettingsExecutiondata is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getSettingsExecutiondata() { 

		return this.apiClient.callApi(
			'/api/v2/settings/executiondata', 
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
	 * Edit the execution history on off setting.
	 * Edit the execution history on off setting.
	 * @param {Object} body New Execution Data Setting
	 * patchSettingsExecutiondata is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	patchSettingsExecutiondata(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchSettingsExecutiondata';
		}

		return this.apiClient.callApi(
			'/api/v2/settings/executiondata', 
			'PATCH', 
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


export default SettingsApi;
