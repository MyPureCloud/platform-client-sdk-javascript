import ApiClient from '../ApiClient.js';


class OperationalEventsApi {
	/**
	 * OperationalEvents service.
	 * @module purecloud-platform-client-v2/api/OperationalEventsApi
	 * @version 225.0.0
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
		if (eventDefinitionId === undefined || eventDefinitionId === null || eventDefinitionId === '') {
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

	/**
	 * Get aggregates for operational events in a timeframe.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	postUsageEventsAggregatesQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/usage/events/aggregates/query', 
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
	 * Query operational events in a timeframe.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object} opts.body 
	 */
	postUsageEventsQuery(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/usage/events/query', 
			'POST', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default OperationalEventsApi;
