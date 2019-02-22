---
title: WorkforceManagementApi
---
# platformClient.WorkforceManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteWorkforcemanagementManagementunit**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunit) | **DELETE** /api/v2/workforcemanagement/managementunits/{muId} | Delete management unit
[**deleteWorkforcemanagementManagementunitActivitycode**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunitActivitycode) | **DELETE** /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId} | Deletes an activity code
[**deleteWorkforcemanagementManagementunitSchedulingRun**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunitSchedulingRun) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId} | Cancel a schedule run
[**deleteWorkforcemanagementManagementunitServicegoalgroup**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunitServicegoalgroup) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId} | Delete a service goal group
[**deleteWorkforcemanagementManagementunitWeekSchedule**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunitWeekSchedule) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId} | Delete a schedule
[**deleteWorkforcemanagementManagementunitWeekShorttermforecast**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunitWeekShorttermforecast) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId} | Delete a short term forecast
[**deleteWorkforcemanagementManagementunitWorkplan**](WorkforceManagementApi.html#deleteWorkforcemanagementManagementunitWorkplan) | **DELETE** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId} | Delete a work plan
[**getWorkforcemanagementAdherence**](WorkforceManagementApi.html#getWorkforcemanagementAdherence) | **GET** /api/v2/workforcemanagement/adherence | Get a list of UserScheduleAdherence records for the requested users
[**getWorkforcemanagementManagementunit**](WorkforceManagementApi.html#getWorkforcemanagementManagementunit) | **GET** /api/v2/workforcemanagement/managementunits/{muId} | Get management unit
[**getWorkforcemanagementManagementunitActivitycode**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitActivitycode) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId} | Get an activity code
[**getWorkforcemanagementManagementunitActivitycodes**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitActivitycodes) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/activitycodes | Get activity codes
[**getWorkforcemanagementManagementunitAgent**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitAgent) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId} | Get data for agent in the management unit
[**getWorkforcemanagementManagementunitIntradayQueues**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitIntradayQueues) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/intraday/queues | Get intraday queues for the given date
[**getWorkforcemanagementManagementunitSchedulingRun**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitSchedulingRun) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId} | Gets the status for a specific scheduling run
[**getWorkforcemanagementManagementunitSchedulingRunResult**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitSchedulingRunResult) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}/result | Gets the result of a specific scheduling run
[**getWorkforcemanagementManagementunitSchedulingRuns**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitSchedulingRuns) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs | Get the status of all the ongoing schedule runs
[**getWorkforcemanagementManagementunitServicegoalgroup**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitServicegoalgroup) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId} | Get a service goal group
[**getWorkforcemanagementManagementunitServicegoalgroups**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitServicegoalgroups) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups | Get service goal groups
[**getWorkforcemanagementManagementunitSettings**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitSettings) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/settings | Get the settings for the requested management unit
[**getWorkforcemanagementManagementunitUserTimeoffrequest**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitUserTimeoffrequest) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId} | Get a time off request
[**getWorkforcemanagementManagementunitUserTimeoffrequests**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitUserTimeoffrequests) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests | Get a list of time off requests for a given user
[**getWorkforcemanagementManagementunitUsers**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitUsers) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/users | Get users in the management unit
[**getWorkforcemanagementManagementunitWeekSchedule**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWeekSchedule) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId} | Get a week schedule
[**getWorkforcemanagementManagementunitWeekScheduleGenerationresults**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWeekScheduleGenerationresults) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults | Get week schedule generation results
[**getWorkforcemanagementManagementunitWeekSchedules**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWeekSchedules) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules | Get the list of schedules in a week in management unit
[**getWorkforcemanagementManagementunitWeekShorttermforecastFinal**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWeekShorttermforecastFinal) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/final | Get the final result of a short term forecast calculation with modifications applied
[**getWorkforcemanagementManagementunitWeekShorttermforecasts**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWeekShorttermforecasts) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts | Get short term forecasts
[**getWorkforcemanagementManagementunitWorkplan**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWorkplan) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId} | Get a work plan
[**getWorkforcemanagementManagementunitWorkplans**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitWorkplans) | **GET** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans | Get work plans
[**getWorkforcemanagementManagementunits**](WorkforceManagementApi.html#getWorkforcemanagementManagementunits) | **GET** /api/v2/workforcemanagement/managementunits | Get management units
[**getWorkforcemanagementManagementunitsDivisionviews**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitsDivisionviews) | **GET** /api/v2/workforcemanagement/managementunits/divisionviews | Get management units across divisions
[**getWorkforcemanagementTimeoffrequest**](WorkforceManagementApi.html#getWorkforcemanagementTimeoffrequest) | **GET** /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId} | Get a time off request for the current user
[**getWorkforcemanagementTimeoffrequests**](WorkforceManagementApi.html#getWorkforcemanagementTimeoffrequests) | **GET** /api/v2/workforcemanagement/timeoffrequests | Get a list of time off requests for the current user
[**patchWorkforcemanagementManagementunitActivitycode**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitActivitycode) | **PATCH** /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId} | Update an activity code
[**patchWorkforcemanagementManagementunitSchedulingRun**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitSchedulingRun) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId} | Marks a specific scheduling run as applied, allowing a new rescheduling run to be started
[**patchWorkforcemanagementManagementunitServicegoalgroup**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitServicegoalgroup) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId} | Update a service goal group
[**patchWorkforcemanagementManagementunitSettings**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitSettings) | **PATCH** /api/v2/workforcemanagement/managementunits/{muId}/settings | Patch the settings for the requested management unit
[**patchWorkforcemanagementManagementunitUserTimeoffrequest**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitUserTimeoffrequest) | **PATCH** /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId} | Update a time off request
[**patchWorkforcemanagementManagementunitWeekSchedule**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitWeekSchedule) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId} | Update a week schedule
[**patchWorkforcemanagementManagementunitWorkplan**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitWorkplan) | **PATCH** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId} | Update a work plan
[**patchWorkforcemanagementTimeoffrequest**](WorkforceManagementApi.html#patchWorkforcemanagementTimeoffrequest) | **PATCH** /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId} | Update a time off request for the current user
[**postWorkforcemanagementAdherenceHistorical**](WorkforceManagementApi.html#postWorkforcemanagementAdherenceHistorical) | **POST** /api/v2/workforcemanagement/adherence/historical | Request a historical adherence report for users across management units
[**postWorkforcemanagementManagementunitActivitycodes**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitActivitycodes) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/activitycodes | Create a new activity code
[**postWorkforcemanagementManagementunitHistoricaladherencequery**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitHistoricaladherencequery) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/historicaladherencequery | Request a historical adherence report
[**postWorkforcemanagementManagementunitIntraday**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitIntraday) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/intraday | Get intraday data for the given date for the requested queueIds
[**postWorkforcemanagementManagementunitSchedulesSearch**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitSchedulesSearch) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/schedules/search | Query published schedules for given given time range for set of users
[**postWorkforcemanagementManagementunitServicegoalgroups**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitServicegoalgroups) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups | Create a new service goal group
[**postWorkforcemanagementManagementunitTimeoffrequests**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitTimeoffrequests) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests | Create a new time off request
[**postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/fetchdetails | Gets a list of time off requests from lookup ids
[**postWorkforcemanagementManagementunitTimeoffrequestsQuery**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitTimeoffrequestsQuery) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/query | Gets the lookup ids to fetch the specified set of requests
[**postWorkforcemanagementManagementunitWeekScheduleCopy**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekScheduleCopy) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy | Copy a week schedule
[**postWorkforcemanagementManagementunitWeekScheduleReschedule**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekScheduleReschedule) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule | Start a scheduling run to compute the reschedule. When the scheduling run finishes, a client can get the reschedule changes and then the client can apply them to the schedule, save the schedule, and mark the scheduling run as applied
[**postWorkforcemanagementManagementunitWeekSchedules**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekSchedules) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules | Add a schedule for a week in management unit using imported data. Use partial uploads of user schedules if activity count in schedule is greater than 17500
[**postWorkforcemanagementManagementunitWeekSchedulesGenerate**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekSchedulesGenerate) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/generate | Generate a week schedule
[**postWorkforcemanagementManagementunitWeekSchedulesPartialupload**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekSchedulesPartialupload) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/partialupload | Partial upload of user schedules where activity count is greater than 17500
[**postWorkforcemanagementManagementunitWeekShorttermforecastCopy**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekShorttermforecastCopy) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy | Copy a short term forecast
[**postWorkforcemanagementManagementunitWeekShorttermforecasts**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekShorttermforecasts) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts | Import a short term forecast
[**postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/generate | Generate a short term forecast
[**postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/partialupload | Import a short term forecast
[**postWorkforcemanagementManagementunitWorkplanCopy**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWorkplanCopy) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy | Create a copy of work plan
[**postWorkforcemanagementManagementunitWorkplans**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitWorkplans) | **POST** /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans | Create a new work plan
[**postWorkforcemanagementManagementunits**](WorkforceManagementApi.html#postWorkforcemanagementManagementunits) | **POST** /api/v2/workforcemanagement/managementunits | Add a management unit
[**postWorkforcemanagementSchedules**](WorkforceManagementApi.html#postWorkforcemanagementSchedules) | **POST** /api/v2/workforcemanagement/schedules | Get published schedule for the current user
[**postWorkforcemanagementTimeoffrequests**](WorkforceManagementApi.html#postWorkforcemanagementTimeoffrequests) | **POST** /api/v2/workforcemanagement/timeoffrequests | Create a time off request for the current user
{: class="table table-striped"}

<a name="deleteWorkforcemanagementManagementunit"></a>

# void deleteWorkforcemanagementManagementunit(muId)



DELETE /api/v2/workforcemanagement/managementunits/{muId}

Delete management unit



Requires ANY permissions: 

* wfm:managementUnit:administer
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

let muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.deleteWorkforcemanagementManagementunit(muId)
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
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunitActivitycode"></a>

# void deleteWorkforcemanagementManagementunitActivitycode(muId, acId)



DELETE /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}

Deletes an activity code



Requires ANY permissions: 

* wfm:activityCode:administer
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

let muId = "muId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let acId = "acId_example"; // String | The ID of the activity code to delete

apiInstance.deleteWorkforcemanagementManagementunitActivitycode(muId, acId)
  .then(() => {
    console.log('deleteWorkforcemanagementManagementunitActivitycode returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementManagementunitActivitycode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **acId** | **String** | The ID of the activity code to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunitSchedulingRun"></a>

# void deleteWorkforcemanagementManagementunitSchedulingRun(managementUnitId, runId)



DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}

Cancel a schedule run



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

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let runId = "runId_example"; // String | The ID of the schedule run

apiInstance.deleteWorkforcemanagementManagementunitSchedulingRun(managementUnitId, runId)
  .then(() => {
    console.log('deleteWorkforcemanagementManagementunitSchedulingRun returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementManagementunitSchedulingRun');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **runId** | **String** | The ID of the schedule run |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunitServicegoalgroup"></a>

# void deleteWorkforcemanagementManagementunitServicegoalgroup(managementUnitId, serviceGoalGroupId)



DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}

Delete a service goal group



Requires ANY permissions: 

* wfm:serviceGoalGroup:administer
* wfm:serviceGoalGroup:delete



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
let serviceGoalGroupId = "serviceGoalGroupId_example"; // String | The ID of the service goal group to delete

apiInstance.deleteWorkforcemanagementManagementunitServicegoalgroup(managementUnitId, serviceGoalGroupId)
  .then(() => {
    console.log('deleteWorkforcemanagementManagementunitServicegoalgroup returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementManagementunitServicegoalgroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **serviceGoalGroupId** | **String** | The ID of the service goal group to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunitWeekSchedule"></a>

# void deleteWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId)



DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}

Delete a schedule



Requires ANY permissions: 

* wfm:schedule:administer
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

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let weekId = "weekId_example"; // String | First day of schedule week in yyyy-MM-dd format.
let scheduleId = "scheduleId_example"; // String | The ID of theschedule to delete

apiInstance.deleteWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId)
  .then(() => {
    console.log('deleteWorkforcemanagementManagementunitWeekSchedule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementManagementunitWeekSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **scheduleId** | **String** | The ID of theschedule to delete |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunitWeekShorttermforecast"></a>

# void deleteWorkforcemanagementManagementunitWeekShorttermforecast(managementUnitId, weekDateId, forecastId)



DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}

Delete a short term forecast

Must not be tied to any schedules

Requires ANY permissions: 

* wfm:shortTermForecast:administer
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

let managementUnitId = "managementUnitId_example"; // String | The management unit ID of the management unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format
let forecastId = "forecastId_example"; // String | The ID of the forecast

apiInstance.deleteWorkforcemanagementManagementunitWeekShorttermforecast(managementUnitId, weekDateId, forecastId)
  .then(() => {
    console.log('deleteWorkforcemanagementManagementunitWeekShorttermforecast returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWorkforcemanagementManagementunitWeekShorttermforecast');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The management unit ID of the management unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format |  |
 **forecastId** | **String** | The ID of the forecast |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteWorkforcemanagementManagementunitWorkplan"></a>

# void deleteWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId)



DELETE /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}

Delete a work plan



Requires ANY permissions: 

* wfm:workPlan:administer
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
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **workPlanId** | **String** | The ID of the work plan to delete |  |
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

<a name="getWorkforcemanagementManagementunit"></a>

# ManagementUnit getWorkforcemanagementManagementunit(muId, opts)



GET /api/v2/workforcemanagement/managementunits/{muId}

Get management unit



Requires ANY permissions: 

* wfm:activityCode:add
* wfm:activityCode:administer
* wfm:activityCode:delete
* wfm:activityCode:edit
* wfm:activityCode:view
* wfm:agent:administer
* wfm:agent:edit
* wfm:agentSchedule:view
* wfm:agentTimeOffRequest:submit
* wfm:agent:view
* wfm:historicalAdherence:view
* wfm:intraday:view
* wfm:managementUnit:add
* wfm:managementUnit:administer
* wfm:managementUnit:delete
* wfm:managementUnit:edit
* wfm:managementUnit:view
* wfm:publishedSchedule:view
* wfm:realtimeAdherence:view
* wfm:schedule:add
* wfm:schedule:administer
* wfm:schedule:delete
* wfm:schedule:edit
* wfm:schedule:generate
* wfm:schedule:view
* wfm:serviceGoalGroup:add
* wfm:serviceGoalGroup:administer
* wfm:serviceGoalGroup:delete
* wfm:serviceGoalGroup:edit
* wfm:serviceGoalGroup:view
* wfm:shortTermForecast:add
* wfm:shortTermForecast:administer
* wfm:shortTermForecast:delete
* wfm:shortTermForecast:edit
* wfm:shortTermForecast:view
* wfm:timeOffRequest:add
* wfm:timeOffRequest:administer
* wfm:timeOffRequest:edit
* wfm:timeOffRequest:view
* wfm:workPlan:add
* wfm:workPlan:administer
* wfm:workPlan:delete
* wfm:workPlan:edit
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

let muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'expand': "expand_example" // String | 
};

apiInstance.getWorkforcemanagementManagementunit(muId, opts)
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
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **expand** | **String** |  | [optional] <br />**Values**: settings |
{: class="table table-striped"}

### Return type

**ManagementUnit**

<a name="getWorkforcemanagementManagementunitActivitycode"></a>

# ActivityCode getWorkforcemanagementManagementunitActivitycode(muId, acId)



GET /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}

Get an activity code



Requires ANY permissions: 

* wfm:activityCode:administer
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

let muId = "muId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let acId = "acId_example"; // String | The ID of the activity code to fetch

apiInstance.getWorkforcemanagementManagementunitActivitycode(muId, acId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitActivitycode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitActivitycode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **acId** | **String** | The ID of the activity code to fetch |  |
{: class="table table-striped"}

### Return type

**ActivityCode**

<a name="getWorkforcemanagementManagementunitActivitycodes"></a>

# ActivityCodeContainer getWorkforcemanagementManagementunitActivitycodes(muId)



GET /api/v2/workforcemanagement/managementunits/{muId}/activitycodes

Get activity codes



Requires ANY permissions: 

* wfm:activityCode:add
* wfm:activityCode:administer
* wfm:activityCode:delete
* wfm:activityCode:edit
* wfm:activityCode:view
* wfm:agent:administer
* wfm:agent:edit
* wfm:agentSchedule:view
* wfm:agentTimeOffRequest:submit
* wfm:agent:view
* wfm:historicalAdherence:view
* wfm:intraday:view
* wfm:managementUnit:add
* wfm:managementUnit:administer
* wfm:managementUnit:delete
* wfm:managementUnit:edit
* wfm:managementUnit:view
* wfm:publishedSchedule:view
* wfm:realtimeAdherence:view
* wfm:schedule:add
* wfm:schedule:administer
* wfm:schedule:delete
* wfm:schedule:edit
* wfm:schedule:generate
* wfm:schedule:view
* wfm:serviceGoalGroup:add
* wfm:serviceGoalGroup:administer
* wfm:serviceGoalGroup:delete
* wfm:serviceGoalGroup:edit
* wfm:serviceGoalGroup:view
* wfm:shortTermForecast:add
* wfm:shortTermForecast:administer
* wfm:shortTermForecast:delete
* wfm:shortTermForecast:edit
* wfm:shortTermForecast:view
* wfm:timeOffRequest:add
* wfm:timeOffRequest:administer
* wfm:timeOffRequest:edit
* wfm:timeOffRequest:view
* wfm:workPlan:add
* wfm:workPlan:administer
* wfm:workPlan:delete
* wfm:workPlan:edit
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

let muId = "muId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.getWorkforcemanagementManagementunitActivitycodes(muId)
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
 **muId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**ActivityCodeContainer**

<a name="getWorkforcemanagementManagementunitAgent"></a>

# WfmAgent getWorkforcemanagementManagementunitAgent(managementUnitId, agentId)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/agents/{agentId}

Get data for agent in the management unit



Requires ANY permissions: 

* wfm:agent:administer
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

let managementUnitId = "managementUnitId_example"; // String | The id of the management unit, or 'mine' for the management unit of the logged-in user.
let agentId = "agentId_example"; // String | The agent id

apiInstance.getWorkforcemanagementManagementunitAgent(managementUnitId, agentId)
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
 **managementUnitId** | **String** | The id of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **agentId** | **String** | The agent id |  |
{: class="table table-striped"}

### Return type

**WfmAgent**

<a name="getWorkforcemanagementManagementunitIntradayQueues"></a>

# WfmIntradayQueueListing getWorkforcemanagementManagementunitIntradayQueues(muId, _date)



GET /api/v2/workforcemanagement/managementunits/{muId}/intraday/queues

Get intraday queues for the given date



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

let muId = "muId_example"; // String | The management unit ID of the management unit
let _date = "_date_example"; // String | yyyy-MM-dd date string interpreted in the configured management unit time zone

apiInstance.getWorkforcemanagementManagementunitIntradayQueues(muId, _date)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitIntradayQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitIntradayQueues');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The management unit ID of the management unit |  |
 **_date** | **String** | yyyy-MM-dd date string interpreted in the configured management unit time zone |  |
{: class="table table-striped"}

### Return type

**WfmIntradayQueueListing**

<a name="getWorkforcemanagementManagementunitSchedulingRun"></a>

# SchedulingRunResponse getWorkforcemanagementManagementunitSchedulingRun(managementUnitId, runId)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}

Gets the status for a specific scheduling run



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

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let runId = "runId_example"; // String | The ID of the schedule run

apiInstance.getWorkforcemanagementManagementunitSchedulingRun(managementUnitId, runId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitSchedulingRun success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitSchedulingRun');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **runId** | **String** | The ID of the schedule run |  |
{: class="table table-striped"}

### Return type

**SchedulingRunResponse**

<a name="getWorkforcemanagementManagementunitSchedulingRunResult"></a>

# RescheduleResult getWorkforcemanagementManagementunitSchedulingRunResult(managementUnitId, runId)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}/result

Gets the result of a specific scheduling run



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

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.
let runId = "runId_example"; // String | The ID of the schedule run

apiInstance.getWorkforcemanagementManagementunitSchedulingRunResult(managementUnitId, runId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitSchedulingRunResult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitSchedulingRunResult');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **runId** | **String** | The ID of the schedule run |  |
{: class="table table-striped"}

### Return type

**RescheduleResult**

<a name="getWorkforcemanagementManagementunitSchedulingRuns"></a>

# SchedulingRunListResponse getWorkforcemanagementManagementunitSchedulingRuns(managementUnitId)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs

Get the status of all the ongoing schedule runs



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

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit.

apiInstance.getWorkforcemanagementManagementunitSchedulingRuns(managementUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitSchedulingRuns success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitSchedulingRuns');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
{: class="table table-striped"}

### Return type

**SchedulingRunListResponse**

<a name="getWorkforcemanagementManagementunitServicegoalgroup"></a>

# ServiceGoalGroup getWorkforcemanagementManagementunitServicegoalgroup(managementUnitId, serviceGoalGroupId)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}

Get a service goal group



Requires ANY permissions: 

* wfm:serviceGoalGroup:administer
* wfm:serviceGoalGroup:view



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
let serviceGoalGroupId = "serviceGoalGroupId_example"; // String | The ID of the service goal group to fetch

apiInstance.getWorkforcemanagementManagementunitServicegoalgroup(managementUnitId, serviceGoalGroupId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitServicegoalgroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitServicegoalgroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **serviceGoalGroupId** | **String** | The ID of the service goal group to fetch |  |
{: class="table table-striped"}

### Return type

**ServiceGoalGroup**

<a name="getWorkforcemanagementManagementunitServicegoalgroups"></a>

# ServiceGoalGroupList getWorkforcemanagementManagementunitServicegoalgroups(managementUnitId)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups

Get service goal groups



Requires ANY permissions: 

* wfm:serviceGoalGroup:administer
* wfm:serviceGoalGroup:view
* wfm:shortTermForecast:administer
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

let managementUnitId = "managementUnitId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.getWorkforcemanagementManagementunitServicegoalgroups(managementUnitId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitServicegoalgroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitServicegoalgroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**ServiceGoalGroupList**

<a name="getWorkforcemanagementManagementunitSettings"></a>

# ManagementUnitSettings getWorkforcemanagementManagementunitSettings(muId)



GET /api/v2/workforcemanagement/managementunits/{muId}/settings

Get the settings for the requested management unit



Requires ANY permissions: 

* wfm:managementUnit:administer
* wfm:managementUnit:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.getWorkforcemanagementManagementunitSettings(muId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**ManagementUnitSettings**

<a name="getWorkforcemanagementManagementunitUserTimeoffrequest"></a>

# TimeOffRequestResponse getWorkforcemanagementManagementunitUserTimeoffrequest(muId, userId, timeOffRequestId)



GET /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}

Get a time off request



Requires ANY permissions: 

* wfm:timeOffRequest:administer
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

let muId = "muId_example"; // String | The muId of the management unit, or 'mine' for the management unit of the logged-in user.
let userId = "userId_example"; // String | The userId to whom the Time Off Request applies.
let timeOffRequestId = "timeOffRequestId_example"; // String | Time Off Request Id

apiInstance.getWorkforcemanagementManagementunitUserTimeoffrequest(muId, userId, timeOffRequestId)
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
 **muId** | **String** | The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **userId** | **String** | The userId to whom the Time Off Request applies. |  |
 **timeOffRequestId** | **String** | Time Off Request Id |  |
{: class="table table-striped"}

### Return type

**TimeOffRequestResponse**

<a name="getWorkforcemanagementManagementunitUserTimeoffrequests"></a>

# TimeOffRequestList getWorkforcemanagementManagementunitUserTimeoffrequests(muId, userId, opts)



GET /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests

Get a list of time off requests for a given user



Requires ANY permissions: 

* wfm:timeOffRequest:administer
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

let muId = "muId_example"; // String | The muId of the management unit, or 'mine' for the management unit of the logged-in user.
let userId = "userId_example"; // String | The userId to whom the Time Off Request applies.
let opts = { 
  'recentlyReviewed': false // Boolean | Limit results to requests that have been reviewed within the preceding 30 days
};

apiInstance.getWorkforcemanagementManagementunitUserTimeoffrequests(muId, userId, opts)
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
 **muId** | **String** | The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **userId** | **String** | The userId to whom the Time Off Request applies. |  |
 **recentlyReviewed** | **Boolean** | Limit results to requests that have been reviewed within the preceding 30 days | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**TimeOffRequestList**

<a name="getWorkforcemanagementManagementunitUsers"></a>

# WfmUserEntityListing getWorkforcemanagementManagementunitUsers(muId)



GET /api/v2/workforcemanagement/managementunits/{muId}/users

Get users in the management unit



Requires ANY permissions: 

* wfm:agent:administer
* wfm:agent:view
* wfm:historicalAdherence:view
* wfm:publishedSchedule:view
* wfm:realtimeAdherence:view
* wfm:schedule:administer
* wfm:schedule:view
* wfm:timeOffRequest:administer
* wfm:timeOffRequest:view
* wfm:workPlan:administer
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

let muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.getWorkforcemanagementManagementunitUsers(muId)
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
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**WfmUserEntityListing**

<a name="getWorkforcemanagementManagementunitWeekSchedule"></a>

# WeekScheduleResponse getWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId, opts)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}

Get a week schedule



Requires ANY permissions: 

* wfm:publishedSchedule:view
* wfm:schedule:administer
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
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **scheduleId** | **String** | The ID of the schedule to fetch |  |
 **expand** | **String** | Which fields, if any, to expand | [optional] <br />**Values**: generationResults, headcountForecast |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**WeekScheduleResponse**

<a name="getWorkforcemanagementManagementunitWeekScheduleGenerationresults"></a>

# WeekScheduleGenerationResult getWorkforcemanagementManagementunitWeekScheduleGenerationresults(managementUnitId, weekId, scheduleId)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/generationresults

Get week schedule generation results



Requires ANY permissions: 

* wfm:publishedSchedule:view
* wfm:schedule:administer
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
let scheduleId = "scheduleId_example"; // String | The ID of the schedule to fetch generation results

apiInstance.getWorkforcemanagementManagementunitWeekScheduleGenerationresults(managementUnitId, weekId, scheduleId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitWeekScheduleGenerationresults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitWeekScheduleGenerationresults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **scheduleId** | **String** | The ID of the schedule to fetch generation results |  |
{: class="table table-striped"}

### Return type

**WeekScheduleGenerationResult**

<a name="getWorkforcemanagementManagementunitWeekSchedules"></a>

# WeekScheduleListResponse getWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules

Get the list of schedules in a week in management unit



Requires ANY permissions: 

* wfm:publishedSchedule:view
* wfm:schedule:administer
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

apiInstance.getWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId)
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
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
{: class="table table-striped"}

### Return type

**WeekScheduleListResponse**

<a name="getWorkforcemanagementManagementunitWeekShorttermforecastFinal"></a>

# ForecastResultResponse getWorkforcemanagementManagementunitWeekShorttermforecastFinal(managementUnitId, weekDateId, forecastId, opts)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/final

Get the final result of a short term forecast calculation with modifications applied



Requires ANY permissions: 

* wfm:shortTermForecast:administer
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

let managementUnitId = "managementUnitId_example"; // String | The management unit ID of the management unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format
let forecastId = "forecastId_example"; // String | The ID of the forecast
let opts = { 
  'forceDownloadService': true // Boolean | Force the result of this operation to be sent via download service.  For testing/app development purposes
};

apiInstance.getWorkforcemanagementManagementunitWeekShorttermforecastFinal(managementUnitId, weekDateId, forecastId, opts)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitWeekShorttermforecastFinal success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitWeekShorttermforecastFinal');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The management unit ID of the management unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format |  |
 **forecastId** | **String** | The ID of the forecast |  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**ForecastResultResponse**

<a name="getWorkforcemanagementManagementunitWeekShorttermforecasts"></a>

# ShortTermForecastListResponse getWorkforcemanagementManagementunitWeekShorttermforecasts(managementUnitId, weekDateId)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts

Get short term forecasts

Use \&quot;recent\&quot; for the `weekDateId` path parameter to fetch all forecasts for +/- 26 weeks from the current date

Requires ANY permissions: 

* wfm:schedule:generate
* wfm:shortTermForecast:administer
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

let managementUnitId = "managementUnitId_example"; // String | The management unit ID of the management unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format

apiInstance.getWorkforcemanagementManagementunitWeekShorttermforecasts(managementUnitId, weekDateId)
  .then((data) => {
    console.log(`getWorkforcemanagementManagementunitWeekShorttermforecasts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWorkforcemanagementManagementunitWeekShorttermforecasts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The management unit ID of the management unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format |  |
{: class="table table-striped"}

### Return type

**ShortTermForecastListResponse**

<a name="getWorkforcemanagementManagementunitWorkplan"></a>

# WorkPlan getWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}

Get a work plan



Requires ANY permissions: 

* wfm:workPlan:administer
* wfm:workPlan:view
* wfm:schedule:administer
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

apiInstance.getWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId)
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
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **workPlanId** | **String** | The ID of the work plan to fetch |  |
{: class="table table-striped"}

### Return type

**WorkPlan**

<a name="getWorkforcemanagementManagementunitWorkplans"></a>

# WorkPlanListResponse getWorkforcemanagementManagementunitWorkplans(managementUnitId, opts)



GET /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans

Get work plans



Requires ANY permissions: 

* wfm:workPlan:administer
* wfm:agent:administer
* wfm:agent:view
* wfm:publishedSchedule:view
* wfm:schedule:administer
* wfm:schedule:view
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
  'expand': ["expand_example"] // [String] | 
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
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **expand** | **[String]** |  | [optional] <br />**Values**: agentCount, details |
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
  'pageSize': 56, // Number | 
  'pageNumber': 56, // Number | 
  'expand': "expand_example", // String | 
  'feature': "feature_example", // String | 
  'divisionId': "divisionId_example" // String | 
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
 **pageSize** | **Number** |  | [optional]  |
 **pageNumber** | **Number** |  | [optional]  |
 **expand** | **String** |  | [optional] <br />**Values**: details |
 **feature** | **String** |  | [optional] <br />**Values**: AgentSchedule, AgentTimeOffRequest, ActivityCodes, Agents, HistoricalAdherence, IntradayMonitoring, ManagementUnits, RealTimeAdherence, Schedules, ServiceGoalGroups, ShortTermForecasts, TimeOffRequests, WorkPlans |
 **divisionId** | **String** |  | [optional]  |
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

let timeOffRequestId = "timeOffRequestId_example"; // String | Time Off Request Id

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
 **timeOffRequestId** | **String** | Time Off Request Id |  |
{: class="table table-striped"}

### Return type

**TimeOffRequestResponse**

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

<a name="patchWorkforcemanagementManagementunitActivitycode"></a>

# ActivityCode patchWorkforcemanagementManagementunitActivitycode(muId, acId, opts)



PATCH /api/v2/workforcemanagement/managementunits/{muId}/activitycodes/{acId}

Update an activity code



Requires ANY permissions: 

* wfm:activityCode:administer
* wfm:activityCode:edit


### Request Body Schema

<script type="text/javascript">
	function copyUpdateActivityCodeRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UpdateActivityCodeRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UpdateActivityCodeRequest <a href="#" onclick="return copyUpdateActivityCodeRequestExample()">Copy</a>

<div id="UpdateActivityCodeRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "category": String, 
  "lengthInMinutes": Number, 
  "countsAsPaidTime": Boolean, 
  "countsAsWorkTime": Boolean, 
  "agentTimeOffSelectable": Boolean, 
  "metadata": { 
    "version": Number, 
    "modifiedBy": { 
      "id": String, 
      "selfUri": String, 
    },  
    "dateModified": Date, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let acId = "acId_example"; // String | The ID of the activity code to update
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitActivitycode(muId, acId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitActivitycode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitActivitycode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **acId** | **String** | The ID of the activity code to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**ActivityCode**

<a name="patchWorkforcemanagementManagementunitSchedulingRun"></a>

# RescheduleResult patchWorkforcemanagementManagementunitSchedulingRun(managementUnitId, runId, opts)



PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/scheduling/runs/{runId}

Marks a specific scheduling run as applied, allowing a new rescheduling run to be started



Requires ANY permissions: 

* wfm:schedule:generate


### Request Body Schema

<script type="text/javascript">
	function copyUpdateSchedulingRunRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UpdateSchedulingRunRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UpdateSchedulingRunRequest <a href="#" onclick="return copyUpdateSchedulingRunRequestExample()">Copy</a>

<div id="UpdateSchedulingRunRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "applied": Boolean, 
}
```

</div>


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
let runId = "runId_example"; // String | The ID of the schedule run
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitSchedulingRun(managementUnitId, runId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitSchedulingRun success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitSchedulingRun');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit. |  |
 **runId** | **String** | The ID of the schedule run |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**RescheduleResult**

<a name="patchWorkforcemanagementManagementunitServicegoalgroup"></a>

# ServiceGoalGroup patchWorkforcemanagementManagementunitServicegoalgroup(managementUnitId, serviceGoalGroupId, opts)



PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups/{serviceGoalGroupId}

Update a service goal group



Requires ANY permissions: 

* wfm:serviceGoalGroup:administer
* wfm:serviceGoalGroup:edit


### Request Body Schema

<script type="text/javascript">
	function copyServiceGoalGroupExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ServiceGoalGroupExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ServiceGoalGroup <a href="#" onclick="return copyServiceGoalGroupExample()">Copy</a>

<div id="ServiceGoalGroupExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "goals": { 
    "serviceLevel": { 
      "include": Boolean, 
      "percent": Number, 
      "seconds": Number, 
    },  
    "averageSpeedOfAnswer": { 
      "include": Boolean, 
      "seconds": Number, 
    },  
    "abandonRate": { 
      "include": Boolean, 
      "percent": Number, 
    },  
  },  
  "queueMediaAssociations": { 
    "queue": { 
      "id": String, 
      "selfUri": String, 
    },  
    "mediaTypes": [String], 
    "id": String, 
    "delete": Boolean, 
  },  
  "metadata": { 
    "version": Number, 
    "modifiedBy": { 
      "id": String, 
      "selfUri": String, 
    },  
    "dateModified": Date, 
  },  
  "selfUri": String, 
}
```

</div>


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
let serviceGoalGroupId = "serviceGoalGroupId_example"; // String | The ID of the service goal group to update
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitServicegoalgroup(managementUnitId, serviceGoalGroupId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitServicegoalgroup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitServicegoalgroup');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **serviceGoalGroupId** | **String** | The ID of the service goal group to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**ServiceGoalGroup**

<a name="patchWorkforcemanagementManagementunitSettings"></a>

# ManagementUnitSettings patchWorkforcemanagementManagementunitSettings(muId, opts)



PATCH /api/v2/workforcemanagement/managementunits/{muId}/settings

Patch the settings for the requested management unit



Requires ANY permissions: 

* wfm:managementUnit:administer
* wfm:managementUnit:edit


### Request Body Schema

<script type="text/javascript">
	function copyManagementUnitSettingsExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ManagementUnitSettingsExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ManagementUnitSettings <a href="#" onclick="return copyManagementUnitSettingsExample()">Copy</a>

<div id="ManagementUnitSettingsExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "adherence": { 
    "severeAlertThresholdMinutes": Number, 
    "adherenceTargetPercent": Number, 
    "adherenceExceptionThresholdSeconds": Number, 
    "nonOnQueueActivitiesEquivalent": Boolean, 
    "trackOnQueueActivity": Boolean, 
    "ignoredActivityCategories": { 
      "values": [String], 
    },  
  },  
  "shortTermForecasting": { 
    "defaultHistoryWeeks": Number, 
  },  
  "timeOff": { 
    "submissionRangeEnforced": Boolean, 
    "submissionEarliestDaysFromNow": Number, 
    "submissionLatestDaysFromNow": Number, 
  },  
  "scheduling": { 
    "maxOccupancyPercentForDeferredWork": Number, 
    "defaultShrinkagePercent": Number, 
    "shrinkageOverrides": { 
      "clear": Boolean, 
      "values": { 
        "intervalIndex": Number, 
        "shrinkagePercent": Number, 
      },  
    },  
  },  
  "metadata": { 
    "version": Number, 
    "modifiedBy": { 
      "id": String, 
      "selfUri": String, 
    },  
    "dateModified": Date, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | config
};

apiInstance.patchWorkforcemanagementManagementunitSettings(muId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **body** | **Object** | config | [optional]  |
{: class="table table-striped"}

### Return type

**ManagementUnitSettings**

<a name="patchWorkforcemanagementManagementunitUserTimeoffrequest"></a>

# TimeOffRequestResponse patchWorkforcemanagementManagementunitUserTimeoffrequest(muId, userId, timeOffRequestId, opts)



PATCH /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}

Update a time off request



Requires ANY permissions: 

* wfm:timeOffRequest:administer
* wfm:timeOffRequest:edit


### Request Body Schema

<script type="text/javascript">
	function copyAdminTimeOffRequestPatchExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#AdminTimeOffRequestPatchExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

AdminTimeOffRequestPatch <a href="#" onclick="return copyAdminTimeOffRequestPatchExample()">Copy</a>

<div id="AdminTimeOffRequestPatchExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "status": String, 
  "activityCodeId": String, 
  "notes": String, 
  "fullDayManagementUnitDates": [String], 
  "partialDayStartDateTimes": [Date], 
  "dailyDurationMinutes": Number, 
  "metadata": { 
    "version": Number, 
    "modifiedBy": { 
      "id": String, 
      "selfUri": String, 
    },  
    "dateModified": Date, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The muId of the management unit, or 'mine' for the management unit of the logged-in user.
let userId = "userId_example"; // String | The id of the user the requested time off request belongs to
let timeOffRequestId = "timeOffRequestId_example"; // String | The id of the time off request to update
let opts = { 
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitUserTimeoffrequest(muId, userId, timeOffRequestId, opts)
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
 **muId** | **String** | The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **userId** | **String** | The id of the user the requested time off request belongs to |  |
 **timeOffRequestId** | **String** | The id of the time off request to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffRequestResponse**

<a name="patchWorkforcemanagementManagementunitWeekSchedule"></a>

# AsyncWeekScheduleResponse patchWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId, opts)



PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}

Update a week schedule



Requires ANY permissions: 

* wfm:schedule:administer
* wfm:schedule:edit


### Request Body Schema

<script type="text/javascript">
	function copyUpdateWeekScheduleRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UpdateWeekScheduleRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UpdateWeekScheduleRequest <a href="#" onclick="return copyUpdateWeekScheduleRequestExample()">Copy</a>

<div id="UpdateWeekScheduleRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "description": String, 
  "published": Boolean, 
  "userSchedules": { 
    "shifts": { 
      "id": String, 
      "startDate": Date, 
      "lengthInMinutes": Number, 
      "activities": { 
        "activityCodeId": String, 
        "startDate": Date, 
        "lengthInMinutes": Number, 
        "description": String, 
        "countsAsPaidTime": Boolean, 
        "isDstFallback": Boolean, 
        "timeOffRequestId": String, 
      },  
      "delete": Boolean, 
      "manuallyEdited": Boolean, 
    },  
    "fullDayTimeOffMarkers": { 
      "managementUnitDate": String, 
      "activityCodeId": String, 
      "isPaid": Boolean, 
      "lengthInMinutes": Number, 
      "description": String, 
      "delete": Boolean, 
    },  
    "delete": Boolean, 
    "metadata": { 
      "version": Number, 
      "modifiedBy": { 
        "id": String, 
        "selfUri": String, 
      },  
      "dateModified": Date, 
    },  
    "workPlanId": String, 
  },  
  "partialUploadIds": [String], 
  "metadata": { 
    "version": Number, 
    "modifiedBy": { 
      "id": String, 
      "selfUri": String, 
    },  
    "dateModified": Date, 
  },  
  "agentSchedulesVersion": Number, 
  "shortTermForecast": { 
    "id": String, 
    "weekDate": String, 
    "description": String, 
    "selfUri": String, 
  },  
  "headcountForecast": { 
    "required": { 
      "interval": Date, 
      "value": Number, 
    },  
    "requiredWithoutShrinkage": { 
      "interval": Date, 
      "value": Number, 
    },  
  },  
  "agentUpdateFilter": String, 
}
```

</div>


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
let scheduleId = "scheduleId_example"; // String | The ID of the schedule to update. Use partial uploads of user schedules if activity count in schedule is greater than 17500
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
  'forceDownloadService': true, // Boolean | Force the result of this operation to be sent via download service.  For testing/app development purposes
  'body': {} // Object | body
};

apiInstance.patchWorkforcemanagementManagementunitWeekSchedule(managementUnitId, weekId, scheduleId, opts)
  .then((data) => {
    console.log(`patchWorkforcemanagementManagementunitWeekSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWorkforcemanagementManagementunitWeekSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **scheduleId** | **String** | The ID of the schedule to update. Use partial uploads of user schedules if activity count in schedule is greater than 17500 |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service.  For testing/app development purposes | [optional]  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**AsyncWeekScheduleResponse**

<a name="patchWorkforcemanagementManagementunitWorkplan"></a>

# WorkPlan patchWorkforcemanagementManagementunitWorkplan(managementUnitId, workPlanId, opts)



PATCH /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}

Update a work plan



Requires ANY permissions: 

* wfm:workPlan:administer
* wfm:workPlan:edit


### Request Body Schema

<script type="text/javascript">
	function copyWorkPlanExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#WorkPlanExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

WorkPlan <a href="#" onclick="return copyWorkPlanExample()">Copy</a>

<div id="WorkPlanExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "id": String, 
  "name": String, 
  "enabled": Boolean, 
  "constrainWeeklyPaidTime": Boolean, 
  "flexibleWeeklyPaidTime": Boolean, 
  "weeklyExactPaidMinutes": Number, 
  "weeklyMinimumPaidMinutes": Number, 
  "weeklyMaximumPaidMinutes": Number, 
  "constrainPaidTimeGranularity": Boolean, 
  "paidTimeGranularityMinutes": Number, 
  "constrainMinimumTimeBetweenShifts": Boolean, 
  "minimumTimeBetweenShiftsMinutes": Number, 
  "maximumDays": Number, 
  "optionalDays": { 
    "values": [String], 
  },  
  "shiftStartVariances": { 
    "values": { 
      "applicableDays": [String], 
      "maxShiftStartVarianceMinutes": Number, 
    },  
  },  
  "shifts": { 
    "name": String, 
    "days": { 
      "values": [String], 
    },  
    "flexibleStartTime": Boolean, 
    "exactStartTimeMinutesFromMidnight": Number, 
    "earliestStartTimeMinutesFromMidnight": Number, 
    "latestStartTimeMinutesFromMidnight": Number, 
    "constrainStopTime": Boolean, 
    "latestStopTimeMinutesFromMidnight": Number, 
    "startIncrementMinutes": Number, 
    "flexiblePaidTime": Boolean, 
    "exactPaidTimeMinutes": Number, 
    "minimumPaidTimeMinutes": Number, 
    "maximumPaidTimeMinutes": Number, 
    "constrainContiguousWorkTime": Boolean, 
    "minimumContiguousWorkTimeMinutes": Number, 
    "maximumContiguousWorkTimeMinutes": Number, 
    "activities": { 
      "activityCodeId": String, 
      "description": String, 
      "lengthMinutes": Number, 
      "startTimeIsRelativeToShiftStart": Boolean, 
      "flexibleStartTime": Boolean, 
      "earliestStartTimeMinutes": Number, 
      "latestStartTimeMinutes": Number, 
      "exactStartTimeMinutes": Number, 
      "startTimeIncrementMinutes": Number, 
      "countsAsPaidTime": Boolean, 
      "countsAsContiguousWorkTime": Boolean, 
      "id": String, 
      "delete": Boolean, 
    },  
    "id": String, 
    "delete": Boolean, 
  },  
  "agents": { 
    "id": String, 
    "delete": Boolean, 
    "selfUri": String, 
  },  
  "metadata": { 
    "version": Number, 
    "modifiedBy": { 
      "id": String, 
      "selfUri": String, 
    },  
    "dateModified": Date, 
  },  
  "selfUri": String, 
}
```

</div>


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
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **workPlanId** | **String** | The ID of the work plan to update |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkPlan**

<a name="patchWorkforcemanagementTimeoffrequest"></a>

# TimeOffRequestResponse patchWorkforcemanagementTimeoffrequest(timeOffRequestId, opts)



PATCH /api/v2/workforcemanagement/timeoffrequests/{timeOffRequestId}

Update a time off request for the current user



Requires ANY permissions: 

* wfm:agentTimeOffRequest:submit


### Request Body Schema

<script type="text/javascript">
	function copyAgentTimeOffRequestPatchExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#AgentTimeOffRequestPatchExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

AgentTimeOffRequestPatch <a href="#" onclick="return copyAgentTimeOffRequestPatchExample()">Copy</a>

<div id="AgentTimeOffRequestPatchExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "markedAsRead": Boolean, 
  "status": String, 
  "notes": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let timeOffRequestId = "timeOffRequestId_example"; // String | Time Off Request Id
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
 **timeOffRequestId** | **String** | Time Off Request Id |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffRequestResponse**

<a name="postWorkforcemanagementAdherenceHistorical"></a>

# WfmHistoricalAdherenceResponse postWorkforcemanagementAdherenceHistorical(opts)



POST /api/v2/workforcemanagement/adherence/historical

Request a historical adherence report for users across management units



Requires ANY permissions: 

* wfm:historicalAdherence:view


### Request Body Schema

<script type="text/javascript">
	function copyWfmHistoricalAdherenceQueryForUsersExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#WfmHistoricalAdherenceQueryForUsersExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

WfmHistoricalAdherenceQueryForUsers <a href="#" onclick="return copyWfmHistoricalAdherenceQueryForUsersExample()">Copy</a>

<div id="WfmHistoricalAdherenceQueryForUsersExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "startDate": Date, 
  "endDate": Date, 
  "timeZone": String, 
  "userIds": [String], 
  "includeExceptions": Boolean, 
}
```

</div>


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

<a name="postWorkforcemanagementManagementunitActivitycodes"></a>

# ActivityCode postWorkforcemanagementManagementunitActivitycodes(muId, opts)



POST /api/v2/workforcemanagement/managementunits/{muId}/activitycodes

Create a new activity code



Requires ANY permissions: 

* wfm:activityCode:add
* wfm:activityCode:administer


### Request Body Schema

<script type="text/javascript">
	function copyCreateActivityCodeRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CreateActivityCodeRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CreateActivityCodeRequest <a href="#" onclick="return copyCreateActivityCodeRequestExample()">Copy</a>

<div id="CreateActivityCodeRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "category": String, 
  "lengthInMinutes": Number, 
  "countsAsPaidTime": Boolean, 
  "countsAsWorkTime": Boolean, 
  "agentTimeOffSelectable": Boolean, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitActivitycodes(muId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitActivitycodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitActivitycodes');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**ActivityCode**

<a name="postWorkforcemanagementManagementunitHistoricaladherencequery"></a>

# WfmHistoricalAdherenceResponse postWorkforcemanagementManagementunitHistoricaladherencequery(muId, opts)



POST /api/v2/workforcemanagement/managementunits/{muId}/historicaladherencequery

Request a historical adherence report

The maximum supported range for historical adherence queries is 31 days, or 7 days with includeExceptions = true

Requires ANY permissions: 

* wfm:historicalAdherence:view


### Request Body Schema

<script type="text/javascript">
	function copyWfmHistoricalAdherenceQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#WfmHistoricalAdherenceQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

WfmHistoricalAdherenceQuery <a href="#" onclick="return copyWfmHistoricalAdherenceQueryExample()">Copy</a>

<div id="WfmHistoricalAdherenceQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "startDate": Date, 
  "endDate": Date, 
  "timeZone": String, 
  "userIds": [String], 
  "includeExceptions": Boolean, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The management unit ID of the management unit
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitHistoricaladherencequery(muId, opts)
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
 **muId** | **String** | The management unit ID of the management unit |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WfmHistoricalAdherenceResponse**

<a name="postWorkforcemanagementManagementunitIntraday"></a>

# IntradayResponse postWorkforcemanagementManagementunitIntraday(muId, opts)



POST /api/v2/workforcemanagement/managementunits/{muId}/intraday

Get intraday data for the given date for the requested queueIds



Requires ANY permissions: 

* wfm:intraday:view


### Request Body Schema

<script type="text/javascript">
	function copyIntradayQueryDataCommandExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#IntradayQueryDataCommandExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

IntradayQueryDataCommand <a href="#" onclick="return copyIntradayQueryDataCommandExample()">Copy</a>

<div id="IntradayQueryDataCommandExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "startDate": Date, 
  "endDate": Date, 
  "metrics": { 
    "category": String, 
    "version": String, 
  },  
  "queueIds": [String], 
  "intervalLengthMinutes": Number, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The management unit ID of the management unit
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitIntraday(muId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitIntraday success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitIntraday');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The management unit ID of the management unit |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**IntradayResponse**

<a name="postWorkforcemanagementManagementunitSchedulesSearch"></a>

# UserScheduleContainer postWorkforcemanagementManagementunitSchedulesSearch(muId, opts)



POST /api/v2/workforcemanagement/managementunits/{muId}/schedules/search

Query published schedules for given given time range for set of users



Requires ANY permissions: 

* wfm:publishedSchedule:view
* wfm:schedule:administer
* wfm:schedule:view


### Request Body Schema

<script type="text/javascript">
	function copyUserListScheduleRequestBodyExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserListScheduleRequestBodyExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserListScheduleRequestBody <a href="#" onclick="return copyUserListScheduleRequestBodyExample()">Copy</a>

<div id="UserListScheduleRequestBodyExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "userIds": [String], 
  "startDate": Date, 
  "endDate": Date, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitSchedulesSearch(muId, opts)
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
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**UserScheduleContainer**

<a name="postWorkforcemanagementManagementunitServicegoalgroups"></a>

# ServiceGoalGroup postWorkforcemanagementManagementunitServicegoalgroups(managementUnitId, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/servicegoalgroups

Create a new service goal group



Requires ANY permissions: 

* wfm:serviceGoalGroup:add
* wfm:serviceGoalGroup:administer


### Request Body Schema

<script type="text/javascript">
	function copyCreateServiceGoalGroupRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CreateServiceGoalGroupRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CreateServiceGoalGroupRequest <a href="#" onclick="return copyCreateServiceGoalGroupRequestExample()">Copy</a>

<div id="CreateServiceGoalGroupRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "goals": { 
    "serviceLevel": { 
      "include": Boolean, 
      "percent": Number, 
      "seconds": Number, 
    },  
    "averageSpeedOfAnswer": { 
      "include": Boolean, 
      "seconds": Number, 
    },  
    "abandonRate": { 
      "include": Boolean, 
      "percent": Number, 
    },  
  },  
  "queueMediaAssociations": { 
    "queue": { 
      "id": String, 
      "selfUri": String, 
    },  
    "mediaTypes": [String], 
  },  
}
```

</div>


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

apiInstance.postWorkforcemanagementManagementunitServicegoalgroups(managementUnitId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitServicegoalgroups success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitServicegoalgroups');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**ServiceGoalGroup**

<a name="postWorkforcemanagementManagementunitTimeoffrequests"></a>

# TimeOffRequestList postWorkforcemanagementManagementunitTimeoffrequests(muId, opts)



POST /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests

Create a new time off request



Requires ANY permissions: 

* wfm:timeOffRequest:administer
* wfm:timeOffRequest:add


### Request Body Schema

<script type="text/javascript">
	function copyCreateAdminTimeOffRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CreateAdminTimeOffRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CreateAdminTimeOffRequest <a href="#" onclick="return copyCreateAdminTimeOffRequestExample()">Copy</a>

<div id="CreateAdminTimeOffRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "status": String, 
  "users": { 
    "id": String, 
    "selfUri": String, 
  },  
  "activityCodeId": String, 
  "notes": String, 
  "fullDayManagementUnitDates": [String], 
  "partialDayStartDateTimes": [Date], 
  "dailyDurationMinutes": Number, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The muId of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitTimeoffrequests(muId, opts)
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
 **muId** | **String** | The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffRequestList**

<a name="postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails"></a>

# TimeOffRequestEntityList postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails(muId, opts)



POST /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/fetchdetails

Gets a list of time off requests from lookup ids



Requires ANY permissions: 

* wfm:timeOffRequest:administer
* wfm:timeOffRequest:view


### Request Body Schema

<script type="text/javascript">
	function copyTimeOffRequestLookupListExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#TimeOffRequestLookupListExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

TimeOffRequestLookupList <a href="#" onclick="return copyTimeOffRequestLookupListExample()">Copy</a>

<div id="TimeOffRequestLookupListExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "entities": { 
    "id": String, 
    "user": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "chat": { 
        "jabberId": String, 
      },  
      "department": String, 
      "email": String, 
      "primaryContactInfo": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": User, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "certifications": [String], 
      "biography": { 
        "biography": String, 
        "interests": [String], 
        "hobbies": [String], 
        "spouse": String, 
      },  
      "employerInfo": { 
        "officialName": String, 
        "employeeId": String, 
        "employeeType": String, 
        "dateHire": String, 
      },  
      "routingStatus": { 
        "userId": String, 
        "status": String, 
        "startTime": Date, 
      },  
      "presence": { 
        "id": String, 
        "name": String, 
        "source": String, 
        "primary": Boolean, 
        "presenceDefinition": { 
          "id": String, 
          "systemPresence": String, 
          "selfUri": String, 
        },  
        "message": String, 
        "modifiedDate": Date, 
        "selfUri": String, 
      },  
      "conversationSummary": { 
        "userId": String, 
        "call": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "callback": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "email": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "message": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "chat": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "socialExpression": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "video": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
      },  
      "outOfOffice": { 
        "id": String, 
        "name": String, 
        "user": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "certifications": [String], 
              "biography": { 
                "biography": String, 
                "interests": [String], 
                "hobbies": [String], 
                "spouse": String, 
              },  
              "employerInfo": { 
                "officialName": String, 
                "employeeId": String, 
                "employeeType": String, 
                "dateHire": String, 
              },  
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "skills": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "skillUri": String, 
                "selfUri": String, 
              },  
              "languages": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "languageUri": String, 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "languagePreference": String, 
              "selfUri": String, 
            },  
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "certifications": [String], 
              "biography": { 
                "biography": String, 
                "interests": [String], 
                "hobbies": [String], 
                "spouse": String, 
              },  
              "employerInfo": { 
                "officialName": String, 
                "employeeId": String, 
                "employeeType": String, 
                "dateHire": String, 
              },  
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "skills": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "skillUri": String, 
                "selfUri": String, 
              },  
              "languages": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "languageUri": String, 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "languagePreference": String, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "selfUri": String, 
        },  
        "startDate": Date, 
        "endDate": Date, 
        "active": Boolean, 
        "indefinite": Boolean, 
        "selfUri": String, 
      },  
      "geolocation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "primary": Boolean, 
        "latitude": Number, 
        "longitude": Number, 
        "country": String, 
        "region": String, 
        "city": String, 
        "locations": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "station": { 
        "associatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "effectiveStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "defaultStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "lastAssociatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
      },  
      "authorization": { 
        "roles": { 
          "id": String, 
          "name": String, 
        },  
        "permissions": [String], 
        "permissionPolicies": { 
          "id": String, 
          "domain": String, 
          "entityName": String, 
          "policyName": String, 
          "policyDescription": String, 
          "actionSetKey": String, 
          "allowConditions": Boolean, 
          "resourceConditionNode": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
          "namedResources": [String], 
          "resourceCondition": String, 
          "actionSet": [String], 
        },  
      },  
      "profileSkills": [String], 
      "locations": { 
        "id": String, 
        "floorplanId": String, 
        "coordinates": {String: Number}, 
        "notes": String, 
        "locationDefinition": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
      },  
      "groups": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "state": String, 
        "version": Number, 
        "type": String, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "certifications": [String], 
          "biography": { 
            "biography": String, 
            "interests": [String], 
            "hobbies": [String], 
            "spouse": String, 
          },  
          "employerInfo": { 
            "officialName": String, 
            "employeeId": String, 
            "employeeType": String, 
            "dateHire": String, 
          },  
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "certifications": [String], 
              "biography": { 
                "biography": String, 
                "interests": [String], 
                "hobbies": [String], 
                "spouse": String, 
              },  
              "employerInfo": { 
                "officialName": String, 
                "employeeId": String, 
                "employeeType": String, 
                "dateHire": String, 
              },  
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "skills": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "skillUri": String, 
                "selfUri": String, 
              },  
              "languages": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "languageUri": String, 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "languagePreference": String, 
              "selfUri": String, 
            },  
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "certifications": [String], 
              "biography": { 
                "biography": String, 
                "interests": [String], 
                "hobbies": [String], 
                "spouse": String, 
              },  
              "employerInfo": { 
                "officialName": String, 
                "employeeId": String, 
                "employeeType": String, 
                "dateHire": String, 
              },  
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "skills": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "skillUri": String, 
                "selfUri": String, 
              },  
              "languages": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "languageUri": String, 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "languagePreference": String, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "languagePreference": String, 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "languagePreference": String, 
      "selfUri": String, 
    },  
    "selfUri": String, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The muId of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails(muId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitTimeoffrequestsFetchdetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffRequestEntityList**

<a name="postWorkforcemanagementManagementunitTimeoffrequestsQuery"></a>

# TimeOffRequestLookupList postWorkforcemanagementManagementunitTimeoffrequestsQuery(muId, opts)



POST /api/v2/workforcemanagement/managementunits/{muId}/timeoffrequests/query

Gets the lookup ids to fetch the specified set of requests



Requires ANY permissions: 

* wfm:timeOffRequest:administer
* wfm:timeOffRequest:view


### Request Body Schema

<script type="text/javascript">
	function copyTimeOffRequestQueryBodyExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#TimeOffRequestQueryBodyExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

TimeOffRequestQueryBody <a href="#" onclick="return copyTimeOffRequestQueryBodyExample()">Copy</a>

<div id="TimeOffRequestQueryBodyExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "userIds": [String], 
  "statuses": [String], 
  "dateRange": { 
    "startDate": String, 
    "endDate": String, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let muId = "muId_example"; // String | The muId of the management unit, or 'mine' for the management unit of the logged-in user.
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitTimeoffrequestsQuery(muId, opts)
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
 **muId** | **String** | The muId of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**TimeOffRequestLookupList**

<a name="postWorkforcemanagementManagementunitWeekScheduleCopy"></a>

# AsyncWeekScheduleResponse postWorkforcemanagementManagementunitWeekScheduleCopy(managementUnitId, weekId, scheduleId, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/copy

Copy a week schedule



Requires ANY permissions: 

* wfm:schedule:add
* wfm:schedule:administer


### Request Body Schema

<script type="text/javascript">
	function copyCopyWeekScheduleRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CopyWeekScheduleRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CopyWeekScheduleRequest <a href="#" onclick="return copyCopyWeekScheduleRequestExample()">Copy</a>

<div id="CopyWeekScheduleRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "description": String, 
  "weekDate": String, 
}
```

</div>


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
let scheduleId = "scheduleId_example"; // String | The ID of the schedule to copy from
let opts = { 
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
  'forceDownloadService': true, // Boolean | Force the result of this operation to be sent via download service.  For testing/app development purposes
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitWeekScheduleCopy(managementUnitId, weekId, scheduleId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekScheduleCopy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekScheduleCopy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **scheduleId** | **String** | The ID of the schedule to copy from |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service.  For testing/app development purposes | [optional]  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**AsyncWeekScheduleResponse**

<a name="postWorkforcemanagementManagementunitWeekScheduleReschedule"></a>

# AsyncWeekScheduleResponse postWorkforcemanagementManagementunitWeekScheduleReschedule(managementUnitId, weekId, scheduleId, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/{scheduleId}/reschedule

Start a scheduling run to compute the reschedule. When the scheduling run finishes, a client can get the reschedule changes and then the client can apply them to the schedule, save the schedule, and mark the scheduling run as applied



Requires ANY permissions: 

* wfm:schedule:administer
* wfm:schedule:edit


### Request Body Schema

<script type="text/javascript">
	function copyRescheduleRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#RescheduleRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

RescheduleRequest <a href="#" onclick="return copyRescheduleRequestExample()">Copy</a>

<div id="RescheduleRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "startDate": Date, 
  "endDate": Date, 
  "agentIds": [String], 
  "activityCodeIds": [String], 
  "doNotChangeWeeklyPaidTime": Boolean, 
  "doNotChangeDailyPaidTime": Boolean, 
  "doNotChangeShiftStartTimes": Boolean, 
  "doNotChangeManuallyEditedShifts": Boolean, 
}
```

</div>


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
let scheduleId = "scheduleId_example"; // String | The ID of the schedule to re-optimize
let opts = { 
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitWeekScheduleReschedule(managementUnitId, weekId, scheduleId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekScheduleReschedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekScheduleReschedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **scheduleId** | **String** | The ID of the schedule to re-optimize |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**AsyncWeekScheduleResponse**

<a name="postWorkforcemanagementManagementunitWeekSchedules"></a>

# AsyncWeekScheduleResponse postWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules

Add a schedule for a week in management unit using imported data. Use partial uploads of user schedules if activity count in schedule is greater than 17500



Requires ANY permissions: 

* wfm:schedule:add
* wfm:schedule:administer


### Request Body Schema

<script type="text/javascript">
	function copyImportWeekScheduleRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ImportWeekScheduleRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ImportWeekScheduleRequest <a href="#" onclick="return copyImportWeekScheduleRequestExample()">Copy</a>

<div id="ImportWeekScheduleRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "description": String, 
  "userSchedules": { 
    "shifts": { 
      "id": String, 
      "startDate": Date, 
      "lengthInMinutes": Number, 
      "activities": { 
        "activityCodeId": String, 
        "startDate": Date, 
        "lengthInMinutes": Number, 
        "description": String, 
        "countsAsPaidTime": Boolean, 
        "isDstFallback": Boolean, 
        "timeOffRequestId": String, 
      },  
      "delete": Boolean, 
      "manuallyEdited": Boolean, 
    },  
    "fullDayTimeOffMarkers": { 
      "managementUnitDate": String, 
      "activityCodeId": String, 
      "isPaid": Boolean, 
      "lengthInMinutes": Number, 
      "description": String, 
      "delete": Boolean, 
    },  
    "delete": Boolean, 
    "metadata": { 
      "version": Number, 
      "modifiedBy": { 
        "id": String, 
        "selfUri": String, 
      },  
      "dateModified": Date, 
    },  
    "workPlanId": String, 
  },  
  "published": Boolean, 
  "shortTermForecastId": String, 
  "partialUploadIds": [String], 
}
```

</div>


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
  'forceAsync': true, // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
  'forceDownloadService': true, // Boolean | Force the result of this operation to be sent via download service.  For testing/app development purposes
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitWeekSchedules(managementUnitId, weekId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |
 **forceDownloadService** | **Boolean** | Force the result of this operation to be sent via download service.  For testing/app development purposes | [optional]  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**AsyncWeekScheduleResponse**

<a name="postWorkforcemanagementManagementunitWeekSchedulesGenerate"></a>

# GenerateWeekScheduleResponse postWorkforcemanagementManagementunitWeekSchedulesGenerate(managementUnitId, weekId, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/generate

Generate a week schedule



Requires ANY permissions: 

* wfm:schedule:generate


### Request Body Schema

<script type="text/javascript">
	function copyGenerateWeekScheduleRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#GenerateWeekScheduleRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

GenerateWeekScheduleRequest <a href="#" onclick="return copyGenerateWeekScheduleRequestExample()">Copy</a>

<div id="GenerateWeekScheduleRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "description": String, 
  "shortTermForecastId": String, 
}
```

</div>


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
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitWeekSchedulesGenerate(managementUnitId, weekId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekSchedulesGenerate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekSchedulesGenerate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**GenerateWeekScheduleResponse**

<a name="postWorkforcemanagementManagementunitWeekSchedulesPartialupload"></a>

# PartialUploadResponse postWorkforcemanagementManagementunitWeekSchedulesPartialupload(managementUnitId, weekId, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekId}/schedules/partialupload

Partial upload of user schedules where activity count is greater than 17500



Requires ANY permissions: 

* wfm:schedule:add
* wfm:schedule:administer
* wfm:schedule:edit


### Request Body Schema

<script type="text/javascript">
	function copyUserSchedulesPartialUploadRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserSchedulesPartialUploadRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserSchedulesPartialUploadRequest <a href="#" onclick="return copyUserSchedulesPartialUploadRequestExample()">Copy</a>

<div id="UserSchedulesPartialUploadRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "userSchedules": { 
    "shifts": { 
      "id": String, 
      "startDate": Date, 
      "lengthInMinutes": Number, 
      "activities": { 
        "activityCodeId": String, 
        "startDate": Date, 
        "lengthInMinutes": Number, 
        "description": String, 
        "countsAsPaidTime": Boolean, 
        "isDstFallback": Boolean, 
        "timeOffRequestId": String, 
      },  
      "delete": Boolean, 
      "manuallyEdited": Boolean, 
    },  
    "fullDayTimeOffMarkers": { 
      "managementUnitDate": String, 
      "activityCodeId": String, 
      "isPaid": Boolean, 
      "lengthInMinutes": Number, 
      "description": String, 
      "delete": Boolean, 
    },  
    "delete": Boolean, 
    "metadata": { 
      "version": Number, 
      "modifiedBy": { 
        "id": String, 
        "selfUri": String, 
      },  
      "dateModified": Date, 
    },  
    "workPlanId": String, 
  },  
}
```

</div>


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
  'body': {} // Object | body
};

apiInstance.postWorkforcemanagementManagementunitWeekSchedulesPartialupload(managementUnitId, weekId, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekSchedulesPartialupload success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekSchedulesPartialupload');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **weekId** | **String** | First day of schedule week in yyyy-MM-dd format. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**PartialUploadResponse**

<a name="postWorkforcemanagementManagementunitWeekShorttermforecastCopy"></a>

# ShortTermForecastResponse postWorkforcemanagementManagementunitWeekShorttermforecastCopy(managementUnitId, weekDateId, forecastId, body, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/{forecastId}/copy

Copy a short term forecast



Requires ANY permissions: 

* wfm:shortTermForecast:add
* wfm:shortTermForecast:administer


### Request Body Schema

<script type="text/javascript">
	function copyCopyShortTermForecastRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CopyShortTermForecastRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CopyShortTermForecastRequest <a href="#" onclick="return copyCopyShortTermForecastRequestExample()">Copy</a>

<div id="CopyShortTermForecastRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "weekDate": String, 
  "description": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The management unit ID of the management unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format
let forecastId = "forecastId_example"; // String | The ID of the forecast to copy
let body = {}; // Object | body
let opts = { 
  'forceAsync': true // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
};

apiInstance.postWorkforcemanagementManagementunitWeekShorttermforecastCopy(managementUnitId, weekDateId, forecastId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekShorttermforecastCopy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekShorttermforecastCopy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The management unit ID of the management unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format |  |
 **forecastId** | **String** | The ID of the forecast to copy |  |
 **body** | **Object** | body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**ShortTermForecastResponse**

<a name="postWorkforcemanagementManagementunitWeekShorttermforecasts"></a>

# ShortTermForecastResponse postWorkforcemanagementManagementunitWeekShorttermforecasts(managementUnitId, weekDateId, body, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts

Import a short term forecast



Requires ANY permissions: 

* wfm:shortTermForecast:add
* wfm:shortTermForecast:administer


### Request Body Schema

<script type="text/javascript">
	function copyImportShortTermForecastRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ImportShortTermForecastRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ImportShortTermForecastRequest <a href="#" onclick="return copyImportShortTermForecastRequestExample()">Copy</a>

<div id="ImportShortTermForecastRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "fileName": String, 
  "description": String, 
  "routeGroupList": { 
    "startDate": Date, 
    "routeGroups": { 
      "attributes": { 
        "queue": { 
          "id": String, 
          "selfUri": String, 
        },  
        "mediaType": String, 
        "language": { 
          "id": String, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "selfUri": String, 
        },  
      },  
      "offeredPerInterval": [Number], 
      "averageTalkTimeSecondsPerInterval": [Number], 
      "averageAfterCallWorkSecondsPerInterval": [Number], 
      "completedPerInterval": [Number], 
      "abandonedPerInterval": [Number], 
    },  
  },  
  "partialUploadIds": [String], 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The management unit ID of the management unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format
let body = {}; // Object | body
let opts = { 
  'forceAsync': true // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
};

apiInstance.postWorkforcemanagementManagementunitWeekShorttermforecasts(managementUnitId, weekDateId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekShorttermforecasts success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekShorttermforecasts');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The management unit ID of the management unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format |  |
 **body** | **Object** | body |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**ShortTermForecastResponse**

<a name="postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate"></a>

# GenerateShortTermForecastResponse postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate(managementUnitId, weekDateId, body, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/generate

Generate a short term forecast



Requires ANY permissions: 

* wfm:shortTermForecast:add
* wfm:shortTermForecast:administer


### Request Body Schema

<script type="text/javascript">
	function copyGenerateShortTermForecastRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#GenerateShortTermForecastRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

GenerateShortTermForecastRequest <a href="#" onclick="return copyGenerateShortTermForecastRequestExample()">Copy</a>

<div id="GenerateShortTermForecastRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "description": String, 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The management unit ID of the management unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format
let body = {}; // Object | 
let opts = { 
  'forceAsync': true // Boolean | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes
};

apiInstance.postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate(managementUnitId, weekDateId, body, opts)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekShorttermforecastsGenerate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The management unit ID of the management unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format |  |
 **body** | **Object** |  |  |
 **forceAsync** | **Boolean** | Force the result of this operation to be sent asynchronously via notification.  For testing/app development purposes | [optional]  |
{: class="table table-striped"}

### Return type

**GenerateShortTermForecastResponse**

<a name="postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload"></a>

# PartialUploadResponse postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload(managementUnitId, weekDateId, body)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/weeks/{weekDateId}/shorttermforecasts/partialupload

Import a short term forecast



Requires ANY permissions: 

* wfm:shortTermForecast:add
* wfm:shortTermForecast:administer


### Request Body Schema

<script type="text/javascript">
	function copyRouteGroupListExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#RouteGroupListExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

RouteGroupList <a href="#" onclick="return copyRouteGroupListExample()">Copy</a>

<div id="RouteGroupListExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "startDate": Date, 
  "routeGroups": { 
    "attributes": { 
      "queue": { 
        "id": String, 
        "selfUri": String, 
      },  
      "mediaType": String, 
      "language": { 
        "id": String, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "selfUri": String, 
      },  
    },  
    "offeredPerInterval": [Number], 
    "averageTalkTimeSecondsPerInterval": [Number], 
    "averageAfterCallWorkSecondsPerInterval": [Number], 
    "completedPerInterval": [Number], 
    "abandonedPerInterval": [Number], 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WorkforceManagementApi();

let managementUnitId = "managementUnitId_example"; // String | The management unit ID of the management unit to which the forecast belongs
let weekDateId = "weekDateId_example"; // String | The week start date of the forecast in yyyy-MM-dd format
let body = {}; // Object | body

apiInstance.postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload(managementUnitId, weekDateId, body)
  .then((data) => {
    console.log(`postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWorkforcemanagementManagementunitWeekShorttermforecastsPartialupload');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **managementUnitId** | **String** | The management unit ID of the management unit to which the forecast belongs |  |
 **weekDateId** | **String** | The week start date of the forecast in yyyy-MM-dd format |  |
 **body** | **Object** | body |  |
{: class="table table-striped"}

### Return type

**PartialUploadResponse**

<a name="postWorkforcemanagementManagementunitWorkplanCopy"></a>

# WorkPlan postWorkforcemanagementManagementunitWorkplanCopy(managementUnitId, workPlanId, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans/{workPlanId}/copy

Create a copy of work plan



Requires ANY permissions: 

* wfm:workPlan:add
* wfm:workPlan:administer


### Request Body Schema

<script type="text/javascript">
	function copyCopyWorkPlanExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CopyWorkPlanExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CopyWorkPlan <a href="#" onclick="return copyCopyWorkPlanExample()">Copy</a>

<div id="CopyWorkPlanExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
}
```

</div>


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
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **workPlanId** | **String** | The ID of the work plan to create a copy |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkPlan**

<a name="postWorkforcemanagementManagementunitWorkplans"></a>

# WorkPlan postWorkforcemanagementManagementunitWorkplans(managementUnitId, opts)



POST /api/v2/workforcemanagement/managementunits/{managementUnitId}/workplans

Create a new work plan



Requires ANY permissions: 

* wfm:workPlan:add
* wfm:workPlan:administer


### Request Body Schema

<script type="text/javascript">
	function copyCreateWorkPlanExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CreateWorkPlanExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CreateWorkPlan <a href="#" onclick="return copyCreateWorkPlanExample()">Copy</a>

<div id="CreateWorkPlanExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "enabled": Boolean, 
  "constrainWeeklyPaidTime": Boolean, 
  "flexibleWeeklyPaidTime": Boolean, 
  "weeklyExactPaidMinutes": Number, 
  "weeklyMinimumPaidMinutes": Number, 
  "weeklyMaximumPaidMinutes": Number, 
  "constrainPaidTimeGranularity": Boolean, 
  "paidTimeGranularityMinutes": Number, 
  "constrainMinimumTimeBetweenShifts": Boolean, 
  "minimumTimeBetweenShiftsMinutes": Number, 
  "maximumDays": Number, 
  "optionalDays": { 
    "values": [String], 
  },  
  "shiftStartVariances": { 
    "values": { 
      "applicableDays": [String], 
      "maxShiftStartVarianceMinutes": Number, 
    },  
  },  
  "shifts": { 
    "name": String, 
    "days": { 
      "values": [String], 
    },  
    "flexibleStartTime": Boolean, 
    "exactStartTimeMinutesFromMidnight": Number, 
    "earliestStartTimeMinutesFromMidnight": Number, 
    "latestStartTimeMinutesFromMidnight": Number, 
    "constrainStopTime": Boolean, 
    "latestStopTimeMinutesFromMidnight": Number, 
    "startIncrementMinutes": Number, 
    "flexiblePaidTime": Boolean, 
    "exactPaidTimeMinutes": Number, 
    "minimumPaidTimeMinutes": Number, 
    "maximumPaidTimeMinutes": Number, 
    "constrainContiguousWorkTime": Boolean, 
    "minimumContiguousWorkTimeMinutes": Number, 
    "maximumContiguousWorkTimeMinutes": Number, 
    "activities": { 
      "activityCodeId": String, 
      "description": String, 
      "lengthMinutes": Number, 
      "startTimeIsRelativeToShiftStart": Boolean, 
      "flexibleStartTime": Boolean, 
      "earliestStartTimeMinutes": Number, 
      "latestStartTimeMinutes": Number, 
      "exactStartTimeMinutes": Number, 
      "startTimeIncrementMinutes": Number, 
      "countsAsPaidTime": Boolean, 
      "countsAsContiguousWorkTime": Boolean, 
    },  
  },  
  "agents": { 
    "id": String, 
    "selfUri": String, 
  },  
}
```

</div>


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
 **managementUnitId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**WorkPlan**

<a name="postWorkforcemanagementManagementunits"></a>

# ManagementUnit postWorkforcemanagementManagementunits(opts)



POST /api/v2/workforcemanagement/managementunits

Add a management unit



Requires ANY permissions: 

* wfm:managementUnit:administer
* wfm:managementUnit:add


### Request Body Schema

<script type="text/javascript">
	function copyCreateManagementUnitApiRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CreateManagementUnitApiRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CreateManagementUnitApiRequest <a href="#" onclick="return copyCreateManagementUnitApiRequestExample()">Copy</a>

<div id="CreateManagementUnitApiRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "timeZone": String, 
  "startDayOfWeek": String, 
  "settings": { 
    "adherence": { 
      "severeAlertThresholdMinutes": Number, 
      "adherenceTargetPercent": Number, 
      "adherenceExceptionThresholdSeconds": Number, 
      "nonOnQueueActivitiesEquivalent": Boolean, 
      "trackOnQueueActivity": Boolean, 
      "ignoredActivityCategories": { 
        "values": [String], 
      },  
    },  
    "shortTermForecasting": { 
      "defaultHistoryWeeks": Number, 
    },  
    "timeOff": { 
      "submissionRangeEnforced": Boolean, 
      "submissionEarliestDaysFromNow": Number, 
      "submissionLatestDaysFromNow": Number, 
    },  
    "scheduling": { 
      "maxOccupancyPercentForDeferredWork": Number, 
      "defaultShrinkagePercent": Number, 
      "shrinkageOverrides": { 
        "clear": Boolean, 
        "values": { 
          "intervalIndex": Number, 
          "shrinkagePercent": Number, 
        },  
      },  
    },  
  },  
  "divisionId": String, 
}
```

</div>


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

<a name="postWorkforcemanagementSchedules"></a>

# UserScheduleContainer postWorkforcemanagementSchedules(opts)



POST /api/v2/workforcemanagement/schedules

Get published schedule for the current user



Requires ANY permissions: 

* wfm:agentSchedule:view
* wfm:publishedSchedule:view
* wfm:schedule:administer


### Request Body Schema

<script type="text/javascript">
	function copyCurrentUserScheduleRequestBodyExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CurrentUserScheduleRequestBodyExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CurrentUserScheduleRequestBody <a href="#" onclick="return copyCurrentUserScheduleRequestBodyExample()">Copy</a>

<div id="CurrentUserScheduleRequestBodyExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "startDate": Date, 
  "endDate": Date, 
}
```

</div>


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

<a name="postWorkforcemanagementTimeoffrequests"></a>

# TimeOffRequestResponse postWorkforcemanagementTimeoffrequests(opts)



POST /api/v2/workforcemanagement/timeoffrequests

Create a time off request for the current user



Requires ANY permissions: 

* wfm:agentTimeOffRequest:submit


### Request Body Schema

<script type="text/javascript">
	function copyCreateAgentTimeOffRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CreateAgentTimeOffRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CreateAgentTimeOffRequest <a href="#" onclick="return copyCreateAgentTimeOffRequestExample()">Copy</a>

<div id="CreateAgentTimeOffRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "activityCodeId": String, 
  "notes": String, 
  "fullDayManagementUnitDates": [String], 
  "partialDayStartDateTimes": [Date], 
  "dailyDurationMinutes": Number, 
}
```

</div>


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

