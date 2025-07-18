# RecordingApi

# platformClient.RecordingApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteConversationRecordingAnnotation**](RecordingApi#deleteConversationRecordingAnnotation) | **DELETE** /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId} | Delete annotation
[**deleteOrphanrecording**](RecordingApi#deleteOrphanrecording) | **DELETE** /api/v2/orphanrecordings/{orphanId} | Deletes a single orphan recording
[**deleteRecordingCrossplatformMediaretentionpolicies**](RecordingApi#deleteRecordingCrossplatformMediaretentionpolicies) | **DELETE** /api/v2/recording/crossplatform/mediaretentionpolicies | Delete media retention policies
[**deleteRecordingCrossplatformMediaretentionpolicy**](RecordingApi#deleteRecordingCrossplatformMediaretentionpolicy) | **DELETE** /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId} | Delete a media retention policy
[**deleteRecordingJob**](RecordingApi#deleteRecordingJob) | **DELETE** /api/v2/recording/jobs/{jobId} | Delete the recording bulk job
[**deleteRecordingMediaretentionpolicies**](RecordingApi#deleteRecordingMediaretentionpolicies) | **DELETE** /api/v2/recording/mediaretentionpolicies | Delete media retention policies
[**deleteRecordingMediaretentionpolicy**](RecordingApi#deleteRecordingMediaretentionpolicy) | **DELETE** /api/v2/recording/mediaretentionpolicies/{policyId} | Delete a media retention policy
[**getConversationRecording**](RecordingApi#getConversationRecording) | **GET** /api/v2/conversations/{conversationId}/recordings/{recordingId} | Gets a specific recording.
[**getConversationRecordingAnnotation**](RecordingApi#getConversationRecordingAnnotation) | **GET** /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId} | Get annotation
[**getConversationRecordingAnnotations**](RecordingApi#getConversationRecordingAnnotations) | **GET** /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations | Get annotations for recording
[**getConversationRecordingmetadata**](RecordingApi#getConversationRecordingmetadata) | **GET** /api/v2/conversations/{conversationId}/recordingmetadata | Get recording metadata for a conversation. Does not return playable media nor system annotations. Bookmark annotations will be excluded if either recording:recording:view or recording:annotation:view permission is missing.
[**getConversationRecordingmetadataRecordingId**](RecordingApi#getConversationRecordingmetadataRecordingId) | **GET** /api/v2/conversations/{conversationId}/recordingmetadata/{recordingId} | Get metadata for a specific recording. Does not return playable media.
[**getConversationRecordings**](RecordingApi#getConversationRecordings) | **GET** /api/v2/conversations/{conversationId}/recordings | Get all of a Conversation's Recordings.
[**getOrphanrecording**](RecordingApi#getOrphanrecording) | **GET** /api/v2/orphanrecordings/{orphanId} | Gets a single orphan recording
[**getOrphanrecordingMedia**](RecordingApi#getOrphanrecordingMedia) | **GET** /api/v2/orphanrecordings/{orphanId}/media | Gets the media of a single orphan recording
[**getOrphanrecordings**](RecordingApi#getOrphanrecordings) | **GET** /api/v2/orphanrecordings | Gets all orphan recordings
[**getRecordingBatchrequest**](RecordingApi#getRecordingBatchrequest) | **GET** /api/v2/recording/batchrequests/{jobId} | Get the status and results for a batch request job, only the user that submitted the job may retrieve results. Each result may contain either a URL to a recording or an error; additionally, a recording could be associated with multiple results.
[**getRecordingCrossplatformMediaretentionpolicies**](RecordingApi#getRecordingCrossplatformMediaretentionpolicies) | **GET** /api/v2/recording/crossplatform/mediaretentionpolicies | Gets media retention policy list with query options to filter on name and enabled.
[**getRecordingCrossplatformMediaretentionpolicy**](RecordingApi#getRecordingCrossplatformMediaretentionpolicy) | **GET** /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId} | Get a media retention policy
[**getRecordingJob**](RecordingApi#getRecordingJob) | **GET** /api/v2/recording/jobs/{jobId} | Get the status of the job associated with the job id.
[**getRecordingJobFailedrecordings**](RecordingApi#getRecordingJobFailedrecordings) | **GET** /api/v2/recording/jobs/{jobId}/failedrecordings | Get IDs of recordings that the bulk job failed for
[**getRecordingJobs**](RecordingApi#getRecordingJobs) | **GET** /api/v2/recording/jobs | Get the status of all jobs within the user's organization
[**getRecordingKeyconfiguration**](RecordingApi#getRecordingKeyconfiguration) | **GET** /api/v2/recording/keyconfigurations/{keyConfigurationId} | Get the encryption key configurations
[**getRecordingKeyconfigurations**](RecordingApi#getRecordingKeyconfigurations) | **GET** /api/v2/recording/keyconfigurations | Get a list of key configurations data
[**getRecordingMediaretentionpolicies**](RecordingApi#getRecordingMediaretentionpolicies) | **GET** /api/v2/recording/mediaretentionpolicies | Gets media retention policy list with query options to filter on name and enabled.
[**getRecordingMediaretentionpolicy**](RecordingApi#getRecordingMediaretentionpolicy) | **GET** /api/v2/recording/mediaretentionpolicies/{policyId} | Get a media retention policy
[**getRecordingRecordingkeys**](RecordingApi#getRecordingRecordingkeys) | **GET** /api/v2/recording/recordingkeys | Get encryption key list
[**getRecordingRecordingkeysRotationschedule**](RecordingApi#getRecordingRecordingkeysRotationschedule) | **GET** /api/v2/recording/recordingkeys/rotationschedule | Get key rotation schedule
[**getRecordingSettings**](RecordingApi#getRecordingSettings) | **GET** /api/v2/recording/settings | Get the Recording Settings for the Organization
[**getRecordingUploadsReport**](RecordingApi#getRecordingUploadsReport) | **GET** /api/v2/recording/uploads/reports/{reportId} | Get the status of a recording upload status report
[**getRecordingsRetentionQuery**](RecordingApi#getRecordingsRetentionQuery) | **GET** /api/v2/recordings/retention/query | Query for recording retention data
[**getRecordingsScreensessionsDetails**](RecordingApi#getRecordingsScreensessionsDetails) | **GET** /api/v2/recordings/screensessions/details | Retrieves an object containing the total number of concurrent active screen recordings
[**patchRecordingCrossplatformMediaretentionpolicy**](RecordingApi#patchRecordingCrossplatformMediaretentionpolicy) | **PATCH** /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId} | Patch a media retention policy
[**patchRecordingMediaretentionpolicy**](RecordingApi#patchRecordingMediaretentionpolicy) | **PATCH** /api/v2/recording/mediaretentionpolicies/{policyId} | Patch a media retention policy
[**postConversationRecordingAnnotations**](RecordingApi#postConversationRecordingAnnotations) | **POST** /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations | Create annotation
[**postRecordingBatchrequests**](RecordingApi#postRecordingBatchrequests) | **POST** /api/v2/recording/batchrequests | Submit a batch download request for recordings. Recordings in response will be in their original format/codec - configured in the Trunk configuration.
[**postRecordingCrossplatformMediaretentionpolicies**](RecordingApi#postRecordingCrossplatformMediaretentionpolicies) | **POST** /api/v2/recording/crossplatform/mediaretentionpolicies | Create media retention policy
[**postRecordingJobs**](RecordingApi#postRecordingJobs) | **POST** /api/v2/recording/jobs | Create a recording bulk job.
[**postRecordingKeyconfigurations**](RecordingApi#postRecordingKeyconfigurations) | **POST** /api/v2/recording/keyconfigurations | Setup configurations for encryption key creation
[**postRecordingKeyconfigurationsValidate**](RecordingApi#postRecordingKeyconfigurationsValidate) | **POST** /api/v2/recording/keyconfigurations/validate | Validate encryption key configurations without saving it
[**postRecordingLocalkeys**](RecordingApi#postRecordingLocalkeys) | **POST** /api/v2/recording/localkeys | create a local key management recording key
[**postRecordingMediaretentionpolicies**](RecordingApi#postRecordingMediaretentionpolicies) | **POST** /api/v2/recording/mediaretentionpolicies | Create media retention policy
[**postRecordingRecordingkeys**](RecordingApi#postRecordingRecordingkeys) | **POST** /api/v2/recording/recordingkeys | Create encryption key
[**postRecordingUploadsReports**](RecordingApi#postRecordingUploadsReports) | **POST** /api/v2/recording/uploads/reports | Creates a recording upload status report
[**postRecordingsDeletionprotection**](RecordingApi#postRecordingsDeletionprotection) | **POST** /api/v2/recordings/deletionprotection | Get a list of conversations with protected recordings
[**postRecordingsScreensessionsAcknowledge**](RecordingApi#postRecordingsScreensessionsAcknowledge) | **POST** /api/v2/recordings/screensessions/acknowledge | Acknowledge a screen recording.
[**postRecordingsScreensessionsMetadata**](RecordingApi#postRecordingsScreensessionsMetadata) | **POST** /api/v2/recordings/screensessions/metadata | Provide meta-data a screen recording.
[**putConversationRecording**](RecordingApi#putConversationRecording) | **PUT** /api/v2/conversations/{conversationId}/recordings/{recordingId} | Updates the retention records on a recording.
[**putConversationRecordingAnnotation**](RecordingApi#putConversationRecordingAnnotation) | **PUT** /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId} | Update annotation
[**putOrphanrecording**](RecordingApi#putOrphanrecording) | **PUT** /api/v2/orphanrecordings/{orphanId} | Updates an orphan recording to a regular recording with retention values
[**putRecordingCrossplatformMediaretentionpolicy**](RecordingApi#putRecordingCrossplatformMediaretentionpolicy) | **PUT** /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId} | Update a media retention policy
[**putRecordingJob**](RecordingApi#putRecordingJob) | **PUT** /api/v2/recording/jobs/{jobId} | Execute the recording bulk job.
[**putRecordingKeyconfiguration**](RecordingApi#putRecordingKeyconfiguration) | **PUT** /api/v2/recording/keyconfigurations/{keyConfigurationId} | Update the encryption key configurations
[**putRecordingMediaretentionpolicy**](RecordingApi#putRecordingMediaretentionpolicy) | **PUT** /api/v2/recording/mediaretentionpolicies/{policyId} | Update a media retention policy
[**putRecordingRecordingkeysRotationschedule**](RecordingApi#putRecordingRecordingkeysRotationschedule) | **PUT** /api/v2/recording/recordingkeys/rotationschedule | Update key rotation schedule
[**putRecordingSettings**](RecordingApi#putRecordingSettings) | **PUT** /api/v2/recording/settings | Update the Recording Settings for the Organization
[**putRecordingsDeletionprotection**](RecordingApi#putRecordingsDeletionprotection) | **PUT** /api/v2/recordings/deletionprotection | Apply or revoke recording protection for conversations



## deleteConversationRecordingAnnotation

> void deleteConversationRecordingAnnotation(conversationId, recordingId, annotationId)


DELETE /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}

Delete annotation

Requires ANY permissions:

* recording:annotation:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let recordingId = "recordingId_example"; // String | Recording ID
let annotationId = "annotationId_example"; // String | Annotation ID

apiInstance.deleteConversationRecordingAnnotation(conversationId, recordingId, annotationId)
  .then(() => {
    console.log('deleteConversationRecordingAnnotation returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteConversationRecordingAnnotation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **annotationId** | **String** | Annotation ID |  |

### Return type

void (no response body)


## deleteOrphanrecording

> OrphanRecording deleteOrphanrecording(orphanId)


DELETE /api/v2/orphanrecordings/{orphanId}

Deletes a single orphan recording

Requires ANY permissions:

* recording:orphan:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let orphanId = "orphanId_example"; // String | Orphan ID

apiInstance.deleteOrphanrecording(orphanId)
  .then((data) => {
    console.log(`deleteOrphanrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteOrphanrecording');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orphanId** | **String** | Orphan ID |  |

### Return type

**OrphanRecording**


## deleteRecordingCrossplatformMediaretentionpolicies

> void deleteRecordingCrossplatformMediaretentionpolicies(ids)


DELETE /api/v2/recording/crossplatform/mediaretentionpolicies

Delete media retention policies

Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.

Requires ANY permissions:

* recording:crossPlatformRetentionPolicy:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let ids = "ids_example"; // String | 

apiInstance.deleteRecordingCrossplatformMediaretentionpolicies(ids)
  .then(() => {
    console.log('deleteRecordingCrossplatformMediaretentionpolicies returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRecordingCrossplatformMediaretentionpolicies');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ids** | **String** |  |  |

### Return type

void (no response body)


## deleteRecordingCrossplatformMediaretentionpolicy

> void deleteRecordingCrossplatformMediaretentionpolicy(policyId)


DELETE /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}

Delete a media retention policy

Requires ANY permissions:

* recording:crossPlatformRetentionPolicy:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let policyId = "policyId_example"; // String | Policy ID

apiInstance.deleteRecordingCrossplatformMediaretentionpolicy(policyId)
  .then(() => {
    console.log('deleteRecordingCrossplatformMediaretentionpolicy returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRecordingCrossplatformMediaretentionpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |

### Return type

void (no response body)


## deleteRecordingJob

> void deleteRecordingJob(jobId)


DELETE /api/v2/recording/jobs/{jobId}

Delete the recording bulk job

Requires ALL permissions:

* recording:job:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.deleteRecordingJob(jobId)
  .then(() => {
    console.log('deleteRecordingJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRecordingJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

void (no response body)


## deleteRecordingMediaretentionpolicies

> void deleteRecordingMediaretentionpolicies(ids)


DELETE /api/v2/recording/mediaretentionpolicies

Delete media retention policies

Bulk delete of media retention policies, this will only delete the polices that match the ids specified in the query param.

Requires ANY permissions:

* recording:retentionPolicy:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let ids = "ids_example"; // String | 

apiInstance.deleteRecordingMediaretentionpolicies(ids)
  .then(() => {
    console.log('deleteRecordingMediaretentionpolicies returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRecordingMediaretentionpolicies');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **ids** | **String** |  |  |

### Return type

void (no response body)


## deleteRecordingMediaretentionpolicy

> void deleteRecordingMediaretentionpolicy(policyId)


DELETE /api/v2/recording/mediaretentionpolicies/{policyId}

Delete a media retention policy

Requires ANY permissions:

* recording:retentionPolicy:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let policyId = "policyId_example"; // String | Policy ID

apiInstance.deleteRecordingMediaretentionpolicy(policyId)
  .then(() => {
    console.log('deleteRecordingMediaretentionpolicy returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteRecordingMediaretentionpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |

### Return type

void (no response body)


## getConversationRecording

> Recording getConversationRecording(conversationId, recordingId, opts)


GET /api/v2/conversations/{conversationId}/recordings/{recordingId}

Gets a specific recording.

Requires ANY permissions:

* recording:recording:view
* recording:recordingSegment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let recordingId = "recordingId_example"; // String | Recording ID
let opts = { 
  'formatId': "WEBM", // String | The desired media format. Valid values:WAV,WEBM,WAV_ULAW,OGG_VORBIS,OGG_OPUS,MP3,NONE
  'emailFormatId': "EML", // String | The desired media format when downloading an email recording. Valid values:EML,NONE
  'chatFormatId': "ZIP", // String | The desired media format when downloading a chat recording. Valid values:ZIP,NONE 
  'messageFormatId': "ZIP", // String | The desired media format when downloading a message recording. Valid values:ZIP,NONE
  'download': false, // Boolean | requesting a download format of the recording. Valid values:true,false
  'fileName': "fileName_example", // String | the name of the downloaded fileName
  'locale': "locale_example", // String | The locale for the requested file when downloading or for redacting sensitive information in requested files, as an ISO 639-1 code
  'mediaFormats': ["mediaFormats_example"] // [String] | All acceptable media formats. Overrides formatId. Valid values:WAV,WEBM,WAV_ULAW,OGG_VORBIS,OGG_OPUS,MP3
};

apiInstance.getConversationRecording(conversationId, recordingId, opts)
  .then((data) => {
    console.log(`getConversationRecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationRecording');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **formatId** | **String** | The desired media format. Valid values:WAV,WEBM,WAV_ULAW,OGG_VORBIS,OGG_OPUS,MP3,NONE | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
 **emailFormatId** | **String** | The desired media format when downloading an email recording. Valid values:EML,NONE | [optional] [default to EML]<br />**Values**: EML, NONE |
 **chatFormatId** | **String** | The desired media format when downloading a chat recording. Valid values:ZIP,NONE  | [optional] [default to ZIP]<br />**Values**: ZIP, NONE |
 **messageFormatId** | **String** | The desired media format when downloading a message recording. Valid values:ZIP,NONE | [optional] [default to ZIP]<br />**Values**: ZIP, NONE |
 **download** | **Boolean** | requesting a download format of the recording. Valid values:true,false | [optional] [default to false]<br />**Values**: true, false |
 **fileName** | **String** | the name of the downloaded fileName | [optional]  |
 **locale** | **String** | The locale for the requested file when downloading or for redacting sensitive information in requested files, as an ISO 639-1 code | [optional]  |
 **mediaFormats** | **[String]** | All acceptable media formats. Overrides formatId. Valid values:WAV,WEBM,WAV_ULAW,OGG_VORBIS,OGG_OPUS,MP3 | [optional]  |

### Return type

**Recording**


## getConversationRecordingAnnotation

> Annotation getConversationRecordingAnnotation(conversationId, recordingId, annotationId)


GET /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}

Get annotation

Requires ANY permissions:

* recording:annotation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let recordingId = "recordingId_example"; // String | Recording ID
let annotationId = "annotationId_example"; // String | Annotation ID

apiInstance.getConversationRecordingAnnotation(conversationId, recordingId, annotationId)
  .then((data) => {
    console.log(`getConversationRecordingAnnotation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationRecordingAnnotation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **annotationId** | **String** | Annotation ID |  |

### Return type

**Annotation**


## getConversationRecordingAnnotations

> [Annotation] getConversationRecordingAnnotations(conversationId, recordingId)


GET /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations

Get annotations for recording

Requires ANY permissions:

* recording:annotation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let recordingId = "recordingId_example"; // String | Recording ID

apiInstance.getConversationRecordingAnnotations(conversationId, recordingId)
  .then((data) => {
    console.log(`getConversationRecordingAnnotations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationRecordingAnnotations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |

### Return type

**[Annotation]**


## getConversationRecordingmetadata

> [RecordingMetadata] getConversationRecordingmetadata(conversationId)


GET /api/v2/conversations/{conversationId}/recordingmetadata

Get recording metadata for a conversation. Does not return playable media nor system annotations. Bookmark annotations will be excluded if either recording:recording:view or recording:annotation:view permission is missing.

Requires ANY permissions:

* recording:recording:view
* recording:recordingSegment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let conversationId = "conversationId_example"; // String | Conversation ID

apiInstance.getConversationRecordingmetadata(conversationId)
  .then((data) => {
    console.log(`getConversationRecordingmetadata success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationRecordingmetadata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |

### Return type

**[RecordingMetadata]**


## getConversationRecordingmetadataRecordingId

> RecordingMetadata getConversationRecordingmetadataRecordingId(conversationId, recordingId)


GET /api/v2/conversations/{conversationId}/recordingmetadata/{recordingId}

Get metadata for a specific recording. Does not return playable media.

Requires ANY permissions:

* recording:recording:view
* recording:recordingSegment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let recordingId = "recordingId_example"; // String | Recording ID

apiInstance.getConversationRecordingmetadataRecordingId(conversationId, recordingId)
  .then((data) => {
    console.log(`getConversationRecordingmetadataRecordingId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationRecordingmetadataRecordingId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |

### Return type

**RecordingMetadata**


## getConversationRecordings

> [Recording] getConversationRecordings(conversationId, opts)


GET /api/v2/conversations/{conversationId}/recordings

Get all of a Conversation's Recordings.

Requires ANY permissions:

* recording:recording:view
* recording:recordingSegment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let opts = { 
  'maxWaitMs': 5000, // Number | The maximum number of milliseconds to wait for the recording to be ready. Must be a positive value.
  'formatId': "WEBM", // String | The desired media format. Valid values:WAV,WEBM,WAV_ULAW,OGG_VORBIS,OGG_OPUS,MP3,NONE.
  'mediaFormats': ["mediaFormats_example"], // [String] | All acceptable media formats. Overrides formatId. Valid values:WAV,WEBM,WAV_ULAW,OGG_VORBIS,OGG_OPUS,MP3.
  'locale': "locale_example", // String | The locale used for redacting sensitive information in requested files, as an ISO 639-1 code
  'includePauseAnnotationsForScreenRecordings': false // Boolean | Include applicable Secure Pause annotations from all audio recordings to all screen recordings
};

apiInstance.getConversationRecordings(conversationId, opts)
  .then((data) => {
    console.log(`getConversationRecordings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getConversationRecordings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **maxWaitMs** | **Number** | The maximum number of milliseconds to wait for the recording to be ready. Must be a positive value. | [optional] [default to 5000] |
 **formatId** | **String** | The desired media format. Valid values:WAV,WEBM,WAV_ULAW,OGG_VORBIS,OGG_OPUS,MP3,NONE. | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
 **mediaFormats** | **[String]** | All acceptable media formats. Overrides formatId. Valid values:WAV,WEBM,WAV_ULAW,OGG_VORBIS,OGG_OPUS,MP3. | [optional]  |
 **locale** | **String** | The locale used for redacting sensitive information in requested files, as an ISO 639-1 code | [optional]  |
 **includePauseAnnotationsForScreenRecordings** | **Boolean** | Include applicable Secure Pause annotations from all audio recordings to all screen recordings | [optional] [default to false] |

### Return type

**[Recording]**


## getOrphanrecording

> OrphanRecording getOrphanrecording(orphanId)


GET /api/v2/orphanrecordings/{orphanId}

Gets a single orphan recording

Requires ANY permissions:

* recording:orphan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let orphanId = "orphanId_example"; // String | Orphan ID

apiInstance.getOrphanrecording(orphanId)
  .then((data) => {
    console.log(`getOrphanrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrphanrecording');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orphanId** | **String** | Orphan ID |  |

### Return type

**OrphanRecording**


## getOrphanrecordingMedia

> Recording getOrphanrecordingMedia(orphanId, opts)


GET /api/v2/orphanrecordings/{orphanId}/media

Gets the media of a single orphan recording

A 202 response means the orphaned media is currently transcoding and will be available shortly.A 200 response denotes the transcoded orphan media is available now and is contained in the response body.

Requires ANY permissions:

* recording:orphan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let orphanId = "orphanId_example"; // String | Orphan ID
let opts = { 
  'formatId': "WEBM", // String | The desired media format.
  'emailFormatId': "EML", // String | The desired media format when downloading an email recording.
  'chatFormatId': "ZIP", // String | The desired media format when downloading a chat recording.
  'messageFormatId': "ZIP", // String | The desired media format when downloading a message recording.
  'download': false, // Boolean | requesting a download format of the recording
  'fileName': "fileName_example", // String | the name of the downloaded fileName
  'locale': "locale_example", // String | The locale for the requested file when downloading, as an ISO 639-1 code
  'mediaFormats': ["mediaFormats_example"] // [String] | All acceptable media formats. Overrides formatId. Valid values:WAV,WEBM,WAV_ULAW,OGG_VORBIS,OGG_OPUS,MP3
};

apiInstance.getOrphanrecordingMedia(orphanId, opts)
  .then((data) => {
    console.log(`getOrphanrecordingMedia success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrphanrecordingMedia');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orphanId** | **String** | Orphan ID |  |
 **formatId** | **String** | The desired media format. | [optional] [default to WEBM]<br />**Values**: WAV, WEBM, WAV_ULAW, OGG_VORBIS, OGG_OPUS, MP3, NONE |
 **emailFormatId** | **String** | The desired media format when downloading an email recording. | [optional] [default to EML]<br />**Values**: EML, NONE |
 **chatFormatId** | **String** | The desired media format when downloading a chat recording. | [optional] [default to ZIP]<br />**Values**: ZIP, NONE |
 **messageFormatId** | **String** | The desired media format when downloading a message recording. | [optional] [default to ZIP]<br />**Values**: ZIP, NONE |
 **download** | **Boolean** | requesting a download format of the recording | [optional] [default to false]<br />**Values**: true, false |
 **fileName** | **String** | the name of the downloaded fileName | [optional]  |
 **locale** | **String** | The locale for the requested file when downloading, as an ISO 639-1 code | [optional]  |
 **mediaFormats** | **[String]** | All acceptable media formats. Overrides formatId. Valid values:WAV,WEBM,WAV_ULAW,OGG_VORBIS,OGG_OPUS,MP3 | [optional]  |

### Return type

**Recording**


## getOrphanrecordings

> OrphanRecordingListing getOrphanrecordings(opts)


GET /api/v2/orphanrecordings

Gets all orphan recordings

Requires ANY permissions:

* recording:orphan:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let opts = { 
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
  .then((data) => {
    console.log(`getOrphanrecordings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getOrphanrecordings');
    console.error(err);
  });
```

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

### Return type

**OrphanRecordingListing**


## getRecordingBatchrequest

> BatchDownloadJobStatusResult getRecordingBatchrequest(jobId)


GET /api/v2/recording/batchrequests/{jobId}

Get the status and results for a batch request job, only the user that submitted the job may retrieve results. Each result may contain either a URL to a recording or an error; additionally, a recording could be associated with multiple results.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getRecordingBatchrequest(jobId)
  .then((data) => {
    console.log(`getRecordingBatchrequest success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingBatchrequest');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**BatchDownloadJobStatusResult**


## getRecordingCrossplatformMediaretentionpolicies

> PolicyEntityListing getRecordingCrossplatformMediaretentionpolicies(opts)


GET /api/v2/recording/crossplatform/mediaretentionpolicies

Gets media retention policy list with query options to filter on name and enabled.

for a less verbose response, add summary=true to this endpoint

Requires ANY permissions:

* recording:crossPlatformRetentionPolicy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'name': "name_example", // String | the policy name - used for filtering results in searches.
  'enabled': true, // Boolean | checks to see if policy is enabled - use enabled = true or enabled = false
  'summary': false, // Boolean | provides a less verbose response of policy lists.
  'hasErrors': true, // Boolean | provides a way to fetch all policies with errors or policies that do not have errors
  'deleteDaysThreshold': 3.4 // Number | provides a way to fetch all policies with any actions having deleteDays exceeding the provided value
};

apiInstance.getRecordingCrossplatformMediaretentionpolicies(opts)
  .then((data) => {
    console.log(`getRecordingCrossplatformMediaretentionpolicies success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingCrossplatformMediaretentionpolicies');
    console.error(err);
  });
```

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
 **deleteDaysThreshold** | **Number** | provides a way to fetch all policies with any actions having deleteDays exceeding the provided value | [optional]  |

### Return type

**PolicyEntityListing**


## getRecordingCrossplatformMediaretentionpolicy

> CrossPlatformPolicy getRecordingCrossplatformMediaretentionpolicy(policyId)


GET /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}

Get a media retention policy

Requires ANY permissions:

* recording:crossPlatformRetentionPolicy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let policyId = "policyId_example"; // String | Policy ID

apiInstance.getRecordingCrossplatformMediaretentionpolicy(policyId)
  .then((data) => {
    console.log(`getRecordingCrossplatformMediaretentionpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingCrossplatformMediaretentionpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |

### Return type

**CrossPlatformPolicy**


## getRecordingJob

> RecordingJob getRecordingJob(jobId)


GET /api/v2/recording/jobs/{jobId}

Get the status of the job associated with the job id.

Requires ALL permissions:

* recording:job:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let jobId = "jobId_example"; // String | jobId

apiInstance.getRecordingJob(jobId)
  .then((data) => {
    console.log(`getRecordingJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |

### Return type

**RecordingJob**


## getRecordingJobFailedrecordings

> FailedRecordingEntityListing getRecordingJobFailedrecordings(jobId, opts)


GET /api/v2/recording/jobs/{jobId}/failedrecordings

Get IDs of recordings that the bulk job failed for

Requires ALL permissions:

* recording:job:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let jobId = "jobId_example"; // String | jobId
let opts = { 
  'pageSize': 25, // Number | Page size. Maximum is 100.
  'pageNumber': 1, // Number | Page number
  'includeTotal': true, // Boolean | If false, cursor will be used to locate the page instead of pageNumber. It is recommended to set it to false for improved performance.
  'cursor': "cursor_example" // String | Indicates where to resume query results (not required for first page)
};

apiInstance.getRecordingJobFailedrecordings(jobId, opts)
  .then((data) => {
    console.log(`getRecordingJobFailedrecordings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingJobFailedrecordings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **pageSize** | **Number** | Page size. Maximum is 100. | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **includeTotal** | **Boolean** | If false, cursor will be used to locate the page instead of pageNumber. It is recommended to set it to false for improved performance. | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |

### Return type

**FailedRecordingEntityListing**


## getRecordingJobs

> RecordingJobEntityListing getRecordingJobs(opts)


GET /api/v2/recording/jobs

Get the status of all jobs within the user's organization

Requires ALL permissions:

* recording:job:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1, // Number | Page number
  'sortBy': "userId", // String | Sort by
  'state': "state_example", // String | Filter by state
  'showOnlyMyJobs': true, // Boolean | Show only my jobs
  'jobType': "jobType_example", // String | Job Type (Can be left empty for both)
  'includeTotal': true, // Boolean | If false, cursor will be used to locate the page instead of pageNumber. It is recommended to set it to false for improved performance.
  'cursor': "cursor_example" // String | Indicates where to resume query results (not required for first page)
};

apiInstance.getRecordingJobs(opts)
  .then((data) => {
    console.log(`getRecordingJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |
 **sortBy** | **String** | Sort by | [optional] [default to userId]<br />**Values**: userId, dateCreated |
 **state** | **String** | Filter by state | [optional] <br />**Values**: FULFILLED, PENDING, READY, PROCESSING, CANCELLED, FAILED |
 **showOnlyMyJobs** | **Boolean** | Show only my jobs | [optional]  |
 **jobType** | **String** | Job Type (Can be left empty for both) | [optional] <br />**Values**: ARCHIVE, DELETE, EXPORT |
 **includeTotal** | **Boolean** | If false, cursor will be used to locate the page instead of pageNumber. It is recommended to set it to false for improved performance. | [optional]  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |

### Return type

**RecordingJobEntityListing**


## getRecordingKeyconfiguration

> RecordingEncryptionConfiguration getRecordingKeyconfiguration(keyConfigurationId)


GET /api/v2/recording/keyconfigurations/{keyConfigurationId}

Get the encryption key configurations

Requires ANY permissions:

* recording:encryptionKey:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let keyConfigurationId = "keyConfigurationId_example"; // String | Key Configurations Id

apiInstance.getRecordingKeyconfiguration(keyConfigurationId)
  .then((data) => {
    console.log(`getRecordingKeyconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingKeyconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **keyConfigurationId** | **String** | Key Configurations Id |  |

### Return type

**RecordingEncryptionConfiguration**


## getRecordingKeyconfigurations

> RecordingEncryptionConfigurationListing getRecordingKeyconfigurations()


GET /api/v2/recording/keyconfigurations

Get a list of key configurations data

Requires ANY permissions:

* recording:encryptionKey:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

apiInstance.getRecordingKeyconfigurations()
  .then((data) => {
    console.log(`getRecordingKeyconfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingKeyconfigurations');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**RecordingEncryptionConfigurationListing**


## getRecordingMediaretentionpolicies

> PolicyEntityListing getRecordingMediaretentionpolicies(opts)


GET /api/v2/recording/mediaretentionpolicies

Gets media retention policy list with query options to filter on name and enabled.

for a less verbose response, add summary=true to this endpoint

Requires ANY permissions:

* recording:retentionPolicy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let opts = { 
  'pageSize': 25, // Number | The total page size requested
  'pageNumber': 1, // Number | The page number requested
  'sortBy': "sortBy_example", // String | variable name requested to sort by
  'expand': ["expand_example"], // [String] | variable name requested by expand list
  'nextPage': "nextPage_example", // String | next page token
  'previousPage': "previousPage_example", // String | Previous page token
  'name': "name_example", // String | the policy name - used for filtering results in searches.
  'enabled': true, // Boolean | checks to see if policy is enabled - use enabled = true or enabled = false
  'summary': false, // Boolean | provides a less verbose response of policy lists.
  'hasErrors': true, // Boolean | provides a way to fetch all policies with errors or policies that do not have errors
  'deleteDaysThreshold': 3.4 // Number | provides a way to fetch all policies with any actions having deleteDays exceeding the provided value
};

apiInstance.getRecordingMediaretentionpolicies(opts)
  .then((data) => {
    console.log(`getRecordingMediaretentionpolicies success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingMediaretentionpolicies');
    console.error(err);
  });
```

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
 **deleteDaysThreshold** | **Number** | provides a way to fetch all policies with any actions having deleteDays exceeding the provided value | [optional]  |

### Return type

**PolicyEntityListing**


## getRecordingMediaretentionpolicy

> Policy getRecordingMediaretentionpolicy(policyId)


GET /api/v2/recording/mediaretentionpolicies/{policyId}

Get a media retention policy

Requires ANY permissions:

* recording:retentionPolicy:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let policyId = "policyId_example"; // String | Policy ID

apiInstance.getRecordingMediaretentionpolicy(policyId)
  .then((data) => {
    console.log(`getRecordingMediaretentionpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingMediaretentionpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |

### Return type

**Policy**


## getRecordingRecordingkeys

> EncryptionKeyEntityListing getRecordingRecordingkeys(opts)


GET /api/v2/recording/recordingkeys

Get encryption key list

Requires ANY permissions:

* recording:encryptionKey:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let opts = { 
  'pageSize': 25, // Number | Page size
  'pageNumber': 1 // Number | Page number
};

apiInstance.getRecordingRecordingkeys(opts)
  .then((data) => {
    console.log(`getRecordingRecordingkeys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingRecordingkeys');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | Page size | [optional] [default to 25] |
 **pageNumber** | **Number** | Page number | [optional] [default to 1] |

### Return type

**EncryptionKeyEntityListing**


## getRecordingRecordingkeysRotationschedule

> KeyRotationSchedule getRecordingRecordingkeysRotationschedule()


GET /api/v2/recording/recordingkeys/rotationschedule

Get key rotation schedule

Requires ANY permissions:

* recording:encryptionKey:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

apiInstance.getRecordingRecordingkeysRotationschedule()
  .then((data) => {
    console.log(`getRecordingRecordingkeysRotationschedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingRecordingkeysRotationschedule');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**KeyRotationSchedule**


## getRecordingSettings

> RecordingSettings getRecordingSettings(opts)


GET /api/v2/recording/settings

Get the Recording Settings for the Organization

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let opts = { 
  'createDefault': false // Boolean | If no settings are found, a new one is created with default values
};

apiInstance.getRecordingSettings(opts)
  .then((data) => {
    console.log(`getRecordingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **createDefault** | **Boolean** | If no settings are found, a new one is created with default values | [optional] [default to false] |

### Return type

**RecordingSettings**


## getRecordingUploadsReport

> RecordingUploadReport getRecordingUploadsReport(reportId)


GET /api/v2/recording/uploads/reports/{reportId}

Get the status of a recording upload status report

Requires ALL permissions:

* recording:uploadReport:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let reportId = "reportId_example"; // String | reportId

apiInstance.getRecordingUploadsReport(reportId)
  .then((data) => {
    console.log(`getRecordingUploadsReport success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingUploadsReport');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **reportId** | **String** | reportId |  |

### Return type

**RecordingUploadReport**


## getRecordingsRetentionQuery

> RecordingRetentionCursorEntityListing getRecordingsRetentionQuery(retentionThresholdDays, opts)


GET /api/v2/recordings/retention/query

Query for recording retention data

Requires ANY permissions:

* recording:recording:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let retentionThresholdDays = 3.4; // Number | Fetch retention data for recordings retained for more days than the provided value.
let opts = { 
  'cursor': "cursor_example", // String | Indicates where to resume query results (not required for first page)
  'pageSize': 25 // Number | Page size. Maximum is 500.
};

apiInstance.getRecordingsRetentionQuery(retentionThresholdDays, opts)
  .then((data) => {
    console.log(`getRecordingsRetentionQuery success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingsRetentionQuery');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **retentionThresholdDays** | **Number** | Fetch retention data for recordings retained for more days than the provided value. |  |
 **cursor** | **String** | Indicates where to resume query results (not required for first page) | [optional]  |
 **pageSize** | **Number** | Page size. Maximum is 500. | [optional] [default to 25] |

### Return type

**RecordingRetentionCursorEntityListing**


## getRecordingsScreensessionsDetails

> ScreenRecordingActiveSessions getRecordingsScreensessionsDetails()


GET /api/v2/recordings/screensessions/details

Retrieves an object containing the total number of concurrent active screen recordings

Requires ANY permissions:

* recording:screenRecording:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

apiInstance.getRecordingsScreensessionsDetails()
  .then((data) => {
    console.log(`getRecordingsScreensessionsDetails success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getRecordingsScreensessionsDetails');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**ScreenRecordingActiveSessions**


## patchRecordingCrossplatformMediaretentionpolicy

> CrossPlatformPolicy patchRecordingCrossplatformMediaretentionpolicy(policyId, body)


PATCH /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}

Patch a media retention policy

Requires ANY permissions:

* recording:crossPlatformRetentionPolicy:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let policyId = "policyId_example"; // String | Policy ID
let body = {}; // Object | Policy

apiInstance.patchRecordingCrossplatformMediaretentionpolicy(policyId, body)
  .then((data) => {
    console.log(`patchRecordingCrossplatformMediaretentionpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRecordingCrossplatformMediaretentionpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |
 **body** | **Object** | Policy |  |

### Return type

**CrossPlatformPolicy**


## patchRecordingMediaretentionpolicy

> Policy patchRecordingMediaretentionpolicy(policyId, body)


PATCH /api/v2/recording/mediaretentionpolicies/{policyId}

Patch a media retention policy

Requires ANY permissions:

* recording:retentionPolicy:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let policyId = "policyId_example"; // String | Policy ID
let body = {}; // Object | Policy

apiInstance.patchRecordingMediaretentionpolicy(policyId, body)
  .then((data) => {
    console.log(`patchRecordingMediaretentionpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling patchRecordingMediaretentionpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |
 **body** | **Object** | Policy |  |

### Return type

**Policy**


## postConversationRecordingAnnotations

> Annotation postConversationRecordingAnnotations(conversationId, recordingId, body)


POST /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations

Create annotation

Requires ANY permissions:

* recording:annotation:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let recordingId = "recordingId_example"; // String | Recording ID
let body = {}; // Object | annotation

apiInstance.postConversationRecordingAnnotations(conversationId, recordingId, body)
  .then((data) => {
    console.log(`postConversationRecordingAnnotations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postConversationRecordingAnnotations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **body** | **Object** | annotation |  |

### Return type

**Annotation**


## postRecordingBatchrequests

> BatchDownloadJobSubmissionResult postRecordingBatchrequests(body)


POST /api/v2/recording/batchrequests

Submit a batch download request for recordings. Recordings in response will be in their original format/codec - configured in the Trunk configuration.

Requires ANY permissions:

* recording:recording:view
* recording:recordingSegment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | Job submission criteria

apiInstance.postRecordingBatchrequests(body)
  .then((data) => {
    console.log(`postRecordingBatchrequests success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingBatchrequests');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Job submission criteria |  |

### Return type

**BatchDownloadJobSubmissionResult**


## postRecordingCrossplatformMediaretentionpolicies

> CrossPlatformPolicy postRecordingCrossplatformMediaretentionpolicies(body)


POST /api/v2/recording/crossplatform/mediaretentionpolicies

Create media retention policy

Policy does not work retroactively

Requires ANY permissions:

* recording:crossPlatformRetentionPolicy:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | Policy

apiInstance.postRecordingCrossplatformMediaretentionpolicies(body)
  .then((data) => {
    console.log(`postRecordingCrossplatformMediaretentionpolicies success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingCrossplatformMediaretentionpolicies');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Policy |  |

### Return type

**CrossPlatformPolicy**


## postRecordingJobs

> RecordingJob postRecordingJobs(body)


POST /api/v2/recording/jobs

Create a recording bulk job.

Each organization can run up to a maximum of two concurrent jobs that are either in pending or processing state. Furthermore, the recording:recording:viewSensitiveData permission is required to access recordings with PCI DSS and/or PII data when redaction is enabled for their organization. If the requester does not have that permission and includeRecordingsWithSensitiveData is set to true, then their request will be rejected.

Requires ALL permissions:

* recording:job:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | query

apiInstance.postRecordingJobs(body)
  .then((data) => {
    console.log(`postRecordingJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | query |  |

### Return type

**RecordingJob**


## postRecordingKeyconfigurations

> RecordingEncryptionConfiguration postRecordingKeyconfigurations(body)


POST /api/v2/recording/keyconfigurations

Setup configurations for encryption key creation

Requires ANY permissions:

* recording:encryptionKey:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | Encryption Configuration

apiInstance.postRecordingKeyconfigurations(body)
  .then((data) => {
    console.log(`postRecordingKeyconfigurations success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingKeyconfigurations');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Encryption Configuration |  |

### Return type

**RecordingEncryptionConfiguration**


## postRecordingKeyconfigurationsValidate

> RecordingEncryptionConfiguration postRecordingKeyconfigurationsValidate(body)


POST /api/v2/recording/keyconfigurations/validate

Validate encryption key configurations without saving it

Requires ANY permissions:

* recording:encryptionKey:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | Encryption Configuration

apiInstance.postRecordingKeyconfigurationsValidate(body)
  .then((data) => {
    console.log(`postRecordingKeyconfigurationsValidate success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingKeyconfigurationsValidate');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Encryption Configuration |  |

### Return type

**RecordingEncryptionConfiguration**


## postRecordingLocalkeys

> EncryptionKey postRecordingLocalkeys(body)


POST /api/v2/recording/localkeys

create a local key management recording key

Requires ANY permissions:

* recording:encryptionKey:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | Local Encryption body

apiInstance.postRecordingLocalkeys(body)
  .then((data) => {
    console.log(`postRecordingLocalkeys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingLocalkeys');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Local Encryption body |  |

### Return type

**EncryptionKey**


## postRecordingMediaretentionpolicies

> Policy postRecordingMediaretentionpolicies(body)


POST /api/v2/recording/mediaretentionpolicies

Create media retention policy

Policy does not work retroactively

Requires ANY permissions:

* recording:retentionPolicy:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | Policy

apiInstance.postRecordingMediaretentionpolicies(body)
  .then((data) => {
    console.log(`postRecordingMediaretentionpolicies success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingMediaretentionpolicies');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Policy |  |

### Return type

**Policy**


## postRecordingRecordingkeys

> EncryptionKey postRecordingRecordingkeys()


POST /api/v2/recording/recordingkeys

Create encryption key

Requires ANY permissions:

* recording:encryptionKey:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

apiInstance.postRecordingRecordingkeys()
  .then((data) => {
    console.log(`postRecordingRecordingkeys success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingRecordingkeys');
    console.error(err);
  });
```

### Parameters

This endpoint does not need any parameter.

### Return type

**EncryptionKey**


## postRecordingUploadsReports

> RecordingUploadReport postRecordingUploadsReports(body)


POST /api/v2/recording/uploads/reports

Creates a recording upload status report

Requires ALL permissions:

* recording:uploadReport:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | Report parameters

apiInstance.postRecordingUploadsReports(body)
  .then((data) => {
    console.log(`postRecordingUploadsReports success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingUploadsReports');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Report parameters |  |

### Return type

**RecordingUploadReport**


## postRecordingsDeletionprotection

> [AddressableEntityRef] postRecordingsDeletionprotection(body)


POST /api/v2/recordings/deletionprotection

Get a list of conversations with protected recordings

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | conversationIds

apiInstance.postRecordingsDeletionprotection(body)
  .then((data) => {
    console.log(`postRecordingsDeletionprotection success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingsDeletionprotection');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | conversationIds |  |

### Return type

**[AddressableEntityRef]**


## postRecordingsScreensessionsAcknowledge

> void postRecordingsScreensessionsAcknowledge(body)


POST /api/v2/recordings/screensessions/acknowledge

Acknowledge a screen recording.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | AcknowledgeScreenRecordingRequest

apiInstance.postRecordingsScreensessionsAcknowledge(body)
  .then(() => {
    console.log('postRecordingsScreensessionsAcknowledge returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingsScreensessionsAcknowledge');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | AcknowledgeScreenRecordingRequest |  |

### Return type

void (no response body)


## postRecordingsScreensessionsMetadata

> void postRecordingsScreensessionsMetadata(body)


POST /api/v2/recordings/screensessions/metadata

Provide meta-data a screen recording.

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | ScreenRecordingMetaDataRequest

apiInstance.postRecordingsScreensessionsMetadata(body)
  .then(() => {
    console.log('postRecordingsScreensessionsMetadata returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling postRecordingsScreensessionsMetadata');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | ScreenRecordingMetaDataRequest |  |

### Return type

void (no response body)


## putConversationRecording

> Recording putConversationRecording(conversationId, recordingId, body, opts)


PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}

Updates the retention records on a recording.

Currently supports updating and removing both archive and delete dates for eligible recordings. A request to change the archival date of an archived recording will result in a restoration of the recording until the new date set. The recording:recording:view permission is required for the recording, as well as either the recording:recording:editRetention or recording:screenRecording:editRetention permissions depending on the type of recording.

Requires ANY permissions:

* recording:recording:view
* recording:recording:editRetention
* recording:screenRecording:editRetention

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let recordingId = "recordingId_example"; // String | Recording ID
let body = {}; // Object | recording
let opts = { 
  'clearExport': true // Boolean | Whether to clear the pending export for the recording
};

apiInstance.putConversationRecording(conversationId, recordingId, body, opts)
  .then((data) => {
    console.log(`putConversationRecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationRecording');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **body** | **Object** | recording |  |
 **clearExport** | **Boolean** | Whether to clear the pending export for the recording | [optional]  |

### Return type

**Recording**


## putConversationRecordingAnnotation

> Annotation putConversationRecordingAnnotation(conversationId, recordingId, annotationId, body)


PUT /api/v2/conversations/{conversationId}/recordings/{recordingId}/annotations/{annotationId}

Update annotation

Requires ANY permissions:

* recording:annotation:edit
* recording:recording:view
* recording:recordingSegment:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let recordingId = "recordingId_example"; // String | Recording ID
let annotationId = "annotationId_example"; // String | Annotation ID
let body = {}; // Object | annotation

apiInstance.putConversationRecordingAnnotation(conversationId, recordingId, annotationId, body)
  .then((data) => {
    console.log(`putConversationRecordingAnnotation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putConversationRecordingAnnotation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **recordingId** | **String** | Recording ID |  |
 **annotationId** | **String** | Annotation ID |  |
 **body** | **Object** | annotation |  |

### Return type

**Annotation**


## putOrphanrecording

> Recording putOrphanrecording(orphanId, opts)


PUT /api/v2/orphanrecordings/{orphanId}

Updates an orphan recording to a regular recording with retention values

If this operation is successful the orphan will no longer exist. It will be replaced by the resulting recording in the response. This replacement recording is accessible by the normal Recording api.

Requires ANY permissions:

* recording:orphan:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let orphanId = "orphanId_example"; // String | Orphan ID
let opts = { 
  'body': {} // Object | 
};

apiInstance.putOrphanrecording(orphanId, opts)
  .then((data) => {
    console.log(`putOrphanrecording success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putOrphanrecording');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **orphanId** | **String** | Orphan ID |  |
 **body** | **Object** |  | [optional]  |

### Return type

**Recording**


## putRecordingCrossplatformMediaretentionpolicy

> CrossPlatformPolicy putRecordingCrossplatformMediaretentionpolicy(policyId, body)


PUT /api/v2/recording/crossplatform/mediaretentionpolicies/{policyId}

Update a media retention policy

Policy does not work retroactively

Requires ANY permissions:

* recording:crossPlatformRetentionPolicy:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let policyId = "policyId_example"; // String | Policy ID
let body = {}; // Object | Policy

apiInstance.putRecordingCrossplatformMediaretentionpolicy(policyId, body)
  .then((data) => {
    console.log(`putRecordingCrossplatformMediaretentionpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRecordingCrossplatformMediaretentionpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |
 **body** | **Object** | Policy |  |

### Return type

**CrossPlatformPolicy**


## putRecordingJob

> RecordingJob putRecordingJob(jobId, body)


PUT /api/v2/recording/jobs/{jobId}

Execute the recording bulk job.

A job must be executed by the same user whom originally created the job.  In addition, the user must have permission to update the recordings retention.

Requires ALL permissions:

* recording:job:edit
* recording:recording:editRetention
* recording:screenRecording:editRetention

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let jobId = "jobId_example"; // String | jobId
let body = {}; // Object | query

apiInstance.putRecordingJob(jobId, body)
  .then((data) => {
    console.log(`putRecordingJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRecordingJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | jobId |  |
 **body** | **Object** | query |  |

### Return type

**RecordingJob**


## putRecordingKeyconfiguration

> RecordingEncryptionConfiguration putRecordingKeyconfiguration(keyConfigurationId, body)


PUT /api/v2/recording/keyconfigurations/{keyConfigurationId}

Update the encryption key configurations

Requires ANY permissions:

* recording:encryptionKey:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let keyConfigurationId = "keyConfigurationId_example"; // String | Key Configurations Id
let body = {}; // Object | Encryption key configuration metadata

apiInstance.putRecordingKeyconfiguration(keyConfigurationId, body)
  .then((data) => {
    console.log(`putRecordingKeyconfiguration success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRecordingKeyconfiguration');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **keyConfigurationId** | **String** | Key Configurations Id |  |
 **body** | **Object** | Encryption key configuration metadata |  |

### Return type

**RecordingEncryptionConfiguration**


## putRecordingMediaretentionpolicy

> Policy putRecordingMediaretentionpolicy(policyId, body)


PUT /api/v2/recording/mediaretentionpolicies/{policyId}

Update a media retention policy

Policy does not work retroactively

Requires ANY permissions:

* recording:retentionPolicy:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let policyId = "policyId_example"; // String | Policy ID
let body = {}; // Object | Policy

apiInstance.putRecordingMediaretentionpolicy(policyId, body)
  .then((data) => {
    console.log(`putRecordingMediaretentionpolicy success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRecordingMediaretentionpolicy');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **policyId** | **String** | Policy ID |  |
 **body** | **Object** | Policy |  |

### Return type

**Policy**


## putRecordingRecordingkeysRotationschedule

> KeyRotationSchedule putRecordingRecordingkeysRotationschedule(body)


PUT /api/v2/recording/recordingkeys/rotationschedule

Update key rotation schedule

Requires ANY permissions:

* recording:encryptionKey:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | KeyRotationSchedule

apiInstance.putRecordingRecordingkeysRotationschedule(body)
  .then((data) => {
    console.log(`putRecordingRecordingkeysRotationschedule success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRecordingRecordingkeysRotationschedule');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | KeyRotationSchedule |  |

### Return type

**KeyRotationSchedule**


## putRecordingSettings

> RecordingSettings putRecordingSettings(body)


PUT /api/v2/recording/settings

Update the Recording Settings for the Organization

Requires ANY permissions:

* recording:settings:editScreenRecordings
* recording:settings:editRegionalStorage
* recording:settings:editUrlExpiration

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let body = {}; // Object | Recording settings

apiInstance.putRecordingSettings(body)
  .then((data) => {
    console.log(`putRecordingSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putRecordingSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Recording settings |  |

### Return type

**RecordingSettings**


## putRecordingsDeletionprotection

> void putRecordingsDeletionprotection(opts)


PUT /api/v2/recordings/deletionprotection

Apply or revoke recording protection for conversations

Requires ANY permissions:

* recording:deletionProtection:apply
* recording:deletionProtection:revoke

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.RecordingApi();

let opts = { 
  'protect': true, // Boolean | Check for apply, uncheck for revoke (each action requires the respective permission)
  'body': {} // Object | 
};

apiInstance.putRecordingsDeletionprotection(opts)
  .then(() => {
    console.log('putRecordingsDeletionprotection returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling putRecordingsDeletionprotection');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **protect** | **Boolean** | Check for apply, uncheck for revoke (each action requires the respective permission) | [optional] [default to true] |
 **body** | **Object** |  | [optional]  |

### Return type

void (no response body)


_purecloud-platform-client-v2@227.0.0_
