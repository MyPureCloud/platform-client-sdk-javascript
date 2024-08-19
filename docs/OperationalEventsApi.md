# OperationalEventsApi

# platformClient.OperationalEventsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getUsageEventsDefinition**](OperationalEventsApi.html#getUsageEventsDefinition) | **GET** /api/v2/usage/events/definitions/{eventDefinitionId} | Get an operational event definition by its id
[**getUsageEventsDefinitions**](OperationalEventsApi.html#getUsageEventsDefinitions) | **GET** /api/v2/usage/events/definitions | Get all operational event definitions
{: class="table table-striped"}

<a name="getUsageEventsDefinition"></a>

# EventDefinition getUsageEventsDefinition(eventDefinitionId)


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
{: class="table table-striped"}

### Return type

**EventDefinition**

<a name="getUsageEventsDefinitions"></a>

# EventDefinitionListing getUsageEventsDefinitions()


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

