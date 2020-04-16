import ApiClient from '../ApiClient.js';


class WorkforceManagementApi {
	/**
	 * WorkforceManagement service.
	 * @module purecloud-platform-client-v2/api/WorkforceManagementApi
	 * @version 77.0.0
	 */

	/**
	 * Constructs a new WorkforceManagementApi. 
	 * @alias module:purecloud-platform-client-v2/api/WorkforceManagementApi
	 * @class
	 * @param {module:purecloud-platform-client-v2/ApiClient} apiClient Optional API client implementation to use,
	 * default to {@link module:purecloud-platform-client-v2/ApiClient#instance} if unspecified.
	 */
	constructor(apiClient) {
		this.apiClient = apiClient || ApiClient.instance;
	}


	/**
	 * Delete management unit
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 */
	deleteWorkforcemanagementManagementunit(muId) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling deleteWorkforcemanagementManagementunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}', 
			'DELETE', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Deletes an activity code
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} acId The ID of the activity code to delete
	 */
	deleteWorkforcemanagementManagementunitActivitycode(muId, acId) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling deleteWorkforcemanagementManagementunitActivitycode';
		}
		// verify the required parameter 'acId' is set
		if (acId === undefined || acId === null) {
			throw 'Missing the required parameter "acId" when calling deleteWorkforcemanagementManagementunitActivitycode';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}', 
			'DELETE', 
			{ 'muId': muId,'acId': acId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Cancel a schedule run
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} runId The ID of the schedule run
	 */
	deleteWorkforcemanagementManagementunitSchedulingRun(managementUnitId, runId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling deleteWorkforcemanagementManagementunitSchedulingRun';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null) {
			throw 'Missing the required parameter "runId" when calling deleteWorkforcemanagementManagementunitSchedulingRun';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}', 
			'DELETE', 
			{ 'managementUnitId': managementUnitId,'runId': runId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Delete a service goal group
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} serviceGoalGroupId The ID of the service goal group to delete
	 */
	deleteWorkforcemanagementManagementunitServicegoalgroup(managementUnitId, serviceGoalGroupId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling deleteWorkforcemanagementManagementunitServicegoalgroup';
		}
		// verify the required parameter 'serviceGoalGroupId' is set
		if (serviceGoalGroupId === undefined || serviceGoalGroupId === null) {
			throw 'Missing the required parameter "serviceGoalGroupId" when calling deleteWorkforcemanagementManagementunitServicegoalgroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}', 
			'DELETE', 
			{ 'managementUnitId': managementUnitId,'serviceGoalGroupId': serviceGoalGroupId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Delete a schedule
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {String} scheduleId The ID of theschedule to delete
	 */
	deleteWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling deleteWorkforcemanagementManagementunitWeekSchedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling deleteWorkforcemanagementManagementunitWeekSchedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling deleteWorkforcemanagementManagementunitWeekSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}', 
			'DELETE', 
			{ 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Delete a short term forecast
	 * Must not be tied to any schedules
	 * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
	 * @param {String} forecastId The ID of the forecast
	 */
	deleteWorkforcemanagementManagementunitWeekShorttermforecast(managementUnitId, weekDateId, forecastId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling deleteWorkforcemanagementManagementunitWeekShorttermforecast';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling deleteWorkforcemanagementManagementunitWeekShorttermforecast';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null) {
			throw 'Missing the required parameter "forecastId" when calling deleteWorkforcemanagementManagementunitWeekShorttermforecast';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}', 
			'DELETE', 
			{ 'managementUnitId': managementUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Delete a work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to delete
	 */
	deleteWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling deleteWorkforcemanagementManagementunitWorkplan';
		}
		// verify the required parameter 'workPlanId' is set
		if (workPlanId === undefined || workPlanId === null) {
			throw 'Missing the required parameter "workPlanId" when calling deleteWorkforcemanagementManagementunitWorkplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}', 
			'DELETE', 
			{ 'managementUnitId': managementUnitId,'workPlanId': workPlanId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of UserScheduleAdherence records for the requested users
	 * 
	 * @param {Array.<String>} userId User Id(s) for which to fetch current schedule adherence information.  Min 1, Max of 100 userIds per request
	 */
	getWorkforcemanagementAdherence(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getWorkforcemanagementAdherence';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/adherence', 
			'GET', 
			{  }, 
			{ 'userId': this.apiClient.buildCollectionParam(userId, 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get status of the modeling job
	 * 
	 * @param {String} jobId The id of the modeling job
	 */
	getWorkforcemanagementAdhocmodelingjob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementAdhocmodelingjob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/adhocmodelingjobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get management unit
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand 
	 */
	getWorkforcemanagementManagementunit(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}', 
			'GET', 
			{ 'muId': muId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get an activity code
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} acId The ID of the activity code to fetch
	 */
	getWorkforcemanagementManagementunitActivitycode(muId, acId) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunitActivitycode';
		}
		// verify the required parameter 'acId' is set
		if (acId === undefined || acId === null) {
			throw 'Missing the required parameter "acId" when calling getWorkforcemanagementManagementunitActivitycode';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}', 
			'GET', 
			{ 'muId': muId,'acId': acId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get activity codes
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 */
	getWorkforcemanagementManagementunitActivitycodes(muId) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunitActivitycodes';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/activitycodes', 
			'GET', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get data for agent in the management unit
	 * 
	 * @param {String} managementUnitId The id of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} agentId The agent id
	 */
	getWorkforcemanagementManagementunitAgent(managementUnitId, agentId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitAgent';
		}
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null) {
			throw 'Missing the required parameter "agentId" when calling getWorkforcemanagementManagementunitAgent';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'agentId': agentId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get intraday queues for the given date
	 * 
	 * @param {String} muId The management unit ID of the management unit
	 * @param {String} _date yyyy-MM-dd date string interpreted in the configured management unit time zone
	 */
	getWorkforcemanagementManagementunitIntradayQueues(muId, _date) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunitIntradayQueues';
		}
		// verify the required parameter '_date' is set
		if (_date === undefined || _date === null) {
			throw 'Missing the required parameter "_date" when calling getWorkforcemanagementManagementunitIntradayQueues';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/intraday/queues', 
			'GET', 
			{ 'muId': muId }, 
			{ 'date': _date }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets the status for a specific scheduling run
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} runId The ID of the schedule run
	 */
	getWorkforcemanagementManagementunitSchedulingRun(managementUnitId, runId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitSchedulingRun';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null) {
			throw 'Missing the required parameter "runId" when calling getWorkforcemanagementManagementunitSchedulingRun';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'runId': runId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets the result of a specific scheduling run
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} runId The ID of the schedule run
	 */
	getWorkforcemanagementManagementunitSchedulingRunResult(managementUnitId, runId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitSchedulingRunResult';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null) {
			throw 'Missing the required parameter "runId" when calling getWorkforcemanagementManagementunitSchedulingRunResult';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}/result', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'runId': runId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the status of all the ongoing schedule runs
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 */
	getWorkforcemanagementManagementunitSchedulingRuns(managementUnitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitSchedulingRuns';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs', 
			'GET', 
			{ 'managementUnitId': managementUnitId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a service goal group
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} serviceGoalGroupId The ID of the service goal group to fetch
	 */
	getWorkforcemanagementManagementunitServicegoalgroup(managementUnitId, serviceGoalGroupId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitServicegoalgroup';
		}
		// verify the required parameter 'serviceGoalGroupId' is set
		if (serviceGoalGroupId === undefined || serviceGoalGroupId === null) {
			throw 'Missing the required parameter "serviceGoalGroupId" when calling getWorkforcemanagementManagementunitServicegoalgroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'serviceGoalGroupId': serviceGoalGroupId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get service goal groups
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 */
	getWorkforcemanagementManagementunitServicegoalgroups(managementUnitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitServicegoalgroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups', 
			'GET', 
			{ 'managementUnitId': managementUnitId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the settings for the requested management unit. Deprecated, use the GET management unit route instead
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 */
	getWorkforcemanagementManagementunitSettings(muId) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunitSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/settings', 
			'GET', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets a summary of all shift trades in the matched state
	 * 
	 * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 */
	getWorkforcemanagementManagementunitShifttradesMatched(muId) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunitShifttradesMatched';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/shifttrades/matched', 
			'GET', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets list of users available for whom you can send direct shift trade requests
	 * 
	 * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 */
	getWorkforcemanagementManagementunitShifttradesUsers(muId) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunitShifttradesUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/shifttrades/users', 
			'GET', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a time off request
	 * 
	 * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} userId The userId to whom the Time Off Request applies.
	 * @param {String} timeOffRequestId Time Off Request Id
	 */
	getWorkforcemanagementManagementunitUserTimeoffrequest(muId, userId, timeOffRequestId) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunitUserTimeoffrequest';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getWorkforcemanagementManagementunitUserTimeoffrequest';
		}
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null) {
			throw 'Missing the required parameter "timeOffRequestId" when calling getWorkforcemanagementManagementunitUserTimeoffrequest';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}', 
			'GET', 
			{ 'muId': muId,'userId': userId,'timeOffRequestId': timeOffRequestId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of time off requests for a given user
	 * 
	 * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} userId The userId to whom the Time Off Request applies.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.recentlyReviewed Limit results to requests that have been reviewed within the preceding 30 days (default to false)
	 */
	getWorkforcemanagementManagementunitUserTimeoffrequests(muId, userId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunitUserTimeoffrequests';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling getWorkforcemanagementManagementunitUserTimeoffrequests';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests', 
			'GET', 
			{ 'muId': muId,'userId': userId }, 
			{ 'recentlyReviewed': opts['recentlyReviewed'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get users in the management unit
	 * 
	 * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 */
	getWorkforcemanagementManagementunitUsers(muId) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunitUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/users', 
			'GET', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

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
	getWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWeekSchedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementManagementunitWeekSchedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling getWorkforcemanagementManagementunitWeekSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
			{ 'expand': opts['expand'],'forceDownloadService': opts['forceDownloadService'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get week schedule generation results
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {String} scheduleId The ID of the schedule to fetch generation results
	 */
	getWorkforcemanagementManagementunitWeekScheduleGenerationresults(managementUnitId, weekId, scheduleId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWeekScheduleGenerationresults';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementManagementunitWeekScheduleGenerationresults';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling getWorkforcemanagementManagementunitWeekScheduleGenerationresults';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of schedules in a week in management unit
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeOnlyPublished Return only published schedules
	 * @param {String} opts.earliestWeekDate The start date of the earliest week to query in yyyy-MM-dd format
	 * @param {String} opts.latestWeekDate The start date of the latest week to query in yyyy-MM-dd format
	 */
	getWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWeekSchedules';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementManagementunitWeekSchedules';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'weekId': weekId }, 
			{ 'includeOnlyPublished': opts['includeOnlyPublished'],'earliestWeekDate': opts['earliestWeekDate'],'latestWeekDate': opts['latestWeekDate'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the final result of a short term forecast calculation with modifications applied
	 * 
	 * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
	 * @param {String} forecastId The ID of the forecast
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 */
	getWorkforcemanagementManagementunitWeekShorttermforecastFinal(managementUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWeekShorttermforecastFinal';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementManagementunitWeekShorttermforecastFinal';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null) {
			throw 'Missing the required parameter "forecastId" when calling getWorkforcemanagementManagementunitWeekShorttermforecastFinal';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/final', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
			{ 'forceDownloadService': opts['forceDownloadService'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get short term forecasts
	 * Use \&quot;recent\&quot; for the `weekDateId` path parameter to fetch all forecasts for +/- 26 weeks from the current date
	 * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
	 */
	getWorkforcemanagementManagementunitWeekShorttermforecasts(managementUnitId, weekDateId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWeekShorttermforecasts';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementManagementunitWeekShorttermforecasts';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'weekDateId': weekDateId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to fetch
	 */
	getWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWorkplan';
		}
		// verify the required parameter 'workPlanId' is set
		if (workPlanId === undefined || workPlanId === null) {
			throw 'Missing the required parameter "workPlanId" when calling getWorkforcemanagementManagementunitWorkplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'workPlanId': workPlanId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get work plans
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand 
	 */
	getWorkforcemanagementManagementunitWorkplans(managementUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWorkplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans', 
			'GET', 
			{ 'managementUnitId': managementUnitId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

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
	getWorkforcemanagementManagementunits(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits', 
			'GET', 
			{  }, 
			{ 'pageSize': opts['pageSize'],'pageNumber': opts['pageNumber'],'expand': opts['expand'],'feature': opts['feature'],'divisionId': opts['divisionId'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get management units across divisions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionId The divisionIds to filter by. If omitted, will return all divisions
	 */
	getWorkforcemanagementManagementunitsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/divisionviews', 
			'GET', 
			{  }, 
			{ 'divisionId': this.apiClient.buildCollectionParam(opts['divisionId'], 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of notifications for the current user
	 * 
	 */
	getWorkforcemanagementNotifications() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/notifications', 
			'GET', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get status of the scheduling job
	 * 
	 * @param {String} jobId The id of the scheduling job
	 */
	getWorkforcemanagementSchedulingjob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null) {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementSchedulingjob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/schedulingjobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets all of my shift trades
	 * 
	 */
	getWorkforcemanagementShifttrades() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrades', 
			'GET', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a time off request for the current user
	 * 
	 * @param {String} timeOffRequestId Time Off Request Id
	 */
	getWorkforcemanagementTimeoffrequest(timeOffRequestId) { 
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null) {
			throw 'Missing the required parameter "timeOffRequestId" when calling getWorkforcemanagementTimeoffrequest';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}', 
			'GET', 
			{ 'timeOffRequestId': timeOffRequestId }, 
			{  }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a list of time off requests for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.recentlyReviewed Limit results to requests that have been reviewed within the preceding 30 days (default to false)
	 */
	getWorkforcemanagementTimeoffrequests(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests', 
			'GET', 
			{  }, 
			{ 'recentlyReviewed': opts['recentlyReviewed'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update the requested management unit
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementManagementunit(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling patchWorkforcemanagementManagementunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}', 
			'PATCH', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update an activity code
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} acId The ID of the activity code to update
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementManagementunitActivitycode(muId, acId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling patchWorkforcemanagementManagementunitActivitycode';
		}
		// verify the required parameter 'acId' is set
		if (acId === undefined || acId === null) {
			throw 'Missing the required parameter "acId" when calling patchWorkforcemanagementManagementunitActivitycode';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}', 
			'PATCH', 
			{ 'muId': muId,'acId': acId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Marks a specific scheduling run as applied, allowing a new rescheduling run to be started
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} runId The ID of the schedule run
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementManagementunitSchedulingRun(managementUnitId, runId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitSchedulingRun';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null) {
			throw 'Missing the required parameter "runId" when calling patchWorkforcemanagementManagementunitSchedulingRun';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'runId': runId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update a service goal group
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} serviceGoalGroupId The ID of the service goal group to update
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementManagementunitServicegoalgroup(managementUnitId, serviceGoalGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitServicegoalgroup';
		}
		// verify the required parameter 'serviceGoalGroupId' is set
		if (serviceGoalGroupId === undefined || serviceGoalGroupId === null) {
			throw 'Missing the required parameter "serviceGoalGroupId" when calling patchWorkforcemanagementManagementunitServicegoalgroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'serviceGoalGroupId': serviceGoalGroupId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update the settings for the requested management unit
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body config
	 */
	patchWorkforcemanagementManagementunitSettings(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling patchWorkforcemanagementManagementunitSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/settings', 
			'PATCH', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update a time off request
	 * 
	 * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} userId The id of the user the requested time off request belongs to
	 * @param {String} timeOffRequestId The id of the time off request to update
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementManagementunitUserTimeoffrequest(muId, userId, timeOffRequestId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling patchWorkforcemanagementManagementunitUserTimeoffrequest';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null) {
			throw 'Missing the required parameter "userId" when calling patchWorkforcemanagementManagementunitUserTimeoffrequest';
		}
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null) {
			throw 'Missing the required parameter "timeOffRequestId" when calling patchWorkforcemanagementManagementunitUserTimeoffrequest';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}', 
			'PATCH', 
			{ 'muId': muId,'userId': userId,'timeOffRequestId': timeOffRequestId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

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
	patchWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitWeekSchedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling patchWorkforcemanagementManagementunitWeekSchedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling patchWorkforcemanagementManagementunitWeekSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update a work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to update
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitWorkplan';
		}
		// verify the required parameter 'workPlanId' is set
		if (workPlanId === undefined || workPlanId === null) {
			throw 'Missing the required parameter "workPlanId" when calling patchWorkforcemanagementManagementunitWorkplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'workPlanId': workPlanId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Update a time off request for the current user
	 * 
	 * @param {String} timeOffRequestId Time Off Request Id
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementTimeoffrequest(timeOffRequestId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null) {
			throw 'Missing the required parameter "timeOffRequestId" when calling patchWorkforcemanagementTimeoffrequest';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}', 
			'PATCH', 
			{ 'timeOffRequestId': timeOffRequestId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Request a historical adherence report for users across management units
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementAdherenceHistorical(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/adherence/historical', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create a new activity code
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitActivitycodes(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling postWorkforcemanagementManagementunitActivitycodes';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/activitycodes', 
			'POST', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Query published schedules for given given time range for set of users
	 * 
	 * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 */
	postWorkforcemanagementManagementunitAgentschedulesSearch(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling postWorkforcemanagementManagementunitAgentschedulesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/agentschedules/search', 
			'POST', 
			{ 'muId': muId }, 
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Request a historical adherence report
	 * The maximum supported range for historical adherence queries is 31 days, or 7 days with includeExceptions = true
	 * @param {String} muId The management unit ID of the management unit
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitHistoricaladherencequery(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling postWorkforcemanagementManagementunitHistoricaladherencequery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/historicaladherencequery', 
			'POST', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get intraday data for the given date for the requested queueIds
	 * 
	 * @param {String} muId The management unit ID of the management unit
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitIntraday(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling postWorkforcemanagementManagementunitIntraday';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/intraday', 
			'POST', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Move the requested management unit to a new business unit
	 * Returns status 200 if the management unit is already in the requested business unit
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitMove(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling postWorkforcemanagementManagementunitMove';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/move', 
			'POST', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Query published schedules for given given time range for set of users
	 * 
	 * @param {String} muId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitSchedulesSearch(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling postWorkforcemanagementManagementunitSchedulesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/schedules/search', 
			'POST', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create a new service goal group
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitServicegoalgroups(managementUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitServicegoalgroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups', 
			'POST', 
			{ 'managementUnitId': managementUnitId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create a new time off request
	 * 
	 * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitTimeoffrequests(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling postWorkforcemanagementManagementunitTimeoffrequests';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests', 
			'POST', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets a list of time off requests from lookup ids
	 * 
	 * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/fetchdetails', 
			'POST', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets the lookup ids to fetch the specified set of requests
	 * 
	 * @param {String} muId The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitTimeoffrequestsQuery(muId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling postWorkforcemanagementManagementunitTimeoffrequestsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/query', 
			'POST', 
			{ 'muId': muId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

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
	postWorkforcemanagementManagementunitWeekScheduleCopy(managementUnitId, weekId, scheduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekScheduleCopy';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementManagementunitWeekScheduleCopy';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling postWorkforcemanagementManagementunitWeekScheduleCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Start a scheduling run to compute the reschedule. When the scheduling run finishes, a client can get the reschedule changes and then the client can apply them to the schedule, save the schedule, and mark the scheduling run as applied
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {String} scheduleId The ID of the schedule to re-optimize
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitWeekScheduleReschedule(managementUnitId, weekId, scheduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekScheduleReschedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementManagementunitWeekScheduleReschedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling postWorkforcemanagementManagementunitWeekScheduleReschedule';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

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
	postWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekSchedules';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementManagementunitWeekSchedules';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'weekId': weekId }, 
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Generate a week schedule
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitWeekSchedulesGenerate(managementUnitId, weekId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekSchedulesGenerate';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementManagementunitWeekSchedulesGenerate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/generate', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'weekId': weekId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Partial upload of user schedules where activity count is greater than 17500
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitWeekSchedulesPartialupload(managementUnitId, weekId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekSchedulesPartialupload';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementManagementunitWeekSchedulesPartialupload';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/partialupload', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'weekId': weekId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

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
	postWorkforcemanagementManagementunitWeekShorttermforecastCopy(managementUnitId, weekDateId, forecastId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastCopy';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastCopy';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null) {
			throw 'Missing the required parameter "forecastId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastCopy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWeekShorttermforecastCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
			{ 'forceAsync': opts['forceAsync'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Import a short term forecast
	 * 
	 * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	postWorkforcemanagementManagementunitWeekShorttermforecasts(managementUnitId, weekDateId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShorttermforecasts';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShorttermforecasts';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWeekShorttermforecasts';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'weekDateId': weekDateId }, 
			{ 'forceAsync': opts['forceAsync'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Generate a short term forecast
	 * 
	 * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate(managementUnitId, weekDateId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/generate', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'weekDateId': weekDateId }, 
			{ 'forceAsync': opts['forceAsync'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Import a short term forecast
	 * 
	 * @param {String} managementUnitId The management unit ID of the management unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload(managementUnitId, weekDateId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/partialupload', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'weekDateId': weekDateId }, 
			{  }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create a copy of work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to create a copy
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitWorkplanCopy(managementUnitId, workPlanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWorkplanCopy';
		}
		// verify the required parameter 'workPlanId' is set
		if (workPlanId === undefined || workPlanId === null) {
			throw 'Missing the required parameter "workPlanId" when calling postWorkforcemanagementManagementunitWorkplanCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'workPlanId': workPlanId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create a new work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunitWorkplans(managementUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWorkplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans', 
			'POST', 
			{ 'managementUnitId': managementUnitId }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Add a management unit
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementManagementunits(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Mark a list of notifications as read or unread
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementNotificationsUpdate(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/notifications/update', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get published schedule for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementSchedules(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/schedules', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Create a time off request for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementTimeoffrequests(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests', 
			'POST', 
			{  }, 
			{  }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

}


export default WorkforceManagementApi;