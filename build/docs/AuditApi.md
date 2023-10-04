---
title: AuditApi
---
# platformClient.AuditApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getAuditsQueryRealtimeServicemapping**](AuditApi.html#getAuditsQueryRealtimeServicemapping) | **GET** /api/v2/audits/query/realtime/servicemapping | Get service mapping information used in realtime audits.
[**getAuditsQueryServicemapping**](AuditApi.html#getAuditsQueryServicemapping) | **GET** /api/v2/audits/query/servicemapping | Get service mapping information used in audits.
[**getAuditsQueryTransactionId**](AuditApi.html#getAuditsQueryTransactionId) | **GET** /api/v2/audits/query/{transactionId} | Get status of audit query execution
[**getAuditsQueryTransactionIdResults**](AuditApi.html#getAuditsQueryTransactionIdResults) | **GET** /api/v2/audits/query/{transactionId}/results | Get results of audit query
[**postAuditsQuery**](AuditApi.html#postAuditsQuery) | **POST** /api/v2/audits/query | Create audit query execution
[**postAuditsQueryRealtime**](AuditApi.html#postAuditsQueryRealtime) | **POST** /api/v2/audits/query/realtime | This endpoint will only retrieve 14 days worth of audits for certain services. Please use /query to get a full list and older audits.
{: class="table table-striped"}

<a name="getAuditsQueryRealtimeServicemapping"></a>

# AuditQueryServiceMapping getAuditsQueryRealtimeServicemapping()


GET /api/v2/audits/query/realtime/servicemapping

Get service mapping information used in realtime audits.

Requires ALL permissions:

* audits:audit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuditApi();

apiInstance.getAuditsQueryRealtimeServicemapping()
  .then((data) => {
    console.log(`getAuditsQueryRealtimeServicemapping success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuditsQueryRealtimeServicemapping');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**AuditQueryServiceMapping**

<a name="getAuditsQueryServicemapping"></a>

# AuditQueryServiceMapping getAuditsQueryServicemapping()


GET /api/v2/audits/query/servicemapping

Get service mapping information used in audits.

Requires ALL permissions:

* audits:audit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuditApi();

apiInstance.getAuditsQueryServicemapping()
  .then((data) => {
    console.log(`getAuditsQueryServicemapping success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuditsQueryServicemapping');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**AuditQueryServiceMapping**

<a name="getAuditsQueryTransactionId"></a>

# AuditQueryExecutionStatusResponse getAuditsQueryTransactionId(transactionId)


GET /api/v2/audits/query/{transactionId}

Get status of audit query execution

Requires ALL permissions:

* audits:audit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuditApi();

let transactionId = "transactionId_example"; // String | Transaction ID

apiInstance.getAuditsQueryTransactionId(transactionId)
  .then((data) => {
    console.log(`getAuditsQueryTransactionId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuditsQueryTransactionId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transactionId** | **String** | Transaction ID |  |
{: class="table table-striped"}

### Return type

**AuditQueryExecutionStatusResponse**

<a name="getAuditsQueryTransactionIdResults"></a>

# AuditQueryExecutionResultsResponse getAuditsQueryTransactionIdResults(transactionId, opts)


GET /api/v2/audits/query/{transactionId}/results

Get results of audit query

Requires ALL permissions:

* audits:audit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuditApi();

let transactionId = "transactionId_example"; // String | Transaction ID
let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page)
  'pageSize': 25, // Number | Indicates maximum number of results in response. Default page size is 25 results. The maximum page size is 500.
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.getAuditsQueryTransactionIdResults(transactionId, opts)
  .then((data) => {
    console.log(`getAuditsQueryTransactionIdResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getAuditsQueryTransactionIdResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **transactionId** | **String** | Transaction ID |  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |
 **pageSize** | **Number** | Indicates maximum number of results in response. Default page size is 25 results. The maximum page size is 500. | [optional] [default to 25] |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: user |
{: class="table table-striped"}

### Return type

**AuditQueryExecutionResultsResponse**

<a name="postAuditsQuery"></a>

# AuditQueryExecutionStatusResponse postAuditsQuery(body)


POST /api/v2/audits/query

Create audit query execution

Use /api/v2/audits/query/servicemapping endpoint for a list of valid values

Requires ALL permissions:

* audits:audit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuditApi();

let body = {}; // Object | query

apiInstance.postAuditsQuery(body)
  .then((data) => {
    console.log(`postAuditsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuditsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AuditQueryExecutionStatusResponse**

<a name="postAuditsQueryRealtime"></a>

# AuditRealtimeQueryResultsResponse postAuditsQueryRealtime(body, opts)


POST /api/v2/audits/query/realtime

This endpoint will only retrieve 14 days worth of audits for certain services. Please use /query to get a full list and older audits.

Use /api/v2/audits/query/realtime/servicemapping endpoint for a list of valid values

Requires ALL permissions:

* audits:audit:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.AuditApi();

let body = {}; // Object | query
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand
};

apiInstance.postAuditsQueryRealtime(body, opts)
  .then((data) => {
    console.log(`postAuditsQueryRealtime success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postAuditsQueryRealtime');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **expand** | **[String]** | Which fields, if any, to expand | [optional] <br />**Values**: user |
{: class="table table-striped"}

### Return type

**AuditRealtimeQueryResultsResponse**

