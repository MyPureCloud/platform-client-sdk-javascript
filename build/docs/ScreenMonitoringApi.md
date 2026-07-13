# ScreenMonitoringApi

# platformClient.ScreenMonitoringApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteConversationParticipantScreenmonitorsSession**](ScreenMonitoringApi#deleteConversationParticipantScreenmonitorsSession) | **DELETE** /api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions/{screenMonitoringId} | Stop a conversation-level screen monitoring session.
[**deleteUserScreenmonitorsSession**](ScreenMonitoringApi#deleteUserScreenmonitorsSession) | **DELETE** /api/v2/users/{userId}/screenmonitors/sessions/{screenMonitoringId} | Stop an agent-level screen monitoring session.
[**getConversationParticipantScreenmonitorsSession**](ScreenMonitoringApi#getConversationParticipantScreenmonitorsSession) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions/{screenMonitoringId} | Get a conversation-level screen monitoring session object using the supplied screenMonitoringId.
[**getScreenmonitorsSessionsDetails**](ScreenMonitoringApi#getScreenmonitorsSessionsDetails) | **GET** /api/v2/screenmonitors/sessions/details | Get the details of all screen monitoring sessions for the current organization.
[**getScreenmonitorsSettings**](ScreenMonitoringApi#getScreenmonitorsSettings) | **GET** /api/v2/screenmonitors/settings | Get the Screen Monitor Settings for the Organization
[**getScreenmonitorsUserSessions**](ScreenMonitoringApi#getScreenmonitorsUserSessions) | **GET** /api/v2/screenmonitors/users/{userId}/sessions | Get all screen monitoring sessions for the supplied userId.
[**getUserScreenmonitorsSession**](ScreenMonitoringApi#getUserScreenmonitorsSession) | **GET** /api/v2/users/{userId}/screenmonitors/sessions/{screenMonitoringId} | Get an agent-level screen monitoring session object using the supplied screenMonitoringId.
[**postConversationParticipantScreenmonitorsSessions**](ScreenMonitoringApi#postConversationParticipantScreenmonitorsSessions) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions | Start a conversation-level screen monitoring session.
[**postScreenmonitorsSessionsUsersDetails**](ScreenMonitoringApi#postScreenmonitorsSessionsUsersDetails) | **POST** /api/v2/screenmonitors/sessions/users/details | Get screen monitor session details for one or more users.
[**postUserScreenmonitorsSessions**](ScreenMonitoringApi#postUserScreenmonitorsSessions) | **POST** /api/v2/users/{userId}/screenmonitors/sessions | Start an agent-level screen monitoring session.
[**putScreenmonitorsSettings**](ScreenMonitoringApi#putScreenmonitorsSettings) | **PUT** /api/v2/screenmonitors/settings | Update the Screen Monitor Settings for the Organization



## deleteConversationParticipantScreenmonitorsSession

> void deleteConversationParticipantScreenmonitorsSession(conversationId, participantId, screenMonitoringId, opts)


DELETE /api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions/{screenMonitoringId}

Stop a conversation-level screen monitoring session.

Requires ANY permissions:

* realtimeMonitor:screen:monitorConversation

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let participantId = "participantId_example"; // String | Participant ID
let screenMonitoringId = "screenMonitoringId_example"; // String | Screen Monitoring ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteConversationParticipantScreenmonitorsSession(conversationId, participantId, screenMonitoringId, opts)
  .then(() => {
    console.log('deleteConversationParticipantScreenmonitorsSession returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationParticipantScreenmonitorsSession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **participantId** | **String** | Participant ID |  |
 **screenMonitoringId** | **String** | Screen Monitoring ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteUserScreenmonitorsSession

> void deleteUserScreenmonitorsSession(userId, screenMonitoringId, opts)


DELETE /api/v2/users/{userId}/screenmonitors/sessions/{screenMonitoringId}

Stop an agent-level screen monitoring session.

Requires ANY permissions:

* realtimeMonitor:screen:monitorAgent

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();

let userId = "userId_example"; // String | User ID
let screenMonitoringId = "screenMonitoringId_example"; // String | Screen Monitoring ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteUserScreenmonitorsSession(userId, screenMonitoringId, opts)
  .then(() => {
    console.log('deleteUserScreenmonitorsSession returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserScreenmonitorsSession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **screenMonitoringId** | **String** | Screen Monitoring ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getConversationParticipantScreenmonitorsSession

> ScreenMonitoringSession getConversationParticipantScreenmonitorsSession(conversationId, participantId, screenMonitoringId, opts)


GET /api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions/{screenMonitoringId}

Get a conversation-level screen monitoring session object using the supplied screenMonitoringId.

Requires ANY permissions:

* realtimeMonitor:screen:monitorConversation

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let participantId = "participantId_example"; // String | Participant ID
let screenMonitoringId = "screenMonitoringId_example"; // String | Screen Monitoring ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getConversationParticipantScreenmonitorsSession(conversationId, participantId, screenMonitoringId, opts)
  .then((data) => {
    console.log(`getConversationParticipantScreenmonitorsSession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationParticipantScreenmonitorsSession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **participantId** | **String** | Participant ID |  |
 **screenMonitoringId** | **String** | Screen Monitoring ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScreenMonitoringSession**


## getScreenmonitorsSessionsDetails

> ScreenMonitoringDetails getScreenmonitorsSessionsDetails(opts)


GET /api/v2/screenmonitors/sessions/details

Get the details of all screen monitoring sessions for the current organization.

Requires ANY permissions:

* realtimeMonitor:screenSession:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getScreenmonitorsSessionsDetails(opts)
  .then((data) => {
    console.log(`getScreenmonitorsSessionsDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScreenmonitorsSessionsDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScreenMonitoringDetails**


## getScreenmonitorsSettings

> ScreenMonitorSettings getScreenmonitorsSettings(opts)


GET /api/v2/screenmonitors/settings

Get the Screen Monitor Settings for the Organization

Requires ANY permissions:

* realtimeMonitor:settings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getScreenmonitorsSettings(opts)
  .then((data) => {
    console.log(`getScreenmonitorsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScreenmonitorsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScreenMonitorSettings**


## getScreenmonitorsUserSessions

> ScreenMonitoringSessionEntityListing getScreenmonitorsUserSessions(userId, opts)


GET /api/v2/screenmonitors/users/{userId}/sessions

Get all screen monitoring sessions for the supplied userId.

Requires ANY permissions:

* realtimeMonitor:screen:monitorConversation
* realtimeMonitor:screen:monitorAgent

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getScreenmonitorsUserSessions(userId, opts)
  .then((data) => {
    console.log(`getScreenmonitorsUserSessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getScreenmonitorsUserSessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScreenMonitoringSessionEntityListing**


## getUserScreenmonitorsSession

> ScreenMonitoringSession getUserScreenmonitorsSession(userId, screenMonitoringId, opts)


GET /api/v2/users/{userId}/screenmonitors/sessions/{screenMonitoringId}

Get an agent-level screen monitoring session object using the supplied screenMonitoringId.

Requires ANY permissions:

* realtimeMonitor:screen:monitorAgent

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();

let userId = "userId_example"; // String | User ID
let screenMonitoringId = "screenMonitoringId_example"; // String | Screen Monitoring ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getUserScreenmonitorsSession(userId, screenMonitoringId, opts)
  .then((data) => {
    console.log(`getUserScreenmonitorsSession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserScreenmonitorsSession');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **screenMonitoringId** | **String** | Screen Monitoring ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScreenMonitoringSession**


## postConversationParticipantScreenmonitorsSessions

> StartScreenMonitorResponseBody postConversationParticipantScreenmonitorsSessions(conversationId, participantId, opts)


POST /api/v2/conversations/{conversationId}/participants/{participantId}/screenmonitors/sessions

Start a conversation-level screen monitoring session.

Requires ANY permissions:

* realtimeMonitor:screen:monitorConversation

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let participantId = "participantId_example"; // String | Participant ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postConversationParticipantScreenmonitorsSessions(conversationId, participantId, opts)
  .then((data) => {
    console.log(`postConversationParticipantScreenmonitorsSessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationParticipantScreenmonitorsSessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **participantId** | **String** | Participant ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**StartScreenMonitorResponseBody**


## postScreenmonitorsSessionsUsersDetails

> ScreenMonitoringUserDetailsEntityListing postScreenmonitorsSessionsUsersDetails(body, opts)


POST /api/v2/screenmonitors/sessions/users/details

Get screen monitor session details for one or more users.

Requires ANY permissions:

* realtimeMonitor:screenSession:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();

let body = ["body_example"]; // [String] | List of target user IDs
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postScreenmonitorsSessionsUsersDetails(body, opts)
  .then((data) => {
    console.log(`postScreenmonitorsSessionsUsersDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postScreenmonitorsSessionsUsersDetails');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **[String]** | List of target user IDs |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ScreenMonitoringUserDetailsEntityListing**


## postUserScreenmonitorsSessions

> StartScreenMonitorResponseBody postUserScreenmonitorsSessions(userId, opts)


POST /api/v2/users/{userId}/screenmonitors/sessions

Start an agent-level screen monitoring session.

Requires ANY permissions:

* realtimeMonitor:screen:monitorAgent

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postUserScreenmonitorsSessions(userId, opts)
  .then((data) => {
    console.log(`postUserScreenmonitorsSessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postUserScreenmonitorsSessions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**StartScreenMonitorResponseBody**


## putScreenmonitorsSettings

> void putScreenmonitorsSettings(body, opts)


PUT /api/v2/screenmonitors/settings

Update the Screen Monitor Settings for the Organization

Requires ANY permissions:

* realtimeMonitor:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ScreenMonitoringApi();

let body = {}; // Object | Screen Monitor settings
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putScreenmonitorsSettings(body, opts)
  .then(() => {
    console.log('putScreenmonitorsSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putScreenmonitorsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Screen Monitor settings |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


_purecloud-platform-client-v2@257.0.0_
