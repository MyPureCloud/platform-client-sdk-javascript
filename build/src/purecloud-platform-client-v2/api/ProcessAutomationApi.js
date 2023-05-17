import ApiClient from '../ApiClient.js';


class ProcessAutomationApi {
	/**
	 * ProcessAutomation service.
	 * @module purecloud-platform-client-v2/api/ProcessAutomationApi
	 * @version 168.2.0
	 */

	/**
	 * Constructs a new ProcessAutomationApi. 
	 * @alias module:purecloud-platform-client-v2/api/ProcessAutomationApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete a Trigger
	 * 
	 * @param {String} triggerId triggerId
	 */
	deleteProcessautomationTrigger(triggerId) { 
		// verify the required parameter 'triggerId' is set
		if (triggerId === undefined || triggerId === null) {
			throw 'Missing the required parameter "triggerId" when calling deleteProcessautomationTrigger';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/triggers/{triggerId}', 
			'DELETE', 
			{ 'triggerId': triggerId },
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
	 * Retrieve a single Trigger matching id
	 * 
	 * @param {String} triggerId triggerId
	 */
	getProcessautomationTrigger(triggerId) { 
		// verify the required parameter 'triggerId' is set
		if (triggerId === undefined || triggerId === null) {
			throw 'Missing the required parameter "triggerId" when calling getProcessautomationTrigger';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/triggers/{triggerId}', 
			'GET', 
			{ 'triggerId': triggerId },
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
	 * Retrieves all triggers, optionally filtered by query parameters.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {String} opts.topicName Topic name(s). Separated by commas
	 * @param {Boolean} opts.enabled Boolean indicating desired enabled state of triggers
	 * @param {Boolean} opts.hasDelayBy Boolean to filter based on delayBySeconds being set in triggers. Default returns all, true returns only those with delayBySeconds set, false returns those without delayBySeconds set.
	 */
	getProcessautomationTriggers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/processautomation/triggers', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'topicName': opts['topicName'],'enabled': opts['enabled'],'hasDelayBy': opts['hasDelayBy'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get topics available for organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 */
	getProcessautomationTriggersTopics(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/processautomation/triggers/topics', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Test the matching of a Trigger based on provided event body
	 * 
	 * @param {String} triggerId triggerId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.body eventBody
	 */
	postProcessautomationTriggerTest(triggerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'triggerId' is set
		if (triggerId === undefined || triggerId === null) {
			throw 'Missing the required parameter "triggerId" when calling postProcessautomationTriggerTest';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/triggers/{triggerId}/test', 
			'POST', 
			{ 'triggerId': triggerId },
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
	 * Create a Trigger
	 * 
	 * @param {Object} body Input used to create a Trigger.
	 */
	postProcessautomationTriggers(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postProcessautomationTriggers';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/triggers', 
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
	 * Test the matching of all organization Triggers on given topic using provided event body
	 * 
	 * @param {String} topicName topicName
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.body eventBody
	 */
	postProcessautomationTriggersTopicTest(topicName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicName' is set
		if (topicName === undefined || topicName === null) {
			throw 'Missing the required parameter "topicName" when calling postProcessautomationTriggersTopicTest';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/triggers/topics/{topicName}/test', 
			'POST', 
			{ 'topicName': topicName },
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
	 * Update a Trigger
	 * 
	 * @param {String} triggerId triggerId
	 * @param {Object} body Input to update Trigger. (topicName cannot be updated, a new trigger must be created to use a new topicName)
	 */
	putProcessautomationTrigger(triggerId, body) { 
		// verify the required parameter 'triggerId' is set
		if (triggerId === undefined || triggerId === null) {
			throw 'Missing the required parameter "triggerId" when calling putProcessautomationTrigger';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putProcessautomationTrigger';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/triggers/{triggerId}', 
			'PUT', 
			{ 'triggerId': triggerId },
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


export default ProcessAutomationApi;
