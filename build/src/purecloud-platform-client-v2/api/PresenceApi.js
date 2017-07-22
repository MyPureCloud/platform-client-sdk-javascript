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
    root.platformClient.PresenceApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Presence service.
   * @module purecloud-platform-client-v2/api/PresenceApi
   * @version 6.1.0
   */

  /**
   * Constructs a new PresenceApi. 
   * @alias module:purecloud-platform-client-v2/api/PresenceApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a Presence Definition
     * 
     * @param {String} presenceId Organization Presence ID
     */
    this.deletePresencedefinition = function(presenceId) { 

      // verify the required parameter 'presenceId' is set
      if (presenceId === undefined || presenceId === null) {
        throw "Missing the required parameter 'presenceId' when calling deletePresencedefinition";
      }


      return this.apiClient.callApi(
        '/api/v2/presencedefinitions/{presenceId}', 
        'DELETE', 
        { 'presenceId': presenceId }, 
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
     * Get a Presence Definition
     * 
     * @param {String} presenceId Organization Presence ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.localeCode The locale code to fetch for the presence definition. Use ALL to fetch everything.
     */
    this.getPresencedefinition = function(presenceId, opts) { 
      opts = opts || {};

      // verify the required parameter 'presenceId' is set
      if (presenceId === undefined || presenceId === null) {
        throw "Missing the required parameter 'presenceId' when calling getPresencedefinition";
      }


      return this.apiClient.callApi(
        '/api/v2/presencedefinitions/{presenceId}', 
        'GET', 
        { 'presenceId': presenceId }, 
        { 'localeCode': opts['localeCode'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an Organization&#39;s list of Presence Definitions
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.deleted Deleted query can be TRUE, FALSE or ALL (default to false)
     * @param {String} opts.localeCode The locale code to fetch for each presence definition. Use ALL to fetch everything.
     */
    this.getPresencedefinitions = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/presencedefinitions', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'deleted': opts['deleted'],'localeCode': opts['localeCode'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of SystemPresences
     * 
     */
    this.getSystempresences = function() { 


      return this.apiClient.callApi(
        '/api/v2/systempresences', 
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
     * Get a user&#39;s Presence
     * 
     * @param {String} userId user Id
     * @param {String} sourceId Source
     */
    this.getUserPresence = function(userId, sourceId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserPresence";
      }

      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw "Missing the required parameter 'sourceId' when calling getUserPresence";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/presences/{sourceId}', 
        'GET', 
        { 'userId': userId,'sourceId': sourceId }, 
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
     * Patch a user&#39;s Presence
     * The presence object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the &#39;source&#39; defined in the path as the user&#39;s primary presence source. Option 2: Provide the presenceDefinition value. The &#39;id&#39; is the only value required within the presenceDefinition. Option 3: Provide the message value. Option 1 can be combined with Option 2 and/or Option 3.
     * @param {String} userId user Id
     * @param {String} sourceId Source
     * @param {module:purecloud-platform-client-v2/model/UserPresence} body User presence
     */
    this.patchUserPresence = function(userId, sourceId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserPresence";
      }

      // verify the required parameter 'sourceId' is set
      if (sourceId === undefined || sourceId === null) {
        throw "Missing the required parameter 'sourceId' when calling patchUserPresence";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserPresence";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/presences/{sourceId}', 
        'PATCH', 
        { 'userId': userId,'sourceId': sourceId }, 
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
     * Create a Presence Definition
     * 
     * @param {module:purecloud-platform-client-v2/model/OrganizationPresence} body The Presence Definition to create
     */
    this.postPresencedefinitions = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postPresencedefinitions";
      }


      return this.apiClient.callApi(
        '/api/v2/presencedefinitions', 
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
     * Update a Presence Definition
     * 
     * @param {String} presenceId Organization Presence ID
     * @param {module:purecloud-platform-client-v2/model/OrganizationPresence} body The OrganizationPresence to update
     */
    this.putPresencedefinition = function(presenceId, body) { 

      // verify the required parameter 'presenceId' is set
      if (presenceId === undefined || presenceId === null) {
        throw "Missing the required parameter 'presenceId' when calling putPresencedefinition";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putPresencedefinition";
      }


      return this.apiClient.callApi(
        '/api/v2/presencedefinitions/{presenceId}', 
        'PUT', 
        { 'presenceId': presenceId }, 
        {  }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));
