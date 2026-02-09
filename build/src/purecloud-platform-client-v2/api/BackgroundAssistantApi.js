import ApiClient from '../ApiClient.js';


class BackgroundAssistantApi {
	/**
	 * BackgroundAssistant service.
	 * @module purecloud-platform-client-v2/api/BackgroundAssistantApi
	 * @version 245.0.0
	 */

	/**
	 * Constructs a new BackgroundAssistantApi. 
	 * @alias module:purecloud-platform-client-v2/api/BackgroundAssistantApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Sign identifying information for Genesys Cloud Background Assistant
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * postBackgroundassistantToken is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postBackgroundassistantToken(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/backgroundassistant/token', 
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

	/**
	 * Sign identifying information for screen recording
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postScreenrecordingToken(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/screenrecording/token', 
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


export default BackgroundAssistantApi;
