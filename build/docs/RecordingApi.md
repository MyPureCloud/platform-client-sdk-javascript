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



Requires NO permissions: 




### Example Usage

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



Requires ANY permissions: 

* recording:orphan:delete



### Example Usage

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

Requires ANY permissions: 

* recording:retentionPolicy:delete



### Example Usage

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



Requires ANY permissions: 

* recording:retentionPolicy:delete



### Example Usage

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



Requires NO permissions: 




### Example Usage

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



Requires NO permissions: 




### Example Usage

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



Requires NO permissions: 




### Example Usage

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



Requires NO permissions: 




### Example Usage

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



Requires NO permissions: 




### Example Usage

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



Requires NO permissions: 




### Example Usage

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



Requires ANY permissions: 

* recording:orphan:view



### Example Usage

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

Requires NO permissions: 




### Example Usage

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



Requires ANY permissions: 

* recording:orphan:view



### Example Usage

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



Requires NO permissions: 




### Example Usage

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



Requires ANY permissions: 

* recording:encryptionKey:view



### Example Usage

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



Requires ANY permissions: 

* recording:encryptionKey:view



### Example Usage

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

Requires ANY permissions: 

* recording:retentionPolicy:view



### Example Usage

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



Requires ANY permissions: 

* recording:retentionPolicy:view



### Example Usage

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



Requires ANY permissions: 

* recording:encryptionKey:view



### Example Usage

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



Requires ANY permissions: 

* recording:encryptionKey:view



### Example Usage

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



Requires NO permissions: 




### Example Usage

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



Requires NO permissions: 




### Example Usage

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



Requires ANY permissions: 

* recording:retentionPolicy:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyPolicyExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#PolicyExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

Policy <a style="cursor: pointer" onclick="copyPolicyExample()">Copy</a>

<div id="PolicyExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "modifiedDate": Date, 
  "createdDate": Date, 
  "order": Number, 
  "description": String, 
  "enabled": Boolean, 
  "mediaPolicies": { 
    "callPolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
        "directions": [String], 
        "duration": { 
          "durationTarget": String, 
          "durationOperator": String, 
          "durationRange": String, 
        },  
      },  
    },  
    "chatPolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
        "duration": { 
          "durationTarget": String, 
          "durationOperator": String, 
          "durationRange": String, 
        },  
      },  
    },  
    "emailPolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
      },  
    },  
    "messagePolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
      },  
    },  
  },  
  "conditions": { 
    "forUsers": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "chat": { 
        "jabberId": String, 
      },  
      "department": String, 
      "email": String, 
      "primaryContactInfo": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": User, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "routingStatus": { 
        "userId": String, 
        "status": String, 
        "startTime": Date, 
      },  
      "presence": { 
        "id": String, 
        "name": String, 
        "source": String, 
        "primary": Boolean, 
        "presenceDefinition": { 
          "id": String, 
          "systemPresence": String, 
          "selfUri": String, 
        },  
        "message": String, 
        "modifiedDate": Date, 
        "selfUri": String, 
      },  
      "conversationSummary": { 
        "userId": String, 
        "call": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "callback": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "email": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "message": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "chat": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "socialExpression": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "video": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
      },  
      "outOfOffice": { 
        "id": String, 
        "name": String, 
        "user": User, 
        "startDate": Date, 
        "endDate": Date, 
        "active": Boolean, 
        "indefinite": Boolean, 
        "selfUri": String, 
      },  
      "geolocation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "primary": Boolean, 
        "latitude": Number, 
        "longitude": Number, 
        "country": String, 
        "region": String, 
        "city": String, 
        "locations": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "station": { 
        "associatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "effectiveStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "defaultStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "lastAssociatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
      },  
      "authorization": { 
        "roles": { 
          "id": String, 
          "name": String, 
        },  
        "permissions": [String], 
        "permissionPolicies": { 
          "id": String, 
          "domain": String, 
          "entityName": String, 
          "policyName": String, 
          "policyDescription": String, 
          "actionSetKey": String, 
          "allowConditions": Boolean, 
          "resourceConditionNode": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
          "namedResources": [String], 
          "resourceCondition": String, 
          "actionSet": [String], 
        },  
      },  
      "profileSkills": [String], 
      "locations": { 
        "id": String, 
        "floorplanId": String, 
        "coordinates": {String: Number}, 
        "notes": String, 
        "locationDefinition": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
      },  
      "groups": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "state": String, 
        "version": Number, 
        "type": String, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": User, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "selfUri": String, 
    },  
    "directions": [String], 
    "dateRanges": [String], 
    "mediaTypes": [String], 
    "forQueues": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "description": String, 
      "version": Number, 
      "dateCreated": Date, 
      "dateModified": Date, 
      "modifiedBy": String, 
      "createdBy": String, 
      "state": String, 
      "modifiedByApp": String, 
      "createdByApp": String, 
      "mediaSettings": { 
        "alertingTimeoutSeconds": Number, 
        "serviceLevel": { 
          "percentage": Number, 
          "durationMs": Number, 
        },  
      },  
      "bullseye": { 
        "rings": { 
          "expansionCriteria": { 
            "type": String, 
            "threshold": Number, 
          },  
          "actions": { 
            "skillsToRemove": { 
              "name": String, 
              "id": String, 
              "selfUri": String, 
            },  
          },  
        },  
      },  
      "acwSettings": { 
        "wrapupPrompt": String, 
        "timeoutMs": Number, 
      },  
      "skillEvaluationMethod": String, 
      "queueFlow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "whisperPrompt": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "autoAnswerOnly": Boolean, 
      "callingPartyName": String, 
      "callingPartyNumber": String, 
      "defaultScripts": { 
        "id": String, 
        "name": String, 
        "versionId": String, 
        "createdDate": Date, 
        "modifiedDate": Date, 
        "publishedDate": Date, 
        "versionDate": Date, 
        "startPageId": String, 
        "startPageName": String, 
        "features": Object, 
        "variables": Object, 
        "customActions": Object, 
        "pages": { 
          "id": String, 
          "name": String, 
          "versionId": String, 
          "createdDate": Date, 
          "modifiedDate": Date, 
          "rootContainer": {String: Object}, 
          "properties": {String: Object}, 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "outboundEmailAddress": { 
        "domain": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "route": { 
          "id": String, 
          "name": String, 
          "pattern": String, 
          "queue": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "priority": Number, 
          "skills": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "language": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "fromName": String, 
          "fromEmail": String, 
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "replyEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "selfUri": String, 
        },  
      },  
      "memberCount": Number, 
      "selfUri": String, 
    },  
    "duration": { 
      "durationTarget": String, 
      "durationOperator": String, 
      "durationRange": String, 
    },  
    "wrapupCodes": { 
      "id": String, 
      "name": String, 
      "dateCreated": Date, 
      "dateModified": Date, 
      "modifiedBy": String, 
      "createdBy": String, 
      "selfUri": String, 
    },  
    "timeAllowed": { 
      "timeSlots": { 
        "startTime": String, 
        "stopTime": String, 
        "day": Number, 
      },  
      "timeZoneId": String, 
      "empty": Boolean, 
    },  
  },  
  "actions": { 
    "retainRecording": Boolean, 
    "deleteRecording": Boolean, 
    "alwaysDelete": Boolean, 
    "assignEvaluations": { 
      "evaluationForm": { 
        "id": String, 
        "name": String, 
        "modifiedDate": Date, 
        "published": Boolean, 
        "contextId": String, 
        "questionGroups": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "defaultAnswersToHighest": Boolean, 
          "defaultAnswersToNA": Boolean, 
          "naEnabled": Boolean, 
          "weight": Number, 
          "manualWeight": Boolean, 
          "questions": { 
            "id": String, 
            "text": String, 
            "helpText": String, 
            "type": String, 
            "naEnabled": Boolean, 
            "commentsRequired": Boolean, 
            "visibilityCondition": { 
              "combiningOperation": String, 
              "predicates": [Object], 
            },  
            "answerOptions": { 
              "id": String, 
              "text": String, 
              "value": Number, 
            },  
            "maxResponseCharacters": Number, 
            "explanationPrompt": String, 
            "isKill": Boolean, 
            "isCritical": Boolean, 
          },  
          "visibilityCondition": { 
            "combiningOperation": String, 
            "predicates": [Object], 
          },  
        },  
        "publishedVersions": { 
          "entities": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "pageSize": Number, 
          "pageNumber": Number, 
          "total": Number, 
          "selfUri": String, 
          "firstUri": String, 
          "nextUri": String, 
          "lastUri": String, 
          "previousUri": String, 
          "pageCount": Number, 
        },  
        "selfUri": String, 
      },  
      "user": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "chat": { 
          "jabberId": String, 
        },  
        "department": String, 
        "email": String, 
        "primaryContactInfo": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": User, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "routingStatus": { 
          "userId": String, 
          "status": String, 
          "startTime": Date, 
        },  
        "presence": { 
          "id": String, 
          "name": String, 
          "source": String, 
          "primary": Boolean, 
          "presenceDefinition": { 
            "id": String, 
            "systemPresence": String, 
            "selfUri": String, 
          },  
          "message": String, 
          "modifiedDate": Date, 
          "selfUri": String, 
        },  
        "conversationSummary": { 
          "userId": String, 
          "call": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "callback": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "email": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "message": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "chat": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "socialExpression": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "video": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
        },  
        "outOfOffice": { 
          "id": String, 
          "name": String, 
          "user": User, 
          "startDate": Date, 
          "endDate": Date, 
          "active": Boolean, 
          "indefinite": Boolean, 
          "selfUri": String, 
        },  
        "geolocation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "primary": Boolean, 
          "latitude": Number, 
          "longitude": Number, 
          "country": String, 
          "region": String, 
          "city": String, 
          "locations": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "station": { 
          "associatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "effectiveStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "defaultStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "lastAssociatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
        },  
        "authorization": { 
          "roles": { 
            "id": String, 
            "name": String, 
          },  
          "permissions": [String], 
          "permissionPolicies": { 
            "id": String, 
            "domain": String, 
            "entityName": String, 
            "policyName": String, 
            "policyDescription": String, 
            "actionSetKey": String, 
            "allowConditions": Boolean, 
            "resourceConditionNode": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
            "namedResources": [String], 
            "resourceCondition": String, 
            "actionSet": [String], 
          },  
        },  
        "profileSkills": [String], 
        "locations": { 
          "id": String, 
          "floorplanId": String, 
          "coordinates": {String: Number}, 
          "notes": String, 
          "locationDefinition": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
        },  
        "groups": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "state": String, 
          "version": Number, 
          "type": String, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
    },  
    "assignMeteredEvaluations": { 
      "evaluationContextId": String, 
      "evaluators": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "chat": { 
          "jabberId": String, 
        },  
        "department": String, 
        "email": String, 
        "primaryContactInfo": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": User, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "routingStatus": { 
          "userId": String, 
          "status": String, 
          "startTime": Date, 
        },  
        "presence": { 
          "id": String, 
          "name": String, 
          "source": String, 
          "primary": Boolean, 
          "presenceDefinition": { 
            "id": String, 
            "systemPresence": String, 
            "selfUri": String, 
          },  
          "message": String, 
          "modifiedDate": Date, 
          "selfUri": String, 
        },  
        "conversationSummary": { 
          "userId": String, 
          "call": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "callback": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "email": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "message": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "chat": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "socialExpression": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "video": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
        },  
        "outOfOffice": { 
          "id": String, 
          "name": String, 
          "user": User, 
          "startDate": Date, 
          "endDate": Date, 
          "active": Boolean, 
          "indefinite": Boolean, 
          "selfUri": String, 
        },  
        "geolocation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "primary": Boolean, 
          "latitude": Number, 
          "longitude": Number, 
          "country": String, 
          "region": String, 
          "city": String, 
          "locations": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "station": { 
          "associatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "effectiveStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "defaultStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "lastAssociatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
        },  
        "authorization": { 
          "roles": { 
            "id": String, 
            "name": String, 
          },  
          "permissions": [String], 
          "permissionPolicies": { 
            "id": String, 
            "domain": String, 
            "entityName": String, 
            "policyName": String, 
            "policyDescription": String, 
            "actionSetKey": String, 
            "allowConditions": Boolean, 
            "resourceConditionNode": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
            "namedResources": [String], 
            "resourceCondition": String, 
            "actionSet": [String], 
          },  
        },  
        "profileSkills": [String], 
        "locations": { 
          "id": String, 
          "floorplanId": String, 
          "coordinates": {String: Number}, 
          "notes": String, 
          "locationDefinition": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
        },  
        "groups": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "state": String, 
          "version": Number, 
          "type": String, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
      "maxNumberEvaluations": Number, 
      "evaluationForm": { 
        "id": String, 
        "name": String, 
        "modifiedDate": Date, 
        "published": Boolean, 
        "contextId": String, 
        "questionGroups": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "defaultAnswersToHighest": Boolean, 
          "defaultAnswersToNA": Boolean, 
          "naEnabled": Boolean, 
          "weight": Number, 
          "manualWeight": Boolean, 
          "questions": { 
            "id": String, 
            "text": String, 
            "helpText": String, 
            "type": String, 
            "naEnabled": Boolean, 
            "commentsRequired": Boolean, 
            "visibilityCondition": { 
              "combiningOperation": String, 
              "predicates": [Object], 
            },  
            "answerOptions": { 
              "id": String, 
              "text": String, 
              "value": Number, 
            },  
            "maxResponseCharacters": Number, 
            "explanationPrompt": String, 
            "isKill": Boolean, 
            "isCritical": Boolean, 
          },  
          "visibilityCondition": { 
            "combiningOperation": String, 
            "predicates": [Object], 
          },  
        },  
        "publishedVersions": { 
          "entities": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "pageSize": Number, 
          "pageNumber": Number, 
          "total": Number, 
          "selfUri": String, 
          "firstUri": String, 
          "nextUri": String, 
          "lastUri": String, 
          "previousUri": String, 
          "pageCount": Number, 
        },  
        "selfUri": String, 
      },  
      "assignToActiveUser": Boolean, 
      "timeInterval": { 
        "days": Number, 
        "hours": Number, 
      },  
    },  
    "assignCalibrations": { 
      "calibrator": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "chat": { 
          "jabberId": String, 
        },  
        "department": String, 
        "email": String, 
        "primaryContactInfo": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": User, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "routingStatus": { 
          "userId": String, 
          "status": String, 
          "startTime": Date, 
        },  
        "presence": { 
          "id": String, 
          "name": String, 
          "source": String, 
          "primary": Boolean, 
          "presenceDefinition": { 
            "id": String, 
            "systemPresence": String, 
            "selfUri": String, 
          },  
          "message": String, 
          "modifiedDate": Date, 
          "selfUri": String, 
        },  
        "conversationSummary": { 
          "userId": String, 
          "call": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "callback": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "email": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "message": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "chat": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "socialExpression": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "video": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
        },  
        "outOfOffice": { 
          "id": String, 
          "name": String, 
          "user": User, 
          "startDate": Date, 
          "endDate": Date, 
          "active": Boolean, 
          "indefinite": Boolean, 
          "selfUri": String, 
        },  
        "geolocation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "primary": Boolean, 
          "latitude": Number, 
          "longitude": Number, 
          "country": String, 
          "region": String, 
          "city": String, 
          "locations": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "station": { 
          "associatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "effectiveStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "defaultStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "lastAssociatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
        },  
        "authorization": { 
          "roles": { 
            "id": String, 
            "name": String, 
          },  
          "permissions": [String], 
          "permissionPolicies": { 
            "id": String, 
            "domain": String, 
            "entityName": String, 
            "policyName": String, 
            "policyDescription": String, 
            "actionSetKey": String, 
            "allowConditions": Boolean, 
            "resourceConditionNode": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
            "namedResources": [String], 
            "resourceCondition": String, 
            "actionSet": [String], 
          },  
        },  
        "profileSkills": [String], 
        "locations": { 
          "id": String, 
          "floorplanId": String, 
          "coordinates": {String: Number}, 
          "notes": String, 
          "locationDefinition": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
        },  
        "groups": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "state": String, 
          "version": Number, 
          "type": String, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
      "evaluators": User, 
      "evaluationForm": { 
        "id": String, 
        "name": String, 
        "modifiedDate": Date, 
        "published": Boolean, 
        "contextId": String, 
        "questionGroups": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "defaultAnswersToHighest": Boolean, 
          "defaultAnswersToNA": Boolean, 
          "naEnabled": Boolean, 
          "weight": Number, 
          "manualWeight": Boolean, 
          "questions": { 
            "id": String, 
            "text": String, 
            "helpText": String, 
            "type": String, 
            "naEnabled": Boolean, 
            "commentsRequired": Boolean, 
            "visibilityCondition": { 
              "combiningOperation": String, 
              "predicates": [Object], 
            },  
            "answerOptions": { 
              "id": String, 
              "text": String, 
              "value": Number, 
            },  
            "maxResponseCharacters": Number, 
            "explanationPrompt": String, 
            "isKill": Boolean, 
            "isCritical": Boolean, 
          },  
          "visibilityCondition": { 
            "combiningOperation": String, 
            "predicates": [Object], 
          },  
        },  
        "publishedVersions": { 
          "entities": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "pageSize": Number, 
          "pageNumber": Number, 
          "total": Number, 
          "selfUri": String, 
          "firstUri": String, 
          "nextUri": String, 
          "lastUri": String, 
          "previousUri": String, 
          "pageCount": Number, 
        },  
        "selfUri": String, 
      },  
      "expertEvaluator": User, 
    },  
    "assignSurveys": { 
      "surveyForm": { 
        "id": String, 
        "name": String, 
        "contextId": String, 
        "selfUri": String, 
      },  
      "flow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "inviteTimeInterval": String, 
      "sendingUser": String, 
      "sendingDomain": String, 
    },  
    "retentionDuration": { 
      "archiveRetention": { 
        "days": Number, 
        "storageMedium": String, 
      },  
      "deleteRetention": { 
        "days": Number, 
      },  
    },  
    "initiateScreenRecording": { 
      "recordACW": Boolean, 
      "archiveRetention": { 
        "days": Number, 
        "storageMedium": String, 
      },  
      "deleteRetention": { 
        "days": Number, 
      },  
    },  
    "mediaTranscriptions": { 
      "displayName": String, 
      "transcriptionProvider": String, 
      "integrationId": String, 
    },  
  },  
  "policyErrors": { 
    "policyErrorMessages": { 
      "statusCode": Number, 
      "userMessage": Object, 
      "userParamsMessage": String, 
      "errorCode": String, 
      "correlationId": String, 
      "userParams": { 
        "key": String, 
        "value": String, 
      },  
      "insertDate": Date, 
    },  
  },  
  "selfUri": String, 
}
~~~
</div>


