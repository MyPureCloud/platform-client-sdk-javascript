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
   * @version 6.1.3
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
     * @param {module:purecloud-platform-client-v2/model/String} objectType Consuming object type
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
     * @param {module:purecloud-platform-client-v2/model/String} objectType Consumed object type (only versioned object types are valid)
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.resourceType Types of consuming resources to show
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
     * @param {module:purecloud-platform-client-v2/model/String} opts.flowFilter Show only checkedIn or published flows
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
     * @param {module:purecloud-platform-client-v2/model/String} opts.objectType Object type
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
     */
    this.getArchitectIvrs = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs', 
        'GET', 
        {  }, 
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
     */
    this.getArchitectPrompts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/prompts', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'] }, 
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
     */
    this.getArchitectSchedulegroups = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups', 
        'GET', 
        {  }, 
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
     * Get a list of schedules.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.sortBy Sort by (default to name)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     */
    this.getArchitectSchedules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/schedules', 
        'GET', 
        {  }, 
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
     * @param {String} historyId History ID (generated history)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortBy Sort by (default to timestamp)
     * @param {String} opts.sortOrder Sort order (default to desc)
     * @param {Array.<String>} opts.action Flow actions
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
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'action': this.apiClient.buildCollectionParam(opts['action'], 'multi') }, 
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
     * @param {String} type Type
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
     * @param {module:purecloud-platform-client-v2/model/String} opts.secure Secure
     * @param {Boolean} opts.deleted Include deleted (default to false)
     * @param {Boolean} opts.includeSchemas Include variable schemas (default to false)
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
        { 'type': type,'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'name': opts['name'],'description': opts['description'],'nameOrDescription': opts['nameOrDescription'],'publishVersionId': opts['publishVersionId'],'editableBy': opts['editableBy'],'lockedBy': opts['lockedBy'],'secure': opts['secure'],'deleted': opts['deleted'],'includeSchemas': opts['includeSchemas'] }, 
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
     * Create IVR config.
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/IVR} opts.body 
     */
    this.postArchitectIvrs = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new user prompt resource
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/PromptAssetCreate} opts.body 
     */
    this.postArchitectPromptResources = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling postArchitectPromptResources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources', 
        'POST', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new user prompt
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Prompt} opts.body 
     */
    this.postArchitectPrompts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/prompts', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Creates a new schedule group
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ScheduleGroup} opts.body 
     */
    this.postArchitectSchedulegroups = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a new schedule.
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Schedule} opts.body 
     */
    this.postArchitectSchedules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/architect/schedules', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create system prompt resource override.
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/SystemPromptAsset} opts.body 
     */
    this.postArchitectSystempromptResources = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling postArchitectSystempromptResources";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources', 
        'POST', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create flow version
     * 
     * @param {String} flowId Flow ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.postFlowVersions = function(flowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling postFlowVersions";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}/versions', 
        'POST', 
        { 'flowId': flowId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create flow
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Flow} opts.body 
     */
    this.postFlows = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/flows', 
        'POST', 
        {  }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
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
     * Update an IVR Config.
     * 
     * @param {String} ivrId IVR id
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/IVR} opts.body 
     */
    this.putArchitectIvr = function(ivrId, opts) { 
      opts = opts || {};

      // verify the required parameter 'ivrId' is set
      if (ivrId === undefined || ivrId === null) {
        throw "Missing the required parameter 'ivrId' when calling putArchitectIvr";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/ivrs/{ivrId}', 
        'PUT', 
        { 'ivrId': ivrId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update specified user prompt
     * 
     * @param {String} promptId Prompt ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Prompt} opts.body 
     */
    this.putArchitectPrompt = function(promptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling putArchitectPrompt";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}', 
        'PUT', 
        { 'promptId': promptId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
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
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/PromptAsset} opts.body 
     */
    this.putArchitectPromptResource = function(promptId, languageCode, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling putArchitectPromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling putArchitectPromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/prompts/{promptId}/resources/{languageCode}', 
        'PUT', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update schedule by ID
     * 
     * @param {String} scheduleId Schedule ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Schedule} opts.body 
     */
    this.putArchitectSchedule = function(scheduleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling putArchitectSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedules/{scheduleId}', 
        'PUT', 
        { 'scheduleId': scheduleId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Updates a schedule group by ID
     * 
     * @param {String} scheduleGroupId Schedule group ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/ScheduleGroup} opts.body 
     */
    this.putArchitectSchedulegroup = function(scheduleGroupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scheduleGroupId' is set
      if (scheduleGroupId === undefined || scheduleGroupId === null) {
        throw "Missing the required parameter 'scheduleGroupId' when calling putArchitectSchedulegroup";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/schedulegroups/{scheduleGroupId}', 
        'PUT', 
        { 'scheduleGroupId': scheduleGroupId }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
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
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/SystemPromptAsset} opts.body 
     */
    this.putArchitectSystempromptResource = function(promptId, languageCode, opts) { 
      opts = opts || {};

      // verify the required parameter 'promptId' is set
      if (promptId === undefined || promptId === null) {
        throw "Missing the required parameter 'promptId' when calling putArchitectSystempromptResource";
      }

      // verify the required parameter 'languageCode' is set
      if (languageCode === undefined || languageCode === null) {
        throw "Missing the required parameter 'languageCode' when calling putArchitectSystempromptResource";
      }


      return this.apiClient.callApi(
        '/api/v2/architect/systemprompts/{promptId}/resources/{languageCode}', 
        'PUT', 
        { 'promptId': promptId,'languageCode': languageCode }, 
        {  }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update flow
     * 
     * @param {String} flowId Flow ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/Flow} opts.body 
     */
    this.putFlow = function(flowId, opts) { 
      opts = opts || {};

      // verify the required parameter 'flowId' is set
      if (flowId === undefined || flowId === null) {
        throw "Missing the required parameter 'flowId' when calling putFlow";
      }


      return this.apiClient.callApi(
        '/api/v2/flows/{flowId}', 
        'PUT', 
        { 'flowId': flowId }, 
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
