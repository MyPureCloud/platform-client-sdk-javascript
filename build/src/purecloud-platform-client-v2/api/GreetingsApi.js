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
    root.platformClient.GreetingsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Greetings service.
   * @module purecloud-platform-client-v2/api/GreetingsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new GreetingsApi. 
   * @alias module:purecloud-platform-client-v2/api/GreetingsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Deletes a Greeting with the given GreetingId
     * 
     * @param {String} greetingId Greeting ID
     */
    this.deleteGreeting = function(greetingId) { 

      // verify the required parameter 'greetingId' is set
      if (greetingId === undefined || greetingId === null) {
        throw "Missing the required parameter 'greetingId' when calling deleteGreeting";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings/{greetingId}', 
        'DELETE', 
        { 'greetingId': greetingId }, 
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
     * Get a Greeting with the given GreetingId
     * 
     * @param {String} greetingId Greeting ID
     */
    this.getGreeting = function(greetingId) { 

      // verify the required parameter 'greetingId' is set
      if (greetingId === undefined || greetingId === null) {
        throw "Missing the required parameter 'greetingId' when calling getGreeting";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings/{greetingId}', 
        'GET', 
        { 'greetingId': greetingId }, 
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
     * Get media playback URI for this greeting
     * 
     * @param {String} greetingId Greeting ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.formatId The desired media format. (default to WAV)
     */
    this.getGreetingMedia = function(greetingId, opts) { 
      opts = opts || {};

      // verify the required parameter 'greetingId' is set
      if (greetingId === undefined || greetingId === null) {
        throw "Missing the required parameter 'greetingId' when calling getGreetingMedia";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings/{greetingId}/media', 
        'GET', 
        { 'greetingId': greetingId }, 
        { 'formatId': opts['formatId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Gets an Organization&#39;s Greetings
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getGreetings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/greetings', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get an Organization&#39;s DefaultGreetingList
     * 
     */
    this.getGreetingsDefaults = function() { 


      return this.apiClient.callApi(
        '/api/v2/greetings/defaults', 
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
     * Get a list of the Group&#39;s Greetings
     * 
     * @param {String} groupId Group ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getGroupGreetings = function(groupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getGroupGreetings";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/greetings', 
        'GET', 
        { 'groupId': groupId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Grabs the list of Default Greetings given a Group&#39;s ID
     * 
     * @param {String} groupId Group ID
     */
    this.getGroupGreetingsDefaults = function(groupId) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getGroupGreetingsDefaults";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/greetings/defaults', 
        'GET', 
        { 'groupId': groupId }, 
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
     * Get a list of the User&#39;s Greetings
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     */
    this.getUserGreetings = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserGreetings";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/greetings', 
        'GET', 
        { 'userId': userId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Grabs the list of Default Greetings given a User&#39;s ID
     * 
     * @param {String} userId User ID
     */
    this.getUserGreetingsDefaults = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserGreetingsDefaults";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/greetings/defaults', 
        'GET', 
        { 'userId': userId }, 
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
     * Create a Greeting for an Organization
     * 
     * @param {module:purecloud-platform-client-v2/model/Greeting} body The Greeting to create
     */
    this.postGreetings = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGreetings";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings', 
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
     * Creates a Greeting for a Group
     * 
     * @param {String} groupId Group ID
     * @param {module:purecloud-platform-client-v2/model/Greeting} body The Greeting to create
     */
    this.postGroupGreetings = function(groupId, body) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling postGroupGreetings";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGroupGreetings";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/greetings', 
        'POST', 
        { 'groupId': groupId }, 
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
     * Creates a Greeting for a User
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/Greeting} body The Greeting to create
     */
    this.postUserGreetings = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling postUserGreetings";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUserGreetings";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/greetings', 
        'POST', 
        { 'userId': userId }, 
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
     * Updates the Greeting with the given GreetingId
     * 
     * @param {String} greetingId Greeting ID
     * @param {module:purecloud-platform-client-v2/model/Greeting} body The updated Greeting
     */
    this.putGreeting = function(greetingId, body) { 

      // verify the required parameter 'greetingId' is set
      if (greetingId === undefined || greetingId === null) {
        throw "Missing the required parameter 'greetingId' when calling putGreeting";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putGreeting";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings/{greetingId}', 
        'PUT', 
        { 'greetingId': greetingId }, 
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
     * Update an Organization&#39;s DefaultGreetingList
     * 
     * @param {module:purecloud-platform-client-v2/model/DefaultGreetingList} body The updated defaultGreetingList
     */
    this.putGreetingsDefaults = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putGreetingsDefaults";
      }


      return this.apiClient.callApi(
        '/api/v2/greetings/defaults', 
        'PUT', 
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
     * Updates the DefaultGreetingList of the specified Group
     * 
     * @param {String} groupId Group ID
     * @param {module:purecloud-platform-client-v2/model/DefaultGreetingList} body The updated defaultGreetingList
     */
    this.putGroupGreetingsDefaults = function(groupId, body) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling putGroupGreetingsDefaults";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putGroupGreetingsDefaults";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/greetings/defaults', 
        'PUT', 
        { 'groupId': groupId }, 
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
     * Updates the DefaultGreetingList of the specified User
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/DefaultGreetingList} body The updated defaultGreetingList
     */
    this.putUserGreetingsDefaults = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserGreetingsDefaults";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserGreetingsDefaults";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/greetings/defaults', 
        'PUT', 
        { 'userId': userId }, 
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
