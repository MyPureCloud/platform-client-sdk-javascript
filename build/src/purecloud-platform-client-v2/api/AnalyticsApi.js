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
    root.platformClient.AnalyticsApi = factory(root.platformClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Analytics service.
   * @module purecloud-platform-client-v2/api/AnalyticsApi
   * @version 30.0.0
   */

  /**
   * Constructs a new AnalyticsApi. 
   * @alias module:purecloud-platform-client-v2/api/AnalyticsApi
   * @class
   * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete a scheduled report job.
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.deleteAnalyticsReportingSchedule = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling deleteAnalyticsReportingSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}', 
        'DELETE', 
        { 'scheduleId': scheduleId }, 
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
     * Get a conversation by id
     * 
     * @param {String} conversationId conversationId
     */
    this.getAnalyticsConversationDetails = function(conversationId) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling getAnalyticsConversationDetails";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/{conversationId}/details', 
        'GET', 
        { 'conversationId': conversationId }, 
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
     * Get all view export requests for a user
     * 
     */
    this.getAnalyticsReportingExports = function() { 


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/exports', 
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
     * Get list of reporting metadata.
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     * @param {String} opts.locale Locale
     */
    this.getAnalyticsReportingMetadata = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/metadata', 
        'GET', 
        {  }, 
        { 'pageNumber': opts['pageNumber'],'pageSize': opts['pageSize'],'locale': opts['locale'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a reporting metadata.
     * 
     * @param {String} reportId Report ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale Locale
     */
    this.getAnalyticsReportingReportIdMetadata = function(reportId, opts) { 
      opts = opts || {};

      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw "Missing the required parameter 'reportId' when calling getAnalyticsReportingReportIdMetadata";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/{reportId}/metadata', 
        'GET', 
        { 'reportId': reportId }, 
        { 'locale': opts['locale'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a list of report formats
     * Get a list of report formats.
     */
    this.getAnalyticsReportingReportformats = function() { 


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/reportformats', 
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
     * Get a scheduled report job.
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.getAnalyticsReportingSchedule = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getAnalyticsReportingSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}', 
        'GET', 
        { 'scheduleId': scheduleId }, 
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
     * Get list of completed scheduled report jobs.
     * 
     * @param {String} scheduleId Schedule ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber  (default to 1)
     * @param {Number} opts.pageSize  (default to 25)
     */
    this.getAnalyticsReportingScheduleHistory = function(scheduleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getAnalyticsReportingScheduleHistory";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}/history', 
        'GET', 
        { 'scheduleId': scheduleId }, 
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
     * Get most recently completed scheduled report job.
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.getAnalyticsReportingScheduleHistoryLatest = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getAnalyticsReportingScheduleHistoryLatest";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}/history/latest', 
        'GET', 
        { 'scheduleId': scheduleId }, 
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
     * A completed scheduled report job
     * A completed scheduled report job.
     * @param {String} runId Run ID
     * @param {String} scheduleId Schedule ID
     */
    this.getAnalyticsReportingScheduleHistoryRunId = function(runId, scheduleId) { 

      // verify the required parameter 'runId' is set
      if (runId === undefined || runId === null) {
        throw "Missing the required parameter 'runId' when calling getAnalyticsReportingScheduleHistoryRunId";
      }

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getAnalyticsReportingScheduleHistoryRunId";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}', 
        'GET', 
        { 'runId': runId,'scheduleId': scheduleId }, 
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
     * Get a list of scheduled report jobs
     * Get a list of scheduled report jobs.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageNumber Page number (default to 1)
     * @param {Number} opts.pageSize Page size (default to 25)
     */
    this.getAnalyticsReportingSchedules = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules', 
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
     * Get a list of report time periods.
     * 
     */
    this.getAnalyticsReportingTimeperiods = function() { 


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/timeperiods', 
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
     * Index conversation properties
     * 
     * @param {String} conversationId conversationId
     * @param {Object} body request
     */
    this.postAnalyticsConversationDetailsProperties = function(conversationId, body) { 

      // verify the required parameter 'conversationId' is set
      if (conversationId === undefined || conversationId === null) {
        throw "Missing the required parameter 'conversationId' when calling postAnalyticsConversationDetailsProperties";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationDetailsProperties";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/{conversationId}/details/properties', 
        'POST', 
        { 'conversationId': conversationId }, 
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
     * Query for conversation aggregates
     * 
     * @param {Object} body query
     */
    this.postAnalyticsConversationsAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationsAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/aggregates/query', 
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
     * Query for conversation details
     * 
     * @param {Object} body query
     */
    this.postAnalyticsConversationsDetailsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsConversationsDetailsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/conversations/details/query', 
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
     * Query for evaluation aggregates
     * 
     * @param {Object} body query
     */
    this.postAnalyticsEvaluationsAggregatesQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsEvaluationsAggregatesQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/evaluations/aggregates/query', 
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
     * Query for queue observations
     * 
     * @param {Object} body query
     */
    this.postAnalyticsQueuesObservationsQuery = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsQueuesObservationsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/queues/observations/query', 
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
     * Generate a view export request
     * 
     * @param {Object} body ReportingExportJobRequest
     */
    this.postAnalyticsReportingExports = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsReportingExports";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/exports', 
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
     * Place a scheduled report immediately into the reporting queue
     * 
     * @param {String} scheduleId Schedule ID
     */
    this.postAnalyticsReportingScheduleRunreport = function(scheduleId) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling postAnalyticsReportingScheduleRunreport";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}/runreport', 
        'POST', 
        { 'scheduleId': scheduleId }, 
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
     * Create a scheduled report job
     * Create a scheduled report job.
     * @param {Object} body ReportSchedule
     */
    this.postAnalyticsReportingSchedules = function(body) { 

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postAnalyticsReportingSchedules";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules', 
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
     * Query for user aggregates
     * 
     * @param {Object} body query
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
     * @param {Object} body query
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
     * @param {Object} body query
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
     * Update a scheduled report job.
     * 
     * @param {String} scheduleId Schedule ID
     * @param {Object} body ReportSchedule
     */
    this.putAnalyticsReportingSchedule = function(scheduleId, body) { 

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling putAnalyticsReportingSchedule";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling putAnalyticsReportingSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/analytics/reporting/schedules/{scheduleId}', 
        'PUT', 
        { 'scheduleId': scheduleId }, 
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
