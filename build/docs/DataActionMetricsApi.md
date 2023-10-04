---
title: DataActionMetricsApi
---
# platformClient.DataActionMetricsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getIntegrationsActionsMetricsQueriesDurationQueryId**](DataActionMetricsApi.html#getIntegrationsActionsMetricsQueriesDurationQueryId) | **GET** /api/v2/integrations/actions/metrics/queries/duration/{queryId} | Gets the status of a duration query
[**getIntegrationsActionsMetricsQueriesDurationQueryIdResults**](DataActionMetricsApi.html#getIntegrationsActionsMetricsQueriesDurationQueryIdResults) | **GET** /api/v2/integrations/actions/metrics/queries/duration/{queryId}/results | Gets the results of a duration query
[**getIntegrationsActionsMetricsQueriesExecutioncountQueryId**](DataActionMetricsApi.html#getIntegrationsActionsMetricsQueriesExecutioncountQueryId) | **GET** /api/v2/integrations/actions/metrics/queries/executioncount/{queryId} | Gets the status of an execution count query
[**getIntegrationsActionsMetricsQueriesExecutioncountQueryIdResults**](DataActionMetricsApi.html#getIntegrationsActionsMetricsQueriesExecutioncountQueryIdResults) | **GET** /api/v2/integrations/actions/metrics/queries/executioncount/{queryId}/results | Gets the results of an execution count query
[**getIntegrationsActionsMetricsQueriesResponsecodeQueryId**](DataActionMetricsApi.html#getIntegrationsActionsMetricsQueriesResponsecodeQueryId) | **GET** /api/v2/integrations/actions/metrics/queries/responsecode/{queryId} | Gets the status of a response code query
[**getIntegrationsActionsMetricsQueriesResponsecodeQueryIdResults**](DataActionMetricsApi.html#getIntegrationsActionsMetricsQueriesResponsecodeQueryIdResults) | **GET** /api/v2/integrations/actions/metrics/queries/responsecode/{queryId}/results | Gets the results of a response code query
[**postIntegrationsActionsMetricsQueriesDuration**](DataActionMetricsApi.html#postIntegrationsActionsMetricsQueriesDuration) | **POST** /api/v2/integrations/actions/metrics/queries/duration | Start a query to get duration information about executions within a certain time range
[**postIntegrationsActionsMetricsQueriesExecutioncount**](DataActionMetricsApi.html#postIntegrationsActionsMetricsQueriesExecutioncount) | **POST** /api/v2/integrations/actions/metrics/queries/executioncount | Start a query to count of all executions within a certain time range
[**postIntegrationsActionsMetricsQueriesResponsecode**](DataActionMetricsApi.html#postIntegrationsActionsMetricsQueriesResponsecode) | **POST** /api/v2/integrations/actions/metrics/queries/responsecode | Start a query to count of all executions within a certain time range grouped by what response code they returned
{: class="table table-striped"}

<a name="getIntegrationsActionsMetricsQueriesDurationQueryId"></a>

# QueryStatusResponse getIntegrationsActionsMetricsQueriesDurationQueryId(queryId)


GET /api/v2/integrations/actions/metrics/queries/duration/{queryId}

Gets the status of a duration query

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataActionMetricsApi();

let queryId = "queryId_example"; // String | Id of the query

apiInstance.getIntegrationsActionsMetricsQueriesDurationQueryId(queryId)
  .then((data) => {
    console.log(`getIntegrationsActionsMetricsQueriesDurationQueryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsMetricsQueriesDurationQueryId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queryId** | **String** | Id of the query |  |
{: class="table table-striped"}

### Return type

**QueryStatusResponse**

<a name="getIntegrationsActionsMetricsQueriesDurationQueryIdResults"></a>

# AggregateDurationResponse getIntegrationsActionsMetricsQueriesDurationQueryIdResults(queryId, opts)


GET /api/v2/integrations/actions/metrics/queries/duration/{queryId}/results

Gets the results of a duration query

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataActionMetricsApi();

let queryId = "queryId_example"; // String | Id of the query
let opts = { 
  'nextToken': "nextToken_example", // String | Token for next page of results
  'pageSize': "pageSize_example" // String | Indicates how large of a response should be returned. Allowed values are 1 up to 999
};

apiInstance.getIntegrationsActionsMetricsQueriesDurationQueryIdResults(queryId, opts)
  .then((data) => {
    console.log(`getIntegrationsActionsMetricsQueriesDurationQueryIdResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsMetricsQueriesDurationQueryIdResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queryId** | **String** | Id of the query |  |
 **nextToken** | **String** | Token for next page of results | [optional]  |
 **pageSize** | **String** | Indicates how large of a response should be returned. Allowed values are 1 up to 999 | [optional]  |
{: class="table table-striped"}

### Return type

**AggregateDurationResponse**

<a name="getIntegrationsActionsMetricsQueriesExecutioncountQueryId"></a>

# QueryStatusResponse getIntegrationsActionsMetricsQueriesExecutioncountQueryId(queryId)


GET /api/v2/integrations/actions/metrics/queries/executioncount/{queryId}

Gets the status of an execution count query

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataActionMetricsApi();

let queryId = "queryId_example"; // String | Id of the query

apiInstance.getIntegrationsActionsMetricsQueriesExecutioncountQueryId(queryId)
  .then((data) => {
    console.log(`getIntegrationsActionsMetricsQueriesExecutioncountQueryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsMetricsQueriesExecutioncountQueryId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queryId** | **String** | Id of the query |  |
{: class="table table-striped"}

### Return type

**QueryStatusResponse**

<a name="getIntegrationsActionsMetricsQueriesExecutioncountQueryIdResults"></a>

# AggregateExecutionCountResponse getIntegrationsActionsMetricsQueriesExecutioncountQueryIdResults(queryId, opts)


GET /api/v2/integrations/actions/metrics/queries/executioncount/{queryId}/results

Gets the results of an execution count query

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataActionMetricsApi();

let queryId = "queryId_example"; // String | Id of the query
let opts = { 
  'nextToken': "nextToken_example", // String | Token for next page of results
  'pageSize': "pageSize_example" // String | Indicates how large of a response should be returned. Allowed values are 1 up to 999
};

apiInstance.getIntegrationsActionsMetricsQueriesExecutioncountQueryIdResults(queryId, opts)
  .then((data) => {
    console.log(`getIntegrationsActionsMetricsQueriesExecutioncountQueryIdResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsMetricsQueriesExecutioncountQueryIdResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queryId** | **String** | Id of the query |  |
 **nextToken** | **String** | Token for next page of results | [optional]  |
 **pageSize** | **String** | Indicates how large of a response should be returned. Allowed values are 1 up to 999 | [optional]  |
{: class="table table-striped"}

### Return type

**AggregateExecutionCountResponse**

<a name="getIntegrationsActionsMetricsQueriesResponsecodeQueryId"></a>

# QueryStatusResponse getIntegrationsActionsMetricsQueriesResponsecodeQueryId(queryId)


GET /api/v2/integrations/actions/metrics/queries/responsecode/{queryId}

Gets the status of a response code query

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataActionMetricsApi();

let queryId = "queryId_example"; // String | Id of the query

apiInstance.getIntegrationsActionsMetricsQueriesResponsecodeQueryId(queryId)
  .then((data) => {
    console.log(`getIntegrationsActionsMetricsQueriesResponsecodeQueryId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsMetricsQueriesResponsecodeQueryId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queryId** | **String** | Id of the query |  |
{: class="table table-striped"}

### Return type

**QueryStatusResponse**

<a name="getIntegrationsActionsMetricsQueriesResponsecodeQueryIdResults"></a>

# AggregateResponseCodeResponse getIntegrationsActionsMetricsQueriesResponsecodeQueryIdResults(queryId, opts)


GET /api/v2/integrations/actions/metrics/queries/responsecode/{queryId}/results

Gets the results of a response code query

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataActionMetricsApi();

let queryId = "queryId_example"; // String | Id of the query
let opts = { 
  'nextToken': "nextToken_example", // String | Token for next page of results
  'pageSize': "pageSize_example" // String | Indicates how large of a response should be returned. Allowed values are 1 up to 999
};

apiInstance.getIntegrationsActionsMetricsQueriesResponsecodeQueryIdResults(queryId, opts)
  .then((data) => {
    console.log(`getIntegrationsActionsMetricsQueriesResponsecodeQueryIdResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getIntegrationsActionsMetricsQueriesResponsecodeQueryIdResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queryId** | **String** | Id of the query |  |
 **nextToken** | **String** | Token for next page of results | [optional]  |
 **pageSize** | **String** | Indicates how large of a response should be returned. Allowed values are 1 up to 999 | [optional]  |
{: class="table table-striped"}

### Return type

**AggregateResponseCodeResponse**

<a name="postIntegrationsActionsMetricsQueriesDuration"></a>

# QueryPostResponse postIntegrationsActionsMetricsQueriesDuration(body)


POST /api/v2/integrations/actions/metrics/queries/duration

Start a query to get duration information about executions within a certain time range

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataActionMetricsApi();

let body = {}; // Object | 

apiInstance.postIntegrationsActionsMetricsQueriesDuration(body)
  .then((data) => {
    console.log(`postIntegrationsActionsMetricsQueriesDuration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionsMetricsQueriesDuration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**QueryPostResponse**

<a name="postIntegrationsActionsMetricsQueriesExecutioncount"></a>

# QueryPostResponse postIntegrationsActionsMetricsQueriesExecutioncount(body)


POST /api/v2/integrations/actions/metrics/queries/executioncount

Start a query to count of all executions within a certain time range

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataActionMetricsApi();

let body = {}; // Object | 

apiInstance.postIntegrationsActionsMetricsQueriesExecutioncount(body)
  .then((data) => {
    console.log(`postIntegrationsActionsMetricsQueriesExecutioncount success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionsMetricsQueriesExecutioncount');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**QueryPostResponse**

<a name="postIntegrationsActionsMetricsQueriesResponsecode"></a>

# QueryPostResponse postIntegrationsActionsMetricsQueriesResponsecode(body)


POST /api/v2/integrations/actions/metrics/queries/responsecode

Start a query to count of all executions within a certain time range grouped by what response code they returned

Requires ANY permissions:

* integrations:action:view
* bridge:actions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.DataActionMetricsApi();

let body = {}; // Object | 

apiInstance.postIntegrationsActionsMetricsQueriesResponsecode(body)
  .then((data) => {
    console.log(`postIntegrationsActionsMetricsQueriesResponsecode success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postIntegrationsActionsMetricsQueriesResponsecode');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |
{: class="table table-striped"}

### Return type

**QueryPostResponse**

