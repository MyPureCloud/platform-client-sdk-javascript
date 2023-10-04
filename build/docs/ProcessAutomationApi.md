---
title: ProcessAutomationApi
---
# platformClient.ProcessAutomationApi

All URIs are relative to *https://api.inindca.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteProcessautomationTrigger**](ProcessAutomationApi.html#deleteProcessautomationTrigger) | **DELETE** /api/v2/processautomation/triggers/{triggerId} | Delete a Trigger
[**getProcessautomationFlowsDefinitionVersion**](ProcessAutomationApi.html#getProcessautomationFlowsDefinitionVersion) | **GET** /api/v2/processautomation/flows/definitions/{flowId}/versions/{versionId} | Get the meta-data for a versioned flow
[**getProcessautomationFlowsInstance**](ProcessAutomationApi.html#getProcessautomationFlowsInstance) | **GET** /api/v2/processautomation/flows/instances/{instanceId} | Get the running data for a flow instance
[**getProcessautomationFlowsInstancesCommandsSearch**](ProcessAutomationApi.html#getProcessautomationFlowsInstancesCommandsSearch) | **GET** /api/v2/processautomation/flows/instances/commands/search | Search currently running flow instances using q64
[**getProcessautomationTrigger**](ProcessAutomationApi.html#getProcessautomationTrigger) | **GET** /api/v2/processautomation/triggers/{triggerId} | Retrieve a single Trigger matching id
[**getProcessautomationTriggers**](ProcessAutomationApi.html#getProcessautomationTriggers) | **GET** /api/v2/processautomation/triggers | Retrieves all triggers, optionally filtered by query parameters.
[**getProcessautomationTriggersTopics**](ProcessAutomationApi.html#getProcessautomationTriggersTopics) | **GET** /api/v2/processautomation/triggers/topics | Get topics available for organization
[**postProcessautomationFlowsInstancesCommandsSearch**](ProcessAutomationApi.html#postProcessautomationFlowsInstancesCommandsSearch) | **POST** /api/v2/processautomation/flows/instances/commands/search | Search the currently running flow instances
[**postProcessautomationTriggerTest**](ProcessAutomationApi.html#postProcessautomationTriggerTest) | **POST** /api/v2/processautomation/triggers/{triggerId}/test | Test the matching of a Trigger based on provided event body
[**postProcessautomationTriggers**](ProcessAutomationApi.html#postProcessautomationTriggers) | **POST** /api/v2/processautomation/triggers | Create a Trigger
[**postProcessautomationTriggersTopicTest**](ProcessAutomationApi.html#postProcessautomationTriggersTopicTest) | **POST** /api/v2/processautomation/triggers/topics/{topicName}/test | Test the matching of all organization Triggers on given topic using provided event body
[**putProcessautomationTrigger**](ProcessAutomationApi.html#putProcessautomationTrigger) | **PUT** /api/v2/processautomation/triggers/{triggerId} | Update a Trigger
{: class="table table-striped"}

<a name="deleteProcessautomationTrigger"></a>

# void deleteProcessautomationTrigger(triggerId)


DELETE /api/v2/processautomation/triggers/{triggerId}

Delete a Trigger

Requires ANY permissions:

* processautomation:trigger:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let triggerId = "triggerId_example"; // String | triggerId

apiInstance.deleteProcessautomationTrigger(triggerId)
  .then(() => {
    console.log('deleteProcessautomationTrigger returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteProcessautomationTrigger');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **triggerId** | **String** | triggerId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getProcessautomationFlowsDefinitionVersion"></a>

# FlowVersionConfigMetaData getProcessautomationFlowsDefinitionVersion(flowId, versionId, opts)


GET /api/v2/processautomation/flows/definitions/{flowId}/versions/{versionId}

Get the meta-data for a versioned flow

This will get the meta-data about a particular version of a flow.<br>.

Requires ANY permissions:

* workflow:design:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let flowId = "flowId_example"; // String | Flow ID
let versionId = "versionId_example"; // String | Flow Version
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getProcessautomationFlowsDefinitionVersion(flowId, versionId, opts)
  .then((data) => {
    console.log(`getProcessautomationFlowsDefinitionVersion success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getProcessautomationFlowsDefinitionVersion');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **flowId** | **String** | Flow ID |  |
 **versionId** | **String** | Flow Version |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: users, queues, flowconfigid |
{: class="table table-striped"}

### Return type

**FlowVersionConfigMetaData**

<a name="getProcessautomationFlowsInstance"></a>

# FlowDetails getProcessautomationFlowsInstance(instanceId, opts)


GET /api/v2/processautomation/flows/instances/{instanceId}

Get the running data for a flow instance

This will get the information about the current running state of the flow instance. It requires the workflow:instance:search permission.

Requires ANY permissions:

* workflow:instance:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let instanceId = "instanceId_example"; // String | Flow Exec ID
let opts = { 
  'expand': "expand_example" // String | Expand instructions for the return value.
};

apiInstance.getProcessautomationFlowsInstance(instanceId, opts)
  .then((data) => {
    console.log(`getProcessautomationFlowsInstance success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getProcessautomationFlowsInstance');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **instanceId** | **String** | Flow Exec ID |  |
 **expand** | **String** | Expand instructions for the return value. | [optional] <br />**Values**: users, queues, flowconfigid, variables |
{: class="table table-striped"}

### Return type

**FlowDetails**

<a name="getProcessautomationFlowsInstancesCommandsSearch"></a>

# FlowDetailsSearchResult getProcessautomationFlowsInstancesCommandsSearch(q64, opts)


GET /api/v2/processautomation/flows/instances/commands/search

Search currently running flow instances using q64

Searches the pool of running flow instances given a SearchRequest and returns the matching results.

Requires ANY permissions:

* workflow:instance:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"] // [String] | Expand instructions for the return value.
};

apiInstance.getProcessautomationFlowsInstancesCommandsSearch(q64, opts)
  .then((data) => {
    console.log(`getProcessautomationFlowsInstancesCommandsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getProcessautomationFlowsInstancesCommandsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | Expand instructions for the return value. | [optional] <br />**Values**: users, flowconfigid |
{: class="table table-striped"}

### Return type

**FlowDetailsSearchResult**

<a name="getProcessautomationTrigger"></a>

# Trigger getProcessautomationTrigger(triggerId)


GET /api/v2/processautomation/triggers/{triggerId}

Retrieve a single Trigger matching id

Requires ANY permissions:

* processautomation:trigger:edit
* processautomation:trigger:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let triggerId = "triggerId_example"; // String | triggerId

apiInstance.getProcessautomationTrigger(triggerId)
  .then((data) => {
    console.log(`getProcessautomationTrigger success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getProcessautomationTrigger');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **triggerId** | **String** | triggerId |  |
{: class="table table-striped"}

### Return type

**Trigger**

<a name="getProcessautomationTriggers"></a>

# TriggerEntityListing getProcessautomationTriggers(opts)


GET /api/v2/processautomation/triggers

Retrieves all triggers, optionally filtered by query parameters.

Requires ANY permissions:

* processautomation:trigger:edit
* processautomation:trigger:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'topicName': "topicName_example", // String | Topic name(s). Separated by commas
  'enabled': true, // Boolean | Boolean indicating desired enabled state of triggers
  'hasDelayBy': true // Boolean | Boolean to filter based on delayBySeconds being set in triggers. Default returns all, true returns only those with delayBySeconds set, false returns those without delayBySeconds set.
};

apiInstance.getProcessautomationTriggers(opts)
  .then((data) => {
    console.log(`getProcessautomationTriggers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getProcessautomationTriggers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **topicName** | **String** | Topic name(s). Separated by commas | [optional]  |
 **enabled** | **Boolean** | Boolean indicating desired enabled state of triggers | [optional]  |
 **hasDelayBy** | **Boolean** | Boolean to filter based on delayBySeconds being set in triggers. Default returns all, true returns only those with delayBySeconds set, false returns those without delayBySeconds set. | [optional]  |
{: class="table table-striped"}

### Return type

**TriggerEntityListing**

<a name="getProcessautomationTriggersTopics"></a>

# TopicCursorEntityListing getProcessautomationTriggersTopics(opts)


GET /api/v2/processautomation/triggers/topics

Get topics available for organization

Requires ANY permissions:

* processautomation:trigger:edit
* processautomation:trigger:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'pageSize': "pageSize_example" // String | Number of entities to return. Maximum of 200.
};

apiInstance.getProcessautomationTriggersTopics(opts)
  .then((data) => {
    console.log(`getProcessautomationTriggersTopics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getProcessautomationTriggersTopics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
{: class="table table-striped"}

### Return type

**TopicCursorEntityListing**

<a name="postProcessautomationFlowsInstancesCommandsSearch"></a>

# FlowDetailsSearchResult postProcessautomationFlowsInstancesCommandsSearch(body)


POST /api/v2/processautomation/flows/instances/commands/search

Search the currently running flow instances

Searches the pool of running flow instances given a SearchRequest and returns the matching results. It requires the Some Search Examples: Note the various filters, sort and searchPhrase options can be combined/omitted as needed.Search for a specific definition ID:{"query": [{"fields": ["flowConfigId.id"],"type": "EXACT","values": ["e88db9fb-aaa0-46f8-81d5-4a30e323bdfa"]}]}Search for a specific execution instance and sort on the config name:{"query": [{"fields": ["flowExecId"],"type": "EXACT","values": ["99"]}],"sortBy" : "flowConfigName","sortOrder" : "ASC"}

Requires ANY permissions:

* workflow:instance:search

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let body = {}; // Object | SearchRequest data containing search parameters and paging response.

apiInstance.postProcessautomationFlowsInstancesCommandsSearch(body)
  .then((data) => {
    console.log(`postProcessautomationFlowsInstancesCommandsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postProcessautomationFlowsInstancesCommandsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | SearchRequest data containing search parameters and paging response. |  |
{: class="table table-striped"}

### Return type

**FlowDetailsSearchResult**

<a name="postProcessautomationTriggerTest"></a>

# TestModeResults postProcessautomationTriggerTest(triggerId, opts)


POST /api/v2/processautomation/triggers/{triggerId}/test

Test the matching of a Trigger based on provided event body

Requires ANY permissions:

* processautomation:trigger:test

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let triggerId = "triggerId_example"; // String | triggerId
let opts = { 
  'body': "body_example" // String | eventBody
};

apiInstance.postProcessautomationTriggerTest(triggerId, opts)
  .then((data) => {
    console.log(`postProcessautomationTriggerTest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postProcessautomationTriggerTest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **triggerId** | **String** | triggerId |  |
 **body** | **String** | eventBody | [optional]  |
{: class="table table-striped"}

### Return type

**TestModeResults**

<a name="postProcessautomationTriggers"></a>

# Trigger postProcessautomationTriggers(body)


POST /api/v2/processautomation/triggers

Create a Trigger

Requires ANY permissions:

* processautomation:trigger:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let body = {}; // Object | Input used to create a Trigger.

apiInstance.postProcessautomationTriggers(body)
  .then((data) => {
    console.log(`postProcessautomationTriggers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postProcessautomationTriggers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to create a Trigger. |  |
{: class="table table-striped"}

### Return type

**Trigger**

<a name="postProcessautomationTriggersTopicTest"></a>

# TestModeEventResults postProcessautomationTriggersTopicTest(topicName, opts)


POST /api/v2/processautomation/triggers/topics/{topicName}/test

Test the matching of all organization Triggers on given topic using provided event body

Requires ANY permissions:

* processautomation:trigger:test

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let topicName = "topicName_example"; // String | topicName
let opts = { 
  'body': "body_example" // String | eventBody
};

apiInstance.postProcessautomationTriggersTopicTest(topicName, opts)
  .then((data) => {
    console.log(`postProcessautomationTriggersTopicTest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postProcessautomationTriggersTopicTest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicName** | **String** | topicName |  |
 **body** | **String** | eventBody | [optional]  |
{: class="table table-striped"}

### Return type

**TestModeEventResults**

<a name="putProcessautomationTrigger"></a>

# Trigger putProcessautomationTrigger(triggerId, body)


PUT /api/v2/processautomation/triggers/{triggerId}

Update a Trigger

Requires ANY permissions:

* processautomation:trigger:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ProcessAutomationApi();

let triggerId = "triggerId_example"; // String | triggerId
let body = {}; // Object | Input to update Trigger. (topicName cannot be updated, a new trigger must be created to use a new topicName)

apiInstance.putProcessautomationTrigger(triggerId, body)
  .then((data) => {
    console.log(`putProcessautomationTrigger success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putProcessautomationTrigger');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **triggerId** | **String** | triggerId |  |
 **body** | **Object** | Input to update Trigger. (topicName cannot be updated, a new trigger must be created to use a new topicName) |  |
{: class="table table-striped"}

### Return type

**Trigger**

