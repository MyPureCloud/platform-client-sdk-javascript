---
title: SpeechTextAnalyticsApi
---
# platformClient.SpeechTextAnalyticsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getSpeechandtextanalyticsProgram**](SpeechTextAnalyticsApi.html#getSpeechandtextanalyticsProgram) | **GET** /api/v2/speechandtextanalytics/programs/{programId} | Get a Speech &amp; Text Analytics program by id
[**getSpeechandtextanalyticsTopic**](SpeechTextAnalyticsApi.html#getSpeechandtextanalyticsTopic) | **GET** /api/v2/speechandtextanalytics/topics/{topicId} | Get a Speech &amp; Text Analytics topic by id
[**postSpeechandtextanalyticsTopics**](SpeechTextAnalyticsApi.html#postSpeechandtextanalyticsTopics) | **POST** /api/v2/speechandtextanalytics/topics | Create new Speech &amp; Text Analytics topic
{: class="table table-striped"}

<a name="getSpeechandtextanalyticsProgram"></a>

# Program getSpeechandtextanalyticsProgram(programId)



GET /api/v2/speechandtextanalytics/programs/{programId}

Get a Speech &amp; Text Analytics program by id



Requires ANY permissions: 

* speechAndTextAnalytics:program:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let programId = "programId_example"; // String | The id of the topic to get

apiInstance.getSpeechandtextanalyticsProgram(programId)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgram success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgram');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | The id of the topic to get |  |
{: class="table table-striped"}

### Return type

**Program**

<a name="getSpeechandtextanalyticsTopic"></a>

# Topic getSpeechandtextanalyticsTopic(topicId)



GET /api/v2/speechandtextanalytics/topics/{topicId}

Get a Speech &amp; Text Analytics topic by id



Requires ANY permissions: 

* speechAndTextAnalytics:topic:view



### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let topicId = "topicId_example"; // String | The id of the topic to get

apiInstance.getSpeechandtextanalyticsTopic(topicId)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsTopic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsTopic');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | The id of the topic to get |  |
{: class="table table-striped"}

### Return type

**Topic**

<a name="postSpeechandtextanalyticsTopics"></a>

# Topic postSpeechandtextanalyticsTopics(body)



POST /api/v2/speechandtextanalytics/topics

Create new Speech &amp; Text Analytics topic



Requires ANY permissions: 

* speechAndTextAnalytics:topic:add


### Request Body Schema

<script type="text/javascript">
	function copyCreateTopicRequestExample() {
		let temp = $("<textarea>");
		$("body").append(temp);
		temp.val($('#CreateTopicRequestExample').text()).select();
		document.execCommand("copy");
		temp.remove();
		return false;
	}
</script>

CreateTopicRequest <a href="#" onclick="return copyCreateTopicRequestExample()">Copy</a>

<div id="CreateTopicRequestExample">

```{"language":"json", "maxHeight": "250px"}
{ 
  "name": String, 
  "description": String, 
  "strictness": String, 
  "programIds": [String], 
  "tags": [String], 
  "dialect": String, 
  "participants": String, 
  "phrases": { 
    "text": String, 
    "strictness": String, 
    "sentiment": String, 
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

let body = {}; // Object | The topic to create

apiInstance.postSpeechandtextanalyticsTopics(body)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsTopics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsTopics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The topic to create |  |
{: class="table table-striped"}

### Return type

**Topic**