### Example Usage

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



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyScreenRecordingSessionRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#ScreenRecordingSessionRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

ScreenRecordingSessionRequest <a style="cursor: pointer" onclick="copyScreenRecordingSessionRequestExample()">Copy</a>

<div id="ScreenRecordingSessionRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "state": String, 
  "archiveDate": Date, 
  "deleteDate": Date, 
}
~~~
</div>


### Example Usage

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



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAnnotationExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AnnotationExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

Annotation <a style="cursor: pointer" onclick="copyAnnotationExample()">Copy</a>

<div id="AnnotationExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "type": String, 
  "location": Number, 
  "durationMs": Number, 
  "absoluteLocation": Number, 
  "absoluteDurationMs": Number, 
  "recordingLocation": Number, 
  "recordingDurationMs": Number, 
  "user": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "chat": { 
      "jabberId": String, 
    },  
    "department": String, 
    "email": String, 
    "primaryContactInfo": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "state": String, 
    "title": String, 
    "username": String, 
    "manager": User, 
    "images": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "version": Number, 
    "routingStatus": { 
      "userId": String, 
      "status": String, 
      "startTime": Date, 
    },  
    "presence": { 
      "id": String, 
      "name": String, 
      "source": String, 
      "primary": Boolean, 
      "presenceDefinition": { 
        "id": String, 
        "systemPresence": String, 
        "selfUri": String, 
      },  
      "message": String, 
      "modifiedDate": Date, 
      "selfUri": String, 
    },  
    "conversationSummary": { 
      "userId": String, 
      "call": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "callback": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "email": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "message": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "chat": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "socialExpression": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "video": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
    },  
    "outOfOffice": { 
      "id": String, 
      "name": String, 
      "user": User, 
      "startDate": Date, 
      "endDate": Date, 
      "active": Boolean, 
      "indefinite": Boolean, 
      "selfUri": String, 
    },  
    "geolocation": { 
      "id": String, 
      "name": String, 
      "type": String, 
      "primary": Boolean, 
      "latitude": Number, 
      "longitude": Number, 
      "country": String, 
      "region": String, 
      "city": String, 
      "locations": { 
        "id": String, 
        "name": String, 
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "station": { 
      "associatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "effectiveStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "defaultStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "lastAssociatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
    },  
    "authorization": { 
      "roles": { 
        "id": String, 
        "name": String, 
      },  
      "permissions": [String], 
      "permissionPolicies": { 
        "id": String, 
        "domain": String, 
        "entityName": String, 
        "policyName": String, 
        "policyDescription": String, 
        "actionSetKey": String, 
        "allowConditions": Boolean, 
        "resourceConditionNode": { 
          "variableName": String, 
          "conjunction": String, 
          "operator": String, 
          "operands": { 
            "type": String, 
            "value": String, 
          },  
          "terms": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
        },  
        "namedResources": [String], 
        "resourceCondition": String, 
        "actionSet": [String], 
      },  
    },  
    "profileSkills": [String], 
    "locations": { 
      "id": String, 
      "floorplanId": String, 
      "coordinates": {String: Number}, 
      "notes": String, 
      "locationDefinition": { 
        "id": String, 
        "name": String, 
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
        "selfUri": String, 
      },  
    },  
    "groups": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "state": String, 
      "version": Number, 
      "type": String, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "selfUri": String, 
  },  
  "description": String, 
  "keywordName": String, 
  "confidence": Number, 
  "keywordSetId": String, 
  "keywordSetName": String, 
  "utterance": String, 
  "timeBegin": String, 
  "timeEnd": String, 
  "keywordConfidenceThreshold": String, 
  "agentScoreModifier": String, 
  "customerScoreModifier": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

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



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyBatchDownloadJobSubmissionExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#BatchDownloadJobSubmissionExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

BatchDownloadJobSubmission <a style="cursor: pointer" onclick="copyBatchDownloadJobSubmissionExample()">Copy</a>

<div id="BatchDownloadJobSubmissionExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "batchDownloadRequestList": { 
    "conversationId": String, 
    "recordingId": String, 
  },  
}
~~~
</div>


### Example Usage

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



Requires ANY permissions: 

* recording:encryptionKey:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyLocalEncryptionKeyRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#LocalEncryptionKeyRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

LocalEncryptionKeyRequest <a style="cursor: pointer" onclick="copyLocalEncryptionKeyRequestExample()">Copy</a>

<div id="LocalEncryptionKeyRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "configId": String, 
  "publicKey": String, 
  "keypairId": String, 
}
~~~
</div>


### Example Usage

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



Requires ANY permissions: 

* recording:encryptionKey:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyLocalEncryptionConfigurationExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#LocalEncryptionConfigurationExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

LocalEncryptionConfiguration <a style="cursor: pointer" onclick="copyLocalEncryptionConfigurationExample()">Copy</a>

<div id="LocalEncryptionConfigurationExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "url": String, 
  "apiId": String, 
  "apiKey": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

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



Requires ANY permissions: 

* recording:retentionPolicy:add


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyPolicyCreateExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#PolicyCreateExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

PolicyCreate <a style="cursor: pointer" onclick="copyPolicyCreateExample()">Copy</a>

