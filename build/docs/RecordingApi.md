---
title: RecordingApi
---
# platformClient.RecordingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteConversationRecordingAnnotation**](RecordingApi.html#deleteConversationRecordingAnnotation) | **DELETE** /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId} | Delete annotation
[**deleteOrphanrecording**](RecordingApi.html#deleteOrphanrecording) | **DELETE** /api/v2/orphanrecordings/{orphanId} | Deletes a single orphan recording
[**deleteRecordingMediaretentionpolicies**](RecordingApi.html#deleteRecordingMediaretentionpolicies) | **DELETE** /api/v2/recording/mediaretentionpolicies | Delete media retention policies
[**deleteRecordingMediaretentionpolicy**](RecordingApi.html#deleteRecordingMediaretentionpolicy) | **DELETE** /api/v2/recording/mediaretentionpolicies/{policyId} | Delete a media retention policy
[**getConversationRecording**](RecordingApi.html#getConversationRecording) | **GET** /api/v2/conversations/{conversationId}/recordings/{recordingId} | Gets a specific recording.
[**getConversationRecordingAnnotation**](RecordingApi.html#getConversationRecordingAnnotation) | **GET** /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId} | Get annotation
[**getConversationRecordingAnnotations**](RecordingApi.html#getConversationRecordingAnnotations) | **GET** /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations | Get annotations for recording
[**getConversationRecordingmetadata**](RecordingApi.html#getConversationRecordingmetadata) | **GET** /api/v2/conversations/{conversationId}/recordingmetadata | Get recording metadata for a conversation. Does not return playable media.
[**getConversationRecordingmetadataRecordingId**](RecordingApi.html#getConversationRecordingmetadataRecordingId) | **GET** /api/v2/conversations/{conversationId}/recordingmetadata/{recordingId} | Get metadata for a specific recording. Does not return playable media.
[**getConversationRecordings**](RecordingApi.html#getConversationRecordings) | **GET** /api/v2/conversations/{conversationId}/recordings | Get all of a Conversation&#39;s Recordings.
[**getOrphanrecording**](RecordingApi.html#getOrphanrecording) | **GET** /api/v2/orphanrecordings/{orphanId} | Gets a single orphan recording
[**getOrphanrecordingMedia**](RecordingApi.html#getOrphanrecordingMedia) | **GET** /api/v2/orphanrecordings/{orphanId}/media | Gets the media of a single orphan recording
[**getOrphanrecordings**](RecordingApi.html#getOrphanrecordings) | **GET** /api/v2/orphanrecordings | Gets all orphan recordings
[**getRecordingBatchrequest**](RecordingApi.html#getRecordingBatchrequest) | **GET** /api/v2/recording/batchrequests/{jobId} | Get the status and results for a batch request job, only the user that submitted the job may retrieve results
[**getRecordingLocalkeysSetting**](RecordingApi.html#getRecordingLocalkeysSetting) | **GET** /api/v2/recording/localkeys/settings/{settingsId} | Get the local encryption settings
[**getRecordingLocalkeysSettings**](RecordingApi.html#getRecordingLocalkeysSettings) | **GET** /api/v2/recording/localkeys/settings | gets a list local key settings data
[**getRecordingMediaretentionpolicies**](RecordingApi.html#getRecordingMediaretentionpolicies) | **GET** /api/v2/recording/mediaretentionpolicies | Gets media retention policy list with query options to filter on name and enabled.
[**getRecordingMediaretentionpolicy**](RecordingApi.html#getRecordingMediaretentionpolicy) | **GET** /api/v2/recording/mediaretentionpolicies/{policyId} | Get a media retention policy
[**getRecordingRecordingkeys**](RecordingApi.html#getRecordingRecordingkeys) | **GET** /api/v2/recording/recordingkeys | Get encryption key list
[**getRecordingRecordingkeysRotationschedule**](RecordingApi.html#getRecordingRecordingkeysRotationschedule) | **GET** /api/v2/recording/recordingkeys/rotationschedule | Get key rotation schedule
[**getRecordingSettings**](RecordingApi.html#getRecordingSettings) | **GET** /api/v2/recording/settings | Get the Recording Settings for the Organization
[**getRecordingsScreensessions**](RecordingApi.html#getRecordingsScreensessions) | **GET** /api/v2/recordings/screensessions | Retrieves a paged listing of screen recording sessions
[**patchRecordingMediaretentionpolicy**](RecordingApi.html#patchRecordingMediaretentionpolicy) | **PATCH** /api/v2/recording/mediaretentionpolicies/{policyId} | Patch a media retention policy
[**patchRecordingsScreensession**](RecordingApi.html#patchRecordingsScreensession) | **PATCH** /api/v2/recordings/screensessions/{recordingSessionId} | Update a screen recording session
[**postConversationRecordingAnnotations**](RecordingApi.html#postConversationRecordingAnnotations) | **POST** /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations | Create annotation
[**postRecordingBatchrequests**](RecordingApi.html#postRecordingBatchrequests) | **POST** /api/v2/recording/batchrequests | Submit a batch download request for recordings. Recordings in response will be in their original format/codec - configured in the Trunk configuration.
[**postRecordingLocalkeys**](RecordingApi.html#postRecordingLocalkeys) | **POST** /api/v2/recording/localkeys | create a local recording key
[**postRecordingLocalkeysSettings**](RecordingApi.html#postRecordingLocalkeysSettings) | **POST** /api/v2/recording/localkeys/settings | create settings for local key creation
[**postRecordingMediaretentionpolicies**](RecordingApi.html#postRecordingMediaretentionpolicies) | **POST** /api/v2/recording/mediaretentionpolicies | Create media retention policy
[**postRecordingRecordingkeys**](RecordingApi.html#postRecordingRecordingkeys) | **POST** /api/v2/recording/recordingkeys | Create encryption key
[**putConversationRecording**](RecordingApi.html#putConversationRecording) | **PUT** /api/v2/conversations/{conversationId}/recordings/{recordingId} | Updates the retention records on a recording.
[**putConversationRecordingAnnotation**](RecordingApi.html#putConversationRecordingAnnotation) | **PUT** /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId} | Update annotation
[**putOrphanrecording**](RecordingApi.html#putOrphanrecording) | **PUT** /api/v2/orphanrecordings/{orphanId} | Updates an orphan recording to a regular recording with retention values
[**putRecordingLocalkeysSetting**](RecordingApi.html#putRecordingLocalkeysSetting) | **PUT** /api/v2/recording/localkeys/settings/{settingsId} | Update the local encryption settings
[**putRecordingMediaretentionpolicy**](RecordingApi.html#putRecordingMediaretentionpolicy) | **PUT** /api/v2/recording/mediaretentionpolicies/{policyId} | Update a media retention policy
[**putRecordingRecordingkeysRotationschedule**](RecordingApi.html#putRecordingRecordingkeysRotationschedule) | **PUT** /api/v2/recording/recordingkeys/rotationschedule | Update key rotation schedule
[**putRecordingSettings**](RecordingApi.html#putRecordingSettings) | **PUT** /api/v2/recording/settings | Update the Recording Settings for the Organization
{: class="table table-striped"}

<a name="deleteConversationRecordingAnnotation"></a>

# void deleteConversationRecordingAnnotation(conversationId, recordingId, annotationId)

DELETE /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}

Delete annotation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var recordingId = "recordingId_example"; // String | Recording ID

var annotationId = "annotationId_example"; // String | Annotation ID

apiInstance.deleteConversationRecordingAnnotation(conversationId, recordingId, annotationId)
  .then(function() {
    console.log('deleteConversationRecordingAnnotation returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteConversationRecordingAnnotation');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **annotationId** | **String** | Annotation ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteOrphanrecording"></a>

# OrphanRecording deleteOrphanrecording(orphanId)

DELETE /api/v2/orphanrecordings/{orphanId}

Deletes a single orphan recording



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var orphanId = "orphanId_example"; // String | Orphan ID

apiInstance.deleteOrphanrecording(orphanId)
  .then(function(data) {
    console.log(`deleteOrphanrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteOrphanrecording');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orphanId** | **String** | Orphan ID |  |
{: class="table table-striped"}

### Return type

**OrphanRecording**

<a name="deleteRecordingMediaretentionpolicies"></a>

# void deleteRecordingMediaretentionpolicies(ids)

DELETE /api/v2/recording/mediaretentionpolicies

Delete media retention policies

Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var ids = "ids_example"; // String | 

apiInstance.deleteRecordingMediaretentionpolicies(ids)
  .then(function() {
    console.log('deleteRecordingMediaretentionpolicies returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteRecordingMediaretentionpolicies');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ids** | **String** |  |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="deleteRecordingMediaretentionpolicy"></a>

# void deleteRecordingMediaretentionpolicy(policyId)

DELETE /api/v2/recording/mediaretentionpolicies/{policyId}

Delete a media retention policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var policyId = "policyId_example"; // String | Policy ID

apiInstance.deleteRecordingMediaretentionpolicy(policyId)
  .then(function() {
    console.log('deleteRecordingMediaretentionpolicy returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling deleteRecordingMediaretentionpolicy');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="getConversationRecording"></a>

# Recording getConversationRecording(conversationId, recordingId, opts)

GET /api/v2/conversations/{conversationId}/recordings/{recordingId}

Gets a specific recording.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var recordingId = "recordingId_example"; // String | Recording ID

var opts = { 
  'formatId': "WEBM", // String | The desired media format.
  'download': false, // Boolean | requesting a download format of the recording
  'fileName': "fileName_example" // String | the name of the downloaded fileName
};
apiInstance.getConversationRecording(conversationId, recordingId, opts)
  .then(function(data) {
    console.log(`getConversationRecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationRecording');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
 **download** | **Boolean** | requesting a download format of the recording | [optional] [default to false] |
 **fileName** | **String** | the name of the downloaded fileName | [optional]  |
{: class="table table-striped"}

### Return type

**Recording**

<a name="getConversationRecordingAnnotation"></a>

# Annotation getConversationRecordingAnnotation(conversationId, recordingId, annotationId)

GET /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}

Get annotation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var recordingId = "recordingId_example"; // String | Recording ID

var annotationId = "annotationId_example"; // String | Annotation ID

apiInstance.getConversationRecordingAnnotation(conversationId, recordingId, annotationId)
  .then(function(data) {
    console.log(`getConversationRecordingAnnotation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationRecordingAnnotation');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **annotationId** | **String** | Annotation ID |  |
{: class="table table-striped"}

### Return type

**Annotation**

<a name="getConversationRecordingAnnotations"></a>

# [Annotation] getConversationRecordingAnnotations(conversationId, recordingId)

GET /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations

Get annotations for recording



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var recordingId = "recordingId_example"; // String | Recording ID

apiInstance.getConversationRecordingAnnotations(conversationId, recordingId)
  .then(function(data) {
    console.log(`getConversationRecordingAnnotations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationRecordingAnnotations');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
{: class="table table-striped"}

### Return type

**[Annotation]**

<a name="getConversationRecordingmetadata"></a>

# [Recording] getConversationRecordingmetadata(conversationId)

GET /api/v2/conversations/{conversationId}/recordingmetadata

Get recording metadata for a conversation. Does not return playable media.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var conversationId = "conversationId_example"; // String | Conversation ID

apiInstance.getConversationRecordingmetadata(conversationId)
  .then(function(data) {
    console.log(`getConversationRecordingmetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationRecordingmetadata');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
{: class="table table-striped"}

### Return type

**[Recording]**

<a name="getConversationRecordingmetadataRecordingId"></a>

# Recording getConversationRecordingmetadataRecordingId(conversationId, recordingId)

GET /api/v2/conversations/{conversationId}/recordingmetadata/{recordingId}

Get metadata for a specific recording. Does not return playable media.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var recordingId = "recordingId_example"; // String | Recording ID

apiInstance.getConversationRecordingmetadataRecordingId(conversationId, recordingId)
  .then(function(data) {
    console.log(`getConversationRecordingmetadataRecordingId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationRecordingmetadataRecordingId');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
{: class="table table-striped"}

### Return type

**Recording**

<a name="getConversationRecordings"></a>

# [Recording] getConversationRecordings(conversationId, opts)

GET /api/v2/conversations/{conversationId}/recordings

Get all of a Conversation&#39;s Recordings.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var opts = { 
  'maxWaitMs': 5000, // Number | The maximum number of milliseconds to wait for the recording to be ready. Must be a positive value.
  'formatId': "WEBM" // String | The desired media format. Possible values: NONE, MP3, WAV, or WEBM
};
apiInstance.getConversationRecordings(conversationId, opts)
  .then(function(data) {
    console.log(`getConversationRecordings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getConversationRecordings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **maxWaitMs** | **Number** | The maximum number of milliseconds to wait for the recording to be ready. Must be a positive value. | [optional] [default to 5000] |
 **formatId** | **String** | The desired media format. Possible values: NONE, MP3, WAV, or WEBM | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
{: class="table table-striped"}

### Return type

**[Recording]**

<a name="getOrphanrecording"></a>

# OrphanRecording getOrphanrecording(orphanId)

GET /api/v2/orphanrecordings/{orphanId}

Gets a single orphan recording



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var orphanId = "orphanId_example"; // String | Orphan ID

apiInstance.getOrphanrecording(orphanId)
  .then(function(data) {
    console.log(`getOrphanrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrphanrecording');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orphanId** | **String** | Orphan ID |  |
{: class="table table-striped"}

### Return type

**OrphanRecording**

<a name="getOrphanrecordingMedia"></a>

# Recording getOrphanrecordingMedia(orphanId, opts)

GET /api/v2/orphanrecordings/{orphanId}/media

Gets the media of a single orphan recording

A 202 response means the orphaned media is currently transcoding and will be available shortly.A 200 response denotes the transcoded orphan media is available now and is contained in the response body.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var orphanId = "orphanId_example"; // String | Orphan ID

var opts = { 
  'formatId': "WEBM", // String | The desired media format.
  'download': false, // Boolean | requesting a download format of the recording
  'fileName': "fileName_example" // String | the name of the downloaded fileName
};
apiInstance.getOrphanrecordingMedia(orphanId, opts)
  .then(function(data) {
    console.log(`getOrphanrecordingMedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrphanrecordingMedia');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orphanId** | **String** | Orphan ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
 **download** | **Boolean** | requesting a download format of the recording | [optional] [default to false] |
 **fileName** | **String** | the name of the downloaded fileName | [optional]  |
{: class="table table-striped"}

### Return type

**Recording**

<a name="getOrphanrecordings"></a>

# OrphanRecordingListing getOrphanrecordings(opts)

GET /api/v2/orphanrecordings

Gets all orphan recordings



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'hasConversation': false, // Boolean | Filter resulting orphans by whether the conversation is known. False returns all orphans for the organization.
  'media': "media_example" // String | Filter resulting orphans based on their media type
};
apiInstance.getOrphanrecordings(opts)
  .then(function(data) {
    console.log(`getOrphanrecordings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getOrphanrecordings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **hasConversation** | **Boolean** | Filter resulting orphans by whether the conversation is known. False returns all orphans for the organization. | [optional] [default to false] |
 **media** | **String** | Filter resulting orphans based on their media type | [optional] <br />**Values**: Call, Screen |
{: class="table table-striped"}

### Return type

**OrphanRecordingListing**

<a name="getRecordingBatchrequest"></a>

# BatchDownloadJobStatusResult getRecordingBatchrequest(jobId)

GET /api/v2/recording/batchrequests/{jobId}

Get the status and results for a batch request job, only the user that submitted the job may retrieve results



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var jobId = "jobId_example"; // String | jobId

apiInstance.getRecordingBatchrequest(jobId)
  .then(function(data) {
    console.log(`getRecordingBatchrequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRecordingBatchrequest');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
{: class="table table-striped"}

### Return type

**BatchDownloadJobStatusResult**

<a name="getRecordingLocalkeysSetting"></a>

# LocalEncryptionConfiguration getRecordingLocalkeysSetting(settingsId)

GET /api/v2/recording/localkeys/settings/{settingsId}

Get the local encryption settings



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var settingsId = "settingsId_example"; // String | Settings Id

apiInstance.getRecordingLocalkeysSetting(settingsId)
  .then(function(data) {
    console.log(`getRecordingLocalkeysSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRecordingLocalkeysSetting');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **settingsId** | **String** | Settings Id |  |
{: class="table table-striped"}

### Return type

**LocalEncryptionConfiguration**

<a name="getRecordingLocalkeysSettings"></a>

# LocalEncryptionConfigurationListing getRecordingLocalkeysSettings()

GET /api/v2/recording/localkeys/settings

gets a list local key settings data



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();
apiInstance.getRecordingLocalkeysSettings()
  .then(function(data) {
    console.log(`getRecordingLocalkeysSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRecordingLocalkeysSettings');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**LocalEncryptionConfigurationListing**

<a name="getRecordingMediaretentionpolicies"></a>

# PolicyEntityListing getRecordingMediaretentionpolicies(opts)

GET /api/v2/recording/mediaretentionpolicies

Gets media retention policy list with query options to filter on name and enabled.

for a less verbose response, add summary=true to this endpoint

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'name': "name_example", // String | the policy name - used for filtering results in searches.
  'enabled': true, // Boolean | checks to see if policy is enabled - use enabled = true or enabled = false
  'summary': false, // Boolean | provides a less verbose response of policy lists.
  'hasErrors': true // Boolean | provides a way to fetch all policies with errors or policies that do not have errors
};
apiInstance.getRecordingMediaretentionpolicies(opts)
  .then(function(data) {
    console.log(`getRecordingMediaretentionpolicies success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRecordingMediaretentionpolicies');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The total page size requested | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number requested | [optional] [default to 1] |
 **sortBy** | **String** | variable name requested to sort by | [optional]  |
 **expand** | **[String]** | variable name requested by expand list | [optional]  |
 **nextPage** | **String** | next page token | [optional]  |
 **previousPage** | **String** | Previous page token | [optional]  |
 **name** | **String** | the policy name - used for filtering results in searches. | [optional]  |
 **enabled** | **Boolean** | checks to see if policy is enabled - use enabled = true or enabled = false | [optional]  |
 **summary** | **Boolean** | provides a less verbose response of policy lists. | [optional] [default to false] |
 **hasErrors** | **Boolean** | provides a way to fetch all policies with errors or policies that do not have errors | [optional]  |
{: class="table table-striped"}

### Return type

**PolicyEntityListing**

<a name="getRecordingMediaretentionpolicy"></a>

# Policy getRecordingMediaretentionpolicy(policyId)

GET /api/v2/recording/mediaretentionpolicies/{policyId}

Get a media retention policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var policyId = "policyId_example"; // String | Policy ID

apiInstance.getRecordingMediaretentionpolicy(policyId)
  .then(function(data) {
    console.log(`getRecordingMediaretentionpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRecordingMediaretentionpolicy');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |
{: class="table table-striped"}

### Return type

**Policy**

<a name="getRecordingRecordingkeys"></a>

# EncryptionKeyEntityListing getRecordingRecordingkeys(opts)

GET /api/v2/recording/recordingkeys

Get encryption key list



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getRecordingRecordingkeys(opts)
  .then(function(data) {
    console.log(`getRecordingRecordingkeys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRecordingRecordingkeys');
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

**EncryptionKeyEntityListing**

<a name="getRecordingRecordingkeysRotationschedule"></a>

# KeyRotationSchedule getRecordingRecordingkeysRotationschedule()

GET /api/v2/recording/recordingkeys/rotationschedule

Get key rotation schedule



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();
apiInstance.getRecordingRecordingkeysRotationschedule()
  .then(function(data) {
    console.log(`getRecordingRecordingkeysRotationschedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRecordingRecordingkeysRotationschedule');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**KeyRotationSchedule**

<a name="getRecordingSettings"></a>

# RecordingSettings getRecordingSettings(opts)

GET /api/v2/recording/settings

Get the Recording Settings for the Organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var opts = { 
  'createDefault': false // Boolean | If no settings are found, a new one is created with default values
};
apiInstance.getRecordingSettings(opts)
  .then(function(data) {
    console.log(`getRecordingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRecordingSettings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **createDefault** | **Boolean** | If no settings are found, a new one is created with default values | [optional] [default to false] |
{: class="table table-striped"}

### Return type

**RecordingSettings**

<a name="getRecordingsScreensessions"></a>

# ScreenRecordingSessionListing getRecordingsScreensessions(opts)

GET /api/v2/recordings/screensessions

Retrieves a paged listing of screen recording sessions



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};
apiInstance.getRecordingsScreensessions(opts)
  .then(function(data) {
    console.log(`getRecordingsScreensessions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling getRecordingsScreensessions');
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

**ScreenRecordingSessionListing**

<a name="patchRecordingMediaretentionpolicy"></a>

# Policy patchRecordingMediaretentionpolicy(policyId, body)

PATCH /api/v2/recording/mediaretentionpolicies/{policyId}

Patch a media retention policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var policyId = "policyId_example"; // String | Policy ID

var body = {}; // Object | Policy

apiInstance.patchRecordingMediaretentionpolicy(policyId, body)
  .then(function(data) {
    console.log(`patchRecordingMediaretentionpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchRecordingMediaretentionpolicy');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |
 **body** | **Object** | Policy |  |
{: class="table table-striped"}

### Return type

**Policy**

<a name="patchRecordingsScreensession"></a>

# void patchRecordingsScreensession(recordingSessionId, opts)

PATCH /api/v2/recordings/screensessions/{recordingSessionId}

Update a screen recording session



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var recordingSessionId = "recordingSessionId_example"; // String | Screen recording session ID

var opts = { 
  'body': {} // Object | 
};
apiInstance.patchRecordingsScreensession(recordingSessionId, opts)
  .then(function() {
    console.log('patchRecordingsScreensession returned successfully.');
  })
  .catch(function(err) {
  	console.log('There was a failure calling patchRecordingsScreensession');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **recordingSessionId** | **String** | Screen recording session ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

void (no response body)

<a name="postConversationRecordingAnnotations"></a>

# Annotation postConversationRecordingAnnotations(conversationId, recordingId, body)

POST /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations

Create annotation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var recordingId = "recordingId_example"; // String | Recording ID

var body = {}; // Object | annotation

apiInstance.postConversationRecordingAnnotations(conversationId, recordingId, body)
  .then(function(data) {
    console.log(`postConversationRecordingAnnotations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postConversationRecordingAnnotations');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **body** | **Object** | annotation |  |
{: class="table table-striped"}

### Return type

**Annotation**

<a name="postRecordingBatchrequests"></a>

# BatchDownloadJobSubmissionResult postRecordingBatchrequests(body)

POST /api/v2/recording/batchrequests

Submit a batch download request for recordings. Recordings in response will be in their original format/codec - configured in the Trunk configuration.



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var body = {}; // Object | Job submission criteria

apiInstance.postRecordingBatchrequests(body)
  .then(function(data) {
    console.log(`postRecordingBatchrequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRecordingBatchrequests');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Job submission criteria |  |
{: class="table table-striped"}

### Return type

**BatchDownloadJobSubmissionResult**

<a name="postRecordingLocalkeys"></a>

# EncryptionKey postRecordingLocalkeys(body)

POST /api/v2/recording/localkeys

create a local recording key



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var body = {}; // Object | Local Encryption body

apiInstance.postRecordingLocalkeys(body)
  .then(function(data) {
    console.log(`postRecordingLocalkeys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRecordingLocalkeys');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Local Encryption body |  |
{: class="table table-striped"}

### Return type

**EncryptionKey**

<a name="postRecordingLocalkeysSettings"></a>

# LocalEncryptionConfiguration postRecordingLocalkeysSettings(body)

POST /api/v2/recording/localkeys/settings

create settings for local key creation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var body = {}; // Object | Local Encryption Configuration

apiInstance.postRecordingLocalkeysSettings(body)
  .then(function(data) {
    console.log(`postRecordingLocalkeysSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRecordingLocalkeysSettings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Local Encryption Configuration |  |
{: class="table table-striped"}

### Return type

**LocalEncryptionConfiguration**

<a name="postRecordingMediaretentionpolicies"></a>

# Policy postRecordingMediaretentionpolicies(body)

POST /api/v2/recording/mediaretentionpolicies

Create media retention policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var body = {}; // Object | Policy

apiInstance.postRecordingMediaretentionpolicies(body)
  .then(function(data) {
    console.log(`postRecordingMediaretentionpolicies success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRecordingMediaretentionpolicies');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Policy |  |
{: class="table table-striped"}

### Return type

**Policy**

<a name="postRecordingRecordingkeys"></a>

# EncryptionKey postRecordingRecordingkeys()

POST /api/v2/recording/recordingkeys

Create encryption key



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();
apiInstance.postRecordingRecordingkeys()
  .then(function(data) {
    console.log(`postRecordingRecordingkeys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling postRecordingRecordingkeys');
    console.error(err);
  });

~~~

### Parameters

This endpoint does not need any parameter.
{: class="table table-striped"}

### Return type

**EncryptionKey**

<a name="putConversationRecording"></a>

# Recording putConversationRecording(conversationId, recordingId, body)

PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}

Updates the retention records on a recording.

Currently supports updating and removing both archive and delete dates for eligible recordings. A request to change the archival date of an archived recording will result in a restoration of the recording until the new date set. 

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var recordingId = "recordingId_example"; // String | Recording ID

var body = {}; // Object | recording

apiInstance.putConversationRecording(conversationId, recordingId, body)
  .then(function(data) {
    console.log(`putConversationRecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putConversationRecording');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **body** | **Object** | recording |  |
{: class="table table-striped"}

### Return type

**Recording**

<a name="putConversationRecordingAnnotation"></a>

# Annotation putConversationRecordingAnnotation(conversationId, recordingId, annotationId, body)

PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}

Update annotation



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var conversationId = "conversationId_example"; // String | Conversation ID

var recordingId = "recordingId_example"; // String | Recording ID

var annotationId = "annotationId_example"; // String | Annotation ID

var body = {}; // Object | annotation

apiInstance.putConversationRecordingAnnotation(conversationId, recordingId, annotationId, body)
  .then(function(data) {
    console.log(`putConversationRecordingAnnotation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putConversationRecordingAnnotation');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **annotationId** | **String** | Annotation ID |  |
 **body** | **Object** | annotation |  |
{: class="table table-striped"}

### Return type

**Annotation**

<a name="putOrphanrecording"></a>

# Recording putOrphanrecording(orphanId, opts)

PUT /api/v2/orphanrecordings/{orphanId}

Updates an orphan recording to a regular recording with retention values

If this operation is successful the orphan will no longer exist. It will be replaced by the resulting recording in the response. This replacement recording is accessible by the normal Recording api.

### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var orphanId = "orphanId_example"; // String | Orphan ID

var opts = { 
  'body': {} // Object | 
};
apiInstance.putOrphanrecording(orphanId, opts)
  .then(function(data) {
    console.log(`putOrphanrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putOrphanrecording');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orphanId** | **String** | Orphan ID |  |
 **body** | **Object** |  | [optional]  |
{: class="table table-striped"}

### Return type

**Recording**

<a name="putRecordingLocalkeysSetting"></a>

# LocalEncryptionConfiguration putRecordingLocalkeysSetting(settingsId, body)

PUT /api/v2/recording/localkeys/settings/{settingsId}

Update the local encryption settings



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var settingsId = "settingsId_example"; // String | Settings Id

var body = {}; // Object | Local Encryption metadata

apiInstance.putRecordingLocalkeysSetting(settingsId, body)
  .then(function(data) {
    console.log(`putRecordingLocalkeysSetting success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putRecordingLocalkeysSetting');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **settingsId** | **String** | Settings Id |  |
 **body** | **Object** | Local Encryption metadata |  |
{: class="table table-striped"}

### Return type

**LocalEncryptionConfiguration**

<a name="putRecordingMediaretentionpolicy"></a>

# Policy putRecordingMediaretentionpolicy(policyId, body)

PUT /api/v2/recording/mediaretentionpolicies/{policyId}

Update a media retention policy



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var policyId = "policyId_example"; // String | Policy ID

var body = {}; // Object | Policy

apiInstance.putRecordingMediaretentionpolicy(policyId, body)
  .then(function(data) {
    console.log(`putRecordingMediaretentionpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putRecordingMediaretentionpolicy');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |
 **body** | **Object** | Policy |  |
{: class="table table-striped"}

### Return type

**Policy**

<a name="putRecordingRecordingkeysRotationschedule"></a>

# KeyRotationSchedule putRecordingRecordingkeysRotationschedule(body)

PUT /api/v2/recording/recordingkeys/rotationschedule

Update key rotation schedule



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var body = {}; // Object | KeyRotationSchedule

apiInstance.putRecordingRecordingkeysRotationschedule(body)
  .then(function(data) {
    console.log(`putRecordingRecordingkeysRotationschedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putRecordingRecordingkeysRotationschedule');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | KeyRotationSchedule |  |
{: class="table table-striped"}

### Return type

**KeyRotationSchedule**

<a name="putRecordingSettings"></a>

# RecordingSettings putRecordingSettings(body)

PUT /api/v2/recording/settings

Update the Recording Settings for the Organization



### Example

~~~ javascript
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Configure OAuth2 access token for authorization: PureCloud Auth
platformClient.ApiClient.instance.authentications['PureCloud Auth'].accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new platformClient.RecordingApi();

var body = {}; // Object | Recording settings

apiInstance.putRecordingSettings(body)
  .then(function(data) {
    console.log(`putRecordingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch(function(err) {
  	console.log('There was a failure calling putRecordingSettings');
    console.error(err);
  });

~~~

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Recording settings |  |
{: class="table table-striped"}

### Return type

**RecordingSettings**

