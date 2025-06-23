import ApiClient from '../ApiClient.js';


class UploadsApi {
	/**
	 * Uploads service.
	 * @module purecloud-platform-client-v2/api/UploadsApi
	 * @version 225.0.0
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
	 * Get content upload from URL job status
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {String} jobId Upload job ID
	 */
	getKnowledgeKnowledgebaseUploadsUrlsJob(knowledgeBaseId, jobId) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling getKnowledgeKnowledgebaseUploadsUrlsJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getKnowledgeKnowledgebaseUploadsUrlsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs/{jobId}', 
			'GET', 
			{ 'knowledgeBaseId': knowledgeBaseId,'jobId': jobId },
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
	 * Generates pre-signed URL to upload a prize image for gamification contests
	 * 
	 * @param {Object} body query
	 */
	postGamificationContestsUploadsPrizeimages(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGamificationContestsUploadsPrizeimages';
		}

		return this.apiClient.callApi(
			'/api/v2/gamification/contests/uploads/prizeimages', 
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
	 * Create upload presigned URL for draft function package file.
	 * 
	 * @param {String} actionId actionId
	 * @param {Object} body Input used to request URL upload.
	 */
	postIntegrationsActionDraftFunctionUpload(actionId, body) { 
		// verify the required parameter 'actionId' is set
		if (actionId === undefined || actionId === null || actionId === '') {
			throw 'Missing the required parameter "actionId" when calling postIntegrationsActionDraftFunctionUpload';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntegrationsActionDraftFunctionUpload';
		}

		return this.apiClient.callApi(
			'/api/v2/integrations/actions/{actionId}/draft/function/upload', 
			'POST', 
			{ 'actionId': actionId },
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
	 * Create content upload from URL job
	 * 
	 * @param {String} knowledgeBaseId Knowledge base ID
	 * @param {Object} body uploadRequest
	 */
	postKnowledgeKnowledgebaseUploadsUrlsJobs(knowledgeBaseId, body) { 
		// verify the required parameter 'knowledgeBaseId' is set
		if (knowledgeBaseId === undefined || knowledgeBaseId === null || knowledgeBaseId === '') {
			throw 'Missing the required parameter "knowledgeBaseId" when calling postKnowledgeKnowledgebaseUploadsUrlsJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postKnowledgeKnowledgebaseUploadsUrlsJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/knowledge/knowledgebases/{knowledgeBaseId}/uploads/urls/jobs', 
			'POST', 
			{ 'knowledgeBaseId': knowledgeBaseId },
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
		if (minerId === undefined || minerId === null || minerId === '') {
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
	 * Generates pre-signed URL to upload cover art for learning modules
	 * 
	 * @param {Object} body query
	 */
	postUploadsLearningCoverart(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postUploadsLearningCoverart';
		}

		return this.apiClient.callApi(
			'/api/v2/uploads/learning/coverart', 
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

}


export default UploadsApi;
