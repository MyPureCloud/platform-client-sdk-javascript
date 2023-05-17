import ApiClient from '../ApiClient.js';


class MobileDevicesApi {
	/**
	 * MobileDevices service.
	 * @module purecloud-platform-client-v2/api/MobileDevicesApi
	 * @version 168.2.0
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
	 * Delete device
	 * 
	 * @param {String} deviceId Device ID
	 */
	deleteMobiledevice(deviceId) { 
		// verify the required parameter 'deviceId' is set
		if (deviceId === undefined || deviceId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get device
	 * 
	 * @param {String} deviceId Device ID
	 */
	getMobiledevice(deviceId) { 
		// verify the required parameter 'deviceId' is set
		if (deviceId === undefined || deviceId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get a list of all devices.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Object} opts.sortOrder Ascending or descending sort order (default to ascending)
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
			['application/json']
		);
	}

	/**
	 * Create User device
	 * 
	 * @param {Object} body Device
	 */
	postMobiledevices(body) { 
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
			['application/json']
		);
	}

	/**
	 * Update device
	 * 
	 * @param {String} deviceId Device ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body Device
	 */
	putMobiledevice(deviceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'deviceId' is set
		if (deviceId === undefined || deviceId === null) {
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
			['application/json']
		);
	}

}


export default MobileDevicesApi;
