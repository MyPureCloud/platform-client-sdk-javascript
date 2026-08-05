# VoicemailApi

# platformClient.VoicemailApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteVoicemailMessage**](VoicemailApi#deleteVoicemailMessage) | **DELETE** /api/v2/voicemail/messages/{messageId} | Delete a voicemail message.
[**deleteVoicemailMessages**](VoicemailApi#deleteVoicemailMessages) | **DELETE** /api/v2/voicemail/messages | Delete all voicemail messages
[**getVoicemailGroupMailbox**](VoicemailApi#getVoicemailGroupMailbox) | **GET** /api/v2/voicemail/groups/{groupId}/mailbox | Get the group's mailbox information
[**getVoicemailGroupMessages**](VoicemailApi#getVoicemailGroupMessages) | **GET** /api/v2/voicemail/groups/{groupId}/messages | List voicemail messages
[**getVoicemailGroupPolicy**](VoicemailApi#getVoicemailGroupPolicy) | **GET** /api/v2/voicemail/groups/{groupId}/policy | Get a group's voicemail policy
[**getVoicemailMailbox**](VoicemailApi#getVoicemailMailbox) | **GET** /api/v2/voicemail/mailbox | Get the current user's mailbox information
[**getVoicemailMeMailbox**](VoicemailApi#getVoicemailMeMailbox) | **GET** /api/v2/voicemail/me/mailbox | Get the current user's mailbox information
[**getVoicemailMeMessages**](VoicemailApi#getVoicemailMeMessages) | **GET** /api/v2/voicemail/me/messages | List voicemail messages
[**getVoicemailMePolicy**](VoicemailApi#getVoicemailMePolicy) | **GET** /api/v2/voicemail/me/policy | Get the current user's voicemail policy
[**getVoicemailMessage**](VoicemailApi#getVoicemailMessage) | **GET** /api/v2/voicemail/messages/{messageId} | Get a voicemail message
[**getVoicemailMessageMedia**](VoicemailApi#getVoicemailMessageMedia) | **GET** /api/v2/voicemail/messages/{messageId}/media | Get media playback URI for this voicemail message
[**getVoicemailMessages**](VoicemailApi#getVoicemailMessages) | **GET** /api/v2/voicemail/messages | List voicemail messages
[**getVoicemailPolicy**](VoicemailApi#getVoicemailPolicy) | **GET** /api/v2/voicemail/policy | Get a policy
[**getVoicemailQueueMessages**](VoicemailApi#getVoicemailQueueMessages) | **GET** /api/v2/voicemail/queues/{queueId}/messages | List voicemail messages
[**getVoicemailSearch**](VoicemailApi#getVoicemailSearch) | **GET** /api/v2/voicemail/search | Search voicemails using the q64 value returned from a previous search
[**getVoicemailUserMailbox**](VoicemailApi#getVoicemailUserMailbox) | **GET** /api/v2/voicemail/users/{userId}/mailbox | Get a user's mailbox information
[**getVoicemailUserMessages**](VoicemailApi#getVoicemailUserMessages) | **GET** /api/v2/voicemail/users/{userId}/messages | List voicemail messages
[**getVoicemailUserpolicy**](VoicemailApi#getVoicemailUserpolicy) | **GET** /api/v2/voicemail/userpolicies/{userId} | Get a user's voicemail policy
[**patchVoicemailGroupPolicy**](VoicemailApi#patchVoicemailGroupPolicy) | **PATCH** /api/v2/voicemail/groups/{groupId}/policy | Update a group's voicemail policy
[**patchVoicemailMePolicy**](VoicemailApi#patchVoicemailMePolicy) | **PATCH** /api/v2/voicemail/me/policy | Update the current user's voicemail policy
[**patchVoicemailMessage**](VoicemailApi#patchVoicemailMessage) | **PATCH** /api/v2/voicemail/messages/{messageId} | Update a voicemail message
[**patchVoicemailUserpolicy**](VoicemailApi#patchVoicemailUserpolicy) | **PATCH** /api/v2/voicemail/userpolicies/{userId} | Update a user's voicemail policy
[**postVoicemailMessages**](VoicemailApi#postVoicemailMessages) | **POST** /api/v2/voicemail/messages | Copy a voicemail message to a user or group
[**postVoicemailSearch**](VoicemailApi#postVoicemailSearch) | **POST** /api/v2/voicemail/search | Search voicemails
[**putVoicemailMessage**](VoicemailApi#putVoicemailMessage) | **PUT** /api/v2/voicemail/messages/{messageId} | Update a voicemail message
[**putVoicemailPolicy**](VoicemailApi#putVoicemailPolicy) | **PUT** /api/v2/voicemail/policy | Update a policy
[**putVoicemailUserpolicy**](VoicemailApi#putVoicemailUserpolicy) | **PUT** /api/v2/voicemail/userpolicies/{userId} | Update a user's voicemail policy



## deleteVoicemailMessage

> void deleteVoicemailMessage(messageId, opts)


DELETE /api/v2/voicemail/messages/{messageId}

Delete a voicemail message.

A user voicemail can only be deleted by its associated user. A group voicemail can only be deleted by a user that is a member of the group. A queue voicemail can only be deleted by a user with the acd voicemail delete permission.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let messageId = "messageId_example"; // String | Message ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteVoicemailMessage(messageId, opts)
  .then(() => {
    console.log('deleteVoicemailMessage returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteVoicemailMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | Message ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteVoicemailMessages

> void deleteVoicemailMessages(opts)


DELETE /api/v2/voicemail/messages

Delete all voicemail messages

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteVoicemailMessages(opts)
  .then(() => {
    console.log('deleteVoicemailMessages returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteVoicemailMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getVoicemailGroupMailbox

> VoicemailMailboxInfo getVoicemailGroupMailbox(groupId, opts)


GET /api/v2/voicemail/groups/{groupId}/mailbox

Get the group's mailbox information

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let groupId = "groupId_example"; // String | groupId
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailGroupMailbox(groupId, opts)
  .then((data) => {
    console.log(`getVoicemailGroupMailbox success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailGroupMailbox');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | groupId |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMailboxInfo**


## getVoicemailGroupMessages

> VoicemailMessageEntityListing getVoicemailGroupMessages(groupId, opts)


GET /api/v2/voicemail/groups/{groupId}/messages

List voicemail messages

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let groupId = "groupId_example"; // String | Group ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailGroupMessages(groupId, opts)
  .then((data) => {
    console.log(`getVoicemailGroupMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailGroupMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMessageEntityListing**


## getVoicemailGroupPolicy

> VoicemailGroupPolicy getVoicemailGroupPolicy(groupId, opts)


GET /api/v2/voicemail/groups/{groupId}/policy

Get a group's voicemail policy

Requires ANY permissions:

* voicemail:groupPolicy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let groupId = "groupId_example"; // String | Group ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailGroupPolicy(groupId, opts)
  .then((data) => {
    console.log(`getVoicemailGroupPolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailGroupPolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailGroupPolicy**


## getVoicemailMailbox

> VoicemailMailboxInfo getVoicemailMailbox(opts)


GET /api/v2/voicemail/mailbox

Get the current user's mailbox information

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailMailbox(opts)
  .then((data) => {
    console.log(`getVoicemailMailbox success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailMailbox');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMailboxInfo**


## getVoicemailMeMailbox

> VoicemailMailboxInfo getVoicemailMeMailbox(opts)


GET /api/v2/voicemail/me/mailbox

Get the current user's mailbox information

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailMeMailbox(opts)
  .then((data) => {
    console.log(`getVoicemailMeMailbox success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailMeMailbox');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMailboxInfo**


## getVoicemailMeMessages

> VoicemailMessageEntityListing getVoicemailMeMessages(opts)


GET /api/v2/voicemail/me/messages

List voicemail messages

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailMeMessages(opts)
  .then((data) => {
    console.log(`getVoicemailMeMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailMeMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMessageEntityListing**


## getVoicemailMePolicy

> VoicemailUserPolicy getVoicemailMePolicy(opts)


GET /api/v2/voicemail/me/policy

Get the current user's voicemail policy

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailMePolicy(opts)
  .then((data) => {
    console.log(`getVoicemailMePolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailMePolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailUserPolicy**


## getVoicemailMessage

> VoicemailMessage getVoicemailMessage(messageId, opts)


GET /api/v2/voicemail/messages/{messageId}

Get a voicemail message

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let messageId = "messageId_example"; // String | Message ID
let opts = { 
  'expand': ["expand_example"], // [String] | If the caller is a known user, which fields, if any, to expand
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailMessage(messageId, opts)
  .then((data) => {
    console.log(`getVoicemailMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | Message ID |  |
 **expand** | **[String]** | If the caller is a known user, which fields, if any, to expand | [optional] <br />**Values**: callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation, conversations, transcription |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMessage**


## getVoicemailMessageMedia

> VoicemailMediaInfo getVoicemailMessageMedia(messageId, opts)


GET /api/v2/voicemail/messages/{messageId}/media

Get media playback URI for this voicemail message

API should migrate to use GET api/v2/voicemail/messages/{messageId}/downloads

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let messageId = "messageId_example"; // String | Message ID
let opts = { 
  'formatId': "WEBM", // String | The desired media format.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailMessageMedia(messageId, opts)
  .then((data) => {
    console.log(`getVoicemailMessageMedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailMessageMedia');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | Message ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMediaInfo**


## getVoicemailMessages

> VoicemailMessageEntityListing getVoicemailMessages(opts)


GET /api/v2/voicemail/messages

List voicemail messages

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let opts = { 
  'ids': "ids_example", // String | An optional comma separated list of VoicemailMessage ids
  'expand': ["expand_example"], // [String] | If the caller is a known user, which fields, if any, to expand
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailMessages(opts)
  .then((data) => {
    console.log(`getVoicemailMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ids** | **String** | An optional comma separated list of VoicemailMessage ids | [optional]  |
 **expand** | **[String]** | If the caller is a known user, which fields, if any, to expand | [optional] <br />**Values**: callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation, conversations, transcription |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMessageEntityListing**


## getVoicemailPolicy

> VoicemailOrganizationPolicy getVoicemailPolicy(opts)


GET /api/v2/voicemail/policy

Get a policy

Requires ALL permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailPolicy(opts)
  .then((data) => {
    console.log(`getVoicemailPolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailPolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailOrganizationPolicy**


## getVoicemailQueueMessages

> VoicemailMessageEntityListing getVoicemailQueueMessages(queueId, opts)


GET /api/v2/voicemail/queues/{queueId}/messages

List voicemail messages

Requires ANY permissions:

* voicemail:acdvoicemail:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let queueId = "queueId_example"; // String | Queue ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailQueueMessages(queueId, opts)
  .then((data) => {
    console.log(`getVoicemailQueueMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailQueueMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMessageEntityListing**


## getVoicemailSearch

> VoicemailsSearchResponse getVoicemailSearch(q64, opts)


GET /api/v2/voicemail/search

Search voicemails using the q64 value returned from a previous search

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let q64 = "q64_example"; // String | q64
let opts = { 
  'expand': ["expand_example"], // [String] | expand
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailSearch(q64, opts)
  .then((data) => {
    console.log(`getVoicemailSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailsSearchResponse**


## getVoicemailUserMailbox

> VoicemailMailboxInfo getVoicemailUserMailbox(userId, opts)


GET /api/v2/voicemail/users/{userId}/mailbox

Get a user's mailbox information

Requires ANY permissions:

* voicemail:mailbox:viewOther

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let userId = "userId_example"; // String | userId
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailUserMailbox(userId, opts)
  .then((data) => {
    console.log(`getVoicemailUserMailbox success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailUserMailbox');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | userId |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMailboxInfo**


## getVoicemailUserMessages

> VoicemailMessageEntityListing getVoicemailUserMessages(userId, opts)


GET /api/v2/voicemail/users/{userId}/messages

List voicemail messages

Requires ANY permissions:

* voicemail:voicemail:viewOther

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailUserMessages(userId, opts)
  .then((data) => {
    console.log(`getVoicemailUserMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailUserMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMessageEntityListing**


## getVoicemailUserpolicy

> VoicemailUserPolicy getVoicemailUserpolicy(userId, opts)


GET /api/v2/voicemail/userpolicies/{userId}

Get a user's voicemail policy

Requires ANY permissions:

* telephony:plugin:all
* voicemail:userPolicy:viewOther

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let userId = "userId_example"; // String | User ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getVoicemailUserpolicy(userId, opts)
  .then((data) => {
    console.log(`getVoicemailUserpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getVoicemailUserpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailUserPolicy**


## patchVoicemailGroupPolicy

> VoicemailGroupPolicy patchVoicemailGroupPolicy(groupId, body, opts)


PATCH /api/v2/voicemail/groups/{groupId}/policy

Update a group's voicemail policy

Requires ANY permissions:

* voicemail:groupPolicy:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let groupId = "groupId_example"; // String | Group ID
let body = {}; // Object | The group's voicemail policy
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchVoicemailGroupPolicy(groupId, body, opts)
  .then((data) => {
    console.log(`patchVoicemailGroupPolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchVoicemailGroupPolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | The group's voicemail policy |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailGroupPolicy**


## patchVoicemailMePolicy

> VoicemailUserPolicy patchVoicemailMePolicy(body, opts)


PATCH /api/v2/voicemail/me/policy

Update the current user's voicemail policy

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let body = {}; // Object | The user's voicemail policy
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchVoicemailMePolicy(body, opts)
  .then((data) => {
    console.log(`patchVoicemailMePolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchVoicemailMePolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The user's voicemail policy |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailUserPolicy**


## patchVoicemailMessage

> VoicemailMessage patchVoicemailMessage(messageId, body, opts)


PATCH /api/v2/voicemail/messages/{messageId}

Update a voicemail message

A user voicemail can only be modified by its associated user. A group voicemail can only be modified by a user that is a member of the group. A queue voicemail can only be modified by a participant of the conversation the voicemail is associated with.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let messageId = "messageId_example"; // String | Message ID
let body = {}; // Object | VoicemailMessage
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchVoicemailMessage(messageId, body, opts)
  .then((data) => {
    console.log(`patchVoicemailMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchVoicemailMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | Message ID |  |
 **body** | **Object** | VoicemailMessage |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMessage**


## patchVoicemailUserpolicy

> VoicemailUserPolicy patchVoicemailUserpolicy(userId, body, opts)


PATCH /api/v2/voicemail/userpolicies/{userId}

Update a user's voicemail policy

Requires ANY permissions:

* telephony:plugin:all
* voicemail:userPolicy:viewOther

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | The user's voicemail policy
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchVoicemailUserpolicy(userId, body, opts)
  .then((data) => {
    console.log(`patchVoicemailUserpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchVoicemailUserpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | The user's voicemail policy |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailUserPolicy**


## postVoicemailMessages

> VoicemailMessage postVoicemailMessages(opts)


POST /api/v2/voicemail/messages

Copy a voicemail message to a user or group

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postVoicemailMessages(opts)
  .then((data) => {
    console.log(`postVoicemailMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postVoicemailMessages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMessage**


## postVoicemailSearch

> VoicemailsSearchResponse postVoicemailSearch(body, opts)


POST /api/v2/voicemail/search

Search voicemails

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postVoicemailSearch(body, opts)
  .then((data) => {
    console.log(`postVoicemailSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postVoicemailSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailsSearchResponse**


## putVoicemailMessage

> VoicemailMessage putVoicemailMessage(messageId, body, opts)


PUT /api/v2/voicemail/messages/{messageId}

Update a voicemail message

A user voicemail can only be modified by its associated user. A group voicemail can only be modified by a user that is a member of the group. A queue voicemail can only be modified by a participant of the conversation the voicemail is associated with.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let messageId = "messageId_example"; // String | Message ID
let body = {}; // Object | VoicemailMessage
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putVoicemailMessage(messageId, body, opts)
  .then((data) => {
    console.log(`putVoicemailMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putVoicemailMessage');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | Message ID |  |
 **body** | **Object** | VoicemailMessage |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailMessage**


## putVoicemailPolicy

> VoicemailOrganizationPolicy putVoicemailPolicy(body, opts)


PUT /api/v2/voicemail/policy

Update a policy

Requires ALL permissions:

* telephony:plugin:all

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let body = {}; // Object | Policy
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putVoicemailPolicy(body, opts)
  .then((data) => {
    console.log(`putVoicemailPolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putVoicemailPolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Policy |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailOrganizationPolicy**


## putVoicemailUserpolicy

> VoicemailUserPolicy putVoicemailUserpolicy(userId, body, opts)


PUT /api/v2/voicemail/userpolicies/{userId}

Update a user's voicemail policy

Requires ANY permissions:

* telephony:plugin:all
* voicemail:userPolicy:viewOther

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.VoicemailApi();

let userId = "userId_example"; // String | User ID
let body = {}; // Object | The user's voicemail policy
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putVoicemailUserpolicy(userId, body, opts)
  .then((data) => {
    console.log(`putVoicemailUserpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putVoicemailUserpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | The user's voicemail policy |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**VoicemailUserPolicy**


_purecloud-platform-client-v2@258.1.0_
