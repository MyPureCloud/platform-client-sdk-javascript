import ApiClient from '../ApiClient.js';


class LicenseApi {
	/**
	 * License service.
	 * @module purecloud-platform-client-v2/api/LicenseApi
	 * @version 252.0.0
	 */

	/**
	 * Constructs a new LicenseApi. 
	 * @alias module:purecloud-platform-client-v2/api/LicenseApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get PureCloud license definition.
	 * 
	 * @param {String} licenseId ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLicenseDefinition(licenseId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'licenseId' is set
		if (licenseId === undefined || licenseId === null || licenseId === '') {
			throw 'Missing the required parameter "licenseId" when calling getLicenseDefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/license/definitions/{licenseId}', 
			'GET', 
			{ 'licenseId': licenseId },
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
	 * Get all PureCloud license definitions available for the organization.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLicenseDefinitions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/license/definitions', 
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
	 * Deprecated - no alternative required. This operation will always return 'true' for requested toggles
	 * 
	 * @param {String} featureName featureName
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLicenseToggle(featureName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'featureName' is set
		if (featureName === undefined || featureName === null || featureName === '') {
			throw 'Missing the required parameter "featureName" when calling getLicenseToggle';
		}

		return this.apiClient.callApi(
			'/api/v2/license/toggles/{featureName}', 
			'GET', 
			{ 'featureName': featureName },
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
	 * Get licenses for specified user.
	 * 
	 * @param {String} userId ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLicenseUser(userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getLicenseUser';
		}

		return this.apiClient.callApi(
			'/api/v2/license/users/{userId}', 
			'GET', 
			{ 'userId': userId },
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
	 * Get a page of users and their licenses
	 * Retrieve a page of users in an organization along with the licenses they possess.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getLicenseUsers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/license/users', 
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
	 * Get a list of licenses inferred based on a list of roleIds
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.body The roleIds to use while inferring licenses
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLicenseInfer(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/license/infer', 
			'POST', 
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

	/**
	 * Get a list of licenses inferred based on a list of permissions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.body The permissions to use while inferring licenses
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postLicenseInferPermissions is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postLicenseInferPermissions(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/license/infer/permissions', 
			'POST', 
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

	/**
	 * Update the organization's license assignments in a batch.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body The license assignments to update.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLicenseOrganization(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/license/organization', 
			'POST', 
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

	/**
	 * Deprecated. No alternative required - this endpoint has no effect
	 * 
	 * @param {String} featureName featureName
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLicenseToggle(featureName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'featureName' is set
		if (featureName === undefined || featureName === null || featureName === '') {
			throw 'Missing the required parameter "featureName" when calling postLicenseToggle';
		}

		return this.apiClient.callApi(
			'/api/v2/license/toggles/{featureName}', 
			'POST', 
			{ 'featureName': featureName },
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
	 * Fetch user licenses in a batch.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.body The user IDs to fetch.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postLicenseUsers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/license/users', 
			'POST', 
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


export default LicenseApi;