<div id="PolicyCreateExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "modifiedDate": Date, 
  "createdDate": Date, 
  "order": Number, 
  "description": String, 
  "enabled": Boolean, 
  "mediaPolicies": { 
    "callPolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
        "directions": [String], 
        "duration": { 
          "durationTarget": String, 
          "durationOperator": String, 
          "durationRange": String, 
        },  
      },  
    },  
    "chatPolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
        "duration": { 
          "durationTarget": String, 
          "durationOperator": String, 
          "durationRange": String, 
        },  
      },  
    },  
    "emailPolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
      },  
    },  
    "messagePolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
      },  
    },  
  },  
  "conditions": { 
    "forUsers": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "chat": { 
        "jabberId": String, 
      },  
      "department": String, 
      "email": String, 
      "primaryContactInfo": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": User, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "routingStatus": { 
        "userId": String, 
        "status": String, 
        "startTime": Date, 
      },  
      "presence": { 
        "id": String, 
        "name": String, 
        "source": String, 
        "primary": Boolean, 
        "presenceDefinition": { 
          "id": String, 
          "systemPresence": String, 
          "selfUri": String, 
        },  
        "message": String, 
        "modifiedDate": Date, 
        "selfUri": String, 
      },  
      "conversationSummary": { 
        "userId": String, 
        "call": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "callback": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "email": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "message": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "chat": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "socialExpression": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "video": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
      },  
      "outOfOffice": { 
        "id": String, 
        "name": String, 
        "user": User, 
        "startDate": Date, 
        "endDate": Date, 
        "active": Boolean, 
        "indefinite": Boolean, 
        "selfUri": String, 
      },  
      "geolocation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "primary": Boolean, 
        "latitude": Number, 
        "longitude": Number, 
        "country": String, 
        "region": String, 
        "city": String, 
        "locations": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "station": { 
        "associatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "effectiveStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "defaultStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "lastAssociatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
      },  
      "authorization": { 
        "roles": { 
          "id": String, 
          "name": String, 
        },  
        "permissions": [String], 
        "permissionPolicies": { 
          "id": String, 
          "domain": String, 
          "entityName": String, 
          "policyName": String, 
          "policyDescription": String, 
          "actionSetKey": String, 
          "allowConditions": Boolean, 
          "resourceConditionNode": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
          "namedResources": [String], 
          "resourceCondition": String, 
          "actionSet": [String], 
        },  
      },  
      "profileSkills": [String], 
      "locations": { 
        "id": String, 
        "floorplanId": String, 
        "coordinates": {String: Number}, 
        "notes": String, 
        "locationDefinition": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
      },  
      "groups": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "state": String, 
        "version": Number, 
        "type": String, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": User, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "selfUri": String, 
    },  
    "directions": [String], 
    "dateRanges": [String], 
    "mediaTypes": [String], 
    "forQueues": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "description": String, 
      "version": Number, 
      "dateCreated": Date, 
      "dateModified": Date, 
      "modifiedBy": String, 
      "createdBy": String, 
      "state": String, 
      "modifiedByApp": String, 
      "createdByApp": String, 
      "mediaSettings": { 
        "alertingTimeoutSeconds": Number, 
        "serviceLevel": { 
          "percentage": Number, 
          "durationMs": Number, 
        },  
      },  
      "bullseye": { 
        "rings": { 
          "expansionCriteria": { 
            "type": String, 
            "threshold": Number, 
          },  
          "actions": { 
            "skillsToRemove": { 
              "name": String, 
              "id": String, 
              "selfUri": String, 
            },  
          },  
        },  
      },  
      "acwSettings": { 
        "wrapupPrompt": String, 
        "timeoutMs": Number, 
      },  
      "skillEvaluationMethod": String, 
      "queueFlow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "whisperPrompt": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "autoAnswerOnly": Boolean, 
      "callingPartyName": String, 
      "callingPartyNumber": String, 
      "defaultScripts": { 
        "id": String, 
        "name": String, 
        "versionId": String, 
        "createdDate": Date, 
        "modifiedDate": Date, 
        "publishedDate": Date, 
        "versionDate": Date, 
        "startPageId": String, 
        "startPageName": String, 
        "features": Object, 
        "variables": Object, 
        "customActions": Object, 
        "pages": { 
          "id": String, 
          "name": String, 
          "versionId": String, 
          "createdDate": Date, 
          "modifiedDate": Date, 
          "rootContainer": {String: Object}, 
          "properties": {String: Object}, 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "outboundEmailAddress": { 
        "domain": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "route": { 
          "id": String, 
          "name": String, 
          "pattern": String, 
          "queue": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "priority": Number, 
          "skills": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "language": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "fromName": String, 
          "fromEmail": String, 
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "replyEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "selfUri": String, 
        },  
      },  
      "memberCount": Number, 
      "selfUri": String, 
    },  
    "duration": { 
      "durationTarget": String, 
      "durationOperator": String, 
      "durationRange": String, 
    },  
    "wrapupCodes": { 
      "id": String, 
      "name": String, 
      "dateCreated": Date, 
      "dateModified": Date, 
      "modifiedBy": String, 
      "createdBy": String, 
      "selfUri": String, 
    },  
    "timeAllowed": { 
      "timeSlots": { 
        "startTime": String, 
        "stopTime": String, 
        "day": Number, 
      },  
      "timeZoneId": String, 
      "empty": Boolean, 
    },  
  },  
  "actions": { 
    "retainRecording": Boolean, 
    "deleteRecording": Boolean, 
    "alwaysDelete": Boolean, 
    "assignEvaluations": { 
      "evaluationForm": { 
        "id": String, 
        "name": String, 
        "modifiedDate": Date, 
        "published": Boolean, 
        "contextId": String, 
        "questionGroups": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "defaultAnswersToHighest": Boolean, 
          "defaultAnswersToNA": Boolean, 
          "naEnabled": Boolean, 
          "weight": Number, 
          "manualWeight": Boolean, 
          "questions": { 
            "id": String, 
            "text": String, 
            "helpText": String, 
            "type": String, 
            "naEnabled": Boolean, 
            "commentsRequired": Boolean, 
            "visibilityCondition": { 
              "combiningOperation": String, 
              "predicates": [Object], 
            },  
            "answerOptions": { 
              "id": String, 
              "text": String, 
              "value": Number, 
            },  
            "maxResponseCharacters": Number, 
            "explanationPrompt": String, 
            "isKill": Boolean, 
            "isCritical": Boolean, 
          },  
          "visibilityCondition": { 
            "combiningOperation": String, 
            "predicates": [Object], 
          },  
        },  
        "publishedVersions": { 
          "entities": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "pageSize": Number, 
          "pageNumber": Number, 
          "total": Number, 
          "selfUri": String, 
          "firstUri": String, 
          "nextUri": String, 
          "lastUri": String, 
          "previousUri": String, 
          "pageCount": Number, 
        },  
        "selfUri": String, 
      },  
      "user": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "chat": { 
          "jabberId": String, 
        },  
        "department": String, 
        "email": String, 
        "primaryContactInfo": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": User, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "routingStatus": { 
          "userId": String, 
          "status": String, 
          "startTime": Date, 
        },  
        "presence": { 
          "id": String, 
          "name": String, 
          "source": String, 
          "primary": Boolean, 
          "presenceDefinition": { 
            "id": String, 
            "systemPresence": String, 
            "selfUri": String, 
          },  
          "message": String, 
          "modifiedDate": Date, 
          "selfUri": String, 
        },  
        "conversationSummary": { 
          "userId": String, 
          "call": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "callback": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "email": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "message": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "chat": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "socialExpression": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "video": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
        },  
        "outOfOffice": { 
          "id": String, 
          "name": String, 
          "user": User, 
          "startDate": Date, 
          "endDate": Date, 
          "active": Boolean, 
          "indefinite": Boolean, 
          "selfUri": String, 
        },  
        "geolocation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "primary": Boolean, 
          "latitude": Number, 
          "longitude": Number, 
          "country": String, 
          "region": String, 
          "city": String, 
          "locations": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "station": { 
          "associatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "effectiveStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "defaultStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "lastAssociatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
        },  
        "authorization": { 
          "roles": { 
            "id": String, 
            "name": String, 
          },  
          "permissions": [String], 
          "permissionPolicies": { 
            "id": String, 
            "domain": String, 
            "entityName": String, 
            "policyName": String, 
            "policyDescription": String, 
            "actionSetKey": String, 
            "allowConditions": Boolean, 
            "resourceConditionNode": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
            "namedResources": [String], 
            "resourceCondition": String, 
            "actionSet": [String], 
          },  
        },  
        "profileSkills": [String], 
        "locations": { 
          "id": String, 
          "floorplanId": String, 
          "coordinates": {String: Number}, 
          "notes": String, 
          "locationDefinition": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
        },  
        "groups": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "state": String, 
          "version": Number, 
          "type": String, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
    },  
    "assignMeteredEvaluations": { 
      "evaluationContextId": String, 
      "evaluators": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "chat": { 
          "jabberId": String, 
        },  
        "department": String, 
        "email": String, 
        "primaryContactInfo": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": User, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "routingStatus": { 
          "userId": String, 
          "status": String, 
          "startTime": Date, 
        },  
        "presence": { 
          "id": String, 
          "name": String, 
          "source": String, 
          "primary": Boolean, 
          "presenceDefinition": { 
            "id": String, 
            "systemPresence": String, 
            "selfUri": String, 
          },  
          "message": String, 
          "modifiedDate": Date, 
          "selfUri": String, 
        },  
        "conversationSummary": { 
          "userId": String, 
          "call": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "callback": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "email": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "message": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "chat": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "socialExpression": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "video": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
        },  
        "outOfOffice": { 
          "id": String, 
          "name": String, 
          "user": User, 
          "startDate": Date, 
          "endDate": Date, 
          "active": Boolean, 
          "indefinite": Boolean, 
          "selfUri": String, 
        },  
        "geolocation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "primary": Boolean, 
          "latitude": Number, 
          "longitude": Number, 
          "country": String, 
          "region": String, 
          "city": String, 
          "locations": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "station": { 
          "associatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "effectiveStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "defaultStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "lastAssociatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
        },  
        "authorization": { 
          "roles": { 
            "id": String, 
            "name": String, 
          },  
          "permissions": [String], 
          "permissionPolicies": { 
            "id": String, 
            "domain": String, 
            "entityName": String, 
            "policyName": String, 
            "policyDescription": String, 
            "actionSetKey": String, 
            "allowConditions": Boolean, 
            "resourceConditionNode": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
            "namedResources": [String], 
            "resourceCondition": String, 
            "actionSet": [String], 
          },  
        },  
        "profileSkills": [String], 
        "locations": { 
          "id": String, 
          "floorplanId": String, 
          "coordinates": {String: Number}, 
          "notes": String, 
          "locationDefinition": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
        },  
        "groups": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "state": String, 
          "version": Number, 
          "type": String, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
      "maxNumberEvaluations": Number, 
      "evaluationForm": { 
        "id": String, 
        "name": String, 
        "modifiedDate": Date, 
        "published": Boolean, 
        "contextId": String, 
        "questionGroups": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "defaultAnswersToHighest": Boolean, 
          "defaultAnswersToNA": Boolean, 
          "naEnabled": Boolean, 
          "weight": Number, 
          "manualWeight": Boolean, 
          "questions": { 
            "id": String, 
            "text": String, 
            "helpText": String, 
            "type": String, 
            "naEnabled": Boolean, 
            "commentsRequired": Boolean, 
            "visibilityCondition": { 
              "combiningOperation": String, 
              "predicates": [Object], 
            },  
            "answerOptions": { 
              "id": String, 
              "text": String, 
              "value": Number, 
            },  
            "maxResponseCharacters": Number, 
            "explanationPrompt": String, 
            "isKill": Boolean, 
            "isCritical": Boolean, 
          },  
          "visibilityCondition": { 
            "combiningOperation": String, 
            "predicates": [Object], 
          },  
        },  
        "publishedVersions": { 
          "entities": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "pageSize": Number, 
          "pageNumber": Number, 
          "total": Number, 
          "selfUri": String, 
          "firstUri": String, 
          "nextUri": String, 
          "lastUri": String, 
          "previousUri": String, 
          "pageCount": Number, 
        },  
        "selfUri": String, 
      },  
      "assignToActiveUser": Boolean, 
      "timeInterval": { 
        "days": Number, 
        "hours": Number, 
      },  
    },  
    "assignCalibrations": { 
      "calibrator": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "chat": { 
          "jabberId": String, 
        },  
        "department": String, 
        "email": String, 
        "primaryContactInfo": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": User, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "routingStatus": { 
          "userId": String, 
          "status": String, 
          "startTime": Date, 
        },  
        "presence": { 
          "id": String, 
          "name": String, 
          "source": String, 
          "primary": Boolean, 
          "presenceDefinition": { 
            "id": String, 
            "systemPresence": String, 
            "selfUri": String, 
          },  
          "message": String, 
          "modifiedDate": Date, 
          "selfUri": String, 
        },  
        "conversationSummary": { 
          "userId": String, 
          "call": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "callback": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "email": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "message": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "chat": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "socialExpression": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "video": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
        },  
        "outOfOffice": { 
          "id": String, 
          "name": String, 
          "user": User, 
          "startDate": Date, 
          "endDate": Date, 
          "active": Boolean, 
          "indefinite": Boolean, 
          "selfUri": String, 
        },  
        "geolocation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "primary": Boolean, 
          "latitude": Number, 
          "longitude": Number, 
          "country": String, 
          "region": String, 
          "city": String, 
          "locations": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "station": { 
          "associatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "effectiveStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "defaultStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "lastAssociatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
        },  
        "authorization": { 
          "roles": { 
            "id": String, 
            "name": String, 
          },  
          "permissions": [String], 
          "permissionPolicies": { 
            "id": String, 
            "domain": String, 
            "entityName": String, 
            "policyName": String, 
            "policyDescription": String, 
            "actionSetKey": String, 
            "allowConditions": Boolean, 
            "resourceConditionNode": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
            "namedResources": [String], 
            "resourceCondition": String, 
            "actionSet": [String], 
          },  
        },  
        "profileSkills": [String], 
        "locations": { 
          "id": String, 
          "floorplanId": String, 
          "coordinates": {String: Number}, 
          "notes": String, 
          "locationDefinition": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
        },  
        "groups": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "state": String, 
          "version": Number, 
          "type": String, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
      "evaluators": User, 
      "evaluationForm": { 
        "id": String, 
        "name": String, 
        "modifiedDate": Date, 
        "published": Boolean, 
        "contextId": String, 
        "questionGroups": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "defaultAnswersToHighest": Boolean, 
          "defaultAnswersToNA": Boolean, 
          "naEnabled": Boolean, 
          "weight": Number, 
          "manualWeight": Boolean, 
          "questions": { 
            "id": String, 
            "text": String, 
            "helpText": String, 
            "type": String, 
            "naEnabled": Boolean, 
            "commentsRequired": Boolean, 
            "visibilityCondition": { 
              "combiningOperation": String, 
              "predicates": [Object], 
            },  
            "answerOptions": { 
              "id": String, 
              "text": String, 
              "value": Number, 
            },  
            "maxResponseCharacters": Number, 
            "explanationPrompt": String, 
            "isKill": Boolean, 
            "isCritical": Boolean, 
          },  
          "visibilityCondition": { 
            "combiningOperation": String, 
            "predicates": [Object], 
          },  
        },  
        "publishedVersions": { 
          "entities": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "pageSize": Number, 
          "pageNumber": Number, 
          "total": Number, 
          "selfUri": String, 
          "firstUri": String, 
          "nextUri": String, 
          "lastUri": String, 
          "previousUri": String, 
          "pageCount": Number, 
        },  
        "selfUri": String, 
      },  
      "expertEvaluator": User, 
    },  
    "assignSurveys": { 
      "surveyForm": { 
        "id": String, 
        "name": String, 
        "contextId": String, 
        "selfUri": String, 
      },  
      "flow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "inviteTimeInterval": String, 
      "sendingUser": String, 
      "sendingDomain": String, 
    },  
    "retentionDuration": { 
      "archiveRetention": { 
        "days": Number, 
        "storageMedium": String, 
      },  
      "deleteRetention": { 
        "days": Number, 
      },  
    },  
    "initiateScreenRecording": { 
      "recordACW": Boolean, 
      "archiveRetention": { 
        "days": Number, 
        "storageMedium": String, 
      },  
      "deleteRetention": { 
        "days": Number, 
      },  
    },  
    "mediaTranscriptions": { 
      "displayName": String, 
      "transcriptionProvider": String, 
      "integrationId": String, 
    },  
  },  
  "policyErrors": { 
    "policyErrorMessages": { 
      "statusCode": Number, 
      "userMessage": Object, 
      "userParamsMessage": String, 
      "errorCode": String, 
      "correlationId": String, 
      "userParams": { 
        "key": String, 
        "value": String, 
      },  
      "insertDate": Date, 
    },  
  },  
  "selfUri": String, 
}
~~~
</div>


