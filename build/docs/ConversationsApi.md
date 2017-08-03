---
title: ConversationsApi
---
# platformClient.ConversationsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteConversationParticipantCode**](ConversationsApi.html#deleteConversationParticipantCode) | **DELETE** /api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode} | Delete a code used to add a communication to this participant
[**deleteConversationsCallParticipantConsult**](ConversationsApi.html#deleteConversationsCallParticipantConsult) | **DELETE** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult | Cancel the transfer
[**deleteConversationsEmailMessagesDraftAttachment**](ConversationsApi.html#deleteConversationsEmailMessagesDraftAttachment) | **DELETE** /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/{attachmentId} | Delete attachment from draft
[**getAnalyticsConversationDetails**](ConversationsApi.html#getAnalyticsConversationDetails) | **GET** /api/v2/analytics/conversations/{conversationId}/details | Get a conversation by id
[**getConversation**](ConversationsApi.html#getConversation) | **GET** /api/v2/conversations/{conversationId} | Get conversation
[**getConversationParticipantWrapup**](ConversationsApi.html#getConversationParticipantWrapup) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationParticipantWrapupcodes**](ConversationsApi.html#getConversationParticipantWrapupcodes) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversations**](ConversationsApi.html#getConversations) | **GET** /api/v2/conversations | Get conversations
[**getConversationsCall**](ConversationsApi.html#getConversationsCall) | **GET** /api/v2/conversations/calls/{conversationId} | Get call conversation
[**getConversationsCallParticipantWrapup**](ConversationsApi.html#getConversationsCallParticipantWrapup) | **GET** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsCallParticipantWrapupcodes**](ConversationsApi.html#getConversationsCallParticipantWrapupcodes) | **GET** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsCallback**](ConversationsApi.html#getConversationsCallback) | **GET** /api/v2/conversations/callbacks/{conversationId} | Get callback conversation
[**getConversationsCallbackParticipantWrapup**](ConversationsApi.html#getConversationsCallbackParticipantWrapup) | **GET** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsCallbackParticipantWrapupcodes**](ConversationsApi.html#getConversationsCallbackParticipantWrapupcodes) | **GET** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsCallbacks**](ConversationsApi.html#getConversationsCallbacks) | **GET** /api/v2/conversations/callbacks | Get callback conversations
[**getConversationsCalls**](ConversationsApi.html#getConversationsCalls) | **GET** /api/v2/conversations/calls | Get recent conversations
[**getConversationsCallsHistory**](ConversationsApi.html#getConversationsCallsHistory) | **GET** /api/v2/conversations/calls/history | Get call history
[**getConversationsCallsMaximumconferenceparties**](ConversationsApi.html#getConversationsCallsMaximumconferenceparties) | **GET** /api/v2/conversations/calls/maximumconferenceparties | Get the maximum number of participants that this user can have on a conference
[**getConversationsChat**](ConversationsApi.html#getConversationsChat) | **GET** /api/v2/conversations/chats/{conversationId} | Get chat conversation
[**getConversationsChatParticipantWrapup**](ConversationsApi.html#getConversationsChatParticipantWrapup) | **GET** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsChatParticipantWrapupcodes**](ConversationsApi.html#getConversationsChatParticipantWrapupcodes) | **GET** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsChats**](ConversationsApi.html#getConversationsChats) | **GET** /api/v2/conversations/chats | Get recent chat conversations
[**getConversationsCobrowsesession**](ConversationsApi.html#getConversationsCobrowsesession) | **GET** /api/v2/conversations/cobrowsesessions/{conversationId} | Get cobrowse conversation
[**getConversationsCobrowsesessionParticipantWrapup**](ConversationsApi.html#getConversationsCobrowsesessionParticipantWrapup) | **GET** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsCobrowsesessionParticipantWrapupcodes**](ConversationsApi.html#getConversationsCobrowsesessionParticipantWrapupcodes) | **GET** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsCobrowsesessions**](ConversationsApi.html#getConversationsCobrowsesessions) | **GET** /api/v2/conversations/cobrowsesessions | Get recent cobrowse conversations
[**getConversationsEmail**](ConversationsApi.html#getConversationsEmail) | **GET** /api/v2/conversations/emails/{conversationId} | Get email conversation
[**getConversationsEmailMessage**](ConversationsApi.html#getConversationsEmailMessage) | **GET** /api/v2/conversations/emails/{conversationId}/messages/{messageId} | Get conversation message
[**getConversationsEmailMessages**](ConversationsApi.html#getConversationsEmailMessages) | **GET** /api/v2/conversations/emails/{conversationId}/messages | Get conversation messages
[**getConversationsEmailMessagesDraft**](ConversationsApi.html#getConversationsEmailMessagesDraft) | **GET** /api/v2/conversations/emails/{conversationId}/messages/draft | Get conversation draft reply
[**getConversationsEmailParticipantWrapup**](ConversationsApi.html#getConversationsEmailParticipantWrapup) | **GET** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsEmailParticipantWrapupcodes**](ConversationsApi.html#getConversationsEmailParticipantWrapupcodes) | **GET** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsEmails**](ConversationsApi.html#getConversationsEmails) | **GET** /api/v2/conversations/emails | Get recent email conversations
[**patchConversationParticipant**](ConversationsApi.html#patchConversationParticipant) | **PATCH** /api/v2/conversations/{conversationId}/participants/{participantId} | Update a participant.
[**patchConversationParticipantAttributes**](ConversationsApi.html#patchConversationParticipantAttributes) | **PATCH** /api/v2/conversations/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsCall**](ConversationsApi.html#patchConversationsCall) | **PATCH** /api/v2/conversations/calls/{conversationId} | Update a conversation by setting it&#39;s recording state, merging in other conversations to create a conference, or disconnecting all of the participants
[**patchConversationsCallParticipant**](ConversationsApi.html#patchConversationsCallParticipant) | **PATCH** /api/v2/conversations/calls/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsCallParticipantAttributes**](ConversationsApi.html#patchConversationsCallParticipantAttributes) | **PATCH** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsCallParticipantCommunication**](ConversationsApi.html#patchConversationsCallParticipantCommunication) | **PATCH** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant&#39;s communication by disconnecting it.
[**patchConversationsCallParticipantConsult**](ConversationsApi.html#patchConversationsCallParticipantConsult) | **PATCH** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult | Change who can speak
[**patchConversationsCallback**](ConversationsApi.html#patchConversationsCallback) | **PATCH** /api/v2/conversations/callbacks/{conversationId} | Update a conversation by disconnecting all of the participants
[**patchConversationsCallbackParticipant**](ConversationsApi.html#patchConversationsCallbackParticipant) | **PATCH** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsCallbackParticipantAttributes**](ConversationsApi.html#patchConversationsCallbackParticipantAttributes) | **PATCH** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsCallbackParticipantCommunication**](ConversationsApi.html#patchConversationsCallbackParticipantCommunication) | **PATCH** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant&#39;s communication by disconnecting it.
[**patchConversationsChat**](ConversationsApi.html#patchConversationsChat) | **PATCH** /api/v2/conversations/chats/{conversationId} | Update a conversation by disconnecting all of the participants
[**patchConversationsChatParticipant**](ConversationsApi.html#patchConversationsChatParticipant) | **PATCH** /api/v2/conversations/chats/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsChatParticipantAttributes**](ConversationsApi.html#patchConversationsChatParticipantAttributes) | **PATCH** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsChatParticipantCommunication**](ConversationsApi.html#patchConversationsChatParticipantCommunication) | **PATCH** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant&#39;s communication by disconnecting it.
[**patchConversationsCobrowsesession**](ConversationsApi.html#patchConversationsCobrowsesession) | **PATCH** /api/v2/conversations/cobrowsesessions/{conversationId} | Update a conversation by disconnecting all of the participants
[**patchConversationsCobrowsesessionParticipant**](ConversationsApi.html#patchConversationsCobrowsesessionParticipant) | **PATCH** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsCobrowsesessionParticipantAttributes**](ConversationsApi.html#patchConversationsCobrowsesessionParticipantAttributes) | **PATCH** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsCobrowsesessionParticipantCommunication**](ConversationsApi.html#patchConversationsCobrowsesessionParticipantCommunication) | **PATCH** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant&#39;s communication by disconnecting it.
[**patchConversationsEmail**](ConversationsApi.html#patchConversationsEmail) | **PATCH** /api/v2/conversations/emails/{conversationId} | Update a conversation by disconnecting all of the participants
[**patchConversationsEmailParticipant**](ConversationsApi.html#patchConversationsEmailParticipant) | **PATCH** /api/v2/conversations/emails/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsEmailParticipantAttributes**](ConversationsApi.html#patchConversationsEmailParticipantAttributes) | **PATCH** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsEmailParticipantCommunication**](ConversationsApi.html#patchConversationsEmailParticipantCommunication) | **PATCH** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant&#39;s communication by disconnecting it.
[**postAnalyticsConversationDetailsProperties**](ConversationsApi.html#postAnalyticsConversationDetailsProperties) | **POST** /api/v2/analytics/conversations/{conversationId}/details/properties | Index conversation properties
[**postAnalyticsConversationsAggregatesQuery**](ConversationsApi.html#postAnalyticsConversationsAggregatesQuery) | **POST** /api/v2/analytics/conversations/aggregates/query | Query for conversation aggregates
[**postAnalyticsConversationsDetailsQuery**](ConversationsApi.html#postAnalyticsConversationsDetailsQuery) | **POST** /api/v2/analytics/conversations/details/query | Query for conversation details
[**postConversationParticipantCallbacks**](ConversationsApi.html#postConversationParticipantCallbacks) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/callbacks | Create a new callback for the specified participant on the conversation.
[**postConversationParticipantReplace**](ConversationsApi.html#postConversationParticipantReplace) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsCall**](ConversationsApi.html#postConversationsCall) | **POST** /api/v2/conversations/calls/{conversationId} | Add a new call to a conversation
[**postConversationsCallParticipantConsult**](ConversationsApi.html#postConversationsCallParticipantConsult) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult | Initiate and update consult transfer
[**postConversationsCallParticipantMonitor**](ConversationsApi.html#postConversationsCallParticipantMonitor) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/monitor | Listen in on the conversation from the point of view of a given participant.
[**postConversationsCallParticipantReplace**](ConversationsApi.html#postConversationsCallParticipantReplace) | **POST** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsCallParticipants**](ConversationsApi.html#postConversationsCallParticipants) | **POST** /api/v2/conversations/calls/{conversationId}/participants | Add participants to a conversation
[**postConversationsCallbackParticipantReplace**](ConversationsApi.html#postConversationsCallbackParticipantReplace) | **POST** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsCallbacks**](ConversationsApi.html#postConversationsCallbacks) | **POST** /api/v2/conversations/callbacks | Create a Callback
[**postConversationsCalls**](ConversationsApi.html#postConversationsCalls) | **POST** /api/v2/conversations/calls | Create a call conversation
[**postConversationsChatParticipantReplace**](ConversationsApi.html#postConversationsChatParticipantReplace) | **POST** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsChats**](ConversationsApi.html#postConversationsChats) | **POST** /api/v2/conversations/chats | Create a web chat conversation
[**postConversationsCobrowsesessionParticipantReplace**](ConversationsApi.html#postConversationsCobrowsesessionParticipantReplace) | **POST** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsEmailMessages**](ConversationsApi.html#postConversationsEmailMessages) | **POST** /api/v2/conversations/emails/{conversationId}/messages | Send an email reply
[**postConversationsEmailParticipantReplace**](ConversationsApi.html#postConversationsEmailParticipantReplace) | **POST** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsEmails**](ConversationsApi.html#postConversationsEmails) | **POST** /api/v2/conversations/emails | Create an email conversation
[**postConversationsFaxes**](ConversationsApi.html#postConversationsFaxes) | **POST** /api/v2/conversations/faxes | Create Fax Conversation
[**putConversationsCallParticipantCommunicationUuidata**](ConversationsApi.html#putConversationsCallParticipantCommunicationUuidata) | **PUT** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata | Set uuiData to be sent on future commands.
[**putConversationsEmailMessagesDraft**](ConversationsApi.html#putConversationsEmailMessagesDraft) | **PUT** /api/v2/conversations/emails/{conversationId}/messages/draft | Update conversation draft reply
{: class="table table-striped"}

<a name="deleteConversationParticipantCode"></a>

# void deleteConversationParticipantCode(conversationId, participantId, addCommunicationCode)

DELETE /api/v2/conversations/{conversationId}/participants/{participantId}/codes/{addCommunicationCode}

Delete a code used to add a communication to this participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversation ID

var participantId = "participantId_example"; // String | participant ID

var addCommunicationCode = "addCommunicationCode_example"; // String | addCommunicationCode

apiInstance.deleteConversationParticipantCode(conversationId, participantId, addCommunicationCode)
  .then(function() {
    console.log('deleteConversationParticipantCode returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteConversationParticipantCode');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **addCommunicationCode** | **String** | addCommunicationCode |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteConversationsCallParticipantConsult"></a>

# void deleteConversationsCallParticipantConsult(conversationId, participantId)

DELETE /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult

Cancel the transfer



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

apiInstance.deleteConversationsCallParticipantConsult(conversationId, participantId)
  .then(function() {
    console.log('deleteConversationsCallParticipantConsult returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteConversationsCallParticipantConsult');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteConversationsEmailMessagesDraftAttachment"></a>

# void deleteConversationsEmailMessagesDraftAttachment(conversationId, attachmentId)

DELETE /api/v2/conversations/emails/{conversationId}/messages/draft/attachments/{attachmentId}

Delete attachment from draft



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var attachmentId = "attachmentId_example"; // String | attachmentId

apiInstance.deleteConversationsEmailMessagesDraftAttachment(conversationId, attachmentId)
  .then(function() {
    console.log('deleteConversationsEmailMessagesDraftAttachment returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling deleteConversationsEmailMessagesDraftAttachment');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **attachmentId** | **String** | attachmentId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getAnalyticsConversationDetails"></a>

# [**AnalyticsConversation**](AnalyticsConversation.html) getAnalyticsConversationDetails(conversationId)

GET /api/v2/analytics/conversations/{conversationId}/details

Get a conversation by id



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

apiInstance.getAnalyticsConversationDetails(conversationId)
  .then(function(data) {
    console.log(`getAnalyticsConversationDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getAnalyticsConversationDetails');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**AnalyticsConversation**

<a name="getConversation"></a>

# [**Conversation**](Conversation.html) getConversation(conversationId)

GET /api/v2/conversations/{conversationId}

Get conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversation ID

apiInstance.getConversation(conversationId)
  .then(function(data) {
    console.log(`getConversation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversation');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="getConversationParticipantWrapup"></a>

# [**WrapupCode**](WrapupCode.html) getConversationParticipantWrapup(conversationId, participantId, opts)

GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversation ID

var participantId = "participantId_example"; // String | participant ID

var opts = { 
  'provisional': false // Boolean | Indicates if the wrap-up code is provisional.
};
apiInstance.getConversationParticipantWrapup(conversationId, participantId, opts)
  .then(function(data) {
    console.log(`getConversationParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationParticipantWrapup');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **provisional** | **Boolean** | Indicates if the wrap-up code is provisional. | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**WrapupCode**

<a name="getConversationParticipantWrapupcodes"></a>

# [**[WrapupCode]**](WrapupCode.html) getConversationParticipantWrapupcodes(conversationId, participantId)

GET /api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversation ID

var participantId = "participantId_example"; // String | participant ID

apiInstance.getConversationParticipantWrapupcodes(conversationId, participantId)
  .then(function(data) {
    console.log(`getConversationParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationParticipantWrapupcodes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
{: class="table table-striped"}

### Return type

**[WrapupCode]**

<a name="getConversations"></a>

# [**ConversationEntityListing**](ConversationEntityListing.html) getConversations(opts)

GET /api/v2/conversations

Get conversations



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var opts = { 
  'communicationType': "communicationType_example" // String | Call or Chat communication filtering
};
apiInstance.getConversations(opts)
  .then(function(data) {
    console.log(`getConversations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversations');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **communicationType** | **String** | Call or Chat communication filtering | [optional]  |
{: class="table table-striped"}

### Return type

**ConversationEntityListing**

<a name="getConversationsCall"></a>

# [**CallConversation**](CallConversation.html) getConversationsCall(conversationId)

GET /api/v2/conversations/calls/{conversationId}

Get call conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsCall(conversationId)
  .then(function(data) {
    console.log(`getConversationsCall success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCall');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**CallConversation**

<a name="getConversationsCallParticipantWrapup"></a>

# [**Wrapup**](Wrapup.html) getConversationsCallParticipantWrapup(conversationId, participantId, opts)

GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var opts = { 
  'provisional': false // Boolean | Indicates if the wrap-up code is provisional.
};
apiInstance.getConversationsCallParticipantWrapup(conversationId, participantId, opts)
  .then(function(data) {
    console.log(`getConversationsCallParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCallParticipantWrapup');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates if the wrap-up code is provisional. | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Wrapup**

<a name="getConversationsCallParticipantWrapupcodes"></a>

# [**[WrapupCode]**](WrapupCode.html) getConversationsCallParticipantWrapupcodes(conversationId, participantId)

GET /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsCallParticipantWrapupcodes(conversationId, participantId)
  .then(function(data) {
    console.log(`getConversationsCallParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCallParticipantWrapupcodes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
{: class="table table-striped"}

### Return type

**[WrapupCode]**

<a name="getConversationsCallback"></a>

# [**CallbackConversation**](CallbackConversation.html) getConversationsCallback(conversationId)

GET /api/v2/conversations/callbacks/{conversationId}

Get callback conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsCallback(conversationId)
  .then(function(data) {
    console.log(`getConversationsCallback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCallback');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**CallbackConversation**

<a name="getConversationsCallbackParticipantWrapup"></a>

# [**Wrapup**](Wrapup.html) getConversationsCallbackParticipantWrapup(conversationId, participantId, opts)

GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var opts = { 
  'provisional': false // Boolean | Indicates if the wrap-up code is provisional.
};
apiInstance.getConversationsCallbackParticipantWrapup(conversationId, participantId, opts)
  .then(function(data) {
    console.log(`getConversationsCallbackParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCallbackParticipantWrapup');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates if the wrap-up code is provisional. | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Wrapup**

<a name="getConversationsCallbackParticipantWrapupcodes"></a>

# [**[WrapupCode]**](WrapupCode.html) getConversationsCallbackParticipantWrapupcodes(conversationId, participantId)

GET /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsCallbackParticipantWrapupcodes(conversationId, participantId)
  .then(function(data) {
    console.log(`getConversationsCallbackParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCallbackParticipantWrapupcodes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
{: class="table table-striped"}

### Return type

**[WrapupCode]**

<a name="getConversationsCallbacks"></a>

# [**CallbackConversationEntityListing**](CallbackConversationEntityListing.html) getConversationsCallbacks()

GET /api/v2/conversations/callbacks

Get callback conversations



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();
apiInstance.getConversationsCallbacks()
  .then(function(data) {
    console.log(`getConversationsCallbacks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCallbacks');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**CallbackConversationEntityListing**

<a name="getConversationsCalls"></a>

# [**CallConversationEntityListing**](CallConversationEntityListing.html) getConversationsCalls()

GET /api/v2/conversations/calls

Get recent conversations



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();
apiInstance.getConversationsCalls()
  .then(function(data) {
    console.log(`getConversationsCalls success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCalls');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**CallConversationEntityListing**

<a name="getConversationsCallsHistory"></a>

# [**CallConversationEntityListing**](CallConversationEntityListing.html) getConversationsCallsHistory(opts)

GET /api/v2/conversations/calls/history

Get call history



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'interval': "interval_example" // String | Interval string; format is ISO-8601. Separate start and end times with forward slash '/'
};
apiInstance.getConversationsCallsHistory(opts)
  .then(function(data) {
    console.log(`getConversationsCallsHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCallsHistory');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **interval** | **String** | Interval string; format is ISO-8601. Separate start and end times with forward slash &#39;/&#39; | [optional]  |
{: class="table table-striped"}

### Return type

**CallConversationEntityListing**

<a name="getConversationsCallsMaximumconferenceparties"></a>

# [**MaxParticipants**](MaxParticipants.html) getConversationsCallsMaximumconferenceparties()

GET /api/v2/conversations/calls/maximumconferenceparties

Get the maximum number of participants that this user can have on a conference



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();
apiInstance.getConversationsCallsMaximumconferenceparties()
  .then(function(data) {
    console.log(`getConversationsCallsMaximumconferenceparties success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCallsMaximumconferenceparties');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**MaxParticipants**

<a name="getConversationsChat"></a>

# [**ChatConversation**](ChatConversation.html) getConversationsChat(conversationId)

GET /api/v2/conversations/chats/{conversationId}

Get chat conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsChat(conversationId)
  .then(function(data) {
    console.log(`getConversationsChat success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsChat');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**ChatConversation**

<a name="getConversationsChatParticipantWrapup"></a>

# [**Wrapup**](Wrapup.html) getConversationsChatParticipantWrapup(conversationId, participantId, opts)

GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var opts = { 
  'provisional': false // Boolean | Indicates if the wrap-up code is provisional.
};
apiInstance.getConversationsChatParticipantWrapup(conversationId, participantId, opts)
  .then(function(data) {
    console.log(`getConversationsChatParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsChatParticipantWrapup');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates if the wrap-up code is provisional. | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Wrapup**

<a name="getConversationsChatParticipantWrapupcodes"></a>

# [**[WrapupCode]**](WrapupCode.html) getConversationsChatParticipantWrapupcodes(conversationId, participantId)

GET /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsChatParticipantWrapupcodes(conversationId, participantId)
  .then(function(data) {
    console.log(`getConversationsChatParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsChatParticipantWrapupcodes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
{: class="table table-striped"}

### Return type

**[WrapupCode]**

<a name="getConversationsChats"></a>

# [**ChatConversationEntityListing**](ChatConversationEntityListing.html) getConversationsChats()

GET /api/v2/conversations/chats

Get recent chat conversations



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();
apiInstance.getConversationsChats()
  .then(function(data) {
    console.log(`getConversationsChats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsChats');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**ChatConversationEntityListing**

<a name="getConversationsCobrowsesession"></a>

# [**CobrowseConversation**](CobrowseConversation.html) getConversationsCobrowsesession(conversationId)

GET /api/v2/conversations/cobrowsesessions/{conversationId}

Get cobrowse conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsCobrowsesession(conversationId)
  .then(function(data) {
    console.log(`getConversationsCobrowsesession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCobrowsesession');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**CobrowseConversation**

<a name="getConversationsCobrowsesessionParticipantWrapup"></a>

# [**Wrapup**](Wrapup.html) getConversationsCobrowsesessionParticipantWrapup(conversationId, participantId, opts)

GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var opts = { 
  'provisional': false // Boolean | Indicates if the wrap-up code is provisional.
};
apiInstance.getConversationsCobrowsesessionParticipantWrapup(conversationId, participantId, opts)
  .then(function(data) {
    console.log(`getConversationsCobrowsesessionParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCobrowsesessionParticipantWrapup');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates if the wrap-up code is provisional. | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Wrapup**

<a name="getConversationsCobrowsesessionParticipantWrapupcodes"></a>

# [**[WrapupCode]**](WrapupCode.html) getConversationsCobrowsesessionParticipantWrapupcodes(conversationId, participantId)

GET /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsCobrowsesessionParticipantWrapupcodes(conversationId, participantId)
  .then(function(data) {
    console.log(`getConversationsCobrowsesessionParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCobrowsesessionParticipantWrapupcodes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
{: class="table table-striped"}

### Return type

**[WrapupCode]**

<a name="getConversationsCobrowsesessions"></a>

# [**CobrowseConversationEntityListing**](CobrowseConversationEntityListing.html) getConversationsCobrowsesessions()

GET /api/v2/conversations/cobrowsesessions

Get recent cobrowse conversations



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();
apiInstance.getConversationsCobrowsesessions()
  .then(function(data) {
    console.log(`getConversationsCobrowsesessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsCobrowsesessions');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**CobrowseConversationEntityListing**

<a name="getConversationsEmail"></a>

# [**EmailConversation**](EmailConversation.html) getConversationsEmail(conversationId)

GET /api/v2/conversations/emails/{conversationId}

Get email conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsEmail(conversationId)
  .then(function(data) {
    console.log(`getConversationsEmail success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsEmail');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**EmailConversation**

<a name="getConversationsEmailMessage"></a>

# [**EmailMessage**](EmailMessage.html) getConversationsEmailMessage(conversationId, messageId)

GET /api/v2/conversations/emails/{conversationId}/messages/{messageId}

Get conversation message



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var messageId = "messageId_example"; // String | messageId

apiInstance.getConversationsEmailMessage(conversationId, messageId)
  .then(function(data) {
    console.log(`getConversationsEmailMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsEmailMessage');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **messageId** | **String** | messageId |  |
{: class="table table-striped"}

### Return type

**EmailMessage**

<a name="getConversationsEmailMessages"></a>

# [**EmailMessageListing**](EmailMessageListing.html) getConversationsEmailMessages(conversationId)

GET /api/v2/conversations/emails/{conversationId}/messages

Get conversation messages



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsEmailMessages(conversationId)
  .then(function(data) {
    console.log(`getConversationsEmailMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsEmailMessages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**EmailMessageListing**

<a name="getConversationsEmailMessagesDraft"></a>

# [**EmailMessage**](EmailMessage.html) getConversationsEmailMessagesDraft(conversationId)

GET /api/v2/conversations/emails/{conversationId}/messages/draft

Get conversation draft reply



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

apiInstance.getConversationsEmailMessagesDraft(conversationId)
  .then(function(data) {
    console.log(`getConversationsEmailMessagesDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsEmailMessagesDraft');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**EmailMessage**

<a name="getConversationsEmailParticipantWrapup"></a>

# [**Wrapup**](Wrapup.html) getConversationsEmailParticipantWrapup(conversationId, participantId, opts)

GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup

Get the wrap-up for this conversation participant. 



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var opts = { 
  'provisional': false // Boolean | Indicates if the wrap-up code is provisional.
};
apiInstance.getConversationsEmailParticipantWrapup(conversationId, participantId, opts)
  .then(function(data) {
    console.log(`getConversationsEmailParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsEmailParticipantWrapup');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **provisional** | **Boolean** | Indicates if the wrap-up code is provisional. | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**Wrapup**

<a name="getConversationsEmailParticipantWrapupcodes"></a>

# [**[WrapupCode]**](WrapupCode.html) getConversationsEmailParticipantWrapupcodes(conversationId, participantId)

GET /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes

Get list of wrapup codes for this conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsEmailParticipantWrapupcodes(conversationId, participantId)
  .then(function(data) {
    console.log(`getConversationsEmailParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsEmailParticipantWrapupcodes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
{: class="table table-striped"}

### Return type

**[WrapupCode]**

<a name="getConversationsEmails"></a>

# [**EmailConversationEntityListing**](EmailConversationEntityListing.html) getConversationsEmails()

GET /api/v2/conversations/emails

Get recent email conversations



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();
apiInstance.getConversationsEmails()
  .then(function(data) {
    console.log(`getConversationsEmails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling getConversationsEmails');
    console.error(error);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**EmailConversationEntityListing**

<a name="patchConversationParticipant"></a>

# void patchConversationParticipant(conversationId, participantId, body)

PATCH /api/v2/conversations/{conversationId}/participants/{participantId}

Update a participant.

Update conversation participant.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversation ID

var participantId = "participantId_example"; // String | participant ID

var body = new platformClient.MediaParticipantRequest(); // MediaParticipantRequest | Update request

apiInstance.patchConversationParticipant(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationParticipant returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationParticipant');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **MediaParticipantRequest** | Update request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationParticipantAttributes"></a>

# void patchConversationParticipantAttributes(conversationId, participantId, body)

PATCH /api/v2/conversations/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversation ID

var participantId = "participantId_example"; // String | participant ID

var body = new platformClient.ParticipantAttributes(); // ParticipantAttributes | Participant attributes

apiInstance.patchConversationParticipantAttributes(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationParticipantAttributes returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationParticipantAttributes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **ParticipantAttributes** | Participant attributes |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCall"></a>

# [**Conversation**](Conversation.html) patchConversationsCall(conversationId, body)

PATCH /api/v2/conversations/calls/{conversationId}

Update a conversation by setting it&#39;s recording state, merging in other conversations to create a conference, or disconnecting all of the participants



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.Conversation(); // Conversation | Conversation

apiInstance.patchConversationsCall(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsCall success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCall');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Conversation** | Conversation |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="patchConversationsCallParticipant"></a>

# void patchConversationsCallParticipant(conversationId, participantId, body)

PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}

Update conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.MediaParticipantRequest(); // MediaParticipantRequest | Participant request

apiInstance.patchConversationsCallParticipant(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsCallParticipant returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCallParticipant');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **MediaParticipantRequest** | Participant request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCallParticipantAttributes"></a>

# void patchConversationsCallParticipantAttributes(conversationId, participantId, body)

PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.ParticipantAttributes(); // ParticipantAttributes | Participant attributes

apiInstance.patchConversationsCallParticipantAttributes(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsCallParticipantAttributes returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCallParticipantAttributes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **ParticipantAttributes** | Participant attributes |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCallParticipantCommunication"></a>

# [**Empty**](Empty.html) patchConversationsCallParticipantCommunication(conversationId, participantId, communicationId, body)

PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant&#39;s communication by disconnecting it.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var communicationId = "communicationId_example"; // String | communicationId

var body = new platformClient.MediaParticipantRequest(); // MediaParticipantRequest | Participant

apiInstance.patchConversationsCallParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsCallParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCallParticipantCommunication');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **MediaParticipantRequest** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="patchConversationsCallParticipantConsult"></a>

# [**ConsultTransferResponse**](ConsultTransferResponse.html) patchConversationsCallParticipantConsult(conversationId, participantId, body)

PATCH /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult

Change who can speak



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.ConsultTransferUpdate(); // ConsultTransferUpdate | new speak to

apiInstance.patchConversationsCallParticipantConsult(conversationId, participantId, body)
  .then(function(data) {
    console.log(`patchConversationsCallParticipantConsult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCallParticipantConsult');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **ConsultTransferUpdate** | new speak to |  |
{: class="table table-striped"}

### Return type

**ConsultTransferResponse**

<a name="patchConversationsCallback"></a>

# [**Conversation**](Conversation.html) patchConversationsCallback(conversationId, body)

PATCH /api/v2/conversations/callbacks/{conversationId}

Update a conversation by disconnecting all of the participants



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.Conversation(); // Conversation | Conversation

apiInstance.patchConversationsCallback(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsCallback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCallback');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Conversation** | Conversation |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="patchConversationsCallbackParticipant"></a>

# void patchConversationsCallbackParticipant(conversationId, participantId, body)

PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}

Update conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.MediaParticipantRequest(); // MediaParticipantRequest | Participant

apiInstance.patchConversationsCallbackParticipant(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsCallbackParticipant returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCallbackParticipant');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **MediaParticipantRequest** | Participant |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCallbackParticipantAttributes"></a>

# void patchConversationsCallbackParticipantAttributes(conversationId, participantId, body)

PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.ParticipantAttributes(); // ParticipantAttributes | Attributes

apiInstance.patchConversationsCallbackParticipantAttributes(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsCallbackParticipantAttributes returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCallbackParticipantAttributes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **ParticipantAttributes** | Attributes |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCallbackParticipantCommunication"></a>

# [**Empty**](Empty.html) patchConversationsCallbackParticipantCommunication(conversationId, participantId, communicationId, body)

PATCH /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant&#39;s communication by disconnecting it.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var communicationId = "communicationId_example"; // String | communicationId

var body = new platformClient.MediaParticipantRequest(); // MediaParticipantRequest | Participant

apiInstance.patchConversationsCallbackParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsCallbackParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCallbackParticipantCommunication');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **MediaParticipantRequest** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="patchConversationsChat"></a>

# [**Conversation**](Conversation.html) patchConversationsChat(conversationId, body)

PATCH /api/v2/conversations/chats/{conversationId}

Update a conversation by disconnecting all of the participants



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.Conversation(); // Conversation | Conversation

apiInstance.patchConversationsChat(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsChat success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsChat');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Conversation** | Conversation |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="patchConversationsChatParticipant"></a>

# void patchConversationsChatParticipant(conversationId, participantId, body)

PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}

Update conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.MediaParticipantRequest(); // MediaParticipantRequest | Update request

apiInstance.patchConversationsChatParticipant(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsChatParticipant returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsChatParticipant');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **MediaParticipantRequest** | Update request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsChatParticipantAttributes"></a>

# void patchConversationsChatParticipantAttributes(conversationId, participantId, body)

PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.ParticipantAttributes(); // ParticipantAttributes | Participant attributes

apiInstance.patchConversationsChatParticipantAttributes(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsChatParticipantAttributes returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsChatParticipantAttributes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **ParticipantAttributes** | Participant attributes |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsChatParticipantCommunication"></a>

# [**Empty**](Empty.html) patchConversationsChatParticipantCommunication(conversationId, participantId, communicationId, body)

PATCH /api/v2/conversations/chats/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant&#39;s communication by disconnecting it.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var communicationId = "communicationId_example"; // String | communicationId

var body = new platformClient.MediaParticipantRequest(); // MediaParticipantRequest | Participant

apiInstance.patchConversationsChatParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsChatParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsChatParticipantCommunication');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **MediaParticipantRequest** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="patchConversationsCobrowsesession"></a>

# [**Conversation**](Conversation.html) patchConversationsCobrowsesession(conversationId, body)

PATCH /api/v2/conversations/cobrowsesessions/{conversationId}

Update a conversation by disconnecting all of the participants



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.Conversation(); // Conversation | Conversation

apiInstance.patchConversationsCobrowsesession(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsCobrowsesession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCobrowsesession');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Conversation** | Conversation |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="patchConversationsCobrowsesessionParticipant"></a>

# void patchConversationsCobrowsesessionParticipant(conversationId, participantId, opts)

PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}

Update conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var opts = { 
  'body': new platformClient.MediaParticipantRequest() // MediaParticipantRequest | 
};
apiInstance.patchConversationsCobrowsesessionParticipant(conversationId, participantId, opts)
  .then(function() {
    console.log('patchConversationsCobrowsesessionParticipant returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCobrowsesessionParticipant');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **MediaParticipantRequest** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCobrowsesessionParticipantAttributes"></a>

# void patchConversationsCobrowsesessionParticipantAttributes(conversationId, participantId, opts)

PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var opts = { 
  'body': new platformClient.ParticipantAttributes() // ParticipantAttributes | 
};
apiInstance.patchConversationsCobrowsesessionParticipantAttributes(conversationId, participantId, opts)
  .then(function() {
    console.log('patchConversationsCobrowsesessionParticipantAttributes returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCobrowsesessionParticipantAttributes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **ParticipantAttributes** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCobrowsesessionParticipantCommunication"></a>

# [**Empty**](Empty.html) patchConversationsCobrowsesessionParticipantCommunication(conversationId, participantId, communicationId, body)

PATCH /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant&#39;s communication by disconnecting it.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var communicationId = "communicationId_example"; // String | communicationId

var body = new platformClient.MediaParticipantRequest(); // MediaParticipantRequest | Participant

apiInstance.patchConversationsCobrowsesessionParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsCobrowsesessionParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsCobrowsesessionParticipantCommunication');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **MediaParticipantRequest** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="patchConversationsEmail"></a>

# [**Conversation**](Conversation.html) patchConversationsEmail(conversationId, body)

PATCH /api/v2/conversations/emails/{conversationId}

Update a conversation by disconnecting all of the participants



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.Conversation(); // Conversation | Conversation

apiInstance.patchConversationsEmail(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsEmail success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsEmail');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Conversation** | Conversation |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="patchConversationsEmailParticipant"></a>

# void patchConversationsEmailParticipant(conversationId, participantId, body)

PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}

Update conversation participant



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.MediaParticipantRequest(); // MediaParticipantRequest | Update request

apiInstance.patchConversationsEmailParticipant(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsEmailParticipant returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsEmailParticipant');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **MediaParticipantRequest** | Update request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsEmailParticipantAttributes"></a>

# void patchConversationsEmailParticipantAttributes(conversationId, participantId, body)

PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/attributes

Update the attributes on a conversation participant.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.ParticipantAttributes(); // ParticipantAttributes | Participant attributes

apiInstance.patchConversationsEmailParticipantAttributes(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsEmailParticipantAttributes returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsEmailParticipantAttributes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **ParticipantAttributes** | Participant attributes |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsEmailParticipantCommunication"></a>

# [**Empty**](Empty.html) patchConversationsEmailParticipantCommunication(conversationId, participantId, communicationId, body)

PATCH /api/v2/conversations/emails/{conversationId}/participants/{participantId}/communications/{communicationId}

Update conversation participant&#39;s communication by disconnecting it.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var communicationId = "communicationId_example"; // String | communicationId

var body = new platformClient.MediaParticipantRequest(); // MediaParticipantRequest | Participant

apiInstance.patchConversationsEmailParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsEmailParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling patchConversationsEmailParticipantCommunication');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **MediaParticipantRequest** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="postAnalyticsConversationDetailsProperties"></a>

# [**PropertyIndexRequest**](PropertyIndexRequest.html) postAnalyticsConversationDetailsProperties(conversationId, body)

POST /api/v2/analytics/conversations/{conversationId}/details/properties

Index conversation properties



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.PropertyIndexRequest(); // PropertyIndexRequest | request

apiInstance.postAnalyticsConversationDetailsProperties(conversationId, body)
  .then(function(data) {
    console.log(`postAnalyticsConversationDetailsProperties success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsConversationDetailsProperties');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **PropertyIndexRequest** | request |  |
{: class="table table-striped"}

### Return type

**PropertyIndexRequest**

<a name="postAnalyticsConversationsAggregatesQuery"></a>

# [**AggregateQueryResponse**](AggregateQueryResponse.html) postAnalyticsConversationsAggregatesQuery(body)

POST /api/v2/analytics/conversations/aggregates/query

Query for conversation aggregates



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var body = new platformClient.AggregationQuery(); // AggregationQuery | query

apiInstance.postAnalyticsConversationsAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsConversationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsConversationsAggregatesQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **AggregationQuery** | query |  |
{: class="table table-striped"}

### Return type

**AggregateQueryResponse**

<a name="postAnalyticsConversationsDetailsQuery"></a>

# [**AnalyticsConversationQueryResponse**](AnalyticsConversationQueryResponse.html) postAnalyticsConversationsDetailsQuery(body)

POST /api/v2/analytics/conversations/details/query

Query for conversation details



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var body = new platformClient.ConversationQuery(); // ConversationQuery | query

apiInstance.postAnalyticsConversationsDetailsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsConversationsDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postAnalyticsConversationsDetailsQuery');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **ConversationQuery** | query |  |
{: class="table table-striped"}

### Return type

**AnalyticsConversationQueryResponse**

<a name="postConversationParticipantCallbacks"></a>

# void postConversationParticipantCallbacks(conversationId, participantId, opts)

POST /api/v2/conversations/{conversationId}/participants/{participantId}/callbacks

Create a new callback for the specified participant on the conversation.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversation ID

var participantId = "participantId_example"; // String | participant ID

var opts = { 
  'body': new platformClient.CreateCallbackOnConversationCommand() // CreateCallbackOnConversationCommand | 
};
apiInstance.postConversationParticipantCallbacks(conversationId, participantId, opts)
  .then(function() {
    console.log('postConversationParticipantCallbacks returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationParticipantCallbacks');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **CreateCallbackOnConversationCommand** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationParticipantReplace"></a>

# void postConversationParticipantReplace(conversationId, participantId, body)

POST /api/v2/conversations/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversation ID

var participantId = "participantId_example"; // String | participant ID

var body = new platformClient.TransferRequest(); // TransferRequest | Transfer request

apiInstance.postConversationParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationParticipantReplace returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationParticipantReplace');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **TransferRequest** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsCall"></a>

# [**Conversation**](Conversation.html) postConversationsCall(conversationId, body)

POST /api/v2/conversations/calls/{conversationId}

Add a new call to a conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.CallCommand(); // CallCommand | Conversation

apiInstance.postConversationsCall(conversationId, body)
  .then(function(data) {
    console.log(`postConversationsCall success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsCall');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **CallCommand** | Conversation |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="postConversationsCallParticipantConsult"></a>

# [**ConsultTransferResponse**](ConsultTransferResponse.html) postConversationsCallParticipantConsult(conversationId, participantId, body)

POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/consult

Initiate and update consult transfer



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.ConsultTransfer(); // ConsultTransfer | Destination address & initial speak to

apiInstance.postConversationsCallParticipantConsult(conversationId, participantId, body)
  .then(function(data) {
    console.log(`postConversationsCallParticipantConsult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsCallParticipantConsult');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **ConsultTransfer** | Destination address &amp; initial speak to |  |
{: class="table table-striped"}

### Return type

**ConsultTransferResponse**

<a name="postConversationsCallParticipantMonitor"></a>

# void postConversationsCallParticipantMonitor(conversationId, participantId)

POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/monitor

Listen in on the conversation from the point of view of a given participant.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

apiInstance.postConversationsCallParticipantMonitor(conversationId, participantId)
  .then(function() {
    console.log('postConversationsCallParticipantMonitor returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsCallParticipantMonitor');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsCallParticipantReplace"></a>

# void postConversationsCallParticipantReplace(conversationId, participantId, body)

POST /api/v2/conversations/calls/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.TransferRequest(); // TransferRequest | Transfer request

apiInstance.postConversationsCallParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationsCallParticipantReplace returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsCallParticipantReplace');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **TransferRequest** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsCallParticipants"></a>

# [**Conversation**](Conversation.html) postConversationsCallParticipants(conversationId, body)

POST /api/v2/conversations/calls/{conversationId}/participants

Add participants to a conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.Conversation(); // Conversation | Conversation

apiInstance.postConversationsCallParticipants(conversationId, body)
  .then(function(data) {
    console.log(`postConversationsCallParticipants success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsCallParticipants');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Conversation** | Conversation |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="postConversationsCallbackParticipantReplace"></a>

# void postConversationsCallbackParticipantReplace(conversationId, participantId, body)

POST /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.TransferRequest(); // TransferRequest | Transfer request

apiInstance.postConversationsCallbackParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationsCallbackParticipantReplace returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsCallbackParticipantReplace');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **TransferRequest** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsCallbacks"></a>

# [**CreateCallbackResponse**](CreateCallbackResponse.html) postConversationsCallbacks(body)

POST /api/v2/conversations/callbacks

Create a Callback



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var body = new platformClient.CreateCallbackCommand(); // CreateCallbackCommand | Callback

apiInstance.postConversationsCallbacks(body)
  .then(function(data) {
    console.log(`postConversationsCallbacks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsCallbacks');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **CreateCallbackCommand** | Callback |  |
{: class="table table-striped"}

### Return type

**CreateCallbackResponse**

<a name="postConversationsCalls"></a>

# [**CreateCallResponse**](CreateCallResponse.html) postConversationsCalls(body)

POST /api/v2/conversations/calls

Create a call conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var body = new platformClient.CreateCallRequest(); // CreateCallRequest | Call request

apiInstance.postConversationsCalls(body)
  .then(function(data) {
    console.log(`postConversationsCalls success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsCalls');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **CreateCallRequest** | Call request |  |
{: class="table table-striped"}

### Return type

**CreateCallResponse**

<a name="postConversationsChatParticipantReplace"></a>

# void postConversationsChatParticipantReplace(conversationId, participantId, body)

POST /api/v2/conversations/chats/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.TransferRequest(); // TransferRequest | Transfer request

apiInstance.postConversationsChatParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationsChatParticipantReplace returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsChatParticipantReplace');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **TransferRequest** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsChats"></a>

# [**ChatConversation**](ChatConversation.html) postConversationsChats(body)

POST /api/v2/conversations/chats

Create a web chat conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var body = new platformClient.CreateWebChatRequest(); // CreateWebChatRequest | Create web chat request

apiInstance.postConversationsChats(body)
  .then(function(data) {
    console.log(`postConversationsChats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsChats');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **CreateWebChatRequest** | Create web chat request |  |
{: class="table table-striped"}

### Return type

**ChatConversation**

<a name="postConversationsCobrowsesessionParticipantReplace"></a>

# void postConversationsCobrowsesessionParticipantReplace(conversationId, participantId, opts)

POST /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var opts = { 
  'body': new platformClient.TransferRequest() // TransferRequest | 
};
apiInstance.postConversationsCobrowsesessionParticipantReplace(conversationId, participantId, opts)
  .then(function() {
    console.log('postConversationsCobrowsesessionParticipantReplace returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsCobrowsesessionParticipantReplace');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **TransferRequest** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsEmailMessages"></a>

# [**EmailMessage**](EmailMessage.html) postConversationsEmailMessages(conversationId, body)

POST /api/v2/conversations/emails/{conversationId}/messages

Send an email reply



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.EmailMessage(); // EmailMessage | Reply

apiInstance.postConversationsEmailMessages(conversationId, body)
  .then(function(data) {
    console.log(`postConversationsEmailMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsEmailMessages');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **EmailMessage** | Reply |  |
{: class="table table-striped"}

### Return type

**EmailMessage**

<a name="postConversationsEmailParticipantReplace"></a>

# void postConversationsEmailParticipantReplace(conversationId, participantId, body)

POST /api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace

Replace this participant with the specified user and/or address



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var body = new platformClient.TransferRequest(); // TransferRequest | Transfer request

apiInstance.postConversationsEmailParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationsEmailParticipantReplace returned successfully.');
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsEmailParticipantReplace');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **TransferRequest** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsEmails"></a>

# [**EmailConversation**](EmailConversation.html) postConversationsEmails(body)

POST /api/v2/conversations/emails

Create an email conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var body = new platformClient.CreateEmailRequest(); // CreateEmailRequest | Create email request

apiInstance.postConversationsEmails(body)
  .then(function(data) {
    console.log(`postConversationsEmails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsEmails');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **CreateEmailRequest** | Create email request |  |
{: class="table table-striped"}

### Return type

**EmailConversation**

<a name="postConversationsFaxes"></a>

# [**FaxSendResponse**](FaxSendResponse.html) postConversationsFaxes(body)

POST /api/v2/conversations/faxes

Create Fax Conversation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var body = new platformClient.FaxSendRequest(); // FaxSendRequest | Fax

apiInstance.postConversationsFaxes(body)
  .then(function(data) {
    console.log(`postConversationsFaxes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling postConversationsFaxes');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **FaxSendRequest** | Fax |  |
{: class="table table-striped"}

### Return type

**FaxSendResponse**

<a name="putConversationsCallParticipantCommunicationUuidata"></a>

# [**Empty**](Empty.html) putConversationsCallParticipantCommunicationUuidata(conversationId, participantId, communicationId, body)

PUT /api/v2/conversations/calls/{conversationId}/participants/{participantId}/communications/{communicationId}/uuidata

Set uuiData to be sent on future commands.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var participantId = "participantId_example"; // String | participantId

var communicationId = "communicationId_example"; // String | communicationId

var body = new platformClient.SetUuiDataRequest(); // SetUuiDataRequest | UUIData Request

apiInstance.putConversationsCallParticipantCommunicationUuidata(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`putConversationsCallParticipantCommunicationUuidata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putConversationsCallParticipantCommunicationUuidata');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **SetUuiDataRequest** | UUIData Request |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="putConversationsEmailMessagesDraft"></a>

# [**EmailMessage**](EmailMessage.html) putConversationsEmailMessagesDraft(conversationId, body)

PUT /api/v2/conversations/emails/{conversationId}/messages/draft

Update conversation draft reply



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var conversationId = "conversationId_example"; // String | conversationId

var body = new platformClient.EmailMessage(); // EmailMessage | Draft

apiInstance.putConversationsEmailMessagesDraft(conversationId, body)
  .then(function(data) {
    console.log(`putConversationsEmailMessagesDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(error) {
  	console.log('There was a failure calling putConversationsEmailMessagesDraft');
    console.error(error);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **EmailMessage** | Draft |  |
{: class="table table-striped"}

### Return type

**EmailMessage**

