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
   * @version 32.1.0
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
     * Delete management unit
     * 
     * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     */
    this.deleteWorkforcemanagementManagementunit = function(muId) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling deleteWorkforcemanagementManagementunit";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}', 
        'DELETE', 
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
     * Deletes an activity code
     * 
     * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} acId The ID of the activity code to delete
     */
    this.deleteWorkforcemanagementManagementunitActivitycode = function(muId, acId) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling deleteWorkforcemanagementManagementunitActivitycode";
      }

      // verify the required parameter 'acId' is set
      if (acId === undefined || acId === null) {
        throw "Missing the required parameter 'acId' when calling deleteWorkforcemanagementManagementunitActivitycode";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}', 
        'DELETE', 
        { 'muId': muId,'acId': acId }, 
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
     * Cancel a schedule run
     * 
     * @param {String} managementUnitId The ID of the management unit.
     * @param {String} runId The ID of the schedule run
     */
    this.deleteWorkforcemanagementManagementunitSchedulingRun = function(managementUnitId, runId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling deleteWorkforcemanagementManagementunitSchedulingRun";
      }

      // verify the required parameter 'runId' is set
      if (runId === undefined || runId === null) {
        throw "Missing the required parameter 'runId' when calling deleteWorkforcemanagementManagementunitSchedulingRun";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}', 
        'DELETE', 
        { 'managementUnitId': managementUnitId,'runId': runId }, 
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
     * Delete a service goal group
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} serviceGoalGroupId The ID of the service goal group to delete
     */
    this.deleteWorkforcemanagementManagementunitServicegoalgroup = function(managementUnitId, serviceGoalGroupId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling deleteWorkforcemanagementManagementunitServicegoalgroup";
      }

      // verify the required parameter 'serviceGoalGroupId' is set
      if (serviceGoalGroupId === undefined || serviceGoalGroupId === null) {
        throw "Missing the required parameter 'serviceGoalGroupId' when calling deleteWorkforcemanagementManagementunitServicegoalgroup";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}', 
        'DELETE', 
        { 'managementUnitId': managementUnitId,'serviceGoalGroupId': serviceGoalGroupId }, 
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
     * Delete a schedule
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
     * @param {String} scheduleId The ID of theschedule to delete
     */
    this.deleteWorkforcemanagementManagementunitWeekSchedule = function(managementUnitId, weekId, scheduleId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling deleteWorkforcemanagementManagementunitWeekSchedule";
      }

      // verify the required parameter 'weekId' is set
      if (weekId === undefined || weekId === null) {
        throw "Missing the required parameter 'weekId' when calling deleteWorkforcemanagementManagementunitWeekSchedule";
      }

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling deleteWorkforcemanagementManagementunitWeekSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}', 
        'DELETE', 
        { 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
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
     * Delete a short term forecast
     * Must not be tied to any schedules
     * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
     * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
     * @param {String} forecastId The ID of the forecast
     */
    this.deleteWorkforcemanagementManagementunitWeekShorttermforecast = function(managementUnitId, weekDateId, forecastId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling deleteWorkforcemanagementManagementunitWeekShorttermforecast";
      }

      // verify the required parameter 'weekDateId' is set
      if (weekDateId === undefined || weekDateId === null) {
        throw "Missing the required parameter 'weekDateId' when calling deleteWorkforcemanagementManagementunitWeekShorttermforecast";
      }

      // verify the required parameter 'forecastId' is set
      if (forecastId === undefined || forecastId === null) {
        throw "Missing the required parameter 'forecastId' when calling deleteWorkforcemanagementManagementunitWeekShorttermforecast";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}', 
        'DELETE', 
        { 'managementUnitId': managementUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
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
     * Delete a work plan
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} workPlanId The ID of the work plan to delete
     */
    this.deleteWorkforcemanagementManagementunitWorkplan = function(managementUnitId, workPlanId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling deleteWorkforcemanagementManagementunitWorkplan";
      }

      // verify the required parameter 'workPlanId' is set
      if (workPlanId === undefined || workPlanId === null) {
        throw "Missing the required parameter 'workPlanId' when calling deleteWorkforcemanagementManagementunitWorkplan";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}', 
        'DELETE', 
        { 'managementUnitId': managementUnitId,'workPlanId': workPlanId }, 
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
     * Get management unit
     * 
     * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand 
     */
    this.getWorkforcemanagementManagementunit = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunit";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}', 
        'GET', 
        { 'muId': muId }, 
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
     * Get an activity code
     * 
     * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} acId The ID of the activity code to fetch
     */
    this.getWorkforcemanagementManagementunitActivitycode = function(muId, acId) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitActivitycode";
      }

      // verify the required parameter 'acId' is set
      if (acId === undefined || acId === null) {
        throw "Missing the required parameter 'acId' when calling getWorkforcemanagementManagementunitActivitycode";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}', 
        'GET', 
        { 'muId': muId,'acId': acId }, 
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
     * Get activity codes
     * 
     * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
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
     * Get data for agent in the management unit
     * 
     * @param {String} managementUnitId The id of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} agentId The agent id
     */
    this.getWorkforcemanagementManagementunitAgent = function(managementUnitId, agentId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitAgent";
      }

      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw "Missing the required parameter 'agentId' when calling getWorkforcemanagementManagementunitAgent";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}', 
        'GET', 
        { 'managementUnitId': managementUnitId,'agentId': agentId }, 
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
     * @param {String} muId The management unit ID of the management unit
     * @param {String} _date yyyy-MM-dd date string interpreted in the configured management unit time zone
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
     * Get the status of all the ongoing schedule runs
     * 
     * @param {String} managementUnitId The ID of the management unit.
     */
    this.getWorkforcemanagementManagementunitSchedulingRuns = function(managementUnitId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitSchedulingRuns";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs', 
        'GET', 
        { 'managementUnitId': managementUnitId }, 
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
     * Get a service goal group
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} serviceGoalGroupId The ID of the service goal group to fetch
     */
    this.getWorkforcemanagementManagementunitServicegoalgroup = function(managementUnitId, serviceGoalGroupId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitServicegoalgroup";
      }

      // verify the required parameter 'serviceGoalGroupId' is set
      if (serviceGoalGroupId === undefined || serviceGoalGroupId === null) {
        throw "Missing the required parameter 'serviceGoalGroupId' when calling getWorkforcemanagementManagementunitServicegoalgroup";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}', 
        'GET', 
        { 'managementUnitId': managementUnitId,'serviceGoalGroupId': serviceGoalGroupId }, 
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
     * Get service goal groups
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     */
    this.getWorkforcemanagementManagementunitServicegoalgroups = function(managementUnitId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitServicegoalgroups";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups', 
        'GET', 
        { 'managementUnitId': managementUnitId }, 
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
     * Get the settings for the requested management unit
     * 
     * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     */
    this.getWorkforcemanagementManagementunitSettings = function(muId) { 

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling getWorkforcemanagementManagementunitSettings";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/settings', 
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
     * Get a time off request
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
     * Get a list of time off requests for a given user
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
     * Get users in the management unit
     * 
     * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
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
     * Get a week schedule
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
     * @param {String} scheduleId The ID of the schedule to fetch
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand Which fields, if any, to expand
     * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
     */
    this.getWorkforcemanagementManagementunitWeekSchedule = function(managementUnitId, weekId, scheduleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitWeekSchedule";
      }

      // verify the required parameter 'weekId' is set
      if (weekId === undefined || weekId === null) {
        throw "Missing the required parameter 'weekId' when calling getWorkforcemanagementManagementunitWeekSchedule";
      }

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getWorkforcemanagementManagementunitWeekSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}', 
        'GET', 
        { 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
        { 'expand': opts['expand'],'forceDownloadService': opts['forceDownloadService'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get week schedule generation results
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
     * @param {String} scheduleId The ID of the schedule to fetch generation results
     */
    this.getWorkforcemanagementManagementunitWeekScheduleGenerationresults = function(managementUnitId, weekId, scheduleId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitWeekScheduleGenerationresults";
      }

      // verify the required parameter 'weekId' is set
      if (weekId === undefined || weekId === null) {
        throw "Missing the required parameter 'weekId' when calling getWorkforcemanagementManagementunitWeekScheduleGenerationresults";
      }

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling getWorkforcemanagementManagementunitWeekScheduleGenerationresults";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults', 
        'GET', 
        { 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
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
     * Get the list of schedules in a week in management unit
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
     */
    this.getWorkforcemanagementManagementunitWeekSchedules = function(managementUnitId, weekId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitWeekSchedules";
      }

      // verify the required parameter 'weekId' is set
      if (weekId === undefined || weekId === null) {
        throw "Missing the required parameter 'weekId' when calling getWorkforcemanagementManagementunitWeekSchedules";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules', 
        'GET', 
        { 'managementUnitId': managementUnitId,'weekId': weekId }, 
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
     * Get the final result of a short term forecast calculation with modifications applied
     * 
     * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
     * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
     * @param {String} forecastId The ID of the forecast
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
     */
    this.getWorkforcemanagementManagementunitWeekShorttermforecastFinal = function(managementUnitId, weekDateId, forecastId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitWeekShorttermforecastFinal";
      }

      // verify the required parameter 'weekDateId' is set
      if (weekDateId === undefined || weekDateId === null) {
        throw "Missing the required parameter 'weekDateId' when calling getWorkforcemanagementManagementunitWeekShorttermforecastFinal";
      }

      // verify the required parameter 'forecastId' is set
      if (forecastId === undefined || forecastId === null) {
        throw "Missing the required parameter 'forecastId' when calling getWorkforcemanagementManagementunitWeekShorttermforecastFinal";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/final', 
        'GET', 
        { 'managementUnitId': managementUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
        { 'forceDownloadService': opts['forceDownloadService'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get short term forecasts
     * Use \&quot;recent\&quot; for the `weekDateId` path parameter to fetch all forecasts for +/- 26 weeks from the current date
     * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
     * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
     */
    this.getWorkforcemanagementManagementunitWeekShorttermforecasts = function(managementUnitId, weekDateId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitWeekShorttermforecasts";
      }

      // verify the required parameter 'weekDateId' is set
      if (weekDateId === undefined || weekDateId === null) {
        throw "Missing the required parameter 'weekDateId' when calling getWorkforcemanagementManagementunitWeekShorttermforecasts";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts', 
        'GET', 
        { 'managementUnitId': managementUnitId,'weekDateId': weekDateId }, 
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
     * Get a work plan
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} workPlanId The ID of the work plan to fetch
     */
    this.getWorkforcemanagementManagementunitWorkplan = function(managementUnitId, workPlanId) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitWorkplan";
      }

      // verify the required parameter 'workPlanId' is set
      if (workPlanId === undefined || workPlanId === null) {
        throw "Missing the required parameter 'workPlanId' when calling getWorkforcemanagementManagementunitWorkplan";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}', 
        'GET', 
        { 'managementUnitId': managementUnitId,'workPlanId': workPlanId }, 
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
     * Get work plans
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.expand 
     */
    this.getWorkforcemanagementManagementunitWorkplans = function(managementUnitId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling getWorkforcemanagementManagementunitWorkplans";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans', 
        'GET', 
        { 'managementUnitId': managementUnitId }, 
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
     * Get management units
     * 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize 
     * @param {Number} opts.pageNumber 
     * @param {Object} opts.expand 
     * @param {Object} opts.feature 
     * @param {String} opts.divisionId 
     */
    this.getWorkforcemanagementManagementunits = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits', 
        'GET', 
        {  }, 
        { 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'feature': opts['feature'],'divisionId': opts['divisionId'] }, 
        {  }, 
        {  }, 
        null, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Get a time off request for the current user
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
     * Update an activity code
     * 
     * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} acId The ID of the activity code to update
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.patchWorkforcemanagementManagementunitActivitycode = function(muId, acId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling patchWorkforcemanagementManagementunitActivitycode";
      }

      // verify the required parameter 'acId' is set
      if (acId === undefined || acId === null) {
        throw "Missing the required parameter 'acId' when calling patchWorkforcemanagementManagementunitActivitycode";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}', 
        'PATCH', 
        { 'muId': muId,'acId': acId }, 
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
     * Update a service goal group
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} serviceGoalGroupId The ID of the service goal group to update
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.patchWorkforcemanagementManagementunitServicegoalgroup = function(managementUnitId, serviceGoalGroupId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling patchWorkforcemanagementManagementunitServicegoalgroup";
      }

      // verify the required parameter 'serviceGoalGroupId' is set
      if (serviceGoalGroupId === undefined || serviceGoalGroupId === null) {
        throw "Missing the required parameter 'serviceGoalGroupId' when calling patchWorkforcemanagementManagementunitServicegoalgroup";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}', 
        'PATCH', 
        { 'managementUnitId': managementUnitId,'serviceGoalGroupId': serviceGoalGroupId }, 
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
     * Patch the settings for the requested management unit
     * 
     * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body config
     */
    this.patchWorkforcemanagementManagementunitSettings = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling patchWorkforcemanagementManagementunitSettings";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/settings', 
        'PATCH', 
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
     * Update a time off request
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} userId The id of the user the requested time off request belongs to
     * @param {String} timeOffRequestId The id of the time off request to update
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.patchWorkforcemanagementManagementunitUserTimeoffrequest = function(muId, userId, timeOffRequestId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling patchWorkforcemanagementManagementunitUserTimeoffrequest";
      }

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw "Missing the required parameter 'userId' when calling patchWorkforcemanagementManagementunitUserTimeoffrequest";
      }

      // verify the required parameter 'timeOffRequestId' is set
      if (timeOffRequestId === undefined || timeOffRequestId === null) {
        throw "Missing the required parameter 'timeOffRequestId' when calling patchWorkforcemanagementManagementunitUserTimeoffrequest";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}', 
        'PATCH', 
        { 'muId': muId,'userId': userId,'timeOffRequestId': timeOffRequestId }, 
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
     * Update a week schedule
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
     * @param {String} scheduleId The ID of the schedule to update. Use partial uploads of user schedules if activity count in schedule is greater than 17500
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
     * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
     * @param {Object} opts.body body
     */
    this.patchWorkforcemanagementManagementunitWeekSchedule = function(managementUnitId, weekId, scheduleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling patchWorkforcemanagementManagementunitWeekSchedule";
      }

      // verify the required parameter 'weekId' is set
      if (weekId === undefined || weekId === null) {
        throw "Missing the required parameter 'weekId' when calling patchWorkforcemanagementManagementunitWeekSchedule";
      }

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling patchWorkforcemanagementManagementunitWeekSchedule";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}', 
        'PATCH', 
        { 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
        { 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Update a work plan
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} workPlanId The ID of the work plan to update
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.patchWorkforcemanagementManagementunitWorkplan = function(managementUnitId, workPlanId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling patchWorkforcemanagementManagementunitWorkplan";
      }

      // verify the required parameter 'workPlanId' is set
      if (workPlanId === undefined || workPlanId === null) {
        throw "Missing the required parameter 'workPlanId' when calling patchWorkforcemanagementManagementunitWorkplan";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}', 
        'PATCH', 
        { 'managementUnitId': managementUnitId,'workPlanId': workPlanId }, 
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
     * Update a time off request for the current user
     * 
     * @param {String} timeOffRequestId Time Off Request Id
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
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
     * Request a historical adherence report for users across management units
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementAdherenceHistorical = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/adherence/historical', 
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


    /**
     * Create a new activity code
     * 
     * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitActivitycodes = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling postWorkforcemanagementManagementunitActivitycodes";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/activitycodes', 
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
     * Request a historical adherence report
     * The maximum supported range for historical adherence queries is 31 days, or 7 days with includeExceptions = true
     * @param {String} muId The management unit ID of the management unit
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitHistoricaladherencequery = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling postWorkforcemanagementManagementunitHistoricaladherencequery";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/historicaladherencequery', 
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
     * Get intraday data for the given date for the requested queueIds
     * 
     * @param {String} muId The management unit ID of the management unit
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
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
     * Query published schedules for given given time range for set of users
     * 
     * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
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
     * Create a new service goal group
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitServicegoalgroups = function(managementUnitId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitServicegoalgroups";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups', 
        'POST', 
        { 'managementUnitId': managementUnitId }, 
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
     * Create a new time off request
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitTimeoffrequests = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling postWorkforcemanagementManagementunitTimeoffrequests";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests', 
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
     * Gets a list of time off requests from lookup ids
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/fetchdetails', 
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
     * Gets the lookup ids to fetch the specified set of requests
     * 
     * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitTimeoffrequestsQuery = function(muId, opts) { 
      opts = opts || {};

      // verify the required parameter 'muId' is set
      if (muId === undefined || muId === null) {
        throw "Missing the required parameter 'muId' when calling postWorkforcemanagementManagementunitTimeoffrequestsQuery";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/query', 
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
     * Copy a week schedule
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
     * @param {String} scheduleId The ID of the schedule to copy from
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
     * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitWeekScheduleCopy = function(managementUnitId, weekId, scheduleId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitWeekScheduleCopy";
      }

      // verify the required parameter 'weekId' is set
      if (weekId === undefined || weekId === null) {
        throw "Missing the required parameter 'weekId' when calling postWorkforcemanagementManagementunitWeekScheduleCopy";
      }

      // verify the required parameter 'scheduleId' is set
      if (scheduleId === undefined || scheduleId === null) {
        throw "Missing the required parameter 'scheduleId' when calling postWorkforcemanagementManagementunitWeekScheduleCopy";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy', 
        'POST', 
        { 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
        { 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Add a schedule for a week in management unit using imported data. Use partial uploads of user schedules if activity count in schedule is greater than 17500
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
     * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitWeekSchedules = function(managementUnitId, weekId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitWeekSchedules";
      }

      // verify the required parameter 'weekId' is set
      if (weekId === undefined || weekId === null) {
        throw "Missing the required parameter 'weekId' when calling postWorkforcemanagementManagementunitWeekSchedules";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules', 
        'POST', 
        { 'managementUnitId': managementUnitId,'weekId': weekId }, 
        { 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] }, 
        {  }, 
        {  }, 
        opts['body'], 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Generate a week schedule
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitWeekSchedulesGenerate = function(managementUnitId, weekId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitWeekSchedulesGenerate";
      }

      // verify the required parameter 'weekId' is set
      if (weekId === undefined || weekId === null) {
        throw "Missing the required parameter 'weekId' when calling postWorkforcemanagementManagementunitWeekSchedulesGenerate";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/generate', 
        'POST', 
        { 'managementUnitId': managementUnitId,'weekId': weekId }, 
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
     * Partial upload of user schedules where activity count is greater than 17500
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitWeekSchedulesPartialupload = function(managementUnitId, weekId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitWeekSchedulesPartialupload";
      }

      // verify the required parameter 'weekId' is set
      if (weekId === undefined || weekId === null) {
        throw "Missing the required parameter 'weekId' when calling postWorkforcemanagementManagementunitWeekSchedulesPartialupload";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/partialupload', 
        'POST', 
        { 'managementUnitId': managementUnitId,'weekId': weekId }, 
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
     * Copy a short term forecast
     * 
     * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
     * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
     * @param {String} forecastId The ID of the forecast to copy
     * @param {Object} body body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
     */
    this.postWorkforcemanagementManagementunitWeekShorttermforecastCopy = function(managementUnitId, weekDateId, forecastId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitWeekShorttermforecastCopy";
      }

      // verify the required parameter 'weekDateId' is set
      if (weekDateId === undefined || weekDateId === null) {
        throw "Missing the required parameter 'weekDateId' when calling postWorkforcemanagementManagementunitWeekShorttermforecastCopy";
      }

      // verify the required parameter 'forecastId' is set
      if (forecastId === undefined || forecastId === null) {
        throw "Missing the required parameter 'forecastId' when calling postWorkforcemanagementManagementunitWeekShorttermforecastCopy";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postWorkforcemanagementManagementunitWeekShorttermforecastCopy";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy', 
        'POST', 
        { 'managementUnitId': managementUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
        { 'forceAsync': opts['forceAsync'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Import a short term forecast
     * 
     * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
     * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
     * @param {Object} body body
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
     */
    this.postWorkforcemanagementManagementunitWeekShorttermforecasts = function(managementUnitId, weekDateId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitWeekShorttermforecasts";
      }

      // verify the required parameter 'weekDateId' is set
      if (weekDateId === undefined || weekDateId === null) {
        throw "Missing the required parameter 'weekDateId' when calling postWorkforcemanagementManagementunitWeekShorttermforecasts";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postWorkforcemanagementManagementunitWeekShorttermforecasts";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts', 
        'POST', 
        { 'managementUnitId': managementUnitId,'weekDateId': weekDateId }, 
        { 'forceAsync': opts['forceAsync'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Generate a short term forecast
     * 
     * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
     * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
     */
    this.postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate = function(managementUnitId, weekDateId, body, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate";
      }

      // verify the required parameter 'weekDateId' is set
      if (weekDateId === undefined || weekDateId === null) {
        throw "Missing the required parameter 'weekDateId' when calling postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/generate', 
        'POST', 
        { 'managementUnitId': managementUnitId,'weekDateId': weekDateId }, 
        { 'forceAsync': opts['forceAsync'] }, 
        {  }, 
        {  }, 
        body, 
        ['PureCloud Auth'], 
        ['application/json'], 
        ['application/json']
      );
    };


    /**
     * Import a short term forecast
     * 
     * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
     * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
     * @param {Object} body body
     */
    this.postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload = function(managementUnitId, weekDateId, body) { 

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload";
      }

      // verify the required parameter 'weekDateId' is set
      if (weekDateId === undefined || weekDateId === null) {
        throw "Missing the required parameter 'weekDateId' when calling postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload";
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw "Missing the required parameter 'body' when calling postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/partialupload', 
        'POST', 
        { 'managementUnitId': managementUnitId,'weekDateId': weekDateId }, 
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
     * Create a copy of work plan
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {String} workPlanId The ID of the work plan to create a copy
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitWorkplanCopy = function(managementUnitId, workPlanId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitWorkplanCopy";
      }

      // verify the required parameter 'workPlanId' is set
      if (workPlanId === undefined || workPlanId === null) {
        throw "Missing the required parameter 'workPlanId' when calling postWorkforcemanagementManagementunitWorkplanCopy";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy', 
        'POST', 
        { 'managementUnitId': managementUnitId,'workPlanId': workPlanId }, 
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
     * Create a new work plan
     * 
     * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunitWorkplans = function(managementUnitId, opts) { 
      opts = opts || {};

      // verify the required parameter 'managementUnitId' is set
      if (managementUnitId === undefined || managementUnitId === null) {
        throw "Missing the required parameter 'managementUnitId' when calling postWorkforcemanagementManagementunitWorkplans";
      }


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans', 
        'POST', 
        { 'managementUnitId': managementUnitId }, 
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
     * Add a management unit
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementManagementunits = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/managementunits', 
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


    /**
     * Get published schedule for the current user
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
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


    /**
     * Create a time off request for the current user
     * 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body body
     */
    this.postWorkforcemanagementTimeoffrequests = function(opts) { 
      opts = opts || {};


      return this.apiClient.callApi(
        '/api/v2/workforcemanagement/timeoffrequests', 
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
