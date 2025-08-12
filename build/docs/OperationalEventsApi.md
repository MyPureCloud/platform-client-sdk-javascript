# OperationalEventsApi

# platformClient.OperationalEventsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getUsageEventsDefinition**](OperationalEventsApi#getUsageEventsDefinition) | **GET** /api/v2/usage/events/definitions/{eventDefinitionId} | Get an operational event definition by its id
[**getUsageEventsDefinitions**](OperationalEventsApi#getUsageEventsDefinitions) | **GET** /api/v2/usage/events/definitions | Get all operational event definitions
[**postUsageEventsAggregatesQuery**](OperationalEventsApi#postUsageEventsAggregatesQuery) | **POST** /api/v2/usage/events/aggregates/query | Get aggregates for operational events in a timeframe.
[**postUsageEventsQuery**](OperationalEventsApi#postUsageEventsQuery) | **POST** /api/v2/usage/events/query | Query operational events in a timeframe.



## getUsageEventsDefinition

> EventDefinition getUsageEventsDefinition(eventDefinitionId)


GET /api/v2/usage/events/definitions/{eventDefinitionId}

Get an operational event definition by its id

Requires ALL permissions:

* usage:events:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OperationalEventsApi();

let eventDefinitionId = "eventDefinitionId_example"; // String | EventDefinition id

apiInstance.getUsageEventsDefinition(eventDefinitionId)
  .then((data) => {
    console.log(`getUsageEventsDefinition success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsageEventsDefinition');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **eventDefinitionId** | **String** | EventDefinition id |  |

### Return type

**EventDefinition**


## getUsageEventsDefinitions

> EventDefinitionListing getUsageEventsDefinitions()


GET /api/v2/usage/events/definitions

Get all operational event definitions

Requires ALL permissions:

* usage:events:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OperationalEventsApi();

apiInstance.getUsageEventsDefinitions()
  .then((data) => {
    console.log(`getUsageEventsDefinitions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUsageEventsDefinitions');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**EventDefinitionListing**


## postUsageEventsAggregatesQuery

> EventAggregatesResponse postUsageEventsAggregatesQuery(opts)


POST /api/v2/usage/events/aggregates/query

Get aggregates for operational events in a timeframe.

Requires ALL permissions:

* usage:events:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OperationalEventsApi();

let opts = { 
  'body': {} // Object | 
};

apiInstance.postUsageEventsAggregatesQuery(opts)
  .then((data) => {
    console.log(`postUsageEventsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsageEventsAggregatesQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |

### Return type

**EventAggregatesResponse**


## postUsageEventsQuery

> EventQueryResponse postUsageEventsQuery(opts)


POST /api/v2/usage/events/query

Query operational events in a timeframe.

Requires ALL permissions:

* usage:events:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.OperationalEventsApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'body': {} // Object | 
};

apiInstance.postUsageEventsQuery(opts)
  .then((data) => {
    console.log(`postUsageEventsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUsageEventsQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **body** | **Object** |  | [optional]  |

### Return type

**EventQueryResponse**


_purecloud-platform-client-v2@229.1.0_
