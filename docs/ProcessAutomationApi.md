# ProcessAutomationApi

# platformClient.ProcessAutomationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteProcessautomationTrigger**](ProcessAutomationApi#deleteProcessautomationTrigger) | **DELETE** /api/v2/processautomation/triggers/{triggerId} | Delete a Trigger
[**getProcessautomationTrigger**](ProcessAutomationApi#getProcessautomationTrigger) | **GET** /api/v2/processautomation/triggers/{triggerId} | Retrieve a single Trigger matching id
[**getProcessautomationTriggers**](ProcessAutomationApi#getProcessautomationTriggers) | **GET** /api/v2/processautomation/triggers | Retrieves all triggers, optionally filtered by query parameters.
[**getProcessautomationTriggersTopics**](ProcessAutomationApi#getProcessautomationTriggersTopics) | **GET** /api/v2/processautomation/triggers/topics | Get topics available for organization
[**postProcessautomationTriggerTest**](ProcessAutomationApi#postProcessautomationTriggerTest) | **POST** /api/v2/processautomation/triggers/{triggerId}/test | Test the matching of a Trigger based on provided event body
[**postProcessautomationTriggers**](ProcessAutomationApi#postProcessautomationTriggers) | **POST** /api/v2/processautomation/triggers | Create a Trigger
[**postProcessautomationTriggersTopicTest**](ProcessAutomationApi#postProcessautomationTriggersTopicTest) | **POST** /api/v2/processautomation/triggers/topics/{topicName}/test | Test the matching of all organization Triggers on given topic using provided event body
[**putProcessautomationTrigger**](ProcessAutomationApi#putProcessautomationTrigger) | **PUT** /api/v2/processautomation/triggers/{triggerId} | Update a Trigger



## deleteProcessautomationTrigger

> void deleteProcessautomationTrigger(triggerId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

void (no response body)


## getProcessautomationTrigger

> Trigger getProcessautomationTrigger(triggerId)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Trigger**


## getProcessautomationTriggers

> TriggerEntityListing getProcessautomationTriggers(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TriggerEntityListing**


## getProcessautomationTriggersTopics

> TopicCursorEntityListing getProcessautomationTriggersTopics(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TopicCursorEntityListing**


## postProcessautomationTriggerTest

> TestModeResults postProcessautomationTriggerTest(triggerId, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TestModeResults**


## postProcessautomationTriggers

> Trigger postProcessautomationTriggers(body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Trigger**


## postProcessautomationTriggersTopicTest

> TestModeEventResults postProcessautomationTriggersTopicTest(topicName, opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**TestModeEventResults**


## putProcessautomationTrigger

> Trigger putProcessautomationTrigger(triggerId, body)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
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

### Return type

**Trigger**


_purecloud-platform-client-v2@229.1.0_
