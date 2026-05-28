import ApiClient from '../ApiClient.js';


class ProcessAutomationApi {
	/**
	 * ProcessAutomation service.
	 * @module purecloud-platform-client-v2/api/ProcessAutomationApi
	 * @version 253.0.0
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
	 * Delete a Scheduled Trigger
	 * 
	 * @param {String} scheduledTriggerId scheduledTriggerId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteProcessautomationScheduledtrigger(scheduledTriggerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scheduledTriggerId' is set
		if (scheduledTriggerId === undefined || scheduledTriggerId === null || scheduledTriggerId === '') {
			throw 'Missing the required parameter "scheduledTriggerId" when calling deleteProcessautomationScheduledtrigger';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/scheduledtriggers/{scheduledTriggerId}', 
			'DELETE', 
			{ 'scheduledTriggerId': scheduledTriggerId },
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
	 * Delete a Trigger
	 * 
	 * @param {String} triggerId triggerId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteProcessautomationTrigger(triggerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'triggerId' is set
		if (triggerId === undefined || triggerId === null || triggerId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve a single Scheduled Trigger matching id
	 * 
	 * @param {String} scheduledTriggerId scheduledTriggerId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getProcessautomationScheduledtrigger(scheduledTriggerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scheduledTriggerId' is set
		if (scheduledTriggerId === undefined || scheduledTriggerId === null || scheduledTriggerId === '') {
			throw 'Missing the required parameter "scheduledTriggerId" when calling getProcessautomationScheduledtrigger';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/scheduledtriggers/{scheduledTriggerId}', 
			'GET', 
			{ 'scheduledTriggerId': scheduledTriggerId },
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
	 * Retrieves all scheduled triggers, optionally filtered by query parameters.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Boolean} opts.enabled Boolean indicating desired enabled state of scheduled triggers
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getProcessautomationScheduledtriggers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/processautomation/scheduledtriggers', 
			'GET', 
			{  },
			{ 'before': opts['before'],'after': opts['after'],'pageSize': opts['pageSize'],'enabled': opts['enabled'] },
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
	 * Retrieve a single Trigger matching id
	 * 
	 * @param {String} triggerId triggerId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getProcessautomationTrigger(triggerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'triggerId' is set
		if (triggerId === undefined || triggerId === null || triggerId === '') {
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get topics available for organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.before The cursor that points to the start of the set of entities that has been returned.
	 * @param {String} opts.after The cursor that points to the end of the set of entities that has been returned.
	 * @param {String} opts.pageSize Number of entities to return. Maximum of 200.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a scheduled Trigger
	 * 
	 * @param {Object} body Input used to create a Scheduled Trigger
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postProcessautomationScheduledtriggers(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postProcessautomationScheduledtriggers';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/scheduledtriggers', 
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
	 * Test the matching of a Trigger based on provided event body
	 * 
	 * @param {String} triggerId triggerId
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.body eventBody
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postProcessautomationTriggerTest(triggerId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'triggerId' is set
		if (triggerId === undefined || triggerId === null || triggerId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a Trigger
	 * 
	 * @param {Object} body Input used to create a Trigger.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postProcessautomationTriggers(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Test the matching of all organization Triggers on given topic using provided event body
	 * 
	 * @param {String} topicName topicName
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.body eventBody
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postProcessautomationTriggersTopicTest(topicName, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'topicName' is set
		if (topicName === undefined || topicName === null || topicName === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a Scheduled Trigger
	 * 
	 * @param {String} scheduledTriggerId scheduledTriggerId
	 * @param {Object} body Input to update Scheduled Trigger.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putProcessautomationScheduledtrigger(scheduledTriggerId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scheduledTriggerId' is set
		if (scheduledTriggerId === undefined || scheduledTriggerId === null || scheduledTriggerId === '') {
			throw 'Missing the required parameter "scheduledTriggerId" when calling putProcessautomationScheduledtrigger';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putProcessautomationScheduledtrigger';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/scheduledtriggers/{scheduledTriggerId}', 
			'PUT', 
			{ 'scheduledTriggerId': scheduledTriggerId },
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
	 * Update a Trigger
	 * 
	 * @param {String} triggerId triggerId
	 * @param {Object} body Input to update Trigger. (topicName cannot be updated, a new trigger must be created to use a new topicName)
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putProcessautomationTrigger(triggerId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'triggerId' is set
		if (triggerId === undefined || triggerId === null || triggerId === '') {
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
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default ProcessAutomationApi;
