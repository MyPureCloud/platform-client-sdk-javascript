# SpeechTextAnalyticsApi

# platformClient.SpeechTextAnalyticsApi

All URIs are relative to *https://api.mypurecloud.com*

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
[**deleteSpeechandtextanalyticsCategory**](SpeechTextAnalyticsApi#deleteSpeechandtextanalyticsCategory) | **DELETE** /api/v2/speechandtextanalytics/categories/{categoryId} | Delete a Speech and Text Analytics category by ID
[**deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId**](SpeechTextAnalyticsApi#deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId) | **DELETE** /api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId} | Delete a Speech and Text Analytics DictionaryFeedback by Id
[**deleteSpeechandtextanalyticsProgram**](SpeechTextAnalyticsApi#deleteSpeechandtextanalyticsProgram) | **DELETE** /api/v2/speechandtextanalytics/programs/{programId} | Delete a Speech and Text Analytics program by id
[**deleteSpeechandtextanalyticsReprocessingJob**](SpeechTextAnalyticsApi#deleteSpeechandtextanalyticsReprocessingJob) | **DELETE** /api/v2/speechandtextanalytics/reprocessing/jobs/{jobId} | Delete a Speech and Text Analytics Reprocessing job by Id
[**deleteSpeechandtextanalyticsSentimentfeedback**](SpeechTextAnalyticsApi#deleteSpeechandtextanalyticsSentimentfeedback) | **DELETE** /api/v2/speechandtextanalytics/sentimentfeedback | Delete All Speech and Text Analytics SentimentFeedback
[**deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId**](SpeechTextAnalyticsApi#deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId) | **DELETE** /api/v2/speechandtextanalytics/sentimentfeedback/{sentimentFeedbackId} | Delete a Speech and Text Analytics SentimentFeedback by Id
[**deleteSpeechandtextanalyticsTopic**](SpeechTextAnalyticsApi#deleteSpeechandtextanalyticsTopic) | **DELETE** /api/v2/speechandtextanalytics/topics/{topicId} | Delete a Speech and Text Analytics topic by id
[**getSpeechandtextanalyticsCategories**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsCategories) | **GET** /api/v2/speechandtextanalytics/categories | Get the list of Speech and Text Analytics categories
[**getSpeechandtextanalyticsCategory**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsCategory) | **GET** /api/v2/speechandtextanalytics/categories/{categoryId} | Get a Speech and Text Analytics Category by ID
[**getSpeechandtextanalyticsConversation**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsConversation) | **GET** /api/v2/speechandtextanalytics/conversations/{conversationId} | Get Speech and Text Analytics for a specific conversation
[**getSpeechandtextanalyticsConversationCategories**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsConversationCategories) | **GET** /api/v2/speechandtextanalytics/conversations/{conversationId}/categories | Get the list of detected Speech and Text Analytics categories of conversation
[**getSpeechandtextanalyticsConversationCommunicationTranscripturl**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsConversationCommunicationTranscripturl) | **GET** /api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturl | Get the pre-signed S3 URL for the transcript of a specific communication of a conversation
[**getSpeechandtextanalyticsConversationCommunicationTranscripturls**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsConversationCommunicationTranscripturls) | **GET** /api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturls | Get the list of pre-signed S3 URL for the transcripts of a specific communication of a conversation
[**getSpeechandtextanalyticsConversationSentiments**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsConversationSentiments) | **GET** /api/v2/speechandtextanalytics/conversations/{conversationId}/sentiments | Get sentiment data
[**getSpeechandtextanalyticsConversationSummaries**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsConversationSummaries) | **GET** /api/v2/speechandtextanalytics/conversations/{conversationId}/summaries | Get conversation summaries by conversation id.
[**getSpeechandtextanalyticsDictionaryfeedback**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsDictionaryfeedback) | **GET** /api/v2/speechandtextanalytics/dictionaryfeedback | Get the list of Speech and Text Analytics dictionary feedbacks
[**getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId) | **GET** /api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId} | Get a Speech and Text Analytics dictionary feedback by id
[**getSpeechandtextanalyticsProgram**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgram) | **GET** /api/v2/speechandtextanalytics/programs/{programId} | Get a Speech and Text Analytics program by id
[**getSpeechandtextanalyticsProgramMappings**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgramMappings) | **GET** /api/v2/speechandtextanalytics/programs/{programId}/mappings | Get Speech and Text Analytics program mappings to queues and flows by id
[**getSpeechandtextanalyticsProgramSettingsInsights**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgramSettingsInsights) | **GET** /api/v2/speechandtextanalytics/programs/{programId}/settings/insights | Get AI Insights settings of a program
[**getSpeechandtextanalyticsProgramTranscriptionengines**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgramTranscriptionengines) | **GET** /api/v2/speechandtextanalytics/programs/{programId}/transcriptionengines | Get transcription engine settings of a program
[**getSpeechandtextanalyticsPrograms**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsPrograms) | **GET** /api/v2/speechandtextanalytics/programs | Get the list of Speech and Text Analytics programs
[**getSpeechandtextanalyticsProgramsGeneralJob**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgramsGeneralJob) | **GET** /api/v2/speechandtextanalytics/programs/general/jobs/{jobId} | Get a Speech and Text Analytics general program job by id
[**getSpeechandtextanalyticsProgramsMappings**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgramsMappings) | **GET** /api/v2/speechandtextanalytics/programs/mappings | Get the list of Speech and Text Analytics programs mappings to queues and flows
[**getSpeechandtextanalyticsProgramsPublishjob**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgramsPublishjob) | **GET** /api/v2/speechandtextanalytics/programs/publishjobs/{jobId} | Get a Speech and Text Analytics publish programs job by id
[**getSpeechandtextanalyticsProgramsSettingsInsights**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgramsSettingsInsights) | **GET** /api/v2/speechandtextanalytics/programs/settings/insights | Get the list of program AI Insights settings for the organization
[**getSpeechandtextanalyticsProgramsTopiclinksJob**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgramsTopiclinksJob) | **GET** /api/v2/speechandtextanalytics/programs/topiclinks/jobs/{jobId} | Get a Speech and Text Analytics program-topic links job by id
[**getSpeechandtextanalyticsProgramsTranscriptionenginesDialects**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgramsTranscriptionenginesDialects) | **GET** /api/v2/speechandtextanalytics/programs/transcriptionengines/dialects | Get supported dialects for each transcription engine
[**getSpeechandtextanalyticsProgramsUnpublished**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsProgramsUnpublished) | **GET** /api/v2/speechandtextanalytics/programs/unpublished | Get the list of Speech and Text Analytics unpublished programs
[**getSpeechandtextanalyticsReprocessingJob**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsReprocessingJob) | **GET** /api/v2/speechandtextanalytics/reprocessing/jobs/{jobId} | Get a Speech and Text Analytics reprocess job by id
[**getSpeechandtextanalyticsReprocessingJobInteractions**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsReprocessingJobInteractions) | **GET** /api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}/interactions | Get a Speech and Text Analytics Reprocessing interactions statuses by job id
[**getSpeechandtextanalyticsReprocessingJobs**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsReprocessingJobs) | **GET** /api/v2/speechandtextanalytics/reprocessing/jobs | Get the list of Speech and Text Analytics reprocess jobs
[**getSpeechandtextanalyticsSentimentDialects**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsSentimentDialects) | **GET** /api/v2/speechandtextanalytics/sentiment/dialects | Get the list of Speech and Text Analytics sentiment supported dialects
[**getSpeechandtextanalyticsSentimentfeedback**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsSentimentfeedback) | **GET** /api/v2/speechandtextanalytics/sentimentfeedback | Get the list of Speech and Text Analytics SentimentFeedback
[**getSpeechandtextanalyticsSettings**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsSettings) | **GET** /api/v2/speechandtextanalytics/settings | Get Speech And Text Analytics Settings
[**getSpeechandtextanalyticsTopic**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsTopic) | **GET** /api/v2/speechandtextanalytics/topics/{topicId} | Get a Speech and Text Analytics topic by id
[**getSpeechandtextanalyticsTopics**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsTopics) | **GET** /api/v2/speechandtextanalytics/topics | Get the list of Speech and Text Analytics topics
[**getSpeechandtextanalyticsTopicsDialects**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsTopicsDialects) | **GET** /api/v2/speechandtextanalytics/topics/dialects | Get list of supported Speech and Text Analytics topics dialects
[**getSpeechandtextanalyticsTopicsGeneral**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsTopicsGeneral) | **GET** /api/v2/speechandtextanalytics/topics/general | Get the Speech and Text Analytics general topics for a given dialect
[**getSpeechandtextanalyticsTopicsGeneralStatus**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsTopicsGeneralStatus) | **GET** /api/v2/speechandtextanalytics/topics/general/status | Get the list of general topics from the org and the system with their current status
[**getSpeechandtextanalyticsTopicsGeneratedphrasesJob**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsTopicsGeneratedphrasesJob) | **GET** /api/v2/speechandtextanalytics/topics/generatedphrases/jobs/{jobId} | Get a Speech and Text Analytics GenAI phrases job by id
[**getSpeechandtextanalyticsTopicsPublishjob**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsTopicsPublishjob) | **GET** /api/v2/speechandtextanalytics/topics/publishjobs/{jobId} | Get a Speech and Text Analytics publish topics job by id
[**getSpeechandtextanalyticsTopicsTestphraseJob**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsTopicsTestphraseJob) | **GET** /api/v2/speechandtextanalytics/topics/testphrase/jobs/{jobId} | Get a Speech and Text Analytics test topics phrase job by id
[**getSpeechandtextanalyticsTranslationsLanguageConversation**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsTranslationsLanguageConversation) | **GET** /api/v2/speechandtextanalytics/translations/languages/{languageId}/conversations/{conversationId} | Translate a single interaction recording (or an email conversation)
[**getSpeechandtextanalyticsTranslationsLanguages**](SpeechTextAnalyticsApi#getSpeechandtextanalyticsTranslationsLanguages) | **GET** /api/v2/speechandtextanalytics/translations/languages | Get supported translation languages
[**patchSpeechandtextanalyticsSettings**](SpeechTextAnalyticsApi#patchSpeechandtextanalyticsSettings) | **PATCH** /api/v2/speechandtextanalytics/settings | Patch Speech And Text Analytics Settings
[**postSpeechandtextanalyticsCategories**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsCategories) | **POST** /api/v2/speechandtextanalytics/categories | Create new Speech and Text Analytics category
[**postSpeechandtextanalyticsDictionaryfeedback**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsDictionaryfeedback) | **POST** /api/v2/speechandtextanalytics/dictionaryfeedback | Create a Speech and Text Analytics DictionaryFeedback
[**postSpeechandtextanalyticsPrograms**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsPrograms) | **POST** /api/v2/speechandtextanalytics/programs | Create new Speech and Text Analytics program
[**postSpeechandtextanalyticsProgramsGeneralJobs**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsProgramsGeneralJobs) | **POST** /api/v2/speechandtextanalytics/programs/general/jobs | Create new Speech and Text Analytics general program job
[**postSpeechandtextanalyticsProgramsPublishjobs**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsProgramsPublishjobs) | **POST** /api/v2/speechandtextanalytics/programs/publishjobs | Create new Speech and Text Analytics publish programs job
[**postSpeechandtextanalyticsReprocessingJobs**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsReprocessingJobs) | **POST** /api/v2/speechandtextanalytics/reprocessing/jobs | Create a Speech and Text Analytics reprocess job.
[**postSpeechandtextanalyticsSentimentfeedback**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsSentimentfeedback) | **POST** /api/v2/speechandtextanalytics/sentimentfeedback | Create a Speech and Text Analytics SentimentFeedback
[**postSpeechandtextanalyticsTopics**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsTopics) | **POST** /api/v2/speechandtextanalytics/topics | Create new Speech and Text Analytics topic
[**postSpeechandtextanalyticsTopicsGeneratedphrasesJobs**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsTopicsGeneratedphrasesJobs) | **POST** /api/v2/speechandtextanalytics/topics/generatedphrases/jobs | Create new Speech and Text Analytics GenAI topic phrases generation job
[**postSpeechandtextanalyticsTopicsPublishjobs**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsTopicsPublishjobs) | **POST** /api/v2/speechandtextanalytics/topics/publishjobs | Create new Speech and Text Analytics publish topics job
[**postSpeechandtextanalyticsTopicsTestphraseJobs**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsTopicsTestphraseJobs) | **POST** /api/v2/speechandtextanalytics/topics/testphrase/jobs | Create new Speech and Text Analytics test topic phrase job
[**postSpeechandtextanalyticsTranscriptsSearch**](SpeechTextAnalyticsApi#postSpeechandtextanalyticsTranscriptsSearch) | **POST** /api/v2/speechandtextanalytics/transcripts/search | Search resources.
[**putSpeechandtextanalyticsCategory**](SpeechTextAnalyticsApi#putSpeechandtextanalyticsCategory) | **PUT** /api/v2/speechandtextanalytics/categories/{categoryId} | Update a Speech and Text Analytics category by ID
[**putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId**](SpeechTextAnalyticsApi#putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId) | **PUT** /api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId} | Update existing Speech and Text Analytics dictionary feedback by id
[**putSpeechandtextanalyticsProgram**](SpeechTextAnalyticsApi#putSpeechandtextanalyticsProgram) | **PUT** /api/v2/speechandtextanalytics/programs/{programId} | Update existing Speech and Text Analytics program
[**putSpeechandtextanalyticsProgramMappings**](SpeechTextAnalyticsApi#putSpeechandtextanalyticsProgramMappings) | **PUT** /api/v2/speechandtextanalytics/programs/{programId}/mappings | Set Speech and Text Analytics program mappings to queues and flows
[**putSpeechandtextanalyticsProgramSettingsInsights**](SpeechTextAnalyticsApi#putSpeechandtextanalyticsProgramSettingsInsights) | **PUT** /api/v2/speechandtextanalytics/programs/{programId}/settings/insights | Update AI Insights settings of a program
[**putSpeechandtextanalyticsProgramTranscriptionengines**](SpeechTextAnalyticsApi#putSpeechandtextanalyticsProgramTranscriptionengines) | **PUT** /api/v2/speechandtextanalytics/programs/{programId}/transcriptionengines | Update transcription engine settings of a program
[**putSpeechandtextanalyticsSettings**](SpeechTextAnalyticsApi#putSpeechandtextanalyticsSettings) | **PUT** /api/v2/speechandtextanalytics/settings | Update Speech And Text Analytics Settings
[**putSpeechandtextanalyticsTopic**](SpeechTextAnalyticsApi#putSpeechandtextanalyticsTopic) | **PUT** /api/v2/speechandtextanalytics/topics/{topicId} | Update existing Speech and Text Analytics topic



## deleteSpeechandtextanalyticsCategory

> void deleteSpeechandtextanalyticsCategory(categoryId, opts)


DELETE /api/v2/speechandtextanalytics/categories/{categoryId}

Delete a Speech and Text Analytics category by ID

Requires ALL permissions:

* speechAndTextAnalytics:category:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let categoryId = "categoryId_example"; // String | The id of the category
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteSpeechandtextanalyticsCategory(categoryId, opts)
  .then(() => {
    console.log('deleteSpeechandtextanalyticsCategory returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSpeechandtextanalyticsCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | The id of the category |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId

> void deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(dictionaryFeedbackId, opts)


DELETE /api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId}

Delete a Speech and Text Analytics DictionaryFeedback by Id

Requires ALL permissions:

* speechAndTextAnalytics:dictionaryterm:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let dictionaryFeedbackId = "dictionaryFeedbackId_example"; // String | The Id of the Dictionary Feedback
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(dictionaryFeedbackId, opts)
  .then(() => {
    console.log('deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dictionaryFeedbackId** | **String** | The Id of the Dictionary Feedback |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteSpeechandtextanalyticsProgram

> DeleteProgramResponse deleteSpeechandtextanalyticsProgram(programId, opts)


DELETE /api/v2/speechandtextanalytics/programs/{programId}

Delete a Speech and Text Analytics program by id

Requires ALL permissions:

* speechAndTextAnalytics:program:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let programId = "programId_example"; // String | The id of the program
let opts = { 
  'forceDelete': false, // Boolean | Indicates whether the program is forced to be deleted or not. Required when the program to delete is the default program.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteSpeechandtextanalyticsProgram(programId, opts)
  .then((data) => {
    console.log(`deleteSpeechandtextanalyticsProgram success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSpeechandtextanalyticsProgram');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | The id of the program |  |
 **forceDelete** | **Boolean** | Indicates whether the program is forced to be deleted or not. Required when the program to delete is the default program. | [optional] [default to false]<br />**Values**: true, false |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DeleteProgramResponse**


## deleteSpeechandtextanalyticsReprocessingJob

> void deleteSpeechandtextanalyticsReprocessingJob(jobId, opts)


DELETE /api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}

Delete a Speech and Text Analytics Reprocessing job by Id

deleteSpeechandtextanalyticsReprocessingJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* speechAndTextAnalytics:reprocessInteractions:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let jobId = "jobId_example"; // String | The Id of the Reprocessing job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteSpeechandtextanalyticsReprocessingJob(jobId, opts)
  .then(() => {
    console.log('deleteSpeechandtextanalyticsReprocessingJob returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSpeechandtextanalyticsReprocessingJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The Id of the Reprocessing job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteSpeechandtextanalyticsSentimentfeedback

> void deleteSpeechandtextanalyticsSentimentfeedback(opts)


DELETE /api/v2/speechandtextanalytics/sentimentfeedback

Delete All Speech and Text Analytics SentimentFeedback

Requires ALL permissions:

* speechAndTextAnalytics:feedback:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteSpeechandtextanalyticsSentimentfeedback(opts)
  .then(() => {
    console.log('deleteSpeechandtextanalyticsSentimentfeedback returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSpeechandtextanalyticsSentimentfeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId

> void deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId(sentimentFeedbackId, opts)


DELETE /api/v2/speechandtextanalytics/sentimentfeedback/{sentimentFeedbackId}

Delete a Speech and Text Analytics SentimentFeedback by Id

Requires ALL permissions:

* speechAndTextAnalytics:feedback:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let sentimentFeedbackId = "sentimentFeedbackId_example"; // String | The Id of the SentimentFeedback
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId(sentimentFeedbackId, opts)
  .then(() => {
    console.log('deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSpeechandtextanalyticsSentimentfeedbackSentimentFeedbackId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **sentimentFeedbackId** | **String** | The Id of the SentimentFeedback |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## deleteSpeechandtextanalyticsTopic

> void deleteSpeechandtextanalyticsTopic(topicId, opts)


DELETE /api/v2/speechandtextanalytics/topics/{topicId}

Delete a Speech and Text Analytics topic by id

Requires ALL permissions:

* speechAndTextAnalytics:topic:delete

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let topicId = "topicId_example"; // String | The id of the topic
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.deleteSpeechandtextanalyticsTopic(topicId, opts)
  .then(() => {
    console.log('deleteSpeechandtextanalyticsTopic returned successfully.');
  })
  .catch((err) => {
    console.log('There was a failure calling deleteSpeechandtextanalyticsTopic');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | The id of the topic |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

void (no response body)


## getSpeechandtextanalyticsCategories

> CategoriesEntityListing getSpeechandtextanalyticsCategories(opts)


GET /api/v2/speechandtextanalytics/categories

Get the list of Speech and Text Analytics categories

Requires ALL permissions:

* speechAndTextAnalytics:category:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'pageSize': 25, // Number | The page size for the listing. The max that will be returned is 25.
  'pageNumber': 1, // Number | The page number for the listing
  'name': "name_example", // String | The category name filter applied to the listing
  'sortOrder': "asc", // String | The sort order for the listing
  'sortBy': "name", // String | The field to sort by for the listing
  'ids': ["ids_example"], // [String] | Comma separated Category IDs to filter by. Cannot be used with other filters. Maximum of 25 IDs allowed.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsCategories(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The page size for the listing. The max that will be returned is 25. | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number for the listing | [optional] [default to 1] |
 **name** | **String** | The category name filter applied to the listing | [optional]  |
 **sortOrder** | **String** | The sort order for the listing | [optional] [default to asc]<br />**Values**: asc, desc |
 **sortBy** | **String** | The field to sort by for the listing | [optional] [default to name]<br />**Values**: name, description |
 **ids** | **[String]** | Comma separated Category IDs to filter by. Cannot be used with other filters. Maximum of 25 IDs allowed. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CategoriesEntityListing**


## getSpeechandtextanalyticsCategory

> StaCategory getSpeechandtextanalyticsCategory(categoryId, opts)


GET /api/v2/speechandtextanalytics/categories/{categoryId}

Get a Speech and Text Analytics Category by ID

Requires ALL permissions:

* speechAndTextAnalytics:category:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let categoryId = "categoryId_example"; // String | The id of the category
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsCategory(categoryId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | The id of the category |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**StaCategory**


## getSpeechandtextanalyticsConversation

> ConversationMetrics getSpeechandtextanalyticsConversation(conversationId, opts)


GET /api/v2/speechandtextanalytics/conversations/{conversationId}

Get Speech and Text Analytics for a specific conversation

Requires ALL permissions:

* recording:recording:view
* speechAndTextAnalytics:data:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let conversationId = "conversationId_example"; // String | Conversation Id
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsConversation(conversationId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ConversationMetrics**


## getSpeechandtextanalyticsConversationCategories

> ConversationCategoriesEntityListing getSpeechandtextanalyticsConversationCategories(conversationId, opts)


GET /api/v2/speechandtextanalytics/conversations/{conversationId}/categories

Get the list of detected Speech and Text Analytics categories of conversation

Requires ALL permissions:

* speechAndTextAnalytics:data:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let conversationId = "conversationId_example"; // String | The id of the conversation
let opts = { 
  'pageSize': 25, // Number | The page size for the listing. The max that will be returned is 50.
  'pageNumber': 1, // Number | The page number for the listing
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsConversationCategories(conversationId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsConversationCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsConversationCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | The id of the conversation |  |
 **pageSize** | **Number** | The page size for the listing. The max that will be returned is 50. | [optional] [default to 25] |
 **pageNumber** | **Number** | The page number for the listing | [optional] [default to 1] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ConversationCategoriesEntityListing**


## getSpeechandtextanalyticsConversationCommunicationTranscripturl

> TranscriptUrl getSpeechandtextanalyticsConversationCommunicationTranscripturl(conversationId, communicationId, opts)


GET /api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturl

Get the pre-signed S3 URL for the transcript of a specific communication of a conversation

Requires ALL permissions:

* recording:recording:view
* speechAndTextAnalytics:data:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let communicationId = "communicationId_example"; // String | Communication ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsConversationCommunicationTranscripturl(conversationId, communicationId, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TranscriptUrl**


## getSpeechandtextanalyticsConversationCommunicationTranscripturls

> TranscriptUrls getSpeechandtextanalyticsConversationCommunicationTranscripturls(conversationId, communicationId, opts)


GET /api/v2/speechandtextanalytics/conversations/{conversationId}/communications/{communicationId}/transcripturls

Get the list of pre-signed S3 URL for the transcripts of a specific communication of a conversation

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

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let conversationId = "conversationId_example"; // String | Conversation ID
let communicationId = "communicationId_example"; // String | Communication ID
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsConversationCommunicationTranscripturls(conversationId, communicationId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsConversationCommunicationTranscripturls success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsConversationCommunicationTranscripturls');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | Conversation ID |  |
 **communicationId** | **String** | Communication ID |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TranscriptUrls**


## getSpeechandtextanalyticsConversationSentiments

> SentimentData getSpeechandtextanalyticsConversationSentiments(conversationId, opts)


GET /api/v2/speechandtextanalytics/conversations/{conversationId}/sentiments

Get sentiment data

Requires ALL permissions:

* speechAndTextAnalytics:sentimentData:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let conversationId = "conversationId_example"; // String | The conversation ID of the sentiment data
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsConversationSentiments(conversationId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsConversationSentiments success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsConversationSentiments');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | The conversation ID of the sentiment data |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SentimentData**


## getSpeechandtextanalyticsConversationSummaries

> SpeechTextAnalyticsConversationSummaryListing getSpeechandtextanalyticsConversationSummaries(conversationId, opts)


GET /api/v2/speechandtextanalytics/conversations/{conversationId}/summaries

Get conversation summaries by conversation id.

Requires ALL permissions:

* speechAndTextAnalytics:aiSummary:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let conversationId = "conversationId_example"; // String | The conversation ID of the summaries
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsConversationSummaries(conversationId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsConversationSummaries success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsConversationSummaries');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **conversationId** | **String** | The conversation ID of the summaries |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SpeechTextAnalyticsConversationSummaryListing**


## getSpeechandtextanalyticsDictionaryfeedback

> DictionaryFeedbackEntityListing getSpeechandtextanalyticsDictionaryfeedback(opts)


GET /api/v2/speechandtextanalytics/dictionaryfeedback

Get the list of Speech and Text Analytics dictionary feedbacks

Requires ALL permissions:

* speechAndTextAnalytics:dictionaryterm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'dialect': en-US, // String | The key for filter the listing by dialect, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard
  'transcriptionEngine': "transcriptionEngine_example", // String | Filter by transcription engine, If not provided, all transcription engines will be considered
  'nextPage': "nextPage_example", // String | The key for listing the next page
  'pageSize': 500, // Number | The page size for the listing. Default is 500 per page. Note: organizations may store up to 1000 dictionary terms per dialect; use nextPage to paginate beyond the first page when listing a full dialect vocabulary.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsDictionaryfeedback(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsDictionaryfeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsDictionaryfeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dialect** | **String** | The key for filter the listing by dialect, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard | [optional]  |
 **transcriptionEngine** | **String** | Filter by transcription engine, If not provided, all transcription engines will be considered | [optional] <br />**Values**: Genesys, GenesysExtended |
 **nextPage** | **String** | The key for listing the next page | [optional]  |
 **pageSize** | **Number** | The page size for the listing. Default is 500 per page. Note: organizations may store up to 1000 dictionary terms per dialect; use nextPage to paginate beyond the first page when listing a full dialect vocabulary. | [optional] [default to 500] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DictionaryFeedbackEntityListing**


## getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId

> DictionaryFeedback getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(dictionaryFeedbackId, opts)


GET /api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId}

Get a Speech and Text Analytics dictionary feedback by id

Requires ALL permissions:

* speechAndTextAnalytics:dictionaryterm:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let dictionaryFeedbackId = "dictionaryFeedbackId_example"; // String | The Id of the Dictionary Feedback
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(dictionaryFeedbackId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dictionaryFeedbackId** | **String** | The Id of the Dictionary Feedback |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DictionaryFeedback**


## getSpeechandtextanalyticsProgram

> Program getSpeechandtextanalyticsProgram(programId, opts)


GET /api/v2/speechandtextanalytics/programs/{programId}

Get a Speech and Text Analytics program by id

Requires ALL permissions:

* speechAndTextAnalytics:program:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let programId = "programId_example"; // String | The id of the program
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgram(programId, opts)
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
 **programId** | **String** | The id of the program |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Program**


## getSpeechandtextanalyticsProgramMappings

> TopicsDefinitionsProgramMappings getSpeechandtextanalyticsProgramMappings(programId, opts)


GET /api/v2/speechandtextanalytics/programs/{programId}/mappings

Get Speech and Text Analytics program mappings to queues and flows by id

Requires ALL permissions:

* speechAndTextAnalytics:program:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let programId = "programId_example"; // String | The id of the program
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgramMappings(programId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgramMappings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgramMappings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | The id of the program |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TopicsDefinitionsProgramMappings**


## getSpeechandtextanalyticsProgramSettingsInsights

> ProgramInsightsSettings getSpeechandtextanalyticsProgramSettingsInsights(programId, opts)


GET /api/v2/speechandtextanalytics/programs/{programId}/settings/insights

Get AI Insights settings of a program

Requires ALL permissions:

* speechAndTextAnalytics:program:view
* speechAndTextAnalytics:insightsSettings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let programId = "programId_example"; // String | The id of the program
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgramSettingsInsights(programId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgramSettingsInsights success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgramSettingsInsights');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | The id of the program |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ProgramInsightsSettings**


## getSpeechandtextanalyticsProgramTranscriptionengines

> ProgramTranscriptionEngines getSpeechandtextanalyticsProgramTranscriptionengines(programId, opts)


GET /api/v2/speechandtextanalytics/programs/{programId}/transcriptionengines

Get transcription engine settings of a program

Requires ALL permissions:

* speechAndTextAnalytics:program:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let programId = "programId_example"; // String | The id of the program
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgramTranscriptionengines(programId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgramTranscriptionengines success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgramTranscriptionengines');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | The id of the program |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ProgramTranscriptionEngines**


## getSpeechandtextanalyticsPrograms

> ProgramsEntityListing getSpeechandtextanalyticsPrograms(opts)


GET /api/v2/speechandtextanalytics/programs

Get the list of Speech and Text Analytics programs

Requires ALL permissions:

* speechAndTextAnalytics:program:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'nextPage': "nextPage_example", // String | The key for listing the next page
  'pageSize': 20, // Number | The page size for the listing
  'state': "state_example", // String | Program state. Defaults to Latest
  'name': "name_example", // String | Case insensitive partial name to filter by
  'ids': ["ids_example"], // [String] | Comma separated Program IDs to filter by. Cannot be used with pagination params. Maximum of 50 IDs allowed.
  'sortBy': "sortBy_example", // String | Sort results by. Defaults to name
  'sortOrder': "sortOrder_example", // String | Sort order. Defaults to asc
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsPrograms(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsPrograms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsPrograms');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nextPage** | **String** | The key for listing the next page | [optional]  |
 **pageSize** | **Number** | The page size for the listing | [optional] [default to 20] |
 **state** | **String** | Program state. Defaults to Latest | [optional] <br />**Values**: Latest, Published |
 **name** | **String** | Case insensitive partial name to filter by | [optional]  |
 **ids** | **[String]** | Comma separated Program IDs to filter by. Cannot be used with pagination params. Maximum of 50 IDs allowed. | [optional]  |
 **sortBy** | **String** | Sort results by. Defaults to name | [optional] <br />**Values**: name |
 **sortOrder** | **String** | Sort order. Defaults to asc | [optional] <br />**Values**: asc, desc |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ProgramsEntityListing**


## getSpeechandtextanalyticsProgramsGeneralJob

> GeneralProgramJob getSpeechandtextanalyticsProgramsGeneralJob(jobId, opts)


GET /api/v2/speechandtextanalytics/programs/general/jobs/{jobId}

Get a Speech and Text Analytics general program job by id

Requires ALL permissions:

* speechAndTextAnalytics:program:add
* speechAndTextAnalytics:program:edit
* speechAndTextAnalytics:topic:add
* speechAndTextAnalytics:topic:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let jobId = "jobId_example"; // String | The id of the publish programs job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgramsGeneralJob(jobId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgramsGeneralJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgramsGeneralJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The id of the publish programs job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GeneralProgramJob**


## getSpeechandtextanalyticsProgramsMappings

> TopicsDefinitionsProgramsMappingsEntityListing getSpeechandtextanalyticsProgramsMappings(opts)


GET /api/v2/speechandtextanalytics/programs/mappings

Get the list of Speech and Text Analytics programs mappings to queues and flows

Requires ALL permissions:

* speechAndTextAnalytics:program:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'nextPage': "nextPage_example", // String | The key for listing the next page
  'pageSize': 20, // Number | The page size for the listing
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgramsMappings(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgramsMappings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgramsMappings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nextPage** | **String** | The key for listing the next page | [optional]  |
 **pageSize** | **Number** | The page size for the listing | [optional] [default to 20] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TopicsDefinitionsProgramsMappingsEntityListing**


## getSpeechandtextanalyticsProgramsPublishjob

> ProgramJob getSpeechandtextanalyticsProgramsPublishjob(jobId, opts)


GET /api/v2/speechandtextanalytics/programs/publishjobs/{jobId}

Get a Speech and Text Analytics publish programs job by id

Requires ALL permissions:

* speechAndTextAnalytics:program:publish

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let jobId = "jobId_example"; // String | The id of the publish programs job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgramsPublishjob(jobId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgramsPublishjob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgramsPublishjob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The id of the publish programs job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ProgramJob**


## getSpeechandtextanalyticsProgramsSettingsInsights

> ProgramInsightsSettingsEntityListing getSpeechandtextanalyticsProgramsSettingsInsights(opts)


GET /api/v2/speechandtextanalytics/programs/settings/insights

Get the list of program AI Insights settings for the organization

Requires ALL permissions:

* speechAndTextAnalytics:program:view
* speechAndTextAnalytics:insightsSettings:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'pageSize': 100, // Number | The page size for the listing. The max that will be returned is 100.
  'pageNumber': 1, // Number | The page number for the listing
  'programIds': ["programIds_example"], // [String] | Comma separated Program IDs to filter by. Maximum of 50 IDs allowed.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgramsSettingsInsights(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgramsSettingsInsights success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgramsSettingsInsights');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The page size for the listing. The max that will be returned is 100. | [optional] [default to 100] |
 **pageNumber** | **Number** | The page number for the listing | [optional] [default to 1] |
 **programIds** | **[String]** | Comma separated Program IDs to filter by. Maximum of 50 IDs allowed. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ProgramInsightsSettingsEntityListing**


## getSpeechandtextanalyticsProgramsTopiclinksJob

> ProgramTopicLinksJob getSpeechandtextanalyticsProgramsTopiclinksJob(jobId, opts)


GET /api/v2/speechandtextanalytics/programs/topiclinks/jobs/{jobId}

Get a Speech and Text Analytics program-topic links job by id

Requires ALL permissions:

* speechAndTextAnalytics:program:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let jobId = "jobId_example"; // String | The id of the program-topic links job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgramsTopiclinksJob(jobId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgramsTopiclinksJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgramsTopiclinksJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The id of the program-topic links job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ProgramTopicLinksJob**


## getSpeechandtextanalyticsProgramsTranscriptionenginesDialects

> SupportedDialectsEntityListing getSpeechandtextanalyticsProgramsTranscriptionenginesDialects(opts)


GET /api/v2/speechandtextanalytics/programs/transcriptionengines/dialects

Get supported dialects for each transcription engine

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgramsTranscriptionenginesDialects(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgramsTranscriptionenginesDialects success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgramsTranscriptionenginesDialects');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SupportedDialectsEntityListing**


## getSpeechandtextanalyticsProgramsUnpublished

> UnpublishedProgramsEntityListing getSpeechandtextanalyticsProgramsUnpublished(opts)


GET /api/v2/speechandtextanalytics/programs/unpublished

Get the list of Speech and Text Analytics unpublished programs

Requires ALL permissions:

* speechAndTextAnalytics:program:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'nextPage': "nextPage_example", // String | The key for listing the next page
  'pageSize': 20, // Number | The page size for the listing
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsProgramsUnpublished(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsProgramsUnpublished success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsProgramsUnpublished');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nextPage** | **String** | The key for listing the next page | [optional]  |
 **pageSize** | **Number** | The page size for the listing | [optional] [default to 20] |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UnpublishedProgramsEntityListing**


## getSpeechandtextanalyticsReprocessingJob

> ReprocessJobResponse getSpeechandtextanalyticsReprocessingJob(jobId, opts)


GET /api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}

Get a Speech and Text Analytics reprocess job by id

getSpeechandtextanalyticsReprocessingJob is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* speechAndTextAnalytics:reprocessInteractions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let jobId = "jobId_example"; // String | The Id of the Reprocessing job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsReprocessingJob(jobId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsReprocessingJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsReprocessingJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The Id of the Reprocessing job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ReprocessJobResponse**


## getSpeechandtextanalyticsReprocessingJobInteractions

> ReprocessInteractionsByJobIdResponse getSpeechandtextanalyticsReprocessingJobInteractions(jobId, opts)


GET /api/v2/speechandtextanalytics/reprocessing/jobs/{jobId}/interactions

Get a Speech and Text Analytics Reprocessing interactions statuses by job id

getSpeechandtextanalyticsReprocessingJobInteractions is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* speechAndTextAnalytics:reprocessInteractions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let jobId = "jobId_example"; // String | The Id of the Reprocessing job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsReprocessingJobInteractions(jobId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsReprocessingJobInteractions success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsReprocessingJobInteractions');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The Id of the Reprocessing job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ReprocessInteractionsByJobIdResponse**


## getSpeechandtextanalyticsReprocessingJobs

> ReprocessJobEntityListingResponse getSpeechandtextanalyticsReprocessingJobs(opts)


GET /api/v2/speechandtextanalytics/reprocessing/jobs

Get the list of Speech and Text Analytics reprocess jobs

getSpeechandtextanalyticsReprocessingJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* speechAndTextAnalytics:reprocessInteractions:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'pageSize': 3.4, // Number | The page size for the listing. The max that will be returned is 100. Default is 25.
  'pageNumber': 3.4, // Number | The page number for the listing. Defaults to 1.
  'sortOrder': "sortOrder_example", // String | Results are sorted by dateCreated. Please choose the sort order. The default is descending (desc).
  'name': "name_example", // String | Case insensitive partial name to filter by.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsReprocessingJobs(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsReprocessingJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsReprocessingJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **pageSize** | **Number** | The page size for the listing. The max that will be returned is 100. Default is 25. | [optional]  |
 **pageNumber** | **Number** | The page number for the listing. Defaults to 1. | [optional]  |
 **sortOrder** | **String** | Results are sorted by dateCreated. Please choose the sort order. The default is descending (desc). | [optional] <br />**Values**: asc, desc |
 **name** | **String** | Case insensitive partial name to filter by. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ReprocessJobEntityListingResponse**


## getSpeechandtextanalyticsSentimentDialects

> EntityListing getSpeechandtextanalyticsSentimentDialects(opts)


GET /api/v2/speechandtextanalytics/sentiment/dialects

Get the list of Speech and Text Analytics sentiment supported dialects

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsSentimentDialects(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsSentimentDialects success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsSentimentDialects');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EntityListing**


## getSpeechandtextanalyticsSentimentfeedback

> SentimentFeedbackEntityListing getSpeechandtextanalyticsSentimentfeedback(opts)


GET /api/v2/speechandtextanalytics/sentimentfeedback

Get the list of Speech and Text Analytics SentimentFeedback

Requires ALL permissions:

* speechAndTextAnalytics:feedback:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'dialect': en-US, // String | The key for filter the listing by dialect, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsSentimentfeedback(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsSentimentfeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsSentimentfeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dialect** | **String** | The key for filter the listing by dialect, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SentimentFeedbackEntityListing**


## getSpeechandtextanalyticsSettings

> SpeechTextAnalyticsSettingsResponse getSpeechandtextanalyticsSettings(opts)


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

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsSettings(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SpeechTextAnalyticsSettingsResponse**


## getSpeechandtextanalyticsTopic

> Topic getSpeechandtextanalyticsTopic(topicId, opts)


GET /api/v2/speechandtextanalytics/topics/{topicId}

Get a Speech and Text Analytics topic by id

Requires ALL permissions:

* speechAndTextAnalytics:topic:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let topicId = "topicId_example"; // String | The id of the topic
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsTopic(topicId, opts)
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
 **topicId** | **String** | The id of the topic |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Topic**


## getSpeechandtextanalyticsTopics

> TopicsEntityListing getSpeechandtextanalyticsTopics(opts)


GET /api/v2/speechandtextanalytics/topics

Get the list of Speech and Text Analytics topics

Requires ALL permissions:

* speechAndTextAnalytics:topic:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'nextPage': "nextPage_example", // String | The key for listing the next page
  'pageSize': 20, // Number | The page size for the listing. The max that will be returned is 500.
  'pageNumber': 3.4, // Number | The page number for the listing
  'state': "state_example", // String | Topic state. Defaults to latest
  'name': "name_example", // String | Case insensitive partial name to filter by
  'ids': ["ids_example"], // [String] | Comma separated Topic IDs to filter by. Cannot be used with other filters. Maximum of 50 IDs allowed.
  'dialects': ["dialects_example"], // [String] | Comma separated dialect strings to filter by. Maximum of 15 dialects allowed.
  'sortBy': "sortBy_example", // String | Sort results by. Defaults to name
  'sortOrder': "sortOrder_example", // String | Sort order. Defaults to asc
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsTopics(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsTopics success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsTopics');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **nextPage** | **String** | The key for listing the next page | [optional]  |
 **pageSize** | **Number** | The page size for the listing. The max that will be returned is 500. | [optional] [default to 20] |
 **pageNumber** | **Number** | The page number for the listing | [optional]  |
 **state** | **String** | Topic state. Defaults to latest | [optional] <br />**Values**: latest, published |
 **name** | **String** | Case insensitive partial name to filter by | [optional]  |
 **ids** | **[String]** | Comma separated Topic IDs to filter by. Cannot be used with other filters. Maximum of 50 IDs allowed. | [optional]  |
 **dialects** | **[String]** | Comma separated dialect strings to filter by. Maximum of 15 dialects allowed. | [optional] <br />**Values**: en-US, es-US, en-AU, en-GB, en-ZA, es-ES, en-IN, fr-FR, fr-CA, it-IT, de-DE, pt-BR, pl-PL, pt-PT, nl-NL, ko-KR |
 **sortBy** | **String** | Sort results by. Defaults to name | [optional] <br />**Values**: name, matchingType |
 **sortOrder** | **String** | Sort order. Defaults to asc | [optional] <br />**Values**: asc, desc |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TopicsEntityListing**


## getSpeechandtextanalyticsTopicsDialects

> EntityListing getSpeechandtextanalyticsTopicsDialects(opts)


GET /api/v2/speechandtextanalytics/topics/dialects

Get list of supported Speech and Text Analytics topics dialects

Requires NO permissions:

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsTopicsDialects(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsTopicsDialects success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsTopicsDialects');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**EntityListing**


## getSpeechandtextanalyticsTopicsGeneral

> GeneralTopicsEntityListing getSpeechandtextanalyticsTopicsGeneral(opts)


GET /api/v2/speechandtextanalytics/topics/general

Get the Speech and Text Analytics general topics for a given dialect

Requires ALL permissions:

* speechAndTextAnalytics:topic:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'dialect': "dialect_example", // String | The dialect of the general topics, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsTopicsGeneral(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsTopicsGeneral success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsTopicsGeneral');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dialect** | **String** | The dialect of the general topics, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard | [optional] <br />**Values**: ar-001, ar-AE, ar-BH, ar-EG, ar-IL, ar-SA, ar-TN, da-DK, de-CH, de-DE, en-AU, en-GB, en-HK, en-IE, en-IN, en-NZ, en-SG, en-US, en-ZA, es-ES, es-US, fi-FI, fr-CA, fr-FR, he-IL, hi-IN, it-IT, ja-JP, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, sv-SE, tr-TR, zh-CN, zh-HK, zh-TW, zu-ZA |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GeneralTopicsEntityListing**


## getSpeechandtextanalyticsTopicsGeneralStatus

> UnifiedGeneralTopicEntityListing getSpeechandtextanalyticsTopicsGeneralStatus(opts)


GET /api/v2/speechandtextanalytics/topics/general/status

Get the list of general topics from the org and the system with their current status

Requires ALL permissions:

* speechAndTextAnalytics:topic:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let opts = { 
  'dialect': "dialect_example", // String | The dialect of the general topics, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsTopicsGeneralStatus(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsTopicsGeneralStatus success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsTopicsGeneralStatus');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dialect** | **String** | The dialect of the general topics, dialect format is {language}-{country} where language follows ISO 639-1 standard and country follows ISO 3166-1 alpha 2 standard | [optional] <br />**Values**: ar-001, ar-AE, ar-BH, ar-EG, ar-IL, ar-SA, ar-TN, da-DK, de-CH, de-DE, en-AU, en-GB, en-HK, en-IE, en-IN, en-NZ, en-SG, en-US, en-ZA, es-ES, es-US, fi-FI, fr-CA, fr-FR, he-IL, hi-IN, it-IT, ja-JP, ko-KR, nb-NO, nl-NL, pl-PL, pt-BR, pt-PT, sv-SE, tr-TR, zh-CN, zh-HK, zh-TW, zu-ZA |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**UnifiedGeneralTopicEntityListing**


## getSpeechandtextanalyticsTopicsGeneratedphrasesJob

> GenAIPhrasesJob getSpeechandtextanalyticsTopicsGeneratedphrasesJob(jobId, opts)


GET /api/v2/speechandtextanalytics/topics/generatedphrases/jobs/{jobId}

Get a Speech and Text Analytics GenAI phrases job by id

Requires ALL permissions:

* speechAndTextAnalytics:topic:addAIPhrases

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let jobId = "jobId_example"; // String | the id of the GenAI phrases job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsTopicsGeneratedphrasesJob(jobId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsTopicsGeneratedphrasesJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsTopicsGeneratedphrasesJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | the id of the GenAI phrases job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GenAIPhrasesJob**


## getSpeechandtextanalyticsTopicsPublishjob

> TopicJob getSpeechandtextanalyticsTopicsPublishjob(jobId, opts)


GET /api/v2/speechandtextanalytics/topics/publishjobs/{jobId}

Get a Speech and Text Analytics publish topics job by id

Requires ALL permissions:

* speechAndTextAnalytics:topic:publish

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let jobId = "jobId_example"; // String | The id of the publish topics job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsTopicsPublishjob(jobId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsTopicsPublishjob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsTopicsPublishjob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | The id of the publish topics job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TopicJob**


## getSpeechandtextanalyticsTopicsTestphraseJob

> TestTopicPhraseJob getSpeechandtextanalyticsTopicsTestphraseJob(jobId, opts)


GET /api/v2/speechandtextanalytics/topics/testphrase/jobs/{jobId}

Get a Speech and Text Analytics test topics phrase job by id

Requires ALL permissions:

* speechAndTextAnalytics:topic:testPhrase

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let jobId = "jobId_example"; // String | the id of the test topic phrase job
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsTopicsTestphraseJob(jobId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsTopicsTestphraseJob success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsTopicsTestphraseJob');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **jobId** | **String** | the id of the test topic phrase job |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TestTopicPhraseJob**


## getSpeechandtextanalyticsTranslationsLanguageConversation

> CommunicationTranslationList getSpeechandtextanalyticsTranslationsLanguageConversation(languageId, conversationId, opts)


GET /api/v2/speechandtextanalytics/translations/languages/{languageId}/conversations/{conversationId}

Translate a single interaction recording (or an email conversation)

Requires ALL permissions:

* speechAndTextAnalytics:translation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let languageId = "languageId_example"; // String | Target translation language
let conversationId = "conversationId_example"; // String | Conversation id
let opts = { 
  'communicationId': "communicationId_example", // String | Communication id associated with the conversation. Please provide a valid communicationId when requesting non-email interactions.
  'recordingId': "recordingId_example", // String | Recording id associated with the communication. Please provide a valid recordingId when requesting voice interactions.
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsTranslationsLanguageConversation(languageId, conversationId, opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsTranslationsLanguageConversation success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsTranslationsLanguageConversation');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **languageId** | **String** | Target translation language |  |
 **conversationId** | **String** | Conversation id |  |
 **communicationId** | **String** | Communication id associated with the conversation. Please provide a valid communicationId when requesting non-email interactions. | [optional]  |
 **recordingId** | **String** | Recording id associated with the communication. Please provide a valid recordingId when requesting voice interactions. | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**CommunicationTranslationList**


## getSpeechandtextanalyticsTranslationsLanguages

> TranslateSupportedLanguageList getSpeechandtextanalyticsTranslationsLanguages(opts)


GET /api/v2/speechandtextanalytics/translations/languages

Get supported translation languages

Requires ALL permissions:

* speechAndTextAnalytics:translation:view

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.getSpeechandtextanalyticsTranslationsLanguages(opts)
  .then((data) => {
    console.log(`getSpeechandtextanalyticsTranslationsLanguages success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling getSpeechandtextanalyticsTranslationsLanguages');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TranslateSupportedLanguageList**


## patchSpeechandtextanalyticsSettings

> SpeechTextAnalyticsSettingsResponse patchSpeechandtextanalyticsSettings(body, opts)


PATCH /api/v2/speechandtextanalytics/settings

Patch Speech And Text Analytics Settings

Requires ALL permissions:

* speechAndTextAnalytics:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | Speech And Text Analytics Settings
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.patchSpeechandtextanalyticsSettings(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SpeechTextAnalyticsSettingsResponse**


## postSpeechandtextanalyticsCategories

> StaCategory postSpeechandtextanalyticsCategories(body, opts)


POST /api/v2/speechandtextanalytics/categories

Create new Speech and Text Analytics category

Requires ALL permissions:

* speechAndTextAnalytics:category:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The category to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsCategories(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsCategories success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsCategories');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The category to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**StaCategory**


## postSpeechandtextanalyticsDictionaryfeedback

> DictionaryFeedback postSpeechandtextanalyticsDictionaryfeedback(body, opts)


POST /api/v2/speechandtextanalytics/dictionaryfeedback

Create a Speech and Text Analytics DictionaryFeedback

Requires ALL permissions:

* speechAndTextAnalytics:dictionaryterm:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The DictionaryFeedback to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsDictionaryfeedback(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsDictionaryfeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsDictionaryfeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The DictionaryFeedback to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DictionaryFeedback**


## postSpeechandtextanalyticsPrograms

> Program postSpeechandtextanalyticsPrograms(body, opts)


POST /api/v2/speechandtextanalytics/programs

Create new Speech and Text Analytics program

Requires ALL permissions:

* speechAndTextAnalytics:program:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The program to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsPrograms(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsPrograms success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsPrograms');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The program to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Program**


## postSpeechandtextanalyticsProgramsGeneralJobs

> GeneralProgramJob postSpeechandtextanalyticsProgramsGeneralJobs(body, opts)


POST /api/v2/speechandtextanalytics/programs/general/jobs

Create new Speech and Text Analytics general program job

Requires ALL permissions:

* speechAndTextAnalytics:program:add
* speechAndTextAnalytics:program:edit
* speechAndTextAnalytics:topic:add
* speechAndTextAnalytics:topic:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The general programs job to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsProgramsGeneralJobs(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsProgramsGeneralJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsProgramsGeneralJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The general programs job to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GeneralProgramJob**


## postSpeechandtextanalyticsProgramsPublishjobs

> ProgramJob postSpeechandtextanalyticsProgramsPublishjobs(body, opts)


POST /api/v2/speechandtextanalytics/programs/publishjobs

Create new Speech and Text Analytics publish programs job

Requires ALL permissions:

* speechAndTextAnalytics:program:publish

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The publish programs job to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsProgramsPublishjobs(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsProgramsPublishjobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsProgramsPublishjobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The publish programs job to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ProgramJob**


## postSpeechandtextanalyticsReprocessingJobs

> ReprocessJobResponse postSpeechandtextanalyticsReprocessingJobs(body, opts)


POST /api/v2/speechandtextanalytics/reprocessing/jobs

Create a Speech and Text Analytics reprocess job.

postSpeechandtextanalyticsReprocessingJobs is a preview method and is subject to both breaking and non-breaking changes at any time without notice

Requires ALL permissions:

* speechAndTextAnalytics:reprocessInteractions:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The ReprocessJob to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsReprocessingJobs(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsReprocessingJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsReprocessingJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The ReprocessJob to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ReprocessJobResponse**


## postSpeechandtextanalyticsSentimentfeedback

> SentimentFeedback postSpeechandtextanalyticsSentimentfeedback(body, opts)


POST /api/v2/speechandtextanalytics/sentimentfeedback

Create a Speech and Text Analytics SentimentFeedback

Requires ALL permissions:

* speechAndTextAnalytics:feedback:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The SentimentFeedback to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsSentimentfeedback(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsSentimentfeedback success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsSentimentfeedback');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The SentimentFeedback to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SentimentFeedback**


## postSpeechandtextanalyticsTopics

> Topic postSpeechandtextanalyticsTopics(body, opts)


POST /api/v2/speechandtextanalytics/topics

Create new Speech and Text Analytics topic

Requires ALL permissions:

* speechAndTextAnalytics:topic:add

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The topic to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsTopics(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Topic**


## postSpeechandtextanalyticsTopicsGeneratedphrasesJobs

> GenAIPhrasesJobs postSpeechandtextanalyticsTopicsGeneratedphrasesJobs(body, opts)


POST /api/v2/speechandtextanalytics/topics/generatedphrases/jobs

Create new Speech and Text Analytics GenAI topic phrases generation job

Requires ALL permissions:

* speechAndTextAnalytics:topic:addAIPhrases

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The GenAI topic phrases generation job to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsTopicsGeneratedphrasesJobs(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsTopicsGeneratedphrasesJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsTopicsGeneratedphrasesJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The GenAI topic phrases generation job to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**GenAIPhrasesJobs**


## postSpeechandtextanalyticsTopicsPublishjobs

> TopicJob postSpeechandtextanalyticsTopicsPublishjobs(body, opts)


POST /api/v2/speechandtextanalytics/topics/publishjobs

Create new Speech and Text Analytics publish topics job

Requires ALL permissions:

* speechAndTextAnalytics:topic:publish

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The publish topics job to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsTopicsPublishjobs(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsTopicsPublishjobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsTopicsPublishjobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The publish topics job to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TopicJob**


## postSpeechandtextanalyticsTopicsTestphraseJobs

> TestTopicPhraseJobs postSpeechandtextanalyticsTopicsTestphraseJobs(body, opts)


POST /api/v2/speechandtextanalytics/topics/testphrase/jobs

Create new Speech and Text Analytics test topic phrase job

Requires ALL permissions:

* speechAndTextAnalytics:topic:testPhrase

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | The publish test topic phrase job to create
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsTopicsTestphraseJobs(body, opts)
  .then((data) => {
    console.log(`postSpeechandtextanalyticsTopicsTestphraseJobs success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling postSpeechandtextanalyticsTopicsTestphraseJobs');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | The publish test topic phrase job to create |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TestTopicPhraseJobs**


## postSpeechandtextanalyticsTranscriptsSearch

> JsonSearchResponse postSpeechandtextanalyticsTranscriptsSearch(body, opts)


POST /api/v2/speechandtextanalytics/transcripts/search

Search resources.

Requires ANY permissions:

* analytics:conversationDetail:view
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

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | Search request options
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.postSpeechandtextanalyticsTranscriptsSearch(body, opts)
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
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**JsonSearchResponse**


## putSpeechandtextanalyticsCategory

> StaCategory putSpeechandtextanalyticsCategory(categoryId, body, opts)


PUT /api/v2/speechandtextanalytics/categories/{categoryId}

Update a Speech and Text Analytics category by ID

Requires ALL permissions:

* speechAndTextAnalytics:category:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let categoryId = "categoryId_example"; // String | The id of the category
let body = {}; // Object | The updated category
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putSpeechandtextanalyticsCategory(categoryId, body, opts)
  .then((data) => {
    console.log(`putSpeechandtextanalyticsCategory success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSpeechandtextanalyticsCategory');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **categoryId** | **String** | The id of the category |  |
 **body** | **Object** | The updated category |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**StaCategory**


## putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId

> DictionaryFeedback putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(dictionaryFeedbackId, opts)


PUT /api/v2/speechandtextanalytics/dictionaryfeedback/{dictionaryFeedbackId}

Update existing Speech and Text Analytics dictionary feedback by id

Requires ALL permissions:

* speechAndTextAnalytics:dictionaryterm:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let dictionaryFeedbackId = "dictionaryFeedbackId_example"; // String | The Id of the Dictionary Feedback
let opts = { 
  'body': {}, // Object | 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId(dictionaryFeedbackId, opts)
  .then((data) => {
    console.log(`putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSpeechandtextanalyticsDictionaryfeedbackDictionaryFeedbackId');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **dictionaryFeedbackId** | **String** | The Id of the Dictionary Feedback |  |
 **body** | **Object** |  | [optional]  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**DictionaryFeedback**


## putSpeechandtextanalyticsProgram

> Program putSpeechandtextanalyticsProgram(programId, body, opts)


PUT /api/v2/speechandtextanalytics/programs/{programId}

Update existing Speech and Text Analytics program

Requires ALL permissions:

* speechAndTextAnalytics:program:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let programId = "programId_example"; // String | The id of the program
let body = {}; // Object | The program to update
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putSpeechandtextanalyticsProgram(programId, body, opts)
  .then((data) => {
    console.log(`putSpeechandtextanalyticsProgram success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSpeechandtextanalyticsProgram');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | The id of the program |  |
 **body** | **Object** | The program to update |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Program**


## putSpeechandtextanalyticsProgramMappings

> TopicsDefinitionsProgramMappings putSpeechandtextanalyticsProgramMappings(programId, body, opts)


PUT /api/v2/speechandtextanalytics/programs/{programId}/mappings

Set Speech and Text Analytics program mappings to queues and flows

Requires ALL permissions:

* speechAndTextAnalytics:program:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let programId = "programId_example"; // String | The id of the program
let body = {}; // Object | The program to set mappings for
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putSpeechandtextanalyticsProgramMappings(programId, body, opts)
  .then((data) => {
    console.log(`putSpeechandtextanalyticsProgramMappings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSpeechandtextanalyticsProgramMappings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | The id of the program |  |
 **body** | **Object** | The program to set mappings for |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**TopicsDefinitionsProgramMappings**


## putSpeechandtextanalyticsProgramSettingsInsights

> ProgramInsightsSettings putSpeechandtextanalyticsProgramSettingsInsights(programId, body, opts)


PUT /api/v2/speechandtextanalytics/programs/{programId}/settings/insights

Update AI Insights settings of a program

Requires ALL permissions:

* speechAndTextAnalytics:program:edit
* speechAndTextAnalytics:insightsSettings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let programId = "programId_example"; // String | The id of the program
let body = {}; // Object | Program AI Insights setting
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putSpeechandtextanalyticsProgramSettingsInsights(programId, body, opts)
  .then((data) => {
    console.log(`putSpeechandtextanalyticsProgramSettingsInsights success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSpeechandtextanalyticsProgramSettingsInsights');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | The id of the program |  |
 **body** | **Object** | Program AI Insights setting |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ProgramInsightsSettings**


## putSpeechandtextanalyticsProgramTranscriptionengines

> ProgramTranscriptionEngines putSpeechandtextanalyticsProgramTranscriptionengines(programId, body, opts)


PUT /api/v2/speechandtextanalytics/programs/{programId}/transcriptionengines

Update transcription engine settings of a program

Requires ALL permissions:

* speechAndTextAnalytics:program:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let programId = "programId_example"; // String | The id of the program
let body = {}; // Object | Program transcription engine setting
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putSpeechandtextanalyticsProgramTranscriptionengines(programId, body, opts)
  .then((data) => {
    console.log(`putSpeechandtextanalyticsProgramTranscriptionengines success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSpeechandtextanalyticsProgramTranscriptionengines');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **programId** | **String** | The id of the program |  |
 **body** | **Object** | Program transcription engine setting |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**ProgramTranscriptionEngines**


## putSpeechandtextanalyticsSettings

> SpeechTextAnalyticsSettingsResponse putSpeechandtextanalyticsSettings(body, opts)


PUT /api/v2/speechandtextanalytics/settings

Update Speech And Text Analytics Settings

Requires ALL permissions:

* speechAndTextAnalytics:settings:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let body = {}; // Object | Speech And Text Analytics Settings
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putSpeechandtextanalyticsSettings(body, opts)
  .then((data) => {
    console.log(`putSpeechandtextanalyticsSettings success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSpeechandtextanalyticsSettings');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **body** | **Object** | Speech And Text Analytics Settings |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**SpeechTextAnalyticsSettingsResponse**


## putSpeechandtextanalyticsTopic

> Topic putSpeechandtextanalyticsTopic(topicId, body, opts)


PUT /api/v2/speechandtextanalytics/topics/{topicId}

Update existing Speech and Text Analytics topic

Requires ALL permissions:

* speechAndTextAnalytics:topic:edit

### Example Usage

```{"language":"javascript"}
// Browser
const platformClient = require('platformClient');
// Node
const platformClient = require('purecloud-platform-client-v2');

// Manually set auth token or use loginImplicitGrant(...) or loginClientCredentialsGrant(...) or loginPKCEGrant(...)
platformClient.ApiClient.instance.setAccessToken(yourAccessToken);

let apiInstance = new platformClient.SpeechTextAnalyticsApi();

let topicId = "topicId_example"; // String | The id of the topic
let body = {}; // Object | The topic to update
let opts = { 
  'customHeaders': {  // Object.<string, string> | Request Custom Headers
    'X-Service-Name': 'customer-service',
    'X-Request-ID': 'req-12345'
  }
};

apiInstance.putSpeechandtextanalyticsTopic(topicId, body, opts)
  .then((data) => {
    console.log(`putSpeechandtextanalyticsTopic success! data: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((err) => {
    console.log('There was a failure calling putSpeechandtextanalyticsTopic');
    console.error(err);
  });
```

### Parameters


| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
 **topicId** | **String** | The id of the topic |  |
 **body** | **Object** | The topic to update |  |
 **customHeaders** | **Object.<string, string>** | Request Custom Headers | [optional] |

### Return type

**Topic**


_purecloud-platform-client-v2@259.0.0_
