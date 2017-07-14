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
    root.platformClient.WorkforceManagementApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * WorkforceManagement service.
   * @module purecloud-platform-client-v2/api/WorkforceManagementApi
   * @version 5.1.0
   */

  /**
   * Constructs a new WorkforceManagementApi. 
   * @alias module:purecloud-platform-client-v2/api/WorkforceManagementApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a list of UserScheduleAdherence records for the requested users
     * 
     * @param {Array.<String>} userId User Id(s) for which to fetch current schedule adherence information.  Min 1, Max of 100 userIds per request
     */
    this.getWorkforcemanagementAdherence = function(userId) { 

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getWorkforcemanagementAdherence";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/adherence', 
        'GET', 
        {  }, 
        { 'userId': this.apiClient.buildCollectionParam(userId, 'multi') }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get activity codes corresponding to a management unit
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     */
    this.getWorkforcemanagementManagementunitActivitycodes = function(muId) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitActivitycodes";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/activitycodes', 
        'GET', 
        { 'muId': muId }, 
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
     * Get intraday queues for the given date
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} _date ISO-8601 date string with no time or timezone component, interpreted in the configured management unit time zone, e.g. 2017-01-23
     */
    this.getWorkforcemanagementManagementunitIntradayQueues = function(muId, _date) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitIntradayQueues";
      }

      // verify the required parameter '_date' is set
      if (_date === undefined || _date === null) {
        throw "Missing the required parameter '_date' when calling getWorkforcemanagementManagementunitIntradayQueues";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/intraday/queues', 
        'GET', 
        { 'muId': muId }, 
        { 'date': _date }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a time off request by id
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} userId The userId to whom the Time Off Request applies.
     * @param {String} timeOffRequestId Time Off Request Id
     */
    this.getWorkforcemanagementManagementunitUserTimeoffrequest = function(muId, userId, timeOffRequestId) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitUserTimeoffrequest";
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getWorkforcemanagementManagementunitUserTimeoffrequest";
      }

      // verify the required parameter 'timeOffRequestId' is set
      if (timeOffRequestId === undefined || timeOffRequestId === null) {
        throw "Missing the required parameter 'timeOffRequestId' when calling getWorkforcemanagementManagementunitUserTimeoffrequest";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}', 
        'GET', 
        { 'muId': muId,'userId': userId,'timeOffRequestId': timeOffRequestId }, 
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
     * Get a list of time off requests for any user
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} userId The userId to whom the Time Off Request applies.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.recentlyReviewed Limit results to requests that have been reviewed within the preceding 30 days (default to false)
     */
    this.getWorkforcemanagementManagementunitUserTimeoffrequests = function(muId, userId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitUserTimeoffrequests";
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling getWorkforcemanagementManagementunitUserTimeoffrequests";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests', 
        'GET', 
        { 'muId': muId,'userId': userId }, 
        { 'recentlyReviewed': opts['recentlyReviewed'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get agents in the management unit
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     */
    this.getWorkforcemanagementManagementunitUsers = function(muId) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitUsers";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/users', 
        'GET', 
        { 'muId': muId }, 
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
     * Get management units
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.selector Selector
     * @param {Number} opts.pageSize  (default to 25)
     * @param {Number} opts.pageNumber  (default to 1)
     */
    this.getWorkforcemanagementManagementunits = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits', 
        'GET', 
        {  }, 
        { 'selector': opts['selector'],'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a time off request for the current user by id
     * 
     * @param {String} timeOffRequestId Time Off Request Id
     */
    this.getWorkforcemanagementTimeoffrequest = function(timeOffRequestId) { 

      // verify the required parameter 'timeOffRequestId' is set
      if (timeOffRequestId === undefined || timeOffRequestId === null) {
        throw "Missing the required parameter 'timeOffRequestId' when calling getWorkforcemanagementTimeoffrequest";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}', 
        'GET', 
        { 'timeOffRequestId': timeOffRequestId }, 
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
     * Get a list of time off requests for the current user
     * 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.recentlyReviewed Limit results to requests that have been reviewed within the preceding 30 days (default to false)
     */
    this.getWorkforcemanagementTimeoffrequests = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/timeoffrequests', 
        'GET', 
        {  }, 
        { 'recentlyReviewed': opts['recentlyReviewed'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Mark a time off request for the current user as read or unread
     * 
     * @param {String} timeOffRequestId Time Off Request Id
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/TimeOffRequestPatch} opts.body 
     */
    this.patchWorkforcemanagementTimeoffrequest = function(timeOffRequestId, opts) { 
      opts = opts || {};

      // verify the required parameter 'timeOffRequestId' is set
      if (timeOffRequestId === undefined || timeOffRequestId === null) {
        throw "Missing the required parameter 'timeOffRequestId' when calling patchWorkforcemanagementTimeoffrequest";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}', 
        'PATCH', 
        { 'timeOffRequestId': timeOffRequestId }, 
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
     * Get intraday data for the given date for the requested queueIds
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/IntradayQueryDataCommand} opts.body body
     */
    this.postWorkforcemanagementManagementunitIntraday = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling postWorkforcemanagementManagementunitIntraday";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/intraday', 
        'POST', 
        { 'muId': muId }, 
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
     * Get user schedules within the given time range
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/UserListScheduleRequestBody} opts.body body
     */
    this.postWorkforcemanagementManagementunitSchedulesSearch = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling postWorkforcemanagementManagementunitSchedulesSearch";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/schedules/search', 
        'POST', 
        { 'muId': muId }, 
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
     * Get a schedule for the current user
     * 
     * @param {Object} opts Optional parameters
     * @param {module:purecloud-platform-client-v2/model/CurrentUserScheduleRequestBody} opts.body body
     */
    this.postWorkforcemanagementSchedules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/schedules', 
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
  };

  return exports;
}));
