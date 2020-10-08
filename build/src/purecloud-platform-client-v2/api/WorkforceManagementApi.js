import ApiClient from '../ApiClient.js';


class WorkforceManagementApi {
	/**
	 * WorkforceManagement service.
	 * @module purecloud-platform-client-v2/api/WorkforceManagementApi
	 * @version 94.0.0
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
	 * Delete business unit
	 * A business unit cannot be deleted if it contains one or more management units
	 * @param {String} businessUnitId The ID of the business unit, or &#39;mine&#39; for the business unit of the logged-in user.
	 */
	deleteWorkforcemanagementBusinessunit(businessUnitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId }, 
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
	 * @param {String} buId The ID of the business unit, or &#39;mine&#39; for the business unit of the logged-in user.
	 * @param {String} acId The ID of the activity code to delete
	 */
	deleteWorkforcemanagementBusinessunitActivitycode(buId, acId) { 
		// verify the required parameter 'buId' is set
		if (buId === undefined || buId === null) {
			throw 'Missing the required parameter "buId" when calling deleteWorkforcemanagementBusinessunitActivitycode';
		}
		// verify the required parameter 'acId' is set
		if (acId === undefined || acId === null) {
			throw 'Missing the required parameter "acId" when calling deleteWorkforcemanagementBusinessunitActivitycode';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{buId}/activitycodes/{acId}', 
			'DELETE', 
			{ 'buId': buId,'acId': acId }, 
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
	 * Deletes the planning group
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} planningGroupId The ID of a planning group to delete
	 */
	deleteWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitPlanninggroup';
		}
		// verify the required parameter 'planningGroupId' is set
		if (planningGroupId === undefined || planningGroupId === null) {
			throw 'Missing the required parameter "planningGroupId" when calling deleteWorkforcemanagementBusinessunitPlanninggroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'planningGroupId': planningGroupId }, 
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
	 * Cancel a scheduling run
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} runId The ID of the schedule run
	 */
	deleteWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitSchedulingRun';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null) {
			throw 'Missing the required parameter "runId" when calling deleteWorkforcemanagementBusinessunitSchedulingRun';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'runId': runId }, 
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
	 * Delete a service goal template
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} serviceGoalTemplateId The ID of the service goal template to delete
	 */
	deleteWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitServicegoaltemplate';
		}
		// verify the required parameter 'serviceGoalTemplateId' is set
		if (serviceGoalTemplateId === undefined || serviceGoalTemplateId === null) {
			throw 'Missing the required parameter "serviceGoalTemplateId" when calling deleteWorkforcemanagementBusinessunitServicegoaltemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'serviceGoalTemplateId': serviceGoalTemplateId }, 
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
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 */
	deleteWorkforcemanagementBusinessunitWeekSchedule(businessUnitId, weekId, scheduleId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitWeekSchedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling deleteWorkforcemanagementBusinessunitWeekSchedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling deleteWorkforcemanagementBusinessunitWeekSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
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
	 * @param {String} businessUnitId The business unit ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 */
	deleteWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitWeekShorttermforecast';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling deleteWorkforcemanagementBusinessunitWeekShorttermforecast';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null) {
			throw 'Missing the required parameter "forecastId" when calling deleteWorkforcemanagementBusinessunitWeekShorttermforecast';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
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
	 * Deprecated/Gone: Use the new business unit activity code resources
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The ID of the management unit.
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
	 * Gone. Replaced with service goal templates and planning groups under business units
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} serviceGoalGroupId Gone. The ID of the service goal group to delete
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {String} scheduleId Gone/deprecated. The ID of the schedule to delete
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
	 * Gone. Use equivalent business unit resource instead
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The id of the management unit.
	 * @param {String} weekDateId (Deprecated/gone): The week start date of the forecast in yyyy-MM-dd format
	 * @param {String} forecastId (Gone/Deprecated): The ID of the forecast
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
	 * Get business unit
	 * Expanding \&quot;settings\&quot; will retrieve all settings.  All other expands will retrieve only the requested settings field(s).
	 * @param {String} businessUnitId The ID of the business unit, or &#39;mine&#39; for the business unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand 
	 */
	getWorkforcemanagementBusinessunit(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId }, 
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
	 * @param {String} buId The ID of the business unit, or &#39;mine&#39; for the business unit of the logged-in user.
	 * @param {String} acId The ID of the activity code to fetch
	 */
	getWorkforcemanagementBusinessunitActivitycode(buId, acId) { 
		// verify the required parameter 'buId' is set
		if (buId === undefined || buId === null) {
			throw 'Missing the required parameter "buId" when calling getWorkforcemanagementBusinessunitActivitycode';
		}
		// verify the required parameter 'acId' is set
		if (acId === undefined || acId === null) {
			throw 'Missing the required parameter "acId" when calling getWorkforcemanagementBusinessunitActivitycode';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{buId}/activitycodes/{acId}', 
			'GET', 
			{ 'buId': buId,'acId': acId }, 
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
	 * @param {String} buId The ID of the business unit, or &#39;mine&#39; for the business unit of the logged-in user.
	 */
	getWorkforcemanagementBusinessunitActivitycodes(buId) { 
		// verify the required parameter 'buId' is set
		if (buId === undefined || buId === null) {
			throw 'Missing the required parameter "buId" when calling getWorkforcemanagementBusinessunitActivitycodes';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{buId}/activitycodes', 
			'GET', 
			{ 'buId': buId }, 
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
	 * Get intraday planning groups for the given date
	 * 
	 * @param {String} businessUnitId The business unit ID of the business unit
	 * @param {String} _date yyyy-MM-dd date string interpreted in the configured business unit time zone. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getWorkforcemanagementBusinessunitIntradayPlanninggroups(businessUnitId, _date) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitIntradayPlanninggroups';
		}
		// verify the required parameter '_date' is set
		if (_date === undefined || _date === null) {
			throw 'Missing the required parameter "_date" when calling getWorkforcemanagementBusinessunitIntradayPlanninggroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday/planninggroups', 
			'GET', 
			{ 'businessUnitId': businessUnitId }, 
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
	 * Get all authorized management units in the business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or &#39;mine&#39; for the business unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.feature 
	 * @param {String} opts.divisionId 
	 */
	getWorkforcemanagementBusinessunitManagementunits(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitManagementunits';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/managementunits', 
			'GET', 
			{ 'businessUnitId': businessUnitId }, 
			{ 'feature': opts['feature'],'divisionId': opts['divisionId'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a planning group
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} planningGroupId The ID of a planning group to fetch
	 */
	getWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitPlanninggroup';
		}
		// verify the required parameter 'planningGroupId' is set
		if (planningGroupId === undefined || planningGroupId === null) {
			throw 'Missing the required parameter "planningGroupId" when calling getWorkforcemanagementBusinessunitPlanninggroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'planningGroupId': planningGroupId }, 
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
	 * Gets list of planning groups
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 */
	getWorkforcemanagementBusinessunitPlanninggroups(businessUnitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitPlanninggroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups', 
			'GET', 
			{ 'businessUnitId': businessUnitId }, 
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
	 * Get a scheduling run
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} runId The ID of the schedule run
	 */
	getWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulingRun';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null) {
			throw 'Missing the required parameter "runId" when calling getWorkforcemanagementBusinessunitSchedulingRun';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'runId': runId }, 
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
	 * Get the result of a rescheduling operation
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} runId The ID of the schedule run
	 * @param {Array.<String>} managementUnitIds The IDs of the management units for which to fetch the reschedule results
	 * @param {Array.<String>} expand The fields to expand. Omitting will return an empty response
	 */
	getWorkforcemanagementBusinessunitSchedulingRunResult(businessUnitId, runId, managementUnitIds, expand) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulingRunResult';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null) {
			throw 'Missing the required parameter "runId" when calling getWorkforcemanagementBusinessunitSchedulingRunResult';
		}
		// verify the required parameter 'managementUnitIds' is set
		if (managementUnitIds === undefined || managementUnitIds === null) {
			throw 'Missing the required parameter "managementUnitIds" when calling getWorkforcemanagementBusinessunitSchedulingRunResult';
		}
		// verify the required parameter 'expand' is set
		if (expand === undefined || expand === null) {
			throw 'Missing the required parameter "expand" when calling getWorkforcemanagementBusinessunitSchedulingRunResult';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}/result', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'runId': runId }, 
			{ 'managementUnitIds': this.apiClient.buildCollectionParam(managementUnitIds, 'multi'),'expand': this.apiClient.buildCollectionParam(expand, 'multi') }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of scheduling runs
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 */
	getWorkforcemanagementBusinessunitSchedulingRuns(businessUnitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulingRuns';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs', 
			'GET', 
			{ 'businessUnitId': businessUnitId }, 
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
	 * Get a service goal template
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} serviceGoalTemplateId The ID of a service goal template to fetch
	 */
	getWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitServicegoaltemplate';
		}
		// verify the required parameter 'serviceGoalTemplateId' is set
		if (serviceGoalTemplateId === undefined || serviceGoalTemplateId === null) {
			throw 'Missing the required parameter "serviceGoalTemplateId" when calling getWorkforcemanagementBusinessunitServicegoaltemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'serviceGoalTemplateId': serviceGoalTemplateId }, 
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
	 * Gets list of service goal templates
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 */
	getWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitServicegoaltemplates';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates', 
			'GET', 
			{ 'businessUnitId': businessUnitId }, 
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
	 * Get the metadata for the schedule, describing which management units and agents are in the scheduleSchedule data can then be loaded with the query route
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand expand
	 */
	getWorkforcemanagementBusinessunitWeekSchedule(businessUnitId, weekId, scheduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekSchedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementBusinessunitWeekSchedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling getWorkforcemanagementBusinessunitWeekSchedule';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
			{ 'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the generation results for a generated schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 */
	getWorkforcemanagementBusinessunitWeekScheduleGenerationresults(businessUnitId, weekId, scheduleId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekScheduleGenerationresults';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementBusinessunitWeekScheduleGenerationresults';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling getWorkforcemanagementBusinessunitWeekScheduleGenerationresults';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
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
	 * Get the headcount forecast by planning group for the schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownload Whether to force the result to come via download url.  For testing purposes only
	 */
	getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast(businessUnitId, weekId, scheduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/headcountforecast', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
			{ 'forceDownload': opts['forceDownload'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get the list of week schedules for the specified week
	 * Use \&quot;recent\&quot; for the `weekId` path parameter to fetch all forecasts for +/- 26 weeks from the current date. Response will include any schedule which spans the specified week
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format, or &#39;recent&#39; to get recent schedules
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeOnlyPublished includeOnlyPublished
	 * @param {Object} opts.expand expand
	 */
	getWorkforcemanagementBusinessunitWeekSchedules(businessUnitId, weekId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekSchedules';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementBusinessunitWeekSchedules';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId }, 
			{ 'includeOnlyPublished': opts['includeOnlyPublished'],'expand': opts['expand'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get a short term forecast
	 * 
	 * @param {String} businessUnitId The business unit ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand 
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecast';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecast';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null) {
			throw 'Missing the required parameter "forecastId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecast';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
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
	 * Get the result of a short term forecast calculation
	 * Includes modifications unless you pass the doNotApplyModifications query parameter
	 * @param {String} businessUnitId The business unit ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.weekNumber The week number to fetch (for multi-week forecasts)
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecastData(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastData';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastData';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null) {
			throw 'Missing the required parameter "forecastId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastData';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/data', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
			{ 'weekNumber': opts['weekNumber'],'forceDownloadService': opts['forceDownloadService'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets the forecast generation results
	 * 
	 * @param {String} businessUnitId The business unit ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults(businessUnitId, weekDateId, forecastId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null) {
			throw 'Missing the required parameter "forecastId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/generationresults', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
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
	 * Gets the forecast planning group snapshot
	 * 
	 * @param {String} businessUnitId The business unit ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups(businessUnitId, weekDateId, forecastId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null) {
			throw 'Missing the required parameter "forecastId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/planninggroups', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
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
	 * Get short term forecasts
	 * Use \&quot;recent\&quot; for the `weekDateId` path parameter to fetch all forecasts for +/- 26 weeks from the current date. Response will include any forecast which spans the specified week
	 * @param {String} businessUnitId The business unit ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format or &#39;recent&#39; to fetch recent forecasts
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecasts(businessUnitId, weekDateId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecasts';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecasts';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId }, 
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
	 * Get business units
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.feature 
	 * @param {String} opts.divisionId 
	 */
	getWorkforcemanagementBusinessunits(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits', 
			'GET', 
			{  }, 
			{ 'feature': opts['feature'],'divisionId': opts['divisionId'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Get business units across divisions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionId The divisionIds to filter by. If omitted, will return business units in all divisions
	 */
	getWorkforcemanagementBusinessunitsDivisionviews(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/divisionviews', 
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
	 * Get a list of user schedule adherence records for the requested management unit
	 * 
	 * @param {String} managementUnitId The management unit ID of the management unit.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 */
	getWorkforcemanagementManagementunitAdherence(managementUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitAdherence';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/adherence', 
			'GET', 
			{ 'managementUnitId': managementUnitId }, 
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
	 * Get data for agent in the management unit
	 * 
	 * @param {String} managementUnitId The id of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} agentId The agent id
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.excludeCapabilities Excludes all capabilities of the agent such as queues, languages, and skills
	 */
	getWorkforcemanagementManagementunitAgent(managementUnitId, agentId, opts) { 
		opts = opts || {};
		
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
			{ 'excludeCapabilities': opts['excludeCapabilities'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gets all the shift trades for a given agent
	 * 
	 * @param {String} managementUnitId The id of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} agentId The agent id
	 */
	getWorkforcemanagementManagementunitAgentShifttrades(managementUnitId, agentId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitAgentShifttrades';
		}
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null) {
			throw 'Missing the required parameter "agentId" when calling getWorkforcemanagementManagementunitAgentShifttrades';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}/shifttrades', 
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
	 * Gone.  Moved under business units
	 * 
	 * @param {String} muId The management unit ID of the management unit
	 */
	getWorkforcemanagementManagementunitIntradayQueues(muId) { 
		// verify the required parameter 'muId' is set
		if (muId === undefined || muId === null) {
			throw 'Missing the required parameter "muId" when calling getWorkforcemanagementManagementunitIntradayQueues';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{muId}/intraday/queues', 
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The ID of the management unit.
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The ID of the management unit.
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The ID of the management unit.
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
	 * Gone. Replaced with service goal templates and planning groups under business units
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} serviceGoalGroupId Gone.  The ID of the service goal group to fetch
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
	 * Gone. Replaced with service goal templates and planning groups under business units
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
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
	 * Gone. Get management unit settings via expand parameters on the GET management unit
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
	 * Deprecated.  Use the equivalent business unit resource instead. Get a week schedule
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {String} scheduleId Gone/deprecated. The ID of the schedule to fetch generation results
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
	 * Deprecated.  Use the equivalent business unit resource instead. Get the list of schedules in a week in management unit
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
	 * Gets all the shift trades for a given week
	 * 
	 * @param {String} managementUnitId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekDateId The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.evaluateMatches Whether to evaluate the matches for violations (default to true)
	 */
	getWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWeekShifttrades';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementManagementunitWeekShifttrades';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'weekDateId': weekDateId }, 
			{ 'evaluateMatches': opts['evaluateMatches'] }, 
			{  }, 
			{  }, 
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gone. Use equivalent business unit resource instead
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The id of the management unit.
	 * @param {String} weekDateId (Deprecated/gone): The week start date of the forecast in yyyy-MM-dd format
	 * @param {String} forecastId (Gone/Deprecated): The ID of the forecast
	 */
	getWorkforcemanagementManagementunitWeekShorttermforecastFinal(managementUnitId, weekDateId, forecastId) { 
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
	 * Gone. Use equivalent business unit resource instead
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The id of the management unit.
	 * @param {String} weekDateId (Deprecated/gone): The week start date of the forecast in yyyy-MM-dd format
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
	 * Update business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or &#39;mine&#39; for the business unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementBusinessunit(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId }, 
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
	 * @param {String} buId The ID of the business unit, or &#39;mine&#39; for the business unit of the logged-in user.
	 * @param {String} acId The ID of the activity code to update
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementBusinessunitActivitycode(buId, acId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'buId' is set
		if (buId === undefined || buId === null) {
			throw 'Missing the required parameter "buId" when calling patchWorkforcemanagementBusinessunitActivitycode';
		}
		// verify the required parameter 'acId' is set
		if (acId === undefined || acId === null) {
			throw 'Missing the required parameter "acId" when calling patchWorkforcemanagementBusinessunitActivitycode';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{buId}/activitycodes/{acId}', 
			'PATCH', 
			{ 'buId': buId,'acId': acId }, 
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
	 * Updates the planning group
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} planningGroupId The ID of a planning group to update
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitPlanninggroup';
		}
		// verify the required parameter 'planningGroupId' is set
		if (planningGroupId === undefined || planningGroupId === null) {
			throw 'Missing the required parameter "planningGroupId" when calling patchWorkforcemanagementBusinessunitPlanninggroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'planningGroupId': planningGroupId }, 
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
	 * Mark a schedule run as applied
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} runId The ID of the schedule run
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitSchedulingRun';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null) {
			throw 'Missing the required parameter "runId" when calling patchWorkforcemanagementBusinessunitSchedulingRun';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'runId': runId }, 
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
	 * Updates a service goal template
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} serviceGoalTemplateId The ID of a service goal template to update
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	patchWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitServicegoaltemplate';
		}
		// verify the required parameter 'serviceGoalTemplateId' is set
		if (serviceGoalTemplateId === undefined || serviceGoalTemplateId === null) {
			throw 'Missing the required parameter "serviceGoalTemplateId" when calling patchWorkforcemanagementBusinessunitServicegoaltemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'serviceGoalTemplateId': serviceGoalTemplateId }, 
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
	 * Deprecated/Gone: Use the new business unit activity code resources
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The ID of the management unit.
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
	 * Gone. Replaced with service goal templates and planning groups under business units
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} serviceGoalGroupId Gone. The ID of the service goal group to update
	 */
	patchWorkforcemanagementManagementunitServicegoalgroup(managementUnitId, serviceGoalGroupId) { 
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
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gone. Update settings by PATCHing the management unit
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 */
	patchWorkforcemanagementManagementunitSettings(muId) { 
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
			null, 
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {String} scheduleId Gone/deprecated. The ID of the schedule to update. Use partial uploads of user schedules if activity count in schedule is greater than 17500
	 */
	patchWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId) { 
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
	 * Updates a shift trade. This route can only be called by the initiating agent
	 * 
	 * @param {String} managementUnitId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekDateId The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {String} tradeId The ID of the shift trade to update
	 */
	patchWorkforcemanagementManagementunitWeekShifttrade(managementUnitId, weekDateId, body, tradeId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitWeekShifttrade';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling patchWorkforcemanagementManagementunitWeekShifttrade';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitWeekShifttrade';
		}
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null) {
			throw 'Missing the required parameter "tradeId" when calling patchWorkforcemanagementManagementunitWeekShifttrade';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'weekDateId': weekDateId,'tradeId': tradeId }, 
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
	 * Get published schedule for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementAgentschedulesMine(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agentschedules/mine', 
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
	 * @param {String} buId The ID of the business unit, or &#39;mine&#39; for the business unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementBusinessunitActivitycodes(buId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'buId' is set
		if (buId === undefined || buId === null) {
			throw 'Missing the required parameter "buId" when calling postWorkforcemanagementBusinessunitActivitycodes';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{buId}/activitycodes', 
			'POST', 
			{ 'buId': buId }, 
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
	 * Search published schedules
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitAgentschedulesSearch(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitAgentschedulesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/agentschedules/search', 
			'POST', 
			{ 'businessUnitId': businessUnitId }, 
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
	 * Get intraday data for the given date for the requested planningGroupIds
	 * 
	 * @param {String} businessUnitId The business unit ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementBusinessunitIntraday(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitIntraday';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday', 
			'POST', 
			{ 'businessUnitId': businessUnitId }, 
			{ 'forceAsync': opts['forceAsync'] }, 
			{  }, 
			{  }, 
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Adds a new planning group
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementBusinessunitPlanninggroups(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitPlanninggroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups', 
			'POST', 
			{ 'businessUnitId': businessUnitId }, 
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
	 * Adds a new service goal template
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitServicegoaltemplates';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates', 
			'POST', 
			{ 'businessUnitId': businessUnitId }, 
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
	 * Loads agent schedule data from the schedule. Used in combination with the metadata route
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery(businessUnitId, weekId, scheduleId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/agentschedules/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] }, 
			{  }, 
			{  }, 
			body, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Copy a schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule to copy
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekScheduleCopy(businessUnitId, weekId, scheduleId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekScheduleCopy';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekScheduleCopy';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling postWorkforcemanagementBusinessunitWeekScheduleCopy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekScheduleCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
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
	 * Start a rescheduling run
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekScheduleReschedule(businessUnitId, weekId, scheduleId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekScheduleReschedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekScheduleReschedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null) {
			throw 'Missing the required parameter "scheduleId" when calling postWorkforcemanagementBusinessunitWeekScheduleReschedule';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekScheduleReschedule';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId,'scheduleId': scheduleId }, 
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
	 * Create a blank schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekSchedules(businessUnitId, weekId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekSchedules';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekSchedules';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekSchedules';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId }, 
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
	 * Generate a schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekSchedulesGenerate(businessUnitId, weekId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekSchedulesGenerate';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekSchedulesGenerate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekSchedulesGenerate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/generate', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId }, 
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
	 * Copy a short term forecast
	 * 
	 * @param {String} businessUnitId The business unit ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast to copy
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitWeekShorttermforecastCopy(businessUnitId, weekDateId, forecastId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastCopy';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastCopy';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null) {
			throw 'Missing the required parameter "forecastId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastCopy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId,'forecastId': forecastId }, 
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
	 * @param {String} businessUnitId The business unit ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate(businessUnitId, weekDateId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null) {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/generate', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId }, 
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
	 * Add a new business unit
	 * It may take a minute or two for a new business unit to be available for api operations
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 */
	postWorkforcemanagementBusinessunits(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits', 
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
	 * Deprecated/Gone: Use the new business unit activity code resources
	 * 
	 * @param {String} muId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 */
	postWorkforcemanagementManagementunitActivitycodes(muId) { 
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
			null, 
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
	 * Gone.  Moved under business units
	 * 
	 * @param {String} muId The management unit ID of the management unit
	 */
	postWorkforcemanagementManagementunitIntraday(muId) { 
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
			null, 
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
	 * Gone. Replaced with service goal templates and planning groups under business units
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 */
	postWorkforcemanagementManagementunitServicegoalgroups(managementUnitId) { 
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
			null, 
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
	 * Gone.  All data is now returned in the query route
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {String} scheduleId Gone/deprecated. The ID of the schedule to copy from
	 */
	postWorkforcemanagementManagementunitWeekScheduleCopy(managementUnitId, weekId, scheduleId) { 
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {String} scheduleId Gone/deprecated. The ID of the schedule to re-optimize
	 */
	postWorkforcemanagementManagementunitWeekScheduleReschedule(managementUnitId, weekId, scheduleId) { 
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
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 */
	postWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId) { 
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
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 */
	postWorkforcemanagementManagementunitWeekSchedulesGenerate(managementUnitId, weekId) { 
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
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Gone.  Scheduling has moved under business units
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 */
	postWorkforcemanagementManagementunitWeekSchedulesPartialupload(managementUnitId, weekId) { 
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
			null, 
			['PureCloud OAuth'], 
			['application/json'], 
			['application/json']
		);
	}

	/**
	 * Matches a shift trade. This route can only be called by the receiving agent
	 * 
	 * @param {String} managementUnitId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekDateId The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {String} tradeId The ID of the shift trade to update
	 */
	postWorkforcemanagementManagementunitWeekShifttradeMatch(managementUnitId, weekDateId, body, tradeId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShifttradeMatch';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShifttradeMatch';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWeekShifttradeMatch';
		}
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null) {
			throw 'Missing the required parameter "tradeId" when calling postWorkforcemanagementManagementunitWeekShifttradeMatch';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'weekDateId': weekDateId,'tradeId': tradeId }, 
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
	 * Adds a shift trade
	 * 
	 * @param {String} managementUnitId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekDateId The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShifttrades';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShifttrades';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWeekShifttrades';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades', 
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
	 * Searches for potential shift trade matches for the current agent
	 * 
	 * @param {String} managementUnitId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekDateId The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitWeekShifttradesSearch(managementUnitId, weekDateId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShifttradesSearch';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShifttradesSearch';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWeekShifttradesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search', 
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
	 * Updates the state of a batch of shift trades
	 * Admin functionality is not supported with \&quot;mine\&quot;.
	 * @param {String} managementUnitId The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} weekDateId The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	postWorkforcemanagementManagementunitWeekShifttradesStateBulk(managementUnitId, weekDateId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShifttradesStateBulk';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShifttradesStateBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWeekShifttradesStateBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk', 
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
	 * Gone. Use equivalent business unit resource instead
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The id of the management unit.
	 * @param {String} weekDateId (Deprecated/gone): The week start date of the forecast in yyyy-MM-dd format
	 * @param {String} forecastId (Gone/Deprecated): The ID of the forecast
	 */
	postWorkforcemanagementManagementunitWeekShorttermforecastCopy(managementUnitId, weekDateId, forecastId) { 
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

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy', 
			'POST', 
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
	 * Gone. Use equivalent business unit resource instead
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The id of the management unit.
	 * @param {String} weekDateId (Deprecated/gone): The week start date of the forecast in yyyy-MM-dd format
	 */
	postWorkforcemanagementManagementunitWeekShorttermforecasts(managementUnitId, weekDateId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShorttermforecasts';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShorttermforecasts';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts', 
			'POST', 
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
	 * Gone. Use equivalent business unit resource instead
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The id of the management unit.
	 * @param {String} weekDateId (Deprecated/gone): The week start date of the forecast in yyyy-MM-dd format
	 */
	postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate(managementUnitId, weekDateId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/generate', 
			'POST', 
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
	 * Gone. Use equivalent business unit resource instead
	 * 
	 * @param {String} managementUnitId (Deprecated/gone): The id of the management unit.
	 * @param {String} weekDateId (Deprecated/gone): The week start date of the forecast in yyyy-MM-dd format
	 */
	postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload(managementUnitId, weekDateId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/partialupload', 
			'POST', 
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
	 * Validate Work Plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to validate. For new work plan, use the word &#39;new&#39; for the ID.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * @param {Array.<String>} opts.expand 
	 */
	postWorkforcemanagementManagementunitWorkplanValidate(managementUnitId, workPlanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null) {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWorkplanValidate';
		}
		// verify the required parameter 'workPlanId' is set
		if (workPlanId === undefined || workPlanId === null) {
			throw 'Missing the required parameter "workPlanId" when calling postWorkforcemanagementManagementunitWorkplanValidate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/validate', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'workPlanId': workPlanId }, 
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') }, 
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
	 * It may take a minute or two for a new management unit to be available for api operations
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