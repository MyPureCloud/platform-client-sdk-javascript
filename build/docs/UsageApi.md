---
title: UsageApi
---
# platformClient.UsageApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getUsageQueryExecutionIdResults**](UsageApi.html#getUsageQueryExecutionIdResults) | **GET** /api/v2/usage/query/{executionId}/results | Get the results of a usage query
[**postUsageQuery**](UsageApi.html#postUsageQuery) | **POST** /api/v2/usage/query | Query organization API Usage - 
{: class="table table-striped"}

<a name="getUsageQueryExecutionIdResults"></a>

# ApiUsageQueryResult getUsageQueryExecutionIdResults(executionId)



GET /api/v2/usage/query/{executionId}/results

Get the results of a usage query



Requires ANY permissions: 

* oauth:client:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsageApi();

let executionId = "executionId_example"; // String | ID of the query execution

apiInstance.getUsageQueryExecutionIdResults(executionId)
  .then((data) => {
    console.log(`getUsageQueryExecutionIdResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsageQueryExecutionIdResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **executionId** | **String** | ID of the query execution |  |
{: class="table table-striped"}

### Return type

**ApiUsageQueryResult**

<a name="postUsageQuery"></a>

# UsageExecutionResult postUsageQuery(body)



POST /api/v2/usage/query

Query organization API Usage - 

After calling this method, you will then need to poll for the query results based on the returned execution Id

Requires ANY permissions: 

* oauth:client:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsageApi();

let body = {}; // Object | Query

apiInstance.postUsageQuery(body)
  .then((data) => {
    console.log(`postUsageQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsageQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Query |  |
{: class="table table-striped"}

### Return type

**UsageExecutionResult**

