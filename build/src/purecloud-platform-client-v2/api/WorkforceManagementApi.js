import ApiClient from '../ApiClient.js';


class WorkforceManagementApi {
	/**
	 * WorkforceManagement service.
	 * @module purecloud-platform-client-v2/api/WorkforceManagementApi
	 * @version 225.0.0
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
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 */
	deleteWorkforcemanagementBusinessunit(businessUnitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
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
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {String} activityCodeId The ID of the activity code to delete
	 */
	deleteWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitActivitycode';
		}
		// verify the required parameter 'activityCodeId' is set
		if (activityCodeId === undefined || activityCodeId === null || activityCodeId === '') {
			throw 'Missing the required parameter "activityCodeId" when calling deleteWorkforcemanagementBusinessunitActivitycode';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'activityCodeId': activityCodeId },
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitPlanninggroup';
		}
		// verify the required parameter 'planningGroupId' is set
		if (planningGroupId === undefined || planningGroupId === null || planningGroupId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitSchedulingRun';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null || runId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitServicegoaltemplate';
		}
		// verify the required parameter 'serviceGoalTemplateId' is set
		if (serviceGoalTemplateId === undefined || serviceGoalTemplateId === null || serviceGoalTemplateId === '') {
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
	 * Deletes a staffing group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} staffingGroupId The ID of the staffing group to delete
	 */
	deleteWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitStaffinggroup';
		}
		// verify the required parameter 'staffingGroupId' is set
		if (staffingGroupId === undefined || staffingGroupId === null || staffingGroupId === '') {
			throw 'Missing the required parameter "staffingGroupId" when calling deleteWorkforcemanagementBusinessunitStaffinggroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'staffingGroupId': staffingGroupId },
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
	 * Deletes a time-off limit object
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffLimitId The ID of the time-off limit object to delete
	 */
	deleteWorkforcemanagementBusinessunitTimeofflimit(businessUnitId, timeOffLimitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitTimeofflimit';
		}
		// verify the required parameter 'timeOffLimitId' is set
		if (timeOffLimitId === undefined || timeOffLimitId === null || timeOffLimitId === '') {
			throw 'Missing the required parameter "timeOffLimitId" when calling deleteWorkforcemanagementBusinessunitTimeofflimit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'timeOffLimitId': timeOffLimitId },
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
	 * Deletes a time-off plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffPlanId The ID of the time-off plan to delete
	 */
	deleteWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitTimeoffplan';
		}
		// verify the required parameter 'timeOffPlanId' is set
		if (timeOffPlanId === undefined || timeOffPlanId === null || timeOffPlanId === '') {
			throw 'Missing the required parameter "timeOffPlanId" when calling deleteWorkforcemanagementBusinessunitTimeoffplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'timeOffPlanId': timeOffPlanId },
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitWeekSchedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling deleteWorkforcemanagementBusinessunitWeekSchedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
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
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 */
	deleteWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitWeekShorttermforecast';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling deleteWorkforcemanagementBusinessunitWeekShorttermforecast';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null || forecastId === '') {
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
	 * Delete a work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the work plan bid
	 */
	deleteWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitWorkplanbid';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling deleteWorkforcemanagementBusinessunitWorkplanbid';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
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
	 * Delete a bid group by bid group Id
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {String} bidGroupId Work Plan Bid Group id
	 */
	deleteWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitWorkplanbidGroup';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling deleteWorkforcemanagementBusinessunitWorkplanbidGroup';
		}
		// verify the required parameter 'bidGroupId' is set
		if (bidGroupId === undefined || bidGroupId === null || bidGroupId === '') {
			throw 'Missing the required parameter "bidGroupId" when calling deleteWorkforcemanagementBusinessunitWorkplanbidGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId,'bidGroupId': bidGroupId },
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
	 * Disable generated calendar link for the current user
	 * 
	 */
	deleteWorkforcemanagementCalendarUrlIcs() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/calendar/url/ics', 
			'DELETE', 
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
	 * Delete management unit
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 */
	deleteWorkforcemanagementManagementunit(managementUnitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling deleteWorkforcemanagementManagementunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}', 
			'DELETE', 
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
	 * Deletes a time off limit object
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} timeOffLimitId The ID of the time off limit object to delete
	 */
	deleteWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling deleteWorkforcemanagementManagementunitTimeofflimit';
		}
		// verify the required parameter 'timeOffLimitId' is set
		if (timeOffLimitId === undefined || timeOffLimitId === null || timeOffLimitId === '') {
			throw 'Missing the required parameter "timeOffLimitId" when calling deleteWorkforcemanagementManagementunitTimeofflimit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}', 
			'DELETE', 
			{ 'managementUnitId': managementUnitId,'timeOffLimitId': timeOffLimitId },
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
	 * Deletes a time off plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {String} timeOffPlanId The ID of the time off plan to delete
	 */
	deleteWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling deleteWorkforcemanagementManagementunitTimeoffplan';
		}
		// verify the required parameter 'timeOffPlanId' is set
		if (timeOffPlanId === undefined || timeOffPlanId === null || timeOffPlanId === '') {
			throw 'Missing the required parameter "timeOffPlanId" when calling deleteWorkforcemanagementManagementunitTimeoffplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId}', 
			'DELETE', 
			{ 'managementUnitId': managementUnitId,'timeOffPlanId': timeOffPlanId },
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
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to delete
	 */
	deleteWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling deleteWorkforcemanagementManagementunitWorkplan';
		}
		// verify the required parameter 'workPlanId' is set
		if (workPlanId === undefined || workPlanId === null || workPlanId === '') {
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
	 * Delete a work plan rotation
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanRotationId The ID of the work plan rotation to be deleted
	 */
	deleteWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling deleteWorkforcemanagementManagementunitWorkplanrotation';
		}
		// verify the required parameter 'workPlanRotationId' is set
		if (workPlanRotationId === undefined || workPlanRotationId === null || workPlanRotationId === '') {
			throw 'Missing the required parameter "workPlanRotationId" when calling deleteWorkforcemanagementManagementunitWorkplanrotation';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}', 
			'DELETE', 
			{ 'managementUnitId': managementUnitId,'workPlanRotationId': workPlanRotationId },
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
	 * Get an adherence explanation for the current user
	 * 
	 * @param {String} explanationId The ID of the explanation to update
	 */
	getWorkforcemanagementAdherenceExplanation(explanationId) { 
		// verify the required parameter 'explanationId' is set
		if (explanationId === undefined || explanationId === null || explanationId === '') {
			throw 'Missing the required parameter "explanationId" when calling getWorkforcemanagementAdherenceExplanation';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/adherence/explanations/{explanationId}', 
			'GET', 
			{ 'explanationId': explanationId },
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
	 * Query the status of an adherence explanation operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 */
	getWorkforcemanagementAdherenceExplanationsJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementAdherenceExplanationsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/adherence/explanations/jobs/{jobId}', 
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
	 * Request to fetch the status of the historical adherence bulk job. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId ID of the job to get
	 */
	getWorkforcemanagementAdherenceHistoricalBulkJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementAdherenceHistoricalBulkJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/adherence/historical/bulk/jobs/{jobId}', 
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
	 * Query the status of a historical adherence request operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId jobId
	 */
	getWorkforcemanagementAdherenceHistoricalJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementAdherenceHistoricalJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/adherence/historical/jobs/{jobId}', 
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
	 * Get an adherence explanation
	 * 
	 * @param {String} agentId The ID of the agent to query
	 * @param {String} explanationId The ID of the explanation to update
	 */
	getWorkforcemanagementAgentAdherenceExplanation(agentId, explanationId) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling getWorkforcemanagementAgentAdherenceExplanation';
		}
		// verify the required parameter 'explanationId' is set
		if (explanationId === undefined || explanationId === null || explanationId === '') {
			throw 'Missing the required parameter "explanationId" when calling getWorkforcemanagementAgentAdherenceExplanation';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/{explanationId}', 
			'GET', 
			{ 'agentId': agentId,'explanationId': explanationId },
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
	 * Get the management unit to which the agent belongs
	 * 
	 * @param {String} agentId The ID of the agent to look up
	 */
	getWorkforcemanagementAgentManagementunit(agentId) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling getWorkforcemanagementAgentManagementunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/{agentId}/managementunit', 
			'GET', 
			{ 'agentId': agentId },
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
	 * Get the management unit to which the currently logged in agent belongs
	 * 
	 */
	getWorkforcemanagementAgentsMeManagementunit() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/me/managementunit', 
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
	 * Query the status of an alternative shift offers operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 */
	getWorkforcemanagementAlternativeshiftsOffersJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementAlternativeshiftsOffersJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/offers/jobs/{jobId}', 
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
	 * Query the status of an alternative shift search offers operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 */
	getWorkforcemanagementAlternativeshiftsOffersSearchJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementAlternativeshiftsOffersSearchJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/offers/search/jobs/{jobId}', 
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
	 * Get alternative shifts settings from the current logged in agent’s business unit
	 * 
	 */
	getWorkforcemanagementAlternativeshiftsSettings() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/settings', 
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
	 * Get my alternative shift trade by trade ID
	 * 
	 * @param {String} tradeId The ID of the alternative shift trade
	 */
	getWorkforcemanagementAlternativeshiftsTrade(tradeId) { 
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling getWorkforcemanagementAlternativeshiftsTrade';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/trades/{tradeId}', 
			'GET', 
			{ 'tradeId': tradeId },
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
	 * Get a list of my alternative shifts trades
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	getWorkforcemanagementAlternativeshiftsTrades(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/trades', 
			'GET', 
			{  },
			{ 'forceAsync': opts['forceAsync'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query the status of an alternative shift trades operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 */
	getWorkforcemanagementAlternativeshiftsTradesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementAlternativeshiftsTradesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/trades/jobs/{jobId}', 
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
	 * Query the status of an alternative shift trade state operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 */
	getWorkforcemanagementAlternativeshiftsTradesStateJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementAlternativeshiftsTradesStateJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/trades/state/jobs/{jobId}', 
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
	 * Expanding "settings" will retrieve all settings.  All other expands will retrieve only the requested settings field(s).
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Include to access additional data on the business unit
	 */
	getWorkforcemanagementBusinessunit(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
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
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {String} activityCodeId The ID of the activity code to fetch
	 */
	getWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitActivitycode';
		}
		// verify the required parameter 'activityCodeId' is set
		if (activityCodeId === undefined || activityCodeId === null || activityCodeId === '') {
			throw 'Missing the required parameter "activityCodeId" when calling getWorkforcemanagementBusinessunitActivitycode';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'activityCodeId': activityCodeId },
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
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	getWorkforcemanagementBusinessunitActivitycodes(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitActivitycodes';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes', 
			'GET', 
			{ 'businessUnitId': businessUnitId },
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
	 * Get an activity plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} activityPlanId The ID of the activity plan to fetch
	 */
	getWorkforcemanagementBusinessunitActivityplan(businessUnitId, activityPlanId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitActivityplan';
		}
		// verify the required parameter 'activityPlanId' is set
		if (activityPlanId === undefined || activityPlanId === null || activityPlanId === '') {
			throw 'Missing the required parameter "activityPlanId" when calling getWorkforcemanagementBusinessunitActivityplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'activityPlanId': activityPlanId },
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
	 * Gets an activity plan run job
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} activityPlanId The ID of the activity plan associated with the run job
	 * @param {String} jobId The ID of the activity plan run job
	 */
	getWorkforcemanagementBusinessunitActivityplanRunsJob(businessUnitId, activityPlanId, jobId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitActivityplanRunsJob';
		}
		// verify the required parameter 'activityPlanId' is set
		if (activityPlanId === undefined || activityPlanId === null || activityPlanId === '') {
			throw 'Missing the required parameter "activityPlanId" when calling getWorkforcemanagementBusinessunitActivityplanRunsJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementBusinessunitActivityplanRunsJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/runs/jobs/{jobId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'activityPlanId': activityPlanId,'jobId': jobId },
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
	 * Get activity plans
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.state Optionally filter by activity plan state
	 */
	getWorkforcemanagementBusinessunitActivityplans(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitActivityplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans', 
			'GET', 
			{ 'businessUnitId': businessUnitId },
			{ 'state': opts['state'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets the latest job for all activity plans in the business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 */
	getWorkforcemanagementBusinessunitActivityplansJobs(businessUnitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitActivityplansJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/jobs', 
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
	 * Get alternative shifts settings for a business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 */
	getWorkforcemanagementBusinessunitAlternativeshiftsSettings(businessUnitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitAlternativeshiftsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/settings', 
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
	 * Get an alternative shifts trade in a business unit for a given trade ID
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} tradeId The ID of the alternative shift trade
	 */
	getWorkforcemanagementBusinessunitAlternativeshiftsTrade(businessUnitId, tradeId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitAlternativeshiftsTrade';
		}
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling getWorkforcemanagementBusinessunitAlternativeshiftsTrade';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/{tradeId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'tradeId': tradeId },
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
	 * Query the status of an alternative shift search trade operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} jobId The ID of the job
	 */
	getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob(businessUnitId, jobId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/search/jobs/{jobId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'jobId': jobId },
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
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} _date yyyy-MM-dd date string interpreted in the configured business unit time zone. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 */
	getWorkforcemanagementBusinessunitIntradayPlanninggroups(businessUnitId, _date) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
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
	 * Get the latest session for the business unit ID
	 * 
	 * @param {String} businessUnitId 
	 * getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession(businessUnitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session', 
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
	 * Get the session details for the session ID
	 * 
	 * @param {String} businessUnitId 
	 * @param {String} sessionId 
	 * getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId(businessUnitId, sessionId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId';
		}
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session/{sessionId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'sessionId': sessionId },
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
	 * Get the snapshot details for the snapshot ID
	 * 
	 * @param {String} businessUnitId 
	 * @param {String} sessionId 
	 * @param {String} snapshotId 
	 * getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId(businessUnitId, sessionId, snapshotId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId';
		}
		// verify the required parameter 'sessionId' is set
		if (sessionId === undefined || sessionId === null || sessionId === '') {
			throw 'Missing the required parameter "sessionId" when calling getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId';
		}
		// verify the required parameter 'snapshotId' is set
		if (snapshotId === undefined || snapshotId === null || snapshotId === '') {
			throw 'Missing the required parameter "snapshotId" when calling getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session/{sessionId}/snapshot/{snapshotId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'sessionId': sessionId,'snapshotId': snapshotId },
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
	 * Get all authorized management units in the business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.feature If specified, the list of management units for which the user is authorized to use the requested feature will be returned
	 * @param {String} opts.divisionId If specified, the list of management units belonging to the specified division will be returned
	 */
	getWorkforcemanagementBusinessunitManagementunits(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitPlanninggroup';
		}
		// verify the required parameter 'planningGroupId' is set
		if (planningGroupId === undefined || planningGroupId === null || planningGroupId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulingRun';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null || runId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulingRunResult';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null || runId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
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
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Include to access additional data on the service goal template
	 */
	getWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitServicegoaltemplate';
		}
		// verify the required parameter 'serviceGoalTemplateId' is set
		if (serviceGoalTemplateId === undefined || serviceGoalTemplateId === null || serviceGoalTemplateId === '') {
			throw 'Missing the required parameter "serviceGoalTemplateId" when calling getWorkforcemanagementBusinessunitServicegoaltemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'serviceGoalTemplateId': serviceGoalTemplateId },
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
	 * Gets list of service goal templates
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Include to access additional data on the service goal template
	 */
	getWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitServicegoaltemplates';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates', 
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
	 * Gets a staffing group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} staffingGroupId The ID of the staffing group to fetch
	 */
	getWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitStaffinggroup';
		}
		// verify the required parameter 'staffingGroupId' is set
		if (staffingGroupId === undefined || staffingGroupId === null || staffingGroupId === '') {
			throw 'Missing the required parameter "staffingGroupId" when calling getWorkforcemanagementBusinessunitStaffinggroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'staffingGroupId': staffingGroupId },
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
	 * Gets a list of staffing groups
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.managementUnitId The ID of the management unit to get management unit specific staffing groups
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	getWorkforcemanagementBusinessunitStaffinggroups(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitStaffinggroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups', 
			'GET', 
			{ 'businessUnitId': businessUnitId },
			{ 'managementUnitId': opts['managementUnitId'],'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets a time-off limit object
	 * Returns properties of time-off limit object, but not daily values
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffLimitId The ID of the time-off limit to fetch
	 */
	getWorkforcemanagementBusinessunitTimeofflimit(businessUnitId, timeOffLimitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitTimeofflimit';
		}
		// verify the required parameter 'timeOffLimitId' is set
		if (timeOffLimitId === undefined || timeOffLimitId === null || timeOffLimitId === '') {
			throw 'Missing the required parameter "timeOffLimitId" when calling getWorkforcemanagementBusinessunitTimeofflimit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'timeOffLimitId': timeOffLimitId },
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
	 * Gets a list of time-off limit objects
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.managementUnitId The ID of the management unit to get management unit specific time-off limit objects
	 */
	getWorkforcemanagementBusinessunitTimeofflimits(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitTimeofflimits';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits', 
			'GET', 
			{ 'businessUnitId': businessUnitId },
			{ 'managementUnitId': opts['managementUnitId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Gets a time-off plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffPlanId The ID of the time-off plan to fetch
	 */
	getWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitTimeoffplan';
		}
		// verify the required parameter 'timeOffPlanId' is set
		if (timeOffPlanId === undefined || timeOffPlanId === null || timeOffPlanId === '') {
			throw 'Missing the required parameter "timeOffPlanId" when calling getWorkforcemanagementBusinessunitTimeoffplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'timeOffPlanId': timeOffPlanId },
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
	 * Gets a list of time-off plans
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.managementUnitId The ID of the management unit to get management unit specific staffing groups
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	getWorkforcemanagementBusinessunitTimeoffplans(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitTimeoffplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans', 
			'GET', 
			{ 'businessUnitId': businessUnitId },
			{ 'managementUnitId': opts['managementUnitId'],'forceDownloadService': opts['forceDownloadService'] },
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekSchedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementBusinessunitWeekSchedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekScheduleGenerationresults';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementBusinessunitWeekScheduleGenerationresults';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
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
	 * Loads agent's schedule history.
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {String} agentId THe ID of the agent
	 */
	getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent(businessUnitId, weekId, scheduleId, agentId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
			throw 'Missing the required parameter "scheduleId" when calling getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent';
		}
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/history/agents/{agentId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId,'scheduleId': scheduleId,'agentId': agentId },
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
	 * Get the performance prediction for the associated schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the performance prediction belongs
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format
	 * @param {String} scheduleId The ID of the schedule the performance prediction belongs to
	 */
	getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions(businessUnitId, weekId, scheduleId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null || weekId === '') {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
			throw 'Missing the required parameter "scheduleId" when calling getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions', 
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
	 * Get recalculated performance prediction result
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the performance prediction belongs
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format
	 * @param {String} scheduleId The ID of the schedule the recalculation belongs to
	 * @param {String} recalculationId The ID of the recalculation request
	 */
	getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation(businessUnitId, weekId, scheduleId, recalculationId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null || weekId === '') {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
			throw 'Missing the required parameter "scheduleId" when calling getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation';
		}
		// verify the required parameter 'recalculationId' is set
		if (recalculationId === undefined || recalculationId === null || recalculationId === '') {
			throw 'Missing the required parameter "recalculationId" when calling getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/{recalculationId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekId': weekId,'scheduleId': scheduleId,'recalculationId': recalculationId },
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
	 * Get the list of week schedules for the specified week
	 * Use "recent" (without quotes) for the `weekId` path parameter to fetch all forecasts for +/- 26 weeks from the current date. Response will include any schedule which spans the specified week
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format, or 'recent' (without quotes) to get recent schedules
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeOnlyPublished includeOnlyPublished
	 * @param {Object} opts.expand expand
	 */
	getWorkforcemanagementBusinessunitWeekSchedules(businessUnitId, weekId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekSchedules';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null || weekId === '') {
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
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Include to access additional data on the forecast
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecast';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecast';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null || forecastId === '') {
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
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 * @param {Object} opts Optional parameters
	 * @param {Number} opts.weekNumber The week number to fetch (for multi-week forecasts)
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecastData(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastData';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastData';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null || forecastId === '') {
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
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults(businessUnitId, weekDateId, forecastId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null || forecastId === '') {
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
	 * Get the result of a long term forecast calculation
	 * Includes modifications unless you pass the doNotApplyModifications query parameter
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null || forecastId === '') {
			throw 'Missing the required parameter "forecastId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/longtermforecastdata', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId,'forecastId': forecastId },
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
	 * Gets the forecast planning group snapshot
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups(businessUnitId, weekDateId, forecastId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null || forecastId === '') {
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
	 * Get the staffing requirement by planning group for a forecast
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.weekNumbers The week numbers to fetch (for multi-week forecasts) staffing requirements. Returns all week data if the list is not specified
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null || forecastId === '') {
			throw 'Missing the required parameter "forecastId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/staffingrequirement', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId,'forecastId': forecastId },
			{ 'weekNumbers': this.apiClient.buildCollectionParam(opts['weekNumbers'], 'multi') },
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
	 * Use "recent" (without quotes) for the `weekDateId` path parameter to fetch all forecasts for +/- 26 weeks from the current date. Response will include any forecast which spans the specified week
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format or 'recent' (without quotes) to fetch recent forecasts
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecasts(businessUnitId, weekDateId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWeekShorttermforecasts';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null || weekDateId === '') {
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
	 * Get a work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The id of the workplanbid
	 */
	getWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWorkplanbid';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementBusinessunitWorkplanbid';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
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
	 * Get a bid group by bid group Id
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {String} bidGroupId Work Plan Bid Group id
	 */
	getWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWorkplanbidGroup';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementBusinessunitWorkplanbidGroup';
		}
		// verify the required parameter 'bidGroupId' is set
		if (bidGroupId === undefined || bidGroupId === null || bidGroupId === '') {
			throw 'Missing the required parameter "bidGroupId" when calling getWorkforcemanagementBusinessunitWorkplanbidGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId,'bidGroupId': bidGroupId },
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
	 * Gets the work plan preferences of all the agents in the work plan bid group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {String} bidGroupId The ID of the work plan bid group
	 */
	getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences(businessUnitId, bidId, bidGroupId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences';
		}
		// verify the required parameter 'bidGroupId' is set
		if (bidGroupId === undefined || bidGroupId === null || bidGroupId === '') {
			throw 'Missing the required parameter "bidGroupId" when calling getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}/preferences', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId,'bidGroupId': bidGroupId },
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
	 * Get summary of bid groups that belong to a work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 */
	getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary(businessUnitId, bidId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/summary', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
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
	 * Get list of work plan bids
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 */
	getWorkforcemanagementBusinessunitWorkplanbids(businessUnitId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitWorkplanbids';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids', 
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
	 * Get business units
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.feature If specified, the list of business units for which the user is authorized to use the requested feature will be returned
	 * @param {String} opts.divisionId If specified, the list of business units belonging to the specified division will be returned
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
	 * Get ics formatted calendar based on shareable link
	 * 
	 * @param {String} calendarId The id of the ics-formatted calendar
	 */
	getWorkforcemanagementCalendarDataIcs(calendarId) { 
		// verify the required parameter 'calendarId' is set
		if (calendarId === undefined || calendarId === null) {
			throw 'Missing the required parameter "calendarId" when calling getWorkforcemanagementCalendarDataIcs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/calendar/data/ics', 
			'GET', 
			{  },
			{ 'calendarId': calendarId },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['text/calendar']
		);
	}

	/**
	 * Get existing calendar link for the current user
	 * 
	 */
	getWorkforcemanagementCalendarUrlIcs() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/calendar/url/ics', 
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
	 * Retrieves delete job status for historical data imports associated with the job id
	 * 
	 * @param {String} jobId The job ID of the historical data delete request
	 */
	getWorkforcemanagementHistoricaldataBulkRemoveJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementHistoricaldataBulkRemoveJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/historicaldata/bulk/remove/jobs/{jobId}', 
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
	 * Retrieves all delete job status for historical data
	 * 
	 */
	getWorkforcemanagementHistoricaldataBulkRemoveJobs() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/historicaldata/bulk/remove/jobs', 
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
	 * Retrieves delete job status for historical data imports of the organization.
	 * Deprecated: Please use GET /workforcemanagement/historicaldata/bulk/remove/jobs instead.
	 * @deprecated
	 */
	getWorkforcemanagementHistoricaldataDeletejob() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/historicaldata/deletejob', 
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
	 * Retrieves status of the historical data imports of the organization
	 * 
	 */
	getWorkforcemanagementHistoricaldataImportstatus() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/historicaldata/importstatus', 
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
	 * Retrieves status of the historical data imports associated with job id
	 * 
	 * @param {String} jobId The job Id of the historical data import request
	 */
	getWorkforcemanagementHistoricaldataImportstatusJobId(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementHistoricaldataImportstatusJobId';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/historicaldata/importstatus/{jobId}', 
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
	 * Get integrations
	 * 
	 */
	getWorkforcemanagementIntegrationsHris() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/integrations/hris', 
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
	 * Query the results of time off types job
	 * 
	 * @param {String} jobId The ID of the job.
	 */
	getWorkforcemanagementIntegrationsHrisTimeofftypesJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementIntegrationsHrisTimeofftypesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/integrations/hris/timeofftypes/jobs/{jobId}', 
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
	 * settings.shortTermForecasting is deprecated and now lives on the business unit
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand 
	 */
	getWorkforcemanagementManagementunit(managementUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}', 
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
	 * Deprecated: Instead use /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes. Get the list of activity codes
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @deprecated
	 */
	getWorkforcemanagementManagementunitActivitycodes(managementUnitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitActivitycodes';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/activitycodes', 
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
	 * Get a list of user schedule adherence records for the requested management unit
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 */
	getWorkforcemanagementManagementunitAdherence(managementUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
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
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} agentId The agent id
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.excludeCapabilities Excludes all capabilities of the agent such as queues, languages, and skills
	 * @param {Array.<String>} opts.expand 
	 */
	getWorkforcemanagementManagementunitAgent(managementUnitId, agentId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitAgent';
		}
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling getWorkforcemanagementManagementunitAgent';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'agentId': agentId },
			{ 'excludeCapabilities': opts['excludeCapabilities'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
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
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} agentId The agent id
	 */
	getWorkforcemanagementManagementunitAgentShifttrades(managementUnitId, agentId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitAgentShifttrades';
		}
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
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
	 * Gets a summary of all shift trades in the matched state
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 */
	getWorkforcemanagementManagementunitShifttradesMatched(managementUnitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitShifttradesMatched';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/matched', 
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
	 * Gets list of users available for whom you can send direct shift trade requests
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 */
	getWorkforcemanagementManagementunitShifttradesUsers(managementUnitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitShifttradesUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/users', 
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
	 * Gets a time off limit object
	 * Returns properties of time off limit object, but not daily values.
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} timeOffLimitId The ID of the time off limit to fetch
	 */
	getWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitTimeofflimit';
		}
		// verify the required parameter 'timeOffLimitId' is set
		if (timeOffLimitId === undefined || timeOffLimitId === null || timeOffLimitId === '') {
			throw 'Missing the required parameter "timeOffLimitId" when calling getWorkforcemanagementManagementunitTimeofflimit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'timeOffLimitId': timeOffLimitId },
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
	 * Gets a list of time off limit objects under management unit.
	 * Currently only one time off limit object is allowed under management unit, so the list contains either 0 or 1 element.
	 * @param {String} managementUnitId The ID of the management unit.
	 */
	getWorkforcemanagementManagementunitTimeofflimits(managementUnitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitTimeofflimits';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits', 
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
	 * Gets a time off plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {String} timeOffPlanId The ID of the time off plan to fetch
	 */
	getWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitTimeoffplan';
		}
		// verify the required parameter 'timeOffPlanId' is set
		if (timeOffPlanId === undefined || timeOffPlanId === null || timeOffPlanId === '') {
			throw 'Missing the required parameter "timeOffPlanId" when calling getWorkforcemanagementManagementunitTimeoffplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'timeOffPlanId': timeOffPlanId },
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
	 * Gets a list of time off plans
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 */
	getWorkforcemanagementManagementunitTimeoffplans(managementUnitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitTimeoffplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans', 
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
	 * Get a time off request
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} userId The userId to whom the Time Off Request applies.
	 * @param {String} timeOffRequestId Time Off Request Id
	 */
	getWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitUserTimeoffrequest';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getWorkforcemanagementManagementunitUserTimeoffrequest';
		}
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null || timeOffRequestId === '') {
			throw 'Missing the required parameter "timeOffRequestId" when calling getWorkforcemanagementManagementunitUserTimeoffrequest';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'userId': userId,'timeOffRequestId': timeOffRequestId },
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
	 * Retrieves time off limit, allocated and waitlisted values according to specific time off request
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} userId The userId to whom the time off request applies.
	 * @param {String} timeOffRequestId The ID of the time off request, which dates and activityCodeId determine limit values to retrieve
	 */
	getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits(managementUnitId, userId, timeOffRequestId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits';
		}
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null || timeOffRequestId === '') {
			throw 'Missing the required parameter "timeOffRequestId" when calling getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}/timeofflimits', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'userId': userId,'timeOffRequestId': timeOffRequestId },
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
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} userId The userId to whom the Time Off Request applies.
	 */
	getWorkforcemanagementManagementunitUserTimeoffrequests(managementUnitId, userId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitUserTimeoffrequests';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getWorkforcemanagementManagementunitUserTimeoffrequests';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'userId': userId },
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
	 * Get users in the management unit
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 */
	getWorkforcemanagementManagementunitUsers(managementUnitId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/users', 
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
	 * Deprecated.  Use the equivalent business unit resource instead. Get a week schedule
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {String} scheduleId The ID of the schedule to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand Which fields, if any, to expand
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 * @deprecated
	 */
	getWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWeekSchedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null || weekId === '') {
			throw 'Missing the required parameter "weekId" when calling getWorkforcemanagementManagementunitWeekSchedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
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
	 * Deprecated.  Use the equivalent business unit resource instead. Get the list of schedules in a week in management unit
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeOnlyPublished Return only published schedules
	 * @param {String} opts.earliestWeekDate The start date of the earliest week to query in yyyy-MM-dd format
	 * @param {String} opts.latestWeekDate The start date of the latest week to query in yyyy-MM-dd format
	 * @deprecated
	 */
	getWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWeekSchedules';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null || weekId === '') {
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
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.evaluateMatches Whether to evaluate the matches for violations (default to true)
	 * @param {Boolean} opts.includeCrossWeekShifts Whether to include all shift trades with either the initiating shift or the receiving shift in the week (default to false)
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	getWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
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
			{ 'evaluateMatches': opts['evaluateMatches'],'includeCrossWeekShifts': opts['includeCrossWeekShifts'],'forceDownloadService': opts['forceDownloadService'] },
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
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.includeOnly limit response to the specified fields
	 */
	getWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWorkplan';
		}
		// verify the required parameter 'workPlanId' is set
		if (workPlanId === undefined || workPlanId === null || workPlanId === '') {
			throw 'Missing the required parameter "workPlanId" when calling getWorkforcemanagementManagementunitWorkplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'workPlanId': workPlanId },
			{ 'includeOnly': this.apiClient.buildCollectionParam(opts['includeOnly'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Get a work plan rotation
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanRotationId The ID of the work plan rotation to fetch
	 */
	getWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWorkplanrotation';
		}
		// verify the required parameter 'workPlanRotationId' is set
		if (workPlanRotationId === undefined || workPlanRotationId === null || workPlanRotationId === '') {
			throw 'Missing the required parameter "workPlanRotationId" when calling getWorkforcemanagementManagementunitWorkplanrotation';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}', 
			'GET', 
			{ 'managementUnitId': managementUnitId,'workPlanRotationId': workPlanRotationId },
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
	 * Get work plan rotations
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand 
	 */
	getWorkforcemanagementManagementunitWorkplanrotations(managementUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWorkplanrotations';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations', 
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
	 * Get work plans
	 * "expand=details" is deprecated
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Include to access additional data on the work plans
	 * @param {Array.<String>} opts.exclude Exclude specific data on the work plans from the response
	 */
	getWorkforcemanagementManagementunitWorkplans(managementUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling getWorkforcemanagementManagementunitWorkplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans', 
			'GET', 
			{ 'managementUnitId': managementUnitId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'exclude': this.apiClient.buildCollectionParam(opts['exclude'], 'multi') },
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
	 * @param {Number} opts.pageSize Deprecated, paging is not supported
	 * @param {Number} opts.pageNumber Deprecated, paging is not supported
	 * @param {Object} opts.expand Deprecated, expand settings on the single MU route
	 * @param {Object} opts.feature If specified, the list of management units for which the user is authorized to use the requested feature will be returned
	 * @param {String} opts.divisionId If specified, the list of management units belonging to the specified division will be returned
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
	 * Notifications are only initially sent if you have the relevant Notify and Edit permissions
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
		if (jobId === undefined || jobId === null || jobId === '') {
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
	 * Request to fetch the status of the historical shrinkage query
	 * 
	 * @param {String} jobId jobId
	 */
	getWorkforcemanagementShrinkageJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementShrinkageJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shrinkage/jobs/{jobId}', 
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
	 * Query the results of time off types job
	 * 
	 * @param {String} jobId The ID of the job.
	 */
	getWorkforcemanagementTimeoffbalanceJob(jobId) { 
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementTimeoffbalanceJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffbalance/jobs/{jobId}', 
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
	 * Get a time off request for the current user
	 * 
	 * @param {String} timeOffRequestId The ID of the time off request
	 */
	getWorkforcemanagementTimeoffrequest(timeOffRequestId) { 
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null || timeOffRequestId === '') {
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
	 * Get the daily waitlist positions of a time off request for the current user
	 * 
	 * @param {String} timeOffRequestId The ID of the time off request
	 */
	getWorkforcemanagementTimeoffrequestWaitlistpositions(timeOffRequestId) { 
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null || timeOffRequestId === '') {
			throw 'Missing the required parameter "timeOffRequestId" when calling getWorkforcemanagementTimeoffrequestWaitlistpositions';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}/waitlistpositions', 
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
	 */
	getWorkforcemanagementTimeoffrequests() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests', 
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
	 * Get work plan bid ranks for a user
	 * 
	 * @param {String} userId The userId to whom the work plan bid ranks apply.
	 */
	getWorkforcemanagementUserWorkplanbidranks(userId) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling getWorkforcemanagementUserWorkplanbidranks';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/users/{userId}/workplanbidranks', 
			'GET', 
			{ 'userId': userId },
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
	 * Gets an agent's work plan bidding preference
	 * 
	 * @param {String} bidId The ID of the work plan bid
	 */
	getWorkforcemanagementWorkplanbidPreferences(bidId) { 
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementWorkplanbidPreferences';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/workplanbids/{bidId}/preferences', 
			'GET', 
			{ 'bidId': bidId },
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
	 * Gets an agent's work plans for a bid
	 * 
	 * @param {String} bidId The ID of the work plan bid
	 */
	getWorkforcemanagementWorkplanbidWorkplans(bidId) { 
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementWorkplanbidWorkplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/workplanbids/{bidId}/workplans', 
			'GET', 
			{ 'bidId': bidId },
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
	 * Gets the list of work plan bids that belong to an agent
	 * 
	 */
	getWorkforcemanagementWorkplanbids() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/workplanbids', 
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
	 * Update an adherence explanation
	 * 
	 * @param {String} agentId The ID of the agent to query
	 * @param {String} explanationId The ID of the explanation to update
	 * @param {Object} body The request body
	 */
	patchWorkforcemanagementAgentAdherenceExplanation(agentId, explanationId, body) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling patchWorkforcemanagementAgentAdherenceExplanation';
		}
		// verify the required parameter 'explanationId' is set
		if (explanationId === undefined || explanationId === null || explanationId === '') {
			throw 'Missing the required parameter "explanationId" when calling patchWorkforcemanagementAgentAdherenceExplanation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementAgentAdherenceExplanation';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/{explanationId}', 
			'PATCH', 
			{ 'agentId': agentId,'explanationId': explanationId },
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
	 * Update my alternative shifts trade by trade ID
	 * 
	 * @param {String} tradeId The ID of the alternative shift trade
	 * @param {Object} body body
	 */
	patchWorkforcemanagementAlternativeshiftsTrade(tradeId, body) { 
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling patchWorkforcemanagementAlternativeshiftsTrade';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementAlternativeshiftsTrade';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/trades/{tradeId}', 
			'PATCH', 
			{ 'tradeId': tradeId },
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
	 * Bulk update alternative shift trade states
	 * 
	 * @param {Object} body The request body
	 */
	patchWorkforcemanagementAlternativeshiftsTradesStateJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementAlternativeshiftsTradesStateJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/trades/state/jobs', 
			'PATCH', 
			{  },
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
	 * Update business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunit(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunit';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId },
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
	 * Update an activity code
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {String} activityCodeId The ID of the activity code to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitActivitycode';
		}
		// verify the required parameter 'activityCodeId' is set
		if (activityCodeId === undefined || activityCodeId === null || activityCodeId === '') {
			throw 'Missing the required parameter "activityCodeId" when calling patchWorkforcemanagementBusinessunitActivitycode';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitActivitycode';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'activityCodeId': activityCodeId },
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
	 * Update an activity plan
	 * If a job associated with the activity plan is in Processing state the activity plan cannot be updated
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} activityPlanId The ID of the activity plan to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunitActivityplan(businessUnitId, activityPlanId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitActivityplan';
		}
		// verify the required parameter 'activityPlanId' is set
		if (activityPlanId === undefined || activityPlanId === null || activityPlanId === '') {
			throw 'Missing the required parameter "activityPlanId" when calling patchWorkforcemanagementBusinessunitActivityplan';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitActivityplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'activityPlanId': activityPlanId },
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
	 * Update alternative shifts settings for a business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunitAlternativeshiftsSettings(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitAlternativeshiftsSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitAlternativeshiftsSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/settings', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId },
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
	 * Updates the planning group
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} planningGroupId The ID of a planning group to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitPlanninggroup';
		}
		// verify the required parameter 'planningGroupId' is set
		if (planningGroupId === undefined || planningGroupId === null || planningGroupId === '') {
			throw 'Missing the required parameter "planningGroupId" when calling patchWorkforcemanagementBusinessunitPlanninggroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitPlanninggroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'planningGroupId': planningGroupId },
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
	 * Mark a schedule run as applied
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} runId The ID of the schedule run
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitSchedulingRun';
		}
		// verify the required parameter 'runId' is set
		if (runId === undefined || runId === null || runId === '') {
			throw 'Missing the required parameter "runId" when calling patchWorkforcemanagementBusinessunitSchedulingRun';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitSchedulingRun';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'runId': runId },
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
	 * Updates a service goal template
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} serviceGoalTemplateId The ID of a service goal template to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitServicegoaltemplate';
		}
		// verify the required parameter 'serviceGoalTemplateId' is set
		if (serviceGoalTemplateId === undefined || serviceGoalTemplateId === null || serviceGoalTemplateId === '') {
			throw 'Missing the required parameter "serviceGoalTemplateId" when calling patchWorkforcemanagementBusinessunitServicegoaltemplate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitServicegoaltemplate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'serviceGoalTemplateId': serviceGoalTemplateId },
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
	 * Updates a staffing group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} staffingGroupId The ID of the staffing group to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitStaffinggroup';
		}
		// verify the required parameter 'staffingGroupId' is set
		if (staffingGroupId === undefined || staffingGroupId === null || staffingGroupId === '') {
			throw 'Missing the required parameter "staffingGroupId" when calling patchWorkforcemanagementBusinessunitStaffinggroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitStaffinggroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'staffingGroupId': staffingGroupId },
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
	 * Updates a time-off plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffPlanId The ID of the time-off plan to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitTimeoffplan';
		}
		// verify the required parameter 'timeOffPlanId' is set
		if (timeOffPlanId === undefined || timeOffPlanId === null || timeOffPlanId === '') {
			throw 'Missing the required parameter "timeOffPlanId" when calling patchWorkforcemanagementBusinessunitTimeoffplan';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitTimeoffplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'timeOffPlanId': timeOffPlanId },
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
	 * Update work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The id of the workplanbid
	 * @param {Object} body The work plan bid to be updated
	 */
	patchWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitWorkplanbid';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling patchWorkforcemanagementBusinessunitWorkplanbid';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitWorkplanbid';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
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
	 * Update a bid group by bid group Id
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {String} bidGroupId Work Plan Bid Group id
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitWorkplanbidGroup';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling patchWorkforcemanagementBusinessunitWorkplanbidGroup';
		}
		// verify the required parameter 'bidGroupId' is set
		if (bidGroupId === undefined || bidGroupId === null || bidGroupId === '') {
			throw 'Missing the required parameter "bidGroupId" when calling patchWorkforcemanagementBusinessunitWorkplanbidGroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitWorkplanbidGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId,'bidGroupId': bidGroupId },
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
	 * Overrides the assigned work plan for the specified agents
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {String} bidGroupId The ID of the work plan bid group
	 * @param {Object} body body
	 */
	patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences(businessUnitId, bidId, bidGroupId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences';
		}
		// verify the required parameter 'bidGroupId' is set
		if (bidGroupId === undefined || bidGroupId === null || bidGroupId === '') {
			throw 'Missing the required parameter "bidGroupId" when calling patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}/preferences', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId,'bidGroupId': bidGroupId },
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
	 * Update the requested management unit
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 */
	patchWorkforcemanagementManagementunit(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunit';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId },
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
	 * Update agent configurations
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 */
	patchWorkforcemanagementManagementunitAgents(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitAgents';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitAgents';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId },
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
	 * Updates agent work plan configuration
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 */
	patchWorkforcemanagementManagementunitAgentsWorkplansBulk(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitAgentsWorkplansBulk';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitAgentsWorkplansBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/workplans/bulk', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId },
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
	 * Updates a time off limit object.
	 * Updates time off limit object properties, but not daily values.
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} timeOffLimitId The id of time off limit object to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitTimeofflimit';
		}
		// verify the required parameter 'timeOffLimitId' is set
		if (timeOffLimitId === undefined || timeOffLimitId === null || timeOffLimitId === '') {
			throw 'Missing the required parameter "timeOffLimitId" when calling patchWorkforcemanagementManagementunitTimeofflimit';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitTimeofflimit';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'timeOffLimitId': timeOffLimitId },
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
	 * Updates a time off plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {String} timeOffPlanId The ID of the time off plan to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitTimeoffplan';
		}
		// verify the required parameter 'timeOffPlanId' is set
		if (timeOffPlanId === undefined || timeOffPlanId === null || timeOffPlanId === '') {
			throw 'Missing the required parameter "timeOffPlanId" when calling patchWorkforcemanagementManagementunitTimeoffplan';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitTimeoffplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'timeOffPlanId': timeOffPlanId },
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
	 * Set integration status for a time off request.
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} timeOffRequestId The ID of the time off request.
	 * @param {String} userId The ID of user to whom the time off request belongs.
	 * @param {Object} body body
	 */
	patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus(managementUnitId, timeOffRequestId, userId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus';
		}
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null || timeOffRequestId === '') {
			throw 'Missing the required parameter "timeOffRequestId" when calling patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/{timeOffRequestId}/users/{userId}/integrationstatus', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'timeOffRequestId': timeOffRequestId,'userId': userId },
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
	 * Update a time off request
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} userId The id of the user the requested time off request belongs to
	 * @param {String} timeOffRequestId The id of the time off request to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitUserTimeoffrequest';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchWorkforcemanagementManagementunitUserTimeoffrequest';
		}
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null || timeOffRequestId === '') {
			throw 'Missing the required parameter "timeOffRequestId" when calling patchWorkforcemanagementManagementunitUserTimeoffrequest';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitUserTimeoffrequest';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'userId': userId,'timeOffRequestId': timeOffRequestId },
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
	 * Updates a shift trade. This route can only be called by the initiating agent
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} tradeId The ID of the shift trade to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementManagementunitWeekShifttrade(managementUnitId, weekDateId, tradeId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitWeekShifttrade';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling patchWorkforcemanagementManagementunitWeekShifttrade';
		}
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling patchWorkforcemanagementManagementunitWeekShifttrade';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitWeekShifttrade';
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
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.validationMode Allows to update work plan even if validation result is invalid
	 */
	patchWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitWorkplan';
		}
		// verify the required parameter 'workPlanId' is set
		if (workPlanId === undefined || workPlanId === null || workPlanId === '') {
			throw 'Missing the required parameter "workPlanId" when calling patchWorkforcemanagementManagementunitWorkplan';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitWorkplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'workPlanId': workPlanId },
			{ 'validationMode': opts['validationMode'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Update a work plan rotation
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanRotationId The ID of the work plan rotation to update
	 * @param {Object} body body
	 */
	patchWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitWorkplanrotation';
		}
		// verify the required parameter 'workPlanRotationId' is set
		if (workPlanRotationId === undefined || workPlanRotationId === null || workPlanRotationId === '') {
			throw 'Missing the required parameter "workPlanRotationId" when calling patchWorkforcemanagementManagementunitWorkplanrotation';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitWorkplanrotation';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId,'workPlanRotationId': workPlanRotationId },
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
	 * Update a time off request for the current user
	 * 
	 * @param {String} timeOffRequestId The ID of the time off request
	 * @param {Object} body body
	 */
	patchWorkforcemanagementTimeoffrequest(timeOffRequestId, body) { 
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null || timeOffRequestId === '') {
			throw 'Missing the required parameter "timeOffRequestId" when calling patchWorkforcemanagementTimeoffrequest';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementTimeoffrequest';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}', 
			'PATCH', 
			{ 'timeOffRequestId': timeOffRequestId },
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
	 * Update work plan bid ranks for a user
	 * 
	 * @param {String} userId The userId to whom the work plan bid ranks apply.
	 * @param {Object} body body
	 */
	patchWorkforcemanagementUserWorkplanbidranks(userId, body) { 
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling patchWorkforcemanagementUserWorkplanbidranks';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementUserWorkplanbidranks';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/users/{userId}/workplanbidranks', 
			'PATCH', 
			{ 'userId': userId },
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
	 * Update bulk work plan bid ranks on users. Max 50 users can be updated at a time.
	 * 
	 * @param {Array.<Object>} body Users
	 */
	patchWorkforcemanagementUsersWorkplanbidranksBulk(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementUsersWorkplanbidranksBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/users/workplanbidranks/bulk', 
			'PATCH', 
			{  },
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
	 * Update an agent's work plan bidding preference
	 * 
	 * @param {String} bidId The ID of the work plan bid
	 * @param {Object} body body
	 */
	patchWorkforcemanagementWorkplanbidPreferences(bidId, body) { 
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling patchWorkforcemanagementWorkplanbidPreferences';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementWorkplanbidPreferences';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/workplanbids/{bidId}/preferences', 
			'PATCH', 
			{ 'bidId': bidId },
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
	 * Submit an adherence explanation for the current user
	 * 
	 * @param {Object} body The request body
	 */
	postWorkforcemanagementAdherenceExplanations(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAdherenceExplanations';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/adherence/explanations', 
			'POST', 
			{  },
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
	 * Query adherence explanations for the current user
	 * 
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	postWorkforcemanagementAdherenceExplanationsQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAdherenceExplanationsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/adherence/explanations/query', 
			'POST', 
			{  },
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
	 * Deprecated. Use bulk routes instead (/adherence/historical/bulk)
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * @deprecated
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
	 * Request a historical adherence report in bulk
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementAdherenceHistoricalBulk(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAdherenceHistoricalBulk';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/adherence/historical/bulk', 
			'POST', 
			{  },
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
	 * Add an adherence explanation for the requested user
	 * 
	 * @param {String} agentId The ID of the agent to query
	 * @param {Object} body The request body
	 */
	postWorkforcemanagementAgentAdherenceExplanations(agentId, body) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling postWorkforcemanagementAgentAdherenceExplanations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgentAdherenceExplanations';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/{agentId}/adherence/explanations', 
			'POST', 
			{ 'agentId': agentId },
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
	 * Query adherence explanations for the given agent across a specified range
	 * 
	 * @param {String} agentId The ID of the agent to query
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	postWorkforcemanagementAgentAdherenceExplanationsQuery(agentId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling postWorkforcemanagementAgentAdherenceExplanationsQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgentAdherenceExplanationsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/query', 
			'POST', 
			{ 'agentId': agentId },
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
	 * Move agents in and out of management unit
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementAgents(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgents';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents', 
			'POST', 
			{  },
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
	 * Query integrations for agents
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementAgentsIntegrationsHrisQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgentsIntegrationsHrisQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/integrations/hris/query', 
			'POST', 
			{  },
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
	 * Get agent possible work shifts for requested time frame
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementAgentsMePossibleworkshifts(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgentsMePossibleworkshifts';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/me/possibleworkshifts', 
			'POST', 
			{  },
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
	 * Get published schedule for the current user
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementAgentschedulesMine(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgentschedulesMine';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agentschedules/mine', 
			'POST', 
			{  },
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
	 * Request a list of alternative shift offers for a given schedule
	 * 
	 * @param {Object} body The request body
	 */
	postWorkforcemanagementAlternativeshiftsOffersJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAlternativeshiftsOffersJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/offers/jobs', 
			'POST', 
			{  },
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
	 * Request a search of alternative shift offers for a given shift
	 * 
	 * @param {Object} body The request body
	 */
	postWorkforcemanagementAlternativeshiftsOffersSearchJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAlternativeshiftsOffersSearchJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/offers/search/jobs', 
			'POST', 
			{  },
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
	 * Create my alternative shift trade using an existing offer's jobId
	 * 
	 * @param {Object} body The request body
	 */
	postWorkforcemanagementAlternativeshiftsTrades(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAlternativeshiftsTrades';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/alternativeshifts/trades', 
			'POST', 
			{  },
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
	 * Create a new activity code
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitActivitycodes(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitActivitycodes';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitActivitycodes';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Run an activity plan manually
	 * Triggers a job running the activity plan. The activity plan cannot be updated until the job completes
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} activityPlanId The ID of the activity plan to run
	 */
	postWorkforcemanagementBusinessunitActivityplanRunsJobs(businessUnitId, activityPlanId) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitActivityplanRunsJobs';
		}
		// verify the required parameter 'activityPlanId' is set
		if (activityPlanId === undefined || activityPlanId === null || activityPlanId === '') {
			throw 'Missing the required parameter "activityPlanId" when calling postWorkforcemanagementBusinessunitActivityplanRunsJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/runs/jobs', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'activityPlanId': activityPlanId },
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
	 * Create an activity plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitActivityplans(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitActivityplans';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitActivityplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Query adherence explanations across an entire business unit for the requested period
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitAdherenceExplanationsQuery(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitAdherenceExplanationsQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitAdherenceExplanationsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/explanations/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Search published schedules
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitAgentschedulesSearch(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitAgentschedulesSearch';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitAgentschedulesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/agentschedules/search', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * List alternative shifts trades for a given management unit or agent
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/search', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Get intraday data for the given date for the requested planningGroupIds
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitIntraday(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitIntraday';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitIntraday';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Adds a new planning group
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitPlanninggroups(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitPlanninggroups';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitPlanninggroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Adds a new service goal template
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitServicegoaltemplates';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitServicegoaltemplates';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Creates a new staffing group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitStaffinggroups(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitStaffinggroups';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitStaffinggroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Gets staffing group associations for a list of user IDs
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service
	 */
	postWorkforcemanagementBusinessunitStaffinggroupsQuery(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitStaffinggroupsQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitStaffinggroupsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{ 'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Creates a new time-off limit object
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitTimeofflimits(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitTimeofflimits';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitTimeofflimits';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Retrieves time-off limit related values based on a given set of filters.
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/values/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Creates a new time-off plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitTimeoffplans(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitTimeoffplans';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitTimeoffplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Loads agent schedule data from the schedule. Used in combination with the metadata route
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery(businessUnitId, weekId, scheduleId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekScheduleCopy';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekScheduleCopy';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
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
	 * Request a daily recalculation of the performance prediction for the associated schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the performance prediction belongs
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format
	 * @param {String} scheduleId The ID of the schedule the performance prediction belongs to
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations(businessUnitId, weekId, scheduleId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null || weekId === '') {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
			throw 'Missing the required parameter "scheduleId" when calling postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations', 
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
	 * Upload daily activity changes to be able to request a performance prediction recalculation
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the performance prediction belongs
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format
	 * @param {String} scheduleId The ID of the schedule the performance prediction belongs to
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl(businessUnitId, weekId, scheduleId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null || weekId === '') {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
			throw 'Missing the required parameter "scheduleId" when calling postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/uploadurl', 
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekScheduleReschedule';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekScheduleReschedule';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
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
	 * Starts processing a schedule update
	 * Call after uploading the schedule data to the url supplied by the /update/uploadurl route
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekScheduleUpdate(businessUnitId, weekId, scheduleId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekScheduleUpdate';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekScheduleUpdate';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
			throw 'Missing the required parameter "scheduleId" when calling postWorkforcemanagementBusinessunitWeekScheduleUpdate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekScheduleUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/update', 
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
	 * Creates a signed upload URL for updating a schedule
	 * Once the upload is complete, call the /{scheduleId}/update route to start the schedule update process
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl(businessUnitId, weekId, scheduleId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl';
		}
		// verify the required parameter 'scheduleId' is set
		if (scheduleId === undefined || scheduleId === null || scheduleId === '') {
			throw 'Missing the required parameter "scheduleId" when calling postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/update/uploadurl', 
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
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
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
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
	 * Starts processing a schedule import
	 * Call after uploading the schedule data to the url supplied by the /import/uploadurl route
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body 
	 */
	postWorkforcemanagementBusinessunitWeekSchedulesImport(businessUnitId, weekId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekSchedulesImport';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekSchedulesImport';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekSchedulesImport';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/import', 
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
	 * Creates a signed upload URL for importing a schedule
	 * Once the upload is complete, call the /import route to start the schedule import process
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl(businessUnitId, weekId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl';
		}
		// verify the required parameter 'weekId' is set
		if (weekId === undefined || weekId === null) {
			throw 'Missing the required parameter "weekId" when calling postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/import/uploadurl', 
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
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast to copy
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitWeekShorttermforecastCopy(businessUnitId, weekDateId, forecastId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastCopy';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastCopy';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null || forecastId === '') {
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
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate(businessUnitId, weekDateId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
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
	 * Starts importing the uploaded short term forecast
	 * Call after uploading the forecast data to the url supplied by the /import/uploadurl route
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekShorttermforecastsImport(businessUnitId, weekDateId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastsImport';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastsImport';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastsImport';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/import', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId },
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
	 * Creates a signed upload URL for importing a short term forecast
	 * Once the upload is complete, call the /import route to start the short term forecast import process
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl(businessUnitId, weekDateId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/import/uploadurl', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId },
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
	 * Copy a work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the work plan bid to copy
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWorkplanbidCopy(businessUnitId, bidId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWorkplanbidCopy';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling postWorkforcemanagementBusinessunitWorkplanbidCopy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWorkplanbidCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/copy', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
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
	 * Add a bid group in a given work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunitWorkplanbidGroups(businessUnitId, bidId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWorkplanbidGroups';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling postWorkforcemanagementBusinessunitWorkplanbidGroups';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWorkplanbidGroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
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
	 * Create a new work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The work plan bid to be created
	 */
	postWorkforcemanagementBusinessunitWorkplanbids(businessUnitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitWorkplanbids';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitWorkplanbids';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
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
	 * Add a new business unit
	 * It may take a minute or two for a new business unit to be available for api operations
	 * @param {Object} body body
	 */
	postWorkforcemanagementBusinessunits(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunits';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits', 
			'POST', 
			{  },
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
	 * Create a newly generated calendar link for the current user; if the current user has previously generated one, the generated link will be returned
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.language A language tag (which is sometimes referred to as a locale identifier) to use to localize default activity code names in the ics-formatted calendar (default to en-US)
	 */
	postWorkforcemanagementCalendarUrlIcs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/calendar/url/ics', 
			'POST', 
			{  },
			{ 'language': opts['language'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Delete the list of the historical data import entries
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementHistoricaldataBulkRemoveJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementHistoricaldataBulkRemoveJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/historicaldata/bulk/remove/jobs', 
			'POST', 
			{  },
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
	 * Delete the entries of the historical data imports in the organization.
	 * Deprecated: Please use POST /workforcemanagement/historicaldata/bulk/remove/jobs instead.
	 * @deprecated
	 */
	postWorkforcemanagementHistoricaldataDeletejob() { 

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/historicaldata/deletejob', 
			'POST', 
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
	 * Trigger validation process for historical import
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementHistoricaldataValidate(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementHistoricaldataValidate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/historicaldata/validate', 
			'POST', 
			{  },
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
	 * Get list of time off types configured in integration
	 * 
	 * @param {String} hrisIntegrationId The ID of the HRIS integration for which time off types are queried.
	 */
	postWorkforcemanagementIntegrationsHriTimeofftypesJobs(hrisIntegrationId) { 
		// verify the required parameter 'hrisIntegrationId' is set
		if (hrisIntegrationId === undefined || hrisIntegrationId === null || hrisIntegrationId === '') {
			throw 'Missing the required parameter "hrisIntegrationId" when calling postWorkforcemanagementIntegrationsHriTimeofftypesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/integrations/hris/{hrisIntegrationId}/timeofftypes/jobs', 
			'POST', 
			{ 'hrisIntegrationId': hrisIntegrationId },
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
	 * Get agents work plans configuration
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	postWorkforcemanagementManagementunitAgentsWorkplansQuery(managementUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitAgentsWorkplansQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitAgentsWorkplansQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/workplans/query', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
			{ 'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Query published schedules for given given time range for set of users
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	postWorkforcemanagementManagementunitAgentschedulesSearch(managementUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitAgentschedulesSearch';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitAgentschedulesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/agentschedules/search', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Request a historical adherence report
	 * The maximum supported range for historical adherence queries is 31 days, or 7 days with includeExceptions = true
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitHistoricaladherencequery(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitHistoricaladherencequery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitHistoricaladherencequery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/historicaladherencequery', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Move the requested management unit to a new business unit
	 * Returns status 200 if the management unit is already in the requested business unit
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitMove(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitMove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitMove';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/move', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Query published schedules for given given time range for set of users
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @deprecated
	 */
	postWorkforcemanagementManagementunitSchedulesSearch(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitSchedulesSearch';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitSchedulesSearch';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/schedules/search', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Request a historical shrinkage report
	 * The maximum supported range for historical shrinkage queries is up to 32 days. Historical Shrinkage for a given date range can be queried in two modes - granular and aggregated. To see granular shrinkage information, provide granularity in the request body. 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitShrinkageJobs(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitShrinkageJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitShrinkageJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/shrinkage/jobs', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Creates a new time off limit object under management unit.
	 * Only one limit object is allowed under management unit, so an attempt to create second object will fail.
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitTimeofflimits(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitTimeofflimits';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitTimeofflimits';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Retrieves time off limit related values based on a given set of filters.
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitTimeofflimitsValuesQuery(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitTimeofflimitsValuesQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitTimeofflimitsValuesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/values/query', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Creates a new time off plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitTimeoffplans(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitTimeoffplans';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitTimeoffplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Create a new time off request
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitTimeoffrequests(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitTimeoffrequests';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitTimeoffrequests';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Retrieves integration statuses for a list of time off requests
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/integrationstatus/query', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Fetches time off requests matching the conditions specified in the request body
	 * Request body requires one of the following: User ID is specified, statuses == [Pending] or date range to be specified and less than or equal to 33 days.  All other fields are filters
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	postWorkforcemanagementManagementunitTimeoffrequestsQuery(managementUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitTimeoffrequestsQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitTimeoffrequestsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
			{ 'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Retrieves daily waitlist position for a list of time off requests
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/waitlistpositions/query', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Query time off balances for a given user for specified activity code and dates
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {String} userId The ID of the user
	 * @param {Object} body The request body
	 */
	postWorkforcemanagementManagementunitUserTimeoffbalanceJobs(managementUnitId, userId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitUserTimeoffbalanceJobs';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postWorkforcemanagementManagementunitUserTimeoffbalanceJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitUserTimeoffbalanceJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffbalance/jobs', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'userId': userId },
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
	 * Query time off balances for dates spanned by a given time off request
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} userId The userId to whom the time off request applies.
	 * @param {String} timeOffRequestId The time off request id.
	 */
	postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs(managementUnitId, userId, timeOffRequestId) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs';
		}
		// verify the required parameter 'timeOffRequestId' is set
		if (timeOffRequestId === undefined || timeOffRequestId === null || timeOffRequestId === '') {
			throw 'Missing the required parameter "timeOffRequestId" when calling postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}/timeoffbalance/jobs', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'userId': userId,'timeOffRequestId': timeOffRequestId },
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
	 * Estimates available time off for an agent
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {String} userId The id of the user for whom the time off request estimate is requested
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate(managementUnitId, userId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate';
		}
		// verify the required parameter 'userId' is set
		if (userId === undefined || userId === null || userId === '') {
			throw 'Missing the required parameter "userId" when calling postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/estimate', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'userId': userId },
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
	 * Matches a shift trade. This route can only be called by the receiving agent
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} tradeId The ID of the shift trade to update
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitWeekShifttradeMatch(managementUnitId, weekDateId, tradeId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWeekShifttradeMatch';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementManagementunitWeekShifttradeMatch';
		}
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling postWorkforcemanagementManagementunitWeekShifttradeMatch';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWeekShifttradeMatch';
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
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
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
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 */
	postWorkforcemanagementManagementunitWeekShifttradesSearch(managementUnitId, weekDateId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
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
			{ 'forceDownloadService': opts['forceDownloadService'] },
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
	 * Admin functionality is not supported with "mine".
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 */
	postWorkforcemanagementManagementunitWeekShifttradesStateBulk(managementUnitId, weekDateId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
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
	 * Create a copy of work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to create a copy
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitWorkplanCopy(managementUnitId, workPlanId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWorkplanCopy';
		}
		// verify the required parameter 'workPlanId' is set
		if (workPlanId === undefined || workPlanId === null || workPlanId === '') {
			throw 'Missing the required parameter "workPlanId" when calling postWorkforcemanagementManagementunitWorkplanCopy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWorkplanCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'workPlanId': workPlanId },
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
	 * Validate Work Plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to validate. For new work plan, use the word 'new' for the ID.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand 
	 */
	postWorkforcemanagementManagementunitWorkplanValidate(managementUnitId, workPlanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWorkplanValidate';
		}
		// verify the required parameter 'workPlanId' is set
		if (workPlanId === undefined || workPlanId === null || workPlanId === '') {
			throw 'Missing the required parameter "workPlanId" when calling postWorkforcemanagementManagementunitWorkplanValidate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWorkplanValidate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/validate', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'workPlanId': workPlanId },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Create a copy of work plan rotation
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanRotationId The ID of the work plan rotation to create a copy
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitWorkplanrotationCopy(managementUnitId, workPlanRotationId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWorkplanrotationCopy';
		}
		// verify the required parameter 'workPlanRotationId' is set
		if (workPlanRotationId === undefined || workPlanRotationId === null || workPlanRotationId === '') {
			throw 'Missing the required parameter "workPlanRotationId" when calling postWorkforcemanagementManagementunitWorkplanrotationCopy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWorkplanrotationCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}/copy', 
			'POST', 
			{ 'managementUnitId': managementUnitId,'workPlanRotationId': workPlanRotationId },
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
	 * Create a new work plan rotation
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunitWorkplanrotations(managementUnitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWorkplanrotations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWorkplanrotations';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
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
	 * Create a new work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.validationMode Allows to create work plan even if the validation result is invalid
	 */
	postWorkforcemanagementManagementunitWorkplans(managementUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling postWorkforcemanagementManagementunitWorkplans';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunitWorkplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans', 
			'POST', 
			{ 'managementUnitId': managementUnitId },
			{ 'validationMode': opts['validationMode'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

	/**
	 * Add a management unit
	 * It may take a minute or two for a new management unit to be available for api operations
	 * @param {Object} body body
	 */
	postWorkforcemanagementManagementunits(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementManagementunits';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits', 
			'POST', 
			{  },
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
	 * Mark a list of notifications as read or unread
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementNotificationsUpdate(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementNotificationsUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/notifications/update', 
			'POST', 
			{  },
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
	 * Get published schedule for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * @deprecated
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
	 * Request a teams historical adherence report
	 * The maximum supported range for historical adherence queries is 31 days, or 7 days with includeExceptions = true
	 * @param {String} teamId The ID of the team
	 * @param {Object} body body
	 */
	postWorkforcemanagementTeamAdherenceHistorical(teamId, body) { 
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null || teamId === '') {
			throw 'Missing the required parameter "teamId" when calling postWorkforcemanagementTeamAdherenceHistorical';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementTeamAdherenceHistorical';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/teams/{teamId}/adherence/historical', 
			'POST', 
			{ 'teamId': teamId },
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
	 * Request a historical shrinkage report
	 * The maximum supported range for historical shrinkage queries is up to 32 days
	 * @param {String} teamId The ID of the team
	 * @param {Object} body body
	 */
	postWorkforcemanagementTeamShrinkageJobs(teamId, body) { 
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null || teamId === '') {
			throw 'Missing the required parameter "teamId" when calling postWorkforcemanagementTeamShrinkageJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementTeamShrinkageJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/teams/{teamId}/shrinkage/jobs', 
			'POST', 
			{ 'teamId': teamId },
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
	 * Query time off balances for the current user for specified activity code and dates
	 * 
	 * @param {Object} body The request body
	 */
	postWorkforcemanagementTimeoffbalanceJobs(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementTimeoffbalanceJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffbalance/jobs', 
			'POST', 
			{  },
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
	 * Queries available time off for the current user
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementTimeofflimitsAvailableQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementTimeofflimitsAvailableQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeofflimits/available/query', 
			'POST', 
			{  },
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
	 * Create a time off request for the current user
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementTimeoffrequests(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementTimeoffrequests';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests', 
			'POST', 
			{  },
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
	 * Estimates available time off for current user
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementTimeoffrequestsEstimate(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementTimeoffrequestsEstimate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests/estimate', 
			'POST', 
			{  },
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
	 * Retrieves integration statuses for a list of current user time off requests
	 * 
	 * @param {Object} body body
	 */
	postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery(body) { 
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests/integrationstatus/query', 
			'POST', 
			{  },
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
	 * Update integrations for agent
	 * 
	 * @param {String} agentId The ID of the agent
	 * @param {Object} body body
	 */
	putWorkforcemanagementAgentIntegrationsHris(agentId, body) { 
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling putWorkforcemanagementAgentIntegrationsHris';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putWorkforcemanagementAgentIntegrationsHris';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/{agentId}/integrations/hris', 
			'PUT', 
			{ 'agentId': agentId },
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
	 * Sets daily values for a date range of time-off limit object
	 * Note that only limit daily values can be set through API, allocated and waitlisted values are read-only for time-off limit API
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffLimitId The ID of the time-off limit object to set values for
	 * @param {Object} body body
	 */
	putWorkforcemanagementBusinessunitTimeofflimitValues(businessUnitId, timeOffLimitId, body) { 
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling putWorkforcemanagementBusinessunitTimeofflimitValues';
		}
		// verify the required parameter 'timeOffLimitId' is set
		if (timeOffLimitId === undefined || timeOffLimitId === null || timeOffLimitId === '') {
			throw 'Missing the required parameter "timeOffLimitId" when calling putWorkforcemanagementBusinessunitTimeofflimitValues';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putWorkforcemanagementBusinessunitTimeofflimitValues';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/values', 
			'PUT', 
			{ 'businessUnitId': businessUnitId,'timeOffLimitId': timeOffLimitId },
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
	 * Sets daily values for a date range of time off limit object
	 * Note that only limit daily values can be set through API, allocated and waitlisted values are read-only for time off limit API
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} timeOffLimitId The ID of the time off limit object to set values for
	 * @param {Object} body body
	 */
	putWorkforcemanagementManagementunitTimeofflimitValues(managementUnitId, timeOffLimitId, body) { 
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling putWorkforcemanagementManagementunitTimeofflimitValues';
		}
		// verify the required parameter 'timeOffLimitId' is set
		if (timeOffLimitId === undefined || timeOffLimitId === null || timeOffLimitId === '') {
			throw 'Missing the required parameter "timeOffLimitId" when calling putWorkforcemanagementManagementunitTimeofflimitValues';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putWorkforcemanagementManagementunitTimeofflimitValues';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}/values', 
			'PUT', 
			{ 'managementUnitId': managementUnitId,'timeOffLimitId': timeOffLimitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json']
		);
	}

}


export default WorkforceManagementApi;
