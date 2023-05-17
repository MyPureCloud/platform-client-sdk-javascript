import ApiClient from '../ApiClient.js';


class GeneralDataProtectionRegulationApi {
	/**
	 * GeneralDataProtectionRegulation service.
	 * @module purecloud-platform-client-v2/api/GeneralDataProtectionRegulationApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new GeneralDataProtectionRegulationApi. 
	 * @alias module:purecloud-platform-client-v2/api/GeneralDataProtectionRegulationApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get an existing GDPR request
	 * 
	 * @param {String} requestId Request id
	 */
	getGdprRequest(requestId) { 
		// verify the required parameter 'requestId' is set
		if (requestId === undefined || requestId === null) {
			throw 'Missing the required parameter "requestId" when calling getGdprRequest';
		}

		return this.apiClient.callApi(
			'/api/v2/gdpr/requests/{requestId}', 
			'GET', 
			{ 'requestId': requestId },
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
	 * Get all GDPR requests
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getGdprRequests(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/gdpr/requests', 
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
	 * Get GDPR subjects
	 * 
	 * @param {Object} searchType Search Type
	 * @param {String} searchValue Search Value
	 */
	getGdprSubjects(searchType, searchValue) { 
		// verify the required parameter 'searchType' is set
		if (searchType === undefined || searchType === null) {
			throw 'Missing the required parameter "searchType" when calling getGdprSubjects';
		}
		// verify the required parameter 'searchValue' is set
		if (searchValue === undefined || searchValue === null) {
			throw 'Missing the required parameter "searchValue" when calling getGdprSubjects';
		}

		return this.apiClient.callApi(
			'/api/v2/gdpr/subjects', 
			'GET', 
			{  },
			{ 'searchType': searchType,'searchValue': searchValue },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Submit a new GDPR request
	 * 
	 * @param {Object} body GDPR request
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.deleteConfirmed Confirm delete (default to false)
	 */
	postGdprRequests(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postGdprRequests';
		}

		return this.apiClient.callApi(
			'/api/v2/gdpr/requests', 
			'POST', 
			{  },
			{ 'deleteConfirmed': opts['deleteConfirmed'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default GeneralDataProtectionRegulationApi;
