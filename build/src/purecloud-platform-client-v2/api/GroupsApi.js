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
    root.platformClient.GroupsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Groups service.
   * @module purecloud-platform-client-v2/api/GroupsApi
   * @version 12.0.0
   */

  /**
   * Constructs a new GroupsApi. 
   * @alias module:purecloud-platform-client-v2/api/GroupsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete group
     * 
     * @param {String} groupId Group ID
     */
    this.deleteGroup = function(groupId) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroup";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}', 
        'DELETE', 
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
     * Remove members
     * 
     * @param {String} groupId Group ID
     * @param {String} ids Comma separated list of userIds to remove
     */
    this.deleteGroupMembers = function(groupId, ids) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroupMembers";
      }

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw "Missing the required parameter 'ids' when calling deleteGroupMembers";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/members', 
        'DELETE', 
        { 'groupId': groupId }, 
        { 'ids': ids }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch field config for an entity type
     * 
     * @param {Object} type Field type
     */
    this.getFieldconfig = function(type) { 

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw "Missing the required parameter 'type' when calling getFieldconfig";
      }


      return this.apiClient.callApi(
        '/api/v2/fieldconfig', 
        'GET', 
        {  }, 
        { 'type': type }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get group
     * 
     * @param {String} groupId Group ID
     */
    this.getGroup = function(groupId) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getGroup";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}', 
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
     * Get group members
     * 
     * @param {String} groupId Group ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getGroupMembers = function(groupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling getGroupMembers";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/members', 
        'GET', 
        { 'groupId': groupId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a group list
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.id id
     * @param {Object} opts.sortOrder Ascending or descending sort order (default to ASC)
     */
    this.getGroups = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/groups', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'sortOrder': opts['sortOrder'] }, 
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
     * Add members
     * 
     * @param {String} groupId Group ID
     * @param {Object} body Add members
     */
    this.postGroupMembers = function(groupId, body) { 

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling postGroupMembers";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGroupMembers";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}/members', 
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
     * Create a group
     * 
     * @param {Object} body Group
     */
    this.postGroups = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postGroups";
      }


      return this.apiClient.callApi(
        '/api/v2/groups', 
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
     * @param {Object} body Search request options
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
     * Update group
     * 
     * @param {String} groupId Group ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body Group
     */
    this.putGroup = function(groupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'groupId' is set
      if (groupId === undefined || groupId === null) {
        throw "Missing the required parameter 'groupId' when calling putGroup";
      }


      return this.apiClient.callApi(
        '/api/v2/groups/{groupId}', 
        'PUT', 
        { 'groupId': groupId }, 
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
