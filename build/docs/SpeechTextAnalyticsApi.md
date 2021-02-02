---
title: SpeechTextAnalyticsApi
---
# platformClient.SpeechTextAnalyticsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getSpeechandtextanalyticsConversation**](SpeechTextAnalyticsApi.html#getSpeechandtextanalyticsConversation) | **GET** /api/v2/speechandtextanalytics/conversations/{conversationId} | Get Speech and Text Analytics for a specific conversation
[**getSpeechandtextanalyticsConversationCommunicationTranscripturl**](SpeechTextAnalyticsApi.html#getSpeechandtextanalyticsConversationCommunicationTranscripturl) | **GET** /api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturl | Get the pre-signed S3 URL for the transcript of a specific communication of a conversation
[**getSpeechandtextanalyticsSettings**](SpeechTextAnalyticsApi.html#getSpeechandtextanalyticsSettings) | **GET** /api/v2/speechandtextanalytics/settings | Get Speech And Text Analytics Settings
[**patchSpeechandtextanalyticsSettings**](SpeechTextAnalyticsApi.html#patchSpeechandtextanalyticsSettings) | **PATCH** /api/v2/speechandtextanalytics/settings | Patch Speech And Text Analytics Settings
[**postSpeechandtextanalyticsTranscriptsSearch**](SpeechTextAnalyticsApi.html#postSpeechandtextanalyticsTranscriptsSearch) | **POST** /api/v2/speechandtextanalytics/transcripts/search | Search resources.
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

<a name="getSpeechandtextanalyticsSettings"></a>

# SpeechTextAnalyticsSettingsResponse getSpeechandtextanalyticsSettings()



GET /api/v2/speechandtextanalytics/settings

Get Speech And Text Analytics Settings



Requires ALL permissions: 

* speechAndTextAnalytics:settings:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

apiInstance.getSpeechandtextanalyticsSettings()
  .then((data) => {
    console.log(`getSpeechandtextanalyticsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsSettings');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**SpeechTextAnalyticsSettingsResponse**

<a name="patchSpeechandtextanalyticsSettings"></a>

# SpeechTextAnalyticsSettingsResponse patchSpeechandtextanalyticsSettings(body)



PATCH /api/v2/speechandtextanalytics/settings

Patch Speech And Text Analytics Settings



Requires ALL permissions: 

* speechAndTextAnalytics:settings:edit


### Request Body Schema

<script type="text/javascript">
	function copySpeechTextAnalyticsSettingsRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#SpeechTextAnalyticsSettingsRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

SpeechTextAnalyticsSettingsRequest <a href="#" onclick="return copySpeechTextAnalyticsSettingsRequestExample()">Copy</a>

<div id="SpeechTextAnalyticsSettingsRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "defaultProgramId": String, 
  "expectedDialects": [String], 
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | Speech And Text Analytics Settings

apiInstance.patchSpeechandtextanalyticsSettings(body)
  .then((data) => {
    console.log(`patchSpeechandtextanalyticsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchSpeechandtextanalyticsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Speech And Text Analytics Settings |  |
{: class="table table-striped"}

### Return type

**SpeechTextAnalyticsSettingsResponse**

<a name="postSpeechandtextanalyticsTranscriptsSearch"></a>

# JsonSearchResponse postSpeechandtextanalyticsTranscriptsSearch(body)



POST /api/v2/speechandtextanalytics/transcripts/search

Search resources.



Requires ANY permissions: 

* analytics:conversationDetail:view
* recording:recording:view


### Request Body Schema

<script type="text/javascript">
	function copyTranscriptSearchRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#TranscriptSearchRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

TranscriptSearchRequest <a href="#" onclick="return copyTranscriptSearchRequestExample()">Copy</a>

<div id="TranscriptSearchRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "sortOrder": String, 
  "sortBy": String, 
  "pageSize": Number, 
  "pageNumber": Number, 
  "sort": { 
    "sortOrder": String, 
    "sortBy": String, 
  },  
  "returnFields": [String], 
  "types": [String], 
  "query": { 
    "endValue": String, 
    "values": [String], 
    "startValue": String, 
    "fields": [String], 
    "value": String, 
    "operator": String, 
    "group": { 
      "endValue": String, 
      "values": [String], 
      "startValue": String, 
      "fields": [String], 
      "value": String, 
      "operator": String, 
      "group": { 
        "endValue": String, 
        "values": [String], 
        "startValue": String, 
        "fields": [String], 
        "value": String, 
        "operator": String, 
        "group": { 
          "endValue": String, 
          "values": [String], 
          "startValue": String, 
          "fields": [String], 
          "value": String, 
          "operator": String, 
          "group": { 
            "endValue": String, 
            "values": [String], 
            "startValue": String, 
            "fields": [String], 
            "value": String, 
            "operator": String, 
            "group": { 
              "endValue": String, 
              "values": [String], 
              "startValue": String, 
              "fields": [String], 
              "value": String, 
              "operator": String, 
              "group": { 
                "endValue": String, 
                "values": [String], 
                "startValue": String, 
                "fields": [String], 
                "value": String, 
                "operator": String, 
                "group": [TranscriptSearchCriteria], 
                "dateFormat": String, 
                "type": String, 
              },  
              "dateFormat": String, 
              "type": String, 
            },  
            "dateFormat": String, 
            "type": String, 
          },  
          "dateFormat": String, 
          "type": String, 
        },  
        "dateFormat": String, 
        "type": String, 
      },  
      "dateFormat": String, 
      "type": String, 
    },  
    "dateFormat": String, 
    "type": String, 
  },  
}
```

</div>


### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | Search request options

apiInstance.postSpeechandtextanalyticsTranscriptsSearch(body)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsTranscriptsSearch success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsTranscriptsSearch');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Search request options |  |
{: class="table table-striped"}

### Return type

**JsonSearchResponse**

