import ApiClient from '../ApiClient.js';


class ProcessAutomationApi {
	/**
	 * ProcessAutomation service.
	 * @module purecloud-platform-client-v2/api/ProcessAutomationApi
	 * @version 178.2.0
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
	 * Get the meta-data for a versioned flow
	 * This will get the meta-data about a particular version of a flow.<br>.
	 * @param {String} flowId Flow ID
	 * @param {String} versionId Flow Version
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getProcessautomationFlowsDefinitionVersion(flowId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
			throw 'Missing the required parameter "flowId" when calling getProcessautomationFlowsDefinitionVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
			throw 'Missing the required parameter "versionId" when calling getProcessautomationFlowsDefinitionVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/flows/definitions/{flowId}/versions/{versionId}', 
			'GET', 
			{ 'flowId': flowId,'versionId': versionId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get the running data for a flow instance
	 * This will get the information about the current running state of the flow instance. It requires the workflow:instance:search permission.
	 * @param {String} instanceId Flow Exec ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the return value.
	 */
	getProcessautomationFlowsInstance(instanceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'instanceId' is set
		if (instanceId === undefined || instanceId === null) {
			throw 'Missing the required parameter "instanceId" when calling getProcessautomationFlowsInstance';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/flows/instances/{instanceId}', 
			'GET', 
			{ 'instanceId': instanceId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Search currently running flow instances using q64
	 * Searches the pool of running flow instances given a SearchRequest and returns the matching results.
	 * @param {String} q64 q64
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Expand instructions for the return value.
	 */
	getProcessautomationFlowsInstancesCommandsSearch(q64, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'q64' is set
		if (q64 === undefined || q64 === null) {
			throw 'Missing the required parameter "q64" when calling getProcessautomationFlowsInstancesCommandsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/flows/instances/commands/search', 
			'GET', 
			{  },
			{ 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Search the currently running flow instances
	 * Searches the pool of running flow instances given a SearchRequest and returns the matching results. It requires the Some Search Examples: Note the various filters, sort and searchPhrase options can be combined/omitted as needed.Search for a specific definition ID:{"query": [{"fields": ["flowConfigId.id"],"type": "EXACT","values": ["e88db9fb-aaa0-46f8-81d5-4a30e323bdfa"]}]}Search for a specific execution instance and sort on the config name:{"query": [{"fields": ["flowExecId"],"type": "EXACT","values": ["99"]}],"sortBy" : "flowConfigName","sortOrder" : "ASC"}
	 * @param {Object} body SearchRequest data containing search parameters and paging response.
	 */
	postProcessautomationFlowsInstancesCommandsSearch(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postProcessautomationFlowsInstancesCommandsSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/processautomation/flows/instances/commands/search', 
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
