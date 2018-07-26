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
    root.platformClient.ScriptsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Scripts service.
   * @module purecloud-platform-client-v2/api/ScriptsApi
   * @version 31.0.0
   */

  /**
   * Constructs a new ScriptsApi. 
   * @alias module:purecloud-platform-client-v2/api/ScriptsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a script
     * 
     * @param {String} scriptId Script ID
     */
    this.getScript = function(scriptId) { 

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScript";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/{scriptId}', 
        'GET', 
        { 'scriptId': scriptId }, 
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
     * Get a page
     * 
     * @param {String} scriptId Script ID
     * @param {String} pageId Page ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
     */
    this.getScriptPage = function(scriptId, pageId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptPage";
      }

      // verify the required parameter 'pageId' is set
      if (pageId === undefined || pageId === null) {
        throw "Missing the required parameter 'pageId' when calling getScriptPage";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/{scriptId}/pages/{pageId}', 
        'GET', 
        { 'scriptId': scriptId,'pageId': pageId }, 
        { 'scriptDataVersion': opts['scriptDataVersion'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of pages
     * 
     * @param {String} scriptId Script ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
     */
    this.getScriptPages = function(scriptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptPages";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/{scriptId}/pages', 
        'GET', 
        { 'scriptId': scriptId }, 
        { 'scriptDataVersion': opts['scriptDataVersion'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of scripts
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.expand Expand
     * @param {String} opts.name Name filter
     * @param {String} opts.feature Feature filter
     * @param {String} opts.flowId Secure flow id filter
     * @param {Object} opts.sortBy SortBy
     * @param {Object} opts.sortOrder SortOrder
     * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
     */
    this.getScripts = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/scripts', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'name': opts['name'],'feature': opts['feature'],'flowId': opts['flowId'],'sortBy': opts['sortBy'],'sortOrder': opts['sortOrder'],'scriptDataVersion': opts['scriptDataVersion'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published scripts.
     * 
     * @param {String} scriptId Script ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.expand Expand
     * @param {String} opts.name Name filter
     * @param {String} opts.feature Feature filter
     * @param {String} opts.flowId Secure flow id filter
     * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
     */
    this.getScriptsPublished = function(scriptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptsPublished";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/published', 
        'GET', 
        { 'scriptId': scriptId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'name': opts['name'],'feature': opts['feature'],'flowId': opts['flowId'],'scriptDataVersion': opts['scriptDataVersion'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published script.
     * 
     * @param {String} scriptId Script ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
     */
    this.getScriptsPublishedScriptId = function(scriptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptsPublishedScriptId";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/published/{scriptId}', 
        'GET', 
        { 'scriptId': scriptId }, 
        { 'scriptDataVersion': opts['scriptDataVersion'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published page.
     * 
     * @param {String} scriptId Script ID
     * @param {String} pageId Page ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
     */
    this.getScriptsPublishedScriptIdPage = function(scriptId, pageId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptsPublishedScriptIdPage";
      }

      // verify the required parameter 'pageId' is set
      if (pageId === undefined || pageId === null) {
        throw "Missing the required parameter 'pageId' when calling getScriptsPublishedScriptIdPage";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/published/{scriptId}/pages/{pageId}', 
        'GET', 
        { 'scriptId': scriptId,'pageId': pageId }, 
        { 'scriptDataVersion': opts['scriptDataVersion'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the list of published pages
     * 
     * @param {String} scriptId Script ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
     */
    this.getScriptsPublishedScriptIdPages = function(scriptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptsPublishedScriptIdPages";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/published/{scriptId}/pages', 
        'GET', 
        { 'scriptId': scriptId }, 
        { 'scriptDataVersion': opts['scriptDataVersion'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the published variables
     * 
     * @param {String} scriptId Script ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.input input
     * @param {String} opts.output output
     * @param {String} opts.type type
     * @param {String} opts.scriptDataVersion Advanced usage - controls the data version of the script
     */
    this.getScriptsPublishedScriptIdVariables = function(scriptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling getScriptsPublishedScriptIdVariables";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/published/{scriptId}/variables', 
        'GET', 
        { 'scriptId': scriptId }, 
        { 'input': opts['input'],'output': opts['output'],'type': opts['type'],'scriptDataVersion': opts['scriptDataVersion'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get the upload status of an imported script
     * 
     * @param {String} uploadId Upload ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.longPoll Enable longPolling endpoint (default to false)
     */
    this.getScriptsUploadStatus = function(uploadId, opts) { 
      opts = opts || {};

      // verify the required parameter 'uploadId' is set
      if (uploadId === undefined || uploadId === null) {
        throw "Missing the required parameter 'uploadId' when calling getScriptsUploadStatus";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/uploads/{uploadId}/status', 
        'GET', 
        { 'uploadId': uploadId }, 
        { 'longPoll': opts['longPoll'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Export a script via download service.
     * 
     * @param {String} scriptId Script ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     */
    this.postScriptExport = function(scriptId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scriptId' is set
      if (scriptId === undefined || scriptId === null) {
        throw "Missing the required parameter 'scriptId' when calling postScriptExport";
      }


      return this.apiClient.callApi(
        '/api/v2/scripts/{scriptId}/export', 
        'POST', 
        { 'scriptId': scriptId }, 
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
