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
    root.platformClient.UsersApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Users service.
   * @module purecloud-platform-client-v2/api/UsersApi
   * @version 2.0.2
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:purecloud-platform-client-v2/api/UsersApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete user
     * 
     * @param {String} userId User ID
     */
    this.deleteUser = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUser";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}', 
        'DELETE', 
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
     * Removes all the roles from the user.
     * 
     * @param {String} userId User ID
     */
    this.deleteUserRoles = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
        'DELETE', 
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
     * Remove routing skill from user
     * 
     * @param {String} userId User ID
     * @param {String} skillId skillId
     */
    this.deleteUserRoutingskill = function(userId, skillId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserRoutingskill";
      }

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling deleteUserRoutingskill";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills/{skillId}', 
        'DELETE', 
        { 'userId': userId,'skillId': skillId }, 
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
     * Clear associated station
     * 
     * @param {String} userId User ID
     */
    this.deleteUserStationAssociatedstation = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserStationAssociatedstation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/station/associatedstation', 
        'DELETE', 
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
     * Clear default station
     * 
     * @param {String} userId User ID
     */
    this.deleteUserStationDefaultstation = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling deleteUserStationDefaultstation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/station/defaultstation', 
        'DELETE', 
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
     * Fetch field config for an entity type
     * 
     * @param {module:purecloud-platform-client-v2/model/String} type Field type
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
     * Get user.
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     * @param {module:purecloud-platform-client-v2/model/String} opts.state Search for a user with this state (default to active)
     */
    this.getUser = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUser";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}', 
        'GET', 
        { 'userId': userId }, 
        { 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'state': opts['state'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get adjacents
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getUserAdjacents = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserAdjacents";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/adjacents', 
        'GET', 
        { 'userId': userId }, 
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
     * Get a user&#39;s CallForwarding
     * 
     * @param {String} userId User ID
     */
    this.getUserCallforwarding = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserCallforwarding";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/callforwarding', 
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
     * Get direct reports
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getUserDirectreports = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserDirectreports";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/directreports', 
        'GET', 
        { 'userId': userId }, 
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
     * Get favorites
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {String} opts.sortOrder Sort order (default to ASC)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getUserFavorites = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserFavorites";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/favorites', 
        'GET', 
        { 'userId': userId }, 
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
     * Get a user&#39;s Geolocation
     * 
     * @param {String} userId user Id
     * @param {String} clientId client Id
     */
    this.getUserGeolocation = function(userId, clientId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserGeolocation";
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw "Missing the required parameter 'clientId' when calling getUserGeolocation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/geolocations/{clientId}', 
        'GET', 
        { 'userId': userId,'clientId': clientId }, 
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
     * Get a OutOfOffice
     * 
     * @param {String} userId User ID
     */
    this.getUserOutofoffice = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserOutofoffice";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/outofoffice', 
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
     * List profile skills for a user
     * 
     * @param {String} userId User ID
     */
    this.getUserProfileskills = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserProfileskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/profileskills', 
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
     * Get queues for user
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Boolean} opts.joined Is joined to the queue (default to true)
     */
    this.getUserQueues = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserQueues";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/queues', 
        'GET', 
        { 'userId': userId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'joined': opts['joined'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Returns a listing of roles and permissions for a user.
     * 
     * @param {String} userId User ID
     */
    this.getUserRoles = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
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
     * List routing skills for user
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Ascending or descending sort order (default to ASC)
     */
    this.getUserRoutingskills = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoutingskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills', 
        'GET', 
        { 'userId': userId }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'sortOrder': opts['sortOrder'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Fetch the routing status of a user
     * 
     * @param {String} userId User ID
     */
    this.getUserRoutingstatus = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserRoutingstatus";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingstatus', 
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
     * Get station information for user
     * 
     * @param {String} userId User ID
     */
    this.getUserStation = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserStation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/station', 
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
     * Get superiors
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     */
    this.getUserSuperiors = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getUserSuperiors";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/superiors', 
        'GET', 
        { 'userId': userId }, 
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
     * Get the list of available users.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Array.<String>} opts.id id
     * @param {module:purecloud-platform-client-v2/model/String} opts.sortOrder Ascending or descending sort order (default to ASC)
     * @param {Array.<String>} opts.expand Which fields, if any, to expand
     * @param {module:purecloud-platform-client-v2/model/String} opts.state Only list users of this state (default to active)
     */
    this.getUsers = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/users', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),'sortOrder': opts['sortOrder'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'state': opts['state'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get current user details.
     * This request is not valid when using the Client Credentials OAuth grant.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.expand Which fields, if any, to expand.
     */
    this.getUsersMe = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/users/me', 
        'GET', 
        {  }, 
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
     * Update user
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/UpdateUser} body User
     */
    this.patchUser = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUser";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUser";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}', 
        'PATCH', 
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
     * Patch a user&#39;s CallForwarding
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/CallForwarding} body Call forwarding
     */
    this.patchUserCallforwarding = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserCallforwarding";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserCallforwarding";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/callforwarding', 
        'PATCH', 
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
     * Patch a user&#39;s Geolocation
     * The geolocation object can be patched one of three ways. Option 1: Set the &#39;primary&#39; property to true. This will set the client as the user&#39;s primary geolocation source.  Option 2: Provide the &#39;latitude&#39; and &#39;longitude&#39; values.  This will enqueue an asynchronous update of the &#39;city&#39;, &#39;region&#39;, and &#39;country&#39;, generating a notification. A subsequent GET operation will include the new values for &#39;city&#39;, &#39;region&#39; and &#39;country&#39;.  Option 3:  Provide the &#39;city&#39;, &#39;region&#39;, &#39;country&#39; values.  Option 1 can be combined with Option 2 or Option 3.  For example, update the client as primary and provide latitude and longitude values.
     * @param {String} userId user Id
     * @param {String} clientId client Id
     * @param {module:purecloud-platform-client-v2/model/Geolocation} body Geolocation
     */
    this.patchUserGeolocation = function(userId, clientId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserGeolocation";
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw "Missing the required parameter 'clientId' when calling patchUserGeolocation";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserGeolocation";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/geolocations/{clientId}', 
        'PATCH', 
        { 'userId': userId,'clientId': clientId }, 
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
     * Join or unjoin a queue for a user
     * 
     * @param {String} queueId Queue ID
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/UserQueue} body Queue Member
     */
    this.patchUserQueue = function(queueId, userId, body) { 

      // verify the required parameter 'queueId' is set
      if (queueId === undefined || queueId === null) {
        throw "Missing the required parameter 'queueId' when calling patchUserQueue";
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserQueue";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserQueue";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/queues/{queueId}', 
        'PATCH', 
        { 'queueId': queueId,'userId': userId }, 
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
     * Join or unjoin a set of queues for a user
     * 
     * @param {String} userId User ID
     * @param {Array.<module:purecloud-platform-client-v2/model/UserQueue>} body User Queues
     */
    this.patchUserQueues = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchUserQueues";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling patchUserQueues";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/queues', 
        'PATCH', 
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
     * Query for user aggregates
     * 
     * @param {module:purecloud-platform-client-v2/model/AggregationQuery} body query
     */
    this.postAnalyticsUsersAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsUsersAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/users/aggregates/query', 
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
     * Query for user details
     * 
     * @param {module:purecloud-platform-client-v2/model/UserDetailsQuery} body query
     */
    this.postAnalyticsUsersDetailsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsUsersDetailsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/users/details/query', 
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
     * Query for user observations
     * 
     * @param {module:purecloud-platform-client-v2/model/ObservationQuery} body query
     */
    this.postAnalyticsUsersObservationsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsUsersObservationsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/users/observations/query', 
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
     * Add routing skill to user
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/UserRoutingSkillPost} body Skill
     */
    this.postUserRoutingskills = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling postUserRoutingskills";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUserRoutingskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills', 
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
     * Create user
     * 
     * @param {module:purecloud-platform-client-v2/model/CreateUser} body User
     */
    this.postUsers = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/users', 
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
     * Update a user&#39;s CallForwarding
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/CallForwarding} body Call forwarding
     */
    this.putUserCallforwarding = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserCallforwarding";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserCallforwarding";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/callforwarding', 
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


    /**
     * Update an OutOfOffice
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/OutOfOffice} body The updated UserPresence
     */
    this.putUserOutofoffice = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserOutofoffice";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserOutofoffice";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/outofoffice', 
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


    /**
     * Update profile skills for a user
     * 
     * @param {String} userId User ID
     * @param {Object} opts Optional parameters
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} opts.body Skills
     */
    this.putUserProfileskills = function(userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserProfileskills";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/profileskills', 
        'PUT', 
        { 'userId': userId }, 
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
     * Sets the user&#39;s roles
     * 
     * @param {String} userId User ID
     * @param {Array.<module:purecloud-platform-client-v2/model/String>} body List of roles
     */
    this.putUserRoles = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserRoles";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserRoles";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/roles', 
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


    /**
     * Update routing skill proficiency or state.
     * 
     * @param {String} userId User ID
     * @param {String} skillId skillId
     * @param {module:purecloud-platform-client-v2/model/UserRoutingSkill} body Skill
     */
    this.putUserRoutingskill = function(userId, skillId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserRoutingskill";
      }

      // verify the required parameter 'skillId' is set
      if (skillId === undefined || skillId === null) {
        throw "Missing the required parameter 'skillId' when calling putUserRoutingskill";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserRoutingskill";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingskills/{skillId}', 
        'PUT', 
        { 'userId': userId,'skillId': skillId }, 
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
     * Update the routing status of a user
     * 
     * @param {String} userId User ID
     * @param {module:purecloud-platform-client-v2/model/RoutingStatus} body Routing Status
     */
    this.putUserRoutingstatus = function(userId, body) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserRoutingstatus";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putUserRoutingstatus";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/routingstatus', 
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


    /**
     * Set associated station
     * 
     * @param {String} userId User ID
     * @param {String} stationId stationId
     */
    this.putUserStationAssociatedstationStationId = function(userId, stationId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserStationAssociatedstationStationId";
      }

      // verify the required parameter 'stationId' is set
      if (stationId === undefined || stationId === null) {
        throw "Missing the required parameter 'stationId' when calling putUserStationAssociatedstationStationId";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/station/associatedstation/{stationId}', 
        'PUT', 
        { 'userId': userId,'stationId': stationId }, 
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
     * Set default station
     * 
     * @param {String} userId User ID
     * @param {String} stationId stationId
     */
    this.putUserStationDefaultstationStationId = function(userId, stationId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling putUserStationDefaultstationStationId";
      }

      // verify the required parameter 'stationId' is set
      if (stationId === undefined || stationId === null) {
        throw "Missing the required parameter 'stationId' when calling putUserStationDefaultstationStationId";
      }


      return this.apiClient.callApi(
        '/api/v2/users/{userId}/station/defaultstation/{stationId}', 
        'PUT', 
        { 'userId': userId,'stationId': stationId }, 
        {  }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };
  };

  return exports;
}));
