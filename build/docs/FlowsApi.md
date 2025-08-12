# FlowsApi

# platformClient.FlowsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteAnalyticsFlowsAggregatesJob**](FlowsApi#deleteAnalyticsFlowsAggregatesJob) | **DELETE** /api/v2/analytics/flows/aggregates/jobs/{jobId} | Delete/cancel an async request for flow aggregates
[**getAnalyticsFlowsAggregatesJob**](FlowsApi#getAnalyticsFlowsAggregatesJob) | **GET** /api/v2/analytics/flows/aggregates/jobs/{jobId} | Get status for async query for Flow aggregates
[**getAnalyticsFlowsAggregatesJobResults**](FlowsApi#getAnalyticsFlowsAggregatesJobResults) | **GET** /api/v2/analytics/flows/aggregates/jobs/{jobId}/results | Fetch a page of results for an async aggregates query
[**postAnalyticsFlowsActivityQuery**](FlowsApi#postAnalyticsFlowsActivityQuery) | **POST** /api/v2/analytics/flows/activity/query | Query for flow activity observations
[**postAnalyticsFlowsAggregatesJobs**](FlowsApi#postAnalyticsFlowsAggregatesJobs) | **POST** /api/v2/analytics/flows/aggregates/jobs | Query for flow aggregates asynchronously
[**postAnalyticsFlowsAggregatesQuery**](FlowsApi#postAnalyticsFlowsAggregatesQuery) | **POST** /api/v2/analytics/flows/aggregates/query | Query for flow aggregates
[**postAnalyticsFlowsObservationsQuery**](FlowsApi#postAnalyticsFlowsObservationsQuery) | **POST** /api/v2/analytics/flows/observations/query | Query for flow observations



## deleteAnalyticsFlowsAggregatesJob

> void deleteAnalyticsFlowsAggregatesJob(jobId)


DELETE /api/v2/analytics/flows/aggregates/jobs/{jobId}

Delete/cancel an async request for flow aggregates

deleteAnalyticsFlowsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FlowsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteAnalyticsFlowsAggregatesJob(jobId)
  .then(() => {
    console.log('deleteAnalyticsFlowsAggregatesJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteAnalyticsFlowsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## getAnalyticsFlowsAggregatesJob

> AsyncQueryStatus getAnalyticsFlowsAggregatesJob(jobId)


GET /api/v2/analytics/flows/aggregates/jobs/{jobId}

Get status for async query for Flow aggregates

getAnalyticsFlowsAggregatesJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FlowsApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getAnalyticsFlowsAggregatesJob(jobId)
  .then((data) => {
    console.log(`getAnalyticsFlowsAggregatesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsFlowsAggregatesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**AsyncQueryStatus**


## getAnalyticsFlowsAggregatesJobResults

> FlowAsyncAggregateQueryResponse getAnalyticsFlowsAggregatesJobResults(jobId, opts)


GET /api/v2/analytics/flows/aggregates/jobs/{jobId}/results

Fetch a page of results for an async aggregates query

getAnalyticsFlowsAggregatesJobResults is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FlowsApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'cursor': "cursor_example" // String | Cursor token to retrieve next page
};

apiInstance.getAnalyticsFlowsAggregatesJobResults(jobId, opts)
  .then((data) => {
    console.log(`getAnalyticsFlowsAggregatesJobResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAnalyticsFlowsAggregatesJobResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **cursor** | **String** | Cursor token to retrieve next page | [optional]  |

### Return type

**FlowAsyncAggregateQueryResponse**


## postAnalyticsFlowsActivityQuery

> FlowActivityResponse postAnalyticsFlowsActivityQuery(body, opts)


POST /api/v2/analytics/flows/activity/query

Query for flow activity observations

Requires ANY permissions:

* analytics:flowObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FlowsApi();

let body = {}; // Object | query
let opts = { 
  'pageSize': 3.4, // Number | The desired page size
  'pageNumber': 3.4 // Number | The desired page number
};

apiInstance.postAnalyticsFlowsActivityQuery(body, opts)
  .then((data) => {
    console.log(`postAnalyticsFlowsActivityQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsFlowsActivityQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **pageSize** | **Number** | The desired page size | [optional]  |
 **pageNumber** | **Number** | The desired page number | [optional]  |

### Return type

**FlowActivityResponse**


## postAnalyticsFlowsAggregatesJobs

> AsyncQueryResponse postAnalyticsFlowsAggregatesJobs(body)


POST /api/v2/analytics/flows/aggregates/jobs

Query for flow aggregates asynchronously

postAnalyticsFlowsAggregatesJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* analytics:flowAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FlowsApi();

let body = {}; // Object | query

apiInstance.postAnalyticsFlowsAggregatesJobs(body)
  .then((data) => {
    console.log(`postAnalyticsFlowsAggregatesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAnalyticsFlowsAggregatesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**AsyncQueryResponse**


## postAnalyticsFlowsAggregatesQuery

> FlowAggregateQueryResponse postAnalyticsFlowsAggregatesQuery(body)


POST /api/v2/analytics/flows/aggregates/query

Query for flow aggregates

Requires ANY permissions:

* analytics:flowAggregate:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FlowsApi();

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

### Return type

**FlowAggregateQueryResponse**


## postAnalyticsFlowsObservationsQuery

> FlowObservationQueryResponse postAnalyticsFlowsObservationsQuery(body)


POST /api/v2/analytics/flows/observations/query

Query for flow observations

Requires ANY permissions:

* analytics:flowObservation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.FlowsApi();

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

### Return type

**FlowObservationQueryResponse**


_purecloud-platform-client-v2@229.1.0_
