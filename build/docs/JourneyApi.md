---
title: JourneyApi
---
# platformClient.JourneyApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**getJourneySessionEvents**](JourneyApi.html#getJourneySessionEvents) | **GET** /api/v2/journey/sessions/{sessionId}/events | Retrieve all events for a given session.
{: class="table table-striped"}

<a name="getJourneySessionEvents"></a>

# EventListing getJourneySessionEvents(sessionId, opts)



GET /api/v2/journey/sessions/{sessionId}/events

Retrieve all events for a given session.



Requires NO permissions: 




### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.JourneyApi();

let sessionId = "sessionId_example"; // String | System-generated UUID that represents the session the event is a part of.
let opts = { 
  'before': "before_example", // String | The cursor that points to the start of the set of entities that has been returned.
  'after': "after_example", // String | The cursor that points to the end of the set of entities that has been returned.
  'limit': "limit_example" // String | Number of entities to return. Maximum of 200.
};

apiInstance.getJourneySessionEvents(sessionId, opts)
  .then((data) => {
    console.log(`getJourneySessionEvents success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getJourneySessionEvents');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sessionId** | **String** | System-generated UUID that represents the session the event is a part of. |  |
 **before** | **String** | The cursor that points to the start of the set of entities that has been returned. | [optional]  |
 **after** | **String** | The cursor that points to the end of the set of entities that has been returned. | [optional]  |
 **limit** | **String** | Number of entities to return. Maximum of 200. | [optional]  |
{: class="table table-striped"}

### Return type

**EventListing**

