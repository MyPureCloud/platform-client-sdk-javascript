# EventsApi

# platformClient.EventsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**postEventsConversations**](EventsApi#postEventsConversations) | **POST** /api/v2/events/conversations | Publish Conversation Batch Events
[**postEventsUsersPresence**](EventsApi#postEventsUsersPresence) | **POST** /api/v2/events/users/presence | Publish User Presence Status Batch Events
[**postEventsUsersRoutingstatus**](EventsApi#postEventsUsersRoutingstatus) | **POST** /api/v2/events/users/routingstatus | Publish Agent Routing Status Batch Events



## postEventsConversations

> BatchEventResponse postEventsConversations(body)


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

apiInstance.postEventsConversations(body)
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

### Return type

**BatchEventResponse**


## postEventsUsersPresence

> BatchEventResponse postEventsUsersPresence(body)


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

apiInstance.postEventsUsersPresence(body)
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

### Return type

**BatchEventResponse**


## postEventsUsersRoutingstatus

> BatchEventResponse postEventsUsersRoutingstatus(body)


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

apiInstance.postEventsUsersRoutingstatus(body)
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

### Return type

**BatchEventResponse**


_purecloud-platform-client-v2@229.1.0_
