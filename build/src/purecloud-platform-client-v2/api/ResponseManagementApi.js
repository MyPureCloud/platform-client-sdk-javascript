import ApiClient from '../ApiClient.js';


class ResponseManagementApi {
	/**
	 * ResponseManagement service.
	 * @module purecloud-platform-client-v2/api/ResponseManagementApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new ResponseManagementApi. 
	 * @alias module:purecloud-platform-client-v2/api/ResponseManagementApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete an existing response library.
	 * This will remove any responses associated with the library.
	 * @param {String} libraryId Library ID
	 */
	deleteResponsemanagementLibrary(libraryId) { 
		// verify the required parameter 'libraryId' is set
		if (libraryId === undefined || libraryId === null) {
			throw 'Missing the required parameter "libraryId" when calling deleteResponsemanagementLibrary';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/libraries/{libraryId}', 
			'DELETE', 
			{ 'libraryId': libraryId },
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
	 * Delete an existing response.
	 * This will remove the response from any libraries associated with it.
	 * @param {String} responseId Response ID
	 */
	deleteResponsemanagementResponse(responseId) { 
		// verify the required parameter 'responseId' is set
		if (responseId === undefined || responseId === null) {
			throw 'Missing the required parameter "responseId" when calling deleteResponsemanagementResponse';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responses/{responseId}', 
			'DELETE', 
			{ 'responseId': responseId },
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
	 * Delete response asset
	 * 
	 * @param {String} responseAssetId Asset Id
	 */
	deleteResponsemanagementResponseasset(responseAssetId) { 
		// verify the required parameter 'responseAssetId' is set
		if (responseAssetId === undefined || responseAssetId === null) {
			throw 'Missing the required parameter "responseAssetId" when calling deleteResponsemanagementResponseasset';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responseassets/{responseAssetId}', 
			'DELETE', 
			{ 'responseAssetId': responseAssetId },
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
	 * Gets a list of existing response libraries.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.messagingTemplateFilter Returns a list of libraries that contain responses with at least one messaging template defined for a specific message channel
	 * @param {String} opts.libraryPrefix Returns a list of libraries that contain the prefix provided
	 */
	getResponsemanagementLibraries(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/libraries', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'messagingTemplateFilter': opts['messagingTemplateFilter'],'libraryPrefix': opts['libraryPrefix'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get details about an existing response library.
	 * 
	 * @param {String} libraryId Library ID
	 */
	getResponsemanagementLibrary(libraryId) { 
		// verify the required parameter 'libraryId' is set
		if (libraryId === undefined || libraryId === null) {
			throw 'Missing the required parameter "libraryId" when calling getResponsemanagementLibrary';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/libraries/{libraryId}', 
			'GET', 
			{ 'libraryId': libraryId },
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
	 * Get details about an existing response.
	 * 
	 * @param {String} responseId Response ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getResponsemanagementResponse(responseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'responseId' is set
		if (responseId === undefined || responseId === null) {
			throw 'Missing the required parameter "responseId" when calling getResponsemanagementResponse';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responses/{responseId}', 
			'GET', 
			{ 'responseId': responseId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get response asset information
	 * 
	 * @param {String} responseAssetId Asset Id
	 */
	getResponsemanagementResponseasset(responseAssetId) { 
		// verify the required parameter 'responseAssetId' is set
		if (responseAssetId === undefined || responseAssetId === null) {
			throw 'Missing the required parameter "responseAssetId" when calling getResponsemanagementResponseasset';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responseassets/{responseAssetId}', 
			'GET', 
			{ 'responseAssetId': responseAssetId },
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
	 * Get response asset upload status
	 * 
	 * @param {String} statusId Status Id
	 */
	getResponsemanagementResponseassetsStatusStatusId(statusId) { 
		// verify the required parameter 'statusId' is set
		if (statusId === undefined || statusId === null) {
			throw 'Missing the required parameter "statusId" when calling getResponsemanagementResponseassetsStatusStatusId';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responseassets/status/{statusId}', 
			'GET', 
			{ 'statusId': statusId },
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
	 * Gets a list of existing responses.
	 * 
	 * @param {String} libraryId Library ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getResponsemanagementResponses(libraryId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'libraryId' is set
		if (libraryId === undefined || libraryId === null) {
			throw 'Missing the required parameter "libraryId" when calling getResponsemanagementResponses';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responses', 
			'GET', 
			{  },
			{ 'libraryId': libraryId,'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a response library.
	 * 
	 * @param {Object} body Library
	 */
	postResponsemanagementLibraries(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postResponsemanagementLibraries';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/libraries', 
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
	 * Search response assets
	 * 
	 * @param {Object} body request
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 */
	postResponsemanagementResponseassetsSearch(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postResponsemanagementResponseassetsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responseassets/search', 
			'POST', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Creates pre-signed url for uploading response asset
	 * 
	 * @param {Object} body request
	 */
	postResponsemanagementResponseassetsUploads(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postResponsemanagementResponseassetsUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responseassets/uploads', 
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
	 * Create a response.
	 * 
	 * @param {Object} body Response
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	postResponsemanagementResponses(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postResponsemanagementResponses';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responses', 
			'POST', 
			{  },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query responses
	 * 
	 * @param {Object} body Response
	 */
	postResponsemanagementResponsesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postResponsemanagementResponsesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responses/query', 
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
	 * Update an existing response library.
	 * Fields that can be updated: name. The most recent version is required for updates.
	 * @param {String} libraryId Library ID
	 * @param {Object} body Library
	 */
	putResponsemanagementLibrary(libraryId, body) { 
		// verify the required parameter 'libraryId' is set
		if (libraryId === undefined || libraryId === null) {
			throw 'Missing the required parameter "libraryId" when calling putResponsemanagementLibrary';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putResponsemanagementLibrary';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/libraries/{libraryId}', 
			'PUT', 
			{ 'libraryId': libraryId },
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
	 * Update an existing response.
	 * Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.
	 * @param {String} responseId Response ID
	 * @param {Object} body Response
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	putResponsemanagementResponse(responseId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'responseId' is set
		if (responseId === undefined || responseId === null) {
			throw 'Missing the required parameter "responseId" when calling putResponsemanagementResponse';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putResponsemanagementResponse';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responses/{responseId}', 
			'PUT', 
			{ 'responseId': responseId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update response asset
	 * 
	 * @param {String} responseAssetId Asset Id
	 * @param {Object} body request
	 */
	putResponsemanagementResponseasset(responseAssetId, body) { 
		// verify the required parameter 'responseAssetId' is set
		if (responseAssetId === undefined || responseAssetId === null) {
			throw 'Missing the required parameter "responseAssetId" when calling putResponsemanagementResponseasset';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putResponsemanagementResponseasset';
		}

		return this.apiClient.callApi(
			'/api/v2/responsemanagement/responseassets/{responseAssetId}', 
			'PUT', 
			{ 'responseAssetId': responseAssetId },
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


export default ResponseManagementApi;
