---
title: VoicemailApi
---
# platformClient.VoicemailApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteVoicemailMessage**](VoicemailApi.html#deleteVoicemailMessage) | **DELETE** /api/v2/voicemail/messages/{messageId} | Delete a voicemail message.
[**deleteVoicemailMessages**](VoicemailApi.html#deleteVoicemailMessages) | **DELETE** /api/v2/voicemail/messages | Delete all voicemail messages
[**getVoicemailGroupMailbox**](VoicemailApi.html#getVoicemailGroupMailbox) | **GET** /api/v2/voicemail/groups/{groupId}/mailbox | Get the group&#39;s mailbox information
[**getVoicemailGroupMessages**](VoicemailApi.html#getVoicemailGroupMessages) | **GET** /api/v2/voicemail/groups/{groupId}/messages | List voicemail messages
[**getVoicemailGroupPolicy**](VoicemailApi.html#getVoicemailGroupPolicy) | **GET** /api/v2/voicemail/groups/{groupId}/policy | Get a group&#39;s voicemail policy
[**getVoicemailMailbox**](VoicemailApi.html#getVoicemailMailbox) | **GET** /api/v2/voicemail/mailbox | Get the current user&#39;s mailbox information
[**getVoicemailMeMailbox**](VoicemailApi.html#getVoicemailMeMailbox) | **GET** /api/v2/voicemail/me/mailbox | Get the current user&#39;s mailbox information
[**getVoicemailMeMessages**](VoicemailApi.html#getVoicemailMeMessages) | **GET** /api/v2/voicemail/me/messages | List voicemail messages
[**getVoicemailMePolicy**](VoicemailApi.html#getVoicemailMePolicy) | **GET** /api/v2/voicemail/me/policy | Get the current user&#39;s voicemail policy
[**getVoicemailMessage**](VoicemailApi.html#getVoicemailMessage) | **GET** /api/v2/voicemail/messages/{messageId} | Get a voicemail message
[**getVoicemailMessageMedia**](VoicemailApi.html#getVoicemailMessageMedia) | **GET** /api/v2/voicemail/messages/{messageId}/media | Get media playback URI for this voicemail message
[**getVoicemailMessages**](VoicemailApi.html#getVoicemailMessages) | **GET** /api/v2/voicemail/messages | List voicemail messages
[**getVoicemailPolicy**](VoicemailApi.html#getVoicemailPolicy) | **GET** /api/v2/voicemail/policy | Get a policy
[**getVoicemailQueueMessages**](VoicemailApi.html#getVoicemailQueueMessages) | **GET** /api/v2/voicemail/queues/{queueId}/messages | List voicemail messages
[**getVoicemailSearch**](VoicemailApi.html#getVoicemailSearch) | **GET** /api/v2/voicemail/search | Search voicemails using the q64 value returned from a previous search
[**getVoicemailUserpolicy**](VoicemailApi.html#getVoicemailUserpolicy) | **GET** /api/v2/voicemail/userpolicies/{userId} | Get a user&#39;s voicemail policy
[**patchVoicemailGroupPolicy**](VoicemailApi.html#patchVoicemailGroupPolicy) | **PATCH** /api/v2/voicemail/groups/{groupId}/policy | Update a group&#39;s voicemail policy
[**patchVoicemailMePolicy**](VoicemailApi.html#patchVoicemailMePolicy) | **PATCH** /api/v2/voicemail/me/policy | Update the current user&#39;s voicemail policy
[**patchVoicemailMessage**](VoicemailApi.html#patchVoicemailMessage) | **PATCH** /api/v2/voicemail/messages/{messageId} | Update a voicemail message
[**patchVoicemailUserpolicy**](VoicemailApi.html#patchVoicemailUserpolicy) | **PATCH** /api/v2/voicemail/userpolicies/{userId} | Update a user&#39;s voicemail policy
[**postVoicemailMessages**](VoicemailApi.html#postVoicemailMessages) | **POST** /api/v2/voicemail/messages | Copy a voicemail message to a user or group
[**postVoicemailSearch**](VoicemailApi.html#postVoicemailSearch) | **POST** /api/v2/voicemail/search | Search voicemails
[**putVoicemailMessage**](VoicemailApi.html#putVoicemailMessage) | **PUT** /api/v2/voicemail/messages/{messageId} | Update a voicemail message
[**putVoicemailPolicy**](VoicemailApi.html#putVoicemailPolicy) | **PUT** /api/v2/voicemail/policy | Update a policy
{: class="table table-striped"}

<a name="deleteVoicemailMessage"></a>

# void deleteVoicemailMessage(messageId)

DELETE /api/v2/voicemail/messages/{messageId}

Delete a voicemail message.

A user voicemail can only be deleted by its associated user. A group voicemail can only be deleted by a user that is a member of the group. A queue voicemail can only be deleted by a user with the acd voicemail delete permission.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var messageId = "messageId_example"; // String | Message ID

apiInstance.deleteVoicemailMessage(messageId)
  .then(function() {
    console.log('deleteVoicemailMessage returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteVoicemailMessage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | Message ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteVoicemailMessages"></a>

# void deleteVoicemailMessages()

DELETE /api/v2/voicemail/messages

Delete all voicemail messages



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();
apiInstance.deleteVoicemailMessages()
  .then(function() {
    console.log('deleteVoicemailMessages returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteVoicemailMessages');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getVoicemailGroupMailbox"></a>

# VoicemailMailboxInfo getVoicemailGroupMailbox(groupId)

GET /api/v2/voicemail/groups/{groupId}/mailbox

Get the group&#39;s mailbox information



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var groupId = "groupId_example"; // String | groupId

apiInstance.getVoicemailGroupMailbox(groupId)
  .then(function(data) {
    console.log(`getVoicemailGroupMailbox success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailGroupMailbox');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | groupId |  |
{: class="table table-striped"}

### Return type

**VoicemailMailboxInfo**

<a name="getVoicemailGroupMessages"></a>

# VoicemailMessageEntityListing getVoicemailGroupMessages(groupId, opts)

GET /api/v2/voicemail/groups/{groupId}/messages

List voicemail messages



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var groupId = "groupId_example"; // String | Group ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getVoicemailGroupMessages(groupId, opts)
  .then(function(data) {
    console.log(`getVoicemailGroupMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailGroupMessages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**VoicemailMessageEntityListing**

<a name="getVoicemailGroupPolicy"></a>

# VoicemailGroupPolicy getVoicemailGroupPolicy(groupId)

GET /api/v2/voicemail/groups/{groupId}/policy

Get a group&#39;s voicemail policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var groupId = "groupId_example"; // String | Group ID

apiInstance.getVoicemailGroupPolicy(groupId)
  .then(function(data) {
    console.log(`getVoicemailGroupPolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailGroupPolicy');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
{: class="table table-striped"}

### Return type

**VoicemailGroupPolicy**

<a name="getVoicemailMailbox"></a>

# VoicemailMailboxInfo getVoicemailMailbox()

GET /api/v2/voicemail/mailbox

Get the current user&#39;s mailbox information



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();
apiInstance.getVoicemailMailbox()
  .then(function(data) {
    console.log(`getVoicemailMailbox success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailMailbox');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**VoicemailMailboxInfo**

<a name="getVoicemailMeMailbox"></a>

# VoicemailMailboxInfo getVoicemailMeMailbox()

GET /api/v2/voicemail/me/mailbox

Get the current user&#39;s mailbox information



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();
apiInstance.getVoicemailMeMailbox()
  .then(function(data) {
    console.log(`getVoicemailMeMailbox success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailMeMailbox');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**VoicemailMailboxInfo**

<a name="getVoicemailMeMessages"></a>

# VoicemailMessageEntityListing getVoicemailMeMessages(opts)

GET /api/v2/voicemail/me/messages

List voicemail messages



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getVoicemailMeMessages(opts)
  .then(function(data) {
    console.log(`getVoicemailMeMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailMeMessages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**VoicemailMessageEntityListing**

<a name="getVoicemailMePolicy"></a>

# VoicemailUserPolicy getVoicemailMePolicy()

GET /api/v2/voicemail/me/policy

Get the current user&#39;s voicemail policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();
apiInstance.getVoicemailMePolicy()
  .then(function(data) {
    console.log(`getVoicemailMePolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailMePolicy');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**VoicemailUserPolicy**

<a name="getVoicemailMessage"></a>

# VoicemailMessage getVoicemailMessage(messageId, opts)

GET /api/v2/voicemail/messages/{messageId}

Get a voicemail message



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var messageId = "messageId_example"; // String | Message ID

var opts = { 
  'expand': ["expand_example"] // [String] | If the caller is a known user, which fields, if any, to expand
};
apiInstance.getVoicemailMessage(messageId, opts)
  .then(function(data) {
    console.log(`getVoicemailMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailMessage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | Message ID |  |
 **expand** | **[String]** | If the caller is a known user, which fields, if any, to expand | [optional] <br />**Values**: callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation |
{: class="table table-striped"}

### Return type

**VoicemailMessage**

<a name="getVoicemailMessageMedia"></a>

# VoicemailMediaInfo getVoicemailMessageMedia(messageId, opts)

GET /api/v2/voicemail/messages/{messageId}/media

Get media playback URI for this voicemail message



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var messageId = "messageId_example"; // String | Message ID

var opts = { 
  'formatId': "WEBM" // String | The desired media format.
};
apiInstance.getVoicemailMessageMedia(messageId, opts)
  .then(function(data) {
    console.log(`getVoicemailMessageMedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailMessageMedia');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | Message ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
{: class="table table-striped"}

### Return type

**VoicemailMediaInfo**

<a name="getVoicemailMessages"></a>

# VoicemailMessageEntityListing getVoicemailMessages(opts)

GET /api/v2/voicemail/messages

List voicemail messages



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var opts = { 
  'ids': "ids_example", // String | An optional comma separated list of VoicemailMessage ids
  'expand': ["expand_example"] // [String] | If the caller is a known user, which fields, if any, to expand
};
apiInstance.getVoicemailMessages(opts)
  .then(function(data) {
    console.log(`getVoicemailMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailMessages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ids** | **String** | An optional comma separated list of VoicemailMessage ids | [optional]  |
 **expand** | **[String]** | If the caller is a known user, which fields, if any, to expand | [optional] <br />**Values**: callerUser.routingStatus, callerUser.primaryPresence, callerUser.conversationSummary, callerUser.outOfOffice, callerUser.geolocation |
{: class="table table-striped"}

### Return type

**VoicemailMessageEntityListing**

<a name="getVoicemailPolicy"></a>

# VoicemailOrganizationPolicy getVoicemailPolicy()

GET /api/v2/voicemail/policy

Get a policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();
apiInstance.getVoicemailPolicy()
  .then(function(data) {
    console.log(`getVoicemailPolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailPolicy');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**VoicemailOrganizationPolicy**

<a name="getVoicemailQueueMessages"></a>

# VoicemailMessageEntityListing getVoicemailQueueMessages(queueId, opts)

GET /api/v2/voicemail/queues/{queueId}/messages

List voicemail messages



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var queueId = "queueId_example"; // String | Queue ID

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getVoicemailQueueMessages(queueId, opts)
  .then(function(data) {
    console.log(`getVoicemailQueueMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailQueueMessages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **queueId** | **String** | Queue ID |  |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
{: class="table table-striped"}

### Return type

**VoicemailMessageEntityListing**

<a name="getVoicemailSearch"></a>

# VoicemailsSearchResponse getVoicemailSearch(q64, opts)

GET /api/v2/voicemail/search

Search voicemails using the q64 value returned from a previous search



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var q64 = "q64_example"; // String | q64

var opts = { 
  'expand': ["expand_example"] // [String] | expand
};
apiInstance.getVoicemailSearch(q64, opts)
  .then(function(data) {
    console.log(`getVoicemailSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailSearch');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **q64** | **String** | q64 |  |
 **expand** | **[String]** | expand | [optional]  |
{: class="table table-striped"}

### Return type

**VoicemailsSearchResponse**

<a name="getVoicemailUserpolicy"></a>

# VoicemailUserPolicy getVoicemailUserpolicy(userId)

GET /api/v2/voicemail/userpolicies/{userId}

Get a user&#39;s voicemail policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var userId = "userId_example"; // String | User ID

apiInstance.getVoicemailUserpolicy(userId)
  .then(function(data) {
    console.log(`getVoicemailUserpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getVoicemailUserpolicy');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
{: class="table table-striped"}

### Return type

**VoicemailUserPolicy**

<a name="patchVoicemailGroupPolicy"></a>

# VoicemailGroupPolicy patchVoicemailGroupPolicy(groupId, body)

PATCH /api/v2/voicemail/groups/{groupId}/policy

Update a group&#39;s voicemail policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var groupId = "groupId_example"; // String | Group ID

var body = {}; // Object | The group's voicemail policy

apiInstance.patchVoicemailGroupPolicy(groupId, body)
  .then(function(data) {
    console.log(`patchVoicemailGroupPolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchVoicemailGroupPolicy');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **groupId** | **String** | Group ID |  |
 **body** | **Object** | The group&#39;s voicemail policy |  |
{: class="table table-striped"}

### Return type

**VoicemailGroupPolicy**

<a name="patchVoicemailMePolicy"></a>

# VoicemailUserPolicy patchVoicemailMePolicy(body)

PATCH /api/v2/voicemail/me/policy

Update the current user&#39;s voicemail policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var body = {}; // Object | The user's voicemail policy

apiInstance.patchVoicemailMePolicy(body)
  .then(function(data) {
    console.log(`patchVoicemailMePolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchVoicemailMePolicy');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The user&#39;s voicemail policy |  |
{: class="table table-striped"}

### Return type

**VoicemailUserPolicy**

<a name="patchVoicemailMessage"></a>

# VoicemailMessage patchVoicemailMessage(messageId, body)

PATCH /api/v2/voicemail/messages/{messageId}

Update a voicemail message

A user voicemail can only be modified by its associated user. A group voicemail can only be modified by a user that is a member of the group. A queue voicemail can only be modified by a participant of the conversation the voicemail is associated with.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var messageId = "messageId_example"; // String | Message ID

var body = {}; // Object | VoicemailMessage

apiInstance.patchVoicemailMessage(messageId, body)
  .then(function(data) {
    console.log(`patchVoicemailMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchVoicemailMessage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | Message ID |  |
 **body** | **Object** | VoicemailMessage |  |
{: class="table table-striped"}

### Return type

**VoicemailMessage**

<a name="patchVoicemailUserpolicy"></a>

# VoicemailUserPolicy patchVoicemailUserpolicy(userId, body)

PATCH /api/v2/voicemail/userpolicies/{userId}

Update a user&#39;s voicemail policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var userId = "userId_example"; // String | User ID

var body = {}; // Object | The user's voicemail policy

apiInstance.patchVoicemailUserpolicy(userId, body)
  .then(function(data) {
    console.log(`patchVoicemailUserpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchVoicemailUserpolicy');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **userId** | **String** | User ID |  |
 **body** | **Object** | The user&#39;s voicemail policy |  |
{: class="table table-striped"}

### Return type

**VoicemailUserPolicy**

<a name="postVoicemailMessages"></a>

# VoicemailMessage postVoicemailMessages(opts)

POST /api/v2/voicemail/messages

Copy a voicemail message to a user or group



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var opts = { 
  'body': {} // Object | 
};
apiInstance.postVoicemailMessages(opts)
  .then(function(data) {
    console.log(`postVoicemailMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postVoicemailMessages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**VoicemailMessage**

<a name="postVoicemailSearch"></a>

# VoicemailsSearchResponse postVoicemailSearch(body)

POST /api/v2/voicemail/search

Search voicemails



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var body = {}; // Object | Search request options

apiInstance.postVoicemailSearch(body)
  .then(function(data) {
    console.log(`postVoicemailSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postVoicemailSearch');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**VoicemailsSearchResponse**

<a name="putVoicemailMessage"></a>

# VoicemailMessage putVoicemailMessage(messageId, body)

PUT /api/v2/voicemail/messages/{messageId}

Update a voicemail message

A user voicemail can only be modified by its associated user. A group voicemail can only be modified by a user that is a member of the group. A queue voicemail can only be modified by a participant of the conversation the voicemail is associated with.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var messageId = "messageId_example"; // String | Message ID

var body = {}; // Object | VoicemailMessage

apiInstance.putVoicemailMessage(messageId, body)
  .then(function(data) {
    console.log(`putVoicemailMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putVoicemailMessage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **messageId** | **String** | Message ID |  |
 **body** | **Object** | VoicemailMessage |  |
{: class="table table-striped"}

### Return type

**VoicemailMessage**

<a name="putVoicemailPolicy"></a>

# VoicemailOrganizationPolicy putVoicemailPolicy(body)

PUT /api/v2/voicemail/policy

Update a policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.VoicemailApi();

var body = {}; // Object | Policy

apiInstance.putVoicemailPolicy(body)
  .then(function(data) {
    console.log(`putVoicemailPolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putVoicemailPolicy');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Policy |  |
{: class="table table-striped"}

### Return type

**VoicemailOrganizationPolicy**

