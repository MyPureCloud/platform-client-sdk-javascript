# ChatApi

# platformClient.ChatApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteChatsRoomMessage**](ChatApi#deleteChatsRoomMessage) | **DELETE** /api/v2/chats/rooms/{roomJid}/messages/{messageId} | Delete a message in a room
[**deleteChatsRoomMessagesPin**](ChatApi#deleteChatsRoomMessagesPin) | **DELETE** /api/v2/chats/rooms/{roomJid}/messages/pins/{pinnedMessageId} | Remove a pinned message from a room
[**deleteChatsRoomParticipant**](ChatApi#deleteChatsRoomParticipant) | **DELETE** /api/v2/chats/rooms/{roomJid}/participants/{userId} | Remove a user from a room.
[**deleteChatsUserMessage**](ChatApi#deleteChatsUserMessage) | **DELETE** /api/v2/chats/users/{userId}/messages/{messageId} | Delete a message to a user
[**deleteChatsUserMessagesPin**](ChatApi#deleteChatsUserMessagesPin) | **DELETE** /api/v2/chats/users/{userId}/messages/pins/{pinnedMessageId} | Remove a pinned message from a 1on1
[**deleteChatsUsersMeSettings**](ChatApi#deleteChatsUsersMeSettings) | **DELETE** /api/v2/chats/users/me/settings | Delete a user's chat settings
[**getChatsMessage**](ChatApi#getChatsMessage) | **GET** /api/v2/chats/messages/{messageId} | Get a message
[**getChatsRoom**](ChatApi#getChatsRoom) | **GET** /api/v2/chats/rooms/{roomJid} | Get a room
[**getChatsRoomMessage**](ChatApi#getChatsRoomMessage) | **GET** /api/v2/chats/rooms/{roomJid}/messages/{messageIds} | Get messages by id(s) from a room
[**getChatsRoomMessages**](ChatApi#getChatsRoomMessages) | **GET** /api/v2/chats/rooms/{roomJid}/messages | Get a room's message history
[**getChatsRoomParticipant**](ChatApi#getChatsRoomParticipant) | **GET** /api/v2/chats/rooms/{roomJid}/participants/{participantJid} | Get a room participant
[**getChatsRoomParticipants**](ChatApi#getChatsRoomParticipants) | **GET** /api/v2/chats/rooms/{roomJid}/participants | Get room participants in a room
[**getChatsSettings**](ChatApi#getChatsSettings) | **GET** /api/v2/chats/settings | Get Chat Settings.
[**getChatsThreadMessages**](ChatApi#getChatsThreadMessages) | **GET** /api/v2/chats/threads/{threadId}/messages | Get history by thread
[**getChatsUser**](ChatApi#getChatsUser) | **GET** /api/v2/chats/users/{userId} | Get information for a 1on1
[**getChatsUserMessage**](ChatApi#getChatsUserMessage) | **GET** /api/v2/chats/users/{userId}/messages/{messageIds} | Get messages by id(s) from a 1on1
[**getChatsUserMessages**](ChatApi#getChatsUserMessages) | **GET** /api/v2/chats/users/{userId}/messages | Get 1on1 History between a user
[**getChatsUserSettings**](ChatApi#getChatsUserSettings) | **GET** /api/v2/chats/users/{userId}/settings | Get a user's chat settings
[**getChatsUsersMeSettings**](ChatApi#getChatsUsersMeSettings) | **GET** /api/v2/chats/users/me/settings | Get a user's chat settings
[**patchChatsRoom**](ChatApi#patchChatsRoom) | **PATCH** /api/v2/chats/rooms/{roomJid} | Set properties for a room
[**patchChatsRoomMessage**](ChatApi#patchChatsRoomMessage) | **PATCH** /api/v2/chats/rooms/{roomJid}/messages/{messageId} | Edit a message in a room
[**patchChatsSettings**](ChatApi#patchChatsSettings) | **PATCH** /api/v2/chats/settings | Patch Chat Settings.
[**patchChatsUserMessage**](ChatApi#patchChatsUserMessage) | **PATCH** /api/v2/chats/users/{userId}/messages/{messageId} | Edit a message to a user
[**patchChatsUserSettings**](ChatApi#patchChatsUserSettings) | **PATCH** /api/v2/chats/users/{userId}/settings | Update a user's chat settings
[**patchChatsUsersMeSettings**](ChatApi#patchChatsUsersMeSettings) | **PATCH** /api/v2/chats/users/me/settings | Update a user's chat settings
[**postChatsRoomMessages**](ChatApi#postChatsRoomMessages) | **POST** /api/v2/chats/rooms/{roomJid}/messages | Send a message to a room
[**postChatsRoomMessagesPins**](ChatApi#postChatsRoomMessagesPins) | **POST** /api/v2/chats/rooms/{roomJid}/messages/pins | Add pinned messages for a room, up to a maximum of 5 pinned messages
[**postChatsRoomParticipant**](ChatApi#postChatsRoomParticipant) | **POST** /api/v2/chats/rooms/{roomJid}/participants/{userId} | Join a room
[**postChatsRooms**](ChatApi#postChatsRooms) | **POST** /api/v2/chats/rooms | Create an adhoc room
[**postChatsUserMessages**](ChatApi#postChatsUserMessages) | **POST** /api/v2/chats/users/{userId}/messages | Send a message to a user
[**postChatsUserMessagesPins**](ChatApi#postChatsUserMessagesPins) | **POST** /api/v2/chats/users/{userId}/messages/pins | Add pinned messages for a 1on1, up to a maximum of 5 pinned messages
[**postChatsUsersMeSettings**](ChatApi#postChatsUsersMeSettings) | **POST** /api/v2/chats/users/me/settings | Create a user's chat settings
[**putChatsMessageReactions**](ChatApi#putChatsMessageReactions) | **PUT** /api/v2/chats/messages/{messageId}/reactions | Update reactions to a message
[**putChatsSettings**](ChatApi#putChatsSettings) | **PUT** /api/v2/chats/settings | Update Chat Settings.



## deleteChatsRoomMessage

> void deleteChatsRoomMessage(roomJid, messageId)


DELETE /api/v2/chats/rooms/{roomJid}/messages/{messageId}

Delete a message in a room

Requires ANY permissions:

* chat:chat:access
* chat:roomMessage:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomId
let messageId = "messageId_example"; // String | messageId

apiInstance.deleteChatsRoomMessage(roomJid, messageId)
  .then(() => {
    console.log('deleteChatsRoomMessage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteChatsRoomMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomId |  |
 **messageId** | **String** | messageId |  |

### Return type

void (no response body)


## deleteChatsRoomMessagesPin

> void deleteChatsRoomMessagesPin(roomJid, pinnedMessageId)


DELETE /api/v2/chats/rooms/{roomJid}/messages/pins/{pinnedMessageId}

Remove a pinned message from a room

Requires ANY permissions:

* chat:chat:access
* chat:room:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomJid
let pinnedMessageId = "pinnedMessageId_example"; // String | pinnedMessageId

apiInstance.deleteChatsRoomMessagesPin(roomJid, pinnedMessageId)
  .then(() => {
    console.log('deleteChatsRoomMessagesPin returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteChatsRoomMessagesPin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomJid |  |
 **pinnedMessageId** | **String** | pinnedMessageId |  |

### Return type

void (no response body)


## deleteChatsRoomParticipant

> void deleteChatsRoomParticipant(roomJid, userId)


DELETE /api/v2/chats/rooms/{roomJid}/participants/{userId}

Remove a user from a room.

Requires ANY permissions:

* chat:chat:access
* chat:participant:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomJid
let userId = "userId_example"; // String | userId

apiInstance.deleteChatsRoomParticipant(roomJid, userId)
  .then(() => {
    console.log('deleteChatsRoomParticipant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteChatsRoomParticipant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomJid |  |
 **userId** | **String** | userId |  |

### Return type

void (no response body)


## deleteChatsUserMessage

> void deleteChatsUserMessage(userId, messageId)


DELETE /api/v2/chats/users/{userId}/messages/{messageId}

Delete a message to a user

Requires ANY permissions:

* chat:chat:access
* chat:1on1Message:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let userId = "userId_example"; // String | userId
let messageId = "messageId_example"; // String | messageId

apiInstance.deleteChatsUserMessage(userId, messageId)
  .then(() => {
    console.log('deleteChatsUserMessage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteChatsUserMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |
 **messageId** | **String** | messageId |  |

### Return type

void (no response body)


## deleteChatsUserMessagesPin

> void deleteChatsUserMessagesPin(userId, pinnedMessageId)


DELETE /api/v2/chats/users/{userId}/messages/pins/{pinnedMessageId}

Remove a pinned message from a 1on1

Requires ANY permissions:

* chat:chat:access
* chat:1on1:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let userId = "userId_example"; // String | userId
let pinnedMessageId = "pinnedMessageId_example"; // String | pinnedMessageId

apiInstance.deleteChatsUserMessagesPin(userId, pinnedMessageId)
  .then(() => {
    console.log('deleteChatsUserMessagesPin returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteChatsUserMessagesPin');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |
 **pinnedMessageId** | **String** | pinnedMessageId |  |

### Return type

void (no response body)


## deleteChatsUsersMeSettings

> void deleteChatsUsersMeSettings()


DELETE /api/v2/chats/users/me/settings

Delete a user's chat settings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

apiInstance.deleteChatsUsersMeSettings()
  .then(() => {
    console.log('deleteChatsUsersMeSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteChatsUsersMeSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

void (no response body)


## getChatsMessage

> ChatMessageResponse getChatsMessage(messageId)


GET /api/v2/chats/messages/{messageId}

Get a message

Requires ANY permissions:

* chat:chat:access
* chat:1on1Message:view
* chat:room:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let messageId = "messageId_example"; // String | messageId

apiInstance.getChatsMessage(messageId)
  .then((data) => {
    console.log(`getChatsMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | messageId |  |

### Return type

**ChatMessageResponse**


## getChatsRoom

> Room getChatsRoom(roomJid)


GET /api/v2/chats/rooms/{roomJid}

Get a room

Requires ANY permissions:

* chat:chat:access
* chat:room:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomJid

apiInstance.getChatsRoom(roomJid)
  .then((data) => {
    console.log(`getChatsRoom success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsRoom');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomJid |  |

### Return type

**Room**


## getChatsRoomMessage

> ChatMessageEntityListing getChatsRoomMessage(roomJid, messageIds)


GET /api/v2/chats/rooms/{roomJid}/messages/{messageIds}

Get messages by id(s) from a room

Requires ANY permissions:

* chat:chat:access
* chat:room:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomJid
let messageIds = "messageIds_example"; // String | messageIds, comma separated

apiInstance.getChatsRoomMessage(roomJid, messageIds)
  .then((data) => {
    console.log(`getChatsRoomMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsRoomMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomJid |  |
 **messageIds** | **String** | messageIds, comma separated |  |

### Return type

**ChatMessageEntityListing**


## getChatsRoomMessages

> ChatMessageEntityListing getChatsRoomMessages(roomJid, opts)


GET /api/v2/chats/rooms/{roomJid}/messages

Get a room's message history

Requires ANY permissions:

* chat:chat:access
* chat:room:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomJid
let opts = { 
  'limit': "limit_example", // String | The maximum number of messages to retrieve
  'before': "before_example", // String | The cutoff date for messages to retrieve
  'after': "after_example", // String | The beginning date for messages to retrieve
  'excludeMetadata': true // Boolean | Whether to exclude metadata for messages
};

apiInstance.getChatsRoomMessages(roomJid, opts)
  .then((data) => {
    console.log(`getChatsRoomMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsRoomMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomJid |  |
 **limit** | **String** | The maximum number of messages to retrieve | [optional]  |
 **before** | **String** | The cutoff date for messages to retrieve | [optional]  |
 **after** | **String** | The beginning date for messages to retrieve | [optional]  |
 **excludeMetadata** | **Boolean** | Whether to exclude metadata for messages | [optional]  |

### Return type

**ChatMessageEntityListing**


## getChatsRoomParticipant

> RoomParticipant getChatsRoomParticipant(roomJid, participantJid)


GET /api/v2/chats/rooms/{roomJid}/participants/{participantJid}

Get a room participant

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomJid
let participantJid = "participantJid_example"; // String | participantJid

apiInstance.getChatsRoomParticipant(roomJid, participantJid)
  .then((data) => {
    console.log(`getChatsRoomParticipant success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsRoomParticipant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomJid |  |
 **participantJid** | **String** | participantJid |  |

### Return type

**RoomParticipant**


## getChatsRoomParticipants

> RoomParticipantsResponse getChatsRoomParticipants(roomJid, opts)


GET /api/v2/chats/rooms/{roomJid}/participants

Get room participants in a room

Requires ANY permissions:

* chat:chat:access
* chat:room:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomJid
let opts = { 
  'notify': true // Boolean | Whether to get users to notify
};

apiInstance.getChatsRoomParticipants(roomJid, opts)
  .then((data) => {
    console.log(`getChatsRoomParticipants success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsRoomParticipants');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomJid |  |
 **notify** | **Boolean** | Whether to get users to notify | [optional]  |

### Return type

**RoomParticipantsResponse**


## getChatsSettings

> ChatSettings getChatsSettings()


GET /api/v2/chats/settings

Get Chat Settings.

Requires ANY permissions:

* chat:setting:view
* chat:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

apiInstance.getChatsSettings()
  .then((data) => {
    console.log(`getChatsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**ChatSettings**


## getChatsThreadMessages

> ChatMessageEntityListing getChatsThreadMessages(threadId, opts)


GET /api/v2/chats/threads/{threadId}/messages

Get history by thread

Requires ANY permissions:

* chat:chat:access
* chat:room:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let threadId = "threadId_example"; // String | threadId
let opts = { 
  'limit': "limit_example", // String | The maximum number of messages to retrieve
  'before': "before_example", // String | The cutoff date for messages to retrieve
  'after': "after_example", // String | The beginning date for messages to retrieve
  'excludeMetadata': true // Boolean | Whether to exclude metadata for messages
};

apiInstance.getChatsThreadMessages(threadId, opts)
  .then((data) => {
    console.log(`getChatsThreadMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsThreadMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **threadId** | **String** | threadId |  |
 **limit** | **String** | The maximum number of messages to retrieve | [optional]  |
 **before** | **String** | The cutoff date for messages to retrieve | [optional]  |
 **after** | **String** | The beginning date for messages to retrieve | [optional]  |
 **excludeMetadata** | **Boolean** | Whether to exclude metadata for messages | [optional]  |

### Return type

**ChatMessageEntityListing**


## getChatsUser

> OneOnOne getChatsUser(userId)


GET /api/v2/chats/users/{userId}

Get information for a 1on1

Requires ANY permissions:

* chat:chat:access
* chat:1on1:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let userId = "userId_example"; // String | userId

apiInstance.getChatsUser(userId)
  .then((data) => {
    console.log(`getChatsUser success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsUser');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |

### Return type

**OneOnOne**


## getChatsUserMessage

> ChatMessageEntityListing getChatsUserMessage(userId, messageIds)


GET /api/v2/chats/users/{userId}/messages/{messageIds}

Get messages by id(s) from a 1on1

Requires ANY permissions:

* chat:chat:access
* chat:1on1Message:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let userId = "userId_example"; // String | userId
let messageIds = "messageIds_example"; // String | messageIds, comma separated

apiInstance.getChatsUserMessage(userId, messageIds)
  .then((data) => {
    console.log(`getChatsUserMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsUserMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |
 **messageIds** | **String** | messageIds, comma separated |  |

### Return type

**ChatMessageEntityListing**


## getChatsUserMessages

> ChatMessageResponse getChatsUserMessages(userId, opts)


GET /api/v2/chats/users/{userId}/messages

Get 1on1 History between a user

Requires ANY permissions:

* chat:chat:access
* chat:1on1Message:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let userId = "userId_example"; // String | userId
let opts = { 
  'limit': "limit_example", // String | The maximum number of messages to retrieve
  'before': "before_example", // String | The cutoff date for messages to retrieve
  'after': "after_example", // String | The beginning date for messages to retrieve
  'excludeMetadata': true // Boolean | Whether to exclude metadata for messages
};

apiInstance.getChatsUserMessages(userId, opts)
  .then((data) => {
    console.log(`getChatsUserMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsUserMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |
 **limit** | **String** | The maximum number of messages to retrieve | [optional]  |
 **before** | **String** | The cutoff date for messages to retrieve | [optional]  |
 **after** | **String** | The beginning date for messages to retrieve | [optional]  |
 **excludeMetadata** | **Boolean** | Whether to exclude metadata for messages | [optional]  |

### Return type

**ChatMessageResponse**


## getChatsUserSettings

> ChatUserSettings getChatsUserSettings(userId)


GET /api/v2/chats/users/{userId}/settings

Get a user's chat settings

Requires ANY permissions:

* chat:usersettings:view
* chat:setting:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let userId = "userId_example"; // String | User ID

apiInstance.getChatsUserSettings(userId)
  .then((data) => {
    console.log(`getChatsUserSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsUserSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |

### Return type

**ChatUserSettings**


## getChatsUsersMeSettings

> UserSettingsForChat getChatsUsersMeSettings()


GET /api/v2/chats/users/me/settings

Get a user's chat settings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

apiInstance.getChatsUsersMeSettings()
  .then((data) => {
    console.log(`getChatsUsersMeSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getChatsUsersMeSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**UserSettingsForChat**


## patchChatsRoom

> void patchChatsRoom(roomJid, body)


PATCH /api/v2/chats/rooms/{roomJid}

Set properties for a room

Requires ANY permissions:

* chat:chat:access
* chat:room:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomJid
let body = {}; // Object | Room properties

apiInstance.patchChatsRoom(roomJid, body)
  .then(() => {
    console.log('patchChatsRoom returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling patchChatsRoom');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomJid |  |
 **body** | **Object** | Room properties |  |

### Return type

void (no response body)


## patchChatsRoomMessage

> ChatSendMessageResponse patchChatsRoomMessage(roomJid, messageId, body)


PATCH /api/v2/chats/rooms/{roomJid}/messages/{messageId}

Edit a message in a room

Requires ANY permissions:

* chat:chat:access
* chat:roomMessage:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomId
let messageId = "messageId_example"; // String | messageId
let body = {}; // Object | messageBody

apiInstance.patchChatsRoomMessage(roomJid, messageId, body)
  .then((data) => {
    console.log(`patchChatsRoomMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchChatsRoomMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomId |  |
 **messageId** | **String** | messageId |  |
 **body** | **Object** | messageBody |  |

### Return type

**ChatSendMessageResponse**


## patchChatsSettings

> ChatSettings patchChatsSettings(body)


PATCH /api/v2/chats/settings

Patch Chat Settings.

Requires ANY permissions:

* chat:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let body = {}; // Object | Chat

apiInstance.patchChatsSettings(body)
  .then((data) => {
    console.log(`patchChatsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchChatsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Chat |  |

### Return type

**ChatSettings**


## patchChatsUserMessage

> ChatSendMessageResponse patchChatsUserMessage(userId, messageId, body)


PATCH /api/v2/chats/users/{userId}/messages/{messageId}

Edit a message to a user

Requires ANY permissions:

* chat:chat:access
* chat:1on1Message:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let userId = "userId_example"; // String | userId
let messageId = "messageId_example"; // String | messageId
let body = {}; // Object | message body

apiInstance.patchChatsUserMessage(userId, messageId, body)
  .then((data) => {
    console.log(`patchChatsUserMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchChatsUserMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |
 **messageId** | **String** | messageId |  |
 **body** | **Object** | message body |  |

### Return type

**ChatSendMessageResponse**


## patchChatsUserSettings

> ChatUserSettings patchChatsUserSettings(userId, body)


PATCH /api/v2/chats/users/{userId}/settings

Update a user's chat settings

Requires ANY permissions:

* chat:usersettings:edit
* chat:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | 

apiInstance.patchChatsUserSettings(userId, body)
  .then((data) => {
    console.log(`patchChatsUserSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchChatsUserSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** |  |  |

### Return type

**ChatUserSettings**


## patchChatsUsersMeSettings

> UserSettingsForChat patchChatsUsersMeSettings(body)


PATCH /api/v2/chats/users/me/settings

Update a user's chat settings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let body = {}; // Object | 

apiInstance.patchChatsUsersMeSettings(body)
  .then((data) => {
    console.log(`patchChatsUsersMeSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchChatsUsersMeSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

**UserSettingsForChat**


## postChatsRoomMessages

> ChatSendMessageResponse postChatsRoomMessages(roomJid, body)


POST /api/v2/chats/rooms/{roomJid}/messages

Send a message to a room

Requires ANY permissions:

* chat:chat:access
* chat:roomMessage:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomId
let body = {}; // Object | messageBody

apiInstance.postChatsRoomMessages(roomJid, body)
  .then((data) => {
    console.log(`postChatsRoomMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postChatsRoomMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomId |  |
 **body** | **Object** | messageBody |  |

### Return type

**ChatSendMessageResponse**


## postChatsRoomMessagesPins

> void postChatsRoomMessagesPins(roomJid, body)


POST /api/v2/chats/rooms/{roomJid}/messages/pins

Add pinned messages for a room, up to a maximum of 5 pinned messages

Requires ANY permissions:

* chat:chat:access
* chat:room:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomJid
let body = {}; // Object | Pinned Message Ids

apiInstance.postChatsRoomMessagesPins(roomJid, body)
  .then(() => {
    console.log('postChatsRoomMessagesPins returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postChatsRoomMessagesPins');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomJid |  |
 **body** | **Object** | Pinned Message Ids |  |

### Return type

void (no response body)


## postChatsRoomParticipant

> void postChatsRoomParticipant(roomJid, userId)


POST /api/v2/chats/rooms/{roomJid}/participants/{userId}

Join a room

Requires ANY permissions:

* chat:chat:access
* chat:participant:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let roomJid = "roomJid_example"; // String | roomJid
let userId = "userId_example"; // String | userId

apiInstance.postChatsRoomParticipant(roomJid, userId)
  .then(() => {
    console.log('postChatsRoomParticipant returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postChatsRoomParticipant');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **roomJid** | **String** | roomJid |  |
 **userId** | **String** | userId |  |

### Return type

void (no response body)


## postChatsRooms

> CreateRoomResponse postChatsRooms(body)


POST /api/v2/chats/rooms

Create an adhoc room

Requires ANY permissions:

* chat:chat:access
* chat:room:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let body = {}; // Object | Room properties

apiInstance.postChatsRooms(body)
  .then((data) => {
    console.log(`postChatsRooms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postChatsRooms');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Room properties |  |

### Return type

**CreateRoomResponse**


## postChatsUserMessages

> ChatSendMessageResponse postChatsUserMessages(userId, body)


POST /api/v2/chats/users/{userId}/messages

Send a message to a user

Requires ANY permissions:

* chat:chat:access
* chat:1on1Message:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let userId = "userId_example"; // String | userId
let body = {}; // Object | message body

apiInstance.postChatsUserMessages(userId, body)
  .then((data) => {
    console.log(`postChatsUserMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postChatsUserMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |
 **body** | **Object** | message body |  |

### Return type

**ChatSendMessageResponse**


## postChatsUserMessagesPins

> void postChatsUserMessagesPins(userId, body)


POST /api/v2/chats/users/{userId}/messages/pins

Add pinned messages for a 1on1, up to a maximum of 5 pinned messages

Requires ANY permissions:

* chat:chat:access
* chat:1on1:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let userId = "userId_example"; // String | userId
let body = {}; // Object | Pinned Message Ids

apiInstance.postChatsUserMessagesPins(userId, body)
  .then(() => {
    console.log('postChatsUserMessagesPins returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postChatsUserMessagesPins');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |
 **body** | **Object** | Pinned Message Ids |  |

### Return type

void (no response body)


## postChatsUsersMeSettings

> void postChatsUsersMeSettings(body)


POST /api/v2/chats/users/me/settings

Create a user's chat settings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let body = {}; // Object | 

apiInstance.postChatsUsersMeSettings(body)
  .then(() => {
    console.log('postChatsUsersMeSettings returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postChatsUsersMeSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  |  |

### Return type

void (no response body)


## putChatsMessageReactions

> void putChatsMessageReactions(messageId, body)


PUT /api/v2/chats/messages/{messageId}/reactions

Update reactions to a message

Requires ANY permissions:

* chat:chat:access
* chat:reactions:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let messageId = "messageId_example"; // String | messageId
let body = {}; // Object | reactionUpdate

apiInstance.putChatsMessageReactions(messageId, body)
  .then(() => {
    console.log('putChatsMessageReactions returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putChatsMessageReactions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | messageId |  |
 **body** | **Object** | reactionUpdate |  |

### Return type

void (no response body)


## putChatsSettings

> ChatSettings putChatsSettings(body)


PUT /api/v2/chats/settings

Update Chat Settings.

Requires ANY permissions:

* chat:setting:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.ChatApi();

let body = {}; // Object | Chat

apiInstance.putChatsSettings(body)
  .then((data) => {
    console.log(`putChatsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putChatsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Chat |  |

### Return type

**ChatSettings**


_purecloud-platform-client-v2@229.1.0_
