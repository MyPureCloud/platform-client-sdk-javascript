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
    root.platformClient.UserRecordingsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * UserRecordings service.
   * @module purecloud-platform-client-v2/api/UserRecordingsApi
   * @version 8.0.0
   */

  /**
   * Constructs a new UserRecordingsApi. 
   * @alias module:purecloud-platform-client-v2/api/UserRecordingsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a user recording.
     * 
     * @param {String} recordingId User Recording ID
     */
    this.deleteUserrecording = function(recordingId) { 

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling deleteUserrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/userrecordings/{recordingId}', 
        'DELETE', 
        { 'recordingId': recordingId }, 
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
     * Get a user recording.
     * 
     * @param {String} recordingId User Recording ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getUserrecording = function(recordingId, opts) { 
      opts = opts || {};

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getUserrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/userrecordings/{recordingId}', 
        'GET', 
        { 'recordingId': recordingId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Download a user recording.
     * 
     * @param {String} recordingId User Recording ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.formatId The desired media format. (default to WEBM)
     */
    this.getUserrecordingMedia = function(recordingId, opts) { 
      opts = opts || {};

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling getUserrecordingMedia";
      }


      return this.apiClient.callApi(
        '/api/v2/userrecordings/{recordingId}/media', 
        'GET', 
        { 'recordingId': recordingId }, 
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
     * Get a list of user recordings.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getUserrecordings = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/userrecordings', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get user recording summary
     * 
     */
    this.getUserrecordingsSummary = function() { 


      return this.apiClient.callApi(
        '/api/v2/userrecordings/summary', 
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
     * Update a user recording.
     * 
     * @param {String} recordingId User Recording ID
     * @param {Object} body UserRecording
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.putUserrecording = function(recordingId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'recordingId' is set
      if (recordingId === undefined || recordingId === null) {
        throw "Missing the required parameter 'recordingId' when calling putUserrecording";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserrecording";
      }


      return this.apiClient.callApi(
        '/api/v2/userrecordings/{recordingId}', 
        'PUT', 
        { 'recordingId': recordingId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
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
