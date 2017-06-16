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
    root.platformClient.SearchApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Search service.
   * @module purecloud-platform-client-v2/api/SearchApi
   * @version 2.0.2
   */

  /**
   * Constructs a new SearchApi. 
   * @alias module:purecloud-platform-client-v2/api/SearchApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Search documentation using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     */
    this.getDocumentationSearch = function(q64) { 

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getDocumentationSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/documentation/search', 
        'GET', 
        {  }, 
        { 'q64': q64 }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search groups using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getGroupsSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getGroupsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search locations using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getLocationsSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getLocationsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/locations/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


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
     * Search users using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getUsersSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getUsersSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/users/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search voicemails using the q64 value returned from a previous search
     * 
     * @param {String} q64 q64
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand expand
     */
    this.getVoicemailSearch = function(q64, opts) { 
      opts = opts || {};

      // verify the required parameter 'q64' is set
      if (q64 === undefined || q64 === null) {
        throw "Missing the required parameter 'q64' when calling getVoicemailSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/search', 
        'GET', 
        {  }, 
        { 'q64': q64,'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Search documentation
     * 
     * @param {module:purecloud-platform-client-v2/model/DocumentationSearchRequest} body Search request options
     */
    this.postDocumentationSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postDocumentationSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/documentation/search', 
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
     * Search groups
     * 
     * @param {module:purecloud-platform-client-v2/model/GroupSearchRequest} body Search request options
     */
    this.postGroupsSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGroupsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/search', 
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
     * Search locations
     * 
     * @param {module:purecloud-platform-client-v2/model/LocationSearchRequest} body Search request options
     */
    this.postLocationsSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postLocationsSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/locations/search', 
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
     * Search resources.
     * 
     * @param {module:purecloud-platform-client-v2/model/SearchRequest} body Search request options
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
     * @param {module:purecloud-platform-client-v2/model/SuggestSearchRequest} body Search request options
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


    /**
     * Search users
     * 
     * @param {module:purecloud-platform-client-v2/model/UserSearchRequest} body Search request options
     */
    this.postUsersSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUsersSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/users/search', 
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
     * Search voicemails
     * 
     * @param {module:purecloud-platform-client-v2/model/VoicemailSearchRequest} body Search request options
     */
    this.postVoicemailSearch = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postVoicemailSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/voicemail/search', 
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
  };

  return exports;
}));
