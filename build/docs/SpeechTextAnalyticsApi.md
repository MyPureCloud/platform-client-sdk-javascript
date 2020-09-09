---
title: SpeechTextAnalyticsApi
---
# platformClient.SpeechTextAnalyticsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getSpeechandtextanalyticsConversation**](SpeechTextAnalyticsApi.html#getSpeechandtextanalyticsConversation) | **GET** /api/v2/speechandtextanalytics/conversations/{conversationId} | Get Speech and Text Analytics for a specific conversation
[**getSpeechandtextanalyticsConversationCommunicationTranscripturl**](SpeechTextAnalyticsApi.html#getSpeechandtextanalyticsConversationCommunicationTranscripturl) | **GET** /api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturl | Get the pre-signed S3 URL for the transcript of a specific communication of a conversation
{: class="table table-striped"}

<a name="getSpeechandtextanalyticsConversation"></a>

# ConversationMetrics getSpeechandtextanalyticsConversation(conversationId)



GET /api/v2/speechandtextanalytics/conversations/{conversationId}

Get Speech and Text Analytics for a specific conversation



Requires ANY permissions: 

* recording:recording:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let conversationId = "conversationId_example"; // String | Conversation Id

apiInstance.getSpeechandtextanalyticsConversation(conversationId)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsConversation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsConversation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation Id |  |
{: class="table table-striped"}

### Return type

**ConversationMetrics**

<a name="getSpeechandtextanalyticsConversationCommunicationTranscripturl"></a>

# TranscriptUrl getSpeechandtextanalyticsConversationCommunicationTranscripturl(conversationId, communicationId)



GET /api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturl

Get the pre-signed S3 URL for the transcript of a specific communication of a conversation



Requires ANY permissions: 

* recording:recording:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let communicationId = "communicationId_example"; // String | Communication ID

apiInstance.getSpeechandtextanalyticsConversationCommunicationTranscripturl(conversationId, communicationId)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsConversationCommunicationTranscripturl success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsConversationCommunicationTranscripturl');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **communicationId** | **String** | Communication ID |  |
{: class="table table-striped"}

### Return type

**TranscriptUrl**

