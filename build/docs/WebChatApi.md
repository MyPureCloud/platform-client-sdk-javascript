# WebChatApi

# platformClient.WebChatApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteWebchatDeployment**](WebChatApi#deleteWebchatDeployment) | **DELETE** /api/v2/webchat/deployments/{deploymentId} | Delete a WebChat deployment
[**deleteWebchatGuestConversationMember**](WebChatApi#deleteWebchatGuestConversationMember) | **DELETE** /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId} | Remove a member from a chat conversation
[**deleteWebchatSettings**](WebChatApi#deleteWebchatSettings) | **DELETE** /api/v2/webchat/settings | Remove WebChat deployment settings
[**getWebchatDeployment**](WebChatApi#getWebchatDeployment) | **GET** /api/v2/webchat/deployments/{deploymentId} | Get a WebChat deployment
[**getWebchatDeployments**](WebChatApi#getWebchatDeployments) | **GET** /api/v2/webchat/deployments | List WebChat deployments
[**getWebchatGuestConversationMediarequest**](WebChatApi#getWebchatGuestConversationMediarequest) | **GET** /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId} | Get a media request in the conversation
[**getWebchatGuestConversationMediarequests**](WebChatApi#getWebchatGuestConversationMediarequests) | **GET** /api/v2/webchat/guest/conversations/{conversationId}/mediarequests | Get all media requests to the guest in the conversation
[**getWebchatGuestConversationMember**](WebChatApi#getWebchatGuestConversationMember) | **GET** /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId} | Get a web chat conversation member
[**getWebchatGuestConversationMembers**](WebChatApi#getWebchatGuestConversationMembers) | **GET** /api/v2/webchat/guest/conversations/{conversationId}/members | Get the members of a chat conversation.
[**getWebchatGuestConversationMessage**](WebChatApi#getWebchatGuestConversationMessage) | **GET** /api/v2/webchat/guest/conversations/{conversationId}/messages/{messageId} | Get a web chat conversation message
[**getWebchatGuestConversationMessages**](WebChatApi#getWebchatGuestConversationMessages) | **GET** /api/v2/webchat/guest/conversations/{conversationId}/messages | Get the messages of a chat conversation.
[**getWebchatSettings**](WebChatApi#getWebchatSettings) | **GET** /api/v2/webchat/settings | Get WebChat deployment settings
[**patchWebchatGuestConversationMediarequest**](WebChatApi#patchWebchatGuestConversationMediarequest) | **PATCH** /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId} | Update a media request in the conversation, setting the state to ACCEPTED/DECLINED/ERRORED
[**postWebchatDeployments**](WebChatApi#postWebchatDeployments) | **POST** /api/v2/webchat/deployments | Create WebChat deployment
[**postWebchatGuestConversationMemberMessages**](WebChatApi#postWebchatGuestConversationMemberMessages) | **POST** /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/messages | Send a message in a chat conversation.
[**postWebchatGuestConversationMemberTyping**](WebChatApi#postWebchatGuestConversationMemberTyping) | **POST** /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/typing | Send a typing-indicator in a chat conversation.
[**postWebchatGuestConversations**](WebChatApi#postWebchatGuestConversations) | **POST** /api/v2/webchat/guest/conversations | Create an ACD chat conversation from an external customer.
[**putWebchatDeployment**](WebChatApi#putWebchatDeployment) | **PUT** /api/v2/webchat/deployments/{deploymentId} | Update a WebChat deployment
[**putWebchatSettings**](WebChatApi#putWebchatSettings) | **PUT** /api/v2/webchat/settings | Update WebChat deployment settings



## deleteWebchatDeployment

> void deleteWebchatDeployment(deploymentId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/webchat/deployments/{deploymentId}

Delete a WebChat deployment

Requires ANY permissions:

* webchat:deployment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebChatApi();

let deploymentId = "deploymentId_example"; // String | Deployment Id

apiInstance.deleteWebchatDeployment(deploymentId)
  .then(() => {
    console.log('deleteWebchatDeployment returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWebchatDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Deployment Id |  |

### Return type

void (no response body)


## deleteWebchatGuestConversationMember

> void deleteWebchatGuestConversationMember(conversationId, memberId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

DELETE /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}

Remove a member from a chat conversation

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure API key authorization: Guest Chat JWT
let Guest Chat JWT = platformClient.ApiClient.instance.authentications['Guest Chat JWT'];
Guest Chat JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to void)
//Guest Chat JWT.apiKeyPrefix = 'Token';

let apiInstance = new platformClient.WebChatApi();

let conversationId = "conversationId_example"; // String | conversationId
let memberId = "memberId_example"; // String | memberId

apiInstance.deleteWebchatGuestConversationMember(conversationId, memberId)
  .then(() => {
    console.log('deleteWebchatGuestConversationMember returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWebchatGuestConversationMember');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **memberId** | **String** | memberId |  |

### Return type

void (no response body)


## deleteWebchatSettings

> void deleteWebchatSettings()


DELETE /api/v2/webchat/settings

Remove WebChat deployment settings

Requires ANY permissions:

* webchat:deployment:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebChatApi();

apiInstance.deleteWebchatSettings()
  .then(() => {
    console.log('deleteWebchatSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteWebchatSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

void (no response body)


## getWebchatDeployment

> WebChatDeployment getWebchatDeployment(deploymentId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/webchat/deployments/{deploymentId}

Get a WebChat deployment

Requires ANY permissions:

* webchat:deployment:read

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebChatApi();

let deploymentId = "deploymentId_example"; // String | Deployment Id

apiInstance.getWebchatDeployment(deploymentId)
  .then((data) => {
    console.log(`getWebchatDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebchatDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Deployment Id |  |

### Return type

**WebChatDeployment**


## getWebchatDeployments

> WebChatDeploymentEntityListing getWebchatDeployments()

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/webchat/deployments

List WebChat deployments

Requires ANY permissions:

* webchat:deployment:read

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebChatApi();

apiInstance.getWebchatDeployments()
  .then((data) => {
    console.log(`getWebchatDeployments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebchatDeployments');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**WebChatDeploymentEntityListing**


## getWebchatGuestConversationMediarequest

> WebChatGuestMediaRequest getWebchatGuestConversationMediarequest(conversationId, mediaRequestId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}

Get a media request in the conversation

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure API key authorization: Guest Chat JWT
let Guest Chat JWT = platformClient.ApiClient.instance.authentications['Guest Chat JWT'];
Guest Chat JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to void)
//Guest Chat JWT.apiKeyPrefix = 'Token';

let apiInstance = new platformClient.WebChatApi();

let conversationId = "conversationId_example"; // String | conversationId
let mediaRequestId = "mediaRequestId_example"; // String | mediaRequestId

apiInstance.getWebchatGuestConversationMediarequest(conversationId, mediaRequestId)
  .then((data) => {
    console.log(`getWebchatGuestConversationMediarequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebchatGuestConversationMediarequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **mediaRequestId** | **String** | mediaRequestId |  |

### Return type

**WebChatGuestMediaRequest**


## getWebchatGuestConversationMediarequests

> WebChatGuestMediaRequestEntityList getWebchatGuestConversationMediarequests(conversationId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/webchat/guest/conversations/{conversationId}/mediarequests

Get all media requests to the guest in the conversation

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure API key authorization: Guest Chat JWT
let Guest Chat JWT = platformClient.ApiClient.instance.authentications['Guest Chat JWT'];
Guest Chat JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to void)
//Guest Chat JWT.apiKeyPrefix = 'Token';

let apiInstance = new platformClient.WebChatApi();

let conversationId = "conversationId_example"; // String | conversationId

apiInstance.getWebchatGuestConversationMediarequests(conversationId)
  .then((data) => {
    console.log(`getWebchatGuestConversationMediarequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebchatGuestConversationMediarequests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |

### Return type

**WebChatGuestMediaRequestEntityList**


## getWebchatGuestConversationMember

> WebChatMemberInfo getWebchatGuestConversationMember(conversationId, memberId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}

Get a web chat conversation member

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure API key authorization: Guest Chat JWT
let Guest Chat JWT = platformClient.ApiClient.instance.authentications['Guest Chat JWT'];
Guest Chat JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to void)
//Guest Chat JWT.apiKeyPrefix = 'Token';

let apiInstance = new platformClient.WebChatApi();

let conversationId = "conversationId_example"; // String | conversationId
let memberId = "memberId_example"; // String | memberId

apiInstance.getWebchatGuestConversationMember(conversationId, memberId)
  .then((data) => {
    console.log(`getWebchatGuestConversationMember success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebchatGuestConversationMember');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **memberId** | **String** | memberId |  |

### Return type

**WebChatMemberInfo**


## getWebchatGuestConversationMembers

> WebChatMemberInfoEntityList getWebchatGuestConversationMembers(conversationId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/webchat/guest/conversations/{conversationId}/members

Get the members of a chat conversation.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure API key authorization: Guest Chat JWT
let Guest Chat JWT = platformClient.ApiClient.instance.authentications['Guest Chat JWT'];
Guest Chat JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to void)
//Guest Chat JWT.apiKeyPrefix = 'Token';

let apiInstance = new platformClient.WebChatApi();

let conversationId = "conversationId_example"; // String | conversationId
let opts = { 
  'pageSize': 25, // Number | The number of entries to return per page, or omitted for the default.
  'pageNumber': 1, // Number | The page number to return, or omitted for the first page.
  'excludeDisconnectedMembers': false // Boolean | If true, the results will not contain members who have a DISCONNECTED state.
};

apiInstance.getWebchatGuestConversationMembers(conversationId, opts)
  .then((data) => {
    console.log(`getWebchatGuestConversationMembers success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebchatGuestConversationMembers');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **pageSize** | **Number** | The number of entries to return per page, or omitted for the default. | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number to return, or omitted for the first page. | [optional] [default to 1] |
 **excludeDisconnectedMembers** | **Boolean** | If true, the results will not contain members who have a DISCONNECTED state. | [optional] [default to false] |

### Return type

**WebChatMemberInfoEntityList**


## getWebchatGuestConversationMessage

> WebChatMessage getWebchatGuestConversationMessage(conversationId, messageId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/webchat/guest/conversations/{conversationId}/messages/{messageId}

Get a web chat conversation message

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure API key authorization: Guest Chat JWT
let Guest Chat JWT = platformClient.ApiClient.instance.authentications['Guest Chat JWT'];
Guest Chat JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to void)
//Guest Chat JWT.apiKeyPrefix = 'Token';

let apiInstance = new platformClient.WebChatApi();

let conversationId = "conversationId_example"; // String | conversationId
let messageId = "messageId_example"; // String | messageId

apiInstance.getWebchatGuestConversationMessage(conversationId, messageId)
  .then((data) => {
    console.log(`getWebchatGuestConversationMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebchatGuestConversationMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **messageId** | **String** | messageId |  |

### Return type

**WebChatMessage**


## getWebchatGuestConversationMessages

> WebChatMessageEntityList getWebchatGuestConversationMessages(conversationId, opts)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

GET /api/v2/webchat/guest/conversations/{conversationId}/messages

Get the messages of a chat conversation.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure API key authorization: Guest Chat JWT
let Guest Chat JWT = platformClient.ApiClient.instance.authentications['Guest Chat JWT'];
Guest Chat JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to void)
//Guest Chat JWT.apiKeyPrefix = 'Token';

let apiInstance = new platformClient.WebChatApi();

let conversationId = "conversationId_example"; // String | conversationId
let opts = { 
  'after': "after_example", // String | If available, get the messages chronologically after the id of this message
  'before': "before_example", // String | If available, get the messages chronologically before the id of this message
  'sortOrder': "ascending", // String | Sort order
  'maxResults': 100 // Number | Limit the returned number of messages, up to a maximum of 100
};

apiInstance.getWebchatGuestConversationMessages(conversationId, opts)
  .then((data) => {
    console.log(`getWebchatGuestConversationMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebchatGuestConversationMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **after** | **String** | If available, get the messages chronologically after the id of this message | [optional]  |
 **before** | **String** | If available, get the messages chronologically before the id of this message | [optional]  |
 **sortOrder** | **String** | Sort order | [optional] [default to ascending]<br />**Values**: ascending, descending |
 **maxResults** | **Number** | Limit the returned number of messages, up to a maximum of 100 | [optional] [default to 100] |

### Return type

**WebChatMessageEntityList**


## getWebchatSettings

> WebChatSettings getWebchatSettings()


GET /api/v2/webchat/settings

Get WebChat deployment settings

Requires ANY permissions:

* webchat:deployment:read

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebChatApi();

apiInstance.getWebchatSettings()
  .then((data) => {
    console.log(`getWebchatSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getWebchatSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**WebChatSettings**


## patchWebchatGuestConversationMediarequest

> WebChatGuestMediaRequest patchWebchatGuestConversationMediarequest(conversationId, mediaRequestId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PATCH /api/v2/webchat/guest/conversations/{conversationId}/mediarequests/{mediaRequestId}

Update a media request in the conversation, setting the state to ACCEPTED/DECLINED/ERRORED

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-legacy-co-browse-and-screenshare/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure API key authorization: Guest Chat JWT
let Guest Chat JWT = platformClient.ApiClient.instance.authentications['Guest Chat JWT'];
Guest Chat JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to void)
//Guest Chat JWT.apiKeyPrefix = 'Token';

let apiInstance = new platformClient.WebChatApi();

let conversationId = "conversationId_example"; // String | conversationId
let mediaRequestId = "mediaRequestId_example"; // String | mediaRequestId
let body = {}; // Object | Request

apiInstance.patchWebchatGuestConversationMediarequest(conversationId, mediaRequestId, body)
  .then((data) => {
    console.log(`patchWebchatGuestConversationMediarequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchWebchatGuestConversationMediarequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **mediaRequestId** | **String** | mediaRequestId |  |
 **body** | **Object** | Request |  |

### Return type

**WebChatGuestMediaRequest**


## postWebchatDeployments

> WebChatDeployment postWebchatDeployments(body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/webchat/deployments

Create WebChat deployment

Requires ANY permissions:

* webchat:deployment:create

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebChatApi();

let body = {}; // Object | Deployment

apiInstance.postWebchatDeployments(body)
  .then((data) => {
    console.log(`postWebchatDeployments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWebchatDeployments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Deployment |  |

### Return type

**WebChatDeployment**


## postWebchatGuestConversationMemberMessages

> WebChatMessage postWebchatGuestConversationMemberMessages(conversationId, memberId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/messages

Send a message in a chat conversation.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure API key authorization: Guest Chat JWT
let Guest Chat JWT = platformClient.ApiClient.instance.authentications['Guest Chat JWT'];
Guest Chat JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to void)
//Guest Chat JWT.apiKeyPrefix = 'Token';

let apiInstance = new platformClient.WebChatApi();

let conversationId = "conversationId_example"; // String | conversationId
let memberId = "memberId_example"; // String | memberId
let body = {}; // Object | Message

apiInstance.postWebchatGuestConversationMemberMessages(conversationId, memberId, body)
  .then((data) => {
    console.log(`postWebchatGuestConversationMemberMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWebchatGuestConversationMemberMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **memberId** | **String** | memberId |  |
 **body** | **Object** | Message |  |

### Return type

**WebChatMessage**


## postWebchatGuestConversationMemberTyping

> WebChatTyping postWebchatGuestConversationMemberTyping(conversationId, memberId)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/webchat/guest/conversations/{conversationId}/members/{memberId}/typing

Send a typing-indicator in a chat conversation.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure API key authorization: Guest Chat JWT
let Guest Chat JWT = platformClient.ApiClient.instance.authentications['Guest Chat JWT'];
Guest Chat JWT.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to void)
//Guest Chat JWT.apiKeyPrefix = 'Token';

let apiInstance = new platformClient.WebChatApi();

let conversationId = "conversationId_example"; // String | conversationId
let memberId = "memberId_example"; // String | memberId

apiInstance.postWebchatGuestConversationMemberTyping(conversationId, memberId)
  .then((data) => {
    console.log(`postWebchatGuestConversationMemberTyping success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWebchatGuestConversationMemberTyping');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **memberId** | **String** | memberId |  |

### Return type

**WebChatTyping**


## postWebchatGuestConversations

> CreateWebChatConversationResponse postWebchatGuestConversations(body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

POST /api/v2/webchat/guest/conversations

Create an ACD chat conversation from an external customer.

This endpoint is deprecated. Please see the article https://help.genesys.cloud/articles/deprecation-removal-of-acd-web-chat-version-2/. This endpoint will create a new ACD Chat conversation under the specified Chat Deployment. The conversation will begin with a guest member in it (with a role=CUSTOMER) according to the customer information that is supplied. If the guest member is authenticated, the memberAuthToken field should include his JWT as generated by the POST /api/v2/signeddata resource; if the guest member is anonymous (and the Deployment permits it) this field can be omitted. The returned data includes the IDs of the conversation created, along with a newly-create JWT token that you can supply to all future endpoints as authentication to perform operations against that conversation. After successfully creating a conversation, you should connect a websocket to the event stream named in the eventStreamUri field of the response; the conversation is not routed until the event stream is attached.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

let apiInstance = new platformClient.WebChatApi();

let body = {}; // Object | CreateConversationRequest

apiInstance.postWebchatGuestConversations(body)
  .then((data) => {
    console.log(`postWebchatGuestConversations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postWebchatGuestConversations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | CreateConversationRequest |  |

### Return type

**CreateWebChatConversationResponse**


## putWebchatDeployment

> WebChatDeployment putWebchatDeployment(deploymentId, body)

:::{"alert":"warning","title":"Deprecated","collapsible":false,"autoCollapse":false}
This resource has been deprecated
:::

PUT /api/v2/webchat/deployments/{deploymentId}

Update a WebChat deployment

Requires ANY permissions:

* webchat:deployment:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebChatApi();

let deploymentId = "deploymentId_example"; // String | Deployment Id
let body = {}; // Object | Deployment

apiInstance.putWebchatDeployment(deploymentId, body)
  .then((data) => {
    console.log(`putWebchatDeployment success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putWebchatDeployment');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **deploymentId** | **String** | Deployment Id |  |
 **body** | **Object** | Deployment |  |

### Return type

**WebChatDeployment**


## putWebchatSettings

> WebChatSettings putWebchatSettings(body)


PUT /api/v2/webchat/settings

Update WebChat deployment settings

Requires ANY permissions:

* webchat:deployment:update

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.WebChatApi();

let body = {}; // Object | webChatSettings

apiInstance.putWebchatSettings(body)
  .then((data) => {
    console.log(`putWebchatSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putWebchatSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | webChatSettings |  |

### Return type

**WebChatSettings**


_purecloud-platform-client-v2@229.1.0_
