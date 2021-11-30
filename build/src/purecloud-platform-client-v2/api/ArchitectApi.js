import ApiClient from '../ApiClient.js';


class ArchitectApi {
	/**
	 * Architect service.
	 * @module purecloud-platform-client-v2/api/ArchitectApi
	 * @version 126.1.0
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
	 */
	deleteArchitectEmergencygroup(emergencyGroupId) { 
		// verify the required parameter 'emergencyGroupId' is set
		if (emergencyGroupId === undefined || emergencyGroupId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete an IVR Config.
	 * 
	 * @param {String} ivrId IVR id
	 */
	deleteArchitectIvr(ivrId) { 
		// verify the required parameter 'ivrId' is set
		if (ivrId === undefined || ivrId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete specified user prompt
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.allResources Whether or not to delete all the prompt resources
	 */
	deleteArchitectPrompt(promptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete specified user prompt resource
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 */
	deleteArchitectPromptResource(promptId, languageCode) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling deleteArchitectPromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete specified user prompt resource audio
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 */
	deleteArchitectPromptResourceAudio(promptId, languageCode) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling deleteArchitectPromptResourceAudio';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
			['application/json']
		);
	}

	/**
	 * Batch-delete a list of prompts
	 * Multiple IDs can be specified, in which case all specified prompts will be deleted.  Asynchronous.  Notification topic: v2.architect.prompts.{promptId}
	 * @param {Array.<String>} id List of Prompt IDs
	 */
	deleteArchitectPrompts(id) { 
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
			['application/json']
		);
	}

	/**
	 * Delete a schedule by id
	 * 
	 * @param {String} scheduleId Schedule ID
	 */
	deleteArchitectSchedule(scheduleId) { 
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
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
			['application/json']
		);
	}

	/**
	 * Deletes a schedule group by ID
	 * 
	 * @param {String} scheduleGroupId Schedule group ID
	 */
	deleteArchitectSchedulegroup(scheduleGroupId) { 
		// verify the required parameter 'scheduleGroupId' is set
		if (scheduleGroupId === undefined || scheduleGroupId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a system prompt resource override.
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 */
	deleteArchitectSystempromptResource(promptId, languageCode) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling deleteArchitectSystempromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete flow
	 * 
	 * @param {String} flowId Flow ID
	 */
	deleteFlow(flowId) { 
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
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
			['application/json']
		);
	}

	/**
	 * Batch-delete a list of flows
	 * Multiple IDs can be specified, in which case all specified flows will be deleted.  Asynchronous.  Notification topic: v2.flows.{flowId}
	 * @param {Array.<String>} id List of Flow IDs
	 */
	deleteFlows(id) { 
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
			['application/json']
		);
	}

	/**
	 * deletes a specific datatable by id
	 * Deletes an entire datatable (including the schema and data) with a given datatableId
	 * @param {String} datatableId id of datatable
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.force force delete, even if in use (default to false)
	 */
	deleteFlowsDatatable(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a row entry
	 * Deletes a row with a given rowId (the value of the key field).
	 * @param {String} datatableId id of datatable
	 * @param {String} rowId the key for the row
	 */
	deleteFlowsDatatableRow(datatableId, rowId) { 
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
			throw 'Missing the required parameter "datatableId" when calling deleteFlowsDatatableRow';
		}
		// verify the required parameter 'rowId' is set
		if (rowId === undefined || rowId === null) {
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
			['application/json']
		);
	}

	/**
	 * Delete a flow milestone.
	 * 
	 * @param {String} milestoneId flow milestone ID
	 */
	deleteFlowsMilestone(milestoneId) { 
		// verify the required parameter 'milestoneId' is set
		if (milestoneId === undefined || milestoneId === null) {
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get Dependency Tracking build status for an organization
	 * 
	 */
	getArchitectDependencytrackingBuild() { 

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
			['application/json']
		);
	}

	/**
	 * Get resources that are consumed by a given Dependency Tracking object
	 * 
	 * @param {String} id Consuming object ID
	 * @param {String} version Consuming object version
	 * @param {Object} objectType Consuming object type.  Only versioned types are allowed here.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.resourceType Types of consumed resources to show
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
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
			['application/json']
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
			['application/json']
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get a Dependency Tracking type.
	 * 
	 * @param {String} typeId Type ID
	 */
	getArchitectDependencytrackingType(typeId) { 
		// verify the required parameter 'typeId' is set
		if (typeId === undefined || typeId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get Dependency Tracking types.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Gets a emergency group by ID
	 * 
	 * @param {String} emergencyGroupId Emergency group ID
	 */
	getArchitectEmergencygroup(emergencyGroupId) { 
		// verify the required parameter 'emergencyGroupId' is set
		if (emergencyGroupId === undefined || emergencyGroupId === null) {
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get an IVR config.
	 * 
	 * @param {String} ivrId IVR id
	 */
	getArchitectIvr(ivrId) { 
		// verify the required parameter 'ivrId' is set
		if (ivrId === undefined || ivrId === null) {
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
			['application/json']
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
	 */
	getArchitectIvrs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/ivrs', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get specified user prompt
	 * 
	 * @param {String} promptId Prompt ID
	 */
	getArchitectPrompt(promptId) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling getArchitectPrompt';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/prompts/{promptId}', 
			'GET', 
			{ 'promptId': promptId }, 
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
	 */
	getArchitectPromptHistoryHistoryId(promptId, historyId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling getArchitectPromptHistoryHistoryId';
		}
		// verify the required parameter 'historyId' is set
		if (historyId === undefined || historyId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get specified user prompt resource
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 */
	getArchitectPromptResource(promptId, languageCode) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling getArchitectPromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
			['application/json']
		);
	}

	/**
	 * Get a pageable list of user prompt resources
	 * The returned list is pageable, and query parameters can be used for filtering.
	 * @param {String} promptId Prompt ID
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getArchitectPromptResources(promptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
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
			['application/json']
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
	 */
	getArchitectPrompts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/prompts', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': this.apiClient.buildCollectionParam(opts['name'], 'multi'),'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a schedule by ID
	 * 
	 * @param {String} scheduleId Schedule ID
	 */
	getArchitectSchedule(scheduleId) { 
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
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
			['application/json']
		);
	}

	/**
	 * Gets a schedule group by ID
	 * 
	 * @param {String} scheduleGroupId Schedule group ID
	 */
	getArchitectSchedulegroup(scheduleGroupId) { 
		// verify the required parameter 'scheduleGroupId' is set
		if (scheduleGroupId === undefined || scheduleGroupId === null) {
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get a list of schedules.
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 * @param {String} opts.sortBy Sort by (default to name)
	 * @param {String} opts.sortOrder Sort order (default to ASC)
	 * @param {String} opts.name Name of the Schedule to filter by.
	 * @param {Array.<String>} opts.divisionId List of divisionIds on which to filter.
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
			['application/json']
		);
	}

	/**
	 * Get a system prompt
	 * 
	 * @param {String} promptId promptId
	 */
	getArchitectSystemprompt(promptId) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling getArchitectSystemprompt';
		}

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts/{promptId}', 
			'GET', 
			{ 'promptId': promptId }, 
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
	 */
	getArchitectSystempromptHistoryHistoryId(promptId, historyId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling getArchitectSystempromptHistoryHistoryId';
		}
		// verify the required parameter 'historyId' is set
		if (historyId === undefined || historyId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get a system prompt resource.
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 */
	getArchitectSystempromptResource(promptId, languageCode) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling getArchitectSystempromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
			['application/json']
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
	 */
	getArchitectSystempromptResources(promptId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
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
			['application/json']
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
	 */
	getArchitectSystemprompts(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/architect/systemprompts', 
			'GET', 
			{  }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get flow
	 * 
	 * @param {String} flowId Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.deleted Deleted flows (default to false)
	 */
	getFlow(flowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
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
			['application/json']
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
	 */
	getFlowHistoryHistoryId(flowId, historyId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
			throw 'Missing the required parameter "flowId" when calling getFlowHistoryHistoryId';
		}
		// verify the required parameter 'historyId' is set
		if (historyId === undefined || historyId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get the latest configuration for flow
	 * 
	 * @param {String} flowId Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.deleted Deleted flows (default to false)
	 */
	getFlowLatestconfiguration(flowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get flow version
	 * 
	 * @param {String} flowId Flow ID
	 * @param {String} versionId Version ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.deleted Deleted flows
	 */
	getFlowVersion(flowId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
			throw 'Missing the required parameter "flowId" when calling getFlowVersion';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create flow version configuration
	 * 
	 * @param {String} flowId Flow ID
	 * @param {String} versionId Version ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.deleted Deleted flows
	 */
	getFlowVersionConfiguration(flowId, versionId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
			throw 'Missing the required parameter "flowId" when calling getFlowVersionConfiguration';
		}
		// verify the required parameter 'versionId' is set
		if (versionId === undefined || versionId === null) {
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
			['application/json']
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
	 */
	getFlowVersions(flowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
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
			['application/json']
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
	 * @param {String} opts.publishedAfter Published after
	 * @param {String} opts.publishedBefore Published before
	 * @param {Array.<String>} opts.divisionId division ID(s)
	 */
	getFlows(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/flows', 
			'GET', 
			{  }, 
			{ 'type': this.apiClient.buildCollectionParam(opts['type'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'publishVersionId': opts['publishVersionId'],'editableBy': opts['editableBy'],'lockedBy': opts['lockedBy'],'lockedByClientId': opts['lockedByClientId'],'secure': opts['secure'],'deleted': opts['deleted'],'includeSchemas': opts['includeSchemas'],'publishedAfter': opts['publishedAfter'],'publishedBefore': opts['publishedBefore'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Returns a specific datatable by id
	 * Given a datatableId returns the datatable object and schema associated with it.
	 * @param {String} datatableId id of datatable
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the result
	 */
	getFlowsDatatable(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
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
			['application/json']
		);
	}

	/**
	 * Returns the state information about an export job
	 * Returns the state information about an export job.
	 * @param {String} datatableId id of datatable
	 * @param {String} exportJobId id of export job
	 */
	getFlowsDatatableExportJob(datatableId, exportJobId) { 
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatableExportJob';
		}
		// verify the required parameter 'exportJobId' is set
		if (exportJobId === undefined || exportJobId === null) {
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
			['application/json']
		);
	}

	/**
	 * Returns the state information about an import job
	 * Returns the state information about an import job.
	 * @param {String} datatableId id of datatable
	 * @param {String} importJobId id of import job
	 */
	getFlowsDatatableImportJob(datatableId, importJobId) { 
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatableImportJob';
		}
		// verify the required parameter 'importJobId' is set
		if (importJobId === undefined || importJobId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get all recent import jobs
	 * Get all recent import jobs
	 * @param {String} datatableId id of datatable
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.pageNumber Page number (default to 1)
	 * @param {Number} opts.pageSize Page size (default to 25)
	 */
	getFlowsDatatableImportJobs(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
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
			['application/json']
		);
	}

	/**
	 * Returns a specific row for the datatable
	 * Given a datatableId and a rowId (the value of the key field) this will return the full row contents for that rowId.
	 * @param {String} datatableId id of datatable
	 * @param {String} rowId The key for the row
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.showbrief if true returns just the key field for the row (default to true)
	 */
	getFlowsDatatableRow(datatableId, rowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatableRow';
		}
		// verify the required parameter 'rowId' is set
		if (rowId === undefined || rowId === null) {
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
			['application/json']
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
	 */
	getFlowsDatatableRows(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
			throw 'Missing the required parameter "datatableId" when calling getFlowsDatatableRows';
		}

		return this.apiClient.callApi(
			'/api/v2/flows/datatables/{datatableId}/rows', 
			'GET', 
			{ 'datatableId': datatableId }, 
			{ 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'showbrief': opts['showbrief'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
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
	 * @param {String} opts.name Name to filter by
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
			['application/json']
		);
	}

	/**
	 * Returns a specific datatable by id
	 * Given a datatableId returns the datatable object and schema associated with it.
	 * @param {String} datatableId id of datatable
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the result
	 */
	getFlowsDatatablesDivisionview(datatableId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
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
			['application/json']
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
	 * @param {String} opts.name Name to filter by
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get a flow execution&#39;s details. Flow execution details are available for several days after the flow is started.
	 * 
	 * @param {String} flowExecutionId flow execution ID
	 */
	getFlowsExecution(flowExecutionId) { 
		// verify the required parameter 'flowExecutionId' is set
		if (flowExecutionId === undefined || flowExecutionId === null) {
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
			['application/json']
		);
	}

	/**
	 * Get a flow milestone
	 * Returns a specified flow milestone
	 * @param {String} milestoneId flow milestone ID
	 */
	getFlowsMilestone(milestoneId) { 
		// verify the required parameter 'milestoneId' is set
		if (milestoneId === undefined || milestoneId === null) {
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
			['application/json']
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Get a flow outcome
	 * Returns a specified flow outcome
	 * @param {String} flowOutcomeId flow outcome ID
	 */
	getFlowsOutcome(flowOutcomeId) { 
		// verify the required parameter 'flowOutcomeId' is set
		if (flowOutcomeId === undefined || flowOutcomeId === null) {
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
			['application/json']
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
			['application/json']
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
			['application/json']
		);
	}

	/**
	 * Rebuild Dependency Tracking data for an organization
	 * Asynchronous.  Notification topic: v2.architect.dependencytracking.build
	 */
	postArchitectDependencytrackingBuild() { 

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
			['application/json']
		);
	}

	/**
	 * Creates a new emergency group
	 * 
	 * @param {Object} body 
	 */
	postArchitectEmergencygroups(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create IVR config.
	 * 
	 * @param {Object} body 
	 */
	postArchitectIvrs(body) { 
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
			['application/json']
		);
	}

	/**
	 * Generate prompt history
	 * Asynchronous.  Notification topic: v2.architect.prompts.{promptId}
	 * @param {String} promptId Prompt ID
	 */
	postArchitectPromptHistory(promptId) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create a new user prompt resource
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {Object} body 
	 */
	postArchitectPromptResources(promptId, body) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create a new user prompt
	 * 
	 * @param {Object} body 
	 */
	postArchitectPrompts(body) { 
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
			['application/json']
		);
	}

	/**
	 * Creates a new schedule group
	 * 
	 * @param {Object} body 
	 */
	postArchitectSchedulegroups(body) { 
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
			['application/json']
		);
	}

	/**
	 * Create a new schedule.
	 * 
	 * @param {Object} body 
	 */
	postArchitectSchedules(body) { 
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
			['application/json']
		);
	}

	/**
	 * Generate system prompt history
	 * Asynchronous.  Notification topic: v2.architect.systemprompts.{systemPromptId}
	 * @param {String} promptId promptId
	 */
	postArchitectSystempromptHistory(promptId) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create system prompt resource override.
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {Object} body 
	 */
	postArchitectSystempromptResources(promptId, body) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
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
			['application/json']
		);
	}

	/**
	 * Generate flow history
	 * Asynchronous.  Notification topic: v2.flows.{flowId}
	 * @param {String} flowId Flow ID
	 */
	postFlowHistory(flowId) { 
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create flow version
	 * 
	 * @param {String} flowId Flow ID
	 * @param {Object} body 
	 */
	postFlowVersions(flowId, body) { 
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create flow
	 * 
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.language Language
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
			['application/json']
		);
	}

	/**
	 * Check-in flow
	 * Asynchronous.  Notification topic: v2.flows.{flowId}
	 * @param {String} flow Flow ID
	 */
	postFlowsActionsCheckin(flow) { 
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
			['application/json']
		);
	}

	/**
	 * Check-out flow
	 * 
	 * @param {String} flow Flow ID
	 */
	postFlowsActionsCheckout(flow) { 
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
			['application/json']
		);
	}

	/**
	 * Deactivate flow
	 * 
	 * @param {String} flow Flow ID
	 */
	postFlowsActionsDeactivate(flow) { 
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
			['application/json']
		);
	}

	/**
	 * Publish flow
	 * Asynchronous.  Notification topic: v2.flows.{flowId}
	 * @param {String} flow Flow ID
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.version version
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
			['application/json']
		);
	}

	/**
	 * Revert flow
	 * 
	 * @param {String} flow Flow ID
	 */
	postFlowsActionsRevert(flow) { 
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
			['application/json']
		);
	}

	/**
	 * Unlock flow
	 * Allows for unlocking a flow in the case where there is no flow configuration available, and thus a check-in will not unlock the flow. The user must have Architect Admin permissions to perform this action.
	 * @param {String} flow Flow ID
	 */
	postFlowsActionsUnlock(flow) { 
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
			['application/json']
		);
	}

	/**
	 * Begin an export process for exporting all rows from a datatable
	 * Create an export job for exporting rows. The caller can then poll for status of the export using the token returned in the response
	 * @param {String} datatableId id of datatable
	 */
	postFlowsDatatableExportJobs(datatableId) { 
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
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
			['application/json']
		);
	}

	/**
	 * Begin an import process for importing rows into a datatable
	 * Create an import job for importing rows. The caller can then poll for status of the import using the token returned in the response
	 * @param {String} datatableId id of datatable
	 * @param {Object} body import job information
	 */
	postFlowsDatatableImportJobs(datatableId, body) { 
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create a new row entry for the datatable.
	 * Will add the passed in row entry to the datatable with the given datatableId after verifying it against the schema.  The DataTableRow should be a json-ized&#39; stream of key -&gt; value pairs {      \&quot;Field1\&quot;: \&quot;XYZZY\&quot;,      \&quot;Field2\&quot;: false,      \&quot;KEY\&quot;: \&quot;27272\&quot;  }
	 * @param {String} datatableId id of datatable
	 * @param {Object} dataTableRow 
	 */
	postFlowsDatatableRows(datatableId, dataTableRow) { 
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
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
			['application/json']
		);
	}

	/**
	 * Create a new datatable with the specified json-schema definition
	 * This will create a new datatable with fields that match the property definitions in the JSON schema.  The schema&#39;s title field will be overridden by the name field in the DataTable object.  See also http://json-schema.org/
	 * @param {Object} body datatable json-schema
	 */
	postFlowsDatatables(body) { 
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
			['application/json']
		);
	}

	/**
	 * Launch an instance of a flow definition, for flow types that support it such as the &#39;workflow&#39; type.
	 * The launch is asynchronous, it returns as soon as the flow starts. You can use the returned ID to query its status if you need.
	 * @param {Object} flowLaunchRequest 
	 */
	postFlowsExecutions(flowLaunchRequest) { 
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
			['application/json']
		);
	}

	/**
	 * Create a flow milestone
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
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
			['application/json']
		);
	}

	/**
	 * Create a flow outcome
	 * Asynchronous.  Notification topic: v2.flows.outcomes.{flowOutcomeId}
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
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
			['application/json']
		);
	}

	/**
	 * Updates a emergency group by ID
	 * 
	 * @param {String} emergencyGroupId Emergency group ID
	 * @param {Object} body 
	 */
	putArchitectEmergencygroup(emergencyGroupId, body) { 
		// verify the required parameter 'emergencyGroupId' is set
		if (emergencyGroupId === undefined || emergencyGroupId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update an IVR Config.
	 * 
	 * @param {String} ivrId IVR id
	 * @param {Object} body 
	 */
	putArchitectIvr(ivrId, body) { 
		// verify the required parameter 'ivrId' is set
		if (ivrId === undefined || ivrId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update specified user prompt
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {Object} body 
	 */
	putArchitectPrompt(promptId, body) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update specified user prompt resource
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} body 
	 */
	putArchitectPromptResource(promptId, languageCode, body) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling putArchitectPromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
			['application/json']
		);
	}

	/**
	 * Update schedule by ID
	 * 
	 * @param {String} scheduleId Schedule ID
	 * @param {Object} body 
	 */
	putArchitectSchedule(scheduleId, body) { 
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
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
			['application/json']
		);
	}

	/**
	 * Updates a schedule group by ID
	 * 
	 * @param {String} scheduleGroupId Schedule group ID
	 * @param {Object} body 
	 */
	putArchitectSchedulegroup(scheduleGroupId, body) { 
		// verify the required parameter 'scheduleGroupId' is set
		if (scheduleGroupId === undefined || scheduleGroupId === null) {
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
			['application/json']
		);
	}

	/**
	 * Updates a system prompt resource override.
	 * 
	 * @param {String} promptId Prompt ID
	 * @param {String} languageCode Language
	 * @param {Object} body 
	 */
	putArchitectSystempromptResource(promptId, languageCode, body) { 
		// verify the required parameter 'promptId' is set
		if (promptId === undefined || promptId === null) {
			throw 'Missing the required parameter "promptId" when calling putArchitectSystempromptResource';
		}
		// verify the required parameter 'languageCode' is set
		if (languageCode === undefined || languageCode === null) {
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
			['application/json']
		);
	}

	/**
	 * Update flow
	 * 
	 * @param {String} flowId Flow ID
	 * @param {Object} body 
	 */
	putFlow(flowId, body) { 
		// verify the required parameter 'flowId' is set
		if (flowId === undefined || flowId === null) {
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
			['application/json']
		);
	}

	/**
	 * Updates a specific datatable by id
	 * Updates a schema for a datatable with the given datatableId -updates allow only new fields to be added in the schema, no changes or removals of existing fields.
	 * @param {String} datatableId id of datatable
	 * @param {Object} body datatable json-schema
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Expand instructions for the result
	 */
	putFlowsDatatable(datatableId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
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
			['application/json']
		);
	}

	/**
	 * Update a row entry
	 * Updates a row with the given rowId (the value of the key field) to the new values.  The DataTableRow should be a json-ized&#39; stream of key -&gt; value pairs {     \&quot;Field1\&quot;: \&quot;XYZZY\&quot;,     \&quot;Field2\&quot;: false,     \&quot;KEY\&quot;: \&quot;27272\&quot; }
	 * @param {String} datatableId id of datatable
	 * @param {String} rowId the key for the row
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body datatable row
	 */
	putFlowsDatatableRow(datatableId, rowId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'datatableId' is set
		if (datatableId === undefined || datatableId === null) {
			throw 'Missing the required parameter "datatableId" when calling putFlowsDatatableRow';
		}
		// verify the required parameter 'rowId' is set
		if (rowId === undefined || rowId === null) {
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
			['application/json']
		);
	}

	/**
	 * Updates a flow milestone
	 * 
	 * @param {String} milestoneId flow milestone ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putFlowsMilestone(milestoneId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'milestoneId' is set
		if (milestoneId === undefined || milestoneId === null) {
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
			['application/json']
		);
	}

	/**
	 * Updates a flow outcome
	 * Updates a flow outcome.  Asynchronous.  Notification topic: v2.flowoutcomes.{flowoutcomeId}
	 * @param {String} flowOutcomeId flow outcome ID
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body 
	 */
	putFlowsOutcome(flowOutcomeId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'flowOutcomeId' is set
		if (flowOutcomeId === undefined || flowOutcomeId === null) {
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
			['application/json']
		);
	}

}


export default ArchitectApi;