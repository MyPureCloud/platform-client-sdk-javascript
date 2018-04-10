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
[**getConversationParticipantSecureivrsession**](ConversationsApi.html#getConversationParticipantSecureivrsession) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions/{secureSessionId} | Fetch info on a secure session
[**getConversationParticipantSecureivrsessions**](ConversationsApi.html#getConversationParticipantSecureivrsessions) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions | Get a list of secure sessions for this participant.
[**getConversationParticipantWrapup**](ConversationsApi.html#getConversationParticipantWrapup) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationParticipantWrapupcodes**](ConversationsApi.html#getConversationParticipantWrapupcodes) | **GET** /api/v2/conversations/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversations**](ConversationsApi.html#getConversations) | **GET** /api/v2/conversations | Get active conversations for the logged in user
[**getConversationsCall**](ConversationsApi.html#getConversationsCall) | **GET** /api/v2/conversations/calls/{conversationId} | Get call conversation
[**getConversationsCallParticipantWrapup**](ConversationsApi.html#getConversationsCallParticipantWrapup) | **GET** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsCallParticipantWrapupcodes**](ConversationsApi.html#getConversationsCallParticipantWrapupcodes) | **GET** /api/v2/conversations/calls/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsCallback**](ConversationsApi.html#getConversationsCallback) | **GET** /api/v2/conversations/callbacks/{conversationId} | Get callback conversation
[**getConversationsCallbackParticipantWrapup**](ConversationsApi.html#getConversationsCallbackParticipantWrapup) | **GET** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsCallbackParticipantWrapupcodes**](ConversationsApi.html#getConversationsCallbackParticipantWrapupcodes) | **GET** /api/v2/conversations/callbacks/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsCallbacks**](ConversationsApi.html#getConversationsCallbacks) | **GET** /api/v2/conversations/callbacks | Get active callback conversations for the logged in user
[**getConversationsCalls**](ConversationsApi.html#getConversationsCalls) | **GET** /api/v2/conversations/calls | Get active call conversations for the logged in user
[**getConversationsCallsHistory**](ConversationsApi.html#getConversationsCallsHistory) | **GET** /api/v2/conversations/calls/history | Get call history
[**getConversationsCallsMaximumconferenceparties**](ConversationsApi.html#getConversationsCallsMaximumconferenceparties) | **GET** /api/v2/conversations/calls/maximumconferenceparties | Get the maximum number of participants that this user can have on a conference
[**getConversationsChat**](ConversationsApi.html#getConversationsChat) | **GET** /api/v2/conversations/chats/{conversationId} | Get chat conversation
[**getConversationsChatParticipantWrapup**](ConversationsApi.html#getConversationsChatParticipantWrapup) | **GET** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsChatParticipantWrapupcodes**](ConversationsApi.html#getConversationsChatParticipantWrapupcodes) | **GET** /api/v2/conversations/chats/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsChats**](ConversationsApi.html#getConversationsChats) | **GET** /api/v2/conversations/chats | Get active chat conversations for the logged in user
[**getConversationsCobrowsesession**](ConversationsApi.html#getConversationsCobrowsesession) | **GET** /api/v2/conversations/cobrowsesessions/{conversationId} | Get cobrowse conversation
[**getConversationsCobrowsesessionParticipantWrapup**](ConversationsApi.html#getConversationsCobrowsesessionParticipantWrapup) | **GET** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsCobrowsesessionParticipantWrapupcodes**](ConversationsApi.html#getConversationsCobrowsesessionParticipantWrapupcodes) | **GET** /api/v2/conversations/cobrowsesessions/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsCobrowsesessions**](ConversationsApi.html#getConversationsCobrowsesessions) | **GET** /api/v2/conversations/cobrowsesessions | Get active cobrowse conversations for the logged in user
[**getConversationsEmail**](ConversationsApi.html#getConversationsEmail) | **GET** /api/v2/conversations/emails/{conversationId} | Get email conversation
[**getConversationsEmailMessage**](ConversationsApi.html#getConversationsEmailMessage) | **GET** /api/v2/conversations/emails/{conversationId}/messages/{messageId} | Get conversation message
[**getConversationsEmailMessages**](ConversationsApi.html#getConversationsEmailMessages) | **GET** /api/v2/conversations/emails/{conversationId}/messages | Get conversation messages
[**getConversationsEmailMessagesDraft**](ConversationsApi.html#getConversationsEmailMessagesDraft) | **GET** /api/v2/conversations/emails/{conversationId}/messages/draft | Get conversation draft reply
[**getConversationsEmailParticipantWrapup**](ConversationsApi.html#getConversationsEmailParticipantWrapup) | **GET** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsEmailParticipantWrapupcodes**](ConversationsApi.html#getConversationsEmailParticipantWrapupcodes) | **GET** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsEmails**](ConversationsApi.html#getConversationsEmails) | **GET** /api/v2/conversations/emails | Get active email conversations for the logged in user
[**getConversationsMessage**](ConversationsApi.html#getConversationsMessage) | **GET** /api/v2/conversations/messages/{conversationId} | Get message conversation
[**getConversationsMessageMessage**](ConversationsApi.html#getConversationsMessageMessage) | **GET** /api/v2/conversations/messages/{conversationId}/messages/{messageId} | Get message
[**getConversationsMessageParticipantWrapup**](ConversationsApi.html#getConversationsMessageParticipantWrapup) | **GET** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapup | Get the wrap-up for this conversation participant. 
[**getConversationsMessageParticipantWrapupcodes**](ConversationsApi.html#getConversationsMessageParticipantWrapupcodes) | **GET** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapupcodes | Get list of wrapup codes for this conversation participant
[**getConversationsMessages**](ConversationsApi.html#getConversationsMessages) | **GET** /api/v2/conversations/messages | Get active message conversations for the logged in user
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
[**patchConversationsMessage**](ConversationsApi.html#patchConversationsMessage) | **PATCH** /api/v2/conversations/messages/{conversationId} | Update a conversation by disconnecting all of the participants
[**patchConversationsMessageParticipant**](ConversationsApi.html#patchConversationsMessageParticipant) | **PATCH** /api/v2/conversations/messages/{conversationId}/participants/{participantId} | Update conversation participant
[**patchConversationsMessageParticipantAttributes**](ConversationsApi.html#patchConversationsMessageParticipantAttributes) | **PATCH** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/attributes | Update the attributes on a conversation participant.
[**patchConversationsMessageParticipantCommunication**](ConversationsApi.html#patchConversationsMessageParticipantCommunication) | **PATCH** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId} | Update conversation participant&#39;s communication by disconnecting it.
[**postAnalyticsConversationDetailsProperties**](ConversationsApi.html#postAnalyticsConversationDetailsProperties) | **POST** /api/v2/analytics/conversations/{conversationId}/details/properties | Index conversation properties
[**postAnalyticsConversationsAggregatesQuery**](ConversationsApi.html#postAnalyticsConversationsAggregatesQuery) | **POST** /api/v2/analytics/conversations/aggregates/query | Query for conversation aggregates
[**postAnalyticsConversationsDetailsQuery**](ConversationsApi.html#postAnalyticsConversationsDetailsQuery) | **POST** /api/v2/analytics/conversations/details/query | Query for conversation details
[**postConversationDisconnect**](ConversationsApi.html#postConversationDisconnect) | **POST** /api/v2/conversations/{conversationId}/disconnect | Performs a full conversation teardown. Issues disconnect requests for any connected media. Applies a system wrap-up code to any participants that are pending wrap-up. This is not intended to be the normal way of ending interactions but is available in the event of problems with the application to allow a resyncronization of state across all components. It is recommended that users submit a support case if they are relying on this endpoint systematically as there is likely something that needs investigation.
[**postConversationParticipantCallbacks**](ConversationsApi.html#postConversationParticipantCallbacks) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/callbacks | Create a new callback for the specified participant on the conversation.
[**postConversationParticipantDigits**](ConversationsApi.html#postConversationParticipantDigits) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/digits | Sends DTMF to the participant
[**postConversationParticipantReplace**](ConversationsApi.html#postConversationParticipantReplace) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationParticipantSecureivrsessions**](ConversationsApi.html#postConversationParticipantSecureivrsessions) | **POST** /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions | Create secure IVR session. Only a participant in the conversation can invoke a secure IVR.
[**postConversationsCall**](ConversationsApi.html#postConversationsCall) | **POST** /api/v2/conversations/calls/{conversationId} | Place a new call as part of a callback conversation.
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
[**postConversationsEmailInboundmessages**](ConversationsApi.html#postConversationsEmailInboundmessages) | **POST** /api/v2/conversations/emails/{conversationId}/inboundmessages | Send an email to an external conversation. An external conversation is one where the provider is not PureCloud based. This endpoint allows the sender of the external email to reply or send a new message to the existing conversation. The new message will be treated as part of the existing conversation and chained to it.
[**postConversationsEmailMessages**](ConversationsApi.html#postConversationsEmailMessages) | **POST** /api/v2/conversations/emails/{conversationId}/messages | Send an email reply
[**postConversationsEmailParticipantReplace**](ConversationsApi.html#postConversationsEmailParticipantReplace) | **POST** /api/v2/conversations/emails/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
[**postConversationsEmails**](ConversationsApi.html#postConversationsEmails) | **POST** /api/v2/conversations/emails | Create an email conversation
[**postConversationsFaxes**](ConversationsApi.html#postConversationsFaxes) | **POST** /api/v2/conversations/faxes | Create Fax Conversation
[**postConversationsMessageCommunicationMessages**](ConversationsApi.html#postConversationsMessageCommunicationMessages) | **POST** /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages | Send message
[**postConversationsMessageMessagesBulk**](ConversationsApi.html#postConversationsMessageMessagesBulk) | **POST** /api/v2/conversations/messages/{conversationId}/messages/bulk | Get messages in batch
[**postConversationsMessageParticipantReplace**](ConversationsApi.html#postConversationsMessageParticipantReplace) | **POST** /api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace | Replace this participant with the specified user and/or address
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteConversationParticipantCode');
    console.error(err);
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteConversationsCallParticipantConsult');
    console.error(err);
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
  .catch(function(err) {
  	console.log('There was a failure calling deleteConversationsEmailMessagesDraftAttachment');
    console.error(err);
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

# AnalyticsConversation getAnalyticsConversationDetails(conversationId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getAnalyticsConversationDetails');
    console.error(err);
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

# Conversation getConversation(conversationId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversation');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="getConversationParticipantSecureivrsession"></a>

# SecureSession getConversationParticipantSecureivrsession(conversationId, participantId, secureSessionId)

GET /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions/{secureSessionId}

Fetch info on a secure session



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

var secureSessionId = "secureSessionId_example"; // String | secure IVR session ID

apiInstance.getConversationParticipantSecureivrsession(conversationId, participantId, secureSessionId)
  .then(function(data) {
    console.log(`getConversationParticipantSecureivrsession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationParticipantSecureivrsession');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **secureSessionId** | **String** | secure IVR session ID |  |
{: class="table table-striped"}

### Return type

**SecureSession**

<a name="getConversationParticipantSecureivrsessions"></a>

# SecureSessionEntityListing getConversationParticipantSecureivrsessions(conversationId, participantId)

GET /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions

Get a list of secure sessions for this participant.



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

apiInstance.getConversationParticipantSecureivrsessions(conversationId, participantId)
  .then(function(data) {
    console.log(`getConversationParticipantSecureivrsessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationParticipantSecureivrsessions');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
{: class="table table-striped"}

### Return type

**SecureSessionEntityListing**

<a name="getConversationParticipantWrapup"></a>

# WrapupCode getConversationParticipantWrapup(conversationId, participantId, opts)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationParticipantWrapup');
    console.error(err);
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

# [WrapupCode] getConversationParticipantWrapupcodes(conversationId, participantId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationParticipantWrapupcodes');
    console.error(err);
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

# ConversationEntityListing getConversations(opts)

GET /api/v2/conversations

Get active conversations for the logged in user



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
  .catch(function(err) {
  	console.log('There was a failure calling getConversations');
    console.error(err);
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

# CallConversation getConversationsCall(conversationId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCall');
    console.error(err);
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

# Wrapup getConversationsCallParticipantWrapup(conversationId, participantId, opts)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCallParticipantWrapup');
    console.error(err);
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

# [WrapupCode] getConversationsCallParticipantWrapupcodes(conversationId, participantId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCallParticipantWrapupcodes');
    console.error(err);
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

# CallbackConversation getConversationsCallback(conversationId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCallback');
    console.error(err);
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

# Wrapup getConversationsCallbackParticipantWrapup(conversationId, participantId, opts)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCallbackParticipantWrapup');
    console.error(err);
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

# [WrapupCode] getConversationsCallbackParticipantWrapupcodes(conversationId, participantId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCallbackParticipantWrapupcodes');
    console.error(err);
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

# CallbackConversationEntityListing getConversationsCallbacks()

GET /api/v2/conversations/callbacks

Get active callback conversations for the logged in user



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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCallbacks');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**CallbackConversationEntityListing**

<a name="getConversationsCalls"></a>

# CallConversationEntityListing getConversationsCalls()

GET /api/v2/conversations/calls

Get active call conversations for the logged in user



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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCalls');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**CallConversationEntityListing**

<a name="getConversationsCallsHistory"></a>

# CallHistoryConversationEntityListing getConversationsCallsHistory(opts)

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
  'pageSize': 25, // Number | Page size, maximum 50
  'pageNumber': 1, // Number | Page number
  'interval': "interval_example", // String | Interval string; format is ISO-8601. Separate start and end times with forward slash '/'
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getConversationsCallsHistory(opts)
  .then(function(data) {
    console.log(`getConversationsCallsHistory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCallsHistory');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size, maximum 50 | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **interval** | **String** | Interval string; format is ISO-8601. Separate start and end times with forward slash &#39;/&#39; | [optional]  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: externalorganization, externalcontact, user, queue, group |
{: class="table table-striped"}

### Return type

**CallHistoryConversationEntityListing**

<a name="getConversationsCallsMaximumconferenceparties"></a>

# MaxParticipants getConversationsCallsMaximumconferenceparties()

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCallsMaximumconferenceparties');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**MaxParticipants**

<a name="getConversationsChat"></a>

# ChatConversation getConversationsChat(conversationId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsChat');
    console.error(err);
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

# Wrapup getConversationsChatParticipantWrapup(conversationId, participantId, opts)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsChatParticipantWrapup');
    console.error(err);
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

# [WrapupCode] getConversationsChatParticipantWrapupcodes(conversationId, participantId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsChatParticipantWrapupcodes');
    console.error(err);
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

# ChatConversationEntityListing getConversationsChats()

GET /api/v2/conversations/chats

Get active chat conversations for the logged in user



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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsChats');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**ChatConversationEntityListing**

<a name="getConversationsCobrowsesession"></a>

# CobrowseConversation getConversationsCobrowsesession(conversationId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCobrowsesession');
    console.error(err);
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

# Wrapup getConversationsCobrowsesessionParticipantWrapup(conversationId, participantId, opts)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCobrowsesessionParticipantWrapup');
    console.error(err);
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

# [WrapupCode] getConversationsCobrowsesessionParticipantWrapupcodes(conversationId, participantId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCobrowsesessionParticipantWrapupcodes');
    console.error(err);
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

# CobrowseConversationEntityListing getConversationsCobrowsesessions()

GET /api/v2/conversations/cobrowsesessions

Get active cobrowse conversations for the logged in user



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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsCobrowsesessions');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**CobrowseConversationEntityListing**

<a name="getConversationsEmail"></a>

# EmailConversation getConversationsEmail(conversationId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsEmail');
    console.error(err);
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

# EmailMessage getConversationsEmailMessage(conversationId, messageId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsEmailMessage');
    console.error(err);
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

# EmailMessageListing getConversationsEmailMessages(conversationId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsEmailMessages');
    console.error(err);
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

# EmailMessage getConversationsEmailMessagesDraft(conversationId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsEmailMessagesDraft');
    console.error(err);
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

# Wrapup getConversationsEmailParticipantWrapup(conversationId, participantId, opts)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsEmailParticipantWrapup');
    console.error(err);
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

# [WrapupCode] getConversationsEmailParticipantWrapupcodes(conversationId, participantId)

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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsEmailParticipantWrapupcodes');
    console.error(err);
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

# EmailConversationEntityListing getConversationsEmails()

GET /api/v2/conversations/emails

Get active email conversations for the logged in user



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
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsEmails');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**EmailConversationEntityListing**

<a name="getConversationsMessage"></a>

# MessageConversation getConversationsMessage(conversationId)

GET /api/v2/conversations/messages/{conversationId}

Get message conversation



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

apiInstance.getConversationsMessage(conversationId)
  .then(function(data) {
    console.log(`getConversationsMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsMessage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
{: class="table table-striped"}

### Return type

**MessageConversation**

<a name="getConversationsMessageMessage"></a>

# MessageData getConversationsMessageMessage(conversationId, messageId)

GET /api/v2/conversations/messages/{conversationId}/messages/{messageId}

Get message



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

apiInstance.getConversationsMessageMessage(conversationId, messageId)
  .then(function(data) {
    console.log(`getConversationsMessageMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsMessageMessage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **messageId** | **String** | messageId |  |
{: class="table table-striped"}

### Return type

**MessageData**

<a name="getConversationsMessageParticipantWrapup"></a>

# Wrapup getConversationsMessageParticipantWrapup(conversationId, participantId, opts)

GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapup

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
apiInstance.getConversationsMessageParticipantWrapup(conversationId, participantId, opts)
  .then(function(data) {
    console.log(`getConversationsMessageParticipantWrapup success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsMessageParticipantWrapup');
    console.error(err);
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

<a name="getConversationsMessageParticipantWrapupcodes"></a>

# [WrapupCode] getConversationsMessageParticipantWrapupcodes(conversationId, participantId)

GET /api/v2/conversations/messages/{conversationId}/participants/{participantId}/wrapupcodes

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

var conversationId = "conversationId_example"; // String |  conversationId

var participantId = "participantId_example"; // String | participantId

apiInstance.getConversationsMessageParticipantWrapupcodes(conversationId, participantId)
  .then(function(data) {
    console.log(`getConversationsMessageParticipantWrapupcodes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsMessageParticipantWrapupcodes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** |  conversationId |  |
 **participantId** | **String** | participantId |  |
{: class="table table-striped"}

### Return type

**[WrapupCode]**

<a name="getConversationsMessages"></a>

# MessageConversationEntityListing getConversationsMessages()

GET /api/v2/conversations/messages

Get active message conversations for the logged in user



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();
apiInstance.getConversationsMessages()
  .then(function(data) {
    console.log(`getConversationsMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationsMessages');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**MessageConversationEntityListing**

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

var body = {}; // Object | Update request

apiInstance.patchConversationParticipant(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationParticipant returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationParticipant');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Update request |  |
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

var body = {}; // Object | Participant attributes

apiInstance.patchConversationParticipantAttributes(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationParticipantAttributes returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationParticipantAttributes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Participant attributes |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCall"></a>

# Conversation patchConversationsCall(conversationId, body)

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

var body = {}; // Object | Conversation

apiInstance.patchConversationsCall(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsCall success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCall');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |
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

var body = {}; // Object | Participant request

apiInstance.patchConversationsCallParticipant(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsCallParticipant returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCallParticipant');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Participant request |  |
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

var body = {}; // Object | Participant attributes

apiInstance.patchConversationsCallParticipantAttributes(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsCallParticipantAttributes returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCallParticipantAttributes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Participant attributes |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCallParticipantCommunication"></a>

# Empty patchConversationsCallParticipantCommunication(conversationId, participantId, communicationId, body)

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

var body = {}; // Object | Participant

apiInstance.patchConversationsCallParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsCallParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCallParticipantCommunication');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="patchConversationsCallParticipantConsult"></a>

# ConsultTransferResponse patchConversationsCallParticipantConsult(conversationId, participantId, body)

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

var body = {}; // Object | new speak to

apiInstance.patchConversationsCallParticipantConsult(conversationId, participantId, body)
  .then(function(data) {
    console.log(`patchConversationsCallParticipantConsult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCallParticipantConsult');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | new speak to |  |
{: class="table table-striped"}

### Return type

**ConsultTransferResponse**

<a name="patchConversationsCallback"></a>

# Conversation patchConversationsCallback(conversationId, body)

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

var body = {}; // Object | Conversation

apiInstance.patchConversationsCallback(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsCallback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCallback');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |
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

var body = {}; // Object | Participant

apiInstance.patchConversationsCallbackParticipant(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsCallbackParticipant returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCallbackParticipant');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Participant |  |
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

var body = {}; // Object | Attributes

apiInstance.patchConversationsCallbackParticipantAttributes(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsCallbackParticipantAttributes returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCallbackParticipantAttributes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Attributes |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCallbackParticipantCommunication"></a>

# Empty patchConversationsCallbackParticipantCommunication(conversationId, participantId, communicationId, body)

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

var body = {}; // Object | Participant

apiInstance.patchConversationsCallbackParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsCallbackParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCallbackParticipantCommunication');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="patchConversationsChat"></a>

# Conversation patchConversationsChat(conversationId, body)

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

var body = {}; // Object | Conversation

apiInstance.patchConversationsChat(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsChat success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsChat');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |
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

var body = {}; // Object | Update request

apiInstance.patchConversationsChatParticipant(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsChatParticipant returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsChatParticipant');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Update request |  |
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

var body = {}; // Object | Participant attributes

apiInstance.patchConversationsChatParticipantAttributes(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsChatParticipantAttributes returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsChatParticipantAttributes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Participant attributes |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsChatParticipantCommunication"></a>

# Empty patchConversationsChatParticipantCommunication(conversationId, participantId, communicationId, body)

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

var body = {}; // Object | Participant

apiInstance.patchConversationsChatParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsChatParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsChatParticipantCommunication');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="patchConversationsCobrowsesession"></a>

# Conversation patchConversationsCobrowsesession(conversationId, body)

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

var body = {}; // Object | Conversation

apiInstance.patchConversationsCobrowsesession(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsCobrowsesession success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCobrowsesession');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |
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
  'body': {} // Object | 
};
apiInstance.patchConversationsCobrowsesessionParticipant(conversationId, participantId, opts)
  .then(function() {
    console.log('patchConversationsCobrowsesessionParticipant returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCobrowsesessionParticipant');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** |  | [optional]  |
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
  'body': {} // Object | 
};
apiInstance.patchConversationsCobrowsesessionParticipantAttributes(conversationId, participantId, opts)
  .then(function() {
    console.log('patchConversationsCobrowsesessionParticipantAttributes returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCobrowsesessionParticipantAttributes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsCobrowsesessionParticipantCommunication"></a>

# Empty patchConversationsCobrowsesessionParticipantCommunication(conversationId, participantId, communicationId, body)

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

var body = {}; // Object | Participant

apiInstance.patchConversationsCobrowsesessionParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsCobrowsesessionParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsCobrowsesessionParticipantCommunication');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="patchConversationsEmail"></a>

# Conversation patchConversationsEmail(conversationId, body)

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

var body = {}; // Object | Conversation

apiInstance.patchConversationsEmail(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsEmail success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsEmail');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |
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

var body = {}; // Object | Update request

apiInstance.patchConversationsEmailParticipant(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsEmailParticipant returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsEmailParticipant');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Update request |  |
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

var body = {}; // Object | Participant attributes

apiInstance.patchConversationsEmailParticipantAttributes(conversationId, participantId, body)
  .then(function() {
    console.log('patchConversationsEmailParticipantAttributes returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsEmailParticipantAttributes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Participant attributes |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsEmailParticipantCommunication"></a>

# Empty patchConversationsEmailParticipantCommunication(conversationId, participantId, communicationId, body)

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

var body = {}; // Object | Participant

apiInstance.patchConversationsEmailParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsEmailParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsEmailParticipantCommunication');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="patchConversationsMessage"></a>

# Conversation patchConversationsMessage(conversationId, body)

PATCH /api/v2/conversations/messages/{conversationId}

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

var body = {}; // Object | Conversation

apiInstance.patchConversationsMessage(conversationId, body)
  .then(function(data) {
    console.log(`patchConversationsMessage success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsMessage');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="patchConversationsMessageParticipant"></a>

# void patchConversationsMessageParticipant(conversationId, participantId, opts)

PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}

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

var conversationId = "conversationId_example"; // String |  conversationId

var participantId = "participantId_example"; // String | participantId

var opts = { 
  'body': {} // Object | 
};
apiInstance.patchConversationsMessageParticipant(conversationId, participantId, opts)
  .then(function() {
    console.log('patchConversationsMessageParticipant returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsMessageParticipant');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** |  conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsMessageParticipantAttributes"></a>

# void patchConversationsMessageParticipantAttributes(conversationId, participantId, opts)

PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/attributes

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

var conversationId = "conversationId_example"; // String |  conversationId

var participantId = "participantId_example"; // String | participantId

var opts = { 
  'body': {} // Object | 
};
apiInstance.patchConversationsMessageParticipantAttributes(conversationId, participantId, opts)
  .then(function() {
    console.log('patchConversationsMessageParticipantAttributes returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsMessageParticipantAttributes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** |  conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="patchConversationsMessageParticipantCommunication"></a>

# Empty patchConversationsMessageParticipantCommunication(conversationId, participantId, communicationId, body)

PATCH /api/v2/conversations/messages/{conversationId}/participants/{participantId}/communications/{communicationId}

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

var conversationId = "conversationId_example"; // String |  conversationId

var participantId = "participantId_example"; // String | participantId

var communicationId = "communicationId_example"; // String | communicationId

var body = {}; // Object | Participant

apiInstance.patchConversationsMessageParticipantCommunication(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`patchConversationsMessageParticipantCommunication success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchConversationsMessageParticipantCommunication');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** |  conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Participant |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="postAnalyticsConversationDetailsProperties"></a>

# PropertyIndexRequest postAnalyticsConversationDetailsProperties(conversationId, body)

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

var body = {}; // Object | request

apiInstance.postAnalyticsConversationDetailsProperties(conversationId, body)
  .then(function(data) {
    console.log(`postAnalyticsConversationDetailsProperties success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsConversationDetailsProperties');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | request |  |
{: class="table table-striped"}

### Return type

**PropertyIndexRequest**

<a name="postAnalyticsConversationsAggregatesQuery"></a>

# AggregateQueryResponse postAnalyticsConversationsAggregatesQuery(body)

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

var body = {}; // Object | query

apiInstance.postAnalyticsConversationsAggregatesQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsConversationsAggregatesQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsConversationsAggregatesQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AggregateQueryResponse**

<a name="postAnalyticsConversationsDetailsQuery"></a>

# AnalyticsConversationQueryResponse postAnalyticsConversationsDetailsQuery(body)

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

var body = {}; // Object | query

apiInstance.postAnalyticsConversationsDetailsQuery(body)
  .then(function(data) {
    console.log(`postAnalyticsConversationsDetailsQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postAnalyticsConversationsDetailsQuery');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |
{: class="table table-striped"}

### Return type

**AnalyticsConversationQueryResponse**

<a name="postConversationDisconnect"></a>

# **&#39;String&#39;** postConversationDisconnect(conversationId)

POST /api/v2/conversations/{conversationId}/disconnect

Performs a full conversation teardown. Issues disconnect requests for any connected media. Applies a system wrap-up code to any participants that are pending wrap-up. This is not intended to be the normal way of ending interactions but is available in the event of problems with the application to allow a resyncronization of state across all components. It is recommended that users submit a support case if they are relying on this endpoint systematically as there is likely something that needs investigation.



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

apiInstance.postConversationDisconnect(conversationId)
  .then(function(data) {
    console.log(`postConversationDisconnect success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationDisconnect');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
{: class="table table-striped"}

### Return type

**&#39;String&#39;**

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
  'body': {} // Object | 
};
apiInstance.postConversationParticipantCallbacks(conversationId, participantId, opts)
  .then(function() {
    console.log('postConversationParticipantCallbacks returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationParticipantCallbacks');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationParticipantDigits"></a>

# void postConversationParticipantDigits(conversationId, participantId, opts)

POST /api/v2/conversations/{conversationId}/participants/{participantId}/digits

Sends DTMF to the participant



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
  'body': {} // Object | Digits
};
apiInstance.postConversationParticipantDigits(conversationId, participantId, opts)
  .then(function() {
    console.log('postConversationParticipantDigits returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationParticipantDigits');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Digits | [optional]  |
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

var body = {}; // Object | Transfer request

apiInstance.postConversationParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationParticipantReplace returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationParticipantReplace');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationParticipantSecureivrsessions"></a>

# SecureSession postConversationParticipantSecureivrsessions(conversationId, participantId, opts)

POST /api/v2/conversations/{conversationId}/participants/{participantId}/secureivrsessions

Create secure IVR session. Only a participant in the conversation can invoke a secure IVR.



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
  'body': {} // Object | 
};
apiInstance.postConversationParticipantSecureivrsessions(conversationId, participantId, opts)
  .then(function(data) {
    console.log(`postConversationParticipantSecureivrsessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationParticipantSecureivrsessions');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversation ID |  |
 **participantId** | **String** | participant ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**SecureSession**

<a name="postConversationsCall"></a>

# Conversation postConversationsCall(conversationId, body)

POST /api/v2/conversations/calls/{conversationId}

Place a new call as part of a callback conversation.



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

var body = {}; // Object | Conversation

apiInstance.postConversationsCall(conversationId, body)
  .then(function(data) {
    console.log(`postConversationsCall success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsCall');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |
{: class="table table-striped"}

### Return type

**Conversation**

<a name="postConversationsCallParticipantConsult"></a>

# ConsultTransferResponse postConversationsCallParticipantConsult(conversationId, participantId, body)

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

var body = {}; // Object | Destination address & initial speak to

apiInstance.postConversationsCallParticipantConsult(conversationId, participantId, body)
  .then(function(data) {
    console.log(`postConversationsCallParticipantConsult success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsCallParticipantConsult');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Destination address &amp; initial speak to |  |
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
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsCallParticipantMonitor');
    console.error(err);
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

var body = {}; // Object | Transfer request

apiInstance.postConversationsCallParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationsCallParticipantReplace returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsCallParticipantReplace');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsCallParticipants"></a>

# Conversation postConversationsCallParticipants(conversationId, body)

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

var body = {}; // Object | Conversation

apiInstance.postConversationsCallParticipants(conversationId, body)
  .then(function(data) {
    console.log(`postConversationsCallParticipants success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsCallParticipants');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Conversation |  |
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

var body = {}; // Object | Transfer request

apiInstance.postConversationsCallbackParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationsCallbackParticipantReplace returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsCallbackParticipantReplace');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsCallbacks"></a>

# CreateCallbackResponse postConversationsCallbacks(body)

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

var body = {}; // Object | Callback

apiInstance.postConversationsCallbacks(body)
  .then(function(data) {
    console.log(`postConversationsCallbacks success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsCallbacks');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Callback |  |
{: class="table table-striped"}

### Return type

**CreateCallbackResponse**

<a name="postConversationsCalls"></a>

# CreateCallResponse postConversationsCalls(body)

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

var body = {}; // Object | Call request

apiInstance.postConversationsCalls(body)
  .then(function(data) {
    console.log(`postConversationsCalls success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsCalls');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Call request |  |
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

var body = {}; // Object | Transfer request

apiInstance.postConversationsChatParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationsChatParticipantReplace returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsChatParticipantReplace');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsChats"></a>

# ChatConversation postConversationsChats(body)

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

var body = {}; // Object | Create web chat request

apiInstance.postConversationsChats(body)
  .then(function(data) {
    console.log(`postConversationsChats success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsChats');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create web chat request |  |
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
  'body': {} // Object | 
};
apiInstance.postConversationsCobrowsesessionParticipantReplace(conversationId, participantId, opts)
  .then(function() {
    console.log('postConversationsCobrowsesessionParticipantReplace returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsCobrowsesessionParticipantReplace');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsEmailInboundmessages"></a>

# EmailConversation postConversationsEmailInboundmessages(conversationId, body)

POST /api/v2/conversations/emails/{conversationId}/inboundmessages

Send an email to an external conversation. An external conversation is one where the provider is not PureCloud based. This endpoint allows the sender of the external email to reply or send a new message to the existing conversation. The new message will be treated as part of the existing conversation and chained to it.



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

var body = {}; // Object | Send external email reply

apiInstance.postConversationsEmailInboundmessages(conversationId, body)
  .then(function(data) {
    console.log(`postConversationsEmailInboundmessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsEmailInboundmessages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Send external email reply |  |
{: class="table table-striped"}

### Return type

**EmailConversation**

<a name="postConversationsEmailMessages"></a>

# EmailMessage postConversationsEmailMessages(conversationId, body)

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

var body = {}; // Object | Reply

apiInstance.postConversationsEmailMessages(conversationId, body)
  .then(function(data) {
    console.log(`postConversationsEmailMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsEmailMessages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Reply |  |
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

var body = {}; // Object | Transfer request

apiInstance.postConversationsEmailParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationsEmailParticipantReplace returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsEmailParticipantReplace');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationsEmails"></a>

# EmailConversation postConversationsEmails(body)

POST /api/v2/conversations/emails

Create an email conversation

If the direction of the request is INBOUND, this will create an external conversation with a third party provider. If the direction of the the request is OUTBOUND, this will create a conversation to send outbound emails on behalf of a queue.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.ConversationsApi();

var body = {}; // Object | Create email request

apiInstance.postConversationsEmails(body)
  .then(function(data) {
    console.log(`postConversationsEmails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsEmails');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Create email request |  |
{: class="table table-striped"}

### Return type

**EmailConversation**

<a name="postConversationsFaxes"></a>

# FaxSendResponse postConversationsFaxes(body)

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

var body = {}; // Object | Fax

apiInstance.postConversationsFaxes(body)
  .then(function(data) {
    console.log(`postConversationsFaxes success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsFaxes');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Fax |  |
{: class="table table-striped"}

### Return type

**FaxSendResponse**

<a name="postConversationsMessageCommunicationMessages"></a>

# MessageData postConversationsMessageCommunicationMessages(conversationId, communicationId, body)

POST /api/v2/conversations/messages/{conversationId}/communications/{communicationId}/messages

Send message



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

var communicationId = "communicationId_example"; // String | communicationId

var body = {}; // Object | Message

apiInstance.postConversationsMessageCommunicationMessages(conversationId, communicationId, body)
  .then(function(data) {
    console.log(`postConversationsMessageCommunicationMessages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsMessageCommunicationMessages');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | Message |  |
{: class="table table-striped"}

### Return type

**MessageData**

<a name="postConversationsMessageMessagesBulk"></a>

# TextMessageListing postConversationsMessageMessagesBulk(conversationId, opts)

POST /api/v2/conversations/messages/{conversationId}/messages/bulk

Get messages in batch



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

var opts = { 
  'body': [{}] // Object | messageIds
};
apiInstance.postConversationsMessageMessagesBulk(conversationId, opts)
  .then(function(data) {
    console.log(`postConversationsMessageMessagesBulk success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsMessageMessagesBulk');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | messageIds | [optional]  |
{: class="table table-striped"}

### Return type

**TextMessageListing**

<a name="postConversationsMessageParticipantReplace"></a>

# void postConversationsMessageParticipantReplace(conversationId, participantId, body)

POST /api/v2/conversations/messages/{conversationId}/participants/{participantId}/replace

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

var body = {}; // Object | Transfer request

apiInstance.postConversationsMessageParticipantReplace(conversationId, participantId, body)
  .then(function() {
    console.log('postConversationsMessageParticipantReplace returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationsMessageParticipantReplace');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **body** | **Object** | Transfer request |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="putConversationsCallParticipantCommunicationUuidata"></a>

# Empty putConversationsCallParticipantCommunicationUuidata(conversationId, participantId, communicationId, body)

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

var body = {}; // Object | UUIData Request

apiInstance.putConversationsCallParticipantCommunicationUuidata(conversationId, participantId, communicationId, body)
  .then(function(data) {
    console.log(`putConversationsCallParticipantCommunicationUuidata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putConversationsCallParticipantCommunicationUuidata');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **participantId** | **String** | participantId |  |
 **communicationId** | **String** | communicationId |  |
 **body** | **Object** | UUIData Request |  |
{: class="table table-striped"}

### Return type

**Empty**

<a name="putConversationsEmailMessagesDraft"></a>

# EmailMessage putConversationsEmailMessagesDraft(conversationId, body)

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

var body = {}; // Object | Draft

apiInstance.putConversationsEmailMessagesDraft(conversationId, body)
  .then(function(data) {
    console.log(`putConversationsEmailMessagesDraft success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putConversationsEmailMessagesDraft');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | conversationId |  |
 **body** | **Object** | Draft |  |
{: class="table table-striped"}

### Return type

**EmailMessage**

