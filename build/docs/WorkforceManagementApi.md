---
title: WorkforceManagementApi
---
# platformClient.WorkforceManagementApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getWorkforcemanagementAdherence**](WorkforceManagementApi.html#getWorkforcemanagementAdherence) | **GET** /api/v2/workforcemanagement/adherence | Get a list of UserScheduleAdherence records for the requested users
[**getWorkforcemanagementManagementunitActivitycodes**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitActivitycodes) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/activitycodes | Get activity codes
[**getWorkforcemanagementManagementunitIntradayQueues**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitIntradayQueues) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/intraday/queues | Get intraday queues for the given date
[**getWorkforcemanagementManagementunitUserTimeoffrequest**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitUserTimeoffrequest) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId} | Get a time off request
[**getWorkforcemanagementManagementunitUserTimeoffrequests**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitUserTimeoffrequests) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests | Get a list of time off requests for a given user
[**getWorkforcemanagementManagementunitUsers**](WorkforceManagementApi.html#getWorkforcemanagementManagementunitUsers) | **GET** /api/v2/workforcemanagement/managementunits/{muId}/users | Get agents in the management unit
[**getWorkforcemanagementManagementunits**](WorkforceManagementApi.html#getWorkforcemanagementManagementunits) | **GET** /api/v2/workforcemanagement/managementunits | Get management units
[**patchWorkforcemanagementManagementunitUserTimeoffrequest**](WorkforceManagementApi.html#patchWorkforcemanagementManagementunitUserTimeoffrequest) | **PATCH** /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId} | Update a time off request
[**postWorkforcemanagementManagementunitActivitycodes**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitActivitycodes) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/activitycodes | Create a new activity code
[**postWorkforcemanagementManagementunitHistoricaladherencequery**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitHistoricaladherencequery) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/historicaladherencequery | Request a historical adherence report
[**postWorkforcemanagementManagementunitIntraday**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitIntraday) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/intraday | Get intraday data for the given date for the requested queueIds
[**postWorkforcemanagementManagementunitSchedulesSearch**](WorkforceManagementApi.html#postWorkforcemanagementManagementunitSchedulesSearch) | **POST** /api/v2/workforcemanagement/managementunits/{muId}/schedules/search | Query published schedules for given given time range for set of users
{: class="table table-striped"}

<a name="getWorkforcemanagementAdherence"></a>

# [UserScheduleAdherence] getWorkforcemanagementAdherence(userId)



GET /api/v2/workforcemanagement/adherence

Get a list of UserScheduleAdherence records for the requested users



Requires ANY permissions: 

* wfm:realtimeAdherence:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var userId = ["userId_example"]; // [String] | User Id(s) for which to fetch current schedule adherence information.  Min 1, Max of 100 userIds per request

apiInstance.getWorkforcemanagementAdherence(userId)
  .then(function(data) {
    console.log(`getWorkforcemanagementAdherence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getWorkforcemanagementAdherence');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **[String]** | User Id(s) for which to fetch current schedule adherence information.  Min 1, Max of 100 userIds per request |  |
{: class="table table-striped"}

### Return type

**[UserScheduleAdherence]**

<a name="getWorkforcemanagementManagementunitActivitycodes"></a>

# ActivityCodeContainer getWorkforcemanagementManagementunitActivitycodes(muId)



GET /api/v2/workforcemanagement/managementunits/{muId}/activitycodes

Get activity codes



Requires ANY permissions: 

* wfm:activityCode:administer
* wfm:agent:administer
* wfm:agentSchedule:view
* wfm:historicalAdherence:view
* wfm:intraday:view
* wfm:managementUnit:administer
* wfm:publishedSchedule:view
* wfm:realtimeAdherence:view
* wfm:schedule:administer
* wfm:schedule:generate
* wfm:serviceGoalGroup:administer
* wfm:shortTermForecast:administer
* wfm:agentTimeOffRequest:submit
* wfm:timeOffRequest:administer
* wfm:workPlan:administer



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var muId = "muId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.getWorkforcemanagementManagementunitActivitycodes(muId)
  .then(function(data) {
    console.log(`getWorkforcemanagementManagementunitActivitycodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getWorkforcemanagementManagementunitActivitycodes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**ActivityCodeContainer**

<a name="getWorkforcemanagementManagementunitIntradayQueues"></a>

# WfmIntradayQueueListing getWorkforcemanagementManagementunitIntradayQueues(muId, _date)



GET /api/v2/workforcemanagement/managementunits/{muId}/intraday/queues

Get intraday queues for the given date



Requires ANY permissions: 

* wfm:intraday:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.

var _date = "_date_example"; // String | ISO-8601 date string with no time or timezone component, interpreted in the configured management unit time zone, e.g. 2017-01-23

apiInstance.getWorkforcemanagementManagementunitIntradayQueues(muId, _date)
  .then(function(data) {
    console.log(`getWorkforcemanagementManagementunitIntradayQueues success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getWorkforcemanagementManagementunitIntradayQueues');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **_date** | **String** | ISO-8601 date string with no time or timezone component, interpreted in the configured management unit time zone, e.g. 2017-01-23 |  |
{: class="table table-striped"}

### Return type

**WfmIntradayQueueListing**

<a name="getWorkforcemanagementManagementunitUserTimeoffrequest"></a>

# TimeOffRequestResponse getWorkforcemanagementManagementunitUserTimeoffrequest(muId, userId, timeOffRequestId)



GET /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}

Get a time off request



Requires ANY permissions: 

* wfm:timeOffRequest:administer



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var muId = "muId_example"; // String | The muId of the management unit, or 'mine' for the management unit of the logged-in user.

var userId = "userId_example"; // String | The userId to whom the Time Off Request applies.

var timeOffRequestId = "timeOffRequestId_example"; // String | Time Off Request Id

apiInstance.getWorkforcemanagementManagementunitUserTimeoffrequest(muId, userId, timeOffRequestId)
  .then(function(data) {
    console.log(`getWorkforcemanagementManagementunitUserTimeoffrequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getWorkforcemanagementManagementunitUserTimeoffrequest');
    console.error(err);
  });

~~~

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



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var muId = "muId_example"; // String | The muId of the management unit, or 'mine' for the management unit of the logged-in user.

var userId = "userId_example"; // String | The userId to whom the Time Off Request applies.

var opts = { 
  'recentlyReviewed': false // Boolean | Limit results to requests that have been reviewed within the preceding 30 days
};
apiInstance.getWorkforcemanagementManagementunitUserTimeoffrequests(muId, userId, opts)
  .then(function(data) {
    console.log(`getWorkforcemanagementManagementunitUserTimeoffrequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getWorkforcemanagementManagementunitUserTimeoffrequests');
    console.error(err);
  });

~~~

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

Get agents in the management unit



Requires ANY permissions: 

* wfm:agent:administer
* wfm:timeOffRequest:administer
* wfm:realtimeAdherence:view
* wfm:historicalAdherence:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.

apiInstance.getWorkforcemanagementManagementunitUsers(muId)
  .then(function(data) {
    console.log(`getWorkforcemanagementManagementunitUsers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getWorkforcemanagementManagementunitUsers');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
{: class="table table-striped"}

### Return type

**WfmUserEntityListing**

<a name="getWorkforcemanagementManagementunits"></a>

# ManagementUnitListing getWorkforcemanagementManagementunits(opts)



GET /api/v2/workforcemanagement/managementunits

Get management units



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var opts = { 
  'pageSize': 56, // Number | 
  'pageNumber': 56, // Number | 
  'expand': "expand_example", // String | 
  'feature': "feature_example", // String | 
  'divisionId': "divisionId_example" // String | 
};
apiInstance.getWorkforcemanagementManagementunits(opts)
  .then(function(data) {
    console.log(`getWorkforcemanagementManagementunits success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getWorkforcemanagementManagementunits');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** |  | [optional]  |
 **pageNumber** | **Number** |  | [optional]  |
 **expand** | **String** |  | [optional] <br />**Values**: details |
 **feature** | **String** |  | [optional] <br />**Values**: Agents, ActivityCodes, HistoricalAdherence, IntradayMonitoring, ManagementUnits, RealTimeAdherence, Schedules, ServiceGoalGroups, ShortTermForecasts, TimeOffRequests, WorkPlans |
 **divisionId** | **String** |  | [optional]  |
{: class="table table-striped"}

### Return type

**ManagementUnitListing**

<a name="patchWorkforcemanagementManagementunitUserTimeoffrequest"></a>

# TimeOffRequestResponse patchWorkforcemanagementManagementunitUserTimeoffrequest(muId, userId, timeOffRequestId, opts)



PATCH /api/v2/workforcemanagement/managementunits/{muId}/users/{userId}/timeoffrequests/{timeOffRequestId}

Update a time off request



Requires ANY permissions: 

* wfm:timeOffRequest:administer


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAdminTimeOffRequestPatchExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AdminTimeOffRequestPatchExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

AdminTimeOffRequestPatch <a style="cursor: pointer" onclick="copyAdminTimeOffRequestPatchExample()">Copy</a>

<div id="AdminTimeOffRequestPatchExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
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
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var muId = "muId_example"; // String | The muId of the management unit, or 'mine' for the management unit of the logged-in user.

var userId = "userId_example"; // String | The id of the user the requested time off request belongs to

var timeOffRequestId = "timeOffRequestId_example"; // String | The id of the time off request to update

var opts = { 
  'body': {} // Object | body
};
apiInstance.patchWorkforcemanagementManagementunitUserTimeoffrequest(muId, userId, timeOffRequestId, opts)
  .then(function(data) {
    console.log(`patchWorkforcemanagementManagementunitUserTimeoffrequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchWorkforcemanagementManagementunitUserTimeoffrequest');
    console.error(err);
  });

~~~

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

<a name="postWorkforcemanagementManagementunitActivitycodes"></a>

# ActivityCode postWorkforcemanagementManagementunitActivitycodes(muId, opts)



POST /api/v2/workforcemanagement/managementunits/{muId}/activitycodes

Create a new activity code



Requires ANY permissions: 

* wfm:activityCode:administer


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyCreateActivityCodeRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#CreateActivityCodeRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

CreateActivityCodeRequest <a style="cursor: pointer" onclick="copyCreateActivityCodeRequestExample()">Copy</a>

<div id="CreateActivityCodeRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "name": String, 
  "category": String, 
  "lengthInMinutes": Number, 
  "countsAsPaidTime": Boolean, 
  "countsAsWorkTime": Boolean, 
  "agentTimeOffSelectable": Boolean, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var muId = "muId_example"; // String | The ID of the management unit, or 'mine' for the management unit of the logged-in user.

var opts = { 
  'body': {} // Object | body
};
apiInstance.postWorkforcemanagementManagementunitActivitycodes(muId, opts)
  .then(function(data) {
    console.log(`postWorkforcemanagementManagementunitActivitycodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postWorkforcemanagementManagementunitActivitycodes');
    console.error(err);
  });

~~~

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



Requires ANY permissions: 

* wfm:historicalAdherence:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyWfmHistoricalAdherenceQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#WfmHistoricalAdherenceQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

WfmHistoricalAdherenceQuery <a style="cursor: pointer" onclick="copyWfmHistoricalAdherenceQueryExample()">Copy</a>

<div id="WfmHistoricalAdherenceQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "startDate": Date, 
  "endDate": Date, 
  "timeZone": String, 
  "userIds": [String], 
  "includeExceptions": Boolean, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.

var opts = { 
  'body': {} // Object | body
};
apiInstance.postWorkforcemanagementManagementunitHistoricaladherencequery(muId, opts)
  .then(function(data) {
    console.log(`postWorkforcemanagementManagementunitHistoricaladherencequery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postWorkforcemanagementManagementunitHistoricaladherencequery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
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

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyIntradayQueryDataCommandExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#IntradayQueryDataCommandExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

IntradayQueryDataCommand <a style="cursor: pointer" onclick="copyIntradayQueryDataCommandExample()">Copy</a>

<div id="IntradayQueryDataCommandExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
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
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.

var opts = { 
  'body': {} // Object | body
};
apiInstance.postWorkforcemanagementManagementunitIntraday(muId, opts)
  .then(function(data) {
    console.log(`postWorkforcemanagementManagementunitIntraday success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postWorkforcemanagementManagementunitIntraday');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**IntradayResponse**

<a name="postWorkforcemanagementManagementunitSchedulesSearch"></a>

# UserScheduleContainer postWorkforcemanagementManagementunitSchedulesSearch(muId, opts)



POST /api/v2/workforcemanagement/managementunits/{muId}/schedules/search

Query published schedules for given given time range for set of users



Requires ANY permissions: 

* wfm:schedule:administer
* wfm:publishedSchedule:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserListScheduleRequestBodyExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserListScheduleRequestBodyExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserListScheduleRequestBody <a style="cursor: pointer" onclick="copyUserListScheduleRequestBodyExample()">Copy</a>

<div id="UserListScheduleRequestBodyExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "userIds": [String], 
  "startDate": Date, 
  "endDate": Date, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.WorkforceManagementApi();

var muId = "muId_example"; // String | The management unit ID of the management unit, or 'mine' for the management unit of the logged-in user.

var opts = { 
  'body': {} // Object | body
};
apiInstance.postWorkforcemanagementManagementunitSchedulesSearch(muId, opts)
  .then(function(data) {
    console.log(`postWorkforcemanagementManagementunitSchedulesSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postWorkforcemanagementManagementunitSchedulesSearch');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **muId** | **String** | The management unit ID of the management unit, or &#39;mine&#39; for the management unit of the logged-in user. |  |
 **body** | **Object** | body | [optional]  |
{: class="table table-striped"}

### Return type

**UserScheduleContainer**