### Example Usage

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



Requires ANY permissions: 

* recording:encryptionKey:edit



### Example Usage

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

Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyRecordingExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#RecordingExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

Recording <a style="cursor: pointer" onclick="copyRecordingExample()">Copy</a>

<div id="RecordingExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "conversationId": String, 
  "path": String, 
  "startTime": String, 
  "endTime": String, 
  "media": String, 
  "annotations": { 
    "id": String, 
    "name": String, 
    "type": String, 
    "location": Number, 
    "durationMs": Number, 
    "absoluteLocation": Number, 
    "absoluteDurationMs": Number, 
    "recordingLocation": Number, 
    "recordingDurationMs": Number, 
    "user": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "chat": { 
        "jabberId": String, 
      },  
      "department": String, 
      "email": String, 
      "primaryContactInfo": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": User, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "routingStatus": { 
        "userId": String, 
        "status": String, 
        "startTime": Date, 
      },  
      "presence": { 
        "id": String, 
        "name": String, 
        "source": String, 
        "primary": Boolean, 
        "presenceDefinition": { 
          "id": String, 
          "systemPresence": String, 
          "selfUri": String, 
        },  
        "message": String, 
        "modifiedDate": Date, 
        "selfUri": String, 
      },  
      "conversationSummary": { 
        "userId": String, 
        "call": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "callback": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "email": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "message": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "chat": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "socialExpression": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "video": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
      },  
      "outOfOffice": { 
        "id": String, 
        "name": String, 
        "user": User, 
        "startDate": Date, 
        "endDate": Date, 
        "active": Boolean, 
        "indefinite": Boolean, 
        "selfUri": String, 
      },  
      "geolocation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "primary": Boolean, 
        "latitude": Number, 
        "longitude": Number, 
        "country": String, 
        "region": String, 
        "city": String, 
        "locations": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "station": { 
        "associatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "effectiveStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "defaultStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "lastAssociatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
      },  
      "authorization": { 
        "roles": { 
          "id": String, 
          "name": String, 
        },  
        "permissions": [String], 
        "permissionPolicies": { 
          "id": String, 
          "domain": String, 
          "entityName": String, 
          "policyName": String, 
          "policyDescription": String, 
          "actionSetKey": String, 
          "allowConditions": Boolean, 
          "resourceConditionNode": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
          "namedResources": [String], 
          "resourceCondition": String, 
          "actionSet": [String], 
        },  
      },  
      "profileSkills": [String], 
      "locations": { 
        "id": String, 
        "floorplanId": String, 
        "coordinates": {String: Number}, 
        "notes": String, 
        "locationDefinition": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
      },  
      "groups": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "state": String, 
        "version": Number, 
        "type": String, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": User, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "selfUri": String, 
    },  
    "description": String, 
    "keywordName": String, 
    "confidence": Number, 
    "keywordSetId": String, 
    "keywordSetName": String, 
    "utterance": String, 
    "timeBegin": String, 
    "timeEnd": String, 
    "keywordConfidenceThreshold": String, 
    "agentScoreModifier": String, 
    "customerScoreModifier": String, 
    "selfUri": String, 
  },  
  "transcript": { 
    "body": String, 
    "id": String, 
    "to": String, 
    "from": String, 
    "utc": String, 
    "chat": String, 
    "message": String, 
    "type": String, 
    "user": { 
      "id": String, 
      "name": String, 
      "displayName": String, 
      "username": String, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
    },  
  },  
  "emailTranscript": { 
    "htmlBody": String, 
    "textBody": String, 
    "id": String, 
    "to": { 
      "email": String, 
      "name": String, 
    },  
    "cc": { 
      "email": String, 
      "name": String, 
    },  
    "bcc": { 
      "email": String, 
      "name": String, 
    },  
    "from": { 
      "email": String, 
      "name": String, 
    },  
    "subject": String, 
    "attachments": { 
      "name": String, 
      "contentPath": String, 
      "contentType": String, 
      "attachmentId": String, 
      "contentLength": Number, 
    },  
    "time": Date, 
  },  
  "messagingTranscript": { 
    "from": String, 
    "fromUser": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "chat": { 
        "jabberId": String, 
      },  
      "department": String, 
      "email": String, 
      "primaryContactInfo": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": User, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "routingStatus": { 
        "userId": String, 
        "status": String, 
        "startTime": Date, 
      },  
      "presence": { 
        "id": String, 
        "name": String, 
        "source": String, 
        "primary": Boolean, 
        "presenceDefinition": { 
          "id": String, 
          "systemPresence": String, 
          "selfUri": String, 
        },  
        "message": String, 
        "modifiedDate": Date, 
        "selfUri": String, 
      },  
      "conversationSummary": { 
        "userId": String, 
        "call": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "callback": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "email": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "message": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "chat": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "socialExpression": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "video": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
      },  
      "outOfOffice": { 
        "id": String, 
        "name": String, 
        "user": User, 
        "startDate": Date, 
        "endDate": Date, 
        "active": Boolean, 
        "indefinite": Boolean, 
        "selfUri": String, 
      },  
      "geolocation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "primary": Boolean, 
        "latitude": Number, 
        "longitude": Number, 
        "country": String, 
        "region": String, 
        "city": String, 
        "locations": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "station": { 
        "associatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "effectiveStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "defaultStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "lastAssociatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
      },  
      "authorization": { 
        "roles": { 
          "id": String, 
          "name": String, 
        },  
        "permissions": [String], 
        "permissionPolicies": { 
          "id": String, 
          "domain": String, 
          "entityName": String, 
          "policyName": String, 
          "policyDescription": String, 
          "actionSetKey": String, 
          "allowConditions": Boolean, 
          "resourceConditionNode": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
          "namedResources": [String], 
          "resourceCondition": String, 
          "actionSet": [String], 
        },  
      },  
      "profileSkills": [String], 
      "locations": { 
        "id": String, 
        "floorplanId": String, 
        "coordinates": {String: Number}, 
        "notes": String, 
        "locationDefinition": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
      },  
      "groups": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "state": String, 
        "version": Number, 
        "type": String, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": User, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "selfUri": String, 
    },  
    "fromExternalContact": { 
      "id": String, 
      "firstName": String, 
      "middleName": String, 
      "lastName": String, 
      "salutation": String, 
      "title": String, 
      "workPhone": { 
        "display": String, 
        "extension": Number, 
        "acceptsSMS": Boolean, 
        "userInput": String, 
        "e164": String, 
        "countryCode": String, 
      },  
      "cellPhone": { 
        "display": String, 
        "extension": Number, 
        "acceptsSMS": Boolean, 
        "userInput": String, 
        "e164": String, 
        "countryCode": String, 
      },  
      "homePhone": { 
        "display": String, 
        "extension": Number, 
        "acceptsSMS": Boolean, 
        "userInput": String, 
        "e164": String, 
        "countryCode": String, 
      },  
      "otherPhone": { 
        "display": String, 
        "extension": Number, 
        "acceptsSMS": Boolean, 
        "userInput": String, 
        "e164": String, 
        "countryCode": String, 
      },  
      "workEmail": String, 
      "personalEmail": String, 
      "otherEmail": String, 
      "address": { 
        "address1": String, 
        "address2": String, 
        "city": String, 
        "state": String, 
        "postalCode": String, 
        "countryCode": String, 
      },  
      "twitterId": { 
        "id": String, 
        "name": String, 
        "screenName": String, 
        "verified": Boolean, 
        "profileUrl": String, 
      },  
      "lineId": { 
        "ids": { 
          "userId": String, 
        },  
        "displayName": String, 
      },  
      "facebookId": { 
        "ids": { 
          "scopedId": String, 
        },  
        "displayName": String, 
      },  
      "modifyDate": Date, 
      "createDate": Date, 
      "externalOrganization": { 
        "id": String, 
        "name": String, 
        "companyType": String, 
        "industry": String, 
        "primaryContactId": String, 
        "address": { 
          "address1": String, 
          "address2": String, 
          "city": String, 
          "state": String, 
          "postalCode": String, 
          "countryCode": String, 
        },  
        "phoneNumber": { 
          "display": String, 
          "extension": Number, 
          "acceptsSMS": Boolean, 
          "userInput": String, 
          "e164": String, 
          "countryCode": String, 
        },  
        "faxNumber": { 
          "display": String, 
          "extension": Number, 
          "acceptsSMS": Boolean, 
          "userInput": String, 
          "e164": String, 
          "countryCode": String, 
        },  
        "employeeCount": Number, 
        "revenue": Number, 
        "tags": [String], 
        "websites": [String], 
        "tickers": { 
          "symbol": String, 
          "exchange": String, 
        },  
        "twitterId": { 
          "id": String, 
          "name": String, 
          "screenName": String, 
          "verified": Boolean, 
          "profileUrl": String, 
        },  
        "externalSystemUrl": String, 
        "modifyDate": Date, 
        "createDate": Date, 
        "trustor": { 
          "id": String, 
          "enabled": Boolean, 
          "dateCreated": Date, 
          "createdBy": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": { 
              "id": String, 
              "name": String, 
              "division": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "chat": { 
                "jabberId": String, 
              },  
              "department": String, 
              "email": String, 
              "primaryContactInfo": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "mediaType": String, 
                "type": String, 
                "extension": String, 
              },  
              "state": String, 
              "title": String, 
              "username": String, 
              "manager": User, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "version": Number, 
              "routingStatus": { 
                "userId": String, 
                "status": String, 
                "startTime": Date, 
              },  
              "presence": { 
                "id": String, 
                "name": String, 
                "source": String, 
                "primary": Boolean, 
                "presenceDefinition": PresenceDefinition, 
                "message": String, 
                "modifiedDate": Date, 
                "selfUri": String, 
              },  
              "conversationSummary": { 
                "userId": String, 
                "call": MediaSummary, 
                "callback": MediaSummary, 
                "email": MediaSummary, 
                "message": MediaSummary, 
                "chat": MediaSummary, 
                "socialExpression": MediaSummary, 
                "video": MediaSummary, 
              },  
              "outOfOffice": { 
                "id": String, 
                "name": String, 
                "user": User, 
                "startDate": Date, 
                "endDate": Date, 
                "active": Boolean, 
                "indefinite": Boolean, 
                "selfUri": String, 
              },  
              "geolocation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "primary": Boolean, 
                "latitude": Number, 
                "longitude": Number, 
                "country": String, 
                "region": String, 
                "city": String, 
                "locations": [LocationDefinition], 
                "selfUri": String, 
              },  
              "station": { 
                "associatedStation": UserStation, 
                "effectiveStation": UserStation, 
                "defaultStation": UserStation, 
                "lastAssociatedStation": UserStation, 
              },  
              "authorization": { 
                "roles": [DomainRole], 
                "permissions": [String], 
                "permissionPolicies": [ResourcePermissionPolicy], 
              },  
              "profileSkills": [String], 
              "locations": { 
                "id": String, 
                "floorplanId": String, 
                "coordinates": {String: Number}, 
                "notes": String, 
                "locationDefinition": LocationDefinition, 
              },  
              "groups": { 
                "id": String, 
                "name": String, 
                "description": String, 
                "dateModified": Date, 
                "memberCount": Number, 
                "state": String, 
                "version": Number, 
                "type": String, 
                "images": [UserImage], 
                "addresses": [GroupContact], 
                "rulesVisible": Boolean, 
                "visibility": String, 
                "owners": [User], 
                "selfUri": String, 
              },  
              "skills": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "skillUri": String, 
                "selfUri": String, 
              },  
              "languages": { 
                "id": String, 
                "name": String, 
                "proficiency": Number, 
                "state": String, 
                "languageUri": String, 
                "selfUri": String, 
              },  
              "acdAutoAnswer": Boolean, 
              "selfUri": String, 
            },  
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "organization": { 
              "id": String, 
              "name": String, 
              "defaultLanguage": String, 
              "defaultCountryCode": String, 
              "thirdPartyOrgName": String, 
              "thirdPartyURI": String, 
              "domain": String, 
              "version": Number, 
              "state": String, 
              "defaultSiteId": String, 
              "supportURI": String, 
              "voicemailEnabled": Boolean, 
              "selfUri": String, 
              "features": {String: Boolean}, 
            },  
          },  
          "organization": { 
            "id": String, 
            "name": String, 
            "defaultLanguage": String, 
            "defaultCountryCode": String, 
            "thirdPartyOrgName": String, 
            "thirdPartyURI": String, 
            "domain": String, 
            "version": Number, 
            "state": String, 
            "defaultSiteId": String, 
            "supportURI": String, 
            "voicemailEnabled": Boolean, 
            "selfUri": String, 
            "features": {String: Boolean}, 
          },  
          "authorization": { 
            "permissions": [String], 
          },  
          "selfUri": String, 
        },  
        "externalDataSources": { 
          "platform": String, 
          "url": String, 
        },  
        "selfUri": String, 
      },  
      "surveyOptOut": Boolean, 
      "externalSystemUrl": String, 
      "externalDataSources": { 
        "platform": String, 
        "url": String, 
      },  
      "selfUri": String, 
    },  
    "to": String, 
    "timestamp": Date, 
    "id": String, 
    "messageText": String, 
  },  
  "fileState": String, 
  "restoreExpirationTime": Date, 
  "mediaUris": { 
    "mediaUri": String, 
    "waveformData": [Number], 
  },  
  "estimatedTranscodeTimeMs": Number, 
  "actualTranscodeTimeMs": Number, 
  "archiveDate": Date, 
  "archiveMedium": String, 
  "deleteDate": Date, 
  "maxAllowedRestorationsForOrg": Number, 
  "remainingRestorationsAllowedForOrg": Number, 
  "sessionId": String, 
  "users": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "chat": { 
      "jabberId": String, 
    },  
    "department": String, 
    "email": String, 
    "primaryContactInfo": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "state": String, 
    "title": String, 
    "username": String, 
    "manager": User, 
    "images": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "version": Number, 
    "routingStatus": { 
      "userId": String, 
      "status": String, 
      "startTime": Date, 
    },  
    "presence": { 
      "id": String, 
      "name": String, 
      "source": String, 
      "primary": Boolean, 
      "presenceDefinition": { 
        "id": String, 
        "systemPresence": String, 
        "selfUri": String, 
      },  
      "message": String, 
      "modifiedDate": Date, 
      "selfUri": String, 
    },  
    "conversationSummary": { 
      "userId": String, 
      "call": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "callback": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "email": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "message": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "chat": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "socialExpression": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "video": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
    },  
    "outOfOffice": { 
      "id": String, 
      "name": String, 
      "user": User, 
      "startDate": Date, 
      "endDate": Date, 
      "active": Boolean, 
      "indefinite": Boolean, 
      "selfUri": String, 
    },  
    "geolocation": { 
      "id": String, 
      "name": String, 
      "type": String, 
      "primary": Boolean, 
      "latitude": Number, 
      "longitude": Number, 
      "country": String, 
      "region": String, 
      "city": String, 
      "locations": { 
        "id": String, 
        "name": String, 
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "station": { 
      "associatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "effectiveStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "defaultStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "lastAssociatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
    },  
    "authorization": { 
      "roles": { 
        "id": String, 
        "name": String, 
      },  
      "permissions": [String], 
      "permissionPolicies": { 
        "id": String, 
        "domain": String, 
        "entityName": String, 
        "policyName": String, 
        "policyDescription": String, 
        "actionSetKey": String, 
        "allowConditions": Boolean, 
        "resourceConditionNode": { 
          "variableName": String, 
          "conjunction": String, 
          "operator": String, 
          "operands": { 
            "type": String, 
            "value": String, 
          },  
          "terms": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
        },  
        "namedResources": [String], 
        "resourceCondition": String, 
        "actionSet": [String], 
      },  
    },  
    "profileSkills": [String], 
    "locations": { 
      "id": String, 
      "floorplanId": String, 
      "coordinates": {String: Number}, 
      "notes": String, 
      "locationDefinition": { 
        "id": String, 
        "name": String, 
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
        "selfUri": String, 
      },  
    },  
    "groups": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "state": String, 
      "version": Number, 
      "type": String, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "selfUri": String, 
  },  
  "selfUri": String, 
}
~~~
</div>


