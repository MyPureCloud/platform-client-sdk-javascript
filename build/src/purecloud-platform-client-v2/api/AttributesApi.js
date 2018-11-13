import ApiClient from '../ApiClient.js';


class AttributesApi {
	/**
	 * Attributes service.
	 * @module purecloud-platform-client-v2/api/AttributesApi
	 * @version 40.1.0
	 */

	/**
	 * Constructs a new AttributesApi. 
	 * @alias module:purecloud-platform-client-v2/api/AttributesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete an existing Attribute.
	 * This will remove attribute.
	 * @param {String} attributeId Attribute ID
	 */
	deleteAttribute(attributeId) { 
		// verify the required parameter 'attributeId' is set
		if (attributeId === undefined || attributeId === null) {
			throw 'Missing the required parameter "attributeId" when calling deleteAttribute';
		}

		return this.apiClient.callApi(
			'/api/v2/attributes/{attributeId}', 
			'DELETE', 
			{ 'attributeId': attributeId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get details about an existing attribute.
	 * 
	 * @param {String} attributeId Attribute ID
	 */
	getAttribute(attributeId) { 
		// verify the required parameter 'attributeId' is set
		if (attributeId === undefined || attributeId === null) {
			throw 'Missing the required parameter "attributeId" when calling getAttribute';
		}

		return this.apiClient.callApi(
			'/api/v2/attributes/{attributeId}', 
			'GET', 
			{ 'attributeId': attributeId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets a list of existing attributes.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getAttributes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/attributes', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create an attribute.
	 * 
	 * @param {Object} body Attribute
	 */
	postAttributes(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAttributes';
		}

		return this.apiClient.callApi(
			'/api/v2/attributes', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Query attributes
	 * 
	 * @param {Object} body query
	 */
	postAttributesQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAttributesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/attributes/query', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update an existing attribute.
	 * Fields that can be updated: name, description. The most recent version is required for updates.
	 * @param {String} attributeId Attribute ID
	 * @param {Object} body Attribute
	 */
	putAttribute(attributeId, body) { 
		// verify the required parameter 'attributeId' is set
		if (attributeId === undefined || attributeId === null) {
			throw 'Missing the required parameter "attributeId" when calling putAttribute';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putAttribute';
		}

		return this.apiClient.callApi(
			'/api/v2/attributes/{attributeId}', 
			'PUT', 
			{ 'attributeId': attributeId }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud Auth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default AttributesApi;