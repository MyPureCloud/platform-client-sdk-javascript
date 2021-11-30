import ApiClient from '../ApiClient.js';


class UploadsApi {
	/**
	 * Uploads service.
	 * @module purecloud-platform-client-v2/api/UploadsApi
	 * @version 126.1.0
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
	 * Creates a presigned URL for uploading a knowledge import file with a set of documents
	 * 
	 * @param {Object} body query
	 */
	postKnowledgeDocumentuploads(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeDocumentuploads';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/documentuploads', 
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

	/**
	 * Creates a presigned URL for uploading a chat corpus which will be used for mining by intent miner
	 * 
	 * @param {String} minerId Miner ID
	 * @param {Object} body query
	 */
	postLanguageunderstandingMinerUploads(minerId, body) { 
		// verify the required parameter 'minerId' is set
		if (minerId === undefined || minerId === null) {
			throw 'Missing the required parameter "minerId" when calling postLanguageunderstandingMinerUploads';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postLanguageunderstandingMinerUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/languageunderstanding/miners/{minerId}/uploads', 
			'POST', 
			{ 'minerId': minerId }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
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

	/**
	 * Creates presigned url for uploading a recording file
	 * 
	 * @param {Object} body query
	 */
	postUploadsRecordings(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUploadsRecordings';
		}

		return this.apiClient.callApi(
			'/api/v2/uploads/recordings', 
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

	/**
	 * Creates presigned url for uploading WFM historical data file. Requires data in csv format.
	 * 
	 * @param {Object} body query
	 */
	postUploadsWorkforcemanagementHistoricaldataCsv(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUploadsWorkforcemanagementHistoricaldataCsv';
		}

		return this.apiClient.callApi(
			'/api/v2/uploads/workforcemanagement/historicaldata/csv', 
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

	/**
	 * Creates presigned url for uploading WFM historical data file. Requires data in json format.
	 * 
	 * @param {Object} body query
	 */
	postUploadsWorkforcemanagementHistoricaldataJson(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUploadsWorkforcemanagementHistoricaldataJson';
		}

		return this.apiClient.callApi(
			'/api/v2/uploads/workforcemanagement/historicaldata/json', 
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