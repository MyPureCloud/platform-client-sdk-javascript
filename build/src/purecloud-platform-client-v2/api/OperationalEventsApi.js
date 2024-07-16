import ApiClient from '../ApiClient.js';


class OperationalEventsApi {
	/**
	 * OperationalEvents service.
	 * @module purecloud-platform-client-v2/api/OperationalEventsApi
	 * @version 199.0.0
	 */

	/**
	 * Constructs a new OperationalEventsApi. 
	 * @alias module:purecloud-platform-client-v2/api/OperationalEventsApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Get an operational event definition by its id
	 * 
	 * @param {String} eventDefinitionId EventDefinition id
	 */
	getUsageEventsDefinition(eventDefinitionId) { 
		// verify the required parameter 'eventDefinitionId' is set
		if (eventDefinitionId === undefined || eventDefinitionId === null) {
			throw 'Missing the required parameter "eventDefinitionId" when calling getUsageEventsDefinition';
		}

		return this.apiClient.callApi(
			'/api/v2/usage/events/definitions/{eventDefinitionId}', 
			'GET', 
			{ 'eventDefinitionId': eventDefinitionId },
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
	 * Get all operational event definitions
	 * 
	 */
	getUsageEventsDefinitions() { 

		return this.apiClient.callApi(
			'/api/v2/usage/events/definitions', 
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

}


export default OperationalEventsApi;
