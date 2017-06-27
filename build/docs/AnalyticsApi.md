---
title: AnalyticsApi
---
# platformClient.AnalyticsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsReportingSchedule**](AnalyticsApi.html#deleteAnalyticsReportingSchedule) | **DELETE** /api/v2/analytics/reporting/schedules/{scheduleId} | Delete a scheduled report job.
[**getAnalyticsConversationDetails**](AnalyticsApi.html#getAnalyticsConversationDetails) | **GET** /api/v2/analytics/conversations/{conversationId}/details | Get a conversation by id
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
[**postAnalyticsQueuesObservationsQuery**](AnalyticsApi.html#postAnalyticsQueuesObservationsQuery) | **POST** /api/v2/analytics/queues/observations/query | Query for queue observations
[**postAnalyticsReportingScheduleRunreport**](AnalyticsApi.html#postAnalyticsReportingScheduleRunreport) | **POST** /api/v2/analytics/reporting/schedules/{scheduleId}/runreport | Place a scheduled report immediately into the reporting queue
[**postAnalyticsReportingSchedules**](AnalyticsApi.html#postAnalyticsReportingSchedules) | **POST** /api/v2/analytics/reporting/schedules | Create a scheduled report job
[**postAnalyticsUsersAggregatesQuery**](AnalyticsApi.html#postAnalyticsUsersAggregatesQuery) | **POST** /api/v2/analytics/users/aggregates/query | Query for user aggregates
[**postAnalyticsUsersDetailsQuery**](AnalyticsApi.html#postAnalyticsUsersDetailsQuery) | **POST** /api/v2/analytics/users/details/query | Query for user details
[**postAnalyticsUsersObservationsQuery**](AnalyticsApi.html#postAnalyticsUsersObservationsQuery) | **POST** /api/v2/analytics/users/observations/query | Query for user observations
[**putAnalyticsReportingSchedule**](AnalyticsApi.html#putAnalyticsReportingSchedule) | **PUT** /api/v2/analytics/reporting/schedules/{scheduleId} | Update a scheduled report job.
{: class="table table-striped"}

<a name="deleteAnalyticsReportingSchedule"></a>

# null deleteAnalyticsReportingSchedule(scheduleId)

DELETE /api/v2/analytics/reporting/schedules/{scheduleId}

Delete a scheduled report job.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.deleteAnalyticsReportingSchedule(scheduleId)
  .then(function() {
    console.log('deleteAnalyticsReportingSchedule returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteAnalyticsReportingSchedule');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String**| Schedule ID |  |
{: class="table table-striped"}

### Return type

null (empty response body)

<a name="getAnalyticsConversationDetails"></a>

# [**AnalyticsConversation**](AnalyticsConversation.html) getAnalyticsConversationDetails(conversationId)

GET /api/v2/analytics/conversations/{conversationId}/details

Get a conversation by id



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var conversationId = "conversationId_example"; // String | conversationId

apiInstance.getAnalyticsConversationDetails(conversationId)
  .then(function(data) {
    console.log(`getAnalyticsConversationDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsConversationDetails');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String**| conversationId |  |
{: class="table table-striped"}

### Return type

[**AnalyticsConversation**](AnalyticsConversation.html)

<a name="getAnalyticsReportingMetadata"></a>

# [**ReportMetaDataEntityListing**](ReportMetaDataEntityListing.html) getAnalyticsReportingMetadata(opts)

GET /api/v2/analytics/reporting/metadata

Get list of reporting metadata.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

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
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsReportingMetadata');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
 **locale** | **String**| Locale | [optional]  |
{: class="table table-striped"}

### Return type

[**ReportMetaDataEntityListing**](ReportMetaDataEntityListing.html)

<a name="getAnalyticsReportingReportIdMetadata"></a>

# [**ReportMetaData**](ReportMetaData.html) getAnalyticsReportingReportIdMetadata(reportId, opts)

GET /api/v2/analytics/reporting/{reportId}/metadata

Get a reporting metadata.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var reportId = "reportId_example"; // String | Report ID

var opts = { 
  'locale': "locale_example" // String | Locale
};
apiInstance.getAnalyticsReportingReportIdMetadata(reportId, opts)
  .then(function(data) {
    console.log(`getAnalyticsReportingReportIdMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsReportingReportIdMetadata');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String**| Report ID |  |
 **locale** | **String**| Locale | [optional]  |
{: class="table table-striped"}

### Return type

[**ReportMetaData**](ReportMetaData.html)

<a name="getAnalyticsReportingReportformats"></a>

# **[&#39;String&#39;]** getAnalyticsReportingReportformats()

GET /api/v2/analytics/reporting/reportformats

Get a list of report formats

Get a list of report formats.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();
apiInstance.getAnalyticsReportingReportformats()
  .then(function(data) {
    console.log(`getAnalyticsReportingReportformats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsReportingReportformats');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="getAnalyticsReportingSchedule"></a>

# [**ReportSchedule**](ReportSchedule.html) getAnalyticsReportingSchedule(scheduleId)

GET /api/v2/analytics/reporting/schedules/{scheduleId}

Get a scheduled report job.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingSchedule(scheduleId)
  .then(function(data) {
    console.log(`getAnalyticsReportingSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsReportingSchedule');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String**| Schedule ID |  |
{: class="table table-striped"}

### Return type

[**ReportSchedule**](ReportSchedule.html)

<a name="getAnalyticsReportingScheduleHistory"></a>

# [**ReportRunEntryEntityDomainListing**](ReportRunEntryEntityDomainListing.html) getAnalyticsReportingScheduleHistory(scheduleId, opts)

GET /api/v2/analytics/reporting/schedules/{scheduleId}/history

Get list of completed scheduled report jobs.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

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
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsReportingScheduleHistory');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String**| Schedule ID |  |
 **pageNumber** | **Number**|  | [optional] [default to 1] |
 **pageSize** | **Number**|  | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

[**ReportRunEntryEntityDomainListing**](ReportRunEntryEntityDomainListing.html)

<a name="getAnalyticsReportingScheduleHistoryLatest"></a>

# [**ReportRunEntry**](ReportRunEntry.html) getAnalyticsReportingScheduleHistoryLatest(scheduleId)

GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/latest

Get most recently completed scheduled report job.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingScheduleHistoryLatest(scheduleId)
  .then(function(data) {
    console.log(`getAnalyticsReportingScheduleHistoryLatest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsReportingScheduleHistoryLatest');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String**| Schedule ID |  |
{: class="table table-striped"}

### Return type

[**ReportRunEntry**](ReportRunEntry.html)

<a name="getAnalyticsReportingScheduleHistoryRunId"></a>

# [**ReportRunEntry**](ReportRunEntry.html) getAnalyticsReportingScheduleHistoryRunId(runId, scheduleId)

GET /api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId}

A completed scheduled report job

A completed scheduled report job.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var runId = "runId_example"; // String | Run ID

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingScheduleHistoryRunId(runId, scheduleId)
  .then(function(data) {
    console.log(`getAnalyticsReportingScheduleHistoryRunId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsReportingScheduleHistoryRunId');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **runId** | **String**| Run ID |  |
 **scheduleId** | **String**| Schedule ID |  |
{: class="table table-striped"}

### Return type

[**ReportRunEntry**](ReportRunEntry.html)

<a name="getAnalyticsReportingSchedules"></a>

# [**ReportScheduleEntityListing**](ReportScheduleEntityListing.html) getAnalyticsReportingSchedules(opts)

GET /api/v2/analytics/reporting/schedules

Get a list of scheduled report jobs

Get a list of scheduled report jobs.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};
apiInstance.getAnalyticsReportingSchedules(opts)
  .then(function(data) {
    console.log(`getAnalyticsReportingSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsReportingSchedules');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number**| Page number | [optional] [default to 1] |
 **pageSize** | **Number**| Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

[**ReportScheduleEntityListing**](ReportScheduleEntityListing.html)

<a name="getAnalyticsReportingTimeperiods"></a>

# **[&#39;String&#39;]** getAnalyticsReportingTimeperiods()

GET /api/v2/analytics/reporting/timeperiods

Get a list of report time periods.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();
apiInstance.getAnalyticsReportingTimeperiods()
  .then(function(data) {
    console.log(`getAnalyticsReportingTimeperiods success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsReportingTimeperiods');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="postAnalyticsConversationDetailsProperties"></a>

# [**PropertyIndexRequest**](PropertyIndexRequest.html) postAnalyticsConversationDetailsProperties(conversationId, body)

POST /api/v2/analytics/conversations/{conversationId}/details/properties

Index conversation properties



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.PropertyIndexRequest(); // PropertyIndexRequest | request

apiInstance.postAnalyticsConversationDetailsProperties(conversationId, body)
  .then(function(data) {
    console.log(`postAnalyticsConversationDetailsProperties success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsConversationDetailsProperties');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String**| conversationId |  |
 **body** | [**PropertyIndexRequest**](PropertyIndexRequest.html)| request |  |
{: class="table table-striped"}

### Return type

[**PropertyIndexRequest**](PropertyIndexRequest.html)

<a name="postAnalyticsConversationsAggregatesQuery"></a>

# [**AggregateQueryResponse**](AggregateQueryResponse.html) postAnalyticsConversationsAggregatesQuery(body)

POST /api/v2/analytics/conversations/aggregates/query

Query for conversation aggregates



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = new platformClient.AggregationQuery(); // AggregationQuery | query

apiInstance.postAnalyticsConversationsAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsConversationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsConversationsAggregatesQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**AggregationQuery**](AggregationQuery.html)| query |  |
{: class="table table-striped"}

### Return type

[**AggregateQueryResponse**](AggregateQueryResponse.html)

<a name="postAnalyticsConversationsDetailsQuery"></a>

# [**AnalyticsConversationQueryResponse**](AnalyticsConversationQueryResponse.html) postAnalyticsConversationsDetailsQuery(body)

POST /api/v2/analytics/conversations/details/query

Query for conversation details



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = new platformClient.ConversationQuery(); // ConversationQuery | query

apiInstance.postAnalyticsConversationsDetailsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsConversationsDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsConversationsDetailsQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ConversationQuery**](ConversationQuery.html)| query |  |
{: class="table table-striped"}

### Return type

[**AnalyticsConversationQueryResponse**](AnalyticsConversationQueryResponse.html)

<a name="postAnalyticsEvaluationsAggregatesQuery"></a>

# [**AggregateQueryResponse**](AggregateQueryResponse.html) postAnalyticsEvaluationsAggregatesQuery(body)

POST /api/v2/analytics/evaluations/aggregates/query

Query for evaluation aggregates



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = new platformClient.AggregationQuery(); // AggregationQuery | query

apiInstance.postAnalyticsEvaluationsAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsEvaluationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsEvaluationsAggregatesQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**AggregationQuery**](AggregationQuery.html)| query |  |
{: class="table table-striped"}

### Return type

[**AggregateQueryResponse**](AggregateQueryResponse.html)

<a name="postAnalyticsQueuesObservationsQuery"></a>

# [**QualifierMappingObservationQueryResponse**](QualifierMappingObservationQueryResponse.html) postAnalyticsQueuesObservationsQuery(body)

POST /api/v2/analytics/queues/observations/query

Query for queue observations



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = new platformClient.ObservationQuery(); // ObservationQuery | query

apiInstance.postAnalyticsQueuesObservationsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsQueuesObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsQueuesObservationsQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ObservationQuery**](ObservationQuery.html)| query |  |
{: class="table table-striped"}

### Return type

[**QualifierMappingObservationQueryResponse**](QualifierMappingObservationQueryResponse.html)

<a name="postAnalyticsReportingScheduleRunreport"></a>

# [**RunNowResponse**](RunNowResponse.html) postAnalyticsReportingScheduleRunreport(scheduleId)

POST /api/v2/analytics/reporting/schedules/{scheduleId}/runreport

Place a scheduled report immediately into the reporting queue



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.postAnalyticsReportingScheduleRunreport(scheduleId)
  .then(function(data) {
    console.log(`postAnalyticsReportingScheduleRunreport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsReportingScheduleRunreport');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String**| Schedule ID |  |
{: class="table table-striped"}

### Return type

[**RunNowResponse**](RunNowResponse.html)

<a name="postAnalyticsReportingSchedules"></a>

# [**ReportSchedule**](ReportSchedule.html) postAnalyticsReportingSchedules(body)

POST /api/v2/analytics/reporting/schedules

Create a scheduled report job

Create a scheduled report job.

### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = new platformClient.ReportSchedule(); // ReportSchedule | ReportSchedule

apiInstance.postAnalyticsReportingSchedules(body)
  .then(function(data) {
    console.log(`postAnalyticsReportingSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsReportingSchedules');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ReportSchedule**](ReportSchedule.html)| ReportSchedule |  |
{: class="table table-striped"}

### Return type

[**ReportSchedule**](ReportSchedule.html)

<a name="postAnalyticsUsersAggregatesQuery"></a>

# [**PresenceQueryResponse**](PresenceQueryResponse.html) postAnalyticsUsersAggregatesQuery(body)

POST /api/v2/analytics/users/aggregates/query

Query for user aggregates



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = new platformClient.AggregationQuery(); // AggregationQuery | query

apiInstance.postAnalyticsUsersAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsUsersAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsUsersAggregatesQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**AggregationQuery**](AggregationQuery.html)| query |  |
{: class="table table-striped"}

### Return type

[**PresenceQueryResponse**](PresenceQueryResponse.html)

<a name="postAnalyticsUsersDetailsQuery"></a>

# [**AnalyticsUserDetailsQueryResponse**](AnalyticsUserDetailsQueryResponse.html) postAnalyticsUsersDetailsQuery(body)

POST /api/v2/analytics/users/details/query

Query for user details



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = new platformClient.UserDetailsQuery(); // UserDetailsQuery | query

apiInstance.postAnalyticsUsersDetailsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsUsersDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsUsersDetailsQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**UserDetailsQuery**](UserDetailsQuery.html)| query |  |
{: class="table table-striped"}

### Return type

[**AnalyticsUserDetailsQueryResponse**](AnalyticsUserDetailsQueryResponse.html)

<a name="postAnalyticsUsersObservationsQuery"></a>

# [**ObservationQueryResponse**](ObservationQueryResponse.html) postAnalyticsUsersObservationsQuery(body)

POST /api/v2/analytics/users/observations/query

Query for user observations



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var body = new platformClient.ObservationQuery(); // ObservationQuery | query

apiInstance.postAnalyticsUsersObservationsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsUsersObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsUsersObservationsQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | [**ObservationQuery**](ObservationQuery.html)| query |  |
{: class="table table-striped"}

### Return type

[**ObservationQueryResponse**](ObservationQueryResponse.html)

<a name="putAnalyticsReportingSchedule"></a>

# [**ReportSchedule**](ReportSchedule.html) putAnalyticsReportingSchedule(scheduleId, body)

PUT /api/v2/analytics/reporting/schedules/{scheduleId}

Update a scheduled report job.



### Example

~~~ javascript
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.AnalyticsApi();

var scheduleId = "scheduleId_example"; // String | Schedule ID

var body = new platformClient.ReportSchedule(); // ReportSchedule | ReportSchedule

apiInstance.putAnalyticsReportingSchedule(scheduleId, body)
  .then(function(data) {
    console.log(`putAnalyticsReportingSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putAnalyticsReportingSchedule');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String**| Schedule ID |  |
 **body** | [**ReportSchedule**](ReportSchedule.html)| ReportSchedule |  |
{: class="table table-striped"}

### Return type

[**ReportSchedule**](ReportSchedule.html)

