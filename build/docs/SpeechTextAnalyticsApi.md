---
title: SpeechTextAnalyticsApi
---
# platformClient.SpeechTextAnalyticsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getConversationTranscriptproperty**](SpeechTextAnalyticsApi.html#getConversationTranscriptproperty) | **GET** /api/v2/conversations/{conversationId}/transcriptproperties/{communicationId} | Get the pre-signed S3 URL for the transcript of a specific communication of a conversation
{: class="table table-striped"}

<a name="getConversationTranscriptproperty"></a>

# TranscriptProperty getConversationTranscriptproperty(conversationId, communicationId)



GET /api/v2/conversations/{conversationId}/transcriptproperties/{communicationId}

Get the pre-signed S3 URL for the transcript of a specific communication of a conversation



Requires NO permissions: 




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

apiInstance.getConversationTranscriptproperty(conversationId, communicationId)
  .then((data) => {
    console.log(`getConversationTranscriptproperty success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationTranscriptproperty');
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

**TranscriptProperty**

