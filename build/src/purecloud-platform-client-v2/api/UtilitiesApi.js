import ApiClient from '../ApiClient.js';


class UtilitiesApi {
	/**
	 * Utilities service.
	 * @module purecloud-platform-client-v2/api/UtilitiesApi
	 * @version 178.2.0
	 */

	/**
	 * Constructs a new UtilitiesApi. 
	 * @alias module:purecloud-platform-client-v2/api/UtilitiesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Force-logout specified user.
	 * 
	 * @param {String} userId User ID
	 */
	deleteAppsUserLogout(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling deleteAppsUserLogout';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/users/{userId}/logout', 
			'DELETE', 
			{ 'userId': userId },
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
	 * Delete settings for the current user
	 * 
	 */
	deleteSettings() { 

		return this.apiClient.callApi(
			'/api/v2/settings', 
			'DELETE', 
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
	 * Redirect to signed download url
	 * 
	 * @param {String} downloadId Download ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.contentDisposition Content Disposition (default to attachment)
	 */
	getAppsDownload(downloadId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'downloadId' is set
		if (downloadId === undefined || downloadId === null) {
			throw 'Missing the required parameter "downloadId" when calling getAppsDownload';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/downloads/{downloadId}', 
			'GET', 
			{ 'downloadId': downloadId },
			{ 'contentDisposition': opts['contentDisposition'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get whether or not a feature toggle is globally enabled
	 * In order to use this resource, feature toggles must be added to the set declared in this resource. Otherwise, theyll always return false.
	 * @param {Array.<String>} feature The features to query
	 */
	getAppsGlobalfeaturetoggles(feature) { 
		// verify the required parameter 'feature' is set
		if (feature === undefined || feature === null) {
			throw 'Missing the required parameter "feature" when calling getAppsGlobalfeaturetoggles';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/globalfeaturetoggles', 
			'GET', 
			{  },
			{ 'feature': this.apiClient.buildCollectionParam(feature, 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets a user image
	 * 
	 * @param {String} imageId The image id
	 */
	getAppsLegacyImage(imageId) { 
		// verify the required parameter 'imageId' is set
		if (imageId === undefined || imageId === null) {
			throw 'Missing the required parameter "imageId" when calling getAppsLegacyImage';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/legacy/images/{imageId}', 
			'GET', 
			{ 'imageId': imageId },
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
	 * Gets a user image by hash
	 * 
	 * @param {String} imageHashId The hash id associated with the image
	 */
	getAppsLegacyImagesHashImageHashId(imageHashId) { 
		// verify the required parameter 'imageHashId' is set
		if (imageHashId === undefined || imageHashId === null) {
			throw 'Missing the required parameter "imageHashId" when calling getAppsLegacyImagesHashImageHashId';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/legacy/images/hash/{imageHashId}', 
			'GET', 
			{ 'imageHashId': imageHashId },
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
	 * Return a legacy directory session
	 * 
	 */
	getAppsLegacySession() { 

		return this.apiClient.callApi(
			'/api/v2/apps/legacy/session', 
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
	 * Returns list of permission bundles with values for this organization.
	 * 
	 */
	getAppsPermissionbundles() { 

		return this.apiClient.callApi(
			'/api/v2/apps/permissionbundles', 
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
	 * Get the current system date/time
	 * 
	 */
	getDate() { 

		return this.apiClient.callApi(
			'/api/v2/date', 
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
	 * Get the features that are enabled or disabled for this user
	 * 
	 * @param {Array.<String>} feature The features to query.
	 */
	getFeaturetoggles(feature) { 
		// verify the required parameter 'feature' is set
		if (feature === undefined || feature === null) {
			throw 'Missing the required parameter "feature" when calling getFeaturetoggles';
		}

		return this.apiClient.callApi(
			'/api/v2/featuretoggles', 
			'GET', 
			{  },
			{ 'feature': this.apiClient.buildCollectionParam(feature, 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get health.
	 * 
	 */
	getHealthCheck() { 

		return this.apiClient.callApi(
			'/api/v2/health/check', 
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
	 * Health check for backend service
	 * 
	 * @param {String} serviceName serviceName
	 */
	getHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service(serviceName) { 
		// verify the required parameter 'serviceName' is set
		if (serviceName === undefined || serviceName === null) {
			throw 'Missing the required parameter "serviceName" when calling getHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service';
		}

		return this.apiClient.callApi(
			'/api/v2/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services/{serviceName}', 
			'GET', 
			{ 'serviceName': serviceName },
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
	 * Get public ip address ranges for Genesys Cloud
	 * 
	 */
	getIpranges() { 

		return this.apiClient.callApi(
			'/api/v2/ipranges', 
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
	 * Get settings for the current user
	 * 
	 */
	getSettings() { 

		return this.apiClient.callApi(
			'/api/v2/settings', 
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
	 * Get time zones list
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 */
	getTimezones(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/timezones', 
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
	 * Get health.
	 * 
	 */
	headHealthCheck() { 

		return this.apiClient.callApi(
			'/api/v2/health/check', 
			'HEAD', 
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
	 * Health check for backend service
	 * 
	 * @param {String} serviceName serviceName
	 */
	headHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service(serviceName) { 
		// verify the required parameter 'serviceName' is set
		if (serviceName === undefined || serviceName === null) {
			throw 'Missing the required parameter "serviceName" when calling headHealthCheckDc5ea213B82940c8Ab65B1eb2b583ff7Service';
		}

		return this.apiClient.callApi(
			'/api/v2/health/check/dc5ea213-b829-40c8-ab65-b1eb2b583ff7/services/{serviceName}', 
			'HEAD', 
			{ 'serviceName': serviceName },
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
	 * Links a previously uploaded image to an entity
	 * 
	 * @param {String} imageId The image id
	 * @param {String} entityType The type of entity (e.g. person, group, etc.)
	 * @param {String} entityId The entity id
	 * @param {String} targetField The target field of the given entity (e.g. uploads.images)
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body query
	 */
	postAppsLegacyImageLinkEntityTypeEntityIdTargetField(imageId, entityType, entityId, targetField, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'imageId' is set
		if (imageId === undefined || imageId === null) {
			throw 'Missing the required parameter "imageId" when calling postAppsLegacyImageLinkEntityTypeEntityIdTargetField';
		}
		// verify the required parameter 'entityType' is set
		if (entityType === undefined || entityType === null) {
			throw 'Missing the required parameter "entityType" when calling postAppsLegacyImageLinkEntityTypeEntityIdTargetField';
		}
		// verify the required parameter 'entityId' is set
		if (entityId === undefined || entityId === null) {
			throw 'Missing the required parameter "entityId" when calling postAppsLegacyImageLinkEntityTypeEntityIdTargetField';
		}
		// verify the required parameter 'targetField' is set
		if (targetField === undefined || targetField === null) {
			throw 'Missing the required parameter "targetField" when calling postAppsLegacyImageLinkEntityTypeEntityIdTargetField';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/legacy/images/{imageId}/link/{entityType}/{entityId}/{targetField}', 
			'POST', 
			{ 'imageId': imageId,'entityType': entityType,'entityId': entityId,'targetField': targetField },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Uploads a user image and returns the image url
	 * 
	 * @param {Object} body Image upload request
	 */
	postAppsLegacyImages(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postAppsLegacyImages';
		}

		return this.apiClient.callApi(
			'/api/v2/apps/legacy/images', 
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
	 * Update preferred language and return the legacy directory session
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postAppsLegacySession(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/apps/legacy/session', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create apps session cookie named PureCloud-Apps-Session
	 * 
	 */
	postAppsSession() { 

		return this.apiClient.callApi(
			'/api/v2/apps/session', 
			'POST', 
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
	 * Returns the information about an X509 PEM encoded certificate or certificate chain.
	 * 
	 * @param {Object} body Certificate
	 */
	postCertificateDetails(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postCertificateDetails';
		}

		return this.apiClient.callApi(
			'/api/v2/certificate/details', 
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
	 * Send an email with diagnostic information.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Diagnostic
	 */
	postDiagnostics(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/diagnostics', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Proxy NewRelic Insights events
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Event List
	 */
	postDiagnosticsNewrelicInsights(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/diagnostics/newrelic/insights', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Proxy NewRelic Insights events for background assistant using screen recording jwt token
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Event List
	 */
	postDiagnosticsNewrelicInsightsBackgroundassistant(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/diagnostics/newrelic/insights/backgroundassistant', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Contact support with diagnostic information.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Diagnostic
	 */
	postDiagnosticsSupport(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/diagnostics/support', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Trace messages
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Trace List
	 */
	postDiagnosticsTrace(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/diagnostics/trace', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Trace messages for background assistant using screen recording jwt token
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Trace List
	 */
	postDiagnosticsTraceBackgroundassistant(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/diagnostics/trace/backgroundassistant', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update settings for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<String, {String: Object}>} opts.body 
	 */
	putSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/settings', 
			'PUT', 
			{  },
			{  },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default UtilitiesApi;
