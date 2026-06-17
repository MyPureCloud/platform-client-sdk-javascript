import ApiClient from '../ApiClient.js';


class WorkforceManagementApi {
	/**
	 * WorkforceManagement service.
	 * @module purecloud-platform-client-v2/api/WorkforceManagementApi
	 * @version 255.0.0
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
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunit(businessUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes an activity code
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {String} activityCodeId The ID of the activity code to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete staffing group allocations history created for a capacity plan before the given date
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} capacityPlanId The ID of the capacity plan
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.beforeDateId The date to delete records that are created on or before this date in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory(businessUnitId, capacityPlanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory';
		}
		// verify the required parameter 'capacityPlanId' is set
		if (capacityPlanId === undefined || capacityPlanId === null || capacityPlanId === '') {
			throw 'Missing the required parameter "capacityPlanId" when calling deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocationshistory', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'capacityPlanId': capacityPlanId },
			{ 'beforeDateId': opts['beforeDateId'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes the planning group
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} planningGroupId The ID of a planning group to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a schedule bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitSchedulebid(businessUnitId, bidId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitSchedulebid';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling deleteWorkforcemanagementBusinessunitSchedulebid';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a schedule bid group by bid group Id
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid associated with the bid groups
	 * @param {String} bidGroupId Schedule Bid Group id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitSchedulebidGroup(businessUnitId, bidId, bidGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling deleteWorkforcemanagementBusinessunitSchedulebidGroup';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling deleteWorkforcemanagementBusinessunitSchedulebidGroup';
		}
		// verify the required parameter 'bidGroupId' is set
		if (bidGroupId === undefined || bidGroupId === null || bidGroupId === '') {
			throw 'Missing the required parameter "bidGroupId" when calling deleteWorkforcemanagementBusinessunitSchedulebidGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups/{bidGroupId}', 
			'DELETE', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId,'bidGroupId': bidGroupId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Cancel a scheduling run
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} runId The ID of the schedule run
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a service goal template
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} serviceGoalTemplateId The ID of the service goal template to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes a staffing group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} staffingGroupId The ID of the staffing group to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes a time-off limit object
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffLimitId The ID of the time-off limit object to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitTimeofflimit(businessUnitId, timeOffLimitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes a time-off plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffPlanId The ID of the time-off plan to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitWeekSchedule(businessUnitId, weekId, scheduleId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a short term forecast
	 * Must not be tied to any schedules
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the work plan bid
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a bid group by bid group Id
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {String} bidGroupId Work Plan Bid Group id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Disable generated calendar link for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementCalendarUrlIcs(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete management unit
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementManagementunit(managementUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes a time off limit object
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} timeOffLimitId The ID of the time off limit object to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deletes a time off plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {String} timeOffPlanId The ID of the time off plan to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to delete
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete a work plan rotation
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanRotationId The ID of the work plan rotation to be deleted
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	deleteWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of UserScheduleAdherence records for the requested users
	 * 
	 * @param {Array.<String>} userId User Id(s) for which to fetch current schedule adherence information.  Min 1, Max of 100 userIds per request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAdherence(userId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an adherence explanation for the current user
	 * 
	 * @param {String} explanationId The ID of the explanation to update
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAdherenceExplanation(explanationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query the status of an adherence explanation operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAdherenceExplanationsJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request to fetch the status of the historical adherence bulk job. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId ID of the job to get
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAdherenceHistoricalBulkJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query the status of a historical adherence request operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAdherenceHistoricalJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an adherence explanation
	 * 
	 * @param {String} agentId The ID of the agent to query
	 * @param {String} explanationId The ID of the explanation to update
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAgentAdherenceExplanation(agentId, explanationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the management unit to which the agent belongs
	 * 
	 * @param {String} agentId The ID of the agent to look up
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAgentManagementunit(agentId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request to fetch the status of the agent adherence job. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId ID of the job to get
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAgentsMeAdherenceHistoricalJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementAgentsMeAdherenceHistoricalJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/me/adherence/historical/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the management unit to which the currently logged in agent belongs
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAgentsMeManagementunit(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query the status of an alternative shift offers operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAlternativeshiftsOffersJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query the status of an alternative shift search offers operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAlternativeshiftsOffersSearchJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get alternative shifts settings from the current logged in agent’s business unit
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAlternativeshiftsSettings(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get my alternative shift trade by trade ID
	 * 
	 * @param {String} tradeId The ID of the alternative shift trade
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAlternativeshiftsTrade(tradeId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of my alternative shifts trades
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query the status of an alternative shift trades operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAlternativeshiftsTradesJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query the status of an alternative shift trade state operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementAlternativeshiftsTradesStateJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get business unit
	 * Expanding "settings" will retrieve all settings.  All other expands will retrieve only the requested settings field(s).
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Include to access additional data on the business unit
	 * @param {Boolean} opts.includeSchedulingDefaultMessageSeverities Whether to include scheduling default message severities
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi'),'includeSchedulingDefaultMessageSeverities': opts['includeSchedulingDefaultMessageSeverities'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an activity code
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {String} activityCodeId The ID of the activity code to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get activity codes
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an activity plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} activityPlanId The ID of the activity plan to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitActivityplan(businessUnitId, activityPlanId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets an activity plan run job
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} activityPlanId The ID of the activity plan associated with the run job
	 * @param {String} jobId The ID of the activity plan run job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitActivityplanRunsJob(businessUnitId, activityPlanId, jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get activity plans
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.state Optionally filter by activity plan state
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets the latest job for all activity plans in the business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitActivityplansJobs(businessUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get alternative shifts settings for a business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitAlternativeshiftsSettings(businessUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get an alternative shifts trade in a business unit for a given trade ID
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} tradeId The ID of the alternative shift trade
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitAlternativeshiftsTrade(businessUnitId, tradeId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query the status of an alternative shift search trade operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob(businessUnitId, jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a capacity plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} capacityPlanId The ID of the capacity plan
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitCapacityplan(businessUnitId, capacityPlanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitCapacityplan';
		}
		// verify the required parameter 'capacityPlanId' is set
		if (capacityPlanId === undefined || capacityPlanId === null || capacityPlanId === '') {
			throw 'Missing the required parameter "capacityPlanId" when calling getWorkforcemanagementBusinessunitCapacityplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'capacityPlanId': capacityPlanId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a capacity plan's staffing group allocations
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} capacityPlanId The ID of the capacity plan
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.granularity Granularity to access staffing group data, defaults to weekly
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations(businessUnitId, capacityPlanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations';
		}
		// verify the required parameter 'capacityPlanId' is set
		if (capacityPlanId === undefined || capacityPlanId === null || capacityPlanId === '') {
			throw 'Missing the required parameter "capacityPlanId" when calling getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocations', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'capacityPlanId': capacityPlanId },
			{ 'granularity': opts['granularity'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a capacity plan's staffing requirements
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} capacityPlanId The ID of the capacity plan
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements(businessUnitId, capacityPlanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements';
		}
		// verify the required parameter 'capacityPlanId' is set
		if (capacityPlanId === undefined || capacityPlanId === null || capacityPlanId === '') {
			throw 'Missing the required parameter "capacityPlanId" when calling getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffingrequirements', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'capacityPlanId': capacityPlanId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the latest long term staffing requirements for a business unit
	 * 
	 * @param {String} businessUnitId 
	 * @param {String} weekDateId weekDateId of forecast, format yyyy-MM-dd. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId forecastId of forecast
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.granularity Granularity to access staffing requirements data, defaults to weekly
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null || forecastId === '') {
			throw 'Missing the required parameter "forecastId" when calling getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplanning/longtermrequirements/automaticbestmethod/weeks/{weekDateId}/forecasts/{forecastId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId,'forecastId': forecastId },
			{ 'granularity': opts['granularity'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of capacity plans for a business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitCapacityplans(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitCapacityplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans', 
			'GET', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get intraday planning groups for the given date
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} _date yyyy-MM-dd date string interpreted in the configured business unit time zone. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitIntradayPlanninggroups(businessUnitId, _date, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the latest session for the business unit ID
	 * 
	 * @param {String} businessUnitId 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession(businessUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the session details for the session ID
	 * 
	 * @param {String} businessUnitId 
	 * @param {String} sessionId 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId(businessUnitId, sessionId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the snapshot details for the snapshot ID
	 * 
	 * @param {String} businessUnitId 
	 * @param {String} sessionId 
	 * @param {String} snapshotId 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId is a preview method and is subject to both breaking and non-breaking changes at any time without notice
	 */
	getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId(businessUnitId, sessionId, snapshotId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get all authorized management units in the business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.feature If specified, the list of management units for which the user is authorized to use the requested feature will be returned
	 * @param {String} opts.divisionId If specified, the list of management units belonging to the specified division will be returned
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get minimum staffing settings for a business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitMinimumstaffingSettings(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitMinimumstaffingSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/minimumstaffing/settings', 
			'GET', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get opportunity details
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} opportunityId The ID of the opportunity
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand List of resources to expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitOpportunity(businessUnitId, opportunityId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitOpportunity';
		}
		// verify the required parameter 'opportunityId' is set
		if (opportunityId === undefined || opportunityId === null || opportunityId === '') {
			throw 'Missing the required parameter "opportunityId" when calling getWorkforcemanagementBusinessunitOpportunity';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/{opportunityId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'opportunityId': opportunityId },
			{ 'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a planning group
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} planningGroupId The ID of a planning group to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets list of planning groups
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitPlanninggroups(businessUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a schedule bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitSchedulebid(businessUnitId, bidId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulebid';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementBusinessunitSchedulebid';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a schedule bid group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid associated with the bid groups
	 * @param {String} bidGroupId Schedule Bid Group id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitSchedulebidGroup(businessUnitId, bidId, bidGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulebidGroup';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementBusinessunitSchedulebidGroup';
		}
		// verify the required parameter 'bidGroupId' is set
		if (bidGroupId === undefined || bidGroupId === null || bidGroupId === '') {
			throw 'Missing the required parameter "bidGroupId" when calling getWorkforcemanagementBusinessunitSchedulebidGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups/{bidGroupId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId,'bidGroupId': bidGroupId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get agents schedule bid preferences for a bid group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid associated with the bid groups
	 * @param {String} bidGroupId The ID of the schedule bid group
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Array.<String>} opts.expand Include to fetch agents' preferences with priorities
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitSchedulebidGroupPreferences(businessUnitId, bidId, bidGroupId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulebidGroupPreferences';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementBusinessunitSchedulebidGroupPreferences';
		}
		// verify the required parameter 'bidGroupId' is set
		if (bidGroupId === undefined || bidGroupId === null || bidGroupId === '') {
			throw 'Missing the required parameter "bidGroupId" when calling getWorkforcemanagementBusinessunitSchedulebidGroupPreferences';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups/{bidGroupId}/preferences', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId,'bidGroupId': bidGroupId },
			{ 'forceDownloadService': opts['forceDownloadService'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get summary of bid groups that belong to a schedule bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid associated with the bid groups
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitSchedulebidGroupsSummary(businessUnitId, bidId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulebidGroupsSummary';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementBusinessunitSchedulebidGroupsSummary';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups/summary', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of schedule bids
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitSchedulebids(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulebids';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids', 
			'GET', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get scheduler settings for a business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitSchedulerSettings(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitSchedulerSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduler/settings', 
			'GET', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a scheduling run
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} runId The ID of the schedule run
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the result of a rescheduling operation
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} runId The ID of the schedule run
	 * @param {Array.<String>} managementUnitIds The IDs of the management units for which to fetch the reschedule results
	 * @param {Array.<String>} expand The fields to expand. Omitting will return an empty response
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitSchedulingRunResult(businessUnitId, runId, managementUnitIds, expand, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of scheduling runs
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitSchedulingRuns(businessUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a service goal template
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} serviceGoalTemplateId The ID of a service goal template to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Include to access additional data on the service goal template
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets list of service goal templates
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Include to access additional data on the service goal template
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View results of the evaluate shift trades in a management unit per week operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob(businessUnitId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementBusinessunitShifttradingTradesEvaluateJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/evaluate/jobs/{jobId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View results of the query shift trades in a management unit per user operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitShifttradingTradesQueryJob(businessUnitId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitShifttradingTradesQueryJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementBusinessunitShifttradingTradesQueryJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/query/jobs/{jobId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View results of bulk update trades states operation. Only the user who started the operation can query the status.
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob(businessUnitId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementBusinessunitShifttradingTradesStateBulkJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/state/bulk/jobs/{jobId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View result of potential shift trade matches for the current user. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob(businessUnitId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/unmatched/search/jobs/{jobId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View results of the retrieve the summary of shift trades in a matched state per week operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob(businessUnitId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementBusinessunitShifttradingWeeksSummaryJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/weeks/summary/jobs/{jobId}', 
			'GET', 
			{ 'businessUnitId': businessUnitId,'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a staffing group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} staffingGroupId The ID of the staffing group to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a list of staffing groups
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.managementUnitId The ID of the management unit to get management unit specific staffing groups
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a time-off limit object
	 * Returns properties of time-off limit object, but not daily values
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffLimitId The ID of the time-off limit to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitTimeofflimit(businessUnitId, timeOffLimitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a list of time-off limit objects
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.managementUnitId The ID of the management unit to get management unit specific time-off limit objects
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a time-off plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffPlanId The ID of the time-off plan to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a list of time-off plans
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.managementUnitId The ID of the management unit to get management unit specific staffing groups
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Array.<String>} opts.expand Include to access additional data for the time-off plans
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			{ 'managementUnitId': opts['managementUnitId'],'forceDownloadService': opts['forceDownloadService'],'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get users in the business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.managementUnitIds The IDs of the management units for which to retrieve users
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitUsers(businessUnitId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling getWorkforcemanagementBusinessunitUsers';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/users', 
			'GET', 
			{ 'businessUnitId': businessUnitId },
			{ 'managementUnitIds': this.apiClient.buildCollectionParam(opts['managementUnitIds'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the generation results for a generated schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWeekScheduleGenerationresults(businessUnitId, weekId, scheduleId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Loads agent's schedule history.
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {String} agentId THe ID of the agent
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent(businessUnitId, weekId, scheduleId, agentId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the performance prediction for the associated schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the performance prediction belongs
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format
	 * @param {String} scheduleId The ID of the schedule the performance prediction belongs to
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions(businessUnitId, weekId, scheduleId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get recalculated performance prediction result
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the performance prediction belongs
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format
	 * @param {String} scheduleId The ID of the schedule the recalculation belongs to
	 * @param {String} recalculationId The ID of the recalculation request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation(businessUnitId, weekId, scheduleId, recalculationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the list of week schedules for the specified week
	 * Use "recent" (without quotes) for the `weekId` path parameter to fetch all schedules for up to +/- 26 weeks from the current date. Response will include any schedule which spans the specified week
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format, or 'recent' (without quotes) to get recent schedules
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.earliestWeekDate If weekId == 'recent', specify the earliest schedule start week date (inclusive) to include in the 'recent' range, in yyyy-MM-dd format. Ignored if weekId != 'recent'. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} opts.latestWeekDate If weekId == 'recent', specify the latest schedule start week date (inclusive) to include in the 'recent' range, in yyyy-MM-dd format. Ignored if weekId != 'recent'. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Boolean} opts.includeOnlyPublished includeOnlyPublished
	 * @param {Object} opts.expand expand
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			{ 'earliestWeekDate': opts['earliestWeekDate'],'latestWeekDate': opts['latestWeekDate'],'includeOnlyPublished': opts['includeOnlyPublished'],'expand': opts['expand'] },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets the forecast generation results
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets the forecast planning group snapshot
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId The ID of the forecast
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Array.<String>} opts.expand Expand to include minimum staffing values in (staffing requirement response or applied to base staffing requirement values)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			{ 'weekNumbers': this.apiClient.buildCollectionParam(opts['weekNumbers'], 'multi'),'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get short term forecasts
	 * Use "recent" (without quotes) for the `weekDateId` path parameter to fetch all forecasts for up to +/- 26 weeks from the current date. Response will include any forecast which spans the specified week
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId The week start date of the forecast in yyyy-MM-dd format or 'recent' (without quotes) to fetch recent forecasts
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWeekShorttermforecasts(businessUnitId, weekDateId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The id of the workplanbid
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a bid group by bid group Id
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {String} bidGroupId Work Plan Bid Group id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets the work plan preferences of all the agents in the work plan bid group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {String} bidGroupId The ID of the work plan bid group
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences(businessUnitId, bidId, bidGroupId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get summary of bid groups that belong to a work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary(businessUnitId, bidId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of work plan bids
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementBusinessunitWorkplanbids(businessUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get business units
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.feature If specified, the list of business units for which the user is authorized to use the requested feature will be returned
	 * @param {String} opts.divisionId If specified, the list of business units belonging to the specified division will be returned
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get business units across divisions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionId The divisionIds to filter by. If omitted, will return business units in all divisions
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get ics formatted calendar based on shareable link
	 * 
	 * @param {String} calendarId The id of the ics-formatted calendar
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementCalendarDataIcs(calendarId, opts) { 
		opts = opts || {};
		
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
			['text/calendar'],
			opts['customHeaders']
		);
	}

	/**
	 * Get existing calendar link for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementCalendarUrlIcs(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves delete job status for historical data imports associated with the job id
	 * 
	 * @param {String} jobId The job ID of the historical data delete request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementHistoricaldataBulkRemoveJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves all delete job status for historical data
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementHistoricaldataBulkRemoveJobs(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves status of the historical data imports of the organization
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementHistoricaldataImportstatus(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves status of the historical data imports associated with job id
	 * 
	 * @param {String} jobId The job Id of the historical data import request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementHistoricaldataImportstatusJobId(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get integrations
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementIntegrationsHris(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query the results of time off types job
	 * 
	 * @param {String} jobId The ID of the job.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementIntegrationsHrisTimeofftypesJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get management unit
	 * settings.shortTermForecasting is deprecated and now lives on the business unit
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Deprecated: Instead use /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes. Get the list of activity codes
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getWorkforcemanagementManagementunitActivitycodes(managementUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of user schedule adherence records for the requested management unit
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service.  For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets all the shift trades for a given agent
	 * Deprecated. Use new route instead (/businessunits/{businessUnitId}/shifttrading/trades/query/jobs)
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} agentId The agent id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getWorkforcemanagementManagementunitAgentShifttrades(managementUnitId, agentId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a summary of all shift trades in the matched state
	 * Deprecated. Use new route instead (/businessunits/{businessUnitId}/shifttrading/weeks/summary/jobs)
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getWorkforcemanagementManagementunitShifttradesMatched(managementUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets list of users available for whom you can send direct shift trade requests
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementManagementunitShifttradesUsers(managementUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a time off limit object
	 * Returns properties of time off limit object, but not daily values.
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} timeOffLimitId The ID of the time off limit to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a list of time off limit objects under management unit.
	 * Currently only one time off limit object is allowed under management unit, so the list contains either 0 or 1 element.
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementManagementunitTimeofflimits(managementUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a time off plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {String} timeOffPlanId The ID of the time off plan to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a list of time off plans
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementManagementunitTimeoffplans(managementUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a time off request
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} userId The userId to whom the Time Off Request applies.
	 * @param {String} timeOffRequestId Time Off Request Id
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves time off limit, allocated and waitlisted values according to specific time off request
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} userId The userId to whom the time off request applies.
	 * @param {String} timeOffRequestId The ID of the time off request, which dates and activityCodeId determine limit values to retrieve
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits(managementUnitId, userId, timeOffRequestId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of time off requests for a given user
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} userId The userId to whom the Time Off Request applies.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementManagementunitUserTimeoffrequests(managementUnitId, userId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get users in the management unit
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementManagementunitUsers(managementUnitId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets all the shift trades for a given week
	 * Deprecated. Use new route instead (/businessunits/{businessUnitId}/shifttrading/trades/evaluate/jobs)
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.evaluateMatches Whether to evaluate the matches for violations (default to true)
	 * @param {Boolean} opts.includeCrossWeekShifts Whether to include all shift trades with either the initiating shift or the receiving shift in the week (default to false)
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.includeOnly limit response to the specified fields
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a work plan rotation
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanRotationId The ID of the work plan rotation to fetch
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get work plan rotations
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand 
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get work plans
	 * "expand=details" is deprecated
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Include to access additional data on the work plans
	 * @param {Array.<String>} opts.exclude Exclude specific data on the work plans from the response
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get management units across divisions
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.divisionId The divisionIds to filter by. If omitted, will return all divisions
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of notifications for the current user
	 * Notifications are only initially sent if you have the relevant Notify and Edit permissions
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementNotifications(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets an agent's schedule bidding preference
	 * 
	 * @param {String} bidId The ID of the schedule bid
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementSchedulebidPreference(bidId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementSchedulebidPreference';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/schedulebids/{bidId}/preference', 
			'GET', 
			{ 'bidId': bidId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets an agent's schedule sets for a bid
	 * 
	 * @param {String} bidId The ID of the schedule bid
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementSchedulebidSchedulesets(bidId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling getWorkforcemanagementSchedulebidSchedulesets';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/schedulebids/{bidId}/schedulesets', 
			'GET', 
			{ 'bidId': bidId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets the list of schedule bids that belong to an agent. It will fetch an open bid or upcoming bid or a bid that is closed recently
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementSchedulebids(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/schedulebids', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get status of the scheduling job
	 * 
	 * @param {String} jobId The id of the scheduling job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementSchedulingjob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets all of my shift trades
	 * Deprecated. Use new route instead (/shifttrading/trades/mine/query/jobs)
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	getWorkforcemanagementShifttrades(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View result of update trade operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} tradeId The ID of the shift trade to update
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementShifttradingTradeJob(tradeId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling getWorkforcemanagementShifttradingTradeJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementShifttradingTradeJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/jobs/{jobId}', 
			'GET', 
			{ 'tradeId': tradeId,'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View result of match shift trade operation. Only the receiving user who started the operation can query the status.
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} tradeId The ID of the shift trade to update
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementShifttradingTradeMatchJob(tradeId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling getWorkforcemanagementShifttradingTradeMatchJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementShifttradingTradeMatchJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/match/jobs/{jobId}', 
			'GET', 
			{ 'tradeId': tradeId,'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View result of update trade state operation. Only the user who started the operation can query the status.
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} tradeId The ID of the shift trade to update
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementShifttradingTradeStateJob(tradeId, jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling getWorkforcemanagementShifttradingTradeStateJob';
		}
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementShifttradingTradeStateJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/state/jobs/{jobId}', 
			'GET', 
			{ 'tradeId': tradeId,'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View result of create trade operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementShifttradingTradesJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementShifttradingTradesJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrading/trades/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * View results of retrieve all my shift trade operation. Only the user who started the operation can query the status
	 * Job details are only retained if the initial request returned a 202 ACCEPTED response
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementShifttradingTradesMineQueryJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementShifttradingTradesMineQueryJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrading/trades/mine/query/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request to fetch the status of the historical shrinkage query
	 * 
	 * @param {String} jobId jobId
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementShrinkageJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of user schedule adherence records for the requested team
	 * 
	 * @param {String} teamId The ID of the team
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementTeamAdherence(teamId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'teamId' is set
		if (teamId === undefined || teamId === null || teamId === '') {
			throw 'Missing the required parameter "teamId" when calling getWorkforcemanagementTeamAdherence';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/teams/{teamId}/adherence', 
			'GET', 
			{ 'teamId': teamId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query the results of time off types job
	 * 
	 * @param {String} jobId The ID of the job.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementTimeoffbalanceJob(jobId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a time off request for the current user
	 * 
	 * @param {String} timeOffRequestId The ID of the time off request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementTimeoffrequest(timeOffRequestId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get the daily waitlist positions of a time off request for the current user
	 * 
	 * @param {String} timeOffRequestId The ID of the time off request
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementTimeoffrequestWaitlistpositions(timeOffRequestId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get a list of time off requests for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementTimeoffrequests(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get availability management unit's settings for agent
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementUnavailabletimesSettings(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/unavailabletimes/settings', 
			'GET', 
			{  },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query agent unavailable times validation job
	 * 
	 * @param {String} jobId The ID of the job
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementUnavailabletimesValidationJob(jobId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'jobId' is set
		if (jobId === undefined || jobId === null || jobId === '') {
			throw 'Missing the required parameter "jobId" when calling getWorkforcemanagementUnavailabletimesValidationJob';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/unavailabletimes/validation/jobs/{jobId}', 
			'GET', 
			{ 'jobId': jobId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get work plan bid ranks for a user
	 * 
	 * @param {String} userId The userId to whom the work plan bid ranks apply.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementUserWorkplanbidranks(userId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets an agent's work plan bidding preference
	 * 
	 * @param {String} bidId The ID of the work plan bid
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementWorkplanbidPreferences(bidId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets an agent's work plans for a bid
	 * 
	 * @param {String} bidId The ID of the work plan bid
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementWorkplanbidWorkplans(bidId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets the list of work plan bids that belong to an agent
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	getWorkforcemanagementWorkplanbids(opts) { 
		opts = opts || {};
		

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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an adherence explanation
	 * 
	 * @param {String} agentId The ID of the agent to query
	 * @param {String} explanationId The ID of the explanation to update
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementAgentAdherenceExplanation(agentId, explanationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update my alternative shifts trade by trade ID
	 * 
	 * @param {String} tradeId The ID of the alternative shift trade
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementAlternativeshiftsTrade(tradeId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk update alternative shift trade states
	 * 
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementAlternativeshiftsTradesStateJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeSchedulingDefaultMessageSeverities Whether to include scheduling default message severities
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunit(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			{ 'includeSchedulingDefaultMessageSeverities': opts['includeSchedulingDefaultMessageSeverities'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an activity code
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {String} activityCodeId The ID of the activity code to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an activity plan
	 * If a job associated with the activity plan is in Processing state the activity plan cannot be updated
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} activityPlanId The ID of the activity plan to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitActivityplan(businessUnitId, activityPlanId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update alternative shifts settings for a business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitAlternativeshiftsSettings(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a capacity plan configuration
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} capacityPlanId The ID of the capacity plan
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitCapacityplan(businessUnitId, capacityPlanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitCapacityplan';
		}
		// verify the required parameter 'capacityPlanId' is set
		if (capacityPlanId === undefined || capacityPlanId === null || capacityPlanId === '') {
			throw 'Missing the required parameter "capacityPlanId" when calling patchWorkforcemanagementBusinessunitCapacityplan';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitCapacityplan';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'capacityPlanId': capacityPlanId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update minimum staffing settings for a business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitMinimumstaffingSettings(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitMinimumstaffingSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitMinimumstaffingSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/minimumstaffing/settings', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the opportunity
	 * Only opportunities with Draft status can be updated.
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} opportunityId The ID of the opportunity
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitOpportunity(businessUnitId, opportunityId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitOpportunity';
		}
		// verify the required parameter 'opportunityId' is set
		if (opportunityId === undefined || opportunityId === null || opportunityId === '') {
			throw 'Missing the required parameter "opportunityId" when calling patchWorkforcemanagementBusinessunitOpportunity';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitOpportunity';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/{opportunityId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'opportunityId': opportunityId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates the planning group
	 * If the request body contains queue references in route paths, routing:queue:view is required in each referenced queues division.
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} planningGroupId The ID of a planning group to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a schedule bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid
	 * @param {Object} body The schedule bid to be updated
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitSchedulebid(businessUnitId, bidId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitSchedulebid';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling patchWorkforcemanagementBusinessunitSchedulebid';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitSchedulebid';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a schedule bid group by bid group Id
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid associated with the bid groups
	 * @param {String} bidGroupId Schedule Bid Group id
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitSchedulebidGroup(businessUnitId, bidId, bidGroupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitSchedulebidGroup';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling patchWorkforcemanagementBusinessunitSchedulebidGroup';
		}
		// verify the required parameter 'bidGroupId' is set
		if (bidGroupId === undefined || bidGroupId === null || bidGroupId === '') {
			throw 'Missing the required parameter "bidGroupId" when calling patchWorkforcemanagementBusinessunitSchedulebidGroup';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitSchedulebidGroup';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups/{bidGroupId}', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId,'bidGroupId': bidGroupId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Overrides the assigned schedule bid for the specified agents
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid associated with the bid groups
	 * @param {String} bidGroupId The ID of the schedule bid group
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences(businessUnitId, bidId, bidGroupId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences';
		}
		// verify the required parameter 'bidGroupId' is set
		if (bidGroupId === undefined || bidGroupId === null || bidGroupId === '') {
			throw 'Missing the required parameter "bidGroupId" when calling patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitSchedulebidGroupPreferences';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups/{bidGroupId}/preferences', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId,'bidGroupId': bidGroupId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update scheduler settings for a business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitSchedulerSettings(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling patchWorkforcemanagementBusinessunitSchedulerSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementBusinessunitSchedulerSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduler/settings', 
			'PATCH', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Mark a schedule run as applied
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} runId The ID of the schedule run
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates a service goal template
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {String} serviceGoalTemplateId The ID of a service goal template to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates a staffing group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} staffingGroupId The ID of the staffing group to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates a time-off plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffPlanId The ID of the time-off plan to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The id of the workplanbid
	 * @param {Object} body The work plan bid to be updated
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a bid group by bid group Id
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {String} bidGroupId Work Plan Bid Group id
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Overrides the assigned work plan for the specified agents
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {String} bidGroupId The ID of the work plan bid group
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences(businessUnitId, bidId, bidGroupId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update the requested management unit
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementManagementunit(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update agent configurations
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementManagementunitAgents(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates agent work plan configuration
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementManagementunitAgentsWorkplansBulk(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates a time off limit object.
	 * Updates time off limit object properties, but not daily values.
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} timeOffLimitId The id of time off limit object to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates a time off plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {String} timeOffPlanId The ID of the time off plan to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Set integration status for a time off request.
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} timeOffRequestId The ID of the time off request.
	 * @param {String} userId The ID of user to whom the time off request belongs.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus(managementUnitId, timeOffRequestId, userId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update management unit availability settings
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementManagementunitUnavailabletimesSettings(managementUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'managementUnitId' is set
		if (managementUnitId === undefined || managementUnitId === null || managementUnitId === '') {
			throw 'Missing the required parameter "managementUnitId" when calling patchWorkforcemanagementManagementunitUnavailabletimesSettings';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementManagementunitUnavailabletimesSettings';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/managementunits/{managementUnitId}/unavailabletimes/settings', 
			'PATCH', 
			{ 'managementUnitId': managementUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a time off request
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} userId The id of the user the requested time off request belongs to
	 * @param {String} timeOffRequestId The id of the time off request to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates a shift trade. This route can only be called by the initiating agent
	 * Deprecated. Use new route instead (/shifttrading/trades/{tradeId}/jobs)
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} tradeId The ID of the shift trade to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	patchWorkforcemanagementManagementunitWeekShifttrade(managementUnitId, weekDateId, tradeId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a work plan rotation
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanRotationId The ID of the work plan rotation to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update a time off request for the current user
	 * 
	 * @param {String} timeOffRequestId The ID of the time off request
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementTimeoffrequest(timeOffRequestId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update agent unavailable times
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementUnavailabletimes(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling patchWorkforcemanagementUnavailabletimes';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/unavailabletimes', 
			'PATCH', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update work plan bid ranks for a user
	 * 
	 * @param {String} userId The userId to whom the work plan bid ranks apply.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementUserWorkplanbidranks(userId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update bulk work plan bid ranks on users. Max 50 users can be updated at a time.
	 * 
	 * @param {Array.<Object>} body Users
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementUsersWorkplanbidranksBulk(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an agent's work plan bidding preference
	 * 
	 * @param {String} bidId The ID of the work plan bid
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	patchWorkforcemanagementWorkplanbidPreferences(bidId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Submit an adherence explanation for the current user
	 * 
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAdherenceExplanations(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query adherence explanations for the current user
	 * 
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request a historical adherence report in bulk
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAdherenceHistoricalBulk(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add an adherence explanation for the requested user
	 * 
	 * @param {String} agentId The ID of the agent to query
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgentAdherenceExplanations(agentId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get agent unavailable times
	 * 
	 * @param {String} agentId The ID of the agent
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgentUnavailabletimesQuery(agentId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'agentId' is set
		if (agentId === undefined || agentId === null || agentId === '') {
			throw 'Missing the required parameter "agentId" when calling postWorkforcemanagementAgentUnavailabletimesQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgentUnavailabletimesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/{agentId}/unavailabletimes/query', 
			'POST', 
			{ 'agentId': agentId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Move agents in and out of management unit
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgents(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query integrations for agents
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgentsIntegrationsHrisQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request an agent historical adherence report
	 * The maximum supported range for historical adherence queries is 31 days, or 7 days when the expand query parameter includes any of the following: exceptionInfo, actuals, scheduledActivities
	 * @param {Object} opts Optional parameters
	 * @param {Array.<String>} opts.expand Which fields, if any, to expand with. wfm:AgentHistoricalAdherenceConformance:view permission is required for conformance, and wfm:agentSchedule:view permission is required for scheduledActivities.
	 * @param {Object} opts.body body
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgentsMeAdherenceHistoricalJobs(opts) { 
		opts = opts || {};
		

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/me/adherence/historical/jobs', 
			'POST', 
			{  },
			{ 'expand': this.apiClient.buildCollectionParam(opts['expand'], 'multi') },
			{  },
			{  },
			opts['body'], 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get agent possible work shifts for requested time frame
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgentsMePossibleworkshifts(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk add enrollments to opportunities for the authenticated agent
	 * Allows an agent to enroll in opportunities. This endpoint can return partial success.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/opportunities/enrollments/bulk/add', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk update enrollment status for the authenticated agent
	 * Allows an agent to update the status of their enrollments (e.g. withdraw). Returns partial success if some enrollments cannot be updated.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgentsOpportunitiesEnrollmentsBulkStatusesUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/opportunities/enrollments/bulk/statuses/update', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query opportunities for the authenticated agent
	 * Queries within the specified date range. Each opportunity includes the agents enrollment details if they have enrolled.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand List of resources to expand
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgentsOpportunitiesQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgentsOpportunitiesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agents/opportunities/query', 
			'POST', 
			{  },
			{ 'expand': opts['expand'],'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch agent schedules for the logged in user's management unit
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgentschedulesManagementunitsMine(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementAgentschedulesManagementunitsMine';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/agentschedules/managementunits/mine', 
			'POST', 
			{  },
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get published schedule for the current user
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAgentschedulesMine(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request a list of alternative shift offers for a given schedule
	 * 
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAlternativeshiftsOffersJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request a search of alternative shift offers for a given shift
	 * 
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAlternativeshiftsOffersSearchJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create my alternative shift trade using an existing offer's jobId
	 * 
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementAlternativeshiftsTrades(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new activity code
	 * 
	 * @param {String} businessUnitId The ID of the business unit, or 'mine' for the business unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitActivitycodes(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Run an activity plan manually
	 * Triggers a job running the activity plan. The activity plan cannot be updated until the job completes
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} activityPlanId The ID of the activity plan to run
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitActivityplanRunsJobs(businessUnitId, activityPlanId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create an activity plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitActivityplans(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * List alternative shifts trades for a given management unit or agent
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Copy a capacity plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} capacityPlanId The ID of the capacity plan
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitCapacityplanCopy(businessUnitId, capacityPlanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitCapacityplanCopy';
		}
		// verify the required parameter 'capacityPlanId' is set
		if (capacityPlanId === undefined || capacityPlanId === null || capacityPlanId === '') {
			throw 'Missing the required parameter "capacityPlanId" when calling postWorkforcemanagementBusinessunitCapacityplanCopy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitCapacityplanCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/copy', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'capacityPlanId': capacityPlanId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Regenerate requirements for capacity plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} capacityPlanId The ID of the capacity plan
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate(businessUnitId, capacityPlanId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate';
		}
		// verify the required parameter 'capacityPlanId' is set
		if (capacityPlanId === undefined || capacityPlanId === null || capacityPlanId === '') {
			throw 'Missing the required parameter "capacityPlanId" when calling postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/requirement/generate', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'capacityPlanId': capacityPlanId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create staffing group allocations for a capacity plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} capacityPlanId The ID of the capacity plan
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations(businessUnitId, capacityPlanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations';
		}
		// verify the required parameter 'capacityPlanId' is set
		if (capacityPlanId === undefined || capacityPlanId === null || capacityPlanId === '') {
			throw 'Missing the required parameter "capacityPlanId" when calling postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocations', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'capacityPlanId': capacityPlanId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query staffing groups allocations history for a capacity plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} capacityPlanId The ID of the capacity plan
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery(businessUnitId, capacityPlanId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery';
		}
		// verify the required parameter 'capacityPlanId' is set
		if (capacityPlanId === undefined || capacityPlanId === null || capacityPlanId === '') {
			throw 'Missing the required parameter "capacityPlanId" when calling postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocationshistory/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'capacityPlanId': capacityPlanId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Force regenerate the latest long term staffing requirements for a business unit
	 * 
	 * @param {String} businessUnitId 
	 * @param {String} weekDateId weekDateId of forecast, format yyyy-MM-dd. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} forecastId forecastId of forecast
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate(businessUnitId, weekDateId, forecastId, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate';
		}
		// verify the required parameter 'weekDateId' is set
		if (weekDateId === undefined || weekDateId === null) {
			throw 'Missing the required parameter "weekDateId" when calling postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate';
		}
		// verify the required parameter 'forecastId' is set
		if (forecastId === undefined || forecastId === null || forecastId === '') {
			throw 'Missing the required parameter "forecastId" when calling postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplanning/longtermrequirements/automaticbestmethod/weeks/{weekDateId}/forecasts/{forecastId}/forceregenerate', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'weekDateId': weekDateId,'forecastId': forecastId },
			{  },
			{  },
			{  },
			null, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new capacity plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitCapacityplans(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitCapacityplans';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitCapacityplans';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete capacity plans in a business unit
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitCapacityplansBulkRemove(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitCapacityplansBulkRemove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitCapacityplansBulkRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/bulk/remove', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get intraday data for the given date for the requested planningGroupIds
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk add opportunities
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitOpportunitiesBulkAdd(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitOpportunitiesBulkAdd';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitOpportunitiesBulkAdd';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/bulk/add', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk publish opportunities
	 * Published opportunities become available for agent enrollment when they open. Returns partial success if some opportunities cannot be published.
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitOpportunitiesBulkPublish(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitOpportunitiesBulkPublish';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitOpportunitiesBulkPublish';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/bulk/publish', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk remove opportunities
	 * This operation is permanent and cannot be undone. Returns partial success if some opportunities cannot be removed.
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitOpportunitiesBulkRemove(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitOpportunitiesBulkRemove';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitOpportunitiesBulkRemove';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/bulk/remove', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk update opportunities status
	 * If status is Closed, pending enrollments are automatically denied; approved enrollments remain in schedules. Returns partial success if some opportunities cannot be updated.
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitOpportunitiesBulkStatusesUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/bulk/statuses/update', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk update enrollment status
	 * Updates the status of enrollments (approve/deny). Returns partial success if some enrollments cannot be updated.
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsBulkStatusesUpdate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/enrollments/bulk/statuses/update', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query enrollments
	 * For more information about opportunities, use the expand parameter.
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.expand List of resources to expand
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitOpportunitiesEnrollmentsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/enrollments/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{ 'expand': opts['expand'],'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query opportunities by external activity IDs
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitOpportunitiesExternalactivitiesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/externalactivities/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query opportunities within the specified date range
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitOpportunitiesQuery(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitOpportunitiesQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitOpportunitiesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/opportunities/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{ 'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Adds a new planning group
	 * If the request body contains queue references in route paths, routing:queue:view is required in each referenced queues division.
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitPlanninggroups(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Copy a schedule bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid to copy
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitSchedulebidCopy(businessUnitId, bidId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitSchedulebidCopy';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling postWorkforcemanagementBusinessunitSchedulebidCopy';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitSchedulebidCopy';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/copy', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add a bid group in a given schedule bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the schedule bid associated with the bid groups
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitSchedulebidGroups(businessUnitId, bidId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitSchedulebidGroups';
		}
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling postWorkforcemanagementBusinessunitSchedulebidGroups';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitSchedulebidGroups';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/{bidId}/groups', 
			'POST', 
			{ 'businessUnitId': businessUnitId,'bidId': bidId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new schedule bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The schedule bid to be created
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitSchedulebids(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitSchedulebids';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitSchedulebids';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetch all the agents with effective schedule set for the given BU
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitSchedulebidsEffectiveschedulesets(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitSchedulebidsEffectiveschedulesets';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitSchedulebidsEffectiveschedulesets';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/schedulebids/effectiveschedulesets', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Adds a new service goal template
	 * 
	 * @param {String} businessUnitId The ID of the business unit.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Queries and evaluates against shift trade configuration shift trades in a management unit per week
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitShifttradingTradesEvaluateJobs(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitShifttradingTradesEvaluateJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitShifttradingTradesEvaluateJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/evaluate/jobs', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Queries shift trades in a management unit per user
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitShifttradingTradesQueryJobs(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitShifttradingTradesQueryJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitShifttradingTradesQueryJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/query/jobs', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Bulk update multiple trade states. Permits a supervisor to approve or deny multiple trades.
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitShifttradingTradesStateBulkJobs(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitShifttradingTradesStateBulkJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitShifttradingTradesStateBulkJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/trades/state/bulk/jobs', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Start an async job to find potential shift trade matches for the current receiving user
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJobs(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitShifttradingUnmatchedSearchJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/unmatched/search/jobs', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves the summary of shift trades in a matched state per week
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitShifttradingWeeksSummaryJobs(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitShifttradingWeeksSummaryJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitShifttradingWeeksSummaryJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/shifttrading/weeks/summary/jobs', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{ 'forceAsync': opts['forceAsync'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Creates a new staffing group
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitStaffinggroups(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets a list of planning group to staffing groups list association
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitStaffinggroupsPlanninggroupsQuery(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitStaffinggroupsPlanninggroupsQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitStaffinggroupsPlanninggroupsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/planninggroups/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Gets staffing group associations for a list of user IDs
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Creates a new time-off limit object
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitTimeofflimits(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves time-off limit related values based on a given set of filters.
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Creates a new time-off plan
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitTimeoffplans(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get agent schedule generation unavailable times
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitUnavailabletimesSchedulesQuery(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitUnavailabletimesSchedulesQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitUnavailabletimesSchedulesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/unavailabletimes/schedules/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query availability management units settings
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitUnavailabletimesSettingsQuery(businessUnitId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'businessUnitId' is set
		if (businessUnitId === undefined || businessUnitId === null || businessUnitId === '') {
			throw 'Missing the required parameter "businessUnitId" when calling postWorkforcemanagementBusinessunitUnavailabletimesSettingsQuery';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunitUnavailabletimesSettingsQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits/{businessUnitId}/unavailabletimes/settings/query', 
			'POST', 
			{ 'businessUnitId': businessUnitId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Copy a schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule to copy
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekScheduleCopy(businessUnitId, weekId, scheduleId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request a daily recalculation of the performance prediction for the associated schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the performance prediction belongs
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format
	 * @param {String} scheduleId The ID of the schedule the performance prediction belongs to
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations(businessUnitId, weekId, scheduleId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Upload daily activity changes to be able to request a performance prediction recalculation
	 * 
	 * @param {String} businessUnitId The ID of the business unit to which the performance prediction belongs
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format
	 * @param {String} scheduleId The ID of the schedule the performance prediction belongs to
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl(businessUnitId, weekId, scheduleId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Start a rescheduling run
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekScheduleReschedule(businessUnitId, weekId, scheduleId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Starts processing a schedule update
	 * Call after uploading the schedule data to the url supplied by the /update/uploadurl route
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekScheduleUpdate(businessUnitId, weekId, scheduleId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Creates a signed upload URL for updating a schedule
	 * Once the upload is complete, call the /{scheduleId}/update route to start the schedule update process
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} scheduleId The ID of the schedule
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl(businessUnitId, weekId, scheduleId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a blank schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekSchedules(businessUnitId, weekId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Generate a schedule
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekSchedulesGenerate(businessUnitId, weekId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Starts processing a schedule import
	 * Call after uploading the schedule data to the url supplied by the /import/uploadurl route
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body 
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekSchedulesImport(businessUnitId, weekId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Creates a signed upload URL for importing a schedule
	 * Once the upload is complete, call the /import route to start the schedule import process
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} weekId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl(businessUnitId, weekId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Starts importing the uploaded short term forecast
	 * Call after uploading the forecast data to the url supplied by the /import/uploadurl route
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekShorttermforecastsImport(businessUnitId, weekDateId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Creates a signed upload URL for importing a short term forecast
	 * Once the upload is complete, call the /import route to start the short term forecast import process
	 * @param {String} businessUnitId The ID of the business unit to which the forecast belongs
	 * @param {String} weekDateId First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl(businessUnitId, weekDateId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Copy a work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The ID of the work plan bid to copy
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWorkplanbidCopy(businessUnitId, bidId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add a bid group in a given work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} bidId The work plan bid id of the bid groups
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWorkplanbidGroups(businessUnitId, bidId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new work plan bid
	 * 
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {Object} body The work plan bid to be created
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunitWorkplanbids(businessUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add a new business unit
	 * It may take a minute or two for a new business unit to be available for api operations
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.includeSchedulingDefaultMessageSeverities Whether to include scheduling default message severities
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementBusinessunits(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementBusinessunits';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/businessunits', 
			'POST', 
			{  },
			{ 'includeSchedulingDefaultMessageSeverities': opts['includeSchedulingDefaultMessageSeverities'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a newly generated calendar link for the current user; if the current user has previously generated one, the generated link will be returned
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {String} opts.language A language tag (which is sometimes referred to as a locale identifier) to use to localize default activity code names in the ics-formatted calendar (default to en-US)
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Delete the list of the historical data import entries
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementHistoricaldataBulkRemoveJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Trigger validation process for historical import
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementHistoricaldataValidate(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get list of time off types configured in integration
	 * 
	 * @param {String} hrisIntegrationId The ID of the HRIS integration for which time off types are queried.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementIntegrationsHriTimeofftypesJobs(hrisIntegrationId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get agents work plans configuration
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request a historical adherence report
	 * The maximum supported range for historical adherence queries is 31 days, or 7 days with includeExceptions = true
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitHistoricaladherencequery(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Move the requested management unit to a new business unit
	 * Returns status 200 if the management unit is already in the requested business unit
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitMove(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query published schedules for given given time range for set of users
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postWorkforcemanagementManagementunitSchedulesSearch(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request a historical shrinkage report
	 * The maximum supported range for historical shrinkage queries is up to 32 days. Historical Shrinkage for a given date range can be queried in two modes - granular and aggregated. To see granular shrinkage information, provide granularity in the request body. 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitShrinkageJobs(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Creates a new time off limit object under management unit.
	 * Only one limit object is allowed under management unit, so an attempt to create second object will fail.
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitTimeofflimits(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves time off limit related values based on a given set of filters.
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitTimeofflimitsValuesQuery(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Creates a new time off plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitTimeoffplans(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new time off request
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitTimeoffrequests(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves integration statuses for a list of time off requests
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Fetches time off requests matching the conditions specified in the request body
	 * Request body requires one of the following: statuses == [Pending] or date range to be specified and less than or equal to 33 days. All other fields are filters
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves daily waitlist position for a list of time off requests
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query time off balances for a given user for specified activity code and dates
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {String} userId The ID of the user
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitUserTimeoffbalanceJobs(managementUnitId, userId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query time off balances for dates spanned by a given time off request
	 * 
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} userId The userId to whom the time off request applies.
	 * @param {String} timeOffRequestId The time off request id.
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs(managementUnitId, userId, timeOffRequestId, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Estimates available time off for an agent
	 * 
	 * @param {String} managementUnitId The ID of the management unit
	 * @param {String} userId The id of the user for whom the time off request estimate is requested
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.includeOnly Limit response to the specified field
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate(managementUnitId, userId, body, opts) { 
		opts = opts || {};
		
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
			{ 'includeOnly': opts['includeOnly'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Matches a shift trade. This route can only be called by the receiving agent
	 * Deprecated. Use new route instead (/shifttrading/trades/{tradeId}/match/jobs)
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {String} tradeId The ID of the shift trade to update
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postWorkforcemanagementManagementunitWeekShifttradeMatch(managementUnitId, weekDateId, tradeId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Adds a shift trade
	 * Deprecated. Use new route instead (/shifttrading/trades/jobs)
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
	 */
	postWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Searches for potential shift trade matches for the current agent
	 * Deprecated. Use new route instead (/businessunits/{businessUnitId}/shifttrading/unmatched/search/jobs)
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates the state of a batch of shift trades
	 * Admin functionality is not supported with "mine". Deprecated. Use new route instead (/businessunits/{buId}/shifttrading/trades/state/bulk/jobs)
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} weekDateId The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 * @deprecated
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a copy of work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanId The ID of the work plan to create a copy
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitWorkplanCopy(managementUnitId, workPlanId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
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
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a copy of work plan rotation
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {String} workPlanRotationId The ID of the work plan rotation to create a copy
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitWorkplanrotationCopy(managementUnitId, workPlanRotationId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new work plan rotation
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunitWorkplanrotations(managementUnitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a new work plan
	 * 
	 * @param {String} managementUnitId The ID of the management unit, or 'mine' for the management unit of the logged-in user.
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.validationMode Allows to create work plan even if the validation result is invalid
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add a management unit
	 * It may take a minute or two for a new management unit to be available for api operations
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementManagementunits(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Mark a list of notifications as read or unread
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementNotificationsUpdate(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get published schedule for the current user
	 * 
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.body body
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Updates a shift trade. This route can only be called by the initiating user
	 * 
	 * @param {String} tradeId The ID of the shift trade to update
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementShifttradingTradeJobs(tradeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling postWorkforcemanagementShifttradingTradeJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementShifttradingTradeJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/jobs', 
			'POST', 
			{ 'tradeId': tradeId },
			{ 'forceAsync': opts['forceAsync'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Matches a shift trade. This route can only be called by the receiving user
	 * 
	 * @param {String} tradeId The ID of the shift trade to match
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementShifttradingTradeMatchJobs(tradeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling postWorkforcemanagementShifttradingTradeMatchJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementShifttradingTradeMatchJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/match/jobs', 
			'POST', 
			{ 'tradeId': tradeId },
			{ 'forceAsync': opts['forceAsync'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update trade state by a user
	 * 
	 * @param {String} tradeId The ID of the shift trade to update state
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementShifttradingTradeStateJobs(tradeId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'tradeId' is set
		if (tradeId === undefined || tradeId === null || tradeId === '') {
			throw 'Missing the required parameter "tradeId" when calling postWorkforcemanagementShifttradingTradeStateJobs';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementShifttradingTradeStateJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrading/trades/{tradeId}/state/jobs', 
			'POST', 
			{ 'tradeId': tradeId },
			{ 'forceAsync': opts['forceAsync'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Add a shift trade job
	 * 
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementShifttradingTradesJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementShifttradingTradesJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrading/trades/jobs', 
			'POST', 
			{  },
			{ 'forceAsync': opts['forceAsync'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieve all my shift trades where I am either the initiating or receiving user
	 * 
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Boolean} opts.forceAsync Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
	 * @param {Boolean} opts.forceDownloadService Force the result of this operation to be sent via download service. For testing/app development purposes
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementShifttradingTradesMineQueryJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementShifttradingTradesMineQueryJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/shifttrading/trades/mine/query/jobs', 
			'POST', 
			{  },
			{ 'forceAsync': opts['forceAsync'],'forceDownloadService': opts['forceDownloadService'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request a teams historical adherence report
	 * The maximum supported range for historical adherence queries is 31 days, or 7 days with includeExceptions = true
	 * @param {String} teamId The ID of the team
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementTeamAdherenceHistorical(teamId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Request a historical shrinkage report
	 * The maximum supported range for historical shrinkage queries is up to 32 days
	 * @param {String} teamId The ID of the team
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementTeamShrinkageJobs(teamId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Query time off balances for the current user for specified activity code and dates
	 * 
	 * @param {Object} body The request body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementTimeoffbalanceJobs(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Queries available time off for the current user
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementTimeofflimitsAvailableQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Create a time off request for the current user
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementTimeoffrequests(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Estimates available time off for current user
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object} opts.includeOnly Limit response to the specified field
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementTimeoffrequestsEstimate(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementTimeoffrequestsEstimate';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/timeoffrequests/estimate', 
			'POST', 
			{  },
			{ 'includeOnly': opts['includeOnly'] },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Retrieves integration statuses for a list of current user time off requests
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery(body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Get agent unavailable times
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementUnavailabletimesQuery(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementUnavailabletimesQuery';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/unavailabletimes/query', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Validates proposed changes to an agent's unavailable time spans against scheduling rules and constraints for a specific week
	 * 
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	postWorkforcemanagementUnavailabletimesValidationJobs(body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling postWorkforcemanagementUnavailabletimesValidationJobs';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/unavailabletimes/validation/jobs', 
			'POST', 
			{  },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update integrations for agent
	 * 
	 * @param {String} agentId The ID of the agent
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putWorkforcemanagementAgentIntegrationsHris(agentId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Sets daily values for a date range of time-off limit object
	 * Note that only limit daily values can be set through API, allocated and waitlisted values are read-only for time-off limit API
	 * @param {String} businessUnitId The ID of the business unit
	 * @param {String} timeOffLimitId The ID of the time-off limit object to set values for
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putWorkforcemanagementBusinessunitTimeofflimitValues(businessUnitId, timeOffLimitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Sets daily values for a date range of time off limit object
	 * Note that only limit daily values can be set through API, allocated and waitlisted values are read-only for time off limit API
	 * @param {String} managementUnitId The ID of the management unit.
	 * @param {String} timeOffLimitId The ID of the time off limit object to set values for
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putWorkforcemanagementManagementunitTimeofflimitValues(managementUnitId, timeOffLimitId, body, opts) { 
		opts = opts || {};
		
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
			['application/json'],
			opts['customHeaders']
		);
	}

	/**
	 * Update an agent's schedule set preference
	 * 
	 * @param {String} bidId The ID of the schedule bid
	 * @param {Object} body body
	 * @param {Object} opts Optional parameters
	 * @param {Object.<string, string>} opts.customHeaders Per-request HTTP headers
	 */
	putWorkforcemanagementSchedulebidPreference(bidId, body, opts) { 
		opts = opts || {};
		
		// verify the required parameter 'bidId' is set
		if (bidId === undefined || bidId === null || bidId === '') {
			throw 'Missing the required parameter "bidId" when calling putWorkforcemanagementSchedulebidPreference';
		}
		// verify the required parameter 'body' is set
		if (body === undefined || body === null) {
			throw 'Missing the required parameter "body" when calling putWorkforcemanagementSchedulebidPreference';
		}

		return this.apiClient.callApi(
			'/api/v2/workforcemanagement/schedulebids/{bidId}/preference', 
			'PUT', 
			{ 'bidId': bidId },
			{  },
			{  },
			{  },
			body, 
			['PureCloud OAuth'], 
			['application/json'],
			['application/json'],
			opts['customHeaders']
		);
	}

}


export default WorkforceManagementApi;