### Example Usage

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



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyAnnotationExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#AnnotationExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

Annotation <a style="cursor: pointer" onclick="copyAnnotationExample()">Copy</a>

<div id="AnnotationExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "type": String, 
  "location": Number, 
  "durationMs": Number, 
  "absoluteLocation": Number, 
  "absoluteDurationMs": Number, 
  "recordingLocation": Number, 
  "recordingDurationMs": Number, 
  "user": { 
    "id": String, 
    "name": String, 
    "division": { 
      "id": String, 
      "name": String, 
      "selfUri": String, 
    },  
    "chat": { 
      "jabberId": String, 
    },  
    "department": String, 
    "email": String, 
    "primaryContactInfo": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "addresses": { 
      "address": String, 
      "display": String, 
      "mediaType": String, 
      "type": String, 
      "extension": String, 
    },  
    "state": String, 
    "title": String, 
    "username": String, 
    "manager": User, 
    "images": { 
      "resolution": String, 
      "imageUri": String, 
    },  
    "version": Number, 
    "routingStatus": { 
      "userId": String, 
      "status": String, 
      "startTime": Date, 
    },  
    "presence": { 
      "id": String, 
      "name": String, 
      "source": String, 
      "primary": Boolean, 
      "presenceDefinition": { 
        "id": String, 
        "systemPresence": String, 
        "selfUri": String, 
      },  
      "message": String, 
      "modifiedDate": Date, 
      "selfUri": String, 
    },  
    "conversationSummary": { 
      "userId": String, 
      "call": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "callback": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "email": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "message": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "chat": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "socialExpression": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
      "video": { 
        "contactCenter": { 
          "active": Number, 
          "acw": Number, 
        },  
        "enterprise": { 
          "active": Number, 
          "acw": Number, 
        },  
      },  
    },  
    "outOfOffice": { 
      "id": String, 
      "name": String, 
      "user": User, 
      "startDate": Date, 
      "endDate": Date, 
      "active": Boolean, 
      "indefinite": Boolean, 
      "selfUri": String, 
    },  
    "geolocation": { 
      "id": String, 
      "name": String, 
      "type": String, 
      "primary": Boolean, 
      "latitude": Number, 
      "longitude": Number, 
      "country": String, 
      "region": String, 
      "city": String, 
      "locations": { 
        "id": String, 
        "name": String, 
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
        "selfUri": String, 
      },  
      "selfUri": String, 
    },  
    "station": { 
      "associatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "effectiveStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "defaultStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
      "lastAssociatedStation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "associatedUser": User, 
        "associatedDate": Date, 
        "defaultUser": User, 
        "providerInfo": {String: String}, 
      },  
    },  
    "authorization": { 
      "roles": { 
        "id": String, 
        "name": String, 
      },  
      "permissions": [String], 
      "permissionPolicies": { 
        "id": String, 
        "domain": String, 
        "entityName": String, 
        "policyName": String, 
        "policyDescription": String, 
        "actionSetKey": String, 
        "allowConditions": Boolean, 
        "resourceConditionNode": { 
          "variableName": String, 
          "conjunction": String, 
          "operator": String, 
          "operands": { 
            "type": String, 
            "value": String, 
          },  
          "terms": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
        },  
        "namedResources": [String], 
        "resourceCondition": String, 
        "actionSet": [String], 
      },  
    },  
    "profileSkills": [String], 
    "locations": { 
      "id": String, 
      "floorplanId": String, 
      "coordinates": {String: Number}, 
      "notes": String, 
      "locationDefinition": { 
        "id": String, 
        "name": String, 
        "address": { 
          "city": String, 
          "country": String, 
          "countryName": String, 
          "state": String, 
          "street1": String, 
          "street2": String, 
          "zipcode": String, 
        },  
        "addressVerified": Boolean, 
        "emergencyNumber": { 
          "e164": String, 
          "number": String, 
          "type": String, 
        },  
        "state": String, 
        "version": Number, 
        "path": [String], 
        "selfUri": String, 
      },  
    },  
    "groups": { 
      "id": String, 
      "name": String, 
      "description": String, 
      "dateModified": Date, 
      "memberCount": Number, 
      "state": String, 
      "version": Number, 
      "type": String, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "type": String, 
        "mediaType": String, 
      },  
      "rulesVisible": Boolean, 
      "visibility": String, 
      "owners": User, 
      "selfUri": String, 
    },  
    "skills": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "skillUri": String, 
      "selfUri": String, 
    },  
    "languages": { 
      "id": String, 
      "name": String, 
      "proficiency": Number, 
      "state": String, 
      "languageUri": String, 
      "selfUri": String, 
    },  
    "acdAutoAnswer": Boolean, 
    "selfUri": String, 
  },  
  "description": String, 
  "keywordName": String, 
  "confidence": Number, 
  "keywordSetId": String, 
  "keywordSetName": String, 
  "utterance": String, 
  "timeBegin": String, 
  "timeEnd": String, 
  "keywordConfidenceThreshold": String, 
  "agentScoreModifier": String, 
  "customerScoreModifier": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

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

