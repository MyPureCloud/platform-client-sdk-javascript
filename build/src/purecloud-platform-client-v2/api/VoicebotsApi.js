import ApiClient from '../ApiClient.js';


class VoicebotsApi {
	/**
	 * Voicebots service.
	 * @module purecloud-platform-client-v2/api/VoicebotsApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new VoicebotsApi. 
	 * @alias module:purecloud-platform-client-v2/api/VoicebotsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Creates connection information that can be used to invoke a voice bot.
	 * 
	 * @param {Object} voicebotConnectionRequest 
	 */
	postVoicebotsBotConnection(voicebotConnectionRequest) { 
		// verify the required parameter 'voicebotConnectionRequest' is set
		if (voicebotConnectionRequest === undefined || voicebotConnectionRequest === null) {
			throw 'Missing the required parameter "voicebotConnectionRequest" when calling postVoicebotsBotConnection';
		}

		return this.apiClient.callApi(
			'/api/v2/voicebots/bot/connection', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			voicebotConnectionRequest, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default VoicebotsApi;
