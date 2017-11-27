---
title: UserRecordingsApi
---
# platformClient.UserRecordingsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteUserrecording**](UserRecordingsApi.html#deleteUserrecording) | **DELETE** /api/v2/userrecordings/{recordingId} | Delete a user recording.
[**getUserrecording**](UserRecordingsApi.html#getUserrecording) | **GET** /api/v2/userrecordings/{recordingId} | Get a user recording.
[**getUserrecordingMedia**](UserRecordingsApi.html#getUserrecordingMedia) | **GET** /api/v2/userrecordings/{recordingId}/media | Download a user recording.
[**getUserrecordings**](UserRecordingsApi.html#getUserrecordings) | **GET** /api/v2/userrecordings | Get a list of user recordings.
[**getUserrecordingsSummary**](UserRecordingsApi.html#getUserrecordingsSummary) | **GET** /api/v2/userrecordings/summary | Get user recording summary
[**putUserrecording**](UserRecordingsApi.html#putUserrecording) | **PUT** /api/v2/userrecordings/{recordingId} | Update a user recording.
{: class="table table-striped"}

<a name="deleteUserrecording"></a>

# void deleteUserrecording(recordingId)

DELETE /api/v2/userrecordings/{recordingId}

Delete a user recording.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UserRecordingsApi();

var recordingId = "recordingId_example"; // String | User Recording ID

apiInstance.deleteUserrecording(recordingId)
  .then(function() {
    console.log('deleteUserrecording returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteUserrecording');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recordingId** | **String** | User Recording ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getUserrecording"></a>

# UserRecording getUserrecording(recordingId, opts)

GET /api/v2/userrecordings/{recordingId}

Get a user recording.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UserRecordingsApi();

var recordingId = "recordingId_example"; // String | User Recording ID

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getUserrecording(recordingId, opts)
  .then(function(data) {
    console.log(`getUserrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserrecording');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recordingId** | **String** | User Recording ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: conversation |
{: class="table table-striped"}

### Return type

**UserRecording**

<a name="getUserrecordingMedia"></a>

# DownloadResponse getUserrecordingMedia(recordingId, opts)

GET /api/v2/userrecordings/{recordingId}/media

Download a user recording.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UserRecordingsApi();

var recordingId = "recordingId_example"; // String | User Recording ID

var opts = { 
  'formatId': "WEBM" // String | The desired media format.
};
apiInstance.getUserrecordingMedia(recordingId, opts)
  .then(function(data) {
    console.log(`getUserrecordingMedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserrecordingMedia');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recordingId** | **String** | User Recording ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
{: class="table table-striped"}

### Return type

**DownloadResponse**

<a name="getUserrecordings"></a>

# UserRecordingEntityListing getUserrecordings(opts)

GET /api/v2/userrecordings

Get a list of user recordings.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UserRecordingsApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.getUserrecordings(opts)
  .then(function(data) {
    console.log(`getUserrecordings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserrecordings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: conversation |
{: class="table table-striped"}

### Return type

**UserRecordingEntityListing**

<a name="getUserrecordingsSummary"></a>

# FaxSummary getUserrecordingsSummary()

GET /api/v2/userrecordings/summary

Get user recording summary



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UserRecordingsApi();
apiInstance.getUserrecordingsSummary()
  .then(function(data) {
    console.log(`getUserrecordingsSummary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getUserrecordingsSummary');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**FaxSummary**

<a name="putUserrecording"></a>

# UserRecording putUserrecording(recordingId, body, opts)

PUT /api/v2/userrecordings/{recordingId}

Update a user recording.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.UserRecordingsApi();

var recordingId = "recordingId_example"; // String | User Recording ID

var body = {}; // Object | UserRecording

var opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};
apiInstance.putUserrecording(recordingId, body, opts)
  .then(function(data) {
    console.log(`putUserrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putUserrecording');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recordingId** | **String** | User Recording ID |  |
 **body** | **Object** | UserRecording |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: conversation |
{: class="table table-striped"}

### Return type

**UserRecording**

