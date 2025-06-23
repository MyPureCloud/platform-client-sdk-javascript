import ApiClient from '../ApiClient.js';


class EmployeeEngagementApi {
	/**
	 * EmployeeEngagement service.
	 * @module purecloud-platform-client-v2/api/EmployeeEngagementApi
	 * @version 225.0.0
	 */

	/**
	 * Constructs a new EmployeeEngagementApi. 
	 * @alias module:purecloud-platform-client-v2/api/EmployeeEngagementApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Deletes a celebration
	 * 
	 * @param {String} celebrationId The ID of the celebration
	 */
	deleteEmployeeengagementCelebration(celebrationId) { 
		// verify the required parameter 'celebrationId' is set
		if (celebrationId === undefined || celebrationId === null || celebrationId === '') {
			throw 'Missing the required parameter "celebrationId" when calling deleteEmployeeengagementCelebration';
		}

		return this.apiClient.callApi(
			'/api/v2/employeeengagement/celebrations/{celebrationId}', 
			'DELETE', 
			{ 'celebrationId': celebrationId },
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
	 * Get all celebrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber  (default to 1)
	 * @param {Number} opts.pageSize  (default to 25)
	 */
	getEmployeeengagementCelebrations(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/employeeengagement/celebrations', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets a single recognition
	 * 
	 * @param {String} recognitionId The Recognition ID
	 */
	getEmployeeengagementRecognition(recognitionId) { 
		// verify the required parameter 'recognitionId' is set
		if (recognitionId === undefined || recognitionId === null || recognitionId === '') {
			throw 'Missing the required parameter "recognitionId" when calling getEmployeeengagementRecognition';
		}

		return this.apiClient.callApi(
			'/api/v2/employeeengagement/recognitions/{recognitionId}', 
			'GET', 
			{ 'recognitionId': recognitionId },
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
	 * Set a state for a celebration
	 * 
	 * @param {String} celebrationId The ID of the celebration
	 * @param {Object} body Patch Celebration state
	 */
	patchEmployeeengagementCelebration(celebrationId, body) { 
		// verify the required parameter 'celebrationId' is set
		if (celebrationId === undefined || celebrationId === null || celebrationId === '') {
			throw 'Missing the required parameter "celebrationId" when calling patchEmployeeengagementCelebration';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchEmployeeengagementCelebration';
		}

		return this.apiClient.callApi(
			'/api/v2/employeeengagement/celebrations/{celebrationId}', 
			'PATCH', 
			{ 'celebrationId': celebrationId },
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
	 * Creates a recognition
	 * 
	 * @param {Object} body Create Recognition
	 */
	postEmployeeengagementRecognitions(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postEmployeeengagementRecognitions';
		}

		return this.apiClient.callApi(
			'/api/v2/employeeengagement/recognitions', 
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


export default EmployeeEngagementApi;
