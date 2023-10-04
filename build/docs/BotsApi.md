---
title: BotsApi
---
# platformClient.BotsApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getBotsInstance**](BotsApi.html#getBotsInstance) | **GET** /api/v2/bots/instances/{instanceId} | Start a process (job) to prepare a download of a singular bot execution data instance by Id
[**getBotsInstancesJob**](BotsApi.html#getBotsInstancesJob) | **GET** /api/v2/bots/instances/jobs/{jobId} | Gets the status and/or results of an asynchronous bot execution data retrieval job
[**getBotsInstancesQuerycapabilities**](BotsApi.html#getBotsInstancesQuerycapabilities) | **GET** /api/v2/bots/instances/querycapabilities | Retrieve a list of capabilities that the org can use to query for execution data
[**postBotsInstancesJobs**](BotsApi.html#postBotsInstancesJobs) | **POST** /api/v2/bots/instances/jobs | Start a process (job) that will prepare a list of execution data IDs for download.
[**postBotsInstancesQuery**](BotsApi.html#postBotsInstancesQuery) | **POST** /api/v2/bots/instances/query | Query the database of existing bot execution histories to look for particular bot criteria
{: class="table table-striped"}

<a name="getBotsInstance"></a>

# GetBotExecutionDataJobResult getBotsInstance(instanceId)


GET /api/v2/bots/instances/{instanceId}

Start a process (job) to prepare a download of a singular bot execution data instance by Id

Returns a JobResult object that contains an ID that can be used to check status and/or download links when the process (job) is complete.

Requires ANY permissions:

* bots:instance:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BotsApi();

let instanceId = "instanceId_example"; // String | Instance ID

apiInstance.getBotsInstance(instanceId)
  .then((data) => {
    console.log(`getBotsInstance success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBotsInstance');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **instanceId** | **String** | Instance ID |  |
{: class="table table-striped"}

### Return type

**GetBotExecutionDataJobResult**

<a name="getBotsInstancesJob"></a>

# GetBotExecutionDataJobResult getBotsInstancesJob(jobId)


GET /api/v2/bots/instances/jobs/{jobId}

Gets the status and/or results of an asynchronous bot execution data retrieval job

Requires ANY permissions:

* bots:instance:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BotsApi();

let jobId = "jobId_example"; // String | The asynchronous job ID

apiInstance.getBotsInstancesJob(jobId)
  .then((data) => {
    console.log(`getBotsInstancesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBotsInstancesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The asynchronous job ID |  |
{: class="table table-striped"}

### Return type

**GetBotExecutionDataJobResult**

<a name="getBotsInstancesQuerycapabilities"></a>

# BotsQueryCriteriaResponse getBotsInstancesQuerycapabilities()


GET /api/v2/bots/instances/querycapabilities

Retrieve a list of capabilities that the org can use to query for execution data

Returns the queryable parameters that can be used to build a query for execution data.

Requires ANY permissions:

* bots:instance:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BotsApi();

apiInstance.getBotsInstancesQuerycapabilities()
  .then((data) => {
    console.log(`getBotsInstancesQuerycapabilities success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getBotsInstancesQuerycapabilities');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.


### Return type

**BotsQueryCriteriaResponse**

<a name="postBotsInstancesJobs"></a>

# GetBotExecutionDataJobResult postBotsInstancesJobs(body)


POST /api/v2/bots/instances/jobs

Start a process (job) that will prepare a list of execution data IDs for download.

Returns a JobResult object that contains an ID that can be used to check status and/or download links when the process (job) is complete.

Requires ANY permissions:

* bots:instance:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BotsApi();

let body = {}; // Object | Requested Bot Ids

apiInstance.postBotsInstancesJobs(body)
  .then((data) => {
    console.log(`postBotsInstancesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBotsInstancesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Requested Bot Ids |  |
{: class="table table-striped"}

### Return type

**GetBotExecutionDataJobResult**

<a name="postBotsInstancesQuery"></a>

# BotResultEntityListing postBotsInstancesQuery(body, opts)


POST /api/v2/bots/instances/query

Query the database of existing bot execution histories to look for particular bot criteria

Returns a list of matching bot execution histories up to 200 max.

Requires ANY permissions:

* bots:instance:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.BotsApi();

let body = {}; // Object | query
let opts = { 
  'indexOnly': true // Boolean | indexes only
};

apiInstance.postBotsInstancesQuery(body, opts)
  .then((data) => {
    console.log(`postBotsInstancesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postBotsInstancesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
 **indexOnly** | **Boolean** | indexes only | [optional]  |
{: class="table table-striped"}

### Return type

**BotResultEntityListing**

