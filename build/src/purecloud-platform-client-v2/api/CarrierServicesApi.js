import ApiClient from '../ApiClient.js';


class CarrierServicesApi {
	/**
	 * CarrierServices service.
	 * @module purecloud-platform-client-v2/api/CarrierServicesApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new CarrierServicesApi. 
	 * @alias module:purecloud-platform-client-v2/api/CarrierServicesApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get location for the logged in user
	 * 
	 * @param {String} phoneNumber Phone number in E164 format
	 */
	getCarrierservicesIntegrationsEmergencylocationsMe(phoneNumber) { 
		// verify the required parameter 'phoneNumber' is set
		if (phoneNumber === undefined || phoneNumber === null) {
			throw 'Missing the required parameter "phoneNumber" when calling getCarrierservicesIntegrationsEmergencylocationsMe';
		}

		return this.apiClient.callApi(
			'/api/v2/carrierservices/integrations/emergencylocations/me', 
			'GET', 
			{  },
			{ 'phoneNumber': phoneNumber },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Set current location for the logged in user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postCarrierservicesIntegrationsEmergencylocationsMe(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/carrierservices/integrations/emergencylocations/me', 
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

}


export default CarrierServicesApi;
