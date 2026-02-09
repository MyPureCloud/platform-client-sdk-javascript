import ApiClient from '../ApiClient.js';


class IntentsApi {
	/**
	 * Intents service.
	 * @module purecloud-platform-client-v2/api/IntentsApi
	 * @version 245.0.0
	 */

	/**
	 * Constructs a new IntentsApi. 
	 * @alias module:purecloud-platform-client-v2/api/IntentsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete category for categoryId
	 * 
	 * @param {String} categoryId Category id
	 */
	deleteIntentsCategory(categoryId) { 
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling deleteIntentsCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/categories/{categoryId}', 
			'DELETE', 
			{ 'categoryId': categoryId },
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
	 * Delete customer intent for customerIntentId
	 * 
	 * @param {String} customerIntentId Customer Intent id
	 */
	deleteIntentsCustomerintent(customerIntentId) { 
		// verify the required parameter 'customerIntentId' is set
		if (customerIntentId === undefined || customerIntentId === null || customerIntentId === '') {
			throw 'Missing the required parameter "customerIntentId" when calling deleteIntentsCustomerintent';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/customerintents/{customerIntentId}', 
			'DELETE', 
			{ 'customerIntentId': customerIntentId },
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
	 * Get customer intent assignments for externalContactId
	 * 
	 * @param {String} externalContactId External Contact id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 */
	getIntentsAssignmentsExternalcontact(externalContactId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'externalContactId' is set
		if (externalContactId === undefined || externalContactId === null || externalContactId === '') {
			throw 'Missing the required parameter "externalContactId" when calling getIntentsAssignmentsExternalcontact';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/assignments/externalcontacts/{externalContactId}', 
			'GET', 
			{ 'externalContactId': externalContactId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get categories
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.queryValue Search query value to filter results by
	 */
	getIntentsCategories(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/intents/categories', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'queryValue': opts['queryValue'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get category for categoryId
	 * 
	 * @param {String} categoryId Category id
	 */
	getIntentsCategory(categoryId) { 
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling getIntentsCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/categories/{categoryId}', 
			'GET', 
			{ 'categoryId': categoryId },
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
	 * Get customer intent for customerIntentId
	 * 
	 * @param {String} customerIntentId Customer Intent id
	 */
	getIntentsCustomerintent(customerIntentId) { 
		// verify the required parameter 'customerIntentId' is set
		if (customerIntentId === undefined || customerIntentId === null || customerIntentId === '') {
			throw 'Missing the required parameter "customerIntentId" when calling getIntentsCustomerintent';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/customerintents/{customerIntentId}', 
			'GET', 
			{ 'customerIntentId': customerIntentId },
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
	 * Get source intents mapped to a customer intent
	 * 
	 * @param {String} customerIntentId Customer Intent id
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.queryValue Search query value to filter results by
	 */
	getIntentsCustomerintentSourceintents(customerIntentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'customerIntentId' is set
		if (customerIntentId === undefined || customerIntentId === null || customerIntentId === '') {
			throw 'Missing the required parameter "customerIntentId" when calling getIntentsCustomerintentSourceintents';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/customerintents/{customerIntentId}/sourceintents', 
			'GET', 
			{ 'customerIntentId': customerIntentId },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'queryValue': opts['queryValue'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get customer intents
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {String} opts.queryValue Search query value to filter results by
	 * @param {String} opts.categoryId CategoryId to filter query by
	 */
	getIntentsCustomerintents(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/intents/customerintents', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'queryValue': opts['queryValue'],'categoryId': opts['categoryId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get all mapped source intents by type. If no type selected default is type Segment
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize The total page size requested (default to 25)
	 * @param {Number} opts.pageNumber The page number requested (default to 1)
	 * @param {Object} opts.type Source Type to query by. If none selected default response will be for type Segment.
	 * @param {String} opts.sourceId Source Id to query by. Only required for sourceType: Copilot, Bot, Digitalbot
	 */
	getIntentsSourceintents(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/intents/sourceintents', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'type': opts['type'],'sourceId': opts['sourceId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Patch category for categoryId
	 * 
	 * @param {String} categoryId Category id
	 * @param {Object} body category
	 */
	patchIntentsCategory(categoryId, body) { 
		// verify the required parameter 'categoryId' is set
		if (categoryId === undefined || categoryId === null || categoryId === '') {
			throw 'Missing the required parameter "categoryId" when calling patchIntentsCategory';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchIntentsCategory';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/categories/{categoryId}', 
			'PATCH', 
			{ 'categoryId': categoryId },
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
	 * Patch customer intent for customerIntentId
	 * 
	 * @param {String} customerIntentId Customer Intent id
	 * @param {Object} body Customer intent
	 */
	patchIntentsCustomerintent(customerIntentId, body) { 
		// verify the required parameter 'customerIntentId' is set
		if (customerIntentId === undefined || customerIntentId === null || customerIntentId === '') {
			throw 'Missing the required parameter "customerIntentId" when calling patchIntentsCustomerintent';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchIntentsCustomerintent';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/customerintents/{customerIntentId}', 
			'PATCH', 
			{ 'customerIntentId': customerIntentId },
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
	 * Create customer intent assignment for external contact
	 * 
	 * @param {String} externalContactId External Contact id
	 * @param {String} customerIntentId Customer Intent id
	 * @param {Object} body Customer intent assignment
	 */
	postIntentsAssignmentsExternalcontactCustomerintentAssignment(externalContactId, customerIntentId, body) { 
		// verify the required parameter 'externalContactId' is set
		if (externalContactId === undefined || externalContactId === null || externalContactId === '') {
			throw 'Missing the required parameter "externalContactId" when calling postIntentsAssignmentsExternalcontactCustomerintentAssignment';
		}
		// verify the required parameter 'customerIntentId' is set
		if (customerIntentId === undefined || customerIntentId === null || customerIntentId === '') {
			throw 'Missing the required parameter "customerIntentId" when calling postIntentsAssignmentsExternalcontactCustomerintentAssignment';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntentsAssignmentsExternalcontactCustomerintentAssignment';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/assignments/externalcontacts/{externalContactId}/customerintents/{customerIntentId}/assignment', 
			'POST', 
			{ 'externalContactId': externalContactId,'customerIntentId': customerIntentId },
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
	 * Create category
	 * 
	 * @param {Object} body category
	 */
	postIntentsCategories(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntentsCategories';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/categories', 
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
	 * Bulk add source intents to a customer intent
	 * 
	 * @param {String} customerIntentId Customer Intent id
	 * @param {Object} body Source intents to be added
	 */
	postIntentsCustomerintentSourceintentsBulkAdd(customerIntentId, body) { 
		// verify the required parameter 'customerIntentId' is set
		if (customerIntentId === undefined || customerIntentId === null || customerIntentId === '') {
			throw 'Missing the required parameter "customerIntentId" when calling postIntentsCustomerintentSourceintentsBulkAdd';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntentsCustomerintentSourceintentsBulkAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/customerintents/{customerIntentId}/sourceintents/bulk/add', 
			'POST', 
			{ 'customerIntentId': customerIntentId },
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
	 * Bulk remove source intents mapped to a customer intent
	 * 
	 * @param {String} customerIntentId Customer Intent id
	 * @param {Object} body Source intents to be removed
	 */
	postIntentsCustomerintentSourceintentsBulkRemove(customerIntentId, body) { 
		// verify the required parameter 'customerIntentId' is set
		if (customerIntentId === undefined || customerIntentId === null || customerIntentId === '') {
			throw 'Missing the required parameter "customerIntentId" when calling postIntentsCustomerintentSourceintentsBulkRemove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntentsCustomerintentSourceintentsBulkRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/customerintents/{customerIntentId}/sourceintents/bulk/remove', 
			'POST', 
			{ 'customerIntentId': customerIntentId },
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
	 * Create customer intents
	 * 
	 * @param {Object} body Customer intent
	 */
	postIntentsCustomerintents(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postIntentsCustomerintents';
		}

		return this.apiClient.callApi(
			'/api/v2/intents/customerintents', 
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


export default IntentsApi;
