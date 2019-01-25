---
title: AnalyticsApi
---
# platformClient.AnalyticsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsReportingSchedule**](AnalyticsApi.html#deleteAnalyticsReportingSchedule) | **DELETE** /api/v2/analytics/reporting/schedules/{scheduleId} | Delete a scheduled report job.
[**getAnalyticsConversationDetails**](AnalyticsApi.html#getAnalyticsConversationDetails) | **GET** /api/v2/analytics/conversations/{conversationId}/details | Get a conversation by id
[**getAnalyticsConversationsDetails**](AnalyticsApi.html#getAnalyticsConversationsDetails) | **GET** /api/v2/analytics/conversations/details | Gets multiple conversations by id
[**getAnalyticsReportingExports**](AnalyticsApi.html#getAnalyticsReportingExports) | **GET** /api/v2/analytics/reporting/exports | Get all view export requests for a user
[**getAnalyticsReportingMetadata**](AnalyticsApi.html#getAnalyticsReportingMetadata) | **GET** /api/v2/analytics/reporting/metadata | Get list of reporting metadata.
[**getAnalyticsReportingReportIdMetadata**](AnalyticsApi.html#getAnalyticsReportingReportIdMetadata) | **GET** /api/v2/analytics/reporting/{reportId}/metadata | Get a reporting metadata.
[**getAnalyticsReportingReportformats**](AnalyticsApi.html#getAnalyticsReportingReportformats) | **GET** /api/v2/analytics/reporting/reportformats | Get a list of report formats
[**getAnalyticsReportingSchedule**](AnalyticsApi.html#getAnalyticsReportingSchedule) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId} | Get a scheduled report job.
[**getAnalyticsReportingScheduleHistory**](AnalyticsApi.html#getAnalyticsReportingScheduleHistory) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId}/history | Get list of completed scheduled report jobs.
[**getAnalyticsReportingScheduleHistoryLatest**](AnalyticsApi.html#getAnalyticsReportingScheduleHistoryLatest) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId}/history/latest | Get most recently completed scheduled report job.
[**getAnalyticsReportingScheduleHistoryRunId**](AnalyticsApi.html#getAnalyticsReportingScheduleHistoryRunId) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId} | A completed scheduled report job
[**getAnalyticsReportingSchedules**](AnalyticsApi.html#getAnalyticsReportingSchedules) | **GET** /api/v2/analytics/reporting/schedules | Get a list of scheduled report jobs
[**getAnalyticsReportingTimeperiods**](AnalyticsApi.html#getAnalyticsReportingTimeperiods) | **GET** /api/v2/analytics/reporting/timeperiods | Get a list of report time periods.
[**postAnalyticsConversationDetailsProperties**](AnalyticsApi.html#postAnalyticsConversationDetailsProperties) | **POST** /api/v2/analytics/conversations/{conversationId}/details/properties | Index conversation properties
[**postAnalyticsConversationsAggregatesQuery**](AnalyticsApi.html#postAnalyticsConversationsAggregatesQuery) | **POST** /api/v2/analytics/conversations/aggregates/query | Query for conversation aggregates
[**postAnalyticsConversationsDetailsQuery**](AnalyticsApi.html#postAnalyticsConversationsDetailsQuery) | **POST** /api/v2/analytics/conversations/details/query | Query for conversation details
[**postAnalyticsEvaluationsAggregatesQuery**](AnalyticsApi.html#postAnalyticsEvaluationsAggregatesQuery) | **POST** /api/v2/analytics/evaluations/aggregates/query | Query for evaluation aggregates
[**postAnalyticsFlowsAggregatesQuery**](AnalyticsApi.html#postAnalyticsFlowsAggregatesQuery) | **POST** /api/v2/analytics/flows/aggregates/query | Query for flow aggregates
[**postAnalyticsQueuesObservationsQuery**](AnalyticsApi.html#postAnalyticsQueuesObservationsQuery) | **POST** /api/v2/analytics/queues/observations/query | Query for queue observations
[**postAnalyticsReportingExports**](AnalyticsApi.html#postAnalyticsReportingExports) | **POST** /api/v2/analytics/reporting/exports | Generate a view export request
[**postAnalyticsReportingScheduleRunreport**](AnalyticsApi.html#postAnalyticsReportingScheduleRunreport) | **POST** /api/v2/analytics/reporting/schedules/{scheduleId}/runreport | Place a scheduled report immediately into the reporting queue
[**postAnalyticsReportingSchedules**](AnalyticsApi.html#postAnalyticsReportingSchedules) | **POST** /api/v2/analytics/reporting/schedules | Create a scheduled report job
[**postAnalyticsSurveysAggregatesQuery**](AnalyticsApi.html#postAnalyticsSurveysAggregatesQuery) | **POST** /api/v2/analytics/surveys/aggregates/query | Query for survey aggregates
[**postAnalyticsUsersAggregatesQuery**](AnalyticsApi.html#postAnalyticsUsersAggregatesQuery) | **POST** /api/v2/analytics/users/aggregates/query | Query for user aggregates
[**postAnalyticsUsersDetailsQuery**](AnalyticsApi.html#postAnalyticsUsersDetailsQuery) | **POST** /api/v2/analytics/users/details/query | Query for user details
[**postAnalyticsUsersObservationsQuery**](AnalyticsApi.html#postAnalyticsUsersObservationsQuery) | **POST** /api/v2/analytics/users/observations/query | Query for user observations
[**putAnalyticsReportingSchedule**](AnalyticsApi.html#putAnalyticsReportingSchedule) | **PUT** /api/v2/analytics/reporting/schedules/{scheduleId} | Update a scheduled report job.
{: class="table table-striped"}

<a name="deleteAnalyticsReportingSchedule"></a>

# void deleteAnalyticsReportingSchedule(scheduleId)



DELETE /api/v2/analytics/reporting/schedules/{scheduleId}

Delete a scheduled report job.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.deleteAnalyticsReportingSchedule(scheduleId)
  .then(function() {
    console.log('deleteAnalyticsReportingSchedule returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteAnalyticsReportingSchedule');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAnalyticsConversationDetails"></a>

# AnalyticsConversation getAnalyticsConversationDetails(conversationId)



GET /api/v2/analytics/conversations/{conversationId}/details

Get a conversation by id



Requires ANY permissions: 

* analytics:conversationDetail:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var conversationId = "conversationId_example"; // String | conversationId

apiInstance.getAnalyticsConversationDetails(conversationId)
  .then(function(data) {
    console.log(`getAnalyticsConversationDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsConversationDetails');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**AnalyticsConversation**

<a name="getAnalyticsConversationsDetails"></a>

# AnalyticsConversation getAnalyticsConversationsDetails(opts)



GET /api/v2/analytics/conversations/details

Gets multiple conversations by id



Requires ANY permissions: 

* analytics:conversationDetail:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var opts = { 
  'id': ["id_example"] // [String] | Comma-separated conversation ids
};
apiInstance.getAnalyticsConversationsDetails(opts)
  .then(function(data) {
    console.log(`getAnalyticsConversationsDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsConversationsDetails');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | Comma-separated conversation ids | [optional]  |
{: class="table table-striped"}

### Return type

**AnalyticsConversation**

<a name="getAnalyticsReportingExports"></a>

# ReportingExportJobListing getAnalyticsReportingExports()



GET /api/v2/analytics/reporting/exports

Get all view export requests for a user



Requires ANY permissions: 

* analytics:dataExport:view



### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();
apiInstance.getAnalyticsReportingExports()
  .then(function(data) {
    console.log(`getAnalyticsReportingExports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsReportingExports');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**ReportingExportJobListing**

<a name="getAnalyticsReportingMetadata"></a>

# ReportMetaDataEntityListing getAnalyticsReportingMetadata(opts)



GET /api/v2/analytics/reporting/metadata

Get list of reporting metadata.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'locale': "locale_example" // String | Locale
};
apiInstance.getAnalyticsReportingMetadata(opts)
  .then(function(data) {
    console.log(`getAnalyticsReportingMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsReportingMetadata');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **locale** | **String** | Locale | [optional]  |
{: class="table table-striped"}

### Return type

**ReportMetaDataEntityListing**

<a name="getAnalyticsReportingReportIdMetadata"></a>

# ReportMetaData getAnalyticsReportingReportIdMetadata(reportId, opts)



GET /api/v2/analytics/reporting/{reportId}/metadata

Get a reporting metadata.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var reportId = "reportId_example"; // String | Report ID

var opts = { 
  'locale': "locale_example" // String | Locale
};
apiInstance.getAnalyticsReportingReportIdMetadata(reportId, opts)
  .then(function(data) {
    console.log(`getAnalyticsReportingReportIdMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsReportingReportIdMetadata');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String** | Report ID |  |
 **locale** | **String** | Locale | [optional]  |
{: class="table table-striped"}

### Return type

**ReportMetaData**

<a name="getAnalyticsReportingReportformats"></a>

# **[&#39;String&#39;]** getAnalyticsReportingReportformats()



GET /api/v2/analytics/reporting/reportformats

Get a list of report formats

Get a list of report formats.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();
apiInstance.getAnalyticsReportingReportformats()
  .then(function(data) {
    console.log(`getAnalyticsReportingReportformats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsReportingReportformats');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="getAnalyticsReportingSchedule"></a>

# ReportSchedule getAnalyticsReportingSchedule(scheduleId)



GET /api/v2/analytics/reporting/schedules/{scheduleId}

Get a scheduled report job.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingSchedule(scheduleId)
  .then(function(data) {
    console.log(`getAnalyticsReportingSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsReportingSchedule');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

**ReportSchedule**

<a name="getAnalyticsReportingScheduleHistory"></a>

# ReportRunEntryEntityDomainListing getAnalyticsReportingScheduleHistory(scheduleId, opts)



GET /api/v2/analytics/reporting/schedules/{scheduleId}/history

Get list of completed scheduled report jobs.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

var opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25 // Number | 
};
apiInstance.getAnalyticsReportingScheduleHistory(scheduleId, opts)
  .then(function(data) {
    console.log(`getAnalyticsReportingScheduleHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsReportingScheduleHistory');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
 **pageNumber** | **Number** |  | [optional] [default to 1] |
 **pageSize** | **Number** |  | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ReportRunEntryEntityDomainListing**

<a name="getAnalyticsReportingScheduleHistoryLatest"></a>

# ReportRunEntry getAnalyticsReportingScheduleHistoryLatest(scheduleId)



GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/latest

Get most recently completed scheduled report job.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingScheduleHistoryLatest(scheduleId)
  .then(function(data) {
    console.log(`getAnalyticsReportingScheduleHistoryLatest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsReportingScheduleHistoryLatest');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

**ReportRunEntry**

<a name="getAnalyticsReportingScheduleHistoryRunId"></a>

# ReportRunEntry getAnalyticsReportingScheduleHistoryRunId(runId, scheduleId)



GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}

A completed scheduled report job

A completed scheduled report job.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var runId = "runId_example"; // String | Run ID

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingScheduleHistoryRunId(runId, scheduleId)
  .then(function(data) {
    console.log(`getAnalyticsReportingScheduleHistoryRunId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsReportingScheduleHistoryRunId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **runId** | **String** | Run ID |  |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

**ReportRunEntry**

<a name="getAnalyticsReportingSchedules"></a>

# ReportScheduleEntityListing getAnalyticsReportingSchedules(opts)



GET /api/v2/analytics/reporting/schedules

Get a list of scheduled report jobs

Get a list of scheduled report jobs.

Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getAnalyticsReportingSchedules(opts)
  .then(function(data) {
    console.log(`getAnalyticsReportingSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsReportingSchedules');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ReportScheduleEntityListing**

<a name="getAnalyticsReportingTimeperiods"></a>

# **[&#39;String&#39;]** getAnalyticsReportingTimeperiods()



GET /api/v2/analytics/reporting/timeperiods

Get a list of report time periods.



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();
apiInstance.getAnalyticsReportingTimeperiods()
  .then(function(data) {
    console.log(`getAnalyticsReportingTimeperiods success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsReportingTimeperiods');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="postAnalyticsConversationDetailsProperties"></a>

# PropertyIndexRequest postAnalyticsConversationDetailsProperties(conversationId, body)



POST /api/v2/analytics/conversations/{conversationId}/details/properties

Index conversation properties



Requires ANY permissions: 

* analytics:conversationProperties:index


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyPropertyIndexRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#PropertyIndexRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

PropertyIndexRequest <a style="cursor: pointer" onclick="copyPropertyIndexRequestExample()">Copy</a>

<div id="PropertyIndexRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "sessionId": String, 
  "targetDate": Date, 
  "properties": { 
    "propertyType": String, 
    "property": String, 
    "value": String, 
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

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = {}; // Object | request

apiInstance.postAnalyticsConversationDetailsProperties(conversationId, body)
  .then(function(data) {
    console.log(`postAnalyticsConversationDetailsProperties success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsConversationDetailsProperties');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | request |  |
{: class="table table-striped"}

### Return type

**PropertyIndexRequest**

<a name="postAnalyticsConversationsAggregatesQuery"></a>

# AggregateQueryResponse postAnalyticsConversationsAggregatesQuery(body)



POST /api/v2/analytics/conversations/aggregates/query

Query for conversation aggregates



Requires ANY permissions: 

* analytics:conversationAggregate:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAggregationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AggregationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

AggregationQuery <a style="cursor: pointer" onclick="copyAggregationQueryExample()">Copy</a>

<div id="AggregationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "interval": String, 
  "granularity": String, 
  "timeZone": String, 
  "groupBy": [String], 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "metrics": [String], 
  "flattenMultivaluedDimensions": Boolean, 
  "views": { 
    "target": String, 
    "name": String, 
    "function": String, 
    "range": { 
      "gte": Number, 
      "lt": Number, 
    },  
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

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | query

apiInstance.postAnalyticsConversationsAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsConversationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsConversationsAggregatesQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AggregateQueryResponse**

<a name="postAnalyticsConversationsDetailsQuery"></a>

# AnalyticsConversationQueryResponse postAnalyticsConversationsDetailsQuery(body)



POST /api/v2/analytics/conversations/details/query

Query for conversation details



Requires ANY permissions: 

* analytics:conversationDetail:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyConversationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ConversationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ConversationQuery <a style="cursor: pointer" onclick="copyConversationQueryExample()">Copy</a>

<div id="ConversationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "interval": String, 
  "conversationFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "evaluationFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "surveyFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "mediaEndpointStatFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "segmentFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "aggregations": { 
    "type": String, 
    "dimension": String, 
    "metric": String, 
    "size": Number, 
    "ranges": { 
      "gte": Number, 
      "lt": Number, 
    },  
  },  
  "paging": { 
    "pageSize": Number, 
    "pageNumber": Number, 
  },  
  "order": String, 
  "orderBy": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | query

apiInstance.postAnalyticsConversationsDetailsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsConversationsDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsConversationsDetailsQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AnalyticsConversationQueryResponse**

<a name="postAnalyticsEvaluationsAggregatesQuery"></a>

# AggregateQueryResponse postAnalyticsEvaluationsAggregatesQuery(body)



POST /api/v2/analytics/evaluations/aggregates/query

Query for evaluation aggregates



Requires ANY permissions: 

* analytics:evaluationAggregate:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAggregationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AggregationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

AggregationQuery <a style="cursor: pointer" onclick="copyAggregationQueryExample()">Copy</a>

<div id="AggregationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "interval": String, 
  "granularity": String, 
  "timeZone": String, 
  "groupBy": [String], 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "metrics": [String], 
  "flattenMultivaluedDimensions": Boolean, 
  "views": { 
    "target": String, 
    "name": String, 
    "function": String, 
    "range": { 
      "gte": Number, 
      "lt": Number, 
    },  
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

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | query

apiInstance.postAnalyticsEvaluationsAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsEvaluationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsEvaluationsAggregatesQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AggregateQueryResponse**

<a name="postAnalyticsFlowsAggregatesQuery"></a>

# AggregateQueryResponse postAnalyticsFlowsAggregatesQuery(body)



POST /api/v2/analytics/flows/aggregates/query

Query for flow aggregates



Requires ANY permissions: 

* analytics:flowAggregate:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAggregationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AggregationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

AggregationQuery <a style="cursor: pointer" onclick="copyAggregationQueryExample()">Copy</a>

<div id="AggregationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "interval": String, 
  "granularity": String, 
  "timeZone": String, 
  "groupBy": [String], 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "metrics": [String], 
  "flattenMultivaluedDimensions": Boolean, 
  "views": { 
    "target": String, 
    "name": String, 
    "function": String, 
    "range": { 
      "gte": Number, 
      "lt": Number, 
    },  
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

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | query

apiInstance.postAnalyticsFlowsAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsFlowsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsFlowsAggregatesQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AggregateQueryResponse**

<a name="postAnalyticsQueuesObservationsQuery"></a>

# QualifierMappingObservationQueryResponse postAnalyticsQueuesObservationsQuery(body)



POST /api/v2/analytics/queues/observations/query

Query for queue observations



Requires ANY permissions: 

* analytics:queueObservation:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyObservationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ObservationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ObservationQuery <a style="cursor: pointer" onclick="copyObservationQueryExample()">Copy</a>

<div id="ObservationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "metrics": [String], 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | query

apiInstance.postAnalyticsQueuesObservationsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsQueuesObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsQueuesObservationsQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**QualifierMappingObservationQueryResponse**

<a name="postAnalyticsReportingExports"></a>

# ReportingExportJobResponse postAnalyticsReportingExports(body)



POST /api/v2/analytics/reporting/exports

Generate a view export request



Requires ANY permissions: 

* analytics:dataExport:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyReportingExportJobRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ReportingExportJobRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ReportingExportJobRequest <a style="cursor: pointer" onclick="copyReportingExportJobRequestExample()">Copy</a>

<div id="ReportingExportJobRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "name": String, 
  "timeZone": { 
    "dstsavings": Number, 
    "rawOffset": Number, 
    "id": String, 
    "displayName": String, 
  },  
  "exportFormat": String, 
  "interval": String, 
  "period": String, 
  "viewType": String, 
  "filter": { 
    "mediaTypes": [String], 
    "queueIds": [String], 
    "skillIds": [String], 
    "skillGroups": [String], 
    "languageIds": [String], 
    "languageGroups": [String], 
    "directions": [String], 
    "wrapUpCodes": [String], 
    "dnisList": [String], 
    "filterQueuesByUserIds": [String], 
    "filterUsersByQueueIds": [String], 
    "userIds": [String], 
    "addressTos": [String], 
    "addressFroms": [String], 
    "outboundCampaignIds": [String], 
    "outboundContactListIds": [String], 
    "contactIds": [String], 
    "aniList": [String], 
    "durationsMilliseconds": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "evaluationScore": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "evaluationCriticalScore": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "evaluationFormIds": [String], 
    "evaluatedAgentIds": [String], 
    "evaluatorIds": [String], 
    "transferred": Boolean, 
    "abandoned": Boolean, 
    "messageTypes": [String], 
    "divisionIds": [String], 
    "surveyFormIds": [String], 
    "surveyTotalScore": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "surveyNpsScore": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "showSecondaryStatus": Boolean, 
    "agentDurationSortOrder": String, 
    "waitingDurationSortOrder": String, 
    "interactingDurationSortOrder": String, 
    "agentName": String, 
    "skillsList": [String], 
    "languageList": [String], 
    "mos": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "surveyQuestionGroupScore": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "surveyPromoterScore": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "surveyFormContextIds": [String], 
    "conversationIds": [String], 
    "isEnded": Boolean, 
    "isSurveyed": Boolean, 
    "surveyScores": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "promoterScores": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "isCampaign": Boolean, 
    "surveyStatuses": [String], 
    "conversationProperties": { 
      "isWaiting": Boolean, 
      "isActive": Boolean, 
      "isAcd": Boolean, 
      "isScreenshare": Boolean, 
      "isCobrowse": Boolean, 
      "isVoicemail": Boolean, 
      "isFlagged": Boolean, 
      "filterWrapUpNotes": Boolean, 
      "matchAll": Boolean, 
    },  
    "isBlindTransferred": Boolean, 
    "isConsulted": Boolean, 
    "isConsultTransferred": Boolean, 
    "remoteParticipants": [String], 
    "statusList": [String], 
    "flowIds": [String], 
    "flowOutcomeIds": [String], 
    "flowOutcomeValues": [String], 
    "flowDestinationTypes": [String], 
    "flowDisconnectReasons": [String], 
    "flowTypes": [String], 
    "flowEntryTypes": [String], 
    "flowEntryReasons": [String], 
    "groupIds": [String], 
  },  
  "read": Boolean, 
  "locale": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | ReportingExportJobRequest

apiInstance.postAnalyticsReportingExports(body)
  .then(function(data) {
    console.log(`postAnalyticsReportingExports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsReportingExports');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ReportingExportJobRequest |  |
{: class="table table-striped"}

### Return type

**ReportingExportJobResponse**

<a name="postAnalyticsReportingScheduleRunreport"></a>

# RunNowResponse postAnalyticsReportingScheduleRunreport(scheduleId)



POST /api/v2/analytics/reporting/schedules/{scheduleId}/runreport

Place a scheduled report immediately into the reporting queue



Requires NO permissions: 




### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.postAnalyticsReportingScheduleRunreport(scheduleId)
  .then(function(data) {
    console.log(`postAnalyticsReportingScheduleRunreport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsReportingScheduleRunreport');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

**RunNowResponse**

<a name="postAnalyticsReportingSchedules"></a>

# ReportSchedule postAnalyticsReportingSchedules(body)



POST /api/v2/analytics/reporting/schedules

Create a scheduled report job

Create a scheduled report job.

Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyReportScheduleExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ReportScheduleExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ReportSchedule <a style="cursor: pointer" onclick="copyReportScheduleExample()">Copy</a>

<div id="ReportScheduleExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "quartzCronExpression": String, 
  "nextFireTime": Date, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "description": String, 
  "timeZone": String, 
  "timePeriod": String, 
  "interval": String, 
  "reportFormat": String, 
  "locale": String, 
  "enabled": Boolean, 
  "reportId": String, 
  "parameters": {String: Object}, 
  "lastRun": { 
    "id": String, 
    "name": String, 
    "reportId": String, 
    "runTime": Date, 
    "runStatus": String, 
    "errorMessage": String, 
    "runDurationMsec": Number, 
    "reportUrl": String, 
    "reportFormat": String, 
    "scheduleUri": String, 
    "selfUri": String, 
  },  
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | ReportSchedule

apiInstance.postAnalyticsReportingSchedules(body)
  .then(function(data) {
    console.log(`postAnalyticsReportingSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsReportingSchedules');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ReportSchedule |  |
{: class="table table-striped"}

### Return type

**ReportSchedule**

<a name="postAnalyticsSurveysAggregatesQuery"></a>

# AggregateQueryResponse postAnalyticsSurveysAggregatesQuery(body)



POST /api/v2/analytics/surveys/aggregates/query

Query for survey aggregates



Requires ANY permissions: 

* analytics:surveyAggregate:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAggregationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AggregationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

AggregationQuery <a style="cursor: pointer" onclick="copyAggregationQueryExample()">Copy</a>

<div id="AggregationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "interval": String, 
  "granularity": String, 
  "timeZone": String, 
  "groupBy": [String], 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "metrics": [String], 
  "flattenMultivaluedDimensions": Boolean, 
  "views": { 
    "target": String, 
    "name": String, 
    "function": String, 
    "range": { 
      "gte": Number, 
      "lt": Number, 
    },  
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

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | query

apiInstance.postAnalyticsSurveysAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsSurveysAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsSurveysAggregatesQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AggregateQueryResponse**

<a name="postAnalyticsUsersAggregatesQuery"></a>

# PresenceQueryResponse postAnalyticsUsersAggregatesQuery(body)



POST /api/v2/analytics/users/aggregates/query

Query for user aggregates



Requires ANY permissions: 

* analytics:userAggregate:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAggregationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AggregationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

AggregationQuery <a style="cursor: pointer" onclick="copyAggregationQueryExample()">Copy</a>

<div id="AggregationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "interval": String, 
  "granularity": String, 
  "timeZone": String, 
  "groupBy": [String], 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "metrics": [String], 
  "flattenMultivaluedDimensions": Boolean, 
  "views": { 
    "target": String, 
    "name": String, 
    "function": String, 
    "range": { 
      "gte": Number, 
      "lt": Number, 
    },  
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

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | query

apiInstance.postAnalyticsUsersAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsUsersAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsUsersAggregatesQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**PresenceQueryResponse**

<a name="postAnalyticsUsersDetailsQuery"></a>

# AnalyticsUserDetailsQueryResponse postAnalyticsUsersDetailsQuery(body)



POST /api/v2/analytics/users/details/query

Query for user details



Requires ANY permissions: 

* analytics:userObservation:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyUserDetailsQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#UserDetailsQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

UserDetailsQuery <a style="cursor: pointer" onclick="copyUserDetailsQueryExample()">Copy</a>

<div id="UserDetailsQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "interval": String, 
  "userFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "presenceFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "routingStatusFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "presenceAggregations": { 
    "type": String, 
    "dimension": String, 
    "metric": String, 
    "size": Number, 
    "ranges": { 
      "gte": Number, 
      "lt": Number, 
    },  
  },  
  "routingStatusAggregations": { 
    "type": String, 
    "dimension": String, 
    "metric": String, 
    "size": Number, 
    "ranges": { 
      "gte": Number, 
      "lt": Number, 
    },  
  },  
  "paging": { 
    "pageSize": Number, 
    "pageNumber": Number, 
  },  
  "order": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | query

apiInstance.postAnalyticsUsersDetailsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsUsersDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsUsersDetailsQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AnalyticsUserDetailsQueryResponse**

<a name="postAnalyticsUsersObservationsQuery"></a>

# ObservationQueryResponse postAnalyticsUsersObservationsQuery(body)



POST /api/v2/analytics/users/observations/query

Query for user observations



Requires ANY permissions: 

* analytics:userObservation:view


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyObservationQueryExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ObservationQueryExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ObservationQuery <a style="cursor: pointer" onclick="copyObservationQueryExample()">Copy</a>

<div id="ObservationQueryExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
        "propertyType": String, 
        "property": String, 
        "metric": String, 
        "operator": String, 
        "value": String, 
        "range": { 
          "gt": Number, 
          "gte": Number, 
          "lt": Number, 
          "lte": Number, 
        },  
      },  
    },  
    "predicates": { 
      "type": String, 
      "dimension": String, 
      "propertyType": String, 
      "property": String, 
      "metric": String, 
      "operator": String, 
      "value": String, 
      "range": { 
        "gt": Number, 
        "gte": Number, 
        "lt": Number, 
        "lte": Number, 
      },  
    },  
  },  
  "metrics": [String], 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = {}; // Object | query

apiInstance.postAnalyticsUsersObservationsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsUsersObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsUsersObservationsQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**ObservationQueryResponse**

<a name="putAnalyticsReportingSchedule"></a>

# ReportSchedule putAnalyticsReportingSchedule(scheduleId, body)



PUT /api/v2/analytics/reporting/schedules/{scheduleId}

Update a scheduled report job.



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyReportScheduleExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ReportScheduleExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ReportSchedule <a style="cursor: pointer" onclick="copyReportScheduleExample()">Copy</a>

<div id="ReportScheduleExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "quartzCronExpression": String, 
  "nextFireTime": Date, 
  "dateCreated": Date, 
  "dateModified": Date, 
  "description": String, 
  "timeZone": String, 
  "timePeriod": String, 
  "interval": String, 
  "reportFormat": String, 
  "locale": String, 
  "enabled": Boolean, 
  "reportId": String, 
  "parameters": {String: Object}, 
  "lastRun": { 
    "id": String, 
    "name": String, 
    "reportId": String, 
    "runTime": Date, 
    "runStatus": String, 
    "errorMessage": String, 
    "runDurationMsec": Number, 
    "reportUrl": String, 
    "reportFormat": String, 
    "scheduleUri": String, 
    "selfUri": String, 
  },  
  "selfUri": String, 
}
~~~
</div>


### Example Usage

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud OAuth
platformClient.ApiClient.instance.authentications['PureCloud OAuth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

var body = {}; // Object | ReportSchedule

apiInstance.putAnalyticsReportingSchedule(scheduleId, body)
  .then(function(data) {
    console.log(`putAnalyticsReportingSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putAnalyticsReportingSchedule');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
 **body** | **Object** | ReportSchedule |  |
{: class="table table-striped"}

### Return type

**ReportSchedule**

