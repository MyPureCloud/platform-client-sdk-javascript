# EventsApi

# platformClient.EventsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postEventsConversations**](EventsApi#postEventsConversations) | **POST** /api/v2/events/conversations | Publish Conversation Batch Events
[**postEventsRoutingCustomkpiattributions**](EventsApi#postEventsRoutingCustomkpiattributions) | **POST** /api/v2/events/routing/customkpiattributions | Publish Predictive Routing Custom Kpi Attribution Batch Events
[**postEventsUsersPresence**](EventsApi#postEventsUsersPresence) | **POST** /api/v2/events/users/presence | Publish User Presence Status Batch Events
[**postEventsUsersRoutingstatus**](EventsApi#postEventsUsersRoutingstatus) | **POST** /api/v2/events/users/routingstatus | Publish Agent Routing Status Batch Events



## postEventsConversations

> BatchEventResponse postEventsConversations(body, opts)


POST /api/v2/events/conversations

Publish Conversation Batch Events

Requires ANY permissions:

* conversation:conversation:inject

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EventsApi();

let body = {}; // Object | batchRequest
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postEventsConversations(body, opts)
  .then((data) => {
    console.log(`postEventsConversations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postEventsConversations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | batchRequest |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BatchEventResponse**


## postEventsRoutingCustomkpiattributions

> BatchEventResponse postEventsRoutingCustomkpiattributions(body, opts)


POST /api/v2/events/routing/customkpiattributions

Publish Predictive Routing Custom Kpi Attribution Batch Events

postEventsRoutingCustomkpiattributions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ANY permissions:

* routing:customKpiAttribution:inject

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EventsApi();

let body = {}; // Object | batchRequest
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postEventsRoutingCustomkpiattributions(body, opts)
  .then((data) => {
    console.log(`postEventsRoutingCustomkpiattributions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postEventsRoutingCustomkpiattributions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | batchRequest |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BatchEventResponse**


## postEventsUsersPresence

> BatchEventResponse postEventsUsersPresence(body, opts)


POST /api/v2/events/users/presence

Publish User Presence Status Batch Events

Requires ANY permissions:

* presence:userPresence:inject

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EventsApi();

let body = {}; // Object | batchRequest
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postEventsUsersPresence(body, opts)
  .then((data) => {
    console.log(`postEventsUsersPresence success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postEventsUsersPresence');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | batchRequest |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BatchEventResponse**


## postEventsUsersRoutingstatus

> BatchEventResponse postEventsUsersRoutingstatus(body, opts)


POST /api/v2/events/users/routingstatus

Publish Agent Routing Status Batch Events

Requires ANY permissions:

* routing:routingstatus:inject

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.EventsApi();

let body = {}; // Object | batchRequest
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postEventsUsersRoutingstatus(body, opts)
  .then((data) => {
    console.log(`postEventsUsersRoutingstatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postEventsUsersRoutingstatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | batchRequest |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**BatchEventResponse**


_purecloud-platform-client-v2@252.0.0_
