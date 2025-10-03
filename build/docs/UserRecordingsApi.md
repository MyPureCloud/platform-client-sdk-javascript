# UserRecordingsApi

# platformClient.UserRecordingsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteUserrecording**](UserRecordingsApi#deleteUserrecording) | **DELETE** /api/v2/userrecordings/{recordingId} | Delete a user recording.
[**getUserrecording**](UserRecordingsApi#getUserrecording) | **GET** /api/v2/userrecordings/{recordingId} | Get a user recording.
[**getUserrecordingTranscoding**](UserRecordingsApi#getUserrecordingTranscoding) | **GET** /api/v2/userrecordings/{recordingId}/transcoding | Download a user recording.
[**getUserrecordings**](UserRecordingsApi#getUserrecordings) | **GET** /api/v2/userrecordings | Get a list of user recordings.
[**getUserrecordingsSummary**](UserRecordingsApi#getUserrecordingsSummary) | **GET** /api/v2/userrecordings/summary | Get user recording summary
[**putUserrecording**](UserRecordingsApi#putUserrecording) | **PUT** /api/v2/userrecordings/{recordingId} | Update a user recording.



## deleteUserrecording

> void deleteUserrecording(recordingId)


DELETE /api/v2/userrecordings/{recordingId}

Delete a user recording.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UserRecordingsApi();

let recordingId = "recordingId_example"; // String | User Recording ID

apiInstance.deleteUserrecording(recordingId)
  .then(() => {
    console.log('deleteUserrecording returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteUserrecording');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recordingId** | **String** | User Recording ID |  |

### Return type

void (no response body)


## getUserrecording

> UserRecording getUserrecording(recordingId, opts)


GET /api/v2/userrecordings/{recordingId}

Get a user recording.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UserRecordingsApi();

let recordingId = "recordingId_example"; // String | User Recording ID
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getUserrecording(recordingId, opts)
  .then((data) => {
    console.log(`getUserrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserrecording');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recordingId** | **String** | User Recording ID |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: conversation |

### Return type

**UserRecording**


## getUserrecordingTranscoding

> DownloadResponse getUserrecordingTranscoding(recordingId, opts)


GET /api/v2/userrecordings/{recordingId}/transcoding

Download a user recording.

Requires ANY permissions:

* They are enforced by the backend

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UserRecordingsApi();

let recordingId = "recordingId_example"; // String | User Recording ID
let opts = { 
  'formatId': "WEBM" // String | The desired media format.
};

apiInstance.getUserrecordingTranscoding(recordingId, opts)
  .then((data) => {
    console.log(`getUserrecordingTranscoding success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserrecordingTranscoding');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recordingId** | **String** | User Recording ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |

### Return type

**DownloadResponse**


## getUserrecordings

> UserRecordingEntityListing getUserrecordings(opts)


GET /api/v2/userrecordings

Get a list of user recordings.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UserRecordingsApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.getUserrecordings(opts)
  .then((data) => {
    console.log(`getUserrecordings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserrecordings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: conversation |

### Return type

**UserRecordingEntityListing**


## getUserrecordingsSummary

> FaxSummary getUserrecordingsSummary()


GET /api/v2/userrecordings/summary

Get user recording summary

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UserRecordingsApi();

apiInstance.getUserrecordingsSummary()
  .then((data) => {
    console.log(`getUserrecordingsSummary success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getUserrecordingsSummary');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**FaxSummary**


## putUserrecording

> UserRecording putUserrecording(recordingId, body, opts)


PUT /api/v2/userrecordings/{recordingId}

Update a user recording.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.UserRecordingsApi();

let recordingId = "recordingId_example"; // String | User Recording ID
let body = {}; // Object | UserRecording
let opts = { 
  'expand': ["expand_example"] // [String] | Which fields, if any, to expand.
};

apiInstance.putUserrecording(recordingId, body, opts)
  .then((data) => {
    console.log(`putUserrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putUserrecording');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recordingId** | **String** | User Recording ID |  |
 **body** | **Object** | UserRecording |  |
 **expand** | **[String]** | Which fields, if any, to expand. | [optional] <br />**Values**: conversation |

### Return type

**UserRecording**


_purecloud-platform-client-v2@233.0.0_
