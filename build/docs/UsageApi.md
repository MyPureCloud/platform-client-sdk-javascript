---
title: UsageApi
---
# platformClient.UsageApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getOauthClientUsageQueryResult**](UsageApi.html#getOauthClientUsageQueryResult) | **GET** /api/v2/oauth/clients/{clientId}/usage/query/results/{executionId} | Get the results of a usage query
[**getOauthClientUsageSummary**](UsageApi.html#getOauthClientUsageSummary) | **GET** /api/v2/oauth/clients/{clientId}/usage/summary | Get a summary of OAuth client API usage
[**getUsageQueryExecutionIdResults**](UsageApi.html#getUsageQueryExecutionIdResults) | **GET** /api/v2/usage/query/{executionId}/results | Get the results of a usage query
[**getUsageSimplesearchExecutionIdResults**](UsageApi.html#getUsageSimplesearchExecutionIdResults) | **GET** /api/v2/usage/simplesearch/{executionId}/results | Get the results of a usage search
[**postOauthClientUsageQuery**](UsageApi.html#postOauthClientUsageQuery) | **POST** /api/v2/oauth/clients/{clientId}/usage/query | Query for OAuth client API usage
[**postUsageQuery**](UsageApi.html#postUsageQuery) | **POST** /api/v2/usage/query | Query organization API Usage - 
[**postUsageSimplesearch**](UsageApi.html#postUsageSimplesearch) | **POST** /api/v2/usage/simplesearch | Search organization API Usage - 
{: class="table table-striped"}

<a name="getOauthClientUsageQueryResult"></a>

# ApiUsageQueryResult getOauthClientUsageQueryResult(executionId, clientId)


GET /api/v2/oauth/clients/{clientId}/usage/query/results/{executionId}

Get the results of a usage query

Requires ANY permissions:

* oauth:client:view
* usage:client:view

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
let clientId = "clientId_example"; // String | Client ID

apiInstance.getOauthClientUsageQueryResult(executionId, clientId)
  .then((data) => {
    console.log(`getOauthClientUsageQueryResult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOauthClientUsageQueryResult');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **executionId** | **String** | ID of the query execution |  |
 **clientId** | **String** | Client ID |  |
{: class="table table-striped"}

### Return type

**ApiUsageQueryResult**

<a name="getOauthClientUsageSummary"></a>

# UsageExecutionResult getOauthClientUsageSummary(clientId, opts)


GET /api/v2/oauth/clients/{clientId}/usage/summary

Get a summary of OAuth client API usage

After calling this method, you will then need to poll for the query results based on the returned execution Id

Requires ANY permissions:

* oauth:client:view
* usage:client:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsageApi();

let clientId = "clientId_example"; // String | Client ID
let opts = { 
  'days': "7" // String | Previous number of days to query
};

apiInstance.getOauthClientUsageSummary(clientId, opts)
  .then((data) => {
    console.log(`getOauthClientUsageSummary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOauthClientUsageSummary');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
 **days** | **String** | Previous number of days to query | [optional] [default to 7] |
{: class="table table-striped"}

### Return type

**UsageExecutionResult**

<a name="getUsageQueryExecutionIdResults"></a>

# ApiUsageQueryResult getUsageQueryExecutionIdResults(executionId)


GET /api/v2/usage/query/{executionId}/results

Get the results of a usage query

Requires ANY permissions:

* oauth:client:view
* usage:organization:view

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

<a name="getUsageSimplesearchExecutionIdResults"></a>

# ApiUsageQueryResult getUsageSimplesearchExecutionIdResults(executionId)


GET /api/v2/usage/simplesearch/{executionId}/results

Get the results of a usage search

Requires ANY permissions:

* oauth:client:view
* usage:simpleSearch:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsageApi();

let executionId = "executionId_example"; // String | ID of the search execution

apiInstance.getUsageSimplesearchExecutionIdResults(executionId)
  .then((data) => {
    console.log(`getUsageSimplesearchExecutionIdResults success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsageSimplesearchExecutionIdResults');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **executionId** | **String** | ID of the search execution |  |
{: class="table table-striped"}

### Return type

**ApiUsageQueryResult**

<a name="postOauthClientUsageQuery"></a>

# UsageExecutionResult postOauthClientUsageQuery(clientId, body)


POST /api/v2/oauth/clients/{clientId}/usage/query

Query for OAuth client API usage

After calling this method, you will then need to poll for the query results based on the returned execution Id

Requires ANY permissions:

* oauth:client:view
* usage:client:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsageApi();

let clientId = "clientId_example"; // String | Client ID
let body = {}; // Object | Query

apiInstance.postOauthClientUsageQuery(clientId, body)
  .then((data) => {
    console.log(`postOauthClientUsageQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postOauthClientUsageQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **clientId** | **String** | Client ID |  |
 **body** | **Object** | Query |  |
{: class="table table-striped"}

### Return type

**UsageExecutionResult**

<a name="postUsageQuery"></a>

# UsageExecutionResult postUsageQuery(body)


POST /api/v2/usage/query

Query organization API Usage - 

After calling this method, you will then need to poll for the query results based on the returned execution Id

Requires ANY permissions:

* oauth:client:view
* usage:organization:view

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

<a name="postUsageSimplesearch"></a>

# UsageExecutionResult postUsageSimplesearch(body)


POST /api/v2/usage/simplesearch

Search organization API Usage - 

After calling this method, you will then need to poll for the query results based on the returned execution Id

Requires ANY permissions:

* oauth:client:view
* usage:simpleSearch:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsageApi();

let body = {}; // Object | SimpleSearch

apiInstance.postUsageSimplesearch(body)
  .then((data) => {
    console.log(`postUsageSimplesearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsageSimplesearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SimpleSearch |  |
{: class="table table-striped"}

### Return type

**UsageExecutionResult**

