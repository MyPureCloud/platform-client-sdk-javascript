import ApiClient from '../ApiClient.js';


class ScreenRecordingApi {
	/**
	 * ScreenRecording service.
	 * @module purecloud-platform-client-v2/api/ScreenRecordingApi
	 * @version 225.0.0
	 */

	/**
	 * Constructs a new ScreenRecordingApi. 
	 * @alias module:purecloud-platform-client-v2/api/ScreenRecordingApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
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


export default ScreenRecordingApi;
