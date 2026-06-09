# ProcessAutomationApi

# platformClient.ProcessAutomationApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteProcessautomationScheduledtrigger**](ProcessAutomationApi#deleteProcessautomationScheduledtrigger) | **DELETE** /api/v2/processautomation/scheduledtriggers/{scheduledTriggerId} | Delete a Scheduled Trigger
[**deleteProcessautomationTrigger**](ProcessAutomationApi#deleteProcessautomationTrigger) | **DELETE** /api/v2/processautomation/triggers/{triggerId} | Delete a Trigger
[**getProcessautomationScheduledtrigger**](ProcessAutomationApi#getProcessautomationScheduledtrigger) | **GET** /api/v2/processautomation/scheduledtriggers/{scheduledTriggerId} | Retrieve a single Scheduled Trigger matching id
[**getProcessautomationScheduledtriggers**](ProcessAutomationApi#getProcessautomationScheduledtriggers) | **GET** /api/v2/processautomation/scheduledtriggers | Retrieves all scheduled triggers, optionally filtered by query parameters.
[**getProcessautomationTrigger**](ProcessAutomationApi#getProcessautomationTrigger) | **GET** /api/v2/processautomation/triggers/{triggerId} | Retrieve a single Trigger matching id
[**getProcessautomationTriggers**](ProcessAutomationApi#getProcessautomationTriggers) | **GET** /api/v2/processautomation/triggers | Retrieves all triggers, optionally filtered by query parameters.
[**getProcessautomationTriggersTopics**](ProcessAutomationApi#getProcessautomationTriggersTopics) | **GET** /api/v2/processautomation/triggers/topics | Get topics available for organization
[**postProcessautomationScheduledtriggers**](ProcessAutomationApi#postProcessautomationScheduledtriggers) | **POST** /api/v2/processautomation/scheduledtriggers | Create a scheduled Trigger
[**postProcessautomationTriggerTest**](ProcessAutomationApi#postProcessautomationTriggerTest) | **POST** /api/v2/processautomation/triggers/{triggerId}/test | Test the matching of a Trigger based on provided event body
[**postProcessautomationTriggers**](ProcessAutomationApi#postProcessautomationTriggers) | **POST** /api/v2/processautomation/triggers | Create a Trigger
[**postProcessautomationTriggersTopicTest**](ProcessAutomationApi#postProcessautomationTriggersTopicTest) | **POST** /api/v2/processautomation/triggers/topics/{topicName}/test | Test the matching of all organization Triggers on given topic using provided event body
[**putProcessautomationScheduledtrigger**](ProcessAutomationApi#putProcessautomationScheduledtrigger) | **PUT** /api/v2/processautomation/scheduledtriggers/{scheduledTriggerId} | Update a Scheduled Trigger
[**putProcessautomationTrigger**](ProcessAutomationApi#putProcessautomationTrigger) | **PUT** /api/v2/processautomation/triggers/{triggerId} | Update a Trigger



## deleteProcessautomationScheduledtrigger

> void deleteProcessautomationScheduledtrigger(scheduledTriggerId, opts)


DELETE /api/v2/processautomation/scheduledtriggers/{scheduledTriggerId}

Delete a Scheduled Trigger

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

let scheduledTriggerId = "scheduledTriggerId_example"; // String | scheduledTriggerId
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteProcessautomationScheduledtrigger(scheduledTriggerId, opts)
  .then(() => {
    console.log('deleteProcessautomationScheduledtrigger returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteProcessautomationScheduledtrigger');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduledTriggerId** | **String** | scheduledTriggerId |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteProcessautomationTrigger

> void deleteProcessautomationTrigger(triggerId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteProcessautomationTrigger(triggerId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getProcessautomationScheduledtrigger

> ScheduledTrigger getProcessautomationScheduledtrigger(scheduledTriggerId, opts)


GET /api/v2/processautomation/scheduledtriggers/{scheduledTriggerId}

Retrieve a single Scheduled Trigger matching id

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

let scheduledTriggerId = "scheduledTriggerId_example"; // String | scheduledTriggerId
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getProcessautomationScheduledtrigger(scheduledTriggerId, opts)
  .then((data) => {
    console.log(`getProcessautomationScheduledtrigger success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getProcessautomationScheduledtrigger');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduledTriggerId** | **String** | scheduledTriggerId |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScheduledTrigger**


## getProcessautomationScheduledtriggers

> ScheduledTriggerEntityListing getProcessautomationScheduledtriggers(opts)


GET /api/v2/processautomation/scheduledtriggers

Retrieves all scheduled triggers, optionally filtered by query parameters.

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
  'enabled': true, // Boolean | Boolean indicating desired enabled state of scheduled triggers
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getProcessautomationScheduledtriggers(opts)
  .then((data) => {
    console.log(`getProcessautomationScheduledtriggers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getProcessautomationScheduledtriggers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **pageSize** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
 **enabled** | **Boolean** | Boolean indicating desired enabled state of scheduled triggers | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScheduledTriggerEntityListing**


## getProcessautomationTrigger

> Trigger getProcessautomationTrigger(triggerId, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getProcessautomationTrigger(triggerId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'hasDelayBy': true, // Boolean | Boolean to filter based on delayBySeconds being set in triggers. Default returns all, true returns only those with delayBySeconds set, false returns those without delayBySeconds set.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'pageSize': "pageSize_example", // String | Number of entities to return. Maximum of 200.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TopicCursorEntityListing**


## postProcessautomationScheduledtriggers

> ScheduledTrigger postProcessautomationScheduledtriggers(body, opts)


POST /api/v2/processautomation/scheduledtriggers

Create a scheduled Trigger

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

let body = {}; // Object | Input used to create a Scheduled Trigger
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postProcessautomationScheduledtriggers(body, opts)
  .then((data) => {
    console.log(`postProcessautomationScheduledtriggers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postProcessautomationScheduledtriggers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Input used to create a Scheduled Trigger |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScheduledTrigger**


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
  'body': "body_example", // String | eventBody
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TestModeResults**


## postProcessautomationTriggers

> Trigger postProcessautomationTriggers(body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postProcessautomationTriggers(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

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
  'body': "body_example", // String | eventBody
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TestModeEventResults**


## putProcessautomationScheduledtrigger

> ScheduledTrigger putProcessautomationScheduledtrigger(scheduledTriggerId, body, opts)


PUT /api/v2/processautomation/scheduledtriggers/{scheduledTriggerId}

Update a Scheduled Trigger

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

let scheduledTriggerId = "scheduledTriggerId_example"; // String | scheduledTriggerId
let body = {}; // Object | Input to update Scheduled Trigger.
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putProcessautomationScheduledtrigger(scheduledTriggerId, body, opts)
  .then((data) => {
    console.log(`putProcessautomationScheduledtrigger success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putProcessautomationScheduledtrigger');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **scheduledTriggerId** | **String** | scheduledTriggerId |  |
 **body** | **Object** | Input to update Scheduled Trigger. |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScheduledTrigger**


## putProcessautomationTrigger

> Trigger putProcessautomationTrigger(triggerId, body, opts)


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
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putProcessautomationTrigger(triggerId, body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Trigger**


_purecloud-platform-client-v2@254.0.0_
