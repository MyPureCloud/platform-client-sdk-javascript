# WorkforceManagementApi

# platformClient.WorkforceManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteWorkforcemanagementBusinessunit**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunit) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId} | Delete business unit
[**deleteWorkforcemanagementBusinessunitActivitycode**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitActivitycode) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId} | Deletes an activity code
[**deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocationshistory | Delete staffing group allocations history created for a capacity plan before the given date
[**deleteWorkforcemanagementBusinessunitPlanninggroup**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitPlanninggroup) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId} | Deletes the planning group
[**deleteWorkforcemanagementBusinessunitSchedulingRun**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitSchedulingRun) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId} | Cancel a scheduling run
[**deleteWorkforcemanagementBusinessunitServicegoaltemplate**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitServicegoaltemplate) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId} | Delete a service goal template
[**deleteWorkforcemanagementBusinessunitStaffinggroup**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitStaffinggroup) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId} | Deletes a staffing group
[**deleteWorkforcemanagementBusinessunitTimeofflimit**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitTimeofflimit) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId} | Deletes a time-off limit object
[**deleteWorkforcemanagementBusinessunitTimeoffplan**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitTimeoffplan) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId} | Deletes a time-off plan
[**deleteWorkforcemanagementBusinessunitWeekSchedule**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitWeekSchedule) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId} | Delete a schedule
[**deleteWorkforcemanagementBusinessunitWeekShorttermforecast**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitWeekShorttermforecast) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId} | Delete a short term forecast
[**deleteWorkforcemanagementBusinessunitWorkplanbid**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitWorkplanbid) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId} | Delete a work plan bid
[**deleteWorkforcemanagementBusinessunitWorkplanbidGroup**](WorkforceManagementApi#deleteWorkforcemanagementBusinessunitWorkplanbidGroup) | **DELETE** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId} | Delete a bid group by bid group Id
[**deleteWorkforcemanagementCalendarUrlIcs**](WorkforceManagementApi#deleteWorkforcemanagementCalendarUrlIcs) | **DELETE** /api/v2/workforcemanagement/calendar/url/ics | Disable generated calendar link for the current user
[**deleteWorkforcemanagementManagementunit**](WorkforceManagementApi#deleteWorkforcemanagementManagementunit) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId} | Delete management unit
[**deleteWorkforcemanagementManagementunitTimeofflimit**](WorkforceManagementApi#deleteWorkforcemanagementManagementunitTimeofflimit) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId} | Deletes a time off limit object
[**deleteWorkforcemanagementManagementunitTimeoffplan**](WorkforceManagementApi#deleteWorkforcemanagementManagementunitTimeoffplan) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId} | Deletes a time off plan
[**deleteWorkforcemanagementManagementunitWorkplan**](WorkforceManagementApi#deleteWorkforcemanagementManagementunitWorkplan) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId} | Delete a work plan
[**deleteWorkforcemanagementManagementunitWorkplanrotation**](WorkforceManagementApi#deleteWorkforcemanagementManagementunitWorkplanrotation) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId} | Delete a work plan rotation
[**getWorkforcemanagementAdherence**](WorkforceManagementApi#getWorkforcemanagementAdherence) | **GET** /api/v2/workforcemanagement/adherence | Get a list of UserScheduleAdherence records for the requested users
[**getWorkforcemanagementAdherenceExplanation**](WorkforceManagementApi#getWorkforcemanagementAdherenceExplanation) | **GET** /api/v2/workforcemanagement/adherence/explanations/{explanationId} | Get an adherence explanation for the current user
[**getWorkforcemanagementAdherenceExplanationsJob**](WorkforceManagementApi#getWorkforcemanagementAdherenceExplanationsJob) | **GET** /api/v2/workforcemanagement/adherence/explanations/jobs/{jobId} | Query the status of an adherence explanation operation. Only the user who started the operation can query the status
[**getWorkforcemanagementAdherenceHistoricalBulkJob**](WorkforceManagementApi#getWorkforcemanagementAdherenceHistoricalBulkJob) | **GET** /api/v2/workforcemanagement/adherence/historical/bulk/jobs/{jobId} | Request to fetch the status of the historical adherence bulk job. Only the user who started the operation can query the status
[**getWorkforcemanagementAdherenceHistoricalJob**](WorkforceManagementApi#getWorkforcemanagementAdherenceHistoricalJob) | **GET** /api/v2/workforcemanagement/adherence/historical/jobs/{jobId} | Query the status of a historical adherence request operation. Only the user who started the operation can query the status
[**getWorkforcemanagementAgentAdherenceExplanation**](WorkforceManagementApi#getWorkforcemanagementAgentAdherenceExplanation) | **GET** /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/{explanationId} | Get an adherence explanation
[**getWorkforcemanagementAgentManagementunit**](WorkforceManagementApi#getWorkforcemanagementAgentManagementunit) | **GET** /api/v2/workforcemanagement/agents/{agentId}/managementunit | Get the management unit to which the agent belongs
[**getWorkforcemanagementAgentsMeManagementunit**](WorkforceManagementApi#getWorkforcemanagementAgentsMeManagementunit) | **GET** /api/v2/workforcemanagement/agents/me/managementunit | Get the management unit to which the currently logged in agent belongs
[**getWorkforcemanagementAlternativeshiftsOffersJob**](WorkforceManagementApi#getWorkforcemanagementAlternativeshiftsOffersJob) | **GET** /api/v2/workforcemanagement/alternativeshifts/offers/jobs/{jobId} | Query the status of an alternative shift offers operation. Only the user who started the operation can query the status
[**getWorkforcemanagementAlternativeshiftsOffersSearchJob**](WorkforceManagementApi#getWorkforcemanagementAlternativeshiftsOffersSearchJob) | **GET** /api/v2/workforcemanagement/alternativeshifts/offers/search/jobs/{jobId} | Query the status of an alternative shift search offers operation. Only the user who started the operation can query the status
[**getWorkforcemanagementAlternativeshiftsSettings**](WorkforceManagementApi#getWorkforcemanagementAlternativeshiftsSettings) | **GET** /api/v2/workforcemanagement/alternativeshifts/settings | Get alternative shifts settings from the current logged in agent’s business unit
[**getWorkforcemanagementAlternativeshiftsTrade**](WorkforceManagementApi#getWorkforcemanagementAlternativeshiftsTrade) | **GET** /api/v2/workforcemanagement/alternativeshifts/trades/{tradeId} | Get my alternative shift trade by trade ID
[**getWorkforcemanagementAlternativeshiftsTrades**](WorkforceManagementApi#getWorkforcemanagementAlternativeshiftsTrades) | **GET** /api/v2/workforcemanagement/alternativeshifts/trades | Get a list of my alternative shifts trades
[**getWorkforcemanagementAlternativeshiftsTradesJob**](WorkforceManagementApi#getWorkforcemanagementAlternativeshiftsTradesJob) | **GET** /api/v2/workforcemanagement/alternativeshifts/trades/jobs/{jobId} | Query the status of an alternative shift trades operation. Only the user who started the operation can query the status
[**getWorkforcemanagementAlternativeshiftsTradesStateJob**](WorkforceManagementApi#getWorkforcemanagementAlternativeshiftsTradesStateJob) | **GET** /api/v2/workforcemanagement/alternativeshifts/trades/state/jobs/{jobId} | Query the status of an alternative shift trade state operation. Only the user who started the operation can query the status
[**getWorkforcemanagementBusinessunit**](WorkforceManagementApi#getWorkforcemanagementBusinessunit) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId} | Get business unit
[**getWorkforcemanagementBusinessunitActivitycode**](WorkforceManagementApi#getWorkforcemanagementBusinessunitActivitycode) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId} | Get an activity code
[**getWorkforcemanagementBusinessunitActivitycodes**](WorkforceManagementApi#getWorkforcemanagementBusinessunitActivitycodes) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes | Get activity codes
[**getWorkforcemanagementBusinessunitActivityplan**](WorkforceManagementApi#getWorkforcemanagementBusinessunitActivityplan) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId} | Get an activity plan
[**getWorkforcemanagementBusinessunitActivityplanRunsJob**](WorkforceManagementApi#getWorkforcemanagementBusinessunitActivityplanRunsJob) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/runs/jobs/{jobId} | Gets an activity plan run job
[**getWorkforcemanagementBusinessunitActivityplans**](WorkforceManagementApi#getWorkforcemanagementBusinessunitActivityplans) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans | Get activity plans
[**getWorkforcemanagementBusinessunitActivityplansJobs**](WorkforceManagementApi#getWorkforcemanagementBusinessunitActivityplansJobs) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/jobs | Gets the latest job for all activity plans in the business unit
[**getWorkforcemanagementBusinessunitAlternativeshiftsSettings**](WorkforceManagementApi#getWorkforcemanagementBusinessunitAlternativeshiftsSettings) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/settings | Get alternative shifts settings for a business unit
[**getWorkforcemanagementBusinessunitAlternativeshiftsTrade**](WorkforceManagementApi#getWorkforcemanagementBusinessunitAlternativeshiftsTrade) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/{tradeId} | Get an alternative shifts trade in a business unit for a given trade ID
[**getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob**](WorkforceManagementApi#getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/search/jobs/{jobId} | Query the status of an alternative shift search trade operation. Only the user who started the operation can query the status
[**getWorkforcemanagementBusinessunitCapacityplan**](WorkforceManagementApi#getWorkforcemanagementBusinessunitCapacityplan) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId} | Get a capacity plan
[**getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations**](WorkforceManagementApi#getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocations | Get a capacity plan's staffing group allocations
[**getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements**](WorkforceManagementApi#getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffingrequirements | Get a capacity plan's staffing requirements
[**getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast**](WorkforceManagementApi#getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplanning/longtermrequirements/automaticbestmethod/weeks/{weekDateId}/forecasts/{forecastId} | Get the latest long term staffing requirements for a business unit
[**getWorkforcemanagementBusinessunitCapacityplans**](WorkforceManagementApi#getWorkforcemanagementBusinessunitCapacityplans) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans | Get list of capacity plans for a business unit
[**getWorkforcemanagementBusinessunitIntradayPlanninggroups**](WorkforceManagementApi#getWorkforcemanagementBusinessunitIntradayPlanninggroups) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday/planninggroups | Get intraday planning groups for the given date
[**getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession**](WorkforceManagementApi#getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session | Get the latest session for the business unit ID
[**getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId**](WorkforceManagementApi#getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session/{sessionId} | Get the session details for the session ID
[**getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId**](WorkforceManagementApi#getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session/{sessionId}/snapshot/{snapshotId} | Get the snapshot details for the snapshot ID
[**getWorkforcemanagementBusinessunitManagementunits**](WorkforceManagementApi#getWorkforcemanagementBusinessunitManagementunits) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/managementunits | Get all authorized management units in the business unit
[**getWorkforcemanagementBusinessunitPlanninggroup**](WorkforceManagementApi#getWorkforcemanagementBusinessunitPlanninggroup) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId} | Get a planning group
[**getWorkforcemanagementBusinessunitPlanninggroups**](WorkforceManagementApi#getWorkforcemanagementBusinessunitPlanninggroups) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups | Gets list of planning groups
[**getWorkforcemanagementBusinessunitSchedulingRun**](WorkforceManagementApi#getWorkforcemanagementBusinessunitSchedulingRun) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId} | Get a scheduling run
[**getWorkforcemanagementBusinessunitSchedulingRunResult**](WorkforceManagementApi#getWorkforcemanagementBusinessunitSchedulingRunResult) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId}/result | Get the result of a rescheduling operation
[**getWorkforcemanagementBusinessunitSchedulingRuns**](WorkforceManagementApi#getWorkforcemanagementBusinessunitSchedulingRuns) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs | Get the list of scheduling runs
[**getWorkforcemanagementBusinessunitServicegoaltemplate**](WorkforceManagementApi#getWorkforcemanagementBusinessunitServicegoaltemplate) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId} | Get a service goal template
[**getWorkforcemanagementBusinessunitServicegoaltemplates**](WorkforceManagementApi#getWorkforcemanagementBusinessunitServicegoaltemplates) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates | Gets list of service goal templates
[**getWorkforcemanagementBusinessunitStaffinggroup**](WorkforceManagementApi#getWorkforcemanagementBusinessunitStaffinggroup) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId} | Gets a staffing group
[**getWorkforcemanagementBusinessunitStaffinggroups**](WorkforceManagementApi#getWorkforcemanagementBusinessunitStaffinggroups) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups | Gets a list of staffing groups
[**getWorkforcemanagementBusinessunitTimeofflimit**](WorkforceManagementApi#getWorkforcemanagementBusinessunitTimeofflimit) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId} | Gets a time-off limit object
[**getWorkforcemanagementBusinessunitTimeofflimits**](WorkforceManagementApi#getWorkforcemanagementBusinessunitTimeofflimits) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits | Gets a list of time-off limit objects
[**getWorkforcemanagementBusinessunitTimeoffplan**](WorkforceManagementApi#getWorkforcemanagementBusinessunitTimeoffplan) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId} | Gets a time-off plan
[**getWorkforcemanagementBusinessunitTimeoffplans**](WorkforceManagementApi#getWorkforcemanagementBusinessunitTimeoffplans) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans | Gets a list of time-off plans
[**getWorkforcemanagementBusinessunitWeekSchedule**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekSchedule) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId} | Get the metadata for the schedule, describing which management units and agents are in the scheduleSchedule data can then be loaded with the query route
[**getWorkforcemanagementBusinessunitWeekScheduleGenerationresults**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekScheduleGenerationresults) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults | Get the generation results for a generated schedule
[**getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/headcountforecast | Get the headcount forecast by planning group for the schedule
[**getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/history/agents/{agentId} | Loads agent's schedule history.
[**getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions | Get the performance prediction for the associated schedule
[**getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/{recalculationId} | Get recalculated performance prediction result
[**getWorkforcemanagementBusinessunitWeekSchedules**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekSchedules) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules | Get the list of week schedules for the specified week
[**getWorkforcemanagementBusinessunitWeekShorttermforecast**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekShorttermforecast) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId} | Get a short term forecast
[**getWorkforcemanagementBusinessunitWeekShorttermforecastData**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekShorttermforecastData) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/data | Get the result of a short term forecast calculation
[**getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/generationresults | Gets the forecast generation results
[**getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/longtermforecastdata | Get the result of a long term forecast calculation
[**getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/planninggroups | Gets the forecast planning group snapshot
[**getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/staffingrequirement | Get the staffing requirement by planning group for a forecast
[**getWorkforcemanagementBusinessunitWeekShorttermforecasts**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWeekShorttermforecasts) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts | Get short term forecasts
[**getWorkforcemanagementBusinessunitWorkplanbid**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWorkplanbid) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId} | Get a work plan bid
[**getWorkforcemanagementBusinessunitWorkplanbidGroup**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWorkplanbidGroup) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId} | Get a bid group by bid group Id
[**getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}/preferences | Gets the work plan preferences of all the agents in the work plan bid group
[**getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/summary | Get summary of bid groups that belong to a work plan bid
[**getWorkforcemanagementBusinessunitWorkplanbids**](WorkforceManagementApi#getWorkforcemanagementBusinessunitWorkplanbids) | **GET** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids | Get list of work plan bids
[**getWorkforcemanagementBusinessunits**](WorkforceManagementApi#getWorkforcemanagementBusinessunits) | **GET** /api/v2/workforcemanagement/businessunits | Get business units
[**getWorkforcemanagementBusinessunitsDivisionviews**](WorkforceManagementApi#getWorkforcemanagementBusinessunitsDivisionviews) | **GET** /api/v2/workforcemanagement/businessunits/divisionviews | Get business units across divisions
[**getWorkforcemanagementCalendarDataIcs**](WorkforceManagementApi#getWorkforcemanagementCalendarDataIcs) | **GET** /api/v2/workforcemanagement/calendar/data/ics | Get ics formatted calendar based on shareable link
[**getWorkforcemanagementCalendarUrlIcs**](WorkforceManagementApi#getWorkforcemanagementCalendarUrlIcs) | **GET** /api/v2/workforcemanagement/calendar/url/ics | Get existing calendar link for the current user
[**getWorkforcemanagementHistoricaldataBulkRemoveJob**](WorkforceManagementApi#getWorkforcemanagementHistoricaldataBulkRemoveJob) | **GET** /api/v2/workforcemanagement/historicaldata/bulk/remove/jobs/{jobId} | Retrieves delete job status for historical data imports associated with the job id
[**getWorkforcemanagementHistoricaldataBulkRemoveJobs**](WorkforceManagementApi#getWorkforcemanagementHistoricaldataBulkRemoveJobs) | **GET** /api/v2/workforcemanagement/historicaldata/bulk/remove/jobs | Retrieves all delete job status for historical data
[**getWorkforcemanagementHistoricaldataImportstatus**](WorkforceManagementApi#getWorkforcemanagementHistoricaldataImportstatus) | **GET** /api/v2/workforcemanagement/historicaldata/importstatus | Retrieves status of the historical data imports of the organization
[**getWorkforcemanagementHistoricaldataImportstatusJobId**](WorkforceManagementApi#getWorkforcemanagementHistoricaldataImportstatusJobId) | **GET** /api/v2/workforcemanagement/historicaldata/importstatus/{jobId} | Retrieves status of the historical data imports associated with job id
[**getWorkforcemanagementIntegrationsHris**](WorkforceManagementApi#getWorkforcemanagementIntegrationsHris) | **GET** /api/v2/workforcemanagement/integrations/hris | Get integrations
[**getWorkforcemanagementIntegrationsHrisTimeofftypesJob**](WorkforceManagementApi#getWorkforcemanagementIntegrationsHrisTimeofftypesJob) | **GET** /api/v2/workforcemanagement/integrations/hris/timeofftypes/jobs/{jobId} | Query the results of time off types job
[**getWorkforcemanagementManagementunit**](WorkforceManagementApi#getWorkforcemanagementManagementunit) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId} | Get management unit
[**getWorkforcemanagementManagementunitActivitycodes**](WorkforceManagementApi#getWorkforcemanagementManagementunitActivitycodes) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/activitycodes | Deprecated: Instead use /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes. Get the list of activity codes
[**getWorkforcemanagementManagementunitAdherence**](WorkforceManagementApi#getWorkforcemanagementManagementunitAdherence) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/adherence | Get a list of user schedule adherence records for the requested management unit
[**getWorkforcemanagementManagementunitAgent**](WorkforceManagementApi#getWorkforcemanagementManagementunitAgent) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId} | Get data for agent in the management unit
[**getWorkforcemanagementManagementunitAgentShifttrades**](WorkforceManagementApi#getWorkforcemanagementManagementunitAgentShifttrades) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}/shifttrades | Gets all the shift trades for a given agent
[**getWorkforcemanagementManagementunitShifttradesMatched**](WorkforceManagementApi#getWorkforcemanagementManagementunitShifttradesMatched) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/matched | Gets a summary of all shift trades in the matched state
[**getWorkforcemanagementManagementunitShifttradesUsers**](WorkforceManagementApi#getWorkforcemanagementManagementunitShifttradesUsers) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/shifttrades/users | Gets list of users available for whom you can send direct shift trade requests
[**getWorkforcemanagementManagementunitTimeofflimit**](WorkforceManagementApi#getWorkforcemanagementManagementunitTimeofflimit) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId} | Gets a time off limit object
[**getWorkforcemanagementManagementunitTimeofflimits**](WorkforceManagementApi#getWorkforcemanagementManagementunitTimeofflimits) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits | Gets a list of time off limit objects under management unit.
[**getWorkforcemanagementManagementunitTimeoffplan**](WorkforceManagementApi#getWorkforcemanagementManagementunitTimeoffplan) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId} | Gets a time off plan
[**getWorkforcemanagementManagementunitTimeoffplans**](WorkforceManagementApi#getWorkforcemanagementManagementunitTimeoffplans) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans | Gets a list of time off plans
[**getWorkforcemanagementManagementunitUserTimeoffrequest**](WorkforceManagementApi#getWorkforcemanagementManagementunitUserTimeoffrequest) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId} | Get a time off request
[**getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits**](WorkforceManagementApi#getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}/timeofflimits | Retrieves time off limit, allocated and waitlisted values according to specific time off request
[**getWorkforcemanagementManagementunitUserTimeoffrequests**](WorkforceManagementApi#getWorkforcemanagementManagementunitUserTimeoffrequests) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests | Get a list of time off requests for a given user
[**getWorkforcemanagementManagementunitUsers**](WorkforceManagementApi#getWorkforcemanagementManagementunitUsers) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users | Get users in the management unit
[**getWorkforcemanagementManagementunitWeekSchedule**](WorkforceManagementApi#getWorkforcemanagementManagementunitWeekSchedule) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId} | Deprecated.  Use the equivalent business unit resource instead. Get a week schedule
[**getWorkforcemanagementManagementunitWeekSchedules**](WorkforceManagementApi#getWorkforcemanagementManagementunitWeekSchedules) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules | Deprecated.  Use the equivalent business unit resource instead. Get the list of schedules in a week in management unit
[**getWorkforcemanagementManagementunitWeekShifttrades**](WorkforceManagementApi#getWorkforcemanagementManagementunitWeekShifttrades) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades | Gets all the shift trades for a given week
[**getWorkforcemanagementManagementunitWorkplan**](WorkforceManagementApi#getWorkforcemanagementManagementunitWorkplan) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId} | Get a work plan
[**getWorkforcemanagementManagementunitWorkplanrotation**](WorkforceManagementApi#getWorkforcemanagementManagementunitWorkplanrotation) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId} | Get a work plan rotation
[**getWorkforcemanagementManagementunitWorkplanrotations**](WorkforceManagementApi#getWorkforcemanagementManagementunitWorkplanrotations) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations | Get work plan rotations
[**getWorkforcemanagementManagementunitWorkplans**](WorkforceManagementApi#getWorkforcemanagementManagementunitWorkplans) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans | Get work plans
[**getWorkforcemanagementManagementunits**](WorkforceManagementApi#getWorkforcemanagementManagementunits) | **GET** /api/v2/workforcemanagement/managementunits | Get management units
[**getWorkforcemanagementManagementunitsDivisionviews**](WorkforceManagementApi#getWorkforcemanagementManagementunitsDivisionviews) | **GET** /api/v2/workforcemanagement/managementunits/divisionviews | Get management units across divisions
[**getWorkforcemanagementNotifications**](WorkforceManagementApi#getWorkforcemanagementNotifications) | **GET** /api/v2/workforcemanagement/notifications | Get a list of notifications for the current user
[**getWorkforcemanagementSchedulingjob**](WorkforceManagementApi#getWorkforcemanagementSchedulingjob) | **GET** /api/v2/workforcemanagement/schedulingjobs/{jobId} | Get status of the scheduling job
[**getWorkforcemanagementShifttrades**](WorkforceManagementApi#getWorkforcemanagementShifttrades) | **GET** /api/v2/workforcemanagement/shifttrades | Gets all of my shift trades
[**getWorkforcemanagementShrinkageJob**](WorkforceManagementApi#getWorkforcemanagementShrinkageJob) | **GET** /api/v2/workforcemanagement/shrinkage/jobs/{jobId} | Request to fetch the status of the historical shrinkage query
[**getWorkforcemanagementTeamAdherence**](WorkforceManagementApi#getWorkforcemanagementTeamAdherence) | **GET** /api/v2/workforcemanagement/teams/{teamId}/adherence | Get a list of user schedule adherence records for the requested team
[**getWorkforcemanagementTimeoffbalanceJob**](WorkforceManagementApi#getWorkforcemanagementTimeoffbalanceJob) | **GET** /api/v2/workforcemanagement/timeoffbalance/jobs/{jobId} | Query the results of time off types job
[**getWorkforcemanagementTimeoffrequest**](WorkforceManagementApi#getWorkforcemanagementTimeoffrequest) | **GET** /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId} | Get a time off request for the current user
[**getWorkforcemanagementTimeoffrequestWaitlistpositions**](WorkforceManagementApi#getWorkforcemanagementTimeoffrequestWaitlistpositions) | **GET** /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}/waitlistpositions | Get the daily waitlist positions of a time off request for the current user
[**getWorkforcemanagementTimeoffrequests**](WorkforceManagementApi#getWorkforcemanagementTimeoffrequests) | **GET** /api/v2/workforcemanagement/timeoffrequests | Get a list of time off requests for the current user
[**getWorkforcemanagementUserWorkplanbidranks**](WorkforceManagementApi#getWorkforcemanagementUserWorkplanbidranks) | **GET** /api/v2/workforcemanagement/users/{userId}/workplanbidranks | Get work plan bid ranks for a user
[**getWorkforcemanagementWorkplanbidPreferences**](WorkforceManagementApi#getWorkforcemanagementWorkplanbidPreferences) | **GET** /api/v2/workforcemanagement/workplanbids/{bidId}/preferences | Gets an agent's work plan bidding preference
[**getWorkforcemanagementWorkplanbidWorkplans**](WorkforceManagementApi#getWorkforcemanagementWorkplanbidWorkplans) | **GET** /api/v2/workforcemanagement/workplanbids/{bidId}/workplans | Gets an agent's work plans for a bid
[**getWorkforcemanagementWorkplanbids**](WorkforceManagementApi#getWorkforcemanagementWorkplanbids) | **GET** /api/v2/workforcemanagement/workplanbids | Gets the list of work plan bids that belong to an agent
[**patchWorkforcemanagementAgentAdherenceExplanation**](WorkforceManagementApi#patchWorkforcemanagementAgentAdherenceExplanation) | **PATCH** /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/{explanationId} | Update an adherence explanation
[**patchWorkforcemanagementAlternativeshiftsTrade**](WorkforceManagementApi#patchWorkforcemanagementAlternativeshiftsTrade) | **PATCH** /api/v2/workforcemanagement/alternativeshifts/trades/{tradeId} | Update my alternative shifts trade by trade ID
[**patchWorkforcemanagementAlternativeshiftsTradesStateJobs**](WorkforceManagementApi#patchWorkforcemanagementAlternativeshiftsTradesStateJobs) | **PATCH** /api/v2/workforcemanagement/alternativeshifts/trades/state/jobs | Bulk update alternative shift trade states
[**patchWorkforcemanagementBusinessunit**](WorkforceManagementApi#patchWorkforcemanagementBusinessunit) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId} | Update business unit
[**patchWorkforcemanagementBusinessunitActivitycode**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitActivitycode) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes/{activityCodeId} | Update an activity code
[**patchWorkforcemanagementBusinessunitActivityplan**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitActivityplan) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId} | Update an activity plan
[**patchWorkforcemanagementBusinessunitAlternativeshiftsSettings**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitAlternativeshiftsSettings) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/settings | Update alternative shifts settings for a business unit
[**patchWorkforcemanagementBusinessunitCapacityplan**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitCapacityplan) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId} | Update a capacity plan configuration
[**patchWorkforcemanagementBusinessunitPlanninggroup**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitPlanninggroup) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups/{planningGroupId} | Updates the planning group
[**patchWorkforcemanagementBusinessunitSchedulingRun**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitSchedulingRun) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/scheduling/runs/{runId} | Mark a schedule run as applied
[**patchWorkforcemanagementBusinessunitServicegoaltemplate**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitServicegoaltemplate) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates/{serviceGoalTemplateId} | Updates a service goal template
[**patchWorkforcemanagementBusinessunitStaffinggroup**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitStaffinggroup) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId} | Updates a staffing group
[**patchWorkforcemanagementBusinessunitTimeoffplan**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitTimeoffplan) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId} | Updates a time-off plan
[**patchWorkforcemanagementBusinessunitWorkplanbid**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitWorkplanbid) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId} | Update work plan bid
[**patchWorkforcemanagementBusinessunitWorkplanbidGroup**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitWorkplanbidGroup) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId} | Update a bid group by bid group Id
[**patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences**](WorkforceManagementApi#patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences) | **PATCH** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}/preferences | Overrides the assigned work plan for the specified agents
[**patchWorkforcemanagementManagementunit**](WorkforceManagementApi#patchWorkforcemanagementManagementunit) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId} | Update the requested management unit
[**patchWorkforcemanagementManagementunitAgents**](WorkforceManagementApi#patchWorkforcemanagementManagementunitAgents) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents | Update agent configurations
[**patchWorkforcemanagementManagementunitAgentsWorkplansBulk**](WorkforceManagementApi#patchWorkforcemanagementManagementunitAgentsWorkplansBulk) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/workplans/bulk | Updates agent work plan configuration
[**patchWorkforcemanagementManagementunitTimeofflimit**](WorkforceManagementApi#patchWorkforcemanagementManagementunitTimeofflimit) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId} | Updates a time off limit object.
[**patchWorkforcemanagementManagementunitTimeoffplan**](WorkforceManagementApi#patchWorkforcemanagementManagementunitTimeoffplan) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans/{timeOffPlanId} | Updates a time off plan
[**patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus**](WorkforceManagementApi#patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/{timeOffRequestId}/users/{userId}/integrationstatus | Set integration status for a time off request.
[**patchWorkforcemanagementManagementunitUserTimeoffrequest**](WorkforceManagementApi#patchWorkforcemanagementManagementunitUserTimeoffrequest) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId} | Update a time off request
[**patchWorkforcemanagementManagementunitWeekShifttrade**](WorkforceManagementApi#patchWorkforcemanagementManagementunitWeekShifttrade) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId} | Updates a shift trade. This route can only be called by the initiating agent
[**patchWorkforcemanagementManagementunitWorkplan**](WorkforceManagementApi#patchWorkforcemanagementManagementunitWorkplan) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId} | Update a work plan
[**patchWorkforcemanagementManagementunitWorkplanrotation**](WorkforceManagementApi#patchWorkforcemanagementManagementunitWorkplanrotation) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId} | Update a work plan rotation
[**patchWorkforcemanagementTimeoffrequest**](WorkforceManagementApi#patchWorkforcemanagementTimeoffrequest) | **PATCH** /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId} | Update a time off request for the current user
[**patchWorkforcemanagementUserWorkplanbidranks**](WorkforceManagementApi#patchWorkforcemanagementUserWorkplanbidranks) | **PATCH** /api/v2/workforcemanagement/users/{userId}/workplanbidranks | Update work plan bid ranks for a user
[**patchWorkforcemanagementUsersWorkplanbidranksBulk**](WorkforceManagementApi#patchWorkforcemanagementUsersWorkplanbidranksBulk) | **PATCH** /api/v2/workforcemanagement/users/workplanbidranks/bulk | Update bulk work plan bid ranks on users. Max 50 users can be updated at a time.
[**patchWorkforcemanagementWorkplanbidPreferences**](WorkforceManagementApi#patchWorkforcemanagementWorkplanbidPreferences) | **PATCH** /api/v2/workforcemanagement/workplanbids/{bidId}/preferences | Update an agent's work plan bidding preference
[**postWorkforcemanagementAdherenceExplanations**](WorkforceManagementApi#postWorkforcemanagementAdherenceExplanations) | **POST** /api/v2/workforcemanagement/adherence/explanations | Submit an adherence explanation for the current user
[**postWorkforcemanagementAdherenceExplanationsQuery**](WorkforceManagementApi#postWorkforcemanagementAdherenceExplanationsQuery) | **POST** /api/v2/workforcemanagement/adherence/explanations/query | Query adherence explanations for the current user
[**postWorkforcemanagementAdherenceHistorical**](WorkforceManagementApi#postWorkforcemanagementAdherenceHistorical) | **POST** /api/v2/workforcemanagement/adherence/historical | Deprecated. Use bulk routes instead (/adherence/historical/bulk)
[**postWorkforcemanagementAdherenceHistoricalBulk**](WorkforceManagementApi#postWorkforcemanagementAdherenceHistoricalBulk) | **POST** /api/v2/workforcemanagement/adherence/historical/bulk | Request a historical adherence report in bulk
[**postWorkforcemanagementAgentAdherenceExplanations**](WorkforceManagementApi#postWorkforcemanagementAgentAdherenceExplanations) | **POST** /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations | Add an adherence explanation for the requested user
[**postWorkforcemanagementAgentAdherenceExplanationsQuery**](WorkforceManagementApi#postWorkforcemanagementAgentAdherenceExplanationsQuery) | **POST** /api/v2/workforcemanagement/agents/{agentId}/adherence/explanations/query | Query adherence explanations for the given agent across a specified range
[**postWorkforcemanagementAgents**](WorkforceManagementApi#postWorkforcemanagementAgents) | **POST** /api/v2/workforcemanagement/agents | Move agents in and out of management unit
[**postWorkforcemanagementAgentsIntegrationsHrisQuery**](WorkforceManagementApi#postWorkforcemanagementAgentsIntegrationsHrisQuery) | **POST** /api/v2/workforcemanagement/agents/integrations/hris/query | Query integrations for agents
[**postWorkforcemanagementAgentsMePossibleworkshifts**](WorkforceManagementApi#postWorkforcemanagementAgentsMePossibleworkshifts) | **POST** /api/v2/workforcemanagement/agents/me/possibleworkshifts | Get agent possible work shifts for requested time frame
[**postWorkforcemanagementAgentschedulesMine**](WorkforceManagementApi#postWorkforcemanagementAgentschedulesMine) | **POST** /api/v2/workforcemanagement/agentschedules/mine | Get published schedule for the current user
[**postWorkforcemanagementAlternativeshiftsOffersJobs**](WorkforceManagementApi#postWorkforcemanagementAlternativeshiftsOffersJobs) | **POST** /api/v2/workforcemanagement/alternativeshifts/offers/jobs | Request a list of alternative shift offers for a given schedule
[**postWorkforcemanagementAlternativeshiftsOffersSearchJobs**](WorkforceManagementApi#postWorkforcemanagementAlternativeshiftsOffersSearchJobs) | **POST** /api/v2/workforcemanagement/alternativeshifts/offers/search/jobs | Request a search of alternative shift offers for a given shift
[**postWorkforcemanagementAlternativeshiftsTrades**](WorkforceManagementApi#postWorkforcemanagementAlternativeshiftsTrades) | **POST** /api/v2/workforcemanagement/alternativeshifts/trades | Create my alternative shift trade using an existing offer's jobId
[**postWorkforcemanagementBusinessunitActivitycodes**](WorkforceManagementApi#postWorkforcemanagementBusinessunitActivitycodes) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activitycodes | Create a new activity code
[**postWorkforcemanagementBusinessunitActivityplanRunsJobs**](WorkforceManagementApi#postWorkforcemanagementBusinessunitActivityplanRunsJobs) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/runs/jobs | Run an activity plan manually
[**postWorkforcemanagementBusinessunitActivityplans**](WorkforceManagementApi#postWorkforcemanagementBusinessunitActivityplans) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans | Create an activity plan
[**postWorkforcemanagementBusinessunitAdherenceExplanationsQuery**](WorkforceManagementApi#postWorkforcemanagementBusinessunitAdherenceExplanationsQuery) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/adherence/explanations/query | Query adherence explanations across an entire business unit for the requested period
[**postWorkforcemanagementBusinessunitAgentschedulesSearch**](WorkforceManagementApi#postWorkforcemanagementBusinessunitAgentschedulesSearch) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/agentschedules/search | Search published schedules
[**postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch**](WorkforceManagementApi#postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/search | List alternative shifts trades for a given management unit or agent
[**postWorkforcemanagementBusinessunitCapacityplanCopy**](WorkforceManagementApi#postWorkforcemanagementBusinessunitCapacityplanCopy) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/copy | Copy a capacity plan
[**postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate**](WorkforceManagementApi#postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/requirement/generate | Regenerate requirements for capacity plan
[**postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations**](WorkforceManagementApi#postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocations | Create staffing group allocations for a capacity plan
[**postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery**](WorkforceManagementApi#postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocationshistory/query | Query staffing groups allocations history for a capacity plan
[**postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate**](WorkforceManagementApi#postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplanning/longtermrequirements/automaticbestmethod/weeks/{weekDateId}/forecasts/{forecastId}/forceregenerate | Force regenerate the latest long term staffing requirements for a business unit
[**postWorkforcemanagementBusinessunitCapacityplans**](WorkforceManagementApi#postWorkforcemanagementBusinessunitCapacityplans) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans | Create a new capacity plan
[**postWorkforcemanagementBusinessunitCapacityplansBulkRemove**](WorkforceManagementApi#postWorkforcemanagementBusinessunitCapacityplansBulkRemove) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/bulk/remove | Delete capacity plans in a business unit
[**postWorkforcemanagementBusinessunitIntraday**](WorkforceManagementApi#postWorkforcemanagementBusinessunitIntraday) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/intraday | Get intraday data for the given date for the requested planningGroupIds
[**postWorkforcemanagementBusinessunitPlanninggroups**](WorkforceManagementApi#postWorkforcemanagementBusinessunitPlanninggroups) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/planninggroups | Adds a new planning group
[**postWorkforcemanagementBusinessunitServicegoaltemplates**](WorkforceManagementApi#postWorkforcemanagementBusinessunitServicegoaltemplates) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/servicegoaltemplates | Adds a new service goal template
[**postWorkforcemanagementBusinessunitStaffinggroups**](WorkforceManagementApi#postWorkforcemanagementBusinessunitStaffinggroups) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups | Creates a new staffing group
[**postWorkforcemanagementBusinessunitStaffinggroupsPlanninggroupsQuery**](WorkforceManagementApi#postWorkforcemanagementBusinessunitStaffinggroupsPlanninggroupsQuery) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/planninggroups/query | Gets a list of planning group to staffing groups list association
[**postWorkforcemanagementBusinessunitStaffinggroupsQuery**](WorkforceManagementApi#postWorkforcemanagementBusinessunitStaffinggroupsQuery) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/query | Gets staffing group associations for a list of user IDs
[**postWorkforcemanagementBusinessunitTimeofflimits**](WorkforceManagementApi#postWorkforcemanagementBusinessunitTimeofflimits) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits | Creates a new time-off limit object
[**postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery**](WorkforceManagementApi#postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/values/query | Retrieves time-off limit related values based on a given set of filters.
[**postWorkforcemanagementBusinessunitTimeoffplans**](WorkforceManagementApi#postWorkforcemanagementBusinessunitTimeoffplans) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans | Creates a new time-off plan
[**postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/agentschedules/query | Loads agent schedule data from the schedule. Used in combination with the metadata route
[**postWorkforcemanagementBusinessunitWeekScheduleCopy**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekScheduleCopy) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy | Copy a schedule
[**postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations | Request a daily recalculation of the performance prediction for the associated schedule
[**postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/uploadurl | Upload daily activity changes to be able to request a performance prediction recalculation
[**postWorkforcemanagementBusinessunitWeekScheduleReschedule**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekScheduleReschedule) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule | Start a rescheduling run
[**postWorkforcemanagementBusinessunitWeekScheduleUpdate**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekScheduleUpdate) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/update | Starts processing a schedule update
[**postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/update/uploadurl | Creates a signed upload URL for updating a schedule
[**postWorkforcemanagementBusinessunitWeekSchedules**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekSchedules) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules | Create a blank schedule
[**postWorkforcemanagementBusinessunitWeekSchedulesGenerate**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekSchedulesGenerate) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/generate | Generate a schedule
[**postWorkforcemanagementBusinessunitWeekSchedulesImport**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekSchedulesImport) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/import | Starts processing a schedule import
[**postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/import/uploadurl | Creates a signed upload URL for importing a schedule
[**postWorkforcemanagementBusinessunitWeekShorttermforecastCopy**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekShorttermforecastCopy) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy | Copy a short term forecast
[**postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/generate | Generate a short term forecast
[**postWorkforcemanagementBusinessunitWeekShorttermforecastsImport**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekShorttermforecastsImport) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/import | Starts importing the uploaded short term forecast
[**postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/import/uploadurl | Creates a signed upload URL for importing a short term forecast
[**postWorkforcemanagementBusinessunitWorkplanbidCopy**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWorkplanbidCopy) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/copy | Copy a work plan bid
[**postWorkforcemanagementBusinessunitWorkplanbidGroups**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWorkplanbidGroups) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups | Add a bid group in a given work plan bid
[**postWorkforcemanagementBusinessunitWorkplanbids**](WorkforceManagementApi#postWorkforcemanagementBusinessunitWorkplanbids) | **POST** /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids | Create a new work plan bid
[**postWorkforcemanagementBusinessunits**](WorkforceManagementApi#postWorkforcemanagementBusinessunits) | **POST** /api/v2/workforcemanagement/businessunits | Add a new business unit
[**postWorkforcemanagementCalendarUrlIcs**](WorkforceManagementApi#postWorkforcemanagementCalendarUrlIcs) | **POST** /api/v2/workforcemanagement/calendar/url/ics | Create a newly generated calendar link for the current user; if the current user has previously generated one, the generated link will be returned
[**postWorkforcemanagementHistoricaldataBulkRemoveJobs**](WorkforceManagementApi#postWorkforcemanagementHistoricaldataBulkRemoveJobs) | **POST** /api/v2/workforcemanagement/historicaldata/bulk/remove/jobs | Delete the list of the historical data import entries
[**postWorkforcemanagementHistoricaldataValidate**](WorkforceManagementApi#postWorkforcemanagementHistoricaldataValidate) | **POST** /api/v2/workforcemanagement/historicaldata/validate | Trigger validation process for historical import
[**postWorkforcemanagementIntegrationsHriTimeofftypesJobs**](WorkforceManagementApi#postWorkforcemanagementIntegrationsHriTimeofftypesJobs) | **POST** /api/v2/workforcemanagement/integrations/hris/{hrisIntegrationId}/timeofftypes/jobs | Get list of time off types configured in integration
[**postWorkforcemanagementManagementunitAgentsWorkplansQuery**](WorkforceManagementApi#postWorkforcemanagementManagementunitAgentsWorkplansQuery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/workplans/query | Get agents work plans configuration
[**postWorkforcemanagementManagementunitAgentschedulesSearch**](WorkforceManagementApi#postWorkforcemanagementManagementunitAgentschedulesSearch) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/agentschedules/search | Query published schedules for given given time range for set of users
[**postWorkforcemanagementManagementunitHistoricaladherencequery**](WorkforceManagementApi#postWorkforcemanagementManagementunitHistoricaladherencequery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/historicaladherencequery | Request a historical adherence report
[**postWorkforcemanagementManagementunitMove**](WorkforceManagementApi#postWorkforcemanagementManagementunitMove) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/move | Move the requested management unit to a new business unit
[**postWorkforcemanagementManagementunitSchedulesSearch**](WorkforceManagementApi#postWorkforcemanagementManagementunitSchedulesSearch) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/schedules/search | Query published schedules for given given time range for set of users
[**postWorkforcemanagementManagementunitShrinkageJobs**](WorkforceManagementApi#postWorkforcemanagementManagementunitShrinkageJobs) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/shrinkage/jobs | Request a historical shrinkage report
[**postWorkforcemanagementManagementunitTimeofflimits**](WorkforceManagementApi#postWorkforcemanagementManagementunitTimeofflimits) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits | Creates a new time off limit object under management unit.
[**postWorkforcemanagementManagementunitTimeofflimitsValuesQuery**](WorkforceManagementApi#postWorkforcemanagementManagementunitTimeofflimitsValuesQuery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/values/query | Retrieves time off limit related values based on a given set of filters.
[**postWorkforcemanagementManagementunitTimeoffplans**](WorkforceManagementApi#postWorkforcemanagementManagementunitTimeoffplans) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffplans | Creates a new time off plan
[**postWorkforcemanagementManagementunitTimeoffrequests**](WorkforceManagementApi#postWorkforcemanagementManagementunitTimeoffrequests) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests | Create a new time off request
[**postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery**](WorkforceManagementApi#postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/integrationstatus/query | Retrieves integration statuses for a list of time off requests
[**postWorkforcemanagementManagementunitTimeoffrequestsQuery**](WorkforceManagementApi#postWorkforcemanagementManagementunitTimeoffrequestsQuery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/query | Fetches time off requests matching the conditions specified in the request body
[**postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery**](WorkforceManagementApi#postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeoffrequests/waitlistpositions/query | Retrieves daily waitlist position for a list of time off requests
[**postWorkforcemanagementManagementunitUserTimeoffbalanceJobs**](WorkforceManagementApi#postWorkforcemanagementManagementunitUserTimeoffbalanceJobs) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffbalance/jobs | Query time off balances for a given user for specified activity code and dates
[**postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs**](WorkforceManagementApi#postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/{timeOffRequestId}/timeoffbalance/jobs | Query time off balances for dates spanned by a given time off request
[**postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate**](WorkforceManagementApi#postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/users/{userId}/timeoffrequests/estimate | Estimates available time off for an agent
[**postWorkforcemanagementManagementunitWeekShifttradeMatch**](WorkforceManagementApi#postWorkforcemanagementManagementunitWeekShifttradeMatch) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/{tradeId}/match | Matches a shift trade. This route can only be called by the receiving agent
[**postWorkforcemanagementManagementunitWeekShifttrades**](WorkforceManagementApi#postWorkforcemanagementManagementunitWeekShifttrades) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades | Adds a shift trade
[**postWorkforcemanagementManagementunitWeekShifttradesSearch**](WorkforceManagementApi#postWorkforcemanagementManagementunitWeekShifttradesSearch) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/search | Searches for potential shift trade matches for the current agent
[**postWorkforcemanagementManagementunitWeekShifttradesStateBulk**](WorkforceManagementApi#postWorkforcemanagementManagementunitWeekShifttradesStateBulk) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shifttrades/state/bulk | Updates the state of a batch of shift trades
[**postWorkforcemanagementManagementunitWorkplanCopy**](WorkforceManagementApi#postWorkforcemanagementManagementunitWorkplanCopy) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy | Create a copy of work plan
[**postWorkforcemanagementManagementunitWorkplanValidate**](WorkforceManagementApi#postWorkforcemanagementManagementunitWorkplanValidate) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/validate | Validate Work Plan
[**postWorkforcemanagementManagementunitWorkplanrotationCopy**](WorkforceManagementApi#postWorkforcemanagementManagementunitWorkplanrotationCopy) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations/{workPlanRotationId}/copy | Create a copy of work plan rotation
[**postWorkforcemanagementManagementunitWorkplanrotations**](WorkforceManagementApi#postWorkforcemanagementManagementunitWorkplanrotations) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplanrotations | Create a new work plan rotation
[**postWorkforcemanagementManagementunitWorkplans**](WorkforceManagementApi#postWorkforcemanagementManagementunitWorkplans) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans | Create a new work plan
[**postWorkforcemanagementManagementunits**](WorkforceManagementApi#postWorkforcemanagementManagementunits) | **POST** /api/v2/workforcemanagement/managementunits | Add a management unit
[**postWorkforcemanagementNotificationsUpdate**](WorkforceManagementApi#postWorkforcemanagementNotificationsUpdate) | **POST** /api/v2/workforcemanagement/notifications/update | Mark a list of notifications as read or unread
[**postWorkforcemanagementSchedules**](WorkforceManagementApi#postWorkforcemanagementSchedules) | **POST** /api/v2/workforcemanagement/schedules | Get published schedule for the current user
[**postWorkforcemanagementTeamAdherenceHistorical**](WorkforceManagementApi#postWorkforcemanagementTeamAdherenceHistorical) | **POST** /api/v2/workforcemanagement/teams/{teamId}/adherence/historical | Request a teams historical adherence report
[**postWorkforcemanagementTeamShrinkageJobs**](WorkforceManagementApi#postWorkforcemanagementTeamShrinkageJobs) | **POST** /api/v2/workforcemanagement/teams/{teamId}/shrinkage/jobs | Request a historical shrinkage report
[**postWorkforcemanagementTimeoffbalanceJobs**](WorkforceManagementApi#postWorkforcemanagementTimeoffbalanceJobs) | **POST** /api/v2/workforcemanagement/timeoffbalance/jobs | Query time off balances for the current user for specified activity code and dates
[**postWorkforcemanagementTimeofflimitsAvailableQuery**](WorkforceManagementApi#postWorkforcemanagementTimeofflimitsAvailableQuery) | **POST** /api/v2/workforcemanagement/timeofflimits/available/query | Queries available time off for the current user
[**postWorkforcemanagementTimeoffrequests**](WorkforceManagementApi#postWorkforcemanagementTimeoffrequests) | **POST** /api/v2/workforcemanagement/timeoffrequests | Create a time off request for the current user
[**postWorkforcemanagementTimeoffrequestsEstimate**](WorkforceManagementApi#postWorkforcemanagementTimeoffrequestsEstimate) | **POST** /api/v2/workforcemanagement/timeoffrequests/estimate | Estimates available time off for current user
[**postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery**](WorkforceManagementApi#postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery) | **POST** /api/v2/workforcemanagement/timeoffrequests/integrationstatus/query | Retrieves integration statuses for a list of current user time off requests
[**putWorkforcemanagementAgentIntegrationsHris**](WorkforceManagementApi#putWorkforcemanagementAgentIntegrationsHris) | **PUT** /api/v2/workforcemanagement/agents/{agentId}/integrations/hris | Update integrations for agent
[**putWorkforcemanagementBusinessunitTimeofflimitValues**](WorkforceManagementApi#putWorkforcemanagementBusinessunitTimeofflimitValues) | **PUT** /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/values | Sets daily values for a date range of time-off limit object
[**putWorkforcemanagementManagementunitTimeofflimitValues**](WorkforceManagementApi#putWorkforcemanagementManagementunitTimeofflimitValues) | **PUT** /api/v2/workforcemanagement/managementunits/{managementUnitId}/timeofflimits/{timeOffLimitId}/values | Sets daily values for a date range of time off limit object



## deleteWorkforcemanagementBusinessunit

> void deleteWorkforcemanagementBusinessunit(businessUnitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitActivitycode

> void deleteWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory

> void deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory(businessUnitId, capacityPlanId, opts)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocationshistory

Delete staffing group allocations history created for a capacity plan before the given date

Requires ANY permissions:

* wfm:capacityPlan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let capacityPlanId = "capacityPlanId_example"; // String | The ID of the capacity plan
let opts = { 
  'beforeDateId': "beforeDateId_example" // String | The date to delete records that are created on or before this date in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
};

apiInstance.deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory(businessUnitId, capacityPlanId, opts)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **capacityPlanId** | **String** | The ID of the capacity plan |  |
 **beforeDateId** | **String** | The date to delete records that are created on or before this date in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd | [optional]  |

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitPlanninggroup

> void deleteWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitSchedulingRun

> void deleteWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitServicegoaltemplate

> void deleteWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitStaffinggroup

> void deleteWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId}

Deletes a staffing group

Requires ANY permissions:

* wfm:staffingGroup:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let staffingGroupId = "staffingGroupId_example"; // String | The ID of the staffing group to delete

apiInstance.deleteWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitStaffinggroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitStaffinggroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **staffingGroupId** | **String** | The ID of the staffing group to delete |  |

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitTimeofflimit

> void deleteWorkforcemanagementBusinessunitTimeofflimit(businessUnitId, timeOffLimitId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}

Deletes a time-off limit object

Requires ANY permissions:

* wfm:timeOffLimit:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let timeOffLimitId = "timeOffLimitId_example"; // String | The ID of the time-off limit object to delete

apiInstance.deleteWorkforcemanagementBusinessunitTimeofflimit(businessUnitId, timeOffLimitId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitTimeofflimit returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitTimeofflimit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **timeOffLimitId** | **String** | The ID of the time-off limit object to delete |  |

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitTimeoffplan

> void deleteWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId}

Deletes a time-off plan

Requires ANY permissions:

* wfm:timeOffPlan:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let timeOffPlanId = "timeOffPlanId_example"; // String | The ID of the time-off plan to delete

apiInstance.deleteWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitTimeoffplan returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitTimeoffplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **timeOffPlanId** | **String** | The ID of the time-off plan to delete |  |

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitWeekSchedule

> BuAsyncScheduleResponse deleteWorkforcemanagementBusinessunitWeekSchedule(businessUnitId, weekId, scheduleId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuAsyncScheduleResponse**


## deleteWorkforcemanagementBusinessunitWeekShorttermforecast

> void deleteWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitWorkplanbid

> void deleteWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}

Delete a work plan bid

Requires ANY permissions:

* wfm:workPlanBid:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The ID of the work plan bid

apiInstance.deleteWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitWorkplanbid returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitWorkplanbid');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The ID of the work plan bid |  |

### Return type

void (no response body)


## deleteWorkforcemanagementBusinessunitWorkplanbidGroup

> void deleteWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId)


DELETE /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}

Delete a bid group by bid group Id

Requires ANY permissions:

* wfm:workPlanBidGroup:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The work plan bid id of the bid groups
let bidGroupId = "bidGroupId_example"; // String | Work Plan Bid Group id

apiInstance.deleteWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId)
  .then(() => {
    console.log('deleteWorkforcemanagementBusinessunitWorkplanbidGroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementBusinessunitWorkplanbidGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The work plan bid id of the bid groups |  |
 **bidGroupId** | **String** | Work Plan Bid Group id |  |

### Return type

void (no response body)


## deleteWorkforcemanagementCalendarUrlIcs

> void deleteWorkforcemanagementCalendarUrlIcs()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## deleteWorkforcemanagementManagementunit

> void deleteWorkforcemanagementManagementunit(managementUnitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteWorkforcemanagementManagementunitTimeofflimit

> void deleteWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteWorkforcemanagementManagementunitTimeoffplan

> void deleteWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteWorkforcemanagementManagementunitWorkplan

> void deleteWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## deleteWorkforcemanagementManagementunitWorkplanrotation

> void deleteWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## getWorkforcemanagementAdherence

> [UserScheduleAdherence] getWorkforcemanagementAdherence(userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**[UserScheduleAdherence]**


## getWorkforcemanagementAdherenceExplanation

> AdherenceExplanationResponse getWorkforcemanagementAdherenceExplanation(explanationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AdherenceExplanationResponse**


## getWorkforcemanagementAdherenceExplanationsJob

> AdherenceExplanationJob getWorkforcemanagementAdherenceExplanationsJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AdherenceExplanationJob**


## getWorkforcemanagementAdherenceHistoricalBulkJob

> WfmHistoricalAdherenceBulkResponse getWorkforcemanagementAdherenceHistoricalBulkJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WfmHistoricalAdherenceBulkResponse**


## getWorkforcemanagementAdherenceHistoricalJob

> WfmHistoricalAdherenceResponse getWorkforcemanagementAdherenceHistoricalJob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WfmHistoricalAdherenceResponse**


## getWorkforcemanagementAgentAdherenceExplanation

> AdherenceExplanationResponse getWorkforcemanagementAgentAdherenceExplanation(agentId, explanationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AdherenceExplanationResponse**


## getWorkforcemanagementAgentManagementunit

> AgentManagementUnitReference getWorkforcemanagementAgentManagementunit(agentId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AgentManagementUnitReference**


## getWorkforcemanagementAgentsMeManagementunit

> AgentManagementUnitReference getWorkforcemanagementAgentsMeManagementunit()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getWorkforcemanagementAlternativeshiftsOffersJob

> AlternativeShiftJobResponse getWorkforcemanagementAlternativeshiftsOffersJob(jobId)


GET /api/v2/workforcemanagement/alternativeshifts/offers/jobs/{jobId}

Query the status of an alternative shift offers operation. Only the user who started the operation can query the status

Job details are only retained if the initial request returned a 202 ACCEPTED response

Requires ANY permissions:

* wfm:agentAlternativeShift:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The ID of the job

apiInstance.getWorkforcemanagementAlternativeshiftsOffersJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementAlternativeshiftsOffersJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAlternativeshiftsOffersJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The ID of the job |  |

### Return type

**AlternativeShiftJobResponse**


## getWorkforcemanagementAlternativeshiftsOffersSearchJob

> AlternativeShiftJobResponse getWorkforcemanagementAlternativeshiftsOffersSearchJob(jobId)


GET /api/v2/workforcemanagement/alternativeshifts/offers/search/jobs/{jobId}

Query the status of an alternative shift search offers operation. Only the user who started the operation can query the status

Job details are only retained if the initial request returned a 202 ACCEPTED response

Requires ANY permissions:

* wfm:agentAlternativeShift:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The ID of the job

apiInstance.getWorkforcemanagementAlternativeshiftsOffersSearchJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementAlternativeshiftsOffersSearchJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAlternativeshiftsOffersSearchJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The ID of the job |  |

### Return type

**AlternativeShiftJobResponse**


## getWorkforcemanagementAlternativeshiftsSettings

> AlternativeShiftBuSettingsResponse getWorkforcemanagementAlternativeshiftsSettings()


GET /api/v2/workforcemanagement/alternativeshifts/settings

Get alternative shifts settings from the current logged in agent’s business unit

Requires ANY permissions:

* wfm:agentAlternativeShift:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementAlternativeshiftsSettings()
  .then((data) => {
    console.log(`getWorkforcemanagementAlternativeshiftsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAlternativeshiftsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**AlternativeShiftBuSettingsResponse**


## getWorkforcemanagementAlternativeshiftsTrade

> AlternativeShiftTradeResponse getWorkforcemanagementAlternativeshiftsTrade(tradeId)


GET /api/v2/workforcemanagement/alternativeshifts/trades/{tradeId}

Get my alternative shift trade by trade ID

Requires ANY permissions:

* wfm:agentAlternativeShift:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let tradeId = "tradeId_example"; // String | The ID of the alternative shift trade

apiInstance.getWorkforcemanagementAlternativeshiftsTrade(tradeId)
  .then((data) => {
    console.log(`getWorkforcemanagementAlternativeshiftsTrade success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAlternativeshiftsTrade');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tradeId** | **String** | The ID of the alternative shift trade |  |

### Return type

**AlternativeShiftTradeResponse**


## getWorkforcemanagementAlternativeshiftsTrades

> ListAlternativeShiftTradesResponse getWorkforcemanagementAlternativeshiftsTrades(opts)


GET /api/v2/workforcemanagement/alternativeshifts/trades

Get a list of my alternative shifts trades

Requires ANY permissions:

* wfm:agentAlternativeShift:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let opts = { 
  'forceAsync': true // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
};

apiInstance.getWorkforcemanagementAlternativeshiftsTrades(opts)
  .then((data) => {
    console.log(`getWorkforcemanagementAlternativeshiftsTrades success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAlternativeshiftsTrades');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |

### Return type

**ListAlternativeShiftTradesResponse**


## getWorkforcemanagementAlternativeshiftsTradesJob

> AlternativeShiftJobResponse getWorkforcemanagementAlternativeshiftsTradesJob(jobId)


GET /api/v2/workforcemanagement/alternativeshifts/trades/jobs/{jobId}

Query the status of an alternative shift trades operation. Only the user who started the operation can query the status

Job details are only retained if the initial request returned a 202 ACCEPTED response

Requires ANY permissions:

* wfm:agentAlternativeShift:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The ID of the job

apiInstance.getWorkforcemanagementAlternativeshiftsTradesJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementAlternativeshiftsTradesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAlternativeshiftsTradesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The ID of the job |  |

### Return type

**AlternativeShiftJobResponse**


## getWorkforcemanagementAlternativeshiftsTradesStateJob

> AlternativeShiftJobResponse getWorkforcemanagementAlternativeshiftsTradesStateJob(jobId)


GET /api/v2/workforcemanagement/alternativeshifts/trades/state/jobs/{jobId}

Query the status of an alternative shift trade state operation. Only the user who started the operation can query the status

Job details are only retained if the initial request returned a 202 ACCEPTED response

Requires ANY permissions:

* wfm:alternativeShift:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The ID of the job

apiInstance.getWorkforcemanagementAlternativeshiftsTradesStateJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementAlternativeshiftsTradesStateJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementAlternativeshiftsTradesStateJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The ID of the job |  |

### Return type

**AlternativeShiftJobResponse**


## getWorkforcemanagementBusinessunit

> BusinessUnitResponse getWorkforcemanagementBusinessunit(businessUnitId, opts)


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
* learning:assignment:add
* learning:assignment:reschedule

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let opts = { 
  'expand': ["expand_example"], // [String] | Include to access additional data on the business unit
  'includeSchedulingDefaultMessageSeverities': true // Boolean | Whether to include scheduling default message severities
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
 **expand** | **[String]** | Include to access additional data on the business unit | [optional] <br />**Values**: settings, settings.timeZone, settings.startDayOfWeek, settings.shortTermForecasting, settings.scheduling, settings.notifications.scheduling, settings.learning, settings.coaching |
 **includeSchedulingDefaultMessageSeverities** | **Boolean** | Whether to include scheduling default message severities | [optional]  |

### Return type

**BusinessUnitResponse**


## getWorkforcemanagementBusinessunitActivitycode

> BusinessUnitActivityCode getWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BusinessUnitActivityCode**


## getWorkforcemanagementBusinessunitActivitycodes

> BusinessUnitActivityCodeListing getWorkforcemanagementBusinessunitActivitycodes(businessUnitId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let opts = { 
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.getWorkforcemanagementBusinessunitActivitycodes(businessUnitId, opts)
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
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |

### Return type

**BusinessUnitActivityCodeListing**


## getWorkforcemanagementBusinessunitActivityplan

> ActivityPlanResponse getWorkforcemanagementBusinessunitActivityplan(businessUnitId, activityPlanId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}

Get an activity plan

Requires ANY permissions:

* wfm:activityPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let activityPlanId = "activityPlanId_example"; // String | The ID of the activity plan to fetch

apiInstance.getWorkforcemanagementBusinessunitActivityplan(businessUnitId, activityPlanId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitActivityplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitActivityplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **activityPlanId** | **String** | The ID of the activity plan to fetch |  |

### Return type

**ActivityPlanResponse**


## getWorkforcemanagementBusinessunitActivityplanRunsJob

> ActivityPlanRunJobResponse getWorkforcemanagementBusinessunitActivityplanRunsJob(businessUnitId, activityPlanId, jobId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/runs/jobs/{jobId}

Gets an activity plan run job

Requires ANY permissions:

* wfm:activityPlanRunJob:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let activityPlanId = "activityPlanId_example"; // String | The ID of the activity plan associated with the run job
let jobId = "jobId_example"; // String | The ID of the activity plan run job

apiInstance.getWorkforcemanagementBusinessunitActivityplanRunsJob(businessUnitId, activityPlanId, jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitActivityplanRunsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitActivityplanRunsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **activityPlanId** | **String** | The ID of the activity plan associated with the run job |  |
 **jobId** | **String** | The ID of the activity plan run job |  |

### Return type

**ActivityPlanRunJobResponse**


## getWorkforcemanagementBusinessunitActivityplans

> ActivityPlanListing getWorkforcemanagementBusinessunitActivityplans(businessUnitId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans

Get activity plans

Requires ANY permissions:

* wfm:activityPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let opts = { 
  'state': "state_example" // String | Optionally filter by activity plan state
};

apiInstance.getWorkforcemanagementBusinessunitActivityplans(businessUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitActivityplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitActivityplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **state** | **String** | Optionally filter by activity plan state | [optional] <br />**Values**: Active, Inactive |

### Return type

**ActivityPlanListing**


## getWorkforcemanagementBusinessunitActivityplansJobs

> ActivityPlanJobListing getWorkforcemanagementBusinessunitActivityplansJobs(businessUnitId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/jobs

Gets the latest job for all activity plans in the business unit

Requires ANY permissions:

* wfm:activityPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit

apiInstance.getWorkforcemanagementBusinessunitActivityplansJobs(businessUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitActivityplansJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitActivityplansJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |

### Return type

**ActivityPlanJobListing**


## getWorkforcemanagementBusinessunitAlternativeshiftsSettings

> AlternativeShiftBuSettingsResponse getWorkforcemanagementBusinessunitAlternativeshiftsSettings(businessUnitId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/settings

Get alternative shifts settings for a business unit

Requires ANY permissions:

* wfm:businessUnit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit

apiInstance.getWorkforcemanagementBusinessunitAlternativeshiftsSettings(businessUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitAlternativeshiftsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitAlternativeshiftsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |

### Return type

**AlternativeShiftBuSettingsResponse**


## getWorkforcemanagementBusinessunitAlternativeshiftsTrade

> AlternativeShiftTradeResponse getWorkforcemanagementBusinessunitAlternativeshiftsTrade(businessUnitId, tradeId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/{tradeId}

Get an alternative shifts trade in a business unit for a given trade ID

Requires ANY permissions:

* wfm:alternativeShift:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let tradeId = "tradeId_example"; // String | The ID of the alternative shift trade

apiInstance.getWorkforcemanagementBusinessunitAlternativeshiftsTrade(businessUnitId, tradeId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitAlternativeshiftsTrade success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitAlternativeshiftsTrade');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **tradeId** | **String** | The ID of the alternative shift trade |  |

### Return type

**AlternativeShiftTradeResponse**


## getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob

> BuAlternativeShiftJobResponse getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob(businessUnitId, jobId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/search/jobs/{jobId}

Query the status of an alternative shift search trade operation. Only the user who started the operation can query the status

Job details are only retained if the initial request returned a 202 ACCEPTED response

Requires ANY permissions:

* wfm:alternativeShift:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let jobId = "jobId_example"; // String | The ID of the job

apiInstance.getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob(businessUnitId, jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitAlternativeshiftsTradesSearchJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **jobId** | **String** | The ID of the job |  |

### Return type

**BuAlternativeShiftJobResponse**


## getWorkforcemanagementBusinessunitCapacityplan

> CapacityPlanResponse getWorkforcemanagementBusinessunitCapacityplan(businessUnitId, capacityPlanId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}

Get a capacity plan

Requires ANY permissions:

* wfm:capacityPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let capacityPlanId = "capacityPlanId_example"; // String | The ID of the capacity plan

apiInstance.getWorkforcemanagementBusinessunitCapacityplan(businessUnitId, capacityPlanId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitCapacityplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitCapacityplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **capacityPlanId** | **String** | The ID of the capacity plan |  |

### Return type

**CapacityPlanResponse**


## getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations

> CapacityPlanStaffingGroupAllocationsResponse getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations(businessUnitId, capacityPlanId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocations

Get a capacity plan's staffing group allocations

Requires ANY permissions:

* wfm:capacityPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let capacityPlanId = "capacityPlanId_example"; // String | The ID of the capacity plan

apiInstance.getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations(businessUnitId, capacityPlanId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **capacityPlanId** | **String** | The ID of the capacity plan |  |

### Return type

**CapacityPlanStaffingGroupAllocationsResponse**


## getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements

> CapacityPlanStaffingRequirementResult getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements(businessUnitId, capacityPlanId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffingrequirements

Get a capacity plan's staffing requirements

Requires ANY permissions:

* wfm:capacityPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let capacityPlanId = "capacityPlanId_example"; // String | The ID of the capacity plan

apiInstance.getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements(businessUnitId, capacityPlanId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitCapacityplanStaffingrequirements');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **capacityPlanId** | **String** | The ID of the capacity plan |  |

### Return type

**CapacityPlanStaffingRequirementResult**


## getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast

> LongTermRequirementsResponse getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast(businessUnitId, weekDateId, forecastId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplanning/longtermrequirements/automaticbestmethod/weeks/{weekDateId}/forecasts/{forecastId}

Get the latest long term staffing requirements for a business unit

Requires ANY permissions:

* wfm:longTermStaffing:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | 
let weekDateId = "weekDateId_example"; // String | weekDateId of forecast, format yyyy-MM-dd. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let forecastId = "forecastId_example"; // String | forecastId of forecast

apiInstance.getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast(businessUnitId, weekDateId, forecastId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecast');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** |  |  |
 **weekDateId** | **String** | weekDateId of forecast, format yyyy-MM-dd. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **forecastId** | **String** | forecastId of forecast |  |

### Return type

**LongTermRequirementsResponse**


## getWorkforcemanagementBusinessunitCapacityplans

> CapacityPlansListResponse getWorkforcemanagementBusinessunitCapacityplans(businessUnitId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans

Get list of capacity plans for a business unit

Requires ANY permissions:

* wfm:capacityPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit

apiInstance.getWorkforcemanagementBusinessunitCapacityplans(businessUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitCapacityplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitCapacityplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |

### Return type

**CapacityPlansListResponse**


## getWorkforcemanagementBusinessunitIntradayPlanninggroups

> WfmIntradayPlanningGroupListing getWorkforcemanagementBusinessunitIntradayPlanninggroups(businessUnitId, _date)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WfmIntradayPlanningGroupListing**


## getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession

> ContinuousForecastGetSessionResponse getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession(businessUnitId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session

Get the latest session for the business unit ID

getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* wfm:mainForecast:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | 

apiInstance.getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession(businessUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitMainforecastContinuousforecastSession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** |  |  |

### Return type

**ContinuousForecastGetSessionResponse**


## getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId

> ContinuousForecastSessionResponse getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId(businessUnitId, sessionId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session/{sessionId}

Get the session details for the session ID

getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* wfm:mainForecast:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | 
let sessionId = "sessionId_example"; // String | 

apiInstance.getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId(businessUnitId, sessionId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** |  |  |
 **sessionId** | **String** |  |  |

### Return type

**ContinuousForecastSessionResponse**


## getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId

> ContinuousForecastSnapshotResponse getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId(businessUnitId, sessionId, snapshotId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/mainforecast/continuousforecast/session/{sessionId}/snapshot/{snapshotId}

Get the snapshot details for the snapshot ID

getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* wfm:mainForecast:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | 
let sessionId = "sessionId_example"; // String | 
let snapshotId = "snapshotId_example"; // String | 

apiInstance.getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId(businessUnitId, sessionId, snapshotId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitMainforecastContinuousforecastSessionSessionIdSnapshotSnapshotId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** |  |  |
 **sessionId** | **String** |  |  |
 **snapshotId** | **String** |  |  |

### Return type

**ContinuousForecastSnapshotResponse**


## getWorkforcemanagementBusinessunitManagementunits

> ManagementUnitListing getWorkforcemanagementBusinessunitManagementunits(businessUnitId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/managementunits

Get all authorized management units in the business unit

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **feature** | **String** | If specified, the list of management units for which the user is authorized to use the requested feature will be returned | [optional] <br />**Values**: AgentHistoricalAdherence, AgentHistoricalAdherenceConformance, AgentSchedule, AgentTimeOffRequest, AgentWorkPlanBid, AlternativeShift, Coaching, Learning, AgentUnavailableTimes, ActivityCodes, ActivityPlans, UnavailableTimes, Agents, BuActivityCodes, BusinessUnits, CapacityPlan, ContinuousForecast, HistoricalAdherence, HistoricalShrinkage, IntradayMonitoring, BuIntradayMonitoring, ManagementUnits, RealTimeAdherence, Schedules, BuSchedules, ServiceGoalTemplates, PlanningGroups, LongTermStaffing, ShiftTrading, ShortTermForecasts, BuShortTermForecasts, StaffingGroups, TimeOffPlans, TimeOffRequests, TimeOffLimits, WorkPlanBids, WorkPlanBidGroups, WorkPlanRotations, WorkPlans |
 **divisionId** | **String** | If specified, the list of management units belonging to the specified division will be returned | [optional]  |

### Return type

**ManagementUnitListing**


## getWorkforcemanagementBusinessunitPlanninggroup

> PlanningGroup getWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PlanningGroup**


## getWorkforcemanagementBusinessunitPlanninggroups

> PlanningGroupList getWorkforcemanagementBusinessunitPlanninggroups(businessUnitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**PlanningGroupList**


## getWorkforcemanagementBusinessunitSchedulingRun

> BuScheduleRun getWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuScheduleRun**


## getWorkforcemanagementBusinessunitSchedulingRunResult

> BuRescheduleResult getWorkforcemanagementBusinessunitSchedulingRunResult(businessUnitId, runId, managementUnitIds, expand)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuRescheduleResult**


## getWorkforcemanagementBusinessunitSchedulingRuns

> BuScheduleRunListing getWorkforcemanagementBusinessunitSchedulingRuns(businessUnitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuScheduleRunListing**


## getWorkforcemanagementBusinessunitServicegoaltemplate

> ServiceGoalTemplate getWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ServiceGoalTemplate**


## getWorkforcemanagementBusinessunitServicegoaltemplates

> ServiceGoalTemplateList getWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ServiceGoalTemplateList**


## getWorkforcemanagementBusinessunitStaffinggroup

> StaffingGroupResponse getWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId}

Gets a staffing group

Requires ANY permissions:

* wfm:staffingGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let staffingGroupId = "staffingGroupId_example"; // String | The ID of the staffing group to fetch

apiInstance.getWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitStaffinggroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitStaffinggroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **staffingGroupId** | **String** | The ID of the staffing group to fetch |  |

### Return type

**StaffingGroupResponse**


## getWorkforcemanagementBusinessunitStaffinggroups

> StaffingGroupListing getWorkforcemanagementBusinessunitStaffinggroups(businessUnitId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups

Gets a list of staffing groups

Requires ANY permissions:

* wfm:staffingGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let opts = { 
  'managementUnitId': "managementUnitId_example", // String | The ID of the management unit to get management unit specific staffing groups
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.getWorkforcemanagementBusinessunitStaffinggroups(businessUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitStaffinggroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitStaffinggroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **managementUnitId** | **String** | The ID of the management unit to get management unit specific staffing groups | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |

### Return type

**StaffingGroupListing**


## getWorkforcemanagementBusinessunitTimeofflimit

> BuTimeOffLimitResponse getWorkforcemanagementBusinessunitTimeofflimit(businessUnitId, timeOffLimitId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}

Gets a time-off limit object

Returns properties of time-off limit object, but not daily values

Requires ANY permissions:

* wfm:timeOffLimit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let timeOffLimitId = "timeOffLimitId_example"; // String | The ID of the time-off limit to fetch

apiInstance.getWorkforcemanagementBusinessunitTimeofflimit(businessUnitId, timeOffLimitId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitTimeofflimit success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitTimeofflimit');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **timeOffLimitId** | **String** | The ID of the time-off limit to fetch |  |

### Return type

**BuTimeOffLimitResponse**


## getWorkforcemanagementBusinessunitTimeofflimits

> BuTimeOffLimitListing getWorkforcemanagementBusinessunitTimeofflimits(businessUnitId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits

Gets a list of time-off limit objects

Requires ANY permissions:

* wfm:timeOffLimit:view
* wfm:timeOffPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let opts = { 
  'managementUnitId': "managementUnitId_example" // String | The ID of the management unit to get management unit specific time-off limit objects
};

apiInstance.getWorkforcemanagementBusinessunitTimeofflimits(businessUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitTimeofflimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitTimeofflimits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **managementUnitId** | **String** | The ID of the management unit to get management unit specific time-off limit objects | [optional]  |

### Return type

**BuTimeOffLimitListing**


## getWorkforcemanagementBusinessunitTimeoffplan

> BuTimeOffPlanResponse getWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId}

Gets a time-off plan

Requires ANY permissions:

* wfm:timeOffPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let timeOffPlanId = "timeOffPlanId_example"; // String | The ID of the time-off plan to fetch

apiInstance.getWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitTimeoffplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitTimeoffplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **timeOffPlanId** | **String** | The ID of the time-off plan to fetch |  |

### Return type

**BuTimeOffPlanResponse**


## getWorkforcemanagementBusinessunitTimeoffplans

> BuTimeOffPlanListing getWorkforcemanagementBusinessunitTimeoffplans(businessUnitId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans

Gets a list of time-off plans

Requires ANY permissions:

* wfm:timeOffPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let opts = { 
  'managementUnitId': "managementUnitId_example", // String | The ID of the management unit to get management unit specific staffing groups
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.getWorkforcemanagementBusinessunitTimeoffplans(businessUnitId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitTimeoffplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitTimeoffplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **managementUnitId** | **String** | The ID of the management unit to get management unit specific staffing groups | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |

### Return type

**BuTimeOffPlanListing**


## getWorkforcemanagementBusinessunitWeekSchedule

> BuScheduleMetadata getWorkforcemanagementBusinessunitWeekSchedule(businessUnitId, weekId, scheduleId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuScheduleMetadata**


## getWorkforcemanagementBusinessunitWeekScheduleGenerationresults

> ScheduleGenerationResult getWorkforcemanagementBusinessunitWeekScheduleGenerationresults(businessUnitId, weekId, scheduleId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ScheduleGenerationResult**


## getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast

> BuHeadcountForecastResponse getWorkforcemanagementBusinessunitWeekScheduleHeadcountforecast(businessUnitId, weekId, scheduleId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuHeadcountForecastResponse**


## getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent

> BuAgentScheduleHistoryResponse getWorkforcemanagementBusinessunitWeekScheduleHistoryAgent(businessUnitId, weekId, scheduleId, agentId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuAgentScheduleHistoryResponse**


## getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions

> PerformancePredictionResponse getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions(businessUnitId, weekId, scheduleId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions

Get the performance prediction for the associated schedule

Requires ANY permissions:

* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the performance prediction belongs
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format
let scheduleId = "scheduleId_example"; // String | The ID of the schedule the performance prediction belongs to

apiInstance.getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions(businessUnitId, weekId, scheduleId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the performance prediction belongs |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format |  |
 **scheduleId** | **String** | The ID of the schedule the performance prediction belongs to |  |

### Return type

**PerformancePredictionResponse**


## getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation

> PerformancePredictionRecalculationResponse getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation(businessUnitId, weekId, scheduleId, recalculationId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/{recalculationId}

Get recalculated performance prediction result

Requires ANY permissions:

* wfm:schedule:view
* wfm:publishedSchedule:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the performance prediction belongs
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format
let scheduleId = "scheduleId_example"; // String | The ID of the schedule the recalculation belongs to
let recalculationId = "recalculationId_example"; // String | The ID of the recalculation request

apiInstance.getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation(businessUnitId, weekId, scheduleId, recalculationId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the performance prediction belongs |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format |  |
 **scheduleId** | **String** | The ID of the schedule the recalculation belongs to |  |
 **recalculationId** | **String** | The ID of the recalculation request |  |

### Return type

**PerformancePredictionRecalculationResponse**


## getWorkforcemanagementBusinessunitWeekSchedules

> BuScheduleListing getWorkforcemanagementBusinessunitWeekSchedules(businessUnitId, weekId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuScheduleListing**


## getWorkforcemanagementBusinessunitWeekShorttermforecast

> BuShortTermForecast getWorkforcemanagementBusinessunitWeekShorttermforecast(businessUnitId, weekDateId, forecastId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuShortTermForecast**


## getWorkforcemanagementBusinessunitWeekShorttermforecastData

> BuForecastResultResponse getWorkforcemanagementBusinessunitWeekShorttermforecastData(businessUnitId, weekDateId, forecastId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuForecastResultResponse**


## getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults

> BuForecastGenerationResult getWorkforcemanagementBusinessunitWeekShorttermforecastGenerationresults(businessUnitId, weekDateId, forecastId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuForecastGenerationResult**


## getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata

> LongTermForecastResultResponse getWorkforcemanagementBusinessunitWeekShorttermforecastLongtermforecastdata(businessUnitId, weekDateId, forecastId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**LongTermForecastResultResponse**


## getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups

> ForecastPlanningGroupsResponse getWorkforcemanagementBusinessunitWeekShorttermforecastPlanninggroups(businessUnitId, weekDateId, forecastId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ForecastPlanningGroupsResponse**


## getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement

> BuForecastStaffingRequirementsResultResponse getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement(businessUnitId, weekDateId, forecastId, opts)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/staffingrequirement

Get the staffing requirement by planning group for a forecast

Requires ANY permissions:

* wfm:staffingRequirement:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let forecastId = "forecastId_example"; // String | The ID of the forecast
let opts = { 
  'weekNumbers': ["weekNumbers_example"] // [String] | The week numbers to fetch (for multi-week forecasts) staffing requirements. Returns all week data if the list is not specified
};

apiInstance.getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement(businessUnitId, weekDateId, forecastId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWeekShorttermforecastStaffingrequirement');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **forecastId** | **String** | The ID of the forecast |  |
 **weekNumbers** | **[String]** | The week numbers to fetch (for multi-week forecasts) staffing requirements. Returns all week data if the list is not specified | [optional]  |

### Return type

**BuForecastStaffingRequirementsResultResponse**


## getWorkforcemanagementBusinessunitWeekShorttermforecasts

> BuShortTermForecastListing getWorkforcemanagementBusinessunitWeekShorttermforecasts(businessUnitId, weekDateId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuShortTermForecastListing**


## getWorkforcemanagementBusinessunitWorkplanbid

> WorkPlanBid getWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}

Get a work plan bid

Requires ANY permissions:

* wfm:workPlanBid:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The id of the workplanbid

apiInstance.getWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWorkplanbid success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWorkplanbid');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The id of the workplanbid |  |

### Return type

**WorkPlanBid**


## getWorkforcemanagementBusinessunitWorkplanbidGroup

> WorkPlanBidGroupResponse getWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}

Get a bid group by bid group Id

Requires ANY permissions:

* wfm:workPlanBidGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The work plan bid id of the bid groups
let bidGroupId = "bidGroupId_example"; // String | Work Plan Bid Group id

apiInstance.getWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWorkplanbidGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWorkplanbidGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The work plan bid id of the bid groups |  |
 **bidGroupId** | **String** | Work Plan Bid Group id |  |

### Return type

**WorkPlanBidGroupResponse**


## getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences

> AdminAgentWorkPlanPreferenceResponse getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences(businessUnitId, bidId, bidGroupId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}/preferences

Gets the work plan preferences of all the agents in the work plan bid group

Requires ANY permissions:

* wfm:workPlanBidGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The work plan bid id of the bid groups
let bidGroupId = "bidGroupId_example"; // String | The ID of the work plan bid group

apiInstance.getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences(businessUnitId, bidId, bidGroupId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWorkplanbidGroupPreferences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The work plan bid id of the bid groups |  |
 **bidGroupId** | **String** | The ID of the work plan bid group |  |

### Return type

**AdminAgentWorkPlanPreferenceResponse**


## getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary

> WorkPlanBidGroupSummaryList getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary(businessUnitId, bidId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/summary

Get summary of bid groups that belong to a work plan bid

Requires ANY permissions:

* wfm:workPlanBidGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The work plan bid id of the bid groups

apiInstance.getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary(businessUnitId, bidId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWorkplanbidGroupsSummary');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The work plan bid id of the bid groups |  |

### Return type

**WorkPlanBidGroupSummaryList**


## getWorkforcemanagementBusinessunitWorkplanbids

> WorkPlanBidListResponse getWorkforcemanagementBusinessunitWorkplanbids(businessUnitId)


GET /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids

Get list of work plan bids

Requires ANY permissions:

* wfm:workPlanBid:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit

apiInstance.getWorkforcemanagementBusinessunitWorkplanbids(businessUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementBusinessunitWorkplanbids success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementBusinessunitWorkplanbids');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |

### Return type

**WorkPlanBidListResponse**


## getWorkforcemanagementBusinessunits

> BusinessUnitListing getWorkforcemanagementBusinessunits(opts)


GET /api/v2/workforcemanagement/businessunits

Get business units

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **feature** | **String** | If specified, the list of business units for which the user is authorized to use the requested feature will be returned | [optional] <br />**Values**: AgentHistoricalAdherence, AgentHistoricalAdherenceConformance, AgentSchedule, AgentTimeOffRequest, AgentWorkPlanBid, AlternativeShift, Coaching, Learning, AgentUnavailableTimes, ActivityCodes, ActivityPlans, UnavailableTimes, Agents, BuActivityCodes, BusinessUnits, CapacityPlan, ContinuousForecast, HistoricalAdherence, HistoricalShrinkage, IntradayMonitoring, BuIntradayMonitoring, ManagementUnits, RealTimeAdherence, Schedules, BuSchedules, ServiceGoalTemplates, PlanningGroups, LongTermStaffing, ShiftTrading, ShortTermForecasts, BuShortTermForecasts, StaffingGroups, TimeOffPlans, TimeOffRequests, TimeOffLimits, WorkPlanBids, WorkPlanBidGroups, WorkPlanRotations, WorkPlans |
 **divisionId** | **String** | If specified, the list of business units belonging to the specified division will be returned | [optional]  |

### Return type

**BusinessUnitListing**


## getWorkforcemanagementBusinessunitsDivisionviews

> BusinessUnitListing getWorkforcemanagementBusinessunitsDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BusinessUnitListing**


## getWorkforcemanagementCalendarDataIcs

> **&#39;String&#39;** getWorkforcemanagementCalendarDataIcs(calendarId)


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

### Return type

**&#39;String&#39;**


## getWorkforcemanagementCalendarUrlIcs

> CalendarUrlResponse getWorkforcemanagementCalendarUrlIcs()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getWorkforcemanagementHistoricaldataBulkRemoveJob

> HistoricalImportDeleteFilesJobResponse getWorkforcemanagementHistoricaldataBulkRemoveJob(jobId)


GET /api/v2/workforcemanagement/historicaldata/bulk/remove/jobs/{jobId}

Retrieves delete job status for historical data imports associated with the job id

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The job ID of the historical data delete request

apiInstance.getWorkforcemanagementHistoricaldataBulkRemoveJob(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementHistoricaldataBulkRemoveJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementHistoricaldataBulkRemoveJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The job ID of the historical data delete request |  |

### Return type

**HistoricalImportDeleteFilesJobResponse**


## getWorkforcemanagementHistoricaldataBulkRemoveJobs

> HistoricalImportOverallDeleteStatusResponse getWorkforcemanagementHistoricaldataBulkRemoveJobs()


GET /api/v2/workforcemanagement/historicaldata/bulk/remove/jobs

Retrieves all delete job status for historical data

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementHistoricaldataBulkRemoveJobs()
  .then((data) => {
    console.log(`getWorkforcemanagementHistoricaldataBulkRemoveJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementHistoricaldataBulkRemoveJobs');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**HistoricalImportOverallDeleteStatusResponse**


## getWorkforcemanagementHistoricaldataImportstatus

> HistoricalImportStatusListing getWorkforcemanagementHistoricaldataImportstatus()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getWorkforcemanagementHistoricaldataImportstatusJobId

> HistoricalImportStatusJobResponse getWorkforcemanagementHistoricaldataImportstatusJobId(jobId)


GET /api/v2/workforcemanagement/historicaldata/importstatus/{jobId}

Retrieves status of the historical data imports associated with job id

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let jobId = "jobId_example"; // String | The job Id of the historical data import request

apiInstance.getWorkforcemanagementHistoricaldataImportstatusJobId(jobId)
  .then((data) => {
    console.log(`getWorkforcemanagementHistoricaldataImportstatusJobId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementHistoricaldataImportstatusJobId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The job Id of the historical data import request |  |

### Return type

**HistoricalImportStatusJobResponse**


## getWorkforcemanagementIntegrationsHris

> WfmIntegrationListing getWorkforcemanagementIntegrationsHris()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getWorkforcemanagementIntegrationsHrisTimeofftypesJob

> HrisTimeOffTypesJobResponse getWorkforcemanagementIntegrationsHrisTimeofftypesJob(jobId)


GET /api/v2/workforcemanagement/integrations/hris/timeofftypes/jobs/{jobId}

Query the results of time off types job

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**HrisTimeOffTypesJobResponse**


## getWorkforcemanagementManagementunit

> ManagementUnit getWorkforcemanagementManagementunit(managementUnitId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ManagementUnit**


## getWorkforcemanagementManagementunitActivitycodes

> ActivityCodeContainer getWorkforcemanagementManagementunitActivitycodes(managementUnitId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ActivityCodeContainer**


## getWorkforcemanagementManagementunitAdherence

> UserScheduleAdherenceListing getWorkforcemanagementManagementunitAdherence(managementUnitId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserScheduleAdherenceListing**


## getWorkforcemanagementManagementunitAgent

> WfmAgent getWorkforcemanagementManagementunitAgent(managementUnitId, agentId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let agentId = "agentId_example"; // String | The agent id
let opts = { 
  'excludeCapabilities': true, // Boolean | Excludes all capabilities of the agent such as queues, languages, and skills
  'expand': ["expand_example"] // [String] | 
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
 **expand** | **[String]** |  | [optional] <br />**Values**: workPlanOverrides |

### Return type

**WfmAgent**


## getWorkforcemanagementManagementunitAgentShifttrades

> ShiftTradeListResponse getWorkforcemanagementManagementunitAgentShifttrades(managementUnitId, agentId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ShiftTradeListResponse**


## getWorkforcemanagementManagementunitShifttradesMatched

> ShiftTradeMatchesSummaryResponse getWorkforcemanagementManagementunitShifttradesMatched(managementUnitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ShiftTradeMatchesSummaryResponse**


## getWorkforcemanagementManagementunitShifttradesUsers

> WfmUserEntityListing getWorkforcemanagementManagementunitShifttradesUsers(managementUnitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WfmUserEntityListing**


## getWorkforcemanagementManagementunitTimeofflimit

> TimeOffLimit getWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeOffLimit**


## getWorkforcemanagementManagementunitTimeofflimits

> TimeOffLimitListing getWorkforcemanagementManagementunitTimeofflimits(managementUnitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeOffLimitListing**


## getWorkforcemanagementManagementunitTimeoffplan

> TimeOffPlan getWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeOffPlan**


## getWorkforcemanagementManagementunitTimeoffplans

> TimeOffPlanListing getWorkforcemanagementManagementunitTimeoffplans(managementUnitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeOffPlanListing**


## getWorkforcemanagementManagementunitUserTimeoffrequest

> TimeOffRequestResponse getWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeOffRequestResponse**


## getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits

> QueryTimeOffLimitValuesResponse getWorkforcemanagementManagementunitUserTimeoffrequestTimeofflimits(managementUnitId, userId, timeOffRequestId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**QueryTimeOffLimitValuesResponse**


## getWorkforcemanagementManagementunitUserTimeoffrequests

> TimeOffRequestList getWorkforcemanagementManagementunitUserTimeoffrequests(managementUnitId, userId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let userId = "userId_example"; // String | The userId to whom the Time Off Request applies.

apiInstance.getWorkforcemanagementManagementunitUserTimeoffrequests(managementUnitId, userId)
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

### Return type

**TimeOffRequestList**


## getWorkforcemanagementManagementunitUsers

> WfmUserEntityListing getWorkforcemanagementManagementunitUsers(managementUnitId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WfmUserEntityListing**


## getWorkforcemanagementManagementunitWeekSchedule

> WeekScheduleResponse getWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WeekScheduleResponse**


## getWorkforcemanagementManagementunitWeekSchedules

> WeekScheduleListResponse getWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WeekScheduleListResponse**


## getWorkforcemanagementManagementunitWeekShifttrades

> WeekShiftTradeListResponse getWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let opts = { 
  'evaluateMatches': true, // Boolean | Whether to evaluate the matches for violations
  'includeCrossWeekShifts': false, // Boolean | Whether to include all shift trades with either the initiating shift or the receiving shift in the week
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
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
 **weekDateId** | **String** | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **evaluateMatches** | **Boolean** | Whether to evaluate the matches for violations | [optional] [default to true] |
 **includeCrossWeekShifts** | **Boolean** | Whether to include all shift trades with either the initiating shift or the receiving shift in the week | [optional] [default to false] |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |

### Return type

**WeekShiftTradeListResponse**


## getWorkforcemanagementManagementunitWorkplan

> WorkPlan getWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkPlan**


## getWorkforcemanagementManagementunitWorkplanrotation

> WorkPlanRotationResponse getWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkPlanRotationResponse**


## getWorkforcemanagementManagementunitWorkplanrotations

> WorkPlanRotationListResponse getWorkforcemanagementManagementunitWorkplanrotations(managementUnitId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WorkPlanRotationListResponse**


## getWorkforcemanagementManagementunitWorkplans

> WorkPlanListResponse getWorkforcemanagementManagementunitWorkplans(managementUnitId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'expand': ["expand_example"], // [String] | Include to access additional data on the work plans
  'exclude': ["exclude_example"] // [String] | Exclude specific data on the work plans from the response
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
 **exclude** | **[String]** | Exclude specific data on the work plans from the response | [optional] <br />**Values**: shifts.activities |

### Return type

**WorkPlanListResponse**


## getWorkforcemanagementManagementunits

> ManagementUnitListing getWorkforcemanagementManagementunits(opts)


GET /api/v2/workforcemanagement/managementunits

Get management units

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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
 **feature** | **String** | If specified, the list of management units for which the user is authorized to use the requested feature will be returned | [optional] <br />**Values**: AgentHistoricalAdherence, AgentHistoricalAdherenceConformance, AgentSchedule, AgentTimeOffRequest, AgentWorkPlanBid, AlternativeShift, Coaching, Learning, AgentUnavailableTimes, ActivityCodes, ActivityPlans, UnavailableTimes, Agents, BuActivityCodes, BusinessUnits, CapacityPlan, ContinuousForecast, HistoricalAdherence, HistoricalShrinkage, IntradayMonitoring, BuIntradayMonitoring, ManagementUnits, RealTimeAdherence, Schedules, BuSchedules, ServiceGoalTemplates, PlanningGroups, LongTermStaffing, ShiftTrading, ShortTermForecasts, BuShortTermForecasts, StaffingGroups, TimeOffPlans, TimeOffRequests, TimeOffLimits, WorkPlanBids, WorkPlanBidGroups, WorkPlanRotations, WorkPlans |
 **divisionId** | **String** | If specified, the list of management units belonging to the specified division will be returned | [optional]  |

### Return type

**ManagementUnitListing**


## getWorkforcemanagementManagementunitsDivisionviews

> ManagementUnitListing getWorkforcemanagementManagementunitsDivisionviews(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ManagementUnitListing**


## getWorkforcemanagementNotifications

> NotificationsResponse getWorkforcemanagementNotifications()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getWorkforcemanagementSchedulingjob

> SchedulingStatusResponse getWorkforcemanagementSchedulingjob(jobId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**SchedulingStatusResponse**


## getWorkforcemanagementShifttrades

> ShiftTradeListResponse getWorkforcemanagementShifttrades()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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


## getWorkforcemanagementShrinkageJob

> WfmHistoricalShrinkageResponse getWorkforcemanagementShrinkageJob(jobId)


GET /api/v2/workforcemanagement/shrinkage/jobs/{jobId}

Request to fetch the status of the historical shrinkage query

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WfmHistoricalShrinkageResponse**


## getWorkforcemanagementTeamAdherence

> UserScheduleAdherenceListing getWorkforcemanagementTeamAdherence(teamId)


GET /api/v2/workforcemanagement/teams/{teamId}/adherence

Get a list of user schedule adherence records for the requested team

Requires ANY permissions:

* wfm:realtimeAdherence:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let teamId = "teamId_example"; // String | The ID of the team

apiInstance.getWorkforcemanagementTeamAdherence(teamId)
  .then((data) => {
    console.log(`getWorkforcemanagementTeamAdherence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementTeamAdherence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **teamId** | **String** | The ID of the team |  |

### Return type

**UserScheduleAdherenceListing**


## getWorkforcemanagementTimeoffbalanceJob

> TimeOffBalanceJobResponse getWorkforcemanagementTimeoffbalanceJob(jobId)


GET /api/v2/workforcemanagement/timeoffbalance/jobs/{jobId}

Query the results of time off types job

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeOffBalanceJobResponse**


## getWorkforcemanagementTimeoffrequest

> TimeOffRequestResponse getWorkforcemanagementTimeoffrequest(timeOffRequestId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeOffRequestResponse**


## getWorkforcemanagementTimeoffrequestWaitlistpositions

> WaitlistPositionListing getWorkforcemanagementTimeoffrequestWaitlistpositions(timeOffRequestId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WaitlistPositionListing**


## getWorkforcemanagementTimeoffrequests

> TimeOffRequestList getWorkforcemanagementTimeoffrequests()


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementTimeoffrequests()
  .then((data) => {
    console.log(`getWorkforcemanagementTimeoffrequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementTimeoffrequests');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**TimeOffRequestList**


## getWorkforcemanagementUserWorkplanbidranks

> WorkPlanBidRanks getWorkforcemanagementUserWorkplanbidranks(userId)


GET /api/v2/workforcemanagement/users/{userId}/workplanbidranks

Get work plan bid ranks for a user

Requires ANY permissions:

* wfm:workPlanBid:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let userId = "userId_example"; // String | The userId to whom the work plan bid ranks apply.

apiInstance.getWorkforcemanagementUserWorkplanbidranks(userId)
  .then((data) => {
    console.log(`getWorkforcemanagementUserWorkplanbidranks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementUserWorkplanbidranks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The userId to whom the work plan bid ranks apply. |  |

### Return type

**WorkPlanBidRanks**


## getWorkforcemanagementWorkplanbidPreferences

> AgentWorkPlanBiddingPreferenceResponse getWorkforcemanagementWorkplanbidPreferences(bidId)


GET /api/v2/workforcemanagement/workplanbids/{bidId}/preferences

Gets an agent's work plan bidding preference

Requires ANY permissions:

* wfm:agentWorkPlanBid:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let bidId = "bidId_example"; // String | The ID of the work plan bid

apiInstance.getWorkforcemanagementWorkplanbidPreferences(bidId)
  .then((data) => {
    console.log(`getWorkforcemanagementWorkplanbidPreferences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementWorkplanbidPreferences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bidId** | **String** | The ID of the work plan bid |  |

### Return type

**AgentWorkPlanBiddingPreferenceResponse**


## getWorkforcemanagementWorkplanbidWorkplans

> AgentWorkPlanListResponse getWorkforcemanagementWorkplanbidWorkplans(bidId)


GET /api/v2/workforcemanagement/workplanbids/{bidId}/workplans

Gets an agent's work plans for a bid

Requires ANY permissions:

* wfm:agentWorkPlanBid:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let bidId = "bidId_example"; // String | The ID of the work plan bid

apiInstance.getWorkforcemanagementWorkplanbidWorkplans(bidId)
  .then((data) => {
    console.log(`getWorkforcemanagementWorkplanbidWorkplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementWorkplanbidWorkplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bidId** | **String** | The ID of the work plan bid |  |

### Return type

**AgentWorkPlanListResponse**


## getWorkforcemanagementWorkplanbids

> AgentWorkPlanBids getWorkforcemanagementWorkplanbids()


GET /api/v2/workforcemanagement/workplanbids

Gets the list of work plan bids that belong to an agent

Requires ANY permissions:

* wfm:agentWorkPlanBid:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

apiInstance.getWorkforcemanagementWorkplanbids()
  .then((data) => {
    console.log(`getWorkforcemanagementWorkplanbids success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementWorkplanbids');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**AgentWorkPlanBids**


## patchWorkforcemanagementAgentAdherenceExplanation

> AdherenceExplanationAsyncResponse patchWorkforcemanagementAgentAdherenceExplanation(agentId, explanationId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AdherenceExplanationAsyncResponse**


## patchWorkforcemanagementAlternativeshiftsTrade

> AlternativeShiftTradeResponse patchWorkforcemanagementAlternativeshiftsTrade(tradeId, body)


PATCH /api/v2/workforcemanagement/alternativeshifts/trades/{tradeId}

Update my alternative shifts trade by trade ID

Requires ANY permissions:

* wfm:agentAlternativeShift:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let tradeId = "tradeId_example"; // String | The ID of the alternative shift trade
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementAlternativeshiftsTrade(tradeId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementAlternativeshiftsTrade success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementAlternativeshiftsTrade');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **tradeId** | **String** | The ID of the alternative shift trade |  |
 **body** | **Object** | body |  |

### Return type

**AlternativeShiftTradeResponse**


## patchWorkforcemanagementAlternativeshiftsTradesStateJobs

> AlternativeShiftAsyncResponse patchWorkforcemanagementAlternativeshiftsTradesStateJobs(body)


PATCH /api/v2/workforcemanagement/alternativeshifts/trades/state/jobs

Bulk update alternative shift trade states

Requires ANY permissions:

* wfm:alternativeShift:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | The request body

apiInstance.patchWorkforcemanagementAlternativeshiftsTradesStateJobs(body)
  .then((data) => {
    console.log(`patchWorkforcemanagementAlternativeshiftsTradesStateJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementAlternativeshiftsTradesStateJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The request body |  |

### Return type

**AlternativeShiftAsyncResponse**


## patchWorkforcemanagementBusinessunit

> BusinessUnitResponse patchWorkforcemanagementBusinessunit(businessUnitId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let body = {}; // Object | body
let opts = { 
  'includeSchedulingDefaultMessageSeverities': true // Boolean | Whether to include scheduling default message severities
};

apiInstance.patchWorkforcemanagementBusinessunit(businessUnitId, body, opts)
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
 **body** | **Object** | body |  |
 **includeSchedulingDefaultMessageSeverities** | **Boolean** | Whether to include scheduling default message severities | [optional]  |

### Return type

**BusinessUnitResponse**


## patchWorkforcemanagementBusinessunitActivitycode

> BusinessUnitActivityCode patchWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let activityCodeId = "activityCodeId_example"; // String | The ID of the activity code to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitActivitycode(businessUnitId, activityCodeId, body)
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
 **body** | **Object** | body |  |

### Return type

**BusinessUnitActivityCode**


## patchWorkforcemanagementBusinessunitActivityplan

> ActivityPlanResponse patchWorkforcemanagementBusinessunitActivityplan(businessUnitId, activityPlanId, body)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}

Update an activity plan

If a job associated with the activity plan is in Processing state the activity plan cannot be updated

Requires ANY permissions:

* wfm:activityPlan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let activityPlanId = "activityPlanId_example"; // String | The ID of the activity plan to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitActivityplan(businessUnitId, activityPlanId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitActivityplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitActivityplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **activityPlanId** | **String** | The ID of the activity plan to update |  |
 **body** | **Object** | body |  |

### Return type

**ActivityPlanResponse**


## patchWorkforcemanagementBusinessunitAlternativeshiftsSettings

> AlternativeShiftBuSettingsResponse patchWorkforcemanagementBusinessunitAlternativeshiftsSettings(businessUnitId, body)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/settings

Update alternative shifts settings for a business unit

Requires ANY permissions:

* wfm:businessUnit:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitAlternativeshiftsSettings(businessUnitId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitAlternativeshiftsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitAlternativeshiftsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | body |  |

### Return type

**AlternativeShiftBuSettingsResponse**


## patchWorkforcemanagementBusinessunitCapacityplan

> CapacityPlanResponse patchWorkforcemanagementBusinessunitCapacityplan(businessUnitId, capacityPlanId, body)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}

Update a capacity plan configuration

Requires ANY permissions:

* wfm:capacityPlan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let capacityPlanId = "capacityPlanId_example"; // String | The ID of the capacity plan
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitCapacityplan(businessUnitId, capacityPlanId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitCapacityplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitCapacityplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **capacityPlanId** | **String** | The ID of the capacity plan |  |
 **body** | **Object** | body |  |

### Return type

**CapacityPlanResponse**


## patchWorkforcemanagementBusinessunitPlanninggroup

> PlanningGroup patchWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let planningGroupId = "planningGroupId_example"; // String | The ID of a planning group to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitPlanninggroup(businessUnitId, planningGroupId, body)
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
 **body** | **Object** | body |  |

### Return type

**PlanningGroup**


## patchWorkforcemanagementBusinessunitSchedulingRun

> void patchWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let runId = "runId_example"; // String | The ID of the schedule run
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitSchedulingRun(businessUnitId, runId, body)
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
 **body** | **Object** | body |  |

### Return type

void (no response body)


## patchWorkforcemanagementBusinessunitServicegoaltemplate

> ServiceGoalTemplate patchWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let serviceGoalTemplateId = "serviceGoalTemplateId_example"; // String | The ID of a service goal template to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitServicegoaltemplate(businessUnitId, serviceGoalTemplateId, body)
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
 **body** | **Object** | body |  |

### Return type

**ServiceGoalTemplate**


## patchWorkforcemanagementBusinessunitStaffinggroup

> StaffingGroupResponse patchWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId, body)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/{staffingGroupId}

Updates a staffing group

Requires ANY permissions:

* wfm:staffingGroup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let staffingGroupId = "staffingGroupId_example"; // String | The ID of the staffing group to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitStaffinggroup(businessUnitId, staffingGroupId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitStaffinggroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitStaffinggroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **staffingGroupId** | **String** | The ID of the staffing group to update |  |
 **body** | **Object** | body |  |

### Return type

**StaffingGroupResponse**


## patchWorkforcemanagementBusinessunitTimeoffplan

> BuTimeOffPlanResponse patchWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId, body)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans/{timeOffPlanId}

Updates a time-off plan

Requires ANY permissions:

* wfm:timeOffPlan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let timeOffPlanId = "timeOffPlanId_example"; // String | The ID of the time-off plan to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitTimeoffplan(businessUnitId, timeOffPlanId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitTimeoffplan success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitTimeoffplan');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **timeOffPlanId** | **String** | The ID of the time-off plan to update |  |
 **body** | **Object** | body |  |

### Return type

**BuTimeOffPlanResponse**


## patchWorkforcemanagementBusinessunitWorkplanbid

> WorkPlanBid patchWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId, body)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}

Update work plan bid

Requires ANY permissions:

* wfm:workPlanBid:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The id of the workplanbid
let body = {}; // Object | The work plan bid to be updated

apiInstance.patchWorkforcemanagementBusinessunitWorkplanbid(businessUnitId, bidId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitWorkplanbid success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitWorkplanbid');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The id of the workplanbid |  |
 **body** | **Object** | The work plan bid to be updated |  |

### Return type

**WorkPlanBid**


## patchWorkforcemanagementBusinessunitWorkplanbidGroup

> WorkPlanBidGroupResponse patchWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId, body)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}

Update a bid group by bid group Id

Requires ANY permissions:

* wfm:workPlanBidGroup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The work plan bid id of the bid groups
let bidGroupId = "bidGroupId_example"; // String | Work Plan Bid Group id
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitWorkplanbidGroup(businessUnitId, bidId, bidGroupId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitWorkplanbidGroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitWorkplanbidGroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The work plan bid id of the bid groups |  |
 **bidGroupId** | **String** | Work Plan Bid Group id |  |
 **body** | **Object** | body |  |

### Return type

**WorkPlanBidGroupResponse**


## patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences

> AdminAgentWorkPlanPreferenceResponse patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences(businessUnitId, bidId, bidGroupId, body)


PATCH /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups/{bidGroupId}/preferences

Overrides the assigned work plan for the specified agents

Requires ANY permissions:

* wfm:workPlanBidGroup:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The work plan bid id of the bid groups
let bidGroupId = "bidGroupId_example"; // String | The ID of the work plan bid group
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences(businessUnitId, bidId, bidGroupId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementBusinessunitWorkplanbidGroupPreferences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The work plan bid id of the bid groups |  |
 **bidGroupId** | **String** | The ID of the work plan bid group |  |
 **body** | **Object** | body |  |

### Return type

**AdminAgentWorkPlanPreferenceResponse**


## patchWorkforcemanagementManagementunit

> ManagementUnit patchWorkforcemanagementManagementunit(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementManagementunit(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**ManagementUnit**


## patchWorkforcemanagementManagementunitAgents

> void patchWorkforcemanagementManagementunitAgents(managementUnitId, body)


PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents

Update agent configurations

Requires ANY permissions:

* wfm:agent:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementManagementunitAgents(managementUnitId, body)
  .then(() => {
    console.log('patchWorkforcemanagementManagementunitAgents returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitAgents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **body** | **Object** | body |  |

### Return type

void (no response body)


## patchWorkforcemanagementManagementunitAgentsWorkplansBulk

> UpdateMuAgentWorkPlansBatchResponse patchWorkforcemanagementManagementunitAgentsWorkplansBulk(managementUnitId, body)


PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/workplans/bulk

Updates agent work plan configuration

Requires ANY permissions:

* wfm:workPlan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementManagementunitAgentsWorkplansBulk(managementUnitId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitAgentsWorkplansBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitAgentsWorkplansBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **body** | **Object** | body |  |

### Return type

**UpdateMuAgentWorkPlansBatchResponse**


## patchWorkforcemanagementManagementunitTimeofflimit

> TimeOffLimit patchWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let timeOffLimitId = "timeOffLimitId_example"; // String | The id of time off limit object to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementManagementunitTimeofflimit(managementUnitId, timeOffLimitId, body)
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
 **body** | **Object** | body |  |

### Return type

**TimeOffLimit**


## patchWorkforcemanagementManagementunitTimeoffplan

> TimeOffPlan patchWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let timeOffPlanId = "timeOffPlanId_example"; // String | The ID of the time off plan to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementManagementunitTimeoffplan(managementUnitId, timeOffPlanId, body)
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
 **body** | **Object** | body |  |

### Return type

**TimeOffPlan**


## patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus

> UserTimeOffIntegrationStatusResponse patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus(managementUnitId, timeOffRequestId, userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let timeOffRequestId = "timeOffRequestId_example"; // String | The ID of the time off request.
let userId = "userId_example"; // String | The ID of user to whom the time off request belongs.
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementManagementunitTimeoffrequestUserIntegrationstatus(managementUnitId, timeOffRequestId, userId, body)
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
 **body** | **Object** | body |  |

### Return type

**UserTimeOffIntegrationStatusResponse**


## patchWorkforcemanagementManagementunitUserTimeoffrequest

> TimeOffRequestResponse patchWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let userId = "userId_example"; // String | The id of the user the requested time off request belongs to
let timeOffRequestId = "timeOffRequestId_example"; // String | The id of the time off request to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementManagementunitUserTimeoffrequest(managementUnitId, userId, timeOffRequestId, body)
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
 **body** | **Object** | body |  |

### Return type

**TimeOffRequestResponse**


## patchWorkforcemanagementManagementunitWeekShifttrade

> ShiftTradeResponse patchWorkforcemanagementManagementunitWeekShifttrade(managementUnitId, weekDateId, tradeId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
 **weekDateId** | **String** | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **tradeId** | **String** | The ID of the shift trade to update |  |
 **body** | **Object** | body |  |

### Return type

**ShiftTradeResponse**


## patchWorkforcemanagementManagementunitWorkplan

> WorkPlan patchWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanId = "workPlanId_example"; // String | The ID of the work plan to update
let body = {}; // Object | body
let opts = { 
  'validationMode': "validationMode_example" // String | Allows to update work plan even if validation result is invalid
};

apiInstance.patchWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, body, opts)
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
 **body** | **Object** | body |  |
 **validationMode** | **String** | Allows to update work plan even if validation result is invalid | [optional] <br />**Values**: Ignore |

### Return type

**WorkPlan**


## patchWorkforcemanagementManagementunitWorkplanrotation

> WorkPlanRotationResponse patchWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanRotationId = "workPlanRotationId_example"; // String | The ID of the work plan rotation to update
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementManagementunitWorkplanrotation(managementUnitId, workPlanRotationId, body)
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
 **body** | **Object** | body |  |

### Return type

**WorkPlanRotationResponse**


## patchWorkforcemanagementTimeoffrequest

> TimeOffRequestResponse patchWorkforcemanagementTimeoffrequest(timeOffRequestId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let timeOffRequestId = "timeOffRequestId_example"; // String | The ID of the time off request
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementTimeoffrequest(timeOffRequestId, body)
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
 **body** | **Object** | body |  |

### Return type

**TimeOffRequestResponse**


## patchWorkforcemanagementUserWorkplanbidranks

> WorkPlanBidRanks patchWorkforcemanagementUserWorkplanbidranks(userId, body)


PATCH /api/v2/workforcemanagement/users/{userId}/workplanbidranks

Update work plan bid ranks for a user

Requires ANY permissions:

* wfm:workPlanBid:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let userId = "userId_example"; // String | The userId to whom the work plan bid ranks apply.
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementUserWorkplanbidranks(userId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementUserWorkplanbidranks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementUserWorkplanbidranks');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | The userId to whom the work plan bid ranks apply. |  |
 **body** | **Object** | body |  |

### Return type

**WorkPlanBidRanks**


## patchWorkforcemanagementUsersWorkplanbidranksBulk

> EntityListing patchWorkforcemanagementUsersWorkplanbidranksBulk(body)


PATCH /api/v2/workforcemanagement/users/workplanbidranks/bulk

Update bulk work plan bid ranks on users. Max 50 users can be updated at a time.

Requires ANY permissions:

* wfm:workPlanBid:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = [{}]; // Object | Users

apiInstance.patchWorkforcemanagementUsersWorkplanbidranksBulk(body)
  .then((data) => {
    console.log(`patchWorkforcemanagementUsersWorkplanbidranksBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementUsersWorkplanbidranksBulk');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Users |  |

### Return type

**EntityListing**


## patchWorkforcemanagementWorkplanbidPreferences

> AgentWorkPlanBiddingPreferenceResponse patchWorkforcemanagementWorkplanbidPreferences(bidId, body)


PATCH /api/v2/workforcemanagement/workplanbids/{bidId}/preferences

Update an agent's work plan bidding preference

Requires ANY permissions:

* wfm:agentWorkPlanBid:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let bidId = "bidId_example"; // String | The ID of the work plan bid
let body = {}; // Object | body

apiInstance.patchWorkforcemanagementWorkplanbidPreferences(bidId, body)
  .then((data) => {
    console.log(`patchWorkforcemanagementWorkplanbidPreferences success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementWorkplanbidPreferences');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **bidId** | **String** | The ID of the work plan bid |  |
 **body** | **Object** | body |  |

### Return type

**AgentWorkPlanBiddingPreferenceResponse**


## postWorkforcemanagementAdherenceExplanations

> AdherenceExplanationAsyncResponse postWorkforcemanagementAdherenceExplanations(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AdherenceExplanationAsyncResponse**


## postWorkforcemanagementAdherenceExplanationsQuery

> QueryAdherenceExplanationsResponse postWorkforcemanagementAdherenceExplanationsQuery(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**QueryAdherenceExplanationsResponse**


## postWorkforcemanagementAdherenceHistorical

> WfmHistoricalAdherenceResponse postWorkforcemanagementAdherenceHistorical(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**WfmHistoricalAdherenceResponse**


## postWorkforcemanagementAdherenceHistoricalBulk

> WfmHistoricalAdherenceBulkResponse postWorkforcemanagementAdherenceHistoricalBulk(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementAdherenceHistoricalBulk(body)
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
 **body** | **Object** | body |  |

### Return type

**WfmHistoricalAdherenceBulkResponse**


## postWorkforcemanagementAgentAdherenceExplanations

> AdherenceExplanationAsyncResponse postWorkforcemanagementAgentAdherenceExplanations(agentId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AdherenceExplanationAsyncResponse**


## postWorkforcemanagementAgentAdherenceExplanationsQuery

> AgentQueryAdherenceExplanationsResponse postWorkforcemanagementAgentAdherenceExplanationsQuery(agentId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AgentQueryAdherenceExplanationsResponse**


## postWorkforcemanagementAgents

> MoveAgentsResponse postWorkforcemanagementAgents(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementAgents(body)
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
 **body** | **Object** | body |  |

### Return type

**MoveAgentsResponse**


## postWorkforcemanagementAgentsIntegrationsHrisQuery

> AgentsIntegrationsListing postWorkforcemanagementAgentsIntegrationsHrisQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementAgentsIntegrationsHrisQuery(body)
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
 **body** | **Object** | body |  |

### Return type

**AgentsIntegrationsListing**


## postWorkforcemanagementAgentsMePossibleworkshifts

> AgentPossibleWorkShiftsResponse postWorkforcemanagementAgentsMePossibleworkshifts(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AgentPossibleWorkShiftsResponse**


## postWorkforcemanagementAgentschedulesMine

> BuCurrentAgentScheduleSearchResponse postWorkforcemanagementAgentschedulesMine(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementAgentschedulesMine(body)
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
 **body** | **Object** | body |  |

### Return type

**BuCurrentAgentScheduleSearchResponse**


## postWorkforcemanagementAlternativeshiftsOffersJobs

> AlternativeShiftAsyncResponse postWorkforcemanagementAlternativeshiftsOffersJobs(body)


POST /api/v2/workforcemanagement/alternativeshifts/offers/jobs

Request a list of alternative shift offers for a given schedule

Requires ANY permissions:

* wfm:agentAlternativeShift:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | The request body

apiInstance.postWorkforcemanagementAlternativeshiftsOffersJobs(body)
  .then((data) => {
    console.log(`postWorkforcemanagementAlternativeshiftsOffersJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAlternativeshiftsOffersJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The request body |  |

### Return type

**AlternativeShiftAsyncResponse**


## postWorkforcemanagementAlternativeshiftsOffersSearchJobs

> AlternativeShiftAsyncResponse postWorkforcemanagementAlternativeshiftsOffersSearchJobs(body)


POST /api/v2/workforcemanagement/alternativeshifts/offers/search/jobs

Request a search of alternative shift offers for a given shift

Requires ANY permissions:

* wfm:agentAlternativeShift:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | The request body

apiInstance.postWorkforcemanagementAlternativeshiftsOffersSearchJobs(body)
  .then((data) => {
    console.log(`postWorkforcemanagementAlternativeshiftsOffersSearchJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAlternativeshiftsOffersSearchJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The request body |  |

### Return type

**AlternativeShiftAsyncResponse**


## postWorkforcemanagementAlternativeshiftsTrades

> AlternativeShiftTradeResponse postWorkforcemanagementAlternativeshiftsTrades(body)


POST /api/v2/workforcemanagement/alternativeshifts/trades

Create my alternative shift trade using an existing offer's jobId

Requires ANY permissions:

* wfm:agentAlternativeShift:submit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | The request body

apiInstance.postWorkforcemanagementAlternativeshiftsTrades(body)
  .then((data) => {
    console.log(`postWorkforcemanagementAlternativeshiftsTrades success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementAlternativeshiftsTrades');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The request body |  |

### Return type

**AlternativeShiftTradeResponse**


## postWorkforcemanagementBusinessunitActivitycodes

> BusinessUnitActivityCode postWorkforcemanagementBusinessunitActivitycodes(businessUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit, or 'mine' for the business unit of the logged-in user.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitActivitycodes(businessUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**BusinessUnitActivityCode**


## postWorkforcemanagementBusinessunitActivityplanRunsJobs

> ActivityPlanJobResponse postWorkforcemanagementBusinessunitActivityplanRunsJobs(businessUnitId, activityPlanId)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans/{activityPlanId}/runs/jobs

Run an activity plan manually

Triggers a job running the activity plan. The activity plan cannot be updated until the job completes

Requires ANY permissions:

* wfm:activityPlanRunJob:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let activityPlanId = "activityPlanId_example"; // String | The ID of the activity plan to run

apiInstance.postWorkforcemanagementBusinessunitActivityplanRunsJobs(businessUnitId, activityPlanId)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitActivityplanRunsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitActivityplanRunsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **activityPlanId** | **String** | The ID of the activity plan to run |  |

### Return type

**ActivityPlanJobResponse**


## postWorkforcemanagementBusinessunitActivityplans

> ActivityPlanResponse postWorkforcemanagementBusinessunitActivityplans(businessUnitId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/activityplans

Create an activity plan

Requires ANY permissions:

* wfm:activityPlan:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitActivityplans(businessUnitId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitActivityplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitActivityplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | body |  |

### Return type

**ActivityPlanResponse**


## postWorkforcemanagementBusinessunitAdherenceExplanationsQuery

> BuQueryAdherenceExplanationsResponse postWorkforcemanagementBusinessunitAdherenceExplanationsQuery(businessUnitId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuQueryAdherenceExplanationsResponse**


## postWorkforcemanagementBusinessunitAgentschedulesSearch

> BuAsyncAgentSchedulesSearchResponse postWorkforcemanagementBusinessunitAgentschedulesSearch(businessUnitId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.postWorkforcemanagementBusinessunitAgentschedulesSearch(businessUnitId, body, opts)
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
 **body** | **Object** | body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |

### Return type

**BuAsyncAgentSchedulesSearchResponse**


## postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch

> BuListAlternativeShiftTradesResponse postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch(businessUnitId, body, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/alternativeshifts/trades/search

List alternative shifts trades for a given management unit or agent

Requires ANY permissions:

* wfm:alternativeShift:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | The request body
let opts = { 
  'forceAsync': true // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
};

apiInstance.postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch(businessUnitId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitAlternativeshiftsTradesSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | The request body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |

### Return type

**BuListAlternativeShiftTradesResponse**


## postWorkforcemanagementBusinessunitCapacityplanCopy

> CapacityPlanResponse postWorkforcemanagementBusinessunitCapacityplanCopy(businessUnitId, capacityPlanId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/copy

Copy a capacity plan

Requires ANY permissions:

* wfm:capacityPlan:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let capacityPlanId = "capacityPlanId_example"; // String | The ID of the capacity plan
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitCapacityplanCopy(businessUnitId, capacityPlanId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitCapacityplanCopy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitCapacityplanCopy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **capacityPlanId** | **String** | The ID of the capacity plan |  |
 **body** | **Object** | body |  |

### Return type

**CapacityPlanResponse**


## postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate

> CapacityPlanStaffingRequirementResult postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate(businessUnitId, capacityPlanId)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/requirement/generate

Regenerate requirements for capacity plan

Requires ANY permissions:

* wfm:capacityPlan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let capacityPlanId = "capacityPlanId_example"; // String | The ID of the capacity plan

apiInstance.postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate(businessUnitId, capacityPlanId)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitCapacityplanRequirementGenerate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **capacityPlanId** | **String** | The ID of the capacity plan |  |

### Return type

**CapacityPlanStaffingRequirementResult**


## postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations

> CapacityPlanStaffingGroupMetricChangeResponse postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations(businessUnitId, capacityPlanId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocations

Create staffing group allocations for a capacity plan

Requires ANY permissions:

* wfm:capacityPlan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let capacityPlanId = "capacityPlanId_example"; // String | The ID of the capacity plan
let body = {}; // Object | 

apiInstance.postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations(businessUnitId, capacityPlanId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **capacityPlanId** | **String** | The ID of the capacity plan |  |
 **body** | **Object** |  |  |

### Return type

**CapacityPlanStaffingGroupMetricChangeResponse**


## postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery

> CapacityPlanStaffingGroupMetricChangeHistoryListResponse postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery(businessUnitId, capacityPlanId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/{capacityPlanId}/staffinggroupallocationshistory/query

Query staffing groups allocations history for a capacity plan

Requires ANY permissions:

* wfm:capacityPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let capacityPlanId = "capacityPlanId_example"; // String | The ID of the capacity plan
let body = {}; // Object | 

apiInstance.postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery(businessUnitId, capacityPlanId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitCapacityplanStaffinggroupallocationshistoryQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **capacityPlanId** | **String** | The ID of the capacity plan |  |
 **body** | **Object** |  |  |

### Return type

**CapacityPlanStaffingGroupMetricChangeHistoryListResponse**


## postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate

> LongTermRequirementsResponse postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate(businessUnitId, weekDateId, forecastId)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplanning/longtermrequirements/automaticbestmethod/weeks/{weekDateId}/forecasts/{forecastId}/forceregenerate

Force regenerate the latest long term staffing requirements for a business unit

Requires ANY permissions:

* wfm:longTermStaffing:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | 
let weekDateId = "weekDateId_example"; // String | weekDateId of forecast, format yyyy-MM-dd. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let forecastId = "forecastId_example"; // String | forecastId of forecast

apiInstance.postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate(businessUnitId, weekDateId, forecastId)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitCapacityplanningLongtermrequirementsAutomaticbestmethodWeekForecastForceregenerate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** |  |  |
 **weekDateId** | **String** | weekDateId of forecast, format yyyy-MM-dd. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **forecastId** | **String** | forecastId of forecast |  |

### Return type

**LongTermRequirementsResponse**


## postWorkforcemanagementBusinessunitCapacityplans

> CapacityPlanResponse postWorkforcemanagementBusinessunitCapacityplans(businessUnitId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans

Create a new capacity plan

Requires ANY permissions:

* wfm:capacityPlan:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitCapacityplans(businessUnitId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitCapacityplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitCapacityplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | body |  |

### Return type

**CapacityPlanResponse**


## postWorkforcemanagementBusinessunitCapacityplansBulkRemove

> void postWorkforcemanagementBusinessunitCapacityplansBulkRemove(businessUnitId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/capacityplans/bulk/remove

Delete capacity plans in a business unit

Requires ANY permissions:

* wfm:capacityPlan:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitCapacityplansBulkRemove(businessUnitId, body)
  .then(() => {
    console.log('postWorkforcemanagementBusinessunitCapacityplansBulkRemove returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitCapacityplansBulkRemove');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | body |  |

### Return type

void (no response body)


## postWorkforcemanagementBusinessunitIntraday

> AsyncIntradayResponse postWorkforcemanagementBusinessunitIntraday(businessUnitId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body
let opts = { 
  'forceAsync': true // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
};

apiInstance.postWorkforcemanagementBusinessunitIntraday(businessUnitId, body, opts)
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
 **body** | **Object** | body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |

### Return type

**AsyncIntradayResponse**


## postWorkforcemanagementBusinessunitPlanninggroups

> PlanningGroup postWorkforcemanagementBusinessunitPlanninggroups(businessUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitPlanninggroups(businessUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**PlanningGroup**


## postWorkforcemanagementBusinessunitServicegoaltemplates

> ServiceGoalTemplate postWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitServicegoaltemplates(businessUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**ServiceGoalTemplate**


## postWorkforcemanagementBusinessunitStaffinggroups

> StaffingGroupResponse postWorkforcemanagementBusinessunitStaffinggroups(businessUnitId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups

Creates a new staffing group

Requires ANY permissions:

* wfm:staffingGroup:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitStaffinggroups(businessUnitId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitStaffinggroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitStaffinggroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | body |  |

### Return type

**StaffingGroupResponse**


## postWorkforcemanagementBusinessunitStaffinggroupsPlanninggroupsQuery

> PlanningGroupToStaffingGroupsListing postWorkforcemanagementBusinessunitStaffinggroupsPlanninggroupsQuery(businessUnitId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/planninggroups/query

Gets a list of planning group to staffing groups list association

Requires ANY permissions:

* wfm:staffingGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitStaffinggroupsPlanninggroupsQuery(businessUnitId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitStaffinggroupsPlanninggroupsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitStaffinggroupsPlanninggroupsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | body |  |

### Return type

**PlanningGroupToStaffingGroupsListing**


## postWorkforcemanagementBusinessunitStaffinggroupsQuery

> UserStaffingGroupListing postWorkforcemanagementBusinessunitStaffinggroupsQuery(businessUnitId, body, opts)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/staffinggroups/query

Gets staffing group associations for a list of user IDs

Requires ANY permissions:

* wfm:staffingGroup:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body
let opts = { 
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service
};

apiInstance.postWorkforcemanagementBusinessunitStaffinggroupsQuery(businessUnitId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitStaffinggroupsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitStaffinggroupsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | body |  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service | [optional]  |

### Return type

**UserStaffingGroupListing**


## postWorkforcemanagementBusinessunitTimeofflimits

> BuTimeOffLimitResponse postWorkforcemanagementBusinessunitTimeofflimits(businessUnitId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits

Creates a new time-off limit object

Requires ANY permissions:

* wfm:timeOffLimit:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitTimeofflimits(businessUnitId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitTimeofflimits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitTimeofflimits');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | body |  |

### Return type

**BuTimeOffLimitResponse**


## postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery

> BuTimeOffLimitValuesResponse postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery(businessUnitId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/values/query

Retrieves time-off limit related values based on a given set of filters.

Requires ANY permissions:

* wfm:timeOffLimit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery(businessUnitId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitTimeofflimitsValuesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | body |  |

### Return type

**BuTimeOffLimitValuesResponse**


## postWorkforcemanagementBusinessunitTimeoffplans

> BuTimeOffPlanResponse postWorkforcemanagementBusinessunitTimeoffplans(businessUnitId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeoffplans

Creates a new time-off plan

Requires ANY permissions:

* wfm:timeOffPlan:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitTimeoffplans(businessUnitId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitTimeoffplans success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitTimeoffplans');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | body |  |

### Return type

**BuTimeOffPlanResponse**


## postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery

> BuAsyncAgentSchedulesQueryResponse postWorkforcemanagementBusinessunitWeekScheduleAgentschedulesQuery(businessUnitId, weekId, scheduleId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuAsyncAgentSchedulesQueryResponse**


## postWorkforcemanagementBusinessunitWeekScheduleCopy

> BuAsyncScheduleResponse postWorkforcemanagementBusinessunitWeekScheduleCopy(businessUnitId, weekId, scheduleId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuAsyncScheduleResponse**


## postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations

> PerformancePredictionRecalculationResponse postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations(businessUnitId, weekId, scheduleId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations

Request a daily recalculation of the performance prediction for the associated schedule

Requires ANY permissions:

* wfm:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the performance prediction belongs
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format
let scheduleId = "scheduleId_example"; // String | The ID of the schedule the performance prediction belongs to
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations(businessUnitId, weekId, scheduleId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the performance prediction belongs |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format |  |
 **scheduleId** | **String** | The ID of the schedule the performance prediction belongs to |  |
 **body** | **Object** | body |  |

### Return type

**PerformancePredictionRecalculationResponse**


## postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl

> PerformancePredictionRecalculationUploadResponse postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl(businessUnitId, weekId, scheduleId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/weeks/{weekId}/schedules/{scheduleId}/performancepredictions/recalculations/uploadurl

Upload daily activity changes to be able to request a performance prediction recalculation

Requires ANY permissions:

* wfm:schedule:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit to which the performance prediction belongs
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format
let scheduleId = "scheduleId_example"; // String | The ID of the schedule the performance prediction belongs to
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl(businessUnitId, weekId, scheduleId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWeekSchedulePerformancepredictionsRecalculationsUploadurl');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit to which the performance prediction belongs |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format |  |
 **scheduleId** | **String** | The ID of the schedule the performance prediction belongs to |  |
 **body** | **Object** | body |  |

### Return type

**PerformancePredictionRecalculationUploadResponse**


## postWorkforcemanagementBusinessunitWeekScheduleReschedule

> BuAsyncScheduleRunResponse postWorkforcemanagementBusinessunitWeekScheduleReschedule(businessUnitId, weekId, scheduleId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuAsyncScheduleRunResponse**


## postWorkforcemanagementBusinessunitWeekScheduleUpdate

> BuAsyncScheduleResponse postWorkforcemanagementBusinessunitWeekScheduleUpdate(businessUnitId, weekId, scheduleId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuAsyncScheduleResponse**


## postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl

> UpdateScheduleUploadResponse postWorkforcemanagementBusinessunitWeekScheduleUpdateUploadurl(businessUnitId, weekId, scheduleId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UpdateScheduleUploadResponse**


## postWorkforcemanagementBusinessunitWeekSchedules

> BuScheduleMetadata postWorkforcemanagementBusinessunitWeekSchedules(businessUnitId, weekId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuScheduleMetadata**


## postWorkforcemanagementBusinessunitWeekSchedulesGenerate

> BuAsyncScheduleRunResponse postWorkforcemanagementBusinessunitWeekSchedulesGenerate(businessUnitId, weekId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**BuAsyncScheduleRunResponse**


## postWorkforcemanagementBusinessunitWeekSchedulesImport

> ScheduleUploadProcessingResponse postWorkforcemanagementBusinessunitWeekSchedulesImport(businessUnitId, weekId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ScheduleUploadProcessingResponse**


## postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl

> ImportScheduleUploadResponse postWorkforcemanagementBusinessunitWeekSchedulesImportUploadurl(businessUnitId, weekId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ImportScheduleUploadResponse**


## postWorkforcemanagementBusinessunitWeekShorttermforecastCopy

> AsyncForecastOperationResult postWorkforcemanagementBusinessunitWeekShorttermforecastCopy(businessUnitId, weekDateId, forecastId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncForecastOperationResult**


## postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate

> AsyncForecastOperationResult postWorkforcemanagementBusinessunitWeekShorttermforecastsGenerate(businessUnitId, weekDateId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AsyncForecastOperationResult**


## postWorkforcemanagementBusinessunitWeekShorttermforecastsImport

> ImportForecastResponse postWorkforcemanagementBusinessunitWeekShorttermforecastsImport(businessUnitId, weekDateId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ImportForecastResponse**


## postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl

> ImportForecastUploadResponse postWorkforcemanagementBusinessunitWeekShorttermforecastsImportUploadurl(businessUnitId, weekDateId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ImportForecastUploadResponse**


## postWorkforcemanagementBusinessunitWorkplanbidCopy

> WorkPlanBid postWorkforcemanagementBusinessunitWorkplanbidCopy(businessUnitId, bidId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/copy

Copy a work plan bid

Requires ANY permissions:

* wfm:workPlanBid:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The ID of the work plan bid to copy
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWorkplanbidCopy(businessUnitId, bidId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWorkplanbidCopy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWorkplanbidCopy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The ID of the work plan bid to copy |  |
 **body** | **Object** | body |  |

### Return type

**WorkPlanBid**


## postWorkforcemanagementBusinessunitWorkplanbidGroups

> WorkPlanBidGroupResponse postWorkforcemanagementBusinessunitWorkplanbidGroups(businessUnitId, bidId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids/{bidId}/groups

Add a bid group in a given work plan bid

Requires ANY permissions:

* wfm:workPlanBidGroup:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let bidId = "bidId_example"; // String | The work plan bid id of the bid groups
let body = {}; // Object | body

apiInstance.postWorkforcemanagementBusinessunitWorkplanbidGroups(businessUnitId, bidId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWorkplanbidGroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWorkplanbidGroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **bidId** | **String** | The work plan bid id of the bid groups |  |
 **body** | **Object** | body |  |

### Return type

**WorkPlanBidGroupResponse**


## postWorkforcemanagementBusinessunitWorkplanbids

> WorkPlanBid postWorkforcemanagementBusinessunitWorkplanbids(businessUnitId, body)


POST /api/v2/workforcemanagement/businessunits/{businessUnitId}/workplanbids

Create a new work plan bid

Requires ANY permissions:

* wfm:workPlanBid:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let body = {}; // Object | The work plan bid to be created

apiInstance.postWorkforcemanagementBusinessunitWorkplanbids(businessUnitId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementBusinessunitWorkplanbids success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementBusinessunitWorkplanbids');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **body** | **Object** | The work plan bid to be created |  |

### Return type

**WorkPlanBid**


## postWorkforcemanagementBusinessunits

> BusinessUnitResponse postWorkforcemanagementBusinessunits(body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body
let opts = { 
  'includeSchedulingDefaultMessageSeverities': true // Boolean | Whether to include scheduling default message severities
};

apiInstance.postWorkforcemanagementBusinessunits(body, opts)
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
 **body** | **Object** | body |  |
 **includeSchedulingDefaultMessageSeverities** | **Boolean** | Whether to include scheduling default message severities | [optional]  |

### Return type

**BusinessUnitResponse**


## postWorkforcemanagementCalendarUrlIcs

> CalendarUrlResponse postWorkforcemanagementCalendarUrlIcs(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**CalendarUrlResponse**


## postWorkforcemanagementHistoricaldataBulkRemoveJobs

> HistoricalImportDeleteFilesJobResponse postWorkforcemanagementHistoricaldataBulkRemoveJobs(body)


POST /api/v2/workforcemanagement/historicaldata/bulk/remove/jobs

Delete the list of the historical data import entries

Requires ALL permissions:

* wfm:historicalData:upload

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementHistoricaldataBulkRemoveJobs(body)
  .then((data) => {
    console.log(`postWorkforcemanagementHistoricaldataBulkRemoveJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementHistoricaldataBulkRemoveJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body |  |

### Return type

**HistoricalImportDeleteFilesJobResponse**


## postWorkforcemanagementHistoricaldataValidate

> ValidationServiceAsyncResponse postWorkforcemanagementHistoricaldataValidate(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementHistoricaldataValidate(body)
  .then((data) => {
    console.log(`postWorkforcemanagementHistoricaldataValidate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementHistoricaldataValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | body |  |

### Return type

**ValidationServiceAsyncResponse**


## postWorkforcemanagementIntegrationsHriTimeofftypesJobs

> HrisTimeOffTypesResponse postWorkforcemanagementIntegrationsHriTimeofftypesJobs(hrisIntegrationId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**HrisTimeOffTypesResponse**


## postWorkforcemanagementManagementunitAgentsWorkplansQuery

> AgentsWorkPlansResponse postWorkforcemanagementManagementunitAgentsWorkplansQuery(managementUnitId, body, opts)


POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/workplans/query

Get agents work plans configuration

Requires ANY permissions:

* wfm:workPlan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body
let opts = { 
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.postWorkforcemanagementManagementunitAgentsWorkplansQuery(managementUnitId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitAgentsWorkplansQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitAgentsWorkplansQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or 'mine' for the management unit of the logged-in user. |  |
 **body** | **Object** | body |  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |

### Return type

**AgentsWorkPlansResponse**


## postWorkforcemanagementManagementunitAgentschedulesSearch

> BuAsyncAgentSchedulesSearchResponse postWorkforcemanagementManagementunitAgentschedulesSearch(managementUnitId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.postWorkforcemanagementManagementunitAgentschedulesSearch(managementUnitId, body, opts)
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
 **body** | **Object** | body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification. For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |

### Return type

**BuAsyncAgentSchedulesSearchResponse**


## postWorkforcemanagementManagementunitHistoricaladherencequery

> WfmHistoricalAdherenceResponse postWorkforcemanagementManagementunitHistoricaladherencequery(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitHistoricaladherencequery(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**WfmHistoricalAdherenceResponse**


## postWorkforcemanagementManagementunitMove

> MoveManagementUnitResponse postWorkforcemanagementManagementunitMove(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitMove(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**MoveManagementUnitResponse**


## postWorkforcemanagementManagementunitSchedulesSearch

> UserScheduleContainer postWorkforcemanagementManagementunitSchedulesSearch(managementUnitId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitSchedulesSearch(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**UserScheduleContainer**


## postWorkforcemanagementManagementunitShrinkageJobs

> WfmHistoricalShrinkageResponse postWorkforcemanagementManagementunitShrinkageJobs(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitShrinkageJobs(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**WfmHistoricalShrinkageResponse**


## postWorkforcemanagementManagementunitTimeofflimits

> TimeOffLimit postWorkforcemanagementManagementunitTimeofflimits(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitTimeofflimits(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**TimeOffLimit**


## postWorkforcemanagementManagementunitTimeofflimitsValuesQuery

> QueryTimeOffLimitValuesResponse postWorkforcemanagementManagementunitTimeofflimitsValuesQuery(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitTimeofflimitsValuesQuery(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**QueryTimeOffLimitValuesResponse**


## postWorkforcemanagementManagementunitTimeoffplans

> TimeOffPlan postWorkforcemanagementManagementunitTimeoffplans(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitTimeoffplans(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**TimeOffPlan**


## postWorkforcemanagementManagementunitTimeoffrequests

> TimeOffRequestList postWorkforcemanagementManagementunitTimeoffrequests(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitTimeoffrequests(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**TimeOffRequestList**


## postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery

> UserTimeOffIntegrationStatusResponseListing postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitTimeoffrequestsIntegrationstatusQuery(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**UserTimeOffIntegrationStatusResponseListing**


## postWorkforcemanagementManagementunitTimeoffrequestsQuery

> TimeOffRequestListing postWorkforcemanagementManagementunitTimeoffrequestsQuery(managementUnitId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body
let opts = { 
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.postWorkforcemanagementManagementunitTimeoffrequestsQuery(managementUnitId, body, opts)
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
 **body** | **Object** | body |  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |

### Return type

**TimeOffRequestListing**


## postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery

> WaitlistPositionListing postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitTimeoffrequestsWaitlistpositionsQuery(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**WaitlistPositionListing**


## postWorkforcemanagementManagementunitUserTimeoffbalanceJobs

> TimeOffBalancesResponse postWorkforcemanagementManagementunitUserTimeoffbalanceJobs(managementUnitId, userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeOffBalancesResponse**


## postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs

> TimeOffBalancesResponse postWorkforcemanagementManagementunitUserTimeoffrequestTimeoffbalanceJobs(managementUnitId, userId, timeOffRequestId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeOffBalancesResponse**


## postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate

> EstimateAvailableTimeOffResponse postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate(managementUnitId, userId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit
let userId = "userId_example"; // String | The id of the user for whom the time off request estimate is requested
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitUserTimeoffrequestsEstimate(managementUnitId, userId, body)
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
 **body** | **Object** | body |  |

### Return type

**EstimateAvailableTimeOffResponse**


## postWorkforcemanagementManagementunitWeekShifttradeMatch

> MatchShiftTradeResponse postWorkforcemanagementManagementunitWeekShifttradeMatch(managementUnitId, weekDateId, tradeId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
 **weekDateId** | **String** | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **tradeId** | **String** | The ID of the shift trade to update |  |
 **body** | **Object** | body |  |

### Return type

**MatchShiftTradeResponse**


## postWorkforcemanagementManagementunitWeekShifttrades

> ShiftTradeResponse postWorkforcemanagementManagementunitWeekShifttrades(managementUnitId, weekDateId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
 **weekDateId** | **String** | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |

### Return type

**ShiftTradeResponse**


## postWorkforcemanagementManagementunitWeekShifttradesSearch

> SearchShiftTradesResponse postWorkforcemanagementManagementunitWeekShifttradesSearch(managementUnitId, weekDateId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
let body = {}; // Object | body
let opts = { 
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service. For testing/app development purposes
};

apiInstance.postWorkforcemanagementManagementunitWeekShifttradesSearch(managementUnitId, weekDateId, body, opts)
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
 **weekDateId** | **String** | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service. For testing/app development purposes | [optional]  |

### Return type

**SearchShiftTradesResponse**


## postWorkforcemanagementManagementunitWeekShifttradesStateBulk

> BulkUpdateShiftTradeStateResponse postWorkforcemanagementManagementunitWeekShifttradesStateBulk(managementUnitId, weekDateId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekDateId = "weekDateId_example"; // String | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd
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
 **weekDateId** | **String** | The start week date of the initiating shift in yyyy-MM-dd format. Dates are represented as an ISO-8601 string. For example: yyyy-MM-dd |  |
 **body** | **Object** | body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |

### Return type

**BulkUpdateShiftTradeStateResponse**


## postWorkforcemanagementManagementunitWorkplanCopy

> WorkPlan postWorkforcemanagementManagementunitWorkplanCopy(managementUnitId, workPlanId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanId = "workPlanId_example"; // String | The ID of the work plan to create a copy
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitWorkplanCopy(managementUnitId, workPlanId, body)
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
 **body** | **Object** | body |  |

### Return type

**WorkPlan**


## postWorkforcemanagementManagementunitWorkplanValidate

> ValidateWorkPlanResponse postWorkforcemanagementManagementunitWorkplanValidate(managementUnitId, workPlanId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanId = "workPlanId_example"; // String | The ID of the work plan to validate. For new work plan, use the word 'new' for the ID.
let body = {}; // Object | body
let opts = { 
  'expand': ["expand_example"] // [String] | 
};

apiInstance.postWorkforcemanagementManagementunitWorkplanValidate(managementUnitId, workPlanId, body, opts)
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
 **body** | **Object** | body |  |
 **expand** | **[String]** |  | [optional] <br />**Values**: messages |

### Return type

**ValidateWorkPlanResponse**


## postWorkforcemanagementManagementunitWorkplanrotationCopy

> WorkPlanRotationResponse postWorkforcemanagementManagementunitWorkplanrotationCopy(managementUnitId, workPlanRotationId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let workPlanRotationId = "workPlanRotationId_example"; // String | The ID of the work plan rotation to create a copy
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitWorkplanrotationCopy(managementUnitId, workPlanRotationId, body)
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
 **body** | **Object** | body |  |

### Return type

**WorkPlanRotationResponse**


## postWorkforcemanagementManagementunitWorkplanrotations

> WorkPlanRotationResponse postWorkforcemanagementManagementunitWorkplanrotations(managementUnitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitWorkplanrotations(managementUnitId, body)
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
 **body** | **Object** | body |  |

### Return type

**WorkPlanRotationResponse**


## postWorkforcemanagementManagementunitWorkplans

> WorkPlan postWorkforcemanagementManagementunitWorkplans(managementUnitId, body, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let body = {}; // Object | body
let opts = { 
  'validationMode': "validationMode_example" // String | Allows to create work plan even if the validation result is invalid
};

apiInstance.postWorkforcemanagementManagementunitWorkplans(managementUnitId, body, opts)
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
 **body** | **Object** | body |  |
 **validationMode** | **String** | Allows to create work plan even if the validation result is invalid | [optional] <br />**Values**: Ignore |

### Return type

**WorkPlan**


## postWorkforcemanagementManagementunits

> ManagementUnit postWorkforcemanagementManagementunits(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunits(body)
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
 **body** | **Object** | body |  |

### Return type

**ManagementUnit**


## postWorkforcemanagementNotificationsUpdate

> UpdateNotificationsResponse postWorkforcemanagementNotificationsUpdate(body)


POST /api/v2/workforcemanagement/notifications/update

Mark a list of notifications as read or unread

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementNotificationsUpdate(body)
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
 **body** | **Object** | body |  |

### Return type

**UpdateNotificationsResponse**


## postWorkforcemanagementSchedules

> UserScheduleContainer postWorkforcemanagementSchedules(opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UserScheduleContainer**


## postWorkforcemanagementTeamAdherenceHistorical

> WfmHistoricalAdherenceResponse postWorkforcemanagementTeamAdherenceHistorical(teamId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let teamId = "teamId_example"; // String | The ID of the team
let body = {}; // Object | body

apiInstance.postWorkforcemanagementTeamAdherenceHistorical(teamId, body)
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
 **body** | **Object** | body |  |

### Return type

**WfmHistoricalAdherenceResponse**


## postWorkforcemanagementTeamShrinkageJobs

> WfmHistoricalShrinkageResponse postWorkforcemanagementTeamShrinkageJobs(teamId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let teamId = "teamId_example"; // String | The ID of the team
let body = {}; // Object | body

apiInstance.postWorkforcemanagementTeamShrinkageJobs(teamId, body)
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
 **body** | **Object** | body |  |

### Return type

**WfmHistoricalShrinkageResponse**


## postWorkforcemanagementTimeoffbalanceJobs

> TimeOffBalancesResponse postWorkforcemanagementTimeoffbalanceJobs(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TimeOffBalancesResponse**


## postWorkforcemanagementTimeofflimitsAvailableQuery

> AvailableTimeOffResponse postWorkforcemanagementTimeofflimitsAvailableQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementTimeofflimitsAvailableQuery(body)
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
 **body** | **Object** | body |  |

### Return type

**AvailableTimeOffResponse**


## postWorkforcemanagementTimeoffrequests

> TimeOffRequestResponse postWorkforcemanagementTimeoffrequests(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementTimeoffrequests(body)
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
 **body** | **Object** | body |  |

### Return type

**TimeOffRequestResponse**


## postWorkforcemanagementTimeoffrequestsEstimate

> EstimateAvailableTimeOffResponse postWorkforcemanagementTimeoffrequestsEstimate(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementTimeoffrequestsEstimate(body)
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
 **body** | **Object** | body |  |

### Return type

**EstimateAvailableTimeOffResponse**


## postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery

> TimeOffIntegrationStatusResponseListing postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let body = {}; // Object | body

apiInstance.postWorkforcemanagementTimeoffrequestsIntegrationstatusQuery(body)
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
 **body** | **Object** | body |  |

### Return type

**TimeOffIntegrationStatusResponseListing**


## putWorkforcemanagementAgentIntegrationsHris

> AgentIntegrationsResponse putWorkforcemanagementAgentIntegrationsHris(agentId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**AgentIntegrationsResponse**


## putWorkforcemanagementBusinessunitTimeofflimitValues

> BuTimeOffLimitResponse putWorkforcemanagementBusinessunitTimeofflimitValues(businessUnitId, timeOffLimitId, body)


PUT /api/v2/workforcemanagement/businessunits/{businessUnitId}/timeofflimits/{timeOffLimitId}/values

Sets daily values for a date range of time-off limit object

Note that only limit daily values can be set through API, allocated and waitlisted values are read-only for time-off limit API

Requires ANY permissions:

* wfm:timeOffLimit:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let businessUnitId = "businessUnitId_example"; // String | The ID of the business unit
let timeOffLimitId = "timeOffLimitId_example"; // String | The ID of the time-off limit object to set values for
let body = {}; // Object | body

apiInstance.putWorkforcemanagementBusinessunitTimeofflimitValues(businessUnitId, timeOffLimitId, body)
  .then((data) => {
    console.log(`putWorkforcemanagementBusinessunitTimeofflimitValues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putWorkforcemanagementBusinessunitTimeofflimitValues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **businessUnitId** | **String** | The ID of the business unit |  |
 **timeOffLimitId** | **String** | The ID of the time-off limit object to set values for |  |
 **body** | **Object** | body |  |

### Return type

**BuTimeOffLimitResponse**


## putWorkforcemanagementManagementunitTimeofflimitValues

> TimeOffLimit putWorkforcemanagementManagementunitTimeofflimitValues(managementUnitId, timeOffLimitId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let timeOffLimitId = "timeOffLimitId_example"; // String | The ID of the time off limit object to set values for
let body = {}; // Object | body

apiInstance.putWorkforcemanagementManagementunitTimeofflimitValues(managementUnitId, timeOffLimitId, body)
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
 **body** | **Object** | body |  |

### Return type

**TimeOffLimit**


_purecloud-platform-client-v2@229.1.0_
