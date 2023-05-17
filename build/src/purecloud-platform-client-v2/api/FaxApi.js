import ApiClient from '../ApiClient.js';


class FaxApi {
	/**
	 * Fax service.
	 * @module purecloud-platform-client-v2/api/FaxApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new FaxApi. 
	 * @alias module:purecloud-platform-client-v2/api/FaxApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a fax document.
	 * 
	 * @param {String} documentId Document ID
	 */
	deleteFaxDocument(documentId) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling deleteFaxDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/fax/documents/{documentId}', 
			'DELETE', 
			{ 'documentId': documentId },
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
	 * Get a document.
	 * 
	 * @param {String} documentId Document ID
	 */
	getFaxDocument(documentId) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling getFaxDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/fax/documents/{documentId}', 
			'GET', 
			{ 'documentId': documentId },
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
	 * Download a fax document.
	 * 
	 * @param {String} documentId Document ID
	 */
	getFaxDocumentContent(documentId) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling getFaxDocumentContent';
		}

		return this.apiClient.callApi(
			'/api/v2/fax/documents/{documentId}/content', 
			'GET', 
			{ 'documentId': documentId },
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
	 * Get a list of fax documents.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getFaxDocuments(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/fax/documents', 
			'GET', 
			{  },
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
	 * Get fax summary
	 * 
	 */
	getFaxSummary() { 

		return this.apiClient.callApi(
			'/api/v2/fax/summary', 
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
	 * Update a fax document.
	 * 
	 * @param {String} documentId Document ID
	 * @param {Object} body Document
	 */
	putFaxDocument(documentId, body) { 
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null) {
			throw 'Missing the required parameter "documentId" when calling putFaxDocument';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putFaxDocument';
		}

		return this.apiClient.callApi(
			'/api/v2/fax/documents/{documentId}', 
			'PUT', 
			{ 'documentId': documentId },
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


export default FaxApi;