Requires ANY permissions: 

* recording:orphan:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyOrphanUpdateRequestExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#OrphanUpdateRequestExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

OrphanUpdateRequest <a style="cursor: pointer" onclick="copyOrphanUpdateRequestExample()">Copy</a>

<div id="OrphanUpdateRequestExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "archiveDate": Date, 
  "deleteDate": Date, 
  "conversationId": String, 
}
~~~
</div>


### Example Usage

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



Requires ANY permissions: 

* recording:encryptionKey:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyLocalEncryptionConfigurationExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#LocalEncryptionConfigurationExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

LocalEncryptionConfiguration <a style="cursor: pointer" onclick="copyLocalEncryptionConfigurationExample()">Copy</a>

<div id="LocalEncryptionConfigurationExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "url": String, 
  "apiId": String, 
  "apiKey": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

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



Requires ANY permissions: 

* recording:retentionPolicy:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyPolicyExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#PolicyExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

Policy <a style="cursor: pointer" onclick="copyPolicyExample()">Copy</a>

<div id="PolicyExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "modifiedDate": Date, 
  "createdDate": Date, 
  "order": Number, 
  "description": String, 
  "enabled": Boolean, 
  "mediaPolicies": { 
    "callPolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
        "directions": [String], 
        "duration": { 
          "durationTarget": String, 
          "durationOperator": String, 
          "durationRange": String, 
        },  
      },  
    },  
    "chatPolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
        "duration": { 
          "durationTarget": String, 
          "durationOperator": String, 
          "durationRange": String, 
        },  
      },  
    },  
    "emailPolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
      },  
    },  
    "messagePolicy": { 
      "actions": { 
        "retainRecording": Boolean, 
        "deleteRecording": Boolean, 
        "alwaysDelete": Boolean, 
        "assignEvaluations": { 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "user": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
        },  
        "assignMeteredEvaluations": { 
          "evaluationContextId": String, 
          "evaluators": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "maxNumberEvaluations": Number, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "assignToActiveUser": Boolean, 
          "timeInterval": { 
            "days": Number, 
            "hours": Number, 
          },  
        },  
        "assignCalibrations": { 
          "calibrator": { 
            "id": String, 
            "name": String, 
            "division": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "chat": { 
              "jabberId": String, 
            },  
            "department": String, 
            "email": String, 
            "primaryContactInfo": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "mediaType": String, 
              "type": String, 
              "extension": String, 
            },  
            "state": String, 
            "title": String, 
            "username": String, 
            "manager": User, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "version": Number, 
            "routingStatus": { 
              "userId": String, 
              "status": String, 
              "startTime": Date, 
            },  
            "presence": { 
              "id": String, 
              "name": String, 
              "source": String, 
              "primary": Boolean, 
              "presenceDefinition": { 
                "id": String, 
                "systemPresence": String, 
                "selfUri": String, 
              },  
              "message": String, 
              "modifiedDate": Date, 
              "selfUri": String, 
            },  
            "conversationSummary": { 
              "userId": String, 
              "call": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "callback": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "email": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "message": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "chat": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "socialExpression": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
              "video": { 
                "contactCenter": MediaSummaryDetail, 
                "enterprise": MediaSummaryDetail, 
              },  
            },  
            "outOfOffice": { 
              "id": String, 
              "name": String, 
              "user": User, 
              "startDate": Date, 
              "endDate": Date, 
              "active": Boolean, 
              "indefinite": Boolean, 
              "selfUri": String, 
            },  
            "geolocation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "primary": Boolean, 
              "latitude": Number, 
              "longitude": Number, 
              "country": String, 
              "region": String, 
              "city": String, 
              "locations": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
              "selfUri": String, 
            },  
            "station": { 
              "associatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "effectiveStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "defaultStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
              "lastAssociatedStation": { 
                "id": String, 
                "name": String, 
                "type": String, 
                "associatedUser": User, 
                "associatedDate": Date, 
                "defaultUser": User, 
                "providerInfo": {String: String}, 
              },  
            },  
            "authorization": { 
              "roles": { 
                "id": String, 
                "name": String, 
              },  
              "permissions": [String], 
              "permissionPolicies": { 
                "id": String, 
                "domain": String, 
                "entityName": String, 
                "policyName": String, 
                "policyDescription": String, 
                "actionSetKey": String, 
                "allowConditions": Boolean, 
                "resourceConditionNode": ResourceConditionNode, 
                "namedResources": [String], 
                "resourceCondition": String, 
                "actionSet": [String], 
              },  
            },  
            "profileSkills": [String], 
            "locations": { 
              "id": String, 
              "floorplanId": String, 
              "coordinates": {String: Number}, 
              "notes": String, 
              "locationDefinition": { 
                "id": String, 
                "name": String, 
                "address": LocationAddress, 
                "addressVerified": Boolean, 
                "emergencyNumber": LocationEmergencyNumber, 
                "state": String, 
                "version": Number, 
                "path": [String], 
                "selfUri": String, 
              },  
            },  
            "groups": { 
              "id": String, 
              "name": String, 
              "description": String, 
              "dateModified": Date, 
              "memberCount": Number, 
              "state": String, 
              "version": Number, 
              "type": String, 
              "images": { 
                "resolution": String, 
                "imageUri": String, 
              },  
              "addresses": { 
                "address": String, 
                "display": String, 
                "type": String, 
                "mediaType": String, 
              },  
              "rulesVisible": Boolean, 
              "visibility": String, 
              "owners": User, 
              "selfUri": String, 
            },  
            "skills": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "skillUri": String, 
              "selfUri": String, 
            },  
            "languages": { 
              "id": String, 
              "name": String, 
              "proficiency": Number, 
              "state": String, 
              "languageUri": String, 
              "selfUri": String, 
            },  
            "acdAutoAnswer": Boolean, 
            "selfUri": String, 
          },  
          "evaluators": User, 
          "evaluationForm": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "expertEvaluator": User, 
        },  
        "assignSurveys": { 
          "surveyForm": { 
            "id": String, 
            "name": String, 
            "contextId": String, 
            "selfUri": String, 
          },  
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "inviteTimeInterval": String, 
          "sendingUser": String, 
          "sendingDomain": String, 
        },  
        "retentionDuration": { 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "initiateScreenRecording": { 
          "recordACW": Boolean, 
          "archiveRetention": { 
            "days": Number, 
            "storageMedium": String, 
          },  
          "deleteRetention": { 
            "days": Number, 
          },  
        },  
        "mediaTranscriptions": { 
          "displayName": String, 
          "transcriptionProvider": String, 
          "integrationId": String, 
        },  
      },  
      "conditions": { 
        "forUsers": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "chat": { 
            "jabberId": String, 
          },  
          "department": String, 
          "email": String, 
          "primaryContactInfo": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "mediaType": String, 
            "type": String, 
            "extension": String, 
          },  
          "state": String, 
          "title": String, 
          "username": String, 
          "manager": User, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "version": Number, 
          "routingStatus": { 
            "userId": String, 
            "status": String, 
            "startTime": Date, 
          },  
          "presence": { 
            "id": String, 
            "name": String, 
            "source": String, 
            "primary": Boolean, 
            "presenceDefinition": { 
              "id": String, 
              "systemPresence": String, 
              "selfUri": String, 
            },  
            "message": String, 
            "modifiedDate": Date, 
            "selfUri": String, 
          },  
          "conversationSummary": { 
            "userId": String, 
            "call": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "callback": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "email": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "message": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "chat": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "socialExpression": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
            "video": { 
              "contactCenter": { 
                "active": Number, 
                "acw": Number, 
              },  
              "enterprise": { 
                "active": Number, 
                "acw": Number, 
              },  
            },  
          },  
          "outOfOffice": { 
            "id": String, 
            "name": String, 
            "user": User, 
            "startDate": Date, 
            "endDate": Date, 
            "active": Boolean, 
            "indefinite": Boolean, 
            "selfUri": String, 
          },  
          "geolocation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "primary": Boolean, 
            "latitude": Number, 
            "longitude": Number, 
            "country": String, 
            "region": String, 
            "city": String, 
            "locations": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "station": { 
            "associatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "effectiveStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "defaultStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
            "lastAssociatedStation": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "associatedUser": User, 
              "associatedDate": Date, 
              "defaultUser": User, 
              "providerInfo": {String: String}, 
            },  
          },  
          "authorization": { 
            "roles": { 
              "id": String, 
              "name": String, 
            },  
            "permissions": [String], 
            "permissionPolicies": { 
              "id": String, 
              "domain": String, 
              "entityName": String, 
              "policyName": String, 
              "policyDescription": String, 
              "actionSetKey": String, 
              "allowConditions": Boolean, 
              "resourceConditionNode": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
              "namedResources": [String], 
              "resourceCondition": String, 
              "actionSet": [String], 
            },  
          },  
          "profileSkills": [String], 
          "locations": { 
            "id": String, 
            "floorplanId": String, 
            "coordinates": {String: Number}, 
            "notes": String, 
            "locationDefinition": { 
              "id": String, 
              "name": String, 
              "address": { 
                "city": String, 
                "country": String, 
                "countryName": String, 
                "state": String, 
                "street1": String, 
                "street2": String, 
                "zipcode": String, 
              },  
              "addressVerified": Boolean, 
              "emergencyNumber": { 
                "e164": String, 
                "number": String, 
                "type": String, 
              },  
              "state": String, 
              "version": Number, 
              "path": [String], 
              "selfUri": String, 
            },  
          },  
          "groups": { 
            "id": String, 
            "name": String, 
            "description": String, 
            "dateModified": Date, 
            "memberCount": Number, 
            "state": String, 
            "version": Number, 
            "type": String, 
            "images": { 
              "resolution": String, 
              "imageUri": String, 
            },  
            "addresses": { 
              "address": String, 
              "display": String, 
              "type": String, 
              "mediaType": String, 
            },  
            "rulesVisible": Boolean, 
            "visibility": String, 
            "owners": User, 
            "selfUri": String, 
          },  
          "skills": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "skillUri": String, 
            "selfUri": String, 
          },  
          "languages": { 
            "id": String, 
            "name": String, 
            "proficiency": Number, 
            "state": String, 
            "languageUri": String, 
            "selfUri": String, 
          },  
          "acdAutoAnswer": Boolean, 
          "selfUri": String, 
        },  
        "dateRanges": [String], 
        "forQueues": { 
          "id": String, 
          "name": String, 
          "division": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "description": String, 
          "version": Number, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "state": String, 
          "modifiedByApp": String, 
          "createdByApp": String, 
          "mediaSettings": { 
            "alertingTimeoutSeconds": Number, 
            "serviceLevel": { 
              "percentage": Number, 
              "durationMs": Number, 
            },  
          },  
          "bullseye": { 
            "rings": { 
              "expansionCriteria": { 
                "type": String, 
                "threshold": Number, 
              },  
              "actions": { 
                "skillsToRemove": [SkillsToRemove], 
              },  
            },  
          },  
          "acwSettings": { 
            "wrapupPrompt": String, 
            "timeoutMs": Number, 
          },  
          "skillEvaluationMethod": String, 
          "queueFlow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "whisperPrompt": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "autoAnswerOnly": Boolean, 
          "callingPartyName": String, 
          "callingPartyNumber": String, 
          "defaultScripts": { 
            "id": String, 
            "name": String, 
            "versionId": String, 
            "createdDate": Date, 
            "modifiedDate": Date, 
            "publishedDate": Date, 
            "versionDate": Date, 
            "startPageId": String, 
            "startPageName": String, 
            "features": Object, 
            "variables": Object, 
            "customActions": Object, 
            "pages": { 
              "id": String, 
              "name": String, 
              "versionId": String, 
              "createdDate": Date, 
              "modifiedDate": Date, 
              "rootContainer": {String: Object}, 
              "properties": {String: Object}, 
              "selfUri": String, 
            },  
            "selfUri": String, 
          },  
          "outboundEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "memberCount": Number, 
          "selfUri": String, 
        },  
        "wrapupCodes": { 
          "id": String, 
          "name": String, 
          "dateCreated": Date, 
          "dateModified": Date, 
          "modifiedBy": String, 
          "createdBy": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "dateModified": Date, 
          "state": String, 
          "version": String, 
          "selfUri": String, 
        },  
        "timeAllowed": { 
          "timeSlots": { 
            "startTime": String, 
            "stopTime": String, 
            "day": Number, 
          },  
          "timeZoneId": String, 
          "empty": Boolean, 
        },  
      },  
    },  
  },  
  "conditions": { 
    "forUsers": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "chat": { 
        "jabberId": String, 
      },  
      "department": String, 
      "email": String, 
      "primaryContactInfo": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "addresses": { 
        "address": String, 
        "display": String, 
        "mediaType": String, 
        "type": String, 
        "extension": String, 
      },  
      "state": String, 
      "title": String, 
      "username": String, 
      "manager": User, 
      "images": { 
        "resolution": String, 
        "imageUri": String, 
      },  
      "version": Number, 
      "routingStatus": { 
        "userId": String, 
        "status": String, 
        "startTime": Date, 
      },  
      "presence": { 
        "id": String, 
        "name": String, 
        "source": String, 
        "primary": Boolean, 
        "presenceDefinition": { 
          "id": String, 
          "systemPresence": String, 
          "selfUri": String, 
        },  
        "message": String, 
        "modifiedDate": Date, 
        "selfUri": String, 
      },  
      "conversationSummary": { 
        "userId": String, 
        "call": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "callback": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "email": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "message": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "chat": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "socialExpression": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
        "video": { 
          "contactCenter": { 
            "active": Number, 
            "acw": Number, 
          },  
          "enterprise": { 
            "active": Number, 
            "acw": Number, 
          },  
        },  
      },  
      "outOfOffice": { 
        "id": String, 
        "name": String, 
        "user": User, 
        "startDate": Date, 
        "endDate": Date, 
        "active": Boolean, 
        "indefinite": Boolean, 
        "selfUri": String, 
      },  
      "geolocation": { 
        "id": String, 
        "name": String, 
        "type": String, 
        "primary": Boolean, 
        "latitude": Number, 
        "longitude": Number, 
        "country": String, 
        "region": String, 
        "city": String, 
        "locations": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "station": { 
        "associatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "effectiveStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "defaultStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
        "lastAssociatedStation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "associatedUser": User, 
          "associatedDate": Date, 
          "defaultUser": User, 
          "providerInfo": {String: String}, 
        },  
      },  
      "authorization": { 
        "roles": { 
          "id": String, 
          "name": String, 
        },  
        "permissions": [String], 
        "permissionPolicies": { 
          "id": String, 
          "domain": String, 
          "entityName": String, 
          "policyName": String, 
          "policyDescription": String, 
          "actionSetKey": String, 
          "allowConditions": Boolean, 
          "resourceConditionNode": { 
            "variableName": String, 
            "conjunction": String, 
            "operator": String, 
            "operands": { 
              "type": String, 
              "value": String, 
            },  
            "terms": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
          },  
          "namedResources": [String], 
          "resourceCondition": String, 
          "actionSet": [String], 
        },  
      },  
      "profileSkills": [String], 
      "locations": { 
        "id": String, 
        "floorplanId": String, 
        "coordinates": {String: Number}, 
        "notes": String, 
        "locationDefinition": { 
          "id": String, 
          "name": String, 
          "address": { 
            "city": String, 
            "country": String, 
            "countryName": String, 
            "state": String, 
            "street1": String, 
            "street2": String, 
            "zipcode": String, 
          },  
          "addressVerified": Boolean, 
          "emergencyNumber": { 
            "e164": String, 
            "number": String, 
            "type": String, 
          },  
          "state": String, 
          "version": Number, 
          "path": [String], 
          "selfUri": String, 
        },  
      },  
      "groups": { 
        "id": String, 
        "name": String, 
        "description": String, 
        "dateModified": Date, 
        "memberCount": Number, 
        "state": String, 
        "version": Number, 
        "type": String, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "type": String, 
          "mediaType": String, 
        },  
        "rulesVisible": Boolean, 
        "visibility": String, 
        "owners": User, 
        "selfUri": String, 
      },  
      "skills": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "skillUri": String, 
        "selfUri": String, 
      },  
      "languages": { 
        "id": String, 
        "name": String, 
        "proficiency": Number, 
        "state": String, 
        "languageUri": String, 
        "selfUri": String, 
      },  
      "acdAutoAnswer": Boolean, 
      "selfUri": String, 
    },  
    "directions": [String], 
    "dateRanges": [String], 
    "mediaTypes": [String], 
    "forQueues": { 
      "id": String, 
      "name": String, 
      "division": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "description": String, 
      "version": Number, 
      "dateCreated": Date, 
      "dateModified": Date, 
      "modifiedBy": String, 
      "createdBy": String, 
      "state": String, 
      "modifiedByApp": String, 
      "createdByApp": String, 
      "mediaSettings": { 
        "alertingTimeoutSeconds": Number, 
        "serviceLevel": { 
          "percentage": Number, 
          "durationMs": Number, 
        },  
      },  
      "bullseye": { 
        "rings": { 
          "expansionCriteria": { 
            "type": String, 
            "threshold": Number, 
          },  
          "actions": { 
            "skillsToRemove": { 
              "name": String, 
              "id": String, 
              "selfUri": String, 
            },  
          },  
        },  
      },  
      "acwSettings": { 
        "wrapupPrompt": String, 
        "timeoutMs": Number, 
      },  
      "skillEvaluationMethod": String, 
      "queueFlow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "whisperPrompt": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "autoAnswerOnly": Boolean, 
      "callingPartyName": String, 
      "callingPartyNumber": String, 
      "defaultScripts": { 
        "id": String, 
        "name": String, 
        "versionId": String, 
        "createdDate": Date, 
        "modifiedDate": Date, 
        "publishedDate": Date, 
        "versionDate": Date, 
        "startPageId": String, 
        "startPageName": String, 
        "features": Object, 
        "variables": Object, 
        "customActions": Object, 
        "pages": { 
          "id": String, 
          "name": String, 
          "versionId": String, 
          "createdDate": Date, 
          "modifiedDate": Date, 
          "rootContainer": {String: Object}, 
          "properties": {String: Object}, 
          "selfUri": String, 
        },  
        "selfUri": String, 
      },  
      "outboundEmailAddress": { 
        "domain": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "route": { 
          "id": String, 
          "name": String, 
          "pattern": String, 
          "queue": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "priority": Number, 
          "skills": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "language": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "fromName": String, 
          "fromEmail": String, 
          "flow": { 
            "id": String, 
            "name": String, 
            "selfUri": String, 
          },  
          "replyEmailAddress": { 
            "domain": { 
              "id": String, 
              "name": String, 
              "selfUri": String, 
            },  
            "route": { 
              "id": String, 
              "name": String, 
              "pattern": String, 
              "queue": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "priority": Number, 
              "skills": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "language": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "fromName": String, 
              "fromEmail": String, 
              "flow": { 
                "id": String, 
                "name": String, 
                "selfUri": String, 
              },  
              "replyEmailAddress": { 
                "domain": UriReference, 
                "route": InboundRoute, 
              },  
              "selfUri": String, 
            },  
          },  
          "selfUri": String, 
        },  
      },  
      "memberCount": Number, 
      "selfUri": String, 
    },  
    "duration": { 
      "durationTarget": String, 
      "durationOperator": String, 
      "durationRange": String, 
    },  
    "wrapupCodes": { 
      "id": String, 
      "name": String, 
      "dateCreated": Date, 
      "dateModified": Date, 
      "modifiedBy": String, 
      "createdBy": String, 
      "selfUri": String, 
    },  
    "timeAllowed": { 
      "timeSlots": { 
        "startTime": String, 
        "stopTime": String, 
        "day": Number, 
      },  
      "timeZoneId": String, 
      "empty": Boolean, 
    },  
  },  
  "actions": { 
    "retainRecording": Boolean, 
    "deleteRecording": Boolean, 
    "alwaysDelete": Boolean, 
    "assignEvaluations": { 
      "evaluationForm": { 
        "id": String, 
        "name": String, 
        "modifiedDate": Date, 
        "published": Boolean, 
        "contextId": String, 
        "questionGroups": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "defaultAnswersToHighest": Boolean, 
          "defaultAnswersToNA": Boolean, 
          "naEnabled": Boolean, 
          "weight": Number, 
          "manualWeight": Boolean, 
          "questions": { 
            "id": String, 
            "text": String, 
            "helpText": String, 
            "type": String, 
            "naEnabled": Boolean, 
            "commentsRequired": Boolean, 
            "visibilityCondition": { 
              "combiningOperation": String, 
              "predicates": [Object], 
            },  
            "answerOptions": { 
              "id": String, 
              "text": String, 
              "value": Number, 
            },  
            "maxResponseCharacters": Number, 
            "explanationPrompt": String, 
            "isKill": Boolean, 
            "isCritical": Boolean, 
          },  
          "visibilityCondition": { 
            "combiningOperation": String, 
            "predicates": [Object], 
          },  
        },  
        "publishedVersions": { 
          "entities": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "pageSize": Number, 
          "pageNumber": Number, 
          "total": Number, 
          "selfUri": String, 
          "firstUri": String, 
          "nextUri": String, 
          "lastUri": String, 
          "previousUri": String, 
          "pageCount": Number, 
        },  
        "selfUri": String, 
      },  
      "user": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "chat": { 
          "jabberId": String, 
        },  
        "department": String, 
        "email": String, 
        "primaryContactInfo": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": User, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "routingStatus": { 
          "userId": String, 
          "status": String, 
          "startTime": Date, 
        },  
        "presence": { 
          "id": String, 
          "name": String, 
          "source": String, 
          "primary": Boolean, 
          "presenceDefinition": { 
            "id": String, 
            "systemPresence": String, 
            "selfUri": String, 
          },  
          "message": String, 
          "modifiedDate": Date, 
          "selfUri": String, 
        },  
        "conversationSummary": { 
          "userId": String, 
          "call": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "callback": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "email": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "message": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "chat": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "socialExpression": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "video": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
        },  
        "outOfOffice": { 
          "id": String, 
          "name": String, 
          "user": User, 
          "startDate": Date, 
          "endDate": Date, 
          "active": Boolean, 
          "indefinite": Boolean, 
          "selfUri": String, 
        },  
        "geolocation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "primary": Boolean, 
          "latitude": Number, 
          "longitude": Number, 
          "country": String, 
          "region": String, 
          "city": String, 
          "locations": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "station": { 
          "associatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "effectiveStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "defaultStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "lastAssociatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
        },  
        "authorization": { 
          "roles": { 
            "id": String, 
            "name": String, 
          },  
          "permissions": [String], 
          "permissionPolicies": { 
            "id": String, 
            "domain": String, 
            "entityName": String, 
            "policyName": String, 
            "policyDescription": String, 
            "actionSetKey": String, 
            "allowConditions": Boolean, 
            "resourceConditionNode": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
            "namedResources": [String], 
            "resourceCondition": String, 
            "actionSet": [String], 
          },  
        },  
        "profileSkills": [String], 
        "locations": { 
          "id": String, 
          "floorplanId": String, 
          "coordinates": {String: Number}, 
          "notes": String, 
          "locationDefinition": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
        },  
        "groups": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "state": String, 
          "version": Number, 
          "type": String, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
    },  
    "assignMeteredEvaluations": { 
      "evaluationContextId": String, 
      "evaluators": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "chat": { 
          "jabberId": String, 
        },  
        "department": String, 
        "email": String, 
        "primaryContactInfo": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": User, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "routingStatus": { 
          "userId": String, 
          "status": String, 
          "startTime": Date, 
        },  
        "presence": { 
          "id": String, 
          "name": String, 
          "source": String, 
          "primary": Boolean, 
          "presenceDefinition": { 
            "id": String, 
            "systemPresence": String, 
            "selfUri": String, 
          },  
          "message": String, 
          "modifiedDate": Date, 
          "selfUri": String, 
        },  
        "conversationSummary": { 
          "userId": String, 
          "call": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "callback": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "email": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "message": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "chat": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "socialExpression": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "video": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
        },  
        "outOfOffice": { 
          "id": String, 
          "name": String, 
          "user": User, 
          "startDate": Date, 
          "endDate": Date, 
          "active": Boolean, 
          "indefinite": Boolean, 
          "selfUri": String, 
        },  
        "geolocation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "primary": Boolean, 
          "latitude": Number, 
          "longitude": Number, 
          "country": String, 
          "region": String, 
          "city": String, 
          "locations": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "station": { 
          "associatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "effectiveStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "defaultStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "lastAssociatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
        },  
        "authorization": { 
          "roles": { 
            "id": String, 
            "name": String, 
          },  
          "permissions": [String], 
          "permissionPolicies": { 
            "id": String, 
            "domain": String, 
            "entityName": String, 
            "policyName": String, 
            "policyDescription": String, 
            "actionSetKey": String, 
            "allowConditions": Boolean, 
            "resourceConditionNode": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
            "namedResources": [String], 
            "resourceCondition": String, 
            "actionSet": [String], 
          },  
        },  
        "profileSkills": [String], 
        "locations": { 
          "id": String, 
          "floorplanId": String, 
          "coordinates": {String: Number}, 
          "notes": String, 
          "locationDefinition": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
        },  
        "groups": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "state": String, 
          "version": Number, 
          "type": String, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
      "maxNumberEvaluations": Number, 
      "evaluationForm": { 
        "id": String, 
        "name": String, 
        "modifiedDate": Date, 
        "published": Boolean, 
        "contextId": String, 
        "questionGroups": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "defaultAnswersToHighest": Boolean, 
          "defaultAnswersToNA": Boolean, 
          "naEnabled": Boolean, 
          "weight": Number, 
          "manualWeight": Boolean, 
          "questions": { 
            "id": String, 
            "text": String, 
            "helpText": String, 
            "type": String, 
            "naEnabled": Boolean, 
            "commentsRequired": Boolean, 
            "visibilityCondition": { 
              "combiningOperation": String, 
              "predicates": [Object], 
            },  
            "answerOptions": { 
              "id": String, 
              "text": String, 
              "value": Number, 
            },  
            "maxResponseCharacters": Number, 
            "explanationPrompt": String, 
            "isKill": Boolean, 
            "isCritical": Boolean, 
          },  
          "visibilityCondition": { 
            "combiningOperation": String, 
            "predicates": [Object], 
          },  
        },  
        "publishedVersions": { 
          "entities": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "pageSize": Number, 
          "pageNumber": Number, 
          "total": Number, 
          "selfUri": String, 
          "firstUri": String, 
          "nextUri": String, 
          "lastUri": String, 
          "previousUri": String, 
          "pageCount": Number, 
        },  
        "selfUri": String, 
      },  
      "assignToActiveUser": Boolean, 
      "timeInterval": { 
        "days": Number, 
        "hours": Number, 
      },  
    },  
    "assignCalibrations": { 
      "calibrator": { 
        "id": String, 
        "name": String, 
        "division": { 
          "id": String, 
          "name": String, 
          "selfUri": String, 
        },  
        "chat": { 
          "jabberId": String, 
        },  
        "department": String, 
        "email": String, 
        "primaryContactInfo": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "addresses": { 
          "address": String, 
          "display": String, 
          "mediaType": String, 
          "type": String, 
          "extension": String, 
        },  
        "state": String, 
        "title": String, 
        "username": String, 
        "manager": User, 
        "images": { 
          "resolution": String, 
          "imageUri": String, 
        },  
        "version": Number, 
        "routingStatus": { 
          "userId": String, 
          "status": String, 
          "startTime": Date, 
        },  
        "presence": { 
          "id": String, 
          "name": String, 
          "source": String, 
          "primary": Boolean, 
          "presenceDefinition": { 
            "id": String, 
            "systemPresence": String, 
            "selfUri": String, 
          },  
          "message": String, 
          "modifiedDate": Date, 
          "selfUri": String, 
        },  
        "conversationSummary": { 
          "userId": String, 
          "call": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "callback": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "email": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "message": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "chat": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "socialExpression": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
          "video": { 
            "contactCenter": { 
              "active": Number, 
              "acw": Number, 
            },  
            "enterprise": { 
              "active": Number, 
              "acw": Number, 
            },  
          },  
        },  
        "outOfOffice": { 
          "id": String, 
          "name": String, 
          "user": User, 
          "startDate": Date, 
          "endDate": Date, 
          "active": Boolean, 
          "indefinite": Boolean, 
          "selfUri": String, 
        },  
        "geolocation": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "primary": Boolean, 
          "latitude": Number, 
          "longitude": Number, 
          "country": String, 
          "region": String, 
          "city": String, 
          "locations": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
          "selfUri": String, 
        },  
        "station": { 
          "associatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "effectiveStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "defaultStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
          "lastAssociatedStation": { 
            "id": String, 
            "name": String, 
            "type": String, 
            "associatedUser": User, 
            "associatedDate": Date, 
            "defaultUser": User, 
            "providerInfo": {String: String}, 
          },  
        },  
        "authorization": { 
          "roles": { 
            "id": String, 
            "name": String, 
          },  
          "permissions": [String], 
          "permissionPolicies": { 
            "id": String, 
            "domain": String, 
            "entityName": String, 
            "policyName": String, 
            "policyDescription": String, 
            "actionSetKey": String, 
            "allowConditions": Boolean, 
            "resourceConditionNode": { 
              "variableName": String, 
              "conjunction": String, 
              "operator": String, 
              "operands": { 
                "type": String, 
                "value": String, 
              },  
              "terms": { 
                "variableName": String, 
                "conjunction": String, 
                "operator": String, 
                "operands": [ResourceConditionValue], 
                "terms": [ResourceConditionNode], 
              },  
            },  
            "namedResources": [String], 
            "resourceCondition": String, 
            "actionSet": [String], 
          },  
        },  
        "profileSkills": [String], 
        "locations": { 
          "id": String, 
          "floorplanId": String, 
          "coordinates": {String: Number}, 
          "notes": String, 
          "locationDefinition": { 
            "id": String, 
            "name": String, 
            "address": { 
              "city": String, 
              "country": String, 
              "countryName": String, 
              "state": String, 
              "street1": String, 
              "street2": String, 
              "zipcode": String, 
            },  
            "addressVerified": Boolean, 
            "emergencyNumber": { 
              "e164": String, 
              "number": String, 
              "type": String, 
            },  
            "state": String, 
            "version": Number, 
            "path": [String], 
            "selfUri": String, 
          },  
        },  
        "groups": { 
          "id": String, 
          "name": String, 
          "description": String, 
          "dateModified": Date, 
          "memberCount": Number, 
          "state": String, 
          "version": Number, 
          "type": String, 
          "images": { 
            "resolution": String, 
            "imageUri": String, 
          },  
          "addresses": { 
            "address": String, 
            "display": String, 
            "type": String, 
            "mediaType": String, 
          },  
          "rulesVisible": Boolean, 
          "visibility": String, 
          "owners": User, 
          "selfUri": String, 
        },  
        "skills": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "skillUri": String, 
          "selfUri": String, 
        },  
        "languages": { 
          "id": String, 
          "name": String, 
          "proficiency": Number, 
          "state": String, 
          "languageUri": String, 
          "selfUri": String, 
        },  
        "acdAutoAnswer": Boolean, 
        "selfUri": String, 
      },  
      "evaluators": User, 
      "evaluationForm": { 
        "id": String, 
        "name": String, 
        "modifiedDate": Date, 
        "published": Boolean, 
        "contextId": String, 
        "questionGroups": { 
          "id": String, 
          "name": String, 
          "type": String, 
          "defaultAnswersToHighest": Boolean, 
          "defaultAnswersToNA": Boolean, 
          "naEnabled": Boolean, 
          "weight": Number, 
          "manualWeight": Boolean, 
          "questions": { 
            "id": String, 
            "text": String, 
            "helpText": String, 
            "type": String, 
            "naEnabled": Boolean, 
            "commentsRequired": Boolean, 
            "visibilityCondition": { 
              "combiningOperation": String, 
              "predicates": [Object], 
            },  
            "answerOptions": { 
              "id": String, 
              "text": String, 
              "value": Number, 
            },  
            "maxResponseCharacters": Number, 
            "explanationPrompt": String, 
            "isKill": Boolean, 
            "isCritical": Boolean, 
          },  
          "visibilityCondition": { 
            "combiningOperation": String, 
            "predicates": [Object], 
          },  
        },  
        "publishedVersions": { 
          "entities": { 
            "id": String, 
            "name": String, 
            "modifiedDate": Date, 
            "published": Boolean, 
            "contextId": String, 
            "questionGroups": { 
              "id": String, 
              "name": String, 
              "type": String, 
              "defaultAnswersToHighest": Boolean, 
              "defaultAnswersToNA": Boolean, 
              "naEnabled": Boolean, 
              "weight": Number, 
              "manualWeight": Boolean, 
              "questions": { 
                "id": String, 
                "text": String, 
                "helpText": String, 
                "type": String, 
                "naEnabled": Boolean, 
                "commentsRequired": Boolean, 
                "visibilityCondition": VisibilityCondition, 
                "answerOptions": [AnswerOption], 
                "maxResponseCharacters": Number, 
                "explanationPrompt": String, 
                "isKill": Boolean, 
                "isCritical": Boolean, 
              },  
              "visibilityCondition": { 
                "combiningOperation": String, 
                "predicates": [Object], 
              },  
            },  
            "publishedVersions": { 
              "entities": { 
                "id": String, 
                "name": String, 
                "modifiedDate": Date, 
                "published": Boolean, 
                "contextId": String, 
                "questionGroups": [QuestionGroup], 
                "publishedVersions": DomainEntityListingEvaluationForm, 
                "selfUri": String, 
              },  
              "pageSize": Number, 
              "pageNumber": Number, 
              "total": Number, 
              "selfUri": String, 
              "firstUri": String, 
              "nextUri": String, 
              "lastUri": String, 
              "previousUri": String, 
              "pageCount": Number, 
            },  
            "selfUri": String, 
          },  
          "pageSize": Number, 
          "pageNumber": Number, 
          "total": Number, 
          "selfUri": String, 
          "firstUri": String, 
          "nextUri": String, 
          "lastUri": String, 
          "previousUri": String, 
          "pageCount": Number, 
        },  
        "selfUri": String, 
      },  
      "expertEvaluator": User, 
    },  
    "assignSurveys": { 
      "surveyForm": { 
        "id": String, 
        "name": String, 
        "contextId": String, 
        "selfUri": String, 
      },  
      "flow": { 
        "id": String, 
        "name": String, 
        "selfUri": String, 
      },  
      "inviteTimeInterval": String, 
      "sendingUser": String, 
      "sendingDomain": String, 
    },  
    "retentionDuration": { 
      "archiveRetention": { 
        "days": Number, 
        "storageMedium": String, 
      },  
      "deleteRetention": { 
        "days": Number, 
      },  
    },  
    "initiateScreenRecording": { 
      "recordACW": Boolean, 
      "archiveRetention": { 
        "days": Number, 
        "storageMedium": String, 
      },  
      "deleteRetention": { 
        "days": Number, 
      },  
    },  
    "mediaTranscriptions": { 
      "displayName": String, 
      "transcriptionProvider": String, 
      "integrationId": String, 
    },  
  },  
  "policyErrors": { 
    "policyErrorMessages": { 
      "statusCode": Number, 
      "userMessage": Object, 
      "userParamsMessage": String, 
      "errorCode": String, 
      "correlationId": String, 
      "userParams": { 
        "key": String, 
        "value": String, 
      },  
      "insertDate": Date, 
    },  
  },  
  "selfUri": String, 
}
~~~
</div>


### Example Usage

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



Requires ANY permissions: 

* recording:encryptionKey:edit


### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyKeyRotationScheduleExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#KeyRotationScheduleExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

KeyRotationSchedule <a style="cursor: pointer" onclick="copyKeyRotationScheduleExample()">Copy</a>

<div id="KeyRotationScheduleExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "id": String, 
  "name": String, 
  "period": String, 
  "selfUri": String, 
}
~~~
</div>


### Example Usage

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



Requires NO permissions: 



### Request Body Schema

{::options parse_block_html="true" /}

<script type="text/javascript">
	function copyRecordingSettingsExample() {
		var $temp = $("<textarea>");
		$("body").append($temp);
		$temp.val($('#RecordingSettingsExample').text()).select();
		document.execCommand("copy");
		$temp.remove();
	}
</script>

RecordingSettings <a style="cursor: pointer" onclick="copyRecordingSettingsExample()">Copy</a>

<div id="RecordingSettingsExample" style="max-height: 250px; overflow-y: scroll;">
~~~ json
{ 
  "maxSimultaneousStreams": Number, 
}
~~~
</div>


### Example Usage

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

