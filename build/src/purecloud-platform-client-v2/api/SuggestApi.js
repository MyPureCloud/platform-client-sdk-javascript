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
    root.platformClient.SuggestApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Suggest service.
   * @module purecloud-platform-client-v2/api/SuggestApi
   * @version 29.0.0
   */

  /**
   * Constructs a new SuggestApi. 
   * @alias module:purecloud-platform-client-v2/api/SuggestApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Search using the q64 value returned from a previous search.
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.getSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Suggest resources using the q64 value returned from a previous suggest query.
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.getSearchSuggest = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getSearchSuggest";
      }


      return this.apiClient.callApi(
        '/api/v2/search/suggest', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search resources.
     * 
     * @param {Object} body Search request options
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.postSearch = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/search', 
        'POST', 
        {  }, 
        { 'profile': opts['profile'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Suggest resources.
     * 
     * @param {Object} body Search request options
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.profile profile (default to true)
     */
    this.postSearchSuggest = function(body, opts) { 
      opts = opts || {};

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postSearchSuggest";
      }


      return this.apiClient.callApi(
        '/api/v2/search/suggest', 
        'POST', 
        {  }, 
        { 'profile': opts['profile'] }, 
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
