---
title: AnalyticsApi
---
# platformClient.AnalyticsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsConversationsDetailsJob**](AnalyticsApi.html#deleteAnalyticsConversationsDetailsJob) | **DELETE** /api/v2/analytics/conversations/details/jobs/{jobId} | Delete/cancel an async request
[**deleteAnalyticsReportingSchedule**](AnalyticsApi.html#deleteAnalyticsReportingSchedule) | **DELETE** /api/v2/analytics/reporting/schedules/{scheduleId} | Delete a scheduled report job.
[**deleteAnalyticsUsersDetailsJob**](AnalyticsApi.html#deleteAnalyticsUsersDetailsJob) | **DELETE** /api/v2/analytics/users/details/jobs/{jobId} | Delete/cancel an async request
[**getAnalyticsConversationDetails**](AnalyticsApi.html#getAnalyticsConversationDetails) | **GET** /api/v2/analytics/conversations/{conversationId}/details | Get a conversation by id
[**getAnalyticsConversationsDetails**](AnalyticsApi.html#getAnalyticsConversationsDetails) | **GET** /api/v2/analytics/conversations/details | Gets multiple conversations by id
[**getAnalyticsConversationsDetailsJob**](AnalyticsApi.html#getAnalyticsConversationsDetailsJob) | **GET** /api/v2/analytics/conversations/details/jobs/{jobId} | Get status for async query for conversation details
[**getAnalyticsConversationsDetailsJobResults**](AnalyticsApi.html#getAnalyticsConversationsDetailsJobResults) | **GET** /api/v2/analytics/conversations/details/jobs/{jobId}/results | Fetch a page of results for an async query
[**getAnalyticsConversationsDetailsJobsAvailability**](AnalyticsApi.html#getAnalyticsConversationsDetailsJobsAvailability) | **GET** /api/v2/analytics/conversations/details/jobs/availability | Lookup the datalake availability date and time
[**getAnalyticsReportingExports**](AnalyticsApi.html#getAnalyticsReportingExports) | **GET** /api/v2/analytics/reporting/exports | Get all view export requests for a user
[**getAnalyticsReportingExportsMetadata**](AnalyticsApi.html#getAnalyticsReportingExportsMetadata) | **GET** /api/v2/analytics/reporting/exports/metadata | Get all export metadata
[**getAnalyticsReportingMetadata**](AnalyticsApi.html#getAnalyticsReportingMetadata) | **GET** /api/v2/analytics/reporting/metadata | Get list of reporting metadata.
[**getAnalyticsReportingReportIdMetadata**](AnalyticsApi.html#getAnalyticsReportingReportIdMetadata) | **GET** /api/v2/analytics/reporting/{reportId}/metadata | Get a reporting metadata.
[**getAnalyticsReportingReportformats**](AnalyticsApi.html#getAnalyticsReportingReportformats) | **GET** /api/v2/analytics/reporting/reportformats | Get a list of report formats
[**getAnalyticsReportingSchedule**](AnalyticsApi.html#getAnalyticsReportingSchedule) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId} | Get a scheduled report job.
[**getAnalyticsReportingScheduleHistory**](AnalyticsApi.html#getAnalyticsReportingScheduleHistory) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId}/history | Get list of completed scheduled report jobs.
[**getAnalyticsReportingScheduleHistoryLatest**](AnalyticsApi.html#getAnalyticsReportingScheduleHistoryLatest) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId}/history/latest | Get most recently completed scheduled report job.
[**getAnalyticsReportingScheduleHistoryRunId**](AnalyticsApi.html#getAnalyticsReportingScheduleHistoryRunId) | **GET** /api/v2/analytics/reporting/schedules/{scheduleId}/history/{runId} | A completed scheduled report job
[**getAnalyticsReportingSchedules**](AnalyticsApi.html#getAnalyticsReportingSchedules) | **GET** /api/v2/analytics/reporting/schedules | Get a list of scheduled report jobs
[**getAnalyticsReportingTimeperiods**](AnalyticsApi.html#getAnalyticsReportingTimeperiods) | **GET** /api/v2/analytics/reporting/timeperiods | Get a list of report time periods.
[**getAnalyticsUsersDetailsJob**](AnalyticsApi.html#getAnalyticsUsersDetailsJob) | **GET** /api/v2/analytics/users/details/jobs/{jobId} | Get status for async query for user details
[**getAnalyticsUsersDetailsJobResults**](AnalyticsApi.html#getAnalyticsUsersDetailsJobResults) | **GET** /api/v2/analytics/users/details/jobs/{jobId}/results | Fetch a page of results for an async query
[**getAnalyticsUsersDetailsJobsAvailability**](AnalyticsApi.html#getAnalyticsUsersDetailsJobsAvailability) | **GET** /api/v2/analytics/users/details/jobs/availability | Lookup the datalake availability date and time
[**postAnalyticsConversationDetailsProperties**](AnalyticsApi.html#postAnalyticsConversationDetailsProperties) | **POST** /api/v2/analytics/conversations/{conversationId}/details/properties | Index conversation properties
[**postAnalyticsConversationsAggregatesQuery**](AnalyticsApi.html#postAnalyticsConversationsAggregatesQuery) | **POST** /api/v2/analytics/conversations/aggregates/query | Query for conversation aggregates
[**postAnalyticsConversationsDetailsJobs**](AnalyticsApi.html#postAnalyticsConversationsDetailsJobs) | **POST** /api/v2/analytics/conversations/details/jobs | Query for conversation details asynchronously
[**postAnalyticsConversationsDetailsQuery**](AnalyticsApi.html#postAnalyticsConversationsDetailsQuery) | **POST** /api/v2/analytics/conversations/details/query | Query for conversation details
[**postAnalyticsConversationsTranscriptsQuery**](AnalyticsApi.html#postAnalyticsConversationsTranscriptsQuery) | **POST** /api/v2/analytics/conversations/transcripts/query | Search resources.
[**postAnalyticsEvaluationsAggregatesQuery**](AnalyticsApi.html#postAnalyticsEvaluationsAggregatesQuery) | **POST** /api/v2/analytics/evaluations/aggregates/query | Query for evaluation aggregates
[**postAnalyticsFlowsAggregatesQuery**](AnalyticsApi.html#postAnalyticsFlowsAggregatesQuery) | **POST** /api/v2/analytics/flows/aggregates/query | Query for flow aggregates
[**postAnalyticsFlowsObservationsQuery**](AnalyticsApi.html#postAnalyticsFlowsObservationsQuery) | **POST** /api/v2/analytics/flows/observations/query | Query for flow observations
[**postAnalyticsJourneysAggregatesQuery**](AnalyticsApi.html#postAnalyticsJourneysAggregatesQuery) | **POST** /api/v2/analytics/journeys/aggregates/query | Query for journey aggregates
[**postAnalyticsQueuesObservationsQuery**](AnalyticsApi.html#postAnalyticsQueuesObservationsQuery) | **POST** /api/v2/analytics/queues/observations/query | Query for queue observations
[**postAnalyticsReportingExports**](AnalyticsApi.html#postAnalyticsReportingExports) | **POST** /api/v2/analytics/reporting/exports | Generate a view export request
[**postAnalyticsReportingScheduleRunreport**](AnalyticsApi.html#postAnalyticsReportingScheduleRunreport) | **POST** /api/v2/analytics/reporting/schedules/{scheduleId}/runreport | Place a scheduled report immediately into the reporting queue
[**postAnalyticsReportingSchedules**](AnalyticsApi.html#postAnalyticsReportingSchedules) | **POST** /api/v2/analytics/reporting/schedules | Create a scheduled report job
[**postAnalyticsSurveysAggregatesQuery**](AnalyticsApi.html#postAnalyticsSurveysAggregatesQuery) | **POST** /api/v2/analytics/surveys/aggregates/query | Query for survey aggregates
[**postAnalyticsTranscriptsAggregatesQuery**](AnalyticsApi.html#postAnalyticsTranscriptsAggregatesQuery) | **POST** /api/v2/analytics/transcripts/aggregates/query | Query for transcript aggregates
[**postAnalyticsUsersAggregatesQuery**](AnalyticsApi.html#postAnalyticsUsersAggregatesQuery) | **POST** /api/v2/analytics/users/aggregates/query | Query for user aggregates
[**postAnalyticsUsersDetailsJobs**](AnalyticsApi.html#postAnalyticsUsersDetailsJobs) | **POST** /api/v2/analytics/users/details/jobs | Query for user details asynchronously
[**postAnalyticsUsersDetailsQuery**](AnalyticsApi.html#postAnalyticsUsersDetailsQuery) | **POST** /api/v2/analytics/users/details/query | Query for user details
[**postAnalyticsUsersObservationsQuery**](AnalyticsApi.html#postAnalyticsUsersObservationsQuery) | **POST** /api/v2/analytics/users/observations/query | Query for user observations
[**putAnalyticsReportingSchedule**](AnalyticsApi.html#putAnalyticsReportingSchedule) | **PUT** /api/v2/analytics/reporting/schedules/{scheduleId} | Update a scheduled report job.
{: class="table table-striped"}

<a name="deleteAnalyticsConversationsDetailsJob"></a>

# void deleteAnalyticsConversationsDetailsJob(jobId)



DELETE /api/v2/analytics/conversations/details/jobs/{jobId}

Delete/cancel an async request



Requires ANY permissions: 

* analytics:conversationDetail:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsConversationsDetailsJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsConversationsDetailsJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsConversationsDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAnalyticsReportingSchedule"></a>

# void deleteAnalyticsReportingSchedule(scheduleId)



DELETE /api/v2/analytics/reporting/schedules/{scheduleId}

Delete a scheduled report job.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.deleteAnalyticsReportingSchedule(scheduleId)
  .then(() => {
    console.log('deleteAnalyticsReportingSchedule returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsReportingSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteAnalyticsUsersDetailsJob"></a>

# void deleteAnalyticsUsersDetailsJob(jobId)



DELETE /api/v2/analytics/users/details/jobs/{jobId}

Delete/cancel an async request



Requires ANY permissions: 

* analytics:userDetail:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsUsersDetailsJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsUsersDetailsJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsUsersDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAnalyticsConversationDetails"></a>

# AnalyticsConversationWithoutAttributes getAnalyticsConversationDetails(conversationId)



GET /api/v2/analytics/conversations/{conversationId}/details

Get a conversation by id



Requires ANY permissions: 

* analytics:conversationDetail:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getAnalyticsConversationDetails(conversationId)
  .then((data) => {
    console.log(`getAnalyticsConversationDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**AnalyticsConversationWithoutAttributes**

<a name="getAnalyticsConversationsDetails"></a>

# AnalyticsConversationWithoutAttributesMultiGetResponse getAnalyticsConversationsDetails(opts)



GET /api/v2/analytics/conversations/details

Gets multiple conversations by id



Requires ANY permissions: 

* analytics:conversationDetail:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'id': ["id_example"] // [String] | Comma-separated conversation ids
};

apiInstance.getAnalyticsConversationsDetails(opts)
  .then((data) => {
    console.log(`getAnalyticsConversationsDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **id** | **[String]** | Comma-separated conversation ids | [optional]  |
{: class="table table-striped"}

### Return type

**AnalyticsConversationWithoutAttributesMultiGetResponse**

<a name="getAnalyticsConversationsDetailsJob"></a>

# AsyncQueryStatus getAnalyticsConversationsDetailsJob(jobId)



GET /api/v2/analytics/conversations/details/jobs/{jobId}

Get status for async query for conversation details



Requires ANY permissions: 

* analytics:conversationDetail:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsConversationsDetailsJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsConversationsDetailsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsConversationsDetailsJobResults"></a>

# AnalyticsConversationAsyncQueryResponse getAnalyticsConversationsDetailsJobResults(jobId, opts)



GET /api/v2/analytics/conversations/details/jobs/{jobId}/results

Fetch a page of results for an async query



Requires ANY permissions: 

* analytics:conversationDetail:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page)
  'pageSize': 56 // Number | The desired maximum number of results
};

apiInstance.getAnalyticsConversationsDetailsJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsConversationsDetailsJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetailsJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |
 **pageSize** | **Number** | The desired maximum number of results | [optional]  |
{: class="table table-striped"}

### Return type

**AnalyticsConversationAsyncQueryResponse**

<a name="getAnalyticsConversationsDetailsJobsAvailability"></a>

# DataAvailabilityResponse getAnalyticsConversationsDetailsJobsAvailability()



GET /api/v2/analytics/conversations/details/jobs/availability

Lookup the datalake availability date and time



Requires ANY permissions: 

* analytics:conversationDetail:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsConversationsDetailsJobsAvailability()
  .then((data) => {
    console.log(`getAnalyticsConversationsDetailsJobsAvailability success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsConversationsDetailsJobsAvailability');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**DataAvailabilityResponse**

<a name="getAnalyticsReportingExports"></a>

# ReportingExportJobListing getAnalyticsReportingExports(opts)



GET /api/v2/analytics/reporting/exports

Get all view export requests for a user



Requires ALL permissions: 

* analytics:dataExport:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAnalyticsReportingExports(opts)
  .then((data) => {
    console.log(`getAnalyticsReportingExports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
{: class="table table-striped"}

### Return type

**ReportingExportJobListing**

<a name="getAnalyticsReportingExportsMetadata"></a>

# ReportingExportMetadataJobListing getAnalyticsReportingExportsMetadata()



GET /api/v2/analytics/reporting/exports/metadata

Get all export metadata



Requires ALL permissions: 

* analytics:dataExport:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingExportsMetadata()
  .then((data) => {
    console.log(`getAnalyticsReportingExportsMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingExportsMetadata');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**ReportingExportMetadataJobListing**

<a name="getAnalyticsReportingMetadata"></a>

# ReportMetaDataEntityListing getAnalyticsReportingMetadata(opts)



GET /api/v2/analytics/reporting/metadata

Get list of reporting metadata.



Requires ANY permissions: 

* reporting:acd:view, reporting:status:view, reporting:interactions:view, reporting:outbound:view, reporting:quality:view, employee



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25, // Number | Page size
  'locale': "locale_example" // String | Locale
};

apiInstance.getAnalyticsReportingMetadata(opts)
  .then((data) => {
    console.log(`getAnalyticsReportingMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingMetadata');
    console.error(err);
  });
```

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



Requires ANY permissions: 

* reporting:acd:view, reporting:status:view, reporting:interactions:view, reporting:outbound:view, reporting:quality:view, employee



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let reportId = "reportId_example"; // String | Report ID
let opts = { 
  'locale': "locale_example" // String | Locale
};

apiInstance.getAnalyticsReportingReportIdMetadata(reportId, opts)
  .then((data) => {
    console.log(`getAnalyticsReportingReportIdMetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingReportIdMetadata');
    console.error(err);
  });
```

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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingReportformats()
  .then((data) => {
    console.log(`getAnalyticsReportingReportformats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingReportformats');
    console.error(err);
  });
```

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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingSchedule(scheduleId)
  .then((data) => {
    console.log(`getAnalyticsReportingSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSchedule');
    console.error(err);
  });
```

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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID
let opts = { 
  'pageNumber': 1, // Number | 
  'pageSize': 25 // Number | 
};

apiInstance.getAnalyticsReportingScheduleHistory(scheduleId, opts)
  .then((data) => {
    console.log(`getAnalyticsReportingScheduleHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingScheduleHistory');
    console.error(err);
  });
```

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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingScheduleHistoryLatest(scheduleId)
  .then((data) => {
    console.log(`getAnalyticsReportingScheduleHistoryLatest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingScheduleHistoryLatest');
    console.error(err);
  });
```

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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let runId = "runId_example"; // String | Run ID
let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.getAnalyticsReportingScheduleHistoryRunId(runId, scheduleId)
  .then((data) => {
    console.log(`getAnalyticsReportingScheduleHistoryRunId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingScheduleHistoryRunId');
    console.error(err);
  });
```

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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let opts = { 
  'pageNumber': 1, // Number | Page number
  'pageSize': 25 // Number | Page size
};

apiInstance.getAnalyticsReportingSchedules(opts)
  .then((data) => {
    console.log(`getAnalyticsReportingSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingSchedules');
    console.error(err);
  });
```

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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsReportingTimeperiods()
  .then((data) => {
    console.log(`getAnalyticsReportingTimeperiods success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsReportingTimeperiods');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**[&#39;String&#39;]**

<a name="getAnalyticsUsersDetailsJob"></a>

# AsyncQueryStatus getAnalyticsUsersDetailsJob(jobId)



GET /api/v2/analytics/users/details/jobs/{jobId}

Get status for async query for user details



Requires ANY permissions: 

* analytics:userDetail:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsUsersDetailsJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsUsersDetailsJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersDetailsJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

**AsyncQueryStatus**

<a name="getAnalyticsUsersDetailsJobResults"></a>

# AnalyticsUserDetailsAsyncQueryResponse getAnalyticsUsersDetailsJobResults(jobId, opts)



GET /api/v2/analytics/users/details/jobs/{jobId}/results

Fetch a page of results for an async query



Requires ANY permissions: 

* analytics:userDetail:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page)
  'pageSize': 56 // Number | The desired maximum number of results
};

apiInstance.getAnalyticsUsersDetailsJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsUsersDetailsJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersDetailsJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |
 **pageSize** | **Number** | The desired maximum number of results | [optional]  |
{: class="table table-striped"}

### Return type

**AnalyticsUserDetailsAsyncQueryResponse**

<a name="getAnalyticsUsersDetailsJobsAvailability"></a>

# DataAvailabilityResponse getAnalyticsUsersDetailsJobsAvailability()



GET /api/v2/analytics/users/details/jobs/availability

Lookup the datalake availability date and time



Requires ANY permissions: 

* analytics:userDetail:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

apiInstance.getAnalyticsUsersDetailsJobsAvailability()
  .then((data) => {
    console.log(`getAnalyticsUsersDetailsJobsAvailability success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsUsersDetailsJobsAvailability');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**DataAvailabilityResponse**

<a name="postAnalyticsConversationDetailsProperties"></a>

# PropertyIndexRequest postAnalyticsConversationDetailsProperties(conversationId, body)



POST /api/v2/analytics/conversations/{conversationId}/details/properties

Index conversation properties



Requires ANY permissions: 

* analytics:conversationProperties:index


### Request Body Schema

<script type="text/javascript">
	function copyPropertyIndexRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#PropertyIndexRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

PropertyIndexRequest <a href="#" onclick="return copyPropertyIndexRequestExample()">Copy</a>

<div id="PropertyIndexRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sessionId": String, 
  "targetDate": Date, 
  "properties": { 
    "propertyType": String, 
    "property": String, 
    "value": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let conversationId = "conversationId_example"; // String | conversationId
let body = {}; // Object | request

apiInstance.postAnalyticsConversationDetailsProperties(conversationId, body)
  .then((data) => {
    console.log(`postAnalyticsConversationDetailsProperties success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationDetailsProperties');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | request |  |
{: class="table table-striped"}

### Return type

**PropertyIndexRequest**

<a name="postAnalyticsConversationsAggregatesQuery"></a>

# ConversationAggregateQueryResponse postAnalyticsConversationsAggregatesQuery(body)



POST /api/v2/analytics/conversations/aggregates/query

Query for conversation aggregates



Requires ANY permissions: 

* analytics:conversationAggregate:view


### Request Body Schema

<script type="text/javascript">
	function copyConversationAggregationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ConversationAggregationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ConversationAggregationQuery <a href="#" onclick="return copyConversationAggregationQueryExample()">Copy</a>

<div id="ConversationAggregationQueryExample">

```{"language":"json", "maxHeight": "250px"}
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
  "alternateTimeDimension": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**ConversationAggregateQueryResponse**

<a name="postAnalyticsConversationsDetailsJobs"></a>

# AsyncQueryResponse postAnalyticsConversationsDetailsJobs(body)



POST /api/v2/analytics/conversations/details/jobs

Query for conversation details asynchronously



Requires ANY permissions: 

* analytics:conversationDetail:view


### Request Body Schema

<script type="text/javascript">
	function copyAsyncConversationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#AsyncConversationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

AsyncConversationQuery <a href="#" onclick="return copyAsyncConversationQueryExample()">Copy</a>

<div id="AsyncConversationQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "conversationFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
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
  "evaluationFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
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
  "order": String, 
  "orderBy": String, 
  "interval": String, 
  "limit": Number, 
  "startOfDayIntervalMatching": Boolean, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsDetailsJobs(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsDetailsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsDetailsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsConversationsDetailsQuery"></a>

# AnalyticsConversationQueryResponse postAnalyticsConversationsDetailsQuery(body)



POST /api/v2/analytics/conversations/details/query

Query for conversation details



Requires ANY permissions: 

* analytics:conversationDetail:view


### Request Body Schema

<script type="text/javascript">
	function copyConversationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ConversationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ConversationQuery <a href="#" onclick="return copyConversationQueryExample()">Copy</a>

<div id="ConversationQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "conversationFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
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
  "evaluationFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
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
  "order": String, 
  "orderBy": String, 
  "interval": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsConversationsDetailsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsDetailsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AnalyticsConversationQueryResponse**

<a name="postAnalyticsConversationsTranscriptsQuery"></a>

# AnalyticsConversationWithoutAttributesMultiGetResponse postAnalyticsConversationsTranscriptsQuery(body)



POST /api/v2/analytics/conversations/transcripts/query

Search resources.



Requires ANY permissions: 

* analytics:conversationDetail:view


### Request Body Schema

<script type="text/javascript">
	function copyTranscriptConversationDetailSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#TranscriptConversationDetailSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

TranscriptConversationDetailSearchRequest <a href="#" onclick="return copyTranscriptConversationDetailSearchRequestExample()">Copy</a>

<div id="TranscriptConversationDetailSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "types": [String], 
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [TranscriptConversationDetailSearchCriteria], 
                "dateFormat": String, 
                "type": String, 
              },  
              "dateFormat": String, 
              "type": String, 
            },  
            "dateFormat": String, 
            "type": String, 
          },  
          "dateFormat": String, 
          "type": String, 
        },  
        "dateFormat": String, 
        "type": String, 
      },  
      "dateFormat": String, 
      "type": String, 
    },  
    "dateFormat": String, 
    "type": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | Search request options

apiInstance.postAnalyticsConversationsTranscriptsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsConversationsTranscriptsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsConversationsTranscriptsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**AnalyticsConversationWithoutAttributesMultiGetResponse**

<a name="postAnalyticsEvaluationsAggregatesQuery"></a>

# EvaluationAggregateQueryResponse postAnalyticsEvaluationsAggregatesQuery(body)



POST /api/v2/analytics/evaluations/aggregates/query

Query for evaluation aggregates



Requires ANY permissions: 

* analytics:evaluationAggregate:view


### Request Body Schema

<script type="text/javascript">
	function copyEvaluationAggregationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#EvaluationAggregationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

EvaluationAggregationQuery <a href="#" onclick="return copyEvaluationAggregationQueryExample()">Copy</a>

<div id="EvaluationAggregationQueryExample">

```{"language":"json", "maxHeight": "250px"}
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
  "alternateTimeDimension": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsEvaluationsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsEvaluationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsEvaluationsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**EvaluationAggregateQueryResponse**

<a name="postAnalyticsFlowsAggregatesQuery"></a>

# FlowAggregateQueryResponse postAnalyticsFlowsAggregatesQuery(body)



POST /api/v2/analytics/flows/aggregates/query

Query for flow aggregates



Requires ANY permissions: 

* analytics:flowAggregate:view


### Request Body Schema

<script type="text/javascript">
	function copyFlowAggregationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#FlowAggregationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

FlowAggregationQuery <a href="#" onclick="return copyFlowAggregationQueryExample()">Copy</a>

<div id="FlowAggregationQueryExample">

```{"language":"json", "maxHeight": "250px"}
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
  "alternateTimeDimension": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsFlowsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsFlowsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsFlowsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**FlowAggregateQueryResponse**

<a name="postAnalyticsFlowsObservationsQuery"></a>

# FlowObservationQueryResponse postAnalyticsFlowsObservationsQuery(body)



POST /api/v2/analytics/flows/observations/query

Query for flow observations



Requires ANY permissions: 

* analytics:flowObservation:view


### Request Body Schema

<script type="text/javascript">
	function copyFlowObservationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#FlowObservationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

FlowObservationQuery <a href="#" onclick="return copyFlowObservationQueryExample()">Copy</a>

<div id="FlowObservationQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
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
  "detailMetrics": [String], 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsFlowsObservationsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsFlowsObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsFlowsObservationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**FlowObservationQueryResponse**

<a name="postAnalyticsJourneysAggregatesQuery"></a>

# JourneyAggregateQueryResponse postAnalyticsJourneysAggregatesQuery(body)



POST /api/v2/analytics/journeys/aggregates/query

Query for journey aggregates



Requires ANY permissions: 

* analytics:journeyAggregate:view


### Request Body Schema

<script type="text/javascript">
	function copyJourneyAggregationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#JourneyAggregationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

JourneyAggregationQuery <a href="#" onclick="return copyJourneyAggregationQueryExample()">Copy</a>

<div id="JourneyAggregationQueryExample">

```{"language":"json", "maxHeight": "250px"}
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
  "alternateTimeDimension": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsJourneysAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsJourneysAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsJourneysAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**JourneyAggregateQueryResponse**

<a name="postAnalyticsQueuesObservationsQuery"></a>

# QueueObservationQueryResponse postAnalyticsQueuesObservationsQuery(body)



POST /api/v2/analytics/queues/observations/query

Query for queue observations



Requires ANY permissions: 

* analytics:queueObservation:view


### Request Body Schema

<script type="text/javascript">
	function copyQueueObservationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#QueueObservationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

QueueObservationQuery <a href="#" onclick="return copyQueueObservationQueryExample()">Copy</a>

<div id="QueueObservationQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
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
  "detailMetrics": [String], 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsQueuesObservationsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsQueuesObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsQueuesObservationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**QueueObservationQueryResponse**

<a name="postAnalyticsReportingExports"></a>

# ReportingExportJobResponse postAnalyticsReportingExports(body)



POST /api/v2/analytics/reporting/exports

Generate a view export request

This API creates a reporting export but the desired way to export analytics data is to use the analytics query APIs instead

Requires ALL permissions: 

* analytics:dataExport:add


### Request Body Schema

<script type="text/javascript">
	function copyReportingExportJobRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ReportingExportJobRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ReportingExportJobRequest <a href="#" onclick="return copyReportingExportJobRequestExample()">Copy</a>

<div id="ReportingExportJobRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "timeZone": String, 
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
    "originatingDirections": [String], 
    "wrapUpCodes": [String], 
    "dnisList": [String], 
    "sessionDnisList": [String], 
    "filterQueuesByUserIds": [String], 
    "filterUsersByQueueIds": [String], 
    "userIds": [String], 
    "addressTos": [String], 
    "addressFroms": [String], 
    "outboundCampaignIds": [String], 
    "outboundContactListIds": [String], 
    "contactIds": [String], 
    "externalContactIds": [String], 
    "externalOrgIds": [String], 
    "aniList": [String], 
    "durationsMilliseconds": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "acdDurationsMilliseconds": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "talkDurationsMilliseconds": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "acwDurationsMilliseconds": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "handleDurationsMilliseconds": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "holdDurationsMilliseconds": { 
      "gt": Number, 
      "gte": Number, 
      "lt": Number, 
      "lte": Number, 
    },  
    "abandonDurationsMilliseconds": { 
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
    "answered": Boolean, 
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
    "sipCallIds": [String], 
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
      "isPreferred": Boolean, 
      "isScreenshare": Boolean, 
      "isCobrowse": Boolean, 
      "isVoicemail": Boolean, 
      "isFlagged": Boolean, 
      "isMonitored": Boolean, 
      "filterWrapUpNotes": Boolean, 
      "matchAll": Boolean, 
    },  
    "isBlindTransferred": Boolean, 
    "isConsulted": Boolean, 
    "isConsultTransferred": Boolean, 
    "remoteParticipants": [String], 
    "flowIds": [String], 
    "flowOutcomeIds": [String], 
    "flowOutcomeValues": [String], 
    "flowDestinationTypes": [String], 
    "flowDisconnectReasons": [String], 
    "flowTypes": [String], 
    "flowEntryTypes": [String], 
    "flowEntryReasons": [String], 
    "flowVersions": [String], 
    "groupIds": [String], 
    "hasJourneyCustomerId": Boolean, 
    "hasJourneyActionMapId": Boolean, 
    "hasJourneyVisitId": Boolean, 
    "hasMedia": Boolean, 
    "roleIds": [String], 
    "reportsTos": [String], 
    "locationIds": [String], 
    "flowOutTypes": [String], 
    "providerList": [String], 
    "callbackNumberList": [String], 
    "callbackInterval": String, 
    "usedRoutingTypes": [String], 
    "requestedRoutingTypes": [String], 
    "hasAgentAssistId": Boolean, 
    "transcripts": { 
      "exactMatch": [String], 
      "contains": [String], 
      "doesNotContain": [String], 
    },  
    "transcriptLanguages": [String], 
    "participantPurposes": [String], 
    "showFirstQueue": Boolean, 
    "teamIds": [String], 
    "filterUsersByTeamIds": [String], 
    "journeyActionMapIds": [String], 
    "journeyOutcomeIds": [String], 
    "journeySegmentIds": [String], 
    "journeyActionMapTypes": [String], 
  },  
  "read": Boolean, 
  "locale": String, 
  "hasFormatDurations": Boolean, 
  "hasSplitFilters": Boolean, 
  "excludeEmptyRows": Boolean, 
  "hasSplitByMedia": Boolean, 
  "hasSummaryRow": Boolean, 
  "csvDelimiter": String, 
  "selectedColumns": { 
    "columnOrder": Number, 
    "columnName": String, 
  },  
  "hasCustomParticipantAttributes": Boolean, 
  "recipientEmails": [String], 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | ReportingExportJobRequest

apiInstance.postAnalyticsReportingExports(body)
  .then((data) => {
    console.log(`postAnalyticsReportingExports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingExports');
    console.error(err);
  });
```

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

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID

apiInstance.postAnalyticsReportingScheduleRunreport(scheduleId)
  .then((data) => {
    console.log(`postAnalyticsReportingScheduleRunreport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingScheduleRunreport');
    console.error(err);
  });
```

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

Requires ANY permissions: 

* reporting:acd:view, reporting:status:view, reporting:interactions:view, reporting:outbound:view, reporting:quality:view, employee


### Request Body Schema

<script type="text/javascript">
	function copyReportScheduleExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ReportScheduleExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ReportSchedule <a href="#" onclick="return copyReportScheduleExample()">Copy</a>

<div id="ReportScheduleExample">

```{"language":"json", "maxHeight": "250px"}
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | ReportSchedule

apiInstance.postAnalyticsReportingSchedules(body)
  .then((data) => {
    console.log(`postAnalyticsReportingSchedules success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsReportingSchedules');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ReportSchedule |  |
{: class="table table-striped"}

### Return type

**ReportSchedule**

<a name="postAnalyticsSurveysAggregatesQuery"></a>

# SurveyAggregateQueryResponse postAnalyticsSurveysAggregatesQuery(body)



POST /api/v2/analytics/surveys/aggregates/query

Query for survey aggregates



Requires ANY permissions: 

* analytics:surveyAggregate:view


### Request Body Schema

<script type="text/javascript">
	function copySurveyAggregationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#SurveyAggregationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

SurveyAggregationQuery <a href="#" onclick="return copySurveyAggregationQueryExample()">Copy</a>

<div id="SurveyAggregationQueryExample">

```{"language":"json", "maxHeight": "250px"}
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
  "alternateTimeDimension": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsSurveysAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsSurveysAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsSurveysAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**SurveyAggregateQueryResponse**

<a name="postAnalyticsTranscriptsAggregatesQuery"></a>

# TranscriptAggregateQueryResponse postAnalyticsTranscriptsAggregatesQuery(body)



POST /api/v2/analytics/transcripts/aggregates/query

Query for transcript aggregates



Requires ANY permissions: 

* analytics:speechAndTextAnalyticsAggregates:view


### Request Body Schema

<script type="text/javascript">
	function copyTranscriptAggregationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#TranscriptAggregationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

TranscriptAggregationQuery <a href="#" onclick="return copyTranscriptAggregationQueryExample()">Copy</a>

<div id="TranscriptAggregationQueryExample">

```{"language":"json", "maxHeight": "250px"}
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
  "alternateTimeDimension": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsTranscriptsAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsTranscriptsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsTranscriptsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**TranscriptAggregateQueryResponse**

<a name="postAnalyticsUsersAggregatesQuery"></a>

# UserAggregateQueryResponse postAnalyticsUsersAggregatesQuery(body)



POST /api/v2/analytics/users/aggregates/query

Query for user aggregates



Requires ANY permissions: 

* analytics:userAggregate:view


### Request Body Schema

<script type="text/javascript">
	function copyUserAggregationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserAggregationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserAggregationQuery <a href="#" onclick="return copyUserAggregationQueryExample()">Copy</a>

<div id="UserAggregationQueryExample">

```{"language":"json", "maxHeight": "250px"}
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
  "alternateTimeDimension": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersAggregatesQuery(body)
  .then((data) => {
    console.log(`postAnalyticsUsersAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UserAggregateQueryResponse**

<a name="postAnalyticsUsersDetailsJobs"></a>

# AsyncQueryResponse postAnalyticsUsersDetailsJobs(body)



POST /api/v2/analytics/users/details/jobs

Query for user details asynchronously



Requires ANY permissions: 

* analytics:userDetail:view


### Request Body Schema

<script type="text/javascript">
	function copyAsyncUserDetailsQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#AsyncUserDetailsQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

AsyncUserDetailsQuery <a href="#" onclick="return copyAsyncUserDetailsQueryExample()">Copy</a>

<div id="AsyncUserDetailsQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "interval": String, 
  "userFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
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
  "order": String, 
  "limit": Number, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersDetailsJobs(body)
  .then((data) => {
    console.log(`postAnalyticsUsersDetailsJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersDetailsJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AsyncQueryResponse**

<a name="postAnalyticsUsersDetailsQuery"></a>

# AnalyticsUserDetailsQueryResponse postAnalyticsUsersDetailsQuery(body)



POST /api/v2/analytics/users/details/query

Query for user details



Requires ANY permissions: 

* analytics:userObservation:view


### Request Body Schema

<script type="text/javascript">
	function copyUserDetailsQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserDetailsQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserDetailsQuery <a href="#" onclick="return copyUserDetailsQueryExample()">Copy</a>

<div id="UserDetailsQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "interval": String, 
  "userFilters": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
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
  "order": String, 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersDetailsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsUsersDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersDetailsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AnalyticsUserDetailsQueryResponse**

<a name="postAnalyticsUsersObservationsQuery"></a>

# UserObservationQueryResponse postAnalyticsUsersObservationsQuery(body)



POST /api/v2/analytics/users/observations/query

Query for user observations



Requires ANY permissions: 

* analytics:userObservation:view


### Request Body Schema

<script type="text/javascript">
	function copyUserObservationQueryExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#UserObservationQueryExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

UserObservationQuery <a href="#" onclick="return copyUserObservationQueryExample()">Copy</a>

<div id="UserObservationQueryExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "filter": { 
    "type": String, 
    "clauses": { 
      "type": String, 
      "predicates": { 
        "type": String, 
        "dimension": String, 
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
  "detailMetrics": [String], 
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

let apiInstance = new platformClient.AnalyticsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsUsersObservationsQuery(body)
  .then((data) => {
    console.log(`postAnalyticsUsersObservationsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsUsersObservationsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**UserObservationQueryResponse**

<a name="putAnalyticsReportingSchedule"></a>

# ReportSchedule putAnalyticsReportingSchedule(scheduleId, body)



PUT /api/v2/analytics/reporting/schedules/{scheduleId}

Update a scheduled report job.



Requires ANY permissions: 

* reporting:acd:view, reporting:status:view, reporting:interactions:view, reporting:outbound:view, reporting:quality:view, employee


### Request Body Schema

<script type="text/javascript">
	function copyReportScheduleExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#ReportScheduleExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

ReportSchedule <a href="#" onclick="return copyReportScheduleExample()">Copy</a>

<div id="ReportScheduleExample">

```{"language":"json", "maxHeight": "250px"}
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

let apiInstance = new platformClient.AnalyticsApi();

let scheduleId = "scheduleId_example"; // String | Schedule ID
let body = {}; // Object | ReportSchedule

apiInstance.putAnalyticsReportingSchedule(scheduleId, body)
  .then((data) => {
    console.log(`putAnalyticsReportingSchedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putAnalyticsReportingSchedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduleId** | **String** | Schedule ID |  |
 **body** | **Object** | ReportSchedule |  |
{: class="table table-striped"}

### Return type

**ReportSchedule**

