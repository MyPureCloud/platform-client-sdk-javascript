import ApiClient from '../ApiClient.js';


class ArchitectApi {
	/**
	 * Architect service.
	 * @module purecloud-platform-client-v2/api/ArchitectApi
	 * @version 253.0.0
	 */

	/**
	 * Constructs a new ArchitectApi. 
	 * @alias module:purecloud-platform-client-v2/api/ArchitectApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Deletes a emergency group by ID
	 * 
	 * @param {String} emergencyGroupId Emergency group ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectEmergencygroup(emergencyGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'emergencyGroupId' is set
		if (emergencyGroupId === undefined || emergencyGroupId === null || emergencyGroupId === '') {
			throw 'Missing the required parameter "emergencyGroupId" when calling deleteArchitectEmergencygroup';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/emergencygroups/{emergencyGroupId}', 
			'DELETE', 
			{ 'emergencyGroupId': emergencyGroupId },
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
	 * Delete a grammar.
	 * 
	 * @param {String} grammarId grammar ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectGrammar(grammarId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling deleteArchitectGrammar';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}', 
			'DELETE', 
			{ 'grammarId': grammarId },
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
	 * Delete specified grammar language
	 * 
	 * @param {String} grammarId Grammar ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectGrammarLanguage(grammarId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling deleteArchitectGrammarLanguage';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling deleteArchitectGrammarLanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}/languages/{languageCode}', 
			'DELETE', 
			{ 'grammarId': grammarId,'languageCode': languageCode },
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
	 * Clear the DTMF mode file for the grammar language if there is one
	 * 
	 * @param {String} grammarId Grammar ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectGrammarLanguageFilesDtmf(grammarId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling deleteArchitectGrammarLanguageFilesDtmf';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling deleteArchitectGrammarLanguageFilesDtmf';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/dtmf', 
			'DELETE', 
			{ 'grammarId': grammarId,'languageCode': languageCode },
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
	 * Clear the voice mode file for the grammar language if there is one
	 * 
	 * @param {String} grammarId Grammar ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectGrammarLanguageFilesVoice(grammarId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling deleteArchitectGrammarLanguageFilesVoice';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling deleteArchitectGrammarLanguageFilesVoice';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/voice', 
			'DELETE', 
			{ 'grammarId': grammarId,'languageCode': languageCode },
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
	 * Delete an IVR Config.
	 * 
	 * @param {String} ivrId IVR id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectIvr(ivrId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ivrId' is set
		if (ivrId === undefined || ivrId === null || ivrId === '') {
			throw 'Missing the required parameter "ivrId" when calling deleteArchitectIvr';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/ivrs/{ivrId}', 
			'DELETE', 
			{ 'ivrId': ivrId },
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
	 * Delete specified user prompt
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.allResources Whether or not to delete all the prompt resources
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectPrompt(promptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling deleteArchitectPrompt';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}', 
			'DELETE', 
			{ 'promptId': promptId },
			{ 'allResources': opts['allResources'] },
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
	 * Delete specified user prompt resource
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectPromptResource(promptId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling deleteArchitectPromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling deleteArchitectPromptResource';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}/resources/{languageCode}', 
			'DELETE', 
			{ 'promptId': promptId,'languageCode': languageCode },
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
	 * Delete specified user prompt resource audio
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectPromptResourceAudio(promptId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling deleteArchitectPromptResourceAudio';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling deleteArchitectPromptResourceAudio';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}/resources/{languageCode}/audio', 
			'DELETE', 
			{ 'promptId': promptId,'languageCode': languageCode },
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
	 * Batch-delete a list of prompts
	 * Multiple IDs can be specified, in which case all specified prompts will be deleted.  Asynchronous.  Notification topic: v2.architect.prompts.{promptId}
	 * @param {Array.<String>} id List of Prompt IDs
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectPrompts(id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling deleteArchitectPrompts';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts', 
			'DELETE', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi') },
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
	 * Delete a schedule by id
	 * 
	 * @param {String} scheduleId Schedule ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectSchedule(scheduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
			throw 'Missing the required parameter "scheduleId" when calling deleteArchitectSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/schedules/{scheduleId}', 
			'DELETE', 
			{ 'scheduleId': scheduleId },
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
	 * Deletes a schedule group by ID
	 * 
	 * @param {String} scheduleGroupId Schedule group ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectSchedulegroup(scheduleGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scheduleGroupId' is set
		if (scheduleGroupId === undefined || scheduleGroupId === null || scheduleGroupId === '') {
			throw 'Missing the required parameter "scheduleGroupId" when calling deleteArchitectSchedulegroup';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/schedulegroups/{scheduleGroupId}', 
			'DELETE', 
			{ 'scheduleGroupId': scheduleGroupId },
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
	 * Delete a system prompt resource override.
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteArchitectSystempromptResource(promptId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling deleteArchitectSystempromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling deleteArchitectSystempromptResource';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}', 
			'DELETE', 
			{ 'promptId': promptId,'languageCode': languageCode },
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
	 * Delete flow
	 * 
	 * @param {String} flowId Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteFlow(flowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling deleteFlow';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}', 
			'DELETE', 
			{ 'flowId': flowId },
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
	 * Deletes a log level for a flow by flow id.
	 * Deletes the associated log level for a flow by flow id
	 * @param {String} flowId The flow id to delete the loglevel for
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteFlowInstancesSettingsLoglevels(flowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling deleteFlowInstancesSettingsLoglevels';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/instances/settings/loglevels', 
			'DELETE', 
			{ 'flowId': flowId },
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
	 * Batch-delete a list of flows
	 * Multiple IDs can be specified, in which case all specified flows will be deleted.  Asynchronous.  Notification topic: v2.flows.{flowId}
	 * @param {Array.<String>} id List of Flow IDs
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteFlows(id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling deleteFlows';
		}

		return this.apiClient.callApi(
			'/api/v2/flows', 
			'DELETE', 
			{  },
			{ 'id': this.apiClient.buildCollectionParam(id, 'multi') },
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
	 * deletes a specific datatable by id
	 * Deletes an entire datatable (including the schema and data) with a given datatableId
	 * @param {String} datatableId id of datatable
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.force force delete, even if in use (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteFlowsDatatable(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling deleteFlowsDatatable';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}', 
			'DELETE', 
			{ 'datatableId': datatableId },
			{ 'force': opts['force'] },
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
	 * Delete a row entry
	 * Deletes a row with a given rowId (the value of the key field).
	 * @param {String} datatableId id of datatable
	 * @param {String} rowId the key for the row
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteFlowsDatatableRow(datatableId, rowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling deleteFlowsDatatableRow';
		}
		// verify the required parameter 'rowId' is set
		if (rowId === undefined || rowId === null || rowId === '') {
			throw 'Missing the required parameter "rowId" when calling deleteFlowsDatatableRow';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/rows/{rowId}', 
			'DELETE', 
			{ 'datatableId': datatableId,'rowId': rowId },
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
	 * Resets the org log level to default, base
	 * Resets the org log level to default, base
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteFlowsInstancesSettingsLoglevelsDefault(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/instances/settings/loglevels/default', 
			'DELETE', 
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
	 * Delete a flow milestone.
	 * 
	 * @param {String} milestoneId flow milestone ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteFlowsMilestone(milestoneId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'milestoneId' is set
		if (milestoneId === undefined || milestoneId === null || milestoneId === '') {
			throw 'Missing the required parameter "milestoneId" when calling deleteFlowsMilestone';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/milestones/{milestoneId}', 
			'DELETE', 
			{ 'milestoneId': milestoneId },
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
	 * Get Dependency Tracking objects that have a given display name
	 * 
	 * @param {String} name Object name to search for
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Array.<String>} opts.objectType Object type(s) to search for
	 * @param {Boolean} opts.consumedResources Include resources each result item consumes
	 * @param {Boolean} opts.consumingResources Include resources that consume each result item
	 * @param {Array.<String>} opts.consumedResourceType Types of consumed resources to return, if consumed resources are requested
	 * @param {Array.<String>} opts.consumingResourceType Types of consuming resources to return, if consuming resources are requested
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectDependencytracking(name, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'name' is set
		if (name === undefined || name === null) {
			throw 'Missing the required parameter "name" when calling getArchitectDependencytracking';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/dependencytracking', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': name,'objectType': this.apiClient.buildCollectionParam(opts['objectType'], 'multi'),'consumedResources': opts['consumedResources'],'consumingResources': opts['consumingResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'consumingResourceType': this.apiClient.buildCollectionParam(opts['consumingResourceType'], 'multi') },
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
	 * Get Dependency Tracking build status for an organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectDependencytrackingBuild(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/dependencytracking/build', 
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
	 * Get resources that are consumed by a given Dependency Tracking object
	 * 
	 * @param {String} id Consuming object ID
	 * @param {String} version Consuming object version
	 * @param {Object} objectType Consuming object type.  Only versioned types are allowed here.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.resourceType Types of consumed resources to show.
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectDependencytrackingConsumedresources(id, version, objectType, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling getArchitectDependencytrackingConsumedresources';
		}
		// verify the required parameter 'version' is set
		if (version === undefined || version === null) {
			throw 'Missing the required parameter "version" when calling getArchitectDependencytrackingConsumedresources';
		}
		// verify the required parameter 'objectType' is set
		if (objectType === undefined || objectType === null) {
			throw 'Missing the required parameter "objectType" when calling getArchitectDependencytrackingConsumedresources';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/dependencytracking/consumedresources', 
			'GET', 
			{  },
			{ 'id': id,'version': version,'objectType': objectType,'resourceType': this.apiClient.buildCollectionParam(opts['resourceType'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Get resources that consume a given Dependency Tracking object
	 * 
	 * @param {String} id Consumed object ID
	 * @param {Object} objectType Consumed object type
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.resourceType Types of consuming resources to show.  Only versioned types are allowed here.
	 * @param {String} opts.version Object version
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.flowFilter Show only checkedIn or published flows
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectDependencytrackingConsumingresources(id, objectType, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling getArchitectDependencytrackingConsumingresources';
		}
		// verify the required parameter 'objectType' is set
		if (objectType === undefined || objectType === null) {
			throw 'Missing the required parameter "objectType" when calling getArchitectDependencytrackingConsumingresources';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/dependencytracking/consumingresources', 
			'GET', 
			{  },
			{ 'id': id,'objectType': objectType,'resourceType': this.apiClient.buildCollectionParam(opts['resourceType'], 'multi'),'version': opts['version'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'flowFilter': opts['flowFilter'] },
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
	 * Get Dependency Tracking objects that consume deleted resources
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.name Name to search for
	 * @param {Array.<String>} opts.objectType Object type(s) to search for
	 * @param {Object} opts.flowFilter Show only checkedIn or published flows
	 * @param {Boolean} opts.consumedResources Return consumed resources? (default to false)
	 * @param {Array.<String>} opts.consumedResourceType Resource type(s) to return
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectDependencytrackingDeletedresourceconsumers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/dependencytracking/deletedresourceconsumers', 
			'GET', 
			{  },
			{ 'name': opts['name'],'objectType': this.apiClient.buildCollectionParam(opts['objectType'], 'multi'),'flowFilter': opts['flowFilter'],'consumedResources': opts['consumedResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Get a Dependency Tracking object
	 * 
	 * @param {String} id Object ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.version Object version
	 * @param {Object} opts.objectType Object type
	 * @param {Boolean} opts.consumedResources Include resources this item consumes
	 * @param {Boolean} opts.consumingResources Include resources that consume this item
	 * @param {Array.<String>} opts.consumedResourceType Types of consumed resources to return, if consumed resources are requested
	 * @param {Array.<String>} opts.consumingResourceType Types of consuming resources to return, if consuming resources are requested
	 * @param {Boolean} opts.consumedResourceRequest Indicate that this is going to look up a consumed resource object
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectDependencytrackingObject(id, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'id' is set
		if (id === undefined || id === null) {
			throw 'Missing the required parameter "id" when calling getArchitectDependencytrackingObject';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/dependencytracking/object', 
			'GET', 
			{  },
			{ 'id': id,'version': opts['version'],'objectType': opts['objectType'],'consumedResources': opts['consumedResources'],'consumingResources': opts['consumingResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'consumingResourceType': this.apiClient.buildCollectionParam(opts['consumingResourceType'], 'multi'),'consumedResourceRequest': opts['consumedResourceRequest'] },
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
	 * Get a Dependency Tracking type.
	 * 
	 * @param {String} typeId Type ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectDependencytrackingType(typeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'typeId' is set
		if (typeId === undefined || typeId === null || typeId === '') {
			throw 'Missing the required parameter "typeId" when calling getArchitectDependencytrackingType';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/dependencytracking/types/{typeId}', 
			'GET', 
			{ 'typeId': typeId },
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
	 * Get Dependency Tracking types.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectDependencytrackingTypes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/dependencytracking/types', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Get Dependency Tracking objects that depend on updated resources
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.name Name to search for
	 * @param {Array.<String>} opts.objectType Object type(s) to search for
	 * @param {Boolean} opts.consumedResources Return consumed resources? (default to false)
	 * @param {Array.<String>} opts.consumedResourceType Resource type(s) to return
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectDependencytrackingUpdatedresourceconsumers(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/dependencytracking/updatedresourceconsumers', 
			'GET', 
			{  },
			{ 'name': opts['name'],'objectType': this.apiClient.buildCollectionParam(opts['objectType'], 'multi'),'consumedResources': opts['consumedResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Gets a emergency group by ID
	 * 
	 * @param {String} emergencyGroupId Emergency group ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectEmergencygroup(emergencyGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'emergencyGroupId' is set
		if (emergencyGroupId === undefined || emergencyGroupId === null || emergencyGroupId === '') {
			throw 'Missing the required parameter "emergencyGroupId" when calling getArchitectEmergencygroup';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/emergencygroups/{emergencyGroupId}', 
			'GET', 
			{ 'emergencyGroupId': emergencyGroupId },
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
	 * Get a list of emergency groups.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {String} opts.name Name of the Emergency Group to filter by.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectEmergencygroups(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/emergencygroups', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'] },
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
	 * Get a pageable list of basic emergency group objects filterable by query parameters.
	 * This returns emergency groups consisting of name and division. If one or more IDs are specified, the search will fetch emergency groups that match the given ID(s) and not use any additional supplied query parameters in the search.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {Array.<String>} opts.id ID of the Emergency Groups to filter by.
	 * @param {String} opts.name Name of the Emergency Group to filter by.
	 * @param {Array.<String>} opts.divisionId List of divisionIds on which to filter.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectEmergencygroupsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/emergencygroups/divisionviews', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get a grammar
	 * Returns a specified grammar
	 * @param {String} grammarId grammar ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeFileUrls Include grammar language file URLs
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectGrammar(grammarId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling getArchitectGrammar';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}', 
			'GET', 
			{ 'grammarId': grammarId },
			{ 'includeFileUrls': opts['includeFileUrls'] },
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
	 * Get a grammar language.
	 * 
	 * @param {String} grammarId Grammar ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectGrammarLanguage(grammarId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling getArchitectGrammarLanguage';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getArchitectGrammarLanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}/languages/{languageCode}', 
			'GET', 
			{ 'grammarId': grammarId,'languageCode': languageCode },
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
	 * Get a pageable list of grammars, filtered by query parameters
	 * Multiple IDs can be specified, in which case all matching grammars will be returned, and no other parameters will be evaluated.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.sortBy Sort by (default to id)
	 * @param {Object} opts.sortOrder Sort order (default to asc)
	 * @param {Array.<String>} opts.id ID
	 * @param {String} opts.name Name
	 * @param {String} opts.description Description
	 * @param {String} opts.nameOrDescription Name or description
	 * @param {Boolean} opts.includeFileUrls Include grammar language file URLs
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectGrammars(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/grammars', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'includeFileUrls': opts['includeFileUrls'] },
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
	 * Get an IVR config.
	 * 
	 * @param {String} ivrId IVR id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectIvr(ivrId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ivrId' is set
		if (ivrId === undefined || ivrId === null || ivrId === '') {
			throw 'Missing the required parameter "ivrId" when calling getArchitectIvr';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/ivrs/{ivrId}', 
			'GET', 
			{ 'ivrId': ivrId },
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
	 * Get an IVR IdentityResolutionConfig.
	 * 
	 * @param {String} ivrId IVR id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectIvrIdentityresolution(ivrId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ivrId' is set
		if (ivrId === undefined || ivrId === null || ivrId === '') {
			throw 'Missing the required parameter "ivrId" when calling getArchitectIvrIdentityresolution';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/ivrs/{ivrId}/identityresolution', 
			'GET', 
			{ 'ivrId': ivrId },
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
	 * Get IVR configs.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {String} opts.name Name of the IVR to filter by.
	 * @param {String} opts.dnis The phone number of the IVR to filter by.
	 * @param {String} opts.scheduleGroup The Schedule Group of the IVR to filter by.
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectIvrs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/ivrs', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'dnis': opts['dnis'],'scheduleGroup': opts['scheduleGroup'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a pageable list of basic ivr configuration information objects filterable by query parameters.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {Array.<String>} opts.id ID of the IVR to filter by.
	 * @param {String} opts.name Name of the IVR to filter by.
	 * @param {Array.<String>} opts.divisionId List of divisionIds on which to filter.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectIvrsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/ivrs/divisionviews', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get specified user prompt
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeMediaUris Include the media URIs for each resource (default to true)
	 * @param {Boolean} opts.includeResources Include the resources for each system prompt (default to true)
	 * @param {Array.<String>} opts.language Filter the resources down to the provided languages
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectPrompt(promptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling getArchitectPrompt';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}', 
			'GET', 
			{ 'promptId': promptId },
			{ 'includeMediaUris': opts['includeMediaUris'],'includeResources': opts['includeResources'],'language': this.apiClient.buildCollectionParam(opts['language'], 'multi') },
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
	 * Get generated prompt history
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} historyId History request ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortOrder Sort order (default to desc)
	 * @param {Object} opts.sortBy Sort by (default to timestamp)
	 * @param {Array.<String>} opts.action Flow actions to include (omit to include all)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectPromptHistoryHistoryId(promptId, historyId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling getArchitectPromptHistoryHistoryId';
		}
		// verify the required parameter 'historyId' is set
		if (historyId === undefined || historyId === null || historyId === '') {
			throw 'Missing the required parameter "historyId" when calling getArchitectPromptHistoryHistoryId';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}/history/{historyId}', 
			'GET', 
			{ 'promptId': promptId,'historyId': historyId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'],'action': this.apiClient.buildCollectionParam(opts['action'], 'multi') },
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
	 * Get specified user prompt resource
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectPromptResource(promptId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling getArchitectPromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getArchitectPromptResource';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}/resources/{languageCode}', 
			'GET', 
			{ 'promptId': promptId,'languageCode': languageCode },
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
	 * Get a pageable list of user prompt resources
	 * The returned list is pageable, and query parameters can be used for filtering.
	 * @param {String} promptId Prompt ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectPromptResources(promptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling getArchitectPromptResources';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}/resources', 
			'GET', 
			{ 'promptId': promptId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Get a pageable list of user prompts
	 * The returned list is pageable, and query parameters can be used for filtering.  Multiple names can be specified, in which case all matching prompts will be returned, and no other filters will be evaluated.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Array.<String>} opts.name Name
	 * @param {String} opts.description Description
	 * @param {String} opts.nameOrDescription Name or description
	 * @param {String} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {Boolean} opts.includeMediaUris Include the media URIs for each resource (default to true)
	 * @param {Boolean} opts.includeResources Include the resources for each system prompt (default to true)
	 * @param {Array.<String>} opts.language Filter the resources down to the provided languages
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectPrompts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/prompts', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': this.apiClient.buildCollectionParam(opts['name'], 'multi'),'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'includeMediaUris': opts['includeMediaUris'],'includeResources': opts['includeResources'],'language': this.apiClient.buildCollectionParam(opts['language'], 'multi') },
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
	 * Get a schedule by ID
	 * 
	 * @param {String} scheduleId Schedule ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSchedule(scheduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
			throw 'Missing the required parameter "scheduleId" when calling getArchitectSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/schedules/{scheduleId}', 
			'GET', 
			{ 'scheduleId': scheduleId },
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
	 * Gets a schedule group by ID
	 * 
	 * @param {String} scheduleGroupId Schedule group ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSchedulegroup(scheduleGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scheduleGroupId' is set
		if (scheduleGroupId === undefined || scheduleGroupId === null || scheduleGroupId === '') {
			throw 'Missing the required parameter "scheduleGroupId" when calling getArchitectSchedulegroup';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/schedulegroups/{scheduleGroupId}', 
			'GET', 
			{ 'scheduleGroupId': scheduleGroupId },
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
	 * Get a list of schedule groups.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {String} opts.name Name of the Schedule Group to filter by.
	 * @param {String} opts.scheduleIds A comma-delimited list of Schedule IDs to filter by.
	 * @param {Array.<String>} opts.divisionId List of divisionIds on which to filter.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSchedulegroups(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/schedulegroups', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'scheduleIds': opts['scheduleIds'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get a pageable list of basic schedule group configuration information objects filterable by query parameters.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {Array.<String>} opts.id ID of the schedule group to filter by.
	 * @param {String} opts.name Name of the schedule group to filter by.
	 * @param {Array.<String>} opts.divisionId List of divisionIds on which to filter.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSchedulegroupsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/schedulegroups/divisionviews', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get a list of schedules.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {String} opts.name Name of the Schedule to filter by.
	 * @param {Array.<String>} opts.divisionId List of divisionIds on which to filter.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSchedules(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/schedules', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get a pageable list of basic schedule configuration information objects filterable by query parameters.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {Array.<String>} opts.id ID of the schedule group to filter by.
	 * @param {String} opts.name Name of the schedule group to filter by.
	 * @param {Array.<String>} opts.divisionId List of divisionIds on which to filter.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSchedulesDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/schedules/divisionviews', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get a system prompt
	 * 
	 * @param {String} promptId promptId
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeMediaUris Include the media URIs for each resource (default to true)
	 * @param {Boolean} opts.includeResources Include the resources for each system prompt (default to true)
	 * @param {Array.<String>} opts.language Filter the resources down to the provided languages
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSystemprompt(promptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling getArchitectSystemprompt';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts/{promptId}', 
			'GET', 
			{ 'promptId': promptId },
			{ 'includeMediaUris': opts['includeMediaUris'],'includeResources': opts['includeResources'],'language': this.apiClient.buildCollectionParam(opts['language'], 'multi') },
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
	 * Get generated prompt history
	 * 
	 * @param {String} promptId promptId
	 * @param {String} historyId History request ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortOrder Sort order (default to desc)
	 * @param {Object} opts.sortBy Sort by (default to timestamp)
	 * @param {Array.<String>} opts.action Flow actions to include (omit to include all)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSystempromptHistoryHistoryId(promptId, historyId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling getArchitectSystempromptHistoryHistoryId';
		}
		// verify the required parameter 'historyId' is set
		if (historyId === undefined || historyId === null || historyId === '') {
			throw 'Missing the required parameter "historyId" when calling getArchitectSystempromptHistoryHistoryId';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts/{promptId}/history/{historyId}', 
			'GET', 
			{ 'promptId': promptId,'historyId': historyId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'],'action': this.apiClient.buildCollectionParam(opts['action'], 'multi') },
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
	 * Get a system prompt resource.
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSystempromptResource(promptId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling getArchitectSystempromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling getArchitectSystempromptResource';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}', 
			'GET', 
			{ 'promptId': promptId,'languageCode': languageCode },
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
	 * Get system prompt resources.
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSystempromptResources(promptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling getArchitectSystempromptResources';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts/{promptId}/resources', 
			'GET', 
			{ 'promptId': promptId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] },
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
	 * Get System Prompts
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {String} opts.name Name
	 * @param {String} opts.description Description
	 * @param {String} opts.nameOrDescription Name or description
	 * @param {Boolean} opts.includeMediaUris Include the media URIs for each resource (default to true)
	 * @param {Boolean} opts.includeResources Include the resources for each system prompt (default to true)
	 * @param {Array.<String>} opts.language Filter the resources down to the provided languages
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getArchitectSystemprompts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'includeMediaUris': opts['includeMediaUris'],'includeResources': opts['includeResources'],'language': this.apiClient.buildCollectionParam(opts['language'], 'multi') },
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
	 * Get flow
	 * 
	 * @param {String} flowId Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.deleted Deleted flows (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlow(flowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling getFlow';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}', 
			'GET', 
			{ 'flowId': flowId },
			{ 'deleted': opts['deleted'] },
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
	 * Get generated flow history
	 * 
	 * @param {String} flowId Flow ID
	 * @param {String} historyId History request ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortOrder Sort order (default to desc)
	 * @param {Object} opts.sortBy Sort by (default to timestamp)
	 * @param {Array.<String>} opts.action Flow actions to include (omit to include all)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowHistoryHistoryId(flowId, historyId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling getFlowHistoryHistoryId';
		}
		// verify the required parameter 'historyId' is set
		if (historyId === undefined || historyId === null || historyId === '') {
			throw 'Missing the required parameter "historyId" when calling getFlowHistoryHistoryId';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/history/{historyId}', 
			'GET', 
			{ 'flowId': flowId,'historyId': historyId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'],'action': this.apiClient.buildCollectionParam(opts['action'], 'multi') },
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
	 * Retrieves the log level for a flow by flow id.
	 * Retrieves the log level for a flow by flow id.
	 * @param {String} flowId The flow id to get the loglevel for
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Expand instructions for the result
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowInstancesSettingsLoglevels(flowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling getFlowInstancesSettingsLoglevels';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/instances/settings/loglevels', 
			'GET', 
			{ 'flowId': flowId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get the latest configuration for flow
	 * 
	 * @param {String} flowId Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.deleted Deleted flows (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowLatestconfiguration(flowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling getFlowLatestconfiguration';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/latestconfiguration', 
			'GET', 
			{ 'flowId': flowId },
			{ 'deleted': opts['deleted'] },
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
	 * Get flow version
	 * 
	 * @param {String} flowId Flow ID
	 * @param {String} versionId Version ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.deleted Deleted flows
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowVersion(flowId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling getFlowVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getFlowVersion';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/versions/{versionId}', 
			'GET', 
			{ 'flowId': flowId,'versionId': versionId },
			{ 'deleted': opts['deleted'] },
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
	 * Get flow version configuration
	 * 
	 * @param {String} flowId Flow ID
	 * @param {String} versionId Version ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.deleted Deleted flows
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowVersionConfiguration(flowId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling getFlowVersionConfiguration';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getFlowVersionConfiguration';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/versions/{versionId}/configuration', 
			'GET', 
			{ 'flowId': flowId,'versionId': versionId },
			{ 'deleted': opts['deleted'] },
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
	 * Get overall health scores for all intents present in the NLU domain version associated with the bot flow version.
	 * 
	 * @param {String} flowId Flow ID.
	 * @param {String} versionId Version ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.language Language to filter for
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowVersionHealth(flowId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling getFlowVersionHealth';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getFlowVersionHealth';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/versions/{versionId}/health', 
			'GET', 
			{ 'flowId': flowId,'versionId': versionId },
			{ 'language': opts['language'] },
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
	 * Get health scores and other health metrics for a specific intent. This includes the health metrics for each utterance in an intent.
	 * 
	 * @param {String} flowId Flow ID.
	 * @param {String} versionId Version ID.
	 * @param {String} intentId Intent ID.
	 * @param {Object} language Language to filter for
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowVersionIntentHealth(flowId, versionId, intentId, language, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling getFlowVersionIntentHealth';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getFlowVersionIntentHealth';
		}
		// verify the required parameter 'intentId' is set
		if (intentId === undefined || intentId === null || intentId === '') {
			throw 'Missing the required parameter "intentId" when calling getFlowVersionIntentHealth';
		}
		// verify the required parameter 'language' is set
		if (language === undefined || language === null) {
			throw 'Missing the required parameter "language" when calling getFlowVersionIntentHealth';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/versions/{versionId}/intents/{intentId}/health', 
			'GET', 
			{ 'flowId': flowId,'versionId': versionId,'intentId': intentId },
			{ 'language': language },
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
	 * Get health metrics associated with a specific utterance of an intent.
	 * 
	 * @param {String} flowId Flow ID.
	 * @param {String} versionId Version ID.
	 * @param {String} intentId Intent ID.
	 * @param {String} utteranceId Utterance ID.
	 * @param {Object} language Language to filter for
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowVersionIntentUtteranceHealth(flowId, versionId, intentId, utteranceId, language, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling getFlowVersionIntentUtteranceHealth';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null || versionId === '') {
			throw 'Missing the required parameter "versionId" when calling getFlowVersionIntentUtteranceHealth';
		}
		// verify the required parameter 'intentId' is set
		if (intentId === undefined || intentId === null || intentId === '') {
			throw 'Missing the required parameter "intentId" when calling getFlowVersionIntentUtteranceHealth';
		}
		// verify the required parameter 'utteranceId' is set
		if (utteranceId === undefined || utteranceId === null || utteranceId === '') {
			throw 'Missing the required parameter "utteranceId" when calling getFlowVersionIntentUtteranceHealth';
		}
		// verify the required parameter 'language' is set
		if (language === undefined || language === null) {
			throw 'Missing the required parameter "language" when calling getFlowVersionIntentUtteranceHealth';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/versions/{versionId}/intents/{intentId}/utterances/{utteranceId}/health', 
			'GET', 
			{ 'flowId': flowId,'versionId': versionId,'intentId': intentId,'utteranceId': utteranceId },
			{ 'language': language },
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
	 * Get flow version list
	 * 
	 * @param {String} flowId Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.deleted Include Deleted flows
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowVersions(flowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling getFlowVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/versions', 
			'GET', 
			{ 'flowId': flowId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'deleted': opts['deleted'] },
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
	 * Get a pageable list of flows, filtered by query parameters
	 * If one or more IDs are specified, the search will fetch flows that match the given ID(s) and not use any additional supplied query parameters in the search.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.type Type
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {Array.<String>} opts.id ID
	 * @param {String} opts.name Name
	 * @param {String} opts.description Description
	 * @param {String} opts.nameOrDescription Name or description
	 * @param {String} opts.publishVersionId Publish version ID
	 * @param {String} opts.editableBy Editable by
	 * @param {String} opts.lockedBy Locked by
	 * @param {String} opts.lockedByClientId Locked by client ID
	 * @param {Object} opts.secure Secure
	 * @param {Boolean} opts.deleted Include deleted (default to false)
	 * @param {Boolean} opts.includeSchemas Include variable schemas (default to false)
	 * @param {Boolean} opts.virtualAgentEnabled Include/exclude virtual agent flows
	 * @param {String} opts.publishedAfter Published after
	 * @param {String} opts.publishedBefore Published before
	 * @param {Array.<String>} opts.divisionId division ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlows(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows', 
			'GET', 
			{  },
			{ 'type': this.apiClient.buildCollectionParam(opts['type'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'publishVersionId': opts['publishVersionId'],'editableBy': opts['editableBy'],'lockedBy': opts['lockedBy'],'lockedByClientId': opts['lockedByClientId'],'secure': opts['secure'],'deleted': opts['deleted'],'includeSchemas': opts['includeSchemas'],'virtualAgentEnabled': opts['virtualAgentEnabled'],'publishedAfter': opts['publishedAfter'],'publishedBefore': opts['publishedBefore'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Returns a specific datatable by id
	 * Given a datatableId returns the datatable object and schema associated with it.
	 * @param {String} datatableId id of datatable
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the result
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsDatatable(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatable';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}', 
			'GET', 
			{ 'datatableId': datatableId },
			{ 'expand': opts['expand'] },
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
	 * Returns the state information about an export job
	 * Returns the state information about an export job.
	 * @param {String} datatableId id of datatable
	 * @param {String} exportJobId id of export job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsDatatableExportJob(datatableId, exportJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatableExportJob';
		}
		// verify the required parameter 'exportJobId' is set
		if (exportJobId === undefined || exportJobId === null || exportJobId === '') {
			throw 'Missing the required parameter "exportJobId" when calling getFlowsDatatableExportJob';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/export/jobs/{exportJobId}', 
			'GET', 
			{ 'datatableId': datatableId,'exportJobId': exportJobId },
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
	 * Returns the state information about an import job
	 * Returns the state information about an import job.
	 * @param {String} datatableId id of datatable
	 * @param {String} importJobId id of import job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsDatatableImportJob(datatableId, importJobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatableImportJob';
		}
		// verify the required parameter 'importJobId' is set
		if (importJobId === undefined || importJobId === null || importJobId === '') {
			throw 'Missing the required parameter "importJobId" when calling getFlowsDatatableImportJob';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/import/jobs/{importJobId}', 
			'GET', 
			{ 'datatableId': datatableId,'importJobId': importJobId },
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
	 * Get all recent import jobs
	 * Get all recent import jobs
	 * @param {String} datatableId id of datatable
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsDatatableImportJobs(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatableImportJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/import/jobs', 
			'GET', 
			{ 'datatableId': datatableId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Returns a specific row for the datatable
	 * Given a datatableId and a rowId (the value of the key field) this will return the full row contents for that rowId.
	 * @param {String} datatableId id of datatable
	 * @param {String} rowId The key for the row
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.showbrief if true returns just the key field for the row (default to true)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsDatatableRow(datatableId, rowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatableRow';
		}
		// verify the required parameter 'rowId' is set
		if (rowId === undefined || rowId === null || rowId === '') {
			throw 'Missing the required parameter "rowId" when calling getFlowsDatatableRow';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/rows/{rowId}', 
			'GET', 
			{ 'datatableId': datatableId,'rowId': rowId },
			{ 'showbrief': opts['showbrief'] },
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
	 * Returns the rows for the datatable with the given id
	 * Returns all of the rows for the datatable with the given datatableId.  By default this will just be a truncated list returning the key for each row. Set showBrief to false to return all of the row contents.
	 * @param {String} datatableId id of datatable
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Boolean} opts.showbrief If true returns just the key value of the row (default to true)
	 * @param {Object} opts.sortOrder Sort order (default to ascending)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsDatatableRows(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatableRows';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/rows', 
			'GET', 
			{ 'datatableId': datatableId },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'showbrief': opts['showbrief'],'sortOrder': opts['sortOrder'] },
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
	 * Retrieve a list of datatables for the org
	 * Returns a metadata list of the datatables associated with this org, including datatableId, name and description.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the result
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to ascending)
	 * @param {Array.<String>} opts.divisionId division ID(s)
	 * @param {String} opts.name Filter by Name. The wildcard character * is supported within the filter. Matches are case-insensitive.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsDatatables(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/datatables', 
			'GET', 
			{  },
			{ 'expand': opts['expand'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'name': opts['name'] },
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
	 * Returns a specific datatable by id
	 * Given a datatableId returns the datatable object and schema associated with it.
	 * @param {String} datatableId id of datatable
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the result
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsDatatablesDivisionview(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatablesDivisionview';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/divisionviews/{datatableId}', 
			'GET', 
			{ 'datatableId': datatableId },
			{ 'expand': opts['expand'] },
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
	 * Retrieve a list of datatables for the org
	 * Returns a metadata list of the datatables associated with this org, including datatableId, name and description.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the result
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {Object} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to ascending)
	 * @param {Array.<String>} opts.divisionId division ID(s)
	 * @param {String} opts.name Filter by Name. The wildcard character * is supported within the filter. Matches are case-insensitive.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsDatatablesDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/divisionviews', 
			'GET', 
			{  },
			{ 'expand': opts['expand'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'name': opts['name'] },
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
	 * Get a pageable list of basic flow information objects filterable by query parameters.
	 * This returns a simplified version of /flow consisting of name and type. If one or more IDs are specified, the search will fetch flows that match the given ID(s) and not use any additional supplied query parameters in the search.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.type Type
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {Array.<String>} opts.id ID
	 * @param {String} opts.name Name
	 * @param {String} opts.publishVersionId Publish version ID
	 * @param {String} opts.publishedAfter Published after
	 * @param {String} opts.publishedBefore Published before
	 * @param {Array.<String>} opts.divisionId division ID(s)
	 * @param {Boolean} opts.includeSchemas Include variable schemas (default to false)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/divisionviews', 
			'GET', 
			{  },
			{ 'type': this.apiClient.buildCollectionParam(opts['type'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'publishVersionId': opts['publishVersionId'],'publishedAfter': opts['publishedAfter'],'publishedBefore': opts['publishedBefore'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi'),'includeSchemas': opts['includeSchemas'] },
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
	 * Get a flow execution's details. Flow execution details are available for several days after the flow is started.
	 * 
	 * @param {String} flowExecutionId flow execution ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsExecution(flowExecutionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowExecutionId' is set
		if (flowExecutionId === undefined || flowExecutionId === null || flowExecutionId === '') {
			throw 'Missing the required parameter "flowExecutionId" when calling getFlowsExecution';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/executions/{flowExecutionId}', 
			'GET', 
			{ 'flowExecutionId': flowExecutionId },
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
	 * Fetch Architect Export Job Status
	 * 
	 * @param {String} jobId Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsExportJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getFlowsExportJob';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/export/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Start a process (job) to prepare a download of a singular flow execution data instance by Id
	 * Returns a JobResult object that contains an ID that can be used to check status and/or download links when the process (job) is complete.
	 * @param {String} instanceId Instance ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand various details.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsInstance(instanceId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'instanceId' is set
		if (instanceId === undefined || instanceId === null || instanceId === '') {
			throw 'Missing the required parameter "instanceId" when calling getFlowsInstance';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/instances/{instanceId}', 
			'GET', 
			{ 'instanceId': instanceId },
			{ 'expand': opts['expand'] },
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
	 * Get the status and/or results of an asynchronous flow execution data retrieval job
	 * 
	 * @param {String} jobId The asynchronous job ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsInstancesJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getFlowsInstancesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/instances/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
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
	 * Retrieve a list of capabilities that the org can use to query for execution data
	 * Returns the queryable parameters that can be used to build a query for execution data.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand various query types.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsInstancesQuerycapabilities(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/instances/querycapabilities', 
			'GET', 
			{  },
			{ 'expand': opts['expand'] },
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
	 * Get the execution history enabled setting.
	 * Get the execution history enabled setting.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsInstancesSettingsExecutiondata(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/instances/settings/executiondata', 
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
	 * Retrieve a list of LogLevels for the organization.
	 * Returns a paged set of LogLevels per flow id
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Expand instructions for the result
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Number of entities to return. Maximum of 200. (default to 25)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsInstancesSettingsLoglevels(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/instances/settings/loglevels', 
			'GET', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] },
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
	 * Gets the available flow log level characteristics for this organization.
	 * Log levels can be customized and this returns the set of available characteristics that can be enabled/disabled.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsInstancesSettingsLoglevelsCharacteristics(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/instances/settings/loglevels/characteristics', 
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
	 * Returns the flow default log level.
	 * Returns the flow default log level which will be used if no specific flow id log level is found.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Expand instructions for the result
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsInstancesSettingsLoglevelsDefault(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/instances/settings/loglevels/default', 
			'GET', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Fetch Architect Job Status
	 * 
	 * @param {String} jobId Job ID
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getFlowsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Get a flow milestone
	 * Returns a specified flow milestone
	 * @param {String} milestoneId flow milestone ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsMilestone(milestoneId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'milestoneId' is set
		if (milestoneId === undefined || milestoneId === null || milestoneId === '') {
			throw 'Missing the required parameter "milestoneId" when calling getFlowsMilestone';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/milestones/{milestoneId}', 
			'GET', 
			{ 'milestoneId': milestoneId },
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
	 * Get a pageable list of flow milestones, filtered by query parameters
	 * Multiple IDs can be specified, in which case all matching flow milestones will be returned, and no other parameters will be evaluated.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {Array.<String>} opts.id ID
	 * @param {String} opts.name Name
	 * @param {String} opts.description Description
	 * @param {String} opts.nameOrDescription Name or description
	 * @param {Array.<String>} opts.divisionId division ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsMilestones(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/milestones', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get a pageable list of basic flow milestone information objects filterable by query parameters.
	 * This returns flow milestones consisting of name and division. If one or more IDs are specified, the search will fetch flow milestones that match the given ID(s) and not use any additional supplied query parameters in the search.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {Array.<String>} opts.id ID
	 * @param {String} opts.name Name
	 * @param {Array.<String>} opts.divisionId division ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsMilestonesDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/milestones/divisionviews', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get a flow outcome
	 * Returns a specified flow outcome
	 * @param {String} flowOutcomeId flow outcome ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsOutcome(flowOutcomeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowOutcomeId' is set
		if (flowOutcomeId === undefined || flowOutcomeId === null || flowOutcomeId === '') {
			throw 'Missing the required parameter "flowOutcomeId" when calling getFlowsOutcome';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/outcomes/{flowOutcomeId}', 
			'GET', 
			{ 'flowOutcomeId': flowOutcomeId },
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
	 * Get a pageable list of flow outcomes, filtered by query parameters
	 * Multiple IDs can be specified, in which case all matching flow outcomes will be returned, and no other parameters will be evaluated.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {Array.<String>} opts.id ID
	 * @param {String} opts.name Name
	 * @param {String} opts.description Description
	 * @param {String} opts.nameOrDescription Name or description
	 * @param {Array.<String>} opts.divisionId division ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsOutcomes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/outcomes', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Get a pageable list of basic flow outcome information objects filterable by query parameters.
	 * This returns flow outcomes consisting of name and division. If one or more IDs are specified, the search will fetch flow outcomes that match the given ID(s) and not use any additional supplied query parameters in the search.
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to id)
	 * @param {String} opts.sortOrder Sort order (default to asc)
	 * @param {Array.<String>} opts.id ID
	 * @param {String} opts.name Name
	 * @param {Array.<String>} opts.divisionId division ID(s)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getFlowsOutcomesDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/outcomes/divisionviews', 
			'GET', 
			{  },
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') },
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
	 * Updates a grammar
	 * 
	 * @param {String} grammarId grammar ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchArchitectGrammar(grammarId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling patchArchitectGrammar';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}', 
			'PATCH', 
			{ 'grammarId': grammarId },
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
	 * Updates a grammar language
	 * 
	 * @param {String} grammarId Grammar ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchArchitectGrammarLanguage(grammarId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling patchArchitectGrammarLanguage';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling patchArchitectGrammarLanguage';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}/languages/{languageCode}', 
			'PATCH', 
			{ 'grammarId': grammarId,'languageCode': languageCode },
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
	 * Edit the execution history enabled setting.
	 * Edit the execution history enabled setting.
	 * @param {Object} body New Execution Data Setting
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchFlowsInstancesSettingsExecutiondata(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchFlowsInstancesSettingsExecutiondata';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/instances/settings/executiondata', 
			'PATCH', 
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
	 * Rebuild Dependency Tracking data for an organization
	 * Asynchronous.  Notification topic: v2.architect.dependencytracking.build
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectDependencytrackingBuild(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/dependencytracking/build', 
			'POST', 
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
	 * Creates a new emergency group
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectEmergencygroups(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectEmergencygroups';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/emergencygroups', 
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
	 * Creates a presigned URL for uploading a grammar DTMF mode file
	 * 
	 * @param {String} grammarId Grammar ID
	 * @param {String} languageCode Language
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectGrammarLanguageFilesDtmf(grammarId, languageCode, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling postArchitectGrammarLanguageFilesDtmf';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postArchitectGrammarLanguageFilesDtmf';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectGrammarLanguageFilesDtmf';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/dtmf', 
			'POST', 
			{ 'grammarId': grammarId,'languageCode': languageCode },
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
	 * Creates a presigned URL for uploading a grammar voice mode file
	 * 
	 * @param {String} grammarId Grammar ID
	 * @param {String} languageCode Language
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectGrammarLanguageFilesVoice(grammarId, languageCode, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling postArchitectGrammarLanguageFilesVoice';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postArchitectGrammarLanguageFilesVoice';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectGrammarLanguageFilesVoice';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}/languages/{languageCode}/files/voice', 
			'POST', 
			{ 'grammarId': grammarId,'languageCode': languageCode },
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
	 * Create a new language for a given grammar
	 * 
	 * @param {String} grammarId Grammar ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectGrammarLanguages(grammarId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'grammarId' is set
		if (grammarId === undefined || grammarId === null || grammarId === '') {
			throw 'Missing the required parameter "grammarId" when calling postArchitectGrammarLanguages';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectGrammarLanguages';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars/{grammarId}/languages', 
			'POST', 
			{ 'grammarId': grammarId },
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
	 * Create a new grammar
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectGrammars(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectGrammars';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/grammars', 
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
	 * Create IVR config.
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectIvrs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectIvrs';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/ivrs', 
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
	 * Generate prompt history
	 * Asynchronous.  Notification topic: v2.architect.prompts.{promptId}
	 * @param {String} promptId Prompt ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectPromptHistory(promptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling postArchitectPromptHistory';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}/history', 
			'POST', 
			{ 'promptId': promptId },
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
	 * Creates a presigned URL for uploading a user prompt file
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postArchitectPromptResourceUploads is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postArchitectPromptResourceUploads(promptId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling postArchitectPromptResourceUploads';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postArchitectPromptResourceUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}/resources/{languageCode}/uploads', 
			'POST', 
			{ 'promptId': promptId,'languageCode': languageCode },
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
	 * Create a new user prompt resource
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectPromptResources(promptId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling postArchitectPromptResources';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectPromptResources';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}/resources', 
			'POST', 
			{ 'promptId': promptId },
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
	 * Create a new user prompt
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectPrompts(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectPrompts';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts', 
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
	 * Creates a new schedule group
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectSchedulegroups(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectSchedulegroups';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/schedulegroups', 
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
	 * Create a new schedule.
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectSchedules(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectSchedules';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/schedules', 
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
	 * Generate system prompt history
	 * Asynchronous.  Notification topic: v2.architect.systemprompts.{systemPromptId}
	 * @param {String} promptId promptId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectSystempromptHistory(promptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling postArchitectSystempromptHistory';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts/{promptId}/history', 
			'POST', 
			{ 'promptId': promptId },
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
	 * Creates a presigned URL for uploading a system prompt file
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * postArchitectSystempromptResourceUploads is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	postArchitectSystempromptResourceUploads(promptId, languageCode, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling postArchitectSystempromptResourceUploads';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling postArchitectSystempromptResourceUploads';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}/uploads', 
			'POST', 
			{ 'promptId': promptId,'languageCode': languageCode },
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
	 * Create system prompt resource override.
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postArchitectSystempromptResources(promptId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling postArchitectSystempromptResources';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postArchitectSystempromptResources';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts/{promptId}/resources', 
			'POST', 
			{ 'promptId': promptId },
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
	 * Generate flow history
	 * Asynchronous.  Notification topic: v2.flows.{flowId}
	 * @param {String} flowId Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowHistory(flowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling postFlowHistory';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/history', 
			'POST', 
			{ 'flowId': flowId },
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
	 * Set the logLevel for a particular flow id
	 * Assigns a new loglevel to a flow id
	 * @param {String} flowId The flow id to set the loglevel for
	 * @param {Object} body New LogLevel settings
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Expand instructions for the result
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowInstancesSettingsLoglevels(flowId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling postFlowInstancesSettingsLoglevels';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postFlowInstancesSettingsLoglevels';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/instances/settings/loglevels', 
			'POST', 
			{ 'flowId': flowId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Create flow version
	 * 
	 * @param {String} flowId Flow ID
	 * @param {Object.<String, {String: Object}>} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowVersions(flowId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling postFlowVersions';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postFlowVersions';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/versions', 
			'POST', 
			{ 'flowId': flowId },
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
	 * Create flow
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.language Language
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlows(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postFlows';
		}

		return this.apiClient.callApi(
			'/api/v2/flows', 
			'POST', 
			{  },
			{ 'language': opts['language'] },
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
	 * Check-in flow
	 * Asynchronous.  Notification topic: v2.flows.{flowId}
	 * @param {String} flow Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsActionsCheckin(flow, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flow' is set
		if (flow === undefined || flow === null) {
			throw 'Missing the required parameter "flow" when calling postFlowsActionsCheckin';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/actions/checkin', 
			'POST', 
			{  },
			{ 'flow': flow },
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
	 * Check-out flow
	 * 
	 * @param {String} flow Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsActionsCheckout(flow, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flow' is set
		if (flow === undefined || flow === null) {
			throw 'Missing the required parameter "flow" when calling postFlowsActionsCheckout';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/actions/checkout', 
			'POST', 
			{  },
			{ 'flow': flow },
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
	 * Deactivate flow
	 * 
	 * @param {String} flow Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsActionsDeactivate(flow, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flow' is set
		if (flow === undefined || flow === null) {
			throw 'Missing the required parameter "flow" when calling postFlowsActionsDeactivate';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/actions/deactivate', 
			'POST', 
			{  },
			{ 'flow': flow },
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
	 * Publish flow
	 * Asynchronous.  Notification topic: v2.flows.{flowId}
	 * @param {String} flow Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.version version
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsActionsPublish(flow, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flow' is set
		if (flow === undefined || flow === null) {
			throw 'Missing the required parameter "flow" when calling postFlowsActionsPublish';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/actions/publish', 
			'POST', 
			{  },
			{ 'flow': flow,'version': opts['version'] },
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
	 * Revert flow
	 * 
	 * @param {String} flow Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsActionsRevert(flow, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flow' is set
		if (flow === undefined || flow === null) {
			throw 'Missing the required parameter "flow" when calling postFlowsActionsRevert';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/actions/revert', 
			'POST', 
			{  },
			{ 'flow': flow },
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
	 * Unlock flow
	 * Allows for unlocking a flow in the case where there is no flow configuration available, and thus a check-in will not unlock the flow. The user must have Architect Admin permissions to perform this action.
	 * @param {String} flow Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsActionsUnlock(flow, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flow' is set
		if (flow === undefined || flow === null) {
			throw 'Missing the required parameter "flow" when calling postFlowsActionsUnlock';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/actions/unlock', 
			'POST', 
			{  },
			{ 'flow': flow },
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
	 * Begin an export process for exporting all rows from a datatable
	 * Create an export job for exporting rows. The caller can then poll for status of the export using the token returned in the response
	 * @param {String} datatableId id of datatable
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsDatatableExportJobs(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling postFlowsDatatableExportJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/export/jobs', 
			'POST', 
			{ 'datatableId': datatableId },
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
	 * Begin an import process for importing rows from a CSV file into a datatable. CSV file is uploaded by performing a PUT request against the URL in the returned 'uploadURI' field. Headers for the PUT request must contain all headers contained in the returned 'uploadHeaders' field.
	 * Create an import job for importing rows from a CSV file. The caller can then poll for status of the import using the token returned in the response
	 * @param {String} datatableId id of datatable
	 * @param {Object} body import job information
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsDatatableImportCsvJobs(datatableId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling postFlowsDatatableImportCsvJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postFlowsDatatableImportCsvJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/import/csv/jobs', 
			'POST', 
			{ 'datatableId': datatableId },
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
	 * Begin an import process for importing rows into a datatable. Apps should migrate to use POST /api/v2/flows/datatables/{datatableId}/import/csv/jobs instead
	 * Create an import job for importing rows. The caller can then poll for status of the import using the token returned in the response
	 * @param {String} datatableId id of datatable
	 * @param {Object} body import job information
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postFlowsDatatableImportJobs(datatableId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling postFlowsDatatableImportJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postFlowsDatatableImportJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/import/jobs', 
			'POST', 
			{ 'datatableId': datatableId },
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
	 * Create a new row entry for the datatable.
	 * Will add the passed in row entry to the datatable with the given datatableId after verifying it against the schema.  When building the request body within API Explorer, Pro mode should be used. The DataTableRow should be a json-ized stream of key -> value pairs {      "Field1": "XYZZY",      "Field2": false,      "KEY": "27272"  }
	 * @param {String} datatableId id of datatable
	 * @param {Object.<String, {String: Object}>} dataTableRow 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsDatatableRows(datatableId, dataTableRow, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling postFlowsDatatableRows';
		}
		// verify the required parameter 'dataTableRow' is set
		if (dataTableRow === undefined || dataTableRow === null) {
			throw 'Missing the required parameter "dataTableRow" when calling postFlowsDatatableRows';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/rows', 
			'POST', 
			{ 'datatableId': datatableId },
			{  },
			{  },
			{  },
			dataTableRow, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new datatable with the specified json-schema definition
	 * This will create a new datatable with fields that match the property definitions in the JSON schema.  The schemas title field will be overridden by the name field in the DataTable object.  See also http://json-schema.org/
	 * @param {Object} body datatable json-schema
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsDatatables(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postFlowsDatatables';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables', 
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
	 * Launch an instance of a flow definition, for flow types that support it such as the 'workflow' type.
	 * The launch is asynchronous, it returns as soon as the flow starts. You can use the returned ID to query its status if you need.
	 * @param {Object} flowLaunchRequest 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsExecutions(flowLaunchRequest, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowLaunchRequest' is set
		if (flowLaunchRequest === undefined || flowLaunchRequest === null) {
			throw 'Missing the required parameter "flowLaunchRequest" when calling postFlowsExecutions';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/executions', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			flowLaunchRequest, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Register Architect Export Job
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsExportJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postFlowsExportJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/export/jobs', 
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
	 * Start a process (job) that will prepare a list of execution data IDs for download.
	 * Returns a JobResult object that contains an ID that can be used to check status and/or download links when the process (job) is complete.
	 * @param {Object} body Requested Flow Ids
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand various query types.
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsInstancesJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postFlowsInstancesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/instances/jobs', 
			'POST', 
			{  },
			{ 'expand': opts['expand'] },
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
	 * Query the database of existing flow histories to look for particular flow criteria
	 * Returns a list of matching flow histories up to 200 max.
	 * @param {Object} body query
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.indexOnly indexes only
	 * @param {Number} opts.pageSize number of results to return (default to 50)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsInstancesQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postFlowsInstancesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/instances/query', 
			'POST', 
			{  },
			{ 'indexOnly': opts['indexOnly'],'pageSize': opts['pageSize'] },
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
	 * Register Architect Job. Returns a URL where a file, such as an Architect flow YAML file, can be PUT which will then initiate the job.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/jobs', 
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
	 * Create a flow milestone
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsMilestones(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/milestones', 
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
	 * Create a flow outcome
	 * Asynchronous.  Notification topic: v2.flows.outcomes.{flowOutcomeId}
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postFlowsOutcomes(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows/outcomes', 
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
	 * Updates a emergency group by ID
	 * 
	 * @param {String} emergencyGroupId Emergency group ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putArchitectEmergencygroup(emergencyGroupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'emergencyGroupId' is set
		if (emergencyGroupId === undefined || emergencyGroupId === null || emergencyGroupId === '') {
			throw 'Missing the required parameter "emergencyGroupId" when calling putArchitectEmergencygroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putArchitectEmergencygroup';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/emergencygroups/{emergencyGroupId}', 
			'PUT', 
			{ 'emergencyGroupId': emergencyGroupId },
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
	 * Update an IVR Config.
	 * 
	 * @param {String} ivrId IVR id
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putArchitectIvr(ivrId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ivrId' is set
		if (ivrId === undefined || ivrId === null || ivrId === '') {
			throw 'Missing the required parameter "ivrId" when calling putArchitectIvr';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putArchitectIvr';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/ivrs/{ivrId}', 
			'PUT', 
			{ 'ivrId': ivrId },
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
	 * Update an IVR IdentityResolutionConfig.
	 * 
	 * @param {String} ivrId IVR id
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putArchitectIvrIdentityresolution(ivrId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'ivrId' is set
		if (ivrId === undefined || ivrId === null || ivrId === '') {
			throw 'Missing the required parameter "ivrId" when calling putArchitectIvrIdentityresolution';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putArchitectIvrIdentityresolution';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/ivrs/{ivrId}/identityresolution', 
			'PUT', 
			{ 'ivrId': ivrId },
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
	 * Update specified user prompt
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putArchitectPrompt(promptId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling putArchitectPrompt';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putArchitectPrompt';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}', 
			'PUT', 
			{ 'promptId': promptId },
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
	 * Update specified user prompt resource
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putArchitectPromptResource(promptId, languageCode, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling putArchitectPromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling putArchitectPromptResource';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putArchitectPromptResource';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}/resources/{languageCode}', 
			'PUT', 
			{ 'promptId': promptId,'languageCode': languageCode },
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
	 * Update schedule by ID
	 * 
	 * @param {String} scheduleId Schedule ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putArchitectSchedule(scheduleId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
			throw 'Missing the required parameter "scheduleId" when calling putArchitectSchedule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putArchitectSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/schedules/{scheduleId}', 
			'PUT', 
			{ 'scheduleId': scheduleId },
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
	 * Updates a schedule group by ID
	 * 
	 * @param {String} scheduleGroupId Schedule group ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putArchitectSchedulegroup(scheduleGroupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'scheduleGroupId' is set
		if (scheduleGroupId === undefined || scheduleGroupId === null || scheduleGroupId === '') {
			throw 'Missing the required parameter "scheduleGroupId" when calling putArchitectSchedulegroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putArchitectSchedulegroup';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/schedulegroups/{scheduleGroupId}', 
			'PUT', 
			{ 'scheduleGroupId': scheduleGroupId },
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
	 * Updates a system prompt resource override.
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putArchitectSystempromptResource(promptId, languageCode, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null || promptId === '') {
			throw 'Missing the required parameter "promptId" when calling putArchitectSystempromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null || languageCode === '') {
			throw 'Missing the required parameter "languageCode" when calling putArchitectSystempromptResource';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putArchitectSystempromptResource';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}', 
			'PUT', 
			{ 'promptId': promptId,'languageCode': languageCode },
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
	 * Update flow
	 * 
	 * @param {String} flowId Flow ID
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putFlow(flowId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling putFlow';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putFlow';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}', 
			'PUT', 
			{ 'flowId': flowId },
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
	 * Edit the logLevel for a particular flow id
	 * Updates the loglevel for a flow id
	 * @param {String} flowId The flow id to edit the loglevel for
	 * @param {Object} body New LogLevel settings
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Expand instructions for the result
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putFlowInstancesSettingsLoglevels(flowId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null || flowId === '') {
			throw 'Missing the required parameter "flowId" when calling putFlowInstancesSettingsLoglevels';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putFlowInstancesSettingsLoglevels';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/{flowId}/instances/settings/loglevels', 
			'PUT', 
			{ 'flowId': flowId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Updates a specific datatable by id
	 * Updates a schema for a datatable with the given datatableId -updates allow only new fields to be added in the schema, no changes or removals of existing fields.
	 * @param {String} datatableId id of datatable
	 * @param {Object} body datatable json-schema
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the result
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putFlowsDatatable(datatableId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling putFlowsDatatable';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putFlowsDatatable';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}', 
			'PUT', 
			{ 'datatableId': datatableId },
			{ 'expand': opts['expand'] },
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
	 * Update a row entry
	 * Updates a row with the given rowId (the value of the key field) to the new values.  When building the request body within API Explorer, Pro mode should be used. The DataTableRow should be a json-ized stream of key -> value pairs {     "Field1": "XYZZY",     "Field2": false,     "KEY": "27272" }
	 * @param {String} datatableId id of datatable
	 * @param {String} rowId the key for the row
	 * @param {Object} opts Optional parameters
	 * @param {Object.<String, {String: Object}>} opts.body datatable row
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putFlowsDatatableRow(datatableId, rowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null || datatableId === '') {
			throw 'Missing the required parameter "datatableId" when calling putFlowsDatatableRow';
		}
		// verify the required parameter 'rowId' is set
		if (rowId === undefined || rowId === null || rowId === '') {
			throw 'Missing the required parameter "rowId" when calling putFlowsDatatableRow';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/rows/{rowId}', 
			'PUT', 
			{ 'datatableId': datatableId,'rowId': rowId },
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
	 * Edit the flow default log level.
	 * Edit the flow default log level.
	 * @param {Object} body New LogLevel settings
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Expand instructions for the result
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putFlowsInstancesSettingsLoglevelsDefault(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putFlowsInstancesSettingsLoglevelsDefault';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/instances/settings/loglevels/default', 
			'PUT', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * Updates a flow milestone
	 * 
	 * @param {String} milestoneId flow milestone ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putFlowsMilestone(milestoneId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'milestoneId' is set
		if (milestoneId === undefined || milestoneId === null || milestoneId === '') {
			throw 'Missing the required parameter "milestoneId" when calling putFlowsMilestone';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/milestones/{milestoneId}', 
			'PUT', 
			{ 'milestoneId': milestoneId },
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
	 * Updates a flow outcome
	 * Updates a flow outcome.  Asynchronous.  Notification topic: v2.flowoutcomes.{flowoutcomeId}
	 * @param {String} flowOutcomeId flow outcome ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putFlowsOutcome(flowOutcomeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowOutcomeId' is set
		if (flowOutcomeId === undefined || flowOutcomeId === null || flowOutcomeId === '') {
			throw 'Missing the required parameter "flowOutcomeId" when calling putFlowsOutcome';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/outcomes/{flowOutcomeId}', 
			'PUT', 
			{ 'flowOutcomeId': flowOutcomeId },
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


export default ArchitectApi;
