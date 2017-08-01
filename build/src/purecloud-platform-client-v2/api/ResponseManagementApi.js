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
    root.platformClient.ResponseManagementApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ResponseManagement service.
   * @module purecloud-platform-client-v2/api/ResponseManagementApi
   * @version 6.1.2
   */

  /**
   * Constructs a new ResponseManagementApi. 
   * @alias module:purecloud-platform-client-v2/api/ResponseManagementApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete an existing response library.
     * This will remove any responses associated with the library.
     * @param {String} libraryId Library ID
     */
    this.deleteResponsemanagementLibrary = function(libraryId) { 

      // verify the required parameter 'libraryId' is set
      if (libraryId === undefined || libraryId === null) {
        throw "Missing the required parameter 'libraryId' when calling deleteResponsemanagementLibrary";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/libraries/{libraryId}', 
        'DELETE', 
        { 'libraryId': libraryId }, 
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
     * Delete an existing response.
     * This will remove the response from any libraries associated with it.
     * @param {String} responseId Response ID
     */
    this.deleteResponsemanagementResponse = function(responseId) { 

      // verify the required parameter 'responseId' is set
      if (responseId === undefined || responseId === null) {
        throw "Missing the required parameter 'responseId' when calling deleteResponsemanagementResponse";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses/{responseId}', 
        'DELETE', 
        { 'responseId': responseId }, 
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
     * Gets a list of existing response libraries.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getResponsemanagementLibraries = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/libraries', 
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
     * Get details about an existing response library.
     * 
     * @param {String} libraryId Library ID
     */
    this.getResponsemanagementLibrary = function(libraryId) { 

      // verify the required parameter 'libraryId' is set
      if (libraryId === undefined || libraryId === null) {
        throw "Missing the required parameter 'libraryId' when calling getResponsemanagementLibrary";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/libraries/{libraryId}', 
        'GET', 
        { 'libraryId': libraryId }, 
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
     * Get details about an existing response.
     * 
     * @param {String} responseId Response ID
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand instructions for the return value.
     */
    this.getResponsemanagementResponse = function(responseId, opts) { 
      opts = opts || {};

      // verify the required parameter 'responseId' is set
      if (responseId === undefined || responseId === null) {
        throw "Missing the required parameter 'responseId' when calling getResponsemanagementResponse";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses/{responseId}', 
        'GET', 
        { 'responseId': responseId }, 
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
     * Gets a list of existing responses.
     * 
     * @param {String} libraryId Library ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand instructions for the return value.
     */
    this.getResponsemanagementResponses = function(libraryId, opts) { 
      opts = opts || {};

      // verify the required parameter 'libraryId' is set
      if (libraryId === undefined || libraryId === null) {
        throw "Missing the required parameter 'libraryId' when calling getResponsemanagementResponses";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses', 
        'GET', 
        {  }, 
        { 'libraryId': libraryId,'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Create a response library.
     * 
     * @param {module:purecloud-platform-client-v2/model/Library} body Library
     */
    this.postResponsemanagementLibraries = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postResponsemanagementLibraries";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/libraries', 
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
     * Create a response.
     * 
     * @param {module:purecloud-platform-client-v2/model/Response} body Response
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand instructions for the return value.
     */
    this.postResponsemanagementResponses = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postResponsemanagementResponses";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses', 
        'POST', 
        {  }, 
        { 'expand': opts['expand'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Query responses
     * 
     * @param {module:purecloud-platform-client-v2/model/ResponseQueryRequest} body Response
     */
    this.postResponsemanagementResponsesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postResponsemanagementResponsesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses/query', 
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
     * Update an existing response library.
     * Fields that can be updated: name. The most recent version is required for updates.
     * @param {String} libraryId Library ID
     * @param {module:purecloud-platform-client-v2/model/Library} body Library
     */
    this.putResponsemanagementLibrary = function(libraryId, body) { 

      // verify the required parameter 'libraryId' is set
      if (libraryId === undefined || libraryId === null) {
        throw "Missing the required parameter 'libraryId' when calling putResponsemanagementLibrary";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putResponsemanagementLibrary";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/libraries/{libraryId}', 
        'PUT', 
        { 'libraryId': libraryId }, 
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
     * Update an existing response.
     * Fields that can be updated: name, libraries, and texts. The most recent version is required for updates.
     * @param {String} responseId Response ID
     * @param {module:purecloud-platform-client-v2/model/Response} body Response
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/String} opts.expand Expand instructions for the return value.
     */
    this.putResponsemanagementResponse = function(responseId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'responseId' is set
      if (responseId === undefined || responseId === null) {
        throw "Missing the required parameter 'responseId' when calling putResponsemanagementResponse";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putResponsemanagementResponse";
      }


      return this.apiClient.callApi(
        '/api/v2/responsemanagement/responses/{responseId}', 
        'PUT', 
        { 'responseId': responseId }, 
        { 'expand': opts['expand'] }, 
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
