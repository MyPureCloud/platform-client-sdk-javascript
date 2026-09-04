import ApiClient from '../ApiClient.js';


class MobileDevicesApi {
	/**
	 * MobileDevices service.
	 * @module purecloud-platform-client-v2/api/MobileDevicesApi
	 * @version 261.0.0
	 */

	/**
	 * Constructs a new MobileDevicesApi. 
	 * @alias module:purecloud-platform-client-v2/api/MobileDevicesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * (Deprecated, see https://apicentral.genesys.cloud/api-explorer#webmessaging for alternative) Delete device
	 * 
	 * @param {String} deviceId Device ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	deleteMobiledevice(deviceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deviceId' is set
		if (deviceId === undefined || deviceId === null || deviceId === '') {
			throw 'Missing the required parameter "deviceId" when calling deleteMobiledevice';
		}

		return this.apiClient.callApi(
			'/api/v2/mobiledevices/{deviceId}', 
			'DELETE', 
			{ 'deviceId': deviceId },
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
	 * (Deprecated) Get device
	 * 
	 * @param {String} deviceId Device ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getMobiledevice(deviceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deviceId' is set
		if (deviceId === undefined || deviceId === null || deviceId === '') {
			throw 'Missing the required parameter "deviceId" when calling getMobiledevice';
		}

		return this.apiClient.callApi(
			'/api/v2/mobiledevices/{deviceId}', 
			'GET', 
			{ 'deviceId': deviceId },
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
	 * (Deprecated) Get a list of all devices.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ascending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getMobiledevices(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/mobiledevices', 
			'GET', 
			{  },
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] },
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
	 * (Deprecated, see https://apicentral.genesys.cloud/api-explorer#webmessaging for alternative) Create User device
	 * 
	 * @param {Object} body Device
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postMobiledevices(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postMobiledevices';
		}

		return this.apiClient.callApi(
			'/api/v2/mobiledevices', 
			'POST', 
			{  },
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
	 * (Deprecated, see https://apicentral.genesys.cloud/api-explorer#webmessaging for alternative) Update device
	 * 
	 * @param {String} deviceId Device ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Device
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	putMobiledevice(deviceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deviceId' is set
		if (deviceId === undefined || deviceId === null || deviceId === '') {
			throw 'Missing the required parameter "deviceId" when calling putMobiledevice';
		}

		return this.apiClient.callApi(
			'/api/v2/mobiledevices/{deviceId}', 
			'PUT', 
			{ 'deviceId': deviceId },
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


export default MobileDevicesApi;
