---
title: WorkforceManagementApi
---
# platformClient.WorkforceManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteWorkforcemanagementBusinessunit**](WorkforceManagementApi.html#deleteWorkforcemanagementBusinessunit) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId} | Delete business unit
[**deleteWorkforcemanagementBusinessunitActivitycode**](WorkforceManagementApi.html#deleteWorkforcemanagementBusinessunitActivitycode) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId} | Deletes an activity code
[**deleteWorkforcemanagementBusinessunitPlanninggroup**](WorkforceManagementApi.html#deleteWorkforcemanagementBusinessunitPlanninggroup) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId} | Deletes the planning group
[**deleteWorkforcemanagementBusinessunitSchedulingRun**](WorkforceManagementApi.html#deleteWorkforcemanagementBusinessunitSchedulingRun) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId} | Cancel a scheduling run
[**deleteWorkforcemanagementBusinessunitServicegoaltemplate**](WorkforceManagementApi.html#deleteWorkforcemanagementBusinessunitServicegoaltemplate) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId} | Delete a service goal template
[**deleteWorkforcemanagementBusinessunitWeekSchedule**](WorkforceManagementApi.html#deleteWorkforcemanagementBusinessunitWeekSchedule) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId} | Delete a schedule
[**deleteWorkforcemanagementBusinessunitWeekShorttermforecast**](WorkforceManagementApi.html#deleteWorkforcemanagementBusinessunitWeekShorttermforecast) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId} | Delete a short term forecast
[**deleteWorkforcemanagementCalendarUrlIcs**](WorkforceManagementApi.html#deleteWorkforcemanagementCalendarUrlIcs) | **DELETE** /api/v2/workforcemanagement/calendar/url/ics | Disable generated calendar link for the current user
[**deleteWorkforcemanagementManagementunit**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunit) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId} | Delete management unit
[**deleteWorkforcemanagementManagementunitTimeofflimit**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunitTimeofflimit) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId} | Deletes a time off limit object
[**deleteWorkforcemanagementManagementunitTimeoffplan**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunitTimeoffplan) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId} | Deletes a time off plan
[**deleteWorkforcemanagementManagementunitWorkplan**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunitWorkplan) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId} | Delete a work plan
[**deleteWorkforcemanagementManagementunitWorkplanrotation**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunitWorkplanrotation) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId} | Delete a work plan rotation
[**getWorkforcemanagementAdherence**](WorkforceManagementApi.html#getWorkforcemanagementAdherence) | **GET** /api/v2/workforcemanagement/adherence | Get a list of UserScheduleAdherence records for the requested users
[**getWorkforcemanagementAdherenceExplanation**](WorkforceManagementApi.html#getWorkforcemanagementAdherenceExplanation) | **GET** /api/v2/workforcemanagement/adherence/explanations/{explanationId} | Get an adherence explanation for the current user
[**getWorkforcemanagementAdherenceExplanationsJob**](WorkforceManagementApi.html#getWorkforcemanagementAdherenceExplanationsJob) | **GET** /api/v2/workforcemanagement/adherence/explanations/jobs/{jobId} | Query the status of an adherence explanation operation. Only the user who started the operation can query the status
[**getWorkforcemanagementAdherenceHistoricalBulkJob**](WorkforceManagementApi.html#getWorkforcemanagementAdherenceHistoricalBulkJob) | **GET** /api/v2/workforcemanagement/adherence/historical/bulk/jobs/{jobId} | Request to fetch the status of the historical adherence bulk job. Only the user who started the operation can query the status
[**getWorkforcemanagementAdherenceHistoricalJob**](WorkforceManagementApi.html#getWorkforcemanagementAdherenceHistoricalJob) | **GET** /api/v2/workforcemanagement/adherence/historical/jobs/{jobId} | Query the status of a historical adherence request operation. Only the user who started the operation can query the status
[**getWorkforcemanagementAdhocmodelingjob**](WorkforceManagementApi.html#getWorkforcemanagementAdhocmodelingjob) | **GET** /api/v2/workforcemanagement/adhocmodelingjobs/{jobId} | Get status of the modeling job
[**getWorkforcemanagementAgentAdherenceExplanation**](WorkforceManagementApi.html#getWorkforcemanagementAgentAdherenceExplanation) | **GET** /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/{explanationId} | Get an adherence explanation
[**getWorkforcemanagementAgentManagementunit**](WorkforceManagementApi.html#getWorkforcemanagementAgentManagementunit) | **GET** /api/v2/workforcemanagement/agents/{agentId}/managementunit | Get the management unit to which the agent belongs
[**getWorkforcemanagementAgentsMeManagementunit**](WorkforceManagementApi.html#getWorkforcemanagementAgentsMeManagementunit) | **GET** /api/v2/workforcemanagement/agents/me/managementunit | Get the management unit to which the currently logged in agent belongs
[**getWorkforcemanagementBusinessunit**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunit) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId} | Get business unit
[**getWorkforcemanagementBusinessunitActivitycode**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitActivitycode) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId} | Get an activity code
[**getWorkforcemanagementBusinessunitActivitycodes**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitActivitycodes) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes | Get activity codes
[**getWorkforcemanagementBusinessunitIntradayPlanninggroups**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitIntradayPlanninggroups) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday/planninggroups | Get intraday planning groups for the given date
[**getWorkforcemanagementBusinessunitManagementunits**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitManagementunits) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/managementunits | Get all authorized management units in the business unit
[**getWorkforcemanagementBusinessunitPlanninggroup**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitPlanninggroup) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId} | Get a planning group
[**getWorkforcemanagementBusinessunitPlanninggroups**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitPlanninggroups) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups | Gets list of planning groups
[**getWorkforcemanagementBusinessunitSchedulingRun**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitSchedulingRun) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId} | Get a scheduling run
[**getWorkforcemanagementBusinessunitSchedulingRunResult**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitSchedulingRunResult) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}/result | Get the result of a rescheduling operation
[**getWorkforcemanagementBusinessunitSchedulingRuns**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitSchedulingRuns) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs | Get the list of scheduling runs
[**getWorkforcemanagementBusinessunitServicegoaltemplate**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitServicegoaltemplate) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId} | Get a service goal template
[**getWorkforcemanagementBusinessunitServicegoaltemplates**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitServicegoaltemplates) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates | Gets list of service goal templates
[**getWorkforcemanagementBusinessunitWeekSchedule**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekSchedule) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId} | Get the metadata for the schedule, describing which management units and agents are in the scheduleSchedule data can then be loaded with the query route
[**getWorkforcemanagementBusinessunitWeekScheduleGenerationresults**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekScheduleGenerationresults) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults | Get the generation results for a generated schedule
[**getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/headcountforecast | Get the headcount forecast by planning group for the schedule
[**getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/history/agents/{agentId} | Loads agent's schedule history.
[**getWorkforcemanagementBusinessunitWeekSchedules**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekSchedules) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules | Get the list of week schedules for the specified week
[**getWorkforcemanagementBusinessunitWeekShorttermforecast**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekShorttermforecast) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId} | Get a short term forecast
[**getWorkforcemanagementBusinessunitWeekShorttermforecastData**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekShorttermforecastData) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/data | Get the result of a short term forecast calculation
[**getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/generationresults | Gets the forecast generation results
[**getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/longtermforecastdata | Get the result of a long term forecast calculation
[**getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/planninggroups | Gets the forecast planning group snapshot
[**getWorkforcemanagementBusinessunitWeekShorttermforecasts**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitWeekShorttermforecasts) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts | Get short term forecasts
[**getWorkforcemanagementBusinessunits**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunits) | **GET** /api/v2/workforcemanagement/businessunits | Get business units
[**getWorkforcemanagementBusinessunitsDivisionviews**](WorkforceManagementApi.html#getWorkforcemanagementBusinessunitsDivisionviews) | **GET** /api/v2/workforcemanagement/businessunits/divisionviews | Get business units across divisions
[**getWorkforcemanagementCalendarDataIcs**](WorkforceManagementApi.html#getWorkforcemanagementCalendarDataIcs) | **GET** /api/v2/workforcemanagement/calendar/data/ics | Get ics formatted calendar based on shareable link
[**getWorkforcemanagementCalendarUrlIcs**](WorkforceManagementApi.html#getWorkforcemanagementCalendarUrlIcs) | **GET** /api/v2/workforcemanagement/calendar/url/ics | Get existing calendar link for the current user
[**getWorkforcemanagementHistoricaldataDeletejob**](WorkforceManagementApi.html#getWorkforcemanagementHistoricaldataDeletejob) | **GET** /api/v2/workforcemanagement/historicaldata/deletejob | Retrieves delete job status for historical data imports of the organization
[**getWorkforcemanagementHistoricaldataImportstatus**](WorkforceManagementApi.html#getWorkforcemanagementHistoricaldataImportstatus) | **GET** /api/v2/workforcemanagement/historicaldata/importstatus | Retrieves status of the historical data imports of the organization
[**getWorkforcemanagementIntegrationsHris**](WorkforceManagementApi.html#getWorkforcemanagementIntegrationsHris) | **GET** /api/v2/workforcemanagement/integrations/hris | Get integrations
[**getWorkforcemanagementIntegrationsHrisTimeofftypesJob**](WorkforceManagementApi.html#getWorkforcemanagementIntegrationsHrisTimeofftypesJob) | **GET** /api/v2/workforcemanagement/integrations/hris/timeofftypes/jobs/{jobId} | Query the results of time off types job
[**getWorkforcemanagementManagementunit**](WorkforceManagementApi.html#getWorkforcemanagementManagementunit) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId} | Get management unit
[**getWorkforcemanagementManagementunitActivitycodes**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitActivitycodes) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/activitycodes | Deprecated: Instead use /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes. Get the list of activity codes
[**getWorkforcemanagementManagementunitAdherence**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitAdherence) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/adherence | Get a list of user schedule adherence records for the requested management unit
[**getWorkforcemanagementManagementunitAgent**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitAgent) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId} | Get data for agent in the management unit
[**getWorkforcemanagementManagementunitAgentShifttrades**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitAgentShifttrades) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}/shifttrades | Gets all the shift trades for a given agent
[**getWorkforcemanagementManagementunitShifttradesMatched**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitShifttradesMatched) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/matched | Gets a summary of all shift trades in the matched state
[**getWorkforcemanagementManagementunitShifttradesUsers**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitShifttradesUsers) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/users | Gets list of users available for whom you can send direct shift trade requests
[**getWorkforcemanagementManagementunitTimeofflimit**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitTimeofflimit) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId} | Gets a time off limit object
[**getWorkforcemanagementManagementunitTimeofflimits**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitTimeofflimits) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits | Gets a list of time off limit objects under management unit.
[**getWorkforcemanagementManagementunitTimeoffplan**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitTimeoffplan) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId} | Gets a time off plan
[**getWorkforcemanagementManagementunitTimeoffplans**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitTimeoffplans) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans | Gets a list of time off plans
[**getWorkforcemanagementManagementunitUserTimeoffrequest**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitUserTimeoffrequest) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId} | Get a time off request
[**getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}/timeofflimits | Retrieves time off limit, allocated and waitlisted values according to specific time off request
[**getWorkforcemanagementManagementunitUserTimeoffrequests**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitUserTimeoffrequests) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests | Get a list of time off requests for a given user
[**getWorkforcemanagementManagementunitUsers**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitUsers) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users | Get users in the management unit
[**getWorkforcemanagementManagementunitWeekSchedule**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWeekSchedule) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId} | Deprecated.  Use the equivalent business unit resource instead. Get a week schedule
[**getWorkforcemanagementManagementunitWeekSchedules**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWeekSchedules) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules | Deprecated.  Use the equivalent business unit resource instead. Get the list of schedules in a week in management unit
[**getWorkforcemanagementManagementunitWeekShifttrades**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWeekShifttrades) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades | Gets all the shift trades for a given week
[**getWorkforcemanagementManagementunitWorkplan**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWorkplan) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId} | Get a work plan
[**getWorkforcemanagementManagementunitWorkplanrotation**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWorkplanrotation) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId} | Get a work plan rotation
[**getWorkforcemanagementManagementunitWorkplanrotations**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWorkplanrotations) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations | Get work plan rotations
[**getWorkforcemanagementManagementunitWorkplans**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWorkplans) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans | Get work plans
[**getWorkforcemanagementManagementunits**](WorkforceManagementApi.html#getWorkforcemanagementManagementunits) | **GET** /api/v2/workforcemanagement/managementunits | Get management units
[**getWorkforcemanagementManagementunitsDivisionviews**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitsDivisionviews) | **GET** /api/v2/workforcemanagement/managementunits/divisionviews | Get management units across divisions
[**getWorkforcemanagementNotifications**](WorkforceManagementApi.html#getWorkforcemanagementNotifications) | **GET** /api/v2/workforcemanagement/notifications | Get a list of notifications for the current user
[**getWorkforcemanagementSchedulingjob**](WorkforceManagementApi.html#getWorkforcemanagementSchedulingjob) | **GET** /api/v2/workforcemanagement/schedulingjobs/{jobId} | Get status of the scheduling job
[**getWorkforcemanagementShifttrades**](WorkforceManagementApi.html#getWorkforcemanagementShifttrades) | **GET** /api/v2/workforcemanagement/shifttrades | Gets all of my shift trades
[**getWorkforcemanagementShrinkageJob**](WorkforceManagementApi.html#getWorkforcemanagementShrinkageJob) | **GET** /api/v2/workforcemanagement/shrinkage/jobs/{jobId} | Request to fetch the status of the historical shrinkage query
[**getWorkforcemanagementTimeoffbalanceJob**](WorkforceManagementApi.html#getWorkforcemanagementTimeoffbalanceJob) | **GET** /api/v2/workforcemanagement/timeoffbalance/jobs/{jobId} | Query the results of time off types job
[**getWorkforcemanagementTimeoffrequest**](WorkforceManagementApi.html#getWorkforcemanagementTimeoffrequest) | **GET** /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId} | Get a time off request for the current user
[**getWorkforcemanagementTimeoffrequestWaitlistpositions**](WorkforceManagementApi.html#getWorkforcemanagementTimeoffrequestWaitlistpositions) | **GET** /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}/waitlistpositions | Get the daily waitlist positions of a time off request for the current user
[**getWorkforcemanagementTimeoffrequests**](WorkforceManagementApi.html#getWorkforcemanagementTimeoffrequests) | **GET** /api/v2/workforcemanagement/timeoffrequests | Get a list of time off requests for the current user
[**patchWorkforcemanagementAgentAdherenceExplanation**](WorkforceManagementApi.html#patchWorkforcemanagementAgentAdherenceExplanation) | **PATCH** /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/{explanationId} | Update an adherence explanation
[**patchWorkforcemanagementBusinessunit**](WorkforceManagementApi.html#patchWorkforcemanagementBusinessunit) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId} | Update business unit
[**patchWorkforcemanagementBusinessunitActivitycode**](WorkforceManagementApi.html#patchWorkforcemanagementBusinessunitActivitycode) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId} | Update an activity code
[**patchWorkforcemanagementBusinessunitPlanninggroup**](WorkforceManagementApi.html#patchWorkforcemanagementBusinessunitPlanninggroup) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId} | Updates the planning group
[**patchWorkforcemanagementBusinessunitSchedulingRun**](WorkforceManagementApi.html#patchWorkforcemanagementBusinessunitSchedulingRun) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId} | Mark a schedule run as applied
[**patchWorkforcemanagementBusinessunitServicegoaltemplate**](WorkforceManagementApi.html#patchWorkforcemanagementBusinessunitServicegoaltemplate) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId} | Updates a service goal template
[**patchWorkforcemanagementManagementunit**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunit) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId} | Update the requested management unit
[**patchWorkforcemanagementManagementunitTimeofflimit**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitTimeofflimit) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId} | Updates a time off limit object.
[**patchWorkforcemanagementManagementunitTimeoffplan**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitTimeoffplan) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId} | Updates a time off plan
[**patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/{timeOffRequestId}/users/{userId}/integrationstatus | Set integration status for a time off request.
[**patchWorkforcemanagementManagementunitUserTimeoffrequest**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitUserTimeoffrequest) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId} | Update a time off request
[**patchWorkforcemanagementManagementunitWeekShifttrade**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitWeekShifttrade) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId} | Updates a shift trade. This route can only be called by the initiating agent
[**patchWorkforcemanagementManagementunitWorkplan**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitWorkplan) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId} | Update a work plan
[**patchWorkforcemanagementManagementunitWorkplanrotation**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitWorkplanrotation) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId} | Update a work plan rotation
[**patchWorkforcemanagementTimeoffrequest**](WorkforceManagementApi.html#patchWorkforcemanagementTimeoffrequest) | **PATCH** /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId} | Update a time off request for the current user
[**postWorkforcemanagementAdherenceExplanations**](WorkforceManagementApi.html#postWorkforcemanagementAdherenceExplanations) | **POST** /api/v2/workforcemanagement/adherence/explanations | Submit an adherence explanation for the current user
[**postWorkforcemanagementAdherenceExplanationsQuery**](WorkforceManagementApi.html#postWorkforcemanagementAdherenceExplanationsQuery) | **POST** /api/v2/workforcemanagement/adherence/explanations/query | Query adherence explanations for the current user
[**postWorkforcemanagementAdherenceHistorical**](WorkforceManagementApi.html#postWorkforcemanagementAdherenceHistorical) | **POST** /api/v2/workforcemanagement/adherence/historical | Deprecated. Use bulk routes instead (/adherence/historical/bulk)
[**postWorkforcemanagementAdherenceHistoricalBulk**](WorkforceManagementApi.html#postWorkforcemanagementAdherenceHistoricalBulk) | **POST** /api/v2/workforcemanagement/adherence/historical/bulk | Request a historical adherence report in bulk
[**postWorkforcemanagementAgentAdherenceExplanations**](WorkforceManagementApi.html#postWorkforcemanagementAgentAdherenceExplanations) | **POST** /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations | Add an adherence explanation for the requested user
[**postWorkforcemanagementAgentAdherenceExplanationsQuery**](WorkforceManagementApi.html#postWorkforcemanagementAgentAdherenceExplanationsQuery) | **POST** /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/query | Query adherence explanations for the given agent across a specified range
[**postWorkforcemanagementAgents**](WorkforceManagementApi.html#postWorkforcemanagementAgents) | **POST** /api/v2/workforcemanagement/agents | Move agents in and out of management unit
[**postWorkforcemanagementAgentsIntegrationsHrisQuery**](WorkforceManagementApi.html#postWorkforcemanagementAgentsIntegrationsHrisQuery) | **POST** /api/v2/workforcemanagement/agents/integrations/hris/query | Query integrations for agents
[**postWorkforcemanagementAgentsMePossibleworkshifts**](WorkforceManagementApi.html#postWorkforcemanagementAgentsMePossibleworkshifts) | **POST** /api/v2/workforcemanagement/agents/me/possibleworkshifts | Get agent possible work shifts for requested time frame
[**postWorkforcemanagementAgentschedulesMine**](WorkforceManagementApi.html#postWorkforcemanagementAgentschedulesMine) | **POST** /api/v2/workforcemanagement/agentschedules/mine | Get published schedule for the current user
[**postWorkforcemanagementBusinessunitActivitycodes**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitActivitycodes) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes | Create a new activity code
[**postWorkforcemanagementBusinessunitAdherenceExplanationsQuery**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitAdherenceExplanationsQuery) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/explanations/query | Query adherence explanations across an entire business unit for the requested period
[**postWorkforcemanagementBusinessunitAgentschedulesSearch**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitAgentschedulesSearch) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/agentschedules/search | Search published schedules
[**postWorkforcemanagementBusinessunitIntraday**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitIntraday) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday | Get intraday data for the given date for the requested planningGroupIds
[**postWorkforcemanagementBusinessunitPlanninggroups**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitPlanninggroups) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups | Adds a new planning group
[**postWorkforcemanagementBusinessunitServicegoaltemplates**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitServicegoaltemplates) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates | Adds a new service goal template
[**postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/agentschedules/query | Loads agent schedule data from the schedule. Used in combination with the metadata route
[**postWorkforcemanagementBusinessunitWeekScheduleCopy**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekScheduleCopy) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy | Copy a schedule
[**postWorkforcemanagementBusinessunitWeekScheduleReschedule**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekScheduleReschedule) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule | Start a rescheduling run
[**postWorkforcemanagementBusinessunitWeekScheduleUpdate**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekScheduleUpdate) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/update | Starts processing a schedule update
[**postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/update/uploadurl | Creates a signed upload URL for updating a schedule
[**postWorkforcemanagementBusinessunitWeekSchedules**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekSchedules) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules | Create a blank schedule
[**postWorkforcemanagementBusinessunitWeekSchedulesGenerate**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekSchedulesGenerate) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/generate | Generate a schedule
[**postWorkforcemanagementBusinessunitWeekSchedulesImport**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekSchedulesImport) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/import | Starts processing a schedule import
[**postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/import/uploadurl | Creates a signed upload URL for importing a schedule
[**postWorkforcemanagementBusinessunitWeekShorttermforecastCopy**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekShorttermforecastCopy) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy | Copy a short term forecast
[**postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/generate | Generate a short term forecast
[**postWorkforcemanagementBusinessunitWeekShorttermforecastsImport**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekShorttermforecastsImport) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/import | Starts importing the uploaded short term forecast
[**postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/import/uploadurl | Creates a signed upload URL for importing a short term forecast
[**postWorkforcemanagementBusinessunits**](WorkforceManagementApi.html#postWorkforcemanagementBusinessunits) | **POST** /api/v2/workforcemanagement/businessunits | Add a new business unit
[**postWorkforcemanagementCalendarUrlIcs**](WorkforceManagementApi.html#postWorkforcemanagementCalendarUrlIcs) | **POST** /api/v2/workforcemanagement/calendar/url/ics | Create a newly generated calendar link for the current user; if the current user has previously generated one, the generated link will be returned
[**postWorkforcemanagementHistoricaldataDeletejob**](WorkforceManagementApi.html#postWorkforcemanagementHistoricaldataDeletejob) | **POST** /api/v2/workforcemanagement/historicaldata/deletejob | Delete the entries of the historical data imports in the organization
[**postWorkforcemanagementHistoricaldataValidate**](WorkforceManagementApi.html#postWorkforcemanagementHistoricaldataValidate) | **POST** /api/v2/workforcemanagement/historicaldata/validate | Trigger validation process for historical import
[**postWorkforcemanagementIntegrationsHriTimeofftypesJobs**](WorkforceManagementApi.html#postWorkforcemanagementIntegrationsHriTimeofftypesJobs) | **POST** /api/v2/workforcemanagement/integrations/hris/{hrisIntegrationId}/timeofftypes/jobs | Get list of time off types configured in integration
[**postWorkforcemanagementManagementunitAgentschedulesSearch**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitAgentschedulesSearch) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/agentschedules/search | Query published schedules for given given time range for set of users
[**postWorkforcemanagementManagementunitHistoricaladherencequery**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitHistoricaladherencequery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/historicaladherencequery | Request a historical adherence report
[**postWorkforcemanagementManagementunitMove**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitMove) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/move | Move the requested management unit to a new business unit
[**postWorkforcemanagementManagementunitSchedulesSearch**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitSchedulesSearch) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/schedules/search | Query published schedules for given given time range for set of users
[**postWorkforcemanagementManagementunitShrinkageJobs**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitShrinkageJobs) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/shrinkage/jobs | Request a historical shrinkage report
[**postWorkforcemanagementManagementunitTimeofflimits**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitTimeofflimits) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits | Creates a new time off limit object under management unit.
[**postWorkforcemanagementManagementunitTimeofflimitsValuesQuery**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitTimeofflimitsValuesQuery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/values/query | Retrieves time off limit related values based on a given set of filters.
[**postWorkforcemanagementManagementunitTimeoffplans**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitTimeoffplans) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans | Creates a new time off plan
[**postWorkforcemanagementManagementunitTimeoffrequests**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitTimeoffrequests) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests | Create a new time off request
[**postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/integrationstatus/query | Retrieves integration statuses for a list of time off requests
[**postWorkforcemanagementManagementunitTimeoffrequestsQuery**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitTimeoffrequestsQuery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query | Fetches time off requests matching the conditions specified in the request body
[**postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/waitlistpositions/query | Retrieves daily waitlist position for a list of time off requests
[**postWorkforcemanagementManagementunitUserTimeoffbalanceJobs**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitUserTimeoffbalanceJobs) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffbalance/jobs | Query time off balances for a given user for specified activity code and dates
[**postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}/timeoffbalance/jobs | Query time off balances for dates spanned by a given time off request
[**postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/estimate | Estimates available time off for an agent
[**postWorkforcemanagementManagementunitWeekShifttradeMatch**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekShifttradeMatch) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match | Matches a shift trade. This route can only be called by the receiving agent
[**postWorkforcemanagementManagementunitWeekShifttrades**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekShifttrades) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades | Adds a shift trade
[**postWorkforcemanagementManagementunitWeekShifttradesSearch**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekShifttradesSearch) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search | Searches for potential shift trade matches for the current agent
[**postWorkforcemanagementManagementunitWeekShifttradesStateBulk**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekShifttradesStateBulk) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk | Updates the state of a batch of shift trades
[**postWorkforcemanagementManagementunitWorkplanCopy**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWorkplanCopy) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy | Create a copy of work plan
[**postWorkforcemanagementManagementunitWorkplanValidate**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWorkplanValidate) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/validate | Validate Work Plan
[**postWorkforcemanagementManagementunitWorkplanrotationCopy**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWorkplanrotationCopy) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}/copy | Create a copy of work plan rotation
[**postWorkforcemanagementManagementunitWorkplanrotations**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWorkplanrotations) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations | Create a new work plan rotation
[**postWorkforcemanagementManagementunitWorkplans**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWorkplans) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans | Create a new work plan
[**postWorkforcemanagementManagementunits**](WorkforceManagementApi.html#postWorkforcemanagementManagementunits) | **POST** /api/v2/workforcemanagement/managementunits | Add a management unit
[**postWorkforcemanagementNotificationsUpdate**](WorkforceManagementApi.html#postWorkforcemanagementNotificationsUpdate) | **POST** /api/v2/workforcemanagement/notifications/update | Mark a list of notifications as read or unread
[**postWorkforcemanagementSchedules**](WorkforceManagementApi.html#postWorkforcemanagementSchedules) | **POST** /api/v2/workforcemanagement/schedules | Get published schedule for the current user
[**postWorkforcemanagementTeamAdherenceHistorical**](WorkforceManagementApi.html#postWorkforcemanagementTeamAdherenceHistorical) | **POST** /api/v2/workforcemanagement/teams/{teamId}/adherence/historical | Request a teams historical adherence report
[**postWorkforcemanagementTeamShrinkageJobs**](WorkforceManagementApi.html#postWorkforcemanagementTeamShrinkageJobs) | **POST** /api/v2/workforcemanagement/teams/{teamId}/shrinkage/jobs | Request a historical shrinkage report
[**postWorkforcemanagementTimeoffbalanceJobs**](WorkforceManagementApi.html#postWorkforcemanagementTimeoffbalanceJobs) | **POST** /api/v2/workforcemanagement/timeoffbalance/jobs | Query time off balances for the current user for specified activity code and dates
[**postWorkforcemanagementTimeofflimitsAvailableQuery**](WorkforceManagementApi.html#postWorkforcemanagementTimeofflimitsAvailableQuery) | **POST** /api/v2/workforcemanagement/timeofflimits/available/query | Queries available time off for the current user
[**postWorkforcemanagementTimeoffrequests**](WorkforceManagementApi.html#postWorkforcemanagementTimeoffrequests) | **POST** /api/v2/workforcemanagement/timeoffrequests | Create a time off request for the current user
[**postWorkforcemanagementTimeoffrequestsEstimate**](WorkforceManagementApi.html#postWorkforcemanagementTimeoffrequestsEstimate) | **POST** /api/v2/workforcemanagement/timeoffrequests/estimate | Estimates available time off for current user
[**postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery**](WorkforceManagementApi.html#postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery) | **POST** /api/v2/workforcemanagement/timeoffrequests/integrationstatus/query | Retrieves integration statuses for a list of current user time off requests
[**putWorkforcemanagementAgentIntegrationsHris**](WorkforceManagementApi.html#putWorkforcemanagementAgentIntegrationsHris) | **PUT** /api/v2/workforcemanagement/agents/{agentId}/integrations/hris | Update integrations for agent
[**putWorkforcemanagementManagementunitTimeofflimitValues**](WorkforceManagementApi.html#putWorkforcemanagementManagementunitTimeofflimitValues) | **PUT** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}/values | Sets daily values for a date range of time off limit object
{: class="table table-striped"}

<a name="deleteWorkforcemanagementBusinessunit"></a>

# void deleteWorkforcemanagementBusinessunit(businessUnitId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}

Delete business unit

A business unit cannot be deleted if it contains one or more management units

Requires ANY permissions:

* wfm:businessUnit:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.

apiInstance.deleteWorkforcemanagementBusinessunit(businessUnitId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunit returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit, or 'mine' for the business unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementBusinessunitActivitycode"></a>

# void deleteWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}

Deletes an activity code

Requires ANY permissions:

* wfm:activityCode:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let activityCodeId = "activityCodeId_example"; // String | The ID of the activity code to delete

apiInstance.deleteWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitActivitycode returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitActivitycode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit, or 'mine' for the business unit of the logged-in user. |  |
 **activityCodeId** | **String** | The ID of the activity code to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementBusinessunitPlanninggroup"></a>

# void deleteWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}

Deletes the planning group

Requires ANY permissions:

* wfm:planningGroup:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let planningGroupId = "planningGroupId_example"; // String | The ID of a planning group to delete

apiInstance.deleteWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitPlanninggroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitPlanninggroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit. |  |
 **planningGroupId** | **String** | The ID of a planning group to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementBusinessunitSchedulingRun"></a>

# void deleteWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}

Cancel a scheduling run

Requires ANY permissions:

* wfm:schedule:generate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let runId = "runId_example"; // String | The ID of the schedule run

apiInstance.deleteWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitSchedulingRun returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitSchedulingRun');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **runId** | **String** | The ID of the schedule run |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementBusinessunitServicegoaltemplate"></a>

# void deleteWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}

Delete a service goal template

Requires ANY permissions:

* wfm:serviceGoalTemplate:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let serviceGoalTemplateId = "serviceGoalTemplateId_example"; // String | The ID of the service goal template to delete

apiInstance.deleteWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitServicegoaltemplate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitServicegoaltemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit. |  |
 **serviceGoalTemplateId** | **String** | The ID of the service goal template to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementBusinessunitWeekSchedule"></a>

# BuAsyncScheduleResponse deleteWorkforcemanagementBusinessunitWeekSchedule(businessUnitId, weekId, scheduleId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}

Delete a schedule

Requires ANY permissions:

* wfm:schedule:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let scheduleId = "scheduleId_example"; // String | The ID of the schedule

apiInstance.deleteWorkforcemanagementBusinessunitWeekSchedule(businessUnitId, weekId, scheduleId)
  .then((data) => {
    console.log(`deleteWorkforcemanagementBusinessunitWeekSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitWeekSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **scheduleId** | **String** | The ID of the schedule |  |
{: class="table table-striped"}

### Return type

**BuAsyncScheduleResponse**

<a name="deleteWorkforcemanagementBusinessunitWeekShorttermforecast"></a>

# void deleteWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}

Delete a short term forecast

Must not be tied to any schedules

Requires ANY permissions:

* wfm:shortTermForecast:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let forecastId = "forecastId_example"; // String | The ID of the forecast

apiInstance.deleteWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitWeekShorttermforecast returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitWeekShorttermforecast');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **forecastId** | **String** | The ID of the forecast |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementCalendarUrlIcs"></a>

# void deleteWorkforcemanagementCalendarUrlIcs()


DELETE /api/v2/workforcemanagement/calendar/url/ics

Disable generated calendar link for the current user

Requires ALL permissions:

* wfm:agentSchedule:sync

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.deleteWorkforcemanagementCalendarUrlIcs()
  .then(() => {
    console.log('deleteWorkforcemanagementCalendarUrlIcs returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementCalendarUrlIcs');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunit"></a>

# void deleteWorkforcemanagementManagementunit(managementUnitId)


DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}

Delete management unit

Requires ANY permissions:

* wfm:managementUnit:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.deleteWorkforcemanagementManagementunit(managementUnitId)
  .then(() => {
    console.log('deleteWorkforcemanagementManagementunit returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementManagementunit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunitTimeofflimit"></a>

# void deleteWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId)


DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}

Deletes a time off limit object

Requires ANY permissions:

* wfm:timeOffLimit:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let timeOffLimitId = "timeOffLimitId_example"; // String | The ID of the time off limit object to delete

apiInstance.deleteWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId)
  .then(() => {
    console.log('deleteWorkforcemanagementManagementunitTimeofflimit returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementManagementunitTimeofflimit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **timeOffLimitId** | **String** | The ID of the time off limit object to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunitTimeoffplan"></a>

# void deleteWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId)


DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId}

Deletes a time off plan

Requires ANY permissions:

* wfm:timeOffPlan:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let timeOffPlanId = "timeOffPlanId_example"; // String | The ID of the time off plan to delete

apiInstance.deleteWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId)
  .then(() => {
    console.log('deleteWorkforcemanagementManagementunitTimeoffplan returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementManagementunitTimeoffplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit |  |
 **timeOffPlanId** | **String** | The ID of the time off plan to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunitWorkplan"></a>

# void deleteWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId)


DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}

Delete a work plan

Requires ANY permissions:

* wfm:workPlan:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanId = "workPlanId_example"; // String | The ID of the work plan to delete

apiInstance.deleteWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId)
  .then(() => {
    console.log('deleteWorkforcemanagementManagementunitWorkplan returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementManagementunitWorkplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **workPlanId** | **String** | The ID of the work plan to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunitWorkplanrotation"></a>

# void deleteWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId)


DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}

Delete a work plan rotation

Requires ANY permissions:

* wfm:workPlanRotation:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanRotationId = "workPlanRotationId_example"; // String | The ID of the work plan rotation to be deleted

apiInstance.deleteWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId)
  .then(() => {
    console.log('deleteWorkforcemanagementManagementunitWorkplanrotation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementManagementunitWorkplanrotation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **workPlanRotationId** | **String** | The ID of the work plan rotation to be deleted |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getWorkforcemanagementAdherence"></a>

# [UserScheduleAdherence] getWorkforcemanagementAdherence(userId)


GET /api/v2/workforcemanagement/adherence

Get a list of UserScheduleAdherence records for the requested users

Requires ANY permissions:

* wfm:realtimeAdherence:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let userId = ["userId_example"]; // [String] | User Id(s) for which to fetch current schedule adherence information.  Min 1, Max of 100 userIds per request

apiInstance.getWorkforcemanagementAdherence(userId)
  .then((data) => {
    console.log(`getWorkforcemanagementAdherence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAdherence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **[String]** | User Id(s) for which to fetch current schedule adherence information.  Min 1, Max of 100 userIds per request |  |
{: class="table table-striped"}

### Return type

**[UserScheduleAdherence]**

<a name="getWorkforcemanagementAdherenceExplanation"></a>

# AdherenceExplanationResponse getWorkforcemanagementAdherenceExplanation(explanationId)


GET /api/v2/workforcemanagement/adherence/explanations/{explanationId}

Get an adherence explanation for the current user

Requires ANY permissions:

* wfm:agentAdherenceExplanation:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let explanationId = "explanationId_example"; // String | The ID of the explanation to update

apiInstance.getWorkforcemanagementAdherenceExplanation(explanationId)
  .then((data) => {
    console.log(`getWorkforcemanagementAdherenceExplanation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAdherenceExplanation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **explanationId** | **String** | The ID of the explanation to update |  |
{: class="table table-striped"}

### Return type

**AdherenceExplanationResponse**

<a name="getWorkforcemanagementAdherenceExplanationsJob"></a>

# AdherenceExplanationJob getWorkforcemanagementAdherenceExplanationsJob(jobId)


GET /api/v2/workforcemanagement/adherence/explanations/jobs/{jobId}

Query the status of an adherence explanation operation. Only the user who started the operation can query the status

Job details are only retained if the initial request returned a 202 ACCEPTED response

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The ID of the job

apiInstance.getWorkforcemanagementAdherenceExplanationsJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementAdherenceExplanationsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAdherenceExplanationsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The ID of the job |  |
{: class="table table-striped"}

### Return type

**AdherenceExplanationJob**

<a name="getWorkforcemanagementAdherenceHistoricalBulkJob"></a>

# WfmHistoricalAdherenceBulkResponse getWorkforcemanagementAdherenceHistoricalBulkJob(jobId)


GET /api/v2/workforcemanagement/adherence/historical/bulk/jobs/{jobId}

Request to fetch the status of the historical adherence bulk job. Only the user who started the operation can query the status

Job details are only retained if the initial request returned a 202 ACCEPTED response

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | ID of the job to get

apiInstance.getWorkforcemanagementAdherenceHistoricalBulkJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementAdherenceHistoricalBulkJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAdherenceHistoricalBulkJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | ID of the job to get |  |
{: class="table table-striped"}

### Return type

**WfmHistoricalAdherenceBulkResponse**

<a name="getWorkforcemanagementAdherenceHistoricalJob"></a>

# WfmHistoricalAdherenceResponse getWorkforcemanagementAdherenceHistoricalJob(jobId)


GET /api/v2/workforcemanagement/adherence/historical/jobs/{jobId}

Query the status of a historical adherence request operation. Only the user who started the operation can query the status

Job details are only retained if the initial request returned a 202 ACCEPTED response

Requires ANY permissions:

* wfm:historicalAdherence:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getWorkforcemanagementAdherenceHistoricalJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementAdherenceHistoricalJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAdherenceHistoricalJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

**WfmHistoricalAdherenceResponse**

<a name="getWorkforcemanagementAdhocmodelingjob"></a>

# ModelingStatusResponse getWorkforcemanagementAdhocmodelingjob(jobId)


GET /api/v2/workforcemanagement/adhocmodelingjobs/{jobId}

Get status of the modeling job

Requires ANY permissions:

* wfm:adhocModel:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The id of the modeling job

apiInstance.getWorkforcemanagementAdhocmodelingjob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementAdhocmodelingjob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAdhocmodelingjob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The id of the modeling job |  |
{: class="table table-striped"}

### Return type

**ModelingStatusResponse**

<a name="getWorkforcemanagementAgentAdherenceExplanation"></a>

# AdherenceExplanationResponse getWorkforcemanagementAgentAdherenceExplanation(agentId, explanationId)


GET /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/{explanationId}

Get an adherence explanation

Requires ANY permissions:

* wfm:adherenceExplanation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let agentId = "agentId_example"; // String | The ID of the agent to query
let explanationId = "explanationId_example"; // String | The ID of the explanation to update

apiInstance.getWorkforcemanagementAgentAdherenceExplanation(agentId, explanationId)
  .then((data) => {
    console.log(`getWorkforcemanagementAgentAdherenceExplanation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAgentAdherenceExplanation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The ID of the agent to query |  |
 **explanationId** | **String** | The ID of the explanation to update |  |
{: class="table table-striped"}

### Return type

**AdherenceExplanationResponse**

<a name="getWorkforcemanagementAgentManagementunit"></a>

# AgentManagementUnitReference getWorkforcemanagementAgentManagementunit(agentId)


GET /api/v2/workforcemanagement/agents/{agentId}/managementunit

Get the management unit to which the agent belongs

Requires ANY permissions:

* wfm:agent:view
* wfm:publishedSchedule:view
* wfm:schedule:view
* coaching:appointment:add
* coaching:appointment:edit
* learning:assignment:add
* learning:assignment:reschedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let agentId = "agentId_example"; // String | The ID of the agent to look up

apiInstance.getWorkforcemanagementAgentManagementunit(agentId)
  .then((data) => {
    console.log(`getWorkforcemanagementAgentManagementunit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAgentManagementunit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The ID of the agent to look up |  |
{: class="table table-striped"}

### Return type

**AgentManagementUnitReference**

<a name="getWorkforcemanagementAgentsMeManagementunit"></a>

# AgentManagementUnitReference getWorkforcemanagementAgentsMeManagementunit()


GET /api/v2/workforcemanagement/agents/me/managementunit

Get the management unit to which the currently logged in agent belongs

Requires ANY permissions:

* wfm:agentSchedule:view
* wfm:agentTimeOffRequest:submit
* wfm:activityCode:add
* wfm:activityCode:delete
* wfm:activityCode:edit
* wfm:activityCode:view
* wfm:agent:edit
* wfm:agent:view
* wfm:businessUnit:add
* wfm:businessUnit:delete
* wfm:businessUnit:edit
* wfm:businessUnit:view
* wfm:historicalAdherence:view
* wfm:intraday:view
* wfm:managementUnit:add
* wfm:managementUnit:delete
* wfm:managementUnit:edit
* wfm:managementUnit:view
* wfm:realtimeAdherence:view
* wfm:schedule:add
* wfm:schedule:delete
* wfm:schedule:edit
* wfm:schedule:generate
* wfm:schedule:view
* wfm:publishedSchedule:view
* wfm:serviceGoalTemplate:add
* wfm:serviceGoalTemplate:delete
* wfm:serviceGoalTemplate:edit
* wfm:serviceGoalTemplate:view
* wfm:planningGroup:add
* wfm:planningGroup:delete
* wfm:planningGroup:edit
* wfm:planningGroup:view
* wfm:shiftTradeRequest:edit
* wfm:shiftTradeRequest:view
* wfm:shortTermForecast:add
* wfm:shortTermForecast:delete
* wfm:shortTermForecast:edit
* wfm:shortTermForecast:view
* wfm:timeOffLimit:add
* wfm:timeOffLimit:delete
* wfm:timeOffLimit:edit
* wfm:timeOffLimit:view
* wfm:timeOffPlan:add
* wfm:timeOffPlan:delete
* wfm:timeOffPlan:edit
* wfm:timeOffPlan:view
* wfm:timeOffRequest:add
* wfm:timeOffRequest:edit
* wfm:timeOffRequest:view
* wfm:workPlan:add
* wfm:workPlan:delete
* wfm:workPlan:edit
* wfm:workPlan:view
* wfm:workPlanRotation:add
* wfm:workPlanRotation:delete
* wfm:workPlanRotation:edit
* wfm:workPlanRotation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementAgentsMeManagementunit()
  .then((data) => {
    console.log(`getWorkforcemanagementAgentsMeManagementunit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAgentsMeManagementunit');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**AgentManagementUnitReference**

<a name="getWorkforcemanagementBusinessunit"></a>

# BusinessUnitResponse getWorkforcemanagementBusinessunit(businessUnitId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}

Get business unit

Expanding "settings" will retrieve all settings.  All other expands will retrieve only the requested settings field(s).

Requires ANY permissions:

* wfm:activityCode:add
* wfm:activityCode:delete
* wfm:activityCode:edit
* wfm:activityCode:view
* wfm:agent:edit
* wfm:agentSchedule:view
* wfm:agentTimeOffRequest:submit
* wfm:agent:view
* wfm:businessUnit:add
* wfm:businessUnit:delete
* wfm:businessUnit:edit
* wfm:businessUnit:view
* wfm:historicalAdherence:view
* wfm:shrinkage:view
* wfm:intraday:view
* wfm:managementUnit:add
* wfm:managementUnit:delete
* wfm:managementUnit:edit
* wfm:managementUnit:view
* wfm:publishedSchedule:view
* wfm:realtimeAdherence:view
* wfm:schedule:add
* wfm:schedule:delete
* wfm:schedule:edit
* wfm:schedule:generate
* wfm:schedule:view
* wfm:serviceGoalTemplate:add
* wfm:serviceGoalTemplate:delete
* wfm:serviceGoalTemplate:edit
* wfm:serviceGoalTemplate:view
* wfm:planningGroup:add
* wfm:planningGroup:delete
* wfm:planningGroup:edit
* wfm:planningGroup:view
* wfm:shiftTradeRequest:edit
* wfm:shiftTradeRequest:view
* wfm:agentShiftTradeRequest:participate
* wfm:shortTermForecast:add
* wfm:shortTermForecast:delete
* wfm:shortTermForecast:edit
* wfm:shortTermForecast:view
* wfm:staffingGroup:add
* wfm:staffingGroup:delete
* wfm:staffingGroup:edit
* wfm:staffingGroup:view
* wfm:timeOffRequest:add
* wfm:timeOffRequest:edit
* wfm:timeOffRequest:view
* wfm:timeOffLimit:add
* wfm:timeOffLimit:delete
* wfm:timeOffLimit:edit
* wfm:timeOffLimit:view
* wfm:timeOffPlan:add
* wfm:timeOffPlan:delete
* wfm:timeOffPlan:edit
* wfm:timeOffPlan:view
* wfm:timeOffRequest:add
* wfm:timeOffRequest:edit
* wfm:timeOffRequest:view
* wfm:workPlan:add
* wfm:workPlan:delete
* wfm:workPlan:edit
* wfm:workPlan:view
* wfm:workPlanRotation:add
* wfm:workPlanRotation:delete
* wfm:workPlanRotation:edit
* wfm:workPlanRotation:view
* coaching:appointment:add
* coaching:appointment:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let opts = { 
  'expand': ["expand_example"] // [String] | Include to access additional data on the business unit
};

apiInstance.getWorkforcemanagementBusinessunit(businessUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit, or 'mine' for the business unit of the logged-in user. |  |
 **expand** | **[String]** | Include to access additional data on the business unit | [optional] <br />**Values**: settings, settings.timeZone, settings.startDayOfWeek, settings.shortTermForecasting, settings.scheduling |
{: class="table table-striped"}

### Return type

**BusinessUnitResponse**

<a name="getWorkforcemanagementBusinessunitActivitycode"></a>

# BusinessUnitActivityCode getWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}

Get an activity code

Requires ANY permissions:

* wfm:activityCode:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let activityCodeId = "activityCodeId_example"; // String | The ID of the activity code to fetch

apiInstance.getWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitActivitycode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitActivitycode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit, or 'mine' for the business unit of the logged-in user. |  |
 **activityCodeId** | **String** | The ID of the activity code to fetch |  |
{: class="table table-striped"}

### Return type

**BusinessUnitActivityCode**

<a name="getWorkforcemanagementBusinessunitActivitycodes"></a>

# BusinessUnitActivityCodeListing getWorkforcemanagementBusinessunitActivitycodes(businessUnitId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes

Get activity codes

Requires ANY permissions:

* wfm:agentSchedule:view
* wfm:agentTimeOffRequest:submit
* wfm:activityCode:add
* wfm:activityCode:delete
* wfm:activityCode:edit
* wfm:activityCode:view
* wfm:agent:edit
* wfm:agent:view
* wfm:businessUnit:add
* wfm:businessUnit:delete
* wfm:businessUnit:edit
* wfm:businessUnit:view
* wfm:historicalAdherence:view
* wfm:shrinkage:view
* wfm:intraday:view
* wfm:managementUnit:add
* wfm:managementUnit:delete
* wfm:managementUnit:edit
* wfm:managementUnit:view
* wfm:realtimeAdherence:view
* wfm:schedule:add
* wfm:schedule:delete
* wfm:schedule:edit
* wfm:schedule:generate
* wfm:schedule:view
* wfm:publishedSchedule:view
* wfm:serviceGoalTemplate:add
* wfm:serviceGoalTemplate:delete
* wfm:serviceGoalTemplate:edit
* wfm:serviceGoalTemplate:view
* wfm:planningGroup:add
* wfm:planningGroup:delete
* wfm:planningGroup:edit
* wfm:planningGroup:view
* wfm:shiftTradeRequest:edit
* wfm:shiftTradeRequest:view
* wfm:shortTermForecast:add
* wfm:shortTermForecast:delete
* wfm:shortTermForecast:edit
* wfm:shortTermForecast:view
* wfm:timeOffLimit:add
* wfm:timeOffLimit:delete
* wfm:timeOffLimit:edit
* wfm:timeOffLimit:view
* wfm:timeOffPlan:add
* wfm:timeOffPlan:delete
* wfm:timeOffPlan:edit
* wfm:timeOffPlan:view
* wfm:timeOffRequest:add
* wfm:timeOffRequest:edit
* wfm:timeOffRequest:view
* wfm:workPlan:add
* wfm:workPlan:delete
* wfm:workPlan:edit
* wfm:workPlan:view
* wfm:workPlanRotation:add
* wfm:workPlanRotation:delete
* wfm:workPlanRotation:edit
* wfm:workPlanRotation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.

apiInstance.getWorkforcemanagementBusinessunitActivitycodes(businessUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitActivitycodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitActivitycodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit, or 'mine' for the business unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**BusinessUnitActivityCodeListing**

<a name="getWorkforcemanagementBusinessunitIntradayPlanninggroups"></a>

# WfmIntradayPlanningGroupListing getWorkforcemanagementBusinessunitIntradayPlanninggroups(businessUnitId, _date)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday/planninggroups

Get intraday planning groups for the given date

Requires ANY permissions:

* wfm:intraday:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let _date = "_date_example"; // String | yyyy-MM-dd date string interpreted in the configured business unit time zone. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd

apiInstance.getWorkforcemanagementBusinessunitIntradayPlanninggroups(businessUnitId, _date)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitIntradayPlanninggroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitIntradayPlanninggroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **_date** | **String** | yyyy-MM-dd date string interpreted in the configured business unit time zone. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
{: class="table table-striped"}

### Return type

**WfmIntradayPlanningGroupListing**

<a name="getWorkforcemanagementBusinessunitManagementunits"></a>

# ManagementUnitListing getWorkforcemanagementBusinessunitManagementunits(businessUnitId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/managementunits

Get all authorized management units in the business unit

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let opts = { 
  'feature': "feature_example", // String | If specified, the list of management units for which the user is authorized to use the requested feature will be returned
  'divisionId': "divisionId_example" // String | If specified, the list of management units belonging to the specified division will be returned
};

apiInstance.getWorkforcemanagementBusinessunitManagementunits(businessUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitManagementunits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitManagementunits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit, or 'mine' for the business unit of the logged-in user. |  |
 **feature** | **String** | If specified, the list of management units for which the user is authorized to use the requested feature will be returned | [optional] <br />**Values**: AgentSchedule, AgentTimeOffRequest, Coaching, Learning, ActivityCodes, Agents, BuActivityCodes, BusinessUnits, HistoricalAdherence, HistoricalShrinkage, IntradayMonitoring, BuIntradayMonitoring, ManagementUnits, RealTimeAdherence, Schedules, BuSchedules, ServiceGoalTemplates, PlanningGroups, ShiftTrading, ShortTermForecasts, BuShortTermForecasts, StaffingGroups, TimeOffPlans, TimeOffRequests, TimeOffLimits, WorkPlanRotations, WorkPlans |
 **divisionId** | **String** | If specified, the list of management units belonging to the specified division will be returned | [optional]  |
{: class="table table-striped"}

### Return type

**ManagementUnitListing**

<a name="getWorkforcemanagementBusinessunitPlanninggroup"></a>

# PlanningGroup getWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}

Get a planning group

Requires ANY permissions:

* wfm:planningGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let planningGroupId = "planningGroupId_example"; // String | The ID of a planning group to fetch

apiInstance.getWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitPlanninggroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitPlanninggroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit. |  |
 **planningGroupId** | **String** | The ID of a planning group to fetch |  |
{: class="table table-striped"}

### Return type

**PlanningGroup**

<a name="getWorkforcemanagementBusinessunitPlanninggroups"></a>

# PlanningGroupList getWorkforcemanagementBusinessunitPlanninggroups(businessUnitId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups

Gets list of planning groups

Requires ANY permissions:

* wfm:planningGroup:view
* wfm:shortTermForecast:view
* wfm:intraday:view
* wfm:agent:view
* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.

apiInstance.getWorkforcemanagementBusinessunitPlanninggroups(businessUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitPlanninggroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitPlanninggroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit. |  |
{: class="table table-striped"}

### Return type

**PlanningGroupList**

<a name="getWorkforcemanagementBusinessunitSchedulingRun"></a>

# BuScheduleRun getWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}

Get a scheduling run

Requires ANY permissions:

* wfm:schedule:generate
* wfm:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let runId = "runId_example"; // String | The ID of the schedule run

apiInstance.getWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitSchedulingRun success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitSchedulingRun');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **runId** | **String** | The ID of the schedule run |  |
{: class="table table-striped"}

### Return type

**BuScheduleRun**

<a name="getWorkforcemanagementBusinessunitSchedulingRunResult"></a>

# BuRescheduleResult getWorkforcemanagementBusinessunitSchedulingRunResult(businessUnitId, runId, managementUnitIds, expand)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}/result

Get the result of a rescheduling operation

Requires ANY permissions:

* wfm:schedule:edit
* wfm:schedule:generate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let runId = "runId_example"; // String | The ID of the schedule run
let managementUnitIds = ["managementUnitIds_example"]; // [String] | The IDs of the management units for which to fetch the reschedule results
let expand = ["expand_example"]; // [String] | The fields to expand. Omitting will return an empty response

apiInstance.getWorkforcemanagementBusinessunitSchedulingRunResult(businessUnitId, runId, managementUnitIds, expand)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitSchedulingRunResult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitSchedulingRunResult');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **runId** | **String** | The ID of the schedule run |  |
 **managementUnitIds** | **[String]** | The IDs of the management units for which to fetch the reschedule results |  |
 **expand** | **[String]** | The fields to expand. Omitting will return an empty response | <br />**Values**: headcountForecast, generationResults, agentSchedules |
{: class="table table-striped"}

### Return type

**BuRescheduleResult**

<a name="getWorkforcemanagementBusinessunitSchedulingRuns"></a>

# BuScheduleRunListing getWorkforcemanagementBusinessunitSchedulingRuns(businessUnitId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs

Get the list of scheduling runs

Requires ANY permissions:

* wfm:schedule:generate
* wfm:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit

apiInstance.getWorkforcemanagementBusinessunitSchedulingRuns(businessUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitSchedulingRuns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitSchedulingRuns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
{: class="table table-striped"}

### Return type

**BuScheduleRunListing**

<a name="getWorkforcemanagementBusinessunitServicegoaltemplate"></a>

# ServiceGoalTemplate getWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}

Get a service goal template

Requires ANY permissions:

* wfm:serviceGoalTemplate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let serviceGoalTemplateId = "serviceGoalTemplateId_example"; // String | The ID of a service goal template to fetch
let opts = { 
  'expand': ["expand_example"] // [String] | Include to access additional data on the service goal template
};

apiInstance.getWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitServicegoaltemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitServicegoaltemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit. |  |
 **serviceGoalTemplateId** | **String** | The ID of a service goal template to fetch |  |
 **expand** | **[String]** | Include to access additional data on the service goal template | [optional] <br />**Values**: impactOverride |
{: class="table table-striped"}

### Return type

**ServiceGoalTemplate**

<a name="getWorkforcemanagementBusinessunitServicegoaltemplates"></a>

# ServiceGoalTemplateList getWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates

Gets list of service goal templates

Requires ANY permissions:

* wfm:serviceGoalTemplate:view
* wfm:planningGroup:view
* wfm:shortTermForecast:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let opts = { 
  'expand': ["expand_example"] // [String] | Include to access additional data on the service goal template
};

apiInstance.getWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitServicegoaltemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitServicegoaltemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit. |  |
 **expand** | **[String]** | Include to access additional data on the service goal template | [optional] <br />**Values**: impactOverride |
{: class="table table-striped"}

### Return type

**ServiceGoalTemplateList**

<a name="getWorkforcemanagementBusinessunitWeekSchedule"></a>

# BuScheduleMetadata getWorkforcemanagementBusinessunitWeekSchedule(businessUnitId, weekId, scheduleId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}

Get the metadata for the schedule, describing which management units and agents are in the scheduleSchedule data can then be loaded with the query route

Requires ANY permissions:

* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let scheduleId = "scheduleId_example"; // String | The ID of the schedule
let opts = { 
  'expand': "expand_example" // String | expand
};

apiInstance.getWorkforcemanagementBusinessunitWeekSchedule(businessUnitId, weekId, scheduleId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **scheduleId** | **String** | The ID of the schedule |  |
 **expand** | **String** | expand | [optional] <br />**Values**: managementUnits.agents |
{: class="table table-striped"}

### Return type

**BuScheduleMetadata**

<a name="getWorkforcemanagementBusinessunitWeekScheduleGenerationresults"></a>

# ScheduleGenerationResult getWorkforcemanagementBusinessunitWeekScheduleGenerationresults(businessUnitId, weekId, scheduleId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults

Get the generation results for a generated schedule

Requires ANY permissions:

* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let scheduleId = "scheduleId_example"; // String | The ID of the schedule

apiInstance.getWorkforcemanagementBusinessunitWeekScheduleGenerationresults(businessUnitId, weekId, scheduleId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekScheduleGenerationresults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekScheduleGenerationresults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **scheduleId** | **String** | The ID of the schedule |  |
{: class="table table-striped"}

### Return type

**ScheduleGenerationResult**

<a name="getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast"></a>

# BuHeadcountForecastResponse getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast(businessUnitId, weekId, scheduleId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/headcountforecast

Get the headcount forecast by planning group for the schedule

Requires ANY permissions:

* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let scheduleId = "scheduleId_example"; // String | The ID of the schedule
let opts = { 
  'forceDownload': true // Boolean | Whether to force the result to come via download url.  For testing purposes only
};

apiInstance.getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast(businessUnitId, weekId, scheduleId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **scheduleId** | **String** | The ID of the schedule |  |
 **forceDownload** | **Boolean** | Whether to force the result to come via download url.  For testing purposes only | [optional]  |
{: class="table table-striped"}

### Return type

**BuHeadcountForecastResponse**

<a name="getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent"></a>

# BuAgentScheduleHistoryResponse getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent(businessUnitId, weekId, scheduleId, agentId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/history/agents/{agentId}

Loads agent's schedule history.

Requires ANY permissions:

* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let scheduleId = "scheduleId_example"; // String | The ID of the schedule
let agentId = "agentId_example"; // String | THe ID of the agent

apiInstance.getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent(businessUnitId, weekId, scheduleId, agentId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **scheduleId** | **String** | The ID of the schedule |  |
 **agentId** | **String** | THe ID of the agent |  |
{: class="table table-striped"}

### Return type

**BuAgentScheduleHistoryResponse**

<a name="getWorkforcemanagementBusinessunitWeekSchedules"></a>

# BuScheduleListing getWorkforcemanagementBusinessunitWeekSchedules(businessUnitId, weekId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules

Get the list of week schedules for the specified week

Use "recent" (without quotes) for the `weekId` path parameter to fetch all forecasts for +/- 26 weeks from the current date. Response will include any schedule which spans the specified week

Requires ANY permissions:

* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format, or 'recent' (without quotes) to get recent schedules
let opts = { 
  'includeOnlyPublished': true, // Boolean | includeOnlyPublished
  'expand': "expand_example" // String | expand
};

apiInstance.getWorkforcemanagementBusinessunitWeekSchedules(businessUnitId, weekId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format, or 'recent' (without quotes) to get recent schedules |  |
 **includeOnlyPublished** | **Boolean** | includeOnlyPublished | [optional]  |
 **expand** | **String** | expand | [optional] <br />**Values**: forecast.description |
{: class="table table-striped"}

### Return type

**BuScheduleListing**

<a name="getWorkforcemanagementBusinessunitWeekShorttermforecast"></a>

# BuShortTermForecast getWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}

Get a short term forecast

Requires ANY permissions:

* wfm:shortTermForecast:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let forecastId = "forecastId_example"; // String | The ID of the forecast
let opts = { 
  'expand': ["expand_example"] // [String] | Include to access additional data on the forecast
};

apiInstance.getWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekShorttermforecast success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekShorttermforecast');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **forecastId** | **String** | The ID of the forecast |  |
 **expand** | **[String]** | Include to access additional data on the forecast | [optional] <br />**Values**: planningGroups, generationResults |
{: class="table table-striped"}

### Return type

**BuShortTermForecast**

<a name="getWorkforcemanagementBusinessunitWeekShorttermforecastData"></a>

# BuForecastResultResponse getWorkforcemanagementBusinessunitWeekShorttermforecastData(businessUnitId, weekDateId, forecastId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/data

Get the result of a short term forecast calculation

Includes modifications unless you pass the doNotApplyModifications query parameter

Requires ANY permissions:

* wfm:shortTermForecast:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let forecastId = "forecastId_example"; // String | The ID of the forecast
let opts = { 
  'weekNumber': 3.4, // Number | The week number to fetch (for multi-week forecasts)
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service.  For testing/app development purposes
};

apiInstance.getWorkforcemanagementBusinessunitWeekShorttermforecastData(businessUnitId, weekDateId, forecastId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekShorttermforecastData success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekShorttermforecastData');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **forecastId** | **String** | The ID of the forecast |  |
 **weekNumber** | **Number** | The week number to fetch (for multi-week forecasts) | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**BuForecastResultResponse**

<a name="getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults"></a>

# BuForecastGenerationResult getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults(businessUnitId, weekDateId, forecastId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/generationresults

Gets the forecast generation results

Requires ANY permissions:

* wfm:shortTermForecast:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let forecastId = "forecastId_example"; // String | The ID of the forecast

apiInstance.getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults(businessUnitId, weekDateId, forecastId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **forecastId** | **String** | The ID of the forecast |  |
{: class="table table-striped"}

### Return type

**BuForecastGenerationResult**

<a name="getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata"></a>

# LongTermForecastResultResponse getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata(businessUnitId, weekDateId, forecastId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/longtermforecastdata

Get the result of a long term forecast calculation

Includes modifications unless you pass the doNotApplyModifications query parameter

Requires ANY permissions:

* wfm:shortTermForecast:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let forecastId = "forecastId_example"; // String | The ID of the forecast
let opts = { 
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service.  For testing/app development purposes
};

apiInstance.getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata(businessUnitId, weekDateId, forecastId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **forecastId** | **String** | The ID of the forecast |  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**LongTermForecastResultResponse**

<a name="getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups"></a>

# ForecastPlanningGroupsResponse getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups(businessUnitId, weekDateId, forecastId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/planninggroups

Gets the forecast planning group snapshot

Requires ANY permissions:

* wfm:shortTermForecast:view
* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let forecastId = "forecastId_example"; // String | The ID of the forecast

apiInstance.getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups(businessUnitId, weekDateId, forecastId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **forecastId** | **String** | The ID of the forecast |  |
{: class="table table-striped"}

### Return type

**ForecastPlanningGroupsResponse**

<a name="getWorkforcemanagementBusinessunitWeekShorttermforecasts"></a>

# BuShortTermForecastListing getWorkforcemanagementBusinessunitWeekShorttermforecasts(businessUnitId, weekDateId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts

Get short term forecasts

Use "recent" (without quotes) for the `weekDateId` path parameter to fetch all forecasts for +/- 26 weeks from the current date. Response will include any forecast which spans the specified week

Requires ANY permissions:

* wfm:schedule:generate
* wfm:shortTermForecast:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format or 'recent' (without quotes) to fetch recent forecasts

apiInstance.getWorkforcemanagementBusinessunitWeekShorttermforecasts(businessUnitId, weekDateId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekShorttermforecasts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekShorttermforecasts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format or 'recent' (without quotes) to fetch recent forecasts |  |
{: class="table table-striped"}

### Return type

**BuShortTermForecastListing**

<a name="getWorkforcemanagementBusinessunits"></a>

# BusinessUnitListing getWorkforcemanagementBusinessunits(opts)


GET /api/v2/workforcemanagement/businessunits

Get business units

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'feature': "feature_example", // String | If specified, the list of business units for which the user is authorized to use the requested feature will be returned
  'divisionId': "divisionId_example" // String | If specified, the list of business units belonging to the specified division will be returned
};

apiInstance.getWorkforcemanagementBusinessunits(opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **feature** | **String** | If specified, the list of business units for which the user is authorized to use the requested feature will be returned | [optional] <br />**Values**: AgentSchedule, AgentTimeOffRequest, Coaching, Learning, ActivityCodes, Agents, BuActivityCodes, BusinessUnits, HistoricalAdherence, HistoricalShrinkage, IntradayMonitoring, BuIntradayMonitoring, ManagementUnits, RealTimeAdherence, Schedules, BuSchedules, ServiceGoalTemplates, PlanningGroups, ShiftTrading, ShortTermForecasts, BuShortTermForecasts, StaffingGroups, TimeOffPlans, TimeOffRequests, TimeOffLimits, WorkPlanRotations, WorkPlans |
 **divisionId** | **String** | If specified, the list of business units belonging to the specified division will be returned | [optional]  |
{: class="table table-striped"}

### Return type

**BusinessUnitListing**

<a name="getWorkforcemanagementBusinessunitsDivisionviews"></a>

# BusinessUnitListing getWorkforcemanagementBusinessunitsDivisionviews(opts)


GET /api/v2/workforcemanagement/businessunits/divisionviews

Get business units across divisions

Requires ANY permissions:

* wfm:businessUnit:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'divisionId': ["divisionId_example"] // [String] | The divisionIds to filter by. If omitted, will return business units in all divisions
};

apiInstance.getWorkforcemanagementBusinessunitsDivisionviews(opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **[String]** | The divisionIds to filter by. If omitted, will return business units in all divisions | [optional]  |
{: class="table table-striped"}

### Return type

**BusinessUnitListing**

<a name="getWorkforcemanagementCalendarDataIcs"></a>

# **&#39;String&#39;** getWorkforcemanagementCalendarDataIcs(calendarId)


GET /api/v2/workforcemanagement/calendar/data/ics

Get ics formatted calendar based on shareable link

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WorkforceManagementApi();

let calendarId = "calendarId_example"; // String | The id of the ics-formatted calendar

apiInstance.getWorkforcemanagementCalendarDataIcs(calendarId)
  .then((data) => {
    console.log(`getWorkforcemanagementCalendarDataIcs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementCalendarDataIcs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **calendarId** | **String** | The id of the ics-formatted calendar |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

<a name="getWorkforcemanagementCalendarUrlIcs"></a>

# CalendarUrlResponse getWorkforcemanagementCalendarUrlIcs()


GET /api/v2/workforcemanagement/calendar/url/ics

Get existing calendar link for the current user

Requires ALL permissions:

* wfm:agentSchedule:sync
* wfm:agentSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementCalendarUrlIcs()
  .then((data) => {
    console.log(`getWorkforcemanagementCalendarUrlIcs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementCalendarUrlIcs');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**CalendarUrlResponse**

<a name="getWorkforcemanagementHistoricaldataDeletejob"></a>

# HistoricalImportDeleteJobResponse getWorkforcemanagementHistoricaldataDeletejob()


GET /api/v2/workforcemanagement/historicaldata/deletejob

Retrieves delete job status for historical data imports of the organization

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementHistoricaldataDeletejob()
  .then((data) => {
    console.log(`getWorkforcemanagementHistoricaldataDeletejob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementHistoricaldataDeletejob');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**HistoricalImportDeleteJobResponse**

<a name="getWorkforcemanagementHistoricaldataImportstatus"></a>

# HistoricalImportStatusListing getWorkforcemanagementHistoricaldataImportstatus()


GET /api/v2/workforcemanagement/historicaldata/importstatus

Retrieves status of the historical data imports of the organization

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementHistoricaldataImportstatus()
  .then((data) => {
    console.log(`getWorkforcemanagementHistoricaldataImportstatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementHistoricaldataImportstatus');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**HistoricalImportStatusListing**

<a name="getWorkforcemanagementIntegrationsHris"></a>

# WfmIntegrationListing getWorkforcemanagementIntegrationsHris()


GET /api/v2/workforcemanagement/integrations/hris

Get integrations

Requires ANY permissions:

* wfm:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementIntegrationsHris()
  .then((data) => {
    console.log(`getWorkforcemanagementIntegrationsHris success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementIntegrationsHris');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**WfmIntegrationListing**

<a name="getWorkforcemanagementIntegrationsHrisTimeofftypesJob"></a>

# HrisTimeOffTypesJobResponse getWorkforcemanagementIntegrationsHrisTimeofftypesJob(jobId)


GET /api/v2/workforcemanagement/integrations/hris/timeofftypes/jobs/{jobId}

Query the results of time off types job

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The ID of the job.

apiInstance.getWorkforcemanagementIntegrationsHrisTimeofftypesJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementIntegrationsHrisTimeofftypesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementIntegrationsHrisTimeofftypesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The ID of the job. |  |
{: class="table table-striped"}

### Return type

**HrisTimeOffTypesJobResponse**

<a name="getWorkforcemanagementManagementunit"></a>

# ManagementUnit getWorkforcemanagementManagementunit(managementUnitId, opts)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}

Get management unit

settings.shortTermForecasting is deprecated and now lives on the business unit

Requires ANY permissions:

* wfm:activityCode:add
* wfm:activityCode:delete
* wfm:activityCode:edit
* wfm:activityCode:view
* wfm:agent:edit
* wfm:agentSchedule:view
* wfm:agentTimeOffRequest:submit
* wfm:agent:view
* wfm:businessUnit:add
* wfm:businessUnit:delete
* wfm:businessUnit:edit
* wfm:businessUnit:view
* wfm:historicalAdherence:view
* wfm:shrinkage:view
* wfm:intraday:view
* wfm:managementUnit:add
* wfm:managementUnit:delete
* wfm:managementUnit:edit
* wfm:managementUnit:view
* wfm:publishedSchedule:view
* wfm:realtimeAdherence:view
* wfm:schedule:add
* wfm:schedule:delete
* wfm:schedule:edit
* wfm:schedule:generate
* wfm:schedule:view
* wfm:serviceGoalTemplate:add
* wfm:serviceGoalTemplate:delete
* wfm:serviceGoalTemplate:edit
* wfm:serviceGoalTemplate:view
* wfm:planningGroup:add
* wfm:planningGroup:delete
* wfm:planningGroup:edit
* wfm:planningGroup:view
* wfm:shiftTradeRequest:edit
* wfm:shiftTradeRequest:view
* wfm:agentShiftTradeRequest:participate
* wfm:shortTermForecast:add
* wfm:shortTermForecast:delete
* wfm:shortTermForecast:edit
* wfm:shortTermForecast:view
* wfm:staffingGroup:add
* wfm:staffingGroup:delete
* wfm:staffingGroup:edit
* wfm:staffingGroup:view
* wfm:timeOffLimit:add
* wfm:timeOffLimit:delete
* wfm:timeOffLimit:edit
* wfm:timeOffLimit:view
* wfm:timeOffPlan:add
* wfm:timeOffPlan:delete
* wfm:timeOffPlan:edit
* wfm:timeOffPlan:view
* wfm:timeOffRequest:add
* wfm:timeOffRequest:edit
* wfm:timeOffRequest:view
* wfm:workPlan:add
* wfm:workPlan:delete
* wfm:workPlan:edit
* wfm:workPlan:view
* wfm:workPlanRotation:add
* wfm:workPlanRotation:delete
* wfm:workPlanRotation:edit
* wfm:workPlanRotation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'expand': ["expand_example"] // [String] | 
};

apiInstance.getWorkforcemanagementManagementunit(managementUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **expand** | **[String]** |  | [optional] <br />**Values**: settings, settings.adherence, settings.timeOff, settings.scheduling, settings.shortTermForecasting, settings.shiftTrading |
{: class="table table-striped"}

### Return type

**ManagementUnit**

<a name="getWorkforcemanagementManagementunitActivitycodes"></a>

# ActivityCodeContainer getWorkforcemanagementManagementunitActivitycodes(managementUnitId)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/activitycodes

Deprecated: Instead use /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes. Get the list of activity codes

Requires ANY permissions:

* wfm:activityCode:add
* wfm:activityCode:delete
* wfm:activityCode:edit
* wfm:activityCode:view
* wfm:agent:edit
* wfm:agentSchedule:view
* wfm:agentTimeOffRequest:submit
* wfm:agent:view
* wfm:businessUnit:add
* wfm:businessUnit:delete
* wfm:businessUnit:edit
* wfm:businessUnit:view
* wfm:historicalAdherence:view
* wfm:shrinkage:view
* wfm:intraday:view
* wfm:managementUnit:add
* wfm:managementUnit:delete
* wfm:managementUnit:edit
* wfm:managementUnit:view
* wfm:publishedSchedule:view
* wfm:realtimeAdherence:view
* wfm:schedule:add
* wfm:schedule:delete
* wfm:schedule:edit
* wfm:schedule:generate
* wfm:schedule:view
* wfm:shortTermForecast:add
* wfm:shortTermForecast:delete
* wfm:shortTermForecast:edit
* wfm:shortTermForecast:view
* wfm:timeOffRequest:add
* wfm:timeOffRequest:edit
* wfm:timeOffRequest:view
* wfm:workPlan:add
* wfm:workPlan:delete
* wfm:workPlan:edit
* wfm:workPlan:view
* wfm:workPlanRotation:add
* wfm:workPlanRotation:delete
* wfm:workPlanRotation:edit
* wfm:workPlanRotation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.getWorkforcemanagementManagementunitActivitycodes(managementUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitActivitycodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitActivitycodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**ActivityCodeContainer**

<a name="getWorkforcemanagementManagementunitAdherence"></a>

# UserScheduleAdherenceListing getWorkforcemanagementManagementunitAdherence(managementUnitId, opts)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/adherence

Get a list of user schedule adherence records for the requested management unit

Requires ANY permissions:

* wfm:realtimeAdherence:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let opts = { 
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service.  For testing/app development purposes
};

apiInstance.getWorkforcemanagementManagementunitAdherence(managementUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitAdherence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitAdherence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit |  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**UserScheduleAdherenceListing**

<a name="getWorkforcemanagementManagementunitAgent"></a>

# WfmAgent getWorkforcemanagementManagementunitAgent(managementUnitId, agentId, opts)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}

Get data for agent in the management unit

Requires ANY permissions:

* wfm:agent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let agentId = "agentId_example"; // String | The agent id
let opts = { 
  'excludeCapabilities': true // Boolean | Excludes all capabilities of the agent such as queues, languages, and skills
};

apiInstance.getWorkforcemanagementManagementunitAgent(managementUnitId, agentId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitAgent success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitAgent');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **agentId** | **String** | The agent id |  |
 **excludeCapabilities** | **Boolean** | Excludes all capabilities of the agent such as queues, languages, and skills | [optional]  |
{: class="table table-striped"}

### Return type

**WfmAgent**

<a name="getWorkforcemanagementManagementunitAgentShifttrades"></a>

# ShiftTradeListResponse getWorkforcemanagementManagementunitAgentShifttrades(managementUnitId, agentId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}/shifttrades

Gets all the shift trades for a given agent

Requires ANY permissions:

* wfm:shiftTradeRequest:edit
* wfm:shiftTradeRequest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let agentId = "agentId_example"; // String | The agent id

apiInstance.getWorkforcemanagementManagementunitAgentShifttrades(managementUnitId, agentId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitAgentShifttrades success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitAgentShifttrades');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **agentId** | **String** | The agent id |  |
{: class="table table-striped"}

### Return type

**ShiftTradeListResponse**

<a name="getWorkforcemanagementManagementunitShifttradesMatched"></a>

# ShiftTradeMatchesSummaryResponse getWorkforcemanagementManagementunitShifttradesMatched(managementUnitId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/matched

Gets a summary of all shift trades in the matched state

Requires ANY permissions:

* wfm:shiftTradeRequest:view
* wfm:shiftTradeRequest:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.getWorkforcemanagementManagementunitShifttradesMatched(managementUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitShifttradesMatched success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitShifttradesMatched');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**ShiftTradeMatchesSummaryResponse**

<a name="getWorkforcemanagementManagementunitShifttradesUsers"></a>

# WfmUserEntityListing getWorkforcemanagementManagementunitShifttradesUsers(managementUnitId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/users

Gets list of users available for whom you can send direct shift trade requests

Requires ANY permissions:

* wfm:agentShiftTradeRequest:participate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.getWorkforcemanagementManagementunitShifttradesUsers(managementUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitShifttradesUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitShifttradesUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**WfmUserEntityListing**

<a name="getWorkforcemanagementManagementunitTimeofflimit"></a>

# TimeOffLimit getWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}

Gets a time off limit object

Returns properties of time off limit object, but not daily values.

Requires ANY permissions:

* wfm:timeOffLimit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let timeOffLimitId = "timeOffLimitId_example"; // String | The ID of the time off limit to fetch

apiInstance.getWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitTimeofflimit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitTimeofflimit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **timeOffLimitId** | **String** | The ID of the time off limit to fetch |  |
{: class="table table-striped"}

### Return type

**TimeOffLimit**

<a name="getWorkforcemanagementManagementunitTimeofflimits"></a>

# TimeOffLimitListing getWorkforcemanagementManagementunitTimeofflimits(managementUnitId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits

Gets a list of time off limit objects under management unit.

Currently only one time off limit object is allowed under management unit, so the list contains either 0 or 1 element.

Requires ANY permissions:

* wfm:timeOffLimit:view
* wfm:timeOffPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.

apiInstance.getWorkforcemanagementManagementunitTimeofflimits(managementUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitTimeofflimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitTimeofflimits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
{: class="table table-striped"}

### Return type

**TimeOffLimitListing**

<a name="getWorkforcemanagementManagementunitTimeoffplan"></a>

# TimeOffPlan getWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId}

Gets a time off plan

Requires ANY permissions:

* wfm:timeOffPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let timeOffPlanId = "timeOffPlanId_example"; // String | The ID of the time off plan to fetch

apiInstance.getWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitTimeoffplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitTimeoffplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit |  |
 **timeOffPlanId** | **String** | The ID of the time off plan to fetch |  |
{: class="table table-striped"}

### Return type

**TimeOffPlan**

<a name="getWorkforcemanagementManagementunitTimeoffplans"></a>

# TimeOffPlanListing getWorkforcemanagementManagementunitTimeoffplans(managementUnitId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans

Gets a list of time off plans

Requires ANY permissions:

* wfm:timeOffPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit

apiInstance.getWorkforcemanagementManagementunitTimeoffplans(managementUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitTimeoffplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitTimeoffplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit |  |
{: class="table table-striped"}

### Return type

**TimeOffPlanListing**

<a name="getWorkforcemanagementManagementunitUserTimeoffrequest"></a>

# TimeOffRequestResponse getWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}

Get a time off request

Requires ANY permissions:

* wfm:timeOffRequest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let userId = "userId_example"; // String | The userId to whom the Time Off Request applies.
let timeOffRequestId = "timeOffRequestId_example"; // String | Time Off Request Id

apiInstance.getWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitUserTimeoffrequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitUserTimeoffrequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **userId** | **String** | The userId to whom the Time Off Request applies. |  |
 **timeOffRequestId** | **String** | Time Off Request Id |  |
{: class="table table-striped"}

### Return type

**TimeOffRequestResponse**

<a name="getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits"></a>

# QueryTimeOffLimitValuesResponse getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits(managementUnitId, userId, timeOffRequestId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}/timeofflimits

Retrieves time off limit, allocated and waitlisted values according to specific time off request

Requires ALL permissions:

* wfm:timeOffRequest:view
* wfm:timeOffLimit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let userId = "userId_example"; // String | The userId to whom the time off request applies.
let timeOffRequestId = "timeOffRequestId_example"; // String | The ID of the time off request, which dates and activityCodeId determine limit values to retrieve

apiInstance.getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits(managementUnitId, userId, timeOffRequestId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **userId** | **String** | The userId to whom the time off request applies. |  |
 **timeOffRequestId** | **String** | The ID of the time off request, which dates and activityCodeId determine limit values to retrieve |  |
{: class="table table-striped"}

### Return type

**QueryTimeOffLimitValuesResponse**

<a name="getWorkforcemanagementManagementunitUserTimeoffrequests"></a>

# TimeOffRequestList getWorkforcemanagementManagementunitUserTimeoffrequests(managementUnitId, userId, opts)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests

Get a list of time off requests for a given user

Requires ANY permissions:

* wfm:timeOffRequest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let userId = "userId_example"; // String | The userId to whom the Time Off Request applies.
let opts = { 
  'recentlyReviewed': false // Boolean | Limit results to requests that have been reviewed within the preceding 30 days
};

apiInstance.getWorkforcemanagementManagementunitUserTimeoffrequests(managementUnitId, userId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitUserTimeoffrequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitUserTimeoffrequests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **userId** | **String** | The userId to whom the Time Off Request applies. |  |
 **recentlyReviewed** | **Boolean** | Limit results to requests that have been reviewed within the preceding 30 days | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**TimeOffRequestList**

<a name="getWorkforcemanagementManagementunitUsers"></a>

# WfmUserEntityListing getWorkforcemanagementManagementunitUsers(managementUnitId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/users

Get users in the management unit

Requires ANY permissions:

* wfm:agent:view
* wfm:historicalAdherence:view
* wfm:publishedSchedule:view
* wfm:realtimeAdherence:view
* wfm:schedule:view
* wfm:staffingGroup:view
* wfm:timeOffRequest:view
* wfm:workPlanRotation:view
* wfm:workPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.getWorkforcemanagementManagementunitUsers(managementUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitUsers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**WfmUserEntityListing**

<a name="getWorkforcemanagementManagementunitWeekSchedule"></a>

# WeekScheduleResponse getWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}

Deprecated.  Use the equivalent business unit resource instead. Get a week schedule

Requires ANY permissions:

* wfm:publishedSchedule:view
* wfm:schedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format.
let scheduleId = "scheduleId_example"; // String | The ID of the schedule to fetch
let opts = { 
  'expand': "expand_example", // String | Which fields, if any, to expand
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service.  For testing/app development purposes
};

apiInstance.getWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitWeekSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitWeekSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **scheduleId** | **String** | The ID of the schedule to fetch |  |
 **expand** | **String** | Which fields, if any, to expand | [optional] <br />**Values**: generationResults, headcountForecast |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**WeekScheduleResponse**

<a name="getWorkforcemanagementManagementunitWeekSchedules"></a>

# WeekScheduleListResponse getWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules

Deprecated.  Use the equivalent business unit resource instead. Get the list of schedules in a week in management unit

Requires ANY permissions:

* wfm:publishedSchedule:view
* wfm:schedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format.
let opts = { 
  'includeOnlyPublished': true, // Boolean | Return only published schedules
  'earliestWeekDate': "earliestWeekDate_example", // String | The start date of the earliest week to query in yyyy-MM-dd format
  'latestWeekDate': "latestWeekDate_example" // String | The start date of the latest week to query in yyyy-MM-dd format
};

apiInstance.getWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitWeekSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitWeekSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **includeOnlyPublished** | **Boolean** | Return only published schedules | [optional]  |
 **earliestWeekDate** | **String** | The start date of the earliest week to query in yyyy-MM-dd format | [optional]  |
 **latestWeekDate** | **String** | The start date of the latest week to query in yyyy-MM-dd format | [optional]  |
{: class="table table-striped"}

### Return type

**WeekScheduleListResponse**

<a name="getWorkforcemanagementManagementunitWeekShifttrades"></a>

# WeekShiftTradeListResponse getWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, opts)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades

Gets all the shift trades for a given week

Requires ANY permissions:

* wfm:shiftTradeRequest:view
* wfm:shiftTradeRequest:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'evaluateMatches': true // Boolean | Whether to evaluate the matches for violations
};

apiInstance.getWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitWeekShifttrades success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitWeekShifttrades');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **weekDateId** | **String** | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **evaluateMatches** | **Boolean** | Whether to evaluate the matches for violations | [optional] [default to true] |
{: class="table table-striped"}

### Return type

**WeekShiftTradeListResponse**

<a name="getWorkforcemanagementManagementunitWorkplan"></a>

# WorkPlan getWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, opts)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}

Get a work plan

Requires ANY permissions:

* wfm:workPlanRotation:view
* wfm:workPlan:view
* wfm:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanId = "workPlanId_example"; // String | The ID of the work plan to fetch
let opts = { 
  'includeOnly': ["includeOnly_example"] // [String] | limit response to the specified fields
};

apiInstance.getWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitWorkplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitWorkplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **workPlanId** | **String** | The ID of the work plan to fetch |  |
 **includeOnly** | **[String]** | limit response to the specified fields | [optional] <br />**Values**: agentCount, agents, optionalDays, shifts, shiftStartVariances |
{: class="table table-striped"}

### Return type

**WorkPlan**

<a name="getWorkforcemanagementManagementunitWorkplanrotation"></a>

# WorkPlanRotationResponse getWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}

Get a work plan rotation

Requires ANY permissions:

* wfm:workPlanRotation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanRotationId = "workPlanRotationId_example"; // String | The ID of the work plan rotation to fetch

apiInstance.getWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitWorkplanrotation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitWorkplanrotation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **workPlanRotationId** | **String** | The ID of the work plan rotation to fetch |  |
{: class="table table-striped"}

### Return type

**WorkPlanRotationResponse**

<a name="getWorkforcemanagementManagementunitWorkplanrotations"></a>

# WorkPlanRotationListResponse getWorkforcemanagementManagementunitWorkplanrotations(managementUnitId, opts)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations

Get work plan rotations

Requires ANY permissions:

* wfm:agent:view
* wfm:workPlanRotation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'expand': ["expand_example"] // [String] | 
};

apiInstance.getWorkforcemanagementManagementunitWorkplanrotations(managementUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitWorkplanrotations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitWorkplanrotations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **expand** | **[String]** |  | [optional] <br />**Values**: agents |
{: class="table table-striped"}

### Return type

**WorkPlanRotationListResponse**

<a name="getWorkforcemanagementManagementunitWorkplans"></a>

# WorkPlanListResponse getWorkforcemanagementManagementunitWorkplans(managementUnitId, opts)


GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans

Get work plans

"expand=details" is deprecated

Requires ANY permissions:

* wfm:agent:view
* wfm:publishedSchedule:view
* wfm:schedule:view
* wfm:workPlanRotation:view
* wfm:workPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'expand': ["expand_example"] // [String] | Include to access additional data on the work plans
};

apiInstance.getWorkforcemanagementManagementunitWorkplans(managementUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitWorkplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitWorkplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **expand** | **[String]** | Include to access additional data on the work plans | [optional] <br />**Values**: agentCount, agents, optionalDays, shifts, shiftStartVariances, details |
{: class="table table-striped"}

### Return type

**WorkPlanListResponse**

<a name="getWorkforcemanagementManagementunits"></a>

# ManagementUnitListing getWorkforcemanagementManagementunits(opts)


GET /api/v2/workforcemanagement/managementunits

Get management units

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'pageSize': 3.4, // Number | Deprecated, paging is not supported
  'pageNumber': 3.4, // Number | Deprecated, paging is not supported
  'expand': "expand_example", // String | Deprecated, expand settings on the single MU route
  'feature': "feature_example", // String | If specified, the list of management units for which the user is authorized to use the requested feature will be returned
  'divisionId': "divisionId_example" // String | If specified, the list of management units belonging to the specified division will be returned
};

apiInstance.getWorkforcemanagementManagementunits(opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Deprecated, paging is not supported | [optional]  |
 **pageNumber** | **Number** | Deprecated, paging is not supported | [optional]  |
 **expand** | **String** | Deprecated, expand settings on the single MU route | [optional] <br />**Values**: details |
 **feature** | **String** | If specified, the list of management units for which the user is authorized to use the requested feature will be returned | [optional] <br />**Values**: AgentSchedule, AgentTimeOffRequest, Coaching, Learning, ActivityCodes, Agents, BuActivityCodes, BusinessUnits, HistoricalAdherence, HistoricalShrinkage, IntradayMonitoring, BuIntradayMonitoring, ManagementUnits, RealTimeAdherence, Schedules, BuSchedules, ServiceGoalTemplates, PlanningGroups, ShiftTrading, ShortTermForecasts, BuShortTermForecasts, StaffingGroups, TimeOffPlans, TimeOffRequests, TimeOffLimits, WorkPlanRotations, WorkPlans |
 **divisionId** | **String** | If specified, the list of management units belonging to the specified division will be returned | [optional]  |
{: class="table table-striped"}

### Return type

**ManagementUnitListing**

<a name="getWorkforcemanagementManagementunitsDivisionviews"></a>

# ManagementUnitListing getWorkforcemanagementManagementunitsDivisionviews(opts)


GET /api/v2/workforcemanagement/managementunits/divisionviews

Get management units across divisions

Requires ANY permissions:

* wfm:managementUnit:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'divisionId': ["divisionId_example"] // [String] | The divisionIds to filter by. If omitted, will return all divisions
};

apiInstance.getWorkforcemanagementManagementunitsDivisionviews(opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitsDivisionviews success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitsDivisionviews');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **divisionId** | **[String]** | The divisionIds to filter by. If omitted, will return all divisions | [optional]  |
{: class="table table-striped"}

### Return type

**ManagementUnitListing**

<a name="getWorkforcemanagementNotifications"></a>

# NotificationsResponse getWorkforcemanagementNotifications()


GET /api/v2/workforcemanagement/notifications

Get a list of notifications for the current user

Notifications are only initially sent if you have the relevant Notify and Edit permissions

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementNotifications()
  .then((data) => {
    console.log(`getWorkforcemanagementNotifications success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementNotifications');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**NotificationsResponse**

<a name="getWorkforcemanagementSchedulingjob"></a>

# SchedulingStatusResponse getWorkforcemanagementSchedulingjob(jobId)


GET /api/v2/workforcemanagement/schedulingjobs/{jobId}

Get status of the scheduling job

Requires ANY permissions:

* wfm:schedulingrequest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The id of the scheduling job

apiInstance.getWorkforcemanagementSchedulingjob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementSchedulingjob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementSchedulingjob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The id of the scheduling job |  |
{: class="table table-striped"}

### Return type

**SchedulingStatusResponse**

<a name="getWorkforcemanagementShifttrades"></a>

# ShiftTradeListResponse getWorkforcemanagementShifttrades()


GET /api/v2/workforcemanagement/shifttrades

Gets all of my shift trades

Requires ANY permissions:

* wfm:shiftTradeRequest:edit
* wfm:shiftTradeRequest:view
* wfm:agentShiftTradeRequest:participate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementShifttrades()
  .then((data) => {
    console.log(`getWorkforcemanagementShifttrades success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementShifttrades');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**ShiftTradeListResponse**

<a name="getWorkforcemanagementShrinkageJob"></a>

# WfmHistoricalShrinkageResponse getWorkforcemanagementShrinkageJob(jobId)


GET /api/v2/workforcemanagement/shrinkage/jobs/{jobId}

Request to fetch the status of the historical shrinkage query

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getWorkforcemanagementShrinkageJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementShrinkageJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementShrinkageJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

**WfmHistoricalShrinkageResponse**

<a name="getWorkforcemanagementTimeoffbalanceJob"></a>

# TimeOffBalanceJobResponse getWorkforcemanagementTimeoffbalanceJob(jobId)


GET /api/v2/workforcemanagement/timeoffbalance/jobs/{jobId}

Query the results of time off types job

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The ID of the job.

apiInstance.getWorkforcemanagementTimeoffbalanceJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementTimeoffbalanceJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementTimeoffbalanceJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The ID of the job. |  |
{: class="table table-striped"}

### Return type

**TimeOffBalanceJobResponse**

<a name="getWorkforcemanagementTimeoffrequest"></a>

# TimeOffRequestResponse getWorkforcemanagementTimeoffrequest(timeOffRequestId)


GET /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}

Get a time off request for the current user

Requires ANY permissions:

* wfm:agentSchedule:view
* wfm:agentTimeOffRequest:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let timeOffRequestId = "timeOffRequestId_example"; // String | The ID of the time off request

apiInstance.getWorkforcemanagementTimeoffrequest(timeOffRequestId)
  .then((data) => {
    console.log(`getWorkforcemanagementTimeoffrequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementTimeoffrequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **timeOffRequestId** | **String** | The ID of the time off request |  |
{: class="table table-striped"}

### Return type

**TimeOffRequestResponse**

<a name="getWorkforcemanagementTimeoffrequestWaitlistpositions"></a>

# WaitlistPositionListing getWorkforcemanagementTimeoffrequestWaitlistpositions(timeOffRequestId)


GET /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}/waitlistpositions

Get the daily waitlist positions of a time off request for the current user

Requires ANY permissions:

* wfm:agentTimeOffRequest:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let timeOffRequestId = "timeOffRequestId_example"; // String | The ID of the time off request

apiInstance.getWorkforcemanagementTimeoffrequestWaitlistpositions(timeOffRequestId)
  .then((data) => {
    console.log(`getWorkforcemanagementTimeoffrequestWaitlistpositions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementTimeoffrequestWaitlistpositions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **timeOffRequestId** | **String** | The ID of the time off request |  |
{: class="table table-striped"}

### Return type

**WaitlistPositionListing**

<a name="getWorkforcemanagementTimeoffrequests"></a>

# TimeOffRequestList getWorkforcemanagementTimeoffrequests(opts)


GET /api/v2/workforcemanagement/timeoffrequests

Get a list of time off requests for the current user

Requires ANY permissions:

* wfm:agentSchedule:view
* wfm:agentTimeOffRequest:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'recentlyReviewed': false // Boolean | Limit results to requests that have been reviewed within the preceding 30 days
};

apiInstance.getWorkforcemanagementTimeoffrequests(opts)
  .then((data) => {
    console.log(`getWorkforcemanagementTimeoffrequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementTimeoffrequests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recentlyReviewed** | **Boolean** | Limit results to requests that have been reviewed within the preceding 30 days | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**TimeOffRequestList**

<a name="patchWorkforcemanagementAgentAdherenceExplanation"></a>

# AdherenceExplanationAsyncResponse patchWorkforcemanagementAgentAdherenceExplanation(agentId, explanationId, body)


PATCH /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/{explanationId}

Update an adherence explanation

Requires ANY permissions:

* wfm:adherenceExplanation:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let agentId = "agentId_example"; // String | The ID of the agent to query
let explanationId = "explanationId_example"; // String | The ID of the explanation to update
let body = {}; // Object | The request body

apiInstance.patchWorkforcemanagementAgentAdherenceExplanation(agentId, explanationId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementAgentAdherenceExplanation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementAgentAdherenceExplanation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The ID of the agent to query |  |
 **explanationId** | **String** | The ID of the explanation to update |  |
 **body** | **Object** | The request body |  |
{: class="table table-striped"}

### Return type

**AdherenceExplanationAsyncResponse**

<a name="patchWorkforcemanagementBusinessunit"></a>

# BusinessUnitResponse patchWorkforcemanagementBusinessunit(businessUnitId, opts)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}

Update business unit

Requires ALL permissions:

* wfm:businessUnit:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementBusinessunit(businessUnitId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit, or 'mine' for the business unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**BusinessUnitResponse**

<a name="patchWorkforcemanagementBusinessunitActivitycode"></a>

# BusinessUnitActivityCode patchWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId, opts)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId}

Update an activity code

Requires ANY permissions:

* wfm:activityCode:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let activityCodeId = "activityCodeId_example"; // String | The ID of the activity code to update
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitActivitycode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitActivitycode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit, or 'mine' for the business unit of the logged-in user. |  |
 **activityCodeId** | **String** | The ID of the activity code to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**BusinessUnitActivityCode**

<a name="patchWorkforcemanagementBusinessunitPlanninggroup"></a>

# PlanningGroup patchWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId, opts)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId}

Updates the planning group

Requires ANY permissions:

* wfm:planningGroup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let planningGroupId = "planningGroupId_example"; // String | The ID of a planning group to update
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitPlanninggroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitPlanninggroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit. |  |
 **planningGroupId** | **String** | The ID of a planning group to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**PlanningGroup**

<a name="patchWorkforcemanagementBusinessunitSchedulingRun"></a>

# void patchWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId, opts)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}

Mark a schedule run as applied

Requires ANY permissions:

* wfm:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let runId = "runId_example"; // String | The ID of the schedule run
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId, opts)
  .then(() => {
    console.log('patchWorkforcemanagementBusinessunitSchedulingRun returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitSchedulingRun');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **runId** | **String** | The ID of the schedule run |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchWorkforcemanagementBusinessunitServicegoaltemplate"></a>

# ServiceGoalTemplate patchWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, opts)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId}

Updates a service goal template

Requires ANY permissions:

* wfm:serviceGoalTemplate:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let serviceGoalTemplateId = "serviceGoalTemplateId_example"; // String | The ID of a service goal template to update
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitServicegoaltemplate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitServicegoaltemplate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit. |  |
 **serviceGoalTemplateId** | **String** | The ID of a service goal template to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**ServiceGoalTemplate**

<a name="patchWorkforcemanagementManagementunit"></a>

# ManagementUnit patchWorkforcemanagementManagementunit(managementUnitId, opts)


PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}

Update the requested management unit

Requires ANY permissions:

* wfm:managementUnit:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunit(managementUnitId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**ManagementUnit**

<a name="patchWorkforcemanagementManagementunitTimeofflimit"></a>

# TimeOffLimit patchWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId, opts)


PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}

Updates a time off limit object.

Updates time off limit object properties, but not daily values.

Requires ANY permissions:

* wfm:timeOffLimit:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let timeOffLimitId = "timeOffLimitId_example"; // String | The id of time off limit object to update
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitTimeofflimit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitTimeofflimit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **timeOffLimitId** | **String** | The id of time off limit object to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffLimit**

<a name="patchWorkforcemanagementManagementunitTimeoffplan"></a>

# TimeOffPlan patchWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId, opts)


PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId}

Updates a time off plan

Requires ANY permissions:

* wfm:timeOffPlan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let timeOffPlanId = "timeOffPlanId_example"; // String | The ID of the time off plan to update
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitTimeoffplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitTimeoffplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit |  |
 **timeOffPlanId** | **String** | The ID of the time off plan to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffPlan**

<a name="patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus"></a>

# UserTimeOffIntegrationStatusResponse patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus(managementUnitId, timeOffRequestId, userId, opts)


PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/{timeOffRequestId}/users/{userId}/integrationstatus

Set integration status for a time off request.

Requires ANY permissions:

* wfm:timeOffRequest:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let timeOffRequestId = "timeOffRequestId_example"; // String | The ID of the time off request.
let userId = "userId_example"; // String | The ID of user to whom the time off request belongs.
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus(managementUnitId, timeOffRequestId, userId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **timeOffRequestId** | **String** | The ID of the time off request. |  |
 **userId** | **String** | The ID of user to whom the time off request belongs. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**UserTimeOffIntegrationStatusResponse**

<a name="patchWorkforcemanagementManagementunitUserTimeoffrequest"></a>

# TimeOffRequestResponse patchWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId, opts)


PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}

Update a time off request

Requires ANY permissions:

* wfm:timeOffRequest:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let userId = "userId_example"; // String | The id of the user the requested time off request belongs to
let timeOffRequestId = "timeOffRequestId_example"; // String | The id of the time off request to update
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitUserTimeoffrequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitUserTimeoffrequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **userId** | **String** | The id of the user the requested time off request belongs to |  |
 **timeOffRequestId** | **String** | The id of the time off request to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffRequestResponse**

<a name="patchWorkforcemanagementManagementunitWeekShifttrade"></a>

# ShiftTradeResponse patchWorkforcemanagementManagementunitWeekShifttrade(managementUnitId, weekDateId, tradeId, body)


PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}

Updates a shift trade. This route can only be called by the initiating agent

Requires ANY permissions:

* wfm:agentShiftTradeRequest:participate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let tradeId = "tradeId_example"; // String | The ID of the shift trade to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementManagementunitWeekShifttrade(managementUnitId, weekDateId, tradeId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitWeekShifttrade success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitWeekShifttrade');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **weekDateId** | **String** | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **tradeId** | **String** | The ID of the shift trade to update |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**ShiftTradeResponse**

<a name="patchWorkforcemanagementManagementunitWorkplan"></a>

# WorkPlan patchWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, opts)


PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}

Update a work plan

Requires ANY permissions:

* wfm:workPlan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanId = "workPlanId_example"; // String | The ID of the work plan to update
let opts = { 
  'validationMode': "validationMode_example", // String | Allows to update work plan even if validation result is invalid
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitWorkplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitWorkplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **workPlanId** | **String** | The ID of the work plan to update |  |
 **validationMode** | **String** | Allows to update work plan even if validation result is invalid | [optional] <br />**Values**: Ignore |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkPlan**

<a name="patchWorkforcemanagementManagementunitWorkplanrotation"></a>

# WorkPlanRotationResponse patchWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId, opts)


PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}

Update a work plan rotation

Requires ANY permissions:

* wfm:workPlanRotation:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanRotationId = "workPlanRotationId_example"; // String | The ID of the work plan rotation to update
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitWorkplanrotation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitWorkplanrotation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **workPlanRotationId** | **String** | The ID of the work plan rotation to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkPlanRotationResponse**

<a name="patchWorkforcemanagementTimeoffrequest"></a>

# TimeOffRequestResponse patchWorkforcemanagementTimeoffrequest(timeOffRequestId, opts)


PATCH /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}

Update a time off request for the current user

Requires ANY permissions:

* wfm:agentTimeOffRequest:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let timeOffRequestId = "timeOffRequestId_example"; // String | The ID of the time off request
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementTimeoffrequest(timeOffRequestId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementTimeoffrequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementTimeoffrequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **timeOffRequestId** | **String** | The ID of the time off request |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffRequestResponse**

<a name="postWorkforcemanagementAdherenceExplanations"></a>

# AdherenceExplanationAsyncResponse postWorkforcemanagementAdherenceExplanations(body)


POST /api/v2/workforcemanagement/adherence/explanations

Submit an adherence explanation for the current user

Requires ANY permissions:

* wfm:agentAdherenceExplanation:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | The request body

apiInstance.postWorkforcemanagementAdherenceExplanations(body)
  .then((data) => {
    console.log(`postWorkforcemanagementAdherenceExplanations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAdherenceExplanations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The request body |  |
{: class="table table-striped"}

### Return type

**AdherenceExplanationAsyncResponse**

<a name="postWorkforcemanagementAdherenceExplanationsQuery"></a>

# QueryAdherenceExplanationsResponse postWorkforcemanagementAdherenceExplanationsQuery(body, opts)


POST /api/v2/workforcemanagement/adherence/explanations/query

Query adherence explanations for the current user

Requires ANY permissions:

* wfm:agentAdherenceExplanation:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | The request body
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.postWorkforcemanagementAdherenceExplanationsQuery(body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementAdherenceExplanationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAdherenceExplanationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The request body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**QueryAdherenceExplanationsResponse**

<a name="postWorkforcemanagementAdherenceHistorical"></a>

# WfmHistoricalAdherenceResponse postWorkforcemanagementAdherenceHistorical(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/workforcemanagement/adherence/historical

Deprecated. Use bulk routes instead (/adherence/historical/bulk)

Requires ANY permissions:

* wfm:historicalAdherence:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementAdherenceHistorical(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementAdherenceHistorical success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAdherenceHistorical');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WfmHistoricalAdherenceResponse**

<a name="postWorkforcemanagementAdherenceHistoricalBulk"></a>

# WfmHistoricalAdherenceBulkResponse postWorkforcemanagementAdherenceHistoricalBulk(opts)


POST /api/v2/workforcemanagement/adherence/historical/bulk

Request a historical adherence report in bulk

Requires ANY permissions:

* wfm:historicalAdherence:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementAdherenceHistoricalBulk(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementAdherenceHistoricalBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAdherenceHistoricalBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WfmHistoricalAdherenceBulkResponse**

<a name="postWorkforcemanagementAgentAdherenceExplanations"></a>

# AdherenceExplanationAsyncResponse postWorkforcemanagementAgentAdherenceExplanations(agentId, body)


POST /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations

Add an adherence explanation for the requested user

Requires ANY permissions:

* wfm:adherenceExplanation:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let agentId = "agentId_example"; // String | The ID of the agent to query
let body = {}; // Object | The request body

apiInstance.postWorkforcemanagementAgentAdherenceExplanations(agentId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementAgentAdherenceExplanations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAgentAdherenceExplanations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The ID of the agent to query |  |
 **body** | **Object** | The request body |  |
{: class="table table-striped"}

### Return type

**AdherenceExplanationAsyncResponse**

<a name="postWorkforcemanagementAgentAdherenceExplanationsQuery"></a>

# AgentQueryAdherenceExplanationsResponse postWorkforcemanagementAgentAdherenceExplanationsQuery(agentId, body, opts)


POST /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/query

Query adherence explanations for the given agent across a specified range

Requires ANY permissions:

* wfm:adherenceExplanation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let agentId = "agentId_example"; // String | The ID of the agent to query
let body = {}; // Object | The request body
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.postWorkforcemanagementAgentAdherenceExplanationsQuery(agentId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementAgentAdherenceExplanationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAgentAdherenceExplanationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The ID of the agent to query |  |
 **body** | **Object** | The request body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**AgentQueryAdherenceExplanationsResponse**

<a name="postWorkforcemanagementAgents"></a>

# MoveAgentsResponse postWorkforcemanagementAgents(opts)


POST /api/v2/workforcemanagement/agents

Move agents in and out of management unit

Requires ANY permissions:

* wfm:agent:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementAgents(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementAgents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAgents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**MoveAgentsResponse**

<a name="postWorkforcemanagementAgentsIntegrationsHrisQuery"></a>

# AgentsIntegrationsListing postWorkforcemanagementAgentsIntegrationsHrisQuery(opts)


POST /api/v2/workforcemanagement/agents/integrations/hris/query

Query integrations for agents

Requires ANY permissions:

* wfm:agent:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementAgentsIntegrationsHrisQuery(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementAgentsIntegrationsHrisQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAgentsIntegrationsHrisQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**AgentsIntegrationsListing**

<a name="postWorkforcemanagementAgentsMePossibleworkshifts"></a>

# AgentPossibleWorkShiftsResponse postWorkforcemanagementAgentsMePossibleworkshifts(body)


POST /api/v2/workforcemanagement/agents/me/possibleworkshifts

Get agent possible work shifts for requested time frame

Requires ANY permissions:

* wfm:agentPossibleWorkShifts:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementAgentsMePossibleworkshifts(body)
  .then((data) => {
    console.log(`postWorkforcemanagementAgentsMePossibleworkshifts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAgentsMePossibleworkshifts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**AgentPossibleWorkShiftsResponse**

<a name="postWorkforcemanagementAgentschedulesMine"></a>

# BuCurrentAgentScheduleSearchResponse postWorkforcemanagementAgentschedulesMine(opts)


POST /api/v2/workforcemanagement/agentschedules/mine

Get published schedule for the current user

Requires ANY permissions:

* wfm:agentSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementAgentschedulesMine(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementAgentschedulesMine success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAgentschedulesMine');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**BuCurrentAgentScheduleSearchResponse**

<a name="postWorkforcemanagementBusinessunitActivitycodes"></a>

# BusinessUnitActivityCode postWorkforcemanagementBusinessunitActivitycodes(businessUnitId, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes

Create a new activity code

Requires ANY permissions:

* wfm:activityCode:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementBusinessunitActivitycodes(businessUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitActivitycodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitActivitycodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit, or 'mine' for the business unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**BusinessUnitActivityCode**

<a name="postWorkforcemanagementBusinessunitAdherenceExplanationsQuery"></a>

# BuQueryAdherenceExplanationsResponse postWorkforcemanagementBusinessunitAdherenceExplanationsQuery(businessUnitId, body, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/explanations/query

Query adherence explanations across an entire business unit for the requested period

Requires ANY permissions:

* wfm:adherenceExplanation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | The request body
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.postWorkforcemanagementBusinessunitAdherenceExplanationsQuery(businessUnitId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitAdherenceExplanationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitAdherenceExplanationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | The request body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**BuQueryAdherenceExplanationsResponse**

<a name="postWorkforcemanagementBusinessunitAgentschedulesSearch"></a>

# BuAsyncAgentSchedulesSearchResponse postWorkforcemanagementBusinessunitAgentschedulesSearch(businessUnitId, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/agentschedules/search

Search published schedules

Requires ANY permissions:

* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
  'forceDownloadService': true, // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementBusinessunitAgentschedulesSearch(businessUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitAgentschedulesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitAgentschedulesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**BuAsyncAgentSchedulesSearchResponse**

<a name="postWorkforcemanagementBusinessunitIntraday"></a>

# AsyncIntradayResponse postWorkforcemanagementBusinessunitIntraday(businessUnitId, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday

Get intraday data for the given date for the requested planningGroupIds

Requires ANY permissions:

* wfm:intraday:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementBusinessunitIntraday(businessUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitIntraday success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitIntraday');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**AsyncIntradayResponse**

<a name="postWorkforcemanagementBusinessunitPlanninggroups"></a>

# PlanningGroup postWorkforcemanagementBusinessunitPlanninggroups(businessUnitId, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups

Adds a new planning group

Requires ANY permissions:

* wfm:planningGroup:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementBusinessunitPlanninggroups(businessUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitPlanninggroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitPlanninggroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**PlanningGroup**

<a name="postWorkforcemanagementBusinessunitServicegoaltemplates"></a>

# ServiceGoalTemplate postWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates

Adds a new service goal template

Requires ANY permissions:

* wfm:serviceGoalTemplate:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitServicegoaltemplates success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitServicegoaltemplates');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**ServiceGoalTemplate**

<a name="postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery"></a>

# BuAsyncAgentSchedulesQueryResponse postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery(businessUnitId, weekId, scheduleId, body, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/agentschedules/query

Loads agent schedule data from the schedule. Used in combination with the metadata route

Requires ANY permissions:

* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let scheduleId = "scheduleId_example"; // String | The ID of the schedule
let body = {}; // Object | body
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery(businessUnitId, weekId, scheduleId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **scheduleId** | **String** | The ID of the schedule |  |
 **body** | **Object** | body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**BuAsyncAgentSchedulesQueryResponse**

<a name="postWorkforcemanagementBusinessunitWeekScheduleCopy"></a>

# BuAsyncScheduleResponse postWorkforcemanagementBusinessunitWeekScheduleCopy(businessUnitId, weekId, scheduleId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy

Copy a schedule

Requires ANY permissions:

* wfm:schedule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let scheduleId = "scheduleId_example"; // String | The ID of the schedule to copy
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekScheduleCopy(businessUnitId, weekId, scheduleId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekScheduleCopy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekScheduleCopy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **scheduleId** | **String** | The ID of the schedule to copy |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**BuAsyncScheduleResponse**

<a name="postWorkforcemanagementBusinessunitWeekScheduleReschedule"></a>

# BuAsyncScheduleRunResponse postWorkforcemanagementBusinessunitWeekScheduleReschedule(businessUnitId, weekId, scheduleId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule

Start a rescheduling run

Requires ANY permissions:

* wfm:schedule:generate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let scheduleId = "scheduleId_example"; // String | The ID of the schedule
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekScheduleReschedule(businessUnitId, weekId, scheduleId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekScheduleReschedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekScheduleReschedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **scheduleId** | **String** | The ID of the schedule |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**BuAsyncScheduleRunResponse**

<a name="postWorkforcemanagementBusinessunitWeekScheduleUpdate"></a>

# BuAsyncScheduleResponse postWorkforcemanagementBusinessunitWeekScheduleUpdate(businessUnitId, weekId, scheduleId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/update

Starts processing a schedule update

Call after uploading the schedule data to the url supplied by the /update/uploadurl route

Requires ANY permissions:

* wfm:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let scheduleId = "scheduleId_example"; // String | The ID of the schedule
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekScheduleUpdate(businessUnitId, weekId, scheduleId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekScheduleUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekScheduleUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **scheduleId** | **String** | The ID of the schedule |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**BuAsyncScheduleResponse**

<a name="postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl"></a>

# UpdateScheduleUploadResponse postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl(businessUnitId, weekId, scheduleId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/update/uploadurl

Creates a signed upload URL for updating a schedule

Once the upload is complete, call the /{scheduleId}/update route to start the schedule update process

Requires ANY permissions:

* wfm:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let scheduleId = "scheduleId_example"; // String | The ID of the schedule
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl(businessUnitId, weekId, scheduleId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **scheduleId** | **String** | The ID of the schedule |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**UpdateScheduleUploadResponse**

<a name="postWorkforcemanagementBusinessunitWeekSchedules"></a>

# BuScheduleMetadata postWorkforcemanagementBusinessunitWeekSchedules(businessUnitId, weekId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules

Create a blank schedule

Requires ANY permissions:

* wfm:schedule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekSchedules(businessUnitId, weekId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**BuScheduleMetadata**

<a name="postWorkforcemanagementBusinessunitWeekSchedulesGenerate"></a>

# BuAsyncScheduleRunResponse postWorkforcemanagementBusinessunitWeekSchedulesGenerate(businessUnitId, weekId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/generate

Generate a schedule

Requires ANY permissions:

* wfm:schedule:generate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekSchedulesGenerate(businessUnitId, weekId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekSchedulesGenerate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekSchedulesGenerate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**BuAsyncScheduleRunResponse**

<a name="postWorkforcemanagementBusinessunitWeekSchedulesImport"></a>

# ScheduleUploadProcessingResponse postWorkforcemanagementBusinessunitWeekSchedulesImport(businessUnitId, weekId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/import

Starts processing a schedule import

Call after uploading the schedule data to the url supplied by the /import/uploadurl route

Requires ANY permissions:

* wfm:schedule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | 

apiInstance.postWorkforcemanagementBusinessunitWeekSchedulesImport(businessUnitId, weekId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekSchedulesImport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekSchedulesImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**ScheduleUploadProcessingResponse**

<a name="postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl"></a>

# ImportScheduleUploadResponse postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl(businessUnitId, weekId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/import/uploadurl

Creates a signed upload URL for importing a schedule

Once the upload is complete, call the /import route to start the schedule import process

Requires ANY permissions:

* wfm:schedule:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl(businessUnitId, weekId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**ImportScheduleUploadResponse**

<a name="postWorkforcemanagementBusinessunitWeekShorttermforecastCopy"></a>

# AsyncForecastOperationResult postWorkforcemanagementBusinessunitWeekShorttermforecastCopy(businessUnitId, weekDateId, forecastId, body, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy

Copy a short term forecast

Requires ANY permissions:

* wfm:shortTermForecast:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let forecastId = "forecastId_example"; // String | The ID of the forecast to copy
let body = {}; // Object | body
let opts = { 
  'forceAsync': true // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
};

apiInstance.postWorkforcemanagementBusinessunitWeekShorttermforecastCopy(businessUnitId, weekDateId, forecastId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekShorttermforecastCopy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekShorttermforecastCopy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **forecastId** | **String** | The ID of the forecast to copy |  |
 **body** | **Object** | body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**AsyncForecastOperationResult**

<a name="postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate"></a>

# AsyncForecastOperationResult postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate(businessUnitId, weekDateId, body, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/generate

Generate a short term forecast

Requires ANY permissions:

* wfm:shortTermForecast:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | body
let opts = { 
  'forceAsync': true // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
};

apiInstance.postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate(businessUnitId, weekDateId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**AsyncForecastOperationResult**

<a name="postWorkforcemanagementBusinessunitWeekShorttermforecastsImport"></a>

# ImportForecastResponse postWorkforcemanagementBusinessunitWeekShorttermforecastsImport(businessUnitId, weekDateId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/import

Starts importing the uploaded short term forecast

Call after uploading the forecast data to the url supplied by the /import/uploadurl route

Requires ANY permissions:

* wfm:shortTermForecast:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekShorttermforecastsImport(businessUnitId, weekDateId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekShorttermforecastsImport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekShorttermforecastsImport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**ImportForecastResponse**

<a name="postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl"></a>

# ImportForecastUploadResponse postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl(businessUnitId, weekDateId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/import/uploadurl

Creates a signed upload URL for importing a short term forecast

Once the upload is complete, call the /import route to start the short term forecast import process

Requires ANY permissions:

* wfm:shortTermForecast:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl(businessUnitId, weekDateId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | First day of schedule week in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**ImportForecastUploadResponse**

<a name="postWorkforcemanagementBusinessunits"></a>

# BusinessUnitResponse postWorkforcemanagementBusinessunits(opts)


POST /api/v2/workforcemanagement/businessunits

Add a new business unit

It may take a minute or two for a new business unit to be available for api operations

Requires ANY permissions:

* wfm:businessUnit:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementBusinessunits(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**BusinessUnitResponse**

<a name="postWorkforcemanagementCalendarUrlIcs"></a>

# CalendarUrlResponse postWorkforcemanagementCalendarUrlIcs(opts)


POST /api/v2/workforcemanagement/calendar/url/ics

Create a newly generated calendar link for the current user; if the current user has previously generated one, the generated link will be returned

Requires ALL permissions:

* wfm:agentSchedule:sync
* wfm:agentSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'language': en-US // String | A language tag (which is sometimes referred to as a locale identifier) to use to localize default activity code names in the ics-formatted calendar
};

apiInstance.postWorkforcemanagementCalendarUrlIcs(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementCalendarUrlIcs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementCalendarUrlIcs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **language** | **String** | A language tag (which is sometimes referred to as a locale identifier) to use to localize default activity code names in the ics-formatted calendar | [optional] [default to en-US] |
{: class="table table-striped"}

### Return type

**CalendarUrlResponse**

<a name="postWorkforcemanagementHistoricaldataDeletejob"></a>

# HistoricalImportDeleteJobResponse postWorkforcemanagementHistoricaldataDeletejob()


POST /api/v2/workforcemanagement/historicaldata/deletejob

Delete the entries of the historical data imports in the organization

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.postWorkforcemanagementHistoricaldataDeletejob()
  .then((data) => {
    console.log(`postWorkforcemanagementHistoricaldataDeletejob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementHistoricaldataDeletejob');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**HistoricalImportDeleteJobResponse**

<a name="postWorkforcemanagementHistoricaldataValidate"></a>

# void postWorkforcemanagementHistoricaldataValidate(opts)


POST /api/v2/workforcemanagement/historicaldata/validate

Trigger validation process for historical import

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementHistoricaldataValidate(opts)
  .then(() => {
    console.log('postWorkforcemanagementHistoricaldataValidate returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementHistoricaldataValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postWorkforcemanagementIntegrationsHriTimeofftypesJobs"></a>

# HrisTimeOffTypesResponse postWorkforcemanagementIntegrationsHriTimeofftypesJobs(hrisIntegrationId)


POST /api/v2/workforcemanagement/integrations/hris/{hrisIntegrationId}/timeofftypes/jobs

Get list of time off types configured in integration

Requires ANY permissions:

* wfm:integration:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let hrisIntegrationId = "hrisIntegrationId_example"; // String | The ID of the HRIS integration for which time off types are queried.

apiInstance.postWorkforcemanagementIntegrationsHriTimeofftypesJobs(hrisIntegrationId)
  .then((data) => {
    console.log(`postWorkforcemanagementIntegrationsHriTimeofftypesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementIntegrationsHriTimeofftypesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **hrisIntegrationId** | **String** | The ID of the HRIS integration for which time off types are queried. |  |
{: class="table table-striped"}

### Return type

**HrisTimeOffTypesResponse**

<a name="postWorkforcemanagementManagementunitAgentschedulesSearch"></a>

# BuAsyncAgentSchedulesSearchResponse postWorkforcemanagementManagementunitAgentschedulesSearch(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/agentschedules/search

Query published schedules for given given time range for set of users

Requires ANY permissions:

* wfm:publishedSchedule:view
* wfm:schedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
  'forceDownloadService': true, // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitAgentschedulesSearch(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitAgentschedulesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitAgentschedulesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**BuAsyncAgentSchedulesSearchResponse**

<a name="postWorkforcemanagementManagementunitHistoricaladherencequery"></a>

# WfmHistoricalAdherenceResponse postWorkforcemanagementManagementunitHistoricaladherencequery(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/historicaladherencequery

Request a historical adherence report

The maximum supported range for historical adherence queries is 31 days, or 7 days with includeExceptions = true

Requires ANY permissions:

* wfm:historicalAdherence:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitHistoricaladherencequery(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitHistoricaladherencequery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitHistoricaladherencequery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WfmHistoricalAdherenceResponse**

<a name="postWorkforcemanagementManagementunitMove"></a>

# MoveManagementUnitResponse postWorkforcemanagementManagementunitMove(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/move

Move the requested management unit to a new business unit

Returns status 200 if the management unit is already in the requested business unit

Requires ALL permissions:

* wfm:managementUnit:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitMove(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitMove success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitMove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**MoveManagementUnitResponse**

<a name="postWorkforcemanagementManagementunitSchedulesSearch"></a>

# UserScheduleContainer postWorkforcemanagementManagementunitSchedulesSearch(managementUnitId, opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/schedules/search

Query published schedules for given given time range for set of users

Requires ANY permissions:

* wfm:publishedSchedule:view
* wfm:schedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitSchedulesSearch(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitSchedulesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitSchedulesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**UserScheduleContainer**

<a name="postWorkforcemanagementManagementunitShrinkageJobs"></a>

# WfmHistoricalShrinkageResponse postWorkforcemanagementManagementunitShrinkageJobs(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/shrinkage/jobs

Request a historical shrinkage report

The maximum supported range for historical shrinkage queries is up to 32 days. Historical Shrinkage for a given date range can be queried in two modes - granular and aggregated. To see granular shrinkage information, provide granularity in the request body. 

Requires ANY permissions:

* wfm:shrinkage:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitShrinkageJobs(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitShrinkageJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitShrinkageJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WfmHistoricalShrinkageResponse**

<a name="postWorkforcemanagementManagementunitTimeofflimits"></a>

# TimeOffLimit postWorkforcemanagementManagementunitTimeofflimits(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits

Creates a new time off limit object under management unit.

Only one limit object is allowed under management unit, so an attempt to create second object will fail.

Requires ANY permissions:

* wfm:timeOffLimit:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitTimeofflimits(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitTimeofflimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitTimeofflimits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffLimit**

<a name="postWorkforcemanagementManagementunitTimeofflimitsValuesQuery"></a>

# QueryTimeOffLimitValuesResponse postWorkforcemanagementManagementunitTimeofflimitsValuesQuery(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/values/query

Retrieves time off limit related values based on a given set of filters.

Requires ANY permissions:

* wfm:timeOffLimit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitTimeofflimitsValuesQuery(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitTimeofflimitsValuesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitTimeofflimitsValuesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**QueryTimeOffLimitValuesResponse**

<a name="postWorkforcemanagementManagementunitTimeoffplans"></a>

# TimeOffPlan postWorkforcemanagementManagementunitTimeoffplans(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans

Creates a new time off plan

Requires ANY permissions:

* wfm:timeOffPlan:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitTimeoffplans(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitTimeoffplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitTimeoffplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffPlan**

<a name="postWorkforcemanagementManagementunitTimeoffrequests"></a>

# TimeOffRequestList postWorkforcemanagementManagementunitTimeoffrequests(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests

Create a new time off request

Requires ANY permissions:

* wfm:timeOffRequest:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitTimeoffrequests(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitTimeoffrequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitTimeoffrequests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffRequestList**

<a name="postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery"></a>

# UserTimeOffIntegrationStatusResponseListing postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/integrationstatus/query

Retrieves integration statuses for a list of time off requests

Requires ANY permissions:

* wfm:timeOffRequest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**UserTimeOffIntegrationStatusResponseListing**

<a name="postWorkforcemanagementManagementunitTimeoffrequestsQuery"></a>

# TimeOffRequestListing postWorkforcemanagementManagementunitTimeoffrequestsQuery(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query

Fetches time off requests matching the conditions specified in the request body

Request body requires one of the following: User ID is specified, statuses == [Pending] or date range to be specified and less than or equal to 33 days.  All other fields are filters

Requires ANY permissions:

* wfm:timeOffRequest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitTimeoffrequestsQuery(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitTimeoffrequestsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitTimeoffrequestsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffRequestListing**

<a name="postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery"></a>

# WaitlistPositionListing postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/waitlistpositions/query

Retrieves daily waitlist position for a list of time off requests

Requires ANY permissions:

* wfm:timeOffRequest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WaitlistPositionListing**

<a name="postWorkforcemanagementManagementunitUserTimeoffbalanceJobs"></a>

# TimeOffBalancesResponse postWorkforcemanagementManagementunitUserTimeoffbalanceJobs(managementUnitId, userId, body)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffbalance/jobs

Query time off balances for a given user for specified activity code and dates

Requires ANY permissions:

* wfm:timeOffRequest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let userId = "userId_example"; // String | The ID of the user
let body = {}; // Object | The request body

apiInstance.postWorkforcemanagementManagementunitUserTimeoffbalanceJobs(managementUnitId, userId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitUserTimeoffbalanceJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitUserTimeoffbalanceJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit |  |
 **userId** | **String** | The ID of the user |  |
 **body** | **Object** | The request body |  |
{: class="table table-striped"}

### Return type

**TimeOffBalancesResponse**

<a name="postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs"></a>

# TimeOffBalancesResponse postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs(managementUnitId, userId, timeOffRequestId)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}/timeoffbalance/jobs

Query time off balances for dates spanned by a given time off request

Requires ANY permissions:

* wfm:timeOffRequest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let userId = "userId_example"; // String | The userId to whom the time off request applies.
let timeOffRequestId = "timeOffRequestId_example"; // String | The time off request id.

apiInstance.postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs(managementUnitId, userId, timeOffRequestId)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **userId** | **String** | The userId to whom the time off request applies. |  |
 **timeOffRequestId** | **String** | The time off request id. |  |
{: class="table table-striped"}

### Return type

**TimeOffBalancesResponse**

<a name="postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate"></a>

# EstimateAvailableTimeOffResponse postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate(managementUnitId, userId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/estimate

Estimates available time off for an agent

Requires ANY permissions:

* wfm:timeOffRequest:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let userId = "userId_example"; // String | The id of the user for whom the time off request estimate is requested
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate(managementUnitId, userId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit |  |
 **userId** | **String** | The id of the user for whom the time off request estimate is requested |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**EstimateAvailableTimeOffResponse**

<a name="postWorkforcemanagementManagementunitWeekShifttradeMatch"></a>

# MatchShiftTradeResponse postWorkforcemanagementManagementunitWeekShifttradeMatch(managementUnitId, weekDateId, tradeId, body)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match

Matches a shift trade. This route can only be called by the receiving agent

Requires ANY permissions:

* wfm:agentShiftTradeRequest:participate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let tradeId = "tradeId_example"; // String | The ID of the shift trade to update
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitWeekShifttradeMatch(managementUnitId, weekDateId, tradeId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekShifttradeMatch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekShifttradeMatch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **weekDateId** | **String** | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **tradeId** | **String** | The ID of the shift trade to update |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**MatchShiftTradeResponse**

<a name="postWorkforcemanagementManagementunitWeekShifttrades"></a>

# ShiftTradeResponse postWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, body)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades

Adds a shift trade

Requires ANY permissions:

* wfm:agentShiftTradeRequest:participate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekShifttrades success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekShifttrades');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **weekDateId** | **String** | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**ShiftTradeResponse**

<a name="postWorkforcemanagementManagementunitWeekShifttradesSearch"></a>

# SearchShiftTradesResponse postWorkforcemanagementManagementunitWeekShifttradesSearch(managementUnitId, weekDateId, body)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search

Searches for potential shift trade matches for the current agent

Requires ANY permissions:

* wfm:agentShiftTradeRequest:participate

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitWeekShifttradesSearch(managementUnitId, weekDateId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekShifttradesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekShifttradesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **weekDateId** | **String** | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**SearchShiftTradesResponse**

<a name="postWorkforcemanagementManagementunitWeekShifttradesStateBulk"></a>

# BulkUpdateShiftTradeStateResponse postWorkforcemanagementManagementunitWeekShifttradesStateBulk(managementUnitId, weekDateId, body, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk

Updates the state of a batch of shift trades

Admin functionality is not supported with "mine".

Requires ANY permissions:

* wfm:agentShiftTradeRequest:participate
* wfm:shiftTradeRequest:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | body
let opts = { 
  'forceAsync': true // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
};

apiInstance.postWorkforcemanagementManagementunitWeekShifttradesStateBulk(managementUnitId, weekDateId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekShifttradesStateBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekShifttradesStateBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **weekDateId** | **String** | The start date of the week schedule in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**BulkUpdateShiftTradeStateResponse**

<a name="postWorkforcemanagementManagementunitWorkplanCopy"></a>

# WorkPlan postWorkforcemanagementManagementunitWorkplanCopy(managementUnitId, workPlanId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy

Create a copy of work plan

Requires ANY permissions:

* wfm:workPlan:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanId = "workPlanId_example"; // String | The ID of the work plan to create a copy
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitWorkplanCopy(managementUnitId, workPlanId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWorkplanCopy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWorkplanCopy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **workPlanId** | **String** | The ID of the work plan to create a copy |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkPlan**

<a name="postWorkforcemanagementManagementunitWorkplanValidate"></a>

# ValidateWorkPlanResponse postWorkforcemanagementManagementunitWorkplanValidate(managementUnitId, workPlanId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/validate

Validate Work Plan

Requires ANY permissions:

* wfm:workPlan:add
* wfm:workPlan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanId = "workPlanId_example"; // String | The ID of the work plan to validate. For new work plan, use the word 'new' for the ID.
let opts = { 
  'expand': ["expand_example"], // [String] | 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitWorkplanValidate(managementUnitId, workPlanId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWorkplanValidate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWorkplanValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **workPlanId** | **String** | The ID of the work plan to validate. For new work plan, use the word 'new' for the ID. |  |
 **expand** | **[String]** |  | [optional] <br />**Values**: messages |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**ValidateWorkPlanResponse**

<a name="postWorkforcemanagementManagementunitWorkplanrotationCopy"></a>

# WorkPlanRotationResponse postWorkforcemanagementManagementunitWorkplanrotationCopy(managementUnitId, workPlanRotationId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}/copy

Create a copy of work plan rotation

Requires ANY permissions:

* wfm:workPlanRotation:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanRotationId = "workPlanRotationId_example"; // String | The ID of the work plan rotation to create a copy
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitWorkplanrotationCopy(managementUnitId, workPlanRotationId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWorkplanrotationCopy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWorkplanrotationCopy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **workPlanRotationId** | **String** | The ID of the work plan rotation to create a copy |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkPlanRotationResponse**

<a name="postWorkforcemanagementManagementunitWorkplanrotations"></a>

# WorkPlanRotationResponse postWorkforcemanagementManagementunitWorkplanrotations(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations

Create a new work plan rotation

Requires ANY permissions:

* wfm:workPlanRotation:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitWorkplanrotations(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWorkplanrotations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWorkplanrotations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkPlanRotationResponse**

<a name="postWorkforcemanagementManagementunitWorkplans"></a>

# WorkPlan postWorkforcemanagementManagementunitWorkplans(managementUnitId, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans

Create a new work plan

Requires ANY permissions:

* wfm:workPlan:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'validationMode': "validationMode_example", // String | Allows to create work plan even if the validation result is invalid
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitWorkplans(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWorkplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWorkplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **validationMode** | **String** | Allows to create work plan even if the validation result is invalid | [optional] <br />**Values**: Ignore |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkPlan**

<a name="postWorkforcemanagementManagementunits"></a>

# ManagementUnit postWorkforcemanagementManagementunits(opts)


POST /api/v2/workforcemanagement/managementunits

Add a management unit

It may take a minute or two for a new management unit to be available for api operations

Requires ALL permissions:

* wfm:managementUnit:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunits(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**ManagementUnit**

<a name="postWorkforcemanagementNotificationsUpdate"></a>

# UpdateNotificationsResponse postWorkforcemanagementNotificationsUpdate(opts)


POST /api/v2/workforcemanagement/notifications/update

Mark a list of notifications as read or unread

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementNotificationsUpdate(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementNotificationsUpdate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementNotificationsUpdate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**UpdateNotificationsResponse**

<a name="postWorkforcemanagementSchedules"></a>

# UserScheduleContainer postWorkforcemanagementSchedules(opts)

<span style="background-color: #f0ad4e;display: inline-block;padding: 7px;font-weight: bold;line-height: 1;color: #ffffff;text-align: center;white-space: nowrap;vertical-align: baseline;border-radius: .25em;margin: 10px 0;">DEPRECATED</span>

POST /api/v2/workforcemanagement/schedules

Get published schedule for the current user

Requires ANY permissions:

* wfm:agentSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementSchedules(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**UserScheduleContainer**

<a name="postWorkforcemanagementTeamAdherenceHistorical"></a>

# WfmHistoricalAdherenceResponse postWorkforcemanagementTeamAdherenceHistorical(teamId, opts)


POST /api/v2/workforcemanagement/teams/{teamId}/adherence/historical

Request a teams historical adherence report

The maximum supported range for historical adherence queries is 31 days, or 7 days with includeExceptions = true

Requires ANY permissions:

* wfm:historicalAdherence:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let teamId = "teamId_example"; // String | The ID of the team
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementTeamAdherenceHistorical(teamId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementTeamAdherenceHistorical success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementTeamAdherenceHistorical');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **teamId** | **String** | The ID of the team |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WfmHistoricalAdherenceResponse**

<a name="postWorkforcemanagementTeamShrinkageJobs"></a>

# WfmHistoricalShrinkageResponse postWorkforcemanagementTeamShrinkageJobs(teamId, opts)


POST /api/v2/workforcemanagement/teams/{teamId}/shrinkage/jobs

Request a historical shrinkage report

The maximum supported range for historical shrinkage queries is up to 32 days

Requires ANY permissions:

* wfm:shrinkage:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let teamId = "teamId_example"; // String | The ID of the team
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementTeamShrinkageJobs(teamId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementTeamShrinkageJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementTeamShrinkageJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **teamId** | **String** | The ID of the team |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WfmHistoricalShrinkageResponse**

<a name="postWorkforcemanagementTimeoffbalanceJobs"></a>

# TimeOffBalancesResponse postWorkforcemanagementTimeoffbalanceJobs(body)


POST /api/v2/workforcemanagement/timeoffbalance/jobs

Query time off balances for the current user for specified activity code and dates

Requires ANY permissions:

* wfm:agentTimeOffRequest:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | The request body

apiInstance.postWorkforcemanagementTimeoffbalanceJobs(body)
  .then((data) => {
    console.log(`postWorkforcemanagementTimeoffbalanceJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementTimeoffbalanceJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The request body |  |
{: class="table table-striped"}

### Return type

**TimeOffBalancesResponse**

<a name="postWorkforcemanagementTimeofflimitsAvailableQuery"></a>

# AvailableTimeOffResponse postWorkforcemanagementTimeofflimitsAvailableQuery(opts)


POST /api/v2/workforcemanagement/timeofflimits/available/query

Queries available time off for the current user

Requires ANY permissions:

* wfm:agentTimeOffRequest:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementTimeofflimitsAvailableQuery(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementTimeofflimitsAvailableQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementTimeofflimitsAvailableQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**AvailableTimeOffResponse**

<a name="postWorkforcemanagementTimeoffrequests"></a>

# TimeOffRequestResponse postWorkforcemanagementTimeoffrequests(opts)


POST /api/v2/workforcemanagement/timeoffrequests

Create a time off request for the current user

Requires ANY permissions:

* wfm:agentTimeOffRequest:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementTimeoffrequests(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementTimeoffrequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementTimeoffrequests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffRequestResponse**

<a name="postWorkforcemanagementTimeoffrequestsEstimate"></a>

# EstimateAvailableTimeOffResponse postWorkforcemanagementTimeoffrequestsEstimate(opts)


POST /api/v2/workforcemanagement/timeoffrequests/estimate

Estimates available time off for current user

Requires ANY permissions:

* wfm:agentTimeOffRequest:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementTimeoffrequestsEstimate(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementTimeoffrequestsEstimate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementTimeoffrequestsEstimate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**EstimateAvailableTimeOffResponse**

<a name="postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery"></a>

# TimeOffIntegrationStatusResponseListing postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery(opts)


POST /api/v2/workforcemanagement/timeoffrequests/integrationstatus/query

Retrieves integration statuses for a list of current user time off requests

Requires ANY permissions:

* wfm:agentTimeOffRequest:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery(opts)
  .then((data) => {
    console.log(`postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffIntegrationStatusResponseListing**

<a name="putWorkforcemanagementAgentIntegrationsHris"></a>

# AgentIntegrationsResponse putWorkforcemanagementAgentIntegrationsHris(agentId, body)


PUT /api/v2/workforcemanagement/agents/{agentId}/integrations/hris

Update integrations for agent

Requires ANY permissions:

* wfm:agent:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let agentId = "agentId_example"; // String | The ID of the agent
let body = {}; // Object | body

apiInstance.putWorkforcemanagementAgentIntegrationsHris(agentId, body)
  .then((data) => {
    console.log(`putWorkforcemanagementAgentIntegrationsHris success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putWorkforcemanagementAgentIntegrationsHris');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **agentId** | **String** | The ID of the agent |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**AgentIntegrationsResponse**

<a name="putWorkforcemanagementManagementunitTimeofflimitValues"></a>

# TimeOffLimit putWorkforcemanagementManagementunitTimeofflimitValues(managementUnitId, timeOffLimitId, opts)


PUT /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}/values

Sets daily values for a date range of time off limit object

Note that only limit daily values can be set through API, allocated and waitlisted values are read-only for time off limit API

Requires ANY permissions:

* wfm:timeOffLimit:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let timeOffLimitId = "timeOffLimitId_example"; // String | The ID of the time off limit object to set values for
let opts = { 
  'body': {} // Object | body
};

apiInstance.putWorkforcemanagementManagementunitTimeofflimitValues(managementUnitId, timeOffLimitId, opts)
  .then((data) => {
    console.log(`putWorkforcemanagementManagementunitTimeofflimitValues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putWorkforcemanagementManagementunitTimeofflimitValues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **timeOffLimitId** | **String** | The ID of the time off limit object to set values for |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffLimit**

