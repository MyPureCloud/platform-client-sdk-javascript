import ApiClient from '../ApiClient.js';


class FaxApi {
	/**
	 * Fax service.
	 * @module purecloud-platform-client-v2/api/FaxApi
	 * @version 250.1.0
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
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteFaxDocument(documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a document.
	 * 
	 * @param {String} documentId Document ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFaxDocument(documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Download a fax document.
	 * 
	 * @param {String} documentId Document ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFaxDocumentContent(documentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of fax documents.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get organization config for given organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFaxSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/fax/settings', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get fax summary
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFaxSummary(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a fax document.
	 * 
	 * @param {String} documentId Document ID
	 * @param {Object} body Document
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putFaxDocument(documentId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'documentId' is set
		if (documentId === undefined || documentId === null || documentId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update/write organization config for given organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putFaxSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/fax/settings', 
			'PUT', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default FaxApi;
