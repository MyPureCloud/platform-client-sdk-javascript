import ApiClient from '../ApiClient.js';


class UserRecordingsApi {
	/**
	 * UserRecordings service.
	 * @module purecloud-platform-client-v2/api/UserRecordingsApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new UserRecordingsApi. 
	 * @alias module:purecloud-platform-client-v2/api/UserRecordingsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a user recording.
	 * 
	 * @param {String} recordingId User Recording ID
	 */
	deleteUserrecording(recordingId) { 
		// verify the required parameter 'recordingId' is set
		if (recordingId === undefined || recordingId === null) {
			throw 'Missing the required parameter "recordingId" when calling deleteUserrecording';
		}

		return this.apiClient.callApi(
			'/api/v2/userrecordings/{recordingId}', 
			'DELETE', 
			{ 'recordingId': recordingId },
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
	 * Get a user recording.
	 * 
	 * @param {String} recordingId User Recording ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 */
	getUserrecording(recordingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'recordingId' is set
		if (recordingId === undefined || recordingId === null) {
			throw 'Missing the required parameter "recordingId" when calling getUserrecording';
		}

		return this.apiClient.callApi(
			'/api/v2/userrecordings/{recordingId}', 
			'GET', 
			{ 'recordingId': recordingId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Download a user recording.
	 * 
	 * @param {String} recordingId User Recording ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.formatId The desired media format. (default to WEBM)
	 * @param {Boolean} opts.async When set to true, api will return 202 response until the recording is ready for download
	 */
	getUserrecordingMedia(recordingId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'recordingId' is set
		if (recordingId === undefined || recordingId === null) {
			throw 'Missing the required parameter "recordingId" when calling getUserrecordingMedia';
		}

		return this.apiClient.callApi(
			'/api/v2/userrecordings/{recordingId}/media', 
			'GET', 
			{ 'recordingId': recordingId },
			{ 'formatId': opts['formatId'],'async': opts['async'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a list of user recordings.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 */
	getUserrecordings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/userrecordings', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get user recording summary
	 * 
	 */
	getUserrecordingsSummary() { 

		return this.apiClient.callApi(
			'/api/v2/userrecordings/summary', 
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
	 * Update a user recording.
	 * 
	 * @param {String} recordingId User Recording ID
	 * @param {Object} body UserRecording
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 */
	putUserrecording(recordingId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'recordingId' is set
		if (recordingId === undefined || recordingId === null) {
			throw 'Missing the required parameter "recordingId" when calling putUserrecording';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putUserrecording';
		}

		return this.apiClient.callApi(
			'/api/v2/userrecordings/{recordingId}', 
			'PUT', 
			{ 'recordingId': recordingId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default UserRecordingsApi;
