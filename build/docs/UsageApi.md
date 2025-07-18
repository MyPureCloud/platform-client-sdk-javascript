# UsageApi

# platformClient.UsageApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getOauthClientUsageQueryResult**](UsageApi#getOauthClientUsageQueryResult) | **GET** /api/v2/oauth/clients/{clientId}/usage/query/results/{executionId} | Get the results of a usage query
[**getOauthClientUsageSummary**](UsageApi#getOauthClientUsageSummary) | **GET** /api/v2/oauth/clients/{clientId}/usage/summary | Get a summary of OAuth client API usage
[**getUsageQueryExecutionIdResults**](UsageApi#getUsageQueryExecutionIdResults) | **GET** /api/v2/usage/query/{executionId}/results | Get the results of a usage query
[**getUsageSimplesearchExecutionIdResults**](UsageApi#getUsageSimplesearchExecutionIdResults) | **GET** /api/v2/usage/simplesearch/{executionId}/results | Get the results of a usage search. Number of records to be returned is limited to 20,000 results.
[**postOauthClientUsageQuery**](UsageApi#postOauthClientUsageQuery) | **POST** /api/v2/oauth/clients/{clientId}/usage/query | Query for OAuth client API usage
[**postUsageQuery**](UsageApi#postUsageQuery) | **POST** /api/v2/usage/query | Query organization API Usage - 
[**postUsageSimplesearch**](UsageApi#postUsageSimplesearch) | **POST** /api/v2/usage/simplesearch | Search organization API Usage



## getOauthClientUsageQueryResult

> ApiUsageQueryResult getOauthClientUsageQueryResult(executionId, clientId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ApiUsageQueryResult**


## getOauthClientUsageSummary

> UsageExecutionResult getOauthClientUsageSummary(clientId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UsageExecutionResult**


## getUsageQueryExecutionIdResults

> ApiUsageQueryResult getUsageQueryExecutionIdResults(executionId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**ApiUsageQueryResult**


## getUsageSimplesearchExecutionIdResults

> ApiUsageQueryResult getUsageSimplesearchExecutionIdResults(executionId, opts)


GET /api/v2/usage/simplesearch/{executionId}/results

Get the results of a usage search. Number of records to be returned is limited to 20,000 results.

Requires ANY permissions:

* oauth:client:view
* usage:simpleSearch:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UsageApi();

let executionId = "executionId_example"; // String | ID of the search execution
let opts = { 
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned
  'pageSize': 3.4 // Number | The max number of entities to be returned per request. Maximum page size of 1000
};

apiInstance.getUsageSimplesearchExecutionIdResults(executionId, opts)
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
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned | [optional]  |
 **pageSize** | **Number** | The max number of entities to be returned per request. Maximum page size of 1000 | [optional]  |

### Return type

**ApiUsageQueryResult**


## postOauthClientUsageQuery

> UsageExecutionResult postOauthClientUsageQuery(clientId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UsageExecutionResult**


## postUsageQuery

> UsageExecutionResult postUsageQuery(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UsageExecutionResult**


## postUsageSimplesearch

> UsageExecutionResult postUsageSimplesearch(body)


POST /api/v2/usage/simplesearch

Search organization API Usage

After calling this method, you will then need to poll for the query results based on the returned execution Id. The number of records is limited to 20,000 results

Requires ANY permissions:

* oauth:client:view
* usage:simpleSearch:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**UsageExecutionResult**


_purecloud-platform-client-v2@227.0.0_
