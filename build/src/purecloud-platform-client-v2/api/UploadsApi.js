import ApiClient from '../ApiClient.js';


class UploadsApi {
	/**
	 * Uploads service.
	 * @module purecloud-platform-client-v2/api/UploadsApi
	 * @version 94.0.0
	 */

	/**
	 * Constructs a new UploadsApi. 
	 * @alias module:purecloud-platform-client-v2/api/UploadsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Creates presigned url for uploading a public asset image
	 * 
	 * @param {Object} body query
	 */
	postUploadsPublicassetsImages(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUploadsPublicassetsImages';
		}

		return this.apiClient.callApi(
			'/api/v2/uploads/publicassets/images', 
			'POST', 
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


export default UploadsApi;