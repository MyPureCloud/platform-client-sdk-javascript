(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['purecloud-platform-client-v2/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.platformClient) {
      root.platformClient = {};
    }
    root.platformClient.ArchitectApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Architect service.
   * @module purecloud-platform-client-v2/api/ArchitectApi
   * @version 31.0.0
   */

  /**
   * Constructs a new ArchitectApi. 
   * @alias module:purecloud-platform-client-v2/api/ArchitectApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Deletes a emergency group by ID
     * 
     * @param {String} emergencyGroupId Emergency group ID
     */
    this.deleteArchitectEmergencygroup = function(emergencyGroupId) { 

      // verify the required parameter 'emergencyGroupId' is set
      if (emergencyGroupId === undefined || emergencyGroupId === null) {
        throw "Missing the required parameter 'emergencyGroupId' when calling deleteArchitectEmergencygroup";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/emergencygroups/{emergencyGroupId}', 
        'DELETE', 
        { 'emergencyGroupId': emergencyGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete an IVR Config.
     * 
     * @param {String} ivrId IVR id
     */
    this.deleteArchitectIvr = function(ivrId) { 

      // verify the required parameter 'ivrId' is set
      if (ivrId === undefined || ivrId === null) {
        throw "Missing the required parameter 'ivrId' when calling deleteArchitectIvr";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs/{ivrId}', 
        'DELETE', 
        { 'ivrId': ivrId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete specified user prompt
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allResources Whether or not to delete all the prompt resources
     */
    this.deleteArchitectPrompt = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling deleteArchitectPrompt";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}', 
        'DELETE', 
        { 'promptId': promptId }, 
        { 'allResources': opts['allResources'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete specified user prompt resource
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     */
    this.deleteArchitectPromptResource = function(promptId, languageCode) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling deleteArchitectPromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling deleteArchitectPromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources/{languageCode}', 
        'DELETE', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Batch-delete a list of prompts
     * Multiple IDs can be specified, in which case all specified prompts will be deleted.  Asynchronous.  Notification topic: v2.architect.prompts.{promptId}
     * @param {Array.<String>} id List of Prompt IDs
     */
    this.deleteArchitectPrompts = function(id) { 

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling deleteArchitectPrompts";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts', 
        'DELETE', 
        {  }, 
        { 'id': this.apiClient.buildCollectionParam(id, 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a schedule by id
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.deleteArchitectSchedule = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling deleteArchitectSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedules/{scheduleId}', 
        'DELETE', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Deletes a schedule group by ID
     * 
     * @param {String} scheduleGroupId Schedule group ID
     */
    this.deleteArchitectSchedulegroup = function(scheduleGroupId) { 

      // verify the required parameter 'scheduleGroupId' is set
      if (scheduleGroupId === undefined || scheduleGroupId === null) {
        throw "Missing the required parameter 'scheduleGroupId' when calling deleteArchitectSchedulegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups/{scheduleGroupId}', 
        'DELETE', 
        { 'scheduleGroupId': scheduleGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a system prompt resource override.
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     */
    this.deleteArchitectSystempromptResource = function(promptId, languageCode) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling deleteArchitectSystempromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling deleteArchitectSystempromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}', 
        'DELETE', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete flow
     * 
     * @param {String} flowId Flow ID
     */
    this.deleteFlow = function(flowId) { 

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling deleteFlow";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}', 
        'DELETE', 
        { 'flowId': flowId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Batch-delete a list of flows
     * Multiple IDs can be specified, in which case all specified flows will be deleted.  Asynchronous.  Notification topic: v2.flows.{flowId}
     * @param {Array.<String>} id List of Flow IDs
     */
    this.deleteFlows = function(id) { 

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling deleteFlows";
      }


      return this.apiClient.callApi(
        '/api/v2/flows', 
        'DELETE', 
        {  }, 
        { 'id': this.apiClient.buildCollectionParam(id, 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * deletes a specific datatable by id
     * deletes an entire datatable (including schema and data) with a given id)
     * @param {String} datatableId id of datatable
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force force delete, even if in use (default to false)
     */
    this.deleteFlowsDatatable = function(datatableId, opts) { 
      opts = opts || {};

      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw "Missing the required parameter 'datatableId' when calling deleteFlowsDatatable";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/datatables/{datatableId}', 
        'DELETE', 
        { 'datatableId': datatableId }, 
        { 'force': opts['force'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Delete a row entry
     * Deletes a row with a given rowId.
     * @param {String} datatableId id of datatable
     * @param {String} rowId the key for the row
     */
    this.deleteFlowsDatatableRow = function(datatableId, rowId) { 

      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw "Missing the required parameter 'datatableId' when calling deleteFlowsDatatableRow";
      }

      // verify the required parameter 'rowId' is set
      if (rowId === undefined || rowId === null) {
        throw "Missing the required parameter 'rowId' when calling deleteFlowsDatatableRow";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/datatables/{datatableId}/rows/{rowId}', 
        'DELETE', 
        { 'datatableId': datatableId,'rowId': rowId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getArchitectDependencytracking = function(name, opts) { 
      opts = opts || {};

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw "Missing the required parameter 'name' when calling getArchitectDependencytracking";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': name,'objectType': this.apiClient.buildCollectionParam(opts['objectType'], 'multi'),'consumedResources': opts['consumedResources'],'consumingResources': opts['consumingResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'consumingResourceType': this.apiClient.buildCollectionParam(opts['consumingResourceType'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Dependency Tracking build status for an organization
     * 
     */
    this.getArchitectDependencytrackingBuild = function() { 


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/build', 
        'GET', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get resources that are consumed by a given Dependency Tracking object
     * 
     * @param {String} id Consuming object ID
     * @param {String} version Consuming object version
     * @param {Object} objectType Consuming object type.  Only versioned types are allowed here.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.resourceType Types of consumed resources to show
     */
    this.getArchitectDependencytrackingConsumedresources = function(id, version, objectType, opts) { 
      opts = opts || {};

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling getArchitectDependencytrackingConsumedresources";
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw "Missing the required parameter 'version' when calling getArchitectDependencytrackingConsumedresources";
      }

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw "Missing the required parameter 'objectType' when calling getArchitectDependencytrackingConsumedresources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/consumedresources', 
        'GET', 
        {  }, 
        { 'id': id,'version': version,'objectType': objectType,'resourceType': this.apiClient.buildCollectionParam(opts['resourceType'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get resources that consume a given Dependency Tracking object
     * 
     * @param {String} id Consumed object ID
     * @param {Object} objectType Consumed object type
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.resourceType Types of consuming resources to show.  Only versioned types are allowed here.
     */
    this.getArchitectDependencytrackingConsumingresources = function(id, objectType, opts) { 
      opts = opts || {};

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling getArchitectDependencytrackingConsumingresources";
      }

      // verify the required parameter 'objectType' is set
      if (objectType === undefined || objectType === null) {
        throw "Missing the required parameter 'objectType' when calling getArchitectDependencytrackingConsumingresources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/consumingresources', 
        'GET', 
        {  }, 
        { 'id': id,'objectType': objectType,'resourceType': this.apiClient.buildCollectionParam(opts['resourceType'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getArchitectDependencytrackingDeletedresourceconsumers = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/deletedresourceconsumers', 
        'GET', 
        {  }, 
        { 'name': opts['name'],'objectType': this.apiClient.buildCollectionParam(opts['objectType'], 'multi'),'flowFilter': opts['flowFilter'],'consumedResources': opts['consumedResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
     */
    this.getArchitectDependencytrackingObject = function(id, opts) { 
      opts = opts || {};

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw "Missing the required parameter 'id' when calling getArchitectDependencytrackingObject";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/object', 
        'GET', 
        {  }, 
        { 'id': id,'version': opts['version'],'objectType': opts['objectType'],'consumedResources': opts['consumedResources'],'consumingResources': opts['consumingResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'consumingResourceType': this.apiClient.buildCollectionParam(opts['consumingResourceType'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a Dependency Tracking type.
     * 
     * @param {String} typeId Type ID
     */
    this.getArchitectDependencytrackingType = function(typeId) { 

      // verify the required parameter 'typeId' is set
      if (typeId === undefined || typeId === null) {
        throw "Missing the required parameter 'typeId' when calling getArchitectDependencytrackingType";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/types/{typeId}', 
        'GET', 
        { 'typeId': typeId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get Dependency Tracking types.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getArchitectDependencytrackingTypes = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/types', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getArchitectDependencytrackingUpdatedresourceconsumers = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/updatedresourceconsumers', 
        'GET', 
        {  }, 
        { 'name': opts['name'],'objectType': this.apiClient.buildCollectionParam(opts['objectType'], 'multi'),'consumedResources': opts['consumedResources'],'consumedResourceType': this.apiClient.buildCollectionParam(opts['consumedResourceType'], 'multi'),'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a emergency group by ID
     * 
     * @param {String} emergencyGroupId Emergency group ID
     */
    this.getArchitectEmergencygroup = function(emergencyGroupId) { 

      // verify the required parameter 'emergencyGroupId' is set
      if (emergencyGroupId === undefined || emergencyGroupId === null) {
        throw "Missing the required parameter 'emergencyGroupId' when calling getArchitectEmergencygroup";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/emergencygroups/{emergencyGroupId}', 
        'GET', 
        { 'emergencyGroupId': emergencyGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getArchitectEmergencygroups = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/emergencygroups', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an IVR config.
     * 
     * @param {String} ivrId IVR id
     */
    this.getArchitectIvr = function(ivrId) { 

      // verify the required parameter 'ivrId' is set
      if (ivrId === undefined || ivrId === null) {
        throw "Missing the required parameter 'ivrId' when calling getArchitectIvr";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs/{ivrId}', 
        'GET', 
        { 'ivrId': ivrId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getArchitectIvrs = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get specified user prompt
     * 
     * @param {String} promptId Prompt ID
     */
    this.getArchitectPrompt = function(promptId) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectPrompt";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}', 
        'GET', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getArchitectPromptHistoryHistoryId = function(promptId, historyId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectPromptHistoryHistoryId";
      }

      // verify the required parameter 'historyId' is set
      if (historyId === undefined || historyId === null) {
        throw "Missing the required parameter 'historyId' when calling getArchitectPromptHistoryHistoryId";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/history/{historyId}', 
        'GET', 
        { 'promptId': promptId,'historyId': historyId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'],'action': this.apiClient.buildCollectionParam(opts['action'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get specified user prompt resource
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     */
    this.getArchitectPromptResource = function(promptId, languageCode) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectPromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling getArchitectPromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources/{languageCode}', 
        'GET', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a pageable list of user prompt resources
     * The returned list is pageable, and query parameters can be used for filtering.
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getArchitectPromptResources = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectPromptResources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources', 
        'GET', 
        { 'promptId': promptId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a pageable list of user prompts
     * The returned list is pageable, and query parameters can be used for filtering.  Multiple names can be specified, in which case all matching prompts will be returned, and no other filters will be evaluated.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.name Name
     * @param {String} opts.description Description
     * @param {String} opts.nameOrDescription Name or description
     * @param {String} opts.sortBy Sort by (default to id)
     * @param {String} opts.sortOrder Sort order (default to asc)
     */
    this.getArchitectPrompts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/prompts', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a schedule by ID
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.getArchitectSchedule = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getArchitectSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedules/{scheduleId}', 
        'GET', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets a schedule group by ID
     * 
     * @param {String} scheduleGroupId Schedule group ID
     */
    this.getArchitectSchedulegroup = function(scheduleGroupId) { 

      // verify the required parameter 'scheduleGroupId' is set
      if (scheduleGroupId === undefined || scheduleGroupId === null) {
        throw "Missing the required parameter 'scheduleGroupId' when calling getArchitectSchedulegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups/{scheduleGroupId}', 
        'GET', 
        { 'scheduleGroupId': scheduleGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of schedule groups.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {String} opts.name Name of the Schedule Group to filter by.
     */
    this.getArchitectSchedulegroups = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of schedules.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {String} opts.name Name of the Schedule to filter by.
     */
    this.getArchitectSchedules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/schedules', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a system prompt
     * 
     * @param {String} promptId promptId
     */
    this.getArchitectSystemprompt = function(promptId) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectSystemprompt";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}', 
        'GET', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getArchitectSystempromptHistoryHistoryId = function(promptId, historyId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectSystempromptHistoryHistoryId";
      }

      // verify the required parameter 'historyId' is set
      if (historyId === undefined || historyId === null) {
        throw "Missing the required parameter 'historyId' when calling getArchitectSystempromptHistoryHistoryId";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/history/{historyId}', 
        'GET', 
        { 'promptId': promptId,'historyId': historyId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'],'action': this.apiClient.buildCollectionParam(opts['action'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a system prompt resource.
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     */
    this.getArchitectSystempromptResource = function(promptId, languageCode) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectSystempromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling getArchitectSystempromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}', 
        'GET', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getArchitectSystempromptResources = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling getArchitectSystempromptResources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources', 
        'GET', 
        { 'promptId': promptId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getArchitectSystemprompts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get flow
     * 
     * @param {String} flowId Flow ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deleted Include deleted flows (default to false)
     */
    this.getFlow = function(flowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlow";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}', 
        'GET', 
        { 'flowId': flowId }, 
        { 'deleted': opts['deleted'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
    this.getFlowHistoryHistoryId = function(flowId, historyId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlowHistoryHistoryId";
      }

      // verify the required parameter 'historyId' is set
      if (historyId === undefined || historyId === null) {
        throw "Missing the required parameter 'historyId' when calling getFlowHistoryHistoryId";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/history/{historyId}', 
        'GET', 
        { 'flowId': flowId,'historyId': historyId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortOrder': opts['sortOrder'],'sortBy': opts['sortBy'],'action': this.apiClient.buildCollectionParam(opts['action'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the latest configuration for flow
     * 
     * @param {String} flowId Flow ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.deleted Include deleted flows (default to false)
     */
    this.getFlowLatestconfiguration = function(flowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlowLatestconfiguration";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/latestconfiguration', 
        'GET', 
        { 'flowId': flowId }, 
        { 'deleted': opts['deleted'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get flow version
     * 
     * @param {String} flowId Flow ID
     * @param {String} versionId Version ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.deleted Include deleted flows
     */
    this.getFlowVersion = function(flowId, versionId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlowVersion";
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw "Missing the required parameter 'versionId' when calling getFlowVersion";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/versions/{versionId}', 
        'GET', 
        { 'flowId': flowId,'versionId': versionId }, 
        { 'deleted': opts['deleted'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create flow version configuration
     * 
     * @param {String} flowId Flow ID
     * @param {String} versionId Version ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.deleted Include deleted flows
     */
    this.getFlowVersionConfiguration = function(flowId, versionId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlowVersionConfiguration";
      }

      // verify the required parameter 'versionId' is set
      if (versionId === undefined || versionId === null) {
        throw "Missing the required parameter 'versionId' when calling getFlowVersionConfiguration";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/versions/{versionId}/configuration', 
        'GET', 
        { 'flowId': flowId,'versionId': versionId }, 
        { 'deleted': opts['deleted'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get flow version list
     * 
     * @param {String} flowId Flow ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Boolean} opts.deleted Include deleted flows
     */
    this.getFlowVersions = function(flowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling getFlowVersions";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/versions', 
        'GET', 
        { 'flowId': flowId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'deleted': opts['deleted'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a pageable list of flows, filtered by query parameters
     * Multiple IDs can be specified, in which case all matching flows will be returned, and no other parameters will be evaluated.
     * @param {Object} type Type
     * @param {Object} opts Optional parameters
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
     * @param {Object} opts.secure Secure
     * @param {Boolean} opts.deleted Include deleted (default to false)
     * @param {Boolean} opts.includeSchemas Include variable schemas (default to false)
     * @param {String} opts.publishedAfter Published after
     * @param {String} opts.publishedBefore Published before
     * @param {Array.<String>} opts.divisionId division ID(s)
     */
    this.getFlows = function(type, opts) { 
      opts = opts || {};

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw "Missing the required parameter 'type' when calling getFlows";
      }


      return this.apiClient.callApi(
        '/api/v2/flows', 
        'GET', 
        {  }, 
        { 'type': type,'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'publishVersionId': opts['publishVersionId'],'editableBy': opts['editableBy'],'lockedBy': opts['lockedBy'],'secure': opts['secure'],'deleted': opts['deleted'],'includeSchemas': opts['includeSchemas'],'publishedAfter': opts['publishedAfter'],'publishedBefore': opts['publishedBefore'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Returns a specific datatable by id
     * Given a datableid returns the schema associated with it.
     * @param {String} datatableId id of datatable
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand Expand instructions for the result
     */
    this.getFlowsDatatable = function(datatableId, opts) { 
      opts = opts || {};

      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw "Missing the required parameter 'datatableId' when calling getFlowsDatatable";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/datatables/{datatableId}', 
        'GET', 
        { 'datatableId': datatableId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Returns a specific row for the datatable
     * Given a datatable id and a rowId (key)  will return the full row contents for that rowId.
     * @param {String} datatableId id of datatable
     * @param {String} rowId The key for the row
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.showbrief if true returns just the key field for the row (default to true)
     */
    this.getFlowsDatatableRow = function(datatableId, rowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw "Missing the required parameter 'datatableId' when calling getFlowsDatatableRow";
      }

      // verify the required parameter 'rowId' is set
      if (rowId === undefined || rowId === null) {
        throw "Missing the required parameter 'rowId' when calling getFlowsDatatableRow";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/datatables/{datatableId}/rows/{rowId}', 
        'GET', 
        { 'datatableId': datatableId,'rowId': rowId }, 
        { 'showbrief': opts['showbrief'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Returns the rows for the datatable
     * Returns all of the rows for the datatable with the given id.  By default this will just be a shortened list returning the key for each row.  Set expand to all to return all of the row contents.
     * @param {String} datatableId id of datatable
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Boolean} opts.showbrief If true returns just the key value of the row (default to true)
     */
    this.getFlowsDatatableRows = function(datatableId, opts) { 
      opts = opts || {};

      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw "Missing the required parameter 'datatableId' when calling getFlowsDatatableRows";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/datatables/{datatableId}/rows', 
        'GET', 
        { 'datatableId': datatableId }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'showbrief': opts['showbrief'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Retrieve a list of datatables for the org
     * Returns a metadata list of the datatables associated with this org, including ID, name and description.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand Expand instructions for the result
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Object} opts.sortBy Sort by (default to id)
     * @param {String} opts.sortOrder Sort order (default to ascending)
     */
    this.getFlowsDatatables = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/flows/datatables', 
        'GET', 
        {  }, 
        { 'expand': opts['expand'],'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a pageable list of basic flow information objects filterable by query parameters.
     * This returns a simplified version of /flow consisting of name and type.
     * @param {Object} type Type
     * @param {Object} opts Optional parameters
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
     */
    this.getFlowsDivisionviews = function(type, opts) { 
      opts = opts || {};

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw "Missing the required parameter 'type' when calling getFlowsDivisionviews";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/divisionviews', 
        'GET', 
        {  }, 
        { 'type': type,'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'publishVersionId': opts['publishVersionId'],'publishedAfter': opts['publishedAfter'],'publishedBefore': opts['publishedBefore'],'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Rebuild Dependency Tracking data for an organization
     * Asynchronous.  Notification topic: v2.architect.dependencytracking.build
     */
    this.postArchitectDependencytrackingBuild = function() { 


      return this.apiClient.callApi(
        '/api/v2/architect/dependencytracking/build', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Creates a new emergency group
     * 
     * @param {Object} body 
     */
    this.postArchitectEmergencygroups = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postArchitectEmergencygroups";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/emergencygroups', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create IVR config.
     * 
     * @param {Object} body 
     */
    this.postArchitectIvrs = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postArchitectIvrs";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Generate prompt history
     * Asynchronous.  Notification topic: v2.architect.prompts.{promptId}
     * @param {String} promptId Prompt ID
     */
    this.postArchitectPromptHistory = function(promptId) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling postArchitectPromptHistory";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/history', 
        'POST', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new user prompt resource
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} body 
     */
    this.postArchitectPromptResources = function(promptId, body) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling postArchitectPromptResources";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postArchitectPromptResources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources', 
        'POST', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new user prompt
     * 
     * @param {Object} body 
     */
    this.postArchitectPrompts = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postArchitectPrompts";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Creates a new schedule group
     * 
     * @param {Object} body 
     */
    this.postArchitectSchedulegroups = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postArchitectSchedulegroups";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new schedule.
     * 
     * @param {Object} body 
     */
    this.postArchitectSchedules = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postArchitectSchedules";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedules', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Generate system prompt history
     * Asynchronous.  Notification topic: v2.architect.systemprompts.{systemPromptId}
     * @param {String} promptId promptId
     */
    this.postArchitectSystempromptHistory = function(promptId) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling postArchitectSystempromptHistory";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/history', 
        'POST', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create system prompt resource override.
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} body 
     */
    this.postArchitectSystempromptResources = function(promptId, body) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling postArchitectSystempromptResources";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postArchitectSystempromptResources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources', 
        'POST', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create flow version
     * 
     * @param {String} flowId Flow ID
     * @param {Object} body 
     */
    this.postFlowVersions = function(flowId, body) { 

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling postFlowVersions";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postFlowVersions";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/versions', 
        'POST', 
        { 'flowId': flowId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create flow
     * 
     * @param {Object} body 
     */
    this.postFlows = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postFlows";
      }


      return this.apiClient.callApi(
        '/api/v2/flows', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Check-in flow
     * Asynchronous.  Notification topic: v2.flows.{flowId}
     * @param {String} flow Flow ID
     */
    this.postFlowsActionsCheckin = function(flow) { 

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsCheckin";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/checkin', 
        'POST', 
        {  }, 
        { 'flow': flow }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Check-out flow
     * 
     * @param {String} flow Flow ID
     */
    this.postFlowsActionsCheckout = function(flow) { 

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsCheckout";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/checkout', 
        'POST', 
        {  }, 
        { 'flow': flow }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Deactivate flow
     * 
     * @param {String} flow Flow ID
     */
    this.postFlowsActionsDeactivate = function(flow) { 

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsDeactivate";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/deactivate', 
        'POST', 
        {  }, 
        { 'flow': flow }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Publish flow
     * Asynchronous.  Notification topic: v2.flows.{flowId}
     * @param {String} flow Flow ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.version version
     */
    this.postFlowsActionsPublish = function(flow, opts) { 
      opts = opts || {};

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsPublish";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/publish', 
        'POST', 
        {  }, 
        { 'flow': flow,'version': opts['version'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Revert flow
     * 
     * @param {String} flow Flow ID
     */
    this.postFlowsActionsRevert = function(flow) { 

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsRevert";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/revert', 
        'POST', 
        {  }, 
        { 'flow': flow }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Unlock flow
     * Allows for unlocking a flow in the case where there is no flow configuration available, and thus a check-in will not unlock the flow. The user must have Architect Admin permissions to perform this action.
     * @param {String} flow Flow ID
     */
    this.postFlowsActionsUnlock = function(flow) { 

      // verify the required parameter 'flow' is set
      if (flow === undefined || flow === null) {
        throw "Missing the required parameter 'flow' when calling postFlowsActionsUnlock";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/actions/unlock', 
        'POST', 
        {  }, 
        { 'flow': flow }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new row entry
     * Will add the passed in row entry to the datatable with the given id after verifying it against the schema.
     * @param {String} datatableId id of datatable
     * @param {Object} dataTableRow 
     */
    this.postFlowsDatatableRows = function(datatableId, dataTableRow) { 

      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw "Missing the required parameter 'datatableId' when calling postFlowsDatatableRows";
      }

      // verify the required parameter 'dataTableRow' is set
      if (dataTableRow === undefined || dataTableRow === null) {
        throw "Missing the required parameter 'dataTableRow' when calling postFlowsDatatableRows";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/datatables/{datatableId}/rows', 
        'POST', 
        { 'datatableId': datatableId }, 
        {  }, 
        {  }, 
        {  }, 
        dataTableRow, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new datatable with the specified json-schema definition
     * This will create a new datatable with fields that match the property definitions in the JSON schema.  The name of the table from the title field of the json-schema.  See also http://json-schema.org/
     * @param {Object} body datatable json-schema
     */
    this.postFlowsDatatables = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postFlowsDatatables";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/datatables', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates a emergency group by ID
     * 
     * @param {String} emergencyGroupId Emergency group ID
     * @param {Object} body 
     */
    this.putArchitectEmergencygroup = function(emergencyGroupId, body) { 

      // verify the required parameter 'emergencyGroupId' is set
      if (emergencyGroupId === undefined || emergencyGroupId === null) {
        throw "Missing the required parameter 'emergencyGroupId' when calling putArchitectEmergencygroup";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putArchitectEmergencygroup";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/emergencygroups/{emergencyGroupId}', 
        'PUT', 
        { 'emergencyGroupId': emergencyGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update an IVR Config.
     * 
     * @param {String} ivrId IVR id
     * @param {Object} body 
     */
    this.putArchitectIvr = function(ivrId, body) { 

      // verify the required parameter 'ivrId' is set
      if (ivrId === undefined || ivrId === null) {
        throw "Missing the required parameter 'ivrId' when calling putArchitectIvr";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putArchitectIvr";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs/{ivrId}', 
        'PUT', 
        { 'ivrId': ivrId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update specified user prompt
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} body 
     */
    this.putArchitectPrompt = function(promptId, body) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling putArchitectPrompt";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putArchitectPrompt";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}', 
        'PUT', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update specified user prompt resource
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     * @param {Object} body 
     */
    this.putArchitectPromptResource = function(promptId, languageCode, body) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling putArchitectPromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling putArchitectPromptResource";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putArchitectPromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources/{languageCode}', 
        'PUT', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update schedule by ID
     * 
     * @param {String} scheduleId Schedule ID
     * @param {Object} body 
     */
    this.putArchitectSchedule = function(scheduleId, body) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling putArchitectSchedule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putArchitectSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedules/{scheduleId}', 
        'PUT', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates a schedule group by ID
     * 
     * @param {String} scheduleGroupId Schedule group ID
     * @param {Object} body 
     */
    this.putArchitectSchedulegroup = function(scheduleGroupId, body) { 

      // verify the required parameter 'scheduleGroupId' is set
      if (scheduleGroupId === undefined || scheduleGroupId === null) {
        throw "Missing the required parameter 'scheduleGroupId' when calling putArchitectSchedulegroup";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putArchitectSchedulegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups/{scheduleGroupId}', 
        'PUT', 
        { 'scheduleGroupId': scheduleGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates a system prompt resource override.
     * 
     * @param {String} promptId Prompt ID
     * @param {String} languageCode Language
     * @param {Object} body 
     */
    this.putArchitectSystempromptResource = function(promptId, languageCode, body) { 

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling putArchitectSystempromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling putArchitectSystempromptResource";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putArchitectSystempromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}', 
        'PUT', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update flow
     * 
     * @param {String} flowId Flow ID
     * @param {Object} body 
     */
    this.putFlow = function(flowId, body) { 

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling putFlow";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putFlow";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}', 
        'PUT', 
        { 'flowId': flowId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates a specific datatable by id
     * Updates a schema for a datatable with the given id - updates are additive only, no changes or removals of existing fields.
     * @param {String} datatableId id of datatable
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand Expand instructions for the result
     * @param {Object} opts.body datatable json-schema
     */
    this.putFlowsDatatable = function(datatableId, opts) { 
      opts = opts || {};

      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw "Missing the required parameter 'datatableId' when calling putFlowsDatatable";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/datatables/{datatableId}', 
        'PUT', 
        { 'datatableId': datatableId }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a row entry
     * Updates a row with the given to the new values.
     * @param {String} datatableId id of datatable
     * @param {String} rowId the key for the row
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body datatable row
     */
    this.putFlowsDatatableRow = function(datatableId, rowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'datatableId' is set
      if (datatableId === undefined || datatableId === null) {
        throw "Missing the required parameter 'datatableId' when calling putFlowsDatatableRow";
      }

      // verify the required parameter 'rowId' is set
      if (rowId === undefined || rowId === null) {
        throw "Missing the required parameter 'rowId' when calling putFlowsDatatableRow";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/datatables/{datatableId}/rows/{rowId}', 
        'PUT', 
        { 'datatableId': datatableId,'rowId': rowId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));
